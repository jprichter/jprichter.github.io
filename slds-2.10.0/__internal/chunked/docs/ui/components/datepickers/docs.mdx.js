var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/datepickers/docs.mdx.js"]=function(e){function t(t){for(var l,d,r=t[0],i=t[1],o=t[2],m=0,u=[];m<r.length;m++)d=r[m],n[d]&&u.push(n[d][0]),n[d]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);for(c&&c(t);u.length;)u.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],l=!0,r=1;r<a.length;r++){var i=a[r];0!==n[i]&&(l=!1)}l&&(s.splice(t--,1),e=d(d.s=a[0]))}return e}var l={},n={25:0},s=[];function d(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.m=e,d.c=l,d.d=function(e,t,a){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)d.d(a,l,function(t){return e[t]}.bind(null,l));return a},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var c=i;return s.push([285,0]),a()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},285:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),s=a(3),d=a(1),r=(a(26),a(41),a(15)),i=a(2),o=a(52),c=a(6),m=a(8),u=a(16),p=function(e){return n.a.createElement("div",{style:{height:"25rem"}},e.children)},h=n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"Start Date",inputId:"date-input-id-01",hasRightIcon:!0,dropdown:n.a.createElement(o.b,{todayActive:!0})},n.a.createElement(u.a,{id:"date-input-id-01",placeholder:" "}),n.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"End Date",inputId:"date-input-id-02",hasRightIcon:!0},n.a.createElement(u.a,{id:"date-input-id-02",placeholder:" "}),n.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"}))))))),g=[{id:"start-date",label:"Start date selected",element:n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"Start Date",inputId:"date-input-id-01",hasRightIcon:!0,dropdown:n.a.createElement(o.b,{todayActive:!0,dateSelected:"single",dateRange:"week-4"})},n.a.createElement(u.a,{id:"date-input-id-01",placeholder:" ",defaultValue:"06/24/2014"}),n.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"End Date",inputId:"date-input-id-02",hasRightIcon:!0},n.a.createElement(u.a,{id:"date-input-id-02",placeholder:" "}),n.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})))))))},{id:"end-date-week",label:"End date selected (Same week)",element:n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"Start Date",inputId:"date-input-id-01",hasRightIcon:!0},n.a.createElement(u.a,{id:"date-input-id-01",placeholder:" ",defaultValue:"06/24/2014"}),n.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"End Date",inputId:"date-input-id-02",hasRightIcon:!0,dropdown:n.a.createElement(o.b,{todayActive:!0,dateSelected:!0,dateRange:"week-4"})},n.a.createElement(u.a,{id:"date-input-id-02",placeholder:" ",defaultValue:"06/27/2014"}),n.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})))))))},{id:"end-date-weeks",label:"End date selected (Different week)",element:n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"Start Date",inputId:"date-input-id-01",hasRightIcon:!0},n.a.createElement(u.a,{id:"date-input-id-01",placeholder:" ",defaultValue:"06/24/2014"}),n.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"End Date",inputId:"date-input-id-02",hasRightIcon:!0,dropdown:n.a.createElement(o.b,{todayActive:!0,dateSelected:!0,dateRange:"week-4-5",dateRangeMulti:!0})},n.a.createElement(u.a,{id:"date-input-id-02",placeholder:" ",defaultValue:"06/29/2014"}),n.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})))))))},{id:"today-in-range",label:"Today - In selected range",element:n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"Start Date",inputId:"date-input-id-01",hasRightIcon:!0},n.a.createElement(u.a,{id:"date-input-id-01",placeholder:" ",defaultValue:"06/24/2014"}),n.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"End Date",inputId:"date-input-id-02",hasRightIcon:!0,dropdown:n.a.createElement(o.b,{todayActiveInRange:!0,dateSelected:!0,dateRange:"week-4-5",dateRangeMulti:!0})},n.a.createElement(u.a,{id:"date-input-id-02",placeholder:" ",defaultValue:"06/30/2014"}),n.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})))))))},{id:"span-across-month-in-range",label:"Current and adjacent month in selected range",element:n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"Start Date",inputId:"date-input-id-01",hasRightIcon:!0},n.a.createElement(u.a,{id:"date-input-id-01",placeholder:" ",defaultValue:"06/24/2014"}),n.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(m.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"End Date",inputId:"date-input-id-02",hasRightIcon:!0,dropdown:n.a.createElement(o.b,{dateSelected:!0,dateRange:"week-5"})},n.a.createElement(u.a,{id:"date-input-id-02",placeholder:" ",defaultValue:"06/30/2014"}),n.a.createElement(c.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})))))))}];a.d(t,"getElement",function(){return N}),a.d(t,"getContents",function(){return j});var f=s.c.a,_=s.c.code,b=s.c.h2,E=s.c.h3,w=s.c.h4,v=s.c.li,y=s.c.p,S=s.c.strong,k=s.c.ul,N=function(){return Object(l.createElement)(s.b,{},Object(l.createElement)("div",{className:"doc lead"},"A datepicker is a text input to capture a date. You can select a single date, date range or date and time."),Object(l.createElement)(d.a,{exampleOnly:!0},Object(l.createElement)(o.a,null,o.c)),b({id:"About-Datepickers"},"About Datepickers"),E({id:"Implementation"},"Implementation"),y({},"The datepicker is a ",f({href:"/components/form-element"},"form element"),", containing a label and text ",f({href:"/components/input"},"input"),", and a dropdown ",f({href:"/components/menus"},"menu"),", containing a grid-based calendar and filters. The form element acts as a trigger for the dropdown."),Object(l.createElement)(r.a,{type:"warning"},"Placement of inline form elements inside a data table cell is not supported. Instead, use a button to invoke a popover, which does support form elements."),y({},"The datepicker has the following markup requirements:"),y({},S({},"Desktop:")),k({},v({},"Add ",_({},".slds-is-open")," to the element with ",_({},".slds-dropdown-trigger")," to invoke the dropdown that contains the datepicker."),v({},"The ",_({},".slds-is-selected")," modifier class is required on the ",_({},"td")," element that has the selected day."),v({},"The ",_({},".slds-is-today")," modifier class is required on the ",_({},"td")," element that is the current day."),v({},"The ",_({},".slds-has-multi-selection")," modifier class is required on the ",_({},"tr")," element that contains multiple days selected in the ",S({},"same")," week."),v({},"The ",_({},".slds-has-multi-row-selection")," modifier class is required on any ",_({},"tr")," element that contains multiple days selected in the ",S({},"multiple")," weeks."),v({},"The ",_({},".slds-is-selected-multi")," modifier class is required on the ",_({},"td")," element that contains a selected day within a range.")),y({},S({},"Mobile:")),k({},v({},"When on mobile, we want to leverage the native date picker by changing the ",_({},"input")," type from ",_({},"text")," to ",_({},"date")),v({},"The ",_({},'input type="date"')," will create an input field allowing a date and time to be easily entered — this includes year, month, day."),v({},"When switching ",_({},'input type="text"')," to ",_({},'input type="date"')," for mobile, we need to remove the ARIA attributes. The native rendering doesn't require these.",k({},v({},"On the element with the class ",_({},"slds-combobox"),", please remove ",_({},'role="combobox"'),", ",_({},"aria-expanded"),", and ",_({},"aria-haspopup"),"."),v({},"On the ",_({},"input")," that we just added ",_({},'type="date"')," to, please remove ",_({},"aria-controls"),", ",_({},"aria-autocomplete"),", and ",_({},'role="textbox"'),".")))),E({id:"Accessibility"},"Accessibility"),w({id:"Markup"},"Markup"),y({},S({},"Dialog:")),k({},v({},"Should act as a focus trap so the user only cycles through the datepicker ",_({},"dialog")," when the datepicker is open")),y({},S({},"Grid:")),k({},v({},"Table must be labelled with ",_({},'role="grid"')," and be appropriately labelled with ",_({},"aria-labelledby")),v({},"Use ",_({},'aria-multiselectable="true"')," to allow for selection of multiple days"),v({},"Should act as a single focus stop")),y({},S({},"Gridcell:")),k({},v({},"All dates should have ",_({},'role="gridcell"')," and ",_({},'aria-selected="false"')," on the ",_({},"gridcell")," by default"),v({},"If a date is selected, ",_({},"aria-selected")," should be set to ",_({},"true")," on the corresponding ",_({},"gridcell")),v({},_({},"aria-current")," is used to indicate which day is today and should be set to ",_({},'aria-current="date"'))),y({},S({},"Opening the Datepicker:")),k({},v({},"Mouse user: open the datepicker when a mouse user clicks on the input"),v({},"Keyboard user: only open the datepicker when a keyboard user presses ",_({},"enter")," or ",_({},"space")," on the datepicker button",k({},v({},"Do not open the datepicker when user focus is on the input")))),w({id:"Keyboard-Interactions"},"Keyboard Interactions"),k({},v({},"When the datepicker opens, place user focus on either the currently selected date in the grid or if no date is selected the current day"),v({},_({},"left")," and ",_({},"right")," arrow keys to navigate row"),v({},_({},"up")," and ",_({},"down")," arrow keys to navigate between weeks on the same day"),v({},_({},"home")," and ",_({},"end")," keys to jump to beginning or end of current row"),v({},_({},"pagedown")," and ",_({},"pageup")," to naviate between months"),v({},_({},"alt + pagedown")," and ",_({},"alt + pageup")," to navigate between years"),v({},_({},"enter")," to select date and close datepicker"),v({},_({},"esc")," to close datepicker without choosing a date")),b({id:"Base"},"Base"),Object(l.createElement)(d.a,null,Object(l.createElement)(o.a,null,o.c)),E({id:"States"},"States"),w({id:"Date-Selected"},"Date Selected"),Object(l.createElement)(d.a,null,Object(l.createElement)(o.a,null,Object(i.e)(o.d,"datepicker-day-selected"))),w({id:"Date-Picker-Has-Error"},"Date Picker Has Error"),Object(l.createElement)(d.a,null,Object(l.createElement)(o.a,null,Object(i.e)(o.d,"datepicker-with-error"))),b({id:"Range"},"Range"),Object(l.createElement)(d.a,null,Object(l.createElement)(p,null,h)),E({id:"States-2"},"States"),w({id:"Start-Date-Selected"},"Start Date Selected"),Object(l.createElement)(d.a,null,Object(l.createElement)(o.a,null,Object(i.e)(g,"start-date"))),w({id:"End-date-selected-(Same-week)"},"End date selected (Same week)"),Object(l.createElement)(d.a,null,Object(l.createElement)(o.a,null,Object(i.e)(g,"end-date-week"))),w({id:"End-date-selected-(Different-week)"},"End date selected (Different week)"),Object(l.createElement)(d.a,null,Object(l.createElement)(o.a,null,Object(i.e)(g,"end-date-weeks"))),w({id:"Today-In-selected-range"},"Today - In selected range"),Object(l.createElement)(d.a,null,Object(l.createElement)(o.a,null,Object(i.e)(g,"today-in-range"))),w({id:"Current-And-Adjacent-Month-In-Selected-Range"},"Current And Adjacent Month In Selected Range"),Object(l.createElement)(d.a,null,Object(l.createElement)(o.a,null,Object(i.e)(g,"span-across-month-in-range"))))},j=function(){return Object(s.a)(N())}}});