(this.webpackJsonpoki=this.webpackJsonpoki||[]).push([[0],{101:function(e,n,t){},105:function(e,n,t){},106:function(e,n,t){"use strict";t.r(n);var c=t(3),o=t(0),i=t(17),r=t.n(i),a=(t(95),t(36)),s=t(10),l=t(48),d=t(11),j=t(127),u=t(133),h=t(129),b=t(130),f=t(131),O=t(84),p=t.n(O),x=t(83),v=t.n(x),m=t(126),g=t(78),w=t.n(g),y=t(87),k=t(79),C=t.n(k),F=Object(o.createContext)({});function N(e){var n=e.children,t=Object(o.useState)(),i=Object(s.a)(t,2),r=i[0],a=i[1],l=Object(d.g)();return Object(o.useEffect)((function(){var e=new w.a(Object(y.a)(5),{host:"ciapeer.herokuapp.com",secure:!0});e.on("open",(function(n){a(e),console.log(n),C.a.setItem("peerid",n)})),e.on("error",(function(e){"unavailable-id"===e.type&&window.location.reload()}))}),[]),Object(o.useEffect)((function(){var e=l.listen((function(e){console.log(e)}));return function(){e()}}),[l]),Object(c.jsx)(F.Provider,{value:{peer:r},children:n})}t(101);function E(){return Object(c.jsx)("div",{className:"session",children:"test"})}function S(){var e=Object(o.useContext)(F).peer,n=Object(m.useSpring)((function(){return{transform:"scale(1)",opacity:1}})),t=Object(s.a)(n,2),i=t[0],r=t[1],a=Object(d.g)();return Object(o.useEffect)((function(){e&&e.id&&a&&r({transform:"scale(0.5)",opacity:0,delay:1500}).then((function(){a.push("/profile")}))}),[r,e,a]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(m.animated.div,{className:"landing",style:i,children:[Object(c.jsx)(z,{}),Object(c.jsx)("p",{children:"Anonymous communication"})]})})}function D(e){var n=e.set,t=e.open;return Object(o.useEffect)((function(){t&&setTimeout((function(){n(!1)}),2e3)}),[t]),Object(c.jsx)(j.a,{in:t,children:Object(c.jsx)("span",{style:{marginLeft:"6px"},className:"alert-text",children:"copied ID"})})}function W(){var e=Object(o.useContext)(F).peer,n=Object(o.useState)(!1),t=Object(s.a)(n,2),i=t[0],r=t[1];function a(){e&&(!function(e){var n=document.createElement("textarea");n.value=e,document.body.appendChild(n),n.focus(),n.select();try{var t=document.execCommand("copy")?"successful":"unsuccessful";console.log("Copying text command was "+t)}catch(c){console.log("Oops, unable to copy")}document.body.removeChild(n)}(e.id),r(!0))}return e?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(m.animated.div,{className:"profile",children:[Object(c.jsxs)("header",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"Oki ID"}),Object(c.jsx)(u.a,{title:"your id",placement:"right",children:Object(c.jsx)(h.a,{variant:"outlined",color:"primary",onClick:a,className:"myid",children:e.id})}),Object(c.jsx)(D,{open:i,set:r})]}),Object(c.jsx)(b.a,{"aria-label":"",onClick:a,children:Object(c.jsx)(v.a,{})})]}),Object(c.jsx)("div",{className:"connections",children:Object(c.jsx)("header",{children:Object(c.jsx)("p",{children:"Connections"})})})]}),Object(c.jsx)("div",{className:"add-connection",children:Object(c.jsxs)(f.a,{variant:"extended",color:"primary",children:[Object(c.jsx)(p.a,{}),Object(c.jsx)("span",{children:"add connection"})]})})]}):Object(c.jsx)(d.a,{to:"/"})}function z(e){var n=Object(o.useContext)(F).peer,t=function(){return Object(c.jsxs)("svg",Object(a.a)(Object(a.a)({width:177,height:99,viewBox:"0 0 177 99"},e),{},{children:[Object(c.jsx)("title",{children:"Group 2"}),Object(c.jsxs)("g",{fill:"#517DFF",fillRule:"evenodd",children:[Object(c.jsx)(m.animated.path,{style:Object(a.a)({},Object(m.useSpring)({loop:!n&&{reverse:!0},from:{opacity:0},to:{opacity:1},config:{frequency:.4}})),d:"M0 49.638c0-8.917 2.206-17.19 6.618-24.82 4.413-7.629 10.41-13.672 17.994-18.13C32.196 2.228 40.446 0 49.362 0c8.917 0 17.19 2.23 24.82 6.687 7.629 4.459 13.672 10.502 18.13 18.132C96.772 32.449 99 40.72 99 49.638c0 8.916-2.23 17.166-6.687 24.75C87.854 81.97 81.81 87.969 74.18 92.382 66.551 96.794 58.28 99 49.362 99c-9.008 0-17.281-2.137-24.819-6.412-7.537-4.274-13.512-10.157-17.925-17.649C2.206 67.448 0 59.014 0 49.638zm3-.362c0 8.387 2.08 16.174 6.241 23.362 4.16 7.189 9.762 12.88 16.803 17.072C33.086 93.903 40.721 96 48.951 96c8.505 0 16.369-2.097 23.593-6.29s12.94-9.883 17.146-17.072C93.897 65.45 96 57.617 96 49.138c0-8.386-2.103-16.196-6.31-23.43-4.206-7.235-9.899-12.995-17.077-17.28C65.434 4.143 57.684 2 49.363 2c-8.596 0-16.437 2.166-23.525 6.497-7.087 4.331-12.665 10.137-16.734 17.418C5.034 33.195 3 40.982 3 49.276z",fillRule:"nonzero"}),Object(c.jsx)("path",{d:"M174.416 48.994v49.518h-2.62V48.994zM170.224 33.405c0-.786.284-1.463.851-2.03.568-.568 1.289-.852 2.162-.852.786 0 1.463.284 2.03.852.568.567.852 1.244.852 2.03 0 .786-.284 1.463-.852 2.03-.567.568-1.244.852-2.03.852-.786 0-1.485-.306-2.096-.917s-.917-1.266-.917-1.965z"}),Object(c.jsx)("g",{children:Object(c.jsx)("path",{d:"M128.21 69.168l-9.431 8.908v20.436h-2.62V0h2.62v75.063l28.95-26.986 1.704 1.441-19.257 17.947 22.663 31.047h-3.013z"})})]})]}))};return Object(c.jsx)(t,{})}var L=function(){return Object(c.jsx)("div",{className:".home",children:Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{exact:!0,path:"/",children:Object(c.jsx)(S,{})}),Object(c.jsx)(d.b,{path:"/profile",children:Object(c.jsx)(W,{})}),Object(c.jsx)(d.b,{path:"/session:id",children:Object(c.jsx)(E,{})})]})})},P=t(85),T=t(132);t(105);var I=function(){var e=Object(o.useState)("light"),n=Object(s.a)(e,2),t=n[0],i=(n[1],Object(P.a)({palette:{type:t,primary:{main:"#517DFF",light:"#517DFF",dark:"#517DFF"},background:{default:"dark"===t?"#12192F":"white"}}}));return Object(c.jsx)(l.a,{basename:"/oki",children:Object(c.jsx)(N,{children:Object(c.jsx)(T.a,Object(a.a)(Object(a.a)({},{theme:i}),{},{children:Object(c.jsx)(L,{})}))})})},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,134)).then((function(n){var t=n.getCLS,c=n.getFID,o=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),c(e),o(e),i(e),r(e)}))};r.a.render(Object(c.jsx)(I,{}),document.getElementById("root"));try{Notification.requestPermission((function(e){}))}catch(B){}!function(e){if("serviceWorker"in navigator){if(new URL("/oki",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/oki","/service-worker.js");M?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):U(n,e)}))}}(),A()},95:function(e,n,t){},96:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=96}},[[106,1,2]]]);
//# sourceMappingURL=main.c15f8b15.chunk.js.map