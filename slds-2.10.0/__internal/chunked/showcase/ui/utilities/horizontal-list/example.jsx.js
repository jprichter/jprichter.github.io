var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/utilities/horizontal-list/example.jsx.js"]=function(e){function l(l){for(var a,n,r=l[0],c=l[1],o=l[2],d=0,h=[];d<r.length;d++)n=r[d],i[n]&&h.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(m&&m(l);h.length;)h.shift()();return s.push.apply(s,o||[]),t()}function t(){for(var e,l=0;l<s.length;l++){for(var t=s[l],a=!0,r=1;r<t.length;r++){var c=t[r];0!==i[c]&&(a=!1)}a&&(s.splice(l--,1),e=n(n.s=t[0]))}return e}var a={},i={171:0,6:0,13:0,14:0,22:0,24:0,26:0,35:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},s=[];function n(l){if(a[l])return a[l].exports;var t=a[l]={i:l,l:!1,exports:{}};return e[l].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=a,n.d=function(e,l,t){n.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,l){if(1&l&&(e=n(e)),8&l)return e;if(4&l&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var a in e)n.d(t,a,function(l){return e[l]}.bind(null,a));return t},n.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(l,"a",l),l},n.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},n.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=r.push.bind(r);r.push=l,r=r.slice();for(var o=0;o<r.length;o++)l(r[o]);var m=c;return s.push([131,0]),t()}({0:function(e,l){e.exports=React},131:function(e,l,t){"use strict";t.r(l),t.d(l,"examples",function(){return s});var a=t(0),i=t.n(a),s=[{id:"horizontal-list",label:"Default",element:i.a.createElement("ul",{className:"slds-list_horizontal"},i.a.createElement("li",null,"Horizontal List"),i.a.createElement("li",null,"List Item"),i.a.createElement("li",null,"List Item"))},{id:"horizontal-list-links",label:"Links",element:i.a.createElement("ul",{className:"slds-list_horizontal"},i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"Horizontal List with inline level links")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"List Item")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"horizontal-list-block-links",label:"Block links",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-block-links"},i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"Horizontal List with block level links")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"List Item")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"horizontal-list-block-links-space",label:"Block links with space",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-block-links_space"},i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"Horizontal List with block level links and space")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"List Item")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"horizontal-list-inline-block-links",label:"Inline block links",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-inline-block-links"},i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"Horizontal List with inline-block level links")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"List Item")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"horizontal-list-inline-block-links-space",label:"Inline block links with space",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-inline-block-links_space"},i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"Horizontal List with inline-block level links and space")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"List Item")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"horizontal-list-left",label:"Left",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_left"},i.a.createElement("li",{className:"slds-item"},"Horizontal List with dot dividers to the left"),i.a.createElement("li",{className:"slds-item"},"List Item"),i.a.createElement("li",{className:"slds-item"},"List Item"))},{id:"horizontal-list-link-left",label:"Left with link",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_left slds-has-block-links"},i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"javascript:void(0);"},"Horizontal List with block level links and dot dividers")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"javascript:void(0);"},"List Item")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"horizontal-list-link-space-left",label:"Left with link space",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_left slds-has-block-links_space"},i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"javascript:void(0);"},"Horizontal List with block level links and dot dividers with space")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"javascript:void(0);"},"List Item")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"horizontal-list-right",label:"Right",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_right"},i.a.createElement("li",{className:"slds-item"},"Horizontal List with dot dividers to the right"),i.a.createElement("li",{className:"slds-item"},"List Item"),i.a.createElement("li",{className:"slds-item"},"List Item"))},{id:"horizontal-list-link-right",label:"Right with link",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_right slds-has-block-links"},i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"javascript:void(0);"},"Horizontal List with block level links and dot dividers")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"javascript:void(0);"},"List Item")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"javascript:void(0);"},"List Item")))},{id:"horizontal-list-link-space-right",label:"Right with link space",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_right slds-has-block-links_space"},i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"javascript:void(0);"},"Horizontal List with block level links and dot dividers with space")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"javascript:void(0);"},"List Item")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"javascript:void(0);"},"List Item")))}]}});