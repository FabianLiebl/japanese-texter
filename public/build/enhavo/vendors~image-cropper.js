(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~image-cropper"],{

/***/ "./node_modules/@enhavo/media/image-cropper/FormatData.ts":
/*!****************************************************************!*\
  !*** ./node_modules/@enhavo/media/image-cropper/FormatData.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var FormatData = /** @class */function () {
    function FormatData() {
      this.rotate = 0;
      this.scaleX = 1;
      this.scaleY = 1;
      this.changed = false;
    }
    FormatData.prototype.getData = function () {
      if (this.x !== null && this.y !== null && this.width !== null && this.height !== null) {
        return {
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height,
          scaleX: this.scaleX,
          scaleY: this.scaleY,
          rotate: this.rotate
        };
      }
      return null;
    };
    return FormatData;
  }();
  exports["default"] = FormatData;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/media/image-cropper/ImageCropperApp.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@enhavo/media/image-cropper/ImageCropperApp.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/view-stack/event/RemoveEvent */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/view-stack/event/RemoveEvent.ts"), __webpack_require__(/*! @enhavo/app/view/Confirm */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/view/Confirm.ts"), __webpack_require__(/*! @enhavo/media/image-cropper/FormatData */ "./node_modules/@enhavo/media/image-cropper/FormatData.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/UpdatedEvent */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/view-stack/event/UpdatedEvent.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, RemoveEvent_1, Confirm_1, FormatData_1, UpdatedEvent_1, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ImageCropperApp = /** @class */function () {
    function ImageCropperApp(data, eventDispatcher, view, actionManager, flashMessenger, componentRegistry) {
      this.data = _.extend(data, new FormatData_1["default"]());
      this.eventDispatcher = eventDispatcher;
      this.view = view;
      this.actionManager = actionManager;
      this.flashMessenger = flashMessenger;
      this.componentRegistry = componentRegistry;
    }
    ImageCropperApp.prototype.init = function () {
      if (this.flashMessenger.has('success')) {
        this.eventDispatcher.dispatch(new UpdatedEvent_1["default"](this.view.getId()));
      }
      this.view.init();
      this.actionManager.init();
      this.flashMessenger.init();
      this.componentRegistry.registerStore('imageCropper', this);
      this.componentRegistry.registerData(this.data);
      this.addCloseListener();
      this.view.ready();
    };
    ImageCropperApp.prototype.addCloseListener = function () {
      var _this = this;
      this.eventDispatcher.on('close', function (event) {
        if (_this.view.getId() === event.id) {
          if (_this.data.changed) {
            _this.view.confirm(new Confirm_1["default"]('not saved confirm', function () {
              event.resolve();
              var id = _this.view.getId();
              _this.eventDispatcher.dispatch(new RemoveEvent_1["default"](id));
            }, function () {
              event.reject();
            }));
          } else {
            event.resolve();
            var id = _this.view.getId();
            _this.eventDispatcher.dispatch(new RemoveEvent_1["default"](id, event.saveState));
          }
        }
      });
    };
    return ImageCropperApp;
  }();
  exports["default"] = ImageCropperApp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue":
/*!***************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageCropperComponent_vue_vue_type_template_id_6b6c99cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCropperComponent.vue?vue&type=template&id=6b6c99cc& */ "./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=template&id=6b6c99cc&");
/* harmony import */ var _ImageCropperComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCropperComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ImageCropperComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ImageCropperComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ImageCropperComponent_vue_vue_type_style_index_0_id_6b6c99cc_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageCropperComponent.vue?vue&type=style&index=0&id=6b6c99cc&lang=css& */ "./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=style&index=0&id=6b6c99cc&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageCropperComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageCropperComponent_vue_vue_type_template_id_6b6c99cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageCropperComponent_vue_vue_type_template_id_6b6c99cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./ImageCropperComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=style&index=0&id=6b6c99cc&lang=css&":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=style&index=0&id=6b6c99cc&lang=css& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_style_index_0_id_6b6c99cc_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../mini-css-extract-plugin/dist/loader.js!../../../../css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../vue-loader/lib??vue-loader-options!./ImageCropperComponent.vue?vue&type=style&index=0&id=6b6c99cc&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=style&index=0&id=6b6c99cc&lang=css&");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_style_index_0_id_6b6c99cc_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_style_index_0_id_6b6c99cc_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_style_index_0_id_6b6c99cc_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_style_index_0_id_6b6c99cc_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=template&id=6b6c99cc&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=template&id=6b6c99cc& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_template_id_6b6c99cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../vue-loader/lib??vue-loader-options!./ImageCropperComponent.vue?vue&type=template&id=6b6c99cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=template&id=6b6c99cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_template_id_6b6c99cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_template_id_6b6c99cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/media/node_modules/@enhavo/app/view-stack/event/Event.ts":
/*!***************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/node_modules/@enhavo/app/view-stack/event/Event.ts ***!
  \***************************************************************************************/
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

