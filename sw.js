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
    "url": "webpack-runtime-f3f82f6678468faf53be.js"
  },
  {
    "url": "app-ddd81a295eb93c6d9540.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-344346a219157da0ed2c.js"
  },
  {
    "url": "index.html",
    "revision": "daec70055eaa1fa527d5f690fc7c2d44"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "81bcdece1733196f798b7505c04c10a0"
  },
  {
    "url": "component---src-pages-index-jsx.b61c21984070b5c1fc7b.css"
  },
  {
    "url": "component---src-pages-index-jsx-d3abea1014d87377cab3.js"
  },
  {
    "url": "0-a64e8d4f4e4dcb14e4a9.js"
  },
  {
    "url": "static/d/892/path---index-6a9-Dm6hmg8YSBNvDkLAx55YPmffUo.json",
    "revision": "84f262a72345a36b92c3136b9a827df3"
  },
  {
    "url": "component---src-pages-404-jsx.c9c9b974c2ba78a62e76.css"
  },
  {
    "url": "component---src-pages-404-jsx-a2d65d2a501451a97d3d.js"
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