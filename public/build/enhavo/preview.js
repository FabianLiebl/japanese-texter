(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preview"],{

/***/ "./node_modules/@enhavo/app/preview/PreviewApp.ts":
/*!********************************************************!*\
  !*** ./node_modules/@enhavo/app/preview/PreviewApp.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var PreviewApp = /** @class */function () {
    function PreviewApp(data, eventDispatcher, view, actionManager, componentRegistry) {
      this.data = data;
      this.eventDispatcher = eventDispatcher;
      this.view = view;
      this.actionManager = actionManager;
      this.componentRegistry = componentRegistry;
    }
    PreviewApp.prototype.init = function () {
      var _this = this;
      this.actionManager.init();
      this.view.init();
      this.componentRegistry.registerData(this.data);
      this.componentRegistry.registerStore('previewApp', this);
      this.eventDispatcher.on('data', function (event) {
        if (event.id == _this.view.getId()) {
          if (!event.data || event.data.length === 0) {
            return;
          }
          _this.data.inputs = event.data;
          // delay submit so vue has time to update form
          setTimeout(function () {
            _this.submit();
          }, 500);
        }
      });
      this.view.addDefaultCloseListener();
      this.view.ready();
    };
    PreviewApp.prototype.submit = function () {
      $('form').submit();
    };
    return PreviewApp;
  }();
  exports["default"] = PreviewApp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue":
/*!******************************************************************************!*\
  !*** ./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApplicationComponent_vue_vue_type_template_id_3fbe30e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationComponent.vue?vue&type=template&id=3fbe30e6& */ "./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue?vue&type=template&id=3fbe30e6&");
