"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(O,a){
var p=require('@stdlib/blas-ext-base-ssumkbn/dist');function y(e,r,s){return p(e,r,s)}a.exports=y
});var v=u(function(g,n){
var x=require('@stdlib/blas-ext-base-ssumkbn/dist').ndarray;function f(e,r,s,d){return x(e,r,s,d)}n.exports=f
});var o=u(function(h,m){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=t(),b=v();j(q,"ndarray",b);m.exports=q
});var k=require("path").join,l=require('@stdlib/utils-try-require/dist'),R=require('@stdlib/assert-is-error/dist'),_=o(),i,c=l(k(__dirname,"./native.js"));R(c)?i=_:i=c;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
