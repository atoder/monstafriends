(this.webpackJsonpmonstafriends=this.webpackJsonpmonstafriends||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(2),o=n.n(s),c=(n(21),n(3)),i=n(4),l=n(7),u=n(6),h=n(5),d=function(e){var t=e.id,n=e.name,r=e.email,s=e.username;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200&set=set2")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,r),a.a.createElement("p",null,s)))},m=function(e){var t=e.friends;return a.a.createElement("div",null,t.map((function(e,n){return a.a.createElement(d,{key:n,id:t[n].id,name:t[n].name,email:t[n].email,username:t[n].username})})))},E=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search friends",onChange:t}))},p=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"980px"}},e.children)},f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops. This is not good"):this.props.children}}]),n}(r.Component),g=(n(27),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestMonsters()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.monsters,s=e.isPending,o=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return s?a.a.createElement("h1",{className:"tc"},"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f2"},"MonstaFriends"),a.a.createElement(E,{searchChange:n}),a.a.createElement(p,null,a.a.createElement(f,null,a.a.createElement(m,{friends:o}))))}}]),n}(r.Component)),b=Object(h.b)((function(e){return{searchField:e.searchFriends.searchField,monsters:e.requestMonsters.monsters,pending:e.requestMonsters.isPending,error:e.requestMonsters.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestMonsters:function(){return e((function(e){e({type:"REQUEST_MONSTERS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_MONSTERS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_MONSTERS_FAILED",payload:t})}))}))}}}))(g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v={searchField:""},S={isPending:!1,monsters:[],error:""},O=(n(28),n(1)),y=n(14),j=n(15),C=Object(y.createLogger)(),N=Object(O.c)({searchFriends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestMonsters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_MONSTERS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_MONSTERS_SUCCESS":return Object.assign({},e,{monsters:t.payload,isPending:!1});case"REQUEST_MONSTERS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),w=Object(O.d)(N,Object(O.a)(j.a,C));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h.a,{store:w},a.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.0d6bc75c.chunk.js.map