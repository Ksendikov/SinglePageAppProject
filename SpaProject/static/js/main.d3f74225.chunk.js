(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{23:function(t,e,n){},25:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),i=n(13),r=n.n(i),c=(n(23),n(4)),o=n.n(c),u=n(14),l=n(15),h=n(16),p=n(18),b=n(17),d=(n(25),n(26),n(27),n(2)),f=function(t){Object(p.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={users:[],isLoading:!1,isError:!1},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({isLoading:!0}),t.next=3,fetch("http://127.0.0.1:8000/api/table/");case 3:if(!(e=t.sent).ok){t.next=12;break}return t.next=7,e.json();case 7:n=t.sent,console.log(n),this.setState({tabledate:n,isLoading:!1}),t.next=13;break;case 12:this.setState({isError:!0,isLoading:!1});case 13:console.log(Object.keys(this.state.tabledate.results));case 14:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(d.jsx)("div",{children:"hello"})}}]),n}(a.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),i(t),r(t)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),j()}},[[47,1,2]]]);
//# sourceMappingURL=main.d3f74225.chunk.js.map