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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/core */ "./node_modules/@enhavo/dashboard/node_modules/@enhavo/core/index.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1) {
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL0Blbmhhdm8vY29yZS9SZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9kYXNoYm9hcmQvbm9kZV9tb2R1bGVzL0Blbmhhdm8vY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9kYXNoYm9hcmQvd2lkZ2V0L1dpZGdldFJlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFWSxxQkFBMkIsRUFBM0I7QUEyRFg7O0FBekRXLDZCQUFSLFVBQVksSUFBWixFQUF3QjtBQUVwQixXQUFpQixzQkFBSyxPQUF0QixFQUFpQixjQUFqQixFQUFpQixJQUFqQixFQUErQjtBQUEzQixZQUFJLEtBQUssU0FBVDs7QUFDQSxZQUFHLEtBQUssQ0FBQyxPQUFOLE1BQW1CLElBQXRCLEVBQTRCO0FBQ3hCLGlCQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFlBQU0sc0JBQW9CLElBQXBCLEdBQXlCLDhCQUEvQjtBQUNILEtBUk87O0FBVVIsOENBQVcsSUFBWCxFQUF1QjtBQUVuQixhQUFPLEtBQUssR0FBTCxDQUFTLElBQVQsRUFBZSxVQUFmLEVBQVA7QUFDSCxLQUhEOztBQUtBLGdEQUFhLElBQWIsRUFBeUI7QUFFckIsYUFBTyxLQUFLLEdBQUwsQ0FBUyxJQUFULEVBQWUsWUFBZixFQUFQO0FBQ0gsS0FIRDs7QUFLQSw0Q0FBUyxLQUFULEVBQTZCO0FBRXpCLFVBQUcsS0FBSyxHQUFMLENBQVMsS0FBSyxDQUFDLE9BQU4sRUFBVCxDQUFILEVBQThCO0FBQzFCLGFBQUssV0FBTCxDQUFpQixLQUFLLENBQUMsT0FBTixFQUFqQjtBQUNIOztBQUNELFdBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsS0FBbEI7QUFDQSxhQUFPLElBQVA7QUFDSCxLQVBEOztBQVNRLHFDQUFSLFVBQW9CLElBQXBCLEVBQWdDO0FBRTVCLFdBQUssSUFBSSxDQUFULElBQWMsS0FBSyxPQUFuQixFQUE0QjtBQUN4QixZQUFHLEtBQUssT0FBTCxDQUFhLENBQWIsRUFBZ0IsT0FBaEIsTUFBNkIsSUFBaEMsRUFBc0M7QUFDbEMsZUFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixRQUFRLENBQUMsQ0FBRCxDQUE1QixFQUFpQyxDQUFqQztBQUNBO0FBQ0g7QUFDSjtBQUNKLEtBUk87O0FBVVIsdUNBQUksSUFBSixFQUFnQjtBQUVaLFdBQWlCLHNCQUFLLE9BQXRCLEVBQWlCLGNBQWpCLEVBQWlCLElBQWpCLEVBQStCO0FBQTNCLFlBQUksS0FBSyxTQUFUOztBQUNBLFlBQUcsS0FBSyxDQUFDLE9BQU4sTUFBbUIsSUFBdEIsRUFBNEI7QUFDeEIsaUJBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBQ0QsYUFBTyxLQUFQO0FBQ0gsS0FSRDs7QUFVQTtBQUVJLFVBQUksVUFBVSxHQUFHLEVBQWpCOztBQUNBLFdBQWlCLHNCQUFLLE9BQXRCLEVBQWlCLGNBQWpCLEVBQWlCLElBQWpCLEVBQStCO0FBQTNCLFlBQUksS0FBSyxTQUFUO0FBQ0Esa0JBQVUsQ0FBQyxJQUFYLENBQWdCLElBQUksU0FBSixDQUFjLEtBQUssQ0FBQyxPQUFOLEVBQWQsRUFBK0IsS0FBSyxDQUFDLFlBQU4sRUFBL0IsQ0FBaEI7QUFDSDs7QUFDRCxhQUFPLFVBQVA7QUFDSCxLQVBEOztBQVFKO0FBQUMsR0E3REQ7Ozs7QUErREE7QUFBQTtBQUFBO0FBS0ksdUJBQVksSUFBWixFQUEwQixTQUExQixFQUEyQztBQUN2QyxXQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsV0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0g7O0FBQ0w7QUFBQyxHQVREOztBQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVEVCxxQkFORyxxQkFNSDtBQUNBLDhCQU5HLDhCQU1IO0FBQ0EsNkJBTkcsNkJBTUg7QUFDQSxvQ0FORyxvQ0FNSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05KO0FBQUE7QUFBQTtBQUE0Qzs7QUFBNUM7O0FBS0M7O0FBSEcsb0RBQVcsSUFBWCxFQUF1QjtBQUNuQixhQUErQixpQkFBTSxVQUFOLENBQWdCLElBQWhCLENBQWdCLElBQWhCLEVBQWlCLElBQWpCLENBQS9CO0FBQ0gsS0FGRDs7QUFHSjtBQUFDLEdBTEQsQ0FBNEMsZUFBNUMiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiLi9SZWdpc3RyeUludGVyZmFjZVwiO1xuaW1wb3J0IFJlZ2lzdHJ5RW50cnkgZnJvbSBcIkBlbmhhdm8vY29yZS9SZWdpc3RyeUVudHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdHJ5IGltcGxlbWVudHMgUmVnaXN0cnlJbnRlcmZhY2VcbntcbiAgICBwcml2YXRlIGVudHJpZXM6IFJlZ2lzdHJ5RW50cnlbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBnZXQobmFtZTogc3RyaW5nKTogUmVnaXN0cnlFbnRyeVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93ICdFbnRyeSB3aXRoIG5hbWUgXCInK25hbWUrJ1wiIGRvZXMgbm90IGV4aXN0IGluIHJlZ2lzdHJ5JztcbiAgICB9XG5cbiAgICBnZXRGYWN0b3J5KG5hbWU6IHN0cmluZyk6IG9iamVjdFxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG5hbWUpLmdldEZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnQobmFtZTogc3RyaW5nKTogb2JqZWN0XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQobmFtZSkuZ2V0Q29tcG9uZW50KCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoZW50cnk6IFJlZ2lzdHJ5RW50cnkpOiBSZWdpc3RyeUludGVyZmFjZVxuICAgIHtcbiAgICAgICAgaWYodGhpcy5oYXMoZW50cnkuZ2V0TmFtZSgpKSkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVFbnRyeShlbnRyeS5nZXROYW1lKCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVFbnRyeShuYW1lOiBzdHJpbmcpXG4gICAge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZW50cmllcykge1xuICAgICAgICAgICAgaWYodGhpcy5lbnRyaWVzW2ldLmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNwbGljZShwYXJzZUludChpKSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXMobmFtZTogc3RyaW5nKTogYm9vbGVhblxuICAgIHtcbiAgICAgICAgZm9yKGxldCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmKGVudHJ5LmdldE5hbWUoKSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudHMoKTogQ29tcG9uZW50W11cbiAgICB7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gW107XG4gICAgICAgIGZvcihsZXQgZW50cnkgb2YgdGhpcy5lbnRyaWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2gobmV3IENvbXBvbmVudChlbnRyeS5nZXROYW1lKCksIGVudHJ5LmdldENvbXBvbmVudCgpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50XG57XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgY29tcG9uZW50OiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNvbXBvbmVudDogb2JqZWN0KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWdpc3RyeSBmcm9tICcuL1JlZ2lzdHJ5JztcbmltcG9ydCBSZWdpc3RyeUludGVyZmFjZSBmcm9tICcuL1JlZ2lzdHJ5SW50ZXJmYWNlJztcbmltcG9ydCBGYWN0b3J5SW50ZXJmYWNlIGZyb20gJy4vRmFjdG9yeUludGVyZmFjZSc7XG5pbXBvcnQgQ29tcG9uZW50QXdhcmVJbnRlcmZhY2UgZnJvbSAnLi9Db21wb25lbnRBd2FyZUludGVyZmFjZSc7XG5cbmV4cG9ydCB7XG4gICAgUmVnaXN0cnksXG4gICAgUmVnaXN0cnlJbnRlcmZhY2UsXG4gICAgRmFjdG9yeUludGVyZmFjZSxcbiAgICBDb21wb25lbnRBd2FyZUludGVyZmFjZVxufTtcbiIsImltcG9ydCB7IFJlZ2lzdHJ5IH0gZnJvbSBcIkBlbmhhdm8vY29yZVwiO1xuaW1wb3J0IFdpZGdldEZhY3RvcnlJbnRlcmZhY2UgZnJvbSBcIi4vV2lkZ2V0RmFjdG9yeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXRSZWdpc3RyeSBleHRlbmRzIFJlZ2lzdHJ5XG57XG4gICAgZ2V0RmFjdG9yeShuYW1lOiBzdHJpbmcpOiBXaWRnZXRGYWN0b3J5SW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIDxXaWRnZXRGYWN0b3J5SW50ZXJmYWNlPnN1cGVyLmdldEZhY3RvcnkobmFtZSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==