(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Delete.vue":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Delete.vue ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dalete",
  props: ['id', 'tipo', 'flagAutor', 'size'],

  data() {
    return {};
  },

  methods: {
    sumbit() {
      // console.log(this.flagAutor);
      if (this.flagAutor) {
        this.axios.delete('api/' + this.tipo + '/' + this.id).then(({
          data
        }) => {
          this.$emit("actualizar", true);
        });
      } else {
        this.$emit("showModalDenuncias", this.id, this.tipo);
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c7f6268\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Delete.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-2c7f6268","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Delete.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* codigo para hacer solida la X cuando se le esta enzima */\n.opacidad[data-v-2c7f6268]{\n    opacity: 0.5;\n}\n.solido[data-v-2c7f6268]:hover{\n    opacity: 1.0;\n}\n.pointer[data-v-2c7f6268]{\n    cursor: pointer;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2c7f6268\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Delete.vue":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c7f6268","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Delete.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("font-awesome-icon", {
    staticClass: "opacidad solido pointer",
    attrs: { icon: "times" },
    on: { click: _vm.sumbit }
  })
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["default"] = (esExports);
if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c7f6268\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Delete.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-2c7f6268","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Delete.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-2c7f6268","scoped":true,"hasInlineConfig":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Delete.vue */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c7f6268\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Delete.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")("58700e30", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/assets/js/components/common/Delete.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/common/Delete.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Delete_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./Delete.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/common/Delete.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c7f6268_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Delete_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2c7f6268","hasScoped":true,"buble":{"transforms":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./Delete.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2c7f6268\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/common/Delete.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader!../../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-2c7f6268","scoped":true,"hasInlineConfig":false}!../../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./Delete.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c7f6268\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/common/Delete.vue")
}
var normalizeComponent = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/component-normalizer */ "./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c7f6268"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Delete_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c7f6268_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Delete_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/common/Delete.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);