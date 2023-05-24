(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~enhavo/app/view~view"],{

/***/ "./node_modules/@enhavo/app/view-stack/event/ChangeUrlEvent.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/ChangeUrlEvent.ts ***!
  \*********************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/view-stack/event/Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ChangeUrlData = void 0;
  var ChangeUrlEvent = /** @class */function (_super) {
    __extends(ChangeUrlEvent, _super);
    function ChangeUrlEvent(id, url, clearStorage) {
      if (clearStorage === void 0) {
        clearStorage = false;
      }
      var _this = _super.call(this, 'change-url') || this;
      _this.id = id;
      _this.url = url;
      _this.clearStorage = clearStorage;
      return _this;
    }
    return ChangeUrlEvent;
  }(Event_1["default"]);
  exports["default"] = ChangeUrlEvent;
  var ChangeUrlData = /** @class */function () {
    function ChangeUrlData() {}
    return ChangeUrlData;
  }();
  exports.ChangeUrlData = ChangeUrlData;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/ClickEvent.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/ClickEvent.ts ***!
  \*****************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ClickEvent = /** @class */function (_super) {
    __extends(ClickEvent, _super);
    function ClickEvent(id) {
      var _this = _super.call(this, 'click') || this;
      _this.id = id;
      return _this;
    }
    return ClickEvent;
  }(Event_1["default"]);
  exports["default"] = ClickEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/ExistsEvent.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/ExistsEvent.ts ***!
  \******************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ExistsEvent = /** @class */function (_super) {
    __extends(ExistsEvent, _super);
    function ExistsEvent(id) {
      var _this = _super.call(this, 'exists') || this;
      _this.id = id;
      return _this;
    }
    return ExistsEvent;
  }(Event_1["default"]);
  exports["default"] = ExistsEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/LoadDataEvent.ts":
/*!********************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/LoadDataEvent.ts ***!
  \********************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var LoadDataEvent = /** @class */function (_super) {
    __extends(LoadDataEvent, _super);
    function LoadDataEvent(key) {
      var _this = _super.call(this, 'load-data') || this;
      _this.key = key;
      return _this;
    }
    return LoadDataEvent;
  }(Event_1["default"]);
  exports["default"] = LoadDataEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/LoadGlobalDataEvent.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/LoadGlobalDataEvent.ts ***!
  \**************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var LoadGlobalDataEvent = /** @class */function (_super) {
    __extends(LoadGlobalDataEvent, _super);
    function LoadGlobalDataEvent(key) {
      var _this = _super.call(this, 'load-global-data') || this;
      _this.key = key;
      return _this;
    }
    return LoadGlobalDataEvent;
  }(Event_1["default"]);
  exports["default"] = LoadGlobalDataEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/LoadedEvent.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/LoadedEvent.ts ***!
  \******************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var LoadedEvent = /** @class */function (_super) {
    __extends(LoadedEvent, _super);
    function LoadedEvent(id, label, closeable) {
      if (label === void 0) {
        label = null;
      }
      if (closeable === void 0) {
        closeable = true;
      }
      var _this = _super.call(this, 'loaded') || this;
      _this.id = id;
      _this.label = label;
      _this.closeable = closeable;
      return _this;
    }
    return LoadedEvent;
  }(Event_1["default"]);
  exports["default"] = LoadedEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts":
/*!*******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts ***!
  \*******************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var LoadingEvent = /** @class */function (_super) {
    __extends(LoadingEvent, _super);
    function LoadingEvent(id) {
      var _this = _super.call(this, 'loading') || this;
      _this.id = id;
      return _this;
    }
    return LoadingEvent;
  }(Event_1["default"]);
  exports["default"] = LoadingEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/SaveDataEvent.ts":
/*!********************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/SaveDataEvent.ts ***!
  \********************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var SaveDataEvent = /** @class */function (_super) {
    __extends(SaveDataEvent, _super);
    function SaveDataEvent(key, value) {
      var _this = _super.call(this, 'save-data') || this;
      _this.key = key;
      _this.value = value;
      return _this;
    }
    return SaveDataEvent;
  }(Event_1["default"]);
  exports["default"] = SaveDataEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/SaveGlobalDataEvent.ts":
/*!**************************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/SaveGlobalDataEvent.ts ***!
  \**************************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var SaveGlobalDataEvent = /** @class */function (_super) {
    __extends(SaveGlobalDataEvent, _super);
    function SaveGlobalDataEvent(key, value) {
      var _this = _super.call(this, 'save-global-data') || this;
      _this.key = key;
      _this.value = value;
      return _this;
    }
    return SaveGlobalDataEvent;
  }(Event_1["default"]);
  exports["default"] = SaveGlobalDataEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view/View.ts":
/*!***********************************************!*\
  !*** ./node_modules/@enhavo/app/view/View.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/view/ViewData */ "./node_modules/@enhavo/app/view/ViewData.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js"), __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"), __webpack_require__(/*! @enhavo/app/view-stack/EventDispatcher */ "./node_modules/@enhavo/app/view-stack/EventDispatcher.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/ClickEvent */ "./node_modules/@enhavo/app/view-stack/event/ClickEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/CreateEvent */ "./node_modules/@enhavo/app/view-stack/event/CreateEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/ExistsEvent */ "./node_modules/@enhavo/app/view-stack/event/ExistsEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/CloseEvent */ "./node_modules/@enhavo/app/view-stack/event/CloseEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadDataEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadDataEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadGlobalDataEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadGlobalDataEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/SaveDataEvent */ "./node_modules/@enhavo/app/view-stack/event/SaveDataEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/SaveGlobalDataEvent */ "./node_modules/@enhavo/app/view-stack/event/SaveGlobalDataEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/SaveStateEvent */ "./node_modules/@enhavo/app/view-stack/event/SaveStateEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/RemoveEvent */ "./node_modules/@enhavo/app/view-stack/event/RemoveEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadedEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadedEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/LoadingEvent */ "./node_modules/@enhavo/app/view-stack/event/LoadingEvent.ts"), __webpack_require__(/*! @enhavo/app/view-stack/event/ChangeUrlEvent */ "./node_modules/@enhavo/app/view-stack/event/ChangeUrlEvent.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ViewData_1, _, URI, $, EventDispatcher_1, ClickEvent_1, CreateEvent_1, ExistsEvent_1, CloseEvent_1, LoadDataEvent_1, LoadGlobalDataEvent_1, SaveDataEvent_1, SaveGlobalDataEvent_1, SaveStateEvent_1, RemoveEvent_1, LoadedEvent_1, LoadingEvent_1, ChangeUrlEvent_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var View = /** @class */function () {
    function View(data, router, translator, componentRegistry) {
      this.initialized = false;
      this.data = data;
      this.router = router;
      this.translator = translator;
      this.componentRegistry = componentRegistry;
    }
    View.initView = function (label) {
      if (label === void 0) {
        label = '';
      }
      new EventDispatcher_1["default"]().dispatch(new LoadedEvent_1["default"](View.getIdFromUrl(), label, true));
    };
    View.prototype.init = function () {
      var _this = this;
      if (this.initialized) {
        return;
      }
      this.initialized = true;
      if (this.data === null) {
        this.data = new ViewData_1["default"]();
      } else {
        this.data = _.assignWith(this.data, new ViewData_1["default"](), function (objValue, srcValue) {
          return _.isUndefined(objValue) ? srcValue : objValue;
        });
      }
      if (this.data.id == null) {
        this.data.id = View.getIdFromUrl();
      } else if (typeof this.data.id === 'string') {
        this.data.id = parseInt(this.data.id);
      }
      this.componentRegistry.registerStore('view', this);
      this.componentRegistry.registerStore('translator', this.translator);
      this.componentRegistry.registerStore('router', this.router);
      this.componentRegistry.registerData(this.data);
      window.addEventListener('click', function () {
        _this.eventDispatcher.dispatch(new ClickEvent_1["default"](_this.getId()));
      });
      this.bindEventHandlerLinksWithTargetView();
    };
    View.getIdFromUrl = function () {
      var url = new URL(window.location.href);
      var id = parseInt(url.searchParams.get("view_id"));
      if (id > 0) {
        return id;
      }
      return 0;
    };
    View.prototype.getId = function () {
      return this.data.id;
    };
    View.prototype.isRoot = function () {
      return this.data.id == 0;
    };
    View.prototype.confirm = function (confirm) {
      if (confirm == null) {
        this.data.confirm = null;
      } else if (this.data.confirm == null) {
        confirm.setView(this);
        this.data.confirm = confirm;
      }
    };
    View.prototype.alert = function (message) {
      if (this.data.alert == null) {
        this.data.alert = message;
      }
    };
    View.prototype.loading = function () {
      this.data.loading = true;
    };
    View.prototype.loaded = function () {
      this.data.loading = false;
    };
    View.prototype.open = function (url, key, label) {
      var _this = this;
      if (key === void 0) {
        key = null;
      }
      if (label === void 0) {
        label = null;
      }
      return new Promise(function (resolve, reject) {
        if (key) {
          _this.eventDispatcher.dispatch(new LoadDataEvent_1["default"](key)).then(function (data) {
            var viewId = null;
            if (data != null) {
              viewId = data.value;
            }
            if (viewId != null) {
              _this.eventDispatcher.dispatch(new ExistsEvent_1["default"](viewId)).then(function (data) {
                if (data.exists) {
                  _this.eventDispatcher.dispatch(new CloseEvent_1["default"](viewId)).then(function () {
                    _this.openView(url, key, label).then(function (view) {
                      resolve(view);
                    })["catch"](function () {
                      reject();
                    });
                  })["catch"](function () {});
                } else {
                  _this.openView(url, key, label).then(function (view) {
                    resolve(view);
                  })["catch"](function () {
                    reject();
                  });
                }
              });
            } else {
              _this.openView(url, key, label).then(function (view) {
                resolve(view);
              })["catch"](function () {
                reject();
              });
            }
          });
        } else {
          _this.openView(url, null, label).then(function (view) {
            resolve(view);
          })["catch"](function () {
            reject();
          });
        }
      });
    };
    View.prototype.openView = function (url, key, label) {
      var _this = this;
      if (key === void 0) {
        key = null;
      }
      if (label === void 0) {
        label = null;
      }
      return new Promise(function (resolve, reject) {
        _this.eventDispatcher.dispatch(new CreateEvent_1["default"]({
          label: label,
          component: 'iframe-view',
          url: url
        }, _this.getId())).then(function (view) {
          if (key) {
            _this.storeValue(key, view.id);
          }
          resolve(view);
          _this.eventDispatcher.dispatch(new SaveStateEvent_1["default"]());
        })["catch"](function () {
          reject();
        });
      });
    };
    View.prototype.storeValue = function (key, value, callback) {
      var _this = this;
      if (callback === void 0) {
        callback = function callback() {};
      }
      return new Promise(function (resolve, reject) {
        _this.eventDispatcher.dispatch(new SaveDataEvent_1["default"](key, value)).then(function () {
          callback();
          resolve();
        })["catch"](function () {
          reject();
        });
      });
    };
    View.prototype.loadValue = function (key, callback) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this.eventDispatcher.dispatch(new LoadDataEvent_1["default"](key)).then(function (data) {
          var value = null;
          if (data != null) {
            value = data.value;
          }
          resolve();
          callback(value);
        })["catch"](function () {
          reject();
        });
      });
    };
    View.prototype.storeGlobalValue = function (key, value, callback) {
      var _this = this;
      if (callback === void 0) {
        callback = function callback() {};
      }
      return new Promise(function (resolve, reject) {
        _this.eventDispatcher.dispatch(new SaveGlobalDataEvent_1["default"](key, value)).then(function () {
          callback();
          resolve();
        })["catch"](function () {
          reject();
        });
      });
    };
    View.prototype.loadGlobalValue = function (key, callback) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this.eventDispatcher.dispatch(new LoadGlobalDataEvent_1["default"](key)).then(function (data) {
          var value = null;
          if (data != null) {
            value = data.value;
          }
          resolve();
          callback(value);
        })["catch"](function () {
          reject();
        });
      });
    };
    View.prototype.addDefaultCloseListener = function () {
      var _this = this;
      this.eventDispatcher.on('close', function (event) {
        if (_this.getId() === event.id) {
          event.resolve();
          _this.eventDispatcher.dispatch(new RemoveEvent_1["default"](_this.getId(), event.saveState));
        }
      });
    };
    View.prototype.ready = function () {
      this.eventDispatcher.dispatch(new LoadedEvent_1["default"](this.getId(), this.data.label, this.data.closeable));
    };
    View.prototype.exit = function () {
      this.eventDispatcher.dispatch(new LoadingEvent_1["default"](this.getId()));
    };
    View.prototype.setEventDispatcher = function (dispatcher) {
      this.eventDispatcher = dispatcher;
    };
    View.prototype.checkUrl = function (clearStorage) {
      var _this = this;
      if (clearStorage === void 0) {
        clearStorage = false;
      }
      var uri = new URI(window.location.href);
      uri = uri.removeQuery('view_id');
      var url = uri.path();
      if (uri.query()) {
        url = uri.path() + '?' + uri.query();
      }
      this.eventDispatcher.dispatch(new ChangeUrlEvent_1["default"](this.getId(), url, clearStorage)).then(function (data) {
        if (data.changed) {
          _this.eventDispatcher.dispatch(new SaveStateEvent_1["default"]());
        }
      });
    };
    View.prototype.bindEventHandlerLinksWithTargetView = function () {
      var self = this;
      $(document).on('click', 'a[target="_view"]', function (event) {
        event.preventDefault();
        self.openView($(this).attr('href'));
      });
    };
    return View;
  }();
  exports["default"] = View;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view/ViewData.ts":
