(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{RYBM:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".valentine[data-v-0a2fc860]{font-family:valentine!important}.white[data-v-0a2fc860]{color:#fff}",""])},"V/EK":function(a,t,e){"use strict";e.r(t);var i={name:"Topbar",data:()=>({materias:[],username:"",avatar_url:"",materiaSelected:""}),mounted(){this.getMaterias()},filters:{formatMateriaSelected(a){if(window.innerWidth<=576){if(a.length>=25){let t=a.length-25;return a=a.slice(0,-t),console.log(a+"..."),a+"..."}return a}return""}},methods:{getMaterias(){this.axios.get("api/materias2/user").then(a=>{this.username=a.data.username,this.avatar_url=a.data.avatar,a.data.materias.forEach(a=>{let t={id:a.id,nombre:a.materia};this.materias.push(t)}),this.materias.length>0?this.clickMateria(this.materias[0].id):this.$emit("comunication")})},clickMateria(a){_.each(this.materias,(t,e)=>{t.id==a&&(this.materiaSelected=t.nombre)}),this.$emit("changeMateria",a)}}},r={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"info"}},[e("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),a._v(" "),e("label",{staticClass:"text-center white"},[a._v(a._s(a._f("formatMateriaSelected")(a.materiaSelected)))]),a._v(" "),e("b-navbar-brand",{staticClass:"valentine",attrs:{href:"#"}},[a._v("Shakur")]),a._v(" "),e("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-navbar-nav",a._l(a.materias,function(t){return e("b-nav-item",{key:t.id,attrs:{id:"materia"},on:{click:function(e){return a.clickMateria(t.id)}}},[a._v(a._s(t.nombre))])}),1),a._v(" "),e("b-navbar-nav",{staticClass:"ml-auto"},[e("h4",[a._v(a._s(a.username)+" ")]),a._v(" "),e("b-img",{attrs:{rounded:"circle",width:"30",height:"30",src:a.avatar_url}})],1)],1)],1)},staticRenderFns:[]};var n=e("H/SE")(i,r,!1,function(a){e("s0kA")},"data-v-0a2fc860",null);t.default=n.exports},s0kA:function(a,t,e){var i=e("RYBM");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e("SZ7m")("7deb1380",i,!0,{})}}]);