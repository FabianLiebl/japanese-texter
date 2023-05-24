(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@enhavo/app/menu/MenuRegistry.ts":
/*!*******************************************************!*\
  !*** ./node_modules/@enhavo/app/menu/MenuRegistry.ts ***!
  \*******************************************************/
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
  var MenuRegistry = /** @class */function (_super) {
    __extends(MenuRegistry, _super);
    function MenuRegistry() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuRegistry.prototype.getFactory = function (name) {
      return _super.prototype.getFactory.call(this, name);
    };
    MenuRegistry.prototype.register = function (name, component, factory) {
      return _super.prototype.register.call(this, name, component, factory);
    };
    return MenuRegistry;
  }(core_1.Registry);
  exports["default"] = MenuRegistry;
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbWVudS9NZW51UmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL25vZGVfbW9kdWxlcy9AZW5oYXZvL2NvcmUvUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL25vZGVfbW9kdWxlcy9AZW5oYXZvL2NvcmUvaW5kZXgudHMiXSwibmFtZXMiOlsiTWVudVJlZ2lzdHJ5IiwiX3N1cGVyIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwiZ2V0RmFjdG9yeSIsIm5hbWUiLCJjYWxsIiwicmVnaXN0ZXIiLCJjb21wb25lbnQiLCJmYWN0b3J5IiwiY29yZV8xIiwiUmVnaXN0cnkiLCJlbnRyaWVzIiwiZ2V0IiwiX2kiLCJfYSIsImxlbmd0aCIsImVudHJ5IiwiZ2V0TmFtZSIsImdldENvbXBvbmVudCIsImhhcyIsImRlbGV0ZUVudHJ5IiwicHVzaCIsImkiLCJzcGxpY2UiLCJwYXJzZUludCIsImdldENvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiQ29tcG9uZW50IiwiZXhwb3J0cyIsIlJlZ2lzdHJ5XzEiLCJSZWdpc3RyeUludGVyZmFjZSIsIlJlZ2lzdHJ5SW50ZXJmYWNlXzEiLCJGYWN0b3J5SW50ZXJmYWNlIiwiRmFjdG9yeUludGVyZmFjZV8xIiwiQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UiLCJDb21wb25lbnRBd2FyZUludGVyZmFjZV8xIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSUEsSUFBQUEsWUFBQSwwQkFBQUMsTUFBQTtJQUEwQ0MsU0FBQSxDQUFBRixZQUFBLEVBQUFDLE1BQUE7SUFBMUMsU0FBQUQsYUFBQTs7SUFTQTtJQVBJQSxZQUFBLENBQUFHLFNBQUEsQ0FBQUMsVUFBVSxHQUFWLFVBQVdDLElBQVk7TUFDbkIsT0FBNkJKLE1BQUEsQ0FBQUUs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SSxJQUFJQyxVQUFVLEdBQUcsRUFBRTtNQUNuQixLQUFpQixJQUFBYixFQUFBLElBQVksRUFBWkMsRUFBQSxPQUFJLENBQUNILE9BQU8sRUFBWkUsRUFBQSxHQUFBQyxFQUFBLENBQUFDLE1BQVksRUFBWkYsRUFBQSxFQUFZLEVBQUU7UUFBM0IsSUFBSUcsS0FBSyxHQUFBRixFQUFBLENBQUFELEVBQUE7UUFDVGEsVUFBVSxDQUFDTCxJQUFJLENBQUMsSUFBSU0sU0FBUyxDQUFDWCxLQUFLLENBQUNDLE9BQU8sRUFBRSxFQUFFRCxLQUFLLENBQUNFLFlBQVksRUFBRSxDQUFDLENBQUM7O01BRXpFLE9BQU9RLFVBQVU7SUFDckIsQ0FBQztJQUNMLE9BQUFoQixRQUFDO0VBQUQsQ0FBQyxDQTdERDs7RUErREEsSUFBQWlCLFNBQUE7SUFLSSxTQUFBQSxVQUFZdkIsSUFBWSxFQUFFRyxTQUFpQjtNQUN2QyxJQUFJLENBQUNILElBQUksR0FBR0EsSUFBSTtNQUNoQixJQUFJLENBQUNHLFNBQVMsR0FBR0EsU0FBUztJQUM5QjtJQUNKLE9BQUFvQixTQUFDO0VBQUQsQ0FBQyxDQVREO0VBQWFDLE9BQUEsQ0FBQUQsU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQzVEVEMsT0FBQSxDQUFBbEIsUUFBQSxHQU5HbUIsVUFBQSxXQUFRO0VBT1hELE9BQUEsQ0FBQUUsaUJBQUEsR0FOR0MsbUJBQUEsV0FBaUI7RUFPcEJILE9BQUEsQ0FBQUksZ0JBQUEsR0FOR0Msa0JBQUEsV0FBZ0I7RUFPbkJMLE9BQUEsQ0FBQU0sdUJBQUEsR0FOR0MseUJBQUEsV0FBdUIiLCJmaWxlIjoiNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZ2lzdHJ5IH0gZnJvbSBcIkBlbmhhdm8vY29yZVwiO1xuaW1wb3J0IE1lbnVGYWN0b3J5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2FwcC9tZW51L01lbnVGYWN0b3J5SW50ZXJmYWNlXCI7XG5pbXBvcnQgUmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9SZWdpc3RyeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51UmVnaXN0cnkgZXh0ZW5kcyBSZWdpc3RyeVxue1xuICAgIGdldEZhY3RvcnkobmFtZTogc3RyaW5nKTogTWVudUZhY3RvcnlJbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4gPE1lbnVGYWN0b3J5SW50ZXJmYWNlPnN1cGVyLmdldEZhY3RvcnkobmFtZSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IG9iamVjdCwgZmFjdG9yeTogTWVudUZhY3RvcnlJbnRlcmZhY2UpOiBSZWdpc3RyeUludGVyZmFjZSB7XG4gICAgICAgIHJldHVybiBzdXBlci5yZWdpc3RlcihuYW1lLCBjb21wb25lbnQsIGZhY3RvcnkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiLi9SZWdpc3RyeUludGVyZmFjZVwiO1xuaW1wb3J0IFJlZ2lzdHJ5RW50cnkgZnJvbSBcIkBlbmhhdm8vY29yZS9SZWdpc3RyeUVudHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdHJ5IGltcGxlbWVudHMgUmVnaXN0cnlJbnRlcmZhY2VcbntcbiAgICBwcml2YXRlIGVudHJpZXM6IFJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBnZXQobmFtZTogc3RyaW5nKTogUmVnaXN0cnlFbnRyeVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93ICdFbnRyeSB3aXRoIG5hbWUgXCInK25hbWUrJ1wiIGRvZXMgbm90IGV4aXN0IGluIHJlZ2lzdHJ5JztcbiAgICB9XG5cbiAgICBnZXRGYWN0b3J5KG5hbWU6IHN0cmluZyk6IG9iamVjdFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpLmdldEZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnQobmFtZTogc3RyaW5nKTogb2JqZWN0XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkuZ2V0Q29tcG9uZW50KCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoZW50cnk6IFJlZ2lzdHJ5RW50cnkpOiBSZWdpc3RyeUludGVyZmFjZVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5oYXMoZW50cnkuZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVFbnRyeShlbnRyeS5nZXROYW1lKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVFbnRyeShuYW1lOiBzdHJpbmcpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgaWYodGhpcy5lbnRyaWVzW2ldLmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNwbGljZShwYXJzZUludChpKSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudHMoKTogQ29tcG9uZW50W11cbiAgICB7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gW107XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2gobmV3IENvbXBvbmVudChlbnRyeS5nZXROYW1lKCksIGVudHJ5LmdldENvbXBvbmVudCgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50XG57XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgY29tcG9uZW50OiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWdpc3RyeSBmcm9tICcuL1JlZ2lzdHJ5JztcbmltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tICcuL1JlZ2lzdHJ5SW50ZXJmYWNlJztcbmltcG9ydCBGYWN0b3J5SW50ZXJmYWNlIGZyb20gJy4vRmFjdG9yeUludGVyZmFjZSc7XG5pbXBvcnQgQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UgZnJvbSAnLi9Db21wb25lbnRBd2FyZUludGVyZmFjZSc7XG5cbmV4cG9ydCB7XG4gICAgUmVnaXN0cnksXG4gICAgUmVnaXN0cnlJbnRlcmZhY2UsXG4gICAgRmFjdG9yeUludGVyZmFjZSxcbiAgICBDb21wb25lbnRBd2FyZUludGVyZmFjZVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=