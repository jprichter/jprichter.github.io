var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/progress-bar/docs.mdx.js"]=function(e){function t(t){for(var l,a,o=t[0],i=t[1],s=t[2],m=0,p=[];m<o.length;m++)a=o[m],r[a]&&p.push(r[a][0]),r[a]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);for(u&&u(t);p.length;)p.shift()();return n.push.apply(n,s||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],l=!0,o=1;o<c.length;o++){var i=c[o];0!==r[i]&&(l=!1)}l&&(n.splice(t--,1),e=a(a.s=c[0]))}return e}var l={},r={57:0},n=[];function a(t){if(l[t])return l[t].exports;var c=l[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=l,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)a.d(c,l,function(t){return e[t]}.bind(null,l));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=i;return n.push([245,0]),c()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},245:function(e,t,c){"use strict";c.r(t);var l=c(0),r=c.n(l),n=c(3),a=c(1),o=c(26),i=c(41),s=(c(15),c(2)),u=c(56),m=c(49),p=r.a.createElement(m.a,{value:"25",isVertical:!0}),b=[{id:"zero",label:"0% complete",element:r.a.createElement(m.a,{value:"0",isVertical:!0})},{id:"25",label:"25% complete",element:r.a.createElement(m.a,{value:"25",isVertical:!0})},{id:"50",label:"50% complete",element:r.a.createElement(m.a,{value:"50",isVertical:!0})},{id:"75",label:"75% complete",element:r.a.createElement(m.a,{value:"75",isVertical:!0})},{id:"100",label:"100% complete",element:r.a.createElement(m.a,{value:"100",isVertical:!0})}];c.d(t,"getElement",function(){return j}),c.d(t,"getContents",function(){return f});var d=n.c.h2,O=n.c.h3,j=function(){return Object(l.createElement)(n.b,{},Object(l.createElement)("div",{className:"doc lead"},"A progress bar component communicates to the user the progress of a particular process."),Object(l.createElement)(a.a,{exampleOnly:!0},Object(s.e)(u.c,"progress-bar-descriptive")),d({id:"About-Progress-Bar"},"About Progress Bar"),d({id:"Base"},"Base"),Object(l.createElement)(a.a,null,u.b),O({id:"States"},"States"),O({id:"0-complete"},"0% complete"),Object(l.createElement)(a.a,null,Object(s.e)(u.d,"zero")),O({id:"25-complete"},"25% complete"),Object(l.createElement)(a.a,null,Object(s.e)(u.d,"25")),O({id:"50-complete"},"50% complete"),Object(l.createElement)(a.a,null,Object(s.e)(u.d,"50")),O({id:"75-complete"},"75% complete"),Object(l.createElement)(a.a,null,Object(s.e)(u.d,"75")),O({id:"100-complete"},"100% complete"),Object(l.createElement)(a.a,null,Object(s.e)(u.d,"100")),d({id:"Examples"},"Examples"),O({id:"Descriptive-Progress-Bar"},"Descriptive Progress Bar"),Object(l.createElement)(a.a,null,Object(s.e)(u.c,"progress-bar-descriptive")),d({id:"Vertical"},"Vertical"),Object(l.createElement)(a.a,{style:{height:"200px"}},p),d({id:"States-2"},"States"),O({id:"0-complete-2"},"0% complete"),Object(l.createElement)(a.a,{style:{height:"200px"}},Object(s.e)(b,"zero")),O({id:"25-complete-2"},"25% complete"),Object(l.createElement)(a.a,{style:{height:"200px"}},Object(s.e)(b,"25")),O({id:"50-complete-2"},"50% complete"),Object(l.createElement)(a.a,{style:{height:"200px"}},Object(s.e)(b,"50")),O({id:"75-complete-2"},"75% complete"),Object(l.createElement)(a.a,{style:{height:"200px"}},Object(s.e)(b,"75")),O({id:"100-complete-2"},"100% complete"),Object(l.createElement)(a.a,{style:{height:"200px"}},Object(s.e)(b,"100")),d({id:"Modifiers"},"Modifiers"),O({id:"Color"},"Color"),Object(l.createElement)(a.a,null,Object(s.e)(u.c,"success")),O({id:"Radius"},"Radius"),Object(l.createElement)(a.a,null,Object(s.e)(u.c,"circular")),O({id:"Thickness"},"Thickness"),Object(l.createElement)(i.a,null,Object(l.createElement)(o.a,null,Object(l.createElement)("strong",null,"X-Small"),Object(l.createElement)(a.a,{toggleCode:!1},Object(s.e)(u.c,"thickness-x-small"))),Object(l.createElement)(o.a,null,Object(l.createElement)("strong",null,"Small"),Object(l.createElement)(a.a,{toggleCode:!1},Object(s.e)(u.c,"thickness-small"))),Object(l.createElement)(o.a,null,Object(l.createElement)("strong",null,"Medium"),Object(l.createElement)(a.a,{toggleCode:!1},Object(s.e)(u.c,"thickness-medium"))),Object(l.createElement)(o.a,null,Object(l.createElement)("strong",null,"Large"),Object(l.createElement)(a.a,{toggleCode:!1},Object(s.e)(u.c,"thickness-large")))))},f=function(){return Object(n.a)(j())}}});