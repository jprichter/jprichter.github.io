var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/app-launcher/docs.mdx.js"]=function(e){function t(t){for(var l,i,o=t[0],r=t[1],c=t[2],p=0,m=[];p<o.length;p++)i=o[p],s[i]&&m.push(s[i][0]),s[i]=0;for(l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);for(d&&d(t);m.length;)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,o=1;o<a.length;o++){var r=a[o];0!==s[r]&&(l=!1)}l&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var l={},s={4:0},n=[];function i(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=l,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(a,l,function(t){return e[t]}.bind(null,l));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=r;return n.push([263,0]),a()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},263:function(e,t,a){"use strict";a.r(t);var l=a(0),s=a.n(l),n=a(3),i=a(1),o=(a(23),a(9),a(15)),r=a(11),c=a(22),d=a(62),p=a(38),m=a(78),u=a(53),h=a(5),b=a.n(h),g=function(e){return s.a.createElement(c.b,{className:"slds-modal_large slds-app-launcher","aria-labelledby":"header43"},s.a.createElement(c.e,{className:"slds-grid slds-grid_align-spread slds-grid_vertical-align-center"},s.a.createElement("h2",{id:"header43",className:"slds-text-heading_medium"},"App Launcher"),s.a.createElement("div",{className:"slds-app-launcher__header-search"},s.a.createElement("div",{className:"slds-form-element"},s.a.createElement("label",{htmlFor:"app-launcher-search",className:"slds-form-element__label slds-assistive-text"},"Find an app"),s.a.createElement("div",{className:"slds-form-element__control slds-input-has-icon slds-input-has-icon_left"},s.a.createElement(r.a,{className:"slds-input__icon",sprite:"utility",symbol:"search"}),s.a.createElement("input",{type:"search",className:"slds-input",id:"app-launcher-search",placeholder:"Find an app",defaultValue:e.searchTerm})))),s.a.createElement("button",{className:"slds-button slds-button_neutral"},"App Exchange")),s.a.createElement(c.c,{className:"slds-app-launcher__content slds-p-around_medium"},s.a.createElement(d.a,{className:"slds-is-open"},s.a.createElement(d.c,null,s.a.createElement(d.d,{isOpen:!0,referenceId:"appsContent"},"All Apps")),s.a.createElement(d.b,{isOpen:!0,referenceId:"appsContent"},s.a.createElement("div",{className:"slds-assistive-text",id:"drag-live-region","aria-live":"assertive"},e.dragDropLiveRegion),s.a.createElement("ul",{className:"slds-grid slds-grid_pull-padded slds-wrap"},e.appTiles.map(function(e,t){return s.a.createElement("li",{className:"slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3",key:t},s.a.createElement(f,{figureClass:e.figureClass,grabbed:e.grabbed,objectInitials:e.initials,label:e.label,description:e.description,hasTooltip:e.hasTooltip,tooltipText:e.tooltipText,index:t}))})))),s.a.createElement("hr",null),s.a.createElement(d.a,{className:"slds-is-open"},s.a.createElement(d.c,null,s.a.createElement(d.d,{isOpen:!0,referenceId:"itemsContent"},"All Items")),s.a.createElement(d.b,{isOpen:!0,referenceId:"itemsContent"},s.a.createElement("ul",{className:"slds-grid slds-wrap"},e.itemTiles.map(function(e,t){return s.a.createElement("li",{className:"slds-col_padded slds-p-vertical_xx-small slds-size_1-of-5",key:t},s.a.createElement("a",{href:"javascript:void(0);",className:"slds-truncate",title:e.label},e.label))}))))))},f=function(e){return s.a.createElement("div",{draggable:!0,className:b()("slds-app-launcher__tile slds-text-link_reset slds-is-draggable",e.className,{"slds-is-grabbed":e.grabbed})},s.a.createElement("div",{className:"slds-app-launcher__tile-figure"},s.a.createElement(p.a,{className:"slds-avatar_large"},s.a.createElement("abbr",{className:b()("slds-avatar__initials",e.figureClass),title:e.label},e.objectInitials)),s.a.createElement("div",{className:"slds-m-top_xxx-small"},s.a.createElement(m.a,{"aria-pressed":e.grabbed?"true":"false",assistiveText:"Reorder",selected:e.grabbed,symbol:"rows",title:"Reorder"}))),s.a.createElement("div",{className:"slds-app-launcher__tile-body"},s.a.createElement("a",{href:"javascript:void(0);"},e.label),s.a.createElement("p",null,e.description," ",e.hasTooltip&&s.a.createElement("button",{"aria-describedby":"help-".concat(e.index),className:"slds-button slds-button_reset slds-text-link"},"More")),s.a.createElement(u.a,{className:b()("slds-nubbin_top",{"slds-hide":!e.tooltipText}),id:"help-".concat(e.index),style:{position:"absolute",top:"100px",left:"165px"}},e.tooltipText)))},v=[{label:"Accounts",symbol:"account"},{label:"Announcements",symbol:"announcement"},{label:"Approvals",symbol:"approval"},{label:"Campaigns",symbol:"campaign"},{label:"Cases",symbol:"case"},{label:"Coaching",symbol:"coaching"},{label:"Contacts",symbol:"contact"}],y=[{label:s.a.createElement("span",null,s.a.createElement("mark",null,"Sales")," Invoices"),symbol:"account"},{label:s.a.createElement("span",null,s.a.createElement("mark",null,"Sales")," Objects"),symbol:"announcement"}],E=[{description:"The primary internal Salesforce org. Used to run our online sales business...",hasTooltip:!0,figureClass:"slds-icon-custom-27",grabbed:!1,initials:"SC",label:"Sales Cloud"},{description:"Salesforce Marketing Cloud lets businesses of any size...",hasTooltip:!0,figureClass:"slds-icon-custom-59",grabbed:!1,initials:"MC",label:"Marketing Cloud"},{description:"Community for managing employee benefits and time off.",hasTooltip:!1,figureClass:"slds-icon-custom-10",grabbed:!1,initials:"HR",label:"HR Concierge"},{description:"Manage your finances across multiple financial platforms...",hasTooltip:!0,figureClass:"slds-icon-custom-6",grabbed:!1,initials:"MM",label:"My Money"},{description:"The key to call center and contact center management is more...",hasTooltip:!0,figureClass:"slds-icon-custom-91",grabbed:!1,initials:"CC",label:"Call Center"},{description:"Areas of Focus are used to track customer support for your...",hasTooltip:!0,figureClass:"slds-icon-custom-50",grabbed:!1,initials:"CS",label:"Customer Support Communitiy"}],T=[{description:"The primary internal Salesforce org. Used to run our...",hasTooltip:!0,figureClass:"slds-icon-custom-27",grabbed:!1,initials:"SC",label:s.a.createElement("span",null,s.a.createElement("mark",null,"Sales")," Cloud")}],S=function(e,t,a){var l=e.slice(0);return l.splice(a,0,l.splice(t,1)[0]),l},_=E.slice(0);_[0]=Object.assign({},_[0],{grabbed:!0});var x=S(E,0,2);x[2]=Object.assign({},x[2],{grabbed:!0});var C=S(E,0,3),O=s.a.createElement(c.a,null,s.a.createElement(g,{appTiles:E,dragDropLiveRegion:"",itemTiles:v})),j=O,w=[{id:"default",label:"Default",demoStyles:"height: 800px;",element:O},{id:"grabbed",label:"Tile grabbed",demoStyles:"height: 800px;",element:s.a.createElement(c.a,null,s.a.createElement(g,{appTiles:_,dragDropLiveRegion:"Sales Cloud: current position 1 of 6. Use the up and down arrows to move this app",grabbed:!0,itemTiles:v}))},{id:"moved",label:"Tile moved in list",demoStyles:"height: 800px;",element:s.a.createElement(c.a,null,s.a.createElement(g,{appTiles:x,dragDropLiveRegion:"Sales Cloud: new position 3 of 6.",itemTiles:v}))},{id:"dropped",label:"Tile dropped",demoStyles:"height: 800px;",element:s.a.createElement(c.a,null,s.a.createElement(g,{appTiles:C,dragDropLiveRegion:"Sales Cloud: final position 4 of 6.",itemTiles:v}))},{id:"search",label:"Search",demoStyles:"height: 800px;",element:s.a.createElement(c.a,null,s.a.createElement(g,{appTiles:T,dragDropLiveRegion:"",itemTiles:y,searchTerm:"sales"}))},{id:"tooltip",label:"Tooltip",demoStyles:"width: 360px; height: 135px;",element:s.a.createElement(f,{figureClass:"slds-icon-custom-27",objectInitials:"SC",label:"Sales Cloud",description:"The primary internal Salesforce org. Used to run our online sales business...",hasTooltip:!0,tooltipText:"The primary internal Salesforce org. Used to run our online sales business and manage accounts.",index:"x"})}],N=a(2);a.d(t,"getElement",function(){return I}),a.d(t,"getContents",function(){return z});var k=n.c.a,A=n.c.code,L=n.c.em,D=n.c.h2,M=n.c.h3,R=n.c.p,I=function(){return Object(l.createElement)(n.b,{},Object(l.createElement)("div",{className:"doc lead"},"The App Launcher allows the user to quickly access all the apps and functionality within their organization."),Object(l.createElement)(i.a,{isViewport:!0,exampleOnly:!0,style:{height:"600px"}},j),D({id:"About-App-Launcher"},"About App Launcher"),R({},"The App Launcher is a ",k({href:"/components/modals"},"modal dialog")," which contains 2 sections of information. The top section is a list of all the applications installed in the organization, and the second section is the list of items in that organization."),R({},"The 2 sections are implemented as ",k({href:"/components/expandable-section/"},"Expandable Sections")," and can be expanded or collapsed. Applications and Items are also searchable within the modal via the search input in the modal header."),D({id:"Base"},"Base"),Object(l.createElement)(i.a,{isViewport:!0,style:Object(N.d)(w,"default")},Object(N.e)(w,"default")),D({id:"Description-overflow"},"Description overflow"),R({},'When the tile description is too long to fit on 2 lines, a "more" ',A({},"button")," is shown after an ellipsis. Text truncation isn't handled via CSS in the case of an App Launcher Tile due to the responsive nature of the tile size."),Object(l.createElement)(o.a,{type:"note",header:"Truncate via JavaScript"},"Multi-line truncation can only be done via JavaScript. You should calculate how many characters will fit over a maximum of 2 lines, depending on the tile width and trim the string accordingly."),R({},"On hover or focus, the more ",A({},"button")," will display the full desscription using a ",k({href:"/components/tooltips"},"Tooltip")),Object(l.createElement)(i.a,{isViewport:!0,style:Object(N.d)(w,"tooltip")},Object(N.e)(w,"tooltip")),D({id:"Reordering-tiles-via-drag-and-drop"},"Reordering tiles via drag and drop"),R({},"App tiles can be re-ordered via mouse drag and drop or with the keyboard via the use of the grab handle button under the avatar. The grab handle button is implemented as a ",k({href:"/components/button-icons/#Stateful"},"Stateful Icon Button")),Object(l.createElement)(o.a,{type:"a11y",header:"Communicating to assistive technology"},"When implementing drag and drop it is important to be able to communicate what is happening visually on the screen to assistive technology users. We do this via an Assertive Live Region, which is placed before the list of tiles, and has ",Object(l.createElement)("code",{className:"docs"},'aria-live="assertive"')),M({id:"Tile-grabbed"},"Tile grabbed"),R({},"When a tile is grabbed add the class name of ",A({},"slds-is-grabbed")," to the tile class list. When initiating the grab via the stateful button, be sure to set ",A({},'aria-pressed="true"')," on the button. Also be sure to update the contents of the live region to communicate what was grabbed, its current position and how to move the item. Something like: ",L({},'"Sales Cloud: current position 1 of 6. Use the up and down arrows to move this app"')),Object(l.createElement)(i.a,{isViewport:!0,style:Object(N.d)(w,"grabbed")},Object(N.e)(w,"grabbed")),M({id:"Tile-moved-in-list"},"Tile moved in list"),R({},"When the tile is moved in the list using a keyboard, update the live region for every move to indicate its new position to the user. Something like: ",L({},'"Sales Cloud: new position 3 of 6."')),Object(l.createElement)(i.a,{isViewport:!0,style:Object(N.d)(w,"moved")},Object(N.e)(w,"moved")),M({id:"Tile-dropped"},"Tile dropped"),R({},"Finally, when a tile is dropped into its final position, reset ",A({},"aria-pressed")," to be ",A({},"false")," on the stateful button, and update the live region to inform the user of the items final position. e.g. ",L({},'"Sales Cloud: final position 4 of 6."')),Object(l.createElement)(i.a,{isViewport:!0,style:Object(N.d)(w,"dropped")},Object(N.e)(w,"dropped")),D({id:"Searching"},"Searching"),R({},"When using the search input at the top of the modal, the list of applications and items filters as the user types. The remaining items on display have the matching search term highlighted with the use of the ",A({},"<mark />")," element wrapping the matching term. This creates the visual highlight around the term."),Object(l.createElement)(i.a,{isViewport:!0,style:Object(N.d)(w,"search")},Object(N.e)(w,"search")))},z=function(){return Object(n.a)(I())}}});