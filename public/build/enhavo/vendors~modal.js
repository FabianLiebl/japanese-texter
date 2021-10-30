(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~modal"],{

/***/ "./node_modules/@enhavo/app/form/FormDispatcher.ts":
/*!*********************************************************!*\
  !*** ./node_modules/@enhavo/app/form/FormDispatcher.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/form/event/FormElementEvent */ "./node_modules/@enhavo/app/form/event/FormElementEvent.ts"), __webpack_require__(/*! @enhavo/app/form/event/FormConvertEvent */ "./node_modules/@enhavo/app/form/event/FormConvertEvent.ts"), __webpack_require__(/*! @enhavo/app/form/event/FormInsertEvent */ "./node_modules/@enhavo/app/form/event/FormInsertEvent.ts"), __webpack_require__(/*! @enhavo/app/form/event/FormReleaseEvent */ "./node_modules/@enhavo/app/form/event/FormReleaseEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, $, FormElementEvent_1, FormConvertEvent_1, FormInsertEvent_1, FormReleaseEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var FormDispatcher =
  /** @class */
  function () {
    function FormDispatcher() {}

    FormDispatcher.dispatchMove = function (element) {
      var event = new FormElementEvent_1["default"](element);
      $('body').trigger('formMove', event);
      return event;
    };

    FormDispatcher.dispatchDrop = function (element) {
      var event = new FormElementEvent_1["default"](element);
      $('body').trigger('formDrop', event);
      return event;
    };

    FormDispatcher.dispatchConvert = function (element) {
      var event = new FormConvertEvent_1["default"](element);
      $('body').trigger('formConvert', event);
      return event;
    };

    FormDispatcher.dispatchInsert = function (element) {
      var event = new FormInsertEvent_1["default"](element);
      $('body').trigger('formInsert', event);
      return event;
    };

    FormDispatcher.dispatchRelease = function (element) {
      var event = new FormReleaseEvent_1["default"](element);
      $('body').trigger('formRelease', event);
      return event;
    };

    FormDispatcher.dispatchRemove = function (element) {
      var event = new FormElementEvent_1["default"](element);
      $('body').trigger('formRemove', event);
      return event;
    };

    return FormDispatcher;
  }();

  exports["default"] = FormDispatcher;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/form/FormInitializer.ts":
/*!**********************************************************!*\
  !*** ./node_modules/@enhavo/app/form/FormInitializer.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/form/FormDispatcher */ "./node_modules/@enhavo/app/form/FormDispatcher.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, $, FormDispatcher_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var FormInitializer =
  /** @class */
  function () {
    function FormInitializer() {
      this.converted = false;
      this.released = false;
      this.inserted = false;
    }

    FormInitializer.prototype.setHtml = function (html) {
      this.html = html.trim();
    };

    FormInitializer.prototype.setElement = function (element) {
      this.element = element;
    };

    FormInitializer.prototype.getElement = function () {
      return this.element;
    };

    FormInitializer.prototype.insertBefore = function (element) {
      this.insert();
      $(this.element).insertBefore(element);
      this.release();
    };

    FormInitializer.prototype.insertAfter = function (element) {
      this.insert();
      $(this.element).insertAfter(element);
      this.release();
    };

    FormInitializer.prototype.append = function (element) {
      this.insert();
      $(element).append(this.element);
      this.release();
    };

    FormInitializer.prototype.convert = function () {
      if (!this.converted) {
        this.converted = true;

        if (this.html) {
          this.html = FormDispatcher_1["default"].dispatchConvert(this.html).getHtml();
          this.element = $($.parseHTML(this.html)).get(0);
        }
      }
    };

    FormInitializer.prototype.release = function () {
      if (!this.inserted) {
        this.insert();
      }

      if (!this.released) {
        this.released = true;
        this.element = FormDispatcher_1["default"].dispatchRelease(this.element).getElement();
      }
    };

    FormInitializer.prototype.init = function () {
      this.release();
    };

    FormInitializer.prototype.insert = function () {
      if (!this.inserted) {
        this.inserted = true;

        if (!this.converted) {
          this.convert();
        }

        this.element = FormDispatcher_1["default"].dispatchInsert(this.element).getElement();
      }
    };

    return FormInitializer;
  }();

  exports["default"] = FormInitializer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/form/event/FormConvertEvent.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/form/event/FormConvertEvent.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var FormConvertEvent =
  /** @class */
  function () {
    function FormConvertEvent(html) {
      this.html = html;
    }

    FormConvertEvent.prototype.setHtml = function (html) {
      this.html = html;
    };

    FormConvertEvent.prototype.getHtml = function () {
      return this.html;
    };

    return FormConvertEvent;
  }();

  exports["default"] = FormConvertEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/form/event/FormElementEvent.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/form/event/FormElementEvent.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var FormElementEvent =
  /** @class */
  function () {
    function FormElementEvent(element) {
      this.element = element;
    }

    FormElementEvent.prototype.setElement = function (element) {
      this.element = element;
    };

    FormElementEvent.prototype.getElement = function () {
      return this.element;
    };

    return FormElementEvent;
  }();

  exports["default"] = FormElementEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/form/event/FormInsertEvent.ts":
/*!****************************************************************!*\
  !*** ./node_modules/@enhavo/app/form/event/FormInsertEvent.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/form/event/FormElementEvent */ "./node_modules/@enhavo/app/form/event/FormElementEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, FormElementEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var FormInsertEvent =
  /** @class */
  function (_super) {
    __extends(FormInsertEvent, _super);

    function FormInsertEvent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    return FormInsertEvent;
  }(FormElementEvent_1["default"]);

  exports["default"] = FormInsertEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/form/event/FormReleaseEvent.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/form/event/FormReleaseEvent.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/form/event/FormElementEvent */ "./node_modules/@enhavo/app/form/event/FormElementEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, FormElementEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var FormReleaseEvent =
  /** @class */
  function (_super) {
    __extends(FormReleaseEvent, _super);

    function FormReleaseEvent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    return FormReleaseEvent;
  }(FormElementEvent_1["default"]);

  exports["default"] = FormReleaseEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/ModalManager.ts":
/*!********************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/ModalManager.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ModalManager =
  /** @class */
  function () {
    function ModalManager(modals, modalRegistry, componentRegistry) {
      this.modals = modals;
      this.registry = modalRegistry;
      this.componentRegistry = componentRegistry;
    }

    ModalManager.prototype.init = function () {
      for (var _i = 0, _a = this.registry.getComponents(); _i < _a.length; _i++) {
        var component = _a[_i];
        this.componentRegistry.registerComponent(component.name, component.component);
      }

      this.componentRegistry.registerStore('modalManager', this);
      this.componentRegistry.registerData(this.modals);
    };

    ModalManager.prototype.push = function (data) {
      var factory = this.registry.getFactory(data.component);
      var modal = factory.createFromData(data);
      modal.init();
      this.modals.push(modal);
    };

    ModalManager.prototype.pop = function () {
      this.modals.pop();
    };

    return ModalManager;
  }();

  exports["default"] = ModalManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/ModalRegistry.ts":
/*!*********************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/ModalRegistry.ts ***!
  \*********************************************************/
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

  var ModalRegistry =
  /** @class */
  function (_super) {
    __extends(ModalRegistry, _super);

    function ModalRegistry() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    ModalRegistry.prototype.getFactory = function (name) {
      return _super.prototype.getFactory.call(this, name);
    };

    return ModalRegistry;
  }(core_1.Registry);

  exports["default"] = ModalRegistry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue":
/*!******************************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AjaxFormModalComponent_vue_vue_type_template_id_540a3f72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AjaxFormModalComponent.vue?vue&type=template&id=540a3f72& */ "./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=template&id=540a3f72&");
/* harmony import */ var _AjaxFormModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AjaxFormModalComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AjaxFormModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AjaxFormModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AjaxFormModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AjaxFormModalComponent_vue_vue_type_template_id_540a3f72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AjaxFormModalComponent_vue_vue_type_template_id_540a3f72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_AjaxFormModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./AjaxFormModalComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_AjaxFormModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_AjaxFormModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_AjaxFormModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_AjaxFormModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_AjaxFormModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=template&id=540a3f72&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=template&id=540a3f72& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AjaxFormModalComponent_vue_vue_type_template_id_540a3f72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./AjaxFormModalComponent.vue?vue&type=template&id=540a3f72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=template&id=540a3f72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AjaxFormModalComponent_vue_vue_type_template_id_540a3f72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AjaxFormModalComponent_vue_vue_type_template_id_540a3f72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue":
/*!****************************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IframeModalComponent_vue_vue_type_template_id_74058edc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IframeModalComponent.vue?vue&type=template&id=74058edc& */ "./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=template&id=74058edc&");
/* harmony import */ var _IframeModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IframeModalComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IframeModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _IframeModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IframeModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IframeModalComponent_vue_vue_type_template_id_74058edc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IframeModalComponent_vue_vue_type_template_id_74058edc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/modal/components/IframeModalComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IframeModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./IframeModalComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IframeModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IframeModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IframeModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IframeModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IframeModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=template&id=74058edc&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=template&id=74058edc& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_IframeModalComponent_vue_vue_type_template_id_74058edc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./IframeModalComponent.vue?vue&type=template&id=74058edc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=template&id=74058edc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_IframeModalComponent_vue_vue_type_template_id_74058edc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_IframeModalComponent_vue_vue_type_template_id_74058edc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue":
/*!**********************************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OutputStreamModalComponent_vue_vue_type_template_id_a11827e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutputStreamModalComponent.vue?vue&type=template&id=a11827e2& */ "./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=template&id=a11827e2&");
/* harmony import */ var _OutputStreamModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OutputStreamModalComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _OutputStreamModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _OutputStreamModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OutputStreamModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OutputStreamModalComponent_vue_vue_type_template_id_a11827e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OutputStreamModalComponent_vue_vue_type_template_id_a11827e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=script&lang=ts&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_OutputStreamModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./OutputStreamModalComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_OutputStreamModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_OutputStreamModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_OutputStreamModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_OutputStreamModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_OutputStreamModalComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=template&id=a11827e2&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=template&id=a11827e2& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_OutputStreamModalComponent_vue_vue_type_template_id_a11827e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./OutputStreamModalComponent.vue?vue&type=template&id=a11827e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=template&id=a11827e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_OutputStreamModalComponent_vue_vue_type_template_id_a11827e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_OutputStreamModalComponent_vue_vue_type_template_id_a11827e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/modal/factory/AbstractFactory.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/factory/AbstractFactory.ts ***!
  \*******************************************************************/
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
      var modal = this.createNew();
      modal = _.extend(modal, _.assign({}, data));
      return modal;
    };

    return AbstractFactory;
  }();

  exports["default"] = AbstractFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/factory/AjaxFormModalFactory.ts":
/*!************************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/factory/AjaxFormModalFactory.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/modal/factory/AbstractFactory */ "./node_modules/@enhavo/app/modal/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/modal/model/AjaxFormModal */ "./node_modules/@enhavo/app/modal/model/AjaxFormModal.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, AjaxFormModal_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var AjaxFormModalFactory =
  /** @class */
  function (_super) {
    __extends(AjaxFormModalFactory, _super);

    function AjaxFormModalFactory(modalManager, router) {
      var _this = _super.call(this) || this;

      _this.modalManager = modalManager;
      _this.router = router;
      return _this;
    }

    AjaxFormModalFactory.prototype.createNew = function () {
      return new AjaxFormModal_1["default"](this.modalManager, this.router);
    };

    return AjaxFormModalFactory;
  }(AbstractFactory_1["default"]);

  exports["default"] = AjaxFormModalFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/factory/IframeModalFactory.ts":
/*!**********************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/factory/IframeModalFactory.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/modal/factory/AbstractFactory */ "./node_modules/@enhavo/app/modal/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/modal/model/IframeModal */ "./node_modules/@enhavo/app/modal/model/IframeModal.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, IframeModal_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var IframeModalFactory =
  /** @class */
  function (_super) {
    __extends(IframeModalFactory, _super);

    function IframeModalFactory(modalManager) {
      var _this = _super.call(this) || this;

      _this.modalManager = modalManager;
      return _this;
    }

    IframeModalFactory.prototype.createNew = function () {
      return new IframeModal_1["default"](this.modalManager);
    };

    return IframeModalFactory;
  }(AbstractFactory_1["default"]);

  exports["default"] = IframeModalFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/factory/OutputStreamModalFactory.ts":
/*!****************************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/factory/OutputStreamModalFactory.ts ***!
  \****************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/modal/factory/AbstractFactory */ "./node_modules/@enhavo/app/modal/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/modal/model/OutputStreamModal */ "./node_modules/@enhavo/app/modal/model/OutputStreamModal.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, OutputStreamModal_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var OutputStreamModalFactory =
  /** @class */
  function (_super) {
    __extends(OutputStreamModalFactory, _super);

    function OutputStreamModalFactory(modalManager) {
      var _this = _super.call(this) || this;

      _this.modalManager = modalManager;
      return _this;
    }

    OutputStreamModalFactory.prototype.createNew = function () {
      return new OutputStreamModal_1["default"](this.modalManager);
    };

    return OutputStreamModalFactory;
  }(AbstractFactory_1["default"]);

  exports["default"] = OutputStreamModalFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/model/AbstractModal.ts":
/*!***************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/model/AbstractModal.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var AbstractModal =
  /** @class */
  function () {
    function AbstractModal(modalManager) {
      this.modalManager = modalManager;
    }

    AbstractModal.prototype.init = function () {};

    AbstractModal.prototype.close = function () {
      this.modalManager.pop();
    };

    return AbstractModal;
  }();

  exports["default"] = AbstractModal;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/model/AjaxFormModal.ts":
/*!***************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/model/AjaxFormModal.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/modal/model/AbstractModal */ "./node_modules/@enhavo/app/modal/model/AbstractModal.ts"), __webpack_require__(/*! axios */ "./node_modules/axios/index.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractModal_1, axios_1, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var AjaxFormModal =
  /** @class */
  function (_super) {
    __extends(AjaxFormModal, _super);

    function AjaxFormModal(modalManager, router) {
      var _this = _super.call(this, modalManager) || this;

      _this.element = null;
      _this.form = null;
      _this.saveLabel = 'enhavo_app.save';
      _this.closeLabel = 'enhavo_app.abort';
      _this.loading = true;
      _this.router = router;
      return _this;
    }

    AjaxFormModal.prototype.loadForm = function () {
      return __awaiter(this, void 0, Promise, function () {
        var url;

        var _this = this;

        return __generator(this, function (_a) {
          url = this.router.generate(this.route, this.routeParameters);
          this.loading = true;
          return [2
          /*return*/
          , new Promise(function (resolve, reject) {
            axios_1["default"].get(url).then(function (data) {
              var html = data.data.trim();
              _this.element = $.parseHTML(html)[0];
              _this.loading = false;
              resolve();
            })["catch"](function () {
              reject();
            });
          })];
        });
      });
    };

    AjaxFormModal.prototype.submit = function () {
      return __awaiter(this, void 0, Promise, function () {
        var data;
        return __generator(this, function (_a) {
          data = this.getFormData();

          if (this.submitHandler) {
            return [2
            /*return*/
            , this.submitHandler(this, data)];
          } else {
            return [2
            /*return*/
            , this.sendForm(data)];
          }

          return [2
          /*return*/
          ];
        });
      });
    };

    AjaxFormModal.prototype.sendForm = function (data) {
      var _this = this;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        if (_this.data) {
          data = _.extend(data, _this.data);
        }

        axios_1["default"].post(_this.getActionUrl(), _this.buildQuery(data)).then(function (responseData) {
          _this.receiveForm(responseData, resolve, reject);
        })["catch"](function (error) {
          _this.receiveForm(error.response, resolve, reject);
        });
      });
    };

    AjaxFormModal.prototype.receiveForm = function (responseData, resolve, reject) {
      if (this.actionHandler) {
        this.actionHandler(this, responseData, null).then(function (value) {
          resolve(value);
        })["catch"](function () {
          reject();
        });
      } else {
        var html = responseData.data.trim();
        this.element = $.parseHTML(html)[0];
        resolve();
      }

      this.loading = false;
    };

    AjaxFormModal.prototype.getActionUrl = function () {
      if (this.actionUrl) {
        return this.actionUrl;
      }

      if (this.actionRoute) {
        return this.router.generate(this.actionRoute, this.actionRouteParameters);
      }

      return this.router.generate(this.route, this.routeParameters);
    };

    AjaxFormModal.prototype.buildQuery = function (obj, prefix) {
      if (prefix === void 0) {
        prefix = '';
      }

      var args = [];

      if (_typeof(obj) == 'object') {
        for (var i in obj) {
          if (prefix == '') {
            args[args.length] = this.buildQuery(obj[i], encodeURIComponent(i));
          } else {
            args[args.length] = this.buildQuery(obj[i], prefix + '[' + encodeURIComponent(i) + ']');
          }
        }
      } else {
        args[args.length] = prefix + '=' + encodeURIComponent(obj);
      }

      return args.join('&');
    };

    AjaxFormModal.prototype.getFormData = function () {
      var formData = {};
      var data = $(this.form).serializeArray();

      for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var row = data_1[_i];
        formData[row.name] = row.value;
      }

      return formData;
    };

    return AjaxFormModal;
  }(AbstractModal_1["default"]);

  exports["default"] = AjaxFormModal;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")))

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/model/IframeModal.ts":
/*!*************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/model/IframeModal.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/modal/model/AbstractModal */ "./node_modules/@enhavo/app/modal/model/AbstractModal.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractModal_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var IframeModal =
  /** @class */
  function (_super) {
    __extends(IframeModal, _super);

    function IframeModal() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    IframeModal.prototype.init = function () {};

    return IframeModal;
  }(AbstractModal_1["default"]);

  exports["default"] = IframeModal;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/modal/model/OutputStreamModal.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@enhavo/app/modal/model/OutputStreamModal.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/modal/model/AbstractModal */ "./node_modules/@enhavo/app/modal/model/AbstractModal.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractModal_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var OutputStreamModal =
  /** @class */
  function (_super) {
    __extends(OutputStreamModal, _super);

    function OutputStreamModal() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.output = "";
      _this.done = false;
      return _this;
    }

    OutputStreamModal.prototype.init = function () {
      var modal = this;
      fetch(this.url).then(function (response) {
        return response.body;
      }).then(function (body) {
        var reader = body.getReader();
        reader.read().then(function processText(_a) {
          var done = _a.done,
              value = _a.value;

          if (value) {
            modal.output += new TextDecoder("utf-8").decode(value);
          }

          if (!done) {
            modal.done = true;
            return reader.read().then(processText);
          }
        });
      });
    };

    return OutputStreamModal;
  }(AbstractModal_1["default"]);

  exports["default"] = OutputStreamModal;
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

/***/ "./node_modules/ansi-to-html/lib/ansi_to_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/ansi-to-html/lib/ansi_to_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var entities = __webpack_require__(/*! entities */ "./node_modules/entities/lib/index.js");

var defaults = {
  fg: '#FFF',
  bg: '#000',
  newline: false,
  escapeXML: false,
  stream: false,
  colors: getDefaultColors()
};

function getDefaultColors() {
  var colors = {
    0: '#000',
    1: '#A00',
    2: '#0A0',
    3: '#A50',
    4: '#00A',
    5: '#A0A',
    6: '#0AA',
    7: '#AAA',
    8: '#555',
    9: '#F55',
    10: '#5F5',
    11: '#FF5',
    12: '#55F',
    13: '#F5F',
    14: '#5FF',
    15: '#FFF'
  };
  range(0, 5).forEach(function (red) {
    range(0, 5).forEach(function (green) {
      range(0, 5).forEach(function (blue) {
        return setStyleColor(red, green, blue, colors);
      });
    });
  });
  range(0, 23).forEach(function (gray) {
    var c = gray + 232;
    var l = toHexString(gray * 10 + 8);
    colors[c] = '#' + l + l + l;
  });
  return colors;
}
/**
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {object} colors
 */


function setStyleColor(red, green, blue, colors) {
  var c = 16 + red * 36 + green * 6 + blue;
  var r = red > 0 ? red * 40 + 55 : 0;
  var g = green > 0 ? green * 40 + 55 : 0;
  var b = blue > 0 ? blue * 40 + 55 : 0;
  colors[c] = toColorHexString([r, g, b]);
}
/**
 * Converts from a number like 15 to a hex string like 'F'
 * @param {number} num
 * @returns {string}
 */


function toHexString(num) {
  var str = num.toString(16);

  while (str.length < 2) {
    str = '0' + str;
  }

  return str;
}
/**
 * Converts from an array of numbers like [15, 15, 15] to a hex string like 'FFF'
 * @param {[red, green, blue]} ref
 * @returns {string}
 */


function toColorHexString(ref) {
  var results = [];

  var _iterator = _createForOfIteratorHelper(ref),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var r = _step.value;
      results.push(toHexString(r));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return '#' + results.join('');
}
/**
 * @param {Array} stack
 * @param {string} token
 * @param {*} data
 * @param {object} options
 */


function generateOutput(stack, token, data, options) {
  var result;

  if (token === 'text') {
    result = pushText(data, options);
  } else if (token === 'display') {
    result = handleDisplay(stack, data, options);
  } else if (token === 'xterm256') {
    result = pushForegroundColor(stack, options.colors[data]);
  } else if (token === 'rgb') {
    result = handleRgb(stack, data);
  }

  return result;
}
/**
 * @param {Array} stack
 * @param {string} data
 * @returns {*}
 */


function handleRgb(stack, data) {
  data = data.substring(2).slice(0, -1);
  var operation = +data.substr(0, 2);
  var color = data.substring(5).split(';');
  var rgb = color.map(function (value) {
    return ('0' + Number(value).toString(16)).substr(-2);
  }).join('');
  return pushStyle(stack, (operation === 38 ? 'color:#' : 'background-color:#') + rgb);
}
/**
 * @param {Array} stack
 * @param {number} code
 * @param {object} options
 * @returns {*}
 */


function handleDisplay(stack, code, options) {
  code = parseInt(code, 10);
  var codeMap = {
    '-1': function _() {
      return '<br/>';
    },
    0: function _() {
      return stack.length && resetStyles(stack);
    },
    1: function _() {
      return pushTag(stack, 'b');
    },
    3: function _() {
      return pushTag(stack, 'i');
    },
    4: function _() {
      return pushTag(stack, 'u');
    },
    8: function _() {
      return pushStyle(stack, 'display:none');
    },
    9: function _() {
      return pushTag(stack, 'strike');
    },
    22: function _() {
      return pushStyle(stack, 'font-weight:normal;text-decoration:none;font-style:normal');
    },
    23: function _() {
      return closeTag(stack, 'i');
    },
    24: function _() {
      return closeTag(stack, 'u');
    },
    39: function _() {
      return pushForegroundColor(stack, options.fg);
    },
    49: function _() {
      return pushBackgroundColor(stack, options.bg);
    },
    53: function _() {
      return pushStyle(stack, 'text-decoration:overline');
    }
  };
  var result;

  if (codeMap[code]) {
    result = codeMap[code]();
  } else if (4 < code && code < 7) {
    result = pushTag(stack, 'blink');
  } else if (29 < code && code < 38) {
    result = pushForegroundColor(stack, options.colors[code - 30]);
  } else if (39 < code && code < 48) {
    result = pushBackgroundColor(stack, options.colors[code - 40]);
  } else if (89 < code && code < 98) {
    result = pushForegroundColor(stack, options.colors[8 + (code - 90)]);
  } else if (99 < code && code < 108) {
    result = pushBackgroundColor(stack, options.colors[8 + (code - 100)]);
  }

  return result;
}
/**
 * Clear all the styles
 * @returns {string}
 */


function resetStyles(stack) {
  var stackClone = stack.slice(0);
  stack.length = 0;
  return stackClone.reverse().map(function (tag) {
    return '</' + tag + '>';
  }).join('');
}
/**
 * Creates an array of numbers ranging from low to high
 * @param {number} low
 * @param {number} high
 * @returns {Array}
 * @example range(3, 7); // creates [3, 4, 5, 6, 7]
 */


function range(low, high) {
  var results = [];

  for (var j = low; j <= high; j++) {
    results.push(j);
  }

  return results;
}
/**
 * Returns a new function that is true if value is NOT the same category
 * @param {string} category
 * @returns {function}
 */


function notCategory(category) {
  return function (e) {
    return (category === null || e.category !== category) && category !== 'all';
  };
}
/**
 * Converts a code into an ansi token type
 * @param {number} code
 * @returns {string}
 */


function categoryForCode(code) {
  code = parseInt(code, 10);
  var result = null;

  if (code === 0) {
    result = 'all';
  } else if (code === 1) {
    result = 'bold';
  } else if (2 < code && code < 5) {
    result = 'underline';
  } else if (4 < code && code < 7) {
    result = 'blink';
  } else if (code === 8) {
    result = 'hide';
  } else if (code === 9) {
    result = 'strike';
  } else if (29 < code && code < 38 || code === 39 || 89 < code && code < 98) {
    result = 'foreground-color';
  } else if (39 < code && code < 48 || code === 49 || 99 < code && code < 108) {
    result = 'background-color';
  }

  return result;
}
/**
 * @param {string} text
 * @param {object} options
 * @returns {string}
 */


function pushText(text, options) {
  if (options.escapeXML) {
    return entities.encodeXML(text);
  }

  return text;
}
/**
 * @param {Array} stack
 * @param {string} tag
 * @param {string} [style='']
 * @returns {string}
 */


function pushTag(stack, tag, style) {
  if (!style) {
    style = '';
  }

  stack.push(tag);
  return "<".concat(tag).concat(style ? " style=\"".concat(style, "\"") : '', ">");
}
/**
 * @param {Array} stack
 * @param {string} style
 * @returns {string}
 */


function pushStyle(stack, style) {
  return pushTag(stack, 'span', style);
}

function pushForegroundColor(stack, color) {
  return pushTag(stack, 'span', 'color:' + color);
}

function pushBackgroundColor(stack, color) {
  return pushTag(stack, 'span', 'background-color:' + color);
}
/**
 * @param {Array} stack
 * @param {string} style
 * @returns {string}
 */


function closeTag(stack, style) {
  var last;

  if (stack.slice(-1)[0] === style) {
    last = stack.pop();
  }

  if (last) {
    return '</' + style + '>';
  }
}
/**
 * @param {string} text
 * @param {object} options
 * @param {function} callback
 * @returns {Array}
 */


