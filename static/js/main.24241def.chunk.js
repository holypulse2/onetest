(this.webpackJsonpone=this.webpackJsonpone||[]).push([[0],{41:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),i=n.n(s),r=n(20),a=n.n(r),o=n(47),l=n(16),j=n(9),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))},d=n(19),b="GET_CONFIGURATION",f="RECEIVE_CONFIGURATION",x="ON_ERROR";var m={configuration:{},error:null};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(d.a)(Object(d.a)({},e),{},{configuration:t.payload&&t.payload.data});case x:return Object(d.a)(Object(d.a)({},e),{},{error:!0});default:return e}},h=n(14),O=n.n(h),g=n(15),v="c-cta",N="c-hero",y=n(43),_=n.n(y);function w(e){return function(e){return _.a.get(e)}("http://patientcheck-be.dhlbsite.com"+"/api/config/".concat(e))}var k=O.a.mark(I),E=O.a.mark(P);function I(e){var t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(g.b)(w,e&&e.payload||"en_GB");case 3:return t=n.sent,n.next=6,Object(g.d)({type:f,payload:t});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(g.d)((n.t0,{type:x}));case 12:case"end":return n.stop()}}),k,null,[[0,8]])}function P(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.e)(b,I);case 2:case"end":return e.stop()}}),E)}var C=O.a.mark(F);function F(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)([Object(g.c)(P)]);case 2:case"end":return e.stop()}}),C)}var T=n(23),R=n(24),A=n(26),G=n(25),S=(n(76),n(77),n(29)),L=n(7),B=n.p+"static/media/hero-image.a877084f.png",z=n.p+"static/media/mobile-header.cc2e7d11.png",J=function(e){return Object(c.jsxs)("h2",{className:"text-4xl font-bold not-italic text-base sm:base normal-case pb-2",children:[" ",e.children," "]})},M=function(e){return Object(c.jsxs)("p",{className:"normal-case leading-snug sm:leading-snug",children:[" ",e.children," "]})},U=(n(78),function(e){var t=e.data;return t&&Object(c.jsxs)("div",{className:"container mx-auto h-full flex sm:flex-wrap 2xl:align-middle 2xl:items-center hero",children:[Object(c.jsx)("div",{className:"2xl:w-1/2 lg:w-1/2 md:w-1/2  sm:w-full text-left pt-12 pb-24 sm:pb-0 px-6 order-1 sm:order-last sm:mt-1 sm:px-2 sm:pt-6 sm:pb-10",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)(J,{children:[" ",t.object.heading," "]}),Object(c.jsxs)(M,{children:[" ",t.object.description," "]})]})}),Object(c.jsx)("div",{class:" sm:w-full lg:w-1/2 lg:py-6 md:w-1/2 text-center order-2 sm:order-1 sm:h-auto sm:pb-0 hero",children:window.innerWidth<767?Object(c.jsx)("img",{src:z,alt:"hero-image"}):Object(c.jsx)("img",{src:B,alt:"hero-image"})})]})}),D=function(){var e=Object(j.b)((function(e){return e.configuration}));Object(s.useEffect)((function(){}),[e]);var t=e.landingPage;if(!t)return null;var n=t.content.components.find((function(e){return e.id===N}));return n&&Object(c.jsx)(U,{data:n})},V=n.p+"static/media/circle-chat.68f813e5.svg",W=(n(79),function(e){var t=e.step,n=e.index;return Object(c.jsxs)("div",{className:"infoliststeps__item mb-4",children:[Object(c.jsx)("div",{className:"infoliststeps__circle",children:Object(c.jsx)("div",{className:"infoliststeps__image my-3",children:Object(c.jsx)("img",{src:V,className:"logo mx-auto",alt:"logo"})})}),Object(c.jsxs)("div",{className:"infoliststeps__step text-center text-xl font-bold my-2",children:["Step ",n]}),Object(c.jsx)("div",{className:"infoliststeps__stepText text-center ",children:t.text})]})}),q=function(){var e=Object(j.b)((function(e){return e.configuration}));Object(s.useEffect)((function(){}),[e]);var t=e.landingPage;if(!t)return null;var n=t.content.components.find((function(e){return"c-infolist-steps"===e.id})),i=n.object.heading,r=n.object.steps;return Object(c.jsxs)("div",{className:"infoliststeps",children:[Object(c.jsxs)("div",{className:"infoliststeps__heading text-center font-bold text-2xl md:text-3xl my-8",children:[Object(c.jsx)("h2",{children:i})," "]}),Object(c.jsx)("div",{className:"infoliststeps__content text-center grid grid-cols-3 md:grid-cols-1 ",children:r.map((function(e,t){return Object(c.jsx)(W,{step:e,index:t+1},t)}))})]})},H=n.p+"static/media/tick.d485fa28.svg",K=(n(80),function(e){var t=e.step;e.index;return Object(c.jsxs)("div",{className:"infolistbullets__item mb-4 pb-8",children:[Object(c.jsx)("div",{className:"infolistbullets__circle",children:Object(c.jsx)("div",{className:"infolistbullets__image my-3",children:Object(c.jsx)("img",{src:H,className:"logo mx-auto",alt:"logo"})})}),Object(c.jsx)("div",{className:"infolistbullets__bulletText text-center ",children:t.text})]})}),Q=function(){var e=Object(j.b)((function(e){return e.configuration}));Object(s.useEffect)((function(){}),[e]);var t=e.landingPage;if(!t)return null;var n=t.content.components.find((function(e){return"c-infolist-tick-bullets"===e.id})),i=n.object.heading,r=n.object.steps;return Object(c.jsxs)("div",{className:"infolistbullets",children:[Object(c.jsxs)("div",{className:"infolistbullets__heading text-center font-bold text-2xl md:text-3xl my-8 pt-8",children:[Object(c.jsx)("h2",{children:i})," "]}),Object(c.jsx)("div",{className:"infolistbullets__content text-center grid grid-cols-3 md:grid-cols-1 ",children:r.map((function(e,t){return Object(c.jsx)(K,{step:e,index:t+1},t)}))})]})},X=(n(81),function(e){var t=e.data;return t&&Object(c.jsx)("div",{className:"cta-div text-center",children:Object(c.jsxs)("a",{className:"place-content-center capitalize mt-10 text-center mb-10 bg-primary-900  hover:bg-opacity-75 transition-colors duration-200 rounded-full font-semibold py-4 px-12 inline-flex cta",href:t.object.link,children:[t.object.text,t.object.iconImage&&""!==t.object.iconImage&&Object(c.jsx)("img",{className:"w-5 ml-2",src:t.object.iconImage,alt:t.object.text})]})})}),Y=function(){var e=Object(j.b)((function(e){return e.configuration}));Object(s.useEffect)((function(){}),[e]);var t=e.landingPage;if(!t)return null;var n=t.content.components.find((function(e){return e.id===v}));return n&&Object(c.jsx)(X,{data:n})},Z=function(e){var t=e.data,n=[];return t.landingPage.content.components.forEach((function(e){e.id===N&&n.push(Object(c.jsx)(D,{})),"c-infolist-steps"===e.id&&n.push(Object(c.jsx)(q,{})),"c-infolist-tick-bullets"===e.id&&n.push(Object(c.jsx)(Q,{})),e.id===v&&n.push(Object(c.jsx)(Y,{}))})),Object(c.jsx)(c.Fragment,{children:n.map((function(e,t){return Object(c.jsxs)("div",{children:[" ",e]},t)}))})},$=function(){var e=Object(j.b)((function(e){return e.configuration}));return Object(s.useEffect)((function(){}),[e]),e.landingPage?Object(c.jsx)(Z,{data:e}):null},ee=(n(41),function(){return Object(c.jsx)("div",{className:"container max-w-screen-2xl mx-auto",children:Object(c.jsx)($,{})})}),te=function(){return Object(c.jsx)("div",{className:"App",children:"survey"})},ne=function(){return Object(c.jsx)("div",{className:"App",children:"page 1"})},ce=(n(82),n.p+"static/media/logo.4dc48088.svg"),se=function(e){return Object(c.jsx)("header",{className:"header mx-auto",children:Object(c.jsx)("a",{href:"/",className:"logo",children:Object(c.jsx)("img",{src:ce,className:"logo",alt:"logo"})})})},ie=(n(83),function(e){var t=e.data;return Object(c.jsx)(s.Fragment,{children:(t||[]).length>0?Object(c.jsx)("footer",{className:"mx-auto",children:Object(c.jsx)("div",{className:"py-3 flex md:flex md:items-center md:justify-center ",children:Object(c.jsx)("ul",{class:"w-full text-center",children:(t||[]).map((function(e,n){var s=e||{},i=s.name,r=s.text,a=(t||[]).length===n+1?"border-0":"border-r";return Object(c.jsx)("li",{class:"px-4 sm:px-3 ".concat(a," capitalize inline leading-7 text-sm"),children:Object(c.jsx)("a",{class:"text-sm font-poppins",href:i,children:r})},n)}))})})}):""})}),re=function(){var e=Object(j.b)((function(e){return e.configuration}));if(Object(s.useEffect)((function(){}),[e]),!e.content)return null;var t=[];e.content.content.labels.sections.forEach((function(e,n){var c=e||{},s=c.name,i=c.translations;"clickables"===s&&t.push(i)}));var n=["privacy","cookies","terms"],i=(t[0]||[]).filter((function(e){return-1!==n.indexOf(e.name)}));return console.log({footerAllowedLinks:i,footerLinks:t}),Object(c.jsx)(ie,{data:i})},ae=n(44),oe=function(e){Object(A.a)(n,e);var t=Object(G.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"application",children:Object(c.jsxs)(ae.a,{children:[Object(c.jsx)("meta",{charSet:"utf-8"}),Object(c.jsx)("title",{children:"Gilead Survey"}),Object(c.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(c.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",rel:"stylesheet"})]})})}}]),n}(i.a.Component),le=function(e){var t=e.children;return Object(c.jsxs)("div",{children:[Object(c.jsx)(oe,{}),Object(c.jsx)(se,{}),t,Object(c.jsx)(re,{})]})},je=function(e){var t=e.children;return Object(c.jsxs)("div",{children:[Object(c.jsx)("header",{children:"header survey"}),t]})},ue=function(e){Object(A.a)(n,e);var t=Object(G.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(R.a)(n,[{key:"render",value:function(){return Object(c.jsx)(S.a,{children:Object(c.jsxs)(L.c,{children:[Object(c.jsx)(L.a,{path:"/survey/:path?",exact:!0,children:Object(c.jsx)(je,{children:Object(c.jsxs)(L.c,{children:[Object(c.jsx)(L.a,{path:"/survey",exact:!0,component:te}),Object(c.jsx)(L.a,{path:"/survey/page1",component:ne}),Object(c.jsx)(L.a,{component:function(){return Object(c.jsx)("div",{children:"404 Main Survey"})},exact:!0,path:"/survey/*"})]})})}),Object(c.jsx)(L.a,{children:Object(c.jsx)(le,{children:Object(c.jsxs)(L.c,{children:[Object(c.jsx)(L.a,{path:"/",exact:!0,component:ee}),Object(c.jsx)(L.a,{component:function(){return Object(c.jsx)("div",{children:"404 Main"})},exact:!0,path:"/*"})]})})})]})})}}]),n}(s.Component),de=function(){return Object(c.jsx)(ue,{})},be=(n(85),window.location.href.split("?")[1].split("=")[1]),fe=Object(o.a)(),xe=Object(l.d)(p,Object(l.a)(fe));fe.run(F),console.info("aaa: ",be),xe.dispatch({type:b,payload:be}),a.a.render(Object(c.jsx)(j.a,{store:xe,children:Object(c.jsx)(de,{})}),document.getElementById("root")),u()}},[[86,1,2]]]);
//# sourceMappingURL=main.24241def.chunk.js.map