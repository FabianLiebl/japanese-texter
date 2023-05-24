(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~action"],{

/***/ "./node_modules/@enhavo/app/action/ActionManager.ts":
/*!**********************************************************!*\
  !*** ./node_modules/@enhavo/app/action/ActionManager.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ActionManager = /** @class */function () {
    function ActionManager(primary, secondary, registry, componentRegistry) {
      this.primary = primary;
      this.secondary = secondary;
      this.registry = registry;
      this.componentRegistry = componentRegistry;
    }
    ActionManager.prototype.init = function () {
      this.initializeActions(this.primary);
      this.initializeActions(this.secondary);
      for (var _i = 0, _a = this.registry.getComponents(); _i < _a.length; _i++) {
        var component = _a[_i];
        this.componentRegistry.registerComponent(component.name, component.component);
      }
      this.componentRegistry.registerStore('actionManager', this);
      this.componentRegistry.registerData(this.primary);
      this.componentRegistry.registerData(this.secondary);
    };
    ActionManager.prototype.hasActions = function () {
      return this.primary && this.primary.length > 0 || this.secondary && this.secondary.length > 0;
    };
    ActionManager.prototype.initializeActions = function (actions) {
      for (var i in actions) {
        actions[i] = this.registry.getFactory(actions[i].component).createFromData(actions[i]);
      }
    };
    return ActionManager;
  }();
  exports["default"] = ActionManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/ActionRegistry.ts":
/*!***********************************************************!*\
  !*** ./node_modules/@enhavo/app/action/ActionRegistry.ts ***!
  \***********************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/core */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ActionRegistry = /** @class */function (_super) {
    __extends(ActionRegistry, _super);
    function ActionRegistry() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ActionRegistry.prototype.getFactory = function (name) {
      return _super.prototype.getFactory.call(this, name);
    };
    return ActionRegistry;
  }(core_1.Registry);
  exports["default"] = ActionRegistry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/components/ActionComponent.vue":
/*!************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/components/ActionComponent.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionComponent_vue_vue_type_template_id_c284dda4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionComponent.vue?vue&type=template&id=c284dda4& */ "./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=template&id=c284dda4&");
/* harmony import */ var _ActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActionComponent_vue_vue_type_template_id_c284dda4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ActionComponent_vue_vue_type_template_id_c284dda4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/action/components/ActionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./ActionComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=template&id=c284dda4&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=template&id=c284dda4& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ActionComponent_vue_vue_type_template_id_c284dda4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../vue-loader/lib??vue-loader-options!./ActionComponent.vue?vue&type=template&id=c284dda4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=template&id=c284dda4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ActionComponent_vue_vue_type_template_id_c284dda4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ActionComponent_vue_vue_type_template_id_c284dda4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue":
/*!********************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DropdownActionComponent_vue_vue_type_template_id_7e469b46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownActionComponent.vue?vue&type=template&id=7e469b46& */ "./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=template&id=7e469b46&");
/* harmony import */ var _DropdownActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownActionComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _DropdownActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _DropdownActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DropdownActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DropdownActionComponent_vue_vue_type_template_id_7e469b46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DropdownActionComponent_vue_vue_type_template_id_7e469b46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/action/components/DropdownActionComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_DropdownActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./DropdownActionComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_DropdownActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_DropdownActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_DropdownActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_DropdownActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_DropdownActionComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=template&id=7e469b46&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=template&id=7e469b46& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_DropdownActionComponent_vue_vue_type_template_id_7e469b46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../vue-loader/lib??vue-loader-options!./DropdownActionComponent.vue?vue&type=template&id=7e469b46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=template&id=7e469b46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_DropdownActionComponent_vue_vue_type_template_id_7e469b46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_DropdownActionComponent_vue_vue_type_template_id_7e469b46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts":
/*!********************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/AbstractFactory.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var AbstractFactory = /** @class */function () {
    function AbstractFactory() {}
    AbstractFactory.prototype.createFromData = function (data) {
      var action = this.createNew();
      action = _.extend(data, action);
      return action;
    };
    return AbstractFactory;
  }();
  exports["default"] = AbstractFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/CloseActionFactory.ts":
/*!***********************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/CloseActionFactory.ts ***!
  \***********************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/CloseAction */ "./node_modules/@enhavo/app/action/model/CloseAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, CloseAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var CloseActionFactory = /** @class */function (_super) {
    __extends(CloseActionFactory, _super);
    function CloseActionFactory(view, eventDispatcher) {
      var _this = _super.call(this) || this;
      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      return _this;
    }
    CloseActionFactory.prototype.createNew = function () {
      return new CloseAction_1["default"](this.view, this.eventDispatcher);
    };
    return CloseActionFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = CloseActionFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/DeleteActionFactory.ts":
/*!************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/DeleteActionFactory.ts ***!
  \************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/DeleteAction */ "./node_modules/@enhavo/app/action/model/DeleteAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, DeleteAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DeleteActionFactory = /** @class */function (_super) {
    __extends(DeleteActionFactory, _super);
    function DeleteActionFactory(view, eventDispatcher, translator) {
      var _this = _super.call(this) || this;
      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      _this.translator = translator;
      return _this;
    }
    DeleteActionFactory.prototype.createNew = function () {
      return new DeleteAction_1["default"](this.view, this.eventDispatcher);
    };
    return DeleteActionFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = DeleteActionFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/DownloadActionFactory.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/DownloadActionFactory.ts ***!
  \**************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/DownloadAction */ "./node_modules/@enhavo/app/action/model/DownloadAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, DownloadAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DownloadActionFactory = /** @class */function (_super) {
    __extends(DownloadActionFactory, _super);
    function DownloadActionFactory() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DownloadActionFactory.prototype.createNew = function () {
      return new DownloadAction_1["default"]();
    };
    return DownloadActionFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = DownloadActionFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/DropdownActionFactory.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/DropdownActionFactory.ts ***!
  \**************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/DropdownAction */ "./node_modules/@enhavo/app/action/model/DropdownAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, DropdownAction_1, AbstractFactory_1, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DropdownActionFactory = /** @class */function (_super) {
    __extends(DropdownActionFactory, _super);
    function DropdownActionFactory(actionManager) {
      var _this = _super.call(this) || this;
      _this.actionManager = actionManager;
      return _this;
    }
    DropdownActionFactory.prototype.createNew = function () {
      return new DropdownAction_1["default"]();
    };
    DropdownActionFactory.prototype.createFromData = function (data) {
      var action = this.createNew();
      action = _.extend(data, action);
      this.actionManager.initializeActions(action.items);
      return action;
    };
    return DropdownActionFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = DropdownActionFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/DuplicateActionFactory.ts":
/*!***************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/DuplicateActionFactory.ts ***!
  \***************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/DuplicateAction */ "./node_modules/@enhavo/app/action/model/DuplicateAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, DuplicateAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DuplicateActionFactory = /** @class */function (_super) {
    __extends(DuplicateActionFactory, _super);
    function DuplicateActionFactory(view, eventDispatcher) {
      var _this = _super.call(this) || this;
      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      return _this;
    }
    DuplicateActionFactory.prototype.createNew = function () {
      return new DuplicateAction_1["default"](this.view, this.eventDispatcher);
    };
    return DuplicateActionFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = DuplicateActionFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/EventActionFactory.ts":
/*!***********************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/EventActionFactory.ts ***!
  \***********************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/action/model/EventAction */ "./node_modules/@enhavo/app/action/model/EventAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, EventAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EventActionFactory = /** @class */function (_super) {
    __extends(EventActionFactory, _super);
    function EventActionFactory() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    EventActionFactory.prototype.createNew = function () {
      return new EventAction_1["default"]();
    };
    return EventActionFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = EventActionFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/FilterActionFactory.ts":
/*!************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/FilterActionFactory.ts ***!
  \************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/FilterAction */ "./node_modules/@enhavo/app/action/model/FilterAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, FilterAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var FilterActionFactory = /** @class */function (_super) {
    __extends(FilterActionFactory, _super);
    function FilterActionFactory(filterManager, singleFilterActionFactory) {
      var _this = _super.call(this) || this;
      _this.filterManager = filterManager;
      _this.singleFilterActionFactory = singleFilterActionFactory;
      return _this;
    }
    FilterActionFactory.prototype.createNew = function () {
      return new FilterAction_1["default"](this.filterManager, this.singleFilterActionFactory);
    };
    return FilterActionFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = FilterActionFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/ModalActionFactory.ts":
/*!***********************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/ModalActionFactory.ts ***!
  \***********************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/action/model/ModalAction */ "./node_modules/@enhavo/app/action/model/ModalAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, ModalAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ModalActionFactory = /** @class */function (_super) {
    __extends(ModalActionFactory, _super);
    function ModalActionFactory(modalManager) {
      var _this = _super.call(this) || this;
      _this.modalManager = modalManager;
      return _this;
    }
    ModalActionFactory.prototype.createNew = function () {
      return new ModalAction_1["default"](this.modalManager);
    };
    return ModalActionFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = ModalActionFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/OpenActionFactory.ts":
/*!**********************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/OpenActionFactory.ts ***!
  \**********************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/action/model/OpenAction */ "./node_modules/@enhavo/app/action/model/OpenAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, OpenAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OpenActionFactory = /** @class */function (_super) {
    __extends(OpenActionFactory, _super);
    function OpenActionFactory(view) {
      var _this = _super.call(this) || this;
      _this.view = view;
      return _this;
    }
    OpenActionFactory.prototype.createNew = function () {
      return new OpenAction_1["default"](this.view);
    };
    return OpenActionFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = OpenActionFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/PreviewActionFactory.ts":
/*!*************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/PreviewActionFactory.ts ***!
  \*************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/PreviewAction */ "./node_modules/@enhavo/app/action/model/PreviewAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, PreviewAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var PreviewActionFactory = /** @class */function (_super) {
    __extends(PreviewActionFactory, _super);
    function PreviewActionFactory(view, eventDispatcher) {
      var _this = _super.call(this) || this;
      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      return _this;
    }
    PreviewActionFactory.prototype.createFromData = function (data) {
      var action = _super.prototype.createFromData.call(this, data);
      action.loadListener();
      return action;
    };
    PreviewActionFactory.prototype.createNew = function () {
      return new PreviewAction_1["default"](this.view, this.eventDispatcher);
    };
    return PreviewActionFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = PreviewActionFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/SaveActionFactory.ts":
/*!**********************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/SaveActionFactory.ts ***!
  \**********************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/SaveAction */ "./node_modules/@enhavo/app/action/model/SaveAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, SaveAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var SaveActionFactory = /** @class */function (_super) {
    __extends(SaveActionFactory, _super);
    function SaveActionFactory(view, eventDispatcher) {
      var _this = _super.call(this) || this;
      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      return _this;
    }
    SaveActionFactory.prototype.createNew = function () {
      return new SaveAction_1["default"](this.view, this.eventDispatcher);
    };
    return SaveActionFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = SaveActionFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/factory/SingleFilterActionFactory.ts":
