(function(e){function t(t){for(var n,s,i=t[0],a=t[1],d=t[2],u=0,l=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&l.push(r[s][0]),r[s]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);m&&m(t);while(l.length)l.shift()();return c.push.apply(c,d||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,s=1;s<o.length;s++){var i=o[s];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},s={app:0},r={app:0},c=[];function i(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-6daa5491":"e15faf38"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var t=[],o={"chunk-6daa5491":1};s[e]?t.push(s[e]):0!==s[e]&&o[e]&&t.push(s[e]=new Promise((function(t,o){for(var n="css/"+({}[e]||e)+"."+{"chunk-6daa5491":"7e948051"}[e]+".css",r=a.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var d=c[i],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===n||u===r))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],u=d.getAttribute("data-href");if(u===n||u===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var n=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete s[e],m.parentNode.removeChild(m),o(c)},m.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){s[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=c);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=i(e);var l=new Error;d=function(t){u.onerror=u.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,o[1](l)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/todolist/",a.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var m=u;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),s=o.n(n);s.a},"0eb4":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"toast"},[o("div",{staticClass:"buttons"},[o("div",[e._v(e._s(e.message))]),o("button",{on:{click:function(t){return e.isRemove("yes")}}},[e._v("Yes")]),o("button",{on:{click:function(t){return e.isRemove("no")}}},[e._v("No")])])])},s=[],r={methods:{isRemove:function(e){this.$emit("closeToast",e)}},computed:{message:function(){return this.$store.getters.getMessage}}},c=r,i=(o("e36a"),o("2877")),a=Object(i["a"])(c,n,s,!1,null,"8ba3fa08",null);t["a"]=a.exports},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},r=[],c={},i=c,a=(o("034f"),o("2877")),d=Object(a["a"])(i,s,r,!1,null,null,null),u=d.exports,l=(o("d3b7"),o("8c4f")),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Test SPA app for todos.")]),e.todoList.length?o("div",[e._l(e.todoList,(function(t,n){return o("div",{key:n,staticClass:"todo-container"},[o("div",{staticClass:"todo-item"},[o("h3",{staticClass:"todo-title"},[e._v("Todo №"+e._s(n+1)+": "+e._s(t.title))]),t.todoItems[0]?o("div",{class:{lineThrough:t.todoItems[0].checked}},[e._v(e._s(t.todoItems[0].item)+" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoItems[0].checked,expression:"todo.todoItems[0].checked"}],attrs:{type:"checkbox",disabled:""},domProps:{checked:Array.isArray(t.todoItems[0].checked)?e._i(t.todoItems[0].checked,null)>-1:t.todoItems[0].checked},on:{change:function(o){var n=t.todoItems[0].checked,s=o.target,r=!!s.checked;if(Array.isArray(n)){var c=null,i=e._i(n,c);s.checked?i<0&&e.$set(t.todoItems[0],"checked",n.concat([c])):i>-1&&e.$set(t.todoItems[0],"checked",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(t.todoItems[0],"checked",r)}}})]):e._e(),t.todoItems[1]?o("div",{class:{lineThrough:t.todoItems[1].checked}},[e._v(e._s(t.todoItems[1].item)+" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoItems[1].checked,expression:"todo.todoItems[1].checked"}],attrs:{type:"checkbox",disabled:""},domProps:{checked:Array.isArray(t.todoItems[1].checked)?e._i(t.todoItems[1].checked,null)>-1:t.todoItems[1].checked},on:{change:function(o){var n=t.todoItems[1].checked,s=o.target,r=!!s.checked;if(Array.isArray(n)){var c=null,i=e._i(n,c);s.checked?i<0&&e.$set(t.todoItems[1],"checked",n.concat([c])):i>-1&&e.$set(t.todoItems[1],"checked",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(t.todoItems[1],"checked",r)}}})]):e._e(),t.todoItems[2]?o("div",{class:{lineThrough:t.todoItems[2].checked}},[e._v(e._s(t.todoItems[2].item)+" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoItems[2].checked,expression:"todo.todoItems[2].checked"}],attrs:{type:"checkbox",disabled:""},domProps:{checked:Array.isArray(t.todoItems[2].checked)?e._i(t.todoItems[2].checked,null)>-1:t.todoItems[2].checked},on:{change:function(o){var n=t.todoItems[2].checked,s=o.target,r=!!s.checked;if(Array.isArray(n)){var c=null,i=e._i(n,c);s.checked?i<0&&e.$set(t.todoItems[2],"checked",n.concat([c])):i>-1&&e.$set(t.todoItems[2],"checked",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(t.todoItems[2],"checked",r)}}})]):e._e(),t.todoItems[3]?o("div",[e._v("...")]):e._e()]),o("span",{staticClass:"buttonSpan"},[o("button",{staticClass:"editTodo title",attrs:{"data-title":"Edit this todo"},on:{click:function(t){return e.editTodo(n)}}}),e._v(" "),o("button",{staticClass:"removeTodo title",attrs:{"data-title":"Delete this todo"},on:{click:function(t){return e.removeTodoMessage(n)}}})])])})),e.removeId?o("Toast",{on:{closeToast:e.closeToast}}):e._e()],2):o("div",[o("a",{on:{click:e.addNewTodo}},[e._v("You have no todos! Please, click here or on bluebell...")])]),o("button",{staticClass:"addTodo title",attrs:{"data-title":"Add new todo"},on:{click:e.addNewTodo}})])},h=[],f=(o("a9e3"),o("0eb4")),v={name:"Home",components:{Toast:f["a"]},data:function(){return{removeId:0}},computed:{todoList:function(){return this.$store.getters.getTodoList}},methods:{addNewTodo:function(){this.$store.commit("addNewTodo"),this.$router.push("/change-list?query=".concat(this.todoList.length-1))},editTodo:function(e){this.$router.push("/change-list?query=".concat(e))},removeTodoMessage:function(e){this.removeId=e+"",this.$store.commit("message",e)},closeToast:function(e){"yes"===e&&this.$store.commit("removeTodo",Number(this.removeId)),this.removeId=0}}},p=v,g=(o("cccb"),Object(a["a"])(p,m,h,!1,null,null,null)),k=g.exports;n["a"].use(l["a"]);var y=[{path:"/",name:"Home",component:k},{path:"/change-list",name:"changeList",component:function(){return o.e("chunk-6daa5491").then(o.bind(null,"397d"))}}],b=new l["a"]({mode:"history",base:"/todolist/",routes:y}),I=b,_=o("2f62"),w=o("0e44"),T=(o("a434"),{state:{todoList:[]},mutations:{addNewTodo:function(e){e.todoList.push({title:"",todoItems:[{item:"",checked:!1}]})},saveTodo:function(e,t){e.todoList.splice(t.query,1,t.newItem)},removeTodo:function(e,t){e.todoList.splice(t,1)},addNewTodoItem:function(e,t){e.todoList[t].todoItems.push({item:"",checked:!1})},removeTodoItem:function(e,t){e.todoList[t.query].todoItems.splice(t.removeId,1)}},getters:{getTodoList:function(e){return e.todoList}}}),A={state:{message:""},mutations:{message:function(e,t){e.message="cancelEditing"===t?"Do you really want to cancel editing and go to Home page? Unsaved data will be deleted.":"deleteThisTodo"===t?"Do you realy want to remove this todo and go to Home page?":"Do you realy want to remove todo №".concat(t+1,"?")}},getters:{getMessage:function(e){return e.message}}};n["a"].use(_["a"]);var $=new _["a"].Store({strict:!1,plugins:[Object(w["a"])()],mutations:{},getters:{},actions:{},modules:{todoActions:T,messages:A}}),L=o("9483");Object(L["a"])("".concat("/todolist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),n["a"].config.productionTip=!1,new n["a"]({router:I,store:$,render:function(e){return e(u)}}).$mount("#app")},"5ced":function(e,t,o){},"7f6c":function(e,t,o){},"85ec":function(e,t,o){},cccb:function(e,t,o){"use strict";var n=o("5ced"),s=o.n(n);s.a},e36a:function(e,t,o){"use strict";var n=o("7f6c"),s=o.n(n);s.a}});
//# sourceMappingURL=app.e384f230.js.map