function tokenize(text, options, callback) {
  var ansiMatch = false;
  var ansiHandler = 3;

  function remove() {
    return '';
  }

  function removeXterm256(m, g1) {
    callback('xterm256', g1);
    return '';
  }

  function newline(m) {
    if (options.newline) {
      callback('display', -1);
    } else {
      callback('text', m);
    }

    return '';
  }

  function ansiMess(m, g1) {
    ansiMatch = true;

    if (g1.trim().length === 0) {
      g1 = '0';
    }

    g1 = g1.trimRight(';').split(';');

    var _iterator2 = _createForOfIteratorHelper(g1),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var g = _step2.value;
        callback('display', g);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return '';
  }

  function realText(m) {
    callback('text', m);
    return '';
  }

  function rgb(m) {
    callback('rgb', m);
    return '';
  }
  /* eslint no-control-regex:0 */


  var tokens = [{
    pattern: /^\x08+/,
    sub: remove
  }, {
    pattern: /^\x1b\[[012]?K/,
    sub: remove
  }, {
    pattern: /^\x1b\[\(B/,
    sub: remove
  }, {
    pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/,
    sub: rgb
  }, {
    pattern: /^\x1b\[38;5;(\d+)m/,
    sub: removeXterm256
  }, {
    pattern: /^\n/,
    sub: newline
  }, {
    pattern: /^\r+\n/,
    sub: newline
  }, {
    pattern: /^\x1b\[((?:\d{1,3};?)+|)m/,
    sub: ansiMess
  }, {
    // CSI n J
    // ED - Erase in Display Clears part of the screen.
    // If n is 0 (or missing), clear from cursor to end of screen.
    // If n is 1, clear from cursor to beginning of the screen.
    // If n is 2, clear entire screen (and moves cursor to upper left on DOS ANSI.SYS).
    // If n is 3, clear entire screen and delete all lines saved in the scrollback buffer
    //   (this feature was added for xterm and is supported by other terminal applications).
    pattern: /^\x1b\[\d?J/,
    sub: remove
  }, {
    // CSI n ; m f
    // HVP - Horizontal Vertical Position Same as CUP
    pattern: /^\x1b\[\d{0,3};\d{0,3}f/,
    sub: remove
  }, {
    // catch-all for CSI sequences?
    pattern: /^\x1b\[?[\d;]{0,3}/,
    sub: remove
  }, {
    /**
     * extracts real text - not containing:
     * - `\x1b' - ESC - escape (Ascii 27)
     * - '\x08' - BS - backspace (Ascii 8)
     * - `\n` - Newline - linefeed (LF) (ascii 10)
     * - `\r` - Windows Carriage Return (CR)
     */
    pattern: /^(([^\x1b\x08\r\n])+)/,
    sub: realText
  }];

  function process(handler, i) {
    if (i > ansiHandler && ansiMatch) {
      return;
    }

    ansiMatch = false;
    text = text.replace(handler.pattern, handler.sub);
  }

  var results1 = [];
  var _text = text,
      length = _text.length;

  outer: while (length > 0) {
    for (var i = 0, o = 0, len = tokens.length; o < len; i = ++o) {
      var handler = tokens[i];
      process(handler, i);

      if (text.length !== length) {
        // We matched a token and removed it from the text. We need to
        // start matching *all* tokens against the new text.
        length = text.length;
        continue outer;
      }
    }

    if (text.length === length) {
      break;
    }

    results1.push(0);
    length = text.length;
  }

  return results1;
}
/**
 * If streaming, then the stack is "sticky"
 *
 * @param {Array} stickyStack
 * @param {string} token
 * @param {*} data
 * @returns {Array}
 */


function updateStickyStack(stickyStack, token, data) {
  if (token !== 'text') {
    stickyStack = stickyStack.filter(notCategory(categoryForCode(data)));
    stickyStack.push({
      token: token,
      data: data,
      category: categoryForCode(data)
    });
  }

  return stickyStack;
}

var Filter = /*#__PURE__*/function () {
  /**
   * @param {object} options
   * @param {string=} options.fg The default foreground color used when reset color codes are encountered.
   * @param {string=} options.bg The default background color used when reset color codes are encountered.
   * @param {boolean=} options.newline Convert newline characters to `<br/>`.
   * @param {boolean=} options.escapeXML Generate HTML/XML entities.
   * @param {boolean=} options.stream Save style state across invocations of `toHtml()`.
   * @param {(string[] | {[code: number]: string})=} options.colors Can override specific colors or the entire ANSI palette.
   */
  function Filter(options) {
    _classCallCheck(this, Filter);

    options = options || {};

    if (options.colors) {
      options.colors = Object.assign({}, defaults.colors, options.colors);
    }

    this.options = Object.assign({}, defaults, options);
    this.stack = [];
    this.stickyStack = [];
  }
  /**
   * @param {string | string[]} input
   * @returns {string}
   */


  _createClass(Filter, [{
    key: "toHtml",
    value: function toHtml(input) {
      var _this = this;

      input = typeof input === 'string' ? [input] : input;
      var stack = this.stack,
          options = this.options;
      var buf = [];
      this.stickyStack.forEach(function (element) {
        var output = generateOutput(stack, element.token, element.data, options);

        if (output) {
          buf.push(output);
        }
      });
      tokenize(input.join(''), options, function (token, data) {
        var output = generateOutput(stack, token, data, options);

        if (output) {
          buf.push(output);
        }

        if (options.stream) {
          _this.stickyStack = updateStickyStack(_this.stickyStack, token, data);
        }
      });

      if (stack.length) {
        buf.push(resetStyles(stack));
      }

      return buf.join('');
    }
  }]);

  return Filter;
}();

module.exports = Filter;
//# sourceMappingURL=ansi_to_html.js.map

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! @enhavo/app/form/FormInitializer */ "./node_modules/@enhavo/app/form/FormInitializer.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1, FormInitializer_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ModalComponent =
  /** @class */
  function (_super) {
    __extends(ModalComponent, _super);

    function ModalComponent() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.name = 'ajax-form-modal';
      return _this;
    }

    ModalComponent.prototype.mounted = function () {
      this.modal.loadForm().then(function () {});
    };

    ModalComponent.prototype.save = function () {
      var _this = this;

      this.modal.submit().then(function (close) {
        if (close) {
          _this.modal.close();
        }
      })["catch"](function (close) {
        if (close) {
          _this.modal.close();
        }
      });
    };

    ModalComponent.prototype.close = function () {
      this.modal.close();
    };

    ModalComponent.prototype.trans = function (text) {
      return this.$translator.trans(text);
    };

    ModalComponent.prototype.setElement = function () {
      var initializer = new FormInitializer_1["default"]();
      initializer.setElement(this.modal.element);
      $(this.$refs.container).html("");
      initializer.append(this.$refs.container);
      this.modal.form = this.$refs.container;
    };

    __decorate([vue_property_decorator_1.Prop()], ModalComponent.prototype, "modal", void 0);

    __decorate([vue_property_decorator_1.Watch('modal.element')], ModalComponent.prototype, "setElement", null);

    ModalComponent = __decorate([vue_property_decorator_1.Component()], ModalComponent);
    return ModalComponent;
  }(vue_property_decorator_1.Vue);

  exports["default"] = ModalComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************************************************************************************/
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

  var ModalComponent =
  /** @class */
  function (_super) {
    __extends(ModalComponent, _super);

    function ModalComponent() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.name = 'iframe-modal';
      return _this;
    }

    __decorate([vue_property_decorator_1.Prop()], ModalComponent.prototype, "modal", void 0);

    ModalComponent = __decorate([vue_property_decorator_1.Component({})], ModalComponent);
    return ModalComponent;
  }(vue_property_decorator_1.Vue);

  exports["default"] = ModalComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=script&lang=ts&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! ansi-to-html */ "./node_modules/ansi-to-html/lib/ansi_to_html.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1, Convert, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var OutputStreamModalComponent =
  /** @class */
  function (_super) {
    __extends(OutputStreamModalComponent, _super);

    function OutputStreamModalComponent() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.name = 'output-stream-modal';
      return _this;
    }

    OutputStreamModalComponent.prototype.convert = function (value) {
      var convert = new Convert();
      return convert.toHtml(value);
    };

    OutputStreamModalComponent.prototype.scrollDown = function () {
      var _this = this;

      window.setTimeout(function () {
        $(_this.$refs.output).scrollTop($(_this.$refs.output).height());
      }, 100);
    };

    __decorate([vue_property_decorator_1.Prop()], OutputStreamModalComponent.prototype, "modal", void 0);

    __decorate([vue_property_decorator_1.Watch('modal.output')], OutputStreamModalComponent.prototype, "scrollDown", null);

    OutputStreamModalComponent = __decorate([vue_property_decorator_1.Component({})], OutputStreamModalComponent);
    return OutputStreamModalComponent;
  }(vue_property_decorator_1.Vue);

  exports["default"] = OutputStreamModalComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/entities/lib/decode.js":
/*!*********************************************!*\
  !*** ./node_modules/entities/lib/decode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
var entities_json_1 = __importDefault(__webpack_require__(/*! ./maps/entities.json */ "./node_modules/entities/lib/maps/entities.json"));
var legacy_json_1 = __importDefault(__webpack_require__(/*! ./maps/legacy.json */ "./node_modules/entities/lib/maps/legacy.json"));
var xml_json_1 = __importDefault(__webpack_require__(/*! ./maps/xml.json */ "./node_modules/entities/lib/maps/xml.json"));
var decode_codepoint_1 = __importDefault(__webpack_require__(/*! ./decode_codepoint */ "./node_modules/entities/lib/decode_codepoint.js"));
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
exports.decodeXML = getStrictDecoder(xml_json_1.default);
exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
function getStrictDecoder(map) {
    var replace = getReplacer(map);
    return function (str) { return String(str).replace(strictEntityRe, replace); };
}
var sorter = function (a, b) { return (a < b ? 1 : -1); };
exports.decodeHTML = (function () {
    var legacy = Object.keys(legacy_json_1.default).sort(sorter);
    var keys = Object.keys(entities_json_1.default).sort(sorter);
    for (var i = 0, j = 0; i < keys.length; i++) {
        if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
        }
        else {
            keys[i] += ";";
        }
    }
    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1.default);
    function replacer(str) {
        if (str.substr(-1) !== ";")
            str += ";";
        return replace(str);
    }
    // TODO consider creating a merged map
    return function (str) { return String(str).replace(re, replacer); };
})();
function getReplacer(map) {
    return function replace(str) {
        if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
                return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
        }
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        return map[str.slice(1, -1)] || str;
    };
}


/***/ }),

/***/ "./node_modules/entities/lib/decode_codepoint.js":
/*!*******************************************************!*\
  !*** ./node_modules/entities/lib/decode_codepoint.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decode_json_1 = __importDefault(__webpack_require__(/*! ./maps/decode.json */ "./node_modules/entities/lib/maps/decode.json"));
// Adapted from https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
var fromCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.fromCodePoint ||
    function (codePoint) {
        var output = "";
        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }
        output += String.fromCharCode(codePoint);
        return output;
    };
function decodeCodePoint(codePoint) {
    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
        return "\uFFFD";
    }
    if (codePoint in decode_json_1.default) {
        codePoint = decode_json_1.default[codePoint];
    }
    return fromCodePoint(codePoint);
}
exports.default = decodeCodePoint;


/***/ }),

/***/ "./node_modules/entities/lib/encode.js":
/*!*********************************************!*\
  !*** ./node_modules/entities/lib/encode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
var xml_json_1 = __importDefault(__webpack_require__(/*! ./maps/xml.json */ "./node_modules/entities/lib/maps/xml.json"));
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(__webpack_require__(/*! ./maps/entities.json */ "./node_modules/entities/lib/maps/entities.json"));
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
    return Object.keys(obj)
        .sort()
        .reduce(function (inverse, name) {
        inverse[obj[name]] = "&" + name + ";";
        return inverse;
    }, {});
}
function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];
    for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
        var k = _a[_i];
        if (k.length === 1) {
            // Add value to single array
            single.push("\\" + k);
        }
        else {
            // Add value to multiple array
            multiple.push(k);
        }
    }
    // Add ranges to single characters.
    single.sort();
    for (var start = 0; start < single.length - 1; start++) {
        // Find the end of a run of characters
        var end = start;
        while (end < single.length - 1 &&
            single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
        }
        var count = 1 + end - start;
        // We want to replace at least three characters
        if (count < 3)
            continue;
        single.splice(start, count, single[start] + "-" + single[end]);
    }
    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
}
// /[^\0-\x7F]/gu
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = 
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
String.prototype.codePointAt != null
    ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        function (str) { return str.codePointAt(0); }
    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        function (c) {
            return (c.charCodeAt(0) - 0xd800) * 0x400 +
                c.charCodeAt(1) -
                0xdc00 +
                0x10000;
        };
function singleCharReplacer(c) {
    return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0))
        .toString(16)
        .toUpperCase() + ";";
}
function getInverse(inverse, re) {
    return function (data) {
        return data
            .replace(re, function (name) { return inverse[name]; })
            .replace(reNonASCII, singleCharReplacer);
    };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
function escape(data) {
    return data.replace(reEscapeChars, singleCharReplacer);
}
exports.escape = escape;
/**
 * Encodes all characters not valid in XML documents using numeric hexadecimal
 * reference (eg. `&#xfc;`).
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
function escapeUTF8(data) {
    return data.replace(xmlReplacer, singleCharReplacer);
}
exports.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
    return function (data) {
        return data.replace(reEscapeChars, function (c) { return obj[c] || singleCharReplacer(c); });
    };
}


/***/ }),

