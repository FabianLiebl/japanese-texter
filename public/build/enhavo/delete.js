(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delete"],{

/***/ "./node_modules/@enhavo/app/delete/DeleteApp.ts":
/*!******************************************************!*\
  !*** ./node_modules/@enhavo/app/delete/DeleteApp.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/view-stack/event/UpdatedEvent */ "./node_modules/@enhavo/app/view-stack/event/UpdatedEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/RemoveEvent */ "./node_modules/@enhavo/app/view-stack/event/RemoveEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, UpdatedEvent_1, RemoveEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DeleteApp = /** @class */function () {
    function DeleteApp(data, eventDispatcher, view, flashMessenger, componentRegistry) {
      this.data = data;
      this.eventDispatcher = eventDispatcher;
      this.view = view;
      this.flashMessenger = flashMessenger;
      this.componentRegistry = componentRegistry;
    }
    DeleteApp.prototype.init = function () {
      this.componentRegistry.registerStore('deleteApp', this);
      this.componentRegistry.registerData(this.data);
      this.view.init();
      this.flashMessenger.init();
      this.view.addDefaultCloseListener();
      this.eventDispatcher.dispatch(new UpdatedEvent_1["default"](this.view.getId()));
      this.view.ready();
    };
    DeleteApp.prototype.close = function () {
      this.eventDispatcher.dispatch(new RemoveEvent_1["default"](this.view.getId()));
    };
    return DeleteApp;
  }();
  exports["default"] = DeleteApp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/delete/components/DeleteComponent.vue":
/*!************************************************************************!*\
  !*** ./node_modules/@enhavo/app/delete/components/DeleteComponent.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeleteComponent_vue_vue_type_template_id_0d074c78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeleteComponent.vue?vue&type=template&id=0d074c78& */ "./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=template&id=0d074c78&");
