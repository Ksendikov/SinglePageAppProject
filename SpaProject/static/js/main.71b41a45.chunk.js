(this["webpackJsonpmainapp-ui"]=this["webpackJsonpmainapp-ui"]||[]).push([[0],{23:function(t,e,n){},25:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(13),s=n.n(i),o=(n(23),n(3)),c=n.n(o),u=n(14),p=n(15),f=n(16),b=n(18),d=n(17),h=(n(25),n(26),n(27),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this,t)).renderTableHeader=function(){},a.renderTableRows=function(){},a.state={users:[],isLoading:!1,isError:!1},a}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(c.a.mark((function t(){var e,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({isLoading:!0}),t.next=3,fetch("http://127.0.0.1:8000/api/table/");case 3:if(!(e=t.sent).ok){t.next=12;break}return t.next=7,e.json();case 7:n=t.sent,console.log(n),this.setState({tabledate:n,isLoading:!1}),t.next=13;break;case 12:this.setState({isError:!0,isLoading:!1});case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),n}(a.Component)),l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),i(t),s(t)}))},g=n(4);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(h,{})}),document.getElementById("root")),l()}},[[47,1,2]]]);
//# sourceMappingURL=main.71b41a45.chunk.js.map