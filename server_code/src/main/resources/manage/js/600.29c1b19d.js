"use strict";(self["webpackChunkvue3_nb0"]=self["webpackChunkvue3_nb0"]||[]).push([[600],{43600:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_e});n(32357),n(80078),n(99574);var a=n(55701),i=n(19588),r=n(52679),o=n(7280),u=(n(56348),{class:"home_view"}),s={class:"projectTitle"},l={class:"count_list"},d={class:"index_card_head"},c=(0,a._)("div",{class:"card_head_title"}," 用户 ",-1),h={class:"card_head_right"},_={class:"count_item"},f=(0,a._)("div",{class:"count_title"},"用户总数",-1),p={class:"count_num"},v={class:"index_card_head"},m=(0,a._)("div",{class:"card_head_title"}," 商品信息 ",-1),y={class:"card_head_right"},w={class:"count_item"},g=(0,a._)("div",{class:"count_title"},"商品信息总数",-1),x={class:"count_num"},C={class:"index_card_head"},T=(0,a._)("div",{class:"card_head_title"}," 商品订单 ",-1),W={class:"card_head_right"},k={class:"count_item"},I=(0,a._)("div",{class:"count_title"},"商品订单总数",-1),F={class:"count_num"},b={class:"index_card_head"},E=(0,a._)("div",{class:"card_head_title"}," 财务信息 ",-1),j={class:"card_head_right"},A={class:"count_item"},$=(0,a._)("div",{class:"count_title"},"财务信息总数",-1),z={class:"count_num"},q={class:"card_list"},B={class:"index_card_head"},H=(0,a._)("div",{class:"card_head_title"}," 商品信息 ",-1),O={class:"card_head_right"},Y={class:"card_item"},U=(0,a._)("div",{id:"shangpinxinxialllimittimesEchart1",class:"Echart",style:{width:"100%",height:"400px"}},null,-1),L=[U],N={class:"index_card_head"},S=(0,a._)("div",{class:"card_head_title"}," 商品订单 ",-1),D={class:"card_head_right"},P={class:"card_item"},V=(0,a._)("div",{id:"ordersbuynumberEchart1",class:"Echart",style:{width:"100%",height:"400px"}},null,-1),G=[V],J={class:"index_card_head"},K=(0,a._)("div",{class:"card_head_title"}," 商品订单 ",-1),M={class:"card_head_right"},Q={class:"card_item"},R=(0,a._)("div",{id:"orderstotalEchart2",class:"Echart",style:{width:"100%",height:"400px"}},null,-1),X=[R],Z={class:"index_card_head"},ee=(0,a._)("div",{class:"card_head_title"}," 商品订单 ",-1),te={class:"card_head_right"},ne={class:"card_item"},ae=(0,a._)("div",{id:"orderstotalEchart3",class:"Echart",style:{width:"100%",height:"400px"}},null,-1),ie=[ae],re={class:"index_card_head"},oe=(0,a._)("div",{class:"card_head_title"}," 商品订单 ",-1),ue={class:"card_head_right"},se={class:"card_item"},le=(0,a._)("div",{id:"orderstotalEchart4",class:"Echart",style:{width:"100%",height:"400px"}},null,-1),de=[le];const ce={__name:"HomeView",setup:function(e){var t,n=null===(t=(0,a.FN)())||void 0===t?void 0:t.appContext.config.globalProperties,U=n.$project.projectName,V=(0,r.iH)({}),R=function(){V.value.closeyonghuCountType=!0,V.value.hiddenyonghuCountType=!0,ye("yonghu","首页总数")&&le(),V.value.closeshangpinxinxiCountType=!0,V.value.hiddenshangpinxinxiCountType=!0,ye("shangpinxinxi","首页总数")&&he(),V.value.closeordersCountType=!0,V.value.hiddenordersCountType=!0,ye("orders","首页总数")&&fe(),V.value.closecaiwuxinxiCountType=!0,V.value.hiddencaiwuxinxiCountType=!0,ye("caiwuxinxi","首页总数")&&ve()},ae=(0,r.iH)(0),le=function(){null===n||void 0===n||n.$http({url:"yonghu/count",method:"get"}).then((function(e){ae.value=e.data.data}))},ce=(0,r.iH)(0),he=function(){null===n||void 0===n||n.$http({url:"shangpinxinxi/count",method:"get"}).then((function(e){ce.value=e.data.data}))},_e=(0,r.iH)(0),fe=function(){null===n||void 0===n||n.$http({url:"orders/count",method:"get"}).then((function(e){_e.value=e.data.data}))},pe=(0,r.iH)(0),ve=function(){null===n||void 0===n||n.$http({url:"caiwuxinxi/count",method:"get"}).then((function(e){pe.value=e.data.data}))},me=function(e){V.value[e]=!V.value[e]},ye=function(e,t){return null===n||void 0===n?void 0:n.$toolUtil.isAuth(e,t)},we=(0,a.f3)("echarts"),ge=function(e){xe.value[e]=!xe.value[e],setTimeout((function(){Ce()}),1e3)},xe=(0,r.iH)({closeshangpinxinxiChartType1:!0,hiddenshangpinxinxiChartType1:!0,closeordersChartType1:!0,hiddenordersChartType1:!0,closeordersChartType2:!0,hiddenordersChartType2:!0,closeordersChartType3:!0,hiddenordersChartType3:!0,closeordersChartType4:!0,hiddenordersChartType4:!0}),Ce=function(){ye("shangpinxinxi","首页统计")&&Te(),ye("orders","首页统计")&&We(),ye("orders","首页统计")&&ke(),ye("orders","首页统计")&&Ie(),ye("orders","首页统计")&&Fe()},Te=function(){(0,a.Y3)((function(){var e=we.init(document.getElementById("shangpinxinxialllimittimesEchart1"),"theme");null===n||void 0===n||n.$http({url:"shangpinxinxi/value/shangpinmingcheng/alllimittimes",method:"get"}).then((function(t){for(var n=t.data.data,a=[],i=[],r=[],o=0;o<n.length;o++)a.push(n[o].shangpinmingcheng),i.push(parseFloat(n[o].total)),r.push({value:parseFloat(n[o].total),name:n[o].shangpinmingcheng});var u={};u={title:{text:"商品库存统计",left:"center"},tooltip:{trigger:"item",formatter:"{b} : {c}"},xAxis:{data:a,type:"category",axisLabel:{interval:0,rotate:30}},yAxis:{type:"value",minInterval:1},series:{data:i,type:"bar"}},e.clear(),e.setOption(u),e.resize()}))}))},We=function(){(0,a.Y3)((function(){var e=we.init(document.getElementById("ordersbuynumberEchart1"),"theme");null===n||void 0===n||n.$http({url:"orders/value/goodname/buynumber",method:"get"}).then((function(t){for(var n=t.data.data,a=[],i=[],r=[],o=0;o<n.length;o++)a.push(n[o].goodname),i.push(parseFloat(n[o].total)),r.push({value:parseFloat(n[o].total),name:n[o].goodname});var u={};u={title:{text:"销售数量统计",left:"center"},tooltip:{trigger:"item",formatter:"{b} : {c}"},xAxis:{data:a,type:"category",axisLabel:{interval:0,rotate:30}},yAxis:{type:"value",minInterval:1},series:{data:i,type:"bar"}},e.clear(),e.setOption(u),e.resize()}))}))},ke=function(){(0,a.Y3)((function(){var e=we.init(document.getElementById("orderstotalEchart2"),"theme");null===n||void 0===n||n.$http({url:"orders/value/addtime/total/日",method:"get"}).then((function(t){for(var n=t.data.data,a=[],i=[],r=[],o=0;o<n.length;o++)a.push(n[o].addtime),i.push(parseFloat(n[o].total)),r.push({value:parseFloat(n[o].total),name:n[o].addtime});var u={};u={title:{text:"按日销售金额统计",left:"center"},tooltip:{trigger:"item",formatter:"{b} : {c}"},xAxis:{data:a,type:"category"},yAxis:{type:"value"},series:{data:i,type:"line"}},e.clear(),e.setOption(u),e.resize()}))}))},Ie=function(){(0,a.Y3)((function(){var e=we.init(document.getElementById("orderstotalEchart3"),"theme");null===n||void 0===n||n.$http({url:"orders/value/addtime/total/月",method:"get"}).then((function(t){for(var n=t.data.data,a=[],i=[],r=[],o=0;o<n.length;o++)a.push(n[o].addtime),i.push(parseFloat(n[o].total)),r.push({value:parseFloat(n[o].total),name:n[o].addtime});var u={};u={title:{text:"按月销售金额统计",left:"center"},tooltip:{trigger:"item",formatter:"{b} : {c}"},xAxis:{data:a,type:"category"},yAxis:{type:"value"},series:{data:i,type:"line"}},Object.assign(u.series,{smooth:!0}),e.clear(),e.setOption(u),e.resize()}))}))},Fe=function(){(0,a.Y3)((function(){var e=we.init(document.getElementById("orderstotalEchart4"),"theme");null===n||void 0===n||n.$http({url:"orders/value/addtime/total/年",method:"get"}).then((function(t){for(var n=t.data.data,a=[],i=[],r=[],o=0;o<n.length;o++)a.push(n[o].addtime),i.push(parseFloat(n[o].total)),r.push({value:parseFloat(n[o].total),name:n[o].addtime});var u={};u={title:{text:"按年销售金额统计",left:"center"},tooltip:{trigger:"item",formatter:"{b} : {c}"},xAxis:{data:a,type:"category"},yAxis:{type:"value"},series:{data:i,type:"line"}},Object.assign(u.series,{areaStyle:{}}),e.clear(),e.setOption(u),e.resize()}))}))},be=function(){R(),Ce()};return be(),function(e,t){var n=(0,a.up)("ArrowUpBold"),R=(0,a.up)("el-icon"),le=(0,a.up)("CloseBold"),he=(0,a.up)("el-collapse-transition"),fe=(0,a.up)("el-card");return(0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",s,"欢迎使用 "+(0,i.zw)((0,r.SU)(U)),1),(0,a._)("div",l,[ye("yonghu","首页总数")?((0,a.wg)(),(0,a.j4)(he,{key:0},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a.Wm)(fe,{class:"card_view count-item"},{header:(0,a.w5)((function(){return[(0,a._)("div",d,[c,(0,a._)("div",h,[(0,a.Wm)(R,{onClick:t[0]||(t[0]=function(e){return me("hiddenyonghuCountType")}),class:(0,i.C_)(["showIcons",V.value.hiddenyonghuCountType?"showIcons1":""])},{default:(0,a.w5)((function(){return[(0,a.Wm)(n)]})),_:1},8,["class"]),(0,a.Wm)(R,{onClick:t[1]||(t[1]=function(e){return me("closeyonghuCountType")}),class:"closeIcons"},{default:(0,a.w5)((function(){return[(0,a.Wm)(le)]})),_:1})])])]})),default:(0,a.w5)((function(){return[(0,a.Wm)(he,null,{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",_,[f,(0,a._)("div",p,(0,i.zw)(ae.value),1)],512),[[o.F8,V.value.hiddenyonghuCountType]])]})),_:1})]})),_:1},512),[[o.F8,V.value.closeyonghuCountType]])]})),_:1})):(0,a.kq)("",!0),ye("shangpinxinxi","首页总数")?((0,a.wg)(),(0,a.j4)(he,{key:1},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a.Wm)(fe,{class:"card_view count-item"},{header:(0,a.w5)((function(){return[(0,a._)("div",v,[m,(0,a._)("div",y,[(0,a.Wm)(R,{onClick:t[2]||(t[2]=function(e){return me("hiddenshangpinxinxiCountType")}),class:(0,i.C_)(["showIcons",V.value.hiddenshangpinxinxiCountType?"showIcons1":""])},{default:(0,a.w5)((function(){return[(0,a.Wm)(n)]})),_:1},8,["class"]),(0,a.Wm)(R,{onClick:t[3]||(t[3]=function(e){return me("closeshangpinxinxiCountType")}),class:"closeIcons"},{default:(0,a.w5)((function(){return[(0,a.Wm)(le)]})),_:1})])])]})),default:(0,a.w5)((function(){return[(0,a.Wm)(he,null,{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",w,[g,(0,a._)("div",x,(0,i.zw)(ce.value),1)],512),[[o.F8,V.value.hiddenshangpinxinxiCountType]])]})),_:1})]})),_:1},512),[[o.F8,V.value.closeshangpinxinxiCountType]])]})),_:1})):(0,a.kq)("",!0),ye("orders","首页总数")?((0,a.wg)(),(0,a.j4)(he,{key:2},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a.Wm)(fe,{class:"card_view count-item"},{header:(0,a.w5)((function(){return[(0,a._)("div",C,[T,(0,a._)("div",W,[(0,a.Wm)(R,{onClick:t[4]||(t[4]=function(e){return me("hiddenordersCountType")}),class:(0,i.C_)(["showIcons",V.value.hiddenordersCountType?"showIcons1":""])},{default:(0,a.w5)((function(){return[(0,a.Wm)(n)]})),_:1},8,["class"]),(0,a.Wm)(R,{onClick:t[5]||(t[5]=function(e){return me("closeordersCountType")}),class:"closeIcons"},{default:(0,a.w5)((function(){return[(0,a.Wm)(le)]})),_:1})])])]})),default:(0,a.w5)((function(){return[(0,a.Wm)(he,null,{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",k,[I,(0,a._)("div",F,(0,i.zw)(_e.value),1)],512),[[o.F8,V.value.hiddenordersCountType]])]})),_:1})]})),_:1},512),[[o.F8,V.value.closeordersCountType]])]})),_:1})):(0,a.kq)("",!0),ye("caiwuxinxi","首页总数")?((0,a.wg)(),(0,a.j4)(he,{key:3},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a.Wm)(fe,{class:"card_view count-item"},{header:(0,a.w5)((function(){return[(0,a._)("div",b,[E,(0,a._)("div",j,[(0,a.Wm)(R,{onClick:t[6]||(t[6]=function(e){return me("hiddencaiwuxinxiCountType")}),class:(0,i.C_)(["showIcons",V.value.hiddencaiwuxinxiCountType?"showIcons1":""])},{default:(0,a.w5)((function(){return[(0,a.Wm)(n)]})),_:1},8,["class"]),(0,a.Wm)(R,{onClick:t[7]||(t[7]=function(e){return me("closecaiwuxinxiCountType")}),class:"closeIcons"},{default:(0,a.w5)((function(){return[(0,a.Wm)(le)]})),_:1})])])]})),default:(0,a.w5)((function(){return[(0,a.Wm)(he,null,{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",A,[$,(0,a._)("div",z,(0,i.zw)(pe.value),1)],512),[[o.F8,V.value.hiddencaiwuxinxiCountType]])]})),_:1})]})),_:1},512),[[o.F8,V.value.closecaiwuxinxiCountType]])]})),_:1})):(0,a.kq)("",!0)]),(0,a._)("div",q,[ye("shangpinxinxi","首页统计")?((0,a.wg)(),(0,a.j4)(he,{key:0},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a.Wm)(fe,{class:"card_view chart-item"},{header:(0,a.w5)((function(){return[(0,a._)("div",B,[H,(0,a._)("div",O,[(0,a.Wm)(R,{onClick:t[8]||(t[8]=function(e){return ge("hiddenshangpinxinxiChartType1")}),class:(0,i.C_)(["showIcons",xe.value.hiddenshangpinxinxiChartType1?"showIcons1":""])},{default:(0,a.w5)((function(){return[(0,a.Wm)(n)]})),_:1},8,["class"]),(0,a.Wm)(R,{onClick:t[9]||(t[9]=function(e){return ge("closeshangpinxinxiChartType1")}),class:"closeIcons"},{default:(0,a.w5)((function(){return[(0,a.Wm)(le)]})),_:1})])])]})),default:(0,a.w5)((function(){return[(0,a.Wm)(he,null,{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",Y,L,512),[[o.F8,xe.value.hiddenshangpinxinxiChartType1]])]})),_:1})]})),_:1},512),[[o.F8,xe.value.closeshangpinxinxiChartType1]])]})),_:1})):(0,a.kq)("",!0),ye("orders","首页统计")?((0,a.wg)(),(0,a.j4)(he,{key:1},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a.Wm)(fe,{class:"card_view chart-item"},{header:(0,a.w5)((function(){return[(0,a._)("div",N,[S,(0,a._)("div",D,[(0,a.Wm)(R,{onClick:t[10]||(t[10]=function(e){return ge("hiddenordersChartType1")}),class:(0,i.C_)(["showIcons",xe.value.hiddenordersChartType1?"showIcons1":""])},{default:(0,a.w5)((function(){return[(0,a.Wm)(n)]})),_:1},8,["class"]),(0,a.Wm)(R,{onClick:t[11]||(t[11]=function(e){return ge("closeordersChartType1")}),class:"closeIcons"},{default:(0,a.w5)((function(){return[(0,a.Wm)(le)]})),_:1})])])]})),default:(0,a.w5)((function(){return[(0,a.Wm)(he,null,{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",P,G,512),[[o.F8,xe.value.hiddenordersChartType1]])]})),_:1})]})),_:1},512),[[o.F8,xe.value.closeordersChartType1]])]})),_:1})):(0,a.kq)("",!0),ye("orders","首页统计")?((0,a.wg)(),(0,a.j4)(he,{key:2},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a.Wm)(fe,{class:"card_view chart-item"},{header:(0,a.w5)((function(){return[(0,a._)("div",J,[K,(0,a._)("div",M,[(0,a.Wm)(R,{onClick:t[12]||(t[12]=function(e){return ge("hiddenordersChartType2")}),class:(0,i.C_)(["showIcons",xe.value.hiddenordersChartType2?"showIcons2":""])},{default:(0,a.w5)((function(){return[(0,a.Wm)(n)]})),_:1},8,["class"]),(0,a.Wm)(R,{onClick:t[13]||(t[13]=function(e){return ge("closeordersChartType2")}),class:"closeIcons"},{default:(0,a.w5)((function(){return[(0,a.Wm)(le)]})),_:1})])])]})),default:(0,a.w5)((function(){return[(0,a.Wm)(he,null,{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",Q,X,512),[[o.F8,xe.value.hiddenordersChartType2]])]})),_:1})]})),_:1},512),[[o.F8,xe.value.closeordersChartType2]])]})),_:1})):(0,a.kq)("",!0),ye("orders","首页统计")?((0,a.wg)(),(0,a.j4)(he,{key:3},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a.Wm)(fe,{class:"card_view chart-item"},{header:(0,a.w5)((function(){return[(0,a._)("div",Z,[ee,(0,a._)("div",te,[(0,a.Wm)(R,{onClick:t[14]||(t[14]=function(e){return ge("hiddenordersChartType3")}),class:(0,i.C_)(["showIcons",xe.value.hiddenordersChartType3?"showIcons3":""])},{default:(0,a.w5)((function(){return[(0,a.Wm)(n)]})),_:1},8,["class"]),(0,a.Wm)(R,{onClick:t[15]||(t[15]=function(e){return ge("closeordersChartType3")}),class:"closeIcons"},{default:(0,a.w5)((function(){return[(0,a.Wm)(le)]})),_:1})])])]})),default:(0,a.w5)((function(){return[(0,a.Wm)(he,null,{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",ne,ie,512),[[o.F8,xe.value.hiddenordersChartType3]])]})),_:1})]})),_:1},512),[[o.F8,xe.value.closeordersChartType3]])]})),_:1})):(0,a.kq)("",!0),ye("orders","首页统计")?((0,a.wg)(),(0,a.j4)(he,{key:4},{default:(0,a.w5)((function(){return[(0,a.wy)((0,a.Wm)(fe,{class:"card_view chart-item"},{header:(0,a.w5)((function(){return[(0,a._)("div",re,[oe,(0,a._)("div",ue,[(0,a.Wm)(R,{onClick:t[16]||(t[16]=function(e){return ge("hiddenordersChartType4")}),class:(0,i.C_)(["showIcons",xe.value.hiddenordersChartType4?"showIcons4":""])},{default:(0,a.w5)((function(){return[(0,a.Wm)(n)]})),_:1},8,["class"]),(0,a.Wm)(R,{onClick:t[17]||(t[17]=function(e){return ge("closeordersChartType4")}),class:"closeIcons"},{default:(0,a.w5)((function(){return[(0,a.Wm)(le)]})),_:1})])])]})),default:(0,a.w5)((function(){return[(0,a.Wm)(he,null,{default:(0,a.w5)((function(){return[(0,a.wy)((0,a._)("div",se,de,512),[[o.F8,xe.value.hiddenordersChartType4]])]})),_:1})]})),_:1},512),[[o.F8,xe.value.closeordersChartType4]])]})),_:1})):(0,a.kq)("",!0)])])}}},he=ce,_e=he}}]);
//# sourceMappingURL=600.29c1b19d.js.map