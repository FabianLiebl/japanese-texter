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

  var DashboardApp =
  /** @class */
  function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9kYXNoYm9hcmQvZGFzaGJvYXJkL0Rhc2hib2FyZEFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBS0ksMEJBQVksSUFBWixFQUF3QixhQUF4QixFQUFvRDtBQUVoRCxXQUFLLGFBQUwsR0FBcUIsYUFBckI7QUFDQSxXQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0g7O0FBRUQ7QUFDSSxXQUFLLGFBQUwsQ0FBbUIsSUFBbkI7QUFDQSxXQUFLLElBQUwsQ0FBVSxJQUFWO0FBRUEsV0FBSyxJQUFMLENBQVUsdUJBQVY7QUFDQSxXQUFLLElBQUwsQ0FBVSxLQUFWO0FBQ0gsS0FORDs7QUFPSjtBQUFDLEdBbEJEIiwiZmlsZSI6IjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0IFdpZGdldE1hbmFnZXIgZnJvbSBcIkBlbmhhdm8vZGFzaGJvYXJkL3dpZGdldC9XaWRnZXRNYW5hZ2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZEFwcFxue1xuICAgIHByaXZhdGUgd2lkZ2V0TWFuYWdlcjogV2lkZ2V0TWFuYWdlcjtcbiAgICBwcml2YXRlIHZpZXc6IFZpZXc7XG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBWaWV3LCB3aWRnZXRNYW5hZ2VyOiBXaWRnZXRNYW5hZ2VyKVxuICAgIHtcbiAgICAgICAgdGhpcy53aWRnZXRNYW5hZ2VyID0gd2lkZ2V0TWFuYWdlcjtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICB0aGlzLndpZGdldE1hbmFnZXIuaW5pdCgpO1xuICAgICAgICB0aGlzLnZpZXcuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMudmlldy5hZGREZWZhdWx0Q2xvc2VMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLnZpZXcucmVhZHkoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9