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

  var EventDispatcher =
  /** @class */
  function () {
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
      }); // receive message events

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
      }, false); // send event to parent window

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
      }); // set empty function to prevent "Uncaught (in promise)" error

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

  var Subscriber =
  /** @class */
  function () {
    function Subscriber() {
      this.eventName = null;
    }

    return Subscriber;
  }();

  exports.Subscriber = Subscriber;

  var EventStore =
  /** @class */
  function () {
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
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
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

  var CloseEvent =
  /** @class */
  function (_super) {
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
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
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

  var CreateEvent =
  /** @class */
  function (_super) {
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
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
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

  var Event =
  /** @class */
  function () {
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

  var RejectEvent =
  /** @class */
  function (_super) {
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

  var ResolveEvent =
  /** @class */
  function (_super) {
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
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
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

  var RemoveEvent =
  /** @class */
  function (_super) {
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
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
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

  var SaveStateEvent =
  /** @class */
  function (_super) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Blbmhhdm8vYXBwL3ZpZXctc3RhY2svZXZlbnQvQ2xvc2VFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9DcmVhdGVFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9FdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9SZW1vdmVFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9TYXZlU3RhdGVFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3V1aWQvbGliL3JuZy1icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFBQTtBQUFBO0FBT0k7QUFBQTs7QUFMUSx5QkFBNEIsRUFBNUI7QUFDQSxnQ0FBbUMsRUFBbkM7QUFDQSwyQkFBOEIsRUFBOUI7QUFDQSxvQkFBdUIsRUFBdkI7QUFJSixXQUFLLFVBQUwsQ0FBZ0IsVUFBQyxLQUFELEVBQWE7QUFDekIsWUFBRyxLQUFLLENBQUMsTUFBTixJQUFnQixJQUFuQixFQUF5QjtBQUNyQixlQUFLLENBQUMsTUFBTixHQUFlLEtBQUksQ0FBQyxTQUFMLEVBQWY7QUFDSDs7QUFDRCxhQUFLLENBQUMsT0FBTixDQUFjLElBQWQsQ0FBbUIs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUE0Qzs7QUFFeEM7YUFFSSxrQkFBTSxZQUFOLEtBQW1CLEk7QUFDdEI7O0FBQ0w7QUFBQyxHQU5ELENBQTRDLGtCQUE1Qzs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQ0EsVUFBVSxtQkFBTyxDQUFDLHlEQUFXO0FBQzdCLGtCQUFrQixtQkFBTyxDQUFDLGlFQUFtQjs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmVuZG9yc35lbmhhdm8vYXBwL3ZpZXd+bWFpbn52aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50LCB7UmVzb2x2ZUV2ZW50LCBSZWplY3RFdmVudH0gZnJvbSAnQGVuaGF2by9hcHAvdmlldy1zdGFjay9ldmVudC9FdmVudCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBVUkkgZnJvbSAndXJpanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudERpc3BhdGNoZXJcbntcbiAgICBwcml2YXRlIHN1YnNjcmliZXJzOiBTdWJzY3JpYmVyW10gPSBbXTtcbiAgICBwcml2YXRlIGRpc3BhdGNoU3Vic2NyaWJlcjogU3Vic2NyaWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBhbGxTdWJzY3JpYmVyOiBTdWJzY3JpYmVyW10gPSBbXTtcbiAgICBwcml2YXRlIGV2ZW50czogRXZlbnRTdG9yZVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLm9uRGlzcGF0Y2goKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQub3JpZ2luID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBldmVudC5vcmlnaW4gPSB0aGlzLmdldFZpZXdJZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQuaGlzdG9yeS5wdXNoKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIGlmKGV2ZW50LnR0bCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQudHRsID0gdGhpcy5pc1Jvb3RWaWV3KCkgPyAyIDogMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVjZWl2ZSBtZXNzYWdlIGV2ZW50c1xuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKCdedmlld19zdGFja19ldmVudCcpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBpZih0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJyAmJiByZWdleC50ZXN0KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEuc3Vic3RyaW5nKDE3KTtcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnREYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3RXZlbnQgPSBuZXcgRXZlbnQoJycpO1xuICAgICAgICAgICAgICAgIF8uZXh0ZW5kKG5ld0V2ZW50LCBldmVudERhdGEpO1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc0RlYnVnKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgncmVjZWl2ZSBldmVudCAoJysgbmV3RXZlbnQubmFtZSsnKSBvbiAnICsgdGhpcy5nZXRWaWV3SWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKG5ld0V2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2gobmV3RXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgLy8gc2VuZCBldmVudCB0byBwYXJlbnQgd2luZG93XG4gICAgICAgIGlmKHdpbmRvdy5wYXJlbnQgJiYgIXRoaXMuaXNSb290VmlldygpKSB7XG4gICAgICAgICAgICB0aGlzLmFsbCgoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnQub3JpZ2luID09IHRoaXMuZ2V0Vmlld0lkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlcmlhbGl6ZUV2ZW50ID0gJ3ZpZXdfc3RhY2tfZXZlbnR8JyArIGV2ZW50LnNlcmlhbGl6ZSgpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKHNlcmlhbGl6ZUV2ZW50LCAnKicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbigncmVqZWN0JywgKGV2ZW50OiBSZWplY3RFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMuZm9yRWFjaCgoZXZlbnRTdG9yZTogRXZlbnRTdG9yZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50U3RvcmUuZXZlbnQudXVpZCA9PSBldmVudC51dWlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50U3RvcmUucmVqZWN0KGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KGV2ZW50U3RvcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uKCdyZXNvbHZlJywgKGV2ZW50OiBSZXNvbHZlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLmZvckVhY2goKGV2ZW50U3RvcmU6IEV2ZW50U3RvcmUpID0+IHtcbiAgICAgICAgICAgICAgICBpZihldmVudFN0b3JlLmV2ZW50LnV1aWQgPT0gZXZlbnQudXVpZCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudFN0b3JlLnJlc29sdmUoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoZXZlbnRTdG9yZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNSb290VmlldygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWaWV3SWQoKSA9PSAwO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIGdldFZpZXdJZCgpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgbGV0IGlkID0gcGFyc2VJbnQodXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJ2aWV3X2lkXCIpKTtcbiAgICAgICAgaWYoaWQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gaWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUV2ZW50KGV2ZW50U3RvcmU6IEV2ZW50U3RvcmUpXG4gICAge1xuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5ldmVudHMpIHtcbiAgICAgICAgICAgIGlmKGV2ZW50U3RvcmUuZXZlbnQudXVpZCA9PSB0aGlzLmV2ZW50c1tpXS5ldmVudC51dWlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuc3BsaWNlKHBhcnNlSW50KGkpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcGF0Y2goZXZlbnQ6IEV2ZW50KTogUHJvbWlzZTxvYmplY3Q+XG4gICAge1xuICAgICAgICBldmVudC5kaXNwYXRjaGVyID0gdGhpcztcblxuICAgICAgICB0aGlzLmRpc3BhdGNoU3Vic2NyaWJlci5mb3JFYWNoKChzdWJzY3JpYmVyOlN1YnNjcmliZXIpID0+IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZihldmVudC50dGwgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnR0bC0tO1xuXG4gICAgICAgIGlmKHRoaXMuaXNEZWJ1ZygpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdkaXNwYXRjaCBldmVudCAoJysgZXZlbnQubmFtZSsnKSBvbiAnICsgdGhpcy5nZXRWaWV3SWQoKSk7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihldmVudCk7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQub3JpZ2luID09IHRoaXMuZ2V0Vmlld0lkKCkpIHtcbiAgICAgICAgICAgICAgICBpZihldmVudC5uYW1lICE9ICdyZWplY3QnICYmIGV2ZW50Lm5hbWUgIT0gJ3Jlc29sdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1c2gobmV3IEV2ZW50U3RvcmUoZXZlbnQsIHJlc29sdmUsIHJlamVjdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKChzdWJzY3JpYmVyOlN1YnNjcmliZXIpID0+IHtcbiAgICAgICAgICAgICAgICBpZihzdWJzY3JpYmVyLmV2ZW50TmFtZSA9PSBldmVudC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmFsbFN1YnNjcmliZXIuZm9yRWFjaCgoc3Vic2NyaWJlcjpTdWJzY3JpYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jYWxsYmFjayhldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHNldCBlbXB0eSBmdW5jdGlvbiB0byBwcmV2ZW50IFwiVW5jYXVnaHQgKGluIHByb21pc2UpXCIgZXJyb3JcbiAgICAgICAgcHJvbWlzZS5jYXRjaCggKGRhdGE6b2JqZWN0KSA9PiB7fSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChldmVudDogRXZlbnQpID0+IHZvaWQpOiBTdWJzY3JpYmVyXG4gICAge1xuICAgICAgICBsZXQgc3Vic2NyaWJlciA9IG5ldyBTdWJzY3JpYmVyKCk7XG4gICAgICAgIHN1YnNjcmliZXIuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICBzdWJzY3JpYmVyLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlcnMucHVzaChzdWJzY3JpYmVyKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbChjYWxsYmFjazogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCk6IFN1YnNjcmliZXJcbiAgICB7XG4gICAgICAgIGxldCBzdWJzY3JpYmVyID0gbmV3IFN1YnNjcmliZXIoKTtcbiAgICAgICAgc3Vic2NyaWJlci5ldmVudE5hbWUgPSBudWxsO1xuICAgICAgICBzdWJzY3JpYmVyLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuYWxsU3Vic2NyaWJlci5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EaXNwYXRjaChjYWxsYmFjazogKGV2ZW50OiBFdmVudCkgPT4gdm9pZCk6IFN1YnNjcmliZXJcbiAgICB7XG4gICAgICAgIGxldCBzdWJzY3JpYmVyID0gbmV3IFN1YnNjcmliZXIoKTtcbiAgICAgICAgc3Vic2NyaWJlci5ldmVudE5hbWUgPSBudWxsO1xuICAgICAgICBzdWJzY3JpYmVyLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hTdWJzY3JpYmVyLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUoc3Vic2NyaWJlcjogU3Vic2NyaWJlcilcbiAgICB7XG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUFycmF5KHN1YnNjcmliZXIsIHRoaXMuc3Vic2NyaWJlcnMpO1xuICAgICAgICB0aGlzLnJlbW92ZUZyb21BcnJheShzdWJzY3JpYmVyLCB0aGlzLmRpc3BhdGNoU3Vic2NyaWJlcik7XG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUFycmF5KHN1YnNjcmliZXIsIHRoaXMuYWxsU3Vic2NyaWJlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW1vdmVGcm9tQXJyYXkoc3Vic2NyaWJlcjogU3Vic2NyaWJlciwgc3Vic2NyaWJlcnM6IFN1YnNjcmliZXJbXSlcbiAgICB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gc3Vic2NyaWJlcnMuaW5kZXhPZihzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBpc0RlYnVnKClcbiAgICB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdWJzY3JpYmVyXG57XG4gICAgZXZlbnROYW1lOiBzdHJpbmcgPSBudWxsO1xuICAgIGNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkO1xufVxuXG5jbGFzcyBFdmVudFN0b3JlXG57XG4gICAgZXZlbnQ6IEV2ZW50O1xuICAgIHJlc29sdmU6IChkYXRhOiBvYmplY3QpID0+IHZvaWQ7XG4gICAgcmVqZWN0OiAoZGF0YTogb2JqZWN0KSA9PiB2b2lkO1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnQ6IEV2ZW50LCByZXNvbHZlOiAoZGF0YTogb2JqZWN0KSA9PiB2b2lkLCByZWplY3Q6IChkYXRhOiBvYmplY3QpID0+IHZvaWQpXG4gICAge1xuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xuICAgIH1cbn0iLCJpbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9zZUV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBpZDogbnVtYmVyO1xuICAgIHNhdmVTdGF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBzYXZlU3RhdGU6IGJvb2xlYW4gPSB0cnVlKVxuICAgIHtcbiAgICAgICAgc3VwZXIoJ2Nsb3NlJyk7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5zYXZlU3RhdGUgPSBzYXZlU3RhdGU7XG4gICAgfVxufSIsImltcG9ydCB7Q29tcG9uZW50QXdhcmVJbnRlcmZhY2UgfSBmcm9tIFwiQGVuaGF2by9jb3JlXCI7XG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgZGF0YTogQ29tcG9uZW50QXdhcmVJbnRlcmZhY2U7XG4gICAgcGFyZW50OiBudW1iZXIgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogQ29tcG9uZW50QXdhcmVJbnRlcmZhY2V8YW55LCBwYXJlbnQ6IG51bWJlciA9IG51bGwpXG4gICAge1xuICAgICAgICBzdXBlcignY3JlYXRlJyk7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dWlkdjQgZnJvbSBcInV1aWQvdjRcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSAnQGVuaGF2by9hcHAvdmlldy1zdGFjay9FdmVudERpc3BhdGNoZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudFxue1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBvcmlnaW46IGFueTtcbiAgICB0YXJnZXQ6IGFueTtcbiAgICBoaXN0b3J5OiBzdHJpbmdbXSA9IFtdO1xuICAgIHV1aWQ6IHN0cmluZztcbiAgICB0dGw6IG51bWJlcjtcbiAgICBkaXNwYXRjaGVyOiBFdmVudERpc3BhdGNoZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpXG4gICAge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkdjQoKTtcbiAgICB9XG5cbiAgICByZXNvbHZlKGRhdGE6IG9iamVjdCA9IHt9KVxuICAgIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBSZXNvbHZlRXZlbnQodGhpcy51dWlkLCBkYXRhKSk7XG4gICAgfVxuXG4gICAgcmVqZWN0KGRhdGE6IG9iamVjdCA9IHt9KVxuICAgIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBSZWplY3RFdmVudCh0aGlzLnV1aWQsIGRhdGEpKTtcbiAgICB9XG5cbiAgICBzZXJpYWxpemUoKTogc3RyaW5nXG4gICAge1xuICAgICAgICBsZXQgZGlzcGF0Y2hlciA9IHRoaXMuZGlzcGF0Y2hlcjtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gbnVsbDtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh0aGlzKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyID0gZGlzcGF0Y2hlcjtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWplY3RFdmVudCBleHRlbmRzIEV2ZW50XG57XG4gICAgZGF0YTogb2JqZWN0O1xuXG4gICAgY29uc3RydWN0b3IodXVpZDogc3RyaW5nLCBkYXRhOiBvYmplY3QpXG4gICAge1xuICAgICAgICBzdXBlcigncmVqZWN0Jyk7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUmVzb2x2ZUV2ZW50IGV4dGVuZHMgRXZlbnRcbntcbiAgICBkYXRhOiBvYmplY3Q7XG5cbiAgICBjb25zdHJ1Y3Rvcih1dWlkOiBzdHJpbmcsIGRhdGE6IG9iamVjdClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdyZXNvbHZlJyk7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxufVxuIiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtb3ZlRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGlkOiBudW1iZXI7XG4gICAgc2F2ZVN0YXRlOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgc2F2ZVN0YXRlOiBib29sZWFuID0gdHJ1ZSlcbiAgICB7XG4gICAgICAgIHN1cGVyKCdyZW1vdmUnKTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnNhdmVTdGF0ZSA9IHNhdmVTdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2F2ZVN0YXRlRXZlbnQgZXh0ZW5kcyBFdmVudFxue1xuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHN1cGVyKCdzYXZlLXN0YXRlJyk7XG4gICAgfVxufSIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcbiAgICBidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuICAgIGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sXG4gICAgYnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXVxuICBdKS5qb2luKCcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBieXRlc1RvVXVpZDtcbiIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG5cbi8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0b1xuLy8gaW1wbGVtZW50YXRpb24uIEFsc28sIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byBvbiBJRTExLlxudmFyIGdldFJhbmRvbVZhbHVlcyA9ICh0eXBlb2YoY3J5cHRvKSAhPSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YobXNDcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pKTtcblxuaWYgKGdldFJhbmRvbVZhbHVlcykge1xuICAvLyBXSEFUV0cgY3J5cHRvIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgdmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59IGVsc2Uge1xuICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gIC8vXG4gIC8vIElmIGFsbCBlbHNlIGZhaWxzLCB1c2UgTWF0aC5yYW5kb20oKS4gIEl0J3MgZmFzdCwgYnV0IGlzIG9mIHVuc3BlY2lmaWVkXG4gIC8vIHF1YWxpdHkuXG4gIHZhciBybmRzID0gbmV3IEFycmF5KDE2KTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1hdGhSTkcoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==