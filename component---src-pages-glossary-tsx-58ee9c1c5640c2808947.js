"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[609],{92991:function(e,t,n){n.r(t),n.d(t,{default:function(){return U},frontmatter:function(){return A}});var a=n(67294),l=n(58777),o=n(11883),i=n(79833),r=n(97953),s=n(64071),d=n(34406),c=n(540),p=n(78198),m=n(87965),g=n(83732),u=n(72845);const y=(0,c.default)(g.W).withConfig({displayName:"styled__GlossaryPageContentContainer",componentId:"sc-vyag83-0"})(["max-width:1000px;"]),h=c.default.section.withConfig({displayName:"styled__HeroSection",componentId:"sc-vyag83-1"})(["background-color:",";box-sizing:border-box;padding:40px 20px;@media ","{height:400px;padding-top:80px;padding-bottom:80px;}","{display:flex;flex-direction:column;gap:30px;}"],p.O.secondary.gray100,m.U.laptop,y),f=c.default.div.withConfig({displayName:"styled__HeroInfo",componentId:"sc-vyag83-2"})(["display:flex;flex-direction:column;gap:15px;@media ","{gap:30px;}"],m.U.laptop),x=c.default.div.withConfig({displayName:"styled__SearchIconContainer",componentId:"sc-vyag83-3"})(["position:absolute;left:20px;top:calc(50% - 10px);"]),v=c.default.button.withConfig({displayName:"styled__SearchButton",componentId:"sc-vyag83-4"})(["cursor:pointer;position:absolute;right:10px;top:calc(50% - 10px);border:none;background:none;span{color:",";font-weight:600;}&:hover{span{color:",";}}"],p.O.primary.blue,p.O.primary.lightOrange),E=c.default.div.withConfig({displayName:"styled__SearchContainer",componentId:"sc-vyag83-5"})(["position:relative;svg{width:13px;height:13px;}","{padding-left:40px;padding-right:80px;height:45px;border-radius:8px;font-size:12px;&::placeholder{color:",";font-size:0.9rem;}@media ","{height:60px;padding-left:50px;font-size:16px;}}@media ","{svg{width:20px;height:20px;}}"],u.Dc,p.O.primary.gray500,m.U.laptop,m.U.laptop),w=c.default.div.withConfig({displayName:"styled__Alphabet",componentId:"sc-vyag83-6"})(["padding:50px 0;display:none;width:100%;flex-wrap:wrap;gap:10px;justify-content:center;@media ","{justify-content:unset;}@media ","{justify-content:space-between;}a{h2{transition:0.5s;&:hover{color:",";transition:0.5s;}}}@media ","{display:flex;}"],m.U.mobileL,m.U.tablet,p.O.secondary.orange,m.U.laptop),b=c.default.div.withConfig({displayName:"styled__TermsGroup",componentId:"sc-vyag83-7"})(["border-top:1px solid ",";display:flex;flex-direction:column;gap:30px;padding:30px 0;@media ","{padding:60px 0;}"],p.O.secondary.gray300,m.U.tablet),C=c.default.div.withConfig({displayName:"styled__TermsContainer",componentId:"sc-vyag83-8"})(["",":first-child{border-top:none;}@media ","{",":first-child{border-top:1px solid ",";}}"],b,m.U.laptop,b,p.O.secondary.gray300),_=c.default.div.withConfig({displayName:"styled__TermFirstLetter",componentId:"sc-vyag83-9"})([""]),T=c.default.div.withConfig({displayName:"styled__TermsList",componentId:"sc-vyag83-10"})(["display:flex;flex-direction:column;gap:10px;@media ","{display:grid;gap:20px;}"," a > span{transition:0.5s;&:hover{color:",";transition:0.5s;}}"],m.U.tablet,(e=>e.termsAmount>2&&(0,c.css)(["a:nth-child(2){grid-column-start:2;}"])),p.O.secondary.orange);var k=n(74455),N=n(9715),S=n(24051);const O=function(e,t){return void 0===t&&(t=!0),((e,t,n)=>{const l=(0,a.useCallback)((n=>{n.code===e&&t()}),[t]);(0,a.useEffect)((()=>(n&&document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)})),[l,n])})("Enter",e,t)},I=JSON.stringify({A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[],X:[],Y:[],Z:[],"#":[]});var U=e=>{var t,n;let{data:c}=e;const{0:p,1:m}=(0,a.useState)(""),{0:g,1:u}=(0,a.useState)(""),U=a.useMemo((()=>c.allMdx.edges.map((e=>(0,i.oO)(e.node)))),[]),A=(0,r.a)(g.trim(),null===(t=c.localSearchTerms)||void 0===t?void 0:t.index,null===(n=c.localSearchTerms)||void 0===n?void 0:n.store),B=g?A:U,L=()=>{const e={...JSON.parse(I)};return B.forEach((t=>{const n=t.title[0].toUpperCase();var a;e[n]?null===(a=e[n])||void 0===a||a.push(t):e["#"].push(t)})),e},{0:G,1:M}=(0,a.useState)(L());(0,a.useEffect)((()=>{M(L())}),[B]);const P=()=>{u(p)};return O(P),(0,a.useEffect)((()=>{p||u("")}),[p]),a.createElement(a.Fragment,null,a.createElement(s.U4,{pageTitle:"Glossary | Telgorithm",title:"A2P Text Messaging Terms & Glossary of Definitions | Telgorithm",description:"Browse through our glossary for definitions to common terms in the A2P text messaging space."}),a.createElement(s.MQ,{url:"https://www.telgorithm.com/glossary/"}),a.createElement(s.Kb,{canonicalUrl:"https://www.telgorithm.com/glossary/"}),a.createElement(l.Z,{disabledContainer:!0},a.createElement(h,null,a.createElement(y,null,a.createElement(f,null,a.createElement(d.xv.Title.Bold.xl,null,"Telgorithm’s Glossary"),a.createElement(d.xv.Regular.Bold.lg,null,"Browse through our glossary for definitions to common terms in the A2P text messaging space.")),a.createElement(E,null,a.createElement(x,null,a.createElement(N.Z,null)),a.createElement(k.o,{value:p,onChange:e=>m(e.currentTarget.value)}),a.createElement(v,{onClick:P},a.createElement(d.xv.Regular.Normal.xs,null,"Search"))))),a.createElement(y,null,a.createElement(w,null,Object.keys(G).map((e=>G[e].length>0?a.createElement(o.Link,{to:"#terms_"+e,key:e},a.createElement(d.xv.Title.Bold.md,{key:e},e)):a.createElement(d.xv.Title.Bold.md,{key:e},e)))),B.length?a.createElement(C,null,Object.keys(G).filter((e=>G[e].length)).map((e=>a.createElement(b,{key:e,id:"terms_"+e},a.createElement(_,null,a.createElement(d.xv.Title.Bold.md,null,e)),a.createElement(T,{termsAmount:G[e].length},G[e].map((e=>a.createElement(o.Link,{to:e.url,key:e.id},a.createElement(d.xv.Regular.Normal.md,null,e.title))))))))):a.createElement(S.Ai,null,'No results for "',g,'"'))))};const A={title:"Telgorithm’s Glossary",metaTitle:"Terms",excerpt:"Stay up to date on the latest news in A2P SMS and 10DLC and learn what it takes to provide the next level of business messaging experiences for your customers.",slug:"/glossary/"}}}]);
//# sourceMappingURL=component---src-pages-glossary-tsx-58ee9c1c5640c2808947.js.map