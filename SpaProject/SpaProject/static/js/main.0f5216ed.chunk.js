(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{23:function(t,e,n){},25:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var r=n(1),i=n.n(r),a=n(13),s=n.n(a),c=(n(23),n(4)),o=n.n(c),u=n(14),p=n(15),h=n(16),f=n(18),d=n(17),l=(n(25),n(26),n(27),n(2)),b=function(t){Object(f.a)(n,t);var e=Object(d.a)(n);function n(t){var r;return Object(p.a)(this,n),(r=e.call(this,t)).state={users:[],isLoading:!1,isError:!1},r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({isLoading:!0}),t.next=3,fetch("http://127.0.0.1:8000/api/table/");case 3:if(!(e=t.sent).ok){t.next=12;break}return t.next=7,e.json();case 7:n=t.sent,console.log(n),this.setState({users:n,isLoading:!1}),t.next=13;break;case 12:this.setState({isError:!0,isLoading:!1});case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(l.jsx)("div",{children:" Hello"})}}]),n}(r.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),i(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),j()}},[[47,1,2]]]);
//# sourceMappingURL=main.0f5216ed.chunk.js.map