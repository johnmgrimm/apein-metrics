(this["webpackJsonpapein-metrics"]=this["webpackJsonpapein-metrics"]||[]).push([[0],{102:function(e,a,t){},210:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),r=t(72),d=t.n(r),i=(t(80),t(81),t(82),t(2)),s=t.n(i),l=t(3),o=t(5),b=t(212),f=t.p+"static/media/logo.aafef0f8.svg",h="0x938fe3788222a74924e062120e7bfac829c719fb",p="0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698",j="ckey_f1fbf169cdc04b9dbb6ceea07af",u="0x09b9905a472aa1d387c9c1d8d956aff5463837e8",m="0x5033973ea65c66a8745acdb4f8ecb326365de2be",x="0xcdece16fb4ef3c171e163b7c72023fff4d3e2bd9",v=t(27),g=t.n(v);function O(e,a){return k.apply(this,arguments)}function k(){return(k=Object(l.a)(s.a.mark((function e(a,t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.a.post(a,{query:t},{headers:{"Content-Type":"application/json"}}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w='\nquery {\n  token(id: "'.concat(h,'") {\n    id\n    symbol\n    name\n    totalSupply\n    tokenDayData {\n      date\n      priceUSD\n    }\n  }\n}'),N='\nquery {\n  token(id: "'.concat(h,'") {\n    id\n    symbol\n    name\n    totalSupply\n    tokenDayData {\n      date\n      priceUSD\n    }\n  }\n}\n'),y='\nquery {\n  token(id: "'.concat(h,'") {\n    id\n    symbol\n    name\n    totalSupply\n    dayData {\n      date\n      priceUSD\n    }\n  }\n}');function _(){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(s.a.mark((function e(){var a,t,c,n,r,d,i,l,b,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([O("https://api.thegraph.com/subgraphs/name/dasconnor/pangolin-dex",w),O("https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange",y),O("https://api.thegraph.com/subgraphs/name/dynamic-amm/dmm-exchange-avax",N)]);case 2:return a=e.sent,t=Object(o.a)(a,3),c=t[0],n=t[1],r=t[2],d=c.data.data.token.tokenDayData.map((function(e){return{date:e.date,priceUSD:parseFloat(e.priceUSD)}})),i=n.data.data.token.dayData.map((function(e){return{date:e.date,priceUSD:parseFloat(e.priceUSD)}})),l=r.data.data.token.tokenDayData.map((function(e){return{date:e.date,priceUSD:parseFloat(e.priceUSD)}})),b=(parseFloat(d[d.length-1].priceUSD)+parseFloat(i[i.length-1].priceUSD)+parseFloat(l[l.length-1].priceUSD))/3,37500,0,f=37500*b,e.abrupt("return",{price:b,supply:37500,marketCap:f,burned:0,priceHistory:d});case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return U.apply(this,arguments)}function U(){return(U=Object(l.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g.a.get(a));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A='\nquery {\n  token(id: "'.concat(p,'") {\n    id\n    symbol\n    name\n    totalSupply\n    dayData {\n      date\n      priceUSD\n    }\n  }\n}');function C(){return F.apply(this,arguments)}function F(){return(F=Object(l.a)(s.a.mark((function e(){var a,t,c,n,r,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=".concat(p));case 2:return a=e.sent,e.next=5,O("https://api.thegraph.com/subgraphs/name/sushiswap/exchange",A);case 5:return t=e.sent,c=t.data.data.token.dayData.map((function(e){return{date:e.date,priceUSD:parseFloat(e.priceUSD)}})),n=c[c.length-1].priceUSD,r=parseInt(a.data.result)/1e18,30200,d=r*n,e.abrupt("return",{price:n,supply:r,marketCap:d,burned:30200,priceHistory:c});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return E.apply(this,arguments)}function E(){return(E=Object(l.a)(s.a.mark((function e(){var a,t,c,n,r,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([D("https://api.covalenthq.com/v1/1/tokens/".concat(u,"/nft_token_ids/?&key=").concat(j,"&page-size=10")),D("https://api.covalenthq.com/v1/1/tokens/".concat(m,"/nft_token_ids/?&key=").concat(j,"&page-size=10")),D("https://api.covalenthq.com/v1/1/tokens/".concat(x,"/nft_token_ids/?&key=").concat(j,"&page-size=10"))]);case 2:return a=e.sent,t=Object(o.a)(a,3),c=t[0],n=t[1],r=t[2],d={ape_1:parseInt(c.data.data.pagination.total_count),ape_2:parseInt(n.data.data.pagination.total_count),ape_o:parseInt(r.data.data.pagination.total_count)},e.abrupt("return",d);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t(102);var P=t(75),q=t(0);function L(e){var a=e.avaData,t=e.ethData;return Object(q.jsx)(P.a,{style:{height:"346px"},data:{labels:a?a.map((function(e,a){return a%2?(t=e.date,new Date(1e3*t).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"2-digit"})):"";var t})):[],datasets:[{label:"Avalanche",data:a?a.map((function(e){return e.priceUSD})):[],borderColor:"rgb(232, 65, 66)",backgroundColor:"rgba(232, 65, 66, 0.5)"},{label:"Ethereum",data:t?t.map((function(e){return e.priceUSD})):[],borderColor:"rgb(28, 28, 225)",backgroundColor:"rgba(28, 28, 225, 0.5)"}]},options:{scales:{y:{beginAtZero:!0}}}})}function z(e){var a=e.chain,t=e.data,c=e.loading;return Object(q.jsxs)("div",{className:"w-layout-grid grid-13",children:[Object(q.jsx)("h4",{id:"w-node-_8f0eaf22-a83d-f6fc-a7e8-620735c64873-68d99d19",className:"metric-subheading",children:a}),Object(q.jsxs)("div",{className:"w-layout-grid grid---5-up",children:[Object(q.jsxs)("div",{id:"w-node-_4453e7ca-408d-1980-9e95-24a861d3705c-61d3705c",className:"metric-block",children:[Object(q.jsx)("div",{className:"metric",children:Object(q.jsxs)("a",{href:"https://www.coingecko.com/en/coins/ape-in",target:"_blank",rel:"noreferrer",className:"link-block-3 w-inline-block",children:["$",c||!t?"-.--":t.price.toFixed(2)]})}),Object(q.jsx)("div",{className:"metric-label-sm",children:"price"})]}),Object(q.jsxs)("div",{id:"w-node-_4453e7ca-408d-1980-9e95-24a861d3705c-61d3705c",className:"metric-block",children:[Object(q.jsx)("div",{className:"metric",children:Object(q.jsx)("a",{href:"https://etherscan.io/token/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698",target:"_blank",rel:"noreferrer",className:"link-block-3 w-inline-block",children:c||!t?"---,---":Math.round(t.supply).toLocaleString("en-US")})}),Object(q.jsx)("div",{className:"metric-label-sm",children:"Supply"})]}),Object(q.jsxs)("div",{id:"w-node-_6e457b3f-db38-f798-7bd7-9c6797e6e67b-97e6e67b",className:"metric-block",children:[Object(q.jsxs)("div",{id:"w-node-_6e457b3f-db38-f798-7bd7-9c6797e6e67c-97e6e67b",className:"metric",children:["$",c||!t?"---,---":Math.round(t.marketCap).toLocaleString("en-US")]}),Object(q.jsx)("div",{id:"w-node-_6e457b3f-db38-f798-7bd7-9c6797e6e67e-97e6e67b",className:"metric-label-sm",children:"Market cap"})]}),Object(q.jsxs)("div",{id:"w-node-_6e457b3f-db38-f798-7bd7-9c6797e6e67b-97e6e67b",className:"metric-block",children:[Object(q.jsx)("div",{id:"w-node-_6e457b3f-db38-f798-7bd7-9c6797e6e67c-97e6e67b",className:"metric",children:c||!t?"---,---":t.burned.toLocaleString("en-US")}),Object(q.jsx)("div",{id:"w-node-_6e457b3f-db38-f798-7bd7-9c6797e6e67e-97e6e67b",className:"metric-label-sm",children:"burned"})]})]})]})}function T(){var e,a,t=Object(b.a)(Object(l.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))),n=Object(o.a)(t,2),r=n[0],d=n[1],i=Object(b.a)(Object(l.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))),h=Object(o.a)(i,2),p=h[0],j=h[1],u=Object(b.a)(Object(l.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))),m=Object(o.a)(u,2),x=m[0],v=m[1];return Object(c.useEffect)((function(){d(),j(),v()}),[d,j,v]),Object(q.jsxs)("div",{className:"App",children:[Object(q.jsx)("div",{className:"section-7 wf-section",children:Object(q.jsx)("div",{className:"w-container",children:Object(q.jsx)("div",{className:"div-block-11",children:Object(q.jsx)("a",{href:"https://apeisland.webflow.io/",className:"w-inline-block",children:Object(q.jsx)("img",{src:f,loading:"lazy",width:"233",alt:"",className:"image-4"})})})})}),Object(q.jsxs)("div",{className:"section-6 wf-section",children:[Object(q.jsx)("h1",{className:"innerpagetitle",children:"Ape in metrics"}),Object(q.jsxs)("div",{className:"container-6 w-container",children:[Object(q.jsxs)("div",{className:"div-block-14",children:[Object(q.jsx)("h3",{className:"heading-3-copy",children:"Token Stats"}),Object(q.jsxs)("div",{className:"w-layout-grid grid-12",children:[Object(q.jsx)(z,{chain:"ethereum",data:p.value,loading:p.loading}),Object(q.jsx)(z,{chain:"avalanche",data:r.value,loading:r.loading})]}),Object(q.jsxs)("div",{className:"w-layout-grid grid-8",children:[Object(q.jsx)("div",{id:"w-node-_92fdbe46-5fb6-de1b-0e1e-cd2a79e492c4-68d99d19",className:"metric-label",children:"Price history"}),Object(q.jsx)("div",{id:"w-node-_92fdbe46-5fb6-de1b-0e1e-cd2a79e492c2-68d99d19",className:"metric-chart",children:Object(q.jsx)(L,{avaData:null===(e=r.value)||void 0===e?void 0:e.priceHistory,ethData:null===(a=p.value)||void 0===a?void 0:a.priceHistory})}),Object(q.jsx)("div",{id:"w-node-_92fdbe46-5fb6-de1b-0e1e-cd2a79e492c6-68d99d19",className:"metric-chart-label",children:"Inflation over time"}),Object(q.jsx)("div",{id:"w-node-_6d9d7ab5-e39f-1d6f-cf8b-be60c9eedc89-68d99d19",className:"metric-chart",children:Object(q.jsx)("div",{className:"text-block-18",children:"2 series line chart to show aggregate APEIN\xa0inflation (mint - burn)\xa0for Ethereum and Avalanche"})})]})]}),Object(q.jsxs)("div",{className:"div-block-15",children:[Object(q.jsx)("h3",{className:"heading-3",children:"Population\xa0Stats"}),Object(q.jsxs)("div",{className:"w-layout-grid grid-11",children:[Object(q.jsxs)("div",{className:"w-layout-grid grid-10",children:[Object(q.jsx)("div",{id:"w-node-edf75fed-39a1-24d3-7726-4d932d86b733-68d99d19",className:"metric-label",children:"Season"}),Object(q.jsx)("div",{id:"w-node-edf75fed-39a1-24d3-7726-4d932d86b735-68d99d19",className:"metric-label",children:"Total"}),Object(q.jsx)("div",{id:"w-node-_2c169aa6-5707-8d43-47ea-0e83f877ea7c-68d99d19",className:"metric-label",children:"Ethereum"}),Object(q.jsx)("div",{id:"w-node-_8f7464e9-5331-1239-bc89-7eb1d0d8abb7-68d99d19",className:"metric-label",children:"avalanche"})]}),Object(q.jsxs)("div",{className:"w-layout-grid grid-10",children:[Object(q.jsx)("div",{id:"w-node-_02998a9b-acdd-933d-40d7-84692e25c654-68d99d19",className:"metric-text",children:"season 1"}),Object(q.jsx)("div",{id:"w-node-_02998a9b-acdd-933d-40d7-84692e25c658-68d99d19",className:"metric-text",children:x.loading||!x.value?"--":x.value.ape_1}),Object(q.jsx)("a",{href:"https://etherscan.io/token/0x09b9905a472aa1d387c9c1d8d956aff5463837e8",target:"_blank",rel:"noreferrer",className:"w-inline-block",children:Object(q.jsx)("div",{className:"metric-text",children:x.loading||!x.value?"--":x.value.ape_1})}),Object(q.jsx)("div",{id:"w-node-_02998a9b-acdd-933d-40d7-84692e25c65a-68d99d19",className:"metric-text",children:"--"})]}),Object(q.jsxs)("div",{className:"w-layout-grid grid-10",children:[Object(q.jsx)("div",{id:"w-node-_074b1195-b1e0-ed66-e2fe-b5c9544fee87-68d99d19",className:"metric-text",children:"season 2"}),Object(q.jsx)("div",{id:"w-node-_074b1195-b1e0-ed66-e2fe-b5c9544fee89-68d99d19",className:"metric-text",children:x.loading||!x.value?"--":x.value.ape_2}),Object(q.jsx)("a",{href:"https://etherscan.io/token/0x5033973ea65c66a8745acdb4f8ecb326365de2be",target:"_blank",rel:"noreferrer",className:"w-inline-block",children:Object(q.jsx)("div",{className:"metric-text",children:x.loading||!x.value?"--":x.value.ape_2})}),Object(q.jsx)("div",{id:"w-node-_074b1195-b1e0-ed66-e2fe-b5c9544fee8d-68d99d19",className:"metric-text",children:"--"})]}),Object(q.jsxs)("div",{className:"w-layout-grid grid-10",children:[Object(q.jsx)("div",{id:"w-node-_502d6ad2-4129-2225-be6c-761e27cbeffd-68d99d19",className:"metric-text",children:"season 3"}),Object(q.jsx)("div",{id:"w-node-_502d6ad2-4129-2225-be6c-761e27cbefff-68d99d19",className:"metric-text",children:"--"}),Object(q.jsx)("div",{id:"w-node-_502d6ad2-4129-2225-be6c-761e27cbf001-68d99d19",className:"metric-text",children:"--"}),Object(q.jsx)("div",{id:"w-node-_502d6ad2-4129-2225-be6c-761e27cbf003-68d99d19",className:"metric-text",children:"--"})]}),Object(q.jsxs)("div",{className:"w-layout-grid grid-10",children:[Object(q.jsx)("div",{id:"w-node-_3baf22b9-674f-1d1a-af84-0fff8135f6f9-68d99d19",className:"metric-text",children:"Offspring"}),Object(q.jsx)("div",{id:"w-node-_3baf22b9-674f-1d1a-af84-0fff8135f6fb-68d99d19",className:"metric-text",children:x.loading||!x.value?"--":x.value.ape_o}),Object(q.jsx)("a",{href:"https://etherscan.io/token/0xcdece16fb4ef3c171e163b7c72023fff4d3e2bd9",target:"_blank",rel:"noreferrer",className:"w-inline-block",children:Object(q.jsx)("div",{className:"metric-text",children:x.loading||!x.value?"--":x.value.ape_o})}),Object(q.jsx)("div",{id:"w-node-_3baf22b9-674f-1d1a-af84-0fff8135f6ff-68d99d19",className:"metric-text",children:"--"})]})]}),Object(q.jsx)("h3",{className:"heading-3",children:"Contracts"}),Object(q.jsxs)("div",{className:"w-layout-grid grid-11",children:[Object(q.jsx)("a",{href:"https://etherscan.io/token/0x8bbf1dccbedd5c70d8e793d432fb56b848dd1698",target:"_blank",rel:"noreferrer",className:"link-block-4 w-inline-block",children:Object(q.jsx)("div",{className:"metric-text",children:"APEIN\xa0- Ethereum"})}),Object(q.jsx)("a",{href:"https://info.pangolin.exchange/#/token/0x938fe3788222a74924e062120e7bfac829c719fb",target:"_blank",rel:"noreferrer",className:"link-block-5 w-inline-block",children:Object(q.jsx)("div",{className:"metric-text",children:"APEIN\xa0- Avalanche"})}),Object(q.jsx)("a",{href:"https://etherscan.io/token/0x09b9905a472aa1d387c9c1d8d956aff5463837e8",target:"_blank",rel:"noreferrer",className:"link-block-6 w-inline-block",children:Object(q.jsx)("div",{className:"metric-text",children:"Season 1 Apes"})}),Object(q.jsx)("a",{href:"https://etherscan.io/token/0x5033973ea65c66a8745acdb4f8ecb326365de2be",target:"_blank",rel:"noreferrer",className:"link-block-7 w-inline-block",children:Object(q.jsx)("div",{className:"metric-text",children:"Season 2 Apes"})}),Object(q.jsx)("a",{href:"https://etherscan.io/token/0xcdece16fb4ef3c171e163b7c72023fff4d3e2bd9",target:"_blank",rel:"noreferrer",className:"link-block-8 w-inline-block",children:Object(q.jsx)("div",{className:"metric-text",children:"Offspring Apes"})})]})]})]})]})]})}var H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,213)).then((function(a){var t=a.getCLS,c=a.getFID,n=a.getFCP,r=a.getLCP,d=a.getTTFB;t(e),c(e),n(e),r(e),d(e)}))};d.a.render(Object(q.jsx)(n.a.StrictMode,{children:Object(q.jsx)(T,{})}),document.getElementById("root")),H()},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){}},[[210,1,2]]]);
//# sourceMappingURL=main.03526ba3.chunk.js.map