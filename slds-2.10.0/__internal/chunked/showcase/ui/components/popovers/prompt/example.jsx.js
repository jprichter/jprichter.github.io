var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/popovers/prompt/example.jsx.js"]=function(e){function t(t){for(var n,a,l=t[0],i=t[1],p=t[2],m=0,d=[];m<l.length;m++)a=l[m],s[a]&&d.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(c&&c(t);d.length;)d.shift()();return r.push.apply(r,p||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,l=1;l<o.length;l++){var i=o[l];0!==s[i]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},s={121:0,6:0,13:0,14:0,22:0,24:0,26:0,35:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var c=i;return r.push([106,0]),o()}({0:function(e,t){e.exports=React},106:function(e,t,o){"use strict";o.r(t),o.d(t,"Footer",function(){return m}),o.d(t,"Icon",function(){return d}),o.d(t,"Prompt",function(){return u}),o.d(t,"examples",function(){return b});var n=o(0),s=o.n(n),r=o(8),a=o(26),l=o(6),i=o(2),p=o.n(i),c=l.c.uniqueId("dialog-heading-id-"),m=function(e){return s.a.createElement("div",{className:"slds-grid slds-grid_vertical-align-center"},e.dismissButtonLabel&&s.a.createElement("button",{className:"slds-button slds-button_neutral slds-col_bump-right"},e.dismissButtonLabel),e.actionLinkText&&s.a.createElement("span",{className:"slds-popover_prompt__action-link"},s.a.createElement("a",{href:"#",className:"slds-button"},e.actionLinkText)),e.brandButtonLabel&&s.a.createElement("button",{className:"slds-button slds-button_brand"},e.brandButtonLabel))},d=function(e){return s.a.createElement("div",{className:"slds-media__figure"},s.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},s.a.createElement(r.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"prompt"}),s.a.createElement("span",{className:"slds-assistive-text"},"Description of icon")))},u=function(e){var t={"slds-popover_prompt_top":"top"===e.position,"slds-popover_prompt_top-right":"top-right"===e.position,"slds-popover_prompt_top-left":"top-left"===e.position,"slds-popover_prompt_bottom":"bottom"===e.position,"slds-popover_prompt_bottom-left":"bottom-left"===e.position,"slds-popover_prompt_bottom-right":"bottom-right"===e.position};return s.a.createElement(a.Popover,{className:p()("slds-popover_prompt",t,e.className),headingId:c,footer:s.a.createElement(m,{dismissButtonLabel:"Dismiss",actionLinkText:"Learn more",brandButtonLabel:"Save"}),closeButton:!0},s.a.createElement("div",{className:"slds-media"},e.symbol&&s.a.createElement("div",{className:"slds-media__figure"},s.a.createElement("span",{className:"slds-icon_container",title:e.assistiveText},s.a.createElement(r.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:e.symbol}),s.a.createElement("span",{className:"slds-assistive-text"},e.assistiveText))),s.a.createElement("div",{className:"slds-media__body"},s.a.createElement("h2",{id:c,className:"slds-popover_prompt__heading"},"Title"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))};t.default=s.a.createElement(u,{symbol:"prompt"});var b=[{id:"top-left",label:"Positioned: top left",element:s.a.createElement(u,{symbol:"prompt",position:"top-left"})},{id:"top-center",label:"Positioned: top center",element:s.a.createElement(u,{symbol:"prompt",position:"top"})},{id:"top-right",label:"Positioned: top right",element:s.a.createElement(u,{symbol:"prompt",position:"top-right"})},{id:"bottom-right",label:"Positioned: bottom right",element:s.a.createElement(u,{symbol:"prompt",position:"bottom-right"})},{id:"bottom-center",label:"Positioned: bottom center",element:s.a.createElement(u,{symbol:"prompt",position:"bottom"})},{id:"bottom-left",label:"Positioned: bottom left",element:s.a.createElement(u,{symbol:"prompt",position:"bottom-left"})}]}});