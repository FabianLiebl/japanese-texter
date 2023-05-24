(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/@enhavo/dashboard/widget/factory/AbstractFactory.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/@enhavo/dashboard/widget/factory/AbstractFactory.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var AbstractFactory = /** @class */function () {
    function AbstractFactory() {}
    AbstractFactory.prototype.createFromData = function (data) {
      var widget = this.createNew();
      widget = _.extend(data, widget);
      return widget;
    };
    return AbstractFactory;
  }();
  exports["default"] = AbstractFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/dashboard/widget/factory/NumberWidgetFactory.ts":
/*!******************************************************************************!*\
  !*** ./node_modules/@enhavo/dashboard/widget/factory/NumberWidgetFactory.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/dashboard/widget/model/NumberWidget */ "./node_modules/@enhavo/dashboard/widget/model/NumberWidget.ts"), __webpack_require__(/*! @enhavo/dashboard/widget/factory/AbstractFactory */ "./node_modules/@enhavo/dashboard/widget/factory/AbstractFactory.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, NumberWidget_1, AbstractFactory_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var NumberWidgetFactory = /** @class */function (_super) {
    __extends(NumberWidgetFactory, _super);
    function NumberWidgetFactory() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberWidgetFactory.prototype.createNew = function () {
      return new NumberWidget_1["default"](this.application);
    };
    return NumberWidgetFactory;
  }(AbstractFactory_1["default"]);
  exports["default"] = NumberWidgetFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/dashboard/widget/model/NumberWidget.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@enhavo/dashboard/widget/model/NumberWidget.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var NumberWidget = /** @class */function () {
    function NumberWidget() {}
    return NumberWidget;
  }();
  exports["default"] = NumberWidget;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9kYXNoYm9hcmQvd2lkZ2V0L2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2Rhc2hib2FyZC93aWRnZXQvZmFjdG9yeS9OdW1iZXJXaWRnZXRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2Rhc2hib2FyZC93aWRnZXQvbW9kZWwvTnVtYmVyV2lkZ2V0LnRzIl0sIm5hbWVzIjpbIkFic3RyYWN0RmFjdG9yeSIsInByb3RvdHlwZSIsImNyZWF0ZUZyb21EYXRhIiwiZGF0YSIsIndpZGdldCIsImNyZWF0ZU5ldyIsIl8iLCJleHRlbmQiLCJOdW1iZXJXaWRnZXRGYWN0b3J5IiwiX3N1cGVyIiwiX19leHRlbmRzIiwiTnVtYmVyV2lkZ2V0XzEiLCJhcHBsaWNhdGlvbiIsIkFic3RyYWN0RmFjdG9yeV8xIiwiTnVtYmVyV2lkZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7RUFHQSxJQUFBQSxlQUFBO0lBQUEsU0FBQUEsZ0JBQUEsR0FVQTtJQVJJQSxlQUFBLENBQUFDLFNBQUEsQ0FBQUMsY0FBYyxHQUFkLFVBQWVDLElBQVk7TUFFdkIsSUFBSUMsTUFBTSxHQUFHLElBQUksQ0FBQ0MsU0FBUyxFQUFFO01BQzdCRCxNQUFNLEdBQUdFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSixJQUFJLEVBQUVDLE1BQU0sQ0FBQztNQUMvQixPQUFPQSxNQUFNO0lBQ2pCLENBQUM7SUFHTCxPQUFBSixlQUFDO0VBQUQsQ0FBQyxDQVZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUNBQSxJQUFBUSxtQkFBQSwwQkFBQUMsTUFBQTtJQUFpREMsU0FBQSxDQUFBRixtQkFBQSxFQUFBQyxNQUFBO0lBQWpELFNBQUFELG9CQUFBOztJQUtBO0lBSElBLG1CQUFBLENBQUFQLFNBQUEsQ0FBQUksU0FBUyxHQUFUO01BQ0ksT0FBTyxJQUFJTSxjQUFBLFdBQVksQ0FBQyxJQUFJLENBQUNDLFdBQVcsQ0FBQztJQUM3QyxDQUFDO0lBQ0wsT0FBQUosbUJBQUM7RUFBRCxDQUFDLENBTGdESyxpQkFBQSxXQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ0ZoRSxJQUFBQyxZQUFBO0lBQUEsU0FBQUEsYUFBQSxHQUtBO0lBQUEsT0FBQUEsWUFBQztFQUFELENBQUMsQ0FMRCIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFdpZGdldEludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9kYXNoYm9hcmQvd2lkZ2V0L1dpZGdldEludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBjcmVhdGVGcm9tRGF0YShkYXRhOiBvYmplY3QpOiBXaWRnZXRJbnRlcmZhY2VcbiAgICB7XG4gICAgICAgIGxldCB3aWRnZXQgPSB0aGlzLmNyZWF0ZU5ldygpO1xuICAgICAgICB3aWRnZXQgPSBfLmV4dGVuZChkYXRhLCB3aWRnZXQpO1xuICAgICAgICByZXR1cm4gd2lkZ2V0O1xuICAgIH1cblxuICAgIGFic3RyYWN0IGNyZWF0ZU5ldygpOiBXaWRnZXRJbnRlcmZhY2U7XG59IiwiaW1wb3J0IE51bWJlcldpZGdldCBmcm9tIFwiQGVuaGF2by9kYXNoYm9hcmQvd2lkZ2V0L21vZGVsL051bWJlcldpZGdldFwiO1xuaW1wb3J0IEFic3RyYWN0RmFjdG9yeSBmcm9tIFwiQGVuaGF2by9kYXNoYm9hcmQvd2lkZ2V0L2ZhY3RvcnkvQWJzdHJhY3RGYWN0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcldpZGdldEZhY3RvcnkgZXh0ZW5kcyBBYnN0cmFjdEZhY3RvcnlcbntcbiAgICBjcmVhdGVOZXcoKTogTnVtYmVyV2lkZ2V0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBOdW1iZXJXaWRnZXQodGhpcy5hcHBsaWNhdGlvbilcbiAgICB9XG59IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOdW1iZXJXaWRnZXRcbntcbiAgICBjb21wb25lbnQ6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==