/***/ "./node_modules/entities/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/entities/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
var decode_1 = __webpack_require__(/*! ./decode */ "./node_modules/entities/lib/decode.js");
var encode_1 = __webpack_require__(/*! ./encode */ "./node_modules/entities/lib/encode.js");
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeXML` or `decodeHTML` directly.
 */
function decode(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
}
exports.decode = decode;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
 */
function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
}
exports.decodeStrict = decodeStrict;
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
 * @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
 */
function encode(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
}
exports.encode = encode;
var encode_2 = __webpack_require__(/*! ./encode */ "./node_modules/entities/lib/encode.js");
Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function () { return encode_2.encodeXML; } });
Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function () { return encode_2.encodeNonAsciiHTML; } });
Object.defineProperty(exports, "escape", { enumerable: true, get: function () { return encode_2.escape; } });
Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function () { return encode_2.escapeUTF8; } });
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function () { return encode_2.encodeHTML; } });
var decode_2 = __webpack_require__(/*! ./decode */ "./node_modules/entities/lib/decode.js");
Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function () { return decode_2.decodeXML; } });
Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function () { return decode_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function () { return decode_2.decodeHTMLStrict; } });
Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function () { return decode_2.decodeXML; } });


/***/ }),

/***/ "./node_modules/entities/lib/maps/decode.json":
/*!****************************************************!*\
  !*** ./node_modules/entities/lib/maps/decode.json ***!
  \****************************************************/
/*! exports provided: 0, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 158, 159, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":65533,\"128\":8364,\"130\":8218,\"131\":402,\"132\":8222,\"133\":8230,\"134\":8224,\"135\":8225,\"136\":710,\"137\":8240,\"138\":352,\"139\":8249,\"140\":338,\"142\":381,\"145\":8216,\"146\":8217,\"147\":8220,\"148\":8221,\"149\":8226,\"150\":8211,\"151\":8212,\"152\":732,\"153\":8482,\"154\":353,\"155\":8250,\"156\":339,\"158\":382,\"159\":376}");

/***/ }),

/***/ "./node_modules/entities/lib/maps/entities.json":
/*!******************************************************!*\
  !*** ./node_modules/entities/lib/maps/entities.json ***!
  \******************************************************/
/*! exports provided: Aacute, aacute, Abreve, abreve, ac, acd, acE, Acirc, acirc, acute, Acy, acy, AElig, aelig, af, Afr, afr, Agrave, agrave, alefsym, aleph, Alpha, alpha, Amacr, amacr, amalg, amp, AMP, andand, And, and, andd, andslope, andv, ang, ange, angle, angmsdaa, angmsdab, angmsdac, angmsdad, angmsdae, angmsdaf, angmsdag, angmsdah, angmsd, angrt, angrtvb, angrtvbd, angsph, angst, angzarr, Aogon, aogon, Aopf, aopf, apacir, ap, apE, ape, apid, apos, ApplyFunction, approx, approxeq, Aring, aring, Ascr, ascr, Assign, ast, asymp, asympeq, Atilde, atilde, Auml, auml, awconint, awint, backcong, backepsilon, backprime, backsim, backsimeq, Backslash, Barv, barvee, barwed, Barwed, barwedge, bbrk, bbrktbrk, bcong, Bcy, bcy, bdquo, becaus, because, Because, bemptyv, bepsi, bernou, Bernoullis, Beta, beta, beth, between, Bfr, bfr, bigcap, bigcirc, bigcup, bigodot, bigoplus, bigotimes, bigsqcup, bigstar, bigtriangledown, bigtriangleup, biguplus, bigvee, bigwedge, bkarow, blacklozenge, blacksquare, blacktriangle, blacktriangledown, blacktriangleleft, blacktriangleright, blank, blk12, blk14, blk34, block, bne, bnequiv, bNot, bnot, Bopf, bopf, bot, bottom, bowtie, boxbox, boxdl, boxdL, boxDl, boxDL, boxdr, boxdR, boxDr, boxDR, boxh, boxH, boxhd, boxHd, boxhD, boxHD, boxhu, boxHu, boxhU, boxHU, boxminus, boxplus, boxtimes, boxul, boxuL, boxUl, boxUL, boxur, boxuR, boxUr, boxUR, boxv, boxV, boxvh, boxvH, boxVh, boxVH, boxvl, boxvL, boxVl, boxVL, boxvr, boxvR, boxVr, boxVR, bprime, breve, Breve, brvbar, bscr, Bscr, bsemi, bsim, bsime, bsolb, bsol, bsolhsub, bull, bullet, bump, bumpE, bumpe, Bumpeq, bumpeq, Cacute, cacute, capand, capbrcup, capcap, cap, Cap, capcup, capdot, CapitalDifferentialD, caps, caret, caron, Cayleys, ccaps, Ccaron, ccaron, Ccedil, ccedil, Ccirc, ccirc, Cconint, ccups, ccupssm, Cdot, cdot, cedil, Cedilla, cemptyv, cent, centerdot, CenterDot, cfr, Cfr, CHcy, chcy, check, checkmark, Chi, chi, circ, circeq, circlearrowleft, circlearrowright, circledast, circledcirc, circleddash, CircleDot, circledR, circledS, CircleMinus, CirclePlus, CircleTimes, cir, cirE, cire, cirfnint, cirmid, cirscir, ClockwiseContourIntegral, CloseCurlyDoubleQuote, CloseCurlyQuote, clubs, clubsuit, colon, Colon, Colone, colone, coloneq, comma, commat, comp, compfn, complement, complexes, cong, congdot, Congruent, conint, Conint, ContourIntegral, copf, Copf, coprod, Coproduct, copy, COPY, copysr, CounterClockwiseContourIntegral, crarr, cross, Cross, Cscr, cscr, csub, csube, csup, csupe, ctdot, cudarrl, cudarrr, cuepr, cuesc, cularr, cularrp, cupbrcap, cupcap, CupCap, cup, Cup, cupcup, cupdot, cupor, cups, curarr, curarrm, curlyeqprec, curlyeqsucc, curlyvee, curlywedge, curren, curvearrowleft, curvearrowright, cuvee, cuwed, cwconint, cwint, cylcty, dagger, Dagger, daleth, darr, Darr, dArr, dash, Dashv, dashv, dbkarow, dblac, Dcaron, dcaron, Dcy, dcy, ddagger, ddarr, DD, dd, DDotrahd, ddotseq, deg, Del, Delta, delta, demptyv, dfisht, Dfr, dfr, dHar, dharl, dharr, DiacriticalAcute, DiacriticalDot, DiacriticalDoubleAcute, DiacriticalGrave, DiacriticalTilde, diam, diamond, Diamond, diamondsuit, diams, die, DifferentialD, digamma, disin, div, divide, divideontimes, divonx, DJcy, djcy, dlcorn, dlcrop, dollar, Dopf, dopf, Dot, dot, DotDot, doteq, doteqdot, DotEqual, dotminus, dotplus, dotsquare, doublebarwedge, DoubleContourIntegral, DoubleDot, DoubleDownArrow, DoubleLeftArrow, DoubleLeftRightArrow, DoubleLeftTee, DoubleLongLeftArrow, DoubleLongLeftRightArrow, DoubleLongRightArrow, DoubleRightArrow, DoubleRightTee, DoubleUpArrow, DoubleUpDownArrow, DoubleVerticalBar, DownArrowBar, downarrow, DownArrow, Downarrow, DownArrowUpArrow, DownBreve, downdownarrows, downharpoonleft, downharpoonright, DownLeftRightVector, DownLeftTeeVector, DownLeftVectorBar, DownLeftVector, DownRightTeeVector, DownRightVectorBar, DownRightVector, DownTeeArrow, DownTee, drbkarow, drcorn, drcrop, Dscr, dscr, DScy, dscy, dsol, Dstrok, dstrok, dtdot, dtri, dtrif, duarr, duhar, dwangle, DZcy, dzcy, dzigrarr, Eacute, eacute, easter, Ecaron, ecaron, Ecirc, ecirc, ecir, ecolon, Ecy, ecy, eDDot, Edot, edot, eDot, ee, efDot, Efr, efr, eg, Egrave, egrave, egs, egsdot, el, Element, elinters, ell, els, elsdot, Emacr, emacr, empty, emptyset, EmptySmallSquare, emptyv, EmptyVerySmallSquare, emsp13, emsp14, emsp, ENG, eng, ensp, Eogon, eogon, Eopf, eopf, epar, eparsl, eplus, epsi, Epsilon, epsilon, epsiv, eqcirc, eqcolon, eqsim, eqslantgtr, eqslantless, Equal, equals, EqualTilde, equest, Equilibrium, equiv, equivDD, eqvparsl, erarr, erDot, escr, Escr, esdot, Esim, esim, Eta, eta, ETH, eth, Euml, euml, euro, excl, exist, Exists, expectation, exponentiale, ExponentialE, fallingdotseq, Fcy, fcy, female, ffilig, fflig, ffllig, Ffr, ffr, filig, FilledSmallSquare, FilledVerySmallSquare, fjlig, flat, fllig, fltns, fnof, Fopf, fopf, forall, ForAll, fork, forkv, Fouriertrf, fpartint, frac12, frac13, frac14, frac15, frac16, frac18, frac23, frac25, frac34, frac35, frac38, frac45, frac56, frac58, frac78, frasl, frown, fscr, Fscr, gacute, Gamma, gamma, Gammad, gammad, gap, Gbreve, gbreve, Gcedil, Gcirc, gcirc, Gcy, gcy, Gdot, gdot, ge, gE, gEl, gel, geq, geqq, geqslant, gescc, ges, gesdot, gesdoto, gesdotol, gesl, gesles, Gfr, gfr, gg, Gg, ggg, gimel, GJcy, gjcy, gla, gl, glE, glj, gnap, gnapprox, gne, gnE, gneq, gneqq, gnsim, Gopf, gopf, grave, GreaterEqual, GreaterEqualLess, GreaterFullEqual, GreaterGreater, GreaterLess, GreaterSlantEqual, GreaterTilde, Gscr, gscr, gsim, gsime, gsiml, gtcc, gtcir, gt, GT, Gt, gtdot, gtlPar, gtquest, gtrapprox, gtrarr, gtrdot, gtreqless, gtreqqless, gtrless, gtrsim, gvertneqq, gvnE, Hacek, hairsp, half, hamilt, HARDcy, hardcy, harrcir, harr, hArr, harrw, Hat, hbar, Hcirc, hcirc, hearts, heartsuit, hellip, hercon, hfr, Hfr, HilbertSpace, hksearow, hkswarow, hoarr, homtht, hookleftarrow, hookrightarrow, hopf, Hopf, horbar, HorizontalLine, hscr, Hscr, hslash, Hstrok, hstrok, HumpDownHump, HumpEqual, hybull, hyphen, Iacute, iacute, ic, Icirc, icirc, Icy, icy, Idot, IEcy, iecy, iexcl, iff, ifr, Ifr, Igrave, igrave, ii, iiiint, iiint, iinfin, iiota, IJlig, ijlig, Imacr, imacr, image, ImaginaryI, imagline, imagpart, imath, Im, imof, imped, Implies, incare, in, infin, infintie, inodot, intcal, int, Int, integers, Integral, intercal, Intersection, intlarhk, intprod, InvisibleComma, InvisibleTimes, IOcy, iocy, Iogon, iogon, Iopf, iopf, Iota, iota, iprod, iquest, iscr, Iscr, isin, isindot, isinE, isins, isinsv, isinv, it, Itilde, itilde, Iukcy, iukcy, Iuml, iuml, Jcirc, jcirc, Jcy, jcy, Jfr, jfr, jmath, Jopf, jopf, Jscr, jscr, Jsercy, jsercy, Jukcy, jukcy, Kappa, kappa, kappav, Kcedil, kcedil, Kcy, kcy, Kfr, kfr, kgreen, KHcy, khcy, KJcy, kjcy, Kopf, kopf, Kscr, kscr, lAarr, Lacute, lacute, laemptyv, lagran, Lambda, lambda, lang, Lang, langd, langle, lap, Laplacetrf, laquo, larrb, larrbfs, larr, Larr, lArr, larrfs, larrhk, larrlp, larrpl, larrsim, larrtl, latail, lAtail, lat, late, lates, lbarr, lBarr, lbbrk, lbrace, lbrack, lbrke, lbrksld, lbrkslu, Lcaron, lcaron, Lcedil, lcedil, lceil, lcub, Lcy, lcy, ldca, ldquo, ldquor, ldrdhar, ldrushar, ldsh, le, lE, LeftAngleBracket, LeftArrowBar, leftarrow, LeftArrow, Leftarrow, LeftArrowRightArrow, leftarrowtail, LeftCeiling, LeftDoubleBracket, LeftDownTeeVector, LeftDownVectorBar, LeftDownVector, LeftFloor, leftharpoondown, leftharpoonup, leftleftarrows, leftrightarrow, LeftRightArrow, Leftrightarrow, leftrightarrows, leftrightharpoons, leftrightsquigarrow, LeftRightVector, LeftTeeArrow, LeftTee, LeftTeeVector, leftthreetimes, LeftTriangleBar, LeftTriangle, LeftTriangleEqual, LeftUpDownVector, LeftUpTeeVector, LeftUpVectorBar, LeftUpVector, LeftVectorBar, LeftVector, lEg, leg, leq, leqq, leqslant, lescc, les, lesdot, lesdoto, lesdotor, lesg, lesges, lessapprox, lessdot, lesseqgtr, lesseqqgtr, LessEqualGreater, LessFullEqual, LessGreater, lessgtr, LessLess, lesssim, LessSlantEqual, LessTilde, lfisht, lfloor, Lfr, lfr, lg, lgE, lHar, lhard, lharu, lharul, lhblk, LJcy, ljcy, llarr, ll, Ll, llcorner, Lleftarrow, llhard, lltri, Lmidot, lmidot, lmoustache, lmoust, lnap, lnapprox, lne, lnE, lneq, lneqq, lnsim, loang, loarr, lobrk, longleftarrow, LongLeftArrow, Longleftarrow, longleftrightarrow, LongLeftRightArrow, Longleftrightarrow, longmapsto, longrightarrow, LongRightArrow, Longrightarrow, looparrowleft, looparrowright, lopar, Lopf, lopf, loplus, lotimes, lowast, lowbar, LowerLeftArrow, LowerRightArrow, loz, lozenge, lozf, lpar, lparlt, lrarr, lrcorner, lrhar, lrhard, lrm, lrtri, lsaquo, lscr, Lscr, lsh, Lsh, lsim, lsime, lsimg, lsqb, lsquo, lsquor, Lstrok, lstrok, ltcc, ltcir, lt, LT, Lt, ltdot, lthree, ltimes, ltlarr, ltquest, ltri, ltrie, ltrif, ltrPar, lurdshar, luruhar, lvertneqq, lvnE, macr, male, malt, maltese, Map, map, mapsto, mapstodown, mapstoleft, mapstoup, marker, mcomma, Mcy, mcy, mdash, mDDot, measuredangle, MediumSpace, Mellintrf, Mfr, mfr, mho, micro, midast, midcir, mid, middot, minusb, minus, minusd, minusdu, MinusPlus, mlcp, mldr, mnplus, models, Mopf, mopf, mp, mscr, Mscr, mstpos, Mu, mu, multimap, mumap, nabla, Nacute, nacute, nang, nap, napE, napid, napos, napprox, natural, naturals, natur, nbsp, nbump, nbumpe, ncap, Ncaron, ncaron, Ncedil, ncedil, ncong, ncongdot, ncup, Ncy, ncy, ndash, nearhk, nearr, neArr, nearrow, ne, nedot, NegativeMediumSpace, NegativeThickSpace, NegativeThinSpace, NegativeVeryThinSpace, nequiv, nesear, nesim, NestedGreaterGreater, NestedLessLess, NewLine, nexist, nexists, Nfr, nfr, ngE, nge, ngeq, ngeqq, ngeqslant, nges, nGg, ngsim, nGt, ngt, ngtr, nGtv, nharr, nhArr, nhpar, ni, nis, nisd, niv, NJcy, njcy, nlarr, nlArr, nldr, nlE, nle, nleftarrow, nLeftarrow, nleftrightarrow, nLeftrightarrow, nleq, nleqq, nleqslant, nles, nless, nLl, nlsim, nLt, nlt, nltri, nltrie, nLtv, nmid, NoBreak, NonBreakingSpace, nopf, Nopf, Not, not, NotCongruent, NotCupCap, NotDoubleVerticalBar, NotElement, NotEqual, NotEqualTilde, NotExists, NotGreater, NotGreaterEqual, NotGreaterFullEqual, NotGreaterGreater, NotGreaterLess, NotGreaterSlantEqual, NotGreaterTilde, NotHumpDownHump, NotHumpEqual, notin, notindot, notinE, notinva, notinvb, notinvc, NotLeftTriangleBar, NotLeftTriangle, NotLeftTriangleEqual, NotLess, NotLessEqual, NotLessGreater, NotLessLess, NotLessSlantEqual, NotLessTilde, NotNestedGreaterGreater, NotNestedLessLess, notni, notniva, notnivb, notnivc, NotPrecedes, NotPrecedesEqual, NotPrecedesSlantEqual, NotReverseElement, NotRightTriangleBar, NotRightTriangle, NotRightTriangleEqual, NotSquareSubset, NotSquareSubsetEqual, NotSquareSuperset, NotSquareSupersetEqual, NotSubset, NotSubsetEqual, NotSucceeds, NotSucceedsEqual, NotSucceedsSlantEqual, NotSucceedsTilde, NotSuperset, NotSupersetEqual, NotTilde, NotTildeEqual, NotTildeFullEqual, NotTildeTilde, NotVerticalBar, nparallel, npar, nparsl, npart, npolint, npr, nprcue, nprec, npreceq, npre, nrarrc, nrarr, nrArr, nrarrw, nrightarrow, nRightarrow, nrtri, nrtrie, nsc, nsccue, nsce, Nscr, nscr, nshortmid, nshortparallel, nsim, nsime, nsimeq, nsmid, nspar, nsqsube, nsqsupe, nsub, nsubE, nsube, nsubset, nsubseteq, nsubseteqq, nsucc, nsucceq, nsup, nsupE, nsupe, nsupset, nsupseteq, nsupseteqq, ntgl, Ntilde, ntilde, ntlg, ntriangleleft, ntrianglelefteq, ntriangleright, ntrianglerighteq, Nu, nu, num, numero, numsp, nvap, nvdash, nvDash, nVdash, nVDash, nvge, nvgt, nvHarr, nvinfin, nvlArr, nvle, nvlt, nvltrie, nvrArr, nvrtrie, nvsim, nwarhk, nwarr, nwArr, nwarrow, nwnear, Oacute, oacute, oast, Ocirc, ocirc, ocir, Ocy, ocy, odash, Odblac, odblac, odiv, odot, odsold, OElig, oelig, ofcir, Ofr, ofr, ogon, Ograve, ograve, ogt, ohbar, ohm, oint, olarr, olcir, olcross, oline, olt, Omacr, omacr, Omega, omega, Omicron, omicron, omid, ominus, Oopf, oopf, opar, OpenCurlyDoubleQuote, OpenCurlyQuote, operp, oplus, orarr, Or, or, ord, order, orderof, ordf, ordm, origof, oror, orslope, orv, oS, Oscr, oscr, Oslash, oslash, osol, Otilde, otilde, otimesas, Otimes, otimes, Ouml, ouml, ovbar, OverBar, OverBrace, OverBracket, OverParenthesis, para, parallel, par, parsim, parsl, part, PartialD, Pcy, pcy, percnt, period, permil, perp, pertenk, Pfr, pfr, Phi, phi, phiv, phmmat, phone, Pi, pi, pitchfork, piv, planck, planckh, plankv, plusacir, plusb, pluscir, plus, plusdo, plusdu, pluse, PlusMinus, plusmn, plussim, plustwo, pm, Poincareplane, pointint, popf, Popf, pound, prap, Pr, pr, prcue, precapprox, prec, preccurlyeq, Precedes, PrecedesEqual, PrecedesSlantEqual, PrecedesTilde, preceq, precnapprox, precneqq, precnsim, pre, prE, precsim, prime, Prime, primes, prnap, prnE, prnsim, prod, Product, profalar, profline, profsurf, prop, Proportional, Proportion, propto, prsim, prurel, Pscr, pscr, Psi, psi, puncsp, Qfr, qfr, qint, qopf, Qopf, qprime, Qscr, qscr, quaternions, quatint, quest, questeq, quot, QUOT, rAarr, race, Racute, racute, radic, raemptyv, rang, Rang, rangd, range, rangle, raquo, rarrap, rarrb, rarrbfs, rarrc, rarr, Rarr, rArr, rarrfs, rarrhk, rarrlp, rarrpl, rarrsim, Rarrtl, rarrtl, rarrw, ratail, rAtail, ratio, rationals, rbarr, rBarr, RBarr, rbbrk, rbrace, rbrack, rbrke, rbrksld, rbrkslu, Rcaron, rcaron, Rcedil, rcedil, rceil, rcub, Rcy, rcy, rdca, rdldhar, rdquo, rdquor, rdsh, real, realine, realpart, reals, Re, rect, reg, REG, ReverseElement, ReverseEquilibrium, ReverseUpEquilibrium, rfisht, rfloor, rfr, Rfr, rHar, rhard, rharu, rharul, Rho, rho, rhov, RightAngleBracket, RightArrowBar, rightarrow, RightArrow, Rightarrow, RightArrowLeftArrow, rightarrowtail, RightCeiling, RightDoubleBracket, RightDownTeeVector, RightDownVectorBar, RightDownVector, RightFloor, rightharpoondown, rightharpoonup, rightleftarrows, rightleftharpoons, rightrightarrows, rightsquigarrow, RightTeeArrow, RightTee, RightTeeVector, rightthreetimes, RightTriangleBar, RightTriangle, RightTriangleEqual, RightUpDownVector, RightUpTeeVector, RightUpVectorBar, RightUpVector, RightVectorBar, RightVector, ring, risingdotseq, rlarr, rlhar, rlm, rmoustache, rmoust, rnmid, roang, roarr, robrk, ropar, ropf, Ropf, roplus, rotimes, RoundImplies, rpar, rpargt, rppolint, rrarr, Rrightarrow, rsaquo, rscr, Rscr, rsh, Rsh, rsqb, rsquo, rsquor, rthree, rtimes, rtri, rtrie, rtrif, rtriltri, RuleDelayed, ruluhar, rx, Sacute, sacute, sbquo, scap, Scaron, scaron, Sc, sc, sccue, sce, scE, Scedil, scedil, Scirc, scirc, scnap, scnE, scnsim, scpolint, scsim, Scy, scy, sdotb, sdot, sdote, searhk, searr, seArr, searrow, sect, semi, seswar, setminus, setmn, sext, Sfr, sfr, sfrown, sharp, SHCHcy, shchcy, SHcy, shcy, ShortDownArrow, ShortLeftArrow, shortmid, shortparallel, ShortRightArrow, ShortUpArrow, shy, Sigma, sigma, sigmaf, sigmav, sim, simdot, sime, simeq, simg, simgE, siml, simlE, simne, simplus, simrarr, slarr, SmallCircle, smallsetminus, smashp, smeparsl, smid, smile, smt, smte, smtes, SOFTcy, softcy, solbar, solb, sol, Sopf, sopf, spades, spadesuit, spar, sqcap, sqcaps, sqcup, sqcups, Sqrt, sqsub, sqsube, sqsubset, sqsubseteq, sqsup, sqsupe, sqsupset, sqsupseteq, square, Square, SquareIntersection, SquareSubset, SquareSubsetEqual, SquareSuperset, SquareSupersetEqual, SquareUnion, squarf, squ, squf, srarr, Sscr, sscr, ssetmn, ssmile, sstarf, Star, star, starf, straightepsilon, straightphi, strns, sub, Sub, subdot, subE, sube, subedot, submult, subnE, subne, subplus, subrarr, subset, Subset, subseteq, subseteqq, SubsetEqual, subsetneq, subsetneqq, subsim, subsub, subsup, succapprox, succ, succcurlyeq, Succeeds, SucceedsEqual, SucceedsSlantEqual, SucceedsTilde, succeq, succnapprox, succneqq, succnsim, succsim, SuchThat, sum, Sum, sung, sup1, sup2, sup3, sup, Sup, supdot, supdsub, supE, supe, supedot, Superset, SupersetEqual, suphsol, suphsub, suplarr, supmult, supnE, supne, supplus, supset, Supset, supseteq, supseteqq, supsetneq, supsetneqq, supsim, supsub, supsup, swarhk, swarr, swArr, swarrow, swnwar, szlig, Tab, target, Tau, tau, tbrk, Tcaron, tcaron, Tcedil, tcedil, Tcy, tcy, tdot, telrec, Tfr, tfr, there4, therefore, Therefore, Theta, theta, thetasym, thetav, thickapprox, thicksim, ThickSpace, ThinSpace, thinsp, thkap, thksim, THORN, thorn, tilde, Tilde, TildeEqual, TildeFullEqual, TildeTilde, timesbar, timesb, times, timesd, tint, toea, topbot, topcir, top, Topf, topf, topfork, tosa, tprime, trade, TRADE, triangle, triangledown, triangleleft, trianglelefteq, triangleq, triangleright, trianglerighteq, tridot, trie, triminus, TripleDot, triplus, trisb, tritime, trpezium, Tscr, tscr, TScy, tscy, TSHcy, tshcy, Tstrok, tstrok, twixt, twoheadleftarrow, twoheadrightarrow, Uacute, uacute, uarr, Uarr, uArr, Uarrocir, Ubrcy, ubrcy, Ubreve, ubreve, Ucirc, ucirc, Ucy, ucy, udarr, Udblac, udblac, udhar, ufisht, Ufr, ufr, Ugrave, ugrave, uHar, uharl, uharr, uhblk, ulcorn, ulcorner, ulcrop, ultri, Umacr, umacr, uml, UnderBar, UnderBrace, UnderBracket, UnderParenthesis, Union, UnionPlus, Uogon, uogon, Uopf, uopf, UpArrowBar, uparrow, UpArrow, Uparrow, UpArrowDownArrow, updownarrow, UpDownArrow, Updownarrow, UpEquilibrium, upharpoonleft, upharpoonright, uplus, UpperLeftArrow, UpperRightArrow, upsi, Upsi, upsih, Upsilon, upsilon, UpTeeArrow, UpTee, upuparrows, urcorn, urcorner, urcrop, Uring, uring, urtri, Uscr, uscr, utdot, Utilde, utilde, utri, utrif, uuarr, Uuml, uuml, uwangle, vangrt, varepsilon, varkappa, varnothing, varphi, varpi, varpropto, varr, vArr, varrho, varsigma, varsubsetneq, varsubsetneqq, varsupsetneq, varsupsetneqq, vartheta, vartriangleleft, vartriangleright, vBar, Vbar, vBarv, Vcy, vcy, vdash, vDash, Vdash, VDash, Vdashl, veebar, vee, Vee, veeeq, vellip, verbar, Verbar, vert, Vert, VerticalBar, VerticalLine, VerticalSeparator, VerticalTilde, VeryThinSpace, Vfr, vfr, vltri, vnsub, vnsup, Vopf, vopf, vprop, vrtri, Vscr, vscr, vsubnE, vsubne, vsupnE, vsupne, Vvdash, vzigzag, Wcirc, wcirc, wedbar, wedge, Wedge, wedgeq, weierp, Wfr, wfr, Wopf, wopf, wp, wr, wreath, Wscr, wscr, xcap, xcirc, xcup, xdtri, Xfr, xfr, xharr, xhArr, Xi, xi, xlarr, xlArr, xmap, xnis, xodot, Xopf, xopf, xoplus, xotime, xrarr, xrArr, Xscr, xscr, xsqcup, xuplus, xutri, xvee, xwedge, Yacute, yacute, YAcy, yacy, Ycirc, ycirc, Ycy, ycy, yen, Yfr, yfr, YIcy, yicy, Yopf, yopf, Yscr, yscr, YUcy, yucy, yuml, Yuml, Zacute, zacute, Zcaron, zcaron, Zcy, zcy, Zdot, zdot, zeetrf, ZeroWidthSpace, Zeta, zeta, zfr, Zfr, ZHcy, zhcy, zigrarr, zopf, Zopf, Zscr, zscr, zwj, zwnj, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Abreve\":\"Ă\",\"abreve\":\"ă\",\"ac\":\"∾\",\"acd\":\"∿\",\"acE\":\"∾̳\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"Acy\":\"А\",\"acy\":\"а\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"af\":\"⁡\",\"Afr\":\"𝔄\",\"afr\":\"𝔞\",\"Agrave\":\"À\",\"agrave\":\"à\",\"alefsym\":\"ℵ\",\"aleph\":\"ℵ\",\"Alpha\":\"Α\",\"alpha\":\"α\",\"Amacr\":\"Ā\",\"amacr\":\"ā\",\"amalg\":\"⨿\",\"amp\":\"&\",\"AMP\":\"&\",\"andand\":\"⩕\",\"And\":\"⩓\",\"and\":\"∧\",\"andd\":\"⩜\",\"andslope\":\"⩘\",\"andv\":\"⩚\",\"ang\":\"∠\",\"ange\":\"⦤\",\"angle\":\"∠\",\"angmsdaa\":\"⦨\",\"angmsdab\":\"⦩\",\"angmsdac\":\"⦪\",\"angmsdad\":\"⦫\",\"angmsdae\":\"⦬\",\"angmsdaf\":\"⦭\",\"angmsdag\":\"⦮\",\"angmsdah\":\"⦯\",\"angmsd\":\"∡\",\"angrt\":\"∟\",\"angrtvb\":\"⊾\",\"angrtvbd\":\"⦝\",\"angsph\":\"∢\",\"angst\":\"Å\",\"angzarr\":\"⍼\",\"Aogon\":\"Ą\",\"aogon\":\"ą\",\"Aopf\":\"𝔸\",\"aopf\":\"𝕒\",\"apacir\":\"⩯\",\"ap\":\"≈\",\"apE\":\"⩰\",\"ape\":\"≊\",\"apid\":\"≋\",\"apos\":\"'\",\"ApplyFunction\":\"⁡\",\"approx\":\"≈\",\"approxeq\":\"≊\",\"Aring\":\"Å\",\"aring\":\"å\",\"Ascr\":\"𝒜\",\"ascr\":\"𝒶\",\"Assign\":\"≔\",\"ast\":\"*\",\"asymp\":\"≈\",\"asympeq\":\"≍\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"awconint\":\"∳\",\"awint\":\"⨑\",\"backcong\":\"≌\",\"backepsilon\":\"϶\",\"backprime\":\"‵\",\"backsim\":\"∽\",\"backsimeq\":\"⋍\",\"Backslash\":\"∖\",\"Barv\":\"⫧\",\"barvee\":\"⊽\",\"barwed\":\"⌅\",\"Barwed\":\"⌆\",\"barwedge\":\"⌅\",\"bbrk\":\"⎵\",\"bbrktbrk\":\"⎶\",\"bcong\":\"≌\",\"Bcy\":\"Б\",\"bcy\":\"б\",\"bdquo\":\"„\",\"becaus\":\"∵\",\"because\":\"∵\",\"Because\":\"∵\",\"bemptyv\":\"⦰\",\"bepsi\":\"϶\",\"bernou\":\"ℬ\",\"Bernoullis\":\"ℬ\",\"Beta\":\"Β\",\"beta\":\"β\",\"beth\":\"ℶ\",\"between\":\"≬\",\"Bfr\":\"𝔅\",\"bfr\":\"𝔟\",\"bigcap\":\"⋂\",\"bigcirc\":\"◯\",\"bigcup\":\"⋃\",\"bigodot\":\"⨀\",\"bigoplus\":\"⨁\",\"bigotimes\":\"⨂\",\"bigsqcup\":\"⨆\",\"bigstar\":\"★\",\"bigtriangledown\":\"▽\",\"bigtriangleup\":\"△\",\"biguplus\":\"⨄\",\"bigvee\":\"⋁\",\"bigwedge\":\"⋀\",\"bkarow\":\"⤍\",\"blacklozenge\":\"⧫\",\"blacksquare\":\"▪\",\"blacktriangle\":\"▴\",\"blacktriangledown\":\"▾\",\"blacktriangleleft\":\"◂\",\"blacktriangleright\":\"▸\",\"blank\":\"␣\",\"blk12\":\"▒\",\"blk14\":\"░\",\"blk34\":\"▓\",\"block\":\"█\",\"bne\":\"=⃥\",\"bnequiv\":\"≡⃥\",\"bNot\":\"⫭\",\"bnot\":\"⌐\",\"Bopf\":\"𝔹\",\"bopf\":\"𝕓\",\"bot\":\"⊥\",\"bottom\":\"⊥\",\"bowtie\":\"⋈\",\"boxbox\":\"⧉\",\"boxdl\":\"┐\",\"boxdL\":\"╕\",\"boxDl\":\"╖\",\"boxDL\":\"╗\",\"boxdr\":\"┌\",\"boxdR\":\"╒\",\"boxDr\":\"╓\",\"boxDR\":\"╔\",\"boxh\":\"─\",\"boxH\":\"═\",\"boxhd\":\"┬\",\"boxHd\":\"╤\",\"boxhD\":\"╥\",\"boxHD\":\"╦\",\"boxhu\":\"┴\",\"boxHu\":\"╧\",\"boxhU\":\"╨\",\"boxHU\":\"╩\",\"boxminus\":\"⊟\",\"boxplus\":\"⊞\",\"boxtimes\":\"⊠\",\"boxul\":\"┘\",\"boxuL\":\"╛\",\"boxUl\":\"╜\",\"boxUL\":\"╝\",\"boxur\":\"└\",\"boxuR\":\"╘\",\"boxUr\":\"╙\",\"boxUR\":\"╚\",\"boxv\":\"│\",\"boxV\":\"║\",\"boxvh\":\"┼\",\"boxvH\":\"╪\",\"boxVh\":\"╫\",\"boxVH\":\"╬\",\"boxvl\":\"┤\",\"boxvL\":\"╡\",\"boxVl\":\"╢\",\"boxVL\":\"╣\",\"boxvr\":\"├\",\"boxvR\":\"╞\",\"boxVr\":\"╟\",\"boxVR\":\"╠\",\"bprime\":\"‵\",\"breve\":\"˘\",\"Breve\":\"˘\",\"brvbar\":\"¦\",\"bscr\":\"𝒷\",\"Bscr\":\"ℬ\",\"bsemi\":\"⁏\",\"bsim\":\"∽\",\"bsime\":\"⋍\",\"bsolb\":\"⧅\",\"bsol\":\"\\\\\",\"bsolhsub\":\"⟈\",\"bull\":\"•\",\"bullet\":\"•\",\"bump\":\"≎\",\"bumpE\":\"⪮\",\"bumpe\":\"≏\",\"Bumpeq\":\"≎\",\"bumpeq\":\"≏\",\"Cacute\":\"Ć\",\"cacute\":\"ć\",\"capand\":\"⩄\",\"capbrcup\":\"⩉\",\"capcap\":\"⩋\",\"cap\":\"∩\",\"Cap\":\"⋒\",\"capcup\":\"⩇\",\"capdot\":\"⩀\",\"CapitalDifferentialD\":\"ⅅ\",\"caps\":\"∩︀\",\"caret\":\"⁁\",\"caron\":\"ˇ\",\"Cayleys\":\"ℭ\",\"ccaps\":\"⩍\",\"Ccaron\":\"Č\",\"ccaron\":\"č\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"Ccirc\":\"Ĉ\",\"ccirc\":\"ĉ\",\"Cconint\":\"∰\",\"ccups\":\"⩌\",\"ccupssm\":\"⩐\",\"Cdot\":\"Ċ\",\"cdot\":\"ċ\",\"cedil\":\"¸\",\"Cedilla\":\"¸\",\"cemptyv\":\"⦲\",\"cent\":\"¢\",\"centerdot\":\"·\",\"CenterDot\":\"·\",\"cfr\":\"𝔠\",\"Cfr\":\"ℭ\",\"CHcy\":\"Ч\",\"chcy\":\"ч\",\"check\":\"✓\",\"checkmark\":\"✓\",\"Chi\":\"Χ\",\"chi\":\"χ\",\"circ\":\"ˆ\",\"circeq\":\"≗\",\"circlearrowleft\":\"↺\",\"circlearrowright\":\"↻\",\"circledast\":\"⊛\",\"circledcirc\":\"⊚\",\"circleddash\":\"⊝\",\"CircleDot\":\"⊙\",\"circledR\":\"®\",\"circledS\":\"Ⓢ\",\"CircleMinus\":\"⊖\",\"CirclePlus\":\"⊕\",\"CircleTimes\":\"⊗\",\"cir\":\"○\",\"cirE\":\"⧃\",\"cire\":\"≗\",\"cirfnint\":\"⨐\",\"cirmid\":\"⫯\",\"cirscir\":\"⧂\",\"ClockwiseContourIntegral\":\"∲\",\"CloseCurlyDoubleQuote\":\"”\",\"CloseCurlyQuote\":\"’\",\"clubs\":\"♣\",\"clubsuit\":\"♣\",\"colon\":\":\",\"Colon\":\"∷\",\"Colone\":\"⩴\",\"colone\":\"≔\",\"coloneq\":\"≔\",\"comma\":\",\",\"commat\":\"@\",\"comp\":\"∁\",\"compfn\":\"∘\",\"complement\":\"∁\",\"complexes\":\"ℂ\",\"cong\":\"≅\",\"congdot\":\"⩭\",\"Congruent\":\"≡\",\"conint\":\"∮\",\"Conint\":\"∯\",\"ContourIntegral\":\"∮\",\"copf\":\"𝕔\",\"Copf\":\"ℂ\",\"coprod\":\"∐\",\"Coproduct\":\"∐\",\"copy\":\"©\",\"COPY\":\"©\",\"copysr\":\"℗\",\"CounterClockwiseContourIntegral\":\"∳\",\"crarr\":\"↵\",\"cross\":\"✗\",\"Cross\":\"⨯\",\"Cscr\":\"𝒞\",\"cscr\":\"𝒸\",\"csub\":\"⫏\",\"csube\":\"⫑\",\"csup\":\"⫐\",\"csupe\":\"⫒\",\"ctdot\":\"⋯\",\"cudarrl\":\"⤸\",\"cudarrr\":\"⤵\",\"cuepr\":\"⋞\",\"cuesc\":\"⋟\",\"cularr\":\"↶\",\"cularrp\":\"⤽\",\"cupbrcap\":\"⩈\",\"cupcap\":\"⩆\",\"CupCap\":\"≍\",\"cup\":\"∪\",\"Cup\":\"⋓\",\"cupcup\":\"⩊\",\"cupdot\":\"⊍\",\"cupor\":\"⩅\",\"cups\":\"∪︀\",\"curarr\":\"↷\",\"curarrm\":\"⤼\",\"curlyeqprec\":\"⋞\",\"curlyeqsucc\":\"⋟\",\"curlyvee\":\"⋎\",\"curlywedge\":\"⋏\",\"curren\":\"¤\",\"curvearrowleft\":\"↶\",\"curvearrowright\":\"↷\",\"cuvee\":\"⋎\",\"cuwed\":\"⋏\",\"cwconint\":\"∲\",\"cwint\":\"∱\",\"cylcty\":\"⌭\",\"dagger\":\"†\",\"Dagger\":\"‡\",\"daleth\":\"ℸ\",\"darr\":\"↓\",\"Darr\":\"↡\",\"dArr\":\"⇓\",\"dash\":\"‐\",\"Dashv\":\"⫤\",\"dashv\":\"⊣\",\"dbkarow\":\"⤏\",\"dblac\":\"˝\",\"Dcaron\":\"Ď\",\"dcaron\":\"ď\",\"Dcy\":\"Д\",\"dcy\":\"д\",\"ddagger\":\"‡\",\"ddarr\":\"⇊\",\"DD\":\"ⅅ\",\"dd\":\"ⅆ\",\"DDotrahd\":\"⤑\",\"ddotseq\":\"⩷\",\"deg\":\"°\",\"Del\":\"∇\",\"Delta\":\"Δ\",\"delta\":\"δ\",\"demptyv\":\"⦱\",\"dfisht\":\"⥿\",\"Dfr\":\"𝔇\",\"dfr\":\"𝔡\",\"dHar\":\"⥥\",\"dharl\":\"⇃\",\"dharr\":\"⇂\",\"DiacriticalAcute\":\"´\",\"DiacriticalDot\":\"˙\",\"DiacriticalDoubleAcute\":\"˝\",\"DiacriticalGrave\":\"`\",\"DiacriticalTilde\":\"˜\",\"diam\":\"⋄\",\"diamond\":\"⋄\",\"Diamond\":\"⋄\",\"diamondsuit\":\"♦\",\"diams\":\"♦\",\"die\":\"¨\",\"DifferentialD\":\"ⅆ\",\"digamma\":\"ϝ\",\"disin\":\"⋲\",\"div\":\"÷\",\"divide\":\"÷\",\"divideontimes\":\"⋇\",\"divonx\":\"⋇\",\"DJcy\":\"Ђ\",\"djcy\":\"ђ\",\"dlcorn\":\"⌞\",\"dlcrop\":\"⌍\",\"dollar\":\"$\",\"Dopf\":\"𝔻\",\"dopf\":\"𝕕\",\"Dot\":\"¨\",\"dot\":\"˙\",\"DotDot\":\"⃜\",\"doteq\":\"≐\",\"doteqdot\":\"≑\",\"DotEqual\":\"≐\",\"dotminus\":\"∸\",\"dotplus\":\"∔\",\"dotsquare\":\"⊡\",\"doublebarwedge\":\"⌆\",\"DoubleContourIntegral\":\"∯\",\"DoubleDot\":\"¨\",\"DoubleDownArrow\":\"⇓\",\"DoubleLeftArrow\":\"⇐\",\"DoubleLeftRightArrow\":\"⇔\",\"DoubleLeftTee\":\"⫤\",\"DoubleLongLeftArrow\":\"⟸\",\"DoubleLongLeftRightArrow\":\"⟺\",\"DoubleLongRightArrow\":\"⟹\",\"DoubleRightArrow\":\"⇒\",\"DoubleRightTee\":\"⊨\",\"DoubleUpArrow\":\"⇑\",\"DoubleUpDownArrow\":\"⇕\",\"DoubleVerticalBar\":\"∥\",\"DownArrowBar\":\"⤓\",\"downarrow\":\"↓\",\"DownArrow\":\"↓\",\"Downarrow\":\"⇓\",\"DownArrowUpArrow\":\"⇵\",\"DownBreve\":\"̑\",\"downdownarrows\":\"⇊\",\"downharpoonleft\":\"⇃\",\"downharpoonright\":\"⇂\",\"DownLeftRightVector\":\"⥐\",\"DownLeftTeeVector\":\"⥞\",\"DownLeftVectorBar\":\"⥖\",\"DownLeftVector\":\"↽\",\"DownRightTeeVector\":\"⥟\",\"DownRightVectorBar\":\"⥗\",\"DownRightVector\":\"⇁\",\"DownTeeArrow\":\"↧\",\"DownTee\":\"⊤\",\"drbkarow\":\"⤐\",\"drcorn\":\"⌟\",\"drcrop\":\"⌌\",\"Dscr\":\"𝒟\",\"dscr\":\"𝒹\",\"DScy\":\"Ѕ\",\"dscy\":\"ѕ\",\"dsol\":\"⧶\",\"Dstrok\":\"Đ\",\"dstrok\":\"đ\",\"dtdot\":\"⋱\",\"dtri\":\"▿\",\"dtrif\":\"▾\",\"duarr\":\"⇵\",\"duhar\":\"⥯\",\"dwangle\":\"⦦\",\"DZcy\":\"Џ\",\"dzcy\":\"џ\",\"dzigrarr\":\"⟿\",\"Eacute\":\"É\",\"eacute\":\"é\",\"easter\":\"⩮\",\"Ecaron\":\"Ě\",\"ecaron\":\"ě\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"ecir\":\"≖\",\"ecolon\":\"≕\",\"Ecy\":\"Э\",\"ecy\":\"э\",\"eDDot\":\"⩷\",\"Edot\":\"Ė\",\"edot\":\"ė\",\"eDot\":\"≑\",\"ee\":\"ⅇ\",\"efDot\":\"≒\",\"Efr\":\"𝔈\",\"efr\":\"𝔢\",\"eg\":\"⪚\",\"Egrave\":\"È\",\"egrave\":\"è\",\"egs\":\"⪖\",\"egsdot\":\"⪘\",\"el\":\"⪙\",\"Element\":\"∈\",\"elinters\":\"⏧\",\"ell\":\"ℓ\",\"els\":\"⪕\",\"elsdot\":\"⪗\",\"Emacr\":\"Ē\",\"emacr\":\"ē\",\"empty\":\"∅\",\"emptyset\":\"∅\",\"EmptySmallSquare\":\"◻\",\"emptyv\":\"∅\",\"EmptyVerySmallSquare\":\"▫\",\"emsp13\":\" \",\"emsp14\":\" \",\"emsp\":\" \",\"ENG\":\"Ŋ\",\"eng\":\"ŋ\",\"ensp\":\" \",\"Eogon\":\"Ę\",\"eogon\":\"ę\",\"Eopf\":\"𝔼\",\"eopf\":\"𝕖\",\"epar\":\"⋕\",\"eparsl\":\"⧣\",\"eplus\":\"⩱\",\"epsi\":\"ε\",\"Epsilon\":\"Ε\",\"epsilon\":\"ε\",\"epsiv\":\"ϵ\",\"eqcirc\":\"≖\",\"eqcolon\":\"≕\",\"eqsim\":\"≂\",\"eqslantgtr\":\"⪖\",\"eqslantless\":\"⪕\",\"Equal\":\"⩵\",\"equals\":\"=\",\"EqualTilde\":\"≂\",\"equest\":\"≟\",\"Equilibrium\":\"⇌\",\"equiv\":\"≡\",\"equivDD\":\"⩸\",\"eqvparsl\":\"⧥\",\"erarr\":\"⥱\",\"erDot\":\"≓\",\"escr\":\"ℯ\",\"Escr\":\"ℰ\",\"esdot\":\"≐\",\"Esim\":\"⩳\",\"esim\":\"≂\",\"Eta\":\"Η\",\"eta\":\"η\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"euro\":\"€\",\"excl\":\"!\",\"exist\":\"∃\",\"Exists\":\"∃\",\"expectation\":\"ℰ\",\"exponentiale\":\"ⅇ\",\"ExponentialE\":\"ⅇ\",\"fallingdotseq\":\"≒\",\"Fcy\":\"Ф\",\"fcy\":\"ф\",\"female\":\"♀\",\"ffilig\":\"ﬃ\",\"fflig\":\"ﬀ\",\"ffllig\":\"ﬄ\",\"Ffr\":\"𝔉\",\"ffr\":\"𝔣\",\"filig\":\"ﬁ\",\"FilledSmallSquare\":\"◼\",\"FilledVerySmallSquare\":\"▪\",\"fjlig\":\"fj\",\"flat\":\"♭\",\"fllig\":\"ﬂ\",\"fltns\":\"▱\",\"fnof\":\"ƒ\",\"Fopf\":\"𝔽\",\"fopf\":\"𝕗\",\"forall\":\"∀\",\"ForAll\":\"∀\",\"fork\":\"⋔\",\"forkv\":\"⫙\",\"Fouriertrf\":\"ℱ\",\"fpartint\":\"⨍\",\"frac12\":\"½\",\"frac13\":\"⅓\",\"frac14\":\"¼\",\"frac15\":\"⅕\",\"frac16\":\"⅙\",\"frac18\":\"⅛\",\"frac23\":\"⅔\",\"frac25\":\"⅖\",\"frac34\":\"¾\",\"frac35\":\"⅗\",\"frac38\":\"⅜\",\"frac45\":\"⅘\",\"frac56\":\"⅚\",\"frac58\":\"⅝\",\"frac78\":\"⅞\",\"frasl\":\"⁄\",\"frown\":\"⌢\",\"fscr\":\"𝒻\",\"Fscr\":\"ℱ\",\"gacute\":\"ǵ\",\"Gamma\":\"Γ\",\"gamma\":\"γ\",\"Gammad\":\"Ϝ\",\"gammad\":\"ϝ\",\"gap\":\"⪆\",\"Gbreve\":\"Ğ\",\"gbreve\":\"ğ\",\"Gcedil\":\"Ģ\",\"Gcirc\":\"Ĝ\",\"gcirc\":\"ĝ\",\"Gcy\":\"Г\",\"gcy\":\"г\",\"Gdot\":\"Ġ\",\"gdot\":\"ġ\",\"ge\":\"≥\",\"gE\":\"≧\",\"gEl\":\"⪌\",\"gel\":\"⋛\",\"geq\":\"≥\",\"geqq\":\"≧\",\"geqslant\":\"⩾\",\"gescc\":\"⪩\",\"ges\":\"⩾\",\"gesdot\":\"⪀\",\"gesdoto\":\"⪂\",\"gesdotol\":\"⪄\",\"gesl\":\"⋛︀\",\"gesles\":\"⪔\",\"Gfr\":\"𝔊\",\"gfr\":\"𝔤\",\"gg\":\"≫\",\"Gg\":\"⋙\",\"ggg\":\"⋙\",\"gimel\":\"ℷ\",\"GJcy\":\"Ѓ\",\"gjcy\":\"ѓ\",\"gla\":\"⪥\",\"gl\":\"≷\",\"glE\":\"⪒\",\"glj\":\"⪤\",\"gnap\":\"⪊\",\"gnapprox\":\"⪊\",\"gne\":\"⪈\",\"gnE\":\"≩\",\"gneq\":\"⪈\",\"gneqq\":\"≩\",\"gnsim\":\"⋧\",\"Gopf\":\"𝔾\",\"gopf\":\"𝕘\",\"grave\":\"`\",\"GreaterEqual\":\"≥\",\"GreaterEqualLess\":\"⋛\",\"GreaterFullEqual\":\"≧\",\"GreaterGreater\":\"⪢\",\"GreaterLess\":\"≷\",\"GreaterSlantEqual\":\"⩾\",\"GreaterTilde\":\"≳\",\"Gscr\":\"𝒢\",\"gscr\":\"ℊ\",\"gsim\":\"≳\",\"gsime\":\"⪎\",\"gsiml\":\"⪐\",\"gtcc\":\"⪧\",\"gtcir\":\"⩺\",\"gt\":\">\",\"GT\":\">\",\"Gt\":\"≫\",\"gtdot\":\"⋗\",\"gtlPar\":\"⦕\",\"gtquest\":\"⩼\",\"gtrapprox\":\"⪆\",\"gtrarr\":\"⥸\",\"gtrdot\":\"⋗\",\"gtreqless\":\"⋛\",\"gtreqqless\":\"⪌\",\"gtrless\":\"≷\",\"gtrsim\":\"≳\",\"gvertneqq\":\"≩︀\",\"gvnE\":\"≩︀\",\"Hacek\":\"ˇ\",\"hairsp\":\" \",\"half\":\"½\",\"hamilt\":\"ℋ\",\"HARDcy\":\"Ъ\",\"hardcy\":\"ъ\",\"harrcir\":\"⥈\",\"harr\":\"↔\",\"hArr\":\"⇔\",\"harrw\":\"↭\",\"Hat\":\"^\",\"hbar\":\"ℏ\",\"Hcirc\":\"Ĥ\",\"hcirc\":\"ĥ\",\"hearts\":\"♥\",\"heartsuit\":\"♥\",\"hellip\":\"…\",\"hercon\":\"⊹\",\"hfr\":\"𝔥\",\"Hfr\":\"ℌ\",\"HilbertSpace\":\"ℋ\",\"hksearow\":\"⤥\",\"hkswarow\":\"⤦\",\"hoarr\":\"⇿\",\"homtht\":\"∻\",\"hookleftarrow\":\"↩\",\"hookrightarrow\":\"↪\",\"hopf\":\"𝕙\",\"Hopf\":\"ℍ\",\"horbar\":\"―\",\"HorizontalLine\":\"─\",\"hscr\":\"𝒽\",\"Hscr\":\"ℋ\",\"hslash\":\"ℏ\",\"Hstrok\":\"Ħ\",\"hstrok\":\"ħ\",\"HumpDownHump\":\"≎\",\"HumpEqual\":\"≏\",\"hybull\":\"⁃\",\"hyphen\":\"‐\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"ic\":\"⁣\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"Icy\":\"И\",\"icy\":\"и\",\"Idot\":\"İ\",\"IEcy\":\"Е\",\"iecy\":\"е\",\"iexcl\":\"¡\",\"iff\":\"⇔\",\"ifr\":\"𝔦\",\"Ifr\":\"ℑ\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"ii\":\"ⅈ\",\"iiiint\":\"⨌\",\"iiint\":\"∭\",\"iinfin\":\"⧜\",\"iiota\":\"℩\",\"IJlig\":\"Ĳ\",\"ijlig\":\"ĳ\",\"Imacr\":\"Ī\",\"imacr\":\"ī\",\"image\":\"ℑ\",\"ImaginaryI\":\"ⅈ\",\"imagline\":\"ℐ\",\"imagpart\":\"ℑ\",\"imath\":\"ı\",\"Im\":\"ℑ\",\"imof\":\"⊷\",\"imped\":\"Ƶ\",\"Implies\":\"⇒\",\"incare\":\"℅\",\"in\":\"∈\",\"infin\":\"∞\",\"infintie\":\"⧝\",\"inodot\":\"ı\",\"intcal\":\"⊺\",\"int\":\"∫\",\"Int\":\"∬\",\"integers\":\"ℤ\",\"Integral\":\"∫\",\"intercal\":\"⊺\",\"Intersection\":\"⋂\",\"intlarhk\":\"⨗\",\"intprod\":\"⨼\",\"InvisibleComma\":\"⁣\",\"InvisibleTimes\":\"⁢\",\"IOcy\":\"Ё\",\"iocy\":\"ё\",\"Iogon\":\"Į\",\"iogon\":\"į\",\"Iopf\":\"𝕀\",\"iopf\":\"𝕚\",\"Iota\":\"Ι\",\"iota\":\"ι\",\"iprod\":\"⨼\",\"iquest\":\"¿\",\"iscr\":\"𝒾\",\"Iscr\":\"ℐ\",\"isin\":\"∈\",\"isindot\":\"⋵\",\"isinE\":\"⋹\",\"isins\":\"⋴\",\"isinsv\":\"⋳\",\"isinv\":\"∈\",\"it\":\"⁢\",\"Itilde\":\"Ĩ\",\"itilde\":\"ĩ\",\"Iukcy\":\"І\",\"iukcy\":\"і\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"Jcirc\":\"Ĵ\",\"jcirc\":\"ĵ\",\"Jcy\":\"Й\",\"jcy\":\"й\",\"Jfr\":\"𝔍\",\"jfr\":\"𝔧\",\"jmath\":\"ȷ\",\"Jopf\":\"𝕁\",\"jopf\":\"𝕛\",\"Jscr\":\"𝒥\",\"jscr\":\"𝒿\",\"Jsercy\":\"Ј\",\"jsercy\":\"ј\",\"Jukcy\":\"Є\",\"jukcy\":\"є\",\"Kappa\":\"Κ\",\"kappa\":\"κ\",\"kappav\":\"ϰ\",\"Kcedil\":\"Ķ\",\"kcedil\":\"ķ\",\"Kcy\":\"К\",\"kcy\":\"к\",\"Kfr\":\"𝔎\",\"kfr\":\"𝔨\",\"kgreen\":\"ĸ\",\"KHcy\":\"Х\",\"khcy\":\"х\",\"KJcy\":\"Ќ\",\"kjcy\":\"ќ\",\"Kopf\":\"𝕂\",\"kopf\":\"𝕜\",\"Kscr\":\"𝒦\",\"kscr\":\"𝓀\",\"lAarr\":\"⇚\",\"Lacute\":\"Ĺ\",\"lacute\":\"ĺ\",\"laemptyv\":\"⦴\",\"lagran\":\"ℒ\",\"Lambda\":\"Λ\",\"lambda\":\"λ\",\"lang\":\"⟨\",\"Lang\":\"⟪\",\"langd\":\"⦑\",\"langle\":\"⟨\",\"lap\":\"⪅\",\"Laplacetrf\":\"ℒ\",\"laquo\":\"«\",\"larrb\":\"⇤\",\"larrbfs\":\"⤟\",\"larr\":\"←\",\"Larr\":\"↞\",\"lArr\":\"⇐\",\"larrfs\":\"⤝\",\"larrhk\":\"↩\",\"larrlp\":\"↫\",\"larrpl\":\"⤹\",\"larrsim\":\"⥳\",\"larrtl\":\"↢\",\"latail\":\"⤙\",\"lAtail\":\"⤛\",\"lat\":\"⪫\",\"late\":\"⪭\",\"lates\":\"⪭︀\",\"lbarr\":\"⤌\",\"lBarr\":\"⤎\",\"lbbrk\":\"❲\",\"lbrace\":\"{\",\"lbrack\":\"[\",\"lbrke\":\"⦋\",\"lbrksld\":\"⦏\",\"lbrkslu\":\"⦍\",\"Lcaron\":\"Ľ\",\"lcaron\":\"ľ\",\"Lcedil\":\"Ļ\",\"lcedil\":\"ļ\",\"lceil\":\"⌈\",\"lcub\":\"{\",\"Lcy\":\"Л\",\"lcy\":\"л\",\"ldca\":\"⤶\",\"ldquo\":\"“\",\"ldquor\":\"„\",\"ldrdhar\":\"⥧\",\"ldrushar\":\"⥋\",\"ldsh\":\"↲\",\"le\":\"≤\",\"lE\":\"≦\",\"LeftAngleBracket\":\"⟨\",\"LeftArrowBar\":\"⇤\",\"leftarrow\":\"←\",\"LeftArrow\":\"←\",\"Leftarrow\":\"⇐\",\"LeftArrowRightArrow\":\"⇆\",\"leftarrowtail\":\"↢\",\"LeftCeiling\":\"⌈\",\"LeftDoubleBracket\":\"⟦\",\"LeftDownTeeVector\":\"⥡\",\"LeftDownVectorBar\":\"⥙\",\"LeftDownVector\":\"⇃\",\"LeftFloor\":\"⌊\",\"leftharpoondown\":\"↽\",\"leftharpoonup\":\"↼\",\"leftleftarrows\":\"⇇\",\"leftrightarrow\":\"↔\",\"LeftRightArrow\":\"↔\",\"Leftrightarrow\":\"⇔\",\"leftrightarrows\":\"⇆\",\"leftrightharpoons\":\"⇋\",\"leftrightsquigarrow\":\"↭\",\"LeftRightVector\":\"⥎\",\"LeftTeeArrow\":\"↤\",\"LeftTee\":\"⊣\",\"LeftTeeVector\":\"⥚\",\"leftthreetimes\":\"⋋\",\"LeftTriangleBar\":\"⧏\",\"LeftTriangle\":\"⊲\",\"LeftTriangleEqual\":\"⊴\",\"LeftUpDownVector\":\"⥑\",\"LeftUpTeeVector\":\"⥠\",\"LeftUpVectorBar\":\"⥘\",\"LeftUpVector\":\"↿\",\"LeftVectorBar\":\"⥒\",\"LeftVector\":\"↼\",\"lEg\":\"⪋\",\"leg\":\"⋚\",\"leq\":\"≤\",\"leqq\":\"≦\",\"leqslant\":\"⩽\",\"lescc\":\"⪨\",\"les\":\"⩽\",\"lesdot\":\"⩿\",\"lesdoto\":\"⪁\",\"lesdotor\":\"⪃\",\"lesg\":\"⋚︀\",\"lesges\":\"⪓\",\"lessapprox\":\"⪅\",\"lessdot\":\"⋖\",\"lesseqgtr\":\"⋚\",\"lesseqqgtr\":\"⪋\",\"LessEqualGreater\":\"⋚\",\"LessFullEqual\":\"≦\",\"LessGreater\":\"≶\",\"lessgtr\":\"≶\",\"LessLess\":\"⪡\",\"lesssim\":\"≲\",\"LessSlantEqual\":\"⩽\",\"LessTilde\":\"≲\",\"lfisht\":\"⥼\",\"lfloor\":\"⌊\",\"Lfr\":\"𝔏\",\"lfr\":\"𝔩\",\"lg\":\"≶\",\"lgE\":\"⪑\",\"lHar\":\"⥢\",\"lhard\":\"↽\",\"lharu\":\"↼\",\"lharul\":\"⥪\",\"lhblk\":\"▄\",\"LJcy\":\"Љ\",\"ljcy\":\"љ\",\"llarr\":\"⇇\",\"ll\":\"≪\",\"Ll\":\"⋘\",\"llcorner\":\"⌞\",\"Lleftarrow\":\"⇚\",\"llhard\":\"⥫\",\"lltri\":\"◺\",\"Lmidot\":\"Ŀ\",\"lmidot\":\"ŀ\",\"lmoustache\":\"⎰\",\"lmoust\":\"⎰\",\"lnap\":\"⪉\",\"lnapprox\":\"⪉\",\"lne\":\"⪇\",\"lnE\":\"≨\",\"lneq\":\"⪇\",\"lneqq\":\"≨\",\"lnsim\":\"⋦\",\"loang\":\"⟬\",\"loarr\":\"⇽\",\"lobrk\":\"⟦\",\"longleftarrow\":\"⟵\",\"LongLeftArrow\":\"⟵\",\"Longleftarrow\":\"⟸\",\"longleftrightarrow\":\"⟷\",\"LongLeftRightArrow\":\"⟷\",\"Longleftrightarrow\":\"⟺\",\"longmapsto\":\"⟼\",\"longrightarrow\":\"⟶\",\"LongRightArrow\":\"⟶\",\"Longrightarrow\":\"⟹\",\"looparrowleft\":\"↫\",\"looparrowright\":\"↬\",\"lopar\":\"⦅\",\"Lopf\":\"𝕃\",\"lopf\":\"𝕝\",\"loplus\":\"⨭\",\"lotimes\":\"⨴\",\"lowast\":\"∗\",\"lowbar\":\"_\",\"LowerLeftArrow\":\"↙\",\"LowerRightArrow\":\"↘\",\"loz\":\"◊\",\"lozenge\":\"◊\",\"lozf\":\"⧫\",\"lpar\":\"(\",\"lparlt\":\"⦓\",\"lrarr\":\"⇆\",\"lrcorner\":\"⌟\",\"lrhar\":\"⇋\",\"lrhard\":\"⥭\",\"lrm\":\"‎\",\"lrtri\":\"⊿\",\"lsaquo\":\"‹\",\"lscr\":\"𝓁\",\"Lscr\":\"ℒ\",\"lsh\":\"↰\",\"Lsh\":\"↰\",\"lsim\":\"≲\",\"lsime\":\"⪍\",\"lsimg\":\"⪏\",\"lsqb\":\"[\",\"lsquo\":\"‘\",\"lsquor\":\"‚\",\"Lstrok\":\"Ł\",\"lstrok\":\"ł\",\"ltcc\":\"⪦\",\"ltcir\":\"⩹\",\"lt\":\"<\",\"LT\":\"<\",\"Lt\":\"≪\",\"ltdot\":\"⋖\",\"lthree\":\"⋋\",\"ltimes\":\"⋉\",\"ltlarr\":\"⥶\",\"ltquest\":\"⩻\",\"ltri\":\"◃\",\"ltrie\":\"⊴\",\"ltrif\":\"◂\",\"ltrPar\":\"⦖\",\"lurdshar\":\"⥊\",\"luruhar\":\"⥦\",\"lvertneqq\":\"≨︀\",\"lvnE\":\"≨︀\",\"macr\":\"¯\",\"male\":\"♂\",\"malt\":\"✠\",\"maltese\":\"✠\",\"Map\":\"⤅\",\"map\":\"↦\",\"mapsto\":\"↦\",\"mapstodown\":\"↧\",\"mapstoleft\":\"↤\",\"mapstoup\":\"↥\",\"marker\":\"▮\",\"mcomma\":\"⨩\",\"Mcy\":\"М\",\"mcy\":\"м\",\"mdash\":\"—\",\"mDDot\":\"∺\",\"measuredangle\":\"∡\",\"MediumSpace\":\" \",\"Mellintrf\":\"ℳ\",\"Mfr\":\"𝔐\",\"mfr\":\"𝔪\",\"mho\":\"℧\",\"micro\":\"µ\",\"midast\":\"*\",\"midcir\":\"⫰\",\"mid\":\"∣\",\"middot\":\"·\",\"minusb\":\"⊟\",\"minus\":\"−\",\"minusd\":\"∸\",\"minusdu\":\"⨪\",\"MinusPlus\":\"∓\",\"mlcp\":\"⫛\",\"mldr\":\"…\",\"mnplus\":\"∓\",\"models\":\"⊧\",\"Mopf\":\"𝕄\",\"mopf\":\"𝕞\",\"mp\":\"∓\",\"mscr\":\"𝓂\",\"Mscr\":\"ℳ\",\"mstpos\":\"∾\",\"Mu\":\"Μ\",\"mu\":\"μ\",\"multimap\":\"⊸\",\"mumap\":\"⊸\",\"nabla\":\"∇\",\"Nacute\":\"Ń\",\"nacute\":\"ń\",\"nang\":\"∠⃒\",\"nap\":\"≉\",\"napE\":\"⩰̸\",\"napid\":\"≋̸\",\"napos\":\"ŉ\",\"napprox\":\"≉\",\"natural\":\"♮\",\"naturals\":\"ℕ\",\"natur\":\"♮\",\"nbsp\":\" \",\"nbump\":\"≎̸\",\"nbumpe\":\"≏̸\",\"ncap\":\"⩃\",\"Ncaron\":\"Ň\",\"ncaron\":\"ň\",\"Ncedil\":\"Ņ\",\"ncedil\":\"ņ\",\"ncong\":\"≇\",\"ncongdot\":\"⩭̸\",\"ncup\":\"⩂\",\"Ncy\":\"Н\",\"ncy\":\"н\",\"ndash\":\"–\",\"nearhk\":\"⤤\",\"nearr\":\"↗\",\"neArr\":\"⇗\",\"nearrow\":\"↗\",\"ne\":\"≠\",\"nedot\":\"≐̸\",\"NegativeMediumSpace\":\"​\",\"NegativeThickSpace\":\"​\",\"NegativeThinSpace\":\"​\",\"NegativeVeryThinSpace\":\"​\",\"nequiv\":\"≢\",\"nesear\":\"⤨\",\"nesim\":\"≂̸\",\"NestedGreaterGreater\":\"≫\",\"NestedLessLess\":\"≪\",\"NewLine\":\"\\n\",\"nexist\":\"∄\",\"nexists\":\"∄\",\"Nfr\":\"𝔑\",\"nfr\":\"𝔫\",\"ngE\":\"≧̸\",\"nge\":\"≱\",\"ngeq\":\"≱\",\"ngeqq\":\"≧̸\",\"ngeqslant\":\"⩾̸\",\"nges\":\"⩾̸\",\"nGg\":\"⋙̸\",\"ngsim\":\"≵\",\"nGt\":\"≫⃒\",\"ngt\":\"≯\",\"ngtr\":\"≯\",\"nGtv\":\"≫̸\",\"nharr\":\"↮\",\"nhArr\":\"⇎\",\"nhpar\":\"⫲\",\"ni\":\"∋\",\"nis\":\"⋼\",\"nisd\":\"⋺\",\"niv\":\"∋\",\"NJcy\":\"Њ\",\"njcy\":\"њ\",\"nlarr\":\"↚\",\"nlArr\":\"⇍\",\"nldr\":\"‥\",\"nlE\":\"≦̸\",\"nle\":\"≰\",\"nleftarrow\":\"↚\",\"nLeftarrow\":\"⇍\",\"nleftrightarrow\":\"↮\",\"nLeftrightarrow\":\"⇎\",\"nleq\":\"≰\",\"nleqq\":\"≦̸\",\"nleqslant\":\"⩽̸\",\"nles\":\"⩽̸\",\"nless\":\"≮\",\"nLl\":\"⋘̸\",\"nlsim\":\"≴\",\"nLt\":\"≪⃒\",\"nlt\":\"≮\",\"nltri\":\"⋪\",\"nltrie\":\"⋬\",\"nLtv\":\"≪̸\",\"nmid\":\"∤\",\"NoBreak\":\"⁠\",\"NonBreakingSpace\":\" \",\"nopf\":\"𝕟\",\"Nopf\":\"ℕ\",\"Not\":\"⫬\",\"not\":\"¬\",\"NotCongruent\":\"≢\",\"NotCupCap\":\"≭\",\"NotDoubleVerticalBar\":\"∦\",\"NotElement\":\"∉\",\"NotEqual\":\"≠\",\"NotEqualTilde\":\"≂̸\",\"NotExists\":\"∄\",\"NotGreater\":\"≯\",\"NotGreaterEqual\":\"≱\",\"NotGreaterFullEqual\":\"≧̸\",\"NotGreaterGreater\":\"≫̸\",\"NotGreaterLess\":\"≹\",\"NotGreaterSlantEqual\":\"⩾̸\",\"NotGreaterTilde\":\"≵\",\"NotHumpDownHump\":\"≎̸\",\"NotHumpEqual\":\"≏̸\",\"notin\":\"∉\",\"notindot\":\"⋵̸\",\"notinE\":\"⋹̸\",\"notinva\":\"∉\",\"notinvb\":\"⋷\",\"notinvc\":\"⋶\",\"NotLeftTriangleBar\":\"⧏̸\",\"NotLeftTriangle\":\"⋪\",\"NotLeftTriangleEqual\":\"⋬\",\"NotLess\":\"≮\",\"NotLessEqual\":\"≰\",\"NotLessGreater\":\"≸\",\"NotLessLess\":\"≪̸\",\"NotLessSlantEqual\":\"⩽̸\",\"NotLessTilde\":\"≴\",\"NotNestedGreaterGreater\":\"⪢̸\",\"NotNestedLessLess\":\"⪡̸\",\"notni\":\"∌\",\"notniva\":\"∌\",\"notnivb\":\"⋾\",\"notnivc\":\"⋽\",\"NotPrecedes\":\"⊀\",\"NotPrecedesEqual\":\"⪯̸\",\"NotPrecedesSlantEqual\":\"⋠\",\"NotReverseElement\":\"∌\",\"NotRightTriangleBar\":\"⧐̸\",\"NotRightTriangle\":\"⋫\",\"NotRightTriangleEqual\":\"⋭\",\"NotSquareSubset\":\"⊏̸\",\"NotSquareSubsetEqual\":\"⋢\",\"NotSquareSuperset\":\"⊐̸\",\"NotSquareSupersetEqual\":\"⋣\",\"NotSubset\":\"⊂⃒\",\"NotSubsetEqual\":\"⊈\",\"NotSucceeds\":\"⊁\",\"NotSucceedsEqual\":\"⪰̸\",\"NotSucceedsSlantEqual\":\"⋡\",\"NotSucceedsTilde\":\"≿̸\",\"NotSuperset\":\"⊃⃒\",\"NotSupersetEqual\":\"⊉\",\"NotTilde\":\"≁\",\"NotTildeEqual\":\"≄\",\"NotTildeFullEqual\":\"≇\",\"NotTildeTilde\":\"≉\",\"NotVerticalBar\":\"∤\",\"nparallel\":\"∦\",\"npar\":\"∦\",\"nparsl\":\"⫽⃥\",\"npart\":\"∂̸\",\"npolint\":\"⨔\",\"npr\":\"⊀\",\"nprcue\":\"⋠\",\"nprec\":\"⊀\",\"npreceq\":\"⪯̸\",\"npre\":\"⪯̸\",\"nrarrc\":\"⤳̸\",\"nrarr\":\"↛\",\"nrArr\":\"⇏\",\"nrarrw\":\"↝̸\",\"nrightarrow\":\"↛\",\"nRightarrow\":\"⇏\",\"nrtri\":\"⋫\",\"nrtrie\":\"⋭\",\"nsc\":\"⊁\",\"nsccue\":\"⋡\",\"nsce\":\"⪰̸\",\"Nscr\":\"𝒩\",\"nscr\":\"𝓃\",\"nshortmid\":\"∤\",\"nshortparallel\":\"∦\",\"nsim\":\"≁\",\"nsime\":\"≄\",\"nsimeq\":\"≄\",\"nsmid\":\"∤\",\"nspar\":\"∦\",\"nsqsube\":\"⋢\",\"nsqsupe\":\"⋣\",\"nsub\":\"⊄\",\"nsubE\":\"⫅̸\",\"nsube\":\"⊈\",\"nsubset\":\"⊂⃒\",\"nsubseteq\":\"⊈\",\"nsubseteqq\":\"⫅̸\",\"nsucc\":\"⊁\",\"nsucceq\":\"⪰̸\",\"nsup\":\"⊅\",\"nsupE\":\"⫆̸\",\"nsupe\":\"⊉\",\"nsupset\":\"⊃⃒\",\"nsupseteq\":\"⊉\",\"nsupseteqq\":\"⫆̸\",\"ntgl\":\"≹\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"ntlg\":\"≸\",\"ntriangleleft\":\"⋪\",\"ntrianglelefteq\":\"⋬\",\"ntriangleright\":\"⋫\",\"ntrianglerighteq\":\"⋭\",\"Nu\":\"Ν\",\"nu\":\"ν\",\"num\":\"#\",\"numero\":\"№\",\"numsp\":\" \",\"nvap\":\"≍⃒\",\"nvdash\":\"⊬\",\"nvDash\":\"⊭\",\"nVdash\":\"⊮\",\"nVDash\":\"⊯\",\"nvge\":\"≥⃒\",\"nvgt\":\">⃒\",\"nvHarr\":\"⤄\",\"nvinfin\":\"⧞\",\"nvlArr\":\"⤂\",\"nvle\":\"≤⃒\",\"nvlt\":\"<⃒\",\"nvltrie\":\"⊴⃒\",\"nvrArr\":\"⤃\",\"nvrtrie\":\"⊵⃒\",\"nvsim\":\"∼⃒\",\"nwarhk\":\"⤣\",\"nwarr\":\"↖\",\"nwArr\":\"⇖\",\"nwarrow\":\"↖\",\"nwnear\":\"⤧\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"oast\":\"⊛\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"ocir\":\"⊚\",\"Ocy\":\"О\",\"ocy\":\"о\",\"odash\":\"⊝\",\"Odblac\":\"Ő\",\"odblac\":\"ő\",\"odiv\":\"⨸\",\"odot\":\"⊙\",\"odsold\":\"⦼\",\"OElig\":\"Œ\",\"oelig\":\"œ\",\"ofcir\":\"⦿\",\"Ofr\":\"𝔒\",\"ofr\":\"𝔬\",\"ogon\":\"˛\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ogt\":\"⧁\",\"ohbar\":\"⦵\",\"ohm\":\"Ω\",\"oint\":\"∮\",\"olarr\":\"↺\",\"olcir\":\"⦾\",\"olcross\":\"⦻\",\"oline\":\"‾\",\"olt\":\"⧀\",\"Omacr\":\"Ō\",\"omacr\":\"ō\",\"Omega\":\"Ω\",\"omega\":\"ω\",\"Omicron\":\"Ο\",\"omicron\":\"ο\",\"omid\":\"⦶\",\"ominus\":\"⊖\",\"Oopf\":\"𝕆\",\"oopf\":\"𝕠\",\"opar\":\"⦷\",\"OpenCurlyDoubleQuote\":\"“\",\"OpenCurlyQuote\":\"‘\",\"operp\":\"⦹\",\"oplus\":\"⊕\",\"orarr\":\"↻\",\"Or\":\"⩔\",\"or\":\"∨\",\"ord\":\"⩝\",\"order\":\"ℴ\",\"orderof\":\"ℴ\",\"ordf\":\"ª\",\"ordm\":\"º\",\"origof\":\"⊶\",\"oror\":\"⩖\",\"orslope\":\"⩗\",\"orv\":\"⩛\",\"oS\":\"Ⓢ\",\"Oscr\":\"𝒪\",\"oscr\":\"ℴ\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"osol\":\"⊘\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"otimesas\":\"⨶\",\"Otimes\":\"⨷\",\"otimes\":\"⊗\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"ovbar\":\"⌽\",\"OverBar\":\"‾\",\"OverBrace\":\"⏞\",\"OverBracket\":\"⎴\",\"OverParenthesis\":\"⏜\",\"para\":\"¶\",\"parallel\":\"∥\",\"par\":\"∥\",\"parsim\":\"⫳\",\"parsl\":\"⫽\",\"part\":\"∂\",\"PartialD\":\"∂\",\"Pcy\":\"П\",\"pcy\":\"п\",\"percnt\":\"%\",\"period\":\".\",\"permil\":\"‰\",\"perp\":\"⊥\",\"pertenk\":\"‱\",\"Pfr\":\"𝔓\",\"pfr\":\"𝔭\",\"Phi\":\"Φ\",\"phi\":\"φ\",\"phiv\":\"ϕ\",\"phmmat\":\"ℳ\",\"phone\":\"☎\",\"Pi\":\"Π\",\"pi\":\"π\",\"pitchfork\":\"⋔\",\"piv\":\"ϖ\",\"planck\":\"ℏ\",\"planckh\":\"ℎ\",\"plankv\":\"ℏ\",\"plusacir\":\"⨣\",\"plusb\":\"⊞\",\"pluscir\":\"⨢\",\"plus\":\"+\",\"plusdo\":\"∔\",\"plusdu\":\"⨥\",\"pluse\":\"⩲\",\"PlusMinus\":\"±\",\"plusmn\":\"±\",\"plussim\":\"⨦\",\"plustwo\":\"⨧\",\"pm\":\"±\",\"Poincareplane\":\"ℌ\",\"pointint\":\"⨕\",\"popf\":\"𝕡\",\"Popf\":\"ℙ\",\"pound\":\"£\",\"prap\":\"⪷\",\"Pr\":\"⪻\",\"pr\":\"≺\",\"prcue\":\"≼\",\"precapprox\":\"⪷\",\"prec\":\"≺\",\"preccurlyeq\":\"≼\",\"Precedes\":\"≺\",\"PrecedesEqual\":\"⪯\",\"PrecedesSlantEqual\":\"≼\",\"PrecedesTilde\":\"≾\",\"preceq\":\"⪯\",\"precnapprox\":\"⪹\",\"precneqq\":\"⪵\",\"precnsim\":\"⋨\",\"pre\":\"⪯\",\"prE\":\"⪳\",\"precsim\":\"≾\",\"prime\":\"′\",\"Prime\":\"″\",\"primes\":\"ℙ\",\"prnap\":\"⪹\",\"prnE\":\"⪵\",\"prnsim\":\"⋨\",\"prod\":\"∏\",\"Product\":\"∏\",\"profalar\":\"⌮\",\"profline\":\"⌒\",\"profsurf\":\"⌓\",\"prop\":\"∝\",\"Proportional\":\"∝\",\"Proportion\":\"∷\",\"propto\":\"∝\",\"prsim\":\"≾\",\"prurel\":\"⊰\",\"Pscr\":\"𝒫\",\"pscr\":\"𝓅\",\"Psi\":\"Ψ\",\"psi\":\"ψ\",\"puncsp\":\" \",\"Qfr\":\"𝔔\",\"qfr\":\"𝔮\",\"qint\":\"⨌\",\"qopf\":\"𝕢\",\"Qopf\":\"ℚ\",\"qprime\":\"⁗\",\"Qscr\":\"𝒬\",\"qscr\":\"𝓆\",\"quaternions\":\"ℍ\",\"quatint\":\"⨖\",\"quest\":\"?\",\"questeq\":\"≟\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"rAarr\":\"⇛\",\"race\":\"∽̱\",\"Racute\":\"Ŕ\",\"racute\":\"ŕ\",\"radic\":\"√\",\"raemptyv\":\"⦳\",\"rang\":\"⟩\",\"Rang\":\"⟫\",\"rangd\":\"⦒\",\"range\":\"⦥\",\"rangle\":\"⟩\",\"raquo\":\"»\",\"rarrap\":\"⥵\",\"rarrb\":\"⇥\",\"rarrbfs\":\"⤠\",\"rarrc\":\"⤳\",\"rarr\":\"→\",\"Rarr\":\"↠\",\"rArr\":\"⇒\",\"rarrfs\":\"⤞\",\"rarrhk\":\"↪\",\"rarrlp\":\"↬\",\"rarrpl\":\"⥅\",\"rarrsim\":\"⥴\",\"Rarrtl\":\"⤖\",\"rarrtl\":\"↣\",\"rarrw\":\"↝\",\"ratail\":\"⤚\",\"rAtail\":\"⤜\",\"ratio\":\"∶\",\"rationals\":\"ℚ\",\"rbarr\":\"⤍\",\"rBarr\":\"⤏\",\"RBarr\":\"⤐\",\"rbbrk\":\"❳\",\"rbrace\":\"}\",\"rbrack\":\"]\",\"rbrke\":\"⦌\",\"rbrksld\":\"⦎\",\"rbrkslu\":\"⦐\",\"Rcaron\":\"Ř\",\"rcaron\":\"ř\",\"Rcedil\":\"Ŗ\",\"rcedil\":\"ŗ\",\"rceil\":\"⌉\",\"rcub\":\"}\",\"Rcy\":\"Р\",\"rcy\":\"р\",\"rdca\":\"⤷\",\"rdldhar\":\"⥩\",\"rdquo\":\"”\",\"rdquor\":\"”\",\"rdsh\":\"↳\",\"real\":\"ℜ\",\"realine\":\"ℛ\",\"realpart\":\"ℜ\",\"reals\":\"ℝ\",\"Re\":\"ℜ\",\"rect\":\"▭\",\"reg\":\"®\",\"REG\":\"®\",\"ReverseElement\":\"∋\",\"ReverseEquilibrium\":\"⇋\",\"ReverseUpEquilibrium\":\"⥯\",\"rfisht\":\"⥽\",\"rfloor\":\"⌋\",\"rfr\":\"𝔯\",\"Rfr\":\"ℜ\",\"rHar\":\"⥤\",\"rhard\":\"⇁\",\"rharu\":\"⇀\",\"rharul\":\"⥬\",\"Rho\":\"Ρ\",\"rho\":\"ρ\",\"rhov\":\"ϱ\",\"RightAngleBracket\":\"⟩\",\"RightArrowBar\":\"⇥\",\"rightarrow\":\"→\",\"RightArrow\":\"→\",\"Rightarrow\":\"⇒\",\"RightArrowLeftArrow\":\"⇄\",\"rightarrowtail\":\"↣\",\"RightCeiling\":\"⌉\",\"RightDoubleBracket\":\"⟧\",\"RightDownTeeVector\":\"⥝\",\"RightDownVectorBar\":\"⥕\",\"RightDownVector\":\"⇂\",\"RightFloor\":\"⌋\",\"rightharpoondown\":\"⇁\",\"rightharpoonup\":\"⇀\",\"rightleftarrows\":\"⇄\",\"rightleftharpoons\":\"⇌\",\"rightrightarrows\":\"⇉\",\"rightsquigarrow\":\"↝\",\"RightTeeArrow\":\"↦\",\"RightTee\":\"⊢\",\"RightTeeVector\":\"⥛\",\"rightthreetimes\":\"⋌\",\"RightTriangleBar\":\"⧐\",\"RightTriangle\":\"⊳\",\"RightTriangleEqual\":\"⊵\",\"RightUpDownVector\":\"⥏\",\"RightUpTeeVector\":\"⥜\",\"RightUpVectorBar\":\"⥔\",\"RightUpVector\":\"↾\",\"RightVectorBar\":\"⥓\",\"RightVector\":\"⇀\",\"ring\":\"˚\",\"risingdotseq\":\"≓\",\"rlarr\":\"⇄\",\"rlhar\":\"⇌\",\"rlm\":\"‏\",\"rmoustache\":\"⎱\",\"rmoust\":\"⎱\",\"rnmid\":\"⫮\",\"roang\":\"⟭\",\"roarr\":\"⇾\",\"robrk\":\"⟧\",\"ropar\":\"⦆\",\"ropf\":\"𝕣\",\"Ropf\":\"ℝ\",\"roplus\":\"⨮\",\"rotimes\":\"⨵\",\"RoundImplies\":\"⥰\",\"rpar\":\")\",\"rpargt\":\"⦔\",\"rppolint\":\"⨒\",\"rrarr\":\"⇉\",\"Rrightarrow\":\"⇛\",\"rsaquo\":\"›\",\"rscr\":\"𝓇\",\"Rscr\":\"ℛ\",\"rsh\":\"↱\",\"Rsh\":\"↱\",\"rsqb\":\"]\",\"rsquo\":\"’\",\"rsquor\":\"’\",\"rthree\":\"⋌\",\"rtimes\":\"⋊\",\"rtri\":\"▹\",\"rtrie\":\"⊵\",\"rtrif\":\"▸\",\"rtriltri\":\"⧎\",\"RuleDelayed\":\"⧴\",\"ruluhar\":\"⥨\",\"rx\":\"℞\",\"Sacute\":\"Ś\",\"sacute\":\"ś\",\"sbquo\":\"‚\",\"scap\":\"⪸\",\"Scaron\":\"Š\",\"scaron\":\"š\",\"Sc\":\"⪼\",\"sc\":\"≻\",\"sccue\":\"≽\",\"sce\":\"⪰\",\"scE\":\"⪴\",\"Scedil\":\"Ş\",\"scedil\":\"ş\",\"Scirc\":\"Ŝ\",\"scirc\":\"ŝ\",\"scnap\":\"⪺\",\"scnE\":\"⪶\",\"scnsim\":\"⋩\",\"scpolint\":\"⨓\",\"scsim\":\"≿\",\"Scy\":\"С\",\"scy\":\"с\",\"sdotb\":\"⊡\",\"sdot\":\"⋅\",\"sdote\":\"⩦\",\"searhk\":\"⤥\",\"searr\":\"↘\",\"seArr\":\"⇘\",\"searrow\":\"↘\",\"sect\":\"§\",\"semi\":\";\",\"seswar\":\"⤩\",\"setminus\":\"∖\",\"setmn\":\"∖\",\"sext\":\"✶\",\"Sfr\":\"𝔖\",\"sfr\":\"𝔰\",\"sfrown\":\"⌢\",\"sharp\":\"♯\",\"SHCHcy\":\"Щ\",\"shchcy\":\"щ\",\"SHcy\":\"Ш\",\"shcy\":\"ш\",\"ShortDownArrow\":\"↓\",\"ShortLeftArrow\":\"←\",\"shortmid\":\"∣\",\"shortparallel\":\"∥\",\"ShortRightArrow\":\"→\",\"ShortUpArrow\":\"↑\",\"shy\":\"­\",\"Sigma\":\"Σ\",\"sigma\":\"σ\",\"sigmaf\":\"ς\",\"sigmav\":\"ς\",\"sim\":\"∼\",\"simdot\":\"⩪\",\"sime\":\"≃\",\"simeq\":\"≃\",\"simg\":\"⪞\",\"simgE\":\"⪠\",\"siml\":\"⪝\",\"simlE\":\"⪟\",\"simne\":\"≆\",\"simplus\":\"⨤\",\"simrarr\":\"⥲\",\"slarr\":\"←\",\"SmallCircle\":\"∘\",\"smallsetminus\":\"∖\",\"smashp\":\"⨳\",\"smeparsl\":\"⧤\",\"smid\":\"∣\",\"smile\":\"⌣\",\"smt\":\"⪪\",\"smte\":\"⪬\",\"smtes\":\"⪬︀\",\"SOFTcy\":\"Ь\",\"softcy\":\"ь\",\"solbar\":\"⌿\",\"solb\":\"⧄\",\"sol\":\"/\",\"Sopf\":\"𝕊\",\"sopf\":\"𝕤\",\"spades\":\"♠\",\"spadesuit\":\"♠\",\"spar\":\"∥\",\"sqcap\":\"⊓\",\"sqcaps\":\"⊓︀\",\"sqcup\":\"⊔\",\"sqcups\":\"⊔︀\",\"Sqrt\":\"√\",\"sqsub\":\"⊏\",\"sqsube\":\"⊑\",\"sqsubset\":\"⊏\",\"sqsubseteq\":\"⊑\",\"sqsup\":\"⊐\",\"sqsupe\":\"⊒\",\"sqsupset\":\"⊐\",\"sqsupseteq\":\"⊒\",\"square\":\"□\",\"Square\":\"□\",\"SquareIntersection\":\"⊓\",\"SquareSubset\":\"⊏\",\"SquareSubsetEqual\":\"⊑\",\"SquareSuperset\":\"⊐\",\"SquareSupersetEqual\":\"⊒\",\"SquareUnion\":\"⊔\",\"squarf\":\"▪\",\"squ\":\"□\",\"squf\":\"▪\",\"srarr\":\"→\",\"Sscr\":\"𝒮\",\"sscr\":\"𝓈\",\"ssetmn\":\"∖\",\"ssmile\":\"⌣\",\"sstarf\":\"⋆\",\"Star\":\"⋆\",\"star\":\"☆\",\"starf\":\"★\",\"straightepsilon\":\"ϵ\",\"straightphi\":\"ϕ\",\"strns\":\"¯\",\"sub\":\"⊂\",\"Sub\":\"⋐\",\"subdot\":\"⪽\",\"subE\":\"⫅\",\"sube\":\"⊆\",\"subedot\":\"⫃\",\"submult\":\"⫁\",\"subnE\":\"⫋\",\"subne\":\"⊊\",\"subplus\":\"⪿\",\"subrarr\":\"⥹\",\"subset\":\"⊂\",\"Subset\":\"⋐\",\"subseteq\":\"⊆\",\"subseteqq\":\"⫅\",\"SubsetEqual\":\"⊆\",\"subsetneq\":\"⊊\",\"subsetneqq\":\"⫋\",\"subsim\":\"⫇\",\"subsub\":\"⫕\",\"subsup\":\"⫓\",\"succapprox\":\"⪸\",\"succ\":\"≻\",\"succcurlyeq\":\"≽\",\"Succeeds\":\"≻\",\"SucceedsEqual\":\"⪰\",\"SucceedsSlantEqual\":\"≽\",\"SucceedsTilde\":\"≿\",\"succeq\":\"⪰\",\"succnapprox\":\"⪺\",\"succneqq\":\"⪶\",\"succnsim\":\"⋩\",\"succsim\":\"≿\",\"SuchThat\":\"∋\",\"sum\":\"∑\",\"Sum\":\"∑\",\"sung\":\"♪\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"sup\":\"⊃\",\"Sup\":\"⋑\",\"supdot\":\"⪾\",\"supdsub\":\"⫘\",\"supE\":\"⫆\",\"supe\":\"⊇\",\"supedot\":\"⫄\",\"Superset\":\"⊃\",\"SupersetEqual\":\"⊇\",\"suphsol\":\"⟉\",\"suphsub\":\"⫗\",\"suplarr\":\"⥻\",\"supmult\":\"⫂\",\"supnE\":\"⫌\",\"supne\":\"⊋\",\"supplus\":\"⫀\",\"supset\":\"⊃\",\"Supset\":\"⋑\",\"supseteq\":\"⊇\",\"supseteqq\":\"⫆\",\"supsetneq\":\"⊋\",\"supsetneqq\":\"⫌\",\"supsim\":\"⫈\",\"supsub\":\"⫔\",\"supsup\":\"⫖\",\"swarhk\":\"⤦\",\"swarr\":\"↙\",\"swArr\":\"⇙\",\"swarrow\":\"↙\",\"swnwar\":\"⤪\",\"szlig\":\"ß\",\"Tab\":\"\\t\",\"target\":\"⌖\",\"Tau\":\"Τ\",\"tau\":\"τ\",\"tbrk\":\"⎴\",\"Tcaron\":\"Ť\",\"tcaron\":\"ť\",\"Tcedil\":\"Ţ\",\"tcedil\":\"ţ\",\"Tcy\":\"Т\",\"tcy\":\"т\",\"tdot\":\"⃛\",\"telrec\":\"⌕\",\"Tfr\":\"𝔗\",\"tfr\":\"𝔱\",\"there4\":\"∴\",\"therefore\":\"∴\",\"Therefore\":\"∴\",\"Theta\":\"Θ\",\"theta\":\"θ\",\"thetasym\":\"ϑ\",\"thetav\":\"ϑ\",\"thickapprox\":\"≈\",\"thicksim\":\"∼\",\"ThickSpace\":\"  \",\"ThinSpace\":\" \",\"thinsp\":\" \",\"thkap\":\"≈\",\"thksim\":\"∼\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"tilde\":\"˜\",\"Tilde\":\"∼\",\"TildeEqual\":\"≃\",\"TildeFullEqual\":\"≅\",\"TildeTilde\":\"≈\",\"timesbar\":\"⨱\",\"timesb\":\"⊠\",\"times\":\"×\",\"timesd\":\"⨰\",\"tint\":\"∭\",\"toea\":\"⤨\",\"topbot\":\"⌶\",\"topcir\":\"⫱\",\"top\":\"⊤\",\"Topf\":\"𝕋\",\"topf\":\"𝕥\",\"topfork\":\"⫚\",\"tosa\":\"⤩\",\"tprime\":\"‴\",\"trade\":\"™\",\"TRADE\":\"™\",\"triangle\":\"▵\",\"triangledown\":\"▿\",\"triangleleft\":\"◃\",\"trianglelefteq\":\"⊴\",\"triangleq\":\"≜\",\"triangleright\":\"▹\",\"trianglerighteq\":\"⊵\",\"tridot\":\"◬\",\"trie\":\"≜\",\"triminus\":\"⨺\",\"TripleDot\":\"⃛\",\"triplus\":\"⨹\",\"trisb\":\"⧍\",\"tritime\":\"⨻\",\"trpezium\":\"⏢\",\"Tscr\":\"𝒯\",\"tscr\":\"𝓉\",\"TScy\":\"Ц\",\"tscy\":\"ц\",\"TSHcy\":\"Ћ\",\"tshcy\":\"ћ\",\"Tstrok\":\"Ŧ\",\"tstrok\":\"ŧ\",\"twixt\":\"≬\",\"twoheadleftarrow\":\"↞\",\"twoheadrightarrow\":\"↠\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"uarr\":\"↑\",\"Uarr\":\"↟\",\"uArr\":\"⇑\",\"Uarrocir\":\"⥉\",\"Ubrcy\":\"Ў\",\"ubrcy\":\"ў\",\"Ubreve\":\"Ŭ\",\"ubreve\":\"ŭ\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ucy\":\"У\",\"ucy\":\"у\",\"udarr\":\"⇅\",\"Udblac\":\"Ű\",\"udblac\":\"ű\",\"udhar\":\"⥮\",\"ufisht\":\"⥾\",\"Ufr\":\"𝔘\",\"ufr\":\"𝔲\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uHar\":\"⥣\",\"uharl\":\"↿\",\"uharr\":\"↾\",\"uhblk\":\"▀\",\"ulcorn\":\"⌜\",\"ulcorner\":\"⌜\",\"ulcrop\":\"⌏\",\"ultri\":\"◸\",\"Umacr\":\"Ū\",\"umacr\":\"ū\",\"uml\":\"¨\",\"UnderBar\":\"_\",\"UnderBrace\":\"⏟\",\"UnderBracket\":\"⎵\",\"UnderParenthesis\":\"⏝\",\"Union\":\"⋃\",\"UnionPlus\":\"⊎\",\"Uogon\":\"Ų\",\"uogon\":\"ų\",\"Uopf\":\"𝕌\",\"uopf\":\"𝕦\",\"UpArrowBar\":\"⤒\",\"uparrow\":\"↑\",\"UpArrow\":\"↑\",\"Uparrow\":\"⇑\",\"UpArrowDownArrow\":\"⇅\",\"updownarrow\":\"↕\",\"UpDownArrow\":\"↕\",\"Updownarrow\":\"⇕\",\"UpEquilibrium\":\"⥮\",\"upharpoonleft\":\"↿\",\"upharpoonright\":\"↾\",\"uplus\":\"⊎\",\"UpperLeftArrow\":\"↖\",\"UpperRightArrow\":\"↗\",\"upsi\":\"υ\",\"Upsi\":\"ϒ\",\"upsih\":\"ϒ\",\"Upsilon\":\"Υ\",\"upsilon\":\"υ\",\"UpTeeArrow\":\"↥\",\"UpTee\":\"⊥\",\"upuparrows\":\"⇈\",\"urcorn\":\"⌝\",\"urcorner\":\"⌝\",\"urcrop\":\"⌎\",\"Uring\":\"Ů\",\"uring\":\"ů\",\"urtri\":\"◹\",\"Uscr\":\"𝒰\",\"uscr\":\"𝓊\",\"utdot\":\"⋰\",\"Utilde\":\"Ũ\",\"utilde\":\"ũ\",\"utri\":\"▵\",\"utrif\":\"▴\",\"uuarr\":\"⇈\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"uwangle\":\"⦧\",\"vangrt\":\"⦜\",\"varepsilon\":\"ϵ\",\"varkappa\":\"ϰ\",\"varnothing\":\"∅\",\"varphi\":\"ϕ\",\"varpi\":\"ϖ\",\"varpropto\":\"∝\",\"varr\":\"↕\",\"vArr\":\"⇕\",\"varrho\":\"ϱ\",\"varsigma\":\"ς\",\"varsubsetneq\":\"⊊︀\",\"varsubsetneqq\":\"⫋︀\",\"varsupsetneq\":\"⊋︀\",\"varsupsetneqq\":\"⫌︀\",\"vartheta\":\"ϑ\",\"vartriangleleft\":\"⊲\",\"vartriangleright\":\"⊳\",\"vBar\":\"⫨\",\"Vbar\":\"⫫\",\"vBarv\":\"⫩\",\"Vcy\":\"В\",\"vcy\":\"в\",\"vdash\":\"⊢\",\"vDash\":\"⊨\",\"Vdash\":\"⊩\",\"VDash\":\"⊫\",\"Vdashl\":\"⫦\",\"veebar\":\"⊻\",\"vee\":\"∨\",\"Vee\":\"⋁\",\"veeeq\":\"≚\",\"vellip\":\"⋮\",\"verbar\":\"|\",\"Verbar\":\"‖\",\"vert\":\"|\",\"Vert\":\"‖\",\"VerticalBar\":\"∣\",\"VerticalLine\":\"|\",\"VerticalSeparator\":\"❘\",\"VerticalTilde\":\"≀\",\"VeryThinSpace\":\" \",\"Vfr\":\"𝔙\",\"vfr\":\"𝔳\",\"vltri\":\"⊲\",\"vnsub\":\"⊂⃒\",\"vnsup\":\"⊃⃒\",\"Vopf\":\"𝕍\",\"vopf\":\"𝕧\",\"vprop\":\"∝\",\"vrtri\":\"⊳\",\"Vscr\":\"𝒱\",\"vscr\":\"𝓋\",\"vsubnE\":\"⫋︀\",\"vsubne\":\"⊊︀\",\"vsupnE\":\"⫌︀\",\"vsupne\":\"⊋︀\",\"Vvdash\":\"⊪\",\"vzigzag\":\"⦚\",\"Wcirc\":\"Ŵ\",\"wcirc\":\"ŵ\",\"wedbar\":\"⩟\",\"wedge\":\"∧\",\"Wedge\":\"⋀\",\"wedgeq\":\"≙\",\"weierp\":\"℘\",\"Wfr\":\"𝔚\",\"wfr\":\"𝔴\",\"Wopf\":\"𝕎\",\"wopf\":\"𝕨\",\"wp\":\"℘\",\"wr\":\"≀\",\"wreath\":\"≀\",\"Wscr\":\"𝒲\",\"wscr\":\"𝓌\",\"xcap\":\"⋂\",\"xcirc\":\"◯\",\"xcup\":\"⋃\",\"xdtri\":\"▽\",\"Xfr\":\"𝔛\",\"xfr\":\"𝔵\",\"xharr\":\"⟷\",\"xhArr\":\"⟺\",\"Xi\":\"Ξ\",\"xi\":\"ξ\",\"xlarr\":\"⟵\",\"xlArr\":\"⟸\",\"xmap\":\"⟼\",\"xnis\":\"⋻\",\"xodot\":\"⨀\",\"Xopf\":\"𝕏\",\"xopf\":\"𝕩\",\"xoplus\":\"⨁\",\"xotime\":\"⨂\",\"xrarr\":\"⟶\",\"xrArr\":\"⟹\",\"Xscr\":\"𝒳\",\"xscr\":\"𝓍\",\"xsqcup\":\"⨆\",\"xuplus\":\"⨄\",\"xutri\":\"△\",\"xvee\":\"⋁\",\"xwedge\":\"⋀\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"YAcy\":\"Я\",\"yacy\":\"я\",\"Ycirc\":\"Ŷ\",\"ycirc\":\"ŷ\",\"Ycy\":\"Ы\",\"ycy\":\"ы\",\"yen\":\"¥\",\"Yfr\":\"𝔜\",\"yfr\":\"𝔶\",\"YIcy\":\"Ї\",\"yicy\":\"ї\",\"Yopf\":\"𝕐\",\"yopf\":\"𝕪\",\"Yscr\":\"𝒴\",\"yscr\":\"𝓎\",\"YUcy\":\"Ю\",\"yucy\":\"ю\",\"yuml\":\"ÿ\",\"Yuml\":\"Ÿ\",\"Zacute\":\"Ź\",\"zacute\":\"ź\",\"Zcaron\":\"Ž\",\"zcaron\":\"ž\",\"Zcy\":\"З\",\"zcy\":\"з\",\"Zdot\":\"Ż\",\"zdot\":\"ż\",\"zeetrf\":\"ℨ\",\"ZeroWidthSpace\":\"​\",\"Zeta\":\"Ζ\",\"zeta\":\"ζ\",\"zfr\":\"𝔷\",\"Zfr\":\"ℨ\",\"ZHcy\":\"Ж\",\"zhcy\":\"ж\",\"zigrarr\":\"⇝\",\"zopf\":\"𝕫\",\"Zopf\":\"ℤ\",\"Zscr\":\"𝒵\",\"zscr\":\"𝓏\",\"zwj\":\"‍\",\"zwnj\":\"‌\"}");

