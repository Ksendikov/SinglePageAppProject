(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{21:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),s=n(12),d=n.n(s),j=(n(21),n(14)),r=n(13),a=n.n(r),l=n(0);var o=function(e){var t=e.fields;return console.log(t),t&&0!==t.length?Object(l.jsx)("div",{children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"id"}),Object(l.jsx)("th",{children:"date"}),Object(l.jsx)("th",{children:"name"}),Object(l.jsx)("th",{children:"quantity"}),Object(l.jsx)("th",{children:"distance"})]})}),Object(l.jsx)("tbody",{children:t.results.map((function(e){return Object(l.jsx)("tr",{children:Object(l.jsx)("td",{children:e.count})},e.id)}))})]})}):Object(l.jsx)("p",{children:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445."})},h=n(15),b=n(16);var u=function(e){return function(t){var n=t.isLoading,c=Object(b.a)(t,["isLoading"]);return n?Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f!"})}):Object(l.jsx)(e,Object(h.a)({},c))}};var O=function(){var e=u(o),t=Object(c.useState)([{loading:!1,fields:null}]),n=Object(j.a)(t,2),i=n[0],s=n[1];return Object(c.useEffect)((function(){s({loading:!0});a.a.get("http://127.0.0.1:8000/api/table/").then((function(e){var t=e.data;s({loading:!1,fields:t})}))}),[s]),console.log(i),Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(e,{isLoading:i.loading,fields:i.fields})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,d=t.getTTFB;n(e),c(e),i(e),s(e),d(e)}))};d.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}},[[41,1,2]]]);
//# sourceMappingURL=main.01b315be.chunk.js.map