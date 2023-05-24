(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/@enhavo/user/login/LoginApp.ts":
/*!*****************************************************!*\
  !*** ./node_modules/@enhavo/user/login/LoginApp.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, $) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var LoginApp = /** @class */function () {
    function LoginApp(view) {
      this.view = view;
    }
    LoginApp.prototype.init = function () {
      var _this = this;
      this.view.init();
      this.view.addDefaultCloseListener();
      $(function () {
        _this.view.ready();
      });
      $('form').on('submit', function () {
        _this.view.exit();
      });
    };
    return LoginApp;
  }();
  exports["default"] = LoginApp;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by91c2VyL2xvZ2luL0xvZ2luQXBwLnRzIl0sIm5hbWVzIjpbIkxvZ2luQXBwIiwidmlldyIsInByb3RvdHlwZSIsImluaXQiLCJfdGhpcyIsImFkZERlZmF1bHRDbG9zZUxpc3RlbmVyIiwiJCIsInJlYWR5Iiwib24iLCJleGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7RUFHQSxJQUFBQSxRQUFBO0lBSUksU0FBQUEsU0FBWUMsSUFBVTtNQUVsQixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNwQjtJQUVBRCxRQUFBLENBQUFFLFNBQUEsQ0FBQUMsSUFBSSxHQUFKO01BQUEsSUFBQUMsS0FBQTtNQUNJLElBQUksQ0FBQ0gsSUFBSSxDQUFDRSxJQUFJLEVBQUU7TUFDaEIsSUFBSSxDQUFDRixJQUFJLENBQUNJLHVCQUF1QixFQUFFO01BRW5DQyxDQUFDLENBQUM7UUFDRUYsS0FBSSxDQUFDSCxJQUFJLENBQUNNLEtBQUssRUFBRTtNQUNyQixDQUFDLENBQUM7TUFFRkQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDRSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQ25CSixLQUFJLENBQUNILElBQUksQ0FBQ1EsSUFBSSxFQUFFO01BQ3BCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFDTCxPQUFBVCxRQUFDO0VBQUQsQ0FBQyxDQXJCRCIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWaWV3IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdcIjtcbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkFwcFxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogVmlldztcblxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IFZpZXcpXG4gICAge1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMudmlldy5pbml0KCk7XG4gICAgICAgIHRoaXMudmlldy5hZGREZWZhdWx0Q2xvc2VMaXN0ZW5lcigpO1xuXG4gICAgICAgICQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LnJlYWR5KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2Zvcm0nKS5vbignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmV4aXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==