/* harmony import */ var _ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApplicationComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApplicationComponent_vue_vue_type_template_id_3fbe30e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApplicationComponent_vue_vue_type_template_id_3fbe30e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/preview/components/ApplicationComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./ApplicationComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue?vue&type=template&id=3fbe30e6&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue?vue&type=template&id=3fbe30e6& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_template_id_3fbe30e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../vue-loader/lib??vue-loader-options!./ApplicationComponent.vue?vue&type=template&id=3fbe30e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue?vue&type=template&id=3fbe30e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_template_id_3fbe30e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_template_id_3fbe30e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/assets/fonts/enhavo-icons.font */ "./node_modules/@enhavo/app/assets/fonts/enhavo-icons.font.js"), __webpack_require__(/*! @enhavo/app/assets/styles/view.scss */ "./node_modules/@enhavo/app/assets/styles/view.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ApplicationComponent = /** @class */function (_super) {
    __extends(ApplicationComponent, _super);
    function ApplicationComponent() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.iframeClass = 'desktop';
      return _this;
    }
    ApplicationComponent.prototype.mounted = function () {
      var _this = this;
      $(document).on('tablet', function () {
        _this.iframeClass = 'tablet';
        _this.$forceUpdate();
      });
      $(document).on('desktop', function () {
        _this.iframeClass = 'desktop';
        _this.$forceUpdate();
      });
      $(document).on('mobile', function () {
        _this.iframeClass = 'mobile';
        _this.$forceUpdate();
      });
    };
    ApplicationComponent = __decorate([vue_property_decorator_1.Component], ApplicationComponent);
    return ApplicationComponent;
  }(vue_property_decorator_1.Vue);
  exports["default"] = ApplicationComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue?vue&type=template&id=3fbe30e6&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/preview/components/ApplicationComponent.vue?vue&type=template&id=3fbe30e6& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy
  return _c(
    "div",
    { staticClass: "app-view" },
    [
      _c("view-view"),
      _vm._v(" "),
      _c("action-bar"),
      _vm._v(" "),
      _c(
        "div",
        {
          class: {
            "preview-view": true,
            tablet: _vm.iframeClass === "tablet",
            mobile: _vm.iframeClass === "mobile",
            desktop: _vm.iframeClass === "desktop",
          },
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: {
            action: _vm.$previewApp.data.url,
            method: "post",
            target: "preview",
          },
        },
        [
          _vm._l(_vm.$previewApp.data.inputs, function (input) {
            return [
              _c("input", {
                attrs: { type: "hidden", name: input.name },
                domProps: { value: input.value },
              }),
            ]
          }),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy
    return _c("iframe", { staticClass: "iframe", attrs: { name: "preview" } })
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvcHJldmlldy9QcmV2aWV3QXBwLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9wcmV2aWV3L2NvbXBvbmVudHMvQXBwbGljYXRpb25Db21wb25lbnQudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9wcmV2aWV3L2NvbXBvbmVudHMvQXBwbGljYXRpb25Db21wb25lbnQudnVlPzNiNzIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ByZXZpZXcvY29tcG9uZW50cy9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/YjA3ZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvcHJldmlldy9jb21wb25lbnRzL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT80M2RhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9wcmV2aWV3L2NvbXBvbmVudHMvQXBwbGljYXRpb25Db21wb25lbnQudnVlP2UzMDQiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJQcmV2aWV3QXBwIiwiZGF0YSIsImV2ZW50RGlzcGF0Y2hlciIsInZpZXciLCJhY3Rpb25NYW5hZ2VyIiwiY29tcG9uZW50UmVnaXN0cnkiLCJwcm90b3R5cGUiLCJpbml0IiwiX3RoaXMiLCJyZWdpc3RlckRhdGEiLCJyZWdpc3RlclN0b3JlIiwib24iLCJldmVudCIsImlkIiwiZ2V0SWQiLCJsZW5ndGgiLCJpbnB1dHMiLCJzZXRUaW1lb3V0Iiwic3VibWl0IiwiYWRkRGVmYXVsdENsb3NlTGlzdGVuZXIiLCJyZWFkeSIsIiQiLCJBcHBsaWNhdGlvbkNvbXBvbmVudCIsIl9zdXBlciIsIl9fZXh0ZW5kcyIsImFwcGx5IiwiYXJndW1lbnRzIiwiaWZyYW1lQ2xhc3MiLCJtb3VudGVkIiwiZG9jdW1lbnQiLCIkZm9yY2VVcGRhdGUiLCJfX2RlY29yYXRlIiwidnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xIiwiQ29tcG9uZW50IiwiVnVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7RUFRQSxJQUFBQSxVQUFBO0lBU0ksU0FBQUEsV0FDSUMsSUFBaUIsRUFDakJDLGVBQWdDLEVBQ2hDQyxJQUFVLEVBQ1ZDLGFBQTRCLEVBQzVCQyxpQkFBNkM7TUFFN0MsSUFBSSxDQUFDSixJQUFJLEdBQUdBLElBQUk7TUFDaEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBLGVBQWU7TUFDdEMsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7TUFDaEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBLGFBQWE7TUFDbEMsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0EsaUJBQWlCO0lBQzlDO0lBRUFMLFVBQUEsQ0FBQU0sU0FBQSxDQUFBQyxJQUFJLEdBQUo7TUFBQSxJQUFBQyxLQUFBO01BQ0ksSUFBSSxDQUFDSixhQUFhLENBQUNHLElBQUksRUFBRTtNQUN6QixJQUFJLENBQUNKLElBQUksQ0FBQ0ksSUFBSSxFQUFFO01BRWhCLElBQUksQ0FBQ0YsaUJBQWlCLENBQUNJLFlBQVksQ0FBQyxJQUFJLENBQUNSLElBQUksQ0FBQztNQUM5QyxJQUFJLENBQUNJLGlCQUFpQixDQUFDSyxhQUFhLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztNQUV4RCxJQUFJLENBQUNSLGVBQWUsQ0FBQ1MsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDQyxLQUFnQjtRQUM3QyxJQUFHQSxLQUFLLENBQUNDLEVBQUUsSUFBSUwsS0FBSSxDQUFDTCxJQUFJLENBQUNXLEtBQUssRUFBRSxFQUFFO1VBQzlCLElBQUksQ0FBQ0YsS0FBSyxDQUFDWCxJQUFJLElBQUlXLEtBQUssQ0FBQ1gsSUFBSSxDQUFDYyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3hDOztVQUVKUCxLQUFJLENBQUNQLElBQUksQ0FBQ2UsTUFBTSxHQUFHSixLQUFLLENB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdDQUFnQyxrQkFBa0IsRUFBRTtBQUM3RSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoicHJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb25NYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vQWN0aW9uTWFuYWdlclwiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBEYXRhRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvRGF0YUV2ZW50XCI7XG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIlxuaW1wb3J0IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2VcIjtcbmltcG9ydCBQcmV2aWV3RGF0YSBmcm9tIFwiQGVuaGF2by9hcHAvcHJldmlldy9QcmV2aWV3RGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmV2aWV3QXBwXG57XG4gICAgcHVibGljIGRhdGE6IFByZXZpZXdEYXRhO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25NYW5hZ2VyOiBBY3Rpb25NYW5hZ2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGRhdGE6IFByZXZpZXdEYXRhLFxuICAgICAgICBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcixcbiAgICAgICAgdmlldzogVmlldyxcbiAgICAgICAgYWN0aW9uTWFuYWdlcjogQWN0aW9uTWFuYWdlcixcbiAgICAgICAgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyID0gZXZlbnREaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmFjdGlvbk1hbmFnZXIgPSBhY3Rpb25NYW5hZ2VyO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0gY29tcG9uZW50UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25NYW5hZ2VyLmluaXQoKTtcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyRGF0YSh0aGlzLmRhdGEpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyU3RvcmUoJ3ByZXZpZXdBcHAnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5vbignZGF0YScsIChldmVudDogRGF0YUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZihldmVudC5pZCA9PSB0aGlzLnZpZXcuZ2V0SWQoKSkge1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnQuZGF0YSB8fCBldmVudC5kYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5pbnB1dHMgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgICAgIC8vIGRlbGF5IHN1Ym1pdCBzbyB2dWUgaGFzIHRpbWUgdG8gdXBkYXRlIGZvcm1cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZpZXcuYWRkRGVmYXVsdENsb3NlTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy52aWV3LnJlYWR5KCk7XG4gICAgfVxuXG4gICAgc3VibWl0KClcbiAgICB7XG4gICAgICAgICQoJ2Zvcm0nKS5zdWJtaXQoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZmJlMzBlNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9yZXBvcy9wcml2YXQvamFwYW5lc2UtdGV4dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNmYmUzMGU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNmYmUzMGU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNmYmUzMGU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2ZiZTMwZTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2ZiZTMwZTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9wcmV2aWV3L2NvbXBvbmVudHMvQXBwbGljYXRpb25Db21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwbGljYXRpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cmVmLS02IS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2ZiZTMwZTYmXCIiLCJcbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50IH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCAnQGVuaGF2by9hcHAvYXNzZXRzL2ZvbnRzL2VuaGF2by1pY29ucy5mb250J1xuaW1wb3J0ICdAZW5oYXZvL2FwcC9hc3NldHMvc3R5bGVzL3ZpZXcuc2Nzcyc7XG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYXRpb25Db21wb25lbnQgZXh0ZW5kcyBWdWVcbntcbiAgICBpZnJhbWVDbGFzczogc3RyaW5nID0gJ2Rlc2t0b3AnO1xuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3RhYmxldCcsICgpICA9PiB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZUNsYXNzID0gJ3RhYmxldCc7XG4gICAgICAgICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignZGVza3RvcCcsICgpICA9PiB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZUNsYXNzID0gJ2Rlc2t0b3AnO1xuICAgICAgICAgICAgdGhpcy4kZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ21vYmlsZScsICgpICA9PiB7XG4gICAgICAgICAgICB0aGlzLmlmcmFtZUNsYXNzID0gJ21vYmlsZSc7XG4gICAgICAgICAgICB0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fYyxcbiAgICBfc2V0dXAgPSBfdm0uX3NlbGYuX3NldHVwUHJveHlcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJhcHAtdmlld1wiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2aWV3LXZpZXdcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhY3Rpb24tYmFyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwicHJldmlldy12aWV3XCI6IHRydWUsXG4gICAgICAgICAgICB0YWJsZXQ6IF92bS5pZnJhbWVDbGFzcyA9PT0gXCJ0YWJsZXRcIixcbiAgICAgICAgICAgIG1vYmlsZTogX3ZtLmlmcmFtZUNsYXNzID09PSBcIm1vYmlsZVwiLFxuICAgICAgICAgICAgZGVza3RvcDogX3ZtLmlmcmFtZUNsYXNzID09PSBcImRlc2t0b3BcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl9tKDApXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgYWN0aW9uOiBfdm0uJHByZXZpZXdBcHAuZGF0YS51cmwsXG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgdGFyZ2V0OiBcInByZXZpZXdcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS4kcHJldmlld0FwcC5kYXRhLmlucHV0cywgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBpbnB1dC5uYW1lIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGlucHV0LnZhbHVlIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fYyxcbiAgICAgIF9zZXR1cCA9IF92bS5fc2VsZi5fc2V0dXBQcm94eVxuICAgIHJldHVybiBfYyhcImlmcmFtZVwiLCB7IHN0YXRpY0NsYXNzOiBcImlmcmFtZVwiLCBhdHRyczogeyBuYW1lOiBcInByZXZpZXdcIiB9IH0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=