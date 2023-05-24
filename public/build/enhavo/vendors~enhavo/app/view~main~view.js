(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~enhavo/app/view~main~view"],{

/***/ "./node_modules/@enhavo/app/view-stack/EventDispatcher.ts":
/*!****************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/EventDispatcher.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @enhavo/app/view-stack/event/Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts"), __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1, _) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Subscriber = void 0;
  var EventDispatcher = /** @class */function () {
    function EventDispatcher() {
      var _this = this;
      this.subscribers = [];
      this.dispatchSubscriber = [];
      this.allSubscriber = [];
      this.events = [];
      this.onDispatch(function (event) {
        if (event.origin == null) {
          event.origin = _this.getViewId();
        }
        event.history.push(window.location.href);
        if (event.ttl == null) {
          event.ttl = _this.isRootView() ? 2 : 3;
        }
      });
      // receive message events
      var regex = new RegExp('^view_stack_event');
      window.addEventListener("message", function (event) {
        var data = event.data;
        if (typeof data == 'string' && regex.test(data)) {
          data = data.substring(17);
          var eventData = JSON.parse(data);
          var newEvent = new Event_1["default"]('');
          _.extend(newEvent, eventData);
          if (_this.isDebug()) {
            console.groupCollapsed('receive event (' + newEvent.name + ') on ' + _this.getViewId());
            console.dir(newEvent);
            console.groupEnd();
          }
          _this.dispatch(newEvent);
        }
      }, false);
      // send event to parent window
      if (window.parent && !this.isRootView()) {
        this.all(function (event) {
          if (event.origin == _this.getViewId()) {
            var serializeEvent = 'view_stack_event|' + event.serialize();
            window.parent.postMessage(serializeEvent, '*');
          }
        });
      }
      this.on('reject', function (event) {
        _this.events.forEach(function (eventStore) {
          if (eventStore.event.uuid == event.uuid) {
            eventStore.reject(event.data);
            _this.removeEvent(eventStore);
          }
        });
      });
      this.on('resolve', function (event) {
        _this.events.forEach(function (eventStore) {
          if (eventStore.event.uuid == event.uuid) {
            eventStore.resolve(event.data);
            _this.removeEvent(eventStore);
          }
        });
      });
    }
    EventDispatcher.prototype.isRootView = function () {
      return this.getViewId() == 0;
    };
    EventDispatcher.prototype.getViewId = function () {
      var url = new URL(window.location.href);
      var id = parseInt(url.searchParams.get("view_id"));
      if (id > 0) {
        return id;
      }
      return 0;
    };
    EventDispatcher.prototype.removeEvent = function (eventStore) {
      for (var i in this.events) {
        if (eventStore.event.uuid == this.events[i].event.uuid) {
          this.events.splice(parseInt(i), 1);
          return;
        }
      }
    };
    EventDispatcher.prototype.dispatch = function (event) {
      var _this = this;
      event.dispatcher = this;
      this.dispatchSubscriber.forEach(function (subscriber) {
        subscriber.callback(event);
      });
      if (event.ttl == 0) {
        return;
      }
      event.ttl--;
      if (this.isDebug()) {
        console.groupCollapsed('dispatch event (' + event.name + ') on ' + this.getViewId());
        console.dir(event);
        console.groupEnd();
      }
      var promise = new Promise(function (resolve, reject) {
        if (event.origin == _this.getViewId()) {
          if (event.name != 'reject' && event.name != 'resolve') {
            _this.events.push(new EventStore(event, resolve, reject));
          }
        }
        _this.subscribers.forEach(function (subscriber) {
          if (subscriber.eventName == event.name) {
            subscriber.callback(event);
          }
        });
        _this.allSubscriber.forEach(function (subscriber) {
          subscriber.callback(event);
        });
      });
      // set empty function to prevent "Uncaught (in promise)" error
      promise["catch"](function (data) {});
      return promise;
    };
    EventDispatcher.prototype.on = function (eventName, callback) {
      var subscriber = new Subscriber();
      subscriber.eventName = eventName;
      subscriber.callback = callback;
      this.subscribers.push(subscriber);
      return subscriber;
    };
    EventDispatcher.prototype.all = function (callback) {
      var subscriber = new Subscriber();
      subscriber.eventName = null;
      subscriber.callback = callback;
      this.allSubscriber.push(subscriber);
      return subscriber;
    };
    EventDispatcher.prototype.onDispatch = function (callback) {
      var subscriber = new Subscriber();
      subscriber.eventName = null;
      subscriber.callback = callback;
      this.dispatchSubscriber.push(subscriber);
      return subscriber;
    };
    EventDispatcher.prototype.remove = function (subscriber) {
      this.removeFromArray(subscriber, this.subscribers);
      this.removeFromArray(subscriber, this.dispatchSubscriber);
      this.removeFromArray(subscriber, this.allSubscriber);
    };
    EventDispatcher.prototype.removeFromArray = function (subscriber, subscribers) {
      var index = subscribers.indexOf(subscriber);
      if (index >= 0) {
        subscribers.splice(index, 1);
      }
    };
    EventDispatcher.prototype.isDebug = function () {
      return false;
    };
    return EventDispatcher;
  }();
  exports["default"] = EventDispatcher;
  var Subscriber = /** @class */function () {
    function Subscriber() {
      this.eventName = null;
    }
    return Subscriber;
  }();
  exports.Subscriber = Subscriber;
  var EventStore = /** @class */function () {
    function EventStore(event, resolve, reject) {
      this.event = event;
      this.resolve = resolve;
      this.reject = reject;
    }
    return EventStore;
  }();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/CloseEvent.ts":
/*!*****************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/CloseEvent.ts ***!
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
  var CloseEvent = /** @class */function (_super) {
    __extends(CloseEvent, _super);
    function CloseEvent(id, saveState) {
      if (saveState === void 0) {
        saveState = true;
      }
      var _this = _super.call(this, 'close') || this;
      _this.saveState = true;
      _this.id = id;
      _this.saveState = saveState;
      return _this;
    }
    return CloseEvent;
  }(Event_1["default"]);
  exports["default"] = CloseEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/CreateEvent.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/CreateEvent.ts ***!
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
  var CreateEvent = /** @class */function (_super) {
    __extends(CreateEvent, _super);
    function CreateEvent(data, parent) {
      if (parent === void 0) {
        parent = null;
      }
      var _this = _super.call(this, 'create') || this;
      _this.parent = null;
      _this.data = data;
      _this.parent = parent;
      return _this;
    }
    return CreateEvent;
  }(Event_1["default"]);
  exports["default"] = CreateEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/Event.ts":
/*!************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/Event.ts ***!
  \************************************************************/
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, uuidv4) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ResolveEvent = exports.RejectEvent = void 0;
  var Event = /** @class */function () {
    function Event(name) {
      this.history = [];
      this.name = name;
      this.uuid = uuidv4();
    }
    Event.prototype.resolve = function (data) {
      if (data === void 0) {
        data = {};
      }
      this.dispatcher.dispatch(new ResolveEvent(this.uuid, data));
    };
    Event.prototype.reject = function (data) {
      if (data === void 0) {
        data = {};
      }
      this.dispatcher.dispatch(new RejectEvent(this.uuid, data));
    };
    Event.prototype.serialize = function () {
      var dispatcher = this.dispatcher;
      this.dispatcher = null;
      var data = JSON.stringify(this);
      this.dispatcher = dispatcher;
      return data;
    };
    return Event;
  }();
  exports["default"] = Event;
  var RejectEvent = /** @class */function (_super) {
    __extends(RejectEvent, _super);
    function RejectEvent(uuid, data) {
      var _this = _super.call(this, 'reject') || this;
      _this.uuid = uuid;
      _this.data = data;
      return _this;
    }
    return RejectEvent;
  }(Event);
  exports.RejectEvent = RejectEvent;
  var ResolveEvent = /** @class */function (_super) {
    __extends(ResolveEvent, _super);
    function ResolveEvent(uuid, data) {
      var _this = _super.call(this, 'resolve') || this;
      _this.uuid = uuid;
      _this.data = data;
      return _this;
    }
    return ResolveEvent;
  }(Event);
  exports.ResolveEvent = ResolveEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/RemoveEvent.ts":
