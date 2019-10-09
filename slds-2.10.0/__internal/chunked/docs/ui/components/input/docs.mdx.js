var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/input/docs.mdx.js"]=function(e){function t(t){for(var a,r,o=t[0],s=t[1],d=t[2],u=0,p=[];u<o.length;u++)r=o[u],l[r]&&p.push(l[r][0]),l[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(c&&c(t);p.length;)p.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==l[s]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},l={44:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var c=s;return i.push([296,0]),n()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},296:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(3),r=n(1),o=(n(23),n(15)),s=n(16),d=n(11),c=n(6),u=n(45),p=n(8),h="Input Label",b="text-input-id-1",m="error-message-unique-id",f="Placeholder Text",E=l.a.createElement(p.b,{labelContent:h,inputId:b},l.a.createElement(s.a,{id:b,placeholder:f})),y=[{id:"input-required",label:"Required",element:l.a.createElement(function(e){return l.a.createElement(p.b,{labelContent:h,inputId:b,isRequired:!0},l.a.createElement(s.a,{id:b,placeholder:f,required:!0}))},null)},{id:"input-disabled",label:"Disabled",element:l.a.createElement(function(e){return l.a.createElement(p.b,{labelContent:h,inputId:b},l.a.createElement(s.a,{id:b,placeholder:f,disabled:!0}))},null)},{id:"input-error",label:"Error",element:l.a.createElement(function(e){return l.a.createElement(p.b,{hasError:!0,labelContent:h,inputId:b,errorId:e.errorId,isRequired:!0,inlineMessage:"This field is required"},l.a.createElement(s.a,{id:b,placeholder:f,required:!0,"aria-describedby":e.errorId}))},{errorId:m})},{id:"input-error-icon",label:"Error with icon",element:l.a.createElement(function(e){return l.a.createElement(p.b,{hasError:!0,labelContent:h,inputId:b,hasLeftIcon:!0,errorId:e.errorId,isRequired:!0,inlineMessage:"This field is required"},l.a.createElement(d.a,{className:"slds-input__icon",sprite:"utility",symbol:"error"}),l.a.createElement(s.a,{id:b,required:!0,placeholder:f,"aria-describedby":e.errorId}))},{errorId:m})},{id:"read-only",label:"Readonly",element:l.a.createElement(function(e){return l.a.createElement(p.b,{labelContent:h,inputId:b},l.a.createElement(s.a,{id:b,readOnly:!0,defaultValue:"Read Only",placeholder:""}))},null)},{id:"static",label:"Static",element:l.a.createElement(p.g,null,l.a.createElement("span",{className:"slds-form-element__label"},"Input Label"),l.a.createElement(p.c,null,l.a.createElement("span",{className:"slds-form-element__static"},"Read Only")))}],_=[{id:"left-icon",label:"Left Icon",element:l.a.createElement(p.b,{labelContent:h,inputId:b,hasLeftIcon:!0},l.a.createElement(d.a,{className:"slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default",sprite:"utility",symbol:"search"}),l.a.createElement(s.a,{id:b,placeholder:f}))},{id:"right-icon",label:"Right Icon",element:l.a.createElement(p.b,{labelContent:h,inputId:b,hasRightIcon:!0},l.a.createElement(d.a,{className:"slds-icon slds-input__icon slds-input__icon_right slds-icon-text-default",sprite:"utility",symbol:"search"}),l.a.createElement(s.a,{id:b,placeholder:f}))},{id:"double-icon",label:"Left Icon & Clear Button",element:l.a.createElement(p.b,{labelContent:h,inputId:b,hasLeftIcon:!0,hasRightIcon:!0},l.a.createElement(d.a,{className:"slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default",sprite:"utility",symbol:"search"}),l.a.createElement(s.a,{id:b,placeholder:f}),l.a.createElement(c.b,{symbol:"clear",className:"slds-input__icon slds-input__icon_right",iconClassName:"slds-icon-text-light",assistiveText:"Clear",title:"Clear"}))},{id:"double-icon-spinner",label:"Clear Button with Spinner",element:l.a.createElement(p.b,{labelContent:h,inputId:b,hasLeftIcon:!0,hasRightIcon:!0,hasRightIconGroup:!0},l.a.createElement(d.a,{className:"slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default",sprite:"utility",symbol:"search"}),l.a.createElement(s.a,{id:b,placeholder:f}),l.a.createElement("div",{className:"slds-input__icon-group slds-input__icon-group_right"},l.a.createElement(u.a,{className:"slds-spinner_brand slds-spinner_x-small slds-input__spinner"}),l.a.createElement(c.b,{symbol:"clear",className:"slds-input__icon slds-input__icon_right",iconClassName:"slds-icon-text-light",assistiveText:"Clear",title:"Clear"})))},{id:"email-input",label:"Email Input",element:l.a.createElement(p.b,{labelContent:"Email",inputId:"input-email"},l.a.createElement(s.a,{id:"input-email",type:"email",placeholder:"E-Mail"}))},{id:"fixed-text",label:"Fixed text",element:l.a.createElement(p.b,{labelContent:h,inputId:b,formControlClassName:"slds-input-has-fixed-addon",labelId:"fixed-text-label"},l.a.createElement("span",{className:"slds-form-element__addon",id:"fixed-text-addon-pre"},"$"),l.a.createElement(s.a,{id:b,placeholder:f,"aria-labelledby":"fixed-text-label fixed-text-addon-pre fixed-text-addon-post"}),l.a.createElement("span",{className:"slds-form-element__addon",id:"fixed-text-addon-post"},"euro"))},{id:"inline-help",label:"Inline Help",element:l.a.createElement(p.b,{labelId:"inline-text-label",labelContent:h,inputId:b},l.a.createElement(s.a,{id:b,placeholder:f,"aria-labelledby":"inline-text-label"}),l.a.createElement("div",{className:"slds-form-element__help"},"ex: (415)111-2222"))},{id:"field-level-help",label:"Field level help",element:l.a.createElement("div",{style:{paddingTop:"3rem",position:"relative"}},l.a.createElement(p.b,{labelContent:h,inputId:b,hasTooltip:!0,showTooltip:!0},l.a.createElement(s.a,{id:b,placeholder:f})))}],x=n(2);n.d(t,"getElement",function(){return T}),n.d(t,"getContents",function(){return L});var I=i.c.a,g=i.c.code,v=i.c.h2,O=i.c.h3,j=i.c.h4,w=i.c.li,C=i.c.ol,S=i.c.p,T=function(){return Object(a.createElement)(i.b,{},Object(a.createElement)("div",{className:"doc lead"},"Text inputs are used for freeform data entry"),Object(a.createElement)(r.a,{exampleOnly:!0},E),v({id:"About-Inputs"},"About Inputs"),S({},"You can style the HTML ",g({},"<input>")," element to align with the Salesforce brand by using the ",g({},".slds-input")," class on the ",g({},"<input>")," element."),S({},"The ",g({},"<input>")," element includes support for all HTML5 types: ",g({},"text"),",",g({},"password"),", ",g({},"datetime"),", ",g({},"datetime-local"),", ",g({},"date"),", ",g({},"month"),", ",g({},"time"),", ",g({},"week"),",",g({},"number"),", ",g({},"email"),", ",g({},"url"),", ",g({},"search"),", ",g({},"tel"),", and ",g({},"color"),"."),S({},"The static state is for form elements that can’t be modified by the user. It is used for small, non-editable form fields that sit next to inputs and allows the size and height to align. It is not meant for large paragraphs of text."),O({id:"Pointer-Events"},"Pointer Events"),S({},"In order to have an actionable SVG within the input, like a clear or increment/decrement button, the icon must be contained within a button, not an anchor ",g({},"<a>"),", in order for pointer events to work properly."),S({},"You can see examples of the correct markup in the ",I({href:"/components/input/?example=double-icon&variant=base"},"Left Icon & Clear Button example")," or the ",I({href:"/components/input/?example=increment-decrement-counter&variant=base"},"Counter example"),"."),O({id:"Accessibility"},"Accessibility"),S({},"Inputs with errors should have ",g({},"aria-describedby")," to insure that the associated field level error message is read by assistive technology."),S({},"If the error message has an ",g({},'id="my-error-message"'),", then the input should have ",g({},'aria-describedby="my-error-message"')," and ",g({},'aria-invalid="true"'),"."),S({},"If you need some type of field level help and if your tooltips are available on hover, make sure they’re also available on keyboard focus. The help icon needs to be associated to the tooltip so that when the user focuses","on the icon, assistive technology reads out the content of the tooltip. If the tooltip has an ",g({},'id="help"'),", then the ",g({},"<button>")," containing the icon should have ",g({},'aria-describedby="help"'),"."),S({},"In some cases, the read-only field state is swapped and has no ",g({},"<input>"),". This is called ",g({},"static")," in the examples. In that case, don’t use a ",g({},"<label>"),". This provides better accessibility for screen readers and keyboard navigators. Instead, use a ",g({},"<span>")," with the ",g({},".slds-form-element__label")," class. Instead of an ",g({},"<input>"),", use the ",g({},".slds-form-element__static")," class inside the ",g({},".slds-form-element__control")," wrapper."),v({id:"States"},"States"),O({id:"Required"},"Required"),Object(a.createElement)(r.a,null,Object(x.e)(y,"input-required")),O({id:"Disabled"},"Disabled"),Object(a.createElement)(r.a,null,Object(x.e)(y,"input-disabled")),O({id:"Error"},"Error"),Object(a.createElement)(r.a,null,Object(x.e)(y,"input-error")),O({id:"Error-with-icon"},"Error with icon"),Object(a.createElement)(r.a,null,Object(x.e)(y,"input-error-icon")),O({id:"Read-Only"},"Read Only"),Object(a.createElement)(r.a,null,Object(x.e)(y,"read-only")),v({id:"Examples"},"Examples"),O({id:"With-Icons"},"With Icons"),j({id:"Icon-on-the-left"},"Icon on the left"),Object(a.createElement)(o.a,{type:"warning"},"A left aligned icon cannot be paired wtih fixed text."),Object(a.createElement)(r.a,null,Object(x.e)(_,"left-icon")),j({id:"Icon-on-the-right"},"Icon on the right"),Object(a.createElement)(r.a,null,Object(x.e)(_,"right-icon")),j({id:"Icon-and-clear-button"},"Icon and clear button"),Object(a.createElement)(r.a,null,Object(x.e)(_,"double-icon")),j({id:"Icon-and-clear-button-with-loading-spinner"},"Icon and clear button, with loading spinner"),Object(a.createElement)(r.a,null,Object(x.e)(_,"double-icon-spinner")),O({id:"Fixed-Text"},"Fixed Text"),Object(a.createElement)(o.a,{type:"warning"},"Fixed text cannot be paired with an icon that is aligned left."),S({},"When using the fixed text variants for prepending or appending symbols to inputs, please be sure to use ",g({},"aria-labelledby")," on the input, that points to the ids of the label, prepended text and appended text as a space separated list."),S({},"The IDs must appear in that order:"),C({},w({},"label,"),w({},"prepended"),w({},"then appended.")),S({},"The reason we do this is to create a better association between the input and the supporting labels around it."),S({},"By only using the traditional ",g({},"label[for]")," method, the fixed text is never read out in the context of editing the input value. With using the ",g({},"aria-labelledby")," attribute we can create a better label with all the visual labels associated with it, in a relevant order, that is read by assistive technology when the user needs it; when they're editing the value."),Object(a.createElement)(r.a,null,Object(x.e)(_,"fixed-text")),O({id:"Inline-Help"},"Inline Help"),Object(a.createElement)(r.a,null,Object(x.e)(_,"inline-help")),O({id:"Field-Level-Help"},"Field Level Help"),Object(a.createElement)(r.a,null,Object(x.e)(_,"field-level-help")))},L=function(){return Object(i.a)(T())}}});