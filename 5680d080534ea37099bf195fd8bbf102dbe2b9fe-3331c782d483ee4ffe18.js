/*! For license information please see 5680d080534ea37099bf195fd8bbf102dbe2b9fe-3331c782d483ee4ffe18.js.LICENSE.txt */
"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[611],{2686:function(e,t){function n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)e[i]=n[i]}return e}var i=function e(t,i){function o(e,o,r){if("undefined"!=typeof document){"number"==typeof(r=n({},i,r)).expires&&(r.expires=new Date(Date.now()+864e5*r.expires)),r.expires&&(r.expires=r.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var l in r)r[l]&&(a+="; "+l,!0!==r[l]&&(a+="="+r[l].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+a}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],i={},o=0;o<n.length;o++){var r=n[o].split("="),a=r.slice(1).join("=");try{var l=decodeURIComponent(r[0]);if(i[l]=t.read(a,l),e===l)break}catch(c){}}return e?i[e]:i}},remove:function(e,t){o(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});t.Z=i},9008:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(7294),o={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){var t=function(e){if("number"==typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var i=(e.match(/[^0-9]*$/)||"").toString();return o[i]?{value:t,unit:i}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},c=function(e,t,n){var i="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return i;var o=document.createElement("style");document.head.appendChild(o);var r=o.sheet,a="\n    @keyframes ".concat(i," {\n      ").concat(t,"\n    }\n  ");return r&&r.insertRule(a,0),i}("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");var d=function(e){var t=e.loading,n=void 0===t||t,o=e.color,d=void 0===o?"#000000":o,s=e.speedMultiplier,u=void 0===s?1:s,p=e.cssOverride,m=void 0===p?{}:p,f=e.size,g=void 0===f?35:f,h=l(e,["loading","color","speedMultiplier","cssOverride","size"]),v=a({background:"transparent !important",width:r(g),height:r(g),borderRadius:"100%",border:"2px solid",borderTopColor:d,borderBottomColor:"transparent",borderLeftColor:d,borderRightColor:d,display:"inline-block",animation:"".concat(c," ").concat(.75/u,"s 0s infinite linear"),animationFillMode:"both"},m);return n?i.createElement("span",a({style:v},h)):null}},8657:function(e,t,n){n.d(t,{K:function(){return r},k:function(){return a}});var i=n(535),o=n(8198),r=i.default.button.withConfig({displayName:"Buttons__PrimaryButton",componentId:"sc-10aozlx-0"})(["border-radius:8px;background:linear-gradient(90deg,"," 0%,"," 100%);height:",';font-family:"Rubik";font-weight:600;font-size:0.9rem;color:#FFF;text-align:center;vertical-align:center;border:none;padding:',";box-sizing:border-box;cursor:pointer;line-height:1.1rem;"],o.O.primary.lightOrange,o.O.secondary.lightRed,(function(e){var t;return null!==(t=e.height)&&void 0!==t?t:"60px"}),(function(e){var t;return null!==(t=e.padding)&&void 0!==t?t:"0 35px"})),a=(0,i.default)(r).withConfig({displayName:"Buttons__SecondaryButton",componentId:"sc-10aozlx-1"})(["background:",";font-size:0.7rem;font-weight:500;"],o.O.secondary.orange)},3732:function(e,t,n){n.d(t,{O:function(){return a},W:function(){return r}});var i=n(535),o=n(7965),r=i.default.div.withConfig({displayName:"Container",componentId:"sc-kxh8q9-0"})(["max-width:1268px;margin:0 auto;padding:0 30px;width:100%;box-sizing:border-box;@media ","{padding:0;}"],o.U.desktop),a=i.default.div.withConfig({displayName:"Container__ContentContainer",componentId:"sc-kxh8q9-1"})(["max-width:1268px;margin:auto;padding:30px 40px 80px;"])},4936:function(e,t,n){var i=n(7294),o=n(8198);t.Z=function(){return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 26 26",fill:"none"},i.createElement("path",{d:"M11.1562 18.6875L20 9.84375L18.5625 8.4375L11.1562 15.8438L7.40625 12.0938L6 13.5L11.1562 18.6875ZM13 25.5C11.2917 25.5 9.67708 25.1719 8.15625 24.5156C6.63542 23.8594 5.30729 22.9635 4.17188 21.8281C3.03646 20.6927 2.14062 19.3646 1.48437 17.8438C0.828125 16.3229 0.5 14.7083 0.5 13C0.5 11.2708 0.828125 9.64583 1.48437 8.125C2.14062 6.60417 3.03646 5.28125 4.17188 4.15625C5.30729 3.03125 6.63542 2.14062 8.15625 1.48437C9.67708 0.828125 11.2917 0.5 13 0.5C14.7292 0.5 16.3542 0.828125 17.875 1.48437C19.3958 2.14062 20.7188 3.03125 21.8438 4.15625C22.9688 5.28125 23.8594 6.60417 24.5156 8.125C25.1719 9.64583 25.5 11.2708 25.5 13C25.5 14.7083 25.1719 16.3229 24.5156 17.8438C23.8594 19.3646 22.9688 20.6927 21.8438 21.8281C20.7188 22.9635 19.3958 23.8594 17.875 24.5156C16.3542 25.1719 14.7292 25.5 13 25.5Z",fill:o.O.secondary.green}))}},2769:function(e,t,n){n.d(t,{I:function(){return xe},Z:function(){return we}});var i,o=n(7294),r=n(9008),a=n(535),l=n(8198),c="undefined"!=typeof window,d=n(3732),s=n(7965),u=n.p+"static/FooterLogo-2cdcf331628e113a1fe8a51c1e49eebb.svg",p=function(){return o.createElement("img",{src:u})},m=n(1597),f=a.default.hr.withConfig({displayName:"SeparatorLine",componentId:"sc-1ekt8vs-0"})(["height:1px;width:100%;background-color:",";outline:none;border:none;margin:",""],(function(e){var t;return null!==(t=e.backgroundColor)&&void 0!==t?t:l.O.secondary.gray700}),(function(e){var t;return null!==(t=e.margin)&&void 0!==t?t:0})),g=a.default.div.withConfig({displayName:"DesktopNavSection__StyledDesktopNavSection",componentId:"sc-iblqkn-0"})(["display:flex;flex-direction:column;gap:10px;& > div:first-child{font-size:0.7rem;font-weight:700;}& > div:nth-child(2){font-size:0.6rem;display:flex;flex-direction:column;gap:5px;justify-content:flex-start;}"]),h=function(e){var t=e.navigationItem;return o.createElement(g,null,o.createElement("div",null,t.sectionTitle),o.createElement("div",null,t.links.map((function(e){return o.createElement("div",{key:e.linkId},e.external?o.createElement("a",{href:e.url,target:"_blank",key:e.linkId},e.title):o.createElement(m.Link,{to:e.url,key:e.linkId},e.title))}))))},v=n(9160),y=[{sectionTitle:"Telgorithm",links:[{title:"Pricing",url:v.H.Pricing,linkId:"footer_navigation_link_4"}]},{sectionTitle:"Platform",links:[{title:"Login",url:v.E.Login,linkId:"footer_navigation_link_5",external:!0},{title:"Getting Started",url:"/getting-started",linkId:"footer_navigation_link_6"}]},{sectionTitle:"Company",links:[{title:"About",url:v.H.AboutUs,linkId:"footer_navigation_link_7"},{title:"Latest News",url:v.H.LatestNews,linkId:"footer_navigation_link_8"},{title:"Developer",url:v.E.Developers,linkId:"footer_navigation_link_9",external:!0}]},{sectionTitle:"Contact",links:[{title:"Contact Us",url:v.H.ContactUs,linkId:"footer_navigation_link_10"},{title:"hello@telgorithm.com",url:"mailto:hello@telgorithm.com",linkId:"footer_navigation_link_11",external:!0},{title:"(888) 835-4666",url:"tel:(888) 835-4666",linkId:"footer_navigation_link_12",external:!0}]},{sectionTitle:"Legal",links:[{title:"Carrier Fees",url:v.H.CarrierFees,linkId:"footer_navigation_link_13"},{title:"Acceptable Use Policy",url:v.H.AcceptableUsePolicy,linkId:"footer_navigation_link_14"},{title:"Privacy",url:v.H.PrivacyPolicy,linkId:"footer_navigation_link_15"},{title:"Terms",url:v.H.TermsAndConditions,linkId:"footer_navigation_link_16"}]}],x=a.default.div.withConfig({displayName:"CollapseMenuIcon__StyledCollapseMenuIcon",componentId:"sc-ev26ea-0"})(["top:10px;width:20px;height:20px;position:relative;z-index:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:0.5s ease-in-out;-moz-transition:0.5s ease-in-out;-o-transition:0.5s ease-in-out;transition:0.5s ease-in-out;user-select:none;cursor:pointer;span{display:block;position:absolute;z-index:10;height:2px;width:100%;background:",";opacity:1;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:0.25s ease-in-out;-moz-transition:0.25s ease-in-out;-o-transition:0.25s ease-in-out;transition:0.25s ease-in-out;}span:first-child{top:0px;-webkit-transform-origin:center;-moz-transform-origin:center;-o-transform-origin:center;transform-origin:center;-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);","}span:last-child{-webkit-transform-origin:center;-moz-transform-origin:center;-o-transform-origin:center;transform-origin:center;","}"],l.O.primary.gray500,(function(e){if(e.isExpanded)return(0,a.css)(["-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);top:0px;left:0px;"])}),(function(e){if(e.isExpanded)return(0,a.css)(["-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);top:0px;left:0px;"])})),w=function(e){var t=e.isExpanded;return o.createElement(x,{isExpanded:t},o.createElement("span",null),o.createElement("span",null))},b=a.default.div.withConfig({displayName:"MobileNavSection__StyledMobileNavSection",componentId:"sc-1o76k2j-0"})(["& > div:first-child{display:flex;justify-content:space-between;align-items:center;font-size:0.7rem;font-weight:700;}& > div:nth-child(2){margin-top:",";display:flex;visibility:",";flex-direction:column;gap:15px;font-weight:400;font-size:0.6rem;overflow:hidden;transition:all 0.25s ease-in-out;max-height:",";padding-bottom:",";}"],(function(e){return e.isExpanded?"10px":"0"}),(function(e){return e.isExpanded?"visible":"hidden"}),(function(e){return e.isExpanded?"250px":0}),(function(e){return e.isExpanded?"10px":0})),k=function(e){var t=e.navigationItem,n=(0,o.useState)(!1),i=n[0],r=n[1];return o.createElement(b,{isExpanded:i},o.createElement("div",null,o.createElement("div",null,t.sectionTitle),o.createElement("div",{onClick:function(){return r((function(e){return!e}))}},o.createElement(w,{isExpanded:i}))),o.createElement("div",null,t.links.map((function(e){return o.createElement("div",{key:e.linkId},e.external?o.createElement("a",{href:e.url,key:e.linkId,target:"_blank"},e.title):o.createElement(m.Link,{to:e.url,key:e.linkId},e.title))}))),o.createElement(f,{margin:"10px 0"}))},C=a.default.nav.withConfig({displayName:"FooterNavigation__StyledFooterNavigation",componentId:"sc-19pitmr-0"})([""]),E=a.default.div.withConfig({displayName:"FooterNavigation__StyledDesktopNavigation",componentId:"sc-19pitmr-1"})(['display:none;flex-direction:column;gap:60px;& > div:first-child{display:flex;justify-content:space-between;gap:50px;}& > div:nth-child(2){display:flex;justify-content:flex-end;gap:20px;font-size:0.6rem;div{position:relative;}& > div:not(:last-child)::after{display:block;content:"|";position:absolute;right:-10px;top:0px;}}@media ',"{display:flex;}"],s.U.laptop),_=a.default.div.withConfig({displayName:"FooterNavigation__StyledMobileNavigation",componentId:"sc-19pitmr-2"})(["display:block;@media ","{display:none;}"],s.U.laptop),I=function(){var e=y[y.length-1];return o.createElement(C,null,o.createElement(E,null,o.createElement("div",null,y.slice(0,-1).map((function(e){return o.createElement(h,{navigationItem:e,key:e.sectionTitle})}))),o.createElement("div",null,e.links.map((function(e){return o.createElement("div",{key:e.linkId},o.createElement(m.Link,{to:e.url},e.title))})))),o.createElement(_,null,o.createElement(f,{margin:"0 0 10px 0"}),y.map((function(e){return o.createElement(k,{navigationItem:e,key:e.sectionTitle})}))))},N=n(3183),S=a.default.div.withConfig({displayName:"Socials__StyledSocials",componentId:"sc-1mf2124-0"})(['display:flex;flex-direction:column;font-family:"Rubik";font-size:0.7rem;gap:20px;align-items:self-start;font-weight:700;@media ',"{flex-direction:row;gap:50px;justify-content:space-between;align-items:center;};"],s.U.tablet),O=function(){return o.createElement(S,null,o.createElement("div",null,"Stay Connected"),o.createElement(N.Z,{color:l.O.primary.white,opacity:.33}))},F=n(8657),z=n(6653),L=n(2686),M=a.default.div.withConfig({displayName:"Subscribe__StyledSubscribe",componentId:"sc-3k0ucz-0"})(["display:flex;flex-direction:column;gap:10px;color:",";font-weight:700;"],l.O.primary.white),U=a.default.input.withConfig({displayName:"Subscribe__StyledInput",componentId:"sc-3k0ucz-1"})(["background-color:",";border-radius:6px;height:32px;border:none;outline:none;padding:10px;box-sizing:border-box;color:",';font-family:"Rubik";width:100%;@media ',"{width:260px;}"],l.O.primary.white+l.C[.1],l.O.primary.white,s.U.tablet),D=a.default.div.withConfig({displayName:"Subscribe__Wrapper",componentId:"sc-3k0ucz-2"})(["display:flex;gap:10px;align-items:center;width:100%;div:first-child{width:100%;@media ","{width:auto;}}"],s.U.tablet),H=function(){var e=(0,o.useState)(!1),t=e[0],n=e[1],i=(0,o.useState)(!1),r=i[0],a=i[1],l=(0,o.useState)(""),c=l[0],d=l[1];(0,o.useEffect)((function(){r&&setTimeout((function(){return a(!1)}),3e3)}),[r]);return o.createElement(M,null,!t&&o.createElement("div",null,"Subscribe to our newsletter"),t?r?o.createElement("div",null,"Something Went Wrong, Please Try Again"):o.createElement(z.Z,null):o.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),t={fields:[{objectTypeId:"0-1",name:"email",value:c}],context:{hutk:L.Z.get("hubspotutk"),pageUri:document.location.href,pageName:document.title}},fetch("https://api.hsforms.com/submissions/v3/integration/submit/21630623/59a24190-cebd-4899-a4ed-9e677896b741",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){return n(!0)})).catch((function(){return a(!0)}))},id:"59a24190-cebd-4899-a4ed-9e677896b741"},o.createElement(D,null,o.createElement("div",null,o.createElement(U,{placeholder:"Work email",name:"email",type:"email",value:c,onChange:function(e){return d(e.currentTarget.value)}})),o.createElement("div",null,o.createElement(F.k,{height:"32px",padding:"0 15px",type:"submit",form:"59a24190-cebd-4899-a4ed-9e677896b741"},"Subscribe")))))},A=a.default.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-q04r3o-0"})(["font-family:Rubik;font-weight:400;color:",";background-color:",";font-size:0.7rem;padding:25px 0;@media ","{height:auto;padding:50px 0;}"],l.O.primary.white+l.C[.5],l.O.primary.black,s.U.laptop),T=a.default.div.withConfig({displayName:"Footer__Wrapper",componentId:"sc-q04r3o-1"})(["display:flex;flex-direction:column;justify-content:start;gap:30px;@media ","{flex-direction:row;justify-content:space-between;gap:50px;};"],s.U.laptop),B=a.default.div.withConfig({displayName:"Footer__VerticalWrapper",componentId:"sc-q04r3o-2"})(["display:flex;flex-direction:column;justify-content:space-between;"]),j=a.default.div.withConfig({displayName:"Footer__DesktopCopyright",componentId:"sc-q04r3o-3"})(["font-size:0.6rem;display:none;@media ","{display:block;}"],s.U.laptop),P=a.default.div.withConfig({displayName:"Footer__MobileCopyright",componentId:"sc-q04r3o-4"})(["font-size:0.6rem;display:block;margin-top:20px;@media ","{display:none;}"],s.U.laptop),R=function(){var e="Copyright © 2022 Telgorithm. All rights reserved.";return o.createElement(A,null,o.createElement(d.W,null,o.createElement(T,null,o.createElement("div",null,o.createElement(p,null)),o.createElement("div",null,o.createElement(O,null))),o.createElement(f,{margin:"30px 0"}),o.createElement(T,null,o.createElement(B,null,o.createElement(H,null),o.createElement(j,null,e)),o.createElement(I,null)),o.createElement(P,null,e)))},Z=a.default.div.withConfig({displayName:"BurgerMenuIcon__StyledBurgerMenuIcon",componentId:"sc-g7go5j-0"})(["top:10px;width:24px;height:30px;position:relative;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:0.5s ease-in-out;-moz-transition:0.5s ease-in-out;-o-transition:0.5s ease-in-out;transition:0.5s ease-in-out;cursor:pointer;span{display:block;position:absolute;height:2px;width:100%;background:",";border-radius:9px;opacity:1;left:0;-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);-webkit-transition:0.5s ease-in-out;-moz-transition:0.5s ease-in-out;-o-transition:0.5s ease-in-out;transition:0.5s ease-in-out;}span:first-child{top:0px;-webkit-transform-origin:left center;-moz-transform-origin:left center;-o-transform-origin:left center;transform-origin:left center;","}span:last-child{top:9px;-webkit-transform-origin:left center;-moz-transform-origin:left center;-o-transform-origin:left center;transform-origin:left center;","}"],l.O.primary.black,(function(e){if(e.isOpen)return(0,a.css)(["-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);top:-3px;left:0px;"])}),(function(e){if(e.isOpen)return(0,a.css)(["-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);top:14px;left:0px;"])})),W=function(e){var t=e.isOpen;return o.createElement(Z,{isOpen:t},o.createElement("span",null),o.createElement("span",null))},V=n.p+"static/DesktopLogo-bf3623d5af24f26b509d9326992d5007.svg",q=function(){return o.createElement("img",{src:V})},G=n(279),K=function(){return o.createElement("img",{src:G.Z})};!function(e){e.MainNavigation="Main Navigation",e.ServiceNavigation="ServiceNavigation"}(i||(i={}));var J=[{sectionTitle:i.MainNavigation,links:[{title:"About Us",url:v.H.AboutUs,linkId:"header_navigation_link_1"},{title:"Latest News",url:v.H.LatestNews,linkId:"header_navigation_link_2"},{title:"Pricing",url:v.H.Pricing,linkId:"header_navigation_link_3"},{title:"Resources",url:v.E.Developers,linkId:"header_navigation_link_4",external:!0}]},{sectionTitle:i.ServiceNavigation,links:[{title:"Login",url:v.E.Login,linkId:"header_navigation_link_login",external:!0},{title:"Contact Us",url:v.H.ContactUs,linkId:"header_navigation_link_6"}]}],$=a.default.nav.withConfig({displayName:"MainNavigation__StyledMainNavigation",componentId:"sc-nkriec-0"})(['display:flex;gap:25px;font-family:"Rubik";font-weight:500;font-size:0.9rem;@media ',"{gap:35px;}"],s.U.desktop),Q=function(){var e;return o.createElement($,null,null===(e=J.find((function(e){return e.sectionTitle===i.MainNavigation})))||void 0===e?void 0:e.links.map((function(e){return e.external?o.createElement("a",{href:e.url,target:"_blank",key:e.linkId},e.title):o.createElement(m.Link,{to:e.url,key:e.linkId},e.title)})))},X=a.default.div.withConfig({displayName:"ServiceNavigation__StyledServiceNavigation",componentId:"sc-11f2y2d-0"})(['display:flex;gap:25px;font-family:"Rubik";font-weight:400;font-size:0.9rem;align-items:center;@media ',"{gap:35px;}"],s.U.desktop),Y=function(){var e,t=(0,o.useContext)(xe);return o.createElement(X,null,null===(e=J.find((function(e){return e.sectionTitle===i.ServiceNavigation})))||void 0===e?void 0:e.links.filter((function(e){return"header_navigation_link_login"!==e.linkId})).map((function(e){return e.external?o.createElement("a",{href:e.url,target:"_blank",key:e.linkId},e.title):o.createElement(m.Link,{to:e.url,key:e.linkId},e.title)})),o.createElement(F.K,{height:"auto",padding:"10px 35px",onClick:function(){return t.getADemoModal.setShowGetADemoModal(!0)}},"Get a Demo"))},ee=function(e){for(var t,n,i="",o=J.reduce((function(e,t){return e+t.links.length}),0),r=1;r<=o;r++)i+="\n    p#header_navigation_link_"+(t=r)+" {\n        animation-delay: "+((n="in"===e?0:o)?.025*(n-t):.1*t)+"s;\n    };\n    ";return i},te=a.default.nav.withConfig({displayName:"MobileNavigation__StyledMobileNavigation",componentId:"sc-131vs84-0"})(["width:100vw;height:100vh;overflow:hidden;background:",";position:fixed;z-index:100;top:60px;display:flex;visibility:",';font-family:"Rubik";transition:all 1.2s ease-in-out;max-height:',";overscroll-behavior:contain;@media ","{display:none;}"],l.O.primary.white,(function(e){return e.isOpen?"visible":"hidden"}),(function(e){return e.isOpen?"100vh":"0"}),s.U.laptop),ne=a.default.div.withConfig({displayName:"MobileNavigation__MobileNavigationWrapper",componentId:"sc-131vs84-1"})(["width:100%;display:flex;flex-direction:column;gap:40px;padding-top:40px;font-weight:400;@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}@keyframes fadeOut{from{opacity:1;}to{opacity:0;}}p{animation:",";}",";& > div:first-child{font-size:1.6rem;line-height:3.2rem;}& > div:nth-child(2){font-size:1.2rem;line-height:3.2rem;color:",";}"],(function(e){return e.isOpen?"fadeIn 1s ease-in":"fadeOut 1s ease-in"}),(function(e){return e.isOpen?ee("in"):ee("out")}),l.O.primary.gray500),ie=function(e){var t=e.links;return o.createElement(o.Fragment,null,t.map((function(e,t,n){return o.createElement("p",{key:e.linkId,id:e.linkId},o.createElement("div",null,e.external?o.createElement("a",{href:e.url,target:"_blank",key:e.linkId},e.title):o.createElement(m.Link,{to:e.url,key:e.linkId},e.title)),t!==n.length-1&&o.createElement(f,{margin:"10px 0",backgroundColor:l.O.secondary.gray300+l.C[.3]}))})))},oe=function(e){var t,n,r=e.isOpen;return o.createElement(te,{isOpen:r},o.createElement(d.W,null,o.createElement(ne,{isOpen:r},o.createElement("div",null,o.createElement(ie,{links:null===(t=J.find((function(e){return e.sectionTitle===i.MainNavigation})))||void 0===t?void 0:t.links})),o.createElement("div",null,o.createElement(ie,{links:null===(n=J.find((function(e){return e.sectionTitle===i.ServiceNavigation})))||void 0===n?void 0:n.links})))))},re=function(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 28 28",version:"1.1"},o.createElement("g",{id:"phone-icon",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o.createElement("g",{id:"ic_fluent_phone_28_regular",fill:"#212121","fill-rule":"nonzero"},o.createElement("path",{d:"M7.92072596,2.64472005 L9.58060919,2.14438844 C11.1435675,1.67327249 12.8134781,2.43464008 13.4828053,3.92352899 L14.5160823,6.22200834 C15.0865915,7.491081 14.7859439,8.98254111 13.7683291,9.93148073 L11.9633958,11.6146057 C11.9410906,11.6354021 11.9227774,11.6601187 11.9093651,11.6875342 C11.720585,12.0734103 12.0066606,13.1043886 12.9061418,14.6623357 C13.9199541,16.4183102 14.7035571,17.1131712 15.0654726,17.005305 L17.4348517,16.2809111 C18.765101,15.8742119 20.2066891,16.3591908 21.0206203,17.4872349 L22.4880851,19.5210248 C23.440761,20.8413581 23.2694403,22.6628821 22.0872853,23.782427 L20.8252038,24.9776653 C19.9337363,25.8219337 18.6854328,26.1763171 17.4833291,25.9264007 C13.966189,25.1951903 10.8150019,22.3628582 8.00336279,17.4929565 C5.18895293,12.6182556 4.31270988,8.46966127 5.44310245,5.05625686 C5.82703045,3.89692852 6.75144427,2.9971717 7.92072596,2.64472005 Z M8.35362603,4.08089467 C7.65205693,4.29236569 7.09740832,4.83222008 6.86705161,5.52781682 C5.89305385,8.46896164 6.6820141,12.2043134 9.30240089,16.7429565 C11.9202871,21.2772684 14.7578382,23.8276999 17.7886493,24.4578029 C18.5099109,24.6077526 19.2588899,24.3951235 19.7937719,23.888561 L21.0558584,22.6933179 C21.6924034,22.0904861 21.784653,21.1096654 21.2716737,20.3987168 L19.8042088,18.3649269 C19.3659382,17.7575185 18.5896985,17.496376 17.8734103,17.7153679 L15.4990066,18.4412788 C14.1848357,18.833027 12.9496858,17.7377562 11.6071037,15.4123357 C10.4705242,13.4437223 10.075962,12.0217729 10.5619671,11.0283539 C10.6558865,10.8363778 10.7841758,10.6632305 10.9404443,10.5175321 L12.7453325,8.83444937 C13.2932789,8.32348189 13.455166,7.52038798 13.1479688,6.83704116 L12.1146918,4.53856182 C11.7542848,3.7368524 10.8551022,3.32688524 10.0135093,3.58056306 L8.35362603,4.08089467 Z",id:"phone-color"}))))},ae=function(){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24"},o.createElement("path",{"fill-rule":"evenodd",d:"M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"}))},le=a.default.header.withConfig({displayName:"Header__StyledHeader",componentId:"sc-1fyghee-0"})(["box-shadow:0px 0px 20px rgba(0,0,0,0.05);height:64px;padding-top:15px;box-sizing:border-box;color:",";background-color:",";@media ","{height:120px;padding-top:0;}position:sticky;z-index:10;top:0;@media ","{top:-40px;}"],l.O.primary.black,l.O.primary.white,s.U.laptop,s.U.laptop),ce=a.default.div.withConfig({displayName:"Header__DesktopHeaderWrapper",componentId:"sc-1fyghee-1"})(["justify-content:space-between;display:none;padding-top:25px;@media ","{display:flex;}"],s.U.laptop),de=a.default.div.withConfig({displayName:"Header__MobileHeaderWrapper",componentId:"sc-1fyghee-2"})(['font-family:"Rubik";font-size:0.8rem;font-weight:500;& > div:first-child{justify-content:space-between;display:flex;align-items:center;& > div{width:100%;}& > div:nth-child(2){text-align:center;}& > div:nth-child(3){text-align:right;}}@media ',"{display:none;}"],s.U.laptop),se=a.default.div.withConfig({displayName:"Header__Wrapper",componentId:"sc-1fyghee-3"})(["display:flex;gap:50px;align-items:center;"]),ue=a.default.div.withConfig({displayName:"Header__LoginSectionContainer",componentId:"sc-1fyghee-4"})(["background:",";display:none;@media ","{display:block;}"],l.O.secondary.gray100,s.U.laptop),pe=a.default.div.withConfig({displayName:"Header__LoginSection",componentId:"sc-1fyghee-5"})(['display:flex;justify-content:flex-end;align-items:center;padding:5px 0;font-family:"Rubik";font-weight:400;font-size:0.8rem;gap:15px;a{display:flex;align-items:center;gap:5px;}']),me=function(){var e,t=(0,o.useState)(!1),n=t[0],r=t[1],a=null===(e=J.find((function(e){return e.sectionTitle===i.ServiceNavigation})))||void 0===e?void 0:e.links.find((function(e){return"header_navigation_link_login"===e.linkId})),l=(0,o.useContext)(xe);return o.createElement(le,null,o.createElement(ue,null,o.createElement(d.W,null,o.createElement(pe,null,o.createElement("a",{href:"tel:(888) 835-4666"},o.createElement(re,null),"(888) 835-4666"),o.createElement("a",{href:null==a?void 0:a.url,target:"__blank"},o.createElement(ae,null),null==a?void 0:a.title)))),o.createElement(d.W,null,o.createElement(ce,null,o.createElement(se,null,o.createElement(m.Link,{to:v.H.HomePage},o.createElement(q,null)),o.createElement(Q,null)),o.createElement(se,null,o.createElement(Y,null))),o.createElement(de,null,o.createElement("div",null,o.createElement("div",{onClick:function(){return r((function(e){return!e}))}},o.createElement(W,{isOpen:n})),o.createElement("div",null,o.createElement(m.Link,{to:v.H.HomePage},o.createElement(K,null))),o.createElement("div",null,o.createElement(m.Link,{to:"/",onClick:function(e){e.preventDefault(),l.getADemoModal.setShowGetADemoModal(!0)}},"Get a Demo"))))),o.createElement(oe,{isOpen:n}))},fe=n(7777),ge=a.default.div.withConfig({displayName:"Layout__StyledLayout",componentId:"sc-ebiqei-0"})(["height:100%;display:flex;flex-direction:column;min-height:100vh;"]),he=a.default.main.withConfig({displayName:"Layout__Main",componentId:"sc-ebiqei-1"})(["height:100%;flex:1 0 auto;"]),ve=a.default.div.withConfig({displayName:"Layout__GetADemoModal",componentId:"sc-ebiqei-2"})(["visibility:",";"],(function(e){return e.showModal?"visible":"hidden"})),ye=a.default.div.withConfig({displayName:"Layout__LoaderContainer",componentId:"sc-ebiqei-3"})(["min-width:200px;min-height:200px;display:flex;justify-content:center;align-items:center;"]),xe=o.createContext({getADemoModal:{showGetADemoModal:!1,setShowGetADemoModal:function(){}}}),we=function(e){var t=e.children,n=e.disabledContainer,i=(0,o.useState)(!1),a=i[0],s=i[1],u={getADemoModal:{showGetADemoModal:a,setShowGetADemoModal:s}},p=c?[window.hbspt]:[];return(0,o.useEffect)((function(){c&&window.hbspt&&window.hbspt.forms.create({region:"na1",portalId:"21630623",formId:"26faf862-980b-40dc-b461-f4cda7841e47",target:"#hubSpotGetADemoForm"})}),p),o.createElement(xe.Provider,{value:u},o.createElement(ge,null,o.createElement(me,null),o.createElement(he,null,n?t:o.createElement(d.O,null,t)),o.createElement(R,null),o.createElement(ve,{showModal:a},o.createElement(fe.u,{onClose:function(){s(!1)},showCloseButton:!0},o.createElement("div",{id:"hubSpotGetADemoForm"},o.createElement(ye,null,o.createElement(r.Z,{color:l.O.primary.lightOrange})))))))}},7777:function(e,t,n){n.d(t,{u:function(){return p}});var i=n(7294),o=function(e,t){(0,i.useEffect)((function(){var n=function(n){var i=null==e?void 0:e.current;i&&!i.contains((null==n?void 0:n.target)||null)&&t(n)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),function(){document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}}),[e,t])},r=n(8198),a=function(e){var t=e.color;return i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"19",viewBox:"0 0 20 19",fill:"none"},i.createElement("rect",{x:"0.807617",y:"17",width:"24",height:"2",rx:"1",transform:"rotate(-45 0.807617 17)",fill:t}),i.createElement("rect",{x:"2.2218",width:"24",height:"2",rx:"1",transform:"rotate(45 2.2218 0)",fill:t}))},l=n(535),c=n(7965),d=l.default.div.withConfig({displayName:"styled__ModalFullPageWrapper",componentId:"sc-axxbwy-0"})(["position:fixed;z-index:1000;top:0;left:0;width:100vw;height:100vh;background-color:",";display:flex;justify-content:center;align-items:center;"],r.O.primary.black+r.C[.2]),s=l.default.div.withConfig({displayName:"styled__StyledModal",componentId:"sc-axxbwy-1"})(["background:",";box-shadow:0px 6px 60px ",";border-radius:16px;padding:25px;@media ","{padding:50px;}position:relative;"],r.O.primary.white,r.O.primary.black+r.C[.15],c.U.tablet),u=l.default.div.withConfig({displayName:"styled__ModalCloseButton",componentId:"sc-axxbwy-2"})(["position:absolute;top:15px;right:15px;cursor:pointer;transition:opacity 0.5s;&:hover{opacity:0.8;transition:opacity 0.5s;}"]),p=function(e){var t=e.children,n=e.onClose,l=e.showCloseButton,c=(0,i.useRef)(null);return o(c,n),i.createElement(d,null,i.createElement(s,{ref:c},l&&i.createElement(u,{onClick:n},i.createElement(a,{color:r.O.primary.black})),t))}},3183:function(e,t,n){n.d(t,{Z:function(){return p}});var i=n(7294),o=function(e){var t=e.color,n=e.opacity;return i.createElement("svg",{width:"14",height:"24",viewBox:"0 0 14 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M8.4497 13.9527V24H3.83432V13.9527H0V9.8787H3.83432V8.39645C3.83432 2.89349 6.13314 0 10.997 0C12.4882 0 12.8609 0.239645 13.6775 0.434911V4.4645C12.7633 4.30473 12.5059 4.21598 11.5562 4.21598C10.429 4.21598 9.82544 4.5355 9.27515 5.16568C8.72485 5.79586 8.4497 6.88757 8.4497 8.4497V9.88757H13.6775L12.2751 13.9615H8.4497V13.9527Z",fill:t,fillOpacity:n}))},r=function(e){var t=e.color,n=e.opacity;return i.createElement("svg",{width:"21",height:"22",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M14.03986,10.00484c0,2.23631-1.8085,4.04476-4.03503,4.04476c-2.23625,0-4.0447-1.81818-4.0447-4.04476  c0-2.23625,1.81818-4.0447,4.0447-4.0447S14.03013,7.77832,14.03986,10.00484z M20,3.34468v13.31065  C20,18.50264,18.50264,20,16.65532,20H3.34468C1.4973,20,0,18.50264,0,16.65532V3.34468C0,1.50704,1.4973,0,3.34468,0h13.31065  C18.4929,0,20,1.50704,20,3.34468z M15.13855,10.00484c0-1.3709-0.53481-2.66406-1.5071-3.62662  c-0.97229-0.97229-2.25566-1.50704-3.62662-1.50704c-1.3709,0-2.66406,0.53475-3.63635,1.50704  c-0.96256,0.96256-1.4973,2.25572-1.4973,3.62662c0,1.37096,0.53475,2.66406,1.4973,3.63635  c0.97229,0.96262,2.26545,1.49736,3.63635,1.49736c1.37096,0,2.65433-0.53475,3.62662-1.49736  C14.60375,12.6689,15.13855,11.3758,15.13855,10.00484z M17.122,3.71415c0-0.54448-0.43754-0.98202-0.98202-0.98202  s-0.99175,0.43754-0.99175,0.98202s0.44728,0.99175,0.99175,0.99175S17.122,4.25863,17.122,3.71415z",fill:t,fillOpacity:n}))},a=function(e){var t=e.color,n=e.opacity;return i.createElement("svg",{width:"25",height:"22",viewBox:"0 0 25 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M0.571289 18.3363C3.10875 18.4791 5.32766 17.886 7.49164 16.3151C5.30569 15.9417 3.78981 14.9421 2.96596 12.8769C3.60307 12.7891 4.16329 12.9538 4.82237 12.6902C2.66937 11.7455 1.27431 10.3285 1.21939 7.8789C1.90044 7.93383 2.41672 8.3842 3.22959 8.31829C1.25235 6.38498 0.648182 4.27592 1.88945 1.71649C3.95457 4.08919 6.37121 5.70393 9.32609 6.46188C9.49086 6.50582 9.64464 6.54976 9.80941 6.58271C10.5674 6.75846 11.4681 7.13194 11.9295 7.07702C12.7204 6.97816 11.9295 6.06643 12.1272 4.88008C12.7533 1.18923 16.8176 -0.491429 19.8274 1.67255C20.7062 2.30967 21.3983 2.29868 22.266 1.91422C22.7164 1.71649 23.1778 1.51877 23.716 1.28809C23.5952 2.34262 22.7823 2.92481 22.1342 3.70472C22.8702 3.86949 23.4634 3.66078 24.1444 3.44109C23.9137 4.19903 23.3425 4.62744 22.8263 5.04485C22.288 5.47326 22.0793 5.92363 22.0573 6.62665C21.7278 17.2708 9.63366 25.4983 1.36219 18.9515C0.560312 18.3144 1.34022 18.9515 0.571289 18.3363Z",fill:t,fillOpacity:n}))},l=function(e){var t=e.color,n=e.opacity;return i.createElement("svg",{width:"25",height:"24",viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M6.16239 7.89111H1.14746V23.8834H6.16239V7.89111Z",fill:t,fillOpacity:n}),i.createElement("path",{d:"M19.7287 7.54462C19.5438 7.52151 19.3474 7.50996 19.151 7.4984C16.3431 7.38285 14.76 9.04679 14.2054 9.76321C14.0551 9.95964 13.9858 10.0752 13.9858 10.0752V7.9375H9.19043V23.9298H13.9858H14.2054C14.2054 22.3005 14.2054 20.6828 14.2054 19.0535C14.2054 18.1753 14.2054 17.2972 14.2054 16.419C14.2054 15.3328 14.1245 14.1773 14.6676 13.1835C15.1298 12.3516 15.9617 11.9356 16.8977 11.9356C19.6709 11.9356 19.7287 14.443 19.7287 14.6741C19.7287 14.6857 19.7287 14.6973 19.7287 14.6973V23.9991H24.7436V13.5648C24.7436 9.99431 22.9295 7.89128 19.7287 7.54462Z",fill:t,fillOpacity:n}),i.createElement("path",{d:"M3.65505 5.82379C5.26325 5.82379 6.56696 4.52009 6.56696 2.91189C6.56696 1.3037 5.26325 0 3.65505 0C2.04686 0 0.743164 1.3037 0.743164 2.91189C0.743164 4.52009 2.04686 5.82379 3.65505 5.82379Z",fill:t,fillOpacity:n}))},c=n(535),d=n(7965),s=c.default.div.withConfig({displayName:"styled__SocialMediaButtonsWrapper",componentId:"sc-3ap8h5-0"})(["display:flex;justify-content:center;gap:50px;align-items:center;@media ","{flex-direction:row;};"],d.U.tablet),u=n(9160),p=function(e){var t=e.color,n=e.opacity;return i.createElement(s,null,i.createElement("a",{href:u.E.Facebook,target:"_blank"},i.createElement(o,{color:t,opacity:n})),i.createElement("a",{href:u.E.Instagram,target:"_blank"},i.createElement(r,{color:t,opacity:n})),i.createElement("a",{href:u.E.Twitter,target:"_blank"},i.createElement(a,{color:t,opacity:n})),i.createElement("a",{href:u.E.Linkedin,target:"_blank"},i.createElement(l,{color:t,opacity:n})))}},6653:function(e,t,n){var i=n(7294),o=n(535),r=n(8198),a=n(4936),l=o.default.div.withConfig({displayName:"SuccessFormSubmitMessage__StyledSucessFormSubmitMessage",componentId:"sc-1yvyyrw-0"})(["display:flex;font-size:0.8rem;align-items:center;gap:10px;color:",";font-weight:600;"],r.O.secondary.green);t.Z=function(e){var t=e.message;return i.createElement(l,null,i.createElement(a.Z,null),i.createElement("p",null,null!=t?t:"Thank you for subscribing!"))}},8198:function(e,t,n){n.d(t,{C:function(){return o},O:function(){return i}});var i={primary:{gray500:"#A0AEC0",lightOrange:"#FF982B",blue:"#027FFF",black:"#282A3B",white:"#FFFFFF"},secondary:{offWhite:"#F8F3F0",orange:"#FF723A",lightRed:"#FF4D49",gray100:"#F3F4F9",gray300:"#C3C5CD",gray700:"#5E606F",green:"#2CBF6D",purple:"#AF52DE",yellow:"#FBBC05",lightBlue:"#63C5EA",azureishWhite:"#D8E9EF",maximumBlue:"#47ADD1"}},o={0:"00",.05:"0C",.1:"19",.15:"26",.2:"33",.25:"3F",.3:"4C",.35:"59",.4:"66",.45:"72",.5:"7F",.55:"8C",.6:"99",.65:"A5",.7:"B2",.75:"BF",.8:"CC",.85:"D8",.9:"E5",.95:"F2",1:"FF"}},7965:function(e,t,n){n.d(t,{U:function(){return i}});var i={mobileS:"(min-width: "+"320px"+")",mobileM:"(min-width: "+"375px"+")",mobileL:"(min-width: "+"425px"+")",tablet:"(min-width: "+"768px"+")",laptop:"(min-width: "+"1100px"+")",desktop:"(min-width: "+"1440px"+")"}},9160:function(e,t,n){var i,o;n.d(t,{E:function(){return o},H:function(){return i}}),function(e){e.HomePage="/",e.ContactUs="/contact-us",e.Pricing="/pricing",e.LatestNews="/news",e.AboutUs="/about-us",e.CarrierFees="/carrier-fees",e.AcceptableUsePolicy="/policies/acceptable-use-policy",e.PrivacyPolicy="/policies/privacy-policy",e.TermsAndConditions="/policies/terms-and-conditions"}(i||(i={})),function(e){e.Login="https://portal.telgorithm.com/login",e.Facebook="https://www.facebook.com/Telgorithm/",e.Instagram="https://www.instagram.com/telgorithm/",e.Twitter="https://twitter.com/telgorithm/",e.Linkedin="https://www.linkedin.com/company/telgorithm/",e.CareerCenter="https://boards.greenhouse.io/telgorithm",e.Developers="https://api.telgorithm.com/messaging/swagger/index.html",e.CampaignRegistry="https://www.campaignregistry.com/"}(o||(o={}))},279:function(e,t,n){t.Z=n.p+"static/MobileLogo-ad2b74eef6b8f2ca6547db3b2e89416c.svg"}}]);
//# sourceMappingURL=5680d080534ea37099bf195fd8bbf102dbe2b9fe-3331c782d483ee4ffe18.js.map