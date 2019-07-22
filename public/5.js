(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/PostNew.vue":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/PostNew.vue ***!
  \**************************************************************************************************************************************************/
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
  name: 'PostNew',
  props: ['idMateria'],
  $_veeValidate: {
    validator: "new"
  },

  data() {
    return {
      data: {
        texto: null,
        materia_id: this.idMateria,
        user_id: null,
        files: []
      },
      textButton: 'Publicar',
      disabledButton: false,
      loading: false,
      iconLoading: false,
      urlFiles: []
    };
  },

  //   computed:{
  //       makeUrl(value){
  //           return URL.createObjectURL(value);
  //       }
  //   },
  watch: {
    loading: function (value) {
      if (value) {
        this.disabledButton = true;
        this.textButton = '';
        this.iconLoading = true;
      } else {
        this.disabledButton = false;
        this.textButton = 'Publicar';
        this.iconLoading = false;
      }
    }
  },
  methods: {
    makeUrl(value) {
      return URL.createObjectURL(value);
    },

    hacerPost() {
      this.loading = true;
      this.data.materia_id = this.idMateria;
      let formData = new FormData();
      formData.append('texto', this.data.texto);
      formData.append('materia_id', this.data.materia_id);
      formData.append('user_id', this.data.user_id);
      formData.append('files', this.data.files);

      _.each(this.data.files, (file, key) => {
        formData.append(`files[${key}]`, file);
      }); // formData.forEach(entries => console.log(entries));


      this.axios.post('api/publicacion', formData).then(response => {
        this.loading = false;
        this.data.texto = '', this.data.files = [], this.$emit("responseGetPosts", true);
      });
    },

    //GUARDA EN LA VARIABLE EL ARCHIVO SELECCIONADO
    processFile(event) {
      this.data.files = event.target.files;
    },

    deleteImage(item) {
      let r = [];
      r = Array.from(this.data.files);
      r.splice(r.indexOf(item), 1);
      this.data.files = r;
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61b1fe0e\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/PostNew.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-61b1fe0e","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/PostNew.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    /* override a la clase de bootsrap */\n.card-body[data-v-61b1fe0e]{\n        padding-top: 7px;\n        padding-left: 7px;\n        padding-bottom: 7px;\n        padding-right: 7px;\n}\n\n    /* override a la clase de bootsrap */\n.card-title[data-v-61b1fe0e]{\n        margin-bottom: 7px;\n}\n.padding-lateral-7[data-v-61b1fe0e]{\n        padding-left: 7px;\n        padding-right: 7px;\n}\n.shadow[data-v-61b1fe0e]{\n        box-shadow: 10px 10px grey;\n}\n.left-padding[data-v-61b1fe0e]{\n        padding-left: 0px;\n}\n#preview[data-v-61b1fe0e] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#preview img[data-v-61b1fe0e] {\n  max-width: 100%;\n  max-height: 150px;\n}\n.img_wrp[data-v-61b1fe0e] {\n   display: inline-block;\n   position: relative;\n}\n.close[data-v-61b1fe0e] {\n    position: absolute;\n    top: 0; \n    right: 0;\n    width: 30px;\n}\n.sizeLoading[data-v-61b1fe0e]{\n        width: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-61b1fe0e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/PostNew.vue":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-61b1fe0e","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/PostNew.vue ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "padding-lateral-7" },
    [
      _c(
        "b-form-group",
        [
          _c(
            "b-card",
            { staticClass: "shadow", attrs: { title: "Nueva Publicacion" } },
            [
              _c(
                "b-form",
                [
                  _c(
                    "b-form-group",
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "newPost",
                          required: "",
                          placeholder: "Publica algo!!"
                        },
                        model: {
                          value: _vm.data.texto,
                          callback: function($$v) {
                            _vm.$set(_vm.data, "texto", $$v)
                          },
                          expression: "data.texto"
                        }
                      }),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: {
                              required: false,
                              size: 10240,
                              mimes: [
                                "image/jpg",
                                "image/jpeg",
                                "application/pdf",
                                "application/excel",
                                "application/vnd.ms-excel",
                                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                "image/png",
                                "application/vnd.oasis.opendocument.spreadsheet",
                                "application/vnd.oasis.opendocument.text",
                                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                              ]
                            },
                            expression:
                              "{ required: false, size:10240, mimes:['image/jpg','image/jpeg','application/pdf','application/excel','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','image/png','application/vnd.oasis.opendocument.spreadsheet','application/vnd.oasis.opendocument.text','application/vnd.openxmlformats-officedocument.wordprocessingml.document']}"
                          }
                        ],
                        ref: "fileInput",
                        class: {
                          "is-invalid": _vm.errors.has(
                            "formComment.inputFile[]"
                          )
                        },
                        staticStyle: { display: "none" },
                        attrs: {
                          id: "inputFile",
                          type: "file",
                          multiple: "",
                          name: "inputFile[]"
                        },
                        on: {
                          change: function($event) {
                            return _vm.processFile($event)
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    { attrs: { id: "preview" } },
                    _vm._l(_vm.data.files, function(file) {
                      return _c(
                        "div",
                        { key: file.id, staticClass: "img_wrp" },
                        [
                          _c("img", { attrs: { src: _vm.makeUrl(file) } }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "close",
                            attrs: {
                              src: __webpack_require__(/*! ../components/closeIcon.png */ "./resources/assets/js/components/closeIcon.png")
                            },
                            on: {
                              click: function($event) {
                                return _vm.deleteImage(file)
                              }
                            }
                          })
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c(
                        "b-col",
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "secondary", block: "" },
                              on: {
                                click: function($event) {
                                  return _vm.$refs.fileInput.click()
                                }
                              }
                            },
                            [_vm._v("Adjuntar")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "left-padding" },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                disabled: _vm.disabledButton,
                                variant: "primary",
                                block: ""
                              },
                              on: { click: _vm.hacerPost }
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
                                attrs: {
                                  src: __webpack_require__(/*! ../components/loadingWhite.svg */ "./resources/assets/js/components/loadingWhite.svg")
                                }
                              }),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.textButton)
                              )
                            ]
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61b1fe0e\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/PostNew.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-61b1fe0e","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/PostNew.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-61b1fe0e","scoped":true,"hasInlineConfig":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PostNew.vue */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61b1fe0e\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/PostNew.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")("2b03f3b9", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/assets/js/components/PostNew.vue":
/*!****************************************************!*\
  !*** ./resources/assets/js/components/PostNew.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PostNew_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./PostNew.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/PostNew.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_61b1fe0e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PostNew_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-61b1fe0e","hasScoped":true,"buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./PostNew.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-61b1fe0e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/PostNew.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-61b1fe0e","scoped":true,"hasInlineConfig":false}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./PostNew.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-61b1fe0e\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/PostNew.vue")
}
var normalizeComponent = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/component-normalizer */ "./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-61b1fe0e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PostNew_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_61b1fe0e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PostNew_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/PostNew.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./resources/assets/js/components/closeIcon.png":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/closeIcon.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/closeIcon.png?73368be852b85675d36764bbb04e1e7a";

/***/ }),

/***/ "./resources/assets/js/components/loadingWhite.svg":
/*!*********************************************************!*\
  !*** ./resources/assets/js/components/loadingWhite.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/loadingWhite.svg?bf114a48be96b3b634b75a06b0a58af9";

/***/ })

}]);