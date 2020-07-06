(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/modals/ModalReportError.vue":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/modals/ModalReportError.vue ***!
  \******************************************************************************************************************************************************************/
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
  props: ['idMateria'],
  $_veeValidate: {
    validator: "new"
  },

  data() {
    return {
      data: {
        descripcion: '',
        file: null,
        materia_id: this.idMateria
      },
      error: '',
      loading: false,
      disabledButton: false,
      textButton: 'Reportar',
      iconLoading: false
    };
  },

  watch: {
    idMateria: function (val) {
      return val;
    },
    loading: function (value) {
      if (value) {
        this.disabledButton = true;
        this.textButton = '';
        this.iconLoading = true;
      } else {
        this.disabledButton = false;
        this.textButton = 'Reportar';
        this.iconLoading = false;
      }
    }
  },
  computed: {
    hasErrors() {
      return this.error != "";
    }

  },
  methods: {
    submit() {
      this.loading = true;
      this.$validator.validateAll().then(result => {
        if (result) {
          let formData = new FormData();
          formData.append('descripcion', this.data.descripcion);
          formData.append('materia_id', this.idMateria);
          formData.append('files', this.data.file);

          _.each(this.data.file, (file, key) => {
            formData.append(`files[${key}]`, file);
          });

          this.axios.post('api/reportsErrors', formData).then(response => {
            this.loading = false;
            this.cleanModal();
            this.$refs.reportError.hide();
          });
        } else {
          this.loading = false;
          this.error = "Por favor, corrija los campos en rojo";
        }
      });
    },

    cleanModal() {
      this.data.descripcion = ''; // this.data.temas = '';

      this.data.file = null;
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08209a29\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalReportError.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-08209a29","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalReportError.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.sizeLoading[data-v-08209a29]{\n        width: 30px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-08209a29\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/modals/ModalReportError.vue":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-08209a29","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/modals/ModalReportError.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-modal",
    {
      ref: "reportError",
      attrs: { id: "reportError", title: "Reportar error" },
      on: { hide: _vm.cleanModal }
    },
    [
      _c(
        "b-container",
        [
          _c(
            "b-form",
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Descripción del error:",
                    "label-for": "descripcion"
                  }
                },
                [
                  _c("b-form-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required",
                        expression: "'required'"
                      }
                    ],
                    class: { "is-invalid": _vm.errors.has("descripcion") },
                    attrs: {
                      id: "descripcion",
                      placeholder: "Ingresa una descripción",
                      name: "descripcion"
                    },
                    model: {
                      value: _vm.data.descripcion,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "descripcion", $$v)
                      },
                      expression: "data.descripcion"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-form-invalid-feedback", [_vm._v("Campor requerido")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Adjunta una captura:",
                    "label-for": "data.file"
                  }
                },
                [
                  _c("b-form-file", {
                    attrs: {
                      placeholder: "Elije un archivo",
                      name: "inputFile[]",
                      multiple: ""
                    },
                    model: {
                      value: _vm.data.file,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "file", $$v)
                      },
                      expression: "data.file"
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
            "b-alert",
            {
              staticClass: "text-center",
              attrs: { show: _vm.hasErrors, variant: "danger" }
            },
            [_vm._v(_vm._s(_vm.error))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("template", { slot: "modal-footer" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-success btn-block",
            attrs: { type: "submit", disabled: _vm.disabledButton },
            on: { click: _vm.submit }
          },
          [
            _c("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.iconLoading,
                  expression: "iconLoading"
                }
              ],
              staticClass: "sizeLoading",
              attrs: { src: __webpack_require__(/*! ../loadingWhite.svg */ "./resources/assets/js/components/loadingWhite.svg") }
            }),
            _vm._v("\n    " + _vm._s(_vm.textButton))
          ]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["default"] = (esExports);
if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08209a29\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalReportError.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-08209a29","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalReportError.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-08209a29","scoped":true,"hasInlineConfig":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ModalReportError.vue */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08209a29\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalReportError.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")("7fa8f5a8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/assets/js/components/modals/ModalReportError.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/modals/ModalReportError.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ModalReportError_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./ModalReportError.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/modals/ModalReportError.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_08209a29_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ModalReportError_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-08209a29","hasScoped":true,"buble":{"transforms":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ModalReportError.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-08209a29\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/modals/ModalReportError.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader!../../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-08209a29","scoped":true,"hasInlineConfig":false}!../../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./ModalReportError.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-08209a29\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalReportError.vue")
}
var normalizeComponent = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/component-normalizer */ "./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-08209a29"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ModalReportError_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_08209a29_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ModalReportError_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/modals/ModalReportError.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);