(function(e){function t(t){for(var a,o,i=t[0],c=t[1],l=t[2],u=0,v=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(v.length)v.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/sample-app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-app-bar",{attrs:{app:"",color:"indigo"}},[n("v-toolbar-title",[e._v("Calendar")])],1),n("v-content",[n("v-container",{staticClass:"fill-height"},[n("v-row",[n("v-col",{attrs:{justify:"center"}},[n("router-view")],1)],1)],1)],1)],1)],1)},s=[],o=n("2877"),i=n("6544"),c=n.n(i),l=n("7496"),d=n("40dc"),u=n("62ad"),v=n("a523"),p=n("a75b"),m=n("0fd9"),f=n("2a7f"),h={},g=Object(o["a"])(h,r,s,!1,null,null,null),b=g.exports;c()(g,{VApp:l["a"],VAppBar:d["a"],VCol:u["a"],VContainer:v["a"],VContent:p["a"],VRow:m["a"],VToolbarTitle:f["a"]});n("45fc");var E=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("MyCalendar")],1)},w=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-btn",{on:{click:function(t){return e.setToday()}}},[e._v("Today")]),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.prev}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-chevron-left")])],1),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.next}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-chevron-right")])],1),n("v-toolbar-title",[e._v(e._s(e.title))]),n("v-spacer"),n("v-btn",{attrs:{color:"red"},on:{click:function(t){return e.showAddEventDialog()}}},[e._v("Add Events")])],1)],1),n("addEventDialog",{ref:"dialog",on:{update:e.getEvents}}),n("v-sheet",{attrs:{height:"700"}},[n("v-calendar",{ref:"calendar",attrs:{now:e.today,value:e.today,events:e.events,type:"week"},on:{"click:event":e.showEvent,change:e.updateRange},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,"offset-x":""},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("form",{attrs:{id:"eventInfo"}},[n("v-toolbar",{attrs:{color:e.primary}},[n("v-btn",{attrs:{icon:"",disabled:!e.editable},on:{click:function(t){e.editing=!e.editing}}},[e.editing?n("v-icon",[e._v("mdi-check-bold")]):n("v-icon",[e._v("mdi-pencil")])],1),e.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedEvent.name,expression:"selectedEvent.name"}],staticClass:"updateform",attrs:{type:"text",id:"eventTitle",name:"eventTitle"},domProps:{value:e.selectedEvent.name},on:{input:function(t){t.target.composing||e.$set(e.selectedEvent,"name",t.target.value)}}}):n("v-toolbar-title",{domProps:{innerHTML:e._s(e.selectedEvent.name)},on:{dblclick:function(t){e.editing=!e.editing}}}),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.deleteEvent()}}},[n("v-icon",[e._v("mdi-trash-can-outline")])],1)],1),n("v-card-text",[n("label",{attrs:{for:""}},[e._v("ユーザ：")]),n("span",{domProps:{innerHTML:e._s(e.selectedEvent.userName)}})]),n("v-card-text",[n("label",{attrs:{for:"eventDescription"}},[e._v("詳細")]),n("br"),e.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedEvent.description,expression:"selectedEvent.description"}],staticClass:"updateform",attrs:{type:"textarea",id:"eventDescription",name:"eventDescription"},domProps:{value:e.selectedEvent.description},on:{input:function(t){t.target.composing||e.$set(e.selectedEvent,"description",t.target.value)}}}):n("span",{domProps:{innerHTML:e._s(e.selectedEvent.description)}})]),n("v-card-text",[n("label",{attrs:{for:"eventStart"}},[e._v("開始")]),e.editing?n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedEvent.start,expression:"selectedEvent.start"}],staticClass:"updateform",attrs:{type:"datetime-local",id:"eventStart",name:"eventStart"},domProps:{value:e.selectedEvent.start},on:{input:function(t){t.target.composing||e.$set(e.selectedEvent,"start",t.target.value)}}})]):n("span",{domProps:{innerHTML:e._s(e.selectedEvent.start)}})]),n("v-card-text",[n("label",{attrs:{for:"eventEnd"}},[e._v("終了")]),e.editing?n("span",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedEvent.end,expression:"selectedEvent.end"}],staticClass:"updateform",attrs:{type:"datetime-local",id:"eventEnd",name:"eventEnd"},domProps:{value:e.selectedEvent.end},on:{input:function(t){t.target.composing||e.$set(e.selectedEvent,"end",t.target.value)}}})]):n("span",{domProps:{innerHTML:e._s(e.selectedEvent.end)}})]),n("v-card-actions",[e.editing?n("v-btn",{on:{click:function(t){return e.doneEdit()}}},[e._v("Done")]):e._e(),n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(t){e.selectedOpen=!1}}},[e._v("Cancel")])],1)],1)])],1)],1)],1)],1)},_=[],T=(n("a4d3"),n("e01a"),n("99af"),n("4160"),n("c975"),n("a434"),n("b0c0"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{attrs:{color:"indigo"}},[n("span",{staticClass:"headline"},[e._v("Input Event Info")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"title",required:""},model:{value:e.eventTitle,callback:function(t){e.eventTitle=t},expression:"eventTitle"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{label:"description","row-height":"24px"},model:{value:e.eventDescription,callback:function(t){e.eventDescription=t},expression:"eventDescription"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{type:"datetime-local",label:"start",step:"900",required:""},model:{value:e.eventStart,callback:function(t){e.eventStart=t},expression:"eventStart"}})],1),n("v-col",[n("v-text-field",{attrs:{type:"datetime-local",label:"end",step:"900",required:""},model:{value:e.eventEnd,callback:function(t){e.eventEnd=t},expression:"eventEnd"}})],1)],1),n("v-btn",{attrs:{small:""},on:{click:function(t){return e.submitEvent()}}},[e._v("Done")]),n("v-btn",{attrs:{small:""},on:{click:function(t){return e.close()}}},[e._v("Cancel")])],1)],1)],1)],1)],1)}),V=[],k=(n("d3b7"),n("07ac"),n("bc3a")),C=n.n(k),O=n("2f62");a["a"].use(O["a"]);var I={strict:!1,namespaced:!0,state:{email:"",userId:"",isLoggedIn:!1},getters:{email:function(e){return e.email},userId:function(e){return e.userId},isLoggedIn:function(e){return e.isLoggedIn}},mutations:{set:function(e,t){e.email=t.user.email,e.userId=t.user.id,e.isLoggedIn=!0},clear:function(e){e.email="",e.isLoggedIn=!1}},actions:{login:function(e,t){return j.post("/auth/jwt/create/",{email:t.email,password:t.password}).then((function(t){return console.log(t),localStorage.setItem("access",t.data.access),e.dispatch("reload").then((function(e){return e}))}))},logout:function(e){localStorage.removeItem("access"),e.commit("clear")},reload:function(e){return j.get("/auth/users/me/").then((function(t){var n=t.data;return e.commit("set",{user:n}),n}))}}},$={strict:!1,namespaced:!0,state:{error:"",warnings:[],info:[]},getters:{error:function(e){return e.error},warnings:function(e){return e.warnings},info:function(e){return e.info}},mutations:{set:function(e,t){t.error&&(e.error=t.error),t.warnings&&(e.warnings=t.warnings),t.info&&(e.info=t.info)},clear:function(e){e.error="",e.warnings=[],e.info=""}},actions:{setErrorMessage:function(e,t){e.commit("clear"),e.commit("set",{error:t.message})},setWarningsMessage:function(e,t){e.commit("clear"),e.commit("set",{warnings:t.message})},setInfoMessage:function(e,t){e.commit("clear"),e.commit("set",{info:t.message})},clearMessages:function(e){e.commit("clear")}}},S=new O["a"].Store({modules:{auth:I,message:$}}),M=S,P=C.a.create({baseURL:"https://mycalendar-c.herokuapp.com/api/v1/",timeout:5e3,headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"}});P.interceptors.request.use((function(e){M.dispatch("message/clearMessages");var t=localStorage.getItem("access");return t?(e.headers.Authorization="JWT "+t,e):e}),(function(e){return Promise.reject(e)})),P.interceptors.response.use((function(e){return e}),(function(e){var t,n=e.response?e.response.status:500;if(400===n){var a=[].concat.apply([],Object.values(e.response.data));M.dispatch("message/setWarningMessages",{messages:a})}else if(401===n){var r=localStorage.getItem("access");t=null!=r?"ログイン有効期限切れ":"認証エラー",M.dispatch("auth/logout"),M.dispatch("message/setErrorMessage",{message:t})}else 403===n?(t="権限エラーです",M.dispatch("message/setErrorMessage",{message:t})):(t="想定外のエラーです",M.dispatch("message/setErrorMessage",{message:t}));return Promise.reject(e)}));var j=P,D={data:function(){return{dialog:!1,eventTitle:"",eventDescription:"",eventStart:null,eventEnd:null}},props:["events"],methods:{open:function(){this.dialog=!0},close:function(){this.dialog=!1},submitEvent:function(){var e={title:this.eventTitle,description:this.eventDescription,start_at:this.eventStart,end_at:this.eventEnd};j.post("events/",e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),this.eventTitle="",this.eventDescription="",this.eventStart=null,this.eventEnd=null,this.dialog=!1,this.$emit("update")}}},L=D,q=n("8336"),R=n("b0af"),A=n("99d9"),F=n("169a"),H=n("8654"),N=n("a844"),B=Object(o["a"])(L,T,V,!1,null,null,null),W=B.exports;c()(B,{VBtn:q["a"],VCard:R["a"],VCardText:A["b"],VCardTitle:A["c"],VCol:u["a"],VContainer:v["a"],VDialog:F["a"],VRow:m["a"],VTextField:H["a"],VTextarea:N["a"]});var J={data:function(){return{today:(new Date).toISOString().substr(0,10),focus:"",events:[],selectedEvent:{},selectedElement:null,selectedOpen:!1,editing:!1,editable:!1,dialog:!1,start:null,end:null}},components:{addEventDialog:W},computed:{title:function(){var e=this.start,t=this.end;if(!e||!t)return"";this.monthFormatter(e),this.monthFormatter(t);var n=e.month+"月",a=t.month+"月",r=n===a?"":a,s=e.year+"年",o=t.year+"年",i=s===o?"":o,c=e.day+"日",l=t.day+"日";return"".concat(n," ").concat(c," ").concat(s," - ").concat(r," ").concat(l," ").concat(i)},monthFormatter:function(){return this.$refs.calendar.getFormatter({timeZone:"UTC+09:00",month:"long"})}},mounted:function(){this.$refs.calendar.checkChange(),this.$refs.calendar.scrollToTime("08:00"),this.getEvents()},methods:{setToday:function(){this.focus=this.today},getEvents:function(){var e=[];j({method:"get",url:"/events/"}).then((function(t){t.data.forEach((function(t){e.push({id:t.id,name:t.title,description:t.description,userId:t.user.id,userName:t.user.display_name,start:t.start_at.substr(0,16),end:t.end_at.substr(0,16)})}))})).catch((function(e){return console.log(e)})),this.events=e},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(e){var t=this,n=e.nativeEvent,a=e.event,r=function(){t.selectedEvent=a,t.selectedElement=n.target,t.editing=!1,t.canEdit(),setTimeout((function(){return t.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(r,10)):r(),n.stopPropagation()},showAddEventDialog:function(){this.$refs.dialog.open()},canEdit:function(){console.log(this.$store.getters["auth/userId"]),console.log(this.selectedEvent.userId),this.$store.getters["auth/userId"]===this.selectedEvent.userId?this.editable=!0:this.editable=!1},doneEdit:function(){var e={title:this.selectedEvent.name,description:this.selectedEvent.description,start_at:this.selectedEvent.start,end_at:this.selectedEvent.end};j.put("events/".concat(this.selectedEvent.id,"/"),e).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),this.editable=!1},deleteEvent:function(){var e=this.selectedEvent,t=this.events,n=t.indexOf((function(t){return t.id===e.id}));j.delete("events/".concat(this.selectedEvent.id,"/")).then((function(){return t.splice(n,1)})).catch((function(e){return console.log(e)})),this.selectedOpen=!1},updateRange:function(e){var t=e.start,n=e.end;this.start=t,this.end=n}}},U=J,X=(n("f258"),n("a4f6")),z=n("132d"),Z=n("e449"),G=n("8dd9"),K=n("2fa4"),Q=n("71d9"),Y=Object(o["a"])(U,y,_,!1,null,"4a2b5ecc",null),ee=Y.exports;c()(Y,{VBtn:q["a"],VCalendar:X["a"],VCard:R["a"],VCardActions:A["a"],VCardText:A["b"],VCol:u["a"],VIcon:z["a"],VMenu:Z["a"],VRow:m["a"],VSheet:G["a"],VSpacer:K["a"],VToolbar:Q["a"],VToolbarTitle:f["a"]});var te={name:"HomePage",components:{MyCalendar:ee},data:function(){return{}}},ne=te,ae=Object(o["a"])(ne,x,w,!1,null,null,null),re=ae.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{outlined:""}},[n("v-card-text",[n("v-form",{ref:"LoginForm"},[n("v-text-field",{attrs:{label:"E-mail",required:""},model:{value:e.model.email,callback:function(t){e.$set(e.model,"email",t)},expression:"model.email"}}),n("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1)],1),n("v-btn",{attrs:{block:"",loading:e.loading},on:{click:e.login}},[e._v("ログイン")])],1)},oe=[],ie=(n("ac1f"),n("5319"),{data:function(){return{loading:!1,emailRules:[],passwordRules:[],model:{email:"",password:""}}},methods:{login:function(){var e=this;this.$refs.LoginForm.validate()&&this.$store.dispatch("auth/login",{email:this.model.email,password:this.model.password}).then((function(){e.$store.dispatch("message/setInfoMessage",{message:"ログインしました"});var t=e.$route.query.next||"/";e.$router.replace(t)}))}}}),ce=ie,le=n("4bd4"),de=Object(o["a"])(ce,se,oe,!1,null,null,null),ue=de.exports;c()(de,{VBtn:q["a"],VCard:R["a"],VCardText:A["b"],VForm:le["a"],VTextField:H["a"]}),a["a"].use(E["a"]);var ve=[{path:"/",name:"homepage",component:re,meta:{requiresAuth:!0}},{path:"/login",name:"loginpage",component:ue},{path:"*",redirect:"/"}],pe=new E["a"]({mode:"history",base:"/sample-app/",routes:ve});function me(e,t,n){n({path:"/login",query:{next:e.fullPath}})}pe.beforeEach((function(e,t,n){var a=M.getters["auth/isLoggedIn"],r=localStorage.getItem("access");e.matched.some((function(e){return e.meta.requiresAuth}))?a?n():null!=r?M.dispatch("auth/reload").then((function(){n()})).catch((function(){me(e,t,n)})):me(e,t,n):n()}));var fe=pe,he=n("f309");a["a"].use(he["a"]);var ge=new he["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:fe,store:M,vuetify:ge,render:function(e){return e(b)}}).$mount("#app")},b5a2:function(e,t,n){},f258:function(e,t,n){"use strict";var a=n("b5a2"),r=n.n(a);r.a}});
//# sourceMappingURL=app.ffcfdfd6.js.map