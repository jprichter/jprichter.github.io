var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/vertical-tabs/base/example.jsx.js"]=function(e){function t(t){for(var n,s,o=t[0],c=t[1],i=t[2],m=0,d=[];m<o.length;m++)s=o[m],l[s]&&d.push(l[s][0]),l[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==l[c]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},l={156:0,6:0,13:0,14:0,22:0,24:0,26:0,35:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},r=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=c;return r.push([229,0]),a()}({0:function(e,t){e.exports=React},229:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),s=a.n(r);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(a=i(this,u(t).call(this,e))).state={currentTabIndex:0},a}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,l.a.Component),a=t,(n=[{key:"render",value:function(){var e=this,t=this.state.currentTabIndex,a=this.props,n=a.itemFocused,r=a.tabs;return l.a.createElement("div",{className:"slds-vertical-tabs"},l.a.createElement("ul",{className:"slds-vertical-tabs__nav",role:"tablist","aria-orientation":"vertical"},r.map(function(a,r){var o=r!==t||n?"":"slds-is-active",c=r===t&&n?"slds-has-focus":"",i=r===t?0:-1,u=r===t?"true":"false",m="slds-vertical-tabs-".concat(r),d="slds-vertical-tabs-".concat(r,"__nav");return l.a.createElement("li",{className:s()("slds-vertical-tabs__nav-item",o,c),title:a.label,role:"presentation",key:d},l.a.createElement("a",{className:"slds-vertical-tabs__link",href:"javascript:void(0)",role:"tab",tabIndex:i,"aria-selected":u,"aria-controls":m,id:d,onClick:e.handleTabClick},l.a.createElement("span",{className:"slds-vertical-tabs__left-icon"},a.leftIcon),l.a.createElement("span",{className:"slds-truncate",title:a.label},a.label),l.a.createElement("span",{className:"slds-vertical-tabs__right-icon"},a.rightIcon)))})),r.map(function(e,a){var n="slds-vertical-tabs-".concat(a),o=a===t?"slds-show":"slds-hide",c="slds-vertical-tabs-".concat(a,"__nav");return l.a.createElement("div",{className:s()("slds-vertical-tabs__content",o),id:n,role:"tabpanel","aria-labelledby":c,key:n},r[t].content)}))}}])&&c(a.prototype,n),r&&c(a,r),t}(),f=a(21),b=a(9),p=a(38),v=[{label:"Tab 1",content:l.a.createElement("div",{className:"slds-text-longform"},l.a.createElement("h3",{className:"slds-text-heading_medium"},"Tab Title"),l.a.createElement("p",null,"Content for Tab 1"),l.a.createElement("p",null,"Lorem ipsum dolor..."),l.a.createElement("p",null,"Lorem ipsum dolor..."))},{label:"Tab 2",content:l.a.createElement("div",{className:"slds-text-longform"},l.a.createElement("p",null,"Content for Tab 2"))},{label:"Tab 3 has a really long label and can wrap or truncate",content:l.a.createElement("div",{className:"slds-text-longform"},l.a.createElement("p",null,"Content for Tab 3"))}],h=[{label:"Opportunities",leftIcon:l.a.createElement(f.StandardIcon,{symbol:"opportunity",assistiveText:!1,className:"slds-icon_small"}),content:l.a.createElement("div",{className:"slds-text-longform"},l.a.createElement("h3",{className:"slds-text-heading_medium"},"Tab Title"),l.a.createElement("p",null,"Content for Tab 1"),l.a.createElement("p",null,"Lorem ipsum dolor..."),l.a.createElement("p",null,"Lorem ipsum dolor..."))},{label:"Cases",leftIcon:l.a.createElement(f.StandardIcon,{symbol:"case",assistiveText:!1,className:"slds-icon_small"}),rightIcon:l.a.createElement(b.UtilityIcon,{symbol:"error",title:"This tab has an error",assistiveText:"This tab has an error",className:"slds-icon_x-small slds-icon-text-error"}),content:l.a.createElement("div",{className:"slds-text-longform"},l.a.createElement("p",null,"Content for Tab 2"))},{label:"Accounts",leftIcon:l.a.createElement(f.StandardIcon,{symbol:"account",assistiveText:!1,className:"slds-icon_small"}),content:l.a.createElement("div",{className:"slds-text-longform"},l.a.createElement("p",null,"Content for Tab 3"))}],y=[{label:"Opportunities",leftIcon:l.a.createElement(f.StandardIcon,{symbol:"opportunity",assistiveText:!1,className:"slds-icon_small"}),rightIcon:l.a.createElement(p.a,{isInverse:!0},"New"),content:l.a.createElement("div",{className:"slds-text-longform"},l.a.createElement("h3",{className:"slds-text-heading_medium"},"Tab Title"),l.a.createElement("p",null,"Content for Tab 1"),l.a.createElement("p",null,"Lorem ipsum dolor..."),l.a.createElement("p",null,"Lorem ipsum dolor..."))},{label:"Cases",leftIcon:l.a.createElement(f.StandardIcon,{symbol:"case",assistiveText:!1,className:"slds-icon_small"}),rightIcon:l.a.createElement(p.a,{isInverse:!0},"New"),content:l.a.createElement("div",{className:"slds-text-longform"},l.a.createElement("p",null,"Content for Tab 2"))},{label:"Accounts",leftIcon:l.a.createElement(f.StandardIcon,{symbol:"account",assistiveText:!1,className:"slds-icon_small"}),content:l.a.createElement("div",{className:"slds-text-longform"},l.a.createElement("p",null,"Content for Tab 3"))}];a.d(t,"examples",function(){return _});t.default=l.a.createElement(d,{tabs:v});var _=[{id:"with-icons",label:"With icons",element:l.a.createElement(d,{tabs:h})},{id:"with-badges",label:"With badges",element:l.a.createElement(d,{tabs:y})},{id:"item-focus",label:"Item Focus",element:l.a.createElement(d,{itemFocused:!0,tabs:v})}]}});