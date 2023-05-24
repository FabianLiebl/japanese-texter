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
  var FlashMessenger = /** @class */function () {
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
  var Message = /** @class */function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9GbGFzaE1lc3Nlbmdlci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9NZXNzYWdlLnRzIl0sIm5hbWVzIjpbIkZsYXNoTWVzc2VuZ2VyIiwibWVzc2FnZXMiLCJjb21wb25lbnRSZWdpc3RyeSIsInByb3RvdHlwZSIsImluaXQiLCJfdGhpcyIsImkiLCJfIiwiZXh0ZW5kIiwiTWVzc2FnZV8xIiwic2V0SW50ZXJ2YWwiLCJ0aWNrIiwicmVnaXN0ZXJTdG9yZSIsInJlZ2lzdGVyRGF0YSIsImFkZE1lc3NhZ2UiLCJtZXNzYWdlIiwicHVzaCIsImhhcyIsInR5cGUiLCJfaSIsIl9hIiwibGVuZ3RoIiwidHRsIiwiX2IiLCJfYyIsInNwbGljZSIsImluZGV4T2YiLCJNZXNzYWdlIiwiU1VDQ0VTUyIsIkVSUk9SIiwiTk9USUNFIiwiV0FSTklORyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0VBSUEsSUFBQUEsY0FBQTtJQU1JLFNBQUFBLGVBQVlDLFFBQW1CLEVBQUVDLGlCQUE2QztNQUUxRSxJQUFJLENBQUNELFFBQVEsR0FBR0EsUUFBUTtNQUN4QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQSxpQkFBaUI7SUFDOUM7SUFFQUYsY0FBQSxDQUFBRyxTQUFBLENBQUFDLElBQUksR0FBSjtNQUFBLElBQUFDLEtBQUE7TUFDSSxLQUFLLElBQUlDLENBQUMsSUFBSSxJQUFJLENBQUNMLFFBQVEsRUFBRTtRQUN6Qk0sQ0FBQyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDUCxRQUFRLENBQUNLLENBQUMsQ0FBQyxFQUFFLElBQUlHLFNBQUEsV0FBTyxFQUFFLENBQUM7O01BRTdDQyxXQUFXLENBQUM7UUFDUkwsS0FBSSxDQUFDTSxJQUFJLEVBQUU7TUFDZixDQUFDLEVBQUUsSUFBSSxDQUFDO01BRVIsSUFBSSxDQUFDVCxpQkFBaUIsQ0FBQ1UsYUFBYSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQztNQUM1RCxJQUFJLENBQUNWLGlCQUFpQixDQUFDVyxZQUFZLENBQUMsSUFBSSxDQUFDWixRQUFRLENBQUM7SUFDdEQsQ0FBQztJQUVNRCxjQUFBLENBQUFHLFNBQUEsQ0FBQVcsVUFBVSxHQUFqQixVQUFrQkMsT0FBZ0I7TUFFOUIsSUFBSSxDQUFDZCxRQUFRLENBQUNlLElBQUksQ0FBQ0QsT0FBTyxDQUFDO0lBQy9CLENBQUM7SUFFTWYsY0FBQSxDQUFBRyxTQUFBLENBQUFjLEdBQUcsR0FBVixVQUFXQyxJQUFZO01BRW5CLEtBQW1CLElBQUFDLEVBQUEsSUFBYSxFQUFiQyxFQUFBLE9BQUksQ0FBQ25CLFFBQVEsRUFBYmtCLEVBQUEsR0FBQUMsRUFBQSxDQUFBQyxNQUFhLEVBQWJGLEVBQUEsRUFBYSxFQUFFO1FBQTlCLElBQUlKLE9BQU8sR0FBQUssRUFBQSxDQUFBRCxFQUFBO1FBQ1gsSUFBR0osT0FBTyxDQUFDRyxJQUFJLElBQUlBLElBQUksRUFBRTtVQUNyQixPQUFPLElBQUk7OztNQUduQixPQUFPLEtBQUs7SUFDaEIsQ0FBQztJQUVTbEIsY0FBQSxDQUFBRyxTQUFBLENBQUFRLElBQUksR0FBZDtNQUVJLEtBQW1CLElBQUFRLEVBQUEsSUFBYSxFQUFiQyxFQUFBLE9BQUksQ0FBQ25CLFFBQVEsRUFBYmtCLEVBQUEsR0FBQUMsRUFBQSxDQUFBQyxNQUFhLEVBQWJGLEVBQUEsRUFBYSxFQUFFO1FBQTlCLElBQUlKLE9BQU8sR0FBQUssRUFBQSxDQUFBRCxFQUFBO1FBQ1hKLE9BQU8sQ0FBQ08sR0FBRyxFQUFFOztNQUdqQixLQUFtQixJQUFBQyxFQUFBLElBQWEsRUFBYkMsRUFBQSxPQUFJLENBQUN2QixRQUFRLEVBQWJzQixFQUFBLEdBQUFDLEVBQUEsQ0FBQUgsTUFBYSxFQUFiRSxFQUFBLEVBQWEsRUFBRTtRQUE5QixJQUFJUixPQUFPLEdBQUFTLEVBQUEsQ0FBQUQsRUFBQTtRQUNYLElBQUdSLE9BQU8sQ0FBQ08sR0FBRyxJQUFJLENBQUMsRUFBRTtVQUNqQixJQUFJLENBQUNyQixRQUFRLENBQUN3QixNQUFNLENBQUMsSUFBSSxDQUFDeEIsUUFBUSxDQUFDeUIsT0FBTyxDQUFDWCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7OztJQUduRSxDQUFDO0lBQ0wsT0FBQWYsY0FBQztFQUFELENBQUMsQ0FuREQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDRkEsSUFBQTJCLE9BQUE7SUFXSSxTQUFBQSxRQUFZVCxJQUFtQixFQUFFSCxPQUFzQjtNQUEzQyxJQUFBRyxJQUFBO1FBQUFBLElBQUEsT0FBbUI7TUFBQTtNQUFFLElBQUFILE9BQUE7UUFBQUEsT0FBQSxPQUFzQjtNQUFBO01BRmhELEtBQUFPLEdBQUcsR0FBVyxDQUFDO01BR2xCLElBQUdKLElBQUksRUFBRTtRQUNMLElBQUksQ0FBQ0EsSUFBSSxHQUFHQSxJQUFJOztNQUVwQixJQUFHSCxPQUFPLEVBQUU7UUFDUixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTzs7SUFFOUI7SUFoQk9ZLE9BQUEsQ0FBQUMsT0FBTyxHQUFHLFNBQVM7SUFDbkJELE9BQUEsQ0FBQUUsS0FBSyxHQUFHLE9BQU87SUFDZkYsT0FBQSxDQUFBRyxNQUFNLEdBQUcsUUFBUTtJQUNqQkgsT0FBQSxDQUFBSSxPQUFPLEdBQUcsU0FBUztJQWM5QixPQUFBSixPQUFDO0dBQUEsQ0FuQkQ7dUJBQXFCQSxPQUFPIiwiZmlsZSI6ImZsYXNoLW1lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVzc2FnZSBmcm9tIFwiQGVuaGF2by9hcHAvZmxhc2gtbWVzc2FnZS9NZXNzYWdlXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL0NvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXNoTWVzc2VuZ2VyXG57XG4gICAgcHVibGljIG1lc3NhZ2VzOiBNZXNzYWdlW107XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZTtcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2VzOiBNZXNzYWdlW10sIGNvbXBvbmVudFJlZ2lzdHJ5OiBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZSlcbiAgICB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBtZXNzYWdlcztcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeSA9IGNvbXBvbmVudFJlZ2lzdHJ5O1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5tZXNzYWdlcykge1xuICAgICAgICAgICAgXy5leHRlbmQodGhpcy5tZXNzYWdlc1tpXSwgbmV3IE1lc3NhZ2UoKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aWNrKCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJTdG9yZSgnZmxhc2hNZXNzZW5nZXInLCB0aGlzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckRhdGEodGhpcy5tZXNzYWdlcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSlcbiAgICB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzKHR5cGU6IHN0cmluZylcbiAgICB7XG4gICAgICAgIGZvcihsZXQgbWVzc2FnZSBvZiB0aGlzLm1lc3NhZ2VzKSB7XG4gICAgICAgICAgICBpZihtZXNzYWdlLnR5cGUgPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdGljaygpXG4gICAge1xuICAgICAgICBmb3IobGV0IG1lc3NhZ2Ugb2YgdGhpcy5tZXNzYWdlcykge1xuICAgICAgICAgICAgbWVzc2FnZS50dGwtLVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBtZXNzYWdlIG9mIHRoaXMubWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGlmKG1lc3NhZ2UudHRsIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VcbntcbiAgICBzdGF0aWMgU1VDQ0VTUyA9ICdzdWNjZXNzJztcbiAgICBzdGF0aWMgRVJST1IgPSAnZXJyb3InO1xuICAgIHN0YXRpYyBOT1RJQ0UgPSAnbm90aWNlJztcbiAgICBzdGF0aWMgV0FSTklORyA9ICd3YXJuaW5nJztcblxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgdHRsOiBudW1iZXIgPSA1O1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nID0gbnVsbCwgbWVzc2FnZTogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBpZih0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB9XG4gICAgICAgIGlmKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==