/*!******************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/RemoveEvent.ts ***!
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
  var RemoveEvent = /** @class */function (_super) {
    __extends(RemoveEvent, _super);
    function RemoveEvent(id, saveState) {
      if (saveState === void 0) {
        saveState = true;
      }
      var _this = _super.call(this, 'remove') || this;
      _this.id = id;
      _this.saveState = saveState;
      return _this;
    }
    return RemoveEvent;
  }(Event_1["default"]);
  exports["default"] = RemoveEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/app/view-stack/event/SaveStateEvent.ts":
/*!*********************************************************************!*\
  !*** ./node_modules/@enhavo/app/view-stack/event/SaveStateEvent.ts ***!
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
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./Event */ "./node_modules/@enhavo/app/view-stack/event/Event.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Event_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var SaveStateEvent = /** @class */function (_super) {
    __extends(SaveStateEvent, _super);
    function SaveStateEvent() {
      return _super.call(this, 'save-state') || this;
    }
    return SaveStateEvent;
  }(Event_1["default"]);
  exports["default"] = SaveStateEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvQ2xvc2VFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DcmVhdGVFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9FdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9SZW1vdmVFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9TYXZlU3RhdGVFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIl0sIm5hbWVzIjpbIkV2ZW50RGlzcGF0Y2hlciIsIl90aGlzIiwic3Vic2NyaWJlcnMiLCJkaXNwYXRjaFN1YnNjcmliZXIiLCJhbGxTdWJzY3JpYmVyIiwiZXZlbnRzIiwib25EaXNwYXRjaCIsImV2ZW50Iiwib3JpZ2luIiwiZ2V0Vmlld0lkIiwiaGlzdG9yeSIsInB1c2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0dGwiLCJpc1Jvb3RWaWV3IiwicmVnZXgiLCJSZWdFeHAiLCJhZGRFdmVudExpc3RlbmVyIiwiZGF0YSIsInRlc3QiLCJzdWJzdHJpbmciLCJldmVudERhdGEiLCJKU09OIiwicGFyc2UiLCJuZXdFdmVudCIsIkV2ZW50XzEiLCJfIiwiZXh0ZW5kIiwiaXNEZWJ1ZyIsImNvbnNvbGUiLCJncm91cENvbGxhcHNlZCIsIm5hbWUiLCJkaXIiLCJncm91cEVuZCIsImRpc3BhdGNoIiwicGFyZW50IiwiYWxsIiwic2VyaWFsaXplRXZlbnQiLCJzZXJpYWxpemUiLCJwb3N0TWVzc2FnZSIsIm9uIiwiZm9yRWFjaCIsImV2ZW50U3RvcmUiLCJ1dWlkIiwicmVqZWN0IiwicmVtb3ZlRXZlbnQiLCJyZXNvbHZlIiwicHJvdG90eXBlIiwidXJsIiwiVVJMIiwiaWQiLCJwYXJzZUludCIsInNlYXJjaFBhcmFtcyIsImdldCIsImkiLCJzcGxpY2UiLCJkaXNwYXRjaGVyIiwic3Vic2NyaWJlciIsImNhbGxiYWNrIiwicHJvbWlzZSIsIlByb21pc2UiLCJFdmVudFN0b3JlIiwiZXZlbnROYW1lIiwiU3Vic2NyaWJlciIsInJlbW92ZSIsInJlbW92ZUZyb21BcnJheSIsImluZGV4IiwiaW5kZXhPZiIsImV4cG9ydHMiLCJDbG9zZUV2ZW50IiwiX3N1cGVyIiwiX19leHRlbmRzIiwic2F2ZVN0YXRlIiwiY2FsbCIsIkNyZWF0ZUV2ZW50IiwiRXZlbnQiLCJ1dWlkdjQiLCJSZXNvbHZlRXZlbnQiLCJSZWplY3RFdmVudCIsInN0cmluZ2lmeSIsIlJlbW92ZUV2ZW50IiwiU2F2ZVN0YXRlRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7RUFJQSxJQUFBQSxlQUFBO0lBT0ksU0FBQUEsZ0JBQUE7TUFBQSxJQUFBQyxLQUFBO01BTFEsS0FBQUMsV0FBVyxHQUFpQixFQUFFO01BQzlCLEtBQUFDLGtCQUFrQixHQUFpQixFQUFFO01BQ3JDLEtBQUFDLGFBQWEsR0FBaUIsRUFBRTtNQUNoQyxLQUFBQyxNQUFNLEdBQWlCLEVBQUU7TUFJN0IsSUFBSSxDQUFDQyxVQUFVLENBQUMsVUFBQ0MsS0FBWTtRQUN6QixJQUFHQSxLQUFLLENBQUNDLE1BQU0sSUFBSSxJQUFJLEVBQUU7VUFDckJELEtBQUssQ0FBQ0MsTUFBTSxHQUFHUCxLQUFJ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Ozs7Ozs7Ozs7O0FDRmpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakNBLFVBQVUsbUJBQU8sQ0FBQyx5REFBVztBQUM3QixrQkFBa0IsbUJBQU8sQ0FBQyxpRUFBbUI7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+ZW5oYXZvL2FwcC92aWV3fm1haW5+dmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudCwge1Jlc29sdmVFdmVudCwgUmVqZWN0RXZlbnR9IGZyb20gJ0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvRXZlbnQnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICogYXMgVVJJIGZyb20gJ3VyaWpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnREaXNwYXRjaGVyXG57XG4gICAgcHJpdmF0ZSBzdWJzY3JpYmVyczogU3Vic2NyaWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBkaXNwYXRjaFN1YnNjcmliZXI6IFN1YnNjcmliZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgYWxsU3Vic2NyaWJlcjogU3Vic2NyaWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBldmVudHM6IEV2ZW50U3RvcmVbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5vbkRpc3BhdGNoKChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmKGV2ZW50Lm9yaWdpbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQub3JpZ2luID0gdGhpcy5nZXRWaWV3SWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50Lmhpc3RvcnkucHVzaCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICBpZihldmVudC50dGwgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnR0bCA9IHRoaXMuaXNSb290VmlldygpID8gMiA6IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlY2VpdmUgbWVzc2FnZSBldmVudHNcbiAgICAgICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXnZpZXdfc3RhY2tfZXZlbnQnKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgaWYodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycgJiYgcmVnZXgudGVzdChkYXRhKSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLnN1YnN0cmluZygxNyk7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50RGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0V2ZW50ID0gbmV3IEV2ZW50KCcnKTtcbiAgICAgICAgICAgICAgICBfLmV4dGVuZChuZXdFdmVudCwgZXZlbnREYXRhKTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNEZWJ1ZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ3JlY2VpdmUgZXZlbnQgKCcrIG5ld0V2ZW50Lm5hbWUrJykgb24gJyArIHRoaXMuZ2V0Vmlld0lkKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihuZXdFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoKG5ld0V2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIC8vIHNlbmQgZXZlbnQgdG8gcGFyZW50IHdpbmRvd1xuICAgICAgICBpZih3aW5kb3cucGFyZW50ICYmICF0aGlzLmlzUm9vdFZpZXcoKSkge1xuICAgICAgICAgICAgdGhpcy5hbGwoKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50Lm9yaWdpbiA9PSB0aGlzLmdldFZpZXdJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZXJpYWxpemVFdmVudCA9ICd2aWV3X3N0YWNrX2V2ZW50fCcgKyBldmVudC5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShzZXJpYWxpemVFdmVudCwgJyonKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub24oJ3JlamVjdCcsIChldmVudDogUmVqZWN0RXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goKGV2ZW50U3RvcmU6IEV2ZW50U3RvcmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZihldmVudFN0b3JlLmV2ZW50LnV1aWQgPT0gZXZlbnQudXVpZCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudFN0b3JlLnJlamVjdChldmVudC5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudChldmVudFN0b3JlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vbigncmVzb2x2ZScsIChldmVudDogUmVzb2x2ZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChldmVudFN0b3JlOiBFdmVudFN0b3JlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnRTdG9yZS5ldmVudC51dWlkID09IGV2ZW50LnV1aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRTdG9yZS5yZXNvbHZlKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KGV2ZW50U3RvcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzUm9vdFZpZXcoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Vmlld0lkKCkgPT0gMDtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBnZXRWaWV3SWQoKTogbnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGxldCBpZCA9IHBhcnNlSW50KHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidmlld19pZFwiKSk7XG4gICAgICAgIGlmKGlkID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGlkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudChldmVudFN0b3JlOiBFdmVudFN0b3JlKVxuICAgIHtcbiAgICAgICAgZm9yKGxldCBpIGluIHRoaXMuZXZlbnRzKSB7XG4gICAgICAgICAgICBpZihldmVudFN0b3JlLmV2ZW50LnV1aWQgPT0gdGhpcy5ldmVudHNbaV0uZXZlbnQudXVpZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnNwbGljZShwYXJzZUludChpKSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRpc3BhdGNoKGV2ZW50OiBFdmVudCk6IFByb21pc2U8b2JqZWN0PlxuICAgIHtcbiAgICAgICAgZXZlbnQuZGlzcGF0Y2hlciA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaFN1YnNjcmliZXIuZm9yRWFjaCgoc3Vic2NyaWJlcjpTdWJzY3JpYmVyKSA9PiB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoZXZlbnQudHRsID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBldmVudC50dGwtLTtcblxuICAgICAgICBpZih0aGlzLmlzRGVidWcoKSkge1xuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnZGlzcGF0Y2ggZXZlbnQgKCcrIGV2ZW50Lm5hbWUrJykgb24gJyArIHRoaXMuZ2V0Vmlld0lkKCkpO1xuICAgICAgICAgICAgY29uc29sZS5kaXIoZXZlbnQpO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmKGV2ZW50Lm9yaWdpbiA9PSB0aGlzLmdldFZpZXdJZCgpKSB7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnQubmFtZSAhPSAncmVqZWN0JyAmJiBldmVudC5uYW1lICE9ICdyZXNvbHZlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKG5ldyBFdmVudFN0b3JlKGV2ZW50LCByZXNvbHZlLCByZWplY3QpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaCgoc3Vic2NyaWJlcjpTdWJzY3JpYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoc3Vic2NyaWJlci5ldmVudE5hbWUgPT0gZXZlbnQubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5hbGxTdWJzY3JpYmVyLmZvckVhY2goKHN1YnNjcmliZXI6U3Vic2NyaWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBzZXQgZW1wdHkgZnVuY3Rpb24gdG8gcHJldmVudCBcIlVuY2F1Z2h0IChpbiBwcm9taXNlKVwiIGVycm9yXG4gICAgICAgIHByb21pc2UuY2F0Y2goIChkYXRhOm9iamVjdCkgPT4ge30pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb24oZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkKTogU3Vic2NyaWJlclxuICAgIHtcbiAgICAgICAgbGV0IHN1YnNjcmliZXIgPSBuZXcgU3Vic2NyaWJlcigpO1xuICAgICAgICBzdWJzY3JpYmVyLmV2ZW50TmFtZSA9IGV2ZW50TmFtZTtcbiAgICAgICAgc3Vic2NyaWJlci5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBhbGwoY2FsbGJhY2s6IChldmVudDogRXZlbnQpID0+IHZvaWQpOiBTdWJzY3JpYmVyXG4gICAge1xuICAgICAgICBsZXQgc3Vic2NyaWJlciA9IG5ldyBTdWJzY3JpYmVyKCk7XG4gICAgICAgIHN1YnNjcmliZXIuZXZlbnROYW1lID0gbnVsbDtcbiAgICAgICAgc3Vic2NyaWJlci5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLmFsbFN1YnNjcmliZXIucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfVxuXG4gICAgcHVibGljIG9uRGlzcGF0Y2goY2FsbGJhY2s6IChldmVudDogRXZlbnQpID0+IHZvaWQpOiBTdWJzY3JpYmVyXG4gICAge1xuICAgICAgICBsZXQgc3Vic2NyaWJlciA9IG5ldyBTdWJzY3JpYmVyKCk7XG4gICAgICAgIHN1YnNjcmliZXIuZXZlbnROYW1lID0gbnVsbDtcbiAgICAgICAgc3Vic2NyaWJlci5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLmRpc3BhdGNoU3Vic2NyaWJlci5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKHN1YnNjcmliZXI6IFN1YnNjcmliZXIpXG4gICAge1xuICAgICAgICB0aGlzLnJlbW92ZUZyb21BcnJheShzdWJzY3JpYmVyLCB0aGlzLnN1YnNjcmliZXJzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tQXJyYXkoc3Vic2NyaWJlciwgdGhpcy5kaXNwYXRjaFN1YnNjcmliZXIpO1xuICAgICAgICB0aGlzLnJlbW92ZUZyb21BcnJheShzdWJzY3JpYmVyLCB0aGlzLmFsbFN1YnNjcmliZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlRnJvbUFycmF5KHN1YnNjcmliZXI6IFN1YnNjcmliZXIsIHN1YnNjcmliZXJzOiBTdWJzY3JpYmVyW10pXG4gICAge1xuICAgICAgICBjb25zdCBpbmRleCA9IHN1YnNjcmliZXJzLmluZGV4T2Yoc3Vic2NyaWJlcik7XG4gICAgICAgIGlmKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEZWJ1ZygpXG4gICAge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3Vic2NyaWJlclxue1xuICAgIGV2ZW50TmFtZTogc3RyaW5nID0gbnVsbDtcbiAgICBjYWxsYmFjazogKGV2ZW50OiBFdmVudCkgPT4gdm9pZDtcbn1cblxuY2xhc3MgRXZlbnRTdG9yZVxue1xuICAgIGV2ZW50OiBFdmVudDtcbiAgICByZXNvbHZlOiAoZGF0YTogb2JqZWN0KSA9PiB2b2lkO1xuICAgIHJlamVjdDogKGRhdGE6IG9iamVjdCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKGV2ZW50OiBFdmVudCwgcmVzb2x2ZTogKGRhdGE6IG9iamVjdCkgPT4gdm9pZCwgcmVqZWN0OiAoZGF0YTogb2JqZWN0KSA9PiB2b2lkKVxuICAgIHtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICB9XG59IiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgaWQ6IG51bWJlcjtcbiAgICBzYXZlU3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgc2F2ZVN0YXRlOiBib29sZWFuID0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCdjbG9zZScpO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc2F2ZVN0YXRlID0gc2F2ZVN0YXRlO1xuICAgIH1cbn0iLCJpbXBvcnQge0NvbXBvbmVudEF3YXJlSW50ZXJmYWNlIH0gZnJvbSBcIkBlbmhhdm8vY29yZVwiO1xuaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGRhdGE6IENvbXBvbmVudEF3YXJlSW50ZXJmYWNlO1xuICAgIHBhcmVudDogbnVtYmVyID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IENvbXBvbmVudEF3YXJlSW50ZXJmYWNlfGFueSwgcGFyZW50OiBudW1iZXIgPSBudWxsKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ2NyZWF0ZScpO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXVpZHY0IGZyb20gXCJ1dWlkL3Y0XCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gJ0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svRXZlbnREaXNwYXRjaGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRcbntcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgb3JpZ2luOiBhbnk7XG4gICAgdGFyZ2V0OiBhbnk7XG4gICAgaGlzdG9yeTogc3RyaW5nW10gPSBbXTtcbiAgICB1dWlkOiBzdHJpbmc7XG4gICAgdHRsOiBudW1iZXI7XG4gICAgZGlzcGF0Y2hlcjogRXZlbnREaXNwYXRjaGVyO1xuXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKVxuICAgIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZHY0KCk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZShkYXRhOiBvYmplY3QgPSB7fSlcbiAgICB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVzb2x2ZUV2ZW50KHRoaXMudXVpZCwgZGF0YSkpO1xuICAgIH1cblxuICAgIHJlamVjdChkYXRhOiBvYmplY3QgPSB7fSlcbiAgICB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVqZWN0RXZlbnQodGhpcy51dWlkLCBkYXRhKSk7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplKCk6IHN0cmluZ1xuICAgIHtcbiAgICAgICAgbGV0IGRpc3BhdGNoZXIgPSB0aGlzLmRpc3BhdGNoZXI7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IG51bGw7XG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlciA9IGRpc3BhdGNoZXI7XG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVqZWN0RXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGRhdGE6IG9iamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHV1aWQ6IHN0cmluZywgZGF0YTogb2JqZWN0KVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ3JlamVjdCcpO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFJlc29sdmVFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgZGF0YTogb2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IodXVpZDogc3RyaW5nLCBkYXRhOiBvYmplY3QpXG4gICAge1xuICAgICAgICBzdXBlcigncmVzb2x2ZScpO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbn1cbiIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbW92ZUV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBpZDogbnVtYmVyO1xuICAgIHNhdmVTdGF0ZTogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIHNhdmVTdGF0ZTogYm9vbGVhbiA9IHRydWUpXG4gICAge1xuICAgICAgICBzdXBlcigncmVtb3ZlJyk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5zYXZlU3RhdGUgPSBzYXZlU3RhdGU7XG4gICAgfVxufSIsImltcG9ydCBFdmVudCBmcm9tIFwiLi9FdmVudFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhdmVTdGF0ZUV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBzdXBlcignc2F2ZS1zdGF0ZScpO1xuICAgIH1cbn0iLCIvKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cbnZhciBieXRlVG9IZXggPSBbXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbn1cblxuZnVuY3Rpb24gYnl0ZXNUb1V1aWQoYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBvZmZzZXQgfHwgMDtcbiAgdmFyIGJ0aCA9IGJ5dGVUb0hleDtcbiAgLy8gam9pbiB1c2VkIHRvIGZpeCBtZW1vcnkgaXNzdWUgY2F1c2VkIGJ5IGNvbmNhdGVuYXRpb246IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMxNzUjYzRcbiAgcmV0dXJuIChbXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV1cbiAgXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgSW4gdGhlXG4vLyBicm93c2VyIHRoaXMgaXMgYSBsaXR0bGUgY29tcGxpY2F0ZWQgZHVlIHRvIHVua25vd24gcXVhbGl0eSBvZiBNYXRoLnJhbmRvbSgpXG4vLyBhbmQgaW5jb25zaXN0ZW50IHN1cHBvcnQgZm9yIHRoZSBgY3J5cHRvYCBBUEkuICBXZSBkbyB0aGUgYmVzdCB3ZSBjYW4gdmlhXG4vLyBmZWF0dXJlLWRldGVjdGlvblxuXG4vLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG9cbi8vIGltcGxlbWVudGF0aW9uLiBBbHNvLCBmaW5kIHRoZSBjb21wbGV0ZSBpbXBsZW1lbnRhdGlvbiBvZiBjcnlwdG8gb24gSUUxMS5cbnZhciBnZXRSYW5kb21WYWx1ZXMgPSAodHlwZW9mKGNyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mKG1zQ3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PSAnZnVuY3Rpb24nICYmIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKG1zQ3J5cHRvKSk7XG5cbmlmIChnZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG4gICAgcmV0dXJuIHJuZHM4O1xuICB9O1xufSBlbHNlIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgcm5kcyA9IG5ldyBBcnJheSgxNik7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtYXRoUk5HKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBybmRzW2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuICAgIH1cblxuICAgIHJldHVybiBybmRzO1xuICB9O1xufVxuIiwidmFyIHJuZyA9IHJlcXVpcmUoJy4vbGliL3JuZycpO1xudmFyIGJ5dGVzVG9VdWlkID0gcmVxdWlyZSgnLi9saWIvYnl0ZXNUb1V1aWQnKTtcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgdmFyIGkgPSBidWYgJiYgb2Zmc2V0IHx8IDA7XG5cbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PSAnc3RyaW5nJykge1xuICAgIGJ1ZiA9IG9wdGlvbnMgPT09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpO1xuXG4gIC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcbiAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICBybmRzWzhdID0gKHJuZHNbOF0gJiAweDNmKSB8IDB4ODA7XG5cbiAgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG4gIGlmIChidWYpIHtcbiAgICBmb3IgKHZhciBpaSA9IDA7IGlpIDwgMTY7ICsraWkpIHtcbiAgICAgIGJ1ZltpICsgaWldID0gcm5kc1tpaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZiB8fCBieXRlc1RvVXVpZChybmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2NDtcbiJdLCJzb3VyY2VSb290IjoiIn0=