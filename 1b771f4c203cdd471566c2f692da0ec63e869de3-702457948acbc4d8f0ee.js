"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[34],{6296:function(e,t,i){i.d(t,{G:function(){return L},L:function(){return g},M:function(){return w},P:function(){return v},S:function(){return q},_:function(){return l},a:function(){return o},b:function(){return d},g:function(){return p},h:function(){return s}});var n=i(7294),a=(i(2369),i(5697)),r=i.n(a);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t.indexOf(i=r[n])>=0||(a[i]=e[i]);return a}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function d(e,t,i,n,a){return void 0===a&&(a={}),o({},i,{loading:n,shouldLoad:e,"data-main-image":"",style:o({},a,{opacity:t?1:0})})}function p(e,t,i,n,a,r,l,s){var d={};r&&(d.backgroundColor=r,"fixed"===i?(d.width=n,d.height=a,d.backgroundColor=r,d.position="relative"):("constrained"===i||"fullWidth"===i)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),l&&(d.objectFit=l),s&&(d.objectPosition=s);var p=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return p}var u,c=["children"],f=function(e){var t=e.layout,i=e.width,a=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/i*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:i,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+a+"' width='"+i+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,i=l(e,c);return n.createElement(n.Fragment,null,n.createElement(f,o({},i)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,i=e.srcSet,a=e.loading,r=e.alt,s=void 0===r?"":r,d=e.shouldLoad,p=l(e,m);return n.createElement("img",o({},p,{decoding:"async",loading:a,src:d?t:void 0,"data-src":d?void 0:t,srcSet:d?i:void 0,"data-srcset":d?void 0:i,alt:s}))},x=function(e){var t=e.fallback,i=e.sources,a=void 0===i?[]:i,r=e.shouldLoad,s=void 0===r||r,d=l(e,h),p=d.sizes||(null==t?void 0:t.sizes),u=n.createElement(y,o({},d,t,{sizes:p,shouldLoad:s}));return a.length?n.createElement("picture",null,a.map((function(e){var t=e.media,i=e.srcSet,a=e.type;return n.createElement("source",{key:t+"-"+a+"-"+i,type:a,media:t,srcSet:s?i:void 0,"data-srcset":s?void 0:i,sizes:p})})),u):u};y.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},x.displayName="Picture",x.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};var b=["fallback"],v=function(e){var t=e.fallback,i=l(e,b);return t?n.createElement(x,o({},i,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",o({},i))};v.displayName="Placeholder",v.propTypes={fallback:a.string,sources:null==(u=x.propTypes)?void 0:u.sources,alt:function(e,t,i){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+i+"`. Validation failed."):null}};var w=function(e){return n.createElement(n.Fragment,null,n.createElement(x,o({},e)),n.createElement("noscript",null,n.createElement(x,o({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=x.propTypes;var C,k,z=function(e,t,i){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];return e.alt||""===e.alt?r().string.apply(r(),[e,t,i].concat(a)):new Error('The "alt" prop is required in '+i+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},_={image:r().object.isRequired,alt:z},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],E=["style","className"],N=new Set,I=function(e){var t=e.as,a=void 0===t?"div":t,r=e.image,d=e.style,p=e.backgroundColor,u=e.className,c=e.class,f=e.onStartLoad,g=e.onLoad,m=e.onError,h=l(e,T),y=r.width,x=r.height,b=r.layout,v=function(e,t,i){var n={},a="gatsby-image-wrapper";return"fixed"===i?(n.width=e,n.height=t):"constrained"===i&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}(y,x,b),w=v.style,z=v.className,_=l(v,E),I=(0,n.useRef)(),L=(0,n.useMemo)((function(){return JSON.stringify(r.images)}),[r.images]);c&&(u=c);var O=function(e,t,i){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+i/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+i+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(b,y,x);return(0,n.useEffect)((function(){C||(C=Promise.all([i.e(774),i.e(989)]).then(i.bind(i,5989)).then((function(e){var t=e.renderImageToString,i=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:i}})));var e,t,n=I.current.querySelector("[data-gatsby-image-ssr]");return n&&s()?(n.complete?(null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void N.add(L)):k&&N.has(L)?void 0:(C.then((function(i){var n=i.renderImageToString,a=i.swapPlaceholderImage;I.current&&(I.current.innerHTML=n(o({isLoading:!0,isLoaded:N.has(L),image:r},h)),N.has(L)||(e=requestAnimationFrame((function(){I.current&&(t=a(I.current,L,N,d,f,g,m))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[r]),(0,n.useLayoutEffect)((function(){N.has(L)&&k&&(I.current.innerHTML=k(o({isLoading:N.has(L),isLoaded:N.has(L),image:r},h)),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(a,o({},_,{style:o({},w,d,{backgroundColor:p}),className:z+(u?" "+u:""),ref:I,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},L=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));L.propTypes=_,L.displayName="GatsbyImage";var O,R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],S=function(e,t){for(var i=arguments.length,n=new Array(i>2?i-2:0),a=2;a<i;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},U=new Set(["fixed","fullWidth","constrained"]),A={src:r().string.isRequired,alt:z,width:S,height:S,sizes:r().string,layout:function(e){if(void 0!==e.layout&&!U.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(O=L,function(e){var t=e.src,i=e.__imageData,a=e.__error,r=l(e,R);return a&&console.warn(a),i?n.createElement(O,o({image:i},r)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=A},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var i;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,i=!1,n=!1,a=0;a<e.length;a++){var r=e[a];t&&/[a-zA-Z]/.test(r)&&r.toUpperCase()===r?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,n=i,i=!0,a++):i&&n&&/[a-zA-Z]/.test(r)&&r.toLowerCase()===r?(e=e.slice(0,a-1)+"-"+e.slice(a-1),n=i,i=!1,t=!0):(t=r.toLowerCase()===r&&r.toUpperCase()!==r,n=i,i=r.toUpperCase()===r&&r.toLowerCase()!==r)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),i=e,t.pascalCase?i.charAt(0).toUpperCase()+i.slice(1):i)};e.exports=t,e.exports.default=t},3121:function(e,t,i){var n=i(7294),a=i(458),r=function(e){var t=e.children;return n.createElement(a.iA,null,t)};r.Header=a.xD,r.Body=a.RM,r.Row=a.SC,r.HeaderCell=a.xs,r.BodyCell=a.Ti,r.Container=a.xJ,r.Wrapper=a.y6,t.Z=r},458:function(e,t,i){i.d(t,{RM:function(){return p},SC:function(){return s},Ti:function(){return l},iA:function(){return u},xD:function(){return d},xJ:function(){return c},xs:function(){return o},y6:function(){return f}});var n=i(535),a=i(7965),r=i(8198),o=n.default.th.withConfig({displayName:"styled__TableHeaderCell",componentId:"sc-z8p7f8-0"})(['font-size:16px;font-family:"Rubik";font-weight:600;line-height:22px;text-align:left;@media ',"{font-size:18px;line-height:24px;}"],a.U.laptop),l=n.default.td.withConfig({displayName:"styled__TableBodyCell",componentId:"sc-z8p7f8-1"})(['font-size:16px;font-family:"Rubik";font-weight:400;line-height:22px;vertical-align:middle;@media ',"{font-size:18px;line-height:24px;}"],a.U.laptop),s=n.default.tr.withConfig({displayName:"styled__TableRow",componentId:"sc-z8p7f8-2"})(["","{padding:9px 9px 9px 0px;&:first-child{padding-left:24px;border-top-left-radius:8px;border-bottom-left-radius:8px;}&:last-child{padding-right:24px;border-top-right-radius:8px;border-bottom-right-radius:8px;}}","{padding:9px 9px 9px 0px;&:first-child{padding-left:24px;}}"],l,o),d=n.default.thead.withConfig({displayName:"styled__TableHeader",componentId:"sc-z8p7f8-3"})([""]),p=n.default.tbody.withConfig({displayName:"styled__TableBody",componentId:"sc-z8p7f8-4"})(["",":nth-child(2n+1){background-color:",";}"],s,r.O.primary.blue+r.C[.1]),u=n.default.table.withConfig({displayName:"styled__Table",componentId:"sc-z8p7f8-5"})(["table-layout:fixed;@media ","{margin:0;width:100%;}"],a.U.laptop),c=n.default.div.withConfig({displayName:"styled__TableContainer",componentId:"sc-z8p7f8-6"})(["overflow-x:hidden;position:relative;@media ",'{width:auto;}@supports (-webkit-touch-callout:none){&::after{position:absolute;content:"";display:block;bottom:2px;left:0;width:100%;height:5px;background-color:',";border-radius:5px;z-index:-1;@media ","{display:none;}}}"],a.U.tablet,r.O.primary.gray500,a.U.tablet),f=n.default.div.withConfig({displayName:"styled__TableWrapper",componentId:"sc-z8p7f8-7"})(["overflow-x:scroll;scrollbar-color:",";padding-bottom:10px;&::-webkit-scrollbar{width:12px;height:10px !important;}&::-webkit-scrollbar-track{background:",";border-radius:5px;height:5px !important;}&::-webkit-scrollbar-thumb{background-color:",";border-radius:10px;height:5px !important;}&:hover::-webkit-scrollbar-thumb{background-color:",";}@media ","{overflow-x:auto;table{min-width:auto;}}table{min-width:850px;width:100%;table-layout:auto;}"],r.O.secondary.gray700,r.O.secondary.gray300,r.O.primary.gray500,r.O.primary.gray500,a.U.tablet)},4406:function(e,t,i){i.d(t,{H:function(){return o},x:function(){return l}});var n=i(535),a=i(7965),r=i(8198),o=n.default.h2.withConfig({displayName:"Text__SectionTitleText",componentId:"sc-12vzbfl-0"})(['font-size:32px;font-family:"Poppins";font-weight:600;line-height:38px;@media ',"{font-size:52px;line-height:64px;}"],a.U.laptop),l={Title:{Normal:{sm:{},md:{},lg:{}},Bold:{sm:{},md:n.default.h2.withConfig({displayName:"Text__TitleBoldMedium",componentId:"sc-12vzbfl-1"})(["color:",";font-size:22px;font-family:'Poppins';font-weight:600;line-height:28px;@media ","{font-size:32px;line-height:38px;}"],r.O.primary.black,a.U.laptop),lg:{},xl:n.default.h1.withConfig({displayName:"Text__TitleBoldExtraLarge",componentId:"sc-12vzbfl-2"})(["color:",';font-size:32px;font-family:"Poppins";font-weight:700;line-height:38px;@media ',"{font-size:52px;line-height:64px;}"],r.O.primary.black,a.U.laptop)}},Regular:{Normal:{sm:n.default.span.withConfig({displayName:"Text__RegularNormalSmall",componentId:"sc-12vzbfl-3"})(["color:",';font-size:12px;font-family:"Rubik";font-weight:400;line-height:14px;@media ',"{font-size:14px;line-height:17px;}"],r.O.primary.black,a.U.laptop),md:n.default.span.withConfig({displayName:"Text__RegularNormalMedium",componentId:"sc-12vzbfl-4"})(["color:",';font-size:16px;font-family:"Rubik";font-weight:400;line-height:22px;@media ',"{font-size:18px;line-height:26px;}"],r.O.primary.black,a.U.laptop),lg:{}},Bold:{sm:{},md:n.default.span.withConfig({displayName:"Text__RegularBoldMedium",componentId:"sc-12vzbfl-5"})(["color:",';font-size:16px;font-family:"Rubik";font-weight:500;line-height:22px;@media ',"{font-size:18px;line-height:26px;}"],r.O.primary.black,a.U.laptop),lg:n.default.span.withConfig({displayName:"Text__RegularBoldLarge",componentId:"sc-12vzbfl-6"})(["color:",';font-size:18px;font-family:"Rubik";font-weight:500;line-height:24px;@media ',"{font-size:24px;line-height:32px;}"],r.O.primary.black,a.U.laptop),xl:n.default.span.withConfig({displayName:"Text__RegularBoldExtraLarge",componentId:"sc-12vzbfl-7"})(["color:",';font-size:32px;font-family:"Rubik";font-weight:500;line-height:38px;@media ',"{font-size:40px;line-height:48px;}"],r.O.primary.black,a.U.laptop)},ExtraBold:{sm:{},md:n.default.span.withConfig({displayName:"Text__RegularExtraBoldMedium",componentId:"sc-12vzbfl-8"})(["color:",';font-size:16px;font-family:"Rubik";font-weight:700;line-height:22px;@media ',"{font-size:18px;line-height:26px;}"],r.O.primary.black,a.U.laptop),lg:{}}}}},760:function(e,t,i){i.d(t,{iz:function(){return o},Ar:function(){return u.Z},Y2:function(){return p},iA:function(){return l.Z},xv:function(){return n.x}});var n=i(4406),a=i(535),r=i(8198),o=a.default.div.withConfig({displayName:"Divider",componentId:"sc-1puxyfi-0"})(["width:100%;border-bottom:1px solid ",";"],r.O.secondary.gray300),l=i(3121),s=i(7294),d=a.default.input.withConfig({displayName:"NumberInput__Input",componentId:"sc-1dbsi4l-0"})(["color:",';font-size:16px;font-family:"Rubik";font-weight:400;line-height:22px;width:calc(100% - 24px);padding:6px 12px;text-align:',";border:1px solid #C3C5CD;border-radius:8px;"],r.O.primary.black,(function(e){var t;return null!==(t=e.textAlign)&&void 0!==t?t:"left"})),p=function(e){var t=e.onChange,i=e.initialValue,n=(0,s.useState)(i?String(i):"0"),a=n[0],r=n[1];return s.createElement(d,{type:"text",value:null!=a?a:"",onInput:function(e){var i=e.currentTarget.value.toString().replace(/[^0-9]/g,"");if(isNaN(Number(i)))r(null),t&&t(null);else{var n=Number(i);r(function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}(n)),t&&t(n)}},maxLength:13,onFocus:function(e){return e.currentTarget.select()}})},u=i(2769)}}]);
//# sourceMappingURL=1b771f4c203cdd471566c2f692da0ec63e869de3-702457948acbc4d8f0ee.js.map