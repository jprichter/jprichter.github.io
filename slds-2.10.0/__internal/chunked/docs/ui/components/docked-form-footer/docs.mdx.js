var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/docked-form-footer/docs.mdx.js"]=function(e){function t(t){for(var r,a,l=t[0],i=t[1],c=t[2],d=0,b=[];d<l.length;d++)a=l[d],n[a]&&b.push(n[a][0]),n[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);b.length;)b.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,l=1;l<o.length;l++){var i=o[l];0!==n[i]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},n={28:0},s=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;return s.push([279,0]),o()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},279:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),s=o(3),a=o(1),l=(o(23),o(15),o(2)),i=o(6),c=o(33),u=o(67),d=l.c.uniqueId("dialog-heading-id-"),b=n.a.createElement("div",{className:"slds-docked-form-footer"},n.a.createElement("button",{type:"button",className:"slds-button slds-button_neutral"},"Cancel"),n.a.createElement("button",{type:"button",className:"slds-button slds-button_brand"},"Save")),p=[{id:"docked-form-footer-with-error",label:"With error(s)",element:n.a.createElement("div",{className:"slds-docked-form-footer"},n.a.createElement(i.b,{assistiveText:"Resolve error",className:"slds-button_icon slds-button_icon-error",iconClassName:"slds-button__icon_large",symbol:"error",title:"Resolve error"}),n.a.createElement("button",{type:"button",className:"slds-button slds-button_neutral"},"Cancel"),n.a.createElement("button",{type:"button",className:"slds-button slds-button_brand"},"Save"))},{id:"docked-form-footer-with-popover",label:"With error popover",element:n.a.createElement("div",{className:"slds-docked-form-footer"},n.a.createElement(i.b,{assistiveText:"Resolve error",className:"slds-button_icon slds-button_icon-error",iconClassName:"slds-button__icon_large",symbol:"error",title:"Resolve error"}),n.a.createElement("button",{type:"button",className:"slds-button slds-button_neutral"},"Cancel"),n.a.createElement("button",{type:"button",className:"slds-button slds-button_brand"},"Save"),n.a.createElement(c.a,{className:"slds-popover_error slds-nubbin_bottom-left",headingId:d,header:n.a.createElement(u.b,{headingId:d,title:"Resolve error",symbol:"error"}),closeButton:!0,inverse:!0,style:{position:"absolute",bottom:"56px",left:"50%",marginLeft:"62px",transform:"translateX(-50%)"}},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."," ",n.a.createElement("a",{href:"javascript:void(0);",title:"Learn More"},"Learn More"))))}];o.d(t,"getElement",function(){return v}),o.d(t,"getContents",function(){return _});var f=s.c.h2,m=s.c.h3,h=s.c.p,v=function(){return Object(r.createElement)(s.b,{},Object(r.createElement)("div",{className:"lead doc"},"Docked form footer is used to dock form actions to the bottom of the viewport"),Object(r.createElement)(a.a,{exampleOnly:!0,isViewport:!0,style:{height:"180px"}},b),f({id:"About-Docked-Form-footer"},"About Docked Form footer"),h({},"The popover should be positioned with JavaScript."),h({},"When errors are found within a form, the user will be notified with a popover with the page-level errors listed out."),m({id:"Accessibility"},"Accessibility"),h({},'Please provide a contextually specific title for the dialog with the aria-label attribute. e.g. "Acme Global edit form errors".'),f({id:"Base"},"Base"),Object(r.createElement)(a.a,{isViewport:!0,style:{height:"180px"}},b),m({id:"With-Error(s)"},"With Error(s)"),Object(r.createElement)(a.a,{isViewport:!0,style:{height:"180px"}},Object(l.e)(p,"docked-form-footer-with-error")),m({id:"With-Error-Popover"},"With Error Popover"),Object(r.createElement)(a.a,{isViewport:!0,style:{height:"180px"}},Object(l.e)(p,"docked-form-footer-with-popover")))},_=function(){return Object(s.a)(v())}}});