/* harmony import */ var _DeleteComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeleteComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DeleteComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DeleteComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeleteComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeleteComponent_vue_vue_type_template_id_0d074c78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeleteComponent_vue_vue_type_template_id_0d074c78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/delete/components/DeleteComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./DeleteComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=template&id=0d074c78&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=template&id=0d074c78& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_template_id_0d074c78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../vue-loader/lib??vue-loader-options!./DeleteComponent.vue?vue&type=template&id=0d074c78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=template&id=0d074c78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_template_id_0d074c78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_template_id_0d074c78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/RemoveEvent.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/RemoveEvent.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RemoveEvent = /** @class */function (_super) {
    __extends(RemoveEvent, _super);
    function RemoveEvent(id, saveState) {
      if (saveState === void 0) {
        saveState = true;
      }
      var _this = _super.call(this, 'remove') || this;
      _this.id = id;
      _this.saveState = saveState;
      return _this;
    }
    return RemoveEvent;
  }(Event_1["default"]);
  exports["default"] = RemoveEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/UpdatedEvent.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/UpdatedEvent.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var LoadedEvent = /** @class */function (_super) {
    __extends(LoadedEvent, _super);
    function LoadedEvent(id, data) {
      var _this = _super.call(this, 'updated') || this;
      _this.id = id;
      _this.data = data;
      return _this;
    }
    return LoadedEvent;
  }(Event_1["default"]);
  exports["default"] = LoadedEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! @enhavo/app/flash-message/components/FlashMessages.vue */ "./node_modules/@enhavo/app/flash-message/components/FlashMessages.vue"), __webpack_require__(/*! @enhavo/app/assets/fonts/enhavo-icons.font */ "./node_modules/@enhavo/app/assets/fonts/enhavo-icons.font.js"), __webpack_require__(/*! @enhavo/app/assets/styles/view.scss */ "./node_modules/@enhavo/app/assets/styles/view.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1, FlashMessages_vue_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var AppView = /** @class */function (_super) {
    __extends(AppView, _super);
    function AppView() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    AppView.prototype.close = function () {
      this.$deleteApp.close();
    };
    Object.defineProperty(AppView.prototype, "message", {
      get: function get() {
        return this.$translator.trans('enhavo_app.delete.message.success');
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(AppView.prototype, "button", {
      get: function get() {
        return this.$translator.trans('enhavo_app.delete.label.close');
      },
      enumerable: false,
      configurable: true
    });
    AppView = __decorate([vue_property_decorator_1.Component({
      components: {
        FlashMessages: FlashMessages_vue_1["default"]
      }
    })], AppView);
    return AppView;
  }(vue_property_decorator_1.Vue);
  exports["default"] = AppView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=template&id=0d074c78&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=template&id=0d074c78& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
      _c("flash-messages"),
      _vm._v(" "),
      _c("div", { staticClass: "inline-confirm-dialogue" }, [
        _c("div", { staticClass: "message" }, [_vm._v(_vm._s(_vm.message))]),
        _vm._v(" "),
        _c("button", { staticClass: "btn", on: { click: _vm.close } }, [
          _vm._v(_vm._s(_vm.button)),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZGVsZXRlL0RlbGV0ZUFwcC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZGVsZXRlL2NvbXBvbmVudHMvRGVsZXRlQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZGVsZXRlL2NvbXBvbmVudHMvRGVsZXRlQ29tcG9uZW50LnZ1ZT82YTBjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9kZWxldGUvY29tcG9uZW50cy9EZWxldGVDb21wb25lbnQudnVlPzhkMWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvUmVtb3ZlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvVXBkYXRlZEV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9kZWxldGUvY29tcG9uZW50cy9EZWxldGVDb21wb25lbnQudnVlPzFiZWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2RlbGV0ZS9jb21wb25lbnRzL0RlbGV0ZUNvbXBvbmVudC52dWU/MzM3ZiJdLCJuYW1lcyI6WyJEZWxldGVBcHAiLCJkYXRhIiwiZXZlbnREaXNwYXRjaGVyIiwidmlldyIsImZsYXNoTWVzc2VuZ2VyIiwiY29tcG9uZW50UmVnaXN0cnkiLCJwcm90b3R5cGUiLCJpbml0IiwicmVnaXN0ZXJTdG9yZSIsInJlZ2lzdGVyRGF0YSIsImFkZERlZmF1bHRDbG9zZUxpc3RlbmVyIiwiZGlzcGF0Y2giLCJVcGRhdGVkRXZlbnRfMSIsImdldElkIiwicmVhZHkiLCJjbG9zZSIsIlJlbW92ZUV2ZW50XzEiLCJSZW1vdmVFdmVudCIsIl9zdXBlciIsIl9fZXh0ZW5kcyIsImlkIiwic2F2ZVN0YXRlIiwiX3RoaXMiLCJjYWxsIiwiRXZlbnRfMSIsIkxvYWRlZEV2ZW50IiwiQXBwVmlldyIsIiRkZWxldGVBcHAiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIiR0cmFuc2xhdG9yIiwidHJhbnMiLCJfX2RlY29yYXRlIiwidnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xIiwiQ29tcG9uZW50IiwiY29tcG9uZW50cyIsIkZsYXNoTWVzc2FnZXMiLCJGbGFzaE1lc3NhZ2VzX3Z1ZV8xIiwiVnVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7RUFPQSxJQUFBQSxTQUFBO0lBUUksU0FBQUEsVUFDSUMsSUFBUyxFQUNUQyxlQUFnQyxFQUNoQ0MsSUFBVSxFQUNWQyxjQUE4QixFQUM5QkMsaUJBQTZDO01BRTdDLElBQUksQ0FBQ0osSUFBSSxHQUFHQSxJQUFJO01BQ2hCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQSxlQUFlO01BQ3RDLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJO01BQ2hCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQSxjQUFjO01BQ3BDLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBLGlCQUFpQjtJQUM5QztJQUVBTCxTQUFBLENBQUFNLFNBQUEsQ0FBQUMsSUFBSSxHQUFKO01BQ0ksSUFBSSxDQUFDRixpQkFBaUIsQ0FBQ0csYUFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7TUFDdkQsSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0ksWUFBWSxDQUFDLElBQUksQ0FBQ1IsSUFBSSxDQUFDO01BRTlDLElBQUksQ0FBQ0UsSUFBSSxDQUFDSSxJQUFJLEVBQUU7TUFDaEIsSUFBSSxDQUFDSCxjQUFjLENBQUNHLElBQUksRUFBRTtNQUMxQixJQUFJLENBQUNKLElBQUksQ0FBQ08sdUJBQXVCLEVBQUU7TUFFbkMsSUFBSSxDQUFDUixlQUFlLENBQUNTLFFBQVEsQ0FBQyxJQUFJQyxjQUFBLFdBQVksQ0FBQyxJQUFJLENBQUNULElBQUksQ0FBQ1UsS0FB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Q0FBQyxDLEVBQ21CWixPQUFPLENBWTNCO0lBQUQsT0FBQUEsT0FBQztHQUFBLENBWm9DUSx3QkFBQSxDQUFBSyxHQUFHO3VCQUFuQmIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNSNUI7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywwQkFBMEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5Q0FBeUM7QUFDMUQsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBLHNCQUFzQiwwQkFBMEIsbUJBQW1CLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRlbGV0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5pbXBvcnQgVXBkYXRlZEV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L1VwZGF0ZWRFdmVudFwiO1xuaW1wb3J0IENsb3NlRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvUmVtb3ZlRXZlbnRcIjtcbmltcG9ydCBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL0NvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlXCI7XG5pbXBvcnQgRmxhc2hNZXNzZW5nZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2ZsYXNoLW1lc3NhZ2UvRmxhc2hNZXNzZW5nZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsZXRlQXBwXG57XG4gICAgcHVibGljIGRhdGE6IGFueTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlldztcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZsYXNoTWVzc2VuZ2VyOiBGbGFzaE1lc3NlbmdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBkYXRhOiBhbnksXG4gICAgICAgIGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyLFxuICAgICAgICB2aWV3OiBWaWV3LFxuICAgICAgICBmbGFzaE1lc3NlbmdlcjogRmxhc2hNZXNzZW5nZXIsXG4gICAgICAgIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZVxuICAgICkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5mbGFzaE1lc3NlbmdlciA9IGZsYXNoTWVzc2VuZ2VyO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0gY29tcG9uZW50UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlclN0b3JlKCdkZWxldGVBcHAnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckRhdGEodGhpcy5kYXRhKTtcblxuICAgICAgICB0aGlzLnZpZXcuaW5pdCgpO1xuICAgICAgICB0aGlzLmZsYXNoTWVzc2VuZ2VyLmluaXQoKTtcbiAgICAgICAgdGhpcy52aWV3LmFkZERlZmF1bHRDbG9zZUxpc3RlbmVyKCk7XG5cbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFVwZGF0ZWRFdmVudCh0aGlzLnZpZXcuZ2V0SWQoKSkpO1xuXG4gICAgICAgIHRoaXMudmlldy5yZWFkeSgpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ2xvc2VFdmVudCh0aGlzLnZpZXcuZ2V0SWQoKSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRGVsZXRlQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZDA3NGM3OCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9EZWxldGVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EZWxldGVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3JlcG9zL3ByaXZhdC9qYXBhbmVzZS10ZXh0ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGQwNzRjNzgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGQwNzRjNzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGQwNzRjNzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0RlbGV0ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQwNzRjNzgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGQwNzRjNzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9kZWxldGUvY29tcG9uZW50cy9EZWxldGVDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZWxldGVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RlbGV0ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RlbGV0ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQwNzRjNzgmXCIiLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1vdmVFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzYXZlU3RhdGU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBzYXZlU3RhdGU6IGJvb2xlYW4gPSB0cnVlKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ3JlbW92ZScpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc2F2ZVN0YXRlID0gc2F2ZVN0YXRlO1xuICAgIH1cbn0iLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZWRFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgaWQ6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBkYXRhPzogYW55KVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ3VwZGF0ZWQnKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn0iLCJcbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50IH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCAnQGVuaGF2by9hcHAvYXNzZXRzL2ZvbnRzL2VuaGF2by1pY29ucy5mb250J1xuaW1wb3J0ICdAZW5oYXZvL2FwcC9hc3NldHMvc3R5bGVzL3ZpZXcuc2NzcydcbmltcG9ydCBGbGFzaE1lc3NhZ2VzIGZyb20gXCJAZW5oYXZvL2FwcC9mbGFzaC1tZXNzYWdlL2NvbXBvbmVudHMvRmxhc2hNZXNzYWdlcy52dWVcIjtcbkBDb21wb25lbnQoe1xuICAgIGNvbXBvbmVudHM6IHtGbGFzaE1lc3NhZ2VzfVxufSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFZpZXcgZXh0ZW5kcyBWdWUge1xuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLiRkZWxldGVBcHAuY2xvc2UoKVxuICAgIH1cblxuICAgIGdldCBtZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdHJhbnNsYXRvci50cmFucygnZW5oYXZvX2FwcC5kZWxldGUubWVzc2FnZS5zdWNjZXNzJylcbiAgICB9XG5cbiAgICBnZXQgYnV0dG9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdHJhbnNsYXRvci50cmFucygnZW5oYXZvX2FwcC5kZWxldGUubGFiZWwuY2xvc2UnKVxuICAgIH1cbn1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jLFxuICAgIF9zZXR1cCA9IF92bS5fc2VsZi5fc2V0dXBQcm94eVxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFwcC12aWV3XCIgfSxcbiAgICBbXG4gICAgICBfYyhcInZpZXctdmlld1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZsYXNoLW1lc3NhZ2VzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5saW5lLWNvbmZpcm0tZGlhbG9ndWVcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVzc2FnZVwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5tZXNzYWdlKSldKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG5cIiwgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5idXR0b24pKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=