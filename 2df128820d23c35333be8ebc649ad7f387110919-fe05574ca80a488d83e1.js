"use strict";(self.webpackChunklanding=self.webpackChunklanding||[]).push([[1511],{66099:function(e,n,t){t.d(n,{TS:function(){return M},V3:function(){return f},XC:function(){return C}});var r=t(67294),a=t(49976),i=t(55239),o=t(60092),s=t.p+"static/AtAndT-ed27e2a14ce532f60de2992235e45aea.png",l=t.p+"static/TMobile-8af6a91678594654f58081459fdc8906.png",c=t.p+"static/Verizon-16a955737fbdc580fbb7fc1aeb835139.png",m=t.p+"static/CampaignRegistry-9a6443feedcb4768dfa53bc0793ecf04.png",p=t.p+"static/USCellularLogo-4a37ae302950c28cd3ad2a749e2b46e1.png",d=t(14670),u=t.n(d),g=t(21520);const b={"AT&T":s,"T-Mobile":l,Verizon:c,"U.S. Cellular":p,TCR:m},C=e=>{const n=Object.keys(e.items[0]);return r.createElement(i.iA.Container,null,r.createElement(i.iA.Wrapper,null,r.createElement(i.iA,null,r.createElement(i.iA.Header,null,r.createElement(i.iA.Row,null,n.map((e=>r.createElement(i.iA.HeaderCell,{key:u().generate()},e))))),r.createElement(i.iA.Body,null,e.items.map((n=>r.createElement(i.iA.Row,{key:u().generate()},Object.values(n).map(((n,t)=>r.createElement(i.iA.BodyCell,{key:u().generate()},e.link&&0===t?r.createElement(g.Z,{address:e.link},n):n))))))))))},f=e=>{let{carrierFees:n}=e;return r.createElement(o.Pr,null,b[n.companyName]&&r.createElement(o.Dc,null,r.createElement("img",{src:b[n.companyName],alt:n.companyName})),n.description&&r.createElement(o.dY,null,r.createElement(i.xv.Regular.Normal.md,null,n.description)),n.tables.map((e=>r.createElement(o.Z2,{key:u().generate()},r.createElement(i.xv.Title.Bold.md,null,e.title),C(e)))),r.createElement(o.rs,null,null==n?void 0:n.footNotes.map((e=>r.createElement("p",{key:u().generate()},e)))))},F=e=>r.createElement(o.Q,{isActive:e.isActive,onClick:e.onClick},e.title),M=e=>{let{activeTab:n,setActiveTab:t}=e;return r.createElement(o.JR,null,r.createElement(F,{title:"AT&T",isActive:n===a.CarrierFeesTabsNames.AtAndT,onClick:()=>t(a.CarrierFeesTabsNames.AtAndT)}),r.createElement(F,{title:"T-Mobile",isActive:n===a.CarrierFeesTabsNames.TMobile,onClick:()=>t(a.CarrierFeesTabsNames.TMobile)}),r.createElement(F,{title:"Verizon",isActive:n===a.CarrierFeesTabsNames.Verizon,onClick:()=>t(a.CarrierFeesTabsNames.Verizon)}),r.createElement(F,{title:"U.S. Cellular",isActive:n===a.CarrierFeesTabsNames.USCellular,onClick:()=>t(a.CarrierFeesTabsNames.USCellular)}),r.createElement(F,{title:"TCR",isActive:n===a.CarrierFeesTabsNames.TCR,onClick:()=>t(a.CarrierFeesTabsNames.TCR)}),r.createElement(F,{title:"Other",isActive:n===a.CarrierFeesTabsNames.Other,onClick:()=>t(a.CarrierFeesTabsNames.Other)}))}},60092:function(e,n,t){t.d(n,{dY:function(){return M},uO:function(){return f},HW:function(){return p},qG:function(){return c},rs:function(){return F},Q5:function(){return l},EY:function(){return m},Z2:function(){return y},Pr:function(){return b},mS:function(){return g},Dc:function(){return C},Q:function(){return d},JR:function(){return u}});var r=t(540),a=t(78198),i=t.p+"static/background-a4717e784a621976acd24f06b98544f9.png",o=t(87965),s=t(40458);const l=r.default.div.withConfig({displayName:"styled__CarrierFeesHeader",componentId:"sc-1ybjb0m-0"})(["@media ","{background-color:",";border-radius:8px;}margin-bottom:50px;@media ","{margin-bottom:80px;}"],o.U.tablet,a.O.secondary.gray100,o.U.tablet),c=r.default.div.withConfig({displayName:"styled__CarrierFeesDescriptionWrapper",componentId:"sc-1ybjb0m-1"})(["background-size:cover;border-radius:8px;@media ","{background-image:url(",");background-size:cover;background-position:60%;height:350px;}@media ","{height:400px;}"],o.U.tablet,i,o.U.laptop),m=r.default.div.withConfig({displayName:"styled__CarrierFeesImage",componentId:"sc-1ybjb0m-2"})(["@media ","{display:none;}"],o.U.tablet),p=r.default.div.withConfig({displayName:"styled__CarrierFeesDescription",componentId:"sc-1ybjb0m-3"})(["width:100%;box-sizing:border-box;display:flex;flex-direction:column;gap:15px;@media ","{width:60%;padding:40px 40px;}@media ","{padding:50px 100px;}"],o.U.tablet,o.U.desktop),d=r.default.div.withConfig({displayName:"styled__StyledCarrierFeesTabItem",componentId:"sc-1ybjb0m-4"})(["position:relative;width:20%;text-align:center;padding:15px 10px;cursor:pointer;transition:0.5s;&:hover{color:",";transition:0.5s;}",""],a.O.primary.black,(e=>{if(e.isActive)return(0,r.css)(["background-color:",";border-radius:12px;box-shadow:0px 0px 0px 1px rgba(0,0,0,0.05),0px 6px 16px rgba(0,0,0,0.1);color:",";&::after{opacity:0;transition:0.5s;}"],a.O.primary.white,a.O.primary.black)})),u=r.default.div.withConfig({displayName:"styled__StyledCarrierFeesTabs",componentId:"sc-1ybjb0m-5"})(["justify-content:space-between;font-weight:600;font-size:0.65rem;line-height:1.1rem;color:",";padding:20px;width:100%;box-sizing:border-box;display:none;",':not(:last-child)::after{content:"";display:block;height:28px;width:2px;background-color:',";left:100%;top:13px;position:absolute;transition:0.5s;}@media ","{font-size:0.85rem;}@media ","{display:flex;}"],a.O.primary.gray500,d,a.O.secondary.gray300+a.C[.5],o.U.laptop,o.U.tablet),g=r.default.div.withConfig({displayName:"styled__CarrierFeesTabsDropdown",componentId:"sc-1ybjb0m-6"})(["margin-top:30px;@media ","{display:none;}"],o.U.tablet),b=r.default.div.withConfig({displayName:"styled__CarrierFeesTables",componentId:"sc-1ybjb0m-7"})(["","{margin-bottom:40px;margin-top:25px;","{margin-bottom:60px;}}"],s.xJ,o.U.tablet),C=r.default.div.withConfig({displayName:"styled__CompanyLogo",componentId:"sc-1ybjb0m-8"})(["img{max-height:50px;}margin-bottom:50px;"]),f=r.default.div.withConfig({displayName:"styled__CarrierFeesContainer",componentId:"sc-1ybjb0m-9"})(["@media ","{padding:0 100px;}"],o.U.laptop),F=r.default.div.withConfig({displayName:"styled__CarrierFeesFootNotes",componentId:"sc-1ybjb0m-10"})(["color:",";font-size:0.6rem;line-height:0.9rem;margin-top:50px;display:flex;flex-direction:column;gap:10px;@media ","{margin-top:80px;font-size:0.7rem;}"],a.O.primary.gray500,o.U.laptop),M=r.default.div.withConfig({displayName:"styled__CarrierFeeTablesDescription",componentId:"sc-1ybjb0m-11"})(["margin-bottom:25px;"]),y=r.default.div.withConfig({displayName:"styled__CarrierFeesTable",componentId:"sc-1ybjb0m-12"})(["margin-bottom:20px;"])},49976:function(e,n,t){t.r(n),t.d(n,{CarrierFeesTabsNames:function(){return d},frontmatter:function(){return u}});var r=t(67294),a=t(55239),i=t(38032),o=t(66099),s=t(60092),l=t(83732),c=t(74455),m=t(46761),p=t(64071);let d=function(e){return e.AtAndT="AT&T",e.TMobile="T-Mobile",e.Verizon="Verizon",e.USCellular="U.S. Cellular",e.TCR="TCR",e.Other="Other",e}({});n.default=()=>{var e;const n=JSON.parse(m.T),u=n.find((e=>"AT&T"===e.companyName)),g=n.find((e=>"T-Mobile"===e.companyName)),b=n.find((e=>"Verizon"===e.companyName)),C=n.find((e=>"U.S. Cellular"===e.companyName)),f=n.find((e=>"TCR"===e.companyName)),F=n.find((e=>"Other"===e.companyName)),[M,y]=r.useState(d.AtAndT),h={[d.AtAndT]:u,[d.TMobile]:g,[d.Verizon]:b,[d.USCellular]:C,[d.TCR]:f,[d.Other]:F},S=(new Date).toLocaleDateString("en-US",{month:"long",year:"numeric"});return r.createElement(r.Fragment,null,r.createElement(p.U4,{pageTitle:"Carrier Fees | Telgorithm",title:"Carrier Pass Through-Fees | June 2024",description:"Carrier & Other Pass-Through Fees."}),r.createElement(p.MQ,{url:"https://www.telgorithm.com/carrier-fees/"}),r.createElement(p.Kb,{canonicalUrl:"https://www.telgorithm.com/carrier-fees/"}),r.createElement(a.Ar,{disabledContainer:!0},r.createElement(s.EY,null,r.createElement(i.S,{src:"../images/CarrierFees/mobileBackground.png",alt:"Carrier Fees",objectFit:"contain",__imageData:t(82105)})),r.createElement(l.O,null,r.createElement(s.Q5,null,r.createElement(s.qG,null,r.createElement(s.HW,null,r.createElement(a.xv.Title.Bold.xl,null,"Carrier & Other Pass-Through Fees"),r.createElement(a.xv.Regular.Normal.md,null,"Carrier pass-through fees are subject to change. The tables shown below are as of"," ",r.createElement(a.xv.Regular.Bold.md,null,S)," and are shown for informational purposes only. Carrier pass-through fees will be collected by Telgorithm and remitted to mobile network operators on behalf of its Customers through the monthly Fees invoice process."))),r.createElement(o.TS,{activeTab:M,setActiveTab:y}),r.createElement(s.mS,null,r.createElement(c.f,{value:M,onChange:e=>y(e.currentTarget.value)},r.createElement("option",{value:d.AtAndT},d.AtAndT),r.createElement("option",{value:d.TMobile},d.TMobile),r.createElement("option",{value:d.Verizon},d.Verizon),r.createElement("option",{value:d.USCellular},d.USCellular),r.createElement("option",{value:d.TCR},d.TCR),r.createElement("option",{value:d.Other},d.Other)))),r.createElement(s.uO,null,r.createElement(o.V3,{carrierFees:null!==(e=h[M])&&void 0!==e?e:{companyName:"",tables:[],footNotes:[]}})))))};const u={title:"Carrier & Other Pass-Through Fees",metaTitle:"Carrier pass-through fees will be collected by Telgorithm and remitted to mobile network operators on behalf of its Customers through the monthly Fees invoice process.",excerpt:"Verizon, AT&T, TMobile, USCellular, The Campaign Registry, TCR",slug:"/carrier-fees/"}},82105:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#a8d8f8","images":{"fallback":{"src":"/static/e03a96ccbd2de3745c1c4ee89e7e9fa0/8f9e8/mobileBackground.png","srcSet":"/static/e03a96ccbd2de3745c1c4ee89e7e9fa0/d265f/mobileBackground.png 195w,\\n/static/e03a96ccbd2de3745c1c4ee89e7e9fa0/669aa/mobileBackground.png 390w,\\n/static/e03a96ccbd2de3745c1c4ee89e7e9fa0/8f9e8/mobileBackground.png 780w","sizes":"(min-width: 780px) 780px, 100vw"},"sources":[{"srcSet":"/static/e03a96ccbd2de3745c1c4ee89e7e9fa0/41c33/mobileBackground.webp 195w,\\n/static/e03a96ccbd2de3745c1c4ee89e7e9fa0/19161/mobileBackground.webp 390w,\\n/static/e03a96ccbd2de3745c1c4ee89e7e9fa0/9e663/mobileBackground.webp 780w","type":"image/webp","sizes":"(min-width: 780px) 780px, 100vw"}]},"width":780,"height":480}')},46761:function(e){e.exports=JSON.parse('{"T":"[\\n    {\\n      \\"companyName\\": \\"AT&T\\",\\n      \\"tables\\": [\\n        {\\n          \\"title\\": \\"Standard Message Classes\\",\\n          \\"items\\": [\\n            {\\n              \\"Class\\": \\"A\\",\\n              \\"Description\\": \\"Russell 3000 Company - Single Use Case\\",\\n              \\"Text per Min\\": \\"4,500\\",\\n              \\"SMS Fee\\": \\"$0.0030\\",\\n              \\"MMS Fee\\": \\"$0.0050\\"\\n            },\\n            {\\n              \\"Class\\": \\"B\\",\\n              \\"Description\\": \\"Russell 3000 Company - Multiple Use Case\\",\\n              \\"Text per Min\\": \\"4,500\\",\\n              \\"SMS Fee\\": \\"$0.0030\\",\\n              \\"MMS Fee\\": \\"$0.0050\\"\\n            },\\n            {\\n              \\"Class\\": \\"C\\",\\n              \\"Description\\": \\"Large Business - Single Use Case\\",\\n              \\"Text per Min\\": \\"2,400\\",\\n              \\"SMS Fee\\": \\"$0.0030\\",\\n              \\"MMS Fee\\": \\"$0.0050\\"\\n            },\\n            {\\n              \\"Class\\": \\"D\\",\\n              \\"Description\\": \\"Large Business - Multiple Use Case\\",\\n              \\"Text per Min\\": \\"2,400\\",\\n              \\"SMS Fee\\": \\"$0.0030\\",\\n              \\"MMS Fee\\": \\"$0.0050\\"\\n            },\\n            {\\n              \\"Class\\": \\"E\\",\\n              \\"Description\\": \\"Medium Business - Single Use Case\\",\\n              \\"Text per Min\\": \\"240\\",\\n              \\"SMS Fee\\": \\"$0.0030\\",\\n              \\"MMS Fee\\": \\"$0.0050\\"\\n            },\\n            {\\n              \\"Class\\": \\"F\\",\\n              \\"Description\\": \\"Medium Business - Multiple Use Case\\",\\n              \\"Text per Min\\": \\"240\\",\\n              \\"SMS Fee\\": \\"$0.0030\\",\\n              \\"MMS Fee\\": \\"$0.0050\\"\\n            },\\n            {\\n              \\"Class\\": \\"T\\",\\n              \\"Description\\": \\"Small Business\\",\\n              \\"Text per Min\\": \\"75\\",\\n              \\"SMS Fee\\": \\"$0.0030\\",\\n              \\"MMS Fee\\": \\"$0.0050\\"\\n            },\\n            {\\n              \\"Class\\": \\"N ²\\",\\n              \\"Description\\": \\"Agents, Franchise, Local Branches\\",\\n              \\"Text per Min\\": \\"60\\",\\n              \\"SMS Fee\\": \\"$0.0030\\",\\n              \\"MMS Fee\\": \\"$0.0050\\"\\n            },\\n            {\\n              \\"Class\\": \\"W ¹ ²\\",\\n              \\"Description\\": \\"Sole Proprietor\\",\\n              \\"Text per Min\\": \\"15\\",\\n              \\"SMS Fee\\": \\"$0.0030\\",\\n              \\"MMS Fee\\": \\"$0.0050\\"\\n            }\\n          ]\\n        },\\n        {\\n          \\"title\\": \\"Special Message Classes\\",\\n          \\"items\\": [\\n            {\\n              \\"Class\\": \\"S ²\\",\\n              \\"Description\\": \\"Social Engagement\\",\\n              \\"Text per Min\\": \\"60,000\\",\\n              \\"SMS Fee\\": \\"$0.0030\\",\\n              \\"MMS Fee\\": \\"$0.0050\\"\\n            },\\n            {\\n              \\"Class\\": \\"K\\",\\n              \\"Description\\": \\"Election Campaigns\\",\\n              \\"Text per Min\\": \\"4,500\\",\\n              \\"SMS Fee\\": \\"$0.0030\\",\\n              \\"MMS Fee\\": \\"$0.0050\\"\\n            },\\n            {\\n              \\"Class\\": \\"X ²\\",\\n              \\"Description\\": \\"Emergency Services / Public Safety\\",\\n              \\"Text per Min\\": \\"\\",\\n              \\"SMS Fee\\": \\"N/A\\",\\n              \\"MMS Fee\\": \\"N/A\\"\\n            },\\n            {\\n              \\"Class\\": \\"P\\",\\n              \\"Description\\": \\"Charitable - Only Non-profit 501 (c)(3)\\",\\n              \\"Text per Min\\": \\"2,400\\",\\n              \\"SMS Fee\\": \\"N/A\\",\\n              \\"MMS Fee\\": \\"N/A\\"\\n            },\\n            {\\n              \\"Class\\": \\"Y ¹ ²\\",\\n              \\"Description\\": \\"K-12 Education\\",\\n              \\"Text per Min\\": \\"720\\",\\n              \\"SMS Fee\\": \\"N/A\\",\\n              \\"MMS Fee\\": \\"N/A\\"\\n            },\\n            {\\n              \\"Class\\": \\"G ¹ ²\\",\\n              \\"Description\\": \\"Proxy Numbers / Bridge Services / Anonymization\\",\\n              \\"Text per Min\\": \\"120\\",\\n              \\"SMS Fee\\": \\"$0.0030\\",\\n              \\"MMS Fee\\": \\"$0.0050\\"\\n            }\\n          ]\\n        },\\n        {\\n          \\"title\\": \\"No message class\\",\\n          \\"items\\": [\\n            {\\n              \\"Description\\": \\"Unregistered 10DLC Traffic ³\\",\\n              \\"Text per Min\\": \\"Default P2P throughput and subjected to SPAM filters\\",\\n              \\"SMS Fee\\": \\"$0.0100\\",\\n              \\"MMS Fee\\": \\"$0.0150\\"\\n            }\\n          ]\\n        }\\n      ],\\n      \\"footNotes\\": [\\n        \\"¹ TPM setting is on a per number basis.\\",\\n        \\"² Requires carrier approval and additional CSP responsibilities for Campaign Review and Content Screening.\\",\\n        \\"³ Not applicable from Canada to Canada traffic.\\"\\n      ]\\n    },\\n    {\\n      \\"companyName\\": \\"T-Mobile\\",\\n      \\"tables\\": [\\n        {\\n          \\"title\\": \\"\\",\\n          \\"items\\": [\\n            {\\n              \\"Product Category\\": \\"A2P 10DLC Inbound / Outbound\\",\\n              \\"Description\\": \\"Registered Messages\\",\\n              \\"SMS Carrier Fee\\": \\"$0.0030\\",\\n              \\"MMS Carrier Fee\\": \\"$0.0100\\"\\n            },\\n            {\\n              \\"Product Category\\": \\"A2P 10DLC Inbound / Outbound\\",\\n              \\"Description\\": \\"Unregistered Messages\\",\\n              \\"SMS Carrier Fee\\": \\"$0.0090\\",\\n              \\"MMS Carrier Fee\\": \\"$0.0180\\"\\n            }\\n          ]\\n        },\\n        {\\n          \\"title\\": \\"\\",\\n          \\"link\\": \\"/news/t-mobile\'s-non-use-fee-for-a2p-10dlc-campaigns/\\",\\n          \\"items\\": [\\n            {\\n              \\"Item\\": \\"A2P 10DLC Non-Use Fee\\",\\n              \\"Fee\\": \\"$250.00/Inoperable Campaign\\"\\n            }\\n          ]\\n        }\\n      ],\\n      \\"footNotes\\": []\\n    },\\n    {\\n      \\"companyName\\": \\"Verizon\\",\\n      \\"tables\\": [\\n        {\\n          \\"title\\": \\"\\",\\n          \\"items\\": [\\n            {\\n              \\"Message Category\\": \\"A2P 10DLC\\",\\n              \\"Description\\": \\"Inbound Messages\\",\\n              \\"SMS Carrier Fee\\": \\"Free\\",\\n              \\"MMS Carrier Fee\\": \\"Free\\"\\n            },\\n            {\\n              \\"Message Category\\": \\"A2P 10DLC Outbound\\",\\n              \\"Description\\": \\"Registered Messages\\",\\n              \\"SMS Carrier Fee\\": \\"$0.00305\\",\\n              \\"MMS Carrier Fee\\": \\"$0.0052\\"\\n            },\\n            {\\n              \\"Message Category\\": \\"A2P 10DLC Outbound\\",\\n              \\"Description\\": \\"Unregistered Messages\\",\\n              \\"SMS Carrier Fee\\": \\"$0.01005\\",\\n              \\"MMS Carrier Fee\\": \\"$0.0052\\"\\n            }\\n          ]\\n        }\\n      ],\\n      \\"footNotes\\": []\\n    },\\n    {\\n      \\"companyName\\": \\"U.S. Cellular\\",\\n      \\"tables\\": [\\n        {\\n          \\"title\\": \\"\\",\\n          \\"items\\": [\\n            {\\n              \\"Message Category\\": \\"A2P 10DLC\\",\\n              \\"Description\\": \\"Inbound Messages\\",\\n              \\"SMS Carrier Fee\\": \\"Free\\",\\n              \\"MMS Carrier Fee\\": \\"Free\\"\\n            },\\n            {\\n              \\"Message Category\\": \\"A2P 10DLC\\",\\n              \\"Description\\": \\"Outbound Messages\\",\\n              \\"SMS Carrier Fee\\": \\"$0.0050\\",\\n              \\"MMS Carrier Fee\\": \\"$0.0100\\"\\n            }\\n          ]\\n        }\\n      ],\\n      \\"footNotes\\": []\\n    },\\n    {\\n      \\"companyName\\": \\"TCR\\",\\n      \\"description\\": \\"Fee schedule below will be invoiced by The Campaign Registry. Fees shown below are for informational purposes only.\\",\\n      \\"tables\\": [\\n        {\\n          \\"title\\": \\"\\",\\n          \\"items\\": [\\n            {\\n              \\"Item\\": \\"CSP Sign Up Fee\\",\\n              \\"Fee\\": \\"$200.00\\",\\n              \\"Fee Occurrence\\": \\"One time\\"\\n            },\\n            {\\n              \\"Item\\": \\"Low Volume Mixed\\",\\n              \\"Fee\\": \\"$1.50\\",\\n              \\"Fee Occurrence\\": \\"Monthly for each campaign\\"\\n            },\\n            {\\n              \\"Item\\": \\"Charity\\",\\n              \\"Fee\\": \\"$3.00\\",\\n              \\"Fee Occurrence\\": \\"Monthly for each campaign\\"\\n            },\\n            {\\n              \\"Item\\": \\"Emergency\\",\\n              \\"Fee\\": \\"$5.00\\",\\n              \\"Fee Occurrence\\": \\"Monthly for each campaign\\"\\n            },\\n            {\\n              \\"Item\\": \\"Sole Proprietor\\",\\n              \\"Fee\\": \\"$2.00\\",\\n              \\"Fee Occurrence\\": \\"Monthly for each campaign\\"\\n            },\\n            {\\n              \\"Item\\": \\"Agents & Franchises\\",\\n              \\"Fee\\": \\"$30.00\\",\\n              \\"Fee Occurrence\\": \\"Monthly for each campaign\\"\\n            },\\n            {\\n              \\"Item\\": \\"All Other Campaigns (Standard and Special)\\",\\n              \\"Fee\\": \\"$10.00\\",\\n              \\"Fee Occurrence\\": \\"Monthly for each campaign\\"\\n            },\\n            {\\n              \\"Item\\": \\"Brand Registration\\",\\n              \\"Fee\\": \\"$4.00\\",\\n              \\"Fee Occurrence\\": \\"One time per brand\\"\\n            },\\n            {\\n              \\"Item\\": \\"Standard Vetting\\",\\n              \\"Fee\\": \\"$40.00\\",\\n              \\"Fee Occurrence\\": \\"One time per vetting\\"\\n            },\\n            {\\n              \\"Item\\": \\"Political Vetting - Email or standard PIN delivery\\",\\n              \\"Fee\\": \\"$64.00\\",\\n              \\"Fee Occurrence\\": \\"One time per vetting\\"\\n            },\\n            {\\n              \\"Item\\": \\"Political Vetting - Express mail PIN delivery\\",\\n              \\"Fee\\": \\"$91.95\\",\\n              \\"Fee Occurrence\\": \\"One time per vetting\\"\\n            },\\n            {\\n              \\"Item\\": \\"Failed Standard Vet Appeal\\",\\n              \\"Fee\\": \\"$5.00\\",\\n              \\"Fee Occurrence\\": \\"Per appeal\\"\\n            },\\n            {\\n              \\"Item\\": \\"Failed Political Vet Appeal\\",\\n              \\"Fee\\": \\"$22.00\\",\\n              \\"Fee Occurrence\\": \\"Per appeal\\"\\n            }\\n          ]\\n        }\\n      ],\\n      \\"footNotes\\": []\\n    },\\n    {\\n      \\"companyName\\": \\"Other\\",\\n      \\"description\\": \\"\\",\\n      \\"tables\\": [\\n        {\\n          \\"title\\": \\"Other Pass-Through\\",\\n          \\"items\\": [\\n            {\\n              \\"Item\\": \\"A2P 10DLC DCA Vetting Fee\\",\\n              \\"Fee\\": \\"$15.00\\",\\n              \\"Fee Occurrence\\": \\"One time per TCR campaign\\"\\n            }\\n          ]\\n        }\\n      ],\\n      \\"footNotes\\": []\\n    }\\n]\\n"}')}}]);
//# sourceMappingURL=2df128820d23c35333be8ebc649ad7f387110919-fe05574ca80a488d83e1.js.map