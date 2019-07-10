(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Topbar.vue":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Topbar.vue ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/common/Notification */ "./resources/assets/js/components/common/Notification.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Topbar',
  components: {
    notification: _components_common_Notification__WEBPACK_IMPORTED_MODULE_0__["default"]
  },

  data() {
    return {
      materias: [],
      username: '',
      avatar_url: '',
      materiaSelected: ''
    };
  },

  mounted() {
    this.getMaterias();
  },

  filters: {
    //corta el nombre de la materia seleccionda porqe sino no entra
    formatMateriaSelected(val) {
      let ancho = window.innerWidth;

      if (ancho <= 576) {
        if (val.length >= 25) {
          let resto = val.length - 25;
          val = val.slice(0, -resto);
          console.log(val + '...');
          return val + '...';
        } else {
          return val;
        }
      } else {
        return val = '';
      }
    }

  },
  methods: {
    getMaterias() {
      // this.axios.defaults.headers.common['Accept'] = 'application/json'; 
      // this.axios.defaults.headers.common['Authorization'] = 'Bearer '+sessionStorage.getItem('token'); 
      this.axios.get("api/materias2/user").then(response => {
        // console.log(response.data)
        this.username = response.data.username;
        this.avatar_url = response.data.avatar;
        response.data.materias.forEach(materia => {
          let obj = {
            id: materia.id,
            nombre: materia.materia
          };
          this.materias.push(obj);
        }); //hago que se setean los walls y el muro con la primera materia que tiene el user

        if (this.materias.length > 0) {
          this.clickMateria(this.materias[0].id);
        } else {
          this.$emit("comunication", true);
        }
      });
    },

    //funcion que marca la materia actual
    clickMateria(val) {
      _.each(this.materias, (materia, key) => {
        if (materia.id == val) {
          this.materiaSelected = materia.nombre;
        }
      });

      this.$emit("changeMateria", val);
    },

    //METODO PARA ABRIR UN POST DESDE LAS NOTIFICACIONES
    openPost(idPost) {
      this.$emit("openPost", idPost);
    }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Notification.vue":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Notification.vue ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'laravel-echo',
  components: {
    Echo: laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"],
    Pusher: (pusher_js__WEBPACK_IMPORTED_MODULE_1___default())
  },

  data() {
    return {
      echo: null,
      numberNotifaction: 0,
      variantButton: "primary"
    };
  },

  mounted() {
    this.connect();
    this.eventMe();
  },

  watch: {
    numberNotifaction(value) {
      if (value > 0) {
        this.variantButton = "danger";
      } else {
        this.variantButton = "primary";
      }
    }

  },
  methods: {
    //METODOS DE LAS NOTIFIACIONES
    ver(dataNotification) {
      // console.log(dataNotification);
      this.markAsRead(dataNotification);
      this.$emit("openPost", dataNotification.data.publicacion.id);
    },

    liveNotification(dataNotification) {
      // console.log(dataNotification);
      let text = dataNotification.data.message; //config para las notificaciones

      let config = {
        theme: "outline",
        position: "top-right",
        duration: 5000,
        action: [{
          text: 'IR',
          onClick: (e, toastObject) => {
            this.ver(dataNotification); // toastObject.goAway(0);
          }
        }, {
          text: 'LEIDA',
          onClick: (e, toastObject) => {
            this.markAsRead(dataNotification); // toastObject.goAway(0);
          }
        }]
      };
      this.$toasted.show(text, config);
    },

    //request a notificaciones
    openNotifacation() {
      this.axios.get("api/notifications").then(response => {
        let notifications = response.data;
        this.numberNotifaction = notifications.length;

        _.each(notifications, (noti, key) => {
          this.liveNotification(noti);
        });
      });
    },

    connect() {
      if (!this.echo) {
        this.echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
          broadcaster: 'pusher',
          key: 'b5806fbd6f412d4ca0e2',
          cluster: 'us2',
          // wsHost:'localhost',
          wsHost: 'www.shakur.com.ar',
          wsPort: 6001,
          wssPort: 6001,
          disableStats: true,
          encrypted: true,
          enabledTransports: ['ws', 'wss'],
          forceTLS: true,
          // authEndpoint: 'http://localhost/broadcasting/auth',
          auth: {
            headers: {
              Authorization: null
            }
          },
          csrfToken: null //namespace: 'App',

        });
        this.echo.connector.pusher.connection.bind('connected', event => this.connect(event)); // this.echo.connector.pusher.connection.bind('disconnected', () => this.disconnect())
      }

      this.echo.connector.pusher.config.auth.headers.Authorization = 'Bearer ' + sessionStorage.getItem("token");
      this.echo.connector.pusher.connect(); // if(this.echo &&   this.echo.connector.pusher.connection.connection !== null){
      //     console.log("CONECTADO")
      // }
    },

    //a la escucha de las noti por broadcast
    async eventMe() {
      let idUser = await this.getIdUser();
      this.echo.private('App.User.' + idUser).notification(notification => {
        // METO LA NOTIFICACION EN UN OBJECTO PARA FORMATEARLO ESTRUCTURALMENTE COMO VIENE DESDE EL REQUEST DE LD DB
        let object = {
          data: notification
        };
        this.liveNotification(object);
      });
    },

    markAsRead(notification) {
      // console.log(notification);
      this.axios.post('api/notification', notification).then(response => {});
    },

    getIdUser() {
      return new Promise(resolve => {
        this.axios.get("api/usuario").then(response => {
          resolve(response.data.id);
        });
      });
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00c1d495\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Topbar.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-00c1d495","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Topbar.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.valentine[data-v-00c1d495]{\n  font-family:valentine !important;\n}\n.white[data-v-00c1d495]{\n  color:#ffffff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-65229430\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Notification.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-65229430","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Notification.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pointer[data-v-65229430]{\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-00c1d495\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Topbar.vue":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-00c1d495","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Topbar.vue ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-navbar",
    { attrs: { toggleable: "md", type: "dark", variant: "info" } },
    [
      _c("b-navbar-toggle", { attrs: { target: "nav_collapse" } }),
      _vm._v(" "),
      _c("label", { staticClass: "text-center white" }, [
        _vm._v(_vm._s(_vm._f("formatMateriaSelected")(_vm.materiaSelected)))
      ]),
      _vm._v(" "),
      _c("b-navbar-brand", { staticClass: "valentine", attrs: { href: "#" } }, [
        _vm._v("Shakur")
      ]),
      _vm._v(" "),
      _c(
        "b-collapse",
        { attrs: { "is-nav": "", id: "nav_collapse" } },
        [
          _c(
            "b-navbar-nav",
            _vm._l(_vm.materias, function(materia) {
              return _c(
                "b-nav-item",
                {
                  key: materia.id,
                  attrs: { id: "materia" },
                  on: {
                    click: function($event) {
                      return _vm.clickMateria(materia.id)
                    }
                  }
                },
                [_vm._v(_vm._s(materia.nombre))]
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "b-navbar-nav",
            { staticClass: "ml-auto" },
            [
              _c("h4", [_vm._v(_vm._s(_vm.username) + " ")]),
              _vm._v(" "),
              _c("b-img", {
                attrs: {
                  rounded: "circle",
                  width: "30",
                  height: "30",
                  src: _vm.avatar_url
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-navbar-brand",
        [_c("notification", { on: { openPost: _vm.openPost } })],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["default"] = (esExports);
if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-65229430\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Notification.vue":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-65229430","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Notification.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    [
      _c(
        "b-button",
        {
          attrs: { variant: _vm.variantButton },
          on: { click: _vm.openNotifacation }
        },
        [
          _c("font-awesome-icon", {
            staticClass: "pointer",
            attrs: { icon: "bell" }
          }),
          _vm._v(" "),
          _c(
            "b-badge",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.numberNotifaction > 0,
                  expression: "numberNotifaction>0"
                }
              ],
              attrs: { variant: "light" }
            },
            [
              _vm._v(
                "\n                 " +
                  _vm._s(_vm.numberNotifaction) +
                  "\n             "
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["default"] = (esExports);
if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00c1d495\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Topbar.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-00c1d495","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Topbar.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-00c1d495","scoped":true,"hasInlineConfig":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Topbar.vue */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00c1d495\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Topbar.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")("ee636372", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-65229430\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Notification.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-65229430","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Notification.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-65229430","scoped":true,"hasInlineConfig":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notification.vue */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-65229430\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Notification.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")("2c961ce9", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/assets/js/components/Topbar.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/components/Topbar.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Topbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Topbar.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/Topbar.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_00c1d495_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Topbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-00c1d495","hasScoped":true,"buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Topbar.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-00c1d495\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/Topbar.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-00c1d495","scoped":true,"hasInlineConfig":false}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Topbar.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00c1d495\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/Topbar.vue")
}
var normalizeComponent = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/component-normalizer */ "./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-00c1d495"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Topbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_00c1d495_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Topbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/Topbar.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/assets/js/components/common/Notification.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/common/Notification.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Notification_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Notification.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Notification.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_65229430_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Notification_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-65229430","hasScoped":true,"buble":{"transforms":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Notification.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-65229430\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Notification.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader!../../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-65229430","scoped":true,"hasInlineConfig":false}!../../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Notification.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-65229430\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Notification.vue")
}
var normalizeComponent = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/component-normalizer */ "./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-65229430"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Notification_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_65229430_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Notification_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/common/Notification.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);