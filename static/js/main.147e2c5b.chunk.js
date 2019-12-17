(this["webpackJsonppocket-friend"]=this["webpackJsonppocket-friend"]||[]).push([[0],{132:function(e,t,n){e.exports=n(236)},163:function(e,t){},233:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),l=n(6),s=n(11),i=n(13),u=n(12),m=n(7),d=n(14),h=n(52),p=(n(123),n(130),n(3)),f=n.n(p),b=function e(){Object(l.a)(this,e),this.startDate=f()().startOf("month"),this.endDate=f()().endOf("month")},g="".concat("https://api.backendless.com/").concat("1FF6847A-E791-15A3-FFEE-DDFB60C31600","/").concat("F1C73522-DD64-3A93-FF4E-67CBDEDCDF00","/data/"),E={Ascending:" asc",Descending:" desc"};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?"".concat(g+e,"?").concat(t):g+e}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new b,n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:E.Ascending;return"".concat(g+e,"?pageSize=100&sortBy=").concat(n+a,"&where=on_date>=").concat(t.startDate.valueOf(),"%26%26on_date<=").concat(t.endDate.valueOf())}function j(e,t){return"".concat(g+e,"/").concat(t)}var O=n(53),y=function e(){Object(l.a)(this,e),this.on_date=(new Date).toISOString().split("T")[0],this.description="",this.amount=0},x=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(O.a)({},e.target.name,"amount"===e.target.name?parseFloat(e.target.value):e.target.value))},n.state=new y,n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.create()}},{key:"create",value:function(){var e=this;fetch(v("Expenses"),{method:"post",body:JSON.stringify(this.state)}).then((function(e){return e.json()})).then((function(t){e.setState(new y),e.props.getExpenses()})).catch(console.log)}},{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-danger btn-sm btn-block",onClick:this.handleSubmit,disabled:this.state.amount<=0||""===this.state.on_date||this.state.description.length<3},"+")),r.a.createElement("td",null,r.a.createElement("input",{type:"date",className:"form-control form-control-sm",name:"on_date",onChange:this.handleChange,defaultValue:this.state.on_date})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control form-control-sm",name:"description",placeholder:"Please write a description",value:this.state.description,onChange:this.handleChange})),r.a.createElement("td",null,r.a.createElement("input",{type:"number",className:"form-control form-control-sm",name:"amount",value:this.state.amount,onChange:function(t){t.target.value>=0&&e.handleChange(t)},step:"0.01",min:"0.01"})),r.a.createElement("td",null))}}]),t}(r.a.Component),D=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,r=t.value,o=n.state.expense;o[a]="amount"===a?parseFloat(r):r,n.setState({expense:o})},n.state={expense:n.props.expense,showUpdate:!1},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"changeShowUpdate",value:function(){this.setState({showUpdate:!this.state.showUpdate})}},{key:"render",value:function(){var e=this;return this.state.showUpdate?r.a.createElement(N,{parentProps:this.props,parentState:this.state,handleChange:function(t){return e.handleChange(t)},show:function(){return e.changeShowUpdate()}}):r.a.createElement(S,{parentProps:this.props,show:function(){return e.changeShowUpdate()}})}}]),t}(r.a.Component);function S(e){return r.a.createElement("tr",null,r.a.createElement("th",null,e.parentProps.index+1),r.a.createElement("td",null,new Date(e.parentProps.expense.on_date).toDateString()),r.a.createElement("td",null,e.parentProps.expense.description),r.a.createElement("td",null,"\u20ba",e.parentProps.expense.amount),r.a.createElement("td",null,r.a.createElement("div",{className:"btn-group btn-group-sm d-flex"},r.a.createElement("button",{type:"button",className:"btn btn-info",onClick:function(){e.show()}},"Update"),r.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:function(){e.parentProps.delete()}},"Delete"))))}function N(e){return r.a.createElement("tr",null,r.a.createElement("th",null,e.parentProps.index+1),r.a.createElement("td",null,r.a.createElement("input",{type:"date",className:"form-control form-control-sm",name:"on_date",onChange:e.handleChange,defaultValue:e.parentProps.expense.on_date})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control form-control-sm",name:"description",onChange:e.handleChange,placeholder:"Please write a description",defaultValue:e.parentProps.expense.description})),r.a.createElement("td",null,r.a.createElement("input",{type:"number",className:"form-control form-control-sm",name:"amount",defaultValue:e.parentProps.expense.amount,onChange:function(t){t.target.value>=0&&e.handleChange(t)},min:"0"})),r.a.createElement("td",null,r.a.createElement("div",{className:"btn-group btn-group-sm d-flex"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(t){e.parentProps.update(e.parentState.expense),e.show()},disabled:void 0!==e.parentState.text&&(e.parentState.amount<=0||""===e.parentState.date||e.parentState.text.length<3)},"Confirm"))))}var w=[],k=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state=new b,n.delete=n.delete.bind(Object(m.a)(n)),n.update=n.update.bind(Object(m.a)(n)),n.getExpenses=n.getExpenses.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getExpenses()}},{key:"getExpenses",value:function(){var e=this;fetch(C("Expenses",this.state,"on_date",E.Descending)).then((function(e){return e.json()})).then((function(t){w=t,e.setState(e.state)})).catch(console.log)}},{key:"delete",value:function(e){var t=this;window.confirm("Are you sure ?")&&fetch(j("Expenses",e),{method:"delete"}).then((function(e){return e.json()})).then((function(e){w=e,t.getExpenses()})).catch(console.log)}},{key:"update",value:function(e){var t=this;fetch(j("Expenses",e.objectId),{method:"put",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){w=e,t.getExpenses()})).catch(console.log)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex"},r.a.createElement("h3",{className:"text-danger"},"Expenses"),r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{className:"float-right"},r.a.createElement(h.DateRangePicker,{startDate:this.state.startDate,startDateId:"expense_startDate_id",endDate:this.state.endDate,endDateId:"expense_endDate_id",onDatesChange:function(t){var n=t.startDate,a=t.endDate;return e.setState({startDate:n,endDate:a})},focusedInput:this.state.focusedInput,onFocusChange:function(t){return e.setState({focusedInput:t})},isOutsideRange:function(){return!1},onClose:function(){return setTimeout((function(){return e.getExpenses()}),100)}})))),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-hover table-bordered"},r.a.createElement("thead",{className:"bg-danger text-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,w.map((function(t,n){return r.a.createElement(D,{key:n,index:n,expense:t,delete:function(){return e.delete(t.objectId)},update:function(t){return e.update(t)}})}))),r.a.createElement("tfoot",null,r.a.createElement(x,{getExpenses:this.getExpenses})))))}}]),t}(r.a.Component),I=(n(233),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Pocket Friend"),r.a.createElement("p",{className:"lead"},"Your pocket's best friend!")))}}]),t}(a.Component)),P=function e(){Object(l.a)(this,e),this.on_date=(new Date).toISOString().split("T")[0],this.description="",this.amount=0},_=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(O.a)({},e.target.name,"amount"===e.target.name?parseFloat(e.target.value):e.target.value))},n.state=new P,n.handleChange=n.handleChange.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.create()}},{key:"create",value:function(){var e=this;fetch(v("Incomes"),{method:"post",body:JSON.stringify(this.state)}).then((function(e){return e.json()})).then((function(t){e.setState(new P),e.props.getIncomes()})).catch(console.log)}},{key:"render",value:function(){var e=this;return r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center"},r.a.createElement("button",{type:"submit",className:"btn btn-success btn-sm btn-block",onClick:this.handleSubmit,disabled:this.state.amount<=0||""===this.state.on_date||this.state.description.length<3},"+")),r.a.createElement("td",null,r.a.createElement("input",{type:"date",className:"form-control form-control-sm",name:"on_date",onChange:this.handleChange,defaultValue:this.state.on_date})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control form-control-sm",name:"description",placeholder:"Please write a description",value:this.state.description,onChange:this.handleChange})),r.a.createElement("td",null,r.a.createElement("input",{type:"number",className:"form-control form-control-sm",name:"amount",value:this.state.amount,onChange:function(t){t.target.value>=0&&e.handleChange(t)},step:"0.01",min:"0.01"})),r.a.createElement("td",null))}}]),t}(r.a.Component),F=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,r=t.value,o=n.state.income;o[a]="amount"===a?parseFloat(r):r,n.setState({income:o})},n.state={income:n.props.income,showUpdate:!1},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"changeShowUpdate",value:function(){this.setState({showUpdate:!this.state.showUpdate})}},{key:"render",value:function(){var e=this;return this.state.showUpdate?r.a.createElement(A,{parentProps:this.props,parentState:this.state,handleChange:function(t){return e.handleChange(t)},show:function(){return e.changeShowUpdate()}}):r.a.createElement(U,{parentProps:this.props,show:function(){return e.changeShowUpdate()}})}}]),t}(r.a.Component);function U(e){return r.a.createElement("tr",null,r.a.createElement("th",null,e.parentProps.index+1),r.a.createElement("td",null,new Date(e.parentProps.income.on_date).toDateString()),r.a.createElement("td",null,e.parentProps.income.description),r.a.createElement("td",null,"\u20ba",e.parentProps.income.amount),r.a.createElement("td",null,r.a.createElement("div",{className:"btn-group btn-group-sm d-flex"},r.a.createElement("button",{type:"button",className:"btn btn-info",onClick:function(){e.show()}},"Update"),r.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:function(){e.parentProps.delete()}},"Delete"))))}function A(e){return r.a.createElement("tr",null,r.a.createElement("th",null,e.parentProps.index+1),r.a.createElement("td",null,r.a.createElement("input",{type:"date",className:"form-control form-control-sm",name:"on_date",onChange:e.handleChange,defaultValue:e.parentProps.income.on_date})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control form-control-sm",name:"description",onChange:e.handleChange,placeholder:"Please write a description",defaultValue:e.parentProps.income.description})),r.a.createElement("td",null,r.a.createElement("input",{type:"number",className:"form-control form-control-sm",name:"amount",defaultValue:e.parentProps.income.amount,onChange:function(t){t.target.value>=0&&e.handleChange(t)},min:"0"})),r.a.createElement("td",null,r.a.createElement("div",{className:"btn-group btn-group-sm d-flex"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(t){e.parentProps.update(e.parentState.income),e.show()},disabled:void 0!==e.parentState.text&&(e.parentState.amount<=0||""===e.parentState.date||e.parentState.text.length<3)},"Confirm"))))}var V=[],J=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state=new b,n.delete=n.delete.bind(Object(m.a)(n)),n.update=n.update.bind(Object(m.a)(n)),n.getIncomes=n.getIncomes.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getIncomes()}},{key:"getIncomes",value:function(){var e=this;fetch(C("Incomes",this.state,"on_date",E.Descending)).then((function(e){return e.json()})).then((function(t){V=t,e.setState(e.state)})).catch(console.log)}},{key:"delete",value:function(e){var t=this;window.confirm("Are you sure ?")&&fetch(j("Incomes",e),{method:"delete"}).then((function(e){return e.json()})).then((function(e){V=e,t.getIncomes()})).catch(console.log)}},{key:"update",value:function(e){var t=this;fetch(j("Incomes",e.objectId),{method:"put",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){V=e,t.getIncomes()})).catch(console.log)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex"},r.a.createElement("h3",{className:"text-success"},"Incomes"),r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{className:"float-right"},r.a.createElement(h.DateRangePicker,{startDate:this.state.startDate,startDateId:"your_unique_start_date_id",endDate:this.state.endDate,endDateId:"your_unique_end_date_id",onDatesChange:function(t){var n=t.startDate,a=t.endDate;return e.setState({startDate:n,endDate:a})},focusedInput:this.state.focusedInput,onFocusChange:function(t){return e.setState({focusedInput:t})},isOutsideRange:function(){return!1},onClose:function(){return setTimeout((function(){return e.getIncomes()}),100)}})))),r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-hover table-bordered"},r.a.createElement("thead",{className:"bg-success text-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,V.map((function(t,n){return r.a.createElement(F,{key:n,index:n,income:t,delete:function(){return e.delete(t.objectId)},update:function(t){return e.update(t)}})}))),r.a.createElement("tfoot",null,r.a.createElement(_,{getIncomes:this.getIncomes})))))}}]),t}(r.a.Component);n(234);var B=function(){return r.a.createElement("div",{id:"main",className:"container"},r.a.createElement(I,null),r.a.createElement("div",{className:"col-lg-12"},r.a.createElement(J,null),r.a.createElement(k,null)))};n(235);c.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.147e2c5b.chunk.js.map