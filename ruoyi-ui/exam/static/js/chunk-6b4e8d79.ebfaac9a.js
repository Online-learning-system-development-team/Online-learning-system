(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b4e8d79"],{"00ec":function(e,t,n){},"556c":function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return r})),n.d(t,"i",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return d}));var s=n("b775");function i(e){return Object(s["a"])({url:"/exam/questions/listAndOptions",method:"get",params:e})}function o(e){return Object(s["a"])({url:"/exam/questions/"+e,method:"get"})}function a(e){return Object(s["a"])({url:"/exam/questions/insert",method:"post",data:e})}function r(e){return Object(s["a"])({url:"/exam/questions/insertBatch",method:"post",data:e})}function l(e){return Object(s["a"])({url:"/exam/questions",method:"put",data:e})}function u(e){return Object(s["a"])({url:"/exam/questions/"+e,method:"delete"})}function c(e){return Object(s["a"])({url:"/exam/questions/byId/"+e,method:"delete"})}function m(e){return Object(s["a"])({url:"/exam/questions/export",method:"get",params:e})}function d(e){return Object(s["a"])({url:"/common/delete",method:"get",params:e})}},"7f1e":function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return m}));var s=n("b775");function i(e){return Object(s["a"])({url:"/exam/bank/listCount",method:"get",params:e})}function o(e){return Object(s["a"])({url:"/exam/bank/listByQuestionId/"+e,method:"get"})}function a(e){return Object(s["a"])({url:"/exam/bank/"+e,method:"get"})}function r(){return Object(s["a"])({url:"/exam/bank/listByRole",method:"get"})}function l(e){return Object(s["a"])({url:"/exam/bank",method:"post",data:e})}function u(e){return Object(s["a"])({url:"/exam/bank",method:"put",data:e})}function c(e){return Object(s["a"])({url:"/exam/bank/"+e,method:"delete"})}function m(e){return Object(s["a"])({url:"/exam/bank/export",method:"get",params:e})}},a9ce:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"g",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return c}));var s=n("b775");function i(e){return Object(s["a"])({url:"/exam/label/list",method:"get",params:e})}function o(e){return Object(s["a"])({url:"/exam/label/listByQuestionId/"+e,method:"get"})}function a(e){return Object(s["a"])({url:"/exam/label/"+e,method:"get"})}function r(e){return Object(s["a"])({url:"/exam/label",method:"post",data:e})}function l(e){return Object(s["a"])({url:"/exam/label",method:"put",data:e})}function u(e){return Object(s["a"])({url:"/exam/label/"+e,method:"delete"})}function c(e){return Object(s["a"])({url:"/exam/label/export",method:"get",params:e})}},af77:function(e,t,n){"use strict";n("00ec")},be41:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"app-container"},[s("el-form",{directives:[{name:"show",rawName:"v-show",value:t.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:t.queryParams,inline:!0,"label-width":"68px"}},[s("el-form-item",{attrs:{label:"题目",prop:"name"}},[s("el-input",{attrs:{placeholder:"请输入题目",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.name,callback:function(e){t.$set(t.queryParams,"name",e)},expression:"queryParams.name"}})],1),s("el-form-item",{attrs:{label:"题目类型",prop:"type"}},[s("el-select",{attrs:{placeholder:"请选择题目类型",clearable:"",size:"small"},model:{value:t.queryParams.type,callback:function(e){t.$set(t.queryParams,"type",e)},expression:"queryParams.type"}},[s("el-option",{attrs:{label:"请选择题目类型",value:""}})],1)],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.handleQuery}},[t._v("搜索")]),s("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:t.resetQuery}},[t._v("重置")])],1)],1),s("el-row",{staticClass:"mb8",attrs:{gutter:10}},[s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["exam:questions:add"],expression:"['exam:questions:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:t.handleAdd}},[t._v("新增")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["exam:questions:edit"],expression:"['exam:questions:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:t.single},on:{click:t.handleUpdate}},[t._v("修改")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["exam:questions:remove"],expression:"['exam:questions:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:t.multiple},on:{click:t.handleDelete}},[t._v("删除")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["exam:questions:export"],expression:"['exam:questions:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini",loading:t.exportLoading},on:{click:t.handleExport}},[t._v("导出")])],1),s("el-col",{attrs:{span:1.5}},[s("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-upload2",size:"mini",loading:t.exportLoading},on:{click:function(e){t.uploadOpen=!0}}},[t._v("导入")])],1),s("right-toolbar",{attrs:{showSearch:t.showSearch},on:{"update:showSearch":function(e){t.showSearch=e},"update:show-search":function(e){t.showSearch=e},queryTable:t.getList}})],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.questionsList},on:{"selection-change":t.handleSelectionChange}},[s("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.optionVoList,(function(e,n){return s("div",{key:n},[s("p",[t._v(t._s(e.optionContent))])])}))}}])}),s("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),s("el-table-column",{attrs:{label:"题目","show-overflow-tooltip":!0,align:"center",prop:"name"}}),s("el-table-column",{attrs:{label:"题目类型",align:"center",prop:"type"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-tag",{attrs:{effect:"dark",type:"danger","disable-transitions":""}},[t._v(t._s(e.row.type))])]}}])}),s("el-table-column",{attrs:{prop:"labels",label:"标签",width:"100","filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-tag",{attrs:{size:"mini",effect:"dark",type:"success","disable-transitions":""}},[t._v(t._s(e.row.labels))])]}}])}),s("el-table-column",{attrs:{prop:"banks",label:"题库",width:"100","filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-tag",{attrs:{size:"mini",effect:"dark",type:"warning","disable-transitions":""}},[t._v(t._s(e.row.banks))])]}}])}),s("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["exam:questions:edit"],expression:"['exam:questions:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return t.showBank(e.row)}}},[t._v("修改题库绑定")]),s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["exam:questions:edit"],expression:"['exam:questions:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return t.showLabel(e.row)}}},[t._v("修改标签绑定")]),s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["exam:questions:edit"],expression:"['exam:questions:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return t.handleUpdate(e.row)}}},[t._v("修改")]),s("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["exam:questions:remove"],expression:"['exam:questions:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return t.remove(e.row)}}},[t._v("删除")])]}}])})],1),s("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),s("el-dialog",{staticClass:"diaolog",attrs:{title:t.title,visible:t.open,width:"500px","append-to-body":""},on:{"update:visible":function(e){t.open=e}}},[s("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"题目",prop:"name"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入题目"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),s("el-form-item",{attrs:{label:"标签",prop:"labels"}},[s("el-select",{attrs:{multiple:"",filterable:"",remote:"","allow-create":"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":t.remoteMethod,loading:!1},model:{value:t.form.labels,callback:function(e){t.$set(t.form,"labels",e)},expression:"form.labels"}},t._l(t.labels,(function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),s("el-form-item",{attrs:{label:"题库",prop:"banks"}},[s("el-select",{attrs:{multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":t.remoteMethodBanks,loading:!1},model:{value:t.form.banks,callback:function(e){t.$set(t.form,"banks",e)},expression:"form.banks"}},t._l(t.banks,(function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),s("el-form-item",{attrs:{label:"题目类型",prop:"type"}},[s("el-select",{attrs:{placeholder:"请选择题目类型"},on:{change:function(t){return e.currentQuestionTye=t}},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},t._l(t.dict.type.question_type,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"answer"==t.currentQuestionTye,expression:"currentQuestionTye == 'answer'"}],attrs:{label:"答案",prop:"answer"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入问答题答案"},model:{value:t.form.answer,callback:function(e){t.$set(t.form,"answer",e)},expression:"form.answer"}})],1),s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"verdict"==t.currentQuestionTye,expression:"currentQuestionTye == 'verdict'"}],attrs:{label:"答案",prop:"judgeAnswer"}},[s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"正确","inactive-text":"错误"},model:{value:t.judgeAnswer,callback:function(e){t.judgeAnswer=e},expression:"judgeAnswer"}})],1),s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"select"==t.currentQuestionTye||"selects"==t.currentQuestionTye,expression:"\n            currentQuestionTye == 'select' || currentQuestionTye == 'selects'\n          "}],attrs:{label:"答案",prop:"selectAnswer"}},[s("el-select",{directives:[{name:"show",rawName:"v-show",value:"select"==t.currentQuestionTye,expression:"currentQuestionTye == 'select'"}],attrs:{placeholder:"请选择单选题答案"},model:{value:t.form.selectAnswer,callback:function(e){t.$set(t.form,"selectAnswer",e)},expression:"form.selectAnswer"}},t._l(t.formlist.list,(function(e){return s("el-option",{key:e.$id,attrs:{label:e.option,value:e.$id}})})),1),s("el-select",{directives:[{name:"show",rawName:"v-show",value:"selects"==t.currentQuestionTye,expression:"currentQuestionTye == 'selects'"}],attrs:{multiple:"",placeholder:"请选择多选题答案"},model:{value:t.form.selectAnswers,callback:function(e){t.$set(t.form,"selectAnswers",e)},expression:"form.selectAnswers"}},t._l(t.formlist.list,(function(e){return s("el-option",{key:e.$id,attrs:{label:e.option,value:e.$id}})})),1)],1),s("el-row",{directives:[{name:"show",rawName:"v-show",value:"select"==t.currentQuestionTye||"selects"==t.currentQuestionTye,expression:"\n            currentQuestionTye == 'select' || currentQuestionTye == 'selects'\n          "}],staticStyle:{"margin-top":"10px","margin-bottom":"10px"}},[s("el-button",{on:{click:t.addRow}},[t._v("添加一行")]),s("el-button",{on:{click:t.removeRow}},[t._v("删除一行")])],1),s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"select"==t.currentQuestionTye||"selects"==t.currentQuestionTye,expression:"\n            currentQuestionTye == 'select' || currentQuestionTye == 'selects'\n          "}],attrs:{label:"题目选项"}},[s("el-form",{attrs:{model:t.formlist,"label-position":"top"}},[s("el-table",{ref:"tableOptions",attrs:{data:t.formlist.list},on:{"selection-change":function(t){e.currentSelectOption=t}}},[s("el-table-column",{attrs:{type:"selection",width:"50"}}),s("el-table-column",{attrs:{prop:"option",width:"60"}}),s("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-form-item",[s("el-input",{attrs:{type:"textarea",placeholder:"请输入题目选项"},model:{value:e.row.name,callback:function(n){t.$set(e.row,"name",n)},expression:"scope.row.name"}})],1)]}}])})],1)],1)],1),s("el-form-item",{attrs:{label:"试题解析",prop:"analysis"}},[s("el-input",{attrs:{type:"textarea",placeholder:"请输入试题解析"},model:{value:t.form.analysis,callback:function(e){t.$set(t.form,"analysis",e)},expression:"form.analysis"}})],1),s("el-form-item",{attrs:{label:"是否启用",prop:"isEnable"}},[s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"启用","inactive-text":"未启用"},model:{value:t.isEnable,callback:function(e){t.isEnable=e},expression:"isEnable"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.isUpdate,expression:"isUpdate==false"}],attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")]),s("el-button",{directives:[{name:"show",rawName:"v-show",value:1==t.isUpdate,expression:"isUpdate==true"}],attrs:{type:"primary"},on:{click:t.submitFormUpdate}},[t._v("修 改")]),s("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1),s("el-dialog",{attrs:{title:"批量导入",visible:t.uploadOpen,width:"500px","append-to-body":""},on:{"update:visible":function(e){t.uploadOpen=e}}},[s("el-form",{attrs:{model:t.uploadForm,inline:!0,"label-width":"68px"}},[s("el-form-item",{attrs:{label:"标签",prop:"labels"}},[s("el-select",{attrs:{multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":t.remoteMethod,loading:!1},model:{value:t.uploadForm.labels,callback:function(e){t.$set(t.uploadForm,"labels",e)},expression:"uploadForm.labels"}},t._l(t.labels,(function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),s("el-form-item",{attrs:{label:"题库",prop:"banks"}},[s("el-select",{attrs:{multiple:"",filterable:"",remote:"","reserve-keyword":"",placeholder:"请输入关键词","remote-method":t.remoteMethodBanks,loading:!1},model:{value:t.uploadForm.banks,callback:function(e){t.$set(t.uploadForm,"banks",e)},expression:"uploadForm.banks"}},t._l(t.banks,(function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),s("el-upload",{staticClass:"upload-demo",attrs:{action:t.uploadFileUrl,limit:1,accept:"txt","on-exceed":t.handleExceed,"on-remove":t.handleRemove,"on-success":t.uploadSuccess,"file-list":t.fileList,headers:t.headers}},[s("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),s("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传txt文件，且不超过2M ")])],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:t.uploadClick}},[t._v("确 定")]),s("el-button",{on:{click:function(e){t.uploadOpen=!1}}},[t._v("取 消")])],1)],1),s("el-dialog",{attrs:{title:"题库详情",visible:t.isBank,width:"500px","append-to-body":""},on:{"update:visible":function(e){t.isBank=e}}},[s("el-table",{attrs:{data:t.QuestionBankList}},[s("el-table-column",{attrs:{label:"题库",align:"center",prop:"name"}}),s("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"}},[t._v("解绑")])]}}])})],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.isBank=!1}}},[t._v("关 闭")])],1)],1),s("el-dialog",{attrs:{title:"标签详情",visible:t.isLabel,width:"500px","append-to-body":""},on:{"update:visible":function(e){t.isLabel=e}}},[s("el-table",{attrs:{data:t.QuestionLabelList}},[s("el-table-column",{attrs:{label:"标签",align:"center",prop:"name"}}),s("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"}},[t._v("解绑")])]}}])})],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.isLabel=!1}}},[t._v("关 闭")])],1)],1)],1)},i=[],o=n("5530"),a=(n("ac1f"),n("5319"),n("1276"),n("4de4"),n("d3b7"),n("99af"),n("159b"),n("498a"),n("b0c0"),n("a434"),n("d81d"),n("5f87")),r=n("556c"),l=n("a9ce"),u=n("7f1e"),c={name:"",labels:[],banks:[],type:"",answer:"",judgeAnswer:"",selectAnswer:"",selectAnswers:[],analysis:"",isEnable:"",list:[]},m={dicts:["question_type"],name:"Questions",data:function(){return{isUpdate:!0,QuestionLabelList:[],isLabel:!1,QuestionBankList:[],isBank:!1,uploadFileUrl:"/prod-api/exam/questions/upload",file:{fileName:"",str:""},uploadForm:{labels:[],banks:[]},headers:{Authorization:"Bearer "+Object(a["a"])()},fileList:[],uploadOpen:!1,form:Object(o["a"])({},c),formlist:{list:[{$id:0,name:"",option:"A"}]},isEnable:!0,judgeAnswer:!0,loading:!0,exportLoading:!1,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,questionsList:[],open:!1,queryParams:{pageNum:1,pageSize:10,name:null,type:null},rules:{},labelList:[],labels:[],banks:[],title:"新增试题",bankList:[],currentQuestionTye:"",currentSelectOption:"",currentIndex:1}},created:function(){this.getList(),this.getLabelList(),this.getQuestionBankList()},methods:{submitFormUpdate:function(){this.$message("修改功能暂时待完善")},showLabel:function(e){var t=this;console.log(e),Object(l["f"])(e.id).then((function(e){console.log(e),t.QuestionLabelList=e.rows,t.isLabel=!0}))},showBank:function(e){var t=this;console.log(e),Object(u["f"])(e.id).then((function(e){console.log(e),t.QuestionBankList=e.rows,t.isBank=!0}))},uploadClick:function(){var e=this,t=this.uploadSuccessDataInit(this.file.str);if(t instanceof Array){var n={list:t};Object(r["f"])(n).then((function(t){console.log(t),e.$modal.msgSuccess("导入成功")}))}else this.$modal.alertError(t)},handleRemove:function(e,t){Object(r["c"])({name:e.response.data.fileName.replace("profile","")}).then((function(e){console.log("object :>> ",e)}))},uploadSuccess:function(e){console.log(e),this.file=e.data},uploadSuccessDataInit:function(e){var t=this,n=[],s=[],i=e.split("单选");i.filter((function(e){var t=e.split("多选");s=s.concat(t)}));var o=null;if(s.forEach((function(e,s){var i={list:[]},a=e.indexOf("."),r=e.indexOf("：");i.isEnable=!0,i.name=e.substring(a+1,r);var l=e.indexOf("A .");l<0&&(l=e.indexOf("A.")),(r<0||r>l)&&(r=e.indexOf(":"),i.name=e.substring(a+1,r));var u=e.substring(r,l).replace(/[:,：]/,"").trim();if(u.length>8)return o="题目的答案解析失败，请检查，题目如下："+e,!0;u.length>1?(i.type="selects",i.selectAnswers=u.split("")):(i.type="select",i.selectAnswer=u);var c=e.indexOf("B .");c<0&&(c=e.indexOf("B.")),i.list.push({option:"A",name:e.substring(l,c).replace("A .","").replace("A.","")});var m=e.indexOf("C .");m<0&&(m=e.indexOf("C.")),i.list.push({option:"B",name:e.substring(c,m).replace("B .","").replace("B.","")});var d=e.indexOf("D .");d<0&&(d=e.indexOf("D.")),i.list.push({option:"C",name:e.substring(m,d).replace("C .","").replace("C.","")});var p=e.indexOf("E .");p<0&&(p=e.indexOf("E.")),p>0?(i.list.push({option:"D",name:e.substring(d,p).replace("D .","").replace("D.","")}),i.list.push({option:"E",name:e.substring(p,e.length).replace("E .","").replace("E.","")})):i.list.push({option:"D",name:e.substring(d,e.length).replace("D .","").replace("D.","")}),0!=s&&(i.labels=t.uploadForm.labels,i.banks=t.uploadForm.banks,n.push(i))})),null!=o)return console.log(o),o;for(var a={},r=[],l=0;l<n.length;l++){var u=n[l];a[u.name]||(r.push(u),a[u.name]=1)}return a={},r},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},addRow:function(){var e=this.formlist.list;if(6==e.length)this.$message.error("最多只能添加7个选项");else{this.currentIndex;this.currentIndex=this.currentIndex+1,e.push({name:"",option:"",$id:this.currentIndex}),this.optionInit()}},removeRow:function(){var e=this;this.currentSelectOption.forEach((function(t){e.formlist.list.forEach((function(n,s){n.$id==t.$id&&e.formlist.list.splice(s,1)}))})),this.optionInit()},optionInit:function(){this.formlist.list=this.formlist.list.map((function(e,t){switch(t){case 0:e.option="A";break;case 1:e.option="B";break;case 2:e.option="C";break;case 3:e.option="D";break;case 4:e.option="E";break;case 5:e.option="F";break;case 6:e.option="G";break}return e}))},remoteMethodBanks:function(e){var t=this.bankList.filter((function(t){if(t.name.indexOf(e)>=0)return t}));this.banks=t},remoteMethod:function(e){var t=this.labelList.filter((function(t){if(t.name.indexOf(e)>=0)return t}));this.labels=t},getLabelList:function(){var e=this;Object(l["e"])().then((function(t){e.labelList=t.rows,e.labels=t.rows}))},getQuestionBankList:function(){var e=this;Object(u["e"])().then((function(t){e.bankList=t.rows,e.banks=t.rows}))},getList:function(){var e=this;this.loading=!0,this.queryParams.orderByColumn="id",this.queryParams.isAsc="desc",Object(r["h"])(this.queryParams).then((function(t){e.questionsList=t.rows.map((function(e){return"answer"==e.type?e.type="问答题":"verdict"==e.type?e.type="判断题":"selects"==e.type?e.type="多选题":"select"==e.type&&(e.type="单选题"),e})),e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form=Object(o["a"])({},c),this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.single=1!==e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.isUpdate=!1,this.open=!0,this.title="添加试题",this.form=Object(o["a"])({},c)},handleUpdate:function(e){var t=this;this.reset(),this.isUpdate=!0,console.log(e);var n=e.id||this.ids;Object(r["e"])(n).then((function(n){console.log(n.data),t.form=n.data,t.form.selectAnswer=parseInt(n.data.selectAnswer),t.formlist.list=e.optionVoList.map((function(e){return{$id:e.id,name:e.optionContent,option:null}})),t.optionInit(),t.currentQuestionTye=n.data.type,t.open=!0,t.title="修改试题",t.$nextTick((function(){t.formlist.list.forEach((function(e){e.$id==t.form.selectAnswer&&t.$refs.tableOptions.toggleRowSelection(e)}))}))}))},submitFormInit:function(){var e=this,t=this.form.labels;if(this.form.newLabelList=t.filter((function(e){return"string"===typeof e})),this.form.labels=t.filter((function(e){return"number"===typeof e})),"selects"==this.currentQuestionTye){this.form.answer=null,this.form.judgeAnswer=null,this.judgeAnswer=!0,this.form.list=this.formlist.list,this.form.selectAnswer=null,console.log(this.form);var n=[];this.form.list.forEach((function(t){e.form.selectAnswers.forEach((function(e,s){t.$id==e&&n.push(t.option)}))})),this.form.selectAnswers=n}else"select"==this.currentQuestionTye?(this.form.answer=null,this.form.judgeAnswer=null,this.judgeAnswer=!0,this.form.list=this.formlist.list,this.form.selectAnswers=[],this.form.list.some((function(t){return t.$id==e.form.selectAnswer&&(e.form.selectAnswer=t.option,!0)}))):"verdict"==this.currentQuestionTye?(this.form.answer=null,this.form.selectAnswer=null,this.form.selectAnswers=null,this.form.judgeAnswer=this.judgeAnswer,this.form.list=[],this.formlist.list=[{$id:0,name:"",option:"A"}]):"answer"==this.currentQuestionTye?(this.form.judgeAnswer=!0,this.judgeAnswer=null,this.form.selectAnswer=null,this.form.selectAnswers=null,this.form.list=[],this.formlist.list=[{$id:0,name:"",option:"A"}]):(this.form.answer=null,this.form.judgeAnswer=null,this.judgeAnswer=null,this.form.selectAnswer=null,this.form.selectAnswers=null,this.form.list=[],this.formlist.list=[]);this.form.isEnable=this.isEnable,console.log(this.form)},submitForm:function(){var e=this;this.submitFormInit(),this.$refs["form"].validate((function(t){t&&(null!=e.form.id?Object(r["i"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):Object(r["g"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList(),e.form=Object(o["a"])({},c),e.formlist={list:[{$id:0,name:"",option:"A"}]},e.isEnable=!0,e.judgeAnswer=!0})))}))},handleDelete:function(e){var t=this,n=e.id||this.ids;this.$modal.confirm('是否确认删除试题编号为"'+n+'"的数据项？').then((function(){return Object(r["b"])(n)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},remove:function(e){var t=this;Object(r["a"])(e.id).then((function(e){console.log(e),t.getList(),t.$modal.msgSuccess("删除成功")}))},handleExport:function(){var e=this,t=this.queryParams;this.$modal.confirm("是否确认导出所有试题数据项？").then((function(){return e.exportLoading=!0,Object(r["d"])(t)})).then((function(t){e.$download.name(t.msg),e.exportLoading=!1})).catch((function(){}))}}},d=m,p=(n("af77"),n("2877")),f=Object(p["a"])(d,s,i,!1,null,null,null);t["default"]=f.exports}}]);