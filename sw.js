/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-7a035fe626f071f978bf.js"
  },
  {
    "url": "app-2605c32fefb53af6bef3.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-93d2466c865662915fb8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5a4bab4c0854e4bae1b9b7a6593e7146"
  },
  {
    "url": "component---src-pages-404-js.062c4ce262b8a69f67fe.css"
  },
  {
    "url": "component---src-pages-404-js-e1f4da7b253d0533ecf1.js"
  },
  {
    "url": "0-b1c1824f5a88f8dcfc23.js"
  },
  {
    "url": "static/d/838/path---404-html-516-62a-ioS1wtahUM0j4oJulUET3fDVO4.json",
    "revision": "c28d4ec6e3001c0a288ba21e41c6ced2"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "49c65cb8f2df42994bb64fae91cdf2ec"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|\/static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');
"use strict";

/* global importScripts, workbox, idbKeyval */
importScripts("idb-keyval-iife.min.js");
var WHITELIST_KEY = "custom-navigation-whitelist";
var navigationRoute = new workbox.routing.NavigationRoute(function (_ref) {
  var event = _ref.event;

  var _ref2 = new URL(event.request.url),
      pathname = _ref2.pathname;

  return idbKeyval.get(WHITELIST_KEY).then(function (customWhitelist) {
    if (customWhitelist === void 0) {
      customWhitelist = [];
    }

    // Respond with the offline shell if we match the custom whitelist
    if (customWhitelist.includes(pathname)) {
      var offlineShell = "/offline-plugin-app-shell-fallback/index.html";
      var cacheName = workbox.core.cacheNames.precache;
      return caches.match(offlineShell, {
        cacheName: cacheName
      });
    }

    return fetch(event.request);
  });
});
workbox.routing.registerRoute(navigationRoute);
var updatingWhitelist = null;

function rawWhitelistPathnames(pathnames) {
  if (updatingWhitelist !== null) {
    // Prevent the whitelist from being updated twice at the same time
    return updatingWhitelist.then(function () {
      return rawWhitelistPathnames(pathnames);
    });
  }

  updatingWhitelist = idbKeyval.get(WHITELIST_KEY).then(function (customWhitelist) {
    if (customWhitelist === void 0) {
      customWhitelist = [];
    }

    pathnames.forEach(function (pathname) {
      if (!customWhitelist.includes(pathname)) customWhitelist.push(pathname);
    });
    return idbKeyval.set(WHITELIST_KEY, customWhitelist);
  }).then(function () {
    updatingWhitelist = null;
  });
  return updatingWhitelist;
}

function rawResetWhitelist() {
  if (updatingWhitelist !== null) {
    return updatingWhitelist.then(function () {
      return rawResetWhitelist();
    });
  }

  updatingWhitelist = idbKeyval.set(WHITELIST_KEY, []).then(function () {
    updatingWhitelist = null;
  });
  return updatingWhitelist;
}

var messageApi = {
  whitelistPathnames: function whitelistPathnames(event) {
    var pathnames = event.data.pathnames;
    pathnames = pathnames.map(function (_ref3) {
      var pathname = _ref3.pathname,
          includesPrefix = _ref3.includesPrefix;

      if (!includesPrefix) {
        return "" + pathname;
      } else {
        return pathname;
      }
    });
    event.waitUntil(rawWhitelistPathnames(pathnames));
  },
  resetWhitelist: function resetWhitelist(event) {
    event.waitUntil(rawResetWhitelist());
  }
};
self.addEventListener("message", function (event) {
  var gatsbyApi = event.data.gatsbyApi;
  if (gatsbyApi) messageApi[gatsbyApi](event);
});