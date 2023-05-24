(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~media"],{

/***/ "./node_modules/@enhavo/media/assets/styles/_library.scss":
/*!****************************************************************!*\
  !*** ./node_modules/@enhavo/media/assets/styles/_library.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@enhavo/media/media-library/MediaData.ts":
/*!***************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/MediaData.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var MediaData = /** @class */function () {
    function MediaData() {
      this.dropZone = false;
      this.dropZoneActive = false;
      this.loading = false;
      this.page = 1;
      this.editView = null;
    }
    return MediaData;
  }();
  exports["default"] = MediaData;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/media/media-library/MediaItem.ts":
/*!***************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/MediaItem.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var MediaItem = /** @class */function () {
    function MediaItem() {}
    return MediaItem;
  }();
  exports["default"] = MediaItem;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/media/media-library/MediaLibrary.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/MediaLibrary.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/media/media-library/MediaData */ "./node_modules/@enhavo/media/media-library/MediaData.ts"), __webpack_require__(/*! @enhavo/media/media-library/MediaItem */ "./node_modules/@enhavo/media/media-library/MediaItem.ts"), __webpack_require__(/*! axios */ "./node_modules/axios/index.js"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, MediaData_1, MediaItem_1, axios_1, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var MediaLibrary = /** @class */function () {
    function MediaLibrary(data, router, eventDispatcher, view, translator, componentRegistry) {
      _.extend(data, new MediaData_1["default"]());
      this.data = data;
      this.eventDispatcher = eventDispatcher;
      this.view = view;
      this.router = router;
      this.translator = translator;
      this.componentRegistry = componentRegistry;
    }
    MediaLibrary.prototype.init = function () {
      var _this = this;
      this.refresh();
      this.eventDispatcher.on('removed', function (event) {
        if (event.id == _this.data.editView) {
          _this.data.editView = null;
        }
      });
      this.eventDispatcher.on('updated', function (event) {
        if (event.id == _this.data.editView) {
          _this.refresh();
        }
      });
      this.componentRegistry.registerData(this.data);
      this.componentRegistry.registerStore('mediaLibrary', this);
    };
    MediaLibrary.prototype.setProgress = function (value) {
      this.data.progress = value;
    };
    MediaLibrary.prototype.refresh = function () {
      var _this = this;
      this.loading();
      var url = this.router.generate('enhavo_media_library_list', {
        page: this.data.page
      });
      axios_1["default"].get(url, {
        params: []
      }).then(function (response) {
        _this.data.items = _this.createRowData(response.data.resources);
        _this.data.count = parseInt(response.data.pages.count);
        _this.data.page = parseInt(response.data.pages.page);
        _this.loaded();
      })["catch"](function (error) {
        _this.view.alert('error');
      }).then(function () {
        _this.data.loading = false;
      });
    };
    MediaLibrary.prototype.loading = function () {
      this.view.loading();
      this.data.loading = true;
    };
    MediaLibrary.prototype.loaded = function () {
      this.view.loaded();
      this.data.loading = false;
    };
    MediaLibrary.prototype.createRowData = function (objects) {
      var data = [];
      for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
        var item = objects_1[_i];
        data.push(_.extend(new MediaItem_1["default"](), item));
      }
      return data;
    };
    MediaLibrary.prototype.showDropZone = function () {
      if (!this.data.dropZone) {
        this.data.dropZone = true;
      }
    };
    MediaLibrary.prototype.showDropZoneActive = function () {
      if (!this.data.dropZoneActive) {
        this.data.dropZoneActive = true;
      }
    };
    MediaLibrary.prototype.hideDropZone = function () {
      if (this.data.dropZone) {
        this.data.dropZone = false;
      }
    };
    MediaLibrary.prototype.hideDropZoneActive = function () {
      if (this.data.dropZoneActive) {
        this.data.dropZoneActive = false;
      }
    };
    MediaLibrary.prototype.open = function (item) {
      var url = this.router.generate(this.data.updateRoute, {
        id: item.id
      });
      this.view.open(url, 'edit-view');
    };
    return MediaLibrary;
  }();
  exports["default"] = MediaLibrary;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/media/media-library/MediaLibraryApp.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/MediaLibraryApp.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var MediaLibraryApp = /** @class */function () {
    function MediaLibraryApp(view, actionManager, mediaLibrary, flashMessenger) {
      this.view = view;
      this.actionManager = actionManager;
      this.mediaLibrary = mediaLibrary;
      this.flashMessenger = flashMessenger;
    }
    MediaLibraryApp.prototype.init = function () {
      this.view.init();
      this.actionManager.init();
      this.mediaLibrary.init();
      this.flashMessenger.init();
      this.view.addDefaultCloseListener();
      this.view.ready();
    };
    return MediaLibraryApp;
  }();
  exports["default"] = MediaLibraryApp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue":
