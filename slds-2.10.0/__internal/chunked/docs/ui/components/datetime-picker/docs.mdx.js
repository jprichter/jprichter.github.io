var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/datetime-picker/docs.mdx.js"]=function(e){function t(t){for(var n,o,s=t[0],r=t[1],d=t[2],m=0,u=[];m<s.length;m++)o=s[m],a[o]&&u.push(a[o][0]),a[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(c&&c(t);u.length;)u.shift()();return i.push.apply(i,d||[]),l()}function l(){for(var e,t=0;t<i.length;t++){for(var l=i[t],n=!0,s=1;s<l.length;s++){var r=l[s];0!==a[r]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=l[0]))}return e}var n={},a={26:0},i=[];function o(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=n,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(l,n,function(t){return e[t]}.bind(null,n));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=r;return i.push([257,0]),l()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},257:function(e,t,l){"use strict";l.r(t);var n=l(0),a=l.n(n),i=l(3),o=l(1),s=l(15),r=l(21),d=l(52),c=l(6),m=l(8),u=l(16),p=function(e){return a.a.createElement(r.c,{listboxClassName:"slds-dropdown slds-dropdown_fluid slds-dropdown_length-5",vertical:!0},a.a.createElement(r.d,null,a.a.createElement(r.e,{id:"listbox-option-unique-id-01",title:"6:00am"})),a.a.createElement(r.d,null,a.a.createElement(r.e,{id:"listbox-option-unique-id-02",title:"7:00am"})),a.a.createElement(r.d,null,a.a.createElement(r.e,{id:"listbox-option-unique-id-03",title:"8:00am",selected:e.optionSelected})),a.a.createElement(r.d,null,a.a.createElement(r.e,{id:"listbox-option-unique-id-04",title:"9:00am"})),a.a.createElement(r.d,null,a.a.createElement(r.e,{id:"listbox-option-unique-id-05",title:"10:00am"})),a.a.createElement(r.d,null,a.a.createElement(r.e,{id:"listbox-option-unique-id-06",title:"11:00am"})),a.a.createElement(r.d,null,a.a.createElement(r.e,{id:"listbox-option-unique-id-07",title:"12:00pm"})),a.a.createElement(r.d,null,a.a.createElement(r.e,{id:"listbox-option-unique-id-08",title:"1:00pm"})),a.a.createElement(r.d,null,a.a.createElement(r.e,{id:"listbox-option-unique-id-09",title:"2:00pm"})),a.a.createElement(r.d,null,a.a.createElement(r.e,{id:"listbox-option-unique-id-10",title:"3:00pm"})),a.a.createElement(r.d,null,a.a.createElement(r.e,{id:"listbox-option-unique-id-11",title:"4:00pm"})),a.a.createElement(r.d,null,a.a.createElement(r.e,{id:"listbox-option-unique-id-12",title:"5:00pm"})))},h=a.a.createElement("div",{className:"slds-form slds-form_compound"},a.a.createElement("fieldset",{className:"slds-form-element"},a.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Date and Time"),a.a.createElement("div",{className:"slds-form-element__control"},a.a.createElement("div",{className:"slds-form-element__group"},a.a.createElement("div",{className:"slds-form-element__row"},a.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"Date",inputId:"date-input-id",hasRightIcon:!0,dropdown:a.a.createElement(d.b,{todayActive:!0})},a.a.createElement(u.a,{id:"date-input-id",placeholder:" "}),a.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),a.a.createElement(r.a,{label:"Time",autocomplete:!0,className:"slds-combobox-picklist slds-timepicker",inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",listbox:a.a.createElement(p,null)})))))),f=[{id:"date-selection",label:"Date selected",element:a.a.createElement("div",{className:"slds-form slds-form_compound"},a.a.createElement("fieldset",{className:"slds-form-element"},a.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Date and Time"),a.a.createElement("div",{className:"slds-form-element__control"},a.a.createElement("div",{className:"slds-form-element__group"},a.a.createElement("div",{className:"slds-form-element__row"},a.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"Date",inputId:"date-input-id",hasRightIcon:!0,dropdown:a.a.createElement(d.b,{todayActive:!0,dateSelected:"single",dateRange:"week-4"})},a.a.createElement(u.a,{id:"date-input-id",placeholder:" ",defaultValue:"06/24/2014"}),a.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),a.a.createElement(r.a,{label:"Time",autocomplete:!0,className:"slds-combobox-picklist slds-timepicker",inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",listbox:a.a.createElement(p,null)}))))))},{id:"time-selection",label:"Time selected",element:a.a.createElement("div",{className:"slds-form slds-form_compound"},a.a.createElement("fieldset",{className:"slds-form-element"},a.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Date and Time"),a.a.createElement("div",{className:"slds-form-element__control"},a.a.createElement("div",{className:"slds-form-element__group"},a.a.createElement("div",{className:"slds-form-element__row"},a.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"Date",inputId:"date-input-id",hasRightIcon:!0,dropdown:a.a.createElement(d.b,{todayActive:!0,dateSelected:"single",dateRange:"week-4"})},a.a.createElement(u.a,{id:"date-input-id",placeholder:" ",defaultValue:"06/24/2014"}),a.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),a.a.createElement(r.a,{label:"Time",autocomplete:!0,isOpen:!0,className:"slds-combobox-picklist slds-timepicker",inputIcon:"right",inputIconRightSymbol:"clock",inputIconRightAssistiveText:!1,placeholder:" ",value:"8:00am",listbox:a.a.createElement(p,{optionSelected:!0})}))))))}],b=l(2);l.d(t,"getElement",function(){return S}),l.d(t,"getContents",function(){return N});var _=i.c.a,g=i.c.code,E=i.c.h2,v=i.c.h3,x=i.c.li,y=i.c.p,w=i.c.strong,k=i.c.ul,S=function(){return Object(n.createElement)(i.b,{},Object(n.createElement)("div",{className:"doc lead"},"A datetime picker is used to select a day and a time."),Object(n.createElement)(o.a,{exampleOnly:!0,style:{height:"28rem"}},h),E({id:"About-datetime-picker"},"About datetime picker"),v({id:"Implementation"},"Implementation"),y({},"The datetime is two ",_({href:"/components/form-element"},"form elements"),", each containing a label and text ",_({href:"/components/input"},"input"),", and a dropdown ",_({href:"/components/menus"},"menu"),", containing a grid-based calendar and filters. The date form element acts as a trigger for the dropdown."),Object(n.createElement)(s.a,{type:"warning"},"Placement of inline form elements inside a data table cell is not supported. Instead, use a button to invoke a popover, which does support form elements."),y({},"The datetime picker has the following markup requirements:"),y({},w({},"Desktop")),k({},x({},"Add ",g({},".slds-is-open")," to the element with ",g({},".slds-dropdown-trigger")," to invoke the dropdown that contains the datepicker and the list of time options."),x({},"On the timepicker, the ",g({},".slds-has-focus")," modifier class is required on the ",g({},".slds-listbox__option")," element that has focus."),x({},"On the timpicker, the ",g({},".slds-is-selected")," modifier class is required on the ",g({},".slds-listbox__option")," element that has been selected."),x({},"On the datepicker, the ",g({},".slds-is-selected")," modifier class is required on the ",g({},"td")," element that has the selected day."),x({},"On the datepicker, the ",g({},".slds-is-today")," modifier class is required on the ",g({},"td")," element that is the current day.")),y({},w({},"Mobile")),k({},x({},"When on mobile, we want to leverage the native datetime picker by changing the ",g({},"input")," type from ",g({},"text")," to ",g({},"datetime-local")),x({},"The ",g({},'input type="datetime-local"')," will create an input field allowing a date and time to be easily entered — this includes year, month, day, hours, and minutes."),x({},"When switching ",g({},'input type="text"')," to ",g({},'input type="datetime-local"')," for mobile, we need to remove the ARIA attributes. The native rendering doesn't require these.",k({},x({},"On the element with the class ",g({},"slds-combobox"),", please remove ",g({},'role="combobox"'),", ",g({},"aria-expanded"),", and ",g({},"aria-haspopup"),"."),x({},"On the ",g({},"input")," that we just added ",g({},'type="datetime-local"')," to, please remove ",g({},"aria-controls"),", ",g({},"aria-autocomplete"),", and ",g({},'role="textbox"'),".")))),E({id:"Base"},"Base"),Object(n.createElement)(o.a,{style:{height:"28rem"}},h),E({id:"States"},"States"),v({id:"Date-selection"},"Date selection"),Object(n.createElement)(o.a,{style:{height:"28rem"}},Object(b.e)(f,"date-selection")),v({id:"Time-selection"},"Time selection"),Object(n.createElement)(o.a,{style:{height:"28rem"}},Object(b.e)(f,"time-selection")))},N=function(){return Object(i.a)(S())}}});