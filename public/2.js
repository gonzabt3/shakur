(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"6TH6":function(e,t,i){var o=i("AczN");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i("SZ7m")("56376c12",o,!0,{})},"89Ay":function(e,t,i){"use strict";i.r(t);var o={props:["mailUser","p1","p2","title","flagButton","closeOutSide","noCerrar"],computed:{p:function(){return""==this.mailUser?this.p2:this.p2+" "+this.mailUser}},methods:{miPerfil(){this.$refs.comunicationModal.hide(),this.$emit("openMiPerfil",!0)}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-container",[i("b-modal",{ref:"comunicationModal",attrs:{"no-close-on-backdrop":e.noCerrar,"no-close-on-esc":e.noCerrar,"hide-header-close":e.noCerrar,"hide-footer":!0,id:"comunicationModal",title:e.title}},[i("p",[e._v(e._s(e.p1)+".")]),e._v(" "),i("p",[e._v(e._s(e.p))]),e._v(" "),e.flagButton?i("b-btn",{attrs:{block:"",variant:"primary"},on:{click:e.miPerfil}},[e._v("Ir a mi perfil")]):e._e()],1)],1)},staticRenderFns:[]};var n=i("H/SE")(o,r,!1,function(e){i("6TH6")},"data-v-47ee6e83",null);t.default=n.exports},AczN:function(e,t,i){(e.exports=i("I1BE")(!1)).push([e.i,"",""])}}]);