/*!**************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApplicationComponent_vue_vue_type_template_id_7e596073___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationComponent.vue?vue&type=template&id=7e596073& */ "./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=template&id=7e596073&");
/* harmony import */ var _ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApplicationComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ApplicationComponent_vue_vue_type_style_index_0_id_7e596073_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApplicationComponent.vue?vue&type=style&index=0&id=7e596073&lang=css& */ "./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=style&index=0&id=7e596073&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApplicationComponent_vue_vue_type_template_id_7e596073___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApplicationComponent_vue_vue_type_template_id_7e596073___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./ApplicationComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=style&index=0&id=7e596073&lang=css&":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=style&index=0&id=7e596073&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_style_index_0_id_7e596073_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../mini-css-extract-plugin/dist/loader.js!../../../../css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../vue-loader/lib??vue-loader-options!./ApplicationComponent.vue?vue&type=style&index=0&id=7e596073&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=style&index=0&id=7e596073&lang=css&");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_style_index_0_id_7e596073_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_style_index_0_id_7e596073_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_style_index_0_id_7e596073_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_style_index_0_id_7e596073_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=template&id=7e596073&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=template&id=7e596073& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_template_id_7e596073___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../vue-loader/lib??vue-loader-options!./ApplicationComponent.vue?vue&type=template&id=7e596073& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=template&id=7e596073&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_template_id_7e596073___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_template_id_7e596073___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue":
/*!***************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaLibraryComponent_vue_vue_type_template_id_2f21f510___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaLibraryComponent.vue?vue&type=template&id=2f21f510& */ "./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=template&id=2f21f510&");
/* harmony import */ var _MediaLibraryComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaLibraryComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MediaLibraryComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MediaLibraryComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MediaLibraryComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediaLibraryComponent_vue_vue_type_template_id_2f21f510___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediaLibraryComponent_vue_vue_type_template_id_2f21f510___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MediaLibraryComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./MediaLibraryComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MediaLibraryComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MediaLibraryComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MediaLibraryComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MediaLibraryComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MediaLibraryComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=template&id=2f21f510&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=template&id=2f21f510& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_MediaLibraryComponent_vue_vue_type_template_id_2f21f510___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../vue-loader/lib??vue-loader-options!./MediaLibraryComponent.vue?vue&type=template&id=2f21f510& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=template&id=2f21f510&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_MediaLibraryComponent_vue_vue_type_template_id_2f21f510___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_MediaLibraryComponent_vue_vue_type_template_id_2f21f510___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=script&lang=ts&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! @enhavo/app/assets/fonts/enhavo-icons.font */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/assets/fonts/enhavo-icons.font.js"), __webpack_require__(/*! @enhavo/app/assets/styles/view.scss */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/assets/styles/view.scss"), __webpack_require__(/*! @enhavo/media/assets/styles/_library.scss */ "./node_modules/@enhavo/media/assets/styles/_library.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ApplicationComponent = /** @class */function (_super) {
    __extends(ApplicationComponent, _super);
    function ApplicationComponent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplicationComponent = __decorate([vue_property_decorator_1.Component()], ApplicationComponent);
    return ApplicationComponent;
  }(vue_property_decorator_1.Vue);
  exports["default"] = ApplicationComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=script&lang=ts&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=script&lang=ts& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! blueimp-file-upload/js/jquery.iframe-transport */ "./node_modules/blueimp-file-upload/js/jquery.iframe-transport.js"), __webpack_require__(/*! blueimp-file-upload/js/jquery.fileupload */ "./node_modules/blueimp-file-upload/js/jquery.fileupload.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var MediaLibraryComponent = /** @class */function (_super) {
    __extends(MediaLibraryComponent, _super);
    function MediaLibraryComponent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaLibraryComponent.prototype.mounted = function () {
      var _this = this;
      var element = this.$refs.upload;
      $(document).on('upload', function () {
        $(element).trigger('click');
      });
      $(element).fileupload({
        replaceFileInput: false,
        dataType: 'json',
        paramName: 'files',
        done: function done(event, data) {
          _this.getMediaLibrary().refresh();
        },
        fail: function fail(event, data) {
          _this.getMediaLibrary().fail();
        },
        add: function add(event, data) {
          data.url = _this.getRouter().generate('enhavo_media_library_upload', {});
          data.submit();
          _this.getMediaLibrary().loading();
        },
        progressall: function progressall(event, data) {
          var progress = data.loaded / data.total * 100;
          if (progress >= 100) {
            _this.getMediaLibrary().setProgress(0);
          } else {
            _this.getMediaLibrary().setProgress(progress);
          }
        },
        dropZone: this.$refs.mediaLibrary,
        pasteZone: null
      });
      $(document).bind('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        _this.getMediaLibrary().showDropZone();
      });
      $(this.$refs.mediaLibrary).bind('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        _this.getMediaLibrary().showDropZone();
        _this.getMediaLibrary().showDropZoneActive();
      });
      $(document).bind('dragleave', function (e) {
        if ($(document).find('.app-view').length > 0 && $(document).find('.app-view').find(e.target).length > 0) return;
        e.preventDefault();
        e.stopPropagation();
        _this.getMediaLibrary().hideDropZone();
      });
      $(this.$refs.mediaLibrary).bind('dragleave', function (e) {
        e.preventDefault();
        e.stopPropagation();
        _this.getMediaLibrary().hideDropZoneActive();
      });
      $(document).bind('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        _this.getMediaLibrary().hideDropZone();
        _this.getMediaLibrary().hideDropZoneActive();
      });
    };
    MediaLibraryComponent.prototype.open = function (item) {
      this.getMediaLibrary().open(item);
    };
    MediaLibraryComponent.prototype.getMediaLibrary = function () {
      return this.$mediaLibrary;
    };
    MediaLibraryComponent.prototype.getRouter = function () {
      return this.$router;
    };
    MediaLibraryComponent.prototype.getType = function (extension) {
      if (extension == 'png' || extension == 'jpg' || extension == 'jpeg' || extension == 'gif') {
        return 'image';
      }
      if (extension == 'pdf') {
        return 'document';
      }
      return 'file';
    };
    MediaLibraryComponent = __decorate([vue_property_decorator_1.Component()], MediaLibraryComponent);
    return MediaLibraryComponent;
  }(vue_property_decorator_1.Vue);
  exports["default"] = MediaLibraryComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=style&index=0&id=7e596073&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=style&index=0&id=7e596073&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=template&id=7e596073&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=template&id=7e596073& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      _c("media-library"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=template&id=2f21f510&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=template&id=2f21f510& ***!
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
    {
      ref: "mediaLibrary",
      staticClass: "media-library",
      class: {
        "drop-zone": _vm.$mediaLibrary.data.dropZone,
        "drop-zone-active": _vm.$mediaLibrary.data.dropZoneActive,
      },
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "media-library-file-list" },
        _vm._l(_vm.$mediaLibrary.data.items, function (item) {
          return _c(
            "li",
            {
              on: {
                click: function ($event) {
                  return _vm.open(item)
                },
              },
            },
            [
              _c("div", { staticClass: "filename" }, [
                _vm._v(_vm._s(item.data.name)),
              ]),
              _vm._v(" "),
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.getType(item.data.extension) === "image",
                    expression: "getType(item.data.extension) === 'image'",
                  },
                ],
                attrs: { src: item.data.media.url },
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.getType(item.data.extension) === "document",
                      expression: "getType(item.data.extension) === 'document'",
                    },
                  ],
                  staticClass: "icon-container",
                },
                [_c("i", { staticClass: "icon icon-insert_drive_file" })]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.getType(item.data.extension) === "file",
                      expression: "getType(item.data.extension) === 'file'",
                    },
                  ],
                  staticClass: "icon-container",
                },
                [_c("i", { staticClass: "icon icon-insert_drive_file" })]
              ),
            ]
          )
        }),
        0
      ),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this,
      _c = _vm._self._c,
      _setup = _vm._self._setupProxy
    return _c("input", {
      directives: [
        { name: "show", rawName: "v-show", value: false, expression: "false" },
      ],
      ref: "upload",
      attrs: { type: "file", multiple: "" },
    })
  },
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9hc3NldHMvc3R5bGVzL19saWJyYXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9NZWRpYURhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9NZWRpYUl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9NZWRpYUxpYnJhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9NZWRpYUxpYnJhcnlBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9jb21wb25lbnRzL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9tZWRpYS1saWJyYXJ5L2NvbXBvbmVudHMvQXBwbGljYXRpb25Db21wb25lbnQudnVlPzI0N2YiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9jb21wb25lbnRzL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT9mODA2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvY29tcG9uZW50cy9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/ODAyOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9tZWRpYS1saWJyYXJ5L2NvbXBvbmVudHMvTWVkaWFMaWJyYXJ5Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9tZWRpYS1saWJyYXJ5L2NvbXBvbmVudHMvTWVkaWFMaWJyYXJ5Q29tcG9uZW50LnZ1ZT8wMGY3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvY29tcG9uZW50cy9NZWRpYUxpYnJhcnlDb21wb25lbnQudnVlPzljODgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9jb21wb25lbnRzL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT84YzFjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvY29tcG9uZW50cy9NZWRpYUxpYnJhcnlDb21wb25lbnQudnVlPzVmNDYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9jb21wb25lbnRzL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT83NjIzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvY29tcG9uZW50cy9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/MjBjNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9tZWRpYS1saWJyYXJ5L2NvbXBvbmVudHMvTWVkaWFMaWJyYXJ5Q29tcG9uZW50LnZ1ZT9iY2I0Il0sIm5hbWVzIjpbIk1lZGlhRGF0YSIsImRyb3Bab25lIiwiZHJvcFpvbmVBY3RpdmUiLCJsb2FkaW5nIiwicGFnZSIsImVkaXRWaWV3IiwiTWVkaWFJdGVtIiwiTWVkaWFMaWJyYXJ5IiwiZGF0YSIsInJvdXRlciIsImV2ZW50RGlzcGF0Y2hlciIsInZpZXciLCJ0cmFuc2xhdG9yIiwiY29tcG9uZW50UmVnaXN0cnkiLCJfIiwiZXh0ZW5kIiwiTWVkaWFEYXRhXzEiLCJwcm90b3R5cGUiLCJpbml0IiwiX3RoaXMiLCJyZWZyZXNoIiwib24iLCJldmVudCIsImlkIiwicmVnaXN0ZXJEYXRhIiwicmVnaXN0ZXJTdG9yZSIsInNldFByb2dyZXNzIiwidmFsdWUiLCJwcm9ncmVzcyIsInVybCIsImdlbmVyYXRlIiwiYXhpb3NfMSIsImdldCIsInBhcmFtcyIsInRoZW4iLCJyZXNwb25zZSIsIml0ZW1zIiwiY3JlYXRlUm93RGF0YSIsInJlc291cmNlcyIsImNvdW50IiwicGFyc2VJbnQiLCJwYWdlcyIsImxvYWRlZCIsImVycm9yIiwiYWxlcnQiLCJvYmplY3RzIiwiX2kiLCJvYmplY3RzXzEiLCJsZW5ndGgiLCJpdGVtIiwicHVzaCIsIk1lZGlhSXRlbV8xIiwic2hvd0Ryb3Bab25lIiwic2hvd0Ryb3Bab25lQWN0aXZlIiwiaGlkZURyb3Bab25lIiwiaGlkZURyb3Bab25lQWN0aXZlIiwib3BlbiIsInVwZGF0ZVJvdXRlIiwiTWVkaWFMaWJyYXJ5QXBwIiwiYWN0aW9uTWFuYWdlciIsIm1lZGlhTGlicmFyeSIsImZsYXNoTWVzc2VuZ2VyIiwiYWRkRGVmYXVsdENsb3NlTGlzdGVuZXIiLCJyZWFkeSIsIkFwcGxpY2F0aW9uQ29tcG9uZW50IiwiX3N1cGVyIiwiX19leHRlbmRzIiwiX19kZWNvcmF0ZSIsInZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMSIsIkNvbXBvbmVudCIsIlZ1ZSIsIk1lZGlhTGlicmFyeUNvbXBvbmVudCIsIm1vdW50ZWQiLCJlbGVtZW50IiwiJHJlZnMiLCJ1cGxvYWQiLCIkIiwiZG9jdW1lbnQiLCJ0cmlnZ2VyIiwiZmlsZXVwbG9hZCIsInJlcGxhY2VGaWxlSW5wdXQiLCJkYXRhVHlwZSIsInBhcmFtTmFtZSIsImRvbmUiLCJnZXRNZWRpYUxpYnJhcnkiLCJmYWlsIiwiYWRkIiwiZ2V0Um91dGVyIiwic3VibWl0IiwicHJvZ3Jlc3NhbGwiLCJ0b3RhbCIsInBhc3RlWm9uZSIsImJpbmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJmaW5kIiwidGFyZ2V0IiwiJG1lZGlhTGlicmFyeSIsIiRyb3V0ZXIiLCJnZXRUeXBl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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiwwQkFBMEIsNkNBQTZDO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHFFQUFxRTtBQUM5RTtBQUNBO0FBQ0EsY0FBYyw2QkFBNkI7QUFDM0MsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBIiwiZmlsZSI6InZlbmRvcnN+bWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgTWVkaWFJdGVtIGZyb20gXCJAZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvTWVkaWFJdGVtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhRGF0YVxue1xuICAgIGl0ZW1zOiBNZWRpYUl0ZW1bXTtcbiAgICBwcm9ncmVzczogbnVtYmVyO1xuICAgIGRyb3Bab25lOiBib29sZWFuID0gZmFsc2U7XG4gICAgZHJvcFpvbmVBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcGFnZTogbnVtYmVyID0gMTtcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIGVkaXRWaWV3OiBudW1iZXIgPSBudWxsO1xuICAgIHVwZGF0ZVJvdXRlOiBzdHJpbmc7XG59IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUl0ZW1cbntcbiAgICBpZDogbnVtYmVyO1xuICAgIGRhdGE6IG9iamVjdFxufSIsImltcG9ydCBSb3V0ZXIgZnJvbSBcIkBlbmhhdm8vY29yZS9Sb3V0ZXJcIjtcbmltcG9ydCBNZWRpYURhdGEgZnJvbSBcIkBlbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9NZWRpYURhdGFcIjtcbmltcG9ydCBNZWRpYUl0ZW0gZnJvbSBcIkBlbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9NZWRpYUl0ZW1cIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiQGVuaGF2by9jb3JlL1RyYW5zbGF0b3JcIjtcbmltcG9ydCBSZW1vdmVkRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvUmVtb3ZlZEV2ZW50XCI7XG5pbXBvcnQgVXBkYXRlZEV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L1VwZGF0ZWRFdmVudFwiO1xuaW1wb3J0IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFMaWJyYXJ5XG57XG4gICAgcHVibGljIGRhdGE6IE1lZGlhRGF0YTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRvcjogVHJhbnNsYXRvcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IE1lZGlhRGF0YSwgcm91dGVyOiBSb3V0ZXIsIGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyLCB2aWV3OiBWaWV3LCB0cmFuc2xhdG9yOiBUcmFuc2xhdG9yLCBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2UpXG4gICAge1xuICAgICAgICBfLmV4dGVuZChkYXRhLCBuZXcgTWVkaWFEYXRhKCkpO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHRoaXMudHJhbnNsYXRvciA9IHRyYW5zbGF0b3I7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkgPSBjb21wb25lbnRSZWdpc3RyeTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5vbigncmVtb3ZlZCcsIChldmVudDogUmVtb3ZlZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZihldmVudC5pZCA9PSB0aGlzLmRhdGEuZWRpdFZpZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZWRpdFZpZXcgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5vbigndXBkYXRlZCcsIChldmVudDogVXBkYXRlZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZihldmVudC5pZCA9PSB0aGlzLmRhdGEuZWRpdFZpZXcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckRhdGEodGhpcy5kYXRhKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlclN0b3JlKCdtZWRpYUxpYnJhcnknLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9ncmVzcyh2YWx1ZTogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5kYXRhLnByb2dyZXNzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpXG4gICAge1xuICAgICAgICB0aGlzLmxvYWRpbmcoKTtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMucm91dGVyLmdlbmVyYXRlKCdlbmhhdm9fbWVkaWFfbGlicmFyeV9saXN0Jywge1xuICAgICAgICAgICAgcGFnZTogdGhpcy5kYXRhLnBhZ2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5nZXQodXJsLCB7cGFyYW1zOiBbXX0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLml0ZW1zID0gdGhpcy5jcmVhdGVSb3dEYXRhKHJlc3BvbnNlLmRhdGEucmVzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuY291bnQgPSBwYXJzZUludChyZXNwb25zZS5kYXRhLnBhZ2VzLmNvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEucGFnZSA9IHBhcnNlSW50KHJlc3BvbnNlLmRhdGEucGFnZXMucGFnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldy5hbGVydCgnZXJyb3InKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgbG9hZGluZygpIHtcbiAgICAgICAgdGhpcy52aWV3LmxvYWRpbmcoKTtcbiAgICAgICAgdGhpcy5kYXRhLmxvYWRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy52aWV3LmxvYWRlZCgpO1xuICAgICAgICB0aGlzLmRhdGEubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUm93RGF0YShvYmplY3RzOiBvYmplY3RbXSk6IE1lZGlhSXRlbVtdXG4gICAge1xuICAgICAgICBsZXQgZGF0YSA9IFtdO1xuICAgICAgICBmb3IobGV0IGl0ZW0gb2Ygb2JqZWN0cykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKF8uZXh0ZW5kKG5ldyBNZWRpYUl0ZW0oKSwgaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHNob3dEcm9wWm9uZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuZGF0YS5kcm9wWm9uZSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmRyb3Bab25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dEcm9wWm9uZUFjdGl2ZSgpIHtcbiAgICAgICAgaWYoIXRoaXMuZGF0YS5kcm9wWm9uZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmRyb3Bab25lQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVEcm9wWm9uZSgpIHtcbiAgICAgICAgaWYodGhpcy5kYXRhLmRyb3Bab25lKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuZHJvcFpvbmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVEcm9wWm9uZUFjdGl2ZSgpIHtcbiAgICAgICAgaWYodGhpcy5kYXRhLmRyb3Bab25lQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuZHJvcFpvbmVBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKGl0ZW06IE1lZGlhSXRlbSlcbiAgICB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnJvdXRlci5nZW5lcmF0ZSh0aGlzLmRhdGEudXBkYXRlUm91dGUsIHtcbiAgICAgICAgICAgIGlkOiBpdGVtLmlkXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpZXcub3Blbih1cmwsICdlZGl0LXZpZXcnKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQWN0aW9uTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvYWN0aW9uL0FjdGlvbk1hbmFnZXJcIjtcbmltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBNZWRpYUxpYnJhcnkgZnJvbSBcIkBlbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9NZWRpYUxpYnJhcnlcIjtcbmltcG9ydCBGbGFzaE1lc3NlbmdlciBmcm9tIFwiQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9GbGFzaE1lc3NlbmdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYUxpYnJhcnlBcHBcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBtZWRpYUxpYnJhcnk6IE1lZGlhTGlicmFyeTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFjdGlvbk1hbmFnZXI6IEFjdGlvbk1hbmFnZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBmbGFzaE1lc3NlbmdlcjogRmxhc2hNZXNzZW5nZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCBhY3Rpb25NYW5hZ2VyOiBBY3Rpb25NYW5hZ2VyLCBtZWRpYUxpYnJhcnk6IE1lZGlhTGlicmFyeSwgZmxhc2hNZXNzZW5nZXI6IEZsYXNoTWVzc2VuZ2VyKVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5hY3Rpb25NYW5hZ2VyID0gYWN0aW9uTWFuYWdlcjtcbiAgICAgICAgdGhpcy5tZWRpYUxpYnJhcnkgPSBtZWRpYUxpYnJhcnk7XG4gICAgICAgIHRoaXMuZmxhc2hNZXNzZW5nZXIgPSBmbGFzaE1lc3NlbmdlcjtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLnZpZXcuaW5pdCgpO1xuICAgICAgICB0aGlzLmFjdGlvbk1hbmFnZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLm1lZGlhTGlicmFyeS5pbml0KCk7XG4gICAgICAgIHRoaXMuZmxhc2hNZXNzZW5nZXIuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMudmlldy5hZGREZWZhdWx0Q2xvc2VMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnZpZXcucmVhZHkoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTU5NjA3MyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZTU5NjA3MyZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9yZXBvcy9wcml2YXQvamFwYW5lc2UtdGV4dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdlNTk2MDczJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdlNTk2MDczJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdlNTk2MDczJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U1OTYwNzMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2U1OTYwNzMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvY29tcG9uZW50cy9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTItb25lT2YtMS0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZTU5NjA3MyZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwbGljYXRpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlNTk2MDczJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NZWRpYUxpYnJhcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmMjFmNTEwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01lZGlhTGlicmFyeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01lZGlhTGlicmFyeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcmVwb3MvcHJpdmF0L2phcGFuZXNlLXRleHRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyZjIxZjUxMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyZjIxZjUxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyZjIxZjUxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWVkaWFMaWJyYXJ5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjIxZjUxMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZjIxZjUxMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9jb21wb25lbnRzL01lZGlhTGlicmFyeUNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lZGlhTGlicmFyeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVkaWFMaWJyYXJ5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVkaWFMaWJyYXJ5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjIxZjUxMCZcIiIsIlxuaW1wb3J0IHsgVnVlLCBDb21wb25lbnQgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0ICdAZW5oYXZvL2FwcC9hc3NldHMvZm9udHMvZW5oYXZvLWljb25zLmZvbnQnXG5pbXBvcnQgJ0Blbmhhdm8vYXBwL2Fzc2V0cy9zdHlsZXMvdmlldy5zY3NzJztcbmltcG9ydCAnQGVuaGF2by9tZWRpYS9hc3NldHMvc3R5bGVzL19saWJyYXJ5LnNjc3MnO1xuXG5AQ29tcG9uZW50KClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGxpY2F0aW9uQ29tcG9uZW50IGV4dGVuZHMgVnVlXG57XG5cbn1cbiIsIlxuaW1wb3J0IHsgVnVlLCBDb21wb25lbnQsIFByb3AgfSBmcm9tIFwidnVlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IE1lZGlhSXRlbSBmcm9tIFwiQGVuaGF2by9tZWRpYS9tZWRpYS1saWJyYXJ5L01lZGlhSXRlbVwiO1xuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgXCJibHVlaW1wLWZpbGUtdXBsb2FkL2pzL2pxdWVyeS5pZnJhbWUtdHJhbnNwb3J0XCI7XG5pbXBvcnQgXCJibHVlaW1wLWZpbGUtdXBsb2FkL2pzL2pxdWVyeS5maWxldXBsb2FkXCI7XG5cbkBDb21wb25lbnQoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFMaWJyYXJ5Q29tcG9uZW50IGV4dGVuZHMgVnVlXG57XG4gICAgbW91bnRlZCgpXG4gICAge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuJHJlZnMudXBsb2FkO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCd1cGxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZWxlbWVudCkuZmlsZXVwbG9hZCh7XG4gICAgICAgICAgICByZXBsYWNlRmlsZUlucHV0OiBmYWxzZSxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBwYXJhbU5hbWU6ICdmaWxlcycsXG4gICAgICAgICAgICBkb25lOiAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1lZGlhTGlicmFyeSgpLnJlZnJlc2goKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IChldmVudCwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWVkaWFMaWJyYXJ5KCkuZmFpbCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkOiAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhLnVybCA9IHRoaXMuZ2V0Um91dGVyKCkuZ2VuZXJhdGUoJ2VuaGF2b19tZWRpYV9saWJyYXJ5X3VwbG9hZCcsIHt9KTtcbiAgICAgICAgICAgICAgICBkYXRhLnN1Ym1pdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWVkaWFMaWJyYXJ5KCkubG9hZGluZygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2dyZXNzYWxsOiAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBkYXRhLmxvYWRlZCAvIGRhdGEudG90YWwgKiAxMDA7XG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID49IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1lZGlhTGlicmFyeSgpLnNldFByb2dyZXNzKDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TWVkaWFMaWJyYXJ5KCkuc2V0UHJvZ3Jlc3MocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkcm9wWm9uZTogdGhpcy4kcmVmcy5tZWRpYUxpYnJhcnksXG4gICAgICAgICAgICBwYXN0ZVpvbmU6IG51bGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuYmluZCgnZHJhZ292ZXInLCAoZSkgPT4gIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmdldE1lZGlhTGlicmFyeSgpLnNob3dEcm9wWm9uZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHRoaXMuJHJlZnMubWVkaWFMaWJyYXJ5KS5iaW5kKCdkcmFnb3ZlcicsIChlKSA9PiAge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVkaWFMaWJyYXJ5KCkuc2hvd0Ryb3Bab25lKCk7XG4gICAgICAgICAgICB0aGlzLmdldE1lZGlhTGlicmFyeSgpLnNob3dEcm9wWm9uZUFjdGl2ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5iaW5kKCdkcmFnbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYoJChkb2N1bWVudCkuZmluZCgnLmFwcC12aWV3JykubGVuZ3RoID4gMCAmJiAkKGRvY3VtZW50KS5maW5kKCcuYXBwLXZpZXcnKS5maW5kKGUudGFyZ2V0KS5sZW5ndGggPiAwKSByZXR1cm47XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5nZXRNZWRpYUxpYnJhcnkoKS5oaWRlRHJvcFpvbmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgICQodGhpcy4kcmVmcy5tZWRpYUxpYnJhcnkpLmJpbmQoJ2RyYWdsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5nZXRNZWRpYUxpYnJhcnkoKS5oaWRlRHJvcFpvbmVBY3RpdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuYmluZCgnZHJvcCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5nZXRNZWRpYUxpYnJhcnkoKS5oaWRlRHJvcFpvbmUoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVkaWFMaWJyYXJ5KCkuaGlkZURyb3Bab25lQWN0aXZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9wZW4oaXRlbTogTWVkaWFJdGVtKSB7XG4gICAgICAgIHRoaXMuZ2V0TWVkaWFMaWJyYXJ5KCkub3BlbihpdGVtKVxuICAgIH1cblxuICAgIGdldE1lZGlhTGlicmFyeSgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy4kbWVkaWFMaWJyYXJ5O1xuICAgIH1cblxuICAgIGdldFJvdXRlcigpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy4kcm91dGVyO1xuICAgIH1cblxuICAgIGdldFR5cGUoZXh0ZW5zaW9uKVxuICAgIHtcbiAgICAgICAgaWYoZXh0ZW5zaW9uID09ICdwbmcnIHx8IGV4dGVuc2lvbiA9PSAnanBnJyB8fCAgZXh0ZW5zaW9uID09ICdqcGVnJyB8fCAgZXh0ZW5zaW9uID09ICdnaWYnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2ltYWdlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGV4dGVuc2lvbiA9PSAncGRmJykge1xuICAgICAgICAgICAgcmV0dXJuICdkb2N1bWVudCc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ2ZpbGUnO1xuICAgIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jLFxuICAgIF9zZXR1cCA9IF92bS5fc2VsZi5fc2V0dXBQcm94eVxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFwcC12aWV3XCIgfSxcbiAgICBbXG4gICAgICBfYyhcInZpZXctdmlld1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZsYXNoLW1lc3NhZ2VzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYWN0aW9uLWJhclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIm1lZGlhLWxpYnJhcnlcIiksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fYyxcbiAgICBfc2V0dXAgPSBfdm0uX3NlbGYuX3NldHVwUHJveHlcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgcmVmOiBcIm1lZGlhTGlicmFyeVwiLFxuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtbGlicmFyeVwiLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgXCJkcm9wLXpvbmVcIjogX3ZtLiRtZWRpYUxpYnJhcnkuZGF0YS5kcm9wWm9uZSxcbiAgICAgICAgXCJkcm9wLXpvbmUtYWN0aXZlXCI6IF92bS4kbWVkaWFMaWJyYXJ5LmRhdGEuZHJvcFpvbmVBY3RpdmUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWVkaWEtbGlicmFyeS1maWxlLWxpc3RcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLiRtZWRpYUxpYnJhcnkuZGF0YS5pdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlbihpdGVtKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGVuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5kYXRhLm5hbWUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmdldFR5cGUoaXRlbS5kYXRhLmV4dGVuc2lvbikgPT09IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJnZXRUeXBlKGl0ZW0uZGF0YS5leHRlbnNpb24pID09PSAnaW1hZ2UnXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmRhdGEubWVkaWEudXJsIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5nZXRUeXBlKGl0ZW0uZGF0YS5leHRlbnNpb24pID09PSBcImRvY3VtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJnZXRUeXBlKGl0ZW0uZGF0YS5leHRlbnNpb24pID09PSAnZG9jdW1lbnQnXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGljb24taW5zZXJ0X2RyaXZlX2ZpbGVcIiB9KV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZ2V0VHlwZShpdGVtLmRhdGEuZXh0ZW5zaW9uKSA9PT0gXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJnZXRUeXBlKGl0ZW0uZGF0YS5leHRlbnNpb24pID09PSAnZmlsZSdcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaWNvbi1pbnNlcnRfZHJpdmVfZmlsZVwiIH0pXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXMsXG4gICAgICBfYyA9IF92bS5fc2VsZi5fYyxcbiAgICAgIF9zZXR1cCA9IF92bS5fc2VsZi5fc2V0dXBQcm94eVxuICAgIHJldHVybiBfYyhcImlucHV0XCIsIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgeyBuYW1lOiBcInNob3dcIiwgcmF3TmFtZTogXCJ2LXNob3dcIiwgdmFsdWU6IGZhbHNlLCBleHByZXNzaW9uOiBcImZhbHNlXCIgfSxcbiAgICAgIF0sXG4gICAgICByZWY6IFwidXBsb2FkXCIsXG4gICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgbXVsdGlwbGU6IFwiXCIgfSxcbiAgICB9KVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9