(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flash-message"],{

/***/ "./node_modules/@enhavo/app/flash-message/FlashMessenger.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/flash-message/FlashMessenger.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/flash-message/Message */ "./node_modules/@enhavo/app/flash-message/Message.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Message_1, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var FlashMessenger =
  /** @class */
  function () {
    function FlashMessenger(messages, componentRegistry) {
      this.messages = messages;
      this.componentRegistry = componentRegistry;
    }

    FlashMessenger.prototype.init = function () {
      var _this = this;

      for (var i in this.messages) {
        _.extend(this.messages[i], new Message_1["default"]());
      }

      setInterval(function () {
        _this.tick();
      }, 1000);
      this.componentRegistry.registerStore('flashMessenger', this);
      this.componentRegistry.registerData(this.messages);
    };

    FlashMessenger.prototype.addMessage = function (message) {
      this.messages.push(message);
    };

    FlashMessenger.prototype.has = function (type) {
      for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
        var message = _a[_i];

        if (message.type == type) {
          return true;
        }
      }

      return false;
    };

    FlashMessenger.prototype.tick = function () {
      for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
        var message = _a[_i];
        message.ttl--;
      }

      for (var _b = 0, _c = this.messages; _b < _c.length; _b++) {
        var message = _c[_b];

        if (message.ttl <= 0) {
          this.messages.splice(this.messages.indexOf(message), 1);
        }
      }
    };

    return FlashMessenger;
  }();

  exports["default"] = FlashMessenger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/flash-message/Message.ts":