/***/ "./node_modules/@enhavo/media/node_modules/@enhavo/app/view-stack/event/RemoveEvent.ts":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/node_modules/@enhavo/app/view-stack/event/RemoveEvent.ts ***!
  \*********************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
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

/***/ "./node_modules/@enhavo/media/node_modules/@enhavo/app/view-stack/event/UpdatedEvent.ts":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/node_modules/@enhavo/app/view-stack/event/UpdatedEvent.ts ***!
  \**********************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
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

/***/ "./node_modules/@enhavo/media/node_modules/@enhavo/app/view/Confirm.ts":
/*!*****************************************************************************!*\
  !*** ./node_modules/@enhavo/media/node_modules/@enhavo/app/view/Confirm.ts ***!
  \*****************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! @enhavo/app/assets/fonts/enhavo-icons.font */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/assets/fonts/enhavo-icons.font.js"), __webpack_require__(/*! @enhavo/app/assets/styles/view.scss */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/assets/styles/view.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ImageCropperComponent = /** @class */function (_super) {
    __extends(ImageCropperComponent, _super);
    function ImageCropperComponent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageCropperComponent.prototype.mounted = function () {
      var _this = this;
      $(document).on('change', ':input', function () {
        _this.format.changed = true;
      });
    };
    ImageCropperComponent = __decorate([vue_property_decorator_1.Component()], ImageCropperComponent);
    return ImageCropperComponent;
  }(vue_property_decorator_1.Vue);
  exports["default"] = ImageCropperComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=style&index=0&id=6b6c99cc&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=style&index=0&id=6b6c99cc&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=template&id=6b6c99cc&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=template&id=6b6c99cc& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _c("action-bar"),
      _vm._v(" "),
      _c("image-cropper"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9pbWFnZS1jcm9wcGVyL0Zvcm1hdERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvaW1hZ2UtY3JvcHBlci9JbWFnZUNyb3BwZXJBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvaW1hZ2UtY3JvcHBlci9jb21wb25lbnRzL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvaW1hZ2UtY3JvcHBlci9jb21wb25lbnRzL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWU/OTc4NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9pbWFnZS1jcm9wcGVyL2NvbXBvbmVudHMvSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZT85NzA5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL2ltYWdlLWNyb3BwZXIvY29tcG9uZW50cy9JbWFnZUNyb3BwZXJDb21wb25lbnQudnVlPzNkNmIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvUmVtb3ZlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvVXBkYXRlZEV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3L0NvbmZpcm0udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvaW1hZ2UtY3JvcHBlci9jb21wb25lbnRzL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWU/YTNkNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9pbWFnZS1jcm9wcGVyL2NvbXBvbmVudHMvSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZT83ODJkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvaW1hZ2UtY3JvcHBlci9jb21wb25lbnRzL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWU/MTkzYiJdLCJuYW1lcyI6WyJGb3JtYXREYXRhIiwicm90YXRlIiwic2NhbGVYIiwic2NhbGVZIiwiY2hhbmdlZCIsInByb3RvdHlwZSIsImdldERhdGEiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiSW1hZ2VDcm9wcGVyQXBwIiwiZGF0YSIsImV2ZW50RGlzcGF0Y2hlciIsInZpZXciLCJhY3Rpb25NYW5hZ2VyIiwiZmxhc2hNZXNzZW5nZXIiLCJjb21wb25lbnRSZWdpc3RyeSIsIl8iLCJleHRlbmQiLCJGb3JtYXREYXRhXzEiLCJpbml0IiwiaGFzIiwiZGlzcGF0Y2giLCJVcGRhdGVkRXZlbnRfMSIsImdldElkIiwicmVnaXN0ZXJTdG9yZSIsInJlZ2lzdGVyRGF0YSIsImFkZENsb3NlTGlzdGVuZXIiLCJyZWFkeSIsIl90aGlzIiwib24iLCJldmVudCIsImlkIiwiY29uZmlybSIsIkNvbmZpcm1fMSIsInJlc29sdmUiLCJSZW1vdmVFdmVudF8xIiwicmVqZWN0Iiwic2F2ZVN0YXRlIiwiRXZlbnQiLCJuYW1lIiwiaGlzdG9yeSIsInV1aWQiLCJ1dWlkdjQiLCJkaXNwYXRjaGVyIiwiUmVzb2x2ZUV2ZW50IiwiUmVqZWN0RXZlbnQiLCJzZXJpYWxpemUiLCJKU09OIiwic3RyaW5naWZ5IiwiX3N1cGVyIiwiX19leHRlbmRzIiwiY2FsbCIsImV4cG9ydHMiLCJSZW1vdmVFdmVudCIsIkV2ZW50XzEiLCJMb2FkZWRFdmVudCIsIkNvbmZpcm0iLCJtZXNzYWdlIiwib25BY2NlcHQiLCJvbkRlbnkiLCJkZW55VGV4dCIsImFjY2VwdFRleHQiLCJzZXRWaWV3IiwiZGVueSIsImFjY2VwdCIsIkltYWdlQ3JvcHBlckNvbXBvbmVudCIsIm1vdW50ZWQiLCIkIiwiZG9jdW1lbnQiLCJmb3JtYXQiLCJfX2RlY29yYXRlIiwidnVlX3Byb3BlcnR5X2RlY29yYXRvcl8xIiwiQ29tcG9uZW50IiwiVnVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7RUFDQSxJQUFBQSxVQUFBO0lBQUEsU0FBQUEsV0FBQTtNQVFJLEtBQUFDLE1BQU0sR0FBVyxDQUFDO01BQ2xCLEtBQUFDLE1BQU0sR0FBVyxDQUFDO01BQ2xCLEtBQUFDLE1BQU0sR0FBVyxDQUFDO01BQ2xCLEtBQUFDLE9BQU8sR0FBWSxLQUFLO0lBZ0I1QjtJQWRJSixVQUFBLENBQUFLLFNBQUEsQ0FBQUMsT0FBTyxHQUFQO01BQ0ksSUFBSSxJQUFJLENBQUNDLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQ0MsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUNDLE1BQU0sS0FBSyxJQUFJLEVBQUU7UUFDbkYsT0FBTztVQUNISCxDQUFDLEVBQUUsSUFBSSxDQUFDQSxDQUFDO1VBQ1RDLENBQUMsRUFBRSxJQUFJLENBQUNBLENBQUM7VUFDVEMsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztVQUNqQkMsTUFBTSxFQUFFLElBQUksQ0FBQ0EsTUFBTTtVQUNuQlIsTUFB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ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybWF0RGF0YVxue1xuICAgIHVybDogc3RyaW5nO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICByYXRpbzogbnVtYmVyO1xuICAgIHJvdGF0ZTogbnVtYmVyID0gMDtcbiAgICBzY2FsZVg6IG51bWJlciA9IDE7XG4gICAgc2NhbGVZOiBudW1iZXIgPSAxO1xuICAgIGNoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLnggIT09IG51bGwgJiYgdGhpcy55ICE9PSBudWxsICYmIHRoaXMud2lkdGggIT09IG51bGwgJiYgdGhpcy5oZWlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy54LFxuICAgICAgICAgICAgICAgIHk6IHRoaXMueSxcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHNjYWxlWDogdGhpcy5zY2FsZVgsXG4gICAgICAgICAgICAgICAgc2NhbGVZOiB0aGlzLnNjYWxlWSxcbiAgICAgICAgICAgICAgICByb3RhdGU6IHRoaXMucm90YXRlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCBBY3Rpb25NYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9hY3Rpb24vQWN0aW9uTWFuYWdlclwiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBDbG9zZUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0Nsb3NlRXZlbnRcIjtcbmltcG9ydCBSZW1vdmVFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9SZW1vdmVFdmVudFwiO1xuaW1wb3J0IENvbmZpcm0gZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvQ29uZmlybVwiO1xuaW1wb3J0IEZvcm1hdERhdGEgZnJvbSBcIkBlbmhhdm8vbWVkaWEvaW1hZ2UtY3JvcHBlci9Gb3JtYXREYXRhXCI7XG5pbXBvcnQgRmxhc2hNZXNzZW5nZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2ZsYXNoLW1lc3NhZ2UvRmxhc2hNZXNzZW5nZXJcIjtcbmltcG9ydCBVcGRhdGVkRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvVXBkYXRlZEV2ZW50XCI7XG5pbXBvcnQgQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9Db21wb25lbnRSZWdpc3RyeUludGVyZmFjZVwiO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQ3JvcHBlckFwcFxue1xuICAgIHB1YmxpYyBkYXRhOiBGb3JtYXREYXRhO1xuXG4gICAgcHJpdmF0ZSBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcbiAgICBwcml2YXRlIHZpZXc6IFZpZXc7XG4gICAgcHJpdmF0ZSBhY3Rpb25NYW5hZ2VyOiBBY3Rpb25NYW5hZ2VyO1xuICAgIHByaXZhdGUgZmxhc2hNZXNzZW5nZXI6IEZsYXNoTWVzc2VuZ2VyO1xuICAgIHByaXZhdGUgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogRm9ybWF0RGF0YSwgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIsIHZpZXc6IFZpZXcsIGFjdGlvbk1hbmFnZXI6IEFjdGlvbk1hbmFnZXIsIGZsYXNoTWVzc2VuZ2VyOiBGbGFzaE1lc3NlbmdlciwgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlKVxuICAgIHtcbiAgICAgICAgdGhpcy5kYXRhICA9IF8uZXh0ZW5kKGRhdGEsIG5ldyBGb3JtYXREYXRhKTtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuYWN0aW9uTWFuYWdlciA9IGFjdGlvbk1hbmFnZXI7XG4gICAgICAgIHRoaXMuZmxhc2hNZXNzZW5nZXIgPSBmbGFzaE1lc3NlbmdlcjtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeSA9IGNvbXBvbmVudFJlZ2lzdHJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuZmxhc2hNZXNzZW5nZXIuaGFzKCdzdWNjZXNzJykpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBVcGRhdGVkRXZlbnQodGhpcy52aWV3LmdldElkKCkpKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aWV3LmluaXQoKTtcbiAgICAgICAgdGhpcy5hY3Rpb25NYW5hZ2VyLmluaXQoKTtcbiAgICAgICAgdGhpcy5mbGFzaE1lc3Nlbmdlci5pbml0KCk7XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlclN0b3JlKCdpbWFnZUNyb3BwZXInLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckRhdGEodGhpcy5kYXRhKTtcblxuICAgICAgICB0aGlzLmFkZENsb3NlTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy52aWV3LnJlYWR5KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFkZENsb3NlTGlzdGVuZXIoKVxuICAgIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIub24oJ2Nsb3NlJywgKGV2ZW50OiBDbG9zZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZih0aGlzLnZpZXcuZ2V0SWQoKSA9PT0gZXZlbnQuaWQpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRhdGEuY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZXcuY29uZmlybShuZXcgQ29uZmlybShcbiAgICAgICAgICAgICAgICAgICAgICAgICdub3Qgc2F2ZWQgY29uZmlybScsXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMudmlldy5nZXRJZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBSZW1vdmVFdmVudChpZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5yZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaWQgPSB0aGlzLnZpZXcuZ2V0SWQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFJlbW92ZUV2ZW50KGlkLCBldmVudC5zYXZlU3RhdGUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmI2Yzk5Y2MmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9JbWFnZUNyb3BwZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NmI2Yzk5Y2MmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcmVwb3MvcHJpdmF0L2phcGFuZXNlLXRleHRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YjZjOTljYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YjZjOTljYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YjZjOTljYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YjZjOTljYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2YjZjOTljYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvaW1hZ2UtY3JvcHBlci9jb21wb25lbnRzL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02YjZjOTljYyZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YjZjOTljYyZcIiIsImltcG9ydCAqIGFzIHV1aWR2NCBmcm9tIFwidXVpZC92NFwiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tICdAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50XG57XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG9yaWdpbjogYW55O1xuICAgIHRhcmdldDogYW55O1xuICAgIGhpc3Rvcnk6IHN0cmluZ1tdID0gW107XG4gICAgdXVpZDogc3RyaW5nO1xuICAgIHR0bDogbnVtYmVyO1xuICAgIGRpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZylcbiAgICB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWR2NCgpO1xuICAgIH1cblxuICAgIHJlc29sdmUoZGF0YTogb2JqZWN0ID0ge30pXG4gICAge1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFJlc29sdmVFdmVudCh0aGlzLnV1aWQsIGRhdGEpKTtcbiAgICB9XG5cbiAgICByZWplY3QoZGF0YTogb2JqZWN0ID0ge30pXG4gICAge1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFJlamVjdEV2ZW50KHRoaXMudXVpZCwgZGF0YSkpO1xuICAgIH1cblxuICAgIHNlcmlhbGl6ZSgpOiBzdHJpbmdcbiAgICB7XG4gICAgICAgIGxldCBkaXNwYXRjaGVyID0gdGhpcy5kaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBudWxsO1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIgPSBkaXNwYXRjaGVyO1xuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlamVjdEV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBkYXRhOiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcih1dWlkOiBzdHJpbmcsIGRhdGE6IG9iamVjdClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdyZWplY3QnKTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZXNvbHZlRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGRhdGE6IG9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHV1aWQ6IHN0cmluZywgZGF0YTogb2JqZWN0KVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ3Jlc29sdmUnKTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1vdmVFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzYXZlU3RhdGU6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBzYXZlU3RhdGU6IGJvb2xlYW4gPSB0cnVlKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ3JlbW92ZScpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc2F2ZVN0YXRlID0gc2F2ZVN0YXRlO1xuICAgIH1cbn0iLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZWRFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgaWQ6IG51bWJlcjtcbiAgICBkYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBkYXRhPzogYW55KVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ3VwZGF0ZWQnKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn0iLCJpbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1cbntcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkZW55VGV4dDogc3RyaW5nO1xuICAgIHB1YmxpYyBhY2NlcHRUZXh0OiBzdHJpbmc7XG4gICAgcHVibGljIG9uRGVueTogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgb25BY2NlcHQ6ICgpID0+IHZvaWQ7XG4gICAgcHVibGljIHZpZXc6IFZpZXc7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIG9uQWNjZXB0PzogKCkgPT4gdm9pZCwgb25EZW55PzogKCkgPT4gdm9pZCwgZGVueVRleHQ6IHN0cmluZyA9ICdkZW55JywgYWNjZXB0VGV4dDogc3RyaW5nID0gJ2FjY2VwdCcpXG4gICAge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLm9uQWNjZXB0ID0gb25BY2NlcHQ7XG4gICAgICAgIHRoaXMub25EZW55ID0gb25EZW55O1xuICAgICAgICB0aGlzLmRlbnlUZXh0ID0gZGVueVRleHQ7XG4gICAgICAgIHRoaXMuYWNjZXB0VGV4dCA9IGFjY2VwdFRleHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFZpZXcodmlldzogVmlldylcbiAgICB7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbnkoKVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3LmNvbmZpcm0obnVsbCk7XG4gICAgICAgIGlmKHRoaXMub25EZW55KSB7XG4gICAgICAgICAgICB0aGlzLm9uRGVueSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFjY2VwdCgpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcuY29uZmlybShudWxsKTtcbiAgICAgICAgaWYodGhpcy5vbkFjY2VwdCkge1xuICAgICAgICAgICAgdGhpcy5vbkFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgfVxufSIsIlxuaW1wb3J0IHsgVnVlLCBDb21wb25lbnQgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0ICdAZW5oYXZvL2FwcC9hc3NldHMvZm9udHMvZW5oYXZvLWljb25zLmZvbnQnXG5pbXBvcnQgJ0Blbmhhdm8vYXBwL2Fzc2V0cy9zdHlsZXMvdmlldy5zY3NzJztcblxuQENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUNyb3BwZXJDb21wb25lbnQgZXh0ZW5kcyBWdWVcbntcbiAgICBtb3VudGVkKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJzppbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWF0LmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1cbiAgXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7ICsraWkpIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChybmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2NDtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jLFxuICAgIF9zZXR1cCA9IF92bS5fc2VsZi5fc2V0dXBQcm94eVxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFwcC12aWV3XCIgfSxcbiAgICBbXG4gICAgICBfYyhcInZpZXctdmlld1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZsYXNoLW1lc3NhZ2VzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYWN0aW9uLWJhclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImltYWdlLWNyb3BwZXJcIiksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9