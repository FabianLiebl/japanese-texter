(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~main"],{

/***/ "./node_modules/@enhavo/app/assets/styles/app.scss":
/*!*********************************************************!*\
  !*** ./node_modules/@enhavo/app/assets/styles/app.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@enhavo/app/main/MainApp.ts":
/*!**************************************************!*\
  !*** ./node_modules/@enhavo/app/main/MainApp.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MainApp =
  /** @class */
  function () {
    function MainApp(brandingData, viewStack, menuManager, stateManager, dataStorageManager, widgetManager, componentRegistry) {
      this.data = {
        branding: brandingData
      };
      this.viewStack = viewStack;
      this.dataStorageManager = dataStorageManager;
      this.menuManager = menuManager;
      this.stateManager = stateManager;
      this.widgetManager = widgetManager;
      this.componentRegistry = componentRegistry;
    }

    MainApp.prototype.init = function () {
      this.componentRegistry.registerStore('mainApp', this);
      this.componentRegistry.registerData(this.data);
      this.widgetManager.init();
      this.menuManager.init();
      this.viewStack.init();

      if (!this.viewStack.hasViews()) {
        this.menuManager.start();
      }
    };

    MainApp.prototype.getData = function () {
      return this.data;
    };

    MainApp.prototype.getViewStack = function () {
      return this.viewStack;
    };

    return MainApp;
  }();

  exports["default"] = MainApp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/main/components/MainComponent.vue":
/*!********************************************************************!*\
  !*** ./node_modules/@enhavo/app/main/components/MainComponent.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainComponent_vue_vue_type_template_id_9d884d30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainComponent.vue?vue&type=template&id=9d884d30& */ "./node_modules/@enhavo/app/main/components/MainComponent.vue?vue&type=template&id=9d884d30&");
/* harmony import */ var _MainComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/main/components/MainComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MainComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MainComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainComponent_vue_vue_type_template_id_9d884d30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainComponent_vue_vue_type_template_id_9d884d30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/main/components/MainComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/main/components/MainComponent.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/main/components/MainComponent.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MainComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./MainComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/main/components/MainComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MainComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MainComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MainComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MainComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MainComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/main/components/MainComponent.vue?vue&type=template&id=9d884d30&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/main/components/MainComponent.vue?vue&type=template&id=9d884d30& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MainComponent_vue_vue_type_template_id_9d884d30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./MainComponent.vue?vue&type=template&id=9d884d30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/main/components/MainComponent.vue?vue&type=template&id=9d884d30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MainComponent_vue_vue_type_template_id_9d884d30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MainComponent_vue_vue_type_template_id_9d884d30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/menu/MenuData.ts":
/*!***************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/MenuData.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MenuData =
  /** @class */
  function () {
    function MenuData() {}

    return MenuData;
  }();

  exports["default"] = MenuData;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/MenuManager.ts":
/*!******************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/MenuManager.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/menu/MenuData */ "./node_modules/@enhavo/app/menu/MenuData.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, MenuData_1, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MenuManager =
  /** @class */
  function () {
    function MenuManager(data, registry, dataStorage, componentRegistry) {
      _.extend(data, new MenuData_1["default"]());

      this.data = data;
      this.registry = registry;
      this.dataStorage = dataStorage;
      this.componentRegistry = componentRegistry;
    }

    MenuManager.prototype.init = function () {
      for (var i in this.data.items) {
        var item = this.registry.getFactory(this.data.items[i].component).createFromData(this.data.items[i]);

        _.extend(this.data.items[i], item);
      }

      for (var _i = 0, _a = this.registry.getComponents(); _i < _a.length; _i++) {
        var component = _a[_i];
        this.componentRegistry.registerComponent(component.name, component.component);
      }

      this.componentRegistry.registerStore('menuManager', this);
      this.componentRegistry.registerData(this.data);
      var menuActiveKey = this.dataStorage.get('menu-active-key');

      if (menuActiveKey !== null) {
        for (var _b = 0, _c = this.getItems(); _b < _c.length; _b++) {
          var item = _c[_b];

          if (item.key == menuActiveKey.value) {
            item.select();
          }
        }
      }
    };

    MenuManager.prototype.getData = function () {
      return this.data;
    };

    MenuManager.prototype.isOpen = function () {
      return this.data.open;
    };

    MenuManager.prototype.toogleMenu = function () {
      this.data.open = !this.data.open;
    };

    MenuManager.prototype.open = function () {
      this.data.open = true;
    };

    MenuManager.prototype.close = function () {
      this.data.open = false;
    };

    MenuManager.prototype.isCustomChange = function () {
      return this.data.customChange;
    };

    MenuManager.prototype.clearSelections = function () {
      for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
        var item = _a[_i];
        item.unselect();
      }
    };

    MenuManager.prototype.start = function () {
      if (this.data.items.length > 0) {
        this.clearSelections();

        for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
          var item = _a[_i];

          if (item.clickable) {
            item.select();
            item.open();
            return;
          }
        }
      }
    };

    MenuManager.prototype.setActive = function (key) {
      this.dataStorage.set('menu-active-key', key);
    };

    MenuManager.prototype.getItems = function () {
      var items = [];

      for (var _i = 0, _a = this.data.items; _i < _a.length; _i++) {
        var item = _a[_i];
        items.push(item);

        for (var _b = 0, _c = item.getDescendants(); _b < _c.length; _b++) {
          var descendant = _c[_b];
          items.push(descendant);
        }
      }

      return items;
    };

    return MenuManager;
  }();

  exports["default"] = MenuManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue":
/*!****************************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuDropdownComponent_vue_vue_type_template_id_07ec4bea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuDropdownComponent.vue?vue&type=template&id=07ec4bea& */ "./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue?vue&type=template&id=07ec4bea&");
/* harmony import */ var _MenuDropdownComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuDropdownComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MenuDropdownComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MenuDropdownComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MenuDropdownComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuDropdownComponent_vue_vue_type_template_id_07ec4bea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuDropdownComponent_vue_vue_type_template_id_07ec4bea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuDropdownComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./MenuDropdownComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuDropdownComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuDropdownComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuDropdownComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuDropdownComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuDropdownComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue?vue&type=template&id=07ec4bea&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue?vue&type=template&id=07ec4bea& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MenuDropdownComponent_vue_vue_type_template_id_07ec4bea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./MenuDropdownComponent.vue?vue&type=template&id=07ec4bea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue?vue&type=template&id=07ec4bea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MenuDropdownComponent_vue_vue_type_template_id_07ec4bea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MenuDropdownComponent_vue_vue_type_template_id_07ec4bea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue":
/*!************************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuItemComponent_vue_vue_type_template_id_0a3871c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuItemComponent.vue?vue&type=template&id=0a3871c9& */ "./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue?vue&type=template&id=0a3871c9&");
/* harmony import */ var _MenuItemComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItemComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MenuItemComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MenuItemComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MenuItemComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuItemComponent_vue_vue_type_template_id_0a3871c9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuItemComponent_vue_vue_type_template_id_0a3871c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/menu/components/MenuItemComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuItemComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./MenuItemComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuItemComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuItemComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuItemComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuItemComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuItemComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue?vue&type=template&id=0a3871c9&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue?vue&type=template&id=0a3871c9& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MenuItemComponent_vue_vue_type_template_id_0a3871c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./MenuItemComponent.vue?vue&type=template&id=0a3871c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue?vue&type=template&id=0a3871c9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MenuItemComponent_vue_vue_type_template_id_0a3871c9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MenuItemComponent_vue_vue_type_template_id_0a3871c9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/menu/components/MenuListComponent.vue":
/*!************************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/components/MenuListComponent.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuListComponent_vue_vue_type_template_id_6201d61e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuListComponent.vue?vue&type=template&id=6201d61e& */ "./node_modules/@enhavo/app/menu/components/MenuListComponent.vue?vue&type=template&id=6201d61e&");
/* harmony import */ var _MenuListComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuListComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/menu/components/MenuListComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MenuListComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MenuListComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MenuListComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuListComponent_vue_vue_type_template_id_6201d61e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuListComponent_vue_vue_type_template_id_6201d61e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/menu/components/MenuListComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/components/MenuListComponent.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/components/MenuListComponent.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuListComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./MenuListComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/menu/components/MenuListComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuListComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuListComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuListComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuListComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_MenuListComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/components/MenuListComponent.vue?vue&type=template&id=6201d61e&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/components/MenuListComponent.vue?vue&type=template&id=6201d61e& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MenuListComponent_vue_vue_type_template_id_6201d61e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./MenuListComponent.vue?vue&type=template&id=6201d61e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/menu/components/MenuListComponent.vue?vue&type=template&id=6201d61e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MenuListComponent_vue_vue_type_template_id_6201d61e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_MenuListComponent_vue_vue_type_template_id_6201d61e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/menu/factory/AbstractFactory.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/factory/AbstractFactory.ts ***!
  \******************************************************************/
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
    function AbstractFactory(eventDispatcher, menuManager) {
      this.eventDispatcher = eventDispatcher;
      this.menuManager = menuManager;
    }

    AbstractFactory.prototype.createFromData = function (data) {
      var menu = this.createNew();
      menu = _.extend(data, menu);
      return menu;
    };

    return AbstractFactory;
  }();

  exports["default"] = AbstractFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/factory/MenuDropdownFactory.ts":
/*!**********************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/factory/MenuDropdownFactory.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/menu/factory/AbstractFactory */ "./node_modules/@enhavo/app/menu/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/menu/model/MenuDropdown */ "./node_modules/@enhavo/app/menu/model/MenuDropdown.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, MenuDropdown_1, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MenuDropdownFactory =
  /** @class */
  function (_super) {
    __extends(MenuDropdownFactory, _super);

    function MenuDropdownFactory() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    MenuDropdownFactory.prototype.createFromData = function (data) {
      return _.extend(data, this.createNew());
    };

    MenuDropdownFactory.prototype.createNew = function () {
      return new MenuDropdown_1["default"](this.eventDispatcher, this.menuManager);
    };

    return MenuDropdownFactory;
  }(AbstractFactory_1["default"]);

  exports["default"] = MenuDropdownFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/factory/MenuItemFactory.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/factory/MenuItemFactory.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/menu/factory/AbstractFactory */ "./node_modules/@enhavo/app/menu/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/menu/model/MenuItem */ "./node_modules/@enhavo/app/menu/model/MenuItem.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, MenuItem_1, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MenuDropdownFactory =
  /** @class */
  function (_super) {
    __extends(MenuDropdownFactory, _super);

    function MenuDropdownFactory() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    MenuDropdownFactory.prototype.createFromData = function (data) {
      return _.extend(data, this.createNew());
    };

    MenuDropdownFactory.prototype.createNew = function () {
      return new MenuItem_1["default"](this.eventDispatcher, this.menuManager);
    };

    return MenuDropdownFactory;
  }(AbstractFactory_1["default"]);

  exports["default"] = MenuDropdownFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/factory/MenuListFactory.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/factory/MenuListFactory.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/menu/factory/AbstractFactory */ "./node_modules/@enhavo/app/menu/factory/AbstractFactory.ts"), __webpack_require__(/*! @enhavo/app/menu/model/MenuList */ "./node_modules/@enhavo/app/menu/model/MenuList.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractFactory_1, MenuList_1, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MenuListFactory =
  /** @class */
  function (_super) {
    __extends(MenuListFactory, _super);

    function MenuListFactory(eventDispatcher, menuManager, menuRegistry) {
      var _this = _super.call(this, eventDispatcher, menuManager) || this;

      _this.menuRegistry = menuRegistry;
      return _this;
    }

    MenuListFactory.prototype.createFromData = function (data) {
      var menu = this.createNew();
      menu = _.extend(data, menu);

      for (var i in menu.items) {
        var item = this.menuRegistry.getFactory(menu.items[i].component).createFromData(menu.items[i]);
        item.setParent(menu);
      }

      return menu;
    };

    MenuListFactory.prototype.createNew = function () {
      return new MenuList_1["default"](this.eventDispatcher, this.menuManager);
    };

    return MenuListFactory;
  }(AbstractFactory_1["default"]);

  exports["default"] = MenuListFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/model/AbstractMenu.ts":
/*!*************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/model/AbstractMenu.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var AbstractMenu =
  /** @class */
  function () {
    function AbstractMenu(eventDispatcher, menuManager) {
      this.selected = false;
      this.clickable = false;
      this.eventDispatcher = eventDispatcher;
      this.menuManager = menuManager;
    }

    AbstractMenu.prototype.children = function () {
      return [];
    };

    AbstractMenu.prototype.getDescendants = function () {
      var descendants = [];

      for (var _i = 0, _a = this.children(); _i < _a.length; _i++) {
        var child = _a[_i];
        descendants.push(child);

        for (var _b = 0, _c = child.getDescendants(); _b < _c.length; _b++) {
          var descendant = _c[_b];
          descendants.push(descendant);
        }
      }

      return descendants;
    };

    AbstractMenu.prototype.unselect = function () {
      this.selected = false;

      for (var _i = 0, _a = this.children(); _i < _a.length; _i++) {
        var child = _a[_i];
        child.unselect();
      }
    };

    AbstractMenu.prototype.select = function () {
      if (this.parent()) {
        this.parent().select();
      }

      this.selected = true;
    };

    AbstractMenu.prototype.open = function () {};

    AbstractMenu.prototype.parent = function () {
      return this.parentItem;
    };

    AbstractMenu.prototype.setParent = function (parent) {
      return this.parentItem = parent;
    };

    AbstractMenu.prototype.getManager = function () {
      return this.menuManager;
    };

    return AbstractMenu;
  }();

  exports["default"] = AbstractMenu;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/model/MenuDropdown.ts":
/*!*************************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/model/MenuDropdown.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/menu/model/AbstractMenu */ "./node_modules/@enhavo/app/menu/model/AbstractMenu.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractMenu_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MenuDropdown =
  /** @class */
  function (_super) {
    __extends(MenuDropdown, _super);

    function MenuDropdown() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    MenuDropdown.prototype.change = function (value) {
      this.value = value.label;
      $(document).trigger(this.event, [value.code]);
    };

    return MenuDropdown;
  }(AbstractMenu_1["default"]);

  exports["default"] = MenuDropdown;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")))

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/model/MenuItem.ts":
/*!*********************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/model/MenuItem.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/view-stack/event/CreateEvent */ "./node_modules/@enhavo/app/view-stack/event/CreateEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/ClearEvent */ "./node_modules/@enhavo/app/view-stack/event/ClearEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/SaveStateEvent */ "./node_modules/@enhavo/app/view-stack/event/SaveStateEvent.ts"), __webpack_require__(/*! @enhavo/app/menu/model/AbstractMenu */ "./node_modules/@enhavo/app/menu/model/AbstractMenu.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, CreateEvent_1, ClearEvent_1, SaveStateEvent_1, AbstractMenu_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MenuItem =
  /** @class */
  function (_super) {
    __extends(MenuItem, _super);

    function MenuItem() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.clickable = true;
      return _this;
    }

    MenuItem.prototype.open = function () {
      var _this = this;

      this.eventDispatcher.dispatch(new ClearEvent_1["default"]()).then(function () {
        _this.eventDispatcher.dispatch(new CreateEvent_1["default"]({
          component: 'iframe-view',
          url: _this.url
        })).then(function () {
          _this.getManager().clearSelections();

          _this.getManager().setActive(_this.key);

          _this.select();

          _this.eventDispatcher.dispatch(new SaveStateEvent_1["default"]());

          if (!_this.getManager().isOpen()) {
            if (_this.parent()) {
              _this.parent().close();
            }
          }
        });
      })["catch"](function () {});
    };

    return MenuItem;
  }(AbstractMenu_1["default"]);

  exports["default"] = MenuItem;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/menu/model/MenuList.ts":
/*!*********************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/model/MenuList.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/menu/model/AbstractMenu */ "./node_modules/@enhavo/app/menu/model/AbstractMenu.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractMenu_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MenuList =
  /** @class */
  function (_super) {
    __extends(MenuList, _super);

    function MenuList() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.isOpen = false;
      return _this;
    }

    MenuList.prototype.children = function () {
      return this.items;
    };

    MenuList.prototype.select = function () {
      _super.prototype.select.call(this);

      this.isOpen = true;
    };

    MenuList.prototype.open = function () {
      this.isOpen = true;
    };

    MenuList.prototype.close = function () {
      this.isOpen = false;
    };

    MenuList.prototype.isMainMenuOpen = function () {
      return this.getManager().isOpen();
    };

    MenuList.prototype.closeOtherMenus = function () {
      var items = this.getManager().getItems();

      for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];

        if (item !== this && !this.isChildOf(item)) {
          if (item.close) {
            item.close();
          }
        }
      }
    };

    MenuList.prototype.isChildOf = function (item) {
      var children = item.children();

      for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
        var child = children_1[_i];

        if (child == this) {
          return true;
        }
      }

      return false;
    };

    return MenuList;
  }(AbstractMenu_1["default"]);

  exports["default"] = MenuList;
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

/***/ "./node_modules/@enhavo/app/state/StateManager.ts":
/*!********************************************************!*\
  !*** ./node_modules/@enhavo/app/state/StateManager.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js"), __webpack_require__(/*! pako */ "./node_modules/pako/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, URI, pako) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var StateManager =
  /** @class */
  function () {
    function StateManager(viewStack, eventDispatcher, dataStorage, componentRegistry) {
      var _this = this;

      this.baseUrl = window.location.href;
      this.viewStack = viewStack;
      this.eventDispatcher = eventDispatcher;
      this.dataStorage = dataStorage;
      this.componentRegistry = componentRegistry;
      this.eventDispatcher.on('save-state', function () {
        window.setTimeout(function () {
          _this.saveState();
        }, 50);
      });

      window.onpopstate = function (event) {
        _this.applyState(event.state);
      };

      this.componentRegistry.registerStore('stateManager', this);
    }

    StateManager.prototype.applyState = function (state) {
      location.reload();
    };

    StateManager.prototype.saveState = function () {
      var stateObject = this.createStateObject();
      history.pushState(stateObject, "enhavo", this.generateUrl(stateObject));
    };

    StateManager.prototype.generateUrl = function (stateObject) {
      var dataArray = pako.deflate(JSON.stringify(stateObject));
      var b64encoded = btoa(String.fromCharCode.apply(null, dataArray));
      var uri = new URI(this.baseUrl);
      return uri.setQuery('state', b64encoded) + '';
    };

    StateManager.prototype.createStateObject = function () {
      var viewData = [];

      for (var _i = 0, _a = this.viewStack.getViews(); _i < _a.length; _i++) {
        var view = _a[_i];
        viewData.push({
          url: view.url,
          id: view.id,
          storage: view.storage
        });
      }

      return {
        views: viewData,
        storage: this.dataStorage.getStorage()
      };
    };

    StateManager.prototype.generateViewUrl = function (view) {
      var viewData = [];
      viewData.push({
        url: view.url,
        id: view.id,
        storage: view.storage
      });
      var stateObject = {
        views: viewData,
        storage: this.dataStorage.getStorage()
      };
      return this.generateUrl(stateObject);
    };

    return StateManager;
  }();

  exports["default"] = StateManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/WidgetManager.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/WidgetManager.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var WidgetManager =
  /** @class */
  function () {
    function WidgetManager(primary, secondary, registry, componentRegistry) {
      this.primary = primary;
      this.secondary = secondary;
      this.registry = registry;
      this.componentRegistry = componentRegistry;
    }

    WidgetManager.prototype.init = function () {
      for (var i in this.primary) {
        var action = this.registry.getFactory(this.primary[i].component).createFromData(this.primary[i]);
        this.primary[i] = _.extend(this.primary[i], action);
      }

      for (var i in this.secondary) {
        var action = this.registry.getFactory(this.secondary[i].component).createFromData(this.secondary[i]);
        this.secondary[i] = _.extend(this.secondary[i], action);
      }

      for (var _i = 0, _a = this.registry.getComponents(); _i < _a.length; _i++) {
        var component = _a[_i];
        this.componentRegistry.registerComponent(component.name, component.component);
      }

      this.componentRegistry.registerStore('widgetManager', this);
      this.componentRegistry.registerData(this.primary);
      this.componentRegistry.registerData(this.secondary);
    };

    return WidgetManager;
  }();

  exports["default"] = WidgetManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/WidgetRegistry.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/WidgetRegistry.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/core */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var WidgetRegistry =
  /** @class */
  function (_super) {
    __extends(WidgetRegistry, _super);

    function WidgetRegistry() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    WidgetRegistry.prototype.getFactory = function (name) {
      return _super.prototype.getFactory.call(this, name);
    };

    return WidgetRegistry;
  }(core_1.Registry);

  exports["default"] = WidgetRegistry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue":
/*!************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconWidgetComponent_vue_vue_type_template_id_565ee7c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconWidgetComponent.vue?vue&type=template&id=565ee7c5& */ "./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue?vue&type=template&id=565ee7c5&");
/* harmony import */ var _IconWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconWidgetComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IconWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _IconWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IconWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IconWidgetComponent_vue_vue_type_template_id_565ee7c5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IconWidgetComponent_vue_vue_type_template_id_565ee7c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IconWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../babel-loader/lib??ref--7-0!../../../../../ts-loader??ref--7-1!../../../../../vue-loader/lib??vue-loader-options!./IconWidgetComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IconWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IconWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IconWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IconWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IconWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue?vue&type=template&id=565ee7c5&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue?vue&type=template&id=565ee7c5& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_IconWidgetComponent_vue_vue_type_template_id_565ee7c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../vue-loader/lib??vue-loader-options!./IconWidgetComponent.vue?vue&type=template&id=565ee7c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue?vue&type=template&id=565ee7c5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_IconWidgetComponent_vue_vue_type_template_id_565ee7c5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_IconWidgetComponent_vue_vue_type_template_id_565ee7c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuickMenuWidgetComponent_vue_vue_type_template_id_3262be10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickMenuWidgetComponent.vue?vue&type=template&id=3262be10& */ "./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue?vue&type=template&id=3262be10&");
/* harmony import */ var _QuickMenuWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickMenuWidgetComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _QuickMenuWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _QuickMenuWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuickMenuWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuickMenuWidgetComponent_vue_vue_type_template_id_3262be10___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuickMenuWidgetComponent_vue_vue_type_template_id_3262be10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue?vue&type=script&lang=ts&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_QuickMenuWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../babel-loader/lib??ref--7-0!../../../../../ts-loader??ref--7-1!../../../../../vue-loader/lib??vue-loader-options!./QuickMenuWidgetComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_QuickMenuWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_QuickMenuWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_QuickMenuWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_QuickMenuWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_QuickMenuWidgetComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue?vue&type=template&id=3262be10&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue?vue&type=template&id=3262be10& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_QuickMenuWidgetComponent_vue_vue_type_template_id_3262be10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../vue-loader/lib??vue-loader-options!./QuickMenuWidgetComponent.vue?vue&type=template&id=3262be10& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue?vue&type=template&id=3262be10&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_QuickMenuWidgetComponent_vue_vue_type_template_id_3262be10___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_QuickMenuWidgetComponent_vue_vue_type_template_id_3262be10___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/factory/AbstractFactory.ts":
/*!****************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/factory/AbstractFactory.ts ***!
  \****************************************************************************/
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
      var Widget = this.createNew();
      Widget = _.extend(data, Widget);
      return Widget;
    };

    return AbstractFactory;
  }();

  exports["default"] = AbstractFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/factory/IconWidgetFactory.ts":
/*!******************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/factory/IconWidgetFactory.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/toolbar/widget/model/IconWidget */ "./node_modules/@enhavo/app/toolbar/widget/model/IconWidget.ts"), __webpack_require__(/*! @enhavo/app/toolbar/widget/factory/AbstractFactory */ "./node_modules/@enhavo/app/toolbar/widget/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, IconWidget_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var IconWidgetFactory =
  /** @class */
  function (_super) {
    __extends(IconWidgetFactory, _super);

    function IconWidgetFactory(eventDispatcher, menuManager) {
      var _this = _super.call(this) || this;

      _this.eventDispatcher = eventDispatcher;
      _this.menuManager = menuManager;
      return _this;
    }

    IconWidgetFactory.prototype.createNew = function () {
      return new IconWidget_1["default"](this.eventDispatcher, this.menuManager);
    };

    return IconWidgetFactory;
  }(AbstractFactory_1["default"]);

  exports["default"] = IconWidgetFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/factory/NewWindowWidgetFactory.ts":
/*!***********************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/factory/NewWindowWidgetFactory.ts ***!
  \***********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/toolbar/widget/model/NewWindowWidget */ "./node_modules/@enhavo/app/toolbar/widget/model/NewWindowWidget.ts"), __webpack_require__(/*! @enhavo/app/toolbar/widget/factory/AbstractFactory */ "./node_modules/@enhavo/app/toolbar/widget/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, NewWindowWidget_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var NewWindowWidgetFactory =
  /** @class */
  function (_super) {
    __extends(NewWindowWidgetFactory, _super);

    function NewWindowWidgetFactory() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    NewWindowWidgetFactory.prototype.createNew = function () {
      return new NewWindowWidget_1["default"]();
    };

    return NewWindowWidgetFactory;
  }(AbstractFactory_1["default"]);

  exports["default"] = NewWindowWidgetFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/factory/QuickMenuWidgetFactory.ts":
/*!***********************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/factory/QuickMenuWidgetFactory.ts ***!
  \***********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/toolbar/widget/model/QuickMenuWidget */ "./node_modules/@enhavo/app/toolbar/widget/model/QuickMenuWidget.ts"), __webpack_require__(/*! @enhavo/app/toolbar/widget/factory/AbstractFactory */ "./node_modules/@enhavo/app/toolbar/widget/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, QuickMenuWidget_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var SearchWidgetFactory =
  /** @class */
  function (_super) {
    __extends(SearchWidgetFactory, _super);

    function SearchWidgetFactory(eventDispatcher, menuManager) {
      var _this = _super.call(this) || this;

      _this.eventDispatcher = eventDispatcher;
      _this.menuManager = menuManager;
      return _this;
    }

    SearchWidgetFactory.prototype.createNew = function () {
      return new QuickMenuWidget_1["default"](this.eventDispatcher, this.menuManager);
    };

    return SearchWidgetFactory;
  }(AbstractFactory_1["default"]);

  exports["default"] = SearchWidgetFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/model/AbstractWidget.ts":
/*!*************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/model/AbstractWidget.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var AbstractWidget =
  /** @class */
  function () {
    function AbstractWidget() {}

    return AbstractWidget;
  }();

  exports["default"] = AbstractWidget;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/model/IconWidget.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/model/IconWidget.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/toolbar/widget/model/AbstractWidget */ "./node_modules/@enhavo/app/toolbar/widget/model/AbstractWidget.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/ClearEvent */ "./node_modules/@enhavo/app/view-stack/event/ClearEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/CreateEvent */ "./node_modules/@enhavo/app/view-stack/event/CreateEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractWidget_1, ClearEvent_1, CreateEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var IconWidget =
  /** @class */
  function (_super) {
    __extends(IconWidget, _super);

    function IconWidget(eventDispatcher, menuManager) {
      var _this = _super.call(this) || this;

      _this.eventDispatcher = eventDispatcher;
      _this.menuManager = menuManager;
      return _this;
    }

    IconWidget.prototype.openView = function (url, label) {
      var _this = this;

      this.eventDispatcher.dispatch(new ClearEvent_1["default"]()).then(function () {
        _this.eventDispatcher.dispatch(new CreateEvent_1["default"]({
          label: label,
          component: 'iframe-view',
          url: url
        })).then(function () {
          _this.menuManager.clearSelections();
        });
      })["catch"](function () {});
    };

    IconWidget.prototype.open = function () {
      if (this.target == '_view') {
        this.openView(this.url, this.label);
      } else if (this.target == '_self') {
        window.location.href = this.url;
      } else if (this.target == '_blank') {
        window.open(this.url, '_blank');
      }
    };

    return IconWidget;
  }(AbstractWidget_1["default"]);

  exports["default"] = IconWidget;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/model/NewWindowWidget.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/model/NewWindowWidget.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/toolbar/widget/model/AbstractWidget */ "./node_modules/@enhavo/app/toolbar/widget/model/AbstractWidget.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractWidget_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var NewWindowWidget =
  /** @class */
  function (_super) {
    __extends(NewWindowWidget, _super);

    function NewWindowWidget() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    NewWindowWidget.prototype.open = function () {
      window.open(window.location.href, '_blank');
    };

    return NewWindowWidget;
  }(AbstractWidget_1["default"]);

  exports["default"] = NewWindowWidget;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/toolbar/widget/model/QuickMenuWidget.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/@enhavo/app/toolbar/widget/model/QuickMenuWidget.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/toolbar/widget/model/AbstractWidget */ "./node_modules/@enhavo/app/toolbar/widget/model/AbstractWidget.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/CreateEvent */ "./node_modules/@enhavo/app/view-stack/event/CreateEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/ClearEvent */ "./node_modules/@enhavo/app/view-stack/event/ClearEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, AbstractWidget_1, CreateEvent_1, ClearEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Menu = void 0;

  var QuickMenuWidget =
  /** @class */
  function (_super) {
    __extends(QuickMenuWidget, _super);

    function QuickMenuWidget(eventDispatcher, menuManager) {
      var _this = _super.call(this) || this;

      _this.eventDispatcher = eventDispatcher;
      _this.menuManager = menuManager;
      return _this;
    }

    QuickMenuWidget.prototype.openView = function (url, label) {
      var _this = this;

      this.eventDispatcher.dispatch(new ClearEvent_1["default"]()).then(function () {
        _this.eventDispatcher.dispatch(new CreateEvent_1["default"]({
          label: label,
          component: 'iframe-view',
          url: url
        })).then(function () {
          _this.menuManager.clearSelections();
        });
      })["catch"](function () {});
    };

    QuickMenuWidget.prototype.open = function (menu) {
      if (menu.target == '_view') {
        this.openView(menu.url, menu.label);
      } else if (menu.target == '_self') {
        window.location.href = menu.url;
      } else if (menu.target == '_blank') {
        window.open(menu.url, '_blank');
      }
    };

    return QuickMenuWidget;
  }(AbstractWidget_1["default"]);

  exports["default"] = QuickMenuWidget;

  var Menu =
  /** @class */
  function () {
    function Menu() {}

    return Menu;
  }();

  exports.Menu = Menu;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/ArrangeManager.ts":
/*!***************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/ArrangeManager.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ArrangeManager =
  /** @class */
  function () {
    function ArrangeManager(menuManager) {
      this.menuManager = menuManager;
    }

    ArrangeManager.prototype.resize = function (views) {};

    ArrangeManager.prototype.arrange = function (viewsData) {
      var _this = this;

      window.setTimeout(function () {
        var views = _this.getViews(viewsData);

        if (!_this.menuManager.isCustomChange()) {
          if (views.length >= 2) {
            _this.menuManager.close();

            for (var _i = 0, _a = _this.menuManager.getItems(); _i < _a.length; _i++) {
              var item = _a[_i];

              if (item.close) {
                item.close();
              }
            }
          } else if (views.length == 0) {
            _this.menuManager.open();
          }
        }

        var hasFocus = false;

        for (var _b = 0, views_1 = views; _b < views_1.length; _b++) {
          var view = views_1[_b];
          if (view.focus == true) hasFocus = true;
        }

        if (!hasFocus) {
          if (views.length) {
            views[views.length - 1].focus = true;
          }
        }

        _this.setSize(views);

        _this.setPosition(views);
      }, 50);
    };

    ArrangeManager.prototype.setSize = function (views) {
      this.setMinimized(views);

      if (views.length == 1) {
        if (!views[0].minimize) {
          views[0].width = '100%';
        }
      } else if (views.length == 2) {
        if (!views[0].minimize) {
          if (views[1].minimize) {
            views[0].width = '100%';
          } else {
            views[0].width = '30%';
          }
        }
      } else if (views.length == 3) {
        if (!views[0].minimize) {
          if (views[1].minimize && views[2].minimize) {
            views[0].width = '100%';
          } else {
            views[0].width = '30%';
          }
        }
      }
    };

    ArrangeManager.prototype.setMinimized = function (views) {
      if (views.length == 1) {
        if (!views[0].customMinimized) {
          views[0].minimize = false;
        }
      } else if (views.length == 2) {
        if (!views[0].customMinimized) {
          views[0].minimize = false;
        }
      } else if (views.length == 3) {
        if (!views[0].customMinimized) {
          views[0].minimize = true;
        }
      }
    };

    ArrangeManager.prototype.setPosition = function (views) {
      for (var _i = 0, views_2 = views; _i < views_2.length; _i++) {
        var view = views_2[_i];
        view.position = null;
      }

      var position = 0;

      for (var _a = 0, views_3 = views; _a < views_3.length; _a++) {
        var view = views_3[_a];

        if (view.minimize) {
          view.position = position++;
        }
      }

      for (var _b = 0, views_4 = views; _b < views_4.length; _b++) {
        var view = views_4[_b];

        if (!view.minimize) {
          view.position = position++;

          if (view.position != null) {
            for (var _c = 0, _d = view.children; _c < _d.length; _c++) {
              var children = _d[_c];
              children.position = position++;
            }
          }
        }
      }
    };

    ArrangeManager.prototype.getViews = function (views) {
      var returnData = [];

      for (var _i = 0, views_5 = views; _i < views_5.length; _i++) {
        var view = views_5[_i];

        if (!view.removed) {
          returnData.push(view);
        }
      }

      return returnData;
    };

    return ArrangeManager;
  }();

  exports["default"] = ArrangeManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/DataStorageEntry.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/DataStorageEntry.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var DataStorageEntry =
  /** @class */
  function () {
    function DataStorageEntry() {}

    return DataStorageEntry;
  }();

  exports["default"] = DataStorageEntry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/DataStorageManager.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/DataStorageManager.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/view-stack/DataStorageEntry */ "./node_modules/@enhavo/app/view-stack/DataStorageEntry.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, DataStorageEntry_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var DataStorageManager =
  /** @class */
  function () {
    function DataStorageManager(viewStack, eventDispatcher) {
      var _this = this;

      this.eventDispatcher = eventDispatcher;
      this.viewStack = viewStack;
      this.eventDispatcher.on('save-data', function (event) {
        _this.set(event.key, event.value, event.origin);

        event.resolve();
      });
      this.eventDispatcher.on('load-data', function (event) {
        var entry = _this.get(event.key, event.origin);

        event.resolve(entry);
      });
      this.eventDispatcher.on('remove-data', function (event) {
        _this["delete"](event.key, event.origin);

        event.resolve();
      });
    }

    DataStorageManager.prototype.get = function (key, id) {
      var view = this.viewStack.get(id);

      if (view != null) {
        if (!view.storage) {
          return null;
        }

        for (var _i = 0, _a = view.storage; _i < _a.length; _i++) {
          var entry = _a[_i];

          if (entry.key == key) {
            return entry;
          }
        }
      }

      return null;
    };

    DataStorageManager.prototype.set = function (key, value, id) {
      var entry = this.get(key, id);

      if (entry == null) {
        entry = new DataStorageEntry_1["default"]();
        entry.key = key;
        var view = this.viewStack.get(id);

        if (view != null) {
          if (!view.storage) {
            view.storage = [];
          }

          view.storage.push(entry);
        }
      }

      entry.value = value;
    };

    DataStorageManager.prototype["delete"] = function (key, id) {
      var entry = this.get(key, id);

      if (entry != null) {
        var view = this.viewStack.get(id);

        if (view != null) {
          var index = view.storage.indexOf(entry);
          view.storage.splice(index, 1);
          return true;
        }
      }

      return false;
    };

    return DataStorageManager;
  }();

  exports["default"] = DataStorageManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/FrameStorage.ts":
/*!*************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/FrameStorage.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var FrameStorage =
  /** @class */
  function () {
    function FrameStorage(dispatcher) {
      var _this = this;

      this.frames = [];
      dispatcher.all(function (event) {
        for (var _i = 0, _a = _this.frames; _i < _a.length; _i++) {
          var frame = _a[_i];

          if (event.origin != frame.id && frame.element.contentWindow != null) {
            if (dispatcher.isDebug()) {
              console.groupCollapsed('pass event (' + event.name + ') to iframe ' + frame.id);
              console.dir(event);
              console.groupEnd();
            }

            var data = 'view_stack_event|' + event.serialize();
            frame.element.contentWindow.postMessage(data, '*');
          }
        }
      });
    }

    FrameStorage.prototype.add = function (id, element) {
      this.frames.push(new Frame(id, element));
      return element;
    };

    FrameStorage.prototype.get = function (id) {
      var frame = this.getFrame(id);

      if (frame) {
        return frame.element;
      }

      return null;
    };

    FrameStorage.prototype.has = function (id) {
      return this.getFrame(id) != null;
    };

    FrameStorage.prototype.remove = function (id) {
      var frame = this.getFrame(id);

      if (frame) {
        var index = this.frames.indexOf(frame);
        this.frames.splice(index, 1);
      }
    };

    FrameStorage.prototype.getFrame = function (id) {
      for (var _i = 0, _a = this.frames; _i < _a.length; _i++) {
        var frame = _a[_i];

        if (frame.id == id) {
          return frame;
        }
      }

      return null;
    };

    return FrameStorage;
  }();

  exports["default"] = FrameStorage;

  var Frame =
  /** @class */
  function () {
    function Frame(id, element) {
      this.element = element;
      this.id = id;
    }

    return Frame;
  }();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/GlobalDataStorageManager.ts":
/*!*************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/GlobalDataStorageManager.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/view-stack/DataStorageEntry */ "./node_modules/@enhavo/app/view-stack/DataStorageEntry.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, DataStorageEntry_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var GlobalDataStorageManager =
  /** @class */
  function () {
    function GlobalDataStorageManager(eventDispatcher, data) {
      var _this = this;

      if (data === void 0) {
        data = null;
      }

      this.eventDispatcher = eventDispatcher;
      this.entries = this.load(data);
      this.eventDispatcher.on('save-global-data', function (event) {
        _this.set(event.key, event.value);

        event.resolve();
      });
      this.eventDispatcher.on('load-global-data', function (event) {
        var entry = _this.get(event.key);

        event.resolve(entry);
      });
      this.eventDispatcher.on('remove-global-data', function (event) {
        _this["delete"](event.key);

        event.resolve();
      });
    }

    GlobalDataStorageManager.prototype.get = function (key) {
      for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
        var entry = _a[_i];

        if (entry.key == key) {
          return entry;
        }
      }

      return null;
    };

    GlobalDataStorageManager.prototype.set = function (key, value) {
      var entry = this.get(key);

      if (entry == null) {
        entry = new DataStorageEntry_1["default"]();
        entry.key = key;
        this.entries.push(entry);
      }

      entry.value = value;
    };

    GlobalDataStorageManager.prototype["delete"] = function (key) {
      var entry = this.get(key);

      if (entry != null) {
        var index = this.entries.indexOf(entry);

        if (index != -1) {
          this.entries.splice(index, 1);
          return true;
        }
      }

      return false;
    };

    GlobalDataStorageManager.prototype.load = function (data) {
      if (data !== null) {
        return data;
      }

      return [];
    };

    GlobalDataStorageManager.prototype.getStorage = function () {
      return this.entries;
    };

    return GlobalDataStorageManager;
  }();

  exports["default"] = GlobalDataStorageManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/ViewRegistry.ts":
/*!*************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/ViewRegistry.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/core */ "./node_modules/@enhavo/app/node_modules/@enhavo/core/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ViewRegistry =
  /** @class */
  function (_super) {
    __extends(ViewRegistry, _super);

    function ViewRegistry() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    ViewRegistry.prototype.getFactory = function (name) {
      return _super.prototype.getFactory.call(this, name);
    };

    return ViewRegistry;
  }(core_1.Registry);

  exports["default"] = ViewRegistry;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/ViewStack.ts":
/*!**********************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/ViewStack.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/view-stack/event/CloseEvent */ "./node_modules/@enhavo/app/view-stack/event/CloseEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/RemoveEvent */ "./node_modules/@enhavo/app/view-stack/event/RemoveEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/RemovedEvent */ "./node_modules/@enhavo/app/view-stack/event/RemovedEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/ClearedEvent */ "./node_modules/@enhavo/app/view-stack/event/ClearedEvent.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! async */ "./node_modules/async/dist/async.js"), __webpack_require__(/*! @enhavo/app/view-stack/event/SaveStateEvent */ "./node_modules/@enhavo/app/view-stack/event/SaveStateEvent.ts"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, CloseEvent_1, RemoveEvent_1, RemovedEvent_1, ClearedEvent_1, _, async, SaveStateEvent_1, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ViewStack =
  /** @class */
  function () {
    function ViewStack(data, dispatcher, viewRegistry, frameStorage, componentRegistry, arrangeManager) {
      var _this = this;

      this.nextId = 1;
      this.data = data;
      this.dispatcher = dispatcher;
      this.registry = viewRegistry;
      this.frameStorage = frameStorage;
      this.componentRegistry = componentRegistry;
      this.arrangeManager = arrangeManager;
      this.addCloseListener();
      this.addRemoveListener();
      this.addLoadedListener();
      this.addCreateListener();
      this.addClearListener();
      this.addArrangeListener();
      this.addLoadingListener();
      this.addExistsListener();
      this.addChangeUrlListener();
      $(window).resize(function () {
        _this.arrangeManager.resize(_this.data.views);
      });
    }

    ViewStack.prototype.init = function () {
      if (!this.data.views) {
        this.data.views = [];
        this.views = this.data.views;
      } else {
        for (var i in this.data.views) {
          var view = this.registry.getFactory(this.data.views[i].component).createFromData(this.data.views[i]);

          if (view.id > this.nextId) {
            this.nextId = view.id + 1;
          }

          this.data.views[i] = _.extend(this.data.views[i], view);
        }

        this.views = this.data.views;
      }

      for (var _i = 0, _a = this.registry.getComponents(); _i < _a.length; _i++) {
        var component = _a[_i];
        this.componentRegistry.registerComponent(component.name, component.component);
      }

      this.componentRegistry.registerStore('viewStack', this);
      this.componentRegistry.registerData(this.data);
    };

    ViewStack.prototype.getFrameStorage = function () {
      return this.frameStorage;
    };

    ViewStack.prototype.addChangeUrlListener = function () {
      var _this = this;

      this.dispatcher.on('change-url', function (event) {
        var view = _this.get(event.id);

        if (view.url !== event.url) {
          view.url = event.url;

          if (event.clearStorage) {
            view.storage = [];
          }

          event.resolve({
            changed: true
          });
          return;
        }

        event.resolve({
          changed: false
        });
      });
    };

    ViewStack.prototype.addExistsListener = function () {
      var _this = this;

      this.dispatcher.on('exists', function (event) {
        var view = _this.get(event.id);

        event.resolve({
          exists: !!view
        });
      });
    };

    ViewStack.prototype.addRemoveListener = function () {
      var _this = this;

      this.dispatcher.on('remove', function (event) {
        var view = _this.get(event.id);

        if (view) {
          _this.remove(view);
        }

        if (event.saveState) {
          _this.dispatcher.dispatch(new SaveStateEvent_1["default"]());
        }

        event.resolve();
      });
    };

    ViewStack.prototype.addLoadedListener = function () {
      var _this = this;

      this.dispatcher.on('loaded', function (event) {
        var view = _this.get(event.id);

        if (event.label) {
          view.label = event.label;
        }

        view.closeable = event.closeable;

        if (view) {
          view.finish();
        }
      });
    };

    ViewStack.prototype.addLoadingListener = function () {
      var _this = this;

      this.dispatcher.on('loading', function (event) {
        var view = _this.get(event.id);

        if (view) {
          view.loaded = false;
        }
      });
    };

    ViewStack.prototype.addCloseListener = function () {
      var _this = this;

      this.dispatcher.on('close', function (event) {
        var view = _this.get(event.id);

        if (view) {
          // if view was not loaded, it can't receive close events, so we trigger remove event as fallback
          if (!view.loaded || view.closeable) {
            _this.dispatcher.dispatch(new RemoveEvent_1["default"](view.id, event.saveState));

            event.resolve();
          }
        }
      });
    };

    ViewStack.prototype.addCreateListener = function () {
      var _this = this;

      this.dispatcher.on('create', function (event) {
        var view = _this.registry.getFactory(event.data.component).createFromData(event.data);

        view.id = _this.generateId();

        _this.push(view);

        event.resolve(view);
      });
    };

    ViewStack.prototype.addArrangeListener = function () {
      var _this = this;

      this.dispatcher.on('arrange', function (event) {
        _this.arrange();
      });
    };

    ViewStack.prototype.addClearListener = function () {
      var _this = this;

      this.dispatcher.on('clear', function (event) {
        if (_this.getViews().length == 0) {
          event.resolve();

          _this.dispatcher.dispatch(new ClearedEvent_1["default"](event.uuid));

          return;
        }

        var parallels = [];

        var _loop_1 = function _loop_1(view) {
          parallels.push(function (callback) {
            _this.dispatcher.dispatch(new CloseEvent_1["default"](view.id, false)).then(function () {
              callback(null);
            })["catch"](function () {
              callback('reject');
            });
          });
        };

        for (var _i = 0, _a = _this.getViews(); _i < _a.length; _i++) {
          var view = _a[_i];

          _loop_1(view);
        }

        async.parallel(parallels, function (err) {
          if (err) {
            event.reject();

            _this.dispatcher.dispatch(new SaveStateEvent_1["default"]());
          } else {
            event.resolve();

            _this.dispatcher.dispatch(new ClearedEvent_1["default"](event.uuid));
          }
        });
      });
    };

    ViewStack.prototype.remove = function (view) {
      /**
       * We can't delete views by splice or using Vue.delete, because the view can contain an iframe.
       * And because of reload iframe issues with vue and general in dom trees, it is best practise to delete only
       * the last element. Other elements will just hide until it is the last of the array.
       */
      view.removed = true;
      this.dispatcher.dispatch(new RemovedEvent_1["default"](view.id));

      while (this.views.length > 0 && this.views[this.views.length - 1].removed) {
        this.views.pop();
      }
    };

    ViewStack.prototype.arrange = function () {
      this.arrangeManager.arrange(this.data.views);
    };

    ViewStack.prototype.generateId = function () {
      var id = this.nextId;
      this.nextId++;
      return id;
    };

    ViewStack.prototype.get = function (id) {
      for (var _i = 0, _a = this.getViews(); _i < _a.length; _i++) {
        var view = _a[_i];

        if (view.id == id) {
          return view;
        }
      }

      return null;
    };

    ViewStack.prototype.getViews = function () {
      var views = [];

      for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
        var view = _a[_i];

        if (!view.removed) {
          views.push(view);
        }
      }

      return views;
    };

    ViewStack.prototype.push = function (view) {
      this.views.push(view);

      for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
        var viewStackView = _a[_i];
        viewStackView.focus = false;
      }

      view.focus = true;
    };

    ViewStack.prototype.hasViews = function () {
      return this.getViews().length > 0;
    };

    ViewStack.prototype.getDispatcher = function () {
      return this.dispatcher;
    };

    return ViewStack;
  }();

  exports["default"] = ViewStack;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue":
/*!******************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AjaxViewComponent_vue_vue_type_template_id_d8136496_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AjaxViewComponent.vue?vue&type=template&id=d8136496&scoped=true& */ "./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=template&id=d8136496&scoped=true&");
/* harmony import */ var _AjaxViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AjaxViewComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AjaxViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AjaxViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _AjaxViewComponent_vue_vue_type_style_index_0_id_d8136496_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AjaxViewComponent.vue?vue&type=style&index=0&id=d8136496&lang=scss&scoped=true& */ "./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=style&index=0&id=d8136496&lang=scss&scoped=true&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AjaxViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AjaxViewComponent_vue_vue_type_template_id_d8136496_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AjaxViewComponent_vue_vue_type_template_id_d8136496_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d8136496",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./AjaxViewComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=style&index=0&id=d8136496&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=style&index=0&id=d8136496&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_5_oneOf_1_2_sass_loader_dist_cjs_js_ref_5_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_style_index_0_id_d8136496_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../mini-css-extract-plugin/dist/loader.js!../../../../css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../resolve-url-loader??ref--5-oneOf-1-2!../../../../sass-loader/dist/cjs.js??ref--5-oneOf-1-3!../../../../vue-loader/lib??vue-loader-options!./AjaxViewComponent.vue?vue&type=style&index=0&id=d8136496&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=style&index=0&id=d8136496&lang=scss&scoped=true&");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_5_oneOf_1_2_sass_loader_dist_cjs_js_ref_5_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_style_index_0_id_d8136496_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_5_oneOf_1_2_sass_loader_dist_cjs_js_ref_5_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_style_index_0_id_d8136496_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_5_oneOf_1_2_sass_loader_dist_cjs_js_ref_5_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_style_index_0_id_d8136496_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_5_oneOf_1_2_sass_loader_dist_cjs_js_ref_5_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_style_index_0_id_d8136496_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=template&id=d8136496&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=template&id=d8136496&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_template_id_d8136496_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./AjaxViewComponent.vue?vue&type=template&id=d8136496&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=template&id=d8136496&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_template_id_d8136496_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_AjaxViewComponent_vue_vue_type_template_id_d8136496_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue":
/*!********************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IframeViewComponent_vue_vue_type_template_id_90ca6f1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IframeViewComponent.vue?vue&type=template&id=90ca6f1e&scoped=true& */ "./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=template&id=90ca6f1e&scoped=true&");
/* harmony import */ var _IframeViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IframeViewComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IframeViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _IframeViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _IframeViewComponent_vue_vue_type_style_index_0_id_90ca6f1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IframeViewComponent.vue?vue&type=style&index=0&id=90ca6f1e&lang=scss&scoped=true& */ "./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=style&index=0&id=90ca6f1e&lang=scss&scoped=true&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IframeViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IframeViewComponent_vue_vue_type_template_id_90ca6f1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IframeViewComponent_vue_vue_type_template_id_90ca6f1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "90ca6f1e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./IframeViewComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=style&index=0&id=90ca6f1e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=style&index=0&id=90ca6f1e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_5_oneOf_1_2_sass_loader_dist_cjs_js_ref_5_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_style_index_0_id_90ca6f1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../mini-css-extract-plugin/dist/loader.js!../../../../css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../vue-loader/lib/loaders/stylePostLoader.js!../../../../resolve-url-loader??ref--5-oneOf-1-2!../../../../sass-loader/dist/cjs.js??ref--5-oneOf-1-3!../../../../vue-loader/lib??vue-loader-options!./IframeViewComponent.vue?vue&type=style&index=0&id=90ca6f1e&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=style&index=0&id=90ca6f1e&lang=scss&scoped=true&");
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_5_oneOf_1_2_sass_loader_dist_cjs_js_ref_5_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_style_index_0_id_90ca6f1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_5_oneOf_1_2_sass_loader_dist_cjs_js_ref_5_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_style_index_0_id_90ca6f1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_5_oneOf_1_2_sass_loader_dist_cjs_js_ref_5_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_style_index_0_id_90ca6f1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_resolve_url_loader_index_js_ref_5_oneOf_1_2_sass_loader_dist_cjs_js_ref_5_oneOf_1_3_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_style_index_0_id_90ca6f1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=template&id=90ca6f1e&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=template&id=90ca6f1e&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_template_id_90ca6f1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../vue-loader/lib??vue-loader-options!./IframeViewComponent.vue?vue&type=template&id=90ca6f1e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=template&id=90ca6f1e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_template_id_90ca6f1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_IframeViewComponent_vue_vue_type_template_id_90ca6f1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/ClearEvent.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/ClearEvent.ts ***!
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

  var ClearEvent =
  /** @class */
  function (_super) {
    __extends(ClearEvent, _super);

    function ClearEvent() {
      return _super.call(this, 'clear') || this;
    }

    return ClearEvent;
  }(Event_1["default"]);

  exports["default"] = ClearEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/ClearedEvent.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/ClearedEvent.ts ***!
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

  var ClearedEvent =
  /** @class */
  function (_super) {
    __extends(ClearedEvent, _super);

    function ClearedEvent(uuid) {
      if (uuid === void 0) {
        uuid = null;
      }

      var _this = _super.call(this, 'cleared') || this;

      _this.uuid = uuid;
      return _this;
    }

    return ClearedEvent;
  }(Event_1["default"]);

  exports["default"] = ClearedEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/RemovedEvent.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/RemovedEvent.ts ***!
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

  var RemovedEvent =
  /** @class */
  function (_super) {
    __extends(RemovedEvent, _super);

    function RemovedEvent(id) {
      var _this = _super.call(this, 'removed') || this;

      _this.id = id;
      return _this;
    }

    return RemovedEvent;
  }(Event_1["default"]);

  exports["default"] = RemovedEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/factory/AjaxViewFactory.ts":
/*!************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/factory/AjaxViewFactory.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./ViewFactory */ "./node_modules/@enhavo/app/view-stack/factory/ViewFactory.ts"), __webpack_require__(/*! ../model/AjaxView */ "./node_modules/@enhavo/app/view-stack/model/AjaxView.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ViewFactory_1, AjaxView_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var AjaxViewFactory =
  /** @class */
  function (_super) {
    __extends(AjaxViewFactory, _super);

    function AjaxViewFactory() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AjaxViewFactory.prototype.createFromData = function (data) {
      var view = _super.prototype.createFromData.call(this, data);

      var object = data;
      view.url = object.url;
      return view;
    };

    AjaxViewFactory.prototype.createNew = function () {
      return new AjaxView_1["default"]();
    };

    return AjaxViewFactory;
  }(ViewFactory_1["default"]);

  exports["default"] = AjaxViewFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/factory/IframeViewFactory.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/factory/IframeViewFactory.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./ViewFactory */ "./node_modules/@enhavo/app/view-stack/factory/ViewFactory.ts"), __webpack_require__(/*! ../model/IframeView */ "./node_modules/@enhavo/app/view-stack/model/IframeView.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ViewFactory_1, IframeView_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var IframeViewFactory =
  /** @class */
  function (_super) {
    __extends(IframeViewFactory, _super);

    function IframeViewFactory() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    IframeViewFactory.prototype.createFromData = function (data) {
      var view = _super.prototype.createFromData.call(this, data);

      var object = data;
      view.url = object.url;
      return view;
    };

    IframeViewFactory.prototype.createNew = function () {
      var view = new IframeView_1["default"]();
      view.storage = [];
      return view;
    };

    return IframeViewFactory;
  }(ViewFactory_1["default"]);

  exports["default"] = IframeViewFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/factory/ViewFactory.ts":
/*!********************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/factory/ViewFactory.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ../model/View */ "./node_modules/@enhavo/app/view-stack/model/View.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, View_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ViewFactory =
  /** @class */
  function () {
    function ViewFactory() {}

    ViewFactory.prototype.createFromData = function (data) {
      var view = this.createNew();
      var object = data;
      view.id = object.id;
      view.label = object.label;
      view.component = object.component;
      view.storage = object.storage;
      return view;
    };

    ViewFactory.prototype.createNew = function () {
      var view = new View_1["default"]();
      view.storage = [];
      return view;
    };

    return ViewFactory;
  }();

  exports["default"] = ViewFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/model/AjaxView.ts":
/*!***************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/model/AjaxView.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./View */ "./node_modules/@enhavo/app/view-stack/model/View.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, View_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var AjaxView =
  /** @class */
  function (_super) {
    __extends(AjaxView, _super);

    function AjaxView() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    return AjaxView;
  }(View_1["default"]);

  exports["default"] = AjaxView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/model/IframeView.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/model/IframeView.ts ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./View */ "./node_modules/@enhavo/app/view-stack/model/View.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, View_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var IframeView =
  /** @class */
  function (_super) {
    __extends(IframeView, _super);

    function IframeView() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    return IframeView;
  }(View_1["default"]);

  exports["default"] = IframeView;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/model/View.ts":
/*!***********************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/model/View.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var View =
  /** @class */
  function () {
    function View() {
      this.id = null;
      this.label = '';
      this.children = [];
      this.parent = null;
      this.priority = 0;
      this.width = null;
      this.loaded = false;
      this.minimize = false;
      this.focus = false;
      this.customMinimized = false;
      this.removed = false;
      this.closeable = true;
      this.position = 0;
    }

    View.prototype.finish = function () {
      this.loaded = true;
    };

    return View;
  }();

  exports["default"] = View;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/main/components/MainComponent.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/main/components/MainComponent.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! @enhavo/app/assets/fonts/enhavo-icons.font */ "./node_modules/@enhavo/app/assets/fonts/enhavo-icons.font.js"), __webpack_require__(/*! @enhavo/app/assets/styles/app.scss */ "./node_modules/@enhavo/app/assets/styles/app.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var MainComponent =
  /** @class */
  function (_super) {
    __extends(MainComponent, _super);

    function MainComponent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    Object.defineProperty(MainComponent.prototype, "brandingImageStyles", {
      get: function get() {
        if (this.$mainApp.data.branding.logo) {
          return {
            backgroundImage: 'url(' + this.$mainApp.data.branding.logo + ')'
          };
        }

        return {};
      },
      enumerable: false,
      configurable: true
    });

    MainComponent.prototype.home = function () {
      window.location.href = '/admin/';
    };

    MainComponent = __decorate([vue_property_decorator_1.Component()], MainComponent);
    return MainComponent;
  }(vue_property_decorator_1.Vue);

  exports["default"] = MainComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue?vue&type=script&lang=ts& ***!
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

  var MenuDropdownComponent =
  /** @class */
  function (_super) {
    __extends(MenuDropdownComponent, _super);

    function MenuDropdownComponent() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.name = 'menu-dropdown';
      return _this;
    }

    MenuDropdownComponent.prototype.change = function (value) {
      this.data.change(value);
    };

    __decorate([vue_property_decorator_1.Prop()], MenuDropdownComponent.prototype, "data", void 0);

    MenuDropdownComponent = __decorate([vue_property_decorator_1.Component()], MenuDropdownComponent);
    return MenuDropdownComponent;
  }(vue_property_decorator_1.Vue);

  exports["default"] = MenuDropdownComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue?vue&type=script&lang=ts& ***!
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

  var MenuItemComponent =
  /** @class */
  function (_super) {
    __extends(MenuItemComponent, _super);

    function MenuItemComponent() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.name = 'menu-item';
      return _this;
    }

    Object.defineProperty(MenuItemComponent.prototype, "label", {
      get: function get() {
        return this.data && this.data.label ? this.data.label : false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MenuItemComponent.prototype, "icon", {
      get: function get() {
        return this.data && this.data.icon ? 'icon-' + this.data.icon : '';
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MenuItemComponent.prototype, "notification", {
      get: function get() {
        return this.data && this.data.notification ? this.data.notification : false;
      },
      enumerable: false,
      configurable: true
    });

    MenuItemComponent.prototype.open = function (event) {
      event.preventDefault();
      this.data.open();
    };

    __decorate([vue_property_decorator_1.Prop()], MenuItemComponent.prototype, "data", void 0);

    MenuItemComponent = __decorate([vue_property_decorator_1.Component()], MenuItemComponent);
    return MenuItemComponent;
  }(vue_property_decorator_1.Vue);

  exports["default"] = MenuItemComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/menu/components/MenuListComponent.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/menu/components/MenuListComponent.vue?vue&type=script&lang=ts& ***!
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

  var MenuListComponent =
  /** @class */
  function (_super) {
    __extends(MenuListComponent, _super);

    function MenuListComponent() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.name = 'menu-list';
      return _this;
    }

    Object.defineProperty(MenuListComponent.prototype, "label", {
      get: function get() {
        return this.data && this.data.label ? this.data.label : false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MenuListComponent.prototype, "icon", {
      get: function get() {
        return this.data && this.data.icon ? 'icon-' + this.data.icon : false;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MenuListComponent.prototype, "notification", {
      get: function get() {
        return this.data && this.data.notification ? this.data.notification : false;
      },
      enumerable: false,
      configurable: true
    });

    MenuListComponent.prototype.toggle = function () {
      this.data.isOpen = !this.data.isOpen;

      if (this.data.isOpen) {
        this.data.open();
        this.data.closeOtherMenus();
      } else {
        this.data.close();
      }
    };

    MenuListComponent.prototype.outside = function () {
      var _this = this;

      window.setTimeout(function () {
        if (!_this.data.isMainMenuOpen()) {
          _this.data.isOpen = false;
        }
      }, 100);
    };

    __decorate([vue_property_decorator_1.Prop()], MenuListComponent.prototype, "data", void 0);

    MenuListComponent = __decorate([vue_property_decorator_1.Component()], MenuListComponent);
    return MenuListComponent;
  }(vue_property_decorator_1.Vue);

  exports["default"] = MenuListComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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

  var IconWidgetComponent =
  /** @class */
  function (_super) {
    __extends(IconWidgetComponent, _super);

    function IconWidgetComponent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    IconWidgetComponent.prototype.getIcon = function () {
      if (this.data.icon) {
        return 'icon icon-' + this.data.icon;
      }

      return '';
    };

    IconWidgetComponent.prototype.open = function () {
      this.data.open();
    };

    __decorate([vue_property_decorator_1.Prop()], IconWidgetComponent.prototype, "data", void 0);

    IconWidgetComponent = __decorate([vue_property_decorator_1.Component], IconWidgetComponent);
    return IconWidgetComponent;
  }(vue_property_decorator_1.Vue);

  exports["default"] = IconWidgetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue?vue&type=script&lang=ts&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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

  var QuickMenuWidgetComponent =
  /** @class */
  function (_super) {
    __extends(QuickMenuWidgetComponent, _super);

    function QuickMenuWidgetComponent() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.isOpen = false;
      return _this;
    }

    QuickMenuWidgetComponent.prototype.toggle = function () {
      this.isOpen = !this.isOpen;
    };

    QuickMenuWidgetComponent.prototype.close = function () {
      this.isOpen = false;
    };

    QuickMenuWidgetComponent.prototype.open = function (menu) {
      this.data.open(menu);
      this.close();
    };

    QuickMenuWidgetComponent.prototype.getIcon = function () {
      if (this.data.icon) {
        return 'icon icon-' + this.data.icon;
      }

      return '';
    };

    __decorate([vue_property_decorator_1.Prop()], QuickMenuWidgetComponent.prototype, "data", void 0);

    QuickMenuWidgetComponent = __decorate([vue_property_decorator_1.Component()], QuickMenuWidgetComponent);
    return QuickMenuWidgetComponent;
  }(vue_property_decorator_1.Vue);

  exports["default"] = QuickMenuWidgetComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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

  var AjaxViewComponent =
  /** @class */
  function (_super) {
    __extends(AjaxViewComponent, _super);

    function AjaxViewComponent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    AjaxViewComponent.prototype.created = function () {// window.setTimeout(function () {
      //     this.eventDispatcher.dispatch(new LoadedEvent());
      // }, 3000);
    };

    __decorate([vue_property_decorator_1.Prop()], AjaxViewComponent.prototype, "data", void 0);

    AjaxViewComponent = __decorate([vue_property_decorator_1.Component], AjaxViewComponent);
    return AjaxViewComponent;
  }(vue_property_decorator_1.Vue);

  exports["default"] = AjaxViewComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=script&lang=ts& ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1, URI) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var IframeViewComponent =
  /** @class */
  function (_super) {
    __extends(IframeViewComponent, _super);

    function IframeViewComponent() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.viewId = null;
      return _this;
    }

    IframeViewComponent.prototype.mounted = function () {
      var _this = this;

      this.viewId = this.data.id;
      var frame = this.$refs.frame;
      this.$viewStack.getFrameStorage().add(this.data.id, frame);
      this.subscriber = this.eventDispatcher.on('removed', function () {
        _this.$forceUpdate(); // trigger update

      });
    };

    IframeViewComponent.prototype.updated = function () {
      /**
       * If this vue component was not destroyed and reused to display the iframe, we need to detect a mismatch
       * between the view id and iframe view id. If we found a mismatch me need to reload the iframe, otherwise,
       * we won't receive updates for the correct view id
       */
      if (this.viewId != this.data.id) {
        this.$viewStack.getFrameStorage().remove(this.data.id);
        this.viewId = this.data.id;
        var frame = this.$refs.frame;
        this.$refs.frame.src = this.url;
        this.$viewStack.getFrameStorage().add(this.data.id, frame);
      }
    };

    IframeViewComponent.prototype.destroyed = function () {
      this.eventDispatcher.remove(this.subscriber);
      this.$viewStack.getFrameStorage().remove(this.data.id);
    };

    Object.defineProperty(IframeViewComponent.prototype, "url", {
      get: function get() {
        var uri = new URI(this.data.url);
        return uri.addQuery('view_id', this.data.id) + '';
      },
      enumerable: false,
      configurable: true
    });

    __decorate([vue_property_decorator_1.Prop()], IframeViewComponent.prototype, "data", void 0);

    IframeViewComponent = __decorate([vue_property_decorator_1.Component], IframeViewComponent);
    return IframeViewComponent;
  }(vue_property_decorator_1.Vue);

  exports["default"] = IframeViewComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=style&index=0&id=d8136496&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--5-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=style&index=0&id=d8136496&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=style&index=0&id=90ca6f1e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader??ref--5-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=style&index=0&id=90ca6f1e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/pako/index.js":
/*!************************************!*\
  !*** ./node_modules/pako/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Top level file is just a mixin of submodules & constants


var assign    = __webpack_require__(/*! ./lib/utils/common */ "./node_modules/pako/lib/utils/common.js").assign;

var deflate   = __webpack_require__(/*! ./lib/deflate */ "./node_modules/pako/lib/deflate.js");
var inflate   = __webpack_require__(/*! ./lib/inflate */ "./node_modules/pako/lib/inflate.js");
var constants = __webpack_require__(/*! ./lib/zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");

var pako = {};

assign(pako, deflate, inflate, constants);

module.exports = pako;


/***/ }),

/***/ "./node_modules/pako/lib/deflate.js":
/*!******************************************!*\
  !*** ./node_modules/pako/lib/deflate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var zlib_deflate = __webpack_require__(/*! ./zlib/deflate */ "./node_modules/pako/lib/zlib/deflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");

var toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

var Z_NO_FLUSH      = 0;
var Z_FINISH        = 4;

var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_SYNC_FLUSH    = 2;

var Z_DEFAULT_COMPRESSION = -1;

var Z_DEFAULT_STRATEGY    = 0;

var Z_DEFLATED  = 8;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array|Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
 * push a chunk with explicit flush (call [[Deflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate(options) {
  if (!(this instanceof Deflate)) return new Deflate(options);

  this.options = utils.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ''
  }, options || {});

  var opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new ZStream();
  this.strm.avail_out = 0;

  var status = zlib_deflate.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }

  if (opt.header) {
    zlib_deflate.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    var dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = zlib_deflate.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the compression context.
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * array format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;

  if (this.ended) { return false; }

  _mode = (mode === ~~mode) ? mode : ((mode === true) ? Z_FINISH : Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = zlib_deflate.deflate(strm, _mode);    /* no bad return value */

    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || (strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH))) {
      if (this.options.to === 'string') {
        this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);

  // Finalize on the last chunk.
  if (_mode === Z_FINISH) {
    status = zlib_deflate.deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be "binary string"
 *    (each char code [0..255])
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate(input, options) {
  var deflator = new Deflate(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || msg[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return deflate(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate(input, options);
}


exports.Deflate = Deflate;
exports.deflate = deflate;
exports.deflateRaw = deflateRaw;
exports.gzip = gzip;


/***/ }),

/***/ "./node_modules/pako/lib/inflate.js":
/*!******************************************!*\
  !*** ./node_modules/pako/lib/inflate.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var zlib_inflate = __webpack_require__(/*! ./zlib/inflate */ "./node_modules/pako/lib/zlib/inflate.js");
var utils        = __webpack_require__(/*! ./utils/common */ "./node_modules/pako/lib/utils/common.js");
var strings      = __webpack_require__(/*! ./utils/strings */ "./node_modules/pako/lib/utils/strings.js");
var c            = __webpack_require__(/*! ./zlib/constants */ "./node_modules/pako/lib/zlib/constants.js");
var msg          = __webpack_require__(/*! ./zlib/messages */ "./node_modules/pako/lib/zlib/messages.js");
var ZStream      = __webpack_require__(/*! ./zlib/zstream */ "./node_modules/pako/lib/zlib/zstream.js");
var GZheader     = __webpack_require__(/*! ./zlib/gzheader */ "./node_modules/pako/lib/zlib/gzheader.js");

var toString = Object.prototype.toString;

/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
 * push a chunk with explicit flush (call [[Inflate#push]] with
 * `Z_SYNC_FLUSH` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * var inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate(options) {
  if (!(this instanceof Inflate)) return new Inflate(options);

  this.options = utils.assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ''
  }, options || {});

  var opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new ZStream();
  this.strm.avail_out = 0;

  var status  = zlib_inflate.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== c.Z_OK) {
    throw new Error(msg[status]);
  }

  this.header = new GZheader();

  zlib_inflate.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, mode]) -> Boolean
 * - data (Uint8Array|Array|ArrayBuffer|String): input data
 * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. The last data block must have
 * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
 * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
 * can use mode Z_SYNC_FLUSH, keeping the decompression context.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * We strongly recommend to use `Uint8Array` on input for best speed (output
 * format is detected automatically). Also, don't skip last param and always
 * use the same type in your code (boolean or number). That will improve JS speed.
 *
 * For regular `Array`-s make sure all elements are [0..255].
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate.prototype.push = function (data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;

  // Flag to properly process Z_BUF_ERROR on testing inflate call
  // when we check that all output data was flushed.
  var allowBufError = false;

  if (this.ended) { return false; }
  _mode = (mode === ~~mode) ? mode : ((mode === true) ? c.Z_FINISH : c.Z_NO_FLUSH);

  // Convert data if needed
  if (typeof data === 'string') {
    // Only binary strings can be decompressed on practice
    strm.input = strings.binstring2buf(data);
  } else if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  do {
    if (strm.avail_out === 0) {
      strm.output = new utils.Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);    /* no bad return value */

    if (status === c.Z_NEED_DICT && dictionary) {
      status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
    }

    if (status === c.Z_BUF_ERROR && allowBufError === true) {
      status = c.Z_OK;
      allowBufError = false;
    }

    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === c.Z_STREAM_END || (strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH))) {

        if (this.options.to === 'string') {

          next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          tail = strm.next_out - next_out_utf8;
          utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) { utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0); }

          this.onData(utf8str);

        } else {
          this.onData(utils.shrinkBuf(strm.output, strm.next_out));
        }
      }
    }

    // When no more input data, we should check that internal inflate buffers
    // are flushed. The only way to do it when avail_out = 0 - run one more
    // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
    // Here we set flag to process this error properly.
    //
    // NOTE. Deflate does not return error in this case and does not needs such
    // logic.
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }

  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

  if (status === c.Z_STREAM_END) {
    _mode = c.Z_FINISH;
  }

  // Finalize on the last chunk.
  if (_mode === c.Z_FINISH) {
    status = zlib_inflate.inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === c.Z_OK;
  }

  // callback interim results if Z_SYNC_FLUSH.
  if (_mode === c.Z_SYNC_FLUSH) {
    this.onEnd(c.Z_OK);
    strm.avail_out = 0;
    return true;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|Array|String): output data. Type of array depends
 *   on js engine support. When string output requested, each chunk
 *   will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
 * or if an error happened. By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate.prototype.onEnd = function (status) {
  // On success - join
  if (status === c.Z_OK) {
    if (this.options.to === 'string') {
      // Glue & convert here, until we teach pako to send
      // utf8 aligned strings to onData
      this.result = this.chunks.join('');
    } else {
      this.result = utils.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * var pako = require('pako')
 *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
 *   , output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err)
 *   console.log(err);
 * }
 * ```
 **/
function inflate(input, options) {
  var inflator = new Inflate(options);

  inflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) { throw inflator.msg || msg[inflator.err]; }

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw(input, options) {
  options = options || {};
  options.raw = true;
  return inflate(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|Array|String
 * - data (Uint8Array|Array|String): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


exports.Inflate = Inflate;
exports.inflate = inflate;
exports.inflateRaw = inflateRaw;
exports.ungzip  = inflate;


/***/ }),

/***/ "./node_modules/pako/lib/utils/common.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/utils/common.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var TYPED_OK =  (typeof Uint8Array !== 'undefined') &&
                (typeof Uint16Array !== 'undefined') &&
                (typeof Int32Array !== 'undefined');

function _has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

exports.assign = function (obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (var p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// reduce buffer size, avoiding mem copy
exports.shrinkBuf = function (buf, size) {
  if (buf.length === size) { return buf; }
  if (buf.subarray) { return buf.subarray(0, size); }
  buf.length = size;
  return buf;
};


var fnTyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    // Fallback to ordinary array
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    var i, l, len, pos, chunk, result;

    // calculate data length
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }

    // join chunks
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }

    return result;
  }
};

var fnUntyped = {
  arraySet: function (dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function (chunks) {
    return [].concat.apply([], chunks);
  }
};


// Enable/Disable typed arrays use, for testing
//
exports.setTyped = function (on) {
  if (on) {
    exports.Buf8  = Uint8Array;
    exports.Buf16 = Uint16Array;
    exports.Buf32 = Int32Array;
    exports.assign(exports, fnTyped);
  } else {
    exports.Buf8  = Array;
    exports.Buf16 = Array;
    exports.Buf32 = Array;
    exports.assign(exports, fnUntyped);
  }
};

exports.setTyped(TYPED_OK);


/***/ }),

/***/ "./node_modules/pako/lib/utils/strings.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/utils/strings.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// String encode/decode helpers



var utils = __webpack_require__(/*! ./common */ "./node_modules/pako/lib/utils/common.js");


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, [ 0 ]); } catch (__) { STR_APPLY_OK = false; }
try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
var _utf8len = new utils.Buf8(256);
for (var q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
exports.string2buf = function (str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new utils.Buf8(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper (used in 2 places)
function buf2binstring(buf, len) {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if ((buf.subarray && STR_APPLY_UIA_OK) || (!buf.subarray && STR_APPLY_OK)) {
      return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
    }
  }

  var result = '';
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}


// Convert byte array to binary string
exports.buf2binstring = function (buf) {
  return buf2binstring(buf, buf.length);
};


// Convert binary string (typed, when possible)
exports.binstring2buf = function (str) {
  var buf = new utils.Buf8(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
};


// convert array to string
exports.buf2string = function (buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  var utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
exports.utf8border = function (buf, max) {
  var pos;

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/adler32.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/adler32.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function adler32(adler, buf, len, pos) {
  var s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
}


module.exports = adler32;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/constants.js":
/*!*************************************************!*\
  !*** ./node_modules/pako/lib/zlib/constants.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  //Z_MEM_ERROR:     -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/crc32.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/crc32.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
function makeTable() {
  var c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
}

// Create table on load. Just 255 signed longs. Not a problem.
var crcTable = makeTable();


function crc32(crc, buf, len, pos) {
  var t = crcTable,
      end = pos + len;

  crc ^= -1;

  for (var i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
}


module.exports = crc32;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/deflate.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/deflate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils   = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");
var trees   = __webpack_require__(/*! ./trees */ "./node_modules/pako/lib/zlib/trees.js");
var adler32 = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
var crc32   = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
var msg     = __webpack_require__(/*! ./messages */ "./node_modules/pako/lib/zlib/messages.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
var Z_NO_FLUSH      = 0;
var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
//var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
//var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
//var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;


/* compression levels */
//var Z_NO_COMPRESSION      = 0;
//var Z_BEST_SPEED          = 1;
//var Z_BEST_COMPRESSION    = 9;
var Z_DEFAULT_COMPRESSION = -1;


var Z_FILTERED            = 1;
var Z_HUFFMAN_ONLY        = 2;
var Z_RLE                 = 3;
var Z_FIXED               = 4;
var Z_DEFAULT_STRATEGY    = 0;

/* Possible values of the data_type field (though see inflate()) */
//var Z_BINARY              = 0;
//var Z_TEXT                = 1;
//var Z_ASCII               = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;


/* The deflate compression method */
var Z_DEFLATED  = 8;

/*============================================================================*/


var MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_MEM_LEVEL = 8;


var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
var LITERALS      = 256;
/* number of literal bytes 0..255 */
var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
var D_CODES       = 30;
/* number of distance codes */
var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
var MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

var PRESET_DICT = 0x20;

var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;

var BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
var BS_BLOCK_DONE     = 2; /* block flush performed */
var BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
var BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}

function rank(f) {
  return ((f) << 1) - ((f) > 4 ? 9 : 0);
}

function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output goes
 * through this function so some applications may wish to modify it
 * to avoid allocating a large strm->output buffer and copying into it.
 * (See also read_buf()).
 */
function flush_pending(strm) {
  var s = strm.state;

  //_tr_flush_bits(s);
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}


function flush_block_only(s, last) {
  trees._tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}


function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
function putShortMSB(s, b) {
//  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
}


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  utils.arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
}


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;      /* max hash chain length */
  var scan = s.strstart; /* current string */
  var match;                       /* matched string */
  var len;                           /* length of current match */
  var best_len = s.prev_length;              /* best match length so far */
  var nice_match = s.nice_match;             /* stop if match long enough */
  var limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  var _win = s.window; // shortcut

  var wmask = s.w_mask;
  var prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  var strend = s.strstart + MAX_MATCH;
  var scan_end1  = _win[scan + best_len - 1];
  var scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;

      /* Slide the hash table (could be avoided with 32 bit values
       at the expense of memory usage). We slide even when level == 0
       to keep the hash table consistent if we switch back to level > 0
       later. (Using level 0 permanently is not an optimal usage of
       zlib, so we don't care about this pathological case.)
       */

      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = (m >= _w_size ? m - _w_size : 0);
      } while (--n);

      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = (m >= _w_size ? m - _w_size : 0);
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
      } while (--n);

      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + 1]) & s.hash_mask;
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    var curr = s.strstart + s.lookahead;
//    var init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
}

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 * This function does not insert new strings in the dictionary since
 * uncompressible data is probably not useful. This function is used
 * only for the level=0 compression option.
 * NOTE: this function should be optimized to avoid extra copying from
 * window to pending_buf.
 */
function deflate_stored(s, flush) {
  /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
   * to pending_buf_size, and each stored block has a 5 byte header:
   */
  var max_block_size = 0xffff;

  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }

  /* Copy as much as possible from input to output: */
  for (;;) {
    /* Fill the window as much as possible: */
    if (s.lookahead <= 1) {

      //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
      //  s->block_start >= (long)s->w_size, "slide too late");
//      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
//        s.block_start >= s.w_size)) {
//        throw  new Error("slide too late");
//      }

      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }

      if (s.lookahead === 0) {
        break;
      }
      /* flush the current block */
    }
    //Assert(s->block_start >= 0L, "block gone");
//    if (s.block_start < 0) throw new Error("block gone");

    s.strstart += s.lookahead;
    s.lookahead = 0;

    /* Emit a stored block if pending_buf will be full: */
    var max_start = s.block_start + max_block_size;

    if (s.strstart === 0 || s.strstart >= max_start) {
      /* strstart == 0 is possible when wraparound on 16-bit machine */
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/


    }
    /* Flush if we may have to slide, otherwise block_start may become
     * negative and the data will be gone:
     */
    if (s.strstart - s.block_start >= (s.w_size - MIN_LOOKAHEAD)) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }

  s.insert = 0;

  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }

  if (s.strstart > s.block_start) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_NEED_MORE;
}

/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
function deflate_fast(s, flush) {
  var hash_head;        /* head of the hash chain */
  var bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + 1]) & s.hash_mask;

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
function deflate_slow(s, flush) {
  var hash_head;          /* head of hash chain */
  var bflush;              /* set if current block must be flushed */

  var max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
}


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
function deflate_rle(s, flush) {
  var bflush;            /* set if current block must be flushed */
  var prev;              /* byte at distance one to match */
  var scan, strend;      /* scan goes up to strend for length of run */

  var _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = trees._tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
function deflate_huff(s, flush) {
  var bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
}

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

var configuration_table;

configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
function lm_init(s) {
  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
}


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new utils.Buf16(HEAP_SIZE * 2);
  this.dyn_dtree  = new utils.Buf16((2 * D_CODES + 1) * 2);
  this.bl_tree    = new utils.Buf16((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new utils.Buf16(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new utils.Buf16(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.l_buf = 0;          /* buffer index for literals or lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.last_lit = 0;      /* running index in l_buf */

  this.d_buf = 0;
  /* Buffer index for distances. To simplify the code, d_buf and l_buf have
   * the same number of elements. To use different lengths, an extra flag
   * array would be necessary.
   */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


function deflateResetKeep(strm) {
  var s;

  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status = (s.wrap ? INIT_STATE : BUSY_STATE);
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = Z_NO_FLUSH;
  trees._tr_init(s);
  return Z_OK;
}


function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}


function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  if (strm.state.wrap !== 2) { return Z_STREAM_ERROR; }
  strm.state.gzhead = head;
  return Z_OK;
}


function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR;
  }
  var wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  var s = new DeflateState();

  strm.state = s;
  s.strm = strm;

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new utils.Buf8(s.w_size * 2);
  s.head = new utils.Buf16(s.hash_size);
  s.prev = new utils.Buf16(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  s.pending_buf_size = s.lit_bufsize * 4;

  //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
  //s->pending_buf = (uchf *) overlay;
  s.pending_buf = new utils.Buf8(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);
  s.d_buf = 1 * s.lit_bufsize;

  //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
}

function deflateInit(strm, level) {
  return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}


function deflate(strm, flush) {
  var old_flush, s;
  var beg, val; // for gzip header write only

  if (!strm || !strm.state ||
    flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }

  s = strm.state;

  if (!strm.output ||
      (!strm.input && strm.avail_in !== 0) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }

  s.strm = strm; /* just in case */
  old_flush = s.last_flush;
  s.last_flush = flush;

  /* Write the header */
  if (s.status === INIT_STATE) {

    if (s.wrap === 2) { // GZIP header
      strm.adler = 0;  //crc32(0L, Z_NULL, 0);
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) { // s->gzhead == Z_NULL
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      }
      else {
        put_byte(s, (s.gzhead.text ? 1 : 0) +
                    (s.gzhead.hcrc ? 2 : 0) +
                    (!s.gzhead.extra ? 0 : 4) +
                    (!s.gzhead.name ? 0 : 8) +
                    (!s.gzhead.comment ? 0 : 16)
        );
        put_byte(s, s.gzhead.time & 0xff);
        put_byte(s, (s.gzhead.time >> 8) & 0xff);
        put_byte(s, (s.gzhead.time >> 16) & 0xff);
        put_byte(s, (s.gzhead.time >> 24) & 0xff);
        put_byte(s, s.level === 9 ? 2 :
                    (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                     4 : 0));
        put_byte(s, s.gzhead.os & 0xff);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 0xff);
          put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    }
    else // DEFLATE header
    {
      var header = (Z_DEFLATED + ((s.w_bits - 8) << 4)) << 8;
      var level_flags = -1;

      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= (level_flags << 6);
      if (s.strstart !== 0) { header |= PRESET_DICT; }
      header += 31 - (header % 31);

      s.status = BUSY_STATE;
      putShortMSB(s, header);

      /* Save the adler32 of the preset dictionary: */
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 0xffff);
      }
      strm.adler = 1; // adler32(0L, Z_NULL, 0);
    }
  }

//#ifdef GZIP
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */

      while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    }
    else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    }
    else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      beg = s.pending;  /* start of bytes to update crc */
      //int val;

      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);

      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    }
    else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 0xff);
        put_byte(s, (strm.adler >> 8) & 0xff);
        strm.adler = 0; //crc32(0L, Z_NULL, 0);
        s.status = BUSY_STATE;
      }
    }
    else {
      s.status = BUSY_STATE;
    }
  }
//#endif

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH && s.status !== FINISH_STATE)) {
    var bstate = (s.strategy === Z_HUFFMAN_ONLY) ? deflate_huff(s, flush) :
      (s.strategy === Z_RLE ? deflate_rle(s, flush) :
        configuration_table[s.level].func(s, flush));

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        trees._tr_align(s);
      }
      else if (flush !== Z_BLOCK) { /* FULL_FLUSH or SYNC_FLUSH */

        trees._tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK;
      }
    }
  }
  //Assert(strm->avail_out > 0, "bug2");
  //if (strm.avail_out <= 0) { throw new Error("bug2");}

  if (flush !== Z_FINISH) { return Z_OK; }
  if (s.wrap <= 0) { return Z_STREAM_END; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}

function deflateEnd(strm) {
  var status;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  status = strm.state.status;
  if (status !== INIT_STATE &&
    status !== EXTRA_STATE &&
    status !== NAME_STATE &&
    status !== COMMENT_STATE &&
    status !== HCRC_STATE &&
    status !== BUSY_STATE &&
    status !== FINISH_STATE
  ) {
    return err(strm, Z_STREAM_ERROR);
  }

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var s;
  var str, n;
  var wrap;
  var avail;
  var next;
  var input;
  var tmpDict;

  if (!strm/*== Z_NULL*/ || !strm.state/*== Z_NULL*/) {
    return Z_STREAM_ERROR;
  }

  s = strm.state;
  wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    tmpDict = new utils.Buf8(s.w_size);
    utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = ((s.ins_h << s.hash_shift) ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK;
}


exports.deflateInit = deflateInit;
exports.deflateInit2 = deflateInit2;
exports.deflateReset = deflateReset;
exports.deflateResetKeep = deflateResetKeep;
exports.deflateSetHeader = deflateSetHeader;
exports.deflate = deflate;
exports.deflateEnd = deflateEnd;
exports.deflateSetDictionary = deflateSetDictionary;
exports.deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
exports.deflateBound = deflateBound;
exports.deflateCopy = deflateCopy;
exports.deflateParams = deflateParams;
exports.deflatePending = deflatePending;
exports.deflatePrime = deflatePrime;
exports.deflateTune = deflateTune;
*/


/***/ }),

/***/ "./node_modules/pako/lib/zlib/gzheader.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/gzheader.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

module.exports = GZheader;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inffast.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/inffast.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
var BAD = 30;       /* got a data error -- remain here until reset */
var TYPE = 12;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
module.exports = function inflate_fast(strm, start) {
  var state;
  var _in;                    /* local strm.input */
  var last;                   /* have enough input while in < last */
  var _out;                   /* local strm.output */
  var beg;                    /* inflate()'s initial strm.output */
  var end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  var dmax;                   /* maximum distance from zlib header */
//#endif
  var wsize;                  /* window size or zero if not using window */
  var whave;                  /* valid bytes in the window */
  var wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  var s_window;               /* allocated sliding window, if wsize != 0 */
  var hold;                   /* local strm.hold */
  var bits;                   /* local strm.bits */
  var lcode;                  /* local strm.lencode */
  var dcode;                  /* local strm.distcode */
  var lmask;                  /* mask for first level of length codes */
  var dmask;                  /* mask for first level of distance codes */
  var here;                   /* retrieved table entry */
  var op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  var len;                    /* match length, unused bytes */
  var dist;                   /* match distance */
  var from;                   /* where to copy match from */
  var from_source;


  var input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inflate.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/inflate.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils         = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");
var adler32       = __webpack_require__(/*! ./adler32 */ "./node_modules/pako/lib/zlib/adler32.js");
var crc32         = __webpack_require__(/*! ./crc32 */ "./node_modules/pako/lib/zlib/crc32.js");
var inflate_fast  = __webpack_require__(/*! ./inffast */ "./node_modules/pako/lib/zlib/inffast.js");
var inflate_table = __webpack_require__(/*! ./inftrees */ "./node_modules/pako/lib/zlib/inftrees.js");

var CODES = 0;
var LENS = 1;
var DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/


/* Allowed flush values; see deflate() and inflate() below for details */
//var Z_NO_FLUSH      = 0;
//var Z_PARTIAL_FLUSH = 1;
//var Z_SYNC_FLUSH    = 2;
//var Z_FULL_FLUSH    = 3;
var Z_FINISH        = 4;
var Z_BLOCK         = 5;
var Z_TREES         = 6;


/* Return codes for the compression/decompression functions. Negative values
 * are errors, positive values are used for special but normal events.
 */
var Z_OK            = 0;
var Z_STREAM_END    = 1;
var Z_NEED_DICT     = 2;
//var Z_ERRNO         = -1;
var Z_STREAM_ERROR  = -2;
var Z_DATA_ERROR    = -3;
var Z_MEM_ERROR     = -4;
var Z_BUF_ERROR     = -5;
//var Z_VERSION_ERROR = -6;

/* The deflate compression method */
var Z_DEFLATED  = 8;


/* STATES ====================================================================*/
/* ===========================================================================*/


var    HEAD = 1;       /* i: waiting for magic header */
var    FLAGS = 2;      /* i: waiting for method and flags (gzip) */
var    TIME = 3;       /* i: waiting for modification time (gzip) */
var    OS = 4;         /* i: waiting for extra flags and operating system (gzip) */
var    EXLEN = 5;      /* i: waiting for extra length (gzip) */
var    EXTRA = 6;      /* i: waiting for extra bytes (gzip) */
var    NAME = 7;       /* i: waiting for end of file name (gzip) */
var    COMMENT = 8;    /* i: waiting for end of comment (gzip) */
var    HCRC = 9;       /* i: waiting for header crc (gzip) */
var    DICTID = 10;    /* i: waiting for dictionary check value */
var    DICT = 11;      /* waiting for inflateSetDictionary() call */
var        TYPE = 12;      /* i: waiting for type bits, including last-flag bit */
var        TYPEDO = 13;    /* i: same, but skip check to exit inflate on new block */
var        STORED = 14;    /* i: waiting for stored size (length and complement) */
var        COPY_ = 15;     /* i/o: same as COPY below, but only first time in */
var        COPY = 16;      /* i/o: waiting for input or output to copy stored block */
var        TABLE = 17;     /* i: waiting for dynamic block table lengths */
var        LENLENS = 18;   /* i: waiting for code length code lengths */
var        CODELENS = 19;  /* i: waiting for length/lit and distance code lengths */
var            LEN_ = 20;      /* i: same as LEN below, but only first time in */
var            LEN = 21;       /* i: waiting for length/lit/eob code */
var            LENEXT = 22;    /* i: waiting for length extra bits */
var            DIST = 23;      /* i: waiting for distance code */
var            DISTEXT = 24;   /* i: waiting for distance extra bits */
var            MATCH = 25;     /* o: waiting for output space to copy string */
var            LIT = 26;       /* o: waiting for output space to write literal */
var    CHECK = 27;     /* i: waiting for 32-bit check value */
var    LENGTH = 28;    /* i: waiting for 32-bit length (gzip) */
var    DONE = 29;      /* finished check, done -- remain here until reset */
var    BAD = 30;       /* got a data error -- remain here until reset */
var    MEM = 31;       /* got an inflate() memory error -- remain here until reset */
var    SYNC = 32;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

var MAX_WBITS = 15;
/* 32K LZ77 window */
var DEF_WBITS = MAX_WBITS;


function zswap32(q) {
  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
}


function InflateState() {
  this.mode = 0;             /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib) */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new utils.Buf16(320); /* temporary storage for code lengths */
  this.work = new utils.Buf16(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}

function inflateResetKeep(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
  state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK;
}

function inflateReset(strm) {
  var state;

  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

}

function inflateReset2(strm, windowBits) {
  var wrap;
  var state;

  /* get the state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
}

function inflateInit2(strm, windowBits) {
  var ret;
  var state;

  if (!strm) { return Z_STREAM_ERROR; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.window = null/*Z_NULL*/;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
}

function inflateInit(strm) {
  return inflateInit2(strm, DEF_WBITS);
}


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
var virgin = true;

var lenfix, distfix; // We have no pointers in JS, so keep tables separate

function fixedtables(state) {
  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    var sym;

    lenfix = new utils.Buf32(512);
    distfix = new utils.Buf32(32);

    /* literal/length table */
    sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inflate_table(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inflate_table(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new utils.Buf8(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      utils.arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
}

function inflate(strm, flush) {
  var state;
  var input, output;          // input/output buffers
  var next;                   /* next input INDEX */
  var put;                    /* next output INDEX */
  var have, left;             /* available input and output */
  var hold;                   /* bit buffer */
  var bits;                   /* bits in bit buffer */
  var _in, _out;              /* save starting available input and output */
  var copy;                   /* number of stored or match bytes to copy */
  var from;                   /* where to copy match bytes from */
  var from_source;
  var here = 0;               /* current decoding table entry */
  var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //var last;                   /* parent table entry */
  var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  var len;                    /* length to copy for repeats, bits to drop */
  var ret;                    /* return code */
  var hbuf = new utils.Buf8(4);    /* buffer for gzip header crc calculation */
  var opts;

  var n; // temporary var for NEED_BITS

  var order = /* permutation of code lengths */
    [ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ];


  if (!strm || !strm.state || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        state.flags = 0;           /* expect zlib header */
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        else if (len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }
        state.dmax = 1 << len;
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if (state.flags & 0x0200) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if (state.flags & 0x0200) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if (state.flags & 0x0200) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Array(state.head.extra_len);
              }
              utils.arraySet(
                state.head.extra,
                input,
                next,
                // extra field is limited to 65536 bytes
                // - no need for additional size check
                copy,
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if (state.flags & 0x0200) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if (state.flags & 0x0200) {
            state.check = crc32(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          utils.arraySet(output, input, next, copy, put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inflate_fast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if (_out) {
            strm.adler = state.check =
                /*UPDATE(state.check, put - _out, _out);*/
                (state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if (hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
      state.mode = MEM;
      return Z_MEM_ERROR;
    }
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH) && ret === Z_OK) {
    ret = Z_BUF_ERROR;
  }
  return ret;
}

function inflateEnd(strm) {

  if (!strm || !strm.state /*|| strm->zfree == (free_func)0*/) {
    return Z_STREAM_ERROR;
  }

  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK;
}

function inflateGetHeader(strm, head) {
  var state;

  /* check state */
  if (!strm || !strm.state) { return Z_STREAM_ERROR; }
  state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK;
}

function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;

  var state;
  var dictid;
  var ret;

  /* check state */
  if (!strm /* == Z_NULL */ || !strm.state /* == Z_NULL */) { return Z_STREAM_ERROR; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK;
}

exports.inflateReset = inflateReset;
exports.inflateReset2 = inflateReset2;
exports.inflateResetKeep = inflateResetKeep;
exports.inflateInit = inflateInit;
exports.inflateInit2 = inflateInit2;
exports.inflate = inflate;
exports.inflateEnd = inflateEnd;
exports.inflateGetHeader = inflateGetHeader;
exports.inflateSetDictionary = inflateSetDictionary;
exports.inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
exports.inflateCopy = inflateCopy;
exports.inflateGetDictionary = inflateGetDictionary;
exports.inflateMark = inflateMark;
exports.inflatePrime = inflatePrime;
exports.inflateSync = inflateSync;
exports.inflateSyncPoint = inflateSyncPoint;
exports.inflateUndermine = inflateUndermine;
*/


/***/ }),

/***/ "./node_modules/pako/lib/zlib/inftrees.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/inftrees.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");

var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
//var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

var CODES = 0;
var LENS = 1;
var DISTS = 2;

var lbase = [ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
];

var lext = [ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
];

var dbase = [ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
];

var dext = [ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
];

module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts)
{
  var bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  var len = 0;               /* a code's length in bits */
  var sym = 0;               /* index of code symbols */
  var min = 0, max = 0;          /* minimum and maximum code lengths */
  var root = 0;              /* number of index bits for root table */
  var curr = 0;              /* number of index bits for current table */
  var drop = 0;              /* code bits to drop for sub-table */
  var left = 0;                   /* number of prefix codes available */
  var used = 0;              /* code entries in table used */
  var huff = 0;              /* Huffman code */
  var incr;              /* for incrementing code, index */
  var fill;              /* index for replicating entries */
  var low;               /* low bits for current root entry */
  var mask;              /* mask for low root bits */
  var next;             /* next available space in table */
  var base = null;     /* base value table to use */
  var base_index = 0;
//  var shoextra;    /* extra bits table to use */
  var end;                    /* use base and extra for symbol > end */
  var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  var extra = null;
  var extra_index = 0;

  var here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES) {
    base = extra = work;    /* dummy value--not used */
    end = 19;

  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    end = -1;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS && used > ENOUGH_LENS) ||
    (type === DISTS && used > ENOUGH_DISTS)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS && used > ENOUGH_LENS) ||
        (type === DISTS && used > ENOUGH_DISTS)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/messages.js":
/*!************************************************!*\
  !*** ./node_modules/pako/lib/zlib/messages.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

module.exports = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};


/***/ }),

/***/ "./node_modules/pako/lib/zlib/trees.js":
/*!*********************************************!*\
  !*** ./node_modules/pako/lib/zlib/trees.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

var utils = __webpack_require__(/*! ../utils/common */ "./node_modules/pako/lib/utils/common.js");

/* Public constants ==========================================================*/
/* ===========================================================================*/


//var Z_FILTERED          = 1;
//var Z_HUFFMAN_ONLY      = 2;
//var Z_RLE               = 3;
var Z_FIXED               = 4;
//var Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
var Z_BINARY              = 0;
var Z_TEXT                = 1;
//var Z_ASCII             = 1; // = Z_TEXT
var Z_UNKNOWN             = 2;

/*============================================================================*/


function zero(buf) { var len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES    = 2;
/* The three kinds of block type */

var MIN_MATCH    = 3;
var MAX_MATCH    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

var LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */

var LITERALS      = 256;
/* number of literal bytes 0..255 */

var L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */

var D_CODES       = 30;
/* number of distance codes */

var BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */

var HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */

var MAX_BITS      = 15;
/* All codes must not exceed MAX_BITS bits */

var Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

var MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

var END_BLOCK   = 256;
/* end of block literal code */

var REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

var REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

var REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
var extra_lbits =   /* extra bits for each length code */
  [0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0];

var extra_dbits =   /* extra bits for each distance code */
  [0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];

var extra_blbits =  /* extra bits for each bit length code */
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7];

var bl_order =
  [16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

var DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
var static_ltree  = new Array((L_CODES + 2) * 2);
zero(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

var static_dtree  = new Array(D_CODES * 2);
zero(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

var _dist_code    = new Array(DIST_CODE_LEN);
zero(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

var _length_code  = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

var base_length   = new Array(LENGTH_CODES);
zero(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

var base_dist     = new Array(D_CODES);
zero(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


var static_l_desc;
var static_d_desc;
var static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
function put_short(s, w) {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
}


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
function send_bits(s, value, length) {
  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
}


function send_code(s, c, tree) {
  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
}


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
function gen_bitlen(s, desc)
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */
{
  var tree            = desc.dyn_tree;
  var max_code        = desc.max_code;
  var stree           = desc.stat_desc.static_tree;
  var has_stree       = desc.stat_desc.has_stree;
  var extra           = desc.stat_desc.extra_bits;
  var base            = desc.stat_desc.extra_base;
  var max_length      = desc.stat_desc.max_length;
  var h;              /* heap index */
  var n, m;           /* iterate over the tree elements */
  var bits;           /* bit length */
  var xbits;          /* extra bits */
  var f;              /* frequency */
  var overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Trace((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
}


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
function gen_codes(tree, max_code, bl_count)
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */
{
  var next_code = new Array(MAX_BITS + 1); /* next code value for each bit length */
  var code = 0;              /* running code value */
  var bits;                  /* bit index */
  var n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = (code + bl_count[bits - 1]) << 1;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    var len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
}


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
function tr_static_init() {
  var n;        /* iterates over tree elements */
  var bits;     /* bit counter */
  var length;   /* length value */
  var code;     /* code value */
  var dist;     /* distance index */
  var bl_count = new Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES, MAX_BL_BITS);

  //static_init_done = true;
}


/* ===========================================================================
 * Initialize a new block.
 */
function init_block(s) {
  var n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
function bi_windup(s)
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}

/* ===========================================================================
 * Copy a stored block, storing first the length and its
 * one's complement if requested.
 */
function copy_block(s, buf, len, header)
//DeflateState *s;
//charf    *buf;    /* the input data */
//unsigned len;     /* its length */
//int      header;  /* true if block header must be written */
{
  bi_windup(s);        /* align on byte boundary */

  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
//  while (len--) {
//    put_byte(s, *buf++);
//  }
  utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
}

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
function pqdownheap(s, tree, k)
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */
{
  var v = s.heap[k];
  var j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
}


// inlined manually
// var SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
function compress_block(s, ltree, dtree)
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */
{
  var dist;           /* distance of matched string */
  var lc;             /* match length or unmatched char (if dist == 0) */
  var lx = 0;         /* running index in l_buf */
  var code;           /* the code to send */
  var extra;          /* number of extra bits to send */

  if (s.last_lit !== 0) {
    do {
      dist = (s.pending_buf[s.d_buf + lx * 2] << 8) | (s.pending_buf[s.d_buf + lx * 2 + 1]);
      lc = s.pending_buf[s.l_buf + lx];
      lx++;

      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
      //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
      //       "pendingBuf overflow");

    } while (lx < s.last_lit);
  }

  send_code(s, END_BLOCK, ltree);
}


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
function build_tree(s, desc)
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */
{
  var tree     = desc.dyn_tree;
  var stree    = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems    = desc.stat_desc.elems;
  var n, m;          /* iterate over heap elements */
  var max_code = -1; /* largest code with non zero frequency */
  var node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
}


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
function scan_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
function send_tree(s, tree, max_code)
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */
{
  var n;                     /* iterates over all tree elements */
  var prevlen = -1;          /* last emitted length */
  var curlen;                /* length of current code */

  var nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  var count = 0;             /* repeat count of the current code */
  var max_count = 7;         /* max repeat count */
  var min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
function build_bl_tree(s) {
  var max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
}


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
function send_all_trees(s, lcodes, dcodes, blcodes)
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */
{
  var rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
}


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "black list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
function detect_data_type(s) {
  /* black_mask is the bit mask of black-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  var black_mask = 0xf3ffc07f;
  var n;

  /* Check for non-textual ("black-listed") bytes. */
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if ((black_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("white-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "black-listed" or "white-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
}


var static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
function _tr_init(s)
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
}


/* ===========================================================================
 * Send a stored block
 */
function _tr_stored_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  copy_block(s, buf, stored_len, true); /* with header */
}


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and output the encoded block to the zip file.
 */
function _tr_flush_block(s, buf, stored_len, last)
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */
{
  var opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  var max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->last_lit));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
}

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
function _tr_tally(s, dist, lc)
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
{
  //var out_length, in_length, dcode;

  s.pending_buf[s.d_buf + s.last_lit * 2]     = (dist >>> 8) & 0xff;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;

  s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
  s.last_lit++;

  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility

//#ifdef TRUNCATE_BLOCK
//  /* Try to guess if it is profitable to stop the current block here */
//  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
//    /* Compute an upper bound for the compressed length */
//    out_length = s.last_lit*8;
//    in_length = s.strstart - s.block_start;
//
//    for (dcode = 0; dcode < D_CODES; dcode++) {
//      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
//    }
//    out_length >>>= 3;
//    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
//    //       s->last_lit, in_length, out_length,
//    //       100L - out_length*100L/in_length));
//    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
//      return true;
//    }
//  }
//#endif

  return (s.last_lit === s.lit_bufsize - 1);
  /* We avoid equality with lit_bufsize because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */
}

exports._tr_init  = _tr_init;
exports._tr_stored_block = _tr_stored_block;
exports._tr_flush_block  = _tr_flush_block;
exports._tr_tally = _tr_tally;
exports._tr_align = _tr_align;


/***/ }),

/***/ "./node_modules/pako/lib/zlib/zstream.js":
/*!***********************************************!*\
  !*** ./node_modules/pako/lib/zlib/zstream.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

module.exports = ZStream;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/main/components/MainComponent.vue?vue&type=template&id=9d884d30&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/main/components/MainComponent.vue?vue&type=template&id=9d884d30& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      staticClass: "app",
      class: { "menu-collapsed": !_vm.$menuManager.data.open },
    },
    [
      _c("toolbar"),
      _vm._v(" "),
      _c("view-stack-dropdown"),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "sidebar",
          class: { "menu-collapsed": !_vm.$menuManager.data.open },
        },
        [
          _c("div", {
            staticClass: "mobile-branding-container",
            style: _vm.brandingImageStyles,
            on: { click: _vm.home },
          }),
          _vm._v(" "),
          _c("app-menu", {
            class: { "menu-collapsed": !_vm.$menuManager.data.open },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "toolbar-viewstack-container",
          class: { "menu-collapsed": !_vm.$menuManager.data.open },
        },
        [_c("view-stack")],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue?vue&type=template&id=07ec4bea&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/menu/components/MenuDropdownComponent.vue?vue&type=template&id=07ec4bea& ***!
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
  return _c("div", { staticClass: "menu-dropdown" }, [
    _c(
      "div",
      { staticClass: "menu-dropdown-child menu-dropdown-input" },
      [
        _c("v-select", {
          attrs: {
            clearable: false,
            label: "label",
            placeholder: _vm.data.label,
            value: _vm.data.value,
            options: _vm.data.choices,
            searchable: false,
          },
          on: { input: _vm.change },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue?vue&type=template&id=0a3871c9&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/menu/components/MenuItemComponent.vue?vue&type=template&id=0a3871c9& ***!
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
    "a",
    {
      class: {
        "menu-child-title menu-item": true,
        selected: _vm.data.selected,
      },
      attrs: { href: _vm.data.mainUrl },
      on: {
        click: function ($event) {
          return _vm.open($event)
        },
      },
    },
    [
      _c("div", { staticClass: "symbol-container" }, [
        _c("i", {
          class: ["icon", _vm.icon],
          attrs: { "aria-hidden": "true" },
        }),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "label-container" }, [
        _vm._v("\n        " + _vm._s(_vm.label) + "\n    "),
      ]),
      _vm._v(" "),
      _vm.notification
        ? _c("menu-notification", { attrs: { data: _vm.notification } })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/menu/components/MenuListComponent.vue?vue&type=template&id=6201d61e&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/menu/components/MenuListComponent.vue?vue&type=template&id=6201d61e& ***!
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
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.outside,
          expression: "outside",
        },
      ],
      class: { "menu-list": true, selected: _vm.data.selected },
    },
    [
      _c(
        "div",
        {
          staticClass: "menu-child-title menu-list-child menu-list-title",
          on: { click: _vm.toggle },
        },
        [
          _c("div", { staticClass: "symbol-container" }, [
            _c("i", {
              class: ["icon", _vm.icon],
              attrs: { "aria-hidden": "true" },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "label-container" }, [
            _vm._v("\n            " + _vm._s(_vm.label) + "\n        "),
          ]),
          _vm._v(" "),
          _vm.notification
            ? _c("menu-notification", { attrs: { data: _vm.notification } })
            : _vm._e(),
          _vm._v(" "),
          _c("i", {
            class: [
              "open-indicator",
              "icon",
              { "icon-keyboard_arrow_up": _vm.data.isOpen },
              { "icon-keyboard_arrow_down": !_vm.data.isOpen },
            ],
            attrs: { "aria-hidden": "true" },
          }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.data.isOpen,
              expression: "data.isOpen",
            },
          ],
          staticClass: "menu-list-child menu-list-items",
        },
        [
          _vm._l(_vm.data.children(), function (item) {
            return [
              _c(item.component, { tag: "component", attrs: { data: item } }),
            ]
          }),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue?vue&type=template&id=565ee7c5&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/toolbar/widget/components/IconWidgetComponent.vue?vue&type=template&id=565ee7c5& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
      on: {
        click: function ($event) {
          return _vm.open()
        },
      },
    },
    [_c("i", { class: _vm.getIcon() })]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue?vue&type=template&id=3262be10&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/toolbar/widget/components/QuickMenuWidgetComponent.vue?vue&type=template&id=3262be10& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.close,
          expression: "close",
        },
      ],
      staticClass: "toolbar-dropdown",
      class: { selected: _vm.isOpen },
    },
    [
      _c(
        "div",
        { staticClass: "toolbar-dropdown-title", on: { click: _vm.toggle } },
        [
          _c("i", { class: _vm.getIcon() }),
          _vm._v(" "),
          _c("i", {
            class: [
              "open-indicator",
              "icon icon-keyboard_arrow_down",
              { "icon-keyboard_arrow_up": _vm.isOpen },
            ],
            attrs: { "aria-hidden": "true" },
          }),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isOpen,
              expression: "isOpen",
            },
          ],
          staticClass: "toolbar-dropdown-menu",
        },
        [
          _vm._l(_vm.data.menu, function (menu) {
            return [
              _c(
                "div",
                {
                  staticClass: "toolbar-dropdown-item",
                  on: {
                    click: function ($event) {
                      return _vm.open(menu)
                    },
                  },
                },
                [_vm._v(_vm._s(menu.label))]
              ),
            ]
          }),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=template&id=d8136496&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/view-stack/components/AjaxViewComponent.vue?vue&type=template&id=d8136496&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
  return _c("iframe", { attrs: { src: _vm.data.url } })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=template&id=90ca6f1e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/view-stack/components/IframeViewComponent.vue?vue&type=template&id=90ca6f1e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("iframe", { ref: "frame", attrs: { src: _vm.url } })
  },
]
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbWFpbi9NYWluQXBwLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tYWluL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21haW4vY29tcG9uZW50cy9NYWluQ29tcG9uZW50LnZ1ZT9hNGExIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tYWluL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC52dWU/NzNiNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbWVudS9NZW51RGF0YS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbWVudS9NZW51TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbWVudS9jb21wb25lbnRzL01lbnVEcm9wZG93bkNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21lbnUvY29tcG9uZW50cy9NZW51RHJvcGRvd25Db21wb25lbnQudnVlP2JmODkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21lbnUvY29tcG9uZW50cy9NZW51RHJvcGRvd25Db21wb25lbnQudnVlPzc5MmUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21lbnUvY29tcG9uZW50cy9NZW51SXRlbUNvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21lbnUvY29tcG9uZW50cy9NZW51SXRlbUNvbXBvbmVudC52dWU/MzkyMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbWVudS9jb21wb25lbnRzL01lbnVJdGVtQ29tcG9uZW50LnZ1ZT9kYmNhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tZW51L2NvbXBvbmVudHMvTWVudUxpc3RDb21wb25lbnQudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tZW51L2NvbXBvbmVudHMvTWVudUxpc3RDb21wb25lbnQudnVlP2M3YzgiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21lbnUvY29tcG9uZW50cy9NZW51TGlzdENvbXBvbmVudC52dWU/OGEyMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbWVudS9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbWVudS9mYWN0b3J5L01lbnVEcm9wZG93bkZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21lbnUvZmFjdG9yeS9NZW51SXRlbUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21lbnUvZmFjdG9yeS9NZW51TGlzdEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21lbnUvbW9kZWwvQWJzdHJhY3RNZW51LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tZW51L21vZGVsL01lbnVEcm9wZG93bi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbWVudS9tb2RlbC9NZW51SXRlbS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbWVudS9tb2RlbC9NZW51TGlzdC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbm9kZV9tb2R1bGVzL0Blbmhhdm8vY29yZS9SZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbm9kZV9tb2R1bGVzL0Blbmhhdm8vY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvc3RhdGUvU3RhdGVNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9XaWRnZXRNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9XaWRnZXRSZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdG9vbGJhci93aWRnZXQvY29tcG9uZW50cy9JY29uV2lkZ2V0Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdG9vbGJhci93aWRnZXQvY29tcG9uZW50cy9JY29uV2lkZ2V0Q29tcG9uZW50LnZ1ZT9kOTdiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9jb21wb25lbnRzL0ljb25XaWRnZXRDb21wb25lbnQudnVlP2I0NTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3Rvb2xiYXIvd2lkZ2V0L2NvbXBvbmVudHMvUXVpY2tNZW51V2lkZ2V0Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdG9vbGJhci93aWRnZXQvY29tcG9uZW50cy9RdWlja01lbnVXaWRnZXRDb21wb25lbnQudnVlPzc1YjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3Rvb2xiYXIvd2lkZ2V0L2NvbXBvbmVudHMvUXVpY2tNZW51V2lkZ2V0Q29tcG9uZW50LnZ1ZT85NzQ1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdG9vbGJhci93aWRnZXQvZmFjdG9yeS9JY29uV2lkZ2V0RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdG9vbGJhci93aWRnZXQvZmFjdG9yeS9OZXdXaW5kb3dXaWRnZXRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9mYWN0b3J5L1F1aWNrTWVudVdpZGdldEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3Rvb2xiYXIvd2lkZ2V0L21vZGVsL0Fic3RyYWN0V2lkZ2V0LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9tb2RlbC9JY29uV2lkZ2V0LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9tb2RlbC9OZXdXaW5kb3dXaWRnZXQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3Rvb2xiYXIvd2lkZ2V0L21vZGVsL1F1aWNrTWVudVdpZGdldC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9BcnJhbmdlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9EYXRhU3RvcmFnZUVudHJ5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL0RhdGFTdG9yYWdlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9GcmFtZVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svR2xvYmFsRGF0YVN0b3JhZ2VNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL1ZpZXdSZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9WaWV3U3RhY2sudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svY29tcG9uZW50cy9BamF4Vmlld0NvbXBvbmVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svY29tcG9uZW50cy9BamF4Vmlld0NvbXBvbmVudC52dWU/ODkwNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9jb21wb25lbnRzL0FqYXhWaWV3Q29tcG9uZW50LnZ1ZT9hMmEwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2NvbXBvbmVudHMvQWpheFZpZXdDb21wb25lbnQudnVlPzBkZjciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svY29tcG9uZW50cy9JZnJhbWVWaWV3Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9jb21wb25lbnRzL0lmcmFtZVZpZXdDb21wb25lbnQudnVlPzMyM2EiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svY29tcG9uZW50cy9JZnJhbWVWaWV3Q29tcG9uZW50LnZ1ZT9mZGIwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2NvbXBvbmVudHMvSWZyYW1lVmlld0NvbXBvbmVudC52dWU/ODAzMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DbGVhckV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0NsZWFyZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9SZW1vdmVkRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZmFjdG9yeS9BamF4Vmlld0ZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZmFjdG9yeS9JZnJhbWVWaWV3RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9mYWN0b3J5L1ZpZXdGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL21vZGVsL0FqYXhWaWV3LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL21vZGVsL0lmcmFtZVZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svbW9kZWwvVmlldy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9jb3JlL1JlZ2lzdHJ5RW50cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21haW4vY29tcG9uZW50cy9NYWluQ29tcG9uZW50LnZ1ZT80NWYzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tZW51L2NvbXBvbmVudHMvTWVudURyb3Bkb3duQ29tcG9uZW50LnZ1ZT9iY2FjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tZW51L2NvbXBvbmVudHMvTWVudUl0ZW1Db21wb25lbnQudnVlPzBkN2YiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21lbnUvY29tcG9uZW50cy9NZW51TGlzdENvbXBvbmVudC52dWU/YzkyYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdG9vbGJhci93aWRnZXQvY29tcG9uZW50cy9JY29uV2lkZ2V0Q29tcG9uZW50LnZ1ZT82NGY5Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9jb21wb25lbnRzL1F1aWNrTWVudVdpZGdldENvbXBvbmVudC52dWU/ODBhNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9jb21wb25lbnRzL0FqYXhWaWV3Q29tcG9uZW50LnZ1ZT82YjBhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2NvbXBvbmVudHMvSWZyYW1lVmlld0NvbXBvbmVudC52dWU/MDg1NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9jb21wb25lbnRzL0FqYXhWaWV3Q29tcG9uZW50LnZ1ZT9iYWQzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2NvbXBvbmVudHMvSWZyYW1lVmlld0NvbXBvbmVudC52dWU/YTVjNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFrby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFrby9saWIvZGVmbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFrby9saWIvaW5mbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFrby9saWIvdXRpbHMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi91dGlscy9zdHJpbmdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL2FkbGVyMzIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL2NyYzMyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL2RlZmxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvZ3poZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Bha28vbGliL3psaWIvaW5mZmFzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFrby9saWIvemxpYi9pbmZsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL2luZnRyZWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL21lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL3RyZWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYWtvL2xpYi96bGliL3pzdHJlYW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21haW4vY29tcG9uZW50cy9NYWluQ29tcG9uZW50LnZ1ZT81OTcxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tZW51L2NvbXBvbmVudHMvTWVudURyb3Bkb3duQ29tcG9uZW50LnZ1ZT9jMGNkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9tZW51L2NvbXBvbmVudHMvTWVudUl0ZW1Db21wb25lbnQudnVlPzk5N2YiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21lbnUvY29tcG9uZW50cy9NZW51TGlzdENvbXBvbmVudC52dWU/OTcwYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdG9vbGJhci93aWRnZXQvY29tcG9uZW50cy9JY29uV2lkZ2V0Q29tcG9uZW50LnZ1ZT8yYTFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9jb21wb25lbnRzL1F1aWNrTWVudVdpZGdldENvbXBvbmVudC52dWU/YzhlZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9jb21wb25lbnRzL0FqYXhWaWV3Q29tcG9uZW50LnZ1ZT9mMDEyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2NvbXBvbmVudHMvSWZyYW1lVmlld0NvbXBvbmVudC52dWU/MzI5MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUUE7QUFBQTtBQUFBO0FBV0kscUJBQ0ksWUFESixFQUVJLFNBRkosRUFHSSxXQUhKLEVBSUksWUFKSixFQUtJLGtCQUxKLEVBTUksYUFOSixFQU9JLGlCQVBKLEVBT2lEO0FBRTdDLFdBQUssSUFBTCxHQUFZO0FBQ1IsZ0JBQVEsRUFBRTtBQURGLE9BQVo7QUFJQSxXQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxXQUFLLGtCQUFMLEdBQTBCLGtCQUExQjtBQUNBLFdBQUssV0FBTCxHQUFtQixXQUFuQjtBQUNBLFdBQUssWUFBTCxHQUFvQixZQUFwQjtBQUNBLFdBQUssYUFBTCxHQUFxQixhQUFyQjtBQUNBLFdBQUssaUJBQUwsR0FBeUIsaUJBQXpCO0FBQ0g7O0FBRUQ7QUFD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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMEJBQTBCOztBQUUzRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixhQUFhOztBQUViLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFt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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUJBQXVCO0FBQ3BEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsdUJBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUIsMkJBQTJCLGFBQWE7QUFDeEMsb0JBQW9CLHFCQUFxQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBOztBQUVBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqMURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN6RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFdBQVc7QUFDWCxXQUFXO0FBQ1gsVUFBVTtBQUNWLFVBQVU7QUFDVjtBQUNBLFdBQVc7QUFDWDtBQUNBLFlBQVk7QUFDWixZQUFZO0FBQ1osWUFBWTtBQUNaO0FBQ0EsZUFBZTtBQUNmLFdBQVc7QUFDWCxXQUFXO0FBQ1gsWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1osWUFBWTtBQUNaLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxVQUFVO0FBQ1YsV0FBVztBQUNYLFdBQVc7QUFDWDs7O0FBR0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLEdBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1Qiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4VmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG1CQUFPLENBQUMsZ0VBQWlCO0FBQzdDLG9CQUFvQixtQkFBTyxDQUFDLDBEQUFXO0FBQ3ZDLG9CQUFvQixtQkFBTyxDQUFDLHNEQUFTO0FBQ3JDLG9CQUFvQixtQkFBTyxDQUFDLDBEQUFXO0FBQ3ZDLG9CQUFvQixtQkFBTyxDQUFDLDREQUFZOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0EsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsY0FBYztBQUNkLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QixzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6Qix3QkFBd0I7QUFDeEIsMkJBQTJCO0FBQzNCLHlCQUF5QjtBQUN6Qiw0QkFBNEI7QUFDNUIsMEJBQTBCO0FBQzFCLHdCQUF3QjtBQUN4QixrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjs7QUFFakI7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsZ0JBQWdCO0FBQ2hCLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIscUJBQXFCOztBQUVyQjtBQUNBLGdCQUFnQjtBQUNoQixnQkFBZ0I7O0FBRWhCO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjs7QUFFbEI7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0Esc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsb0JBQW9COztBQUVwQjtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQixtQkFBbUI7O0FBRW5CLG1DQUFtQztBQUNuQyxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkIsdUJBQXVCO0FBQ3BEO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qix1QkFBdUI7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHVCQUF1QjtBQUNyQyxzQkFBc0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUMsdUJBQXVCLHVCQUF1QjtBQUM5Qyx1QkFBdUIsdUJBQXVCO0FBQzlDLHVCQUF1Qix1QkFBdUI7O0FBRTlDLHVFQUF1RSxVQUFVOztBQUVqRjtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1Qjs7QUFFN0MsdUVBQXVFLFVBQVU7O0FBRWpGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlCQUFpQjtBQUN6RCxzQ0FBc0MscUJBQXFCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYLFVBQVU7QUFDVixpQkFBaUI7QUFDakIsV0FBVztBQUNYLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsV0FBVztBQUNYLFdBQVc7QUFDWDtBQUNBLGVBQWU7QUFDZixtQ0FBbUM7QUFDbkMsYUFBYTtBQUNiLG1DQUFtQztBQUNuQyxVQUFVO0FBQ1YsVUFBVTtBQUNWLCtCQUErQjtBQUMvQjs7QUFFQSxRQUFROztBQUVSO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHFCQUFxQixFQUFFOzs7QUFHbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsNkJBQTZCLGlCQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUJBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsaUJBQWlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsYUFBYTtBQUN6Qyw0QkFBNEIsYUFBYTtBQUN6QywyQkFBMkIsaUJBQWlCO0FBQzVDLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsT0FBTzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLE9BQU87QUFDekM7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRCxPQUFPO0FBQ3pEO0FBQ0EsNkJBQTZCLGlCQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixvRUFBb0U7QUFDcEU7QUFDQTtBQUNBOztBQUVBLG9DQUFvQyxPQUFPO0FBQzNDO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsT0FBTztBQUN6RDtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGlCQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlCQUFpQjtBQUMxQztBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MscUJBQXFCO0FBQzNELDhCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHFDQUFxQyxrQkFBa0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsYUFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7QUFDQSx5QkFBeUIsaUJBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUJBQWlCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE2Qix1QkFBdUI7QUFDcEQ7QUFDQSwrQkFBK0IsdUJBQXVCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZELHVCQUF1QjtBQUNwRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWU7QUFDZix3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbmhEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG1CQUFPLENBQUMsZ0VBQWlCOztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekIsY0FBYztBQUNkLGNBQWM7QUFDZCx1QkFBdUI7QUFDdkIsZUFBZTtBQUNmLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTtBQUNmLGVBQWU7QUFDZixlQUFlO0FBQ2YsV0FBVztBQUNYLFdBQVc7QUFDWCxVQUFVO0FBQ1YsV0FBVztBQUNYLFdBQVc7QUFDWCxrQkFBa0I7QUFDbEI7QUFDQSxpQkFBaUI7QUFDakIsVUFBVTtBQUNWLDJDQUEyQyxlQUFlO0FBQzFELDBDQUEwQyxlQUFlO0FBQ3pEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsVUFBVTtBQUMvQiwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixzQ0FBc0MsMkJBQTJCO0FBQ2pFLHVDQUF1QztBQUN2Qyx3Q0FBd0M7QUFDeEM7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGVBQWU7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHLE9BQU87QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWCxVQUFVO0FBQ1YsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQixjQUFjO0FBQ2QsV0FBVztBQUNYLFdBQVc7QUFDWCxtQkFBbUI7QUFDbkIsa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdFZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsWUFBWSxtQkFBTyxDQUFDLGdFQUFpQjs7QUFFckM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7OztBQUdBLG9CQUFvQixzQkFBc0IscUJBQXFCLGNBQWMsRUFBRTs7QUFFL0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsNEJBQTRCO0FBQzVCLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsMkJBQTJCO0FBQzNCLG9CQUFvQjtBQUNwQiw2QkFBNkI7QUFDN0I7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsV0FBVztBQUNYLFdBQVc7QUFDWCxZQUFZO0FBQ1osUUFBUTtBQUNSLG1CQUFtQjs7QUFFbkIsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQzs7QUFFL0MsMEJBQTBCLGVBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsVUFBVSxFQUFFOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUMsdUJBQXVCO0FBQ3ZCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFlBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQjtBQUNBLDBDQUEwQztBQUMxQyxlQUFlO0FBQ2YsV0FBVztBQUNYLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsV0FBVztBQUNYLGFBQWE7QUFDYixXQUFXO0FBQ1gsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0EsZUFBZSw4QkFBOEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQjtBQUNBLGVBQWUsOEJBQThCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFFBQVEsZ0JBQWdCO0FBQ3hCO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0EsYUFBYSxhQUFhLFFBQVEsaUNBQWlDO0FBQ25FLGFBQWEsYUFBYSxRQUFRLGlDQUFpQztBQUNuRSxhQUFhLGNBQWMsT0FBTywrQkFBK0I7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEI7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsWUFBWTtBQUNaO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTzs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0I7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULGFBQWE7QUFDYixXQUFXO0FBQ1gsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsb0JBQW9CO0FBQ3BCLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsV0FBVztBQUN4QjtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVEsT0FBTyx3QkFBd0I7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qjs7QUFFOUIsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQjtBQUNBLFFBQVE7QUFDUixtQkFBbUI7QUFDbkIsYUFBYTs7QUFFYix3Q0FBd0M7O0FBRXhDLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEIsb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDs7QUFFaEQsYUFBYSxlQUFlO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUEsS0FBSzs7QUFFTCwrQkFBK0Isa0NBQWtDO0FBQ2pFOztBQUVBLEtBQUs7QUFDTDs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQjtBQUNBLFFBQVE7QUFDUixtQkFBbUI7QUFDbkIsYUFBYTs7QUFFYix3Q0FBd0M7O0FBRXhDLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEIsb0JBQW9COztBQUVwQiwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxlQUFlO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLO0FBQ0wsVUFBVSxpQ0FBaUMsRUFBRTs7QUFFN0MsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0EsZ0NBQWdDO0FBQ2hDLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDOztBQUVBLHdDQUF3QztBQUN4QztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsSUFBSSxNQUFNLEdBQUcsTUFBTSxHQUFHO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLElBQUksTUFBTSxJQUFJO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1g7QUFDQSx3REFBd0Q7QUFDeEQsdUNBQXVDO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixpQkFBaUI7QUFDakIsV0FBVztBQUNYO0FBQ0EsNEJBQTRCO0FBQzVCLHNCQUFzQjs7QUFFdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0Msd0JBQXdCOztBQUUxRCxHQUFHO0FBQ0g7QUFDQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyc0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0RBQWdEO0FBQzlELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0RBQWdEO0FBQ2xFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkMsV0FBVztBQUNYO0FBQ0E7QUFDQSxvQkFBb0IsZ0RBQWdEO0FBQ3BFLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdEQUFnRDtBQUNsRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQkFBK0I7QUFDbkQ7QUFDQTtBQUNBLE9BQU8seURBQXlEO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxlQUFlLG9CQUFvQjtBQUNuQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGNBQWMseUJBQXlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsaUJBQWlCLGtDQUFrQztBQUNuRDtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGlCQUFpQixpQ0FBaUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUyx5QkFBeUIsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxjQUFjLGlEQUFpRDtBQUMvRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixrQ0FBa0M7QUFDdkQ7QUFDQTtBQUNBLHNCQUFzQix3QkFBd0I7QUFDOUMsYUFBYTtBQUNiO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFNBQVMseUJBQXlCLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0Q0FBNEM7QUFDM0QsZUFBZSwrQ0FBK0M7QUFDOUQ7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywyQkFBMkIsYUFBYSxFQUFFO0FBQzVFO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsY0FBYyx1QkFBdUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxjQUFjLHVCQUF1QjtBQUNyQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUyw2Q0FBNkMsb0JBQW9CLEVBQUU7QUFDNUU7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVDQUF1QztBQUN0RDtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUMsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsb0JBQW9CLEVBQUU7QUFDdEQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCLGVBQWUsRUFBRTtBQUNqRSxHQUFHO0FBQ0g7QUFDQSIsImZpbGUiOiJ2ZW5kb3Jzfm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgVmlld1N0YWNrIGZyb20gJ0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svVmlld1N0YWNrJztcbmltcG9ydCBNZW51TWFuYWdlciBmcm9tICdAZW5oYXZvL2FwcC9tZW51L01lbnVNYW5hZ2VyJztcbmltcG9ydCBCcmFuZGluZyBmcm9tICdAZW5oYXZvL2FwcC9tYWluL0JyYW5kaW5nJztcbmltcG9ydCBTdGF0ZU1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3N0YXRlL1N0YXRlTWFuYWdlclwiO1xuaW1wb3J0IERhdGFTdG9yYWdlTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9EYXRhU3RvcmFnZU1hbmFnZXJcIjtcbmltcG9ydCBXaWRnZXRNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9XaWRnZXRNYW5hZ2VyXCI7XG5pbXBvcnQgQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9Db21wb25lbnRSZWdpc3RyeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluQXBwXG57XG4gICAgcHVibGljIGRhdGE6IGFueTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlld1N0YWNrOiBWaWV3U3RhY2s7XG4gICAgcHJpdmF0ZSByZWFkb25seSBtZW51TWFuYWdlcjogTWVudU1hbmFnZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGF0ZU1hbmFnZXI6IFN0YXRlTWFuYWdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGFTdG9yYWdlTWFuYWdlcjogRGF0YVN0b3JhZ2VNYW5hZ2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd2lkZ2V0TWFuYWdlcjogV2lkZ2V0TWFuYWdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBicmFuZGluZ0RhdGE6IEJyYW5kaW5nLFxuICAgICAgICB2aWV3U3RhY2s6IFZpZXdTdGFjayxcbiAgICAgICAgbWVudU1hbmFnZXI6IE1lbnVNYW5hZ2VyLFxuICAgICAgICBzdGF0ZU1hbmFnZXI6IFN0YXRlTWFuYWdlcixcbiAgICAgICAgZGF0YVN0b3JhZ2VNYW5hZ2VyOiBEYXRhU3RvcmFnZU1hbmFnZXIsXG4gICAgICAgIHdpZGdldE1hbmFnZXI6IFdpZGdldE1hbmFnZXIsXG4gICAgICAgIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZVxuICAgICkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7XG4gICAgICAgICAgICBicmFuZGluZzogYnJhbmRpbmdEYXRhXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy52aWV3U3RhY2sgPSB2aWV3U3RhY2s7XG4gICAgICAgIHRoaXMuZGF0YVN0b3JhZ2VNYW5hZ2VyID0gZGF0YVN0b3JhZ2VNYW5hZ2VyO1xuICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyID0gbWVudU1hbmFnZXI7XG4gICAgICAgIHRoaXMuc3RhdGVNYW5hZ2VyID0gc3RhdGVNYW5hZ2VyO1xuICAgICAgICB0aGlzLndpZGdldE1hbmFnZXIgPSB3aWRnZXRNYW5hZ2VyO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0gY29tcG9uZW50UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlclN0b3JlKCdtYWluQXBwJywgdGhpcyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJEYXRhKHRoaXMuZGF0YSk7XG5cbiAgICAgICAgdGhpcy53aWRnZXRNYW5hZ2VyLmluaXQoKTtcbiAgICAgICAgdGhpcy5tZW51TWFuYWdlci5pbml0KCk7XG4gICAgICAgIHRoaXMudmlld1N0YWNrLmluaXQoKTtcblxuICAgICAgICBpZighdGhpcy52aWV3U3RhY2suaGFzVmlld3MoKSkge1xuICAgICAgICAgICAgdGhpcy5tZW51TWFuYWdlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpOiBhbnlcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuXG4gICAgZ2V0Vmlld1N0YWNrKCk6IFZpZXdTdGFja1xuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld1N0YWNrO1xuICAgIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01haW5Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlkODg0ZDMwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01haW5Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWluQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9yZXBvcy9wcml2YXQvamFwYW5lc2UtdGV4dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzlkODg0ZDMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzlkODg0ZDMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzlkODg0ZDMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWluQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZDg4NGQzMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5ZDg4NGQzMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21haW4vY29tcG9uZW50cy9NYWluQ29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFpbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01haW5Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTlkODg0ZDMwJlwiIiwiaW1wb3J0IE1lbnVJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL21lbnUvTWVudUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51RGF0YVxue1xuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8TWVudUludGVyZmFjZT47XG4gICAgcHVibGljIG9wZW46IGJvb2xlYW47XG4gICAgcHVibGljIGN1c3RvbUNoYW5nZTogYm9vbGVhbjtcbn0iLCJpbXBvcnQgTWVudURhdGEgZnJvbSBcIkBlbmhhdm8vYXBwL21lbnUvTWVudURhdGFcIjtcbmltcG9ydCBNZW51UmVnaXN0cnkgZnJvbSBcIkBlbmhhdm8vYXBwL21lbnUvTWVudVJlZ2lzdHJ5XCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBNZW51SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9tZW51L01lbnVJbnRlcmZhY2VcIjtcbmltcG9ydCBHbG9iYWxEYXRhU3RvcmFnZU1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svR2xvYmFsRGF0YVN0b3JhZ2VNYW5hZ2VyXCI7XG5pbXBvcnQgQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9Db21wb25lbnRSZWdpc3RyeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51TWFuYWdlclxue1xuICAgIHB1YmxpYyBkYXRhOiBNZW51RGF0YTtcblxuICAgIHByaXZhdGUgcmVnaXN0cnk6IE1lbnVSZWdpc3RyeTtcbiAgICBwcml2YXRlIGRhdGFTdG9yYWdlOiBHbG9iYWxEYXRhU3RvcmFnZU1hbmFnZXI7XG4gICAgcHJpdmF0ZSBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBNZW51RGF0YSwgcmVnaXN0cnk6IE1lbnVSZWdpc3RyeSwgZGF0YVN0b3JhZ2U6IEdsb2JhbERhdGFTdG9yYWdlTWFuYWdlciwgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlKVxuICAgIHtcbiAgICAgICAgXy5leHRlbmQoZGF0YSwgbmV3IE1lbnVEYXRhKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xuICAgICAgICB0aGlzLmRhdGFTdG9yYWdlID0gZGF0YVN0b3JhZ2U7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkgPSBjb21wb25lbnRSZWdpc3RyeTtcbiAgICB9XG5cbiAgICBpbml0KCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZGF0YS5pdGVtcykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnJlZ2lzdHJ5LmdldEZhY3RvcnkodGhpcy5kYXRhLml0ZW1zW2ldLmNvbXBvbmVudCkuY3JlYXRlRnJvbURhdGEodGhpcy5kYXRhLml0ZW1zW2ldKTtcbiAgICAgICAgICAgIF8uZXh0ZW5kKHRoaXMuZGF0YS5pdGVtc1tpXSwgaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBjb21wb25lbnQgb2YgdGhpcy5yZWdpc3RyeS5nZXRDb21wb25lbnRzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudC5jb21wb25lbnQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyU3RvcmUoJ21lbnVNYW5hZ2VyJywgdGhpcyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJEYXRhKHRoaXMuZGF0YSk7XG5cbiAgICAgICAgbGV0IG1lbnVBY3RpdmVLZXkgPSB0aGlzLmRhdGFTdG9yYWdlLmdldCgnbWVudS1hY3RpdmUta2V5Jyk7XG4gICAgICAgIGlmKG1lbnVBY3RpdmVLZXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaXRlbSBvZiB0aGlzLmdldEl0ZW1zKCkpIHtcbiAgICAgICAgICAgICAgICBpZihpdGVtLmtleSA9PSBtZW51QWN0aXZlS2V5LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2VsZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGF0YSgpOiBNZW51RGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxuXG4gICAgaXNPcGVuKCk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEub3BlbjtcbiAgICB9XG5cbiAgICB0b29nbGVNZW51KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRhdGEub3BlbiA9ICF0aGlzLmRhdGEub3BlbjtcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLmRhdGEub3BlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZGF0YS5vcGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNDdXN0b21DaGFuZ2UoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5jdXN0b21DaGFuZ2U7XG4gICAgfVxuXG4gICAgY2xlYXJTZWxlY3Rpb25zKCkge1xuICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy5kYXRhLml0ZW1zKSB7XG4gICAgICAgICAgICBpdGVtLnVuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYodGhpcy5kYXRhLml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb25zKCk7XG4gICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy5kYXRhLml0ZW1zKSB7XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5jbGlja2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5vcGVuKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRBY3RpdmUoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5kYXRhU3RvcmFnZS5zZXQoJ21lbnUtYWN0aXZlLWtleScsIGtleSk7XG4gICAgfVxuXG4gICAgZ2V0SXRlbXMoKTogQXJyYXk8TWVudUludGVyZmFjZT5cbiAgICB7XG4gICAgICAgIGxldCBpdGVtcyA9IFtdO1xuICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy5kYXRhLml0ZW1zKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgZm9yKGxldCBkZXNjZW5kYW50IG9mIGl0ZW0uZ2V0RGVzY2VuZGFudHMoKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goZGVzY2VuZGFudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01lbnVEcm9wZG93bkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDdlYzRiZWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWVudURyb3Bkb3duQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWVudURyb3Bkb3duQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9yZXBvcy9wcml2YXQvamFwYW5lc2UtdGV4dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA3ZWM0YmVhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA3ZWM0YmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA3ZWM0YmVhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NZW51RHJvcGRvd25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3ZWM0YmVhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA3ZWM0YmVhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbWVudS9jb21wb25lbnRzL01lbnVEcm9wZG93bkNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbnVEcm9wZG93bkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVudURyb3Bkb3duQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWVudURyb3Bkb3duQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wN2VjNGJlYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVudUl0ZW1Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBhMzg3MWM5JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01lbnVJdGVtQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWVudUl0ZW1Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3JlcG9zL3ByaXZhdC9qYXBhbmVzZS10ZXh0ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGEzODcxYzknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGEzODcxYzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGEzODcxYzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01lbnVJdGVtQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTM4NzFjOSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwYTM4NzFjOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21lbnUvY29tcG9uZW50cy9NZW51SXRlbUNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbnVJdGVtQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51SXRlbUNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbnVJdGVtQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYTM4NzFjOSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWVudUxpc3RDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYyMDFkNjFlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01lbnVMaXN0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWVudUxpc3RDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3JlcG9zL3ByaXZhdC9qYXBhbmVzZS10ZXh0ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjIwMWQ2MWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjIwMWQ2MWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjIwMWQ2MWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01lbnVMaXN0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjAxZDYxZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MjAxZDYxZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL21lbnUvY29tcG9uZW50cy9NZW51TGlzdENvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbnVMaXN0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NZW51TGlzdENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01lbnVMaXN0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjAxZDYxZSZcIiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBNZW51SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9tZW51L01lbnVJbnRlcmZhY2VcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgTWVudU1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL21lbnUvTWVudU1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgcHJvdGVjdGVkIGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuICAgIHByb3RlY3RlZCBtZW51TWFuYWdlcjogTWVudU1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlciwgbWVudU1hbmFnZXI6IE1lbnVNYW5hZ2VyKVxuICAgIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgICAgIHRoaXMubWVudU1hbmFnZXIgPSBtZW51TWFuYWdlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVGcm9tRGF0YShkYXRhOiBvYmplY3QpOiBNZW51SW50ZXJmYWNlXG4gICAge1xuICAgICAgICBsZXQgbWVudSA9IHRoaXMuY3JlYXRlTmV3KCk7XG4gICAgICAgIG1lbnUgPSBfLmV4dGVuZChkYXRhLCBtZW51KTtcbiAgICAgICAgcmV0dXJuIG1lbnU7XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgY3JlYXRlTmV3KCk6IE1lbnVJbnRlcmZhY2U7XG59IiwiaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvbWVudS9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IE1lbnVEcm9wZG93biBmcm9tIFwiQGVuaGF2by9hcHAvbWVudS9tb2RlbC9NZW51RHJvcGRvd25cIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51RHJvcGRvd25GYWN0b3J5IGV4dGVuZHMgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgY3JlYXRlRnJvbURhdGEoZGF0YTogb2JqZWN0KTogTWVudURyb3Bkb3duXG4gICAge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoZGF0YSwgdGhpcy5jcmVhdGVOZXcoKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KCk6IE1lbnVEcm9wZG93biB7XG4gICAgICAgIHJldHVybiBuZXcgTWVudURyb3Bkb3duKHRoaXMuZXZlbnREaXNwYXRjaGVyLCB0aGlzLm1lbnVNYW5hZ2VyKTtcbiAgICB9XG59IiwiaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvbWVudS9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAZW5oYXZvL2FwcC9tZW51L21vZGVsL01lbnVJdGVtXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudURyb3Bkb3duRmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIGNyZWF0ZUZyb21EYXRhKGRhdGE6IG9iamVjdCk6IE1lbnVJdGVtXG4gICAge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoZGF0YSwgdGhpcy5jcmVhdGVOZXcoKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KCk6IE1lbnVJdGVtIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNZW51SXRlbSh0aGlzLmV2ZW50RGlzcGF0Y2hlciwgdGhpcy5tZW51TWFuYWdlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9hcHAvbWVudS9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gXCJAZW5oYXZvL2FwcC9tZW51L21vZGVsL01lbnVMaXN0XCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBNZW51UmVnaXN0cnkgZnJvbSBcIkBlbmhhdm8vYXBwL21lbnUvTWVudVJlZ2lzdHJ5XCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IE1lbnVNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9tZW51L01lbnVNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVMaXN0RmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIHByaXZhdGUgbWVudVJlZ2lzdHJ5OiBNZW51UmVnaXN0cnk7XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlciwgbWVudU1hbmFnZXI6IE1lbnVNYW5hZ2VyLCBtZW51UmVnaXN0cnk6IE1lbnVSZWdpc3RyeSlcbiAgICB7XG4gICAgICAgIHN1cGVyKGV2ZW50RGlzcGF0Y2hlciwgbWVudU1hbmFnZXIpO1xuICAgICAgICB0aGlzLm1lbnVSZWdpc3RyeSA9IG1lbnVSZWdpc3RyeTtcbiAgICB9XG5cbiAgICBjcmVhdGVGcm9tRGF0YShkYXRhOiBvYmplY3QpOiBNZW51TGlzdFxuICAgIHtcbiAgICAgICAgbGV0IG1lbnUgPSB0aGlzLmNyZWF0ZU5ldygpO1xuICAgICAgICBtZW51ID0gXy5leHRlbmQoZGF0YSwgbWVudSk7XG4gICAgICAgIGZvcihsZXQgaSBpbiBtZW51Lml0ZW1zKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMubWVudVJlZ2lzdHJ5LmdldEZhY3RvcnkobWVudS5pdGVtc1tpXS5jb21wb25lbnQpLmNyZWF0ZUZyb21EYXRhKG1lbnUuaXRlbXNbaV0pO1xuICAgICAgICAgICAgaXRlbS5zZXRQYXJlbnQobWVudSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lbnU7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KCk6IE1lbnVMaXN0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBNZW51TGlzdCh0aGlzLmV2ZW50RGlzcGF0Y2hlciwgdGhpcy5tZW51TWFuYWdlcilcbiAgICB9XG59XG4iLCJpbXBvcnQgTWVudUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvbWVudS9NZW51SW50ZXJmYWNlXCI7XG5pbXBvcnQgTWVudU1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL21lbnUvTWVudU1hbmFnZXJcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0TWVudSBpbXBsZW1lbnRzIE1lbnVJbnRlcmZhY2VcbntcbiAgICBwcml2YXRlIHBhcmVudEl0ZW06IE1lbnVJbnRlcmZhY2U7XG4gICAgcHVibGljIGNvbXBvbmVudDogc3RyaW5nO1xuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICAgIHB1YmxpYyBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcbiAgICBwdWJsaWMgY2xpY2thYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJvdGVjdGVkIGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuICAgIHByb3RlY3RlZCBtZW51TWFuYWdlcjogTWVudU1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlciwgbWVudU1hbmFnZXI6IE1lbnVNYW5hZ2VyKVxuICAgIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgICAgIHRoaXMubWVudU1hbmFnZXIgPSBtZW51TWFuYWdlcjtcbiAgICB9XG5cbiAgICBjaGlsZHJlbigpOiBBcnJheTxNZW51SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBnZXREZXNjZW5kYW50cygpOiBBcnJheTxNZW51SW50ZXJmYWNlPlxuICAgIHtcbiAgICAgICAgbGV0IGRlc2NlbmRhbnRzID0gW107XG4gICAgICAgIGZvcihsZXQgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbigpKSB7XG4gICAgICAgICAgICBkZXNjZW5kYW50cy5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIGZvcihsZXQgZGVzY2VuZGFudCBvZiBjaGlsZC5nZXREZXNjZW5kYW50cygpKSB7XG4gICAgICAgICAgICAgICAgZGVzY2VuZGFudHMucHVzaChkZXNjZW5kYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVzY2VuZGFudHM7XG4gICAgfVxuXG4gICAgdW5zZWxlY3QoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yKGxldCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKCkpIHtcbiAgICAgICAgICAgIGNoaWxkLnVuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3QoKTogdm9pZCB7XG4gICAgICAgIGlmKHRoaXMucGFyZW50KCkpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50KCkuc2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb3BlbigpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIHBhcmVudCgpOiBNZW51SW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50SXRlbTtcbiAgICB9XG5cbiAgICBzZXRQYXJlbnQocGFyZW50OiBNZW51SW50ZXJmYWNlKTogTWVudUludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudEl0ZW0gPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldE1hbmFnZXIoKTogTWVudU1hbmFnZXJcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lbnVNYW5hZ2VyO1xuICAgIH1cbn1cbiIsImltcG9ydCBBYnN0cmFjdE1lbnUgZnJvbSBcIkBlbmhhdm8vYXBwL21lbnUvbW9kZWwvQWJzdHJhY3RNZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVEcm9wZG93biBleHRlbmRzIEFic3RyYWN0TWVudVxue1xuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuICAgIHB1YmxpYyBldmVudDogc3RyaW5nO1xuXG4gICAgY2hhbmdlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlLmxhYmVsO1xuICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKHRoaXMuZXZlbnQsIFt2YWx1ZS5jb2RlXSk7XG4gICAgfVxufSIsImltcG9ydCBDcmVhdGVFdmVudCBmcm9tICdAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0NyZWF0ZUV2ZW50JztcbmltcG9ydCBDbGVhckV2ZW50IGZyb20gJ0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvQ2xlYXJFdmVudCc7XG5pbXBvcnQgU2F2ZVN0YXRlRXZlbnQgZnJvbSAnQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9TYXZlU3RhdGVFdmVudCc7XG5pbXBvcnQgQWJzdHJhY3RNZW51IGZyb20gXCJAZW5oYXZvL2FwcC9tZW51L21vZGVsL0Fic3RyYWN0TWVudVwiO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gXCJAZW5oYXZvL2FwcC9tZW51L21vZGVsL01lbnVMaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVJdGVtIGV4dGVuZHMgQWJzdHJhY3RNZW51XG57XG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuICAgIHB1YmxpYyBtYWluVXJsOiBzdHJpbmc7XG4gICAgcHVibGljIGNsaWNrYWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBvcGVuKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ2xlYXJFdmVudCgpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyXG4gICAgICAgICAgICAgICAgICAgIC5kaXNwYXRjaChuZXcgQ3JlYXRlRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiAnaWZyYW1lLXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybFxuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNYW5hZ2VyKCkuY2xlYXJTZWxlY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1hbmFnZXIoKS5zZXRBY3RpdmUodGhpcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTYXZlU3RhdGVFdmVudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmdldE1hbmFnZXIoKS5pc09wZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucGFyZW50KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxNZW51TGlzdD50aGlzLnBhcmVudCgpKS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHt9KVxuICAgICAgICA7XG4gICAgfVxufSIsImltcG9ydCBBYnN0cmFjdE1lbnUgZnJvbSBcIkBlbmhhdm8vYXBwL21lbnUvbW9kZWwvQWJzdHJhY3RNZW51XCI7XG5pbXBvcnQgTWVudUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvbWVudS9NZW51SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVMaXN0IGV4dGVuZHMgQWJzdHJhY3RNZW51XG57XG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxNZW51SW50ZXJmYWNlPjtcbiAgICBwdWJsaWMgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjaGlsZHJlbigpOiBBcnJheTxNZW51SW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIHNlbGVjdCgpIHtcbiAgICAgICAgc3VwZXIuc2VsZWN0KCk7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvcGVuKCkge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNNYWluTWVudU9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE1hbmFnZXIoKS5pc09wZW4oKTtcbiAgICB9XG5cbiAgICBjbG9zZU90aGVyTWVudXMoKSB7XG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMuZ2V0TWFuYWdlcigpLmdldEl0ZW1zKCk7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtICE9PSB0aGlzICYmICF0aGlzLmlzQ2hpbGRPZihpdGVtKSkge1xuICAgICAgICAgICAgICAgIGlmICgoPE1lbnVMaXN0Pml0ZW0pLmNsb3NlKSB7XG4gICAgICAgICAgICAgICAgICAgICg8TWVudUxpc3Q+aXRlbSkuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQ2hpbGRPZihpdGVtOiBNZW51SW50ZXJmYWNlKVxuICAgIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gaXRlbS5jaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgICAgICAgaWYgKGNoaWxkID09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCIuL1JlZ2lzdHJ5SW50ZXJmYWNlXCI7XG5pbXBvcnQgUmVnaXN0cnlFbnRyeSBmcm9tIFwiQGVuaGF2by9jb3JlL1JlZ2lzdHJ5RW50cnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0cnkgaW1wbGVtZW50cyBSZWdpc3RyeUludGVyZmFjZVxue1xuICAgIHByaXZhdGUgZW50cmllczogUmVnaXN0cnlFbnRyeVtdID0gW107XG5cbiAgICBwcml2YXRlIGdldChuYW1lOiBzdHJpbmcpOiBSZWdpc3RyeUVudHJ5XG4gICAge1xuICAgICAgICBmb3IobGV0IGVudHJ5IG9mIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgaWYoZW50cnkuZ2V0TmFtZSgpID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgJ0VudHJ5IHdpdGggbmFtZSBcIicrbmFtZSsnXCIgZG9lcyBub3QgZXhpc3QgaW4gcmVnaXN0cnknO1xuICAgIH1cblxuICAgIGdldEZhY3RvcnkobmFtZTogc3RyaW5nKTogb2JqZWN0XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkuZ2V0RmFjdG9yeSgpO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudChuYW1lOiBzdHJpbmcpOiBvYmplY3RcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChuYW1lKS5nZXRDb21wb25lbnQoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlcihlbnRyeTogUmVnaXN0cnlFbnRyeSk6IFJlZ2lzdHJ5SW50ZXJmYWNlXG4gICAge1xuICAgICAgICBpZih0aGlzLmhhcyhlbnRyeS5nZXROYW1lKCkpKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUVudHJ5KGVudHJ5LmdldE5hbWUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZUVudHJ5KG5hbWU6IHN0cmluZylcbiAgICB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBpZih0aGlzLmVudHJpZXNbaV0uZ2V0TmFtZSgpID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudHJpZXMuc3BsaWNlKHBhcnNlSW50KGkpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhcyhuYW1lOiBzdHJpbmcpOiBib29sZWFuXG4gICAge1xuICAgICAgICBmb3IobGV0IGVudHJ5IG9mIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgaWYoZW50cnkuZ2V0TmFtZSgpID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0Q29tcG9uZW50cygpOiBDb21wb25lbnRbXVxuICAgIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChuZXcgQ29tcG9uZW50KGVudHJ5LmdldE5hbWUoKSwgZW50cnkuZ2V0Q29tcG9uZW50KCkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRcbntcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjb21wb25lbnQ6IG9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBvYmplY3QpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlZ2lzdHJ5IGZyb20gJy4vUmVnaXN0cnknO1xuaW1wb3J0IFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gJy4vUmVnaXN0cnlJbnRlcmZhY2UnO1xuaW1wb3J0IEZhY3RvcnlJbnRlcmZhY2UgZnJvbSAnLi9GYWN0b3J5SW50ZXJmYWNlJztcbmltcG9ydCBDb21wb25lbnRBd2FyZUludGVyZmFjZSBmcm9tICcuL0NvbXBvbmVudEF3YXJlSW50ZXJmYWNlJztcblxuZXhwb3J0IHtcbiAgICBSZWdpc3RyeSxcbiAgICBSZWdpc3RyeUludGVyZmFjZSxcbiAgICBGYWN0b3J5SW50ZXJmYWNlLFxuICAgIENvbXBvbmVudEF3YXJlSW50ZXJmYWNlXG59O1xuIiwiaW1wb3J0ICogYXMgVVJJIGZyb20gJ3VyaWpzJztcbmltcG9ydCBWaWV3U3RhY2sgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svVmlld1N0YWNrXCI7XG5pbXBvcnQgKiBhcyBwYWtvIGZyb20gXCJwYWtvXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IEdsb2JhbERhdGFTdG9yYWdlTWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9HbG9iYWxEYXRhU3RvcmFnZU1hbmFnZXJcIjtcbmltcG9ydCBWaWV3SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL1ZpZXdJbnRlcmZhY2VcIjtcbmltcG9ydCBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL0NvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlTWFuYWdlclxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFzZVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlld1N0YWNrOiBWaWV3U3RhY2s7XG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGFTdG9yYWdlOiBHbG9iYWxEYXRhU3RvcmFnZU1hbmFnZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2U7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3U3RhY2s6IFZpZXdTdGFjaywgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIsIGRhdGFTdG9yYWdlOiBHbG9iYWxEYXRhU3RvcmFnZU1hbmFnZXIsIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZSlcbiAgICB7XG4gICAgICAgIHRoaXMuYmFzZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLnZpZXdTdGFjayA9IHZpZXdTdGFjaztcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgICAgIHRoaXMuZGF0YVN0b3JhZ2UgPSBkYXRhU3RvcmFnZTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeSA9IGNvbXBvbmVudFJlZ2lzdHJ5O1xuXG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLm9uKCdzYXZlLXN0YXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlTdGF0ZShldmVudC5zdGF0ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlclN0b3JlKCdzdGF0ZU1hbmFnZXInLCB0aGlzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGx5U3RhdGUoc3RhdGU6IGFueSlcbiAgICB7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2F2ZVN0YXRlKClcbiAgICB7XG4gICAgICAgIGxldCBzdGF0ZU9iamVjdCA9IHRoaXMuY3JlYXRlU3RhdGVPYmplY3QoKTtcbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGVPYmplY3QsIFwiZW5oYXZvXCIsIHRoaXMuZ2VuZXJhdGVVcmwoc3RhdGVPYmplY3QpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlVXJsKHN0YXRlT2JqZWN0OiBvYmplY3QpOiBzdHJpbmdcbiAgICB7XG4gICAgICAgIGxldCBkYXRhQXJyYXkgPSBwYWtvLmRlZmxhdGUoSlNPTi5zdHJpbmdpZnkoc3RhdGVPYmplY3QpKTtcbiAgICAgICAgbGV0IGI2NGVuY29kZWQgPSBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgZGF0YUFycmF5KSk7XG4gICAgICAgIGxldCB1cmkgPSBuZXcgVVJJKHRoaXMuYmFzZVVybCk7XG4gICAgICAgIHJldHVybiB1cmkuc2V0UXVlcnkoJ3N0YXRlJywgIGI2NGVuY29kZWQpICsgJyc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVTdGF0ZU9iamVjdCgpOiBvYmplY3RcbiAgICB7XG4gICAgICAgIGxldCB2aWV3RGF0YSA9IFtdO1xuICAgICAgICBmb3IobGV0IHZpZXcgb2YgdGhpcy52aWV3U3RhY2suZ2V0Vmlld3MoKSkge1xuICAgICAgICAgICAgdmlld0RhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgdXJsOiB2aWV3LnVybCxcbiAgICAgICAgICAgICAgICBpZDogdmlldy5pZCxcbiAgICAgICAgICAgICAgICBzdG9yYWdlOiB2aWV3LnN0b3JhZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZpZXdzOiB2aWV3RGF0YSxcbiAgICAgICAgICAgIHN0b3JhZ2U6IHRoaXMuZGF0YVN0b3JhZ2UuZ2V0U3RvcmFnZSgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIGdlbmVyYXRlVmlld1VybCh2aWV3OiBWaWV3SW50ZXJmYWNlKTogc3RyaW5nXG4gICAge1xuICAgICAgICBsZXQgdmlld0RhdGEgPSBbXTtcbiAgICAgICAgdmlld0RhdGEucHVzaCh7XG4gICAgICAgICAgICB1cmw6IHZpZXcudXJsLFxuICAgICAgICAgICAgaWQ6IHZpZXcuaWQsXG4gICAgICAgICAgICBzdG9yYWdlOiB2aWV3LnN0b3JhZ2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHN0YXRlT2JqZWN0ID0ge1xuICAgICAgICAgICAgdmlld3M6IHZpZXdEYXRhLFxuICAgICAgICAgICAgc3RvcmFnZTogdGhpcy5kYXRhU3RvcmFnZS5nZXRTdG9yYWdlKClcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVybChzdGF0ZU9iamVjdCk7XG4gICAgfVxufSIsImltcG9ydCBXaWRnZXRJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL3Rvb2xiYXIvd2lkZ2V0L1dpZGdldEludGVyZmFjZVwiO1xuaW1wb3J0IFdpZGdldFJlZ2lzdHJ5IGZyb20gXCJAZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9XaWRnZXRSZWdpc3RyeVwiO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0TWFuYWdlclxue1xuICAgIHB1YmxpYyBwcmltYXJ5OiBXaWRnZXRJbnRlcmZhY2VbXTtcbiAgICBwdWJsaWMgc2Vjb25kYXJ5OiBXaWRnZXRJbnRlcmZhY2VbXTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpbWFyeTogV2lkZ2V0SW50ZXJmYWNlW10sIHNlY29uZGFyeTogV2lkZ2V0SW50ZXJmYWNlW10sIHJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSwgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlKVxuICAgIHtcbiAgICAgICAgdGhpcy5wcmltYXJ5ID0gcHJpbWFyeTtcbiAgICAgICAgdGhpcy5zZWNvbmRhcnkgPSBzZWNvbmRhcnk7XG4gICAgICAgIHRoaXMucmVnaXN0cnkgPSByZWdpc3RyeTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeSA9IGNvbXBvbmVudFJlZ2lzdHJ5O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5wcmltYXJ5KSB7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gdGhpcy5yZWdpc3RyeS5nZXRGYWN0b3J5KHRoaXMucHJpbWFyeVtpXS5jb21wb25lbnQpLmNyZWF0ZUZyb21EYXRhKHRoaXMucHJpbWFyeVtpXSk7XG4gICAgICAgICAgICB0aGlzLnByaW1hcnlbaV0gPSBfLmV4dGVuZCh0aGlzLnByaW1hcnlbaV0sIGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc2Vjb25kYXJ5KSB7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gdGhpcy5yZWdpc3RyeS5nZXRGYWN0b3J5KHRoaXMuc2Vjb25kYXJ5W2ldLmNvbXBvbmVudCkuY3JlYXRlRnJvbURhdGEodGhpcy5zZWNvbmRhcnlbaV0pO1xuICAgICAgICAgICAgdGhpcy5zZWNvbmRhcnlbaV0gPSBfLmV4dGVuZCh0aGlzLnNlY29uZGFyeVtpXSwgYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiB0aGlzLnJlZ2lzdHJ5LmdldENvbXBvbmVudHMoKSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50LmNvbXBvbmVudClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJTdG9yZSgnd2lkZ2V0TWFuYWdlcicsIHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyRGF0YSh0aGlzLnByaW1hcnkpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyRGF0YSh0aGlzLnNlY29uZGFyeSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tIFwiQGVuaGF2by9jb3JlXCI7XG5pbXBvcnQgV2lkZ2V0RmFjdG9yeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvdG9vbGJhci93aWRnZXQvV2lkZ2V0RmFjdG9yeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXRSZWdpc3RyeSBleHRlbmRzIFJlZ2lzdHJ5XG57XG4gICAgZ2V0RmFjdG9yeShuYW1lOiBzdHJpbmcpOiBXaWRnZXRGYWN0b3J5SW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIDxXaWRnZXRGYWN0b3J5SW50ZXJmYWNlPnN1cGVyLmdldEZhY3RvcnkobmFtZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JY29uV2lkZ2V0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NjVlZTdjNSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JY29uV2lkZ2V0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSWNvbldpZGdldENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3Zhci93d3cvcmVwb3MvcHJpdmF0L2phcGFuZXNlLXRleHRlci9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NjVlZTdjNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NjVlZTdjNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NjVlZTdjNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSWNvbldpZGdldENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTY1ZWU3YzUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTY1ZWU3YzUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9jb21wb25lbnRzL0ljb25XaWRnZXRDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uV2lkZ2V0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JY29uV2lkZ2V0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWNvbldpZGdldENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTY1ZWU3YzUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1F1aWNrTWVudVdpZGdldENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzI2MmJlMTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUXVpY2tNZW51V2lkZ2V0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUXVpY2tNZW51V2lkZ2V0Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9yZXBvcy9wcml2YXQvamFwYW5lc2UtdGV4dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMyNjJiZTEwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMyNjJiZTEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMyNjJiZTEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9RdWlja01lbnVXaWRnZXRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyNjJiZTEwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMyNjJiZTEwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdG9vbGJhci93aWRnZXQvY29tcG9uZW50cy9RdWlja01lbnVXaWRnZXRDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWlja01lbnVXaWRnZXRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aWNrTWVudVdpZGdldENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aWNrTWVudVdpZGdldENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzI2MmJlMTAmXCIiLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgV2lkZ2V0SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9XaWRnZXRJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RGYWN0b3J5XG57XG4gICAgY3JlYXRlRnJvbURhdGEoZGF0YTogb2JqZWN0KTogV2lkZ2V0SW50ZXJmYWNlXG4gICAge1xuICAgICAgICBsZXQgV2lkZ2V0ID0gdGhpcy5jcmVhdGVOZXcoKTtcbiAgICAgICAgV2lkZ2V0ID0gXy5leHRlbmQoZGF0YSwgV2lkZ2V0KTtcbiAgICAgICAgcmV0dXJuIFdpZGdldDtcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBjcmVhdGVOZXcoKTogV2lkZ2V0SW50ZXJmYWNlO1xufSIsImltcG9ydCBJY29uV2lkZ2V0IGZyb20gXCJAZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9tb2RlbC9JY29uV2lkZ2V0XCI7XG5pbXBvcnQgQWJzdHJhY3RGYWN0b3J5IGZyb20gXCJAZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9mYWN0b3J5L0Fic3RyYWN0RmFjdG9yeVwiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBNZW51TWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbWVudS9NZW51TWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uV2lkZ2V0RmFjdG9yeSBleHRlbmRzIEFic3RyYWN0RmFjdG9yeVxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBtZW51TWFuYWdlcjogTWVudU1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlciwgbWVudU1hbmFnZXI6IE1lbnVNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyID0gZXZlbnREaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyID0gbWVudU1hbmFnZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KCk6IEljb25XaWRnZXQge1xuICAgICAgICByZXR1cm4gbmV3IEljb25XaWRnZXQodGhpcy5ldmVudERpc3BhdGNoZXIsIHRoaXMubWVudU1hbmFnZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgTmV3V2luZG93V2lkZ2V0IGZyb20gXCJAZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9tb2RlbC9OZXdXaW5kb3dXaWRnZXRcIjtcbmltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL3Rvb2xiYXIvd2lkZ2V0L2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld1dpbmRvd1dpZGdldEZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBjcmVhdGVOZXcoKTogTmV3V2luZG93V2lkZ2V0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBOZXdXaW5kb3dXaWRnZXQoKVxuICAgIH1cbn0iLCJpbXBvcnQgUXVpY2tNZW51V2lkZ2V0IGZyb20gXCJAZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9tb2RlbC9RdWlja01lbnVXaWRnZXRcIjtcbmltcG9ydCBBYnN0cmFjdEZhY3RvcnkgZnJvbSBcIkBlbmhhdm8vYXBwL3Rvb2xiYXIvd2lkZ2V0L2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IE1lbnVNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9tZW51L01lbnVNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFdpZGdldEZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVudU1hbmFnZXI6IE1lbnVNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIsIG1lbnVNYW5hZ2VyOiBNZW51TWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy5tZW51TWFuYWdlciA9IG1lbnVNYW5hZ2VyO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBRdWlja01lbnVXaWRnZXQge1xuICAgICAgICByZXR1cm4gbmV3IFF1aWNrTWVudVdpZGdldCh0aGlzLmV2ZW50RGlzcGF0Y2hlciwgdGhpcy5tZW51TWFuYWdlcik7XG4gICAgfVxufSIsImltcG9ydCBXaWRnZXRJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL3Rvb2xiYXIvd2lkZ2V0L1dpZGdldEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFdpZGdldCBpbXBsZW1lbnRzIFdpZGdldEludGVyZmFjZVxue1xuICAgIGNvbXBvbmVudDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbn1cbiIsImltcG9ydCBBYnN0cmFjdFdpZGdldCBmcm9tIFwiQGVuaGF2by9hcHAvdG9vbGJhci93aWRnZXQvbW9kZWwvQWJzdHJhY3RXaWRnZXRcIjtcbmltcG9ydCBDbGVhckV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0NsZWFyRXZlbnRcIjtcbmltcG9ydCBDcmVhdGVFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DcmVhdGVFdmVudFwiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBNZW51TWFuYWdlciBmcm9tIFwiQGVuaGF2by9hcHAvbWVudS9NZW51TWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uV2lkZ2V0IGV4dGVuZHMgQWJzdHJhY3RXaWRnZXRcbntcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcbiAgICBwdWJsaWMgdGFyZ2V0OiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWVudU1hbmFnZXI6IE1lbnVNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIsIG1lbnVNYW5hZ2VyOiBNZW51TWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy5tZW51TWFuYWdlciA9IG1lbnVNYW5hZ2VyO1xuICAgIH1cblxuICAgIHByaXZhdGUgb3BlblZpZXcodXJsOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ2xlYXJFdmVudCgpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyXG4gICAgICAgICAgICAgICAgICAgIC5kaXNwYXRjaChuZXcgQ3JlYXRlRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiAnaWZyYW1lLXZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmxcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVudU1hbmFnZXIuY2xlYXJTZWxlY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7fSlcbiAgICAgICAgO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMudGFyZ2V0ID09ICdfdmlldycpIHtcbiAgICAgICAgICAgIHRoaXMub3BlblZpZXcodGhpcy51cmwsIHRoaXMubGFiZWwpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy50YXJnZXQgPT0gJ19zZWxmJykge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLnVybDtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMudGFyZ2V0ID09ICdfYmxhbmsnKSB7XG4gICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLnVybCwgJ19ibGFuaycpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBBYnN0cmFjdFdpZGdldCBmcm9tIFwiQGVuaGF2by9hcHAvdG9vbGJhci93aWRnZXQvbW9kZWwvQWJzdHJhY3RXaWRnZXRcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgTWVudU1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL21lbnUvTWVudU1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3V2luZG93V2lkZ2V0IGV4dGVuZHMgQWJzdHJhY3RXaWRnZXRcbntcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcblxuICAgIHB1YmxpYyBvcGVuKClcbiAgICB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCAnX2JsYW5rJyk7XG4gICAgfVxufSIsImltcG9ydCBBYnN0cmFjdFdpZGdldCBmcm9tIFwiQGVuaGF2by9hcHAvdG9vbGJhci93aWRnZXQvbW9kZWwvQWJzdHJhY3RXaWRnZXRcIjtcbmltcG9ydCBDcmVhdGVFdmVudCBmcm9tICdAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0NyZWF0ZUV2ZW50JztcbmltcG9ydCBDbGVhckV2ZW50IGZyb20gJ0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvQ2xlYXJFdmVudCc7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IE1lbnVNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9tZW51L01lbnVNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1aWNrTWVudVdpZGdldCBleHRlbmRzIEFic3RyYWN0V2lkZ2V0XG57XG4gICAgcHVibGljIG1lbnU6IE1lbnVbXTtcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1lbnVNYW5hZ2VyOiBNZW51TWFuYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyLCBtZW51TWFuYWdlcjogTWVudU1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgICAgIHRoaXMubWVudU1hbmFnZXIgPSBtZW51TWFuYWdlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9wZW5WaWV3KHVybDogc3RyaW5nLCBsYWJlbDogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENsZWFyRXZlbnQoKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlclxuICAgICAgICAgICAgICAgICAgICAuZGlzcGF0Y2gobmV3IENyZWF0ZUV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ2lmcmFtZS12aWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyLmNsZWFyU2VsZWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge30pXG4gICAgICAgIDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlbihtZW51OiBNZW51KVxuICAgIHtcbiAgICAgICAgaWYobWVudS50YXJnZXQgPT0gJ192aWV3Jykge1xuICAgICAgICAgICAgdGhpcy5vcGVuVmlldyhtZW51LnVybCwgbWVudS5sYWJlbCk7XG4gICAgICAgIH0gZWxzZSBpZihtZW51LnRhcmdldCA9PSAnX3NlbGYnKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG1lbnUudXJsO1xuICAgICAgICB9IGVsc2UgaWYobWVudS50YXJnZXQgPT0gJ19ibGFuaycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKG1lbnUudXJsLCAnX2JsYW5rJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBNZW51XG57XG4gICAgcHVibGljIHRhcmdldDogc3RyaW5nO1xuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZztcbn0iLCJpbXBvcnQgVmlld0ludGVyZmFjZSBmcm9tIFwiLi9WaWV3SW50ZXJmYWNlXCI7XG5pbXBvcnQgTWVudU1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL21lbnUvTWVudU1hbmFnZXJcIjtcbmltcG9ydCBNZW51TGlzdCBmcm9tIFwiQGVuaGF2by9hcHAvbWVudS9tb2RlbC9NZW51TGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJhbmdlTWFuYWdlclxue1xuICAgIHByaXZhdGUgbWVudU1hbmFnZXI6IE1lbnVNYW5hZ2VyO1xuXG4gICAgY29uc3RydWN0b3IobWVudU1hbmFnZXI6IE1lbnVNYW5hZ2VyKVxuICAgIHtcbiAgICAgICAgdGhpcy5tZW51TWFuYWdlciA9IG1lbnVNYW5hZ2VyO1xuICAgIH1cblxuICAgIHJlc2l6ZSh2aWV3czogVmlld0ludGVyZmFjZVtdKVxuICAgIHtcblxuICAgIH1cblxuICAgIGFycmFuZ2Uodmlld3NEYXRhOiBWaWV3SW50ZXJmYWNlW10pXG4gICAge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlld3MgPSB0aGlzLmdldFZpZXdzKHZpZXdzRGF0YSk7XG5cbiAgICAgICAgICAgIGlmKCF0aGlzLm1lbnVNYW5hZ2VyLmlzQ3VzdG9tQ2hhbmdlKCkpIHtcbiAgICAgICAgICAgICAgICBpZih2aWV3cy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVNYW5hZ2VyLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaXRlbSBvZiB0aGlzLm1lbnVNYW5hZ2VyLmdldEl0ZW1zKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCg8TWVudUxpc3Q+aXRlbSkuY2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPE1lbnVMaXN0Pml0ZW0pLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodmlld3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZW51TWFuYWdlci5vcGVuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgaGFzRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcihsZXQgdmlldyBvZiB2aWV3cykge1xuICAgICAgICAgICAgICAgIGlmKHZpZXcuZm9jdXMgPT0gdHJ1ZSkgaGFzRm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighaGFzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICBpZih2aWV3cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlld3Nbdmlld3MubGVuZ3RoIC0gMV0uZm9jdXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTaXplKHZpZXdzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24odmlld3MpO1xuICAgICAgICB9LCA1MCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRTaXplKHZpZXdzOiBWaWV3SW50ZXJmYWNlW10pXG4gICAge1xuICAgICAgICB0aGlzLnNldE1pbmltaXplZCh2aWV3cyk7XG5cbiAgICAgICAgaWYodmlld3MubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGlmKCF2aWV3c1swXS5taW5pbWl6ZSkge1xuICAgICAgICAgICAgICAgIHZpZXdzWzBdLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYodmlld3MubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgIGlmKCF2aWV3c1swXS5taW5pbWl6ZSkge1xuICAgICAgICAgICAgICAgIGlmKHZpZXdzWzFdLm1pbmltaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdzWzBdLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdzWzBdLndpZHRoID0gJzMwJSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYodmlld3MubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIGlmKCF2aWV3c1swXS5taW5pbWl6ZSkge1xuICAgICAgICAgICAgICAgIGlmKHZpZXdzWzFdLm1pbmltaXplICYmIHZpZXdzWzJdLm1pbmltaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdzWzBdLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXdzWzBdLndpZHRoID0gJzMwJSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRNaW5pbWl6ZWQodmlld3M6IFZpZXdJbnRlcmZhY2VbXSlcbiAgICB7XG4gICAgICAgIGlmKHZpZXdzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICBpZighdmlld3NbMF0uY3VzdG9tTWluaW1pemVkKSB7XG4gICAgICAgICAgICAgICAgdmlld3NbMF0ubWluaW1pemUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmKHZpZXdzLmxlbmd0aCA9PSAyKSB7XG5cbiAgICAgICAgICAgIGlmKCF2aWV3c1swXS5jdXN0b21NaW5pbWl6ZWQpIHtcbiAgICAgICAgICAgICAgICB2aWV3c1swXS5taW5pbWl6ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZih2aWV3cy5sZW5ndGggPT0gMykge1xuICAgICAgICAgICAgaWYoIXZpZXdzWzBdLmN1c3RvbU1pbmltaXplZCkge1xuICAgICAgICAgICAgICAgIHZpZXdzWzBdLm1pbmltaXplID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0UG9zaXRpb24odmlld3M6IFZpZXdJbnRlcmZhY2VbXSlcbiAgICB7XG4gICAgICAgIGZvciAobGV0IHZpZXcgb2Ygdmlld3MpIHtcbiAgICAgICAgICAgIHZpZXcucG9zaXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBvc2l0aW9uID0gMDtcbiAgICAgICAgZm9yIChsZXQgdmlldyBvZiB2aWV3cykge1xuICAgICAgICAgICAgaWYgKHZpZXcubWluaW1pemUpIHtcbiAgICAgICAgICAgICAgICB2aWV3LnBvc2l0aW9uID0gcG9zaXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHZpZXcgb2Ygdmlld3MpIHtcbiAgICAgICAgICAgIGlmICghdmlldy5taW5pbWl6ZSkge1xuICAgICAgICAgICAgICAgIHZpZXcucG9zaXRpb24gPSBwb3NpdGlvbisrO1xuICAgICAgICAgICAgICAgIGlmKHZpZXcucG9zaXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGNoaWxkcmVuIG9mIHZpZXcuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuLnBvc2l0aW9uID0gcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Vmlld3Modmlld3M6IFZpZXdJbnRlcmZhY2VbXSk6IFZpZXdJbnRlcmZhY2VbXVxuICAgIHtcbiAgICAgICAgbGV0IHJldHVybkRhdGEgPSBbXTtcbiAgICAgICAgZm9yKGxldCB2aWV3IG9mIHZpZXdzKSB7XG4gICAgICAgICAgICBpZighdmlldy5yZW1vdmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuRGF0YS5wdXNoKHZpZXcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5EYXRhO1xuICAgIH1cbn0iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVN0b3JhZ2VFbnRyeVxue1xuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcbiAgICBwdWJsaWMgdmFsdWU6IGFueTtcbn0iLCJpbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJ0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyJztcbmltcG9ydCBEYXRhU3RvcmFnZUVudHJ5IGZyb20gJ0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svRGF0YVN0b3JhZ2VFbnRyeSc7XG5pbXBvcnQgU2F2ZURhdGFFdmVudCBmcm9tICdAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L1NhdmVEYXRhRXZlbnQnO1xuaW1wb3J0IExvYWREYXRhRXZlbnQgZnJvbSAnQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9Mb2FkRGF0YUV2ZW50JztcbmltcG9ydCBSZW1vdmVEYXRhRXZlbnQgZnJvbSAnQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9SZW1vdmVEYXRhRXZlbnQnO1xuaW1wb3J0IFZpZXdTdGFjayBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9WaWV3U3RhY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVN0b3JhZ2VNYW5hZ2VyXG57XG4gICAgcHJpdmF0ZSBldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcbiAgICBwcml2YXRlIHZpZXdTdGFjazogVmlld1N0YWNrO1xuXG4gICAgY29uc3RydWN0b3Iodmlld1N0YWNrOiBWaWV3U3RhY2ssIGV2ZW50RGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIgPSBldmVudERpc3BhdGNoZXI7XG4gICAgICAgIHRoaXMudmlld1N0YWNrID0gdmlld1N0YWNrO1xuXG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLm9uKCdzYXZlLWRhdGEnLCAoZXZlbnQ6IFNhdmVEYXRhRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGV2ZW50LmtleSwgZXZlbnQudmFsdWUsIGV2ZW50Lm9yaWdpbik7XG4gICAgICAgICAgICBldmVudC5yZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLm9uKCdsb2FkLWRhdGEnLCAoZXZlbnQ6IExvYWREYXRhRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBlbnRyeSA9IHRoaXMuZ2V0KGV2ZW50LmtleSwgZXZlbnQub3JpZ2luKTtcbiAgICAgICAgICAgIGV2ZW50LnJlc29sdmUoZW50cnkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5vbigncmVtb3ZlLWRhdGEnLCAoZXZlbnQ6IFJlbW92ZURhdGFFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxldGUoZXZlbnQua2V5LCBldmVudC5vcmlnaW4pO1xuICAgICAgICAgICAgZXZlbnQucmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldChrZXk6IHN0cmluZywgaWQ6IG51bWJlcik6IERhdGFTdG9yYWdlRW50cnlcbiAgICB7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy52aWV3U3RhY2suZ2V0KGlkKTtcbiAgICAgICAgaWYodmlldyAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZighdmlldy5zdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcihsZXQgZW50cnkgb2Ygdmlldy5zdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYoZW50cnkua2V5ID09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBpZDogbnVtYmVyKTogdm9pZFxuICAgIHtcbiAgICAgICAgbGV0IGVudHJ5ID0gdGhpcy5nZXQoa2V5LCBpZCk7XG4gICAgICAgIGlmKGVudHJ5ID09IG51bGwpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gbmV3IERhdGFTdG9yYWdlRW50cnk7XG4gICAgICAgICAgICBlbnRyeS5rZXkgPSBrZXk7XG4gICAgICAgICAgICBsZXQgdmlldyA9ICB0aGlzLnZpZXdTdGFjay5nZXQoaWQpO1xuICAgICAgICAgICAgaWYodmlldyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYoIXZpZXcuc3RvcmFnZSkge1xuICAgICAgICAgICAgICAgICAgICB2aWV3LnN0b3JhZ2UgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmlldy5zdG9yYWdlLnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVudHJ5LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGUoa2V5OiBzdHJpbmcsIGlkOiBudW1iZXIpOiBib29sZWFuXG4gICAge1xuICAgICAgICBsZXQgZW50cnkgPSB0aGlzLmdldChrZXksIGlkKTtcbiAgICAgICAgaWYoZW50cnkgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHZpZXcgPSAgdGhpcy52aWV3U3RhY2suZ2V0KGlkKTtcbiAgICAgICAgICAgIGlmKHZpZXcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHZpZXcuc3RvcmFnZS5pbmRleE9mKGVudHJ5KTtcbiAgICAgICAgICAgICAgICB2aWV3LnN0b3JhZ2Uuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IFJlbW92ZWRFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9SZW1vdmVkRXZlbnRcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyYW1lU3RvcmFnZVxue1xuICAgIHByaXZhdGUgZnJhbWVzOiBGcmFtZVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihkaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIpIHtcbiAgICAgICAgZGlzcGF0Y2hlci5hbGwoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBmb3IobGV0IGZyYW1lIG9mIHRoaXMuZnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnQub3JpZ2luICE9IGZyYW1lLmlkICYmIGZyYW1lLmVsZW1lbnQuY29udGVudFdpbmRvdyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRpc3BhdGNoZXIuaXNEZWJ1ZygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdwYXNzIGV2ZW50ICgnK2V2ZW50Lm5hbWUrJykgdG8gaWZyYW1lICcgKyBmcmFtZS5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9ICd2aWV3X3N0YWNrX2V2ZW50fCcgKyBldmVudC5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWUuZWxlbWVudC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKGRhdGEsICcqJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGQoaWQ6IG51bWJlciwgZWxlbWVudDogSFRNTElGcmFtZUVsZW1lbnQpXG4gICAge1xuICAgICAgICB0aGlzLmZyYW1lcy5wdXNoKG5ldyBGcmFtZShpZCwgZWxlbWVudCkpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXQoaWQ6IG51bWJlcik6IEhUTUxFbGVtZW50XG4gICAge1xuICAgICAgICBsZXQgZnJhbWUgPSB0aGlzLmdldEZyYW1lKGlkKTtcbiAgICAgICAgaWYoZnJhbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFtZS5lbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGhhcyhpZDogbnVtYmVyKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RnJhbWUoaWQpICE9IG51bGw7XG4gICAgfVxuXG4gICAgcmVtb3ZlKGlkOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGZyYW1lID0gdGhpcy5nZXRGcmFtZShpZCk7XG4gICAgICAgIGlmKGZyYW1lKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmZyYW1lcy5pbmRleE9mKGZyYW1lKTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZyYW1lKGlkOiBudW1iZXIpOiBGcmFtZXxudWxsXG4gICAge1xuICAgICAgICBmb3IobGV0IGZyYW1lIG9mIHRoaXMuZnJhbWVzKSB7XG4gICAgICAgICAgICBpZihmcmFtZS5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmcmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbmNsYXNzIEZyYW1lXG57XG4gICAgZWxlbWVudDogSFRNTElGcmFtZUVsZW1lbnQ7XG4gICAgaWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIGVsZW1lbnQ6IEhUTUxJRnJhbWVFbGVtZW50KVxuICAgIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbn0iLCJpbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJ0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyJztcbmltcG9ydCBEYXRhU3RvcmFnZUVudHJ5IGZyb20gJ0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svRGF0YVN0b3JhZ2VFbnRyeSc7XG5pbXBvcnQgU2F2ZUdsb2JhbERhdGFFdmVudCBmcm9tICdAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L1NhdmVHbG9iYWxEYXRhRXZlbnQnO1xuaW1wb3J0IExvYWRHbG9iYWxEYXRhRXZlbnQgZnJvbSAnQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9Mb2FkR2xvYmFsRGF0YUV2ZW50JztcbmltcG9ydCBMb2FkUmVtb3ZlRGF0YUV2ZW50IGZyb20gJ0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvTG9hZEdsb2JhbERhdGFFdmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsb2JhbERhdGFTdG9yYWdlTWFuYWdlclxue1xuICAgIHByaXZhdGUgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG4gICAgcHJpdmF0ZSBlbnRyaWVzOiBEYXRhU3RvcmFnZUVudHJ5W107XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudERpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlciwgZGF0YTogYW55ID0gbnVsbClcbiAgICB7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyID0gZXZlbnREaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLmVudHJpZXMgPSB0aGlzLmxvYWQoZGF0YSk7XG5cbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIub24oJ3NhdmUtZ2xvYmFsLWRhdGEnLCAoZXZlbnQ6IFNhdmVHbG9iYWxEYXRhRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGV2ZW50LmtleSwgZXZlbnQudmFsdWUpO1xuICAgICAgICAgICAgZXZlbnQucmVzb2x2ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5vbignbG9hZC1nbG9iYWwtZGF0YScsIChldmVudDogTG9hZEdsb2JhbERhdGFFdmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IGVudHJ5ID0gdGhpcy5nZXQoZXZlbnQua2V5KTtcbiAgICAgICAgICAgIGV2ZW50LnJlc29sdmUoZW50cnkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5vbigncmVtb3ZlLWdsb2JhbC1kYXRhJywgKGV2ZW50OiBMb2FkUmVtb3ZlRGF0YUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZShldmVudC5rZXkpO1xuICAgICAgICAgICAgZXZlbnQucmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogRGF0YVN0b3JhZ2VFbnRyeVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmtleSA9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWRcbiAgICB7XG4gICAgICAgIGxldCBlbnRyeSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgICAgIGlmKGVudHJ5ID09IG51bGwpIHtcbiAgICAgICAgICAgIGVudHJ5ID0gbmV3IERhdGFTdG9yYWdlRW50cnk7XG4gICAgICAgICAgICBlbnRyeS5rZXkgPSBrZXk7XG4gICAgICAgICAgICB0aGlzLmVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgICAgZW50cnkudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlKGtleTogc3RyaW5nKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgbGV0IGVudHJ5ID0gdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgaWYoZW50cnkgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5lbnRyaWVzLmluZGV4T2YoZW50cnkpO1xuICAgICAgICAgICAgaWYoaW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudHJpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkKGRhdGE6IGFueSk6IERhdGFTdG9yYWdlRW50cnlbXVxuICAgIHtcbiAgICAgICAgaWYoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTdG9yYWdlKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tIFwiQGVuaGF2by9jb3JlXCI7XG5pbXBvcnQgVmlld0ZhY3RvcnlJbnRlcmZhY2UgZnJvbSBcIi4vVmlld0ZhY3RvcnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1JlZ2lzdHJ5IGV4dGVuZHMgUmVnaXN0cnlcbntcbiAgICBnZXRGYWN0b3J5KG5hbWU6IHN0cmluZyk6IFZpZXdGYWN0b3J5SW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIDxWaWV3RmFjdG9yeUludGVyZmFjZT5zdXBlci5nZXRGYWN0b3J5KG5hbWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXInO1xuaW1wb3J0IFZpZXdJbnRlcmZhY2UgZnJvbSAnQGVuaGF2by9hcHAvdmlldy1zdGFjay9WaWV3SW50ZXJmYWNlJztcbmltcG9ydCBWaWV3UmVnaXN0cnkgZnJvbSAnQGVuaGF2by9hcHAvdmlldy1zdGFjay9WaWV3UmVnaXN0cnknO1xuaW1wb3J0IENyZWF0ZUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0NyZWF0ZUV2ZW50XCI7XG5pbXBvcnQgTG9hZGVkRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvTG9hZGVkRXZlbnRcIjtcbmltcG9ydCBDbG9zZUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0Nsb3NlRXZlbnRcIjtcbmltcG9ydCBSZW1vdmVFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9SZW1vdmVFdmVudFwiO1xuaW1wb3J0IEFycmFuZ2VFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9BcnJhbmdlRXZlbnRcIjtcbmltcG9ydCBWaWV3U3RhY2tEYXRhIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL1ZpZXdTdGFja0RhdGFcIjtcbmltcG9ydCBSZW1vdmVkRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvUmVtb3ZlZEV2ZW50XCI7XG5pbXBvcnQgQ2xlYXJFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DbGVhckV2ZW50XCI7XG5pbXBvcnQgQ2xlYXJlZEV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0NsZWFyZWRFdmVudFwiO1xuaW1wb3J0IEFycmFuZ2VNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0FycmFuZ2VNYW5hZ2VyXCI7XG5pbXBvcnQgTG9hZGluZ0V2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWRpbmdFdmVudFwiO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICogYXMgYXN5bmMgZnJvbSAnYXN5bmMnO1xuaW1wb3J0IFNhdmVTdGF0ZUV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L1NhdmVTdGF0ZUV2ZW50XCI7XG5pbXBvcnQgQ2hhbmdlVXJsRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvQ2hhbmdlVXJsRXZlbnRcIjtcbmltcG9ydCBGcmFtZVN0b3JhZ2UgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRnJhbWVTdG9yYWdlXCI7XG5pbXBvcnQgQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9Db21wb25lbnRSZWdpc3RyeUludGVyZmFjZVwiO1xuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdTdGFja1xue1xuICAgIHB1YmxpYyB2aWV3czogVmlld0ludGVyZmFjZVtdO1xuICAgIHB1YmxpYyBkYXRhOiBWaWV3U3RhY2tEYXRhO1xuXG4gICAgcHJpdmF0ZSBuZXh0SWQ6IG51bWJlciA9IDE7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRpc3BhdGNoZXI6IEV2ZW50RGlzcGF0Y2hlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlZ2lzdHJ5OiBWaWV3UmVnaXN0cnk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBhcnJhbmdlTWFuYWdlcjogQXJyYW5nZU1hbmFnZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBmcmFtZVN0b3JhZ2U6IEZyYW1lU3RvcmFnZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBkYXRhOiBWaWV3U3RhY2tEYXRhLFxuICAgICAgICBkaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIsXG4gICAgICAgIHZpZXdSZWdpc3RyeTogVmlld1JlZ2lzdHJ5LFxuICAgICAgICBmcmFtZVN0b3JhZ2U6IEZyYW1lU3RvcmFnZSxcbiAgICAgICAgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlLFxuICAgICAgICBhcnJhbmdlTWFuYWdlcjogQXJyYW5nZU1hbmFnZXJcbiAgICApIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IHZpZXdSZWdpc3RyeTtcbiAgICAgICAgdGhpcy5mcmFtZVN0b3JhZ2UgPSBmcmFtZVN0b3JhZ2U7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkgPSBjb21wb25lbnRSZWdpc3RyeTtcbiAgICAgICAgdGhpcy5hcnJhbmdlTWFuYWdlciA9IGFycmFuZ2VNYW5hZ2VyO1xuXG4gICAgICAgIHRoaXMuYWRkQ2xvc2VMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmFkZFJlbW92ZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuYWRkTG9hZGVkTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5hZGRDcmVhdGVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmFkZENsZWFyTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5hZGRBcnJhbmdlTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5hZGRMb2FkaW5nTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFeGlzdHNMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmFkZENoYW5nZVVybExpc3RlbmVyKCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFycmFuZ2VNYW5hZ2VyLnJlc2l6ZSh0aGlzLmRhdGEudmlld3MpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBpZighdGhpcy5kYXRhLnZpZXdzKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEudmlld3MgPSBbXTtcbiAgICAgICAgICAgIHRoaXMudmlld3MgPSA8Vmlld0ludGVyZmFjZVtdPnRoaXMuZGF0YS52aWV3cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiB0aGlzLmRhdGEudmlld3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmlldyA9IHRoaXMucmVnaXN0cnkuZ2V0RmFjdG9yeSh0aGlzLmRhdGEudmlld3NbaV0uY29tcG9uZW50KS5jcmVhdGVGcm9tRGF0YSh0aGlzLmRhdGEudmlld3NbaV0pO1xuICAgICAgICAgICAgICAgIGlmKHZpZXcuaWQgPiB0aGlzLm5leHRJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRJZCA9IHZpZXcuaWQgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudmlld3NbaV0gPSBfLmV4dGVuZCh0aGlzLmRhdGEudmlld3NbaV0sIHZpZXcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnZpZXdzID0gPFZpZXdJbnRlcmZhY2VbXT50aGlzLmRhdGEudmlld3M7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBjb21wb25lbnQgb2YgdGhpcy5yZWdpc3RyeS5nZXRDb21wb25lbnRzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJDb21wb25lbnQoY29tcG9uZW50Lm5hbWUsIGNvbXBvbmVudC5jb21wb25lbnQpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyU3RvcmUoJ3ZpZXdTdGFjaycsIHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyRGF0YSh0aGlzLmRhdGEpO1xuICAgIH1cblxuICAgIGdldEZyYW1lU3RvcmFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJhbWVTdG9yYWdlO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ2hhbmdlVXJsTGlzdGVuZXIoKVxuICAgIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLm9uKCdjaGFuZ2UtdXJsJywgKGV2ZW50OiBDaGFuZ2VVcmxFdmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZXcgPSB0aGlzLmdldChldmVudC5pZCk7XG4gICAgICAgICAgICBpZih2aWV3LnVybCAhPT0gZXZlbnQudXJsKSB7XG4gICAgICAgICAgICAgICAgdmlldy51cmwgPSBldmVudC51cmw7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnQuY2xlYXJTdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuc3RvcmFnZSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudC5yZXNvbHZlKHtjaGFuZ2VkOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucmVzb2x2ZSh7Y2hhbmdlZDogZmFsc2V9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRFeGlzdHNMaXN0ZW5lcigpXG4gICAge1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIub24oJ2V4aXN0cycsIChldmVudDogUmVtb3ZlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWV3ID0gdGhpcy5nZXQoZXZlbnQuaWQpO1xuICAgICAgICAgICAgZXZlbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgZXhpc3RzOiAhIXZpZXdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFJlbW92ZUxpc3RlbmVyKClcbiAgICB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5vbigncmVtb3ZlJywgKGV2ZW50OiBSZW1vdmVFdmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZXcgPSB0aGlzLmdldChldmVudC5pZCk7XG4gICAgICAgICAgICBpZih2aWV3KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUodmlldyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGV2ZW50LnNhdmVTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2F2ZVN0YXRlRXZlbnQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnJlc29sdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRMb2FkZWRMaXN0ZW5lcigpXG4gICAge1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIub24oJ2xvYWRlZCcsIChldmVudDogTG9hZGVkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWV3ID0gdGhpcy5nZXQoZXZlbnQuaWQpO1xuICAgICAgICAgICAgaWYoZXZlbnQubGFiZWwpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmxhYmVsID0gZXZlbnQubGFiZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aWV3LmNsb3NlYWJsZSA9IGV2ZW50LmNsb3NlYWJsZTtcbiAgICAgICAgICAgIGlmKHZpZXcpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmZpbmlzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZExvYWRpbmdMaXN0ZW5lcigpXG4gICAge1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIub24oJ2xvYWRpbmcnLCAoZXZlbnQ6IExvYWRpbmdFdmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZXcgPSB0aGlzLmdldChldmVudC5pZCk7XG4gICAgICAgICAgICBpZih2aWV3KSB7XG4gICAgICAgICAgICAgICAgdmlldy5sb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgYWRkQ2xvc2VMaXN0ZW5lcigpXG4gICAge1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIub24oJ2Nsb3NlJywgKGV2ZW50OiBDbG9zZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlldyA9IHRoaXMuZ2V0KGV2ZW50LmlkKTtcbiAgICAgICAgICAgIGlmKHZpZXcpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB2aWV3IHdhcyBub3QgbG9hZGVkLCBpdCBjYW4ndCByZWNlaXZlIGNsb3NlIGV2ZW50cywgc28gd2UgdHJpZ2dlciByZW1vdmUgZXZlbnQgYXMgZmFsbGJhY2tcbiAgICAgICAgICAgICAgICBpZighdmlldy5sb2FkZWQgfHwgdmlldy5jbG9zZWFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBSZW1vdmVFdmVudCh2aWV3LmlkLCBldmVudC5zYXZlU3RhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgYWRkQ3JlYXRlTGlzdGVuZXIoKVxuICAgIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLm9uKCdjcmVhdGUnLCAoZXZlbnQ6IENyZWF0ZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlldyA9IHRoaXMucmVnaXN0cnkuZ2V0RmFjdG9yeShldmVudC5kYXRhLmNvbXBvbmVudCkuY3JlYXRlRnJvbURhdGEoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB2aWV3LmlkID0gdGhpcy5nZW5lcmF0ZUlkKCk7XG4gICAgICAgICAgICB0aGlzLnB1c2godmlldyk7XG4gICAgICAgICAgICBldmVudC5yZXNvbHZlKHZpZXcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEFycmFuZ2VMaXN0ZW5lcigpXG4gICAge1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIub24oJ2FycmFuZ2UnLCAoZXZlbnQ6IEFycmFuZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcnJhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkQ2xlYXJMaXN0ZW5lcigpXG4gICAge1xuICAgICAgICB0aGlzLmRpc3BhdGNoZXIub24oJ2NsZWFyJywgKGV2ZW50OiBDbGVhckV2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0Vmlld3MoKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENsZWFyZWRFdmVudChldmVudC51dWlkKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcGFyYWxsZWxzID0gW107XG4gICAgICAgICAgICBmb3IobGV0IHZpZXcgb2YgdGhpcy5nZXRWaWV3cygpKSB7XG4gICAgICAgICAgICAgICAgcGFyYWxsZWxzLnB1c2goKGNhbGxiYWNrOiAoZXJyOiBhbnkpID0+IHZvaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDbG9zZUV2ZW50KHZpZXcuaWQsIGZhbHNlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCdyZWplY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzeW5jLnBhcmFsbGVsKHBhcmFsbGVscywgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycikge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5yZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTYXZlU3RhdGVFdmVudCgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ2xlYXJlZEV2ZW50KGV2ZW50LnV1aWQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmUodmlldzogVmlld0ludGVyZmFjZSlcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBjYW4ndCBkZWxldGUgdmlld3MgYnkgc3BsaWNlIG9yIHVzaW5nIFZ1ZS5kZWxldGUsIGJlY2F1c2UgdGhlIHZpZXcgY2FuIGNvbnRhaW4gYW4gaWZyYW1lLlxuICAgICAgICAgKiBBbmQgYmVjYXVzZSBvZiByZWxvYWQgaWZyYW1lIGlzc3VlcyB3aXRoIHZ1ZSBhbmQgZ2VuZXJhbCBpbiBkb20gdHJlZXMsIGl0IGlzIGJlc3QgcHJhY3Rpc2UgdG8gZGVsZXRlIG9ubHlcbiAgICAgICAgICogdGhlIGxhc3QgZWxlbWVudC4gT3RoZXIgZWxlbWVudHMgd2lsbCBqdXN0IGhpZGUgdW50aWwgaXQgaXMgdGhlIGxhc3Qgb2YgdGhlIGFycmF5LlxuICAgICAgICAgKi9cbiAgICAgICAgdmlldy5yZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBSZW1vdmVkRXZlbnQodmlldy5pZCkpO1xuICAgICAgICB3aGlsZSh0aGlzLnZpZXdzLmxlbmd0aCA+IDAgJiYgdGhpcy52aWV3c1t0aGlzLnZpZXdzLmxlbmd0aC0xXS5yZW1vdmVkKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXdzLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhcnJhbmdlKClcbiAgICB7XG4gICAgICAgIHRoaXMuYXJyYW5nZU1hbmFnZXIuYXJyYW5nZSh0aGlzLmRhdGEudmlld3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2VuZXJhdGVJZCgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCBpZCA9IHRoaXMubmV4dElkO1xuICAgICAgICB0aGlzLm5leHRJZCsrO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuICAgIFxuICAgIGdldChpZDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgZm9yKGxldCB2aWV3IG9mIHRoaXMuZ2V0Vmlld3MoKSkge1xuICAgICAgICAgICAgaWYodmlldy5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2aWV3O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGdldFZpZXdzKClcbiAgICB7XG4gICAgICAgIGxldCB2aWV3cyA9IFtdO1xuICAgICAgICBmb3IobGV0IHZpZXcgb2YgdGhpcy52aWV3cykge1xuICAgICAgICAgICAgaWYoIXZpZXcucmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHZpZXdzLnB1c2godmlldyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZpZXdzO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHVzaCh2aWV3OiBWaWV3SW50ZXJmYWNlKVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3cy5wdXNoKHZpZXcpO1xuICAgICAgICBmb3IobGV0IHZpZXdTdGFja1ZpZXcgb2YgdGhpcy52aWV3cykge1xuICAgICAgICAgICAgdmlld1N0YWNrVmlldy5mb2N1cyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZpZXcuZm9jdXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGhhc1ZpZXdzKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFZpZXdzKCkubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBnZXREaXNwYXRjaGVyKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoZXI7XG4gICAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWpheFZpZXdDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ4MTM2NDk2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FqYXhWaWV3Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQWpheFZpZXdDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0FqYXhWaWV3Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQ4MTM2NDk2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkODEzNjQ5NlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3JlcG9zL3ByaXZhdC9qYXBhbmVzZS10ZXh0ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDgxMzY0OTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDgxMzY0OTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDgxMzY0OTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0FqYXhWaWV3Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kODEzNjQ5NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkODEzNjQ5NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svY29tcG9uZW50cy9BamF4Vmlld0NvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FqYXhWaWV3Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BamF4Vmlld0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMS0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWpheFZpZXdDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDgxMzY0OTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BamF4Vmlld0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDgxMzY0OTYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0lmcmFtZVZpZXdDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwY2E2ZjFlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0lmcmFtZVZpZXdDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JZnJhbWVWaWV3Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9JZnJhbWVWaWV3Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwY2E2ZjFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI5MGNhNmYxZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi92YXIvd3d3L3JlcG9zL3ByaXZhdC9qYXBhbmVzZS10ZXh0ZXIvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTBjYTZmMWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTBjYTZmMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTBjYTZmMWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0lmcmFtZVZpZXdDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkwY2E2ZjFlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzkwY2E2ZjFlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9jb21wb25lbnRzL0lmcmFtZVZpZXdDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JZnJhbWVWaWV3Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi90cy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JZnJhbWVWaWV3Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMS0yIS4uLy4uLy4uLy4uL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMS0zIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JZnJhbWVWaWV3Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTkwY2E2ZjFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSWZyYW1lVmlld0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTBjYTZmMWUmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGVhckV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBzdXBlcignY2xlYXInKTtcbiAgICB9XG59IiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xlYXJlZEV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBjb25zdHJ1Y3Rvcih1dWlkOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKCdjbGVhcmVkJyk7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgfVxufSIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbW92ZWRFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgaWQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpXG4gICAge1xuICAgICAgICBzdXBlcigncmVtb3ZlZCcpO1xuICAgICAgICB0aGlzLmlkID0gaWRcbiAgICB9XG59IiwiaW1wb3J0IFZpZXdGYWN0b3J5IGZyb20gXCIuL1ZpZXdGYWN0b3J5XCI7XG5pbXBvcnQgQWpheFZpZXcgZnJvbSBcIi4uL21vZGVsL0FqYXhWaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhWaWV3RmFjdG9yeSBleHRlbmRzIFZpZXdGYWN0b3J5XG57XG4gICAgY3JlYXRlRnJvbURhdGEoZGF0YTogb2JqZWN0KTogQWpheFZpZXdcbiAgICB7XG4gICAgICAgIGxldCB2aWV3ID0gPEFqYXhWaWV3PnN1cGVyLmNyZWF0ZUZyb21EYXRhKGRhdGEpO1xuICAgICAgICBsZXQgb2JqZWN0ID0gPEFqYXhWaWV3PmRhdGE7XG4gICAgICAgIHZpZXcudXJsID0gb2JqZWN0LnVybDtcbiAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV3KCk6IEFqYXhWaWV3IHtcbiAgICAgICAgcmV0dXJuIG5ldyBBamF4VmlldygpXG4gICAgfVxufSIsImltcG9ydCBWaWV3RmFjdG9yeSBmcm9tIFwiLi9WaWV3RmFjdG9yeVwiO1xuaW1wb3J0IElmcmFtZVZpZXcgZnJvbSBcIi4uL21vZGVsL0lmcmFtZVZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lVmlld0ZhY3RvcnkgZXh0ZW5kcyBWaWV3RmFjdG9yeVxue1xuICAgIGNyZWF0ZUZyb21EYXRhKGRhdGE6IG9iamVjdCk6IElmcmFtZVZpZXdcbiAgICB7XG4gICAgICAgIGxldCB2aWV3ID0gPElmcmFtZVZpZXc+c3VwZXIuY3JlYXRlRnJvbURhdGEoZGF0YSk7XG4gICAgICAgIGxldCBvYmplY3QgPSA8SWZyYW1lVmlldz5kYXRhO1xuICAgICAgICB2aWV3LnVybCA9IG9iamVjdC51cmw7XG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpOiBJZnJhbWVWaWV3IHtcbiAgICAgICAgbGV0IHZpZXcgPSBuZXcgSWZyYW1lVmlldygpO1xuICAgICAgICB2aWV3LnN0b3JhZ2UgPSBbXTtcbiAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfVxufSIsImltcG9ydCBWaWV3RmFjdG9yeUludGVyZmFjZSBmcm9tIFwiLi4vVmlld0ZhY3RvcnlJbnRlcmZhY2VcIjtcbmltcG9ydCBWaWV3IGZyb20gXCIuLi9tb2RlbC9WaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdGYWN0b3J5IGltcGxlbWVudHMgVmlld0ZhY3RvcnlJbnRlcmZhY2VcbntcbiAgICBjcmVhdGVGcm9tRGF0YShkYXRhOiBvYmplY3QpOiBWaWV3XG4gICAge1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMuY3JlYXRlTmV3KCk7XG4gICAgICAgIGxldCBvYmplY3QgPSA8Vmlldz5kYXRhO1xuICAgICAgICB2aWV3LmlkID0gb2JqZWN0LmlkO1xuICAgICAgICB2aWV3LmxhYmVsID0gb2JqZWN0LmxhYmVsO1xuICAgICAgICB2aWV3LmNvbXBvbmVudCA9IG9iamVjdC5jb21wb25lbnQ7XG4gICAgICAgIHZpZXcuc3RvcmFnZSA9IG9iamVjdC5zdG9yYWdlO1xuICAgICAgICByZXR1cm4gdmlldztcbiAgICB9XG5cbiAgICBjcmVhdGVOZXcoKTogVmlldyB7XG4gICAgICAgIGxldCB2aWV3ID0gbmV3IFZpZXcoKTtcbiAgICAgICAgdmlldy5zdG9yYWdlID0gW107XG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cbn0iLCJpbXBvcnQgVmlldyBmcm9tIFwiLi9WaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhWaWV3IGV4dGVuZHMgVmlld1xue1xuXG59IiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZnJhbWVWaWV3IGV4dGVuZHMgVmlld1xue1xuXG59IiwiaW1wb3J0IFZpZXdJbnRlcmZhY2UgZnJvbSBcIi4uL1ZpZXdJbnRlcmZhY2VcIjtcbmltcG9ydCBEYXRhU3RvcmFnZUVudHJ5IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL0RhdGFTdG9yYWdlRW50cnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBpbXBsZW1lbnRzIFZpZXdJbnRlcmZhY2VcbntcbiAgICBpZDogbnVtYmVyID0gbnVsbDtcbiAgICBsYWJlbDogc3RyaW5nID0gJyc7XG4gICAgY2hpbGRyZW46IFZpZXdJbnRlcmZhY2VbXSA9IFtdO1xuICAgIHBhcmVudDogVmlld0ludGVyZmFjZSA9IG51bGw7XG4gICAgY29tcG9uZW50OiBzdHJpbmc7XG4gICAgcHJpb3JpdHk6IG51bWJlciA9IDA7XG4gICAgd2lkdGg6IHN0cmluZyA9IG51bGw7XG4gICAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbWluaW1pemU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBmb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGN1c3RvbU1pbmltaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHJlbW92ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjbG9zZWFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHBvc2l0aW9uOiBudW1iZXIgPSAwO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHN0b3JhZ2U6IERhdGFTdG9yYWdlRW50cnlbXTtcblxuICAgIGZpbmlzaCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgRmFjdG9yeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL0ZhY3RvcnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0cnlFbnRyeVxue1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY29tcG9uZW50OiBvYmplY3Q7XG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBGYWN0b3J5SW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IG9iamVjdCwgZmFjdG9yeTogRmFjdG9yeUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb21wb25lbnQoKTogb2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGYWN0b3J5KCk6IEZhY3RvcnlJbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3J5O1xuICAgIH1cbn1cbiIsIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50IH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCAnQGVuaGF2by9hcHAvYXNzZXRzL2ZvbnRzL2VuaGF2by1pY29ucy5mb250J1xuaW1wb3J0ICdAZW5oYXZvL2FwcC9hc3NldHMvc3R5bGVzL2FwcC5zY3NzJ1xuXG5AQ29tcG9uZW50KClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db21wb25lbnQgZXh0ZW5kcyBWdWVcbntcbiAgICBnZXQgYnJhbmRpbmdJbWFnZVN0eWxlcygpIHtcbiAgICAgICAgaWYodGhpcy4kbWFpbkFwcC5kYXRhLmJyYW5kaW5nLmxvZ28pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyB0aGlzLiRtYWluQXBwLmRhdGEuYnJhbmRpbmcubG9nbyArICcpJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgaG9tZSgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FkbWluLydcbiAgICB9XG59XG4iLCJcblxuXG5cblxuXG5cblxuXG5pbXBvcnQgeyBWdWUsIENvbXBvbmVudCwgUHJvcCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgTWVudURyb3Bkb3duIGZyb20gJ0Blbmhhdm8vYXBwL21lbnUvbW9kZWwvTWVudURyb3Bkb3duJztcblxuQENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51RHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBWdWUge1xuICAgIG5hbWU6IHN0cmluZyA9ICdtZW51LWRyb3Bkb3duJztcblxuICAgIEBQcm9wKClcbiAgICBkYXRhOiBNZW51RHJvcGRvd247XG5cbiAgICBjaGFuZ2UodmFsdWUpOiBhbnkge1xuICAgICAgICB0aGlzLmRhdGEuY2hhbmdlKHZhbHVlKTtcbiAgICB9XG59XG4iLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAZW5oYXZvL2FwcC9tZW51L21vZGVsL01lbnVJdGVtJztcblxuQENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51SXRlbUNvbXBvbmVudCBleHRlbmRzIFZ1ZSB7XG4gICAgbmFtZTogc3RyaW5nID0gJ21lbnUtaXRlbSc7XG5cbiAgICBAUHJvcCgpXG4gICAgZGF0YTogTWVudUl0ZW07XG5cbiAgICBnZXQgbGFiZWwoKTogc3RyaW5nfGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGFiZWwpID8gdGhpcy5kYXRhLmxhYmVsIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGljb24oKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmljb24pID8gJ2ljb24tJyArIHRoaXMuZGF0YS5pY29uIDogJyc7XG4gICAgfVxuXG4gICAgZ2V0IG5vdGlmaWNhdGlvbigpOiBvYmplY3Qge1xuICAgICAgICByZXR1cm4gKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubm90aWZpY2F0aW9uKSA/IHRoaXMuZGF0YS5ub3RpZmljYXRpb24gOiBmYWxzZTtcbiAgICB9XG5cbiAgICBvcGVuKGV2ZW50KTogdm9pZFxuICAgIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5kYXRhLm9wZW4oKVxuICAgIH1cbn1cbiIsIlxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCBNZW51TGlzdCBmcm9tICdAZW5oYXZvL2FwcC9tZW51L21vZGVsL01lbnVMaXN0JztcblxuQENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51TGlzdENvbXBvbmVudCBleHRlbmRzIFZ1ZSB7XG4gICAgbmFtZTogc3RyaW5nID0gJ21lbnUtbGlzdCc7XG5cbiAgICBAUHJvcCgpXG4gICAgZGF0YTogTWVudUxpc3Q7XG5cbiAgICBnZXQgbGFiZWwoKTogc3RyaW5nfGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGFiZWwpID8gdGhpcy5kYXRhLmxhYmVsIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGljb24oKTogc3RyaW5nfGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuaWNvbikgPyAnaWNvbi0nICsgdGhpcy5kYXRhLmljb24gOiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgbm90aWZpY2F0aW9uKCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5ub3RpZmljYXRpb24pID8gdGhpcy5kYXRhLm5vdGlmaWNhdGlvbiA6IGZhbHNlO1xuICAgIH1cblxuICAgIHRvZ2dsZSAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YS5pc09wZW4gPSAhdGhpcy5kYXRhLmlzT3BlbjtcbiAgICAgICAgaWYodGhpcy5kYXRhLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5kYXRhLm9wZW4oKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jbG9zZU90aGVyTWVudXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3V0c2lkZSgpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYoIXRoaXMuZGF0YS5pc01haW5NZW51T3BlbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmlzT3BlbiA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMClcbiAgICB9XG59XG4iLCJcblxuXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCBJY29uV2lkZ2V0IGZyb20gXCJAZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9tb2RlbC9JY29uV2lkZ2V0XCI7XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25XaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBWdWUge1xuICAgIG5hbWU6ICdpY29uLXdpZGdldCc7XG5cbiAgICBAUHJvcCgpXG4gICAgZGF0YTogSWNvbldpZGdldDtcblxuICAgIGdldEljb24oKVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5kYXRhLmljb24pIHtcbiAgICAgICAgICAgIHJldHVybiAnaWNvbiBpY29uLScrdGhpcy5kYXRhLmljb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgdGhpcy5kYXRhLm9wZW4oKTtcbiAgICB9XG59XG4iLCJcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5pbXBvcnQgeyBWdWUsIENvbXBvbmVudCwgUHJvcCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgUXVpY2tNZW51V2lkZ2V0IGZyb20gXCJAZW5oYXZvL2FwcC90b29sYmFyL3dpZGdldC9tb2RlbC9RdWlja01lbnVXaWRnZXRcIjtcblxuQENvbXBvbmVudCgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWlja01lbnVXaWRnZXRDb21wb25lbnQgZXh0ZW5kcyBWdWUge1xuICAgIEBQcm9wKClcbiAgICBkYXRhOiBRdWlja01lbnVXaWRnZXQ7XG5cbiAgICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHRvZ2dsZSAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xuICAgIH1cblxuICAgIGNsb3NlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9wZW4obWVudTogYW55KSB7XG4gICAgICAgIHRoaXMuZGF0YS5vcGVuKG1lbnUpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgZ2V0SWNvbigpIHtcbiAgICAgICAgaWYodGhpcy5kYXRhLmljb24pIHtcbiAgICAgICAgICAgIHJldHVybiAnaWNvbiBpY29uLScrdGhpcy5kYXRhLmljb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxufVxuIiwiXG5cblxuXG5cbmltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50LCBQcm9wIH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCBMb2FkZWRFdmVudCBmcm9tICcuLi9ldmVudC9Mb2FkZWRFdmVudCc7XG5cbkBDb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhWaWV3Q29tcG9uZW50IGV4dGVuZHMgVnVlIHtcbiAgICBuYW1lOiAnYWpheC12aWV3JztcbiAgICBAUHJvcCgpXG4gICAgZGF0YTogb2JqZWN0O1xuXG4gICAgY3JlYXRlZCgpOiB2b2lkXG4gICAge1xuICAgICAgICAvLyB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgTG9hZGVkRXZlbnQoKSk7XG4gICAgICAgIC8vIH0sIDMwMDApO1xuICAgIH1cbn1cbiIsIlxuXG5cblxuXG5pbXBvcnQgeyBWdWUsIENvbXBvbmVudCwgUHJvcCB9IGZyb20gXCJ2dWUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgSWZyYW1lVmlldyBmcm9tICdAZW5oYXZvL2FwcC92aWV3LXN0YWNrL21vZGVsL0lmcmFtZVZpZXcnO1xuaW1wb3J0ICogYXMgVVJJIGZyb20gJ3VyaWpzJztcblxuQENvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWZyYW1lVmlld0NvbXBvbmVudCBleHRlbmRzIFZ1ZVxue1xuICAgIEBQcm9wKClcbiAgICBkYXRhOiBJZnJhbWVWaWV3O1xuXG4gICAgc3Vic2NyaWJlcjogb2JqZWN0O1xuICAgIHZpZXdJZDogbnVtYmVyID0gbnVsbDtcblxuICAgIG1vdW50ZWQoKVxuICAgIHtcbiAgICAgICAgdGhpcy52aWV3SWQgPSB0aGlzLmRhdGEuaWQ7XG4gICAgICAgIGxldCBmcmFtZSA9IDxIVE1MSUZyYW1lRWxlbWVudD50aGlzLiRyZWZzLmZyYW1lO1xuICAgICAgICB0aGlzLiR2aWV3U3RhY2suZ2V0RnJhbWVTdG9yYWdlKCkuYWRkKHRoaXMuZGF0YS5pZCwgZnJhbWUpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZXIgPSB0aGlzLmV2ZW50RGlzcGF0Y2hlci5vbigncmVtb3ZlZCcsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGZvcmNlVXBkYXRlKCk7ICAvLyB0cmlnZ2VyIHVwZGF0ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVkKClcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGlzIHZ1ZSBjb21wb25lbnQgd2FzIG5vdCBkZXN0cm95ZWQgYW5kIHJldXNlZCB0byBkaXNwbGF5IHRoZSBpZnJhbWUsIHdlIG5lZWQgdG8gZGV0ZWN0IGEgbWlzbWF0Y2hcbiAgICAgICAgICogYmV0d2VlbiB0aGUgdmlldyBpZCBhbmQgaWZyYW1lIHZpZXcgaWQuIElmIHdlIGZvdW5kIGEgbWlzbWF0Y2ggbWUgbmVlZCB0byByZWxvYWQgdGhlIGlmcmFtZSwgb3RoZXJ3aXNlLFxuICAgICAgICAgKiB3ZSB3b24ndCByZWNlaXZlIHVwZGF0ZXMgZm9yIHRoZSBjb3JyZWN0IHZpZXcgaWRcbiAgICAgICAgICovXG4gICAgICAgIGlmKHRoaXMudmlld0lkICE9IHRoaXMuZGF0YS5pZCkge1xuICAgICAgICAgICAgdGhpcy4kdmlld1N0YWNrLmdldEZyYW1lU3RvcmFnZSgpLnJlbW92ZSh0aGlzLmRhdGEuaWQpO1xuICAgICAgICAgICAgdGhpcy52aWV3SWQgPSB0aGlzLmRhdGEuaWQ7XG4gICAgICAgICAgICBsZXQgZnJhbWUgPSA8SFRNTElGcmFtZUVsZW1lbnQ+dGhpcy4kcmVmcy5mcmFtZTtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuZnJhbWUuc3JjID0gdGhpcy51cmw7XG4gICAgICAgICAgICB0aGlzLiR2aWV3U3RhY2suZ2V0RnJhbWVTdG9yYWdlKCkuYWRkKHRoaXMuZGF0YS5pZCwgZnJhbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveWVkKClcbiAgICB7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLnJlbW92ZSh0aGlzLnN1YnNjcmliZXIpO1xuICAgICAgICB0aGlzLiR2aWV3U3RhY2suZ2V0RnJhbWVTdG9yYWdlKCkucmVtb3ZlKHRoaXMuZGF0YS5pZCk7XG4gICAgfVxuXG4gICAgZ2V0IHVybCgpXG4gICAge1xuICAgICAgICBsZXQgdXJpID0gbmV3IFVSSSh0aGlzLmRhdGEudXJsKTtcbiAgICAgICAgcmV0dXJuIHVyaS5hZGRRdWVyeSgndmlld19pZCcsIHRoaXMuZGF0YS5pZCkgKyAnJztcbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBUb3AgbGV2ZWwgZmlsZSBpcyBqdXN0IGEgbWl4aW4gb2Ygc3VibW9kdWxlcyAmIGNvbnN0YW50c1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYXNzaWduICAgID0gcmVxdWlyZSgnLi9saWIvdXRpbHMvY29tbW9uJykuYXNzaWduO1xuXG52YXIgZGVmbGF0ZSAgID0gcmVxdWlyZSgnLi9saWIvZGVmbGF0ZScpO1xudmFyIGluZmxhdGUgICA9IHJlcXVpcmUoJy4vbGliL2luZmxhdGUnKTtcbnZhciBjb25zdGFudHMgPSByZXF1aXJlKCcuL2xpYi96bGliL2NvbnN0YW50cycpO1xuXG52YXIgcGFrbyA9IHt9O1xuXG5hc3NpZ24ocGFrbywgZGVmbGF0ZSwgaW5mbGF0ZSwgY29uc3RhbnRzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYWtvO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB6bGliX2RlZmxhdGUgPSByZXF1aXJlKCcuL3psaWIvZGVmbGF0ZScpO1xudmFyIHV0aWxzICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvY29tbW9uJyk7XG52YXIgc3RyaW5ncyAgICAgID0gcmVxdWlyZSgnLi91dGlscy9zdHJpbmdzJyk7XG52YXIgbXNnICAgICAgICAgID0gcmVxdWlyZSgnLi96bGliL21lc3NhZ2VzJyk7XG52YXIgWlN0cmVhbSAgICAgID0gcmVxdWlyZSgnLi96bGliL3pzdHJlYW0nKTtcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyogUHVibGljIGNvbnN0YW50cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbnZhciBaX05PX0ZMVVNIICAgICAgPSAwO1xudmFyIFpfRklOSVNIICAgICAgICA9IDQ7XG5cbnZhciBaX09LICAgICAgICAgICAgPSAwO1xudmFyIFpfU1RSRUFNX0VORCAgICA9IDE7XG52YXIgWl9TWU5DX0ZMVVNIICAgID0gMjtcblxudmFyIFpfREVGQVVMVF9DT01QUkVTU0lPTiA9IC0xO1xuXG52YXIgWl9ERUZBVUxUX1NUUkFURUdZICAgID0gMDtcblxudmFyIFpfREVGTEFURUQgID0gODtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG4vKipcbiAqIGNsYXNzIERlZmxhdGVcbiAqXG4gKiBHZW5lcmljIEpTLXN0eWxlIHdyYXBwZXIgZm9yIHpsaWIgY2FsbHMuIElmIHlvdSBkb24ndCBuZWVkXG4gKiBzdHJlYW1pbmcgYmVoYXZpb3VyIC0gdXNlIG1vcmUgc2ltcGxlIGZ1bmN0aW9uczogW1tkZWZsYXRlXV0sXG4gKiBbW2RlZmxhdGVSYXddXSBhbmQgW1tnemlwXV0uXG4gKiovXG5cbi8qIGludGVybmFsXG4gKiBEZWZsYXRlLmNodW5rcyAtPiBBcnJheVxuICpcbiAqIENodW5rcyBvZiBvdXRwdXQgZGF0YSwgaWYgW1tEZWZsYXRlI29uRGF0YV1dIG5vdCBvdmVycmlkZGVuLlxuICoqL1xuXG4vKipcbiAqIERlZmxhdGUucmVzdWx0IC0+IFVpbnQ4QXJyYXl8QXJyYXlcbiAqXG4gKiBDb21wcmVzc2VkIHJlc3VsdCwgZ2VuZXJhdGVkIGJ5IGRlZmF1bHQgW1tEZWZsYXRlI29uRGF0YV1dXG4gKiBhbmQgW1tEZWZsYXRlI29uRW5kXV0gaGFuZGxlcnMuIEZpbGxlZCBhZnRlciB5b3UgcHVzaCBsYXN0IGNodW5rXG4gKiAoY2FsbCBbW0RlZmxhdGUjcHVzaF1dIHdpdGggYFpfRklOSVNIYCAvIGB0cnVlYCBwYXJhbSkgIG9yIGlmIHlvdVxuICogcHVzaCBhIGNodW5rIHdpdGggZXhwbGljaXQgZmx1c2ggKGNhbGwgW1tEZWZsYXRlI3B1c2hdXSB3aXRoXG4gKiBgWl9TWU5DX0ZMVVNIYCBwYXJhbSkuXG4gKiovXG5cbi8qKlxuICogRGVmbGF0ZS5lcnIgLT4gTnVtYmVyXG4gKlxuICogRXJyb3IgY29kZSBhZnRlciBkZWZsYXRlIGZpbmlzaGVkLiAwIChaX09LKSBvbiBzdWNjZXNzLlxuICogWW91IHdpbGwgbm90IG5lZWQgaXQgaW4gcmVhbCBsaWZlLCBiZWNhdXNlIGRlZmxhdGUgZXJyb3JzXG4gKiBhcmUgcG9zc2libGUgb25seSBvbiB3cm9uZyBvcHRpb25zIG9yIGJhZCBgb25EYXRhYCAvIGBvbkVuZGBcbiAqIGN1c3RvbSBoYW5kbGVycy5cbiAqKi9cblxuLyoqXG4gKiBEZWZsYXRlLm1zZyAtPiBTdHJpbmdcbiAqXG4gKiBFcnJvciBtZXNzYWdlLCBpZiBbW0RlZmxhdGUuZXJyXV0gIT0gMFxuICoqL1xuXG5cbi8qKlxuICogbmV3IERlZmxhdGUob3B0aW9ucylcbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBkZWZsYXRlIG9wdGlvbnMuXG4gKlxuICogQ3JlYXRlcyBuZXcgZGVmbGF0b3IgaW5zdGFuY2Ugd2l0aCBzcGVjaWZpZWQgcGFyYW1zLiBUaHJvd3MgZXhjZXB0aW9uXG4gKiBvbiBiYWQgcGFyYW1zLiBTdXBwb3J0ZWQgb3B0aW9uczpcbiAqXG4gKiAtIGBsZXZlbGBcbiAqIC0gYHdpbmRvd0JpdHNgXG4gKiAtIGBtZW1MZXZlbGBcbiAqIC0gYHN0cmF0ZWd5YFxuICogLSBgZGljdGlvbmFyeWBcbiAqXG4gKiBbaHR0cDovL3psaWIubmV0L21hbnVhbC5odG1sI0FkdmFuY2VkXShodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWQpXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGVzZS5cbiAqXG4gKiBBZGRpdGlvbmFsIG9wdGlvbnMsIGZvciBpbnRlcm5hbCBuZWVkczpcbiAqXG4gKiAtIGBjaHVua1NpemVgIC0gc2l6ZSBvZiBnZW5lcmF0ZWQgZGF0YSBjaHVua3MgKDE2SyBieSBkZWZhdWx0KVxuICogLSBgcmF3YCAoQm9vbGVhbikgLSBkbyByYXcgZGVmbGF0ZVxuICogLSBgZ3ppcGAgKEJvb2xlYW4pIC0gY3JlYXRlIGd6aXAgd3JhcHBlclxuICogLSBgdG9gIChTdHJpbmcpIC0gaWYgZXF1YWwgdG8gJ3N0cmluZycsIHRoZW4gcmVzdWx0IHdpbGwgYmUgXCJiaW5hcnkgc3RyaW5nXCJcbiAqICAgIChlYWNoIGNoYXIgY29kZSBbMC4uMjU1XSlcbiAqIC0gYGhlYWRlcmAgKE9iamVjdCkgLSBjdXN0b20gaGVhZGVyIGZvciBnemlwXG4gKiAgIC0gYHRleHRgIChCb29sZWFuKSAtIHRydWUgaWYgY29tcHJlc3NlZCBkYXRhIGJlbGlldmVkIHRvIGJlIHRleHRcbiAqICAgLSBgdGltZWAgKE51bWJlcikgLSBtb2RpZmljYXRpb24gdGltZSwgdW5peCB0aW1lc3RhbXBcbiAqICAgLSBgb3NgIChOdW1iZXIpIC0gb3BlcmF0aW9uIHN5c3RlbSBjb2RlXG4gKiAgIC0gYGV4dHJhYCAoQXJyYXkpIC0gYXJyYXkgb2YgYnl0ZXMgd2l0aCBleHRyYSBkYXRhIChtYXggNjU1MzYpXG4gKiAgIC0gYG5hbWVgIChTdHJpbmcpIC0gZmlsZSBuYW1lIChiaW5hcnkgc3RyaW5nKVxuICogICAtIGBjb21tZW50YCAoU3RyaW5nKSAtIGNvbW1lbnQgKGJpbmFyeSBzdHJpbmcpXG4gKiAgIC0gYGhjcmNgIChCb29sZWFuKSAtIHRydWUgaWYgaGVhZGVyIGNyYyBzaG91bGQgYmUgYWRkZWRcbiAqXG4gKiAjIyMjIyBFeGFtcGxlOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBwYWtvID0gcmVxdWlyZSgncGFrbycpXG4gKiAgICwgY2h1bmsxID0gVWludDhBcnJheShbMSwyLDMsNCw1LDYsNyw4LDldKVxuICogICAsIGNodW5rMiA9IFVpbnQ4QXJyYXkoWzEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5XSk7XG4gKlxuICogdmFyIGRlZmxhdGUgPSBuZXcgcGFrby5EZWZsYXRlKHsgbGV2ZWw6IDN9KTtcbiAqXG4gKiBkZWZsYXRlLnB1c2goY2h1bmsxLCBmYWxzZSk7XG4gKiBkZWZsYXRlLnB1c2goY2h1bmsyLCB0cnVlKTsgIC8vIHRydWUgLT4gbGFzdCBjaHVua1xuICpcbiAqIGlmIChkZWZsYXRlLmVycikgeyB0aHJvdyBuZXcgRXJyb3IoZGVmbGF0ZS5lcnIpOyB9XG4gKlxuICogY29uc29sZS5sb2coZGVmbGF0ZS5yZXN1bHQpO1xuICogYGBgXG4gKiovXG5mdW5jdGlvbiBEZWZsYXRlKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIERlZmxhdGUpKSByZXR1cm4gbmV3IERlZmxhdGUob3B0aW9ucyk7XG5cbiAgdGhpcy5vcHRpb25zID0gdXRpbHMuYXNzaWduKHtcbiAgICBsZXZlbDogWl9ERUZBVUxUX0NPTVBSRVNTSU9OLFxuICAgIG1ldGhvZDogWl9ERUZMQVRFRCxcbiAgICBjaHVua1NpemU6IDE2Mzg0LFxuICAgIHdpbmRvd0JpdHM6IDE1LFxuICAgIG1lbUxldmVsOiA4LFxuICAgIHN0cmF0ZWd5OiBaX0RFRkFVTFRfU1RSQVRFR1ksXG4gICAgdG86ICcnXG4gIH0sIG9wdGlvbnMgfHwge30pO1xuXG4gIHZhciBvcHQgPSB0aGlzLm9wdGlvbnM7XG5cbiAgaWYgKG9wdC5yYXcgJiYgKG9wdC53aW5kb3dCaXRzID4gMCkpIHtcbiAgICBvcHQud2luZG93Qml0cyA9IC1vcHQud2luZG93Qml0cztcbiAgfVxuXG4gIGVsc2UgaWYgKG9wdC5nemlwICYmIChvcHQud2luZG93Qml0cyA+IDApICYmIChvcHQud2luZG93Qml0cyA8IDE2KSkge1xuICAgIG9wdC53aW5kb3dCaXRzICs9IDE2O1xuICB9XG5cbiAgdGhpcy5lcnIgICAgPSAwOyAgICAgIC8vIGVycm9yIGNvZGUsIGlmIGhhcHBlbnMgKDAgPSBaX09LKVxuICB0aGlzLm1zZyAgICA9ICcnOyAgICAgLy8gZXJyb3IgbWVzc2FnZVxuICB0aGlzLmVuZGVkICA9IGZhbHNlOyAgLy8gdXNlZCB0byBhdm9pZCBtdWx0aXBsZSBvbkVuZCgpIGNhbGxzXG4gIHRoaXMuY2h1bmtzID0gW107ICAgICAvLyBjaHVua3Mgb2YgY29tcHJlc3NlZCBkYXRhXG5cbiAgdGhpcy5zdHJtID0gbmV3IFpTdHJlYW0oKTtcbiAgdGhpcy5zdHJtLmF2YWlsX291dCA9IDA7XG5cbiAgdmFyIHN0YXR1cyA9IHpsaWJfZGVmbGF0ZS5kZWZsYXRlSW5pdDIoXG4gICAgdGhpcy5zdHJtLFxuICAgIG9wdC5sZXZlbCxcbiAgICBvcHQubWV0aG9kLFxuICAgIG9wdC53aW5kb3dCaXRzLFxuICAgIG9wdC5tZW1MZXZlbCxcbiAgICBvcHQuc3RyYXRlZ3lcbiAgKTtcblxuICBpZiAoc3RhdHVzICE9PSBaX09LKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZ1tzdGF0dXNdKTtcbiAgfVxuXG4gIGlmIChvcHQuaGVhZGVyKSB7XG4gICAgemxpYl9kZWZsYXRlLmRlZmxhdGVTZXRIZWFkZXIodGhpcy5zdHJtLCBvcHQuaGVhZGVyKTtcbiAgfVxuXG4gIGlmIChvcHQuZGljdGlvbmFyeSkge1xuICAgIHZhciBkaWN0O1xuICAgIC8vIENvbnZlcnQgZGF0YSBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIG9wdC5kaWN0aW9uYXJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gSWYgd2UgbmVlZCB0byBjb21wcmVzcyB0ZXh0LCBjaGFuZ2UgZW5jb2RpbmcgdG8gdXRmOC5cbiAgICAgIGRpY3QgPSBzdHJpbmdzLnN0cmluZzJidWYob3B0LmRpY3Rpb25hcnkpO1xuICAgIH0gZWxzZSBpZiAodG9TdHJpbmcuY2FsbChvcHQuZGljdGlvbmFyeSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcbiAgICAgIGRpY3QgPSBuZXcgVWludDhBcnJheShvcHQuZGljdGlvbmFyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpY3QgPSBvcHQuZGljdGlvbmFyeTtcbiAgICB9XG5cbiAgICBzdGF0dXMgPSB6bGliX2RlZmxhdGUuZGVmbGF0ZVNldERpY3Rpb25hcnkodGhpcy5zdHJtLCBkaWN0KTtcblxuICAgIGlmIChzdGF0dXMgIT09IFpfT0spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtc2dbc3RhdHVzXSk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGljdF9zZXQgPSB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogRGVmbGF0ZSNwdXNoKGRhdGFbLCBtb2RlXSkgLT4gQm9vbGVhblxuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5fEFycmF5QnVmZmVyfFN0cmluZyk6IGlucHV0IGRhdGEuIFN0cmluZ3Mgd2lsbCBiZVxuICogICBjb252ZXJ0ZWQgdG8gdXRmOCBieXRlIHNlcXVlbmNlLlxuICogLSBtb2RlIChOdW1iZXJ8Qm9vbGVhbik6IDAuLjYgZm9yIGNvcnJlc3BvbmRpbmcgWl9OT19GTFVTSC4uWl9UUkVFIG1vZGVzLlxuICogICBTZWUgY29uc3RhbnRzLiBTa2lwcGVkIG9yIGBmYWxzZWAgbWVhbnMgWl9OT19GTFVTSCwgYHRydWVgIG1lYW5zIFpfRklOSVNILlxuICpcbiAqIFNlbmRzIGlucHV0IGRhdGEgdG8gZGVmbGF0ZSBwaXBlLCBnZW5lcmF0aW5nIFtbRGVmbGF0ZSNvbkRhdGFdXSBjYWxscyB3aXRoXG4gKiBuZXcgY29tcHJlc3NlZCBjaHVua3MuIFJldHVybnMgYHRydWVgIG9uIHN1Y2Nlc3MuIFRoZSBsYXN0IGRhdGEgYmxvY2sgbXVzdCBoYXZlXG4gKiBtb2RlIFpfRklOSVNIIChvciBgdHJ1ZWApLiBUaGF0IHdpbGwgZmx1c2ggaW50ZXJuYWwgcGVuZGluZyBidWZmZXJzIGFuZCBjYWxsXG4gKiBbW0RlZmxhdGUjb25FbmRdXS4gRm9yIGludGVyaW0gZXhwbGljaXQgZmx1c2hlcyAod2l0aG91dCBlbmRpbmcgdGhlIHN0cmVhbSkgeW91XG4gKiBjYW4gdXNlIG1vZGUgWl9TWU5DX0ZMVVNILCBrZWVwaW5nIHRoZSBjb21wcmVzc2lvbiBjb250ZXh0LlxuICpcbiAqIE9uIGZhaWwgY2FsbCBbW0RlZmxhdGUjb25FbmRdXSB3aXRoIGVycm9yIGNvZGUgYW5kIHJldHVybiBmYWxzZS5cbiAqXG4gKiBXZSBzdHJvbmdseSByZWNvbW1lbmQgdG8gdXNlIGBVaW50OEFycmF5YCBvbiBpbnB1dCBmb3IgYmVzdCBzcGVlZCAob3V0cHV0XG4gKiBhcnJheSBmb3JtYXQgaXMgZGV0ZWN0ZWQgYXV0b21hdGljYWxseSkuIEFsc28sIGRvbid0IHNraXAgbGFzdCBwYXJhbSBhbmQgYWx3YXlzXG4gKiB1c2UgdGhlIHNhbWUgdHlwZSBpbiB5b3VyIGNvZGUgKGJvb2xlYW4gb3IgbnVtYmVyKS4gVGhhdCB3aWxsIGltcHJvdmUgSlMgc3BlZWQuXG4gKlxuICogRm9yIHJlZ3VsYXIgYEFycmF5YC1zIG1ha2Ugc3VyZSBhbGwgZWxlbWVudHMgYXJlIFswLi4yNTVdLlxuICpcbiAqICMjIyMjIEV4YW1wbGVcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBwdXNoKGNodW5rLCBmYWxzZSk7IC8vIHB1c2ggb25lIG9mIGRhdGEgY2h1bmtzXG4gKiAuLi5cbiAqIHB1c2goY2h1bmssIHRydWUpOyAgLy8gcHVzaCBsYXN0IGNodW5rXG4gKiBgYGBcbiAqKi9cbkRlZmxhdGUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoZGF0YSwgbW9kZSkge1xuICB2YXIgc3RybSA9IHRoaXMuc3RybTtcbiAgdmFyIGNodW5rU2l6ZSA9IHRoaXMub3B0aW9ucy5jaHVua1NpemU7XG4gIHZhciBzdGF0dXMsIF9tb2RlO1xuXG4gIGlmICh0aGlzLmVuZGVkKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIF9tb2RlID0gKG1vZGUgPT09IH5+bW9kZSkgPyBtb2RlIDogKChtb2RlID09PSB0cnVlKSA/IFpfRklOSVNIIDogWl9OT19GTFVTSCk7XG5cbiAgLy8gQ29udmVydCBkYXRhIGlmIG5lZWRlZFxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gSWYgd2UgbmVlZCB0byBjb21wcmVzcyB0ZXh0LCBjaGFuZ2UgZW5jb2RpbmcgdG8gdXRmOC5cbiAgICBzdHJtLmlucHV0ID0gc3RyaW5ncy5zdHJpbmcyYnVmKGRhdGEpO1xuICB9IGVsc2UgaWYgKHRvU3RyaW5nLmNhbGwoZGF0YSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcbiAgICBzdHJtLmlucHV0ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgc3RybS5pbnB1dCA9IGRhdGE7XG4gIH1cblxuICBzdHJtLm5leHRfaW4gPSAwO1xuICBzdHJtLmF2YWlsX2luID0gc3RybS5pbnB1dC5sZW5ndGg7XG5cbiAgZG8ge1xuICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgc3RybS5vdXRwdXQgPSBuZXcgdXRpbHMuQnVmOChjaHVua1NpemUpO1xuICAgICAgc3RybS5uZXh0X291dCA9IDA7XG4gICAgICBzdHJtLmF2YWlsX291dCA9IGNodW5rU2l6ZTtcbiAgICB9XG4gICAgc3RhdHVzID0gemxpYl9kZWZsYXRlLmRlZmxhdGUoc3RybSwgX21vZGUpOyAgICAvKiBubyBiYWQgcmV0dXJuIHZhbHVlICovXG5cbiAgICBpZiAoc3RhdHVzICE9PSBaX1NUUkVBTV9FTkQgJiYgc3RhdHVzICE9PSBaX09LKSB7XG4gICAgICB0aGlzLm9uRW5kKHN0YXR1cyk7XG4gICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwIHx8IChzdHJtLmF2YWlsX2luID09PSAwICYmIChfbW9kZSA9PT0gWl9GSU5JU0ggfHwgX21vZGUgPT09IFpfU1lOQ19GTFVTSCkpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRvID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLm9uRGF0YShzdHJpbmdzLmJ1ZjJiaW5zdHJpbmcodXRpbHMuc2hyaW5rQnVmKHN0cm0ub3V0cHV0LCBzdHJtLm5leHRfb3V0KSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbkRhdGEodXRpbHMuc2hyaW5rQnVmKHN0cm0ub3V0cHV0LCBzdHJtLm5leHRfb3V0KSk7XG4gICAgICB9XG4gICAgfVxuICB9IHdoaWxlICgoc3RybS5hdmFpbF9pbiA+IDAgfHwgc3RybS5hdmFpbF9vdXQgPT09IDApICYmIHN0YXR1cyAhPT0gWl9TVFJFQU1fRU5EKTtcblxuICAvLyBGaW5hbGl6ZSBvbiB0aGUgbGFzdCBjaHVuay5cbiAgaWYgKF9tb2RlID09PSBaX0ZJTklTSCkge1xuICAgIHN0YXR1cyA9IHpsaWJfZGVmbGF0ZS5kZWZsYXRlRW5kKHRoaXMuc3RybSk7XG4gICAgdGhpcy5vbkVuZChzdGF0dXMpO1xuICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgIHJldHVybiBzdGF0dXMgPT09IFpfT0s7XG4gIH1cblxuICAvLyBjYWxsYmFjayBpbnRlcmltIHJlc3VsdHMgaWYgWl9TWU5DX0ZMVVNILlxuICBpZiAoX21vZGUgPT09IFpfU1lOQ19GTFVTSCkge1xuICAgIHRoaXMub25FbmQoWl9PSyk7XG4gICAgc3RybS5hdmFpbF9vdXQgPSAwO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5cbi8qKlxuICogRGVmbGF0ZSNvbkRhdGEoY2h1bmspIC0+IFZvaWRcbiAqIC0gY2h1bmsgKFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nKTogb3V0cHV0IGRhdGEuIFR5cGUgb2YgYXJyYXkgZGVwZW5kc1xuICogICBvbiBqcyBlbmdpbmUgc3VwcG9ydC4gV2hlbiBzdHJpbmcgb3V0cHV0IHJlcXVlc3RlZCwgZWFjaCBjaHVua1xuICogICB3aWxsIGJlIHN0cmluZy5cbiAqXG4gKiBCeSBkZWZhdWx0LCBzdG9yZXMgZGF0YSBibG9ja3MgaW4gYGNodW5rc1tdYCBwcm9wZXJ0eSBhbmQgZ2x1ZVxuICogdGhvc2UgaW4gYG9uRW5kYC4gT3ZlcnJpZGUgdGhpcyBoYW5kbGVyLCBpZiB5b3UgbmVlZCBhbm90aGVyIGJlaGF2aW91ci5cbiAqKi9cbkRlZmxhdGUucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChjaHVuaykge1xuICB0aGlzLmNodW5rcy5wdXNoKGNodW5rKTtcbn07XG5cblxuLyoqXG4gKiBEZWZsYXRlI29uRW5kKHN0YXR1cykgLT4gVm9pZFxuICogLSBzdGF0dXMgKE51bWJlcik6IGRlZmxhdGUgc3RhdHVzLiAwIChaX09LKSBvbiBzdWNjZXNzLFxuICogICBvdGhlciBpZiBub3QuXG4gKlxuICogQ2FsbGVkIG9uY2UgYWZ0ZXIgeW91IHRlbGwgZGVmbGF0ZSB0aGF0IHRoZSBpbnB1dCBzdHJlYW0gaXNcbiAqIGNvbXBsZXRlIChaX0ZJTklTSCkgb3Igc2hvdWxkIGJlIGZsdXNoZWQgKFpfU1lOQ19GTFVTSClcbiAqIG9yIGlmIGFuIGVycm9yIGhhcHBlbmVkLiBCeSBkZWZhdWx0IC0gam9pbiBjb2xsZWN0ZWQgY2h1bmtzLFxuICogZnJlZSBtZW1vcnkgYW5kIGZpbGwgYHJlc3VsdHNgIC8gYGVycmAgcHJvcGVydGllcy5cbiAqKi9cbkRlZmxhdGUucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICAvLyBPbiBzdWNjZXNzIC0gam9pblxuICBpZiAoc3RhdHVzID09PSBaX09LKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50byA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5jaHVua3Muam9pbignJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzdWx0ID0gdXRpbHMuZmxhdHRlbkNodW5rcyh0aGlzLmNodW5rcyk7XG4gICAgfVxuICB9XG4gIHRoaXMuY2h1bmtzID0gW107XG4gIHRoaXMuZXJyID0gc3RhdHVzO1xuICB0aGlzLm1zZyA9IHRoaXMuc3RybS5tc2c7XG59O1xuXG5cbi8qKlxuICogZGVmbGF0ZShkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nKTogaW5wdXQgZGF0YSB0byBjb21wcmVzcy5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBkZWZsYXRlIG9wdGlvbnMuXG4gKlxuICogQ29tcHJlc3MgYGRhdGFgIHdpdGggZGVmbGF0ZSBhbGdvcml0aG0gYW5kIGBvcHRpb25zYC5cbiAqXG4gKiBTdXBwb3J0ZWQgb3B0aW9ucyBhcmU6XG4gKlxuICogLSBsZXZlbFxuICogLSB3aW5kb3dCaXRzXG4gKiAtIG1lbUxldmVsXG4gKiAtIHN0cmF0ZWd5XG4gKiAtIGRpY3Rpb25hcnlcbiAqXG4gKiBbaHR0cDovL3psaWIubmV0L21hbnVhbC5odG1sI0FkdmFuY2VkXShodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWQpXG4gKiBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGVzZS5cbiAqXG4gKiBTdWdhciAob3B0aW9ucyk6XG4gKlxuICogLSBgcmF3YCAoQm9vbGVhbikgLSBzYXkgdGhhdCB3ZSB3b3JrIHdpdGggcmF3IHN0cmVhbSwgaWYgeW91IGRvbid0IHdpc2ggdG8gc3BlY2lmeVxuICogICBuZWdhdGl2ZSB3aW5kb3dCaXRzIGltcGxpY2l0bHkuXG4gKiAtIGB0b2AgKFN0cmluZykgLSBpZiBlcXVhbCB0byAnc3RyaW5nJywgdGhlbiByZXN1bHQgd2lsbCBiZSBcImJpbmFyeSBzdHJpbmdcIlxuICogICAgKGVhY2ggY2hhciBjb2RlIFswLi4yNTVdKVxuICpcbiAqICMjIyMjIEV4YW1wbGU6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIHBha28gPSByZXF1aXJlKCdwYWtvJylcbiAqICAgLCBkYXRhID0gVWludDhBcnJheShbMSwyLDMsNCw1LDYsNyw4LDldKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhwYWtvLmRlZmxhdGUoZGF0YSkpO1xuICogYGBgXG4gKiovXG5mdW5jdGlvbiBkZWZsYXRlKGlucHV0LCBvcHRpb25zKSB7XG4gIHZhciBkZWZsYXRvciA9IG5ldyBEZWZsYXRlKG9wdGlvbnMpO1xuXG4gIGRlZmxhdG9yLnB1c2goaW5wdXQsIHRydWUpO1xuXG4gIC8vIFRoYXQgd2lsbCBuZXZlciBoYXBwZW5zLCBpZiB5b3UgZG9uJ3QgY2hlYXQgd2l0aCBvcHRpb25zIDopXG4gIGlmIChkZWZsYXRvci5lcnIpIHsgdGhyb3cgZGVmbGF0b3IubXNnIHx8IG1zZ1tkZWZsYXRvci5lcnJdOyB9XG5cbiAgcmV0dXJuIGRlZmxhdG9yLnJlc3VsdDtcbn1cblxuXG4vKipcbiAqIGRlZmxhdGVSYXcoZGF0YVssIG9wdGlvbnNdKSAtPiBVaW50OEFycmF5fEFycmF5fFN0cmluZ1xuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5fFN0cmluZyk6IGlucHV0IGRhdGEgdG8gY29tcHJlc3MuXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgZGVmbGF0ZSBvcHRpb25zLlxuICpcbiAqIFRoZSBzYW1lIGFzIFtbZGVmbGF0ZV1dLCBidXQgY3JlYXRlcyByYXcgZGF0YSwgd2l0aG91dCB3cmFwcGVyXG4gKiAoaGVhZGVyIGFuZCBhZGxlcjMyIGNyYykuXG4gKiovXG5mdW5jdGlvbiBkZWZsYXRlUmF3KGlucHV0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLnJhdyA9IHRydWU7XG4gIHJldHVybiBkZWZsYXRlKGlucHV0LCBvcHRpb25zKTtcbn1cblxuXG4vKipcbiAqIGd6aXAoZGF0YVssIG9wdGlvbnNdKSAtPiBVaW50OEFycmF5fEFycmF5fFN0cmluZ1xuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5fFN0cmluZyk6IGlucHV0IGRhdGEgdG8gY29tcHJlc3MuXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgZGVmbGF0ZSBvcHRpb25zLlxuICpcbiAqIFRoZSBzYW1lIGFzIFtbZGVmbGF0ZV1dLCBidXQgY3JlYXRlIGd6aXAgd3JhcHBlciBpbnN0ZWFkIG9mXG4gKiBkZWZsYXRlIG9uZS5cbiAqKi9cbmZ1bmN0aW9uIGd6aXAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuZ3ppcCA9IHRydWU7XG4gIHJldHVybiBkZWZsYXRlKGlucHV0LCBvcHRpb25zKTtcbn1cblxuXG5leHBvcnRzLkRlZmxhdGUgPSBEZWZsYXRlO1xuZXhwb3J0cy5kZWZsYXRlID0gZGVmbGF0ZTtcbmV4cG9ydHMuZGVmbGF0ZVJhdyA9IGRlZmxhdGVSYXc7XG5leHBvcnRzLmd6aXAgPSBnemlwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB6bGliX2luZmxhdGUgPSByZXF1aXJlKCcuL3psaWIvaW5mbGF0ZScpO1xudmFyIHV0aWxzICAgICAgICA9IHJlcXVpcmUoJy4vdXRpbHMvY29tbW9uJyk7XG52YXIgc3RyaW5ncyAgICAgID0gcmVxdWlyZSgnLi91dGlscy9zdHJpbmdzJyk7XG52YXIgYyAgICAgICAgICAgID0gcmVxdWlyZSgnLi96bGliL2NvbnN0YW50cycpO1xudmFyIG1zZyAgICAgICAgICA9IHJlcXVpcmUoJy4vemxpYi9tZXNzYWdlcycpO1xudmFyIFpTdHJlYW0gICAgICA9IHJlcXVpcmUoJy4vemxpYi96c3RyZWFtJyk7XG52YXIgR1poZWFkZXIgICAgID0gcmVxdWlyZSgnLi96bGliL2d6aGVhZGVyJyk7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogY2xhc3MgSW5mbGF0ZVxuICpcbiAqIEdlbmVyaWMgSlMtc3R5bGUgd3JhcHBlciBmb3IgemxpYiBjYWxscy4gSWYgeW91IGRvbid0IG5lZWRcbiAqIHN0cmVhbWluZyBiZWhhdmlvdXIgLSB1c2UgbW9yZSBzaW1wbGUgZnVuY3Rpb25zOiBbW2luZmxhdGVdXVxuICogYW5kIFtbaW5mbGF0ZVJhd11dLlxuICoqL1xuXG4vKiBpbnRlcm5hbFxuICogaW5mbGF0ZS5jaHVua3MgLT4gQXJyYXlcbiAqXG4gKiBDaHVua3Mgb2Ygb3V0cHV0IGRhdGEsIGlmIFtbSW5mbGF0ZSNvbkRhdGFdXSBub3Qgb3ZlcnJpZGRlbi5cbiAqKi9cblxuLyoqXG4gKiBJbmZsYXRlLnJlc3VsdCAtPiBVaW50OEFycmF5fEFycmF5fFN0cmluZ1xuICpcbiAqIFVuY29tcHJlc3NlZCByZXN1bHQsIGdlbmVyYXRlZCBieSBkZWZhdWx0IFtbSW5mbGF0ZSNvbkRhdGFdXVxuICogYW5kIFtbSW5mbGF0ZSNvbkVuZF1dIGhhbmRsZXJzLiBGaWxsZWQgYWZ0ZXIgeW91IHB1c2ggbGFzdCBjaHVua1xuICogKGNhbGwgW1tJbmZsYXRlI3B1c2hdXSB3aXRoIGBaX0ZJTklTSGAgLyBgdHJ1ZWAgcGFyYW0pIG9yIGlmIHlvdVxuICogcHVzaCBhIGNodW5rIHdpdGggZXhwbGljaXQgZmx1c2ggKGNhbGwgW1tJbmZsYXRlI3B1c2hdXSB3aXRoXG4gKiBgWl9TWU5DX0ZMVVNIYCBwYXJhbSkuXG4gKiovXG5cbi8qKlxuICogSW5mbGF0ZS5lcnIgLT4gTnVtYmVyXG4gKlxuICogRXJyb3IgY29kZSBhZnRlciBpbmZsYXRlIGZpbmlzaGVkLiAwIChaX09LKSBvbiBzdWNjZXNzLlxuICogU2hvdWxkIGJlIGNoZWNrZWQgaWYgYnJva2VuIGRhdGEgcG9zc2libGUuXG4gKiovXG5cbi8qKlxuICogSW5mbGF0ZS5tc2cgLT4gU3RyaW5nXG4gKlxuICogRXJyb3IgbWVzc2FnZSwgaWYgW1tJbmZsYXRlLmVycl1dICE9IDBcbiAqKi9cblxuXG4vKipcbiAqIG5ldyBJbmZsYXRlKG9wdGlvbnMpXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgaW5mbGF0ZSBvcHRpb25zLlxuICpcbiAqIENyZWF0ZXMgbmV3IGluZmxhdG9yIGluc3RhbmNlIHdpdGggc3BlY2lmaWVkIHBhcmFtcy4gVGhyb3dzIGV4Y2VwdGlvblxuICogb24gYmFkIHBhcmFtcy4gU3VwcG9ydGVkIG9wdGlvbnM6XG4gKlxuICogLSBgd2luZG93Qml0c2BcbiAqIC0gYGRpY3Rpb25hcnlgXG4gKlxuICogW2h0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZF0oaHR0cDovL3psaWIubmV0L21hbnVhbC5odG1sI0FkdmFuY2VkKVxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdGhlc2UuXG4gKlxuICogQWRkaXRpb25hbCBvcHRpb25zLCBmb3IgaW50ZXJuYWwgbmVlZHM6XG4gKlxuICogLSBgY2h1bmtTaXplYCAtIHNpemUgb2YgZ2VuZXJhdGVkIGRhdGEgY2h1bmtzICgxNksgYnkgZGVmYXVsdClcbiAqIC0gYHJhd2AgKEJvb2xlYW4pIC0gZG8gcmF3IGluZmxhdGVcbiAqIC0gYHRvYCAoU3RyaW5nKSAtIGlmIGVxdWFsIHRvICdzdHJpbmcnLCB0aGVuIHJlc3VsdCB3aWxsIGJlIGNvbnZlcnRlZFxuICogICBmcm9tIHV0ZjggdG8gdXRmMTYgKGphdmFzY3JpcHQpIHN0cmluZy4gV2hlbiBzdHJpbmcgb3V0cHV0IHJlcXVlc3RlZCxcbiAqICAgY2h1bmsgbGVuZ3RoIGNhbiBkaWZmZXIgZnJvbSBgY2h1bmtTaXplYCwgZGVwZW5kaW5nIG9uIGNvbnRlbnQuXG4gKlxuICogQnkgZGVmYXVsdCwgd2hlbiBubyBvcHRpb25zIHNldCwgYXV0b2RldGVjdCBkZWZsYXRlL2d6aXAgZGF0YSBmb3JtYXQgdmlhXG4gKiB3cmFwcGVyIGhlYWRlci5cbiAqXG4gKiAjIyMjIyBFeGFtcGxlOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBwYWtvID0gcmVxdWlyZSgncGFrbycpXG4gKiAgICwgY2h1bmsxID0gVWludDhBcnJheShbMSwyLDMsNCw1LDYsNyw4LDldKVxuICogICAsIGNodW5rMiA9IFVpbnQ4QXJyYXkoWzEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5XSk7XG4gKlxuICogdmFyIGluZmxhdGUgPSBuZXcgcGFrby5JbmZsYXRlKHsgbGV2ZWw6IDN9KTtcbiAqXG4gKiBpbmZsYXRlLnB1c2goY2h1bmsxLCBmYWxzZSk7XG4gKiBpbmZsYXRlLnB1c2goY2h1bmsyLCB0cnVlKTsgIC8vIHRydWUgLT4gbGFzdCBjaHVua1xuICpcbiAqIGlmIChpbmZsYXRlLmVycikgeyB0aHJvdyBuZXcgRXJyb3IoaW5mbGF0ZS5lcnIpOyB9XG4gKlxuICogY29uc29sZS5sb2coaW5mbGF0ZS5yZXN1bHQpO1xuICogYGBgXG4gKiovXG5mdW5jdGlvbiBJbmZsYXRlKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEluZmxhdGUpKSByZXR1cm4gbmV3IEluZmxhdGUob3B0aW9ucyk7XG5cbiAgdGhpcy5vcHRpb25zID0gdXRpbHMuYXNzaWduKHtcbiAgICBjaHVua1NpemU6IDE2Mzg0LFxuICAgIHdpbmRvd0JpdHM6IDAsXG4gICAgdG86ICcnXG4gIH0sIG9wdGlvbnMgfHwge30pO1xuXG4gIHZhciBvcHQgPSB0aGlzLm9wdGlvbnM7XG5cbiAgLy8gRm9yY2Ugd2luZG93IHNpemUgZm9yIGByYXdgIGRhdGEsIGlmIG5vdCBzZXQgZGlyZWN0bHksXG4gIC8vIGJlY2F1c2Ugd2UgaGF2ZSBubyBoZWFkZXIgZm9yIGF1dG9kZXRlY3QuXG4gIGlmIChvcHQucmF3ICYmIChvcHQud2luZG93Qml0cyA+PSAwKSAmJiAob3B0LndpbmRvd0JpdHMgPCAxNikpIHtcbiAgICBvcHQud2luZG93Qml0cyA9IC1vcHQud2luZG93Qml0cztcbiAgICBpZiAob3B0LndpbmRvd0JpdHMgPT09IDApIHsgb3B0LndpbmRvd0JpdHMgPSAtMTU7IH1cbiAgfVxuXG4gIC8vIElmIGB3aW5kb3dCaXRzYCBub3QgZGVmaW5lZCAoYW5kIG1vZGUgbm90IHJhdykgLSBzZXQgYXV0b2RldGVjdCBmbGFnIGZvciBnemlwL2RlZmxhdGVcbiAgaWYgKChvcHQud2luZG93Qml0cyA+PSAwKSAmJiAob3B0LndpbmRvd0JpdHMgPCAxNikgJiZcbiAgICAgICEob3B0aW9ucyAmJiBvcHRpb25zLndpbmRvd0JpdHMpKSB7XG4gICAgb3B0LndpbmRvd0JpdHMgKz0gMzI7XG4gIH1cblxuICAvLyBHemlwIGhlYWRlciBoYXMgbm8gaW5mbyBhYm91dCB3aW5kb3dzIHNpemUsIHdlIGNhbiBkbyBhdXRvZGV0ZWN0IG9ubHlcbiAgLy8gZm9yIGRlZmxhdGUuIFNvLCBpZiB3aW5kb3cgc2l6ZSBub3Qgc2V0LCBmb3JjZSBpdCB0byBtYXggd2hlbiBnemlwIHBvc3NpYmxlXG4gIGlmICgob3B0LndpbmRvd0JpdHMgPiAxNSkgJiYgKG9wdC53aW5kb3dCaXRzIDwgNDgpKSB7XG4gICAgLy8gYml0IDMgKDE2KSAtPiBnemlwcGVkIGRhdGFcbiAgICAvLyBiaXQgNCAoMzIpIC0+IGF1dG9kZXRlY3QgZ3ppcC9kZWZsYXRlXG4gICAgaWYgKChvcHQud2luZG93Qml0cyAmIDE1KSA9PT0gMCkge1xuICAgICAgb3B0LndpbmRvd0JpdHMgfD0gMTU7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5lcnIgICAgPSAwOyAgICAgIC8vIGVycm9yIGNvZGUsIGlmIGhhcHBlbnMgKDAgPSBaX09LKVxuICB0aGlzLm1zZyAgICA9ICcnOyAgICAgLy8gZXJyb3IgbWVzc2FnZVxuICB0aGlzLmVuZGVkICA9IGZhbHNlOyAgLy8gdXNlZCB0byBhdm9pZCBtdWx0aXBsZSBvbkVuZCgpIGNhbGxzXG4gIHRoaXMuY2h1bmtzID0gW107ICAgICAvLyBjaHVua3Mgb2YgY29tcHJlc3NlZCBkYXRhXG5cbiAgdGhpcy5zdHJtICAgPSBuZXcgWlN0cmVhbSgpO1xuICB0aGlzLnN0cm0uYXZhaWxfb3V0ID0gMDtcblxuICB2YXIgc3RhdHVzICA9IHpsaWJfaW5mbGF0ZS5pbmZsYXRlSW5pdDIoXG4gICAgdGhpcy5zdHJtLFxuICAgIG9wdC53aW5kb3dCaXRzXG4gICk7XG5cbiAgaWYgKHN0YXR1cyAhPT0gYy5aX09LKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZ1tzdGF0dXNdKTtcbiAgfVxuXG4gIHRoaXMuaGVhZGVyID0gbmV3IEdaaGVhZGVyKCk7XG5cbiAgemxpYl9pbmZsYXRlLmluZmxhdGVHZXRIZWFkZXIodGhpcy5zdHJtLCB0aGlzLmhlYWRlcik7XG5cbiAgLy8gU2V0dXAgZGljdGlvbmFyeVxuICBpZiAob3B0LmRpY3Rpb25hcnkpIHtcbiAgICAvLyBDb252ZXJ0IGRhdGEgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBvcHQuZGljdGlvbmFyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdC5kaWN0aW9uYXJ5ID0gc3RyaW5ncy5zdHJpbmcyYnVmKG9wdC5kaWN0aW9uYXJ5KTtcbiAgICB9IGVsc2UgaWYgKHRvU3RyaW5nLmNhbGwob3B0LmRpY3Rpb25hcnkpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG4gICAgICBvcHQuZGljdGlvbmFyeSA9IG5ldyBVaW50OEFycmF5KG9wdC5kaWN0aW9uYXJ5KTtcbiAgICB9XG4gICAgaWYgKG9wdC5yYXcpIHsgLy9JbiByYXcgbW9kZSB3ZSBuZWVkIHRvIHNldCB0aGUgZGljdGlvbmFyeSBlYXJseVxuICAgICAgc3RhdHVzID0gemxpYl9pbmZsYXRlLmluZmxhdGVTZXREaWN0aW9uYXJ5KHRoaXMuc3RybSwgb3B0LmRpY3Rpb25hcnkpO1xuICAgICAgaWYgKHN0YXR1cyAhPT0gYy5aX09LKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2dbc3RhdHVzXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSW5mbGF0ZSNwdXNoKGRhdGFbLCBtb2RlXSkgLT4gQm9vbGVhblxuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5fEFycmF5QnVmZmVyfFN0cmluZyk6IGlucHV0IGRhdGFcbiAqIC0gbW9kZSAoTnVtYmVyfEJvb2xlYW4pOiAwLi42IGZvciBjb3JyZXNwb25kaW5nIFpfTk9fRkxVU0guLlpfVFJFRSBtb2Rlcy5cbiAqICAgU2VlIGNvbnN0YW50cy4gU2tpcHBlZCBvciBgZmFsc2VgIG1lYW5zIFpfTk9fRkxVU0gsIGB0cnVlYCBtZWFucyBaX0ZJTklTSC5cbiAqXG4gKiBTZW5kcyBpbnB1dCBkYXRhIHRvIGluZmxhdGUgcGlwZSwgZ2VuZXJhdGluZyBbW0luZmxhdGUjb25EYXRhXV0gY2FsbHMgd2l0aFxuICogbmV3IG91dHB1dCBjaHVua3MuIFJldHVybnMgYHRydWVgIG9uIHN1Y2Nlc3MuIFRoZSBsYXN0IGRhdGEgYmxvY2sgbXVzdCBoYXZlXG4gKiBtb2RlIFpfRklOSVNIIChvciBgdHJ1ZWApLiBUaGF0IHdpbGwgZmx1c2ggaW50ZXJuYWwgcGVuZGluZyBidWZmZXJzIGFuZCBjYWxsXG4gKiBbW0luZmxhdGUjb25FbmRdXS4gRm9yIGludGVyaW0gZXhwbGljaXQgZmx1c2hlcyAod2l0aG91dCBlbmRpbmcgdGhlIHN0cmVhbSkgeW91XG4gKiBjYW4gdXNlIG1vZGUgWl9TWU5DX0ZMVVNILCBrZWVwaW5nIHRoZSBkZWNvbXByZXNzaW9uIGNvbnRleHQuXG4gKlxuICogT24gZmFpbCBjYWxsIFtbSW5mbGF0ZSNvbkVuZF1dIHdpdGggZXJyb3IgY29kZSBhbmQgcmV0dXJuIGZhbHNlLlxuICpcbiAqIFdlIHN0cm9uZ2x5IHJlY29tbWVuZCB0byB1c2UgYFVpbnQ4QXJyYXlgIG9uIGlucHV0IGZvciBiZXN0IHNwZWVkIChvdXRwdXRcbiAqIGZvcm1hdCBpcyBkZXRlY3RlZCBhdXRvbWF0aWNhbGx5KS4gQWxzbywgZG9uJ3Qgc2tpcCBsYXN0IHBhcmFtIGFuZCBhbHdheXNcbiAqIHVzZSB0aGUgc2FtZSB0eXBlIGluIHlvdXIgY29kZSAoYm9vbGVhbiBvciBudW1iZXIpLiBUaGF0IHdpbGwgaW1wcm92ZSBKUyBzcGVlZC5cbiAqXG4gKiBGb3IgcmVndWxhciBgQXJyYXlgLXMgbWFrZSBzdXJlIGFsbCBlbGVtZW50cyBhcmUgWzAuLjI1NV0uXG4gKlxuICogIyMjIyMgRXhhbXBsZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIHB1c2goY2h1bmssIGZhbHNlKTsgLy8gcHVzaCBvbmUgb2YgZGF0YSBjaHVua3NcbiAqIC4uLlxuICogcHVzaChjaHVuaywgdHJ1ZSk7ICAvLyBwdXNoIGxhc3QgY2h1bmtcbiAqIGBgYFxuICoqL1xuSW5mbGF0ZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChkYXRhLCBtb2RlKSB7XG4gIHZhciBzdHJtID0gdGhpcy5zdHJtO1xuICB2YXIgY2h1bmtTaXplID0gdGhpcy5vcHRpb25zLmNodW5rU2l6ZTtcbiAgdmFyIGRpY3Rpb25hcnkgPSB0aGlzLm9wdGlvbnMuZGljdGlvbmFyeTtcbiAgdmFyIHN0YXR1cywgX21vZGU7XG4gIHZhciBuZXh0X291dF91dGY4LCB0YWlsLCB1dGY4c3RyO1xuXG4gIC8vIEZsYWcgdG8gcHJvcGVybHkgcHJvY2VzcyBaX0JVRl9FUlJPUiBvbiB0ZXN0aW5nIGluZmxhdGUgY2FsbFxuICAvLyB3aGVuIHdlIGNoZWNrIHRoYXQgYWxsIG91dHB1dCBkYXRhIHdhcyBmbHVzaGVkLlxuICB2YXIgYWxsb3dCdWZFcnJvciA9IGZhbHNlO1xuXG4gIGlmICh0aGlzLmVuZGVkKSB7IHJldHVybiBmYWxzZTsgfVxuICBfbW9kZSA9IChtb2RlID09PSB+fm1vZGUpID8gbW9kZSA6ICgobW9kZSA9PT0gdHJ1ZSkgPyBjLlpfRklOSVNIIDogYy5aX05PX0ZMVVNIKTtcblxuICAvLyBDb252ZXJ0IGRhdGEgaWYgbmVlZGVkXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBPbmx5IGJpbmFyeSBzdHJpbmdzIGNhbiBiZSBkZWNvbXByZXNzZWQgb24gcHJhY3RpY2VcbiAgICBzdHJtLmlucHV0ID0gc3RyaW5ncy5iaW5zdHJpbmcyYnVmKGRhdGEpO1xuICB9IGVsc2UgaWYgKHRvU3RyaW5nLmNhbGwoZGF0YSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcbiAgICBzdHJtLmlucHV0ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gIH0gZWxzZSB7XG4gICAgc3RybS5pbnB1dCA9IGRhdGE7XG4gIH1cblxuICBzdHJtLm5leHRfaW4gPSAwO1xuICBzdHJtLmF2YWlsX2luID0gc3RybS5pbnB1dC5sZW5ndGg7XG5cbiAgZG8ge1xuICAgIGlmIChzdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgc3RybS5vdXRwdXQgPSBuZXcgdXRpbHMuQnVmOChjaHVua1NpemUpO1xuICAgICAgc3RybS5uZXh0X291dCA9IDA7XG4gICAgICBzdHJtLmF2YWlsX291dCA9IGNodW5rU2l6ZTtcbiAgICB9XG5cbiAgICBzdGF0dXMgPSB6bGliX2luZmxhdGUuaW5mbGF0ZShzdHJtLCBjLlpfTk9fRkxVU0gpOyAgICAvKiBubyBiYWQgcmV0dXJuIHZhbHVlICovXG5cbiAgICBpZiAoc3RhdHVzID09PSBjLlpfTkVFRF9ESUNUICYmIGRpY3Rpb25hcnkpIHtcbiAgICAgIHN0YXR1cyA9IHpsaWJfaW5mbGF0ZS5pbmZsYXRlU2V0RGljdGlvbmFyeSh0aGlzLnN0cm0sIGRpY3Rpb25hcnkpO1xuICAgIH1cblxuICAgIGlmIChzdGF0dXMgPT09IGMuWl9CVUZfRVJST1IgJiYgYWxsb3dCdWZFcnJvciA9PT0gdHJ1ZSkge1xuICAgICAgc3RhdHVzID0gYy5aX09LO1xuICAgICAgYWxsb3dCdWZFcnJvciA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzdGF0dXMgIT09IGMuWl9TVFJFQU1fRU5EICYmIHN0YXR1cyAhPT0gYy5aX09LKSB7XG4gICAgICB0aGlzLm9uRW5kKHN0YXR1cyk7XG4gICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc3RybS5uZXh0X291dCkge1xuICAgICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwIHx8IHN0YXR1cyA9PT0gYy5aX1NUUkVBTV9FTkQgfHwgKHN0cm0uYXZhaWxfaW4gPT09IDAgJiYgKF9tb2RlID09PSBjLlpfRklOSVNIIHx8IF9tb2RlID09PSBjLlpfU1lOQ19GTFVTSCkpKSB7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50byA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICAgIG5leHRfb3V0X3V0ZjggPSBzdHJpbmdzLnV0Zjhib3JkZXIoc3RybS5vdXRwdXQsIHN0cm0ubmV4dF9vdXQpO1xuXG4gICAgICAgICAgdGFpbCA9IHN0cm0ubmV4dF9vdXQgLSBuZXh0X291dF91dGY4O1xuICAgICAgICAgIHV0ZjhzdHIgPSBzdHJpbmdzLmJ1ZjJzdHJpbmcoc3RybS5vdXRwdXQsIG5leHRfb3V0X3V0ZjgpO1xuXG4gICAgICAgICAgLy8gbW92ZSB0YWlsXG4gICAgICAgICAgc3RybS5uZXh0X291dCA9IHRhaWw7XG4gICAgICAgICAgc3RybS5hdmFpbF9vdXQgPSBjaHVua1NpemUgLSB0YWlsO1xuICAgICAgICAgIGlmICh0YWlsKSB7IHV0aWxzLmFycmF5U2V0KHN0cm0ub3V0cHV0LCBzdHJtLm91dHB1dCwgbmV4dF9vdXRfdXRmOCwgdGFpbCwgMCk7IH1cblxuICAgICAgICAgIHRoaXMub25EYXRhKHV0ZjhzdHIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vbkRhdGEodXRpbHMuc2hyaW5rQnVmKHN0cm0ub3V0cHV0LCBzdHJtLm5leHRfb3V0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXaGVuIG5vIG1vcmUgaW5wdXQgZGF0YSwgd2Ugc2hvdWxkIGNoZWNrIHRoYXQgaW50ZXJuYWwgaW5mbGF0ZSBidWZmZXJzXG4gICAgLy8gYXJlIGZsdXNoZWQuIFRoZSBvbmx5IHdheSB0byBkbyBpdCB3aGVuIGF2YWlsX291dCA9IDAgLSBydW4gb25lIG1vcmVcbiAgICAvLyBpbmZsYXRlIHBhc3MuIEJ1dCBpZiBvdXRwdXQgZGF0YSBub3QgZXhpc3RzLCBpbmZsYXRlIHJldHVybiBaX0JVRl9FUlJPUi5cbiAgICAvLyBIZXJlIHdlIHNldCBmbGFnIHRvIHByb2Nlc3MgdGhpcyBlcnJvciBwcm9wZXJseS5cbiAgICAvL1xuICAgIC8vIE5PVEUuIERlZmxhdGUgZG9lcyBub3QgcmV0dXJuIGVycm9yIGluIHRoaXMgY2FzZSBhbmQgZG9lcyBub3QgbmVlZHMgc3VjaFxuICAgIC8vIGxvZ2ljLlxuICAgIGlmIChzdHJtLmF2YWlsX2luID09PSAwICYmIHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICBhbGxvd0J1ZkVycm9yID0gdHJ1ZTtcbiAgICB9XG5cbiAgfSB3aGlsZSAoKHN0cm0uYXZhaWxfaW4gPiAwIHx8IHN0cm0uYXZhaWxfb3V0ID09PSAwKSAmJiBzdGF0dXMgIT09IGMuWl9TVFJFQU1fRU5EKTtcblxuICBpZiAoc3RhdHVzID09PSBjLlpfU1RSRUFNX0VORCkge1xuICAgIF9tb2RlID0gYy5aX0ZJTklTSDtcbiAgfVxuXG4gIC8vIEZpbmFsaXplIG9uIHRoZSBsYXN0IGNodW5rLlxuICBpZiAoX21vZGUgPT09IGMuWl9GSU5JU0gpIHtcbiAgICBzdGF0dXMgPSB6bGliX2luZmxhdGUuaW5mbGF0ZUVuZCh0aGlzLnN0cm0pO1xuICAgIHRoaXMub25FbmQoc3RhdHVzKTtcbiAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gc3RhdHVzID09PSBjLlpfT0s7XG4gIH1cblxuICAvLyBjYWxsYmFjayBpbnRlcmltIHJlc3VsdHMgaWYgWl9TWU5DX0ZMVVNILlxuICBpZiAoX21vZGUgPT09IGMuWl9TWU5DX0ZMVVNIKSB7XG4gICAgdGhpcy5vbkVuZChjLlpfT0spO1xuICAgIHN0cm0uYXZhaWxfb3V0ID0gMDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuXG4vKipcbiAqIEluZmxhdGUjb25EYXRhKGNodW5rKSAtPiBWb2lkXG4gKiAtIGNodW5rIChVaW50OEFycmF5fEFycmF5fFN0cmluZyk6IG91dHB1dCBkYXRhLiBUeXBlIG9mIGFycmF5IGRlcGVuZHNcbiAqICAgb24ganMgZW5naW5lIHN1cHBvcnQuIFdoZW4gc3RyaW5nIG91dHB1dCByZXF1ZXN0ZWQsIGVhY2ggY2h1bmtcbiAqICAgd2lsbCBiZSBzdHJpbmcuXG4gKlxuICogQnkgZGVmYXVsdCwgc3RvcmVzIGRhdGEgYmxvY2tzIGluIGBjaHVua3NbXWAgcHJvcGVydHkgYW5kIGdsdWVcbiAqIHRob3NlIGluIGBvbkVuZGAuIE92ZXJyaWRlIHRoaXMgaGFuZGxlciwgaWYgeW91IG5lZWQgYW5vdGhlciBiZWhhdmlvdXIuXG4gKiovXG5JbmZsYXRlLnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgdGhpcy5jaHVua3MucHVzaChjaHVuayk7XG59O1xuXG5cbi8qKlxuICogSW5mbGF0ZSNvbkVuZChzdGF0dXMpIC0+IFZvaWRcbiAqIC0gc3RhdHVzIChOdW1iZXIpOiBpbmZsYXRlIHN0YXR1cy4gMCAoWl9PSykgb24gc3VjY2VzcyxcbiAqICAgb3RoZXIgaWYgbm90LlxuICpcbiAqIENhbGxlZCBlaXRoZXIgYWZ0ZXIgeW91IHRlbGwgaW5mbGF0ZSB0aGF0IHRoZSBpbnB1dCBzdHJlYW0gaXNcbiAqIGNvbXBsZXRlIChaX0ZJTklTSCkgb3Igc2hvdWxkIGJlIGZsdXNoZWQgKFpfU1lOQ19GTFVTSClcbiAqIG9yIGlmIGFuIGVycm9yIGhhcHBlbmVkLiBCeSBkZWZhdWx0IC0gam9pbiBjb2xsZWN0ZWQgY2h1bmtzLFxuICogZnJlZSBtZW1vcnkgYW5kIGZpbGwgYHJlc3VsdHNgIC8gYGVycmAgcHJvcGVydGllcy5cbiAqKi9cbkluZmxhdGUucHJvdG90eXBlLm9uRW5kID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICAvLyBPbiBzdWNjZXNzIC0gam9pblxuICBpZiAoc3RhdHVzID09PSBjLlpfT0spIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnRvID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gR2x1ZSAmIGNvbnZlcnQgaGVyZSwgdW50aWwgd2UgdGVhY2ggcGFrbyB0byBzZW5kXG4gICAgICAvLyB1dGY4IGFsaWduZWQgc3RyaW5ncyB0byBvbkRhdGFcbiAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5jaHVua3Muam9pbignJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzdWx0ID0gdXRpbHMuZmxhdHRlbkNodW5rcyh0aGlzLmNodW5rcyk7XG4gICAgfVxuICB9XG4gIHRoaXMuY2h1bmtzID0gW107XG4gIHRoaXMuZXJyID0gc3RhdHVzO1xuICB0aGlzLm1zZyA9IHRoaXMuc3RybS5tc2c7XG59O1xuXG5cbi8qKlxuICogaW5mbGF0ZShkYXRhWywgb3B0aW9uc10pIC0+IFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nXG4gKiAtIGRhdGEgKFVpbnQ4QXJyYXl8QXJyYXl8U3RyaW5nKTogaW5wdXQgZGF0YSB0byBkZWNvbXByZXNzLlxuICogLSBvcHRpb25zIChPYmplY3QpOiB6bGliIGluZmxhdGUgb3B0aW9ucy5cbiAqXG4gKiBEZWNvbXByZXNzIGBkYXRhYCB3aXRoIGluZmxhdGUvdW5nemlwIGFuZCBgb3B0aW9uc2AuIEF1dG9kZXRlY3RcbiAqIGZvcm1hdCB2aWEgd3JhcHBlciBoZWFkZXIgYnkgZGVmYXVsdC4gVGhhdCdzIHdoeSB3ZSBkb24ndCBwcm92aWRlXG4gKiBzZXBhcmF0ZSBgdW5nemlwYCBtZXRob2QuXG4gKlxuICogU3VwcG9ydGVkIG9wdGlvbnMgYXJlOlxuICpcbiAqIC0gd2luZG93Qml0c1xuICpcbiAqIFtodHRwOi8vemxpYi5uZXQvbWFudWFsLmh0bWwjQWR2YW5jZWRdKGh0dHA6Ly96bGliLm5ldC9tYW51YWwuaHRtbCNBZHZhbmNlZClcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqIFN1Z2FyIChvcHRpb25zKTpcbiAqXG4gKiAtIGByYXdgIChCb29sZWFuKSAtIHNheSB0aGF0IHdlIHdvcmsgd2l0aCByYXcgc3RyZWFtLCBpZiB5b3UgZG9uJ3Qgd2lzaCB0byBzcGVjaWZ5XG4gKiAgIG5lZ2F0aXZlIHdpbmRvd0JpdHMgaW1wbGljaXRseS5cbiAqIC0gYHRvYCAoU3RyaW5nKSAtIGlmIGVxdWFsIHRvICdzdHJpbmcnLCB0aGVuIHJlc3VsdCB3aWxsIGJlIGNvbnZlcnRlZFxuICogICBmcm9tIHV0ZjggdG8gdXRmMTYgKGphdmFzY3JpcHQpIHN0cmluZy4gV2hlbiBzdHJpbmcgb3V0cHV0IHJlcXVlc3RlZCxcbiAqICAgY2h1bmsgbGVuZ3RoIGNhbiBkaWZmZXIgZnJvbSBgY2h1bmtTaXplYCwgZGVwZW5kaW5nIG9uIGNvbnRlbnQuXG4gKlxuICpcbiAqICMjIyMjIEV4YW1wbGU6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIHBha28gPSByZXF1aXJlKCdwYWtvJylcbiAqICAgLCBpbnB1dCA9IHBha28uZGVmbGF0ZShbMSwyLDMsNCw1LDYsNyw4LDldKVxuICogICAsIG91dHB1dDtcbiAqXG4gKiB0cnkge1xuICogICBvdXRwdXQgPSBwYWtvLmluZmxhdGUoaW5wdXQpO1xuICogfSBjYXRjaCAoZXJyKVxuICogICBjb25zb2xlLmxvZyhlcnIpO1xuICogfVxuICogYGBgXG4gKiovXG5mdW5jdGlvbiBpbmZsYXRlKGlucHV0LCBvcHRpb25zKSB7XG4gIHZhciBpbmZsYXRvciA9IG5ldyBJbmZsYXRlKG9wdGlvbnMpO1xuXG4gIGluZmxhdG9yLnB1c2goaW5wdXQsIHRydWUpO1xuXG4gIC8vIFRoYXQgd2lsbCBuZXZlciBoYXBwZW5zLCBpZiB5b3UgZG9uJ3QgY2hlYXQgd2l0aCBvcHRpb25zIDopXG4gIGlmIChpbmZsYXRvci5lcnIpIHsgdGhyb3cgaW5mbGF0b3IubXNnIHx8IG1zZ1tpbmZsYXRvci5lcnJdOyB9XG5cbiAgcmV0dXJuIGluZmxhdG9yLnJlc3VsdDtcbn1cblxuXG4vKipcbiAqIGluZmxhdGVSYXcoZGF0YVssIG9wdGlvbnNdKSAtPiBVaW50OEFycmF5fEFycmF5fFN0cmluZ1xuICogLSBkYXRhIChVaW50OEFycmF5fEFycmF5fFN0cmluZyk6IGlucHV0IGRhdGEgdG8gZGVjb21wcmVzcy5cbiAqIC0gb3B0aW9ucyAoT2JqZWN0KTogemxpYiBpbmZsYXRlIG9wdGlvbnMuXG4gKlxuICogVGhlIHNhbWUgYXMgW1tpbmZsYXRlXV0sIGJ1dCBjcmVhdGVzIHJhdyBkYXRhLCB3aXRob3V0IHdyYXBwZXJcbiAqIChoZWFkZXIgYW5kIGFkbGVyMzIgY3JjKS5cbiAqKi9cbmZ1bmN0aW9uIGluZmxhdGVSYXcoaW5wdXQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMucmF3ID0gdHJ1ZTtcbiAgcmV0dXJuIGluZmxhdGUoaW5wdXQsIG9wdGlvbnMpO1xufVxuXG5cbi8qKlxuICogdW5nemlwKGRhdGFbLCBvcHRpb25zXSkgLT4gVWludDhBcnJheXxBcnJheXxTdHJpbmdcbiAqIC0gZGF0YSAoVWludDhBcnJheXxBcnJheXxTdHJpbmcpOiBpbnB1dCBkYXRhIHRvIGRlY29tcHJlc3MuXG4gKiAtIG9wdGlvbnMgKE9iamVjdCk6IHpsaWIgaW5mbGF0ZSBvcHRpb25zLlxuICpcbiAqIEp1c3Qgc2hvcnRjdXQgdG8gW1tpbmZsYXRlXV0sIGJlY2F1c2UgaXQgYXV0b2RldGVjdHMgZm9ybWF0XG4gKiBieSBoZWFkZXIuY29udGVudC4gRG9uZSBmb3IgY29udmVuaWVuY2UuXG4gKiovXG5cblxuZXhwb3J0cy5JbmZsYXRlID0gSW5mbGF0ZTtcbmV4cG9ydHMuaW5mbGF0ZSA9IGluZmxhdGU7XG5leHBvcnRzLmluZmxhdGVSYXcgPSBpbmZsYXRlUmF3O1xuZXhwb3J0cy51bmd6aXAgID0gaW5mbGF0ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgVFlQRURfT0sgPSAgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykgJiZcbiAgICAgICAgICAgICAgICAodHlwZW9mIFVpbnQxNkFycmF5ICE9PSAndW5kZWZpbmVkJykgJiZcbiAgICAgICAgICAgICAgICAodHlwZW9mIEludDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKTtcblxuZnVuY3Rpb24gX2hhcyhvYmosIGtleSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cblxuZXhwb3J0cy5hc3NpZ24gPSBmdW5jdGlvbiAob2JqIC8qZnJvbTEsIGZyb20yLCBmcm9tMywgLi4uKi8pIHtcbiAgdmFyIHNvdXJjZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB3aGlsZSAoc291cmNlcy5sZW5ndGgpIHtcbiAgICB2YXIgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuICAgIGlmICghc291cmNlKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBpZiAodHlwZW9mIHNvdXJjZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3Ioc291cmNlICsgJ211c3QgYmUgbm9uLW9iamVjdCcpO1xuICAgIH1cblxuICAgIGZvciAodmFyIHAgaW4gc291cmNlKSB7XG4gICAgICBpZiAoX2hhcyhzb3VyY2UsIHApKSB7XG4gICAgICAgIG9ialtwXSA9IHNvdXJjZVtwXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG4vLyByZWR1Y2UgYnVmZmVyIHNpemUsIGF2b2lkaW5nIG1lbSBjb3B5XG5leHBvcnRzLnNocmlua0J1ZiA9IGZ1bmN0aW9uIChidWYsIHNpemUpIHtcbiAgaWYgKGJ1Zi5sZW5ndGggPT09IHNpemUpIHsgcmV0dXJuIGJ1ZjsgfVxuICBpZiAoYnVmLnN1YmFycmF5KSB7IHJldHVybiBidWYuc3ViYXJyYXkoMCwgc2l6ZSk7IH1cbiAgYnVmLmxlbmd0aCA9IHNpemU7XG4gIHJldHVybiBidWY7XG59O1xuXG5cbnZhciBmblR5cGVkID0ge1xuICBhcnJheVNldDogZnVuY3Rpb24gKGRlc3QsIHNyYywgc3JjX29mZnMsIGxlbiwgZGVzdF9vZmZzKSB7XG4gICAgaWYgKHNyYy5zdWJhcnJheSAmJiBkZXN0LnN1YmFycmF5KSB7XG4gICAgICBkZXN0LnNldChzcmMuc3ViYXJyYXkoc3JjX29mZnMsIHNyY19vZmZzICsgbGVuKSwgZGVzdF9vZmZzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRmFsbGJhY2sgdG8gb3JkaW5hcnkgYXJyYXlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBkZXN0W2Rlc3Rfb2ZmcyArIGldID0gc3JjW3NyY19vZmZzICsgaV07XG4gICAgfVxuICB9LFxuICAvLyBKb2luIGFycmF5IG9mIGNodW5rcyB0byBzaW5nbGUgYXJyYXkuXG4gIGZsYXR0ZW5DaHVua3M6IGZ1bmN0aW9uIChjaHVua3MpIHtcbiAgICB2YXIgaSwgbCwgbGVuLCBwb3MsIGNodW5rLCByZXN1bHQ7XG5cbiAgICAvLyBjYWxjdWxhdGUgZGF0YSBsZW5ndGhcbiAgICBsZW4gPSAwO1xuICAgIGZvciAoaSA9IDAsIGwgPSBjaHVua3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBsZW4gKz0gY2h1bmtzW2ldLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBqb2luIGNodW5rc1xuICAgIHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGxlbik7XG4gICAgcG9zID0gMDtcbiAgICBmb3IgKGkgPSAwLCBsID0gY2h1bmtzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgY2h1bmsgPSBjaHVua3NbaV07XG4gICAgICByZXN1bHQuc2V0KGNodW5rLCBwb3MpO1xuICAgICAgcG9zICs9IGNodW5rLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuXG52YXIgZm5VbnR5cGVkID0ge1xuICBhcnJheVNldDogZnVuY3Rpb24gKGRlc3QsIHNyYywgc3JjX29mZnMsIGxlbiwgZGVzdF9vZmZzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgZGVzdFtkZXN0X29mZnMgKyBpXSA9IHNyY1tzcmNfb2ZmcyArIGldO1xuICAgIH1cbiAgfSxcbiAgLy8gSm9pbiBhcnJheSBvZiBjaHVua3MgdG8gc2luZ2xlIGFycmF5LlxuICBmbGF0dGVuQ2h1bmtzOiBmdW5jdGlvbiAoY2h1bmtzKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShbXSwgY2h1bmtzKTtcbiAgfVxufTtcblxuXG4vLyBFbmFibGUvRGlzYWJsZSB0eXBlZCBhcnJheXMgdXNlLCBmb3IgdGVzdGluZ1xuLy9cbmV4cG9ydHMuc2V0VHlwZWQgPSBmdW5jdGlvbiAob24pIHtcbiAgaWYgKG9uKSB7XG4gICAgZXhwb3J0cy5CdWY4ICA9IFVpbnQ4QXJyYXk7XG4gICAgZXhwb3J0cy5CdWYxNiA9IFVpbnQxNkFycmF5O1xuICAgIGV4cG9ydHMuQnVmMzIgPSBJbnQzMkFycmF5O1xuICAgIGV4cG9ydHMuYXNzaWduKGV4cG9ydHMsIGZuVHlwZWQpO1xuICB9IGVsc2Uge1xuICAgIGV4cG9ydHMuQnVmOCAgPSBBcnJheTtcbiAgICBleHBvcnRzLkJ1ZjE2ID0gQXJyYXk7XG4gICAgZXhwb3J0cy5CdWYzMiA9IEFycmF5O1xuICAgIGV4cG9ydHMuYXNzaWduKGV4cG9ydHMsIGZuVW50eXBlZCk7XG4gIH1cbn07XG5cbmV4cG9ydHMuc2V0VHlwZWQoVFlQRURfT0spO1xuIiwiLy8gU3RyaW5nIGVuY29kZS9kZWNvZGUgaGVscGVyc1xuJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vY29tbW9uJyk7XG5cblxuLy8gUXVpY2sgY2hlY2sgaWYgd2UgY2FuIHVzZSBmYXN0IGFycmF5IHRvIGJpbiBzdHJpbmcgY29udmVyc2lvblxuLy9cbi8vIC0gYXBwbHkoQXJyYXkpIGNhbiBmYWlsIG9uIEFuZHJvaWQgMi4yXG4vLyAtIGFwcGx5KFVpbnQ4QXJyYXkpIGNhbiBmYWlsIG9uIGlPUyA1LjEgU2FmYXJpXG4vL1xudmFyIFNUUl9BUFBMWV9PSyA9IHRydWU7XG52YXIgU1RSX0FQUExZX1VJQV9PSyA9IHRydWU7XG5cbnRyeSB7IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgWyAwIF0pOyB9IGNhdGNoIChfXykgeyBTVFJfQVBQTFlfT0sgPSBmYWxzZTsgfVxudHJ5IHsgU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheSgxKSk7IH0gY2F0Y2ggKF9fKSB7IFNUUl9BUFBMWV9VSUFfT0sgPSBmYWxzZTsgfVxuXG5cbi8vIFRhYmxlIHdpdGggdXRmOCBsZW5ndGhzIChjYWxjdWxhdGVkIGJ5IGZpcnN0IGJ5dGUgb2Ygc2VxdWVuY2UpXG4vLyBOb3RlLCB0aGF0IDUgJiA2LWJ5dGUgdmFsdWVzIGFuZCBzb21lIDQtYnl0ZSB2YWx1ZXMgY2FuIG5vdCBiZSByZXByZXNlbnRlZCBpbiBKUyxcbi8vIGJlY2F1c2UgbWF4IHBvc3NpYmxlIGNvZGVwb2ludCBpcyAweDEwZmZmZlxudmFyIF91dGY4bGVuID0gbmV3IHV0aWxzLkJ1ZjgoMjU2KTtcbmZvciAodmFyIHEgPSAwOyBxIDwgMjU2OyBxKyspIHtcbiAgX3V0ZjhsZW5bcV0gPSAocSA+PSAyNTIgPyA2IDogcSA+PSAyNDggPyA1IDogcSA+PSAyNDAgPyA0IDogcSA+PSAyMjQgPyAzIDogcSA+PSAxOTIgPyAyIDogMSk7XG59XG5fdXRmOGxlblsyNTRdID0gX3V0ZjhsZW5bMjU0XSA9IDE7IC8vIEludmFsaWQgc2VxdWVuY2Ugc3RhcnRcblxuXG4vLyBjb252ZXJ0IHN0cmluZyB0byBhcnJheSAodHlwZWQsIHdoZW4gcG9zc2libGUpXG5leHBvcnRzLnN0cmluZzJidWYgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHZhciBidWYsIGMsIGMyLCBtX3BvcywgaSwgc3RyX2xlbiA9IHN0ci5sZW5ndGgsIGJ1Zl9sZW4gPSAwO1xuXG4gIC8vIGNvdW50IGJpbmFyeSBzaXplXG4gIGZvciAobV9wb3MgPSAwOyBtX3BvcyA8IHN0cl9sZW47IG1fcG9zKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQobV9wb3MpO1xuICAgIGlmICgoYyAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJiAobV9wb3MgKyAxIDwgc3RyX2xlbikpIHtcbiAgICAgIGMyID0gc3RyLmNoYXJDb2RlQXQobV9wb3MgKyAxKTtcbiAgICAgIGlmICgoYzIgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgICAgYyA9IDB4MTAwMDAgKyAoKGMgLSAweGQ4MDApIDw8IDEwKSArIChjMiAtIDB4ZGMwMCk7XG4gICAgICAgIG1fcG9zKys7XG4gICAgICB9XG4gICAgfVxuICAgIGJ1Zl9sZW4gKz0gYyA8IDB4ODAgPyAxIDogYyA8IDB4ODAwID8gMiA6IGMgPCAweDEwMDAwID8gMyA6IDQ7XG4gIH1cblxuICAvLyBhbGxvY2F0ZSBidWZmZXJcbiAgYnVmID0gbmV3IHV0aWxzLkJ1ZjgoYnVmX2xlbik7XG5cbiAgLy8gY29udmVydFxuICBmb3IgKGkgPSAwLCBtX3BvcyA9IDA7IGkgPCBidWZfbGVuOyBtX3BvcysrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KG1fcG9zKTtcbiAgICBpZiAoKGMgJiAweGZjMDApID09PSAweGQ4MDAgJiYgKG1fcG9zICsgMSA8IHN0cl9sZW4pKSB7XG4gICAgICBjMiA9IHN0ci5jaGFyQ29kZUF0KG1fcG9zICsgMSk7XG4gICAgICBpZiAoKGMyICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgIGMgPSAweDEwMDAwICsgKChjIC0gMHhkODAwKSA8PCAxMCkgKyAoYzIgLSAweGRjMDApO1xuICAgICAgICBtX3BvcysrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgIC8qIG9uZSBieXRlICovXG4gICAgICBidWZbaSsrXSA9IGM7XG4gICAgfSBlbHNlIGlmIChjIDwgMHg4MDApIHtcbiAgICAgIC8qIHR3byBieXRlcyAqL1xuICAgICAgYnVmW2krK10gPSAweEMwIHwgKGMgPj4+IDYpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgJiAweDNmKTtcbiAgICB9IGVsc2UgaWYgKGMgPCAweDEwMDAwKSB7XG4gICAgICAvKiB0aHJlZSBieXRlcyAqL1xuICAgICAgYnVmW2krK10gPSAweEUwIHwgKGMgPj4+IDEyKTtcbiAgICAgIGJ1ZltpKytdID0gMHg4MCB8IChjID4+PiA2ICYgMHgzZik7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyAmIDB4M2YpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiBmb3VyIGJ5dGVzICovXG4gICAgICBidWZbaSsrXSA9IDB4ZjAgfCAoYyA+Pj4gMTgpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgPj4+IDEyICYgMHgzZik7XG4gICAgICBidWZbaSsrXSA9IDB4ODAgfCAoYyA+Pj4gNiAmIDB4M2YpO1xuICAgICAgYnVmW2krK10gPSAweDgwIHwgKGMgJiAweDNmKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmO1xufTtcblxuLy8gSGVscGVyICh1c2VkIGluIDIgcGxhY2VzKVxuZnVuY3Rpb24gYnVmMmJpbnN0cmluZyhidWYsIGxlbikge1xuICAvLyBPbiBDaHJvbWUsIHRoZSBhcmd1bWVudHMgaW4gYSBmdW5jdGlvbiBjYWxsIHRoYXQgYXJlIGFsbG93ZWQgaXMgYDY1NTM0YC5cbiAgLy8gSWYgdGhlIGxlbmd0aCBvZiB0aGUgYnVmZmVyIGlzIHNtYWxsZXIgdGhhbiB0aGF0LCB3ZSBjYW4gdXNlIHRoaXMgb3B0aW1pemF0aW9uLFxuICAvLyBvdGhlcndpc2Ugd2Ugd2lsbCB0YWtlIGEgc2xvd2VyIHBhdGguXG4gIGlmIChsZW4gPCA2NTUzNCkge1xuICAgIGlmICgoYnVmLnN1YmFycmF5ICYmIFNUUl9BUFBMWV9VSUFfT0spIHx8ICghYnVmLnN1YmFycmF5ICYmIFNUUl9BUFBMWV9PSykpIHtcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHV0aWxzLnNocmlua0J1ZihidWYsIGxlbikpO1xuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vLyBDb252ZXJ0IGJ5dGUgYXJyYXkgdG8gYmluYXJ5IHN0cmluZ1xuZXhwb3J0cy5idWYyYmluc3RyaW5nID0gZnVuY3Rpb24gKGJ1Zikge1xuICByZXR1cm4gYnVmMmJpbnN0cmluZyhidWYsIGJ1Zi5sZW5ndGgpO1xufTtcblxuXG4vLyBDb252ZXJ0IGJpbmFyeSBzdHJpbmcgKHR5cGVkLCB3aGVuIHBvc3NpYmxlKVxuZXhwb3J0cy5iaW5zdHJpbmcyYnVmID0gZnVuY3Rpb24gKHN0cikge1xuICB2YXIgYnVmID0gbmV3IHV0aWxzLkJ1Zjgoc3RyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBidWZbaV0gPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4gYnVmO1xufTtcblxuXG4vLyBjb252ZXJ0IGFycmF5IHRvIHN0cmluZ1xuZXhwb3J0cy5idWYyc3RyaW5nID0gZnVuY3Rpb24gKGJ1ZiwgbWF4KSB7XG4gIHZhciBpLCBvdXQsIGMsIGNfbGVuO1xuICB2YXIgbGVuID0gbWF4IHx8IGJ1Zi5sZW5ndGg7XG5cbiAgLy8gUmVzZXJ2ZSBtYXggcG9zc2libGUgbGVuZ3RoICgyIHdvcmRzIHBlciBjaGFyKVxuICAvLyBOQjogYnkgdW5rbm93biByZWFzb25zLCBBcnJheSBpcyBzaWduaWZpY2FudGx5IGZhc3RlciBmb3JcbiAgLy8gICAgIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkgdGhhbiBVaW50MTZBcnJheS5cbiAgdmFyIHV0ZjE2YnVmID0gbmV3IEFycmF5KGxlbiAqIDIpO1xuXG4gIGZvciAob3V0ID0gMCwgaSA9IDA7IGkgPCBsZW47KSB7XG4gICAgYyA9IGJ1ZltpKytdO1xuICAgIC8vIHF1aWNrIHByb2Nlc3MgYXNjaWlcbiAgICBpZiAoYyA8IDB4ODApIHsgdXRmMTZidWZbb3V0KytdID0gYzsgY29udGludWU7IH1cblxuICAgIGNfbGVuID0gX3V0ZjhsZW5bY107XG4gICAgLy8gc2tpcCA1ICYgNiBieXRlIGNvZGVzXG4gICAgaWYgKGNfbGVuID4gNCkgeyB1dGYxNmJ1ZltvdXQrK10gPSAweGZmZmQ7IGkgKz0gY19sZW4gLSAxOyBjb250aW51ZTsgfVxuXG4gICAgLy8gYXBwbHkgbWFzayBvbiBmaXJzdCBieXRlXG4gICAgYyAmPSBjX2xlbiA9PT0gMiA/IDB4MWYgOiBjX2xlbiA9PT0gMyA/IDB4MGYgOiAweDA3O1xuICAgIC8vIGpvaW4gdGhlIHJlc3RcbiAgICB3aGlsZSAoY19sZW4gPiAxICYmIGkgPCBsZW4pIHtcbiAgICAgIGMgPSAoYyA8PCA2KSB8IChidWZbaSsrXSAmIDB4M2YpO1xuICAgICAgY19sZW4tLTtcbiAgICB9XG5cbiAgICAvLyB0ZXJtaW5hdGVkIGJ5IGVuZCBvZiBzdHJpbmc/XG4gICAgaWYgKGNfbGVuID4gMSkgeyB1dGYxNmJ1ZltvdXQrK10gPSAweGZmZmQ7IGNvbnRpbnVlOyB9XG5cbiAgICBpZiAoYyA8IDB4MTAwMDApIHtcbiAgICAgIHV0ZjE2YnVmW291dCsrXSA9IGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGMgLT0gMHgxMDAwMDtcbiAgICAgIHV0ZjE2YnVmW291dCsrXSA9IDB4ZDgwMCB8ICgoYyA+PiAxMCkgJiAweDNmZik7XG4gICAgICB1dGYxNmJ1ZltvdXQrK10gPSAweGRjMDAgfCAoYyAmIDB4M2ZmKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmMmJpbnN0cmluZyh1dGYxNmJ1Ziwgb3V0KTtcbn07XG5cblxuLy8gQ2FsY3VsYXRlIG1heCBwb3NzaWJsZSBwb3NpdGlvbiBpbiB1dGY4IGJ1ZmZlcixcbi8vIHRoYXQgd2lsbCBub3QgYnJlYWsgc2VxdWVuY2UuIElmIHRoYXQncyBub3QgcG9zc2libGVcbi8vIC0gKHZlcnkgc21hbGwgbGltaXRzKSByZXR1cm4gbWF4IHNpemUgYXMgaXMuXG4vL1xuLy8gYnVmW10gLSB1dGY4IGJ5dGVzIGFycmF5XG4vLyBtYXggICAtIGxlbmd0aCBsaW1pdCAobWFuZGF0b3J5KTtcbmV4cG9ydHMudXRmOGJvcmRlciA9IGZ1bmN0aW9uIChidWYsIG1heCkge1xuICB2YXIgcG9zO1xuXG4gIG1heCA9IG1heCB8fCBidWYubGVuZ3RoO1xuICBpZiAobWF4ID4gYnVmLmxlbmd0aCkgeyBtYXggPSBidWYubGVuZ3RoOyB9XG5cbiAgLy8gZ28gYmFjayBmcm9tIGxhc3QgcG9zaXRpb24sIHVudGlsIHN0YXJ0IG9mIHNlcXVlbmNlIGZvdW5kXG4gIHBvcyA9IG1heCAtIDE7XG4gIHdoaWxlIChwb3MgPj0gMCAmJiAoYnVmW3Bvc10gJiAweEMwKSA9PT0gMHg4MCkgeyBwb3MtLTsgfVxuXG4gIC8vIFZlcnkgc21hbGwgYW5kIGJyb2tlbiBzZXF1ZW5jZSxcbiAgLy8gcmV0dXJuIG1heCwgYmVjYXVzZSB3ZSBzaG91bGQgcmV0dXJuIHNvbWV0aGluZyBhbnl3YXkuXG4gIGlmIChwb3MgPCAwKSB7IHJldHVybiBtYXg7IH1cblxuICAvLyBJZiB3ZSBjYW1lIHRvIHN0YXJ0IG9mIGJ1ZmZlciAtIHRoYXQgbWVhbnMgYnVmZmVyIGlzIHRvbyBzbWFsbCxcbiAgLy8gcmV0dXJuIG1heCB0b28uXG4gIGlmIChwb3MgPT09IDApIHsgcmV0dXJuIG1heDsgfVxuXG4gIHJldHVybiAocG9zICsgX3V0ZjhsZW5bYnVmW3Bvc11dID4gbWF4KSA/IHBvcyA6IG1heDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIE5vdGU6IGFkbGVyMzIgdGFrZXMgMTIlIGZvciBsZXZlbCAwIGFuZCAyJSBmb3IgbGV2ZWwgNi5cbi8vIEl0IGlzbid0IHdvcnRoIGl0IHRvIG1ha2UgYWRkaXRpb25hbCBvcHRpbWl6YXRpb25zIGFzIGluIG9yaWdpbmFsLlxuLy8gU21hbGwgc2l6ZSBpcyBwcmVmZXJhYmxlLlxuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbmZ1bmN0aW9uIGFkbGVyMzIoYWRsZXIsIGJ1ZiwgbGVuLCBwb3MpIHtcbiAgdmFyIHMxID0gKGFkbGVyICYgMHhmZmZmKSB8MCxcbiAgICAgIHMyID0gKChhZGxlciA+Pj4gMTYpICYgMHhmZmZmKSB8MCxcbiAgICAgIG4gPSAwO1xuXG4gIHdoaWxlIChsZW4gIT09IDApIHtcbiAgICAvLyBTZXQgbGltaXQgfiB0d2ljZSBsZXNzIHRoYW4gNTU1MiwgdG8ga2VlcFxuICAgIC8vIHMyIGluIDMxLWJpdHMsIGJlY2F1c2Ugd2UgZm9yY2Ugc2lnbmVkIGludHMuXG4gICAgLy8gaW4gb3RoZXIgY2FzZSAlPSB3aWxsIGZhaWwuXG4gICAgbiA9IGxlbiA+IDIwMDAgPyAyMDAwIDogbGVuO1xuICAgIGxlbiAtPSBuO1xuXG4gICAgZG8ge1xuICAgICAgczEgPSAoczEgKyBidWZbcG9zKytdKSB8MDtcbiAgICAgIHMyID0gKHMyICsgczEpIHwwO1xuICAgIH0gd2hpbGUgKC0tbik7XG5cbiAgICBzMSAlPSA2NTUyMTtcbiAgICBzMiAlPSA2NTUyMTtcbiAgfVxuXG4gIHJldHVybiAoczEgfCAoczIgPDwgMTYpKSB8MDtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkbGVyMzI7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyogQWxsb3dlZCBmbHVzaCB2YWx1ZXM7IHNlZSBkZWZsYXRlKCkgYW5kIGluZmxhdGUoKSBiZWxvdyBmb3IgZGV0YWlscyAqL1xuICBaX05PX0ZMVVNIOiAgICAgICAgIDAsXG4gIFpfUEFSVElBTF9GTFVTSDogICAgMSxcbiAgWl9TWU5DX0ZMVVNIOiAgICAgICAyLFxuICBaX0ZVTExfRkxVU0g6ICAgICAgIDMsXG4gIFpfRklOSVNIOiAgICAgICAgICAgNCxcbiAgWl9CTE9DSzogICAgICAgICAgICA1LFxuICBaX1RSRUVTOiAgICAgICAgICAgIDYsXG5cbiAgLyogUmV0dXJuIGNvZGVzIGZvciB0aGUgY29tcHJlc3Npb24vZGVjb21wcmVzc2lvbiBmdW5jdGlvbnMuIE5lZ2F0aXZlIHZhbHVlc1xuICAqIGFyZSBlcnJvcnMsIHBvc2l0aXZlIHZhbHVlcyBhcmUgdXNlZCBmb3Igc3BlY2lhbCBidXQgbm9ybWFsIGV2ZW50cy5cbiAgKi9cbiAgWl9PSzogICAgICAgICAgICAgICAwLFxuICBaX1NUUkVBTV9FTkQ6ICAgICAgIDEsXG4gIFpfTkVFRF9ESUNUOiAgICAgICAgMixcbiAgWl9FUlJOTzogICAgICAgICAgIC0xLFxuICBaX1NUUkVBTV9FUlJPUjogICAgLTIsXG4gIFpfREFUQV9FUlJPUjogICAgICAtMyxcbiAgLy9aX01FTV9FUlJPUjogICAgIC00LFxuICBaX0JVRl9FUlJPUjogICAgICAgLTUsXG4gIC8vWl9WRVJTSU9OX0VSUk9SOiAtNixcblxuICAvKiBjb21wcmVzc2lvbiBsZXZlbHMgKi9cbiAgWl9OT19DT01QUkVTU0lPTjogICAgICAgICAwLFxuICBaX0JFU1RfU1BFRUQ6ICAgICAgICAgICAgIDEsXG4gIFpfQkVTVF9DT01QUkVTU0lPTjogICAgICAgOSxcbiAgWl9ERUZBVUxUX0NPTVBSRVNTSU9OOiAgIC0xLFxuXG5cbiAgWl9GSUxURVJFRDogICAgICAgICAgICAgICAxLFxuICBaX0hVRkZNQU5fT05MWTogICAgICAgICAgIDIsXG4gIFpfUkxFOiAgICAgICAgICAgICAgICAgICAgMyxcbiAgWl9GSVhFRDogICAgICAgICAgICAgICAgICA0LFxuICBaX0RFRkFVTFRfU1RSQVRFR1k6ICAgICAgIDAsXG5cbiAgLyogUG9zc2libGUgdmFsdWVzIG9mIHRoZSBkYXRhX3R5cGUgZmllbGQgKHRob3VnaCBzZWUgaW5mbGF0ZSgpKSAqL1xuICBaX0JJTkFSWTogICAgICAgICAgICAgICAgIDAsXG4gIFpfVEVYVDogICAgICAgICAgICAgICAgICAgMSxcbiAgLy9aX0FTQ0lJOiAgICAgICAgICAgICAgICAxLCAvLyA9IFpfVEVYVCAoZGVwcmVjYXRlZClcbiAgWl9VTktOT1dOOiAgICAgICAgICAgICAgICAyLFxuXG4gIC8qIFRoZSBkZWZsYXRlIGNvbXByZXNzaW9uIG1ldGhvZCAqL1xuICBaX0RFRkxBVEVEOiAgICAgICAgICAgICAgIDhcbiAgLy9aX05VTEw6ICAgICAgICAgICAgICAgICBudWxsIC8vIFVzZSAtMSBvciBudWxsIGlubGluZSwgZGVwZW5kaW5nIG9uIHZhciB0eXBlXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBOb3RlOiB3ZSBjYW4ndCBnZXQgc2lnbmlmaWNhbnQgc3BlZWQgYm9vc3QgaGVyZS5cbi8vIFNvIHdyaXRlIGNvZGUgdG8gbWluaW1pemUgc2l6ZSAtIG5vIHByZWdlbmVyYXRlZCB0YWJsZXNcbi8vIGFuZCBhcnJheSB0b29scyBkZXBlbmRlbmNpZXMuXG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuLy8gVXNlIG9yZGluYXJ5IGFycmF5LCBzaW5jZSB1bnR5cGVkIG1ha2VzIG5vIGJvb3N0IGhlcmVcbmZ1bmN0aW9uIG1ha2VUYWJsZSgpIHtcbiAgdmFyIGMsIHRhYmxlID0gW107XG5cbiAgZm9yICh2YXIgbiA9IDA7IG4gPCAyNTY7IG4rKykge1xuICAgIGMgPSBuO1xuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjID0gKChjICYgMSkgPyAoMHhFREI4ODMyMCBeIChjID4+PiAxKSkgOiAoYyA+Pj4gMSkpO1xuICAgIH1cbiAgICB0YWJsZVtuXSA9IGM7XG4gIH1cblxuICByZXR1cm4gdGFibGU7XG59XG5cbi8vIENyZWF0ZSB0YWJsZSBvbiBsb2FkLiBKdXN0IDI1NSBzaWduZWQgbG9uZ3MuIE5vdCBhIHByb2JsZW0uXG52YXIgY3JjVGFibGUgPSBtYWtlVGFibGUoKTtcblxuXG5mdW5jdGlvbiBjcmMzMihjcmMsIGJ1ZiwgbGVuLCBwb3MpIHtcbiAgdmFyIHQgPSBjcmNUYWJsZSxcbiAgICAgIGVuZCA9IHBvcyArIGxlbjtcblxuICBjcmMgXj0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IHBvczsgaSA8IGVuZDsgaSsrKSB7XG4gICAgY3JjID0gKGNyYyA+Pj4gOCkgXiB0WyhjcmMgXiBidWZbaV0pICYgMHhGRl07XG4gIH1cblxuICByZXR1cm4gKGNyYyBeICgtMSkpOyAvLyA+Pj4gMDtcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyYzMyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbnZhciB1dGlscyAgID0gcmVxdWlyZSgnLi4vdXRpbHMvY29tbW9uJyk7XG52YXIgdHJlZXMgICA9IHJlcXVpcmUoJy4vdHJlZXMnKTtcbnZhciBhZGxlcjMyID0gcmVxdWlyZSgnLi9hZGxlcjMyJyk7XG52YXIgY3JjMzIgICA9IHJlcXVpcmUoJy4vY3JjMzInKTtcbnZhciBtc2cgICAgID0gcmVxdWlyZSgnLi9tZXNzYWdlcycpO1xuXG4vKiBQdWJsaWMgY29uc3RhbnRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG4vKiBBbGxvd2VkIGZsdXNoIHZhbHVlczsgc2VlIGRlZmxhdGUoKSBhbmQgaW5mbGF0ZSgpIGJlbG93IGZvciBkZXRhaWxzICovXG52YXIgWl9OT19GTFVTSCAgICAgID0gMDtcbnZhciBaX1BBUlRJQUxfRkxVU0ggPSAxO1xuLy92YXIgWl9TWU5DX0ZMVVNIICAgID0gMjtcbnZhciBaX0ZVTExfRkxVU0ggICAgPSAzO1xudmFyIFpfRklOSVNIICAgICAgICA9IDQ7XG52YXIgWl9CTE9DSyAgICAgICAgID0gNTtcbi8vdmFyIFpfVFJFRVMgICAgICAgICA9IDY7XG5cblxuLyogUmV0dXJuIGNvZGVzIGZvciB0aGUgY29tcHJlc3Npb24vZGVjb21wcmVzc2lvbiBmdW5jdGlvbnMuIE5lZ2F0aXZlIHZhbHVlc1xuICogYXJlIGVycm9ycywgcG9zaXRpdmUgdmFsdWVzIGFyZSB1c2VkIGZvciBzcGVjaWFsIGJ1dCBub3JtYWwgZXZlbnRzLlxuICovXG52YXIgWl9PSyAgICAgICAgICAgID0gMDtcbnZhciBaX1NUUkVBTV9FTkQgICAgPSAxO1xuLy92YXIgWl9ORUVEX0RJQ1QgICAgID0gMjtcbi8vdmFyIFpfRVJSTk8gICAgICAgICA9IC0xO1xudmFyIFpfU1RSRUFNX0VSUk9SICA9IC0yO1xudmFyIFpfREFUQV9FUlJPUiAgICA9IC0zO1xuLy92YXIgWl9NRU1fRVJST1IgICAgID0gLTQ7XG52YXIgWl9CVUZfRVJST1IgICAgID0gLTU7XG4vL3ZhciBaX1ZFUlNJT05fRVJST1IgPSAtNjtcblxuXG4vKiBjb21wcmVzc2lvbiBsZXZlbHMgKi9cbi8vdmFyIFpfTk9fQ09NUFJFU1NJT04gICAgICA9IDA7XG4vL3ZhciBaX0JFU1RfU1BFRUQgICAgICAgICAgPSAxO1xuLy92YXIgWl9CRVNUX0NPTVBSRVNTSU9OICAgID0gOTtcbnZhciBaX0RFRkFVTFRfQ09NUFJFU1NJT04gPSAtMTtcblxuXG52YXIgWl9GSUxURVJFRCAgICAgICAgICAgID0gMTtcbnZhciBaX0hVRkZNQU5fT05MWSAgICAgICAgPSAyO1xudmFyIFpfUkxFICAgICAgICAgICAgICAgICA9IDM7XG52YXIgWl9GSVhFRCAgICAgICAgICAgICAgID0gNDtcbnZhciBaX0RFRkFVTFRfU1RSQVRFR1kgICAgPSAwO1xuXG4vKiBQb3NzaWJsZSB2YWx1ZXMgb2YgdGhlIGRhdGFfdHlwZSBmaWVsZCAodGhvdWdoIHNlZSBpbmZsYXRlKCkpICovXG4vL3ZhciBaX0JJTkFSWSAgICAgICAgICAgICAgPSAwO1xuLy92YXIgWl9URVhUICAgICAgICAgICAgICAgID0gMTtcbi8vdmFyIFpfQVNDSUkgICAgICAgICAgICAgICA9IDE7IC8vID0gWl9URVhUXG52YXIgWl9VTktOT1dOICAgICAgICAgICAgID0gMjtcblxuXG4vKiBUaGUgZGVmbGF0ZSBjb21wcmVzc2lvbiBtZXRob2QgKi9cbnZhciBaX0RFRkxBVEVEICA9IDg7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxudmFyIE1BWF9NRU1fTEVWRUwgPSA5O1xuLyogTWF4aW11bSB2YWx1ZSBmb3IgbWVtTGV2ZWwgaW4gZGVmbGF0ZUluaXQyICovXG52YXIgTUFYX1dCSVRTID0gMTU7XG4vKiAzMksgTFo3NyB3aW5kb3cgKi9cbnZhciBERUZfTUVNX0xFVkVMID0gODtcblxuXG52YXIgTEVOR1RIX0NPREVTICA9IDI5O1xuLyogbnVtYmVyIG9mIGxlbmd0aCBjb2Rlcywgbm90IGNvdW50aW5nIHRoZSBzcGVjaWFsIEVORF9CTE9DSyBjb2RlICovXG52YXIgTElURVJBTFMgICAgICA9IDI1Njtcbi8qIG51bWJlciBvZiBsaXRlcmFsIGJ5dGVzIDAuLjI1NSAqL1xudmFyIExfQ09ERVMgICAgICAgPSBMSVRFUkFMUyArIDEgKyBMRU5HVEhfQ09ERVM7XG4vKiBudW1iZXIgb2YgTGl0ZXJhbCBvciBMZW5ndGggY29kZXMsIGluY2x1ZGluZyB0aGUgRU5EX0JMT0NLIGNvZGUgKi9cbnZhciBEX0NPREVTICAgICAgID0gMzA7XG4vKiBudW1iZXIgb2YgZGlzdGFuY2UgY29kZXMgKi9cbnZhciBCTF9DT0RFUyAgICAgID0gMTk7XG4vKiBudW1iZXIgb2YgY29kZXMgdXNlZCB0byB0cmFuc2ZlciB0aGUgYml0IGxlbmd0aHMgKi9cbnZhciBIRUFQX1NJWkUgICAgID0gMiAqIExfQ09ERVMgKyAxO1xuLyogbWF4aW11bSBoZWFwIHNpemUgKi9cbnZhciBNQVhfQklUUyAgPSAxNTtcbi8qIEFsbCBjb2RlcyBtdXN0IG5vdCBleGNlZWQgTUFYX0JJVFMgYml0cyAqL1xuXG52YXIgTUlOX01BVENIID0gMztcbnZhciBNQVhfTUFUQ0ggPSAyNTg7XG52YXIgTUlOX0xPT0tBSEVBRCA9IChNQVhfTUFUQ0ggKyBNSU5fTUFUQ0ggKyAxKTtcblxudmFyIFBSRVNFVF9ESUNUID0gMHgyMDtcblxudmFyIElOSVRfU1RBVEUgPSA0MjtcbnZhciBFWFRSQV9TVEFURSA9IDY5O1xudmFyIE5BTUVfU1RBVEUgPSA3MztcbnZhciBDT01NRU5UX1NUQVRFID0gOTE7XG52YXIgSENSQ19TVEFURSA9IDEwMztcbnZhciBCVVNZX1NUQVRFID0gMTEzO1xudmFyIEZJTklTSF9TVEFURSA9IDY2NjtcblxudmFyIEJTX05FRURfTU9SRSAgICAgID0gMTsgLyogYmxvY2sgbm90IGNvbXBsZXRlZCwgbmVlZCBtb3JlIGlucHV0IG9yIG1vcmUgb3V0cHV0ICovXG52YXIgQlNfQkxPQ0tfRE9ORSAgICAgPSAyOyAvKiBibG9jayBmbHVzaCBwZXJmb3JtZWQgKi9cbnZhciBCU19GSU5JU0hfU1RBUlRFRCA9IDM7IC8qIGZpbmlzaCBzdGFydGVkLCBuZWVkIG9ubHkgbW9yZSBvdXRwdXQgYXQgbmV4dCBkZWZsYXRlICovXG52YXIgQlNfRklOSVNIX0RPTkUgICAgPSA0OyAvKiBmaW5pc2ggZG9uZSwgYWNjZXB0IG5vIG1vcmUgaW5wdXQgb3Igb3V0cHV0ICovXG5cbnZhciBPU19DT0RFID0gMHgwMzsgLy8gVW5peCA6KSAuIERvbid0IGRldGVjdCwgdXNlIHRoaXMgZGVmYXVsdC5cblxuZnVuY3Rpb24gZXJyKHN0cm0sIGVycm9yQ29kZSkge1xuICBzdHJtLm1zZyA9IG1zZ1tlcnJvckNvZGVdO1xuICByZXR1cm4gZXJyb3JDb2RlO1xufVxuXG5mdW5jdGlvbiByYW5rKGYpIHtcbiAgcmV0dXJuICgoZikgPDwgMSkgLSAoKGYpID4gNCA/IDkgOiAwKTtcbn1cblxuZnVuY3Rpb24gemVybyhidWYpIHsgdmFyIGxlbiA9IGJ1Zi5sZW5ndGg7IHdoaWxlICgtLWxlbiA+PSAwKSB7IGJ1ZltsZW5dID0gMDsgfSB9XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRmx1c2ggYXMgbXVjaCBwZW5kaW5nIG91dHB1dCBhcyBwb3NzaWJsZS4gQWxsIGRlZmxhdGUoKSBvdXRwdXQgZ29lc1xuICogdGhyb3VnaCB0aGlzIGZ1bmN0aW9uIHNvIHNvbWUgYXBwbGljYXRpb25zIG1heSB3aXNoIHRvIG1vZGlmeSBpdFxuICogdG8gYXZvaWQgYWxsb2NhdGluZyBhIGxhcmdlIHN0cm0tPm91dHB1dCBidWZmZXIgYW5kIGNvcHlpbmcgaW50byBpdC5cbiAqIChTZWUgYWxzbyByZWFkX2J1ZigpKS5cbiAqL1xuZnVuY3Rpb24gZmx1c2hfcGVuZGluZyhzdHJtKSB7XG4gIHZhciBzID0gc3RybS5zdGF0ZTtcblxuICAvL190cl9mbHVzaF9iaXRzKHMpO1xuICB2YXIgbGVuID0gcy5wZW5kaW5nO1xuICBpZiAobGVuID4gc3RybS5hdmFpbF9vdXQpIHtcbiAgICBsZW4gPSBzdHJtLmF2YWlsX291dDtcbiAgfVxuICBpZiAobGVuID09PSAwKSB7IHJldHVybjsgfVxuXG4gIHV0aWxzLmFycmF5U2V0KHN0cm0ub3V0cHV0LCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmdfb3V0LCBsZW4sIHN0cm0ubmV4dF9vdXQpO1xuICBzdHJtLm5leHRfb3V0ICs9IGxlbjtcbiAgcy5wZW5kaW5nX291dCArPSBsZW47XG4gIHN0cm0udG90YWxfb3V0ICs9IGxlbjtcbiAgc3RybS5hdmFpbF9vdXQgLT0gbGVuO1xuICBzLnBlbmRpbmcgLT0gbGVuO1xuICBpZiAocy5wZW5kaW5nID09PSAwKSB7XG4gICAgcy5wZW5kaW5nX291dCA9IDA7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBmbHVzaF9ibG9ja19vbmx5KHMsIGxhc3QpIHtcbiAgdHJlZXMuX3RyX2ZsdXNoX2Jsb2NrKHMsIChzLmJsb2NrX3N0YXJ0ID49IDAgPyBzLmJsb2NrX3N0YXJ0IDogLTEpLCBzLnN0cnN0YXJ0IC0gcy5ibG9ja19zdGFydCwgbGFzdCk7XG4gIHMuYmxvY2tfc3RhcnQgPSBzLnN0cnN0YXJ0O1xuICBmbHVzaF9wZW5kaW5nKHMuc3RybSk7XG59XG5cblxuZnVuY3Rpb24gcHV0X2J5dGUocywgYikge1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9IGI7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogUHV0IGEgc2hvcnQgaW4gdGhlIHBlbmRpbmcgYnVmZmVyLiBUaGUgMTYtYml0IHZhbHVlIGlzIHB1dCBpbiBNU0Igb3JkZXIuXG4gKiBJTiBhc3NlcnRpb246IHRoZSBzdHJlYW0gc3RhdGUgaXMgY29ycmVjdCBhbmQgdGhlcmUgaXMgZW5vdWdoIHJvb20gaW5cbiAqIHBlbmRpbmdfYnVmLlxuICovXG5mdW5jdGlvbiBwdXRTaG9ydE1TQihzLCBiKSB7XG4vLyAgcHV0X2J5dGUocywgKEJ5dGUpKGIgPj4gOCkpO1xuLy8gIHB1dF9ieXRlKHMsIChCeXRlKShiICYgMHhmZikpO1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9IChiID4+PiA4KSAmIDB4ZmY7XG4gIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gYiAmIDB4ZmY7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBSZWFkIGEgbmV3IGJ1ZmZlciBmcm9tIHRoZSBjdXJyZW50IGlucHV0IHN0cmVhbSwgdXBkYXRlIHRoZSBhZGxlcjMyXG4gKiBhbmQgdG90YWwgbnVtYmVyIG9mIGJ5dGVzIHJlYWQuICBBbGwgZGVmbGF0ZSgpIGlucHV0IGdvZXMgdGhyb3VnaFxuICogdGhpcyBmdW5jdGlvbiBzbyBzb21lIGFwcGxpY2F0aW9ucyBtYXkgd2lzaCB0byBtb2RpZnkgaXQgdG8gYXZvaWRcbiAqIGFsbG9jYXRpbmcgYSBsYXJnZSBzdHJtLT5pbnB1dCBidWZmZXIgYW5kIGNvcHlpbmcgZnJvbSBpdC5cbiAqIChTZWUgYWxzbyBmbHVzaF9wZW5kaW5nKCkpLlxuICovXG5mdW5jdGlvbiByZWFkX2J1ZihzdHJtLCBidWYsIHN0YXJ0LCBzaXplKSB7XG4gIHZhciBsZW4gPSBzdHJtLmF2YWlsX2luO1xuXG4gIGlmIChsZW4gPiBzaXplKSB7IGxlbiA9IHNpemU7IH1cbiAgaWYgKGxlbiA9PT0gMCkgeyByZXR1cm4gMDsgfVxuXG4gIHN0cm0uYXZhaWxfaW4gLT0gbGVuO1xuXG4gIC8vIHptZW1jcHkoYnVmLCBzdHJtLT5uZXh0X2luLCBsZW4pO1xuICB1dGlscy5hcnJheVNldChidWYsIHN0cm0uaW5wdXQsIHN0cm0ubmV4dF9pbiwgbGVuLCBzdGFydCk7XG4gIGlmIChzdHJtLnN0YXRlLndyYXAgPT09IDEpIHtcbiAgICBzdHJtLmFkbGVyID0gYWRsZXIzMihzdHJtLmFkbGVyLCBidWYsIGxlbiwgc3RhcnQpO1xuICB9XG5cbiAgZWxzZSBpZiAoc3RybS5zdGF0ZS53cmFwID09PSAyKSB7XG4gICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIGJ1ZiwgbGVuLCBzdGFydCk7XG4gIH1cblxuICBzdHJtLm5leHRfaW4gKz0gbGVuO1xuICBzdHJtLnRvdGFsX2luICs9IGxlbjtcblxuICByZXR1cm4gbGVuO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2V0IG1hdGNoX3N0YXJ0IHRvIHRoZSBsb25nZXN0IG1hdGNoIHN0YXJ0aW5nIGF0IHRoZSBnaXZlbiBzdHJpbmcgYW5kXG4gKiByZXR1cm4gaXRzIGxlbmd0aC4gTWF0Y2hlcyBzaG9ydGVyIG9yIGVxdWFsIHRvIHByZXZfbGVuZ3RoIGFyZSBkaXNjYXJkZWQsXG4gKiBpbiB3aGljaCBjYXNlIHRoZSByZXN1bHQgaXMgZXF1YWwgdG8gcHJldl9sZW5ndGggYW5kIG1hdGNoX3N0YXJ0IGlzXG4gKiBnYXJiYWdlLlxuICogSU4gYXNzZXJ0aW9uczogY3VyX21hdGNoIGlzIHRoZSBoZWFkIG9mIHRoZSBoYXNoIGNoYWluIGZvciB0aGUgY3VycmVudFxuICogICBzdHJpbmcgKHN0cnN0YXJ0KSBhbmQgaXRzIGRpc3RhbmNlIGlzIDw9IE1BWF9ESVNULCBhbmQgcHJldl9sZW5ndGggPj0gMVxuICogT1VUIGFzc2VydGlvbjogdGhlIG1hdGNoIGxlbmd0aCBpcyBub3QgZ3JlYXRlciB0aGFuIHMtPmxvb2thaGVhZC5cbiAqL1xuZnVuY3Rpb24gbG9uZ2VzdF9tYXRjaChzLCBjdXJfbWF0Y2gpIHtcbiAgdmFyIGNoYWluX2xlbmd0aCA9IHMubWF4X2NoYWluX2xlbmd0aDsgICAgICAvKiBtYXggaGFzaCBjaGFpbiBsZW5ndGggKi9cbiAgdmFyIHNjYW4gPSBzLnN0cnN0YXJ0OyAvKiBjdXJyZW50IHN0cmluZyAqL1xuICB2YXIgbWF0Y2g7ICAgICAgICAgICAgICAgICAgICAgICAvKiBtYXRjaGVkIHN0cmluZyAqL1xuICB2YXIgbGVuOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGxlbmd0aCBvZiBjdXJyZW50IG1hdGNoICovXG4gIHZhciBiZXN0X2xlbiA9IHMucHJldl9sZW5ndGg7ICAgICAgICAgICAgICAvKiBiZXN0IG1hdGNoIGxlbmd0aCBzbyBmYXIgKi9cbiAgdmFyIG5pY2VfbWF0Y2ggPSBzLm5pY2VfbWF0Y2g7ICAgICAgICAgICAgIC8qIHN0b3AgaWYgbWF0Y2ggbG9uZyBlbm91Z2ggKi9cbiAgdmFyIGxpbWl0ID0gKHMuc3Ryc3RhcnQgPiAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKSkgP1xuICAgICAgcy5zdHJzdGFydCAtIChzLndfc2l6ZSAtIE1JTl9MT09LQUhFQUQpIDogMC8qTklMKi87XG5cbiAgdmFyIF93aW4gPSBzLndpbmRvdzsgLy8gc2hvcnRjdXRcblxuICB2YXIgd21hc2sgPSBzLndfbWFzaztcbiAgdmFyIHByZXYgID0gcy5wcmV2O1xuXG4gIC8qIFN0b3Agd2hlbiBjdXJfbWF0Y2ggYmVjb21lcyA8PSBsaW1pdC4gVG8gc2ltcGxpZnkgdGhlIGNvZGUsXG4gICAqIHdlIHByZXZlbnQgbWF0Y2hlcyB3aXRoIHRoZSBzdHJpbmcgb2Ygd2luZG93IGluZGV4IDAuXG4gICAqL1xuXG4gIHZhciBzdHJlbmQgPSBzLnN0cnN0YXJ0ICsgTUFYX01BVENIO1xuICB2YXIgc2Nhbl9lbmQxICA9IF93aW5bc2NhbiArIGJlc3RfbGVuIC0gMV07XG4gIHZhciBzY2FuX2VuZCAgID0gX3dpbltzY2FuICsgYmVzdF9sZW5dO1xuXG4gIC8qIFRoZSBjb2RlIGlzIG9wdGltaXplZCBmb3IgSEFTSF9CSVRTID49IDggYW5kIE1BWF9NQVRDSC0yIG11bHRpcGxlIG9mIDE2LlxuICAgKiBJdCBpcyBlYXN5IHRvIGdldCByaWQgb2YgdGhpcyBvcHRpbWl6YXRpb24gaWYgbmVjZXNzYXJ5LlxuICAgKi9cbiAgLy8gQXNzZXJ0KHMtPmhhc2hfYml0cyA+PSA4ICYmIE1BWF9NQVRDSCA9PSAyNTgsIFwiQ29kZSB0b28gY2xldmVyXCIpO1xuXG4gIC8qIERvIG5vdCB3YXN0ZSB0b28gbXVjaCB0aW1lIGlmIHdlIGFscmVhZHkgaGF2ZSBhIGdvb2QgbWF0Y2g6ICovXG4gIGlmIChzLnByZXZfbGVuZ3RoID49IHMuZ29vZF9tYXRjaCkge1xuICAgIGNoYWluX2xlbmd0aCA+Pj0gMjtcbiAgfVxuICAvKiBEbyBub3QgbG9vayBmb3IgbWF0Y2hlcyBiZXlvbmQgdGhlIGVuZCBvZiB0aGUgaW5wdXQuIFRoaXMgaXMgbmVjZXNzYXJ5XG4gICAqIHRvIG1ha2UgZGVmbGF0ZSBkZXRlcm1pbmlzdGljLlxuICAgKi9cbiAgaWYgKG5pY2VfbWF0Y2ggPiBzLmxvb2thaGVhZCkgeyBuaWNlX21hdGNoID0gcy5sb29rYWhlYWQ7IH1cblxuICAvLyBBc3NlcnQoKHVsZylzLT5zdHJzdGFydCA8PSBzLT53aW5kb3dfc2l6ZS1NSU5fTE9PS0FIRUFELCBcIm5lZWQgbG9va2FoZWFkXCIpO1xuXG4gIGRvIHtcbiAgICAvLyBBc3NlcnQoY3VyX21hdGNoIDwgcy0+c3Ryc3RhcnQsIFwibm8gZnV0dXJlXCIpO1xuICAgIG1hdGNoID0gY3VyX21hdGNoO1xuXG4gICAgLyogU2tpcCB0byBuZXh0IG1hdGNoIGlmIHRoZSBtYXRjaCBsZW5ndGggY2Fubm90IGluY3JlYXNlXG4gICAgICogb3IgaWYgdGhlIG1hdGNoIGxlbmd0aCBpcyBsZXNzIHRoYW4gMi4gIE5vdGUgdGhhdCB0aGUgY2hlY2tzIGJlbG93XG4gICAgICogZm9yIGluc3VmZmljaWVudCBsb29rYWhlYWQgb25seSBvY2N1ciBvY2Nhc2lvbmFsbHkgZm9yIHBlcmZvcm1hbmNlXG4gICAgICogcmVhc29ucy4gIFRoZXJlZm9yZSB1bmluaXRpYWxpemVkIG1lbW9yeSB3aWxsIGJlIGFjY2Vzc2VkLCBhbmRcbiAgICAgKiBjb25kaXRpb25hbCBqdW1wcyB3aWxsIGJlIG1hZGUgdGhhdCBkZXBlbmQgb24gdGhvc2UgdmFsdWVzLlxuICAgICAqIEhvd2V2ZXIgdGhlIGxlbmd0aCBvZiB0aGUgbWF0Y2ggaXMgbGltaXRlZCB0byB0aGUgbG9va2FoZWFkLCBzb1xuICAgICAqIHRoZSBvdXRwdXQgb2YgZGVmbGF0ZSBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIHVuaW5pdGlhbGl6ZWQgdmFsdWVzLlxuICAgICAqL1xuXG4gICAgaWYgKF93aW5bbWF0Y2ggKyBiZXN0X2xlbl0gICAgICE9PSBzY2FuX2VuZCAgfHxcbiAgICAgICAgX3dpblttYXRjaCArIGJlc3RfbGVuIC0gMV0gIT09IHNjYW5fZW5kMSB8fFxuICAgICAgICBfd2luW21hdGNoXSAgICAgICAgICAgICAgICAhPT0gX3dpbltzY2FuXSB8fFxuICAgICAgICBfd2luWysrbWF0Y2hdICAgICAgICAgICAgICAhPT0gX3dpbltzY2FuICsgMV0pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8qIFRoZSBjaGVjayBhdCBiZXN0X2xlbi0xIGNhbiBiZSByZW1vdmVkIGJlY2F1c2UgaXQgd2lsbCBiZSBtYWRlXG4gICAgICogYWdhaW4gbGF0ZXIuIChUaGlzIGhldXJpc3RpYyBpcyBub3QgYWx3YXlzIGEgd2luLilcbiAgICAgKiBJdCBpcyBub3QgbmVjZXNzYXJ5IHRvIGNvbXBhcmUgc2NhblsyXSBhbmQgbWF0Y2hbMl0gc2luY2UgdGhleVxuICAgICAqIGFyZSBhbHdheXMgZXF1YWwgd2hlbiB0aGUgb3RoZXIgYnl0ZXMgbWF0Y2gsIGdpdmVuIHRoYXRcbiAgICAgKiB0aGUgaGFzaCBrZXlzIGFyZSBlcXVhbCBhbmQgdGhhdCBIQVNIX0JJVFMgPj0gOC5cbiAgICAgKi9cbiAgICBzY2FuICs9IDI7XG4gICAgbWF0Y2grKztcbiAgICAvLyBBc3NlcnQoKnNjYW4gPT0gKm1hdGNoLCBcIm1hdGNoWzJdP1wiKTtcblxuICAgIC8qIFdlIGNoZWNrIGZvciBpbnN1ZmZpY2llbnQgbG9va2FoZWFkIG9ubHkgZXZlcnkgOHRoIGNvbXBhcmlzb247XG4gICAgICogdGhlIDI1NnRoIGNoZWNrIHdpbGwgYmUgbWFkZSBhdCBzdHJzdGFydCsyNTguXG4gICAgICovXG4gICAgZG8ge1xuICAgICAgLypqc2hpbnQgbm9lbXB0eTpmYWxzZSovXG4gICAgfSB3aGlsZSAoX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJlxuICAgICAgICAgICAgIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJiBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiZcbiAgICAgICAgICAgICBfd2luWysrc2Nhbl0gPT09IF93aW5bKyttYXRjaF0gJiYgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmXG4gICAgICAgICAgICAgX3dpblsrK3NjYW5dID09PSBfd2luWysrbWF0Y2hdICYmIF93aW5bKytzY2FuXSA9PT0gX3dpblsrK21hdGNoXSAmJlxuICAgICAgICAgICAgIHNjYW4gPCBzdHJlbmQpO1xuXG4gICAgLy8gQXNzZXJ0KHNjYW4gPD0gcy0+d2luZG93Kyh1bnNpZ25lZCkocy0+d2luZG93X3NpemUtMSksIFwid2lsZCBzY2FuXCIpO1xuXG4gICAgbGVuID0gTUFYX01BVENIIC0gKHN0cmVuZCAtIHNjYW4pO1xuICAgIHNjYW4gPSBzdHJlbmQgLSBNQVhfTUFUQ0g7XG5cbiAgICBpZiAobGVuID4gYmVzdF9sZW4pIHtcbiAgICAgIHMubWF0Y2hfc3RhcnQgPSBjdXJfbWF0Y2g7XG4gICAgICBiZXN0X2xlbiA9IGxlbjtcbiAgICAgIGlmIChsZW4gPj0gbmljZV9tYXRjaCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHNjYW5fZW5kMSAgPSBfd2luW3NjYW4gKyBiZXN0X2xlbiAtIDFdO1xuICAgICAgc2Nhbl9lbmQgICA9IF93aW5bc2NhbiArIGJlc3RfbGVuXTtcbiAgICB9XG4gIH0gd2hpbGUgKChjdXJfbWF0Y2ggPSBwcmV2W2N1cl9tYXRjaCAmIHdtYXNrXSkgPiBsaW1pdCAmJiAtLWNoYWluX2xlbmd0aCAhPT0gMCk7XG5cbiAgaWYgKGJlc3RfbGVuIDw9IHMubG9va2FoZWFkKSB7XG4gICAgcmV0dXJuIGJlc3RfbGVuO1xuICB9XG4gIHJldHVybiBzLmxvb2thaGVhZDtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEZpbGwgdGhlIHdpbmRvdyB3aGVuIHRoZSBsb29rYWhlYWQgYmVjb21lcyBpbnN1ZmZpY2llbnQuXG4gKiBVcGRhdGVzIHN0cnN0YXJ0IGFuZCBsb29rYWhlYWQuXG4gKlxuICogSU4gYXNzZXJ0aW9uOiBsb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEXG4gKiBPVVQgYXNzZXJ0aW9uczogc3Ryc3RhcnQgPD0gd2luZG93X3NpemUtTUlOX0xPT0tBSEVBRFxuICogICAgQXQgbGVhc3Qgb25lIGJ5dGUgaGFzIGJlZW4gcmVhZCwgb3IgYXZhaWxfaW4gPT0gMDsgcmVhZHMgYXJlXG4gKiAgICBwZXJmb3JtZWQgZm9yIGF0IGxlYXN0IHR3byBieXRlcyAocmVxdWlyZWQgZm9yIHRoZSB6aXAgdHJhbnNsYXRlX2VvbFxuICogICAgb3B0aW9uIC0tIG5vdCBzdXBwb3J0ZWQgaGVyZSkuXG4gKi9cbmZ1bmN0aW9uIGZpbGxfd2luZG93KHMpIHtcbiAgdmFyIF93X3NpemUgPSBzLndfc2l6ZTtcbiAgdmFyIHAsIG4sIG0sIG1vcmUsIHN0cjtcblxuICAvL0Fzc2VydChzLT5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFELCBcImFscmVhZHkgZW5vdWdoIGxvb2thaGVhZFwiKTtcblxuICBkbyB7XG4gICAgbW9yZSA9IHMud2luZG93X3NpemUgLSBzLmxvb2thaGVhZCAtIHMuc3Ryc3RhcnQ7XG5cbiAgICAvLyBKUyBpbnRzIGhhdmUgMzIgYml0LCBibG9jayBiZWxvdyBub3QgbmVlZGVkXG4gICAgLyogRGVhbCB3aXRoICFAIyQlIDY0SyBsaW1pdDogKi9cbiAgICAvL2lmIChzaXplb2YoaW50KSA8PSAyKSB7XG4gICAgLy8gICAgaWYgKG1vcmUgPT0gMCAmJiBzLT5zdHJzdGFydCA9PSAwICYmIHMtPmxvb2thaGVhZCA9PSAwKSB7XG4gICAgLy8gICAgICAgIG1vcmUgPSB3c2l6ZTtcbiAgICAvL1xuICAgIC8vICB9IGVsc2UgaWYgKG1vcmUgPT0gKHVuc2lnbmVkKSgtMSkpIHtcbiAgICAvLyAgICAgICAgLyogVmVyeSB1bmxpa2VseSwgYnV0IHBvc3NpYmxlIG9uIDE2IGJpdCBtYWNoaW5lIGlmXG4gICAgLy8gICAgICAgICAqIHN0cnN0YXJ0ID09IDAgJiYgbG9va2FoZWFkID09IDEgKGlucHV0IGRvbmUgYSBieXRlIGF0IHRpbWUpXG4gICAgLy8gICAgICAgICAqL1xuICAgIC8vICAgICAgICBtb3JlLS07XG4gICAgLy8gICAgfVxuICAgIC8vfVxuXG5cbiAgICAvKiBJZiB0aGUgd2luZG93IGlzIGFsbW9zdCBmdWxsIGFuZCB0aGVyZSBpcyBpbnN1ZmZpY2llbnQgbG9va2FoZWFkLFxuICAgICAqIG1vdmUgdGhlIHVwcGVyIGhhbGYgdG8gdGhlIGxvd2VyIG9uZSB0byBtYWtlIHJvb20gaW4gdGhlIHVwcGVyIGhhbGYuXG4gICAgICovXG4gICAgaWYgKHMuc3Ryc3RhcnQgPj0gX3dfc2l6ZSArIChfd19zaXplIC0gTUlOX0xPT0tBSEVBRCkpIHtcblxuICAgICAgdXRpbHMuYXJyYXlTZXQocy53aW5kb3csIHMud2luZG93LCBfd19zaXplLCBfd19zaXplLCAwKTtcbiAgICAgIHMubWF0Y2hfc3RhcnQgLT0gX3dfc2l6ZTtcbiAgICAgIHMuc3Ryc3RhcnQgLT0gX3dfc2l6ZTtcbiAgICAgIC8qIHdlIG5vdyBoYXZlIHN0cnN0YXJ0ID49IE1BWF9ESVNUICovXG4gICAgICBzLmJsb2NrX3N0YXJ0IC09IF93X3NpemU7XG5cbiAgICAgIC8qIFNsaWRlIHRoZSBoYXNoIHRhYmxlIChjb3VsZCBiZSBhdm9pZGVkIHdpdGggMzIgYml0IHZhbHVlc1xuICAgICAgIGF0IHRoZSBleHBlbnNlIG9mIG1lbW9yeSB1c2FnZSkuIFdlIHNsaWRlIGV2ZW4gd2hlbiBsZXZlbCA9PSAwXG4gICAgICAgdG8ga2VlcCB0aGUgaGFzaCB0YWJsZSBjb25zaXN0ZW50IGlmIHdlIHN3aXRjaCBiYWNrIHRvIGxldmVsID4gMFxuICAgICAgIGxhdGVyLiAoVXNpbmcgbGV2ZWwgMCBwZXJtYW5lbnRseSBpcyBub3QgYW4gb3B0aW1hbCB1c2FnZSBvZlxuICAgICAgIHpsaWIsIHNvIHdlIGRvbid0IGNhcmUgYWJvdXQgdGhpcyBwYXRob2xvZ2ljYWwgY2FzZS4pXG4gICAgICAgKi9cblxuICAgICAgbiA9IHMuaGFzaF9zaXplO1xuICAgICAgcCA9IG47XG4gICAgICBkbyB7XG4gICAgICAgIG0gPSBzLmhlYWRbLS1wXTtcbiAgICAgICAgcy5oZWFkW3BdID0gKG0gPj0gX3dfc2l6ZSA/IG0gLSBfd19zaXplIDogMCk7XG4gICAgICB9IHdoaWxlICgtLW4pO1xuXG4gICAgICBuID0gX3dfc2l6ZTtcbiAgICAgIHAgPSBuO1xuICAgICAgZG8ge1xuICAgICAgICBtID0gcy5wcmV2Wy0tcF07XG4gICAgICAgIHMucHJldltwXSA9IChtID49IF93X3NpemUgPyBtIC0gX3dfc2l6ZSA6IDApO1xuICAgICAgICAvKiBJZiBuIGlzIG5vdCBvbiBhbnkgaGFzaCBjaGFpbiwgcHJldltuXSBpcyBnYXJiYWdlIGJ1dFxuICAgICAgICAgKiBpdHMgdmFsdWUgd2lsbCBuZXZlciBiZSB1c2VkLlxuICAgICAgICAgKi9cbiAgICAgIH0gd2hpbGUgKC0tbik7XG5cbiAgICAgIG1vcmUgKz0gX3dfc2l6ZTtcbiAgICB9XG4gICAgaWYgKHMuc3RybS5hdmFpbF9pbiA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLyogSWYgdGhlcmUgd2FzIG5vIHNsaWRpbmc6XG4gICAgICogICAgc3Ryc3RhcnQgPD0gV1NJWkUrTUFYX0RJU1QtMSAmJiBsb29rYWhlYWQgPD0gTUlOX0xPT0tBSEVBRCAtIDEgJiZcbiAgICAgKiAgICBtb3JlID09IHdpbmRvd19zaXplIC0gbG9va2FoZWFkIC0gc3Ryc3RhcnRcbiAgICAgKiA9PiBtb3JlID49IHdpbmRvd19zaXplIC0gKE1JTl9MT09LQUhFQUQtMSArIFdTSVpFICsgTUFYX0RJU1QtMSlcbiAgICAgKiA9PiBtb3JlID49IHdpbmRvd19zaXplIC0gMipXU0laRSArIDJcbiAgICAgKiBJbiB0aGUgQklHX01FTSBvciBNTUFQIGNhc2UgKG5vdCB5ZXQgc3VwcG9ydGVkKSxcbiAgICAgKiAgIHdpbmRvd19zaXplID09IGlucHV0X3NpemUgKyBNSU5fTE9PS0FIRUFEICAmJlxuICAgICAqICAgc3Ryc3RhcnQgKyBzLT5sb29rYWhlYWQgPD0gaW5wdXRfc2l6ZSA9PiBtb3JlID49IE1JTl9MT09LQUhFQUQuXG4gICAgICogT3RoZXJ3aXNlLCB3aW5kb3dfc2l6ZSA9PSAyKldTSVpFIHNvIG1vcmUgPj0gMi5cbiAgICAgKiBJZiB0aGVyZSB3YXMgc2xpZGluZywgbW9yZSA+PSBXU0laRS4gU28gaW4gYWxsIGNhc2VzLCBtb3JlID49IDIuXG4gICAgICovXG4gICAgLy9Bc3NlcnQobW9yZSA+PSAyLCBcIm1vcmUgPCAyXCIpO1xuICAgIG4gPSByZWFkX2J1ZihzLnN0cm0sIHMud2luZG93LCBzLnN0cnN0YXJ0ICsgcy5sb29rYWhlYWQsIG1vcmUpO1xuICAgIHMubG9va2FoZWFkICs9IG47XG5cbiAgICAvKiBJbml0aWFsaXplIHRoZSBoYXNoIHZhbHVlIG5vdyB0aGF0IHdlIGhhdmUgc29tZSBpbnB1dDogKi9cbiAgICBpZiAocy5sb29rYWhlYWQgKyBzLmluc2VydCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgIHN0ciA9IHMuc3Ryc3RhcnQgLSBzLmluc2VydDtcbiAgICAgIHMuaW5zX2ggPSBzLndpbmRvd1tzdHJdO1xuXG4gICAgICAvKiBVUERBVEVfSEFTSChzLCBzLT5pbnNfaCwgcy0+d2luZG93W3N0ciArIDFdKTsgKi9cbiAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3N0ciArIDFdKSAmIHMuaGFzaF9tYXNrO1xuLy8jaWYgTUlOX01BVENIICE9IDNcbi8vICAgICAgICBDYWxsIHVwZGF0ZV9oYXNoKCkgTUlOX01BVENILTMgbW9yZSB0aW1lc1xuLy8jZW5kaWZcbiAgICAgIHdoaWxlIChzLmluc2VydCkge1xuICAgICAgICAvKiBVUERBVEVfSEFTSChzLCBzLT5pbnNfaCwgcy0+d2luZG93W3N0ciArIE1JTl9NQVRDSC0xXSk7ICovXG4gICAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3N0ciArIE1JTl9NQVRDSCAtIDFdKSAmIHMuaGFzaF9tYXNrO1xuXG4gICAgICAgIHMucHJldltzdHIgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG4gICAgICAgIHMuaGVhZFtzLmluc19oXSA9IHN0cjtcbiAgICAgICAgc3RyKys7XG4gICAgICAgIHMuaW5zZXJ0LS07XG4gICAgICAgIGlmIChzLmxvb2thaGVhZCArIHMuaW5zZXJ0IDwgTUlOX01BVENIKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLyogSWYgdGhlIHdob2xlIGlucHV0IGhhcyBsZXNzIHRoYW4gTUlOX01BVENIIGJ5dGVzLCBpbnNfaCBpcyBnYXJiYWdlLFxuICAgICAqIGJ1dCB0aGlzIGlzIG5vdCBpbXBvcnRhbnQgc2luY2Ugb25seSBsaXRlcmFsIGJ5dGVzIHdpbGwgYmUgZW1pdHRlZC5cbiAgICAgKi9cblxuICB9IHdoaWxlIChzLmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQgJiYgcy5zdHJtLmF2YWlsX2luICE9PSAwKTtcblxuICAvKiBJZiB0aGUgV0lOX0lOSVQgYnl0ZXMgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgY3VycmVudCBkYXRhIGhhdmUgbmV2ZXIgYmVlblxuICAgKiB3cml0dGVuLCB0aGVuIHplcm8gdGhvc2UgYnl0ZXMgaW4gb3JkZXIgdG8gYXZvaWQgbWVtb3J5IGNoZWNrIHJlcG9ydHMgb2ZcbiAgICogdGhlIHVzZSBvZiB1bmluaXRpYWxpemVkIChvciB1bmluaXRpYWxpc2VkIGFzIEp1bGlhbiB3cml0ZXMpIGJ5dGVzIGJ5XG4gICAqIHRoZSBsb25nZXN0IG1hdGNoIHJvdXRpbmVzLiAgVXBkYXRlIHRoZSBoaWdoIHdhdGVyIG1hcmsgZm9yIHRoZSBuZXh0XG4gICAqIHRpbWUgdGhyb3VnaCBoZXJlLiAgV0lOX0lOSVQgaXMgc2V0IHRvIE1BWF9NQVRDSCBzaW5jZSB0aGUgbG9uZ2VzdCBtYXRjaFxuICAgKiByb3V0aW5lcyBhbGxvdyBzY2FubmluZyB0byBzdHJzdGFydCArIE1BWF9NQVRDSCwgaWdub3JpbmcgbG9va2FoZWFkLlxuICAgKi9cbi8vICBpZiAocy5oaWdoX3dhdGVyIDwgcy53aW5kb3dfc2l6ZSkge1xuLy8gICAgdmFyIGN1cnIgPSBzLnN0cnN0YXJ0ICsgcy5sb29rYWhlYWQ7XG4vLyAgICB2YXIgaW5pdCA9IDA7XG4vL1xuLy8gICAgaWYgKHMuaGlnaF93YXRlciA8IGN1cnIpIHtcbi8vICAgICAgLyogUHJldmlvdXMgaGlnaCB3YXRlciBtYXJrIGJlbG93IGN1cnJlbnQgZGF0YSAtLSB6ZXJvIFdJTl9JTklUXG4vLyAgICAgICAqIGJ5dGVzIG9yIHVwIHRvIGVuZCBvZiB3aW5kb3csIHdoaWNoZXZlciBpcyBsZXNzLlxuLy8gICAgICAgKi9cbi8vICAgICAgaW5pdCA9IHMud2luZG93X3NpemUgLSBjdXJyO1xuLy8gICAgICBpZiAoaW5pdCA+IFdJTl9JTklUKVxuLy8gICAgICAgIGluaXQgPSBXSU5fSU5JVDtcbi8vICAgICAgem1lbXplcm8ocy0+d2luZG93ICsgY3VyciwgKHVuc2lnbmVkKWluaXQpO1xuLy8gICAgICBzLT5oaWdoX3dhdGVyID0gY3VyciArIGluaXQ7XG4vLyAgICB9XG4vLyAgICBlbHNlIGlmIChzLT5oaWdoX3dhdGVyIDwgKHVsZyljdXJyICsgV0lOX0lOSVQpIHtcbi8vICAgICAgLyogSGlnaCB3YXRlciBtYXJrIGF0IG9yIGFib3ZlIGN1cnJlbnQgZGF0YSwgYnV0IGJlbG93IGN1cnJlbnQgZGF0YVxuLy8gICAgICAgKiBwbHVzIFdJTl9JTklUIC0tIHplcm8gb3V0IHRvIGN1cnJlbnQgZGF0YSBwbHVzIFdJTl9JTklULCBvciB1cFxuLy8gICAgICAgKiB0byBlbmQgb2Ygd2luZG93LCB3aGljaGV2ZXIgaXMgbGVzcy5cbi8vICAgICAgICovXG4vLyAgICAgIGluaXQgPSAodWxnKWN1cnIgKyBXSU5fSU5JVCAtIHMtPmhpZ2hfd2F0ZXI7XG4vLyAgICAgIGlmIChpbml0ID4gcy0+d2luZG93X3NpemUgLSBzLT5oaWdoX3dhdGVyKVxuLy8gICAgICAgIGluaXQgPSBzLT53aW5kb3dfc2l6ZSAtIHMtPmhpZ2hfd2F0ZXI7XG4vLyAgICAgIHptZW16ZXJvKHMtPndpbmRvdyArIHMtPmhpZ2hfd2F0ZXIsICh1bnNpZ25lZClpbml0KTtcbi8vICAgICAgcy0+aGlnaF93YXRlciArPSBpbml0O1xuLy8gICAgfVxuLy8gIH1cbi8vXG4vLyAgQXNzZXJ0KCh1bGcpcy0+c3Ryc3RhcnQgPD0gcy0+d2luZG93X3NpemUgLSBNSU5fTE9PS0FIRUFELFxuLy8gICAgXCJub3QgZW5vdWdoIHJvb20gZm9yIHNlYXJjaFwiKTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5IHdpdGhvdXQgY29tcHJlc3Npb24gYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIHRoZSBpbnB1dCBzdHJlYW0sIHJldHVyblxuICogdGhlIGN1cnJlbnQgYmxvY2sgc3RhdGUuXG4gKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IGluc2VydCBuZXcgc3RyaW5ncyBpbiB0aGUgZGljdGlvbmFyeSBzaW5jZVxuICogdW5jb21wcmVzc2libGUgZGF0YSBpcyBwcm9iYWJseSBub3QgdXNlZnVsLiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWRcbiAqIG9ubHkgZm9yIHRoZSBsZXZlbD0wIGNvbXByZXNzaW9uIG9wdGlvbi5cbiAqIE5PVEU6IHRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIG9wdGltaXplZCB0byBhdm9pZCBleHRyYSBjb3B5aW5nIGZyb21cbiAqIHdpbmRvdyB0byBwZW5kaW5nX2J1Zi5cbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZV9zdG9yZWQocywgZmx1c2gpIHtcbiAgLyogU3RvcmVkIGJsb2NrcyBhcmUgbGltaXRlZCB0byAweGZmZmYgYnl0ZXMsIHBlbmRpbmdfYnVmIGlzIGxpbWl0ZWRcbiAgICogdG8gcGVuZGluZ19idWZfc2l6ZSwgYW5kIGVhY2ggc3RvcmVkIGJsb2NrIGhhcyBhIDUgYnl0ZSBoZWFkZXI6XG4gICAqL1xuICB2YXIgbWF4X2Jsb2NrX3NpemUgPSAweGZmZmY7XG5cbiAgaWYgKG1heF9ibG9ja19zaXplID4gcy5wZW5kaW5nX2J1Zl9zaXplIC0gNSkge1xuICAgIG1heF9ibG9ja19zaXplID0gcy5wZW5kaW5nX2J1Zl9zaXplIC0gNTtcbiAgfVxuXG4gIC8qIENvcHkgYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIGlucHV0IHRvIG91dHB1dDogKi9cbiAgZm9yICg7Oykge1xuICAgIC8qIEZpbGwgdGhlIHdpbmRvdyBhcyBtdWNoIGFzIHBvc3NpYmxlOiAqL1xuICAgIGlmIChzLmxvb2thaGVhZCA8PSAxKSB7XG5cbiAgICAgIC8vQXNzZXJ0KHMtPnN0cnN0YXJ0IDwgcy0+d19zaXplK01BWF9ESVNUKHMpIHx8XG4gICAgICAvLyAgcy0+YmxvY2tfc3RhcnQgPj0gKGxvbmcpcy0+d19zaXplLCBcInNsaWRlIHRvbyBsYXRlXCIpO1xuLy8gICAgICBpZiAoIShzLnN0cnN0YXJ0IDwgcy53X3NpemUgKyAocy53X3NpemUgLSBNSU5fTE9PS0FIRUFEKSB8fFxuLy8gICAgICAgIHMuYmxvY2tfc3RhcnQgPj0gcy53X3NpemUpKSB7XG4vLyAgICAgICAgdGhyb3cgIG5ldyBFcnJvcihcInNsaWRlIHRvbyBsYXRlXCIpO1xuLy8gICAgICB9XG5cbiAgICAgIGZpbGxfd2luZG93KHMpO1xuICAgICAgaWYgKHMubG9va2FoZWFkID09PSAwICYmIGZsdXNoID09PSBaX05PX0ZMVVNIKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8qIGZsdXNoIHRoZSBjdXJyZW50IGJsb2NrICovXG4gICAgfVxuICAgIC8vQXNzZXJ0KHMtPmJsb2NrX3N0YXJ0ID49IDBMLCBcImJsb2NrIGdvbmVcIik7XG4vLyAgICBpZiAocy5ibG9ja19zdGFydCA8IDApIHRocm93IG5ldyBFcnJvcihcImJsb2NrIGdvbmVcIik7XG5cbiAgICBzLnN0cnN0YXJ0ICs9IHMubG9va2FoZWFkO1xuICAgIHMubG9va2FoZWFkID0gMDtcblxuICAgIC8qIEVtaXQgYSBzdG9yZWQgYmxvY2sgaWYgcGVuZGluZ19idWYgd2lsbCBiZSBmdWxsOiAqL1xuICAgIHZhciBtYXhfc3RhcnQgPSBzLmJsb2NrX3N0YXJ0ICsgbWF4X2Jsb2NrX3NpemU7XG5cbiAgICBpZiAocy5zdHJzdGFydCA9PT0gMCB8fCBzLnN0cnN0YXJ0ID49IG1heF9zdGFydCkge1xuICAgICAgLyogc3Ryc3RhcnQgPT0gMCBpcyBwb3NzaWJsZSB3aGVuIHdyYXBhcm91bmQgb24gMTYtYml0IG1hY2hpbmUgKi9cbiAgICAgIHMubG9va2FoZWFkID0gcy5zdHJzdGFydCAtIG1heF9zdGFydDtcbiAgICAgIHMuc3Ryc3RhcnQgPSBtYXhfc3RhcnQ7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuXG5cbiAgICB9XG4gICAgLyogRmx1c2ggaWYgd2UgbWF5IGhhdmUgdG8gc2xpZGUsIG90aGVyd2lzZSBibG9ja19zdGFydCBtYXkgYmVjb21lXG4gICAgICogbmVnYXRpdmUgYW5kIHRoZSBkYXRhIHdpbGwgYmUgZ29uZTpcbiAgICAgKi9cbiAgICBpZiAocy5zdHJzdGFydCAtIHMuYmxvY2tfc3RhcnQgPj0gKHMud19zaXplIC0gTUlOX0xPT0tBSEVBRCkpIHtcbiAgICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIC8qKiovXG4gICAgfVxuICB9XG5cbiAgcy5pbnNlcnQgPSAwO1xuXG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDEpOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCB0cnVlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX0ZJTklTSF9TVEFSVEVEO1xuICAgIH1cbiAgICAvKioqL1xuICAgIHJldHVybiBCU19GSU5JU0hfRE9ORTtcbiAgfVxuXG4gIGlmIChzLnN0cnN0YXJ0ID4gcy5ibG9ja19zdGFydCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICB9XG4gICAgLyoqKi9cbiAgfVxuXG4gIHJldHVybiBCU19ORUVEX01PUkU7XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29tcHJlc3MgYXMgbXVjaCBhcyBwb3NzaWJsZSBmcm9tIHRoZSBpbnB1dCBzdHJlYW0sIHJldHVybiB0aGUgY3VycmVudFxuICogYmxvY2sgc3RhdGUuXG4gKiBUaGlzIGZ1bmN0aW9uIGRvZXMgbm90IHBlcmZvcm0gbGF6eSBldmFsdWF0aW9uIG9mIG1hdGNoZXMgYW5kIGluc2VydHNcbiAqIG5ldyBzdHJpbmdzIGluIHRoZSBkaWN0aW9uYXJ5IG9ubHkgZm9yIHVubWF0Y2hlZCBzdHJpbmdzIG9yIGZvciBzaG9ydFxuICogbWF0Y2hlcy4gSXQgaXMgdXNlZCBvbmx5IGZvciB0aGUgZmFzdCBjb21wcmVzc2lvbiBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBkZWZsYXRlX2Zhc3QocywgZmx1c2gpIHtcbiAgdmFyIGhhc2hfaGVhZDsgICAgICAgIC8qIGhlYWQgb2YgdGhlIGhhc2ggY2hhaW4gKi9cbiAgdmFyIGJmbHVzaDsgICAgICAgICAgIC8qIHNldCBpZiBjdXJyZW50IGJsb2NrIG11c3QgYmUgZmx1c2hlZCAqL1xuXG4gIGZvciAoOzspIHtcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCB3ZSBhbHdheXMgaGF2ZSBlbm91Z2ggbG9va2FoZWFkLCBleGNlcHRcbiAgICAgKiBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCBmaWxlLiBXZSBuZWVkIE1BWF9NQVRDSCBieXRlc1xuICAgICAqIGZvciB0aGUgbmV4dCBtYXRjaCwgcGx1cyBNSU5fTUFUQ0ggYnl0ZXMgdG8gaW5zZXJ0IHRoZVxuICAgICAqIHN0cmluZyBmb2xsb3dpbmcgdGhlIG5leHQgbWF0Y2guXG4gICAgICovXG4gICAgaWYgKHMubG9va2FoZWFkIDwgTUlOX0xPT0tBSEVBRCkge1xuICAgICAgZmlsbF93aW5kb3cocyk7XG4gICAgICBpZiAocy5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEICYmIGZsdXNoID09PSBaX05PX0ZMVVNIKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHtcbiAgICAgICAgYnJlYWs7IC8qIGZsdXNoIHRoZSBjdXJyZW50IGJsb2NrICovXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogSW5zZXJ0IHRoZSBzdHJpbmcgd2luZG93W3N0cnN0YXJ0IC4uIHN0cnN0YXJ0KzJdIGluIHRoZVxuICAgICAqIGRpY3Rpb25hcnksIGFuZCBzZXQgaGFzaF9oZWFkIHRvIHRoZSBoZWFkIG9mIHRoZSBoYXNoIGNoYWluOlxuICAgICAqL1xuICAgIGhhc2hfaGVhZCA9IDAvKk5JTCovO1xuICAgIGlmIChzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgIC8qKiogSU5TRVJUX1NUUklORyhzLCBzLnN0cnN0YXJ0LCBoYXNoX2hlYWQpOyAqKiovXG4gICAgICBzLmluc19oID0gKChzLmluc19oIDw8IHMuaGFzaF9zaGlmdCkgXiBzLndpbmRvd1tzLnN0cnN0YXJ0ICsgTUlOX01BVENIIC0gMV0pICYgcy5oYXNoX21hc2s7XG4gICAgICBoYXNoX2hlYWQgPSBzLnByZXZbcy5zdHJzdGFydCAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcbiAgICAgIHMuaGVhZFtzLmluc19oXSA9IHMuc3Ryc3RhcnQ7XG4gICAgICAvKioqL1xuICAgIH1cblxuICAgIC8qIEZpbmQgdGhlIGxvbmdlc3QgbWF0Y2gsIGRpc2NhcmRpbmcgdGhvc2UgPD0gcHJldl9sZW5ndGguXG4gICAgICogQXQgdGhpcyBwb2ludCB3ZSBoYXZlIGFsd2F5cyBtYXRjaF9sZW5ndGggPCBNSU5fTUFUQ0hcbiAgICAgKi9cbiAgICBpZiAoaGFzaF9oZWFkICE9PSAwLypOSUwqLyAmJiAoKHMuc3Ryc3RhcnQgLSBoYXNoX2hlYWQpIDw9IChzLndfc2l6ZSAtIE1JTl9MT09LQUhFQUQpKSkge1xuICAgICAgLyogVG8gc2ltcGxpZnkgdGhlIGNvZGUsIHdlIHByZXZlbnQgbWF0Y2hlcyB3aXRoIHRoZSBzdHJpbmdcbiAgICAgICAqIG9mIHdpbmRvdyBpbmRleCAwIChpbiBwYXJ0aWN1bGFyIHdlIGhhdmUgdG8gYXZvaWQgYSBtYXRjaFxuICAgICAgICogb2YgdGhlIHN0cmluZyB3aXRoIGl0c2VsZiBhdCB0aGUgc3RhcnQgb2YgdGhlIGlucHV0IGZpbGUpLlxuICAgICAgICovXG4gICAgICBzLm1hdGNoX2xlbmd0aCA9IGxvbmdlc3RfbWF0Y2gocywgaGFzaF9oZWFkKTtcbiAgICAgIC8qIGxvbmdlc3RfbWF0Y2goKSBzZXRzIG1hdGNoX3N0YXJ0ICovXG4gICAgfVxuICAgIGlmIChzLm1hdGNoX2xlbmd0aCA+PSBNSU5fTUFUQ0gpIHtcbiAgICAgIC8vIGNoZWNrX21hdGNoKHMsIHMuc3Ryc3RhcnQsIHMubWF0Y2hfc3RhcnQsIHMubWF0Y2hfbGVuZ3RoKTsgLy8gZm9yIGRlYnVnIG9ubHlcblxuICAgICAgLyoqKiBfdHJfdGFsbHlfZGlzdChzLCBzLnN0cnN0YXJ0IC0gcy5tYXRjaF9zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgIHMubWF0Y2hfbGVuZ3RoIC0gTUlOX01BVENILCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgcy5zdHJzdGFydCAtIHMubWF0Y2hfc3RhcnQsIHMubWF0Y2hfbGVuZ3RoIC0gTUlOX01BVENIKTtcblxuICAgICAgcy5sb29rYWhlYWQgLT0gcy5tYXRjaF9sZW5ndGg7XG5cbiAgICAgIC8qIEluc2VydCBuZXcgc3RyaW5ncyBpbiB0aGUgaGFzaCB0YWJsZSBvbmx5IGlmIHRoZSBtYXRjaCBsZW5ndGhcbiAgICAgICAqIGlzIG5vdCB0b28gbGFyZ2UuIFRoaXMgc2F2ZXMgdGltZSBidXQgZGVncmFkZXMgY29tcHJlc3Npb24uXG4gICAgICAgKi9cbiAgICAgIGlmIChzLm1hdGNoX2xlbmd0aCA8PSBzLm1heF9sYXp5X21hdGNoLyptYXhfaW5zZXJ0X2xlbmd0aCovICYmIHMubG9va2FoZWFkID49IE1JTl9NQVRDSCkge1xuICAgICAgICBzLm1hdGNoX2xlbmd0aC0tOyAvKiBzdHJpbmcgYXQgc3Ryc3RhcnQgYWxyZWFkeSBpbiB0YWJsZSAqL1xuICAgICAgICBkbyB7XG4gICAgICAgICAgcy5zdHJzdGFydCsrO1xuICAgICAgICAgIC8qKiogSU5TRVJUX1NUUklORyhzLCBzLnN0cnN0YXJ0LCBoYXNoX2hlYWQpOyAqKiovXG4gICAgICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbcy5zdHJzdGFydCArIE1JTl9NQVRDSCAtIDFdKSAmIHMuaGFzaF9tYXNrO1xuICAgICAgICAgIGhhc2hfaGVhZCA9IHMucHJldltzLnN0cnN0YXJ0ICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgICAgIHMuaGVhZFtzLmluc19oXSA9IHMuc3Ryc3RhcnQ7XG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgICAvKiBzdHJzdGFydCBuZXZlciBleGNlZWRzIFdTSVpFLU1BWF9NQVRDSCwgc28gdGhlcmUgYXJlXG4gICAgICAgICAgICogYWx3YXlzIE1JTl9NQVRDSCBieXRlcyBhaGVhZC5cbiAgICAgICAgICAgKi9cbiAgICAgICAgfSB3aGlsZSAoLS1zLm1hdGNoX2xlbmd0aCAhPT0gMCk7XG4gICAgICAgIHMuc3Ryc3RhcnQrKztcbiAgICAgIH0gZWxzZVxuICAgICAge1xuICAgICAgICBzLnN0cnN0YXJ0ICs9IHMubWF0Y2hfbGVuZ3RoO1xuICAgICAgICBzLm1hdGNoX2xlbmd0aCA9IDA7XG4gICAgICAgIHMuaW5zX2ggPSBzLndpbmRvd1tzLnN0cnN0YXJ0XTtcbiAgICAgICAgLyogVVBEQVRFX0hBU0gocywgcy5pbnNfaCwgcy53aW5kb3dbcy5zdHJzdGFydCsxXSk7ICovXG4gICAgICAgIHMuaW5zX2ggPSAoKHMuaW5zX2ggPDwgcy5oYXNoX3NoaWZ0KSBeIHMud2luZG93W3Muc3Ryc3RhcnQgKyAxXSkgJiBzLmhhc2hfbWFzaztcblxuLy8jaWYgTUlOX01BVENIICE9IDNcbi8vICAgICAgICAgICAgICAgIENhbGwgVVBEQVRFX0hBU0goKSBNSU5fTUFUQ0gtMyBtb3JlIHRpbWVzXG4vLyNlbmRpZlxuICAgICAgICAvKiBJZiBsb29rYWhlYWQgPCBNSU5fTUFUQ0gsIGluc19oIGlzIGdhcmJhZ2UsIGJ1dCBpdCBkb2VzIG5vdFxuICAgICAgICAgKiBtYXR0ZXIgc2luY2UgaXQgd2lsbCBiZSByZWNvbXB1dGVkIGF0IG5leHQgZGVmbGF0ZSBjYWxsLlxuICAgICAgICAgKi9cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLyogTm8gbWF0Y2gsIG91dHB1dCBhIGxpdGVyYWwgYnl0ZSAqL1xuICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsXCIlY1wiLCBzLndpbmRvd1tzLnN0cnN0YXJ0XSkpO1xuICAgICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnRdLCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydF0pO1xuXG4gICAgICBzLmxvb2thaGVhZC0tO1xuICAgICAgcy5zdHJzdGFydCsrO1xuICAgIH1cbiAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuICAgIH1cbiAgfVxuICBzLmluc2VydCA9ICgocy5zdHJzdGFydCA8IChNSU5fTUFUQ0ggLSAxKSkgPyBzLnN0cnN0YXJ0IDogTUlOX01BVENIIC0gMSk7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDEpOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCB0cnVlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX0ZJTklTSF9TVEFSVEVEO1xuICAgIH1cbiAgICAvKioqL1xuICAgIHJldHVybiBCU19GSU5JU0hfRE9ORTtcbiAgfVxuICBpZiAocy5sYXN0X2xpdCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICB9XG4gICAgLyoqKi9cbiAgfVxuICByZXR1cm4gQlNfQkxPQ0tfRE9ORTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTYW1lIGFzIGFib3ZlLCBidXQgYWNoaWV2ZXMgYmV0dGVyIGNvbXByZXNzaW9uLiBXZSB1c2UgYSBsYXp5XG4gKiBldmFsdWF0aW9uIGZvciBtYXRjaGVzOiBhIG1hdGNoIGlzIGZpbmFsbHkgYWRvcHRlZCBvbmx5IGlmIHRoZXJlIGlzXG4gKiBubyBiZXR0ZXIgbWF0Y2ggYXQgdGhlIG5leHQgd2luZG93IHBvc2l0aW9uLlxuICovXG5mdW5jdGlvbiBkZWZsYXRlX3Nsb3cocywgZmx1c2gpIHtcbiAgdmFyIGhhc2hfaGVhZDsgICAgICAgICAgLyogaGVhZCBvZiBoYXNoIGNoYWluICovXG4gIHZhciBiZmx1c2g7ICAgICAgICAgICAgICAvKiBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQgKi9cblxuICB2YXIgbWF4X2luc2VydDtcblxuICAvKiBQcm9jZXNzIHRoZSBpbnB1dCBibG9jay4gKi9cbiAgZm9yICg7Oykge1xuICAgIC8qIE1ha2Ugc3VyZSB0aGF0IHdlIGFsd2F5cyBoYXZlIGVub3VnaCBsb29rYWhlYWQsIGV4Y2VwdFxuICAgICAqIGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0IGZpbGUuIFdlIG5lZWQgTUFYX01BVENIIGJ5dGVzXG4gICAgICogZm9yIHRoZSBuZXh0IG1hdGNoLCBwbHVzIE1JTl9NQVRDSCBieXRlcyB0byBpbnNlcnQgdGhlXG4gICAgICogc3RyaW5nIGZvbGxvd2luZyB0aGUgbmV4dCBtYXRjaC5cbiAgICAgKi9cbiAgICBpZiAocy5sb29rYWhlYWQgPCBNSU5fTE9PS0FIRUFEKSB7XG4gICAgICBmaWxsX3dpbmRvdyhzKTtcbiAgICAgIGlmIChzLmxvb2thaGVhZCA8IE1JTl9MT09LQUhFQUQgJiYgZmx1c2ggPT09IFpfTk9fRkxVU0gpIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkgeyBicmVhazsgfSAvKiBmbHVzaCB0aGUgY3VycmVudCBibG9jayAqL1xuICAgIH1cblxuICAgIC8qIEluc2VydCB0aGUgc3RyaW5nIHdpbmRvd1tzdHJzdGFydCAuLiBzdHJzdGFydCsyXSBpbiB0aGVcbiAgICAgKiBkaWN0aW9uYXJ5LCBhbmQgc2V0IGhhc2hfaGVhZCB0byB0aGUgaGVhZCBvZiB0aGUgaGFzaCBjaGFpbjpcbiAgICAgKi9cbiAgICBoYXNoX2hlYWQgPSAwLypOSUwqLztcbiAgICBpZiAocy5sb29rYWhlYWQgPj0gTUlOX01BVENIKSB7XG4gICAgICAvKioqIElOU0VSVF9TVFJJTkcocywgcy5zdHJzdGFydCwgaGFzaF9oZWFkKTsgKioqL1xuICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbcy5zdHJzdGFydCArIE1JTl9NQVRDSCAtIDFdKSAmIHMuaGFzaF9tYXNrO1xuICAgICAgaGFzaF9oZWFkID0gcy5wcmV2W3Muc3Ryc3RhcnQgJiBzLndfbWFza10gPSBzLmhlYWRbcy5pbnNfaF07XG4gICAgICBzLmhlYWRbcy5pbnNfaF0gPSBzLnN0cnN0YXJ0O1xuICAgICAgLyoqKi9cbiAgICB9XG5cbiAgICAvKiBGaW5kIHRoZSBsb25nZXN0IG1hdGNoLCBkaXNjYXJkaW5nIHRob3NlIDw9IHByZXZfbGVuZ3RoLlxuICAgICAqL1xuICAgIHMucHJldl9sZW5ndGggPSBzLm1hdGNoX2xlbmd0aDtcbiAgICBzLnByZXZfbWF0Y2ggPSBzLm1hdGNoX3N0YXJ0O1xuICAgIHMubWF0Y2hfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcblxuICAgIGlmIChoYXNoX2hlYWQgIT09IDAvKk5JTCovICYmIHMucHJldl9sZW5ndGggPCBzLm1heF9sYXp5X21hdGNoICYmXG4gICAgICAgIHMuc3Ryc3RhcnQgLSBoYXNoX2hlYWQgPD0gKHMud19zaXplIC0gTUlOX0xPT0tBSEVBRCkvKk1BWF9ESVNUKHMpKi8pIHtcbiAgICAgIC8qIFRvIHNpbXBsaWZ5IHRoZSBjb2RlLCB3ZSBwcmV2ZW50IG1hdGNoZXMgd2l0aCB0aGUgc3RyaW5nXG4gICAgICAgKiBvZiB3aW5kb3cgaW5kZXggMCAoaW4gcGFydGljdWxhciB3ZSBoYXZlIHRvIGF2b2lkIGEgbWF0Y2hcbiAgICAgICAqIG9mIHRoZSBzdHJpbmcgd2l0aCBpdHNlbGYgYXQgdGhlIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWxlKS5cbiAgICAgICAqL1xuICAgICAgcy5tYXRjaF9sZW5ndGggPSBsb25nZXN0X21hdGNoKHMsIGhhc2hfaGVhZCk7XG4gICAgICAvKiBsb25nZXN0X21hdGNoKCkgc2V0cyBtYXRjaF9zdGFydCAqL1xuXG4gICAgICBpZiAocy5tYXRjaF9sZW5ndGggPD0gNSAmJlxuICAgICAgICAgKHMuc3RyYXRlZ3kgPT09IFpfRklMVEVSRUQgfHwgKHMubWF0Y2hfbGVuZ3RoID09PSBNSU5fTUFUQ0ggJiYgcy5zdHJzdGFydCAtIHMubWF0Y2hfc3RhcnQgPiA0MDk2LypUT09fRkFSKi8pKSkge1xuXG4gICAgICAgIC8qIElmIHByZXZfbWF0Y2ggaXMgYWxzbyBNSU5fTUFUQ0gsIG1hdGNoX3N0YXJ0IGlzIGdhcmJhZ2VcbiAgICAgICAgICogYnV0IHdlIHdpbGwgaWdub3JlIHRoZSBjdXJyZW50IG1hdGNoIGFueXdheS5cbiAgICAgICAgICovXG4gICAgICAgIHMubWF0Y2hfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgLyogSWYgdGhlcmUgd2FzIGEgbWF0Y2ggYXQgdGhlIHByZXZpb3VzIHN0ZXAgYW5kIHRoZSBjdXJyZW50XG4gICAgICogbWF0Y2ggaXMgbm90IGJldHRlciwgb3V0cHV0IHRoZSBwcmV2aW91cyBtYXRjaDpcbiAgICAgKi9cbiAgICBpZiAocy5wcmV2X2xlbmd0aCA+PSBNSU5fTUFUQ0ggJiYgcy5tYXRjaF9sZW5ndGggPD0gcy5wcmV2X2xlbmd0aCkge1xuICAgICAgbWF4X2luc2VydCA9IHMuc3Ryc3RhcnQgKyBzLmxvb2thaGVhZCAtIE1JTl9NQVRDSDtcbiAgICAgIC8qIERvIG5vdCBpbnNlcnQgc3RyaW5ncyBpbiBoYXNoIHRhYmxlIGJleW9uZCB0aGlzLiAqL1xuXG4gICAgICAvL2NoZWNrX21hdGNoKHMsIHMuc3Ryc3RhcnQtMSwgcy5wcmV2X21hdGNoLCBzLnByZXZfbGVuZ3RoKTtcblxuICAgICAgLyoqKl90cl90YWxseV9kaXN0KHMsIHMuc3Ryc3RhcnQgLSAxIC0gcy5wcmV2X21hdGNoLFxuICAgICAgICAgICAgICAgICAgICAgcy5wcmV2X2xlbmd0aCAtIE1JTl9NQVRDSCwgYmZsdXNoKTsqKiovXG4gICAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgcy5zdHJzdGFydCAtIDEgLSBzLnByZXZfbWF0Y2gsIHMucHJldl9sZW5ndGggLSBNSU5fTUFUQ0gpO1xuICAgICAgLyogSW5zZXJ0IGluIGhhc2ggdGFibGUgYWxsIHN0cmluZ3MgdXAgdG8gdGhlIGVuZCBvZiB0aGUgbWF0Y2guXG4gICAgICAgKiBzdHJzdGFydC0xIGFuZCBzdHJzdGFydCBhcmUgYWxyZWFkeSBpbnNlcnRlZC4gSWYgdGhlcmUgaXMgbm90XG4gICAgICAgKiBlbm91Z2ggbG9va2FoZWFkLCB0aGUgbGFzdCB0d28gc3RyaW5ncyBhcmUgbm90IGluc2VydGVkIGluXG4gICAgICAgKiB0aGUgaGFzaCB0YWJsZS5cbiAgICAgICAqL1xuICAgICAgcy5sb29rYWhlYWQgLT0gcy5wcmV2X2xlbmd0aCAtIDE7XG4gICAgICBzLnByZXZfbGVuZ3RoIC09IDI7XG4gICAgICBkbyB7XG4gICAgICAgIGlmICgrK3Muc3Ryc3RhcnQgPD0gbWF4X2luc2VydCkge1xuICAgICAgICAgIC8qKiogSU5TRVJUX1NUUklORyhzLCBzLnN0cnN0YXJ0LCBoYXNoX2hlYWQpOyAqKiovXG4gICAgICAgICAgcy5pbnNfaCA9ICgocy5pbnNfaCA8PCBzLmhhc2hfc2hpZnQpIF4gcy53aW5kb3dbcy5zdHJzdGFydCArIE1JTl9NQVRDSCAtIDFdKSAmIHMuaGFzaF9tYXNrO1xuICAgICAgICAgIGhhc2hfaGVhZCA9IHMucHJldltzLnN0cnN0YXJ0ICYgcy53X21hc2tdID0gcy5oZWFkW3MuaW5zX2hdO1xuICAgICAgICAgIHMuaGVhZFtzLmluc19oXSA9IHMuc3Ryc3RhcnQ7XG4gICAgICAgICAgLyoqKi9cbiAgICAgICAgfVxuICAgICAgfSB3aGlsZSAoLS1zLnByZXZfbGVuZ3RoICE9PSAwKTtcbiAgICAgIHMubWF0Y2hfYXZhaWxhYmxlID0gMDtcbiAgICAgIHMubWF0Y2hfbGVuZ3RoID0gTUlOX01BVENIIC0gMTtcbiAgICAgIHMuc3Ryc3RhcnQrKztcblxuICAgICAgaWYgKGJmbHVzaCkge1xuICAgICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICAgIH1cbiAgICAgICAgLyoqKi9cbiAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAocy5tYXRjaF9hdmFpbGFibGUpIHtcbiAgICAgIC8qIElmIHRoZXJlIHdhcyBubyBtYXRjaCBhdCB0aGUgcHJldmlvdXMgcG9zaXRpb24sIG91dHB1dCBhXG4gICAgICAgKiBzaW5nbGUgbGl0ZXJhbC4gSWYgdGhlcmUgd2FzIGEgbWF0Y2ggYnV0IHRoZSBjdXJyZW50IG1hdGNoXG4gICAgICAgKiBpcyBsb25nZXIsIHRydW5jYXRlIHRoZSBwcmV2aW91cyBtYXRjaCB0byBhIHNpbmdsZSBsaXRlcmFsLlxuICAgICAgICovXG4gICAgICAvL1RyYWNldnYoKHN0ZGVycixcIiVjXCIsIHMtPndpbmRvd1tzLT5zdHJzdGFydC0xXSkpO1xuICAgICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnQtMV0sIGJmbHVzaCk7ICoqKi9cbiAgICAgIGJmbHVzaCA9IHRyZWVzLl90cl90YWxseShzLCAwLCBzLndpbmRvd1tzLnN0cnN0YXJ0IC0gMV0pO1xuXG4gICAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAgIC8qKiogRkxVU0hfQkxPQ0tfT05MWShzLCAwKSAqKiovXG4gICAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgICAvKioqL1xuICAgICAgfVxuICAgICAgcy5zdHJzdGFydCsrO1xuICAgICAgcy5sb29rYWhlYWQtLTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIFRoZXJlIGlzIG5vIHByZXZpb3VzIG1hdGNoIHRvIGNvbXBhcmUgd2l0aCwgd2FpdCBmb3JcbiAgICAgICAqIHRoZSBuZXh0IHN0ZXAgdG8gZGVjaWRlLlxuICAgICAgICovXG4gICAgICBzLm1hdGNoX2F2YWlsYWJsZSA9IDE7XG4gICAgICBzLnN0cnN0YXJ0Kys7XG4gICAgICBzLmxvb2thaGVhZC0tO1xuICAgIH1cbiAgfVxuICAvL0Fzc2VydCAoZmx1c2ggIT0gWl9OT19GTFVTSCwgXCJubyBmbHVzaD9cIik7XG4gIGlmIChzLm1hdGNoX2F2YWlsYWJsZSkge1xuICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy0+d2luZG93W3MtPnN0cnN0YXJ0LTFdKSk7XG4gICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnQtMV0sIGJmbHVzaCk7ICoqKi9cbiAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydCAtIDFdKTtcblxuICAgIHMubWF0Y2hfYXZhaWxhYmxlID0gMDtcbiAgfVxuICBzLmluc2VydCA9IHMuc3Ryc3RhcnQgPCBNSU5fTUFUQ0ggLSAxID8gcy5zdHJzdGFydCA6IE1JTl9NQVRDSCAtIDE7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDEpOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCB0cnVlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX0ZJTklTSF9TVEFSVEVEO1xuICAgIH1cbiAgICAvKioqL1xuICAgIHJldHVybiBCU19GSU5JU0hfRE9ORTtcbiAgfVxuICBpZiAocy5sYXN0X2xpdCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICB9XG4gICAgLyoqKi9cbiAgfVxuXG4gIHJldHVybiBCU19CTE9DS19ET05FO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogRm9yIFpfUkxFLCBzaW1wbHkgbG9vayBmb3IgcnVucyBvZiBieXRlcywgZ2VuZXJhdGUgbWF0Y2hlcyBvbmx5IG9mIGRpc3RhbmNlXG4gKiBvbmUuICBEbyBub3QgbWFpbnRhaW4gYSBoYXNoIHRhYmxlLiAgKEl0IHdpbGwgYmUgcmVnZW5lcmF0ZWQgaWYgdGhpcyBydW4gb2ZcbiAqIGRlZmxhdGUgc3dpdGNoZXMgYXdheSBmcm9tIFpfUkxFLilcbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZV9ybGUocywgZmx1c2gpIHtcbiAgdmFyIGJmbHVzaDsgICAgICAgICAgICAvKiBzZXQgaWYgY3VycmVudCBibG9jayBtdXN0IGJlIGZsdXNoZWQgKi9cbiAgdmFyIHByZXY7ICAgICAgICAgICAgICAvKiBieXRlIGF0IGRpc3RhbmNlIG9uZSB0byBtYXRjaCAqL1xuICB2YXIgc2Nhbiwgc3RyZW5kOyAgICAgIC8qIHNjYW4gZ29lcyB1cCB0byBzdHJlbmQgZm9yIGxlbmd0aCBvZiBydW4gKi9cblxuICB2YXIgX3dpbiA9IHMud2luZG93O1xuXG4gIGZvciAoOzspIHtcbiAgICAvKiBNYWtlIHN1cmUgdGhhdCB3ZSBhbHdheXMgaGF2ZSBlbm91Z2ggbG9va2FoZWFkLCBleGNlcHRcbiAgICAgKiBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCBmaWxlLiBXZSBuZWVkIE1BWF9NQVRDSCBieXRlc1xuICAgICAqIGZvciB0aGUgbG9uZ2VzdCBydW4sIHBsdXMgb25lIGZvciB0aGUgdW5yb2xsZWQgbG9vcC5cbiAgICAgKi9cbiAgICBpZiAocy5sb29rYWhlYWQgPD0gTUFYX01BVENIKSB7XG4gICAgICBmaWxsX3dpbmRvdyhzKTtcbiAgICAgIGlmIChzLmxvb2thaGVhZCA8PSBNQVhfTUFUQ0ggJiYgZmx1c2ggPT09IFpfTk9fRkxVU0gpIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkgeyBicmVhazsgfSAvKiBmbHVzaCB0aGUgY3VycmVudCBibG9jayAqL1xuICAgIH1cblxuICAgIC8qIFNlZSBob3cgbWFueSB0aW1lcyB0aGUgcHJldmlvdXMgYnl0ZSByZXBlYXRzICovXG4gICAgcy5tYXRjaF9sZW5ndGggPSAwO1xuICAgIGlmIChzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0ggJiYgcy5zdHJzdGFydCA+IDApIHtcbiAgICAgIHNjYW4gPSBzLnN0cnN0YXJ0IC0gMTtcbiAgICAgIHByZXYgPSBfd2luW3NjYW5dO1xuICAgICAgaWYgKHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dKSB7XG4gICAgICAgIHN0cmVuZCA9IHMuc3Ryc3RhcnQgKyBNQVhfTUFUQ0g7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAvKmpzaGludCBub2VtcHR5OmZhbHNlKi9cbiAgICAgICAgfSB3aGlsZSAocHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSAmJlxuICAgICAgICAgICAgICAgICBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiYgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmXG4gICAgICAgICAgICAgICAgIHByZXYgPT09IF93aW5bKytzY2FuXSAmJiBwcmV2ID09PSBfd2luWysrc2Nhbl0gJiZcbiAgICAgICAgICAgICAgICAgcHJldiA9PT0gX3dpblsrK3NjYW5dICYmIHByZXYgPT09IF93aW5bKytzY2FuXSAmJlxuICAgICAgICAgICAgICAgICBzY2FuIDwgc3RyZW5kKTtcbiAgICAgICAgcy5tYXRjaF9sZW5ndGggPSBNQVhfTUFUQ0ggLSAoc3RyZW5kIC0gc2Nhbik7XG4gICAgICAgIGlmIChzLm1hdGNoX2xlbmd0aCA+IHMubG9va2FoZWFkKSB7XG4gICAgICAgICAgcy5tYXRjaF9sZW5ndGggPSBzLmxvb2thaGVhZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9Bc3NlcnQoc2NhbiA8PSBzLT53aW5kb3crKHVJbnQpKHMtPndpbmRvd19zaXplLTEpLCBcIndpbGQgc2NhblwiKTtcbiAgICB9XG5cbiAgICAvKiBFbWl0IG1hdGNoIGlmIGhhdmUgcnVuIG9mIE1JTl9NQVRDSCBvciBsb25nZXIsIGVsc2UgZW1pdCBsaXRlcmFsICovXG4gICAgaWYgKHMubWF0Y2hfbGVuZ3RoID49IE1JTl9NQVRDSCkge1xuICAgICAgLy9jaGVja19tYXRjaChzLCBzLnN0cnN0YXJ0LCBzLnN0cnN0YXJ0IC0gMSwgcy5tYXRjaF9sZW5ndGgpO1xuXG4gICAgICAvKioqIF90cl90YWxseV9kaXN0KHMsIDEsIHMubWF0Y2hfbGVuZ3RoIC0gTUlOX01BVENILCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgMSwgcy5tYXRjaF9sZW5ndGggLSBNSU5fTUFUQ0gpO1xuXG4gICAgICBzLmxvb2thaGVhZCAtPSBzLm1hdGNoX2xlbmd0aDtcbiAgICAgIHMuc3Ryc3RhcnQgKz0gcy5tYXRjaF9sZW5ndGg7XG4gICAgICBzLm1hdGNoX2xlbmd0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIE5vIG1hdGNoLCBvdXRwdXQgYSBsaXRlcmFsIGJ5dGUgKi9cbiAgICAgIC8vVHJhY2V2digoc3RkZXJyLFwiJWNcIiwgcy0+d2luZG93W3MtPnN0cnN0YXJ0XSkpO1xuICAgICAgLyoqKiBfdHJfdGFsbHlfbGl0KHMsIHMud2luZG93W3Muc3Ryc3RhcnRdLCBiZmx1c2gpOyAqKiovXG4gICAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydF0pO1xuXG4gICAgICBzLmxvb2thaGVhZC0tO1xuICAgICAgcy5zdHJzdGFydCsrO1xuICAgIH1cbiAgICBpZiAoYmZsdXNoKSB7XG4gICAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDApOyAqKiovXG4gICAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBCU19ORUVEX01PUkU7XG4gICAgICB9XG4gICAgICAvKioqL1xuICAgIH1cbiAgfVxuICBzLmluc2VydCA9IDA7XG4gIGlmIChmbHVzaCA9PT0gWl9GSU5JU0gpIHtcbiAgICAvKioqIEZMVVNIX0JMT0NLKHMsIDEpOyAqKiovXG4gICAgZmx1c2hfYmxvY2tfb25seShzLCB0cnVlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX0ZJTklTSF9TVEFSVEVEO1xuICAgIH1cbiAgICAvKioqL1xuICAgIHJldHVybiBCU19GSU5JU0hfRE9ORTtcbiAgfVxuICBpZiAocy5sYXN0X2xpdCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIGZhbHNlKTtcbiAgICBpZiAocy5zdHJtLmF2YWlsX291dCA9PT0gMCkge1xuICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICB9XG4gICAgLyoqKi9cbiAgfVxuICByZXR1cm4gQlNfQkxPQ0tfRE9ORTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGb3IgWl9IVUZGTUFOX09OTFksIGRvIG5vdCBsb29rIGZvciBtYXRjaGVzLiAgRG8gbm90IG1haW50YWluIGEgaGFzaCB0YWJsZS5cbiAqIChJdCB3aWxsIGJlIHJlZ2VuZXJhdGVkIGlmIHRoaXMgcnVuIG9mIGRlZmxhdGUgc3dpdGNoZXMgYXdheSBmcm9tIEh1ZmZtYW4uKVxuICovXG5mdW5jdGlvbiBkZWZsYXRlX2h1ZmYocywgZmx1c2gpIHtcbiAgdmFyIGJmbHVzaDsgICAgICAgICAgICAgLyogc2V0IGlmIGN1cnJlbnQgYmxvY2sgbXVzdCBiZSBmbHVzaGVkICovXG5cbiAgZm9yICg7Oykge1xuICAgIC8qIE1ha2Ugc3VyZSB0aGF0IHdlIGhhdmUgYSBsaXRlcmFsIHRvIHdyaXRlLiAqL1xuICAgIGlmIChzLmxvb2thaGVhZCA9PT0gMCkge1xuICAgICAgZmlsbF93aW5kb3cocyk7XG4gICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHtcbiAgICAgICAgaWYgKGZsdXNoID09PSBaX05PX0ZMVVNIKSB7XG4gICAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgICAgfVxuICAgICAgICBicmVhazsgICAgICAvKiBmbHVzaCB0aGUgY3VycmVudCBibG9jayAqL1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIE91dHB1dCBhIGxpdGVyYWwgYnl0ZSAqL1xuICAgIHMubWF0Y2hfbGVuZ3RoID0gMDtcbiAgICAvL1RyYWNldnYoKHN0ZGVycixcIiVjXCIsIHMtPndpbmRvd1tzLT5zdHJzdGFydF0pKTtcbiAgICAvKioqIF90cl90YWxseV9saXQocywgcy53aW5kb3dbcy5zdHJzdGFydF0sIGJmbHVzaCk7ICoqKi9cbiAgICBiZmx1c2ggPSB0cmVlcy5fdHJfdGFsbHkocywgMCwgcy53aW5kb3dbcy5zdHJzdGFydF0pO1xuICAgIHMubG9va2FoZWFkLS07XG4gICAgcy5zdHJzdGFydCsrO1xuICAgIGlmIChiZmx1c2gpIHtcbiAgICAgIC8qKiogRkxVU0hfQkxPQ0socywgMCk7ICoqKi9cbiAgICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgICAgaWYgKHMuc3RybS5hdmFpbF9vdXQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEJTX05FRURfTU9SRTtcbiAgICAgIH1cbiAgICAgIC8qKiovXG4gICAgfVxuICB9XG4gIHMuaW5zZXJ0ID0gMDtcbiAgaWYgKGZsdXNoID09PSBaX0ZJTklTSCkge1xuICAgIC8qKiogRkxVU0hfQkxPQ0socywgMSk7ICoqKi9cbiAgICBmbHVzaF9ibG9ja19vbmx5KHMsIHRydWUpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfRklOSVNIX1NUQVJURUQ7XG4gICAgfVxuICAgIC8qKiovXG4gICAgcmV0dXJuIEJTX0ZJTklTSF9ET05FO1xuICB9XG4gIGlmIChzLmxhc3RfbGl0KSB7XG4gICAgLyoqKiBGTFVTSF9CTE9DSyhzLCAwKTsgKioqL1xuICAgIGZsdXNoX2Jsb2NrX29ubHkocywgZmFsc2UpO1xuICAgIGlmIChzLnN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gQlNfTkVFRF9NT1JFO1xuICAgIH1cbiAgICAvKioqL1xuICB9XG4gIHJldHVybiBCU19CTE9DS19ET05FO1xufVxuXG4vKiBWYWx1ZXMgZm9yIG1heF9sYXp5X21hdGNoLCBnb29kX21hdGNoIGFuZCBtYXhfY2hhaW5fbGVuZ3RoLCBkZXBlbmRpbmcgb25cbiAqIHRoZSBkZXNpcmVkIHBhY2sgbGV2ZWwgKDAuLjkpLiBUaGUgdmFsdWVzIGdpdmVuIGJlbG93IGhhdmUgYmVlbiB0dW5lZCB0b1xuICogZXhjbHVkZSB3b3JzdCBjYXNlIHBlcmZvcm1hbmNlIGZvciBwYXRob2xvZ2ljYWwgZmlsZXMuIEJldHRlciB2YWx1ZXMgbWF5IGJlXG4gKiBmb3VuZCBmb3Igc3BlY2lmaWMgZmlsZXMuXG4gKi9cbmZ1bmN0aW9uIENvbmZpZyhnb29kX2xlbmd0aCwgbWF4X2xhenksIG5pY2VfbGVuZ3RoLCBtYXhfY2hhaW4sIGZ1bmMpIHtcbiAgdGhpcy5nb29kX2xlbmd0aCA9IGdvb2RfbGVuZ3RoO1xuICB0aGlzLm1heF9sYXp5ID0gbWF4X2xhenk7XG4gIHRoaXMubmljZV9sZW5ndGggPSBuaWNlX2xlbmd0aDtcbiAgdGhpcy5tYXhfY2hhaW4gPSBtYXhfY2hhaW47XG4gIHRoaXMuZnVuYyA9IGZ1bmM7XG59XG5cbnZhciBjb25maWd1cmF0aW9uX3RhYmxlO1xuXG5jb25maWd1cmF0aW9uX3RhYmxlID0gW1xuICAvKiAgICAgIGdvb2QgbGF6eSBuaWNlIGNoYWluICovXG4gIG5ldyBDb25maWcoMCwgMCwgMCwgMCwgZGVmbGF0ZV9zdG9yZWQpLCAgICAgICAgICAvKiAwIHN0b3JlIG9ubHkgKi9cbiAgbmV3IENvbmZpZyg0LCA0LCA4LCA0LCBkZWZsYXRlX2Zhc3QpLCAgICAgICAgICAgIC8qIDEgbWF4IHNwZWVkLCBubyBsYXp5IG1hdGNoZXMgKi9cbiAgbmV3IENvbmZpZyg0LCA1LCAxNiwgOCwgZGVmbGF0ZV9mYXN0KSwgICAgICAgICAgIC8qIDIgKi9cbiAgbmV3IENvbmZpZyg0LCA2LCAzMiwgMzIsIGRlZmxhdGVfZmFzdCksICAgICAgICAgIC8qIDMgKi9cblxuICBuZXcgQ29uZmlnKDQsIDQsIDE2LCAxNiwgZGVmbGF0ZV9zbG93KSwgICAgICAgICAgLyogNCBsYXp5IG1hdGNoZXMgKi9cbiAgbmV3IENvbmZpZyg4LCAxNiwgMzIsIDMyLCBkZWZsYXRlX3Nsb3cpLCAgICAgICAgIC8qIDUgKi9cbiAgbmV3IENvbmZpZyg4LCAxNiwgMTI4LCAxMjgsIGRlZmxhdGVfc2xvdyksICAgICAgIC8qIDYgKi9cbiAgbmV3IENvbmZpZyg4LCAzMiwgMTI4LCAyNTYsIGRlZmxhdGVfc2xvdyksICAgICAgIC8qIDcgKi9cbiAgbmV3IENvbmZpZygzMiwgMTI4LCAyNTgsIDEwMjQsIGRlZmxhdGVfc2xvdyksICAgIC8qIDggKi9cbiAgbmV3IENvbmZpZygzMiwgMjU4LCAyNTgsIDQwOTYsIGRlZmxhdGVfc2xvdykgICAgIC8qIDkgbWF4IGNvbXByZXNzaW9uICovXG5dO1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogSW5pdGlhbGl6ZSB0aGUgXCJsb25nZXN0IG1hdGNoXCIgcm91dGluZXMgZm9yIGEgbmV3IHpsaWIgc3RyZWFtXG4gKi9cbmZ1bmN0aW9uIGxtX2luaXQocykge1xuICBzLndpbmRvd19zaXplID0gMiAqIHMud19zaXplO1xuXG4gIC8qKiogQ0xFQVJfSEFTSChzKTsgKioqL1xuICB6ZXJvKHMuaGVhZCk7IC8vIEZpbGwgd2l0aCBOSUwgKD0gMCk7XG5cbiAgLyogU2V0IHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyczpcbiAgICovXG4gIHMubWF4X2xhenlfbWF0Y2ggPSBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLm1heF9sYXp5O1xuICBzLmdvb2RfbWF0Y2ggPSBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLmdvb2RfbGVuZ3RoO1xuICBzLm5pY2VfbWF0Y2ggPSBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLm5pY2VfbGVuZ3RoO1xuICBzLm1heF9jaGFpbl9sZW5ndGggPSBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLm1heF9jaGFpbjtcblxuICBzLnN0cnN0YXJ0ID0gMDtcbiAgcy5ibG9ja19zdGFydCA9IDA7XG4gIHMubG9va2FoZWFkID0gMDtcbiAgcy5pbnNlcnQgPSAwO1xuICBzLm1hdGNoX2xlbmd0aCA9IHMucHJldl9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuICBzLm1hdGNoX2F2YWlsYWJsZSA9IDA7XG4gIHMuaW5zX2ggPSAwO1xufVxuXG5cbmZ1bmN0aW9uIERlZmxhdGVTdGF0ZSgpIHtcbiAgdGhpcy5zdHJtID0gbnVsbDsgICAgICAgICAgICAvKiBwb2ludGVyIGJhY2sgdG8gdGhpcyB6bGliIHN0cmVhbSAqL1xuICB0aGlzLnN0YXR1cyA9IDA7ICAgICAgICAgICAgLyogYXMgdGhlIG5hbWUgaW1wbGllcyAqL1xuICB0aGlzLnBlbmRpbmdfYnVmID0gbnVsbDsgICAgICAvKiBvdXRwdXQgc3RpbGwgcGVuZGluZyAqL1xuICB0aGlzLnBlbmRpbmdfYnVmX3NpemUgPSAwOyAgLyogc2l6ZSBvZiBwZW5kaW5nX2J1ZiAqL1xuICB0aGlzLnBlbmRpbmdfb3V0ID0gMDsgICAgICAgLyogbmV4dCBwZW5kaW5nIGJ5dGUgdG8gb3V0cHV0IHRvIHRoZSBzdHJlYW0gKi9cbiAgdGhpcy5wZW5kaW5nID0gMDsgICAgICAgICAgIC8qIG5iIG9mIGJ5dGVzIGluIHRoZSBwZW5kaW5nIGJ1ZmZlciAqL1xuICB0aGlzLndyYXAgPSAwOyAgICAgICAgICAgICAgLyogYml0IDAgdHJ1ZSBmb3IgemxpYiwgYml0IDEgdHJ1ZSBmb3IgZ3ppcCAqL1xuICB0aGlzLmd6aGVhZCA9IG51bGw7ICAgICAgICAgLyogZ3ppcCBoZWFkZXIgaW5mb3JtYXRpb24gdG8gd3JpdGUgKi9cbiAgdGhpcy5nemluZGV4ID0gMDsgICAgICAgICAgIC8qIHdoZXJlIGluIGV4dHJhLCBuYW1lLCBvciBjb21tZW50ICovXG4gIHRoaXMubWV0aG9kID0gWl9ERUZMQVRFRDsgLyogY2FuIG9ubHkgYmUgREVGTEFURUQgKi9cbiAgdGhpcy5sYXN0X2ZsdXNoID0gLTE7ICAgLyogdmFsdWUgb2YgZmx1c2ggcGFyYW0gZm9yIHByZXZpb3VzIGRlZmxhdGUgY2FsbCAqL1xuXG4gIHRoaXMud19zaXplID0gMDsgIC8qIExaNzcgd2luZG93IHNpemUgKDMySyBieSBkZWZhdWx0KSAqL1xuICB0aGlzLndfYml0cyA9IDA7ICAvKiBsb2cyKHdfc2l6ZSkgICg4Li4xNikgKi9cbiAgdGhpcy53X21hc2sgPSAwOyAgLyogd19zaXplIC0gMSAqL1xuXG4gIHRoaXMud2luZG93ID0gbnVsbDtcbiAgLyogU2xpZGluZyB3aW5kb3cuIElucHV0IGJ5dGVzIGFyZSByZWFkIGludG8gdGhlIHNlY29uZCBoYWxmIG9mIHRoZSB3aW5kb3csXG4gICAqIGFuZCBtb3ZlIHRvIHRoZSBmaXJzdCBoYWxmIGxhdGVyIHRvIGtlZXAgYSBkaWN0aW9uYXJ5IG9mIGF0IGxlYXN0IHdTaXplXG4gICAqIGJ5dGVzLiBXaXRoIHRoaXMgb3JnYW5pemF0aW9uLCBtYXRjaGVzIGFyZSBsaW1pdGVkIHRvIGEgZGlzdGFuY2Ugb2ZcbiAgICogd1NpemUtTUFYX01BVENIIGJ5dGVzLCBidXQgdGhpcyBlbnN1cmVzIHRoYXQgSU8gaXMgYWx3YXlzXG4gICAqIHBlcmZvcm1lZCB3aXRoIGEgbGVuZ3RoIG11bHRpcGxlIG9mIHRoZSBibG9jayBzaXplLlxuICAgKi9cblxuICB0aGlzLndpbmRvd19zaXplID0gMDtcbiAgLyogQWN0dWFsIHNpemUgb2Ygd2luZG93OiAyKndTaXplLCBleGNlcHQgd2hlbiB0aGUgdXNlciBpbnB1dCBidWZmZXJcbiAgICogaXMgZGlyZWN0bHkgdXNlZCBhcyBzbGlkaW5nIHdpbmRvdy5cbiAgICovXG5cbiAgdGhpcy5wcmV2ID0gbnVsbDtcbiAgLyogTGluayB0byBvbGRlciBzdHJpbmcgd2l0aCBzYW1lIGhhc2ggaW5kZXguIFRvIGxpbWl0IHRoZSBzaXplIG9mIHRoaXNcbiAgICogYXJyYXkgdG8gNjRLLCB0aGlzIGxpbmsgaXMgbWFpbnRhaW5lZCBvbmx5IGZvciB0aGUgbGFzdCAzMksgc3RyaW5ncy5cbiAgICogQW4gaW5kZXggaW4gdGhpcyBhcnJheSBpcyB0aHVzIGEgd2luZG93IGluZGV4IG1vZHVsbyAzMksuXG4gICAqL1xuXG4gIHRoaXMuaGVhZCA9IG51bGw7ICAgLyogSGVhZHMgb2YgdGhlIGhhc2ggY2hhaW5zIG9yIE5JTC4gKi9cblxuICB0aGlzLmluc19oID0gMDsgICAgICAgLyogaGFzaCBpbmRleCBvZiBzdHJpbmcgdG8gYmUgaW5zZXJ0ZWQgKi9cbiAgdGhpcy5oYXNoX3NpemUgPSAwOyAgIC8qIG51bWJlciBvZiBlbGVtZW50cyBpbiBoYXNoIHRhYmxlICovXG4gIHRoaXMuaGFzaF9iaXRzID0gMDsgICAvKiBsb2cyKGhhc2hfc2l6ZSkgKi9cbiAgdGhpcy5oYXNoX21hc2sgPSAwOyAgIC8qIGhhc2hfc2l6ZS0xICovXG5cbiAgdGhpcy5oYXNoX3NoaWZ0ID0gMDtcbiAgLyogTnVtYmVyIG9mIGJpdHMgYnkgd2hpY2ggaW5zX2ggbXVzdCBiZSBzaGlmdGVkIGF0IGVhY2ggaW5wdXRcbiAgICogc3RlcC4gSXQgbXVzdCBiZSBzdWNoIHRoYXQgYWZ0ZXIgTUlOX01BVENIIHN0ZXBzLCB0aGUgb2xkZXN0XG4gICAqIGJ5dGUgbm8gbG9uZ2VyIHRha2VzIHBhcnQgaW4gdGhlIGhhc2gga2V5LCB0aGF0IGlzOlxuICAgKiAgIGhhc2hfc2hpZnQgKiBNSU5fTUFUQ0ggPj0gaGFzaF9iaXRzXG4gICAqL1xuXG4gIHRoaXMuYmxvY2tfc3RhcnQgPSAwO1xuICAvKiBXaW5kb3cgcG9zaXRpb24gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgY3VycmVudCBvdXRwdXQgYmxvY2suIEdldHNcbiAgICogbmVnYXRpdmUgd2hlbiB0aGUgd2luZG93IGlzIG1vdmVkIGJhY2t3YXJkcy5cbiAgICovXG5cbiAgdGhpcy5tYXRjaF9sZW5ndGggPSAwOyAgICAgIC8qIGxlbmd0aCBvZiBiZXN0IG1hdGNoICovXG4gIHRoaXMucHJldl9tYXRjaCA9IDA7ICAgICAgICAvKiBwcmV2aW91cyBtYXRjaCAqL1xuICB0aGlzLm1hdGNoX2F2YWlsYWJsZSA9IDA7ICAgLyogc2V0IGlmIHByZXZpb3VzIG1hdGNoIGV4aXN0cyAqL1xuICB0aGlzLnN0cnN0YXJ0ID0gMDsgICAgICAgICAgLyogc3RhcnQgb2Ygc3RyaW5nIHRvIGluc2VydCAqL1xuICB0aGlzLm1hdGNoX3N0YXJ0ID0gMDsgICAgICAgLyogc3RhcnQgb2YgbWF0Y2hpbmcgc3RyaW5nICovXG4gIHRoaXMubG9va2FoZWFkID0gMDsgICAgICAgICAvKiBudW1iZXIgb2YgdmFsaWQgYnl0ZXMgYWhlYWQgaW4gd2luZG93ICovXG5cbiAgdGhpcy5wcmV2X2xlbmd0aCA9IDA7XG4gIC8qIExlbmd0aCBvZiB0aGUgYmVzdCBtYXRjaCBhdCBwcmV2aW91cyBzdGVwLiBNYXRjaGVzIG5vdCBncmVhdGVyIHRoYW4gdGhpc1xuICAgKiBhcmUgZGlzY2FyZGVkLiBUaGlzIGlzIHVzZWQgaW4gdGhlIGxhenkgbWF0Y2ggZXZhbHVhdGlvbi5cbiAgICovXG5cbiAgdGhpcy5tYXhfY2hhaW5fbGVuZ3RoID0gMDtcbiAgLyogVG8gc3BlZWQgdXAgZGVmbGF0aW9uLCBoYXNoIGNoYWlucyBhcmUgbmV2ZXIgc2VhcmNoZWQgYmV5b25kIHRoaXNcbiAgICogbGVuZ3RoLiAgQSBoaWdoZXIgbGltaXQgaW1wcm92ZXMgY29tcHJlc3Npb24gcmF0aW8gYnV0IGRlZ3JhZGVzIHRoZVxuICAgKiBzcGVlZC5cbiAgICovXG5cbiAgdGhpcy5tYXhfbGF6eV9tYXRjaCA9IDA7XG4gIC8qIEF0dGVtcHQgdG8gZmluZCBhIGJldHRlciBtYXRjaCBvbmx5IHdoZW4gdGhlIGN1cnJlbnQgbWF0Y2ggaXMgc3RyaWN0bHlcbiAgICogc21hbGxlciB0aGFuIHRoaXMgdmFsdWUuIFRoaXMgbWVjaGFuaXNtIGlzIHVzZWQgb25seSBmb3IgY29tcHJlc3Npb25cbiAgICogbGV2ZWxzID49IDQuXG4gICAqL1xuICAvLyBUaGF0J3MgYWxpYXMgdG8gbWF4X2xhenlfbWF0Y2gsIGRvbid0IHVzZSBkaXJlY3RseVxuICAvL3RoaXMubWF4X2luc2VydF9sZW5ndGggPSAwO1xuICAvKiBJbnNlcnQgbmV3IHN0cmluZ3MgaW4gdGhlIGhhc2ggdGFibGUgb25seSBpZiB0aGUgbWF0Y2ggbGVuZ3RoIGlzIG5vdFxuICAgKiBncmVhdGVyIHRoYW4gdGhpcyBsZW5ndGguIFRoaXMgc2F2ZXMgdGltZSBidXQgZGVncmFkZXMgY29tcHJlc3Npb24uXG4gICAqIG1heF9pbnNlcnRfbGVuZ3RoIGlzIHVzZWQgb25seSBmb3IgY29tcHJlc3Npb24gbGV2ZWxzIDw9IDMuXG4gICAqL1xuXG4gIHRoaXMubGV2ZWwgPSAwOyAgICAgLyogY29tcHJlc3Npb24gbGV2ZWwgKDEuLjkpICovXG4gIHRoaXMuc3RyYXRlZ3kgPSAwOyAgLyogZmF2b3Igb3IgZm9yY2UgSHVmZm1hbiBjb2RpbmcqL1xuXG4gIHRoaXMuZ29vZF9tYXRjaCA9IDA7XG4gIC8qIFVzZSBhIGZhc3RlciBzZWFyY2ggd2hlbiB0aGUgcHJldmlvdXMgbWF0Y2ggaXMgbG9uZ2VyIHRoYW4gdGhpcyAqL1xuXG4gIHRoaXMubmljZV9tYXRjaCA9IDA7IC8qIFN0b3Agc2VhcmNoaW5nIHdoZW4gY3VycmVudCBtYXRjaCBleGNlZWRzIHRoaXMgKi9cblxuICAgICAgICAgICAgICAvKiB1c2VkIGJ5IHRyZWVzLmM6ICovXG5cbiAgLyogRGlkbid0IHVzZSBjdF9kYXRhIHR5cGVkZWYgYmVsb3cgdG8gc3VwcHJlc3MgY29tcGlsZXIgd2FybmluZyAqL1xuXG4gIC8vIHN0cnVjdCBjdF9kYXRhX3MgZHluX2x0cmVlW0hFQVBfU0laRV07ICAgLyogbGl0ZXJhbCBhbmQgbGVuZ3RoIHRyZWUgKi9cbiAgLy8gc3RydWN0IGN0X2RhdGFfcyBkeW5fZHRyZWVbMipEX0NPREVTKzFdOyAvKiBkaXN0YW5jZSB0cmVlICovXG4gIC8vIHN0cnVjdCBjdF9kYXRhX3MgYmxfdHJlZVsyKkJMX0NPREVTKzFdOyAgLyogSHVmZm1hbiB0cmVlIGZvciBiaXQgbGVuZ3RocyAqL1xuXG4gIC8vIFVzZSBmbGF0IGFycmF5IG9mIERPVUJMRSBzaXplLCB3aXRoIGludGVybGVhdmVkIGZhdGEsXG4gIC8vIGJlY2F1c2UgSlMgZG9lcyBub3Qgc3VwcG9ydCBlZmZlY3RpdmVcbiAgdGhpcy5keW5fbHRyZWUgID0gbmV3IHV0aWxzLkJ1ZjE2KEhFQVBfU0laRSAqIDIpO1xuICB0aGlzLmR5bl9kdHJlZSAgPSBuZXcgdXRpbHMuQnVmMTYoKDIgKiBEX0NPREVTICsgMSkgKiAyKTtcbiAgdGhpcy5ibF90cmVlICAgID0gbmV3IHV0aWxzLkJ1ZjE2KCgyICogQkxfQ09ERVMgKyAxKSAqIDIpO1xuICB6ZXJvKHRoaXMuZHluX2x0cmVlKTtcbiAgemVybyh0aGlzLmR5bl9kdHJlZSk7XG4gIHplcm8odGhpcy5ibF90cmVlKTtcblxuICB0aGlzLmxfZGVzYyAgID0gbnVsbDsgICAgICAgICAvKiBkZXNjLiBmb3IgbGl0ZXJhbCB0cmVlICovXG4gIHRoaXMuZF9kZXNjICAgPSBudWxsOyAgICAgICAgIC8qIGRlc2MuIGZvciBkaXN0YW5jZSB0cmVlICovXG4gIHRoaXMuYmxfZGVzYyAgPSBudWxsOyAgICAgICAgIC8qIGRlc2MuIGZvciBiaXQgbGVuZ3RoIHRyZWUgKi9cblxuICAvL3VzaCBibF9jb3VudFtNQVhfQklUUysxXTtcbiAgdGhpcy5ibF9jb3VudCA9IG5ldyB1dGlscy5CdWYxNihNQVhfQklUUyArIDEpO1xuICAvKiBudW1iZXIgb2YgY29kZXMgYXQgZWFjaCBiaXQgbGVuZ3RoIGZvciBhbiBvcHRpbWFsIHRyZWUgKi9cblxuICAvL2ludCBoZWFwWzIqTF9DT0RFUysxXTsgICAgICAvKiBoZWFwIHVzZWQgdG8gYnVpbGQgdGhlIEh1ZmZtYW4gdHJlZXMgKi9cbiAgdGhpcy5oZWFwID0gbmV3IHV0aWxzLkJ1ZjE2KDIgKiBMX0NPREVTICsgMSk7ICAvKiBoZWFwIHVzZWQgdG8gYnVpbGQgdGhlIEh1ZmZtYW4gdHJlZXMgKi9cbiAgemVybyh0aGlzLmhlYXApO1xuXG4gIHRoaXMuaGVhcF9sZW4gPSAwOyAgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgaGVhcCAqL1xuICB0aGlzLmhlYXBfbWF4ID0gMDsgICAgICAgICAgICAgICAvKiBlbGVtZW50IG9mIGxhcmdlc3QgZnJlcXVlbmN5ICovXG4gIC8qIFRoZSBzb25zIG9mIGhlYXBbbl0gYXJlIGhlYXBbMipuXSBhbmQgaGVhcFsyKm4rMV0uIGhlYXBbMF0gaXMgbm90IHVzZWQuXG4gICAqIFRoZSBzYW1lIGhlYXAgYXJyYXkgaXMgdXNlZCB0byBidWlsZCBhbGwgdHJlZXMuXG4gICAqL1xuXG4gIHRoaXMuZGVwdGggPSBuZXcgdXRpbHMuQnVmMTYoMiAqIExfQ09ERVMgKyAxKTsgLy91Y2ggZGVwdGhbMipMX0NPREVTKzFdO1xuICB6ZXJvKHRoaXMuZGVwdGgpO1xuICAvKiBEZXB0aCBvZiBlYWNoIHN1YnRyZWUgdXNlZCBhcyB0aWUgYnJlYWtlciBmb3IgdHJlZXMgb2YgZXF1YWwgZnJlcXVlbmN5XG4gICAqL1xuXG4gIHRoaXMubF9idWYgPSAwOyAgICAgICAgICAvKiBidWZmZXIgaW5kZXggZm9yIGxpdGVyYWxzIG9yIGxlbmd0aHMgKi9cblxuICB0aGlzLmxpdF9idWZzaXplID0gMDtcbiAgLyogU2l6ZSBvZiBtYXRjaCBidWZmZXIgZm9yIGxpdGVyYWxzL2xlbmd0aHMuICBUaGVyZSBhcmUgNCByZWFzb25zIGZvclxuICAgKiBsaW1pdGluZyBsaXRfYnVmc2l6ZSB0byA2NEs6XG4gICAqICAgLSBmcmVxdWVuY2llcyBjYW4gYmUga2VwdCBpbiAxNiBiaXQgY291bnRlcnNcbiAgICogICAtIGlmIGNvbXByZXNzaW9uIGlzIG5vdCBzdWNjZXNzZnVsIGZvciB0aGUgZmlyc3QgYmxvY2ssIGFsbCBpbnB1dFxuICAgKiAgICAgZGF0YSBpcyBzdGlsbCBpbiB0aGUgd2luZG93IHNvIHdlIGNhbiBzdGlsbCBlbWl0IGEgc3RvcmVkIGJsb2NrIGV2ZW5cbiAgICogICAgIHdoZW4gaW5wdXQgY29tZXMgZnJvbSBzdGFuZGFyZCBpbnB1dC4gIChUaGlzIGNhbiBhbHNvIGJlIGRvbmUgZm9yXG4gICAqICAgICBhbGwgYmxvY2tzIGlmIGxpdF9idWZzaXplIGlzIG5vdCBncmVhdGVyIHRoYW4gMzJLLilcbiAgICogICAtIGlmIGNvbXByZXNzaW9uIGlzIG5vdCBzdWNjZXNzZnVsIGZvciBhIGZpbGUgc21hbGxlciB0aGFuIDY0Sywgd2UgY2FuXG4gICAqICAgICBldmVuIGVtaXQgYSBzdG9yZWQgZmlsZSBpbnN0ZWFkIG9mIGEgc3RvcmVkIGJsb2NrIChzYXZpbmcgNSBieXRlcykuXG4gICAqICAgICBUaGlzIGlzIGFwcGxpY2FibGUgb25seSBmb3IgemlwIChub3QgZ3ppcCBvciB6bGliKS5cbiAgICogICAtIGNyZWF0aW5nIG5ldyBIdWZmbWFuIHRyZWVzIGxlc3MgZnJlcXVlbnRseSBtYXkgbm90IHByb3ZpZGUgZmFzdFxuICAgKiAgICAgYWRhcHRhdGlvbiB0byBjaGFuZ2VzIGluIHRoZSBpbnB1dCBkYXRhIHN0YXRpc3RpY3MuIChUYWtlIGZvclxuICAgKiAgICAgZXhhbXBsZSBhIGJpbmFyeSBmaWxlIHdpdGggcG9vcmx5IGNvbXByZXNzaWJsZSBjb2RlIGZvbGxvd2VkIGJ5XG4gICAqICAgICBhIGhpZ2hseSBjb21wcmVzc2libGUgc3RyaW5nIHRhYmxlLikgU21hbGxlciBidWZmZXIgc2l6ZXMgZ2l2ZVxuICAgKiAgICAgZmFzdCBhZGFwdGF0aW9uIGJ1dCBoYXZlIG9mIGNvdXJzZSB0aGUgb3ZlcmhlYWQgb2YgdHJhbnNtaXR0aW5nXG4gICAqICAgICB0cmVlcyBtb3JlIGZyZXF1ZW50bHkuXG4gICAqICAgLSBJIGNhbid0IGNvdW50IGFib3ZlIDRcbiAgICovXG5cbiAgdGhpcy5sYXN0X2xpdCA9IDA7ICAgICAgLyogcnVubmluZyBpbmRleCBpbiBsX2J1ZiAqL1xuXG4gIHRoaXMuZF9idWYgPSAwO1xuICAvKiBCdWZmZXIgaW5kZXggZm9yIGRpc3RhbmNlcy4gVG8gc2ltcGxpZnkgdGhlIGNvZGUsIGRfYnVmIGFuZCBsX2J1ZiBoYXZlXG4gICAqIHRoZSBzYW1lIG51bWJlciBvZiBlbGVtZW50cy4gVG8gdXNlIGRpZmZlcmVudCBsZW5ndGhzLCBhbiBleHRyYSBmbGFnXG4gICAqIGFycmF5IHdvdWxkIGJlIG5lY2Vzc2FyeS5cbiAgICovXG5cbiAgdGhpcy5vcHRfbGVuID0gMDsgICAgICAgLyogYml0IGxlbmd0aCBvZiBjdXJyZW50IGJsb2NrIHdpdGggb3B0aW1hbCB0cmVlcyAqL1xuICB0aGlzLnN0YXRpY19sZW4gPSAwOyAgICAvKiBiaXQgbGVuZ3RoIG9mIGN1cnJlbnQgYmxvY2sgd2l0aCBzdGF0aWMgdHJlZXMgKi9cbiAgdGhpcy5tYXRjaGVzID0gMDsgICAgICAgLyogbnVtYmVyIG9mIHN0cmluZyBtYXRjaGVzIGluIGN1cnJlbnQgYmxvY2sgKi9cbiAgdGhpcy5pbnNlcnQgPSAwOyAgICAgICAgLyogYnl0ZXMgYXQgZW5kIG9mIHdpbmRvdyBsZWZ0IHRvIGluc2VydCAqL1xuXG5cbiAgdGhpcy5iaV9idWYgPSAwO1xuICAvKiBPdXRwdXQgYnVmZmVyLiBiaXRzIGFyZSBpbnNlcnRlZCBzdGFydGluZyBhdCB0aGUgYm90dG9tIChsZWFzdFxuICAgKiBzaWduaWZpY2FudCBiaXRzKS5cbiAgICovXG4gIHRoaXMuYmlfdmFsaWQgPSAwO1xuICAvKiBOdW1iZXIgb2YgdmFsaWQgYml0cyBpbiBiaV9idWYuICBBbGwgYml0cyBhYm92ZSB0aGUgbGFzdCB2YWxpZCBiaXRcbiAgICogYXJlIGFsd2F5cyB6ZXJvLlxuICAgKi9cblxuICAvLyBVc2VkIGZvciB3aW5kb3cgbWVtb3J5IGluaXQuIFdlIHNhZmVseSBpZ25vcmUgaXQgZm9yIEpTLiBUaGF0IG1ha2VzXG4gIC8vIHNlbnNlIG9ubHkgZm9yIHBvaW50ZXJzIGFuZCBtZW1vcnkgY2hlY2sgdG9vbHMuXG4gIC8vdGhpcy5oaWdoX3dhdGVyID0gMDtcbiAgLyogSGlnaCB3YXRlciBtYXJrIG9mZnNldCBpbiB3aW5kb3cgZm9yIGluaXRpYWxpemVkIGJ5dGVzIC0tIGJ5dGVzIGFib3ZlXG4gICAqIHRoaXMgYXJlIHNldCB0byB6ZXJvIGluIG9yZGVyIHRvIGF2b2lkIG1lbW9yeSBjaGVjayB3YXJuaW5ncyB3aGVuXG4gICAqIGxvbmdlc3QgbWF0Y2ggcm91dGluZXMgYWNjZXNzIGJ5dGVzIHBhc3QgdGhlIGlucHV0LiAgVGhpcyBpcyB0aGVuXG4gICAqIHVwZGF0ZWQgdG8gdGhlIG5ldyBoaWdoIHdhdGVyIG1hcmsuXG4gICAqL1xufVxuXG5cbmZ1bmN0aW9uIGRlZmxhdGVSZXNldEtlZXAoc3RybSkge1xuICB2YXIgcztcblxuICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUpIHtcbiAgICByZXR1cm4gZXJyKHN0cm0sIFpfU1RSRUFNX0VSUk9SKTtcbiAgfVxuXG4gIHN0cm0udG90YWxfaW4gPSBzdHJtLnRvdGFsX291dCA9IDA7XG4gIHN0cm0uZGF0YV90eXBlID0gWl9VTktOT1dOO1xuXG4gIHMgPSBzdHJtLnN0YXRlO1xuICBzLnBlbmRpbmcgPSAwO1xuICBzLnBlbmRpbmdfb3V0ID0gMDtcblxuICBpZiAocy53cmFwIDwgMCkge1xuICAgIHMud3JhcCA9IC1zLndyYXA7XG4gICAgLyogd2FzIG1hZGUgbmVnYXRpdmUgYnkgZGVmbGF0ZSguLi4sIFpfRklOSVNIKTsgKi9cbiAgfVxuICBzLnN0YXR1cyA9IChzLndyYXAgPyBJTklUX1NUQVRFIDogQlVTWV9TVEFURSk7XG4gIHN0cm0uYWRsZXIgPSAocy53cmFwID09PSAyKSA/XG4gICAgMCAgLy8gY3JjMzIoMCwgWl9OVUxMLCAwKVxuICA6XG4gICAgMTsgLy8gYWRsZXIzMigwLCBaX05VTEwsIDApXG4gIHMubGFzdF9mbHVzaCA9IFpfTk9fRkxVU0g7XG4gIHRyZWVzLl90cl9pbml0KHMpO1xuICByZXR1cm4gWl9PSztcbn1cblxuXG5mdW5jdGlvbiBkZWZsYXRlUmVzZXQoc3RybSkge1xuICB2YXIgcmV0ID0gZGVmbGF0ZVJlc2V0S2VlcChzdHJtKTtcbiAgaWYgKHJldCA9PT0gWl9PSykge1xuICAgIGxtX2luaXQoc3RybS5zdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuXG5mdW5jdGlvbiBkZWZsYXRlU2V0SGVhZGVyKHN0cm0sIGhlYWQpIHtcbiAgaWYgKCFzdHJtIHx8ICFzdHJtLnN0YXRlKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUjsgfVxuICBpZiAoc3RybS5zdGF0ZS53cmFwICE9PSAyKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUjsgfVxuICBzdHJtLnN0YXRlLmd6aGVhZCA9IGhlYWQ7XG4gIHJldHVybiBaX09LO1xufVxuXG5cbmZ1bmN0aW9uIGRlZmxhdGVJbml0MihzdHJtLCBsZXZlbCwgbWV0aG9kLCB3aW5kb3dCaXRzLCBtZW1MZXZlbCwgc3RyYXRlZ3kpIHtcbiAgaWYgKCFzdHJtKSB7IC8vID09PSBaX05VTExcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cbiAgdmFyIHdyYXAgPSAxO1xuXG4gIGlmIChsZXZlbCA9PT0gWl9ERUZBVUxUX0NPTVBSRVNTSU9OKSB7XG4gICAgbGV2ZWwgPSA2O1xuICB9XG5cbiAgaWYgKHdpbmRvd0JpdHMgPCAwKSB7IC8qIHN1cHByZXNzIHpsaWIgd3JhcHBlciAqL1xuICAgIHdyYXAgPSAwO1xuICAgIHdpbmRvd0JpdHMgPSAtd2luZG93Qml0cztcbiAgfVxuXG4gIGVsc2UgaWYgKHdpbmRvd0JpdHMgPiAxNSkge1xuICAgIHdyYXAgPSAyOyAgICAgICAgICAgLyogd3JpdGUgZ3ppcCB3cmFwcGVyIGluc3RlYWQgKi9cbiAgICB3aW5kb3dCaXRzIC09IDE2O1xuICB9XG5cblxuICBpZiAobWVtTGV2ZWwgPCAxIHx8IG1lbUxldmVsID4gTUFYX01FTV9MRVZFTCB8fCBtZXRob2QgIT09IFpfREVGTEFURUQgfHxcbiAgICB3aW5kb3dCaXRzIDwgOCB8fCB3aW5kb3dCaXRzID4gMTUgfHwgbGV2ZWwgPCAwIHx8IGxldmVsID4gOSB8fFxuICAgIHN0cmF0ZWd5IDwgMCB8fCBzdHJhdGVneSA+IFpfRklYRUQpIHtcbiAgICByZXR1cm4gZXJyKHN0cm0sIFpfU1RSRUFNX0VSUk9SKTtcbiAgfVxuXG5cbiAgaWYgKHdpbmRvd0JpdHMgPT09IDgpIHtcbiAgICB3aW5kb3dCaXRzID0gOTtcbiAgfVxuICAvKiB1bnRpbCAyNTYtYnl0ZSB3aW5kb3cgYnVnIGZpeGVkICovXG5cbiAgdmFyIHMgPSBuZXcgRGVmbGF0ZVN0YXRlKCk7XG5cbiAgc3RybS5zdGF0ZSA9IHM7XG4gIHMuc3RybSA9IHN0cm07XG5cbiAgcy53cmFwID0gd3JhcDtcbiAgcy5nemhlYWQgPSBudWxsO1xuICBzLndfYml0cyA9IHdpbmRvd0JpdHM7XG4gIHMud19zaXplID0gMSA8PCBzLndfYml0cztcbiAgcy53X21hc2sgPSBzLndfc2l6ZSAtIDE7XG5cbiAgcy5oYXNoX2JpdHMgPSBtZW1MZXZlbCArIDc7XG4gIHMuaGFzaF9zaXplID0gMSA8PCBzLmhhc2hfYml0cztcbiAgcy5oYXNoX21hc2sgPSBzLmhhc2hfc2l6ZSAtIDE7XG4gIHMuaGFzaF9zaGlmdCA9IH5+KChzLmhhc2hfYml0cyArIE1JTl9NQVRDSCAtIDEpIC8gTUlOX01BVENIKTtcblxuICBzLndpbmRvdyA9IG5ldyB1dGlscy5CdWY4KHMud19zaXplICogMik7XG4gIHMuaGVhZCA9IG5ldyB1dGlscy5CdWYxNihzLmhhc2hfc2l6ZSk7XG4gIHMucHJldiA9IG5ldyB1dGlscy5CdWYxNihzLndfc2l6ZSk7XG5cbiAgLy8gRG9uJ3QgbmVlZCBtZW0gaW5pdCBtYWdpYyBmb3IgSlMuXG4gIC8vcy5oaWdoX3dhdGVyID0gMDsgIC8qIG5vdGhpbmcgd3JpdHRlbiB0byBzLT53aW5kb3cgeWV0ICovXG5cbiAgcy5saXRfYnVmc2l6ZSA9IDEgPDwgKG1lbUxldmVsICsgNik7IC8qIDE2SyBlbGVtZW50cyBieSBkZWZhdWx0ICovXG5cbiAgcy5wZW5kaW5nX2J1Zl9zaXplID0gcy5saXRfYnVmc2l6ZSAqIDQ7XG5cbiAgLy9vdmVybGF5ID0gKHVzaGYgKikgWkFMTE9DKHN0cm0sIHMtPmxpdF9idWZzaXplLCBzaXplb2YodXNoKSsyKTtcbiAgLy9zLT5wZW5kaW5nX2J1ZiA9ICh1Y2hmICopIG92ZXJsYXk7XG4gIHMucGVuZGluZ19idWYgPSBuZXcgdXRpbHMuQnVmOChzLnBlbmRpbmdfYnVmX3NpemUpO1xuXG4gIC8vIEl0IGlzIG9mZnNldCBmcm9tIGBzLnBlbmRpbmdfYnVmYCAoc2l6ZSBpcyBgcy5saXRfYnVmc2l6ZSAqIDJgKVxuICAvL3MtPmRfYnVmID0gb3ZlcmxheSArIHMtPmxpdF9idWZzaXplL3NpemVvZih1c2gpO1xuICBzLmRfYnVmID0gMSAqIHMubGl0X2J1ZnNpemU7XG5cbiAgLy9zLT5sX2J1ZiA9IHMtPnBlbmRpbmdfYnVmICsgKDErc2l6ZW9mKHVzaCkpKnMtPmxpdF9idWZzaXplO1xuICBzLmxfYnVmID0gKDEgKyAyKSAqIHMubGl0X2J1ZnNpemU7XG5cbiAgcy5sZXZlbCA9IGxldmVsO1xuICBzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gIHMubWV0aG9kID0gbWV0aG9kO1xuXG4gIHJldHVybiBkZWZsYXRlUmVzZXQoc3RybSk7XG59XG5cbmZ1bmN0aW9uIGRlZmxhdGVJbml0KHN0cm0sIGxldmVsKSB7XG4gIHJldHVybiBkZWZsYXRlSW5pdDIoc3RybSwgbGV2ZWwsIFpfREVGTEFURUQsIE1BWF9XQklUUywgREVGX01FTV9MRVZFTCwgWl9ERUZBVUxUX1NUUkFURUdZKTtcbn1cblxuXG5mdW5jdGlvbiBkZWZsYXRlKHN0cm0sIGZsdXNoKSB7XG4gIHZhciBvbGRfZmx1c2gsIHM7XG4gIHZhciBiZWcsIHZhbDsgLy8gZm9yIGd6aXAgaGVhZGVyIHdyaXRlIG9ubHlcblxuICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUgfHxcbiAgICBmbHVzaCA+IFpfQkxPQ0sgfHwgZmx1c2ggPCAwKSB7XG4gICAgcmV0dXJuIHN0cm0gPyBlcnIoc3RybSwgWl9TVFJFQU1fRVJST1IpIDogWl9TVFJFQU1fRVJST1I7XG4gIH1cblxuICBzID0gc3RybS5zdGF0ZTtcblxuICBpZiAoIXN0cm0ub3V0cHV0IHx8XG4gICAgICAoIXN0cm0uaW5wdXQgJiYgc3RybS5hdmFpbF9pbiAhPT0gMCkgfHxcbiAgICAgIChzLnN0YXR1cyA9PT0gRklOSVNIX1NUQVRFICYmIGZsdXNoICE9PSBaX0ZJTklTSCkpIHtcbiAgICByZXR1cm4gZXJyKHN0cm0sIChzdHJtLmF2YWlsX291dCA9PT0gMCkgPyBaX0JVRl9FUlJPUiA6IFpfU1RSRUFNX0VSUk9SKTtcbiAgfVxuXG4gIHMuc3RybSA9IHN0cm07IC8qIGp1c3QgaW4gY2FzZSAqL1xuICBvbGRfZmx1c2ggPSBzLmxhc3RfZmx1c2g7XG4gIHMubGFzdF9mbHVzaCA9IGZsdXNoO1xuXG4gIC8qIFdyaXRlIHRoZSBoZWFkZXIgKi9cbiAgaWYgKHMuc3RhdHVzID09PSBJTklUX1NUQVRFKSB7XG5cbiAgICBpZiAocy53cmFwID09PSAyKSB7IC8vIEdaSVAgaGVhZGVyXG4gICAgICBzdHJtLmFkbGVyID0gMDsgIC8vY3JjMzIoMEwsIFpfTlVMTCwgMCk7XG4gICAgICBwdXRfYnl0ZShzLCAzMSk7XG4gICAgICBwdXRfYnl0ZShzLCAxMzkpO1xuICAgICAgcHV0X2J5dGUocywgOCk7XG4gICAgICBpZiAoIXMuZ3poZWFkKSB7IC8vIHMtPmd6aGVhZCA9PSBaX05VTExcbiAgICAgICAgcHV0X2J5dGUocywgMCk7XG4gICAgICAgIHB1dF9ieXRlKHMsIDApO1xuICAgICAgICBwdXRfYnl0ZShzLCAwKTtcbiAgICAgICAgcHV0X2J5dGUocywgMCk7XG4gICAgICAgIHB1dF9ieXRlKHMsIDApO1xuICAgICAgICBwdXRfYnl0ZShzLCBzLmxldmVsID09PSA5ID8gMiA6XG4gICAgICAgICAgICAgICAgICAgIChzLnN0cmF0ZWd5ID49IFpfSFVGRk1BTl9PTkxZIHx8IHMubGV2ZWwgPCAyID9cbiAgICAgICAgICAgICAgICAgICAgIDQgOiAwKSk7XG4gICAgICAgIHB1dF9ieXRlKHMsIE9TX0NPREUpO1xuICAgICAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcHV0X2J5dGUocywgKHMuZ3poZWFkLnRleHQgPyAxIDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAocy5nemhlYWQuaGNyYyA/IDIgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgICghcy5nemhlYWQuZXh0cmEgPyAwIDogNCkgK1xuICAgICAgICAgICAgICAgICAgICAoIXMuZ3poZWFkLm5hbWUgPyAwIDogOCkgK1xuICAgICAgICAgICAgICAgICAgICAoIXMuZ3poZWFkLmNvbW1lbnQgPyAwIDogMTYpXG4gICAgICAgICk7XG4gICAgICAgIHB1dF9ieXRlKHMsIHMuZ3poZWFkLnRpbWUgJiAweGZmKTtcbiAgICAgICAgcHV0X2J5dGUocywgKHMuZ3poZWFkLnRpbWUgPj4gOCkgJiAweGZmKTtcbiAgICAgICAgcHV0X2J5dGUocywgKHMuZ3poZWFkLnRpbWUgPj4gMTYpICYgMHhmZik7XG4gICAgICAgIHB1dF9ieXRlKHMsIChzLmd6aGVhZC50aW1lID4+IDI0KSAmIDB4ZmYpO1xuICAgICAgICBwdXRfYnl0ZShzLCBzLmxldmVsID09PSA5ID8gMiA6XG4gICAgICAgICAgICAgICAgICAgIChzLnN0cmF0ZWd5ID49IFpfSFVGRk1BTl9PTkxZIHx8IHMubGV2ZWwgPCAyID9cbiAgICAgICAgICAgICAgICAgICAgIDQgOiAwKSk7XG4gICAgICAgIHB1dF9ieXRlKHMsIHMuZ3poZWFkLm9zICYgMHhmZik7XG4gICAgICAgIGlmIChzLmd6aGVhZC5leHRyYSAmJiBzLmd6aGVhZC5leHRyYS5sZW5ndGgpIHtcbiAgICAgICAgICBwdXRfYnl0ZShzLCBzLmd6aGVhZC5leHRyYS5sZW5ndGggJiAweGZmKTtcbiAgICAgICAgICBwdXRfYnl0ZShzLCAocy5nemhlYWQuZXh0cmEubGVuZ3RoID4+IDgpICYgMHhmZik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMuZ3poZWFkLmhjcmMpIHtcbiAgICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBzLmd6aW5kZXggPSAwO1xuICAgICAgICBzLnN0YXR1cyA9IEVYVFJBX1NUQVRFO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIC8vIERFRkxBVEUgaGVhZGVyXG4gICAge1xuICAgICAgdmFyIGhlYWRlciA9IChaX0RFRkxBVEVEICsgKChzLndfYml0cyAtIDgpIDw8IDQpKSA8PCA4O1xuICAgICAgdmFyIGxldmVsX2ZsYWdzID0gLTE7XG5cbiAgICAgIGlmIChzLnN0cmF0ZWd5ID49IFpfSFVGRk1BTl9PTkxZIHx8IHMubGV2ZWwgPCAyKSB7XG4gICAgICAgIGxldmVsX2ZsYWdzID0gMDtcbiAgICAgIH0gZWxzZSBpZiAocy5sZXZlbCA8IDYpIHtcbiAgICAgICAgbGV2ZWxfZmxhZ3MgPSAxO1xuICAgICAgfSBlbHNlIGlmIChzLmxldmVsID09PSA2KSB7XG4gICAgICAgIGxldmVsX2ZsYWdzID0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsX2ZsYWdzID0gMztcbiAgICAgIH1cbiAgICAgIGhlYWRlciB8PSAobGV2ZWxfZmxhZ3MgPDwgNik7XG4gICAgICBpZiAocy5zdHJzdGFydCAhPT0gMCkgeyBoZWFkZXIgfD0gUFJFU0VUX0RJQ1Q7IH1cbiAgICAgIGhlYWRlciArPSAzMSAtIChoZWFkZXIgJSAzMSk7XG5cbiAgICAgIHMuc3RhdHVzID0gQlVTWV9TVEFURTtcbiAgICAgIHB1dFNob3J0TVNCKHMsIGhlYWRlcik7XG5cbiAgICAgIC8qIFNhdmUgdGhlIGFkbGVyMzIgb2YgdGhlIHByZXNldCBkaWN0aW9uYXJ5OiAqL1xuICAgICAgaWYgKHMuc3Ryc3RhcnQgIT09IDApIHtcbiAgICAgICAgcHV0U2hvcnRNU0Iocywgc3RybS5hZGxlciA+Pj4gMTYpO1xuICAgICAgICBwdXRTaG9ydE1TQihzLCBzdHJtLmFkbGVyICYgMHhmZmZmKTtcbiAgICAgIH1cbiAgICAgIHN0cm0uYWRsZXIgPSAxOyAvLyBhZGxlcjMyKDBMLCBaX05VTEwsIDApO1xuICAgIH1cbiAgfVxuXG4vLyNpZmRlZiBHWklQXG4gIGlmIChzLnN0YXR1cyA9PT0gRVhUUkFfU1RBVEUpIHtcbiAgICBpZiAocy5nemhlYWQuZXh0cmEvKiAhPSBaX05VTEwqLykge1xuICAgICAgYmVnID0gcy5wZW5kaW5nOyAgLyogc3RhcnQgb2YgYnl0ZXMgdG8gdXBkYXRlIGNyYyAqL1xuXG4gICAgICB3aGlsZSAocy5nemluZGV4IDwgKHMuZ3poZWFkLmV4dHJhLmxlbmd0aCAmIDB4ZmZmZikpIHtcbiAgICAgICAgaWYgKHMucGVuZGluZyA9PT0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgICAgaWYgKHMuZ3poZWFkLmhjcmMgJiYgcy5wZW5kaW5nID4gYmVnKSB7XG4gICAgICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgICAgICAgIGJlZyA9IHMucGVuZGluZztcbiAgICAgICAgICBpZiAocy5wZW5kaW5nID09PSBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwdXRfYnl0ZShzLCBzLmd6aGVhZC5leHRyYVtzLmd6aW5kZXhdICYgMHhmZik7XG4gICAgICAgIHMuZ3ppbmRleCsrO1xuICAgICAgfVxuICAgICAgaWYgKHMuZ3poZWFkLmhjcmMgJiYgcy5wZW5kaW5nID4gYmVnKSB7XG4gICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcgLSBiZWcsIGJlZyk7XG4gICAgICB9XG4gICAgICBpZiAocy5nemluZGV4ID09PSBzLmd6aGVhZC5leHRyYS5sZW5ndGgpIHtcbiAgICAgICAgcy5nemluZGV4ID0gMDtcbiAgICAgICAgcy5zdGF0dXMgPSBOQU1FX1NUQVRFO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHMuc3RhdHVzID0gTkFNRV9TVEFURTtcbiAgICB9XG4gIH1cbiAgaWYgKHMuc3RhdHVzID09PSBOQU1FX1NUQVRFKSB7XG4gICAgaWYgKHMuZ3poZWFkLm5hbWUvKiAhPSBaX05VTEwqLykge1xuICAgICAgYmVnID0gcy5wZW5kaW5nOyAgLyogc3RhcnQgb2YgYnl0ZXMgdG8gdXBkYXRlIGNyYyAqL1xuICAgICAgLy9pbnQgdmFsO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGlmIChzLnBlbmRpbmcgPT09IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICAgICAgc3RybS5hZGxlciA9IGNyYzMyKHN0cm0uYWRsZXIsIHMucGVuZGluZ19idWYsIHMucGVuZGluZyAtIGJlZywgYmVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmx1c2hfcGVuZGluZyhzdHJtKTtcbiAgICAgICAgICBiZWcgPSBzLnBlbmRpbmc7XG4gICAgICAgICAgaWYgKHMucGVuZGluZyA9PT0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgICAgICB2YWwgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEpTIHNwZWNpZmljOiBsaXR0bGUgbWFnaWMgdG8gYWRkIHplcm8gdGVybWluYXRvciB0byBlbmQgb2Ygc3RyaW5nXG4gICAgICAgIGlmIChzLmd6aW5kZXggPCBzLmd6aGVhZC5uYW1lLmxlbmd0aCkge1xuICAgICAgICAgIHZhbCA9IHMuZ3poZWFkLm5hbWUuY2hhckNvZGVBdChzLmd6aW5kZXgrKykgJiAweGZmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcHV0X2J5dGUocywgdmFsKTtcbiAgICAgIH0gd2hpbGUgKHZhbCAhPT0gMCk7XG5cbiAgICAgIGlmIChzLmd6aGVhZC5oY3JjICYmIHMucGVuZGluZyA+IGJlZykge1xuICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbCA9PT0gMCkge1xuICAgICAgICBzLmd6aW5kZXggPSAwO1xuICAgICAgICBzLnN0YXR1cyA9IENPTU1FTlRfU1RBVEU7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcy5zdGF0dXMgPSBDT01NRU5UX1NUQVRFO1xuICAgIH1cbiAgfVxuICBpZiAocy5zdGF0dXMgPT09IENPTU1FTlRfU1RBVEUpIHtcbiAgICBpZiAocy5nemhlYWQuY29tbWVudC8qICE9IFpfTlVMTCovKSB7XG4gICAgICBiZWcgPSBzLnBlbmRpbmc7ICAvKiBzdGFydCBvZiBieXRlcyB0byB1cGRhdGUgY3JjICovXG4gICAgICAvL2ludCB2YWw7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKHMucGVuZGluZyA9PT0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgICAgaWYgKHMuZ3poZWFkLmhjcmMgJiYgcy5wZW5kaW5nID4gYmVnKSB7XG4gICAgICAgICAgICBzdHJtLmFkbGVyID0gY3JjMzIoc3RybS5hZGxlciwgcy5wZW5kaW5nX2J1Ziwgcy5wZW5kaW5nIC0gYmVnLCBiZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgICAgICAgIGJlZyA9IHMucGVuZGluZztcbiAgICAgICAgICBpZiAocy5wZW5kaW5nID09PSBzLnBlbmRpbmdfYnVmX3NpemUpIHtcbiAgICAgICAgICAgIHZhbCA9IDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSlMgc3BlY2lmaWM6IGxpdHRsZSBtYWdpYyB0byBhZGQgemVybyB0ZXJtaW5hdG9yIHRvIGVuZCBvZiBzdHJpbmdcbiAgICAgICAgaWYgKHMuZ3ppbmRleCA8IHMuZ3poZWFkLmNvbW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgdmFsID0gcy5nemhlYWQuY29tbWVudC5jaGFyQ29kZUF0KHMuZ3ppbmRleCsrKSAmIDB4ZmY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsID0gMDtcbiAgICAgICAgfVxuICAgICAgICBwdXRfYnl0ZShzLCB2YWwpO1xuICAgICAgfSB3aGlsZSAodmFsICE9PSAwKTtcblxuICAgICAgaWYgKHMuZ3poZWFkLmhjcmMgJiYgcy5wZW5kaW5nID4gYmVnKSB7XG4gICAgICAgIHN0cm0uYWRsZXIgPSBjcmMzMihzdHJtLmFkbGVyLCBzLnBlbmRpbmdfYnVmLCBzLnBlbmRpbmcgLSBiZWcsIGJlZyk7XG4gICAgICB9XG4gICAgICBpZiAodmFsID09PSAwKSB7XG4gICAgICAgIHMuc3RhdHVzID0gSENSQ19TVEFURTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzLnN0YXR1cyA9IEhDUkNfU1RBVEU7XG4gICAgfVxuICB9XG4gIGlmIChzLnN0YXR1cyA9PT0gSENSQ19TVEFURSkge1xuICAgIGlmIChzLmd6aGVhZC5oY3JjKSB7XG4gICAgICBpZiAocy5wZW5kaW5nICsgMiA+IHMucGVuZGluZ19idWZfc2l6ZSkge1xuICAgICAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgICAgfVxuICAgICAgaWYgKHMucGVuZGluZyArIDIgPD0gcy5wZW5kaW5nX2J1Zl9zaXplKSB7XG4gICAgICAgIHB1dF9ieXRlKHMsIHN0cm0uYWRsZXIgJiAweGZmKTtcbiAgICAgICAgcHV0X2J5dGUocywgKHN0cm0uYWRsZXIgPj4gOCkgJiAweGZmKTtcbiAgICAgICAgc3RybS5hZGxlciA9IDA7IC8vY3JjMzIoMEwsIFpfTlVMTCwgMCk7XG4gICAgICAgIHMuc3RhdHVzID0gQlVTWV9TVEFURTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzLnN0YXR1cyA9IEJVU1lfU1RBVEU7XG4gICAgfVxuICB9XG4vLyNlbmRpZlxuXG4gIC8qIEZsdXNoIGFzIG11Y2ggcGVuZGluZyBvdXRwdXQgYXMgcG9zc2libGUgKi9cbiAgaWYgKHMucGVuZGluZyAhPT0gMCkge1xuICAgIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAvKiBTaW5jZSBhdmFpbF9vdXQgaXMgMCwgZGVmbGF0ZSB3aWxsIGJlIGNhbGxlZCBhZ2FpbiB3aXRoXG4gICAgICAgKiBtb3JlIG91dHB1dCBzcGFjZSwgYnV0IHBvc3NpYmx5IHdpdGggYm90aCBwZW5kaW5nIGFuZFxuICAgICAgICogYXZhaWxfaW4gZXF1YWwgdG8gemVyby4gVGhlcmUgd29uJ3QgYmUgYW55dGhpbmcgdG8gZG8sXG4gICAgICAgKiBidXQgdGhpcyBpcyBub3QgYW4gZXJyb3Igc2l0dWF0aW9uIHNvIG1ha2Ugc3VyZSB3ZVxuICAgICAgICogcmV0dXJuIE9LIGluc3RlYWQgb2YgQlVGX0VSUk9SIGF0IG5leHQgY2FsbCBvZiBkZWZsYXRlOlxuICAgICAgICovXG4gICAgICBzLmxhc3RfZmx1c2ggPSAtMTtcbiAgICAgIHJldHVybiBaX09LO1xuICAgIH1cblxuICAgIC8qIE1ha2Ugc3VyZSB0aGVyZSBpcyBzb21ldGhpbmcgdG8gZG8gYW5kIGF2b2lkIGR1cGxpY2F0ZSBjb25zZWN1dGl2ZVxuICAgICAqIGZsdXNoZXMuIEZvciByZXBlYXRlZCBhbmQgdXNlbGVzcyBjYWxscyB3aXRoIFpfRklOSVNILCB3ZSBrZWVwXG4gICAgICogcmV0dXJuaW5nIFpfU1RSRUFNX0VORCBpbnN0ZWFkIG9mIFpfQlVGX0VSUk9SLlxuICAgICAqL1xuICB9IGVsc2UgaWYgKHN0cm0uYXZhaWxfaW4gPT09IDAgJiYgcmFuayhmbHVzaCkgPD0gcmFuayhvbGRfZmx1c2gpICYmXG4gICAgZmx1c2ggIT09IFpfRklOSVNIKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCBaX0JVRl9FUlJPUik7XG4gIH1cblxuICAvKiBVc2VyIG11c3Qgbm90IHByb3ZpZGUgbW9yZSBpbnB1dCBhZnRlciB0aGUgZmlyc3QgRklOSVNIOiAqL1xuICBpZiAocy5zdGF0dXMgPT09IEZJTklTSF9TVEFURSAmJiBzdHJtLmF2YWlsX2luICE9PSAwKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCBaX0JVRl9FUlJPUik7XG4gIH1cblxuICAvKiBTdGFydCBhIG5ldyBibG9jayBvciBjb250aW51ZSB0aGUgY3VycmVudCBvbmUuXG4gICAqL1xuICBpZiAoc3RybS5hdmFpbF9pbiAhPT0gMCB8fCBzLmxvb2thaGVhZCAhPT0gMCB8fFxuICAgIChmbHVzaCAhPT0gWl9OT19GTFVTSCAmJiBzLnN0YXR1cyAhPT0gRklOSVNIX1NUQVRFKSkge1xuICAgIHZhciBic3RhdGUgPSAocy5zdHJhdGVneSA9PT0gWl9IVUZGTUFOX09OTFkpID8gZGVmbGF0ZV9odWZmKHMsIGZsdXNoKSA6XG4gICAgICAocy5zdHJhdGVneSA9PT0gWl9STEUgPyBkZWZsYXRlX3JsZShzLCBmbHVzaCkgOlxuICAgICAgICBjb25maWd1cmF0aW9uX3RhYmxlW3MubGV2ZWxdLmZ1bmMocywgZmx1c2gpKTtcblxuICAgIGlmIChic3RhdGUgPT09IEJTX0ZJTklTSF9TVEFSVEVEIHx8IGJzdGF0ZSA9PT0gQlNfRklOSVNIX0RPTkUpIHtcbiAgICAgIHMuc3RhdHVzID0gRklOSVNIX1NUQVRFO1xuICAgIH1cbiAgICBpZiAoYnN0YXRlID09PSBCU19ORUVEX01PUkUgfHwgYnN0YXRlID09PSBCU19GSU5JU0hfU1RBUlRFRCkge1xuICAgICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHMubGFzdF9mbHVzaCA9IC0xO1xuICAgICAgICAvKiBhdm9pZCBCVUZfRVJST1IgbmV4dCBjYWxsLCBzZWUgYWJvdmUgKi9cbiAgICAgIH1cbiAgICAgIHJldHVybiBaX09LO1xuICAgICAgLyogSWYgZmx1c2ggIT0gWl9OT19GTFVTSCAmJiBhdmFpbF9vdXQgPT0gMCwgdGhlIG5leHQgY2FsbFxuICAgICAgICogb2YgZGVmbGF0ZSBzaG91bGQgdXNlIHRoZSBzYW1lIGZsdXNoIHBhcmFtZXRlciB0byBtYWtlIHN1cmVcbiAgICAgICAqIHRoYXQgdGhlIGZsdXNoIGlzIGNvbXBsZXRlLiBTbyB3ZSBkb24ndCBoYXZlIHRvIG91dHB1dCBhblxuICAgICAgICogZW1wdHkgYmxvY2sgaGVyZSwgdGhpcyB3aWxsIGJlIGRvbmUgYXQgbmV4dCBjYWxsLiBUaGlzIGFsc29cbiAgICAgICAqIGVuc3VyZXMgdGhhdCBmb3IgYSB2ZXJ5IHNtYWxsIG91dHB1dCBidWZmZXIsIHdlIGVtaXQgYXQgbW9zdFxuICAgICAgICogb25lIGVtcHR5IGJsb2NrLlxuICAgICAgICovXG4gICAgfVxuICAgIGlmIChic3RhdGUgPT09IEJTX0JMT0NLX0RPTkUpIHtcbiAgICAgIGlmIChmbHVzaCA9PT0gWl9QQVJUSUFMX0ZMVVNIKSB7XG4gICAgICAgIHRyZWVzLl90cl9hbGlnbihzKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGZsdXNoICE9PSBaX0JMT0NLKSB7IC8qIEZVTExfRkxVU0ggb3IgU1lOQ19GTFVTSCAqL1xuXG4gICAgICAgIHRyZWVzLl90cl9zdG9yZWRfYmxvY2socywgMCwgMCwgZmFsc2UpO1xuICAgICAgICAvKiBGb3IgYSBmdWxsIGZsdXNoLCB0aGlzIGVtcHR5IGJsb2NrIHdpbGwgYmUgcmVjb2duaXplZFxuICAgICAgICAgKiBhcyBhIHNwZWNpYWwgbWFya2VyIGJ5IGluZmxhdGVfc3luYygpLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGZsdXNoID09PSBaX0ZVTExfRkxVU0gpIHtcbiAgICAgICAgICAvKioqIENMRUFSX0hBU0gocyk7ICoqKi8gICAgICAgICAgICAgLyogZm9yZ2V0IGhpc3RvcnkgKi9cbiAgICAgICAgICB6ZXJvKHMuaGVhZCk7IC8vIEZpbGwgd2l0aCBOSUwgKD0gMCk7XG5cbiAgICAgICAgICBpZiAocy5sb29rYWhlYWQgPT09IDApIHtcbiAgICAgICAgICAgIHMuc3Ryc3RhcnQgPSAwO1xuICAgICAgICAgICAgcy5ibG9ja19zdGFydCA9IDA7XG4gICAgICAgICAgICBzLmluc2VydCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmbHVzaF9wZW5kaW5nKHN0cm0pO1xuICAgICAgaWYgKHN0cm0uYXZhaWxfb3V0ID09PSAwKSB7XG4gICAgICAgIHMubGFzdF9mbHVzaCA9IC0xOyAvKiBhdm9pZCBCVUZfRVJST1IgYXQgbmV4dCBjYWxsLCBzZWUgYWJvdmUgKi9cbiAgICAgICAgcmV0dXJuIFpfT0s7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vQXNzZXJ0KHN0cm0tPmF2YWlsX291dCA+IDAsIFwiYnVnMlwiKTtcbiAgLy9pZiAoc3RybS5hdmFpbF9vdXQgPD0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJidWcyXCIpO31cblxuICBpZiAoZmx1c2ggIT09IFpfRklOSVNIKSB7IHJldHVybiBaX09LOyB9XG4gIGlmIChzLndyYXAgPD0gMCkgeyByZXR1cm4gWl9TVFJFQU1fRU5EOyB9XG5cbiAgLyogV3JpdGUgdGhlIHRyYWlsZXIgKi9cbiAgaWYgKHMud3JhcCA9PT0gMikge1xuICAgIHB1dF9ieXRlKHMsIHN0cm0uYWRsZXIgJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS5hZGxlciA+PiA4KSAmIDB4ZmYpO1xuICAgIHB1dF9ieXRlKHMsIChzdHJtLmFkbGVyID4+IDE2KSAmIDB4ZmYpO1xuICAgIHB1dF9ieXRlKHMsIChzdHJtLmFkbGVyID4+IDI0KSAmIDB4ZmYpO1xuICAgIHB1dF9ieXRlKHMsIHN0cm0udG90YWxfaW4gJiAweGZmKTtcbiAgICBwdXRfYnl0ZShzLCAoc3RybS50b3RhbF9pbiA+PiA4KSAmIDB4ZmYpO1xuICAgIHB1dF9ieXRlKHMsIChzdHJtLnRvdGFsX2luID4+IDE2KSAmIDB4ZmYpO1xuICAgIHB1dF9ieXRlKHMsIChzdHJtLnRvdGFsX2luID4+IDI0KSAmIDB4ZmYpO1xuICB9XG4gIGVsc2VcbiAge1xuICAgIHB1dFNob3J0TVNCKHMsIHN0cm0uYWRsZXIgPj4+IDE2KTtcbiAgICBwdXRTaG9ydE1TQihzLCBzdHJtLmFkbGVyICYgMHhmZmZmKTtcbiAgfVxuXG4gIGZsdXNoX3BlbmRpbmcoc3RybSk7XG4gIC8qIElmIGF2YWlsX291dCBpcyB6ZXJvLCB0aGUgYXBwbGljYXRpb24gd2lsbCBjYWxsIGRlZmxhdGUgYWdhaW5cbiAgICogdG8gZmx1c2ggdGhlIHJlc3QuXG4gICAqL1xuICBpZiAocy53cmFwID4gMCkgeyBzLndyYXAgPSAtcy53cmFwOyB9XG4gIC8qIHdyaXRlIHRoZSB0cmFpbGVyIG9ubHkgb25jZSEgKi9cbiAgcmV0dXJuIHMucGVuZGluZyAhPT0gMCA/IFpfT0sgOiBaX1NUUkVBTV9FTkQ7XG59XG5cbmZ1bmN0aW9uIGRlZmxhdGVFbmQoc3RybSkge1xuICB2YXIgc3RhdHVzO1xuXG4gIGlmICghc3RybS8qPT0gWl9OVUxMKi8gfHwgIXN0cm0uc3RhdGUvKj09IFpfTlVMTCovKSB7XG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuICB9XG5cbiAgc3RhdHVzID0gc3RybS5zdGF0ZS5zdGF0dXM7XG4gIGlmIChzdGF0dXMgIT09IElOSVRfU1RBVEUgJiZcbiAgICBzdGF0dXMgIT09IEVYVFJBX1NUQVRFICYmXG4gICAgc3RhdHVzICE9PSBOQU1FX1NUQVRFICYmXG4gICAgc3RhdHVzICE9PSBDT01NRU5UX1NUQVRFICYmXG4gICAgc3RhdHVzICE9PSBIQ1JDX1NUQVRFICYmXG4gICAgc3RhdHVzICE9PSBCVVNZX1NUQVRFICYmXG4gICAgc3RhdHVzICE9PSBGSU5JU0hfU1RBVEVcbiAgKSB7XG4gICAgcmV0dXJuIGVycihzdHJtLCBaX1NUUkVBTV9FUlJPUik7XG4gIH1cblxuICBzdHJtLnN0YXRlID0gbnVsbDtcblxuICByZXR1cm4gc3RhdHVzID09PSBCVVNZX1NUQVRFID8gZXJyKHN0cm0sIFpfREFUQV9FUlJPUikgOiBaX09LO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEluaXRpYWxpemVzIHRoZSBjb21wcmVzc2lvbiBkaWN0aW9uYXJ5IGZyb20gdGhlIGdpdmVuIGJ5dGVcbiAqIHNlcXVlbmNlIHdpdGhvdXQgcHJvZHVjaW5nIGFueSBjb21wcmVzc2VkIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gZGVmbGF0ZVNldERpY3Rpb25hcnkoc3RybSwgZGljdGlvbmFyeSkge1xuICB2YXIgZGljdExlbmd0aCA9IGRpY3Rpb25hcnkubGVuZ3RoO1xuXG4gIHZhciBzO1xuICB2YXIgc3RyLCBuO1xuICB2YXIgd3JhcDtcbiAgdmFyIGF2YWlsO1xuICB2YXIgbmV4dDtcbiAgdmFyIGlucHV0O1xuICB2YXIgdG1wRGljdDtcblxuICBpZiAoIXN0cm0vKj09IFpfTlVMTCovIHx8ICFzdHJtLnN0YXRlLyo9PSBaX05VTEwqLykge1xuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUjtcbiAgfVxuXG4gIHMgPSBzdHJtLnN0YXRlO1xuICB3cmFwID0gcy53cmFwO1xuXG4gIGlmICh3cmFwID09PSAyIHx8ICh3cmFwID09PSAxICYmIHMuc3RhdHVzICE9PSBJTklUX1NUQVRFKSB8fCBzLmxvb2thaGVhZCkge1xuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUjtcbiAgfVxuXG4gIC8qIHdoZW4gdXNpbmcgemxpYiB3cmFwcGVycywgY29tcHV0ZSBBZGxlci0zMiBmb3IgcHJvdmlkZWQgZGljdGlvbmFyeSAqL1xuICBpZiAod3JhcCA9PT0gMSkge1xuICAgIC8qIGFkbGVyMzIoc3RybS0+YWRsZXIsIGRpY3Rpb25hcnksIGRpY3RMZW5ndGgpOyAqL1xuICAgIHN0cm0uYWRsZXIgPSBhZGxlcjMyKHN0cm0uYWRsZXIsIGRpY3Rpb25hcnksIGRpY3RMZW5ndGgsIDApO1xuICB9XG5cbiAgcy53cmFwID0gMDsgICAvKiBhdm9pZCBjb21wdXRpbmcgQWRsZXItMzIgaW4gcmVhZF9idWYgKi9cblxuICAvKiBpZiBkaWN0aW9uYXJ5IHdvdWxkIGZpbGwgd2luZG93LCBqdXN0IHJlcGxhY2UgdGhlIGhpc3RvcnkgKi9cbiAgaWYgKGRpY3RMZW5ndGggPj0gcy53X3NpemUpIHtcbiAgICBpZiAod3JhcCA9PT0gMCkgeyAgICAgICAgICAgIC8qIGFscmVhZHkgZW1wdHkgb3RoZXJ3aXNlICovXG4gICAgICAvKioqIENMRUFSX0hBU0gocyk7ICoqKi9cbiAgICAgIHplcm8ocy5oZWFkKTsgLy8gRmlsbCB3aXRoIE5JTCAoPSAwKTtcbiAgICAgIHMuc3Ryc3RhcnQgPSAwO1xuICAgICAgcy5ibG9ja19zdGFydCA9IDA7XG4gICAgICBzLmluc2VydCA9IDA7XG4gICAgfVxuICAgIC8qIHVzZSB0aGUgdGFpbCAqL1xuICAgIC8vIGRpY3Rpb25hcnkgPSBkaWN0aW9uYXJ5LnNsaWNlKGRpY3RMZW5ndGggLSBzLndfc2l6ZSk7XG4gICAgdG1wRGljdCA9IG5ldyB1dGlscy5CdWY4KHMud19zaXplKTtcbiAgICB1dGlscy5hcnJheVNldCh0bXBEaWN0LCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoIC0gcy53X3NpemUsIHMud19zaXplLCAwKTtcbiAgICBkaWN0aW9uYXJ5ID0gdG1wRGljdDtcbiAgICBkaWN0TGVuZ3RoID0gcy53X3NpemU7XG4gIH1cbiAgLyogaW5zZXJ0IGRpY3Rpb25hcnkgaW50byB3aW5kb3cgYW5kIGhhc2ggKi9cbiAgYXZhaWwgPSBzdHJtLmF2YWlsX2luO1xuICBuZXh0ID0gc3RybS5uZXh0X2luO1xuICBpbnB1dCA9IHN0cm0uaW5wdXQ7XG4gIHN0cm0uYXZhaWxfaW4gPSBkaWN0TGVuZ3RoO1xuICBzdHJtLm5leHRfaW4gPSAwO1xuICBzdHJtLmlucHV0ID0gZGljdGlvbmFyeTtcbiAgZmlsbF93aW5kb3cocyk7XG4gIHdoaWxlIChzLmxvb2thaGVhZCA+PSBNSU5fTUFUQ0gpIHtcbiAgICBzdHIgPSBzLnN0cnN0YXJ0O1xuICAgIG4gPSBzLmxvb2thaGVhZCAtIChNSU5fTUFUQ0ggLSAxKTtcbiAgICBkbyB7XG4gICAgICAvKiBVUERBVEVfSEFTSChzLCBzLT5pbnNfaCwgcy0+d2luZG93W3N0ciArIE1JTl9NQVRDSC0xXSk7ICovXG4gICAgICBzLmluc19oID0gKChzLmluc19oIDw8IHMuaGFzaF9zaGlmdCkgXiBzLndpbmRvd1tzdHIgKyBNSU5fTUFUQ0ggLSAxXSkgJiBzLmhhc2hfbWFzaztcblxuICAgICAgcy5wcmV2W3N0ciAmIHMud19tYXNrXSA9IHMuaGVhZFtzLmluc19oXTtcblxuICAgICAgcy5oZWFkW3MuaW5zX2hdID0gc3RyO1xuICAgICAgc3RyKys7XG4gICAgfSB3aGlsZSAoLS1uKTtcbiAgICBzLnN0cnN0YXJ0ID0gc3RyO1xuICAgIHMubG9va2FoZWFkID0gTUlOX01BVENIIC0gMTtcbiAgICBmaWxsX3dpbmRvdyhzKTtcbiAgfVxuICBzLnN0cnN0YXJ0ICs9IHMubG9va2FoZWFkO1xuICBzLmJsb2NrX3N0YXJ0ID0gcy5zdHJzdGFydDtcbiAgcy5pbnNlcnQgPSBzLmxvb2thaGVhZDtcbiAgcy5sb29rYWhlYWQgPSAwO1xuICBzLm1hdGNoX2xlbmd0aCA9IHMucHJldl9sZW5ndGggPSBNSU5fTUFUQ0ggLSAxO1xuICBzLm1hdGNoX2F2YWlsYWJsZSA9IDA7XG4gIHN0cm0ubmV4dF9pbiA9IG5leHQ7XG4gIHN0cm0uaW5wdXQgPSBpbnB1dDtcbiAgc3RybS5hdmFpbF9pbiA9IGF2YWlsO1xuICBzLndyYXAgPSB3cmFwO1xuICByZXR1cm4gWl9PSztcbn1cblxuXG5leHBvcnRzLmRlZmxhdGVJbml0ID0gZGVmbGF0ZUluaXQ7XG5leHBvcnRzLmRlZmxhdGVJbml0MiA9IGRlZmxhdGVJbml0MjtcbmV4cG9ydHMuZGVmbGF0ZVJlc2V0ID0gZGVmbGF0ZVJlc2V0O1xuZXhwb3J0cy5kZWZsYXRlUmVzZXRLZWVwID0gZGVmbGF0ZVJlc2V0S2VlcDtcbmV4cG9ydHMuZGVmbGF0ZVNldEhlYWRlciA9IGRlZmxhdGVTZXRIZWFkZXI7XG5leHBvcnRzLmRlZmxhdGUgPSBkZWZsYXRlO1xuZXhwb3J0cy5kZWZsYXRlRW5kID0gZGVmbGF0ZUVuZDtcbmV4cG9ydHMuZGVmbGF0ZVNldERpY3Rpb25hcnkgPSBkZWZsYXRlU2V0RGljdGlvbmFyeTtcbmV4cG9ydHMuZGVmbGF0ZUluZm8gPSAncGFrbyBkZWZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KSc7XG5cbi8qIE5vdCBpbXBsZW1lbnRlZFxuZXhwb3J0cy5kZWZsYXRlQm91bmQgPSBkZWZsYXRlQm91bmQ7XG5leHBvcnRzLmRlZmxhdGVDb3B5ID0gZGVmbGF0ZUNvcHk7XG5leHBvcnRzLmRlZmxhdGVQYXJhbXMgPSBkZWZsYXRlUGFyYW1zO1xuZXhwb3J0cy5kZWZsYXRlUGVuZGluZyA9IGRlZmxhdGVQZW5kaW5nO1xuZXhwb3J0cy5kZWZsYXRlUHJpbWUgPSBkZWZsYXRlUHJpbWU7XG5leHBvcnRzLmRlZmxhdGVUdW5lID0gZGVmbGF0ZVR1bmU7XG4qL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbmZ1bmN0aW9uIEdaaGVhZGVyKCkge1xuICAvKiB0cnVlIGlmIGNvbXByZXNzZWQgZGF0YSBiZWxpZXZlZCB0byBiZSB0ZXh0ICovXG4gIHRoaXMudGV4dCAgICAgICA9IDA7XG4gIC8qIG1vZGlmaWNhdGlvbiB0aW1lICovXG4gIHRoaXMudGltZSAgICAgICA9IDA7XG4gIC8qIGV4dHJhIGZsYWdzIChub3QgdXNlZCB3aGVuIHdyaXRpbmcgYSBnemlwIGZpbGUpICovXG4gIHRoaXMueGZsYWdzICAgICA9IDA7XG4gIC8qIG9wZXJhdGluZyBzeXN0ZW0gKi9cbiAgdGhpcy5vcyAgICAgICAgID0gMDtcbiAgLyogcG9pbnRlciB0byBleHRyYSBmaWVsZCBvciBaX05VTEwgaWYgbm9uZSAqL1xuICB0aGlzLmV4dHJhICAgICAgPSBudWxsO1xuICAvKiBleHRyYSBmaWVsZCBsZW5ndGggKHZhbGlkIGlmIGV4dHJhICE9IFpfTlVMTCkgKi9cbiAgdGhpcy5leHRyYV9sZW4gID0gMDsgLy8gQWN0dWFsbHksIHdlIGRvbid0IG5lZWQgaXQgaW4gSlMsXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBsZWF2ZSBmb3IgZmV3IGNvZGUgbW9kaWZpY2F0aW9uc1xuXG4gIC8vXG4gIC8vIFNldHVwIGxpbWl0cyBpcyBub3QgbmVjZXNzYXJ5IGJlY2F1c2UgaW4ganMgd2Ugc2hvdWxkIG5vdCBwcmVhbGxvY2F0ZSBtZW1vcnlcbiAgLy8gZm9yIGluZmxhdGUgdXNlIGNvbnN0YW50IGxpbWl0IGluIDY1NTM2IGJ5dGVzXG4gIC8vXG5cbiAgLyogc3BhY2UgYXQgZXh0cmEgKG9ubHkgd2hlbiByZWFkaW5nIGhlYWRlcikgKi9cbiAgLy8gdGhpcy5leHRyYV9tYXggID0gMDtcbiAgLyogcG9pbnRlciB0byB6ZXJvLXRlcm1pbmF0ZWQgZmlsZSBuYW1lIG9yIFpfTlVMTCAqL1xuICB0aGlzLm5hbWUgICAgICAgPSAnJztcbiAgLyogc3BhY2UgYXQgbmFtZSAob25seSB3aGVuIHJlYWRpbmcgaGVhZGVyKSAqL1xuICAvLyB0aGlzLm5hbWVfbWF4ICAgPSAwO1xuICAvKiBwb2ludGVyIHRvIHplcm8tdGVybWluYXRlZCBjb21tZW50IG9yIFpfTlVMTCAqL1xuICB0aGlzLmNvbW1lbnQgICAgPSAnJztcbiAgLyogc3BhY2UgYXQgY29tbWVudCAob25seSB3aGVuIHJlYWRpbmcgaGVhZGVyKSAqL1xuICAvLyB0aGlzLmNvbW1fbWF4ICAgPSAwO1xuICAvKiB0cnVlIGlmIHRoZXJlIHdhcyBvciB3aWxsIGJlIGEgaGVhZGVyIGNyYyAqL1xuICB0aGlzLmhjcmMgICAgICAgPSAwO1xuICAvKiB0cnVlIHdoZW4gZG9uZSByZWFkaW5nIGd6aXAgaGVhZGVyIChub3QgdXNlZCB3aGVuIHdyaXRpbmcgYSBnemlwIGZpbGUpICovXG4gIHRoaXMuZG9uZSAgICAgICA9IGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdaaGVhZGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbi8vIFNlZSBzdGF0ZSBkZWZzIGZyb20gaW5mbGF0ZS5qc1xudmFyIEJBRCA9IDMwOyAgICAgICAvKiBnb3QgYSBkYXRhIGVycm9yIC0tIHJlbWFpbiBoZXJlIHVudGlsIHJlc2V0ICovXG52YXIgVFlQRSA9IDEyOyAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIHR5cGUgYml0cywgaW5jbHVkaW5nIGxhc3QtZmxhZyBiaXQgKi9cblxuLypcbiAgIERlY29kZSBsaXRlcmFsLCBsZW5ndGgsIGFuZCBkaXN0YW5jZSBjb2RlcyBhbmQgd3JpdGUgb3V0IHRoZSByZXN1bHRpbmdcbiAgIGxpdGVyYWwgYW5kIG1hdGNoIGJ5dGVzIHVudGlsIGVpdGhlciBub3QgZW5vdWdoIGlucHV0IG9yIG91dHB1dCBpc1xuICAgYXZhaWxhYmxlLCBhbiBlbmQtb2YtYmxvY2sgaXMgZW5jb3VudGVyZWQsIG9yIGEgZGF0YSBlcnJvciBpcyBlbmNvdW50ZXJlZC5cbiAgIFdoZW4gbGFyZ2UgZW5vdWdoIGlucHV0IGFuZCBvdXRwdXQgYnVmZmVycyBhcmUgc3VwcGxpZWQgdG8gaW5mbGF0ZSgpLCBmb3JcbiAgIGV4YW1wbGUsIGEgMTZLIGlucHV0IGJ1ZmZlciBhbmQgYSA2NEsgb3V0cHV0IGJ1ZmZlciwgbW9yZSB0aGFuIDk1JSBvZiB0aGVcbiAgIGluZmxhdGUgZXhlY3V0aW9uIHRpbWUgaXMgc3BlbnQgaW4gdGhpcyByb3V0aW5lLlxuXG4gICBFbnRyeSBhc3N1bXB0aW9uczpcblxuICAgICAgICBzdGF0ZS5tb2RlID09PSBMRU5cbiAgICAgICAgc3RybS5hdmFpbF9pbiA+PSA2XG4gICAgICAgIHN0cm0uYXZhaWxfb3V0ID49IDI1OFxuICAgICAgICBzdGFydCA+PSBzdHJtLmF2YWlsX291dFxuICAgICAgICBzdGF0ZS5iaXRzIDwgOFxuXG4gICBPbiByZXR1cm4sIHN0YXRlLm1vZGUgaXMgb25lIG9mOlxuXG4gICAgICAgIExFTiAtLSByYW4gb3V0IG9mIGVub3VnaCBvdXRwdXQgc3BhY2Ugb3IgZW5vdWdoIGF2YWlsYWJsZSBpbnB1dFxuICAgICAgICBUWVBFIC0tIHJlYWNoZWQgZW5kIG9mIGJsb2NrIGNvZGUsIGluZmxhdGUoKSB0byBpbnRlcnByZXQgbmV4dCBibG9ja1xuICAgICAgICBCQUQgLS0gZXJyb3IgaW4gYmxvY2sgZGF0YVxuXG4gICBOb3RlczpcblxuICAgIC0gVGhlIG1heGltdW0gaW5wdXQgYml0cyB1c2VkIGJ5IGEgbGVuZ3RoL2Rpc3RhbmNlIHBhaXIgaXMgMTUgYml0cyBmb3IgdGhlXG4gICAgICBsZW5ndGggY29kZSwgNSBiaXRzIGZvciB0aGUgbGVuZ3RoIGV4dHJhLCAxNSBiaXRzIGZvciB0aGUgZGlzdGFuY2UgY29kZSxcbiAgICAgIGFuZCAxMyBiaXRzIGZvciB0aGUgZGlzdGFuY2UgZXh0cmEuICBUaGlzIHRvdGFscyA0OCBiaXRzLCBvciBzaXggYnl0ZXMuXG4gICAgICBUaGVyZWZvcmUgaWYgc3RybS5hdmFpbF9pbiA+PSA2LCB0aGVuIHRoZXJlIGlzIGVub3VnaCBpbnB1dCB0byBhdm9pZFxuICAgICAgY2hlY2tpbmcgZm9yIGF2YWlsYWJsZSBpbnB1dCB3aGlsZSBkZWNvZGluZy5cblxuICAgIC0gVGhlIG1heGltdW0gYnl0ZXMgdGhhdCBhIHNpbmdsZSBsZW5ndGgvZGlzdGFuY2UgcGFpciBjYW4gb3V0cHV0IGlzIDI1OFxuICAgICAgYnl0ZXMsIHdoaWNoIGlzIHRoZSBtYXhpbXVtIGxlbmd0aCB0aGF0IGNhbiBiZSBjb2RlZC4gIGluZmxhdGVfZmFzdCgpXG4gICAgICByZXF1aXJlcyBzdHJtLmF2YWlsX291dCA+PSAyNTggZm9yIGVhY2ggbG9vcCB0byBhdm9pZCBjaGVja2luZyBmb3JcbiAgICAgIG91dHB1dCBzcGFjZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmZsYXRlX2Zhc3Qoc3RybSwgc3RhcnQpIHtcbiAgdmFyIHN0YXRlO1xuICB2YXIgX2luOyAgICAgICAgICAgICAgICAgICAgLyogbG9jYWwgc3RybS5pbnB1dCAqL1xuICB2YXIgbGFzdDsgICAgICAgICAgICAgICAgICAgLyogaGF2ZSBlbm91Z2ggaW5wdXQgd2hpbGUgaW4gPCBsYXN0ICovXG4gIHZhciBfb3V0OyAgICAgICAgICAgICAgICAgICAvKiBsb2NhbCBzdHJtLm91dHB1dCAqL1xuICB2YXIgYmVnOyAgICAgICAgICAgICAgICAgICAgLyogaW5mbGF0ZSgpJ3MgaW5pdGlhbCBzdHJtLm91dHB1dCAqL1xuICB2YXIgZW5kOyAgICAgICAgICAgICAgICAgICAgLyogd2hpbGUgb3V0IDwgZW5kLCBlbm91Z2ggc3BhY2UgYXZhaWxhYmxlICovXG4vLyNpZmRlZiBJTkZMQVRFX1NUUklDVFxuICB2YXIgZG1heDsgICAgICAgICAgICAgICAgICAgLyogbWF4aW11bSBkaXN0YW5jZSBmcm9tIHpsaWIgaGVhZGVyICovXG4vLyNlbmRpZlxuICB2YXIgd3NpemU7ICAgICAgICAgICAgICAgICAgLyogd2luZG93IHNpemUgb3IgemVybyBpZiBub3QgdXNpbmcgd2luZG93ICovXG4gIHZhciB3aGF2ZTsgICAgICAgICAgICAgICAgICAvKiB2YWxpZCBieXRlcyBpbiB0aGUgd2luZG93ICovXG4gIHZhciB3bmV4dDsgICAgICAgICAgICAgICAgICAvKiB3aW5kb3cgd3JpdGUgaW5kZXggKi9cbiAgLy8gVXNlIGBzX3dpbmRvd2AgaW5zdGVhZCBgd2luZG93YCwgYXZvaWQgY29uZmxpY3Qgd2l0aCBpbnN0cnVtZW50YXRpb24gdG9vbHNcbiAgdmFyIHNfd2luZG93OyAgICAgICAgICAgICAgIC8qIGFsbG9jYXRlZCBzbGlkaW5nIHdpbmRvdywgaWYgd3NpemUgIT0gMCAqL1xuICB2YXIgaG9sZDsgICAgICAgICAgICAgICAgICAgLyogbG9jYWwgc3RybS5ob2xkICovXG4gIHZhciBiaXRzOyAgICAgICAgICAgICAgICAgICAvKiBsb2NhbCBzdHJtLmJpdHMgKi9cbiAgdmFyIGxjb2RlOyAgICAgICAgICAgICAgICAgIC8qIGxvY2FsIHN0cm0ubGVuY29kZSAqL1xuICB2YXIgZGNvZGU7ICAgICAgICAgICAgICAgICAgLyogbG9jYWwgc3RybS5kaXN0Y29kZSAqL1xuICB2YXIgbG1hc2s7ICAgICAgICAgICAgICAgICAgLyogbWFzayBmb3IgZmlyc3QgbGV2ZWwgb2YgbGVuZ3RoIGNvZGVzICovXG4gIHZhciBkbWFzazsgICAgICAgICAgICAgICAgICAvKiBtYXNrIGZvciBmaXJzdCBsZXZlbCBvZiBkaXN0YW5jZSBjb2RlcyAqL1xuICB2YXIgaGVyZTsgICAgICAgICAgICAgICAgICAgLyogcmV0cmlldmVkIHRhYmxlIGVudHJ5ICovXG4gIHZhciBvcDsgICAgICAgICAgICAgICAgICAgICAvKiBjb2RlIGJpdHMsIG9wZXJhdGlvbiwgZXh0cmEgYml0cywgb3IgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qICB3aW5kb3cgcG9zaXRpb24sIHdpbmRvdyBieXRlcyB0byBjb3B5ICovXG4gIHZhciBsZW47ICAgICAgICAgICAgICAgICAgICAvKiBtYXRjaCBsZW5ndGgsIHVudXNlZCBieXRlcyAqL1xuICB2YXIgZGlzdDsgICAgICAgICAgICAgICAgICAgLyogbWF0Y2ggZGlzdGFuY2UgKi9cbiAgdmFyIGZyb207ICAgICAgICAgICAgICAgICAgIC8qIHdoZXJlIHRvIGNvcHkgbWF0Y2ggZnJvbSAqL1xuICB2YXIgZnJvbV9zb3VyY2U7XG5cblxuICB2YXIgaW5wdXQsIG91dHB1dDsgLy8gSlMgc3BlY2lmaWMsIGJlY2F1c2Ugd2UgaGF2ZSBubyBwb2ludGVyc1xuXG4gIC8qIGNvcHkgc3RhdGUgdG8gbG9jYWwgdmFyaWFibGVzICovXG4gIHN0YXRlID0gc3RybS5zdGF0ZTtcbiAgLy9oZXJlID0gc3RhdGUuaGVyZTtcbiAgX2luID0gc3RybS5uZXh0X2luO1xuICBpbnB1dCA9IHN0cm0uaW5wdXQ7XG4gIGxhc3QgPSBfaW4gKyAoc3RybS5hdmFpbF9pbiAtIDUpO1xuICBfb3V0ID0gc3RybS5uZXh0X291dDtcbiAgb3V0cHV0ID0gc3RybS5vdXRwdXQ7XG4gIGJlZyA9IF9vdXQgLSAoc3RhcnQgLSBzdHJtLmF2YWlsX291dCk7XG4gIGVuZCA9IF9vdXQgKyAoc3RybS5hdmFpbF9vdXQgLSAyNTcpO1xuLy8jaWZkZWYgSU5GTEFURV9TVFJJQ1RcbiAgZG1heCA9IHN0YXRlLmRtYXg7XG4vLyNlbmRpZlxuICB3c2l6ZSA9IHN0YXRlLndzaXplO1xuICB3aGF2ZSA9IHN0YXRlLndoYXZlO1xuICB3bmV4dCA9IHN0YXRlLnduZXh0O1xuICBzX3dpbmRvdyA9IHN0YXRlLndpbmRvdztcbiAgaG9sZCA9IHN0YXRlLmhvbGQ7XG4gIGJpdHMgPSBzdGF0ZS5iaXRzO1xuICBsY29kZSA9IHN0YXRlLmxlbmNvZGU7XG4gIGRjb2RlID0gc3RhdGUuZGlzdGNvZGU7XG4gIGxtYXNrID0gKDEgPDwgc3RhdGUubGVuYml0cykgLSAxO1xuICBkbWFzayA9ICgxIDw8IHN0YXRlLmRpc3RiaXRzKSAtIDE7XG5cblxuICAvKiBkZWNvZGUgbGl0ZXJhbHMgYW5kIGxlbmd0aC9kaXN0YW5jZXMgdW50aWwgZW5kLW9mLWJsb2NrIG9yIG5vdCBlbm91Z2hcbiAgICAgaW5wdXQgZGF0YSBvciBvdXRwdXQgc3BhY2UgKi9cblxuICB0b3A6XG4gIGRvIHtcbiAgICBpZiAoYml0cyA8IDE1KSB7XG4gICAgICBob2xkICs9IGlucHV0W19pbisrXSA8PCBiaXRzO1xuICAgICAgYml0cyArPSA4O1xuICAgICAgaG9sZCArPSBpbnB1dFtfaW4rK10gPDwgYml0cztcbiAgICAgIGJpdHMgKz0gODtcbiAgICB9XG5cbiAgICBoZXJlID0gbGNvZGVbaG9sZCAmIGxtYXNrXTtcblxuICAgIGRvbGVuOlxuICAgIGZvciAoOzspIHsgLy8gR290byBlbXVsYXRpb25cbiAgICAgIG9wID0gaGVyZSA+Pj4gMjQvKmhlcmUuYml0cyovO1xuICAgICAgaG9sZCA+Pj49IG9wO1xuICAgICAgYml0cyAtPSBvcDtcbiAgICAgIG9wID0gKGhlcmUgPj4+IDE2KSAmIDB4ZmYvKmhlcmUub3AqLztcbiAgICAgIGlmIChvcCA9PT0gMCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbGl0ZXJhbCAqL1xuICAgICAgICAvL1RyYWNldnYoKHN0ZGVyciwgaGVyZS52YWwgPj0gMHgyMCAmJiBoZXJlLnZhbCA8IDB4N2YgP1xuICAgICAgICAvLyAgICAgICAgXCJpbmZsYXRlOiAgICAgICAgIGxpdGVyYWwgJyVjJ1xcblwiIDpcbiAgICAgICAgLy8gICAgICAgIFwiaW5mbGF0ZTogICAgICAgICBsaXRlcmFsIDB4JTAyeFxcblwiLCBoZXJlLnZhbCkpO1xuICAgICAgICBvdXRwdXRbX291dCsrXSA9IGhlcmUgJiAweGZmZmYvKmhlcmUudmFsKi87XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChvcCAmIDE2KSB7ICAgICAgICAgICAgICAgICAgICAgLyogbGVuZ3RoIGJhc2UgKi9cbiAgICAgICAgbGVuID0gaGVyZSAmIDB4ZmZmZi8qaGVyZS52YWwqLztcbiAgICAgICAgb3AgJj0gMTU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGV4dHJhIGJpdHMgKi9cbiAgICAgICAgaWYgKG9wKSB7XG4gICAgICAgICAgaWYgKGJpdHMgPCBvcCkge1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtfaW4rK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgbGVuICs9IGhvbGQgJiAoKDEgPDwgb3ApIC0gMSk7XG4gICAgICAgICAgaG9sZCA+Pj49IG9wO1xuICAgICAgICAgIGJpdHMgLT0gb3A7XG4gICAgICAgIH1cbiAgICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgICBsZW5ndGggJXVcXG5cIiwgbGVuKSk7XG4gICAgICAgIGlmIChiaXRzIDwgMTUpIHtcbiAgICAgICAgICBob2xkICs9IGlucHV0W19pbisrXSA8PCBiaXRzO1xuICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICBob2xkICs9IGlucHV0W19pbisrXSA8PCBiaXRzO1xuICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgfVxuICAgICAgICBoZXJlID0gZGNvZGVbaG9sZCAmIGRtYXNrXTtcblxuICAgICAgICBkb2Rpc3Q6XG4gICAgICAgIGZvciAoOzspIHsgLy8gZ290byBlbXVsYXRpb25cbiAgICAgICAgICBvcCA9IGhlcmUgPj4+IDI0LypoZXJlLmJpdHMqLztcbiAgICAgICAgICBob2xkID4+Pj0gb3A7XG4gICAgICAgICAgYml0cyAtPSBvcDtcbiAgICAgICAgICBvcCA9IChoZXJlID4+PiAxNikgJiAweGZmLypoZXJlLm9wKi87XG5cbiAgICAgICAgICBpZiAob3AgJiAxNikgeyAgICAgICAgICAgICAgICAgICAgICAvKiBkaXN0YW5jZSBiYXNlICovXG4gICAgICAgICAgICBkaXN0ID0gaGVyZSAmIDB4ZmZmZi8qaGVyZS52YWwqLztcbiAgICAgICAgICAgIG9wICY9IDE1OyAgICAgICAgICAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGV4dHJhIGJpdHMgKi9cbiAgICAgICAgICAgIGlmIChiaXRzIDwgb3ApIHtcbiAgICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtfaW4rK10gPDwgYml0cztcbiAgICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgICAgICBpZiAoYml0cyA8IG9wKSB7XG4gICAgICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtfaW4rK10gPDwgYml0cztcbiAgICAgICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3QgKz0gaG9sZCAmICgoMSA8PCBvcCkgLSAxKTtcbi8vI2lmZGVmIElORkxBVEVfU1RSSUNUXG4gICAgICAgICAgICBpZiAoZGlzdCA+IGRtYXgpIHtcbiAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBkaXN0YW5jZSB0b28gZmFyIGJhY2snO1xuICAgICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgICAgICBicmVhayB0b3A7XG4gICAgICAgICAgICB9XG4vLyNlbmRpZlxuICAgICAgICAgICAgaG9sZCA+Pj49IG9wO1xuICAgICAgICAgICAgYml0cyAtPSBvcDtcbiAgICAgICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgZGlzdGFuY2UgJXVcXG5cIiwgZGlzdCkpO1xuICAgICAgICAgICAgb3AgPSBfb3V0IC0gYmVnOyAgICAgICAgICAgICAgICAvKiBtYXggZGlzdGFuY2UgaW4gb3V0cHV0ICovXG4gICAgICAgICAgICBpZiAoZGlzdCA+IG9wKSB7ICAgICAgICAgICAgICAgIC8qIHNlZSBpZiBjb3B5IGZyb20gd2luZG93ICovXG4gICAgICAgICAgICAgIG9wID0gZGlzdCAtIG9wOyAgICAgICAgICAgICAgIC8qIGRpc3RhbmNlIGJhY2sgaW4gd2luZG93ICovXG4gICAgICAgICAgICAgIGlmIChvcCA+IHdoYXZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnNhbmUpIHtcbiAgICAgICAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgdG9vIGZhciBiYWNrJztcbiAgICAgICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgICAgICAgICBicmVhayB0b3A7XG4gICAgICAgICAgICAgICAgfVxuXG4vLyAoISkgVGhpcyBibG9jayBpcyBkaXNhYmxlZCBpbiB6bGliIGRlZmF1bHRzLFxuLy8gZG9uJ3QgZW5hYmxlIGl0IGZvciBiaW5hcnkgY29tcGF0aWJpbGl0eVxuLy8jaWZkZWYgSU5GTEFURV9BTExPV19JTlZBTElEX0RJU1RBTkNFX1RPT0ZBUl9BUlJSXG4vLyAgICAgICAgICAgICAgICBpZiAobGVuIDw9IG9wIC0gd2hhdmUpIHtcbi8vICAgICAgICAgICAgICAgICAgZG8ge1xuLy8gICAgICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gMDtcbi8vICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1sZW4pO1xuLy8gICAgICAgICAgICAgICAgICBjb250aW51ZSB0b3A7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICBsZW4gLT0gb3AgLSB3aGF2ZTtcbi8vICAgICAgICAgICAgICAgIGRvIHtcbi8vICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSAwO1xuLy8gICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1vcCA+IHdoYXZlKTtcbi8vICAgICAgICAgICAgICAgIGlmIChvcCA9PT0gMCkge1xuLy8gICAgICAgICAgICAgICAgICBmcm9tID0gX291dCAtIGRpc3Q7XG4vLyAgICAgICAgICAgICAgICAgIGRvIHtcbi8vICAgICAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IG91dHB1dFtmcm9tKytdO1xuLy8gICAgICAgICAgICAgICAgICB9IHdoaWxlICgtLWxlbik7XG4vLyAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIHRvcDtcbi8vICAgICAgICAgICAgICAgIH1cbi8vI2VuZGlmXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZnJvbSA9IDA7IC8vIHdpbmRvdyBpbmRleFxuICAgICAgICAgICAgICBmcm9tX3NvdXJjZSA9IHNfd2luZG93O1xuICAgICAgICAgICAgICBpZiAod25leHQgPT09IDApIHsgICAgICAgICAgIC8qIHZlcnkgY29tbW9uIGNhc2UgKi9cbiAgICAgICAgICAgICAgICBmcm9tICs9IHdzaXplIC0gb3A7XG4gICAgICAgICAgICAgICAgaWYgKG9wIDwgbGVuKSB7ICAgICAgICAgLyogc29tZSBmcm9tIHdpbmRvdyAqL1xuICAgICAgICAgICAgICAgICAgbGVuIC09IG9wO1xuICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IHNfd2luZG93W2Zyb20rK107XG4gICAgICAgICAgICAgICAgICB9IHdoaWxlICgtLW9wKTtcbiAgICAgICAgICAgICAgICAgIGZyb20gPSBfb3V0IC0gZGlzdDsgIC8qIHJlc3QgZnJvbSBvdXRwdXQgKi9cbiAgICAgICAgICAgICAgICAgIGZyb21fc291cmNlID0gb3V0cHV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmICh3bmV4dCA8IG9wKSB7ICAgICAgLyogd3JhcCBhcm91bmQgd2luZG93ICovXG4gICAgICAgICAgICAgICAgZnJvbSArPSB3c2l6ZSArIHduZXh0IC0gb3A7XG4gICAgICAgICAgICAgICAgb3AgLT0gd25leHQ7XG4gICAgICAgICAgICAgICAgaWYgKG9wIDwgbGVuKSB7ICAgICAgICAgLyogc29tZSBmcm9tIGVuZCBvZiB3aW5kb3cgKi9cbiAgICAgICAgICAgICAgICAgIGxlbiAtPSBvcDtcbiAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBzX3dpbmRvd1tmcm9tKytdO1xuICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1vcCk7XG4gICAgICAgICAgICAgICAgICBmcm9tID0gMDtcbiAgICAgICAgICAgICAgICAgIGlmICh3bmV4dCA8IGxlbikgeyAgLyogc29tZSBmcm9tIHN0YXJ0IG9mIHdpbmRvdyAqL1xuICAgICAgICAgICAgICAgICAgICBvcCA9IHduZXh0O1xuICAgICAgICAgICAgICAgICAgICBsZW4gLT0gb3A7XG4gICAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IHNfd2luZG93W2Zyb20rK107XG4gICAgICAgICAgICAgICAgICAgIH0gd2hpbGUgKC0tb3ApO1xuICAgICAgICAgICAgICAgICAgICBmcm9tID0gX291dCAtIGRpc3Q7ICAgICAgLyogcmVzdCBmcm9tIG91dHB1dCAqL1xuICAgICAgICAgICAgICAgICAgICBmcm9tX3NvdXJjZSA9IG91dHB1dDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgIC8qIGNvbnRpZ3VvdXMgaW4gd2luZG93ICovXG4gICAgICAgICAgICAgICAgZnJvbSArPSB3bmV4dCAtIG9wO1xuICAgICAgICAgICAgICAgIGlmIChvcCA8IGxlbikgeyAgICAgICAgIC8qIHNvbWUgZnJvbSB3aW5kb3cgKi9cbiAgICAgICAgICAgICAgICAgIGxlbiAtPSBvcDtcbiAgICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBzX3dpbmRvd1tmcm9tKytdO1xuICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1vcCk7XG4gICAgICAgICAgICAgICAgICBmcm9tID0gX291dCAtIGRpc3Q7ICAvKiByZXN0IGZyb20gb3V0cHV0ICovXG4gICAgICAgICAgICAgICAgICBmcm9tX3NvdXJjZSA9IG91dHB1dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2hpbGUgKGxlbiA+IDIpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IGZyb21fc291cmNlW2Zyb20rK107XG4gICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBmcm9tX3NvdXJjZVtmcm9tKytdO1xuICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gZnJvbV9zb3VyY2VbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICBsZW4gLT0gMztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobGVuKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBmcm9tX3NvdXJjZVtmcm9tKytdO1xuICAgICAgICAgICAgICAgIGlmIChsZW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IGZyb21fc291cmNlW2Zyb20rK107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgZnJvbSA9IF9vdXQgLSBkaXN0OyAgICAgICAgICAvKiBjb3B5IGRpcmVjdCBmcm9tIG91dHB1dCAqL1xuICAgICAgICAgICAgICBkbyB7ICAgICAgICAgICAgICAgICAgICAgICAgLyogbWluaW11bSBsZW5ndGggaXMgdGhyZWUgKi9cbiAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IG91dHB1dFtmcm9tKytdO1xuICAgICAgICAgICAgICAgIG91dHB1dFtfb3V0KytdID0gb3V0cHV0W2Zyb20rK107XG4gICAgICAgICAgICAgICAgb3V0cHV0W19vdXQrK10gPSBvdXRwdXRbZnJvbSsrXTtcbiAgICAgICAgICAgICAgICBsZW4gLT0gMztcbiAgICAgICAgICAgICAgfSB3aGlsZSAobGVuID4gMik7XG4gICAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IG91dHB1dFtmcm9tKytdO1xuICAgICAgICAgICAgICAgIGlmIChsZW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICBvdXRwdXRbX291dCsrXSA9IG91dHB1dFtmcm9tKytdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICgob3AgJiA2NCkgPT09IDApIHsgICAgICAgICAgLyogMm5kIGxldmVsIGRpc3RhbmNlIGNvZGUgKi9cbiAgICAgICAgICAgIGhlcmUgPSBkY29kZVsoaGVyZSAmIDB4ZmZmZikvKmhlcmUudmFsKi8gKyAoaG9sZCAmICgoMSA8PCBvcCkgLSAxKSldO1xuICAgICAgICAgICAgY29udGludWUgZG9kaXN0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgY29kZSc7XG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgICAgYnJlYWsgdG9wO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrOyAvLyBuZWVkIHRvIGVtdWxhdGUgZ290byB2aWEgXCJjb250aW51ZVwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKChvcCAmIDY0KSA9PT0gMCkgeyAgICAgICAgICAgICAgLyogMm5kIGxldmVsIGxlbmd0aCBjb2RlICovXG4gICAgICAgIGhlcmUgPSBsY29kZVsoaGVyZSAmIDB4ZmZmZikvKmhlcmUudmFsKi8gKyAoaG9sZCAmICgoMSA8PCBvcCkgLSAxKSldO1xuICAgICAgICBjb250aW51ZSBkb2xlbjtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG9wICYgMzIpIHsgICAgICAgICAgICAgICAgICAgICAvKiBlbmQtb2YtYmxvY2sgKi9cbiAgICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgICBlbmQgb2YgYmxvY2tcXG5cIikpO1xuICAgICAgICBzdGF0ZS5tb2RlID0gVFlQRTtcbiAgICAgICAgYnJlYWsgdG9wO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZSc7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgIGJyZWFrIHRvcDtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7IC8vIG5lZWQgdG8gZW11bGF0ZSBnb3RvIHZpYSBcImNvbnRpbnVlXCJcbiAgICB9XG4gIH0gd2hpbGUgKF9pbiA8IGxhc3QgJiYgX291dCA8IGVuZCk7XG5cbiAgLyogcmV0dXJuIHVudXNlZCBieXRlcyAob24gZW50cnksIGJpdHMgPCA4LCBzbyBpbiB3b24ndCBnbyB0b28gZmFyIGJhY2spICovXG4gIGxlbiA9IGJpdHMgPj4gMztcbiAgX2luIC09IGxlbjtcbiAgYml0cyAtPSBsZW4gPDwgMztcbiAgaG9sZCAmPSAoMSA8PCBiaXRzKSAtIDE7XG5cbiAgLyogdXBkYXRlIHN0YXRlIGFuZCByZXR1cm4gKi9cbiAgc3RybS5uZXh0X2luID0gX2luO1xuICBzdHJtLm5leHRfb3V0ID0gX291dDtcbiAgc3RybS5hdmFpbF9pbiA9IChfaW4gPCBsYXN0ID8gNSArIChsYXN0IC0gX2luKSA6IDUgLSAoX2luIC0gbGFzdCkpO1xuICBzdHJtLmF2YWlsX291dCA9IChfb3V0IDwgZW5kID8gMjU3ICsgKGVuZCAtIF9vdXQpIDogMjU3IC0gKF9vdXQgLSBlbmQpKTtcbiAgc3RhdGUuaG9sZCA9IGhvbGQ7XG4gIHN0YXRlLmJpdHMgPSBiaXRzO1xuICByZXR1cm47XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbnZhciB1dGlscyAgICAgICAgID0gcmVxdWlyZSgnLi4vdXRpbHMvY29tbW9uJyk7XG52YXIgYWRsZXIzMiAgICAgICA9IHJlcXVpcmUoJy4vYWRsZXIzMicpO1xudmFyIGNyYzMyICAgICAgICAgPSByZXF1aXJlKCcuL2NyYzMyJyk7XG52YXIgaW5mbGF0ZV9mYXN0ICA9IHJlcXVpcmUoJy4vaW5mZmFzdCcpO1xudmFyIGluZmxhdGVfdGFibGUgPSByZXF1aXJlKCcuL2luZnRyZWVzJyk7XG5cbnZhciBDT0RFUyA9IDA7XG52YXIgTEVOUyA9IDE7XG52YXIgRElTVFMgPSAyO1xuXG4vKiBQdWJsaWMgY29uc3RhbnRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuXG4vKiBBbGxvd2VkIGZsdXNoIHZhbHVlczsgc2VlIGRlZmxhdGUoKSBhbmQgaW5mbGF0ZSgpIGJlbG93IGZvciBkZXRhaWxzICovXG4vL3ZhciBaX05PX0ZMVVNIICAgICAgPSAwO1xuLy92YXIgWl9QQVJUSUFMX0ZMVVNIID0gMTtcbi8vdmFyIFpfU1lOQ19GTFVTSCAgICA9IDI7XG4vL3ZhciBaX0ZVTExfRkxVU0ggICAgPSAzO1xudmFyIFpfRklOSVNIICAgICAgICA9IDQ7XG52YXIgWl9CTE9DSyAgICAgICAgID0gNTtcbnZhciBaX1RSRUVTICAgICAgICAgPSA2O1xuXG5cbi8qIFJldHVybiBjb2RlcyBmb3IgdGhlIGNvbXByZXNzaW9uL2RlY29tcHJlc3Npb24gZnVuY3Rpb25zLiBOZWdhdGl2ZSB2YWx1ZXNcbiAqIGFyZSBlcnJvcnMsIHBvc2l0aXZlIHZhbHVlcyBhcmUgdXNlZCBmb3Igc3BlY2lhbCBidXQgbm9ybWFsIGV2ZW50cy5cbiAqL1xudmFyIFpfT0sgICAgICAgICAgICA9IDA7XG52YXIgWl9TVFJFQU1fRU5EICAgID0gMTtcbnZhciBaX05FRURfRElDVCAgICAgPSAyO1xuLy92YXIgWl9FUlJOTyAgICAgICAgID0gLTE7XG52YXIgWl9TVFJFQU1fRVJST1IgID0gLTI7XG52YXIgWl9EQVRBX0VSUk9SICAgID0gLTM7XG52YXIgWl9NRU1fRVJST1IgICAgID0gLTQ7XG52YXIgWl9CVUZfRVJST1IgICAgID0gLTU7XG4vL3ZhciBaX1ZFUlNJT05fRVJST1IgPSAtNjtcblxuLyogVGhlIGRlZmxhdGUgY29tcHJlc3Npb24gbWV0aG9kICovXG52YXIgWl9ERUZMQVRFRCAgPSA4O1xuXG5cbi8qIFNUQVRFUyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cbnZhciAgICBIRUFEID0gMTsgICAgICAgLyogaTogd2FpdGluZyBmb3IgbWFnaWMgaGVhZGVyICovXG52YXIgICAgRkxBR1MgPSAyOyAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIG1ldGhvZCBhbmQgZmxhZ3MgKGd6aXApICovXG52YXIgICAgVElNRSA9IDM7ICAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIG1vZGlmaWNhdGlvbiB0aW1lIChnemlwKSAqL1xudmFyICAgIE9TID0gNDsgICAgICAgICAvKiBpOiB3YWl0aW5nIGZvciBleHRyYSBmbGFncyBhbmQgb3BlcmF0aW5nIHN5c3RlbSAoZ3ppcCkgKi9cbnZhciAgICBFWExFTiA9IDU7ICAgICAgLyogaTogd2FpdGluZyBmb3IgZXh0cmEgbGVuZ3RoIChnemlwKSAqL1xudmFyICAgIEVYVFJBID0gNjsgICAgICAvKiBpOiB3YWl0aW5nIGZvciBleHRyYSBieXRlcyAoZ3ppcCkgKi9cbnZhciAgICBOQU1FID0gNzsgICAgICAgLyogaTogd2FpdGluZyBmb3IgZW5kIG9mIGZpbGUgbmFtZSAoZ3ppcCkgKi9cbnZhciAgICBDT01NRU5UID0gODsgICAgLyogaTogd2FpdGluZyBmb3IgZW5kIG9mIGNvbW1lbnQgKGd6aXApICovXG52YXIgICAgSENSQyA9IDk7ICAgICAgIC8qIGk6IHdhaXRpbmcgZm9yIGhlYWRlciBjcmMgKGd6aXApICovXG52YXIgICAgRElDVElEID0gMTA7ICAgIC8qIGk6IHdhaXRpbmcgZm9yIGRpY3Rpb25hcnkgY2hlY2sgdmFsdWUgKi9cbnZhciAgICBESUNUID0gMTE7ICAgICAgLyogd2FpdGluZyBmb3IgaW5mbGF0ZVNldERpY3Rpb25hcnkoKSBjYWxsICovXG52YXIgICAgICAgIFRZUEUgPSAxMjsgICAgICAvKiBpOiB3YWl0aW5nIGZvciB0eXBlIGJpdHMsIGluY2x1ZGluZyBsYXN0LWZsYWcgYml0ICovXG52YXIgICAgICAgIFRZUEVETyA9IDEzOyAgICAvKiBpOiBzYW1lLCBidXQgc2tpcCBjaGVjayB0byBleGl0IGluZmxhdGUgb24gbmV3IGJsb2NrICovXG52YXIgICAgICAgIFNUT1JFRCA9IDE0OyAgICAvKiBpOiB3YWl0aW5nIGZvciBzdG9yZWQgc2l6ZSAobGVuZ3RoIGFuZCBjb21wbGVtZW50KSAqL1xudmFyICAgICAgICBDT1BZXyA9IDE1OyAgICAgLyogaS9vOiBzYW1lIGFzIENPUFkgYmVsb3csIGJ1dCBvbmx5IGZpcnN0IHRpbWUgaW4gKi9cbnZhciAgICAgICAgQ09QWSA9IDE2OyAgICAgIC8qIGkvbzogd2FpdGluZyBmb3IgaW5wdXQgb3Igb3V0cHV0IHRvIGNvcHkgc3RvcmVkIGJsb2NrICovXG52YXIgICAgICAgIFRBQkxFID0gMTc7ICAgICAvKiBpOiB3YWl0aW5nIGZvciBkeW5hbWljIGJsb2NrIHRhYmxlIGxlbmd0aHMgKi9cbnZhciAgICAgICAgTEVOTEVOUyA9IDE4OyAgIC8qIGk6IHdhaXRpbmcgZm9yIGNvZGUgbGVuZ3RoIGNvZGUgbGVuZ3RocyAqL1xudmFyICAgICAgICBDT0RFTEVOUyA9IDE5OyAgLyogaTogd2FpdGluZyBmb3IgbGVuZ3RoL2xpdCBhbmQgZGlzdGFuY2UgY29kZSBsZW5ndGhzICovXG52YXIgICAgICAgICAgICBMRU5fID0gMjA7ICAgICAgLyogaTogc2FtZSBhcyBMRU4gYmVsb3csIGJ1dCBvbmx5IGZpcnN0IHRpbWUgaW4gKi9cbnZhciAgICAgICAgICAgIExFTiA9IDIxOyAgICAgICAvKiBpOiB3YWl0aW5nIGZvciBsZW5ndGgvbGl0L2VvYiBjb2RlICovXG52YXIgICAgICAgICAgICBMRU5FWFQgPSAyMjsgICAgLyogaTogd2FpdGluZyBmb3IgbGVuZ3RoIGV4dHJhIGJpdHMgKi9cbnZhciAgICAgICAgICAgIERJU1QgPSAyMzsgICAgICAvKiBpOiB3YWl0aW5nIGZvciBkaXN0YW5jZSBjb2RlICovXG52YXIgICAgICAgICAgICBESVNURVhUID0gMjQ7ICAgLyogaTogd2FpdGluZyBmb3IgZGlzdGFuY2UgZXh0cmEgYml0cyAqL1xudmFyICAgICAgICAgICAgTUFUQ0ggPSAyNTsgICAgIC8qIG86IHdhaXRpbmcgZm9yIG91dHB1dCBzcGFjZSB0byBjb3B5IHN0cmluZyAqL1xudmFyICAgICAgICAgICAgTElUID0gMjY7ICAgICAgIC8qIG86IHdhaXRpbmcgZm9yIG91dHB1dCBzcGFjZSB0byB3cml0ZSBsaXRlcmFsICovXG52YXIgICAgQ0hFQ0sgPSAyNzsgICAgIC8qIGk6IHdhaXRpbmcgZm9yIDMyLWJpdCBjaGVjayB2YWx1ZSAqL1xudmFyICAgIExFTkdUSCA9IDI4OyAgICAvKiBpOiB3YWl0aW5nIGZvciAzMi1iaXQgbGVuZ3RoIChnemlwKSAqL1xudmFyICAgIERPTkUgPSAyOTsgICAgICAvKiBmaW5pc2hlZCBjaGVjaywgZG9uZSAtLSByZW1haW4gaGVyZSB1bnRpbCByZXNldCAqL1xudmFyICAgIEJBRCA9IDMwOyAgICAgICAvKiBnb3QgYSBkYXRhIGVycm9yIC0tIHJlbWFpbiBoZXJlIHVudGlsIHJlc2V0ICovXG52YXIgICAgTUVNID0gMzE7ICAgICAgIC8qIGdvdCBhbiBpbmZsYXRlKCkgbWVtb3J5IGVycm9yIC0tIHJlbWFpbiBoZXJlIHVudGlsIHJlc2V0ICovXG52YXIgICAgU1lOQyA9IDMyOyAgICAgIC8qIGxvb2tpbmcgZm9yIHN5bmNocm9uaXphdGlvbiBieXRlcyB0byByZXN0YXJ0IGluZmxhdGUoKSAqL1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5cblxudmFyIEVOT1VHSF9MRU5TID0gODUyO1xudmFyIEVOT1VHSF9ESVNUUyA9IDU5Mjtcbi8vdmFyIEVOT1VHSCA9ICAoRU5PVUdIX0xFTlMrRU5PVUdIX0RJU1RTKTtcblxudmFyIE1BWF9XQklUUyA9IDE1O1xuLyogMzJLIExaNzcgd2luZG93ICovXG52YXIgREVGX1dCSVRTID0gTUFYX1dCSVRTO1xuXG5cbmZ1bmN0aW9uIHpzd2FwMzIocSkge1xuICByZXR1cm4gICgoKHEgPj4+IDI0KSAmIDB4ZmYpICtcbiAgICAgICAgICAoKHEgPj4+IDgpICYgMHhmZjAwKSArXG4gICAgICAgICAgKChxICYgMHhmZjAwKSA8PCA4KSArXG4gICAgICAgICAgKChxICYgMHhmZikgPDwgMjQpKTtcbn1cblxuXG5mdW5jdGlvbiBJbmZsYXRlU3RhdGUoKSB7XG4gIHRoaXMubW9kZSA9IDA7ICAgICAgICAgICAgIC8qIGN1cnJlbnQgaW5mbGF0ZSBtb2RlICovXG4gIHRoaXMubGFzdCA9IGZhbHNlOyAgICAgICAgICAvKiB0cnVlIGlmIHByb2Nlc3NpbmcgbGFzdCBibG9jayAqL1xuICB0aGlzLndyYXAgPSAwOyAgICAgICAgICAgICAgLyogYml0IDAgdHJ1ZSBmb3IgemxpYiwgYml0IDEgdHJ1ZSBmb3IgZ3ppcCAqL1xuICB0aGlzLmhhdmVkaWN0ID0gZmFsc2U7ICAgICAgLyogdHJ1ZSBpZiBkaWN0aW9uYXJ5IHByb3ZpZGVkICovXG4gIHRoaXMuZmxhZ3MgPSAwOyAgICAgICAgICAgICAvKiBnemlwIGhlYWRlciBtZXRob2QgYW5kIGZsYWdzICgwIGlmIHpsaWIpICovXG4gIHRoaXMuZG1heCA9IDA7ICAgICAgICAgICAgICAvKiB6bGliIGhlYWRlciBtYXggZGlzdGFuY2UgKElORkxBVEVfU1RSSUNUKSAqL1xuICB0aGlzLmNoZWNrID0gMDsgICAgICAgICAgICAgLyogcHJvdGVjdGVkIGNvcHkgb2YgY2hlY2sgdmFsdWUgKi9cbiAgdGhpcy50b3RhbCA9IDA7ICAgICAgICAgICAgIC8qIHByb3RlY3RlZCBjb3B5IG9mIG91dHB1dCBjb3VudCAqL1xuICAvLyBUT0RPOiBtYXkgYmUge31cbiAgdGhpcy5oZWFkID0gbnVsbDsgICAgICAgICAgIC8qIHdoZXJlIHRvIHNhdmUgZ3ppcCBoZWFkZXIgaW5mb3JtYXRpb24gKi9cblxuICAvKiBzbGlkaW5nIHdpbmRvdyAqL1xuICB0aGlzLndiaXRzID0gMDsgICAgICAgICAgICAgLyogbG9nIGJhc2UgMiBvZiByZXF1ZXN0ZWQgd2luZG93IHNpemUgKi9cbiAgdGhpcy53c2l6ZSA9IDA7ICAgICAgICAgICAgIC8qIHdpbmRvdyBzaXplIG9yIHplcm8gaWYgbm90IHVzaW5nIHdpbmRvdyAqL1xuICB0aGlzLndoYXZlID0gMDsgICAgICAgICAgICAgLyogdmFsaWQgYnl0ZXMgaW4gdGhlIHdpbmRvdyAqL1xuICB0aGlzLnduZXh0ID0gMDsgICAgICAgICAgICAgLyogd2luZG93IHdyaXRlIGluZGV4ICovXG4gIHRoaXMud2luZG93ID0gbnVsbDsgICAgICAgICAvKiBhbGxvY2F0ZWQgc2xpZGluZyB3aW5kb3csIGlmIG5lZWRlZCAqL1xuXG4gIC8qIGJpdCBhY2N1bXVsYXRvciAqL1xuICB0aGlzLmhvbGQgPSAwOyAgICAgICAgICAgICAgLyogaW5wdXQgYml0IGFjY3VtdWxhdG9yICovXG4gIHRoaXMuYml0cyA9IDA7ICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgYml0cyBpbiBcImluXCIgKi9cblxuICAvKiBmb3Igc3RyaW5nIGFuZCBzdG9yZWQgYmxvY2sgY29weWluZyAqL1xuICB0aGlzLmxlbmd0aCA9IDA7ICAgICAgICAgICAgLyogbGl0ZXJhbCBvciBsZW5ndGggb2YgZGF0YSB0byBjb3B5ICovXG4gIHRoaXMub2Zmc2V0ID0gMDsgICAgICAgICAgICAvKiBkaXN0YW5jZSBiYWNrIHRvIGNvcHkgc3RyaW5nIGZyb20gKi9cblxuICAvKiBmb3IgdGFibGUgYW5kIGNvZGUgZGVjb2RpbmcgKi9cbiAgdGhpcy5leHRyYSA9IDA7ICAgICAgICAgICAgIC8qIGV4dHJhIGJpdHMgbmVlZGVkICovXG5cbiAgLyogZml4ZWQgYW5kIGR5bmFtaWMgY29kZSB0YWJsZXMgKi9cbiAgdGhpcy5sZW5jb2RlID0gbnVsbDsgICAgICAgICAgLyogc3RhcnRpbmcgdGFibGUgZm9yIGxlbmd0aC9saXRlcmFsIGNvZGVzICovXG4gIHRoaXMuZGlzdGNvZGUgPSBudWxsOyAgICAgICAgIC8qIHN0YXJ0aW5nIHRhYmxlIGZvciBkaXN0YW5jZSBjb2RlcyAqL1xuICB0aGlzLmxlbmJpdHMgPSAwOyAgICAgICAgICAgLyogaW5kZXggYml0cyBmb3IgbGVuY29kZSAqL1xuICB0aGlzLmRpc3RiaXRzID0gMDsgICAgICAgICAgLyogaW5kZXggYml0cyBmb3IgZGlzdGNvZGUgKi9cblxuICAvKiBkeW5hbWljIHRhYmxlIGJ1aWxkaW5nICovXG4gIHRoaXMubmNvZGUgPSAwOyAgICAgICAgICAgICAvKiBudW1iZXIgb2YgY29kZSBsZW5ndGggY29kZSBsZW5ndGhzICovXG4gIHRoaXMubmxlbiA9IDA7ICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgbGVuZ3RoIGNvZGUgbGVuZ3RocyAqL1xuICB0aGlzLm5kaXN0ID0gMDsgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGRpc3RhbmNlIGNvZGUgbGVuZ3RocyAqL1xuICB0aGlzLmhhdmUgPSAwOyAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIGNvZGUgbGVuZ3RocyBpbiBsZW5zW10gKi9cbiAgdGhpcy5uZXh0ID0gbnVsbDsgICAgICAgICAgICAgIC8qIG5leHQgYXZhaWxhYmxlIHNwYWNlIGluIGNvZGVzW10gKi9cblxuICB0aGlzLmxlbnMgPSBuZXcgdXRpbHMuQnVmMTYoMzIwKTsgLyogdGVtcG9yYXJ5IHN0b3JhZ2UgZm9yIGNvZGUgbGVuZ3RocyAqL1xuICB0aGlzLndvcmsgPSBuZXcgdXRpbHMuQnVmMTYoMjg4KTsgLyogd29yayBhcmVhIGZvciBjb2RlIHRhYmxlIGJ1aWxkaW5nICovXG5cbiAgLypcbiAgIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBwb2ludGVycyBpbiBqcywgd2UgdXNlIGxlbmNvZGUgYW5kIGRpc3Rjb2RlIGRpcmVjdGx5XG4gICBhcyBidWZmZXJzIHNvIHdlIGRvbid0IG5lZWQgY29kZXNcbiAgKi9cbiAgLy90aGlzLmNvZGVzID0gbmV3IHV0aWxzLkJ1ZjMyKEVOT1VHSCk7ICAgICAgIC8qIHNwYWNlIGZvciBjb2RlIHRhYmxlcyAqL1xuICB0aGlzLmxlbmR5biA9IG51bGw7ICAgICAgICAgICAgICAvKiBkeW5hbWljIHRhYmxlIGZvciBsZW5ndGgvbGl0ZXJhbCBjb2RlcyAoSlMgc3BlY2lmaWMpICovXG4gIHRoaXMuZGlzdGR5biA9IG51bGw7ICAgICAgICAgICAgIC8qIGR5bmFtaWMgdGFibGUgZm9yIGRpc3RhbmNlIGNvZGVzIChKUyBzcGVjaWZpYykgKi9cbiAgdGhpcy5zYW5lID0gMDsgICAgICAgICAgICAgICAgICAgLyogaWYgZmFsc2UsIGFsbG93IGludmFsaWQgZGlzdGFuY2UgdG9vIGZhciAqL1xuICB0aGlzLmJhY2sgPSAwOyAgICAgICAgICAgICAgICAgICAvKiBiaXRzIGJhY2sgb2YgbGFzdCB1bnByb2Nlc3NlZCBsZW5ndGgvbGl0ICovXG4gIHRoaXMud2FzID0gMDsgICAgICAgICAgICAgICAgICAgIC8qIGluaXRpYWwgbGVuZ3RoIG9mIG1hdGNoICovXG59XG5cbmZ1bmN0aW9uIGluZmxhdGVSZXNldEtlZXAoc3RybSkge1xuICB2YXIgc3RhdGU7XG5cbiAgaWYgKCFzdHJtIHx8ICFzdHJtLnN0YXRlKSB7IHJldHVybiBaX1NUUkVBTV9FUlJPUjsgfVxuICBzdGF0ZSA9IHN0cm0uc3RhdGU7XG4gIHN0cm0udG90YWxfaW4gPSBzdHJtLnRvdGFsX291dCA9IHN0YXRlLnRvdGFsID0gMDtcbiAgc3RybS5tc2cgPSAnJzsgLypaX05VTEwqL1xuICBpZiAoc3RhdGUud3JhcCkgeyAgICAgICAvKiB0byBzdXBwb3J0IGlsbC1jb25jZWl2ZWQgSmF2YSB0ZXN0IHN1aXRlICovXG4gICAgc3RybS5hZGxlciA9IHN0YXRlLndyYXAgJiAxO1xuICB9XG4gIHN0YXRlLm1vZGUgPSBIRUFEO1xuICBzdGF0ZS5sYXN0ID0gMDtcbiAgc3RhdGUuaGF2ZWRpY3QgPSAwO1xuICBzdGF0ZS5kbWF4ID0gMzI3Njg7XG4gIHN0YXRlLmhlYWQgPSBudWxsLypaX05VTEwqLztcbiAgc3RhdGUuaG9sZCA9IDA7XG4gIHN0YXRlLmJpdHMgPSAwO1xuICAvL3N0YXRlLmxlbmNvZGUgPSBzdGF0ZS5kaXN0Y29kZSA9IHN0YXRlLm5leHQgPSBzdGF0ZS5jb2RlcztcbiAgc3RhdGUubGVuY29kZSA9IHN0YXRlLmxlbmR5biA9IG5ldyB1dGlscy5CdWYzMihFTk9VR0hfTEVOUyk7XG4gIHN0YXRlLmRpc3Rjb2RlID0gc3RhdGUuZGlzdGR5biA9IG5ldyB1dGlscy5CdWYzMihFTk9VR0hfRElTVFMpO1xuXG4gIHN0YXRlLnNhbmUgPSAxO1xuICBzdGF0ZS5iYWNrID0gLTE7XG4gIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogcmVzZXRcXG5cIikpO1xuICByZXR1cm4gWl9PSztcbn1cblxuZnVuY3Rpb24gaW5mbGF0ZVJlc2V0KHN0cm0pIHtcbiAgdmFyIHN0YXRlO1xuXG4gIGlmICghc3RybSB8fCAhc3RybS5zdGF0ZSkgeyByZXR1cm4gWl9TVFJFQU1fRVJST1I7IH1cbiAgc3RhdGUgPSBzdHJtLnN0YXRlO1xuICBzdGF0ZS53c2l6ZSA9IDA7XG4gIHN0YXRlLndoYXZlID0gMDtcbiAgc3RhdGUud25leHQgPSAwO1xuICByZXR1cm4gaW5mbGF0ZVJlc2V0S2VlcChzdHJtKTtcblxufVxuXG5mdW5jdGlvbiBpbmZsYXRlUmVzZXQyKHN0cm0sIHdpbmRvd0JpdHMpIHtcbiAgdmFyIHdyYXA7XG4gIHZhciBzdGF0ZTtcblxuICAvKiBnZXQgdGhlIHN0YXRlICovXG4gIGlmICghc3RybSB8fCAhc3RybS5zdGF0ZSkgeyByZXR1cm4gWl9TVFJFQU1fRVJST1I7IH1cbiAgc3RhdGUgPSBzdHJtLnN0YXRlO1xuXG4gIC8qIGV4dHJhY3Qgd3JhcCByZXF1ZXN0IGZyb20gd2luZG93Qml0cyBwYXJhbWV0ZXIgKi9cbiAgaWYgKHdpbmRvd0JpdHMgPCAwKSB7XG4gICAgd3JhcCA9IDA7XG4gICAgd2luZG93Qml0cyA9IC13aW5kb3dCaXRzO1xuICB9XG4gIGVsc2Uge1xuICAgIHdyYXAgPSAod2luZG93Qml0cyA+PiA0KSArIDE7XG4gICAgaWYgKHdpbmRvd0JpdHMgPCA0OCkge1xuICAgICAgd2luZG93Qml0cyAmPSAxNTtcbiAgICB9XG4gIH1cblxuICAvKiBzZXQgbnVtYmVyIG9mIHdpbmRvdyBiaXRzLCBmcmVlIHdpbmRvdyBpZiBkaWZmZXJlbnQgKi9cbiAgaWYgKHdpbmRvd0JpdHMgJiYgKHdpbmRvd0JpdHMgPCA4IHx8IHdpbmRvd0JpdHMgPiAxNSkpIHtcbiAgICByZXR1cm4gWl9TVFJFQU1fRVJST1I7XG4gIH1cbiAgaWYgKHN0YXRlLndpbmRvdyAhPT0gbnVsbCAmJiBzdGF0ZS53Yml0cyAhPT0gd2luZG93Qml0cykge1xuICAgIHN0YXRlLndpbmRvdyA9IG51bGw7XG4gIH1cblxuICAvKiB1cGRhdGUgc3RhdGUgYW5kIHJlc2V0IHRoZSByZXN0IG9mIGl0ICovXG4gIHN0YXRlLndyYXAgPSB3cmFwO1xuICBzdGF0ZS53Yml0cyA9IHdpbmRvd0JpdHM7XG4gIHJldHVybiBpbmZsYXRlUmVzZXQoc3RybSk7XG59XG5cbmZ1bmN0aW9uIGluZmxhdGVJbml0MihzdHJtLCB3aW5kb3dCaXRzKSB7XG4gIHZhciByZXQ7XG4gIHZhciBzdGF0ZTtcblxuICBpZiAoIXN0cm0pIHsgcmV0dXJuIFpfU1RSRUFNX0VSUk9SOyB9XG4gIC8vc3RybS5tc2cgPSBaX05VTEw7ICAgICAgICAgICAgICAgICAvKiBpbiBjYXNlIHdlIHJldHVybiBhbiBlcnJvciAqL1xuXG4gIHN0YXRlID0gbmV3IEluZmxhdGVTdGF0ZSgpO1xuXG4gIC8vaWYgKHN0YXRlID09PSBaX05VTEwpIHJldHVybiBaX01FTV9FUlJPUjtcbiAgLy9UcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiBhbGxvY2F0ZWRcXG5cIikpO1xuICBzdHJtLnN0YXRlID0gc3RhdGU7XG4gIHN0YXRlLndpbmRvdyA9IG51bGwvKlpfTlVMTCovO1xuICByZXQgPSBpbmZsYXRlUmVzZXQyKHN0cm0sIHdpbmRvd0JpdHMpO1xuICBpZiAocmV0ICE9PSBaX09LKSB7XG4gICAgc3RybS5zdGF0ZSA9IG51bGwvKlpfTlVMTCovO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGluZmxhdGVJbml0KHN0cm0pIHtcbiAgcmV0dXJuIGluZmxhdGVJbml0MihzdHJtLCBERUZfV0JJVFMpO1xufVxuXG5cbi8qXG4gUmV0dXJuIHN0YXRlIHdpdGggbGVuZ3RoIGFuZCBkaXN0YW5jZSBkZWNvZGluZyB0YWJsZXMgYW5kIGluZGV4IHNpemVzIHNldCB0b1xuIGZpeGVkIGNvZGUgZGVjb2RpbmcuICBOb3JtYWxseSB0aGlzIHJldHVybnMgZml4ZWQgdGFibGVzIGZyb20gaW5mZml4ZWQuaC5cbiBJZiBCVUlMREZJWEVEIGlzIGRlZmluZWQsIHRoZW4gaW5zdGVhZCB0aGlzIHJvdXRpbmUgYnVpbGRzIHRoZSB0YWJsZXMgdGhlXG4gZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHJldHVybnMgdGhvc2UgdGFibGVzIHRoZSBmaXJzdCB0aW1lIGFuZFxuIHRoZXJlYWZ0ZXIuICBUaGlzIHJlZHVjZXMgdGhlIHNpemUgb2YgdGhlIGNvZGUgYnkgYWJvdXQgMksgYnl0ZXMsIGluXG4gZXhjaGFuZ2UgZm9yIGEgbGl0dGxlIGV4ZWN1dGlvbiB0aW1lLiAgSG93ZXZlciwgQlVJTERGSVhFRCBzaG91bGQgbm90IGJlXG4gdXNlZCBmb3IgdGhyZWFkZWQgYXBwbGljYXRpb25zLCBzaW5jZSB0aGUgcmV3cml0aW5nIG9mIHRoZSB0YWJsZXMgYW5kIHZpcmdpblxuIG1heSBub3QgYmUgdGhyZWFkLXNhZmUuXG4gKi9cbnZhciB2aXJnaW4gPSB0cnVlO1xuXG52YXIgbGVuZml4LCBkaXN0Zml4OyAvLyBXZSBoYXZlIG5vIHBvaW50ZXJzIGluIEpTLCBzbyBrZWVwIHRhYmxlcyBzZXBhcmF0ZVxuXG5mdW5jdGlvbiBmaXhlZHRhYmxlcyhzdGF0ZSkge1xuICAvKiBidWlsZCBmaXhlZCBodWZmbWFuIHRhYmxlcyBpZiBmaXJzdCBjYWxsIChtYXkgbm90IGJlIHRocmVhZCBzYWZlKSAqL1xuICBpZiAodmlyZ2luKSB7XG4gICAgdmFyIHN5bTtcblxuICAgIGxlbmZpeCA9IG5ldyB1dGlscy5CdWYzMig1MTIpO1xuICAgIGRpc3RmaXggPSBuZXcgdXRpbHMuQnVmMzIoMzIpO1xuXG4gICAgLyogbGl0ZXJhbC9sZW5ndGggdGFibGUgKi9cbiAgICBzeW0gPSAwO1xuICAgIHdoaWxlIChzeW0gPCAxNDQpIHsgc3RhdGUubGVuc1tzeW0rK10gPSA4OyB9XG4gICAgd2hpbGUgKHN5bSA8IDI1NikgeyBzdGF0ZS5sZW5zW3N5bSsrXSA9IDk7IH1cbiAgICB3aGlsZSAoc3ltIDwgMjgwKSB7IHN0YXRlLmxlbnNbc3ltKytdID0gNzsgfVxuICAgIHdoaWxlIChzeW0gPCAyODgpIHsgc3RhdGUubGVuc1tzeW0rK10gPSA4OyB9XG5cbiAgICBpbmZsYXRlX3RhYmxlKExFTlMsICBzdGF0ZS5sZW5zLCAwLCAyODgsIGxlbmZpeCwgICAwLCBzdGF0ZS53b3JrLCB7IGJpdHM6IDkgfSk7XG5cbiAgICAvKiBkaXN0YW5jZSB0YWJsZSAqL1xuICAgIHN5bSA9IDA7XG4gICAgd2hpbGUgKHN5bSA8IDMyKSB7IHN0YXRlLmxlbnNbc3ltKytdID0gNTsgfVxuXG4gICAgaW5mbGF0ZV90YWJsZShESVNUUywgc3RhdGUubGVucywgMCwgMzIsICAgZGlzdGZpeCwgMCwgc3RhdGUud29yaywgeyBiaXRzOiA1IH0pO1xuXG4gICAgLyogZG8gdGhpcyBqdXN0IG9uY2UgKi9cbiAgICB2aXJnaW4gPSBmYWxzZTtcbiAgfVxuXG4gIHN0YXRlLmxlbmNvZGUgPSBsZW5maXg7XG4gIHN0YXRlLmxlbmJpdHMgPSA5O1xuICBzdGF0ZS5kaXN0Y29kZSA9IGRpc3RmaXg7XG4gIHN0YXRlLmRpc3RiaXRzID0gNTtcbn1cblxuXG4vKlxuIFVwZGF0ZSB0aGUgd2luZG93IHdpdGggdGhlIGxhc3Qgd3NpemUgKG5vcm1hbGx5IDMySykgYnl0ZXMgd3JpdHRlbiBiZWZvcmVcbiByZXR1cm5pbmcuICBJZiB3aW5kb3cgZG9lcyBub3QgZXhpc3QgeWV0LCBjcmVhdGUgaXQuICBUaGlzIGlzIG9ubHkgY2FsbGVkXG4gd2hlbiBhIHdpbmRvdyBpcyBhbHJlYWR5IGluIHVzZSwgb3Igd2hlbiBvdXRwdXQgaGFzIGJlZW4gd3JpdHRlbiBkdXJpbmcgdGhpc1xuIGluZmxhdGUgY2FsbCwgYnV0IHRoZSBlbmQgb2YgdGhlIGRlZmxhdGUgc3RyZWFtIGhhcyBub3QgYmVlbiByZWFjaGVkIHlldC5cbiBJdCBpcyBhbHNvIGNhbGxlZCB0byBjcmVhdGUgYSB3aW5kb3cgZm9yIGRpY3Rpb25hcnkgZGF0YSB3aGVuIGEgZGljdGlvbmFyeVxuIGlzIGxvYWRlZC5cblxuIFByb3ZpZGluZyBvdXRwdXQgYnVmZmVycyBsYXJnZXIgdGhhbiAzMksgdG8gaW5mbGF0ZSgpIHNob3VsZCBwcm92aWRlIGEgc3BlZWRcbiBhZHZhbnRhZ2UsIHNpbmNlIG9ubHkgdGhlIGxhc3QgMzJLIG9mIG91dHB1dCBpcyBjb3BpZWQgdG8gdGhlIHNsaWRpbmcgd2luZG93XG4gdXBvbiByZXR1cm4gZnJvbSBpbmZsYXRlKCksIGFuZCBzaW5jZSBhbGwgZGlzdGFuY2VzIGFmdGVyIHRoZSBmaXJzdCAzMksgb2ZcbiBvdXRwdXQgd2lsbCBmYWxsIGluIHRoZSBvdXRwdXQgZGF0YSwgbWFraW5nIG1hdGNoIGNvcGllcyBzaW1wbGVyIGFuZCBmYXN0ZXIuXG4gVGhlIGFkdmFudGFnZSBtYXkgYmUgZGVwZW5kZW50IG9uIHRoZSBzaXplIG9mIHRoZSBwcm9jZXNzb3IncyBkYXRhIGNhY2hlcy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRld2luZG93KHN0cm0sIHNyYywgZW5kLCBjb3B5KSB7XG4gIHZhciBkaXN0O1xuICB2YXIgc3RhdGUgPSBzdHJtLnN0YXRlO1xuXG4gIC8qIGlmIGl0IGhhc24ndCBiZWVuIGRvbmUgYWxyZWFkeSwgYWxsb2NhdGUgc3BhY2UgZm9yIHRoZSB3aW5kb3cgKi9cbiAgaWYgKHN0YXRlLndpbmRvdyA9PT0gbnVsbCkge1xuICAgIHN0YXRlLndzaXplID0gMSA8PCBzdGF0ZS53Yml0cztcbiAgICBzdGF0ZS53bmV4dCA9IDA7XG4gICAgc3RhdGUud2hhdmUgPSAwO1xuXG4gICAgc3RhdGUud2luZG93ID0gbmV3IHV0aWxzLkJ1Zjgoc3RhdGUud3NpemUpO1xuICB9XG5cbiAgLyogY29weSBzdGF0ZS0+d3NpemUgb3IgbGVzcyBvdXRwdXQgYnl0ZXMgaW50byB0aGUgY2lyY3VsYXIgd2luZG93ICovXG4gIGlmIChjb3B5ID49IHN0YXRlLndzaXplKSB7XG4gICAgdXRpbHMuYXJyYXlTZXQoc3RhdGUud2luZG93LCBzcmMsIGVuZCAtIHN0YXRlLndzaXplLCBzdGF0ZS53c2l6ZSwgMCk7XG4gICAgc3RhdGUud25leHQgPSAwO1xuICAgIHN0YXRlLndoYXZlID0gc3RhdGUud3NpemU7XG4gIH1cbiAgZWxzZSB7XG4gICAgZGlzdCA9IHN0YXRlLndzaXplIC0gc3RhdGUud25leHQ7XG4gICAgaWYgKGRpc3QgPiBjb3B5KSB7XG4gICAgICBkaXN0ID0gY29weTtcbiAgICB9XG4gICAgLy96bWVtY3B5KHN0YXRlLT53aW5kb3cgKyBzdGF0ZS0+d25leHQsIGVuZCAtIGNvcHksIGRpc3QpO1xuICAgIHV0aWxzLmFycmF5U2V0KHN0YXRlLndpbmRvdywgc3JjLCBlbmQgLSBjb3B5LCBkaXN0LCBzdGF0ZS53bmV4dCk7XG4gICAgY29weSAtPSBkaXN0O1xuICAgIGlmIChjb3B5KSB7XG4gICAgICAvL3ptZW1jcHkoc3RhdGUtPndpbmRvdywgZW5kIC0gY29weSwgY29weSk7XG4gICAgICB1dGlscy5hcnJheVNldChzdGF0ZS53aW5kb3csIHNyYywgZW5kIC0gY29weSwgY29weSwgMCk7XG4gICAgICBzdGF0ZS53bmV4dCA9IGNvcHk7XG4gICAgICBzdGF0ZS53aGF2ZSA9IHN0YXRlLndzaXplO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHN0YXRlLnduZXh0ICs9IGRpc3Q7XG4gICAgICBpZiAoc3RhdGUud25leHQgPT09IHN0YXRlLndzaXplKSB7IHN0YXRlLnduZXh0ID0gMDsgfVxuICAgICAgaWYgKHN0YXRlLndoYXZlIDwgc3RhdGUud3NpemUpIHsgc3RhdGUud2hhdmUgKz0gZGlzdDsgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gaW5mbGF0ZShzdHJtLCBmbHVzaCkge1xuICB2YXIgc3RhdGU7XG4gIHZhciBpbnB1dCwgb3V0cHV0OyAgICAgICAgICAvLyBpbnB1dC9vdXRwdXQgYnVmZmVyc1xuICB2YXIgbmV4dDsgICAgICAgICAgICAgICAgICAgLyogbmV4dCBpbnB1dCBJTkRFWCAqL1xuICB2YXIgcHV0OyAgICAgICAgICAgICAgICAgICAgLyogbmV4dCBvdXRwdXQgSU5ERVggKi9cbiAgdmFyIGhhdmUsIGxlZnQ7ICAgICAgICAgICAgIC8qIGF2YWlsYWJsZSBpbnB1dCBhbmQgb3V0cHV0ICovXG4gIHZhciBob2xkOyAgICAgICAgICAgICAgICAgICAvKiBiaXQgYnVmZmVyICovXG4gIHZhciBiaXRzOyAgICAgICAgICAgICAgICAgICAvKiBiaXRzIGluIGJpdCBidWZmZXIgKi9cbiAgdmFyIF9pbiwgX291dDsgICAgICAgICAgICAgIC8qIHNhdmUgc3RhcnRpbmcgYXZhaWxhYmxlIGlucHV0IGFuZCBvdXRwdXQgKi9cbiAgdmFyIGNvcHk7ICAgICAgICAgICAgICAgICAgIC8qIG51bWJlciBvZiBzdG9yZWQgb3IgbWF0Y2ggYnl0ZXMgdG8gY29weSAqL1xuICB2YXIgZnJvbTsgICAgICAgICAgICAgICAgICAgLyogd2hlcmUgdG8gY29weSBtYXRjaCBieXRlcyBmcm9tICovXG4gIHZhciBmcm9tX3NvdXJjZTtcbiAgdmFyIGhlcmUgPSAwOyAgICAgICAgICAgICAgIC8qIGN1cnJlbnQgZGVjb2RpbmcgdGFibGUgZW50cnkgKi9cbiAgdmFyIGhlcmVfYml0cywgaGVyZV9vcCwgaGVyZV92YWw7IC8vIHBha2VkIFwiaGVyZVwiIGRlbm9ybWFsaXplZCAoSlMgc3BlY2lmaWMpXG4gIC8vdmFyIGxhc3Q7ICAgICAgICAgICAgICAgICAgIC8qIHBhcmVudCB0YWJsZSBlbnRyeSAqL1xuICB2YXIgbGFzdF9iaXRzLCBsYXN0X29wLCBsYXN0X3ZhbDsgLy8gcGFrZWQgXCJsYXN0XCIgZGVub3JtYWxpemVkIChKUyBzcGVjaWZpYylcbiAgdmFyIGxlbjsgICAgICAgICAgICAgICAgICAgIC8qIGxlbmd0aCB0byBjb3B5IGZvciByZXBlYXRzLCBiaXRzIHRvIGRyb3AgKi9cbiAgdmFyIHJldDsgICAgICAgICAgICAgICAgICAgIC8qIHJldHVybiBjb2RlICovXG4gIHZhciBoYnVmID0gbmV3IHV0aWxzLkJ1ZjgoNCk7ICAgIC8qIGJ1ZmZlciBmb3IgZ3ppcCBoZWFkZXIgY3JjIGNhbGN1bGF0aW9uICovXG4gIHZhciBvcHRzO1xuXG4gIHZhciBuOyAvLyB0ZW1wb3JhcnkgdmFyIGZvciBORUVEX0JJVFNcblxuICB2YXIgb3JkZXIgPSAvKiBwZXJtdXRhdGlvbiBvZiBjb2RlIGxlbmd0aHMgKi9cbiAgICBbIDE2LCAxNywgMTgsIDAsIDgsIDcsIDksIDYsIDEwLCA1LCAxMSwgNCwgMTIsIDMsIDEzLCAyLCAxNCwgMSwgMTUgXTtcblxuXG4gIGlmICghc3RybSB8fCAhc3RybS5zdGF0ZSB8fCAhc3RybS5vdXRwdXQgfHxcbiAgICAgICghc3RybS5pbnB1dCAmJiBzdHJtLmF2YWlsX2luICE9PSAwKSkge1xuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUjtcbiAgfVxuXG4gIHN0YXRlID0gc3RybS5zdGF0ZTtcbiAgaWYgKHN0YXRlLm1vZGUgPT09IFRZUEUpIHsgc3RhdGUubW9kZSA9IFRZUEVETzsgfSAgICAvKiBza2lwIGNoZWNrICovXG5cblxuICAvLy0tLSBMT0FEKCkgLS0tXG4gIHB1dCA9IHN0cm0ubmV4dF9vdXQ7XG4gIG91dHB1dCA9IHN0cm0ub3V0cHV0O1xuICBsZWZ0ID0gc3RybS5hdmFpbF9vdXQ7XG4gIG5leHQgPSBzdHJtLm5leHRfaW47XG4gIGlucHV0ID0gc3RybS5pbnB1dDtcbiAgaGF2ZSA9IHN0cm0uYXZhaWxfaW47XG4gIGhvbGQgPSBzdGF0ZS5ob2xkO1xuICBiaXRzID0gc3RhdGUuYml0cztcbiAgLy8tLS1cblxuICBfaW4gPSBoYXZlO1xuICBfb3V0ID0gbGVmdDtcbiAgcmV0ID0gWl9PSztcblxuICBpbmZfbGVhdmU6IC8vIGdvdG8gZW11bGF0aW9uXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKHN0YXRlLm1vZGUpIHtcbiAgICAgIGNhc2UgSEVBRDpcbiAgICAgICAgaWYgKHN0YXRlLndyYXAgPT09IDApIHtcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gVFlQRURPO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vPT09IE5FRURCSVRTKDE2KTtcbiAgICAgICAgd2hpbGUgKGJpdHMgPCAxNikge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBpZiAoKHN0YXRlLndyYXAgJiAyKSAmJiBob2xkID09PSAweDhiMWYpIHsgIC8qIGd6aXAgaGVhZGVyICovXG4gICAgICAgICAgc3RhdGUuY2hlY2sgPSAwLypjcmMzMigwTCwgWl9OVUxMLCAwKSovO1xuICAgICAgICAgIC8vPT09IENSQzIoc3RhdGUuY2hlY2ssIGhvbGQpO1xuICAgICAgICAgIGhidWZbMF0gPSBob2xkICYgMHhmZjtcbiAgICAgICAgICBoYnVmWzFdID0gKGhvbGQgPj4+IDgpICYgMHhmZjtcbiAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyKHN0YXRlLmNoZWNrLCBoYnVmLCAyLCAwKTtcbiAgICAgICAgICAvLz09PS8vXG5cbiAgICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICAgIGhvbGQgPSAwO1xuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICBzdGF0ZS5tb2RlID0gRkxBR1M7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuZmxhZ3MgPSAwOyAgICAgICAgICAgLyogZXhwZWN0IHpsaWIgaGVhZGVyICovXG4gICAgICAgIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgc3RhdGUuaGVhZC5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoc3RhdGUud3JhcCAmIDEpIHx8ICAgLyogY2hlY2sgaWYgemxpYiBoZWFkZXIgYWxsb3dlZCAqL1xuICAgICAgICAgICgoKGhvbGQgJiAweGZmKS8qQklUUyg4KSovIDw8IDgpICsgKGhvbGQgPj4gOCkpICUgMzEpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbmNvcnJlY3QgaGVhZGVyIGNoZWNrJztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoaG9sZCAmIDB4MGYpLypCSVRTKDQpKi8gIT09IFpfREVGTEFURUQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICd1bmtub3duIGNvbXByZXNzaW9uIG1ldGhvZCc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLy0tLSBEUk9QQklUUyg0KSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gNDtcbiAgICAgICAgYml0cyAtPSA0O1xuICAgICAgICAvLy0tLS8vXG4gICAgICAgIGxlbiA9IChob2xkICYgMHgwZikvKkJJVFMoNCkqLyArIDg7XG4gICAgICAgIGlmIChzdGF0ZS53Yml0cyA9PT0gMCkge1xuICAgICAgICAgIHN0YXRlLndiaXRzID0gbGVuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxlbiA+IHN0YXRlLndiaXRzKSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCB3aW5kb3cgc2l6ZSc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5kbWF4ID0gMSA8PCBsZW47XG4gICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICB6bGliIGhlYWRlciBva1xcblwiKSk7XG4gICAgICAgIHN0cm0uYWRsZXIgPSBzdGF0ZS5jaGVjayA9IDEvKmFkbGVyMzIoMEwsIFpfTlVMTCwgMCkqLztcbiAgICAgICAgc3RhdGUubW9kZSA9IGhvbGQgJiAweDIwMCA/IERJQ1RJRCA6IFRZUEU7XG4gICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgIGhvbGQgPSAwO1xuICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgLy89PT0vL1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRkxBR1M6XG4gICAgICAgIC8vPT09IE5FRURCSVRTKDE2KTsgKi9cbiAgICAgICAgd2hpbGUgKGJpdHMgPCAxNikge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdGF0ZS5mbGFncyA9IGhvbGQ7XG4gICAgICAgIGlmICgoc3RhdGUuZmxhZ3MgJiAweGZmKSAhPT0gWl9ERUZMQVRFRCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ3Vua25vd24gY29tcHJlc3Npb24gbWV0aG9kJztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4ZTAwMCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ3Vua25vd24gaGVhZGVyIGZsYWdzIHNldCc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuaGVhZCkge1xuICAgICAgICAgIHN0YXRlLmhlYWQudGV4dCA9ICgoaG9sZCA+PiA4KSAmIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xuICAgICAgICAgIC8vPT09IENSQzIoc3RhdGUuY2hlY2ssIGhvbGQpO1xuICAgICAgICAgIGhidWZbMF0gPSBob2xkICYgMHhmZjtcbiAgICAgICAgICBoYnVmWzFdID0gKGhvbGQgPj4+IDgpICYgMHhmZjtcbiAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyKHN0YXRlLmNoZWNrLCBoYnVmLCAyLCAwKTtcbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgIH1cbiAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgaG9sZCA9IDA7XG4gICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAvLz09PS8vXG4gICAgICAgIHN0YXRlLm1vZGUgPSBUSU1FO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIFRJTUU6XG4gICAgICAgIC8vPT09IE5FRURCSVRTKDMyKTsgKi9cbiAgICAgICAgd2hpbGUgKGJpdHMgPCAzMikge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBpZiAoc3RhdGUuaGVhZCkge1xuICAgICAgICAgIHN0YXRlLmhlYWQudGltZSA9IGhvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwMjAwKSB7XG4gICAgICAgICAgLy89PT0gQ1JDNChzdGF0ZS5jaGVjaywgaG9sZClcbiAgICAgICAgICBoYnVmWzBdID0gaG9sZCAmIDB4ZmY7XG4gICAgICAgICAgaGJ1ZlsxXSA9IChob2xkID4+PiA4KSAmIDB4ZmY7XG4gICAgICAgICAgaGJ1ZlsyXSA9IChob2xkID4+PiAxNikgJiAweGZmO1xuICAgICAgICAgIGhidWZbM10gPSAoaG9sZCA+Pj4gMjQpICYgMHhmZjtcbiAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyKHN0YXRlLmNoZWNrLCBoYnVmLCA0LCAwKTtcbiAgICAgICAgICAvLz09PVxuICAgICAgICB9XG4gICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgIGhvbGQgPSAwO1xuICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdGF0ZS5tb2RlID0gT1M7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgT1M6XG4gICAgICAgIC8vPT09IE5FRURCSVRTKDE2KTsgKi9cbiAgICAgICAgd2hpbGUgKGJpdHMgPCAxNikge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBpZiAoc3RhdGUuaGVhZCkge1xuICAgICAgICAgIHN0YXRlLmhlYWQueGZsYWdzID0gKGhvbGQgJiAweGZmKTtcbiAgICAgICAgICBzdGF0ZS5oZWFkLm9zID0gKGhvbGQgPj4gOCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwMjAwKSB7XG4gICAgICAgICAgLy89PT0gQ1JDMihzdGF0ZS5jaGVjaywgaG9sZCk7XG4gICAgICAgICAgaGJ1ZlswXSA9IGhvbGQgJiAweGZmO1xuICAgICAgICAgIGhidWZbMV0gPSAoaG9sZCA+Pj4gOCkgJiAweGZmO1xuICAgICAgICAgIHN0YXRlLmNoZWNrID0gY3JjMzIoc3RhdGUuY2hlY2ssIGhidWYsIDIsIDApO1xuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgfVxuICAgICAgICAvLz09PSBJTklUQklUUygpO1xuICAgICAgICBob2xkID0gMDtcbiAgICAgICAgYml0cyA9IDA7XG4gICAgICAgIC8vPT09Ly9cbiAgICAgICAgc3RhdGUubW9kZSA9IEVYTEVOO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIEVYTEVOOlxuICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDA0MDApIHtcbiAgICAgICAgICAvLz09PSBORUVEQklUUygxNik7ICovXG4gICAgICAgICAgd2hpbGUgKGJpdHMgPCAxNikge1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIHN0YXRlLmxlbmd0aCA9IGhvbGQ7XG4gICAgICAgICAgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICAgIHN0YXRlLmhlYWQuZXh0cmFfbGVuID0gaG9sZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwMjAwKSB7XG4gICAgICAgICAgICAvLz09PSBDUkMyKHN0YXRlLmNoZWNrLCBob2xkKTtcbiAgICAgICAgICAgIGhidWZbMF0gPSBob2xkICYgMHhmZjtcbiAgICAgICAgICAgIGhidWZbMV0gPSAoaG9sZCA+Pj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgc3RhdGUuY2hlY2sgPSBjcmMzMihzdGF0ZS5jaGVjaywgaGJ1ZiwgMiwgMCk7XG4gICAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgICAgaG9sZCA9IDA7XG4gICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICBzdGF0ZS5oZWFkLmV4dHJhID0gbnVsbC8qWl9OVUxMKi87XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUubW9kZSA9IEVYVFJBO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIEVYVFJBOlxuICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDA0MDApIHtcbiAgICAgICAgICBjb3B5ID0gc3RhdGUubGVuZ3RoO1xuICAgICAgICAgIGlmIChjb3B5ID4gaGF2ZSkgeyBjb3B5ID0gaGF2ZTsgfVxuICAgICAgICAgIGlmIChjb3B5KSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuaGVhZCkge1xuICAgICAgICAgICAgICBsZW4gPSBzdGF0ZS5oZWFkLmV4dHJhX2xlbiAtIHN0YXRlLmxlbmd0aDtcbiAgICAgICAgICAgICAgaWYgKCFzdGF0ZS5oZWFkLmV4dHJhKSB7XG4gICAgICAgICAgICAgICAgLy8gVXNlIHVudHlwZWQgYXJyYXkgZm9yIG1vcmUgY29udmVuaWVudCBwcm9jZXNzaW5nIGxhdGVyXG4gICAgICAgICAgICAgICAgc3RhdGUuaGVhZC5leHRyYSA9IG5ldyBBcnJheShzdGF0ZS5oZWFkLmV4dHJhX2xlbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdXRpbHMuYXJyYXlTZXQoXG4gICAgICAgICAgICAgICAgc3RhdGUuaGVhZC5leHRyYSxcbiAgICAgICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgICAgICBuZXh0LFxuICAgICAgICAgICAgICAgIC8vIGV4dHJhIGZpZWxkIGlzIGxpbWl0ZWQgdG8gNjU1MzYgYnl0ZXNcbiAgICAgICAgICAgICAgICAvLyAtIG5vIG5lZWQgZm9yIGFkZGl0aW9uYWwgc2l6ZSBjaGVja1xuICAgICAgICAgICAgICAgIGNvcHksXG4gICAgICAgICAgICAgICAgLypsZW4gKyBjb3B5ID4gc3RhdGUuaGVhZC5leHRyYV9tYXggLSBsZW4gPyBzdGF0ZS5oZWFkLmV4dHJhX21heCA6IGNvcHksKi9cbiAgICAgICAgICAgICAgICBsZW5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgLy96bWVtY3B5KHN0YXRlLmhlYWQuZXh0cmEgKyBsZW4sIG5leHQsXG4gICAgICAgICAgICAgIC8vICAgICAgICBsZW4gKyBjb3B5ID4gc3RhdGUuaGVhZC5leHRyYV9tYXggP1xuICAgICAgICAgICAgICAvLyAgICAgICAgc3RhdGUuaGVhZC5leHRyYV9tYXggLSBsZW4gOiBjb3B5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xuICAgICAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyKHN0YXRlLmNoZWNrLCBpbnB1dCwgY29weSwgbmV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYXZlIC09IGNvcHk7XG4gICAgICAgICAgICBuZXh0ICs9IGNvcHk7XG4gICAgICAgICAgICBzdGF0ZS5sZW5ndGggLT0gY29weTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHN0YXRlLmxlbmd0aCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5sZW5ndGggPSAwO1xuICAgICAgICBzdGF0ZS5tb2RlID0gTkFNRTtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBOQU1FOlxuICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDA4MDApIHtcbiAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICBjb3B5ID0gMDtcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAvLyBUT0RPOiAyIG9yIDEgYnl0ZXM/XG4gICAgICAgICAgICBsZW4gPSBpbnB1dFtuZXh0ICsgY29weSsrXTtcbiAgICAgICAgICAgIC8qIHVzZSBjb25zdGFudCBsaW1pdCBiZWNhdXNlIGluIGpzIHdlIHNob3VsZCBub3QgcHJlYWxsb2NhdGUgbWVtb3J5ICovXG4gICAgICAgICAgICBpZiAoc3RhdGUuaGVhZCAmJiBsZW4gJiZcbiAgICAgICAgICAgICAgICAoc3RhdGUubGVuZ3RoIDwgNjU1MzYgLypzdGF0ZS5oZWFkLm5hbWVfbWF4Ki8pKSB7XG4gICAgICAgICAgICAgIHN0YXRlLmhlYWQubmFtZSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGxlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSB3aGlsZSAobGVuICYmIGNvcHkgPCBoYXZlKTtcblxuICAgICAgICAgIGlmIChzdGF0ZS5mbGFncyAmIDB4MDIwMCkge1xuICAgICAgICAgICAgc3RhdGUuY2hlY2sgPSBjcmMzMihzdGF0ZS5jaGVjaywgaW5wdXQsIGNvcHksIG5leHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoYXZlIC09IGNvcHk7XG4gICAgICAgICAgbmV4dCArPSBjb3B5O1xuICAgICAgICAgIGlmIChsZW4pIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhdGUuaGVhZCkge1xuICAgICAgICAgIHN0YXRlLmhlYWQubmFtZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUubGVuZ3RoID0gMDtcbiAgICAgICAgc3RhdGUubW9kZSA9IENPTU1FTlQ7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgQ09NTUVOVDpcbiAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgxMDAwKSB7XG4gICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgY29weSA9IDA7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgbGVuID0gaW5wdXRbbmV4dCArIGNvcHkrK107XG4gICAgICAgICAgICAvKiB1c2UgY29uc3RhbnQgbGltaXQgYmVjYXVzZSBpbiBqcyB3ZSBzaG91bGQgbm90IHByZWFsbG9jYXRlIG1lbW9yeSAqL1xuICAgICAgICAgICAgaWYgKHN0YXRlLmhlYWQgJiYgbGVuICYmXG4gICAgICAgICAgICAgICAgKHN0YXRlLmxlbmd0aCA8IDY1NTM2IC8qc3RhdGUuaGVhZC5jb21tX21heCovKSkge1xuICAgICAgICAgICAgICBzdGF0ZS5oZWFkLmNvbW1lbnQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShsZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gd2hpbGUgKGxlbiAmJiBjb3B5IDwgaGF2ZSk7XG4gICAgICAgICAgaWYgKHN0YXRlLmZsYWdzICYgMHgwMjAwKSB7XG4gICAgICAgICAgICBzdGF0ZS5jaGVjayA9IGNyYzMyKHN0YXRlLmNoZWNrLCBpbnB1dCwgY29weSwgbmV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhhdmUgLT0gY29weTtcbiAgICAgICAgICBuZXh0ICs9IGNvcHk7XG4gICAgICAgICAgaWYgKGxlbikgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5oZWFkKSB7XG4gICAgICAgICAgc3RhdGUuaGVhZC5jb21tZW50ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5tb2RlID0gSENSQztcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBIQ1JDOlxuICAgICAgICBpZiAoc3RhdGUuZmxhZ3MgJiAweDAyMDApIHtcbiAgICAgICAgICAvLz09PSBORUVEQklUUygxNik7ICovXG4gICAgICAgICAgd2hpbGUgKGJpdHMgPCAxNikge1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIGlmIChob2xkICE9PSAoc3RhdGUuY2hlY2sgJiAweGZmZmYpKSB7XG4gICAgICAgICAgICBzdHJtLm1zZyA9ICdoZWFkZXIgY3JjIG1pc21hdGNoJztcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgICBob2xkID0gMDtcbiAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLmhlYWQpIHtcbiAgICAgICAgICBzdGF0ZS5oZWFkLmhjcmMgPSAoKHN0YXRlLmZsYWdzID4+IDkpICYgMSk7XG4gICAgICAgICAgc3RhdGUuaGVhZC5kb25lID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSAwO1xuICAgICAgICBzdGF0ZS5tb2RlID0gVFlQRTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERJQ1RJRDpcbiAgICAgICAgLy89PT0gTkVFREJJVFMoMzIpOyAqL1xuICAgICAgICB3aGlsZSAoYml0cyA8IDMyKSB7XG4gICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgfVxuICAgICAgICAvLz09PS8vXG4gICAgICAgIHN0cm0uYWRsZXIgPSBzdGF0ZS5jaGVjayA9IHpzd2FwMzIoaG9sZCk7XG4gICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgIGhvbGQgPSAwO1xuICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdGF0ZS5tb2RlID0gRElDVDtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBESUNUOlxuICAgICAgICBpZiAoc3RhdGUuaGF2ZWRpY3QgPT09IDApIHtcbiAgICAgICAgICAvLy0tLSBSRVNUT1JFKCkgLS0tXG4gICAgICAgICAgc3RybS5uZXh0X291dCA9IHB1dDtcbiAgICAgICAgICBzdHJtLmF2YWlsX291dCA9IGxlZnQ7XG4gICAgICAgICAgc3RybS5uZXh0X2luID0gbmV4dDtcbiAgICAgICAgICBzdHJtLmF2YWlsX2luID0gaGF2ZTtcbiAgICAgICAgICBzdGF0ZS5ob2xkID0gaG9sZDtcbiAgICAgICAgICBzdGF0ZS5iaXRzID0gYml0cztcbiAgICAgICAgICAvLy0tLVxuICAgICAgICAgIHJldHVybiBaX05FRURfRElDVDtcbiAgICAgICAgfVxuICAgICAgICBzdHJtLmFkbGVyID0gc3RhdGUuY2hlY2sgPSAxLyphZGxlcjMyKDBMLCBaX05VTEwsIDApKi87XG4gICAgICAgIHN0YXRlLm1vZGUgPSBUWVBFO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIFRZUEU6XG4gICAgICAgIGlmIChmbHVzaCA9PT0gWl9CTE9DSyB8fCBmbHVzaCA9PT0gWl9UUkVFUykgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBUWVBFRE86XG4gICAgICAgIGlmIChzdGF0ZS5sYXN0KSB7XG4gICAgICAgICAgLy8tLS0gQllURUJJVFMoKSAtLS0vL1xuICAgICAgICAgIGhvbGQgPj4+PSBiaXRzICYgNztcbiAgICAgICAgICBiaXRzIC09IGJpdHMgJiA3O1xuICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQ0hFQ0s7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0gTkVFREJJVFMoMyk7ICovXG4gICAgICAgIHdoaWxlIChiaXRzIDwgMykge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdGF0ZS5sYXN0ID0gKGhvbGQgJiAweDAxKS8qQklUUygxKSovO1xuICAgICAgICAvLy0tLSBEUk9QQklUUygxKSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gMTtcbiAgICAgICAgYml0cyAtPSAxO1xuICAgICAgICAvLy0tLS8vXG5cbiAgICAgICAgc3dpdGNoICgoaG9sZCAmIDB4MDMpLypCSVRTKDIpKi8pIHtcbiAgICAgICAgICBjYXNlIDA6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBzdG9yZWQgYmxvY2sgKi9cbiAgICAgICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgIHN0b3JlZCBibG9jayVzXFxuXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgc3RhdGUubGFzdCA/IFwiIChsYXN0KVwiIDogXCJcIikpO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IFNUT1JFRDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTogICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIGZpeGVkIGJsb2NrICovXG4gICAgICAgICAgICBmaXhlZHRhYmxlcyhzdGF0ZSk7XG4gICAgICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICBmaXhlZCBjb2RlcyBibG9jayVzXFxuXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgc3RhdGUubGFzdCA/IFwiIChsYXN0KVwiIDogXCJcIikpO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IExFTl87ICAgICAgICAgICAgIC8qIGRlY29kZSBjb2RlcyAqL1xuICAgICAgICAgICAgaWYgKGZsdXNoID09PSBaX1RSRUVTKSB7XG4gICAgICAgICAgICAgIC8vLS0tIERST1BCSVRTKDIpIC0tLS8vXG4gICAgICAgICAgICAgIGhvbGQgPj4+PSAyO1xuICAgICAgICAgICAgICBiaXRzIC09IDI7XG4gICAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICAgICAgYnJlYWsgaW5mX2xlYXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogZHluYW1pYyBibG9jayAqL1xuICAgICAgICAgICAgLy9UcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgICAgZHluYW1pYyBjb2RlcyBibG9jayVzXFxuXCIsXG4gICAgICAgICAgICAvLyAgICAgICAgc3RhdGUubGFzdCA/IFwiIChsYXN0KVwiIDogXCJcIikpO1xuICAgICAgICAgICAgc3RhdGUubW9kZSA9IFRBQkxFO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBibG9jayB0eXBlJztcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8tLS0gRFJPUEJJVFMoMikgLS0tLy9cbiAgICAgICAgaG9sZCA+Pj49IDI7XG4gICAgICAgIGJpdHMgLT0gMjtcbiAgICAgICAgLy8tLS0vL1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1RPUkVEOlxuICAgICAgICAvLy0tLSBCWVRFQklUUygpIC0tLS8vIC8qIGdvIHRvIGJ5dGUgYm91bmRhcnkgKi9cbiAgICAgICAgaG9sZCA+Pj49IGJpdHMgJiA3O1xuICAgICAgICBiaXRzIC09IGJpdHMgJiA3O1xuICAgICAgICAvLy0tLS8vXG4gICAgICAgIC8vPT09IE5FRURCSVRTKDMyKTsgKi9cbiAgICAgICAgd2hpbGUgKGJpdHMgPCAzMikge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBpZiAoKGhvbGQgJiAweGZmZmYpICE9PSAoKGhvbGQgPj4+IDE2KSBeIDB4ZmZmZikpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIHN0b3JlZCBibG9jayBsZW5ndGhzJztcbiAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmxlbmd0aCA9IGhvbGQgJiAweGZmZmY7XG4gICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgc3RvcmVkIGxlbmd0aCAldVxcblwiLFxuICAgICAgICAvLyAgICAgICAgc3RhdGUubGVuZ3RoKSk7XG4gICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgIGhvbGQgPSAwO1xuICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdGF0ZS5tb2RlID0gQ09QWV87XG4gICAgICAgIGlmIChmbHVzaCA9PT0gWl9UUkVFUykgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBDT1BZXzpcbiAgICAgICAgc3RhdGUubW9kZSA9IENPUFk7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgQ09QWTpcbiAgICAgICAgY29weSA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgaWYgKGNvcHkpIHtcbiAgICAgICAgICBpZiAoY29weSA+IGhhdmUpIHsgY29weSA9IGhhdmU7IH1cbiAgICAgICAgICBpZiAoY29weSA+IGxlZnQpIHsgY29weSA9IGxlZnQ7IH1cbiAgICAgICAgICBpZiAoY29weSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAvLy0tLSB6bWVtY3B5KHB1dCwgbmV4dCwgY29weSk7IC0tLVxuICAgICAgICAgIHV0aWxzLmFycmF5U2V0KG91dHB1dCwgaW5wdXQsIG5leHQsIGNvcHksIHB1dCk7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIGhhdmUgLT0gY29weTtcbiAgICAgICAgICBuZXh0ICs9IGNvcHk7XG4gICAgICAgICAgbGVmdCAtPSBjb3B5O1xuICAgICAgICAgIHB1dCArPSBjb3B5O1xuICAgICAgICAgIHN0YXRlLmxlbmd0aCAtPSBjb3B5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgc3RvcmVkIGVuZFxcblwiKSk7XG4gICAgICAgIHN0YXRlLm1vZGUgPSBUWVBFO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgVEFCTEU6XG4gICAgICAgIC8vPT09IE5FRURCSVRTKDE0KTsgKi9cbiAgICAgICAgd2hpbGUgKGJpdHMgPCAxNCkge1xuICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgIH1cbiAgICAgICAgLy89PT0vL1xuICAgICAgICBzdGF0ZS5ubGVuID0gKGhvbGQgJiAweDFmKS8qQklUUyg1KSovICsgMjU3O1xuICAgICAgICAvLy0tLSBEUk9QQklUUyg1KSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gNTtcbiAgICAgICAgYml0cyAtPSA1O1xuICAgICAgICAvLy0tLS8vXG4gICAgICAgIHN0YXRlLm5kaXN0ID0gKGhvbGQgJiAweDFmKS8qQklUUyg1KSovICsgMTtcbiAgICAgICAgLy8tLS0gRFJPUEJJVFMoNSkgLS0tLy9cbiAgICAgICAgaG9sZCA+Pj49IDU7XG4gICAgICAgIGJpdHMgLT0gNTtcbiAgICAgICAgLy8tLS0vL1xuICAgICAgICBzdGF0ZS5uY29kZSA9IChob2xkICYgMHgwZikvKkJJVFMoNCkqLyArIDQ7XG4gICAgICAgIC8vLS0tIERST1BCSVRTKDQpIC0tLS8vXG4gICAgICAgIGhvbGQgPj4+PSA0O1xuICAgICAgICBiaXRzIC09IDQ7XG4gICAgICAgIC8vLS0tLy9cbi8vI2lmbmRlZiBQS1pJUF9CVUdfV09SS0FST1VORFxuICAgICAgICBpZiAoc3RhdGUubmxlbiA+IDI4NiB8fCBzdGF0ZS5uZGlzdCA+IDMwKSB7XG4gICAgICAgICAgc3RybS5tc2cgPSAndG9vIG1hbnkgbGVuZ3RoIG9yIGRpc3RhbmNlIHN5bWJvbHMnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbi8vI2VuZGlmXG4gICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgdGFibGUgc2l6ZXMgb2tcXG5cIikpO1xuICAgICAgICBzdGF0ZS5oYXZlID0gMDtcbiAgICAgICAgc3RhdGUubW9kZSA9IExFTkxFTlM7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgTEVOTEVOUzpcbiAgICAgICAgd2hpbGUgKHN0YXRlLmhhdmUgPCBzdGF0ZS5uY29kZSkge1xuICAgICAgICAgIC8vPT09IE5FRURCSVRTKDMpO1xuICAgICAgICAgIHdoaWxlIChiaXRzIDwgMykge1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIHN0YXRlLmxlbnNbb3JkZXJbc3RhdGUuaGF2ZSsrXV0gPSAoaG9sZCAmIDB4MDcpOy8vQklUUygzKTtcbiAgICAgICAgICAvLy0tLSBEUk9QQklUUygzKSAtLS0vL1xuICAgICAgICAgIGhvbGQgPj4+PSAzO1xuICAgICAgICAgIGJpdHMgLT0gMztcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHN0YXRlLmhhdmUgPCAxOSkge1xuICAgICAgICAgIHN0YXRlLmxlbnNbb3JkZXJbc3RhdGUuaGF2ZSsrXV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIFdlIGhhdmUgc2VwYXJhdGUgdGFibGVzICYgbm8gcG9pbnRlcnMuIDIgY29tbWVudGVkIGxpbmVzIGJlbG93IG5vdCBuZWVkZWQuXG4gICAgICAgIC8vc3RhdGUubmV4dCA9IHN0YXRlLmNvZGVzO1xuICAgICAgICAvL3N0YXRlLmxlbmNvZGUgPSBzdGF0ZS5uZXh0O1xuICAgICAgICAvLyBTd2l0Y2ggdG8gdXNlIGR5bmFtaWMgdGFibGVcbiAgICAgICAgc3RhdGUubGVuY29kZSA9IHN0YXRlLmxlbmR5bjtcbiAgICAgICAgc3RhdGUubGVuYml0cyA9IDc7XG5cbiAgICAgICAgb3B0cyA9IHsgYml0czogc3RhdGUubGVuYml0cyB9O1xuICAgICAgICByZXQgPSBpbmZsYXRlX3RhYmxlKENPREVTLCBzdGF0ZS5sZW5zLCAwLCAxOSwgc3RhdGUubGVuY29kZSwgMCwgc3RhdGUud29yaywgb3B0cyk7XG4gICAgICAgIHN0YXRlLmxlbmJpdHMgPSBvcHRzLmJpdHM7XG5cbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgY29kZSBsZW5ndGhzIHNldCc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvL1RyYWNldigoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgIGNvZGUgbGVuZ3RocyBva1xcblwiKSk7XG4gICAgICAgIHN0YXRlLmhhdmUgPSAwO1xuICAgICAgICBzdGF0ZS5tb2RlID0gQ09ERUxFTlM7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgQ09ERUxFTlM6XG4gICAgICAgIHdoaWxlIChzdGF0ZS5oYXZlIDwgc3RhdGUubmxlbiArIHN0YXRlLm5kaXN0KSB7XG4gICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgaGVyZSA9IHN0YXRlLmxlbmNvZGVbaG9sZCAmICgoMSA8PCBzdGF0ZS5sZW5iaXRzKSAtIDEpXTsvKkJJVFMoc3RhdGUubGVuYml0cykqL1xuICAgICAgICAgICAgaGVyZV9iaXRzID0gaGVyZSA+Pj4gMjQ7XG4gICAgICAgICAgICBoZXJlX29wID0gKGhlcmUgPj4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgICBoZXJlX3ZhbCA9IGhlcmUgJiAweGZmZmY7XG5cbiAgICAgICAgICAgIGlmICgoaGVyZV9iaXRzKSA8PSBiaXRzKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICAvLy0tLSBQVUxMQllURSgpIC0tLS8vXG4gICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGVyZV92YWwgPCAxNikge1xuICAgICAgICAgICAgLy8tLS0gRFJPUEJJVFMoaGVyZS5iaXRzKSAtLS0vL1xuICAgICAgICAgICAgaG9sZCA+Pj49IGhlcmVfYml0cztcbiAgICAgICAgICAgIGJpdHMgLT0gaGVyZV9iaXRzO1xuICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgICAgc3RhdGUubGVuc1tzdGF0ZS5oYXZlKytdID0gaGVyZV92YWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhlcmVfdmFsID09PSAxNikge1xuICAgICAgICAgICAgICAvLz09PSBORUVEQklUUyhoZXJlLmJpdHMgKyAyKTtcbiAgICAgICAgICAgICAgbiA9IGhlcmVfYml0cyArIDI7XG4gICAgICAgICAgICAgIHdoaWxlIChiaXRzIDwgbikge1xuICAgICAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy89PT0vL1xuICAgICAgICAgICAgICAvLy0tLSBEUk9QQklUUyhoZXJlLmJpdHMpIC0tLS8vXG4gICAgICAgICAgICAgIGhvbGQgPj4+PSBoZXJlX2JpdHM7XG4gICAgICAgICAgICAgIGJpdHMgLT0gaGVyZV9iaXRzO1xuICAgICAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgICAgIGlmIChzdGF0ZS5oYXZlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc3RybS5tc2cgPSAnaW52YWxpZCBiaXQgbGVuZ3RoIHJlcGVhdCc7XG4gICAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBsZW4gPSBzdGF0ZS5sZW5zW3N0YXRlLmhhdmUgLSAxXTtcbiAgICAgICAgICAgICAgY29weSA9IDMgKyAoaG9sZCAmIDB4MDMpOy8vQklUUygyKTtcbiAgICAgICAgICAgICAgLy8tLS0gRFJPUEJJVFMoMikgLS0tLy9cbiAgICAgICAgICAgICAgaG9sZCA+Pj49IDI7XG4gICAgICAgICAgICAgIGJpdHMgLT0gMjtcbiAgICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaGVyZV92YWwgPT09IDE3KSB7XG4gICAgICAgICAgICAgIC8vPT09IE5FRURCSVRTKGhlcmUuYml0cyArIDMpO1xuICAgICAgICAgICAgICBuID0gaGVyZV9iaXRzICsgMztcbiAgICAgICAgICAgICAgd2hpbGUgKGJpdHMgPCBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgICAgIC8vLS0tIERST1BCSVRTKGhlcmUuYml0cykgLS0tLy9cbiAgICAgICAgICAgICAgaG9sZCA+Pj49IGhlcmVfYml0cztcbiAgICAgICAgICAgICAgYml0cyAtPSBoZXJlX2JpdHM7XG4gICAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICAgICAgbGVuID0gMDtcbiAgICAgICAgICAgICAgY29weSA9IDMgKyAoaG9sZCAmIDB4MDcpOy8vQklUUygzKTtcbiAgICAgICAgICAgICAgLy8tLS0gRFJPUEJJVFMoMykgLS0tLy9cbiAgICAgICAgICAgICAgaG9sZCA+Pj49IDM7XG4gICAgICAgICAgICAgIGJpdHMgLT0gMztcbiAgICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIC8vPT09IE5FRURCSVRTKGhlcmUuYml0cyArIDcpO1xuICAgICAgICAgICAgICBuID0gaGVyZV9iaXRzICsgNztcbiAgICAgICAgICAgICAgd2hpbGUgKGJpdHMgPCBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgICAgIC8vLS0tIERST1BCSVRTKGhlcmUuYml0cykgLS0tLy9cbiAgICAgICAgICAgICAgaG9sZCA+Pj49IGhlcmVfYml0cztcbiAgICAgICAgICAgICAgYml0cyAtPSBoZXJlX2JpdHM7XG4gICAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICAgICAgbGVuID0gMDtcbiAgICAgICAgICAgICAgY29weSA9IDExICsgKGhvbGQgJiAweDdmKTsvL0JJVFMoNyk7XG4gICAgICAgICAgICAgIC8vLS0tIERST1BCSVRTKDcpIC0tLS8vXG4gICAgICAgICAgICAgIGhvbGQgPj4+PSA3O1xuICAgICAgICAgICAgICBiaXRzIC09IDc7XG4gICAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0ZS5oYXZlICsgY29weSA+IHN0YXRlLm5sZW4gKyBzdGF0ZS5uZGlzdCkge1xuICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGJpdCBsZW5ndGggcmVwZWF0JztcbiAgICAgICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoY29weS0tKSB7XG4gICAgICAgICAgICAgIHN0YXRlLmxlbnNbc3RhdGUuaGF2ZSsrXSA9IGxlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBoYW5kbGUgZXJyb3IgYnJlYWtzIGluIHdoaWxlICovXG4gICAgICAgIGlmIChzdGF0ZS5tb2RlID09PSBCQUQpIHsgYnJlYWs7IH1cblxuICAgICAgICAvKiBjaGVjayBmb3IgZW5kLW9mLWJsb2NrIGNvZGUgKGJldHRlciBoYXZlIG9uZSkgKi9cbiAgICAgICAgaWYgKHN0YXRlLmxlbnNbMjU2XSA9PT0gMCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgY29kZSAtLSBtaXNzaW5nIGVuZC1vZi1ibG9jayc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIGJ1aWxkIGNvZGUgdGFibGVzIC0tIG5vdGU6IGRvIG5vdCBjaGFuZ2UgdGhlIGxlbmJpdHMgb3IgZGlzdGJpdHNcbiAgICAgICAgICAgdmFsdWVzIGhlcmUgKDkgYW5kIDYpIHdpdGhvdXQgcmVhZGluZyB0aGUgY29tbWVudHMgaW4gaW5mdHJlZXMuaFxuICAgICAgICAgICBjb25jZXJuaW5nIHRoZSBFTk9VR0ggY29uc3RhbnRzLCB3aGljaCBkZXBlbmQgb24gdGhvc2UgdmFsdWVzICovXG4gICAgICAgIHN0YXRlLmxlbmJpdHMgPSA5O1xuXG4gICAgICAgIG9wdHMgPSB7IGJpdHM6IHN0YXRlLmxlbmJpdHMgfTtcbiAgICAgICAgcmV0ID0gaW5mbGF0ZV90YWJsZShMRU5TLCBzdGF0ZS5sZW5zLCAwLCBzdGF0ZS5ubGVuLCBzdGF0ZS5sZW5jb2RlLCAwLCBzdGF0ZS53b3JrLCBvcHRzKTtcbiAgICAgICAgLy8gV2UgaGF2ZSBzZXBhcmF0ZSB0YWJsZXMgJiBubyBwb2ludGVycy4gMiBjb21tZW50ZWQgbGluZXMgYmVsb3cgbm90IG5lZWRlZC5cbiAgICAgICAgLy8gc3RhdGUubmV4dF9pbmRleCA9IG9wdHMudGFibGVfaW5kZXg7XG4gICAgICAgIHN0YXRlLmxlbmJpdHMgPSBvcHRzLmJpdHM7XG4gICAgICAgIC8vIHN0YXRlLmxlbmNvZGUgPSBzdGF0ZS5uZXh0O1xuXG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGxpdGVyYWwvbGVuZ3RocyBzZXQnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZS5kaXN0Yml0cyA9IDY7XG4gICAgICAgIC8vc3RhdGUuZGlzdGNvZGUuY29weShzdGF0ZS5jb2Rlcyk7XG4gICAgICAgIC8vIFN3aXRjaCB0byB1c2UgZHluYW1pYyB0YWJsZVxuICAgICAgICBzdGF0ZS5kaXN0Y29kZSA9IHN0YXRlLmRpc3RkeW47XG4gICAgICAgIG9wdHMgPSB7IGJpdHM6IHN0YXRlLmRpc3RiaXRzIH07XG4gICAgICAgIHJldCA9IGluZmxhdGVfdGFibGUoRElTVFMsIHN0YXRlLmxlbnMsIHN0YXRlLm5sZW4sIHN0YXRlLm5kaXN0LCBzdGF0ZS5kaXN0Y29kZSwgMCwgc3RhdGUud29yaywgb3B0cyk7XG4gICAgICAgIC8vIFdlIGhhdmUgc2VwYXJhdGUgdGFibGVzICYgbm8gcG9pbnRlcnMuIDIgY29tbWVudGVkIGxpbmVzIGJlbG93IG5vdCBuZWVkZWQuXG4gICAgICAgIC8vIHN0YXRlLm5leHRfaW5kZXggPSBvcHRzLnRhYmxlX2luZGV4O1xuICAgICAgICBzdGF0ZS5kaXN0Yml0cyA9IG9wdHMuYml0cztcbiAgICAgICAgLy8gc3RhdGUuZGlzdGNvZGUgPSBzdGF0ZS5uZXh0O1xuXG4gICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlcyBzZXQnO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy9UcmFjZXYoKHN0ZGVyciwgJ2luZmxhdGU6ICAgICAgIGNvZGVzIG9rXFxuJykpO1xuICAgICAgICBzdGF0ZS5tb2RlID0gTEVOXztcbiAgICAgICAgaWYgKGZsdXNoID09PSBaX1RSRUVTKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIExFTl86XG4gICAgICAgIHN0YXRlLm1vZGUgPSBMRU47XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgTEVOOlxuICAgICAgICBpZiAoaGF2ZSA+PSA2ICYmIGxlZnQgPj0gMjU4KSB7XG4gICAgICAgICAgLy8tLS0gUkVTVE9SRSgpIC0tLVxuICAgICAgICAgIHN0cm0ubmV4dF9vdXQgPSBwdXQ7XG4gICAgICAgICAgc3RybS5hdmFpbF9vdXQgPSBsZWZ0O1xuICAgICAgICAgIHN0cm0ubmV4dF9pbiA9IG5leHQ7XG4gICAgICAgICAgc3RybS5hdmFpbF9pbiA9IGhhdmU7XG4gICAgICAgICAgc3RhdGUuaG9sZCA9IGhvbGQ7XG4gICAgICAgICAgc3RhdGUuYml0cyA9IGJpdHM7XG4gICAgICAgICAgLy8tLS1cbiAgICAgICAgICBpbmZsYXRlX2Zhc3Qoc3RybSwgX291dCk7XG4gICAgICAgICAgLy8tLS0gTE9BRCgpIC0tLVxuICAgICAgICAgIHB1dCA9IHN0cm0ubmV4dF9vdXQ7XG4gICAgICAgICAgb3V0cHV0ID0gc3RybS5vdXRwdXQ7XG4gICAgICAgICAgbGVmdCA9IHN0cm0uYXZhaWxfb3V0O1xuICAgICAgICAgIG5leHQgPSBzdHJtLm5leHRfaW47XG4gICAgICAgICAgaW5wdXQgPSBzdHJtLmlucHV0O1xuICAgICAgICAgIGhhdmUgPSBzdHJtLmF2YWlsX2luO1xuICAgICAgICAgIGhvbGQgPSBzdGF0ZS5ob2xkO1xuICAgICAgICAgIGJpdHMgPSBzdGF0ZS5iaXRzO1xuICAgICAgICAgIC8vLS0tXG5cbiAgICAgICAgICBpZiAoc3RhdGUubW9kZSA9PT0gVFlQRSkge1xuICAgICAgICAgICAgc3RhdGUuYmFjayA9IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5iYWNrID0gMDtcbiAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgIGhlcmUgPSBzdGF0ZS5sZW5jb2RlW2hvbGQgJiAoKDEgPDwgc3RhdGUubGVuYml0cykgLSAxKV07ICAvKkJJVFMoc3RhdGUubGVuYml0cykqL1xuICAgICAgICAgIGhlcmVfYml0cyA9IGhlcmUgPj4+IDI0O1xuICAgICAgICAgIGhlcmVfb3AgPSAoaGVyZSA+Pj4gMTYpICYgMHhmZjtcbiAgICAgICAgICBoZXJlX3ZhbCA9IGhlcmUgJiAweGZmZmY7XG5cbiAgICAgICAgICBpZiAoaGVyZV9iaXRzIDw9IGJpdHMpIHsgYnJlYWs7IH1cbiAgICAgICAgICAvLy0tLSBQVUxMQllURSgpIC0tLS8vXG4gICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlcmVfb3AgJiYgKGhlcmVfb3AgJiAweGYwKSA9PT0gMCkge1xuICAgICAgICAgIGxhc3RfYml0cyA9IGhlcmVfYml0cztcbiAgICAgICAgICBsYXN0X29wID0gaGVyZV9vcDtcbiAgICAgICAgICBsYXN0X3ZhbCA9IGhlcmVfdmFsO1xuICAgICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgIGhlcmUgPSBzdGF0ZS5sZW5jb2RlW2xhc3RfdmFsICtcbiAgICAgICAgICAgICAgICAgICAgKChob2xkICYgKCgxIDw8IChsYXN0X2JpdHMgKyBsYXN0X29wKSkgLSAxKSkvKkJJVFMobGFzdC5iaXRzICsgbGFzdC5vcCkqLyA+PiBsYXN0X2JpdHMpXTtcbiAgICAgICAgICAgIGhlcmVfYml0cyA9IGhlcmUgPj4+IDI0O1xuICAgICAgICAgICAgaGVyZV9vcCA9IChoZXJlID4+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgaGVyZV92YWwgPSBoZXJlICYgMHhmZmZmO1xuXG4gICAgICAgICAgICBpZiAoKGxhc3RfYml0cyArIGhlcmVfYml0cykgPD0gYml0cykgeyBicmVhazsgfVxuICAgICAgICAgICAgLy8tLS0gUFVMTEJZVEUoKSAtLS0vL1xuICAgICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgICBoYXZlLS07XG4gICAgICAgICAgICBob2xkICs9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAgIC8vLS0tLy9cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8tLS0gRFJPUEJJVFMobGFzdC5iaXRzKSAtLS0vL1xuICAgICAgICAgIGhvbGQgPj4+PSBsYXN0X2JpdHM7XG4gICAgICAgICAgYml0cyAtPSBsYXN0X2JpdHM7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIHN0YXRlLmJhY2sgKz0gbGFzdF9iaXRzO1xuICAgICAgICB9XG4gICAgICAgIC8vLS0tIERST1BCSVRTKGhlcmUuYml0cykgLS0tLy9cbiAgICAgICAgaG9sZCA+Pj49IGhlcmVfYml0cztcbiAgICAgICAgYml0cyAtPSBoZXJlX2JpdHM7XG4gICAgICAgIC8vLS0tLy9cbiAgICAgICAgc3RhdGUuYmFjayArPSBoZXJlX2JpdHM7XG4gICAgICAgIHN0YXRlLmxlbmd0aCA9IGhlcmVfdmFsO1xuICAgICAgICBpZiAoaGVyZV9vcCA9PT0gMCkge1xuICAgICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBoZXJlLnZhbCA+PSAweDIwICYmIGhlcmUudmFsIDwgMHg3ZiA/XG4gICAgICAgICAgLy8gICAgICAgIFwiaW5mbGF0ZTogICAgICAgICBsaXRlcmFsICclYydcXG5cIiA6XG4gICAgICAgICAgLy8gICAgICAgIFwiaW5mbGF0ZTogICAgICAgICBsaXRlcmFsIDB4JTAyeFxcblwiLCBoZXJlLnZhbCkpO1xuICAgICAgICAgIHN0YXRlLm1vZGUgPSBMSVQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlcmVfb3AgJiAzMikge1xuICAgICAgICAgIC8vVHJhY2V2digoc3RkZXJyLCBcImluZmxhdGU6ICAgICAgICAgZW5kIG9mIGJsb2NrXFxuXCIpKTtcbiAgICAgICAgICBzdGF0ZS5iYWNrID0gLTE7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IFRZUEU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlcmVfb3AgJiA2NCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgbGl0ZXJhbC9sZW5ndGggY29kZSc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5leHRyYSA9IGhlcmVfb3AgJiAxNTtcbiAgICAgICAgc3RhdGUubW9kZSA9IExFTkVYVDtcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgY2FzZSBMRU5FWFQ6XG4gICAgICAgIGlmIChzdGF0ZS5leHRyYSkge1xuICAgICAgICAgIC8vPT09IE5FRURCSVRTKHN0YXRlLmV4dHJhKTtcbiAgICAgICAgICBuID0gc3RhdGUuZXh0cmE7XG4gICAgICAgICAgd2hpbGUgKGJpdHMgPCBuKSB7XG4gICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgc3RhdGUubGVuZ3RoICs9IGhvbGQgJiAoKDEgPDwgc3RhdGUuZXh0cmEpIC0gMSkvKkJJVFMoc3RhdGUuZXh0cmEpKi87XG4gICAgICAgICAgLy8tLS0gRFJPUEJJVFMoc3RhdGUuZXh0cmEpIC0tLS8vXG4gICAgICAgICAgaG9sZCA+Pj49IHN0YXRlLmV4dHJhO1xuICAgICAgICAgIGJpdHMgLT0gc3RhdGUuZXh0cmE7XG4gICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIHN0YXRlLmJhY2sgKz0gc3RhdGUuZXh0cmE7XG4gICAgICAgIH1cbiAgICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgICBsZW5ndGggJXVcXG5cIiwgc3RhdGUubGVuZ3RoKSk7XG4gICAgICAgIHN0YXRlLndhcyA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgc3RhdGUubW9kZSA9IERJU1Q7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgRElTVDpcbiAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgIGhlcmUgPSBzdGF0ZS5kaXN0Y29kZVtob2xkICYgKCgxIDw8IHN0YXRlLmRpc3RiaXRzKSAtIDEpXTsvKkJJVFMoc3RhdGUuZGlzdGJpdHMpKi9cbiAgICAgICAgICBoZXJlX2JpdHMgPSBoZXJlID4+PiAyNDtcbiAgICAgICAgICBoZXJlX29wID0gKGhlcmUgPj4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgaGVyZV92YWwgPSBoZXJlICYgMHhmZmZmO1xuXG4gICAgICAgICAgaWYgKChoZXJlX2JpdHMpIDw9IGJpdHMpIHsgYnJlYWs7IH1cbiAgICAgICAgICAvLy0tLSBQVUxMQllURSgpIC0tLS8vXG4gICAgICAgICAgaWYgKGhhdmUgPT09IDApIHsgYnJlYWsgaW5mX2xlYXZlOyB9XG4gICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgIH1cbiAgICAgICAgaWYgKChoZXJlX29wICYgMHhmMCkgPT09IDApIHtcbiAgICAgICAgICBsYXN0X2JpdHMgPSBoZXJlX2JpdHM7XG4gICAgICAgICAgbGFzdF9vcCA9IGhlcmVfb3A7XG4gICAgICAgICAgbGFzdF92YWwgPSBoZXJlX3ZhbDtcbiAgICAgICAgICBmb3IgKDs7KSB7XG4gICAgICAgICAgICBoZXJlID0gc3RhdGUuZGlzdGNvZGVbbGFzdF92YWwgK1xuICAgICAgICAgICAgICAgICAgICAoKGhvbGQgJiAoKDEgPDwgKGxhc3RfYml0cyArIGxhc3Rfb3ApKSAtIDEpKS8qQklUUyhsYXN0LmJpdHMgKyBsYXN0Lm9wKSovID4+IGxhc3RfYml0cyldO1xuICAgICAgICAgICAgaGVyZV9iaXRzID0gaGVyZSA+Pj4gMjQ7XG4gICAgICAgICAgICBoZXJlX29wID0gKGhlcmUgPj4+IDE2KSAmIDB4ZmY7XG4gICAgICAgICAgICBoZXJlX3ZhbCA9IGhlcmUgJiAweGZmZmY7XG5cbiAgICAgICAgICAgIGlmICgobGFzdF9iaXRzICsgaGVyZV9iaXRzKSA8PSBiaXRzKSB7IGJyZWFrOyB9XG4gICAgICAgICAgICAvLy0tLSBQVUxMQllURSgpIC0tLS8vXG4gICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgICAgLy8tLS0vL1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLy0tLSBEUk9QQklUUyhsYXN0LmJpdHMpIC0tLS8vXG4gICAgICAgICAgaG9sZCA+Pj49IGxhc3RfYml0cztcbiAgICAgICAgICBiaXRzIC09IGxhc3RfYml0cztcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgc3RhdGUuYmFjayArPSBsYXN0X2JpdHM7XG4gICAgICAgIH1cbiAgICAgICAgLy8tLS0gRFJPUEJJVFMoaGVyZS5iaXRzKSAtLS0vL1xuICAgICAgICBob2xkID4+Pj0gaGVyZV9iaXRzO1xuICAgICAgICBiaXRzIC09IGhlcmVfYml0cztcbiAgICAgICAgLy8tLS0vL1xuICAgICAgICBzdGF0ZS5iYWNrICs9IGhlcmVfYml0cztcbiAgICAgICAgaWYgKGhlcmVfb3AgJiA2NCkge1xuICAgICAgICAgIHN0cm0ubXNnID0gJ2ludmFsaWQgZGlzdGFuY2UgY29kZSc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5vZmZzZXQgPSBoZXJlX3ZhbDtcbiAgICAgICAgc3RhdGUuZXh0cmEgPSAoaGVyZV9vcCkgJiAxNTtcbiAgICAgICAgc3RhdGUubW9kZSA9IERJU1RFWFQ7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgRElTVEVYVDpcbiAgICAgICAgaWYgKHN0YXRlLmV4dHJhKSB7XG4gICAgICAgICAgLy89PT0gTkVFREJJVFMoc3RhdGUuZXh0cmEpO1xuICAgICAgICAgIG4gPSBzdGF0ZS5leHRyYTtcbiAgICAgICAgICB3aGlsZSAoYml0cyA8IG4pIHtcbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgaG9sZCArPSBpbnB1dFtuZXh0KytdIDw8IGJpdHM7XG4gICAgICAgICAgICBiaXRzICs9IDg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09Ly9cbiAgICAgICAgICBzdGF0ZS5vZmZzZXQgKz0gaG9sZCAmICgoMSA8PCBzdGF0ZS5leHRyYSkgLSAxKS8qQklUUyhzdGF0ZS5leHRyYSkqLztcbiAgICAgICAgICAvLy0tLSBEUk9QQklUUyhzdGF0ZS5leHRyYSkgLS0tLy9cbiAgICAgICAgICBob2xkID4+Pj0gc3RhdGUuZXh0cmE7XG4gICAgICAgICAgYml0cyAtPSBzdGF0ZS5leHRyYTtcbiAgICAgICAgICAvLy0tLS8vXG4gICAgICAgICAgc3RhdGUuYmFjayArPSBzdGF0ZS5leHRyYTtcbiAgICAgICAgfVxuLy8jaWZkZWYgSU5GTEFURV9TVFJJQ1RcbiAgICAgICAgaWYgKHN0YXRlLm9mZnNldCA+IHN0YXRlLmRtYXgpIHtcbiAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFjayc7XG4gICAgICAgICAgc3RhdGUubW9kZSA9IEJBRDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuLy8jZW5kaWZcbiAgICAgICAgLy9UcmFjZXZ2KChzdGRlcnIsIFwiaW5mbGF0ZTogICAgICAgICBkaXN0YW5jZSAldVxcblwiLCBzdGF0ZS5vZmZzZXQpKTtcbiAgICAgICAgc3RhdGUubW9kZSA9IE1BVENIO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIE1BVENIOlxuICAgICAgICBpZiAobGVmdCA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgY29weSA9IF9vdXQgLSBsZWZ0O1xuICAgICAgICBpZiAoc3RhdGUub2Zmc2V0ID4gY29weSkgeyAgICAgICAgIC8qIGNvcHkgZnJvbSB3aW5kb3cgKi9cbiAgICAgICAgICBjb3B5ID0gc3RhdGUub2Zmc2V0IC0gY29weTtcbiAgICAgICAgICBpZiAoY29weSA+IHN0YXRlLndoYXZlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuc2FuZSkge1xuICAgICAgICAgICAgICBzdHJtLm1zZyA9ICdpbnZhbGlkIGRpc3RhbmNlIHRvbyBmYXIgYmFjayc7XG4gICAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuLy8gKCEpIFRoaXMgYmxvY2sgaXMgZGlzYWJsZWQgaW4gemxpYiBkZWZhdWx0cyxcbi8vIGRvbid0IGVuYWJsZSBpdCBmb3IgYmluYXJ5IGNvbXBhdGliaWxpdHlcbi8vI2lmZGVmIElORkxBVEVfQUxMT1dfSU5WQUxJRF9ESVNUQU5DRV9UT09GQVJfQVJSUlxuLy8gICAgICAgICAgVHJhY2UoKHN0ZGVyciwgXCJpbmZsYXRlLmMgdG9vIGZhclxcblwiKSk7XG4vLyAgICAgICAgICBjb3B5IC09IHN0YXRlLndoYXZlO1xuLy8gICAgICAgICAgaWYgKGNvcHkgPiBzdGF0ZS5sZW5ndGgpIHsgY29weSA9IHN0YXRlLmxlbmd0aDsgfVxuLy8gICAgICAgICAgaWYgKGNvcHkgPiBsZWZ0KSB7IGNvcHkgPSBsZWZ0OyB9XG4vLyAgICAgICAgICBsZWZ0IC09IGNvcHk7XG4vLyAgICAgICAgICBzdGF0ZS5sZW5ndGggLT0gY29weTtcbi8vICAgICAgICAgIGRvIHtcbi8vICAgICAgICAgICAgb3V0cHV0W3B1dCsrXSA9IDA7XG4vLyAgICAgICAgICB9IHdoaWxlICgtLWNvcHkpO1xuLy8gICAgICAgICAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgeyBzdGF0ZS5tb2RlID0gTEVOOyB9XG4vLyAgICAgICAgICBicmVhaztcbi8vI2VuZGlmXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUud25leHQpIHtcbiAgICAgICAgICAgIGNvcHkgLT0gc3RhdGUud25leHQ7XG4gICAgICAgICAgICBmcm9tID0gc3RhdGUud3NpemUgLSBjb3B5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZyb20gPSBzdGF0ZS53bmV4dCAtIGNvcHk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb3B5ID4gc3RhdGUubGVuZ3RoKSB7IGNvcHkgPSBzdGF0ZS5sZW5ndGg7IH1cbiAgICAgICAgICBmcm9tX3NvdXJjZSA9IHN0YXRlLndpbmRvdztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBjb3B5IGZyb20gb3V0cHV0ICovXG4gICAgICAgICAgZnJvbV9zb3VyY2UgPSBvdXRwdXQ7XG4gICAgICAgICAgZnJvbSA9IHB1dCAtIHN0YXRlLm9mZnNldDtcbiAgICAgICAgICBjb3B5ID0gc3RhdGUubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3B5ID4gbGVmdCkgeyBjb3B5ID0gbGVmdDsgfVxuICAgICAgICBsZWZ0IC09IGNvcHk7XG4gICAgICAgIHN0YXRlLmxlbmd0aCAtPSBjb3B5O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgb3V0cHV0W3B1dCsrXSA9IGZyb21fc291cmNlW2Zyb20rK107XG4gICAgICAgIH0gd2hpbGUgKC0tY29weSk7XG4gICAgICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIHsgc3RhdGUubW9kZSA9IExFTjsgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTElUOlxuICAgICAgICBpZiAobGVmdCA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgb3V0cHV0W3B1dCsrXSA9IHN0YXRlLmxlbmd0aDtcbiAgICAgICAgbGVmdC0tO1xuICAgICAgICBzdGF0ZS5tb2RlID0gTEVOO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hFQ0s6XG4gICAgICAgIGlmIChzdGF0ZS53cmFwKSB7XG4gICAgICAgICAgLy89PT0gTkVFREJJVFMoMzIpO1xuICAgICAgICAgIHdoaWxlIChiaXRzIDwgMzIpIHtcbiAgICAgICAgICAgIGlmIChoYXZlID09PSAwKSB7IGJyZWFrIGluZl9sZWF2ZTsgfVxuICAgICAgICAgICAgaGF2ZS0tO1xuICAgICAgICAgICAgLy8gVXNlICd8JyBpbnN0ZWFkIG9mICcrJyB0byBtYWtlIHN1cmUgdGhhdCByZXN1bHQgaXMgc2lnbmVkXG4gICAgICAgICAgICBob2xkIHw9IGlucHV0W25leHQrK10gPDwgYml0cztcbiAgICAgICAgICAgIGJpdHMgKz0gODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIF9vdXQgLT0gbGVmdDtcbiAgICAgICAgICBzdHJtLnRvdGFsX291dCArPSBfb3V0O1xuICAgICAgICAgIHN0YXRlLnRvdGFsICs9IF9vdXQ7XG4gICAgICAgICAgaWYgKF9vdXQpIHtcbiAgICAgICAgICAgIHN0cm0uYWRsZXIgPSBzdGF0ZS5jaGVjayA9XG4gICAgICAgICAgICAgICAgLypVUERBVEUoc3RhdGUuY2hlY2ssIHB1dCAtIF9vdXQsIF9vdXQpOyovXG4gICAgICAgICAgICAgICAgKHN0YXRlLmZsYWdzID8gY3JjMzIoc3RhdGUuY2hlY2ssIG91dHB1dCwgX291dCwgcHV0IC0gX291dCkgOiBhZGxlcjMyKHN0YXRlLmNoZWNrLCBvdXRwdXQsIF9vdXQsIHB1dCAtIF9vdXQpKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBfb3V0ID0gbGVmdDtcbiAgICAgICAgICAvLyBOQjogY3JjMzIgc3RvcmVkIGFzIHNpZ25lZCAzMi1iaXQgaW50LCB6c3dhcDMyIHJldHVybnMgc2lnbmVkIHRvb1xuICAgICAgICAgIGlmICgoc3RhdGUuZmxhZ3MgPyBob2xkIDogenN3YXAzMihob2xkKSkgIT09IHN0YXRlLmNoZWNrKSB7XG4gICAgICAgICAgICBzdHJtLm1zZyA9ICdpbmNvcnJlY3QgZGF0YSBjaGVjayc7XG4gICAgICAgICAgICBzdGF0ZS5tb2RlID0gQkFEO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vPT09IElOSVRCSVRTKCk7XG4gICAgICAgICAgaG9sZCA9IDA7XG4gICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgLy89PT0vL1xuICAgICAgICAgIC8vVHJhY2V2KChzdGRlcnIsIFwiaW5mbGF0ZTogICBjaGVjayBtYXRjaGVzIHRyYWlsZXJcXG5cIikpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLm1vZGUgPSBMRU5HVEg7XG4gICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGNhc2UgTEVOR1RIOlxuICAgICAgICBpZiAoc3RhdGUud3JhcCAmJiBzdGF0ZS5mbGFncykge1xuICAgICAgICAgIC8vPT09IE5FRURCSVRTKDMyKTtcbiAgICAgICAgICB3aGlsZSAoYml0cyA8IDMyKSB7XG4gICAgICAgICAgICBpZiAoaGF2ZSA9PT0gMCkgeyBicmVhayBpbmZfbGVhdmU7IH1cbiAgICAgICAgICAgIGhhdmUtLTtcbiAgICAgICAgICAgIGhvbGQgKz0gaW5wdXRbbmV4dCsrXSA8PCBiaXRzO1xuICAgICAgICAgICAgYml0cyArPSA4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgaWYgKGhvbGQgIT09IChzdGF0ZS50b3RhbCAmIDB4ZmZmZmZmZmYpKSB7XG4gICAgICAgICAgICBzdHJtLm1zZyA9ICdpbmNvcnJlY3QgbGVuZ3RoIGNoZWNrJztcbiAgICAgICAgICAgIHN0YXRlLm1vZGUgPSBCQUQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy89PT0gSU5JVEJJVFMoKTtcbiAgICAgICAgICBob2xkID0gMDtcbiAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAvLz09PS8vXG4gICAgICAgICAgLy9UcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgIGxlbmd0aCBtYXRjaGVzIHRyYWlsZXJcXG5cIikpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLm1vZGUgPSBET05FO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlIERPTkU6XG4gICAgICAgIHJldCA9IFpfU1RSRUFNX0VORDtcbiAgICAgICAgYnJlYWsgaW5mX2xlYXZlO1xuICAgICAgY2FzZSBCQUQ6XG4gICAgICAgIHJldCA9IFpfREFUQV9FUlJPUjtcbiAgICAgICAgYnJlYWsgaW5mX2xlYXZlO1xuICAgICAgY2FzZSBNRU06XG4gICAgICAgIHJldHVybiBaX01FTV9FUlJPUjtcbiAgICAgIGNhc2UgU1lOQzpcbiAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuICAgIH1cbiAgfVxuXG4gIC8vIGluZl9sZWF2ZSA8LSBoZXJlIGlzIHJlYWwgcGxhY2UgZm9yIFwiZ290byBpbmZfbGVhdmVcIiwgZW11bGF0ZWQgdmlhIFwiYnJlYWsgaW5mX2xlYXZlXCJcblxuICAvKlxuICAgICBSZXR1cm4gZnJvbSBpbmZsYXRlKCksIHVwZGF0aW5nIHRoZSB0b3RhbCBjb3VudHMgYW5kIHRoZSBjaGVjayB2YWx1ZS5cbiAgICAgSWYgdGhlcmUgd2FzIG5vIHByb2dyZXNzIGR1cmluZyB0aGUgaW5mbGF0ZSgpIGNhbGwsIHJldHVybiBhIGJ1ZmZlclxuICAgICBlcnJvci4gIENhbGwgdXBkYXRld2luZG93KCkgdG8gY3JlYXRlIGFuZC9vciB1cGRhdGUgdGhlIHdpbmRvdyBzdGF0ZS5cbiAgICAgTm90ZTogYSBtZW1vcnkgZXJyb3IgZnJvbSBpbmZsYXRlKCkgaXMgbm9uLXJlY292ZXJhYmxlLlxuICAgKi9cblxuICAvLy0tLSBSRVNUT1JFKCkgLS0tXG4gIHN0cm0ubmV4dF9vdXQgPSBwdXQ7XG4gIHN0cm0uYXZhaWxfb3V0ID0gbGVmdDtcbiAgc3RybS5uZXh0X2luID0gbmV4dDtcbiAgc3RybS5hdmFpbF9pbiA9IGhhdmU7XG4gIHN0YXRlLmhvbGQgPSBob2xkO1xuICBzdGF0ZS5iaXRzID0gYml0cztcbiAgLy8tLS1cblxuICBpZiAoc3RhdGUud3NpemUgfHwgKF9vdXQgIT09IHN0cm0uYXZhaWxfb3V0ICYmIHN0YXRlLm1vZGUgPCBCQUQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoc3RhdGUubW9kZSA8IENIRUNLIHx8IGZsdXNoICE9PSBaX0ZJTklTSCkpKSB7XG4gICAgaWYgKHVwZGF0ZXdpbmRvdyhzdHJtLCBzdHJtLm91dHB1dCwgc3RybS5uZXh0X291dCwgX291dCAtIHN0cm0uYXZhaWxfb3V0KSkge1xuICAgICAgc3RhdGUubW9kZSA9IE1FTTtcbiAgICAgIHJldHVybiBaX01FTV9FUlJPUjtcbiAgICB9XG4gIH1cbiAgX2luIC09IHN0cm0uYXZhaWxfaW47XG4gIF9vdXQgLT0gc3RybS5hdmFpbF9vdXQ7XG4gIHN0cm0udG90YWxfaW4gKz0gX2luO1xuICBzdHJtLnRvdGFsX291dCArPSBfb3V0O1xuICBzdGF0ZS50b3RhbCArPSBfb3V0O1xuICBpZiAoc3RhdGUud3JhcCAmJiBfb3V0KSB7XG4gICAgc3RybS5hZGxlciA9IHN0YXRlLmNoZWNrID0gLypVUERBVEUoc3RhdGUuY2hlY2ssIHN0cm0ubmV4dF9vdXQgLSBfb3V0LCBfb3V0KTsqL1xuICAgICAgKHN0YXRlLmZsYWdzID8gY3JjMzIoc3RhdGUuY2hlY2ssIG91dHB1dCwgX291dCwgc3RybS5uZXh0X291dCAtIF9vdXQpIDogYWRsZXIzMihzdGF0ZS5jaGVjaywgb3V0cHV0LCBfb3V0LCBzdHJtLm5leHRfb3V0IC0gX291dCkpO1xuICB9XG4gIHN0cm0uZGF0YV90eXBlID0gc3RhdGUuYml0cyArIChzdGF0ZS5sYXN0ID8gNjQgOiAwKSArXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZS5tb2RlID09PSBUWVBFID8gMTI4IDogMCkgK1xuICAgICAgICAgICAgICAgICAgICAoc3RhdGUubW9kZSA9PT0gTEVOXyB8fCBzdGF0ZS5tb2RlID09PSBDT1BZXyA/IDI1NiA6IDApO1xuICBpZiAoKChfaW4gPT09IDAgJiYgX291dCA9PT0gMCkgfHwgZmx1c2ggPT09IFpfRklOSVNIKSAmJiByZXQgPT09IFpfT0spIHtcbiAgICByZXQgPSBaX0JVRl9FUlJPUjtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBpbmZsYXRlRW5kKHN0cm0pIHtcblxuICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUgLyp8fCBzdHJtLT56ZnJlZSA9PSAoZnJlZV9mdW5jKTAqLykge1xuICAgIHJldHVybiBaX1NUUkVBTV9FUlJPUjtcbiAgfVxuXG4gIHZhciBzdGF0ZSA9IHN0cm0uc3RhdGU7XG4gIGlmIChzdGF0ZS53aW5kb3cpIHtcbiAgICBzdGF0ZS53aW5kb3cgPSBudWxsO1xuICB9XG4gIHN0cm0uc3RhdGUgPSBudWxsO1xuICByZXR1cm4gWl9PSztcbn1cblxuZnVuY3Rpb24gaW5mbGF0ZUdldEhlYWRlcihzdHJtLCBoZWFkKSB7XG4gIHZhciBzdGF0ZTtcblxuICAvKiBjaGVjayBzdGF0ZSAqL1xuICBpZiAoIXN0cm0gfHwgIXN0cm0uc3RhdGUpIHsgcmV0dXJuIFpfU1RSRUFNX0VSUk9SOyB9XG4gIHN0YXRlID0gc3RybS5zdGF0ZTtcbiAgaWYgKChzdGF0ZS53cmFwICYgMikgPT09IDApIHsgcmV0dXJuIFpfU1RSRUFNX0VSUk9SOyB9XG5cbiAgLyogc2F2ZSBoZWFkZXIgc3RydWN0dXJlICovXG4gIHN0YXRlLmhlYWQgPSBoZWFkO1xuICBoZWFkLmRvbmUgPSBmYWxzZTtcbiAgcmV0dXJuIFpfT0s7XG59XG5cbmZ1bmN0aW9uIGluZmxhdGVTZXREaWN0aW9uYXJ5KHN0cm0sIGRpY3Rpb25hcnkpIHtcbiAgdmFyIGRpY3RMZW5ndGggPSBkaWN0aW9uYXJ5Lmxlbmd0aDtcblxuICB2YXIgc3RhdGU7XG4gIHZhciBkaWN0aWQ7XG4gIHZhciByZXQ7XG5cbiAgLyogY2hlY2sgc3RhdGUgKi9cbiAgaWYgKCFzdHJtIC8qID09IFpfTlVMTCAqLyB8fCAhc3RybS5zdGF0ZSAvKiA9PSBaX05VTEwgKi8pIHsgcmV0dXJuIFpfU1RSRUFNX0VSUk9SOyB9XG4gIHN0YXRlID0gc3RybS5zdGF0ZTtcblxuICBpZiAoc3RhdGUud3JhcCAhPT0gMCAmJiBzdGF0ZS5tb2RlICE9PSBESUNUKSB7XG4gICAgcmV0dXJuIFpfU1RSRUFNX0VSUk9SO1xuICB9XG5cbiAgLyogY2hlY2sgZm9yIGNvcnJlY3QgZGljdGlvbmFyeSBpZGVudGlmaWVyICovXG4gIGlmIChzdGF0ZS5tb2RlID09PSBESUNUKSB7XG4gICAgZGljdGlkID0gMTsgLyogYWRsZXIzMigwLCBudWxsLCAwKSovXG4gICAgLyogZGljdGlkID0gYWRsZXIzMihkaWN0aWQsIGRpY3Rpb25hcnksIGRpY3RMZW5ndGgpOyAqL1xuICAgIGRpY3RpZCA9IGFkbGVyMzIoZGljdGlkLCBkaWN0aW9uYXJ5LCBkaWN0TGVuZ3RoLCAwKTtcbiAgICBpZiAoZGljdGlkICE9PSBzdGF0ZS5jaGVjaykge1xuICAgICAgcmV0dXJuIFpfREFUQV9FUlJPUjtcbiAgICB9XG4gIH1cbiAgLyogY29weSBkaWN0aW9uYXJ5IHRvIHdpbmRvdyB1c2luZyB1cGRhdGV3aW5kb3coKSwgd2hpY2ggd2lsbCBhbWVuZCB0aGVcbiAgIGV4aXN0aW5nIGRpY3Rpb25hcnkgaWYgYXBwcm9wcmlhdGUgKi9cbiAgcmV0ID0gdXBkYXRld2luZG93KHN0cm0sIGRpY3Rpb25hcnksIGRpY3RMZW5ndGgsIGRpY3RMZW5ndGgpO1xuICBpZiAocmV0KSB7XG4gICAgc3RhdGUubW9kZSA9IE1FTTtcbiAgICByZXR1cm4gWl9NRU1fRVJST1I7XG4gIH1cbiAgc3RhdGUuaGF2ZWRpY3QgPSAxO1xuICAvLyBUcmFjZXYoKHN0ZGVyciwgXCJpbmZsYXRlOiAgIGRpY3Rpb25hcnkgc2V0XFxuXCIpKTtcbiAgcmV0dXJuIFpfT0s7XG59XG5cbmV4cG9ydHMuaW5mbGF0ZVJlc2V0ID0gaW5mbGF0ZVJlc2V0O1xuZXhwb3J0cy5pbmZsYXRlUmVzZXQyID0gaW5mbGF0ZVJlc2V0MjtcbmV4cG9ydHMuaW5mbGF0ZVJlc2V0S2VlcCA9IGluZmxhdGVSZXNldEtlZXA7XG5leHBvcnRzLmluZmxhdGVJbml0ID0gaW5mbGF0ZUluaXQ7XG5leHBvcnRzLmluZmxhdGVJbml0MiA9IGluZmxhdGVJbml0MjtcbmV4cG9ydHMuaW5mbGF0ZSA9IGluZmxhdGU7XG5leHBvcnRzLmluZmxhdGVFbmQgPSBpbmZsYXRlRW5kO1xuZXhwb3J0cy5pbmZsYXRlR2V0SGVhZGVyID0gaW5mbGF0ZUdldEhlYWRlcjtcbmV4cG9ydHMuaW5mbGF0ZVNldERpY3Rpb25hcnkgPSBpbmZsYXRlU2V0RGljdGlvbmFyeTtcbmV4cG9ydHMuaW5mbGF0ZUluZm8gPSAncGFrbyBpbmZsYXRlIChmcm9tIE5vZGVjYSBwcm9qZWN0KSc7XG5cbi8qIE5vdCBpbXBsZW1lbnRlZFxuZXhwb3J0cy5pbmZsYXRlQ29weSA9IGluZmxhdGVDb3B5O1xuZXhwb3J0cy5pbmZsYXRlR2V0RGljdGlvbmFyeSA9IGluZmxhdGVHZXREaWN0aW9uYXJ5O1xuZXhwb3J0cy5pbmZsYXRlTWFyayA9IGluZmxhdGVNYXJrO1xuZXhwb3J0cy5pbmZsYXRlUHJpbWUgPSBpbmZsYXRlUHJpbWU7XG5leHBvcnRzLmluZmxhdGVTeW5jID0gaW5mbGF0ZVN5bmM7XG5leHBvcnRzLmluZmxhdGVTeW5jUG9pbnQgPSBpbmZsYXRlU3luY1BvaW50O1xuZXhwb3J0cy5pbmZsYXRlVW5kZXJtaW5lID0gaW5mbGF0ZVVuZGVybWluZTtcbiovXG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvY29tbW9uJyk7XG5cbnZhciBNQVhCSVRTID0gMTU7XG52YXIgRU5PVUdIX0xFTlMgPSA4NTI7XG52YXIgRU5PVUdIX0RJU1RTID0gNTkyO1xuLy92YXIgRU5PVUdIID0gKEVOT1VHSF9MRU5TK0VOT1VHSF9ESVNUUyk7XG5cbnZhciBDT0RFUyA9IDA7XG52YXIgTEVOUyA9IDE7XG52YXIgRElTVFMgPSAyO1xuXG52YXIgbGJhc2UgPSBbIC8qIExlbmd0aCBjb2RlcyAyNTcuLjI4NSBiYXNlICovXG4gIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTMsIDE1LCAxNywgMTksIDIzLCAyNywgMzEsXG4gIDM1LCA0MywgNTEsIDU5LCA2NywgODMsIDk5LCAxMTUsIDEzMSwgMTYzLCAxOTUsIDIyNywgMjU4LCAwLCAwXG5dO1xuXG52YXIgbGV4dCA9IFsgLyogTGVuZ3RoIGNvZGVzIDI1Ny4uMjg1IGV4dHJhICovXG4gIDE2LCAxNiwgMTYsIDE2LCAxNiwgMTYsIDE2LCAxNiwgMTcsIDE3LCAxNywgMTcsIDE4LCAxOCwgMTgsIDE4LFxuICAxOSwgMTksIDE5LCAxOSwgMjAsIDIwLCAyMCwgMjAsIDIxLCAyMSwgMjEsIDIxLCAxNiwgNzIsIDc4XG5dO1xuXG52YXIgZGJhc2UgPSBbIC8qIERpc3RhbmNlIGNvZGVzIDAuLjI5IGJhc2UgKi9cbiAgMSwgMiwgMywgNCwgNSwgNywgOSwgMTMsIDE3LCAyNSwgMzMsIDQ5LCA2NSwgOTcsIDEyOSwgMTkzLFxuICAyNTcsIDM4NSwgNTEzLCA3NjksIDEwMjUsIDE1MzcsIDIwNDksIDMwNzMsIDQwOTcsIDYxNDUsXG4gIDgxOTMsIDEyMjg5LCAxNjM4NSwgMjQ1NzcsIDAsIDBcbl07XG5cbnZhciBkZXh0ID0gWyAvKiBEaXN0YW5jZSBjb2RlcyAwLi4yOSBleHRyYSAqL1xuICAxNiwgMTYsIDE2LCAxNiwgMTcsIDE3LCAxOCwgMTgsIDE5LCAxOSwgMjAsIDIwLCAyMSwgMjEsIDIyLCAyMixcbiAgMjMsIDIzLCAyNCwgMjQsIDI1LCAyNSwgMjYsIDI2LCAyNywgMjcsXG4gIDI4LCAyOCwgMjksIDI5LCA2NCwgNjRcbl07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5mbGF0ZV90YWJsZSh0eXBlLCBsZW5zLCBsZW5zX2luZGV4LCBjb2RlcywgdGFibGUsIHRhYmxlX2luZGV4LCB3b3JrLCBvcHRzKVxue1xuICB2YXIgYml0cyA9IG9wdHMuYml0cztcbiAgICAgIC8vaGVyZSA9IG9wdHMuaGVyZTsgLyogdGFibGUgZW50cnkgZm9yIGR1cGxpY2F0aW9uICovXG5cbiAgdmFyIGxlbiA9IDA7ICAgICAgICAgICAgICAgLyogYSBjb2RlJ3MgbGVuZ3RoIGluIGJpdHMgKi9cbiAgdmFyIHN5bSA9IDA7ICAgICAgICAgICAgICAgLyogaW5kZXggb2YgY29kZSBzeW1ib2xzICovXG4gIHZhciBtaW4gPSAwLCBtYXggPSAwOyAgICAgICAgICAvKiBtaW5pbXVtIGFuZCBtYXhpbXVtIGNvZGUgbGVuZ3RocyAqL1xuICB2YXIgcm9vdCA9IDA7ICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgaW5kZXggYml0cyBmb3Igcm9vdCB0YWJsZSAqL1xuICB2YXIgY3VyciA9IDA7ICAgICAgICAgICAgICAvKiBudW1iZXIgb2YgaW5kZXggYml0cyBmb3IgY3VycmVudCB0YWJsZSAqL1xuICB2YXIgZHJvcCA9IDA7ICAgICAgICAgICAgICAvKiBjb2RlIGJpdHMgdG8gZHJvcCBmb3Igc3ViLXRhYmxlICovXG4gIHZhciBsZWZ0ID0gMDsgICAgICAgICAgICAgICAgICAgLyogbnVtYmVyIG9mIHByZWZpeCBjb2RlcyBhdmFpbGFibGUgKi9cbiAgdmFyIHVzZWQgPSAwOyAgICAgICAgICAgICAgLyogY29kZSBlbnRyaWVzIGluIHRhYmxlIHVzZWQgKi9cbiAgdmFyIGh1ZmYgPSAwOyAgICAgICAgICAgICAgLyogSHVmZm1hbiBjb2RlICovXG4gIHZhciBpbmNyOyAgICAgICAgICAgICAgLyogZm9yIGluY3JlbWVudGluZyBjb2RlLCBpbmRleCAqL1xuICB2YXIgZmlsbDsgICAgICAgICAgICAgIC8qIGluZGV4IGZvciByZXBsaWNhdGluZyBlbnRyaWVzICovXG4gIHZhciBsb3c7ICAgICAgICAgICAgICAgLyogbG93IGJpdHMgZm9yIGN1cnJlbnQgcm9vdCBlbnRyeSAqL1xuICB2YXIgbWFzazsgICAgICAgICAgICAgIC8qIG1hc2sgZm9yIGxvdyByb290IGJpdHMgKi9cbiAgdmFyIG5leHQ7ICAgICAgICAgICAgIC8qIG5leHQgYXZhaWxhYmxlIHNwYWNlIGluIHRhYmxlICovXG4gIHZhciBiYXNlID0gbnVsbDsgICAgIC8qIGJhc2UgdmFsdWUgdGFibGUgdG8gdXNlICovXG4gIHZhciBiYXNlX2luZGV4ID0gMDtcbi8vICB2YXIgc2hvZXh0cmE7ICAgIC8qIGV4dHJhIGJpdHMgdGFibGUgdG8gdXNlICovXG4gIHZhciBlbmQ7ICAgICAgICAgICAgICAgICAgICAvKiB1c2UgYmFzZSBhbmQgZXh0cmEgZm9yIHN5bWJvbCA+IGVuZCAqL1xuICB2YXIgY291bnQgPSBuZXcgdXRpbHMuQnVmMTYoTUFYQklUUyArIDEpOyAvL1tNQVhCSVRTKzFdOyAgICAvKiBudW1iZXIgb2YgY29kZXMgb2YgZWFjaCBsZW5ndGggKi9cbiAgdmFyIG9mZnMgPSBuZXcgdXRpbHMuQnVmMTYoTUFYQklUUyArIDEpOyAvL1tNQVhCSVRTKzFdOyAgICAgLyogb2Zmc2V0cyBpbiB0YWJsZSBmb3IgZWFjaCBsZW5ndGggKi9cbiAgdmFyIGV4dHJhID0gbnVsbDtcbiAgdmFyIGV4dHJhX2luZGV4ID0gMDtcblxuICB2YXIgaGVyZV9iaXRzLCBoZXJlX29wLCBoZXJlX3ZhbDtcblxuICAvKlxuICAgUHJvY2VzcyBhIHNldCBvZiBjb2RlIGxlbmd0aHMgdG8gY3JlYXRlIGEgY2Fub25pY2FsIEh1ZmZtYW4gY29kZS4gIFRoZVxuICAgY29kZSBsZW5ndGhzIGFyZSBsZW5zWzAuLmNvZGVzLTFdLiAgRWFjaCBsZW5ndGggY29ycmVzcG9uZHMgdG8gdGhlXG4gICBzeW1ib2xzIDAuLmNvZGVzLTEuICBUaGUgSHVmZm1hbiBjb2RlIGlzIGdlbmVyYXRlZCBieSBmaXJzdCBzb3J0aW5nIHRoZVxuICAgc3ltYm9scyBieSBsZW5ndGggZnJvbSBzaG9ydCB0byBsb25nLCBhbmQgcmV0YWluaW5nIHRoZSBzeW1ib2wgb3JkZXJcbiAgIGZvciBjb2RlcyB3aXRoIGVxdWFsIGxlbmd0aHMuICBUaGVuIHRoZSBjb2RlIHN0YXJ0cyB3aXRoIGFsbCB6ZXJvIGJpdHNcbiAgIGZvciB0aGUgZmlyc3QgY29kZSBvZiB0aGUgc2hvcnRlc3QgbGVuZ3RoLCBhbmQgdGhlIGNvZGVzIGFyZSBpbnRlZ2VyXG4gICBpbmNyZW1lbnRzIGZvciB0aGUgc2FtZSBsZW5ndGgsIGFuZCB6ZXJvcyBhcmUgYXBwZW5kZWQgYXMgdGhlIGxlbmd0aFxuICAgaW5jcmVhc2VzLiAgRm9yIHRoZSBkZWZsYXRlIGZvcm1hdCwgdGhlc2UgYml0cyBhcmUgc3RvcmVkIGJhY2t3YXJkc1xuICAgZnJvbSB0aGVpciBtb3JlIG5hdHVyYWwgaW50ZWdlciBpbmNyZW1lbnQgb3JkZXJpbmcsIGFuZCBzbyB3aGVuIHRoZVxuICAgZGVjb2RpbmcgdGFibGVzIGFyZSBidWlsdCBpbiB0aGUgbGFyZ2UgbG9vcCBiZWxvdywgdGhlIGludGVnZXIgY29kZXNcbiAgIGFyZSBpbmNyZW1lbnRlZCBiYWNrd2FyZHMuXG5cbiAgIFRoaXMgcm91dGluZSBhc3N1bWVzLCBidXQgZG9lcyBub3QgY2hlY2ssIHRoYXQgYWxsIG9mIHRoZSBlbnRyaWVzIGluXG4gICBsZW5zW10gYXJlIGluIHRoZSByYW5nZSAwLi5NQVhCSVRTLiAgVGhlIGNhbGxlciBtdXN0IGFzc3VyZSB0aGlzLlxuICAgMS4uTUFYQklUUyBpcyBpbnRlcnByZXRlZCBhcyB0aGF0IGNvZGUgbGVuZ3RoLiAgemVybyBtZWFucyB0aGF0IHRoYXRcbiAgIHN5bWJvbCBkb2VzIG5vdCBvY2N1ciBpbiB0aGlzIGNvZGUuXG5cbiAgIFRoZSBjb2RlcyBhcmUgc29ydGVkIGJ5IGNvbXB1dGluZyBhIGNvdW50IG9mIGNvZGVzIGZvciBlYWNoIGxlbmd0aCxcbiAgIGNyZWF0aW5nIGZyb20gdGhhdCBhIHRhYmxlIG9mIHN0YXJ0aW5nIGluZGljZXMgZm9yIGVhY2ggbGVuZ3RoIGluIHRoZVxuICAgc29ydGVkIHRhYmxlLCBhbmQgdGhlbiBlbnRlcmluZyB0aGUgc3ltYm9scyBpbiBvcmRlciBpbiB0aGUgc29ydGVkXG4gICB0YWJsZS4gIFRoZSBzb3J0ZWQgdGFibGUgaXMgd29ya1tdLCB3aXRoIHRoYXQgc3BhY2UgYmVpbmcgcHJvdmlkZWQgYnlcbiAgIHRoZSBjYWxsZXIuXG5cbiAgIFRoZSBsZW5ndGggY291bnRzIGFyZSB1c2VkIGZvciBvdGhlciBwdXJwb3NlcyBhcyB3ZWxsLCBpLmUuIGZpbmRpbmdcbiAgIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGxlbmd0aCBjb2RlcywgZGV0ZXJtaW5pbmcgaWYgdGhlcmUgYXJlIGFueVxuICAgY29kZXMgYXQgYWxsLCBjaGVja2luZyBmb3IgYSB2YWxpZCBzZXQgb2YgbGVuZ3RocywgYW5kIGxvb2tpbmcgYWhlYWRcbiAgIGF0IGxlbmd0aCBjb3VudHMgdG8gZGV0ZXJtaW5lIHN1Yi10YWJsZSBzaXplcyB3aGVuIGJ1aWxkaW5nIHRoZVxuICAgZGVjb2RpbmcgdGFibGVzLlxuICAgKi9cblxuICAvKiBhY2N1bXVsYXRlIGxlbmd0aHMgZm9yIGNvZGVzIChhc3N1bWVzIGxlbnNbXSBhbGwgaW4gMC4uTUFYQklUUykgKi9cbiAgZm9yIChsZW4gPSAwOyBsZW4gPD0gTUFYQklUUzsgbGVuKyspIHtcbiAgICBjb3VudFtsZW5dID0gMDtcbiAgfVxuICBmb3IgKHN5bSA9IDA7IHN5bSA8IGNvZGVzOyBzeW0rKykge1xuICAgIGNvdW50W2xlbnNbbGVuc19pbmRleCArIHN5bV1dKys7XG4gIH1cblxuICAvKiBib3VuZCBjb2RlIGxlbmd0aHMsIGZvcmNlIHJvb3QgdG8gYmUgd2l0aGluIGNvZGUgbGVuZ3RocyAqL1xuICByb290ID0gYml0cztcbiAgZm9yIChtYXggPSBNQVhCSVRTOyBtYXggPj0gMTsgbWF4LS0pIHtcbiAgICBpZiAoY291bnRbbWF4XSAhPT0gMCkgeyBicmVhazsgfVxuICB9XG4gIGlmIChyb290ID4gbWF4KSB7XG4gICAgcm9vdCA9IG1heDtcbiAgfVxuICBpZiAobWF4ID09PSAwKSB7ICAgICAgICAgICAgICAgICAgICAgLyogbm8gc3ltYm9scyB0byBjb2RlIGF0IGFsbCAqL1xuICAgIC8vdGFibGUub3Bbb3B0cy50YWJsZV9pbmRleF0gPSA2NDsgIC8vaGVyZS5vcCA9ICh2YXIgY2hhcik2NDsgICAgLyogaW52YWxpZCBjb2RlIG1hcmtlciAqL1xuICAgIC8vdGFibGUuYml0c1tvcHRzLnRhYmxlX2luZGV4XSA9IDE7ICAgLy9oZXJlLmJpdHMgPSAodmFyIGNoYXIpMTtcbiAgICAvL3RhYmxlLnZhbFtvcHRzLnRhYmxlX2luZGV4KytdID0gMDsgICAvL2hlcmUudmFsID0gKHZhciBzaG9ydCkwO1xuICAgIHRhYmxlW3RhYmxlX2luZGV4KytdID0gKDEgPDwgMjQpIHwgKDY0IDw8IDE2KSB8IDA7XG5cblxuICAgIC8vdGFibGUub3Bbb3B0cy50YWJsZV9pbmRleF0gPSA2NDtcbiAgICAvL3RhYmxlLmJpdHNbb3B0cy50YWJsZV9pbmRleF0gPSAxO1xuICAgIC8vdGFibGUudmFsW29wdHMudGFibGVfaW5kZXgrK10gPSAwO1xuICAgIHRhYmxlW3RhYmxlX2luZGV4KytdID0gKDEgPDwgMjQpIHwgKDY0IDw8IDE2KSB8IDA7XG5cbiAgICBvcHRzLmJpdHMgPSAxO1xuICAgIHJldHVybiAwOyAgICAgLyogbm8gc3ltYm9scywgYnV0IHdhaXQgZm9yIGRlY29kaW5nIHRvIHJlcG9ydCBlcnJvciAqL1xuICB9XG4gIGZvciAobWluID0gMTsgbWluIDwgbWF4OyBtaW4rKykge1xuICAgIGlmIChjb3VudFttaW5dICE9PSAwKSB7IGJyZWFrOyB9XG4gIH1cbiAgaWYgKHJvb3QgPCBtaW4pIHtcbiAgICByb290ID0gbWluO1xuICB9XG5cbiAgLyogY2hlY2sgZm9yIGFuIG92ZXItc3Vic2NyaWJlZCBvciBpbmNvbXBsZXRlIHNldCBvZiBsZW5ndGhzICovXG4gIGxlZnQgPSAxO1xuICBmb3IgKGxlbiA9IDE7IGxlbiA8PSBNQVhCSVRTOyBsZW4rKykge1xuICAgIGxlZnQgPDw9IDE7XG4gICAgbGVmdCAtPSBjb3VudFtsZW5dO1xuICAgIGlmIChsZWZ0IDwgMCkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gICAgICAgIC8qIG92ZXItc3Vic2NyaWJlZCAqL1xuICB9XG4gIGlmIChsZWZ0ID4gMCAmJiAodHlwZSA9PT0gQ09ERVMgfHwgbWF4ICE9PSAxKSkge1xuICAgIHJldHVybiAtMTsgICAgICAgICAgICAgICAgICAgICAgLyogaW5jb21wbGV0ZSBzZXQgKi9cbiAgfVxuXG4gIC8qIGdlbmVyYXRlIG9mZnNldHMgaW50byBzeW1ib2wgdGFibGUgZm9yIGVhY2ggbGVuZ3RoIGZvciBzb3J0aW5nICovXG4gIG9mZnNbMV0gPSAwO1xuICBmb3IgKGxlbiA9IDE7IGxlbiA8IE1BWEJJVFM7IGxlbisrKSB7XG4gICAgb2Zmc1tsZW4gKyAxXSA9IG9mZnNbbGVuXSArIGNvdW50W2xlbl07XG4gIH1cblxuICAvKiBzb3J0IHN5bWJvbHMgYnkgbGVuZ3RoLCBieSBzeW1ib2wgb3JkZXIgd2l0aGluIGVhY2ggbGVuZ3RoICovXG4gIGZvciAoc3ltID0gMDsgc3ltIDwgY29kZXM7IHN5bSsrKSB7XG4gICAgaWYgKGxlbnNbbGVuc19pbmRleCArIHN5bV0gIT09IDApIHtcbiAgICAgIHdvcmtbb2Zmc1tsZW5zW2xlbnNfaW5kZXggKyBzeW1dXSsrXSA9IHN5bTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgQ3JlYXRlIGFuZCBmaWxsIGluIGRlY29kaW5nIHRhYmxlcy4gIEluIHRoaXMgbG9vcCwgdGhlIHRhYmxlIGJlaW5nXG4gICBmaWxsZWQgaXMgYXQgbmV4dCBhbmQgaGFzIGN1cnIgaW5kZXggYml0cy4gIFRoZSBjb2RlIGJlaW5nIHVzZWQgaXMgaHVmZlxuICAgd2l0aCBsZW5ndGggbGVuLiAgVGhhdCBjb2RlIGlzIGNvbnZlcnRlZCB0byBhbiBpbmRleCBieSBkcm9wcGluZyBkcm9wXG4gICBiaXRzIG9mZiBvZiB0aGUgYm90dG9tLiAgRm9yIGNvZGVzIHdoZXJlIGxlbiBpcyBsZXNzIHRoYW4gZHJvcCArIGN1cnIsXG4gICB0aG9zZSB0b3AgZHJvcCArIGN1cnIgLSBsZW4gYml0cyBhcmUgaW5jcmVtZW50ZWQgdGhyb3VnaCBhbGwgdmFsdWVzIHRvXG4gICBmaWxsIHRoZSB0YWJsZSB3aXRoIHJlcGxpY2F0ZWQgZW50cmllcy5cblxuICAgcm9vdCBpcyB0aGUgbnVtYmVyIG9mIGluZGV4IGJpdHMgZm9yIHRoZSByb290IHRhYmxlLiAgV2hlbiBsZW4gZXhjZWVkc1xuICAgcm9vdCwgc3ViLXRhYmxlcyBhcmUgY3JlYXRlZCBwb2ludGVkIHRvIGJ5IHRoZSByb290IGVudHJ5IHdpdGggYW4gaW5kZXhcbiAgIG9mIHRoZSBsb3cgcm9vdCBiaXRzIG9mIGh1ZmYuICBUaGlzIGlzIHNhdmVkIGluIGxvdyB0byBjaGVjayBmb3Igd2hlbiBhXG4gICBuZXcgc3ViLXRhYmxlIHNob3VsZCBiZSBzdGFydGVkLiAgZHJvcCBpcyB6ZXJvIHdoZW4gdGhlIHJvb3QgdGFibGUgaXNcbiAgIGJlaW5nIGZpbGxlZCwgYW5kIGRyb3AgaXMgcm9vdCB3aGVuIHN1Yi10YWJsZXMgYXJlIGJlaW5nIGZpbGxlZC5cblxuICAgV2hlbiBhIG5ldyBzdWItdGFibGUgaXMgbmVlZGVkLCBpdCBpcyBuZWNlc3NhcnkgdG8gbG9vayBhaGVhZCBpbiB0aGVcbiAgIGNvZGUgbGVuZ3RocyB0byBkZXRlcm1pbmUgd2hhdCBzaXplIHN1Yi10YWJsZSBpcyBuZWVkZWQuICBUaGUgbGVuZ3RoXG4gICBjb3VudHMgYXJlIHVzZWQgZm9yIHRoaXMsIGFuZCBzbyBjb3VudFtdIGlzIGRlY3JlbWVudGVkIGFzIGNvZGVzIGFyZVxuICAgZW50ZXJlZCBpbiB0aGUgdGFibGVzLlxuXG4gICB1c2VkIGtlZXBzIHRyYWNrIG9mIGhvdyBtYW55IHRhYmxlIGVudHJpZXMgaGF2ZSBiZWVuIGFsbG9jYXRlZCBmcm9tIHRoZVxuICAgcHJvdmlkZWQgKnRhYmxlIHNwYWNlLiAgSXQgaXMgY2hlY2tlZCBmb3IgTEVOUyBhbmQgRElTVCB0YWJsZXMgYWdhaW5zdFxuICAgdGhlIGNvbnN0YW50cyBFTk9VR0hfTEVOUyBhbmQgRU5PVUdIX0RJU1RTIHRvIGd1YXJkIGFnYWluc3QgY2hhbmdlcyBpblxuICAgdGhlIGluaXRpYWwgcm9vdCB0YWJsZSBzaXplIGNvbnN0YW50cy4gIFNlZSB0aGUgY29tbWVudHMgaW4gaW5mdHJlZXMuaFxuICAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG5cbiAgIHN5bSBpbmNyZW1lbnRzIHRocm91Z2ggYWxsIHN5bWJvbHMsIGFuZCB0aGUgbG9vcCB0ZXJtaW5hdGVzIHdoZW5cbiAgIGFsbCBjb2RlcyBvZiBsZW5ndGggbWF4LCBpLmUuIGFsbCBjb2RlcywgaGF2ZSBiZWVuIHByb2Nlc3NlZC4gIFRoaXNcbiAgIHJvdXRpbmUgcGVybWl0cyBpbmNvbXBsZXRlIGNvZGVzLCBzbyBhbm90aGVyIGxvb3AgYWZ0ZXIgdGhpcyBvbmUgZmlsbHNcbiAgIGluIHRoZSByZXN0IG9mIHRoZSBkZWNvZGluZyB0YWJsZXMgd2l0aCBpbnZhbGlkIGNvZGUgbWFya2Vycy5cbiAgICovXG5cbiAgLyogc2V0IHVwIGZvciBjb2RlIHR5cGUgKi9cbiAgLy8gcG9vciBtYW4gb3B0aW1pemF0aW9uIC0gdXNlIGlmLWVsc2UgaW5zdGVhZCBvZiBzd2l0Y2gsXG4gIC8vIHRvIGF2b2lkIGRlb3B0cyBpbiBvbGQgdjhcbiAgaWYgKHR5cGUgPT09IENPREVTKSB7XG4gICAgYmFzZSA9IGV4dHJhID0gd29yazsgICAgLyogZHVtbXkgdmFsdWUtLW5vdCB1c2VkICovXG4gICAgZW5kID0gMTk7XG5cbiAgfSBlbHNlIGlmICh0eXBlID09PSBMRU5TKSB7XG4gICAgYmFzZSA9IGxiYXNlO1xuICAgIGJhc2VfaW5kZXggLT0gMjU3O1xuICAgIGV4dHJhID0gbGV4dDtcbiAgICBleHRyYV9pbmRleCAtPSAyNTc7XG4gICAgZW5kID0gMjU2O1xuXG4gIH0gZWxzZSB7ICAgICAgICAgICAgICAgICAgICAvKiBESVNUUyAqL1xuICAgIGJhc2UgPSBkYmFzZTtcbiAgICBleHRyYSA9IGRleHQ7XG4gICAgZW5kID0gLTE7XG4gIH1cblxuICAvKiBpbml0aWFsaXplIG9wdHMgZm9yIGxvb3AgKi9cbiAgaHVmZiA9IDA7ICAgICAgICAgICAgICAgICAgIC8qIHN0YXJ0aW5nIGNvZGUgKi9cbiAgc3ltID0gMDsgICAgICAgICAgICAgICAgICAgIC8qIHN0YXJ0aW5nIGNvZGUgc3ltYm9sICovXG4gIGxlbiA9IG1pbjsgICAgICAgICAgICAgICAgICAvKiBzdGFydGluZyBjb2RlIGxlbmd0aCAqL1xuICBuZXh0ID0gdGFibGVfaW5kZXg7ICAgICAgICAgICAgICAvKiBjdXJyZW50IHRhYmxlIHRvIGZpbGwgaW4gKi9cbiAgY3VyciA9IHJvb3Q7ICAgICAgICAgICAgICAgIC8qIGN1cnJlbnQgdGFibGUgaW5kZXggYml0cyAqL1xuICBkcm9wID0gMDsgICAgICAgICAgICAgICAgICAgLyogY3VycmVudCBiaXRzIHRvIGRyb3AgZnJvbSBjb2RlIGZvciBpbmRleCAqL1xuICBsb3cgPSAtMTsgICAgICAgICAgICAgICAgICAgLyogdHJpZ2dlciBuZXcgc3ViLXRhYmxlIHdoZW4gbGVuID4gcm9vdCAqL1xuICB1c2VkID0gMSA8PCByb290OyAgICAgICAgICAvKiB1c2Ugcm9vdCB0YWJsZSBlbnRyaWVzICovXG4gIG1hc2sgPSB1c2VkIC0gMTsgICAgICAgICAgICAvKiBtYXNrIGZvciBjb21wYXJpbmcgbG93ICovXG5cbiAgLyogY2hlY2sgYXZhaWxhYmxlIHRhYmxlIHNwYWNlICovXG4gIGlmICgodHlwZSA9PT0gTEVOUyAmJiB1c2VkID4gRU5PVUdIX0xFTlMpIHx8XG4gICAgKHR5cGUgPT09IERJU1RTICYmIHVzZWQgPiBFTk9VR0hfRElTVFMpKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICAvKiBwcm9jZXNzIGFsbCBjb2RlcyBhbmQgbWFrZSB0YWJsZSBlbnRyaWVzICovXG4gIGZvciAoOzspIHtcbiAgICAvKiBjcmVhdGUgdGFibGUgZW50cnkgKi9cbiAgICBoZXJlX2JpdHMgPSBsZW4gLSBkcm9wO1xuICAgIGlmICh3b3JrW3N5bV0gPCBlbmQpIHtcbiAgICAgIGhlcmVfb3AgPSAwO1xuICAgICAgaGVyZV92YWwgPSB3b3JrW3N5bV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHdvcmtbc3ltXSA+IGVuZCkge1xuICAgICAgaGVyZV9vcCA9IGV4dHJhW2V4dHJhX2luZGV4ICsgd29ya1tzeW1dXTtcbiAgICAgIGhlcmVfdmFsID0gYmFzZVtiYXNlX2luZGV4ICsgd29ya1tzeW1dXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBoZXJlX29wID0gMzIgKyA2NDsgICAgICAgICAvKiBlbmQgb2YgYmxvY2sgKi9cbiAgICAgIGhlcmVfdmFsID0gMDtcbiAgICB9XG5cbiAgICAvKiByZXBsaWNhdGUgZm9yIHRob3NlIGluZGljZXMgd2l0aCBsb3cgbGVuIGJpdHMgZXF1YWwgdG8gaHVmZiAqL1xuICAgIGluY3IgPSAxIDw8IChsZW4gLSBkcm9wKTtcbiAgICBmaWxsID0gMSA8PCBjdXJyO1xuICAgIG1pbiA9IGZpbGw7ICAgICAgICAgICAgICAgICAvKiBzYXZlIG9mZnNldCB0byBuZXh0IHRhYmxlICovXG4gICAgZG8ge1xuICAgICAgZmlsbCAtPSBpbmNyO1xuICAgICAgdGFibGVbbmV4dCArIChodWZmID4+IGRyb3ApICsgZmlsbF0gPSAoaGVyZV9iaXRzIDw8IDI0KSB8IChoZXJlX29wIDw8IDE2KSB8IGhlcmVfdmFsIHwwO1xuICAgIH0gd2hpbGUgKGZpbGwgIT09IDApO1xuXG4gICAgLyogYmFja3dhcmRzIGluY3JlbWVudCB0aGUgbGVuLWJpdCBjb2RlIGh1ZmYgKi9cbiAgICBpbmNyID0gMSA8PCAobGVuIC0gMSk7XG4gICAgd2hpbGUgKGh1ZmYgJiBpbmNyKSB7XG4gICAgICBpbmNyID4+PSAxO1xuICAgIH1cbiAgICBpZiAoaW5jciAhPT0gMCkge1xuICAgICAgaHVmZiAmPSBpbmNyIC0gMTtcbiAgICAgIGh1ZmYgKz0gaW5jcjtcbiAgICB9IGVsc2Uge1xuICAgICAgaHVmZiA9IDA7XG4gICAgfVxuXG4gICAgLyogZ28gdG8gbmV4dCBzeW1ib2wsIHVwZGF0ZSBjb3VudCwgbGVuICovXG4gICAgc3ltKys7XG4gICAgaWYgKC0tY291bnRbbGVuXSA9PT0gMCkge1xuICAgICAgaWYgKGxlbiA9PT0gbWF4KSB7IGJyZWFrOyB9XG4gICAgICBsZW4gPSBsZW5zW2xlbnNfaW5kZXggKyB3b3JrW3N5bV1dO1xuICAgIH1cblxuICAgIC8qIGNyZWF0ZSBuZXcgc3ViLXRhYmxlIGlmIG5lZWRlZCAqL1xuICAgIGlmIChsZW4gPiByb290ICYmIChodWZmICYgbWFzaykgIT09IGxvdykge1xuICAgICAgLyogaWYgZmlyc3QgdGltZSwgdHJhbnNpdGlvbiB0byBzdWItdGFibGVzICovXG4gICAgICBpZiAoZHJvcCA9PT0gMCkge1xuICAgICAgICBkcm9wID0gcm9vdDtcbiAgICAgIH1cblxuICAgICAgLyogaW5jcmVtZW50IHBhc3QgbGFzdCB0YWJsZSAqL1xuICAgICAgbmV4dCArPSBtaW47ICAgICAgICAgICAgLyogaGVyZSBtaW4gaXMgMSA8PCBjdXJyICovXG5cbiAgICAgIC8qIGRldGVybWluZSBsZW5ndGggb2YgbmV4dCB0YWJsZSAqL1xuICAgICAgY3VyciA9IGxlbiAtIGRyb3A7XG4gICAgICBsZWZ0ID0gMSA8PCBjdXJyO1xuICAgICAgd2hpbGUgKGN1cnIgKyBkcm9wIDwgbWF4KSB7XG4gICAgICAgIGxlZnQgLT0gY291bnRbY3VyciArIGRyb3BdO1xuICAgICAgICBpZiAobGVmdCA8PSAwKSB7IGJyZWFrOyB9XG4gICAgICAgIGN1cnIrKztcbiAgICAgICAgbGVmdCA8PD0gMTtcbiAgICAgIH1cblxuICAgICAgLyogY2hlY2sgZm9yIGVub3VnaCBzcGFjZSAqL1xuICAgICAgdXNlZCArPSAxIDw8IGN1cnI7XG4gICAgICBpZiAoKHR5cGUgPT09IExFTlMgJiYgdXNlZCA+IEVOT1VHSF9MRU5TKSB8fFxuICAgICAgICAodHlwZSA9PT0gRElTVFMgJiYgdXNlZCA+IEVOT1VHSF9ESVNUUykpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIC8qIHBvaW50IGVudHJ5IGluIHJvb3QgdGFibGUgdG8gc3ViLXRhYmxlICovXG4gICAgICBsb3cgPSBodWZmICYgbWFzaztcbiAgICAgIC8qdGFibGUub3BbbG93XSA9IGN1cnI7XG4gICAgICB0YWJsZS5iaXRzW2xvd10gPSByb290O1xuICAgICAgdGFibGUudmFsW2xvd10gPSBuZXh0IC0gb3B0cy50YWJsZV9pbmRleDsqL1xuICAgICAgdGFibGVbbG93XSA9IChyb290IDw8IDI0KSB8IChjdXJyIDw8IDE2KSB8IChuZXh0IC0gdGFibGVfaW5kZXgpIHwwO1xuICAgIH1cbiAgfVxuXG4gIC8qIGZpbGwgaW4gcmVtYWluaW5nIHRhYmxlIGVudHJ5IGlmIGNvZGUgaXMgaW5jb21wbGV0ZSAoZ3VhcmFudGVlZCB0byBoYXZlXG4gICBhdCBtb3N0IG9uZSByZW1haW5pbmcgZW50cnksIHNpbmNlIGlmIHRoZSBjb2RlIGlzIGluY29tcGxldGUsIHRoZVxuICAgbWF4aW11bSBjb2RlIGxlbmd0aCB0aGF0IHdhcyBhbGxvd2VkIHRvIGdldCB0aGlzIGZhciBpcyBvbmUgYml0KSAqL1xuICBpZiAoaHVmZiAhPT0gMCkge1xuICAgIC8vdGFibGUub3BbbmV4dCArIGh1ZmZdID0gNjQ7ICAgICAgICAgICAgLyogaW52YWxpZCBjb2RlIG1hcmtlciAqL1xuICAgIC8vdGFibGUuYml0c1tuZXh0ICsgaHVmZl0gPSBsZW4gLSBkcm9wO1xuICAgIC8vdGFibGUudmFsW25leHQgKyBodWZmXSA9IDA7XG4gICAgdGFibGVbbmV4dCArIGh1ZmZdID0gKChsZW4gLSBkcm9wKSA8PCAyNCkgfCAoNjQgPDwgMTYpIHwwO1xuICB9XG5cbiAgLyogc2V0IHJldHVybiBwYXJhbWV0ZXJzICovXG4gIC8vb3B0cy50YWJsZV9pbmRleCArPSB1c2VkO1xuICBvcHRzLmJpdHMgPSByb290O1xuICByZXR1cm4gMDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIDI6ICAgICAgJ25lZWQgZGljdGlvbmFyeScsICAgICAvKiBaX05FRURfRElDVCAgICAgICAyICAqL1xuICAxOiAgICAgICdzdHJlYW0gZW5kJywgICAgICAgICAgLyogWl9TVFJFQU1fRU5EICAgICAgMSAgKi9cbiAgMDogICAgICAnJywgICAgICAgICAgICAgICAgICAgIC8qIFpfT0sgICAgICAgICAgICAgIDAgICovXG4gICctMSc6ICAgJ2ZpbGUgZXJyb3InLCAgICAgICAgICAvKiBaX0VSUk5PICAgICAgICAgKC0xKSAqL1xuICAnLTInOiAgICdzdHJlYW0gZXJyb3InLCAgICAgICAgLyogWl9TVFJFQU1fRVJST1IgICgtMikgKi9cbiAgJy0zJzogICAnZGF0YSBlcnJvcicsICAgICAgICAgIC8qIFpfREFUQV9FUlJPUiAgICAoLTMpICovXG4gICctNCc6ICAgJ2luc3VmZmljaWVudCBtZW1vcnknLCAvKiBaX01FTV9FUlJPUiAgICAgKC00KSAqL1xuICAnLTUnOiAgICdidWZmZXIgZXJyb3InLCAgICAgICAgLyogWl9CVUZfRVJST1IgICAgICgtNSkgKi9cbiAgJy02JzogICAnaW5jb21wYXRpYmxlIHZlcnNpb24nIC8qIFpfVkVSU0lPTl9FUlJPUiAoLTYpICovXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAoQykgMTk5NS0yMDEzIEplYW4tbG91cCBHYWlsbHkgYW5kIE1hcmsgQWRsZXJcbi8vIChDKSAyMDE0LTIwMTcgVml0YWx5IFB1enJpbiBhbmQgQW5kcmV5IFR1cGl0c2luXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyBwcm92aWRlZCAnYXMtaXMnLCB3aXRob3V0IGFueSBleHByZXNzIG9yIGltcGxpZWRcbi8vIHdhcnJhbnR5LiBJbiBubyBldmVudCB3aWxsIHRoZSBhdXRob3JzIGJlIGhlbGQgbGlhYmxlIGZvciBhbnkgZGFtYWdlc1xuLy8gYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2YgdGhpcyBzb2Z0d2FyZS5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGdyYW50ZWQgdG8gYW55b25lIHRvIHVzZSB0aGlzIHNvZnR3YXJlIGZvciBhbnkgcHVycG9zZSxcbi8vIGluY2x1ZGluZyBjb21tZXJjaWFsIGFwcGxpY2F0aW9ucywgYW5kIHRvIGFsdGVyIGl0IGFuZCByZWRpc3RyaWJ1dGUgaXRcbi8vIGZyZWVseSwgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIHJlc3RyaWN0aW9uczpcbi8vXG4vLyAxLiBUaGUgb3JpZ2luIG9mIHRoaXMgc29mdHdhcmUgbXVzdCBub3QgYmUgbWlzcmVwcmVzZW50ZWQ7IHlvdSBtdXN0IG5vdFxuLy8gICBjbGFpbSB0aGF0IHlvdSB3cm90ZSB0aGUgb3JpZ2luYWwgc29mdHdhcmUuIElmIHlvdSB1c2UgdGhpcyBzb2Z0d2FyZVxuLy8gICBpbiBhIHByb2R1Y3QsIGFuIGFja25vd2xlZGdtZW50IGluIHRoZSBwcm9kdWN0IGRvY3VtZW50YXRpb24gd291bGQgYmVcbi8vICAgYXBwcmVjaWF0ZWQgYnV0IGlzIG5vdCByZXF1aXJlZC5cbi8vIDIuIEFsdGVyZWQgc291cmNlIHZlcnNpb25zIG11c3QgYmUgcGxhaW5seSBtYXJrZWQgYXMgc3VjaCwgYW5kIG11c3Qgbm90IGJlXG4vLyAgIG1pc3JlcHJlc2VudGVkIGFzIGJlaW5nIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS5cbi8vIDMuIFRoaXMgbm90aWNlIG1heSBub3QgYmUgcmVtb3ZlZCBvciBhbHRlcmVkIGZyb20gYW55IHNvdXJjZSBkaXN0cmlidXRpb24uXG5cbi8qIGVzbGludC1kaXNhYmxlIHNwYWNlLXVuYXJ5LW9wcyAqL1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy9jb21tb24nKTtcblxuLyogUHVibGljIGNvbnN0YW50cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxuLy92YXIgWl9GSUxURVJFRCAgICAgICAgICA9IDE7XG4vL3ZhciBaX0hVRkZNQU5fT05MWSAgICAgID0gMjtcbi8vdmFyIFpfUkxFICAgICAgICAgICAgICAgPSAzO1xudmFyIFpfRklYRUQgICAgICAgICAgICAgICA9IDQ7XG4vL3ZhciBaX0RFRkFVTFRfU1RSQVRFR1kgID0gMDtcblxuLyogUG9zc2libGUgdmFsdWVzIG9mIHRoZSBkYXRhX3R5cGUgZmllbGQgKHRob3VnaCBzZWUgaW5mbGF0ZSgpKSAqL1xudmFyIFpfQklOQVJZICAgICAgICAgICAgICA9IDA7XG52YXIgWl9URVhUICAgICAgICAgICAgICAgID0gMTtcbi8vdmFyIFpfQVNDSUkgICAgICAgICAgICAgPSAxOyAvLyA9IFpfVEVYVFxudmFyIFpfVU5LTk9XTiAgICAgICAgICAgICA9IDI7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cblxuZnVuY3Rpb24gemVybyhidWYpIHsgdmFyIGxlbiA9IGJ1Zi5sZW5ndGg7IHdoaWxlICgtLWxlbiA+PSAwKSB7IGJ1ZltsZW5dID0gMDsgfSB9XG5cbi8vIEZyb20genV0aWwuaFxuXG52YXIgU1RPUkVEX0JMT0NLID0gMDtcbnZhciBTVEFUSUNfVFJFRVMgPSAxO1xudmFyIERZTl9UUkVFUyAgICA9IDI7XG4vKiBUaGUgdGhyZWUga2luZHMgb2YgYmxvY2sgdHlwZSAqL1xuXG52YXIgTUlOX01BVENIICAgID0gMztcbnZhciBNQVhfTUFUQ0ggICAgPSAyNTg7XG4vKiBUaGUgbWluaW11bSBhbmQgbWF4aW11bSBtYXRjaCBsZW5ndGhzICovXG5cbi8vIEZyb20gZGVmbGF0ZS5oXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEludGVybmFsIGNvbXByZXNzaW9uIHN0YXRlLlxuICovXG5cbnZhciBMRU5HVEhfQ09ERVMgID0gMjk7XG4vKiBudW1iZXIgb2YgbGVuZ3RoIGNvZGVzLCBub3QgY291bnRpbmcgdGhlIHNwZWNpYWwgRU5EX0JMT0NLIGNvZGUgKi9cblxudmFyIExJVEVSQUxTICAgICAgPSAyNTY7XG4vKiBudW1iZXIgb2YgbGl0ZXJhbCBieXRlcyAwLi4yNTUgKi9cblxudmFyIExfQ09ERVMgICAgICAgPSBMSVRFUkFMUyArIDEgKyBMRU5HVEhfQ09ERVM7XG4vKiBudW1iZXIgb2YgTGl0ZXJhbCBvciBMZW5ndGggY29kZXMsIGluY2x1ZGluZyB0aGUgRU5EX0JMT0NLIGNvZGUgKi9cblxudmFyIERfQ09ERVMgICAgICAgPSAzMDtcbi8qIG51bWJlciBvZiBkaXN0YW5jZSBjb2RlcyAqL1xuXG52YXIgQkxfQ09ERVMgICAgICA9IDE5O1xuLyogbnVtYmVyIG9mIGNvZGVzIHVzZWQgdG8gdHJhbnNmZXIgdGhlIGJpdCBsZW5ndGhzICovXG5cbnZhciBIRUFQX1NJWkUgICAgID0gMiAqIExfQ09ERVMgKyAxO1xuLyogbWF4aW11bSBoZWFwIHNpemUgKi9cblxudmFyIE1BWF9CSVRTICAgICAgPSAxNTtcbi8qIEFsbCBjb2RlcyBtdXN0IG5vdCBleGNlZWQgTUFYX0JJVFMgYml0cyAqL1xuXG52YXIgQnVmX3NpemUgICAgICA9IDE2O1xuLyogc2l6ZSBvZiBiaXQgYnVmZmVyIGluIGJpX2J1ZiAqL1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29uc3RhbnRzXG4gKi9cblxudmFyIE1BWF9CTF9CSVRTID0gNztcbi8qIEJpdCBsZW5ndGggY29kZXMgbXVzdCBub3QgZXhjZWVkIE1BWF9CTF9CSVRTIGJpdHMgKi9cblxudmFyIEVORF9CTE9DSyAgID0gMjU2O1xuLyogZW5kIG9mIGJsb2NrIGxpdGVyYWwgY29kZSAqL1xuXG52YXIgUkVQXzNfNiAgICAgPSAxNjtcbi8qIHJlcGVhdCBwcmV2aW91cyBiaXQgbGVuZ3RoIDMtNiB0aW1lcyAoMiBiaXRzIG9mIHJlcGVhdCBjb3VudCkgKi9cblxudmFyIFJFUFpfM18xMCAgID0gMTc7XG4vKiByZXBlYXQgYSB6ZXJvIGxlbmd0aCAzLTEwIHRpbWVzICAoMyBiaXRzIG9mIHJlcGVhdCBjb3VudCkgKi9cblxudmFyIFJFUFpfMTFfMTM4ID0gMTg7XG4vKiByZXBlYXQgYSB6ZXJvIGxlbmd0aCAxMS0xMzggdGltZXMgICg3IGJpdHMgb2YgcmVwZWF0IGNvdW50KSAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1zcGFjaW5nLGFycmF5LWJyYWNrZXQtc3BhY2luZyAqL1xudmFyIGV4dHJhX2xiaXRzID0gICAvKiBleHRyYSBiaXRzIGZvciBlYWNoIGxlbmd0aCBjb2RlICovXG4gIFswLDAsMCwwLDAsMCwwLDAsMSwxLDEsMSwyLDIsMiwyLDMsMywzLDMsNCw0LDQsNCw1LDUsNSw1LDBdO1xuXG52YXIgZXh0cmFfZGJpdHMgPSAgIC8qIGV4dHJhIGJpdHMgZm9yIGVhY2ggZGlzdGFuY2UgY29kZSAqL1xuICBbMCwwLDAsMCwxLDEsMiwyLDMsMyw0LDQsNSw1LDYsNiw3LDcsOCw4LDksOSwxMCwxMCwxMSwxMSwxMiwxMiwxMywxM107XG5cbnZhciBleHRyYV9ibGJpdHMgPSAgLyogZXh0cmEgYml0cyBmb3IgZWFjaCBiaXQgbGVuZ3RoIGNvZGUgKi9cbiAgWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMiwzLDddO1xuXG52YXIgYmxfb3JkZXIgPVxuICBbMTYsMTcsMTgsMCw4LDcsOSw2LDEwLDUsMTEsNCwxMiwzLDEzLDIsMTQsMSwxNV07XG4vKiBlc2xpbnQtZW5hYmxlIGNvbW1hLXNwYWNpbmcsYXJyYXktYnJhY2tldC1zcGFjaW5nICovXG5cbi8qIFRoZSBsZW5ndGhzIG9mIHRoZSBiaXQgbGVuZ3RoIGNvZGVzIGFyZSBzZW50IGluIG9yZGVyIG9mIGRlY3JlYXNpbmdcbiAqIHByb2JhYmlsaXR5LCB0byBhdm9pZCB0cmFuc21pdHRpbmcgdGhlIGxlbmd0aHMgZm9yIHVudXNlZCBiaXQgbGVuZ3RoIGNvZGVzLlxuICovXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogTG9jYWwgZGF0YS4gVGhlc2UgYXJlIGluaXRpYWxpemVkIG9ubHkgb25jZS5cbiAqL1xuXG4vLyBXZSBwcmUtZmlsbCBhcnJheXMgd2l0aCAwIHRvIGF2b2lkIHVuaW5pdGlhbGl6ZWQgZ2Fwc1xuXG52YXIgRElTVF9DT0RFX0xFTiA9IDUxMjsgLyogc2VlIGRlZmluaXRpb24gb2YgYXJyYXkgZGlzdF9jb2RlIGJlbG93ICovXG5cbi8vICEhISEgVXNlIGZsYXQgYXJyYXkgaW5zdGVhZCBvZiBzdHJ1Y3R1cmUsIEZyZXEgPSBpKjIsIExlbiA9IGkqMisxXG52YXIgc3RhdGljX2x0cmVlICA9IG5ldyBBcnJheSgoTF9DT0RFUyArIDIpICogMik7XG56ZXJvKHN0YXRpY19sdHJlZSk7XG4vKiBUaGUgc3RhdGljIGxpdGVyYWwgdHJlZS4gU2luY2UgdGhlIGJpdCBsZW5ndGhzIGFyZSBpbXBvc2VkLCB0aGVyZSBpcyBub1xuICogbmVlZCBmb3IgdGhlIExfQ09ERVMgZXh0cmEgY29kZXMgdXNlZCBkdXJpbmcgaGVhcCBjb25zdHJ1Y3Rpb24uIEhvd2V2ZXJcbiAqIFRoZSBjb2RlcyAyODYgYW5kIDI4NyBhcmUgbmVlZGVkIHRvIGJ1aWxkIGEgY2Fub25pY2FsIHRyZWUgKHNlZSBfdHJfaW5pdFxuICogYmVsb3cpLlxuICovXG5cbnZhciBzdGF0aWNfZHRyZWUgID0gbmV3IEFycmF5KERfQ09ERVMgKiAyKTtcbnplcm8oc3RhdGljX2R0cmVlKTtcbi8qIFRoZSBzdGF0aWMgZGlzdGFuY2UgdHJlZS4gKEFjdHVhbGx5IGEgdHJpdmlhbCB0cmVlIHNpbmNlIGFsbCBjb2RlcyB1c2VcbiAqIDUgYml0cy4pXG4gKi9cblxudmFyIF9kaXN0X2NvZGUgICAgPSBuZXcgQXJyYXkoRElTVF9DT0RFX0xFTik7XG56ZXJvKF9kaXN0X2NvZGUpO1xuLyogRGlzdGFuY2UgY29kZXMuIFRoZSBmaXJzdCAyNTYgdmFsdWVzIGNvcnJlc3BvbmQgdG8gdGhlIGRpc3RhbmNlc1xuICogMyAuLiAyNTgsIHRoZSBsYXN0IDI1NiB2YWx1ZXMgY29ycmVzcG9uZCB0byB0aGUgdG9wIDggYml0cyBvZlxuICogdGhlIDE1IGJpdCBkaXN0YW5jZXMuXG4gKi9cblxudmFyIF9sZW5ndGhfY29kZSAgPSBuZXcgQXJyYXkoTUFYX01BVENIIC0gTUlOX01BVENIICsgMSk7XG56ZXJvKF9sZW5ndGhfY29kZSk7XG4vKiBsZW5ndGggY29kZSBmb3IgZWFjaCBub3JtYWxpemVkIG1hdGNoIGxlbmd0aCAoMCA9PSBNSU5fTUFUQ0gpICovXG5cbnZhciBiYXNlX2xlbmd0aCAgID0gbmV3IEFycmF5KExFTkdUSF9DT0RFUyk7XG56ZXJvKGJhc2VfbGVuZ3RoKTtcbi8qIEZpcnN0IG5vcm1hbGl6ZWQgbGVuZ3RoIGZvciBlYWNoIGNvZGUgKDAgPSBNSU5fTUFUQ0gpICovXG5cbnZhciBiYXNlX2Rpc3QgICAgID0gbmV3IEFycmF5KERfQ09ERVMpO1xuemVybyhiYXNlX2Rpc3QpO1xuLyogRmlyc3Qgbm9ybWFsaXplZCBkaXN0YW5jZSBmb3IgZWFjaCBjb2RlICgwID0gZGlzdGFuY2Ugb2YgMSkgKi9cblxuXG5mdW5jdGlvbiBTdGF0aWNUcmVlRGVzYyhzdGF0aWNfdHJlZSwgZXh0cmFfYml0cywgZXh0cmFfYmFzZSwgZWxlbXMsIG1heF9sZW5ndGgpIHtcblxuICB0aGlzLnN0YXRpY190cmVlICA9IHN0YXRpY190cmVlOyAgLyogc3RhdGljIHRyZWUgb3IgTlVMTCAqL1xuICB0aGlzLmV4dHJhX2JpdHMgICA9IGV4dHJhX2JpdHM7ICAgLyogZXh0cmEgYml0cyBmb3IgZWFjaCBjb2RlIG9yIE5VTEwgKi9cbiAgdGhpcy5leHRyYV9iYXNlICAgPSBleHRyYV9iYXNlOyAgIC8qIGJhc2UgaW5kZXggZm9yIGV4dHJhX2JpdHMgKi9cbiAgdGhpcy5lbGVtcyAgICAgICAgPSBlbGVtczsgICAgICAgIC8qIG1heCBudW1iZXIgb2YgZWxlbWVudHMgaW4gdGhlIHRyZWUgKi9cbiAgdGhpcy5tYXhfbGVuZ3RoICAgPSBtYXhfbGVuZ3RoOyAgIC8qIG1heCBiaXQgbGVuZ3RoIGZvciB0aGUgY29kZXMgKi9cblxuICAvLyBzaG93IGlmIGBzdGF0aWNfdHJlZWAgaGFzIGRhdGEgb3IgZHVtbXkgLSBuZWVkZWQgZm9yIG1vbm9tb3JwaGljIG9iamVjdHNcbiAgdGhpcy5oYXNfc3RyZWUgICAgPSBzdGF0aWNfdHJlZSAmJiBzdGF0aWNfdHJlZS5sZW5ndGg7XG59XG5cblxudmFyIHN0YXRpY19sX2Rlc2M7XG52YXIgc3RhdGljX2RfZGVzYztcbnZhciBzdGF0aWNfYmxfZGVzYztcblxuXG5mdW5jdGlvbiBUcmVlRGVzYyhkeW5fdHJlZSwgc3RhdF9kZXNjKSB7XG4gIHRoaXMuZHluX3RyZWUgPSBkeW5fdHJlZTsgICAgIC8qIHRoZSBkeW5hbWljIHRyZWUgKi9cbiAgdGhpcy5tYXhfY29kZSA9IDA7ICAgICAgICAgICAgLyogbGFyZ2VzdCBjb2RlIHdpdGggbm9uIHplcm8gZnJlcXVlbmN5ICovXG4gIHRoaXMuc3RhdF9kZXNjID0gc3RhdF9kZXNjOyAgIC8qIHRoZSBjb3JyZXNwb25kaW5nIHN0YXRpYyB0cmVlICovXG59XG5cblxuXG5mdW5jdGlvbiBkX2NvZGUoZGlzdCkge1xuICByZXR1cm4gZGlzdCA8IDI1NiA/IF9kaXN0X2NvZGVbZGlzdF0gOiBfZGlzdF9jb2RlWzI1NiArIChkaXN0ID4+PiA3KV07XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBPdXRwdXQgYSBzaG9ydCBMU0IgZmlyc3Qgb24gdGhlIHN0cmVhbS5cbiAqIElOIGFzc2VydGlvbjogdGhlcmUgaXMgZW5vdWdoIHJvb20gaW4gcGVuZGluZ0J1Zi5cbiAqL1xuZnVuY3Rpb24gcHV0X3Nob3J0KHMsIHcpIHtcbi8vICAgIHB1dF9ieXRlKHMsICh1Y2gpKCh3KSAmIDB4ZmYpKTtcbi8vICAgIHB1dF9ieXRlKHMsICh1Y2gpKCh1c2gpKHcpID4+IDgpKTtcbiAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSAodykgJiAweGZmO1xuICBzLnBlbmRpbmdfYnVmW3MucGVuZGluZysrXSA9ICh3ID4+PiA4KSAmIDB4ZmY7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIGEgdmFsdWUgb24gYSBnaXZlbiBudW1iZXIgb2YgYml0cy5cbiAqIElOIGFzc2VydGlvbjogbGVuZ3RoIDw9IDE2IGFuZCB2YWx1ZSBmaXRzIGluIGxlbmd0aCBiaXRzLlxuICovXG5mdW5jdGlvbiBzZW5kX2JpdHMocywgdmFsdWUsIGxlbmd0aCkge1xuICBpZiAocy5iaV92YWxpZCA+IChCdWZfc2l6ZSAtIGxlbmd0aCkpIHtcbiAgICBzLmJpX2J1ZiB8PSAodmFsdWUgPDwgcy5iaV92YWxpZCkgJiAweGZmZmY7XG4gICAgcHV0X3Nob3J0KHMsIHMuYmlfYnVmKTtcbiAgICBzLmJpX2J1ZiA9IHZhbHVlID4+IChCdWZfc2l6ZSAtIHMuYmlfdmFsaWQpO1xuICAgIHMuYmlfdmFsaWQgKz0gbGVuZ3RoIC0gQnVmX3NpemU7XG4gIH0gZWxzZSB7XG4gICAgcy5iaV9idWYgfD0gKHZhbHVlIDw8IHMuYmlfdmFsaWQpICYgMHhmZmZmO1xuICAgIHMuYmlfdmFsaWQgKz0gbGVuZ3RoO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc2VuZF9jb2RlKHMsIGMsIHRyZWUpIHtcbiAgc2VuZF9iaXRzKHMsIHRyZWVbYyAqIDJdLyouQ29kZSovLCB0cmVlW2MgKiAyICsgMV0vKi5MZW4qLyk7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBSZXZlcnNlIHRoZSBmaXJzdCBsZW4gYml0cyBvZiBhIGNvZGUsIHVzaW5nIHN0cmFpZ2h0Zm9yd2FyZCBjb2RlIChhIGZhc3RlclxuICogbWV0aG9kIHdvdWxkIHVzZSBhIHRhYmxlKVxuICogSU4gYXNzZXJ0aW9uOiAxIDw9IGxlbiA8PSAxNVxuICovXG5mdW5jdGlvbiBiaV9yZXZlcnNlKGNvZGUsIGxlbikge1xuICB2YXIgcmVzID0gMDtcbiAgZG8ge1xuICAgIHJlcyB8PSBjb2RlICYgMTtcbiAgICBjb2RlID4+Pj0gMTtcbiAgICByZXMgPDw9IDE7XG4gIH0gd2hpbGUgKC0tbGVuID4gMCk7XG4gIHJldHVybiByZXMgPj4+IDE7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGbHVzaCB0aGUgYml0IGJ1ZmZlciwga2VlcGluZyBhdCBtb3N0IDcgYml0cyBpbiBpdC5cbiAqL1xuZnVuY3Rpb24gYmlfZmx1c2gocykge1xuICBpZiAocy5iaV92YWxpZCA9PT0gMTYpIHtcbiAgICBwdXRfc2hvcnQocywgcy5iaV9idWYpO1xuICAgIHMuYmlfYnVmID0gMDtcbiAgICBzLmJpX3ZhbGlkID0gMDtcblxuICB9IGVsc2UgaWYgKHMuYmlfdmFsaWQgPj0gOCkge1xuICAgIHMucGVuZGluZ19idWZbcy5wZW5kaW5nKytdID0gcy5iaV9idWYgJiAweGZmO1xuICAgIHMuYmlfYnVmID4+PSA4O1xuICAgIHMuYmlfdmFsaWQgLT0gODtcbiAgfVxufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29tcHV0ZSB0aGUgb3B0aW1hbCBiaXQgbGVuZ3RocyBmb3IgYSB0cmVlIGFuZCB1cGRhdGUgdGhlIHRvdGFsIGJpdCBsZW5ndGhcbiAqIGZvciB0aGUgY3VycmVudCBibG9jay5cbiAqIElOIGFzc2VydGlvbjogdGhlIGZpZWxkcyBmcmVxIGFuZCBkYWQgYXJlIHNldCwgaGVhcFtoZWFwX21heF0gYW5kXG4gKiAgICBhYm92ZSBhcmUgdGhlIHRyZWUgbm9kZXMgc29ydGVkIGJ5IGluY3JlYXNpbmcgZnJlcXVlbmN5LlxuICogT1VUIGFzc2VydGlvbnM6IHRoZSBmaWVsZCBsZW4gaXMgc2V0IHRvIHRoZSBvcHRpbWFsIGJpdCBsZW5ndGgsIHRoZVxuICogICAgIGFycmF5IGJsX2NvdW50IGNvbnRhaW5zIHRoZSBmcmVxdWVuY2llcyBmb3IgZWFjaCBiaXQgbGVuZ3RoLlxuICogICAgIFRoZSBsZW5ndGggb3B0X2xlbiBpcyB1cGRhdGVkOyBzdGF0aWNfbGVuIGlzIGFsc28gdXBkYXRlZCBpZiBzdHJlZSBpc1xuICogICAgIG5vdCBudWxsLlxuICovXG5mdW5jdGlvbiBnZW5fYml0bGVuKHMsIGRlc2MpXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgdHJlZV9kZXNjICpkZXNjOyAgICAvKiB0aGUgdHJlZSBkZXNjcmlwdG9yICovXG57XG4gIHZhciB0cmVlICAgICAgICAgICAgPSBkZXNjLmR5bl90cmVlO1xuICB2YXIgbWF4X2NvZGUgICAgICAgID0gZGVzYy5tYXhfY29kZTtcbiAgdmFyIHN0cmVlICAgICAgICAgICA9IGRlc2Muc3RhdF9kZXNjLnN0YXRpY190cmVlO1xuICB2YXIgaGFzX3N0cmVlICAgICAgID0gZGVzYy5zdGF0X2Rlc2MuaGFzX3N0cmVlO1xuICB2YXIgZXh0cmEgICAgICAgICAgID0gZGVzYy5zdGF0X2Rlc2MuZXh0cmFfYml0cztcbiAgdmFyIGJhc2UgICAgICAgICAgICA9IGRlc2Muc3RhdF9kZXNjLmV4dHJhX2Jhc2U7XG4gIHZhciBtYXhfbGVuZ3RoICAgICAgPSBkZXNjLnN0YXRfZGVzYy5tYXhfbGVuZ3RoO1xuICB2YXIgaDsgICAgICAgICAgICAgIC8qIGhlYXAgaW5kZXggKi9cbiAgdmFyIG4sIG07ICAgICAgICAgICAvKiBpdGVyYXRlIG92ZXIgdGhlIHRyZWUgZWxlbWVudHMgKi9cbiAgdmFyIGJpdHM7ICAgICAgICAgICAvKiBiaXQgbGVuZ3RoICovXG4gIHZhciB4Yml0czsgICAgICAgICAgLyogZXh0cmEgYml0cyAqL1xuICB2YXIgZjsgICAgICAgICAgICAgIC8qIGZyZXF1ZW5jeSAqL1xuICB2YXIgb3ZlcmZsb3cgPSAwOyAgIC8qIG51bWJlciBvZiBlbGVtZW50cyB3aXRoIGJpdCBsZW5ndGggdG9vIGxhcmdlICovXG5cbiAgZm9yIChiaXRzID0gMDsgYml0cyA8PSBNQVhfQklUUzsgYml0cysrKSB7XG4gICAgcy5ibF9jb3VudFtiaXRzXSA9IDA7XG4gIH1cblxuICAvKiBJbiBhIGZpcnN0IHBhc3MsIGNvbXB1dGUgdGhlIG9wdGltYWwgYml0IGxlbmd0aHMgKHdoaWNoIG1heVxuICAgKiBvdmVyZmxvdyBpbiB0aGUgY2FzZSBvZiB0aGUgYml0IGxlbmd0aCB0cmVlKS5cbiAgICovXG4gIHRyZWVbcy5oZWFwW3MuaGVhcF9tYXhdICogMiArIDFdLyouTGVuKi8gPSAwOyAvKiByb290IG9mIHRoZSBoZWFwICovXG5cbiAgZm9yIChoID0gcy5oZWFwX21heCArIDE7IGggPCBIRUFQX1NJWkU7IGgrKykge1xuICAgIG4gPSBzLmhlYXBbaF07XG4gICAgYml0cyA9IHRyZWVbdHJlZVtuICogMiArIDFdLyouRGFkKi8gKiAyICsgMV0vKi5MZW4qLyArIDE7XG4gICAgaWYgKGJpdHMgPiBtYXhfbGVuZ3RoKSB7XG4gICAgICBiaXRzID0gbWF4X2xlbmd0aDtcbiAgICAgIG92ZXJmbG93Kys7XG4gICAgfVxuICAgIHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gYml0cztcbiAgICAvKiBXZSBvdmVyd3JpdGUgdHJlZVtuXS5EYWQgd2hpY2ggaXMgbm8gbG9uZ2VyIG5lZWRlZCAqL1xuXG4gICAgaWYgKG4gPiBtYXhfY29kZSkgeyBjb250aW51ZTsgfSAvKiBub3QgYSBsZWFmIG5vZGUgKi9cblxuICAgIHMuYmxfY291bnRbYml0c10rKztcbiAgICB4Yml0cyA9IDA7XG4gICAgaWYgKG4gPj0gYmFzZSkge1xuICAgICAgeGJpdHMgPSBleHRyYVtuIC0gYmFzZV07XG4gICAgfVxuICAgIGYgPSB0cmVlW24gKiAyXS8qLkZyZXEqLztcbiAgICBzLm9wdF9sZW4gKz0gZiAqIChiaXRzICsgeGJpdHMpO1xuICAgIGlmIChoYXNfc3RyZWUpIHtcbiAgICAgIHMuc3RhdGljX2xlbiArPSBmICogKHN0cmVlW24gKiAyICsgMV0vKi5MZW4qLyArIHhiaXRzKTtcbiAgICB9XG4gIH1cbiAgaWYgKG92ZXJmbG93ID09PSAwKSB7IHJldHVybjsgfVxuXG4gIC8vIFRyYWNlKChzdGRlcnIsXCJcXG5iaXQgbGVuZ3RoIG92ZXJmbG93XFxuXCIpKTtcbiAgLyogVGhpcyBoYXBwZW5zIGZvciBleGFtcGxlIG9uIG9iajIgYW5kIHBpYyBvZiB0aGUgQ2FsZ2FyeSBjb3JwdXMgKi9cblxuICAvKiBGaW5kIHRoZSBmaXJzdCBiaXQgbGVuZ3RoIHdoaWNoIGNvdWxkIGluY3JlYXNlOiAqL1xuICBkbyB7XG4gICAgYml0cyA9IG1heF9sZW5ndGggLSAxO1xuICAgIHdoaWxlIChzLmJsX2NvdW50W2JpdHNdID09PSAwKSB7IGJpdHMtLTsgfVxuICAgIHMuYmxfY291bnRbYml0c10tLTsgICAgICAvKiBtb3ZlIG9uZSBsZWFmIGRvd24gdGhlIHRyZWUgKi9cbiAgICBzLmJsX2NvdW50W2JpdHMgKyAxXSArPSAyOyAvKiBtb3ZlIG9uZSBvdmVyZmxvdyBpdGVtIGFzIGl0cyBicm90aGVyICovXG4gICAgcy5ibF9jb3VudFttYXhfbGVuZ3RoXS0tO1xuICAgIC8qIFRoZSBicm90aGVyIG9mIHRoZSBvdmVyZmxvdyBpdGVtIGFsc28gbW92ZXMgb25lIHN0ZXAgdXAsXG4gICAgICogYnV0IHRoaXMgZG9lcyBub3QgYWZmZWN0IGJsX2NvdW50W21heF9sZW5ndGhdXG4gICAgICovXG4gICAgb3ZlcmZsb3cgLT0gMjtcbiAgfSB3aGlsZSAob3ZlcmZsb3cgPiAwKTtcblxuICAvKiBOb3cgcmVjb21wdXRlIGFsbCBiaXQgbGVuZ3Rocywgc2Nhbm5pbmcgaW4gaW5jcmVhc2luZyBmcmVxdWVuY3kuXG4gICAqIGggaXMgc3RpbGwgZXF1YWwgdG8gSEVBUF9TSVpFLiAoSXQgaXMgc2ltcGxlciB0byByZWNvbnN0cnVjdCBhbGxcbiAgICogbGVuZ3RocyBpbnN0ZWFkIG9mIGZpeGluZyBvbmx5IHRoZSB3cm9uZyBvbmVzLiBUaGlzIGlkZWEgaXMgdGFrZW5cbiAgICogZnJvbSAnYXInIHdyaXR0ZW4gYnkgSGFydWhpa28gT2t1bXVyYS4pXG4gICAqL1xuICBmb3IgKGJpdHMgPSBtYXhfbGVuZ3RoOyBiaXRzICE9PSAwOyBiaXRzLS0pIHtcbiAgICBuID0gcy5ibF9jb3VudFtiaXRzXTtcbiAgICB3aGlsZSAobiAhPT0gMCkge1xuICAgICAgbSA9IHMuaGVhcFstLWhdO1xuICAgICAgaWYgKG0gPiBtYXhfY29kZSkgeyBjb250aW51ZTsgfVxuICAgICAgaWYgKHRyZWVbbSAqIDIgKyAxXS8qLkxlbiovICE9PSBiaXRzKSB7XG4gICAgICAgIC8vIFRyYWNlKChzdGRlcnIsXCJjb2RlICVkIGJpdHMgJWQtPiVkXFxuXCIsIG0sIHRyZWVbbV0uTGVuLCBiaXRzKSk7XG4gICAgICAgIHMub3B0X2xlbiArPSAoYml0cyAtIHRyZWVbbSAqIDIgKyAxXS8qLkxlbiovKSAqIHRyZWVbbSAqIDJdLyouRnJlcSovO1xuICAgICAgICB0cmVlW20gKiAyICsgMV0vKi5MZW4qLyA9IGJpdHM7XG4gICAgICB9XG4gICAgICBuLS07XG4gICAgfVxuICB9XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBHZW5lcmF0ZSB0aGUgY29kZXMgZm9yIGEgZ2l2ZW4gdHJlZSBhbmQgYml0IGNvdW50cyAod2hpY2ggbmVlZCBub3QgYmVcbiAqIG9wdGltYWwpLlxuICogSU4gYXNzZXJ0aW9uOiB0aGUgYXJyYXkgYmxfY291bnQgY29udGFpbnMgdGhlIGJpdCBsZW5ndGggc3RhdGlzdGljcyBmb3JcbiAqIHRoZSBnaXZlbiB0cmVlIGFuZCB0aGUgZmllbGQgbGVuIGlzIHNldCBmb3IgYWxsIHRyZWUgZWxlbWVudHMuXG4gKiBPVVQgYXNzZXJ0aW9uOiB0aGUgZmllbGQgY29kZSBpcyBzZXQgZm9yIGFsbCB0cmVlIGVsZW1lbnRzIG9mIG5vblxuICogICAgIHplcm8gY29kZSBsZW5ndGguXG4gKi9cbmZ1bmN0aW9uIGdlbl9jb2Rlcyh0cmVlLCBtYXhfY29kZSwgYmxfY291bnQpXG4vLyAgICBjdF9kYXRhICp0cmVlOyAgICAgICAgICAgICAvKiB0aGUgdHJlZSB0byBkZWNvcmF0ZSAqL1xuLy8gICAgaW50IG1heF9jb2RlOyAgICAgICAgICAgICAgLyogbGFyZ2VzdCBjb2RlIHdpdGggbm9uIHplcm8gZnJlcXVlbmN5ICovXG4vLyAgICB1c2hmICpibF9jb3VudDsgICAgICAgICAgICAvKiBudW1iZXIgb2YgY29kZXMgYXQgZWFjaCBiaXQgbGVuZ3RoICovXG57XG4gIHZhciBuZXh0X2NvZGUgPSBuZXcgQXJyYXkoTUFYX0JJVFMgKyAxKTsgLyogbmV4dCBjb2RlIHZhbHVlIGZvciBlYWNoIGJpdCBsZW5ndGggKi9cbiAgdmFyIGNvZGUgPSAwOyAgICAgICAgICAgICAgLyogcnVubmluZyBjb2RlIHZhbHVlICovXG4gIHZhciBiaXRzOyAgICAgICAgICAgICAgICAgIC8qIGJpdCBpbmRleCAqL1xuICB2YXIgbjsgICAgICAgICAgICAgICAgICAgICAvKiBjb2RlIGluZGV4ICovXG5cbiAgLyogVGhlIGRpc3RyaWJ1dGlvbiBjb3VudHMgYXJlIGZpcnN0IHVzZWQgdG8gZ2VuZXJhdGUgdGhlIGNvZGUgdmFsdWVzXG4gICAqIHdpdGhvdXQgYml0IHJldmVyc2FsLlxuICAgKi9cbiAgZm9yIChiaXRzID0gMTsgYml0cyA8PSBNQVhfQklUUzsgYml0cysrKSB7XG4gICAgbmV4dF9jb2RlW2JpdHNdID0gY29kZSA9IChjb2RlICsgYmxfY291bnRbYml0cyAtIDFdKSA8PCAxO1xuICB9XG4gIC8qIENoZWNrIHRoYXQgdGhlIGJpdCBjb3VudHMgaW4gYmxfY291bnQgYXJlIGNvbnNpc3RlbnQuIFRoZSBsYXN0IGNvZGVcbiAgICogbXVzdCBiZSBhbGwgb25lcy5cbiAgICovXG4gIC8vQXNzZXJ0IChjb2RlICsgYmxfY291bnRbTUFYX0JJVFNdLTEgPT0gKDE8PE1BWF9CSVRTKS0xLFxuICAvLyAgICAgICAgXCJpbmNvbnNpc3RlbnQgYml0IGNvdW50c1wiKTtcbiAgLy9UcmFjZXYoKHN0ZGVycixcIlxcbmdlbl9jb2RlczogbWF4X2NvZGUgJWQgXCIsIG1heF9jb2RlKSk7XG5cbiAgZm9yIChuID0gMDsgIG4gPD0gbWF4X2NvZGU7IG4rKykge1xuICAgIHZhciBsZW4gPSB0cmVlW24gKiAyICsgMV0vKi5MZW4qLztcbiAgICBpZiAobGVuID09PSAwKSB7IGNvbnRpbnVlOyB9XG4gICAgLyogTm93IHJldmVyc2UgdGhlIGJpdHMgKi9cbiAgICB0cmVlW24gKiAyXS8qLkNvZGUqLyA9IGJpX3JldmVyc2UobmV4dF9jb2RlW2xlbl0rKywgbGVuKTtcblxuICAgIC8vVHJhY2Vjdih0cmVlICE9IHN0YXRpY19sdHJlZSwgKHN0ZGVycixcIlxcbm4gJTNkICVjIGwgJTJkIGMgJTR4ICgleCkgXCIsXG4gICAgLy8gICAgIG4sIChpc2dyYXBoKG4pID8gbiA6ICcgJyksIGxlbiwgdHJlZVtuXS5Db2RlLCBuZXh0X2NvZGVbbGVuXS0xKSk7XG4gIH1cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEluaXRpYWxpemUgdGhlIHZhcmlvdXMgJ2NvbnN0YW50JyB0YWJsZXMuXG4gKi9cbmZ1bmN0aW9uIHRyX3N0YXRpY19pbml0KCkge1xuICB2YXIgbjsgICAgICAgIC8qIGl0ZXJhdGVzIG92ZXIgdHJlZSBlbGVtZW50cyAqL1xuICB2YXIgYml0czsgICAgIC8qIGJpdCBjb3VudGVyICovXG4gIHZhciBsZW5ndGg7ICAgLyogbGVuZ3RoIHZhbHVlICovXG4gIHZhciBjb2RlOyAgICAgLyogY29kZSB2YWx1ZSAqL1xuICB2YXIgZGlzdDsgICAgIC8qIGRpc3RhbmNlIGluZGV4ICovXG4gIHZhciBibF9jb3VudCA9IG5ldyBBcnJheShNQVhfQklUUyArIDEpO1xuICAvKiBudW1iZXIgb2YgY29kZXMgYXQgZWFjaCBiaXQgbGVuZ3RoIGZvciBhbiBvcHRpbWFsIHRyZWUgKi9cblxuICAvLyBkbyBjaGVjayBpbiBfdHJfaW5pdCgpXG4gIC8vaWYgKHN0YXRpY19pbml0X2RvbmUpIHJldHVybjtcblxuICAvKiBGb3Igc29tZSBlbWJlZGRlZCB0YXJnZXRzLCBnbG9iYWwgdmFyaWFibGVzIGFyZSBub3QgaW5pdGlhbGl6ZWQ6ICovXG4vKiNpZmRlZiBOT19JTklUX0dMT0JBTF9QT0lOVEVSU1xuICBzdGF0aWNfbF9kZXNjLnN0YXRpY190cmVlID0gc3RhdGljX2x0cmVlO1xuICBzdGF0aWNfbF9kZXNjLmV4dHJhX2JpdHMgPSBleHRyYV9sYml0cztcbiAgc3RhdGljX2RfZGVzYy5zdGF0aWNfdHJlZSA9IHN0YXRpY19kdHJlZTtcbiAgc3RhdGljX2RfZGVzYy5leHRyYV9iaXRzID0gZXh0cmFfZGJpdHM7XG4gIHN0YXRpY19ibF9kZXNjLmV4dHJhX2JpdHMgPSBleHRyYV9ibGJpdHM7XG4jZW5kaWYqL1xuXG4gIC8qIEluaXRpYWxpemUgdGhlIG1hcHBpbmcgbGVuZ3RoICgwLi4yNTUpIC0+IGxlbmd0aCBjb2RlICgwLi4yOCkgKi9cbiAgbGVuZ3RoID0gMDtcbiAgZm9yIChjb2RlID0gMDsgY29kZSA8IExFTkdUSF9DT0RFUyAtIDE7IGNvZGUrKykge1xuICAgIGJhc2VfbGVuZ3RoW2NvZGVdID0gbGVuZ3RoO1xuICAgIGZvciAobiA9IDA7IG4gPCAoMSA8PCBleHRyYV9sYml0c1tjb2RlXSk7IG4rKykge1xuICAgICAgX2xlbmd0aF9jb2RlW2xlbmd0aCsrXSA9IGNvZGU7XG4gICAgfVxuICB9XG4gIC8vQXNzZXJ0IChsZW5ndGggPT0gMjU2LCBcInRyX3N0YXRpY19pbml0OiBsZW5ndGggIT0gMjU2XCIpO1xuICAvKiBOb3RlIHRoYXQgdGhlIGxlbmd0aCAyNTUgKG1hdGNoIGxlbmd0aCAyNTgpIGNhbiBiZSByZXByZXNlbnRlZFxuICAgKiBpbiB0d28gZGlmZmVyZW50IHdheXM6IGNvZGUgMjg0ICsgNSBiaXRzIG9yIGNvZGUgMjg1LCBzbyB3ZVxuICAgKiBvdmVyd3JpdGUgbGVuZ3RoX2NvZGVbMjU1XSB0byB1c2UgdGhlIGJlc3QgZW5jb2Rpbmc6XG4gICAqL1xuICBfbGVuZ3RoX2NvZGVbbGVuZ3RoIC0gMV0gPSBjb2RlO1xuXG4gIC8qIEluaXRpYWxpemUgdGhlIG1hcHBpbmcgZGlzdCAoMC4uMzJLKSAtPiBkaXN0IGNvZGUgKDAuLjI5KSAqL1xuICBkaXN0ID0gMDtcbiAgZm9yIChjb2RlID0gMDsgY29kZSA8IDE2OyBjb2RlKyspIHtcbiAgICBiYXNlX2Rpc3RbY29kZV0gPSBkaXN0O1xuICAgIGZvciAobiA9IDA7IG4gPCAoMSA8PCBleHRyYV9kYml0c1tjb2RlXSk7IG4rKykge1xuICAgICAgX2Rpc3RfY29kZVtkaXN0KytdID0gY29kZTtcbiAgICB9XG4gIH1cbiAgLy9Bc3NlcnQgKGRpc3QgPT0gMjU2LCBcInRyX3N0YXRpY19pbml0OiBkaXN0ICE9IDI1NlwiKTtcbiAgZGlzdCA+Pj0gNzsgLyogZnJvbSBub3cgb24sIGFsbCBkaXN0YW5jZXMgYXJlIGRpdmlkZWQgYnkgMTI4ICovXG4gIGZvciAoOyBjb2RlIDwgRF9DT0RFUzsgY29kZSsrKSB7XG4gICAgYmFzZV9kaXN0W2NvZGVdID0gZGlzdCA8PCA3O1xuICAgIGZvciAobiA9IDA7IG4gPCAoMSA8PCAoZXh0cmFfZGJpdHNbY29kZV0gLSA3KSk7IG4rKykge1xuICAgICAgX2Rpc3RfY29kZVsyNTYgKyBkaXN0KytdID0gY29kZTtcbiAgICB9XG4gIH1cbiAgLy9Bc3NlcnQgKGRpc3QgPT0gMjU2LCBcInRyX3N0YXRpY19pbml0OiAyNTYrZGlzdCAhPSA1MTJcIik7XG5cbiAgLyogQ29uc3RydWN0IHRoZSBjb2RlcyBvZiB0aGUgc3RhdGljIGxpdGVyYWwgdHJlZSAqL1xuICBmb3IgKGJpdHMgPSAwOyBiaXRzIDw9IE1BWF9CSVRTOyBiaXRzKyspIHtcbiAgICBibF9jb3VudFtiaXRzXSA9IDA7XG4gIH1cblxuICBuID0gMDtcbiAgd2hpbGUgKG4gPD0gMTQzKSB7XG4gICAgc3RhdGljX2x0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IDg7XG4gICAgbisrO1xuICAgIGJsX2NvdW50WzhdKys7XG4gIH1cbiAgd2hpbGUgKG4gPD0gMjU1KSB7XG4gICAgc3RhdGljX2x0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IDk7XG4gICAgbisrO1xuICAgIGJsX2NvdW50WzldKys7XG4gIH1cbiAgd2hpbGUgKG4gPD0gMjc5KSB7XG4gICAgc3RhdGljX2x0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IDc7XG4gICAgbisrO1xuICAgIGJsX2NvdW50WzddKys7XG4gIH1cbiAgd2hpbGUgKG4gPD0gMjg3KSB7XG4gICAgc3RhdGljX2x0cmVlW24gKiAyICsgMV0vKi5MZW4qLyA9IDg7XG4gICAgbisrO1xuICAgIGJsX2NvdW50WzhdKys7XG4gIH1cbiAgLyogQ29kZXMgMjg2IGFuZCAyODcgZG8gbm90IGV4aXN0LCBidXQgd2UgbXVzdCBpbmNsdWRlIHRoZW0gaW4gdGhlXG4gICAqIHRyZWUgY29uc3RydWN0aW9uIHRvIGdldCBhIGNhbm9uaWNhbCBIdWZmbWFuIHRyZWUgKGxvbmdlc3QgY29kZVxuICAgKiBhbGwgb25lcylcbiAgICovXG4gIGdlbl9jb2RlcyhzdGF0aWNfbHRyZWUsIExfQ09ERVMgKyAxLCBibF9jb3VudCk7XG5cbiAgLyogVGhlIHN0YXRpYyBkaXN0YW5jZSB0cmVlIGlzIHRyaXZpYWw6ICovXG4gIGZvciAobiA9IDA7IG4gPCBEX0NPREVTOyBuKyspIHtcbiAgICBzdGF0aWNfZHRyZWVbbiAqIDIgKyAxXS8qLkxlbiovID0gNTtcbiAgICBzdGF0aWNfZHRyZWVbbiAqIDJdLyouQ29kZSovID0gYmlfcmV2ZXJzZShuLCA1KTtcbiAgfVxuXG4gIC8vIE5vdyBkYXRhIHJlYWR5IGFuZCB3ZSBjYW4gaW5pdCBzdGF0aWMgdHJlZXNcbiAgc3RhdGljX2xfZGVzYyA9IG5ldyBTdGF0aWNUcmVlRGVzYyhzdGF0aWNfbHRyZWUsIGV4dHJhX2xiaXRzLCBMSVRFUkFMUyArIDEsIExfQ09ERVMsIE1BWF9CSVRTKTtcbiAgc3RhdGljX2RfZGVzYyA9IG5ldyBTdGF0aWNUcmVlRGVzYyhzdGF0aWNfZHRyZWUsIGV4dHJhX2RiaXRzLCAwLCAgICAgICAgICBEX0NPREVTLCBNQVhfQklUUyk7XG4gIHN0YXRpY19ibF9kZXNjID0gbmV3IFN0YXRpY1RyZWVEZXNjKG5ldyBBcnJheSgwKSwgZXh0cmFfYmxiaXRzLCAwLCAgICAgICAgIEJMX0NPREVTLCBNQVhfQkxfQklUUyk7XG5cbiAgLy9zdGF0aWNfaW5pdF9kb25lID0gdHJ1ZTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEluaXRpYWxpemUgYSBuZXcgYmxvY2suXG4gKi9cbmZ1bmN0aW9uIGluaXRfYmxvY2socykge1xuICB2YXIgbjsgLyogaXRlcmF0ZXMgb3ZlciB0cmVlIGVsZW1lbnRzICovXG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgdHJlZXMuICovXG4gIGZvciAobiA9IDA7IG4gPCBMX0NPREVTOyAgbisrKSB7IHMuZHluX2x0cmVlW24gKiAyXS8qLkZyZXEqLyA9IDA7IH1cbiAgZm9yIChuID0gMDsgbiA8IERfQ09ERVM7ICBuKyspIHsgcy5keW5fZHRyZWVbbiAqIDJdLyouRnJlcSovID0gMDsgfVxuICBmb3IgKG4gPSAwOyBuIDwgQkxfQ09ERVM7IG4rKykgeyBzLmJsX3RyZWVbbiAqIDJdLyouRnJlcSovID0gMDsgfVxuXG4gIHMuZHluX2x0cmVlW0VORF9CTE9DSyAqIDJdLyouRnJlcSovID0gMTtcbiAgcy5vcHRfbGVuID0gcy5zdGF0aWNfbGVuID0gMDtcbiAgcy5sYXN0X2xpdCA9IHMubWF0Y2hlcyA9IDA7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBGbHVzaCB0aGUgYml0IGJ1ZmZlciBhbmQgYWxpZ24gdGhlIG91dHB1dCBvbiBhIGJ5dGUgYm91bmRhcnlcbiAqL1xuZnVuY3Rpb24gYmlfd2luZHVwKHMpXG57XG4gIGlmIChzLmJpX3ZhbGlkID4gOCkge1xuICAgIHB1dF9zaG9ydChzLCBzLmJpX2J1Zik7XG4gIH0gZWxzZSBpZiAocy5iaV92YWxpZCA+IDApIHtcbiAgICAvL3B1dF9ieXRlKHMsIChCeXRlKXMtPmJpX2J1Zik7XG4gICAgcy5wZW5kaW5nX2J1ZltzLnBlbmRpbmcrK10gPSBzLmJpX2J1ZjtcbiAgfVxuICBzLmJpX2J1ZiA9IDA7XG4gIHMuYmlfdmFsaWQgPSAwO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHkgYSBzdG9yZWQgYmxvY2ssIHN0b3JpbmcgZmlyc3QgdGhlIGxlbmd0aCBhbmQgaXRzXG4gKiBvbmUncyBjb21wbGVtZW50IGlmIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gY29weV9ibG9jayhzLCBidWYsIGxlbiwgaGVhZGVyKVxuLy9EZWZsYXRlU3RhdGUgKnM7XG4vL2NoYXJmICAgICpidWY7ICAgIC8qIHRoZSBpbnB1dCBkYXRhICovXG4vL3Vuc2lnbmVkIGxlbjsgICAgIC8qIGl0cyBsZW5ndGggKi9cbi8vaW50ICAgICAgaGVhZGVyOyAgLyogdHJ1ZSBpZiBibG9jayBoZWFkZXIgbXVzdCBiZSB3cml0dGVuICovXG57XG4gIGJpX3dpbmR1cChzKTsgICAgICAgIC8qIGFsaWduIG9uIGJ5dGUgYm91bmRhcnkgKi9cblxuICBpZiAoaGVhZGVyKSB7XG4gICAgcHV0X3Nob3J0KHMsIGxlbik7XG4gICAgcHV0X3Nob3J0KHMsIH5sZW4pO1xuICB9XG4vLyAgd2hpbGUgKGxlbi0tKSB7XG4vLyAgICBwdXRfYnl0ZShzLCAqYnVmKyspO1xuLy8gIH1cbiAgdXRpbHMuYXJyYXlTZXQocy5wZW5kaW5nX2J1Ziwgcy53aW5kb3csIGJ1ZiwgbGVuLCBzLnBlbmRpbmcpO1xuICBzLnBlbmRpbmcgKz0gbGVuO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvbXBhcmVzIHRvIHN1YnRyZWVzLCB1c2luZyB0aGUgdHJlZSBkZXB0aCBhcyB0aWUgYnJlYWtlciB3aGVuXG4gKiB0aGUgc3VidHJlZXMgaGF2ZSBlcXVhbCBmcmVxdWVuY3kuIFRoaXMgbWluaW1pemVzIHRoZSB3b3JzdCBjYXNlIGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24gc21hbGxlcih0cmVlLCBuLCBtLCBkZXB0aCkge1xuICB2YXIgX24yID0gbiAqIDI7XG4gIHZhciBfbTIgPSBtICogMjtcbiAgcmV0dXJuICh0cmVlW19uMl0vKi5GcmVxKi8gPCB0cmVlW19tMl0vKi5GcmVxKi8gfHxcbiAgICAgICAgICh0cmVlW19uMl0vKi5GcmVxKi8gPT09IHRyZWVbX20yXS8qLkZyZXEqLyAmJiBkZXB0aFtuXSA8PSBkZXB0aFttXSkpO1xufVxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFJlc3RvcmUgdGhlIGhlYXAgcHJvcGVydHkgYnkgbW92aW5nIGRvd24gdGhlIHRyZWUgc3RhcnRpbmcgYXQgbm9kZSBrLFxuICogZXhjaGFuZ2luZyBhIG5vZGUgd2l0aCB0aGUgc21hbGxlc3Qgb2YgaXRzIHR3byBzb25zIGlmIG5lY2Vzc2FyeSwgc3RvcHBpbmdcbiAqIHdoZW4gdGhlIGhlYXAgcHJvcGVydHkgaXMgcmUtZXN0YWJsaXNoZWQgKGVhY2ggZmF0aGVyIHNtYWxsZXIgdGhhbiBpdHNcbiAqIHR3byBzb25zKS5cbiAqL1xuZnVuY3Rpb24gcHFkb3duaGVhcChzLCB0cmVlLCBrKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIGN0X2RhdGEgKnRyZWU7ICAvKiB0aGUgdHJlZSB0byByZXN0b3JlICovXG4vLyAgICBpbnQgazsgICAgICAgICAgICAgICAvKiBub2RlIHRvIG1vdmUgZG93biAqL1xue1xuICB2YXIgdiA9IHMuaGVhcFtrXTtcbiAgdmFyIGogPSBrIDw8IDE7ICAvKiBsZWZ0IHNvbiBvZiBrICovXG4gIHdoaWxlIChqIDw9IHMuaGVhcF9sZW4pIHtcbiAgICAvKiBTZXQgaiB0byB0aGUgc21hbGxlc3Qgb2YgdGhlIHR3byBzb25zOiAqL1xuICAgIGlmIChqIDwgcy5oZWFwX2xlbiAmJlxuICAgICAgc21hbGxlcih0cmVlLCBzLmhlYXBbaiArIDFdLCBzLmhlYXBbal0sIHMuZGVwdGgpKSB7XG4gICAgICBqKys7XG4gICAgfVxuICAgIC8qIEV4aXQgaWYgdiBpcyBzbWFsbGVyIHRoYW4gYm90aCBzb25zICovXG4gICAgaWYgKHNtYWxsZXIodHJlZSwgdiwgcy5oZWFwW2pdLCBzLmRlcHRoKSkgeyBicmVhazsgfVxuXG4gICAgLyogRXhjaGFuZ2UgdiB3aXRoIHRoZSBzbWFsbGVzdCBzb24gKi9cbiAgICBzLmhlYXBba10gPSBzLmhlYXBbal07XG4gICAgayA9IGo7XG5cbiAgICAvKiBBbmQgY29udGludWUgZG93biB0aGUgdHJlZSwgc2V0dGluZyBqIHRvIHRoZSBsZWZ0IHNvbiBvZiBrICovXG4gICAgaiA8PD0gMTtcbiAgfVxuICBzLmhlYXBba10gPSB2O1xufVxuXG5cbi8vIGlubGluZWQgbWFudWFsbHlcbi8vIHZhciBTTUFMTEVTVCA9IDE7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCB0aGUgYmxvY2sgZGF0YSBjb21wcmVzc2VkIHVzaW5nIHRoZSBnaXZlbiBIdWZmbWFuIHRyZWVzXG4gKi9cbmZ1bmN0aW9uIGNvbXByZXNzX2Jsb2NrKHMsIGx0cmVlLCBkdHJlZSlcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICBjb25zdCBjdF9kYXRhICpsdHJlZTsgLyogbGl0ZXJhbCB0cmVlICovXG4vLyAgICBjb25zdCBjdF9kYXRhICpkdHJlZTsgLyogZGlzdGFuY2UgdHJlZSAqL1xue1xuICB2YXIgZGlzdDsgICAgICAgICAgIC8qIGRpc3RhbmNlIG9mIG1hdGNoZWQgc3RyaW5nICovXG4gIHZhciBsYzsgICAgICAgICAgICAgLyogbWF0Y2ggbGVuZ3RoIG9yIHVubWF0Y2hlZCBjaGFyIChpZiBkaXN0ID09IDApICovXG4gIHZhciBseCA9IDA7ICAgICAgICAgLyogcnVubmluZyBpbmRleCBpbiBsX2J1ZiAqL1xuICB2YXIgY29kZTsgICAgICAgICAgIC8qIHRoZSBjb2RlIHRvIHNlbmQgKi9cbiAgdmFyIGV4dHJhOyAgICAgICAgICAvKiBudW1iZXIgb2YgZXh0cmEgYml0cyB0byBzZW5kICovXG5cbiAgaWYgKHMubGFzdF9saXQgIT09IDApIHtcbiAgICBkbyB7XG4gICAgICBkaXN0ID0gKHMucGVuZGluZ19idWZbcy5kX2J1ZiArIGx4ICogMl0gPDwgOCkgfCAocy5wZW5kaW5nX2J1ZltzLmRfYnVmICsgbHggKiAyICsgMV0pO1xuICAgICAgbGMgPSBzLnBlbmRpbmdfYnVmW3MubF9idWYgKyBseF07XG4gICAgICBseCsrO1xuXG4gICAgICBpZiAoZGlzdCA9PT0gMCkge1xuICAgICAgICBzZW5kX2NvZGUocywgbGMsIGx0cmVlKTsgLyogc2VuZCBhIGxpdGVyYWwgYnl0ZSAqL1xuICAgICAgICAvL1RyYWNlY3YoaXNncmFwaChsYyksIChzdGRlcnIsXCIgJyVjJyBcIiwgbGMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIEhlcmUsIGxjIGlzIHRoZSBtYXRjaCBsZW5ndGggLSBNSU5fTUFUQ0ggKi9cbiAgICAgICAgY29kZSA9IF9sZW5ndGhfY29kZVtsY107XG4gICAgICAgIHNlbmRfY29kZShzLCBjb2RlICsgTElURVJBTFMgKyAxLCBsdHJlZSk7IC8qIHNlbmQgdGhlIGxlbmd0aCBjb2RlICovXG4gICAgICAgIGV4dHJhID0gZXh0cmFfbGJpdHNbY29kZV07XG4gICAgICAgIGlmIChleHRyYSAhPT0gMCkge1xuICAgICAgICAgIGxjIC09IGJhc2VfbGVuZ3RoW2NvZGVdO1xuICAgICAgICAgIHNlbmRfYml0cyhzLCBsYywgZXh0cmEpOyAgICAgICAvKiBzZW5kIHRoZSBleHRyYSBsZW5ndGggYml0cyAqL1xuICAgICAgICB9XG4gICAgICAgIGRpc3QtLTsgLyogZGlzdCBpcyBub3cgdGhlIG1hdGNoIGRpc3RhbmNlIC0gMSAqL1xuICAgICAgICBjb2RlID0gZF9jb2RlKGRpc3QpO1xuICAgICAgICAvL0Fzc2VydCAoY29kZSA8IERfQ09ERVMsIFwiYmFkIGRfY29kZVwiKTtcblxuICAgICAgICBzZW5kX2NvZGUocywgY29kZSwgZHRyZWUpOyAgICAgICAvKiBzZW5kIHRoZSBkaXN0YW5jZSBjb2RlICovXG4gICAgICAgIGV4dHJhID0gZXh0cmFfZGJpdHNbY29kZV07XG4gICAgICAgIGlmIChleHRyYSAhPT0gMCkge1xuICAgICAgICAgIGRpc3QgLT0gYmFzZV9kaXN0W2NvZGVdO1xuICAgICAgICAgIHNlbmRfYml0cyhzLCBkaXN0LCBleHRyYSk7ICAgLyogc2VuZCB0aGUgZXh0cmEgZGlzdGFuY2UgYml0cyAqL1xuICAgICAgICB9XG4gICAgICB9IC8qIGxpdGVyYWwgb3IgbWF0Y2ggcGFpciA/ICovXG5cbiAgICAgIC8qIENoZWNrIHRoYXQgdGhlIG92ZXJsYXkgYmV0d2VlbiBwZW5kaW5nX2J1ZiBhbmQgZF9idWYrbF9idWYgaXMgb2s6ICovXG4gICAgICAvL0Fzc2VydCgodUludCkocy0+cGVuZGluZykgPCBzLT5saXRfYnVmc2l6ZSArIDIqbHgsXG4gICAgICAvLyAgICAgICBcInBlbmRpbmdCdWYgb3ZlcmZsb3dcIik7XG5cbiAgICB9IHdoaWxlIChseCA8IHMubGFzdF9saXQpO1xuICB9XG5cbiAgc2VuZF9jb2RlKHMsIEVORF9CTE9DSywgbHRyZWUpO1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29uc3RydWN0IG9uZSBIdWZmbWFuIHRyZWUgYW5kIGFzc2lnbnMgdGhlIGNvZGUgYml0IHN0cmluZ3MgYW5kIGxlbmd0aHMuXG4gKiBVcGRhdGUgdGhlIHRvdGFsIGJpdCBsZW5ndGggZm9yIHRoZSBjdXJyZW50IGJsb2NrLlxuICogSU4gYXNzZXJ0aW9uOiB0aGUgZmllbGQgZnJlcSBpcyBzZXQgZm9yIGFsbCB0cmVlIGVsZW1lbnRzLlxuICogT1VUIGFzc2VydGlvbnM6IHRoZSBmaWVsZHMgbGVuIGFuZCBjb2RlIGFyZSBzZXQgdG8gdGhlIG9wdGltYWwgYml0IGxlbmd0aFxuICogICAgIGFuZCBjb3JyZXNwb25kaW5nIGNvZGUuIFRoZSBsZW5ndGggb3B0X2xlbiBpcyB1cGRhdGVkOyBzdGF0aWNfbGVuIGlzXG4gKiAgICAgYWxzbyB1cGRhdGVkIGlmIHN0cmVlIGlzIG5vdCBudWxsLiBUaGUgZmllbGQgbWF4X2NvZGUgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBidWlsZF90cmVlKHMsIGRlc2MpXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgdHJlZV9kZXNjICpkZXNjOyAvKiB0aGUgdHJlZSBkZXNjcmlwdG9yICovXG57XG4gIHZhciB0cmVlICAgICA9IGRlc2MuZHluX3RyZWU7XG4gIHZhciBzdHJlZSAgICA9IGRlc2Muc3RhdF9kZXNjLnN0YXRpY190cmVlO1xuICB2YXIgaGFzX3N0cmVlID0gZGVzYy5zdGF0X2Rlc2MuaGFzX3N0cmVlO1xuICB2YXIgZWxlbXMgICAgPSBkZXNjLnN0YXRfZGVzYy5lbGVtcztcbiAgdmFyIG4sIG07ICAgICAgICAgIC8qIGl0ZXJhdGUgb3ZlciBoZWFwIGVsZW1lbnRzICovXG4gIHZhciBtYXhfY29kZSA9IC0xOyAvKiBsYXJnZXN0IGNvZGUgd2l0aCBub24gemVybyBmcmVxdWVuY3kgKi9cbiAgdmFyIG5vZGU7ICAgICAgICAgIC8qIG5ldyBub2RlIGJlaW5nIGNyZWF0ZWQgKi9cblxuICAvKiBDb25zdHJ1Y3QgdGhlIGluaXRpYWwgaGVhcCwgd2l0aCBsZWFzdCBmcmVxdWVudCBlbGVtZW50IGluXG4gICAqIGhlYXBbU01BTExFU1RdLiBUaGUgc29ucyBvZiBoZWFwW25dIGFyZSBoZWFwWzIqbl0gYW5kIGhlYXBbMipuKzFdLlxuICAgKiBoZWFwWzBdIGlzIG5vdCB1c2VkLlxuICAgKi9cbiAgcy5oZWFwX2xlbiA9IDA7XG4gIHMuaGVhcF9tYXggPSBIRUFQX1NJWkU7XG5cbiAgZm9yIChuID0gMDsgbiA8IGVsZW1zOyBuKyspIHtcbiAgICBpZiAodHJlZVtuICogMl0vKi5GcmVxKi8gIT09IDApIHtcbiAgICAgIHMuaGVhcFsrK3MuaGVhcF9sZW5dID0gbWF4X2NvZGUgPSBuO1xuICAgICAgcy5kZXB0aFtuXSA9IDA7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdHJlZVtuICogMiArIDFdLyouTGVuKi8gPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qIFRoZSBwa3ppcCBmb3JtYXQgcmVxdWlyZXMgdGhhdCBhdCBsZWFzdCBvbmUgZGlzdGFuY2UgY29kZSBleGlzdHMsXG4gICAqIGFuZCB0aGF0IGF0IGxlYXN0IG9uZSBiaXQgc2hvdWxkIGJlIHNlbnQgZXZlbiBpZiB0aGVyZSBpcyBvbmx5IG9uZVxuICAgKiBwb3NzaWJsZSBjb2RlLiBTbyB0byBhdm9pZCBzcGVjaWFsIGNoZWNrcyBsYXRlciBvbiB3ZSBmb3JjZSBhdCBsZWFzdFxuICAgKiB0d28gY29kZXMgb2Ygbm9uIHplcm8gZnJlcXVlbmN5LlxuICAgKi9cbiAgd2hpbGUgKHMuaGVhcF9sZW4gPCAyKSB7XG4gICAgbm9kZSA9IHMuaGVhcFsrK3MuaGVhcF9sZW5dID0gKG1heF9jb2RlIDwgMiA/ICsrbWF4X2NvZGUgOiAwKTtcbiAgICB0cmVlW25vZGUgKiAyXS8qLkZyZXEqLyA9IDE7XG4gICAgcy5kZXB0aFtub2RlXSA9IDA7XG4gICAgcy5vcHRfbGVuLS07XG5cbiAgICBpZiAoaGFzX3N0cmVlKSB7XG4gICAgICBzLnN0YXRpY19sZW4gLT0gc3RyZWVbbm9kZSAqIDIgKyAxXS8qLkxlbiovO1xuICAgIH1cbiAgICAvKiBub2RlIGlzIDAgb3IgMSBzbyBpdCBkb2VzIG5vdCBoYXZlIGV4dHJhIGJpdHMgKi9cbiAgfVxuICBkZXNjLm1heF9jb2RlID0gbWF4X2NvZGU7XG5cbiAgLyogVGhlIGVsZW1lbnRzIGhlYXBbaGVhcF9sZW4vMisxIC4uIGhlYXBfbGVuXSBhcmUgbGVhdmVzIG9mIHRoZSB0cmVlLFxuICAgKiBlc3RhYmxpc2ggc3ViLWhlYXBzIG9mIGluY3JlYXNpbmcgbGVuZ3RoczpcbiAgICovXG4gIGZvciAobiA9IChzLmhlYXBfbGVuID4+IDEvKmludCAvMiovKTsgbiA+PSAxOyBuLS0pIHsgcHFkb3duaGVhcChzLCB0cmVlLCBuKTsgfVxuXG4gIC8qIENvbnN0cnVjdCB0aGUgSHVmZm1hbiB0cmVlIGJ5IHJlcGVhdGVkbHkgY29tYmluaW5nIHRoZSBsZWFzdCB0d29cbiAgICogZnJlcXVlbnQgbm9kZXMuXG4gICAqL1xuICBub2RlID0gZWxlbXM7ICAgICAgICAgICAgICAvKiBuZXh0IGludGVybmFsIG5vZGUgb2YgdGhlIHRyZWUgKi9cbiAgZG8ge1xuICAgIC8vcHFyZW1vdmUocywgdHJlZSwgbik7ICAvKiBuID0gbm9kZSBvZiBsZWFzdCBmcmVxdWVuY3kgKi9cbiAgICAvKioqIHBxcmVtb3ZlICoqKi9cbiAgICBuID0gcy5oZWFwWzEvKlNNQUxMRVNUKi9dO1xuICAgIHMuaGVhcFsxLypTTUFMTEVTVCovXSA9IHMuaGVhcFtzLmhlYXBfbGVuLS1dO1xuICAgIHBxZG93bmhlYXAocywgdHJlZSwgMS8qU01BTExFU1QqLyk7XG4gICAgLyoqKi9cblxuICAgIG0gPSBzLmhlYXBbMS8qU01BTExFU1QqL107IC8qIG0gPSBub2RlIG9mIG5leHQgbGVhc3QgZnJlcXVlbmN5ICovXG5cbiAgICBzLmhlYXBbLS1zLmhlYXBfbWF4XSA9IG47IC8qIGtlZXAgdGhlIG5vZGVzIHNvcnRlZCBieSBmcmVxdWVuY3kgKi9cbiAgICBzLmhlYXBbLS1zLmhlYXBfbWF4XSA9IG07XG5cbiAgICAvKiBDcmVhdGUgYSBuZXcgbm9kZSBmYXRoZXIgb2YgbiBhbmQgbSAqL1xuICAgIHRyZWVbbm9kZSAqIDJdLyouRnJlcSovID0gdHJlZVtuICogMl0vKi5GcmVxKi8gKyB0cmVlW20gKiAyXS8qLkZyZXEqLztcbiAgICBzLmRlcHRoW25vZGVdID0gKHMuZGVwdGhbbl0gPj0gcy5kZXB0aFttXSA/IHMuZGVwdGhbbl0gOiBzLmRlcHRoW21dKSArIDE7XG4gICAgdHJlZVtuICogMiArIDFdLyouRGFkKi8gPSB0cmVlW20gKiAyICsgMV0vKi5EYWQqLyA9IG5vZGU7XG5cbiAgICAvKiBhbmQgaW5zZXJ0IHRoZSBuZXcgbm9kZSBpbiB0aGUgaGVhcCAqL1xuICAgIHMuaGVhcFsxLypTTUFMTEVTVCovXSA9IG5vZGUrKztcbiAgICBwcWRvd25oZWFwKHMsIHRyZWUsIDEvKlNNQUxMRVNUKi8pO1xuXG4gIH0gd2hpbGUgKHMuaGVhcF9sZW4gPj0gMik7XG5cbiAgcy5oZWFwWy0tcy5oZWFwX21heF0gPSBzLmhlYXBbMS8qU01BTExFU1QqL107XG5cbiAgLyogQXQgdGhpcyBwb2ludCwgdGhlIGZpZWxkcyBmcmVxIGFuZCBkYWQgYXJlIHNldC4gV2UgY2FuIG5vd1xuICAgKiBnZW5lcmF0ZSB0aGUgYml0IGxlbmd0aHMuXG4gICAqL1xuICBnZW5fYml0bGVuKHMsIGRlc2MpO1xuXG4gIC8qIFRoZSBmaWVsZCBsZW4gaXMgbm93IHNldCwgd2UgY2FuIGdlbmVyYXRlIHRoZSBiaXQgY29kZXMgKi9cbiAgZ2VuX2NvZGVzKHRyZWUsIG1heF9jb2RlLCBzLmJsX2NvdW50KTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNjYW4gYSBsaXRlcmFsIG9yIGRpc3RhbmNlIHRyZWUgdG8gZGV0ZXJtaW5lIHRoZSBmcmVxdWVuY2llcyBvZiB0aGUgY29kZXNcbiAqIGluIHRoZSBiaXQgbGVuZ3RoIHRyZWUuXG4gKi9cbmZ1bmN0aW9uIHNjYW5fdHJlZShzLCB0cmVlLCBtYXhfY29kZSlcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICBjdF9kYXRhICp0cmVlOyAgIC8qIHRoZSB0cmVlIHRvIGJlIHNjYW5uZWQgKi9cbi8vICAgIGludCBtYXhfY29kZTsgICAgLyogYW5kIGl0cyBsYXJnZXN0IGNvZGUgb2Ygbm9uIHplcm8gZnJlcXVlbmN5ICovXG57XG4gIHZhciBuOyAgICAgICAgICAgICAgICAgICAgIC8qIGl0ZXJhdGVzIG92ZXIgYWxsIHRyZWUgZWxlbWVudHMgKi9cbiAgdmFyIHByZXZsZW4gPSAtMTsgICAgICAgICAgLyogbGFzdCBlbWl0dGVkIGxlbmd0aCAqL1xuICB2YXIgY3VybGVuOyAgICAgICAgICAgICAgICAvKiBsZW5ndGggb2YgY3VycmVudCBjb2RlICovXG5cbiAgdmFyIG5leHRsZW4gPSB0cmVlWzAgKiAyICsgMV0vKi5MZW4qLzsgLyogbGVuZ3RoIG9mIG5leHQgY29kZSAqL1xuXG4gIHZhciBjb3VudCA9IDA7ICAgICAgICAgICAgIC8qIHJlcGVhdCBjb3VudCBvZiB0aGUgY3VycmVudCBjb2RlICovXG4gIHZhciBtYXhfY291bnQgPSA3OyAgICAgICAgIC8qIG1heCByZXBlYXQgY291bnQgKi9cbiAgdmFyIG1pbl9jb3VudCA9IDQ7ICAgICAgICAgLyogbWluIHJlcGVhdCBjb3VudCAqL1xuXG4gIGlmIChuZXh0bGVuID09PSAwKSB7XG4gICAgbWF4X2NvdW50ID0gMTM4O1xuICAgIG1pbl9jb3VudCA9IDM7XG4gIH1cbiAgdHJlZVsobWF4X2NvZGUgKyAxKSAqIDIgKyAxXS8qLkxlbiovID0gMHhmZmZmOyAvKiBndWFyZCAqL1xuXG4gIGZvciAobiA9IDA7IG4gPD0gbWF4X2NvZGU7IG4rKykge1xuICAgIGN1cmxlbiA9IG5leHRsZW47XG4gICAgbmV4dGxlbiA9IHRyZWVbKG4gKyAxKSAqIDIgKyAxXS8qLkxlbiovO1xuXG4gICAgaWYgKCsrY291bnQgPCBtYXhfY291bnQgJiYgY3VybGVuID09PSBuZXh0bGVuKSB7XG4gICAgICBjb250aW51ZTtcblxuICAgIH0gZWxzZSBpZiAoY291bnQgPCBtaW5fY291bnQpIHtcbiAgICAgIHMuYmxfdHJlZVtjdXJsZW4gKiAyXS8qLkZyZXEqLyArPSBjb3VudDtcblxuICAgIH0gZWxzZSBpZiAoY3VybGVuICE9PSAwKSB7XG5cbiAgICAgIGlmIChjdXJsZW4gIT09IHByZXZsZW4pIHsgcy5ibF90cmVlW2N1cmxlbiAqIDJdLyouRnJlcSovKys7IH1cbiAgICAgIHMuYmxfdHJlZVtSRVBfM182ICogMl0vKi5GcmVxKi8rKztcblxuICAgIH0gZWxzZSBpZiAoY291bnQgPD0gMTApIHtcbiAgICAgIHMuYmxfdHJlZVtSRVBaXzNfMTAgKiAyXS8qLkZyZXEqLysrO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHMuYmxfdHJlZVtSRVBaXzExXzEzOCAqIDJdLyouRnJlcSovKys7XG4gICAgfVxuXG4gICAgY291bnQgPSAwO1xuICAgIHByZXZsZW4gPSBjdXJsZW47XG5cbiAgICBpZiAobmV4dGxlbiA9PT0gMCkge1xuICAgICAgbWF4X2NvdW50ID0gMTM4O1xuICAgICAgbWluX2NvdW50ID0gMztcblxuICAgIH0gZWxzZSBpZiAoY3VybGVuID09PSBuZXh0bGVuKSB7XG4gICAgICBtYXhfY291bnQgPSA2O1xuICAgICAgbWluX2NvdW50ID0gMztcblxuICAgIH0gZWxzZSB7XG4gICAgICBtYXhfY291bnQgPSA3O1xuICAgICAgbWluX2NvdW50ID0gNDtcbiAgICB9XG4gIH1cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIFNlbmQgYSBsaXRlcmFsIG9yIGRpc3RhbmNlIHRyZWUgaW4gY29tcHJlc3NlZCBmb3JtLCB1c2luZyB0aGUgY29kZXMgaW5cbiAqIGJsX3RyZWUuXG4gKi9cbmZ1bmN0aW9uIHNlbmRfdHJlZShzLCB0cmVlLCBtYXhfY29kZSlcbi8vICAgIGRlZmxhdGVfc3RhdGUgKnM7XG4vLyAgICBjdF9kYXRhICp0cmVlOyAvKiB0aGUgdHJlZSB0byBiZSBzY2FubmVkICovXG4vLyAgICBpbnQgbWF4X2NvZGU7ICAgICAgIC8qIGFuZCBpdHMgbGFyZ2VzdCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXF1ZW5jeSAqL1xue1xuICB2YXIgbjsgICAgICAgICAgICAgICAgICAgICAvKiBpdGVyYXRlcyBvdmVyIGFsbCB0cmVlIGVsZW1lbnRzICovXG4gIHZhciBwcmV2bGVuID0gLTE7ICAgICAgICAgIC8qIGxhc3QgZW1pdHRlZCBsZW5ndGggKi9cbiAgdmFyIGN1cmxlbjsgICAgICAgICAgICAgICAgLyogbGVuZ3RoIG9mIGN1cnJlbnQgY29kZSAqL1xuXG4gIHZhciBuZXh0bGVuID0gdHJlZVswICogMiArIDFdLyouTGVuKi87IC8qIGxlbmd0aCBvZiBuZXh0IGNvZGUgKi9cblxuICB2YXIgY291bnQgPSAwOyAgICAgICAgICAgICAvKiByZXBlYXQgY291bnQgb2YgdGhlIGN1cnJlbnQgY29kZSAqL1xuICB2YXIgbWF4X2NvdW50ID0gNzsgICAgICAgICAvKiBtYXggcmVwZWF0IGNvdW50ICovXG4gIHZhciBtaW5fY291bnQgPSA0OyAgICAgICAgIC8qIG1pbiByZXBlYXQgY291bnQgKi9cblxuICAvKiB0cmVlW21heF9jb2RlKzFdLkxlbiA9IC0xOyAqLyAgLyogZ3VhcmQgYWxyZWFkeSBzZXQgKi9cbiAgaWYgKG5leHRsZW4gPT09IDApIHtcbiAgICBtYXhfY291bnQgPSAxMzg7XG4gICAgbWluX2NvdW50ID0gMztcbiAgfVxuXG4gIGZvciAobiA9IDA7IG4gPD0gbWF4X2NvZGU7IG4rKykge1xuICAgIGN1cmxlbiA9IG5leHRsZW47XG4gICAgbmV4dGxlbiA9IHRyZWVbKG4gKyAxKSAqIDIgKyAxXS8qLkxlbiovO1xuXG4gICAgaWYgKCsrY291bnQgPCBtYXhfY291bnQgJiYgY3VybGVuID09PSBuZXh0bGVuKSB7XG4gICAgICBjb250aW51ZTtcblxuICAgIH0gZWxzZSBpZiAoY291bnQgPCBtaW5fY291bnQpIHtcbiAgICAgIGRvIHsgc2VuZF9jb2RlKHMsIGN1cmxlbiwgcy5ibF90cmVlKTsgfSB3aGlsZSAoLS1jb3VudCAhPT0gMCk7XG5cbiAgICB9IGVsc2UgaWYgKGN1cmxlbiAhPT0gMCkge1xuICAgICAgaWYgKGN1cmxlbiAhPT0gcHJldmxlbikge1xuICAgICAgICBzZW5kX2NvZGUocywgY3VybGVuLCBzLmJsX3RyZWUpO1xuICAgICAgICBjb3VudC0tO1xuICAgICAgfVxuICAgICAgLy9Bc3NlcnQoY291bnQgPj0gMyAmJiBjb3VudCA8PSA2LCBcIiAzXzY/XCIpO1xuICAgICAgc2VuZF9jb2RlKHMsIFJFUF8zXzYsIHMuYmxfdHJlZSk7XG4gICAgICBzZW5kX2JpdHMocywgY291bnQgLSAzLCAyKTtcblxuICAgIH0gZWxzZSBpZiAoY291bnQgPD0gMTApIHtcbiAgICAgIHNlbmRfY29kZShzLCBSRVBaXzNfMTAsIHMuYmxfdHJlZSk7XG4gICAgICBzZW5kX2JpdHMocywgY291bnQgLSAzLCAzKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBzZW5kX2NvZGUocywgUkVQWl8xMV8xMzgsIHMuYmxfdHJlZSk7XG4gICAgICBzZW5kX2JpdHMocywgY291bnQgLSAxMSwgNyk7XG4gICAgfVxuXG4gICAgY291bnQgPSAwO1xuICAgIHByZXZsZW4gPSBjdXJsZW47XG4gICAgaWYgKG5leHRsZW4gPT09IDApIHtcbiAgICAgIG1heF9jb3VudCA9IDEzODtcbiAgICAgIG1pbl9jb3VudCA9IDM7XG5cbiAgICB9IGVsc2UgaWYgKGN1cmxlbiA9PT0gbmV4dGxlbikge1xuICAgICAgbWF4X2NvdW50ID0gNjtcbiAgICAgIG1pbl9jb3VudCA9IDM7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgbWF4X2NvdW50ID0gNztcbiAgICAgIG1pbl9jb3VudCA9IDQ7XG4gICAgfVxuICB9XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb25zdHJ1Y3QgdGhlIEh1ZmZtYW4gdHJlZSBmb3IgdGhlIGJpdCBsZW5ndGhzIGFuZCByZXR1cm4gdGhlIGluZGV4IGluXG4gKiBibF9vcmRlciBvZiB0aGUgbGFzdCBiaXQgbGVuZ3RoIGNvZGUgdG8gc2VuZC5cbiAqL1xuZnVuY3Rpb24gYnVpbGRfYmxfdHJlZShzKSB7XG4gIHZhciBtYXhfYmxpbmRleDsgIC8qIGluZGV4IG9mIGxhc3QgYml0IGxlbmd0aCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXEgKi9cblxuICAvKiBEZXRlcm1pbmUgdGhlIGJpdCBsZW5ndGggZnJlcXVlbmNpZXMgZm9yIGxpdGVyYWwgYW5kIGRpc3RhbmNlIHRyZWVzICovXG4gIHNjYW5fdHJlZShzLCBzLmR5bl9sdHJlZSwgcy5sX2Rlc2MubWF4X2NvZGUpO1xuICBzY2FuX3RyZWUocywgcy5keW5fZHRyZWUsIHMuZF9kZXNjLm1heF9jb2RlKTtcblxuICAvKiBCdWlsZCB0aGUgYml0IGxlbmd0aCB0cmVlOiAqL1xuICBidWlsZF90cmVlKHMsIHMuYmxfZGVzYyk7XG4gIC8qIG9wdF9sZW4gbm93IGluY2x1ZGVzIHRoZSBsZW5ndGggb2YgdGhlIHRyZWUgcmVwcmVzZW50YXRpb25zLCBleGNlcHRcbiAgICogdGhlIGxlbmd0aHMgb2YgdGhlIGJpdCBsZW5ndGhzIGNvZGVzIGFuZCB0aGUgNSs1KzQgYml0cyBmb3IgdGhlIGNvdW50cy5cbiAgICovXG5cbiAgLyogRGV0ZXJtaW5lIHRoZSBudW1iZXIgb2YgYml0IGxlbmd0aCBjb2RlcyB0byBzZW5kLiBUaGUgcGt6aXAgZm9ybWF0XG4gICAqIHJlcXVpcmVzIHRoYXQgYXQgbGVhc3QgNCBiaXQgbGVuZ3RoIGNvZGVzIGJlIHNlbnQuIChhcHBub3RlLnR4dCBzYXlzXG4gICAqIDMgYnV0IHRoZSBhY3R1YWwgdmFsdWUgdXNlZCBpcyA0LilcbiAgICovXG4gIGZvciAobWF4X2JsaW5kZXggPSBCTF9DT0RFUyAtIDE7IG1heF9ibGluZGV4ID49IDM7IG1heF9ibGluZGV4LS0pIHtcbiAgICBpZiAocy5ibF90cmVlW2JsX29yZGVyW21heF9ibGluZGV4XSAqIDIgKyAxXS8qLkxlbiovICE9PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgLyogVXBkYXRlIG9wdF9sZW4gdG8gaW5jbHVkZSB0aGUgYml0IGxlbmd0aCB0cmVlIGFuZCBjb3VudHMgKi9cbiAgcy5vcHRfbGVuICs9IDMgKiAobWF4X2JsaW5kZXggKyAxKSArIDUgKyA1ICsgNDtcbiAgLy9UcmFjZXYoKHN0ZGVyciwgXCJcXG5keW4gdHJlZXM6IGR5biAlbGQsIHN0YXQgJWxkXCIsXG4gIC8vICAgICAgICBzLT5vcHRfbGVuLCBzLT5zdGF0aWNfbGVuKSk7XG5cbiAgcmV0dXJuIG1heF9ibGluZGV4O1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCB0aGUgaGVhZGVyIGZvciBhIGJsb2NrIHVzaW5nIGR5bmFtaWMgSHVmZm1hbiB0cmVlczogdGhlIGNvdW50cywgdGhlXG4gKiBsZW5ndGhzIG9mIHRoZSBiaXQgbGVuZ3RoIGNvZGVzLCB0aGUgbGl0ZXJhbCB0cmVlIGFuZCB0aGUgZGlzdGFuY2UgdHJlZS5cbiAqIElOIGFzc2VydGlvbjogbGNvZGVzID49IDI1NywgZGNvZGVzID49IDEsIGJsY29kZXMgPj0gNC5cbiAqL1xuZnVuY3Rpb24gc2VuZF9hbGxfdHJlZXMocywgbGNvZGVzLCBkY29kZXMsIGJsY29kZXMpXG4vLyAgICBkZWZsYXRlX3N0YXRlICpzO1xuLy8gICAgaW50IGxjb2RlcywgZGNvZGVzLCBibGNvZGVzOyAvKiBudW1iZXIgb2YgY29kZXMgZm9yIGVhY2ggdHJlZSAqL1xue1xuICB2YXIgcmFuazsgICAgICAgICAgICAgICAgICAgIC8qIGluZGV4IGluIGJsX29yZGVyICovXG5cbiAgLy9Bc3NlcnQgKGxjb2RlcyA+PSAyNTcgJiYgZGNvZGVzID49IDEgJiYgYmxjb2RlcyA+PSA0LCBcIm5vdCBlbm91Z2ggY29kZXNcIik7XG4gIC8vQXNzZXJ0IChsY29kZXMgPD0gTF9DT0RFUyAmJiBkY29kZXMgPD0gRF9DT0RFUyAmJiBibGNvZGVzIDw9IEJMX0NPREVTLFxuICAvLyAgICAgICAgXCJ0b28gbWFueSBjb2Rlc1wiKTtcbiAgLy9UcmFjZXYoKHN0ZGVyciwgXCJcXG5ibCBjb3VudHM6IFwiKSk7XG4gIHNlbmRfYml0cyhzLCBsY29kZXMgLSAyNTcsIDUpOyAvKiBub3QgKzI1NSBhcyBzdGF0ZWQgaW4gYXBwbm90ZS50eHQgKi9cbiAgc2VuZF9iaXRzKHMsIGRjb2RlcyAtIDEsICAgNSk7XG4gIHNlbmRfYml0cyhzLCBibGNvZGVzIC0gNCwgIDQpOyAvKiBub3QgLTMgYXMgc3RhdGVkIGluIGFwcG5vdGUudHh0ICovXG4gIGZvciAocmFuayA9IDA7IHJhbmsgPCBibGNvZGVzOyByYW5rKyspIHtcbiAgICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmJsIGNvZGUgJTJkIFwiLCBibF9vcmRlcltyYW5rXSkpO1xuICAgIHNlbmRfYml0cyhzLCBzLmJsX3RyZWVbYmxfb3JkZXJbcmFua10gKiAyICsgMV0vKi5MZW4qLywgMyk7XG4gIH1cbiAgLy9UcmFjZXYoKHN0ZGVyciwgXCJcXG5ibCB0cmVlOiBzZW50ICVsZFwiLCBzLT5iaXRzX3NlbnQpKTtcblxuICBzZW5kX3RyZWUocywgcy5keW5fbHRyZWUsIGxjb2RlcyAtIDEpOyAvKiBsaXRlcmFsIHRyZWUgKi9cbiAgLy9UcmFjZXYoKHN0ZGVyciwgXCJcXG5saXQgdHJlZTogc2VudCAlbGRcIiwgcy0+Yml0c19zZW50KSk7XG5cbiAgc2VuZF90cmVlKHMsIHMuZHluX2R0cmVlLCBkY29kZXMgLSAxKTsgLyogZGlzdGFuY2UgdHJlZSAqL1xuICAvL1RyYWNldigoc3RkZXJyLCBcIlxcbmRpc3QgdHJlZTogc2VudCAlbGRcIiwgcy0+Yml0c19zZW50KSk7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDaGVjayBpZiB0aGUgZGF0YSB0eXBlIGlzIFRFWFQgb3IgQklOQVJZLCB1c2luZyB0aGUgZm9sbG93aW5nIGFsZ29yaXRobTpcbiAqIC0gVEVYVCBpZiB0aGUgdHdvIGNvbmRpdGlvbnMgYmVsb3cgYXJlIHNhdGlzZmllZDpcbiAqICAgIGEpIFRoZXJlIGFyZSBubyBub24tcG9ydGFibGUgY29udHJvbCBjaGFyYWN0ZXJzIGJlbG9uZ2luZyB0byB0aGVcbiAqICAgICAgIFwiYmxhY2sgbGlzdFwiICgwLi42LCAxNC4uMjUsIDI4Li4zMSkuXG4gKiAgICBiKSBUaGVyZSBpcyBhdCBsZWFzdCBvbmUgcHJpbnRhYmxlIGNoYXJhY3RlciBiZWxvbmdpbmcgdG8gdGhlXG4gKiAgICAgICBcIndoaXRlIGxpc3RcIiAoOSB7VEFCfSwgMTAge0xGfSwgMTMge0NSfSwgMzIuLjI1NSkuXG4gKiAtIEJJTkFSWSBvdGhlcndpc2UuXG4gKiAtIFRoZSBmb2xsb3dpbmcgcGFydGlhbGx5LXBvcnRhYmxlIGNvbnRyb2wgY2hhcmFjdGVycyBmb3JtIGFcbiAqICAgXCJncmF5IGxpc3RcIiB0aGF0IGlzIGlnbm9yZWQgaW4gdGhpcyBkZXRlY3Rpb24gYWxnb3JpdGhtOlxuICogICAoNyB7QkVMfSwgOCB7QlN9LCAxMSB7VlR9LCAxMiB7RkZ9LCAyNiB7U1VCfSwgMjcge0VTQ30pLlxuICogSU4gYXNzZXJ0aW9uOiB0aGUgZmllbGRzIEZyZXEgb2YgZHluX2x0cmVlIGFyZSBzZXQuXG4gKi9cbmZ1bmN0aW9uIGRldGVjdF9kYXRhX3R5cGUocykge1xuICAvKiBibGFja19tYXNrIGlzIHRoZSBiaXQgbWFzayBvZiBibGFjay1saXN0ZWQgYnl0ZXNcbiAgICogc2V0IGJpdHMgMC4uNiwgMTQuLjI1LCBhbmQgMjguLjMxXG4gICAqIDB4ZjNmZmMwN2YgPSBiaW5hcnkgMTExMTAwMTExMTExMTExMTExMDAwMDAwMDExMTExMTFcbiAgICovXG4gIHZhciBibGFja19tYXNrID0gMHhmM2ZmYzA3ZjtcbiAgdmFyIG47XG5cbiAgLyogQ2hlY2sgZm9yIG5vbi10ZXh0dWFsIChcImJsYWNrLWxpc3RlZFwiKSBieXRlcy4gKi9cbiAgZm9yIChuID0gMDsgbiA8PSAzMTsgbisrLCBibGFja19tYXNrID4+Pj0gMSkge1xuICAgIGlmICgoYmxhY2tfbWFzayAmIDEpICYmIChzLmR5bl9sdHJlZVtuICogMl0vKi5GcmVxKi8gIT09IDApKSB7XG4gICAgICByZXR1cm4gWl9CSU5BUlk7XG4gICAgfVxuICB9XG5cbiAgLyogQ2hlY2sgZm9yIHRleHR1YWwgKFwid2hpdGUtbGlzdGVkXCIpIGJ5dGVzLiAqL1xuICBpZiAocy5keW5fbHRyZWVbOSAqIDJdLyouRnJlcSovICE9PSAwIHx8IHMuZHluX2x0cmVlWzEwICogMl0vKi5GcmVxKi8gIT09IDAgfHxcbiAgICAgIHMuZHluX2x0cmVlWzEzICogMl0vKi5GcmVxKi8gIT09IDApIHtcbiAgICByZXR1cm4gWl9URVhUO1xuICB9XG4gIGZvciAobiA9IDMyOyBuIDwgTElURVJBTFM7IG4rKykge1xuICAgIGlmIChzLmR5bl9sdHJlZVtuICogMl0vKi5GcmVxKi8gIT09IDApIHtcbiAgICAgIHJldHVybiBaX1RFWFQ7XG4gICAgfVxuICB9XG5cbiAgLyogVGhlcmUgYXJlIG5vIFwiYmxhY2stbGlzdGVkXCIgb3IgXCJ3aGl0ZS1saXN0ZWRcIiBieXRlczpcbiAgICogdGhpcyBzdHJlYW0gZWl0aGVyIGlzIGVtcHR5IG9yIGhhcyB0b2xlcmF0ZWQgKFwiZ3JheS1saXN0ZWRcIikgYnl0ZXMgb25seS5cbiAgICovXG4gIHJldHVybiBaX0JJTkFSWTtcbn1cblxuXG52YXIgc3RhdGljX2luaXRfZG9uZSA9IGZhbHNlO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEluaXRpYWxpemUgdGhlIHRyZWUgZGF0YSBzdHJ1Y3R1cmVzIGZvciBhIG5ldyB6bGliIHN0cmVhbS5cbiAqL1xuZnVuY3Rpb24gX3RyX2luaXQocylcbntcblxuICBpZiAoIXN0YXRpY19pbml0X2RvbmUpIHtcbiAgICB0cl9zdGF0aWNfaW5pdCgpO1xuICAgIHN0YXRpY19pbml0X2RvbmUgPSB0cnVlO1xuICB9XG5cbiAgcy5sX2Rlc2MgID0gbmV3IFRyZWVEZXNjKHMuZHluX2x0cmVlLCBzdGF0aWNfbF9kZXNjKTtcbiAgcy5kX2Rlc2MgID0gbmV3IFRyZWVEZXNjKHMuZHluX2R0cmVlLCBzdGF0aWNfZF9kZXNjKTtcbiAgcy5ibF9kZXNjID0gbmV3IFRyZWVEZXNjKHMuYmxfdHJlZSwgc3RhdGljX2JsX2Rlc2MpO1xuXG4gIHMuYmlfYnVmID0gMDtcbiAgcy5iaV92YWxpZCA9IDA7XG5cbiAgLyogSW5pdGlhbGl6ZSB0aGUgZmlyc3QgYmxvY2sgb2YgdGhlIGZpcnN0IGZpbGU6ICovXG4gIGluaXRfYmxvY2socyk7XG59XG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTZW5kIGEgc3RvcmVkIGJsb2NrXG4gKi9cbmZ1bmN0aW9uIF90cl9zdG9yZWRfYmxvY2socywgYnVmLCBzdG9yZWRfbGVuLCBsYXN0KVxuLy9EZWZsYXRlU3RhdGUgKnM7XG4vL2NoYXJmICpidWY7ICAgICAgIC8qIGlucHV0IGJsb2NrICovXG4vL3VsZyBzdG9yZWRfbGVuOyAgIC8qIGxlbmd0aCBvZiBpbnB1dCBibG9jayAqL1xuLy9pbnQgbGFzdDsgICAgICAgICAvKiBvbmUgaWYgdGhpcyBpcyB0aGUgbGFzdCBibG9jayBmb3IgYSBmaWxlICovXG57XG4gIHNlbmRfYml0cyhzLCAoU1RPUkVEX0JMT0NLIDw8IDEpICsgKGxhc3QgPyAxIDogMCksIDMpOyAgICAvKiBzZW5kIGJsb2NrIHR5cGUgKi9cbiAgY29weV9ibG9jayhzLCBidWYsIHN0b3JlZF9sZW4sIHRydWUpOyAvKiB3aXRoIGhlYWRlciAqL1xufVxuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU2VuZCBvbmUgZW1wdHkgc3RhdGljIGJsb2NrIHRvIGdpdmUgZW5vdWdoIGxvb2thaGVhZCBmb3IgaW5mbGF0ZS5cbiAqIFRoaXMgdGFrZXMgMTAgYml0cywgb2Ygd2hpY2ggNyBtYXkgcmVtYWluIGluIHRoZSBiaXQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBfdHJfYWxpZ24ocykge1xuICBzZW5kX2JpdHMocywgU1RBVElDX1RSRUVTIDw8IDEsIDMpO1xuICBzZW5kX2NvZGUocywgRU5EX0JMT0NLLCBzdGF0aWNfbHRyZWUpO1xuICBiaV9mbHVzaChzKTtcbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIERldGVybWluZSB0aGUgYmVzdCBlbmNvZGluZyBmb3IgdGhlIGN1cnJlbnQgYmxvY2s6IGR5bmFtaWMgdHJlZXMsIHN0YXRpY1xuICogdHJlZXMgb3Igc3RvcmUsIGFuZCBvdXRwdXQgdGhlIGVuY29kZWQgYmxvY2sgdG8gdGhlIHppcCBmaWxlLlxuICovXG5mdW5jdGlvbiBfdHJfZmx1c2hfYmxvY2socywgYnVmLCBzdG9yZWRfbGVuLCBsYXN0KVxuLy9EZWZsYXRlU3RhdGUgKnM7XG4vL2NoYXJmICpidWY7ICAgICAgIC8qIGlucHV0IGJsb2NrLCBvciBOVUxMIGlmIHRvbyBvbGQgKi9cbi8vdWxnIHN0b3JlZF9sZW47ICAgLyogbGVuZ3RoIG9mIGlucHV0IGJsb2NrICovXG4vL2ludCBsYXN0OyAgICAgICAgIC8qIG9uZSBpZiB0aGlzIGlzIHRoZSBsYXN0IGJsb2NrIGZvciBhIGZpbGUgKi9cbntcbiAgdmFyIG9wdF9sZW5iLCBzdGF0aWNfbGVuYjsgIC8qIG9wdF9sZW4gYW5kIHN0YXRpY19sZW4gaW4gYnl0ZXMgKi9cbiAgdmFyIG1heF9ibGluZGV4ID0gMDsgICAgICAgIC8qIGluZGV4IG9mIGxhc3QgYml0IGxlbmd0aCBjb2RlIG9mIG5vbiB6ZXJvIGZyZXEgKi9cblxuICAvKiBCdWlsZCB0aGUgSHVmZm1hbiB0cmVlcyB1bmxlc3MgYSBzdG9yZWQgYmxvY2sgaXMgZm9yY2VkICovXG4gIGlmIChzLmxldmVsID4gMCkge1xuXG4gICAgLyogQ2hlY2sgaWYgdGhlIGZpbGUgaXMgYmluYXJ5IG9yIHRleHQgKi9cbiAgICBpZiAocy5zdHJtLmRhdGFfdHlwZSA9PT0gWl9VTktOT1dOKSB7XG4gICAgICBzLnN0cm0uZGF0YV90eXBlID0gZGV0ZWN0X2RhdGFfdHlwZShzKTtcbiAgICB9XG5cbiAgICAvKiBDb25zdHJ1Y3QgdGhlIGxpdGVyYWwgYW5kIGRpc3RhbmNlIHRyZWVzICovXG4gICAgYnVpbGRfdHJlZShzLCBzLmxfZGVzYyk7XG4gICAgLy8gVHJhY2V2KChzdGRlcnIsIFwiXFxubGl0IGRhdGE6IGR5biAlbGQsIHN0YXQgJWxkXCIsIHMtPm9wdF9sZW4sXG4gICAgLy8gICAgICAgIHMtPnN0YXRpY19sZW4pKTtcblxuICAgIGJ1aWxkX3RyZWUocywgcy5kX2Rlc2MpO1xuICAgIC8vIFRyYWNldigoc3RkZXJyLCBcIlxcbmRpc3QgZGF0YTogZHluICVsZCwgc3RhdCAlbGRcIiwgcy0+b3B0X2xlbixcbiAgICAvLyAgICAgICAgcy0+c3RhdGljX2xlbikpO1xuICAgIC8qIEF0IHRoaXMgcG9pbnQsIG9wdF9sZW4gYW5kIHN0YXRpY19sZW4gYXJlIHRoZSB0b3RhbCBiaXQgbGVuZ3RocyBvZlxuICAgICAqIHRoZSBjb21wcmVzc2VkIGJsb2NrIGRhdGEsIGV4Y2x1ZGluZyB0aGUgdHJlZSByZXByZXNlbnRhdGlvbnMuXG4gICAgICovXG5cbiAgICAvKiBCdWlsZCB0aGUgYml0IGxlbmd0aCB0cmVlIGZvciB0aGUgYWJvdmUgdHdvIHRyZWVzLCBhbmQgZ2V0IHRoZSBpbmRleFxuICAgICAqIGluIGJsX29yZGVyIG9mIHRoZSBsYXN0IGJpdCBsZW5ndGggY29kZSB0byBzZW5kLlxuICAgICAqL1xuICAgIG1heF9ibGluZGV4ID0gYnVpbGRfYmxfdHJlZShzKTtcblxuICAgIC8qIERldGVybWluZSB0aGUgYmVzdCBlbmNvZGluZy4gQ29tcHV0ZSB0aGUgYmxvY2sgbGVuZ3RocyBpbiBieXRlcy4gKi9cbiAgICBvcHRfbGVuYiA9IChzLm9wdF9sZW4gKyAzICsgNykgPj4+IDM7XG4gICAgc3RhdGljX2xlbmIgPSAocy5zdGF0aWNfbGVuICsgMyArIDcpID4+PiAzO1xuXG4gICAgLy8gVHJhY2V2KChzdGRlcnIsIFwiXFxub3B0ICVsdSglbHUpIHN0YXQgJWx1KCVsdSkgc3RvcmVkICVsdSBsaXQgJXUgXCIsXG4gICAgLy8gICAgICAgIG9wdF9sZW5iLCBzLT5vcHRfbGVuLCBzdGF0aWNfbGVuYiwgcy0+c3RhdGljX2xlbiwgc3RvcmVkX2xlbixcbiAgICAvLyAgICAgICAgcy0+bGFzdF9saXQpKTtcblxuICAgIGlmIChzdGF0aWNfbGVuYiA8PSBvcHRfbGVuYikgeyBvcHRfbGVuYiA9IHN0YXRpY19sZW5iOyB9XG5cbiAgfSBlbHNlIHtcbiAgICAvLyBBc3NlcnQoYnVmICE9IChjaGFyKikwLCBcImxvc3QgYnVmXCIpO1xuICAgIG9wdF9sZW5iID0gc3RhdGljX2xlbmIgPSBzdG9yZWRfbGVuICsgNTsgLyogZm9yY2UgYSBzdG9yZWQgYmxvY2sgKi9cbiAgfVxuXG4gIGlmICgoc3RvcmVkX2xlbiArIDQgPD0gb3B0X2xlbmIpICYmIChidWYgIT09IC0xKSkge1xuICAgIC8qIDQ6IHR3byB3b3JkcyBmb3IgdGhlIGxlbmd0aHMgKi9cblxuICAgIC8qIFRoZSB0ZXN0IGJ1ZiAhPSBOVUxMIGlzIG9ubHkgbmVjZXNzYXJ5IGlmIExJVF9CVUZTSVpFID4gV1NJWkUuXG4gICAgICogT3RoZXJ3aXNlIHdlIGNhbid0IGhhdmUgcHJvY2Vzc2VkIG1vcmUgdGhhbiBXU0laRSBpbnB1dCBieXRlcyBzaW5jZVxuICAgICAqIHRoZSBsYXN0IGJsb2NrIGZsdXNoLCBiZWNhdXNlIGNvbXByZXNzaW9uIHdvdWxkIGhhdmUgYmVlblxuICAgICAqIHN1Y2Nlc3NmdWwuIElmIExJVF9CVUZTSVpFIDw9IFdTSVpFLCBpdCBpcyBuZXZlciB0b28gbGF0ZSB0b1xuICAgICAqIHRyYW5zZm9ybSBhIGJsb2NrIGludG8gYSBzdG9yZWQgYmxvY2suXG4gICAgICovXG4gICAgX3RyX3N0b3JlZF9ibG9jayhzLCBidWYsIHN0b3JlZF9sZW4sIGxhc3QpO1xuXG4gIH0gZWxzZSBpZiAocy5zdHJhdGVneSA9PT0gWl9GSVhFRCB8fCBzdGF0aWNfbGVuYiA9PT0gb3B0X2xlbmIpIHtcblxuICAgIHNlbmRfYml0cyhzLCAoU1RBVElDX1RSRUVTIDw8IDEpICsgKGxhc3QgPyAxIDogMCksIDMpO1xuICAgIGNvbXByZXNzX2Jsb2NrKHMsIHN0YXRpY19sdHJlZSwgc3RhdGljX2R0cmVlKTtcblxuICB9IGVsc2Uge1xuICAgIHNlbmRfYml0cyhzLCAoRFlOX1RSRUVTIDw8IDEpICsgKGxhc3QgPyAxIDogMCksIDMpO1xuICAgIHNlbmRfYWxsX3RyZWVzKHMsIHMubF9kZXNjLm1heF9jb2RlICsgMSwgcy5kX2Rlc2MubWF4X2NvZGUgKyAxLCBtYXhfYmxpbmRleCArIDEpO1xuICAgIGNvbXByZXNzX2Jsb2NrKHMsIHMuZHluX2x0cmVlLCBzLmR5bl9kdHJlZSk7XG4gIH1cbiAgLy8gQXNzZXJ0IChzLT5jb21wcmVzc2VkX2xlbiA9PSBzLT5iaXRzX3NlbnQsIFwiYmFkIGNvbXByZXNzZWQgc2l6ZVwiKTtcbiAgLyogVGhlIGFib3ZlIGNoZWNrIGlzIG1hZGUgbW9kIDJeMzIsIGZvciBmaWxlcyBsYXJnZXIgdGhhbiA1MTIgTUJcbiAgICogYW5kIHVMb25nIGltcGxlbWVudGVkIG9uIDMyIGJpdHMuXG4gICAqL1xuICBpbml0X2Jsb2NrKHMpO1xuXG4gIGlmIChsYXN0KSB7XG4gICAgYmlfd2luZHVwKHMpO1xuICB9XG4gIC8vIFRyYWNldigoc3RkZXJyLFwiXFxuY29tcHJsZW4gJWx1KCVsdSkgXCIsIHMtPmNvbXByZXNzZWRfbGVuPj4zLFxuICAvLyAgICAgICBzLT5jb21wcmVzc2VkX2xlbi03Kmxhc3QpKTtcbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTYXZlIHRoZSBtYXRjaCBpbmZvIGFuZCB0YWxseSB0aGUgZnJlcXVlbmN5IGNvdW50cy4gUmV0dXJuIHRydWUgaWZcbiAqIHRoZSBjdXJyZW50IGJsb2NrIG11c3QgYmUgZmx1c2hlZC5cbiAqL1xuZnVuY3Rpb24gX3RyX3RhbGx5KHMsIGRpc3QsIGxjKVxuLy8gICAgZGVmbGF0ZV9zdGF0ZSAqcztcbi8vICAgIHVuc2lnbmVkIGRpc3Q7ICAvKiBkaXN0YW5jZSBvZiBtYXRjaGVkIHN0cmluZyAqL1xuLy8gICAgdW5zaWduZWQgbGM7ICAgIC8qIG1hdGNoIGxlbmd0aC1NSU5fTUFUQ0ggb3IgdW5tYXRjaGVkIGNoYXIgKGlmIGRpc3Q9PTApICovXG57XG4gIC8vdmFyIG91dF9sZW5ndGgsIGluX2xlbmd0aCwgZGNvZGU7XG5cbiAgcy5wZW5kaW5nX2J1ZltzLmRfYnVmICsgcy5sYXN0X2xpdCAqIDJdICAgICA9IChkaXN0ID4+PiA4KSAmIDB4ZmY7XG4gIHMucGVuZGluZ19idWZbcy5kX2J1ZiArIHMubGFzdF9saXQgKiAyICsgMV0gPSBkaXN0ICYgMHhmZjtcblxuICBzLnBlbmRpbmdfYnVmW3MubF9idWYgKyBzLmxhc3RfbGl0XSA9IGxjICYgMHhmZjtcbiAgcy5sYXN0X2xpdCsrO1xuXG4gIGlmIChkaXN0ID09PSAwKSB7XG4gICAgLyogbGMgaXMgdGhlIHVubWF0Y2hlZCBjaGFyICovXG4gICAgcy5keW5fbHRyZWVbbGMgKiAyXS8qLkZyZXEqLysrO1xuICB9IGVsc2Uge1xuICAgIHMubWF0Y2hlcysrO1xuICAgIC8qIEhlcmUsIGxjIGlzIHRoZSBtYXRjaCBsZW5ndGggLSBNSU5fTUFUQ0ggKi9cbiAgICBkaXN0LS07ICAgICAgICAgICAgIC8qIGRpc3QgPSBtYXRjaCBkaXN0YW5jZSAtIDEgKi9cbiAgICAvL0Fzc2VydCgodXNoKWRpc3QgPCAodXNoKU1BWF9ESVNUKHMpICYmXG4gICAgLy8gICAgICAgKHVzaClsYyA8PSAodXNoKShNQVhfTUFUQ0gtTUlOX01BVENIKSAmJlxuICAgIC8vICAgICAgICh1c2gpZF9jb2RlKGRpc3QpIDwgKHVzaClEX0NPREVTLCAgXCJfdHJfdGFsbHk6IGJhZCBtYXRjaFwiKTtcblxuICAgIHMuZHluX2x0cmVlWyhfbGVuZ3RoX2NvZGVbbGNdICsgTElURVJBTFMgKyAxKSAqIDJdLyouRnJlcSovKys7XG4gICAgcy5keW5fZHRyZWVbZF9jb2RlKGRpc3QpICogMl0vKi5GcmVxKi8rKztcbiAgfVxuXG4vLyAoISkgVGhpcyBibG9jayBpcyBkaXNhYmxlZCBpbiB6bGliIGRlZmF1bHRzLFxuLy8gZG9uJ3QgZW5hYmxlIGl0IGZvciBiaW5hcnkgY29tcGF0aWJpbGl0eVxuXG4vLyNpZmRlZiBUUlVOQ0FURV9CTE9DS1xuLy8gIC8qIFRyeSB0byBndWVzcyBpZiBpdCBpcyBwcm9maXRhYmxlIHRvIHN0b3AgdGhlIGN1cnJlbnQgYmxvY2sgaGVyZSAqL1xuLy8gIGlmICgocy5sYXN0X2xpdCAmIDB4MWZmZikgPT09IDAgJiYgcy5sZXZlbCA+IDIpIHtcbi8vICAgIC8qIENvbXB1dGUgYW4gdXBwZXIgYm91bmQgZm9yIHRoZSBjb21wcmVzc2VkIGxlbmd0aCAqL1xuLy8gICAgb3V0X2xlbmd0aCA9IHMubGFzdF9saXQqODtcbi8vICAgIGluX2xlbmd0aCA9IHMuc3Ryc3RhcnQgLSBzLmJsb2NrX3N0YXJ0O1xuLy9cbi8vICAgIGZvciAoZGNvZGUgPSAwOyBkY29kZSA8IERfQ09ERVM7IGRjb2RlKyspIHtcbi8vICAgICAgb3V0X2xlbmd0aCArPSBzLmR5bl9kdHJlZVtkY29kZSoyXS8qLkZyZXEqLyAqICg1ICsgZXh0cmFfZGJpdHNbZGNvZGVdKTtcbi8vICAgIH1cbi8vICAgIG91dF9sZW5ndGggPj4+PSAzO1xuLy8gICAgLy9UcmFjZXYoKHN0ZGVycixcIlxcbmxhc3RfbGl0ICV1LCBpbiAlbGQsIG91dCB+JWxkKCVsZCUlKSBcIixcbi8vICAgIC8vICAgICAgIHMtPmxhc3RfbGl0LCBpbl9sZW5ndGgsIG91dF9sZW5ndGgsXG4vLyAgICAvLyAgICAgICAxMDBMIC0gb3V0X2xlbmd0aCoxMDBML2luX2xlbmd0aCkpO1xuLy8gICAgaWYgKHMubWF0Y2hlcyA8IChzLmxhc3RfbGl0Pj4xKS8qaW50IC8yKi8gJiYgb3V0X2xlbmd0aCA8IChpbl9sZW5ndGg+PjEpLyppbnQgLzIqLykge1xuLy8gICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgIH1cbi8vICB9XG4vLyNlbmRpZlxuXG4gIHJldHVybiAocy5sYXN0X2xpdCA9PT0gcy5saXRfYnVmc2l6ZSAtIDEpO1xuICAvKiBXZSBhdm9pZCBlcXVhbGl0eSB3aXRoIGxpdF9idWZzaXplIGJlY2F1c2Ugb2Ygd3JhcGFyb3VuZCBhdCA2NEtcbiAgICogb24gMTYgYml0IG1hY2hpbmVzIGFuZCBiZWNhdXNlIHN0b3JlZCBibG9ja3MgYXJlIHJlc3RyaWN0ZWQgdG9cbiAgICogNjRLLTEgYnl0ZXMuXG4gICAqL1xufVxuXG5leHBvcnRzLl90cl9pbml0ICA9IF90cl9pbml0O1xuZXhwb3J0cy5fdHJfc3RvcmVkX2Jsb2NrID0gX3RyX3N0b3JlZF9ibG9jaztcbmV4cG9ydHMuX3RyX2ZsdXNoX2Jsb2NrICA9IF90cl9mbHVzaF9ibG9jaztcbmV4cG9ydHMuX3RyX3RhbGx5ID0gX3RyX3RhbGx5O1xuZXhwb3J0cy5fdHJfYWxpZ24gPSBfdHJfYWxpZ247XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIChDKSAxOTk1LTIwMTMgSmVhbi1sb3VwIEdhaWxseSBhbmQgTWFyayBBZGxlclxuLy8gKEMpIDIwMTQtMjAxNyBWaXRhbHkgUHV6cmluIGFuZCBBbmRyZXkgVHVwaXRzaW5cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHByb3ZpZGVkICdhcy1pcycsIHdpdGhvdXQgYW55IGV4cHJlc3Mgb3IgaW1wbGllZFxuLy8gd2FycmFudHkuIEluIG5vIGV2ZW50IHdpbGwgdGhlIGF1dGhvcnMgYmUgaGVsZCBsaWFibGUgZm9yIGFueSBkYW1hZ2VzXG4vLyBhcmlzaW5nIGZyb20gdGhlIHVzZSBvZiB0aGlzIHNvZnR3YXJlLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgZ3JhbnRlZCB0byBhbnlvbmUgdG8gdXNlIHRoaXMgc29mdHdhcmUgZm9yIGFueSBwdXJwb3NlLFxuLy8gaW5jbHVkaW5nIGNvbW1lcmNpYWwgYXBwbGljYXRpb25zLCBhbmQgdG8gYWx0ZXIgaXQgYW5kIHJlZGlzdHJpYnV0ZSBpdFxuLy8gZnJlZWx5LCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgcmVzdHJpY3Rpb25zOlxuLy9cbi8vIDEuIFRoZSBvcmlnaW4gb2YgdGhpcyBzb2Z0d2FyZSBtdXN0IG5vdCBiZSBtaXNyZXByZXNlbnRlZDsgeW91IG11c3Qgbm90XG4vLyAgIGNsYWltIHRoYXQgeW91IHdyb3RlIHRoZSBvcmlnaW5hbCBzb2Z0d2FyZS4gSWYgeW91IHVzZSB0aGlzIHNvZnR3YXJlXG4vLyAgIGluIGEgcHJvZHVjdCwgYW4gYWNrbm93bGVkZ21lbnQgaW4gdGhlIHByb2R1Y3QgZG9jdW1lbnRhdGlvbiB3b3VsZCBiZVxuLy8gICBhcHByZWNpYXRlZCBidXQgaXMgbm90IHJlcXVpcmVkLlxuLy8gMi4gQWx0ZXJlZCBzb3VyY2UgdmVyc2lvbnMgbXVzdCBiZSBwbGFpbmx5IG1hcmtlZCBhcyBzdWNoLCBhbmQgbXVzdCBub3QgYmVcbi8vICAgbWlzcmVwcmVzZW50ZWQgYXMgYmVpbmcgdGhlIG9yaWdpbmFsIHNvZnR3YXJlLlxuLy8gMy4gVGhpcyBub3RpY2UgbWF5IG5vdCBiZSByZW1vdmVkIG9yIGFsdGVyZWQgZnJvbSBhbnkgc291cmNlIGRpc3RyaWJ1dGlvbi5cblxuZnVuY3Rpb24gWlN0cmVhbSgpIHtcbiAgLyogbmV4dCBpbnB1dCBieXRlICovXG4gIHRoaXMuaW5wdXQgPSBudWxsOyAvLyBKUyBzcGVjaWZpYywgYmVjYXVzZSB3ZSBoYXZlIG5vIHBvaW50ZXJzXG4gIHRoaXMubmV4dF9pbiA9IDA7XG4gIC8qIG51bWJlciBvZiBieXRlcyBhdmFpbGFibGUgYXQgaW5wdXQgKi9cbiAgdGhpcy5hdmFpbF9pbiA9IDA7XG4gIC8qIHRvdGFsIG51bWJlciBvZiBpbnB1dCBieXRlcyByZWFkIHNvIGZhciAqL1xuICB0aGlzLnRvdGFsX2luID0gMDtcbiAgLyogbmV4dCBvdXRwdXQgYnl0ZSBzaG91bGQgYmUgcHV0IHRoZXJlICovXG4gIHRoaXMub3V0cHV0ID0gbnVsbDsgLy8gSlMgc3BlY2lmaWMsIGJlY2F1c2Ugd2UgaGF2ZSBubyBwb2ludGVyc1xuICB0aGlzLm5leHRfb3V0ID0gMDtcbiAgLyogcmVtYWluaW5nIGZyZWUgc3BhY2UgYXQgb3V0cHV0ICovXG4gIHRoaXMuYXZhaWxfb3V0ID0gMDtcbiAgLyogdG90YWwgbnVtYmVyIG9mIGJ5dGVzIG91dHB1dCBzbyBmYXIgKi9cbiAgdGhpcy50b3RhbF9vdXQgPSAwO1xuICAvKiBsYXN0IGVycm9yIG1lc3NhZ2UsIE5VTEwgaWYgbm8gZXJyb3IgKi9cbiAgdGhpcy5tc2cgPSAnJy8qWl9OVUxMKi87XG4gIC8qIG5vdCB2aXNpYmxlIGJ5IGFwcGxpY2F0aW9ucyAqL1xuICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgLyogYmVzdCBndWVzcyBhYm91dCB0aGUgZGF0YSB0eXBlOiBiaW5hcnkgb3IgdGV4dCAqL1xuICB0aGlzLmRhdGFfdHlwZSA9IDIvKlpfVU5LTk9XTiovO1xuICAvKiBhZGxlcjMyIHZhbHVlIG9mIHRoZSB1bmNvbXByZXNzZWQgZGF0YSAqL1xuICB0aGlzLmFkbGVyID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBaU3RyZWFtO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJhcHBcIixcbiAgICAgIGNsYXNzOiB7IFwibWVudS1jb2xsYXBzZWRcIjogIV92bS4kbWVudU1hbmFnZXIuZGF0YS5vcGVuIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInRvb2xiYXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ2aWV3LXN0YWNrLWRyb3Bkb3duXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2lkZWJhclwiLFxuICAgICAgICAgIGNsYXNzOiB7IFwibWVudS1jb2xsYXBzZWRcIjogIV92bS4kbWVudU1hbmFnZXIuZGF0YS5vcGVuIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2JpbGUtYnJhbmRpbmctY29udGFpbmVyXCIsXG4gICAgICAgICAgICBzdHlsZTogX3ZtLmJyYW5kaW5nSW1hZ2VTdHlsZXMsXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmhvbWUgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYXBwLW1lbnVcIiwge1xuICAgICAgICAgICAgY2xhc3M6IHsgXCJtZW51LWNvbGxhcHNlZFwiOiAhX3ZtLiRtZW51TWFuYWdlci5kYXRhLm9wZW4gfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvb2xiYXItdmlld3N0YWNrLWNvbnRhaW5lclwiLFxuICAgICAgICAgIGNsYXNzOiB7IFwibWVudS1jb2xsYXBzZWRcIjogIV92bS4kbWVudU1hbmFnZXIuZGF0YS5vcGVuIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcInZpZXctc3RhY2tcIildLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZW51LWRyb3Bkb3duXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwibWVudS1kcm9wZG93bi1jaGlsZCBtZW51LWRyb3Bkb3duLWlucHV0XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbDogXCJsYWJlbFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5kYXRhLmxhYmVsLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRhLnZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczogX3ZtLmRhdGEuY2hvaWNlcyxcbiAgICAgICAgICAgIHNlYXJjaGFibGU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHsgaW5wdXQ6IF92bS5jaGFuZ2UgfSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJhXCIsXG4gICAge1xuICAgICAgY2xhc3M6IHtcbiAgICAgICAgXCJtZW51LWNoaWxkLXRpdGxlIG1lbnUtaXRlbVwiOiB0cnVlLFxuICAgICAgICBzZWxlY3RlZDogX3ZtLmRhdGEuc2VsZWN0ZWQsXG4gICAgICB9LFxuICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLmRhdGEubWFpblVybCB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3ZtLm9wZW4oJGV2ZW50KVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3ltYm9sLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICBjbGFzczogW1wiaWNvblwiLCBfdm0uaWNvbl0sXG4gICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWwtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYWJlbCkgKyBcIlxcbiAgICBcIiksXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubm90aWZpY2F0aW9uXG4gICAgICAgID8gX2MoXCJtZW51LW5vdGlmaWNhdGlvblwiLCB7IGF0dHJzOiB7IGRhdGE6IF92bS5ub3RpZmljYXRpb24gfSB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImNsaWNrLW91dHNpZGVcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtY2xpY2stb3V0c2lkZVwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0ub3V0c2lkZSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcIm91dHNpZGVcIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjbGFzczogeyBcIm1lbnUtbGlzdFwiOiB0cnVlLCBzZWxlY3RlZDogX3ZtLmRhdGEuc2VsZWN0ZWQgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudS1jaGlsZC10aXRsZSBtZW51LWxpc3QtY2hpbGQgbWVudS1saXN0LXRpdGxlXCIsXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGUgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3ltYm9sLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBbXCJpY29uXCIsIF92bS5pY29uXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sYWJlbCkgKyBcIlxcbiAgICAgICAgXCIpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLm5vdGlmaWNhdGlvblxuICAgICAgICAgICAgPyBfYyhcIm1lbnUtbm90aWZpY2F0aW9uXCIsIHsgYXR0cnM6IHsgZGF0YTogX3ZtLm5vdGlmaWNhdGlvbiB9IH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgIFwib3Blbi1pbmRpY2F0b3JcIixcbiAgICAgICAgICAgICAgXCJpY29uXCIsXG4gICAgICAgICAgICAgIHsgXCJpY29uLWtleWJvYXJkX2Fycm93X3VwXCI6IF92bS5kYXRhLmlzT3BlbiB9LFxuICAgICAgICAgICAgICB7IFwiaWNvbi1rZXlib2FyZF9hcnJvd19kb3duXCI6ICFfdm0uZGF0YS5pc09wZW4gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuaXNPcGVuLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGEuaXNPcGVuXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWVudS1saXN0LWNoaWxkIG1lbnUtbGlzdC1pdGVtc1wiLFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5kYXRhLmNoaWxkcmVuKCksIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBfYyhpdGVtLmNvbXBvbmVudCwgeyB0YWc6IFwiY29tcG9uZW50XCIsIGF0dHJzOiB7IGRhdGE6IGl0ZW0gfSB9KSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF92bS5vcGVuKClcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5nZXRJY29uKCkgfSldXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiY2xpY2stb3V0c2lkZVwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1jbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5jbG9zZSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImNsb3NlXCIsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhci1kcm9wZG93blwiLFxuICAgICAgY2xhc3M6IHsgc2VsZWN0ZWQ6IF92bS5pc09wZW4gfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXItZHJvcGRvd24tdGl0bGVcIiwgb246IHsgY2xpY2s6IF92bS50b2dnbGUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5nZXRJY29uKCkgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgXCJvcGVuLWluZGljYXRvclwiLFxuICAgICAgICAgICAgICBcImljb24gaWNvbi1rZXlib2FyZF9hcnJvd19kb3duXCIsXG4gICAgICAgICAgICAgIHsgXCJpY29uLWtleWJvYXJkX2Fycm93X3VwXCI6IF92bS5pc09wZW4gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlzT3BlbixcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpc09wZW5cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyLWRyb3Bkb3duLW1lbnVcIixcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbChfdm0uZGF0YS5tZW51LCBmdW5jdGlvbiAobWVudSkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyLWRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vcGVuKG1lbnUpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobWVudS5sYWJlbCkpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiaWZyYW1lXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uZGF0YS51cmwgfSB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5fbSgwKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiaWZyYW1lXCIsIHsgcmVmOiBcImZyYW1lXCIsIGF0dHJzOiB7IHNyYzogX3ZtLnVybCB9IH0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=