/***/ }),

/***/ "./node_modules/entities/lib/maps/legacy.json":
/*!****************************************************!*\
  !*** ./node_modules/entities/lib/maps/legacy.json ***!
  \****************************************************/
/*! exports provided: Aacute, aacute, Acirc, acirc, acute, AElig, aelig, Agrave, agrave, amp, AMP, Aring, aring, Atilde, atilde, Auml, auml, brvbar, Ccedil, ccedil, cedil, cent, copy, COPY, curren, deg, divide, Eacute, eacute, Ecirc, ecirc, Egrave, egrave, ETH, eth, Euml, euml, frac12, frac14, frac34, gt, GT, Iacute, iacute, Icirc, icirc, iexcl, Igrave, igrave, iquest, Iuml, iuml, laquo, lt, LT, macr, micro, middot, nbsp, not, Ntilde, ntilde, Oacute, oacute, Ocirc, ocirc, Ograve, ograve, ordf, ordm, Oslash, oslash, Otilde, otilde, Ouml, ouml, para, plusmn, pound, quot, QUOT, raquo, reg, REG, sect, shy, sup1, sup2, sup3, szlig, THORN, thorn, times, Uacute, uacute, Ucirc, ucirc, Ugrave, ugrave, uml, Uuml, uuml, Yacute, yacute, yen, yuml, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Aacute\":\"Á\",\"aacute\":\"á\",\"Acirc\":\"Â\",\"acirc\":\"â\",\"acute\":\"´\",\"AElig\":\"Æ\",\"aelig\":\"æ\",\"Agrave\":\"À\",\"agrave\":\"à\",\"amp\":\"&\",\"AMP\":\"&\",\"Aring\":\"Å\",\"aring\":\"å\",\"Atilde\":\"Ã\",\"atilde\":\"ã\",\"Auml\":\"Ä\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"Ccedil\":\"Ç\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"COPY\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"Eacute\":\"É\",\"eacute\":\"é\",\"Ecirc\":\"Ê\",\"ecirc\":\"ê\",\"Egrave\":\"È\",\"egrave\":\"è\",\"ETH\":\"Ð\",\"eth\":\"ð\",\"Euml\":\"Ë\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"GT\":\">\",\"Iacute\":\"Í\",\"iacute\":\"í\",\"Icirc\":\"Î\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"Igrave\":\"Ì\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"Iuml\":\"Ï\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"LT\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"Ntilde\":\"Ñ\",\"ntilde\":\"ñ\",\"Oacute\":\"Ó\",\"oacute\":\"ó\",\"Ocirc\":\"Ô\",\"ocirc\":\"ô\",\"Ograve\":\"Ò\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"Oslash\":\"Ø\",\"oslash\":\"ø\",\"Otilde\":\"Õ\",\"otilde\":\"õ\",\"Ouml\":\"Ö\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"QUOT\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"REG\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"THORN\":\"Þ\",\"thorn\":\"þ\",\"times\":\"×\",\"Uacute\":\"Ú\",\"uacute\":\"ú\",\"Ucirc\":\"Û\",\"ucirc\":\"û\",\"Ugrave\":\"Ù\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"Uuml\":\"Ü\",\"uuml\":\"ü\",\"Yacute\":\"Ý\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

/***/ }),