/*!***************************************************!*\
  !*** ./node_modules/@enhavo/app/view/ViewData.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var ViewData = /** @class */function () {
    function ViewData() {
      this.confirm = null;
      this.alert = null;
      this.loading = false;
      this.closeable = false;
    }
    return ViewData;
  }();
  exports["default"] = ViewData;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DaGFuZ2VVcmxFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DbGlja0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0V4aXN0c0V2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWREYXRhRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvTG9hZEdsb2JhbERhdGFFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9Mb2FkZWRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9Mb2FkaW5nRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvU2F2ZURhdGFFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9TYXZlR2xvYmFsRGF0YUV2ZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2FwcC92aWV3L1ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXcvVmlld0RhdGEudHMiXSwibmFtZXMiOlsiQ2hhbmdlVXJsRXZlbnQiLCJfc3VwZXIiLCJfX2V4dGVuZHMiLCJpZCIsInVybCIsImNsZWFyU3RvcmFnZSIsIl90aGlzIiwiY2FsbCIsIkV2ZW50XzEiLCJDaGFuZ2VVcmxEYXRhIiwiZXhwb3J0cyIsIkNsaWNrRXZlbnQiLCJFeGlzdHNFdmVudCIsIkxvYWREYXRhRXZlbnQiLCJrZXkiLCJMb2FkR2xvYmFsRGF0YUV2ZW50IiwiTG9hZGVkRXZlbnQiLCJsYWJlbCIsImNsb3NlYWJsZSIsIkxvYWRpbmdFdmVudCIsIlNhdmVEYXRhRXZlbnQiLCJ2YWx1ZSIsIlNhdmVHbG9iYWxEYXRhRXZlbnQiLCJWaWV3IiwiZGF0YSIsInJvdXRlciIsInRyYW5zbGF0b3IiLCJjb21wb25lbnRSZWdpc3RyeSIsImluaXRpYWxpemVkIiwiaW5pdFZpZXciLCJFdmVudERpc3BhdGNoZXJfMSIsImRpc3BhdGNoIiwiTG9hZGVkRXZlbnRfMSIsImdldElkRnJvbVVybCIsInByb3RvdHlwZSIsImluaXQiLCJWaWV3RGF0YV8xIiwiXyIsImFzc2lnbldpdGgiLCJvYmpWYWx1ZSIsInNyY1ZhbHVlIiwiaXNVbmRlZmluZWQiLCJwYXJzZUludCIsInJlZ2lzdGVyU3RvcmUiLCJyZWdpc3RlckRhdGEiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnREaXNwYXRjaGVyIiwiQ2xpY2tFdmVudF8xIiwiZ2V0SWQiLCJiaW5kRXZlbnRIYW5kbGVyTGlua3NXaXRoVGFyZ2V0VmlldyIsIlVSTCIsImxvY2F0aW9uIiwiaHJlZiIsInNlYXJjaFBhcmFtcyIsImdldCIsImlzUm9vdCIsImNvbmZpcm0iLCJzZXRWaWV3IiwiYWxlcnQiLCJtZXNzYWdlIiwibG9hZGluZyIsImxvYWRlZCIsIm9wZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIkxvYWREYXRhRXZlbnRfMSIsInRoZW4iLCJ2aWV3SWQiLCJFeGlzdHNFdmVudF8xIiwiZXhpc3RzIiwiQ2xvc2VFdmVudF8xIiwib3BlblZpZXciLCJ2aWV3IiwiQ3JlYXRlRXZlbnRfMSIsImNvbXBvbmVudCIsInN0b3JlVmFsdWUiLCJTYXZlU3RhdGVFdmVudF8xIiwiY2FsbGJhY2siLCJTYXZlRGF0YUV2ZW50XzEiLCJsb2FkVmFsdWUiLCJzdG9yZUdsb2JhbFZhbHVlIiwiU2F2ZUdsb2JhbERhdGFFdmVudF8xIiwibG9hZEdsb2JhbFZhbHVlIiwiTG9hZEdsb2JhbERhdGFFdmVudF8xIiwiYWRkRGVmYXVsdENsb3NlTGlzdGVuZXIiLCJvbiIsImV2ZW50IiwiUmVtb3ZlRXZlbnRfMSIsInNhdmVTdGF0ZSIsInJlYWR5IiwiZXhpdCIsIkxvYWRpbmdFdmVudF8xIiwic2V0RXZlbnREaXNwYXRjaGVyIiwiZGlzcGF0Y2hlciIsImNoZWNrVXJsIiwidXJpIiwiVVJJIiwicmVtb3ZlUXVlcnkiLCJwYXRoIiwicXVlcnkiLCJDaGFuZ2VVcmxFdmVudF8xIiwiY2hhbmdlZCIsInNlbGYiLCIkIiwiZG9jdW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF0dHIiLCJWaWV3RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFFQSxJQUFBQSxjQUFBLDBCQUFBQyxNQUFBO0lBQTRDQyxTQUFBLENBQUFGLGNBQUEsRUFBQUMsTUFBQTtJQU14QyxTQUFBRCxlQUFZRyxFQUFVLEVBQUVDLEdBQVcsRUFBRUMsWUFBNkI7TUFBN0IsSUFBQUEsWUFBQTtRQUFBQSxZQUFBLFFBQTZCO01BQUE7TUFBbEUsSUFBQUMsS0FBQSxHQUVJTCxNQUFBLENBQUFNLElBQUEsT0FBTSxZQUFZLENBQUM7TUFDbkJELEtBQUksQ0FBQ0gsRUFBRSxHQUFHQSxFQUFFO01BQ1pHLEtBQUksQ0FBQ0YsR0FBRyxHQUFHQSxHQUFHO01BQ2RFLEtBQUksQ0FBQ0QsWUFBWSxHQUFHQSxZQUFZOztJQUNwQztJQUNKLE9BQUFMLGNBQUM7RUFBRCxDQUFDLENBYjJDUSxPQUFBLFdBQUs7O0VBZWpELElBQUFDLGFBQUE7SUFBQSxTQUFBQSxjQUFBLEdBR0E7SUFBQSxPQUFBQSxhQUFDO0VBQUQsQ0FBQyxDQUhEO0VBQWFDLE9BQUEsQ0FBQUQsYUFBQSxHQUFBQSxhQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SUFBSSxDQUFDL0IsUUFBUSxDQUFDZ0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDdkMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUNMLE9BQUFyRixJQUFDO0VBQUQsQ0FBQyxDQTVSRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUN4QkEsSUFBQXNGLFFBQUE7SUFBQSxTQUFBQSxTQUFBO01BRUksS0FBQXBELE9BQU8sR0FBWSxJQUFJO01BQ3ZCLEtBQUFFLEtBQUssR0FBVyxJQUFJO01BQ3BCLEtBQUFFLE9BQU8sR0FBWSxLQUFLO01BR3hCLEtBQUEzQyxTQUFTLEdBQVksS0FBSztJQUM5QjtJQUFBLE9BQUEyRixRQUFDO0VBQUQsQ0FBQyxDQVJEIiwiZmlsZSI6InZlbmRvcnN+ZW5oYXZvL2FwcC92aWV3fnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvRXZlbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlVXJsRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGlkOiBudW1iZXI7XG4gICAgdXJsOiBzdHJpbmc7XG4gICAgY2xlYXJTdG9yYWdlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgdXJsOiBzdHJpbmcsIGNsZWFyU3RvcmFnZTogYm9vbGVhbiA9IGZhbHNlKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ2NoYW5nZS11cmwnKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5jbGVhclN0b3JhZ2UgPSBjbGVhclN0b3JhZ2U7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2hhbmdlVXJsRGF0YVxue1xuICAgIGNoYW5nZWQ6IGJvb2xlYW5cbn0iLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGlja0V2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKCdjbGljaycpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxufSIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4aXN0c0V2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKCdleGlzdHMnKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbn0iLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkRGF0YUV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBwdWJsaWMga2V5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZylcbiAgICB7XG4gICAgICAgIHN1cGVyKCdsb2FkLWRhdGEnKTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxufSIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRHbG9iYWxEYXRhRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ2xvYWQtZ2xvYmFsLWRhdGEnKTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxufSIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlZEV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBpZDogbnVtYmVyO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgY2xvc2VhYmxlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbGFiZWw6IHN0cmluZyA9IG51bGwsIGNsb3NlYWJsZTogYm9vbGVhbiA9IHRydWUpXG4gICAge1xuICAgICAgICBzdXBlcignbG9hZGVkJyk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLmNsb3NlYWJsZSA9IGNsb3NlYWJsZTtcbiAgICB9XG59IiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ0V2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcilcbiAgICB7XG4gICAgICAgIHN1cGVyKCdsb2FkaW5nJyk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG59IiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZURhdGFFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgcHVibGljIGtleTogc3RyaW5nO1xuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpXG4gICAge1xuICAgICAgICBzdXBlcignc2F2ZS1kYXRhJyk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufSIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmVHbG9iYWxEYXRhRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ3NhdmUtZ2xvYmFsLWRhdGEnKTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IFZpZXdEYXRhIGZyb20gXCJAZW5oYXZvL2FwcC92aWV3L1ZpZXdEYXRhXCI7XG5pbXBvcnQgQ29uZmlybSBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9Db25maXJtXCI7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBVUkkgZnJvbSAndXJpanMnO1xuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBDbGlja0V2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0NsaWNrRXZlbnRcIjtcbmltcG9ydCBDcmVhdGVFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DcmVhdGVFdmVudFwiO1xuaW1wb3J0IEV4aXN0c0V2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0V4aXN0c0V2ZW50XCI7XG5pbXBvcnQgRXhpc3RzRGF0YSBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9FeGlzdHNEYXRhXCI7XG5pbXBvcnQgQ2xvc2VFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DbG9zZUV2ZW50XCI7XG5pbXBvcnQgVmlld0ludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9WaWV3SW50ZXJmYWNlXCI7XG5pbXBvcnQgTG9hZERhdGFFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9Mb2FkRGF0YUV2ZW50XCI7XG5pbXBvcnQgTG9hZEdsb2JhbERhdGFFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9Mb2FkR2xvYmFsRGF0YUV2ZW50XCI7XG5pbXBvcnQgRGF0YVN0b3JhZ2VFbnRyeSBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9EYXRhU3RvcmFnZUVudHJ5XCI7XG5pbXBvcnQgU2F2ZURhdGFFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9TYXZlRGF0YUV2ZW50XCI7XG5pbXBvcnQgU2F2ZUdsb2JhbERhdGFFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9TYXZlR2xvYmFsRGF0YUV2ZW50XCI7XG5pbXBvcnQgU2F2ZVN0YXRlRXZlbnQgZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvU2F2ZVN0YXRlRXZlbnRcIjtcbmltcG9ydCBSZW1vdmVFdmVudCBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9SZW1vdmVFdmVudFwiO1xuaW1wb3J0IExvYWRlZEV2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWRlZEV2ZW50XCI7XG5pbXBvcnQgTG9hZGluZ0V2ZW50IGZyb20gXCJAZW5oYXZvL2FwcC92aWV3LXN0YWNrL2V2ZW50L0xvYWRpbmdFdmVudFwiO1xuaW1wb3J0IENoYW5nZVVybEV2ZW50LCB7Q2hhbmdlVXJsRGF0YX0gZnJvbSBcIkBlbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvQ2hhbmdlVXJsRXZlbnRcIjtcbmltcG9ydCBDb21wb25lbnRSZWdpc3RyeUludGVyZmFjZSBmcm9tIFwiQGVuaGF2by9jb3JlL0NvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlXCI7XG5pbXBvcnQgVHJhbnNsYXRvciBmcm9tIFwiQGVuaGF2by9jb3JlL1RyYW5zbGF0b3JcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIkBlbmhhdm8vY29yZS9Sb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlld1xue1xuICAgIHB1YmxpYyBkYXRhOiBWaWV3RGF0YTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdG9yOiBUcmFuc2xhdG9yO1xuICAgIHByaXZhdGUgZXZlbnREaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG4gICAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGRhdGE6IFZpZXdEYXRhLFxuICAgICAgICByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgdHJhbnNsYXRvcjogVHJhbnNsYXRvcixcbiAgICAgICAgY29tcG9uZW50UmVnaXN0cnk6IENvbXBvbmVudFJlZ2lzdHJ5SW50ZXJmYWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLnRyYW5zbGF0b3IgPSB0cmFuc2xhdG9yO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5ID0gY29tcG9uZW50UmVnaXN0cnk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpbml0VmlldyhsYWJlbDogc3RyaW5nID0gJycpXG4gICAge1xuICAgICAgICAobmV3IEV2ZW50RGlzcGF0Y2hlcigpKS5kaXNwYXRjaChuZXcgTG9hZGVkRXZlbnQoVmlldy5nZXRJZEZyb21VcmwoKSwgbGFiZWwsIHRydWUpKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmKHRoaXMuZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gbmV3IFZpZXdEYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gXy5hc3NpZ25XaXRoKHRoaXMuZGF0YSwgbmV3IFZpZXdEYXRhLCAob2JqVmFsdWUsIHNyY1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uaXNVbmRlZmluZWQob2JqVmFsdWUpID8gc3JjVmFsdWUgOiBvYmpWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5kYXRhLmlkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5pZCA9IFZpZXcuZ2V0SWRGcm9tVXJsKCk7XG4gICAgICAgIH0gZWxzZSBpZih0eXBlb2YgdGhpcy5kYXRhLmlkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmlkID0gcGFyc2VJbnQodGhpcy5kYXRhLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXJTdG9yZSgndmlldycsIHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyU3RvcmUoJ3RyYW5zbGF0b3InLCB0aGlzLnRyYW5zbGF0b3IpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyU3RvcmUoJ3JvdXRlcicsIHRoaXMucm91dGVyKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlckRhdGEodGhpcy5kYXRhKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ2xpY2tFdmVudCh0aGlzLmdldElkKCkpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRIYW5kbGVyTGlua3NXaXRoVGFyZ2V0VmlldygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldElkRnJvbVVybCgpOiBudW1iZXJ8bnVsbFxuICAgIHtcbiAgICAgICAgbGV0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBsZXQgaWQgPSBwYXJzZUludCh1cmwuc2VhcmNoUGFyYW1zLmdldChcInZpZXdfaWRcIikpO1xuICAgICAgICBpZihpZCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBpZFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGdldElkKCk6IG51bWJlcnxudWxsXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmlkO1xuICAgIH1cblxuICAgIGlzUm9vdCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmlkID09IDA7XG4gICAgfVxuXG4gICAgY29uZmlybShjb25maXJtOiBDb25maXJtKVxuICAgIHtcbiAgICAgICAgaWYoY29uZmlybSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuY29uZmlybSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmRhdGEuY29uZmlybSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25maXJtLnNldFZpZXcodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmRhdGEuY29uZmlybSA9IGNvbmZpcm07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpXG4gICAge1xuICAgICAgICBpZih0aGlzLmRhdGEuYWxlcnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmFsZXJ0ID0gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRpbmcoKVxuICAgIHtcbiAgICAgICAgdGhpcy5kYXRhLmxvYWRpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIGxvYWRlZCgpXG4gICAge1xuICAgICAgICB0aGlzLmRhdGEubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVuKHVybDogc3RyaW5nLCBrZXk6IHN0cmluZyA9IG51bGwsIGxhYmVsOiBzdHJpbmcgPSBudWxsKTogUHJvbWlzZTxWaWV3SW50ZXJmYWNlPlxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmKGtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBMb2FkRGF0YUV2ZW50KGtleSkpLnRoZW4oKGRhdGE6IERhdGFTdG9yYWdlRW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZpZXdJZDogbnVtYmVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3SWQgPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHZpZXdJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgRXhpc3RzRXZlbnQodmlld0lkKSkudGhlbigoZGF0YTogRXhpc3RzRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDbG9zZUV2ZW50KHZpZXdJZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuVmlldyh1cmwsIGtleSwgbGFiZWwpLnRoZW4oKHZpZXc6IFZpZXdJbnRlcmZhY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2aWV3KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuVmlldyh1cmwsIGtleSwgbGFiZWwpLnRoZW4oKHZpZXc6IFZpZXdJbnRlcmZhY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmlldylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuVmlldyh1cmwsIGtleSwgbGFiZWwpLnRoZW4oKHZpZXc6IFZpZXdJbnRlcmZhY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZpZXcpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5WaWV3KHVybCwgbnVsbCwgbGFiZWwpLnRoZW4oKHZpZXc6IFZpZXdJbnRlcmZhY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2aWV3KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5WaWV3KHVybDogc3RyaW5nLCBrZXk6IHN0cmluZyA9IG51bGwsIGxhYmVsOiBzdHJpbmcgPSBudWxsKTogUHJvbWlzZTxWaWV3SW50ZXJmYWNlPlxuICAgIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDcmVhdGVFdmVudCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ2lmcmFtZS12aWV3JyxcbiAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgfSwgdGhpcy5nZXRJZCgpKSkudGhlbigodmlldzogVmlld0ludGVyZmFjZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZVZhbHVlKGtleSwgdmlldy5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodmlldyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNhdmVTdGF0ZUV2ZW50KCkpXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3JlVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGNhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge30pXG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNhdmVEYXRhRXZlbnQoa2V5LCB2YWx1ZSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRWYWx1ZShrZXk6IHN0cmluZywgY2FsbGJhY2s6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogUHJvbWlzZTxzdHJpbmc+XG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IExvYWREYXRhRXZlbnQoa2V5KSkudGhlbigoZGF0YTogRGF0YVN0b3JhZ2VFbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RvcmVHbG9iYWxWYWx1ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgY2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fSlcbiAgICB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2F2ZUdsb2JhbERhdGFFdmVudChrZXksIHZhbHVlKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRHbG9iYWxWYWx1ZShrZXk6IHN0cmluZywgY2FsbGJhY2s6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogUHJvbWlzZTxzdHJpbmc+XG4gICAge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IExvYWRHbG9iYWxEYXRhRXZlbnQoa2V5KSlcbiAgICAgICAgICAgICAgICAudGhlbigoZGF0YTogRGF0YVN0b3JhZ2VFbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZERlZmF1bHRDbG9zZUxpc3RlbmVyKCk6IHZvaWRcbiAgICB7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLm9uKCdjbG9zZScsIChldmVudDogQ2xvc2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYodGhpcy5nZXRJZCgpID09PSBldmVudC5pZCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVtb3ZlRXZlbnQodGhpcy5nZXRJZCgpLCBldmVudC5zYXZlU3RhdGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlYWR5KClcbiAgICB7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBMb2FkZWRFdmVudCh0aGlzLmdldElkKCksIHRoaXMuZGF0YS5sYWJlbCwgdGhpcy5kYXRhLmNsb3NlYWJsZSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBleGl0KClcbiAgICB7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBMb2FkaW5nRXZlbnQodGhpcy5nZXRJZCgpKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEV2ZW50RGlzcGF0Y2hlcihkaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXIpXG4gICAge1xuICAgICAgICB0aGlzLmV2ZW50RGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrVXJsKGNsZWFyU3RvcmFnZTogYm9vbGVhbiA9IGZhbHNlKVxuICAgIHtcbiAgICAgICAgbGV0IHVyaSA9IG5ldyBVUkkod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICB1cmkgPSB1cmkucmVtb3ZlUXVlcnkoJ3ZpZXdfaWQnKTtcblxuICAgICAgICBsZXQgdXJsID0gdXJpLnBhdGgoKTtcbiAgICAgICAgaWYodXJpLnF1ZXJ5KCkpIHtcbiAgICAgICAgICAgIHVybCA9IHVyaS5wYXRoKCkgKyAnPycgKyB1cmkucXVlcnkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBDaGFuZ2VVcmxFdmVudCh0aGlzLmdldElkKCksIHVybCwgY2xlYXJTdG9yYWdlKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhOiBDaGFuZ2VVcmxEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTYXZlU3RhdGVFdmVudCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBiaW5kRXZlbnRIYW5kbGVyTGlua3NXaXRoVGFyZ2V0VmlldygpXG4gICAge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdhW3RhcmdldD1cIl92aWV3XCJdJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZWxmLm9wZW5WaWV3KCQodGhpcykuYXR0cignaHJlZicpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgQ29uZmlybSBmcm9tIFwiQGVuaGF2by9hcHAvdmlldy9Db25maXJtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdEYXRhXG57XG4gICAgY29uZmlybTogQ29uZmlybSA9IG51bGw7XG4gICAgYWxlcnQ6IHN0cmluZyA9IG51bGw7XG4gICAgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlkOiBudW1iZXI7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBjbG9zZWFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9