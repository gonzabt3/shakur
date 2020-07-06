(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Comentario.vue":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Comentario.vue ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
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
const Like = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../common/Like */ "./resources/assets/js/components/common/Like.vue"));

const Delete = () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../common/Delete */ "./resources/assets/js/components/common/Delete.vue"));

 // const dateFormat ="DD-MM-YYYY HH:mm";

moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale('es-es');
const dateFormat = "D MMM YYYY"; // import Like from '../common/Like';
// import Delete from '../common/Delete';

/* harmony default export */ __webpack_exports__["default"] = ({
  //prueba
  components: {
    Like,
    Delete
  },
  props: ['comentarioData'],

  //data entrante
  data() {
    return {};
  },

  filters: {
    formatDate(value) {
      if (!value) return "-";
      return moment__WEBPACK_IMPORTED_MODULE_0___default()(value, "YYYY-MM-DD HH:mm:ss").format(dateFormat);
    }

  },
  computed: {
    nameAlias: function () {
      if (this.comentarioData.user.alias == null) {
        return this.comentarioData.user.name + ' ' + this.comentarioData.user.apellido;
      } else {
        return this.comentarioData.user.alias;
      }
    }
  },
  methods: {
    getComentarios() {
      this.$emit("getComentarios");
    },

    showModalLikes(idPost, type) {
      // console.log(idPost);
      this.$emit("showModalLikes", idPost, type);
    },

    showModalDenuncias(idItem, type) {
      this.$emit("showModalDenuncias", idItem, type);
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77605f1e\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Comentario.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-77605f1e","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Comentario.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.no-margin-bottom[data-v-77605f1e]{\n    margin-bottom: 0px;\n}\n.no-padding-left[data-v-77605f1e]{\n    padding-left: 0px;\n}\n.no-padding[data-v-77605f1e]{\n    padding-right: 0px;\n    padding-left: 0px;\n}\n.thumbnail-custom[data-v-77605f1e]{\n    border:none !important;\n    width: 48px;\n    height: 48px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-77605f1e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Comentario.vue":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-77605f1e","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Comentario.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-form-group",
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "no-padding", attrs: { cols: "2" } },
            [
              _c("b-img", {
                staticClass: "thumbnail-custom",
                attrs: {
                  rounded: "circle",
                  thumbnail: "",
                  src: _vm.comentarioData.user.avatar_url,
                  alt: "Thumbnail"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "10" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { staticClass: "no-padding-left", attrs: { cols: "10" } },
                    [
                      _c("label", { staticClass: "no-margin-bottom" }, [
                        _c("b", [_vm._v(_vm._s(_vm.nameAlias))]),
                        _vm._v(
                          " • " +
                            _vm._s(
                              _vm._f("formatDate")(
                                _vm.comentarioData.created_at
                              )
                            )
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { cols: "1" } },
                    [
                      _c("delete", {
                        attrs: {
                          id: _vm.comentarioData.id,
                          "flag-autor": _vm.comentarioData.flagAutor,
                          tipo: "comment"
                        },
                        on: {
                          actualizar: _vm.getComentarios,
                          showModalDenuncias: _vm.showModalDenuncias
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
                "b-row",
                [
                  _c("b-col", { staticClass: "no-padding-left" }, [
                    _c("label", { staticClass: "text-break" }, [
                      _vm._v(_vm._s(_vm.comentarioData.texto))
                    ])
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c("like", {
                    attrs: {
                      "likes-data": _vm.comentarioData.likes_comentarios,
                      "flag-like": _vm.comentarioData.flagLike,
                      "id-post": _vm.comentarioData.id,
                      "url-like": "api/like/comentario",
                      tipo: "cm"
                    },
                    on: { showModal: _vm.showModalLikes }
                  })
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77605f1e\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Comentario.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-77605f1e","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Comentario.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-77605f1e","scoped":true,"hasInlineConfig":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Comentario.vue */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77605f1e\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Comentario.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")("3974bfb1", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/assets/js/components/common/Comentario.vue":
/*!**************************************************************!*\
  !*** ./resources/assets/js/components/common/Comentario.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Comentario_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Comentario.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Comentario.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_77605f1e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Comentario_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-77605f1e","hasScoped":true,"buble":{"transforms":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Comentario.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-77605f1e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Comentario.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader!../../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-77605f1e","scoped":true,"hasInlineConfig":false}!../../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Comentario.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-77605f1e\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Comentario.vue")
}
var normalizeComponent = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/component-normalizer */ "./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-77605f1e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Comentario_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_77605f1e_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Comentario_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/common/Comentario.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);