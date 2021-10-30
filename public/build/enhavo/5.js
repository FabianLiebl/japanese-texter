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

  var MenuRegistry =
  /** @class */
  function (_super) {
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvbWVudS9NZW51UmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL25vZGVfbW9kdWxlcy9AZW5oYXZvL2NvcmUvUmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL25vZGVfbW9kdWxlcy9AZW5oYXZvL2NvcmUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFBQTtBQUFBO0FBQTBDOztBQUExQzs7QUFTQzs7QUFQRyxrREFBVyxJQUFYLEVBQXVCO0FBQ25CLGFBQTZCLGlCQUFNLFVBQU4sQ0FBZ0IsSUFBaEIsQ0FBZ0IsSUFBaEIsRUFBaUIsSUFBakIsQ0FBN0I7QUFDSCxLQUZEOztBQUlBLGdEQUFTLElBQVQsRUFBdUIsU0FBdkIsRUFBMEMsT0FBMUMsRUFBdUU7QUFDbkUsYUFBTyxpQkFBTSxRQUFOLENBQWMsSUFBZCxDQUFjLElBQWQsRUFBZSxJQUFmLEVBQXFCLFNBQXJCLEVBQWdDLE9BQWhDLENBQVA7QUFDSCxLQUZEOztBQUdKO0FBQUMsR0FURCxDQUEwQyxlQUExQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUVZLHFCQUEyQixFQUEzQjtBQTJEWDs7QUF6RFcsNkJBQVIsVUFBWSxJQUFaLEVBQXdCO0FBRXBCLFdBQWlCLHNCQUFLLE9BQXRCLEVBQWlCLGNBQWpCLEVBQWlCLElBQWpCLEVBQStCO0FBQTNCLFlBQUksS0FBSyxTQUFUOztBQUNBLFlBQUcsS0FBSyxDQUFDLE9BQU4sTUFBbUIsSUFBdEIsRUFBNEI7QUFDeEIsaUJBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsWUFBTSxzQkFBb0IsSUFBcEIsR0FBeUIsOEJBQS9CO0FBQ0gsS0FSTzs7QUFVUiw4Q0FBVyxJQUFYLEVBQXVCO0FBRW5CLGFBQU8sS0FBSyxHQUFMLENBQVMsSUFBVCxFQUFlLFVBQWYsRUFBUDtBQUNILEtBSEQ7O0FBS0EsZ0RBQWEsSUFBYixFQUF5QjtBQUVyQixhQUFPLEtBQUssR0FBTCxDQUFTLElBQVQsRUFBZSxZQUFmLEVBQVA7QUFDSCxLQUhEOztBQUtBLDRDQUFTLEtBQVQsRUFBNkI7QUFFekIsVUFBRyxLQUFLLEdBQUwsQ0FBUyxLQUFLLENBQUMsT0FBTixFQUFULENBQUgsRUFBOEI7QUFDMUIsYUFBSyxXQUFMLENBQWlCLEtBQUssQ0FBQyxPQUFOLEVBQWpCO0FBQ0g7O0FBQ0QsV0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixLQUFsQjtBQUNBLGFBQU8sSUFBUDtBQUNILEtBUEQ7O0FBU1EscUNBQVIsVUFBb0IsSUFBcEIsRUFBZ0M7QUFFNUIsV0FBSyxJQUFJLENBQVQsSUFBYyxLQUFLLE9BQW5CLEVBQTRCO0FBQ3hCLFlBQUcsS0FBSyxPQUFMLENBQWEsQ0FBYixFQUFnQixPQUFoQixNQUE2QixJQUFoQyxFQUFzQztBQUNsQyxlQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFFBQVEsQ0FBQyxDQUFELENBQTVCLEVBQWlDLENBQWpDO0FBQ0E7QUFDSDtBQUNKO0FBQ0osS0FSTzs7QUFVUix1Q0FBSSxJQUFKLEVBQWdCO0FBRVosV0FBaUIsc0JBQUssT0FBdEIsRUFBaUIsY0FBakIsRUFBaUIsSUFBakIsRUFBK0I7QUFBM0IsWUFBSSxLQUFLLFNBQVQ7O0FBQ0EsWUFBRyxLQUFLLENBQUMsT0FBTixNQUFtQixJQUF0QixFQUE0QjtBQUN4QixpQkFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFDRCxhQUFPLEtBQVA7QUFDSCxLQVJEOztBQVVBO0FBRUksVUFBSSxVQUFVLEdBQUcsRUFBakI7O0FBQ0EsV0FBaUIsc0JBQUssT0FBdEIsRUFBaUIsY0FBakIsRUFBaUIsSUFBakIsRUFBK0I7QUFBM0IsWUFBSSxLQUFLLFNBQVQ7QUFDQSxrQkFBVSxDQUFDLElBQVgsQ0FBZ0IsSUFBSSxTQUFKLENBQWMsS0FBSyxDQUFDLE9BQU4sRUFBZCxFQUErQixLQUFLLENBQUMsWUFBTixFQUEvQixDQUFoQjtBQUNIOztBQUNELGFBQU8sVUFBUDtBQUNILEtBUEQ7O0FBUUo7QUFBQyxHQTdERDs7OztBQStEQTtBQUFBO0FBQUE7QUFLSSx1QkFBWSxJQUFaLEVBQTBCLFNBQTFCLEVBQTJDO0FBQ3ZDLFdBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxXQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDSDs7QUFDTDtBQUFDLEdBVEQ7O0FBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURULHFCQU5HLHFCQU1IO0FBQ0EsOEJBTkcsOEJBTUg7QUFDQSw2QkFORyw2QkFNSDtBQUNBLG9DQU5HLG9DQU1IIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gXCJAZW5oYXZvL2NvcmVcIjtcbmltcG9ydCBNZW51RmFjdG9yeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvbWVudS9NZW51RmFjdG9yeUludGVyZmFjZVwiO1xuaW1wb3J0IFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvUmVnaXN0cnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudVJlZ2lzdHJ5IGV4dGVuZHMgUmVnaXN0cnlcbntcbiAgICBnZXRGYWN0b3J5KG5hbWU6IHN0cmluZyk6IE1lbnVGYWN0b3J5SW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIDxNZW51RmFjdG9yeUludGVyZmFjZT5zdXBlci5nZXRGYWN0b3J5KG5hbWUpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBvYmplY3QsIGZhY3Rvcnk6IE1lbnVGYWN0b3J5SW50ZXJmYWNlKTogUmVnaXN0cnlJbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4gc3VwZXIucmVnaXN0ZXIobmFtZSwgY29tcG9uZW50LCBmYWN0b3J5KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIi4vUmVnaXN0cnlJbnRlcmZhY2VcIjtcbmltcG9ydCBSZWdpc3RyeUVudHJ5IGZyb20gXCJAZW5oYXZvL2NvcmUvUmVnaXN0cnlFbnRyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWdpc3RyeSBpbXBsZW1lbnRzIFJlZ2lzdHJ5SW50ZXJmYWNlXG57XG4gICAgcHJpdmF0ZSBlbnRyaWVzOiBSZWdpc3RyeUVudHJ5W10gPSBbXTtcblxuICAgIHByaXZhdGUgZ2V0KG5hbWU6IHN0cmluZyk6IFJlZ2lzdHJ5RW50cnlcbiAgICB7XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBpZihlbnRyeS5nZXROYW1lKCkgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyAnRW50cnkgd2l0aCBuYW1lIFwiJytuYW1lKydcIiBkb2VzIG5vdCBleGlzdCBpbiByZWdpc3RyeSc7XG4gICAgfVxuXG4gICAgZ2V0RmFjdG9yeShuYW1lOiBzdHJpbmcpOiBvYmplY3RcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChuYW1lKS5nZXRGYWN0b3J5KCk7XG4gICAgfVxuXG4gICAgZ2V0Q29tcG9uZW50KG5hbWU6IHN0cmluZyk6IG9iamVjdFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpLmdldENvbXBvbmVudCgpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKGVudHJ5OiBSZWdpc3RyeUVudHJ5KTogUmVnaXN0cnlJbnRlcmZhY2VcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuaGFzKGVudHJ5LmdldE5hbWUoKSkpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRW50cnkoZW50cnkuZ2V0TmFtZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlRW50cnkobmFtZTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZW50cmllc1tpXS5nZXROYW1lKCkgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50cmllcy5zcGxpY2UocGFyc2VJbnQoaSksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW5cbiAgICB7XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBpZihlbnRyeS5nZXROYW1lKCkgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnRzKCk6IENvbXBvbmVudFtdXG4gICAge1xuICAgICAgICBsZXQgY29tcG9uZW50cyA9IFtdO1xuICAgICAgICBmb3IobGV0IGVudHJ5IG9mIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKG5ldyBDb21wb25lbnQoZW50cnkuZ2V0TmFtZSgpLCBlbnRyeS5nZXRDb21wb25lbnQoKSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFxue1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIGNvbXBvbmVudDogb2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IG9iamVjdCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVnaXN0cnkgZnJvbSAnLi9SZWdpc3RyeSc7XG5pbXBvcnQgUmVnaXN0cnlJbnRlcmZhY2UgZnJvbSAnLi9SZWdpc3RyeUludGVyZmFjZSc7XG5pbXBvcnQgRmFjdG9yeUludGVyZmFjZSBmcm9tICcuL0ZhY3RvcnlJbnRlcmZhY2UnO1xuaW1wb3J0IENvbXBvbmVudEF3YXJlSW50ZXJmYWNlIGZyb20gJy4vQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UnO1xuXG5leHBvcnQge1xuICAgIFJlZ2lzdHJ5LFxuICAgIFJlZ2lzdHJ5SW50ZXJmYWNlLFxuICAgIEZhY3RvcnlJbnRlcmZhY2UsXG4gICAgQ29tcG9uZW50QXdhcmVJbnRlcmZhY2Vcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9