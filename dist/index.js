"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=a(function(g,t){
var y=require('@stdlib/blas-ext-base-ssumkbn/dist').ndarray;function f(e,r,s,d){return y(e,r,s,d)}t.exports=f
});var v=a(function(h,n){
var p=require('@stdlib/strided-base-stride2offset/dist'),x=i();function j(e,r,s){return x(e,r,s,p(e,s))}n.exports=j
});var m=a(function(w,o){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=i();l(q,"ndarray",R);o.exports=q
});var _=require("path").join,b=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),E=m(),u,c=b(_(__dirname,"./native.js"));k(c)?u=E:u=c;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
