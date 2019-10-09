var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/checkbox/docs.mdx.js"]=function(e){function t(t){for(var i,r,c=t[0],o=t[1],s=t[2],u=0,h=[];u<c.length;u++)r=c[u],a[r]&&h.push(a[r][0]),a[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);for(d&&d(t);h.length;)h.shift()();return n.push.apply(n,s||[]),l()}function l(){for(var e,t=0;t<n.length;t++){for(var l=n[t],i=!0,c=1;c<l.length;c++){var o=l[c];0!==a[o]&&(i=!1)}i&&(n.splice(t--,1),e=r(r.s=l[0]))}return e}var i={},a={20:0},n=[];function r(t){if(i[t])return i[t].exports;var l=i[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=i,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(l,i,function(t){return e[t]}.bind(null,i));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=o;return n.push([247,0]),l()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},247:function(e,t,l){"use strict";l.r(t);var i=l(0),a=l.n(i),n=l(3),r=l(1),c=(l(23),l(15),l(30)),o=l(58),s=l(8),d=l(12),u=a.a.createElement(o.a,null),h=[{id:"checked",label:"Checked",element:a.a.createElement(o.a,{isChecked:!0})},{id:"disabled",label:"Disabled",element:a.a.createElement(o.a,{isDisabled:!0})},{id:"checked-disabled",label:"Checked and Disabled",element:a.a.createElement(o.a,{isChecked:!0,isDisabled:!0})},{id:"error",label:"Error",element:a.a.createElement(o.a,{isRequired:!0,hasError:!0,inlineMessage:"This field is required"})},{id:"required",label:"Required",element:a.a.createElement(o.a,{isRequired:!0})},{id:"view-mode-unchecked",label:"View mode - Unchecked",element:a.a.createElement(s.b,{labelContent:"Form Element Label",isViewMode:!0},a.a.createElement(d.a,{symbol:"steps",size:"x-small",useCurrentColor:!0,assistiveText:"False",title:"False"}))},{id:"view-mode-checked",label:"View mode - Checked",element:a.a.createElement(s.b,{labelContent:"Form Element Label",isViewMode:!0},a.a.createElement(d.a,{symbol:"check",size:"x-small",useCurrentColor:!0,assistiveText:"True",title:"True"}))}],b=[{id:"help-text-icon",label:"Help text icon",element:a.a.createElement(o.a,{hasTooltip:!0})},{id:"required-help-text-icon",label:"Required with Help text icon",element:a.a.createElement(o.a,{isRequired:!0,hasTooltip:!0})},{id:"required-help-text-icon-tooltip",label:"Required with Help text icon, showing tooltip",element:a.a.createElement("div",{style:{paddingTop:"3rem"}},a.a.createElement(o.a,{isRequired:!0,hasTooltip:!0,showTooltip:!0}))}],m=l(2);l.d(t,"getElement",function(){return y}),l.d(t,"getContents",function(){return g});var p=n.c.a,f=n.c.code,k=n.c.h2,x=n.c.h3,O=n.c.h4,E=n.c.h5,j=n.c.p,y=function(){return Object(i.createElement)(n.b,{},Object(i.createElement)("div",{className:"doc lead"},"A checkable input that communicates if an option is true, false or indeterminate"),Object(i.createElement)(r.a,{exampleOnly:!0},c.b),k({id:"About-Checkbox"},"About Checkbox"),j({},"The ability to style checkboxes with CSS varies across browsers. To ensure that checkboxes look the same everywhere, we use a custom DOM. Pay close attention to the markup, because all elements must exist for the styles to work."),x({id:"Accessibility"},"Accessibility"),j({},"Groups of checkboxes should be marked up using the fieldset and legend element. This helps someone using assistive technology to understand the question they're answering with the group of checkboxes. The fieldset is placed around the whole group and the legend contains the question."),j({},"Custom checkboxes are created by applying the ",f({},".slds-checkbox")," class to a ",f({},"<label>")," element. To remain accessible to all user agents, place ",f({},"<input>")," with ",f({},'type="checkbox"')," inside the ",f({},"<label>")," element. The ",f({},"<input>")," is then visually hidden, and the styling is placed on a span with the ",f({},".slds-checkbox_faux")," class. The styling of the span changes based on whether the checkbox is selected or focused by using a pseudo-element. A second span with ",f({},".slds-form-element__label")," contains the label text."),j({},"When a single checkbox is required, ",f({},'<div class="slds-checkbox">')," should get ",f({},'<abbr class="required" title="required">*</abbr>')," added to the DOM, directly before the ",f({},'<input type="checkbox" />')," for visual indication that the checkbox is required."),j({},"When a checkbox group is required, the ",f({},"<fieldset>")," should receive the class ",f({},".slds-is-required"),". The ",f({},"<legend>")," should then get ",f({},'<abbr class="required" title="required">*</abbr>')," added to the DOM for visual indication that the checkbox group is required."),j({},"As SLDS checkboxes rely on the ",f({},":checked")," pseudo selector, and the indeterminate state is only accessible via JavaScript, the use of a CSS class on the input will be necessary to implement this in SLDS. Use JavaScript to add the class when the indeterminate property is set to true on the input."),k({id:"Base"},"Base"),j({},"The base variant of a checkbox is a single boolean value. The base checkbox is consumed by both a grouped checkbox and a checkbox within a form element."),j({},"The ",p({href:"#Form-Element"},"form element variant")," accommodates a top level label and additional functionality such as like help text and read only mode. Help text is not supported on a single checkbox."),Object(i.createElement)(r.a,null,c.b),x({id:"States"},"States"),O({id:"Required"},"Required"),Object(i.createElement)(r.a,null,Object(m.e)(c.d,"required")),O({id:"Error"},"Error"),Object(i.createElement)(r.a,null,Object(m.e)(c.d,"error")),O({id:"Disabled"},"Disabled"),Object(i.createElement)(r.a,null,Object(m.e)(c.d,"disabled")),E({id:"Checked"},"Checked"),Object(i.createElement)(r.a,null,Object(m.e)(c.d,"checked-and-disabled")),x({id:"Examples"},"Examples"),O({id:"Group"},"Group"),Object(i.createElement)(r.a,null,Object(m.e)(c.c,"group")),E({id:"Required-2"},"Required"),Object(i.createElement)(r.a,null,Object(m.e)(c.c,"group-required")),E({id:"Error-2"},"Error"),Object(i.createElement)(r.a,null,Object(m.e)(c.c,"group-error")),E({id:"Disabled-2"},"Disabled"),Object(i.createElement)(r.a,null,Object(m.e)(c.c,"group-disabled")),O({id:"RTL-(right-to-left-direction)"},"RTL (right to left direction)"),Object(i.createElement)(r.a,null,Object(m.e)(c.c,"rtl")),k({id:"Form-Element"},"Form Element"),Object(i.createElement)(r.a,null,u),x({id:"States-2"},"States"),O({id:"Checked-2"},"Checked"),Object(i.createElement)(r.a,null,Object(m.e)(h,"checked")),O({id:"Disabled-3"},"Disabled"),Object(i.createElement)(r.a,null,Object(m.e)(h,"disabled")),O({id:"Checked-and-Disabled"},"Checked and Disabled"),Object(i.createElement)(r.a,null,Object(m.e)(h,"checked-disabled")),O({id:"Error-3"},"Error"),Object(i.createElement)(r.a,null,Object(m.e)(h,"error")),O({id:"Required-3"},"Required"),Object(i.createElement)(r.a,null,Object(m.e)(h,"required")),x({id:"View-mode"},"View mode"),j({},"View mode is the read only state of a checkbox form element."),O({id:"Unchecked"},"Unchecked"),Object(i.createElement)(r.a,null,Object(m.e)(h,"view-mode-unchecked")),O({id:"Checked-3"},"Checked"),Object(i.createElement)(r.a,null,Object(m.e)(h,"view-mode-checked")),x({id:"Examples-2"},"Examples"),O({id:"With-help-text"},"With help text"),Object(i.createElement)(r.a,null,Object(m.e)(b,"help-text-icon")),O({id:"Required-with-help-text"},"Required with help text"),Object(i.createElement)(r.a,null,Object(m.e)(b,"required-help-text-icon")),O({id:"Required-with-help-text-with-tooltip"},"Required with help text with tooltip"),Object(i.createElement)(r.a,null,Object(m.e)(b,"required-help-text-icon-tooltip")))},g=function(){return Object(n.a)(y())}}});