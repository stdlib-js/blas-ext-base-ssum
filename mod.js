// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,t,n){var c,l,s,y;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),s="get"in n,y="set"in n,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(r,t,n.get),y&&i&&i.call(r,t,n.set),r};var c=t;function l(r,t,n){c(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r){var t=function(r){return"/"===r.charAt(0)}(r),n="/"===p(r,-1);return(r=function(r,t){for(var n=0,e=r.length-1;e>=0;e--){var o=r[e];"."===o?r.splice(e,1):".."===o?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}(y(r.split("/"),(function(r){return!!r})),!t).join("/"))||t||(r="."),r&&n&&(r+="/"),(t?"/":"")+r}function y(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}var p="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)},b=/./;function v(r){return"boolean"==typeof r}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function j(){return d&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;var g,m="function"==typeof Symbol?Symbol.toStringTag:"";g=j()?function(r){var t,n,e,o,u;if(null==r)return w.call(r);n=r[m],u=m,t=null!=(o=r)&&_.call(o,u);try{r[m]=void 0}catch(t){return w.call(r)}return e=w.call(r),t?r[m]=n:delete r[m],e}:function(r){return w.call(r)};var h=g,A=Boolean.prototype.toString;var O=j();function E(r){return"object"==typeof r&&(r instanceof Boolean||(O?function(r){try{return A.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===h(r)))}function S(r){return v(r)||E(r)}function F(){return new Function("return this;")()}l(S,"isPrimitive",v),l(S,"isObject",E);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,x="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof x?x:null;var I=function(r){if(arguments.length){if(!v(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return F()}if(P)return P;if(T)return T;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),k=I.document&&I.document.childNodes,M=Int8Array;function N(){return/^\s*function\s*([^(]*)/i}var V,C=/^\s*function\s*([^(]*)/i;l(N,"REGEXP",C),V=Array.isArray?Array.isArray:function(r){return"[object Array]"===h(r)};var G=V;function L(r){return null!==r&&"object"==typeof r}var q=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!G(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(L);function J(r){var t,n,e,o;if(("Object"===(n=h(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=C.exec(e.toString()))return t[1]}return L(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}l(L,"isObjectLikeArray",q);var R="function"==typeof b||"object"==typeof M||"function"==typeof k?function(r){return J(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?J(r).toLowerCase():t};var U,X,Y=Object.getPrototypeOf;X=Object.getPrototypeOf,U="function"===R(X)?Y:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===h(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var z=U;function D(r){return null==r?null:(r=Object(r),z(r))}function H(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===h(r))return!0;r=D(r)}return!1}var K="function"==typeof Math.fround?Math.fround:null,Q="function"==typeof Float32Array;var W=Number.POSITIVE_INFINITY,Z="function"==typeof Float32Array?Float32Array:null;var $,rr="function"==typeof Float32Array?Float32Array:void 0;$=function(){var r,t;if("function"!=typeof Z)return!1;try{r=function(r){return Q&&r instanceof Float32Array||"[object Float32Array]"===h(r)}(t=new Z([1,3.14,-3.14,5e40]))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===W}catch(t){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var tr=new $(1);var nr,er="function"==typeof K?K:function(r){return tr[0]=r,tr[0]};function or(r){return Math.abs(r)}function ur(r,t,n){var e,o,u,i,f,a;if(r<=0)return 0;if(1===r||0===n)return t[0];for(o=n<0?(1-r)*n:0,e=0,f=0,a=0;a<r;a++)u=t[o],i=er(e+u),f=or(e)>=or(u)?er(f+er(er(e-i)+u)):er(f+er(er(u-i)+e)),e=i,o+=n;return er(e+f)}l(ur,"ndarray",(function(r,t,n,e){var o,u,i,f,a,c;if(r<=0)return 0;if(1===r||0===n)return t[e];for(u=e,o=0,a=0,c=0;c<r;c++)i=t[u],f=er(o+i),a=or(o)>=or(i)?er(a+er(er(o-f)+i)):er(a+er(er(i-f)+o)),o=f,u+=n;return er(o+a)}));var ir=function(r){try{return require(r)}catch(r){return H(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}(function(){var r=Array.prototype.slice.call(arguments,0);return s(y(r,(function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}("/home/runner/work/blas-ext-base-ssum/blas-ext-base-ssum/node_modules/@stdlib/blas-ext-base-ssumkbn/lib","./native.js")),fr=nr=H(ir)?ur:ir;const{ndarray:ar}=nr;function cr(r,t,n){return fr(r,t,n)}function lr(r,t,n,e){return ar(r,t,n,e)}l(cr,"ndarray",lr);export{cr as default,lr as ndarray};
//# sourceMappingURL=mod.js.map
