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

  var MediaData =
  /** @class */
  function () {
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

  var MediaItem =
  /** @class */
  function () {
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

  var MediaLibrary =
  /** @class */
  function () {
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

  var MediaLibraryApp =
  /** @class */
  function () {
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
/* harmony import */ var _ApplicationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApplicationComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=style&index=0&lang=css&");
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

/***/ "./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../mini-css-extract-plugin/dist/loader.js!../../../../css-loader/dist/cjs.js??ref--2-oneOf-1-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../vue-loader/lib??vue-loader-options!./ApplicationComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_2_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=template&id=7e596073&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=template&id=7e596073& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_template_id_7e596073___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./ApplicationComponent.vue?vue&type=template&id=7e596073& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=template&id=7e596073&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_template_id_7e596073___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_ApplicationComponent_vue_vue_type_template_id_7e596073___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MediaLibraryComponent_vue_vue_type_template_id_2f21f510___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./MediaLibraryComponent.vue?vue&type=template&id=2f21f510& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=template&id=2f21f510&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MediaLibraryComponent_vue_vue_type_template_id_2f21f510___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MediaLibraryComponent_vue_vue_type_template_id_2f21f510___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=script&lang=ts&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! @enhavo/app/assets/fonts/enhavo-icons.font */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/assets/fonts/enhavo-icons.font.js"), __webpack_require__(/*! @enhavo/app/assets/styles/view.scss */ "./node_modules/@enhavo/media/node_modules/@enhavo/app/assets/styles/view.scss"), __webpack_require__(/*! @enhavo/media/assets/styles/_library.scss */ "./node_modules/@enhavo/media/assets/styles/_library.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ApplicationComponent =
  /** @class */
  function (_super) {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! blueimp-file-upload/js/jquery.iframe-transport */ "./node_modules/blueimp-file-upload/js/jquery.iframe-transport.js"), __webpack_require__(/*! blueimp-file-upload/js/jquery.fileupload */ "./node_modules/blueimp-file-upload/js/jquery.fileupload.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MediaLibraryComponent =
  /** @class */
  function (_super) {
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

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--2-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=template&id=7e596073&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/media-library/components/ApplicationComponent.vue?vue&type=template&id=7e596073& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
      _c("media-library"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=template&id=2f21f510&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/media/media-library/components/MediaLibraryComponent.vue?vue&type=template&id=2f21f510& ***!
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
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9hc3NldHMvc3R5bGVzL19saWJyYXJ5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9NZWRpYURhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9NZWRpYUl0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9NZWRpYUxpYnJhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9NZWRpYUxpYnJhcnlBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9jb21wb25lbnRzL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9tZWRpYS1saWJyYXJ5L2NvbXBvbmVudHMvQXBwbGljYXRpb25Db21wb25lbnQudnVlPzI0N2YiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9jb21wb25lbnRzL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT84YTM3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvY29tcG9uZW50cy9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/ZmYzNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9tZWRpYS1saWJyYXJ5L2NvbXBvbmVudHMvTWVkaWFMaWJyYXJ5Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9tZWRpYS1saWJyYXJ5L2NvbXBvbmVudHMvTWVkaWFMaWJyYXJ5Q29tcG9uZW50LnZ1ZT8wMGY3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvY29tcG9uZW50cy9NZWRpYUxpYnJhcnlDb21wb25lbnQudnVlPzc0NjgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9jb21wb25lbnRzL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT84YzFjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvY29tcG9uZW50cy9NZWRpYUxpYnJhcnlDb21wb25lbnQudnVlPzVmNDYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9jb21wb25lbnRzL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT9hNjFlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvY29tcG9uZW50cy9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/YWMxNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9tZWRpYS1saWJyYXJ5L2NvbXBvbmVudHMvTWVkaWFMaWJyYXJ5Q29tcG9uZW50LnZ1ZT9lNjFkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNFQTtBQUFBO0FBQUE7QUFBQTtBQUlJLHNCQUFvQixLQUFwQjtBQUNBLDRCQUEwQixLQUExQjtBQUNBLHFCQUFtQixLQUFuQjtBQUNBLGtCQUFlLENBQWY7QUFFQSxzQkFBbUIsSUFBbkI7QUFFSDs7QUFBRDtBQUFDLEdBWEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQSwwQkFJQzs7QUFBRDtBQUFDLEdBSkQ7Ozs7Ozs7Ozs7Ozs7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QUFDTCxHQUFHO0FBQ0g7QUFDQSIsImZpbGUiOiJ2ZW5kb3Jzfm1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IE1lZGlhSXRlbSBmcm9tIFwiQGVuaGF2by9tZWRpYS9tZWRpYS1saWJyYXJ5L01lZGlhSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYURhdGFcbntcbiAgICBpdGVtczogTWVkaWFJdGVtW107XG4gICAgcHJvZ3Jlc3M6IG51bWJlcjtcbiAgICBkcm9wWm9uZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGRyb3Bab25lQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHBhZ2U6IG51bWJlciA9IDE7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgICBlZGl0VmlldzogbnVtYmVyID0gbnVsbDtcbiAgICB1cGRhdGVSb3V0ZTogc3RyaW5nO1xufSIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFJdGVtXG57XG4gICAgaWQ6IG51bWJlcjtcbiAgICBkYXRhOiBvYmplY3Rcbn0iLCJpbXBvcnQgUm91dGVyIGZyb20gXCJAZW5oYXZvL2NvcmUvUm91dGVyXCI7XG5pbXBvcnQgTWVkaWFEYXRhIGZyb20gXCJAZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvTWVkaWFEYXRhXCI7XG5pbXBvcnQgTWVkaWFJdGVtIGZyb20gXCJAZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvTWVkaWFJdGVtXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IFRyYW5zbGF0b3IgZnJvbSBcIkBlbmhhdm8vY29yZS9UcmFuc2xhdG9yXCI7XG5pbXBvcnQgUmVtb3ZlZEV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L1JlbW92ZWRFdmVudFwiO1xuaW1wb3J0IFVwZGF0ZWRFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9VcGRhdGVkRXZlbnRcIjtcbmltcG9ydCBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL0NvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhTGlicmFyeVxue1xuICAgIHB1YmxpYyBkYXRhOiBNZWRpYURhdGE7XG4gICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlldztcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0b3I6IFRyYW5zbGF0b3I7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBNZWRpYURhdGEsIHJvdXRlcjogUm91dGVyLCBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlciwgdmlldzogVmlldywgdHJhbnNsYXRvcjogVHJhbnNsYXRvciwgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlKVxuICAgIHtcbiAgICAgICAgXy5leHRlbmQoZGF0YSwgbmV3IE1lZGlhRGF0YSgpKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLnRyYW5zbGF0b3IgPSB0cmFuc2xhdG9yO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0gY29tcG9uZW50UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIub24oJ3JlbW92ZWQnLCAoZXZlbnQ6IFJlbW92ZWRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQuaWQgPT0gdGhpcy5kYXRhLmVkaXRWaWV3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmVkaXRWaWV3ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIub24oJ3VwZGF0ZWQnLCAoZXZlbnQ6IFVwZGF0ZWRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQuaWQgPT0gdGhpcy5kYXRhLmVkaXRWaWV3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJEYXRhKHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJTdG9yZSgnbWVkaWFMaWJyYXJ5JywgdGhpcyk7XG4gICAgfVxuXG4gICAgc2V0UHJvZ3Jlc3ModmFsdWU6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMuZGF0YS5wcm9ncmVzcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJlZnJlc2goKVxuICAgIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nKCk7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLnJvdXRlci5nZW5lcmF0ZSgnZW5oYXZvX21lZGlhX2xpYnJhcnlfbGlzdCcsIHtcbiAgICAgICAgICAgIHBhZ2U6IHRoaXMuZGF0YS5wYWdlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAuZ2V0KHVybCwge3BhcmFtczogW119KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5pdGVtcyA9IHRoaXMuY3JlYXRlUm93RGF0YShyZXNwb25zZS5kYXRhLnJlc291cmNlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmNvdW50ID0gcGFyc2VJbnQocmVzcG9uc2UuZGF0YS5wYWdlcy5jb3VudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnBhZ2UgPSBwYXJzZUludChyZXNwb25zZS5kYXRhLnBhZ2VzLnBhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuYWxlcnQoJ2Vycm9yJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGxvYWRpbmcoKSB7XG4gICAgICAgIHRoaXMudmlldy5sb2FkaW5nKCk7XG4gICAgICAgIHRoaXMuZGF0YS5sb2FkaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsb2FkZWQoKSB7XG4gICAgICAgIHRoaXMudmlldy5sb2FkZWQoKTtcbiAgICAgICAgdGhpcy5kYXRhLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVJvd0RhdGEob2JqZWN0czogb2JqZWN0W10pOiBNZWRpYUl0ZW1bXVxuICAgIHtcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpdGVtIG9mIG9iamVjdHMpIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChfLmV4dGVuZChuZXcgTWVkaWFJdGVtKCksIGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBzaG93RHJvcFpvbmUoKSB7XG4gICAgICAgIGlmKCF0aGlzLmRhdGEuZHJvcFpvbmUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kcm9wWm9uZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93RHJvcFpvbmVBY3RpdmUoKSB7XG4gICAgICAgIGlmKCF0aGlzLmRhdGEuZHJvcFpvbmVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kcm9wWm9uZUFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlRHJvcFpvbmUoKSB7XG4gICAgICAgIGlmKHRoaXMuZGF0YS5kcm9wWm9uZSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmRyb3Bab25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlRHJvcFpvbmVBY3RpdmUoKSB7XG4gICAgICAgIGlmKHRoaXMuZGF0YS5kcm9wWm9uZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmRyb3Bab25lQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbihpdGVtOiBNZWRpYUl0ZW0pXG4gICAge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5yb3V0ZXIuZ2VuZXJhdGUodGhpcy5kYXRhLnVwZGF0ZVJvdXRlLCB7XG4gICAgICAgICAgICBpZDogaXRlbS5pZFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aWV3Lm9wZW4odXJsLCAnZWRpdC12aWV3Jyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFjdGlvbk1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9BY3Rpb25NYW5hZ2VyXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5pbXBvcnQgTWVkaWFMaWJyYXJ5IGZyb20gXCJAZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvTWVkaWFMaWJyYXJ5XCI7XG5pbXBvcnQgRmxhc2hNZXNzZW5nZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2ZsYXNoLW1lc3NhZ2UvRmxhc2hNZXNzZW5nZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFMaWJyYXJ5QXBwXG57XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVkaWFMaWJyYXJ5OiBNZWRpYUxpYnJhcnk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25NYW5hZ2VyOiBBY3Rpb25NYW5hZ2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZmxhc2hNZXNzZW5nZXI6IEZsYXNoTWVzc2VuZ2VyO1xuXG4gICAgY29uc3RydWN0b3IodmlldzogVmlldywgYWN0aW9uTWFuYWdlcjogQWN0aW9uTWFuYWdlciwgbWVkaWFMaWJyYXJ5OiBNZWRpYUxpYnJhcnksIGZsYXNoTWVzc2VuZ2VyOiBGbGFzaE1lc3NlbmdlcilcbiAgICB7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIHRoaXMuYWN0aW9uTWFuYWdlciA9IGFjdGlvbk1hbmFnZXI7XG4gICAgICAgIHRoaXMubWVkaWFMaWJyYXJ5ID0gbWVkaWFMaWJyYXJ5O1xuICAgICAgICB0aGlzLmZsYXNoTWVzc2VuZ2VyID0gZmxhc2hNZXNzZW5nZXI7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKTtcbiAgICAgICAgdGhpcy5hY3Rpb25NYW5hZ2VyLmluaXQoKTtcbiAgICAgICAgdGhpcy5tZWRpYUxpYnJhcnkuaW5pdCgpO1xuICAgICAgICB0aGlzLmZsYXNoTWVzc2VuZ2VyLmluaXQoKTtcblxuICAgICAgICB0aGlzLnZpZXcuYWRkRGVmYXVsdENsb3NlTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy52aWV3LnJlYWR5KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2U1OTYwNzMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwbGljYXRpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQXBwbGljYXRpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcmVwb3MvcHJpdmF0L2phcGFuZXNlLXRleHRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZTU5NjA3MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZTU5NjA3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZTU5NjA3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwbGljYXRpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlNTk2MDczJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdlNTk2MDczJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvQGVuaGF2by9tZWRpYS9tZWRpYS1saWJyYXJ5L2NvbXBvbmVudHMvQXBwbGljYXRpb25Db21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwbGljYXRpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0yLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwbGljYXRpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTU5NjA3MyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVkaWFMaWJyYXJ5Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjIxZjUxMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NZWRpYUxpYnJhcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NZWRpYUxpYnJhcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3JlcG9zL3ByaXZhdC9qYXBhbmVzZS10ZXh0ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmYyMWY1MTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmYyMWY1MTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmYyMWY1MTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01lZGlhTGlicmFyeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmYyMWY1MTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmYyMWY1MTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy9AZW5oYXZvL21lZGlhL21lZGlhLWxpYnJhcnkvY29tcG9uZW50cy9NZWRpYUxpYnJhcnlDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZWRpYUxpYnJhcnlDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lZGlhTGlicmFyeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lZGlhTGlicmFyeUNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmYyMWY1MTAmXCIiLCJcblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50IH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCAnQGVuaGF2by9hcHAvYXNzZXRzL2ZvbnRzL2VuaGF2by1pY29ucy5mb250J1xuaW1wb3J0ICdAZW5oYXZvL2FwcC9hc3NldHMvc3R5bGVzL3ZpZXcuc2Nzcyc7XG5pbXBvcnQgJ0Blbmhhdm8vbWVkaWEvYXNzZXRzL3N0eWxlcy9fbGlicmFyeS5zY3NzJztcblxuQENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBsaWNhdGlvbkNvbXBvbmVudCBleHRlbmRzIFZ1ZVxue1xuXG59XG4iLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCBNZWRpYUl0ZW0gZnJvbSBcIkBlbmhhdm8vbWVkaWEvbWVkaWEtbGlicmFyeS9NZWRpYUl0ZW1cIjtcbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IFwiYmx1ZWltcC1maWxlLXVwbG9hZC9qcy9qcXVlcnkuaWZyYW1lLXRyYW5zcG9ydFwiO1xuaW1wb3J0IFwiYmx1ZWltcC1maWxlLXVwbG9hZC9qcy9qcXVlcnkuZmlsZXVwbG9hZFwiO1xuXG5AQ29tcG9uZW50KClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhTGlicmFyeUNvbXBvbmVudCBleHRlbmRzIFZ1ZVxue1xuICAgIG1vdW50ZWQoKVxuICAgIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLiRyZWZzLnVwbG9hZDtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbigndXBsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGVsZW1lbnQpLmZpbGV1cGxvYWQoe1xuICAgICAgICAgICAgcmVwbGFjZUZpbGVJbnB1dDogZmFsc2UsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgcGFyYW1OYW1lOiAnZmlsZXMnLFxuICAgICAgICAgICAgZG9uZTogKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRNZWRpYUxpYnJhcnkoKS5yZWZyZXNoKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiAoZXZlbnQsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1lZGlhTGlicmFyeSgpLmZhaWwoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZDogKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YS51cmwgPSB0aGlzLmdldFJvdXRlcigpLmdlbmVyYXRlKCdlbmhhdm9fbWVkaWFfbGlicmFyeV91cGxvYWQnLCB7fSk7XG4gICAgICAgICAgICAgICAgZGF0YS5zdWJtaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1lZGlhTGlicmFyeSgpLmxvYWRpbmcoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9ncmVzc2FsbDogKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gZGF0YS5sb2FkZWQgLyBkYXRhLnRvdGFsICogMTAwO1xuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+PSAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNZWRpYUxpYnJhcnkoKS5zZXRQcm9ncmVzcygwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1lZGlhTGlicmFyeSgpLnNldFByb2dyZXNzKHByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHJvcFpvbmU6IHRoaXMuJHJlZnMubWVkaWFMaWJyYXJ5LFxuICAgICAgICAgICAgcGFzdGVab25lOiBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ2RyYWdvdmVyJywgKGUpID0+ICB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5nZXRNZWRpYUxpYnJhcnkoKS5zaG93RHJvcFpvbmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0aGlzLiRyZWZzLm1lZGlhTGlicmFyeSkuYmluZCgnZHJhZ292ZXInLCAoZSkgPT4gIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmdldE1lZGlhTGlicmFyeSgpLnNob3dEcm9wWm9uZSgpO1xuICAgICAgICAgICAgdGhpcy5nZXRNZWRpYUxpYnJhcnkoKS5zaG93RHJvcFpvbmVBY3RpdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkuYmluZCgnZHJhZ2xlYXZlJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKCQoZG9jdW1lbnQpLmZpbmQoJy5hcHAtdmlldycpLmxlbmd0aCA+IDAgJiYgJChkb2N1bWVudCkuZmluZCgnLmFwcC12aWV3JykuZmluZChlLnRhcmdldCkubGVuZ3RoID4gMCkgcmV0dXJuO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVkaWFMaWJyYXJ5KCkuaGlkZURyb3Bab25lKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICAkKHRoaXMuJHJlZnMubWVkaWFMaWJyYXJ5KS5iaW5kKCdkcmFnbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVkaWFMaWJyYXJ5KCkuaGlkZURyb3Bab25lQWN0aXZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLmJpbmQoJ2Ryb3AnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0TWVkaWFMaWJyYXJ5KCkuaGlkZURyb3Bab25lKCk7XG4gICAgICAgICAgICB0aGlzLmdldE1lZGlhTGlicmFyeSgpLmhpZGVEcm9wWm9uZUFjdGl2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuKGl0ZW06IE1lZGlhSXRlbSkge1xuICAgICAgICB0aGlzLmdldE1lZGlhTGlicmFyeSgpLm9wZW4oaXRlbSlcbiAgICB9XG5cbiAgICBnZXRNZWRpYUxpYnJhcnkoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJG1lZGlhTGlicmFyeTtcbiAgICB9XG5cbiAgICBnZXRSb3V0ZXIoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHJvdXRlcjtcbiAgICB9XG5cbiAgICBnZXRUeXBlKGV4dGVuc2lvbilcbiAgICB7XG4gICAgICAgIGlmKGV4dGVuc2lvbiA9PSAncG5nJyB8fCBleHRlbnNpb24gPT0gJ2pwZycgfHwgIGV4dGVuc2lvbiA9PSAnanBlZycgfHwgIGV4dGVuc2lvbiA9PSAnZ2lmJykge1xuICAgICAgICAgICAgcmV0dXJuICdpbWFnZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZihleHRlbnNpb24gPT0gJ3BkZicpIHtcbiAgICAgICAgICAgIHJldHVybiAnZG9jdW1lbnQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdmaWxlJztcbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiYXBwLXZpZXdcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwidmlldy12aWV3XCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZmxhc2gtbWVzc2FnZXNcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhY3Rpb24tYmFyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibWVkaWEtbGlicmFyeVwiKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgcmVmOiBcIm1lZGlhTGlicmFyeVwiLFxuICAgICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtbGlicmFyeVwiLFxuICAgICAgY2xhc3M6IHtcbiAgICAgICAgXCJkcm9wLXpvbmVcIjogX3ZtLiRtZWRpYUxpYnJhcnkuZGF0YS5kcm9wWm9uZSxcbiAgICAgICAgXCJkcm9wLXpvbmUtYWN0aXZlXCI6IF92bS4kbWVkaWFMaWJyYXJ5LmRhdGEuZHJvcFpvbmVBY3RpdmUsXG4gICAgICB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWVkaWEtbGlicmFyeS1maWxlLWxpc3RcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLiRtZWRpYUxpYnJhcnkuZGF0YS5pdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3BlbihpdGVtKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbGVuYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5kYXRhLm5hbWUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmdldFR5cGUoaXRlbS5kYXRhLmV4dGVuc2lvbikgPT09IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJnZXRUeXBlKGl0ZW0uZGF0YS5leHRlbnNpb24pID09PSAnaW1hZ2UnXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLmRhdGEubWVkaWEudXJsIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5nZXRUeXBlKGl0ZW0uZGF0YS5leHRlbnNpb24pID09PSBcImRvY3VtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJnZXRUeXBlKGl0ZW0uZGF0YS5leHRlbnNpb24pID09PSAnZG9jdW1lbnQnXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbi1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGljb24taW5zZXJ0X2RyaXZlX2ZpbGVcIiB9KV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZ2V0VHlwZShpdGVtLmRhdGEuZXh0ZW5zaW9uKSA9PT0gXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJnZXRUeXBlKGl0ZW0uZGF0YS5leHRlbnNpb24pID09PSAnZmlsZSdcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaWNvbi1pbnNlcnRfZHJpdmVfZmlsZVwiIH0pXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJpbnB1dFwiLCB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHsgbmFtZTogXCJzaG93XCIsIHJhd05hbWU6IFwidi1zaG93XCIsIHZhbHVlOiBmYWxzZSwgZXhwcmVzc2lvbjogXCJmYWxzZVwiIH0sXG4gICAgICBdLFxuICAgICAgcmVmOiBcInVwbG9hZFwiLFxuICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIG11bHRpcGxlOiBcIlwiIH0sXG4gICAgfSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==