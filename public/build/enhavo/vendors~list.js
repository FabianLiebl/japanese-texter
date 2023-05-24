(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~list"],{

/***/ "./node_modules/@enhavo/app/flash-message/Message.ts":
/*!***********************************************************!*\
  !*** ./node_modules/@enhavo/app/flash-message/Message.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Message = /** @class */function () {
    function Message(type, message) {
      if (type === void 0) {
        type = null;
      }
      if (message === void 0) {
        message = null;
      }
      this.ttl = 5;
      if (type) {
        this.type = type;
      }
      if (message) {
        this.message = message;
      }
    }
    Message.SUCCESS = 'success';
    Message.ERROR = 'error';
    Message.NOTICE = 'notice';
    Message.WARNING = 'warning';
    return Message;
  }();
  exports["default"] = Message;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/list/Item.ts":
/*!***********************************************!*\
  !*** ./node_modules/@enhavo/app/list/Item.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Item = /** @class */function () {
    function Item() {
      this.expand = true;
      this.dragging = false;
      this.active = false;
    }
    Item.prototype.getDescendants = function () {
      var descendants = [];
      if (this.children) {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
          var child = _a[_i];
          descendants.push(child);
          for (var _b = 0, _c = child.getDescendants(); _b < _c.length; _b++) {
            var descendant = _c[_b];
            descendants.push(descendant);
          }
        }
      }
      return descendants;
    };
    return Item;
  }();
  exports["default"] = Item;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/list/List.ts":
/*!***********************************************!*\
  !*** ./node_modules/@enhavo/app/list/List.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/list/ListData */ "./node_modules/@enhavo/app/list/ListData.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! axios */ "./node_modules/axios/index.js"), __webpack_require__(/*! @enhavo/app/list/Item */ "./node_modules/@enhavo/app/list/Item.ts"), __webpack_require__(/*! @enhavo/app/flash-message/Message */ "./node_modules/@enhavo/app/flash-message/Message.ts"), __webpack_require__(/*! async */ "./node_modules/async/dist/async.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ListData_1, _, axios_1, Item_1, Message_1, async) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var List = /** @class */function () {
    function List(data, eventDispatcher, view, columnManager, router, translator, flashMessenger, componentRegistry) {
      _.extend(data, new ListData_1["default"]());
      this.data = data;
      this.eventDispatcher = eventDispatcher;
      this.columnManager = columnManager;
      this.view = view;
      this.router = router;
      this.translator = translator;
      this.flashMessenger = flashMessenger;
      this.componentRegistry = componentRegistry;
    }
    List.prototype.init = function () {
      var _this = this;
      this.flashMessenger.init();
      this.view.init();
      this.columnManager.columns = this.data.columns;
      this.columnManager.init();
      this.eventDispatcher.on('updated', function (event) {
        _this.view.loadValue('edit-view', function (id) {
          if (event.id == parseInt(id)) {
            _this.load();
          }
        });
      });
      this.eventDispatcher.on('removed', function (event) {
        _this.view.loadValue('active-view', function (id) {
          if (event.id == parseInt(id)) {
            _this.clearActiveItem();
          }
        });
      });
      this.eventDispatcher.on('loaded', function (event) {
        _this.view.loadValue('edit-view', function (id) {
          if (event.id == parseInt(id)) {
            _this.checkActiveItem();
          }
        });
      });
      this.componentRegistry.registerStore('list', this);
      this.componentRegistry.registerData(this.data);
    };
    List.prototype.load = function () {
      var _this = this;
      var parameters = {};
      if (this.data.dataRouteParameters) {
        parameters = this.data.dataRouteParameters;
      }
      var url = this.router.generate(this.data.dataRoute, parameters);
      this.data.loading = true;
      axios_1["default"].get(url)
      // executed on success
      .then(function (response) {
        _this.data.items = _this.createItemsData(response.data.resources);
        _this.data.token = response.data.token;
        _this.data.loading = false;
        _this.checkActiveItem();
      })
      // executed on error
      ["catch"](function (error) {});
    };
    List.prototype.createItemsData = function (resources) {
      for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
        var resource = resources_1[_i];
        _.extend(resource, new Item_1["default"]());
        if (resource.children) {
          this.createItemsData(resource.children);
        }
        resource.parentProperty = this.data.parentProperty;
        resource.positionProperty = this.data.positionProperty;
        resource.expand = this.data.expanded;
      }
      return resources;
    };
    List.prototype.open = function (item) {
      var _this = this;
      var parameters = {};
      if (this.data.openRouteParameters) {
        parameters = this.data.openRouteParameters;
      }
      parameters.id = item.id;
      this.activateItem(item).then(function () {
        var url = _this.router.generate(_this.data.openRoute, parameters);
        _this.view.open(url, 'edit-view').then(function (view) {
          _this.view.storeValue('active-view', view.id);
        });
      });
    };
    List.prototype.save = function (parent) {
      var _this = this;
      var items = null;
      if (parent === null) {
        items = this.data.items;
      } else {
        items = parent.children;
      }
      var ids = [];
      for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        ids.push(item.id);
      }
      var data = {
        parent: parent ? parent.id : null,
        items: ids
      };
      var url = this.router.generate(this.data.dataRoute, {
        _csrf_token: this.data.token
      });
      axios_1["default"].post(url, data)
      // executed on success
      .then(function (response) {
        _this.flashMessenger.addMessage(new Message_1["default"]('success', _this.translator.trans('enhavo_app.list.message.save')));
      })
      // executed on error
      ["catch"](function (error) {
        _this.flashMessenger.addMessage(new Message_1["default"]('error', _this.translator.trans('enhavo_app.list.message.error')));
      });
    };
    List.prototype.getAllItems = function () {
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
    List.prototype.activateItem = function (item) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        for (var _i = 0, _a = _this.getAllItems(); _i < _a.length; _i++) {
          var currentItem = _a[_i];
          currentItem.active = currentItem.id == item.id;
        }
        async.parallel([function (callback) {
          _this.view.storeValue('active-view', null).then(function () {
            callback(null);
          })["catch"](function () {
            callback(true);
          });
        }, function (callback) {
          _this.view.storeValue('active-item', item.id).then(function () {
            callback(null);
          })["catch"](function () {
            callback(true);
          });
        }], function (err) {
          if (err) {
            reject();
          } else {
            resolve();
          }
        });
      });
    };
    List.prototype.checkActiveItem = function () {
      var _this = this;
      this.view.loadValue('active-item', function (id) {
        if (id) {
          for (var _i = 0, _a = _this.getAllItems(); _i < _a.length; _i++) {
            var currentItem = _a[_i];
            currentItem.active = currentItem.id === parseInt(id);
          }
        }
      });
    };
    List.prototype.clearActiveItem = function () {
      this.view.storeValue('active-view', null);
      this.view.storeValue('active-item', null);
      for (var _i = 0, _a = this.getAllItems(); _i < _a.length; _i++) {
        var currentItem = _a[_i];
        currentItem.active = false;
      }
    };
    return List;
  }();
  exports["default"] = List;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/list/ListApp.ts":
