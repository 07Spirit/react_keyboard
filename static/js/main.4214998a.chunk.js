(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),c=n(4),r=n(5),i=n(7),o=n(6),l=n(1),u=n.n(l),y=n(0),p=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={myKey:null},e.lastKeyClick=function(t){e.setState({myKey:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.lastKeyClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.lastKeyClick)}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"App",children:this.state.myKey?Object(y.jsxs)("p",{className:"App__message",children:["The last pressed key is [",this.state.myKey,"]"]}):Object(y.jsx)("p",{className:"App__message",children:"Nothing was pressed yet"})})}}]),n}(u.a.Component);n(13);a.a.render(Object(y.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4214998a.chunk.js.map