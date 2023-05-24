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
  var FormDispatcher = /** @class */function () {
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
  var FormInitializer = /** @class */function () {
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
  var FormConvertEvent = /** @class */function () {
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
  var FormElementEvent = /** @class */function () {
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/form/event/FormElementEvent */ "./node_modules/@enhavo/app/form/event/FormElementEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, FormElementEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var FormInsertEvent = /** @class */function (_super) {
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/form/event/FormElementEvent */ "./node_modules/@enhavo/app/form/event/FormElementEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, FormElementEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var FormReleaseEvent = /** @class */function (_super) {
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
  var ModalManager = /** @class */function () {
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
  var ModalRegistry = /** @class */function (_super) {
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
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_AjaxFormModalComponent_vue_vue_type_template_id_540a3f72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../vue-loader/lib??vue-loader-options!./AjaxFormModalComponent.vue?vue&type=template&id=540a3f72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=template&id=540a3f72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_AjaxFormModalComponent_vue_vue_type_template_id_540a3f72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_AjaxFormModalComponent_vue_vue_type_template_id_540a3f72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_IframeModalComponent_vue_vue_type_template_id_74058edc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../vue-loader/lib??vue-loader-options!./IframeModalComponent.vue?vue&type=template&id=74058edc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=template&id=74058edc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_IframeModalComponent_vue_vue_type_template_id_74058edc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_IframeModalComponent_vue_vue_type_template_id_74058edc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_OutputStreamModalComponent_vue_vue_type_template_id_a11827e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../vue-loader/lib??vue-loader-options!./OutputStreamModalComponent.vue?vue&type=template&id=a11827e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=template&id=a11827e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_OutputStreamModalComponent_vue_vue_type_template_id_a11827e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_OutputStreamModalComponent_vue_vue_type_template_id_a11827e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
  var AbstractFactory = /** @class */function () {
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/modal/factory/AbstractFactory */ "./node_modules/@enhavo/app/modal/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/modal/model/AjaxFormModal */ "./node_modules/@enhavo/app/modal/model/AjaxFormModal.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, AjaxFormModal_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var AjaxFormModalFactory = /** @class */function (_super) {
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/modal/factory/AbstractFactory */ "./node_modules/@enhavo/app/modal/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/modal/model/IframeModal */ "./node_modules/@enhavo/app/modal/model/IframeModal.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, IframeModal_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var IframeModalFactory = /** @class */function (_super) {
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/modal/factory/AbstractFactory */ "./node_modules/@enhavo/app/modal/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/modal/model/OutputStreamModal */ "./node_modules/@enhavo/app/modal/model/OutputStreamModal.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, OutputStreamModal_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OutputStreamModalFactory = /** @class */function (_super) {
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
  var AbstractModal = /** @class */function () {
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

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
    while (_) try {
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
  var AjaxFormModal = /** @class */function (_super) {
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
          return [2 /*return*/, new Promise(function (resolve, reject) {
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
            return [2 /*return*/, this.submitHandler(this, data)];
          } else {
            return [2 /*return*/, this.sendForm(data)];
          }
          return [2 /*return*/];
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/modal/model/AbstractModal */ "./node_modules/@enhavo/app/modal/model/AbstractModal.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractModal_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var IframeModal = /** @class */function (_super) {
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/modal/model/AbstractModal */ "./node_modules/@enhavo/app/modal/model/AbstractModal.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractModal_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OutputStreamModal = /** @class */function (_super) {
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

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! @enhavo/app/form/FormInitializer */ "./node_modules/@enhavo/app/form/FormInitializer.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1, FormInitializer_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ModalComponent = /** @class */function (_super) {
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
  var ModalComponent = /** @class */function (_super) {
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! ansi-to-html */ "./node_modules/ansi-to-html/lib/ansi_to_html.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1, Convert, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var OutputStreamModalComponent = /** @class */function (_super) {
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
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/modal/components/AjaxFormModalComponent.vue?vue&type=template&id=540a3f72& ***!
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
    var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy
    return _c("form", { ref: "container" })
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=template&id=74058edc&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/modal/components/IframeModalComponent.vue?vue&type=template&id=74058edc& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "modal" }, [_vm._v("\n    Iframe\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=template&id=a11827e2&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/modal/components/OutputStreamModalComponent.vue?vue&type=template&id=a11827e2& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZm9ybS9Gb3JtRGlzcGF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZm9ybS9Gb3JtSW5pdGlhbGl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2Zvcm0vZXZlbnQvRm9ybUNvbnZlcnRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZm9ybS9ldmVudC9Gb3JtRWxlbWVudEV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9mb3JtL2V2ZW50L0Zvcm1JbnNlcnRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZm9ybS9ldmVudC9Gb3JtUmVsZWFzZUV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9Nb2RhbE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL01vZGFsUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWU/M2NkNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9BamF4Rm9ybU1vZGFsQ29tcG9uZW50LnZ1ZT9iYjM2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9jb21wb25lbnRzL0lmcmFtZU1vZGFsQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9JZnJhbWVNb2RhbENvbXBvbmVudC52dWU/YTMyNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9JZnJhbWVNb2RhbENvbXBvbmVudC52dWU/ZjRiNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9PdXRwdXRTdHJlYW1Nb2RhbENvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQudnVlPzEwMjciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQudnVlPzBlOGUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9mYWN0b3J5L0FqYXhGb3JtTW9kYWxGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9mYWN0b3J5L0lmcmFtZU1vZGFsRmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvZmFjdG9yeS9PdXRwdXRTdHJlYW1Nb2RhbEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL21vZGVsL0Fic3RyYWN0TW9kYWwudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL21vZGVsL0FqYXhGb3JtTW9kYWwudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL21vZGVsL0lmcmFtZU1vZGFsLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9tb2RlbC9PdXRwdXRTdHJlYW1Nb2RhbC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbm9kZV9tb2R1bGVzL0Blbmhhdm8vY29yZS9SZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbm9kZV9tb2R1bGVzL0Blbmhhdm8vY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9jb3JlL1JlZ2lzdHJ5RW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fuc2ktdG8taHRtbC9saWIvYW5zaV90b19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9jb21wb25lbnRzL0FqYXhGb3JtTW9kYWxDb21wb25lbnQudnVlP2ZiN2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvSWZyYW1lTW9kYWxDb21wb25lbnQudnVlPzkwMGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQudnVlPzc2ODYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VudGl0aWVzL2xpYi9kZWNvZGVfY29kZXBvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnRpdGllcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21vZGFsL2NvbXBvbmVudHMvQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWU/ZjcyMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9JZnJhbWVNb2RhbENvbXBvbmVudC52dWU/OTFjMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9PdXRwdXRTdHJlYW1Nb2RhbENvbXBvbmVudC52dWU/NWU5OSJdLCJuYW1lcyI6WyJGb3JtRGlzcGF0Y2hlciIsImRpc3BhdGNoTW92ZSIsImVsZW1lbnQiLCJldmVudCIsIkZvcm1FbGVtZW50RXZlbnRfMSIsIiQiLCJ0cmlnZ2VyIiwiZGlzcGF0Y2hEcm9wIiwiZGlzcGF0Y2hDb252ZXJ0IiwiRm9ybUNvbnZlcnRFdmVudF8xIiwiZGlzcGF0Y2hJbnNlcnQiLCJGb3JtSW5zZXJ0RXZlbnRfMSIsImRpc3BhdGNoUmVsZWFzZSIsIkZvcm1SZWxlYXNlRXZlbnRfMSIsImRpc3BhdGNoUmVtb3ZlIiwiRm9ybUluaXRpYWxpemVyIiwiY29udmVydGVkIiwicmVsZWFzZWQiLCJpbnNlcnRlZCIsInByb3RvdHlwZSIsInNldEh0bWwiLCJodG1sIiwidHJpbSIsInNldEVsZW1lbnQiLCJnZXRFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0IiwicmVsZWFzZSIsImluc2VydEFmdGVyIiwiYXBwZW5kIiwiY29udmVydCIsIkZvcm1EaXNwYXRjaGVyXzEiLCJnZXRIdG1sIiwicGFyc2VIVE1MIiwiZ2V0IiwiaW5pdCIsIkZvcm1Db252ZXJ0RXZlbnQiLCJGb3JtRWxlbWVudEV2ZW50IiwiRm9ybUluc2VydEV2ZW50IiwiX3N1cGVyIiwiX19leHRlbmRzIiwiRm9ybVJlbGVhc2VFdmVudCIsIk1vZGFsTWFuYWdlciIsIm1vZGFscyIsIm1vZGFsUmVnaXN0cnkiLCJjb21wb25lbnRSZWdpc3RyeSIsInJlZ2lzdHJ5IiwiX2kiLCJfYSIsImdldENvbXBvbmVudHMiLCJsZW5ndGgiLCJjb21wb25lbnQiLCJyZWdpc3RlckNvbXBvbmVudCIsIm5hbWUiLCJyZWdpc3RlclN0b3JlIiwicmVnaXN0ZXJEYXRhIiwicHVzaCIsImRhdGEiLCJmYWN0b3J5IiwiZ2V0RmFjdG9yeSIsIm1vZGFsIiwiY3JlYXRlRnJvbURhdGEiLCJwb3AiLCJNb2RhbFJlZ2lzdHJ5IiwiY2FsbCIsImNvcmVfMSIsIlJlZ2lzdHJ5IiwiQWJzdHJhY3RGYWN0b3J5IiwiY3JlYXRlTmV3IiwiXyIsImV4dGVuZCIsImFzc2lnbiIsIkFqYXhGb3JtTW9kYWxGYWN0b3J5IiwibW9kYWxNYW5hZ2VyIiwicm91dGVyIiwiX3RoaXMiLCJBamF4Rm9ybU1vZGFsXzEiLCJBYnN0cmFjdEZhY3RvcnlfMSIsIklmcmFtZU1vZGFsRmFjdG9yeSIsIklmcmFtZU1vZGFsXzEiLCJPdXRwdXRTdHJlYW1Nb2RhbEZhY3RvcnkiLCJPdXRwdXRTdHJlYW1Nb2RhbF8xIiwiQWJzdHJhY3RNb2RhbCIsImNsb3NlIiwiQWpheEZvcm1Nb2RhbCIsImZvcm0iLCJzYXZlTGFiZWwiLCJjbG9zZUxhYmVsIiwibG9hZGluZyIsImxvYWRGb3JtIiwiUHJvbWlzZSIsInVybCIsImdlbmVyYXRlIiwicm91dGUiLCJyb3V0ZVBhcmFtZXRlcnMiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3NfMSIsInRoZW4iLCJzdWJtaXQiLCJnZXRGb3JtRGF0YSIsInN1Ym1pdEhhbmRsZXIiLCJzZW5kRm9ybSIsInBvc3QiLCJnZXRBY3Rpb25VcmwiLCJidWlsZFF1ZXJ5IiwicmVzcG9uc2VEYXRhIiwicmVjZWl2ZUZvcm0iLCJlcnJvciIsInJlc3BvbnNlIiwiYWN0aW9uSGFuZGxlciIsInZhbHVlIiwiYWN0aW9uVXJsIiwiYWN0aW9uUm91dGUiLCJhY3Rpb25Sb3V0ZVBhcmFtZXRlcnMiLCJvYmoiLCJwcmVmaXgiLCJhcmdzIiwiX3R5cGVvZiIsImkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJqb2luIiwiZm9ybURhdGEiLCJzZXJpYWxpemVBcnJheSIsImRhdGFfMSIsInJvdyIsIkFic3RyYWN0TW9kYWxfMSIsIklmcmFtZU1vZGFsIiwiT3V0cHV0U3RyZWFtTW9kYWwiLCJhcHBseSIsImFyZ3VtZW50cyIsIm91dHB1dCIsImRvbmUiLCJmZXRjaCIsImJvZHkiLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJyZWFkIiwicHJvY2Vzc1RleHQiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsImVudHJpZXMiLCJlbnRyeSIsImdldE5hbWUiLCJnZXRDb21wb25lbnQiLCJyZWdpc3RlciIsImhhcyIsImRlbGV0ZUVudHJ5Iiwic3BsaWNlIiwicGFyc2VJbnQiLCJjb21wb25lbnRzIiwiQ29tcG9uZW50IiwiZXhwb3J0cyIsIlJlZ2lzdHJ5XzEiLCJSZWdpc3RyeUludGVyZmFjZSIsIlJlZ2lzdHJ5SW50ZXJmYWNlXzEiLCJGYWN0b3J5SW50ZXJmYWNlIiwiRmFjdG9yeUludGVyZmFjZV8xIiwiQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UiLCJDb21wb25lbnRBd2FyZUludGVyZmFjZV8xIiwiUmVnaXN0cnlFbnRyeSIsIk1vZGFsQ29tcG9uZW50IiwibW91bnRlZCIsInNhdmUiLCJ0cmFucyIsInRleHQiLCIkdHJhbnNsYXRvciIsImluaXRpYWxpemVyIiwiRm9ybUluaXRpYWxpemVyXzEiLCIkcmVmcyIsImNvbnRhaW5lciIsIl9fZGVjb3JhdGUiLCJ2dWVfcHJvcGVydHlfZGVjb3JhdG9yXzEiLCJQcm9wIiwiV2F0Y2giLCJWdWUiLCJPdXRwdXRTdHJlYW1Nb2RhbENvbXBvbmVudCIsIkNvbnZlcnQiLCJ0b0h0bWwiLCJzY3JvbGxEb3duIiwid2luZG93Iiwic2V0VGltZW91dCIsInNjcm9sbFRvcCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0VBTUEsSUFBQUEsY0FBQTtJQUFBLFNBQUFBLGVBQUEsR0EyQ0E7SUF6Q2tCQSxjQUFBLENBQUFDLFlBQVksR0FBMUIsVUFBMkJDLE9BQW9C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QUFDQTtBQUNBLG9CQUFvQix1QkFBdUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBLHlCQUF5QixtREFBbUQ7QUFDNUUsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidmVuZG9yc35tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IEZvcm1FbGVtZW50RXZlbnQgZnJvbSAnQGVuaGF2by9hcHAvZm9ybS9ldmVudC9Gb3JtRWxlbWVudEV2ZW50JztcbmltcG9ydCBGb3JtQ29udmVydEV2ZW50IGZyb20gJ0Blbmhhdm8vYXBwL2Zvcm0vZXZlbnQvRm9ybUNvbnZlcnRFdmVudCc7XG5pbXBvcnQgRm9ybUluc2VydEV2ZW50IGZyb20gJ0Blbmhhdm8vYXBwL2Zvcm0vZXZlbnQvRm9ybUluc2VydEV2ZW50JztcbmltcG9ydCBGb3JtUmVsZWFzZUV2ZW50IGZyb20gJ0Blbmhhdm8vYXBwL2Zvcm0vZXZlbnQvRm9ybVJlbGVhc2VFdmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1EaXNwYXRjaGVyXG57XG4gICAgcHVibGljIHN0YXRpYyBkaXNwYXRjaE1vdmUoZWxlbWVudDogSFRNTEVsZW1lbnQpXG4gICAge1xuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRm9ybUVsZW1lbnRFdmVudChlbGVtZW50KTtcbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2Zvcm1Nb3ZlJywgZXZlbnQpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkaXNwYXRjaERyb3AoZWxlbWVudDogSFRNTEVsZW1lbnQpXG4gICAge1xuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRm9ybUVsZW1lbnRFdmVudChlbGVtZW50KTtcbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2Zvcm1Ecm9wJywgZXZlbnQpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkaXNwYXRjaENvbnZlcnQoZWxlbWVudDogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEZvcm1Db252ZXJ0RXZlbnQoZWxlbWVudCk7XG4gICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdmb3JtQ29udmVydCcsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGlzcGF0Y2hJbnNlcnQoZWxlbWVudDogSFRNTEVsZW1lbnQpXG4gICAge1xuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRm9ybUluc2VydEV2ZW50KGVsZW1lbnQpO1xuICAgICAgICAkKCdib2R5JykudHJpZ2dlcignZm9ybUluc2VydCcsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGlzcGF0Y2hSZWxlYXNlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KVxuICAgIHtcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEZvcm1SZWxlYXNlRXZlbnQoZWxlbWVudCk7XG4gICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdmb3JtUmVsZWFzZScsIGV2ZW50KTtcbiAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGlzcGF0Y2hSZW1vdmUoZWxlbWVudDogSFRNTEVsZW1lbnQpXG4gICAge1xuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRm9ybUVsZW1lbnRFdmVudChlbGVtZW50KTtcbiAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2Zvcm1SZW1vdmUnLCBldmVudCk7XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBGb3JtRGlzcGF0Y2hlciBmcm9tICdAZW5oYXZvL2FwcC9mb3JtL0Zvcm1EaXNwYXRjaGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUluaXRpYWxpemVyXG57XG4gICAgcHJpdmF0ZSBodG1sOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBjb252ZXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgcmVsZWFzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgaW5zZXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBzZXRIdG1sKGh0bWw6IHN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMuaHRtbCA9IGh0bWwudHJpbSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5zZXJ0QmVmb3JlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5pbnNlcnQoKTtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmluc2VydEJlZm9yZShlbGVtZW50KTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluc2VydEFmdGVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5pbnNlcnQoKTtcbiAgICAgICAgJCh0aGlzLmVsZW1lbnQpLmluc2VydEFmdGVyKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXBwZW5kKGVsZW1lbnQ6IEhUTUxFbGVtZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5pbnNlcnQoKTtcbiAgICAgICAgJChlbGVtZW50KS5hcHBlbmQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5yZWxlYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnZlcnQoKVxuICAgIHtcbiAgICAgICAgaWYoIXRoaXMuY29udmVydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnZlcnRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZih0aGlzLmh0bWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWwgPSBGb3JtRGlzcGF0Y2hlci5kaXNwYXRjaENvbnZlcnQodGhpcy5odG1sKS5nZXRIdG1sKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gPEhUTUxFbGVtZW50PiQoJC5wYXJzZUhUTUwodGhpcy5odG1sKSkuZ2V0KDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbGVhc2UoKVxuICAgIHtcbiAgICAgICAgaWYoIXRoaXMuaW5zZXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighdGhpcy5yZWxlYXNlZCkge1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBGb3JtRGlzcGF0Y2hlci5kaXNwYXRjaFJlbGVhc2UodGhpcy5lbGVtZW50KS5nZXRFbGVtZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpXG4gICAge1xuICAgICAgICB0aGlzLnJlbGVhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5zZXJ0KClcbiAgICB7XG4gICAgICAgIGlmKCF0aGlzLmluc2VydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmluc2VydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYoIXRoaXMuY29udmVydGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IEZvcm1EaXNwYXRjaGVyLmRpc3BhdGNoSW5zZXJ0KHRoaXMuZWxlbWVudCkuZ2V0RWxlbWVudCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtQ29udmVydEV2ZW50XG57XG4gICAgcHJpdmF0ZSBodG1sOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihodG1sOiBzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLmh0bWwgPSBodG1sO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRIdG1sKGh0bWw6IHN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMuaHRtbCA9IGh0bWw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEh0bWwoKTogc3RyaW5nXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5odG1sO1xuICAgIH1cbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUVsZW1lbnRFdmVudFxue1xuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudClcbiAgICB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpXG4gICAge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFbGVtZW50KClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgRm9ybUVsZW1lbnRFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvZm9ybS9ldmVudC9Gb3JtRWxlbWVudEV2ZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1JbnNlcnRFdmVudCBleHRlbmRzIEZvcm1FbGVtZW50RXZlbnRcbntcblxufSIsImltcG9ydCBGb3JtRWxlbWVudEV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC9mb3JtL2V2ZW50L0Zvcm1FbGVtZW50RXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVJlbGVhc2VFdmVudCBleHRlbmRzIEZvcm1FbGVtZW50RXZlbnRcbntcblxufSIsImltcG9ydCBNb2RhbEludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxJbnRlcmZhY2VcIjtcbmltcG9ydCBNb2RhbFJlZ2lzdHJ5IGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9Nb2RhbFJlZ2lzdHJ5XCI7XG5pbXBvcnQgQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UsIHsgQ29tcG9uZW50QXdhcmVUeXBlIH0gZnJvbSBcIkBlbmhhdm8vY29yZS9Db21wb25lbnRBd2FyZUludGVyZmFjZVwiO1xuaW1wb3J0IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWxNYW5hZ2VyXG57XG4gICAgcHVibGljIG1vZGFsczogTW9kYWxJbnRlcmZhY2VbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlZ2lzdHJ5OiBNb2RhbFJlZ2lzdHJ5O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG1vZGFsczogTW9kYWxJbnRlcmZhY2VbXSwgbW9kYWxSZWdpc3RyeTogTW9kYWxSZWdpc3RyeSwgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlKVxuICAgIHtcbiAgICAgICAgdGhpcy5tb2RhbHMgPSBtb2RhbHM7XG4gICAgICAgIHRoaXMucmVnaXN0cnkgPSBtb2RhbFJlZ2lzdHJ5O1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0gY29tcG9uZW50UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgZm9yIChsZXQgY29tcG9uZW50IG9mIHRoaXMucmVnaXN0cnkuZ2V0Q29tcG9uZW50cygpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQuY29tcG9uZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlclN0b3JlKCdtb2RhbE1hbmFnZXInLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckRhdGEodGhpcy5tb2RhbHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwdXNoKGRhdGE6IENvbXBvbmVudEF3YXJlSW50ZXJmYWNlIHwgQ29tcG9uZW50QXdhcmVUeXBlKVxuICAgIHtcbiAgICAgICAgbGV0IGZhY3RvcnkgPSB0aGlzLnJlZ2lzdHJ5LmdldEZhY3RvcnkoZGF0YS5jb21wb25lbnQpO1xuICAgICAgICBsZXQgbW9kYWwgPSBmYWN0b3J5LmNyZWF0ZUZyb21EYXRhKGRhdGEpO1xuICAgICAgICBtb2RhbC5pbml0KCk7XG4gICAgICAgIHRoaXMubW9kYWxzLnB1c2gobW9kYWwpO1xuICAgIH1cblxuICAgIHB1YmxpYyBwb3AoKVxuICAgIHtcbiAgICAgICAgdGhpcy5tb2RhbHMucG9wKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tIFwiQGVuaGF2by9jb3JlXCI7XG5pbXBvcnQgTW9kYWxGYWN0b3J5SW50ZXJmYWNlIGZyb20gXCIuL01vZGFsRmFjdG9yeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbFJlZ2lzdHJ5IGV4dGVuZHMgUmVnaXN0cnlcbntcbiAgICBnZXRGYWN0b3J5KG5hbWU6IHN0cmluZyk6IE1vZGFsRmFjdG9yeUludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiA8TW9kYWxGYWN0b3J5SW50ZXJmYWNlPnN1cGVyLmdldEZhY3RvcnkobmFtZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BamF4Rm9ybU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDBhM2Y3MiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BamF4Rm9ybU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcmVwb3MvcHJpdmF0L2phcGFuZXNlLXRleHRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NDBhM2Y3MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NDBhM2Y3MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NDBhM2Y3MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQwYTNmNzImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTQwYTNmNzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9jb21wb25lbnRzL0FqYXhGb3JtTW9kYWxDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BamF4Rm9ybU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BamF4Rm9ybU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWpheEZvcm1Nb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQwYTNmNzImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0lmcmFtZU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDA1OGVkYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JZnJhbWVNb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0lmcmFtZU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9yZXBvcy9wcml2YXQvamFwYW5lc2UtdGV4dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc0MDU4ZWRjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc0MDU4ZWRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc0MDU4ZWRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JZnJhbWVNb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzQwNThlZGMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzQwNThlZGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tb2RhbC9jb21wb25lbnRzL0lmcmFtZU1vZGFsQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWZyYW1lTW9kYWxDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lmcmFtZU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWZyYW1lTW9kYWxDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0MDU4ZWRjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9PdXRwdXRTdHJlYW1Nb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTExODI3ZTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9PdXRwdXRTdHJlYW1Nb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcmVwb3MvcHJpdmF0L2phcGFuZXNlLXRleHRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhMTE4MjdlMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhMTE4MjdlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhMTE4MjdlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExMTgyN2UyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2ExMTgyN2UyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbW9kYWwvY29tcG9uZW50cy9PdXRwdXRTdHJlYW1Nb2RhbENvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL091dHB1dFN0cmVhbU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PdXRwdXRTdHJlYW1Nb2RhbENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz9yZWYtLTYhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL091dHB1dFN0cmVhbU1vZGFsQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMTE4MjdlMiZcIiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBNb2RhbEludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgY3JlYXRlRnJvbURhdGEoZGF0YTogb2JqZWN0KTogTW9kYWxJbnRlcmZhY2VcbiAgICB7XG4gICAgICAgIGxldCBtb2RhbCA9IHRoaXMuY3JlYXRlTmV3KCk7XG4gICAgICAgIG1vZGFsID0gXy5leHRlbmQobW9kYWwsIF8uYXNzaWduKHt9LCBkYXRhKSk7XG4gICAgICAgIHJldHVybiBtb2RhbDtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBjcmVhdGVOZXcoKTogTW9kYWxJbnRlcmZhY2U7XG59IiwiaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvZmFjdG9yeS9BYnN0cmFjdEZhY3RvcnlcIjtcbmltcG9ydCBBamF4Rm9ybU1vZGFsIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9tb2RlbC9BamF4Rm9ybU1vZGFsXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJAZW5oYXZvL2NvcmUvUm91dGVyXCI7XG5pbXBvcnQgTW9kYWxNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9Nb2RhbE1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheEZvcm1Nb2RhbEZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlciwgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb2RhbE1hbmFnZXIgPSBtb2RhbE1hbmFnZXI7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBBamF4Rm9ybU1vZGFsIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBamF4Rm9ybU1vZGFsKHRoaXMubW9kYWxNYW5hZ2VyLCB0aGlzLnJvdXRlcik7XG4gICAgfVxufSIsImltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgSWZyYW1lTW9kYWwgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL21vZGVsL0lmcmFtZU1vZGFsXCI7XG5pbXBvcnQgTW9kYWxNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9Nb2RhbE1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lTW9kYWxGYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJpdmF0ZSByZWFkb25seSBtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW9kYWxNYW5hZ2VyID0gbW9kYWxNYW5hZ2VyO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBJZnJhbWVNb2RhbCB7XG4gICAgICAgIHJldHVybiBuZXcgSWZyYW1lTW9kYWwodGhpcy5tb2RhbE1hbmFnZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IE91dHB1dFN0cmVhbU1vZGFsIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9tb2RlbC9PdXRwdXRTdHJlYW1Nb2RhbFwiO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE91dHB1dFN0cmVhbU1vZGFsRmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihtb2RhbE1hbmFnZXI6IE1vZGFsTWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vZGFsTWFuYWdlciA9IG1vZGFsTWFuYWdlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogT3V0cHV0U3RyZWFtTW9kYWwge1xuICAgICAgICByZXR1cm4gbmV3IE91dHB1dFN0cmVhbU1vZGFsKHRoaXMubW9kYWxNYW5hZ2VyKTtcbiAgICB9XG59IiwiaW1wb3J0IE1vZGFsSW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9Nb2RhbEludGVyZmFjZVwiO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TW9kYWwgaW1wbGVtZW50cyBNb2RhbEludGVyZmFjZVxue1xuICAgIGNvbXBvbmVudDogc3RyaW5nO1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IobW9kYWxNYW5hZ2VyOiBNb2RhbE1hbmFnZXIpXG4gICAge1xuICAgICAgICB0aGlzLm1vZGFsTWFuYWdlciA9IG1vZGFsTWFuYWdlcjtcbiAgICB9XG5cbiAgICBpbml0KCkge31cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLm1vZGFsTWFuYWdlci5wb3AoKTtcbiAgICB9XG59IiwiaW1wb3J0IEFic3RyYWN0TW9kYWwgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL21vZGVsL0Fic3RyYWN0TW9kYWxcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IE1vZGFsTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvTW9kYWxNYW5hZ2VyXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJAZW5oYXZvL2NvcmUvUm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhGb3JtTW9kYWwgZXh0ZW5kcyBBYnN0cmFjdE1vZGFsXG57XG4gICAgcHVibGljIHJvdXRlOiBzdHJpbmc7XG4gICAgcHVibGljIHJvdXRlUGFyYW1ldGVyczogb2JqZWN0O1xuICAgIHB1YmxpYyBhY3Rpb25Sb3V0ZTogc3RyaW5nO1xuICAgIHB1YmxpYyBhY3Rpb25Sb3V0ZVBhcmFtZXRlcnM6IG9iamVjdDtcbiAgICBwdWJsaWMgYWN0aW9uVXJsOiBzdHJpbmc7XG4gICAgcHVibGljIGFjdGlvbkhhbmRsZXI6IChtb2RhbDogQWpheEZvcm1Nb2RhbCwgZGF0YTogYW55LCBlcnJvcjogc3RyaW5nKSA9PiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIHB1YmxpYyBzdWJtaXRIYW5kbGVyOiAobW9kYWw6IEFqYXhGb3JtTW9kYWwsIGRhdGE6IGFueSkgPT4gUHJvbWlzZTxib29sZWFuPjtcbiAgICBwdWJsaWMgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsO1xuICAgIHB1YmxpYyBmb3JtOiBIVE1MRWxlbWVudCA9IG51bGw7XG4gICAgcHVibGljIHNhdmVMYWJlbDogc3RyaW5nID0gJ2VuaGF2b19hcHAuc2F2ZSc7XG4gICAgcHVibGljIGNsb3NlTGFiZWw6IHN0cmluZyA9ICdlbmhhdm9fYXBwLmFib3J0JztcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGRhdGE6IGFueTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSByb3V0ZXI6IFJvdXRlcjtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGFsTWFuYWdlcjogTW9kYWxNYW5hZ2VyLCByb3V0ZXI6IFJvdXRlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKG1vZGFsTWFuYWdlcik7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWRGb3JtKCk6IFByb21pc2U8dm9pZD5cbiAgICB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnJvdXRlci5nZW5lcmF0ZSh0aGlzLnJvdXRlLCB0aGlzLnJvdXRlUGFyYW1ldGVycyk7XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBodG1sID0gZGF0YS5kYXRhLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+JC5wYXJzZUhUTUwoaHRtbClbMF07XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHN1Ym1pdCgpOiBQcm9taXNlPGJvb2xlYW4+XG4gICAge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0Rm9ybURhdGEoKTtcbiAgICAgICAgaWYgKHRoaXMuc3VibWl0SGFuZGxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0SGFuZGxlcih0aGlzLCBkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRGb3JtKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kRm9ybShkYXRhOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+XG4gICAge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IF8uZXh0ZW5kKGRhdGEsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3QodGhpcy5nZXRBY3Rpb25VcmwoKSwgdGhpcy5idWlsZFF1ZXJ5KGRhdGEpKS50aGVuKChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmVGb3JtKHJlc3BvbnNlRGF0YSwgcmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlRm9ybShlcnJvci5yZXNwb25zZSwgcmVzb2x2ZSwgcmVqZWN0KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVjZWl2ZUZvcm0ocmVzcG9uc2VEYXRhOiBhbnksIHJlc29sdmU6IChkYXRhPzogYW55KSA9PiB2b2lkLCByZWplY3Q6ICgpID0+IHZvaWQpXG4gICAge1xuICAgICAgICBpZih0aGlzLmFjdGlvbkhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcih0aGlzLCByZXNwb25zZURhdGEsIG51bGwpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaHRtbCA9IHJlc3BvbnNlRGF0YS5kYXRhLnRyaW0oKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IDxIVE1MRWxlbWVudD4kLnBhcnNlSFRNTChodG1sKVswXTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEFjdGlvblVybCgpXG4gICAge1xuICAgICAgICBpZih0aGlzLmFjdGlvblVybCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uVXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5hY3Rpb25Sb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLmdlbmVyYXRlKHRoaXMuYWN0aW9uUm91dGUsIHRoaXMuYWN0aW9uUm91dGVQYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlci5nZW5lcmF0ZSh0aGlzLnJvdXRlLCB0aGlzLnJvdXRlUGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBidWlsZFF1ZXJ5KG9iajogb2JqZWN0LCBwcmVmaXg6IHN0cmluZyA9ICcnKTogc3RyaW5nXG4gICAge1xuICAgICAgICBsZXQgYXJncyA9IFtdO1xuICAgICAgICBpZih0eXBlb2Yob2JqKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZm9yKGxldCBpIGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmKHByZWZpeCA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW2FyZ3MubGVuZ3RoXSA9IHRoaXMuYnVpbGRRdWVyeShvYmpbaV0sIGVuY29kZVVSSUNvbXBvbmVudChpKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1thcmdzLmxlbmd0aF0gPSB0aGlzLmJ1aWxkUXVlcnkob2JqW2ldLCBwcmVmaXgrJ1snK2VuY29kZVVSSUNvbXBvbmVudChpKSsnXScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyZ3NbYXJncy5sZW5ndGhdPXByZWZpeCsnPScrZW5jb2RlVVJJQ29tcG9uZW50KG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3Muam9pbignJicpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGb3JtRGF0YSgpOiBvYmplY3RcbiAgICB7XG4gICAgICAgIGxldCBmb3JtRGF0YSA9IHt9O1xuICAgICAgICBsZXQgZGF0YSA9ICQodGhpcy5mb3JtKS5zZXJpYWxpemVBcnJheSgpO1xuICAgICAgICBmb3IobGV0IHJvdyBvZiBkYXRhKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtyb3cubmFtZV0gPSByb3cudmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cbn1cbiIsImltcG9ydCBBYnN0cmFjdE1vZGFsIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9tb2RlbC9BYnN0cmFjdE1vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElmcmFtZU1vZGFsIGV4dGVuZHMgQWJzdHJhY3RNb2RhbFxue1xuICAgIHB1YmxpYyByb3V0ZTogc3RyaW5nO1xuICAgIHB1YmxpYyByb3V0ZVBhcmFtZXRlcnM6IG9iamVjdDtcblxuICAgIHB1YmxpYyBpbml0KClcbiAgICB7XG5cbiAgICB9XG59IiwiaW1wb3J0IEFic3RyYWN0TW9kYWwgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL21vZGVsL0Fic3RyYWN0TW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3V0cHV0U3RyZWFtTW9kYWwgZXh0ZW5kcyBBYnN0cmFjdE1vZGFsXG57XG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuICAgIHB1YmxpYyBjbG9zZUxhYmVsOiBzdHJpbmc7XG4gICAgcHVibGljIG91dHB1dDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgZG9uZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gdGhpcztcbiAgICAgICAgZmV0Y2godGhpcy51cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5ib2R5KVxuICAgICAgICAgICAgLnRoZW4oYm9keSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gYm9keS5nZXRSZWFkZXIoKTtcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24gcHJvY2Vzc1RleHQoeyBkb25lLCB2YWx1ZSB9KTogYW55IHtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLm91dHB1dCArPSBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKS5kZWNvZGUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIWRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkKCkudGhlbihwcm9jZXNzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiLi9SZWdpc3RyeUludGVyZmFjZVwiO1xuaW1wb3J0IFJlZ2lzdHJ5RW50cnkgZnJvbSBcIkBlbmhhdm8vY29yZS9SZWdpc3RyeUVudHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdHJ5IGltcGxlbWVudHMgUmVnaXN0cnlJbnRlcmZhY2VcbntcbiAgICBwcml2YXRlIGVudHJpZXM6IFJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBnZXQobmFtZTogc3RyaW5nKTogUmVnaXN0cnlFbnRyeVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93ICdFbnRyeSB3aXRoIG5hbWUgXCInK25hbWUrJ1wiIGRvZXMgbm90IGV4aXN0IGluIHJlZ2lzdHJ5JztcbiAgICB9XG5cbiAgICBnZXRGYWN0b3J5KG5hbWU6IHN0cmluZyk6IG9iamVjdFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpLmdldEZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnQobmFtZTogc3RyaW5nKTogb2JqZWN0XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkuZ2V0Q29tcG9uZW50KCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoZW50cnk6IFJlZ2lzdHJ5RW50cnkpOiBSZWdpc3RyeUludGVyZmFjZVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5oYXMoZW50cnkuZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVFbnRyeShlbnRyeS5nZXROYW1lKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVFbnRyeShuYW1lOiBzdHJpbmcpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgaWYodGhpcy5lbnRyaWVzW2ldLmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNwbGljZShwYXJzZUludChpKSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudHMoKTogQ29tcG9uZW50W11cbiAgICB7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gW107XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2gobmV3IENvbXBvbmVudChlbnRyeS5nZXROYW1lKCksIGVudHJ5LmdldENvbXBvbmVudCgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50XG57XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgY29tcG9uZW50OiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWdpc3RyeSBmcm9tICcuL1JlZ2lzdHJ5JztcbmltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tICcuL1JlZ2lzdHJ5SW50ZXJmYWNlJztcbmltcG9ydCBGYWN0b3J5SW50ZXJmYWNlIGZyb20gJy4vRmFjdG9yeUludGVyZmFjZSc7XG5pbXBvcnQgQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UgZnJvbSAnLi9Db21wb25lbnRBd2FyZUludGVyZmFjZSc7XG5cbmV4cG9ydCB7XG4gICAgUmVnaXN0cnksXG4gICAgUmVnaXN0cnlJbnRlcmZhY2UsXG4gICAgRmFjdG9yeUludGVyZmFjZSxcbiAgICBDb21wb25lbnRBd2FyZUludGVyZmFjZVxufTtcbiIsImltcG9ydCBGYWN0b3J5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvRmFjdG9yeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RyeUVudHJ5XG57XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb21wb25lbnQ6IG9iamVjdDtcbiAgICBwcml2YXRlIGZhY3Rvcnk6IEZhY3RvcnlJbnRlcmZhY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogb2JqZWN0LCBmYWN0b3J5OiBGYWN0b3J5SW50ZXJmYWNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLmZhY3RvcnkgPSBmYWN0b3J5O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldENvbXBvbmVudCgpOiBvYmplY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZhY3RvcnkoKTogRmFjdG9yeUludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZhY3Rvcnk7XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxudmFyIGVudGl0aWVzID0gcmVxdWlyZSgnZW50aXRpZXMnKTtcblxudmFyIGRlZmF1bHRzID0ge1xuICBmZzogJyNGRkYnLFxuICBiZzogJyMwMDAnLFxuICBuZXdsaW5lOiBmYWxzZSxcbiAgZXNjYXBlWE1MOiBmYWxzZSxcbiAgc3RyZWFtOiBmYWxzZSxcbiAgY29sb3JzOiBnZXREZWZhdWx0Q29sb3JzKClcbn07XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRDb2xvcnMoKSB7XG4gIHZhciBjb2xvcnMgPSB7XG4gICAgMDogJyMwMDAnLFxuICAgIDE6ICcjQTAwJyxcbiAgICAyOiAnIzBBMCcsXG4gICAgMzogJyNBNTAnLFxuICAgIDQ6ICcjMDBBJyxcbiAgICA1OiAnI0EwQScsXG4gICAgNjogJyMwQUEnLFxuICAgIDc6ICcjQUFBJyxcbiAgICA4OiAnIzU1NScsXG4gICAgOTogJyNGNTUnLFxuICAgIDEwOiAnIzVGNScsXG4gICAgMTE6ICcjRkY1JyxcbiAgICAxMjogJyM1NUYnLFxuICAgIDEzOiAnI0Y1RicsXG4gICAgMTQ6ICcjNUZGJyxcbiAgICAxNTogJyNGRkYnXG4gIH07XG4gIHJhbmdlKDAsIDUpLmZvckVhY2goZnVuY3Rpb24gKHJlZCkge1xuICAgIHJhbmdlKDAsIDUpLmZvckVhY2goZnVuY3Rpb24gKGdyZWVuKSB7XG4gICAgICByYW5nZSgwLCA1KS5mb3JFYWNoKGZ1bmN0aW9uIChibHVlKSB7XG4gICAgICAgIHJldHVybiBzZXRTdHlsZUNvbG9yKHJlZCwgZ3JlZW4sIGJsdWUsIGNvbG9ycyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJhbmdlKDAsIDIzKS5mb3JFYWNoKGZ1bmN0aW9uIChncmF5KSB7XG4gICAgdmFyIGMgPSBncmF5ICsgMjMyO1xuICAgIHZhciBsID0gdG9IZXhTdHJpbmcoZ3JheSAqIDEwICsgOCk7XG4gICAgY29sb3JzW2NdID0gJyMnICsgbCArIGwgKyBsO1xuICB9KTtcbiAgcmV0dXJuIGNvbG9ycztcbn1cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHJlZFxuICogQHBhcmFtIHtudW1iZXJ9IGdyZWVuXG4gKiBAcGFyYW0ge251bWJlcn0gYmx1ZVxuICogQHBhcmFtIHtvYmplY3R9IGNvbG9yc1xuICovXG5cblxuZnVuY3Rpb24gc2V0U3R5bGVDb2xvcihyZWQsIGdyZWVuLCBibHVlLCBjb2xvcnMpIHtcbiAgdmFyIGMgPSAxNiArIHJlZCAqIDM2ICsgZ3JlZW4gKiA2ICsgYmx1ZTtcbiAgdmFyIHIgPSByZWQgPiAwID8gcmVkICogNDAgKyA1NSA6IDA7XG4gIHZhciBnID0gZ3JlZW4gPiAwID8gZ3JlZW4gKiA0MCArIDU1IDogMDtcbiAgdmFyIGIgPSBibHVlID4gMCA/IGJsdWUgKiA0MCArIDU1IDogMDtcbiAgY29sb3JzW2NdID0gdG9Db2xvckhleFN0cmluZyhbciwgZywgYl0pO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBmcm9tIGEgbnVtYmVyIGxpa2UgMTUgdG8gYSBoZXggc3RyaW5nIGxpa2UgJ0YnXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gdG9IZXhTdHJpbmcobnVtKSB7XG4gIHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpO1xuXG4gIHdoaWxlIChzdHIubGVuZ3RoIDwgMikge1xuICAgIHN0ciA9ICcwJyArIHN0cjtcbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG4vKipcbiAqIENvbnZlcnRzIGZyb20gYW4gYXJyYXkgb2YgbnVtYmVycyBsaWtlIFsxNSwgMTUsIDE1XSB0byBhIGhleCBzdHJpbmcgbGlrZSAnRkZGJ1xuICogQHBhcmFtIHtbcmVkLCBncmVlbiwgYmx1ZV19IHJlZlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQ29sb3JIZXhTdHJpbmcocmVmKSB7XG4gIHZhciByZXN1bHRzID0gW107XG5cbiAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKHJlZiksXG4gICAgICBfc3RlcDtcblxuICB0cnkge1xuICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgciA9IF9zdGVwLnZhbHVlO1xuICAgICAgcmVzdWx0cy5wdXNoKHRvSGV4U3RyaW5nKHIpKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvci5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yLmYoKTtcbiAgfVxuXG4gIHJldHVybiAnIycgKyByZXN1bHRzLmpvaW4oJycpO1xufVxuLyoqXG4gKiBAcGFyYW0ge0FycmF5fSBzdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IHRva2VuXG4gKiBAcGFyYW0geyp9IGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKi9cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZU91dHB1dChzdGFjaywgdG9rZW4sIGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAodG9rZW4gPT09ICd0ZXh0Jykge1xuICAgIHJlc3VsdCA9IHB1c2hUZXh0KGRhdGEsIG9wdGlvbnMpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnZGlzcGxheScpIHtcbiAgICByZXN1bHQgPSBoYW5kbGVEaXNwbGF5KHN0YWNrLCBkYXRhLCBvcHRpb25zKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ3h0ZXJtMjU2Jykge1xuICAgIHJlc3VsdCA9IHB1c2hGb3JlZ3JvdW5kQ29sb3Ioc3RhY2ssIG9wdGlvbnMuY29sb3JzW2RhdGFdKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ3JnYicpIHtcbiAgICByZXN1bHQgPSBoYW5kbGVSZ2Ioc3RhY2ssIGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQHBhcmFtIHtBcnJheX0gc3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuXG5cbmZ1bmN0aW9uIGhhbmRsZVJnYihzdGFjaywgZGF0YSkge1xuICBkYXRhID0gZGF0YS5zdWJzdHJpbmcoMikuc2xpY2UoMCwgLTEpO1xuICB2YXIgb3BlcmF0aW9uID0gK2RhdGEuc3Vic3RyKDAsIDIpO1xuICB2YXIgY29sb3IgPSBkYXRhLnN1YnN0cmluZyg1KS5zcGxpdCgnOycpO1xuICB2YXIgcmdiID0gY29sb3IubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAoJzAnICsgTnVtYmVyKHZhbHVlKS50b1N0cmluZygxNikpLnN1YnN0cigtMik7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcHVzaFN0eWxlKHN0YWNrLCAob3BlcmF0aW9uID09PSAzOCA/ICdjb2xvcjojJyA6ICdiYWNrZ3JvdW5kLWNvbG9yOiMnKSArIHJnYik7XG59XG4vKipcbiAqIEBwYXJhbSB7QXJyYXl9IHN0YWNrXG4gKiBAcGFyYW0ge251bWJlcn0gY29kZVxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm5zIHsqfVxuICovXG5cblxuZnVuY3Rpb24gaGFuZGxlRGlzcGxheShzdGFjaywgY29kZSwgb3B0aW9ucykge1xuICBjb2RlID0gcGFyc2VJbnQoY29kZSwgMTApO1xuICB2YXIgY29kZU1hcCA9IHtcbiAgICAnLTEnOiBmdW5jdGlvbiBfKCkge1xuICAgICAgcmV0dXJuICc8YnIvPic7XG4gICAgfSxcbiAgICAwOiBmdW5jdGlvbiBfKCkge1xuICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aCAmJiByZXNldFN0eWxlcyhzdGFjayk7XG4gICAgfSxcbiAgICAxOiBmdW5jdGlvbiBfKCkge1xuICAgICAgcmV0dXJuIHB1c2hUYWcoc3RhY2ssICdiJyk7XG4gICAgfSxcbiAgICAzOiBmdW5jdGlvbiBfKCkge1xuICAgICAgcmV0dXJuIHB1c2hUYWcoc3RhY2ssICdpJyk7XG4gICAgfSxcbiAgICA0OiBmdW5jdGlvbiBfKCkge1xuICAgICAgcmV0dXJuIHB1c2hUYWcoc3RhY2ssICd1Jyk7XG4gICAgfSxcbiAgICA4OiBmdW5jdGlvbiBfKCkge1xuICAgICAgcmV0dXJuIHB1c2hTdHlsZShzdGFjaywgJ2Rpc3BsYXk6bm9uZScpO1xuICAgIH0sXG4gICAgOTogZnVuY3Rpb24gXygpIHtcbiAgICAgIHJldHVybiBwdXNoVGFnKHN0YWNrLCAnc3RyaWtlJyk7XG4gICAgfSxcbiAgICAyMjogZnVuY3Rpb24gXygpIHtcbiAgICAgIHJldHVybiBwdXNoU3R5bGUoc3RhY2ssICdmb250LXdlaWdodDpub3JtYWw7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udC1zdHlsZTpub3JtYWwnKTtcbiAgICB9LFxuICAgIDIzOiBmdW5jdGlvbiBfKCkge1xuICAgICAgcmV0dXJuIGNsb3NlVGFnKHN0YWNrLCAnaScpO1xuICAgIH0sXG4gICAgMjQ6IGZ1bmN0aW9uIF8oKSB7XG4gICAgICByZXR1cm4gY2xvc2VUYWcoc3RhY2ssICd1Jyk7XG4gICAgfSxcbiAgICAzOTogZnVuY3Rpb24gXygpIHtcbiAgICAgIHJldHVybiBwdXNoRm9yZWdyb3VuZENvbG9yKHN0YWNrLCBvcHRpb25zLmZnKTtcbiAgICB9LFxuICAgIDQ5OiBmdW5jdGlvbiBfKCkge1xuICAgICAgcmV0dXJuIHB1c2hCYWNrZ3JvdW5kQ29sb3Ioc3RhY2ssIG9wdGlvbnMuYmcpO1xuICAgIH0sXG4gICAgNTM6IGZ1bmN0aW9uIF8oKSB7XG4gICAgICByZXR1cm4gcHVzaFN0eWxlKHN0YWNrLCAndGV4dC1kZWNvcmF0aW9uOm92ZXJsaW5lJyk7XG4gICAgfVxuICB9O1xuICB2YXIgcmVzdWx0O1xuXG4gIGlmIChjb2RlTWFwW2NvZGVdKSB7XG4gICAgcmVzdWx0ID0gY29kZU1hcFtjb2RlXSgpO1xuICB9IGVsc2UgaWYgKDQgPCBjb2RlICYmIGNvZGUgPCA3KSB7XG4gICAgcmVzdWx0ID0gcHVzaFRhZyhzdGFjaywgJ2JsaW5rJyk7XG4gIH0gZWxzZSBpZiAoMjkgPCBjb2RlICYmIGNvZGUgPCAzOCkge1xuICAgIHJlc3VsdCA9IHB1c2hGb3JlZ3JvdW5kQ29sb3Ioc3RhY2ssIG9wdGlvbnMuY29sb3JzW2NvZGUgLSAzMF0pO1xuICB9IGVsc2UgaWYgKDM5IDwgY29kZSAmJiBjb2RlIDwgNDgpIHtcbiAgICByZXN1bHQgPSBwdXNoQmFja2dyb3VuZENvbG9yKHN0YWNrLCBvcHRpb25zLmNvbG9yc1tjb2RlIC0gNDBdKTtcbiAgfSBlbHNlIGlmICg4OSA8IGNvZGUgJiYgY29kZSA8IDk4KSB7XG4gICAgcmVzdWx0ID0gcHVzaEZvcmVncm91bmRDb2xvcihzdGFjaywgb3B0aW9ucy5jb2xvcnNbOCArIChjb2RlIC0gOTApXSk7XG4gIH0gZWxzZSBpZiAoOTkgPCBjb2RlICYmIGNvZGUgPCAxMDgpIHtcbiAgICByZXN1bHQgPSBwdXNoQmFja2dyb3VuZENvbG9yKHN0YWNrLCBvcHRpb25zLmNvbG9yc1s4ICsgKGNvZGUgLSAxMDApXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDbGVhciBhbGwgdGhlIHN0eWxlc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlc2V0U3R5bGVzKHN0YWNrKSB7XG4gIHZhciBzdGFja0Nsb25lID0gc3RhY2suc2xpY2UoMCk7XG4gIHN0YWNrLmxlbmd0aCA9IDA7XG4gIHJldHVybiBzdGFja0Nsb25lLnJldmVyc2UoKS5tYXAoZnVuY3Rpb24gKHRhZykge1xuICAgIHJldHVybiAnPC8nICsgdGFnICsgJz4nO1xuICB9KS5qb2luKCcnKTtcbn1cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBudW1iZXJzIHJhbmdpbmcgZnJvbSBsb3cgdG8gaGlnaFxuICogQHBhcmFtIHtudW1iZXJ9IGxvd1xuICogQHBhcmFtIHtudW1iZXJ9IGhpZ2hcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBleGFtcGxlIHJhbmdlKDMsIDcpOyAvLyBjcmVhdGVzIFszLCA0LCA1LCA2LCA3XVxuICovXG5cblxuZnVuY3Rpb24gcmFuZ2UobG93LCBoaWdoKSB7XG4gIHZhciByZXN1bHRzID0gW107XG5cbiAgZm9yICh2YXIgaiA9IGxvdzsgaiA8PSBoaWdoOyBqKyspIHtcbiAgICByZXN1bHRzLnB1c2goaik7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cztcbn1cbi8qKlxuICogUmV0dXJucyBhIG5ldyBmdW5jdGlvbiB0aGF0IGlzIHRydWUgaWYgdmFsdWUgaXMgTk9UIHRoZSBzYW1lIGNhdGVnb3J5XG4gKiBAcGFyYW0ge3N0cmluZ30gY2F0ZWdvcnlcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIG5vdENhdGVnb3J5KGNhdGVnb3J5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiAoY2F0ZWdvcnkgPT09IG51bGwgfHwgZS5jYXRlZ29yeSAhPT0gY2F0ZWdvcnkpICYmIGNhdGVnb3J5ICE9PSAnYWxsJztcbiAgfTtcbn1cbi8qKlxuICogQ29udmVydHMgYSBjb2RlIGludG8gYW4gYW5zaSB0b2tlbiB0eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gY29kZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGNhdGVnb3J5Rm9yQ29kZShjb2RlKSB7XG4gIGNvZGUgPSBwYXJzZUludChjb2RlLCAxMCk7XG4gIHZhciByZXN1bHQgPSBudWxsO1xuXG4gIGlmIChjb2RlID09PSAwKSB7XG4gICAgcmVzdWx0ID0gJ2FsbCc7XG4gIH0gZWxzZSBpZiAoY29kZSA9PT0gMSkge1xuICAgIHJlc3VsdCA9ICdib2xkJztcbiAgfSBlbHNlIGlmICgyIDwgY29kZSAmJiBjb2RlIDwgNSkge1xuICAgIHJlc3VsdCA9ICd1bmRlcmxpbmUnO1xuICB9IGVsc2UgaWYgKDQgPCBjb2RlICYmIGNvZGUgPCA3KSB7XG4gICAgcmVzdWx0ID0gJ2JsaW5rJztcbiAgfSBlbHNlIGlmIChjb2RlID09PSA4KSB7XG4gICAgcmVzdWx0ID0gJ2hpZGUnO1xuICB9IGVsc2UgaWYgKGNvZGUgPT09IDkpIHtcbiAgICByZXN1bHQgPSAnc3RyaWtlJztcbiAgfSBlbHNlIGlmICgyOSA8IGNvZGUgJiYgY29kZSA8IDM4IHx8IGNvZGUgPT09IDM5IHx8IDg5IDwgY29kZSAmJiBjb2RlIDwgOTgpIHtcbiAgICByZXN1bHQgPSAnZm9yZWdyb3VuZC1jb2xvcic7XG4gIH0gZWxzZSBpZiAoMzkgPCBjb2RlICYmIGNvZGUgPCA0OCB8fCBjb2RlID09PSA0OSB8fCA5OSA8IGNvZGUgJiYgY29kZSA8IDEwOCkge1xuICAgIHJlc3VsdCA9ICdiYWNrZ3JvdW5kLWNvbG9yJztcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIHB1c2hUZXh0KHRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuZXNjYXBlWE1MKSB7XG4gICAgcmV0dXJuIGVudGl0aWVzLmVuY29kZVhNTCh0ZXh0KTtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufVxuLyoqXG4gKiBAcGFyYW0ge0FycmF5fSBzdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHlsZT0nJ11cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBwdXNoVGFnKHN0YWNrLCB0YWcsIHN0eWxlKSB7XG4gIGlmICghc3R5bGUpIHtcbiAgICBzdHlsZSA9ICcnO1xuICB9XG5cbiAgc3RhY2sucHVzaCh0YWcpO1xuICByZXR1cm4gXCI8XCIuY29uY2F0KHRhZykuY29uY2F0KHN0eWxlID8gXCIgc3R5bGU9XFxcIlwiLmNvbmNhdChzdHlsZSwgXCJcXFwiXCIpIDogJycsIFwiPlwiKTtcbn1cbi8qKlxuICogQHBhcmFtIHtBcnJheX0gc3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHlsZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIHB1c2hTdHlsZShzdGFjaywgc3R5bGUpIHtcbiAgcmV0dXJuIHB1c2hUYWcoc3RhY2ssICdzcGFuJywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiBwdXNoRm9yZWdyb3VuZENvbG9yKHN0YWNrLCBjb2xvcikge1xuICByZXR1cm4gcHVzaFRhZyhzdGFjaywgJ3NwYW4nLCAnY29sb3I6JyArIGNvbG9yKTtcbn1cblxuZnVuY3Rpb24gcHVzaEJhY2tncm91bmRDb2xvcihzdGFjaywgY29sb3IpIHtcbiAgcmV0dXJuIHB1c2hUYWcoc3RhY2ssICdzcGFuJywgJ2JhY2tncm91bmQtY29sb3I6JyArIGNvbG9yKTtcbn1cbi8qKlxuICogQHBhcmFtIHtBcnJheX0gc3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHlsZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG5cbmZ1bmN0aW9uIGNsb3NlVGFnKHN0YWNrLCBzdHlsZSkge1xuICB2YXIgbGFzdDtcblxuICBpZiAoc3RhY2suc2xpY2UoLTEpWzBdID09PSBzdHlsZSkge1xuICAgIGxhc3QgPSBzdGFjay5wb3AoKTtcbiAgfVxuXG4gIGlmIChsYXN0KSB7XG4gICAgcmV0dXJuICc8LycgKyBzdHlsZSArICc+JztcbiAgfVxufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cblxuXG5mdW5jdGlvbiB0b2tlbml6ZSh0ZXh0LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICB2YXIgYW5zaU1hdGNoID0gZmFsc2U7XG4gIHZhciBhbnNpSGFuZGxlciA9IDM7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVh0ZXJtMjU2KG0sIGcxKSB7XG4gICAgY2FsbGJhY2soJ3h0ZXJtMjU2JywgZzEpO1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIG5ld2xpbmUobSkge1xuICAgIGlmIChvcHRpb25zLm5ld2xpbmUpIHtcbiAgICAgIGNhbGxiYWNrKCdkaXNwbGF5JywgLTEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygndGV4dCcsIG0pO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGFuc2lNZXNzKG0sIGcxKSB7XG4gICAgYW5zaU1hdGNoID0gdHJ1ZTtcblxuICAgIGlmIChnMS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICBnMSA9ICcwJztcbiAgICB9XG5cbiAgICBnMSA9IGcxLnRyaW1SaWdodCgnOycpLnNwbGl0KCc7Jyk7XG5cbiAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGcxKSxcbiAgICAgICAgX3N0ZXAyO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XG4gICAgICAgIHZhciBnID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICBjYWxsYmFjaygnZGlzcGxheScsIGcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIF9pdGVyYXRvcjIuZigpO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWxUZXh0KG0pIHtcbiAgICBjYWxsYmFjaygndGV4dCcsIG0pO1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJnYihtKSB7XG4gICAgY2FsbGJhY2soJ3JnYicsIG0pO1xuICAgIHJldHVybiAnJztcbiAgfVxuICAvKiBlc2xpbnQgbm8tY29udHJvbC1yZWdleDowICovXG5cblxuICB2YXIgdG9rZW5zID0gW3tcbiAgICBwYXR0ZXJuOiAvXlxceDA4Ky8sXG4gICAgc3ViOiByZW1vdmVcbiAgfSwge1xuICAgIHBhdHRlcm46IC9eXFx4MWJcXFtbMDEyXT9LLyxcbiAgICBzdWI6IHJlbW92ZVxuICB9LCB7XG4gICAgcGF0dGVybjogL15cXHgxYlxcW1xcKEIvLFxuICAgIHN1YjogcmVtb3ZlXG4gIH0sIHtcbiAgICBwYXR0ZXJuOiAvXlxceDFiXFxbWzM0XTg7MjtcXGQrO1xcZCs7XFxkK20vLFxuICAgIHN1YjogcmdiXG4gIH0sIHtcbiAgICBwYXR0ZXJuOiAvXlxceDFiXFxbMzg7NTsoXFxkKyltLyxcbiAgICBzdWI6IHJlbW92ZVh0ZXJtMjU2XG4gIH0sIHtcbiAgICBwYXR0ZXJuOiAvXlxcbi8sXG4gICAgc3ViOiBuZXdsaW5lXG4gIH0sIHtcbiAgICBwYXR0ZXJuOiAvXlxccitcXG4vLFxuICAgIHN1YjogbmV3bGluZVxuICB9LCB7XG4gICAgcGF0dGVybjogL15cXHgxYlxcWygoPzpcXGR7MSwzfTs/KSt8KW0vLFxuICAgIHN1YjogYW5zaU1lc3NcbiAgfSwge1xuICAgIC8vIENTSSBuIEpcbiAgICAvLyBFRCAtIEVyYXNlIGluIERpc3BsYXkgQ2xlYXJzIHBhcnQgb2YgdGhlIHNjcmVlbi5cbiAgICAvLyBJZiBuIGlzIDAgKG9yIG1pc3NpbmcpLCBjbGVhciBmcm9tIGN1cnNvciB0byBlbmQgb2Ygc2NyZWVuLlxuICAgIC8vIElmIG4gaXMgMSwgY2xlYXIgZnJvbSBjdXJzb3IgdG8gYmVnaW5uaW5nIG9mIHRoZSBzY3JlZW4uXG4gICAgLy8gSWYgbiBpcyAyLCBjbGVhciBlbnRpcmUgc2NyZWVuIChhbmQgbW92ZXMgY3Vyc29yIHRvIHVwcGVyIGxlZnQgb24gRE9TIEFOU0kuU1lTKS5cbiAgICAvLyBJZiBuIGlzIDMsIGNsZWFyIGVudGlyZSBzY3JlZW4gYW5kIGRlbGV0ZSBhbGwgbGluZXMgc2F2ZWQgaW4gdGhlIHNjcm9sbGJhY2sgYnVmZmVyXG4gICAgLy8gICAodGhpcyBmZWF0dXJlIHdhcyBhZGRlZCBmb3IgeHRlcm0gYW5kIGlzIHN1cHBvcnRlZCBieSBvdGhlciB0ZXJtaW5hbCBhcHBsaWNhdGlvbnMpLlxuICAgIHBhdHRlcm46IC9eXFx4MWJcXFtcXGQ/Si8sXG4gICAgc3ViOiByZW1vdmVcbiAgfSwge1xuICAgIC8vIENTSSBuIDsgbSBmXG4gICAgLy8gSFZQIC0gSG9yaXpvbnRhbCBWZXJ0aWNhbCBQb3NpdGlvbiBTYW1lIGFzIENVUFxuICAgIHBhdHRlcm46IC9eXFx4MWJcXFtcXGR7MCwzfTtcXGR7MCwzfWYvLFxuICAgIHN1YjogcmVtb3ZlXG4gIH0sIHtcbiAgICAvLyBjYXRjaC1hbGwgZm9yIENTSSBzZXF1ZW5jZXM/XG4gICAgcGF0dGVybjogL15cXHgxYlxcWz9bXFxkO117MCwzfS8sXG4gICAgc3ViOiByZW1vdmVcbiAgfSwge1xuICAgIC8qKlxuICAgICAqIGV4dHJhY3RzIHJlYWwgdGV4dCAtIG5vdCBjb250YWluaW5nOlxuICAgICAqIC0gYFxceDFiJyAtIEVTQyAtIGVzY2FwZSAoQXNjaWkgMjcpXG4gICAgICogLSAnXFx4MDgnIC0gQlMgLSBiYWNrc3BhY2UgKEFzY2lpIDgpXG4gICAgICogLSBgXFxuYCAtIE5ld2xpbmUgLSBsaW5lZmVlZCAoTEYpIChhc2NpaSAxMClcbiAgICAgKiAtIGBcXHJgIC0gV2luZG93cyBDYXJyaWFnZSBSZXR1cm4gKENSKVxuICAgICAqL1xuICAgIHBhdHRlcm46IC9eKChbXlxceDFiXFx4MDhcXHJcXG5dKSspLyxcbiAgICBzdWI6IHJlYWxUZXh0XG4gIH1dO1xuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoaGFuZGxlciwgaSkge1xuICAgIGlmIChpID4gYW5zaUhhbmRsZXIgJiYgYW5zaU1hdGNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYW5zaU1hdGNoID0gZmFsc2U7XG4gICAgdGV4dCA9IHRleHQucmVwbGFjZShoYW5kbGVyLnBhdHRlcm4sIGhhbmRsZXIuc3ViKTtcbiAgfVxuXG4gIHZhciByZXN1bHRzMSA9IFtdO1xuICB2YXIgX3RleHQgPSB0ZXh0LFxuICAgICAgbGVuZ3RoID0gX3RleHQubGVuZ3RoO1xuXG4gIG91dGVyOiB3aGlsZSAobGVuZ3RoID4gMCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBvID0gMCwgbGVuID0gdG9rZW5zLmxlbmd0aDsgbyA8IGxlbjsgaSA9ICsrbykge1xuICAgICAgdmFyIGhhbmRsZXIgPSB0b2tlbnNbaV07XG4gICAgICBwcm9jZXNzKGhhbmRsZXIsIGkpO1xuXG4gICAgICBpZiAodGV4dC5sZW5ndGggIT09IGxlbmd0aCkge1xuICAgICAgICAvLyBXZSBtYXRjaGVkIGEgdG9rZW4gYW5kIHJlbW92ZWQgaXQgZnJvbSB0aGUgdGV4dC4gV2UgbmVlZCB0b1xuICAgICAgICAvLyBzdGFydCBtYXRjaGluZyAqYWxsKiB0b2tlbnMgYWdhaW5zdCB0aGUgbmV3IHRleHQuXG4gICAgICAgIGxlbmd0aCA9IHRleHQubGVuZ3RoO1xuICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGV4dC5sZW5ndGggPT09IGxlbmd0aCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmVzdWx0czEucHVzaCgwKTtcbiAgICBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzMTtcbn1cbi8qKlxuICogSWYgc3RyZWFtaW5nLCB0aGVuIHRoZSBzdGFjayBpcyBcInN0aWNreVwiXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc3RpY2t5U3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b2tlblxuICogQHBhcmFtIHsqfSBkYXRhXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cblxuXG5mdW5jdGlvbiB1cGRhdGVTdGlja3lTdGFjayhzdGlja3lTdGFjaywgdG9rZW4sIGRhdGEpIHtcbiAgaWYgKHRva2VuICE9PSAndGV4dCcpIHtcbiAgICBzdGlja3lTdGFjayA9IHN0aWNreVN0YWNrLmZpbHRlcihub3RDYXRlZ29yeShjYXRlZ29yeUZvckNvZGUoZGF0YSkpKTtcbiAgICBzdGlja3lTdGFjay5wdXNoKHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBjYXRlZ29yeTogY2F0ZWdvcnlGb3JDb2RlKGRhdGEpXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RpY2t5U3RhY2s7XG59XG5cbnZhciBGaWx0ZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRpb25zLmZnIFRoZSBkZWZhdWx0IGZvcmVncm91bmQgY29sb3IgdXNlZCB3aGVuIHJlc2V0IGNvbG9yIGNvZGVzIGFyZSBlbmNvdW50ZXJlZC5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRpb25zLmJnIFRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgdXNlZCB3aGVuIHJlc2V0IGNvbG9yIGNvZGVzIGFyZSBlbmNvdW50ZXJlZC5cbiAgICogQHBhcmFtIHtib29sZWFuPX0gb3B0aW9ucy5uZXdsaW5lIENvbnZlcnQgbmV3bGluZSBjaGFyYWN0ZXJzIHRvIGA8YnIvPmAuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdGlvbnMuZXNjYXBlWE1MIEdlbmVyYXRlIEhUTUwvWE1MIGVudGl0aWVzLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRpb25zLnN0cmVhbSBTYXZlIHN0eWxlIHN0YXRlIGFjcm9zcyBpbnZvY2F0aW9ucyBvZiBgdG9IdG1sKClgLlxuICAgKiBAcGFyYW0geyhzdHJpbmdbXSB8IHtbY29kZTogbnVtYmVyXTogc3RyaW5nfSk9fSBvcHRpb25zLmNvbG9ycyBDYW4gb3ZlcnJpZGUgc3BlY2lmaWMgY29sb3JzIG9yIHRoZSBlbnRpcmUgQU5TSSBwYWxldHRlLlxuICAgKi9cbiAgZnVuY3Rpb24gRmlsdGVyKG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmlsdGVyKTtcblxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgaWYgKG9wdGlvbnMuY29sb3JzKSB7XG4gICAgICBvcHRpb25zLmNvbG9ycyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLmNvbG9ycywgb3B0aW9ucy5jb2xvcnMpO1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICB0aGlzLnN0YWNrID0gW107XG4gICAgdGhpcy5zdGlja3lTdGFjayA9IFtdO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IHN0cmluZ1tdfSBpbnB1dFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhGaWx0ZXIsIFt7XG4gICAga2V5OiBcInRvSHRtbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0h0bWwoaW5wdXQpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlucHV0ID0gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyA/IFtpbnB1dF0gOiBpbnB1dDtcbiAgICAgIHZhciBzdGFjayA9IHRoaXMuc3RhY2ssXG4gICAgICAgICAgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIHZhciBidWYgPSBbXTtcbiAgICAgIHRoaXMuc3RpY2t5U3RhY2suZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gZ2VuZXJhdGVPdXRwdXQoc3RhY2ssIGVsZW1lbnQudG9rZW4sIGVsZW1lbnQuZGF0YSwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICAgIGJ1Zi5wdXNoKG91dHB1dCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdG9rZW5pemUoaW5wdXQuam9pbignJyksIG9wdGlvbnMsIGZ1bmN0aW9uICh0b2tlbiwgZGF0YSkge1xuICAgICAgICB2YXIgb3V0cHV0ID0gZ2VuZXJhdGVPdXRwdXQoc3RhY2ssIHRva2VuLCBkYXRhLCBvcHRpb25zKTtcblxuICAgICAgICBpZiAob3V0cHV0KSB7XG4gICAgICAgICAgYnVmLnB1c2gob3V0cHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnN0cmVhbSkge1xuICAgICAgICAgIF90aGlzLnN0aWNreVN0YWNrID0gdXBkYXRlU3RpY2t5U3RhY2soX3RoaXMuc3RpY2t5U3RhY2ssIHRva2VuLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgYnVmLnB1c2gocmVzZXRTdHlsZXMoc3RhY2spKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1Zi5qb2luKCcnKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRmlsdGVyO1xufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbHRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuc2lfdG9faHRtbC5qcy5tYXAiLCJcbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wLCBXYXRjaCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgQWpheEZvcm1Nb2RhbCBmcm9tIFwiQGVuaGF2by9hcHAvbW9kYWwvbW9kZWwvQWpheEZvcm1Nb2RhbFwiXG5pbXBvcnQgRm9ybUluaXRpYWxpemVyIGZyb20gXCJAZW5oYXZvL2FwcC9mb3JtL0Zvcm1Jbml0aWFsaXplclwiO1xuXG5AQ29tcG9uZW50KClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgVnVlIHtcbiAgICBuYW1lOiBzdHJpbmcgPSAnYWpheC1mb3JtLW1vZGFsJztcblxuICAgIEBQcm9wKClcbiAgICBtb2RhbDogQWpheEZvcm1Nb2RhbDtcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMubW9kYWwubG9hZEZvcm0oKS50aGVuKCgpID0+IHt9KTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLm1vZGFsLnN1Ym1pdCgpLnRoZW4oKGNsb3NlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZihjbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGNsb3NlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZihjbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xvc2UoKTtcbiAgICB9XG5cbiAgICB0cmFucyh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0cmFuc2xhdG9yLnRyYW5zKHRleHQpO1xuICAgIH1cblxuICAgIEBXYXRjaCgnbW9kYWwuZWxlbWVudCcpXG4gICAgcHJpdmF0ZSBzZXRFbGVtZW50KClcbiAgICB7XG4gICAgICAgIGxldCBpbml0aWFsaXplciA9IG5ldyBGb3JtSW5pdGlhbGl6ZXIoKTtcbiAgICAgICAgaW5pdGlhbGl6ZXIuc2V0RWxlbWVudCh0aGlzLm1vZGFsLmVsZW1lbnQpO1xuICAgICAgICAkKHRoaXMuJHJlZnMuY29udGFpbmVyKS5odG1sKFwiXCIpO1xuICAgICAgICBpbml0aWFsaXplci5hcHBlbmQodGhpcy4kcmVmcy5jb250YWluZXIpO1xuICAgICAgICB0aGlzLm1vZGFsLmZvcm0gPSB0aGlzLiRyZWZzLmNvbnRhaW5lcjtcbiAgICB9XG59XG4iLCJcbiAgICBpbXBvcnQgeyBWdWUsIENvbXBvbmVudCwgUHJvcCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG4gICAgaW1wb3J0IElmcmFtZU1vZGFsIGZyb20gXCJAZW5oYXZvL2FwcC9tb2RhbC9tb2RlbC9JZnJhbWVNb2RhbFwiXG5cbiAgICBAQ29tcG9uZW50KHt9KVxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgVnVlIHtcbiAgICAgICAgbmFtZTogc3RyaW5nID0gJ2lmcmFtZS1tb2RhbCc7XG5cbiAgICAgICAgQFByb3AoKVxuICAgICAgICBtb2RhbDogSWZyYW1lTW9kYWw7XG4gICAgfVxuIiwiXG4gICAgaW1wb3J0IHsgVnVlLCBDb21wb25lbnQsIFByb3AsIFdhdGNoIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbiAgICBpbXBvcnQgT3V0cHV0U3RyZWFtTW9kYWwgZnJvbSBcIkBlbmhhdm8vYXBwL21vZGFsL21vZGVsL091dHB1dFN0cmVhbU1vZGFsXCJcbiAgICBpbXBvcnQgKiBhcyBDb252ZXJ0IGZyb20gXCJhbnNpLXRvLWh0bWxcIjtcbiAgICBpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcblxuICAgIEBDb21wb25lbnQoe30pXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3V0cHV0U3RyZWFtTW9kYWxDb21wb25lbnQgZXh0ZW5kcyBWdWUge1xuICAgICAgICBuYW1lOiBzdHJpbmcgPSAnb3V0cHV0LXN0cmVhbS1tb2RhbCc7XG5cbiAgICAgICAgQFByb3AoKVxuICAgICAgICBtb2RhbDogT3V0cHV0U3RyZWFtTW9kYWw7XG5cblxuICAgICAgICBjb252ZXJ0KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNvbnZlcnQgPSBuZXcgQ29udmVydCgpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnQudG9IdG1sKHZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgQFdhdGNoKCdtb2RhbC5vdXRwdXQnKVxuICAgICAgICBzY3JvbGxEb3duKClcbiAgICAgICAge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICQodGhpcy4kcmVmcy5vdXRwdXQpLnNjcm9sbFRvcCgkKHRoaXMuJHJlZnMub3V0cHV0KS5oZWlnaHQoKSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlY29kZUhUTUwgPSBleHBvcnRzLmRlY29kZUhUTUxTdHJpY3QgPSBleHBvcnRzLmRlY29kZVhNTCA9IHZvaWQgMDtcbnZhciBlbnRpdGllc19qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy9lbnRpdGllcy5qc29uXCIpKTtcbnZhciBsZWdhY3lfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvbGVnYWN5Lmpzb25cIikpO1xudmFyIHhtbF9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy94bWwuanNvblwiKSk7XG52YXIgZGVjb2RlX2NvZGVwb2ludF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2RlY29kZV9jb2RlcG9pbnRcIikpO1xudmFyIHN0cmljdEVudGl0eVJlID0gLyYoPzpbYS16QS1aMC05XSt8I1t4WF1bXFxkYS1mQS1GXSt8I1xcZCspOy9nO1xuZXhwb3J0cy5kZWNvZGVYTUwgPSBnZXRTdHJpY3REZWNvZGVyKHhtbF9qc29uXzEuZGVmYXVsdCk7XG5leHBvcnRzLmRlY29kZUhUTUxTdHJpY3QgPSBnZXRTdHJpY3REZWNvZGVyKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KTtcbmZ1bmN0aW9uIGdldFN0cmljdERlY29kZXIobWFwKSB7XG4gICAgdmFyIHJlcGxhY2UgPSBnZXRSZXBsYWNlcihtYXApO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKHN0cmljdEVudGl0eVJlLCByZXBsYWNlKTsgfTtcbn1cbnZhciBzb3J0ZXIgPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gKGEgPCBiID8gMSA6IC0xKTsgfTtcbmV4cG9ydHMuZGVjb2RlSFRNTCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxlZ2FjeSA9IE9iamVjdC5rZXlzKGxlZ2FjeV9qc29uXzEuZGVmYXVsdCkuc29ydChzb3J0ZXIpO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZW50aXRpZXNfanNvbl8xLmRlZmF1bHQpLnNvcnQoc29ydGVyKTtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsZWdhY3lbal0gPT09IGtleXNbaV0pIHtcbiAgICAgICAgICAgIGtleXNbaV0gKz0gXCI7P1wiO1xuICAgICAgICAgICAgaisrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAga2V5c1tpXSArPSBcIjtcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiJig/OlwiICsga2V5cy5qb2luKFwifFwiKSArIFwifCNbeFhdW1xcXFxkYS1mQS1GXSs7P3wjXFxcXGQrOz8pXCIsIFwiZ1wiKTtcbiAgICB2YXIgcmVwbGFjZSA9IGdldFJlcGxhY2VyKGVudGl0aWVzX2pzb25fMS5kZWZhdWx0KTtcbiAgICBmdW5jdGlvbiByZXBsYWNlcihzdHIpIHtcbiAgICAgICAgaWYgKHN0ci5zdWJzdHIoLTEpICE9PSBcIjtcIilcbiAgICAgICAgICAgIHN0ciArPSBcIjtcIjtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2Uoc3RyKTtcbiAgICB9XG4gICAgLy8gVE9ETyBjb25zaWRlciBjcmVhdGluZyBhIG1lcmdlZCBtYXBcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZShyZSwgcmVwbGFjZXIpOyB9O1xufSkoKTtcbmZ1bmN0aW9uIGdldFJlcGxhY2VyKG1hcCkge1xuICAgIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKHN0cikge1xuICAgICAgICBpZiAoc3RyLmNoYXJBdCgxKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHZhciBzZWNvbmRDaGFyID0gc3RyLmNoYXJBdCgyKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmRDaGFyID09PSBcIlhcIiB8fCBzZWNvbmRDaGFyID09PSBcInhcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVfY29kZXBvaW50XzEuZGVmYXVsdChwYXJzZUludChzdHIuc3Vic3RyKDMpLCAxNikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlY29kZV9jb2RlcG9pbnRfMS5kZWZhdWx0KHBhcnNlSW50KHN0ci5zdWJzdHIoMiksIDEwKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItbnVsbGlzaC1jb2FsZXNjaW5nXG4gICAgICAgIHJldHVybiBtYXBbc3RyLnNsaWNlKDEsIC0xKV0gfHwgc3RyO1xuICAgIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkZWNvZGVfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21hcHMvZGVjb2RlLmpzb25cIikpO1xuLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL2hlL2Jsb2IvbWFzdGVyL3NyYy9oZS5qcyNMOTQtTDExOVxudmFyIGZyb21Db2RlUG9pbnQgPSBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5uZWNlc3NhcnktY29uZGl0aW9uXG5TdHJpbmcuZnJvbUNvZGVQb2ludCB8fFxuICAgIGZ1bmN0aW9uIChjb2RlUG9pbnQpIHtcbiAgICAgICAgdmFyIG91dHB1dCA9IFwiXCI7XG4gICAgICAgIGlmIChjb2RlUG9pbnQgPiAweGZmZmYpIHtcbiAgICAgICAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwO1xuICAgICAgICAgICAgb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4+IDEwKSAmIDB4M2ZmKSB8IDB4ZDgwMCk7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSAweGRjMDAgfCAoY29kZVBvaW50ICYgMHgzZmYpO1xuICAgICAgICB9XG4gICAgICAgIG91dHB1dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludChjb2RlUG9pbnQpIHtcbiAgICBpZiAoKGNvZGVQb2ludCA+PSAweGQ4MDAgJiYgY29kZVBvaW50IDw9IDB4ZGZmZikgfHwgY29kZVBvaW50ID4gMHgxMGZmZmYpIHtcbiAgICAgICAgcmV0dXJuIFwiXFx1RkZGRFwiO1xuICAgIH1cbiAgICBpZiAoY29kZVBvaW50IGluIGRlY29kZV9qc29uXzEuZGVmYXVsdCkge1xuICAgICAgICBjb2RlUG9pbnQgPSBkZWNvZGVfanNvbl8xLmRlZmF1bHRbY29kZVBvaW50XTtcbiAgICB9XG4gICAgcmV0dXJuIGZyb21Db2RlUG9pbnQoY29kZVBvaW50KTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlY29kZUNvZGVQb2ludDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lc2NhcGVVVEY4ID0gZXhwb3J0cy5lc2NhcGUgPSBleHBvcnRzLmVuY29kZU5vbkFzY2lpSFRNTCA9IGV4cG9ydHMuZW5jb2RlSFRNTCA9IGV4cG9ydHMuZW5jb2RlWE1MID0gdm9pZCAwO1xudmFyIHhtbF9qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy94bWwuanNvblwiKSk7XG52YXIgaW52ZXJzZVhNTCA9IGdldEludmVyc2VPYmooeG1sX2pzb25fMS5kZWZhdWx0KTtcbnZhciB4bWxSZXBsYWNlciA9IGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlWE1MKTtcbi8qKlxuICogRW5jb2RlcyBhbGwgbm9uLUFTQ0lJIGNoYXJhY3RlcnMsIGFzIHdlbGwgYXMgY2hhcmFjdGVycyBub3QgdmFsaWQgaW4gWE1MXG4gKiBkb2N1bWVudHMgdXNpbmcgWE1MIGVudGl0aWVzLlxuICpcbiAqIElmIGEgY2hhcmFjdGVyIGhhcyBubyBlcXVpdmFsZW50IGVudGl0eSwgYVxuICogbnVtZXJpYyBoZXhhZGVjaW1hbCByZWZlcmVuY2UgKGVnLiBgJiN4ZmM7YCkgd2lsbCBiZSB1c2VkLlxuICovXG5leHBvcnRzLmVuY29kZVhNTCA9IGdldEFTQ0lJRW5jb2RlcihpbnZlcnNlWE1MKTtcbnZhciBlbnRpdGllc19qc29uXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbWFwcy9lbnRpdGllcy5qc29uXCIpKTtcbnZhciBpbnZlcnNlSFRNTCA9IGdldEludmVyc2VPYmooZW50aXRpZXNfanNvbl8xLmRlZmF1bHQpO1xudmFyIGh0bWxSZXBsYWNlciA9IGdldEludmVyc2VSZXBsYWNlcihpbnZlcnNlSFRNTCk7XG4vKipcbiAqIEVuY29kZXMgYWxsIGVudGl0aWVzIGFuZCBub24tQVNDSUkgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXG4gKlxuICogVGhpcyBpbmNsdWRlcyBjaGFyYWN0ZXJzIHRoYXQgYXJlIHZhbGlkIEFTQ0lJIGNoYXJhY3RlcnMgaW4gSFRNTCBkb2N1bWVudHMuXG4gKiBGb3IgZXhhbXBsZSBgI2Agd2lsbCBiZSBlbmNvZGVkIGFzIGAmbnVtO2AuIFRvIGdldCBhIG1vcmUgY29tcGFjdCBvdXRwdXQsXG4gKiBjb25zaWRlciB1c2luZyB0aGUgYGVuY29kZU5vbkFzY2lpSFRNTGAgZnVuY3Rpb24uXG4gKlxuICogSWYgYSBjaGFyYWN0ZXIgaGFzIG5vIGVxdWl2YWxlbnQgZW50aXR5LCBhXG4gKiBudW1lcmljIGhleGFkZWNpbWFsIHJlZmVyZW5jZSAoZWcuIGAmI3hmYztgKSB3aWxsIGJlIHVzZWQuXG4gKi9cbmV4cG9ydHMuZW5jb2RlSFRNTCA9IGdldEludmVyc2UoaW52ZXJzZUhUTUwsIGh0bWxSZXBsYWNlcik7XG4vKipcbiAqIEVuY29kZXMgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzLCBhcyB3ZWxsIGFzIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIEhUTUxcbiAqIGRvY3VtZW50cyB1c2luZyBIVE1MIGVudGl0aWVzLlxuICpcbiAqIElmIGEgY2hhcmFjdGVyIGhhcyBubyBlcXVpdmFsZW50IGVudGl0eSwgYVxuICogbnVtZXJpYyBoZXhhZGVjaW1hbCByZWZlcmVuY2UgKGVnLiBgJiN4ZmM7YCkgd2lsbCBiZSB1c2VkLlxuICovXG5leHBvcnRzLmVuY29kZU5vbkFzY2lpSFRNTCA9IGdldEFTQ0lJRW5jb2RlcihpbnZlcnNlSFRNTCk7XG5mdW5jdGlvbiBnZXRJbnZlcnNlT2JqKG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopXG4gICAgICAgIC5zb3J0KClcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoaW52ZXJzZSwgbmFtZSkge1xuICAgICAgICBpbnZlcnNlW29ialtuYW1lXV0gPSBcIiZcIiArIG5hbWUgKyBcIjtcIjtcbiAgICAgICAgcmV0dXJuIGludmVyc2U7XG4gICAgfSwge30pO1xufVxuZnVuY3Rpb24gZ2V0SW52ZXJzZVJlcGxhY2VyKGludmVyc2UpIHtcbiAgICB2YXIgc2luZ2xlID0gW107XG4gICAgdmFyIG11bHRpcGxlID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKGludmVyc2UpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgayA9IF9hW19pXTtcbiAgICAgICAgaWYgKGsubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAvLyBBZGQgdmFsdWUgdG8gc2luZ2xlIGFycmF5XG4gICAgICAgICAgICBzaW5nbGUucHVzaChcIlxcXFxcIiArIGspO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQWRkIHZhbHVlIHRvIG11bHRpcGxlIGFycmF5XG4gICAgICAgICAgICBtdWx0aXBsZS5wdXNoKGspO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEFkZCByYW5nZXMgdG8gc2luZ2xlIGNoYXJhY3RlcnMuXG4gICAgc2luZ2xlLnNvcnQoKTtcbiAgICBmb3IgKHZhciBzdGFydCA9IDA7IHN0YXJ0IDwgc2luZ2xlLmxlbmd0aCAtIDE7IHN0YXJ0KyspIHtcbiAgICAgICAgLy8gRmluZCB0aGUgZW5kIG9mIGEgcnVuIG9mIGNoYXJhY3RlcnNcbiAgICAgICAgdmFyIGVuZCA9IHN0YXJ0O1xuICAgICAgICB3aGlsZSAoZW5kIDwgc2luZ2xlLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgIHNpbmdsZVtlbmRdLmNoYXJDb2RlQXQoMSkgKyAxID09PSBzaW5nbGVbZW5kICsgMV0uY2hhckNvZGVBdCgxKSkge1xuICAgICAgICAgICAgZW5kICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvdW50ID0gMSArIGVuZCAtIHN0YXJ0O1xuICAgICAgICAvLyBXZSB3YW50IHRvIHJlcGxhY2UgYXQgbGVhc3QgdGhyZWUgY2hhcmFjdGVyc1xuICAgICAgICBpZiAoY291bnQgPCAzKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIHNpbmdsZS5zcGxpY2Uoc3RhcnQsIGNvdW50LCBzaW5nbGVbc3RhcnRdICsgXCItXCIgKyBzaW5nbGVbZW5kXSk7XG4gICAgfVxuICAgIG11bHRpcGxlLnVuc2hpZnQoXCJbXCIgKyBzaW5nbGUuam9pbihcIlwiKSArIFwiXVwiKTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChtdWx0aXBsZS5qb2luKFwifFwiKSwgXCJnXCIpO1xufVxuLy8gL1teXFwwLVxceDdGXS9ndVxudmFyIHJlTm9uQVNDSUkgPSAvKD86W1xceDgwLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdfFtcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRl18W1xcdUQ4MDAtXFx1REJGRl0oPyFbXFx1REMwMC1cXHVERkZGXSl8KD86W15cXHVEODAwLVxcdURCRkZdfF4pW1xcdURDMDAtXFx1REZGRl0pL2c7XG52YXIgZ2V0Q29kZVBvaW50ID0gXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LWNvbmRpdGlvblxuU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdCAhPSBudWxsXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHIuY29kZVBvaW50QXQoMCk7IH1cbiAgICA6IC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXG4gICAgICAgIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gKGMuY2hhckNvZGVBdCgwKSAtIDB4ZDgwMCkgKiAweDQwMCArXG4gICAgICAgICAgICAgICAgYy5jaGFyQ29kZUF0KDEpIC1cbiAgICAgICAgICAgICAgICAweGRjMDAgK1xuICAgICAgICAgICAgICAgIDB4MTAwMDA7XG4gICAgICAgIH07XG5mdW5jdGlvbiBzaW5nbGVDaGFyUmVwbGFjZXIoYykge1xuICAgIHJldHVybiBcIiYjeFwiICsgKGMubGVuZ3RoID4gMSA/IGdldENvZGVQb2ludChjKSA6IGMuY2hhckNvZGVBdCgwKSlcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAudG9VcHBlckNhc2UoKSArIFwiO1wiO1xufVxuZnVuY3Rpb24gZ2V0SW52ZXJzZShpbnZlcnNlLCByZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgICAgLnJlcGxhY2UocmUsIGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBpbnZlcnNlW25hbWVdOyB9KVxuICAgICAgICAgICAgLnJlcGxhY2UocmVOb25BU0NJSSwgc2luZ2xlQ2hhclJlcGxhY2VyKTtcbiAgICB9O1xufVxudmFyIHJlRXNjYXBlQ2hhcnMgPSBuZXcgUmVnRXhwKHhtbFJlcGxhY2VyLnNvdXJjZSArIFwifFwiICsgcmVOb25BU0NJSS5zb3VyY2UsIFwiZ1wiKTtcbi8qKlxuICogRW5jb2RlcyBhbGwgbm9uLUFTQ0lJIGNoYXJhY3RlcnMsIGFzIHdlbGwgYXMgY2hhcmFjdGVycyBub3QgdmFsaWQgaW4gWE1MXG4gKiBkb2N1bWVudHMgdXNpbmcgbnVtZXJpYyBoZXhhZGVjaW1hbCByZWZlcmVuY2UgKGVnLiBgJiN4ZmM7YCkuXG4gKlxuICogSGF2ZSBhIGxvb2sgYXQgYGVzY2FwZVVURjhgIGlmIHlvdSB3YW50IGEgbW9yZSBjb25jaXNlIG91dHB1dCBhdCB0aGUgZXhwZW5zZVxuICogb2YgcmVkdWNlZCB0cmFuc3BvcnRhYmlsaXR5LlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBlc2NhcGUuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZShkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEucmVwbGFjZShyZUVzY2FwZUNoYXJzLCBzaW5nbGVDaGFyUmVwbGFjZXIpO1xufVxuZXhwb3J0cy5lc2NhcGUgPSBlc2NhcGU7XG4vKipcbiAqIEVuY29kZXMgYWxsIGNoYXJhY3RlcnMgbm90IHZhbGlkIGluIFhNTCBkb2N1bWVudHMgdXNpbmcgbnVtZXJpYyBoZXhhZGVjaW1hbFxuICogcmVmZXJlbmNlIChlZy4gYCYjeGZjO2ApLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgb3V0cHV0IHdpbGwgYmUgY2hhcmFjdGVyLXNldCBkZXBlbmRlbnQuXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGVzY2FwZS5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlVVRGOChkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGEucmVwbGFjZSh4bWxSZXBsYWNlciwgc2luZ2xlQ2hhclJlcGxhY2VyKTtcbn1cbmV4cG9ydHMuZXNjYXBlVVRGOCA9IGVzY2FwZVVURjg7XG5mdW5jdGlvbiBnZXRBU0NJSUVuY29kZXIob2JqKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhLnJlcGxhY2UocmVFc2NhcGVDaGFycywgZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG9ialtjXSB8fCBzaW5nbGVDaGFyUmVwbGFjZXIoYyk7IH0pO1xuICAgIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVjb2RlWE1MU3RyaWN0ID0gZXhwb3J0cy5kZWNvZGVIVE1MNVN0cmljdCA9IGV4cG9ydHMuZGVjb2RlSFRNTDRTdHJpY3QgPSBleHBvcnRzLmRlY29kZUhUTUw1ID0gZXhwb3J0cy5kZWNvZGVIVE1MNCA9IGV4cG9ydHMuZGVjb2RlSFRNTFN0cmljdCA9IGV4cG9ydHMuZGVjb2RlSFRNTCA9IGV4cG9ydHMuZGVjb2RlWE1MID0gZXhwb3J0cy5lbmNvZGVIVE1MNSA9IGV4cG9ydHMuZW5jb2RlSFRNTDQgPSBleHBvcnRzLmVzY2FwZVVURjggPSBleHBvcnRzLmVzY2FwZSA9IGV4cG9ydHMuZW5jb2RlTm9uQXNjaWlIVE1MID0gZXhwb3J0cy5lbmNvZGVIVE1MID0gZXhwb3J0cy5lbmNvZGVYTUwgPSBleHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuZGVjb2RlU3RyaWN0ID0gZXhwb3J0cy5kZWNvZGUgPSB2b2lkIDA7XG52YXIgZGVjb2RlXzEgPSByZXF1aXJlKFwiLi9kZWNvZGVcIik7XG52YXIgZW5jb2RlXzEgPSByZXF1aXJlKFwiLi9lbmNvZGVcIik7XG4vKipcbiAqIERlY29kZXMgYSBzdHJpbmcgd2l0aCBlbnRpdGllcy5cbiAqXG4gKiBAcGFyYW0gZGF0YSBTdHJpbmcgdG8gZGVjb2RlLlxuICogQHBhcmFtIGxldmVsIE9wdGlvbmFsIGxldmVsIHRvIGRlY29kZSBhdC4gMCA9IFhNTCwgMSA9IEhUTUwuIERlZmF1bHQgaXMgMC5cbiAqIEBkZXByZWNhdGVkIFVzZSBgZGVjb2RlWE1MYCBvciBgZGVjb2RlSFRNTGAgZGlyZWN0bHkuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShkYXRhLCBsZXZlbCkge1xuICAgIHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBkZWNvZGVfMS5kZWNvZGVYTUwgOiBkZWNvZGVfMS5kZWNvZGVIVE1MKShkYXRhKTtcbn1cbmV4cG9ydHMuZGVjb2RlID0gZGVjb2RlO1xuLyoqXG4gKiBEZWNvZGVzIGEgc3RyaW5nIHdpdGggZW50aXRpZXMuIERvZXMgbm90IGFsbG93IG1pc3NpbmcgdHJhaWxpbmcgc2VtaWNvbG9ucyBmb3IgZW50aXRpZXMuXG4gKlxuICogQHBhcmFtIGRhdGEgU3RyaW5nIHRvIGRlY29kZS5cbiAqIEBwYXJhbSBsZXZlbCBPcHRpb25hbCBsZXZlbCB0byBkZWNvZGUgYXQuIDAgPSBYTUwsIDEgPSBIVE1MLiBEZWZhdWx0IGlzIDAuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYGRlY29kZUhUTUxTdHJpY3RgIG9yIGBkZWNvZGVYTUxgIGRpcmVjdGx5LlxuICovXG5mdW5jdGlvbiBkZWNvZGVTdHJpY3QoZGF0YSwgbGV2ZWwpIHtcbiAgICByZXR1cm4gKCFsZXZlbCB8fCBsZXZlbCA8PSAwID8gZGVjb2RlXzEuZGVjb2RlWE1MIDogZGVjb2RlXzEuZGVjb2RlSFRNTFN0cmljdCkoZGF0YSk7XG59XG5leHBvcnRzLmRlY29kZVN0cmljdCA9IGRlY29kZVN0cmljdDtcbi8qKlxuICogRW5jb2RlcyBhIHN0cmluZyB3aXRoIGVudGl0aWVzLlxuICpcbiAqIEBwYXJhbSBkYXRhIFN0cmluZyB0byBlbmNvZGUuXG4gKiBAcGFyYW0gbGV2ZWwgT3B0aW9uYWwgbGV2ZWwgdG8gZW5jb2RlIGF0LiAwID0gWE1MLCAxID0gSFRNTC4gRGVmYXVsdCBpcyAwLlxuICogQGRlcHJlY2F0ZWQgVXNlIGBlbmNvZGVIVE1MYCwgYGVuY29kZVhNTGAgb3IgYGVuY29kZU5vbkFzY2lpSFRNTGAgZGlyZWN0bHkuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShkYXRhLCBsZXZlbCkge1xuICAgIHJldHVybiAoIWxldmVsIHx8IGxldmVsIDw9IDAgPyBlbmNvZGVfMS5lbmNvZGVYTUwgOiBlbmNvZGVfMS5lbmNvZGVIVE1MKShkYXRhKTtcbn1cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xudmFyIGVuY29kZV8yID0gcmVxdWlyZShcIi4vZW5jb2RlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW5jb2RlWE1MXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lbmNvZGVYTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlbmNvZGVIVE1MXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lbmNvZGVIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW5jb2RlTm9uQXNjaWlIVE1MXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lbmNvZGVOb25Bc2NpaUhUTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJlc2NhcGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVuY29kZV8yLmVzY2FwZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVzY2FwZVVURjhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVuY29kZV8yLmVzY2FwZVVURjg7IH0gfSk7XG4vLyBMZWdhY3kgYWxpYXNlcyAoZGVwcmVjYXRlZClcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImVuY29kZUhUTUw0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlbmNvZGVfMi5lbmNvZGVIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZW5jb2RlSFRNTDVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVuY29kZV8yLmVuY29kZUhUTUw7IH0gfSk7XG52YXIgZGVjb2RlXzIgPSByZXF1aXJlKFwiLi9kZWNvZGVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVYTUxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZVhNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZUhUTUxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZUhUTUw7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MU3RyaWN0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVIVE1MU3RyaWN0OyB9IH0pO1xuLy8gTGVnYWN5IGFsaWFzZXMgKGRlcHJlY2F0ZWQpXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MNFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlSFRNTDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZUhUTUw1XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkZWNvZGVfMi5kZWNvZGVIVE1MOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVjb2RlSFRNTDRTdHJpY3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRlY29kZV8yLmRlY29kZUhUTUxTdHJpY3Q7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWNvZGVIVE1MNVN0cmljdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlSFRNTFN0cmljdDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlY29kZVhNTFN0cmljdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlXzIuZGVjb2RlWE1MOyB9IH0pO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2MsXG4gICAgX3NldHVwID0gX3ZtLl9zZWxmLl9zZXR1cFByb3h5XG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWxcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgdmFsdWU6ICFfdm0ubW9kYWwubG9hZGluZyxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhbW9kYWwubG9hZGluZ1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvcm0tY29udGFpbmVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbnNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1idG4gcHJpbWFyeVwiLCBvbjogeyBjbGljazogX3ZtLnNhdmUgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udHJhbnMoX3ZtLm1vZGFsLnNhdmVMYWJlbCkpKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYnRuXCIsIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udHJhbnMoX3ZtLm1vZGFsLmNsb3NlTGFiZWwpKSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5tb2RhbC5sb2FkaW5nID8gX2MoXCJsb2FkaW5nLXNjcmVlblwiKSA6IF92bS5fZSgpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fYyxcbiAgICAgIF9zZXR1cCA9IF92bS5fc2VsZi5fc2V0dXBQcm94eVxuICAgIHJldHVybiBfYyhcImZvcm1cIiwgeyByZWY6IFwiY29udGFpbmVyXCIgfSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgdmFyIF92bSA9IHRoaXMsXG4gICAgX2MgPSBfdm0uX3NlbGYuX2MsXG4gICAgX3NldHVwID0gX3ZtLl9zZWxmLl9zZXR1cFByb3h5XG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsXCIgfSwgW192bS5fdihcIlxcbiAgICBJZnJhbWVcXG5cIildKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jLFxuICAgIF9zZXR1cCA9IF92bS5fc2VsZi5fc2V0dXBQcm94eVxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogIV92bS5tb2RhbC5sb2FkaW5nLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhbW9kYWwubG9hZGluZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvcm0tY29udGFpbmVyXCIsXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogXCJvdXRwdXRcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgXCJvdmVyZmxvdy15XCI6IFwic2Nyb2xsXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjUwMHB4XCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI1MDBweFwiLFxuICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjMDAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwcmVcIiwge1xuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uY29udmVydChfdm0ubW9kYWwub3V0cHV0KSkgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYnRuXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW9kYWwuY2xvc2UoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLm1vZGFsLmNsb3NlTGFiZWwpKV1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=