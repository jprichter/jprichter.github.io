var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/utilities/borders/docs.mdx.js"]=function(e){function t(t){for(var n,a,c=t[0],i=t[1],s=t[2],d=0,f=[];d<c.length;d++)a=c[d],o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);f.length;)f.shift()();return l.push.apply(l,s||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={87:0},l=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=i;return l.push([255,0]),r()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},255:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),l=r(3),a=r(1),c=r(2),i=[{id:"top",label:"Top",element:o.a.createElement("div",{className:"slds-border_top"},"This should have a top border.")},{id:"right",label:"Right",element:o.a.createElement("div",{className:"slds-border_right"},"This should have a right border.")},{id:"bottom",label:"Bottom",element:o.a.createElement("div",{className:"slds-border_bottom"},"This should have a bottom border.")},{id:"left",label:"Left",element:o.a.createElement("div",{className:"slds-border_left"},"This should have a left border.")}];r.d(t,"getElement",function(){return d}),r.d(t,"getContents",function(){return f});var s=l.c.h2,u=l.c.h3,d=function(){return Object(n.createElement)(l.b,{},Object(n.createElement)("div",{className:"doc lead"},"Use border utility classes to add borders to elements"),s({id:"Examples"},"Examples"),u({id:"Top"},"Top"),Object(n.createElement)(a.a,null,Object(c.e)(i,"top")),u({id:"Right"},"Right"),Object(n.createElement)(a.a,null,Object(c.e)(i,"right")),u({id:"Bottom"},"Bottom"),Object(n.createElement)(a.a,null,Object(c.e)(i,"bottom")),u({id:"Left"},"Left"),Object(n.createElement)(a.a,null,Object(c.e)(i,"left")))},f=function(){return Object(l.a)(d())}}});