/*!**************************************************!*\
  !*** ./node_modules/@enhavo/app/list/ListApp.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ListApp = /** @class */function () {
    function ListApp(view, actionManager, list) {
      this.view = view;
      this.actionManager = actionManager;
      this.list = list;
    }
    ListApp.prototype.init = function () {
      this.view.init();
      this.actionManager.init();
      this.list.init();
      this.list.load();
      this.view.addDefaultCloseListener();
      this.view.ready();
    };
    return ListApp;
  }();
  exports["default"] = ListApp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/list/ListData.ts":
/*!***************************************************!*\
  !*** ./node_modules/@enhavo/app/list/ListData.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ListData = /** @class */function () {
    function ListData() {
      this.items = [];
      this.loading = false;
      this.editView = null;
      this.dragging = false;
    }
    return ListData;
  }();
  exports["default"] = ListData;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue":
/*!*******************************************************************************!*\
  !*** ./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListApplicationComponent_vue_vue_type_template_id_5f29d13c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListApplicationComponent.vue?vue&type=template&id=5f29d13c& */ "./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue?vue&type=template&id=5f29d13c&");
/* harmony import */ var _ListApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListApplicationComponent.vue?vue&type=script&lang=ts& */ "./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue?vue&type=script&lang=ts&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ListApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ListApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListApplicationComponent_vue_vue_type_template_id_5f29d13c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListApplicationComponent_vue_vue_type_template_id_5f29d13c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/@enhavo/app/list/components/ListApplicationComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ListApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../babel-loader/lib??ref--7-0!../../../../ts-loader??ref--7-1!../../../../vue-loader/lib??vue-loader-options!./ListApplicationComponent.vue?vue&type=script&lang=ts& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue?vue&type=script&lang=ts&");
/* harmony import */ var _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ListApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ListApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ListApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ListApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_ref_7_0_ts_loader_index_js_ref_7_1_vue_loader_lib_index_js_vue_loader_options_ListApplicationComponent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue?vue&type=template&id=5f29d13c&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue?vue&type=template&id=5f29d13c& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ListApplicationComponent_vue_vue_type_template_id_5f29d13c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../vue-loader/lib??vue-loader-options!./ListApplicationComponent.vue?vue&type=template&id=5f29d13c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue?vue&type=template&id=5f29d13c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ListApplicationComponent_vue_vue_type_template_id_5f29d13c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_ref_6_vue_loader_lib_index_js_vue_loader_options_ListApplicationComponent_vue_vue_type_template_id_5f29d13c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--7-0!./node_modules/ts-loader??ref--7-1!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! vue-property-decorator */ "./node_modules/vue-property-decorator/lib/vue-property-decorator.js"), __webpack_require__(/*! @enhavo/app/assets/fonts/enhavo-icons.font */ "./node_modules/@enhavo/app/assets/fonts/enhavo-icons.font.js"), __webpack_require__(/*! @enhavo/app/assets/styles/view.scss */ "./node_modules/@enhavo/app/assets/styles/view.scss")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, vue_property_decorator_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ListApplicationComponent = /** @class */function (_super) {
    __extends(ListApplicationComponent, _super);
    function ListApplicationComponent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    ListApplicationComponent = __decorate([vue_property_decorator_1.Component], ListApplicationComponent);
    return ListApplicationComponent;
  }(vue_property_decorator_1.Vue);
  exports["default"] = ListApplicationComponent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue?vue&type=template&id=5f29d13c&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@enhavo/app/list/components/ListApplicationComponent.vue?vue&type=template&id=5f29d13c& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _c("list-list"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9NZXNzYWdlLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9saXN0L0l0ZW0udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL2xpc3QvTGlzdC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbGlzdC9MaXN0QXBwLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9saXN0L0xpc3REYXRhLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC9saXN0L2NvbXBvbmVudHMvTGlzdEFwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbGlzdC9jb21wb25lbnRzL0xpc3RBcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/ZmUxNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbGlzdC9jb21wb25lbnRzL0xpc3RBcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/ODU0NCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbGlzdC9jb21wb25lbnRzL0xpc3RBcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/NjZmOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbGlzdC9jb21wb25lbnRzL0xpc3RBcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/YThhNyJdLCJuYW1lcyI6WyJNZXNzYWdlIiwidHlwZSIsIm1lc3NhZ2UiLCJ0dGwiLCJTVUNDRVNTIiwiRVJST1IiLCJOT1RJQ0UiLCJXQVJOSU5HIiwiSXRlbSIsImV4cGFuZCIsImRyYWdnaW5nIiwiYWN0aXZlIiwicHJvdG90eXBlIiwiZ2V0RGVzY2VuZGFudHMiLCJkZXNjZW5kYW50cyIsImNoaWxkcmVuIiwiX2kiLCJfYSIsImxlbmd0aCIsImNoaWxkIiwicHVzaCIsIl9iIiwiX2MiLCJkZXNjZW5kYW50IiwiTGlzdCIsImRhdGEiLCJldmVudERpc3BhdGNoZXIiLCJ2aWV3IiwiY29sdW1uTWFuYWdlciIsInJvdXRlciIsInRyYW5zbGF0b3IiLCJmbGFzaE1lc3NlbmdlciIsImNvbXBvbmVudFJlZ2lzdHJ5IiwiXyIsImV4dGVuZCIsIkxpc3REYXRhXzEiLCJpbml0IiwiX3RoaXMiLCJjb2x1bW5zIiwib24iLCJldmVudCIsImxvYWRWYWx1ZSIsImlkIiwicGFyc2VJbnQiLCJsb2FkIiwiY2xlYXJBY3RpdmVJdGVtIiwiY2hlY2tBY3RpdmVJdGVtIiwicmVnaXN0ZXJTdG9yZSIsInJlZ2lzdGVyRGF0YSIsInBhcmFtZXRlcnMiLCJkYXRhUm91dGVQYXJhbWV0ZXJzIiwidXJsIiwiZ2VuZXJhdGUiLCJkYXRhUm91dGUiLCJsb2FkaW5nIiwiYXhpb3NfMSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsIml0ZW1zIiwiY3JlYXRlSXRlbXNEYXRhIiwicmVzb3VyY2VzIiwidG9rZW4iLCJlcnJvciIsInJlc291cmNlc18xIiwicmVzb3VyY2UiLCJJdGVtXzEiLCJwYXJlbnRQcm9wZXJ0eSIsInBvc2l0aW9uUHJvcGVydHkiLCJleHBhbmRlZCIsIm9wZW4iLCJpdGVtIiwib3BlblJvdXRlUGFyYW1ldGVycyIsImFjdGl2YXRlSXRlbSIsIm9wZW5Sb3V0ZSIsInN0b3JlVmFsdWUiLCJzYXZlIiwicGFyZW50IiwiaWRzIiwiaXRlbXNfMSIsIl9jc3JmX3Rva2VuIiwicG9zdCIsImFkZE1lc3NhZ2UiLCJNZXNzYWdlXzEiLCJ0cmFucyIsImdldEFsbEl0ZW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjdXJyZW50SXRlbSIsImFzeW5jIiwicGFyYWxsZWwiLCJjYWxsYmFjayIsImVyciIsIkxpc3RBcHAiLCJhY3Rpb25NYW5hZ2VyIiwibGlzdCIsImFkZERlZmF1bHRDbG9zZUxpc3RlbmVyIiwicmVhZHkiLCJMaXN0RGF0YSIsImVkaXRWaWV3IiwiTGlzdEFwcGxpY2F0aW9uQ29tcG9uZW50IiwiX3N1cGVyIiwiX19leHRlbmRzIiwiX19kZWNvcmF0ZSIsInZ1ZV9wcm9wZXJ0eV9kZWNvcmF0b3JfMSIsIkNvbXBvbmVudCIsIlZ1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0VBRUEsSUFBQUEsT0FBQTtJQVdJLFNBQUFBLFFBQVlDLElBQW1CLEVBQUVDLE9BQXNCO01BQTNDLElBQUFELElBQUE7UUFBQUEsSUFBQSxPQUFtQjtNQUFBO01BQUUsSUFBQUMsT0FBQTtRQUFBQSxPQUFBLE9BQXNCO01BQUE7TUFGaEQsS0FBQUMsR0FBRyxHQUFXLENBQUM7TUFHbEIsSUFBR0YsSUFBSSxFQUFFO1FBQ0wsSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUk7O01BRXBCLElBQUdDLE9BQU8sRUFBRTtRQUNSLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPOztJQUU5QjtJQWhCT0YsT0FBQSxDQUFBSSxPQUFPLEdBQUcsU0FBUztJQUNuQkosT0FBQSxDQUFBSyxLQUFLLEdBQUcsT0FBTztJQUNmTCxPQUFBLENBQUFNLE1BQU0sR0FBRyxRQUFRO0lBQ2pCTixPQUFBLENBQUFPLE9BQU8sR0FBRyxTQUFTO0lBYzlCLE9BQUFQLE9BQUM7R0FBQSxDQW5CRDt1QkFBcUJBLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUNENUIsSUFBQVEsSUFBQTtJQUFBLFNBQUFBLEtBQUE7TUFLVyxLQUFBQyxNQUFNLEdBQVksSUFBSTtNQUN0QixLQUFBQyxRQUFRLEdBQVksS0FBSztNQUd6QixLQUFBQyxNQUFNLEdBQVksS0FBSztJQWVsQztJQWJXSCxJQUFBLENBQUFJLFNBQUEsQ0FBQUMsY0FBYyxHQUFyQjtNQUVJLElBQUlDLFdBQVcsR0FBRyxFQUFFO01BQ3BCLElBQUcsSUFBSSxDQUFDQyxRQUFRLEVBQUU7UUFDZCxLQUFpQixJQUFBQyxFQUFBLElBQWEsRUFBYkMsRUFBQSxPQUFJ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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQTtBQUFBO0FBQTZOLENBQWdCLG9RQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDTUksSUFBQUUsd0JBQUEsMEJBQUFDLE1BQUE7SUFBc0RDLFNBQUEsQ0FBQUYsd0JBQUEsRUFBQUMsTUFBQTtJQUF0RCxTQUFBRCx5QkFBQTs7SUFHQTtJQUhxQkEsd0JBQXdCLEdBQUFHLFVBQUEsRUFENUNDLHdCQUFBLENBQUFDLFNBQVMsQyxFQUNXTCx3QkFBd0IsQ0FHNUM7SUFBRCxPQUFBQSx3QkFBQztHQUFBLENBSHFESSx3QkFBQSxDQUFBRSxHQUFHO3VCQUFwQ04sd0JBQXdCOzs7Ozs7Ozs7Ozs7OztBQ05qRDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDBCQUEwQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InZlbmRvcnN+bGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlXG57XG4gICAgc3RhdGljIFNVQ0NFU1MgPSAnc3VjY2Vzcyc7XG4gICAgc3RhdGljIEVSUk9SID0gJ2Vycm9yJztcbiAgICBzdGF0aWMgTk9USUNFID0gJ25vdGljZSc7XG4gICAgc3RhdGljIFdBUk5JTkcgPSAnd2FybmluZyc7XG5cbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIHR0bDogbnVtYmVyID0gNTtcblxuICAgIGNvbnN0cnVjdG9yKHR5cGU6IHN0cmluZyA9IG51bGwsIG1lc3NhZ2U6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYodHlwZSkge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZihtZXNzYWdlKSB7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgfVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbVxue1xuICAgIHB1YmxpYyBjaGlsZHJlbjogSXRlbVtdO1xuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIGV4cGFuZDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGRyYWdnaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIHBhcmVudFByb3BlcnR5OiBzdHJpbmc7XG4gICAgcHVibGljIHBvc2l0aW9uUHJvcGVydHk6IHN0cmluZztcbiAgICBwdWJsaWMgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgZ2V0RGVzY2VuZGFudHMoKTogSXRlbVtdXG4gICAge1xuICAgICAgICBsZXQgZGVzY2VuZGFudHMgPSBbXTtcbiAgICAgICAgaWYodGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgICAgZm9yKGxldCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgZGVzY2VuZGFudHMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBkZXNjZW5kYW50IG9mIGNoaWxkLmdldERlc2NlbmRhbnRzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY2VuZGFudHMucHVzaChkZXNjZW5kYW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlc2NlbmRhbnRzO1xuICAgIH1cbn0iLCJpbXBvcnQgTGlzdERhdGEgZnJvbSBcIkBlbmhhdm8vYXBwL2xpc3QvTGlzdERhdGFcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBDb2x1bW5NYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2FwcC9ncmlkL2NvbHVtbi9Db2x1bW5NYW5hZ2VyXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJAZW5oYXZvL2NvcmUvUm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiQGVuaGF2by9hcHAvbGlzdC9JdGVtXCI7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiQGVuaGF2by9jb3JlL1RyYW5zbGF0b3JcIjtcbmltcG9ydCBVcGRhdGVkRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvVXBkYXRlZEV2ZW50XCI7XG5pbXBvcnQgRmxhc2hNZXNzZW5nZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2ZsYXNoLW1lc3NhZ2UvRmxhc2hNZXNzZW5nZXJcIjtcbmltcG9ydCBNZXNzYWdlIGZyb20gXCJAZW5oYXZvL2FwcC9mbGFzaC1tZXNzYWdlL01lc3NhZ2VcIjtcbmltcG9ydCAqIGFzIGFzeW5jIGZyb20gXCJhc3luY1wiO1xuaW1wb3J0IFZpZXdJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svVmlld0ludGVyZmFjZVwiO1xuaW1wb3J0IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdFxue1xuICAgIHB1YmxpYyBkYXRhOiBMaXN0RGF0YTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb2x1bW5NYW5hZ2VyOiBDb2x1bW5NYW5hZ2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlldztcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRvcjogVHJhbnNsYXRvcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZsYXNoTWVzc2VuZ2VyOiBGbGFzaE1lc3NlbmdlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBkYXRhOiBMaXN0RGF0YSxcbiAgICAgICAgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIsXG4gICAgICAgIHZpZXc6IFZpZXcsXG4gICAgICAgIGNvbHVtbk1hbmFnZXI6IENvbHVtbk1hbmFnZXIsXG4gICAgICAgIHJvdXRlcjogUm91dGVyLFxuICAgICAgICB0cmFuc2xhdG9yOiBUcmFuc2xhdG9yLFxuICAgICAgICBmbGFzaE1lc3NlbmdlcjogRmxhc2hNZXNzZW5nZXIsXG4gICAgICAgIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZVxuICAgICkge1xuICAgICAgICBfLmV4dGVuZChkYXRhLCBuZXcgTGlzdERhdGEpO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGV2ZW50RGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy5jb2x1bW5NYW5hZ2VyID0gY29sdW1uTWFuYWdlcjtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHRoaXMudHJhbnNsYXRvciA9IHRyYW5zbGF0b3I7XG4gICAgICAgIHRoaXMuZmxhc2hNZXNzZW5nZXIgPSBmbGFzaE1lc3NlbmdlcjtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeSA9IGNvbXBvbmVudFJlZ2lzdHJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KClcbiAgICB7XG4gICAgICAgIHRoaXMuZmxhc2hNZXNzZW5nZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLnZpZXcuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMuY29sdW1uTWFuYWdlci5jb2x1bW5zID0gdGhpcy5kYXRhLmNvbHVtbnM7XG4gICAgICAgIHRoaXMuY29sdW1uTWFuYWdlci5pbml0KCk7XG5cbiAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIub24oJ3VwZGF0ZWQnLCAoZXZlbnQ6IFVwZGF0ZWRFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmxvYWRWYWx1ZSgnZWRpdC12aWV3JywgKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnQuaWQgPT0gcGFyc2VJbnQoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5vbigncmVtb3ZlZCcsIChldmVudDogVXBkYXRlZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZXcubG9hZFZhbHVlKCdhY3RpdmUtdmlldycsIChpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50LmlkID09IHBhcnNlSW50KGlkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQWN0aXZlSXRlbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5vbignbG9hZGVkJywgKGV2ZW50OiBVcGRhdGVkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlldy5sb2FkVmFsdWUoJ2VkaXQtdmlldycsIChpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50LmlkID09IHBhcnNlSW50KGlkKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQWN0aXZlSXRlbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyU3RvcmUoJ2xpc3QnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckRhdGEodGhpcy5kYXRhKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZCgpXG4gICAge1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogYW55ID0ge307XG4gICAgICAgIGlmKHRoaXMuZGF0YS5kYXRhUm91dGVQYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzID0gdGhpcy5kYXRhLmRhdGFSb3V0ZVBhcmFtZXRlcnM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVybCA9IHRoaXMucm91dGVyLmdlbmVyYXRlKHRoaXMuZGF0YS5kYXRhUm91dGUsIHBhcmFtZXRlcnMpO1xuXG4gICAgICAgIHRoaXMuZGF0YS5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAgIC5nZXQodXJsKVxuICAgICAgICAgICAgLy8gZXhlY3V0ZWQgb24gc3VjY2Vzc1xuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5pdGVtcyA9IHRoaXMuY3JlYXRlSXRlbXNEYXRhKHJlc3BvbnNlLmRhdGEucmVzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudG9rZW4gPSByZXNwb25zZS5kYXRhLnRva2VuO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FjdGl2ZUl0ZW0oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBleGVjdXRlZCBvbiBlcnJvclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcblxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUl0ZW1zRGF0YShyZXNvdXJjZXM6IGFueSk6IEl0ZW1bXVxuICAgIHtcbiAgICAgICAgZm9yKGxldCByZXNvdXJjZSBvZiByZXNvdXJjZXMpIHtcbiAgICAgICAgICAgIF8uZXh0ZW5kKHJlc291cmNlLCBuZXcgSXRlbSk7XG4gICAgICAgICAgICBpZihyZXNvdXJjZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbXNEYXRhKHJlc291cmNlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc291cmNlLnBhcmVudFByb3BlcnR5ID0gdGhpcy5kYXRhLnBhcmVudFByb3BlcnR5O1xuICAgICAgICAgICAgcmVzb3VyY2UucG9zaXRpb25Qcm9wZXJ0eSA9IHRoaXMuZGF0YS5wb3NpdGlvblByb3BlcnR5O1xuICAgICAgICAgICAgcmVzb3VyY2UuZXhwYW5kID0gdGhpcy5kYXRhLmV4cGFuZGVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvdXJjZXM7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW4oaXRlbTogSXRlbSlcbiAgICB7XG4gICAgICAgIGxldCBwYXJhbWV0ZXJzOiBhbnkgPSB7fTtcbiAgICAgICAgaWYodGhpcy5kYXRhLm9wZW5Sb3V0ZVBhcmFtZXRlcnMpIHtcbiAgICAgICAgICAgIHBhcmFtZXRlcnMgPSB0aGlzLmRhdGEub3BlblJvdXRlUGFyYW1ldGVycztcbiAgICAgICAgfVxuICAgICAgICBwYXJhbWV0ZXJzLmlkID0gaXRlbS5pZDtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZUl0ZW0oaXRlbSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdXJsID0gdGhpcy5yb3V0ZXIuZ2VuZXJhdGUodGhpcy5kYXRhLm9wZW5Sb3V0ZSwgcGFyYW1ldGVycyk7XG4gICAgICAgICAgICB0aGlzLnZpZXcub3Blbih1cmwsICdlZGl0LXZpZXcnKS50aGVuKCh2aWV3OiBWaWV3SW50ZXJmYWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnN0b3JlVmFsdWUoJ2FjdGl2ZS12aWV3Jywgdmlldy5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZShwYXJlbnQ6IEl0ZW0pXG4gICAge1xuICAgICAgICBsZXQgaXRlbXM6IEl0ZW1bXSA9IG51bGw7XG4gICAgICAgIGlmKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaXRlbXMgPSB0aGlzLmRhdGEuaXRlbXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1zID0gcGFyZW50LmNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlkcyA9IFtdO1xuICAgICAgICBmb3IobGV0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIGlkcy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCA/IHBhcmVudC5pZCA6IG51bGwsXG4gICAgICAgICAgICBpdGVtczogaWRzXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHVybCA9IHRoaXMucm91dGVyLmdlbmVyYXRlKHRoaXMuZGF0YS5kYXRhUm91dGUsIHtcbiAgICAgICAgICAgIF9jc3JmX3Rva2VuOiB0aGlzLmRhdGEudG9rZW4sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdCh1cmwsIGRhdGEpXG4gICAgICAgICAgICAvLyBleGVjdXRlZCBvbiBzdWNjZXNzXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mbGFzaE1lc3Nlbmdlci5hZGRNZXNzYWdlKG5ldyBNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRvci50cmFucygnZW5oYXZvX2FwcC5saXN0Lm1lc3NhZ2Uuc2F2ZScpXG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBleGVjdXRlZCBvbiBlcnJvclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZsYXNoTWVzc2VuZ2VyLmFkZE1lc3NhZ2UobmV3IE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNsYXRvci50cmFucygnZW5oYXZvX2FwcC5saXN0Lm1lc3NhZ2UuZXJyb3InKVxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QWxsSXRlbXMoKTogSXRlbVtdXG4gICAge1xuICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpdGVtIG9mIHRoaXMuZGF0YS5pdGVtcykge1xuICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIGZvcihsZXQgZGVzY2VuZGFudCBvZiBpdGVtLmdldERlc2NlbmRhbnRzKCkpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGRlc2NlbmRhbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICBwcml2YXRlIGFjdGl2YXRlSXRlbShpdGVtOiBJdGVtKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZvcihsZXQgY3VycmVudEl0ZW0gb2YgdGhpcy5nZXRBbGxJdGVtcygpKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uYWN0aXZlID0gY3VycmVudEl0ZW0uaWQgPT0gaXRlbS5pZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXN5bmMucGFyYWxsZWwoWyhjYWxsYmFjazogKGVycjogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnN0b3JlVmFsdWUoJ2FjdGl2ZS12aWV3JywgbnVsbCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LChjYWxsYmFjazogKGVycjogYW55KSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnN0b3JlVmFsdWUoJ2FjdGl2ZS1pdGVtJywgaXRlbS5pZCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XSwgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tBY3RpdmVJdGVtKClcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy5sb2FkVmFsdWUoJ2FjdGl2ZS1pdGVtJywgKGlkKSA9PiB7XG4gICAgICAgICAgICBpZihpZCkge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgY3VycmVudEl0ZW0gb2YgdGhpcy5nZXRBbGxJdGVtcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmFjdGl2ZSA9IGN1cnJlbnRJdGVtLmlkID09PSBwYXJzZUludChpZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJBY3RpdmVJdGVtKClcbiAgICB7XG4gICAgICAgIHRoaXMudmlldy5zdG9yZVZhbHVlKCdhY3RpdmUtdmlldycsIG51bGwpO1xuICAgICAgICB0aGlzLnZpZXcuc3RvcmVWYWx1ZSgnYWN0aXZlLWl0ZW0nLCBudWxsKTtcbiAgICAgICAgZm9yKGxldCBjdXJyZW50SXRlbSBvZiB0aGlzLmdldEFsbEl0ZW1zKCkpIHtcbiAgICAgICAgICAgIGN1cnJlbnRJdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IEFjdGlvbk1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vYXBwL2FjdGlvbi9BY3Rpb25NYW5hZ2VyXCI7XG5pbXBvcnQgVmlldyBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9WaWV3XCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQGVuaGF2by9hcHAvbGlzdC9MaXN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RBcHBcbntcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IFZpZXc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25NYW5hZ2VyOiBBY3Rpb25NYW5hZ2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbGlzdDogTGlzdDtcblxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcsIGFjdGlvbk1hbmFnZXI6IEFjdGlvbk1hbmFnZXIsIGxpc3Q6IExpc3QpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmFjdGlvbk1hbmFnZXIgPSBhY3Rpb25NYW5hZ2VyO1xuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMudmlldy5pbml0KCk7XG4gICAgICAgIHRoaXMuYWN0aW9uTWFuYWdlci5pbml0KCk7XG4gICAgICAgIHRoaXMubGlzdC5pbml0KCk7XG4gICAgICAgIHRoaXMubGlzdC5sb2FkKCk7XG5cbiAgICAgICAgdGhpcy52aWV3LmFkZERlZmF1bHRDbG9zZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMudmlldy5yZWFkeSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb2x1bW5JbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vYXBwL2dyaWQvY29sdW1uL0NvbHVtbkludGVyZmFjZVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIkBlbmhhdm8vYXBwL2xpc3QvSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0RGF0YVxue1xuICAgIHB1YmxpYyBkYXRhUm91dGU6IHN0cmluZztcbiAgICBwdWJsaWMgZGF0YVJvdXRlUGFyYW1ldGVyczogb2JqZWN0O1xuICAgIHB1YmxpYyBvcGVuUm91dGU6IHN0cmluZztcbiAgICBwdWJsaWMgb3BlblJvdXRlUGFyYW1ldGVyczogb2JqZWN0O1xuICAgIHB1YmxpYyBjb2x1bW5zOiBBcnJheTxDb2x1bW5JbnRlcmZhY2U+O1xuICAgIHB1YmxpYyBpdGVtczogQXJyYXk8SXRlbT4gPSBbXTtcbiAgICBwdWJsaWMgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBlZGl0VmlldzogbnVtYmVyID0gbnVsbDtcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZztcbiAgICBwdWJsaWMgZHJhZ2dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgcG9zaXRpb25Qcm9wZXJ0eTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJlbnRQcm9wZXJ0eTogc3RyaW5nO1xuICAgIHB1YmxpYyBleHBhbmRlZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgc29ydGFibGU6IGJvb2xlYW47XG4gICAgcHVibGljIGNzc0NsYXNzOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xpc3RBcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWYyOWQxM2MmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTGlzdEFwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTGlzdEFwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvdmFyL3d3dy9yZXBvcy9wcml2YXQvamFwYW5lc2UtdGV4dGVyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVmMjlkMTNjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVmMjlkMTNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVmMjlkMTNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9MaXN0QXBwbGljYXRpb25Db21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmMjlkMTNjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVmMjlkMTNjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbGlzdC9jb21wb25lbnRzL0xpc3RBcHBsaWNhdGlvbkNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL3RzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTEhLi4vLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xpc3RBcHBsaWNhdGlvbkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vdHMtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMSEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGlzdEFwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3JlZi0tNiEuLi8uLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGlzdEFwcGxpY2F0aW9uQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjI5ZDEzYyZcIiIsIlxuICAgIGltcG9ydCB7IFZ1ZSwgQ29tcG9uZW50IH0gZnJvbSBcInZ1ZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbiAgICBpbXBvcnQgJ0Blbmhhdm8vYXBwL2Fzc2V0cy9mb250cy9lbmhhdm8taWNvbnMuZm9udCdcbiAgICBpbXBvcnQgJ0Blbmhhdm8vYXBwL2Fzc2V0cy9zdHlsZXMvdmlldy5zY3NzJ1xuXG4gICAgQENvbXBvbmVudFxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RBcHBsaWNhdGlvbkNvbXBvbmVudCBleHRlbmRzIFZ1ZVxuICAgIHtcblxuICAgIH1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jLFxuICAgIF9zZXR1cCA9IF92bS5fc2VsZi5fc2V0dXBQcm94eVxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImFwcC12aWV3XCIgfSxcbiAgICBbXG4gICAgICBfYyhcInZpZXctdmlld1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZsYXNoLW1lc3NhZ2VzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYWN0aW9uLWJhclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImxpc3QtbGlzdFwiKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=