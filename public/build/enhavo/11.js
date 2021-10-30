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

  var WidgetManager =
  /** @class */
  function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9kYXNoYm9hcmQvd2lkZ2V0L1dpZGdldE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQU1JLDJCQUFZLE9BQVosRUFBd0MsUUFBeEMsRUFBa0UsaUJBQWxFLEVBQStHO0FBRTNHLFdBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLFdBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxXQUFLLGlCQUFMLEdBQXlCLGlCQUF6QjtBQUNIOztBQUVEO0FBQ0ksV0FBSyxJQUFJLENBQVQsSUFBYyxLQUFLLE9BQW5CLEVBQTRCO0FBQ3hCLFlBQUksTUFBTSxHQUFHLEtBQUssUUFBTCxDQUFjLFVBQWQsQ0FBeUIsS0FBSyxPQUFMLENBQWEsQ0FBYixFQUFnQixTQUF6QyxFQUFvRCxjQUFwRCxDQUFtRSxLQUFLLE9BQUwsQ0FBYSxDQUFiLENBQW5FLENBQWI7O0FBQ0EsU0FBQyxDQUFDLE1BQUYsQ0FBUyxLQUFLLE9BQUwsQ0FBYSxDQUFiLENBQVQsRUFBMEIsTUFBMUI7QUFDSDs7QUFFRCxXQUFzQixzQkFBSyxRQUFMLENBQWMsYUFBZCxFQUF0QixFQUFzQixjQUF0QixFQUFzQixJQUF0QixFQUFxRDtBQUFoRCxZQUFJLFNBQVMsU0FBYjtBQUNELGFBQUssaUJBQUwsQ0FBdUIsaUJBQXZCLENBQXlDLFNBQVMsQ0FBQyxJQUFuRCxFQUF5RCxTQUFTLENBQUMsU0FBbkU7QUFDSDs7QUFFRCxXQUFLLGlCQUFMLENBQXVCLFlBQXZCLENBQW9DLEtBQUssT0FBekM7QUFDQSxXQUFLLGlCQUFMLENBQXVCLGFBQXZCLENBQXFDLGVBQXJDLEVBQXNELElBQXREO0FBQ0gsS0FaRDs7QUFhSjtBQUFDLEdBMUJEIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFdpZGdldEludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9kYXNoYm9hcmQvd2lkZ2V0L1dpZGdldEludGVyZmFjZVwiO1xuaW1wb3J0IFdpZGdldFJlZ2lzdHJ5IGZyb20gXCJAZW5oYXZvL2Rhc2hib2FyZC93aWRnZXQvV2lkZ2V0UmVnaXN0cnlcIjtcbmltcG9ydCBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL0NvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldE1hbmFnZXJcbntcbiAgICBwdWJsaWMgcmVhZG9ubHkgd2lkZ2V0czogV2lkZ2V0SW50ZXJmYWNlW107XG4gICAgcHJpdmF0ZSByZWFkb25seSByZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2U7XG5cbiAgICBjb25zdHJ1Y3Rvcih3aWRnZXRzOiBXaWRnZXRJbnRlcmZhY2VbXSwgcmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5LCBjb21wb25lbnRSZWdpc3RyeTogQ29tcG9uZW50UmVnaXN0cnlJbnRlcmZhY2UpXG4gICAge1xuICAgICAgICB0aGlzLnJlZ2lzdHJ5ID0gcmVnaXN0cnk7XG4gICAgICAgIHRoaXMud2lkZ2V0cyA9IHdpZGdldHM7XG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkgPSBjb21wb25lbnRSZWdpc3RyeTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMud2lkZ2V0cykge1xuICAgICAgICAgICAgbGV0IHdpZGdldCA9IHRoaXMucmVnaXN0cnkuZ2V0RmFjdG9yeSh0aGlzLndpZGdldHNbaV0uY29tcG9uZW50KS5jcmVhdGVGcm9tRGF0YSh0aGlzLndpZGdldHNbaV0pO1xuICAgICAgICAgICAgXy5leHRlbmQodGhpcy53aWRnZXRzW2ldLCB3aWRnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgY29tcG9uZW50IG9mIHRoaXMucmVnaXN0cnkuZ2V0Q29tcG9uZW50cygpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudC5uYW1lLCBjb21wb25lbnQuY29tcG9uZW50KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckRhdGEodGhpcy53aWRnZXRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlclN0b3JlKCd3aWRnZXRNYW5hZ2VyJywgdGhpcyk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==