(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{ETkg:function(t,i,a){"use strict";a.r(i);var o={name:"dalete",props:["id","tipo","flagAutor","size"],data:()=>({}),methods:{sumbit(){this.flagAutor?this.axios.delete("api/"+this.tipo+"/"+this.id).then(({data:t})=>{this.$emit("actualizar",!0)}):this.$emit("showModalDenuncias",this.id,this.tipo)}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("font-awesome-icon",{staticClass:"opacidad solido pointer",attrs:{icon:"times"},on:{click:this.sumbit}})},staticRenderFns:[]};var e=a("H/SE")(o,s,!1,function(t){a("OeEy")},"data-v-c87d94c0",null);i.default=e.exports},IDrB:function(t,i,a){(t.exports=a("I1BE")(!1)).push([t.i,".opacidad[data-v-c87d94c0]{opacity:.5}.solido[data-v-c87d94c0]:hover{opacity:1}.pointer[data-v-c87d94c0]{cursor:pointer}",""])},OeEy:function(t,i,a){var o=a("IDrB");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("SZ7m")("45b52d4f",o,!0,{})}}]);