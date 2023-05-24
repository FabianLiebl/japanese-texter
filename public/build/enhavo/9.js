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
  var RegistryEntry = /** @class */function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9jb3JlL1JlZ2lzdHJ5RW50cnkudHMiXSwibmFtZXMiOlsiUmVnaXN0cnlFbnRyeSIsIm5hbWUiLCJjb21wb25lbnQiLCJmYWN0b3J5IiwicHJvdG90eXBlIiwiZ2V0TmFtZSIsImdldENvbXBvbmVudCIsImdldEZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztFQUVBLElBQUFBLGFBQUE7SUFNSSxTQUFBQSxjQUFZQyxJQUFZLEVBQUVDLFNBQWlCLEVBQUVDLE9BQXlCO01BQ2xFLElBQUksQ0FBQ0YsSUFBSSxHQUFHQSxJQUFJO01BQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO01BQzFCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0lBQzFCO0lBRU9ILGFBQUEsQ0FBQUksU0FBQSxDQUFBQyxPQUFPLEdBQWQ7TUFDSSxPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNwQixDQUFDO0lBRU1ELGFBQUEsQ0FBQUksU0FBQSxDQUFBRSxZQUFZLEdBQW5CO01BQ0ksT0FBTyxJQUFJLENBQUNKLFNBQVM7SUFDekIsQ0FBQztJQUVNRixhQUFBLENBQUFJLFNBQUEsQ0FBQUcsVUFBVSxHQUFqQjtNQUNJLE9BQU8sSUFBSSxDQUFDSixPQUFPO0lBQ3ZCLENBQUM7SUFDTCxPQUFBSCxhQUFDO0VBQUQsQ0FBQyxDQXZCRCIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhY3RvcnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9GYWN0b3J5SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdHJ5RW50cnlcbntcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIGNvbXBvbmVudDogb2JqZWN0O1xuICAgIHByaXZhdGUgZmFjdG9yeTogRmFjdG9yeUludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY29tcG9uZW50OiBvYmplY3QsIGZhY3Rvcnk6IEZhY3RvcnlJbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29tcG9uZW50KCk6IG9iamVjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmFjdG9yeSgpOiBGYWN0b3J5SW50ZXJmYWNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9