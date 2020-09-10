(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/SettingsWall.vue":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/SettingsWall.vue ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
const ModalConfigUser = () => __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../components/modals/ModalConfigUser */ "./resources/assets/js/components/modals/ModalConfigUser.vue"));

const ModalReportError = () => __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ../components/modals/ModalReportError */ "./resources/assets/js/components/modals/ModalReportError.vue")); // import ModalConfigUser from '../components/modals/ModalConfigUser';


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SettingsWall',
  components: {
    ModalConfigUser,
    ModalReportError
  },
  props: ['noCerrar', 'idMateria'],
  methods: {
    showModal() {
      this.$root.$emit('bv::show::modal', 'configUser');
    },

    showModalErrorReport() {
      this.$root.$emit('bv::show::modal', 'reportError');
    },

    logout() {
      sessionStorage.removeItem('token');
      this.axios.get('api/auth/logout').then(response => {
        window.location.replace("/");
      });
    },

    deleteAccount() {
      this.$confirm("¿Estas seguro que quieres borrar tu cuenta?").then(() => {
        this.axios.delete('api/auth/delete').then(response => {
          if (response.status == 200) {
            alert("Tu usuario ha sido eliminado con exito. :(");
            window.location.replace("/");
          }
        });
      });
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-577bfbc4\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/SettingsWall.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-577bfbc4","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/SettingsWall.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* #settingsCard{\n    height: 100%;\n} */\n.shadow[data-v-577bfbc4]{\n        box-shadow: 10px 10px grey;\n}\n.pointer[data-v-577bfbc4]{\n    cursor: pointer;\n}\n.padding-5[data-v-577bfbc4]{\n    padding-left: 5px;\n    padding-right: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-577bfbc4\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/SettingsWall.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-577bfbc4","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/SettingsWall.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-container",
    { staticClass: "padding-5" },
    [
      _c(
        "b-card",
        {
          staticClass: "shadow",
          attrs: { id: "settingsCard", title: "Configuracion" }
        },
        [
          _c("h6", { on: { click: _vm.showModal } }, [
            _c("u", { staticClass: "pointer" }, [_vm._v("Mi perfil")])
          ]),
          _vm._v(" "),
          _c("h6", { on: { click: _vm.showModalErrorReport } }, [
            _c("u", { staticClass: "pointer" }, [_vm._v("Reportar errores")])
          ]),
          _vm._v(" "),
          _c("h6", [
            _c("u", { staticClass: "pointer", on: { click: _vm.logout } }, [
              _vm._v("Salir")
            ])
          ]),
          _vm._v(" "),
          _c("h6", [
            _c(
              "u",
              { staticClass: "pointer", on: { click: _vm.deleteAccount } },
              [_vm._v("Eliminar cuenta")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("modal-config-user", { attrs: { noCerrar: _vm.noCerrar } }),
      _vm._v(" "),
      _c("modal-report-error", { attrs: { idMateria: _vm.idMateria } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-577bfbc4\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/SettingsWall.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-577bfbc4","scoped":true,"sourceMap":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/SettingsWall.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-577bfbc4","scoped":true,"sourceMap":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SettingsWall.vue */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-577bfbc4\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/SettingsWall.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-loader/node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3d38f334", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/assets/js/components/SettingsWall.vue":
/*!*********************************************************!*\
  !*** ./resources/assets/js/components/SettingsWall.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SettingsWall_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./SettingsWall.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/SettingsWall.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_577bfbc4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SettingsWall_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-577bfbc4","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./SettingsWall.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-577bfbc4\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/SettingsWall.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-loader/node_modules/vue-style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-577bfbc4","scoped":true,"sourceMap":false}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./SettingsWall.vue */ "./node_modules/vue-loader/node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-577bfbc4\",\"scoped\":true,\"sourceMap\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/SettingsWall.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-577bfbc4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SettingsWall_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_577bfbc4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SettingsWall_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_577bfbc4_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SettingsWall_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/SettingsWall.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);