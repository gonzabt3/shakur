(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7jV7":function(t,a,e){"use strict";e.d(a,"a",function(){return i});var i=["topus","verga","pija","choto","poronga","putos","porongo","puta","idiota","concha","conchuda","conchudo","mogolico","puto","pito","chota","gadorcha","gonzaputo","chupa un huevo"]},Dktd:function(t,a,e){var i=e("Vdtg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("SZ7m")("0b18f92e",i,!0,{})},Vdtg:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".card-body[data-v-7a3c25b9]{padding:7px}.card-title[data-v-7a3c25b9]{margin-bottom:7px}.padding-lateral-7[data-v-7a3c25b9]{padding-left:7px;padding-right:7px}.shadow[data-v-7a3c25b9]{box-shadow:10px 10px grey}.left-padding[data-v-7a3c25b9]{padding-left:0}#preview[data-v-7a3c25b9]{display:flex;justify-content:center;align-items:center}#preview img[data-v-7a3c25b9]{max-width:100%;max-height:150px}.img_wrp[data-v-7a3c25b9]{display:inline-block;position:relative}.close[data-v-7a3c25b9]{position:absolute;top:0;right:0;width:30px}.sizeLoading[data-v-7a3c25b9]{width:30px}",""])},aKZq:function(t,a){t.exports="/images/closeIcon.png?73368be852b85675d36764bbb04e1e7a"},"m/Fp":function(t,a,e){"use strict";e.r(a);var i=e("7jV7"),o={name:"PostNew",props:["idMateria"],$_veeValidate:{validator:"new"},data(){return{data:{texto:null,materia_id:this.idMateria,user_id:null,files:[]},badWordFlag:!1,error:"",textButton:"Publicar",disabledButton:!1,loading:!1,iconLoading:!1,urlFiles:[]}},computed:{hasErrors(){return""!=this.error}},watch:{loading:function(t){t?(this.disabledButton=!0,this.textButton="",this.iconLoading=!0):(this.disabledButton=!1,this.textButton="Publicar",this.iconLoading=!1)},"data.texto":function(t){this.badWordFlag=this.scanMalasPalabras(t),0==this.badWordFlag&&(this.error="")}},methods:{scanMalasPalabras:t=>0==!t.trim().split(" ").filter(t=>i.a.includes(t)).length,makeUrl:t=>URL.createObjectURL(t),hacerPost(){if(""!=this.data.texto&&null!=this.data.texto)if(this.badWordFlag)this.error="Hemos detectado lenguaje ofensivo";else{this.loading=!0,this.data.materia_id=this.idMateria;let t=new FormData;t.append("texto",this.data.texto),t.append("materia_id",this.data.materia_id),t.append("user_id",this.data.user_id),t.append("files",this.data.files),_.each(this.data.files,(a,e)=>{t.append(`files[${e}]`,a)}),this.axios.post("api/publicacion",t).then(t=>{this.loading=!1,this.data.texto="",this.data.files=[],this.$emit("responseGetPosts",!0)})}},processFile(t){this.data.files=t.target.files},deleteImage(t){let a=[];(a=Array.from(this.data.files)).splice(a.indexOf(t),1),this.data.files=a}}},s={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("b-container",{staticClass:"padding-lateral-7"},[i("b-form-group",[i("b-form",[i("b-form-group",[i("b-form-input",{attrs:{id:"newPost",placeholder:"Publica algo!!"},model:{value:t.data.texto,callback:function(a){t.$set(t.data,"texto",a)},expression:"data.texto"}}),t._v(" "),i("b-alert",{staticClass:"text-center",attrs:{show:t.hasErrors,variant:"danger"}},[t._v(t._s(t.error))]),t._v(" "),i("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!1,size:10240,mimes:["image/jpg","image/jpeg","application/pdf","application/excel","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","image/png","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]},expression:"{ required: false, size:10240, mimes:['image/jpg','image/jpeg','application/pdf','application/excel','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','image/png','application/vnd.oasis.opendocument.spreadsheet','application/vnd.oasis.opendocument.text','application/vnd.openxmlformats-officedocument.wordprocessingml.document']}"}],ref:"fileInput",class:{"is-invalid":t.errors.has("formComment.inputFile[]")},staticStyle:{display:"none"},attrs:{id:"inputFile",type:"file",multiple:"",name:"inputFile[]"},on:{change:function(a){return t.processFile(a)}}})],1),t._v(" "),i("b-form-group",{attrs:{id:"preview"}},t._l(t.data.files,function(a){return i("div",{key:a.id,staticClass:"img_wrp"},[i("img",{attrs:{src:t.makeUrl(a)}}),t._v(" "),i("img",{staticClass:"close",attrs:{src:e("aKZq")},on:{click:function(e){return t.deleteImage(a)}}})])}),0),t._v(" "),i("b-row",[i("b-col",[i("b-button",{attrs:{size:"sm",variant:"secondary",block:""},on:{click:function(a){return t.$refs.fileInput.click()}}},[t._v("Adjuntar")])],1),t._v(" "),i("b-col",{staticClass:"left-padding"},[i("b-button",{attrs:{size:"sm",disabled:t.disabledButton,variant:"primary",block:""},on:{click:t.hacerPost}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.iconLoading,expression:"iconLoading"}],staticClass:"sizeLoading",attrs:{src:e("kotZ")}}),t._v("\n                            "+t._s(t.textButton))])],1)],1)],1)],1)],1)},staticRenderFns:[]};var n=e("H/SE")(o,s,!1,function(t){e("Dktd")},"data-v-7a3c25b9",null);a.default=n.exports}}]);