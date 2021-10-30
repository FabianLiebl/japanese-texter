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

  var DeleteApp =
  /** @class */
  function () {
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
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_template_id_0d074c78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./DeleteComponent.vue?vue&type=template&id=0d074c78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=template&id=0d074c78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_template_id_0d074c78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_DeleteComponent_vue_vue_type_template_id_0d074c78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
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

  var RemoveEvent =
  /** @class */
  function (_super) {
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
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
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

  var LoadedEvent =
  /** @class */
  function (_super) {
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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
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
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! @enhavo/app/flash-message/components/FlashMessages.vue */ "./node_modules/@enhavo/app/flash-message/components/FlashMessages.vue"), __webpack_require__(/*! @enhavo/app/assets/fonts/enhavo-icons.font */ "./node_modules/@enhavo/app/assets/fonts/enhavo-icons.font.js"), __webpack_require__(/*! @enhavo/app/assets/styles/view.scss */ "./node_modules/@enhavo/app/assets/styles/view.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1, FlashMessages_vue_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var AppView =
  /** @class */
  function (_super) {
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
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/delete/components/DeleteComponent.vue?vue&type=template&id=0d074c78& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZGVsZXRlL0RlbGV0ZUFwcC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZGVsZXRlL2NvbXBvbmVudHMvRGVsZXRlQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZGVsZXRlL2NvbXBvbmVudHMvRGVsZXRlQ29tcG9uZW50LnZ1ZT82YTBjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9kZWxldGUvY29tcG9uZW50cy9EZWxldGVDb21wb25lbnQudnVlP2ViNjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvUmVtb3ZlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvVXBkYXRlZEV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9kZWxldGUvY29tcG9uZW50cy9EZWxldGVDb21wb25lbnQudnVlPzFiZWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2RlbGV0ZS9jb21wb25lbnRzL0RlbGV0ZUNvbXBvbmVudC52dWU/NjFmNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBUUksdUJBQ0ksSUFESixFQUVJLGVBRkosRUFHSSxJQUhKLEVBSUksY0FKSixFQUtJLGlCQUxKLEVBS2lEO0FBRTdDLFdBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxXQUFLLGVBQUwsR0FBdUIsZUFBdkI7QUFDQSxXQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsV0FBSyxjQUFMLEdBQXNCLGNBQXRCO0FBQ0EsV0FBSyxpQkFBTCxHQUF5QixpQkFBekI7QUFDSDs7QUFF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QSxpQkFBaUIseUNBQXlDO0FBQzFELG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQSxzQkFBc0IsMEJBQTBCLG1CQUFtQixFQUFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkZWxldGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IFVwZGF0ZWRFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9VcGRhdGVkRXZlbnRcIjtcbmltcG9ydCBDbG9zZUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L1JlbW92ZUV2ZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9Db21wb25lbnRSZWdpc3RyeUludGVyZmFjZVwiO1xuaW1wb3J0IEZsYXNoTWVzc2VuZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9mbGFzaC1tZXNzYWdlL0ZsYXNoTWVzc2VuZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGV0ZUFwcFxue1xuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBmbGFzaE1lc3NlbmdlcjogRmxhc2hNZXNzZW5nZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZGF0YTogYW55LFxuICAgICAgICBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcixcbiAgICAgICAgdmlldzogVmlldyxcbiAgICAgICAgZmxhc2hNZXNzZW5nZXI6IEZsYXNoTWVzc2VuZ2VyLFxuICAgICAgICBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuZmxhc2hNZXNzZW5nZXIgPSBmbGFzaE1lc3NlbmdlcjtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeSA9IGNvbXBvbmVudFJlZ2lzdHJ5O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJTdG9yZSgnZGVsZXRlQXBwJywgdGhpcyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJEYXRhKHRoaXMuZGF0YSk7XG5cbiAgICAgICAgdGhpcy52aWV3LmluaXQoKTtcbiAgICAgICAgdGhpcy5mbGFzaE1lc3Nlbmdlci5pbml0KCk7XG4gICAgICAgIHRoaXMudmlldy5hZGREZWZhdWx0Q2xvc2VMaXN0ZW5lcigpO1xuXG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBVcGRhdGVkRXZlbnQodGhpcy52aWV3LmdldElkKCkpKTtcblxuICAgICAgICB0aGlzLnZpZXcucmVhZHkoKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENsb3NlRXZlbnQodGhpcy52aWV3LmdldElkKCkpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0RlbGV0ZUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQwNzRjNzgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGVsZXRlQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGVsZXRlQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9yZXBvcy9wcml2YXQvamFwYW5lc2UtdGV4dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBkMDc0Yzc4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBkMDc0Yzc4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBkMDc0Yzc4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EZWxldGVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkMDc0Yzc4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBkMDc0Yzc4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZGVsZXRlL2NvbXBvbmVudHMvRGVsZXRlQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGVsZXRlQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZWxldGVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EZWxldGVDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkMDc0Yzc4JlwiIiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtb3ZlRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGlkOiBudW1iZXI7XG4gICAgc2F2ZVN0YXRlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgc2F2ZVN0YXRlOiBib29sZWFuID0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCdyZW1vdmUnKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnNhdmVTdGF0ZSA9IHNhdmVTdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGVkRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGlkOiBudW1iZXI7XG4gICAgZGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgZGF0YT86IGFueSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCd1cGRhdGVkJyk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG59IiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuaW1wb3J0IHsgVnVlLCBDb21wb25lbnQgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0ICdAZW5oYXZvL2FwcC9hc3NldHMvZm9udHMvZW5oYXZvLWljb25zLmZvbnQnXG5pbXBvcnQgJ0Blbmhhdm8vYXBwL2Fzc2V0cy9zdHlsZXMvdmlldy5zY3NzJ1xuaW1wb3J0IEZsYXNoTWVzc2FnZXMgZnJvbSBcIkBlbmhhdm8vYXBwL2ZsYXNoLW1lc3NhZ2UvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2VzLnZ1ZVwiO1xuQENvbXBvbmVudCh7XG4gICAgY29tcG9uZW50czoge0ZsYXNoTWVzc2FnZXN9XG59KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwVmlldyBleHRlbmRzIFZ1ZSB7XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuJGRlbGV0ZUFwcC5jbG9zZSgpXG4gICAgfVxuXG4gICAgZ2V0IG1lc3NhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0cmFuc2xhdG9yLnRyYW5zKCdlbmhhdm9fYXBwLmRlbGV0ZS5tZXNzYWdlLnN1Y2Nlc3MnKVxuICAgIH1cblxuICAgIGdldCBidXR0b24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0cmFuc2xhdG9yLnRyYW5zKCdlbmhhdm9fYXBwLmRlbGV0ZS5sYWJlbC5jbG9zZScpXG4gICAgfVxufVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFwcC12aWV3XCIgfSxcbiAgICBbXG4gICAgICBfYyhcInZpZXctdmlld1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZsYXNoLW1lc3NhZ2VzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5saW5lLWNvbmZpcm0tZGlhbG9ndWVcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWVzc2FnZVwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5tZXNzYWdlKSldKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG5cIiwgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5idXR0b24pKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=