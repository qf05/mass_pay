(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),o=a.n(n),r=a(37),s=a.n(r),l=a(8),c=a.n(l),i=a(18),u=a(19),p=a(21),m=a(20),d=a(22),h=a(1),f=(a(112),a(60)),b=[""],g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).changeHandler=function(e){var t=e.currentTarget,n=t.name,o=t.value;a.setState(Object(f.a)({},n,o))},a.submitHandler=function(e){e.preventDefault();for(var t=a.state.text.split(","),n=0;n<t.length;n++)setTimeout(a.time,340*n,t[n]);console.log(a.state)},a.time=function(e){var t=c.a.send("VKWebAppOpenPayForm",{app_id:7089674,action:"pay-to-user",params:{amount:a.state.payValue,description:a.state.message,user_id:e,extra:e}});console.log(t),b.unshift(","),b.unshift(e),a.forceUpdate()},a.state={message:"",payValue:1,text:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.fetchedUser;e.go;return o.a.createElement(h.Panel,{id:t},o.a.createElement(h.PanelHeader,null,"Donator"),a&&o.a.createElement(h.Group,{title:"User Data Fetched with VK Connect"},"".concat(a.first_name," ").concat(a.last_name)),o.a.createElement(h.Group,null,o.a.createElement(h.FormLayout,null,o.a.createElement(h.FormLayoutGroup,{top:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"},o.a.createElement(h.Input,{type:"text",name:"message",onChange:this.changeHandler,value:this.state.message,placeholder:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})),o.a.createElement(h.FormLayoutGroup,{top:"\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430"},o.a.createElement(h.Input,{type:"number",name:"payValue",onChange:this.changeHandler,value:this.state.payValue})),o.a.createElement(h.FormLayoutGroup,{top:"\u0421\u043f\u0438\u0441\u043e\u043a \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432"},o.a.createElement(h.Textarea,{name:"text",onChange:this.changeHandler,value:this.state.text,placeholder:"\u0421\u043f\u0438\u0441\u043e\u043a \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432"})),o.a.createElement(h.Button,{onClick:this.submitHandler,size:"xl","data-to":"persik"},"\u041f\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438"))),o.a.createElement(h.Group,null,b))}}]),t}(o.a.Component),y=a(11),v=(o.a.Component,a(61)),E=a.n(v),O=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={activePanel:"home",fetchedUser:null},c.a.send("VKWebAppGetUserInfo",{});c.a.send("VKWebAppGetAuthToken",{app_id:7089674,scope:"friends,status"});return a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;c.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type),console.log("1234"),t.detail.type.status&&console.log(t.detail.type.extra),console.log(t.detail.type.extra)}}),c.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return o.a.createElement(h.View,{activePanel:this.state.activePanel},o.a.createElement(g,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),o.a.createElement(E.a,{id:"persik",go:this.go}))}}]),t}(o.a.Component);c.a.send("VKWebAppInit",{}),s.a.render(o.a.createElement(O,null),document.getElementById("root"))},61:function(e,t){},62:function(e,t,a){e.exports=a(113)}},[[62,1,2]]]);
//# sourceMappingURL=main.8aa33341.chunk.js.map