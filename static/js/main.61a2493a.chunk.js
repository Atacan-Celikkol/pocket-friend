(this["webpackJsonppocket-friend"]=this["webpackJsonppocket-friend"]||[]).push([[0],{146:function(e,t,n){e.exports=n(258)},151:function(e,t,n){},152:function(e,t,n){},181:function(e,t){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),i=(n(151),n(141)),s=n(55),l=n(37),u=n(10),m=n(33),d=n(35),p=n(34),f=n(36),h=(n(152),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-container col-sm-12 col-lg-6 offset-lg-3"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:"text-success"},"Pocket Friend"),r.a.createElement("span",{className:""},"Your pocket's best friend! ","\ud83d\ude0a")),localStorage.getItem("UserToken")&&r.a.createElement(s.b,{to:"/login",style:{position:"absolute",marginTop:"22px"},onClick:function(){return localStorage.removeItem("UserToken")}},"Logout"))}}]),t}(a.Component)),b=n(16),E=function e(){Object(u.a)(this,e),this.login="",this.password=""},v=function e(){Object(u.a)(this,e),this.___class="Users",this.password="",this.email="",this.name=""},g=n(5),w=n.n(g),y=n(11),x=n(3),N=n.n(x),j=function e(){Object(u.a)(this,e),this.startDate=N()().startOf("month"),this.endDate=N()().endOf("month")},D="".concat("https://api.backendless.com/").concat("1FF6847A-E791-15A3-FFEE-DDFB60C31600","/").concat("F1C73522-DD64-3A93-FF4E-67CBDEDCDF00"),O="".concat(D,"/data/"),k={Ascending:" asc",Descending:" desc"};function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?"".concat(O+e,"?").concat(t):O+e}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new j,n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:k.Ascending;return"".concat(O+e,"?pageSize=100&sortBy=").concat(n+a,"&where=on_date>=").concat(t.startDate.valueOf(),"%26%26on_date<=").concat(t.endDate.valueOf())}function T(e,t){return"".concat(O+e,"/").concat(t)}function S(e,t,n){return _.apply(this,arguments)}function _(){return(_=Object(y.a)(w.a.mark((function e(t,n,a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t,{headers:{"user-token":localStorage.getItem("UserToken")},method:n,body:JSON.stringify(a)}).then((function(e){return 400!==e.status&&401!==e.status||(localStorage.removeItem("UserToken"),window.location.reload()),e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F="users";function A(e){return B.apply(this,arguments)}function B(){return(B=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=D+"/"+F+"/login",e.abrupt("return",fetch(n,{method:"post",body:JSON.stringify(t)}).then((function(e){return e.json()})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=D+"/"+F+"/register",e.abrupt("return",fetch(n,{method:"post",body:JSON.stringify(t)}).then((function(e){return e.json()})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(p.a)(t).call(this))).state={isLogin:!0},e.isLogin=e.isLogin.bind(Object(b.a)(e)),e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"isLogin",value:function(){this.setState({isLogin:!this.state.isLogin})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},this.state.isLogin?r.a.createElement(M,{isLogin:this.isLogin}):r.a.createElement(V,{isLogin:!0}))))}}]),t}(r.a.Component);function M(e){var t=new E,n=Object(l.g)();return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),A(t).then((function(e){e.message?alert(e.message):(localStorage.setItem("UserToken",e["user-token"]),n.push("/transactions"))}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",onChange:function(e){return t.login=e.target.value}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",onChange:function(e){return t.password=e.target.value}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"),r.a.createElement("button",{type:"button",className:"btn btn-success ml-2",onClick:e.isLogin},"Register"))}function V(){var e=new v,t=Object(l.g)();return r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),function(e){return L.apply(this,arguments)}(e).then((function(n){n.message?alert(n.message):A({login:e.email,password:e.password}).then((function(e){localStorage.setItem("UserToken",e["user-token"]),t.push("/transactions")}))}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Enter name",onChange:function(t){return e.name=t.target.value}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",onChange:function(t){return e.email=t.target.value}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",onChange:function(t){return e.password=t.target.value}})),r.a.createElement("button",{type:"submit",className:"btn btn-success"},"Register"))}var P=n(143),U=(n(232),n(252),function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date;Object(u.a)(this,e),this.amount=0,this.description="",this.on_date=new Date,this.amount=t,this.description=n,this.on_date=N()(a).format("YYYY-MM-DD")}),R=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date;Object(u.a)(this,e),this.amount=0,this.description="",this.on_date=new Date,this.amount=t,this.description=n,this.on_date=N()(a).format("YYYY-MM-DD")},J=n(144),q=n.n(J),z=n(145),K=n.n(z)()(q.a);function W(){return K.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",animation:!1,confirmButtonText:"Delete!",confirmButtonColor:"#F33",toast:!0,width:350,showCloseButton:!0})}function G(){return K.fire({title:"Deleted!",text:"Item has been deleted!",icon:"success",position:"bottom",showConfirmButton:!1,toast:!0,timer:2500,width:350})}function H(e,t){return K.mixin({animation:!1,confirmButtonText:"Next",confirmButtonColor:"#07f",showCancelButton:!0,cancelButtonColor:"#F33",progressSteps:e}).queue(t)}var Q="Expenses";function X(){return Z.apply(this,arguments)}function Z(){return(Z=Object(y.a)(w.a.mark((function e(){var t,n,a,r,c=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:new j,n=c.length>1?c[1]:void 0,a=c.length>2&&void 0!==c[2]?c[2]:k.Ascending,r=C(Q,t,n,a),e.next=6,S(r,"get");case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return($=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=T(Q,t),e.abrupt("return",S(n,"delete"));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(){return(ee=Object(y.a)(w.a.mark((function e(t,n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=T(Q,n),e.abrupt("return",S(a,"put",t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(){return(te=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=I(Q),e.abrupt("return",S(n,"post",t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne="Incomes";function ae(){return re.apply(this,arguments)}function re(){return(re=Object(y.a)(w.a.mark((function e(){var t,n,a,r,c=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:new j,n=c.length>1?c[1]:void 0,a=c.length>2&&void 0!==c[2]?c[2]:k.Ascending,r=C(ne,t,n,a),e.next=6,S(r,"get");case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(){return(ce=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=T(ne,t),e.abrupt("return",S(n,"delete"));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){return(oe=Object(y.a)(w.a.mark((function e(t,n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=T(ne,n),e.abrupt("return",S(a,"put",t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){return(ie=Object(y.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=I(ne),e.abrupt("return",S(n,"post",t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(253);function se(e){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"30",viewBox:"0 0 120 30",fill:e.color},r.a.createElement("circle",{cx:"15",cy:"15",r:"14.4178"},r.a.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"60",cy:"15",r:"9.58221",fillOpacity:"0.3"},r.a.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"105",cy:"15",r:"14.4178"},r.a.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})))))}var le=n(24);var ue=function(e){var t=r.a.createElement("table",{className:"table table-sm"},r.a.createElement("thead",{className:"bg-danger text-light"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Date"),r.a.createElement("th",{scope:"col"},"Description"),r.a.createElement("th",{scope:"col"},"Amount"))),r.a.createElement("tbody",null,e.expenses.map((function(e,t){return r.a.createElement(le.b,{renderTag:"tr",id:"expenses-context",key:e.objectId,collect:function(){return e}},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",{className:e.on_date>(new Date).getTime()?"incoming-expense-date":void 0},new Intl.DateTimeFormat("tr-TR").format(new Date(e.on_date))),r.a.createElement("td",null,e.description),r.a.createElement("td",{className:"text-danger font-weight-bold"},"-",e.amount,"TL"))})))),n=r.a.createElement(le.a,{id:"expenses-context"},r.a.createElement(le.c,{onClick:e.update},r.a.createElement("i",{className:"icon-edit mr-1"})," Edit"),r.a.createElement(le.c,{divider:!0}),r.a.createElement(le.c,{onClick:e.delete},r.a.createElement("i",{className:"icon-delete mr-1"})," Delete"));return r.a.createElement("div",null,n,t)};var me=function(e){var t=r.a.createElement("table",{className:"table table-sm"},r.a.createElement("thead",{className:"bg-success text-light"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Date"),r.a.createElement("th",{scope:"col"},"Description"),r.a.createElement("th",{scope:"col"},"Amount"))),r.a.createElement("tbody",null,e.incomes.map((function(e,t){return r.a.createElement(le.b,{renderTag:"tr",id:"incomes-context",key:e.objectId,collect:function(){return e}},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",{className:e.on_date>(new Date).getTime()?"incoming-income-date":void 0},new Intl.DateTimeFormat("tr-TR").format(new Date(e.on_date))),r.a.createElement("td",null,e.description),r.a.createElement("td",{className:"text-success font-weight-bold"},e.amount,"TL"))})))),n=r.a.createElement(le.a,{id:"incomes-context"},r.a.createElement(le.c,{onClick:e.update},r.a.createElement("i",{className:"icon-edit mr-1"})," Edit"),r.a.createElement(le.c,{divider:!0}),r.a.createElement(le.c,{onClick:e.delete},r.a.createElement("i",{className:"icon-delete mr-1"})," Delete"));return r.a.createElement("div",null,n,t)},de=(n(254),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"summaries"},r.a.createElement("div",{id:"incomes"},r.a.createElement("h4",null,"Incomes"),r.a.createElement("span",null,this.props.incomes.toFixed(2),"TL")),r.a.createElement("div",{id:"expenses"},r.a.createElement("h4",null,"Expenses"),r.a.createElement("span",null,this.props.expenses.toFixed(2),"TL")),r.a.createElement("div",{id:"balance"},r.a.createElement("h4",null,"Balance"),r.a.createElement("span",null,(this.props.incomes-this.props.expenses).toFixed(2),"TL")))}}]),t}(r.a.Component)),pe=(n(255),[]),fe=[],he=0,be=0,Ee=!0,ve=!0,ge=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).state=new j,n.getIncomesAsync=n.getIncomesAsync.bind(Object(b.a)(n)),n.getExpensesAsync=n.getExpensesAsync.bind(Object(b.a)(n)),n.getTransactions=n.getTransactions.bind(Object(b.a)(n)),n.deleteIncome=n.deleteIncome.bind(Object(b.a)(n)),n.deleteExpense=n.deleteExpense.bind(Object(b.a)(n)),n.newIncome=n.newIncome.bind(Object(b.a)(n)),n.newExpense=n.newExpense.bind(Object(b.a)(n)),n.updateIncome=n.updateIncome.bind(Object(b.a)(n)),n.updateExpense=n.updateExpense.bind(Object(b.a)(n)),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getTransactions()}},{key:"getTransactions",value:function(){this.getIncomesAsync(),this.getExpensesAsync()}},{key:"orderByDate",value:function(e,t){return t.on_date-e.on_date}},{key:"getIncomesAsync",value:function(){var e=Object(y.a)(w.a.mark((function e(){var t=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:pe=[],Ee=!0,he=0,this.setState(this.state),ae(this.state,"on_date",k.Descending).then((function(e){(pe=e).forEach((function(e){return he+=e.amount})),Ee=!1,t.setState(t.state)}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getExpensesAsync",value:function(){var e=Object(y.a)(w.a.mark((function e(){var t=this;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fe=[],ve=!0,be=0,this.setState(this.state),X(this.state,"on_date",k.Descending).then((function(e){(fe=e).forEach((function(e){return be+=e.amount})),ve=!1,t.setState(t.state)}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteIncome",value:function(e,t){var n=this;W().then((function(e){e.value&&function(e){return ce.apply(this,arguments)}(t.objectId).then((function(e){pe=pe.filter((function(e){return e.objectId!==t.objectId})),he-=t.amount,n.setState(n.state),G()}))}))}},{key:"deleteExpense",value:function(e,t){var n=this;W().then((function(e){e.value&&function(e){return $.apply(this,arguments)}(t.objectId).then((function(e){fe=fe.filter((function(e){return e.objectId!==t.objectId})),be-=t.amount,n.setState(n.state),G()}))}))}},{key:"newIncome",value:function(){var e=this,t=new R;H(["1","2","3"],[{input:"text",title:"Amount",inputValidator:function(e){if(!e||isNaN(e))return"I said amount... \ud83d\ude22"}},{title:"Date",html:r.a.createElement("input",{type:"date",className:"swal2-input",defaultValue:t.on_date,onChange:function(e){return t.on_date=e.target.value}})},{input:"text",title:"Description"}]).then((function(n){n.value&&(t.amount=Number(n.value[0]),t.description=n.value[2],function(e){return ie.apply(this,arguments)}(t).then((function(t){pe.push(t),pe.sort(e.orderByDate),he+=t.amount,e.setState(e.state)})))}))}},{key:"newExpense",value:function(){var e=this,t=new U;H(["1","2","3"],[{input:"text",title:"Amount",inputValidator:function(e){if(!e||isNaN(e))return"I said amount... \ud83d\ude22"}},{title:"Date",html:r.a.createElement("input",{type:"date",className:"swal2-input",defaultValue:t.on_date,onChange:function(e){return t.on_date=e.target.value}})},{input:"text",title:"Description"}]).then((function(n){n.value&&(t.amount=Number(n.value[0]),t.description=n.value[2],function(e){return te.apply(this,arguments)}(t).then((function(t){fe.push(t),fe.sort(e.orderByDate),be+=t.amount,e.setState(e.state)})))}))}},{key:"updateIncome",value:function(e,t){var n=this,a=new R(t.amount,t.description,t.on_date);H(["1","2","3"],[{input:"text",inputValue:a.amount,title:"Amount",inputValidator:function(e){if(!e||isNaN(e))return"I said amount... \ud83d\ude22"}},{title:"Date",html:r.a.createElement("input",{type:"date",className:"swal2-input",defaultValue:a.on_date,onChange:function(e){return a.on_date=e.target.value}})},{input:"text",inputValue:a.description,title:"Description"}]).then((function(e){e.value&&(a.amount=Number(e.value[0]),a.description=e.value[2],function(e,t){return oe.apply(this,arguments)}(a,t.objectId).then((function(e){pe.splice(pe.findIndex((function(e){return e.objectId===t.objectId})),1,e),pe.sort(n.orderByDate),he+=e.amount-t.amount,n.setState(n.state)})))}))}},{key:"updateExpense",value:function(e,t){var n=this,a=new U(t.amount,t.description,t.on_date);H(["1","2","3"],[{input:"text",inputValue:a.amount,title:"Amount",inputValidator:function(e){if(!e||isNaN(e))return"I said amount... \ud83d\ude22"}},{title:"Date",html:r.a.createElement("input",{type:"date",className:"swal2-input",defaultValue:a.on_date,onChange:function(e){return a.on_date=e.target.value}})},{input:"text",inputValue:a.description,title:"Description"}]).then((function(e){e.value&&(a.amount=Number(e.value[0]),a.description=e.value[2],function(e,t){return ee.apply(this,arguments)}(a,t.objectId).then((function(e){fe.splice(fe.findIndex((function(e){return e.objectId===t.objectId})),1,e),fe.sort(n.orderByDate),be+=e.amount-t.amount,n.setState(n.state)})))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"summary-container"},r.a.createElement(P.DateRangePicker,{startDate:this.state.startDate,startDateId:"start-date-input",endDate:this.state.endDate,endDateId:"end-date-input",onDatesChange:function(t){var n=t.startDate,a=t.endDate;return e.setState({startDate:n,endDate:a})},focusedInput:this.state.focusedInput,onFocusChange:function(t){return e.setState({focusedInput:t})},isOutsideRange:function(){return!1},renderCalendarInfo:function(){return!1},small:!1,withPortal:!0,noBorder:!0,block:!0,readOnly:!0,hideKeyboardShortcutsPanel:!0,numberOfMonths:1,firstDayOfWeek:1,transitionDuration:0,displayFormat:"DD.MM.YYYY",onClose:function(){return setTimeout((function(){return e.getTransactions()}),100)}}),r.a.createElement(de,{incomes:he,expenses:be})),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex"},r.a.createElement("h3",{className:"text-success"},"Incomes"),r.a.createElement("div",{className:"d-flex ml-2"},r.a.createElement("button",{className:"btn btn-sm btn-success m-auto",onClick:this.newIncome},r.a.createElement("i",{className:"icon-add"})))),Ee?r.a.createElement(se,{color:"#3A3"}):pe.length>0?r.a.createElement(me,{incomes:pe,delete:this.deleteIncome,update:this.updateIncome}):"- You have no incomes. \ud83d\ude22",r.a.createElement("br",null),r.a.createElement("div",{className:"d-flex"},r.a.createElement("h3",{className:"text-danger"},"Expenses"),r.a.createElement("div",{className:"d-flex ml-2"},r.a.createElement("button",{className:"btn btn-sm btn-danger m-auto",onClick:this.newExpense},r.a.createElement("i",{className:"icon-add"})))),ve?r.a.createElement(se,{color:"#f33"}):fe.length>0?r.a.createElement(ue,{expenses:fe,delete:this.deleteExpense,update:this.updateExpense}):"- You have no expenses! \ud83d\ude01"))}}]),t}(r.a.Component);n(256);function we(e){var t=e.children,n=Object(i.a)(e,["children"]);return r.a.createElement(l.b,Object.assign({},n,{render:function(e){var n=e.location;return localStorage.getItem("UserToken")?t:r.a.createElement(l.a,{to:{pathname:"/login",state:{from:n}}})}}))}n(257);o.a.render(r.a.createElement((function(){return r.a.createElement(s.a,{basename:"/"},r.a.createElement("div",{id:"main",className:"container dark"},r.a.createElement(h,null),r.a.createElement("div",{className:"col-sm-12 col-lg-6 offset-lg-3"},r.a.createElement(l.d,null,r.a.createElement(we,{path:"/transactions"},r.a.createElement(ge,null)),r.a.createElement(l.b,{path:"/login"},r.a.createElement(Y,null)),r.a.createElement(l.b,{path:"*"},r.a.createElement(l.a,{to:"/transactions"}))))))}),null),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.61a2493a.chunk.js.map