(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{NwHA:function(o,e,i){"use strict";i.r(e);var a={props:["id","type"],data(){return{denuncia:{motivo:"No correspone al grupo",id_item:this.id,tipo:this.type}}},methods:{submit(){this.denuncia.id_item=this.id,this.denuncia.tipo=this.type,this.axios.post("api/denuncias",this.denuncia).then(o=>{this.$refs.modalDenuncias.hide(),this.$notify({group:"foo",title:"Denuncia procesada",type:"success"})})}}},n={render:function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("b-container",[i("b-modal",{ref:"modalDenuncias",attrs:{size:"md",id:"modalDenuncias","hide-footer":!0,title:"No te gusto este post?"}},[i("b-row",[i("b-col",[i("b-alert",{attrs:{show:""}},[i("h4",[o._v("Info!")]),o._v(" "),i("label",[o._v("Será borrado si a tus compañeros de grupo le parece que es inapropiado tambien")]),o._v(" "),i("label",[o._v("La denuncia es anonima!")])]),o._v(" "),i("b-form-group",{attrs:{label:"Selecciona por que no te gusto el post y denuncialo."}},[i("b-form-radio",{attrs:{name:"radios",value:"Politica/Religion"},model:{value:o.denuncia.motivo,callback:function(e){o.$set(o.denuncia,"motivo",e)},expression:"denuncia.motivo"}},[o._v("Politica/Religion")]),o._v(" "),i("b-form-radio",{attrs:{name:"radios",value:"Es spam"},model:{value:o.denuncia.motivo,callback:function(e){o.$set(o.denuncia,"motivo",e)},expression:"denuncia.motivo"}},[o._v("Es spam")]),o._v(" "),i("b-form-radio",{attrs:{name:"radios",value:"Es ofensivo"},model:{value:o.denuncia.motivo,callback:function(e){o.$set(o.denuncia,"motivo",e)},expression:"denuncia.motivo"}},[o._v("Es ofensivo")]),o._v(" "),i("b-form-radio",{attrs:{name:"radios",value:"No correspone al grupo"},model:{value:o.denuncia.motivo,callback:function(e){o.$set(o.denuncia,"motivo",e)},expression:"denuncia.motivo"}},[o._v("No correspone al grupo")])],1),o._v(" "),i("b-button",{attrs:{block:"",variant:"success"},on:{click:o.submit}},[o._v("Denunciar")])],1)],1)],1)],1)},staticRenderFns:[]};var t=i("H/SE")(a,n,!1,function(o){i("Xa7q")},"data-v-6d6b96a4",null);e.default=t.exports},RrX1:function(o,e,i){(o.exports=i("I1BE")(!1)).push([o.i,"",""])},Xa7q:function(o,e,i){var a=i("RrX1");"string"==typeof a&&(a=[[o.i,a,""]]),a.locals&&(o.exports=a.locals);i("SZ7m")("7fdb10d4",a,!0,{})}}]);