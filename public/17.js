(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"LH/0":function(t,a,o){"use strict";o.r(a);var i={name:"SettingsWall",components:{ModalConfigUser:()=>o.e(7).then(o.bind(null,"8QYR"))},props:["noCerrar"],methods:{showModal(){this.$root.$emit("bv::show::modal","configUser")},logout(){this.axios.get("api/auth/logout").then(t=>{window.location.replace("/")})}}},s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("b-container",{staticClass:"padding-5"},[a("b-card",{staticClass:"shadow",attrs:{id:"settingsCard",title:"Configuracion"}},[a("h6",{on:{click:this.showModal}},[a("u",{staticClass:"pointer"},[this._v("Mi perfil")])]),this._v(" "),a("h6",[a("a",{staticClass:"pointer",on:{click:this.logout}},[this._v("Salir")])])]),this._v(" "),a("modal-config-user",{attrs:{noCerrar:this.noCerrar}})],1)},staticRenderFns:[]};var n=o("H/SE")(i,s,!1,function(t){o("Sqvl")},"data-v-d62bca56",null);a.default=n.exports},Sqvl:function(t,a,o){var i=o("ouAF");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o("SZ7m")("d0f5016a",i,!0,{})},ouAF:function(t,a,o){(t.exports=o("I1BE")(!1)).push([t.i,".shadow[data-v-d62bca56]{box-shadow:10px 10px grey}.pointer[data-v-d62bca56]{cursor:pointer}.padding-5[data-v-d62bca56]{padding-left:5px;padding-right:5px}",""])}}]);