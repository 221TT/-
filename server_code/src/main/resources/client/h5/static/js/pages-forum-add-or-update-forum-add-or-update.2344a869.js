(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-forum-add-or-update-forum-add-or-update"],{"073b":function(e,t,n){"use strict";n.r(t);var i=n("e2f6"),r=n("96a8");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("eebd");var o,s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"03d41ad8",null,!1,i["a"],o);t["default"]=u.exports},1635:function(e,t,n){var i=n("7026");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("371a90c5",i,!0,{sourceMap:!1,shadowMode:!1})},4280:function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var r=i(n("3b8d")),a=i(n("064f")),o={data:function(){return{forum:{content:"",id:"",title:"",isdone:"开放",parentid:0},index:0,options:["开放","关闭"],username:"",user:{}}},components:{xiaEditor:a.default},onLoad:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(t){var n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:if(i=e.sent,this.user=i.data,"yonghu"==n&&(this.username=this.user.zhanghao),!t.id){e.next=12;break}return this.id=t.id,e.next=10,this.$api.info("forum",this.id);case 10:r=e.sent,this.forum=r.data;case 12:this.styleChange();case 13:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{contentChange:function(e){this.forum.content=e},styleChange:function(){this.$nextTick((function(){}))},onSubmitTap:function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.forum.username=this.username,!this.id){e.next=6;break}return e.next=4,this.$api.update("forum",this.forum);case 4:e.next=8;break;case 6:return e.next=8,this.$api.save("forum",this.forum);case 8:this.$utils.msgBack("操作成功");case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setIsDoneTap:function(e){this.index=e.target.value,this.forum.isdone=this.options[this.index]}}};t.default=o},7026:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-03d41ad8]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},"96a8":function(e,t,n){"use strict";n.r(t);var i=n("4280"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},e2f6:function(e,t,n){"use strict";var i={"xia-editor":n("064f").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{style:{minHeight:"100vh",width:"100%",padding:"10px 0 0 0",position:"relative",background:"#fff",height:"auto"}},[n("v-uni-form",{style:{padding:"12px 12px 24px 12px",margin:"10px 10px 10px 10px",borderRadius:"10px",background:"#ffffff90",display:"block",width:"calc(100% - 20px)",height:"auto"}},[n("v-uni-view",{style:{padding:"6px 0 6px 0",margin:"0 0 12px 0",borderColor:"#e6e6e6",alignItems:"center",borderWidth:"1px 0 1px 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-input",{style:{border:"0",padding:"0px 12px 0px 12px",margin:"0 0 0 0",color:"#000",borderRadius:"4px",flex:"1",background:"#ffffff00",fontSize:"14px",height:"40px"},attrs:{placeholder:"标题"},model:{value:e.forum.title,callback:function(t){e.$set(e.forum,"title",t)},expression:"forum.title"}})],1),n("v-uni-view",{style:{padding:"6px 0 6px 0",margin:"0 0 12px 0",borderColor:"#e6e6e6",alignItems:"center",borderWidth:"1px 0 1px 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.index,range:e.options},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.setIsDoneTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-picker-type",style:{width:"100%",lineHeight:"40px",fontSize:"14px",color:"#999"}},[e._v(e._s(e.options[e.index]))])],1)],1),n("v-uni-view",{style:{padding:"6px 0 6px 0",margin:"0 0 12px 0",borderColor:"#e6e6e6",alignItems:"center",borderWidth:"1px 0 1px 0",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[n("xia-editor",{style:{minHeight:"150px",padding:"0 0 0 0",margin:"0 0 0 0",flex:"1",background:"#ffffff00",height:"auto"},attrs:{placeholder:"内容"},on:{editorChange:function(t){arguments[0]=t=e.$handleEvent(t),e.contentChange.apply(void 0,arguments)}},model:{value:e.forum.content,callback:function(t){e.$set(e.forum,"content",t)},expression:"forum.content"}})],1),n("v-uni-view",{style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[n("v-uni-button",{staticClass:"bg-red margin-tb-sm",style:{border:"0",padding:"0 20px 0 20px",margin:"10px 10px 0 10px",color:"#fff",borderRadius:"0 20px 20px 0",background:"#38A1F2",width:"auto",lineHeight:"40px",fontSize:"14px",minWidth:"120px",height:"40px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("确认提交")])],1)],1)],1)],1)},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},eebd:function(e,t,n){"use strict";var i=n("1635"),r=n.n(i);r.a}}]);