(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{ETkg:function(t,i,o){"use strict";o.r(i);var a={name:"dalete",props:["id","tipo","flagAutor","size"],data:()=>({}),methods:{sumbit(){console.log(this.flagAutor),this.flagAutor?this.axios.delete("api/"+this.tipo+"/"+this.id).then(({data:t})=>{this.$emit("actualizar",!0)}):this.$emit("showModalDenuncias",this.id,this.tipo)}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("font-awesome-icon",{staticClass:"opacidad solido pointer",attrs:{icon:"times"},on:{click:this.sumbit}})},staticRenderFns:[]};var e=o("H/SE")(a,s,!1,function(t){o("YvYL")},"data-v-78d598c2",null);i.default=e.exports},YvYL:function(t,i,o){var a=o("tACf");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("SZ7m")("3045a445",a,!0,{})},tACf:function(t,i,o){(t.exports=o("I1BE")(!1)).push([t.i,".opacidad[data-v-78d598c2]{opacity:.5}.solido[data-v-78d598c2]:hover{opacity:1}.pointer[data-v-78d598c2]{cursor:pointer}",""])}}]);