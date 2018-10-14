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
    "url": "webpack-runtime-800025dfe40b3c9d75d6.js"
  },
  {
    "url": "app-8499dc055da52b4f4b14.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-344346a219157da0ed2c.js"
  },
  {
    "url": "index.html",
    "revision": "7875e72fd293f616194f961a00d66a1a"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3044d0857225ded2f07b50f4294ed801"
  },
  {
    "url": "component---src-pages-index-jsx.8b55539022c1950376c2.css"
  },
  {
    "url": "component---src-pages-index-jsx-e6d595b6aa0d315ae2eb.js"
  },
  {
    "url": "0-94ab2bdeb6f56f548876.js"
  },
  {
    "url": "static/d/804/path---index-6a9-scvgwdFhd3Wm7qxz0GfuqASuuI0.json",
    "revision": "030e3b5649e7b65e21ce265b46b41103"
  },
  {
    "url": "component---src-pages-404-jsx.2fc33404e07e77f89a71.css"
  },
  {
    "url": "component---src-pages-404-jsx-a6ca309f0d2d3fa0a8cb.js"
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