/*!******************************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/factory/SingleFilterActionFactory.ts ***!
  \******************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/SingleFilterAction */ "./node_modules/@enhavo/app/action/model/SingleFilterAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, SingleFilterAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var SingleFilterActionFactory = /** @class */function (_super) {
    __extends(SingleFilterActionFactory, _super);
    function SingleFilterActionFactory(filterManager) {
      var _this = _super.call(this) || this;
      _this.filterManager = filterManager;
      return _this;
    }
    SingleFilterActionFactory.prototype.createNew = function () {
      return new SingleFilterAction_1["default"](this.filterManager);
    };
    return SingleFilterActionFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = SingleFilterActionFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/AbstractAction.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/AbstractAction.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var AbstractAction = /** @class */function () {
    function AbstractAction() {}
    return AbstractAction;
  }();
  exports["default"] = AbstractAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/CloseAction.ts":
/*!**************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/CloseAction.ts ***!
  \**************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/CloseEvent */ "./node_modules/@enhavo/app/view-stack/event/CloseEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1, CloseEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var CloseAction = /** @class */function (_super) {
    __extends(CloseAction, _super);
    function CloseAction(view, eventDispatcher) {
      var _this = _super.call(this) || this;
      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      return _this;
    }
    CloseAction.prototype.execute = function () {
      var id = this.view.getId();
      this.eventDispatcher.dispatch(new CloseEvent_1["default"](id));
    };
    return CloseAction;
  }(AbstractAction_1["default"]);
  exports["default"] = CloseAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/DeleteAction.ts":
/*!***************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/DeleteAction.ts ***!
  \***************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts"), __webpack_require__(/*! @enhavo/app/view/Confirm */ "./node_modules/@enhavo/app/view/Confirm.ts"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadingEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts"), __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1, Confirm_1, $, LoadingEvent_1, URI) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DeleteAction = /** @class */function (_super) {
    __extends(DeleteAction, _super);
    function DeleteAction(view, eventDispatcher) {
      var _this = _super.call(this) || this;
      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      return _this;
    }
    DeleteAction.prototype.execute = function () {
      var _this = this;
      this.view.confirm(new Confirm_1["default"](this.confirmMessage, function () {
        var uri = new URI(_this.url);
        uri = uri.addQuery('view_id', _this.view.getId());
        var event = new LoadingEvent_1["default"](_this.view.getId());
        _this.eventDispatcher.dispatch(event);
        $('<form method="post" action="' + uri + '"><input type="hidden" name="_csrf_token" value="' + _this.token + '"/></form>').appendTo('body').submit();
      }, function () {}, this.confirmLabelCancel, this.confirmLabelOk));
    };
    return DeleteAction;
  }(AbstractAction_1["default"]);
  exports["default"] = DeleteAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/DownloadAction.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/DownloadAction.ts ***!
  \*****************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts"), __webpack_require__(/*! axios */ "./node_modules/axios/index.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1, axios_1, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DownloadAction = /** @class */function (_super) {
    __extends(DownloadAction, _super);
    function DownloadAction() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DownloadAction.prototype.execute = function () {
      var _this = this;
      if (this.ajax) {
        window.open(this.url, '_self');
        return;
      }
      axios_1["default"].post(this.url, $('form').serialize(), {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        responseType: 'arraybuffer'
      }).then(function (response) {
        var filename = _this.getFilename(response.headers['content-disposition']);
        var contentType = response.headers['content-type'];
        var blob = new Blob([response.data], {
          type: contentType
        });
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      })["catch"](function (response) {
        //handle error
        console.log(response);
      });
    };
    DownloadAction.prototype.getFilename = function (contentDisposition) {
      var filename = null;
      var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      var matches = filenameRegex.exec(contentDisposition);
      if (matches != null && matches[1]) {
        filename = matches[1].replace(/['"]/g, '');
      }
      return filename;
    };
    return DownloadAction;
  }(AbstractAction_1["default"]);
  exports["default"] = DownloadAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/DropdownAction.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/DropdownAction.ts ***!
  \*****************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DropdownAction = /** @class */function (_super) {
    __extends(DropdownAction, _super);
    function DropdownAction() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownAction.prototype.execute = function () {};
    return DropdownAction;
  }(AbstractAction_1["default"]);
  exports["default"] = DropdownAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/DuplicateAction.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/DuplicateAction.ts ***!
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts"), __webpack_require__(/*! @enhavo/app/view/Confirm */ "./node_modules/@enhavo/app/view/Confirm.ts"), __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadingEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1, Confirm_1, URI, LoadingEvent_1, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DuplicateAction = /** @class */function (_super) {
    __extends(DuplicateAction, _super);
    function DuplicateAction(view, eventDispatcher) {
      var _this = _super.call(this) || this;
      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      return _this;
    }
    DuplicateAction.prototype.execute = function () {
      var _this = this;
      this.view.confirm(new Confirm_1["default"](this.confirmMessage, function () {
        var uri = new URI(_this.url);
        uri = uri.addQuery('view_id', _this.view.getId());
        var event = new LoadingEvent_1["default"](_this.view.getId());
        _this.eventDispatcher.dispatch(event);
        $('<form method="post" action="' + uri + '"><input type="hidden" name="_csrf_token" value="' + _this.token + '"/></form>').appendTo('body').submit();
      }, function () {}, this.confirmLabelCancel, this.confirmLabelOk));
    };
    return DuplicateAction;
  }(AbstractAction_1["default"]);
  exports["default"] = DuplicateAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/EventAction.ts":
/*!**************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/EventAction.ts ***!
  \**************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, $, AbstractAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EventAction = /** @class */function (_super) {
    __extends(EventAction, _super);
    function EventAction() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    EventAction.prototype.execute = function () {
      $(document).trigger(this.event);
    };
    return EventAction;
  }(AbstractAction_1["default"]);
  exports["default"] = EventAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/FilterAction.ts":
/*!***************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/FilterAction.ts ***!
  \***************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/DropdownAction */ "./node_modules/@enhavo/app/action/model/DropdownAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, DropdownAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var FilterAction = /** @class */function (_super) {
    __extends(FilterAction, _super);
    function FilterAction(filterManager, singleFilterActionFactory) {
      var _this = _super.call(this) || this;
      _this.filterManager = filterManager;
      _this.singleFilterActionFactory = singleFilterActionFactory;
      _this.closeAfter = false;
      _this.items = [];
      for (var i in _this.filterManager.filters) {
        var action = _this.singleFilterActionFactory.createNew();
        action.filterKey = _this.filterManager.filters[i].key;
        action.label = _this.filterManager.filters[i].label;
        action.setActive(_this.filterManager.filters[i].active);
        _this.items.push(action);
      }
      return _this;
    }
    return FilterAction;
  }(DropdownAction_1["default"]);
  exports["default"] = FilterAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/ModalAction.ts":
/*!**************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/ModalAction.ts ***!
  \**************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ModalAction = /** @class */function (_super) {
    __extends(ModalAction, _super);
    function ModalAction(modalManager) {
      var _this = _super.call(this) || this;
      _this.modalManager = modalManager;
      return _this;
    }
    ModalAction.prototype.execute = function () {
      this.modalManager.push(this.modal);
    };
    return ModalAction;
  }(AbstractAction_1["default"]);
  exports["default"] = ModalAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/OpenAction.ts":
/*!*************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/OpenAction.ts ***!
  \*************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OpenAction = /** @class */function (_super) {
    __extends(OpenAction, _super);
    function OpenAction(view) {
      var _this = _super.call(this) || this;
      _this.view = view;
      return _this;
    }
    OpenAction.prototype.execute = function () {
      if (this.target == '_view') {
        if (this.key) {
          this.view.open(this.url, this.key);
        } else {
          this.view.open(this.url);
        }
        return;
      }
      window.open(this.url, this.target);
    };
    return OpenAction;
  }(AbstractAction_1["default"]);
  exports["default"] = OpenAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/PreviewAction.ts":
/*!****************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/PreviewAction.ts ***!
  \****************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/view-stack/event/DataEvent */ "./node_modules/@enhavo/app/view-stack/event/DataEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/ExistsEvent */ "./node_modules/@enhavo/app/view-stack/event/ExistsEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadDataEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadDataEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1, $, DataEvent_1, ExistsEvent_1, LoadDataEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var PreviewAction = /** @class */function (_super) {
    __extends(PreviewAction, _super);
    function PreviewAction(view, eventDispatcher) {
      var _this = _super.call(this) || this;
      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      return _this;
    }
    PreviewAction.prototype.loadListener = function () {
      var _this = this;
      if (PreviewAction.listenerLoaded) {
        return;
      }
      PreviewAction.listenerLoaded = true;
      this.view.loadValue('preview-view', function (id) {
        var viewId = id ? parseInt(id) : null;
        if (viewId) {
          _this.sendData(viewId);
        }
      });
      this.eventDispatcher.on('loaded', function (event) {
        _this.view.loadValue('preview-view', function (id) {
          var viewId = id ? parseInt(id) : null;
          if (event.id == viewId) {
            _this.sendData(viewId);
          }
        });
      });
    };
    PreviewAction.prototype.execute = function () {
      this.open(this.url, 'preview-view');
    };
    PreviewAction.prototype.sendData = function (id) {
      var data = $('form').serializeArray();
      this.eventDispatcher.dispatch(new DataEvent_1["default"](id, data));
    };
    PreviewAction.prototype.open = function (url, key, label) {
      var _this = this;
      if (key === void 0) {
        key = null;
      }
      if (label === void 0) {
        label = null;
      }
      this.eventDispatcher.dispatch(new LoadDataEvent_1["default"](key)).then(function (data) {
        var viewId = null;
        if (data) {
          viewId = data.value;
        }
        if (viewId != null) {
          _this.eventDispatcher.dispatch(new ExistsEvent_1["default"](viewId)).then(function (data) {
            if (data.exists) {
              _this.sendData(viewId);
            } else {
              _this.view.openView(url, key, label);
            }
          });
        } else {
          _this.view.openView(url, key, label);
        }
      });
    };
    PreviewAction.listenerLoaded = false;
    return PreviewAction;
  }(AbstractAction_1["default"]);
  exports["default"] = PreviewAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/SaveAction.ts":
