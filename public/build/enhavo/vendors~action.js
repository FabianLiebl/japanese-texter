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

  var ActionManager =
  /** @class */
  function () {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/core */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ActionRegistry =
  /** @class */
  function (_super) {
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
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ActionComponent_vue_vue_type_template_id_c284dda4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./ActionComponent.vue?vue&type=template&id=c284dda4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=template&id=c284dda4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ActionComponent_vue_vue_type_template_id_c284dda4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ActionComponent_vue_vue_type_template_id_c284dda4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_DropdownActionComponent_vue_vue_type_template_id_7e469b46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./DropdownActionComponent.vue?vue&type=template&id=7e469b46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=template&id=7e469b46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_DropdownActionComponent_vue_vue_type_template_id_7e469b46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_DropdownActionComponent_vue_vue_type_template_id_7e469b46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

  var AbstractFactory =
  /** @class */
  function () {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/CloseAction */ "./node_modules/@enhavo/app/action/model/CloseAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, CloseAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var CloseActionFactory =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/DeleteAction */ "./node_modules/@enhavo/app/action/model/DeleteAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, DeleteAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var DeleteActionFactory =
  /** @class */
  function (_super) {
    __extends(DeleteActionFactory, _super);

    function DeleteActionFactory(view, eventDispatcher, translator) {
      var _this = _super.call(this) || this;

      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      _this.translator = translator;
      return _this;
    }

    DeleteActionFactory.prototype.createNew = function () {
      return new DeleteAction_1["default"](this.view, this.eventDispatcher, this.translator);
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/DownloadAction */ "./node_modules/@enhavo/app/action/model/DownloadAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, DownloadAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var DownloadActionFactory =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/DropdownAction */ "./node_modules/@enhavo/app/action/model/DropdownAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, DropdownAction_1, AbstractFactory_1, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var DropdownActionFactory =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/DuplicateAction */ "./node_modules/@enhavo/app/action/model/DuplicateAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, DuplicateAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var DropdownActionFactory =
  /** @class */
  function (_super) {
    __extends(DropdownActionFactory, _super);

    function DropdownActionFactory(view, eventDispatcher) {
      var _this = _super.call(this) || this;

      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      return _this;
    }

    DropdownActionFactory.prototype.createNew = function () {
      return new DuplicateAction_1["default"](this.view, this.eventDispatcher);
    };

    return DropdownActionFactory;
  }(AbstractFactory_1["default"]);

  exports["default"] = DropdownActionFactory;
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/action/model/EventAction */ "./node_modules/@enhavo/app/action/model/EventAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, EventAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var EventActionFactory =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/FilterAction */ "./node_modules/@enhavo/app/action/model/FilterAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, FilterAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var FilterActionFactory =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/action/model/ModalAction */ "./node_modules/@enhavo/app/action/model/ModalAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, ModalAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ModalActionFactory =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/action/model/OpenAction */ "./node_modules/@enhavo/app/action/model/OpenAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, OpenAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var OpenActionFactory =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/PreviewAction */ "./node_modules/@enhavo/app/action/model/PreviewAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, PreviewAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var PreviewActionFactory =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/SaveAction */ "./node_modules/@enhavo/app/action/model/SaveAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, SaveAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var SaveActionFactory =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/SingleFilterAction */ "./node_modules/@enhavo/app/action/model/SingleFilterAction.ts"), __webpack_require__(/*! @enhavo/app/action/factory/AbstractFactory */ "./node_modules/@enhavo/app/action/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, SingleFilterAction_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var SingleFilterActionFactory =
  /** @class */
  function (_super) {
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

  var AbstractAction =
  /** @class */
  function () {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/CloseEvent */ "./node_modules/@enhavo/app/view-stack/event/CloseEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1, CloseEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var CloseAction =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts"), __webpack_require__(/*! @enhavo/app/view/Confirm */ "./node_modules/@enhavo/app/view/Confirm.ts"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadingEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts"), __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1, Confirm_1, $, LoadingEvent_1, URI) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var DeleteAction =
  /** @class */
  function (_super) {
    __extends(DeleteAction, _super);

    function DeleteAction(view, eventDispatcher, translator) {
      var _this = _super.call(this) || this;

      _this.view = view;
      _this.eventDispatcher = eventDispatcher;
      _this.translator = translator;
      return _this;
    }

    DeleteAction.prototype.execute = function () {
      var _this = this;

      this.view.confirm(new Confirm_1["default"](this.translator.trans('enhavo_app.delete.message.question'), function () {
        var uri = new URI(_this.url);
        uri = uri.addQuery('view_id', _this.view.getId());
        var event = new LoadingEvent_1["default"](_this.view.getId());

        _this.eventDispatcher.dispatch(event);

        $('<form method="post" action="' + uri + '"><input type="hidden" name="_csrf_token" value="' + _this.token + '"/></form>').appendTo('body').submit();
      }, function () {}, this.translator.trans('enhavo_app.delete.label.cancel'), this.translator.trans('enhavo_app.delete.label.delete')));
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts"), __webpack_require__(/*! axios */ "./node_modules/axios/index.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1, axios_1, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var DownloadAction =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var DropdownAction =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts"), __webpack_require__(/*! @enhavo/app/view/Confirm */ "./node_modules/@enhavo/app/view/Confirm.ts"), __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadingEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1, Confirm_1, URI, LoadingEvent_1, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var DuplicateAction =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, $, AbstractAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var EventAction =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/DropdownAction */ "./node_modules/@enhavo/app/action/model/DropdownAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, DropdownAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var FilterAction =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ModalAction =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var OpenAction =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/view-stack/event/DataEvent */ "./node_modules/@enhavo/app/view-stack/event/DataEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/ExistsEvent */ "./node_modules/@enhavo/app/view-stack/event/ExistsEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadDataEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadDataEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1, $, DataEvent_1, ExistsEvent_1, LoadDataEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var PreviewAction =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadingEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, $, AbstractAction_1, LoadingEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var SaveAction =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/action/model/AbstractAction */ "./node_modules/@enhavo/app/action/model/AbstractAction.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractAction_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var SingleFilterAction =
  /** @class */
  function (_super) {
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

  var Registry =
  /** @class */
  function () {
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

  var Component =
  /** @class */
  function () {
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

  var CloseEvent =
  /** @class */
  function (_super) {
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

  var DataEvent =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, uuidv4) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ResolveEvent = exports.RejectEvent = void 0;

  var Event =
  /** @class */
  function () {
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

  var RejectEvent =
  /** @class */
  function (_super) {
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

  var ResolveEvent =
  /** @class */
  function (_super) {
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

  var ExistsEvent =
  /** @class */
  function (_super) {
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

  var LoadDataEvent =
  /** @class */
  function (_super) {
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

  var LoadingEvent =
  /** @class */
  function (_super) {
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

  var Confirm =
  /** @class */
  function () {
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

  var RegistryEntry =
  /** @class */
  function () {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ActionComponent =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var DropdownActionComponent =
  /** @class */
  function (_super) {
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
    }; // Close when clicked outside


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
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/action/components/ActionComponent.vue?vue&type=template&id=c284dda4& ***!
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
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/action/components/DropdownActionComponent.vue?vue&type=template&id=7e469b46& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL0FjdGlvbk1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9BY3Rpb25SZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2NvbXBvbmVudHMvQWN0aW9uQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2NvbXBvbmVudHMvQWN0aW9uQ29tcG9uZW50LnZ1ZT8xYzg5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vY29tcG9uZW50cy9BY3Rpb25Db21wb25lbnQudnVlPzkwOWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9jb21wb25lbnRzL0Ryb3Bkb3duQWN0aW9uQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2NvbXBvbmVudHMvRHJvcGRvd25BY3Rpb25Db21wb25lbnQudnVlPzg5ZTgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9jb21wb25lbnRzL0Ryb3Bkb3duQWN0aW9uQ29tcG9uZW50LnZ1ZT85NmI0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9BYnN0cmFjdEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0Nsb3NlQWN0aW9uRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvRGVsZXRlQWN0aW9uRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvRG93bmxvYWRBY3Rpb25GYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9Ecm9wZG93bkFjdGlvbkZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0R1cGxpY2F0ZUFjdGlvbkZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0V2ZW50QWN0aW9uRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvRmlsdGVyQWN0aW9uRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvTW9kYWxBY3Rpb25GYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9PcGVuQWN0aW9uRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvUHJldmlld0FjdGlvbkZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L1NhdmVBY3Rpb25GYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9TaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvQWJzdHJhY3RBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9DbG9zZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0RlbGV0ZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Rvd25sb2FkQWN0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvRHJvcGRvd25BY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9EdXBsaWNhdGVBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9FdmVudEFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0ZpbHRlckFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL01vZGFsQWN0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvT3BlbkFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL1ByZXZpZXdBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9TYXZlQWN0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvU2luZ2xlRmlsdGVyQWN0aW9uLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ub2RlX21vZHVsZXMvQGVuaGF2by9jb3JlL1JlZ2lzdHJ5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9ub2RlX21vZHVsZXMvQGVuaGF2by9jb3JlL2luZGV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0Nsb3NlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvRGF0YUV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0V4aXN0c0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWREYXRhRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvTG9hZGluZ0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3L0NvbmZpcm0udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vY29yZS9SZWdpc3RyeUVudHJ5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9hY3Rpb24vY29tcG9uZW50cy9BY3Rpb25Db21wb25lbnQudnVlPzJhZjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9jb21wb25lbnRzL0Ryb3Bkb3duQWN0aW9uQ29tcG9uZW50LnZ1ZT8xYWFjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2FjdGlvbi9jb21wb25lbnRzL0FjdGlvbkNvbXBvbmVudC52dWU/MTUyYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2NvbXBvbmVudHMvRHJvcGRvd25BY3Rpb25Db21wb25lbnQudnVlPzIyNTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQUE7QUFBQTtBQU9JLDJCQUNJLE9BREosRUFFSSxTQUZKLEVBR0ksUUFISixFQUlJLGlCQUpKLEVBSWlEO0FBRTdDLFdBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxXQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxXQUFLLGlCQUFMLEdBQXlCLGlCQUF6QjtBQUNIOztBQUVEO0FBRUksV0FBSyxpQkFBTCxDQUF1QixLQUFLLE9BQTVCO0FBQ0EsV0FBSyxpQkFBTCxDQUF1QixLQUFLLFNBQTVCOztBQUVBLFdBQXNCLHNCQUFLLFFBQUwsQ0FBYyxhQUFkLEVBQXRCLEVBQXNCLGNBQXRCLEVBQXNCLElBQXRCLEVBQXFEO0FBQWhELFlBQUksU0FBUyxTQUFiO0FBQ0QsYUFBSyxpQkFBTCxDQUF1QixpQkFBdkIsQ0FBeUMsU0FBUyxDQUFDLElBQW5ELEVBQXlELFNBQVMsQ0FBQyxTQUFuRTtBQUNIOztBQUVELFdBQUssaUJBQUwsQ0FBdUIsYUFBdkIsQ0FBcUMsZUFBckMsRUFBc0QsSUFBdEQ7QUFDQSxXQUFLLGlCQUFMLENBQXVCLFlBQXZCLENBQW9DLEtBQUssT0FBekM7QUFDQSxXQUFLLGlCQUFMLENBQXVCLFlBQXZCLENBQW9DLEtBQUssU0FBekM7QUFDSCxLQVpEOztBQWNBO0FBQ0ksYUFBUSxLQUFLLE9BQUwsSUFBZ0IsS0FBSyxPQUFMLENBQWEsTUFBYixHQUFzQixDQUF2QyxJQUE4QyxLQUFLLFNBQUwsSUFBa0IsS0FBSyxTQUFMLENBQWUsTUFBZixHQUF3QixD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LFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsaUJBQWlCLDZCQUE2QjtBQUM5QztBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QyxXQUFXO0FBQ1g7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBMEM7QUFDcEUsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidmVuZG9yc35hY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vQWN0aW9uSW50ZXJmYWNlXCI7XG5pbXBvcnQgQWN0aW9uUmVnaXN0cnkgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9BY3Rpb25SZWdpc3RyeVwiO1xuaW1wb3J0IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uTWFuYWdlclxue1xuICAgIHB1YmxpYyBwcmltYXJ5OiBBY3Rpb25JbnRlcmZhY2VbXTtcbiAgICBwdWJsaWMgc2Vjb25kYXJ5OiBBY3Rpb25JbnRlcmZhY2VbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlZ2lzdHJ5OiBBY3Rpb25SZWdpc3RyeTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcmltYXJ5OiBBY3Rpb25JbnRlcmZhY2VbXSxcbiAgICAgICAgc2Vjb25kYXJ5OiBBY3Rpb25JbnRlcmZhY2VbXSxcbiAgICAgICAgcmVnaXN0cnk6IEFjdGlvblJlZ2lzdHJ5LFxuICAgICAgICBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5wcmltYXJ5ID0gcHJpbWFyeTtcbiAgICAgICAgdGhpcy5zZWNvbmRhcnkgPSBzZWNvbmRhcnk7XG4gICAgICAgIHRoaXMucmVnaXN0cnkgPSByZWdpc3RyeTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeSA9IGNvbXBvbmVudFJlZ2lzdHJ5O1xuICAgIH1cblxuICAgIGluaXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQWN0aW9ucyh0aGlzLnByaW1hcnkpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVBY3Rpb25zKHRoaXMuc2Vjb25kYXJ5KTtcblxuICAgICAgICBmb3IgKGxldCBjb21wb25lbnQgb2YgdGhpcy5yZWdpc3RyeS5nZXRDb21wb25lbnRzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudC5jb21wb25lbnQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyU3RvcmUoJ2FjdGlvbk1hbmFnZXInLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckRhdGEodGhpcy5wcmltYXJ5KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckRhdGEodGhpcy5zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgIGhhc0FjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5wcmltYXJ5ICYmIHRoaXMucHJpbWFyeS5sZW5ndGggPiAwKSB8fCAodGhpcy5zZWNvbmRhcnkgJiYgdGhpcy5zZWNvbmRhcnkubGVuZ3RoID4gMClcbiAgICB9XG5cbiAgICBpbml0aWFsaXplQWN0aW9ucyhhY3Rpb25zOiBBY3Rpb25JbnRlcmZhY2VbXSk6IHZvaWRcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gYWN0aW9ucykge1xuICAgICAgICAgICAgYWN0aW9uc1tpXSA9IHRoaXMucmVnaXN0cnkuZ2V0RmFjdG9yeShhY3Rpb25zW2ldLmNvbXBvbmVudCkuY3JlYXRlRnJvbURhdGEoYWN0aW9uc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gXCJAZW5oYXZvL2NvcmVcIjtcbmltcG9ydCBBY3Rpb25GYWN0b3J5SW50ZXJmYWNlIGZyb20gXCIuL0FjdGlvbkZhY3RvcnlJbnRlcmZhY2VcIjtcbmltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL1JlZ2lzdHJ5SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvblJlZ2lzdHJ5IGV4dGVuZHMgUmVnaXN0cnlcbntcbiAgICBnZXRGYWN0b3J5KG5hbWU6IHN0cmluZyk6IEFjdGlvbkZhY3RvcnlJbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4gPEFjdGlvbkZhY3RvcnlJbnRlcmZhY2U+c3VwZXIuZ2V0RmFjdG9yeShuYW1lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzI4NGRkYTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9yZXBvcy9wcml2YXQvamFwYW5lc2UtdGV4dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2MyODRkZGE0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2MyODRkZGE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2MyODRkZGE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyODRkZGE0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyODRkZGE0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2NvbXBvbmVudHMvQWN0aW9uQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWN0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyODRkZGE0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ecm9wZG93bkFjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U0NjliNDYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRHJvcGRvd25BY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ecm9wZG93bkFjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcmVwb3MvcHJpdmF0L2phcGFuZXNlLXRleHRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZTQ2OWI0NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZTQ2OWI0NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZTQ2OWI0NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRHJvcGRvd25BY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlNDY5YjQ2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdlNDY5YjQ2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYWN0aW9uL2NvbXBvbmVudHMvRHJvcGRvd25BY3Rpb25Db21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ecm9wZG93bkFjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJvcGRvd25BY3Rpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ecm9wZG93bkFjdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U0NjliNDYmXCIiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgQWN0aW9uSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vQWN0aW9uSW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIGNyZWF0ZUZyb21EYXRhKGRhdGE6IG9iamVjdCk6IEFjdGlvbkludGVyZmFjZVxuICAgIHtcbiAgICAgICAgbGV0IGFjdGlvbiA9IHRoaXMuY3JlYXRlTmV3KCk7XG4gICAgICAgIGFjdGlvbiA9IF8uZXh0ZW5kKGRhdGEsIGFjdGlvbik7XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgY3JlYXRlTmV3KCk6IEFjdGlvbkludGVyZmFjZTtcbn1cbiIsImltcG9ydCBDbG9zZUFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Nsb3NlQWN0aW9uXCI7XG5pbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlQWN0aW9uRmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlldztcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuXG4gICAgY29uc3RydWN0b3IodmlldzogVmlldywgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KCk6IENsb3NlQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbG9zZUFjdGlvbih0aGlzLnZpZXcsIHRoaXMuZXZlbnREaXNwYXRjaGVyKTtcbiAgICB9XG59IiwiaW1wb3J0IERlbGV0ZUFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0RlbGV0ZUFjdGlvblwiO1xuaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIkBlbmhhdm8vY29yZS9UcmFuc2xhdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGV0ZUFjdGlvbkZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0b3I6IFRyYW5zbGF0b3I7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlciwgdHJhbnNsYXRvcjogVHJhbnNsYXRvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy50cmFuc2xhdG9yID0gdHJhbnNsYXRvcjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogRGVsZXRlQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEZWxldGVBY3Rpb24odGhpcy52aWV3LCB0aGlzLmV2ZW50RGlzcGF0Y2hlciwgdGhpcy50cmFuc2xhdG9yKTtcbiAgICB9XG59IiwiaW1wb3J0IERvd25sb2FkQWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvRG93bmxvYWRBY3Rpb25cIjtcbmltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb3dubG9hZEFjdGlvbkZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBjcmVhdGVOZXcoKTogRG93bmxvYWRBY3Rpb24ge1xuICAgICAgICByZXR1cm4gbmV3IERvd25sb2FkQWN0aW9uKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFjdGlvbkludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL0FjdGlvbkludGVyZmFjZVwiO1xuaW1wb3J0IERyb3Bkb3duQWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvRHJvcGRvd25BY3Rpb25cIjtcbmltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IEFjdGlvbk1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9BY3Rpb25NYW5hZ2VyXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25BY3Rpb25GYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25NYW5hZ2VyOiBBY3Rpb25NYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoYWN0aW9uTWFuYWdlcjogQWN0aW9uTWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFjdGlvbk1hbmFnZXIgPSBhY3Rpb25NYW5hZ2VyO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBEcm9wZG93bkFjdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgRHJvcGRvd25BY3Rpb24oKTtcbiAgICB9XG5cbiAgICBjcmVhdGVGcm9tRGF0YShkYXRhOiBvYmplY3QpOiBBY3Rpb25JbnRlcmZhY2Uge1xuICAgICAgICBsZXQgYWN0aW9uID0gdGhpcy5jcmVhdGVOZXcoKTtcbiAgICAgICAgYWN0aW9uID0gXy5leHRlbmQoZGF0YSwgYWN0aW9uKTtcbiAgICAgICAgdGhpcy5hY3Rpb25NYW5hZ2VyLmluaXRpYWxpemVBY3Rpb25zKGFjdGlvbi5pdGVtcyk7XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxufSIsImltcG9ydCBEdXBsaWNhdGVBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9EdXBsaWNhdGVBY3Rpb25cIjtcbmltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd25BY3Rpb25GYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogRHVwbGljYXRlQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEdXBsaWNhdGVBY3Rpb24odGhpcy52aWV3LCB0aGlzLmV2ZW50RGlzcGF0Y2hlcik7XG4gICAgfVxufSIsImltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IEV2ZW50QWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvRXZlbnRBY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRBY3Rpb25GYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgY3JlYXRlTmV3KCk6IEV2ZW50QWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmVudEFjdGlvbigpO1xuICAgIH1cbn0iLCJpbXBvcnQgRmlsdGVyQWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvRmlsdGVyQWN0aW9uXCI7XG5pbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCBGaWx0ZXJNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2ZpbHRlci9GaWx0ZXJNYW5hZ2VyXCI7XG5pbXBvcnQgU2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvU2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJBY3Rpb25GYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJpdmF0ZSByZWFkb25seSBmaWx0ZXJNYW5hZ2VyOiBGaWx0ZXJNYW5hZ2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeTogU2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeTtcblxuICAgIGNvbnN0cnVjdG9yKGZpbHRlck1hbmFnZXI6IEZpbHRlck1hbmFnZXIsIHNpbmdsZUZpbHRlckFjdGlvbkZhY3Rvcnk6IFNpbmdsZUZpbHRlckFjdGlvbkZhY3RvcnkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5maWx0ZXJNYW5hZ2VyID0gZmlsdGVyTWFuYWdlcjtcbiAgICAgICAgdGhpcy5zaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5ID0gc2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeTtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogRmlsdGVyQWN0aW9uIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGaWx0ZXJBY3Rpb24odGhpcy5maWx0ZXJNYW5hZ2VyLCB0aGlzLnNpbmdsZUZpbHRlckFjdGlvbkZhY3RvcnkpO1xuICAgIH1cbn0iLCJpbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCBNb2RhbEFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL01vZGFsQWN0aW9uXCI7XG5pbXBvcnQgTW9kYWxNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9Nb2RhbE1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxBY3Rpb25GYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJpdmF0ZSBtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kYWxNYW5hZ2VyID0gbW9kYWxNYW5hZ2VyO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBNb2RhbEFjdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgTW9kYWxBY3Rpb24odGhpcy5tb2RhbE1hbmFnZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCBPcGVuQWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvT3BlbkFjdGlvblwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuQWN0aW9uRmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlldztcblxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogT3BlbkFjdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgT3BlbkFjdGlvbih0aGlzLnZpZXcpXG4gICAgfVxufSIsImltcG9ydCBQcmV2aWV3QWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvUHJldmlld0FjdGlvblwiO1xuaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmV2aWV3QWN0aW9uRmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlldztcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuXG4gICAgY29uc3RydWN0b3IodmlldzogVmlldywgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlRnJvbURhdGEoZGF0YTogb2JqZWN0KTogUHJldmlld0FjdGlvblxuICAgIHtcbiAgICAgICAgbGV0IGFjdGlvbiA9IDxQcmV2aWV3QWN0aW9uPnN1cGVyLmNyZWF0ZUZyb21EYXRhKGRhdGEpO1xuICAgICAgICBhY3Rpb24ubG9hZExpc3RlbmVyKCk7XG4gICAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KCk6IFByZXZpZXdBY3Rpb24ge1xuICAgICAgICByZXR1cm4gbmV3IFByZXZpZXdBY3Rpb24odGhpcy52aWV3LCB0aGlzLmV2ZW50RGlzcGF0Y2hlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNhdmVBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9TYXZlQWN0aW9uXCI7XG5pbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmVBY3Rpb25GYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogU2F2ZUFjdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgU2F2ZUFjdGlvbih0aGlzLnZpZXcsIHRoaXMuZXZlbnREaXNwYXRjaGVyKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xlRmlsdGVyQWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvU2luZ2xlRmlsdGVyQWN0aW9uXCI7XG5pbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vZmFjdG9yeS9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCBGaWx0ZXJNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2ZpbHRlci9GaWx0ZXJNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZUZpbHRlckFjdGlvbkZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpbHRlck1hbmFnZXI6IEZpbHRlck1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXJNYW5hZ2VyOiBGaWx0ZXJNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyTWFuYWdlciA9IGZpbHRlck1hbmFnZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KCk6IFNpbmdsZUZpbHRlckFjdGlvbiB7XG4gICAgICAgIHJldHVybiBuZXcgU2luZ2xlRmlsdGVyQWN0aW9uKHRoaXMuZmlsdGVyTWFuYWdlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFjdGlvbkludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL0FjdGlvbkludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEFjdGlvbiBpbXBsZW1lbnRzIEFjdGlvbkludGVyZmFjZVxue1xuICAgIGNvbXBvbmVudDogc3RyaW5nO1xuXG4gICAgYWJzdHJhY3QgZXhlY3V0ZSgpOiB2b2lkO1xufSIsImltcG9ydCBBYnN0cmFjdEFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Fic3RyYWN0QWN0aW9uXCI7XG5pbXBvcnQgQ2xvc2VFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DbG9zZUV2ZW50XCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9zZUFjdGlvbiBleHRlbmRzIEFic3RyYWN0QWN0aW9uXG57XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICB9XG5cbiAgICBleGVjdXRlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBpZCA9IHRoaXMudmlldy5nZXRJZCgpO1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ2xvc2VFdmVudChpZCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgQWJzdHJhY3RBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9BYnN0cmFjdEFjdGlvblwiO1xuaW1wb3J0IENvbmZpcm0gZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvQ29uZmlybVwiO1xuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgTG9hZGluZ0V2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWRpbmdFdmVudFwiO1xuaW1wb3J0ICogYXMgVVJJIGZyb20gJ3VyaWpzJztcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiQGVuaGF2by9jb3JlL1RyYW5zbGF0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVsZXRlQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RBY3Rpb25cbntcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XG4gICAgcHVibGljIHRva2VuOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0b3I6IFRyYW5zbGF0b3I7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlciwgdHJhbnNsYXRvcjogVHJhbnNsYXRvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy50cmFuc2xhdG9yID0gdHJhbnNsYXRvcjtcbiAgICB9XG5cbiAgICBleGVjdXRlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy5jb25maXJtKG5ldyBDb25maXJtKFxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdG9yLnRyYW5zKCdlbmhhdm9fYXBwLmRlbGV0ZS5tZXNzYWdlLnF1ZXN0aW9uJyksXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHVyaSA9IG5ldyBVUkkodGhpcy51cmwpO1xuICAgICAgICAgICAgICAgIHVyaSA9IHVyaS5hZGRRdWVyeSgndmlld19pZCcsIHRoaXMudmlldy5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgTG9hZGluZ0V2ZW50KHRoaXMudmlldy5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XG4gICAgICAgICAgICAgICAgJCgnPGZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIicrdXJpKydcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfY3NyZl90b2tlblwiIHZhbHVlPVwiJyt0aGlzLnRva2VuKydcIi8+PC9mb3JtPicpLmFwcGVuZFRvKCdib2R5Jykuc3VibWl0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdG9yLnRyYW5zKCdlbmhhdm9fYXBwLmRlbGV0ZS5sYWJlbC5jYW5jZWwnKSxcbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRvci50cmFucygnZW5oYXZvX2FwcC5kZWxldGUubGFiZWwuZGVsZXRlJyksXG4gICAgICAgICkpO1xuICAgIH1cbn0iLCJpbXBvcnQgQWJzdHJhY3RBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9BYnN0cmFjdEFjdGlvblwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG93bmxvYWRBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdEFjdGlvblxue1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcbiAgICBwdWJsaWMgYWpheDogYm9vbGVhbjtcblxuICAgIGV4ZWN1dGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgaWYodGhpcy5hamF4KSB7XG4gICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLnVybCwgJ19zZWxmJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBheGlvcy5wb3N0KHRoaXMudXJsLCAkKCdmb3JtJykuc2VyaWFsaXplKCksIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0sXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcidcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZmlsZW5hbWUgPSB0aGlzLmdldEZpbGVuYW1lKHJlc3BvbnNlLmhlYWRlcnNbJ2NvbnRlbnQtZGlzcG9zaXRpb24nXSk7XG4gICAgICAgICAgICBsZXQgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzWydjb250ZW50LXR5cGUnXTtcblxuICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSwge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRlbnRUeXBlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBsaW5rLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICAgIGxpbmsuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgICAgICAgIGxpbmsuY2xpY2soKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgLy9oYW5kbGUgZXJyb3JcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRGaWxlbmFtZShjb250ZW50RGlzcG9zaXRpb246IHN0cmluZyk6IHN0cmluZ3xudWxsXG4gICAge1xuICAgICAgICBsZXQgZmlsZW5hbWUgPSBudWxsO1xuXG4gICAgICAgIGxldCBmaWxlbmFtZVJlZ2V4ID0gL2ZpbGVuYW1lW147PVxcbl0qPSgoWydcIl0pLio/XFwyfFteO1xcbl0qKS87XG4gICAgICAgIGxldCBtYXRjaGVzID0gZmlsZW5hbWVSZWdleC5leGVjKGNvbnRlbnREaXNwb3NpdGlvbik7XG4gICAgICAgIGlmIChtYXRjaGVzICE9IG51bGwgJiYgbWF0Y2hlc1sxXSkge1xuICAgICAgICAgICAgZmlsZW5hbWUgPSBtYXRjaGVzWzFdLnJlcGxhY2UoL1snXCJdL2csICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsZW5hbWU7XG4gICAgfVxufSIsImltcG9ydCBBY3Rpb25JbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9BY3Rpb25JbnRlcmZhY2VcIjtcbmltcG9ydCBBYnN0cmFjdEFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Fic3RyYWN0QWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RBY3Rpb25cbntcbiAgICBpdGVtczogQWN0aW9uSW50ZXJmYWNlW107XG4gICAgY2xvc2VBZnRlcjogYm9vbGVhbjtcblxuICAgIGV4ZWN1dGUoKTogdm9pZFxuICAgIHtcbiAgICB9XG59IiwiaW1wb3J0IEFic3RyYWN0QWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvQWJzdHJhY3RBY3Rpb25cIjtcbmltcG9ydCBDb25maXJtIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L0NvbmZpcm1cIjtcbmltcG9ydCAqIGFzIFVSSSBmcm9tIFwidXJpanNcIjtcbmltcG9ydCBMb2FkaW5nRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvTG9hZGluZ0V2ZW50XCI7XG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIER1cGxpY2F0ZUFjdGlvbiBleHRlbmRzIEFic3RyYWN0QWN0aW9uXG57XG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuICAgIHB1YmxpYyB0b2tlbjogc3RyaW5nO1xuICAgIHB1YmxpYyBjb25maXJtTWVzc2FnZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjb25maXJtTGFiZWxPazogc3RyaW5nO1xuICAgIHB1YmxpYyBjb25maXJtTGFiZWxDYW5jZWw6IHN0cmluZztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlldztcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuXG4gICAgY29uc3RydWN0b3IodmlldzogVmlldywgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpOiB2b2lkXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcuY29uZmlybShuZXcgQ29uZmlybShcbiAgICAgICAgICAgIHRoaXMuY29uZmlybU1lc3NhZ2UsXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHVyaSA9IG5ldyBVUkkodGhpcy51cmwpO1xuICAgICAgICAgICAgICAgIHVyaSA9IHVyaS5hZGRRdWVyeSgndmlld19pZCcsIHRoaXMudmlldy5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBuZXcgTG9hZGluZ0V2ZW50KHRoaXMudmlldy5nZXRJZCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChldmVudCk7XG4gICAgICAgICAgICAgICAgJCgnPGZvcm0gbWV0aG9kPVwicG9zdFwiIGFjdGlvbj1cIicrdXJpKydcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfY3NyZl90b2tlblwiIHZhbHVlPVwiJyt0aGlzLnRva2VuKydcIi8+PC9mb3JtPicpLmFwcGVuZFRvKCdib2R5Jykuc3VibWl0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcy5jb25maXJtTGFiZWxDYW5jZWwsXG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1MYWJlbE9rLFxuICAgICAgICApKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgQWJzdHJhY3RBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9BYnN0cmFjdEFjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEFjdGlvbiBleHRlbmRzIEFic3RyYWN0QWN0aW9uXG57XG4gICAgcHVibGljIGV2ZW50OiBzdHJpbmc7XG5cbiAgICBleGVjdXRlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIodGhpcy5ldmVudCk7XG4gICAgfVxufSIsImltcG9ydCBGaWx0ZXJNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2ZpbHRlci9GaWx0ZXJNYW5hZ2VyXCI7XG5pbXBvcnQgRHJvcGRvd25BY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9Ecm9wZG93bkFjdGlvblwiO1xuaW1wb3J0IFNpbmdsZUZpbHRlckFjdGlvbkZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9mYWN0b3J5L1NpbmdsZUZpbHRlckFjdGlvbkZhY3RvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVyQWN0aW9uIGV4dGVuZHMgRHJvcGRvd25BY3Rpb25cbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpbHRlck1hbmFnZXI6IEZpbHRlck1hbmFnZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5OiBTaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5O1xuXG4gICAgY29uc3RydWN0b3IoZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlciwgc2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeTogU2luZ2xlRmlsdGVyQWN0aW9uRmFjdG9yeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmZpbHRlck1hbmFnZXIgPSBmaWx0ZXJNYW5hZ2VyO1xuICAgICAgICB0aGlzLnNpbmdsZUZpbHRlckFjdGlvbkZhY3RvcnkgPSBzaW5nbGVGaWx0ZXJBY3Rpb25GYWN0b3J5O1xuICAgICAgICB0aGlzLmNsb3NlQWZ0ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5maWx0ZXJNYW5hZ2VyLmZpbHRlcnMpIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSB0aGlzLnNpbmdsZUZpbHRlckFjdGlvbkZhY3RvcnkuY3JlYXRlTmV3KCk7XG4gICAgICAgICAgICBhY3Rpb24uZmlsdGVyS2V5ID0gdGhpcy5maWx0ZXJNYW5hZ2VyLmZpbHRlcnNbaV0ua2V5O1xuICAgICAgICAgICAgYWN0aW9uLmxhYmVsID0gdGhpcy5maWx0ZXJNYW5hZ2VyLmZpbHRlcnNbaV0ubGFiZWw7XG4gICAgICAgICAgICBhY3Rpb24uc2V0QWN0aXZlKHRoaXMuZmlsdGVyTWFuYWdlci5maWx0ZXJzW2ldLmFjdGl2ZSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgQWJzdHJhY3RBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9BYnN0cmFjdEFjdGlvblwiO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsQWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RBY3Rpb25cbntcbiAgICBwdWJsaWMgbW9kYWw6IGFueTtcblxuICAgIHByaXZhdGUgbW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vZGFsTWFuYWdlciA9IG1vZGFsTWFuYWdlcjtcbiAgICB9XG5cbiAgICBleGVjdXRlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMubW9kYWxNYW5hZ2VyLnB1c2godGhpcy5tb2RhbCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFic3RyYWN0QWN0aW9uIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vbW9kZWwvQWJzdHJhY3RBY3Rpb25cIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbkFjdGlvbiBleHRlbmRzIEFic3RyYWN0QWN0aW9uXG57XG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuICAgIHB1YmxpYyB0YXJnZXQ6IHN0cmluZztcbiAgICBwdWJsaWMga2V5OiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXc7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpOiB2b2lkXG4gICAge1xuICAgICAgICBpZih0aGlzLnRhcmdldCA9PSAnX3ZpZXcnKSB7XG4gICAgICAgICAgICBpZih0aGlzLmtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5vcGVuKHRoaXMudXJsLCB0aGlzLmtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5vcGVuKHRoaXMudXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cub3Blbih0aGlzLnVybCwgdGhpcy50YXJnZXQpO1xuICAgIH1cbn0iLCJpbXBvcnQgQWJzdHJhY3RBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9BYnN0cmFjdEFjdGlvblwiO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IERhdGFFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9EYXRhRXZlbnRcIjtcbmltcG9ydCBFeGlzdHNFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9FeGlzdHNFdmVudFwiO1xuaW1wb3J0IExvYWRlZEV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWRlZEV2ZW50XCI7XG5pbXBvcnQgRXhpc3RzRGF0YSBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FeGlzdHNEYXRhXCI7XG5pbXBvcnQgTG9hZERhdGFFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9Mb2FkRGF0YUV2ZW50XCI7XG5pbXBvcnQgRGF0YVN0b3JhZ2VFbnRyeSBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9EYXRhU3RvcmFnZUVudHJ5XCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmV2aWV3QWN0aW9uIGV4dGVuZHMgQWJzdHJhY3RBY3Rpb25cbntcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBsaXN0ZW5lckxvYWRlZCA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICB9XG5cbiAgICBsb2FkTGlzdGVuZXIoKVxuICAgIHtcbiAgICAgICAgaWYoUHJldmlld0FjdGlvbi5saXN0ZW5lckxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgUHJldmlld0FjdGlvbi5saXN0ZW5lckxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy52aWV3LmxvYWRWYWx1ZSgncHJldmlldy12aWV3JywgKGlkKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlld0lkID0gaWQgPyBwYXJzZUludChpZCkgOiBudWxsO1xuICAgICAgICAgICAgaWYodmlld0lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kRGF0YSh2aWV3SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5vbignbG9hZGVkJywgKGV2ZW50OiBMb2FkZWRFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmxvYWRWYWx1ZSgncHJldmlldy12aWV3JywgKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHZpZXdJZCA9IGlkID8gcGFyc2VJbnQoaWQpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBpZihldmVudC5pZCA9PSB2aWV3SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kRGF0YSh2aWV3SWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleGVjdXRlKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMub3Blbih0aGlzLnVybCwgJ3ByZXZpZXctdmlldycpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VuZERhdGEoaWQgOm51bWJlcilcbiAgICB7XG4gICAgICAgIGxldCBkYXRhID0gJCgnZm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBEYXRhRXZlbnQoaWQsIGRhdGEpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW4odXJsOiBzdHJpbmcsIGtleTogc3RyaW5nID0gbnVsbCwgbGFiZWw6IHN0cmluZyA9IG51bGwpXG4gICAge1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgTG9hZERhdGFFdmVudChrZXkpKS50aGVuKChkYXRhOiBEYXRhU3RvcmFnZUVudHJ5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlld0lkOiBudW1iZXIgPSBudWxsO1xuICAgICAgICAgICAgaWYoZGF0YSkge1xuICAgICAgICAgICAgICAgIHZpZXdJZCA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih2aWV3SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBFeGlzdHNFdmVudCh2aWV3SWQpKS50aGVuKChkYXRhOiBFeGlzdHNEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmREYXRhKHZpZXdJZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcub3BlblZpZXcodXJsLCBrZXksIGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcub3BlblZpZXcodXJsLCBrZXksIGxhYmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgQWJzdHJhY3RBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9BYnN0cmFjdEFjdGlvblwiO1xuaW1wb3J0IExvYWRpbmdFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9Mb2FkaW5nRXZlbnRcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmVBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdEFjdGlvblxue1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlldztcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuXG4gICAgY29uc3RydWN0b3IodmlldzogVmlldywgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgpOiB2b2lkXG4gICAge1xuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgTG9hZGluZ0V2ZW50KHRoaXMudmlldy5nZXRJZCgpKTtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2goZXZlbnQpO1xuXG4gICAgICAgIGxldCAkZm9ybSA9ICQoJ2Zvcm0nKTtcblxuICAgICAgICBpZiAodGhpcy51cmwpIHtcbiAgICAgICAgICAgICRmb3JtLmF0dHIoJ2FjdGlvbicsIHRoaXMudXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRmb3JtLnN1Ym1pdCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBGaWx0ZXJNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2ZpbHRlci9GaWx0ZXJNYW5hZ2VyXCI7XG5pbXBvcnQgQWJzdHJhY3RBY3Rpb24gZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9tb2RlbC9BYnN0cmFjdEFjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGVGaWx0ZXJBY3Rpb24gZXh0ZW5kcyBBYnN0cmFjdEFjdGlvblxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyTWFuYWdlcjogRmlsdGVyTWFuYWdlcjtcbiAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgZmlsdGVyS2V5OiBzdHJpbmc7XG4gICAgaWNvbjogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXJNYW5hZ2VyOiBGaWx0ZXJNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZmlsdGVyTWFuYWdlciA9IGZpbHRlck1hbmFnZXI7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gXCJzaW5nbGUtZmlsdGVyLWFjdGlvblwiO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgICAgICB0aGlzLmZpbHRlck1hbmFnZXIuc2V0RmlsdGVyQWN0aXZlKHRoaXMuZmlsdGVyS2V5LCB0aGlzLmFjdGl2ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pXG4gICAge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVJY29uKClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gJ3JlbW92ZV9jaXJjbGVfb3V0bGluZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSAnYWRkX2NpcmNsZV9vdXRsaW5lJztcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiLi9SZWdpc3RyeUludGVyZmFjZVwiO1xuaW1wb3J0IFJlZ2lzdHJ5RW50cnkgZnJvbSBcIkBlbmhhdm8vY29yZS9SZWdpc3RyeUVudHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdHJ5IGltcGxlbWVudHMgUmVnaXN0cnlJbnRlcmZhY2VcbntcbiAgICBwcml2YXRlIGVudHJpZXM6IFJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBnZXQobmFtZTogc3RyaW5nKTogUmVnaXN0cnlFbnRyeVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93ICdFbnRyeSB3aXRoIG5hbWUgXCInK25hbWUrJ1wiIGRvZXMgbm90IGV4aXN0IGluIHJlZ2lzdHJ5JztcbiAgICB9XG5cbiAgICBnZXRGYWN0b3J5KG5hbWU6IHN0cmluZyk6IG9iamVjdFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpLmdldEZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnQobmFtZTogc3RyaW5nKTogb2JqZWN0XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkuZ2V0Q29tcG9uZW50KCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoZW50cnk6IFJlZ2lzdHJ5RW50cnkpOiBSZWdpc3RyeUludGVyZmFjZVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5oYXMoZW50cnkuZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVFbnRyeShlbnRyeS5nZXROYW1lKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVFbnRyeShuYW1lOiBzdHJpbmcpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgaWYodGhpcy5lbnRyaWVzW2ldLmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNwbGljZShwYXJzZUludChpKSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudHMoKTogQ29tcG9uZW50W11cbiAgICB7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gW107XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2gobmV3IENvbXBvbmVudChlbnRyeS5nZXROYW1lKCksIGVudHJ5LmdldENvbXBvbmVudCgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50XG57XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgY29tcG9uZW50OiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWdpc3RyeSBmcm9tICcuL1JlZ2lzdHJ5JztcbmltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tICcuL1JlZ2lzdHJ5SW50ZXJmYWNlJztcbmltcG9ydCBGYWN0b3J5SW50ZXJmYWNlIGZyb20gJy4vRmFjdG9yeUludGVyZmFjZSc7XG5pbXBvcnQgQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UgZnJvbSAnLi9Db21wb25lbnRBd2FyZUludGVyZmFjZSc7XG5cbmV4cG9ydCB7XG4gICAgUmVnaXN0cnksXG4gICAgUmVnaXN0cnlJbnRlcmZhY2UsXG4gICAgRmFjdG9yeUludGVyZmFjZSxcbiAgICBDb21wb25lbnRBd2FyZUludGVyZmFjZVxufTtcbiIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGlkOiBudW1iZXI7XG4gICAgc2F2ZVN0YXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHNhdmVTdGF0ZTogYm9vbGVhbiA9IHRydWUpXG4gICAge1xuICAgICAgICBzdXBlcignY2xvc2UnKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnNhdmVTdGF0ZSA9IHNhdmVTdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBpZDogbnVtYmVyO1xuICAgIGRhdGE6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIGRhdGE6IGFueSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCdkYXRhJyk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXVpZHY0IGZyb20gXCJ1dWlkL3Y0XCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJ0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRcbntcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3JpZ2luOiBhbnk7XG4gICAgdGFyZ2V0OiBhbnk7XG4gICAgaGlzdG9yeTogc3RyaW5nW10gPSBbXTtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgdHRsOiBudW1iZXI7XG4gICAgZGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZHY0KCk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZShkYXRhOiBvYmplY3QgPSB7fSlcbiAgICB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVzb2x2ZUV2ZW50KHRoaXMudXVpZCwgZGF0YSkpO1xuICAgIH1cblxuICAgIHJlamVjdChkYXRhOiBvYmplY3QgPSB7fSlcbiAgICB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVqZWN0RXZlbnQodGhpcy51dWlkLCBkYXRhKSk7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplKCk6IHN0cmluZ1xuICAgIHtcbiAgICAgICAgbGV0IGRpc3BhdGNoZXIgPSB0aGlzLmRpc3BhdGNoZXI7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IG51bGw7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVqZWN0RXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGRhdGE6IG9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHV1aWQ6IHN0cmluZywgZGF0YTogb2JqZWN0KVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ3JlamVjdCcpO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc29sdmVFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgZGF0YTogb2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IodXVpZDogc3RyaW5nLCBkYXRhOiBvYmplY3QpXG4gICAge1xuICAgICAgICBzdXBlcigncmVzb2x2ZScpO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cbiIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4aXN0c0V2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKCdleGlzdHMnKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbn0iLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkRGF0YUV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBwdWJsaWMga2V5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZylcbiAgICB7XG4gICAgICAgIHN1cGVyKCdsb2FkLWRhdGEnKTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxufSIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmdFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgaWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpXG4gICAge1xuICAgICAgICBzdXBlcignbG9hZGluZycpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxufSIsImltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybVxue1xuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gICAgcHVibGljIGRlbnlUZXh0OiBzdHJpbmc7XG4gICAgcHVibGljIGFjY2VwdFRleHQ6IHN0cmluZztcbiAgICBwdWJsaWMgb25EZW55OiAoKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBvbkFjY2VwdDogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgdmlldzogVmlldztcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgb25BY2NlcHQ/OiAoKSA9PiB2b2lkLCBvbkRlbnk/OiAoKSA9PiB2b2lkLCBkZW55VGV4dDogc3RyaW5nID0gJ2RlbnknLCBhY2NlcHRUZXh0OiBzdHJpbmcgPSAnYWNjZXB0JylcbiAgICB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMub25BY2NlcHQgPSBvbkFjY2VwdDtcbiAgICAgICAgdGhpcy5vbkRlbnkgPSBvbkRlbnk7XG4gICAgICAgIHRoaXMuZGVueVRleHQgPSBkZW55VGV4dDtcbiAgICAgICAgdGhpcy5hY2NlcHRUZXh0ID0gYWNjZXB0VGV4dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Vmlldyh2aWV3OiBWaWV3KVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVueSgpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcuY29uZmlybShudWxsKTtcbiAgICAgICAgaWYodGhpcy5vbkRlbnkpIHtcbiAgICAgICAgICAgIHRoaXMub25EZW55KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0KClcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy5jb25maXJtKG51bGwpO1xuICAgICAgICBpZih0aGlzLm9uQWNjZXB0KSB7XG4gICAgICAgICAgICB0aGlzLm9uQWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IEZhY3RvcnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9GYWN0b3J5SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdHJ5RW50cnlcbntcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIGNvbXBvbmVudDogb2JqZWN0O1xuICAgIHByaXZhdGUgZmFjdG9yeTogRmFjdG9yeUludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBvYmplY3QsIGZhY3Rvcnk6IEZhY3RvcnlJbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29tcG9uZW50KCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmFjdG9yeSgpOiBGYWN0b3J5SW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeTtcbiAgICB9XG59XG4iLCJcblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCBBY3Rpb25JbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9BY3Rpb25JbnRlcmZhY2VcIjtcblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgVnVlIHtcbiAgICBuYW1lOiAnYWN0aW9uLWNvbXBvbmVudCc7XG4gICAgQFByb3AoKVxuICAgIGRhdGE6IEFjdGlvbkludGVyZmFjZTtcbiAgICBAUHJvcCgpXG4gICAgY2xpY2tTdG9wOiBib29sZWFuO1xuXG4gICAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmljb24pID8gJ2ljb24tJyArIHRoaXMuZGF0YS5pY29uIDogJyc7XG4gICAgfVxuXG4gICAgZXhlY3V0ZSgkZXZlbnQpIHtcbiAgICAgICAgaWYodGhpcy5jbGlja1N0b3ApIHtcbiAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRhdGEuZXhlY3V0ZSgpXG4gICAgfVxufVxuIiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCBEcm9wZG93bkFjdGlvbiBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL21vZGVsL0Ryb3Bkb3duQWN0aW9uXCI7XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyb3Bkb3duQWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgVnVlIHtcbiAgICBuYW1lOiAnZHJvcGRvd24tYWN0aW9uJztcbiAgICBAUHJvcCgpXG4gICAgZGF0YTogRHJvcGRvd25BY3Rpb247XG5cbiAgICBvcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBnZXQgaWNvbigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuaWNvbikgPyAnaWNvbi0nICsgdGhpcy5kYXRhLmljb24gOiAnJztcbiAgICB9XG5cbiAgICB0b2dnbGVPcGVuKClcbiAgICB7XG4gICAgICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XG4gICAgfVxuXG4gICAgaXRlbUNsaWNrKClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuY2xvc2VBZnRlcikge1xuICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbG9zZSB3aGVuIGNsaWNrZWQgb3V0c2lkZVxuICAgIGNsb3NlKGU6IEV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy4kZWwuY29udGFpbnMoPE5vZGU+ZS50YXJnZXQpKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3VudGVkKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xvc2UpXG4gICAgfVxuICAgIGJlZm9yZURlc3Ryb3koKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLmNsb3NlKVxuICAgIH1cbn1cbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXVxuICBdKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJhY3Rpb25cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF92bS5leGVjdXRlKCRldmVudClcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGlvbi1pY29uXCIgfSwgW1xuICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgIGNsYXNzOiBbXCJpY29uXCIsIF92bS5pY29uXSxcbiAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLmxhYmVsKSldKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGlvblwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlT3BlbigpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWljb25cIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBbXCJpY29uXCIsIF92bS5pY29uXSxcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS5sYWJlbCkpXSksXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5vcGVuXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1hY3Rpb24tbGlzdFwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLml0ZW1DbGljaygpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9sKF92bS5kYXRhLml0ZW1zLCBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX2MoYWN0aW9uLmNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGF0YTogYWN0aW9uLCBcImRhdGEtYWN0aW9uXCI6IGFjdGlvbi5rZXkgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==