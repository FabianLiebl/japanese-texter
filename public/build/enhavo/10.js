(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@enhavo/dashboard/dashboard/DashboardApp.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/dashboard/dashboard/DashboardApp.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var DashboardApp = /** @class */function () {
    function DashboardApp(view, widgetManager) {
      this.widgetManager = widgetManager;
      this.view = view;
    }
    DashboardApp.prototype.init = function () {
      this.widgetManager.init();
      this.view.init();
      this.view.addDefaultCloseListener();
      this.view.ready();
    };
    return DashboardApp;
  }();
  exports["default"] = DashboardApp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9kYXNoYm9hcmQvZGFzaGJvYXJkL0Rhc2hib2FyZEFwcC50cyJdLCJuYW1lcyI6WyJEYXNoYm9hcmRBcHAiLCJ2aWV3Iiwid2lkZ2V0TWFuYWdlciIsInByb3RvdHlwZSIsImluaXQiLCJhZGREZWZhdWx0Q2xvc2VMaXN0ZW5lciIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7RUFHQSxJQUFBQSxZQUFBO0lBS0ksU0FBQUEsYUFBWUMsSUFBVSxFQUFFQyxhQUE0QjtNQUVoRCxJQUFJLENBQUNBLGFBQWEsR0FBR0EsYUFBYTtNQUNsQyxJQUFJLENBQUNELElBQUksR0FBR0EsSUFBSTtJQUNwQjtJQUVBRCxZQUFBLENBQUFHLFNBQUEsQ0FBQUMsSUFBSSxHQUFKO01BQ0ksSUFBSSxDQUFDRixhQUFhLENBQUNFLElBQUksRUFBRTtNQUN6QixJQUFJLENBQUNILElBQUksQ0FBQ0csSUFBSSxFQUFFO01BRWhCLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSx1QkFBdUIsRUFBRTtNQUNuQyxJQUFJLENBQUNKLElBQUksQ0FBQ0ssS0FBSyxFQUFFO0lBQ3JCLENBQUM7SUFDTCxPQUFBTixZQUFDO0VBQUQsQ0FBQyxDQWxCRCIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCBXaWRnZXRNYW5hZ2VyIGZyb20gXCJAZW5oYXZvL2Rhc2hib2FyZC93aWRnZXQvV2lkZ2V0TWFuYWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXNoYm9hcmRBcHBcbntcbiAgICBwcml2YXRlIHdpZGdldE1hbmFnZXI6IFdpZGdldE1hbmFnZXI7XG4gICAgcHJpdmF0ZSB2aWV3OiBWaWV3O1xuXG4gICAgY29uc3RydWN0b3IodmlldzogVmlldywgd2lkZ2V0TWFuYWdlcjogV2lkZ2V0TWFuYWdlcilcbiAgICB7XG4gICAgICAgIHRoaXMud2lkZ2V0TWFuYWdlciA9IHdpZGdldE1hbmFnZXI7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy53aWRnZXRNYW5hZ2VyLmluaXQoKTtcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKTtcblxuICAgICAgICB0aGlzLnZpZXcuYWRkRGVmYXVsdENsb3NlTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy52aWV3LnJlYWR5KCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==