/*!***********************************************************!*\
  !*** ./node_modules/@enhavo/app/flash-message/Message.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Message =
  /** @class */
  function () {
    function Message(type, message) {
      if (type === void 0) {
        type = null;
      }

      if (message === void 0) {
        message = null;
      }

      this.ttl = 5;

      if (type) {
        this.type = type;
      }

      if (message) {
        this.message = message;
      }
    }

    Message.SUCCESS = 'success';
    Message.ERROR = 'error';
    Message.NOTICE = 'notice';
    Message.WARNING = 'warning';
    return Message;
  }();

  exports["default"] = Message;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9GbGFzaE1lc3Nlbmdlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9NZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFNSSw0QkFBWSxRQUFaLEVBQWlDLGlCQUFqQyxFQUE4RTtBQUUxRSxXQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxXQUFLLGlCQUFMLEdBQXlCLGlCQUF6QjtBQUNIOztBQUVEO0FBQUE7O0FBQ0ksV0FBSyxJQUFJLENBQVQsSUFBYyxLQUFLLFFBQW5CLEVBQTZCO0FBQ3pCLFNBQUMsQ0FBQyxNQUFGLENBQVMsS0FBSyxRQUFMLENBQWMsQ0FBZCxDQUFULEVBQTJCLElBQUksb0JBQUosRUFBM0I7QUFDSDs7QUFDRCxpQkFBVyxDQUFDO0FBQ1IsYUFBSSxDQUFDLElBQUw7QUFDSCxPQUZVLEVBRVIsSUFGUSxDQUFYO0FBSUEsV0FBSyxpQkFBTCxDQUF1QixhQUF2QixDQUFxQyxnQkFBckMsRUFBdUQsSUFBdkQ7QUFDQSxXQUFLLGlCQUFMLENBQXVCLFlBQXZCLENBQW9DLEtBQUssUUFBekM7QUFDSCxLQVZEOztBQVlPLDBDQUFQLFVBQWtCLE9BQWxCLEVBQWtDO0FBRTlCLFdBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsT0FBbkI7QUFDSCxLQUhNOztBQUtBLG1DQUFQLFVBQVcsSUFBWCxFQUF1QjtBQUVuQixXQUFtQixzQkFBSyxRQUF4QixFQUFtQixjQUFuQixFQUFtQixJQUFuQixFQUFrQztBQUE5QixZQUFJLE9BQU8sU0FBWDs7QUFDQSxZQUFHLE9BQU8sQ0FBQyxJQUFSLElBQWdCLElBQW5CLEVBQXlCO0FBQ3JCLGlCQUFPLElBQVA7QUFDSDtBQUNKOztBQUNELGFBQU8sS0FBUDtBQUNILEtBUk07O0FBVUcsb0NBQVY7QUFFSSxXQUFtQixzQkFBSyxRQUF4QixFQUFtQixjQUFuQixFQUFtQixJQUFuQixFQUFrQztBQUE5QixZQUFJLE9BQU8sU0FBWDtBQUNBLGVBQU8sQ0FBQyxHQUFSO0FBQ0g7O0FBRUQsV0FBbUIsc0JBQUssUUFBeEIsRUFBbUIsY0FBbkIsRUFBbUIsSUFBbkIsRUFBa0M7QUFBOUIsWUFBSSxPQUFPLFNBQVg7O0FBQ0EsWUFBRyxPQUFPLENBQUMsR0FBUixJQUFlLENBQWxCLEVBQXFCO0FBQ2pCLGVBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsS0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixPQUF0QixDQUFyQixFQUFxRCxDQUFyRDtBQUNIO0FBQ0o7QUFDSixLQVhTOztBQVlkO0FBQUMsR0FuREQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFXSSxxQkFBWSxJQUFaLEVBQWlDLE9BQWpDLEVBQXVEO0FBQTNDO0FBQUE7QUFBbUI7O0FBQUU7QUFBQTtBQUFzQjs7QUFGaEQsaUJBQWMsQ0FBZDs7QUFHSCxVQUFHLElBQUgsRUFBUztBQUNMLGFBQUssSUFBTCxHQUFZLElBQVo7QUFDSDs7QUFDRCxVQUFHLE9BQUgsRUFBWTtBQUNSLGFBQUssT0FBTCxHQUFlLE9BQWY7QUFDSDtBQUNKOztBQWhCTSxzQkFBVSxTQUFWO0FBQ0Esb0JBQVEsT0FBUjtBQUNBLHFCQUFTLFFBQVQ7QUFDQSxzQkFBVSxTQUFWO0FBY1g7QUFBQyxHQW5CRDs7dUJBQXFCLE8iLCJmaWxlIjoiZmxhc2gtbWVzc2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZXNzYWdlIGZyb20gXCJAZW5oYXZvL2FwcC9mbGFzaC1tZXNzYWdlL01lc3NhZ2VcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlIGZyb20gXCJAZW5oYXZvL2NvcmUvQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhc2hNZXNzZW5nZXJcbntcbiAgICBwdWJsaWMgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3IobWVzc2FnZXM6IE1lc3NhZ2VbXSwgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlKVxuICAgIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0gY29tcG9uZW50UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLm1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBfLmV4dGVuZCh0aGlzLm1lc3NhZ2VzW2ldLCBuZXcgTWVzc2FnZSgpKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpY2soKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlclN0b3JlKCdmbGFzaE1lc3NlbmdlcicsIHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyRGF0YSh0aGlzLm1lc3NhZ2VzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKVxuICAgIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXModHlwZTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBtZXNzYWdlIG9mIHRoaXMubWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGlmKG1lc3NhZ2UudHlwZSA9PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0aWNrKClcbiAgICB7XG4gICAgICAgIGZvcihsZXQgbWVzc2FnZSBvZiB0aGlzLm1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBtZXNzYWdlLnR0bC0tXG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IG1lc3NhZ2Ugb2YgdGhpcy5tZXNzYWdlcykge1xuICAgICAgICAgICAgaWYobWVzc2FnZS50dGwgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKHRoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZVxue1xuICAgIHN0YXRpYyBTVUNDRVNTID0gJ3N1Y2Nlc3MnO1xuICAgIHN0YXRpYyBFUlJPUiA9ICdlcnJvcic7XG4gICAgc3RhdGljIE5PVElDRSA9ICdub3RpY2UnO1xuICAgIHN0YXRpYyBXQVJOSU5HID0gJ3dhcm5pbmcnO1xuXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0dGw6IG51bWJlciA9IDU7XG5cbiAgICBjb25zdHJ1Y3Rvcih0eXBlOiBzdHJpbmcgPSBudWxsLCBtZXNzYWdlOiBzdHJpbmcgPSBudWxsKSB7XG4gICAgICAgIGlmKHR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYobWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9