/***/ "./node_modules/entities/lib/maps/xml.json":
/*!*************************************************!*\
  !*** ./node_modules/entities/lib/maps/xml.json ***!
  \*************************************************/
/*! exports provided: amp, apos, gt, lt, quot, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"amp\":\"&\",\"apos\":\"'\",\"gt\":\">\",\"lt\":\"<\",\"quot\":\"\\\"\"}");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=template&id=540a3f72&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=template&id=540a3f72& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "modal" },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.modal.loading,
              expression: "!modal.loading",
            },
          ],
          staticClass: "modal-form-container",
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "buttons" }, [
            _c(
              "button",
              { staticClass: "modal-btn primary", on: { click: _vm.save } },
              [_vm._v(_vm._s(_vm.trans(_vm.modal.saveLabel)))]
            ),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "modal-btn", on: { click: _vm.close } },
              [_vm._v(_vm._s(_vm.trans(_vm.modal.closeLabel)))]
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _vm.modal.loading ? _c("loading-screen") : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { ref: "container" })
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=template&id=74058edc&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=template&id=74058edc& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "modal" }, [_vm._v("\n    Iframe\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=template&id=a11827e2&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=template&id=a11827e2& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "modal" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.modal.loading,
            expression: "!modal.loading",
          },
        ],
        staticClass: "modal-form-container",
      },
      [
        _c(
          "div",
          {
            ref: "output",
            staticStyle: {
              color: "#fff",
              "overflow-y": "scroll",
              width: "500px",
              height: "500px",
              "background-color": "#000",
            },
          },
          [
            _c("pre", {
              domProps: { innerHTML: _vm._s(_vm.convert(_vm.modal.output)) },
            }),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "buttons" }, [
          _c(
            "button",
            {
              staticClass: "modal-btn",
              on: {
                click: function ($event) {
                  return _vm.modal.close()
                },
              },
            },
            [_vm._v(_vm._s(_vm.modal.closeLabel))]
          ),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZm9ybS9Gb3JtRGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZm9ybS9Gb3JtSW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2Zvcm0vZXZlbnQvRm9ybUNvbnZlcnRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZm9ybS9ldmVudC9Gb3JtRWxlbWVudEV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9mb3JtL2V2ZW50L0Zvcm1JbnNlcnRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZm9ybS9ldmVudC9Gb3JtUmVsZWFzZUV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9Nb2RhbE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL01vZGFsUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWU/M2NkNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9BamF4Rm9ybU1vZGFsQ29tcG9uZW50LnZ1ZT8yMGI3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9jb21wb25lbnRzL0lmcmFtZU1vZGFsQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9JZnJhbWVNb2RhbENvbXBvbmVudC52dWU/YTMyNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9JZnJhbWVNb2RhbENvbXBvbmVudC52dWU/ZWE5NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9PdXRwdXRTdHJlYW1Nb2RhbENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQudnVlPzEwMjciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQudnVlP2ZjOWEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9mYWN0b3J5L0FqYXhGb3JtTW9kYWxGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9mYWN0b3J5L0lmcmFtZU1vZGFsRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvZmFjdG9yeS9PdXRwdXRTdHJlYW1Nb2RhbEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL21vZGVsL0Fic3RyYWN0TW9kYWwudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL21vZGVsL0FqYXhGb3JtTW9kYWwudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL21vZGVsL0lmcmFtZU1vZGFsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9tb2RlbC9PdXRwdXRTdHJlYW1Nb2RhbC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbm9kZV9tb2R1bGVzL0Blbmhhdm8vY29yZS9SZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbm9kZV9tb2R1bGVzL0Blbmhhdm8vY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9jb3JlL1JlZ2lzdHJ5RW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fuc2ktdG8taHRtbC9saWIvYW5zaV90b19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9jb21wb25lbnRzL0FqYXhGb3JtTW9kYWxDb21wb25lbnQudnVlP2ZiN2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvSWZyYW1lTW9kYWxDb21wb25lbnQudnVlPzkwMGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQudnVlPzc2ODYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9kZWNvZGVfY29kZXBvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWU/MDVmNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9JZnJhbWVNb2RhbENvbXBvbmVudC52dWU/NzRiMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9PdXRwdXRTdHJlYW1Nb2RhbENvbXBvbmVudC52dWU/MWMxOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUEsK0JBMkNDOztBQXpDaUIsa0NBQWQsVUFBMkIsT0FBM0IsRUFBK0M7QUFFM0MsVUFBSSxLQUFLLEdBQUcsSUFBSSw2QkFBSixDQUFxQixPQUFyQixDQUFaO0FBQ0EsT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLE9BQVYsQ0FBa0IsVUFBbEIsRUFBOEIsS0FBOUI7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQUxhOztBQU9BLGtDQUFkLFVBQTJCLE9BQTNCLEVBQStDO0FBRTNDLFVBQUksS0FBSyxHQUFHLElBQUksNkJBQUosQ0FBcUIsT0FBckIsQ0FBWjtBQUNBLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxPQUFWLENBQWtCLFVBQWxCLEVBQThCLEtBQTlCO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0FMYTs7QUFPQSxxQ0FBZCxVQUE4QixPQUE5QixFQUE2QztBQUV6QyxVQUFJLEtBQUssR0FBRyxJQUFJLDZCQUFKLENBQXFCLE9BQXJCLENBQVo7QUFDQSxPQUFDLENBQUMsTUFBRCxDQUFELENBQVUsT0FBVixDQUFrQixhQUFsQixFQUFpQyxLQUFqQztBQUNBLGFBQU8sS0FBUDtBQUNILEtBTGE7O0FBT0Esb0NBQWQsVUFBNkIsT0FBN0IsRUFBaUQ7QUFFN0MsVUFBSSxLQUFLLEdBQUcsSUFBSSw0QkFBSixDQUFvQixPQUFwQixDQUFaO0FB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Q0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQSx5QkFBeUIsbURBQW1EO0FBQzVFLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InZlbmRvcnN+bW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBGb3JtRWxlbWVudEV2ZW50IGZyb20gJ0Blbmhhdm8vYXBwL2Zvcm0vZXZlbnQvRm9ybUVsZW1lbnRFdmVudCc7XG5pbXBvcnQgRm9ybUNvbnZlcnRFdmVudCBmcm9tICdAZW5oYXZvL2FwcC9mb3JtL2V2ZW50L0Zvcm1Db252ZXJ0RXZlbnQnO1xuaW1wb3J0IEZvcm1JbnNlcnRFdmVudCBmcm9tICdAZW5oYXZvL2FwcC9mb3JtL2V2ZW50L0Zvcm1JbnNlcnRFdmVudCc7XG5pbXBvcnQgRm9ybVJlbGVhc2VFdmVudCBmcm9tICdAZW5oYXZvL2FwcC9mb3JtL2V2ZW50L0Zvcm1SZWxlYXNlRXZlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRGlzcGF0Y2hlclxue1xuICAgIHB1YmxpYyBzdGF0aWMgZGlzcGF0Y2hNb3ZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KVxuICAgIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEZvcm1FbGVtZW50RXZlbnQoZWxlbWVudCk7XG4gICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdmb3JtTW92ZScsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGlzcGF0Y2hEcm9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50KVxuICAgIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEZvcm1FbGVtZW50RXZlbnQoZWxlbWVudCk7XG4gICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdmb3JtRHJvcCcsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGlzcGF0Y2hDb252ZXJ0KGVsZW1lbnQ6IHN0cmluZylcbiAgICB7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBGb3JtQ29udmVydEV2ZW50KGVsZW1lbnQpO1xuICAgICAgICAkKCdib2R5JykudHJpZ2dlcignZm9ybUNvbnZlcnQnLCBldmVudCk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRpc3BhdGNoSW5zZXJ0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KVxuICAgIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEZvcm1JbnNlcnRFdmVudChlbGVtZW50KTtcbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2Zvcm1JbnNlcnQnLCBldmVudCk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRpc3BhdGNoUmVsZWFzZShlbGVtZW50OiBIVE1MRWxlbWVudClcbiAgICB7XG4gICAgICAgIGxldCBldmVudCA9IG5ldyBGb3JtUmVsZWFzZUV2ZW50KGVsZW1lbnQpO1xuICAgICAgICAkKCdib2R5JykudHJpZ2dlcignZm9ybVJlbGVhc2UnLCBldmVudCk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGRpc3BhdGNoUmVtb3ZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KVxuICAgIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEZvcm1FbGVtZW50RXZlbnQoZWxlbWVudCk7XG4gICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdmb3JtUmVtb3ZlJywgZXZlbnQpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgRm9ybURpc3BhdGNoZXIgZnJvbSAnQGVuaGF2by9hcHAvZm9ybS9Gb3JtRGlzcGF0Y2hlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1Jbml0aWFsaXplclxue1xuICAgIHByaXZhdGUgaHRtbDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAgIHByaXZhdGUgY29udmVydGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHJlbGVhc2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGluc2VydGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgc2V0SHRtbChodG1sOiBzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLmh0bWwgPSBodG1sLnRyaW0oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudClcbiAgICB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnRcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGluc2VydEJlZm9yZShlbGVtZW50OiBIVE1MRWxlbWVudClcbiAgICB7XG4gICAgICAgIHRoaXMuaW5zZXJ0KCk7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS5pbnNlcnRCZWZvcmUoZWxlbWVudCk7XG4gICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbnNlcnRBZnRlcihlbGVtZW50OiBIVE1MRWxlbWVudClcbiAgICB7XG4gICAgICAgIHRoaXMuaW5zZXJ0KCk7XG4gICAgICAgICQodGhpcy5lbGVtZW50KS5pbnNlcnRBZnRlcihlbGVtZW50KTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFwcGVuZChlbGVtZW50OiBIVE1MRWxlbWVudClcbiAgICB7XG4gICAgICAgIHRoaXMuaW5zZXJ0KCk7XG4gICAgICAgICQoZWxlbWVudCkuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHRoaXMucmVsZWFzZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb252ZXJ0KClcbiAgICB7XG4gICAgICAgIGlmKCF0aGlzLmNvbnZlcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5jb252ZXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYodGhpcy5odG1sKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5odG1sID0gRm9ybURpc3BhdGNoZXIuZGlzcGF0Y2hDb252ZXJ0KHRoaXMuaHRtbCkuZ2V0SHRtbCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IDxIVE1MRWxlbWVudD4kKCQucGFyc2VIVE1MKHRoaXMuaHRtbCkpLmdldCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyByZWxlYXNlKClcbiAgICB7XG4gICAgICAgIGlmKCF0aGlzLmluc2VydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXRoaXMucmVsZWFzZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gRm9ybURpc3BhdGNoZXIuZGlzcGF0Y2hSZWxlYXNlKHRoaXMuZWxlbWVudCkuZ2V0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluc2VydCgpXG4gICAge1xuICAgICAgICBpZighdGhpcy5pbnNlcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLmNvbnZlcnRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udmVydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBGb3JtRGlzcGF0Y2hlci5kaXNwYXRjaEluc2VydCh0aGlzLmVsZW1lbnQpLmdldEVsZW1lbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUNvbnZlcnRFdmVudFxue1xuICAgIHByaXZhdGUgaHRtbDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoaHRtbDogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5odG1sID0gaHRtbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SHRtbChodG1sOiBzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLmh0bWwgPSBodG1sO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRIdG1sKCk6IHN0cmluZ1xuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHRtbDtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1FbGVtZW50RXZlbnRcbntcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpXG4gICAge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RWxlbWVudCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IEZvcm1FbGVtZW50RXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL2Zvcm0vZXZlbnQvRm9ybUVsZW1lbnRFdmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtSW5zZXJ0RXZlbnQgZXh0ZW5kcyBGb3JtRWxlbWVudEV2ZW50XG57XG5cbn0iLCJpbXBvcnQgRm9ybUVsZW1lbnRFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvZm9ybS9ldmVudC9Gb3JtRWxlbWVudEV2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1SZWxlYXNlRXZlbnQgZXh0ZW5kcyBGb3JtRWxlbWVudEV2ZW50XG57XG5cbn0iLCJpbXBvcnQgTW9kYWxJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL01vZGFsSW50ZXJmYWNlXCI7XG5pbXBvcnQgTW9kYWxSZWdpc3RyeSBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxSZWdpc3RyeVwiO1xuaW1wb3J0IENvbXBvbmVudEF3YXJlSW50ZXJmYWNlLCB7IENvbXBvbmVudEF3YXJlVHlwZSB9IGZyb20gXCJAZW5oYXZvL2NvcmUvQ29tcG9uZW50QXdhcmVJbnRlcmZhY2VcIjtcbmltcG9ydCBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL0NvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsTWFuYWdlclxue1xuICAgIHB1YmxpYyBtb2RhbHM6IE1vZGFsSW50ZXJmYWNlW107XG4gICAgcHJpdmF0ZSByZWFkb25seSByZWdpc3RyeTogTW9kYWxSZWdpc3RyeTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihtb2RhbHM6IE1vZGFsSW50ZXJmYWNlW10sIG1vZGFsUmVnaXN0cnk6IE1vZGFsUmVnaXN0cnksIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZSlcbiAgICB7XG4gICAgICAgIHRoaXMubW9kYWxzID0gbW9kYWxzO1xuICAgICAgICB0aGlzLnJlZ2lzdHJ5ID0gbW9kYWxSZWdpc3RyeTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeSA9IGNvbXBvbmVudFJlZ2lzdHJ5O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiB0aGlzLnJlZ2lzdHJ5LmdldENvbXBvbmVudHMoKSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50LmNvbXBvbmVudClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJTdG9yZSgnbW9kYWxNYW5hZ2VyJywgdGhpcyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJEYXRhKHRoaXMubW9kYWxzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHVzaChkYXRhOiBDb21wb25lbnRBd2FyZUludGVyZmFjZSB8IENvbXBvbmVudEF3YXJlVHlwZSlcbiAgICB7XG4gICAgICAgIGxldCBmYWN0b3J5ID0gdGhpcy5yZWdpc3RyeS5nZXRGYWN0b3J5KGRhdGEuY29tcG9uZW50KTtcbiAgICAgICAgbGV0IG1vZGFsID0gZmFjdG9yeS5jcmVhdGVGcm9tRGF0YShkYXRhKTtcbiAgICAgICAgbW9kYWwuaW5pdCgpO1xuICAgICAgICB0aGlzLm1vZGFscy5wdXNoKG1vZGFsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcG9wKClcbiAgICB7XG4gICAgICAgIHRoaXMubW9kYWxzLnBvcCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlZ2lzdHJ5IH0gZnJvbSBcIkBlbmhhdm8vY29yZVwiO1xuaW1wb3J0IE1vZGFsRmFjdG9yeUludGVyZmFjZSBmcm9tIFwiLi9Nb2RhbEZhY3RvcnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxSZWdpc3RyeSBleHRlbmRzIFJlZ2lzdHJ5XG57XG4gICAgZ2V0RmFjdG9yeShuYW1lOiBzdHJpbmcpOiBNb2RhbEZhY3RvcnlJbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4gPE1vZGFsRmFjdG9yeUludGVyZmFjZT5zdXBlci5nZXRGYWN0b3J5KG5hbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQwYTNmNzImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FqYXhGb3JtTW9kYWxDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3JlcG9zL3ByaXZhdC9qYXBhbmVzZS10ZXh0ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTQwYTNmNzInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTQwYTNmNzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTQwYTNmNzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FqYXhGb3JtTW9kYWxDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0MGEzZjcyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU0MGEzZjcyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9BamF4Rm9ybU1vZGFsQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FqYXhGb3JtTW9kYWxDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0MGEzZjcyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JZnJhbWVNb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzQwNThlZGMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSWZyYW1lTW9kYWxDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JZnJhbWVNb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcmVwb3MvcHJpdmF0L2phcGFuZXNlLXRleHRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3NDA1OGVkYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3NDA1OGVkYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3NDA1OGVkYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSWZyYW1lTW9kYWxDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0MDU4ZWRjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc0MDU4ZWRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9JZnJhbWVNb2RhbENvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lmcmFtZU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JZnJhbWVNb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lmcmFtZU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDA1OGVkYyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExMTgyN2UyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL091dHB1dFN0cmVhbU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3JlcG9zL3ByaXZhdC9qYXBhbmVzZS10ZXh0ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTExODI3ZTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTExODI3ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTExODI3ZTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL091dHB1dFN0cmVhbU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMTE4MjdlMiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhMTE4MjdlMicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PdXRwdXRTdHJlYW1Nb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PdXRwdXRTdHJlYW1Nb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTExODI3ZTImXCIiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgTW9kYWxJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL01vZGFsSW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIGNyZWF0ZUZyb21EYXRhKGRhdGE6IG9iamVjdCk6IE1vZGFsSW50ZXJmYWNlXG4gICAge1xuICAgICAgICBsZXQgbW9kYWwgPSB0aGlzLmNyZWF0ZU5ldygpO1xuICAgICAgICBtb2RhbCA9IF8uZXh0ZW5kKG1vZGFsLCBfLmFzc2lnbih7fSwgZGF0YSkpO1xuICAgICAgICByZXR1cm4gbW9kYWw7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgY3JlYXRlTmV3KCk6IE1vZGFsSW50ZXJmYWNlO1xufSIsImltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgQWpheEZvcm1Nb2RhbCBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvbW9kZWwvQWpheEZvcm1Nb2RhbFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwiQGVuaGF2by9jb3JlL1JvdXRlclwiO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhGb3JtTW9kYWxGYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyO1xuXG4gICAgY29uc3RydWN0b3IobW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXIsIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kYWxNYW5hZ2VyID0gbW9kYWxNYW5hZ2VyO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogQWpheEZvcm1Nb2RhbCB7XG4gICAgICAgIHJldHVybiBuZXcgQWpheEZvcm1Nb2RhbCh0aGlzLm1vZGFsTWFuYWdlciwgdGhpcy5yb3V0ZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IElmcmFtZU1vZGFsIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9tb2RlbC9JZnJhbWVNb2RhbFwiO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZU1vZGFsRmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vZGFsTWFuYWdlciA9IG1vZGFsTWFuYWdlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogSWZyYW1lTW9kYWwge1xuICAgICAgICByZXR1cm4gbmV3IElmcmFtZU1vZGFsKHRoaXMubW9kYWxNYW5hZ2VyKTtcbiAgICB9XG59IiwiaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvZmFjdG9yeS9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCBPdXRwdXRTdHJlYW1Nb2RhbCBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvbW9kZWwvT3V0cHV0U3RyZWFtTW9kYWxcIjtcbmltcG9ydCBNb2RhbE1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL01vZGFsTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdXRwdXRTdHJlYW1Nb2RhbEZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IobW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb2RhbE1hbmFnZXIgPSBtb2RhbE1hbmFnZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KCk6IE91dHB1dFN0cmVhbU1vZGFsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPdXRwdXRTdHJlYW1Nb2RhbCh0aGlzLm1vZGFsTWFuYWdlcik7XG4gICAgfVxufSIsImltcG9ydCBNb2RhbEludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxJbnRlcmZhY2VcIjtcbmltcG9ydCBNb2RhbE1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL01vZGFsTWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdE1vZGFsIGltcGxlbWVudHMgTW9kYWxJbnRlcmZhY2VcbntcbiAgICBjb21wb25lbnQ6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyKVxuICAgIHtcbiAgICAgICAgdGhpcy5tb2RhbE1hbmFnZXIgPSBtb2RhbE1hbmFnZXI7XG4gICAgfVxuXG4gICAgaW5pdCgpIHt9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5tb2RhbE1hbmFnZXIucG9wKCk7XG4gICAgfVxufSIsImltcG9ydCBBYnN0cmFjdE1vZGFsIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9tb2RlbC9BYnN0cmFjdE1vZGFsXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBNb2RhbE1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL01vZGFsTWFuYWdlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwiQGVuaGF2by9jb3JlL1JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4Rm9ybU1vZGFsIGV4dGVuZHMgQWJzdHJhY3RNb2RhbFxue1xuICAgIHB1YmxpYyByb3V0ZTogc3RyaW5nO1xuICAgIHB1YmxpYyByb3V0ZVBhcmFtZXRlcnM6IG9iamVjdDtcbiAgICBwdWJsaWMgYWN0aW9uUm91dGU6IHN0cmluZztcbiAgICBwdWJsaWMgYWN0aW9uUm91dGVQYXJhbWV0ZXJzOiBvYmplY3Q7XG4gICAgcHVibGljIGFjdGlvblVybDogc3RyaW5nO1xuICAgIHB1YmxpYyBhY3Rpb25IYW5kbGVyOiAobW9kYWw6IEFqYXhGb3JtTW9kYWwsIGRhdGE6IGFueSwgZXJyb3I6IHN0cmluZykgPT4gUHJvbWlzZTxib29sZWFuPjtcbiAgICBwdWJsaWMgc3VibWl0SGFuZGxlcjogKG1vZGFsOiBBamF4Rm9ybU1vZGFsLCBkYXRhOiBhbnkpID0+IFByb21pc2U8Ym9vbGVhbj47XG4gICAgcHVibGljIGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcbiAgICBwdWJsaWMgZm9ybTogSFRNTEVsZW1lbnQgPSBudWxsO1xuICAgIHB1YmxpYyBzYXZlTGFiZWw6IHN0cmluZyA9ICdlbmhhdm9fYXBwLnNhdmUnO1xuICAgIHB1YmxpYyBjbG9zZUxhYmVsOiBzdHJpbmcgPSAnZW5oYXZvX2FwcC5hYm9ydCc7XG4gICAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlciwgcm91dGVyOiBSb3V0ZXIpXG4gICAge1xuICAgICAgICBzdXBlcihtb2RhbE1hbmFnZXIpO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkRm9ybSgpOiBQcm9taXNlPHZvaWQ+XG4gICAge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5yb3V0ZXIuZ2VuZXJhdGUodGhpcy5yb3V0ZSwgdGhpcy5yb3V0ZVBhcmFtZXRlcnMpO1xuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaHRtbCA9IGRhdGEuZGF0YS50cmltKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gPEhUTUxFbGVtZW50PiQucGFyc2VIVE1MKGh0bWwpWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBzdWJtaXQoKTogUHJvbWlzZTxib29sZWFuPlxuICAgIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldEZvcm1EYXRhKCk7XG4gICAgICAgIGlmICh0aGlzLnN1Ym1pdEhhbmRsZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdEhhbmRsZXIodGhpcywgZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZW5kRm9ybShkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2VuZEZvcm0oZGF0YTogYW55KTogUHJvbWlzZTxib29sZWFuPlxuICAgIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBfLmV4dGVuZChkYXRhLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBheGlvcy5wb3N0KHRoaXMuZ2V0QWN0aW9uVXJsKCksIHRoaXMuYnVpbGRRdWVyeShkYXRhKSkudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlRm9ybShyZXNwb25zZURhdGEsIHJlc29sdmUsIHJlamVjdClcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVjZWl2ZUZvcm0oZXJyb3IucmVzcG9uc2UsIHJlc29sdmUsIHJlamVjdClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY2VpdmVGb3JtKHJlc3BvbnNlRGF0YTogYW55LCByZXNvbHZlOiAoZGF0YT86IGFueSkgPT4gdm9pZCwgcmVqZWN0OiAoKSA9PiB2b2lkKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5hY3Rpb25IYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkhhbmRsZXIodGhpcywgcmVzcG9uc2VEYXRhLCBudWxsKVxuICAgICAgICAgICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGh0bWwgPSByZXNwb25zZURhdGEuZGF0YS50cmltKCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+JC5wYXJzZUhUTUwoaHRtbClbMF07XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRBY3Rpb25VcmwoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5hY3Rpb25VcmwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGlvblVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuYWN0aW9uUm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5nZW5lcmF0ZSh0aGlzLmFjdGlvblJvdXRlLCB0aGlzLmFjdGlvblJvdXRlUGFyYW1ldGVycyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIuZ2VuZXJhdGUodGhpcy5yb3V0ZSwgdGhpcy5yb3V0ZVBhcmFtZXRlcnMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYnVpbGRRdWVyeShvYmo6IG9iamVjdCwgcHJlZml4OiBzdHJpbmcgPSAnJyk6IHN0cmluZ1xuICAgIHtcbiAgICAgICAgbGV0IGFyZ3MgPSBbXTtcbiAgICAgICAgaWYodHlwZW9mKG9iaikgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZihwcmVmaXggPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1thcmdzLmxlbmd0aF0gPSB0aGlzLmJ1aWxkUXVlcnkob2JqW2ldLCBlbmNvZGVVUklDb21wb25lbnQoaSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbYXJncy5sZW5ndGhdID0gdGhpcy5idWlsZFF1ZXJ5KG9ialtpXSwgcHJlZml4KydbJytlbmNvZGVVUklDb21wb25lbnQoaSkrJ10nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmdzW2FyZ3MubGVuZ3RoXT1wcmVmaXgrJz0nK2VuY29kZVVSSUNvbXBvbmVudChvYmopO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmdzLmpvaW4oJyYnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Rm9ybURhdGEoKTogb2JqZWN0XG4gICAge1xuICAgICAgICBsZXQgZm9ybURhdGEgPSB7fTtcbiAgICAgICAgbGV0IGRhdGEgPSAkKHRoaXMuZm9ybSkuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAgICAgZm9yKGxldCByb3cgb2YgZGF0YSkge1xuICAgICAgICAgICAgZm9ybURhdGFbcm93Lm5hbWVdID0gcm93LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQWJzdHJhY3RNb2RhbCBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvbW9kZWwvQWJzdHJhY3RNb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZnJhbWVNb2RhbCBleHRlbmRzIEFic3RyYWN0TW9kYWxcbntcbiAgICBwdWJsaWMgcm91dGU6IHN0cmluZztcbiAgICBwdWJsaWMgcm91dGVQYXJhbWV0ZXJzOiBvYmplY3Q7XG5cbiAgICBwdWJsaWMgaW5pdCgpXG4gICAge1xuXG4gICAgfVxufSIsImltcG9ydCBBYnN0cmFjdE1vZGFsIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9tb2RlbC9BYnN0cmFjdE1vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE91dHB1dFN0cmVhbU1vZGFsIGV4dGVuZHMgQWJzdHJhY3RNb2RhbFxue1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcbiAgICBwdWJsaWMgY2xvc2VMYWJlbDogc3RyaW5nO1xuICAgIHB1YmxpYyBvdXRwdXQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHVibGljIGRvbmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGluaXQoKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IHRoaXM7XG4gICAgICAgIGZldGNoKHRoaXMudXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYm9keSlcbiAgICAgICAgICAgIC50aGVuKGJvZHkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IGJvZHkuZ2V0UmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWQoKS50aGVuKGZ1bmN0aW9uIHByb2Nlc3NUZXh0KHsgZG9uZSwgdmFsdWUgfSk6IGFueSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5vdXRwdXQgKz0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKCFkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWFkZXIucmVhZCgpLnRoZW4ocHJvY2Vzc1RleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIi4vUmVnaXN0cnlJbnRlcmZhY2VcIjtcbmltcG9ydCBSZWdpc3RyeUVudHJ5IGZyb20gXCJAZW5oYXZvL2NvcmUvUmVnaXN0cnlFbnRyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RyeSBpbXBsZW1lbnRzIFJlZ2lzdHJ5SW50ZXJmYWNlXG57XG4gICAgcHJpdmF0ZSBlbnRyaWVzOiBSZWdpc3RyeUVudHJ5W10gPSBbXTtcblxuICAgIHByaXZhdGUgZ2V0KG5hbWU6IHN0cmluZyk6IFJlZ2lzdHJ5RW50cnlcbiAgICB7XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBpZihlbnRyeS5nZXROYW1lKCkgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyAnRW50cnkgd2l0aCBuYW1lIFwiJytuYW1lKydcIiBkb2VzIG5vdCBleGlzdCBpbiByZWdpc3RyeSc7XG4gICAgfVxuXG4gICAgZ2V0RmFjdG9yeShuYW1lOiBzdHJpbmcpOiBvYmplY3RcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChuYW1lKS5nZXRGYWN0b3J5KCk7XG4gICAgfVxuXG4gICAgZ2V0Q29tcG9uZW50KG5hbWU6IHN0cmluZyk6IG9iamVjdFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpLmdldENvbXBvbmVudCgpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKGVudHJ5OiBSZWdpc3RyeUVudHJ5KTogUmVnaXN0cnlJbnRlcmZhY2VcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuaGFzKGVudHJ5LmdldE5hbWUoKSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRW50cnkoZW50cnkuZ2V0TmFtZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlRW50cnkobmFtZTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZW50cmllc1tpXS5nZXROYW1lKCkgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50cmllcy5zcGxpY2UocGFyc2VJbnQoaSksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBpZihlbnRyeS5nZXROYW1lKCkgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnRzKCk6IENvbXBvbmVudFtdXG4gICAge1xuICAgICAgICBsZXQgY29tcG9uZW50cyA9IFtdO1xuICAgICAgICBmb3IobGV0IGVudHJ5IG9mIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKG5ldyBDb21wb25lbnQoZW50cnkuZ2V0TmFtZSgpLCBlbnRyeS5nZXRDb21wb25lbnQoKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFxue1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbXBvbmVudDogb2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IG9iamVjdCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVnaXN0cnkgZnJvbSAnLi9SZWdpc3RyeSc7XG5pbXBvcnQgUmVnaXN0cnlJbnRlcmZhY2UgZnJvbSAnLi9SZWdpc3RyeUludGVyZmFjZSc7XG5pbXBvcnQgRmFjdG9yeUludGVyZmFjZSBmcm9tICcuL0ZhY3RvcnlJbnRlcmZhY2UnO1xuaW1wb3J0IENvbXBvbmVudEF3YXJlSW50ZXJmYWNlIGZyb20gJy4vQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UnO1xuXG5leHBvcnQge1xuICAgIFJlZ2lzdHJ5LFxuICAgIFJlZ2lzdHJ5SW50ZXJmYWNlLFxuICAgIEZhY3RvcnlJbnRlcmZhY2UsXG4gICAgQ29tcG9uZW50QXdhcmVJbnRlcmZhY2Vcbn07XG4iLCJpbXBvcnQgRmFjdG9yeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL0ZhY3RvcnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0cnlFbnRyeVxue1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY29tcG9uZW50OiBvYmplY3Q7XG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBGYWN0b3J5SW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IG9iamVjdCwgZmFjdG9yeTogRmFjdG9yeUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb21wb25lbnQoKTogb2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGYWN0b3J5KCk6IEZhY3RvcnlJbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3J5O1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbnZhciBlbnRpdGllcyA9IHJlcXVpcmUoJ2VudGl0aWVzJyk7XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgZmc6ICcjRkZGJyxcbiAgYmc6ICcjMDAwJyxcbiAgbmV3bGluZTogZmFsc2UsXG4gIGVzY2FwZVhNTDogZmFsc2UsXG4gIHN0cmVhbTogZmFsc2UsXG4gIGNvbG9yczogZ2V0RGVmYXVsdENvbG9ycygpXG59O1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0Q29sb3JzKCkge1xuICB2YXIgY29sb3JzID0ge1xuICAgIDA6ICcjMDAwJyxcbiAgICAxOiAnI0EwMCcsXG4gICAgMjogJyMwQTAnLFxuICAgIDM6ICcjQTUwJyxcbiAgICA0OiAnIzAwQScsXG4gICAgNTogJyNBMEEnLFxuICAgIDY6ICcjMEFBJyxcbiAgICA3OiAnI0FBQScsXG4gICAgODogJyM1NTUnLFxuICAgIDk6ICcjRjU1JyxcbiAgICAxMDogJyM1RjUnLFxuICAgIDExOiAnI0ZGNScsXG4gICAgMTI6ICcjNTVGJyxcbiAgICAxMzogJyNGNUYnLFxuICAgIDE0OiAnIzVGRicsXG4gICAgMTU6ICcjRkZGJ1xuICB9O1xuICByYW5nZSgwLCA1KS5mb3JFYWNoKGZ1bmN0aW9uIChyZWQpIHtcbiAgICByYW5nZSgwLCA1KS5mb3JFYWNoKGZ1bmN0aW9uIChncmVlbikge1xuICAgICAgcmFuZ2UoMCwgNSkuZm9yRWFjaChmdW5jdGlvbiAoYmx1ZSkge1xuICAgICAgICByZXR1cm4gc2V0U3R5bGVDb2xvcihyZWQsIGdyZWVuLCBibHVlLCBjb2xvcnMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByYW5nZSgwLCAyMykuZm9yRWFjaChmdW5jdGlvbiAoZ3JheSkge1xuICAgIHZhciBjID0gZ3JheSArIDIzMjtcbiAgICB2YXIgbCA9IHRvSGV4U3RyaW5nKGdyYXkgKiAxMCArIDgpO1xuICAgIGNvbG9yc1tjXSA9ICcjJyArIGwgKyBsICsgbDtcbiAgfSk7XG4gIHJldHVybiBjb2xvcnM7XG59XG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSByZWRcbiAqIEBwYXJhbSB7bnVtYmVyfSBncmVlblxuICogQHBhcmFtIHtudW1iZXJ9IGJsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb2xvcnNcbiAqL1xuXG5cbmZ1bmN0aW9uIHNldFN0eWxlQ29sb3IocmVkLCBncmVlbiwgYmx1ZSwgY29sb3JzKSB7XG4gIHZhciBjID0gMTYgKyByZWQgKiAzNiArIGdyZWVuICogNiArIGJsdWU7XG4gIHZhciByID0gcmVkID4gMCA/IHJlZCAqIDQwICsgNTUgOiAwO1xuICB2YXIgZyA9IGdyZWVuID4gMCA/IGdyZWVuICogNDAgKyA1NSA6IDA7XG4gIHZhciBiID0gYmx1ZSA+IDAgPyBibHVlICogNDAgKyA1NSA6IDA7XG4gIGNvbG9yc1tjXSA9IHRvQ29sb3JIZXhTdHJpbmcoW3IsIGcsIGJdKTtcbn1cbi8qKlxuICogQ29udmVydHMgZnJvbSBhIG51bWJlciBsaWtlIDE1IHRvIGEgaGV4IHN0cmluZyBsaWtlICdGJ1xuICogQHBhcmFtIHtudW1iZXJ9IG51bVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvSGV4U3RyaW5nKG51bSkge1xuICB2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KTtcblxuICB3aGlsZSAoc3RyLmxlbmd0aCA8IDIpIHtcbiAgICBzdHIgPSAnMCcgKyBzdHI7XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBmcm9tIGFuIGFycmF5IG9mIG51bWJlcnMgbGlrZSBbMTUsIDE1LCAxNV0gdG8gYSBoZXggc3RyaW5nIGxpa2UgJ0ZGRidcbiAqIEBwYXJhbSB7W3JlZCwgZ3JlZW4sIGJsdWVdfSByZWZcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiB0b0NvbG9ySGV4U3RyaW5nKHJlZikge1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuXG4gIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihyZWYpLFxuICAgICAgX3N0ZXA7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgdmFyIHIgPSBfc3RlcC52YWx1ZTtcbiAgICAgIHJlc3VsdHMucHVzaCh0b0hleFN0cmluZyhyKSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IuZShlcnIpO1xuICB9IGZpbmFsbHkge1xuICAgIF9pdGVyYXRvci5mKCk7XG4gIH1cblxuICByZXR1cm4gJyMnICsgcmVzdWx0cy5qb2luKCcnKTtcbn1cbi8qKlxuICogQHBhcmFtIHtBcnJheX0gc3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlblxuICogQHBhcmFtIHsqfSBkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVPdXRwdXQoc3RhY2ssIHRva2VuLCBkYXRhLCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHRva2VuID09PSAndGV4dCcpIHtcbiAgICByZXN1bHQgPSBwdXNoVGV4dChkYXRhLCBvcHRpb25zKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ2Rpc3BsYXknKSB7XG4gICAgcmVzdWx0ID0gaGFuZGxlRGlzcGxheShzdGFjaywgZGF0YSwgb3B0aW9ucyk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICd4dGVybTI1NicpIHtcbiAgICByZXN1bHQgPSBwdXNoRm9yZWdyb3VuZENvbG9yKHN0YWNrLCBvcHRpb25zLmNvbG9yc1tkYXRhXSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdyZ2InKSB7XG4gICAgcmVzdWx0ID0gaGFuZGxlUmdiKHN0YWNrLCBkYXRhKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIEBwYXJhbSB7QXJyYXl9IHN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YVxuICogQHJldHVybnMgeyp9XG4gKi9cblxuXG5mdW5jdGlvbiBoYW5kbGVSZ2Ioc3RhY2ssIGRhdGEpIHtcbiAgZGF0YSA9IGRhdGEuc3Vic3RyaW5nKDIpLnNsaWNlKDAsIC0xKTtcbiAgdmFyIG9wZXJhdGlvbiA9ICtkYXRhLnN1YnN0cigwLCAyKTtcbiAgdmFyIGNvbG9yID0gZGF0YS5zdWJzdHJpbmcoNSkuc3BsaXQoJzsnKTtcbiAgdmFyIHJnYiA9IGNvbG9yLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKCcwJyArIE51bWJlcih2YWx1ZSkudG9TdHJpbmcoMTYpKS5zdWJzdHIoLTIpO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHB1c2hTdHlsZShzdGFjaywgKG9wZXJhdGlvbiA9PT0gMzggPyAnY29sb3I6IycgOiAnYmFja2dyb3VuZC1jb2xvcjojJykgKyByZ2IpO1xufVxuLyoqXG4gKiBAcGFyYW0ge0FycmF5fSBzdGFja1xuICogQHBhcmFtIHtudW1iZXJ9IGNvZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuXG5cbmZ1bmN0aW9uIGhhbmRsZURpc3BsYXkoc3RhY2ssIGNvZGUsIG9wdGlvbnMpIHtcbiAgY29kZSA9IHBhcnNlSW50KGNvZGUsIDEwKTtcbiAgdmFyIGNvZGVNYXAgPSB7XG4gICAgJy0xJzogZnVuY3Rpb24gXygpIHtcbiAgICAgIHJldHVybiAnPGJyLz4nO1xuICAgIH0sXG4gICAgMDogZnVuY3Rpb24gXygpIHtcbiAgICAgIHJldHVybiBzdGFjay5sZW5ndGggJiYgcmVzZXRTdHlsZXMoc3RhY2spO1xuICAgIH0sXG4gICAgMTogZnVuY3Rpb24gXygpIHtcbiAgICAgIHJldHVybiBwdXNoVGFnKHN0YWNrLCAnYicpO1xuICAgIH0sXG4gICAgMzogZnVuY3Rpb24gXygpIHtcbiAgICAgIHJldHVybiBwdXNoVGFnKHN0YWNrLCAnaScpO1xuICAgIH0sXG4gICAgNDogZnVuY3Rpb24gXygpIHtcbiAgICAgIHJldHVybiBwdXNoVGFnKHN0YWNrLCAndScpO1xuICAgIH0sXG4gICAgODogZnVuY3Rpb24gXygpIHtcbiAgICAgIHJldHVybiBwdXNoU3R5bGUoc3RhY2ssICdkaXNwbGF5Om5vbmUnKTtcbiAgICB9LFxuICAgIDk6IGZ1bmN0aW9uIF8oKSB7XG4gICAgICByZXR1cm4gcHVzaFRhZyhzdGFjaywgJ3N0cmlrZScpO1xuICAgIH0sXG4gICAgMjI6IGZ1bmN0aW9uIF8oKSB7XG4gICAgICByZXR1cm4gcHVzaFN0eWxlKHN0YWNrLCAnZm9udC13ZWlnaHQ6bm9ybWFsO3RleHQtZGVjb3JhdGlvbjpub25lO2ZvbnQtc3R5bGU6bm9ybWFsJyk7XG4gICAgfSxcbiAgICAyMzogZnVuY3Rpb24gXygpIHtcbiAgICAgIHJldHVybiBjbG9zZVRhZyhzdGFjaywgJ2knKTtcbiAgICB9LFxuICAgIDI0OiBmdW5jdGlvbiBfKCkge1xuICAgICAgcmV0dXJuIGNsb3NlVGFnKHN0YWNrLCAndScpO1xuICAgIH0sXG4gICAgMzk6IGZ1bmN0aW9uIF8oKSB7XG4gICAgICByZXR1cm4gcHVzaEZvcmVncm91bmRDb2xvcihzdGFjaywgb3B0aW9ucy5mZyk7XG4gICAgfSxcbiAgICA0OTogZnVuY3Rpb24gXygpIHtcbiAgICAgIHJldHVybiBwdXNoQmFja2dyb3VuZENvbG9yKHN0YWNrLCBvcHRpb25zLmJnKTtcbiAgICB9LFxuICAgIDUzOiBmdW5jdGlvbiBfKCkge1xuICAgICAgcmV0dXJuIHB1c2hTdHlsZShzdGFjaywgJ3RleHQtZGVjb3JhdGlvbjpvdmVybGluZScpO1xuICAgIH1cbiAgfTtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAoY29kZU1hcFtjb2RlXSkge1xuICAgIHJlc3VsdCA9IGNvZGVNYXBbY29kZV0oKTtcbiAgfSBlbHNlIGlmICg0IDwgY29kZSAmJiBjb2RlIDwgNykge1xuICAgIHJlc3VsdCA9IHB1c2hUYWcoc3RhY2ssICdibGluaycpO1xuICB9IGVsc2UgaWYgKDI5IDwgY29kZSAmJiBjb2RlIDwgMzgpIHtcbiAgICByZXN1bHQgPSBwdXNoRm9yZWdyb3VuZENvbG9yKHN0YWNrLCBvcHRpb25zLmNvbG9yc1tjb2RlIC0gMzBdKTtcbiAgfSBlbHNlIGlmICgzOSA8IGNvZGUgJiYgY29kZSA8IDQ4KSB7XG4gICAgcmVzdWx0ID0gcHVzaEJhY2tncm91bmRDb2xvcihzdGFjaywgb3B0aW9ucy5jb2xvcnNbY29kZSAtIDQwXSk7XG4gIH0gZWxzZSBpZiAoODkgPCBjb2RlICYmIGNvZGUgPCA5OCkge1xuICAgIHJlc3VsdCA9IHB1c2hGb3JlZ3JvdW5kQ29sb3Ioc3RhY2ssIG9wdGlvbnMuY29sb3JzWzggKyAoY29kZSAtIDkwKV0pO1xuICB9IGVsc2UgaWYgKDk5IDwgY29kZSAmJiBjb2RlIDwgMTA4KSB7XG4gICAgcmVzdWx0ID0gcHVzaEJhY2tncm91bmRDb2xvcihzdGFjaywgb3B0aW9ucy5jb2xvcnNbOCArIChjb2RlIC0gMTAwKV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ2xlYXIgYWxsIHRoZSBzdHlsZXNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiByZXNldFN0eWxlcyhzdGFjaykge1xuICB2YXIgc3RhY2tDbG9uZSA9IHN0YWNrLnNsaWNlKDApO1xuICBzdGFjay5sZW5ndGggPSAwO1xuICByZXR1cm4gc3RhY2tDbG9uZS5yZXZlcnNlKCkubWFwKGZ1bmN0aW9uICh0YWcpIHtcbiAgICByZXR1cm4gJzwvJyArIHRhZyArICc+JztcbiAgfSkuam9pbignJyk7XG59XG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgbnVtYmVycyByYW5naW5nIGZyb20gbG93IHRvIGhpZ2hcbiAqIEBwYXJhbSB7bnVtYmVyfSBsb3dcbiAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKiBAZXhhbXBsZSByYW5nZSgzLCA3KTsgLy8gY3JlYXRlcyBbMywgNCwgNSwgNiwgN11cbiAqL1xuXG5cbmZ1bmN0aW9uIHJhbmdlKGxvdywgaGlnaCkge1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuXG4gIGZvciAodmFyIGogPSBsb3c7IGogPD0gaGlnaDsgaisrKSB7XG4gICAgcmVzdWx0cy5wdXNoKGopO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG4vKipcbiAqIFJldHVybnMgYSBuZXcgZnVuY3Rpb24gdGhhdCBpcyB0cnVlIGlmIHZhbHVlIGlzIE5PVCB0aGUgc2FtZSBjYXRlZ29yeVxuICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5XG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gKi9cblxuXG5mdW5jdGlvbiBub3RDYXRlZ29yeShjYXRlZ29yeSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gKGNhdGVnb3J5ID09PSBudWxsIHx8IGUuY2F0ZWdvcnkgIT09IGNhdGVnb3J5KSAmJiBjYXRlZ29yeSAhPT0gJ2FsbCc7XG4gIH07XG59XG4vKipcbiAqIENvbnZlcnRzIGEgY29kZSBpbnRvIGFuIGFuc2kgdG9rZW4gdHlwZVxuICogQHBhcmFtIHtudW1iZXJ9IGNvZGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBjYXRlZ29yeUZvckNvZGUoY29kZSkge1xuICBjb2RlID0gcGFyc2VJbnQoY29kZSwgMTApO1xuICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICBpZiAoY29kZSA9PT0gMCkge1xuICAgIHJlc3VsdCA9ICdhbGwnO1xuICB9IGVsc2UgaWYgKGNvZGUgPT09IDEpIHtcbiAgICByZXN1bHQgPSAnYm9sZCc7XG4gIH0gZWxzZSBpZiAoMiA8IGNvZGUgJiYgY29kZSA8IDUpIHtcbiAgICByZXN1bHQgPSAndW5kZXJsaW5lJztcbiAgfSBlbHNlIGlmICg0IDwgY29kZSAmJiBjb2RlIDwgNykge1xuICAgIHJlc3VsdCA9ICdibGluayc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PT0gOCkge1xuICAgIHJlc3VsdCA9ICdoaWRlJztcbiAgfSBlbHNlIGlmIChjb2RlID09PSA5KSB7XG4gICAgcmVzdWx0ID0gJ3N0cmlrZSc7XG4gIH0gZWxzZSBpZiAoMjkgPCBjb2RlICYmIGNvZGUgPCAzOCB8fCBjb2RlID09PSAzOSB8fCA4OSA8IGNvZGUgJiYgY29kZSA8IDk4KSB7XG4gICAgcmVzdWx0ID0gJ2ZvcmVncm91bmQtY29sb3InO1xuICB9IGVsc2UgaWYgKDM5IDwgY29kZSAmJiBjb2RlIDwgNDggfHwgY29kZSA9PT0gNDkgfHwgOTkgPCBjb2RlICYmIGNvZGUgPCAxMDgpIHtcbiAgICByZXN1bHQgPSAnYmFja2dyb3VuZC1jb2xvcic7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBwdXNoVGV4dCh0ZXh0LCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmVzY2FwZVhNTCkge1xuICAgIHJldHVybiBlbnRpdGllcy5lbmNvZGVYTUwodGV4dCk7XG4gIH1cblxuICByZXR1cm4gdGV4dDtcbn1cbi8qKlxuICogQHBhcmFtIHtBcnJheX0gc3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3R5bGU9JyddXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gcHVzaFRhZyhzdGFjaywgdGFnLCBzdHlsZSkge1xuICBpZiAoIXN0eWxlKSB7XG4gICAgc3R5bGUgPSAnJztcbiAgfVxuXG4gIHN0YWNrLnB1c2godGFnKTtcbiAgcmV0dXJuIFwiPFwiLmNvbmNhdCh0YWcpLmNvbmNhdChzdHlsZSA/IFwiIHN0eWxlPVxcXCJcIi5jb25jYXQoc3R5bGUsIFwiXFxcIlwiKSA6ICcnLCBcIj5cIik7XG59XG4vKipcbiAqIEBwYXJhbSB7QXJyYXl9IHN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gc3R5bGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBwdXNoU3R5bGUoc3RhY2ssIHN0eWxlKSB7XG4gIHJldHVybiBwdXNoVGFnKHN0YWNrLCAnc3BhbicsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcHVzaEZvcmVncm91bmRDb2xvcihzdGFjaywgY29sb3IpIHtcbiAgcmV0dXJuIHB1c2hUYWcoc3RhY2ssICdzcGFuJywgJ2NvbG9yOicgKyBjb2xvcik7XG59XG5cbmZ1bmN0aW9uIHB1c2hCYWNrZ3JvdW5kQ29sb3Ioc3RhY2ssIGNvbG9yKSB7XG4gIHJldHVybiBwdXNoVGFnKHN0YWNrLCAnc3BhbicsICdiYWNrZ3JvdW5kLWNvbG9yOicgKyBjb2xvcik7XG59XG4vKipcbiAqIEBwYXJhbSB7QXJyYXl9IHN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gc3R5bGVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBjbG9zZVRhZyhzdGFjaywgc3R5bGUpIHtcbiAgdmFyIGxhc3Q7XG5cbiAgaWYgKHN0YWNrLnNsaWNlKC0xKVswXSA9PT0gc3R5bGUpIHtcbiAgICBsYXN0ID0gc3RhY2sucG9wKCk7XG4gIH1cblxuICBpZiAobGFzdCkge1xuICAgIHJldHVybiAnPC8nICsgc3R5bGUgKyAnPic7XG4gIH1cbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0FycmF5fVxuICovXG5cblxuZnVuY3Rpb24gdG9rZW5pemUodGV4dCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIGFuc2lNYXRjaCA9IGZhbHNlO1xuICB2YXIgYW5zaUhhbmRsZXIgPSAzO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVYdGVybTI1NihtLCBnMSkge1xuICAgIGNhbGxiYWNrKCd4dGVybTI1NicsIGcxKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBmdW5jdGlvbiBuZXdsaW5lKG0pIHtcbiAgICBpZiAob3B0aW9ucy5uZXdsaW5lKSB7XG4gICAgICBjYWxsYmFjaygnZGlzcGxheScsIC0xKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soJ3RleHQnLCBtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBmdW5jdGlvbiBhbnNpTWVzcyhtLCBnMSkge1xuICAgIGFuc2lNYXRjaCA9IHRydWU7XG5cbiAgICBpZiAoZzEudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZzEgPSAnMCc7XG4gICAgfVxuXG4gICAgZzEgPSBnMS50cmltUmlnaHQoJzsnKS5zcGxpdCgnOycpO1xuXG4gICAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihnMSksXG4gICAgICAgIF9zdGVwMjtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgICB2YXIgZyA9IF9zdGVwMi52YWx1ZTtcbiAgICAgICAgY2FsbGJhY2soJ2Rpc3BsYXknLCBnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9pdGVyYXRvcjIuZShlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBfaXRlcmF0b3IyLmYoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBmdW5jdGlvbiByZWFsVGV4dChtKSB7XG4gICAgY2FsbGJhY2soJ3RleHQnLCBtKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBmdW5jdGlvbiByZ2IobSkge1xuICAgIGNhbGxiYWNrKCdyZ2InLCBtKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgLyogZXNsaW50IG5vLWNvbnRyb2wtcmVnZXg6MCAqL1xuXG5cbiAgdmFyIHRva2VucyA9IFt7XG4gICAgcGF0dGVybjogL15cXHgwOCsvLFxuICAgIHN1YjogcmVtb3ZlXG4gIH0sIHtcbiAgICBwYXR0ZXJuOiAvXlxceDFiXFxbWzAxMl0/Sy8sXG4gICAgc3ViOiByZW1vdmVcbiAgfSwge1xuICAgIHBhdHRlcm46IC9eXFx4MWJcXFtcXChCLyxcbiAgICBzdWI6IHJlbW92ZVxuICB9LCB7XG4gICAgcGF0dGVybjogL15cXHgxYlxcW1szNF04OzI7XFxkKztcXGQrO1xcZCttLyxcbiAgICBzdWI6IHJnYlxuICB9LCB7XG4gICAgcGF0dGVybjogL15cXHgxYlxcWzM4OzU7KFxcZCspbS8sXG4gICAgc3ViOiByZW1vdmVYdGVybTI1NlxuICB9LCB7XG4gICAgcGF0dGVybjogL15cXG4vLFxuICAgIHN1YjogbmV3bGluZVxuICB9LCB7XG4gICAgcGF0dGVybjogL15cXHIrXFxuLyxcbiAgICBzdWI6IG5ld2xpbmVcbiAgfSwge1xuICAgIHBhdHRlcm46IC9eXFx4MWJcXFsoKD86XFxkezEsM307PykrfCltLyxcbiAgICBzdWI6IGFuc2lNZXNzXG4gIH0sIHtcbiAgICAvLyBDU0kgbiBKXG4gICAgLy8gRUQgLSBFcmFzZSBpbiBEaXNwbGF5IENsZWFycyBwYXJ0IG9mIHRoZSBzY3JlZW4uXG4gICAgLy8gSWYgbiBpcyAwIChvciBtaXNzaW5nKSwgY2xlYXIgZnJvbSBjdXJzb3IgdG8gZW5kIG9mIHNjcmVlbi5cbiAgICAvLyBJZiBuIGlzIDEsIGNsZWFyIGZyb20gY3Vyc29yIHRvIGJlZ2lubmluZyBvZiB0aGUgc2NyZWVuLlxuICAgIC8vIElmIG4gaXMgMiwgY2xlYXIgZW50aXJlIHNjcmVlbiAoYW5kIG1vdmVzIGN1cnNvciB0byB1cHBlciBsZWZ0IG9uIERPUyBBTlNJLlNZUykuXG4gICAgLy8gSWYgbiBpcyAzLCBjbGVhciBlbnRpcmUgc2NyZWVuIGFuZCBkZWxldGUgYWxsIGxpbmVzIHNhdmVkIGluIHRoZSBzY3JvbGxiYWNrIGJ1ZmZlclxuICAgIC8vICAgKHRoaXMgZmVhdHVyZSB3YXMgYWRkZWQgZm9yIHh0ZXJtIGFuZCBpcyBzdXBwb3J0ZWQgYnkgb3RoZXIgdGVybWluYWwgYXBwbGljYXRpb25zKS5cbiAgICBwYXR0ZXJuOiAvXlxceDFiXFxbXFxkP0ovLFxuICAgIHN1YjogcmVtb3ZlXG4gIH0sIHtcbiAgICAvLyBDU0kgbiA7IG0gZlxuICAgIC8vIEhWUCAtIEhvcml6b250YWwgVmVydGljYWwgUG9zaXRpb24gU2FtZSBhcyBDVVBcbiAgICBwYXR0ZXJuOiAvXlxceDFiXFxbXFxkezAsM307XFxkezAsM31mLyxcbiAgICBzdWI6IHJlbW92ZVxuICB9LCB7XG4gICAgLy8gY2F0Y2gtYWxsIGZvciBDU0kgc2VxdWVuY2VzP1xuICAgIHBhdHRlcm46IC9eXFx4MWJcXFs/W1xcZDtdezAsM30vLFxuICAgIHN1YjogcmVtb3ZlXG4gIH0sIHtcbiAgICAvKipcbiAgICAgKiBleHRyYWN0cyByZWFsIHRleHQgLSBub3QgY29udGFpbmluZzpcbiAgICAgKiAtIGBcXHgxYicgLSBFU0MgLSBlc2NhcGUgKEFzY2lpIDI3KVxuICAgICAqIC0gJ1xceDA4JyAtIEJTIC0gYmFja3NwYWNlIChBc2NpaSA4KVxuICAgICAqIC0gYFxcbmAgLSBOZXdsaW5lIC0gbGluZWZlZWQgKExGKSAoYXNjaWkgMTApXG4gICAgICogLSBgXFxyYCAtIFdpbmRvd3MgQ2FycmlhZ2UgUmV0dXJuIChDUilcbiAgICAgKi9cbiAgICBwYXR0ZXJuOiAvXigoW15cXHgxYlxceDA4XFxyXFxuXSkrKS8sXG4gICAgc3ViOiByZWFsVGV4dFxuICB9XTtcblxuICBmdW5jdGlvbiBwcm9jZXNzKGhhbmRsZXIsIGkpIHtcbiAgICBpZiAoaSA+IGFuc2lIYW5kbGVyICYmIGFuc2lNYXRjaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFuc2lNYXRjaCA9IGZhbHNlO1xuICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoaGFuZGxlci5wYXR0ZXJuLCBoYW5kbGVyLnN1Yik7XG4gIH1cblxuICB2YXIgcmVzdWx0czEgPSBbXTtcbiAgdmFyIF90ZXh0ID0gdGV4dCxcbiAgICAgIGxlbmd0aCA9IF90ZXh0Lmxlbmd0aDtcblxuICBvdXRlcjogd2hpbGUgKGxlbmd0aCA+IDApIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbyA9IDAsIGxlbiA9IHRva2Vucy5sZW5ndGg7IG8gPCBsZW47IGkgPSArK28pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gdG9rZW5zW2ldO1xuICAgICAgcHJvY2VzcyhoYW5kbGVyLCBpKTtcblxuICAgICAgaWYgKHRleHQubGVuZ3RoICE9PSBsZW5ndGgpIHtcbiAgICAgICAgLy8gV2UgbWF0Y2hlZCBhIHRva2VuIGFuZCByZW1vdmVkIGl0IGZyb20gdGhlIHRleHQuIFdlIG5lZWQgdG9cbiAgICAgICAgLy8gc3RhcnQgbWF0Y2hpbmcgKmFsbCogdG9rZW5zIGFnYWluc3QgdGhlIG5ldyB0ZXh0LlxuICAgICAgICBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgY29udGludWUgb3V0ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRleHQubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJlc3VsdHMxLnB1c2goMCk7XG4gICAgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0czE7XG59XG4vKipcbiAqIElmIHN0cmVhbWluZywgdGhlbiB0aGUgc3RhY2sgaXMgXCJzdGlja3lcIlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHN0aWNreVN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gdG9rZW5cbiAqIEBwYXJhbSB7Kn0gZGF0YVxuICogQHJldHVybnMge0FycmF5fVxuICovXG5cblxuZnVuY3Rpb24gdXBkYXRlU3RpY2t5U3RhY2soc3RpY2t5U3RhY2ssIHRva2VuLCBkYXRhKSB7XG4gIGlmICh0b2tlbiAhPT0gJ3RleHQnKSB7XG4gICAgc3RpY2t5U3RhY2sgPSBzdGlja3lTdGFjay5maWx0ZXIobm90Q2F0ZWdvcnkoY2F0ZWdvcnlGb3JDb2RlKGRhdGEpKSk7XG4gICAgc3RpY2t5U3RhY2sucHVzaCh7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5Rm9yQ29kZShkYXRhKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0aWNreVN0YWNrO1xufVxuXG52YXIgRmlsdGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0aW9ucy5mZyBUaGUgZGVmYXVsdCBmb3JlZ3JvdW5kIGNvbG9yIHVzZWQgd2hlbiByZXNldCBjb2xvciBjb2RlcyBhcmUgZW5jb3VudGVyZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0aW9ucy5iZyBUaGUgZGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yIHVzZWQgd2hlbiByZXNldCBjb2xvciBjb2RlcyBhcmUgZW5jb3VudGVyZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdGlvbnMubmV3bGluZSBDb252ZXJ0IG5ld2xpbmUgY2hhcmFjdGVycyB0byBgPGJyLz5gLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRpb25zLmVzY2FwZVhNTCBHZW5lcmF0ZSBIVE1ML1hNTCBlbnRpdGllcy5cbiAgICogQHBhcmFtIHtib29sZWFuPX0gb3B0aW9ucy5zdHJlYW0gU2F2ZSBzdHlsZSBzdGF0ZSBhY3Jvc3MgaW52b2NhdGlvbnMgb2YgYHRvSHRtbCgpYC5cbiAgICogQHBhcmFtIHsoc3RyaW5nW10gfCB7W2NvZGU6IG51bWJlcl06IHN0cmluZ30pPX0gb3B0aW9ucy5jb2xvcnMgQ2FuIG92ZXJyaWRlIHNwZWNpZmljIGNvbG9ycyBvciB0aGUgZW50aXJlIEFOU0kgcGFsZXR0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIEZpbHRlcihvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZpbHRlcik7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGlmIChvcHRpb25zLmNvbG9ycykge1xuICAgICAgb3B0aW9ucy5jb2xvcnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cy5jb2xvcnMsIG9wdGlvbnMuY29sb3JzKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5zdGFjayA9IFtdO1xuICAgIHRoaXMuc3RpY2t5U3RhY2sgPSBbXTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXX0gaW5wdXRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoRmlsdGVyLCBbe1xuICAgIGtleTogXCJ0b0h0bWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9IdG1sKGlucHV0KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpbnB1dCA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBbaW5wdXRdIDogaW5wdXQ7XG4gICAgICB2YXIgc3RhY2sgPSB0aGlzLnN0YWNrLFxuICAgICAgICAgIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICB2YXIgYnVmID0gW107XG4gICAgICB0aGlzLnN0aWNreVN0YWNrLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IGdlbmVyYXRlT3V0cHV0KHN0YWNrLCBlbGVtZW50LnRva2VuLCBlbGVtZW50LmRhdGEsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChvdXRwdXQpIHtcbiAgICAgICAgICBidWYucHVzaChvdXRwdXQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRva2VuaXplKGlucHV0LmpvaW4oJycpLCBvcHRpb25zLCBmdW5jdGlvbiAodG9rZW4sIGRhdGEpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IGdlbmVyYXRlT3V0cHV0KHN0YWNrLCB0b2tlbiwgZGF0YSwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICAgIGJ1Zi5wdXNoKG91dHB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zdHJlYW0pIHtcbiAgICAgICAgICBfdGhpcy5zdGlja3lTdGFjayA9IHVwZGF0ZVN0aWNreVN0YWNrKF90aGlzLnN0aWNreVN0YWNrLCB0b2tlbiwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGJ1Zi5wdXNoKHJlc2V0U3R5bGVzKHN0YWNrKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBidWYuam9pbignJyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEZpbHRlcjtcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbnNpX3RvX2h0bWwuanMubWFwIiwiXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wLCBXYXRjaCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgQWpheEZvcm1Nb2RhbCBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvbW9kZWwvQWpheEZvcm1Nb2RhbFwiXG5pbXBvcnQgRm9ybUluaXRpYWxpemVyIGZyb20gXCJAZW5oYXZvL2FwcC9mb3JtL0Zvcm1Jbml0aWFsaXplclwiO1xuXG5AQ29tcG9uZW50KClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgVnVlIHtcbiAgICBuYW1lOiBzdHJpbmcgPSAnYWpheC1mb3JtLW1vZGFsJztcblxuICAgIEBQcm9wKClcbiAgICBtb2RhbDogQWpheEZvcm1Nb2RhbDtcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMubW9kYWwubG9hZEZvcm0oKS50aGVuKCgpID0+IHt9KTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLm1vZGFsLnN1Ym1pdCgpLnRoZW4oKGNsb3NlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZihjbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGNsb3NlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZihjbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xvc2UoKTtcbiAgICB9XG5cbiAgICB0cmFucyh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0cmFuc2xhdG9yLnRyYW5zKHRleHQpO1xuICAgIH1cblxuICAgIEBXYXRjaCgnbW9kYWwuZWxlbWVudCcpXG4gICAgcHJpdmF0ZSBzZXRFbGVtZW50KClcbiAgICB7XG4gICAgICAgIGxldCBpbml0aWFsaXplciA9IG5ldyBGb3JtSW5pdGlhbGl6ZXIoKTtcbiAgICAgICAgaW5pdGlhbGl6ZXIuc2V0RWxlbWVudCh0aGlzLm1vZGFsLmVsZW1lbnQpO1xuICAgICAgICAkKHRoaXMuJHJlZnMuY29udGFpbmVyKS5odG1sKFwiXCIpO1xuICAgICAgICBpbml0aWFsaXplci5hcHBlbmQodGhpcy4kcmVmcy5jb250YWluZXIpO1xuICAgICAgICB0aGlzLm1vZGFsLmZvcm0gPSB0aGlzLiRyZWZzLmNvbnRhaW5lcjtcbiAgICB9XG59XG4iLCJcblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCBJZnJhbWVNb2RhbCBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvbW9kZWwvSWZyYW1lTW9kYWxcIlxuXG5AQ29tcG9uZW50KHt9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBWdWUge1xuICAgIG5hbWU6IHN0cmluZyA9ICdpZnJhbWUtbW9kYWwnO1xuXG4gICAgQFByb3AoKVxuICAgIG1vZGFsOiBJZnJhbWVNb2RhbDtcbn1cbiIsIlxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wLCBXYXRjaCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgT3V0cHV0U3RyZWFtTW9kYWwgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL21vZGVsL091dHB1dFN0cmVhbU1vZGFsXCJcbmltcG9ydCAqIGFzIENvbnZlcnQgZnJvbSBcImFuc2ktdG8taHRtbFwiO1xuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbkBDb21wb25lbnQoe30pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdXRwdXRTdHJlYW1Nb2RhbENvbXBvbmVudCBleHRlbmRzIFZ1ZSB7XG4gICAgbmFtZTogc3RyaW5nID0gJ291dHB1dC1zdHJlYW0tbW9kYWwnO1xuXG4gICAgQFByb3AoKVxuICAgIG1vZGFsOiBPdXRwdXRTdHJlYW1Nb2RhbDtcblxuXG4gICAgY29udmVydCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nXG4gICAge1xuICAgICAgICB2YXIgY29udmVydCA9IG5ldyBDb252ZXJ0KCk7XG4gICAgICAgIHJldHVybiBjb252ZXJ0LnRvSHRtbCh2YWx1ZSlcbiAgICB9XG5cbiAgICBAV2F0Y2goJ21vZGFsLm91dHB1dCcpXG4gICAgc2Nyb2xsRG93bigpXG4gICAge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMuJHJlZnMub3V0cHV0KS5zY3JvbGxUb3AoJCh0aGlzLiRyZWZzLm91dHB1dCkuaGVpZ2h0KCkpO1xuICAgICAgICB9LCAxMDApO1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWNvZGVIVE1MID0gZXhwb3J0cy5kZWNvZGVIVE1MU3RyaWN0ID0gZXhwb3J0cy5kZWNvZGVYTUwgPSB2b2lkIDA7XG52YXIgZW50aXRpZXNfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZW50aXRpZXMuanNvblwiKSk7XG52YXIgbGVnYWN5X2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL2xlZ2FjeS5qc29uXCIpKTtcbnZhciB4bWxfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMveG1sLmpzb25cIikpO1xudmFyIGRlY29kZV9jb2RlcG9pbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9kZWNvZGVfY29kZXBvaW50XCIpKTtcbnZhciBzdHJpY3RFbnRpdHlSZSA9IC8mKD86W2EtekEtWjAtOV0rfCNbeFhdW1xcZGEtZkEtRl0rfCNcXGQrKTsvZztcbmV4cG9ydHMuZGVjb2RlWE1MID0gZ2V0U3RyaWN0RGVjb2Rlcih4bWxfanNvbl8xLmRlZmF1bHQpO1xuZXhwb3J0cy5kZWNvZGVIVE1MU3RyaWN0ID0gZ2V0U3RyaWN0RGVjb2RlcihlbnRpdGllc19qc29uXzEuZGVmYXVsdCk7XG5mdW5jdGlvbiBnZXRTdHJpY3REZWNvZGVyKG1hcCkge1xuICAgIHZhciByZXBsYWNlID0gZ2V0UmVwbGFjZXIobWFwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZShzdHJpY3RFbnRpdHlSZSwgcmVwbGFjZSk7IH07XG59XG52YXIgc29ydGVyID0gZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIChhIDwgYiA/IDEgOiAtMSk7IH07XG5leHBvcnRzLmRlY29kZUhUTUwgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsZWdhY3kgPSBPYmplY3Qua2V5cyhsZWdhY3lfanNvbl8xLmRlZmF1bHQpLnNvcnQoc29ydGVyKTtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KS5zb3J0KHNvcnRlcik7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGVnYWN5W2pdID09PSBrZXlzW2ldKSB7XG4gICAgICAgICAgICBrZXlzW2ldICs9IFwiOz9cIjtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGtleXNbaV0gKz0gXCI7XCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIiYoPzpcIiArIGtleXMuam9pbihcInxcIikgKyBcInwjW3hYXVtcXFxcZGEtZkEtRl0rOz98I1xcXFxkKzs/KVwiLCBcImdcIik7XG4gICAgdmFyIHJlcGxhY2UgPSBnZXRSZXBsYWNlcihlbnRpdGllc19qc29uXzEuZGVmYXVsdCk7XG4gICAgZnVuY3Rpb24gcmVwbGFjZXIoc3RyKSB7XG4gICAgICAgIGlmIChzdHIuc3Vic3RyKC0xKSAhPT0gXCI7XCIpXG4gICAgICAgICAgICBzdHIgKz0gXCI7XCI7XG4gICAgICAgIHJldHVybiByZXBsYWNlKHN0cik7XG4gICAgfVxuICAgIC8vIFRPRE8gY29uc2lkZXIgY3JlYXRpbmcgYSBtZXJnZWQgbWFwXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UocmUsIHJlcGxhY2VyKTsgfTtcbn0pKCk7XG5mdW5jdGlvbiBnZXRSZXBsYWNlcihtYXApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShzdHIpIHtcbiAgICAgICAgaWYgKHN0ci5jaGFyQXQoMSkgPT09IFwiI1wiKSB7XG4gICAgICAgICAgICB2YXIgc2Vjb25kQ2hhciA9IHN0ci5jaGFyQXQoMik7XG4gICAgICAgICAgICBpZiAoc2Vjb25kQ2hhciA9PT0gXCJYXCIgfHwgc2Vjb25kQ2hhciA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlX2NvZGVwb2ludF8xLmRlZmF1bHQocGFyc2VJbnQoc3RyLnN1YnN0cigzKSwgMTYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVfY29kZXBvaW50XzEuZGVmYXVsdChwYXJzZUludChzdHIuc3Vic3RyKDIpLCAxMCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvcHJlZmVyLW51bGxpc2gtY29hbGVzY2luZ1xuICAgICAgICByZXR1cm4gbWFwW3N0ci5zbGljZSgxLCAtMSldIHx8IHN0cjtcbiAgICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGVjb2RlX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tYXBzL2RlY29kZS5qc29uXCIpKTtcbi8vIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9oZS9ibG9iL21hc3Rlci9zcmMvaGUuanMjTDk0LUwxMTlcbnZhciBmcm9tQ29kZVBvaW50ID0gXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LWNvbmRpdGlvblxuU3RyaW5nLmZyb21Db2RlUG9pbnQgfHxcbiAgICBmdW5jdGlvbiAoY29kZVBvaW50KSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhmZmZmKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+PiAxMCkgJiAweDNmZikgfCAweGQ4MDApO1xuICAgICAgICAgICAgY29kZVBvaW50ID0gMHhkYzAwIHwgKGNvZGVQb2ludCAmIDB4M2ZmKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnQoY29kZVBvaW50KSB7XG4gICAgaWYgKChjb2RlUG9pbnQgPj0gMHhkODAwICYmIGNvZGVQb2ludCA8PSAweGRmZmYpIHx8IGNvZGVQb2ludCA+IDB4MTBmZmZmKSB7XG4gICAgICAgIHJldHVybiBcIlxcdUZGRkRcIjtcbiAgICB9XG4gICAgaWYgKGNvZGVQb2ludCBpbiBkZWNvZGVfanNvbl8xLmRlZmF1bHQpIHtcbiAgICAgICAgY29kZVBvaW50ID0gZGVjb2RlX2pzb25fMS5kZWZhdWx0W2NvZGVQb2ludF07XG4gICAgfVxuICAgIHJldHVybiBmcm9tQ29kZVBvaW50KGNvZGVQb2ludCk7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBkZWNvZGVDb2RlUG9pbnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXNjYXBlVVRGOCA9IGV4cG9ydHMuZXNjYXBlID0gZXhwb3J0cy5lbmNvZGVOb25Bc2NpaUhUTUwgPSBleHBvcnRzLmVuY29kZUhUTUwgPSBleHBvcnRzLmVuY29kZVhNTCA9IHZvaWQgMDtcbnZhciB4bWxfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMveG1sLmpzb25cIikpO1xudmFyIGludmVyc2VYTUwgPSBnZXRJbnZlcnNlT2JqKHhtbF9qc29uXzEuZGVmYXVsdCk7XG52YXIgeG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZVhNTCk7XG4vKipcbiAqIEVuY29kZXMgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBhcyB3ZWxsIGFzIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIFhNTFxuICogZG9jdW1lbnRzIHVzaW5nIFhNTCBlbnRpdGllcy5cbiAqXG4gKiBJZiBhIGNoYXJhY3RlciBoYXMgbm8gZXF1aXZhbGVudCBlbnRpdHksIGFcbiAqIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApIHdpbGwgYmUgdXNlZC5cbiAqL1xuZXhwb3J0cy5lbmNvZGVYTUwgPSBnZXRBU0NJSUVuY29kZXIoaW52ZXJzZVhNTCk7XG52YXIgZW50aXRpZXNfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZW50aXRpZXMuanNvblwiKSk7XG52YXIgaW52ZXJzZUhUTUwgPSBnZXRJbnZlcnNlT2JqKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KTtcbnZhciBodG1sUmVwbGFjZXIgPSBnZXRJbnZlcnNlUmVwbGFjZXIoaW52ZXJzZUhUTUwpO1xuLyoqXG4gKiBFbmNvZGVzIGFsbCBlbnRpdGllcyBhbmQgbm9uLUFTQ0lJIGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxuICpcbiAqIFRoaXMgaW5jbHVkZXMgY2hhcmFjdGVycyB0aGF0IGFyZSB2YWxpZCBBU0NJSSBjaGFyYWN0ZXJzIGluIEhUTUwgZG9jdW1lbnRzLlxuICogRm9yIGV4YW1wbGUgYCNgIHdpbGwgYmUgZW5jb2RlZCBhcyBgJm51bTtgLiBUbyBnZXQgYSBtb3JlIGNvbXBhY3Qgb3V0cHV0LFxuICogY29uc2lkZXIgdXNpbmcgdGhlIGBlbmNvZGVOb25Bc2NpaUhUTUxgIGZ1bmN0aW9uLlxuICpcbiAqIElmIGEgY2hhcmFjdGVyIGhhcyBubyBlcXVpdmFsZW50IGVudGl0eSwgYVxuICogbnVtZXJpYyBoZXhhZGVjaW1hbCByZWZlcmVuY2UgKGVnLiBgJiN4ZmM7YCkgd2lsbCBiZSB1c2VkLlxuICovXG5leHBvcnRzLmVuY29kZUhUTUwgPSBnZXRJbnZlcnNlKGludmVyc2VIVE1MLCBodG1sUmVwbGFjZXIpO1xuLyoqXG4gKiBFbmNvZGVzIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycywgYXMgd2VsbCBhcyBjaGFyYWN0ZXJzIG5vdCB2YWxpZCBpbiBIVE1MXG4gKiBkb2N1bWVudHMgdXNpbmcgSFRNTCBlbnRpdGllcy5cbiAqXG4gKiBJZiBhIGNoYXJhY3RlciBoYXMgbm8gZXF1aXZhbGVudCBlbnRpdHksIGFcbiAqIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApIHdpbGwgYmUgdXNlZC5cbiAqL1xuZXhwb3J0cy5lbmNvZGVOb25Bc2NpaUhUTUwgPSBnZXRBU0NJSUVuY29kZXIoaW52ZXJzZUhUTUwpO1xuZnVuY3Rpb24gZ2V0SW52ZXJzZU9iaihvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKVxuICAgICAgICAuc29ydCgpXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKGludmVyc2UsIG5hbWUpIHtcbiAgICAgICAgaW52ZXJzZVtvYmpbbmFtZV1dID0gXCImXCIgKyBuYW1lICsgXCI7XCI7XG4gICAgICAgIHJldHVybiBpbnZlcnNlO1xuICAgIH0sIHt9KTtcbn1cbmZ1bmN0aW9uIGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlKSB7XG4gICAgdmFyIHNpbmdsZSA9IFtdO1xuICAgIHZhciBtdWx0aXBsZSA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBPYmplY3Qua2V5cyhpbnZlcnNlKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGsgPSBfYVtfaV07XG4gICAgICAgIGlmIChrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgLy8gQWRkIHZhbHVlIHRvIHNpbmdsZSBhcnJheVxuICAgICAgICAgICAgc2luZ2xlLnB1c2goXCJcXFxcXCIgKyBrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFkZCB2YWx1ZSB0byBtdWx0aXBsZSBhcnJheVxuICAgICAgICAgICAgbXVsdGlwbGUucHVzaChrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBZGQgcmFuZ2VzIHRvIHNpbmdsZSBjaGFyYWN0ZXJzLlxuICAgIHNpbmdsZS5zb3J0KCk7XG4gICAgZm9yICh2YXIgc3RhcnQgPSAwOyBzdGFydCA8IHNpbmdsZS5sZW5ndGggLSAxOyBzdGFydCsrKSB7XG4gICAgICAgIC8vIEZpbmQgdGhlIGVuZCBvZiBhIHJ1biBvZiBjaGFyYWN0ZXJzXG4gICAgICAgIHZhciBlbmQgPSBzdGFydDtcbiAgICAgICAgd2hpbGUgKGVuZCA8IHNpbmdsZS5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICBzaW5nbGVbZW5kXS5jaGFyQ29kZUF0KDEpICsgMSA9PT0gc2luZ2xlW2VuZCArIDFdLmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgICAgIGVuZCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb3VudCA9IDEgKyBlbmQgLSBzdGFydDtcbiAgICAgICAgLy8gV2Ugd2FudCB0byByZXBsYWNlIGF0IGxlYXN0IHRocmVlIGNoYXJhY3RlcnNcbiAgICAgICAgaWYgKGNvdW50IDwgMylcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBzaW5nbGUuc3BsaWNlKHN0YXJ0LCBjb3VudCwgc2luZ2xlW3N0YXJ0XSArIFwiLVwiICsgc2luZ2xlW2VuZF0pO1xuICAgIH1cbiAgICBtdWx0aXBsZS51bnNoaWZ0KFwiW1wiICsgc2luZ2xlLmpvaW4oXCJcIikgKyBcIl1cIik7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAobXVsdGlwbGUuam9pbihcInxcIiksIFwiZ1wiKTtcbn1cbi8vIC9bXlxcMC1cXHg3Rl0vZ3VcbnZhciByZU5vbkFTQ0lJID0gLyg/OltcXHg4MC1cXHVEN0ZGXFx1RTAwMC1cXHVGRkZGXXxbXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFtcXHVEODAwLVxcdURCRkZdKD8hW1xcdURDMDAtXFx1REZGRl0pfCg/OlteXFx1RDgwMC1cXHVEQkZGXXxeKVtcXHVEQzAwLVxcdURGRkZdKS9nO1xudmFyIGdldENvZGVQb2ludCA9IFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bm5lY2Vzc2FyeS1jb25kaXRpb25cblN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQgIT0gbnVsbFxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyLmNvZGVQb2ludEF0KDApOyB9XG4gICAgOiAvLyBodHRwOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIChjLmNoYXJDb2RlQXQoMCkgLSAweGQ4MDApICogMHg0MDAgK1xuICAgICAgICAgICAgICAgIGMuY2hhckNvZGVBdCgxKSAtXG4gICAgICAgICAgICAgICAgMHhkYzAwICtcbiAgICAgICAgICAgICAgICAweDEwMDAwO1xuICAgICAgICB9O1xuZnVuY3Rpb24gc2luZ2xlQ2hhclJlcGxhY2VyKGMpIHtcbiAgICByZXR1cm4gXCImI3hcIiArIChjLmxlbmd0aCA+IDEgPyBnZXRDb2RlUG9pbnQoYykgOiBjLmNoYXJDb2RlQXQoMCkpXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnRvVXBwZXJDYXNlKCkgKyBcIjtcIjtcbn1cbmZ1bmN0aW9uIGdldEludmVyc2UoaW52ZXJzZSwgcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlLCBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gaW52ZXJzZVtuYW1lXTsgfSlcbiAgICAgICAgICAgIC5yZXBsYWNlKHJlTm9uQVNDSUksIHNpbmdsZUNoYXJSZXBsYWNlcik7XG4gICAgfTtcbn1cbnZhciByZUVzY2FwZUNoYXJzID0gbmV3IFJlZ0V4cCh4bWxSZXBsYWNlci5zb3VyY2UgKyBcInxcIiArIHJlTm9uQVNDSUkuc291cmNlLCBcImdcIik7XG4vKipcbiAqIEVuY29kZXMgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBhcyB3ZWxsIGFzIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIFhNTFxuICogZG9jdW1lbnRzIHVzaW5nIG51bWVyaWMgaGV4YWRlY2ltYWwgcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApLlxuICpcbiAqIEhhdmUgYSBsb29rIGF0IGBlc2NhcGVVVEY4YCBpZiB5b3Ugd2FudCBhIG1vcmUgY29uY2lzZSBvdXRwdXQgYXQgdGhlIGV4cGVuc2VcbiAqIG9mIHJlZHVjZWQgdHJhbnNwb3J0YWJpbGl0eS5cbiAqXG4gKiBAcGFyYW0gZGF0YSBTdHJpbmcgdG8gZXNjYXBlLlxuICovXG5mdW5jdGlvbiBlc2NhcGUoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnJlcGxhY2UocmVFc2NhcGVDaGFycywgc2luZ2xlQ2hhclJlcGxhY2VyKTtcbn1cbmV4cG9ydHMuZXNjYXBlID0gZXNjYXBlO1xuLyoqXG4gKiBFbmNvZGVzIGFsbCBjaGFyYWN0ZXJzIG5vdCB2YWxpZCBpbiBYTUwgZG9jdW1lbnRzIHVzaW5nIG51bWVyaWMgaGV4YWRlY2ltYWxcbiAqIHJlZmVyZW5jZSAoZWcuIGAmI3hmYztgKS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIG91dHB1dCB3aWxsIGJlIGNoYXJhY3Rlci1zZXQgZGVwZW5kZW50LlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBlc2NhcGUuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVVURjgoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLnJlcGxhY2UoeG1sUmVwbGFjZXIsIHNpbmdsZUNoYXJSZXBsYWNlcik7XG59XG5leHBvcnRzLmVzY2FwZVVURjggPSBlc2NhcGVVVEY4O1xuZnVuY3Rpb24gZ2V0QVNDSUlFbmNvZGVyKG9iaikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YS5yZXBsYWNlKHJlRXNjYXBlQ2hhcnMsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBvYmpbY10gfHwgc2luZ2xlQ2hhclJlcGxhY2VyKGMpOyB9KTtcbiAgICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlY29kZVhNTFN0cmljdCA9IGV4cG9ydHMuZGVjb2RlSFRNTDVTdHJpY3QgPSBleHBvcnRzLmRlY29kZUhUTUw0U3RyaWN0ID0gZXhwb3J0cy5kZWNvZGVIVE1MNSA9IGV4cG9ydHMuZGVjb2RlSFRNTDQgPSBleHBvcnRzLmRlY29kZUhUTUxTdHJpY3QgPSBleHBvcnRzLmRlY29kZUhUTUwgPSBleHBvcnRzLmRlY29kZVhNTCA9IGV4cG9ydHMuZW5jb2RlSFRNTDUgPSBleHBvcnRzLmVuY29kZUhUTUw0ID0gZXhwb3J0cy5lc2NhcGVVVEY4ID0gZXhwb3J0cy5lc2NhcGUgPSBleHBvcnRzLmVuY29kZU5vbkFzY2lpSFRNTCA9IGV4cG9ydHMuZW5jb2RlSFRNTCA9IGV4cG9ydHMuZW5jb2RlWE1MID0gZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLmRlY29kZVN0cmljdCA9IGV4cG9ydHMuZGVjb2RlID0gdm9pZCAwO1xudmFyIGRlY29kZV8xID0gcmVxdWlyZShcIi4vZGVjb2RlXCIpO1xudmFyIGVuY29kZV8xID0gcmVxdWlyZShcIi4vZW5jb2RlXCIpO1xuLyoqXG4gKiBEZWNvZGVzIGEgc3RyaW5nIHdpdGggZW50aXRpZXMuXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGRlY29kZS5cbiAqIEBwYXJhbSBsZXZlbCBPcHRpb25hbCBsZXZlbCB0byBkZWNvZGUgYXQuIDAgPSBYTUwsIDEgPSBIVE1MLiBEZWZhdWx0IGlzIDAuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGRlY29kZVhNTGAgb3IgYGRlY29kZUhUTUxgIGRpcmVjdGx5LlxuICovXG5mdW5jdGlvbiBkZWNvZGUoZGF0YSwgbGV2ZWwpIHtcbiAgICByZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZGVjb2RlXzEuZGVjb2RlWE1MIDogZGVjb2RlXzEuZGVjb2RlSFRNTCkoZGF0YSk7XG59XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbi8qKlxuICogRGVjb2RlcyBhIHN0cmluZyB3aXRoIGVudGl0aWVzLiBEb2VzIG5vdCBhbGxvdyBtaXNzaW5nIHRyYWlsaW5nIHNlbWljb2xvbnMgZm9yIGVudGl0aWVzLlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBkZWNvZGUuXG4gKiBAcGFyYW0gbGV2ZWwgT3B0aW9uYWwgbGV2ZWwgdG8gZGVjb2RlIGF0LiAwID0gWE1MLCAxID0gSFRNTC4gRGVmYXVsdCBpcyAwLlxuICogQGRlcHJlY2F0ZWQgVXNlIGBkZWNvZGVIVE1MU3RyaWN0YCBvciBgZGVjb2RlWE1MYCBkaXJlY3RseS5cbiAqL1xuZnVuY3Rpb24gZGVjb2RlU3RyaWN0KGRhdGEsIGxldmVsKSB7XG4gICAgcmV0dXJuICghbGV2ZWwgfHwgbGV2ZWwgPD0gMCA/IGRlY29kZV8xLmRlY29kZVhNTCA6IGRlY29kZV8xLmRlY29kZUhUTUxTdHJpY3QpKGRhdGEpO1xufVxuZXhwb3J0cy5kZWNvZGVTdHJpY3QgPSBkZWNvZGVTdHJpY3Q7XG4vKipcbiAqIEVuY29kZXMgYSBzdHJpbmcgd2l0aCBlbnRpdGllcy5cbiAqXG4gKiBAcGFyYW0gZGF0YSBTdHJpbmcgdG8gZW5jb2RlLlxuICogQHBhcmFtIGxldmVsIE9wdGlvbmFsIGxldmVsIHRvIGVuY29kZSBhdC4gMCA9IFhNTCwgMSA9IEhUTUwuIERlZmF1bHQgaXMgMC5cbiAqIEBkZXByZWNhdGVkIFVzZSBgZW5jb2RlSFRNTGAsIGBlbmNvZGVYTUxgIG9yIGBlbmNvZGVOb25Bc2NpaUhUTUxgIGRpcmVjdGx5LlxuICovXG5mdW5jdGlvbiBlbmNvZGUoZGF0YSwgbGV2ZWwpIHtcbiAgICByZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZW5jb2RlXzEuZW5jb2RlWE1MIDogZW5jb2RlXzEuZW5jb2RlSFRNTCkoZGF0YSk7XG59XG5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbnZhciBlbmNvZGVfMiA9IHJlcXVpcmUoXCIuL2VuY29kZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVuY29kZVhNTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlWE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW5jb2RlSFRNTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVuY29kZU5vbkFzY2lpSFRNTFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlTm9uQXNjaWlIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZXNjYXBlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lc2NhcGU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlc2NhcGVVVEY4XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lc2NhcGVVVEY4OyB9IH0pO1xuLy8gTGVnYWN5IGFsaWFzZXMgKGRlcHJlY2F0ZWQpXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlbmNvZGVIVE1MNFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlXzIuZW5jb2RlSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVuY29kZUhUTUw1XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lbmNvZGVIVE1MOyB9IH0pO1xudmFyIGRlY29kZV8yID0gcmVxdWlyZShcIi4vZGVjb2RlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlWE1MXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVYTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTFN0cmljdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlSFRNTFN0cmljdDsgfSB9KTtcbi8vIExlZ2FjeSBhbGlhc2VzIChkZXByZWNhdGVkKVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTDRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZUhUTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MNVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZUhUTUw0U3RyaWN0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVIVE1MU3RyaWN0OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTDVTdHJpY3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZUhUTUxTdHJpY3Q7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVYTUxTdHJpY3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZVhNTDsgfSB9KTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogIV92bS5tb2RhbC5sb2FkaW5nLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIiFtb2RhbC5sb2FkaW5nXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybS1jb250YWluZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJ0biBwcmltYXJ5XCIsIG9uOiB7IGNsaWNrOiBfdm0uc2F2ZSB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50cmFucyhfdm0ubW9kYWwuc2F2ZUxhYmVsKSkpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1idG5cIiwgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50cmFucyhfdm0ubW9kYWwuY2xvc2VMYWJlbCkpKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLm1vZGFsLmxvYWRpbmcgPyBfYyhcImxvYWRpbmctc2NyZWVuXCIpIDogX3ZtLl9lKCksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImZvcm1cIiwgeyByZWY6IFwiY29udGFpbmVyXCIgfSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbFwiIH0sIFtfdm0uX3YoXCJcXG4gICAgSWZyYW1lXFxuXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiAhX3ZtLm1vZGFsLmxvYWRpbmcsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIiFtb2RhbC5sb2FkaW5nXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtZm9ybS1jb250YWluZXJcIixcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVmOiBcIm91dHB1dFwiLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICBcIm92ZXJmbG93LXlcIjogXCJzY3JvbGxcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNTAwcHhcIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwMHB4XCIsXG4gICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiMwMDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInByZVwiLCB7XG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5jb252ZXJ0KF92bS5tb2RhbC5vdXRwdXQpKSB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1idG5cIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb2RhbC5jbG9zZSgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ubW9kYWwuY2xvc2VMYWJlbCkpXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==