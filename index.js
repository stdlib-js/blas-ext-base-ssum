// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).ssum=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,e){var n,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,t)||f.call(r,t)?(n=r.__proto__,r.__proto__=o,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r};var l=e;function y(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=/./;function s(r){return"boolean"==typeof r}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var m,_="function"==typeof Symbol?Symbol.toStringTag:"";m=v()?function(r){var t,e,n,o,u;if(null==r)return d.call(r);e=r[_],u=_,t=null!=(o=r)&&j.call(o,u);try{r[_]=void 0}catch(t){return d.call(r)}return n=d.call(r),t?r[_]=e:delete r[_],n}:function(r){return d.call(r)};var g=m,w=Boolean.prototype.toString;var h=v();function O(r){return"object"==typeof r&&(r instanceof Boolean||(h?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===g(r)))}function A(r){return s(r)||O(r)}function E(){return new Function("return this;")()}y(A,"isPrimitive",s),y(A,"isObject",O);var S="object"==typeof self?self:null,F="object"==typeof window?window:null,P="object"==typeof global?global:null;var T=function(r){if(arguments.length){if(!s(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return E()}if(S)return S;if(F)return F;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),B=T.document&&T.document.childNodes,q=Int8Array;function I(){return/^\s*function\s*([^(]*)/i}var x,M=/^\s*function\s*([^(]*)/i;y(I,"REGEXP",M),x=Array.isArray?Array.isArray:function(r){return"[object Array]"===g(r)};var N=x;function V(r){return null!==r&&"object"==typeof r}var k=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!N(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(V);function C(r){var t,e,n,o;if(("Object"===(e=g(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=M.exec(n.toString()))return t[1]}return V(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}y(V,"isObjectLikeArray",k);var G="function"==typeof p||"object"==typeof q||"function"==typeof B?function(r){return C(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?C(r).toLowerCase():t};var L,R,$=Object.getPrototypeOf;R=Object.getPrototypeOf,L="function"===G(R)?$:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===g(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var D=L;function J(r){return null==r?null:(r=Object(r),D(r))}function U(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===g(r))return!0;r=J(r)}return!1}var X="function"==typeof Math.fround?Math.fround:null,Y="function"==typeof Float32Array;var z=Number.POSITIVE_INFINITY,H="function"==typeof Float32Array?Float32Array:null;var K,Q="function"==typeof Float32Array?Float32Array:void 0;K=function(){var r,t;if("function"!=typeof H)return!1;try{r=function(r){return Y&&r instanceof Float32Array||"[object Float32Array]"===g(r)}(t=new H([1,3.14,-3.14,5e40]))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===z}catch(t){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var W=new K(1);var Z="function"==typeof X?X:function(r){return W[0]=r,W[0]};function rr(r){return Math.abs(r)}function tr(r,t,e){var n,o,u,i,a,c;if(r<=0)return 0;if(1===r||0===e)return t[0];for(o=e<0?(1-r)*e:0,n=0,a=0,c=0;c<r;c++)u=t[o],i=Z(n+u),a=rr(n)>=rr(u)?Z(a+Z(Z(n-i)+u)):Z(a+Z(Z(u-i)+n)),n=i,o+=e;return Z(n+a)}y(tr,"ndarray",(function(r,t,e,n){var o,u,i,a,c,f;if(r<=0)return 0;if(1===r||0===e)return t[n];for(u=n,o=0,c=0,f=0;f<r;f++)i=t[u],a=Z(o+i),c=rr(o)>=rr(i)?Z(c+Z(Z(o-a)+i)):Z(c+Z(Z(i-a)+o)),o=a,u+=e;return Z(o+c)}));var er,nr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return U(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),or=er=U(nr)?tr:nr;const{ndarray:ur}=er;function ir(r,t,e){return or(r,t,e)}return y(ir,"ndarray",(function(r,t,e,n){return ur(r,t,e,n)})),ir}));
//# sourceMappingURL=index.js.map
