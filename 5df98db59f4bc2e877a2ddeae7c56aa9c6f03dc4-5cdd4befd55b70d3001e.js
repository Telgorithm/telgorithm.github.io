(self.webpackChunklanding=self.webpackChunklanding||[]).push([[4362,5703],{91309:function(e,t,i){"use strict";i.d(t,{K:function(){return c},j:function(){return p}});var n=i(11883),r=i(67294),o=i(29160),a=i(55239),l=i(53357),d=i(21520),s=i(4722);const c=e=>{let{articleType:t,date:i,lastUpdatedOn:l}=e;return r.createElement(s.Lx,null,r.createElement(s.$s,null,r.createElement(n.Link,{to:o.H.LatestNews},"Return to Latest News")),r.createElement(a.iz,null),r.createElement(s.lh,null,r.createElement("p",null,t),l&&r.createElement("p",null,"Updated:"," "+(e=>{const t=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),i=new Date(e),n=i.toDateString().split(" ");return t[i.getMonth()]+" "+n[2]+", "+n[3]})(l)),r.createElement("p",null,"Published:"," "+i)))},p=e=>{let{latestNews:t}=e;return r.createElement(s.Di,null,r.createElement(a.iz,null),r.createElement(a.xv.Title.Bold.md,null,"Latest news"),r.createElement(s.d2,null,t.slice(0,3).map((e=>r.createElement(l.ZP,{article:e,key:e.articleId,cardSize:l.Id.S})))),r.createElement("div",null,r.createElement(d.Z,{address:o.H.LatestNews,arrow:!0},"Browse all articles")),r.createElement(a.iz,null))}},4722:function(e,t,i){"use strict";i.d(t,{$s:function(){return d},Di:function(){return p},Lx:function(){return l},NA:function(){return c},d2:function(){return m},lh:function(){return s},q1:function(){return u}});var n=i(540),r=i(78198),o=i(87965),a=i(24051);const l=n.default.div.withConfig({displayName:"styled__StyledArticleHeader",componentId:"sc-1725lim-0"})(['display:flex;flex-direction:column;gap:25px;font-family:"Rubik";margin-bottom:25px;']),d=n.default.div.withConfig({displayName:"styled__ReturnLink",componentId:"sc-1725lim-1"})(["color:",";font-weight:500;font-size:0.8rem;line-height:1.3rem;transition:0.3s;@media ","{font-size:1rem;line-height:1.4rem;}&:hover{color:",";}"],r.O.primary.blue,o.U.laptop,r.O.secondary.orange),s=n.default.div.withConfig({displayName:"styled__ArticleMetaInformation",componentId:"sc-1725lim-2"})(["margin-top:5px;color:",";& > p:first-child{font-weight:600;font-size:0.6rem;line-height:0.7rem;text-transform:uppercase;@media ","{margin-top:10px;font-size:0.7rem;line-height:0.8rem;}}& > p{font-weight:400;font-size:0.7rem;line-height:0.8rem;@media ","{margin-top:10px;font-size:0.8rem;line-height:0.9rem;}}@media ","{margin-top:10px;}"],r.O.primary.gray500,o.U.laptop,o.U.laptop,o.U.laptop),c=n.default.div.withConfig({displayName:"styled__ArticleContentContainer",componentId:"sc-1725lim-3"})(["max-width:100%;@media ","{max-width:640px;margin:0 auto;}"],o.U.tablet),p=n.default.div.withConfig({displayName:"styled__StyledLatestNewsBlock",componentId:"sc-1725lim-4"})(["display:flex;flex-direction:column;gap:60px;margin-bottom:40px;@media ","{gap:40px;}"],o.U.laptop),m=n.default.div.withConfig({displayName:"styled__NewsItems",componentId:"sc-1725lim-5"})(["display:grid;grid-auto-rows:1fr;gap:20px;"]),u=n.default.main.withConfig({displayName:"styled__StyledArticleContent",componentId:"sc-1725lim-6"})(["margin-bottom:40px;font-weight:400;font-size:0.8rem;line-height:1.1rem;",";"],a.a0)},7716:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var n=i(67294);var r=i(540),o=i(78198);const a=r.default.h2.withConfig({displayName:"styled__StyledAnchorH2",componentId:"sc-1a770dx-0"})(["a{color:unset;&:hover{color:",";}}"],o.O.secondary.orange);var l=e=>{const t=(e=>{let t=e;for(;Boolean(null===(i=t)||void 0===i?void 0:i.props);){var i;t=t.props.children}return String(t)})(e.children),i=t.toLowerCase().replace(/[^a-z0-9 ]/g,"").replace(/[ ]/g,"-");const r="#"+i;return n.createElement(a,{id:i},n.createElement("a",{href:r},e.children))}},53357:function(e,t,i){"use strict";i.d(t,{Id:function(){return w},ZP:function(){return v}});var n=i(11883),r=i(67294),o=i(78198);var a=e=>{let{color:t}=e;return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"15",viewBox:"0 0 32 15",fill:"none"},r.createElement("path",{d:"M24.5053 15L22.6947 13.2303L27.1579 8.76404H0V6.23595H27.2L22.7368 1.76966L24.5053 0L32 7.5L24.5053 15Z",fill:t}))},l=i(540),d=i(87965);const s=l.default.div.withConfig({displayName:"styled__ArticleCardTitle",componentId:"sc-1ud4r6o-0"})(["font-weight:600;font-size:0.9rem;line-height:1.1rem;transition:0.3s;@media ","{font-size:1.6rem;line-height:1.9rem;}"],d.U.laptop),c=l.default.div.withConfig({displayName:"styled__StyledArticleCardItem",componentId:"sc-1ud4r6o-1"})(["background-color:",';border-radius:14px;font-family:"Rubik";display:flex;width:100%;height:auto;&:hover{',"{color:",";}}"],o.O.secondary.gray100,s,o.O.secondary.orange),p=l.default.div.withConfig({displayName:"styled__ArticleCardImage",componentId:"sc-1ud4r6o-2"})(["img{object-fit:cover;max-width:100%;max-height:100%;border-radius:14px 14px 0 0;}"]),m=l.default.div.withConfig({displayName:"styled__ArticleCardType",componentId:"sc-1ud4r6o-3"})(["font-weight:600;font-size:0.6rem;text-transform:uppercase;color:",";@media ","{font-size:0.7rem;}"],o.O.primary.gray500,d.U.laptop),u=(0,l.default)(n.Link).withConfig({displayName:"styled__ArticleCardBody",componentId:"sc-1ud4r6o-4"})(["display:flex;flex-direction:column;justify-content:space-between;padding:15px;height:100%;box-sizing:border-box;& > div:first-child{display:flex;flex-direction:column;gap:10px;}@media ","{padding:40px;width:50%;}"],d.U.laptop),f=l.default.div.withConfig({displayName:"styled__ArticleCardFooter",componentId:"sc-1ud4r6o-5"})(["font-size:0.7rem;color:",";font-weight:400;line-height:0.9rem;display:flex;justify-content:space-between;align-items:center;@media ","{font-size:0.8rem;line-height:1rem;}"],o.O.primary.gray500,d.U.laptop),g=(0,l.default)(c).withConfig({displayName:"styled__StyledArticleCardItemLarge",componentId:"sc-1ud4r6o-6"})(["flex-direction:row;justify-content:flex-start;gap:0;","{gap:80px;}","{width:50%;height:100%;object-fit:cover;div{width:100% !important;height:100% !important;}img{border-radius:14px 0 0 14px;}}"],u,p),h=(0,l.default)(c).withConfig({displayName:"styled__StyledArticleCardItemMedium",componentId:"sc-1ud4r6o-7"})(["flex-direction:column;justify-content:flex-start;gap:0;","{width:100%;object-fit:cover;min-height:220px;max-height:220px;div{width:100% !important;height:100% !important;}img{border-radius:14px 14px 0 0;}}","{width:100%;gap:25px;box-sizing:border-box;}@media ","{","{min-height:350px;max-height:350px;img{border-radius:14px 14px 0 0;}}}@media ","{","{min-height:250px;max-height:250px;img{border-radius:14px 14px 0 0;}}}","{@media ","{font-size:1.1rem;line-height:1.4rem;}}"],p,u,d.U.tablet,p,d.U.laptop,p,s,d.U.laptop),x=(0,l.default)(c).withConfig({displayName:"styled__StyledArticleCardItemSmall",componentId:"sc-1ud4r6o-8"})(["flex-direction:row;justify-content:flex-start;gap:0;","{gap:25px;}","{width:50%;object-fit:cover;div{width:100% !important;height:100% !important;}img{border-radius:14px 0 0 14px;}}","{width:70%;}","{@media ","{font-size:1.1rem;line-height:1.4rem;}}"],u,p,u,s,d.U.laptop);l.default.div.withConfig({displayName:"styled__ArticleCardImageContainer",componentId:"sc-1ud4r6o-9"})(["box-sizing:border-box;padding:15px;"]);var y=i(38032);let w=function(e){return e.S="S",e.M="M",e.L="L",e}({});const b=e=>{let{cardSize:t,children:i}=e;switch(t){case w.L:return r.createElement(g,null,i);case w.M:return r.createElement(h,null,i);case w.L:default:return r.createElement(x,null,i)}};var v=e=>{var t,i;let{article:l,cardSize:d}=e;const{date:c,title:g,url:h}=l,x=l,w=l;return r.createElement(b,{cardSize:d},x.previewImage?r.createElement(p,null,r.createElement(n.Link,{to:h},r.createElement(y.G,{image:null===(t=x.previewImage.childrenImageSharp)||void 0===t||null===(i=t[0])||void 0===i?void 0:i.gatsbyImageData,alt:x.title}))):w.previewStaticImage,r.createElement(u,{to:h},r.createElement("div",null,r.createElement(m,null,x.type),r.createElement(s,null,g)),r.createElement(f,null,r.createElement("div",null,c),r.createElement("div",null,r.createElement(a,{color:o.O.primary.blue})))))}},82645:function(e,t,i){"use strict";var n=i(67294);t.Z=e=>{let{color:t}=e;return n.createElement("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M18.5371 14.1121L13.2371 8.81213C13.1209 8.69497 12.9827 8.60198 12.8303 8.53852C12.678 8.47506 12.5146 8.44238 12.3496 8.44238C12.1846 8.44238 12.0212 8.47506 11.8689 8.53852C11.7166 8.60198 11.5783 8.69497 11.4621 8.81213C11.2293 9.04633 11.0986 9.36315 11.0986 9.69338C11.0986 10.0236 11.2293 10.3404 11.4621 10.5746L15.8871 14.9996L11.4621 19.4246C11.2293 19.6588 11.0986 19.9756 11.0986 20.3059C11.0986 20.6361 11.2293 20.9529 11.4621 21.1871C11.5789 21.303 11.7174 21.3946 11.8697 21.4568C12.022 21.5191 12.1851 21.5506 12.3496 21.5496C12.5141 21.5506 12.6772 21.5191 12.8295 21.4568C12.9818 21.3946 13.1203 21.303 13.2371 21.1871L18.5371 15.8871C18.6543 15.7709 18.7473 15.6327 18.8107 15.4804C18.8742 15.328 18.9069 15.1646 18.9069 14.9996C18.9069 14.8346 18.8742 14.6712 18.8107 14.5189C18.7473 14.3666 18.6543 14.2283 18.5371 14.1121Z",fill:t}))}},21520:function(e,t,i){"use strict";var n=i(67294),r=i(21025),o=i(82645),a=i(78198),l=i(14670),d=i.n(l);t.Z=e=>{let{address:t,arrow:i,children:l,external:s,color:c,inline:p}=e;return s?n.createElement(r.L,{href:t,target:"_blank",id:d().generate(),color:c,rel:"noreferrer",inline:p},l,i&&n.createElement(o.Z,{color:null!=c?c:a.O.primary.blue})):n.createElement(r.c,{to:t,color:c},l,i&&n.createElement(o.Z,{color:null!=c?c:a.O.primary.blue}))}},21025:function(e,t,i){"use strict";i.d(t,{L:function(){return l},c:function(){return d}});var n=i(11883),r=i(540),o=i(78198),a=i(87965);const l=r.default.a.withConfig({displayName:"styled__LinkElementExternal",componentId:"sc-zoiss5-0"})(["font-size:16px;font-family:'Rubik';font-weight:500;line-height:22px;color:",";display:",";align-items:center;@media ","{font-size:18px;line-height:26px;}transition:0.5s;&:hover{color:",";transition:0.5s;}"],(e=>{var t;return null!==(t=e.color)&&void 0!==t?t:o.O.primary.blue}),(e=>e.inline?"inline":"flex"),a.U.laptop,o.O.secondary.orange),d=(0,r.default)(n.Link).withConfig({displayName:"styled__LinkElementInternal",componentId:"sc-zoiss5-1"})(["font-family:'Rubik';font-weight:500;line-height:28px;color:",";display:flex;align-items:center;font-size:16px;line-height:22px;transition:0.5s;@media ","{font-size:18px;line-height:26px;}&:hover{color:",";transition:0.5s;}"],(e=>{var t;return null!==(t=e.color)&&void 0!==t?t:o.O.primary.blue}),a.U.laptop,o.O.secondary.orange)},60708:function(e,t,i){"use strict";i.d(t,{Z:function(){return b}});var n=i(67294),r=i(11883),o=i(29160);var a=()=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"96",height:"96",viewBox:"0 0 96 96",fill:"none"},n.createElement("path",{d:"M88.5 38.5L86.5 34L82 32L86.5 30L88.5 25.5L90.6 30L95 32L90.6 34L88.5 38.5ZM76 20.9L72.9 14.3L66.3 11.2L72.9 8.1L76 1.5L79.1 8.1L85.7 11.2L79.1 14.3L76 20.9ZM36 86.3C33.9333 86.3 32.1667 85.6 30.7 84.2C29.2333 82.8 28.4333 81.0667 28.3 79H43.7C43.5667 81.0667 42.7667 82.8 41.3 84.2C39.8333 85.6 38.0667 86.3 36 86.3ZM20.8 71.9V67.3H51.2V71.9H20.8ZM21.1 60.3C17.0333 57.5667 13.8333 54.2 11.5 50.2C9.16667 46.2 8 41.7333 8 36.8C8 29.1333 10.75 22.55 16.25 17.05C21.75 11.55 28.3333 8.8 36 8.8C43.6667 8.8 50.25 11.55 55.75 17.05C61.25 22.55 64 29.1333 64 36.8C64 41.7333 62.8333 46.2 60.5 50.2C58.1667 54.2 54.9667 57.5667 50.9 60.3H21.1ZM22.7 55.7H49.3C52.5 53.5667 55 50.8333 56.8 47.5C58.6 44.1667 59.5 40.6 59.5 36.8C59.5 30.3333 57.2 24.8 52.6 20.2C48 15.6 42.4667 13.3 36 13.3C29.5333 13.3 24 15.6 19.4 20.2C14.8 24.8 12.5 30.3333 12.5 36.8C12.5 40.6 13.4 44.1667 15.2 47.5C17 50.8333 19.5 53.5667 22.7 55.7Z",fill:"#F1D8B8"})),l=i(540),d=i(78198),s=i(87965),c=i(58657);const p=l.default.div.withConfig({displayName:"styled__StyledSubscribeBlock",componentId:"sc-wv4p6s-0"})(["background:linear-gradient( 128.41deg,rgba(255,255,255,0.2) 0%,rgba(0,0,0,0.2) 100% ),#f8f0e6;padding:30px;background-blend-mode:overlay,normal;border-radius:14px;@media ","{padding:60px;}"],s.U.laptop),m=l.default.div.withConfig({displayName:"styled__Header",componentId:"sc-wv4p6s-1"})(["display:flex;justify-content:space-between;align-items:center;"]),u=l.default.p.withConfig({displayName:"styled__Title",componentId:"sc-wv4p6s-2"})(["font-family:'Poppins';font-weight:600;font-size:1.1rem;line-height:1.4rem;@media ","{font-size:2rem;line-height:2.2rem;}"],s.U.laptop),f=l.default.div.withConfig({displayName:"styled__Icon",componentId:"sc-wv4p6s-3"})([""]),g=l.default.div.withConfig({displayName:"styled__SubscribeForm",componentId:"sc-wv4p6s-4"})(["form{display:flex;flex-direction:column;gap:10px;margin-top:25px;}input{border:1px solid #c3c5cd;outline:none;border-radius:8px;height:50px;box-sizing:border-box;padding:10px;font-size:0.8rem;&::placeholder{font-family:'Rubik';font-size:0.8rem;}}@media ","{flex-direction:row;input{width:75%;}}"],s.U.tablet),h=l.default.p.withConfig({displayName:"styled__Description",componentId:"sc-wv4p6s-5"})(["font-size:0.8rem;line-height:1.1rem;margin-top:10px;margin-bottom:30px;@media ","{font-size:0.9rem;line-height:1.3rem;width:80%;}"],s.U.laptop),x=l.default.p.withConfig({displayName:"styled__Notification",componentId:"sc-wv4p6s-6"})(["color:",";font-size:0.6rem;line-height:0.7rem;margin-bottom:15px;a{font-weight:600;}@media ","{width:80%;}"],d.O.primary.gray500,s.U.laptop);(0,l.default)(c.kq).withConfig({displayName:"styled__SubsribeButton",componentId:"sc-wv4p6s-7"})(["background:",";height:50px;@media ","{font-size:0.8rem;line-height:1rem;box-sizing:border-box;}"],d.O.primary.blue,s.U.laptop);var y=i(51768),w=i(1467);var b=e=>{let{title:t,description:i}=e;const l=(0,n.useContext)(y.I);return(0,n.useEffect)((()=>{var e;null===(e=window.hbspt)||void 0===e||e.forms.create({region:"na1",portalId:"21630623",formId:"9e11a6c7-d24f-4820-9508-06489e3b552b",target:"#contactUsSubsrcribeForm",onFormSubmit:function(){gtag_report_conversion()}})}),[l.hubSpot.isHubSpotFormsLoaded]),n.createElement(p,null,n.createElement(m,null,n.createElement(u,null,t),n.createElement(f,null,n.createElement(a,null))),n.createElement(h,null,i),n.createElement(x,null,"By clicking the submit button below, I hereby agree to and accept Telgorithm’s"," ",n.createElement(r.Link,{to:o.H.TermsAndConditions},"terms and conditions"),"."),n.createElement(g,{id:"contactUsSubsrcribeForm"},!l.hubSpot.isHubSpotFormsLoaded&&n.createElement(w.Z,{color:d.O.primary.lightOrange})))}},24051:function(e,t,i){"use strict";i.d(t,{$s:function(){return y},Ai:function(){return d},Ct:function(){return w},DY:function(){return v},EL:function(){return p},Lu:function(){return u},S$:function(){return b},T2:function(){return g},a0:function(){return l},fP:function(){return c},l6:function(){return h},mJ:function(){return C},rs:function(){return x},wD:function(){return m},yc:function(){return f},yj:function(){return s}});var n=i(540),r=i(78198),o=i(87965),a=i(28700);const l=(0,n.css)(["blockquote{padding:0 25px;box-sizing:border-box;position:relative;&::before{display:block;height:100%;width:5px;position:absolute;content:'';top:0;left:0;background-color:",";}}em{font-style:italic;}a{color:",";&:hover{color:",";}}ol{list-style:decimal;padding-left:10px;margin-bottom:15px;@media ","{padding-left:25px;}}ul{list-style:inside;padding-left:10px;margin-bottom:15px;@media ","{padding-left:25px;}}li{margin-top:10px;margin-bottom:10px;}strong{font-weight:600;}p{margin-bottom:15px;}h1,h2,h3,h4,h5{font-family:'Poppins';margin-bottom:15px;margin-top:15px;padding:10px 0;}h6{font-family:'Rubik';font-size:0.7rem;color:",";margin-top:10px;margin-bottom:10px;}h1{font-weight:600;font-size:1.1rem;line-height:1.4rem;margin-bottom:15px;}h2{font-size:0.9rem;line-height:1.2rem;}h3{font-size:0.7rem;line-height:1rem;}h4{font-size:0.6rem;line-height:0.8rem;}h5{font-size:0.5rem;line-height:0.7rem;}h6{font-size:0.6rem;text-align:center;}img{max-width:100%;}@media ","{font-size:0.9rem;line-height:1.3rem;h1{font-size:2rem;line-height:2.6rem;margin-bottom:15px;}h2{font-size:1.8rem;line-height:2.4rem;}h3{font-size:1.6rem;line-height:2.2rem;}h4{font-size:1.4rem;line-height:2rem;}h5{font-size:1.2rem;line-height:1.8rem;}h6{font-family:'Rubik';font-size:0.7rem;color:",";}}"],r.O.primary.gray500,r.O.primary.blue,r.O.secondary.orange,o.U.tablet,o.U.tablet,r.O.primary.gray500,o.U.laptop,r.O.primary.gray500),d=n.default.p.withConfig({displayName:"styled__NoResultsText",componentId:"sc-1mggb4a-0"})(["word-break:break-all;@media ","{min-height:300px;}"],o.U.laptop),s=n.default.div.withConfig({displayName:"styled__VideoContainer",componentId:"sc-1mggb4a-1"})(["width:300px;height:200px;display:flex;justify-content:center;align-items:center;iframe{width:80%;height:80%;}@media ","{iframe{width:100%;height:100%;}}@media ","{width:700px;height:400px;}"],o.U.tablet,o.U.laptop),c=n.default.div.withConfig({displayName:"styled__InlineBanner",componentId:"sc-1mggb4a-2"})(["display:flex;flex-direction:column;width:100%;justify-content:center;align-items:center;background:url(",");background-size:cover;color:",";font-family:'Poppins';box-sizing:border-box;border-radius:12px;gap:30px;padding:25px;line-height:1.5rem;@media ","{padding:40px 0;p{width:60%;}flex-direction:row;}"],a.Z,r.O.primary.white,o.U.tablet),p=n.default.div.withConfig({displayName:"styled__ArticleListContentContainer",componentId:"sc-1mggb4a-3"})(["@media ","{max-width:980px;margin:0 auto;}"],o.U.laptop),m=n.default.div.withConfig({displayName:"styled__ArticleList",componentId:"sc-1mggb4a-4"})(["display:flex;flex-direction:row;flex-wrap:wrap;gap:30px;"]),u=n.default.div.withConfig({displayName:"styled__MediumCards",componentId:"sc-1mggb4a-5"})(["width:100%;display:grid;grid-auto-rows:1fr;grid-template-columns:1fr;grid-template-rows:1fr;gap:30px;@media ","{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;}"],o.U.laptop),f=n.default.div.withConfig({displayName:"styled__SmallCards",componentId:"sc-1mggb4a-6"})(["display:grid;grid-auto-rows:1fr;gap:30px;width:100%;"]),g=n.default.div.withConfig({displayName:"styled__MobileCardsContainer",componentId:"sc-1mggb4a-7"})(["gap:30px;width:100%;display:flex;flex-direction:column;@media ","{display:none;}"],o.U.laptop),h=n.default.div.withConfig({displayName:"styled__DesktopCardsContainer",componentId:"sc-1mggb4a-8"})(["display:none;@media ","{display:flex;flex-direction:column;gap:30px;}"],o.U.laptop),x=n.default.div.withConfig({displayName:"styled__SmallCardWrapper",componentId:"sc-1mggb4a-9"})(["display:flex;"]),y=n.default.div.withConfig({displayName:"styled__ReturnLink",componentId:"sc-1mggb4a-10"})(["color:",";font-weight:500;font-size:0.8rem;line-height:1.3rem;transition:0.3s;padding:20px 0;@media ","{font-size:1rem;line-height:1.4rem;}&:hover{color:",";}"],r.O.primary.blue,o.U.laptop,r.O.secondary.orange),w=n.default.div.withConfig({displayName:"styled__Badge",componentId:"sc-1mggb4a-11"})(["border-radius:20px;background-color:rgba(40,42,59,0.15);font-size:14px;font-weight:500;font-family:'Rubik';color:",";padding:8px 12px;width:fit-content;align-self:",";@media ","{align-self:unset;}"],r.O.secondary.gray700,(e=>e.alignSelf||"center"),o.U.laptop),b=n.default.div.withConfig({displayName:"styled__SectionContainer",componentId:"sc-1mggb4a-12"})(["display:flex;justify-content:space-between;margin:50px 0;@media ","{margin:120px 0;}"],o.U.laptop),v=n.default.ul.withConfig({displayName:"styled__BulletList",componentId:"sc-1mggb4a-13"})(["list-style:none;display:flex;flex-direction:column;gap:10px;li{text-indent:30px;position:relative;&::before{content:'';display:block;width:5px;height:5px;position:absolute;left:15px;top:10px;border-radius:50%;background-color:",";}}"],r.O.primary.black),C=n.default.ol.withConfig({displayName:"styled__StyledOl",componentId:"sc-1mggb4a-14"})(["list-style:decimal;padding-left:25px;li::marker{color:",";font-size:16px;font-family:'Rubik';font-weight:",";line-height:22px;@media ","{font-size:18px;line-height:26px;}}"],r.O.primary.black,(e=>{var t;return null!==(t=e.fontWeight)&&void 0!==t?t:300}),o.U.laptop)},79833:function(e,t,i){"use strict";i.d(t,{bf:function(){return r},oO:function(){return o}});var n=i(29160);const r=e=>{var t,i,n,r,o,a,l,d,s,c,p,m,u;return{previewImage:null!==(t=null===(i=e.frontmatter)||void 0===i?void 0:i.previewImage)&&void 0!==t?t:null,title:null!==(n=null===(r=e.frontmatter)||void 0===r?void 0:r.title)&&void 0!==n?n:"",date:null!==(o=null===(a=e.frontmatter)||void 0===a?void 0:a.date)&&void 0!==o?o:"",articleId:e.id,type:null!==(l=null===(d=e.frontmatter)||void 0===d?void 0:d.articleType)&&void 0!==l?l:"",url:null!==(s=e.fields)&&void 0!==s&&s.slug?"/news/"+e.fields.slug:"",sortByUpdatedDate:null!==(c=null===(p=e.frontmatter)||void 0===p?void 0:p.sortByUpdatedDate)&&void 0!==c&&c,lastUpdatedOn:null!==(m=null===(u=e.frontmatter)||void 0===u?void 0:u.lastUpdatedOn)&&void 0!==m?m:""}},o=e=>{var t,i,r;return{title:null===(t=e.frontmatter)||void 0===t?void 0:t.title,url:null!=e&&null!==(i=e.fields)&&void 0!==i&&i.slug?""+n.H.Glossary+(null===(r=e.fields)||void 0===r?void 0:r.slug):"",id:e.id}}},14670:function(e,t,i){"use strict";e.exports=i(95607)},79829:function(e,t,i){"use strict";var n,r,o,a=i(48946),l="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function d(){o=!1}function s(e){if(e){if(e!==n){if(e.length!==l.length)throw new Error("Custom alphabet for shortid must be "+l.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,i){return t!==i.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+l.length+" unique characters. These characters were not unique: "+t.join(", "));n=e,d()}}else n!==l&&(n=l,d())}function c(){return o||(o=function(){n||s(l);for(var e,t=n.split(""),i=[],r=a.nextValue();t.length>0;)r=a.nextValue(),e=Math.floor(r*t.length),i.push(t.splice(e,1)[0]);return i.join("")}())}e.exports={get:function(){return n||l},characters:function(e){return s(e),n},seed:function(e){a.seed(e),r!==e&&(d(),r=e)},lookup:function(e){return c()[e]},shuffled:c}},90480:function(e,t,i){"use strict";var n,r,o=i(98416);i(79829);e.exports=function(e){var t="",i=Math.floor(.001*(Date.now()-1567752802062));return i===r?n++:(n=0,r=i),t+=o(7),t+=o(e),n>0&&(t+=o(n)),t+=o(i)}},98416:function(e,t,i){"use strict";var n=i(79829),r=i(13766),o=i(50296);e.exports=function(e){for(var t,i=0,a="";!t;)a+=o(r,n.get(),1),t=e<Math.pow(16,i+1),i++;return a}},95607:function(e,t,i){"use strict";var n=i(79829),r=i(90480),o=i(41082),a=i(15636)||0;function l(){return r(a)}e.exports=l,e.exports.generate=l,e.exports.seed=function(t){return n.seed(t),e.exports},e.exports.worker=function(t){return a=t,e.exports},e.exports.characters=function(e){return void 0!==e&&n.characters(e),n.shuffled()},e.exports.isValid=o},41082:function(e,t,i){"use strict";var n=i(79829);e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6)&&!new RegExp("[^"+n.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},13766:function(e){"use strict";var t,i="object"==typeof window&&(window.crypto||window.msCrypto);t=i&&i.getRandomValues?function(e){return i.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],i=0;i<e;i++)t.push(Math.floor(256*Math.random()));return t},e.exports=t},48946:function(e){"use strict";var t=1;e.exports={nextValue:function(){return(t=(9301*t+49297)%233280)/233280},seed:function(e){t=e}}},15636:function(e){"use strict";e.exports=0},50296:function(e){e.exports=function(e,t,i){for(var n=(2<<Math.log(t.length-1)/Math.LN2)-1,r=-~(1.6*n*i/t.length),o="";;)for(var a=e(r),l=r;l--;)if((o+=t[a[l]&n]||"").length===+i)return o}},28700:function(e,t,i){"use strict";t.Z=i.p+"static/BannerBackground-daaccb1a1fa897d29da224d9a9cad8e6.webp"},11151:function(e,t,i){"use strict";i.d(t,{Zo:function(){return l},ah:function(){return o}});var n=i(67294);const r=n.createContext({});function o(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function l({components:e,children:t,disableParentContext:i}){let l;return l=i?"function"==typeof e?e({}):e||a:o(e),n.createElement(r.Provider,{value:l},t)}}}]);
//# sourceMappingURL=5df98db59f4bc2e877a2ddeae7c56aa9c6f03dc4-5cdd4befd55b70d3001e.js.map