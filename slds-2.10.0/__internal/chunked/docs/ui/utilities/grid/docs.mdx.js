var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/utilities/grid/docs.mdx.js"]=function(e){function t(t){for(var s,i,r=t[0],o=t[1],c=t[2],m=0,u=[];m<r.length;m++)i=r[m],n[i]&&u.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);for(d&&d(t);u.length;)u.shift()();return a.push.apply(a,c||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],s=!0,r=1;r<l.length;r++){var o=l[r];0!==n[o]&&(s=!1)}s&&(a.splice(t--,1),e=i(i.s=l[0]))}return e}var s={},n={91:0},a=[];function i(t){if(s[t])return s[t].exports;var l=s[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=s,i.d=function(e,t,l){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(l,s,function(t){return e[t]}.bind(null,s));return l},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=o;return a.push([243,0]),l()}({0:function(e,t){e.exports=React},125:function(e,t,l){var s=l(126);"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0};l(74)(s,n);s.locals&&(e.exports=s.locals)},126:function(e,t){e.exports=".simple-grid .slds-grid {\n  height: 8.75rem;\n  margin-bottom: 1rem; }\n\n.simple-grid_small .slds-grid {\n  height: auto; }\n\n.simple-grid .slds-grid > .slds-grid {\n  height: auto;\n  margin-bottom: 0; }\n\n.simple-grid .slds-col {\n  display: inline-flex;\n  background: #54698d;\n  color: #fff;\n  text-align: center;\n  background-clip: content-box;\n  border: 1px solid #fff;\n  border-radius: 0; }\n\n.simple-grid .slds-col > span {\n  align-self: center;\n  margin: auto;\n  font-size: 1.575rem;\n  padding: 0.5rem; }\n\n.simple-grid .slds-wrap {\n  align-items: stretch; }\n\n.simple-grid__buttons {\n  margin: auto; }\n\n.simple-grid_bare-columns .slds-grid > div {\n  display: inline-flex;\n  background: #54698d;\n  color: #fff;\n  text-align: center;\n  background-clip: content-box;\n  border: 1px solid #fff;\n  border-radius: 0; }\n\n.simple-grid_bare-columns .slds-grid > div > span {\n  align-self: center;\n  margin: auto;\n  font-size: 1.575rem;\n  padding: 0.5rem; }\n"},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},243:function(e,t,l){"use strict";l.r(t);var s=l(0),n=l.n(s),a=l(3),i=l(1),r=(l(125),l(5)),o=l.n(r);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function m(e,t){for(var l=0;l<t.length;l++){var s=t[l];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){var t=e.count+1;return n.a.createElement("div",{className:o()("slds-col",e.className)},e.count>=0?n.a.createElement("span",null,t):n.a.createElement("span",null,e.children))},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,b(t).apply(this,arguments))}var l,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,s["Component"]),l=t,(a=[{key:"render",value:function(){for(var e=[],t=0;t<this.props.columns;t+=1)e.push({key:t,count:t});return n.a.createElement("div",{className:o()("simple-grid",this.props.small&&"simple-grid_small",this.props.bareGrid&&"simple-grid_bare-columns")},n.a.createElement(i.a,null,n.a.createElement("div",{className:o()("slds-grid",this.props.className),style:this.props.style},this.props.columns?e.map(function(e){return n.a.createElement(g,d({key:e.key},e))}):this.props.children)))}}])&&m(l.prototype,a),r&&m(l,r),t}(),f=l(9),O=l(15);l.d(t,"getElement",function(){return R}),l.d(t,"getContents",function(){return I});var j=a.c.code,y=a.c.em,E=a.c.h2,w=a.c.h3,_=a.c.h4,v=a.c.li,N=a.c.ol,x=a.c.p,z=a.c.strong,C=a.c.table,T=a.c.tbody,k=a.c.td,G=a.c.th,S=a.c.thead,A=a.c.tr,R=function(){return Object(s.createElement)(a.b,{},Object(s.createElement)("div",{className:"doc lead"},"The SLDS grid system provides a flexible, mobile-first, device-agnostic layout system. It  has features to control alignment, order, flow, and gutters."),E({id:"About-Grids"},"About Grids"),x({},"Our most-used grid has standard 16px gutters. If you don’t have a design that calls for something more specific, this is the grid you’ll want to use. We’ll also show you exactly how to customize it for your use-case."),x({},z({},"To build a grid:")),N({},v({},"Add a grid container by adding ",j({},"slds-grid")," to an HTML element"),v({},"Add as many ",j({},"slds-col")," elements as you want inside of your grid container")),Object(s.createElement)(f.a,{title:"Grid Intro 3 col with gutters"},Object(s.createElement)(p,{columns:"3",className:"slds-gutters"})),x({},"Initially, each column takes an equal percentage of the width available. In this case, that's 33.3% of the container’s width. Once content is added, the sections expand as needed to fit the content if sizing classes are not used."),Object(s.createElement)(f.a,{title:"Grid Intro 4 col with gutters"},Object(s.createElement)(p,{columns:"4",className:"slds-gutters"})),x({},"Adding a fourth column means they'll each take up 25% of the width of the container."),E({id:"12-Column-Support"},"12 Column Support"),x({},"You can have up to 12 columns in your grid."),Object(s.createElement)(f.a,{title:"Grid Intro 12 col"},Object(s.createElement)(p,{columns:"12"})),E({id:"Column-Widths"},"Column Widths"),x({},"If you don’t want the columns to have widths based on their content, you can easily control the width of the columns by adding column width classes."),Object(s.createElement)(f.a,{title:"Grid Column Width 2 col"},Object(s.createElement)(p,{className:"slds-gutters"},Object(s.createElement)(g,{className:"slds-size_2-of-3"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-3"},"2"))),x({},"This example sets the width of the first column 66% of your ",j({},"slds-grid")," container and the second column to 33% of your ",j({},"slds-grid")," container."),Object(s.createElement)(O.a,{header:"Tip"},"Our sizing classes set widths in percentages. This will keep your layout fluid to the width of your ",Object(s.createElement)("code",{className:"doc"},"slds-grid")," container."),x({},"A 12 column grid is our most used grid. Here's an overview of all the available width classes for a 12 column grid:"),Object(s.createElement)(f.a,{title:"Grid Column Width all options"},Object(s.createElement)(p,{small:!0,className:"slds-wrap"},Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_2-of-12"},"2"),Object(s.createElement)(g,{className:"slds-size_2-of-12"},"2"),Object(s.createElement)(g,{className:"slds-size_2-of-12"},"2"),Object(s.createElement)(g,{className:"slds-size_2-of-12"},"2"),Object(s.createElement)(g,{className:"slds-size_2-of-12"},"2"),Object(s.createElement)(g,{className:"slds-size_2-of-12"},"2"),Object(s.createElement)(g,{className:"slds-size_3-of-12"},"3"),Object(s.createElement)(g,{className:"slds-size_3-of-12"},"3"),Object(s.createElement)(g,{className:"slds-size_3-of-12"},"3"),Object(s.createElement)(g,{className:"slds-size_3-of-12"},"3"),Object(s.createElement)(g,{className:"slds-size_4-of-12"},"4"),Object(s.createElement)(g,{className:"slds-size_4-of-12"},"4"),Object(s.createElement)(g,{className:"slds-size_4-of-12"},"4"),Object(s.createElement)(g,{className:"slds-size_5-of-12"},"5"),Object(s.createElement)(g,{className:"slds-size_5-of-12"},"5"),Object(s.createElement)(g,{className:"slds-size_2-of-12"},"2"),Object(s.createElement)(g,{className:"slds-size_6-of-12"},"6"),Object(s.createElement)(g,{className:"slds-size_6-of-12"},"6"),Object(s.createElement)(g,{className:"slds-size_7-of-12"},"7"),Object(s.createElement)(g,{className:"slds-size_5-of-12"},"5"),Object(s.createElement)(g,{className:"slds-size_8-of-12"},"8"),Object(s.createElement)(g,{className:"slds-size_4-of-12"},"4"),Object(s.createElement)(g,{className:"slds-size_9-of-12"},"9"),Object(s.createElement)(g,{className:"slds-size_3-of-12"},"3"),Object(s.createElement)(g,{className:"slds-size_10-of-12"},"10"),Object(s.createElement)(g,{className:"slds-size_2-of-12"},"2"),Object(s.createElement)(g,{className:"slds-size_11-of-12"},"11"),Object(s.createElement)(g,{className:"slds-size_1-of-12"},"1"))),x({},"Since width class names are written in a human-friendly way, you may choose to write ",j({},"slds-size_1-of-2")," or ",j({},"slds-size_6-of-12"),", both outcomes are the same."),Object(s.createElement)(f.a,{title:"Grid Column Width all fraction options"},Object(s.createElement)(p,{small:!0,className:"slds-wrap"},Object(s.createElement)(g,{className:"slds-size_1-of-6"},"1/6"),Object(s.createElement)(g,{className:"slds-size_1-of-6"},"1/6"),Object(s.createElement)(g,{className:"slds-size_1-of-6"},"1/6"),Object(s.createElement)(g,{className:"slds-size_1-of-6"},"1/6"),Object(s.createElement)(g,{className:"slds-size_1-of-6"},"1/6"),Object(s.createElement)(g,{className:"slds-size_1-of-6"},"1/6"),Object(s.createElement)(g,{className:"slds-size_1-of-4"},"1/4"),Object(s.createElement)(g,{className:"slds-size_1-of-4"},"1/4"),Object(s.createElement)(g,{className:"slds-size_1-of-4"},"1/4"),Object(s.createElement)(g,{className:"slds-size_1-of-4"},"1/4"),Object(s.createElement)(g,{className:"slds-size_1-of-3"},"1/3"),Object(s.createElement)(g,{className:"slds-size_1-of-3"},"1/3"),Object(s.createElement)(g,{className:"slds-size_1-of-3"},"1/3"),Object(s.createElement)(g,{className:"slds-size_1-of-2"},"1/2"),Object(s.createElement)(g,{className:"slds-size_1-of-2"},"1/2"),Object(s.createElement)(g,{className:"slds-size_1-of-1"},"1/1"))),E({id:"Column-Gutters"},"Column Gutters"),x({},"By default, we start with 0 gutters on our columns. This allows flexibility to add gutter widths of your liking to each column(s) or grid container."),x({},"You can easily add padding to your grid by applying ",j({},"slds-gutters")," to the ",j({},"slds-grid")," container. This will add the gutters to your columns as well as align the outside of your grid."),Object(s.createElement)(f.a,{title:"Grid Column Gutters 2 col basic"},Object(s.createElement)(p,{columns:"2",className:"slds-gutters"})),x({},"In the above example, adding ",j({},"slds-gutters")," will give us our default gutter size of 24px (12px on each side)."),Object(s.createElement)(O.a,{type:"note"},"The default ",Object(s.createElement)("code",{className:"doc"},"slds-gutters")," is subject to change over time but is a great way to ensure when we upgrade, you upgrade."),x({},"You can modify the width of the gutters between each column by using ",j({},"slds-gutters_x-small")," (16px), ",j({},"slds-gutters_small")," (24px), ",j({},"slds-gutters_medium")," (32px), ",j({},"slds-gutters_large")," (48px), and ",j({},"slds-gutters_x-large")," (64px)."),x({},"You can also add different gutter widths to your columns by using a spacing utility and adding it to the ",j({},"slds-col")," element (e.g. ",j({},"slds-p-location_size-*"),'). The "location" can be ',z({},"left"),", ",z({},"right"),", ",z({},"top"),", ",z({},"bottom"),", ",z({},"vertical"),", ",z({},"horizontal")," or ",z({},"around"),'. The "size" can be ',z({},"xxx-small")," (2px), ",z({},"xx-small")," (4px), ",z({},"x-small")," (8px), ",z({},"small")," (12px), ",z({},"medium")," (16px), ",z({},"large (24px)"),", ",z({},"x-large")," (32px) or ",z({},"xx-large")," (48px)."),Object(s.createElement)(f.a,{title:"Grid Column Gutters 2 col utilities"},Object(s.createElement)(p,null,Object(s.createElement)(g,{className:"slds-p-horizontal_medium"},"1"),Object(s.createElement)(g,{className:"slds-p-horizontal_medium"},"2"))),x({},"The above example adds gutters of 32px (16px on each side) in between each column."),x({},"You'll notice the 16px space on the left and right of your container created by the spacing classes. You can remove this by adding a ",j({},"slds-grid_pull-padded-[size]")," class to the ",j({},"slds-grid")," container. The ",j({},"[size]")," portion of this class should be the name of the spacing utility size you've applied to the outermost columns."),Object(s.createElement)(f.a,{title:"Grid Column Gutters 2 col pull padded"},Object(s.createElement)(p,{className:"slds-grid_pull-padded-medium"},Object(s.createElement)(g,{className:"slds-p-horizontal_medium"},"1"),Object(s.createElement)(g,{className:"slds-p-horizontal_medium"},"2"))),w({id:"Direct-Columns-Only"},"Direct Columns Only"),x({},"By default, ",j({},"slds-gutters")," will apply to ",y({},"any")," column nested within the grid. If you only want ",z({},"direct")," child columns to receive gutters, use the ",j({},"slds-gutters_direct")," class."),x({},"You can modify the width of the gutters between each column by using ",j({},"slds-gutters_direct-x-small")," (16px), ",j({},"slds-gutters_direct-small")," (24px), ",j({},"slds-gutters_direct-medium")," (32px), ",j({},"slds-gutters_direct-large")," (48px), and ",j({},"slds-gutters_direct-x-large")," (64px)."),Object(s.createElement)(f.a,{title:"Grid Direct Column Gutters"},Object(s.createElement)(p,{className:"slds-gutters_direct"},Object(s.createElement)(g,null,"1"),Object(s.createElement)("div",{className:"slds-grid"},Object(s.createElement)(g,null,"Nested Column 1"),Object(s.createElement)(g,null,"Nested Column 2")),Object(s.createElement)(g,null,"3"))),x({},"Below is the same example without using the ",j({},"slds-gutters_direct")," class:"),Object(s.createElement)(f.a,{title:"Grid All Children Column Gutters"},Object(s.createElement)(p,{className:"slds-gutters"},Object(s.createElement)(g,null,"1"),Object(s.createElement)("div",{className:"slds-grid"},Object(s.createElement)(g,null,"Nested Column 1"),Object(s.createElement)(g,null,"Nested Column 2")),Object(s.createElement)(g,null,"3"))),E({id:"Column-Wrapping"},"Column Wrapping"),x({},"By default, your columns will align themselves horizontally unless you tell them otherwise. If you are using sizing classes (e.g. ",j({},"slds-size_4-of-12"),") and the total # of columns in a row exceed 12 then you can let the grid container know to wrap your columns to a new row by adding ",j({},"slds-wrap")," to the ",j({},"slds-grid")," container."),Object(s.createElement)(f.a,{title:"Grid Column Wrapping 3 col"},Object(s.createElement)(p,{className:"slds-wrap"},Object(s.createElement)(g,{className:"slds-size_8-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_5-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_5-of-12"},"1"))),E({id:"Column-Reordering"},"Column Reordering"),Object(s.createElement)(O.a,{type:"a11y",header:"Accessibility concern"},"You can visually reorder columns independently from their position in the markup, but you should avoid doing so if you wish to remain WCAG compliant."),Object(s.createElement)(f.a,{title:"Grid Column Reordering 3 col"},Object(s.createElement)(p,null,Object(s.createElement)(g,{className:"slds-order_3"},"1"),Object(s.createElement)(g,{className:"slds-order_1"},"2"),Object(s.createElement)(g,{className:"slds-order_2"},"3"))),E({id:"Column-Nesting"},"Column Nesting"),x({},"Nesting columns is simple and can add more flexibility in your designs. In a column, you can add a nested grid by creating another ",j({},"slds-grid")," container and as many ",j({},"slds-col")," elements inside of that container as you need."),Object(s.createElement)(f.a,{title:"Grid Column Nesting"},Object(s.createElement)(p,{className:"slds-wrap"},Object(s.createElement)(g,{className:"slds-size_10-of-12"},"1"),Object(s.createElement)("div",{className:"slds-col slds-grid slds-size_1-of-2"},Object(s.createElement)(g,{className:"slds-size_1-of-2"},"Nested: 1"),Object(s.createElement)(g,{className:"slds-size_1-of-2"},"Nested: 2")))),E({id:"Grid-Flow"},"Grid Flow"),x({},"Once an ",j({},"slds-grid")," has been set, you can change things like flow. By ",y({},"default"),", a grid flows left to right on the main horizontal axis. You can easily switch your grid to flow top to bottom on a vertical axis by adding ",j({},"slds-grid_vertical")," to the ",j({},"slds-grid")," container."),w({id:"Left-to-Right"},"Left to Right"),x({},"The default flow is left to right on the horizontal axis"),Object(s.createElement)(f.a,{title:"Grid Default Left to Right"},Object(s.createElement)(p,{columns:"3"})),w({id:"Top-to-Bottom"},"Top to Bottom"),x({},"To switch the grid to flow top to bottom on the vertical axis, add ",j({},"slds-grid_vertical")," to the ",j({},"slds-grid")," container."),Object(s.createElement)(f.a,{title:"Grid Vertical Align"},Object(s.createElement)(p,{className:"slds-grid_vertical"},Object(s.createElement)(g,null,"1"),Object(s.createElement)(g,null,"2"),Object(s.createElement)(g,null,"3"))),w({id:"Reversed"},"Reversed"),x({},"There may be times you find yourself in a situation to reverse the visual flow of your columns. You can do this both horizontally and vertically."),_({id:"Right-to-Left"},"Right to Left"),x({},"To reverse the horizontal flow, add the class ",j({},"slds-grid_reverse")," to the ",j({},"slds-grid")," container."),Object(s.createElement)(f.a,{title:"Grid Horizontal Reversed"},Object(s.createElement)(p,{className:"slds-grid_reverse"},Object(s.createElement)(g,null,"1"),Object(s.createElement)(g,null,"2"),Object(s.createElement)(g,null,"3"))),_({id:"Bottom-to-Top"},"Bottom to Top"),x({},"To reverse the vertical flow, add the class ",j({},"slds-grid_vertical-reverse")," to the ",j({},"slds-grid")," container."),Object(s.createElement)(f.a,{title:"Grid Vertical Align Reversed"},Object(s.createElement)(p,{className:"slds-grid_vertical-reverse",style:{height:"200px"}},Object(s.createElement)(g,null,"1"),Object(s.createElement)(g,null,"2"),Object(s.createElement)(g,null,"3"))),E({id:"Creating-Responsive-Layouts"},"Creating Responsive Layouts"),x({},"The SLDS grid system can become responsive to your viewport size by prefixing our sizing and ordering classes with a breakpoint name. Our responsive sizing utilities are built upon a mobile first approach."),x({},"To achieve the desired outcome of this approach, you will need to append responsive sizing utilities to an element that override the previous breakpoint."),x({},"This means the sizing utility used will start at the smallest width and continue to be applied until a responsive sizing utility for a specific breakpoint overrides it."),x({},"In some uncommon cases, you may need a sizing utility that is up to a certain breakpoint. For these, use the classes prefixed with ",j({},"max-")," to achieve this result."),_({id:"Responsive-Layout-Options"},"Responsive Layout Options"),x({},"Below is an overview table outlining the default behavior for columns and how that behavior may change for responsive breakpoints."),C({},S({},A({},G({}),G({},"Default"),G({},"Small (>= 480px)"),G({},"Medium (>=768px)"),G({},"Large (>=1024px)"))),T({},A({},k({},"Width class prefix"),k({},j({},"slds-size")),k({},j({},"slds-small-size")),k({},j({},"slds-medium-size")),k({},j({},"slds-large-size"))),A({},k({},"# of columns"),k({},"1,2,3,4,5,6,7,8 and 12"),k({}),k({}),k({})),A({},k({},"Column ordering prefix"),k({},j({},"slds-order")),k({},j({},"slds-small-order")),k({},j({},"slds-medium-order")),k({},j({},"slds-large-order"))),A({},k({},"Max # of reorders"),k({},"12"),k({}),k({}),k({})))),Object(s.createElement)(O.a,null,"Note: To make sure columns wrap as they exceed a total column count of 12, responsive layouts require ",Object(s.createElement)("code",{className:"doc"},"slds-wrap")," to be added to the ",Object(s.createElement)("code",{className:"doc"},"slds-grid")," container."),_({id:"MobileDesktop-Example"},"Mobile/Desktop Example"),x({},"Since we build on the concept of mobile first, let's set a layout for mobile and override for desktop directly in our HTML. We do this by setting a mobile, in this case default widths to our columns and override the layout when we meet the criteria of a desktop viewport size."),Object(s.createElement)(f.a,{title:"Grid Responsive 2 col mobile desktop"},Object(s.createElement)(p,{className:"slds-wrap"},Object(s.createElement)(g,{className:"slds-size_1-of-1 slds-large-size_8-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-1 slds-large-size_4-of-12"},"2"))),x({},"In the above example, we are setting a stacked layout for mobile/tablet devices and then when our viewport exceeds a width of 1024px we redraw our layout to be a nice two column where the primary content area takes up 8 columns and the secondary content area takes up 4 columns."),_({id:"MobileTabletDesktop-Example"},"Mobile/Tablet/Desktop Example"),x({},"If our designs need a bit more flexibility, we can accomplish that by establishing different layouts for mobile, tablet, and desktop."),Object(s.createElement)(f.a,{title:"Grid Responsive 2 col mobile tablet desktop"},Object(s.createElement)(p,{className:"slds-wrap"},Object(s.createElement)(g,{className:"slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_8-of-12"},"1"),Object(s.createElement)(g,{className:"slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_4-of-12"},"2"))),x({},"In this above example, we are setting our default stacked layout and when our browser exceeds a viewport width of 768px, we adjust the layout for each column to take up 50% or 6 columns of the slds-grid container. Then once we exceed a viewport width of 1024px, we again redraw a layout to be a nice 66% or 8 columns for the primary content area and 33% or 4 columns for the secondary content area."),_({id:"Conditional-Column-Reordering"},"Conditional Column Reordering"),x({},"With flexbox it's easy to reorder your columns visually. Luckily with the SLDS grid system it's easy to reorder visually in a responsive manner! Following the same naming convention as sizing, we'll want to prefix ",j({},"slds-order")," with our breakpoint name and pass in an integer for where you want it visually. The lowest value is the first in order. If no order is defined, standard ordering is applied. This means that a column with no order class will render before ",j({},"slds-order_1"),"."),Object(s.createElement)(f.a,{title:"Grid Responsive Reordering 2 col mobile desktop"},Object(s.createElement)(p,null,Object(s.createElement)(g,{className:"slds-order_2 slds-large-order_1"},"1"),Object(s.createElement)(g,{className:"slds-order_1 slds-large-order_2"},"2"))),x({},"In the above example, we're setting our first column to be last in the order of 3. Then once your viewport exceeds a width of 1024px, we're changing the visual order of our first column back to 1. Now this seemed rather long winded to move 1 column. Below is an easy way of letting the column know you only want to reorder the first column if it's in a viewport smaller than 480px. This breaks the convention of mobile first and should be used sparingly."),E({id:"Alignment"},"Alignment"),x({},"Since the grids are built on flexbox, they allow us to do some interesting things with alignment on both a horizontal axis and vertical axis. You can add an alignment utility to the ",j({},"slds-grid")," container."),w({id:"Horizontal-Axis"},"Horizontal Axis"),_({id:"Content-centered"},"Content centered"),x({},"If you want your columns to grow from the the center of the horizontal axis, apply the class ",j({},"slds-grid_align-center"),"."),Object(s.createElement)(f.a,{title:"Grid Horizontal Align center basic"},Object(s.createElement)(p,{className:"slds-grid_align-center"},Object(s.createElement)(g,null,"1"),Object(s.createElement)(g,null,"2"),Object(s.createElement)(g,null,"3"))),_({id:"Setting-variable-widths-based-on-content"},"Setting variable widths based on content"),x({},"Another powerful technique is letting a column shrink to the width of the content inside of it, while explicitly setting widths to other columns. This is achieved by using the ",j({},"slds-shrink-none")," or ",j({},"slds-grow-none")," utility classes or simply removing the ",j({},"slds-col")," class from the column element."),Object(s.createElement)(f.a,{title:"Grid Horizontal Align center variable"},Object(s.createElement)(p,{className:"slds-grid_align-center"},Object(s.createElement)(g,{className:"slds-size_1-of-6"},"1"),Object(s.createElement)(g,{className:"slds-grow-none"},"2"),Object(s.createElement)(g,{className:"slds-size_1-of-6"},"3"))),_({id:"Content-evenly-spaced-out"},"Content evenly spaced out"),x({},"To evenly distribute columns on the horizontal axis with an equal amount of white space separating the columns, apply the class ",j({},"slds-grid_align-space"),"."),Object(s.createElement)(f.a,{title:"Grid Horizontal Align spaced"},Object(s.createElement)(p,{className:"slds-grid_align-space"},Object(s.createElement)(g,null,"1"),Object(s.createElement)(g,null,"2"),Object(s.createElement)(g,null,"3"))),_({id:"Content-evenly-spread-out-from-edges"},"Content evenly spread out from edges"),x({},"To spread out your columns on the horizontal axis, with the first column starting at the start of your main axis and last item ending at the far end of your main axis, apply the class ",j({},"slds-grid_align-spread"),"."),Object(s.createElement)(f.a,{title:"Grid Horizontal Align spread"},Object(s.createElement)(p,{className:"slds-grid_align-spread"},Object(s.createElement)(g,null,"1"),Object(s.createElement)(g,null,"2"),Object(s.createElement)(g,null,"3"))),_({id:"Content-right-justified"},"Content right justified"),x({},"If you want your columns to grow from the end of the horizontal axis, apply the class ",j({},"slds-grid_align-end"),"."),Object(s.createElement)(f.a,{title:"Grid Horizontal Align end"},Object(s.createElement)(p,{className:"slds-grid_align-end"},Object(s.createElement)(g,null,"1"),Object(s.createElement)(g,null,"2"),Object(s.createElement)(g,null,"3"))),_({id:"Content-alignment-with-bump"},"Content alignment with bump"),x({},'To "bump" a single or multiple grid items, apply the class ',j({},"slds-col_bump-{direction}"),", with ",j({},"{direction}")," being either left, right, top or bottom, to a grid item."),x({},z({},"Bump Left")),x({},"In the example below, applying the left bump class to item 5 bumps items 1 through 4 to the left."),Object(s.createElement)(f.a,{title:"Grid Content Alignment Bump Left"},Object(s.createElement)(p,{bareGrid:!0},Object(s.createElement)("div",null,Object(s.createElement)("span",null,"1")),Object(s.createElement)("div",null,Object(s.createElement)("span",null,"2")),Object(s.createElement)("div",null,Object(s.createElement)("span",null,"3")),Object(s.createElement)("div",null,Object(s.createElement)("span",null,"4")),Object(s.createElement)("div",{className:"slds-col_bump-left"},Object(s.createElement)("span",null,"5")),Object(s.createElement)("div",null,Object(s.createElement)("span",null,"6")))),x({},z({},"Bump Right")),x({},"In the example below, applying the right bump class to item 5 bumps item 6 to the right."),Object(s.createElement)(f.a,{title:"Grid Content Alignment Bump Right"},Object(s.createElement)(p,{bareGrid:!0},Object(s.createElement)("div",null,Object(s.createElement)("span",null,"1")),Object(s.createElement)("div",null,Object(s.createElement)("span",null,"2")),Object(s.createElement)("div",null,Object(s.createElement)("span",null,"3")),Object(s.createElement)("div",null,Object(s.createElement)("span",null,"4")),Object(s.createElement)("div",{className:"slds-col_bump-right"},Object(s.createElement)("span",null,"5")),Object(s.createElement)("div",null,Object(s.createElement)("span",null,"6")))),w({id:"Vertical-Axis"},"Vertical Axis"),Object(s.createElement)(O.a,{type:"note",header:"Implementation Note"},"To vertically align elements on a cross-axis of a `slds-grid` container, the elements need available vertical white space. This is usually achieved by having a height applied to the `slds-grid` container."),_({id:"Content-top"},"Content top"),x({},"To align a single row or multi-line rows to the beginning of the cross axis, apply the class ",j({},"slds-grid_vertical-align-start"),"."),Object(s.createElement)(f.a,{title:"Grid Vertical Align start"},Object(s.createElement)(p,{className:"slds-grid_vertical-align-start",style:{height:"200px"}},Object(s.createElement)(g,null,"1"),Object(s.createElement)(g,null,"2"),Object(s.createElement)(g,null,"3"))),_({id:"Content-centered-2"},"Content centered"),x({},"To vertically center align a single row or multi-line rows to the height of a ",j({},"slds-grid")," container, apply the class ",j({},"slds-grid_vertical-align-center"),". When ",j({},"slds-grid_vertical-align-center")," is used in conjunction with ",j({},"slds-grid_align-center"),", the outcome would horizontally and vertically center align your content in the center of the ",j({},"slds-grid")," container."),Object(s.createElement)(f.a,{title:"Grid Vertical Align center"},Object(s.createElement)(p,{className:"slds-grid_vertical-align-center",style:{height:"200px"}},Object(s.createElement)(g,null,"1"),Object(s.createElement)(g,null,"2"),Object(s.createElement)(g,null,"3"))),_({id:"Content-bottom"},"Content bottom"),x({},"To align a single row or multi-line rows to the end of the cross axis, apply the class ",j({},"slds-grid_vertical-align-end"),"."),Object(s.createElement)(f.a,{title:"Grid Vertical Align end"},Object(s.createElement)(p,{className:"slds-grid_vertical-align-end",style:{height:"200px"}},Object(s.createElement)(g,null,"1"),Object(s.createElement)(g,null,"2"),Object(s.createElement)(g,null,"3"))),_({id:"Content-absolutely-centered"},"Content absolutely centered"),Object(s.createElement)(f.a,{title:"Grid Vertical Align absolute center"},Object(s.createElement)(p,{className:"slds-grid_vertical-align-center slds-grid_align-center",style:{height:"200px"}},Object(s.createElement)(g,null,"1"),Object(s.createElement)(g,null,"2"),Object(s.createElement)(g,null,"3"))),_({id:"Individual-alignment"},"Individual alignment"),x({},"To specify the vertical placement of grid items on the cross axis, you can apply ",j({},"slds-align-top"),", ",j({},"slds-align-middle"),", and ",j({},"slds-align-bottom")," to a ",j({},"slds-col")," element."),Object(s.createElement)(f.a,{title:"Grid Vertical Align individual"},Object(s.createElement)(p,{style:{height:"200px"}},Object(s.createElement)(g,{className:"slds-align-top"},"1"),Object(s.createElement)(g,{className:"slds-align-middle"},"2"),Object(s.createElement)(g,{className:"slds-align-bottom"},"3"))),E({id:"Page-Containers"},"Page Containers"),x({},"Optionally, you can contain your page content by adding the class ",j({},"slds-container_width")," to a top level element in your page structure."),x({},"Containers come in 4 widths, ",z({},"small"),", ",z({},"medium"),", ",z({},"large")," and ",z({},"x-large"),". They are rendered using ",j({},"max-width"),". This means your content will be a fluid width until it reaches the width the modifier has set on the container."),C({},S({},A({},G({},"Class"),G({},"Width"))),T({},A({},k({},j({},"slds-container_small")),k({},"480px")),A({},k({},j({},"slds-container_medium")),k({},"768px")),A({},k({},j({},"slds-container_large")),k({},"1024px")),A({},k({},j({},"slds-container_x-large")),k({},"1280px")))),x({},"Additionally, you can center the content of your page by adding ",j({},"slds-container_center"),"."))},I=function(){return Object(a.a)(R())}}});