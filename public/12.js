(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/modals/ModalDenuncias.vue":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/modals/ModalDenuncias.vue ***!
  \****************************************************************************************************************************************************************/
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
  props: ['id', 'type'],

  data() {
    return {
      denuncia: {
        motivo: 'No correspone al grupo',
        id_item: this.id,
        tipo: this.type
      }
    };
  },

  methods: {
    submit() {
      this.denuncia.id_item = this.id;
      this.denuncia.tipo = this.type;
      this.axios.post("api/denuncias", this.denuncia).then(response => {
        this.$refs.modalDenuncias.hide();
        this.$notify({
          group: 'foo',
          title: 'Denuncia procesada',
          type: 'success'
        });
      });
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a433a9a\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalDenuncias.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-4a433a9a","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalDenuncias.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4a433a9a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/modals/ModalDenuncias.vue":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4a433a9a","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/modals/ModalDenuncias.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
        "b-modal",
        {
          ref: "modalDenuncias",
          attrs: {
            size: "md",
            id: "modalDenuncias",
            "hide-footer": true,
            title: "No te gusto este post?"
          }
        },
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                [
                  _c("b-alert", { attrs: { show: "" } }, [
                    _c("h4", [_vm._v("Info!")]),
                    _vm._v(" "),
                    _c("label", [
                      _vm._v(
                        "Será borrado si a tus compañeros de grupo le parece que es inapropiado tambien"
                      )
                    ]),
                    _vm._v(" "),
                    _c("label", [_vm._v("La denuncia es anonima!")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        label:
                          "Selecciona por que no te gusto el post y denuncialo."
                      }
                    },
                    [
                      _c(
                        "b-form-radio",
                        {
                          attrs: { name: "radios", value: "Politica/Religion" },
                          model: {
                            value: _vm.denuncia.motivo,
                            callback: function($$v) {
                              _vm.$set(_vm.denuncia, "motivo", $$v)
                            },
                            expression: "denuncia.motivo"
                          }
                        },
                        [_vm._v("Politica/Religion")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-radio",
                        {
                          attrs: { name: "radios", value: "Es spam" },
                          model: {
                            value: _vm.denuncia.motivo,
                            callback: function($$v) {
                              _vm.$set(_vm.denuncia, "motivo", $$v)
                            },
                            expression: "denuncia.motivo"
                          }
                        },
                        [_vm._v("Es spam")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-radio",
                        {
                          attrs: { name: "radios", value: "Es ofensivo" },
                          model: {
                            value: _vm.denuncia.motivo,
                            callback: function($$v) {
                              _vm.$set(_vm.denuncia, "motivo", $$v)
                            },
                            expression: "denuncia.motivo"
                          }
                        },
                        [_vm._v("Es ofensivo")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-form-radio",
                        {
                          attrs: {
                            name: "radios",
                            value: "No correspone al grupo"
                          },
                          model: {
                            value: _vm.denuncia.motivo,
                            callback: function($$v) {
                              _vm.$set(_vm.denuncia, "motivo", $$v)
                            },
                            expression: "denuncia.motivo"
                          }
                        },
                        [_vm._v("No correspone al grupo")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { block: "", variant: "success" },
                      on: { click: _vm.submit }
                    },
                    [_vm._v("Denunciar")]
                  )
                ],
                1
              )
            ],
            1
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a433a9a\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalDenuncias.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-4a433a9a","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalDenuncias.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-4a433a9a","scoped":true,"hasInlineConfig":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ModalDenuncias.vue */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a433a9a\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalDenuncias.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")("58a92c99", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/assets/js/components/modals/ModalDenuncias.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/components/modals/ModalDenuncias.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ModalDenuncias_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./ModalDenuncias.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/modals/ModalDenuncias.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a433a9a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ModalDenuncias_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-4a433a9a","hasScoped":true,"buble":{"transforms":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ModalDenuncias.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4a433a9a\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/modals/ModalDenuncias.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader!../../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-4a433a9a","scoped":true,"hasInlineConfig":false}!../../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./ModalDenuncias.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a433a9a\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalDenuncias.vue")
}
var normalizeComponent = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/component-normalizer */ "./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4a433a9a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ModalDenuncias_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a433a9a_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ModalDenuncias_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/modals/ModalDenuncias.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);