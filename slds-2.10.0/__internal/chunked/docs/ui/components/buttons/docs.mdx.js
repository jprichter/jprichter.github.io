var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/ui/components/buttons/docs.mdx.js"]=function(e){function t(t){for(var n,l,i=t[0],c=t[1],r=t[2],d=0,h=[];d<i.length;d++)l=i[d],a[l]&&h.push(a[l][0]),a[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);h.length;)h.shift()();return o.push.apply(o,r||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,i=1;i<s.length;i++){var c=s[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=s[0]))}return e}var n={},a={13:0},o=[];function l(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=n,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(s,n,function(t){return e[t]}.bind(null,n));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var r=0;r<i.length;r++)t(i[r]);var u=c;return o.push([241,0]),s()}({0:function(e,t){e.exports=React},18:function(e,t){e.exports=JSBeautify},19:function(e,t){e.exports=ReactDOM},241:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),o=s(3),l=s(1),i=(s(23),s(15)),c=s(14),r=s(11),u=a.a.createElement(c.a,{isNeutral:!0},a.a.createElement(r.a,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"download"}),"Button Neutral"),d=(a.a.createElement(c.a,{isNeutral:!0,disabled:!0},a.a.createElement(r.a,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"download"}),"Button Neutral"),[{id:"with-icon-right",label:"With right icon",element:a.a.createElement(c.a,{isNeutral:!0},"Button Neutral",a.a.createElement(r.a,{className:"slds-button__icon slds-button__icon_right",sprite:"utility",symbol:"download"}))}]),h=s(75),b=s(4),m=s.n(b),p=s(5),f=s.n(p),g=function(e){return a.a.createElement("span",{className:"slds-text-not-pressed"},a.a.createElement(r.a,{className:"slds-button__icon slds-button__icon_small slds-button__icon_left",sprite:"utility",symbol:"add"}),e.children)};g.propTypes={children:m.a.string.isRequired};var v=function(e){return a.a.createElement("span",{className:"slds-text-pressed"},a.a.createElement(r.a,{className:"slds-button__icon slds-button__icon_small slds-button__icon_left",sprite:"utility",symbol:"check"}),e.children)};v.propTypes={children:m.a.string.isRequired};var y=function(e){var t=e.isDisabled,s=e.isPressed;return a.a.createElement(c.a,{isNeutral:!0,className:f()("slds-button_dual-stateful",{"slds-is-pressed":s}),disabled:t,"aria-live":"assertive"},a.a.createElement(g,null,"Follow"),a.a.createElement(v,null,"Following"))};y.propTypes={isDisabled:m.a.bool,isPressed:m.a.bool};var w=a.a.createElement(y,null,a.a.createElement(g,null,"Follow"),a.a.createElement(v,null,"Following")),O=(a.a.createElement(y,{isDisabled:!0},a.a.createElement(g,null,"Follow"),a.a.createElement(v,null,"Following")),[{id:"pressed",label:"pressed",element:a.a.createElement(y,{isPressed:!0},a.a.createElement(g,null,"Follow"),a.a.createElement(v,null,"Following"))}]),j=s(2);s.d(t,"getElement",function(){return F}),s.d(t,"getContents",function(){return I});var _=o.c.a,E=o.c.code,k=o.c.em,S=o.c.h2,T=o.c.h3,x=o.c.li,B=o.c.p,N=o.c.strong,D=o.c.ul,F=function(){return Object(n.createElement)(o.b,{},Object(n.createElement)("div",{className:"doc lead"},"Buttons are clickable items used to perform an action."),Object(n.createElement)(l.a,null,Object(n.createElement)(a.a.Fragment,null,c.b,Object(j.e)(c.c,"neutral"),Object(j.e)(c.c,"brand"),Object(j.e)(c.c,"outline-brand"),Object(j.e)(c.c,"destructive"),Object(j.e)(c.c,"text-destructive"),Object(j.e)(c.c,"success"))),S({id:"About-Buttons"},"About Buttons"),B({},"Buttons should be used in situations where users might need to:"),D({},x({},"submit a form"),x({},"begin a new task"),x({},"trigger a new UI element to appear on the page"),x({},"specify a new or next step in a process")),T({id:"Button-vs.-Link"},"Button vs. Link"),B({},"The HTML elements for buttons and links describe a very specific type of action that is going to be taken when they are used. It is important you know when to use which, as the distinction matters:"),D({},x({},"Use a ",N({},"link")," when you’re ",N({},"navigating to another place"),', such as: a "view all" page, "Jane Chen" profile, a page "skip link" etc.'),x({},"Use ",N({},"buttons")," when you are ",N({},"performing an action"),', such as: "submit," "merge," "create new," "upload," etc.'),x({},"An action is almost ",N({},"always")," on the same page")),T({id:"Accessibility"},"Accessibility"),B({},'If pressing a Button results in a new URL, or the resultant UI makes sense as "a new browser tab", that is a link ',E({},"<a>"),". Everything else is a ",E({},"<button>"),"."),B({},"The distinction is important to screen reader users to know what's going to happen next. Will I navigate somewhere or will something happen on the page? So it's important to choose the right HTML element for the job."),B({},"If you absolutely cannot use a ",E({},"<button />")," element for an action and instead need to use an ",E({},"<a />"),", you are required to do 2 things:"),D({},x({},"Add ",E({},'role="button"')," attribute to the ",E({},"<a />")," to make the element announce itself as a ",E({},"button")," element."),x({},"Add a JavaScript event handler for when the user presses the space key.  This is because a ",E({},"button")," element will respond by default to both the enter and space keys being pressed, but an ",E({},"<a />")," element will not.")),B({},"Finally, color alone does not suffice when conveying the meaning of buttons. Ensure that the text you use in the button matches the meaning you are trying to convey via color. For example, if you use the destructive button to point out a potential warning, make sure the text communicates the same message."),Object(n.createElement)(l.a,null,Object(n.createElement)(a.a.Fragment,null,Object(j.e)(c.c,"base-link"),Object(j.e)(c.c,"neutral-link"),Object(j.e)(c.c,"brand-link"),Object(j.e)(c.c,"outline-brand-link"),Object(j.e)(c.c,"destructive-link"),Object(j.e)(c.c,"text-destructive-link"),Object(j.e)(c.c,"success-link"))),T({id:"Links-that-look-like-Buttons"},"Links that look like Buttons"),B({},'Use these with caution - dictation software users may not be able to properly identify these actions, as they can say "show buttons" and these won\'t highlight since they are semantically links, even though they may look like buttons.'),S({id:"Base"},"Base"),B({},"The base ",E({},"slds-button")," looks like a plain text link. It removes all the styling of the native button."),B({},"The base and neutral buttons are used most frequently and can be used multiple times per feature. Use these buttons when the actions are of secondary importance to the content surrounding it, such as in the actions ribbon in a page header."),Object(n.createElement)(l.a,{toggleCode:!1},c.b),S({id:"Variations"},"Variations"),T({id:"Neutral"},"Neutral"),B({},"Add the ",E({},"slds-button_neutral")," class to create a neutral button."),Object(n.createElement)(l.a,{toggleCode:!1},Object(j.e)(c.c,"neutral")),T({id:"Brand"},"Brand"),B({},"To create the brand button, add the ",E({},"slds-button_brand")," class to the ",E({},"slds-button")," class. The brand color tokens can be overridden for theme specific usage."),B({},"The Brand button generally should only be used once per component screen at any one time. It is used for when there is an action that is clearly more important than the other actions and you need to draw attention to it. An example is when you have a “Save” and “Cancel” button. The “Save” is the primary action."),B({},"Not all features need to have primary actions, sometimes the actions are secondary to the content and are all of equal importance."),Object(n.createElement)(l.a,{toggleCode:!1},Object(j.e)(c.c,"brand")),T({id:"Outline-Brand"},"Outline Brand"),B({},"To create the outline brand button, add the ",E({},"slds-button_outline-brand")," class to the ",E({},"slds-button")," class. The brand color tokens can be overridden for theme specific usage."),Object(n.createElement)(l.a,{toggleCode:!1},Object(j.e)(c.c,"outline-brand")),T({id:"Inverse"},"Inverse"),B({},"Use the inverse button on dark backgrounds. Add the ",E({},"slds-button_inverse")," class to the ",E({},"slds-button")," class."),Object(n.createElement)(l.a,{style:{backgroundColor:"#16325c",padding:"0.5rem"},toggleCode:!1},Object(j.e)(c.c,"inverse")),T({id:"Destructive"},"Destructive"),B({},"To create the destructive button, add the ",E({},"slds-button_destructive")," class to the ",E({},"slds-button")," class."),B({},"This button is used to indicate a destructive action to the user, like permanently erasing data."),Object(n.createElement)(l.a,{toggleCode:!1},Object(j.e)(c.c,"destructive")),T({id:"Text-Destructive"},"Text Destructive"),B({},"To create the text destructive button, add the ",E({},"slds-button_text-destructive")," class to the ",E({},"slds-button")," class."),B({},"This button is used to indicate a destructive action to the user, like permanently erasing data. Use this version when the ",_({href:"#Destructive"},"Destructive")," button would be too distracting to the experience."),Object(n.createElement)(l.a,{toggleCode:!1},Object(j.e)(c.c,"text-destructive")),T({id:"Success"},"Success"),B({},"To create the success button, add the ",E({},"slds-button_success")," class to the ",E({},"slds-button")," class."),Object(n.createElement)(l.a,{toggleCode:!1},Object(j.e)(c.c,"success")),S({id:"Disabled"},"Disabled"),B({},"Use a disabled attribute when a button can’t be clicked. To create a disabled button, append the ",E({},"disabled")," attribute to the button."),Object(n.createElement)(l.a,null,Object(n.createElement)(a.a.Fragment,null,Object(j.e)(c.d,"disabled"),Object(j.e)(c.d,"neutral-disabled"),Object(j.e)(c.d,"brand-disabled"),Object(j.e)(c.d,"outline-brand-disabled"),Object(j.e)(c.d,"destructive-disabled"),Object(j.e)(c.d,"text-destructive-disabled"),Object(j.e)(c.d,"success-disabled"))),S({id:"With-Icons"},"With Icons"),B({},"The SVG, element, or icon inside the button receives the ",E({},"slds-button__icon")," class. You can position the icon on the left or the right using ",E({},"slds-button__icon_left")," or ",E({},"slds-button__icon_right"),", which applies the correct amount of space between the icon and the text."),T({id:"Left-Icon"},"Left Icon"),Object(n.createElement)(l.a,null,u),T({id:"Right-Icon"},"Right Icon"),Object(n.createElement)(l.a,null,Object(j.e)(d,"with-icon-right")),S({id:"Stateful"},"Stateful"),B({},"Stateful buttons have three states: not selected (default), selected and focused, and selected with hover state."),B({},"The stateful button requires the ",E({},"slds-button_stateful")," class and the ",E({},"slds-button_neutral")," class in addition to the ",E({},"slds-button")," class. Stateful buttons are only used with the neutral variation."),B({},"The button contains three spans with classes that hide or show the content of the spans based on the class on the button. Each span contains text and a corresponding icon. The SVG will have the ",E({},"slds-button__icon_left")," class setting the icon on the left."),B({},Object(n.createElement)(i.a,{type:"a11y",header:"Accessibility Requirement"},"Be sure to include the attribute ",E({},'aria-live="assertive"')," on the button. The ",E({},'aria-live="assertive"')," attribute means the value of the ",E({},"<span>")," inside the button will be spoken whenever it changes.")),Object(n.createElement)(i.a,{type:"note",header:"JavaScript Requirement"},"When the user clicks the button, use JavaScript to toggle the class from ",Object(n.createElement)("code",{className:"doc"},"slds-not-selected")," to ",Object(n.createElement)("code",{className:"doc"},"slds-is-selected-clicked"),". As soon as focus leaves the button, use JavaScript to toggle the class from ",Object(n.createElement)("code",{className:"doc"},"slds-is-selected-clicked")," to ",Object(n.createElement)("code",{className:"doc"},"slds-is-selected"),"."),T({id:"Not-Selected"},"Not Selected"),B({},"Stateful button uses the class ",E({},"slds-not-selected")," in its initial state."),Object(n.createElement)(l.a,null,h.b),T({id:"Selected-and-Focused"},"Selected and Focused"),B({},"When selected and still focused, stateful button uses the class ",E({},"slds-is-selected-clicked"),"."),Object(n.createElement)(l.a,null,Object(j.e)(h.c,"selected-clicked")),T({id:"Selected-with-Hover-State"},"Selected with Hover State"),B({},"Once selected and blurred (user moved focus away from the button), stateful button uses the class ",E({},"slds-is-selected"),"."),Object(n.createElement)(l.a,null,Object(j.e)(h.c,"selected")),S({id:"Dual-Stateful-Button"},"Dual Stateful Button"),B({},"Dual Stateful buttons have two states, similar to a ",_({href:"/accessibility/patterns/togglebutton/#site-main-content"},"Toggle Button"),": not pressed (default), and pressed."),B({},"The Dual Stateful button requires the ",E({},"slds-button_dual-stateful")," class, along with a combination of the ",E({},"slds-button")," and ",E({},"slds-button_neutral")," classes. While Dual Stateful buttons are only used with the neutral Button variation, the pressed state changes the button ",k({},"style")," to that of the Brand variation."),B({},"The button contains two spans. Each span contains display text and a corresponding SVG icon with the class ",E({},"slds-button__icon-left")," and has classes that hide or show the contents. By default, the first span with the class ",E({},"slds-text-is-not-pressed")," is displayed; when the class ",E({},"slds-is-pressed")," is applied to the parent button, the span with the class ",E({},"slds-text-is-pressed")," is displayed."),B({},Object(n.createElement)(i.a,{type:"a11y",header:"Accessibility Requirement"},"Be sure to include the attribute ",E({},'aria-live="assertive"')," on the button. The ",E({},'aria-live="assertive"')," attribute means the value of the ",E({},"<span>")," inside the button will be spoken whenever it changes.")),Object(n.createElement)(i.a,{type:"note",header:"JavaScript Requirement"},"When the user clicks the button, use JavaScript to toggle the ",Object(n.createElement)("code",{className:"doc"},"slds-is-pressed")," class on or off, depending on the previous state. Remember, only the pressed state requires this class."),T({id:"Not-Pressed"},"Not Pressed"),Object(n.createElement)(l.a,null,w),T({id:"Pressed"},"Pressed"),B({},"To display the pressed state, use the class ",E({},"slds-is-pressed")," on the ",E({},"<button>")," element."),Object(n.createElement)(l.a,null,Object(j.e)(O,"pressed")),S({id:"Sizing"},"Sizing"),T({id:"Stretch"},"Stretch"),B({},"To allow the button's width to take up the entire width available, apply the ",E({},"slds-button_stretch")," class to the button."),Object(n.createElement)(l.a,{toggleCode:!1},Object(j.e)(c.c,"stretch")),T({id:"Full-Width"},"Full Width"),B({},"Creates a full width button with styling resets"),Object(n.createElement)(l.a,{toggleCode:!1},Object(j.e)(c.c,"full-width")))},I=function(){return Object(o.a)(F())}}});