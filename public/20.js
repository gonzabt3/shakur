(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{L6Ix:function(t,a,o){(t.exports=o("I1BE")(!1)).push([t.i,".no-margin-bottom[data-v-bc4df8ca]{margin-bottom:0}.no-padding-left[data-v-bc4df8ca]{padding-left:0}",""])},tKVv:function(t,a,o){var e=o("L6Ix");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);o("SZ7m")("77823426",e,!0,{})},yxA9:function(t,a,o){"use strict";o.r(a);var e={components:{Like:()=>Promise.resolve().then(o.bind(null,"M6Jn")),Delete:()=>o.e(0).then(o.bind(null,"ETkg"))},props:["comentarioData"],data:()=>({}),computed:{nameAlias:function(){return null==this.comentarioData.user.alias?this.comentarioData.user.name+" "+this.comentarioData.user.apellido:this.comentarioData.user.alias}},methods:{getComentarios(){this.$emit("getComentarios")},showModalLikes(t,a){console.log(t),this.$emit("showModalLikes",t,a)},showModalDenuncias(t,a){this.$emit("showModalDenuncias",t,a)}}},i={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("b-form-group",[o("b-row",[o("b-col",{attrs:{cols:"2"}},[o("b-img",{attrs:{rounded:"circle",width:"50",height:"50",thumbnail:"",fluid:"",src:t.comentarioData.user.avatar_url,alt:"Thumbnail"}})],1),t._v(" "),o("b-col",{attrs:{cols:"9"}},[o("b-row",[o("b-col",{staticClass:"no-padding-left",attrs:{cols:"10"}},[o("b-form-group",[o("h5",{staticClass:"no-margin-bottom"},[t._v(t._s(t.nameAlias))])])],1),t._v(" "),o("b-col",{attrs:{cols:"1"}},[o("delete",{attrs:{id:t.comentarioData.id,"flag-autor":t.comentarioData.flagAutor,tipo:"comment"},on:{actualizar:t.getComentarios,showModalDenuncias:t.showModalDenuncias}})],1)],1),t._v(" "),o("b-row",[o("p",{staticClass:"form-control"},[t._v(t._s(t.comentarioData.texto))])]),t._v(" "),o("b-row",{attrs:{cols:"8"}},[o("like",{attrs:{"likes-data":t.comentarioData.likes_comentarios,"flag-like":t.comentarioData.flagLike,"id-post":t.comentarioData.id,"url-like":"api/like/comentario",tipo:"cm"},on:{showModal:t.showModalLikes}})],1)],1)],1)],1)},staticRenderFns:[]};var s=o("H/SE")(e,i,!1,function(t){o("tKVv")},"data-v-bc4df8ca",null);a.default=s.exports}}]);