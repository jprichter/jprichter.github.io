var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/progress-ring/docs.mdx.js"]=function(e){function r(r){for(var n,l,o=r[0],s=r[1],c=r[2],g=0,d=[];g<o.length;g++)l=o[g],i[l]&&d.push(i[l][0]),i[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(p&&p(r);d.length;)d.shift()();return a.push.apply(a,c||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,o=1;o<t.length;o++){var s=t[o];0!==i[s]&&(n=!1)}n&&(a.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},i={59:0},a=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=o.push.bind(o);o.push=r,o=o.slice();for(var c=0;c<o.length;c++)r(o[c]);var p=s;return a.push([254,0]),t()}({0:function(e,r){e.exports=React},18:function(e,r){e.exports=JSBeautify},19:function(e,r){e.exports=ReactDOM},254:function(e,r,t){"use strict";t.r(r);var n=t(0),i=t.n(n),a=t(3),l=t(1),o=(t(23),t(15),t(2)),s=t(57),c=t(12),p=i.a.createElement(s.a,{percent:100}),g=[{id:"progress-ring-partially-drained",label:"Partially Drained",element:i.a.createElement(s.a,{percent:88})},{id:"progress-ring-partially-filled",label:"Partially Filled",element:i.a.createElement(s.a,{percent:40,isFilling:!0})},{id:"progress-ring-warning",label:"Partially Drained With Warning Icon",element:i.a.createElement(s.a,{percent:20,isWarning:!0},i.a.createElement(c.a,{symbol:"warning",title:"Warning",assistiveText:"Warning"}))},{id:"progress-ring-partially-filled-warning",label:"Partially Filled with Warning Icon",element:i.a.createElement(s.a,{percent:75,isFilling:!0,isWarning:!0},i.a.createElement(c.a,{symbol:"warning",title:"Warning",assistiveText:"Warning"}))},{id:"progress-ring-expired",label:"With Expired Icon",element:i.a.createElement(s.a,{percent:0,isExpired:!0},i.a.createElement(c.a,{symbol:"error",title:"Expired",assistiveText:"Expired"}))},{id:"progress-ring-complete",label:"Complete",element:i.a.createElement(s.a,{percent:100,isComplete:!0},i.a.createElement(c.a,{symbol:"check",title:"Complete",assistiveText:"Complete"}))},{id:"progress-ring-large",label:"Large Size",element:i.a.createElement(s.a,{percent:100,className:"slds-progress-ring_large"})},{id:"progress-ring-active-step",label:"Active Step",element:i.a.createElement(s.a,{percent:100,isActiveStep:!0})},{id:"progress-ring-theme-warning",label:"Theme: Warning",element:i.a.createElement(s.a,{percent:100,isWarning:!0})},{id:"progress-ring-theme-expired",label:"Theme: Expired",element:i.a.createElement(s.a,{percent:100,isExpired:!0})},{id:"progress-ring-theme-complete",label:"Theme: Complete",element:i.a.createElement(s.a,{percent:100,isComplete:!0})}];t.d(r,"getElement",function(){return E}),t.d(r,"getContents",function(){return v});var d=a.c.code,u=a.c.h2,m=a.c.h3,h=a.c.h4,b=a.c.li,f=a.c.p,y=a.c.ul,E=function(){return Object(n.createElement)(a.b,{},Object(n.createElement)("div",{className:"lead doc"},"Customizable and configurable progress ring. Will display progress in a circular progress bar factor, and is capable of displaying iconography inside of the ring structure."),Object(n.createElement)(l.a,{exampleOnly:!0},Object(o.e)(g,"progress-ring-partially-filled")),u({id:"About-Progress-Ring"},"About Progress Ring"),f({},"The Progress Ring component renders a svg-based progress ring."),f({},"Content (typically iconography) can be rendered inside the progress ring. For the current supported size of this progress ring, xxs sized icons should be used."),m({id:"Implementation-Guidelines"},"Implementation Guidelines"),h({id:"Defining-Completeness"},"Defining Completeness"),f({},"The 'completeness' of the Progress Ring is indicated by the circular shape (pie slice), which is a svg shape of an arc."),f({},"The path declaration looks complex, but is actually pretty straightforward, with just a few parts that need customization."),f({},"The breakdown of the progress ring's ",d({},"d")," attribute can be broken down like so:",i.a.createElement("br",null),d({},'d="M 1 0 A 1 1 0 {isLong} 1 {arcX} {arcY} L 0 0"')),y({},b({},"isLong: a binary flag if the arc should 'take the long path' (used for > 50% fill)"),b({},"arcX: the arc's x position, formulated by Math.cos(2 * Math.PI * fillPercent)"),b({},"arcY: the arc's y position, formulated by Math.sin(2 * Math.PI * fillPercent)")),f({},"These calculations work in accordance with the defined svg viewBox, which goes from -1 to 1, on both x and y axis."),h({id:"Content"},"Content"),f({},"The Progress Ring is currently designed to display any icon from our icon set."),m({id:"Accessibility"},"Accessibility"),f({},d({},".slds-progress-ring__progress")," is the visual indicator of progress and needs proper aria roles and settings:"),y({},b({},d({},"role")," : ",d({},"progressbar")),b({},d({},"aria-valuemin")," : ",d({},"0")," // the smallest valid value"),b({},d({},"aria-valuemax")," : ",d({},"100")," // the largest valid value"),b({},d({},"aria-valuenow")," : ",d({},"{fill}")," // the current fill value")),f({},"Proper accessibility guidelines should be followed on any icons used within this Progress Ring component."),u({id:"Base"},"Base"),Object(n.createElement)(l.a,null,p),u({id:"Examples"},"Examples"),m({id:"Partially-Drained"},"Partially Drained"),Object(n.createElement)(l.a,null,Object(o.e)(g,"progress-ring-partially-drained")),m({id:"Partially-Drained-with-Warning-Icon"},"Partially Drained with Warning Icon"),Object(n.createElement)(l.a,null,Object(o.e)(g,"progress-ring-warning")),m({id:"Partially-Filled"},"Partially Filled"),Object(n.createElement)(l.a,null,Object(o.e)(g,"progress-ring-partially-filled")),m({id:"Partially-Filled-with-Warning-Icon"},"Partially Filled with Warning Icon"),Object(n.createElement)(l.a,null,Object(o.e)(g,"progress-ring-partially-filled-warning")),m({id:"With-Expired-Icon"},"With Expired Icon"),Object(n.createElement)(l.a,null,Object(o.e)(g,"progress-ring-expired")),m({id:"Complete"},"Complete"),Object(n.createElement)(l.a,null,Object(o.e)(g,"progress-ring-complete")),m({id:"Large-Size"},"Large Size"),Object(n.createElement)(l.a,null,Object(o.e)(g,"progress-ring-large")),m({id:"Active-Step"},"Active Step"),Object(n.createElement)(l.a,null,Object(o.e)(g,"progress-ring-active-step")),f({},"Set the color of the ring to the active step color."),m({id:"Theme-Warning"},"Theme - Warning"),Object(n.createElement)(l.a,null,Object(o.e)(g,"progress-ring-theme-warning")),f({},"Set the color of the ring to the warning color."),m({id:"Theme-Expired"},"Theme - Expired"),Object(n.createElement)(l.a,null,Object(o.e)(g,"progress-ring-theme-expired")),f({},"Set the color of the ring to the expired color."),m({id:"Theme-Complete"},"Theme - Complete"),Object(n.createElement)(l.a,null,Object(o.e)(g,"progress-ring-theme-complete")),f({},"Set the color of the ring to the complete color and solid fill."))},v=function(){return Object(a.a)(E())}}});