var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/accordion/base/example.jsx.js"]=function(e){function n(n){for(var a,o,s=n[0],i=n[1],l=n[2],m=0,u=[];m<s.length;m++)o=s[m],t[o]&&u.push(t[o][0]),t[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(d&&d(n);u.length;)u.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,n=0;n<c.length;n++){for(var r=c[n],a=!0,s=1;s<r.length;s++){var i=r[s];0!==t[i]&&(a=!1)}a&&(c.splice(n--,1),e=o(o.s=r[0]))}return e}var a={},t={1:0,6:0,13:0,14:0,22:0,24:0,26:0,35:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},c=[];function o(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(r,a,function(n){return e[n]}.bind(null,a));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=i;return c.push([246,0]),r()}({0:function(e,n){e.exports=React},246:function(e,n,r){"use strict";r.r(n);var a=r(0),t=r.n(a),c=r(8),o=r(2),s=r.n(o),i=r(1),l=r.n(i),d=r(4),m=r(14),u=t.a.createElement(d.b,{className:"slds-button_icon-border-filled slds-button_icon-x-small",symbol:"down",assistiveText:"Show More","aria-haspopup":"true",title:"Show More"}),p=function(e){var n=e.position,r=e.dropdownIsOpen;return t.a.createElement(m.Trigger,{isOpen:r,triggerIcon:u},t.a.createElement(m.Menu,{className:s()("slds-dropdown_actions","slds-dropdown_".concat(n))},t.a.createElement(m.MenuList,null,t.a.createElement(m.MenuItem,{tabIndex:"0"},"Action One"),t.a.createElement(m.MenuItem,null,"Action Two"),t.a.createElement(m.MenuItem,null,"Action Three"))))};p.defaultProps={dropdownIsOpen:!0,position:"left"},p.propTypes={position:l.a.oneOf(["left","right"]),dropdownIsOpen:l.a.bool};t.a.createElement(p,null);r.d(n,"Accordion",function(){return E}),r.d(n,"AccordionSection",function(){return O}),r.d(n,"AccordionExample",function(){return _}),r.d(n,"states",function(){return b}),r.d(n,"examples",function(){return h});var f="accordion-details-01",y="accordion-details-02",A="accordion-details-03",E=function(e){return t.a.createElement("ul",{className:s()("slds-accordion",e.className)},e.children)},O=function(e){return t.a.createElement("li",{className:"slds-accordion__list-item"},t.a.createElement("section",{className:s()("slds-accordion__section",e.isOpen?"slds-is-open":null)},t.a.createElement("div",{className:s()("slds-accordion__summary",e.className)},t.a.createElement("h3",{className:s()("slds-accordion__summary-heading",e.className)},t.a.createElement("button",{"aria-controls":e.referenceId,"aria-expanded":e.isOpen,className:"slds-button slds-button_reset slds-accordion__summary-action"},t.a.createElement(c.a,{className:"slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"switch"}),t.a.createElement("span",{className:"slds-truncate",title:e.summary},e.summary))),e.hasActionOverflow&&t.a.createElement(p,{position:"right",dropdownIsOpen:!1})),t.a.createElement("div",{hidden:!e.isOpen,className:s()("slds-accordion__content",e.className),id:e.referenceId},e.children)))},_=function(){return t.a.createElement(E,null,t.a.createElement(O,{summary:"Accordion summary",isOpen:!0,referenceId:f},"Accordion details - A"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:y},"Accordion details - B"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:A},"Accordion details - C"))},b=(n.default=t.a.createElement(_,null),[{id:"section-one-open",label:"Section one open",element:t.a.createElement(E,null,t.a.createElement(O,{summary:"Accordion summary",isOpen:!0,referenceId:f},"Accordion details - A"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:y},"Accordion details - B"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:A},"Accordion details - C"))},{id:"section-two-open",label:"Section two open",element:t.a.createElement(E,null,t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:f},"Accordion details - A"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!0,referenceId:y},"Accordion details - B"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:A},"Accordion details - C"))},{id:"section-three-open",label:"Section three open",element:t.a.createElement(E,null,t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:f},"Accordion details - A"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:y},"Accordion details - B"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!0,referenceId:A},"Accordion details - C"))},{id:"multiple-sections-open",label:"Multiple sections open",element:t.a.createElement(E,null,t.a.createElement(O,{summary:"Accordion summary",isOpen:!0,referenceId:f},"Accordion details - A"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:y},"Accordion details - B"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!0,referenceId:A},"Accordion details - C"))}]),h=[{id:"nested-accordions",label:"Nested Accordions",element:t.a.createElement(E,null,t.a.createElement(O,{summary:"Accordion summary",isOpen:!0,referenceId:f},t.a.createElement(E,null,t.a.createElement(O,{summary:"Nested accordion summary",isOpen:!0,referenceId:"accordion-details-04"},"Accordion details - A"),t.a.createElement(O,{summary:"Nested accordion summary",isOpen:!1,referenceId:"accordion-details-05"},"Accordion details - B"))),t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:y},"Accordion details - B"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:A},"Accordion details - C"))},{id:"styled",label:"Wrapped in Card",element:t.a.createElement("div",{className:"slds-card"},t.a.createElement(E,null,t.a.createElement(O,{summary:"Accordion summary",isOpen:!0,referenceId:f},"Accordion details - A"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:y},"Accordion details - B"),t.a.createElement(O,{summary:"Accordion summary",isOpen:!1,referenceId:A},"Accordion details - C")))},{id:"has-action-overflow",label:"Has Action Overflow Menu",element:t.a.createElement(E,null,t.a.createElement(O,{summary:"Accordion summary",hasActionOverflow:!0,isOpen:!0,referenceId:f},"Accordion details - A"),t.a.createElement(O,{summary:"Accordion summary",hasActionOverflow:!0,isOpen:!1,referenceId:y},"Accordion details - B"),t.a.createElement(O,{summary:"Accordion summary",hasActionOverflow:!0,isOpen:!1,referenceId:A},"Accordion details - C"))}]}});