parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"AaGI":[function(require,module,exports) {
var e="precache-v1.0.0",n="runtime",t=["./","index.html","app.c0e5f9db.js","app.c0e5f9db.css"];self.addEventListener("install",function(n){n.waitUntil(caches.open(e).then(function(e){return e.addAll(t)}).then(self.skipWaiting()))}),self.addEventListener("activate",function(t){var c=[e,n];t.waitUntil(caches.keys().then(function(e){return e.filter(function(e){return!c.includes(e)})}).then(function(e){return Promise.all(e.map(function(e){return caches.delete(e)}))}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){e.request.url.startsWith(self.location.origin)&&e.respondWith(caches.match(e.request).then(function(t){return t||caches.open(n).then(function(n){return fetch(e.request).then(function(t){return n.put(e.request,t.clone()).then(function(){return t})})})}))});
},{}]},{},["AaGI"], null)