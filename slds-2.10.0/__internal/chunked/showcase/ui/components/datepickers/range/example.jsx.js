var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/datepickers/range/example.jsx.js"]=function(e){function t(t){for(var l,d,r=t[0],i=t[1],o=t[2],m=0,p=[];m<r.length;m++)d=r[m],n[d]&&p.push(n[d][0]),n[d]=0;for(l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l]);for(c&&c(t);p.length;)p.shift()();return s.push.apply(s,o||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],l=!0,r=1;r<a.length;r++){var i=a[r];0!==n[i]&&(l=!1)}l&&(s.splice(t--,1),e=d(d.s=a[0]))}return e}var l={},n={57:0,6:0,13:0,14:0,22:0,24:0,26:0,35:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},s=[];function d(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.m=e,d.c=l,d.d=function(e,t,a){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)d.d(a,l,function(t){return e[t]}.bind(null,l));return a},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var c=i;return s.push([110,0]),a()}({0:function(e,t){e.exports=React},110:function(e,t,a){"use strict";a.r(t),a.d(t,"Context",function(){return o}),a.d(t,"states",function(){return c});var l=a(0),n=a.n(l),s=a(51),d=a(4),r=a(5),i=a(10),o=function(e){return n.a.createElement("div",{style:{height:"25rem"}},e.children)};t.default=n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"Start Date",inputId:"date-input-id-01",hasRightIcon:!0,dropdown:n.a.createElement(s.DatePicker,{todayActive:!0})},n.a.createElement(i.a,{id:"date-input-id-01",placeholder:" "}),n.a.createElement(d.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"End Date",inputId:"date-input-id-02",hasRightIcon:!0},n.a.createElement(i.a,{id:"date-input-id-02",placeholder:" "}),n.a.createElement(d.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})))))));var c=[{id:"start-date",label:"Start date selected",element:n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"Start Date",inputId:"date-input-id-01",hasRightIcon:!0,dropdown:n.a.createElement(s.DatePicker,{todayActive:!0,dateSelected:"single",dateRange:"week-4"})},n.a.createElement(i.a,{id:"date-input-id-01",placeholder:" ",defaultValue:"06/24/2014"}),n.a.createElement(d.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"End Date",inputId:"date-input-id-02",hasRightIcon:!0},n.a.createElement(i.a,{id:"date-input-id-02",placeholder:" "}),n.a.createElement(d.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})))))))},{id:"end-date-week",label:"End date selected (Same week)",element:n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"Start Date",inputId:"date-input-id-01",hasRightIcon:!0},n.a.createElement(i.a,{id:"date-input-id-01",placeholder:" ",defaultValue:"06/24/2014"}),n.a.createElement(d.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"End Date",inputId:"date-input-id-02",hasRightIcon:!0,dropdown:n.a.createElement(s.DatePicker,{todayActive:!0,dateSelected:!0,dateRange:"week-4"})},n.a.createElement(i.a,{id:"date-input-id-02",placeholder:" ",defaultValue:"06/27/2014"}),n.a.createElement(d.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})))))))},{id:"end-date-weeks",label:"End date selected (Different week)",element:n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"Start Date",inputId:"date-input-id-01",hasRightIcon:!0},n.a.createElement(i.a,{id:"date-input-id-01",placeholder:" ",defaultValue:"06/24/2014"}),n.a.createElement(d.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"End Date",inputId:"date-input-id-02",hasRightIcon:!0,dropdown:n.a.createElement(s.DatePicker,{todayActive:!0,dateSelected:!0,dateRange:"week-4-5",dateRangeMulti:!0})},n.a.createElement(i.a,{id:"date-input-id-02",placeholder:" ",defaultValue:"06/29/2014"}),n.a.createElement(d.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})))))))},{id:"today-in-range",label:"Today - In selected range",element:n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"Start Date",inputId:"date-input-id-01",hasRightIcon:!0},n.a.createElement(i.a,{id:"date-input-id-01",placeholder:" ",defaultValue:"06/24/2014"}),n.a.createElement(d.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"End Date",inputId:"date-input-id-02",hasRightIcon:!0,dropdown:n.a.createElement(s.DatePicker,{todayActiveInRange:!0,dateSelected:!0,dateRange:"week-4-5",dateRangeMulti:!0})},n.a.createElement(i.a,{id:"date-input-id-02",placeholder:" ",defaultValue:"06/30/2014"}),n.a.createElement(d.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})))))))},{id:"span-across-month-in-range",label:"Current and adjacent month in selected range",element:n.a.createElement("div",{className:"slds-form slds-form_compound"},n.a.createElement("fieldset",{className:"slds-form-element"},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click",labelContent:"Start Date",inputId:"date-input-id-01",hasRightIcon:!0},n.a.createElement(i.a,{id:"date-input-id-01",placeholder:" ",defaultValue:"06/24/2014"}),n.a.createElement(d.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})),n.a.createElement(r.b,{formElementClassName:"slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open",labelContent:"End Date",inputId:"date-input-id-02",hasRightIcon:!0,dropdown:n.a.createElement(s.DatePicker,{dateSelected:!0,dateRange:"week-5"})},n.a.createElement(i.a,{id:"date-input-id-02",placeholder:" ",defaultValue:"06/30/2014"}),n.a.createElement(d.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date"})))))))}]}});