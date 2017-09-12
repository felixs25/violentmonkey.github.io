(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports):'function'==typeof define&&define.amd?define(['exports'],b):b(a.donate=a.donate||{})})(this,function(a){'use strict';function b(a){var b=a&&Object.keys(a),c=b&&b.map(function(b){return encodeURIComponent(b)+'='+encodeURIComponent(a[b])}).join('&');return c?'?'+c:''}function c(a,b){var c=document.createElement(a);return b&&Object.keys(b).forEach(function(a){c[a]=b[a]}),c}/**
 * @param {Object} options
 *   - account: {String} email address
 */function d(a){var c={cmd:'_donations',no_shipping:1,lc:'US',currency_code:'USD',business:a.account},d='https://www.paypal.com/cgi-bin/webscr'+b(c);return{image:a.image,text:a.text||'PayPal',onClick:function(){window.open(d)}}}/**
 * @param {Object} options
 *   - qrcode: {String} | {HTMLElement}
 */function e(a){var b=a.qrcode;if('string'==typeof b){var d=b;b=new Image,b.src=d}var e=c('div',{className:'donate-qrcode'});return e.appendChild(b),{image:a.image,text:a.text,onClick:function(a){a.popup(e)}}}function f(a){return e(i({text:'AliPay'},a))}function g(a){return e(i({text:'WeChat Pay'},a))}/**
 * @param {Object} options
 *   - el: container element
 *   - paypal: {URL} paypal
 *
 */function h(a){function b(a){a?(e.classList.add('donate-popup-active'),'string'==typeof a?r.innerHTML=a:(r.innerHTML='',r.appendChild(a))):e.classList.remove('donate-popup-active')}var e=a.el,h=a.paypal,i=a.alipay,j=a.wechatpay,k=a.logo,l={popup:b};'string'==typeof e&&(e=document.querySelector(e)),e.classList.add('donate-widget');var m=c('div',{className:'donate-wrap'});if(e.appendChild(m),k&&k.image){var n=c('div',{className:'donate-logo'});if(n.appendChild(c('img',{src:k.image})),k.text){var o=c('div');o.textContent=k.text,n.appendChild(o)}m.appendChild(n)}var p=c('div',{className:'donate-panel'});m.appendChild(p);var q=[];h&&q.push(d(h)),i&&q.push(f(i)),j&&q.push(g(j)),q.forEach(function(a){var b,d=c('div',{className:'donate-item'});a.image?b=c('img',{src:a.image}):(b=c('span'),b.textContent=a.text),d.appendChild(b),a.onClick&&d.addEventListener('click',function(){a.onClick(l)},!1),p.appendChild(d)});var r=c('div',{className:'donate-popup'});return e.appendChild(r),r.addEventListener('click',function(){b()},!1),l}var i=Object.assign;a.initJQuery=function(a){if(a=a||window.$,!a)throw new Error('jQuery not found!');a.fn.initDonate=function(a){var b=this[0];return h(i({el:b},a))}},a.initDonate=h,Object.defineProperty(a,'__esModule',{value:!0})});