(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{L2Q5:function(t,a,e){var i=e("YqAj");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("SZ7m")("09d95e33",i,!0,{})},M6Jn:function(t,a,e){"use strict";e.r(a);var i={name:"Like",props:["likesData","flagLike","idPost","urlLike","tipo"],data(){return{beerIcon:"../images/beer.png",stringBtnLike:"Like",btnLikeEstado:!1,cantidadLikes:this.likesData.length}},mounted(){this.estadoBtnLike()},methods:{showModalLike(){this.$emit("showModal",this.idPost,this.tipo)},btnLike(){if(this.btnLikeEstado)this.axios.delete(this.urlLike+"/"+this.idPost).then(t=>{this.btnLikeEstado=!1,this.cantidadLikes-=1});else{let t;"mg"==this.tipo&&(t={publicacion_id:this.idPost}),"cm"==this.tipo&&(t={comentario_id:this.idPost}),this.axios.post(this.urlLike,t).then(t=>{this.btnLikeEstado=!0,this.cantidadLikes+=1})}},estadoBtnLike(){this.btnLikeEstado=this.flagLike}},watch:{btnLikeEstado(t){this.beerIcon=1==t?"../images/beerVacia.png":"../images/beer.png",this.stringBtnLike=""}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{attrs:{fluid:""}},[e("b-row",[e("b-col",{staticClass:"no-padding-lateral"},[e("span",{on:{click:t.btnLike}},[t._v("\n                    "+t._s(t.cantidadLikes)+"  \n                    "),t._v(" "),e("b-img",{attrs:{src:t.beerIcon,fluid:"",alt:"beerLike"}})],1)]),t._v(" "),e("b-col",{staticClass:"no-padding-lateral"},[e("span",{on:{click:t.showModalLike}},[t._v("\n                Ver likes\n            ")])])],1)],1)},staticRenderFns:[]};var o=e("H/SE")(i,s,!1,function(t){e("L2Q5")},"data-v-ade83af0",null);a.default=o.exports},UzB4:function(t,a,e){var i=e("mHYf");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("SZ7m")("ea5305e4",i,!0,{})},YqAj:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".alto[data-v-ade83af0]{height:34px}.no-padding-lateral[data-v-ade83af0]{padding-left:0;padding-right:0}",""])},c2hV:function(t,a,e){"use strict";e.r(a);var i=e("M6Jn"),s=e("wd/R"),o=e.n(s);o.a.locale("es-es");var n={name:"PostUser",components:{Comentario:()=>e.e(10).then(e.bind(null,"yxA9")),Like:i.default,Delete:()=>e.e(0).then(e.bind(null,"ETkg")),VueGallerySlideshow:()=>e.e(23).then(e.t.bind(null,"tBdH",7))},props:["postData"],data(){return{commentIcon:"../images/comment.png",progreso:55,cantComentarios:this.postData.cantidadComentarios,showComentarios:!1,showManyComentarios:!1,iconEyeComentarios:"eye",user:1,arrayFiles:[],arrayImages:[],arrayComentarios:[],objectComentario:{texto:"",publicacion_id:this.postData.id},indexImage:null}},filters:{formatDate:t=>t?o()(t,"YYYY-MM-DD HH:mm:ss").format("D MMM YYYY HH:mm"):"-"},computed:{nameAlias:function(){return null==this.postData.user.alias||"null"==this.postData.user.alias?this.postData.user.name+" "+this.postData.user.apellido:this.postData.user.alias},urlImages:function(){let t=[];return _.each(this.arrayImages,(a,e)=>{t.push(a.path)}),t}},mounted(){this.separateFilesAdjuntos()},methods:{separateFilesAdjuntos(){let t=this.postData.files;_.each(t,(t,a)=>{let e=t.extension;"png"==e||"jepg"==e||"jpg"==e||"gif"==e||"PNG"==e||"JEPG"==e||"JPG"==e||"GIF"==e?this.arrayImages.push(t):this.arrayFiles.push(t)})},onClick(t){this.indexImage=t},showModalLikes(t,a){this.$emit("showModalLikes",t,a)},showModalDenuncias(t,a){this.$emit("showModalDenuncias",t,a)},submitComentario(){this.axios.post("api/comentario",this.objectComentario).then(t=>{this.objectComentario.texto="",this.getComentarios()})},comentarios(){this.showComentarios?this.showComentarios=!1:this.getComentarios()},getComentarios(){0==this.arrayComentarios.length&&this.axios.get("api/comentarios/"+this.postData.id).then(({data:t})=>{this.arrayComentarios=t}),this.showComentarios=!0},getPosts(t=null){this.$emit("getPosts",t)}},watch:{showManyComentarios(t){this.iconEyeComentarios=1==t?"eye-slash":"eye"}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"padding-lateral-7",attrs:{fluid:""}},[e("b-row",[e("b-col",{staticClass:"padding-right-7",attrs:{cols:"2"}},[e("b-img",{staticClass:"thumbnail-custom",attrs:{rounded:"circle",thumbnail:"",src:t.postData.user.avatar_url,alt:"Thumbnail"}})],1),t._v(" "),e("b-col",{attrs:{cols:"10"}},[e("b-row",{staticClass:"altoDivNombre"},[e("b-col",{staticClass:"no-padding"},[e("label",{staticClass:"text-left"},[e("b",[t._v(t._s(t.nameAlias))]),t._v(" • "+t._s(t._f("formatDate")(t.postData.created_at))+" ")])]),t._v(" "),e("b-col",{staticClass:"no-padding text-center",attrs:{cols:"1"}},[e("delete",{attrs:{id:t.postData.id,"flag-autor":t.postData.flagAutor,tipo:"post"},on:{actualizar:t.getPosts,showModalDenuncias:t.showModalDenuncias}})],1)],1),t._v(" "),e("b-row",[e("b-col",{staticClass:"text-break no-padding-left"},[t._v("\n                        "+t._s(t.postData.texto)+"\n                        ")])],1),t._v(" "),e("b-row",[t._l(t.arrayImages,function(a,i){return e("img",{key:i,staticClass:"image cuadrado100px",attrs:{src:a.path},on:{click:function(a){return t.onClick(i)}}})}),t._v(" "),t._l(t.arrayFiles,function(a,i){return e("b-button",{key:i,attrs:{variant:"outline-dark",href:a.path,download:""}},[t._v("\n                            "+t._s(a.nombre))])}),t._v(" "),e("vue-gallery-slideshow",{attrs:{images:t.urlImages,index:t.indexImage},on:{close:function(a){t.indexImage=null}}})],2),t._v(" "),e("b-row",{staticClass:"form-group"},[e("b-col",{staticClass:"no-padding"},[e("like",{attrs:{"likes-data":t.postData.likes,"flag-like":t.postData.flagLike,"id-post":t.postData.id,"url-like":"api/like",tipo:"mg"},on:{showModal:t.showModalLikes}})],1),t._v(" "),e("b-col",[e("span",{on:{click:t.comentarios}},[t._v("\n                                "+t._s(t.cantComentarios)+"\n                            "),e("b-img",{attrs:{src:t.commentIcon,fluid:"",alt:"comments"}})],1)])],1),t._v(" "),e("b-row",[t.showComentarios?e("b-col",[t._l(t.arrayComentarios,function(a){return e("comentario",{key:a.id,attrs:{"comentario-data":a},on:{getComentarios:t.getComentarios,showModalLikes:t.showModalLikes,showModalDenuncias:t.showModalDenuncias}})}),t._v(" "),e("hr",{staticClass:"hr-custom"}),t._v(" "),e("b-row",[e("b-col",[e("b-form-input",{attrs:{id:"newComent",required:"",placeholder:"Comenta algo"},model:{value:t.objectComentario.texto,callback:function(a){t.$set(t.objectComentario,"texto",a)},expression:"objectComentario.texto"}})],1),t._v(" "),e("b-col",{attrs:{cols:"3"}},[e("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.submitComentario}},[e("font-awesome-icon",{attrs:{icon:"comment"}})],1)],1)],1)],2):t._e()],1)],1)],1),t._v(" "),e("hr",{staticClass:"hr-custom "})],1)},staticRenderFns:[]};var l=e("H/SE")(n,r,!1,function(t){e("UzB4")},"data-v-baeff130",null);a.default=l.exports},mHYf:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,'#nombreUser[data-v-baeff130]{padding-left:0}.separacionIcon[data-v-baeff130]{margin-bottom:3%;margin-left:3%}.pointer[data-v-baeff130]{cursor:pointer}.altoDivNombre[data-v-baeff130]{height:20px}.shadow[data-v-baeff130]{box-shadow:10px 10px grey}.no-margin-bottom[data-v-baeff130]{margin-bottom:0}.no-padding[data-v-baeff130]{padding-left:0;padding-right:15px}.no-padding-left[data-v-baeff130]{padding-left:0}.left-padding-20[data-v-baeff130]{padding-left:20px}.strike[data-v-baeff130]{display:block;text-align:center;overflow:hidden;white-space:nowrap}.strike>span[data-v-baeff130]{position:relative;display:inline-block}.strike>span[data-v-baeff130]:after,.strike>span[data-v-baeff130]:before{content:"";position:absolute;top:50%;width:9999px;height:1px;background:grey}.strike>span[data-v-baeff130]:before{right:100%;margin-right:15px}.strike>span[data-v-baeff130]:after{left:100%;margin-left:15px}.padding-lateral-7[data-v-baeff130]{padding-left:7px;padding-right:7px}.card-body[data-v-baeff130]{padding:7px!important}.cuadrado100px[data-v-baeff130]{width:100px;height:100px}.thumbnail-custom[data-v-baeff130]{border:none!important;width:48px;height:48px}.padding-right-7[data-v-baeff130]{padding-right:0}.hr-custom[data-v-baeff130]{margin-top:8px;margin-bottom:8px}',""])}}]);