/*!*************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/SaveAction.ts ***!
  \*************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadingEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, $, AbstractAction_1, LoadingEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var SaveAction = /** @class */function (_super) {
    __extends(SaveAction, _super);
    function SaveAction(view, eventDispatcher) {
      var _this = _super.call(this) || this;
      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      return _this;
    }
    SaveAction.prototype.execute = function () {
      var event = new LoadingEvent_1["default"](this.view.getId());
      this.eventDispatcher.dispatch(event);
      var $form = $('form');
      if (this.url) {
        $form.attr('action', this.url);
      }
      $form.submit();
    };
    return SaveAction;
  }(AbstractAction_1["default"]);
  exports["default"] = SaveAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/action/model/SingleFilterAction.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@enhavo/app/action/model/SingleFilterAction.ts ***!
  \*********************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var SingleFilterAction = /** @class */function (_super) {
    __extends(SingleFilterAction, _super);
    function SingleFilterAction(filterManager) {
      var _this = _super.call(this) || this;
      _this.filterManager = filterManager;
      _this.component = "single-filter-action";
      return _this;
    }
    SingleFilterAction.prototype.execute = function () {
      this.active = !this.active;
      this.updateIcon();
      this.filterManager.setFilterActive(this.filterKey, this.active);
    };
    SingleFilterAction.prototype.setActive = function (active) {
      this.active = active;
      this.updateIcon();
    };
    SingleFilterAction.prototype.updateIcon = function () {
      if (this.active) {
        this.icon = 'remove_circle_outline';
      } else {
        this.icon = 'add_circle_outline';
      }
    };
    return SingleFilterAction;
  }(AbstractAction_1["default"]);
  exports["default"] = SingleFilterAction;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/node_modules/@enhavo/core/ComponentAwareInterface.ts":
/*!***************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/node_modules/@enhavo/core/ComponentAwareInterface.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/node_modules/@enhavo/core/FactoryInterface.ts":
/*!********************************************************************************!*\
  !*** ./node_modules/@enhavo/app/node_modules/@enhavo/core/FactoryInterface.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/node_modules/@enhavo/core/Registry.ts":
/*!************************************************************************!*\
  !*** ./node_modules/@enhavo/app/node_modules/@enhavo/core/Registry.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Component = void 0;
  var Registry = /** @class */function () {
    function Registry() {
      this.entries = [];
    }
    Registry.prototype.get = function (name) {
      for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
        var entry = _a[_i];
        if (entry.getName() == name) {
          return entry;
        }
      }
      throw 'Entry with name "' + name + '" does not exist in registry';
    };
    Registry.prototype.getFactory = function (name) {
      return this.get(name).getFactory();
    };
    Registry.prototype.getComponent = function (name) {
      return this.get(name).getComponent();
    };
    Registry.prototype.register = function (entry) {
      if (this.has(entry.getName())) {
        this.deleteEntry(entry.getName());
      }
      this.entries.push(entry);
      return this;
    };
    Registry.prototype.deleteEntry = function (name) {
      for (var i in this.entries) {
        if (this.entries[i].getName() == name) {
          this.entries.splice(parseInt(i), 1);
          break;
        }
      }
    };
    Registry.prototype.has = function (name) {
      for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
        var entry = _a[_i];
        if (entry.getName() == name) {
          return true;
        }
      }
      return false;
    };
    Registry.prototype.getComponents = function () {
      var components = [];
      for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
        var entry = _a[_i];
        components.push(new Component(entry.getName(), entry.getComponent()));
      }
      return components;
    };
    return Registry;
  }();
  exports["default"] = Registry;
  var Component = /** @class */function () {
    function Component(name, component) {
      this.name = name;
      this.component = component;
    }
    return Component;
  }();
  exports.Component = Component;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/node_modules/@enhavo/core/RegistryInterface.ts":
