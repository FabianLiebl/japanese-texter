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

  var LoginApp =
  /** @class */
  function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by91c2VyL2xvZ2luL0xvZ2luQXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQUE7QUFJSSxzQkFBWSxJQUFaLEVBQXNCO0FBRWxCLFdBQUssSUFBTCxHQUFZLElBQVo7QUFDSDs7QUFFRDtBQUFBOztBQUNJLFdBQUssSUFBTCxDQUFVLElBQVY7QUFDQSxXQUFLLElBQUwsQ0FBVSx1QkFBVjtBQUVBLE9BQUMsQ0FBQztBQUNFLGFBQUksQ0FBQyxJQUFMLENBQVUsS0FBVjtBQUNILE9BRkEsQ0FBRDtBQUlBLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxFQUFWLENBQWEsUUFBYixFQUF1QjtBQUNuQixhQUFJLENBQUMsSUFBTCxDQUFVLElBQVY7QUFDSCxPQUZEO0FBR0gsS0FYRDs7QUFZSjtBQUFDLEdBckJEIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZXcgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXcvVmlld1wiO1xuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luQXBwXG57XG4gICAgcHJpdmF0ZSByZWFkb25seSB2aWV3OiBWaWV3O1xuXG4gICAgY29uc3RydWN0b3IodmlldzogVmlldylcbiAgICB7XG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy52aWV3LmluaXQoKTtcbiAgICAgICAgdGhpcy52aWV3LmFkZERlZmF1bHRDbG9zZUxpc3RlbmVyKCk7XG5cbiAgICAgICAgJCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZXcucmVhZHkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnZm9ybScpLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuZXhpdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9