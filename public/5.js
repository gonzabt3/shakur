(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/9li":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,'#nombreUser[data-v-48c274fc]{padding-left:0}.shadow[data-v-48c274fc]{box-shadow:10px 10px grey}.no-margin-bottom[data-v-48c274fc]{margin-bottom:0}.no-padding[data-v-48c274fc]{padding-left:0;padding-right:0}.no-padding-left[data-v-48c274fc]{padding-left:0}.left-padding-20[data-v-48c274fc]{padding-left:20px}.strike[data-v-48c274fc]{display:block;text-align:center;overflow:hidden;white-space:nowrap}.strike>span[data-v-48c274fc]{position:relative;display:inline-block}.strike>span[data-v-48c274fc]:after,.strike>span[data-v-48c274fc]:before{content:"";position:absolute;top:50%;width:9999px;height:1px;background:grey}.strike>span[data-v-48c274fc]:before{right:100%;margin-right:15px}.strike>span[data-v-48c274fc]:after{left:100%;margin-left:15px}.padding-lateral-7[data-v-48c274fc]{padding-left:7px;padding-right:7px}.card-body[data-v-48c274fc]{padding:7px!important}.cuadrado100px[data-v-48c274fc]{width:100px;height:100px}',""])},"9OPk":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".alto[data-v-e355cb4e]{height:34px}.no-padding-lateral[data-v-e355cb4e]{padding-left:0;padding-right:0}",""])},DcSm:function(t,a,e){var i=e("9OPk");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("SZ7m")("14a8d4ba",i,!0,{})},M6Jn:function(t,a,e){"use strict";e.r(a);var i={name:"Like",props:["likesData","flagLike","idPost","urlLike","tipo"],data(){return{beerIcon:"../images/beer.png",stringBtnLike:"Like",btnLikeEstado:!1,cantidadLikes:this.likesData.length}},mounted(){this.estadoBtnLike()},methods:{showModalLike(){this.$emit("showModal",this.idPost,this.tipo)},btnLike(){if(this.btnLikeEstado)this.axios.delete(this.urlLike+"/"+this.idPost).then(t=>{this.btnLikeEstado=!1,this.cantidadLikes-=1});else{let t;"mg"==this.tipo&&(t={publicacion_id:this.idPost}),"cm"==this.tipo&&(t={comentario_id:this.idPost}),this.axios.post(this.urlLike,t).then(t=>{this.btnLikeEstado=!0,this.cantidadLikes+=1})}},estadoBtnLike(){this.btnLikeEstado=this.flagLike}},watch:{btnLikeEstado(t){this.beerIcon=1==t?"../images/beerVacia.png":"../images/beer.png",this.stringBtnLike=""}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",[e("b-button",{attrs:{block:"",size:"sm"},on:{click:t.btnLike}},[t._v("\n                "+t._s(t.cantidadLikes)+"  \n                "+t._s(t.stringBtnLike)+"\n                "),e("b-img",{attrs:{src:t.beerIcon,fluid:"",alt:"beerLike"}})],1)],1),t._v(" "),e("b-col",{staticClass:"no-padding-lateral"},[e("b-button",{staticClass:"alto ",attrs:{block:"",size:"sm"},on:{click:t.showModalLike}},[t._v("Ver likes")])],1)],1)],1)},staticRenderFns:[]};var o=e("H/SE")(i,s,!1,function(t){e("DcSm")},"data-v-e355cb4e",null);a.default=o.exports},UPxq:function(t,a,e){var i=e("/9li");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("SZ7m")("47499693",i,!0,{})},c2hV:function(t,a,e){"use strict";e.r(a);var i=e("M6Jn"),s=e("wd/R"),o=e.n(s);var n={name:"PostUser",components:{Comentario:()=>e.e(18).then(e.bind(null,"yxA9")),Like:i.default,Delete:()=>e.e(0).then(e.bind(null,"ETkg")),VueGallerySlideshow:()=>e.e(19).then(e.t.bind(null,"tBdH",7))},props:["postData"],data(){return{commentIcon:"../images/comment.png",progreso:55,cantComentarios:null,showComentarios:!1,showManyComentarios:!1,iconEyeComentarios:"eye",user:1,objectComentario:{texto:"",publicacion_id:this.postData.id},indexImage:null}},filters:{formatDate:t=>t?o()(t,"YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY HH:mm"):"-"},computed:{nameAlias:function(){return null==this.postData.user.alias?this.postData.user.name+" "+this.postData.user.apellido:this.postData.user.alias},urlImages:function(){let t=[];return _.each(this.postData.files,(a,e)=>{t.push(a.path)}),t}},methods:{onClick(t){this.indexImage=t},showModalLikes(t,a){this.$emit("showModalLikes",t,a)},showModalDenuncias(t,a){this.$emit("showModalDenuncias",t,a)},submitComentario(){this.axios.post("api/comentario",this.objectComentario).then(t=>{this.objectComentario.texto="",this.getComentarios()})},comentarios(){this.showComentarios?this.showComentarios=!1:(this.getComentarios(),this.showComentarios=!0)},getComentarios(){this.arrayComentarios=[],this.axios.get("api/comentarios/"+this.postData.id).then(({data:t})=>{this.arrayComentarios=t,this.cantComentarios=this.arrayComentarios.length})},getPosts(t=null){this.$emit("getPosts",t)}},watch:{showManyComentarios(t){this.iconEyeComentarios=1==t?"eye-slash":"eye"}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"padding-lateral-7",attrs:{fluid:""}},[e("b-form-group",[e("b-card",{staticClass:"shadow"},[e("b-row",[e("b-col",{staticClass:"text-center",attrs:{cols:"3",id:"imagenUser"}},[e("b-img",{attrs:{rounded:"circle",width:"75",height:"75",thumbnail:"",fluid:"",src:t.postData.user.avatar_url,alt:"Thumbnail"}})],1),t._v(" "),e("b-col",[e("b-row",[e("b-col",{staticClass:"no-padding",attrs:{id:"nombreUser"}},[e("h4",{staticClass:"text-left"},[t._v(t._s(t.nameAlias))])]),t._v(" "),e("b-col",{staticClass:"text-center ",attrs:{cols:"2"}},[e("delete",{attrs:{id:t.postData.id,"flag-autor":t.postData.flagAutor,tipo:"post"},on:{actualizar:t.getPosts,showModalDenuncias:t.showModalDenuncias}})],1)],1),t._v(" "),e("b-row",[e("label",[e("b-badge",{attrs:{pill:"",variant:"secondary"}},[t._v(t._s(t._f("formatDate")(t.postData.created_at)))])],1)])],1)],1),t._v(" "),e("b-form-group",{staticClass:"text-center"},[e("p",{staticClass:"card-text text-justify"},[t._v("\n                    "+t._s(t.postData.texto)+"\n                ")]),t._v(" "),t._l(t.postData.files,function(a,i){return e("img",{key:i,staticClass:"image cuadrado100px",attrs:{src:a.path},on:{click:function(a){return t.onClick(i)}}})}),t._v(" "),e("vue-gallery-slideshow",{attrs:{images:t.urlImages,index:t.indexImage},on:{close:function(a){t.indexImage=null}}})],2),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"8"}},[e("like",{attrs:{"likes-data":t.postData.likes,"flag-like":t.postData.flagLike,"id-post":t.postData.id,"url-like":"api/like",tipo:"mg"},on:{showModal:t.showModalLikes}})],1),t._v(" "),e("b-col",[e("b-button",{attrs:{block:"",size:"sm"},on:{click:t.comentarios}},[t._v("\n                       "+t._s(t.cantComentarios)+"\n                        "),e("b-img",{attrs:{src:t.commentIcon,fluid:"",alt:"comments"}})],1)],1)],1),t._v(" "),e("hr"),t._v(" "),t.showComentarios?e("div",[t._l(t.arrayComentarios,function(a){return e("comentario",{key:a.id,attrs:{"comentario-data":a},on:{getComentarios:t.getComentarios,showModalLikes:t.showModalLikes,showModalDenuncias:t.showModalDenuncias}})}),t._v(" "),e("hr"),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"2"}}),t._v(" "),e("b-col",{attrs:{cols:"7"}},[e("b-form-input",{attrs:{id:"newComent",required:"",placeholder:"Comenta algo"},model:{value:t.objectComentario.texto,callback:function(a){t.$set(t.objectComentario,"texto",a)},expression:"objectComentario.texto"}})],1),t._v(" "),e("b-col",{attrs:{cols:"3"}},[e("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.submitComentario}},[e("font-awesome-icon",{attrs:{icon:"comment"}})],1)],1)],1)],2):t._e()],1)],1)],1)},staticRenderFns:[]};var l=e("H/SE")(n,r,!1,function(t){e("UPxq")},"data-v-48c274fc",null);a.default=l.exports}}]);