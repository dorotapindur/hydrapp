!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=2)}([function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var r=function(){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}))}},function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(1);var r=o(0);Object(r.a)(),console.log("HELLO 🚀");var n=document.querySelector(".counter--js"),a=document.querySelector(".add--js"),c=document.querySelector(".remove--js"),l=document.querySelector(".date--js"),i=0,s=new Date,u=s.getDate(),d=s.getMonth()+1;u<10&&(u="0"+u),d<10&&(d="0"+d);var v=u+"."+d+"."+s.getFullYear();console.log("".concat(v)),l.innerHTML="".concat(v);var f=localStorage.getItem(v);if(f){i=parseInt(f);var g=0,m=setInterval((function(){n.innerHTML="".concat(g),console.log("licznik: ".concat(g)),g>=i&&clearInterval(m),g++}),50);console.log("ilość szklanek = ".concat(i))}else n.innerHTML="".concat(i),console.log("ilość szklanek = ".concat(i)),localStorage.setItem(v,i);i>0&&document.querySelector(".water--js").style.setProperty("display","block");a.addEventListener("click",(function(e){i+=1,n.innerHTML="".concat(i),console.log("Dodano 1 szklankę. Ilość szklanek = ".concat(i)),localStorage.setItem(v,i);var t=document.querySelector(".water--js");t.classList.remove("water-animation-remove"),t.classList.remove("water-animation-disappear"),t.classList.add("water-animation-add");var o=t.cloneNode(!0);t.parentNode.replaceChild(o,t)})),c.addEventListener("click",(function(){if(i>0)if(i-=1,n.innerHTML="".concat(i),console.log("Odjęto 1 szklankę. Ilość szklanek = ".concat(i)),localStorage.setItem(v,i),0==i){var e=document.querySelector(".water--js");e.classList.remove("water-animation-remove"),e.classList.remove("water-animation-add"),e.classList.add("water-animation-disappear")}else{var t=document.querySelector(".water--js");t.classList.remove("water-animation-add"),t.classList.add("water-animation-remove");var o=t.cloneNode(!0);t.parentNode.replaceChild(o,t)}}));for(var p=Object.keys(localStorage),k=0;k<p.length;k++)"loglevel:webpack-dev-server"!=p[k]&&console.log("klucze local storage: ".concat(p[k]));for(var y=Object.values(localStorage),S=0;S<y.length;S++)"INFO"!=y[S]&&console.log("wartości local storage: ".concat(y[S]))}]);