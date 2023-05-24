(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/ComponentAwareInterface.ts":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/ComponentAwareInterface.ts ***!
  \*********************************************************************************************/
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

/***/ "./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/FactoryInterface.ts":
/*!**************************************************************************************!*\
  !*** ./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/FactoryInterface.ts ***!
  \**************************************************************************************/
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

/***/ "./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/Registry.ts":
/*!******************************************************************************!*\
  !*** ./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/Registry.ts ***!
  \******************************************************************************/
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

/***/ "./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/RegistryInterface.ts":
/*!***************************************************************************************!*\
  !*** ./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/RegistryInterface.ts ***!
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

/***/ "./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/index.ts":
/*!***************************************************************************!*\
  !*** ./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/index.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Registry */ "./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/Registry.ts"), __webpack_require__(/*! ./RegistryInterface */ "./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/RegistryInterface.ts"), __webpack_require__(/*! ./FactoryInterface */ "./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/FactoryInterface.ts"), __webpack_require__(/*! ./ComponentAwareInterface */ "./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/ComponentAwareInterface.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Registry_1, RegistryInterface_1, FactoryInterface_1, ComponentAwareInterface_1) {
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

/***/ "./node_modules/@enhavo/dashboard/widget/WidgetRegistry.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/dashboard/widget/WidgetRegistry.ts ***!
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/core */ "./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var WidgetRegistry = /** @class */function (_super) {
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL0Blbmhhdm8vY29yZS9SZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL0Blbmhhdm8vY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9kYXNoYm9hcmQvd2lkZ2V0L1dpZGdldFJlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbIlJlZ2lzdHJ5IiwiZW50cmllcyIsInByb3RvdHlwZSIsImdldCIsIm5hbWUiLCJfaSIsIl9hIiwibGVuZ3RoIiwiZW50cnkiLCJnZXROYW1lIiwiZ2V0RmFjdG9yeSIsImdldENvbXBvbmVudCIsInJlZ2lzdGVyIiwiaGFzIiwiZGVsZXRlRW50cnkiLCJwdXNoIiwiaSIsInNwbGljZSIsInBhcnNlSW50IiwiZ2V0Q29tcG9uZW50cyIsImNvbXBvbmVudHMiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJleHBvcnRzIiwiUmVnaXN0cnlfMSIsIlJlZ2lzdHJ5SW50ZXJmYWNlIiwiUmVnaXN0cnlJbnRlcmZhY2VfMSIsIkZhY3RvcnlJbnRlcmZhY2UiLCJGYWN0b3J5SW50ZXJmYWNlXzEiLCJDb21wb25lbnRBd2FyZUludGVyZmFjZSIsIkNvbXBvbmVudEF3YXJlSW50ZXJmYWNlXzEiLCJXaWRnZXRSZWdpc3RyeSIsIl9zdXBlciIsIl9fZXh0ZW5kcyIsImNhbGwiLCJjb3JlXzEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFHQSxJQUFBQSxRQUFBO0lBQUEsU0FBQUEsU0FBQTtNQUVZLEtBQUFDLE9BQU8sR0FBb0IsRUFBRTtJQTJEekM7SUF6RFlELFFBQUEsQ0FBQUUsU0FBQSxDQUFBQyxHQUFHLEdBQVgsVUFBWUMsSUFBWTtNQUVwQixLQUFp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OUI7SUFDSixPQUFBRCxTQUFDO0VBQUQsQ0FBQyxDQVREO0VBQWFFLE9BQUEsQ0FBQUYsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQzVEVEUsT0FBQSxDQUFBdkIsUUFBQSxHQU5Hd0IsVUFBQSxXQUFRO0VBT1hELE9BQUEsQ0FBQUUsaUJBQUEsR0FOR0MsbUJBQUEsV0FBaUI7RUFPcEJILE9BQUEsQ0FBQUksZ0JBQUEsR0FOR0Msa0JBQUEsV0FBZ0I7RUFPbkJMLE9BQUEsQ0FBQU0sdUJBQUEsR0FOR0MseUJBQUEsV0FBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDQTlCLElBQUFDLGNBQUEsMEJBQUFDLE1BQUE7SUFBNENDLFNBQUEsQ0FBQUYsY0FBQSxFQUFBQyxNQUFBO0lBQTVDLFNBQUFELGVBQUE7O0lBS0E7SUFISUEsY0FBQSxDQUFBN0IsU0FBQSxDQUFBUSxVQUFVLEdBQVYsVUFBV04sSUFBWTtNQUNuQixPQUErQjRCLE1BQUEsQ0FBQTlCLFNBQUEsQ0FBTVEsVUFBVSxDQUFBd0IsSUFBQSxPQUFDOUIsSUFBSSxDQUFDO0lBQ3pELENBQUM7SUFDTCxPQUFBMkIsY0FBQztFQUFELENBQUMsQ0FMMkNJLE1BQUEsQ0FBQW5DLFFBQVEiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiLi9SZWdpc3RyeUludGVyZmFjZVwiO1xuaW1wb3J0IFJlZ2lzdHJ5RW50cnkgZnJvbSBcIkBlbmhhdm8vY29yZS9SZWdpc3RyeUVudHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdHJ5IGltcGxlbWVudHMgUmVnaXN0cnlJbnRlcmZhY2VcbntcbiAgICBwcml2YXRlIGVudHJpZXM6IFJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBnZXQobmFtZTogc3RyaW5nKTogUmVnaXN0cnlFbnRyeVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93ICdFbnRyeSB3aXRoIG5hbWUgXCInK25hbWUrJ1wiIGRvZXMgbm90IGV4aXN0IGluIHJlZ2lzdHJ5JztcbiAgICB9XG5cbiAgICBnZXRGYWN0b3J5KG5hbWU6IHN0cmluZyk6IG9iamVjdFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpLmdldEZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnQobmFtZTogc3RyaW5nKTogb2JqZWN0XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkuZ2V0Q29tcG9uZW50KCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoZW50cnk6IFJlZ2lzdHJ5RW50cnkpOiBSZWdpc3RyeUludGVyZmFjZVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5oYXMoZW50cnkuZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVFbnRyeShlbnRyeS5nZXROYW1lKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVFbnRyeShuYW1lOiBzdHJpbmcpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgaWYodGhpcy5lbnRyaWVzW2ldLmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNwbGljZShwYXJzZUludChpKSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudHMoKTogQ29tcG9uZW50W11cbiAgICB7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gW107XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2gobmV3IENvbXBvbmVudChlbnRyeS5nZXROYW1lKCksIGVudHJ5LmdldENvbXBvbmVudCgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50XG57XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgY29tcG9uZW50OiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWdpc3RyeSBmcm9tICcuL1JlZ2lzdHJ5JztcbmltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tICcuL1JlZ2lzdHJ5SW50ZXJmYWNlJztcbmltcG9ydCBGYWN0b3J5SW50ZXJmYWNlIGZyb20gJy4vRmFjdG9yeUludGVyZmFjZSc7XG5pbXBvcnQgQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UgZnJvbSAnLi9Db21wb25lbnRBd2FyZUludGVyZmFjZSc7XG5cbmV4cG9ydCB7XG4gICAgUmVnaXN0cnksXG4gICAgUmVnaXN0cnlJbnRlcmZhY2UsXG4gICAgRmFjdG9yeUludGVyZmFjZSxcbiAgICBDb21wb25lbnRBd2FyZUludGVyZmFjZVxufTtcbiIsImltcG9ydCB7IFJlZ2lzdHJ5IH0gZnJvbSBcIkBlbmhhdm8vY29yZVwiO1xuaW1wb3J0IFdpZGdldEZhY3RvcnlJbnRlcmZhY2UgZnJvbSBcIi4vV2lkZ2V0RmFjdG9yeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXRSZWdpc3RyeSBleHRlbmRzIFJlZ2lzdHJ5XG57XG4gICAgZ2V0RmFjdG9yeShuYW1lOiBzdHJpbmcpOiBXaWRnZXRGYWN0b3J5SW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIDxXaWRnZXRGYWN0b3J5SW50ZXJmYWNlPnN1cGVyLmdldEZhY3RvcnkobmFtZSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==