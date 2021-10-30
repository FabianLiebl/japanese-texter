(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9jb3JlL1JlZ2lzdHJ5RW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQU1JLDJCQUFZLElBQVosRUFBMEIsU0FBMUIsRUFBNkMsT0FBN0MsRUFBc0U7QUFDbEUsV0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFdBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLFdBQUssT0FBTCxHQUFlLE9BQWY7QUFDSDs7QUFFTSxzQ0FBUDtBQUNJLGFBQU8sS0FBSyxJQUFaO0FBQ0gsS0FGTTs7QUFJQSwyQ0FBUDtBQUNJLGFBQU8sS0FBSyxTQUFaO0FBQ0gsS0FGTTs7QUFJQSx5Q0FBUDtBQUNJLGFBQU8sS0FBSyxPQUFaO0FBQ0gsS0FGTTs7QUFHWDtBQUFDLEdBdkJEIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmFjdG9yeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL0ZhY3RvcnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVnaXN0cnlFbnRyeVxue1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgY29tcG9uZW50OiBvYmplY3Q7XG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBGYWN0b3J5SW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb21wb25lbnQ6IG9iamVjdCwgZmFjdG9yeTogRmFjdG9yeUludGVyZmFjZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5mYWN0b3J5ID0gZmFjdG9yeTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDb21wb25lbnQoKTogb2JqZWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGYWN0b3J5KCk6IEZhY3RvcnlJbnRlcmZhY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5mYWN0b3J5O1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=