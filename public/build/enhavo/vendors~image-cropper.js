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

  var FormatData =
  /** @class */
  function () {
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

  var ImageCropperApp =
  /** @class */
  function () {
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
/* harmony import */ var _ImageCropperComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageCropperComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=style&index=0&lang=css&");
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

/***/ "./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../mini-css-extract-plugin/dist/loader.js!../../../../css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../vue-loader/lib??vue-loader-options!./ImageCropperComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=template&id=6b6c99cc&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=template&id=6b6c99cc& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_template_id_6b6c99cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./ImageCropperComponent.vue?vue&type=template&id=6b6c99cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=template&id=6b6c99cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_template_id_6b6c99cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ImageCropperComponent_vue_vue_type_template_id_6b6c99cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! @enhavo/app/assets/fonts/enhavo-icons.font */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/assets/fonts/enhavo-icons.font.js"), __webpack_require__(/*! @enhavo/app/assets/styles/view.scss */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/assets/styles/view.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ImageCropperComponent =
  /** @class */
  function (_super) {
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/image-cropper/components/ImageCropperComponent.vue?vue&type=template&id=6b6c99cc& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9pbWFnZS1jcm9wcGVyL0Zvcm1hdERhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvaW1hZ2UtY3JvcHBlci9JbWFnZUNyb3BwZXJBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvaW1hZ2UtY3JvcHBlci9jb21wb25lbnRzL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvaW1hZ2UtY3JvcHBlci9jb21wb25lbnRzL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWU/OTc4NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9pbWFnZS1jcm9wcGVyL2NvbXBvbmVudHMvSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZT9lNzZlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL2ltYWdlLWNyb3BwZXIvY29tcG9uZW50cy9JbWFnZUNyb3BwZXJDb21wb25lbnQudnVlPzA0NjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvUmVtb3ZlRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvVXBkYXRlZEV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3L0NvbmZpcm0udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvaW1hZ2UtY3JvcHBlci9jb21wb25lbnRzL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWU/YTNkNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9pbWFnZS1jcm9wcGVyL2NvbXBvbmVudHMvSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZT9hMTJjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvdjQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvaW1hZ2UtY3JvcHBlci9jb21wb25lbnRzL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWU/M2Y0MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFRSSxvQkFBaUIsQ0FBakI7QUFDQSxvQkFBaUIsQ0FBakI7QUFDQSxvQkFBaUIsQ0FBakI7QUFDQSxxQkFBbUIsS0FBbkI7QUFnQkg7O0FBZEc7QUFDSSxVQUFJLEtBQUssQ0FBTCxLQUFXLElBQVgsSUFBbUIsS0FBSyxDQUFMLEtBQVcsSUFBOUIsSUFBc0MsS0FBSyxLQUFMLEtBQWUsSUFBckQsSUFBNkQsS0FBSyxNQUFMLEtBQWdCLElBQWpGLEVBQXVGO0FBQ25GLGVBQU87QUFDSCxXQUFDLEVBQUUsS0FBSyxDQURMO0FBRUgsV0FBQyxFQUFFLEtBQUssQ0FGTDtBQUdILGVBQUssRUFBRSxLQUFLLEtBSFQ7QUFJSCxnQkFBTSxFQUFFLEtBQUssTUFKVjtBQUtILGdCQUFNLEVBQUUsS0FBSyxNQUxWO0FBTUgsZ0JBQU0sRUFBRSxLQUFLLE1BTlY7QUFPSCxn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LFFBQVE7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakNBLFVBQVUsbUJBQU8sQ0FBQyx5REFBVztBQUM3QixrQkFBa0IsbUJBQU8sQ0FBQyxpRUFBbUI7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssMEJBQTBCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidmVuZG9yc35pbWFnZS1jcm9wcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtYXREYXRhXG57XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHJhdGlvOiBudW1iZXI7XG4gICAgcm90YXRlOiBudW1iZXIgPSAwO1xuICAgIHNjYWxlWDogbnVtYmVyID0gMTtcbiAgICBzY2FsZVk6IG51bWJlciA9IDE7XG4gICAgY2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMueCAhPT0gbnVsbCAmJiB0aGlzLnkgIT09IG51bGwgJiYgdGhpcy53aWR0aCAhPT0gbnVsbCAmJiB0aGlzLmhlaWdodCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLngsXG4gICAgICAgICAgICAgICAgeTogdGhpcy55LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAgICAgc2NhbGVYOiB0aGlzLnNjYWxlWCxcbiAgICAgICAgICAgICAgICBzY2FsZVk6IHRoaXMuc2NhbGVZLFxuICAgICAgICAgICAgICAgIHJvdGF0ZTogdGhpcy5yb3RhdGUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFjdGlvbk1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9BY3Rpb25NYW5hZ2VyXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IENsb3NlRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvQ2xvc2VFdmVudFwiO1xuaW1wb3J0IFJlbW92ZUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L1JlbW92ZUV2ZW50XCI7XG5pbXBvcnQgQ29uZmlybSBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9Db25maXJtXCI7XG5pbXBvcnQgRm9ybWF0RGF0YSBmcm9tIFwiQGVuaGF2by9tZWRpYS9pbWFnZS1jcm9wcGVyL0Zvcm1hdERhdGFcIjtcbmltcG9ydCBGbGFzaE1lc3NlbmdlciBmcm9tIFwiQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9GbGFzaE1lc3NlbmdlclwiO1xuaW1wb3J0IFVwZGF0ZWRFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9VcGRhdGVkRXZlbnRcIjtcbmltcG9ydCBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL0NvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VDcm9wcGVyQXBwXG57XG4gICAgcHVibGljIGRhdGE6IEZvcm1hdERhdGE7XG5cbiAgICBwcml2YXRlIGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuICAgIHByaXZhdGUgdmlldzogVmlldztcbiAgICBwcml2YXRlIGFjdGlvbk1hbmFnZXI6IEFjdGlvbk1hbmFnZXI7XG4gICAgcHJpdmF0ZSBmbGFzaE1lc3NlbmdlcjogRmxhc2hNZXNzZW5nZXI7XG4gICAgcHJpdmF0ZSBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBGb3JtYXREYXRhLCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlciwgdmlldzogVmlldywgYWN0aW9uTWFuYWdlcjogQWN0aW9uTWFuYWdlciwgZmxhc2hNZXNzZW5nZXI6IEZsYXNoTWVzc2VuZ2VyLCBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2UpXG4gICAge1xuICAgICAgICB0aGlzLmRhdGEgID0gXy5leHRlbmQoZGF0YSwgbmV3IEZvcm1hdERhdGEpO1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5hY3Rpb25NYW5hZ2VyID0gYWN0aW9uTWFuYWdlcjtcbiAgICAgICAgdGhpcy5mbGFzaE1lc3NlbmdlciA9IGZsYXNoTWVzc2VuZ2VyO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0gY29tcG9uZW50UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5mbGFzaE1lc3Nlbmdlci5oYXMoJ3N1Y2Nlc3MnKSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFVwZGF0ZWRFdmVudCh0aGlzLnZpZXcuZ2V0SWQoKSkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpZXcuaW5pdCgpO1xuICAgICAgICB0aGlzLmFjdGlvbk1hbmFnZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLmZsYXNoTWVzc2VuZ2VyLmluaXQoKTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyU3RvcmUoJ2ltYWdlQ3JvcHBlcicsIHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyRGF0YSh0aGlzLmRhdGEpO1xuXG4gICAgICAgIHRoaXMuYWRkQ2xvc2VMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnZpZXcucmVhZHkoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWRkQ2xvc2VMaXN0ZW5lcigpXG4gICAge1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5vbignY2xvc2UnLCAoZXZlbnQ6IENsb3NlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMudmlldy5nZXRJZCgpID09PSBldmVudC5pZCkge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YS5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5jb25maXJtKG5ldyBDb25maXJtKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ25vdCBzYXZlZCBjb25maXJtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gdGhpcy52aWV3LmdldElkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFJlbW92ZUV2ZW50KGlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMudmlldy5nZXRJZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVtb3ZlRXZlbnQoaWQsIGV2ZW50LnNhdmVTdGF0ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YjZjOTljYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbWFnZUNyb3BwZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbWFnZUNyb3BwZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0ltYWdlQ3JvcHBlckNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9yZXBvcy9wcml2YXQvamFwYW5lc2UtdGV4dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZiNmM5OWNjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZiNmM5OWNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZiNmM5OWNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbWFnZUNyb3BwZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiNmM5OWNjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZiNmM5OWNjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9pbWFnZS1jcm9wcGVyL2NvbXBvbmVudHMvSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZUNyb3BwZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW1hZ2VDcm9wcGVyQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbWFnZUNyb3BwZXJDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiNmM5OWNjJlwiIiwiaW1wb3J0ICogYXMgdXVpZHY0IGZyb20gXCJ1dWlkL3Y0XCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJ0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRcbntcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3JpZ2luOiBhbnk7XG4gICAgdGFyZ2V0OiBhbnk7XG4gICAgaGlzdG9yeTogc3RyaW5nW10gPSBbXTtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgdHRsOiBudW1iZXI7XG4gICAgZGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZHY0KCk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZShkYXRhOiBvYmplY3QgPSB7fSlcbiAgICB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVzb2x2ZUV2ZW50KHRoaXMudXVpZCwgZGF0YSkpO1xuICAgIH1cblxuICAgIHJlamVjdChkYXRhOiBvYmplY3QgPSB7fSlcbiAgICB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVqZWN0RXZlbnQodGhpcy51dWlkLCBkYXRhKSk7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplKCk6IHN0cmluZ1xuICAgIHtcbiAgICAgICAgbGV0IGRpc3BhdGNoZXIgPSB0aGlzLmRpc3BhdGNoZXI7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IG51bGw7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVqZWN0RXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGRhdGE6IG9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHV1aWQ6IHN0cmluZywgZGF0YTogb2JqZWN0KVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ3JlamVjdCcpO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc29sdmVFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgZGF0YTogb2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IodXVpZDogc3RyaW5nLCBkYXRhOiBvYmplY3QpXG4gICAge1xuICAgICAgICBzdXBlcigncmVzb2x2ZScpO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cbiIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbW92ZUV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBpZDogbnVtYmVyO1xuICAgIHNhdmVTdGF0ZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHNhdmVTdGF0ZTogYm9vbGVhbiA9IHRydWUpXG4gICAge1xuICAgICAgICBzdXBlcigncmVtb3ZlJyk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5zYXZlU3RhdGUgPSBzYXZlU3RhdGU7XG4gICAgfVxufSIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlZEV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBpZDogbnVtYmVyO1xuICAgIGRhdGE6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIGRhdGE/OiBhbnkpXG4gICAge1xuICAgICAgICBzdXBlcigndXBkYXRlZCcpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxufSIsImltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybVxue1xuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gICAgcHVibGljIGRlbnlUZXh0OiBzdHJpbmc7XG4gICAgcHVibGljIGFjY2VwdFRleHQ6IHN0cmluZztcbiAgICBwdWJsaWMgb25EZW55OiAoKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBvbkFjY2VwdDogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgdmlldzogVmlldztcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgb25BY2NlcHQ/OiAoKSA9PiB2b2lkLCBvbkRlbnk/OiAoKSA9PiB2b2lkLCBkZW55VGV4dDogc3RyaW5nID0gJ2RlbnknLCBhY2NlcHRUZXh0OiBzdHJpbmcgPSAnYWNjZXB0JylcbiAgICB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMub25BY2NlcHQgPSBvbkFjY2VwdDtcbiAgICAgICAgdGhpcy5vbkRlbnkgPSBvbkRlbnk7XG4gICAgICAgIHRoaXMuZGVueVRleHQgPSBkZW55VGV4dDtcbiAgICAgICAgdGhpcy5hY2NlcHRUZXh0ID0gYWNjZXB0VGV4dDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Vmlldyh2aWV3OiBWaWV3KVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVueSgpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcuY29uZmlybShudWxsKTtcbiAgICAgICAgaWYodGhpcy5vbkRlbnkpIHtcbiAgICAgICAgICAgIHRoaXMub25EZW55KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWNjZXB0KClcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy5jb25maXJtKG51bGwpO1xuICAgICAgICBpZih0aGlzLm9uQWNjZXB0KSB7XG4gICAgICAgICAgICB0aGlzLm9uQWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgeyBWdWUsIENvbXBvbmVudCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgJ0Blbmhhdm8vYXBwL2Fzc2V0cy9mb250cy9lbmhhdm8taWNvbnMuZm9udCdcbmltcG9ydCAnQGVuaGF2by9hcHAvYXNzZXRzL3N0eWxlcy92aWV3LnNjc3MnO1xuXG5AQ29tcG9uZW50KClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlQ3JvcHBlckNvbXBvbmVudCBleHRlbmRzIFZ1ZVxue1xuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnOmlucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JtYXQuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXVxuICBdKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFwcC12aWV3XCIgfSxcbiAgICBbXG4gICAgICBfYyhcInZpZXctdmlld1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZsYXNoLW1lc3NhZ2VzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYWN0aW9uLWJhclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImltYWdlLWNyb3BwZXJcIiksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9