// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var o=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=t?e+n(i):n(i)+e,o&&(e="-"+e)),e}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=o(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=o(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):i.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var l=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,o=parseFloat(e.arg);if(!isFinite(o)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);o=e.arg}switch(e.specifier){case"e":case"E":n=o.toExponential(e.precision);break;case"f":case"F":n=o.toFixed(e.precision);break;case"g":case"G":l(o)<1e-4?((r=e.precision)>0&&(r-=1),n=o.toExponential(r)):n=o.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,b,"$1.e")),o>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):f.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var E=String.fromCharCode,S=isNaN,x=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,i,a,l,f,s,p;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",f=1,s=0;s<e.length;s++)if(u(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,o;for(t=[],o=0,n=T.exec(e);n;)(r=e.slice(o,T.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),o=T.lastIndex,n=T.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function F(e){return"string"==typeof e}function P(e){var r,t,n;if(!F(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=A(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var C,$=Object.prototype,I=$.toString,B=$.__defineGetter__,N=$.__defineSetter__,R=$.__lookupGetter__,L=$.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(e,r)||L.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(e,r,t.get),a&&N&&N.call(e,r,t.set),e};var G=C;function Z(e,r,t){G(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=/./;function W(e){return"boolean"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,q=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&q.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"",K=X()?function(e){var r,t,n;if(null==e)return z.call(e);t=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[J]=t:delete e[J],n}:function(e){return z.call(e)},Q=Boolean,Y=Boolean.prototype.toString,ee=X();function re(e){return"object"==typeof e&&(e instanceof Q||(ee?function(e){try{return Y.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return W(e)||re(e)}function ne(){return new Function("return this;")()}Z(te,"isPrimitive",W),Z(te,"isObject",re);var oe="object"==typeof self?self:null,ie="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,ce=function(e){if(arguments.length){if(!W(e))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ae)return ae;if(oe)return oe;if(ie)return ie;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=ce.document&&ce.document.childNodes,le=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;Z(fe,"REGEXP",se);var pe=Array.isArray?Array.isArray:function(e){return"[object Array]"===K(e)};function ge(e){return null!==e&&"object"==typeof e}function de(e){var r,t,n,o;if(("Object"===(t=K(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return ge(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Z(ge,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!pe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ge));var ye="function"==typeof M||"object"==typeof le||"function"==typeof ue?function(e){return de(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?de(e).toLowerCase():r};function be(e){return"function"===ye(e)}function he(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&be(e.next)}function ve(e){return"number"==typeof e}var we=Number,me=we.prototype.toString,je=X();function _e(e){return"object"==typeof e&&(e instanceof we||(je?function(e){try{return me.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function Ee(e){return ve(e)||_e(e)}Z(Ee,"isPrimitive",ve),Z(Ee,"isObject",_e);var Se,xe="function"==typeof H&&"symbol"==typeof H("foo")&&D(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null,Oe=Object,ke=Object.getPrototypeOf;Se=be(Object.getPrototypeOf)?ke:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===K(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Te=Se,Ve=Object.prototype;function Ae(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!pe(e)}(e)&&(r=function(e){return null==e?null:(e=Oe(e),Te(e))}(e),!r||!D(e,"constructor")&&D(r,"constructor")&&be(r.constructor)&&"[object Function]"===K(r.constructor)&&D(r,"isPrototypeOf")&&be(r.isPrototypeOf)&&(r===Ve||function(e){var r;for(r in e)if(!D(e,r))return!1;return!0}(e)))}function Fe(e,r){return Ae(r)?(D(r,"invalid")&&(e.invalid=r.invalid),null):new TypeError(P("invalid argument. Options argument must be an object. Value: `%s`.",r))}function Pe(e,r,t){var n,o,i,a;if(!he(e))throw new TypeError(P("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",e));if(!be(r))throw new TypeError(P("invalid argument. Second argument must be a function. Value: `%s`.",r));if(n={invalid:NaN},arguments.length>2&&(i=Fe(n,t)))throw i;return Z(o={},"next",c),Z(o,"return",u),xe&&be(e[xe])&&Z(o,xe,l),o;function c(){var t;return a?{done:!0}:(t=e.next()).done?(a=!0,t):{value:ve(t.value)?r(t.value):n.invalid,done:!1}}function u(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function l(){return Pe(e[xe](),r,n)}}var Ce=Math.ceil;return function(e){return Pe(e,Ce)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterCeil=r();
//# sourceMappingURL=browser.js.map
