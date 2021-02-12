(function(t){function e(e){for(var n,i,r=e[0],c=e[1],d=e[2],l=0,p=[];l<r.length;l++)i=r[l],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},s={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("85ec")},"10e2":function(t,e,o){"use strict";o("b97f")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[t._v(" Welcome to Todo-ista "),o("CreateTodo",{on:{"create-todo":t.createTodo}}),o("TodoList",{attrs:{todos:t.todos}})],1)},a=[],i=(o("fb6a"),o("96cf"),o("1da1")),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("div",[o("p",{staticClass:"tasks"},[t._v("Completed Tasks: "+t._s(t.todos.filter((function(t){return"done"===t.status})).length))]),o("p",{staticClass:"tasks"},[t._v("Pending Tasks: "+t._s(t.todos.filter((function(t){return"pending"===t.status})).length))]),t._l(t.todos,(function(e,n,s){return o("Todo",{key:s,attrs:{todo:e},on:{"complete-todo":t.completeTodo,"update:todo":function(t){e=t}}})}))],2)])},c=[],d=(o("c975"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo"},[o("div",{staticClass:"ui centered card"},[o("div",{staticClass:"header"},[t._v(" "+t._s(t.todo.title)+" ")]),o("div",{staticClass:"meta"},[t._v(" "+t._s(t.todo.project)+" ")])]),o("div",{staticClass:"content"},[o("div",{staticClass:"field"},[o("label",[t._v("Description: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.desc,expression:"todo.desc"}],attrs:{type:"text"},domProps:{value:t.todo.desc},on:{input:function(e){e.target.composing||t.$set(t.todo,"desc",e.target.value)}}})]),o("div",{staticClass:"field"},[o("label",[t._v("Due on: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.date,expression:"todo.date"}],attrs:{type:"text"},domProps:{value:t.todo.date},on:{input:function(e){e.target.composing||t.$set(t.todo,"date",e.target.value)}}})]),o("div",{staticClass:"field"},[o("label",[t._v("Status: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.status,expression:"todo.status"}],attrs:{type:"text"},domProps:{value:t.todo.status},on:{input:function(e){e.target.composing||t.$set(t.todo,"status",e.target.value)}}})])])])}),u=[],l={props:["todo"],methods:{completeTodo:function(t){this.$emit("complete-todo",t)}}},p=l,f=(o("10e2"),o("2877")),v=Object(f["a"])(p,d,u,!1,null,"512a40a4",null),m=v.exports,h={props:["todos"],components:{Todo:m},methods:{completeTodo:function(t){var e=this.todos.indexOf(t);this.todos[e].done=!0}}},b=h,g=(o("c0dd"),Object(f["a"])(b,r,c,!1,null,"02e92b48",null)),x=g.exports,C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ui basic content center aligned segment"},[o("button",{directives:[{name:"show",rawName:"v-show",value:!t.isCreating,expression:"!isCreating"}],staticClass:"ui basic button icon",on:{click:t.openForm}},[o("i",{staticClass:"plus icon"},[t._v("+ NEW")])]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isCreating,expression:"isCreating"}],staticClass:"ui centered card"},[o("div",{staticClass:"content"},[o("div",{staticClass:"ui form"},[o("div",{staticClass:"field"},[o("label",[t._v("Task Description: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.descText,expression:"descText"}],attrs:{type:"text"},domProps:{value:t.descText},on:{input:function(e){e.target.composing||(t.descText=e.target.value)}}})]),o("div",{staticClass:"field"},[o("label",[t._v("Due on: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.dateText,expression:"dateText"}],attrs:{type:"text",placeholder:"YYYY-MM-DD"},domProps:{value:t.dateText},on:{input:function(e){e.target.composing||(t.dateText=e.target.value)}}})]),o("div",{staticClass:"ui two button attached buttons"},[o("button",{staticClass:"ui basic blue button",on:{click:t.sendForm}},[t._v(" Create ")]),o("button",{staticClass:"ui basic red button",on:{click:t.closeForm}},[t._v(" Cancel ")])])])])])])},T=[],_={data:function(){return{descText:"",dateText:"",isCreating:!1}},methods:{openForm:function(){this.isCreating=!0},closeForm:function(){this.isCreating=!1},sendForm:function(){if(this.descText.length>0){var t=this.descText,e=this.dateText;this.$emit("create-todo",{taskDesc:t,dueDate:e,status:"pending"}),this.descText="",this.dateText="",this.isCreating=!1}}}},w=_,y=Object(f["a"])(w,C,T,!1,null,null,null),O=y.exports,k=o("bc3a"),j=o.n(k),P={name:"App",components:{TodoList:x,CreateTodo:O},data:function(){return{todos:[]}},methods:{createTodo:function(t){this.todos.push(t)}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("https://todo-st.herokuapp.com/api/alldata");case 3:for(o=e.sent,n=o.data,s=0;s<n.length;s++)n[s].date=n[s].date.slice(0,10);t.todos=n,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},$=P,D=(o("034f"),Object(f["a"])($,s,a,!1,null,null,null)),N=D.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(N)}}).$mount("#app")},"85ec":function(t,e,o){},b97f:function(t,e,o){},c0dd:function(t,e,o){"use strict";o("f1bc")},f1bc:function(t,e,o){}});
//# sourceMappingURL=app.b59d2d97.js.map