(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{tBdH:function(e,t,i){e.exports=function(){"use strict";var e={props:["images","index"],mounted:function(){var e=this;window.addEventListener("keydown",function(t){37===t.keyCode&&e.onPrev(),39===t.keyCode&&e.onNext()})},watch:{index:function(e){this.imgIndex=e}},methods:{close:function(){this.imgIndex=null,this.$emit("close")},onPrev:function(){null!==this.imgIndex&&(this.imgIndex>0?this.imgIndex--:this.imgIndex=this.images.length-1,this.updateThumbails())},onNext:function(){null!==this.imgIndex&&(this.imgIndex<this.images.length-1?this.imgIndex++:this.imgIndex=0,this.updateThumbails())},onClickThumb:function(e,t){this.imgIndex=t,this.updateThumbails()},updateThumbails:function(){if(this.$refs.gallery){var e=this.$refs.gallery.clientWidth,t=this.imgIndex*this.thumbnailWidth,i=this.images.length*this.thumbnailWidth,n=Math.floor(e/(2*this.thumbnailWidth))*this.thumbnailWidth;i<e||(t<n?this.galleryXPos=0:t>this.images.length*this.thumbnailWidth-e+n?this.galleryXPos=-(this.images.length*this.thumbnailWidth-e-20):this.galleryXPos=-this.imgIndex*this.thumbnailWidth+n)}}},computed:{imageUrl:function(){return this.images[this.imgIndex]},isMultiple:function(){return this.images.length>1}},data:function(){return{imgIndex:this.index,image:null,galleryXPos:0,thumbnailWidth:120}}};const t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),i=document.head||document.getElementsByTagName("head")[0],n={};var s=e;e.__file="GallerySlideshow.vue";var o=void 0,a=void 0;return function(e,t,i,n,s,o,a,r,l,d){"function"==typeof a&&(l=r,r=a,a=!1);const c="function"==typeof i?i.options:i;let h;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),n&&(c._scopeId=n),o?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=h):t&&(h=a?function(){t.call(this,d(this.$root.$options.shadowRoot))}:function(e){t.call(this,r(e))}),h)if(c.functional){const e=c.render;c.render=function(t,i){return h.call(i),e(t,i)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,h):[h]}return i}({render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("transition",{attrs:{name:"modal"}},[null!==e.imgIndex?i("div",{staticClass:"vgs",on:{click:e.close}},[i("button",{staticClass:"vgs__close",on:{click:e.close}},[e._v("×")]),e._v(" "),e.isMultiple?i("button",{staticClass:"vgs__prev",on:{click:function(t){return t.stopPropagation(),e.onPrev(t)}}},[e._v("‹")]):e._e(),e._v(" "),e.images?i("div",{staticClass:"vgs__container",on:{click:function(t){return t.stopPropagation(),e.onNext(t)}}},[i("img",{staticClass:"vgs__container__img",attrs:{src:e.imageUrl},on:{click:function(t){return t.stopPropagation(),e.onNext(t)}}})]):e._e(),e._v(" "),e.isMultiple?i("button",{staticClass:"vgs__next",on:{click:function(t){return t.stopPropagation(),e.onNext(t)}}},[e._v("›")]):e._e(),e._v(" "),e.isMultiple?i("div",{ref:"gallery",staticClass:"vgs__gallery"},[e.images?i("div",{staticClass:"vgs__gallery__title"},[e._v(e._s(e.imgIndex+1)+" / "+e._s(e.images.length))]):e._e(),e._v(" "),e.images?i("div",{staticClass:"vgs__gallery__container",style:{transform:"translate("+e.galleryXPos+"px, 0)"}},e._l(e.images,function(t,n){return i("img",{key:n,staticClass:"vgs__gallery__container__img",class:{"vgs__gallery__container__img--active":n===e.imgIndex},attrs:{src:t},on:{click:function(i){i.stopPropagation(),e.onClickThumb(t,n)}}})}),0):e._e()]):e._e()]):e._e()])},staticRenderFns:[]},function(e){e&&e("data-v-3aec641d_0",{source:".vgs{transition:opacity .2s ease;position:fixed;z-index:9998;top:0;left:0;width:100%;min-height:100%;height:100vh;background-color:rgba(0,0,0,.8);display:table}.vgs__close{color:#fff;position:absolute;top:0;right:0;background-color:transparent;border:none;font-size:25px;width:50px;height:50px;cursor:pointer;z-index:999}.vgs__close:focus{outline:0}.vgs__next,.vgs__prev{position:absolute;top:50%;margin-top:-25px;width:50px;height:50px;z-index:999;cursor:pointer;font-size:40px;color:#fff;background-color:transparent;border:none}.vgs__next:focus,.vgs__prev:focus{outline:0}.vgs__prev{left:0}.vgs__next{right:0}.vgs__container{position:absolute;overflow:hidden;cursor:pointer;overflow:hidden;max-width:100vh;margin:.5rem auto 0;left:.5rem;right:.5rem;height:60vh;border-radius:12px;background-color:#000}@media (max-width:767px){.vgs__container{width:100%;max-width:100%;top:50%;margin-top:-140px;left:0;right:0;border-radius:0;height:280px}}.vgs__container__img{width:100%;height:100%;object-fit:contain}.vgs__gallery{overflow-x:hidden;overflow-y:hidden;position:absolute;bottom:10px;margin:auto;max-width:100vh;white-space:nowrap;left:.5rem;right:.5rem}@media (max-width:767px){.vgs__gallery{display:none}}.vgs__gallery__title{color:#fff;margin-bottom:.5rem}.vgs__gallery__container{overflow:visible;display:block;height:100px;white-space:nowrap;transition:all .2s ease-in-out;width:100%}.vgs__gallery__container__img{width:100px;height:100px;object-fit:cover;display:inline-block;float:none;margin-right:20px;cursor:pointer;opacity:.6;border-radius:8px}.vgs__gallery__container__img--active{width:100px;display:inline-block;float:none;opacity:1}.modal-enter{opacity:0}.modal-leave-active{opacity:0}",map:void 0,media:void 0})},s,o,!1,a,function(e){return(e,s)=>(function(e,s){const o=t?s.media||"default":e,a=n[o]||(n[o]={ids:new Set,styles:[]});if(!a.ids.has(e)){a.ids.add(e);let t=s.source;if(s.map&&(t+="\n/*# sourceURL="+s.map.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",s.media&&a.element.setAttribute("media",s.media),i.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(t),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{const e=a.ids.size-1,i=document.createTextNode(t),n=a.element.childNodes;n[e]&&a.element.removeChild(n[e]),n.length?a.element.insertBefore(i,n[e]):a.element.appendChild(i)}}})(e,s)},void 0)}()}}]);