var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/accordion/docs.mdx.js"]=function(e){function n(n){for(var c,o,i=n[0],s=n[1],l=n[2],m=0,u=[];m<i.length;m++)o=i[m],a[o]&&u.push(a[o][0]),a[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);for(d&&d(n);u.length;)u.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,i=1;i<t.length;i++){var s=t[i];0!==a[s]&&(c=!1)}c&&(r.splice(n--,1),e=o(o.s=t[0]))}return e}var c={},a={1:0},r=[];function o(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=c,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)o.d(t,c,function(n){return e[n]}.bind(null,c));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var d=s;return r.push([283,0]),t()}({0:function(e,n){e.exports=React},18:function(e,n){e.exports=JSBeautify},19:function(e,n){e.exports=ReactDOM},283:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),r=t(3),o=t(1),i=(t(15),t(2)),s=t(11),l=t(5),d=t.n(l),m=t(90),u="accordion-details-01",p="accordion-details-02",f="accordion-details-03",y=function(e){return a.a.createElement("ul",{className:d()("slds-accordion",e.className)},e.children)},h=function(e){return a.a.createElement("li",{className:"slds-accordion__list-item"},a.a.createElement("section",{className:d()("slds-accordion__section",e.isOpen?"slds-is-open":null)},a.a.createElement("div",{className:d()("slds-accordion__summary",e.className)},a.a.createElement("h3",{className:d()("slds-accordion__summary-heading",e.className)},a.a.createElement("button",{"aria-controls":e.referenceId,"aria-expanded":e.isOpen,className:"slds-button slds-button_reset slds-accordion__summary-action"},a.a.createElement(s.a,{className:"slds-accordion__summary-action-icon slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"switch"}),a.a.createElement("span",{className:"slds-truncate",title:e.summary},e.summary))),e.hasActionOverflow&&a.a.createElement(m.a,{position:"right",dropdownIsOpen:!1})),a.a.createElement("div",{hidden:!e.isOpen,className:d()("slds-accordion__content",e.className),id:e.referenceId},e.children)))},O=a.a.createElement(function(){return a.a.createElement(y,null,a.a.createElement(h,{summary:"Accordion summary",isOpen:!0,referenceId:u},"Accordion details - A"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:p},"Accordion details - B"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:f},"Accordion details - C"))},null),A=[{id:"section-one-open",label:"Section one open",element:a.a.createElement(y,null,a.a.createElement(h,{summary:"Accordion summary",isOpen:!0,referenceId:u},"Accordion details - A"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:p},"Accordion details - B"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:f},"Accordion details - C"))},{id:"section-two-open",label:"Section two open",element:a.a.createElement(y,null,a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:u},"Accordion details - A"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!0,referenceId:p},"Accordion details - B"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:f},"Accordion details - C"))},{id:"section-three-open",label:"Section three open",element:a.a.createElement(y,null,a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:u},"Accordion details - A"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:p},"Accordion details - B"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!0,referenceId:f},"Accordion details - C"))},{id:"multiple-sections-open",label:"Multiple sections open",element:a.a.createElement(y,null,a.a.createElement(h,{summary:"Accordion summary",isOpen:!0,referenceId:u},"Accordion details - A"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:p},"Accordion details - B"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!0,referenceId:f},"Accordion details - C"))}],b=[{id:"nested-accordions",label:"Nested Accordions",element:a.a.createElement(y,null,a.a.createElement(h,{summary:"Accordion summary",isOpen:!0,referenceId:u},a.a.createElement(y,null,a.a.createElement(h,{summary:"Nested accordion summary",isOpen:!0,referenceId:"accordion-details-04"},"Accordion details - A"),a.a.createElement(h,{summary:"Nested accordion summary",isOpen:!1,referenceId:"accordion-details-05"},"Accordion details - B"))),a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:p},"Accordion details - B"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:f},"Accordion details - C"))},{id:"styled",label:"Wrapped in Card",element:a.a.createElement("div",{className:"slds-card"},a.a.createElement(y,null,a.a.createElement(h,{summary:"Accordion summary",isOpen:!0,referenceId:u},"Accordion details - A"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:p},"Accordion details - B"),a.a.createElement(h,{summary:"Accordion summary",isOpen:!1,referenceId:f},"Accordion details - C")))},{id:"has-action-overflow",label:"Has Action Overflow Menu",element:a.a.createElement(y,null,a.a.createElement(h,{summary:"Accordion summary",hasActionOverflow:!0,isOpen:!0,referenceId:u},"Accordion details - A"),a.a.createElement(h,{summary:"Accordion summary",hasActionOverflow:!0,isOpen:!1,referenceId:p},"Accordion details - B"),a.a.createElement(h,{summary:"Accordion summary",hasActionOverflow:!0,isOpen:!1,referenceId:f},"Accordion details - C"))}];t.d(n,"getElement",function(){return g}),t.d(n,"getContents",function(){return j});var E=r.c.a,_=r.c.code,v=r.c.h2,I=r.c.h3,S=r.c.p,g=function(){return Object(c.createElement)(r.b,{},Object(c.createElement)("div",{className:"doc lead"},"An accordion allows a user to toggle the display of a section of content."),Object(c.createElement)(o.a,{exampleOnly:!0},Object(i.e)(b,"styled")),v({id:"About-Accordions"},"About Accordions"),S({},"Accordions are composed of a list of longer blocks of text, with a header button to toggle the visibility of each block."),v({id:"Accessibility"},"Accessibility"),S({},"Availability of accordion content to assistive technology requires the use of ",_({},"aria-controls")," and toggling ",_({},"aria-expanded")," as regions are expanded and collapsed."),S({},"There are additional accessibility considerations within the ",E({href:"/components/buttons"},"Buttons")," and ",E({href:"/components/menus"},"Menus"),"."),v({id:"Default"},"Default"),Object(c.createElement)(o.a,null,O),I({id:"Structure-and-Implementation"},"Structure and Implementation"),S({},"An accordion is implemented as an unordered list with a class of ",_({},"slds-accordion"),". Inside the list, each chunk of content is inside both a list item with class of ",_({},"slds-accordion__list-item")," and a section with a class of ",_({},"slds-accordion__section"),"."),S({},"The content itself is contained within a div with the class ",_({},"slds-accordion__content"),", an ID that corresponds to the ",_({},"aria-control")," on the button and the hidden attribute."),S({},"Content visibility is toggled via a ",E({href:"/components/buttons"},"Button")," in the H3 heading. To make accordion content visible, the section is given the class ",_({},"slds-is-open"),", the button is changed from ",_({},'aria-expanded="false"')," to ",_({},'aria-expanded="true"'),", and the hidden attribute is removed from the content div."),v({id:"States"},"States"),I({id:"Section-1-Open"},"Section 1 - Open"),Object(c.createElement)(o.a,null,Object(i.e)(A,"section-one-open")),I({id:"Section-2-Open"},"Section 2 - Open"),Object(c.createElement)(o.a,null,Object(i.e)(A,"section-two-open")),I({id:"Section-3-Open"},"Section 3 - Open"),Object(c.createElement)(o.a,null,Object(i.e)(A,"section-three-open")),I({id:"Multiple-Sections-Open"},"Multiple Sections - Open"),Object(c.createElement)(o.a,null,Object(i.e)(A,"multiple-sections-open")),v({id:"Examples"},"Examples"),I({id:"With-Action-Overflow-Menu"},"With Action Overflow Menu"),Object(c.createElement)(o.a,null,Object(i.e)(b,"has-action-overflow")),I({id:"In-a-Card"},"In a Card"),Object(c.createElement)(o.a,null,Object(i.e)(b,"styled")),I({id:"Nested"},"Nested"),Object(c.createElement)(o.a,null,Object(i.e)(b,"nested-accordions")))},j=function(){return Object(r.a)(g())}}});