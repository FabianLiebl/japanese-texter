(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~view"],{

/***/ "./node_modules/@enhavo/app/view/DataLoader.ts":
/*!*****************************************************!*\
  !*** ./node_modules/@enhavo/app/view/DataLoader.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var DataLoader =
  /** @class */
  function () {
    function DataLoader(id, parameter, container) {
      this.loaded = false;
      this.container = false;
      this.id = id;
      this.parameter = parameter;
      this.container = container;
      this.init();
    }

    DataLoader.prototype.init = function () {
      if (this.loaded) {
        return;
      }

      var element = document.getElementById(this.id);

      if (element) {
        var data = JSON.parse(document.getElementById(this.id).innerText);
        this.container.setParameter(this.parameter, data);
      }
    };

    return DataLoader;
  }();

  exports["default"] = DataLoader;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/core/Router.ts":
/*!*********************************************!*\
  !*** ./node_modules/@enhavo/core/Router.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __extends = this && this.__extends || function () {
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RoutingData = exports.Context = void 0;
  /**
   * Class Router
   */

  var Router =
  /** @class */
  function () {
    /**
     * @constructor
     * @param {Router.Context=} context
     * @param {Object.<string, Router.Route>=} routes
     */
    function Router(context, routes) {
      if (context) {
        this.context_ = context;
      } else {
        this.context_ = new Context();
      }

      this.setRoutes(routes || {});
    }
    /**
     * Sets data for the current instance
     * @param {Object} data
     */


    Router.prototype.setRoutingData = function (data) {
      this.setBaseUrl(data['base_url']);
      this.setRoutes(data['routes']);

      if ('prefix' in data) {
        this.setPrefix(data['prefix']);
      }

      if ('port' in data) {
        this.setPort(data['port']);
      }

      this.setHost(data['host']);
      this.setScheme(data['scheme']);
    };
    /**
     * @param {Object.<string, Router.Route>} routes
     */


    Router.prototype.setRoutes = function (routes) {
      this.routes_ = Object.freeze(routes);
    };
    /**
     * @return {Object.<string, Router.Route>} routes
     */


    Router.prototype.getRoutes = function () {
      return this.routes_;
    };
    /**
     * @param {string} baseUrl
     */


    Router.prototype.setBaseUrl = function (baseUrl) {
      this.context_.base_url = baseUrl;
    };
    /**
     * @return {string}
     */


    Router.prototype.getBaseUrl = function () {
      return this.context_.base_url;
    };
    /**
     * @param {string} prefix
     */


    Router.prototype.setPrefix = function (prefix) {
      this.context_.prefix = prefix;
    };
    /**
     * @param {string} scheme
     */


    Router.prototype.setScheme = function (scheme) {
      this.context_.scheme = scheme;
    };
    /**
     * @return {string}
     */


    Router.prototype.getScheme = function () {
      return this.context_.scheme;
    };
    /**
     * @param {string} host
     */


    Router.prototype.setHost = function (host) {
      this.context_.host = host;
    };
    /**
     * @return {string}
     */


    Router.prototype.getHost = function () {
      return this.context_.host;
    };
    /**
     * @param {string} port
    */


    Router.prototype.setPort = function (port) {
      this.context_.port = port;
    };
    /**
     * @return {string}
     */


    Router.prototype.getPort = function () {
      return this.context_.port;
    };

    ;
    /**
     * Builds query string params added to a URL.
     * Port of jQuery's $.param() function, so credit is due there.
     *
     * @param {string} prefix
     * @param {Array|Object|string} params
     * @param {Function} add
     */

    Router.prototype.buildQueryParams = function (prefix, params, add) {
      var _this = this;

      var name;
      var rbracket = new RegExp(/\[\]$/);

      if (params instanceof Array) {
        params.forEach(function (val, i) {
          if (rbracket.test(prefix)) {
            add(prefix, val);
          } else {
            _this.buildQueryParams(prefix + '[' + (_typeof(val) === 'object' ? i : '') + ']', val, add);
          }
        });
      } else if (_typeof(params) === 'object') {
        for (name in params) {
          this.buildQueryParams(prefix + '[' + name + ']', params[name], add);
        }
      } else {
        add(prefix, params);
      }
    };
    /**
     * Returns a raw route object.
     *
     * @param {string} name
     * @return {Router.Route}
     */


    Router.prototype.getRoute = function (name) {
      var prefixedName = this.context_.prefix + name;

      if (!(prefixedName in this.routes_)) {
        // Check first for default route before failing
        if (!(name in this.routes_)) {
          throw new Error('The route "' + name + '" does not exist.');
        }
      } else {
        name = prefixedName;
      }

      return this.routes_[name];
    };
    /**
     * Generates the URL for a route.
     *
     * @param {string} name
     * @param {Object.<string, string>} opt_params
     * @param {boolean} absolute
     * @return {string}
     */


    Router.prototype.generate = function (name, opt_params, absolute) {
      var route = this.getRoute(name),
          params = opt_params || {},
          unusedParams = Object.assign({}, params),
          url = '',
          optional = true,
          host = '',
          port = typeof this.getPort() == "undefined" || this.getPort() === null ? '' : this.getPort();
      route.tokens.forEach(function (token) {
        if ('text' === token[0]) {
          url = token[1] + url;
          optional = false;
          return;
        }

        if ('variable' === token[0]) {
          var hasDefault = route.defaults && token[3] in route.defaults;

          if (false === optional || !hasDefault || token[3] in params && params[token[3]] != route.defaults[token[3]]) {
            var value = void 0;

            if (token[3] in params) {
              value = params[token[3]];
              delete unusedParams[token[3]];
            } else if (hasDefault) {
              value = route.defaults[token[3]];
            } else if (optional) {
              return;
            } else {
              throw new Error('The route "' + name + '" requires the parameter "' + token[3] + '".');
            }

            var empty = true === value || false === value || '' === value;

            if (!empty || !optional) {
              var encodedValue = encodeURIComponent(value).replace(/%2F/g, '/');

              if ('null' === encodedValue && null === value) {
                encodedValue = '';
              }

              url = token[1] + encodedValue + url;
            }

            optional = false;
          } else if (hasDefault && token[3] in unusedParams) {
            delete unusedParams[token[3]];
          }

          return;
        }

        throw new Error('The token type "' + token[0] + '" is not supported.');
      });

      if (url === '') {
        url = '/';
      }

      route.hosttokens.forEach(function (token) {
        var value;

        if ('text' === token[0]) {
          host = token[1] + host;
          return;
        }

        if ('variable' === token[0]) {
          if (token[3] in params) {
            value = params[token[3]];
            delete unusedParams[token[3]];
          } else if (route.defaults && token[3] in route.defaults) {
            value = route.defaults[token[3]];
          }

          host = token[1] + value + host;
        }
      }); // Foo-bar!

      url = this.context_.base_url + url;

      if (route.requirements && "_scheme" in route.requirements && this.getScheme() != route.requirements["_scheme"]) {
        url = route.requirements["_scheme"] + "://" + (host || this.getHost()) + url;
      } else if ("undefined" !== typeof route.schemes && "undefined" !== typeof route.schemes[0] && this.getScheme() !== route.schemes[0]) {
        url = route.schemes[0] + "://" + (host || this.getHost()) + url;
      } else if (host && this.getHost() !== host + ('' === port ? '' : ':' + port)) {
        url = this.getScheme() + "://" + host + ('' === port ? '' : ':' + port) + url;
      } else if (absolute === true) {
        url = this.getScheme() + "://" + this.getHost() + url;
      }

      if (Object.keys(unusedParams).length > 0) {
        var prefix = void 0;
        var queryParams_1 = [];

        var add = function add(key, value) {
          // if value is a function then call it and assign it's return value as value
          value = typeof value === 'function' ? value() : value; // change null to empty string

          value = value === null ? '' : value;
          queryParams_1.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        };

        for (prefix in unusedParams) {
          this.buildQueryParams(prefix, unusedParams[prefix], add);
        }

        url = url + '?' + queryParams_1.join('&').replace(/%20/g, '+');
      }

      return url;
    };

    return Router;
  }();

  exports["default"] = Router;

  var Context =
  /** @class */
  function () {
    function Context() {
      this.base_url = '';
      this.prefix = '';
      this.host = '';
      this.scheme = '';
      this.port = '';
    }

    return Context;
  }();

  exports.Context = Context;

  var RoutingData =
  /** @class */
  function (_super) {
    __extends(RoutingData, _super);

    function RoutingData() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    return RoutingData;
  }(Context);

  exports.RoutingData = RoutingData;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/@enhavo/core/Translator.ts":
/*!*************************************************!*\
  !*** ./node_modules/@enhavo/core/Translator.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var Translator =
  /** @class */
  function () {
    function Translator() {}

    Translator.prototype.setData = function (data) {
      this.data = data;
    };

    Translator.prototype.trans = function (value, parameters) {
      if (this.data[value]) {
        return this.data[value];
      }

      return value;
    };

    return Translator;
  }();

  exports["default"] = Translator;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVuaGF2by9hcHAvdmlldy9EYXRhTG9hZGVyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2NvcmUvUm91dGVyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW5oYXZvL2NvcmUvVHJhbnNsYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBT0ksd0JBQVksRUFBWixFQUF3QixTQUF4QixFQUEyQyxTQUEzQyxFQUErRDtBQUh2RCxvQkFBa0IsS0FBbEI7QUFDQSx1QkFBdUIsS0FBdkI7QUFJSixXQUFLLEVBQUwsR0FBVSxFQUFWO0FBQ0EsV0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsV0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsV0FBSyxJQUFMO0FBQ0g7O0FBRU8sZ0NBQVI7QUFFSSxVQUFHLEtBQUssTUFBUixFQUFnQjtBQUNaO0FBQ0g7O0FBQ0QsVUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBSyxFQUE3QixDQUFkOztBQUNBLFVBQUcsT0FBSCxFQUFZO0FBQ1IsWUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxRQUFRLENBQUMsY0FBVCxDQUF3QixLQUFLLEVBQTdCLEVBQWlDLFNBQTVDLENBQVg7QUFDQSxhQUFLLFNBQUwsQ0FBZSxZQUFmLENBQTRCLEtBQUssU0FBakMsRUFBNEMsSUFBNUM7QUFDSDtBQUNKLEtBVk87O0FBV1o7QUFBQyxHQTFCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7O0FBRUE7O0FBRUc7O0FBQ0g7QUFBQTtBQUFBO0FBS0k7Ozs7QUFJRztBQUNILG9CQUFZLE9BQVosRUFBOEIsTUFBOUIsRUFBK0M7QUFFM0MsVUFBRyxPQUFILEVBQVk7QUFDUixhQUFLLFFBQUwsR0FBZ0IsT0FB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O0FBRUQsYUFBTyxHQUFQO0FBQ0gsS0FsSEQ7O0FBb0hKO0FBQUMsR0FsU0Q7Ozs7QUFnVUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxzQkFBbUIsRUFBbkI7QUFDQSxvQkFBaUIsRUFBakI7QUFDQSxrQkFBZSxFQUFmO0FBQ0Esb0JBQWlCLEVBQWpCO0FBQ0Esa0JBQWUsRUFBZjtBQUNIOztBQUFEO0FBQUMsR0FORDs7QUFBYTs7QUFRYjtBQUFBO0FBQUE7QUFBaUM7O0FBQWpDOztBQUVDOztBQUFEO0FBQUMsR0FGRCxDQUFpQyxPQUFqQzs7QUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1VWI7QUFBQTtBQUFBO0FBQUEsMkJBZ0JDOztBQVpVLG1DQUFQLFVBQWUsSUFBZixFQUEyQjtBQUV2QixXQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0gsS0FITTs7QUFLQSxpQ0FBUCxVQUFhLEtBQWIsRUFBNEIsVUFBNUIsRUFBK0M7QUFFM0MsVUFBRyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQUgsRUFBcUI7QUFDakIsZUFBTyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQVA7QUFDSDs7QUFDRCxhQUFPLEtBQVA7QUFDSCxLQU5NOztBQU9YO0FBQUMsR0FoQkQiLCJmaWxlIjoidmVuZG9yc352aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCJAZW5oYXZvL2RlcGVuZGVuY3ktaW5qZWN0aW9uL2NvbnRhaW5lci9Db250YWluZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YUxvYWRlclxue1xuICAgIHByaXZhdGUgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcmFtZXRlcjogc3RyaW5nO1xuICAgIHByaXZhdGUgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjb250YWluZXI6IENvbnRhaW5lciA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgcGFyYW1ldGVyOiBzdHJpbmcsIGNvbnRhaW5lcjogQ29udGFpbmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnBhcmFtZXRlciA9IHBhcmFtZXRlcjtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdCgpXG4gICAge1xuICAgICAgICBpZih0aGlzLmxvYWRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG4gICAgICAgIGlmKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKS5pbm5lclRleHQpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc2V0UGFyYW1ldGVyKHRoaXMucGFyYW1ldGVyLCBkYXRhKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENsYXNzIFJvdXRlclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJcbntcbiAgICBwcml2YXRlIGNvbnRleHRfOiBDb250ZXh0O1xuICAgIHByaXZhdGUgcm91dGVzXzogUm91dGVzTWFwO1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtSb3V0ZXIuQ29udGV4dD19IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBSb3V0ZXIuUm91dGU+PX0gcm91dGVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udGV4dD86Q29udGV4dCwgcm91dGVzPzpSb3V0ZXNNYXApXG4gICAge1xuICAgICAgICBpZihjb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRfID0gY29udGV4dFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb250ZXh0XyA9IG5ldyBDb250ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Um91dGVzKHJvdXRlcyB8fCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBkYXRhIGZvciB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgc2V0Um91dGluZ0RhdGEoZGF0YTogUm91dGluZ0RhdGEpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXRCYXNlVXJsKGRhdGFbJ2Jhc2VfdXJsJ10pO1xuICAgICAgICB0aGlzLnNldFJvdXRlcyhkYXRhWydyb3V0ZXMnXSk7XG5cbiAgICAgICAgaWYgKCdwcmVmaXgnIGluIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJlZml4KGRhdGFbJ3ByZWZpeCddKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3BvcnQnIGluIGRhdGEpIHtcbiAgICAgICAgICB0aGlzLnNldFBvcnQoZGF0YVsncG9ydCddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0SG9zdChkYXRhWydob3N0J10pO1xuICAgICAgICB0aGlzLnNldFNjaGVtZShkYXRhWydzY2hlbWUnXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgUm91dGVyLlJvdXRlPn0gcm91dGVzXG4gICAgICovXG4gICAgc2V0Um91dGVzKHJvdXRlczogUm91dGVzTWFwKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVzXyA9IE9iamVjdC5mcmVlemUocm91dGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtPYmplY3QuPHN0cmluZywgUm91dGVyLlJvdXRlPn0gcm91dGVzXG4gICAgICovXG4gICAgZ2V0Um91dGVzKCk6IFJvdXRlc01hcCB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRlc187XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVcmxcbiAgICAgKi9cbiAgICBzZXRCYXNlVXJsKGJhc2VVcmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHRfLmJhc2VfdXJsID0gYmFzZVVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0QmFzZVVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5iYXNlX3VybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gICAgICovXG4gICAgc2V0UHJlZml4KHByZWZpeDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGV4dF8ucHJlZml4ID0gcHJlZml4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzY2hlbWVcbiAgICAgKi9cbiAgICBzZXRTY2hlbWUoc2NoZW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Xy5zY2hlbWUgPSBzY2hlbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFNjaGVtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5zY2hlbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGhvc3RcbiAgICAgKi9cbiAgICBzZXRIb3N0KGhvc3Q6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHRfLmhvc3QgPSBob3N0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRIb3N0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHRfLmhvc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnRcbiAgICAqL1xuICAgIHNldFBvcnQocG9ydDogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aGlzLmNvbnRleHRfLnBvcnQgPSBwb3J0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRQb3J0KCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5jb250ZXh0Xy5wb3J0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZHMgcXVlcnkgc3RyaW5nIHBhcmFtcyBhZGRlZCB0byBhIFVSTC5cbiAgICAgKiBQb3J0IG9mIGpRdWVyeSdzICQucGFyYW0oKSBmdW5jdGlvbiwgc28gY3JlZGl0IGlzIGR1ZSB0aGVyZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IHBhcmFtc1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGFkZFxuICAgICAqL1xuICAgIGJ1aWxkUXVlcnlQYXJhbXMocHJlZml4OiBzdHJpbmcsIHBhcmFtczogYW55LCBhZGQ6IChwcmVmaXg6c3RyaW5nLCBwYXJhbXM6YW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIGxldCBuYW1lO1xuICAgICAgICBsZXQgcmJyYWNrZXQgPSBuZXcgUmVnRXhwKC9cXFtcXF0kLyk7XG5cbiAgICAgICAgaWYgKHBhcmFtcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBwYXJhbXMuZm9yRWFjaCgodmFsLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJicmFja2V0LnRlc3QocHJlZml4KSkge1xuICAgICAgICAgICAgICAgICAgICBhZGQocHJlZml4LCB2YWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRRdWVyeVBhcmFtcyhwcmVmaXggKyAnWycgKyAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgPyBpIDogJycpICsgJ10nLCB2YWwsIGFkZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4ICsgJ1snICsgbmFtZSArICddJywgcGFyYW1zW25hbWVdLCBhZGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkKHByZWZpeCwgcGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSByYXcgcm91dGUgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJuIHtSb3V0ZXIuUm91dGV9XG4gICAgICovXG4gICAgZ2V0Um91dGUobmFtZTogc3RyaW5nKTogUm91dGUge1xuICAgICAgICBsZXQgcHJlZml4ZWROYW1lID0gdGhpcy5jb250ZXh0Xy5wcmVmaXggKyBuYW1lO1xuXG4gICAgICAgIGlmICghKHByZWZpeGVkTmFtZSBpbiB0aGlzLnJvdXRlc18pKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBmaXJzdCBmb3IgZGVmYXVsdCByb3V0ZSBiZWZvcmUgZmFpbGluZ1xuICAgICAgICAgICAgaWYgKCEobmFtZSBpbiB0aGlzLnJvdXRlc18pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcm91dGUgXCInICsgbmFtZSArICdcIiBkb2VzIG5vdCBleGlzdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5hbWUgPSBwcmVmaXhlZE5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXNfW25hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyB0aGUgVVJMIGZvciBhIHJvdXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBzdHJpbmc+fSBvcHRfcGFyYW1zXG4gICAgICogQHBhcmFtIHtib29sZWFufSBhYnNvbHV0ZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZW5lcmF0ZShuYW1lOnN0cmluZywgb3B0X3BhcmFtcz86IFJvdXRlUGFyYW1zLCBhYnNvbHV0ZT86IGJvb2xlYW4pOiBzdHJpbmdcbiAgICB7XG4gICAgICAgIGxldCByb3V0ZSA9ICh0aGlzLmdldFJvdXRlKG5hbWUpKSxcbiAgICAgICAgICAgIHBhcmFtcyA9IG9wdF9wYXJhbXMgfHwge30sXG4gICAgICAgICAgICB1bnVzZWRQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMpLFxuICAgICAgICAgICAgdXJsID0gJycsXG4gICAgICAgICAgICBvcHRpb25hbCA9IHRydWUsXG4gICAgICAgICAgICBob3N0ID0gJycsXG4gICAgICAgICAgICBwb3J0ID0gKHR5cGVvZiB0aGlzLmdldFBvcnQoKSA9PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMuZ2V0UG9ydCgpID09PSBudWxsKSA/ICcnIDogdGhpcy5nZXRQb3J0KCk7XG5cbiAgICAgICAgcm91dGUudG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgICAgICAgICBpZiAoJ3RleHQnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgIHVybCA9IHRva2VuWzFdICsgdXJsO1xuICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgIGxldCBoYXNEZWZhdWx0ID0gcm91dGUuZGVmYXVsdHMgJiYgKHRva2VuWzNdIGluIHJvdXRlLmRlZmF1bHRzKTtcbiAgICAgICAgICAgICAgICBpZiAoZmFsc2UgPT09IG9wdGlvbmFsIHx8ICFoYXNEZWZhdWx0IHx8ICgodG9rZW5bM10gaW4gcGFyYW1zKSAmJiBwYXJhbXNbdG9rZW5bM11dICE9IHJvdXRlLmRlZmF1bHRzW3Rva2VuWzNdXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlblszXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW1zW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc0RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcm91dGUuZGVmYXVsdHNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSByb3V0ZSBcIicgKyBuYW1lICsgJ1wiIHJlcXVpcmVzIHRoZSBwYXJhbWV0ZXIgXCInICsgdG9rZW5bM10gKyAnXCIuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgZW1wdHkgPSB0cnVlID09PSB2YWx1ZSB8fCBmYWxzZSA9PT0gdmFsdWUgfHwgJycgPT09IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZW1wdHkgfHwgIW9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lMkYvZywgJy8nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdudWxsJyA9PT0gZW5jb2RlZFZhbHVlICYmIG51bGwgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHRva2VuWzFdICsgZW5jb2RlZFZhbHVlICsgdXJsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc0RlZmF1bHQgJiYgKHRva2VuWzNdIGluIHVudXNlZFBhcmFtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVudXNlZFBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0b2tlbiB0eXBlIFwiJyArIHRva2VuWzBdICsgJ1wiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh1cmwgPT09ICcnKSB7XG4gICAgICAgICAgICB1cmwgPSAnLyc7XG4gICAgICAgIH1cblxuICAgICAgICByb3V0ZS5ob3N0dG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgICAgIGlmICgndGV4dCcgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgaG9zdCA9IHRva2VuWzFdICsgaG9zdDtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCd2YXJpYWJsZScgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuWzNdIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtc1t0b2tlblszXV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1bnVzZWRQYXJhbXNbdG9rZW5bM11dO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm91dGUuZGVmYXVsdHMgJiYgKHRva2VuWzNdIGluIHJvdXRlLmRlZmF1bHRzKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHJvdXRlLmRlZmF1bHRzW3Rva2VuWzNdXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBob3N0ID0gdG9rZW5bMV0gKyB2YWx1ZSArIGhvc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGb28tYmFyIVxuICAgICAgICB1cmwgPSB0aGlzLmNvbnRleHRfLmJhc2VfdXJsICsgdXJsO1xuICAgICAgICBpZiAocm91dGUucmVxdWlyZW1lbnRzICYmIChcIl9zY2hlbWVcIiBpbiByb3V0ZS5yZXF1aXJlbWVudHMpICYmIHRoaXMuZ2V0U2NoZW1lKCkgIT0gcm91dGUucmVxdWlyZW1lbnRzW1wiX3NjaGVtZVwiXSkge1xuICAgICAgICAgICAgdXJsID0gcm91dGUucmVxdWlyZW1lbnRzW1wiX3NjaGVtZVwiXSArIFwiOi8vXCIgKyAoaG9zdCB8fCB0aGlzLmdldEhvc3QoKSkgKyB1cmw7XG4gICAgICAgIH0gZWxzZSBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHJvdXRlLnNjaGVtZXMgJiYgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIHJvdXRlLnNjaGVtZXNbMF0gJiYgdGhpcy5nZXRTY2hlbWUoKSAhPT0gcm91dGUuc2NoZW1lc1swXSkge1xuICAgICAgICAgICAgdXJsID0gcm91dGUuc2NoZW1lc1swXSArIFwiOi8vXCIgKyAoaG9zdCB8fCB0aGlzLmdldEhvc3QoKSkgKyB1cmw7XG4gICAgICAgIH0gZWxzZSBpZiAoaG9zdCAmJiB0aGlzLmdldEhvc3QoKSAhPT0gaG9zdCArICgnJyA9PT0gcG9ydCA/ICcnIDogJzonICsgcG9ydCkpIHtcbiAgICAgICAgICB1cmwgPSB0aGlzLmdldFNjaGVtZSgpICsgXCI6Ly9cIiArIGhvc3QgKyAoJycgPT09IHBvcnQgPyAnJyA6ICc6JyArIHBvcnQpICsgdXJsO1xuICAgICAgICB9IGVsc2UgaWYgKGFic29sdXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB1cmwgPSB0aGlzLmdldFNjaGVtZSgpICsgXCI6Ly9cIiArIHRoaXMuZ2V0SG9zdCgpICsgdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVudXNlZFBhcmFtcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHByZWZpeDtcbiAgICAgICAgICAgIGxldCBxdWVyeVBhcmFtczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgICAgIGxldCBhZGQgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uIHRoZW4gY2FsbCBpdCBhbmQgYXNzaWduIGl0J3MgcmV0dXJuIHZhbHVlIGFzIHZhbHVlXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSA/IHZhbHVlKCkgOiB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZSBudWxsIHRvIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgICAgIHZhbHVlID0gKHZhbHVlID09PSBudWxsKSA/ICcnIDogdmFsdWU7XG5cbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHByZWZpeCBpbiB1bnVzZWRQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUXVlcnlQYXJhbXMocHJlZml4LCB1bnVzZWRQYXJhbXNbcHJlZml4XSwgYWRkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXJsID0gdXJsICsgJz8nICsgcXVlcnlQYXJhbXMuam9pbignJicpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZURlZmF1bHRzIHtcbiAgICBbaW5kZXg6c3RyaW5nXTpzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVSZXF1aXJlbWVudHMge1xuICAgIFtpbmRleDpzdHJpbmddOnN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVBhcmFtcyB7XG4gICAgW2luZGV4OnN0cmluZ106YW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFF1ZXJ5UGFyYW1BZGRGdW5jdGlvbiB7XG4gICAgKHByZWZpeDpzdHJpbmcscGFyYW1zOmFueSk6dm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZSB7XG4gICAgdG9rZW5zOnN0cmluZ1tdW107XG4gICAgZGVmYXVsdHM6Um91dGVEZWZhdWx0cztcbiAgICByZXF1aXJlbWVudHM6Um91dGVSZXF1aXJlbWVudHM7XG4gICAgaG9zdHRva2VuczpzdHJpbmdbXTtcbiAgICBzY2hlbWVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZXNNYXAge1xuICAgIFtpbmRleDpzdHJpbmddOlJvdXRlO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udGV4dCB7XG4gICAgYmFzZV91cmw6IHN0cmluZyA9ICcnO1xuICAgIHByZWZpeDogc3RyaW5nID0gJyc7XG4gICAgaG9zdDogc3RyaW5nID0gJyc7XG4gICAgc2NoZW1lOiBzdHJpbmcgPSAnJztcbiAgICBwb3J0OiBzdHJpbmcgPSAnJztcbn1cblxuZXhwb3J0IGNsYXNzIFJvdXRpbmdEYXRhIGV4dGVuZHMgQ29udGV4dCB7XG4gICAgcm91dGVzOlJvdXRlc01hcDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNsYXRvclxue1xuICAgIHByaXZhdGUgZGF0YTogb2JqZWN0O1xuXG4gICAgcHVibGljIHNldERhdGEoZGF0YTogb2JqZWN0KVxuICAgIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJhbnModmFsdWU6IHN0cmluZywgcGFyYW1ldGVycz86IG9iamVjdClcbiAgICB7XG4gICAgICAgIGlmKHRoaXMuZGF0YVt2YWx1ZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGFbdmFsdWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=