/*!*********************************************************************************!*\
  !*** ./node_modules/@enhavo/app/node_modules/@enhavo/core/RegistryInterface.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/node_modules/@enhavo/core/index.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@enhavo/app/node_modules/@enhavo/core/index.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Registry */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/Registry.ts"), __webpack_require__(/*! ./RegistryInterface */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/RegistryInterface.ts"), __webpack_require__(/*! ./FactoryInterface */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/FactoryInterface.ts"), __webpack_require__(/*! ./ComponentAwareInterface */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/ComponentAwareInterface.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Registry_1, RegistryInterface_1, FactoryInterface_1, ComponentAwareInterface_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ComponentAwareInterface = exports.FactoryInterface = exports.RegistryInterface = exports.Registry = void 0;
  exports.Registry = Registry_1["default"];
  exports.RegistryInterface = RegistryInterface_1["default"];
  exports.FactoryInterface = FactoryInterface_1["default"];
  exports.ComponentAwareInterface = ComponentAwareInterface_1["default"];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/CloseEvent.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/CloseEvent.ts ***!
  \*****************************************************************/
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
  var CloseEvent = /** @class */function (_super) {
    __extends(CloseEvent, _super);
    function CloseEvent(id, saveState) {
      if (saveState === void 0) {
        saveState = true;
      }
      var _this = _super.call(this, 'close') || this;
      _this.saveState = true;
      _this.id = id;
      _this.saveState = saveState;
      return _this;
    }
    return CloseEvent;
  }(Event_1["default"]);
  exports["default"] = CloseEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/DataEvent.ts":
/*!****************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/DataEvent.ts ***!
  \****************************************************************/
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
  var DataEvent = /** @class */function (_super) {
    __extends(DataEvent, _super);
    function DataEvent(id, data) {
      var _this = _super.call(this, 'data') || this;
      _this.id = id;
      _this.data = data;
      return _this;
    }
    return DataEvent;
  }(Event_1["default"]);
  exports["default"] = DataEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/Event.ts":
/*!************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/Event.ts ***!
  \************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, uuidv4) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ResolveEvent = exports.RejectEvent = void 0;
  var Event = /** @class */function () {
    function Event(name) {
      this.history = [];
      this.name = name;
      this.uuid = uuidv4();
    }
    Event.prototype.resolve = function (data) {
      if (data === void 0) {
        data = {};
      }
      this.dispatcher.dispatch(new ResolveEvent(this.uuid, data));
    };
    Event.prototype.reject = function (data) {
      if (data === void 0) {
        data = {};
      }
      this.dispatcher.dispatch(new RejectEvent(this.uuid, data));
    };
    Event.prototype.serialize = function () {
      var dispatcher = this.dispatcher;
      this.dispatcher = null;
      var data = JSON.stringify(this);
      this.dispatcher = dispatcher;
      return data;
    };
    return Event;
  }();
  exports["default"] = Event;
  var RejectEvent = /** @class */function (_super) {
    __extends(RejectEvent, _super);
    function RejectEvent(uuid, data) {
      var _this = _super.call(this, 'reject') || this;
      _this.uuid = uuid;
      _this.data = data;
      return _this;
    }
    return RejectEvent;
  }(Event);
  exports.RejectEvent = RejectEvent;
  var ResolveEvent = /** @class */function (_super) {
    __extends(ResolveEvent, _super);
    function ResolveEvent(uuid, data) {
      var _this = _super.call(this, 'resolve') || this;
      _this.uuid = uuid;
      _this.data = data;
      return _this;
    }
    return ResolveEvent;
  }(Event);
  exports.ResolveEvent = ResolveEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/ExistsEvent.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/ExistsEvent.ts ***!
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
  var ExistsEvent = /** @class */function (_super) {
    __extends(ExistsEvent, _super);
    function ExistsEvent(id) {
      var _this = _super.call(this, 'exists') || this;
      _this.id = id;
      return _this;
    }
    return ExistsEvent;
  }(Event_1["default"]);
  exports["default"] = ExistsEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/LoadDataEvent.ts":
/*!********************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/LoadDataEvent.ts ***!
  \********************************************************************/
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
  var LoadDataEvent = /** @class */function (_super) {
    __extends(LoadDataEvent, _super);
    function LoadDataEvent(key) {
      var _this = _super.call(this, 'load-data') || this;
      _this.key = key;
      return _this;
    }
    return LoadDataEvent;
  }(Event_1["default"]);
  exports["default"] = LoadDataEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts ***!
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
  var LoadingEvent = /** @class */function (_super) {
    __extends(LoadingEvent, _super);
    function LoadingEvent(id) {
      var _this = _super.call(this, 'loading') || this;
      _this.id = id;
      return _this;
    }
    return LoadingEvent;
  }(Event_1["default"]);
  exports["default"] = LoadingEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view/Confirm.ts":
/*!**************************************************!*\
  !*** ./node_modules/@enhavo/app/view/Confirm.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Confirm = /** @class */function () {
    function Confirm(message, onAccept, onDeny, denyText, acceptText) {
      if (denyText === void 0) {
        denyText = 'deny';
      }
      if (acceptText === void 0) {
        acceptText = 'accept';
      }
      this.message = message;
      this.onAccept = onAccept;
      this.onDeny = onDeny;
      this.denyText = denyText;
      this.acceptText = acceptText;
    }
    Confirm.prototype.setView = function (view) {
      this.view = view;
    };
    Confirm.prototype.deny = function () {
      this.view.confirm(null);
      if (this.onDeny) {
        this.onDeny();
      }
    };
    Confirm.prototype.accept = function () {
      this.view.confirm(null);
      if (this.onAccept) {
        this.onAccept();
      }
    };
    return Confirm;
  }();
  exports["default"] = Confirm;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/core/RegistryEntry.ts":
/*!****************************************************!*\
  !*** ./node_modules/@enhavo/core/RegistryEntry.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var RegistryEntry = /** @class */function () {
    function RegistryEntry(name, component, factory) {
      this.name = name;
      this.component = component;
      this.factory = factory;
    }
    RegistryEntry.prototype.getName = function () {
      return this.name;
    };
    RegistryEntry.prototype.getComponent = function () {
      return this.component;
    };
    RegistryEntry.prototype.getFactory = function () {
      return this.factory;
    };
    return RegistryEntry;
  }();
  exports["default"] = RegistryEntry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=script&lang=ts& ***!
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ActionComponent = /** @class */function (_super) {
    __extends(ActionComponent, _super);
    function ActionComponent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ActionComponent.prototype, "icon", {
      get: function get() {
        return this.data && this.data.icon ? 'icon-' + this.data.icon : '';
      },
      enumerable: false,
      configurable: true
    });
    ActionComponent.prototype.execute = function ($event) {
      if (this.clickStop) {
        $event.stopPropagation();
      }
      this.data.execute();
    };
    __decorate([vue_property_decorator_1.Prop()], ActionComponent.prototype, "data", void 0);
    __decorate([vue_property_decorator_1.Prop()], ActionComponent.prototype, "clickStop", void 0);
    ActionComponent = __decorate([vue_property_decorator_1.Component], ActionComponent);
    return ActionComponent;
  }(vue_property_decorator_1.Vue);
  exports["default"] = ActionComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DropdownActionComponent = /** @class */function (_super) {
    __extends(DropdownActionComponent, _super);
    function DropdownActionComponent() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.open = false;
      return _this;
    }
    Object.defineProperty(DropdownActionComponent.prototype, "icon", {
      get: function get() {
        return this.data && this.data.icon ? 'icon-' + this.data.icon : '';
      },
      enumerable: false,
      configurable: true
    });
    DropdownActionComponent.prototype.toggleOpen = function () {
      this.open = !this.open;
    };
    DropdownActionComponent.prototype.itemClick = function () {
      if (this.data.closeAfter) {
        this.open = false;
      }
    };
    // Close when clicked outside
    DropdownActionComponent.prototype.close = function (e) {
      if (!this.$el.contains(e.target)) {
        this.open = false;
      }
    };
    DropdownActionComponent.prototype.mounted = function () {
      document.addEventListener('click', this.close);
    };
    DropdownActionComponent.prototype.beforeDestroy = function () {
      document.removeEventListener('click', this.close);
    };
    __decorate([vue_property_decorator_1.Prop()], DropdownActionComponent.prototype, "data", void 0);
    DropdownActionComponent = __decorate([vue_property_decorator_1.Component], DropdownActionComponent);
    return DropdownActionComponent;
  }(vue_property_decorator_1.Vue);
  exports["default"] = DropdownActionComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=template&id=c284dda4&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=template&id=c284dda4& ***!
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
    {
      staticClass: "action",
      on: {
        click: function ($event) {
          return _vm.execute($event)
        },
      },
    },
    [
      _c("div", { staticClass: "action-icon" }, [
        _c("i", {
          class: ["icon", _vm.icon],
          attrs: { "aria-hidden": "true" },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "label" }, [_vm._v(_vm._s(_vm.data.label))]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=template&id=7e469b46&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=template&id=7e469b46& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "action" }, [
    _c(
      "div",
      {
        on: {
          click: function ($event) {
            return _vm.toggleOpen()
          },
        },
      },
      [
        _c("div", { staticClass: "action-icon" }, [
          _c("i", {
            class: ["icon", _vm.icon],
            attrs: { "aria-hidden": "true" },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "label" }, [_vm._v(_vm._s(_vm.data.label))]),
      ]
    ),
    _vm._v(" "),
    _vm.open
      ? _c(
          "ul",
          {
            staticClass: "dropdown-action-list",
            on: {
              click: function ($event) {
                return _vm.itemClick()
              },
            },
          },
          [
            _vm._l(_vm.data.items, function (action) {
              return [
                _c(action.component, {
                  tag: "component",
                  staticClass: "action-container",
                  attrs: { data: action, "data-action": action.key },
                }),
              ]
            }),
          ],
          2
        )
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL0FjdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9BY3Rpb25SZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2NvbXBvbmVudHMvQWN0aW9uQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2NvbXBvbmVudHMvQWN0aW9uQ29tcG9uZW50LnZ1ZT8xYzg5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vY29tcG9uZW50cy9BY3Rpb25Db21wb25lbnQudnVlPzllZTciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9jb21wb25lbnRzL0Ryb3Bkb3duQWN0aW9uQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2NvbXBvbmVudHMvRHJvcGRvd25BY3Rpb25Db21wb25lbnQudnVlPzg5ZTgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9jb21wb25lbnRzL0Ryb3Bkb3duQWN0aW9uQ29tcG9uZW50LnZ1ZT9lYzNkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9BYnN0cmFjdEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0Nsb3NlQWN0aW9uRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvRGVsZXRlQWN0aW9uRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvRG93bmxvYWRBY3Rpb25GYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9Ecm9wZG93bkFjdGlvbkZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0R1cGxpY2F0ZUFjdGlvbkZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0V2ZW50QWN0aW9uRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvRmlsdGVyQWN0aW9uRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvTW9kYWxBY3Rpb25GYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9PcGVuQWN0aW9uRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvUHJldmlld0FjdGlvbkZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L1NhdmVBY3Rpb25GYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9TaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvQWJzdHJhY3RBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9DbG9zZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0RlbGV0ZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Rvd25sb2FkQWN0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvRHJvcGRvd25BY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9EdXBsaWNhdGVBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9FdmVudEFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0ZpbHRlckFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL01vZGFsQWN0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvT3BlbkFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL1ByZXZpZXdBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9TYXZlQWN0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvU2luZ2xlRmlsdGVyQWN0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ub2RlX21vZHVsZXMvQGVuaGF2by9jb3JlL1JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ub2RlX21vZHVsZXMvQGVuaGF2by9jb3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0Nsb3NlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvRGF0YUV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0V4aXN0c0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWREYXRhRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvTG9hZGluZ0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3L0NvbmZpcm0udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vY29yZS9SZWdpc3RyeUVudHJ5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vY29tcG9uZW50cy9BY3Rpb25Db21wb25lbnQudnVlPzJhZjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9jb21wb25lbnRzL0Ryb3Bkb3duQWN0aW9uQ29tcG9uZW50LnZ1ZT8xYWFjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9jb21wb25lbnRzL0FjdGlvbkNvbXBvbmVudC52dWU/ODI2MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2NvbXBvbmVudHMvRHJvcGRvd25BY3Rpb25Db21wb25lbnQudnVlP2I0NGIiXSwibmFtZXMiOlsiQWN0aW9uTWFuYWdlciIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJyZWdpc3RyeSIsImNvbXBvbmVudFJlZ2lzdHJ5IiwicHJvdG90eXBlIiwiaW5pdCIsImluaXRpYWxpemVBY3Rpb25zIiwiX2kiLCJfYSIsImdldENvbXBvbmVudHMiLCJsZW5ndGgiLCJjb21wb25lbnQiLCJyZWdpc3RlckNvbXBvbmVudCIsIm5hbWUiLCJyZWdpc3RlclN0b3JlIiwicmVnaXN0ZXJEYXRhIiwiaGFzQWN0aW9ucyIsImFjdGlvbnMiLCJpIiwiZ2V0RmFjdG9yeSIsImNyZWF0ZUZyb21EYXRhIiwiQWN0aW9uUmVnaXN0cnkiLCJfc3VwZXIiLCJfX2V4dGVuZHMiLCJjYWxsIiwiY29yZV8xIiwiUmVnaXN0cnkiLCJBYnN0cmFjdEZhY3RvcnkiLCJkYXRhIiwiYWN0aW9uIiwiY3JlYXRlTmV3IiwiXyIsImV4dGVuZCIsIkNsb3NlQWN0aW9uRmFjdG9yeSIsInZpZXciLCJldmVudERpc3BhdGNoZXIiLCJfdGhpcyIsIkNsb3NlQWN0aW9uXzEiLCJBYnN0cmFjdEZhY3RvcnlfMSIsIkRlbGV0ZUFjdGlvbkZhY3RvcnkiLCJ0cmFuc2xhdG9yIiwiRGVsZXRlQWN0aW9uXzEiLCJEb3dubG9hZEFjdGlvbkZhY3RvcnkiLCJEb3dubG9hZEFjdGlvbl8xIiwiRHJvcGRvd25BY3Rpb25GYWN0b3J5IiwiYWN0aW9uTWFuYWdlciIsIkRyb3Bkb3duQWN0aW9uXzEiLCJpdGVtcyIsIkR1cGxpY2F0ZUFjdGlvbkZhY3RvcnkiLCJEdXBsaWNhdGVBY3Rpb25fMSIsIkV2ZW50QWN0aW9uRmFjdG9yeSIsIkV2ZW50QWN0aW9uXzEiLCJGaWx0ZXJBY3Rpb25GYWN0b3J5IiwiZmlsdGVyTWFuYWdlciIsInNpbmdsZUZpbHRlckFjdGlvbkZhY3RvcnkiLCJGaWx0ZXJBY3Rpb25fMSIsIk1vZGFsQWN0aW9uRmFjdG9yeSIsIm1vZGFsTWFuYWdlciIsIk1vZGFsQWN0aW9uXzEiLCJPcGVuQWN0aW9uRmFjdG9yeSIsIk9wZW5BY3Rpb25fMSIsIlByZXZpZXdBY3Rpb25GYWN0b3J5IiwibG9hZExpc3RlbmVyIiwiUHJldmlld0FjdGlvbl8xIiwiU2F2ZUFjdGlvbkZhY3RvcnkiLCJTYXZlQWN0aW9uXzEiLCJTaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5IiwiU2luZ2xlRmlsdGVyQWN0aW9uXzEiLCJBYnN0cmFjdEFjdGlvbiIsIkNsb3NlQWN0aW9uIiwiZXhlY3V0ZSIsImlkIiwiZ2V0SWQiLCJkaXNwYXRjaCIsIkNsb3NlRXZlbnRfMSIsIkFic3RyYWN0QWN0aW9uXzEiLCJEZWxldGVBY3Rpb24iLCJjb25maXJtIiwiQ29uZmlybV8xIiwiY29uZmlybU1lc3NhZ2UiLCJ1cmkiLCJVUkkiLCJ1cmwiLCJhZGRRdWVyeSIsImV2ZW50IiwiTG9hZGluZ0V2ZW50XzEiLCIkIiwidG9rZW4iLCJhcHBlbmRUbyIsInN1Ym1pdCIsImNvbmZpcm1MYWJlbENhbmNlbCIsImNvbmZpcm1MYWJlbE9rIiwiRG93bmxvYWRBY3Rpb24iLCJhamF4Iiwid2luZG93Iiwib3BlbiIsImF4aW9zXzEiLCJwb3N0Iiwic2VyaWFsaXplIiwiaGVhZGVycyIsInJlc3BvbnNlVHlwZSIsInRoZW4iLCJyZXNwb25zZSIsImZpbGVuYW1lIiwiZ2V0RmlsZW5hbWUiLCJjb250ZW50VHlwZSIsImJsb2IiLCJCbG9iIiwidHlwZSIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZG93bmxvYWQiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50RGlzcG9zaXRpb24iLCJmaWxlbmFtZVJlZ2V4IiwibWF0Y2hlcyIsImV4ZWMiLCJyZXBsYWNlIiwiRHJvcGRvd25BY3Rpb24iLCJEdXBsaWNhdGVBY3Rpb24iLCJFdmVudEFjdGlvbiIsInRyaWdnZXIiLCJGaWx0ZXJBY3Rpb24iLCJjbG9zZUFmdGVyIiwiZmlsdGVycyIsImZpbHRlcktleSIsImtleSIsImxhYmVsIiwic2V0QWN0aXZlIiwiYWN0aXZlIiwicHVzaCIsIk1vZGFsQWN0aW9uIiwibW9kYWwiLCJPcGVuQWN0aW9uIiwidGFyZ2V0IiwiUHJldmlld0FjdGlvbiIsImxpc3RlbmVyTG9hZGVkIiwibG9hZFZhbHVlIiwidmlld0lkIiwicGFyc2VJbnQiLCJzZW5kRGF0YSIsIm9uIiwic2VyaWFsaXplQXJyYXkiLCJEYXRhRXZlbnRfMSIsIkxvYWREYXRhRXZlbnRfMSIsInZhbHVlIiwiRXhpc3RzRXZlbnRfMSIsImV4aXN0cyIsIm9wZW5WaWV3IiwiU2F2ZUFjdGlvbiIsIiRmb3JtIiwiYXR0ciIsIlNpbmdsZUZpbHRlckFjdGlvbiIsInVwZGF0ZUljb24iLCJzZXRGaWx0ZXJBY3RpdmUiLCJpY29uIiwiZW50cmllcyIsImdldCIsImVudHJ5IiwiZ2V0TmFtZSIsImdldENvbXBvbmVudCIsInJlZ2lzdGVyIiwiaGFzIiwiZGVsZXRlRW50cnkiLCJzcGxpY2UiLCJjb21wb25lbnRzIiwiQ29tcG9uZW50IiwiZXhwb3J0cyIsIlJlZ2lzdHJ5XzEiLCJSZWdpc3RyeUludGVyZmFjZSIsIlJlZ2lzdHJ5SW50ZXJmYWNlXzEiLCJGYWN0b3J5SW50ZXJmYWNlIiwiRmFjdG9yeUludGVyZmFjZV8xIiwiQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UiLCJDb21wb25lbnRBd2FyZUludGVyZmFjZV8xIiwiQ2xvc2VFdmVudCIsInNhdmVTdGF0ZSIsIkV2ZW50XzEiLCJEYXRhRXZlbnQiLCJFdmVudCIsImhpc3RvcnkiLCJ1dWlkIiwidXVpZHY0IiwicmVzb2x2ZSIsImRpc3BhdGNoZXIiLCJSZXNvbHZlRXZlbnQiLCJyZWplY3QiLCJSZWplY3RFdmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJFeGlzdHNFdmVudCIsIkxvYWREYXRhRXZlbnQiLCJMb2FkaW5nRXZlbnQiLCJDb25maXJtIiwibWVzc2FnZSIsIm9uQWNjZXB0Iiwib25EZW55IiwiZGVueVRleHQiLCJhY2NlcHRUZXh0Iiwic2V0VmlldyIsImRlbnkiLCJhY2NlcHQiLCJSZWdpc3RyeUVudHJ5IiwiZmFjdG9yeSIsIkFjdGlvbkNvbXBvbmVudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiJGV2ZW50IiwiY2xpY2tTdG9wIiwic3RvcFByb3BhZ2F0aW9uIiwiX19kZWNvcmF0ZSIsInZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMSIsIlByb3AiLCJWdWUiLCJEcm9wZG93bkFjdGlvbkNvbXBvbmVudCIsImFwcGx5IiwiYXJndW1lbnRzIiwidG9nZ2xlT3BlbiIsIml0ZW1DbGljayIsImNsb3NlIiwiZSIsIiRlbCIsImNvbnRhaW5zIiwibW91bnRlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJiZWZvcmVEZXN0cm95IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0VBSUEsSUFBQUEsYUFBQTtJQU9JLFNBQUFBLGNBQ0lDLE9BQTBCLEVBQzFCQyxTQUE0QixFQUM1QkMsUUFBd0IsRUFDeEJDLGlCQUE2QztNQUU3QyxJQUFJLENBQUNILE9BQU8sR0FBR0EsT0FBTztNQUN0QixJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUztNQUMxQixJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUTtNQUN4QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQSxpQkFBaUI7SUFDOUM7SUFFQUosYUFBQSxDQUFBSyxTQUFBLENBQUFDLElBQUksR0FBSjtNQUVJLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsSUFBSSxDQUFDTixPQUFPLENBQUM7TUFDcEMsSUFBSSxDQUFDTSxpQkFBaUIsQ0FBQyxJQUFJLENBQUNMLFNBQVMsQ0FBQztNQUV0QyxLQUFzQixJQUFBTSxFQUFBLElB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Q0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxpQkFBaUIsNkJBQTZCO0FBQzlDO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDLFdBQVc7QUFDWDtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBDQUEwQztBQUNwRSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJ2ZW5kb3JzfmFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb25JbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9BY3Rpb25JbnRlcmZhY2VcIjtcbmltcG9ydCBBY3Rpb25SZWdpc3RyeSBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL0FjdGlvblJlZ2lzdHJ5XCI7XG5pbXBvcnQgQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9Db21wb25lbnRSZWdpc3RyeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25NYW5hZ2VyXG57XG4gICAgcHVibGljIHByaW1hcnk6IEFjdGlvbkludGVyZmFjZVtdO1xuICAgIHB1YmxpYyBzZWNvbmRhcnk6IEFjdGlvbkludGVyZmFjZVtdO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVnaXN0cnk6IEFjdGlvblJlZ2lzdHJ5O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaW1hcnk6IEFjdGlvbkludGVyZmFjZVtdLFxuICAgICAgICBzZWNvbmRhcnk6IEFjdGlvbkludGVyZmFjZVtdLFxuICAgICAgICByZWdpc3RyeTogQWN0aW9uUmVnaXN0cnksXG4gICAgICAgIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZVxuICAgICkge1xuICAgICAgICB0aGlzLnByaW1hcnkgPSBwcmltYXJ5O1xuICAgICAgICB0aGlzLnNlY29uZGFyeSA9IHNlY29uZGFyeTtcbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0gY29tcG9uZW50UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgaW5pdCgpXG4gICAge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVBY3Rpb25zKHRoaXMucHJpbWFyeSk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUFjdGlvbnModGhpcy5zZWNvbmRhcnkpO1xuXG4gICAgICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiB0aGlzLnJlZ2lzdHJ5LmdldENvbXBvbmVudHMoKSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50LmNvbXBvbmVudClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJTdG9yZSgnYWN0aW9uTWFuYWdlcicsIHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyRGF0YSh0aGlzLnByaW1hcnkpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyRGF0YSh0aGlzLnNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgaGFzQWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnByaW1hcnkgJiYgdGhpcy5wcmltYXJ5Lmxlbmd0aCA+IDApIHx8ICh0aGlzLnNlY29uZGFyeSAmJiB0aGlzLnNlY29uZGFyeS5sZW5ndGggPiAwKVxuICAgIH1cblxuICAgIGluaXRpYWxpemVBY3Rpb25zKGFjdGlvbnM6IEFjdGlvbkludGVyZmFjZVtdKTogdm9pZFxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhY3Rpb25zKSB7XG4gICAgICAgICAgICBhY3Rpb25zW2ldID0gdGhpcy5yZWdpc3RyeS5nZXRGYWN0b3J5KGFjdGlvbnNbaV0uY29tcG9uZW50KS5jcmVhdGVGcm9tRGF0YShhY3Rpb25zW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlZ2lzdHJ5IH0gZnJvbSBcIkBlbmhhdm8vY29yZVwiO1xuaW1wb3J0IEFjdGlvbkZhY3RvcnlJbnRlcmZhY2UgZnJvbSBcIi4vQWN0aW9uRmFjdG9yeUludGVyZmFjZVwiO1xuaW1wb3J0IFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvUmVnaXN0cnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uUmVnaXN0cnkgZXh0ZW5kcyBSZWdpc3RyeVxue1xuICAgIGdldEZhY3RvcnkobmFtZTogc3RyaW5nKTogQWN0aW9uRmFjdG9yeUludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiA8QWN0aW9uRmFjdG9yeUludGVyZmFjZT5zdXBlci5nZXRGYWN0b3J5KG5hbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjg0ZGRhNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3JlcG9zL3ByaXZhdC9qYXBhbmVzZS10ZXh0ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzI4NGRkYTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzI4NGRkYTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzI4NGRkYTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI4NGRkYTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYzI4NGRkYTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vY29tcG9uZW50cy9BY3Rpb25Db21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI4NGRkYTQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Ryb3Bkb3duQWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTQ2OWI0NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ecm9wZG93bkFjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Ryb3Bkb3duQWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9yZXBvcy9wcml2YXQvamFwYW5lc2UtdGV4dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdlNDY5YjQ2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdlNDY5YjQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdlNDY5YjQ2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ecm9wZG93bkFjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U0NjliNDYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2U0NjliNDYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vY29tcG9uZW50cy9Ecm9wZG93bkFjdGlvbkNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3Bkb3duQWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ecm9wZG93bkFjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3Bkb3duQWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTQ2OWI0NiZcIiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBBY3Rpb25JbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9BY3Rpb25JbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgY3JlYXRlRnJvbURhdGEoZGF0YTogb2JqZWN0KTogQWN0aW9uSW50ZXJmYWNlXG4gICAge1xuICAgICAgICBsZXQgYWN0aW9uID0gdGhpcy5jcmVhdGVOZXcoKTtcbiAgICAgICAgYWN0aW9uID0gXy5leHRlbmQoZGF0YSwgYWN0aW9uKTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBjcmVhdGVOZXcoKTogQWN0aW9uSW50ZXJmYWNlO1xufVxuIiwiaW1wb3J0IENsb3NlQWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvQ2xvc2VBY3Rpb25cIjtcbmltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VBY3Rpb25GYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogQ2xvc2VBY3Rpb24ge1xuICAgICAgICByZXR1cm4gbmV3IENsb3NlQWN0aW9uKHRoaXMudmlldywgdGhpcy5ldmVudERpc3BhdGNoZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgRGVsZXRlQWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvRGVsZXRlQWN0aW9uXCI7XG5pbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiQGVuaGF2by9jb3JlL1RyYW5zbGF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsZXRlQWN0aW9uRmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlldztcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRvcjogVHJhbnNsYXRvcjtcblxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcsIGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyLCB0cmFuc2xhdG9yOiBUcmFuc2xhdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyID0gZXZlbnREaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLnRyYW5zbGF0b3IgPSB0cmFuc2xhdG9yO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBEZWxldGVBY3Rpb24ge1xuICAgICAgICByZXR1cm4gbmV3IERlbGV0ZUFjdGlvbih0aGlzLnZpZXcsIHRoaXMuZXZlbnREaXNwYXRjaGVyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRG93bmxvYWRBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9Eb3dubG9hZEFjdGlvblwiO1xuaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvd25sb2FkQWN0aW9uRmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIGNyZWF0ZU5ldygpOiBEb3dubG9hZEFjdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgRG93bmxvYWRBY3Rpb24oKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQWN0aW9uSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vQWN0aW9uSW50ZXJmYWNlXCI7XG5pbXBvcnQgRHJvcGRvd25BY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9Ecm9wZG93bkFjdGlvblwiO1xuaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgQWN0aW9uTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL0FjdGlvbk1hbmFnZXJcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bkFjdGlvbkZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFjdGlvbk1hbmFnZXI6IEFjdGlvbk1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25NYW5hZ2VyOiBBY3Rpb25NYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWN0aW9uTWFuYWdlciA9IGFjdGlvbk1hbmFnZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KCk6IERyb3Bkb3duQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEcm9wZG93bkFjdGlvbigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZyb21EYXRhKGRhdGE6IG9iamVjdCk6IEFjdGlvbkludGVyZmFjZSB7XG4gICAgICAgIGxldCBhY3Rpb24gPSB0aGlzLmNyZWF0ZU5ldygpO1xuICAgICAgICBhY3Rpb24gPSBfLmV4dGVuZChkYXRhLCBhY3Rpb24pO1xuICAgICAgICB0aGlzLmFjdGlvbk1hbmFnZXIuaW5pdGlhbGl6ZUFjdGlvbnMoYWN0aW9uLml0ZW1zKTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG59IiwiaW1wb3J0IER1cGxpY2F0ZUFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0R1cGxpY2F0ZUFjdGlvblwiO1xuaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEdXBsaWNhdGVBY3Rpb25GYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogRHVwbGljYXRlQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEdXBsaWNhdGVBY3Rpb24odGhpcy52aWV3LCB0aGlzLmV2ZW50RGlzcGF0Y2hlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgRXZlbnRBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9FdmVudEFjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEFjdGlvbkZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBjcmVhdGVOZXcoKTogRXZlbnRBY3Rpb24ge1xuICAgICAgICByZXR1cm4gbmV3IEV2ZW50QWN0aW9uKCk7XG4gICAgfVxufSIsImltcG9ydCBGaWx0ZXJBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9GaWx0ZXJBY3Rpb25cIjtcbmltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IEZpbHRlck1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvZmlsdGVyL0ZpbHRlck1hbmFnZXJcIjtcbmltcG9ydCBTaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9TaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckFjdGlvbkZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpbHRlck1hbmFnZXI6IEZpbHRlck1hbmFnZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5OiBTaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5O1xuXG4gICAgY29uc3RydWN0b3IoZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlciwgc2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeTogU2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmZpbHRlck1hbmFnZXIgPSBmaWx0ZXJNYW5hZ2VyO1xuICAgICAgICB0aGlzLnNpbmdsZUZpbHRlckFjdGlvbkZhY3RvcnkgPSBzaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5O1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBGaWx0ZXJBY3Rpb24ge1xuICAgICAgICByZXR1cm4gbmV3IEZpbHRlckFjdGlvbih0aGlzLmZpbHRlck1hbmFnZXIsIHRoaXMuc2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeSk7XG4gICAgfVxufSIsImltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IE1vZGFsQWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvTW9kYWxBY3Rpb25cIjtcbmltcG9ydCBNb2RhbE1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL01vZGFsTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbEFjdGlvbkZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBwcml2YXRlIG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IobW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb2RhbE1hbmFnZXIgPSBtb2RhbE1hbmFnZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KCk6IE1vZGFsQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNb2RhbEFjdGlvbih0aGlzLm1vZGFsTWFuYWdlcik7XG4gICAgfVxufSIsImltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IE9wZW5BY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9PcGVuQWN0aW9uXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5BY3Rpb25GYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuXG4gICAgY29uc3RydWN0b3IodmlldzogVmlldykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBPcGVuQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPcGVuQWN0aW9uKHRoaXMudmlldylcbiAgICB9XG59IiwiaW1wb3J0IFByZXZpZXdBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9QcmV2aWV3QWN0aW9uXCI7XG5pbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZXZpZXdBY3Rpb25GYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVGcm9tRGF0YShkYXRhOiBvYmplY3QpOiBQcmV2aWV3QWN0aW9uXG4gICAge1xuICAgICAgICBsZXQgYWN0aW9uID0gPFByZXZpZXdBY3Rpb24+c3VwZXIuY3JlYXRlRnJvbURhdGEoZGF0YSk7XG4gICAgICAgIGFjdGlvbi5sb2FkTGlzdGVuZXIoKTtcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogUHJldmlld0FjdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJldmlld0FjdGlvbih0aGlzLnZpZXcsIHRoaXMuZXZlbnREaXNwYXRjaGVyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2F2ZUFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL1NhdmVBY3Rpb25cIjtcbmltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZUFjdGlvbkZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcblxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcsIGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyID0gZXZlbnREaXNwYXRjaGVyO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBTYXZlQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTYXZlQWN0aW9uKHRoaXMudmlldywgdGhpcy5ldmVudERpc3BhdGNoZXIpO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGVGaWx0ZXJBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9TaW5nbGVGaWx0ZXJBY3Rpb25cIjtcbmltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IEZpbHRlck1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvZmlsdGVyL0ZpbHRlck1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGZpbHRlck1hbmFnZXI6IEZpbHRlck1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJNYW5hZ2VyID0gZmlsdGVyTWFuYWdlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogU2luZ2xlRmlsdGVyQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTaW5nbGVGaWx0ZXJBY3Rpb24odGhpcy5maWx0ZXJNYW5hZ2VyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQWN0aW9uSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vQWN0aW9uSW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0QWN0aW9uIGltcGxlbWVudHMgQWN0aW9uSW50ZXJmYWNlXG57XG4gICAgY29tcG9uZW50OiBzdHJpbmc7XG5cbiAgICBhYnN0cmFjdCBleGVjdXRlKCk6IHZvaWQ7XG59IiwiaW1wb3J0IEFic3RyYWN0QWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvQWJzdHJhY3RBY3Rpb25cIjtcbmltcG9ydCBDbG9zZUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0Nsb3NlRXZlbnRcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RBY3Rpb25cbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcblxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcsIGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyID0gZXZlbnREaXNwYXRjaGVyO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGlkID0gdGhpcy52aWV3LmdldElkKCk7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDbG9zZUV2ZW50KGlkKSk7XG4gICAgfVxufSIsImltcG9ydCBBYnN0cmFjdEFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Fic3RyYWN0QWN0aW9uXCI7XG5pbXBvcnQgQ29uZmlybSBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9Db25maXJtXCI7XG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBMb2FkaW5nRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvTG9hZGluZ0V2ZW50XCI7XG5pbXBvcnQgKiBhcyBVUkkgZnJvbSAndXJpanMnO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBUcmFuc2xhdG9yIGZyb20gXCJAZW5oYXZvL2NvcmUvVHJhbnNsYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxldGVBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdEFjdGlvblxue1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZztcblxuXG4gICAgcHVibGljIGNvbmZpcm1NZXNzYWdlOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbmZpcm1MYWJlbE9rOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbmZpcm1MYWJlbENhbmNlbDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICB9XG5cbiAgICBleGVjdXRlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy5jb25maXJtKG5ldyBDb25maXJtKFxuICAgICAgICAgICAgdGhpcy5jb25maXJtTWVzc2FnZSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdXJpID0gbmV3IFVSSSh0aGlzLnVybCk7XG4gICAgICAgICAgICAgICAgdXJpID0gdXJpLmFkZFF1ZXJ5KCd2aWV3X2lkJywgdGhpcy52aWV3LmdldElkKCkpO1xuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBMb2FkaW5nRXZlbnQodGhpcy52aWV3LmdldElkKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAkKCc8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiJyt1cmkrJ1wiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9jc3JmX3Rva2VuXCIgdmFsdWU9XCInK3RoaXMudG9rZW4rJ1wiLz48L2Zvcm0+JykuYXBwZW5kVG8oJ2JvZHknKS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1MYWJlbENhbmNlbCxcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUxhYmVsT2ssXG4gICAgICAgICkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBBYnN0cmFjdEFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Fic3RyYWN0QWN0aW9uXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3dubG9hZEFjdGlvbiBleHRlbmRzIEFic3RyYWN0QWN0aW9uXG57XG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuICAgIHB1YmxpYyBhamF4OiBib29sZWFuO1xuXG4gICAgZXhlY3V0ZSgpOiB2b2lkXG4gICAge1xuICAgICAgICBpZih0aGlzLmFqYXgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMudXJsLCAnX3NlbGYnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF4aW9zLnBvc3QodGhpcy51cmwsICQoJ2Zvcm0nKS5zZXJpYWxpemUoKSwge1xuICAgICAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScgfSxcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJ1xuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGxldCBmaWxlbmFtZSA9IHRoaXMuZ2V0RmlsZW5hbWUocmVzcG9uc2UuaGVhZGVyc1snY29udGVudC1kaXNwb3NpdGlvbiddKTtcbiAgICAgICAgICAgIGxldCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddO1xuXG4gICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogY29udGVudFR5cGUsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICAgICAgbGluay5kb3dubG9hZCA9IGZpbGVuYW1lO1xuICAgICAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL2hhbmRsZSBlcnJvclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZpbGVuYW1lKGNvbnRlbnREaXNwb3NpdGlvbjogc3RyaW5nKTogc3RyaW5nfG51bGxcbiAgICB7XG4gICAgICAgIGxldCBmaWxlbmFtZSA9IG51bGw7XG5cbiAgICAgICAgbGV0IGZpbGVuYW1lUmVnZXggPSAvZmlsZW5hbWVbXjs9XFxuXSo9KChbJ1wiXSkuKj9cXDJ8W147XFxuXSopLztcbiAgICAgICAgbGV0IG1hdGNoZXMgPSBmaWxlbmFtZVJlZ2V4LmV4ZWMoY29udGVudERpc3Bvc2l0aW9uKTtcbiAgICAgICAgaWYgKG1hdGNoZXMgIT0gbnVsbCAmJiBtYXRjaGVzWzFdKSB7XG4gICAgICAgICAgICBmaWxlbmFtZSA9IG1hdGNoZXNbMV0ucmVwbGFjZSgvWydcIl0vZywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWxlbmFtZTtcbiAgICB9XG59IiwiaW1wb3J0IEFjdGlvbkludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL0FjdGlvbkludGVyZmFjZVwiO1xuaW1wb3J0IEFic3RyYWN0QWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvQWJzdHJhY3RBY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25BY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdEFjdGlvblxue1xuICAgIGl0ZW1zOiBBY3Rpb25JbnRlcmZhY2VbXTtcbiAgICBjbG9zZUFmdGVyOiBib29sZWFuO1xuXG4gICAgZXhlY3V0ZSgpOiB2b2lkXG4gICAge1xuICAgIH1cbn0iLCJpbXBvcnQgQWJzdHJhY3RBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9BYnN0cmFjdEFjdGlvblwiO1xuaW1wb3J0IENvbmZpcm0gZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvQ29uZmlybVwiO1xuaW1wb3J0ICogYXMgVVJJIGZyb20gXCJ1cmlqc1wiO1xuaW1wb3J0IExvYWRpbmdFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9Mb2FkaW5nRXZlbnRcIjtcbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHVwbGljYXRlQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RBY3Rpb25cbntcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XG4gICAgcHVibGljIHRva2VuOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbmZpcm1NZXNzYWdlOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbmZpcm1MYWJlbE9rOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbmZpcm1MYWJlbENhbmNlbDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICB9XG5cbiAgICBleGVjdXRlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy5jb25maXJtKG5ldyBDb25maXJtKFxuICAgICAgICAgICAgdGhpcy5jb25maXJtTWVzc2FnZSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdXJpID0gbmV3IFVSSSh0aGlzLnVybCk7XG4gICAgICAgICAgICAgICAgdXJpID0gdXJpLmFkZFF1ZXJ5KCd2aWV3X2lkJywgdGhpcy52aWV3LmdldElkKCkpO1xuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IG5ldyBMb2FkaW5nRXZlbnQodGhpcy52aWV3LmdldElkKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAkKCc8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwiJyt1cmkrJ1wiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9jc3JmX3Rva2VuXCIgdmFsdWU9XCInK3RoaXMudG9rZW4rJ1wiLz48L2Zvcm0+JykuYXBwZW5kVG8oJ2JvZHknKS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoKSA9PiB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1MYWJlbENhbmNlbCxcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUxhYmVsT2ssXG4gICAgICAgICkpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBBYnN0cmFjdEFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Fic3RyYWN0QWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RBY3Rpb25cbntcbiAgICBwdWJsaWMgZXZlbnQ6IHN0cmluZztcblxuICAgIGV4ZWN1dGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcih0aGlzLmV2ZW50KTtcbiAgICB9XG59IiwiaW1wb3J0IEZpbHRlck1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvZmlsdGVyL0ZpbHRlck1hbmFnZXJcIjtcbmltcG9ydCBEcm9wZG93bkFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Ryb3Bkb3duQWN0aW9uXCI7XG5pbXBvcnQgU2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvU2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJBY3Rpb24gZXh0ZW5kcyBEcm9wZG93bkFjdGlvblxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNpbmdsZUZpbHRlckFjdGlvbkZhY3Rvcnk6IFNpbmdsZUZpbHRlckFjdGlvbkZhY3Rvcnk7XG5cbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXJNYW5hZ2VyOiBGaWx0ZXJNYW5hZ2VyLCBzaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5OiBTaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyTWFuYWdlciA9IGZpbHRlck1hbmFnZXI7XG4gICAgICAgIHRoaXMuc2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeSA9IHNpbmdsZUZpbHRlckFjdGlvbkZhY3Rvcnk7XG4gICAgICAgIHRoaXMuY2xvc2VBZnRlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmZpbHRlck1hbmFnZXIuZmlsdGVycykge1xuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IHRoaXMuc2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeS5jcmVhdGVOZXcoKTtcbiAgICAgICAgICAgIGFjdGlvbi5maWx0ZXJLZXkgPSB0aGlzLmZpbHRlck1hbmFnZXIuZmlsdGVyc1tpXS5rZXk7XG4gICAgICAgICAgICBhY3Rpb24ubGFiZWwgPSB0aGlzLmZpbHRlck1hbmFnZXIuZmlsdGVyc1tpXS5sYWJlbDtcbiAgICAgICAgICAgIGFjdGlvbi5zZXRBY3RpdmUodGhpcy5maWx0ZXJNYW5hZ2VyLmZpbHRlcnNbaV0uYWN0aXZlKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBBYnN0cmFjdEFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Fic3RyYWN0QWN0aW9uXCI7XG5pbXBvcnQgTW9kYWxNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9Nb2RhbE1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdEFjdGlvblxue1xuICAgIHB1YmxpYyBtb2RhbDogYW55O1xuXG4gICAgcHJpdmF0ZSBtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kYWxNYW5hZ2VyID0gbW9kYWxNYW5hZ2VyO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5tb2RhbE1hbmFnZXIucHVzaCh0aGlzLm1vZGFsKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQWJzdHJhY3RBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9BYnN0cmFjdEFjdGlvblwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RBY3Rpb25cbntcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XG4gICAgcHVibGljIHRhcmdldDogc3RyaW5nO1xuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlldztcblxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB9XG5cbiAgICBleGVjdXRlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGlmKHRoaXMudGFyZ2V0ID09ICdfdmlldycpIHtcbiAgICAgICAgICAgIGlmKHRoaXMua2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Lm9wZW4odGhpcy51cmwsIHRoaXMua2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Lm9wZW4odGhpcy51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5vcGVuKHRoaXMudXJsLCB0aGlzLnRhcmdldCk7XG4gICAgfVxufSIsImltcG9ydCBBYnN0cmFjdEFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Fic3RyYWN0QWN0aW9uXCI7XG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRGF0YUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0RhdGFFdmVudFwiO1xuaW1wb3J0IEV4aXN0c0V2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0V4aXN0c0V2ZW50XCI7XG5pbXBvcnQgTG9hZGVkRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvTG9hZGVkRXZlbnRcIjtcbmltcG9ydCBFeGlzdHNEYXRhIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V4aXN0c0RhdGFcIjtcbmltcG9ydCBMb2FkRGF0YUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWREYXRhRXZlbnRcIjtcbmltcG9ydCBEYXRhU3RvcmFnZUVudHJ5IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0RhdGFTdG9yYWdlRW50cnlcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZXZpZXdBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdEFjdGlvblxue1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcblxuICAgIHByaXZhdGUgc3RhdGljIGxpc3RlbmVyTG9hZGVkID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcblxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcsIGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyID0gZXZlbnREaXNwYXRjaGVyO1xuICAgIH1cblxuICAgIGxvYWRMaXN0ZW5lcigpXG4gICAge1xuICAgICAgICBpZihQcmV2aWV3QWN0aW9uLmxpc3RlbmVyTG9hZGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBQcmV2aWV3QWN0aW9uLmxpc3RlbmVyTG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnZpZXcubG9hZFZhbHVlKCdwcmV2aWV3LXZpZXcnLCAoaWQpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWV3SWQgPSBpZCA/IHBhcnNlSW50KGlkKSA6IG51bGw7XG4gICAgICAgICAgICBpZih2aWV3SWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmREYXRhKHZpZXdJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLm9uKCdsb2FkZWQnLCAoZXZlbnQ6IExvYWRlZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZXcubG9hZFZhbHVlKCdwcmV2aWV3LXZpZXcnLCAoaWQpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdmlld0lkID0gaWQgPyBwYXJzZUludChpZCkgOiBudWxsO1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50LmlkID09IHZpZXdJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmREYXRhKHZpZXdJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5vcGVuKHRoaXMudXJsLCAncHJldmlldy12aWV3Jyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kRGF0YShpZCA6bnVtYmVyKVxuICAgIHtcbiAgICAgICAgbGV0IGRhdGEgPSAkKCdmb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IERhdGFFdmVudChpZCwgZGF0YSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3Blbih1cmw6IHN0cmluZywga2V5OiBzdHJpbmcgPSBudWxsLCBsYWJlbDogc3RyaW5nID0gbnVsbClcbiAgICB7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBMb2FkRGF0YUV2ZW50KGtleSkpLnRoZW4oKGRhdGE6IERhdGFTdG9yYWdlRW50cnkpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWV3SWQ6IG51bWJlciA9IG51bGw7XG4gICAgICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmlld0lkID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHZpZXdJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IEV4aXN0c0V2ZW50KHZpZXdJZCkpLnRoZW4oKGRhdGE6IEV4aXN0c0RhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5leGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZERhdGEodmlld0lkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5vcGVuVmlldyh1cmwsIGtleSwgbGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5vcGVuVmlldyh1cmwsIGtleSwgbGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBBYnN0cmFjdEFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Fic3RyYWN0QWN0aW9uXCI7XG5pbXBvcnQgTG9hZGluZ0V2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWRpbmdFdmVudFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZUFjdGlvbiBleHRlbmRzIEFic3RyYWN0QWN0aW9uXG57XG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICB9XG5cbiAgICBleGVjdXRlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBMb2FkaW5nRXZlbnQodGhpcy52aWV3LmdldElkKCkpO1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XG5cbiAgICAgICAgbGV0ICRmb3JtID0gJCgnZm9ybScpO1xuXG4gICAgICAgIGlmICh0aGlzLnVybCkge1xuICAgICAgICAgICAgJGZvcm0uYXR0cignYWN0aW9uJywgdGhpcy51cmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgJGZvcm0uc3VibWl0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEZpbHRlck1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvZmlsdGVyL0ZpbHRlck1hbmFnZXJcIjtcbmltcG9ydCBBYnN0cmFjdEFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Fic3RyYWN0QWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZUZpbHRlckFjdGlvbiBleHRlbmRzIEFic3RyYWN0QWN0aW9uXG57XG4gICAgcHJpdmF0ZSByZWFkb25seSBmaWx0ZXJNYW5hZ2VyOiBGaWx0ZXJNYW5hZ2VyO1xuICAgIGFjdGl2ZTogYm9vbGVhbjtcbiAgICBmaWx0ZXJLZXk6IHN0cmluZztcbiAgICBpY29uOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGZpbHRlck1hbmFnZXI6IEZpbHRlck1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJNYW5hZ2VyID0gZmlsdGVyTWFuYWdlcjtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBcInNpbmdsZS1maWx0ZXItYWN0aW9uXCI7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyTWFuYWdlci5zZXRGaWx0ZXJBY3RpdmUodGhpcy5maWx0ZXJLZXksIHRoaXMuYWN0aXZlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QWN0aXZlKGFjdGl2ZTogYm9vbGVhbilcbiAgICB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUljb24oKVxuICAgIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSAncmVtb3ZlX2NpcmNsZV9vdXRsaW5lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9ICdhZGRfY2lyY2xlX291dGxpbmUnO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCIuL1JlZ2lzdHJ5SW50ZXJmYWNlXCI7XG5pbXBvcnQgUmVnaXN0cnlFbnRyeSBmcm9tIFwiQGVuaGF2by9jb3JlL1JlZ2lzdHJ5RW50cnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0cnkgaW1wbGVtZW50cyBSZWdpc3RyeUludGVyZmFjZVxue1xuICAgIHByaXZhdGUgZW50cmllczogUmVnaXN0cnlFbnRyeVtdID0gW107XG5cbiAgICBwcml2YXRlIGdldChuYW1lOiBzdHJpbmcpOiBSZWdpc3RyeUVudHJ5XG4gICAge1xuICAgICAgICBmb3IobGV0IGVudHJ5IG9mIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgaWYoZW50cnkuZ2V0TmFtZSgpID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgJ0VudHJ5IHdpdGggbmFtZSBcIicrbmFtZSsnXCIgZG9lcyBub3QgZXhpc3QgaW4gcmVnaXN0cnknO1xuICAgIH1cblxuICAgIGdldEZhY3RvcnkobmFtZTogc3RyaW5nKTogb2JqZWN0XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkuZ2V0RmFjdG9yeSgpO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudChuYW1lOiBzdHJpbmcpOiBvYmplY3RcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChuYW1lKS5nZXRDb21wb25lbnQoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlcihlbnRyeTogUmVnaXN0cnlFbnRyeSk6IFJlZ2lzdHJ5SW50ZXJmYWNlXG4gICAge1xuICAgICAgICBpZih0aGlzLmhhcyhlbnRyeS5nZXROYW1lKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUVudHJ5KGVudHJ5LmdldE5hbWUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZUVudHJ5KG5hbWU6IHN0cmluZylcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBpZih0aGlzLmVudHJpZXNbaV0uZ2V0TmFtZSgpID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudHJpZXMuc3BsaWNlKHBhcnNlSW50KGkpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuXG4gICAge1xuICAgICAgICBmb3IobGV0IGVudHJ5IG9mIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgaWYoZW50cnkuZ2V0TmFtZSgpID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0Q29tcG9uZW50cygpOiBDb21wb25lbnRbXVxuICAgIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChuZXcgQ29tcG9uZW50KGVudHJ5LmdldE5hbWUoKSwgZW50cnkuZ2V0Q29tcG9uZW50KCkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRcbntcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjb21wb25lbnQ6IG9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBvYmplY3QpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlZ2lzdHJ5IGZyb20gJy4vUmVnaXN0cnknO1xuaW1wb3J0IFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gJy4vUmVnaXN0cnlJbnRlcmZhY2UnO1xuaW1wb3J0IEZhY3RvcnlJbnRlcmZhY2UgZnJvbSAnLi9GYWN0b3J5SW50ZXJmYWNlJztcbmltcG9ydCBDb21wb25lbnRBd2FyZUludGVyZmFjZSBmcm9tICcuL0NvbXBvbmVudEF3YXJlSW50ZXJmYWNlJztcblxuZXhwb3J0IHtcbiAgICBSZWdpc3RyeSxcbiAgICBSZWdpc3RyeUludGVyZmFjZSxcbiAgICBGYWN0b3J5SW50ZXJmYWNlLFxuICAgIENvbXBvbmVudEF3YXJlSW50ZXJmYWNlXG59O1xuIiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzYXZlU3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgc2F2ZVN0YXRlOiBib29sZWFuID0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCdjbG9zZScpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc2F2ZVN0YXRlID0gc2F2ZVN0YXRlO1xuICAgIH1cbn0iLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGlkOiBudW1iZXI7XG4gICAgZGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgZGF0YTogYW55KVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ2RhdGEnKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dWlkdjQgZnJvbSBcInV1aWQvdjRcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFxue1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBvcmlnaW46IGFueTtcbiAgICB0YXJnZXQ6IGFueTtcbiAgICBoaXN0b3J5OiBzdHJpbmdbXSA9IFtdO1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICB0dGw6IG51bWJlcjtcbiAgICBkaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkdjQoKTtcbiAgICB9XG5cbiAgICByZXNvbHZlKGRhdGE6IG9iamVjdCA9IHt9KVxuICAgIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBSZXNvbHZlRXZlbnQodGhpcy51dWlkLCBkYXRhKSk7XG4gICAgfVxuXG4gICAgcmVqZWN0KGRhdGE6IG9iamVjdCA9IHt9KVxuICAgIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBSZWplY3RFdmVudCh0aGlzLnV1aWQsIGRhdGEpKTtcbiAgICB9XG5cbiAgICBzZXJpYWxpemUoKTogc3RyaW5nXG4gICAge1xuICAgICAgICBsZXQgZGlzcGF0Y2hlciA9IHRoaXMuZGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gbnVsbDtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWplY3RFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgZGF0YTogb2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IodXVpZDogc3RyaW5nLCBkYXRhOiBvYmplY3QpXG4gICAge1xuICAgICAgICBzdXBlcigncmVqZWN0Jyk7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzb2x2ZUV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBkYXRhOiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcih1dWlkOiBzdHJpbmcsIGRhdGE6IG9iamVjdClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdyZXNvbHZlJyk7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxufVxuIiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhpc3RzRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGlkOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ2V4aXN0cycpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxufSIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWREYXRhRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ2xvYWQtZGF0YScpO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG59IiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ0V2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKCdsb2FkaW5nJyk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG59IiwiaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maXJtXG57XG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgICBwdWJsaWMgZGVueVRleHQ6IHN0cmluZztcbiAgICBwdWJsaWMgYWNjZXB0VGV4dDogc3RyaW5nO1xuICAgIHB1YmxpYyBvbkRlbnk6ICgpID0+IHZvaWQ7XG4gICAgcHVibGljIG9uQWNjZXB0OiAoKSA9PiB2b2lkO1xuICAgIHB1YmxpYyB2aWV3OiBWaWV3O1xuXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBvbkFjY2VwdD86ICgpID0+IHZvaWQsIG9uRGVueT86ICgpID0+IHZvaWQsIGRlbnlUZXh0OiBzdHJpbmcgPSAnZGVueScsIGFjY2VwdFRleHQ6IHN0cmluZyA9ICdhY2NlcHQnKVxuICAgIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5vbkFjY2VwdCA9IG9uQWNjZXB0O1xuICAgICAgICB0aGlzLm9uRGVueSA9IG9uRGVueTtcbiAgICAgICAgdGhpcy5kZW55VGV4dCA9IGRlbnlUZXh0O1xuICAgICAgICB0aGlzLmFjY2VwdFRleHQgPSBhY2NlcHRUZXh0O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRWaWV3KHZpZXc6IFZpZXcpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIH1cblxuICAgIHB1YmxpYyBkZW55KClcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy5jb25maXJtKG51bGwpO1xuICAgICAgICBpZih0aGlzLm9uRGVueSkge1xuICAgICAgICAgICAgdGhpcy5vbkRlbnkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhY2NlcHQoKVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3LmNvbmZpcm0obnVsbCk7XG4gICAgICAgIGlmKHRoaXMub25BY2NlcHQpIHtcbiAgICAgICAgICAgIHRoaXMub25BY2NlcHQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgRmFjdG9yeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL0ZhY3RvcnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0cnlFbnRyeVxue1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY29tcG9uZW50OiBvYmplY3Q7XG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBGYWN0b3J5SW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IG9iamVjdCwgZmFjdG9yeTogRmFjdG9yeUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb21wb25lbnQoKTogb2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGYWN0b3J5KCk6IEZhY3RvcnlJbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3J5O1xuICAgIH1cbn1cbiIsIlxuICAgIGltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbiAgICBpbXBvcnQgQWN0aW9uSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vQWN0aW9uSW50ZXJmYWNlXCI7XG5cbiAgICBAQ29tcG9uZW50XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgVnVlIHtcbiAgICAgICAgbmFtZTogJ2FjdGlvbi1jb21wb25lbnQnO1xuICAgICAgICBAUHJvcCgpXG4gICAgICAgIGRhdGE6IEFjdGlvbkludGVyZmFjZTtcbiAgICAgICAgQFByb3AoKVxuICAgICAgICBjbGlja1N0b3A6IGJvb2xlYW47XG5cbiAgICAgICAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5pY29uKSA/ICdpY29uLScgKyB0aGlzLmRhdGEuaWNvbiA6ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgZXhlY3V0ZSgkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuY2xpY2tTdG9wKSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhLmV4ZWN1dGUoKVxuICAgICAgICB9XG4gICAgfVxuIiwiXG4gICAgaW1wb3J0IHsgVnVlLCBDb21wb25lbnQsIFByb3AgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuICAgIGltcG9ydCBEcm9wZG93bkFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Ryb3Bkb3duQWN0aW9uXCI7XG5cbiAgICBAQ29tcG9uZW50XG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25BY3Rpb25Db21wb25lbnQgZXh0ZW5kcyBWdWUge1xuICAgICAgICBuYW1lOiAnZHJvcGRvd24tYWN0aW9uJztcbiAgICAgICAgQFByb3AoKVxuICAgICAgICBkYXRhOiBEcm9wZG93bkFjdGlvbjtcblxuICAgICAgICBvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5pY29uKSA/ICdpY29uLScgKyB0aGlzLmRhdGEuaWNvbiA6ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlT3BlbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtQ2xpY2soKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNsb3NlQWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsb3NlIHdoZW4gY2xpY2tlZCBvdXRzaWRlXG4gICAgICAgIGNsb3NlKGU6IEV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuJGVsLmNvbnRhaW5zKDxOb2RlPmUudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UpXG4gICAgICAgIH1cbiAgICAgICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLmNsb3NlKVxuICAgICAgICB9XG4gICAgfVxuIiwiLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIC8vIGpvaW4gdXNlZCB0byBmaXggbWVtb3J5IGlzc3VlIGNhdXNlZCBieSBjb25jYXRlbmF0aW9uOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMTc1I2M0XG4gIHJldHVybiAoW1xuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXG4gIF0pLmpvaW4oJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsInZhciBybmcgPSByZXF1aXJlKCcuL2xpYi9ybmcnKTtcbnZhciBieXRlc1RvVXVpZCA9IHJlcXVpcmUoJy4vbGliL2J5dGVzVG9VdWlkJyk7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fYyxcbiAgICBfc2V0dXAgPSBfdm0uX3NlbGYuX3NldHVwUHJveHlcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uXCIsXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgIHJldHVybiBfdm0uZXhlY3V0ZSgkZXZlbnQpXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhY3Rpb24taWNvblwiIH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICBjbGFzczogW1wiaWNvblwiLCBfdm0uaWNvbl0sXG4gICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS5sYWJlbCkpXSksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2MsXG4gICAgX3NldHVwID0gX3ZtLl9zZWxmLl9zZXR1cFByb3h5XG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGlvblwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlT3BlbigpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWljb25cIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBbXCJpY29uXCIsIF92bS5pY29uXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS5sYWJlbCkpXSksXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5vcGVuXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1hY3Rpb24tbGlzdFwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLml0ZW1DbGljaygpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9sKF92bS5kYXRhLml0ZW1zLCBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoYWN0aW9uLmNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogYWN0aW9uLCBcImRhdGEtYWN0aW9uXCI6IGFjdGlvbi5rZXkgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==