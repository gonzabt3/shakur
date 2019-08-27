(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/modals/ModalAvatar.vue":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/modals/ModalAvatar.vue ***!
  \*************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      croppa: {}
    };
  },

  methods: {
    onInit() {
      this.croppa.addClipPlugin(function (ctx, x, y, w, h) {
        /*
         * ctx: canvas context
         * x: start point (top-left corner) x coordination
         * y: start point (top-left corner) y coordination
         * w: croppa width
         * h: croppa height
        */
        // console.log(x, y, w, h)
        ctx.beginPath();
        ctx.arc(x + w / 2, y + h / 2, w / 2, 0, 2 * Math.PI, true);
        ctx.closePath();
      });
    },

    uploadCroppedImage() {
      this.myCroppa.generateBlob(blob => {// write code to upload the cropped image file (a file is a blob)
      }, 'image/jpeg', 0.8); // 80% compressed jpeg file
    }

  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-563fb618\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalAvatar.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-563fb618","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalAvatar.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-563fb618\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/modals/ModalAvatar.vue":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-563fb618","hasScoped":true,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/modals/ModalAvatar.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { fluid: "" } },
    [
      _c(
        "b-modal",
        {
          ref: "modalAvatar",
          attrs: { id: "modalAvatar", title: "Selecciona tu imagen de perfil" }
        },
        [
          _c(
            "b-row",
            [
              _c("croppa", {
                staticClass: "c1",
                attrs: {
                  "image-border-radius": 50,
                  "canvas-color": "#e6e6e6",
                  placeholder: "Selecciona una imagen",
                  "placeholder-font-size": 16,
                  "prevent-white-space": "",
                  "initial-image": "/storage/avatars/5/avatar.png"
                },
                on: { init: _vm.onInit },
                model: {
                  value: _vm.croppa,
                  callback: function($$v) {
                    _vm.croppa = $$v
                  },
                  expression: "croppa"
                }
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
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["default"] = (esExports);
if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-563fb618\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalAvatar.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-563fb618","scoped":true,"hasInlineConfig":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalAvatar.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-563fb618","scoped":true,"hasInlineConfig":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ModalAvatar.vue */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-563fb618\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalAvatar.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js")("1eca7094", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/assets/js/components/modals/ModalAvatar.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/components/modals/ModalAvatar.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ModalAvatar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader!../../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./ModalAvatar.vue */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/modals/ModalAvatar.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_563fb618_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ModalAvatar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-563fb618","hasScoped":true,"buble":{"transforms":{}}}!../../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./ModalAvatar.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-563fb618\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/modals/ModalAvatar.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader!../../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-563fb618","scoped":true,"hasInlineConfig":false}!../../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./ModalAvatar.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-563fb618\",\"scoped\":true,\"hasInlineConfig\":false}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/components/modals/ModalAvatar.vue")
}
var normalizeComponent = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/component-normalizer */ "./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-563fb618"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  _babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ModalAvatar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_563fb618_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ModalAvatar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/modals/ModalAvatar.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);