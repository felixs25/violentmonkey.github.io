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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

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
    "url": "webpack-runtime-f67d203c25de4b070305.js"
  },
  {
    "url": "app-d5a24a0f560d07fd1866.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a8ad3523b7f81489309c.js"
  },
  {
    "url": "index.html",
    "revision": "6692a2c189daaf143f7a3a1d6536de37"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "63c86fc9803349a12190550b43bdaf7f"
  },
  {
    "url": "component---src-pages-index-jsx.8b55539022c1950376c2.css"
  },
  {
    "url": "component---src-pages-index-jsx-7745d5128e54865e5fa8.js"
  },
  {
    "url": "0-89c7451913a9de410ffd.js"
  },
  {
    "url": "static/d/804/path---index-6a9-scvgwdFhd3Wm7qxz0GfuqASuuI0.json",
    "revision": "030e3b5649e7b65e21ce265b46b41103"
  },
  {
    "url": "component---src-pages-404-jsx.2fc33404e07e77f89a71.css"
  },
  {
    "url": "component---src-pages-404-jsx-f4e2ef4a0799a41339c8.js"
  },
  {
    "url": "static/d/585/path---404-html-516-62a-w44iIoGttDsvhUadt4JPNHFjA.json",
    "revision": "b4412746406a2799dea7512ad85f4f0b"
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

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});