(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@enhavo/dashboard/widget/WidgetManager.ts":
/*!****************************************************************!*\
  !*** ./node_modules/@enhavo/dashboard/widget/WidgetManager.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var WidgetManager = /** @class */function () {
    function WidgetManager(widgets, registry, componentRegistry) {
      this.registry = registry;
      this.widgets = widgets;
      this.componentRegistry = componentRegistry;
    }
    WidgetManager.prototype.init = function () {
      for (var i in this.widgets) {
        var widget = this.registry.getFactory(this.widgets[i].component).createFromData(this.widgets[i]);
        _.extend(this.widgets[i], widget);
      }
      for (var _i = 0, _a = this.registry.getComponents(); _i < _a.length; _i++) {
        var component = _a[_i];
        this.componentRegistry.registerComponent(component.name, component.component);
      }
      this.componentRegistry.registerData(this.widgets);
      this.componentRegistry.registerStore('widgetManager', this);
    };
    return WidgetManager;
  }();
  exports["default"] = WidgetManager;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9kYXNoYm9hcmQvd2lkZ2V0L1dpZGdldE1hbmFnZXIudHMiXSwibmFtZXMiOlsiV2lkZ2V0TWFuYWdlciIsIndpZGdldHMiLCJyZWdpc3RyeSIsImNvbXBvbmVudFJlZ2lzdHJ5IiwicHJvdG90eXBlIiwiaW5pdCIsImkiLCJ3aWRnZXQiLCJnZXRGYWN0b3J5IiwiY29tcG9uZW50IiwiY3JlYXRlRnJvbURhdGEiLCJfIiwiZXh0ZW5kIiwiX2kiLCJfYSIsImdldENvbXBvbmVudHMiLCJsZW5ndGgiLCJyZWdpc3RlckNvbXBvbmVudCIsIm5hbWUiLCJyZWdpc3RlckRhdGEiLCJyZWdpc3RlclN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7RUFLQSxJQUFBQSxhQUFBO0lBTUksU0FBQUEsY0FBWUMsT0FBMEIsRUFBRUMsUUFBd0IsRUFBRUMsaUJBQTZDO01BRTNHLElBQUksQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRO01BQ3hCLElBQUksQ0FBQ0QsT0FBTyxHQUFHQSxPQUFPO01BQ3RCLElBQUksQ0FBQ0UsaUJBQWlCLEdBQUdBLGlCQUFpQjtJQUM5QztJQUVBSCxhQUFBLENBQUFJLFNBQUEsQ0FBQUMsSUFBSSxHQUFKO01BQ0ksS0FBSyxJQUFJQyxDQUFDLElBQUksSUFBSSxDQUFDTCxPQUFPLEVBQUU7UUFDeEIsSUFBSU0sTUFBTSxHQUFHLElBQUksQ0FBQ0wsUUFBUSxDQUFDTSxVQUFVLENBQUMsSUFBSSxDQUFDUCxPQUFPLENBQUNLLENBQUMsQ0FBQyxDQUFDRyxTQUFTLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQ1QsT0FBTyxDQUFDSyxDQUFDLENBQUMsQ0FBQztRQUNoR0ssQ0FBQyxDQUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDWCxPQUFPLENBQUNLLENBQUMsQ0FBQyxFQUFFQyxNQUFNLENBQUM7O01BR3JDLEtBQXNCLElBQUFNLEVBQUEsSUFBNkIsRUFBN0JDLEVBQUEsT0FBSSxDQUFDWixRQUFRLENBQUNhLGFBQWEsRUFBRSxFQUE3QkYsRUFBQSxHQUFBQyxFQUFBLENBQUFFLE1BQTZCLEVBQTdCSCxFQUFBLEVBQTZCLEVBQUU7UUFBaEQsSUFBSUosU0FBUyxHQUFBSyxFQUFBLENBQUFELEVBQUE7UUFDZCxJQUFJLENBQUNWLGlCQUFpQixDQUFDYyxpQkFBaUIsQ0FBQ1IsU0FBUyxDQUFDUyxJQUFJLEVBQUVULFNBQVMsQ0FBQ0EsU0FBUyxDQUFDOztNQUdqRixJQUFJLENBQUNOLGlCQUFpQixDQUFDZ0IsWUFBWSxDQUFDLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQztNQUNqRCxJQUFJLENBQUNFLGlCQUFpQixDQUFDaUIsYUFBYSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUNMLE9BQUFwQixhQUFDO0VBQUQsQ0FBQyxDQTFCRCIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBXaWRnZXRJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vZGFzaGJvYXJkL3dpZGdldC9XaWRnZXRJbnRlcmZhY2VcIjtcbmltcG9ydCBXaWRnZXRSZWdpc3RyeSBmcm9tIFwiQGVuaGF2by9kYXNoYm9hcmQvd2lkZ2V0L1dpZGdldFJlZ2lzdHJ5XCI7XG5pbXBvcnQgQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2UgZnJvbSBcIkBlbmhhdm8vY29yZS9Db21wb25lbnRSZWdpc3RyeUludGVyZmFjZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXRNYW5hZ2VyXG57XG4gICAgcHVibGljIHJlYWRvbmx5IHdpZGdldHM6IFdpZGdldEludGVyZmFjZVtdO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlO1xuXG4gICAgY29uc3RydWN0b3Iod2lkZ2V0czogV2lkZ2V0SW50ZXJmYWNlW10sIHJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSwgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlKVxuICAgIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xuICAgICAgICB0aGlzLndpZGdldHMgPSB3aWRnZXRzO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0gY29tcG9uZW50UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLndpZGdldHMpIHtcbiAgICAgICAgICAgIGxldCB3aWRnZXQgPSB0aGlzLnJlZ2lzdHJ5LmdldEZhY3RvcnkodGhpcy53aWRnZXRzW2ldLmNvbXBvbmVudCkuY3JlYXRlRnJvbURhdGEodGhpcy53aWRnZXRzW2ldKTtcbiAgICAgICAgICAgIF8uZXh0ZW5kKHRoaXMud2lkZ2V0c1tpXSwgd2lkZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiB0aGlzLnJlZ2lzdHJ5LmdldENvbXBvbmVudHMoKSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQubmFtZSwgY29tcG9uZW50LmNvbXBvbmVudClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJEYXRhKHRoaXMud2lkZ2V0cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJTdG9yZSgnd2lkZ2V0TWFuYWdlcicsIHRoaXMpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=