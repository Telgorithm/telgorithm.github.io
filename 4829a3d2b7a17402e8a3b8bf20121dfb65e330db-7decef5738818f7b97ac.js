(self.webpackChunklanding=self.webpackChunklanding||[]).push([[4892],{59751:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var i=n(15785),a=n(67294),r=n(540),o=n(78198),l=n(87965);const s=r.default.section.withConfig({displayName:"styled__StyledFAQ",componentId:"sc-1s8h5qz-0"})(["display:flex;flex-direction:column;align-items:center;gap:25px;& > h2{text-align:center;font-weight:600;}"]),d=r.default.div.withConfig({displayName:"styled__QuestionsList",componentId:"sc-1s8h5qz-1"})(["display:flex;flex-direction:column;@media ","{width:85%;}"],l.U.laptop),c=r.default.div.withConfig({displayName:"styled__FaqItem",componentId:"sc-1s8h5qz-2"})(["display:flex;justify-content:space-between;align-items:flex-start;cursor:pointer;border-bottom:1px solid ",";"],o.O.secondary.gray300),u=r.default.div.withConfig({displayName:"styled__Question",componentId:"sc-1s8h5qz-3"})([""]),p=r.default.div.withConfig({displayName:"styled__Answer",componentId:"sc-1s8h5qz-4"})(["span{font-weight:300;}a{text-decoration:underline;font-weight:400;&:hover{color:",";}}"],o.O.secondary.orange),m=r.default.div.withConfig({displayName:"styled__QuestionContent",componentId:"sc-1s8h5qz-5"})(["width:80%;padding:25px;display:flex;flex-direction:column;gap:15px;@media ","{width:90%;}"],l.U.mobileXXL),f=r.default.div.withConfig({displayName:"styled__ExpandIcon",componentId:"sc-1s8h5qz-6"})(["margin-top:30px;width:30px;height:30px;border-radius:50%;position:relative;background:linear-gradient( 90deg,"," 0%,"," 100% );font-weight:300;color:",";&::after,&::before{content:'—';display:block;position:absolute;top:2px;font-size:26px;left:5px;transition:0.3s;}&::after{top:2px;left:6px;opacity:0;}",""],o.O.primary.lightOrange,o.O.secondary.lightRed,o.O.primary.white,(e=>!e.expanded&&(0,r.css)(["&::after{opacity:1;transform:rotate(90deg);}"])));var g=n(34406);function h(e){return"string"==typeof e&&"%"===e[e.length-1]&&function(e){const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}(e.substring(0,e.length-1))}function x(e,t,n){0===t&&!n&&(null==e?void 0:e.style)&&(null==e?void 0:e.children.length)>0&&(e.style.display="none")}const y={animating:"rah-animating",animatingUp:"rah-animating--up",animatingDown:"rah-animating--down",animatingToHeightZero:"rah-animating--to-height-zero",animatingToHeightAuto:"rah-animating--to-height-auto",animatingToHeightSpecific:"rah-animating--to-height-specific",static:"rah-static",staticHeightZero:"rah-static--height-zero",staticHeightAuto:"rah-static--height-auto",staticHeightSpecific:"rah-static--height-specific"};function v(e,t){return[e.static,0===t&&e.staticHeightZero,"number"==typeof t&&t>0?e.staticHeightSpecific:null,"auto"===t&&e.staticHeightAuto].filter((e=>e)).join(" ")}const w=["animateOpacity","animationStateClasses","applyInlineTransitions","children","className","contentClassName","contentRef","delay","duration","easing","height","onHeightAnimationEnd","onHeightAnimationStart","style","disableDisplayNone"];var b=a.forwardRef(((e,t)=>{const{animateOpacity:n=!1,animationStateClasses:i={},applyInlineTransitions:r=!0,children:o,className:l="",contentClassName:s,delay:d=0,disableDisplayNone:c=!1,duration:u=500,easing:p="ease",height:m,onHeightAnimationEnd:f,onHeightAnimationStart:g,style:b,contentRef:_}=e,C=Object.assign({},e);w.forEach((e=>{delete C[e]}));const E=(0,a.useRef)(m),N=(0,a.useRef)(null),S=(0,a.useRef)(),I=(0,a.useRef)(),k=(0,a.useRef)(Object.assign(Object.assign({},y),i)),U="undefined"!=typeof window,q=(0,a.useRef)(!(!U||!window.matchMedia)&&window.matchMedia("(prefers-reduced-motion)").matches),O=q.current?0:d,T=q.current?0:u;let R=m,j="visible";"number"==typeof m?(R=m<0?0:m,j="hidden"):h(R)&&(R="0%"===m?0:m,j="hidden");const[M,$]=(0,a.useState)(R),[z,D]=(0,a.useState)(j),[L,A]=(0,a.useState)(!1),[H,P]=(0,a.useState)(v(k.current,m));(0,a.useEffect)((()=>{x(N.current,M,c)}),[]),(0,a.useEffect)((()=>{if(m!==E.current&&N.current){!function(e,t){0===t&&(null==e?void 0:e.style)&&(e.style.display="")}(N.current,E.current),N.current.style.overflow="hidden";const e=N.current.offsetHeight;N.current.style.overflow="";const t=T+O;let n,i,a,r="hidden";const o="auto"===E.current;"number"==typeof m?(n=m<0?0:m,i=n):h(m)?(n="0%"===m?0:m,i=n):(n=e,i="auto",r=void 0),o&&(i=n,n=e);const l=[k.current.animating,("auto"===E.current||m<E.current)&&k.current.animatingUp,("auto"===m||m>E.current)&&k.current.animatingDown,0===i&&k.current.animatingToHeightZero,"auto"===i&&k.current.animatingToHeightAuto,"number"==typeof i&&i>0?k.current.animatingToHeightSpecific:null].filter((e=>e)).join(" "),s=v(k.current,i);$(n),D("hidden"),A(!o),P(l),clearTimeout(I.current),clearTimeout(S.current),o?(a=!0,I.current=setTimeout((()=>{$(i),D(r),A(a),null==g||g(i)}),50),S.current=setTimeout((()=>{A(!1),P(s),x(N.current,i,c),null==f||f(i)}),t)):(null==g||g(n),I.current=setTimeout((()=>{$(i),D(r),A(!1),P(s),"auto"!==m&&x(N.current,n,c),null==f||f(n)}),t))}return E.current=m,()=>{clearTimeout(I.current),clearTimeout(S.current)}}),[m]);const Q=Object.assign(Object.assign({},b),{height:M,overflow:z||(null==b?void 0:b.overflow)});L&&r&&(Q.transition=`height ${T}ms ${p} ${O}ms`,(null==b?void 0:b.transition)&&(Q.transition=`${b.transition}, ${Q.transition}`),Q.WebkitTransition=Q.transition);const F={};n&&(F.transition=`opacity ${T}ms ${p} ${O}ms`,F.WebkitTransition=F.transition,0===M&&(F.opacity=0));const B=void 0!==C["aria-hidden"]?C["aria-hidden"]:0===m;return a.createElement("div",Object.assign({},C,{"aria-hidden":B,className:`${H} ${l}`,style:Q,ref:t}),a.createElement("div",{className:s,style:F,ref:e=>{N.current=e,_&&(_.current=e)}},o))}));var _=e=>{let{faqItems:t}=e;const{0:n,1:r}=(0,a.useState)([]);return a.createElement(s,null,a.createElement(g.xv.Title.Bold.lg,null,"FAQs"),a.createElement(d,null,t.map(((e,t)=>a.createElement(c,{onClick:()=>{return e=t,void(n.includes(e)?r(n.filter((t=>t!==e))):r([].concat((0,i.Z)(n),[e])));var e},key:e.question},a.createElement(m,null,a.createElement(u,null,a.createElement(g.xv.Title.Bold.sm,null,e.question)),a.createElement(b,{duration:500,height:n.includes(t)?"auto":0},a.createElement(p,null,"string"==typeof e.answer?a.createElement(a.Fragment,null,a.createElement(g.xv.Regular.Normal.md,null,e.answer)):e.answer))),a.createElement(f,{expanded:n.includes(t)}))))))}},82645:function(e,t,n){"use strict";var i=n(67294);t.Z=e=>{let{color:t}=e;return i.createElement("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("path",{d:"M18.5371 14.1121L13.2371 8.81213C13.1209 8.69497 12.9827 8.60198 12.8303 8.53852C12.678 8.47506 12.5146 8.44238 12.3496 8.44238C12.1846 8.44238 12.0212 8.47506 11.8689 8.53852C11.7166 8.60198 11.5783 8.69497 11.4621 8.81213C11.2293 9.04633 11.0986 9.36315 11.0986 9.69338C11.0986 10.0236 11.2293 10.3404 11.4621 10.5746L15.8871 14.9996L11.4621 19.4246C11.2293 19.6588 11.0986 19.9756 11.0986 20.3059C11.0986 20.6361 11.2293 20.9529 11.4621 21.1871C11.5789 21.303 11.7174 21.3946 11.8697 21.4568C12.022 21.5191 12.1851 21.5506 12.3496 21.5496C12.5141 21.5506 12.6772 21.5191 12.8295 21.4568C12.9818 21.3946 13.1203 21.303 13.2371 21.1871L18.5371 15.8871C18.6543 15.7709 18.7473 15.6327 18.8107 15.4804C18.8742 15.328 18.9069 15.1646 18.9069 14.9996C18.9069 14.8346 18.8742 14.6712 18.8107 14.5189C18.7473 14.3666 18.6543 14.2283 18.5371 14.1121Z",fill:t}))}},41777:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var i=n(67294),a=n(11883),r=n(540),o=n(78198),l=n(87965);const s=r.default.a.withConfig({displayName:"styled__LinkElementExternal",componentId:"sc-zoiss5-0"})(["font-size:16px;font-family:'Rubik';font-weight:500;line-height:22px;color:",";display:",";align-items:center;@media ","{font-size:18px;line-height:26px;}transition:0.5s;&:hover{color:",";transition:0.5s;}"],(e=>{var t;return null!==(t=e.color)&&void 0!==t?t:o.O.primary.blue}),(e=>e.inline?"inline":"flex"),l.U.laptop,o.O.secondary.orange),d=(0,r.default)(a.Link).withConfig({displayName:"styled__LinkElementInternal",componentId:"sc-zoiss5-1"})(["font-family:'Rubik';font-weight:500;line-height:28px;color:",";display:flex;align-items:center;font-size:16px;line-height:22px;transition:0.5s;@media ","{font-size:18px;line-height:26px;}&:hover{color:",";transition:0.5s;}"],(e=>{var t;return null!==(t=e.color)&&void 0!==t?t:o.O.primary.blue}),l.U.laptop,o.O.secondary.orange);var c=n(82645),u=n(14670),p=n.n(u);var m=e=>{let{address:t,arrow:n,children:a,external:r,color:l,inline:u}=e;return r?i.createElement(s,{href:t,target:"_blank",id:p().generate(),color:l,rel:"noreferrer",inline:u},a,n&&i.createElement(c.Z,{color:null!=l?l:o.O.primary.blue})):i.createElement(d,{to:t,color:l},a,n&&i.createElement(c.Z,{color:null!=l?l:o.O.primary.blue}))}},28534:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var i=n(67294),a=n(10179),r=n(55239),o=n(58657),l=n(31814),s=n(5276),d=n(7512),c=n(78198);const u=e=>{const t=("; "+document.cookie).split("; "+e+"=");var n;return 2===t.length?null==t||null===(n=t.pop())||void 0===n?void 0:n.split(";").shift():""},p="5,000,000",m="$0.005",f="500,000",g="$1,500",h="$4,000",x="$48,000";var y=e=>{let{withoutDescription:t}=e;const{observe:n,inView:y}=(0,s.Y)({}),v=(0,i.useRef)(null),{0:w,1:b}=(0,i.useState)(!1),{0:_,1:C}=(0,i.useState)(""),{0:E,1:N}=(0,i.useState)(""),{0:S,1:I}=(0,i.useState)(""),{0:k,1:U}=(0,i.useState)(""),{0:q,1:O}=(0,i.useState)(!1),T=+_/10,R=.003*+T,j=R?R.toFixed(2):"",M=+E*T,$=+j+ +(M?M.toFixed(2):"")||"",z=12*+$||"",D=Boolean(_||E),L=+_>0,A=+E>0,H=(0,d.Z)(),P=(0,d.n)(H.width);return(0,i.useEffect)((()=>{var e,t;P&&(y?null==v||null===(e=v.current)||void 0===e||e.focus({preventScroll:!0}):null==v||null===(t=v.current)||void 0===t||t.blur())}),[P,y]),(0,i.useEffect)((()=>{(S||k)&&(I(""),U(""))}),[_,E]),i.createElement(a.IA,{id:"smart-queueing-calculator",withoutDescription:t},i.createElement(a.ur,null,i.createElement(a.qD,null,i.createElement(r.xv.Title.Bold.sm,null,"Smart Queueing Calculator"),i.createElement(r.xv.Regular.Bold.md,null,"Cost of Failed Messages"),i.createElement(a.vT,null,i.createElement("div",null,i.createElement(r.xv.Regular.Normal.sm,null,"Monthly Messaging Volume")),i.createElement("div",{ref:n},i.createElement(r.Y2,{placeholder:p,allowLeadingZeros:!1,value:_,decimalScale:0,emptyPlaceholder:D,isValid:!q||L,getInputRef:v,onValueChange:e=>C(e.value),valueIsNumericString:!0}))),i.createElement(a.vT,null,i.createElement("div",null,i.createElement(r.xv.Regular.Normal.sm,null," Platform Fees Cost"),i.createElement(r.xv.Regular.Normal.xs,null,"(What You Pay Per-Message)")),i.createElement("div",null,i.createElement(r.Y2,{placeholder:m,prefix:"$",value:E,decimalScale:5,emptyPlaceholder:D,isValid:!q||A,onValueChange:e=>N(e.value),valueIsNumericString:!0}))),i.createElement(a.vT,null,i.createElement("div",null,i.createElement(r.xv.Regular.Normal.sm,null,"10% of Total Messages Are Expected to Drop Each Month")),i.createElement("div",null,i.createElement(r.Y2,{placeholder:f,disabled:!0,emptyPlaceholder:D,value:T?Math.round(+T):""}))),i.createElement(a.vT,null,i.createElement("div",null,i.createElement(r.xv.Regular.Normal.sm,null,"$ Spent on Carrier Pass-through Fees for Failed Messages"),i.createElement(r.xv.Regular.Normal.xs,null,"(Approx. $0.003 Per-Message)")),i.createElement("div",null,i.createElement(r.Y2,{disabled:!0,placeholder:g,prefix:"$",emptyPlaceholder:D,value:j}))),i.createElement(a.qO,null,i.createElement(o.KM,{onClick:()=>{L&&A&&(()=>{const e={fields:[{objectTypeId:"0-1",name:"smart_queue_calculator_volume",value:String(_)},{objectTypeId:"0-1",name:"annual_potential_lost_revenue__sqc_",value:String(z)},{objectTypeId:"0-1",name:"monthly_potential_lost_revenue__sqc_",value:String($)},{objectTypeId:"0-1",name:"smart_queueing_calculator_platform_fees_cost",value:String(E)}],context:{hutk:u("hubspotutk"),pageUri:document.location.href,pageName:document.title}};fetch("https://api.hsforms.com/submissions/v3/integration/submit/21630623/02cab53c-1b01-4d86-944e-4bf6bef09d58",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),I(String(z)),U(String($)),O(!1)})(),O(!0)}},"Calculate")),i.createElement(r.xv.Regular.Bold.md,null,"Potential Lost Revenue"),i.createElement(a.vT,null,i.createElement("div",null,i.createElement(r.xv.Regular.Normal.sm,null,"Monthly")),i.createElement("div",null,i.createElement(r.Y2,{disabled:!0,placeholder:h,prefix:"$",textColor:c.O.secondary.lightRed,placeholderColor:c.O.secondary.lightRed,emptyPlaceholder:D,value:k}))),i.createElement(a.vT,null,i.createElement("div",null,i.createElement(r.xv.Regular.Normal.sm,null,"Annually")),i.createElement("div",null,i.createElement(r.Y2,{disabled:!0,placeholder:x,textColor:c.O.secondary.lightRed,placeholderColor:c.O.secondary.lightRed,prefix:"$",emptyPlaceholder:D,value:S})))),i.createElement(a.ev,null,i.createElement(a.l6,null,i.createElement(r.xv.Regular.Normal.sm,null,"How much you could be saving each year with Telgorithm’s Smart Queueing technology"),i.createElement(r.xv.Title.Bold.md,null,S?"$"+(0,l.T4)(+S):D?"...":x)))),!t&&i.createElement(a.Dd,null,i.createElement("div",null,i.createElement(r.xv.Title.Bold.lg,null,"How much $$ would you save?")),i.createElement("div",null,i.createElement(r.xv.Regular.Bold.md,null,"An estimated 10% of all 10DLC text messages are failing each month due to exceeding Carrier rate limits."),i.createElement(r.xv.Regular.Normal.sm,null,"Use our calculator to find out how much your team could be saving annually with Smart Queueing."),i.createElement(r.xv.Regular.Normal.sm,null,"Enter your estimated monthly messaging volume (the number of 10DLC messages your application or software sends each month), your cost per message, and we’ll do the rest."))))}},10179:function(e,t,n){"use strict";n.d(t,{BF:function(){return D},D3:function(){return w},Dd:function(){return E},EY:function(){return O},F5:function(){return y},G0:function(){return R},G1:function(){return z},IA:function(){return _},J2:function(){return h},KM:function(){return c},P$:function(){return T},Qb:function(){return m},S$:function(){return C},UO:function(){return $},VL:function(){return f},X$:function(){return p},ar:function(){return s},bx:function(){return A},c6:function(){return H},ee:function(){return q},ej:function(){return x},ev:function(){return k},iO:function(){return d},iQ:function(){return L},j1:function(){return j},jV:function(){return M},l6:function(){return U},mJ:function(){return P},o4:function(){return v},qD:function(){return S},qO:function(){return b},rk:function(){return u},ur:function(){return N},vT:function(){return I},yh:function(){return g}});var i=n(540),a=n(87965),r=n(78198),o=n(60698),l=n(34406);const s=(0,i.default)(l.xX).withConfig({displayName:"styled__StyledLabel",componentId:"sc-9aqsnh-0"})(["font-weight:700;background:linear-gradient(90deg,#ff982b 0%,#ff4d49 100%);background-clip:text;background-size:100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;"]),d=i.default.section.withConfig({displayName:"styled__StyledSmartQueueingHeroSection",componentId:"sc-9aqsnh-1"})(["display:flex;flex-direction:column;gap:35px;padding:50px 0 25px;@media ","{width:70%;padding:100px 0 50px;}"],a.U.laptop),c=i.default.div.withConfig({displayName:"styled__SmartQueueingDescription",componentId:"sc-9aqsnh-2"})(["display:flex;flex-direction:column;gap:25px;@media ","{flex-direction:row;justify-content:space-between;align-items:center;}@media ","{align-items:flex-start;}"],a.U.tablet,a.U.laptop),u=i.default.div.withConfig({displayName:"styled__SmartQueueingDescriptionContent",componentId:"sc-9aqsnh-3"})(["display:flex;flex-direction:column;gap:25px;@media ","{width:50%;}"],a.U.tablet),p=i.default.div.withConfig({displayName:"styled__SmartQueueingDescriptionImage",componentId:"sc-9aqsnh-4"})(["width:100%;margin:0 auto;@media ","{width:60%;}@media ","{width:40%;margin:unset;}@media ","{width:30%;}"],a.U.mobileXL,a.U.tablet,a.U.laptop),m=i.default.section.withConfig({displayName:"styled__CustomerSpotlight",componentId:"sc-9aqsnh-5"})(["display:flex;flex-direction:column;align-items:center;gap:20px;@media ","{gap:50px;flex-direction:row;}"],a.U.tablet),f=i.default.div.withConfig({displayName:"styled__CustomerSpotlightImage",componentId:"sc-9aqsnh-6"})(["display:none;width:50%;@media ","{width:70%;display:block;}@media ","{width:50%;}"],a.U.laptop,a.U.desktop),g=i.default.div.withConfig({displayName:"styled__CustomerSpotlightContent",componentId:"sc-9aqsnh-7"})(["display:flex;flex-direction:column;justify-content:space-between;gap:20px;@media ","{gap:10px;}@media ","{gap:20px;}"],a.U.laptop,a.U.desktop),h=i.default.div.withConfig({displayName:"styled__CustomerSpotlightStats",componentId:"sc-9aqsnh-8"})(["display:flex;flex-direction:column;gap:25px;@media ","{align-items:center;flex-direction:row;width:90%;}@media ","{align-items:unset;flex-direction:column;width:100%;gap:10px;}@media ","{align-items:center;flex-direction:row;gap:25px;}"],a.U.tablet,a.U.laptop,a.U.desktop),x=i.default.div.withConfig({displayName:"styled__CustomerSpotlightStatBlock",componentId:"sc-9aqsnh-9"})(["display:flex;flex-direction:column;gap:5px;flex:1;align-items:flex-start;","{background:linear-gradient(90deg,#ff982b 0%,#ff4d49 100%);background-clip:text;background-size:100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}span{flex:1;}","{color:",";}"],l.D5,l.Cp,r.O.primary.blue),y=i.default.div.withConfig({displayName:"styled__HeroButtons",componentId:"sc-9aqsnh-10"})(["display:flex;gap:20px;flex-direction:column;align-items:center;justify-content:center;@media ","{flex-direction:row;align-items:unset;justify-content:unset;}"],a.U.tablet),v=i.default.section.withConfig({displayName:"styled__FaqSection",componentId:"sc-9aqsnh-11"})(["background-color:",";padding:50px 0;"],r.O.secondary.gray100),w=i.default.div.withConfig({displayName:"styled__FaqContent",componentId:"sc-9aqsnh-12"})(["display:flex;flex-direction:column;gap:50px;@media ","{gap:100px;}a{align-self:flex-end;}"],a.U.laptop),b=(i.default.div.withConfig({displayName:"styled__StyledCalculator",componentId:"sc-9aqsnh-13"})(["max-width:500px;margin-top:100px;display:flex;flex-direction:column;gap:15px;border:1px solid ",";padding:25px;border-radius:15px;"],r.O.primary.gray500),i.default.div.withConfig({displayName:"styled__ButtonContainer",componentId:"sc-9aqsnh-14"})(["width:50%;margin:0 auto;display:flex;align-items:center;justify-content:center;"])),_=(i.default.div.withConfig({displayName:"styled__FormContainer",componentId:"sc-9aqsnh-15"})(["min-width:300px;min-height:400px;display:flex;justify-content:center;align-items:center;@media ","{min-width:1000px;min-height:300px;}"],a.U.laptop),i.default.section.withConfig({displayName:"styled__CalculatorSection",componentId:"sc-9aqsnh-16"})(["display:flex;flex-direction:column-reverse;gap:20px;margin-top:50px;margin-bottom:-25px;@media ","{margin:unset;flex-direction:row;gap:50px;align-items:",";justify-content:",";}"],a.U.laptop,(e=>e.withoutDescription?"center":"flex-start"),(e=>e.withoutDescription?"center":"space-between"))),C=i.default.div.withConfig({displayName:"styled__SectionContainer",componentId:"sc-9aqsnh-17"})(["margin:75px 0;@media ","{margin:125px 0;}"],a.U.laptop),E=i.default.div.withConfig({displayName:"styled__CalculatorDescription",componentId:"sc-9aqsnh-18"})(["display:",";flex-direction:column;gap:30px;& > div:last-child{display:flex;flex-direction:column;gap:15px;}@media ","{margin-top:100px;width:45%;}@media ","{width:50%;}"],(e=>e.withoutDescription?"none":"flex"),a.U.laptop,a.U.desktop),N=i.default.div.withConfig({displayName:"styled__CalculatorBlock",componentId:"sc-9aqsnh-19"})(["border-radius:14px;width:100%;margin-bottom:-50px;@media ","{margin:0 auto;margin-bottom:-50px;}@media ","{margin:0 0 -50px;width:100%;}@media ","{width:50%;}@media ","{width:45%;}"],a.U.mobileL,a.U.tablet,a.U.laptop,a.U.desktop),S=i.default.div.withConfig({displayName:"styled__CalculatorCountingSection",componentId:"sc-9aqsnh-20"})(["display:flex;flex-direction:column;gap:15px;margin-bottom:30px;padding:25px;background-color:",";border-radius:16px;position:relative;z-index:1;border:1px solid ",";@media ","{padding:25px 40px;}h2{background:linear-gradient(90deg,#ff982b 0%,#ff4d49 100%);background-clip:text;background-size:100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}"],r.O.primary.white,r.O.secondary.gray300,a.U.laptop),I=i.default.div.withConfig({displayName:"styled__CalculatorRow",componentId:"sc-9aqsnh-21"})(["display:flex;justify-content:space-between;flex-direction:column;gap:15px;& > div{display:flex;flex-direction:column;gap:5px;}& > div:first-child{flex:2;}& > div:last-child{flex:1;}span{color:",";line-height:1.05rem;}span:first-child{font-weight:500;}@media ","{align-items:center;flex-direction:row;gap:25px;}"],r.O.secondary.gray700,a.U.tablet),k=i.default.div.withConfig({displayName:"styled__CalculatorTotalSaveSection",componentId:"sc-9aqsnh-22"})(["background:url(",") lightgray 50% / cover no-repeat;height:100px;border-radius:16px;padding:15px 25px;padding-top:70px;position:relative;z-index:0;top:-100px;background-position:10%;display:flex;flex-direction:column;justify-content:flex-end;@media ","{padding-top:55px;}@media ","{padding:45px 15px 20px;}@media ","{padding:40px 30px 20px;}@media ","{padding:45px 100px 20px;}@media ","{padding:25px 80px 20px;}@media ","{padding:30px 50px;padding-top:70px;}span{width:60%;}h2{width:30%;}@media ","{display:flex;}"],o.Z,a.U.mobileM,a.U.mobileL,a.U.mobileXL,a.U.mobileXXL,a.U.tablet,a.U.laptop,a.U.laptop),U=i.default.div.withConfig({displayName:"styled__TotalSave",componentId:"sc-9aqsnh-23"})(["display:flex;justify-content:space-between;align-items:center;flex-direction:row;padding-top:25px;gap:45px;text-align:center;span:first-child{font-weight:500;}span,h2{font-family:'Rubik';color:",";}@media ","{text-align:unset;}"],r.O.primary.white,a.U.laptop),q=i.default.div.withConfig({displayName:"styled__StyledSmartQueueingStep",componentId:"sc-9aqsnh-24"})(["display:flex;flex-direction:column;gap:10px;align-items:center;text-align:center;@media ","{width:unset;max-width:300px;}"],a.U.laptop),O=i.default.div.withConfig({displayName:"styled__StepNumber",componentId:"sc-9aqsnh-25"})(["display:flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;span{color:",";}background:linear-gradient( 90deg,"," 0%,"," 100% );"],r.O.primary.white,r.O.primary.lightOrange,r.O.secondary.lightRed),T=i.default.div.withConfig({displayName:"styled__StyledSmartQueueingSchema",componentId:"sc-9aqsnh-26"})(["display:flex;align-items:center;justify-content:center;position:relative;flex-direction:column;display:grid;grid-auto-columns:minmax(0,1fr);grid-auto-flow:column;gap:20px;grid-template-areas:'schema' 'step_1' 'step_2' 'step_3' 'step_4' 'step_5';",":first-child{@media ","{left:20px;top:40px;}grid-area:step_1;}",":nth-child(2){grid-area:step_2;@media ","{left:200px;bottom:50px;}}",":nth-child(3){grid-area:step_3;@media ","{left:500px;top:0px;}}",":nth-child(4){grid-area:step_4;@media ","{right:200px;bottom:50px;}}",":nth-child(5){grid-area:step_5;@media ","{right:20px;top:80px;}}svg{grid-area:schema;max-width:100%;margin:0 auto;}@media ","{display:flex;padding:200px 200px;flex-direction:row;transform:scale(0.9);svg{max-width:unset;}","{position:absolute;}}@media ","{transform:none;}"],q,a.U.laptop,q,a.U.laptop,q,a.U.laptop,q,a.U.laptop,q,a.U.laptop,a.U.laptop,q,a.U.desktop),R=i.default.div.withConfig({displayName:"styled__PlayBackButton",componentId:"sc-9aqsnh-27"})(["width:27px;height:27px;background-color:",";display:flex;align-items:center;border-radius:50%;justify-content:center;"],r.O.secondary.orange),j=i.default.div.withConfig({displayName:"styled__PlayBackIcon",componentId:"sc-9aqsnh-28"})(["width:0px;height:0px;border-style:solid;border-width:0 8px 13px 8px;border-color:",";transform:rotate(90deg);cursor:pointer;position:relative;left:1px;",""],"transparent transparent "+r.O.primary.white+" transparent",(e=>e.isPlaybackInProgress&&(0,i.css)(["width:13px;height:13px;background-color:",";border:none;transform:none;left:0;"],r.O.primary.white))),M=i.default.div.withConfig({displayName:"styled__PlaybackContainer",componentId:"sc-9aqsnh-29"})(["display:flex;align-items:center;gap:10px;margin-top:10px;"]),$=i.default.section.withConfig({displayName:"styled__SmartQueueingAdvantages",componentId:"sc-9aqsnh-30"})(["display:flex;margin:50px 0;flex-direction:column;gap:100px;align-items:center;justify-content:center;@media ","{margin:100px 0;}"],a.U.laptop),z=i.default.div.withConfig({displayName:"styled__SmartQueueingAdvantageItem",componentId:"sc-9aqsnh-31"})(["display:grid;grid-template-columns:1fr;grid-template-rows:50px 50px 50px;align-items:center;justify-items:center;text-align:center;& > div:first-child{margin-bottom:20px;display:flex;align-items:center;justify-content:center;}@media ","{svg{transform:scale(1.3);}}@media ","{grid-template-rows:50px 50px 75px;}"],a.U.tablet,a.U.laptop),D=i.default.div.withConfig({displayName:"styled__SmartQueueingAdvantagesList",componentId:"sc-9aqsnh-32"})(["display:grid;gap:65px;grid-template-columns:1fr;grid-auto-rows:1fr;@media ","{gap:50px;margin-bottom:80px;}@media ","{gap:10px;margin-bottom:0;grid-template-columns:1fr 1fr 1fr;}"],a.U.tablet,a.U.laptop),L=i.default.section.withConfig({displayName:"styled__SmartQueueingVideoContainer",componentId:"sc-9aqsnh-33"})(["background-color:",";padding:50px 0;& > div{justify-content:center;display:flex;align-items:center;}margin:50px 0;@media ","{padding:100px 0;}"],r.O.secondary.azureishWhite,a.U.laptop),A=i.default.div.withConfig({displayName:"styled__SmartQueueingVideoPreview",componentId:"sc-9aqsnh-34"})(["width:70%;cursor:pointer;transition:0.3s;&:hover{transform:scale(1.1);}img{border-radius:8px;}@media ","{width:50%;img{border-radius:16px;}}"],a.U.tablet),H=i.default.div.withConfig({displayName:"styled__MultilineAnswer",componentId:"sc-9aqsnh-35"})(["display:flex;flex-direction:column;gap:20px;"]),P=i.default.ol.withConfig({displayName:"styled__StyledOl",componentId:"sc-9aqsnh-36"})(["list-style:decimal;padding-left:25px;li::marker{color:",";font-size:16px;font-family:'Rubik';font-weight:600;line-height:22px;@media ","{font-size:18px;line-height:26px;}}"],r.O.primary.black,a.U.laptop)},31814:function(e,t,n){"use strict";n.d(t,{Cx:function(){return l},T4:function(){return r}});var i=n(88664);const a=(e,t)=>e<1e3?(0,i.N)(e,t).toString():e<1e6?(0,i.N)(e/1e3,t)+"K":e<1e9?(0,i.N)(e/1e6,t)+"M":(0,i.N)(e/1e9,t)+"B",r=e=>{if(e<100){const t=Math.round(1e3*(e+Number.EPSILON))/1e3;return t.toFixed((0,i.g)([t])).toString()}return e<1e4?(0,i.N)(e,1).toString():a(e,1)},o=new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}),l=e=>o.format(e)},88664:function(e,t,n){"use strict";n.d(t,{N:function(){return a},g:function(){return r}});var i=n(15785);const a=function(e,t){void 0===t&&(t=0);const n=Math.pow(10,t);return Math.round(e*n)/n},r=e=>{const t=e.map((e=>{var t,n;return null!==(t=null===(n=e.toString().split(".")[1])||void 0===n?void 0:n.length)&&void 0!==t?t:0}));return Math.max.apply(Math,(0,i.Z)(t))}},14670:function(e,t,n){"use strict";e.exports=n(95607)},79829:function(e,t,n){"use strict";var i,a,r,o=n(48946),l="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function s(){r=!1}function d(e){if(e){if(e!==i){if(e.length!==l.length)throw new Error("Custom alphabet for shortid must be "+l.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+l.length+" unique characters. These characters were not unique: "+t.join(", "));i=e,s()}}else i!==l&&(i=l,s())}function c(){return r||(r=function(){i||d(l);for(var e,t=i.split(""),n=[],a=o.nextValue();t.length>0;)a=o.nextValue(),e=Math.floor(a*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return i||l},characters:function(e){return d(e),i},seed:function(e){o.seed(e),a!==e&&(s(),a=e)},lookup:function(e){return c()[e]},shuffled:c}},90480:function(e,t,n){"use strict";var i,a,r=n(98416);n(79829);e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?i++:(i=0,a=n),t+=r(7),t+=r(e),i>0&&(t+=r(i)),t+=r(n)}},98416:function(e,t,n){"use strict";var i=n(79829),a=n(13766),r=n(50296);e.exports=function(e){for(var t,n=0,o="";!t;)o+=r(a,i.get(),1),t=e<Math.pow(16,n+1),n++;return o}},95607:function(e,t,n){"use strict";var i=n(79829),a=n(90480),r=n(41082),o=n(15636)||0;function l(){return a(o)}e.exports=l,e.exports.generate=l,e.exports.seed=function(t){return i.seed(t),e.exports},e.exports.worker=function(t){return o=t,e.exports},e.exports.characters=function(e){return void 0!==e&&i.characters(e),i.shuffled()},e.exports.isValid=r},41082:function(e,t,n){"use strict";var i=n(79829);e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6)&&!new RegExp("[^"+i.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},13766:function(e){"use strict";var t,n="object"==typeof window&&(window.crypto||window.msCrypto);t=n&&n.getRandomValues?function(e){return n.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=t},48946:function(e){"use strict";var t=1;e.exports={nextValue:function(){return(t=(9301*t+49297)%233280)/233280},seed:function(e){t=e}}},15636:function(e){"use strict";e.exports=0},50296:function(e){e.exports=function(e,t,n){for(var i=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*i*n/t.length),r="";;)for(var o=e(a),l=a;l--;)if((r+=t[o[l]&i]||"").length===+n)return r}},60698:function(e,t,n){"use strict";t.Z=n.p+"static/blackOrangeGradient-a4455b7e689f432c14311402af3c5f2f.png"}}]);
//# sourceMappingURL=4829a3d2b7a17402e8a3b8bf20121dfb65e330db-7decef5738818f7b97ac.js.map