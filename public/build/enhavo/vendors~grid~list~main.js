(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~grid~list~main"],{

/***/ "./node_modules/async/dist/async.js":
/*!******************************************!*\
  !*** ./node_modules/async/dist/async.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, process, global, module) {(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

function slice(arrayLike, start) {
    start = start|0;
    var newLen = Math.max(arrayLike.length - start, 0);
    var newArr = Array(newLen);
    for(var idx = 0; idx < newLen; idx++)  {
        newArr[idx] = arrayLike[start + idx];
    }
    return newArr;
}

/**
 * Creates a continuation function with some arguments already applied.
 *
 * Useful as a shorthand when combined with other control flow functions. Any
 * arguments passed to the returned function are added to the arguments
 * originally passed to apply.
 *
 * @name apply
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {Function} fn - The function you want to eventually apply all
 * arguments to. Invokes with (arguments...).
 * @param {...*} arguments... - Any number of arguments to automatically apply
 * when the continuation is called.
 * @returns {Function} the partially-applied function
 * @example
 *
 * // using apply
 * async.parallel([
 *     async.apply(fs.writeFile, 'testfile1', 'test1'),
 *     async.apply(fs.writeFile, 'testfile2', 'test2')
 * ]);
 *
 *
 * // the same process without using apply
 * async.parallel([
 *     function(callback) {
 *         fs.writeFile('testfile1', 'test1', callback);
 *     },
 *     function(callback) {
 *         fs.writeFile('testfile2', 'test2', callback);
 *     }
 * ]);
 *
 * // It's possible to pass any number of additional arguments when calling the
 * // continuation:
 *
 * node> var fn = async.apply(sys.puts, 'one');
 * node> fn('two', 'three');
 * one
 * two
 * three
 */
var apply = function(fn/*, ...args*/) {
    var args = slice(arguments, 1);
    return function(/*callArgs*/) {
        var callArgs = slice(arguments);
        return fn.apply(null, args.concat(callArgs));
    };
};

var initialParams = function (fn) {
    return function (/*...args, callback*/) {
        var args = slice(arguments);
        var callback = args.pop();
        fn.call(this, args, callback);
    };
};

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
var hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

function fallback(fn) {
    setTimeout(fn, 0);
}

function wrap(defer) {
    return function (fn/*, ...args*/) {
        var args = slice(arguments, 1);
        defer(function () {
            fn.apply(null, args);
        });
    };
}

var _defer;

if (hasSetImmediate) {
    _defer = setImmediate;
} else if (hasNextTick) {
    _defer = process.nextTick;
} else {
    _defer = fallback;
}

var setImmediate$1 = wrap(_defer);

/**
 * Take a sync function and make it async, passing its return value to a
 * callback. This is useful for plugging sync functions into a waterfall,
 * series, or other async functions. Any arguments passed to the generated
 * function will be passed to the wrapped function (except for the final
 * callback argument). Errors thrown will be passed to the callback.
 *
 * If the function passed to `asyncify` returns a Promise, that promises's
 * resolved/rejected state will be used to call the callback, rather than simply
 * the synchronous return value.
 *
 * This also means you can asyncify ES2017 `async` functions.
 *
 * @name asyncify
 * @static
 * @memberOf module:Utils
 * @method
 * @alias wrapSync
 * @category Util
 * @param {Function} func - The synchronous function, or Promise-returning
 * function to convert to an {@link AsyncFunction}.
 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
 * invoked with `(args..., callback)`.
 * @example
 *
 * // passing a regular synchronous function
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(JSON.parse),
 *     function (data, next) {
 *         // data is the result of parsing the text.
 *         // If there was a parsing error, it would have been caught.
 *     }
 * ], callback);
 *
 * // passing a function returning a promise
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(function (contents) {
 *         return db.model.create(contents);
 *     }),
 *     function (model, next) {
 *         // `model` is the instantiated model object.
 *         // If there was an error, this function would be skipped.
 *     }
 * ], callback);
 *
 * // es2017 example, though `asyncify` is not needed if your JS environment
 * // supports async functions out of the box
 * var q = async.queue(async.asyncify(async function(file) {
 *     var intermediateStep = await processFile(file);
 *     return await somePromise(intermediateStep)
 * }));
 *
 * q.push(files);
 */
function asyncify(func) {
    return initialParams(function (args, callback) {
        var result;
        try {
            result = func.apply(this, args);
        } catch (e) {
            return callback(e);
        }
        // if result is Promise object
        if (isObject(result) && typeof result.then === 'function') {
            result.then(function(value) {
                invokeCallback(callback, null, value);
            }, function(err) {
                invokeCallback(callback, err.message ? err : new Error(err));
            });
        } else {
            callback(null, result);
        }
    });
}

function invokeCallback(callback, error, value) {
    try {
        callback(error, value);
    } catch (e) {
        setImmediate$1(rethrow, e);
    }
}

function rethrow(error) {
    throw error;
}

var supportsSymbol = typeof Symbol === 'function';

function isAsync(fn) {
    return supportsSymbol && fn[Symbol.toStringTag] === 'AsyncFunction';
}

function wrapAsync(asyncFn) {
    return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
}

function applyEach$1(eachfn) {
    return function(fns/*, ...args*/) {
        var args = slice(arguments, 1);
        var go = initialParams(function(args, callback) {
            var that = this;
            return eachfn(fns, function (fn, cb) {
                wrapAsync(fn).apply(that, args.concat(cb));
            }, callback);
        });
        if (args.length) {
            return go.apply(this, args);
        }
        else {
            return go;
        }
    };
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

// A temporary value used to identify if the loop should be broken.
// See #1064, #1293
var breakLoop = {};

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

function once(fn) {
    return function () {
        if (fn === null) return;
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}

var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

var getIterator = function (coll) {
    return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
};

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports$1 && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
        return ++i < len ? {value: coll[i], key: i} : null;
    }
}

function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
        var item = iterator.next();
        if (item.done)
            return null;
        i++;
        return {value: item.value, key: i};
    }
}

function createObjectIterator(obj) {
    var okeys = keys(obj);
    var i = -1;
    var len = okeys.length;
    return function next() {
        var key = okeys[++i];
        return i < len ? {value: obj[key], key: key} : null;
    };
}

function iterator(coll) {
    if (isArrayLike(coll)) {
        return createArrayIterator(coll);
    }

    var iterator = getIterator(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
}

function onlyOnce(fn) {
    return function() {
        if (fn === null) throw new Error("Callback was already called.");
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}

function _eachOfLimit(limit) {
    return function (obj, iteratee, callback) {
        callback = once(callback || noop);
        if (limit <= 0 || !obj) {
            return callback(null);
        }
        var nextElem = iterator(obj);
        var done = false;
        var running = 0;
        var looping = false;

        function iterateeCallback(err, value) {
            running -= 1;
            if (err) {
                done = true;
                callback(err);
            }
            else if (value === breakLoop || (done && running <= 0)) {
                done = true;
                return callback(null);
            }
            else if (!looping) {
                replenish();
            }
        }

        function replenish () {
            looping = true;
            while (running < limit && !done) {
                var elem = nextElem();
                if (elem === null) {
                    done = true;
                    if (running <= 0) {
                        callback(null);
                    }
                    return;
                }
                running += 1;
                iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
            }
            looping = false;
        }

        replenish();
    };
}

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name eachOfLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`. The `key` is the item's key, or index in the case of an
 * array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachOfLimit(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, wrapAsync(iteratee), callback);
}

function doLimit(fn, limit) {
    return function (iterable, iteratee, callback) {
        return fn(iterable, limit, iteratee, callback);
    };
}

// eachOf implementation optimized for array-likes
function eachOfArrayLike(coll, iteratee, callback) {
    callback = once(callback || noop);
    var index = 0,
        completed = 0,
        length = coll.length;
    if (length === 0) {
        callback(null);
    }

    function iteratorCallback(err, value) {
        if (err) {
            callback(err);
        } else if ((++completed === length) || value === breakLoop) {
            callback(null);
        }
    }

    for (; index < length; index++) {
        iteratee(coll[index], index, onlyOnce(iteratorCallback));
    }
}

// a generic version of eachOf which can handle array, object, and iterator cases.
var eachOfGeneric = doLimit(eachOfLimit, Infinity);

/**
 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
 * to the iteratee.
 *
 * @name eachOf
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEachOf
 * @category Collection
 * @see [async.each]{@link module:Collections.each}
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each
 * item in `coll`.
 * The `key` is the item's key, or index in the case of an array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
 * var configs = {};
 *
 * async.forEachOf(obj, function (value, key, callback) {
 *     fs.readFile(__dirname + value, "utf8", function (err, data) {
 *         if (err) return callback(err);
 *         try {
 *             configs[key] = JSON.parse(data);
 *         } catch (e) {
 *             return callback(e);
 *         }
 *         callback();
 *     });
 * }, function (err) {
 *     if (err) console.error(err.message);
 *     // configs is now a map of JSON data
 *     doSomethingWith(configs);
 * });
 */
var eachOf = function(coll, iteratee, callback) {
    var eachOfImplementation = isArrayLike(coll) ? eachOfArrayLike : eachOfGeneric;
    eachOfImplementation(coll, wrapAsync(iteratee), callback);
};

function doParallel(fn) {
    return function (obj, iteratee, callback) {
        return fn(eachOf, obj, wrapAsync(iteratee), callback);
    };
}

function _asyncMap(eachfn, arr, iteratee, callback) {
    callback = callback || noop;
    arr = arr || [];
    var results = [];
    var counter = 0;
    var _iteratee = wrapAsync(iteratee);

    eachfn(arr, function (value, _, callback) {
        var index = counter++;
        _iteratee(value, function (err, v) {
            results[index] = v;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}

/**
 * Produces a new collection of values by mapping each value in `coll` through
 * the `iteratee` function. The `iteratee` is called with an item from `coll`
 * and a callback for when it has finished processing. Each of these callback
 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
 * `iteratee` passes an error to its callback, the main `callback` (for the
 * `map` function) is immediately called with the error.
 *
 * Note, that since this function applies the `iteratee` to each item in
 * parallel, there is no guarantee that the `iteratee` functions will complete
 * in order. However, the results array will be in the same order as the
 * original `coll`.
 *
 * If `map` is passed an Object, the results will be an Array.  The results
 * will roughly be in the order of the original Objects' keys (but this can
 * vary across JavaScript engines).
 *
 * @name map
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an Array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @example
 *
 * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
 *     // results is now an array of stats for each file
 * });
 */
var map = doParallel(_asyncMap);

/**
 * Applies the provided arguments to each function in the array, calling
 * `callback` after all functions have completed. If you only provide the first
 * argument, `fns`, then it will return a function which lets you pass in the
 * arguments as if it were a single function call. If more arguments are
 * provided, `callback` is required while `args` is still optional.
 *
 * @name applyEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s
 * to all call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument, `fns`, is provided, it will
 * return a function which lets you pass in the arguments as if it were a single
 * function call. The signature is `(..args, callback)`. If invoked with any
 * arguments, `callback` is required.
 * @example
 *
 * async.applyEach([enableSearch, updateSchema], 'bucket', callback);
 *
 * // partial application example:
 * async.each(
 *     buckets,
 *     async.applyEach([enableSearch, updateSchema]),
 *     callback
 * );
 */
var applyEach = applyEach$1(map);

function doParallelLimit(fn) {
    return function (obj, limit, iteratee, callback) {
        return fn(_eachOfLimit(limit), obj, wrapAsync(iteratee), callback);
    };
}

/**
 * The same as [`map`]{@link module:Collections.map} but runs a maximum of `limit` async operations at a time.
 *
 * @name mapLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 */
var mapLimit = doParallelLimit(_asyncMap);

/**
 * The same as [`map`]{@link module:Collections.map} but runs only a single async operation at a time.
 *
 * @name mapSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an array of the
 * transformed items from the `coll`. Invoked with (err, results).
 */
var mapSeries = doLimit(mapLimit, 1);

/**
 * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
 *
 * @name applyEachSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.applyEach]{@link module:ControlFlow.applyEach}
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s to all
 * call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument is provided, it will return
 * a function which lets you pass in the arguments as if it were a single
 * function call.
 */
var applyEachSeries = applyEach$1(mapSeries);

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

/**
 * Determines the best order for running the {@link AsyncFunction}s in `tasks`, based on
 * their requirements. Each function can optionally depend on other functions
 * being completed first, and each function is run as soon as its requirements
 * are satisfied.
 *
 * If any of the {@link AsyncFunction}s pass an error to their callback, the `auto` sequence
 * will stop. Further tasks will not execute (so any other functions depending
 * on it will not run), and the main `callback` is immediately called with the
 * error.
 *
 * {@link AsyncFunction}s also receive an object containing the results of functions which
 * have completed so far as the first argument, if they have dependencies. If a
 * task function has no dependencies, it will only be passed a callback.
 *
 * @name auto
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Object} tasks - An object. Each of its properties is either a
 * function or an array of requirements, with the {@link AsyncFunction} itself the last item
 * in the array. The object's key of a property serves as the name of the task
 * defined by that property, i.e. can be used when specifying requirements for
 * other tasks. The function receives one or two arguments:
 * * a `results` object, containing the results of the previously executed
 *   functions, only passed if the task has any dependencies,
 * * a `callback(err, result)` function, which must be called when finished,
 *   passing an `error` (which can be `null`) and the result of the function's
 *   execution.
 * @param {number} [concurrency=Infinity] - An optional `integer` for
 * determining the maximum number of tasks that can be run in parallel. By
 * default, as many as possible.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback. Results are always returned; however, if an
 * error occurs, no further `tasks` will be performed, and the results object
 * will only contain partial results. Invoked with (err, results).
 * @returns undefined
 * @example
 *
 * async.auto({
 *     // this function will just be passed a callback
 *     readData: async.apply(fs.readFile, 'data.txt', 'utf-8'),
 *     showData: ['readData', function(results, cb) {
 *         // results.readData is the file's contents
 *         // ...
 *     }]
 * }, callback);
 *
 * async.auto({
 *     get_data: function(callback) {
 *         console.log('in get_data');
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         console.log('in make_folder');
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: ['get_data', 'make_folder', function(results, callback) {
 *         console.log('in write_file', JSON.stringify(results));
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(results, callback) {
 *         console.log('in email_link', JSON.stringify(results));
 *         // once the file is written let's email a link to it...
 *         // results.write_file contains the filename returned by write_file.
 *         callback(null, {'file':results.write_file, 'email':'user@example.com'});
 *     }]
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('results = ', results);
 * });
 */
var auto = function (tasks, concurrency, callback) {
    if (typeof concurrency === 'function') {
        // concurrency is optional, shift the args.
        callback = concurrency;
        concurrency = null;
    }
    callback = once(callback || noop);
    var keys$$1 = keys(tasks);
    var numTasks = keys$$1.length;
    if (!numTasks) {
        return callback(null);
    }
    if (!concurrency) {
        concurrency = numTasks;
    }

    var results = {};
    var runningTasks = 0;
    var hasError = false;

    var listeners = Object.create(null);

    var readyTasks = [];

    // for cycle detection:
    var readyToCheck = []; // tasks that have been identified as reachable
    // without the possibility of returning to an ancestor task
    var uncheckedDependencies = {};

    baseForOwn(tasks, function (task, key) {
        if (!isArray(task)) {
            // no dependencies
            enqueueTask(key, [task]);
            readyToCheck.push(key);
            return;
        }

        var dependencies = task.slice(0, task.length - 1);
        var remainingDependencies = dependencies.length;
        if (remainingDependencies === 0) {
            enqueueTask(key, task);
            readyToCheck.push(key);
            return;
        }
        uncheckedDependencies[key] = remainingDependencies;

        arrayEach(dependencies, function (dependencyName) {
            if (!tasks[dependencyName]) {
                throw new Error('async.auto task `' + key +
                    '` has a non-existent dependency `' +
                    dependencyName + '` in ' +
                    dependencies.join(', '));
            }
            addListener(dependencyName, function () {
                remainingDependencies--;
                if (remainingDependencies === 0) {
                    enqueueTask(key, task);
                }
            });
        });
    });

    checkForDeadlocks();
    processQueue();

    function enqueueTask(key, task) {
        readyTasks.push(function () {
            runTask(key, task);
        });
    }

    function processQueue() {
        if (readyTasks.length === 0 && runningTasks === 0) {
            return callback(null, results);
        }
        while(readyTasks.length && runningTasks < concurrency) {
            var run = readyTasks.shift();
            run();
        }

    }

    function addListener(taskName, fn) {
        var taskListeners = listeners[taskName];
        if (!taskListeners) {
            taskListeners = listeners[taskName] = [];
        }

        taskListeners.push(fn);
    }

    function taskComplete(taskName) {
        var taskListeners = listeners[taskName] || [];
        arrayEach(taskListeners, function (fn) {
            fn();
        });
        processQueue();
    }


    function runTask(key, task) {
        if (hasError) return;

        var taskCallback = onlyOnce(function(err, result) {
            runningTasks--;
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            }
            if (err) {
                var safeResults = {};
                baseForOwn(results, function(val, rkey) {
                    safeResults[rkey] = val;
                });
                safeResults[key] = result;
                hasError = true;
                listeners = Object.create(null);

                callback(err, safeResults);
            } else {
                results[key] = result;
                taskComplete(key);
            }
        });

        runningTasks++;
        var taskFn = wrapAsync(task[task.length - 1]);
        if (task.length > 1) {
            taskFn(results, taskCallback);
        } else {
            taskFn(taskCallback);
        }
    }

    function checkForDeadlocks() {
        // Kahn's algorithm
        // https://en.wikipedia.org/wiki/Topological_sorting#Kahn.27s_algorithm
        // http://connalle.blogspot.com/2013/10/topological-sortingkahn-algorithm.html
        var currentTask;
        var counter = 0;
        while (readyToCheck.length) {
            currentTask = readyToCheck.pop();
            counter++;
            arrayEach(getDependents(currentTask), function (dependent) {
                if (--uncheckedDependencies[dependent] === 0) {
                    readyToCheck.push(dependent);
                }
            });
        }

        if (counter !== numTasks) {
            throw new Error(
                'async.auto cannot execute tasks due to a recursive dependency'
            );
        }
    }

    function getDependents(taskName) {
        var result = [];
        baseForOwn(tasks, function (task, key) {
            if (isArray(task) && baseIndexOf(task, taskName, 0) >= 0) {
                result.push(key);
            }
        });
        return result;
    }
};

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff';
var rsComboMarksRange = '\\u0300-\\u036f';
var reComboHalfMarksRange = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange = '\\u20d0-\\u20ff';
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
var rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff';
var rsComboMarksRange$1 = '\\u0300-\\u036f';
var reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange$1 = '\\u20d0-\\u20ff';
var rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
var rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$1 + ']';
var rsCombo = '[' + rsComboRange$1 + ']';
var rsFitz = '\\ud83c[\\udffb-\\udfff]';
var rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
var rsNonAstral = '[^' + rsAstralRange$1 + ']';
var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?';
var rsOptVar = '[' + rsVarRange$1 + ']?';
var rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString(string);
  if (string && (guard || chars === undefined)) {
    return string.replace(reTrim, '');
  }
  if (!string || !(chars = baseToString(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

var FN_ARGS = /^(?:async\s+)?(function)?\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var FN_ARG = /(=.+)?(\s*)$/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

function parseParams(func) {
    func = func.toString().replace(STRIP_COMMENTS, '');
    func = func.match(FN_ARGS)[2].replace(' ', '');
    func = func ? func.split(FN_ARG_SPLIT) : [];
    func = func.map(function (arg){
        return trim(arg.replace(FN_ARG, ''));
    });
    return func;
}

/**
 * A dependency-injected version of the [async.auto]{@link module:ControlFlow.auto} function. Dependent
 * tasks are specified as parameters to the function, after the usual callback
 * parameter, with the parameter names matching the names of the tasks it
 * depends on. This can provide even more readable task graphs which can be
 * easier to maintain.
 *
 * If a final callback is specified, the task results are similarly injected,
 * specified as named parameters after the initial error parameter.
 *
 * The autoInject function is purely syntactic sugar and its semantics are
 * otherwise equivalent to [async.auto]{@link module:ControlFlow.auto}.
 *
 * @name autoInject
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.auto]{@link module:ControlFlow.auto}
 * @category Control Flow
 * @param {Object} tasks - An object, each of whose properties is an {@link AsyncFunction} of
 * the form 'func([dependencies...], callback). The object's key of a property
 * serves as the name of the task defined by that property, i.e. can be used
 * when specifying requirements for other tasks.
 * * The `callback` parameter is a `callback(err, result)` which must be called
 *   when finished, passing an `error` (which can be `null`) and the result of
 *   the function's execution. The remaining parameters name other tasks on
 *   which the task is dependent, and the results from those tasks are the
 *   arguments of those parameters.
 * @param {Function} [callback] - An optional callback which is called when all
 * the tasks have been completed. It receives the `err` argument if any `tasks`
 * pass an error to their callback, and a `results` object with any completed
 * task results, similar to `auto`.
 * @example
 *
 * //  The example from `auto` can be rewritten as follows:
 * async.autoInject({
 *     get_data: function(callback) {
 *         // async code to get some data
 *         callback(null, 'data', 'converted to array');
 *     },
 *     make_folder: function(callback) {
 *         // async code to create a directory to store a file in
 *         // this is run at the same time as getting the data
 *         callback(null, 'folder');
 *     },
 *     write_file: function(get_data, make_folder, callback) {
 *         // once there is some data and the directory exists,
 *         // write the data to a file in the directory
 *         callback(null, 'filename');
 *     },
 *     email_link: function(write_file, callback) {
 *         // once the file is written let's email a link to it...
 *         // write_file contains the filename returned by write_file.
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 *
 * // If you are using a JS minifier that mangles parameter names, `autoInject`
 * // will not work with plain functions, since the parameter names will be
 * // collapsed to a single letter identifier.  To work around this, you can
 * // explicitly specify the names of the parameters your task function needs
 * // in an array, similar to Angular.js dependency injection.
 *
 * // This still has an advantage over plain `auto`, since the results a task
 * // depends on are still spread into arguments.
 * async.autoInject({
 *     //...
 *     write_file: ['get_data', 'make_folder', function(get_data, make_folder, callback) {
 *         callback(null, 'filename');
 *     }],
 *     email_link: ['write_file', function(write_file, callback) {
 *         callback(null, {'file':write_file, 'email':'user@example.com'});
 *     }]
 *     //...
 * }, function(err, results) {
 *     console.log('err = ', err);
 *     console.log('email_link = ', results.email_link);
 * });
 */
function autoInject(tasks, callback) {
    var newTasks = {};

    baseForOwn(tasks, function (taskFn, key) {
        var params;
        var fnIsAsync = isAsync(taskFn);
        var hasNoDeps =
            (!fnIsAsync && taskFn.length === 1) ||
            (fnIsAsync && taskFn.length === 0);

        if (isArray(taskFn)) {
            params = taskFn.slice(0, -1);
            taskFn = taskFn[taskFn.length - 1];

            newTasks[key] = params.concat(params.length > 0 ? newTask : taskFn);
        } else if (hasNoDeps) {
            // no dependencies, use the function as-is
            newTasks[key] = taskFn;
        } else {
            params = parseParams(taskFn);
            if (taskFn.length === 0 && !fnIsAsync && params.length === 0) {
                throw new Error("autoInject task functions require explicit parameters.");
            }

            // remove callback param
            if (!fnIsAsync) params.pop();

            newTasks[key] = params.concat(newTask);
        }

        function newTask(results, taskCb) {
            var newArgs = arrayMap(params, function (name) {
                return results[name];
            });
            newArgs.push(taskCb);
            wrapAsync(taskFn).apply(null, newArgs);
        }
    });

    auto(newTasks, callback);
}

// Simple doubly linked list (https://en.wikipedia.org/wiki/Doubly_linked_list) implementation
// used for queues. This implementation assumes that the node provided by the user can be modified
// to adjust the next and last properties. We implement only the minimal functionality
// for queue support.
function DLL() {
    this.head = this.tail = null;
    this.length = 0;
}

function setInitial(dll, node) {
    dll.length = 1;
    dll.head = dll.tail = node;
}

DLL.prototype.removeLink = function(node) {
    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;
    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev;

    node.prev = node.next = null;
    this.length -= 1;
    return node;
};

DLL.prototype.empty = function () {
    while(this.head) this.shift();
    return this;
};

DLL.prototype.insertAfter = function(node, newNode) {
    newNode.prev = node;
    newNode.next = node.next;
    if (node.next) node.next.prev = newNode;
    else this.tail = newNode;
    node.next = newNode;
    this.length += 1;
};

DLL.prototype.insertBefore = function(node, newNode) {
    newNode.prev = node.prev;
    newNode.next = node;
    if (node.prev) node.prev.next = newNode;
    else this.head = newNode;
    node.prev = newNode;
    this.length += 1;
};

DLL.prototype.unshift = function(node) {
    if (this.head) this.insertBefore(this.head, node);
    else setInitial(this, node);
};

DLL.prototype.push = function(node) {
    if (this.tail) this.insertAfter(this.tail, node);
    else setInitial(this, node);
};

DLL.prototype.shift = function() {
    return this.head && this.removeLink(this.head);
};

DLL.prototype.pop = function() {
    return this.tail && this.removeLink(this.tail);
};

DLL.prototype.toArray = function () {
    var arr = Array(this.length);
    var curr = this.head;
    for(var idx = 0; idx < this.length; idx++) {
        arr[idx] = curr.data;
        curr = curr.next;
    }
    return arr;
};

DLL.prototype.remove = function (testFn) {
    var curr = this.head;
    while(!!curr) {
        var next = curr.next;
        if (testFn(curr)) {
            this.removeLink(curr);
        }
        curr = next;
    }
    return this;
};

function queue(worker, concurrency, payload) {
    if (concurrency == null) {
        concurrency = 1;
    }
    else if(concurrency === 0) {
        throw new Error('Concurrency must not be zero');
    }

    var _worker = wrapAsync(worker);
    var numRunning = 0;
    var workersList = [];

    var processingScheduled = false;
    function _insert(data, insertAtFront, callback) {
        if (callback != null && typeof callback !== 'function') {
            throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!isArray(data)) {
            data = [data];
        }
        if (data.length === 0 && q.idle()) {
            // call drain immediately if there are no tasks
            return setImmediate$1(function() {
                q.drain();
            });
        }

        for (var i = 0, l = data.length; i < l; i++) {
            var item = {
                data: data[i],
                callback: callback || noop
            };

            if (insertAtFront) {
                q._tasks.unshift(item);
            } else {
                q._tasks.push(item);
            }
        }

        if (!processingScheduled) {
            processingScheduled = true;
            setImmediate$1(function() {
                processingScheduled = false;
                q.process();
            });
        }
    }

    function _next(tasks) {
        return function(err){
            numRunning -= 1;

            for (var i = 0, l = tasks.length; i < l; i++) {
                var task = tasks[i];

                var index = baseIndexOf(workersList, task, 0);
                if (index === 0) {
                    workersList.shift();
                } else if (index > 0) {
                    workersList.splice(index, 1);
                }

                task.callback.apply(task, arguments);

                if (err != null) {
                    q.error(err, task.data);
                }
            }

            if (numRunning <= (q.concurrency - q.buffer) ) {
                q.unsaturated();
            }

            if (q.idle()) {
                q.drain();
            }
            q.process();
        };
    }

    var isProcessing = false;
    var q = {
        _tasks: new DLL(),
        concurrency: concurrency,
        payload: payload,
        saturated: noop,
        unsaturated:noop,
        buffer: concurrency / 4,
        empty: noop,
        drain: noop,
        error: noop,
        started: false,
        paused: false,
        push: function (data, callback) {
            _insert(data, false, callback);
        },
        kill: function () {
            q.drain = noop;
            q._tasks.empty();
        },
        unshift: function (data, callback) {
            _insert(data, true, callback);
        },
        remove: function (testFn) {
            q._tasks.remove(testFn);
        },
        process: function () {
            // Avoid trying to start too many processing operations. This can occur
            // when callbacks resolve synchronously (#1267).
            if (isProcessing) {
                return;
            }
            isProcessing = true;
            while(!q.paused && numRunning < q.concurrency && q._tasks.length){
                var tasks = [], data = [];
                var l = q._tasks.length;
                if (q.payload) l = Math.min(l, q.payload);
                for (var i = 0; i < l; i++) {
                    var node = q._tasks.shift();
                    tasks.push(node);
                    workersList.push(node);
                    data.push(node.data);
                }

                numRunning += 1;

                if (q._tasks.length === 0) {
                    q.empty();
                }

                if (numRunning === q.concurrency) {
                    q.saturated();
                }

                var cb = onlyOnce(_next(tasks));
                _worker(data, cb);
            }
            isProcessing = false;
        },
        length: function () {
            return q._tasks.length;
        },
        running: function () {
            return numRunning;
        },
        workersList: function () {
            return workersList;
        },
        idle: function() {
            return q._tasks.length + numRunning === 0;
        },
        pause: function () {
            q.paused = true;
        },
        resume: function () {
            if (q.paused === false) { return; }
            q.paused = false;
            setImmediate$1(q.process);
        }
    };
    return q;
}

/**
 * A cargo of tasks for the worker function to complete. Cargo inherits all of
 * the same methods and event callbacks as [`queue`]{@link module:ControlFlow.queue}.
 * @typedef {Object} CargoObject
 * @memberOf module:ControlFlow
 * @property {Function} length - A function returning the number of items
 * waiting to be processed. Invoke like `cargo.length()`.
 * @property {number} payload - An `integer` for determining how many tasks
 * should be process per round. This property can be changed after a `cargo` is
 * created to alter the payload on-the-fly.
 * @property {Function} push - Adds `task` to the `queue`. The callback is
 * called once the `worker` has finished processing the task. Instead of a
 * single task, an array of `tasks` can be submitted. The respective callback is
 * used for every task in the list. Invoke like `cargo.push(task, [callback])`.
 * @property {Function} saturated - A callback that is called when the
 * `queue.length()` hits the concurrency and further tasks will be queued.
 * @property {Function} empty - A callback that is called when the last item
 * from the `queue` is given to a `worker`.
 * @property {Function} drain - A callback that is called when the last item
 * from the `queue` has returned from the `worker`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke like `cargo.idle()`.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke like `cargo.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke like `cargo.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. Invoke like `cargo.kill()`.
 */

/**
 * Creates a `cargo` object with the specified payload. Tasks added to the
 * cargo will be processed altogether (up to the `payload` limit). If the
 * `worker` is in progress, the task is queued until it becomes available. Once
 * the `worker` has completed some tasks, each callback of those tasks is
 * called. Check out [these](https://camo.githubusercontent.com/6bbd36f4cf5b35a0f11a96dcd2e97711ffc2fb37/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130382f62626330636662302d356632392d313165322d393734662d3333393763363464633835382e676966) [animations](https://camo.githubusercontent.com/f4810e00e1c5f5f8addbe3e9f49064fd5d102699/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313637363837312f36383130312f38346339323036362d356632392d313165322d383134662d3964336430323431336266642e676966)
 * for how `cargo` and `queue` work.
 *
 * While [`queue`]{@link module:ControlFlow.queue} passes only one task to one of a group of workers
 * at a time, cargo passes an array of tasks to a single worker, repeating
 * when the worker is finished.
 *
 * @name cargo
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An asynchronous function for processing an array
 * of queued tasks. Invoked with `(tasks, callback)`.
 * @param {number} [payload=Infinity] - An optional `integer` for determining
 * how many tasks should be processed per round; if omitted, the default is
 * unlimited.
 * @returns {module:ControlFlow.CargoObject} A cargo object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the cargo and inner queue.
 * @example
 *
 * // create a cargo object with payload 2
 * var cargo = async.cargo(function(tasks, callback) {
 *     for (var i=0; i<tasks.length; i++) {
 *         console.log('hello ' + tasks[i].name);
 *     }
 *     callback();
 * }, 2);
 *
 * // add some items
 * cargo.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * cargo.push({name: 'bar'}, function(err) {
 *     console.log('finished processing bar');
 * });
 * cargo.push({name: 'baz'}, function(err) {
 *     console.log('finished processing baz');
 * });
 */
function cargo(worker, payload) {
    return queue(worker, 1, payload);
}

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs only a single async operation at a time.
 *
 * @name eachOfSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Invoked with (err).
 */
var eachOfSeries = doLimit(eachOfLimit, 1);

/**
 * Reduces `coll` into a single value using an async `iteratee` to return each
 * successive step. `memo` is the initial state of the reduction. This function
 * only operates in series.
 *
 * For performance reasons, it may make sense to split a call to this function
 * into a parallel map, and then use the normal `Array.prototype.reduce` on the
 * results. This function is for situations where each step in the reduction
 * needs to be async; if you can get the data before reducing it, then it's
 * probably a good idea to do so.
 *
 * @name reduce
 * @static
 * @memberOf module:Collections
 * @method
 * @alias inject
 * @alias foldl
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 * @example
 *
 * async.reduce([1,2,3], 0, function(memo, item, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         callback(null, memo + item)
 *     });
 * }, function(err, result) {
 *     // result is now equal to the last value of memo, which is 6
 * });
 */
function reduce(coll, memo, iteratee, callback) {
    callback = once(callback || noop);
    var _iteratee = wrapAsync(iteratee);
    eachOfSeries(coll, function(x, i, callback) {
        _iteratee(memo, x, function(err, v) {
            memo = v;
            callback(err);
        });
    }, function(err) {
        callback(err, memo);
    });
}

/**
 * Version of the compose function that is more natural to read. Each function
 * consumes the return value of the previous function. It is the equivalent of
 * [compose]{@link module:ControlFlow.compose} with the arguments reversed.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name seq
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.compose]{@link module:ControlFlow.compose}
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} a function that composes the `functions` in order
 * @example
 *
 * // Requires lodash (or underscore), express3 and dresende's orm2.
 * // Part of an app, that fetches cats of the logged user.
 * // This example uses `seq` function to avoid overnesting and error
 * // handling clutter.
 * app.get('/cats', function(request, response) {
 *     var User = request.models.User;
 *     async.seq(
 *         _.bind(User.get, User),  // 'User.get' has signature (id, callback(err, data))
 *         function(user, fn) {
 *             user.getCats(fn);      // 'getCats' has signature (callback(err, data))
 *         }
 *     )(req.session.user_id, function (err, cats) {
 *         if (err) {
 *             console.error(err);
 *             response.json({ status: 'error', message: err.message });
 *         } else {
 *             response.json({ status: 'ok', message: 'Cats found', data: cats });
 *         }
 *     });
 * });
 */
function seq(/*...functions*/) {
    var _functions = arrayMap(arguments, wrapAsync);
    return function(/*...args*/) {
        var args = slice(arguments);
        var that = this;

        var cb = args[args.length - 1];
        if (typeof cb == 'function') {
            args.pop();
        } else {
            cb = noop;
        }

        reduce(_functions, args, function(newargs, fn, cb) {
            fn.apply(that, newargs.concat(function(err/*, ...nextargs*/) {
                var nextargs = slice(arguments, 1);
                cb(err, nextargs);
            }));
        },
        function(err, results) {
            cb.apply(that, [err].concat(results));
        });
    };
}

/**
 * Creates a function which is a composition of the passed asynchronous
 * functions. Each function consumes the return value of the function that
 * follows. Composing functions `f()`, `g()`, and `h()` would produce the result
 * of `f(g(h()))`, only this version uses callbacks to obtain the return values.
 *
 * Each function is executed with the `this` binding of the composed function.
 *
 * @name compose
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {...AsyncFunction} functions - the asynchronous functions to compose
 * @returns {Function} an asynchronous function that is the composed
 * asynchronous `functions`
 * @example
 *
 * function add1(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n + 1);
 *     }, 10);
 * }
 *
 * function mul3(n, callback) {
 *     setTimeout(function () {
 *         callback(null, n * 3);
 *     }, 10);
 * }
 *
 * var add1mul3 = async.compose(mul3, add1);
 * add1mul3(4, function (err, result) {
 *     // result now equals 15
 * });
 */
var compose = function(/*...args*/) {
    return seq.apply(null, slice(arguments).reverse());
};

var _concat = Array.prototype.concat;

/**
 * The same as [`concat`]{@link module:Collections.concat} but runs a maximum of `limit` async operations at a time.
 *
 * @name concatLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 */
var concatLimit = function(coll, limit, iteratee, callback) {
    callback = callback || noop;
    var _iteratee = wrapAsync(iteratee);
    mapLimit(coll, limit, function(val, callback) {
        _iteratee(val, function(err /*, ...args*/) {
            if (err) return callback(err);
            return callback(null, slice(arguments, 1));
        });
    }, function(err, mapResults) {
        var result = [];
        for (var i = 0; i < mapResults.length; i++) {
            if (mapResults[i]) {
                result = _concat.apply(result, mapResults[i]);
            }
        }

        return callback(err, result);
    });
};

/**
 * Applies `iteratee` to each item in `coll`, concatenating the results. Returns
 * the concatenated list. The `iteratee`s are called in parallel, and the
 * results are concatenated as they return. There is no guarantee that the
 * results array will be returned in the original order of `coll` passed to the
 * `iteratee` function.
 *
 * @name concat
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 * @example
 *
 * async.concat(['dir1','dir2','dir3'], fs.readdir, function(err, files) {
 *     // files is now a list of filenames that exist in the 3 directories
 * });
 */
var concat = doLimit(concatLimit, Infinity);

/**
 * The same as [`concat`]{@link module:Collections.concat} but runs only a single async operation at a time.
 *
 * @name concatSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`.
 * The iteratee should complete with an array an array of results.
 * Invoked with (item, callback).
 * @param {Function} [callback(err)] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 */
var concatSeries = doLimit(concatLimit, 1);

/**
 * Returns a function that when called, calls-back with the values provided.
 * Useful as the first function in a [`waterfall`]{@link module:ControlFlow.waterfall}, or for plugging values in to
 * [`auto`]{@link module:ControlFlow.auto}.
 *
 * @name constant
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {...*} arguments... - Any number of arguments to automatically invoke
 * callback with.
 * @returns {AsyncFunction} Returns a function that when invoked, automatically
 * invokes the callback with the previous given arguments.
 * @example
 *
 * async.waterfall([
 *     async.constant(42),
 *     function (value, next) {
 *         // value === 42
 *     },
 *     //...
 * ], callback);
 *
 * async.waterfall([
 *     async.constant(filename, "utf8"),
 *     fs.readFile,
 *     function (fileData, next) {
 *         //...
 *     }
 *     //...
 * ], callback);
 *
 * async.auto({
 *     hostname: async.constant("https://server.net/"),
 *     port: findFreePort,
 *     launchServer: ["hostname", "port", function (options, cb) {
 *         startServer(options, cb);
 *     }],
 *     //...
 * }, callback);
 */
var constant = function(/*...values*/) {
    var values = slice(arguments);
    var args = [null].concat(values);
    return function (/*...ignoredArgs, callback*/) {
        var callback = arguments[arguments.length - 1];
        return callback.apply(this, args);
    };
};

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

function _createTester(check, getResult) {
    return function(eachfn, arr, iteratee, cb) {
        cb = cb || noop;
        var testPassed = false;
        var testResult;
        eachfn(arr, function(value, _, callback) {
            iteratee(value, function(err, result) {
                if (err) {
                    callback(err);
                } else if (check(result) && !testResult) {
                    testPassed = true;
                    testResult = getResult(true, value);
                    callback(null, breakLoop);
                } else {
                    callback();
                }
            });
        }, function(err) {
            if (err) {
                cb(err);
            } else {
                cb(null, testPassed ? testResult : getResult(false));
            }
        });
    };
}

function _findGetResult(v, x) {
    return x;
}

/**
 * Returns the first value in `coll` that passes an async truth test. The
 * `iteratee` is applied in parallel, meaning the first iteratee to return
 * `true` will fire the detect `callback` with that result. That means the
 * result might not be the first item in the original `coll` (in terms of order)
 * that passes the test.

 * If order within the original `coll` is important, then look at
 * [`detectSeries`]{@link module:Collections.detectSeries}.
 *
 * @name detect
 * @static
 * @memberOf module:Collections
 * @method
 * @alias find
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 * @example
 *
 * async.detect(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // result now equals the first file in the list that exists
 * });
 */
var detect = doParallel(_createTester(identity, _findGetResult));

/**
 * The same as [`detect`]{@link module:Collections.detect} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name detectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findLimit
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */
var detectLimit = doParallelLimit(_createTester(identity, _findGetResult));

/**
 * The same as [`detect`]{@link module:Collections.detect} but runs only a single async operation at a time.
 *
 * @name detectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.detect]{@link module:Collections.detect}
 * @alias findSeries
 * @category Collections
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A truth test to apply to each item in `coll`.
 * The iteratee must complete with a boolean value as its result.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the `iteratee` functions have finished.
 * Result will be the first item in the array that passes the truth test
 * (iteratee) or the value `undefined` if none passed. Invoked with
 * (err, result).
 */
var detectSeries = doLimit(detectLimit, 1);

function consoleFunc(name) {
    return function (fn/*, ...args*/) {
        var args = slice(arguments, 1);
        args.push(function (err/*, ...args*/) {
            var args = slice(arguments, 1);
            if (typeof console === 'object') {
                if (err) {
                    if (console.error) {
                        console.error(err);
                    }
                } else if (console[name]) {
                    arrayEach(args, function (x) {
                        console[name](x);
                    });
                }
            }
        });
        wrapAsync(fn).apply(null, args);
    };
}

/**
 * Logs the result of an [`async` function]{@link AsyncFunction} to the
 * `console` using `console.dir` to display the properties of the resulting object.
 * Only works in Node.js or in browsers that support `console.dir` and
 * `console.error` (such as FF and Chrome).
 * If multiple arguments are returned from the async function,
 * `console.dir` is called on each argument in order.
 *
 * @name dir
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, {hello: name});
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.dir(hello, 'world');
 * {hello: 'world'}
 */
var dir = consoleFunc('dir');

/**
 * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
 * the order of operations, the arguments `test` and `fn` are switched.
 *
 * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
 * @name doDuring
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.during]{@link module:ControlFlow.during}
 * @category Control Flow
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (...args, callback), where `...args` are the
 * non-error args from the previous callback of `fn`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error if one occurred, otherwise `null`.
 */
function doDuring(fn, test, callback) {
    callback = onlyOnce(callback || noop);
    var _fn = wrapAsync(fn);
    var _test = wrapAsync(test);

    function next(err/*, ...args*/) {
        if (err) return callback(err);
        var args = slice(arguments, 1);
        args.push(check);
        _test.apply(this, args);
    }

    function check(err, truth) {
        if (err) return callback(err);
        if (!truth) return callback(null);
        _fn(next);
    }

    check(null, true);

}

/**
 * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
 * the order of operations, the arguments `test` and `iteratee` are switched.
 *
 * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
 *
 * @name doWhilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - A function which is called each time `test`
 * passes. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped.
 * `callback` will be passed an error and any arguments passed to the final
 * `iteratee`'s callback. Invoked with (err, [results]);
 */
function doWhilst(iteratee, test, callback) {
    callback = onlyOnce(callback || noop);
    var _iteratee = wrapAsync(iteratee);
    var next = function(err/*, ...args*/) {
        if (err) return callback(err);
        var args = slice(arguments, 1);
        if (test.apply(this, args)) return _iteratee(next);
        callback.apply(null, [null].concat(args));
    };
    _iteratee(next);
}

/**
 * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
 * argument ordering differs from `until`.
 *
 * @name doUntil
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */
function doUntil(iteratee, test, callback) {
    doWhilst(iteratee, function() {
        return !test.apply(this, arguments);
    }, callback);
}

/**
 * Like [`whilst`]{@link module:ControlFlow.whilst}, except the `test` is an asynchronous function that
 * is passed a callback in the form of `function (err, truth)`. If error is
 * passed to `test` or `fn`, the main callback is immediately called with the
 * value of the error.
 *
 * @name during
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (callback).
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error, if one occurred, otherwise `null`.
 * @example
 *
 * var count = 0;
 *
 * async.during(
 *     function (callback) {
 *         return callback(null, count < 5);
 *     },
 *     function (callback) {
 *         count++;
 *         setTimeout(callback, 1000);
 *     },
 *     function (err) {
 *         // 5 seconds have passed
 *     }
 * );
 */
function during(test, fn, callback) {
    callback = onlyOnce(callback || noop);
    var _fn = wrapAsync(fn);
    var _test = wrapAsync(test);

    function next(err) {
        if (err) return callback(err);
        _test(check);
    }

    function check(err, truth) {
        if (err) return callback(err);
        if (!truth) return callback(null);
        _fn(next);
    }

    _test(check);
}

function _withoutIndex(iteratee) {
    return function (value, index, callback) {
        return iteratee(value, callback);
    };
}

/**
 * Applies the function `iteratee` to each item in `coll`, in parallel.
 * The `iteratee` is called with an item from the list, and a callback for when
 * it has finished. If the `iteratee` passes an error to its `callback`, the
 * main `callback` (for the `each` function) is immediately called with the
 * error.
 *
 * Note, that since this function applies `iteratee` to each item in parallel,
 * there is no guarantee that the iteratee functions will complete in order.
 *
 * @name each
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEach
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to
 * each item in `coll`. Invoked with (item, callback).
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOf`.
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * // assuming openFiles is an array of file names and saveFile is a function
 * // to save the modified contents of that file:
 *
 * async.each(openFiles, saveFile, function(err){
 *   // if any of the saves produced an error, err would equal that error
 * });
 *
 * // assuming openFiles is an array of file names
 * async.each(openFiles, function(file, callback) {
 *
 *     // Perform operation on file here.
 *     console.log('Processing file ' + file);
 *
 *     if( file.length > 32 ) {
 *       console.log('This file name is too long');
 *       callback('File name too long');
 *     } else {
 *       // Do work to process file here
 *       console.log('File processed');
 *       callback();
 *     }
 * }, function(err) {
 *     // if any of the file processing produced an error, err would equal that error
 *     if( err ) {
 *       // One of the iterations produced an error.
 *       // All processing will now stop.
 *       console.log('A file failed to process');
 *     } else {
 *       console.log('All files have been processed successfully');
 *     }
 * });
 */
function eachLimit(coll, iteratee, callback) {
    eachOf(coll, _withoutIndex(wrapAsync(iteratee)), callback);
}

/**
 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
 *
 * @name eachLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfLimit`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachLimit$1(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, _withoutIndex(wrapAsync(iteratee)), callback);
}

/**
 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
 *
 * @name eachSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfSeries`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
var eachSeries = doLimit(eachLimit$1, 1);

/**
 * Wrap an async function and ensure it calls its callback on a later tick of
 * the event loop.  If the function already calls its callback on a next tick,
 * no extra deferral is added. This is useful for preventing stack overflows
 * (`RangeError: Maximum call stack size exceeded`) and generally keeping
 * [Zalgo](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony)
 * contained. ES2017 `async` functions are returned as-is -- they are immune
 * to Zalgo's corrupting influences, as they always resolve on a later tick.
 *
 * @name ensureAsync
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - an async function, one that expects a node-style
 * callback as its last argument.
 * @returns {AsyncFunction} Returns a wrapped function with the exact same call
 * signature as the function passed in.
 * @example
 *
 * function sometimesAsync(arg, callback) {
 *     if (cache[arg]) {
 *         return callback(null, cache[arg]); // this would be synchronous!!
 *     } else {
 *         doSomeIO(arg, callback); // this IO would be asynchronous
 *     }
 * }
 *
 * // this has a risk of stack overflows if many results are cached in a row
 * async.mapSeries(args, sometimesAsync, done);
 *
 * // this will defer sometimesAsync's callback if necessary,
 * // preventing stack overflows
 * async.mapSeries(args, async.ensureAsync(sometimesAsync), done);
 */
function ensureAsync(fn) {
    if (isAsync(fn)) return fn;
    return initialParams(function (args, callback) {
        var sync = true;
        args.push(function () {
            var innerArgs = arguments;
            if (sync) {
                setImmediate$1(function () {
                    callback.apply(null, innerArgs);
                });
            } else {
                callback.apply(null, innerArgs);
            }
        });
        fn.apply(this, args);
        sync = false;
    });
}

function notId(v) {
    return !v;
}

/**
 * Returns `true` if every element in `coll` satisfies an async test. If any
 * iteratee call returns `false`, the main `callback` is immediately called.
 *
 * @name every
 * @static
 * @memberOf module:Collections
 * @method
 * @alias all
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 * @example
 *
 * async.every(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then every file exists
 * });
 */
var every = doParallel(_createTester(notId, notId));

/**
 * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
 *
 * @name everyLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
var everyLimit = doParallelLimit(_createTester(notId, notId));

/**
 * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
 *
 * @name everySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in series.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
var everySeries = doLimit(everyLimit, 1);

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

function filterArray(eachfn, arr, iteratee, callback) {
    var truthValues = new Array(arr.length);
    eachfn(arr, function (x, index, callback) {
        iteratee(x, function (err, v) {
            truthValues[index] = !!v;
            callback(err);
        });
    }, function (err) {
        if (err) return callback(err);
        var results = [];
        for (var i = 0; i < arr.length; i++) {
            if (truthValues[i]) results.push(arr[i]);
        }
        callback(null, results);
    });
}

function filterGeneric(eachfn, coll, iteratee, callback) {
    var results = [];
    eachfn(coll, function (x, index, callback) {
        iteratee(x, function (err, v) {
            if (err) {
                callback(err);
            } else {
                if (v) {
                    results.push({index: index, value: x});
                }
                callback();
            }
        });
    }, function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, arrayMap(results.sort(function (a, b) {
                return a.index - b.index;
            }), baseProperty('value')));
        }
    });
}

function _filter(eachfn, coll, iteratee, callback) {
    var filter = isArrayLike(coll) ? filterArray : filterGeneric;
    filter(eachfn, coll, wrapAsync(iteratee), callback || noop);
}

/**
 * Returns a new array of all the values in `coll` which pass an async truth
 * test. This operation is performed in parallel, but the results array will be
 * in the same order as the original.
 *
 * @name filter
 * @static
 * @memberOf module:Collections
 * @method
 * @alias select
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @example
 *
 * async.filter(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of the existing files
 * });
 */
var filter = doParallel(_filter);

/**
 * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name filterLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var filterLimit = doParallelLimit(_filter);

/**
 * The same as [`filter`]{@link module:Collections.filter} but runs only a single async operation at a time.
 *
 * @name filterSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results)
 */
var filterSeries = doLimit(filterLimit, 1);

/**
 * Calls the asynchronous function `fn` with a callback parameter that allows it
 * to call itself again, in series, indefinitely.

 * If an error is passed to the callback then `errback` is called with the
 * error, and execution stops, otherwise it will never be called.
 *
 * @name forever
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} fn - an async function to call repeatedly.
 * Invoked with (next).
 * @param {Function} [errback] - when `fn` passes an error to it's callback,
 * this function will be called, and execution stops. Invoked with (err).
 * @example
 *
 * async.forever(
 *     function(next) {
 *         // next is suitable for passing to things that need a callback(err [, whatever]);
 *         // it will result in this function being called again.
 *     },
 *     function(err) {
 *         // if next is called with a value in its first parameter, it will appear
 *         // in here as 'err', and execution will stop.
 *     }
 * );
 */
function forever(fn, errback) {
    var done = onlyOnce(errback || noop);
    var task = wrapAsync(ensureAsync(fn));

    function next(err) {
        if (err) return done(err);
        task(next);
    }
    next();
}

/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
 *
 * @name groupByLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */
var groupByLimit = function(coll, limit, iteratee, callback) {
    callback = callback || noop;
    var _iteratee = wrapAsync(iteratee);
    mapLimit(coll, limit, function(val, callback) {
        _iteratee(val, function(err, key) {
            if (err) return callback(err);
            return callback(null, {key: key, val: val});
        });
    }, function(err, mapResults) {
        var result = {};
        // from MDN, handle object having an `hasOwnProperty` prop
        var hasOwnProperty = Object.prototype.hasOwnProperty;

        for (var i = 0; i < mapResults.length; i++) {
            if (mapResults[i]) {
                var key = mapResults[i].key;
                var val = mapResults[i].val;

                if (hasOwnProperty.call(result, key)) {
                    result[key].push(val);
                } else {
                    result[key] = [val];
                }
            }
        }

        return callback(err, result);
    });
};

/**
 * Returns a new object, where each value corresponds to an array of items, from
 * `coll`, that returned the corresponding key. That is, the keys of the object
 * correspond to the values passed to the `iteratee` callback.
 *
 * Note: Since this function applies the `iteratee` to each item in parallel,
 * there is no guarantee that the `iteratee` functions will complete in order.
 * However, the values for each key in the `result` will be in the same order as
 * the original `coll`. For Objects, the values will roughly be in the order of
 * the original Objects' keys (but this can vary across JavaScript engines).
 *
 * @name groupBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 * @example
 *
 * async.groupBy(['userId1', 'userId2', 'userId3'], function(userId, callback) {
 *     db.findById(userId, function(err, user) {
 *         if (err) return callback(err);
 *         return callback(null, user.age);
 *     });
 * }, function(err, result) {
 *     // result is object containing the userIds grouped by age
 *     // e.g. { 30: ['userId1', 'userId3'], 42: ['userId2']};
 * });
 */
var groupBy = doLimit(groupByLimit, Infinity);

/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
 *
 * @name groupBySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */
var groupBySeries = doLimit(groupByLimit, 1);

/**
 * Logs the result of an `async` function to the `console`. Only works in
 * Node.js or in browsers that support `console.log` and `console.error` (such
 * as FF and Chrome). If multiple arguments are returned from the async
 * function, `console.log` is called on each argument in order.
 *
 * @name log
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} function - The function you want to eventually apply
 * all arguments to.
 * @param {...*} arguments... - Any number of arguments to apply to the function.
 * @example
 *
 * // in a module
 * var hello = function(name, callback) {
 *     setTimeout(function() {
 *         callback(null, 'hello ' + name);
 *     }, 1000);
 * };
 *
 * // in the node repl
 * node> async.log(hello, 'world');
 * 'hello world'
 */
var log = consoleFunc('log');

/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name mapValuesLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 */
function mapValuesLimit(obj, limit, iteratee, callback) {
    callback = once(callback || noop);
    var newObj = {};
    var _iteratee = wrapAsync(iteratee);
    eachOfLimit(obj, limit, function(val, key, next) {
        _iteratee(val, key, function (err, result) {
            if (err) return next(err);
            newObj[key] = result;
            next();
        });
    }, function (err) {
        callback(err, newObj);
    });
}

/**
 * A relative of [`map`]{@link module:Collections.map}, designed for use with objects.
 *
 * Produces a new Object by mapping each value of `obj` through the `iteratee`
 * function. The `iteratee` is called each `value` and `key` from `obj` and a
 * callback for when it has finished processing. Each of these callbacks takes
 * two arguments: an `error`, and the transformed item from `obj`. If `iteratee`
 * passes an error to its callback, the main `callback` (for the `mapValues`
 * function) is immediately called with the error.
 *
 * Note, the order of the keys in the result is not guaranteed.  The keys will
 * be roughly in the order they complete, (but this is very engine-specific)
 *
 * @name mapValues
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 * @example
 *
 * async.mapValues({
 *     f1: 'file1',
 *     f2: 'file2',
 *     f3: 'file3'
 * }, function (file, key, callback) {
 *   fs.stat(file, callback);
 * }, function(err, result) {
 *     // result is now a map of stats for each file, e.g.
 *     // {
 *     //     f1: [stats for file1],
 *     //     f2: [stats for file2],
 *     //     f3: [stats for file3]
 *     // }
 * });
 */

var mapValues = doLimit(mapValuesLimit, Infinity);

/**
 * The same as [`mapValues`]{@link module:Collections.mapValues} but runs only a single async operation at a time.
 *
 * @name mapValuesSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.mapValues]{@link module:Collections.mapValues}
 * @category Collection
 * @param {Object} obj - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each value and key
 * in `coll`.
 * The iteratee should complete with the transformed value as its result.
 * Invoked with (value, key, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. `result` is a new object consisting
 * of each key from `obj`, with each transformed value on the right-hand side.
 * Invoked with (err, result).
 */
var mapValuesSeries = doLimit(mapValuesLimit, 1);

function has(obj, key) {
    return key in obj;
}

/**
 * Caches the results of an async function. When creating a hash to store
 * function results against, the callback is omitted from the hash and an
 * optional hash function can be used.
 *
 * If no hash function is specified, the first argument is used as a hash key,
 * which may work reasonably if it is a string or a data type that converts to a
 * distinct string. Note that objects and arrays will not behave reasonably.
 * Neither will cases where the other arguments are significant. In such cases,
 * specify your own hash function.
 *
 * The cache of results is exposed as the `memo` property of the function
 * returned by `memoize`.
 *
 * @name memoize
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function to proxy and cache results from.
 * @param {Function} hasher - An optional function for generating a custom hash
 * for storing results. It has all the arguments applied to it apart from the
 * callback, and must be synchronous.
 * @returns {AsyncFunction} a memoized version of `fn`
 * @example
 *
 * var slow_fn = function(name, callback) {
 *     // do something
 *     callback(null, result);
 * };
 * var fn = async.memoize(slow_fn);
 *
 * // fn can now be used as if it were slow_fn
 * fn('some name', function() {
 *     // callback
 * });
 */
function memoize(fn, hasher) {
    var memo = Object.create(null);
    var queues = Object.create(null);
    hasher = hasher || identity;
    var _fn = wrapAsync(fn);
    var memoized = initialParams(function memoized(args, callback) {
        var key = hasher.apply(null, args);
        if (has(memo, key)) {
            setImmediate$1(function() {
                callback.apply(null, memo[key]);
            });
        } else if (has(queues, key)) {
            queues[key].push(callback);
        } else {
            queues[key] = [callback];
            _fn.apply(null, args.concat(function(/*args*/) {
                var args = slice(arguments);
                memo[key] = args;
                var q = queues[key];
                delete queues[key];
                for (var i = 0, l = q.length; i < l; i++) {
                    q[i].apply(null, args);
                }
            }));
        }
    });
    memoized.memo = memo;
    memoized.unmemoized = fn;
    return memoized;
}

/**
 * Calls `callback` on a later loop around the event loop. In Node.js this just
 * calls `process.nextTick`.  In the browser it will use `setImmediate` if
 * available, otherwise `setTimeout(callback, 0)`, which means other higher
 * priority events may precede the execution of `callback`.
 *
 * This is used internally for browser-compatibility purposes.
 *
 * @name nextTick
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.setImmediate]{@link module:Utils.setImmediate}
 * @category Util
 * @param {Function} callback - The function to call on a later loop around
 * the event loop. Invoked with (args...).
 * @param {...*} args... - any number of additional arguments to pass to the
 * callback on the next tick.
 * @example
 *
 * var call_order = [];
 * async.nextTick(function() {
 *     call_order.push('two');
 *     // call_order now equals ['one','two']
 * });
 * call_order.push('one');
 *
 * async.setImmediate(function (a, b, c) {
 *     // a, b, and c equal 1, 2, and 3
 * }, 1, 2, 3);
 */
var _defer$1;

if (hasNextTick) {
    _defer$1 = process.nextTick;
} else if (hasSetImmediate) {
    _defer$1 = setImmediate;
} else {
    _defer$1 = fallback;
}

var nextTick = wrap(_defer$1);

function _parallel(eachfn, tasks, callback) {
    callback = callback || noop;
    var results = isArrayLike(tasks) ? [] : {};

    eachfn(tasks, function (task, key, callback) {
        wrapAsync(task)(function (err, result) {
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            }
            results[key] = result;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}

/**
 * Run the `tasks` collection of functions in parallel, without waiting until
 * the previous function has completed. If any of the functions pass an error to
 * its callback, the main `callback` is immediately called with the value of the
 * error. Once the `tasks` have completed, the results are passed to the final
 * `callback` as an array.
 *
 * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
 * parallel execution of code.  If your tasks do not use any timers or perform
 * any I/O, they will actually be executed in series.  Any synchronous setup
 * sections for each task will happen one after the other.  JavaScript remains
 * single-threaded.
 *
 * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
 * execution of other tasks when a task fails.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 * results from {@link async.parallel}.
 *
 * @name parallel
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 *
 * @example
 * async.parallel([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // the results array will equal ['one','two'] even though
 *     // the second function had a shorter timeout.
 * });
 *
 * // an example using an object instead of an array
 * async.parallel({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equals to: {one: 1, two: 2}
 * });
 */
function parallelLimit(tasks, callback) {
    _parallel(eachOf, tasks, callback);
}

/**
 * The same as [`parallel`]{@link module:ControlFlow.parallel} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name parallelLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.parallel]{@link module:ControlFlow.parallel}
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 */
function parallelLimit$1(tasks, limit, callback) {
    _parallel(_eachOfLimit(limit), tasks, callback);
}

/**
 * A queue of tasks for the worker function to complete.
 * @typedef {Object} QueueObject
 * @memberOf module:ControlFlow
 * @property {Function} length - a function returning the number of items
 * waiting to be processed. Invoke with `queue.length()`.
 * @property {boolean} started - a boolean indicating whether or not any
 * items have been pushed and processed by the queue.
 * @property {Function} running - a function returning the number of items
 * currently being processed. Invoke with `queue.running()`.
 * @property {Function} workersList - a function returning the array of items
 * currently being processed. Invoke with `queue.workersList()`.
 * @property {Function} idle - a function returning false if there are items
 * waiting or being processed, or true if not. Invoke with `queue.idle()`.
 * @property {number} concurrency - an integer for determining how many `worker`
 * functions should be run in parallel. This property can be changed after a
 * `queue` is created to alter the concurrency on-the-fly.
 * @property {Function} push - add a new task to the `queue`. Calls `callback`
 * once the `worker` has finished processing the task. Instead of a single task,
 * a `tasks` array can be submitted. The respective callback is used for every
 * task in the list. Invoke with `queue.push(task, [callback])`,
 * @property {Function} unshift - add a new task to the front of the `queue`.
 * Invoke with `queue.unshift(task, [callback])`.
 * @property {Function} remove - remove items from the queue that match a test
 * function.  The test function will be passed an object with a `data` property,
 * and a `priority` property, if this is a
 * [priorityQueue]{@link module:ControlFlow.priorityQueue} object.
 * Invoked with `queue.remove(testFn)`, where `testFn` is of the form
 * `function ({data, priority}) {}` and returns a Boolean.
 * @property {Function} saturated - a callback that is called when the number of
 * running workers hits the `concurrency` limit, and further tasks will be
 * queued.
 * @property {Function} unsaturated - a callback that is called when the number
 * of running workers is less than the `concurrency` & `buffer` limits, and
 * further tasks will not be queued.
 * @property {number} buffer - A minimum threshold buffer in order to say that
 * the `queue` is `unsaturated`.
 * @property {Function} empty - a callback that is called when the last item
 * from the `queue` is given to a `worker`.
 * @property {Function} drain - a callback that is called when the last item
 * from the `queue` has returned from the `worker`.
 * @property {Function} error - a callback that is called when a task errors.
 * Has the signature `function(error, task)`.
 * @property {boolean} paused - a boolean for determining whether the queue is
 * in a paused state.
 * @property {Function} pause - a function that pauses the processing of tasks
 * until `resume()` is called. Invoke with `queue.pause()`.
 * @property {Function} resume - a function that resumes the processing of
 * queued tasks when the queue is paused. Invoke with `queue.resume()`.
 * @property {Function} kill - a function that removes the `drain` callback and
 * empties remaining tasks from the queue forcing it to go idle. No more tasks
 * should be pushed to the queue after calling this function. Invoke with `queue.kill()`.
 */

/**
 * Creates a `queue` object with the specified `concurrency`. Tasks added to the
 * `queue` are processed in parallel (up to the `concurrency` limit). If all
 * `worker`s are in progress, the task is queued until one becomes available.
 * Once a `worker` completes a `task`, that `task`'s callback is called.
 *
 * @name queue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`. Invoked with (task, callback).
 * @param {number} [concurrency=1] - An `integer` for determining how many
 * `worker` functions should be run in parallel.  If omitted, the concurrency
 * defaults to `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A queue object to manage the tasks. Callbacks can
 * attached as certain properties to listen for specific events during the
 * lifecycle of the queue.
 * @example
 *
 * // create a queue object with concurrency 2
 * var q = async.queue(function(task, callback) {
 *     console.log('hello ' + task.name);
 *     callback();
 * }, 2);
 *
 * // assign a callback
 * q.drain = function() {
 *     console.log('all items have been processed');
 * };
 *
 * // add some items to the queue
 * q.push({name: 'foo'}, function(err) {
 *     console.log('finished processing foo');
 * });
 * q.push({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 *
 * // add some items to the queue (batch-wise)
 * q.push([{name: 'baz'},{name: 'bay'},{name: 'bax'}], function(err) {
 *     console.log('finished processing item');
 * });
 *
 * // add some items to the front of the queue
 * q.unshift({name: 'bar'}, function (err) {
 *     console.log('finished processing bar');
 * });
 */
var queue$1 = function (worker, concurrency) {
    var _worker = wrapAsync(worker);
    return queue(function (items, cb) {
        _worker(items[0], cb);
    }, concurrency, 1);
};

/**
 * The same as [async.queue]{@link module:ControlFlow.queue} only tasks are assigned a priority and
 * completed in ascending priority order.
 *
 * @name priorityQueue
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.queue]{@link module:ControlFlow.queue}
 * @category Control Flow
 * @param {AsyncFunction} worker - An async function for processing a queued task.
 * If you want to handle errors from an individual task, pass a callback to
 * `q.push()`.
 * Invoked with (task, callback).
 * @param {number} concurrency - An `integer` for determining how many `worker`
 * functions should be run in parallel.  If omitted, the concurrency defaults to
 * `1`.  If the concurrency is `0`, an error is thrown.
 * @returns {module:ControlFlow.QueueObject} A priorityQueue object to manage the tasks. There are two
 * differences between `queue` and `priorityQueue` objects:
 * * `push(task, priority, [callback])` - `priority` should be a number. If an
 *   array of `tasks` is given, all tasks will be assigned the same priority.
 * * The `unshift` method was removed.
 */
var priorityQueue = function(worker, concurrency) {
    // Start with a normal queue
    var q = queue$1(worker, concurrency);

    // Override push to accept second parameter representing priority
    q.push = function(data, priority, callback) {
        if (callback == null) callback = noop;
        if (typeof callback !== 'function') {
            throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!isArray(data)) {
            data = [data];
        }
        if (data.length === 0) {
            // call drain immediately if there are no tasks
            return setImmediate$1(function() {
                q.drain();
            });
        }

        priority = priority || 0;
        var nextNode = q._tasks.head;
        while (nextNode && priority >= nextNode.priority) {
            nextNode = nextNode.next;
        }

        for (var i = 0, l = data.length; i < l; i++) {
            var item = {
                data: data[i],
                priority: priority,
                callback: callback
            };

            if (nextNode) {
                q._tasks.insertBefore(nextNode, item);
            } else {
                q._tasks.push(item);
            }
        }
        setImmediate$1(q.process);
    };

    // Remove unshift function
    delete q.unshift;

    return q;
};

/**
 * Runs the `tasks` array of functions in parallel, without waiting until the
 * previous function has completed. Once any of the `tasks` complete or pass an
 * error to its callback, the main `callback` is immediately called. It's
 * equivalent to `Promise.race()`.
 *
 * @name race
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array containing [async functions]{@link AsyncFunction}
 * to run. Each function can complete with an optional `result` value.
 * @param {Function} callback - A callback to run once any of the functions have
 * completed. This function gets an error or result from the first function that
 * completed. Invoked with (err, result).
 * @returns undefined
 * @example
 *
 * async.race([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // main callback
 * function(err, result) {
 *     // the result will be equal to 'two' as it finishes earlier
 * });
 */
function race(tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new TypeError('First argument to race must be an array of functions'));
    if (!tasks.length) return callback();
    for (var i = 0, l = tasks.length; i < l; i++) {
        wrapAsync(tasks[i])(callback);
    }
}

/**
 * Same as [`reduce`]{@link module:Collections.reduce}, only operates on `array` in reverse order.
 *
 * @name reduceRight
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reduce]{@link module:Collections.reduce}
 * @alias foldr
 * @category Collection
 * @param {Array} array - A collection to iterate over.
 * @param {*} memo - The initial state of the reduction.
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * array to produce the next step in the reduction.
 * The `iteratee` should complete with the next state of the reduction.
 * If the iteratee complete with an error, the reduction is stopped and the
 * main `callback` is immediately called with the error.
 * Invoked with (memo, item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the reduced value. Invoked with
 * (err, result).
 */
function reduceRight (array, memo, iteratee, callback) {
    var reversed = slice(array).reverse();
    reduce(reversed, memo, iteratee, callback);
}

/**
 * Wraps the async function in another function that always completes with a
 * result object, even when it errors.
 *
 * The result object has either the property `error` or `value`.
 *
 * @name reflect
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} fn - The async function you want to wrap
 * @returns {Function} - A function that always passes null to it's callback as
 * the error. The second argument to the callback will be an `object` with
 * either an `error` or a `value` property.
 * @example
 *
 * async.parallel([
 *     async.reflect(function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff but error ...
 *         callback('bad stuff happened');
 *     }),
 *     async.reflect(function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     })
 * ],
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = 'bad stuff happened'
 *     // results[2].value = 'two'
 * });
 */
function reflect(fn) {
    var _fn = wrapAsync(fn);
    return initialParams(function reflectOn(args, reflectCallback) {
        args.push(function callback(error, cbArg) {
            if (error) {
                reflectCallback(null, { error: error });
            } else {
                var value;
                if (arguments.length <= 2) {
                    value = cbArg;
                } else {
                    value = slice(arguments, 1);
                }
                reflectCallback(null, { value: value });
            }
        });

        return _fn.apply(this, args);
    });
}

/**
 * A helper function that wraps an array or an object of functions with `reflect`.
 *
 * @name reflectAll
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.reflect]{@link module:Utils.reflect}
 * @category Util
 * @param {Array|Object|Iterable} tasks - The collection of
 * [async functions]{@link AsyncFunction} to wrap in `async.reflect`.
 * @returns {Array} Returns an array of async functions, each wrapped in
 * `async.reflect`
 * @example
 *
 * let tasks = [
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         // do some more stuff but error ...
 *         callback(new Error('bad stuff happened'));
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ];
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results[0].value = 'one'
 *     // results[1].error = Error('bad stuff happened')
 *     // results[2].value = 'two'
 * });
 *
 * // an example using an object instead of an array
 * let tasks = {
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         callback('two');
 *     },
 *     three: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'three');
 *         }, 100);
 *     }
 * };
 *
 * async.parallel(async.reflectAll(tasks),
 * // optional callback
 * function(err, results) {
 *     // values
 *     // results.one.value = 'one'
 *     // results.two.error = 'two'
 *     // results.three.value = 'three'
 * });
 */
function reflectAll(tasks) {
    var results;
    if (isArray(tasks)) {
        results = arrayMap(tasks, reflect);
    } else {
        results = {};
        baseForOwn(tasks, function(task, key) {
            results[key] = reflect.call(this, task);
        });
    }
    return results;
}

function reject$1(eachfn, arr, iteratee, callback) {
    _filter(eachfn, arr, function(value, cb) {
        iteratee(value, function(err, v) {
            cb(err, !v);
        });
    }, callback);
}

/**
 * The opposite of [`filter`]{@link module:Collections.filter}. Removes values that pass an `async` truth test.
 *
 * @name reject
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 * @example
 *
 * async.reject(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, results) {
 *     // results now equals an array of missing files
 *     createFiles(results);
 * });
 */
var reject = doParallel(reject$1);

/**
 * The same as [`reject`]{@link module:Collections.reject} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name rejectLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var rejectLimit = doParallelLimit(reject$1);

/**
 * The same as [`reject`]{@link module:Collections.reject} but runs only a single async operation at a time.
 *
 * @name rejectSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.reject]{@link module:Collections.reject}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {Function} iteratee - An async truth test to apply to each item in
 * `coll`.
 * The should complete with a boolean value as its `result`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
var rejectSeries = doLimit(rejectLimit, 1);

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$1(value) {
  return function() {
    return value;
  };
}

/**
 * Attempts to get a successful response from `task` no more than `times` times
 * before returning an error. If the task is successful, the `callback` will be
 * passed the result of the successful task. If all attempts fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name retry
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @see [async.retryable]{@link module:ControlFlow.retryable}
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
 * object with `times` and `interval` or a number.
 * * `times` - The number of attempts to make before giving up.  The default
 *   is `5`.
 * * `interval` - The time to wait between retries, in milliseconds.  The
 *   default is `0`. The interval may also be specified as a function of the
 *   retry count (see example).
 * * `errorFilter` - An optional synchronous function that is invoked on
 *   erroneous result. If it returns `true` the retry attempts will continue;
 *   if the function returns `false` the retry flow is aborted with the current
 *   attempt's error and result being returned to the final callback.
 *   Invoked with (err).
 * * If `opts` is a number, the number specifies the number of times to retry,
 *   with the default interval of `0`.
 * @param {AsyncFunction} task - An async function to retry.
 * Invoked with (callback).
 * @param {Function} [callback] - An optional callback which is called when the
 * task has succeeded, or after the final failed attempt. It receives the `err`
 * and `result` arguments of the last attempt at completing the `task`. Invoked
 * with (err, results).
 *
 * @example
 *
 * // The `retry` function can be used as a stand-alone control flow by passing
 * // a callback, as shown below:
 *
 * // try calling apiMethod 3 times
 * async.retry(3, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 3 times, waiting 200 ms between each retry
 * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 10 times with exponential backoff
 * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
 * async.retry({
 *   times: 10,
 *   interval: function(retryCount) {
 *     return 50 * Math.pow(2, retryCount);
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod the default 5 times no delay between each retry
 * async.retry(apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod only when error condition satisfies, all other
 * // errors will abort the retry control flow and return to final callback
 * async.retry({
 *   errorFilter: function(err) {
 *     return err.message === 'Temporary error'; // only retry on a specific error
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // to retry individual methods that are not as reliable within other
 * // control flow functions, use the `retryable` wrapper:
 * async.auto({
 *     users: api.getUsers.bind(api),
 *     payments: async.retryable(3, api.getPayments.bind(api))
 * }, function(err, results) {
 *     // do something with the results
 * });
 *
 */
function retry(opts, task, callback) {
    var DEFAULT_TIMES = 5;
    var DEFAULT_INTERVAL = 0;

    var options = {
        times: DEFAULT_TIMES,
        intervalFunc: constant$1(DEFAULT_INTERVAL)
    };

    function parseTimes(acc, t) {
        if (typeof t === 'object') {
            acc.times = +t.times || DEFAULT_TIMES;

            acc.intervalFunc = typeof t.interval === 'function' ?
                t.interval :
                constant$1(+t.interval || DEFAULT_INTERVAL);

            acc.errorFilter = t.errorFilter;
        } else if (typeof t === 'number' || typeof t === 'string') {
            acc.times = +t || DEFAULT_TIMES;
        } else {
            throw new Error("Invalid arguments for async.retry");
        }
    }

    if (arguments.length < 3 && typeof opts === 'function') {
        callback = task || noop;
        task = opts;
    } else {
        parseTimes(options, opts);
        callback = callback || noop;
    }

    if (typeof task !== 'function') {
        throw new Error("Invalid arguments for async.retry");
    }

    var _task = wrapAsync(task);

    var attempt = 1;
    function retryAttempt() {
        _task(function(err) {
            if (err && attempt++ < options.times &&
                (typeof options.errorFilter != 'function' ||
                    options.errorFilter(err))) {
                setTimeout(retryAttempt, options.intervalFunc(attempt));
            } else {
                callback.apply(null, arguments);
            }
        });
    }

    retryAttempt();
}

/**
 * A close relative of [`retry`]{@link module:ControlFlow.retry}.  This method
 * wraps a task and makes it retryable, rather than immediately calling it
 * with retries.
 *
 * @name retryable
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.retry]{@link module:ControlFlow.retry}
 * @category Control Flow
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - optional
 * options, exactly the same as from `retry`
 * @param {AsyncFunction} task - the asynchronous function to wrap.
 * This function will be passed any arguments passed to the returned wrapper.
 * Invoked with (...args, callback).
 * @returns {AsyncFunction} The wrapped function, which when invoked, will
 * retry on an error, based on the parameters specified in `opts`.
 * This function will accept the same parameters as `task`.
 * @example
 *
 * async.auto({
 *     dep1: async.retryable(3, getFromFlakyService),
 *     process: ["dep1", async.retryable(3, function (results, cb) {
 *         maybeProcessData(results.dep1, cb);
 *     })]
 * }, callback);
 */
var retryable = function (opts, task) {
    if (!task) {
        task = opts;
        opts = null;
    }
    var _task = wrapAsync(task);
    return initialParams(function (args, callback) {
        function taskFn(cb) {
            _task.apply(null, args.concat(cb));
        }

        if (opts) retry(opts, taskFn, callback);
        else retry(taskFn, callback);

    });
};

/**
 * Run the functions in the `tasks` collection in series, each one running once
 * the previous function has completed. If any functions in the series pass an
 * error to its callback, no more functions are run, and `callback` is
 * immediately called with the value of the error. Otherwise, `callback`
 * receives an array of results when `tasks` have completed.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function, and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 *  results from {@link async.series}.
 *
 * **Note** that while many implementations preserve the order of object
 * properties, the [ECMAScript Language Specification](http://www.ecma-international.org/ecma-262/5.1/#sec-8.6)
 * explicitly states that
 *
 * > The mechanics and order of enumerating the properties is not specified.
 *
 * So if you rely on the order in which your series of functions are executed,
 * and want this to work on all platforms, consider using an array.
 *
 * @name series
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection containing
 * [async functions]{@link AsyncFunction} to run in series.
 * Each function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This function gets a results array (or object)
 * containing all the result arguments passed to the `task` callbacks. Invoked
 * with (err, result).
 * @example
 * async.series([
 *     function(callback) {
 *         // do some stuff ...
 *         callback(null, 'one');
 *     },
 *     function(callback) {
 *         // do some more stuff ...
 *         callback(null, 'two');
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // results is now equal to ['one', 'two']
 * });
 *
 * async.series({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback){
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equal to: {one: 1, two: 2}
 * });
 */
function series(tasks, callback) {
    _parallel(eachOfSeries, tasks, callback);
}

/**
 * Returns `true` if at least one element in the `coll` satisfies an async test.
 * If any iteratee call returns `true`, the main `callback` is immediately
 * called.
 *
 * @name some
 * @static
 * @memberOf module:Collections
 * @method
 * @alias any
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 * @example
 *
 * async.some(['file1','file2','file3'], function(filePath, callback) {
 *     fs.access(filePath, function(err) {
 *         callback(null, !err)
 *     });
 * }, function(err, result) {
 *     // if result is true then at least one of the files exists
 * });
 */
var some = doParallel(_createTester(Boolean, identity));

/**
 * The same as [`some`]{@link module:Collections.some} but runs a maximum of `limit` async operations at a time.
 *
 * @name someLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anyLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in parallel.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */
var someLimit = doParallelLimit(_createTester(Boolean, identity));

/**
 * The same as [`some`]{@link module:Collections.some} but runs only a single async operation at a time.
 *
 * @name someSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.some]{@link module:Collections.some}
 * @alias anySeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collections in series.
 * The iteratee should complete with a boolean `result` value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called as soon as any
 * iteratee returns `true`, or after all the iteratee functions have finished.
 * Result will be either `true` or `false` depending on the values of the async
 * tests. Invoked with (err, result).
 */
var someSeries = doLimit(someLimit, 1);

/**
 * Sorts a list by the results of running each `coll` value through an async
 * `iteratee`.
 *
 * @name sortBy
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a value to use as the sort criteria as
 * its `result`.
 * Invoked with (item, callback).
 * @param {Function} callback - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is the items
 * from the original `coll` sorted by the values returned by the `iteratee`
 * calls. Invoked with (err, results).
 * @example
 *
 * async.sortBy(['file1','file2','file3'], function(file, callback) {
 *     fs.stat(file, function(err, stats) {
 *         callback(err, stats.mtime);
 *     });
 * }, function(err, results) {
 *     // results is now the original array of files sorted by
 *     // modified date
 * });
 *
 * // By modifying the callback parameter the
 * // sorting order can be influenced:
 *
 * // ascending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x);
 * }, function(err,result) {
 *     // result callback
 * });
 *
 * // descending order
 * async.sortBy([1,9,3,5], function(x, callback) {
 *     callback(null, x*-1);    //<- x*-1 instead of x, turns the order around
 * }, function(err,result) {
 *     // result callback
 * });
 */
function sortBy (coll, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    map(coll, function (x, callback) {
        _iteratee(x, function (err, criteria) {
            if (err) return callback(err);
            callback(null, {value: x, criteria: criteria});
        });
    }, function (err, results) {
        if (err) return callback(err);
        callback(null, arrayMap(results.sort(comparator), baseProperty('value')));
    });

    function comparator(left, right) {
        var a = left.criteria, b = right.criteria;
        return a < b ? -1 : a > b ? 1 : 0;
    }
}

/**
 * Sets a time limit on an asynchronous function. If the function does not call
 * its callback within the specified milliseconds, it will be called with a
 * timeout error. The code property for the error object will be `'ETIMEDOUT'`.
 *
 * @name timeout
 * @static
 * @memberOf module:Utils
 * @method
 * @category Util
 * @param {AsyncFunction} asyncFn - The async function to limit in time.
 * @param {number} milliseconds - The specified time limit.
 * @param {*} [info] - Any variable you want attached (`string`, `object`, etc)
 * to timeout Error for more information..
 * @returns {AsyncFunction} Returns a wrapped function that can be used with any
 * of the control flow functions.
 * Invoke this function with the same parameters as you would `asyncFunc`.
 * @example
 *
 * function myFunction(foo, callback) {
 *     doAsyncTask(foo, function(err, data) {
 *         // handle errors
 *         if (err) return callback(err);
 *
 *         // do some stuff ...
 *
 *         // return processed data
 *         return callback(null, data);
 *     });
 * }
 *
 * var wrapped = async.timeout(myFunction, 1000);
 *
 * // call `wrapped` as you would `myFunction`
 * wrapped({ bar: 'bar' }, function(err, data) {
 *     // if `myFunction` takes < 1000 ms to execute, `err`
 *     // and `data` will have their expected values
 *
 *     // else `err` will be an Error with the code 'ETIMEDOUT'
 * });
 */
function timeout(asyncFn, milliseconds, info) {
    var fn = wrapAsync(asyncFn);

    return initialParams(function (args, callback) {
        var timedOut = false;
        var timer;

        function timeoutCallback() {
            var name = asyncFn.name || 'anonymous';
            var error  = new Error('Callback function "' + name + '" timed out.');
            error.code = 'ETIMEDOUT';
            if (info) {
                error.info = info;
            }
            timedOut = true;
            callback(error);
        }

        args.push(function () {
            if (!timedOut) {
                callback.apply(null, arguments);
                clearTimeout(timer);
            }
        });

        // setup timer and call original function
        timer = setTimeout(timeoutCallback, milliseconds);
        fn.apply(null, args);
    });
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;
var nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

/**
 * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name timesLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} count - The number of times to run the function.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see [async.map]{@link module:Collections.map}.
 */
function timeLimit(count, limit, iteratee, callback) {
    var _iteratee = wrapAsync(iteratee);
    mapLimit(baseRange(0, count, 1), limit, _iteratee, callback);
}

/**
 * Calls the `iteratee` function `n` times, and accumulates results in the same
 * manner you would use with [map]{@link module:Collections.map}.
 *
 * @name times
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.map]{@link module:Collections.map}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 * @example
 *
 * // Pretend this is some complicated async factory
 * var createUser = function(id, callback) {
 *     callback(null, {
 *         id: 'user' + id
 *     });
 * };
 *
 * // generate 5 users
 * async.times(5, function(n, next) {
 *     createUser(n, function(err, user) {
 *         next(err, user);
 *     });
 * }, function(err, users) {
 *     // we should now have 5 users
 * });
 */
var times = doLimit(timeLimit, Infinity);

/**
 * The same as [times]{@link module:ControlFlow.times} but runs only a single async operation at a time.
 *
 * @name timesSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} n - The number of times to run the function.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see {@link module:Collections.map}.
 */
var timesSeries = doLimit(timeLimit, 1);

/**
 * A relative of `reduce`.  Takes an Object or Array, and iterates over each
 * element in series, each step potentially mutating an `accumulator` value.
 * The type of the accumulator defaults to the type of collection passed in.
 *
 * @name transform
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {*} [accumulator] - The initial state of the transform.  If omitted,
 * it will default to an empty Object or Array, depending on the type of `coll`
 * @param {AsyncFunction} iteratee - A function applied to each item in the
 * collection that potentially modifies the accumulator.
 * Invoked with (accumulator, item, key, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result is the transformed accumulator.
 * Invoked with (err, result).
 * @example
 *
 * async.transform([1,2,3], function(acc, item, index, callback) {
 *     // pointless async:
 *     process.nextTick(function() {
 *         acc.push(item * 2)
 *         callback(null)
 *     });
 * }, function(err, result) {
 *     // result is now equal to [2, 4, 6]
 * });
 *
 * @example
 *
 * async.transform({a: 1, b: 2, c: 3}, function (obj, val, key, callback) {
 *     setImmediate(function () {
 *         obj[key] = val * 2;
 *         callback();
 *     })
 * }, function (err, result) {
 *     // result is equal to {a: 2, b: 4, c: 6}
 * })
 */
function transform (coll, accumulator, iteratee, callback) {
    if (arguments.length <= 3) {
        callback = iteratee;
        iteratee = accumulator;
        accumulator = isArray(coll) ? [] : {};
    }
    callback = once(callback || noop);
    var _iteratee = wrapAsync(iteratee);

    eachOf(coll, function(v, k, cb) {
        _iteratee(accumulator, v, k, cb);
    }, function(err) {
        callback(err, accumulator);
    });
}

/**
 * It runs each task in series but stops whenever any of the functions were
 * successful. If one of the tasks were successful, the `callback` will be
 * passed the result of the successful task. If all tasks fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name tryEach
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection containing functions to
 * run, each function is passed a `callback(err, result)` it must call on
 * completion with an error `err` (which can be `null`) and an optional `result`
 * value.
 * @param {Function} [callback] - An optional callback which is called when one
 * of the tasks has succeeded, or all have failed. It receives the `err` and
 * `result` arguments of the last attempt at completing the `task`. Invoked with
 * (err, results).
 * @example
 * async.tryEach([
 *     function getDataFromFirstWebsite(callback) {
 *         // Try getting the data from the first website
 *         callback(err, data);
 *     },
 *     function getDataFromSecondWebsite(callback) {
 *         // First website failed,
 *         // Try getting the data from the backup website
 *         callback(err, data);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     Now do something with the data.
 * });
 *
 */
function tryEach(tasks, callback) {
    var error = null;
    var result;
    callback = callback || noop;
    eachSeries(tasks, function(task, callback) {
        wrapAsync(task)(function (err, res/*, ...args*/) {
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            } else {
                result = res;
            }
            error = err;
            callback(!err);
        });
    }, function () {
        callback(error, result);
    });
}

/**
 * Undoes a [memoize]{@link module:Utils.memoize}d function, reverting it to the original,
 * unmemoized form. Handy for testing.
 *
 * @name unmemoize
 * @static
 * @memberOf module:Utils
 * @method
 * @see [async.memoize]{@link module:Utils.memoize}
 * @category Util
 * @param {AsyncFunction} fn - the memoized function
 * @returns {AsyncFunction} a function that calls the original unmemoized function
 */
function unmemoize(fn) {
    return function () {
        return (fn.unmemoized || fn).apply(null, arguments);
    };
}

/**
 * Repeatedly call `iteratee`, while `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs.
 *
 * @name whilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 * @returns undefined
 * @example
 *
 * var count = 0;
 * async.whilst(
 *     function() { return count < 5; },
 *     function(callback) {
 *         count++;
 *         setTimeout(function() {
 *             callback(null, count);
 *         }, 1000);
 *     },
 *     function (err, n) {
 *         // 5 seconds have passed, n = 5
 *     }
 * );
 */
function whilst(test, iteratee, callback) {
    callback = onlyOnce(callback || noop);
    var _iteratee = wrapAsync(iteratee);
    if (!test()) return callback(null);
    var next = function(err/*, ...args*/) {
        if (err) return callback(err);
        if (test()) return _iteratee(next);
        var args = slice(arguments, 1);
        callback.apply(null, [null].concat(args));
    };
    _iteratee(next);
}

/**
 * Repeatedly call `iteratee` until `test` returns `true`. Calls `callback` when
 * stopped, or an error occurs. `callback` will be passed an error and any
 * arguments passed to the final `iteratee`'s callback.
 *
 * The inverse of [whilst]{@link module:ControlFlow.whilst}.
 *
 * @name until
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {Function} test - synchronous truth test to perform before each
 * execution of `iteratee`. Invoked with ().
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */
function until(test, iteratee, callback) {
    whilst(function() {
        return !test.apply(this, arguments);
    }, iteratee, callback);
}

/**
 * Runs the `tasks` array of functions in series, each passing their results to
 * the next in the array. However, if any of the `tasks` pass an error to their
 * own callback, the next function is not executed, and the main `callback` is
 * immediately called with the error.
 *
 * @name waterfall
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
 * to run.
 * Each function should complete with any number of `result` values.
 * The `result` values will be passed as arguments, in order, to the next task.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This will be passed the results of the last task's
 * callback. Invoked with (err, [results]).
 * @returns undefined
 * @example
 *
 * async.waterfall([
 *     function(callback) {
 *         callback(null, 'one', 'two');
 *     },
 *     function(arg1, arg2, callback) {
 *         // arg1 now equals 'one' and arg2 now equals 'two'
 *         callback(null, 'three');
 *     },
 *     function(arg1, callback) {
 *         // arg1 now equals 'three'
 *         callback(null, 'done');
 *     }
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 *
 * // Or, with named functions:
 * async.waterfall([
 *     myFirstFunction,
 *     mySecondFunction,
 *     myLastFunction,
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 * function myFirstFunction(callback) {
 *     callback(null, 'one', 'two');
 * }
 * function mySecondFunction(arg1, arg2, callback) {
 *     // arg1 now equals 'one' and arg2 now equals 'two'
 *     callback(null, 'three');
 * }
 * function myLastFunction(arg1, callback) {
 *     // arg1 now equals 'three'
 *     callback(null, 'done');
 * }
 */
var waterfall = function(tasks, callback) {
    callback = once(callback || noop);
    if (!isArray(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
    if (!tasks.length) return callback();
    var taskIndex = 0;

    function nextTask(args) {
        var task = wrapAsync(tasks[taskIndex++]);
        args.push(onlyOnce(next));
        task.apply(null, args);
    }

    function next(err/*, ...args*/) {
        if (err || taskIndex === tasks.length) {
            return callback.apply(null, arguments);
        }
        nextTask(slice(arguments, 1));
    }

    nextTask([]);
};

/**
 * An "async function" in the context of Async is an asynchronous function with
 * a variable number of parameters, with the final parameter being a callback.
 * (`function (arg1, arg2, ..., callback) {}`)
 * The final callback is of the form `callback(err, results...)`, which must be
 * called once the function is completed.  The callback should be called with a
 * Error as its first argument to signal that an error occurred.
 * Otherwise, if no error occurred, it should be called with `null` as the first
 * argument, and any additional `result` arguments that may apply, to signal
 * successful completion.
 * The callback must be called exactly once, ideally on a later tick of the
 * JavaScript event loop.
 *
 * This type of function is also referred to as a "Node-style async function",
 * or a "continuation passing-style function" (CPS). Most of the methods of this
 * library are themselves CPS/Node-style async functions, or functions that
 * return CPS/Node-style async functions.
 *
 * Wherever we accept a Node-style async function, we also directly accept an
 * [ES2017 `async` function]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}.
 * In this case, the `async` function will not be passed a final callback
 * argument, and any thrown error will be used as the `err` argument of the
 * implicit callback, and the return value will be used as the `result` value.
 * (i.e. a `rejected` of the returned Promise becomes the `err` callback
 * argument, and a `resolved` value becomes the `result`.)
 *
 * Note, due to JavaScript limitations, we can only detect native `async`
 * functions and not transpilied implementations.
 * Your environment must have `async`/`await` support for this to work.
 * (e.g. Node > v7.6, or a recent version of a modern browser).
 * If you are using `async` functions through a transpiler (e.g. Babel), you
 * must still wrap the function with [asyncify]{@link module:Utils.asyncify},
 * because the `async function` will be compiled to an ordinary function that
 * returns a promise.
 *
 * @typedef {Function} AsyncFunction
 * @static
 */

/**
 * Async is a utility module which provides straight-forward, powerful functions
 * for working with asynchronous JavaScript. Although originally designed for
 * use with [Node.js](http://nodejs.org) and installable via
 * `npm install --save async`, it can also be used directly in the browser.
 * @module async
 * @see AsyncFunction
 */


/**
 * A collection of `async` functions for manipulating collections, such as
 * arrays and objects.
 * @module Collections
 */

/**
 * A collection of `async` functions for controlling the flow through a script.
 * @module ControlFlow
 */

/**
 * A collection of `async` utility functions.
 * @module Utils
 */

var index = {
    apply: apply,
    applyEach: applyEach,
    applyEachSeries: applyEachSeries,
    asyncify: asyncify,
    auto: auto,
    autoInject: autoInject,
    cargo: cargo,
    compose: compose,
    concat: concat,
    concatLimit: concatLimit,
    concatSeries: concatSeries,
    constant: constant,
    detect: detect,
    detectLimit: detectLimit,
    detectSeries: detectSeries,
    dir: dir,
    doDuring: doDuring,
    doUntil: doUntil,
    doWhilst: doWhilst,
    during: during,
    each: eachLimit,
    eachLimit: eachLimit$1,
    eachOf: eachOf,
    eachOfLimit: eachOfLimit,
    eachOfSeries: eachOfSeries,
    eachSeries: eachSeries,
    ensureAsync: ensureAsync,
    every: every,
    everyLimit: everyLimit,
    everySeries: everySeries,
    filter: filter,
    filterLimit: filterLimit,
    filterSeries: filterSeries,
    forever: forever,
    groupBy: groupBy,
    groupByLimit: groupByLimit,
    groupBySeries: groupBySeries,
    log: log,
    map: map,
    mapLimit: mapLimit,
    mapSeries: mapSeries,
    mapValues: mapValues,
    mapValuesLimit: mapValuesLimit,
    mapValuesSeries: mapValuesSeries,
    memoize: memoize,
    nextTick: nextTick,
    parallel: parallelLimit,
    parallelLimit: parallelLimit$1,
    priorityQueue: priorityQueue,
    queue: queue$1,
    race: race,
    reduce: reduce,
    reduceRight: reduceRight,
    reflect: reflect,
    reflectAll: reflectAll,
    reject: reject,
    rejectLimit: rejectLimit,
    rejectSeries: rejectSeries,
    retry: retry,
    retryable: retryable,
    seq: seq,
    series: series,
    setImmediate: setImmediate$1,
    some: some,
    someLimit: someLimit,
    someSeries: someSeries,
    sortBy: sortBy,
    timeout: timeout,
    times: times,
    timesLimit: timeLimit,
    timesSeries: timesSeries,
    transform: transform,
    tryEach: tryEach,
    unmemoize: unmemoize,
    until: until,
    waterfall: waterfall,
    whilst: whilst,

    // aliases
    all: every,
    allLimit: everyLimit,
    allSeries: everySeries,
    any: some,
    anyLimit: someLimit,
    anySeries: someSeries,
    find: detect,
    findLimit: detectLimit,
    findSeries: detectSeries,
    forEach: eachLimit,
    forEachSeries: eachSeries,
    forEachLimit: eachLimit$1,
    forEachOf: eachOf,
    forEachOfSeries: eachOfSeries,
    forEachOfLimit: eachOfLimit,
    inject: reduce,
    foldl: reduce,
    foldr: reduceRight,
    select: filter,
    selectLimit: filterLimit,
    selectSeries: filterSeries,
    wrapSync: asyncify
};

exports['default'] = index;
exports.apply = apply;
exports.applyEach = applyEach;
exports.applyEachSeries = applyEachSeries;
exports.asyncify = asyncify;
exports.auto = auto;
exports.autoInject = autoInject;
exports.cargo = cargo;
exports.compose = compose;
exports.concat = concat;
exports.concatLimit = concatLimit;
exports.concatSeries = concatSeries;
exports.constant = constant;
exports.detect = detect;
exports.detectLimit = detectLimit;
exports.detectSeries = detectSeries;
exports.dir = dir;
exports.doDuring = doDuring;
exports.doUntil = doUntil;
exports.doWhilst = doWhilst;
exports.during = during;
exports.each = eachLimit;
exports.eachLimit = eachLimit$1;
exports.eachOf = eachOf;
exports.eachOfLimit = eachOfLimit;
exports.eachOfSeries = eachOfSeries;
exports.eachSeries = eachSeries;
exports.ensureAsync = ensureAsync;
exports.every = every;
exports.everyLimit = everyLimit;
exports.everySeries = everySeries;
exports.filter = filter;
exports.filterLimit = filterLimit;
exports.filterSeries = filterSeries;
exports.forever = forever;
exports.groupBy = groupBy;
exports.groupByLimit = groupByLimit;
exports.groupBySeries = groupBySeries;
exports.log = log;
exports.map = map;
exports.mapLimit = mapLimit;
exports.mapSeries = mapSeries;
exports.mapValues = mapValues;
exports.mapValuesLimit = mapValuesLimit;
exports.mapValuesSeries = mapValuesSeries;
exports.memoize = memoize;
exports.nextTick = nextTick;
exports.parallel = parallelLimit;
exports.parallelLimit = parallelLimit$1;
exports.priorityQueue = priorityQueue;
exports.queue = queue$1;
exports.race = race;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.reflect = reflect;
exports.reflectAll = reflectAll;
exports.reject = reject;
exports.rejectLimit = rejectLimit;
exports.rejectSeries = rejectSeries;
exports.retry = retry;
exports.retryable = retryable;
exports.seq = seq;
exports.series = series;
exports.setImmediate = setImmediate$1;
exports.some = some;
exports.someLimit = someLimit;
exports.someSeries = someSeries;
exports.sortBy = sortBy;
exports.timeout = timeout;
exports.times = times;
exports.timesLimit = timeLimit;
exports.timesSeries = timesSeries;
exports.transform = transform;
exports.tryEach = tryEach;
exports.unmemoize = unmemoize;
exports.until = until;
exports.waterfall = waterfall;
exports.whilst = whilst;
exports.all = every;
exports.allLimit = everyLimit;
exports.allSeries = everySeries;
exports.any = some;
exports.anyLimit = someLimit;
exports.anySeries = someSeries;
exports.find = detect;
exports.findLimit = detectLimit;
exports.findSeries = detectSeries;
exports.forEach = eachLimit;
exports.forEachSeries = eachSeries;
exports.forEachLimit = eachLimit$1;
exports.forEachOf = eachOf;
exports.forEachOfSeries = eachOfSeries;
exports.forEachOfLimit = eachOfLimit;
exports.inject = reduce;
exports.foldl = reduce;
exports.foldr = reduceRight;
exports.select = filter;
exports.selectLimit = filterLimit;
exports.selectSeries = filterSeries;
exports.wrapSync = asyncify;

Object.defineProperty(exports, '__esModule', { value: true });

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXN5bmMvZGlzdC9hc3luYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLEVBQUUsS0FBNEQ7QUFDOUQsRUFBRSxTQUM4QztBQUNoRCxDQUFDLDRCQUE0Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLDhCQUE4QixvQkFBb0I7QUFDbEQsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQkFBa0IsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGtCQUFrQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVCQUF1QjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGdDQUFnQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsT0FBTztBQUNsQixXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLGdCQUFnQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQix3QkFBd0Isb0JBQW9CO0FBQzdFO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsNkJBQTZCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLG1DQUFtQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsV0FBVyxzQkFBc0Isd0JBQXdCLG9CQUFvQjtBQUM3RTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLEVBQUU7QUFDYixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxvQkFBb0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvQkFBb0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixtREFBbUQsb0JBQW9CO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFzRDtBQUNqRixRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxFQUFFO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EscURBQXFELDhCQUE4QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsOEJBQThCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxXQUFXLE9BQU8sb0RBQW9ELG9CQUFvQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw4Q0FBOEM7QUFDekU7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLDJCQUEyQiw4Q0FBOEM7QUFDekUsUUFBUTtBQUNSO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDLE9BQU87QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscURBQXFELCtCQUErQjtBQUNwRixhQUFhLE9BQU87QUFDcEI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtCQUErQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLFdBQVcsY0FBYztBQUN6QjtBQUNBLFdBQVcsT0FBTztBQUNsQixnREFBZ0Q7QUFDaEQ7QUFDQSxhQUFhLCtCQUErQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCO0FBQ0EsSUFBSTtBQUNKLGVBQWUsWUFBWTtBQUMzQjtBQUNBLElBQUk7QUFDSixlQUFlLFlBQVk7QUFDM0I7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsZ0NBQWdDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaUNBQWlDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0NBQXdDO0FBQ3RFLFlBQVk7QUFDWiw4QkFBOEIsa0RBQWtEO0FBQ2hGO0FBQ0EsUUFBUTtBQUNSLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMEJBQTBCLGdDQUFnQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsY0FBYztBQUN6QjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxjQUFjO0FBQ3pCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsZ0NBQWdDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsbUNBQW1DO0FBQ3RGLFlBQVksOEJBQThCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHNDQUFzQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixnQ0FBZ0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLE9BQU87QUFDbEIsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGdDQUFnQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxvQkFBb0I7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QjtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkMsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsZ0NBQWdDO0FBQ3hFO0FBQ0E7QUFDQSxrQ0FBa0Msa0NBQWtDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSx3Q0FBd0MsZ0NBQWdDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsa0NBQWtDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLFdBQVcsY0FBYztBQUN6QjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDhCQUE4QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxRQUFRO0FBQ1IsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QiwrQkFBK0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsK0JBQStCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxrQ0FBa0MsdUJBQXVCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsZ0NBQWdDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixnQ0FBZ0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsaUNBQWlDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLE9BQU87QUFDbEIsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUJBQW1CO0FBQ3RELFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0EsZ0JBQWdCO0FBQ2hCLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGlDQUFpQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QjtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsbUNBQW1DO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx5QkFBeUIsNkJBQTZCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBLDZCQUE2QixtQ0FBbUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQkFBMkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxJQUFJO0FBQ0oscUNBQXFDO0FBQ3JDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixrQ0FBa0M7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBLGVBQWUsZUFBZSxJQUFJO0FBQ2xDLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0EsYUFBYSwrQkFBK0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QjtBQUNBLElBQUk7QUFDSixXQUFXLFlBQVk7QUFDdkI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLFlBQVksWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZO0FBQ3BEO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDZCQUE2QiwrQkFBK0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0EsYUFBYSwrQkFBK0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU0sK0NBQStDO0FBQ2hFO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixnQ0FBZ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZUFBZTtBQUN0RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxxQkFBcUIsb0JBQW9CO0FBQ3pDLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSw4QkFBOEIsZ0NBQWdDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLGdDQUFnQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsZ0NBQWdDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0Esd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBLFdBQVcsU0FBUyxHQUFHLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsV0FBVyxjQUFjLFVBQVUsc0JBQXNCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLCtCQUErQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLFdBQVcsY0FBYyxVQUFVLHNCQUFzQjtBQUN6RDtBQUNBLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQW1CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLHFCQUFxQixvQkFBb0I7QUFDekM7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLElBQUk7QUFDSixvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsT0FBTztBQUNsQixXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsOEJBQThCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLFdBQVcsc0JBQXNCO0FBQ2pDLFdBQVcsY0FBYztBQUN6QjtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYjtBQUNBLGFBQWEsY0FBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwrQkFBK0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLGNBQWM7QUFDekI7QUFDQSxXQUFXLFNBQVMsNEJBQTRCLDZCQUE2QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsNkJBQTZCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxjQUFjO0FBQ3pCO0FBQ0EsV0FBVyxTQUFTLGlCQUFpQiw2QkFBNkI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwrQkFBK0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGNBQWM7QUFDekI7QUFDQSxXQUFXLFNBQVMsaUJBQWlCLDZCQUE2QjtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQkFBc0I7QUFDakMsV0FBVyxFQUFFO0FBQ2I7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLElBQUk7QUFDSiw4QkFBOEI7QUFDOUIsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxXQUFXLGNBQWM7QUFDekIsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0IsRUFBRTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdDQUFnQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU0sdUNBQXVDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrR0FBa0c7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCw0QkFBNEI7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QyxjQUFjOztBQUU1RCxDQUFDIiwiZmlsZSI6InZlbmRvcnN+Z3JpZH5saXN0fm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gIChmYWN0b3J5KChnbG9iYWwuYXN5bmMgPSBnbG9iYWwuYXN5bmMgfHwge30pKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHNsaWNlKGFycmF5TGlrZSwgc3RhcnQpIHtcbiAgICBzdGFydCA9IHN0YXJ0fDA7XG4gICAgdmFyIG5ld0xlbiA9IE1hdGgubWF4KGFycmF5TGlrZS5sZW5ndGggLSBzdGFydCwgMCk7XG4gICAgdmFyIG5ld0FyciA9IEFycmF5KG5ld0xlbik7XG4gICAgZm9yKHZhciBpZHggPSAwOyBpZHggPCBuZXdMZW47IGlkeCsrKSAge1xuICAgICAgICBuZXdBcnJbaWR4XSA9IGFycmF5TGlrZVtzdGFydCArIGlkeF07XG4gICAgfVxuICAgIHJldHVybiBuZXdBcnI7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNvbnRpbnVhdGlvbiBmdW5jdGlvbiB3aXRoIHNvbWUgYXJndW1lbnRzIGFscmVhZHkgYXBwbGllZC5cbiAqXG4gKiBVc2VmdWwgYXMgYSBzaG9ydGhhbmQgd2hlbiBjb21iaW5lZCB3aXRoIG90aGVyIGNvbnRyb2wgZmxvdyBmdW5jdGlvbnMuIEFueVxuICogYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gYXJlIGFkZGVkIHRvIHRoZSBhcmd1bWVudHNcbiAqIG9yaWdpbmFsbHkgcGFzc2VkIHRvIGFwcGx5LlxuICpcbiAqIEBuYW1lIGFwcGx5XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOlV0aWxzXG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSBUaGUgZnVuY3Rpb24geW91IHdhbnQgdG8gZXZlbnR1YWxseSBhcHBseSBhbGxcbiAqIGFyZ3VtZW50cyB0by4gSW52b2tlcyB3aXRoIChhcmd1bWVudHMuLi4pLlxuICogQHBhcmFtIHsuLi4qfSBhcmd1bWVudHMuLi4gLSBBbnkgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBhdXRvbWF0aWNhbGx5IGFwcGx5XG4gKiB3aGVuIHRoZSBjb250aW51YXRpb24gaXMgY2FsbGVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSB0aGUgcGFydGlhbGx5LWFwcGxpZWQgZnVuY3Rpb25cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gdXNpbmcgYXBwbHlcbiAqIGFzeW5jLnBhcmFsbGVsKFtcbiAqICAgICBhc3luYy5hcHBseShmcy53cml0ZUZpbGUsICd0ZXN0ZmlsZTEnLCAndGVzdDEnKSxcbiAqICAgICBhc3luYy5hcHBseShmcy53cml0ZUZpbGUsICd0ZXN0ZmlsZTInLCAndGVzdDInKVxuICogXSk7XG4gKlxuICpcbiAqIC8vIHRoZSBzYW1lIHByb2Nlc3Mgd2l0aG91dCB1c2luZyBhcHBseVxuICogYXN5bmMucGFyYWxsZWwoW1xuICogICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIGZzLndyaXRlRmlsZSgndGVzdGZpbGUxJywgJ3Rlc3QxJywgY2FsbGJhY2spO1xuICogICAgIH0sXG4gKiAgICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgZnMud3JpdGVGaWxlKCd0ZXN0ZmlsZTInLCAndGVzdDInLCBjYWxsYmFjayk7XG4gKiAgICAgfVxuICogXSk7XG4gKlxuICogLy8gSXQncyBwb3NzaWJsZSB0byBwYXNzIGFueSBudW1iZXIgb2YgYWRkaXRpb25hbCBhcmd1bWVudHMgd2hlbiBjYWxsaW5nIHRoZVxuICogLy8gY29udGludWF0aW9uOlxuICpcbiAqIG5vZGU+IHZhciBmbiA9IGFzeW5jLmFwcGx5KHN5cy5wdXRzLCAnb25lJyk7XG4gKiBub2RlPiBmbigndHdvJywgJ3RocmVlJyk7XG4gKiBvbmVcbiAqIHR3b1xuICogdGhyZWVcbiAqL1xudmFyIGFwcGx5ID0gZnVuY3Rpb24oZm4vKiwgLi4uYXJncyovKSB7XG4gICAgdmFyIGFyZ3MgPSBzbGljZShhcmd1bWVudHMsIDEpO1xuICAgIHJldHVybiBmdW5jdGlvbigvKmNhbGxBcmdzKi8pIHtcbiAgICAgICAgdmFyIGNhbGxBcmdzID0gc2xpY2UoYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KGNhbGxBcmdzKSk7XG4gICAgfTtcbn07XG5cbnZhciBpbml0aWFsUGFyYW1zID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgvKi4uLmFyZ3MsIGNhbGxiYWNrKi8pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBzbGljZShhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBhcmdzLnBvcCgpO1xuICAgICAgICBmbi5jYWxsKHRoaXMsIGFyZ3MsIGNhbGxiYWNrKTtcbiAgICB9O1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbnZhciBoYXNTZXRJbW1lZGlhdGUgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nICYmIHNldEltbWVkaWF0ZTtcbnZhciBoYXNOZXh0VGljayA9IHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcHJvY2Vzcy5uZXh0VGljayA9PT0gJ2Z1bmN0aW9uJztcblxuZnVuY3Rpb24gZmFsbGJhY2soZm4pIHtcbiAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbn1cblxuZnVuY3Rpb24gd3JhcChkZWZlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZm4vKiwgLi4uYXJncyovKSB7XG4gICAgICAgIHZhciBhcmdzID0gc2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbnZhciBfZGVmZXI7XG5cbmlmIChoYXNTZXRJbW1lZGlhdGUpIHtcbiAgICBfZGVmZXIgPSBzZXRJbW1lZGlhdGU7XG59IGVsc2UgaWYgKGhhc05leHRUaWNrKSB7XG4gICAgX2RlZmVyID0gcHJvY2Vzcy5uZXh0VGljaztcbn0gZWxzZSB7XG4gICAgX2RlZmVyID0gZmFsbGJhY2s7XG59XG5cbnZhciBzZXRJbW1lZGlhdGUkMSA9IHdyYXAoX2RlZmVyKTtcblxuLyoqXG4gKiBUYWtlIGEgc3luYyBmdW5jdGlvbiBhbmQgbWFrZSBpdCBhc3luYywgcGFzc2luZyBpdHMgcmV0dXJuIHZhbHVlIHRvIGFcbiAqIGNhbGxiYWNrLiBUaGlzIGlzIHVzZWZ1bCBmb3IgcGx1Z2dpbmcgc3luYyBmdW5jdGlvbnMgaW50byBhIHdhdGVyZmFsbCxcbiAqIHNlcmllcywgb3Igb3RoZXIgYXN5bmMgZnVuY3Rpb25zLiBBbnkgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgZ2VuZXJhdGVkXG4gKiBmdW5jdGlvbiB3aWxsIGJlIHBhc3NlZCB0byB0aGUgd3JhcHBlZCBmdW5jdGlvbiAoZXhjZXB0IGZvciB0aGUgZmluYWxcbiAqIGNhbGxiYWNrIGFyZ3VtZW50KS4gRXJyb3JzIHRocm93biB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2FsbGJhY2suXG4gKlxuICogSWYgdGhlIGZ1bmN0aW9uIHBhc3NlZCB0byBgYXN5bmNpZnlgIHJldHVybnMgYSBQcm9taXNlLCB0aGF0IHByb21pc2VzJ3NcbiAqIHJlc29sdmVkL3JlamVjdGVkIHN0YXRlIHdpbGwgYmUgdXNlZCB0byBjYWxsIHRoZSBjYWxsYmFjaywgcmF0aGVyIHRoYW4gc2ltcGx5XG4gKiB0aGUgc3luY2hyb25vdXMgcmV0dXJuIHZhbHVlLlxuICpcbiAqIFRoaXMgYWxzbyBtZWFucyB5b3UgY2FuIGFzeW5jaWZ5IEVTMjAxNyBgYXN5bmNgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAbmFtZSBhc3luY2lmeVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpVdGlsc1xuICogQG1ldGhvZFxuICogQGFsaWFzIHdyYXBTeW5jXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyAtIFRoZSBzeW5jaHJvbm91cyBmdW5jdGlvbiwgb3IgUHJvbWlzZS1yZXR1cm5pbmdcbiAqIGZ1bmN0aW9uIHRvIGNvbnZlcnQgdG8gYW4ge0BsaW5rIEFzeW5jRnVuY3Rpb259LlxuICogQHJldHVybnMge0FzeW5jRnVuY3Rpb259IEFuIGFzeW5jaHJvbm91cyB3cmFwcGVyIG9mIHRoZSBgZnVuY2AuIFRvIGJlXG4gKiBpbnZva2VkIHdpdGggYChhcmdzLi4uLCBjYWxsYmFjaylgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBwYXNzaW5nIGEgcmVndWxhciBzeW5jaHJvbm91cyBmdW5jdGlvblxuICogYXN5bmMud2F0ZXJmYWxsKFtcbiAqICAgICBhc3luYy5hcHBseShmcy5yZWFkRmlsZSwgZmlsZW5hbWUsIFwidXRmOFwiKSxcbiAqICAgICBhc3luYy5hc3luY2lmeShKU09OLnBhcnNlKSxcbiAqICAgICBmdW5jdGlvbiAoZGF0YSwgbmV4dCkge1xuICogICAgICAgICAvLyBkYXRhIGlzIHRoZSByZXN1bHQgb2YgcGFyc2luZyB0aGUgdGV4dC5cbiAqICAgICAgICAgLy8gSWYgdGhlcmUgd2FzIGEgcGFyc2luZyBlcnJvciwgaXQgd291bGQgaGF2ZSBiZWVuIGNhdWdodC5cbiAqICAgICB9XG4gKiBdLCBjYWxsYmFjayk7XG4gKlxuICogLy8gcGFzc2luZyBhIGZ1bmN0aW9uIHJldHVybmluZyBhIHByb21pc2VcbiAqIGFzeW5jLndhdGVyZmFsbChbXG4gKiAgICAgYXN5bmMuYXBwbHkoZnMucmVhZEZpbGUsIGZpbGVuYW1lLCBcInV0ZjhcIiksXG4gKiAgICAgYXN5bmMuYXN5bmNpZnkoZnVuY3Rpb24gKGNvbnRlbnRzKSB7XG4gKiAgICAgICAgIHJldHVybiBkYi5tb2RlbC5jcmVhdGUoY29udGVudHMpO1xuICogICAgIH0pLFxuICogICAgIGZ1bmN0aW9uIChtb2RlbCwgbmV4dCkge1xuICogICAgICAgICAvLyBgbW9kZWxgIGlzIHRoZSBpbnN0YW50aWF0ZWQgbW9kZWwgb2JqZWN0LlxuICogICAgICAgICAvLyBJZiB0aGVyZSB3YXMgYW4gZXJyb3IsIHRoaXMgZnVuY3Rpb24gd291bGQgYmUgc2tpcHBlZC5cbiAqICAgICB9XG4gKiBdLCBjYWxsYmFjayk7XG4gKlxuICogLy8gZXMyMDE3IGV4YW1wbGUsIHRob3VnaCBgYXN5bmNpZnlgIGlzIG5vdCBuZWVkZWQgaWYgeW91ciBKUyBlbnZpcm9ubWVudFxuICogLy8gc3VwcG9ydHMgYXN5bmMgZnVuY3Rpb25zIG91dCBvZiB0aGUgYm94XG4gKiB2YXIgcSA9IGFzeW5jLnF1ZXVlKGFzeW5jLmFzeW5jaWZ5KGFzeW5jIGZ1bmN0aW9uKGZpbGUpIHtcbiAqICAgICB2YXIgaW50ZXJtZWRpYXRlU3RlcCA9IGF3YWl0IHByb2Nlc3NGaWxlKGZpbGUpO1xuICogICAgIHJldHVybiBhd2FpdCBzb21lUHJvbWlzZShpbnRlcm1lZGlhdGVTdGVwKVxuICogfSkpO1xuICpcbiAqIHEucHVzaChmaWxlcyk7XG4gKi9cbmZ1bmN0aW9uIGFzeW5jaWZ5KGZ1bmMpIHtcbiAgICByZXR1cm4gaW5pdGlhbFBhcmFtcyhmdW5jdGlvbiAoYXJncywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiByZXN1bHQgaXMgUHJvbWlzZSBvYmplY3RcbiAgICAgICAgaWYgKGlzT2JqZWN0KHJlc3VsdCkgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXN1bHQudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGludm9rZUNhbGxiYWNrKGNhbGxiYWNrLCBudWxsLCB2YWx1ZSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICBpbnZva2VDYWxsYmFjayhjYWxsYmFjaywgZXJyLm1lc3NhZ2UgPyBlcnIgOiBuZXcgRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaW52b2tlQ2FsbGJhY2soY2FsbGJhY2ssIGVycm9yLCB2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCB2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZXRJbW1lZGlhdGUkMShyZXRocm93LCBlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJldGhyb3coZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbn1cblxudmFyIHN1cHBvcnRzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJztcblxuZnVuY3Rpb24gaXNBc3luYyhmbikge1xuICAgIHJldHVybiBzdXBwb3J0c1N5bWJvbCAmJiBmbltTeW1ib2wudG9TdHJpbmdUYWddID09PSAnQXN5bmNGdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIHdyYXBBc3luYyhhc3luY0ZuKSB7XG4gICAgcmV0dXJuIGlzQXN5bmMoYXN5bmNGbikgPyBhc3luY2lmeShhc3luY0ZuKSA6IGFzeW5jRm47XG59XG5cbmZ1bmN0aW9uIGFwcGx5RWFjaCQxKGVhY2hmbikge1xuICAgIHJldHVybiBmdW5jdGlvbihmbnMvKiwgLi4uYXJncyovKSB7XG4gICAgICAgIHZhciBhcmdzID0gc2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgdmFyIGdvID0gaW5pdGlhbFBhcmFtcyhmdW5jdGlvbihhcmdzLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIGVhY2hmbihmbnMsIGZ1bmN0aW9uIChmbiwgY2IpIHtcbiAgICAgICAgICAgICAgICB3cmFwQXN5bmMoZm4pLmFwcGx5KHRoYXQsIGFyZ3MuY29uY2F0KGNiKSk7XG4gICAgICAgICAgICB9LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBnby5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnbztcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sJDEgPSByb290LlN5bWJvbDtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnJDEgPSBTeW1ib2wkMSA/IFN5bWJvbCQxLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyQxKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnJDFdO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWckMV0gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWckMV0gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZyQxXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvJDEgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmckMSA9IG9iamVjdFByb3RvJDEudG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmckMS5jYWxsKHZhbHVlKTtcbn1cblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXSc7XG52YXIgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sJDEgPyBTeW1ib2wkMS50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXSc7XG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG52YXIgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcbnZhciBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG4vLyBBIHRlbXBvcmFyeSB2YWx1ZSB1c2VkIHRvIGlkZW50aWZ5IGlmIHRoZSBsb29wIHNob3VsZCBiZSBicm9rZW4uXG4vLyBTZWUgIzEwNjQsICMxMjkzXG52YXIgYnJlYWtMb29wID0ge307XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbmZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZm4gPT09IG51bGwpIHJldHVybjtcbiAgICAgICAgdmFyIGNhbGxGbiA9IGZuO1xuICAgICAgICBmbiA9IG51bGw7XG4gICAgICAgIGNhbGxGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cbnZhciBpdGVyYXRvclN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuXG52YXIgZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbiAoY29sbCkge1xuICAgIHJldHVybiBpdGVyYXRvclN5bWJvbCAmJiBjb2xsW2l0ZXJhdG9yU3ltYm9sXSAmJiBjb2xsW2l0ZXJhdG9yU3ltYm9sXSgpO1xufTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byQzID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkkMiA9IG9iamVjdFByb3RvJDMuaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8kMy5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkkMi5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSJDEgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSJDEgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyQxID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG52YXIgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nO1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXSc7XG52YXIgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJztcbnZhciBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXSc7XG52YXIgZnVuY1RhZyQxID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJztcbnZhciBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJztcbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcbnZhciByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJztcbnZhciBzZXRUYWcgPSAnW29iamVjdCBTZXRdJztcbnZhciBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcbnZhciB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcbnZhciBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XSc7XG52YXIgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nO1xudmFyIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJztcbnZhciBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJztcbnZhciBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJztcbnZhciB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJztcbnZhciB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nO1xudmFyIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XSc7XG52YXIgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWckMV0gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZyQxXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzJDEgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlJDEgPSBmcmVlRXhwb3J0cyQxICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMkMSA9IGZyZWVNb2R1bGUkMSAmJiBmcmVlTW9kdWxlJDEuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHMkMTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzJDEgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlJDEgJiYgZnJlZU1vZHVsZSQxLnJlcXVpcmUgJiYgZnJlZU1vZHVsZSQxLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byQyID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkkMSA9IG9iamVjdFByb3RvJDIuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkkMS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8kNSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG8kNTtcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8kNCA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5JDMgPSBvYmplY3RQcm90byQ0Lmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkkMy5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFycmF5SXRlcmF0b3IoY29sbCkge1xuICAgIHZhciBpID0gLTE7XG4gICAgdmFyIGxlbiA9IGNvbGwubGVuZ3RoO1xuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICByZXR1cm4gKytpIDwgbGVuID8ge3ZhbHVlOiBjb2xsW2ldLCBrZXk6IGl9IDogbnVsbDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVTMjAxNUl0ZXJhdG9yKGl0ZXJhdG9yKSB7XG4gICAgdmFyIGkgPSAtMTtcbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChpdGVtLmRvbmUpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgaSsrO1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiBpdGVtLnZhbHVlLCBrZXk6IGl9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JqZWN0SXRlcmF0b3Iob2JqKSB7XG4gICAgdmFyIG9rZXlzID0ga2V5cyhvYmopO1xuICAgIHZhciBpID0gLTE7XG4gICAgdmFyIGxlbiA9IG9rZXlzLmxlbmd0aDtcbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgdmFyIGtleSA9IG9rZXlzWysraV07XG4gICAgICAgIHJldHVybiBpIDwgbGVuID8ge3ZhbHVlOiBvYmpba2V5XSwga2V5OiBrZXl9IDogbnVsbDtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpdGVyYXRvcihjb2xsKSB7XG4gICAgaWYgKGlzQXJyYXlMaWtlKGNvbGwpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVBcnJheUl0ZXJhdG9yKGNvbGwpO1xuICAgIH1cblxuICAgIHZhciBpdGVyYXRvciA9IGdldEl0ZXJhdG9yKGNvbGwpO1xuICAgIHJldHVybiBpdGVyYXRvciA/IGNyZWF0ZUVTMjAxNUl0ZXJhdG9yKGl0ZXJhdG9yKSA6IGNyZWF0ZU9iamVjdEl0ZXJhdG9yKGNvbGwpO1xufVxuXG5mdW5jdGlvbiBvbmx5T25jZShmbikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGZuID09PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJDYWxsYmFjayB3YXMgYWxyZWFkeSBjYWxsZWQuXCIpO1xuICAgICAgICB2YXIgY2FsbEZuID0gZm47XG4gICAgICAgIGZuID0gbnVsbDtcbiAgICAgICAgY2FsbEZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gX2VhY2hPZkxpbWl0KGxpbWl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgICAgIGlmIChsaW1pdCA8PSAwIHx8ICFvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV4dEVsZW0gPSBpdGVyYXRvcihvYmopO1xuICAgICAgICB2YXIgZG9uZSA9IGZhbHNlO1xuICAgICAgICB2YXIgcnVubmluZyA9IDA7XG4gICAgICAgIHZhciBsb29waW5nID0gZmFsc2U7XG5cbiAgICAgICAgZnVuY3Rpb24gaXRlcmF0ZWVDYWxsYmFjayhlcnIsIHZhbHVlKSB7XG4gICAgICAgICAgICBydW5uaW5nIC09IDE7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlID09PSBicmVha0xvb3AgfHwgKGRvbmUgJiYgcnVubmluZyA8PSAwKSkge1xuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFsb29waW5nKSB7XG4gICAgICAgICAgICAgICAgcmVwbGVuaXNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXBsZW5pc2ggKCkge1xuICAgICAgICAgICAgbG9vcGluZyA9IHRydWU7XG4gICAgICAgICAgICB3aGlsZSAocnVubmluZyA8IGxpbWl0ICYmICFkb25lKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW0gPSBuZXh0RWxlbSgpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZyA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJ1bm5pbmcgKz0gMTtcbiAgICAgICAgICAgICAgICBpdGVyYXRlZShlbGVtLnZhbHVlLCBlbGVtLmtleSwgb25seU9uY2UoaXRlcmF0ZWVDYWxsYmFjaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9vcGluZyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVwbGVuaXNoKCk7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYGVhY2hPZmBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5lYWNoT2Z9IGJ1dCBydW5zIGEgbWF4aW11bSBvZiBgbGltaXRgIGFzeW5jIG9wZXJhdGlvbnMgYXQgYVxuICogdGltZS5cbiAqXG4gKiBAbmFtZSBlYWNoT2ZMaW1pdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuZWFjaE9mXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZWFjaE9mfVxuICogQGFsaWFzIGZvckVhY2hPZkxpbWl0XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtudW1iZXJ9IGxpbWl0IC0gVGhlIG1heGltdW0gbnVtYmVyIG9mIGFzeW5jIG9wZXJhdGlvbnMgYXQgYSB0aW1lLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEFuIGFzeW5jIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2hcbiAqIGl0ZW0gaW4gYGNvbGxgLiBUaGUgYGtleWAgaXMgdGhlIGl0ZW0ncyBrZXksIG9yIGluZGV4IGluIHRoZSBjYXNlIG9mIGFuXG4gKiBhcnJheS5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwga2V5LCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiBhbGxcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gSW52b2tlZCB3aXRoIChlcnIpLlxuICovXG5mdW5jdGlvbiBlYWNoT2ZMaW1pdChjb2xsLCBsaW1pdCwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgX2VhY2hPZkxpbWl0KGxpbWl0KShjb2xsLCB3cmFwQXN5bmMoaXRlcmF0ZWUpLCBjYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGRvTGltaXQoZm4sIGxpbWl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpdGVyYWJsZSwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBmbihpdGVyYWJsZSwgbGltaXQsIGl0ZXJhdGVlLCBjYWxsYmFjayk7XG4gICAgfTtcbn1cblxuLy8gZWFjaE9mIGltcGxlbWVudGF0aW9uIG9wdGltaXplZCBmb3IgYXJyYXktbGlrZXNcbmZ1bmN0aW9uIGVhY2hPZkFycmF5TGlrZShjb2xsLCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgY29tcGxldGVkID0gMCxcbiAgICAgICAgbGVuZ3RoID0gY29sbC5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpdGVyYXRvckNhbGxiYWNrKGVyciwgdmFsdWUpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfSBlbHNlIGlmICgoKytjb21wbGV0ZWQgPT09IGxlbmd0aCkgfHwgdmFsdWUgPT09IGJyZWFrTG9vcCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgaXRlcmF0ZWUoY29sbFtpbmRleF0sIGluZGV4LCBvbmx5T25jZShpdGVyYXRvckNhbGxiYWNrKSk7XG4gICAgfVxufVxuXG4vLyBhIGdlbmVyaWMgdmVyc2lvbiBvZiBlYWNoT2Ygd2hpY2ggY2FuIGhhbmRsZSBhcnJheSwgb2JqZWN0LCBhbmQgaXRlcmF0b3IgY2FzZXMuXG52YXIgZWFjaE9mR2VuZXJpYyA9IGRvTGltaXQoZWFjaE9mTGltaXQsIEluZmluaXR5KTtcblxuLyoqXG4gKiBMaWtlIFtgZWFjaGBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5lYWNofSwgZXhjZXB0IHRoYXQgaXQgcGFzc2VzIHRoZSBrZXkgKG9yIGluZGV4KSBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50XG4gKiB0byB0aGUgaXRlcmF0ZWUuXG4gKlxuICogQG5hbWUgZWFjaE9mXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAYWxpYXMgZm9yRWFjaE9mXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHNlZSBbYXN5bmMuZWFjaF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmVhY2h9XG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQSBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoXG4gKiBpdGVtIGluIGBjb2xsYC5cbiAqIFRoZSBga2V5YCBpcyB0aGUgaXRlbSdzIGtleSwgb3IgaW5kZXggaW4gdGhlIGNhc2Ugb2YgYW4gYXJyYXkuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGtleSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gYWxsXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIEludm9rZWQgd2l0aCAoZXJyKS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iaiA9IHtkZXY6IFwiL2Rldi5qc29uXCIsIHRlc3Q6IFwiL3Rlc3QuanNvblwiLCBwcm9kOiBcIi9wcm9kLmpzb25cIn07XG4gKiB2YXIgY29uZmlncyA9IHt9O1xuICpcbiAqIGFzeW5jLmZvckVhY2hPZihvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5LCBjYWxsYmFjaykge1xuICogICAgIGZzLnJlYWRGaWxlKF9fZGlybmFtZSArIHZhbHVlLCBcInV0ZjhcIiwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICogICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAqICAgICAgICAgdHJ5IHtcbiAqICAgICAgICAgICAgIGNvbmZpZ3Nba2V5XSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gKiAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAqICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlKTtcbiAqICAgICAgICAgfVxuICogICAgICAgICBjYWxsYmFjaygpO1xuICogICAgIH0pO1xuICogfSwgZnVuY3Rpb24gKGVycikge1xuICogICAgIGlmIChlcnIpIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICogICAgIC8vIGNvbmZpZ3MgaXMgbm93IGEgbWFwIG9mIEpTT04gZGF0YVxuICogICAgIGRvU29tZXRoaW5nV2l0aChjb25maWdzKTtcbiAqIH0pO1xuICovXG52YXIgZWFjaE9mID0gZnVuY3Rpb24oY29sbCwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGVhY2hPZkltcGxlbWVudGF0aW9uID0gaXNBcnJheUxpa2UoY29sbCkgPyBlYWNoT2ZBcnJheUxpa2UgOiBlYWNoT2ZHZW5lcmljO1xuICAgIGVhY2hPZkltcGxlbWVudGF0aW9uKGNvbGwsIHdyYXBBc3luYyhpdGVyYXRlZSksIGNhbGxiYWNrKTtcbn07XG5cbmZ1bmN0aW9uIGRvUGFyYWxsZWwoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG9iaiwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBmbihlYWNoT2YsIG9iaiwgd3JhcEFzeW5jKGl0ZXJhdGVlKSwgY2FsbGJhY2spO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIF9hc3luY01hcChlYWNoZm4sIGFyciwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICAgIGFyciA9IGFyciB8fCBbXTtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICB2YXIgX2l0ZXJhdGVlID0gd3JhcEFzeW5jKGl0ZXJhdGVlKTtcblxuICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh2YWx1ZSwgXywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGluZGV4ID0gY291bnRlcisrO1xuICAgICAgICBfaXRlcmF0ZWUodmFsdWUsIGZ1bmN0aW9uIChlcnIsIHYpIHtcbiAgICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdjtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHRzKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBjb2xsZWN0aW9uIG9mIHZhbHVlcyBieSBtYXBwaW5nIGVhY2ggdmFsdWUgaW4gYGNvbGxgIHRocm91Z2hcbiAqIHRoZSBgaXRlcmF0ZWVgIGZ1bmN0aW9uLiBUaGUgYGl0ZXJhdGVlYCBpcyBjYWxsZWQgd2l0aCBhbiBpdGVtIGZyb20gYGNvbGxgXG4gKiBhbmQgYSBjYWxsYmFjayBmb3Igd2hlbiBpdCBoYXMgZmluaXNoZWQgcHJvY2Vzc2luZy4gRWFjaCBvZiB0aGVzZSBjYWxsYmFja1xuICogdGFrZXMgMiBhcmd1bWVudHM6IGFuIGBlcnJvcmAsIGFuZCB0aGUgdHJhbnNmb3JtZWQgaXRlbSBmcm9tIGBjb2xsYC4gSWZcbiAqIGBpdGVyYXRlZWAgcGFzc2VzIGFuIGVycm9yIHRvIGl0cyBjYWxsYmFjaywgdGhlIG1haW4gYGNhbGxiYWNrYCAoZm9yIHRoZVxuICogYG1hcGAgZnVuY3Rpb24pIGlzIGltbWVkaWF0ZWx5IGNhbGxlZCB3aXRoIHRoZSBlcnJvci5cbiAqXG4gKiBOb3RlLCB0aGF0IHNpbmNlIHRoaXMgZnVuY3Rpb24gYXBwbGllcyB0aGUgYGl0ZXJhdGVlYCB0byBlYWNoIGl0ZW0gaW5cbiAqIHBhcmFsbGVsLCB0aGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCB0aGUgYGl0ZXJhdGVlYCBmdW5jdGlvbnMgd2lsbCBjb21wbGV0ZVxuICogaW4gb3JkZXIuIEhvd2V2ZXIsIHRoZSByZXN1bHRzIGFycmF5IHdpbGwgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4gKiBvcmlnaW5hbCBgY29sbGAuXG4gKlxuICogSWYgYG1hcGAgaXMgcGFzc2VkIGFuIE9iamVjdCwgdGhlIHJlc3VsdHMgd2lsbCBiZSBhbiBBcnJheS4gIFRoZSByZXN1bHRzXG4gKiB3aWxsIHJvdWdobHkgYmUgaW4gdGhlIG9yZGVyIG9mIHRoZSBvcmlnaW5hbCBPYmplY3RzJyBrZXlzIChidXQgdGhpcyBjYW5cbiAqIHZhcnkgYWNyb3NzIEphdmFTY3JpcHQgZW5naW5lcykuXG4gKlxuICogQG5hbWUgbWFwXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEFuIGFzeW5jIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpblxuICogYGNvbGxgLlxuICogVGhlIGl0ZXJhdGVlIHNob3VsZCBjb21wbGV0ZSB3aXRoIHRoZSB0cmFuc2Zvcm1lZCBpdGVtLlxuICogSW52b2tlZCB3aXRoIChpdGVtLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiBhbGwgYGl0ZXJhdGVlYFxuICogZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gUmVzdWx0cyBpcyBhbiBBcnJheSBvZiB0aGVcbiAqIHRyYW5zZm9ybWVkIGl0ZW1zIGZyb20gdGhlIGBjb2xsYC4gSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdHMpLlxuICogQGV4YW1wbGVcbiAqXG4gKiBhc3luYy5tYXAoWydmaWxlMScsJ2ZpbGUyJywnZmlsZTMnXSwgZnMuc3RhdCwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgLy8gcmVzdWx0cyBpcyBub3cgYW4gYXJyYXkgb2Ygc3RhdHMgZm9yIGVhY2ggZmlsZVxuICogfSk7XG4gKi9cbnZhciBtYXAgPSBkb1BhcmFsbGVsKF9hc3luY01hcCk7XG5cbi8qKlxuICogQXBwbGllcyB0aGUgcHJvdmlkZWQgYXJndW1lbnRzIHRvIGVhY2ggZnVuY3Rpb24gaW4gdGhlIGFycmF5LCBjYWxsaW5nXG4gKiBgY2FsbGJhY2tgIGFmdGVyIGFsbCBmdW5jdGlvbnMgaGF2ZSBjb21wbGV0ZWQuIElmIHlvdSBvbmx5IHByb3ZpZGUgdGhlIGZpcnN0XG4gKiBhcmd1bWVudCwgYGZuc2AsIHRoZW4gaXQgd2lsbCByZXR1cm4gYSBmdW5jdGlvbiB3aGljaCBsZXRzIHlvdSBwYXNzIGluIHRoZVxuICogYXJndW1lbnRzIGFzIGlmIGl0IHdlcmUgYSBzaW5nbGUgZnVuY3Rpb24gY2FsbC4gSWYgbW9yZSBhcmd1bWVudHMgYXJlXG4gKiBwcm92aWRlZCwgYGNhbGxiYWNrYCBpcyByZXF1aXJlZCB3aGlsZSBgYXJnc2AgaXMgc3RpbGwgb3B0aW9uYWwuXG4gKlxuICogQG5hbWUgYXBwbHlFYWNoXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gZm5zIC0gQSBjb2xsZWN0aW9uIG9mIHtAbGluayBBc3luY0Z1bmN0aW9ufXNcbiAqIHRvIGFsbCBjYWxsIHdpdGggdGhlIHNhbWUgYXJndW1lbnRzXG4gKiBAcGFyYW0gey4uLip9IFthcmdzXSAtIGFueSBudW1iZXIgb2Ygc2VwYXJhdGUgYXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlXG4gKiBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSB0aGUgZmluYWwgYXJndW1lbnQgc2hvdWxkIGJlIHRoZSBjYWxsYmFjayxcbiAqIGNhbGxlZCB3aGVuIGFsbCBmdW5jdGlvbnMgaGF2ZSBjb21wbGV0ZWQgcHJvY2Vzc2luZy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gLSBJZiBvbmx5IHRoZSBmaXJzdCBhcmd1bWVudCwgYGZuc2AsIGlzIHByb3ZpZGVkLCBpdCB3aWxsXG4gKiByZXR1cm4gYSBmdW5jdGlvbiB3aGljaCBsZXRzIHlvdSBwYXNzIGluIHRoZSBhcmd1bWVudHMgYXMgaWYgaXQgd2VyZSBhIHNpbmdsZVxuICogZnVuY3Rpb24gY2FsbC4gVGhlIHNpZ25hdHVyZSBpcyBgKC4uYXJncywgY2FsbGJhY2spYC4gSWYgaW52b2tlZCB3aXRoIGFueVxuICogYXJndW1lbnRzLCBgY2FsbGJhY2tgIGlzIHJlcXVpcmVkLlxuICogQGV4YW1wbGVcbiAqXG4gKiBhc3luYy5hcHBseUVhY2goW2VuYWJsZVNlYXJjaCwgdXBkYXRlU2NoZW1hXSwgJ2J1Y2tldCcsIGNhbGxiYWNrKTtcbiAqXG4gKiAvLyBwYXJ0aWFsIGFwcGxpY2F0aW9uIGV4YW1wbGU6XG4gKiBhc3luYy5lYWNoKFxuICogICAgIGJ1Y2tldHMsXG4gKiAgICAgYXN5bmMuYXBwbHlFYWNoKFtlbmFibGVTZWFyY2gsIHVwZGF0ZVNjaGVtYV0pLFxuICogICAgIGNhbGxiYWNrXG4gKiApO1xuICovXG52YXIgYXBwbHlFYWNoID0gYXBwbHlFYWNoJDEobWFwKTtcblxuZnVuY3Rpb24gZG9QYXJhbGxlbExpbWl0KGZuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGxpbWl0LCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGZuKF9lYWNoT2ZMaW1pdChsaW1pdCksIG9iaiwgd3JhcEFzeW5jKGl0ZXJhdGVlKSwgY2FsbGJhY2spO1xuICAgIH07XG59XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BtYXBgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMubWFwfSBidXQgcnVucyBhIG1heGltdW0gb2YgYGxpbWl0YCBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXBMaW1pdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMubWFwXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMubWFwfVxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW5cbiAqIGBjb2xsYC5cbiAqIFRoZSBpdGVyYXRlZSBzaG91bGQgY29tcGxldGUgd2l0aCB0aGUgdHJhbnNmb3JtZWQgaXRlbS5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gYWxsIGBpdGVyYXRlZWBcbiAqIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIFJlc3VsdHMgaXMgYW4gYXJyYXkgb2YgdGhlXG4gKiB0cmFuc2Zvcm1lZCBpdGVtcyBmcm9tIHRoZSBgY29sbGAuIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHRzKS5cbiAqL1xudmFyIG1hcExpbWl0ID0gZG9QYXJhbGxlbExpbWl0KF9hc3luY01hcCk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BtYXBgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMubWFwfSBidXQgcnVucyBvbmx5IGEgc2luZ2xlIGFzeW5jIG9wZXJhdGlvbiBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgbWFwU2VyaWVzXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5tYXBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5tYXB9XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEFuIGFzeW5jIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpblxuICogYGNvbGxgLlxuICogVGhlIGl0ZXJhdGVlIHNob3VsZCBjb21wbGV0ZSB3aXRoIHRoZSB0cmFuc2Zvcm1lZCBpdGVtLlxuICogSW52b2tlZCB3aXRoIChpdGVtLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiBhbGwgYGl0ZXJhdGVlYFxuICogZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gUmVzdWx0cyBpcyBhbiBhcnJheSBvZiB0aGVcbiAqIHRyYW5zZm9ybWVkIGl0ZW1zIGZyb20gdGhlIGBjb2xsYC4gSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdHMpLlxuICovXG52YXIgbWFwU2VyaWVzID0gZG9MaW1pdChtYXBMaW1pdCwgMSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BhcHBseUVhY2hgXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cuYXBwbHlFYWNofSBidXQgcnVucyBvbmx5IGEgc2luZ2xlIGFzeW5jIG9wZXJhdGlvbiBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgYXBwbHlFYWNoU2VyaWVzXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5hcHBseUVhY2hde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5hcHBseUVhY2h9XG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gZm5zIC0gQSBjb2xsZWN0aW9uIG9mIHtAbGluayBBc3luY0Z1bmN0aW9ufXMgdG8gYWxsXG4gKiBjYWxsIHdpdGggdGhlIHNhbWUgYXJndW1lbnRzXG4gKiBAcGFyYW0gey4uLip9IFthcmdzXSAtIGFueSBudW1iZXIgb2Ygc2VwYXJhdGUgYXJndW1lbnRzIHRvIHBhc3MgdG8gdGhlXG4gKiBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSB0aGUgZmluYWwgYXJndW1lbnQgc2hvdWxkIGJlIHRoZSBjYWxsYmFjayxcbiAqIGNhbGxlZCB3aGVuIGFsbCBmdW5jdGlvbnMgaGF2ZSBjb21wbGV0ZWQgcHJvY2Vzc2luZy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gLSBJZiBvbmx5IHRoZSBmaXJzdCBhcmd1bWVudCBpcyBwcm92aWRlZCwgaXQgd2lsbCByZXR1cm5cbiAqIGEgZnVuY3Rpb24gd2hpY2ggbGV0cyB5b3UgcGFzcyBpbiB0aGUgYXJndW1lbnRzIGFzIGlmIGl0IHdlcmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uIGNhbGwuXG4gKi9cbnZhciBhcHBseUVhY2hTZXJpZXMgPSBhcHBseUVhY2gkMShtYXBTZXJpZXMpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgYmFzZUZvcihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZVxuICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcbiAgICA6IGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSBiZXN0IG9yZGVyIGZvciBydW5uaW5nIHRoZSB7QGxpbmsgQXN5bmNGdW5jdGlvbn1zIGluIGB0YXNrc2AsIGJhc2VkIG9uXG4gKiB0aGVpciByZXF1aXJlbWVudHMuIEVhY2ggZnVuY3Rpb24gY2FuIG9wdGlvbmFsbHkgZGVwZW5kIG9uIG90aGVyIGZ1bmN0aW9uc1xuICogYmVpbmcgY29tcGxldGVkIGZpcnN0LCBhbmQgZWFjaCBmdW5jdGlvbiBpcyBydW4gYXMgc29vbiBhcyBpdHMgcmVxdWlyZW1lbnRzXG4gKiBhcmUgc2F0aXNmaWVkLlxuICpcbiAqIElmIGFueSBvZiB0aGUge0BsaW5rIEFzeW5jRnVuY3Rpb259cyBwYXNzIGFuIGVycm9yIHRvIHRoZWlyIGNhbGxiYWNrLCB0aGUgYGF1dG9gIHNlcXVlbmNlXG4gKiB3aWxsIHN0b3AuIEZ1cnRoZXIgdGFza3Mgd2lsbCBub3QgZXhlY3V0ZSAoc28gYW55IG90aGVyIGZ1bmN0aW9ucyBkZXBlbmRpbmdcbiAqIG9uIGl0IHdpbGwgbm90IHJ1biksIGFuZCB0aGUgbWFpbiBgY2FsbGJhY2tgIGlzIGltbWVkaWF0ZWx5IGNhbGxlZCB3aXRoIHRoZVxuICogZXJyb3IuXG4gKlxuICoge0BsaW5rIEFzeW5jRnVuY3Rpb259cyBhbHNvIHJlY2VpdmUgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc3VsdHMgb2YgZnVuY3Rpb25zIHdoaWNoXG4gKiBoYXZlIGNvbXBsZXRlZCBzbyBmYXIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LCBpZiB0aGV5IGhhdmUgZGVwZW5kZW5jaWVzLiBJZiBhXG4gKiB0YXNrIGZ1bmN0aW9uIGhhcyBubyBkZXBlbmRlbmNpZXMsIGl0IHdpbGwgb25seSBiZSBwYXNzZWQgYSBjYWxsYmFjay5cbiAqXG4gKiBAbmFtZSBhdXRvXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge09iamVjdH0gdGFza3MgLSBBbiBvYmplY3QuIEVhY2ggb2YgaXRzIHByb3BlcnRpZXMgaXMgZWl0aGVyIGFcbiAqIGZ1bmN0aW9uIG9yIGFuIGFycmF5IG9mIHJlcXVpcmVtZW50cywgd2l0aCB0aGUge0BsaW5rIEFzeW5jRnVuY3Rpb259IGl0c2VsZiB0aGUgbGFzdCBpdGVtXG4gKiBpbiB0aGUgYXJyYXkuIFRoZSBvYmplY3QncyBrZXkgb2YgYSBwcm9wZXJ0eSBzZXJ2ZXMgYXMgdGhlIG5hbWUgb2YgdGhlIHRhc2tcbiAqIGRlZmluZWQgYnkgdGhhdCBwcm9wZXJ0eSwgaS5lLiBjYW4gYmUgdXNlZCB3aGVuIHNwZWNpZnlpbmcgcmVxdWlyZW1lbnRzIGZvclxuICogb3RoZXIgdGFza3MuIFRoZSBmdW5jdGlvbiByZWNlaXZlcyBvbmUgb3IgdHdvIGFyZ3VtZW50czpcbiAqICogYSBgcmVzdWx0c2Agb2JqZWN0LCBjb250YWluaW5nIHRoZSByZXN1bHRzIG9mIHRoZSBwcmV2aW91c2x5IGV4ZWN1dGVkXG4gKiAgIGZ1bmN0aW9ucywgb25seSBwYXNzZWQgaWYgdGhlIHRhc2sgaGFzIGFueSBkZXBlbmRlbmNpZXMsXG4gKiAqIGEgYGNhbGxiYWNrKGVyciwgcmVzdWx0KWAgZnVuY3Rpb24sIHdoaWNoIG11c3QgYmUgY2FsbGVkIHdoZW4gZmluaXNoZWQsXG4gKiAgIHBhc3NpbmcgYW4gYGVycm9yYCAod2hpY2ggY2FuIGJlIGBudWxsYCkgYW5kIHRoZSByZXN1bHQgb2YgdGhlIGZ1bmN0aW9uJ3NcbiAqICAgZXhlY3V0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtjb25jdXJyZW5jeT1JbmZpbml0eV0gLSBBbiBvcHRpb25hbCBgaW50ZWdlcmAgZm9yXG4gKiBkZXRlcm1pbmluZyB0aGUgbWF4aW11bSBudW1iZXIgb2YgdGFza3MgdGhhdCBjYW4gYmUgcnVuIGluIHBhcmFsbGVsLiBCeVxuICogZGVmYXVsdCwgYXMgbWFueSBhcyBwb3NzaWJsZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBbiBvcHRpb25hbCBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiBhbGxcbiAqIHRoZSB0YXNrcyBoYXZlIGJlZW4gY29tcGxldGVkLiBJdCByZWNlaXZlcyB0aGUgYGVycmAgYXJndW1lbnQgaWYgYW55IGB0YXNrc2BcbiAqIHBhc3MgYW4gZXJyb3IgdG8gdGhlaXIgY2FsbGJhY2suIFJlc3VsdHMgYXJlIGFsd2F5cyByZXR1cm5lZDsgaG93ZXZlciwgaWYgYW5cbiAqIGVycm9yIG9jY3Vycywgbm8gZnVydGhlciBgdGFza3NgIHdpbGwgYmUgcGVyZm9ybWVkLCBhbmQgdGhlIHJlc3VsdHMgb2JqZWN0XG4gKiB3aWxsIG9ubHkgY29udGFpbiBwYXJ0aWFsIHJlc3VsdHMuIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHRzKS5cbiAqIEByZXR1cm5zIHVuZGVmaW5lZFxuICogQGV4YW1wbGVcbiAqXG4gKiBhc3luYy5hdXRvKHtcbiAqICAgICAvLyB0aGlzIGZ1bmN0aW9uIHdpbGwganVzdCBiZSBwYXNzZWQgYSBjYWxsYmFja1xuICogICAgIHJlYWREYXRhOiBhc3luYy5hcHBseShmcy5yZWFkRmlsZSwgJ2RhdGEudHh0JywgJ3V0Zi04JyksXG4gKiAgICAgc2hvd0RhdGE6IFsncmVhZERhdGEnLCBmdW5jdGlvbihyZXN1bHRzLCBjYikge1xuICogICAgICAgICAvLyByZXN1bHRzLnJlYWREYXRhIGlzIHRoZSBmaWxlJ3MgY29udGVudHNcbiAqICAgICAgICAgLy8gLi4uXG4gKiAgICAgfV1cbiAqIH0sIGNhbGxiYWNrKTtcbiAqXG4gKiBhc3luYy5hdXRvKHtcbiAqICAgICBnZXRfZGF0YTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgY29uc29sZS5sb2coJ2luIGdldF9kYXRhJyk7XG4gKiAgICAgICAgIC8vIGFzeW5jIGNvZGUgdG8gZ2V0IHNvbWUgZGF0YVxuICogICAgICAgICBjYWxsYmFjayhudWxsLCAnZGF0YScsICdjb252ZXJ0ZWQgdG8gYXJyYXknKTtcbiAqICAgICB9LFxuICogICAgIG1ha2VfZm9sZGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICBjb25zb2xlLmxvZygnaW4gbWFrZV9mb2xkZXInKTtcbiAqICAgICAgICAgLy8gYXN5bmMgY29kZSB0byBjcmVhdGUgYSBkaXJlY3RvcnkgdG8gc3RvcmUgYSBmaWxlIGluXG4gKiAgICAgICAgIC8vIHRoaXMgaXMgcnVuIGF0IHRoZSBzYW1lIHRpbWUgYXMgZ2V0dGluZyB0aGUgZGF0YVxuICogICAgICAgICBjYWxsYmFjayhudWxsLCAnZm9sZGVyJyk7XG4gKiAgICAgfSxcbiAqICAgICB3cml0ZV9maWxlOiBbJ2dldF9kYXRhJywgJ21ha2VfZm9sZGVyJywgZnVuY3Rpb24ocmVzdWx0cywgY2FsbGJhY2spIHtcbiAqICAgICAgICAgY29uc29sZS5sb2coJ2luIHdyaXRlX2ZpbGUnLCBKU09OLnN0cmluZ2lmeShyZXN1bHRzKSk7XG4gKiAgICAgICAgIC8vIG9uY2UgdGhlcmUgaXMgc29tZSBkYXRhIGFuZCB0aGUgZGlyZWN0b3J5IGV4aXN0cyxcbiAqICAgICAgICAgLy8gd3JpdGUgdGhlIGRhdGEgdG8gYSBmaWxlIGluIHRoZSBkaXJlY3RvcnlcbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ2ZpbGVuYW1lJyk7XG4gKiAgICAgfV0sXG4gKiAgICAgZW1haWxfbGluazogWyd3cml0ZV9maWxlJywgZnVuY3Rpb24ocmVzdWx0cywgY2FsbGJhY2spIHtcbiAqICAgICAgICAgY29uc29sZS5sb2coJ2luIGVtYWlsX2xpbmsnLCBKU09OLnN0cmluZ2lmeShyZXN1bHRzKSk7XG4gKiAgICAgICAgIC8vIG9uY2UgdGhlIGZpbGUgaXMgd3JpdHRlbiBsZXQncyBlbWFpbCBhIGxpbmsgdG8gaXQuLi5cbiAqICAgICAgICAgLy8gcmVzdWx0cy53cml0ZV9maWxlIGNvbnRhaW5zIHRoZSBmaWxlbmFtZSByZXR1cm5lZCBieSB3cml0ZV9maWxlLlxuICogICAgICAgICBjYWxsYmFjayhudWxsLCB7J2ZpbGUnOnJlc3VsdHMud3JpdGVfZmlsZSwgJ2VtYWlsJzondXNlckBleGFtcGxlLmNvbSd9KTtcbiAqICAgICB9XVxuICogfSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ2VyciA9ICcsIGVycik7XG4gKiAgICAgY29uc29sZS5sb2coJ3Jlc3VsdHMgPSAnLCByZXN1bHRzKTtcbiAqIH0pO1xuICovXG52YXIgYXV0byA9IGZ1bmN0aW9uICh0YXNrcywgY29uY3VycmVuY3ksIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBjb25jdXJyZW5jeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBjb25jdXJyZW5jeSBpcyBvcHRpb25hbCwgc2hpZnQgdGhlIGFyZ3MuXG4gICAgICAgIGNhbGxiYWNrID0gY29uY3VycmVuY3k7XG4gICAgICAgIGNvbmN1cnJlbmN5ID0gbnVsbDtcbiAgICB9XG4gICAgY2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgIHZhciBrZXlzJCQxID0ga2V5cyh0YXNrcyk7XG4gICAgdmFyIG51bVRhc2tzID0ga2V5cyQkMS5sZW5ndGg7XG4gICAgaWYgKCFudW1UYXNrcykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgfVxuICAgIGlmICghY29uY3VycmVuY3kpIHtcbiAgICAgICAgY29uY3VycmVuY3kgPSBudW1UYXNrcztcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0cyA9IHt9O1xuICAgIHZhciBydW5uaW5nVGFza3MgPSAwO1xuICAgIHZhciBoYXNFcnJvciA9IGZhbHNlO1xuXG4gICAgdmFyIGxpc3RlbmVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICB2YXIgcmVhZHlUYXNrcyA9IFtdO1xuXG4gICAgLy8gZm9yIGN5Y2xlIGRldGVjdGlvbjpcbiAgICB2YXIgcmVhZHlUb0NoZWNrID0gW107IC8vIHRhc2tzIHRoYXQgaGF2ZSBiZWVuIGlkZW50aWZpZWQgYXMgcmVhY2hhYmxlXG4gICAgLy8gd2l0aG91dCB0aGUgcG9zc2liaWxpdHkgb2YgcmV0dXJuaW5nIHRvIGFuIGFuY2VzdG9yIHRhc2tcbiAgICB2YXIgdW5jaGVja2VkRGVwZW5kZW5jaWVzID0ge307XG5cbiAgICBiYXNlRm9yT3duKHRhc2tzLCBmdW5jdGlvbiAodGFzaywga2V5KSB7XG4gICAgICAgIGlmICghaXNBcnJheSh0YXNrKSkge1xuICAgICAgICAgICAgLy8gbm8gZGVwZW5kZW5jaWVzXG4gICAgICAgICAgICBlbnF1ZXVlVGFzayhrZXksIFt0YXNrXSk7XG4gICAgICAgICAgICByZWFkeVRvQ2hlY2sucHVzaChrZXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGRlcGVuZGVuY2llcyA9IHRhc2suc2xpY2UoMCwgdGFzay5sZW5ndGggLSAxKTtcbiAgICAgICAgdmFyIHJlbWFpbmluZ0RlcGVuZGVuY2llcyA9IGRlcGVuZGVuY2llcy5sZW5ndGg7XG4gICAgICAgIGlmIChyZW1haW5pbmdEZXBlbmRlbmNpZXMgPT09IDApIHtcbiAgICAgICAgICAgIGVucXVldWVUYXNrKGtleSwgdGFzayk7XG4gICAgICAgICAgICByZWFkeVRvQ2hlY2sucHVzaChrZXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVuY2hlY2tlZERlcGVuZGVuY2llc1trZXldID0gcmVtYWluaW5nRGVwZW5kZW5jaWVzO1xuXG4gICAgICAgIGFycmF5RWFjaChkZXBlbmRlbmNpZXMsIGZ1bmN0aW9uIChkZXBlbmRlbmN5TmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0YXNrc1tkZXBlbmRlbmN5TmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FzeW5jLmF1dG8gdGFzayBgJyArIGtleSArXG4gICAgICAgICAgICAgICAgICAgICdgIGhhcyBhIG5vbi1leGlzdGVudCBkZXBlbmRlbmN5IGAnICtcbiAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jeU5hbWUgKyAnYCBpbiAnICtcbiAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzLmpvaW4oJywgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkTGlzdGVuZXIoZGVwZW5kZW5jeU5hbWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZW1haW5pbmdEZXBlbmRlbmNpZXMtLTtcbiAgICAgICAgICAgICAgICBpZiAocmVtYWluaW5nRGVwZW5kZW5jaWVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVucXVldWVUYXNrKGtleSwgdGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY2hlY2tGb3JEZWFkbG9ja3MoKTtcbiAgICBwcm9jZXNzUXVldWUoKTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWVUYXNrKGtleSwgdGFzaykge1xuICAgICAgICByZWFkeVRhc2tzLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcnVuVGFzayhrZXksIHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzUXVldWUoKSB7XG4gICAgICAgIGlmIChyZWFkeVRhc2tzLmxlbmd0aCA9PT0gMCAmJiBydW5uaW5nVGFza3MgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCByZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZShyZWFkeVRhc2tzLmxlbmd0aCAmJiBydW5uaW5nVGFza3MgPCBjb25jdXJyZW5jeSkge1xuICAgICAgICAgICAgdmFyIHJ1biA9IHJlYWR5VGFza3Muc2hpZnQoKTtcbiAgICAgICAgICAgIHJ1bigpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0YXNrTmFtZSwgZm4pIHtcbiAgICAgICAgdmFyIHRhc2tMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdGFza05hbWVdO1xuICAgICAgICBpZiAoIXRhc2tMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRhc2tMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdGFza05hbWVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrTGlzdGVuZXJzLnB1c2goZm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRhc2tDb21wbGV0ZSh0YXNrTmFtZSkge1xuICAgICAgICB2YXIgdGFza0xpc3RlbmVycyA9IGxpc3RlbmVyc1t0YXNrTmFtZV0gfHwgW107XG4gICAgICAgIGFycmF5RWFjaCh0YXNrTGlzdGVuZXJzLCBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIGZuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9jZXNzUXVldWUoKTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHJ1blRhc2soa2V5LCB0YXNrKSB7XG4gICAgICAgIGlmIChoYXNFcnJvcikgcmV0dXJuO1xuXG4gICAgICAgIHZhciB0YXNrQ2FsbGJhY2sgPSBvbmx5T25jZShmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xuICAgICAgICAgICAgcnVubmluZ1Rhc2tzLS07XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBzbGljZShhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHZhciBzYWZlUmVzdWx0cyA9IHt9O1xuICAgICAgICAgICAgICAgIGJhc2VGb3JPd24ocmVzdWx0cywgZnVuY3Rpb24odmFsLCBya2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHNhZmVSZXN1bHRzW3JrZXldID0gdmFsO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNhZmVSZXN1bHRzW2tleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIHNhZmVSZXN1bHRzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0c1trZXldID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHRhc2tDb21wbGV0ZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBydW5uaW5nVGFza3MrKztcbiAgICAgICAgdmFyIHRhc2tGbiA9IHdyYXBBc3luYyh0YXNrW3Rhc2subGVuZ3RoIC0gMV0pO1xuICAgICAgICBpZiAodGFzay5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0YXNrRm4ocmVzdWx0cywgdGFza0NhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tGbih0YXNrQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JEZWFkbG9ja3MoKSB7XG4gICAgICAgIC8vIEthaG4ncyBhbGdvcml0aG1cbiAgICAgICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVG9wb2xvZ2ljYWxfc29ydGluZyNLYWhuLjI3c19hbGdvcml0aG1cbiAgICAgICAgLy8gaHR0cDovL2Nvbm5hbGxlLmJsb2dzcG90LmNvbS8yMDEzLzEwL3RvcG9sb2dpY2FsLXNvcnRpbmdrYWhuLWFsZ29yaXRobS5odG1sXG4gICAgICAgIHZhciBjdXJyZW50VGFzaztcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB3aGlsZSAocmVhZHlUb0NoZWNrLmxlbmd0aCkge1xuICAgICAgICAgICAgY3VycmVudFRhc2sgPSByZWFkeVRvQ2hlY2sucG9wKCk7XG4gICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICBhcnJheUVhY2goZ2V0RGVwZW5kZW50cyhjdXJyZW50VGFzayksIGZ1bmN0aW9uIChkZXBlbmRlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoLS11bmNoZWNrZWREZXBlbmRlbmNpZXNbZGVwZW5kZW50XSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZWFkeVRvQ2hlY2sucHVzaChkZXBlbmRlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50ZXIgIT09IG51bVRhc2tzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ2FzeW5jLmF1dG8gY2Fubm90IGV4ZWN1dGUgdGFza3MgZHVlIHRvIGEgcmVjdXJzaXZlIGRlcGVuZGVuY3knXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGVwZW5kZW50cyh0YXNrTmFtZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGJhc2VGb3JPd24odGFza3MsIGZ1bmN0aW9uICh0YXNrLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KHRhc2spICYmIGJhc2VJbmRleE9mKHRhc2ssIHRhc2tOYW1lLCAwKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCQxID8gU3ltYm9sJDEucHJvdG90eXBlIDogdW5kZWZpbmVkO1xudmFyIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBhcnJheU1hcCh2YWx1ZSwgYmFzZVRvU3RyaW5nKSArICcnO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICB9XG4gIHZhciByZXN1bHQgPSAodmFsdWUgKyAnJyk7XG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiAobGVuZ3RoICsgc3RhcnQpO1xuICB9XG4gIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENhc3RzIGBhcnJheWAgdG8gYSBzbGljZSBpZiBpdCdzIG5lZWRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHNsaWNlLlxuICovXG5mdW5jdGlvbiBjYXN0U2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQ7XG4gIHJldHVybiAoIXN0YXJ0ICYmIGVuZCA+PSBsZW5ndGgpID8gYXJyYXkgOiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpO1xufVxuXG4vKipcbiAqIFVzZWQgYnkgYF8udHJpbWAgYW5kIGBfLnRyaW1FbmRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgc3RyaW5nIHN5bWJvbFxuICogdGhhdCBpcyBub3QgZm91bmQgaW4gdGhlIGNoYXJhY3RlciBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzdHJTeW1ib2xzIFRoZSBzdHJpbmcgc3ltYm9scyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtBcnJheX0gY2hyU3ltYm9scyBUaGUgY2hhcmFjdGVyIHN5bWJvbHMgdG8gZmluZC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IHVubWF0Y2hlZCBzdHJpbmcgc3ltYm9sLlxuICovXG5mdW5jdGlvbiBjaGFyc0VuZEluZGV4KHN0clN5bWJvbHMsIGNoclN5bWJvbHMpIHtcbiAgdmFyIGluZGV4ID0gc3RyU3ltYm9scy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgYmFzZUluZGV4T2YoY2hyU3ltYm9scywgc3RyU3ltYm9sc1tpbmRleF0sIDApID4gLTEpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltU3RhcnRgIHRvIGdldCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IHN0cmluZyBzeW1ib2xcbiAqIHRoYXQgaXMgbm90IGZvdW5kIGluIHRoZSBjaGFyYWN0ZXIgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc3RyU3ltYm9scyBUaGUgc3RyaW5nIHN5bWJvbHMgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGNoclN5bWJvbHMgVGhlIGNoYXJhY3RlciBzeW1ib2xzIHRvIGZpbmQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgdW5tYXRjaGVkIHN0cmluZyBzeW1ib2wuXG4gKi9cbmZ1bmN0aW9uIGNoYXJzU3RhcnRJbmRleChzdHJTeW1ib2xzLCBjaHJTeW1ib2xzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc3RyU3ltYm9scy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGggJiYgYmFzZUluZGV4T2YoY2hyU3ltYm9scywgc3RyU3ltYm9sc1tpbmRleF0sIDApID4gLTEpIHt9XG4gIHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBBU0NJSSBgc3RyaW5nYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXNjaWlUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnNwbGl0KCcnKTtcbn1cblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZic7XG52YXIgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2Zic7XG52YXIgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnO1xudmFyIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZic7XG52YXIgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlO1xudmFyIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBzdHJpbmdzIHdpdGggW3plcm8td2lkdGggam9pbmVycyBvciBjb2RlIHBvaW50cyBmcm9tIHRoZSBhc3RyYWwgcGxhbmVzXShodHRwOi8vZWV2LmVlL2Jsb2cvMjAxNS8wOS8xMi9kYXJrLWNvcm5lcnMtb2YtdW5pY29kZS8pLiAqL1xudmFyIHJlSGFzVW5pY29kZSA9IFJlZ0V4cCgnWycgKyByc1pXSiArIHJzQXN0cmFsUmFuZ2UgICsgcnNDb21ib1JhbmdlICsgcnNWYXJSYW5nZSArICddJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBzdHJpbmdgIGNvbnRhaW5zIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSBzeW1ib2wgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZShzdHJpbmcpIHtcbiAgcmV0dXJuIHJlSGFzVW5pY29kZS50ZXN0KHN0cmluZyk7XG59XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlJDEgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZic7XG52YXIgcnNDb21ib01hcmtzUmFuZ2UkMSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJztcbnZhciByZUNvbWJvSGFsZk1hcmtzUmFuZ2UkMSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJztcbnZhciByc0NvbWJvU3ltYm9sc1JhbmdlJDEgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZic7XG52YXIgcnNDb21ib1JhbmdlJDEgPSByc0NvbWJvTWFya3NSYW5nZSQxICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlJDEgKyByc0NvbWJvU3ltYm9sc1JhbmdlJDE7XG52YXIgcnNWYXJSYW5nZSQxID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UkMSArICddJztcbnZhciByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlJDEgKyAnXSc7XG52YXIgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXSc7XG52YXIgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJztcbnZhciByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlJDEgKyAnXSc7XG52YXIgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JztcbnZhciByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXSc7XG52YXIgcnNaV0okMSA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPyc7XG52YXIgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlJDEgKyAnXT8nO1xudmFyIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0okMSArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJztcbnZhciByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW47XG52YXIgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlVG9BcnJheShzdHJpbmcpXG4gICAgOiBhc2NpaVRvQXJyYXkoc3RyaW5nKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICogYW5kIGB1bmRlZmluZWRgIHZhbHVlcy4gVGhlIHNpZ24gb2YgYC0wYCBpcyBwcmVzZXJ2ZWQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKipcbiAqIFJlbW92ZXMgbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSBvciBzcGVjaWZpZWQgY2hhcmFjdGVycyBmcm9tIGBzdHJpbmdgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NoYXJzPXdoaXRlc3BhY2VdIFRoZSBjaGFyYWN0ZXJzIHRvIHRyaW0uXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgdHJpbW1lZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udHJpbSgnICBhYmMgICcpO1xuICogLy8gPT4gJ2FiYydcbiAqXG4gKiBfLnRyaW0oJy1fLWFiYy1fLScsICdfLScpO1xuICogLy8gPT4gJ2FiYydcbiAqXG4gKiBfLm1hcChbJyAgZm9vICAnLCAnICBiYXIgICddLCBfLnRyaW0pO1xuICogLy8gPT4gWydmb28nLCAnYmFyJ11cbiAqL1xuZnVuY3Rpb24gdHJpbShzdHJpbmcsIGNoYXJzLCBndWFyZCkge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICBpZiAoc3RyaW5nICYmIChndWFyZCB8fCBjaGFycyA9PT0gdW5kZWZpbmVkKSkge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgfVxuICBpZiAoIXN0cmluZyB8fCAhKGNoYXJzID0gYmFzZVRvU3RyaW5nKGNoYXJzKSkpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIHZhciBzdHJTeW1ib2xzID0gc3RyaW5nVG9BcnJheShzdHJpbmcpLFxuICAgICAgY2hyU3ltYm9scyA9IHN0cmluZ1RvQXJyYXkoY2hhcnMpLFxuICAgICAgc3RhcnQgPSBjaGFyc1N0YXJ0SW5kZXgoc3RyU3ltYm9scywgY2hyU3ltYm9scyksXG4gICAgICBlbmQgPSBjaGFyc0VuZEluZGV4KHN0clN5bWJvbHMsIGNoclN5bWJvbHMpICsgMTtcblxuICByZXR1cm4gY2FzdFNsaWNlKHN0clN5bWJvbHMsIHN0YXJ0LCBlbmQpLmpvaW4oJycpO1xufVxuXG52YXIgRk5fQVJHUyA9IC9eKD86YXN5bmNcXHMrKT8oZnVuY3Rpb24pP1xccypbXlxcKF0qXFwoXFxzKihbXlxcKV0qKVxcKS9tO1xudmFyIEZOX0FSR19TUExJVCA9IC8sLztcbnZhciBGTl9BUkcgPSAvKD0uKyk/KFxccyopJC87XG52YXIgU1RSSVBfQ09NTUVOVFMgPSAvKChcXC9cXC8uKiQpfChcXC9cXCpbXFxzXFxTXSo/XFwqXFwvKSkvbWc7XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1zKGZ1bmMpIHtcbiAgICBmdW5jID0gZnVuYy50b1N0cmluZygpLnJlcGxhY2UoU1RSSVBfQ09NTUVOVFMsICcnKTtcbiAgICBmdW5jID0gZnVuYy5tYXRjaChGTl9BUkdTKVsyXS5yZXBsYWNlKCcgJywgJycpO1xuICAgIGZ1bmMgPSBmdW5jID8gZnVuYy5zcGxpdChGTl9BUkdfU1BMSVQpIDogW107XG4gICAgZnVuYyA9IGZ1bmMubWFwKGZ1bmN0aW9uIChhcmcpe1xuICAgICAgICByZXR1cm4gdHJpbShhcmcucmVwbGFjZShGTl9BUkcsICcnKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmM7XG59XG5cbi8qKlxuICogQSBkZXBlbmRlbmN5LWluamVjdGVkIHZlcnNpb24gb2YgdGhlIFthc3luYy5hdXRvXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cuYXV0b30gZnVuY3Rpb24uIERlcGVuZGVudFxuICogdGFza3MgYXJlIHNwZWNpZmllZCBhcyBwYXJhbWV0ZXJzIHRvIHRoZSBmdW5jdGlvbiwgYWZ0ZXIgdGhlIHVzdWFsIGNhbGxiYWNrXG4gKiBwYXJhbWV0ZXIsIHdpdGggdGhlIHBhcmFtZXRlciBuYW1lcyBtYXRjaGluZyB0aGUgbmFtZXMgb2YgdGhlIHRhc2tzIGl0XG4gKiBkZXBlbmRzIG9uLiBUaGlzIGNhbiBwcm92aWRlIGV2ZW4gbW9yZSByZWFkYWJsZSB0YXNrIGdyYXBocyB3aGljaCBjYW4gYmVcbiAqIGVhc2llciB0byBtYWludGFpbi5cbiAqXG4gKiBJZiBhIGZpbmFsIGNhbGxiYWNrIGlzIHNwZWNpZmllZCwgdGhlIHRhc2sgcmVzdWx0cyBhcmUgc2ltaWxhcmx5IGluamVjdGVkLFxuICogc3BlY2lmaWVkIGFzIG5hbWVkIHBhcmFtZXRlcnMgYWZ0ZXIgdGhlIGluaXRpYWwgZXJyb3IgcGFyYW1ldGVyLlxuICpcbiAqIFRoZSBhdXRvSW5qZWN0IGZ1bmN0aW9uIGlzIHB1cmVseSBzeW50YWN0aWMgc3VnYXIgYW5kIGl0cyBzZW1hbnRpY3MgYXJlXG4gKiBvdGhlcndpc2UgZXF1aXZhbGVudCB0byBbYXN5bmMuYXV0b117QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LmF1dG99LlxuICpcbiAqIEBuYW1lIGF1dG9JbmplY3RcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmF1dG9de0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5hdXRvfVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtPYmplY3R9IHRhc2tzIC0gQW4gb2JqZWN0LCBlYWNoIG9mIHdob3NlIHByb3BlcnRpZXMgaXMgYW4ge0BsaW5rIEFzeW5jRnVuY3Rpb259IG9mXG4gKiB0aGUgZm9ybSAnZnVuYyhbZGVwZW5kZW5jaWVzLi4uXSwgY2FsbGJhY2spLiBUaGUgb2JqZWN0J3Mga2V5IG9mIGEgcHJvcGVydHlcbiAqIHNlcnZlcyBhcyB0aGUgbmFtZSBvZiB0aGUgdGFzayBkZWZpbmVkIGJ5IHRoYXQgcHJvcGVydHksIGkuZS4gY2FuIGJlIHVzZWRcbiAqIHdoZW4gc3BlY2lmeWluZyByZXF1aXJlbWVudHMgZm9yIG90aGVyIHRhc2tzLlxuICogKiBUaGUgYGNhbGxiYWNrYCBwYXJhbWV0ZXIgaXMgYSBgY2FsbGJhY2soZXJyLCByZXN1bHQpYCB3aGljaCBtdXN0IGJlIGNhbGxlZFxuICogICB3aGVuIGZpbmlzaGVkLCBwYXNzaW5nIGFuIGBlcnJvcmAgKHdoaWNoIGNhbiBiZSBgbnVsbGApIGFuZCB0aGUgcmVzdWx0IG9mXG4gKiAgIHRoZSBmdW5jdGlvbidzIGV4ZWN1dGlvbi4gVGhlIHJlbWFpbmluZyBwYXJhbWV0ZXJzIG5hbWUgb3RoZXIgdGFza3Mgb25cbiAqICAgd2hpY2ggdGhlIHRhc2sgaXMgZGVwZW5kZW50LCBhbmQgdGhlIHJlc3VsdHMgZnJvbSB0aG9zZSB0YXNrcyBhcmUgdGhlXG4gKiAgIGFyZ3VtZW50cyBvZiB0aG9zZSBwYXJhbWV0ZXJzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGFsbFxuICogdGhlIHRhc2tzIGhhdmUgYmVlbiBjb21wbGV0ZWQuIEl0IHJlY2VpdmVzIHRoZSBgZXJyYCBhcmd1bWVudCBpZiBhbnkgYHRhc2tzYFxuICogcGFzcyBhbiBlcnJvciB0byB0aGVpciBjYWxsYmFjaywgYW5kIGEgYHJlc3VsdHNgIG9iamVjdCB3aXRoIGFueSBjb21wbGV0ZWRcbiAqIHRhc2sgcmVzdWx0cywgc2ltaWxhciB0byBgYXV0b2AuXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vICBUaGUgZXhhbXBsZSBmcm9tIGBhdXRvYCBjYW4gYmUgcmV3cml0dGVuIGFzIGZvbGxvd3M6XG4gKiBhc3luYy5hdXRvSW5qZWN0KHtcbiAqICAgICBnZXRfZGF0YTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgLy8gYXN5bmMgY29kZSB0byBnZXQgc29tZSBkYXRhXG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICdkYXRhJywgJ2NvbnZlcnRlZCB0byBhcnJheScpO1xuICogICAgIH0sXG4gKiAgICAgbWFrZV9mb2xkZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIC8vIGFzeW5jIGNvZGUgdG8gY3JlYXRlIGEgZGlyZWN0b3J5IHRvIHN0b3JlIGEgZmlsZSBpblxuICogICAgICAgICAvLyB0aGlzIGlzIHJ1biBhdCB0aGUgc2FtZSB0aW1lIGFzIGdldHRpbmcgdGhlIGRhdGFcbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ2ZvbGRlcicpO1xuICogICAgIH0sXG4gKiAgICAgd3JpdGVfZmlsZTogZnVuY3Rpb24oZ2V0X2RhdGEsIG1ha2VfZm9sZGVyLCBjYWxsYmFjaykge1xuICogICAgICAgICAvLyBvbmNlIHRoZXJlIGlzIHNvbWUgZGF0YSBhbmQgdGhlIGRpcmVjdG9yeSBleGlzdHMsXG4gKiAgICAgICAgIC8vIHdyaXRlIHRoZSBkYXRhIHRvIGEgZmlsZSBpbiB0aGUgZGlyZWN0b3J5XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICdmaWxlbmFtZScpO1xuICogICAgIH0sXG4gKiAgICAgZW1haWxfbGluazogZnVuY3Rpb24od3JpdGVfZmlsZSwgY2FsbGJhY2spIHtcbiAqICAgICAgICAgLy8gb25jZSB0aGUgZmlsZSBpcyB3cml0dGVuIGxldCdzIGVtYWlsIGEgbGluayB0byBpdC4uLlxuICogICAgICAgICAvLyB3cml0ZV9maWxlIGNvbnRhaW5zIHRoZSBmaWxlbmFtZSByZXR1cm5lZCBieSB3cml0ZV9maWxlLlxuICogICAgICAgICBjYWxsYmFjayhudWxsLCB7J2ZpbGUnOndyaXRlX2ZpbGUsICdlbWFpbCc6J3VzZXJAZXhhbXBsZS5jb20nfSk7XG4gKiAgICAgfVxuICogfSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ2VyciA9ICcsIGVycik7XG4gKiAgICAgY29uc29sZS5sb2coJ2VtYWlsX2xpbmsgPSAnLCByZXN1bHRzLmVtYWlsX2xpbmspO1xuICogfSk7XG4gKlxuICogLy8gSWYgeW91IGFyZSB1c2luZyBhIEpTIG1pbmlmaWVyIHRoYXQgbWFuZ2xlcyBwYXJhbWV0ZXIgbmFtZXMsIGBhdXRvSW5qZWN0YFxuICogLy8gd2lsbCBub3Qgd29yayB3aXRoIHBsYWluIGZ1bmN0aW9ucywgc2luY2UgdGhlIHBhcmFtZXRlciBuYW1lcyB3aWxsIGJlXG4gKiAvLyBjb2xsYXBzZWQgdG8gYSBzaW5nbGUgbGV0dGVyIGlkZW50aWZpZXIuICBUbyB3b3JrIGFyb3VuZCB0aGlzLCB5b3UgY2FuXG4gKiAvLyBleHBsaWNpdGx5IHNwZWNpZnkgdGhlIG5hbWVzIG9mIHRoZSBwYXJhbWV0ZXJzIHlvdXIgdGFzayBmdW5jdGlvbiBuZWVkc1xuICogLy8gaW4gYW4gYXJyYXksIHNpbWlsYXIgdG8gQW5ndWxhci5qcyBkZXBlbmRlbmN5IGluamVjdGlvbi5cbiAqXG4gKiAvLyBUaGlzIHN0aWxsIGhhcyBhbiBhZHZhbnRhZ2Ugb3ZlciBwbGFpbiBgYXV0b2AsIHNpbmNlIHRoZSByZXN1bHRzIGEgdGFza1xuICogLy8gZGVwZW5kcyBvbiBhcmUgc3RpbGwgc3ByZWFkIGludG8gYXJndW1lbnRzLlxuICogYXN5bmMuYXV0b0luamVjdCh7XG4gKiAgICAgLy8uLi5cbiAqICAgICB3cml0ZV9maWxlOiBbJ2dldF9kYXRhJywgJ21ha2VfZm9sZGVyJywgZnVuY3Rpb24oZ2V0X2RhdGEsIG1ha2VfZm9sZGVyLCBjYWxsYmFjaykge1xuICogICAgICAgICBjYWxsYmFjayhudWxsLCAnZmlsZW5hbWUnKTtcbiAqICAgICB9XSxcbiAqICAgICBlbWFpbF9saW5rOiBbJ3dyaXRlX2ZpbGUnLCBmdW5jdGlvbih3cml0ZV9maWxlLCBjYWxsYmFjaykge1xuICogICAgICAgICBjYWxsYmFjayhudWxsLCB7J2ZpbGUnOndyaXRlX2ZpbGUsICdlbWFpbCc6J3VzZXJAZXhhbXBsZS5jb20nfSk7XG4gKiAgICAgfV1cbiAqICAgICAvLy4uLlxuICogfSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ2VyciA9ICcsIGVycik7XG4gKiAgICAgY29uc29sZS5sb2coJ2VtYWlsX2xpbmsgPSAnLCByZXN1bHRzLmVtYWlsX2xpbmspO1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGF1dG9JbmplY3QodGFza3MsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG5ld1Rhc2tzID0ge307XG5cbiAgICBiYXNlRm9yT3duKHRhc2tzLCBmdW5jdGlvbiAodGFza0ZuLCBrZXkpIHtcbiAgICAgICAgdmFyIHBhcmFtcztcbiAgICAgICAgdmFyIGZuSXNBc3luYyA9IGlzQXN5bmModGFza0ZuKTtcbiAgICAgICAgdmFyIGhhc05vRGVwcyA9XG4gICAgICAgICAgICAoIWZuSXNBc3luYyAmJiB0YXNrRm4ubGVuZ3RoID09PSAxKSB8fFxuICAgICAgICAgICAgKGZuSXNBc3luYyAmJiB0YXNrRm4ubGVuZ3RoID09PSAwKTtcblxuICAgICAgICBpZiAoaXNBcnJheSh0YXNrRm4pKSB7XG4gICAgICAgICAgICBwYXJhbXMgPSB0YXNrRm4uc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgdGFza0ZuID0gdGFza0ZuW3Rhc2tGbi5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgbmV3VGFza3Nba2V5XSA9IHBhcmFtcy5jb25jYXQocGFyYW1zLmxlbmd0aCA+IDAgPyBuZXdUYXNrIDogdGFza0ZuKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNOb0RlcHMpIHtcbiAgICAgICAgICAgIC8vIG5vIGRlcGVuZGVuY2llcywgdXNlIHRoZSBmdW5jdGlvbiBhcy1pc1xuICAgICAgICAgICAgbmV3VGFza3Nba2V5XSA9IHRhc2tGbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtcyA9IHBhcnNlUGFyYW1zKHRhc2tGbik7XG4gICAgICAgICAgICBpZiAodGFza0ZuLmxlbmd0aCA9PT0gMCAmJiAhZm5Jc0FzeW5jICYmIHBhcmFtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhdXRvSW5qZWN0IHRhc2sgZnVuY3Rpb25zIHJlcXVpcmUgZXhwbGljaXQgcGFyYW1ldGVycy5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBjYWxsYmFjayBwYXJhbVxuICAgICAgICAgICAgaWYgKCFmbklzQXN5bmMpIHBhcmFtcy5wb3AoKTtcblxuICAgICAgICAgICAgbmV3VGFza3Nba2V5XSA9IHBhcmFtcy5jb25jYXQobmV3VGFzayk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBuZXdUYXNrKHJlc3VsdHMsIHRhc2tDYikge1xuICAgICAgICAgICAgdmFyIG5ld0FyZ3MgPSBhcnJheU1hcChwYXJhbXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHNbbmFtZV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld0FyZ3MucHVzaCh0YXNrQ2IpO1xuICAgICAgICAgICAgd3JhcEFzeW5jKHRhc2tGbikuYXBwbHkobnVsbCwgbmV3QXJncyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGF1dG8obmV3VGFza3MsIGNhbGxiYWNrKTtcbn1cblxuLy8gU2ltcGxlIGRvdWJseSBsaW5rZWQgbGlzdCAoaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRG91Ymx5X2xpbmtlZF9saXN0KSBpbXBsZW1lbnRhdGlvblxuLy8gdXNlZCBmb3IgcXVldWVzLiBUaGlzIGltcGxlbWVudGF0aW9uIGFzc3VtZXMgdGhhdCB0aGUgbm9kZSBwcm92aWRlZCBieSB0aGUgdXNlciBjYW4gYmUgbW9kaWZpZWRcbi8vIHRvIGFkanVzdCB0aGUgbmV4dCBhbmQgbGFzdCBwcm9wZXJ0aWVzLiBXZSBpbXBsZW1lbnQgb25seSB0aGUgbWluaW1hbCBmdW5jdGlvbmFsaXR5XG4vLyBmb3IgcXVldWUgc3VwcG9ydC5cbmZ1bmN0aW9uIERMTCgpIHtcbiAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbn1cblxuZnVuY3Rpb24gc2V0SW5pdGlhbChkbGwsIG5vZGUpIHtcbiAgICBkbGwubGVuZ3RoID0gMTtcbiAgICBkbGwuaGVhZCA9IGRsbC50YWlsID0gbm9kZTtcbn1cblxuRExMLnByb3RvdHlwZS5yZW1vdmVMaW5rID0gZnVuY3Rpb24obm9kZSkge1xuICAgIGlmIChub2RlLnByZXYpIG5vZGUucHJldi5uZXh0ID0gbm9kZS5uZXh0O1xuICAgIGVsc2UgdGhpcy5oZWFkID0gbm9kZS5uZXh0O1xuICAgIGlmIChub2RlLm5leHQpIG5vZGUubmV4dC5wcmV2ID0gbm9kZS5wcmV2O1xuICAgIGVsc2UgdGhpcy50YWlsID0gbm9kZS5wcmV2O1xuXG4gICAgbm9kZS5wcmV2ID0gbm9kZS5uZXh0ID0gbnVsbDtcbiAgICB0aGlzLmxlbmd0aCAtPSAxO1xuICAgIHJldHVybiBub2RlO1xufTtcblxuRExMLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aGlsZSh0aGlzLmhlYWQpIHRoaXMuc2hpZnQoKTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cbkRMTC5wcm90b3R5cGUuaW5zZXJ0QWZ0ZXIgPSBmdW5jdGlvbihub2RlLCBuZXdOb2RlKSB7XG4gICAgbmV3Tm9kZS5wcmV2ID0gbm9kZTtcbiAgICBuZXdOb2RlLm5leHQgPSBub2RlLm5leHQ7XG4gICAgaWYgKG5vZGUubmV4dCkgbm9kZS5uZXh0LnByZXYgPSBuZXdOb2RlO1xuICAgIGVsc2UgdGhpcy50YWlsID0gbmV3Tm9kZTtcbiAgICBub2RlLm5leHQgPSBuZXdOb2RlO1xuICAgIHRoaXMubGVuZ3RoICs9IDE7XG59O1xuXG5ETEwucHJvdG90eXBlLmluc2VydEJlZm9yZSA9IGZ1bmN0aW9uKG5vZGUsIG5ld05vZGUpIHtcbiAgICBuZXdOb2RlLnByZXYgPSBub2RlLnByZXY7XG4gICAgbmV3Tm9kZS5uZXh0ID0gbm9kZTtcbiAgICBpZiAobm9kZS5wcmV2KSBub2RlLnByZXYubmV4dCA9IG5ld05vZGU7XG4gICAgZWxzZSB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuICAgIG5vZGUucHJldiA9IG5ld05vZGU7XG4gICAgdGhpcy5sZW5ndGggKz0gMTtcbn07XG5cbkRMTC5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAodGhpcy5oZWFkKSB0aGlzLmluc2VydEJlZm9yZSh0aGlzLmhlYWQsIG5vZGUpO1xuICAgIGVsc2Ugc2V0SW5pdGlhbCh0aGlzLCBub2RlKTtcbn07XG5cbkRMTC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICBpZiAodGhpcy50YWlsKSB0aGlzLmluc2VydEFmdGVyKHRoaXMudGFpbCwgbm9kZSk7XG4gICAgZWxzZSBzZXRJbml0aWFsKHRoaXMsIG5vZGUpO1xufTtcblxuRExMLnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWQgJiYgdGhpcy5yZW1vdmVMaW5rKHRoaXMuaGVhZCk7XG59O1xuXG5ETEwucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnRhaWwgJiYgdGhpcy5yZW1vdmVMaW5rKHRoaXMudGFpbCk7XG59O1xuXG5ETEwucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyciA9IEFycmF5KHRoaXMubGVuZ3RoKTtcbiAgICB2YXIgY3VyciA9IHRoaXMuaGVhZDtcbiAgICBmb3IodmFyIGlkeCA9IDA7IGlkeCA8IHRoaXMubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICBhcnJbaWR4XSA9IGN1cnIuZGF0YTtcbiAgICAgICAgY3VyciA9IGN1cnIubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn07XG5cbkRMTC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHRlc3RGbikge1xuICAgIHZhciBjdXJyID0gdGhpcy5oZWFkO1xuICAgIHdoaWxlKCEhY3Vycikge1xuICAgICAgICB2YXIgbmV4dCA9IGN1cnIubmV4dDtcbiAgICAgICAgaWYgKHRlc3RGbihjdXJyKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVMaW5rKGN1cnIpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnIgPSBuZXh0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIHF1ZXVlKHdvcmtlciwgY29uY3VycmVuY3ksIHBheWxvYWQpIHtcbiAgICBpZiAoY29uY3VycmVuY3kgPT0gbnVsbCkge1xuICAgICAgICBjb25jdXJyZW5jeSA9IDE7XG4gICAgfVxuICAgIGVsc2UgaWYoY29uY3VycmVuY3kgPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb25jdXJyZW5jeSBtdXN0IG5vdCBiZSB6ZXJvJyk7XG4gICAgfVxuXG4gICAgdmFyIF93b3JrZXIgPSB3cmFwQXN5bmMod29ya2VyKTtcbiAgICB2YXIgbnVtUnVubmluZyA9IDA7XG4gICAgdmFyIHdvcmtlcnNMaXN0ID0gW107XG5cbiAgICB2YXIgcHJvY2Vzc2luZ1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIF9pbnNlcnQoZGF0YSwgaW5zZXJ0QXRGcm9udCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrICE9IG51bGwgJiYgdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Rhc2sgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcS5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCAmJiBxLmlkbGUoKSkge1xuICAgICAgICAgICAgLy8gY2FsbCBkcmFpbiBpbW1lZGlhdGVseSBpZiB0aGVyZSBhcmUgbm8gdGFza3NcbiAgICAgICAgICAgIHJldHVybiBzZXRJbW1lZGlhdGUkMShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBxLmRyYWluKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0ge1xuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFbaV0sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrIHx8IG5vb3BcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpbnNlcnRBdEZyb250KSB7XG4gICAgICAgICAgICAgICAgcS5fdGFza3MudW5zaGlmdChpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcS5fdGFza3MucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJvY2Vzc2luZ1NjaGVkdWxlZCkge1xuICAgICAgICAgICAgcHJvY2Vzc2luZ1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICBzZXRJbW1lZGlhdGUkMShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcS5wcm9jZXNzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9uZXh0KHRhc2tzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlcnIpe1xuICAgICAgICAgICAgbnVtUnVubmluZyAtPSAxO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRhc2tzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NbaV07XG5cbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBiYXNlSW5kZXhPZih3b3JrZXJzTGlzdCwgdGFzaywgMCk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlcnNMaXN0LnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgd29ya2Vyc0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXNrLmNhbGxiYWNrLmFwcGx5KHRhc2ssIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcS5lcnJvcihlcnIsIHRhc2suZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobnVtUnVubmluZyA8PSAocS5jb25jdXJyZW5jeSAtIHEuYnVmZmVyKSApIHtcbiAgICAgICAgICAgICAgICBxLnVuc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChxLmlkbGUoKSkge1xuICAgICAgICAgICAgICAgIHEuZHJhaW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHEucHJvY2VzcygpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICB2YXIgcSA9IHtcbiAgICAgICAgX3Rhc2tzOiBuZXcgRExMKCksXG4gICAgICAgIGNvbmN1cnJlbmN5OiBjb25jdXJyZW5jeSxcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgICAgc2F0dXJhdGVkOiBub29wLFxuICAgICAgICB1bnNhdHVyYXRlZDpub29wLFxuICAgICAgICBidWZmZXI6IGNvbmN1cnJlbmN5IC8gNCxcbiAgICAgICAgZW1wdHk6IG5vb3AsXG4gICAgICAgIGRyYWluOiBub29wLFxuICAgICAgICBlcnJvcjogbm9vcCxcbiAgICAgICAgc3RhcnRlZDogZmFsc2UsXG4gICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICAgIHB1c2g6IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgX2luc2VydChkYXRhLCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBraWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBxLmRyYWluID0gbm9vcDtcbiAgICAgICAgICAgIHEuX3Rhc2tzLmVtcHR5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVuc2hpZnQ6IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgX2luc2VydChkYXRhLCB0cnVlLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKHRlc3RGbikge1xuICAgICAgICAgICAgcS5fdGFza3MucmVtb3ZlKHRlc3RGbik7XG4gICAgICAgIH0sXG4gICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIHRyeWluZyB0byBzdGFydCB0b28gbWFueSBwcm9jZXNzaW5nIG9wZXJhdGlvbnMuIFRoaXMgY2FuIG9jY3VyXG4gICAgICAgICAgICAvLyB3aGVuIGNhbGxiYWNrcyByZXNvbHZlIHN5bmNocm9ub3VzbHkgKCMxMjY3KS5cbiAgICAgICAgICAgIGlmIChpc1Byb2Nlc3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICAgICAgd2hpbGUoIXEucGF1c2VkICYmIG51bVJ1bm5pbmcgPCBxLmNvbmN1cnJlbmN5ICYmIHEuX3Rhc2tzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgdmFyIHRhc2tzID0gW10sIGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgbCA9IHEuX3Rhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAocS5wYXlsb2FkKSBsID0gTWF0aC5taW4obCwgcS5wYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHEuX3Rhc2tzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHdvcmtlcnNMaXN0LnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG51bVJ1bm5pbmcgKz0gMTtcblxuICAgICAgICAgICAgICAgIGlmIChxLl90YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChudW1SdW5uaW5nID09PSBxLmNvbmN1cnJlbmN5KSB7XG4gICAgICAgICAgICAgICAgICAgIHEuc2F0dXJhdGVkKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGNiID0gb25seU9uY2UoX25leHQodGFza3MpKTtcbiAgICAgICAgICAgICAgICBfd29ya2VyKGRhdGEsIGNiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBsZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBxLl90YXNrcy5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bm5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1SdW5uaW5nO1xuICAgICAgICB9LFxuICAgICAgICB3b3JrZXJzTGlzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHdvcmtlcnNMaXN0O1xuICAgICAgICB9LFxuICAgICAgICBpZGxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBxLl90YXNrcy5sZW5ndGggKyBudW1SdW5uaW5nID09PSAwO1xuICAgICAgICB9LFxuICAgICAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICByZXN1bWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChxLnBhdXNlZCA9PT0gZmFsc2UpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICBxLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2V0SW1tZWRpYXRlJDEocS5wcm9jZXNzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHE7XG59XG5cbi8qKlxuICogQSBjYXJnbyBvZiB0YXNrcyBmb3IgdGhlIHdvcmtlciBmdW5jdGlvbiB0byBjb21wbGV0ZS4gQ2FyZ28gaW5oZXJpdHMgYWxsIG9mXG4gKiB0aGUgc2FtZSBtZXRob2RzIGFuZCBldmVudCBjYWxsYmFja3MgYXMgW2BxdWV1ZWBde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5xdWV1ZX0uXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDYXJnb09iamVjdFxuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gbGVuZ3RoIC0gQSBmdW5jdGlvbiByZXR1cm5pbmcgdGhlIG51bWJlciBvZiBpdGVtc1xuICogd2FpdGluZyB0byBiZSBwcm9jZXNzZWQuIEludm9rZSBsaWtlIGBjYXJnby5sZW5ndGgoKWAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gcGF5bG9hZCAtIEFuIGBpbnRlZ2VyYCBmb3IgZGV0ZXJtaW5pbmcgaG93IG1hbnkgdGFza3NcbiAqIHNob3VsZCBiZSBwcm9jZXNzIHBlciByb3VuZC4gVGhpcyBwcm9wZXJ0eSBjYW4gYmUgY2hhbmdlZCBhZnRlciBhIGBjYXJnb2AgaXNcbiAqIGNyZWF0ZWQgdG8gYWx0ZXIgdGhlIHBheWxvYWQgb24tdGhlLWZseS5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHB1c2ggLSBBZGRzIGB0YXNrYCB0byB0aGUgYHF1ZXVlYC4gVGhlIGNhbGxiYWNrIGlzXG4gKiBjYWxsZWQgb25jZSB0aGUgYHdvcmtlcmAgaGFzIGZpbmlzaGVkIHByb2Nlc3NpbmcgdGhlIHRhc2suIEluc3RlYWQgb2YgYVxuICogc2luZ2xlIHRhc2ssIGFuIGFycmF5IG9mIGB0YXNrc2AgY2FuIGJlIHN1Ym1pdHRlZC4gVGhlIHJlc3BlY3RpdmUgY2FsbGJhY2sgaXNcbiAqIHVzZWQgZm9yIGV2ZXJ5IHRhc2sgaW4gdGhlIGxpc3QuIEludm9rZSBsaWtlIGBjYXJnby5wdXNoKHRhc2ssIFtjYWxsYmFja10pYC5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHNhdHVyYXRlZCAtIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGVcbiAqIGBxdWV1ZS5sZW5ndGgoKWAgaGl0cyB0aGUgY29uY3VycmVuY3kgYW5kIGZ1cnRoZXIgdGFza3Mgd2lsbCBiZSBxdWV1ZWQuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBlbXB0eSAtIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgbGFzdCBpdGVtXG4gKiBmcm9tIHRoZSBgcXVldWVgIGlzIGdpdmVuIHRvIGEgYHdvcmtlcmAuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBkcmFpbiAtIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgbGFzdCBpdGVtXG4gKiBmcm9tIHRoZSBgcXVldWVgIGhhcyByZXR1cm5lZCBmcm9tIHRoZSBgd29ya2VyYC5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGlkbGUgLSBhIGZ1bmN0aW9uIHJldHVybmluZyBmYWxzZSBpZiB0aGVyZSBhcmUgaXRlbXNcbiAqIHdhaXRpbmcgb3IgYmVpbmcgcHJvY2Vzc2VkLCBvciB0cnVlIGlmIG5vdC4gSW52b2tlIGxpa2UgYGNhcmdvLmlkbGUoKWAuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBwYXVzZSAtIGEgZnVuY3Rpb24gdGhhdCBwYXVzZXMgdGhlIHByb2Nlc3Npbmcgb2YgdGFza3NcbiAqIHVudGlsIGByZXN1bWUoKWAgaXMgY2FsbGVkLiBJbnZva2UgbGlrZSBgY2FyZ28ucGF1c2UoKWAuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSByZXN1bWUgLSBhIGZ1bmN0aW9uIHRoYXQgcmVzdW1lcyB0aGUgcHJvY2Vzc2luZyBvZlxuICogcXVldWVkIHRhc2tzIHdoZW4gdGhlIHF1ZXVlIGlzIHBhdXNlZC4gSW52b2tlIGxpa2UgYGNhcmdvLnJlc3VtZSgpYC5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGtpbGwgLSBhIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgYGRyYWluYCBjYWxsYmFjayBhbmRcbiAqIGVtcHRpZXMgcmVtYWluaW5nIHRhc2tzIGZyb20gdGhlIHF1ZXVlIGZvcmNpbmcgaXQgdG8gZ28gaWRsZS4gSW52b2tlIGxpa2UgYGNhcmdvLmtpbGwoKWAuXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgYGNhcmdvYCBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIHBheWxvYWQuIFRhc2tzIGFkZGVkIHRvIHRoZVxuICogY2FyZ28gd2lsbCBiZSBwcm9jZXNzZWQgYWx0b2dldGhlciAodXAgdG8gdGhlIGBwYXlsb2FkYCBsaW1pdCkuIElmIHRoZVxuICogYHdvcmtlcmAgaXMgaW4gcHJvZ3Jlc3MsIHRoZSB0YXNrIGlzIHF1ZXVlZCB1bnRpbCBpdCBiZWNvbWVzIGF2YWlsYWJsZS4gT25jZVxuICogdGhlIGB3b3JrZXJgIGhhcyBjb21wbGV0ZWQgc29tZSB0YXNrcywgZWFjaCBjYWxsYmFjayBvZiB0aG9zZSB0YXNrcyBpc1xuICogY2FsbGVkLiBDaGVjayBvdXQgW3RoZXNlXShodHRwczovL2NhbW8uZ2l0aHVidXNlcmNvbnRlbnQuY29tLzZiYmQzNmY0Y2Y1YjM1YTBmMTFhOTZkY2QyZTk3NzExZmZjMmZiMzcvNjg3NDc0NzA3MzNhMmYyZjY2MmU2MzZjNmY3NTY0MmU2NzY5NzQ2ODc1NjIyZTYzNmY2ZDJmNjE3MzczNjU3NDczMmYzMTM2MzczNjM4MzczMTJmMzYzODMxMzAzODJmNjI2MjYzMzA2MzY2NjIzMDJkMzU2NjMyMzkyZDMxMzE2NTMyMmQzOTM3MzQ2NjJkMzMzMzM5Mzc2MzM2MzQ2NDYzMzgzNTM4MmU2NzY5NjYpIFthbmltYXRpb25zXShodHRwczovL2NhbW8uZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Y0ODEwZTAwZTFjNWY1ZjhhZGRiZTNlOWY0OTA2NGZkNWQxMDI2OTkvNjg3NDc0NzA3MzNhMmYyZjY2MmU2MzZjNmY3NTY0MmU2NzY5NzQ2ODc1NjIyZTYzNmY2ZDJmNjE3MzczNjU3NDczMmYzMTM2MzczNjM4MzczMTJmMzYzODMxMzAzMTJmMzgzNDYzMzkzMjMwMzYzNjJkMzU2NjMyMzkyZDMxMzE2NTMyMmQzODMxMzQ2NjJkMzk2NDMzNjQzMDMyMzQzMTMzNjI2NjY0MmU2NzY5NjYpXG4gKiBmb3IgaG93IGBjYXJnb2AgYW5kIGBxdWV1ZWAgd29yay5cbiAqXG4gKiBXaGlsZSBbYHF1ZXVlYF17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LnF1ZXVlfSBwYXNzZXMgb25seSBvbmUgdGFzayB0byBvbmUgb2YgYSBncm91cCBvZiB3b3JrZXJzXG4gKiBhdCBhIHRpbWUsIGNhcmdvIHBhc3NlcyBhbiBhcnJheSBvZiB0YXNrcyB0byBhIHNpbmdsZSB3b3JrZXIsIHJlcGVhdGluZ1xuICogd2hlbiB0aGUgd29ya2VyIGlzIGZpbmlzaGVkLlxuICpcbiAqIEBuYW1lIGNhcmdvXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5xdWV1ZV17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LnF1ZXVlfVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSB3b3JrZXIgLSBBbiBhc3luY2hyb25vdXMgZnVuY3Rpb24gZm9yIHByb2Nlc3NpbmcgYW4gYXJyYXlcbiAqIG9mIHF1ZXVlZCB0YXNrcy4gSW52b2tlZCB3aXRoIGAodGFza3MsIGNhbGxiYWNrKWAuXG4gKiBAcGFyYW0ge251bWJlcn0gW3BheWxvYWQ9SW5maW5pdHldIC0gQW4gb3B0aW9uYWwgYGludGVnZXJgIGZvciBkZXRlcm1pbmluZ1xuICogaG93IG1hbnkgdGFza3Mgc2hvdWxkIGJlIHByb2Nlc3NlZCBwZXIgcm91bmQ7IGlmIG9taXR0ZWQsIHRoZSBkZWZhdWx0IGlzXG4gKiB1bmxpbWl0ZWQuXG4gKiBAcmV0dXJucyB7bW9kdWxlOkNvbnRyb2xGbG93LkNhcmdvT2JqZWN0fSBBIGNhcmdvIG9iamVjdCB0byBtYW5hZ2UgdGhlIHRhc2tzLiBDYWxsYmFja3MgY2FuXG4gKiBhdHRhY2hlZCBhcyBjZXJ0YWluIHByb3BlcnRpZXMgdG8gbGlzdGVuIGZvciBzcGVjaWZpYyBldmVudHMgZHVyaW5nIHRoZVxuICogbGlmZWN5Y2xlIG9mIHRoZSBjYXJnbyBhbmQgaW5uZXIgcXVldWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIGNyZWF0ZSBhIGNhcmdvIG9iamVjdCB3aXRoIHBheWxvYWQgMlxuICogdmFyIGNhcmdvID0gYXN5bmMuY2FyZ28oZnVuY3Rpb24odGFza3MsIGNhbGxiYWNrKSB7XG4gKiAgICAgZm9yICh2YXIgaT0wOyBpPHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gKiAgICAgICAgIGNvbnNvbGUubG9nKCdoZWxsbyAnICsgdGFza3NbaV0ubmFtZSk7XG4gKiAgICAgfVxuICogICAgIGNhbGxiYWNrKCk7XG4gKiB9LCAyKTtcbiAqXG4gKiAvLyBhZGQgc29tZSBpdGVtc1xuICogY2FyZ28ucHVzaCh7bmFtZTogJ2Zvbyd9LCBmdW5jdGlvbihlcnIpIHtcbiAqICAgICBjb25zb2xlLmxvZygnZmluaXNoZWQgcHJvY2Vzc2luZyBmb28nKTtcbiAqIH0pO1xuICogY2FyZ28ucHVzaCh7bmFtZTogJ2Jhcid9LCBmdW5jdGlvbihlcnIpIHtcbiAqICAgICBjb25zb2xlLmxvZygnZmluaXNoZWQgcHJvY2Vzc2luZyBiYXInKTtcbiAqIH0pO1xuICogY2FyZ28ucHVzaCh7bmFtZTogJ2Jheid9LCBmdW5jdGlvbihlcnIpIHtcbiAqICAgICBjb25zb2xlLmxvZygnZmluaXNoZWQgcHJvY2Vzc2luZyBiYXonKTtcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBjYXJnbyh3b3JrZXIsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gcXVldWUod29ya2VyLCAxLCBwYXlsb2FkKTtcbn1cblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYGVhY2hPZmBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5lYWNoT2Z9IGJ1dCBydW5zIG9ubHkgYSBzaW5nbGUgYXN5bmMgb3BlcmF0aW9uIGF0IGEgdGltZS5cbiAqXG4gKiBAbmFtZSBlYWNoT2ZTZXJpZXNcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmVhY2hPZl17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmVhY2hPZn1cbiAqIEBhbGlhcyBmb3JFYWNoT2ZTZXJpZXNcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluXG4gKiBgY29sbGAuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGtleSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gYWxsIGBpdGVyYXRlZWBcbiAqIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIEludm9rZWQgd2l0aCAoZXJyKS5cbiAqL1xudmFyIGVhY2hPZlNlcmllcyA9IGRvTGltaXQoZWFjaE9mTGltaXQsIDEpO1xuXG4vKipcbiAqIFJlZHVjZXMgYGNvbGxgIGludG8gYSBzaW5nbGUgdmFsdWUgdXNpbmcgYW4gYXN5bmMgYGl0ZXJhdGVlYCB0byByZXR1cm4gZWFjaFxuICogc3VjY2Vzc2l2ZSBzdGVwLiBgbWVtb2AgaXMgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHJlZHVjdGlvbi4gVGhpcyBmdW5jdGlvblxuICogb25seSBvcGVyYXRlcyBpbiBzZXJpZXMuXG4gKlxuICogRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIGl0IG1heSBtYWtlIHNlbnNlIHRvIHNwbGl0IGEgY2FsbCB0byB0aGlzIGZ1bmN0aW9uXG4gKiBpbnRvIGEgcGFyYWxsZWwgbWFwLCBhbmQgdGhlbiB1c2UgdGhlIG5vcm1hbCBgQXJyYXkucHJvdG90eXBlLnJlZHVjZWAgb24gdGhlXG4gKiByZXN1bHRzLiBUaGlzIGZ1bmN0aW9uIGlzIGZvciBzaXR1YXRpb25zIHdoZXJlIGVhY2ggc3RlcCBpbiB0aGUgcmVkdWN0aW9uXG4gKiBuZWVkcyB0byBiZSBhc3luYzsgaWYgeW91IGNhbiBnZXQgdGhlIGRhdGEgYmVmb3JlIHJlZHVjaW5nIGl0LCB0aGVuIGl0J3NcbiAqIHByb2JhYmx5IGEgZ29vZCBpZGVhIHRvIGRvIHNvLlxuICpcbiAqIEBuYW1lIHJlZHVjZVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGFsaWFzIGluamVjdFxuICogQGFsaWFzIGZvbGRsXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHsqfSBtZW1vIC0gVGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHJlZHVjdGlvbi5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBIGZ1bmN0aW9uIGFwcGxpZWQgdG8gZWFjaCBpdGVtIGluIHRoZVxuICogYXJyYXkgdG8gcHJvZHVjZSB0aGUgbmV4dCBzdGVwIGluIHRoZSByZWR1Y3Rpb24uXG4gKiBUaGUgYGl0ZXJhdGVlYCBzaG91bGQgY29tcGxldGUgd2l0aCB0aGUgbmV4dCBzdGF0ZSBvZiB0aGUgcmVkdWN0aW9uLlxuICogSWYgdGhlIGl0ZXJhdGVlIGNvbXBsZXRlIHdpdGggYW4gZXJyb3IsIHRoZSByZWR1Y3Rpb24gaXMgc3RvcHBlZCBhbmQgdGhlXG4gKiBtYWluIGBjYWxsYmFja2AgaXMgaW1tZWRpYXRlbHkgY2FsbGVkIHdpdGggdGhlIGVycm9yLlxuICogSW52b2tlZCB3aXRoIChtZW1vLCBpdGVtLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgYWxsIHRoZVxuICogYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZC4gUmVzdWx0IGlzIHRoZSByZWR1Y2VkIHZhbHVlLiBJbnZva2VkIHdpdGhcbiAqIChlcnIsIHJlc3VsdCkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLnJlZHVjZShbMSwyLDNdLCAwLCBmdW5jdGlvbihtZW1vLCBpdGVtLCBjYWxsYmFjaykge1xuICogICAgIC8vIHBvaW50bGVzcyBhc3luYzpcbiAqICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICogICAgICAgICBjYWxsYmFjayhudWxsLCBtZW1vICsgaXRlbSlcbiAqICAgICB9KTtcbiAqIH0sIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gcmVzdWx0IGlzIG5vdyBlcXVhbCB0byB0aGUgbGFzdCB2YWx1ZSBvZiBtZW1vLCB3aGljaCBpcyA2XG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gcmVkdWNlKGNvbGwsIG1lbW8sIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICB2YXIgX2l0ZXJhdGVlID0gd3JhcEFzeW5jKGl0ZXJhdGVlKTtcbiAgICBlYWNoT2ZTZXJpZXMoY29sbCwgZnVuY3Rpb24oeCwgaSwgY2FsbGJhY2spIHtcbiAgICAgICAgX2l0ZXJhdGVlKG1lbW8sIHgsIGZ1bmN0aW9uKGVyciwgdikge1xuICAgICAgICAgICAgbWVtbyA9IHY7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyLCBtZW1vKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBWZXJzaW9uIG9mIHRoZSBjb21wb3NlIGZ1bmN0aW9uIHRoYXQgaXMgbW9yZSBuYXR1cmFsIHRvIHJlYWQuIEVhY2ggZnVuY3Rpb25cbiAqIGNvbnN1bWVzIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHByZXZpb3VzIGZ1bmN0aW9uLiBJdCBpcyB0aGUgZXF1aXZhbGVudCBvZlxuICogW2NvbXBvc2Vde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5jb21wb3NlfSB3aXRoIHRoZSBhcmd1bWVudHMgcmV2ZXJzZWQuXG4gKlxuICogRWFjaCBmdW5jdGlvbiBpcyBleGVjdXRlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgY29tcG9zZWQgZnVuY3Rpb24uXG4gKlxuICogQG5hbWUgc2VxXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5jb21wb3NlXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cuY29tcG9zZX1cbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7Li4uQXN5bmNGdW5jdGlvbn0gZnVuY3Rpb25zIC0gdGhlIGFzeW5jaHJvbm91cyBmdW5jdGlvbnMgdG8gY29tcG9zZVxuICogQHJldHVybnMge0Z1bmN0aW9ufSBhIGZ1bmN0aW9uIHRoYXQgY29tcG9zZXMgdGhlIGBmdW5jdGlvbnNgIGluIG9yZGVyXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIFJlcXVpcmVzIGxvZGFzaCAob3IgdW5kZXJzY29yZSksIGV4cHJlc3MzIGFuZCBkcmVzZW5kZSdzIG9ybTIuXG4gKiAvLyBQYXJ0IG9mIGFuIGFwcCwgdGhhdCBmZXRjaGVzIGNhdHMgb2YgdGhlIGxvZ2dlZCB1c2VyLlxuICogLy8gVGhpcyBleGFtcGxlIHVzZXMgYHNlcWAgZnVuY3Rpb24gdG8gYXZvaWQgb3Zlcm5lc3RpbmcgYW5kIGVycm9yXG4gKiAvLyBoYW5kbGluZyBjbHV0dGVyLlxuICogYXBwLmdldCgnL2NhdHMnLCBmdW5jdGlvbihyZXF1ZXN0LCByZXNwb25zZSkge1xuICogICAgIHZhciBVc2VyID0gcmVxdWVzdC5tb2RlbHMuVXNlcjtcbiAqICAgICBhc3luYy5zZXEoXG4gKiAgICAgICAgIF8uYmluZChVc2VyLmdldCwgVXNlciksICAvLyAnVXNlci5nZXQnIGhhcyBzaWduYXR1cmUgKGlkLCBjYWxsYmFjayhlcnIsIGRhdGEpKVxuICogICAgICAgICBmdW5jdGlvbih1c2VyLCBmbikge1xuICogICAgICAgICAgICAgdXNlci5nZXRDYXRzKGZuKTsgICAgICAvLyAnZ2V0Q2F0cycgaGFzIHNpZ25hdHVyZSAoY2FsbGJhY2soZXJyLCBkYXRhKSlcbiAqICAgICAgICAgfVxuICogICAgICkocmVxLnNlc3Npb24udXNlcl9pZCwgZnVuY3Rpb24gKGVyciwgY2F0cykge1xuICogICAgICAgICBpZiAoZXJyKSB7XG4gKiAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gKiAgICAgICAgICAgICByZXNwb25zZS5qc29uKHsgc3RhdHVzOiAnZXJyb3InLCBtZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcbiAqICAgICAgICAgfSBlbHNlIHtcbiAqICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oeyBzdGF0dXM6ICdvaycsIG1lc3NhZ2U6ICdDYXRzIGZvdW5kJywgZGF0YTogY2F0cyB9KTtcbiAqICAgICAgICAgfVxuICogICAgIH0pO1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIHNlcSgvKi4uLmZ1bmN0aW9ucyovKSB7XG4gICAgdmFyIF9mdW5jdGlvbnMgPSBhcnJheU1hcChhcmd1bWVudHMsIHdyYXBBc3luYyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKC8qLi4uYXJncyovKSB7XG4gICAgICAgIHZhciBhcmdzID0gc2xpY2UoYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICAgIHZhciBjYiA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHR5cGVvZiBjYiA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhcmdzLnBvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2IgPSBub29wO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVkdWNlKF9mdW5jdGlvbnMsIGFyZ3MsIGZ1bmN0aW9uKG5ld2FyZ3MsIGZuLCBjYikge1xuICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgbmV3YXJncy5jb25jYXQoZnVuY3Rpb24oZXJyLyosIC4uLm5leHRhcmdzKi8pIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dGFyZ3MgPSBzbGljZShhcmd1bWVudHMsIDEpO1xuICAgICAgICAgICAgICAgIGNiKGVyciwgbmV4dGFyZ3MpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIGNiLmFwcGx5KHRoYXQsIFtlcnJdLmNvbmNhdChyZXN1bHRzKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHdoaWNoIGlzIGEgY29tcG9zaXRpb24gb2YgdGhlIHBhc3NlZCBhc3luY2hyb25vdXNcbiAqIGZ1bmN0aW9ucy4gRWFjaCBmdW5jdGlvbiBjb25zdW1lcyB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiB0aGF0XG4gKiBmb2xsb3dzLiBDb21wb3NpbmcgZnVuY3Rpb25zIGBmKClgLCBgZygpYCwgYW5kIGBoKClgIHdvdWxkIHByb2R1Y2UgdGhlIHJlc3VsdFxuICogb2YgYGYoZyhoKCkpKWAsIG9ubHkgdGhpcyB2ZXJzaW9uIHVzZXMgY2FsbGJhY2tzIHRvIG9idGFpbiB0aGUgcmV0dXJuIHZhbHVlcy5cbiAqXG4gKiBFYWNoIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZSBjb21wb3NlZCBmdW5jdGlvbi5cbiAqXG4gKiBAbmFtZSBjb21wb3NlXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0gey4uLkFzeW5jRnVuY3Rpb259IGZ1bmN0aW9ucyAtIHRoZSBhc3luY2hyb25vdXMgZnVuY3Rpb25zIHRvIGNvbXBvc2VcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gYW4gYXN5bmNocm9ub3VzIGZ1bmN0aW9uIHRoYXQgaXMgdGhlIGNvbXBvc2VkXG4gKiBhc3luY2hyb25vdXMgYGZ1bmN0aW9uc2BcbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gYWRkMShuLCBjYWxsYmFjaykge1xuICogICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICogICAgICAgICBjYWxsYmFjayhudWxsLCBuICsgMSk7XG4gKiAgICAgfSwgMTApO1xuICogfVxuICpcbiAqIGZ1bmN0aW9uIG11bDMobiwgY2FsbGJhY2spIHtcbiAqICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgbiAqIDMpO1xuICogICAgIH0sIDEwKTtcbiAqIH1cbiAqXG4gKiB2YXIgYWRkMW11bDMgPSBhc3luYy5jb21wb3NlKG11bDMsIGFkZDEpO1xuICogYWRkMW11bDMoNCwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gcmVzdWx0IG5vdyBlcXVhbHMgMTVcbiAqIH0pO1xuICovXG52YXIgY29tcG9zZSA9IGZ1bmN0aW9uKC8qLi4uYXJncyovKSB7XG4gICAgcmV0dXJuIHNlcS5hcHBseShudWxsLCBzbGljZShhcmd1bWVudHMpLnJldmVyc2UoKSk7XG59O1xuXG52YXIgX2NvbmNhdCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQ7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2Bjb25jYXRgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuY29uY2F0fSBidXQgcnVucyBhIG1heGltdW0gb2YgYGxpbWl0YCBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqXG4gKiBAbmFtZSBjb25jYXRMaW1pdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuY29uY2F0XXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuY29uY2F0fVxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpbiBgY29sbGAsXG4gKiB3aGljaCBzaG91bGQgdXNlIGFuIGFycmF5IGFzIGl0cyByZXN1bHQuIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIGFsbCB0aGVcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gUmVzdWx0cyBpcyBhbiBhcnJheVxuICogY29udGFpbmluZyB0aGUgY29uY2F0ZW5hdGVkIHJlc3VsdHMgb2YgdGhlIGBpdGVyYXRlZWAgZnVuY3Rpb24uIEludm9rZWQgd2l0aFxuICogKGVyciwgcmVzdWx0cykuXG4gKi9cbnZhciBjb25jYXRMaW1pdCA9IGZ1bmN0aW9uKGNvbGwsIGxpbWl0LCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG4gICAgdmFyIF9pdGVyYXRlZSA9IHdyYXBBc3luYyhpdGVyYXRlZSk7XG4gICAgbWFwTGltaXQoY29sbCwgbGltaXQsIGZ1bmN0aW9uKHZhbCwgY2FsbGJhY2spIHtcbiAgICAgICAgX2l0ZXJhdGVlKHZhbCwgZnVuY3Rpb24oZXJyIC8qLCAuLi5hcmdzKi8pIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHNsaWNlKGFyZ3VtZW50cywgMSkpO1xuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbihlcnIsIG1hcFJlc3VsdHMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hcFJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtYXBSZXN1bHRzW2ldKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2NvbmNhdC5hcHBseShyZXN1bHQsIG1hcFJlc3VsdHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgcmVzdWx0KTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogQXBwbGllcyBgaXRlcmF0ZWVgIHRvIGVhY2ggaXRlbSBpbiBgY29sbGAsIGNvbmNhdGVuYXRpbmcgdGhlIHJlc3VsdHMuIFJldHVybnNcbiAqIHRoZSBjb25jYXRlbmF0ZWQgbGlzdC4gVGhlIGBpdGVyYXRlZWBzIGFyZSBjYWxsZWQgaW4gcGFyYWxsZWwsIGFuZCB0aGVcbiAqIHJlc3VsdHMgYXJlIGNvbmNhdGVuYXRlZCBhcyB0aGV5IHJldHVybi4gVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgdGhlXG4gKiByZXN1bHRzIGFycmF5IHdpbGwgYmUgcmV0dXJuZWQgaW4gdGhlIG9yaWdpbmFsIG9yZGVyIG9mIGBjb2xsYCBwYXNzZWQgdG8gdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9uLlxuICpcbiAqIEBuYW1lIGNvbmNhdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpbiBgY29sbGAsXG4gKiB3aGljaCBzaG91bGQgdXNlIGFuIGFycmF5IGFzIGl0cyByZXN1bHQuIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrKGVycildIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgYWxsIHRoZVxuICogYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBSZXN1bHRzIGlzIGFuIGFycmF5XG4gKiBjb250YWluaW5nIHRoZSBjb25jYXRlbmF0ZWQgcmVzdWx0cyBvZiB0aGUgYGl0ZXJhdGVlYCBmdW5jdGlvbi4gSW52b2tlZCB3aXRoXG4gKiAoZXJyLCByZXN1bHRzKS5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMuY29uY2F0KFsnZGlyMScsJ2RpcjInLCdkaXIzJ10sIGZzLnJlYWRkaXIsIGZ1bmN0aW9uKGVyciwgZmlsZXMpIHtcbiAqICAgICAvLyBmaWxlcyBpcyBub3cgYSBsaXN0IG9mIGZpbGVuYW1lcyB0aGF0IGV4aXN0IGluIHRoZSAzIGRpcmVjdG9yaWVzXG4gKiB9KTtcbiAqL1xudmFyIGNvbmNhdCA9IGRvTGltaXQoY29uY2F0TGltaXQsIEluZmluaXR5KTtcblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYGNvbmNhdGBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5jb25jYXR9IGJ1dCBydW5zIG9ubHkgYSBzaW5nbGUgYXN5bmMgb3BlcmF0aW9uIGF0IGEgdGltZS5cbiAqXG4gKiBAbmFtZSBjb25jYXRTZXJpZXNcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmNvbmNhdF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmNvbmNhdH1cbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQSBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW4gYGNvbGxgLlxuICogVGhlIGl0ZXJhdGVlIHNob3VsZCBjb21wbGV0ZSB3aXRoIGFuIGFycmF5IGFuIGFycmF5IG9mIHJlc3VsdHMuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFjayhlcnIpXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIGFsbCB0aGVcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gUmVzdWx0cyBpcyBhbiBhcnJheVxuICogY29udGFpbmluZyB0aGUgY29uY2F0ZW5hdGVkIHJlc3VsdHMgb2YgdGhlIGBpdGVyYXRlZWAgZnVuY3Rpb24uIEludm9rZWQgd2l0aFxuICogKGVyciwgcmVzdWx0cykuXG4gKi9cbnZhciBjb25jYXRTZXJpZXMgPSBkb0xpbWl0KGNvbmNhdExpbWl0LCAxKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aGVuIGNhbGxlZCwgY2FsbHMtYmFjayB3aXRoIHRoZSB2YWx1ZXMgcHJvdmlkZWQuXG4gKiBVc2VmdWwgYXMgdGhlIGZpcnN0IGZ1bmN0aW9uIGluIGEgW2B3YXRlcmZhbGxgXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cud2F0ZXJmYWxsfSwgb3IgZm9yIHBsdWdnaW5nIHZhbHVlcyBpbiB0b1xuICogW2BhdXRvYF17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LmF1dG99LlxuICpcbiAqIEBuYW1lIGNvbnN0YW50XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOlV0aWxzXG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsuLi4qfSBhcmd1bWVudHMuLi4gLSBBbnkgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBhdXRvbWF0aWNhbGx5IGludm9rZVxuICogY2FsbGJhY2sgd2l0aC5cbiAqIEByZXR1cm5zIHtBc3luY0Z1bmN0aW9ufSBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aGVuIGludm9rZWQsIGF1dG9tYXRpY2FsbHlcbiAqIGludm9rZXMgdGhlIGNhbGxiYWNrIHdpdGggdGhlIHByZXZpb3VzIGdpdmVuIGFyZ3VtZW50cy5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMud2F0ZXJmYWxsKFtcbiAqICAgICBhc3luYy5jb25zdGFudCg0MiksXG4gKiAgICAgZnVuY3Rpb24gKHZhbHVlLCBuZXh0KSB7XG4gKiAgICAgICAgIC8vIHZhbHVlID09PSA0MlxuICogICAgIH0sXG4gKiAgICAgLy8uLi5cbiAqIF0sIGNhbGxiYWNrKTtcbiAqXG4gKiBhc3luYy53YXRlcmZhbGwoW1xuICogICAgIGFzeW5jLmNvbnN0YW50KGZpbGVuYW1lLCBcInV0ZjhcIiksXG4gKiAgICAgZnMucmVhZEZpbGUsXG4gKiAgICAgZnVuY3Rpb24gKGZpbGVEYXRhLCBuZXh0KSB7XG4gKiAgICAgICAgIC8vLi4uXG4gKiAgICAgfVxuICogICAgIC8vLi4uXG4gKiBdLCBjYWxsYmFjayk7XG4gKlxuICogYXN5bmMuYXV0byh7XG4gKiAgICAgaG9zdG5hbWU6IGFzeW5jLmNvbnN0YW50KFwiaHR0cHM6Ly9zZXJ2ZXIubmV0L1wiKSxcbiAqICAgICBwb3J0OiBmaW5kRnJlZVBvcnQsXG4gKiAgICAgbGF1bmNoU2VydmVyOiBbXCJob3N0bmFtZVwiLCBcInBvcnRcIiwgZnVuY3Rpb24gKG9wdGlvbnMsIGNiKSB7XG4gKiAgICAgICAgIHN0YXJ0U2VydmVyKG9wdGlvbnMsIGNiKTtcbiAqICAgICB9XSxcbiAqICAgICAvLy4uLlxuICogfSwgY2FsbGJhY2spO1xuICovXG52YXIgY29uc3RhbnQgPSBmdW5jdGlvbigvKi4uLnZhbHVlcyovKSB7XG4gICAgdmFyIHZhbHVlcyA9IHNsaWNlKGFyZ3VtZW50cyk7XG4gICAgdmFyIGFyZ3MgPSBbbnVsbF0uY29uY2F0KHZhbHVlcyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgvKi4uLmlnbm9yZWRBcmdzLCBjYWxsYmFjayovKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xufTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVRlc3RlcihjaGVjaywgZ2V0UmVzdWx0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVhY2hmbiwgYXJyLCBpdGVyYXRlZSwgY2IpIHtcbiAgICAgICAgY2IgPSBjYiB8fCBub29wO1xuICAgICAgICB2YXIgdGVzdFBhc3NlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgdGVzdFJlc3VsdDtcbiAgICAgICAgZWFjaGZuKGFyciwgZnVuY3Rpb24odmFsdWUsIF8sIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpdGVyYXRlZSh2YWx1ZSwgZnVuY3Rpb24oZXJyLCByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjaGVjayhyZXN1bHQpICYmICF0ZXN0UmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3RQYXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0ZXN0UmVzdWx0ID0gZ2V0UmVzdWx0KHRydWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgYnJlYWtMb29wKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYihlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYihudWxsLCB0ZXN0UGFzc2VkID8gdGVzdFJlc3VsdCA6IGdldFJlc3VsdChmYWxzZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBfZmluZEdldFJlc3VsdCh2LCB4KSB7XG4gICAgcmV0dXJuIHg7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgdmFsdWUgaW4gYGNvbGxgIHRoYXQgcGFzc2VzIGFuIGFzeW5jIHRydXRoIHRlc3QuIFRoZVxuICogYGl0ZXJhdGVlYCBpcyBhcHBsaWVkIGluIHBhcmFsbGVsLCBtZWFuaW5nIHRoZSBmaXJzdCBpdGVyYXRlZSB0byByZXR1cm5cbiAqIGB0cnVlYCB3aWxsIGZpcmUgdGhlIGRldGVjdCBgY2FsbGJhY2tgIHdpdGggdGhhdCByZXN1bHQuIFRoYXQgbWVhbnMgdGhlXG4gKiByZXN1bHQgbWlnaHQgbm90IGJlIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBvcmlnaW5hbCBgY29sbGAgKGluIHRlcm1zIG9mIG9yZGVyKVxuICogdGhhdCBwYXNzZXMgdGhlIHRlc3QuXG5cbiAqIElmIG9yZGVyIHdpdGhpbiB0aGUgb3JpZ2luYWwgYGNvbGxgIGlzIGltcG9ydGFudCwgdGhlbiBsb29rIGF0XG4gKiBbYGRldGVjdFNlcmllc2Bde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5kZXRlY3RTZXJpZXN9LlxuICpcbiAqIEBuYW1lIGRldGVjdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGFsaWFzIGZpbmRcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uc1xuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEEgdHJ1dGggdGVzdCB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW4gYGNvbGxgLlxuICogVGhlIGl0ZXJhdGVlIG11c3QgY29tcGxldGUgd2l0aCBhIGJvb2xlYW4gdmFsdWUgYXMgaXRzIHJlc3VsdC5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFzIHNvb24gYXMgYW55XG4gKiBpdGVyYXRlZSByZXR1cm5zIGB0cnVlYCwgb3IgYWZ0ZXIgYWxsIHRoZSBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLlxuICogUmVzdWx0IHdpbGwgYmUgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGFycmF5IHRoYXQgcGFzc2VzIHRoZSB0cnV0aCB0ZXN0XG4gKiAoaXRlcmF0ZWUpIG9yIHRoZSB2YWx1ZSBgdW5kZWZpbmVkYCBpZiBub25lIHBhc3NlZC4gSW52b2tlZCB3aXRoXG4gKiAoZXJyLCByZXN1bHQpLlxuICogQGV4YW1wbGVcbiAqXG4gKiBhc3luYy5kZXRlY3QoWydmaWxlMScsJ2ZpbGUyJywnZmlsZTMnXSwgZnVuY3Rpb24oZmlsZVBhdGgsIGNhbGxiYWNrKSB7XG4gKiAgICAgZnMuYWNjZXNzKGZpbGVQYXRoLCBmdW5jdGlvbihlcnIpIHtcbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgIWVycilcbiAqICAgICB9KTtcbiAqIH0sIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gcmVzdWx0IG5vdyBlcXVhbHMgdGhlIGZpcnN0IGZpbGUgaW4gdGhlIGxpc3QgdGhhdCBleGlzdHNcbiAqIH0pO1xuICovXG52YXIgZGV0ZWN0ID0gZG9QYXJhbGxlbChfY3JlYXRlVGVzdGVyKGlkZW50aXR5LCBfZmluZEdldFJlc3VsdCkpO1xuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgZGV0ZWN0YF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmRldGVjdH0gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhXG4gKiB0aW1lLlxuICpcbiAqIEBuYW1lIGRldGVjdExpbWl0XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5kZXRlY3Rde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5kZXRlY3R9XG4gKiBAYWxpYXMgZmluZExpbWl0XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvbnNcbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBIHRydXRoIHRlc3QgdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluIGBjb2xsYC5cbiAqIFRoZSBpdGVyYXRlZSBtdXN0IGNvbXBsZXRlIHdpdGggYSBib29sZWFuIHZhbHVlIGFzIGl0cyByZXN1bHQuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhcyBzb29uIGFzIGFueVxuICogaXRlcmF0ZWUgcmV0dXJucyBgdHJ1ZWAsIG9yIGFmdGVyIGFsbCB0aGUgYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZC5cbiAqIFJlc3VsdCB3aWxsIGJlIHRoZSBmaXJzdCBpdGVtIGluIHRoZSBhcnJheSB0aGF0IHBhc3NlcyB0aGUgdHJ1dGggdGVzdFxuICogKGl0ZXJhdGVlKSBvciB0aGUgdmFsdWUgYHVuZGVmaW5lZGAgaWYgbm9uZSBwYXNzZWQuIEludm9rZWQgd2l0aFxuICogKGVyciwgcmVzdWx0KS5cbiAqL1xudmFyIGRldGVjdExpbWl0ID0gZG9QYXJhbGxlbExpbWl0KF9jcmVhdGVUZXN0ZXIoaWRlbnRpdHksIF9maW5kR2V0UmVzdWx0KSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BkZXRlY3RgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZGV0ZWN0fSBidXQgcnVucyBvbmx5IGEgc2luZ2xlIGFzeW5jIG9wZXJhdGlvbiBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgZGV0ZWN0U2VyaWVzXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5kZXRlY3Rde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5kZXRlY3R9XG4gKiBAYWxpYXMgZmluZFNlcmllc1xuICogQGNhdGVnb3J5IENvbGxlY3Rpb25zXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQSB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpbiBgY29sbGAuXG4gKiBUaGUgaXRlcmF0ZWUgbXVzdCBjb21wbGV0ZSB3aXRoIGEgYm9vbGVhbiB2YWx1ZSBhcyBpdHMgcmVzdWx0LlxuICogSW52b2tlZCB3aXRoIChpdGVtLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYXMgc29vbiBhcyBhbnlcbiAqIGl0ZXJhdGVlIHJldHVybnMgYHRydWVgLCBvciBhZnRlciBhbGwgdGhlIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQuXG4gKiBSZXN1bHQgd2lsbCBiZSB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgYXJyYXkgdGhhdCBwYXNzZXMgdGhlIHRydXRoIHRlc3RcbiAqIChpdGVyYXRlZSkgb3IgdGhlIHZhbHVlIGB1bmRlZmluZWRgIGlmIG5vbmUgcGFzc2VkLiBJbnZva2VkIHdpdGhcbiAqIChlcnIsIHJlc3VsdCkuXG4gKi9cbnZhciBkZXRlY3RTZXJpZXMgPSBkb0xpbWl0KGRldGVjdExpbWl0LCAxKTtcblxuZnVuY3Rpb24gY29uc29sZUZ1bmMobmFtZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZm4vKiwgLi4uYXJncyovKSB7XG4gICAgICAgIHZhciBhcmdzID0gc2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgYXJncy5wdXNoKGZ1bmN0aW9uIChlcnIvKiwgLi4uYXJncyovKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IHNsaWNlKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb25zb2xlW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5RWFjaChhcmdzLCBmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZVtuYW1lXSh4KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd3JhcEFzeW5jKGZuKS5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIExvZ3MgdGhlIHJlc3VsdCBvZiBhbiBbYGFzeW5jYCBmdW5jdGlvbl17QGxpbmsgQXN5bmNGdW5jdGlvbn0gdG8gdGhlXG4gKiBgY29uc29sZWAgdXNpbmcgYGNvbnNvbGUuZGlyYCB0byBkaXNwbGF5IHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSByZXN1bHRpbmcgb2JqZWN0LlxuICogT25seSB3b3JrcyBpbiBOb2RlLmpzIG9yIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBgY29uc29sZS5kaXJgIGFuZFxuICogYGNvbnNvbGUuZXJyb3JgIChzdWNoIGFzIEZGIGFuZCBDaHJvbWUpLlxuICogSWYgbXVsdGlwbGUgYXJndW1lbnRzIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBhc3luYyBmdW5jdGlvbixcbiAqIGBjb25zb2xlLmRpcmAgaXMgY2FsbGVkIG9uIGVhY2ggYXJndW1lbnQgaW4gb3JkZXIuXG4gKlxuICogQG5hbWUgZGlyXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOlV0aWxzXG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBmdW5jdGlvbiAtIFRoZSBmdW5jdGlvbiB5b3Ugd2FudCB0byBldmVudHVhbGx5IGFwcGx5XG4gKiBhbGwgYXJndW1lbnRzIHRvLlxuICogQHBhcmFtIHsuLi4qfSBhcmd1bWVudHMuLi4gLSBBbnkgbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBhcHBseSB0byB0aGUgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIGluIGEgbW9kdWxlXG4gKiB2YXIgaGVsbG8gPSBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuICogICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsIHtoZWxsbzogbmFtZX0pO1xuICogICAgIH0sIDEwMDApO1xuICogfTtcbiAqXG4gKiAvLyBpbiB0aGUgbm9kZSByZXBsXG4gKiBub2RlPiBhc3luYy5kaXIoaGVsbG8sICd3b3JsZCcpO1xuICoge2hlbGxvOiAnd29ybGQnfVxuICovXG52YXIgZGlyID0gY29uc29sZUZ1bmMoJ2RpcicpO1xuXG4vKipcbiAqIFRoZSBwb3N0LWNoZWNrIHZlcnNpb24gb2YgW2BkdXJpbmdgXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cuZHVyaW5nfS4gVG8gcmVmbGVjdCB0aGUgZGlmZmVyZW5jZSBpblxuICogdGhlIG9yZGVyIG9mIG9wZXJhdGlvbnMsIHRoZSBhcmd1bWVudHMgYHRlc3RgIGFuZCBgZm5gIGFyZSBzd2l0Y2hlZC5cbiAqXG4gKiBBbHNvIGEgdmVyc2lvbiBvZiBbYGRvV2hpbHN0YF17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LmRvV2hpbHN0fSB3aXRoIGFzeW5jaHJvbm91cyBgdGVzdGAgZnVuY3Rpb24uXG4gKiBAbmFtZSBkb0R1cmluZ1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuZHVyaW5nXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cuZHVyaW5nfVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBmbiAtIEFuIGFzeW5jIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBlYWNoIHRpbWVcbiAqIGB0ZXN0YCBwYXNzZXMuIEludm9rZWQgd2l0aCAoY2FsbGJhY2spLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSB0ZXN0IC0gYXN5bmNocm9ub3VzIHRydXRoIHRlc3QgdG8gcGVyZm9ybSBiZWZvcmUgZWFjaFxuICogZXhlY3V0aW9uIG9mIGBmbmAuIEludm9rZWQgd2l0aCAoLi4uYXJncywgY2FsbGJhY2spLCB3aGVyZSBgLi4uYXJnc2AgYXJlIHRoZVxuICogbm9uLWVycm9yIGFyZ3MgZnJvbSB0aGUgcHJldmlvdXMgY2FsbGJhY2sgb2YgYGZuYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciB0aGUgdGVzdFxuICogZnVuY3Rpb24gaGFzIGZhaWxlZCBhbmQgcmVwZWF0ZWQgZXhlY3V0aW9uIG9mIGBmbmAgaGFzIHN0b3BwZWQuIGBjYWxsYmFja2BcbiAqIHdpbGwgYmUgcGFzc2VkIGFuIGVycm9yIGlmIG9uZSBvY2N1cnJlZCwgb3RoZXJ3aXNlIGBudWxsYC5cbiAqL1xuZnVuY3Rpb24gZG9EdXJpbmcoZm4sIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBvbmx5T25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICB2YXIgX2ZuID0gd3JhcEFzeW5jKGZuKTtcbiAgICB2YXIgX3Rlc3QgPSB3cmFwQXN5bmModGVzdCk7XG5cbiAgICBmdW5jdGlvbiBuZXh0KGVyci8qLCAuLi5hcmdzKi8pIHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgIHZhciBhcmdzID0gc2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgYXJncy5wdXNoKGNoZWNrKTtcbiAgICAgICAgX3Rlc3QuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2soZXJyLCB0cnV0aCkge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgaWYgKCF0cnV0aCkgcmV0dXJuIGNhbGxiYWNrKG51bGwpO1xuICAgICAgICBfZm4obmV4dCk7XG4gICAgfVxuXG4gICAgY2hlY2sobnVsbCwgdHJ1ZSk7XG5cbn1cblxuLyoqXG4gKiBUaGUgcG9zdC1jaGVjayB2ZXJzaW9uIG9mIFtgd2hpbHN0YF17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LndoaWxzdH0uIFRvIHJlZmxlY3QgdGhlIGRpZmZlcmVuY2UgaW5cbiAqIHRoZSBvcmRlciBvZiBvcGVyYXRpb25zLCB0aGUgYXJndW1lbnRzIGB0ZXN0YCBhbmQgYGl0ZXJhdGVlYCBhcmUgc3dpdGNoZWQuXG4gKlxuICogYGRvV2hpbHN0YCBpcyB0byBgd2hpbHN0YCBhcyBgZG8gd2hpbGVgIGlzIHRvIGB3aGlsZWAgaW4gcGxhaW4gSmF2YVNjcmlwdC5cbiAqXG4gKiBAbmFtZSBkb1doaWxzdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMud2hpbHN0XXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cud2hpbHN0fVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEEgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIGVhY2ggdGltZSBgdGVzdGBcbiAqIHBhc3Nlcy4gSW52b2tlZCB3aXRoIChjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0ZXN0IC0gc3luY2hyb25vdXMgdHJ1dGggdGVzdCB0byBwZXJmb3JtIGFmdGVyIGVhY2hcbiAqIGV4ZWN1dGlvbiBvZiBgaXRlcmF0ZWVgLiBJbnZva2VkIHdpdGggYW55IG5vbi1lcnJvciBjYWxsYmFjayByZXN1bHRzIG9mXG4gKiBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHRoZSB0ZXN0XG4gKiBmdW5jdGlvbiBoYXMgZmFpbGVkIGFuZCByZXBlYXRlZCBleGVjdXRpb24gb2YgYGl0ZXJhdGVlYCBoYXMgc3RvcHBlZC5cbiAqIGBjYWxsYmFja2Agd2lsbCBiZSBwYXNzZWQgYW4gZXJyb3IgYW5kIGFueSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBmaW5hbFxuICogYGl0ZXJhdGVlYCdzIGNhbGxiYWNrLiBJbnZva2VkIHdpdGggKGVyciwgW3Jlc3VsdHNdKTtcbiAqL1xuZnVuY3Rpb24gZG9XaGlsc3QoaXRlcmF0ZWUsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBvbmx5T25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICB2YXIgX2l0ZXJhdGVlID0gd3JhcEFzeW5jKGl0ZXJhdGVlKTtcbiAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uKGVyci8qLCAuLi5hcmdzKi8pIHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgIHZhciBhcmdzID0gc2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaWYgKHRlc3QuYXBwbHkodGhpcywgYXJncykpIHJldHVybiBfaXRlcmF0ZWUobmV4dCk7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIFtudWxsXS5jb25jYXQoYXJncykpO1xuICAgIH07XG4gICAgX2l0ZXJhdGVlKG5leHQpO1xufVxuXG4vKipcbiAqIExpa2UgWydkb1doaWxzdCdde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5kb1doaWxzdH0sIGV4Y2VwdCB0aGUgYHRlc3RgIGlzIGludmVydGVkLiBOb3RlIHRoZVxuICogYXJndW1lbnQgb3JkZXJpbmcgZGlmZmVycyBmcm9tIGB1bnRpbGAuXG4gKlxuICogQG5hbWUgZG9VbnRpbFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuZG9XaGlsc3Rde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5kb1doaWxzdH1cbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgZWFjaCB0aW1lXG4gKiBgdGVzdGAgZmFpbHMuIEludm9rZWQgd2l0aCAoY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdGVzdCAtIHN5bmNocm9ub3VzIHRydXRoIHRlc3QgdG8gcGVyZm9ybSBhZnRlciBlYWNoXG4gKiBleGVjdXRpb24gb2YgYGl0ZXJhdGVlYC4gSW52b2tlZCB3aXRoIGFueSBub24tZXJyb3IgY2FsbGJhY2sgcmVzdWx0cyBvZlxuICogYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciB0aGUgdGVzdFxuICogZnVuY3Rpb24gaGFzIHBhc3NlZCBhbmQgcmVwZWF0ZWQgZXhlY3V0aW9uIG9mIGBpdGVyYXRlZWAgaGFzIHN0b3BwZWQuIGBjYWxsYmFja2BcbiAqIHdpbGwgYmUgcGFzc2VkIGFuIGVycm9yIGFuZCBhbnkgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgZmluYWwgYGl0ZXJhdGVlYCdzXG4gKiBjYWxsYmFjay4gSW52b2tlZCB3aXRoIChlcnIsIFtyZXN1bHRzXSk7XG4gKi9cbmZ1bmN0aW9uIGRvVW50aWwoaXRlcmF0ZWUsIHRlc3QsIGNhbGxiYWNrKSB7XG4gICAgZG9XaGlsc3QoaXRlcmF0ZWUsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gIXRlc3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9LCBjYWxsYmFjayk7XG59XG5cbi8qKlxuICogTGlrZSBbYHdoaWxzdGBde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy53aGlsc3R9LCBleGNlcHQgdGhlIGB0ZXN0YCBpcyBhbiBhc3luY2hyb25vdXMgZnVuY3Rpb24gdGhhdFxuICogaXMgcGFzc2VkIGEgY2FsbGJhY2sgaW4gdGhlIGZvcm0gb2YgYGZ1bmN0aW9uIChlcnIsIHRydXRoKWAuIElmIGVycm9yIGlzXG4gKiBwYXNzZWQgdG8gYHRlc3RgIG9yIGBmbmAsIHRoZSBtYWluIGNhbGxiYWNrIGlzIGltbWVkaWF0ZWx5IGNhbGxlZCB3aXRoIHRoZVxuICogdmFsdWUgb2YgdGhlIGVycm9yLlxuICpcbiAqIEBuYW1lIGR1cmluZ1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMud2hpbHN0XXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cud2hpbHN0fVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSB0ZXN0IC0gYXN5bmNocm9ub3VzIHRydXRoIHRlc3QgdG8gcGVyZm9ybSBiZWZvcmUgZWFjaFxuICogZXhlY3V0aW9uIG9mIGBmbmAuIEludm9rZWQgd2l0aCAoY2FsbGJhY2spLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBmbiAtIEFuIGFzeW5jIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBlYWNoIHRpbWVcbiAqIGB0ZXN0YCBwYXNzZXMuIEludm9rZWQgd2l0aCAoY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIHRoZSB0ZXN0XG4gKiBmdW5jdGlvbiBoYXMgZmFpbGVkIGFuZCByZXBlYXRlZCBleGVjdXRpb24gb2YgYGZuYCBoYXMgc3RvcHBlZC4gYGNhbGxiYWNrYFxuICogd2lsbCBiZSBwYXNzZWQgYW4gZXJyb3IsIGlmIG9uZSBvY2N1cnJlZCwgb3RoZXJ3aXNlIGBudWxsYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGNvdW50ID0gMDtcbiAqXG4gKiBhc3luYy5kdXJpbmcoXG4gKiAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBjb3VudCA8IDUpO1xuICogICAgIH0sXG4gKiAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIGNvdW50Kys7XG4gKiAgICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDApO1xuICogICAgIH0sXG4gKiAgICAgZnVuY3Rpb24gKGVycikge1xuICogICAgICAgICAvLyA1IHNlY29uZHMgaGF2ZSBwYXNzZWRcbiAqICAgICB9XG4gKiApO1xuICovXG5mdW5jdGlvbiBkdXJpbmcodGVzdCwgZm4sIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBvbmx5T25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICB2YXIgX2ZuID0gd3JhcEFzeW5jKGZuKTtcbiAgICB2YXIgX3Rlc3QgPSB3cmFwQXN5bmModGVzdCk7XG5cbiAgICBmdW5jdGlvbiBuZXh0KGVycikge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgX3Rlc3QoY2hlY2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrKGVyciwgdHJ1dGgpIHtcbiAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gICAgICAgIGlmICghdHJ1dGgpIHJldHVybiBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgX2ZuKG5leHQpO1xuICAgIH1cblxuICAgIF90ZXN0KGNoZWNrKTtcbn1cblxuZnVuY3Rpb24gX3dpdGhvdXRJbmRleChpdGVyYXRlZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gaXRlcmF0ZWUodmFsdWUsIGNhbGxiYWNrKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEFwcGxpZXMgdGhlIGZ1bmN0aW9uIGBpdGVyYXRlZWAgdG8gZWFjaCBpdGVtIGluIGBjb2xsYCwgaW4gcGFyYWxsZWwuXG4gKiBUaGUgYGl0ZXJhdGVlYCBpcyBjYWxsZWQgd2l0aCBhbiBpdGVtIGZyb20gdGhlIGxpc3QsIGFuZCBhIGNhbGxiYWNrIGZvciB3aGVuXG4gKiBpdCBoYXMgZmluaXNoZWQuIElmIHRoZSBgaXRlcmF0ZWVgIHBhc3NlcyBhbiBlcnJvciB0byBpdHMgYGNhbGxiYWNrYCwgdGhlXG4gKiBtYWluIGBjYWxsYmFja2AgKGZvciB0aGUgYGVhY2hgIGZ1bmN0aW9uKSBpcyBpbW1lZGlhdGVseSBjYWxsZWQgd2l0aCB0aGVcbiAqIGVycm9yLlxuICpcbiAqIE5vdGUsIHRoYXQgc2luY2UgdGhpcyBmdW5jdGlvbiBhcHBsaWVzIGBpdGVyYXRlZWAgdG8gZWFjaCBpdGVtIGluIHBhcmFsbGVsLFxuICogdGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgdGhlIGl0ZXJhdGVlIGZ1bmN0aW9ucyB3aWxsIGNvbXBsZXRlIGluIG9yZGVyLlxuICpcbiAqIEBuYW1lIGVhY2hcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBhbGlhcyBmb3JFYWNoXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEFuIGFzeW5jIGZ1bmN0aW9uIHRvIGFwcGx5IHRvXG4gKiBlYWNoIGl0ZW0gaW4gYGNvbGxgLiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIFRoZSBhcnJheSBpbmRleCBpcyBub3QgcGFzc2VkIHRvIHRoZSBpdGVyYXRlZS5cbiAqIElmIHlvdSBuZWVkIHRoZSBpbmRleCwgdXNlIGBlYWNoT2ZgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gYWxsXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIEludm9rZWQgd2l0aCAoZXJyKS5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gYXNzdW1pbmcgb3BlbkZpbGVzIGlzIGFuIGFycmF5IG9mIGZpbGUgbmFtZXMgYW5kIHNhdmVGaWxlIGlzIGEgZnVuY3Rpb25cbiAqIC8vIHRvIHNhdmUgdGhlIG1vZGlmaWVkIGNvbnRlbnRzIG9mIHRoYXQgZmlsZTpcbiAqXG4gKiBhc3luYy5lYWNoKG9wZW5GaWxlcywgc2F2ZUZpbGUsIGZ1bmN0aW9uKGVycil7XG4gKiAgIC8vIGlmIGFueSBvZiB0aGUgc2F2ZXMgcHJvZHVjZWQgYW4gZXJyb3IsIGVyciB3b3VsZCBlcXVhbCB0aGF0IGVycm9yXG4gKiB9KTtcbiAqXG4gKiAvLyBhc3N1bWluZyBvcGVuRmlsZXMgaXMgYW4gYXJyYXkgb2YgZmlsZSBuYW1lc1xuICogYXN5bmMuZWFjaChvcGVuRmlsZXMsIGZ1bmN0aW9uKGZpbGUsIGNhbGxiYWNrKSB7XG4gKlxuICogICAgIC8vIFBlcmZvcm0gb3BlcmF0aW9uIG9uIGZpbGUgaGVyZS5cbiAqICAgICBjb25zb2xlLmxvZygnUHJvY2Vzc2luZyBmaWxlICcgKyBmaWxlKTtcbiAqXG4gKiAgICAgaWYoIGZpbGUubGVuZ3RoID4gMzIgKSB7XG4gKiAgICAgICBjb25zb2xlLmxvZygnVGhpcyBmaWxlIG5hbWUgaXMgdG9vIGxvbmcnKTtcbiAqICAgICAgIGNhbGxiYWNrKCdGaWxlIG5hbWUgdG9vIGxvbmcnKTtcbiAqICAgICB9IGVsc2Uge1xuICogICAgICAgLy8gRG8gd29yayB0byBwcm9jZXNzIGZpbGUgaGVyZVxuICogICAgICAgY29uc29sZS5sb2coJ0ZpbGUgcHJvY2Vzc2VkJyk7XG4gKiAgICAgICBjYWxsYmFjaygpO1xuICogICAgIH1cbiAqIH0sIGZ1bmN0aW9uKGVycikge1xuICogICAgIC8vIGlmIGFueSBvZiB0aGUgZmlsZSBwcm9jZXNzaW5nIHByb2R1Y2VkIGFuIGVycm9yLCBlcnIgd291bGQgZXF1YWwgdGhhdCBlcnJvclxuICogICAgIGlmKCBlcnIgKSB7XG4gKiAgICAgICAvLyBPbmUgb2YgdGhlIGl0ZXJhdGlvbnMgcHJvZHVjZWQgYW4gZXJyb3IuXG4gKiAgICAgICAvLyBBbGwgcHJvY2Vzc2luZyB3aWxsIG5vdyBzdG9wLlxuICogICAgICAgY29uc29sZS5sb2coJ0EgZmlsZSBmYWlsZWQgdG8gcHJvY2VzcycpO1xuICogICAgIH0gZWxzZSB7XG4gKiAgICAgICBjb25zb2xlLmxvZygnQWxsIGZpbGVzIGhhdmUgYmVlbiBwcm9jZXNzZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gKiAgICAgfVxuICogfSk7XG4gKi9cbmZ1bmN0aW9uIGVhY2hMaW1pdChjb2xsLCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICBlYWNoT2YoY29sbCwgX3dpdGhvdXRJbmRleCh3cmFwQXN5bmMoaXRlcmF0ZWUpKSwgY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgZWFjaGBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5lYWNofSBidXQgcnVucyBhIG1heGltdW0gb2YgYGxpbWl0YCBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqXG4gKiBAbmFtZSBlYWNoTGltaXRcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmVhY2hde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5lYWNofVxuICogQGFsaWFzIGZvckVhY2hMaW1pdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW5cbiAqIGBjb2xsYC5cbiAqIFRoZSBhcnJheSBpbmRleCBpcyBub3QgcGFzc2VkIHRvIHRoZSBpdGVyYXRlZS5cbiAqIElmIHlvdSBuZWVkIHRoZSBpbmRleCwgdXNlIGBlYWNoT2ZMaW1pdGAuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGFsbFxuICogYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBJbnZva2VkIHdpdGggKGVycikuXG4gKi9cbmZ1bmN0aW9uIGVhY2hMaW1pdCQxKGNvbGwsIGxpbWl0LCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICBfZWFjaE9mTGltaXQobGltaXQpKGNvbGwsIF93aXRob3V0SW5kZXgod3JhcEFzeW5jKGl0ZXJhdGVlKSksIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYGVhY2hgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZWFjaH0gYnV0IHJ1bnMgb25seSBhIHNpbmdsZSBhc3luYyBvcGVyYXRpb24gYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIGVhY2hTZXJpZXNcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmVhY2hde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5lYWNofVxuICogQGFsaWFzIGZvckVhY2hTZXJpZXNcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaFxuICogaXRlbSBpbiBgY29sbGAuXG4gKiBUaGUgYXJyYXkgaW5kZXggaXMgbm90IHBhc3NlZCB0byB0aGUgaXRlcmF0ZWUuXG4gKiBJZiB5b3UgbmVlZCB0aGUgaW5kZXgsIHVzZSBgZWFjaE9mU2VyaWVzYC5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gYWxsXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIEludm9rZWQgd2l0aCAoZXJyKS5cbiAqL1xudmFyIGVhY2hTZXJpZXMgPSBkb0xpbWl0KGVhY2hMaW1pdCQxLCAxKTtcblxuLyoqXG4gKiBXcmFwIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBlbnN1cmUgaXQgY2FsbHMgaXRzIGNhbGxiYWNrIG9uIGEgbGF0ZXIgdGljayBvZlxuICogdGhlIGV2ZW50IGxvb3AuICBJZiB0aGUgZnVuY3Rpb24gYWxyZWFkeSBjYWxscyBpdHMgY2FsbGJhY2sgb24gYSBuZXh0IHRpY2ssXG4gKiBubyBleHRyYSBkZWZlcnJhbCBpcyBhZGRlZC4gVGhpcyBpcyB1c2VmdWwgZm9yIHByZXZlbnRpbmcgc3RhY2sgb3ZlcmZsb3dzXG4gKiAoYFJhbmdlRXJyb3I6IE1heGltdW0gY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkYCkgYW5kIGdlbmVyYWxseSBrZWVwaW5nXG4gKiBbWmFsZ29dKGh0dHA6Ly9ibG9nLml6cy5tZS9wb3N0LzU5MTQyNzQyMTQzL2Rlc2lnbmluZy1hcGlzLWZvci1hc3luY2hyb255KVxuICogY29udGFpbmVkLiBFUzIwMTcgYGFzeW5jYCBmdW5jdGlvbnMgYXJlIHJldHVybmVkIGFzLWlzIC0tIHRoZXkgYXJlIGltbXVuZVxuICogdG8gWmFsZ28ncyBjb3JydXB0aW5nIGluZmx1ZW5jZXMsIGFzIHRoZXkgYWx3YXlzIHJlc29sdmUgb24gYSBsYXRlciB0aWNrLlxuICpcbiAqIEBuYW1lIGVuc3VyZUFzeW5jXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOlV0aWxzXG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBmbiAtIGFuIGFzeW5jIGZ1bmN0aW9uLCBvbmUgdGhhdCBleHBlY3RzIGEgbm9kZS1zdHlsZVxuICogY2FsbGJhY2sgYXMgaXRzIGxhc3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7QXN5bmNGdW5jdGlvbn0gUmV0dXJucyBhIHdyYXBwZWQgZnVuY3Rpb24gd2l0aCB0aGUgZXhhY3Qgc2FtZSBjYWxsXG4gKiBzaWduYXR1cmUgYXMgdGhlIGZ1bmN0aW9uIHBhc3NlZCBpbi5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gc29tZXRpbWVzQXN5bmMoYXJnLCBjYWxsYmFjaykge1xuICogICAgIGlmIChjYWNoZVthcmddKSB7XG4gKiAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBjYWNoZVthcmddKTsgLy8gdGhpcyB3b3VsZCBiZSBzeW5jaHJvbm91cyEhXG4gKiAgICAgfSBlbHNlIHtcbiAqICAgICAgICAgZG9Tb21lSU8oYXJnLCBjYWxsYmFjayk7IC8vIHRoaXMgSU8gd291bGQgYmUgYXN5bmNocm9ub3VzXG4gKiAgICAgfVxuICogfVxuICpcbiAqIC8vIHRoaXMgaGFzIGEgcmlzayBvZiBzdGFjayBvdmVyZmxvd3MgaWYgbWFueSByZXN1bHRzIGFyZSBjYWNoZWQgaW4gYSByb3dcbiAqIGFzeW5jLm1hcFNlcmllcyhhcmdzLCBzb21ldGltZXNBc3luYywgZG9uZSk7XG4gKlxuICogLy8gdGhpcyB3aWxsIGRlZmVyIHNvbWV0aW1lc0FzeW5jJ3MgY2FsbGJhY2sgaWYgbmVjZXNzYXJ5LFxuICogLy8gcHJldmVudGluZyBzdGFjayBvdmVyZmxvd3NcbiAqIGFzeW5jLm1hcFNlcmllcyhhcmdzLCBhc3luYy5lbnN1cmVBc3luYyhzb21ldGltZXNBc3luYyksIGRvbmUpO1xuICovXG5mdW5jdGlvbiBlbnN1cmVBc3luYyhmbikge1xuICAgIGlmIChpc0FzeW5jKGZuKSkgcmV0dXJuIGZuO1xuICAgIHJldHVybiBpbml0aWFsUGFyYW1zKGZ1bmN0aW9uIChhcmdzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc3luYyA9IHRydWU7XG4gICAgICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5uZXJBcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgaWYgKHN5bmMpIHtcbiAgICAgICAgICAgICAgICBzZXRJbW1lZGlhdGUkMShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGlubmVyQXJncyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGlubmVyQXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgc3luYyA9IGZhbHNlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBub3RJZCh2KSB7XG4gICAgcmV0dXJuICF2O1xufVxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGV2ZXJ5IGVsZW1lbnQgaW4gYGNvbGxgIHNhdGlzZmllcyBhbiBhc3luYyB0ZXN0LiBJZiBhbnlcbiAqIGl0ZXJhdGVlIGNhbGwgcmV0dXJucyBgZmFsc2VgLCB0aGUgbWFpbiBgY2FsbGJhY2tgIGlzIGltbWVkaWF0ZWx5IGNhbGxlZC5cbiAqXG4gKiBAbmFtZSBldmVyeVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGFsaWFzIGFsbFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbVxuICogaW4gdGhlIGNvbGxlY3Rpb24gaW4gcGFyYWxsZWwuXG4gKiBUaGUgaXRlcmF0ZWUgbXVzdCBjb21wbGV0ZSB3aXRoIGEgYm9vbGVhbiByZXN1bHQgdmFsdWUuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBhbGwgdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLiBSZXN1bHQgd2lsbCBiZSBlaXRoZXIgYHRydWVgIG9yIGBmYWxzZWBcbiAqIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIG9mIHRoZSBhc3luYyB0ZXN0cy4gSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdCkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLmV2ZXJ5KFsnZmlsZTEnLCdmaWxlMicsJ2ZpbGUzJ10sIGZ1bmN0aW9uKGZpbGVQYXRoLCBjYWxsYmFjaykge1xuICogICAgIGZzLmFjY2VzcyhmaWxlUGF0aCwgZnVuY3Rpb24oZXJyKSB7XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICFlcnIpXG4gKiAgICAgfSk7XG4gKiB9LCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xuICogICAgIC8vIGlmIHJlc3VsdCBpcyB0cnVlIHRoZW4gZXZlcnkgZmlsZSBleGlzdHNcbiAqIH0pO1xuICovXG52YXIgZXZlcnkgPSBkb1BhcmFsbGVsKF9jcmVhdGVUZXN0ZXIobm90SWQsIG5vdElkKSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BldmVyeWBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5ldmVyeX0gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgZXZlcnlMaW1pdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuZXZlcnlde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5ldmVyeX1cbiAqIEBhbGlhcyBhbGxMaW1pdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbVxuICogaW4gdGhlIGNvbGxlY3Rpb24gaW4gcGFyYWxsZWwuXG4gKiBUaGUgaXRlcmF0ZWUgbXVzdCBjb21wbGV0ZSB3aXRoIGEgYm9vbGVhbiByZXN1bHQgdmFsdWUuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBhbGwgdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLiBSZXN1bHQgd2lsbCBiZSBlaXRoZXIgYHRydWVgIG9yIGBmYWxzZWBcbiAqIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIG9mIHRoZSBhc3luYyB0ZXN0cy4gSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdCkuXG4gKi9cbnZhciBldmVyeUxpbWl0ID0gZG9QYXJhbGxlbExpbWl0KF9jcmVhdGVUZXN0ZXIobm90SWQsIG5vdElkKSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BldmVyeWBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5ldmVyeX0gYnV0IHJ1bnMgb25seSBhIHNpbmdsZSBhc3luYyBvcGVyYXRpb24gYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIGV2ZXJ5U2VyaWVzXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5ldmVyeV17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmV2ZXJ5fVxuICogQGFsaWFzIGFsbFNlcmllc1xuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbVxuICogaW4gdGhlIGNvbGxlY3Rpb24gaW4gc2VyaWVzLlxuICogVGhlIGl0ZXJhdGVlIG11c3QgY29tcGxldGUgd2l0aCBhIGJvb2xlYW4gcmVzdWx0IHZhbHVlLlxuICogSW52b2tlZCB3aXRoIChpdGVtLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgYWxsIHRoZVxuICogYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZC4gUmVzdWx0IHdpbGwgYmUgZWl0aGVyIGB0cnVlYCBvciBgZmFsc2VgXG4gKiBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBvZiB0aGUgYXN5bmMgdGVzdHMuIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHQpLlxuICovXG52YXIgZXZlcnlTZXJpZXMgPSBkb0xpbWl0KGV2ZXJ5TGltaXQsIDEpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJBcnJheShlYWNoZm4sIGFyciwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHRydXRoVmFsdWVzID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICAgIGVhY2hmbihhcnIsIGZ1bmN0aW9uICh4LCBpbmRleCwgY2FsbGJhY2spIHtcbiAgICAgICAgaXRlcmF0ZWUoeCwgZnVuY3Rpb24gKGVyciwgdikge1xuICAgICAgICAgICAgdHJ1dGhWYWx1ZXNbaW5kZXhdID0gISF2O1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0cnV0aFZhbHVlc1tpXSkgcmVzdWx0cy5wdXNoKGFycltpXSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0cyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckdlbmVyaWMoZWFjaGZuLCBjb2xsLCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIGVhY2hmbihjb2xsLCBmdW5jdGlvbiAoeCwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gICAgICAgIGl0ZXJhdGVlKHgsIGZ1bmN0aW9uIChlcnIsIHYpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe2luZGV4OiBpbmRleCwgdmFsdWU6IHh9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgYXJyYXlNYXAocmVzdWx0cy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEuaW5kZXggLSBiLmluZGV4O1xuICAgICAgICAgICAgfSksIGJhc2VQcm9wZXJ0eSgndmFsdWUnKSkpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9maWx0ZXIoZWFjaGZuLCBjb2xsLCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZmlsdGVyID0gaXNBcnJheUxpa2UoY29sbCkgPyBmaWx0ZXJBcnJheSA6IGZpbHRlckdlbmVyaWM7XG4gICAgZmlsdGVyKGVhY2hmbiwgY29sbCwgd3JhcEFzeW5jKGl0ZXJhdGVlKSwgY2FsbGJhY2sgfHwgbm9vcCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBhcnJheSBvZiBhbGwgdGhlIHZhbHVlcyBpbiBgY29sbGAgd2hpY2ggcGFzcyBhbiBhc3luYyB0cnV0aFxuICogdGVzdC4gVGhpcyBvcGVyYXRpb24gaXMgcGVyZm9ybWVkIGluIHBhcmFsbGVsLCBidXQgdGhlIHJlc3VsdHMgYXJyYXkgd2lsbCBiZVxuICogaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIG9yaWdpbmFsLlxuICpcbiAqIEBuYW1lIGZpbHRlclxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQGFsaWFzIHNlbGVjdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIC0gQSB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpbiBgY29sbGAuXG4gKiBUaGUgYGl0ZXJhdGVlYCBpcyBwYXNzZWQgYSBgY2FsbGJhY2soZXJyLCB0cnV0aFZhbHVlKWAsIHdoaWNoIG11c3QgYmUgY2FsbGVkXG4gKiB3aXRoIGEgYm9vbGVhbiBhcmd1bWVudCBvbmNlIGl0IGhhcyBjb21wbGV0ZWQuIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIGFsbCB0aGVcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQuIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHRzKS5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMuZmlsdGVyKFsnZmlsZTEnLCdmaWxlMicsJ2ZpbGUzJ10sIGZ1bmN0aW9uKGZpbGVQYXRoLCBjYWxsYmFjaykge1xuICogICAgIGZzLmFjY2VzcyhmaWxlUGF0aCwgZnVuY3Rpb24oZXJyKSB7XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICFlcnIpXG4gKiAgICAgfSk7XG4gKiB9LCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAqICAgICAvLyByZXN1bHRzIG5vdyBlcXVhbHMgYW4gYXJyYXkgb2YgdGhlIGV4aXN0aW5nIGZpbGVzXG4gKiB9KTtcbiAqL1xudmFyIGZpbHRlciA9IGRvUGFyYWxsZWwoX2ZpbHRlcik7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BmaWx0ZXJgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZmlsdGVyfSBidXQgcnVucyBhIG1heGltdW0gb2YgYGxpbWl0YCBhc3luYyBvcGVyYXRpb25zIGF0IGFcbiAqIHRpbWUuXG4gKlxuICogQG5hbWUgZmlsdGVyTGltaXRcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmZpbHRlcl17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmZpbHRlcn1cbiAqIEBhbGlhcyBzZWxlY3RMaW1pdFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIC0gQSB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpbiBgY29sbGAuXG4gKiBUaGUgYGl0ZXJhdGVlYCBpcyBwYXNzZWQgYSBgY2FsbGJhY2soZXJyLCB0cnV0aFZhbHVlKWAsIHdoaWNoIG11c3QgYmUgY2FsbGVkXG4gKiB3aXRoIGEgYm9vbGVhbiBhcmd1bWVudCBvbmNlIGl0IGhhcyBjb21wbGV0ZWQuIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIGFsbCB0aGVcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQuIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHRzKS5cbiAqL1xudmFyIGZpbHRlckxpbWl0ID0gZG9QYXJhbGxlbExpbWl0KF9maWx0ZXIpO1xuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgZmlsdGVyYF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmZpbHRlcn0gYnV0IHJ1bnMgb25seSBhIHNpbmdsZSBhc3luYyBvcGVyYXRpb24gYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIGZpbHRlclNlcmllc1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuZmlsdGVyXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZmlsdGVyfVxuICogQGFsaWFzIHNlbGVjdFNlcmllc1xuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIC0gQSB0cnV0aCB0ZXN0IHRvIGFwcGx5IHRvIGVhY2ggaXRlbSBpbiBgY29sbGAuXG4gKiBUaGUgYGl0ZXJhdGVlYCBpcyBwYXNzZWQgYSBgY2FsbGJhY2soZXJyLCB0cnV0aFZhbHVlKWAsIHdoaWNoIG11c3QgYmUgY2FsbGVkXG4gKiB3aXRoIGEgYm9vbGVhbiBhcmd1bWVudCBvbmNlIGl0IGhhcyBjb21wbGV0ZWQuIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIGFsbCB0aGVcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQuIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHRzKVxuICovXG52YXIgZmlsdGVyU2VyaWVzID0gZG9MaW1pdChmaWx0ZXJMaW1pdCwgMSk7XG5cbi8qKlxuICogQ2FsbHMgdGhlIGFzeW5jaHJvbm91cyBmdW5jdGlvbiBgZm5gIHdpdGggYSBjYWxsYmFjayBwYXJhbWV0ZXIgdGhhdCBhbGxvd3MgaXRcbiAqIHRvIGNhbGwgaXRzZWxmIGFnYWluLCBpbiBzZXJpZXMsIGluZGVmaW5pdGVseS5cblxuICogSWYgYW4gZXJyb3IgaXMgcGFzc2VkIHRvIHRoZSBjYWxsYmFjayB0aGVuIGBlcnJiYWNrYCBpcyBjYWxsZWQgd2l0aCB0aGVcbiAqIGVycm9yLCBhbmQgZXhlY3V0aW9uIHN0b3BzLCBvdGhlcndpc2UgaXQgd2lsbCBuZXZlciBiZSBjYWxsZWQuXG4gKlxuICogQG5hbWUgZm9yZXZlclxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBmbiAtIGFuIGFzeW5jIGZ1bmN0aW9uIHRvIGNhbGwgcmVwZWF0ZWRseS5cbiAqIEludm9rZWQgd2l0aCAobmV4dCkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZXJyYmFja10gLSB3aGVuIGBmbmAgcGFzc2VzIGFuIGVycm9yIHRvIGl0J3MgY2FsbGJhY2ssXG4gKiB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkLCBhbmQgZXhlY3V0aW9uIHN0b3BzLiBJbnZva2VkIHdpdGggKGVycikuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLmZvcmV2ZXIoXG4gKiAgICAgZnVuY3Rpb24obmV4dCkge1xuICogICAgICAgICAvLyBuZXh0IGlzIHN1aXRhYmxlIGZvciBwYXNzaW5nIHRvIHRoaW5ncyB0aGF0IG5lZWQgYSBjYWxsYmFjayhlcnIgWywgd2hhdGV2ZXJdKTtcbiAqICAgICAgICAgLy8gaXQgd2lsbCByZXN1bHQgaW4gdGhpcyBmdW5jdGlvbiBiZWluZyBjYWxsZWQgYWdhaW4uXG4gKiAgICAgfSxcbiAqICAgICBmdW5jdGlvbihlcnIpIHtcbiAqICAgICAgICAgLy8gaWYgbmV4dCBpcyBjYWxsZWQgd2l0aCBhIHZhbHVlIGluIGl0cyBmaXJzdCBwYXJhbWV0ZXIsIGl0IHdpbGwgYXBwZWFyXG4gKiAgICAgICAgIC8vIGluIGhlcmUgYXMgJ2VycicsIGFuZCBleGVjdXRpb24gd2lsbCBzdG9wLlxuICogICAgIH1cbiAqICk7XG4gKi9cbmZ1bmN0aW9uIGZvcmV2ZXIoZm4sIGVycmJhY2spIHtcbiAgICB2YXIgZG9uZSA9IG9ubHlPbmNlKGVycmJhY2sgfHwgbm9vcCk7XG4gICAgdmFyIHRhc2sgPSB3cmFwQXN5bmMoZW5zdXJlQXN5bmMoZm4pKTtcblxuICAgIGZ1bmN0aW9uIG5leHQoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBkb25lKGVycik7XG4gICAgICAgIHRhc2sobmV4dCk7XG4gICAgfVxuICAgIG5leHQoKTtcbn1cblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYGdyb3VwQnlgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZ3JvdXBCeX0gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgZ3JvdXBCeUxpbWl0XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5ncm91cEJ5XXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZ3JvdXBCeX1cbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbGltaXQgLSBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluXG4gKiBgY29sbGAuXG4gKiBUaGUgaXRlcmF0ZWUgc2hvdWxkIGNvbXBsZXRlIHdpdGggYSBga2V5YCB0byBncm91cCB0aGUgdmFsdWUgdW5kZXIuXG4gKiBJbnZva2VkIHdpdGggKHZhbHVlLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiBhbGwgYGl0ZXJhdGVlYFxuICogZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gUmVzdWx0IGlzIGFuIGBPYmplY3RgIHdob3Nlc1xuICogcHJvcGVydGllcyBhcmUgYXJyYXlzIG9mIHZhbHVlcyB3aGljaCByZXR1cm5lZCB0aGUgY29ycmVzcG9uZGluZyBrZXkuXG4gKi9cbnZhciBncm91cEJ5TGltaXQgPSBmdW5jdGlvbihjb2xsLCBsaW1pdCwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICAgIHZhciBfaXRlcmF0ZWUgPSB3cmFwQXN5bmMoaXRlcmF0ZWUpO1xuICAgIG1hcExpbWl0KGNvbGwsIGxpbWl0LCBmdW5jdGlvbih2YWwsIGNhbGxiYWNrKSB7XG4gICAgICAgIF9pdGVyYXRlZSh2YWwsIGZ1bmN0aW9uKGVyciwga2V5KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB7a2V5OiBrZXksIHZhbDogdmFsfSk7XG4gICAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uKGVyciwgbWFwUmVzdWx0cykge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgICAgIC8vIGZyb20gTUROLCBoYW5kbGUgb2JqZWN0IGhhdmluZyBhbiBgaGFzT3duUHJvcGVydHlgIHByb3BcbiAgICAgICAgdmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hcFJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtYXBSZXN1bHRzW2ldKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IG1hcFJlc3VsdHNbaV0ua2V5O1xuICAgICAgICAgICAgICAgIHZhciB2YWwgPSBtYXBSZXN1bHRzW2ldLnZhbDtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdCwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBbdmFsXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCByZXN1bHQpO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IG9iamVjdCwgd2hlcmUgZWFjaCB2YWx1ZSBjb3JyZXNwb25kcyB0byBhbiBhcnJheSBvZiBpdGVtcywgZnJvbVxuICogYGNvbGxgLCB0aGF0IHJldHVybmVkIHRoZSBjb3JyZXNwb25kaW5nIGtleS4gVGhhdCBpcywgdGhlIGtleXMgb2YgdGhlIG9iamVjdFxuICogY29ycmVzcG9uZCB0byB0aGUgdmFsdWVzIHBhc3NlZCB0byB0aGUgYGl0ZXJhdGVlYCBjYWxsYmFjay5cbiAqXG4gKiBOb3RlOiBTaW5jZSB0aGlzIGZ1bmN0aW9uIGFwcGxpZXMgdGhlIGBpdGVyYXRlZWAgdG8gZWFjaCBpdGVtIGluIHBhcmFsbGVsLFxuICogdGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgdGhlIGBpdGVyYXRlZWAgZnVuY3Rpb25zIHdpbGwgY29tcGxldGUgaW4gb3JkZXIuXG4gKiBIb3dldmVyLCB0aGUgdmFsdWVzIGZvciBlYWNoIGtleSBpbiB0aGUgYHJlc3VsdGAgd2lsbCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhc1xuICogdGhlIG9yaWdpbmFsIGBjb2xsYC4gRm9yIE9iamVjdHMsIHRoZSB2YWx1ZXMgd2lsbCByb3VnaGx5IGJlIGluIHRoZSBvcmRlciBvZlxuICogdGhlIG9yaWdpbmFsIE9iamVjdHMnIGtleXMgKGJ1dCB0aGlzIGNhbiB2YXJ5IGFjcm9zcyBKYXZhU2NyaXB0IGVuZ2luZXMpLlxuICpcbiAqIEBuYW1lIGdyb3VwQnlcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluXG4gKiBgY29sbGAuXG4gKiBUaGUgaXRlcmF0ZWUgc2hvdWxkIGNvbXBsZXRlIHdpdGggYSBga2V5YCB0byBncm91cCB0aGUgdmFsdWUgdW5kZXIuXG4gKiBJbnZva2VkIHdpdGggKHZhbHVlLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiBhbGwgYGl0ZXJhdGVlYFxuICogZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gUmVzdWx0IGlzIGFuIGBPYmplY3RgIHdob3Nlc1xuICogcHJvcGVydGllcyBhcmUgYXJyYXlzIG9mIHZhbHVlcyB3aGljaCByZXR1cm5lZCB0aGUgY29ycmVzcG9uZGluZyBrZXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLmdyb3VwQnkoWyd1c2VySWQxJywgJ3VzZXJJZDInLCAndXNlcklkMyddLCBmdW5jdGlvbih1c2VySWQsIGNhbGxiYWNrKSB7XG4gKiAgICAgZGIuZmluZEJ5SWQodXNlcklkLCBmdW5jdGlvbihlcnIsIHVzZXIpIHtcbiAqICAgICAgICAgaWYgKGVycikgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gKiAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB1c2VyLmFnZSk7XG4gKiAgICAgfSk7XG4gKiB9LCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xuICogICAgIC8vIHJlc3VsdCBpcyBvYmplY3QgY29udGFpbmluZyB0aGUgdXNlcklkcyBncm91cGVkIGJ5IGFnZVxuICogICAgIC8vIGUuZy4geyAzMDogWyd1c2VySWQxJywgJ3VzZXJJZDMnXSwgNDI6IFsndXNlcklkMiddfTtcbiAqIH0pO1xuICovXG52YXIgZ3JvdXBCeSA9IGRvTGltaXQoZ3JvdXBCeUxpbWl0LCBJbmZpbml0eSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2Bncm91cEJ5YF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmdyb3VwQnl9IGJ1dCBydW5zIG9ubHkgYSBzaW5nbGUgYXN5bmMgb3BlcmF0aW9uIGF0IGEgdGltZS5cbiAqXG4gKiBAbmFtZSBncm91cEJ5U2VyaWVzXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5ncm91cEJ5XXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZ3JvdXBCeX1cbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbGltaXQgLSBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluXG4gKiBgY29sbGAuXG4gKiBUaGUgaXRlcmF0ZWUgc2hvdWxkIGNvbXBsZXRlIHdpdGggYSBga2V5YCB0byBncm91cCB0aGUgdmFsdWUgdW5kZXIuXG4gKiBJbnZva2VkIHdpdGggKHZhbHVlLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiBhbGwgYGl0ZXJhdGVlYFxuICogZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gUmVzdWx0IGlzIGFuIGBPYmplY3RgIHdob3Nlc1xuICogcHJvcGVydGllcyBhcmUgYXJyYXlzIG9mIHZhbHVlcyB3aGljaCByZXR1cm5lZCB0aGUgY29ycmVzcG9uZGluZyBrZXkuXG4gKi9cbnZhciBncm91cEJ5U2VyaWVzID0gZG9MaW1pdChncm91cEJ5TGltaXQsIDEpO1xuXG4vKipcbiAqIExvZ3MgdGhlIHJlc3VsdCBvZiBhbiBgYXN5bmNgIGZ1bmN0aW9uIHRvIHRoZSBgY29uc29sZWAuIE9ubHkgd29ya3MgaW5cbiAqIE5vZGUuanMgb3IgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IGBjb25zb2xlLmxvZ2AgYW5kIGBjb25zb2xlLmVycm9yYCAoc3VjaFxuICogYXMgRkYgYW5kIENocm9tZSkuIElmIG11bHRpcGxlIGFyZ3VtZW50cyBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgYXN5bmNcbiAqIGZ1bmN0aW9uLCBgY29uc29sZS5sb2dgIGlzIGNhbGxlZCBvbiBlYWNoIGFyZ3VtZW50IGluIG9yZGVyLlxuICpcbiAqIEBuYW1lIGxvZ1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpVdGlsc1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gZnVuY3Rpb24gLSBUaGUgZnVuY3Rpb24geW91IHdhbnQgdG8gZXZlbnR1YWxseSBhcHBseVxuICogYWxsIGFyZ3VtZW50cyB0by5cbiAqIEBwYXJhbSB7Li4uKn0gYXJndW1lbnRzLi4uIC0gQW55IG51bWJlciBvZiBhcmd1bWVudHMgdG8gYXBwbHkgdG8gdGhlIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBpbiBhIG1vZHVsZVxuICogdmFyIGhlbGxvID0gZnVuY3Rpb24obmFtZSwgY2FsbGJhY2spIHtcbiAqICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICAgICAgICBjYWxsYmFjayhudWxsLCAnaGVsbG8gJyArIG5hbWUpO1xuICogICAgIH0sIDEwMDApO1xuICogfTtcbiAqXG4gKiAvLyBpbiB0aGUgbm9kZSByZXBsXG4gKiBub2RlPiBhc3luYy5sb2coaGVsbG8sICd3b3JsZCcpO1xuICogJ2hlbGxvIHdvcmxkJ1xuICovXG52YXIgbG9nID0gY29uc29sZUZ1bmMoJ2xvZycpO1xuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgbWFwVmFsdWVzYF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLm1hcFZhbHVlc30gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhXG4gKiB0aW1lLlxuICpcbiAqIEBuYW1lIG1hcFZhbHVlc0xpbWl0XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbGxlY3Rpb25zXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5tYXBWYWx1ZXNde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5tYXBWYWx1ZXN9XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbGltaXQgLSBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQSBmdW5jdGlvbiB0byBhcHBseSB0byBlYWNoIHZhbHVlIGFuZCBrZXlcbiAqIGluIGBjb2xsYC5cbiAqIFRoZSBpdGVyYXRlZSBzaG91bGQgY29tcGxldGUgd2l0aCB0aGUgdHJhbnNmb3JtZWQgdmFsdWUgYXMgaXRzIHJlc3VsdC5cbiAqIEludm9rZWQgd2l0aCAodmFsdWUsIGtleSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIHdoZW4gYWxsIGBpdGVyYXRlZWBcbiAqIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIGByZXN1bHRgIGlzIGEgbmV3IG9iamVjdCBjb25zaXN0aW5nXG4gKiBvZiBlYWNoIGtleSBmcm9tIGBvYmpgLCB3aXRoIGVhY2ggdHJhbnNmb3JtZWQgdmFsdWUgb24gdGhlIHJpZ2h0LWhhbmQgc2lkZS5cbiAqIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHQpLlxuICovXG5mdW5jdGlvbiBtYXBWYWx1ZXNMaW1pdChvYmosIGxpbWl0LCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gICAgdmFyIG5ld09iaiA9IHt9O1xuICAgIHZhciBfaXRlcmF0ZWUgPSB3cmFwQXN5bmMoaXRlcmF0ZWUpO1xuICAgIGVhY2hPZkxpbWl0KG9iaiwgbGltaXQsIGZ1bmN0aW9uKHZhbCwga2V5LCBuZXh0KSB7XG4gICAgICAgIF9pdGVyYXRlZSh2YWwsIGtleSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICAgICAgbmV3T2JqW2tleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyLCBuZXdPYmopO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEEgcmVsYXRpdmUgb2YgW2BtYXBgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMubWFwfSwgZGVzaWduZWQgZm9yIHVzZSB3aXRoIG9iamVjdHMuXG4gKlxuICogUHJvZHVjZXMgYSBuZXcgT2JqZWN0IGJ5IG1hcHBpbmcgZWFjaCB2YWx1ZSBvZiBgb2JqYCB0aHJvdWdoIHRoZSBgaXRlcmF0ZWVgXG4gKiBmdW5jdGlvbi4gVGhlIGBpdGVyYXRlZWAgaXMgY2FsbGVkIGVhY2ggYHZhbHVlYCBhbmQgYGtleWAgZnJvbSBgb2JqYCBhbmQgYVxuICogY2FsbGJhY2sgZm9yIHdoZW4gaXQgaGFzIGZpbmlzaGVkIHByb2Nlc3NpbmcuIEVhY2ggb2YgdGhlc2UgY2FsbGJhY2tzIHRha2VzXG4gKiB0d28gYXJndW1lbnRzOiBhbiBgZXJyb3JgLCBhbmQgdGhlIHRyYW5zZm9ybWVkIGl0ZW0gZnJvbSBgb2JqYC4gSWYgYGl0ZXJhdGVlYFxuICogcGFzc2VzIGFuIGVycm9yIHRvIGl0cyBjYWxsYmFjaywgdGhlIG1haW4gYGNhbGxiYWNrYCAoZm9yIHRoZSBgbWFwVmFsdWVzYFxuICogZnVuY3Rpb24pIGlzIGltbWVkaWF0ZWx5IGNhbGxlZCB3aXRoIHRoZSBlcnJvci5cbiAqXG4gKiBOb3RlLCB0aGUgb3JkZXIgb2YgdGhlIGtleXMgaW4gdGhlIHJlc3VsdCBpcyBub3QgZ3VhcmFudGVlZC4gIFRoZSBrZXlzIHdpbGxcbiAqIGJlIHJvdWdobHkgaW4gdGhlIG9yZGVyIHRoZXkgY29tcGxldGUsIChidXQgdGhpcyBpcyB2ZXJ5IGVuZ2luZS1zcGVjaWZpYylcbiAqXG4gKiBAbmFtZSBtYXBWYWx1ZXNcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggdmFsdWUgYW5kIGtleVxuICogaW4gYGNvbGxgLlxuICogVGhlIGl0ZXJhdGVlIHNob3VsZCBjb21wbGV0ZSB3aXRoIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZSBhcyBpdHMgcmVzdWx0LlxuICogSW52b2tlZCB3aXRoICh2YWx1ZSwga2V5LCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiBhbGwgYGl0ZXJhdGVlYFxuICogZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQsIG9yIGFuIGVycm9yIG9jY3Vycy4gYHJlc3VsdGAgaXMgYSBuZXcgb2JqZWN0IGNvbnNpc3RpbmdcbiAqIG9mIGVhY2gga2V5IGZyb20gYG9iamAsIHdpdGggZWFjaCB0cmFuc2Zvcm1lZCB2YWx1ZSBvbiB0aGUgcmlnaHQtaGFuZCBzaWRlLlxuICogSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdCkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLm1hcFZhbHVlcyh7XG4gKiAgICAgZjE6ICdmaWxlMScsXG4gKiAgICAgZjI6ICdmaWxlMicsXG4gKiAgICAgZjM6ICdmaWxlMydcbiAqIH0sIGZ1bmN0aW9uIChmaWxlLCBrZXksIGNhbGxiYWNrKSB7XG4gKiAgIGZzLnN0YXQoZmlsZSwgY2FsbGJhY2spO1xuICogfSwgZnVuY3Rpb24oZXJyLCByZXN1bHQpIHtcbiAqICAgICAvLyByZXN1bHQgaXMgbm93IGEgbWFwIG9mIHN0YXRzIGZvciBlYWNoIGZpbGUsIGUuZy5cbiAqICAgICAvLyB7XG4gKiAgICAgLy8gICAgIGYxOiBbc3RhdHMgZm9yIGZpbGUxXSxcbiAqICAgICAvLyAgICAgZjI6IFtzdGF0cyBmb3IgZmlsZTJdLFxuICogICAgIC8vICAgICBmMzogW3N0YXRzIGZvciBmaWxlM11cbiAqICAgICAvLyB9XG4gKiB9KTtcbiAqL1xuXG52YXIgbWFwVmFsdWVzID0gZG9MaW1pdChtYXBWYWx1ZXNMaW1pdCwgSW5maW5pdHkpO1xuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgbWFwVmFsdWVzYF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLm1hcFZhbHVlc30gYnV0IHJ1bnMgb25seSBhIHNpbmdsZSBhc3luYyBvcGVyYXRpb24gYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIG1hcFZhbHVlc1Nlcmllc1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMubWFwVmFsdWVzXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMubWFwVmFsdWVzfVxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEEgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCB2YWx1ZSBhbmQga2V5XG4gKiBpbiBgY29sbGAuXG4gKiBUaGUgaXRlcmF0ZWUgc2hvdWxkIGNvbXBsZXRlIHdpdGggdGhlIHRyYW5zZm9ybWVkIHZhbHVlIGFzIGl0cyByZXN1bHQuXG4gKiBJbnZva2VkIHdpdGggKHZhbHVlLCBrZXksIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCB3aGVuIGFsbCBgaXRlcmF0ZWVgXG4gKiBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLiBgcmVzdWx0YCBpcyBhIG5ldyBvYmplY3QgY29uc2lzdGluZ1xuICogb2YgZWFjaCBrZXkgZnJvbSBgb2JqYCwgd2l0aCBlYWNoIHRyYW5zZm9ybWVkIHZhbHVlIG9uIHRoZSByaWdodC1oYW5kIHNpZGUuXG4gKiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0KS5cbiAqL1xudmFyIG1hcFZhbHVlc1NlcmllcyA9IGRvTGltaXQobWFwVmFsdWVzTGltaXQsIDEpO1xuXG5mdW5jdGlvbiBoYXMob2JqLCBrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIG9iajtcbn1cblxuLyoqXG4gKiBDYWNoZXMgdGhlIHJlc3VsdHMgb2YgYW4gYXN5bmMgZnVuY3Rpb24uIFdoZW4gY3JlYXRpbmcgYSBoYXNoIHRvIHN0b3JlXG4gKiBmdW5jdGlvbiByZXN1bHRzIGFnYWluc3QsIHRoZSBjYWxsYmFjayBpcyBvbWl0dGVkIGZyb20gdGhlIGhhc2ggYW5kIGFuXG4gKiBvcHRpb25hbCBoYXNoIGZ1bmN0aW9uIGNhbiBiZSB1c2VkLlxuICpcbiAqIElmIG5vIGhhc2ggZnVuY3Rpb24gaXMgc3BlY2lmaWVkLCB0aGUgZmlyc3QgYXJndW1lbnQgaXMgdXNlZCBhcyBhIGhhc2gga2V5LFxuICogd2hpY2ggbWF5IHdvcmsgcmVhc29uYWJseSBpZiBpdCBpcyBhIHN0cmluZyBvciBhIGRhdGEgdHlwZSB0aGF0IGNvbnZlcnRzIHRvIGFcbiAqIGRpc3RpbmN0IHN0cmluZy4gTm90ZSB0aGF0IG9iamVjdHMgYW5kIGFycmF5cyB3aWxsIG5vdCBiZWhhdmUgcmVhc29uYWJseS5cbiAqIE5laXRoZXIgd2lsbCBjYXNlcyB3aGVyZSB0aGUgb3RoZXIgYXJndW1lbnRzIGFyZSBzaWduaWZpY2FudC4gSW4gc3VjaCBjYXNlcyxcbiAqIHNwZWNpZnkgeW91ciBvd24gaGFzaCBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgY2FjaGUgb2YgcmVzdWx0cyBpcyBleHBvc2VkIGFzIHRoZSBgbWVtb2AgcHJvcGVydHkgb2YgdGhlIGZ1bmN0aW9uXG4gKiByZXR1cm5lZCBieSBgbWVtb2l6ZWAuXG4gKlxuICogQG5hbWUgbWVtb2l6ZVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpVdGlsc1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gZm4gLSBUaGUgYXN5bmMgZnVuY3Rpb24gdG8gcHJveHkgYW5kIGNhY2hlIHJlc3VsdHMgZnJvbS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhc2hlciAtIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIGZvciBnZW5lcmF0aW5nIGEgY3VzdG9tIGhhc2hcbiAqIGZvciBzdG9yaW5nIHJlc3VsdHMuIEl0IGhhcyBhbGwgdGhlIGFyZ3VtZW50cyBhcHBsaWVkIHRvIGl0IGFwYXJ0IGZyb20gdGhlXG4gKiBjYWxsYmFjaywgYW5kIG11c3QgYmUgc3luY2hyb25vdXMuXG4gKiBAcmV0dXJucyB7QXN5bmNGdW5jdGlvbn0gYSBtZW1vaXplZCB2ZXJzaW9uIG9mIGBmbmBcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHNsb3dfZm4gPSBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuICogICAgIC8vIGRvIHNvbWV0aGluZ1xuICogICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdCk7XG4gKiB9O1xuICogdmFyIGZuID0gYXN5bmMubWVtb2l6ZShzbG93X2ZuKTtcbiAqXG4gKiAvLyBmbiBjYW4gbm93IGJlIHVzZWQgYXMgaWYgaXQgd2VyZSBzbG93X2ZuXG4gKiBmbignc29tZSBuYW1lJywgZnVuY3Rpb24oKSB7XG4gKiAgICAgLy8gY2FsbGJhY2tcbiAqIH0pO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZuLCBoYXNoZXIpIHtcbiAgICB2YXIgbWVtbyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdmFyIHF1ZXVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgaGFzaGVyID0gaGFzaGVyIHx8IGlkZW50aXR5O1xuICAgIHZhciBfZm4gPSB3cmFwQXN5bmMoZm4pO1xuICAgIHZhciBtZW1vaXplZCA9IGluaXRpYWxQYXJhbXMoZnVuY3Rpb24gbWVtb2l6ZWQoYXJncywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGtleSA9IGhhc2hlci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgaWYgKGhhcyhtZW1vLCBrZXkpKSB7XG4gICAgICAgICAgICBzZXRJbW1lZGlhdGUkMShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBtZW1vW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzKHF1ZXVlcywga2V5KSkge1xuICAgICAgICAgICAgcXVldWVzW2tleV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWV1ZXNba2V5XSA9IFtjYWxsYmFja107XG4gICAgICAgICAgICBfZm4uYXBwbHkobnVsbCwgYXJncy5jb25jYXQoZnVuY3Rpb24oLyphcmdzKi8pIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IHNsaWNlKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgbWVtb1trZXldID0gYXJncztcbiAgICAgICAgICAgICAgICB2YXIgcSA9IHF1ZXVlc1trZXldO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBxdWV1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHFbaV0uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbWVtb2l6ZWQubWVtbyA9IG1lbW87XG4gICAgbWVtb2l6ZWQudW5tZW1vaXplZCA9IGZuO1xuICAgIHJldHVybiBtZW1vaXplZDtcbn1cblxuLyoqXG4gKiBDYWxscyBgY2FsbGJhY2tgIG9uIGEgbGF0ZXIgbG9vcCBhcm91bmQgdGhlIGV2ZW50IGxvb3AuIEluIE5vZGUuanMgdGhpcyBqdXN0XG4gKiBjYWxscyBgcHJvY2Vzcy5uZXh0VGlja2AuICBJbiB0aGUgYnJvd3NlciBpdCB3aWxsIHVzZSBgc2V0SW1tZWRpYXRlYCBpZlxuICogYXZhaWxhYmxlLCBvdGhlcndpc2UgYHNldFRpbWVvdXQoY2FsbGJhY2ssIDApYCwgd2hpY2ggbWVhbnMgb3RoZXIgaGlnaGVyXG4gKiBwcmlvcml0eSBldmVudHMgbWF5IHByZWNlZGUgdGhlIGV4ZWN1dGlvbiBvZiBgY2FsbGJhY2tgLlxuICpcbiAqIFRoaXMgaXMgdXNlZCBpbnRlcm5hbGx5IGZvciBicm93c2VyLWNvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gKlxuICogQG5hbWUgbmV4dFRpY2tcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6VXRpbHNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLnNldEltbWVkaWF0ZV17QGxpbmsgbW9kdWxlOlV0aWxzLnNldEltbWVkaWF0ZX1cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIG9uIGEgbGF0ZXIgbG9vcCBhcm91bmRcbiAqIHRoZSBldmVudCBsb29wLiBJbnZva2VkIHdpdGggKGFyZ3MuLi4pLlxuICogQHBhcmFtIHsuLi4qfSBhcmdzLi4uIC0gYW55IG51bWJlciBvZiBhZGRpdGlvbmFsIGFyZ3VtZW50cyB0byBwYXNzIHRvIHRoZVxuICogY2FsbGJhY2sgb24gdGhlIG5leHQgdGljay5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGNhbGxfb3JkZXIgPSBbXTtcbiAqIGFzeW5jLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICogICAgIGNhbGxfb3JkZXIucHVzaCgndHdvJyk7XG4gKiAgICAgLy8gY2FsbF9vcmRlciBub3cgZXF1YWxzIFsnb25lJywndHdvJ11cbiAqIH0pO1xuICogY2FsbF9vcmRlci5wdXNoKCdvbmUnKTtcbiAqXG4gKiBhc3luYy5zZXRJbW1lZGlhdGUoZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAqICAgICAvLyBhLCBiLCBhbmQgYyBlcXVhbCAxLCAyLCBhbmQgM1xuICogfSwgMSwgMiwgMyk7XG4gKi9cbnZhciBfZGVmZXIkMTtcblxuaWYgKGhhc05leHRUaWNrKSB7XG4gICAgX2RlZmVyJDEgPSBwcm9jZXNzLm5leHRUaWNrO1xufSBlbHNlIGlmIChoYXNTZXRJbW1lZGlhdGUpIHtcbiAgICBfZGVmZXIkMSA9IHNldEltbWVkaWF0ZTtcbn0gZWxzZSB7XG4gICAgX2RlZmVyJDEgPSBmYWxsYmFjaztcbn1cblxudmFyIG5leHRUaWNrID0gd3JhcChfZGVmZXIkMSk7XG5cbmZ1bmN0aW9uIF9wYXJhbGxlbChlYWNoZm4sIHRhc2tzLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgICB2YXIgcmVzdWx0cyA9IGlzQXJyYXlMaWtlKHRhc2tzKSA/IFtdIDoge307XG5cbiAgICBlYWNoZm4odGFza3MsIGZ1bmN0aW9uICh0YXNrLCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHdyYXBBc3luYyh0YXNrKShmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNsaWNlKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRzW2tleV0gPSByZXN1bHQ7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrKGVyciwgcmVzdWx0cyk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogUnVuIHRoZSBgdGFza3NgIGNvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIGluIHBhcmFsbGVsLCB3aXRob3V0IHdhaXRpbmcgdW50aWxcbiAqIHRoZSBwcmV2aW91cyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLiBJZiBhbnkgb2YgdGhlIGZ1bmN0aW9ucyBwYXNzIGFuIGVycm9yIHRvXG4gKiBpdHMgY2FsbGJhY2ssIHRoZSBtYWluIGBjYWxsYmFja2AgaXMgaW1tZWRpYXRlbHkgY2FsbGVkIHdpdGggdGhlIHZhbHVlIG9mIHRoZVxuICogZXJyb3IuIE9uY2UgdGhlIGB0YXNrc2AgaGF2ZSBjb21wbGV0ZWQsIHRoZSByZXN1bHRzIGFyZSBwYXNzZWQgdG8gdGhlIGZpbmFsXG4gKiBgY2FsbGJhY2tgIGFzIGFuIGFycmF5LlxuICpcbiAqICoqTm90ZToqKiBgcGFyYWxsZWxgIGlzIGFib3V0IGtpY2tpbmctb2ZmIEkvTyB0YXNrcyBpbiBwYXJhbGxlbCwgbm90IGFib3V0XG4gKiBwYXJhbGxlbCBleGVjdXRpb24gb2YgY29kZS4gIElmIHlvdXIgdGFza3MgZG8gbm90IHVzZSBhbnkgdGltZXJzIG9yIHBlcmZvcm1cbiAqIGFueSBJL08sIHRoZXkgd2lsbCBhY3R1YWxseSBiZSBleGVjdXRlZCBpbiBzZXJpZXMuICBBbnkgc3luY2hyb25vdXMgc2V0dXBcbiAqIHNlY3Rpb25zIGZvciBlYWNoIHRhc2sgd2lsbCBoYXBwZW4gb25lIGFmdGVyIHRoZSBvdGhlci4gIEphdmFTY3JpcHQgcmVtYWluc1xuICogc2luZ2xlLXRocmVhZGVkLlxuICpcbiAqICoqSGludDoqKiBVc2UgW2ByZWZsZWN0YF17QGxpbmsgbW9kdWxlOlV0aWxzLnJlZmxlY3R9IHRvIGNvbnRpbnVlIHRoZVxuICogZXhlY3V0aW9uIG9mIG90aGVyIHRhc2tzIHdoZW4gYSB0YXNrIGZhaWxzLlxuICpcbiAqIEl0IGlzIGFsc28gcG9zc2libGUgdG8gdXNlIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGFuIGFycmF5LiBFYWNoIHByb3BlcnR5IHdpbGxcbiAqIGJlIHJ1biBhcyBhIGZ1bmN0aW9uIGFuZCB0aGUgcmVzdWx0cyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZmluYWwgYGNhbGxiYWNrYFxuICogYXMgYW4gb2JqZWN0IGluc3RlYWQgb2YgYW4gYXJyYXkuIFRoaXMgY2FuIGJlIGEgbW9yZSByZWFkYWJsZSB3YXkgb2YgaGFuZGxpbmdcbiAqIHJlc3VsdHMgZnJvbSB7QGxpbmsgYXN5bmMucGFyYWxsZWx9LlxuICpcbiAqIEBuYW1lIHBhcmFsbGVsXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gdGFza3MgLSBBIGNvbGxlY3Rpb24gb2ZcbiAqIFthc3luYyBmdW5jdGlvbnNde0BsaW5rIEFzeW5jRnVuY3Rpb259IHRvIHJ1bi5cbiAqIEVhY2ggYXN5bmMgZnVuY3Rpb24gY2FuIGNvbXBsZXRlIHdpdGggYW55IG51bWJlciBvZiBvcHRpb25hbCBgcmVzdWx0YCB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gcnVuIG9uY2UgYWxsIHRoZVxuICogZnVuY3Rpb25zIGhhdmUgY29tcGxldGVkIHN1Y2Nlc3NmdWxseS4gVGhpcyBmdW5jdGlvbiBnZXRzIGEgcmVzdWx0cyBhcnJheVxuICogKG9yIG9iamVjdCkgY29udGFpbmluZyBhbGwgdGhlIHJlc3VsdCBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSB0YXNrIGNhbGxiYWNrcy5cbiAqIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHRzKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogYXN5bmMucGFyYWxsZWwoW1xuICogICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAnb25lJyk7XG4gKiAgICAgICAgIH0sIDIwMCk7XG4gKiAgICAgfSxcbiAqICAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ3R3bycpO1xuICogICAgICAgICB9LCAxMDApO1xuICogICAgIH1cbiAqIF0sXG4gKiAvLyBvcHRpb25hbCBjYWxsYmFja1xuICogZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgLy8gdGhlIHJlc3VsdHMgYXJyYXkgd2lsbCBlcXVhbCBbJ29uZScsJ3R3byddIGV2ZW4gdGhvdWdoXG4gKiAgICAgLy8gdGhlIHNlY29uZCBmdW5jdGlvbiBoYWQgYSBzaG9ydGVyIHRpbWVvdXQuXG4gKiB9KTtcbiAqXG4gKiAvLyBhbiBleGFtcGxlIHVzaW5nIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGFuIGFycmF5XG4gKiBhc3luYy5wYXJhbGxlbCh7XG4gKiAgICAgb25lOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgMSk7XG4gKiAgICAgICAgIH0sIDIwMCk7XG4gKiAgICAgfSxcbiAqICAgICB0d286IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAyKTtcbiAqICAgICAgICAgfSwgMTAwKTtcbiAqICAgICB9XG4gKiB9LCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAqICAgICAvLyByZXN1bHRzIGlzIG5vdyBlcXVhbHMgdG86IHtvbmU6IDEsIHR3bzogMn1cbiAqIH0pO1xuICovXG5mdW5jdGlvbiBwYXJhbGxlbExpbWl0KHRhc2tzLCBjYWxsYmFjaykge1xuICAgIF9wYXJhbGxlbChlYWNoT2YsIHRhc2tzLCBjYWxsYmFjayk7XG59XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2BwYXJhbGxlbGBde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5wYXJhbGxlbH0gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhXG4gKiB0aW1lLlxuICpcbiAqIEBuYW1lIHBhcmFsbGVsTGltaXRcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLnBhcmFsbGVsXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cucGFyYWxsZWx9XG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gdGFza3MgLSBBIGNvbGxlY3Rpb24gb2ZcbiAqIFthc3luYyBmdW5jdGlvbnNde0BsaW5rIEFzeW5jRnVuY3Rpb259IHRvIHJ1bi5cbiAqIEVhY2ggYXN5bmMgZnVuY3Rpb24gY2FuIGNvbXBsZXRlIHdpdGggYW55IG51bWJlciBvZiBvcHRpb25hbCBgcmVzdWx0YCB2YWx1ZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbGltaXQgLSBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gcnVuIG9uY2UgYWxsIHRoZVxuICogZnVuY3Rpb25zIGhhdmUgY29tcGxldGVkIHN1Y2Nlc3NmdWxseS4gVGhpcyBmdW5jdGlvbiBnZXRzIGEgcmVzdWx0cyBhcnJheVxuICogKG9yIG9iamVjdCkgY29udGFpbmluZyBhbGwgdGhlIHJlc3VsdCBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSB0YXNrIGNhbGxiYWNrcy5cbiAqIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHRzKS5cbiAqL1xuZnVuY3Rpb24gcGFyYWxsZWxMaW1pdCQxKHRhc2tzLCBsaW1pdCwgY2FsbGJhY2spIHtcbiAgICBfcGFyYWxsZWwoX2VhY2hPZkxpbWl0KGxpbWl0KSwgdGFza3MsIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBBIHF1ZXVlIG9mIHRhc2tzIGZvciB0aGUgd29ya2VyIGZ1bmN0aW9uIHRvIGNvbXBsZXRlLlxuICogQHR5cGVkZWYge09iamVjdH0gUXVldWVPYmplY3RcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGxlbmd0aCAtIGEgZnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBudW1iZXIgb2YgaXRlbXNcbiAqIHdhaXRpbmcgdG8gYmUgcHJvY2Vzc2VkLiBJbnZva2Ugd2l0aCBgcXVldWUubGVuZ3RoKClgLlxuICogQHByb3BlcnR5IHtib29sZWFufSBzdGFydGVkIC0gYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBvciBub3QgYW55XG4gKiBpdGVtcyBoYXZlIGJlZW4gcHVzaGVkIGFuZCBwcm9jZXNzZWQgYnkgdGhlIHF1ZXVlLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcnVubmluZyAtIGEgZnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBudW1iZXIgb2YgaXRlbXNcbiAqIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuIEludm9rZSB3aXRoIGBxdWV1ZS5ydW5uaW5nKClgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gd29ya2Vyc0xpc3QgLSBhIGZ1bmN0aW9uIHJldHVybmluZyB0aGUgYXJyYXkgb2YgaXRlbXNcbiAqIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQuIEludm9rZSB3aXRoIGBxdWV1ZS53b3JrZXJzTGlzdCgpYC5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGlkbGUgLSBhIGZ1bmN0aW9uIHJldHVybmluZyBmYWxzZSBpZiB0aGVyZSBhcmUgaXRlbXNcbiAqIHdhaXRpbmcgb3IgYmVpbmcgcHJvY2Vzc2VkLCBvciB0cnVlIGlmIG5vdC4gSW52b2tlIHdpdGggYHF1ZXVlLmlkbGUoKWAuXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29uY3VycmVuY3kgLSBhbiBpbnRlZ2VyIGZvciBkZXRlcm1pbmluZyBob3cgbWFueSBgd29ya2VyYFxuICogZnVuY3Rpb25zIHNob3VsZCBiZSBydW4gaW4gcGFyYWxsZWwuIFRoaXMgcHJvcGVydHkgY2FuIGJlIGNoYW5nZWQgYWZ0ZXIgYVxuICogYHF1ZXVlYCBpcyBjcmVhdGVkIHRvIGFsdGVyIHRoZSBjb25jdXJyZW5jeSBvbi10aGUtZmx5LlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcHVzaCAtIGFkZCBhIG5ldyB0YXNrIHRvIHRoZSBgcXVldWVgLiBDYWxscyBgY2FsbGJhY2tgXG4gKiBvbmNlIHRoZSBgd29ya2VyYCBoYXMgZmluaXNoZWQgcHJvY2Vzc2luZyB0aGUgdGFzay4gSW5zdGVhZCBvZiBhIHNpbmdsZSB0YXNrLFxuICogYSBgdGFza3NgIGFycmF5IGNhbiBiZSBzdWJtaXR0ZWQuIFRoZSByZXNwZWN0aXZlIGNhbGxiYWNrIGlzIHVzZWQgZm9yIGV2ZXJ5XG4gKiB0YXNrIGluIHRoZSBsaXN0LiBJbnZva2Ugd2l0aCBgcXVldWUucHVzaCh0YXNrLCBbY2FsbGJhY2tdKWAsXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB1bnNoaWZ0IC0gYWRkIGEgbmV3IHRhc2sgdG8gdGhlIGZyb250IG9mIHRoZSBgcXVldWVgLlxuICogSW52b2tlIHdpdGggYHF1ZXVlLnVuc2hpZnQodGFzaywgW2NhbGxiYWNrXSlgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcmVtb3ZlIC0gcmVtb3ZlIGl0ZW1zIGZyb20gdGhlIHF1ZXVlIHRoYXQgbWF0Y2ggYSB0ZXN0XG4gKiBmdW5jdGlvbi4gIFRoZSB0ZXN0IGZ1bmN0aW9uIHdpbGwgYmUgcGFzc2VkIGFuIG9iamVjdCB3aXRoIGEgYGRhdGFgIHByb3BlcnR5LFxuICogYW5kIGEgYHByaW9yaXR5YCBwcm9wZXJ0eSwgaWYgdGhpcyBpcyBhXG4gKiBbcHJpb3JpdHlRdWV1ZV17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LnByaW9yaXR5UXVldWV9IG9iamVjdC5cbiAqIEludm9rZWQgd2l0aCBgcXVldWUucmVtb3ZlKHRlc3RGbilgLCB3aGVyZSBgdGVzdEZuYCBpcyBvZiB0aGUgZm9ybVxuICogYGZ1bmN0aW9uICh7ZGF0YSwgcHJpb3JpdHl9KSB7fWAgYW5kIHJldHVybnMgYSBCb29sZWFuLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gc2F0dXJhdGVkIC0gYSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBudW1iZXIgb2ZcbiAqIHJ1bm5pbmcgd29ya2VycyBoaXRzIHRoZSBgY29uY3VycmVuY3lgIGxpbWl0LCBhbmQgZnVydGhlciB0YXNrcyB3aWxsIGJlXG4gKiBxdWV1ZWQuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB1bnNhdHVyYXRlZCAtIGEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgbnVtYmVyXG4gKiBvZiBydW5uaW5nIHdvcmtlcnMgaXMgbGVzcyB0aGFuIHRoZSBgY29uY3VycmVuY3lgICYgYGJ1ZmZlcmAgbGltaXRzLCBhbmRcbiAqIGZ1cnRoZXIgdGFza3Mgd2lsbCBub3QgYmUgcXVldWVkLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGJ1ZmZlciAtIEEgbWluaW11bSB0aHJlc2hvbGQgYnVmZmVyIGluIG9yZGVyIHRvIHNheSB0aGF0XG4gKiB0aGUgYHF1ZXVlYCBpcyBgdW5zYXR1cmF0ZWRgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZW1wdHkgLSBhIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGxhc3QgaXRlbVxuICogZnJvbSB0aGUgYHF1ZXVlYCBpcyBnaXZlbiB0byBhIGB3b3JrZXJgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZHJhaW4gLSBhIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGxhc3QgaXRlbVxuICogZnJvbSB0aGUgYHF1ZXVlYCBoYXMgcmV0dXJuZWQgZnJvbSB0aGUgYHdvcmtlcmAuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBlcnJvciAtIGEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBhIHRhc2sgZXJyb3JzLlxuICogSGFzIHRoZSBzaWduYXR1cmUgYGZ1bmN0aW9uKGVycm9yLCB0YXNrKWAuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHBhdXNlZCAtIGEgYm9vbGVhbiBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0aGUgcXVldWUgaXNcbiAqIGluIGEgcGF1c2VkIHN0YXRlLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcGF1c2UgLSBhIGZ1bmN0aW9uIHRoYXQgcGF1c2VzIHRoZSBwcm9jZXNzaW5nIG9mIHRhc2tzXG4gKiB1bnRpbCBgcmVzdW1lKClgIGlzIGNhbGxlZC4gSW52b2tlIHdpdGggYHF1ZXVlLnBhdXNlKClgLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcmVzdW1lIC0gYSBmdW5jdGlvbiB0aGF0IHJlc3VtZXMgdGhlIHByb2Nlc3Npbmcgb2ZcbiAqIHF1ZXVlZCB0YXNrcyB3aGVuIHRoZSBxdWV1ZSBpcyBwYXVzZWQuIEludm9rZSB3aXRoIGBxdWV1ZS5yZXN1bWUoKWAuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBraWxsIC0gYSBmdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGBkcmFpbmAgY2FsbGJhY2sgYW5kXG4gKiBlbXB0aWVzIHJlbWFpbmluZyB0YXNrcyBmcm9tIHRoZSBxdWV1ZSBmb3JjaW5nIGl0IHRvIGdvIGlkbGUuIE5vIG1vcmUgdGFza3NcbiAqIHNob3VsZCBiZSBwdXNoZWQgdG8gdGhlIHF1ZXVlIGFmdGVyIGNhbGxpbmcgdGhpcyBmdW5jdGlvbi4gSW52b2tlIHdpdGggYHF1ZXVlLmtpbGwoKWAuXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgYHF1ZXVlYCBvYmplY3Qgd2l0aCB0aGUgc3BlY2lmaWVkIGBjb25jdXJyZW5jeWAuIFRhc2tzIGFkZGVkIHRvIHRoZVxuICogYHF1ZXVlYCBhcmUgcHJvY2Vzc2VkIGluIHBhcmFsbGVsICh1cCB0byB0aGUgYGNvbmN1cnJlbmN5YCBsaW1pdCkuIElmIGFsbFxuICogYHdvcmtlcmBzIGFyZSBpbiBwcm9ncmVzcywgdGhlIHRhc2sgaXMgcXVldWVkIHVudGlsIG9uZSBiZWNvbWVzIGF2YWlsYWJsZS5cbiAqIE9uY2UgYSBgd29ya2VyYCBjb21wbGV0ZXMgYSBgdGFza2AsIHRoYXQgYHRhc2tgJ3MgY2FsbGJhY2sgaXMgY2FsbGVkLlxuICpcbiAqIEBuYW1lIHF1ZXVlXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IHdvcmtlciAtIEFuIGFzeW5jIGZ1bmN0aW9uIGZvciBwcm9jZXNzaW5nIGEgcXVldWVkIHRhc2suXG4gKiBJZiB5b3Ugd2FudCB0byBoYW5kbGUgZXJyb3JzIGZyb20gYW4gaW5kaXZpZHVhbCB0YXNrLCBwYXNzIGEgY2FsbGJhY2sgdG9cbiAqIGBxLnB1c2goKWAuIEludm9rZWQgd2l0aCAodGFzaywgY2FsbGJhY2spLlxuICogQHBhcmFtIHtudW1iZXJ9IFtjb25jdXJyZW5jeT0xXSAtIEFuIGBpbnRlZ2VyYCBmb3IgZGV0ZXJtaW5pbmcgaG93IG1hbnlcbiAqIGB3b3JrZXJgIGZ1bmN0aW9ucyBzaG91bGQgYmUgcnVuIGluIHBhcmFsbGVsLiAgSWYgb21pdHRlZCwgdGhlIGNvbmN1cnJlbmN5XG4gKiBkZWZhdWx0cyB0byBgMWAuICBJZiB0aGUgY29uY3VycmVuY3kgaXMgYDBgLCBhbiBlcnJvciBpcyB0aHJvd24uXG4gKiBAcmV0dXJucyB7bW9kdWxlOkNvbnRyb2xGbG93LlF1ZXVlT2JqZWN0fSBBIHF1ZXVlIG9iamVjdCB0byBtYW5hZ2UgdGhlIHRhc2tzLiBDYWxsYmFja3MgY2FuXG4gKiBhdHRhY2hlZCBhcyBjZXJ0YWluIHByb3BlcnRpZXMgdG8gbGlzdGVuIGZvciBzcGVjaWZpYyBldmVudHMgZHVyaW5nIHRoZVxuICogbGlmZWN5Y2xlIG9mIHRoZSBxdWV1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gY3JlYXRlIGEgcXVldWUgb2JqZWN0IHdpdGggY29uY3VycmVuY3kgMlxuICogdmFyIHEgPSBhc3luYy5xdWV1ZShmdW5jdGlvbih0YXNrLCBjYWxsYmFjaykge1xuICogICAgIGNvbnNvbGUubG9nKCdoZWxsbyAnICsgdGFzay5uYW1lKTtcbiAqICAgICBjYWxsYmFjaygpO1xuICogfSwgMik7XG4gKlxuICogLy8gYXNzaWduIGEgY2FsbGJhY2tcbiAqIHEuZHJhaW4gPSBmdW5jdGlvbigpIHtcbiAqICAgICBjb25zb2xlLmxvZygnYWxsIGl0ZW1zIGhhdmUgYmVlbiBwcm9jZXNzZWQnKTtcbiAqIH07XG4gKlxuICogLy8gYWRkIHNvbWUgaXRlbXMgdG8gdGhlIHF1ZXVlXG4gKiBxLnB1c2goe25hbWU6ICdmb28nfSwgZnVuY3Rpb24oZXJyKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ2ZpbmlzaGVkIHByb2Nlc3NpbmcgZm9vJyk7XG4gKiB9KTtcbiAqIHEucHVzaCh7bmFtZTogJ2Jhcid9LCBmdW5jdGlvbiAoZXJyKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ2ZpbmlzaGVkIHByb2Nlc3NpbmcgYmFyJyk7XG4gKiB9KTtcbiAqXG4gKiAvLyBhZGQgc29tZSBpdGVtcyB0byB0aGUgcXVldWUgKGJhdGNoLXdpc2UpXG4gKiBxLnB1c2goW3tuYW1lOiAnYmF6J30se25hbWU6ICdiYXknfSx7bmFtZTogJ2JheCd9XSwgZnVuY3Rpb24oZXJyKSB7XG4gKiAgICAgY29uc29sZS5sb2coJ2ZpbmlzaGVkIHByb2Nlc3NpbmcgaXRlbScpO1xuICogfSk7XG4gKlxuICogLy8gYWRkIHNvbWUgaXRlbXMgdG8gdGhlIGZyb250IG9mIHRoZSBxdWV1ZVxuICogcS51bnNoaWZ0KHtuYW1lOiAnYmFyJ30sIGZ1bmN0aW9uIChlcnIpIHtcbiAqICAgICBjb25zb2xlLmxvZygnZmluaXNoZWQgcHJvY2Vzc2luZyBiYXInKTtcbiAqIH0pO1xuICovXG52YXIgcXVldWUkMSA9IGZ1bmN0aW9uICh3b3JrZXIsIGNvbmN1cnJlbmN5KSB7XG4gICAgdmFyIF93b3JrZXIgPSB3cmFwQXN5bmMod29ya2VyKTtcbiAgICByZXR1cm4gcXVldWUoZnVuY3Rpb24gKGl0ZW1zLCBjYikge1xuICAgICAgICBfd29ya2VyKGl0ZW1zWzBdLCBjYik7XG4gICAgfSwgY29uY3VycmVuY3ksIDEpO1xufTtcblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYXN5bmMucXVldWVde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5xdWV1ZX0gb25seSB0YXNrcyBhcmUgYXNzaWduZWQgYSBwcmlvcml0eSBhbmRcbiAqIGNvbXBsZXRlZCBpbiBhc2NlbmRpbmcgcHJpb3JpdHkgb3JkZXIuXG4gKlxuICogQG5hbWUgcHJpb3JpdHlRdWV1ZVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMucXVldWVde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5xdWV1ZX1cbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gd29ya2VyIC0gQW4gYXN5bmMgZnVuY3Rpb24gZm9yIHByb2Nlc3NpbmcgYSBxdWV1ZWQgdGFzay5cbiAqIElmIHlvdSB3YW50IHRvIGhhbmRsZSBlcnJvcnMgZnJvbSBhbiBpbmRpdmlkdWFsIHRhc2ssIHBhc3MgYSBjYWxsYmFjayB0b1xuICogYHEucHVzaCgpYC5cbiAqIEludm9rZWQgd2l0aCAodGFzaywgY2FsbGJhY2spLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbmN1cnJlbmN5IC0gQW4gYGludGVnZXJgIGZvciBkZXRlcm1pbmluZyBob3cgbWFueSBgd29ya2VyYFxuICogZnVuY3Rpb25zIHNob3VsZCBiZSBydW4gaW4gcGFyYWxsZWwuICBJZiBvbWl0dGVkLCB0aGUgY29uY3VycmVuY3kgZGVmYXVsdHMgdG9cbiAqIGAxYC4gIElmIHRoZSBjb25jdXJyZW5jeSBpcyBgMGAsIGFuIGVycm9yIGlzIHRocm93bi5cbiAqIEByZXR1cm5zIHttb2R1bGU6Q29udHJvbEZsb3cuUXVldWVPYmplY3R9IEEgcHJpb3JpdHlRdWV1ZSBvYmplY3QgdG8gbWFuYWdlIHRoZSB0YXNrcy4gVGhlcmUgYXJlIHR3b1xuICogZGlmZmVyZW5jZXMgYmV0d2VlbiBgcXVldWVgIGFuZCBgcHJpb3JpdHlRdWV1ZWAgb2JqZWN0czpcbiAqICogYHB1c2godGFzaywgcHJpb3JpdHksIFtjYWxsYmFja10pYCAtIGBwcmlvcml0eWAgc2hvdWxkIGJlIGEgbnVtYmVyLiBJZiBhblxuICogICBhcnJheSBvZiBgdGFza3NgIGlzIGdpdmVuLCBhbGwgdGFza3Mgd2lsbCBiZSBhc3NpZ25lZCB0aGUgc2FtZSBwcmlvcml0eS5cbiAqICogVGhlIGB1bnNoaWZ0YCBtZXRob2Qgd2FzIHJlbW92ZWQuXG4gKi9cbnZhciBwcmlvcml0eVF1ZXVlID0gZnVuY3Rpb24od29ya2VyLCBjb25jdXJyZW5jeSkge1xuICAgIC8vIFN0YXJ0IHdpdGggYSBub3JtYWwgcXVldWVcbiAgICB2YXIgcSA9IHF1ZXVlJDEod29ya2VyLCBjb25jdXJyZW5jeSk7XG5cbiAgICAvLyBPdmVycmlkZSBwdXNoIHRvIGFjY2VwdCBzZWNvbmQgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBwcmlvcml0eVxuICAgIHEucHVzaCA9IGZ1bmN0aW9uKGRhdGEsIHByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2sgPT0gbnVsbCkgY2FsbGJhY2sgPSBub29wO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Rhc2sgY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcS5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFpc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gY2FsbCBkcmFpbiBpbW1lZGlhdGVseSBpZiB0aGVyZSBhcmUgbm8gdGFza3NcbiAgICAgICAgICAgIHJldHVybiBzZXRJbW1lZGlhdGUkMShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBxLmRyYWluKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcbiAgICAgICAgdmFyIG5leHROb2RlID0gcS5fdGFza3MuaGVhZDtcbiAgICAgICAgd2hpbGUgKG5leHROb2RlICYmIHByaW9yaXR5ID49IG5leHROb2RlLnByaW9yaXR5KSB7XG4gICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHROb2RlLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhW2ldLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChuZXh0Tm9kZSkge1xuICAgICAgICAgICAgICAgIHEuX3Rhc2tzLmluc2VydEJlZm9yZShuZXh0Tm9kZSwgaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHEuX3Rhc2tzLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2V0SW1tZWRpYXRlJDEocS5wcm9jZXNzKTtcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlIHVuc2hpZnQgZnVuY3Rpb25cbiAgICBkZWxldGUgcS51bnNoaWZ0O1xuXG4gICAgcmV0dXJuIHE7XG59O1xuXG4vKipcbiAqIFJ1bnMgdGhlIGB0YXNrc2AgYXJyYXkgb2YgZnVuY3Rpb25zIGluIHBhcmFsbGVsLCB3aXRob3V0IHdhaXRpbmcgdW50aWwgdGhlXG4gKiBwcmV2aW91cyBmdW5jdGlvbiBoYXMgY29tcGxldGVkLiBPbmNlIGFueSBvZiB0aGUgYHRhc2tzYCBjb21wbGV0ZSBvciBwYXNzIGFuXG4gKiBlcnJvciB0byBpdHMgY2FsbGJhY2ssIHRoZSBtYWluIGBjYWxsYmFja2AgaXMgaW1tZWRpYXRlbHkgY2FsbGVkLiBJdCdzXG4gKiBlcXVpdmFsZW50IHRvIGBQcm9taXNlLnJhY2UoKWAuXG4gKlxuICogQG5hbWUgcmFjZVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtBcnJheX0gdGFza3MgLSBBbiBhcnJheSBjb250YWluaW5nIFthc3luYyBmdW5jdGlvbnNde0BsaW5rIEFzeW5jRnVuY3Rpb259XG4gKiB0byBydW4uIEVhY2ggZnVuY3Rpb24gY2FuIGNvbXBsZXRlIHdpdGggYW4gb3B0aW9uYWwgYHJlc3VsdGAgdmFsdWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgdG8gcnVuIG9uY2UgYW55IG9mIHRoZSBmdW5jdGlvbnMgaGF2ZVxuICogY29tcGxldGVkLiBUaGlzIGZ1bmN0aW9uIGdldHMgYW4gZXJyb3Igb3IgcmVzdWx0IGZyb20gdGhlIGZpcnN0IGZ1bmN0aW9uIHRoYXRcbiAqIGNvbXBsZXRlZC4gSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdCkuXG4gKiBAcmV0dXJucyB1bmRlZmluZWRcbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMucmFjZShbXG4gKiAgICAgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICdvbmUnKTtcbiAqICAgICAgICAgfSwgMjAwKTtcbiAqICAgICB9LFxuICogICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAndHdvJyk7XG4gKiAgICAgICAgIH0sIDEwMCk7XG4gKiAgICAgfVxuICogXSxcbiAqIC8vIG1haW4gY2FsbGJhY2tcbiAqIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gdGhlIHJlc3VsdCB3aWxsIGJlIGVxdWFsIHRvICd0d28nIGFzIGl0IGZpbmlzaGVzIGVhcmxpZXJcbiAqIH0pO1xuICovXG5mdW5jdGlvbiByYWNlKHRhc2tzLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gb25jZShjYWxsYmFjayB8fCBub29wKTtcbiAgICBpZiAoIWlzQXJyYXkodGFza3MpKSByZXR1cm4gY2FsbGJhY2sobmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gcmFjZSBtdXN0IGJlIGFuIGFycmF5IG9mIGZ1bmN0aW9ucycpKTtcbiAgICBpZiAoIXRhc2tzLmxlbmd0aCkgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0YXNrcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgd3JhcEFzeW5jKHRhc2tzW2ldKShjYWxsYmFjayk7XG4gICAgfVxufVxuXG4vKipcbiAqIFNhbWUgYXMgW2ByZWR1Y2VgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMucmVkdWNlfSwgb25seSBvcGVyYXRlcyBvbiBgYXJyYXlgIGluIHJldmVyc2Ugb3JkZXIuXG4gKlxuICogQG5hbWUgcmVkdWNlUmlnaHRcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLnJlZHVjZV17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLnJlZHVjZX1cbiAqIEBhbGlhcyBmb2xkclxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7Kn0gbWVtbyAtIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSByZWR1Y3Rpb24uXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQSBmdW5jdGlvbiBhcHBsaWVkIHRvIGVhY2ggaXRlbSBpbiB0aGVcbiAqIGFycmF5IHRvIHByb2R1Y2UgdGhlIG5leHQgc3RlcCBpbiB0aGUgcmVkdWN0aW9uLlxuICogVGhlIGBpdGVyYXRlZWAgc2hvdWxkIGNvbXBsZXRlIHdpdGggdGhlIG5leHQgc3RhdGUgb2YgdGhlIHJlZHVjdGlvbi5cbiAqIElmIHRoZSBpdGVyYXRlZSBjb21wbGV0ZSB3aXRoIGFuIGVycm9yLCB0aGUgcmVkdWN0aW9uIGlzIHN0b3BwZWQgYW5kIHRoZVxuICogbWFpbiBgY2FsbGJhY2tgIGlzIGltbWVkaWF0ZWx5IGNhbGxlZCB3aXRoIHRoZSBlcnJvci5cbiAqIEludm9rZWQgd2l0aCAobWVtbywgaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIGFsbCB0aGVcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQuIFJlc3VsdCBpcyB0aGUgcmVkdWNlZCB2YWx1ZS4gSW52b2tlZCB3aXRoXG4gKiAoZXJyLCByZXN1bHQpLlxuICovXG5mdW5jdGlvbiByZWR1Y2VSaWdodCAoYXJyYXksIG1lbW8sIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgIHZhciByZXZlcnNlZCA9IHNsaWNlKGFycmF5KS5yZXZlcnNlKCk7XG4gICAgcmVkdWNlKHJldmVyc2VkLCBtZW1vLCBpdGVyYXRlZSwgY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIFdyYXBzIHRoZSBhc3luYyBmdW5jdGlvbiBpbiBhbm90aGVyIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIGNvbXBsZXRlcyB3aXRoIGFcbiAqIHJlc3VsdCBvYmplY3QsIGV2ZW4gd2hlbiBpdCBlcnJvcnMuXG4gKlxuICogVGhlIHJlc3VsdCBvYmplY3QgaGFzIGVpdGhlciB0aGUgcHJvcGVydHkgYGVycm9yYCBvciBgdmFsdWVgLlxuICpcbiAqIEBuYW1lIHJlZmxlY3RcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6VXRpbHNcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGZuIC0gVGhlIGFzeW5jIGZ1bmN0aW9uIHlvdSB3YW50IHRvIHdyYXBcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gLSBBIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIHBhc3NlcyBudWxsIHRvIGl0J3MgY2FsbGJhY2sgYXNcbiAqIHRoZSBlcnJvci4gVGhlIHNlY29uZCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgd2lsbCBiZSBhbiBgb2JqZWN0YCB3aXRoXG4gKiBlaXRoZXIgYW4gYGVycm9yYCBvciBhIGB2YWx1ZWAgcHJvcGVydHkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLnBhcmFsbGVsKFtcbiAqICAgICBhc3luYy5yZWZsZWN0KGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIC8vIGRvIHNvbWUgc3R1ZmYgLi4uXG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICdvbmUnKTtcbiAqICAgICB9KSxcbiAqICAgICBhc3luYy5yZWZsZWN0KGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIC8vIGRvIHNvbWUgbW9yZSBzdHVmZiBidXQgZXJyb3IgLi4uXG4gKiAgICAgICAgIGNhbGxiYWNrKCdiYWQgc3R1ZmYgaGFwcGVuZWQnKTtcbiAqICAgICB9KSxcbiAqICAgICBhc3luYy5yZWZsZWN0KGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIC8vIGRvIHNvbWUgbW9yZSBzdHVmZiAuLi5cbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ3R3bycpO1xuICogICAgIH0pXG4gKiBdLFxuICogLy8gb3B0aW9uYWwgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICogICAgIC8vIHZhbHVlc1xuICogICAgIC8vIHJlc3VsdHNbMF0udmFsdWUgPSAnb25lJ1xuICogICAgIC8vIHJlc3VsdHNbMV0uZXJyb3IgPSAnYmFkIHN0dWZmIGhhcHBlbmVkJ1xuICogICAgIC8vIHJlc3VsdHNbMl0udmFsdWUgPSAndHdvJ1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIHJlZmxlY3QoZm4pIHtcbiAgICB2YXIgX2ZuID0gd3JhcEFzeW5jKGZuKTtcbiAgICByZXR1cm4gaW5pdGlhbFBhcmFtcyhmdW5jdGlvbiByZWZsZWN0T24oYXJncywgcmVmbGVjdENhbGxiYWNrKSB7XG4gICAgICAgIGFyZ3MucHVzaChmdW5jdGlvbiBjYWxsYmFjayhlcnJvciwgY2JBcmcpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlZmxlY3RDYWxsYmFjayhudWxsLCB7IGVycm9yOiBlcnJvciB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjYkFyZztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHNsaWNlKGFyZ3VtZW50cywgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlZmxlY3RDYWxsYmFjayhudWxsLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIF9mbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiB0aGF0IHdyYXBzIGFuIGFycmF5IG9yIGFuIG9iamVjdCBvZiBmdW5jdGlvbnMgd2l0aCBgcmVmbGVjdGAuXG4gKlxuICogQG5hbWUgcmVmbGVjdEFsbFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpVdGlsc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMucmVmbGVjdF17QGxpbmsgbW9kdWxlOlV0aWxzLnJlZmxlY3R9XG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8SXRlcmFibGV9IHRhc2tzIC0gVGhlIGNvbGxlY3Rpb24gb2ZcbiAqIFthc3luYyBmdW5jdGlvbnNde0BsaW5rIEFzeW5jRnVuY3Rpb259IHRvIHdyYXAgaW4gYGFzeW5jLnJlZmxlY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFuIGFycmF5IG9mIGFzeW5jIGZ1bmN0aW9ucywgZWFjaCB3cmFwcGVkIGluXG4gKiBgYXN5bmMucmVmbGVjdGBcbiAqIEBleGFtcGxlXG4gKlxuICogbGV0IHRhc2tzID0gW1xuICogICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAnb25lJyk7XG4gKiAgICAgICAgIH0sIDIwMCk7XG4gKiAgICAgfSxcbiAqICAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICAvLyBkbyBzb21lIG1vcmUgc3R1ZmYgYnV0IGVycm9yIC4uLlxuICogICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ2JhZCBzdHVmZiBoYXBwZW5lZCcpKTtcbiAqICAgICB9LFxuICogICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAndHdvJyk7XG4gKiAgICAgICAgIH0sIDEwMCk7XG4gKiAgICAgfVxuICogXTtcbiAqXG4gKiBhc3luYy5wYXJhbGxlbChhc3luYy5yZWZsZWN0QWxsKHRhc2tzKSxcbiAqIC8vIG9wdGlvbmFsIGNhbGxiYWNrXG4gKiBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAqICAgICAvLyB2YWx1ZXNcbiAqICAgICAvLyByZXN1bHRzWzBdLnZhbHVlID0gJ29uZSdcbiAqICAgICAvLyByZXN1bHRzWzFdLmVycm9yID0gRXJyb3IoJ2JhZCBzdHVmZiBoYXBwZW5lZCcpXG4gKiAgICAgLy8gcmVzdWx0c1syXS52YWx1ZSA9ICd0d28nXG4gKiB9KTtcbiAqXG4gKiAvLyBhbiBleGFtcGxlIHVzaW5nIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGFuIGFycmF5XG4gKiBsZXQgdGFza3MgPSB7XG4gKiAgICAgb25lOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgJ29uZScpO1xuICogICAgICAgICB9LCAyMDApO1xuICogICAgIH0sXG4gKiAgICAgdHdvOiBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICBjYWxsYmFjaygndHdvJyk7XG4gKiAgICAgfSxcbiAqICAgICB0aHJlZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsICd0aHJlZScpO1xuICogICAgICAgICB9LCAxMDApO1xuICogICAgIH1cbiAqIH07XG4gKlxuICogYXN5bmMucGFyYWxsZWwoYXN5bmMucmVmbGVjdEFsbCh0YXNrcyksXG4gKiAvLyBvcHRpb25hbCBjYWxsYmFja1xuICogZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gKiAgICAgLy8gdmFsdWVzXG4gKiAgICAgLy8gcmVzdWx0cy5vbmUudmFsdWUgPSAnb25lJ1xuICogICAgIC8vIHJlc3VsdHMudHdvLmVycm9yID0gJ3R3bydcbiAqICAgICAvLyByZXN1bHRzLnRocmVlLnZhbHVlID0gJ3RocmVlJ1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIHJlZmxlY3RBbGwodGFza3MpIHtcbiAgICB2YXIgcmVzdWx0cztcbiAgICBpZiAoaXNBcnJheSh0YXNrcykpIHtcbiAgICAgICAgcmVzdWx0cyA9IGFycmF5TWFwKHRhc2tzLCByZWZsZWN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzID0ge307XG4gICAgICAgIGJhc2VGb3JPd24odGFza3MsIGZ1bmN0aW9uKHRhc2ssIGtleSkge1xuICAgICAgICAgICAgcmVzdWx0c1trZXldID0gcmVmbGVjdC5jYWxsKHRoaXMsIHRhc2spO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIHJlamVjdCQxKGVhY2hmbiwgYXJyLCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICBfZmlsdGVyKGVhY2hmbiwgYXJyLCBmdW5jdGlvbih2YWx1ZSwgY2IpIHtcbiAgICAgICAgaXRlcmF0ZWUodmFsdWUsIGZ1bmN0aW9uKGVyciwgdikge1xuICAgICAgICAgICAgY2IoZXJyLCAhdik7XG4gICAgICAgIH0pO1xuICAgIH0sIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBUaGUgb3Bwb3NpdGUgb2YgW2BmaWx0ZXJgXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMuZmlsdGVyfS4gUmVtb3ZlcyB2YWx1ZXMgdGhhdCBwYXNzIGFuIGBhc3luY2AgdHJ1dGggdGVzdC5cbiAqXG4gKiBAbmFtZSByZWplY3RcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLmZpbHRlcl17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLmZpbHRlcn1cbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEFuIGFzeW5jIHRydXRoIHRlc3QgdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluXG4gKiBgY29sbGAuXG4gKiBUaGUgc2hvdWxkIGNvbXBsZXRlIHdpdGggYSBib29sZWFuIHZhbHVlIGFzIGl0cyBgcmVzdWx0YC5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIGFsbCB0aGVcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQuIEludm9rZWQgd2l0aCAoZXJyLCByZXN1bHRzKS5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMucmVqZWN0KFsnZmlsZTEnLCdmaWxlMicsJ2ZpbGUzJ10sIGZ1bmN0aW9uKGZpbGVQYXRoLCBjYWxsYmFjaykge1xuICogICAgIGZzLmFjY2VzcyhmaWxlUGF0aCwgZnVuY3Rpb24oZXJyKSB7XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICFlcnIpXG4gKiAgICAgfSk7XG4gKiB9LCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAqICAgICAvLyByZXN1bHRzIG5vdyBlcXVhbHMgYW4gYXJyYXkgb2YgbWlzc2luZyBmaWxlc1xuICogICAgIGNyZWF0ZUZpbGVzKHJlc3VsdHMpO1xuICogfSk7XG4gKi9cbnZhciByZWplY3QgPSBkb1BhcmFsbGVsKHJlamVjdCQxKTtcblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbYHJlamVjdGBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5yZWplY3R9IGJ1dCBydW5zIGEgbWF4aW11bSBvZiBgbGltaXRgIGFzeW5jIG9wZXJhdGlvbnMgYXQgYVxuICogdGltZS5cbiAqXG4gKiBAbmFtZSByZWplY3RMaW1pdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMucmVqZWN0XXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMucmVqZWN0fVxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsaW1pdCAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBhc3luYyBvcGVyYXRpb25zIGF0IGEgdGltZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgdHJ1dGggdGVzdCB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW5cbiAqIGBjb2xsYC5cbiAqIFRoZSBzaG91bGQgY29tcGxldGUgd2l0aCBhIGJvb2xlYW4gdmFsdWUgYXMgaXRzIGByZXN1bHRgLlxuICogSW52b2tlZCB3aXRoIChpdGVtLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgYWxsIHRoZVxuICogYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZC4gSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdHMpLlxuICovXG52YXIgcmVqZWN0TGltaXQgPSBkb1BhcmFsbGVsTGltaXQocmVqZWN0JDEpO1xuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgcmVqZWN0YF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLnJlamVjdH0gYnV0IHJ1bnMgb25seSBhIHNpbmdsZSBhc3luYyBvcGVyYXRpb24gYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIHJlamVjdFNlcmllc1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMucmVqZWN0XXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMucmVqZWN0fVxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8SXRlcmFibGV8T2JqZWN0fSBjb2xsIC0gQSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgdHJ1dGggdGVzdCB0byBhcHBseSB0byBlYWNoIGl0ZW0gaW5cbiAqIGBjb2xsYC5cbiAqIFRoZSBzaG91bGQgY29tcGxldGUgd2l0aCBhIGJvb2xlYW4gdmFsdWUgYXMgaXRzIGByZXN1bHRgLlxuICogSW52b2tlZCB3aXRoIChpdGVtLCBjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgYWxsIHRoZVxuICogYGl0ZXJhdGVlYCBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZC4gSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdHMpLlxuICovXG52YXIgcmVqZWN0U2VyaWVzID0gZG9MaW1pdChyZWplY3RMaW1pdCwgMSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCQxKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gZ2V0IGEgc3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIGB0YXNrYCBubyBtb3JlIHRoYW4gYHRpbWVzYCB0aW1lc1xuICogYmVmb3JlIHJldHVybmluZyBhbiBlcnJvci4gSWYgdGhlIHRhc2sgaXMgc3VjY2Vzc2Z1bCwgdGhlIGBjYWxsYmFja2Agd2lsbCBiZVxuICogcGFzc2VkIHRoZSByZXN1bHQgb2YgdGhlIHN1Y2Nlc3NmdWwgdGFzay4gSWYgYWxsIGF0dGVtcHRzIGZhaWwsIHRoZSBjYWxsYmFja1xuICogd2lsbCBiZSBwYXNzZWQgdGhlIGVycm9yIGFuZCByZXN1bHQgKGlmIGFueSkgb2YgdGhlIGZpbmFsIGF0dGVtcHQuXG4gKlxuICogQG5hbWUgcmV0cnlcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBzZWUgW2FzeW5jLnJldHJ5YWJsZV17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LnJldHJ5YWJsZX1cbiAqIEBwYXJhbSB7T2JqZWN0fG51bWJlcn0gW29wdHMgPSB7dGltZXM6IDUsIGludGVydmFsOiAwfXwgNV0gLSBDYW4gYmUgZWl0aGVyIGFuXG4gKiBvYmplY3Qgd2l0aCBgdGltZXNgIGFuZCBgaW50ZXJ2YWxgIG9yIGEgbnVtYmVyLlxuICogKiBgdGltZXNgIC0gVGhlIG51bWJlciBvZiBhdHRlbXB0cyB0byBtYWtlIGJlZm9yZSBnaXZpbmcgdXAuICBUaGUgZGVmYXVsdFxuICogICBpcyBgNWAuXG4gKiAqIGBpbnRlcnZhbGAgLSBUaGUgdGltZSB0byB3YWl0IGJldHdlZW4gcmV0cmllcywgaW4gbWlsbGlzZWNvbmRzLiAgVGhlXG4gKiAgIGRlZmF1bHQgaXMgYDBgLiBUaGUgaW50ZXJ2YWwgbWF5IGFsc28gYmUgc3BlY2lmaWVkIGFzIGEgZnVuY3Rpb24gb2YgdGhlXG4gKiAgIHJldHJ5IGNvdW50IChzZWUgZXhhbXBsZSkuXG4gKiAqIGBlcnJvckZpbHRlcmAgLSBBbiBvcHRpb25hbCBzeW5jaHJvbm91cyBmdW5jdGlvbiB0aGF0IGlzIGludm9rZWQgb25cbiAqICAgZXJyb25lb3VzIHJlc3VsdC4gSWYgaXQgcmV0dXJucyBgdHJ1ZWAgdGhlIHJldHJ5IGF0dGVtcHRzIHdpbGwgY29udGludWU7XG4gKiAgIGlmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAgdGhlIHJldHJ5IGZsb3cgaXMgYWJvcnRlZCB3aXRoIHRoZSBjdXJyZW50XG4gKiAgIGF0dGVtcHQncyBlcnJvciBhbmQgcmVzdWx0IGJlaW5nIHJldHVybmVkIHRvIHRoZSBmaW5hbCBjYWxsYmFjay5cbiAqICAgSW52b2tlZCB3aXRoIChlcnIpLlxuICogKiBJZiBgb3B0c2AgaXMgYSBudW1iZXIsIHRoZSBudW1iZXIgc3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgdGltZXMgdG8gcmV0cnksXG4gKiAgIHdpdGggdGhlIGRlZmF1bHQgaW50ZXJ2YWwgb2YgYDBgLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSB0YXNrIC0gQW4gYXN5bmMgZnVuY3Rpb24gdG8gcmV0cnkuXG4gKiBJbnZva2VkIHdpdGggKGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBbiBvcHRpb25hbCBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGVcbiAqIHRhc2sgaGFzIHN1Y2NlZWRlZCwgb3IgYWZ0ZXIgdGhlIGZpbmFsIGZhaWxlZCBhdHRlbXB0LiBJdCByZWNlaXZlcyB0aGUgYGVycmBcbiAqIGFuZCBgcmVzdWx0YCBhcmd1bWVudHMgb2YgdGhlIGxhc3QgYXR0ZW1wdCBhdCBjb21wbGV0aW5nIHRoZSBgdGFza2AuIEludm9rZWRcbiAqIHdpdGggKGVyciwgcmVzdWx0cykuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBUaGUgYHJldHJ5YCBmdW5jdGlvbiBjYW4gYmUgdXNlZCBhcyBhIHN0YW5kLWFsb25lIGNvbnRyb2wgZmxvdyBieSBwYXNzaW5nXG4gKiAvLyBhIGNhbGxiYWNrLCBhcyBzaG93biBiZWxvdzpcbiAqXG4gKiAvLyB0cnkgY2FsbGluZyBhcGlNZXRob2QgMyB0aW1lc1xuICogYXN5bmMucmV0cnkoMywgYXBpTWV0aG9kLCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xuICogICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSByZXN1bHRcbiAqIH0pO1xuICpcbiAqIC8vIHRyeSBjYWxsaW5nIGFwaU1ldGhvZCAzIHRpbWVzLCB3YWl0aW5nIDIwMCBtcyBiZXR3ZWVuIGVhY2ggcmV0cnlcbiAqIGFzeW5jLnJldHJ5KHt0aW1lczogMywgaW50ZXJ2YWw6IDIwMH0sIGFwaU1ldGhvZCwgZnVuY3Rpb24oZXJyLCByZXN1bHQpIHtcbiAqICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzdWx0XG4gKiB9KTtcbiAqXG4gKiAvLyB0cnkgY2FsbGluZyBhcGlNZXRob2QgMTAgdGltZXMgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmXG4gKiAvLyAoaS5lLiBpbnRlcnZhbHMgb2YgMTAwLCAyMDAsIDQwMCwgODAwLCAxNjAwLCAuLi4gbWlsbGlzZWNvbmRzKVxuICogYXN5bmMucmV0cnkoe1xuICogICB0aW1lczogMTAsXG4gKiAgIGludGVydmFsOiBmdW5jdGlvbihyZXRyeUNvdW50KSB7XG4gKiAgICAgcmV0dXJuIDUwICogTWF0aC5wb3coMiwgcmV0cnlDb3VudCk7XG4gKiAgIH1cbiAqIH0sIGFwaU1ldGhvZCwgZnVuY3Rpb24oZXJyLCByZXN1bHQpIHtcbiAqICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzdWx0XG4gKiB9KTtcbiAqXG4gKiAvLyB0cnkgY2FsbGluZyBhcGlNZXRob2QgdGhlIGRlZmF1bHQgNSB0aW1lcyBubyBkZWxheSBiZXR3ZWVuIGVhY2ggcmV0cnlcbiAqIGFzeW5jLnJldHJ5KGFwaU1ldGhvZCwgZnVuY3Rpb24oZXJyLCByZXN1bHQpIHtcbiAqICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzdWx0XG4gKiB9KTtcbiAqXG4gKiAvLyB0cnkgY2FsbGluZyBhcGlNZXRob2Qgb25seSB3aGVuIGVycm9yIGNvbmRpdGlvbiBzYXRpc2ZpZXMsIGFsbCBvdGhlclxuICogLy8gZXJyb3JzIHdpbGwgYWJvcnQgdGhlIHJldHJ5IGNvbnRyb2wgZmxvdyBhbmQgcmV0dXJuIHRvIGZpbmFsIGNhbGxiYWNrXG4gKiBhc3luYy5yZXRyeSh7XG4gKiAgIGVycm9yRmlsdGVyOiBmdW5jdGlvbihlcnIpIHtcbiAqICAgICByZXR1cm4gZXJyLm1lc3NhZ2UgPT09ICdUZW1wb3JhcnkgZXJyb3InOyAvLyBvbmx5IHJldHJ5IG9uIGEgc3BlY2lmaWMgZXJyb3JcbiAqICAgfVxuICogfSwgYXBpTWV0aG9kLCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xuICogICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSByZXN1bHRcbiAqIH0pO1xuICpcbiAqIC8vIHRvIHJldHJ5IGluZGl2aWR1YWwgbWV0aG9kcyB0aGF0IGFyZSBub3QgYXMgcmVsaWFibGUgd2l0aGluIG90aGVyXG4gKiAvLyBjb250cm9sIGZsb3cgZnVuY3Rpb25zLCB1c2UgdGhlIGByZXRyeWFibGVgIHdyYXBwZXI6XG4gKiBhc3luYy5hdXRvKHtcbiAqICAgICB1c2VyczogYXBpLmdldFVzZXJzLmJpbmQoYXBpKSxcbiAqICAgICBwYXltZW50czogYXN5bmMucmV0cnlhYmxlKDMsIGFwaS5nZXRQYXltZW50cy5iaW5kKGFwaSkpXG4gKiB9LCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAqICAgICAvLyBkbyBzb21ldGhpbmcgd2l0aCB0aGUgcmVzdWx0c1xuICogfSk7XG4gKlxuICovXG5mdW5jdGlvbiByZXRyeShvcHRzLCB0YXNrLCBjYWxsYmFjaykge1xuICAgIHZhciBERUZBVUxUX1RJTUVTID0gNTtcbiAgICB2YXIgREVGQVVMVF9JTlRFUlZBTCA9IDA7XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgdGltZXM6IERFRkFVTFRfVElNRVMsXG4gICAgICAgIGludGVydmFsRnVuYzogY29uc3RhbnQkMShERUZBVUxUX0lOVEVSVkFMKVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwYXJzZVRpbWVzKGFjYywgdCkge1xuICAgICAgICBpZiAodHlwZW9mIHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBhY2MudGltZXMgPSArdC50aW1lcyB8fCBERUZBVUxUX1RJTUVTO1xuXG4gICAgICAgICAgICBhY2MuaW50ZXJ2YWxGdW5jID0gdHlwZW9mIHQuaW50ZXJ2YWwgPT09ICdmdW5jdGlvbicgP1xuICAgICAgICAgICAgICAgIHQuaW50ZXJ2YWwgOlxuICAgICAgICAgICAgICAgIGNvbnN0YW50JDEoK3QuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTCk7XG5cbiAgICAgICAgICAgIGFjYy5lcnJvckZpbHRlciA9IHQuZXJyb3JGaWx0ZXI7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHQgPT09ICdudW1iZXInIHx8IHR5cGVvZiB0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgYWNjLnRpbWVzID0gK3QgfHwgREVGQVVMVF9USU1FUztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnRzIGZvciBhc3luYy5yZXRyeVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMyAmJiB0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IHRhc2sgfHwgbm9vcDtcbiAgICAgICAgdGFzayA9IG9wdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VUaW1lcyhvcHRpb25zLCBvcHRzKTtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGFzayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50cyBmb3IgYXN5bmMucmV0cnlcIik7XG4gICAgfVxuXG4gICAgdmFyIF90YXNrID0gd3JhcEFzeW5jKHRhc2spO1xuXG4gICAgdmFyIGF0dGVtcHQgPSAxO1xuICAgIGZ1bmN0aW9uIHJldHJ5QXR0ZW1wdCgpIHtcbiAgICAgICAgX3Rhc2soZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyICYmIGF0dGVtcHQrKyA8IG9wdGlvbnMudGltZXMgJiZcbiAgICAgICAgICAgICAgICAodHlwZW9mIG9wdGlvbnMuZXJyb3JGaWx0ZXIgIT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmVycm9yRmlsdGVyKGVycikpKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZXRyeUF0dGVtcHQsIG9wdGlvbnMuaW50ZXJ2YWxGdW5jKGF0dGVtcHQpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0cnlBdHRlbXB0KCk7XG59XG5cbi8qKlxuICogQSBjbG9zZSByZWxhdGl2ZSBvZiBbYHJldHJ5YF17QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LnJldHJ5fS4gIFRoaXMgbWV0aG9kXG4gKiB3cmFwcyBhIHRhc2sgYW5kIG1ha2VzIGl0IHJldHJ5YWJsZSwgcmF0aGVyIHRoYW4gaW1tZWRpYXRlbHkgY2FsbGluZyBpdFxuICogd2l0aCByZXRyaWVzLlxuICpcbiAqIEBuYW1lIHJldHJ5YWJsZVxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMucmV0cnlde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy5yZXRyeX1cbiAqIEBjYXRlZ29yeSBDb250cm9sIEZsb3dcbiAqIEBwYXJhbSB7T2JqZWN0fG51bWJlcn0gW29wdHMgPSB7dGltZXM6IDUsIGludGVydmFsOiAwfXwgNV0gLSBvcHRpb25hbFxuICogb3B0aW9ucywgZXhhY3RseSB0aGUgc2FtZSBhcyBmcm9tIGByZXRyeWBcbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gdGFzayAtIHRoZSBhc3luY2hyb25vdXMgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBwYXNzZWQgYW55IGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIHJldHVybmVkIHdyYXBwZXIuXG4gKiBJbnZva2VkIHdpdGggKC4uLmFyZ3MsIGNhbGxiYWNrKS5cbiAqIEByZXR1cm5zIHtBc3luY0Z1bmN0aW9ufSBUaGUgd3JhcHBlZCBmdW5jdGlvbiwgd2hpY2ggd2hlbiBpbnZva2VkLCB3aWxsXG4gKiByZXRyeSBvbiBhbiBlcnJvciwgYmFzZWQgb24gdGhlIHBhcmFtZXRlcnMgc3BlY2lmaWVkIGluIGBvcHRzYC5cbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBhY2NlcHQgdGhlIHNhbWUgcGFyYW1ldGVycyBhcyBgdGFza2AuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLmF1dG8oe1xuICogICAgIGRlcDE6IGFzeW5jLnJldHJ5YWJsZSgzLCBnZXRGcm9tRmxha3lTZXJ2aWNlKSxcbiAqICAgICBwcm9jZXNzOiBbXCJkZXAxXCIsIGFzeW5jLnJldHJ5YWJsZSgzLCBmdW5jdGlvbiAocmVzdWx0cywgY2IpIHtcbiAqICAgICAgICAgbWF5YmVQcm9jZXNzRGF0YShyZXN1bHRzLmRlcDEsIGNiKTtcbiAqICAgICB9KV1cbiAqIH0sIGNhbGxiYWNrKTtcbiAqL1xudmFyIHJldHJ5YWJsZSA9IGZ1bmN0aW9uIChvcHRzLCB0YXNrKSB7XG4gICAgaWYgKCF0YXNrKSB7XG4gICAgICAgIHRhc2sgPSBvcHRzO1xuICAgICAgICBvcHRzID0gbnVsbDtcbiAgICB9XG4gICAgdmFyIF90YXNrID0gd3JhcEFzeW5jKHRhc2spO1xuICAgIHJldHVybiBpbml0aWFsUGFyYW1zKGZ1bmN0aW9uIChhcmdzLCBjYWxsYmFjaykge1xuICAgICAgICBmdW5jdGlvbiB0YXNrRm4oY2IpIHtcbiAgICAgICAgICAgIF90YXNrLmFwcGx5KG51bGwsIGFyZ3MuY29uY2F0KGNiKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0cykgcmV0cnkob3B0cywgdGFza0ZuLCBjYWxsYmFjayk7XG4gICAgICAgIGVsc2UgcmV0cnkodGFza0ZuLCBjYWxsYmFjayk7XG5cbiAgICB9KTtcbn07XG5cbi8qKlxuICogUnVuIHRoZSBmdW5jdGlvbnMgaW4gdGhlIGB0YXNrc2AgY29sbGVjdGlvbiBpbiBzZXJpZXMsIGVhY2ggb25lIHJ1bm5pbmcgb25jZVxuICogdGhlIHByZXZpb3VzIGZ1bmN0aW9uIGhhcyBjb21wbGV0ZWQuIElmIGFueSBmdW5jdGlvbnMgaW4gdGhlIHNlcmllcyBwYXNzIGFuXG4gKiBlcnJvciB0byBpdHMgY2FsbGJhY2ssIG5vIG1vcmUgZnVuY3Rpb25zIGFyZSBydW4sIGFuZCBgY2FsbGJhY2tgIGlzXG4gKiBpbW1lZGlhdGVseSBjYWxsZWQgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGVycm9yLiBPdGhlcndpc2UsIGBjYWxsYmFja2BcbiAqIHJlY2VpdmVzIGFuIGFycmF5IG9mIHJlc3VsdHMgd2hlbiBgdGFza3NgIGhhdmUgY29tcGxldGVkLlxuICpcbiAqIEl0IGlzIGFsc28gcG9zc2libGUgdG8gdXNlIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGFuIGFycmF5LiBFYWNoIHByb3BlcnR5IHdpbGxcbiAqIGJlIHJ1biBhcyBhIGZ1bmN0aW9uLCBhbmQgdGhlIHJlc3VsdHMgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGZpbmFsIGBjYWxsYmFja2BcbiAqIGFzIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGFuIGFycmF5LiBUaGlzIGNhbiBiZSBhIG1vcmUgcmVhZGFibGUgd2F5IG9mIGhhbmRsaW5nXG4gKiAgcmVzdWx0cyBmcm9tIHtAbGluayBhc3luYy5zZXJpZXN9LlxuICpcbiAqICoqTm90ZSoqIHRoYXQgd2hpbGUgbWFueSBpbXBsZW1lbnRhdGlvbnMgcHJlc2VydmUgdGhlIG9yZGVyIG9mIG9iamVjdFxuICogcHJvcGVydGllcywgdGhlIFtFQ01BU2NyaXB0IExhbmd1YWdlIFNwZWNpZmljYXRpb25dKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi81LjEvI3NlYy04LjYpXG4gKiBleHBsaWNpdGx5IHN0YXRlcyB0aGF0XG4gKlxuICogPiBUaGUgbWVjaGFuaWNzIGFuZCBvcmRlciBvZiBlbnVtZXJhdGluZyB0aGUgcHJvcGVydGllcyBpcyBub3Qgc3BlY2lmaWVkLlxuICpcbiAqIFNvIGlmIHlvdSByZWx5IG9uIHRoZSBvcmRlciBpbiB3aGljaCB5b3VyIHNlcmllcyBvZiBmdW5jdGlvbnMgYXJlIGV4ZWN1dGVkLFxuICogYW5kIHdhbnQgdGhpcyB0byB3b3JrIG9uIGFsbCBwbGF0Zm9ybXMsIGNvbnNpZGVyIHVzaW5nIGFuIGFycmF5LlxuICpcbiAqIEBuYW1lIHNlcmllc1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IHRhc2tzIC0gQSBjb2xsZWN0aW9uIGNvbnRhaW5pbmdcbiAqIFthc3luYyBmdW5jdGlvbnNde0BsaW5rIEFzeW5jRnVuY3Rpb259IHRvIHJ1biBpbiBzZXJpZXMuXG4gKiBFYWNoIGZ1bmN0aW9uIGNhbiBjb21wbGV0ZSB3aXRoIGFueSBudW1iZXIgb2Ygb3B0aW9uYWwgYHJlc3VsdGAgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIHJ1biBvbmNlIGFsbCB0aGVcbiAqIGZ1bmN0aW9ucyBoYXZlIGNvbXBsZXRlZC4gVGhpcyBmdW5jdGlvbiBnZXRzIGEgcmVzdWx0cyBhcnJheSAob3Igb2JqZWN0KVxuICogY29udGFpbmluZyBhbGwgdGhlIHJlc3VsdCBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBgdGFza2AgY2FsbGJhY2tzLiBJbnZva2VkXG4gKiB3aXRoIChlcnIsIHJlc3VsdCkuXG4gKiBAZXhhbXBsZVxuICogYXN5bmMuc2VyaWVzKFtcbiAqICAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICAvLyBkbyBzb21lIHN0dWZmIC4uLlxuICogICAgICAgICBjYWxsYmFjayhudWxsLCAnb25lJyk7XG4gKiAgICAgfSxcbiAqICAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICAvLyBkbyBzb21lIG1vcmUgc3R1ZmYgLi4uXG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICd0d28nKTtcbiAqICAgICB9XG4gKiBdLFxuICogLy8gb3B0aW9uYWwgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICogICAgIC8vIHJlc3VsdHMgaXMgbm93IGVxdWFsIHRvIFsnb25lJywgJ3R3byddXG4gKiB9KTtcbiAqXG4gKiBhc3luYy5zZXJpZXMoe1xuICogICAgIG9uZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAqICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIDEpO1xuICogICAgICAgICB9LCAyMDApO1xuICogICAgIH0sXG4gKiAgICAgdHdvOiBmdW5jdGlvbihjYWxsYmFjayl7XG4gKiAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAyKTtcbiAqICAgICAgICAgfSwgMTAwKTtcbiAqICAgICB9XG4gKiB9LCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAqICAgICAvLyByZXN1bHRzIGlzIG5vdyBlcXVhbCB0bzoge29uZTogMSwgdHdvOiAyfVxuICogfSk7XG4gKi9cbmZ1bmN0aW9uIHNlcmllcyh0YXNrcywgY2FsbGJhY2spIHtcbiAgICBfcGFyYWxsZWwoZWFjaE9mU2VyaWVzLCB0YXNrcywgY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGF0IGxlYXN0IG9uZSBlbGVtZW50IGluIHRoZSBgY29sbGAgc2F0aXNmaWVzIGFuIGFzeW5jIHRlc3QuXG4gKiBJZiBhbnkgaXRlcmF0ZWUgY2FsbCByZXR1cm5zIGB0cnVlYCwgdGhlIG1haW4gYGNhbGxiYWNrYCBpcyBpbW1lZGlhdGVseVxuICogY2FsbGVkLlxuICpcbiAqIEBuYW1lIHNvbWVcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBhbGlhcyBhbnlcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgdHJ1dGggdGVzdCB0byBhcHBseSB0byBlYWNoIGl0ZW1cbiAqIGluIHRoZSBjb2xsZWN0aW9ucyBpbiBwYXJhbGxlbC5cbiAqIFRoZSBpdGVyYXRlZSBzaG91bGQgY29tcGxldGUgd2l0aCBhIGJvb2xlYW4gYHJlc3VsdGAgdmFsdWUuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhcyBzb29uIGFzIGFueVxuICogaXRlcmF0ZWUgcmV0dXJucyBgdHJ1ZWAsIG9yIGFmdGVyIGFsbCB0aGUgaXRlcmF0ZWUgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQuXG4gKiBSZXN1bHQgd2lsbCBiZSBlaXRoZXIgYHRydWVgIG9yIGBmYWxzZWAgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgb2YgdGhlIGFzeW5jXG4gKiB0ZXN0cy4gSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdCkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLnNvbWUoWydmaWxlMScsJ2ZpbGUyJywnZmlsZTMnXSwgZnVuY3Rpb24oZmlsZVBhdGgsIGNhbGxiYWNrKSB7XG4gKiAgICAgZnMuYWNjZXNzKGZpbGVQYXRoLCBmdW5jdGlvbihlcnIpIHtcbiAqICAgICAgICAgY2FsbGJhY2sobnVsbCwgIWVycilcbiAqICAgICB9KTtcbiAqIH0sIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gaWYgcmVzdWx0IGlzIHRydWUgdGhlbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZpbGVzIGV4aXN0c1xuICogfSk7XG4gKi9cbnZhciBzb21lID0gZG9QYXJhbGxlbChfY3JlYXRlVGVzdGVyKEJvb2xlYW4sIGlkZW50aXR5KSk7XG5cbi8qKlxuICogVGhlIHNhbWUgYXMgW2Bzb21lYF17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLnNvbWV9IGJ1dCBydW5zIGEgbWF4aW11bSBvZiBgbGltaXRgIGFzeW5jIG9wZXJhdGlvbnMgYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIHNvbWVMaW1pdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuc29tZV17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLnNvbWV9XG4gKiBAYWxpYXMgYW55TGltaXRcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge251bWJlcn0gbGltaXQgLSBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgdHJ1dGggdGVzdCB0byBhcHBseSB0byBlYWNoIGl0ZW1cbiAqIGluIHRoZSBjb2xsZWN0aW9ucyBpbiBwYXJhbGxlbC5cbiAqIFRoZSBpdGVyYXRlZSBzaG91bGQgY29tcGxldGUgd2l0aCBhIGJvb2xlYW4gYHJlc3VsdGAgdmFsdWUuXG4gKiBJbnZva2VkIHdpdGggKGl0ZW0sIGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhcyBzb29uIGFzIGFueVxuICogaXRlcmF0ZWUgcmV0dXJucyBgdHJ1ZWAsIG9yIGFmdGVyIGFsbCB0aGUgaXRlcmF0ZWUgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQuXG4gKiBSZXN1bHQgd2lsbCBiZSBlaXRoZXIgYHRydWVgIG9yIGBmYWxzZWAgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgb2YgdGhlIGFzeW5jXG4gKiB0ZXN0cy4gSW52b2tlZCB3aXRoIChlcnIsIHJlc3VsdCkuXG4gKi9cbnZhciBzb21lTGltaXQgPSBkb1BhcmFsbGVsTGltaXQoX2NyZWF0ZVRlc3RlcihCb29sZWFuLCBpZGVudGl0eSkpO1xuXG4vKipcbiAqIFRoZSBzYW1lIGFzIFtgc29tZWBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5zb21lfSBidXQgcnVucyBvbmx5IGEgc2luZ2xlIGFzeW5jIG9wZXJhdGlvbiBhdCBhIHRpbWUuXG4gKlxuICogQG5hbWUgc29tZVNlcmllc1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb2xsZWN0aW9uc1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMuc29tZV17QGxpbmsgbW9kdWxlOkNvbGxlY3Rpb25zLnNvbWV9XG4gKiBAYWxpYXMgYW55U2VyaWVzXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxJdGVyYWJsZXxPYmplY3R9IGNvbGwgLSBBIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEFuIGFzeW5jIHRydXRoIHRlc3QgdG8gYXBwbHkgdG8gZWFjaCBpdGVtXG4gKiBpbiB0aGUgY29sbGVjdGlvbnMgaW4gc2VyaWVzLlxuICogVGhlIGl0ZXJhdGVlIHNob3VsZCBjb21wbGV0ZSB3aXRoIGEgYm9vbGVhbiBgcmVzdWx0YCB2YWx1ZS5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFzIHNvb24gYXMgYW55XG4gKiBpdGVyYXRlZSByZXR1cm5zIGB0cnVlYCwgb3IgYWZ0ZXIgYWxsIHRoZSBpdGVyYXRlZSBmdW5jdGlvbnMgaGF2ZSBmaW5pc2hlZC5cbiAqIFJlc3VsdCB3aWxsIGJlIGVpdGhlciBgdHJ1ZWAgb3IgYGZhbHNlYCBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBvZiB0aGUgYXN5bmNcbiAqIHRlc3RzLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0KS5cbiAqL1xudmFyIHNvbWVTZXJpZXMgPSBkb0xpbWl0KHNvbWVMaW1pdCwgMSk7XG5cbi8qKlxuICogU29ydHMgYSBsaXN0IGJ5IHRoZSByZXN1bHRzIG9mIHJ1bm5pbmcgZWFjaCBgY29sbGAgdmFsdWUgdGhyb3VnaCBhbiBhc3luY1xuICogYGl0ZXJhdGVlYC5cbiAqXG4gKiBAbmFtZSBzb3J0QnlcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gQW4gYXN5bmMgZnVuY3Rpb24gdG8gYXBwbHkgdG8gZWFjaCBpdGVtIGluXG4gKiBgY29sbGAuXG4gKiBUaGUgaXRlcmF0ZWUgc2hvdWxkIGNvbXBsZXRlIHdpdGggYSB2YWx1ZSB0byB1c2UgYXMgdGhlIHNvcnQgY3JpdGVyaWEgYXNcbiAqIGl0cyBgcmVzdWx0YC5cbiAqIEludm9rZWQgd2l0aCAoaXRlbSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciBhbGwgdGhlXG4gKiBgaXRlcmF0ZWVgIGZ1bmN0aW9ucyBoYXZlIGZpbmlzaGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIFJlc3VsdHMgaXMgdGhlIGl0ZW1zXG4gKiBmcm9tIHRoZSBvcmlnaW5hbCBgY29sbGAgc29ydGVkIGJ5IHRoZSB2YWx1ZXMgcmV0dXJuZWQgYnkgdGhlIGBpdGVyYXRlZWBcbiAqIGNhbGxzLiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0cykuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGFzeW5jLnNvcnRCeShbJ2ZpbGUxJywnZmlsZTInLCdmaWxlMyddLCBmdW5jdGlvbihmaWxlLCBjYWxsYmFjaykge1xuICogICAgIGZzLnN0YXQoZmlsZSwgZnVuY3Rpb24oZXJyLCBzdGF0cykge1xuICogICAgICAgICBjYWxsYmFjayhlcnIsIHN0YXRzLm10aW1lKTtcbiAqICAgICB9KTtcbiAqIH0sIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICogICAgIC8vIHJlc3VsdHMgaXMgbm93IHRoZSBvcmlnaW5hbCBhcnJheSBvZiBmaWxlcyBzb3J0ZWQgYnlcbiAqICAgICAvLyBtb2RpZmllZCBkYXRlXG4gKiB9KTtcbiAqXG4gKiAvLyBCeSBtb2RpZnlpbmcgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciB0aGVcbiAqIC8vIHNvcnRpbmcgb3JkZXIgY2FuIGJlIGluZmx1ZW5jZWQ6XG4gKlxuICogLy8gYXNjZW5kaW5nIG9yZGVyXG4gKiBhc3luYy5zb3J0QnkoWzEsOSwzLDVdLCBmdW5jdGlvbih4LCBjYWxsYmFjaykge1xuICogICAgIGNhbGxiYWNrKG51bGwsIHgpO1xuICogfSwgZnVuY3Rpb24oZXJyLHJlc3VsdCkge1xuICogICAgIC8vIHJlc3VsdCBjYWxsYmFja1xuICogfSk7XG4gKlxuICogLy8gZGVzY2VuZGluZyBvcmRlclxuICogYXN5bmMuc29ydEJ5KFsxLDksMyw1XSwgZnVuY3Rpb24oeCwgY2FsbGJhY2spIHtcbiAqICAgICBjYWxsYmFjayhudWxsLCB4Ki0xKTsgICAgLy88LSB4Ki0xIGluc3RlYWQgb2YgeCwgdHVybnMgdGhlIG9yZGVyIGFyb3VuZFxuICogfSwgZnVuY3Rpb24oZXJyLHJlc3VsdCkge1xuICogICAgIC8vIHJlc3VsdCBjYWxsYmFja1xuICogfSk7XG4gKi9cbmZ1bmN0aW9uIHNvcnRCeSAoY29sbCwgaXRlcmF0ZWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIF9pdGVyYXRlZSA9IHdyYXBBc3luYyhpdGVyYXRlZSk7XG4gICAgbWFwKGNvbGwsIGZ1bmN0aW9uICh4LCBjYWxsYmFjaykge1xuICAgICAgICBfaXRlcmF0ZWUoeCwgZnVuY3Rpb24gKGVyciwgY3JpdGVyaWEpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwge3ZhbHVlOiB4LCBjcml0ZXJpYTogY3JpdGVyaWF9KTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xuICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgYXJyYXlNYXAocmVzdWx0cy5zb3J0KGNvbXBhcmF0b3IpLCBiYXNlUHJvcGVydHkoJ3ZhbHVlJykpKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNvbXBhcmF0b3IobGVmdCwgcmlnaHQpIHtcbiAgICAgICAgdmFyIGEgPSBsZWZ0LmNyaXRlcmlhLCBiID0gcmlnaHQuY3JpdGVyaWE7XG4gICAgICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcbiAgICB9XG59XG5cbi8qKlxuICogU2V0cyBhIHRpbWUgbGltaXQgb24gYW4gYXN5bmNocm9ub3VzIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gZG9lcyBub3QgY2FsbFxuICogaXRzIGNhbGxiYWNrIHdpdGhpbiB0aGUgc3BlY2lmaWVkIG1pbGxpc2Vjb25kcywgaXQgd2lsbCBiZSBjYWxsZWQgd2l0aCBhXG4gKiB0aW1lb3V0IGVycm9yLiBUaGUgY29kZSBwcm9wZXJ0eSBmb3IgdGhlIGVycm9yIG9iamVjdCB3aWxsIGJlIGAnRVRJTUVET1VUJ2AuXG4gKlxuICogQG5hbWUgdGltZW91dFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpVdGlsc1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gYXN5bmNGbiAtIFRoZSBhc3luYyBmdW5jdGlvbiB0byBsaW1pdCBpbiB0aW1lLlxuICogQHBhcmFtIHtudW1iZXJ9IG1pbGxpc2Vjb25kcyAtIFRoZSBzcGVjaWZpZWQgdGltZSBsaW1pdC5cbiAqIEBwYXJhbSB7Kn0gW2luZm9dIC0gQW55IHZhcmlhYmxlIHlvdSB3YW50IGF0dGFjaGVkIChgc3RyaW5nYCwgYG9iamVjdGAsIGV0YylcbiAqIHRvIHRpbWVvdXQgRXJyb3IgZm9yIG1vcmUgaW5mb3JtYXRpb24uLlxuICogQHJldHVybnMge0FzeW5jRnVuY3Rpb259IFJldHVybnMgYSB3cmFwcGVkIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgd2l0aCBhbnlcbiAqIG9mIHRoZSBjb250cm9sIGZsb3cgZnVuY3Rpb25zLlxuICogSW52b2tlIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBwYXJhbWV0ZXJzIGFzIHlvdSB3b3VsZCBgYXN5bmNGdW5jYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gbXlGdW5jdGlvbihmb28sIGNhbGxiYWNrKSB7XG4gKiAgICAgZG9Bc3luY1Rhc2soZm9vLCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAqICAgICAgICAgLy8gaGFuZGxlIGVycm9yc1xuICogICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAqXG4gKiAgICAgICAgIC8vIGRvIHNvbWUgc3R1ZmYgLi4uXG4gKlxuICogICAgICAgICAvLyByZXR1cm4gcHJvY2Vzc2VkIGRhdGFcbiAqICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICogICAgIH0pO1xuICogfVxuICpcbiAqIHZhciB3cmFwcGVkID0gYXN5bmMudGltZW91dChteUZ1bmN0aW9uLCAxMDAwKTtcbiAqXG4gKiAvLyBjYWxsIGB3cmFwcGVkYCBhcyB5b3Ugd291bGQgYG15RnVuY3Rpb25gXG4gKiB3cmFwcGVkKHsgYmFyOiAnYmFyJyB9LCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAqICAgICAvLyBpZiBgbXlGdW5jdGlvbmAgdGFrZXMgPCAxMDAwIG1zIHRvIGV4ZWN1dGUsIGBlcnJgXG4gKiAgICAgLy8gYW5kIGBkYXRhYCB3aWxsIGhhdmUgdGhlaXIgZXhwZWN0ZWQgdmFsdWVzXG4gKlxuICogICAgIC8vIGVsc2UgYGVycmAgd2lsbCBiZSBhbiBFcnJvciB3aXRoIHRoZSBjb2RlICdFVElNRURPVVQnXG4gKiB9KTtcbiAqL1xuZnVuY3Rpb24gdGltZW91dChhc3luY0ZuLCBtaWxsaXNlY29uZHMsIGluZm8pIHtcbiAgICB2YXIgZm4gPSB3cmFwQXN5bmMoYXN5bmNGbik7XG5cbiAgICByZXR1cm4gaW5pdGlhbFBhcmFtcyhmdW5jdGlvbiAoYXJncywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHRpbWVkT3V0ID0gZmFsc2U7XG4gICAgICAgIHZhciB0aW1lcjtcblxuICAgICAgICBmdW5jdGlvbiB0aW1lb3V0Q2FsbGJhY2soKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IGFzeW5jRm4ubmFtZSB8fCAnYW5vbnltb3VzJztcbiAgICAgICAgICAgIHZhciBlcnJvciAgPSBuZXcgRXJyb3IoJ0NhbGxiYWNrIGZ1bmN0aW9uIFwiJyArIG5hbWUgKyAnXCIgdGltZWQgb3V0LicpO1xuICAgICAgICAgICAgZXJyb3IuY29kZSA9ICdFVElNRURPVVQnO1xuICAgICAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgICAgICBlcnJvci5pbmZvID0gaW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbWVkT3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFyZ3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRpbWVkT3V0KSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzZXR1cCB0aW1lciBhbmQgY2FsbCBvcmlnaW5hbCBmdW5jdGlvblxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQodGltZW91dENhbGxiYWNrLCBtaWxsaXNlY29uZHMpO1xuICAgICAgICBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9KTtcbn1cblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUNlaWwgPSBNYXRoLmNlaWw7XG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucmFuZ2VgIGFuZCBgXy5yYW5nZVJpZ2h0YCB3aGljaCBkb2Vzbid0XG4gKiBjb2VyY2UgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IG9mIHRoZSByYW5nZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGVuZCBvZiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RlcCBUaGUgdmFsdWUgdG8gaW5jcmVtZW50IG9yIGRlY3JlbWVudCBieS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSByYW5nZSBvZiBudW1iZXJzLlxuICovXG5mdW5jdGlvbiBiYXNlUmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KG5hdGl2ZUNlaWwoKGVuZCAtIHN0YXJ0KSAvIChzdGVwIHx8IDEpKSwgMCksXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHJlc3VsdFtmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XSA9IHN0YXJ0O1xuICAgIHN0YXJ0ICs9IHN0ZXA7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbdGltZXNde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy50aW1lc30gYnV0IHJ1bnMgYSBtYXhpbXVtIG9mIGBsaW1pdGAgYXN5bmMgb3BlcmF0aW9ucyBhdCBhXG4gKiB0aW1lLlxuICpcbiAqIEBuYW1lIHRpbWVzTGltaXRcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29udHJvbEZsb3dcbiAqIEBtZXRob2RcbiAqIEBzZWUgW2FzeW5jLnRpbWVzXXtAbGluayBtb2R1bGU6Q29udHJvbEZsb3cudGltZXN9XG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgLSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHJ1biB0aGUgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gbGltaXQgLSBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXN5bmMgb3BlcmF0aW9ucyBhdCBhIHRpbWUuXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gVGhlIGFzeW5jIGZ1bmN0aW9uIHRvIGNhbGwgYG5gIHRpbWVzLlxuICogSW52b2tlZCB3aXRoIHRoZSBpdGVyYXRpb24gaW5kZXggYW5kIGEgY2FsbGJhY2s6IChuLCBuZXh0KS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gc2VlIFthc3luYy5tYXBde0BsaW5rIG1vZHVsZTpDb2xsZWN0aW9ucy5tYXB9LlxuICovXG5mdW5jdGlvbiB0aW1lTGltaXQoY291bnQsIGxpbWl0LCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgX2l0ZXJhdGVlID0gd3JhcEFzeW5jKGl0ZXJhdGVlKTtcbiAgICBtYXBMaW1pdChiYXNlUmFuZ2UoMCwgY291bnQsIDEpLCBsaW1pdCwgX2l0ZXJhdGVlLCBjYWxsYmFjayk7XG59XG5cbi8qKlxuICogQ2FsbHMgdGhlIGBpdGVyYXRlZWAgZnVuY3Rpb24gYG5gIHRpbWVzLCBhbmQgYWNjdW11bGF0ZXMgcmVzdWx0cyBpbiB0aGUgc2FtZVxuICogbWFubmVyIHlvdSB3b3VsZCB1c2Ugd2l0aCBbbWFwXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMubWFwfS5cbiAqXG4gKiBAbmFtZSB0aW1lc1xuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQHNlZSBbYXN5bmMubWFwXXtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMubWFwfVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtudW1iZXJ9IG4gLSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHJ1biB0aGUgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gVGhlIGFzeW5jIGZ1bmN0aW9uIHRvIGNhbGwgYG5gIHRpbWVzLlxuICogSW52b2tlZCB3aXRoIHRoZSBpdGVyYXRpb24gaW5kZXggYW5kIGEgY2FsbGJhY2s6IChuLCBuZXh0KS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gc2VlIHtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMubWFwfS5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gUHJldGVuZCB0aGlzIGlzIHNvbWUgY29tcGxpY2F0ZWQgYXN5bmMgZmFjdG9yeVxuICogdmFyIGNyZWF0ZVVzZXIgPSBmdW5jdGlvbihpZCwgY2FsbGJhY2spIHtcbiAqICAgICBjYWxsYmFjayhudWxsLCB7XG4gKiAgICAgICAgIGlkOiAndXNlcicgKyBpZFxuICogICAgIH0pO1xuICogfTtcbiAqXG4gKiAvLyBnZW5lcmF0ZSA1IHVzZXJzXG4gKiBhc3luYy50aW1lcyg1LCBmdW5jdGlvbihuLCBuZXh0KSB7XG4gKiAgICAgY3JlYXRlVXNlcihuLCBmdW5jdGlvbihlcnIsIHVzZXIpIHtcbiAqICAgICAgICAgbmV4dChlcnIsIHVzZXIpO1xuICogICAgIH0pO1xuICogfSwgZnVuY3Rpb24oZXJyLCB1c2Vycykge1xuICogICAgIC8vIHdlIHNob3VsZCBub3cgaGF2ZSA1IHVzZXJzXG4gKiB9KTtcbiAqL1xudmFyIHRpbWVzID0gZG9MaW1pdCh0aW1lTGltaXQsIEluZmluaXR5KTtcblxuLyoqXG4gKiBUaGUgc2FtZSBhcyBbdGltZXNde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy50aW1lc30gYnV0IHJ1bnMgb25seSBhIHNpbmdsZSBhc3luYyBvcGVyYXRpb24gYXQgYSB0aW1lLlxuICpcbiAqIEBuYW1lIHRpbWVzU2VyaWVzXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy50aW1lc117QGxpbmsgbW9kdWxlOkNvbnRyb2xGbG93LnRpbWVzfVxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtudW1iZXJ9IG4gLSBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHJ1biB0aGUgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGl0ZXJhdGVlIC0gVGhlIGFzeW5jIGZ1bmN0aW9uIHRvIGNhbGwgYG5gIHRpbWVzLlxuICogSW52b2tlZCB3aXRoIHRoZSBpdGVyYXRpb24gaW5kZXggYW5kIGEgY2FsbGJhY2s6IChuLCBuZXh0KS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gc2VlIHtAbGluayBtb2R1bGU6Q29sbGVjdGlvbnMubWFwfS5cbiAqL1xudmFyIHRpbWVzU2VyaWVzID0gZG9MaW1pdCh0aW1lTGltaXQsIDEpO1xuXG4vKipcbiAqIEEgcmVsYXRpdmUgb2YgYHJlZHVjZWAuICBUYWtlcyBhbiBPYmplY3Qgb3IgQXJyYXksIGFuZCBpdGVyYXRlcyBvdmVyIGVhY2hcbiAqIGVsZW1lbnQgaW4gc2VyaWVzLCBlYWNoIHN0ZXAgcG90ZW50aWFsbHkgbXV0YXRpbmcgYW4gYGFjY3VtdWxhdG9yYCB2YWx1ZS5cbiAqIFRoZSB0eXBlIG9mIHRoZSBhY2N1bXVsYXRvciBkZWZhdWx0cyB0byB0aGUgdHlwZSBvZiBjb2xsZWN0aW9uIHBhc3NlZCBpbi5cbiAqXG4gKiBAbmFtZSB0cmFuc2Zvcm1cbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBtb2R1bGU6Q29sbGVjdGlvbnNcbiAqIEBtZXRob2RcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gY29sbCAtIEEgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gLSBUaGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgdHJhbnNmb3JtLiAgSWYgb21pdHRlZCxcbiAqIGl0IHdpbGwgZGVmYXVsdCB0byBhbiBlbXB0eSBPYmplY3Qgb3IgQXJyYXksIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiBgY29sbGBcbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBIGZ1bmN0aW9uIGFwcGxpZWQgdG8gZWFjaCBpdGVtIGluIHRoZVxuICogY29sbGVjdGlvbiB0aGF0IHBvdGVudGlhbGx5IG1vZGlmaWVzIHRoZSBhY2N1bXVsYXRvci5cbiAqIEludm9rZWQgd2l0aCAoYWNjdW11bGF0b3IsIGl0ZW0sIGtleSwgY2FsbGJhY2spLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEEgY2FsbGJhY2sgd2hpY2ggaXMgY2FsbGVkIGFmdGVyIGFsbCB0aGVcbiAqIGBpdGVyYXRlZWAgZnVuY3Rpb25zIGhhdmUgZmluaXNoZWQuIFJlc3VsdCBpcyB0aGUgdHJhbnNmb3JtZWQgYWNjdW11bGF0b3IuXG4gKiBJbnZva2VkIHdpdGggKGVyciwgcmVzdWx0KS5cbiAqIEBleGFtcGxlXG4gKlxuICogYXN5bmMudHJhbnNmb3JtKFsxLDIsM10sIGZ1bmN0aW9uKGFjYywgaXRlbSwgaW5kZXgsIGNhbGxiYWNrKSB7XG4gKiAgICAgLy8gcG9pbnRsZXNzIGFzeW5jOlxuICogICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgIGFjYy5wdXNoKGl0ZW0gKiAyKVxuICogICAgICAgICBjYWxsYmFjayhudWxsKVxuICogICAgIH0pO1xuICogfSwgZnVuY3Rpb24oZXJyLCByZXN1bHQpIHtcbiAqICAgICAvLyByZXN1bHQgaXMgbm93IGVxdWFsIHRvIFsyLCA0LCA2XVxuICogfSk7XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBhc3luYy50cmFuc2Zvcm0oe2E6IDEsIGI6IDIsIGM6IDN9LCBmdW5jdGlvbiAob2JqLCB2YWwsIGtleSwgY2FsbGJhY2spIHtcbiAqICAgICBzZXRJbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICogICAgICAgICBvYmpba2V5XSA9IHZhbCAqIDI7XG4gKiAgICAgICAgIGNhbGxiYWNrKCk7XG4gKiAgICAgfSlcbiAqIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCkge1xuICogICAgIC8vIHJlc3VsdCBpcyBlcXVhbCB0byB7YTogMiwgYjogNCwgYzogNn1cbiAqIH0pXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybSAoY29sbCwgYWNjdW11bGF0b3IsIGl0ZXJhdGVlLCBjYWxsYmFjaykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IDMpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBpdGVyYXRlZTtcbiAgICAgICAgaXRlcmF0ZWUgPSBhY2N1bXVsYXRvcjtcbiAgICAgICAgYWNjdW11bGF0b3IgPSBpc0FycmF5KGNvbGwpID8gW10gOiB7fTtcbiAgICB9XG4gICAgY2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgIHZhciBfaXRlcmF0ZWUgPSB3cmFwQXN5bmMoaXRlcmF0ZWUpO1xuXG4gICAgZWFjaE9mKGNvbGwsIGZ1bmN0aW9uKHYsIGssIGNiKSB7XG4gICAgICAgIF9pdGVyYXRlZShhY2N1bXVsYXRvciwgdiwgaywgY2IpO1xuICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjYWxsYmFjayhlcnIsIGFjY3VtdWxhdG9yKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBJdCBydW5zIGVhY2ggdGFzayBpbiBzZXJpZXMgYnV0IHN0b3BzIHdoZW5ldmVyIGFueSBvZiB0aGUgZnVuY3Rpb25zIHdlcmVcbiAqIHN1Y2Nlc3NmdWwuIElmIG9uZSBvZiB0aGUgdGFza3Mgd2VyZSBzdWNjZXNzZnVsLCB0aGUgYGNhbGxiYWNrYCB3aWxsIGJlXG4gKiBwYXNzZWQgdGhlIHJlc3VsdCBvZiB0aGUgc3VjY2Vzc2Z1bCB0YXNrLiBJZiBhbGwgdGFza3MgZmFpbCwgdGhlIGNhbGxiYWNrXG4gKiB3aWxsIGJlIHBhc3NlZCB0aGUgZXJyb3IgYW5kIHJlc3VsdCAoaWYgYW55KSBvZiB0aGUgZmluYWwgYXR0ZW1wdC5cbiAqXG4gKiBAbmFtZSB0cnlFYWNoXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge0FycmF5fEl0ZXJhYmxlfE9iamVjdH0gdGFza3MgLSBBIGNvbGxlY3Rpb24gY29udGFpbmluZyBmdW5jdGlvbnMgdG9cbiAqIHJ1biwgZWFjaCBmdW5jdGlvbiBpcyBwYXNzZWQgYSBgY2FsbGJhY2soZXJyLCByZXN1bHQpYCBpdCBtdXN0IGNhbGwgb25cbiAqIGNvbXBsZXRpb24gd2l0aCBhbiBlcnJvciBgZXJyYCAod2hpY2ggY2FuIGJlIGBudWxsYCkgYW5kIGFuIG9wdGlvbmFsIGByZXN1bHRgXG4gKiB2YWx1ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBbiBvcHRpb25hbCBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgd2hlbiBvbmVcbiAqIG9mIHRoZSB0YXNrcyBoYXMgc3VjY2VlZGVkLCBvciBhbGwgaGF2ZSBmYWlsZWQuIEl0IHJlY2VpdmVzIHRoZSBgZXJyYCBhbmRcbiAqIGByZXN1bHRgIGFyZ3VtZW50cyBvZiB0aGUgbGFzdCBhdHRlbXB0IGF0IGNvbXBsZXRpbmcgdGhlIGB0YXNrYC4gSW52b2tlZCB3aXRoXG4gKiAoZXJyLCByZXN1bHRzKS5cbiAqIEBleGFtcGxlXG4gKiBhc3luYy50cnlFYWNoKFtcbiAqICAgICBmdW5jdGlvbiBnZXREYXRhRnJvbUZpcnN0V2Vic2l0ZShjYWxsYmFjaykge1xuICogICAgICAgICAvLyBUcnkgZ2V0dGluZyB0aGUgZGF0YSBmcm9tIHRoZSBmaXJzdCB3ZWJzaXRlXG4gKiAgICAgICAgIGNhbGxiYWNrKGVyciwgZGF0YSk7XG4gKiAgICAgfSxcbiAqICAgICBmdW5jdGlvbiBnZXREYXRhRnJvbVNlY29uZFdlYnNpdGUoY2FsbGJhY2spIHtcbiAqICAgICAgICAgLy8gRmlyc3Qgd2Vic2l0ZSBmYWlsZWQsXG4gKiAgICAgICAgIC8vIFRyeSBnZXR0aW5nIHRoZSBkYXRhIGZyb20gdGhlIGJhY2t1cCB3ZWJzaXRlXG4gKiAgICAgICAgIGNhbGxiYWNrKGVyciwgZGF0YSk7XG4gKiAgICAgfVxuICogXSxcbiAqIC8vIG9wdGlvbmFsIGNhbGxiYWNrXG4gKiBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAqICAgICBOb3cgZG8gc29tZXRoaW5nIHdpdGggdGhlIGRhdGEuXG4gKiB9KTtcbiAqXG4gKi9cbmZ1bmN0aW9uIHRyeUVhY2godGFza3MsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGVycm9yID0gbnVsbDtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbm9vcDtcbiAgICBlYWNoU2VyaWVzKHRhc2tzLCBmdW5jdGlvbih0YXNrLCBjYWxsYmFjaykge1xuICAgICAgICB3cmFwQXN5bmModGFzaykoZnVuY3Rpb24gKGVyciwgcmVzLyosIC4uLmFyZ3MqLykge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc2xpY2UoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICBjYWxsYmFjayghZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBVbmRvZXMgYSBbbWVtb2l6ZV17QGxpbmsgbW9kdWxlOlV0aWxzLm1lbW9pemV9ZCBmdW5jdGlvbiwgcmV2ZXJ0aW5nIGl0IHRvIHRoZSBvcmlnaW5hbCxcbiAqIHVubWVtb2l6ZWQgZm9ybS4gSGFuZHkgZm9yIHRlc3RpbmcuXG4gKlxuICogQG5hbWUgdW5tZW1vaXplXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOlV0aWxzXG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy5tZW1vaXplXXtAbGluayBtb2R1bGU6VXRpbHMubWVtb2l6ZX1cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0FzeW5jRnVuY3Rpb259IGZuIC0gdGhlIG1lbW9pemVkIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7QXN5bmNGdW5jdGlvbn0gYSBmdW5jdGlvbiB0aGF0IGNhbGxzIHRoZSBvcmlnaW5hbCB1bm1lbW9pemVkIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIHVubWVtb2l6ZShmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoZm4udW5tZW1vaXplZCB8fCBmbikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIFJlcGVhdGVkbHkgY2FsbCBgaXRlcmF0ZWVgLCB3aGlsZSBgdGVzdGAgcmV0dXJucyBgdHJ1ZWAuIENhbGxzIGBjYWxsYmFja2Agd2hlblxuICogc3RvcHBlZCwgb3IgYW4gZXJyb3Igb2NjdXJzLlxuICpcbiAqIEBuYW1lIHdoaWxzdFxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIG1vZHVsZTpDb250cm9sRmxvd1xuICogQG1ldGhvZFxuICogQGNhdGVnb3J5IENvbnRyb2wgRmxvd1xuICogQHBhcmFtIHtGdW5jdGlvbn0gdGVzdCAtIHN5bmNocm9ub3VzIHRydXRoIHRlc3QgdG8gcGVyZm9ybSBiZWZvcmUgZWFjaFxuICogZXhlY3V0aW9uIG9mIGBpdGVyYXRlZWAuIEludm9rZWQgd2l0aCAoKS5cbiAqIEBwYXJhbSB7QXN5bmNGdW5jdGlvbn0gaXRlcmF0ZWUgLSBBbiBhc3luYyBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgZWFjaCB0aW1lXG4gKiBgdGVzdGAgcGFzc2VzLiBJbnZva2VkIHdpdGggKGNhbGxiYWNrKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja10gLSBBIGNhbGxiYWNrIHdoaWNoIGlzIGNhbGxlZCBhZnRlciB0aGUgdGVzdFxuICogZnVuY3Rpb24gaGFzIGZhaWxlZCBhbmQgcmVwZWF0ZWQgZXhlY3V0aW9uIG9mIGBpdGVyYXRlZWAgaGFzIHN0b3BwZWQuIGBjYWxsYmFja2BcbiAqIHdpbGwgYmUgcGFzc2VkIGFuIGVycm9yIGFuZCBhbnkgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgZmluYWwgYGl0ZXJhdGVlYCdzXG4gKiBjYWxsYmFjay4gSW52b2tlZCB3aXRoIChlcnIsIFtyZXN1bHRzXSk7XG4gKiBAcmV0dXJucyB1bmRlZmluZWRcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGNvdW50ID0gMDtcbiAqIGFzeW5jLndoaWxzdChcbiAqICAgICBmdW5jdGlvbigpIHsgcmV0dXJuIGNvdW50IDwgNTsgfSxcbiAqICAgICBmdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgICAgICBjb3VudCsrO1xuICogICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgY291bnQpO1xuICogICAgICAgICB9LCAxMDAwKTtcbiAqICAgICB9LFxuICogICAgIGZ1bmN0aW9uIChlcnIsIG4pIHtcbiAqICAgICAgICAgLy8gNSBzZWNvbmRzIGhhdmUgcGFzc2VkLCBuID0gNVxuICogICAgIH1cbiAqICk7XG4gKi9cbmZ1bmN0aW9uIHdoaWxzdCh0ZXN0LCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IG9ubHlPbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgIHZhciBfaXRlcmF0ZWUgPSB3cmFwQXN5bmMoaXRlcmF0ZWUpO1xuICAgIGlmICghdGVzdCgpKSByZXR1cm4gY2FsbGJhY2sobnVsbCk7XG4gICAgdmFyIG5leHQgPSBmdW5jdGlvbihlcnIvKiwgLi4uYXJncyovKSB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgICBpZiAodGVzdCgpKSByZXR1cm4gX2l0ZXJhdGVlKG5leHQpO1xuICAgICAgICB2YXIgYXJncyA9IHNsaWNlKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIFtudWxsXS5jb25jYXQoYXJncykpO1xuICAgIH07XG4gICAgX2l0ZXJhdGVlKG5leHQpO1xufVxuXG4vKipcbiAqIFJlcGVhdGVkbHkgY2FsbCBgaXRlcmF0ZWVgIHVudGlsIGB0ZXN0YCByZXR1cm5zIGB0cnVlYC4gQ2FsbHMgYGNhbGxiYWNrYCB3aGVuXG4gKiBzdG9wcGVkLCBvciBhbiBlcnJvciBvY2N1cnMuIGBjYWxsYmFja2Agd2lsbCBiZSBwYXNzZWQgYW4gZXJyb3IgYW5kIGFueVxuICogYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgZmluYWwgYGl0ZXJhdGVlYCdzIGNhbGxiYWNrLlxuICpcbiAqIFRoZSBpbnZlcnNlIG9mIFt3aGlsc3Rde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy53aGlsc3R9LlxuICpcbiAqIEBuYW1lIHVudGlsXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAc2VlIFthc3luYy53aGlsc3Rde0BsaW5rIG1vZHVsZTpDb250cm9sRmxvdy53aGlsc3R9XG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0ZXN0IC0gc3luY2hyb25vdXMgdHJ1dGggdGVzdCB0byBwZXJmb3JtIGJlZm9yZSBlYWNoXG4gKiBleGVjdXRpb24gb2YgYGl0ZXJhdGVlYC4gSW52b2tlZCB3aXRoICgpLlxuICogQHBhcmFtIHtBc3luY0Z1bmN0aW9ufSBpdGVyYXRlZSAtIEFuIGFzeW5jIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBlYWNoIHRpbWVcbiAqIGB0ZXN0YCBmYWlscy4gSW52b2tlZCB3aXRoIChjYWxsYmFjaykuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdIC0gQSBjYWxsYmFjayB3aGljaCBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHRlc3RcbiAqIGZ1bmN0aW9uIGhhcyBwYXNzZWQgYW5kIHJlcGVhdGVkIGV4ZWN1dGlvbiBvZiBgaXRlcmF0ZWVgIGhhcyBzdG9wcGVkLiBgY2FsbGJhY2tgXG4gKiB3aWxsIGJlIHBhc3NlZCBhbiBlcnJvciBhbmQgYW55IGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIGZpbmFsIGBpdGVyYXRlZWAnc1xuICogY2FsbGJhY2suIEludm9rZWQgd2l0aCAoZXJyLCBbcmVzdWx0c10pO1xuICovXG5mdW5jdGlvbiB1bnRpbCh0ZXN0LCBpdGVyYXRlZSwgY2FsbGJhY2spIHtcbiAgICB3aGlsc3QoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhdGVzdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0sIGl0ZXJhdGVlLCBjYWxsYmFjayk7XG59XG5cbi8qKlxuICogUnVucyB0aGUgYHRhc2tzYCBhcnJheSBvZiBmdW5jdGlvbnMgaW4gc2VyaWVzLCBlYWNoIHBhc3NpbmcgdGhlaXIgcmVzdWx0cyB0b1xuICogdGhlIG5leHQgaW4gdGhlIGFycmF5LiBIb3dldmVyLCBpZiBhbnkgb2YgdGhlIGB0YXNrc2AgcGFzcyBhbiBlcnJvciB0byB0aGVpclxuICogb3duIGNhbGxiYWNrLCB0aGUgbmV4dCBmdW5jdGlvbiBpcyBub3QgZXhlY3V0ZWQsIGFuZCB0aGUgbWFpbiBgY2FsbGJhY2tgIGlzXG4gKiBpbW1lZGlhdGVseSBjYWxsZWQgd2l0aCB0aGUgZXJyb3IuXG4gKlxuICogQG5hbWUgd2F0ZXJmYWxsXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgbW9kdWxlOkNvbnRyb2xGbG93XG4gKiBAbWV0aG9kXG4gKiBAY2F0ZWdvcnkgQ29udHJvbCBGbG93XG4gKiBAcGFyYW0ge0FycmF5fSB0YXNrcyAtIEFuIGFycmF5IG9mIFthc3luYyBmdW5jdGlvbnNde0BsaW5rIEFzeW5jRnVuY3Rpb259XG4gKiB0byBydW4uXG4gKiBFYWNoIGZ1bmN0aW9uIHNob3VsZCBjb21wbGV0ZSB3aXRoIGFueSBudW1iZXIgb2YgYHJlc3VsdGAgdmFsdWVzLlxuICogVGhlIGByZXN1bHRgIHZhbHVlcyB3aWxsIGJlIHBhc3NlZCBhcyBhcmd1bWVudHMsIGluIG9yZGVyLCB0byB0aGUgbmV4dCB0YXNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXSAtIEFuIG9wdGlvbmFsIGNhbGxiYWNrIHRvIHJ1biBvbmNlIGFsbCB0aGVcbiAqIGZ1bmN0aW9ucyBoYXZlIGNvbXBsZXRlZC4gVGhpcyB3aWxsIGJlIHBhc3NlZCB0aGUgcmVzdWx0cyBvZiB0aGUgbGFzdCB0YXNrJ3NcbiAqIGNhbGxiYWNrLiBJbnZva2VkIHdpdGggKGVyciwgW3Jlc3VsdHNdKS5cbiAqIEByZXR1cm5zIHVuZGVmaW5lZFxuICogQGV4YW1wbGVcbiAqXG4gKiBhc3luYy53YXRlcmZhbGwoW1xuICogICAgIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICdvbmUnLCAndHdvJyk7XG4gKiAgICAgfSxcbiAqICAgICBmdW5jdGlvbihhcmcxLCBhcmcyLCBjYWxsYmFjaykge1xuICogICAgICAgICAvLyBhcmcxIG5vdyBlcXVhbHMgJ29uZScgYW5kIGFyZzIgbm93IGVxdWFscyAndHdvJ1xuICogICAgICAgICBjYWxsYmFjayhudWxsLCAndGhyZWUnKTtcbiAqICAgICB9LFxuICogICAgIGZ1bmN0aW9uKGFyZzEsIGNhbGxiYWNrKSB7XG4gKiAgICAgICAgIC8vIGFyZzEgbm93IGVxdWFscyAndGhyZWUnXG4gKiAgICAgICAgIGNhbGxiYWNrKG51bGwsICdkb25lJyk7XG4gKiAgICAgfVxuICogXSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gcmVzdWx0IG5vdyBlcXVhbHMgJ2RvbmUnXG4gKiB9KTtcbiAqXG4gKiAvLyBPciwgd2l0aCBuYW1lZCBmdW5jdGlvbnM6XG4gKiBhc3luYy53YXRlcmZhbGwoW1xuICogICAgIG15Rmlyc3RGdW5jdGlvbixcbiAqICAgICBteVNlY29uZEZ1bmN0aW9uLFxuICogICAgIG15TGFzdEZ1bmN0aW9uLFxuICogXSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG4gKiAgICAgLy8gcmVzdWx0IG5vdyBlcXVhbHMgJ2RvbmUnXG4gKiB9KTtcbiAqIGZ1bmN0aW9uIG15Rmlyc3RGdW5jdGlvbihjYWxsYmFjaykge1xuICogICAgIGNhbGxiYWNrKG51bGwsICdvbmUnLCAndHdvJyk7XG4gKiB9XG4gKiBmdW5jdGlvbiBteVNlY29uZEZ1bmN0aW9uKGFyZzEsIGFyZzIsIGNhbGxiYWNrKSB7XG4gKiAgICAgLy8gYXJnMSBub3cgZXF1YWxzICdvbmUnIGFuZCBhcmcyIG5vdyBlcXVhbHMgJ3R3bydcbiAqICAgICBjYWxsYmFjayhudWxsLCAndGhyZWUnKTtcbiAqIH1cbiAqIGZ1bmN0aW9uIG15TGFzdEZ1bmN0aW9uKGFyZzEsIGNhbGxiYWNrKSB7XG4gKiAgICAgLy8gYXJnMSBub3cgZXF1YWxzICd0aHJlZSdcbiAqICAgICBjYWxsYmFjayhudWxsLCAnZG9uZScpO1xuICogfVxuICovXG52YXIgd2F0ZXJmYWxsID0gZnVuY3Rpb24odGFza3MsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBvbmNlKGNhbGxiYWNrIHx8IG5vb3ApO1xuICAgIGlmICghaXNBcnJheSh0YXNrcykpIHJldHVybiBjYWxsYmFjayhuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IHRvIHdhdGVyZmFsbCBtdXN0IGJlIGFuIGFycmF5IG9mIGZ1bmN0aW9ucycpKTtcbiAgICBpZiAoIXRhc2tzLmxlbmd0aCkgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgdmFyIHRhc2tJbmRleCA9IDA7XG5cbiAgICBmdW5jdGlvbiBuZXh0VGFzayhhcmdzKSB7XG4gICAgICAgIHZhciB0YXNrID0gd3JhcEFzeW5jKHRhc2tzW3Rhc2tJbmRleCsrXSk7XG4gICAgICAgIGFyZ3MucHVzaChvbmx5T25jZShuZXh0KSk7XG4gICAgICAgIHRhc2suYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV4dChlcnIvKiwgLi4uYXJncyovKSB7XG4gICAgICAgIGlmIChlcnIgfHwgdGFza0luZGV4ID09PSB0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIG5leHRUYXNrKHNsaWNlKGFyZ3VtZW50cywgMSkpO1xuICAgIH1cblxuICAgIG5leHRUYXNrKFtdKTtcbn07XG5cbi8qKlxuICogQW4gXCJhc3luYyBmdW5jdGlvblwiIGluIHRoZSBjb250ZXh0IG9mIEFzeW5jIGlzIGFuIGFzeW5jaHJvbm91cyBmdW5jdGlvbiB3aXRoXG4gKiBhIHZhcmlhYmxlIG51bWJlciBvZiBwYXJhbWV0ZXJzLCB3aXRoIHRoZSBmaW5hbCBwYXJhbWV0ZXIgYmVpbmcgYSBjYWxsYmFjay5cbiAqIChgZnVuY3Rpb24gKGFyZzEsIGFyZzIsIC4uLiwgY2FsbGJhY2spIHt9YClcbiAqIFRoZSBmaW5hbCBjYWxsYmFjayBpcyBvZiB0aGUgZm9ybSBgY2FsbGJhY2soZXJyLCByZXN1bHRzLi4uKWAsIHdoaWNoIG11c3QgYmVcbiAqIGNhbGxlZCBvbmNlIHRoZSBmdW5jdGlvbiBpcyBjb21wbGV0ZWQuICBUaGUgY2FsbGJhY2sgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIGFcbiAqIEVycm9yIGFzIGl0cyBmaXJzdCBhcmd1bWVudCB0byBzaWduYWwgdGhhdCBhbiBlcnJvciBvY2N1cnJlZC5cbiAqIE90aGVyd2lzZSwgaWYgbm8gZXJyb3Igb2NjdXJyZWQsIGl0IHNob3VsZCBiZSBjYWxsZWQgd2l0aCBgbnVsbGAgYXMgdGhlIGZpcnN0XG4gKiBhcmd1bWVudCwgYW5kIGFueSBhZGRpdGlvbmFsIGByZXN1bHRgIGFyZ3VtZW50cyB0aGF0IG1heSBhcHBseSwgdG8gc2lnbmFsXG4gKiBzdWNjZXNzZnVsIGNvbXBsZXRpb24uXG4gKiBUaGUgY2FsbGJhY2sgbXVzdCBiZSBjYWxsZWQgZXhhY3RseSBvbmNlLCBpZGVhbGx5IG9uIGEgbGF0ZXIgdGljayBvZiB0aGVcbiAqIEphdmFTY3JpcHQgZXZlbnQgbG9vcC5cbiAqXG4gKiBUaGlzIHR5cGUgb2YgZnVuY3Rpb24gaXMgYWxzbyByZWZlcnJlZCB0byBhcyBhIFwiTm9kZS1zdHlsZSBhc3luYyBmdW5jdGlvblwiLFxuICogb3IgYSBcImNvbnRpbnVhdGlvbiBwYXNzaW5nLXN0eWxlIGZ1bmN0aW9uXCIgKENQUykuIE1vc3Qgb2YgdGhlIG1ldGhvZHMgb2YgdGhpc1xuICogbGlicmFyeSBhcmUgdGhlbXNlbHZlcyBDUFMvTm9kZS1zdHlsZSBhc3luYyBmdW5jdGlvbnMsIG9yIGZ1bmN0aW9ucyB0aGF0XG4gKiByZXR1cm4gQ1BTL05vZGUtc3R5bGUgYXN5bmMgZnVuY3Rpb25zLlxuICpcbiAqIFdoZXJldmVyIHdlIGFjY2VwdCBhIE5vZGUtc3R5bGUgYXN5bmMgZnVuY3Rpb24sIHdlIGFsc28gZGlyZWN0bHkgYWNjZXB0IGFuXG4gKiBbRVMyMDE3IGBhc3luY2AgZnVuY3Rpb25de0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL1N0YXRlbWVudHMvYXN5bmNfZnVuY3Rpb259LlxuICogSW4gdGhpcyBjYXNlLCB0aGUgYGFzeW5jYCBmdW5jdGlvbiB3aWxsIG5vdCBiZSBwYXNzZWQgYSBmaW5hbCBjYWxsYmFja1xuICogYXJndW1lbnQsIGFuZCBhbnkgdGhyb3duIGVycm9yIHdpbGwgYmUgdXNlZCBhcyB0aGUgYGVycmAgYXJndW1lbnQgb2YgdGhlXG4gKiBpbXBsaWNpdCBjYWxsYmFjaywgYW5kIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBiZSB1c2VkIGFzIHRoZSBgcmVzdWx0YCB2YWx1ZS5cbiAqIChpLmUuIGEgYHJlamVjdGVkYCBvZiB0aGUgcmV0dXJuZWQgUHJvbWlzZSBiZWNvbWVzIHRoZSBgZXJyYCBjYWxsYmFja1xuICogYXJndW1lbnQsIGFuZCBhIGByZXNvbHZlZGAgdmFsdWUgYmVjb21lcyB0aGUgYHJlc3VsdGAuKVxuICpcbiAqIE5vdGUsIGR1ZSB0byBKYXZhU2NyaXB0IGxpbWl0YXRpb25zLCB3ZSBjYW4gb25seSBkZXRlY3QgbmF0aXZlIGBhc3luY2BcbiAqIGZ1bmN0aW9ucyBhbmQgbm90IHRyYW5zcGlsaWVkIGltcGxlbWVudGF0aW9ucy5cbiAqIFlvdXIgZW52aXJvbm1lbnQgbXVzdCBoYXZlIGBhc3luY2AvYGF3YWl0YCBzdXBwb3J0IGZvciB0aGlzIHRvIHdvcmsuXG4gKiAoZS5nLiBOb2RlID4gdjcuNiwgb3IgYSByZWNlbnQgdmVyc2lvbiBvZiBhIG1vZGVybiBicm93c2VyKS5cbiAqIElmIHlvdSBhcmUgdXNpbmcgYGFzeW5jYCBmdW5jdGlvbnMgdGhyb3VnaCBhIHRyYW5zcGlsZXIgKGUuZy4gQmFiZWwpLCB5b3VcbiAqIG11c3Qgc3RpbGwgd3JhcCB0aGUgZnVuY3Rpb24gd2l0aCBbYXN5bmNpZnlde0BsaW5rIG1vZHVsZTpVdGlscy5hc3luY2lmeX0sXG4gKiBiZWNhdXNlIHRoZSBgYXN5bmMgZnVuY3Rpb25gIHdpbGwgYmUgY29tcGlsZWQgdG8gYW4gb3JkaW5hcnkgZnVuY3Rpb24gdGhhdFxuICogcmV0dXJucyBhIHByb21pc2UuXG4gKlxuICogQHR5cGVkZWYge0Z1bmN0aW9ufSBBc3luY0Z1bmN0aW9uXG4gKiBAc3RhdGljXG4gKi9cblxuLyoqXG4gKiBBc3luYyBpcyBhIHV0aWxpdHkgbW9kdWxlIHdoaWNoIHByb3ZpZGVzIHN0cmFpZ2h0LWZvcndhcmQsIHBvd2VyZnVsIGZ1bmN0aW9uc1xuICogZm9yIHdvcmtpbmcgd2l0aCBhc3luY2hyb25vdXMgSmF2YVNjcmlwdC4gQWx0aG91Z2ggb3JpZ2luYWxseSBkZXNpZ25lZCBmb3JcbiAqIHVzZSB3aXRoIFtOb2RlLmpzXShodHRwOi8vbm9kZWpzLm9yZykgYW5kIGluc3RhbGxhYmxlIHZpYVxuICogYG5wbSBpbnN0YWxsIC0tc2F2ZSBhc3luY2AsIGl0IGNhbiBhbHNvIGJlIHVzZWQgZGlyZWN0bHkgaW4gdGhlIGJyb3dzZXIuXG4gKiBAbW9kdWxlIGFzeW5jXG4gKiBAc2VlIEFzeW5jRnVuY3Rpb25cbiAqL1xuXG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGBhc3luY2AgZnVuY3Rpb25zIGZvciBtYW5pcHVsYXRpbmcgY29sbGVjdGlvbnMsIHN1Y2ggYXNcbiAqIGFycmF5cyBhbmQgb2JqZWN0cy5cbiAqIEBtb2R1bGUgQ29sbGVjdGlvbnNcbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBgYXN5bmNgIGZ1bmN0aW9ucyBmb3IgY29udHJvbGxpbmcgdGhlIGZsb3cgdGhyb3VnaCBhIHNjcmlwdC5cbiAqIEBtb2R1bGUgQ29udHJvbEZsb3dcbiAqL1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBgYXN5bmNgIHV0aWxpdHkgZnVuY3Rpb25zLlxuICogQG1vZHVsZSBVdGlsc1xuICovXG5cbnZhciBpbmRleCA9IHtcbiAgICBhcHBseTogYXBwbHksXG4gICAgYXBwbHlFYWNoOiBhcHBseUVhY2gsXG4gICAgYXBwbHlFYWNoU2VyaWVzOiBhcHBseUVhY2hTZXJpZXMsXG4gICAgYXN5bmNpZnk6IGFzeW5jaWZ5LFxuICAgIGF1dG86IGF1dG8sXG4gICAgYXV0b0luamVjdDogYXV0b0luamVjdCxcbiAgICBjYXJnbzogY2FyZ28sXG4gICAgY29tcG9zZTogY29tcG9zZSxcbiAgICBjb25jYXQ6IGNvbmNhdCxcbiAgICBjb25jYXRMaW1pdDogY29uY2F0TGltaXQsXG4gICAgY29uY2F0U2VyaWVzOiBjb25jYXRTZXJpZXMsXG4gICAgY29uc3RhbnQ6IGNvbnN0YW50LFxuICAgIGRldGVjdDogZGV0ZWN0LFxuICAgIGRldGVjdExpbWl0OiBkZXRlY3RMaW1pdCxcbiAgICBkZXRlY3RTZXJpZXM6IGRldGVjdFNlcmllcyxcbiAgICBkaXI6IGRpcixcbiAgICBkb0R1cmluZzogZG9EdXJpbmcsXG4gICAgZG9VbnRpbDogZG9VbnRpbCxcbiAgICBkb1doaWxzdDogZG9XaGlsc3QsXG4gICAgZHVyaW5nOiBkdXJpbmcsXG4gICAgZWFjaDogZWFjaExpbWl0LFxuICAgIGVhY2hMaW1pdDogZWFjaExpbWl0JDEsXG4gICAgZWFjaE9mOiBlYWNoT2YsXG4gICAgZWFjaE9mTGltaXQ6IGVhY2hPZkxpbWl0LFxuICAgIGVhY2hPZlNlcmllczogZWFjaE9mU2VyaWVzLFxuICAgIGVhY2hTZXJpZXM6IGVhY2hTZXJpZXMsXG4gICAgZW5zdXJlQXN5bmM6IGVuc3VyZUFzeW5jLFxuICAgIGV2ZXJ5OiBldmVyeSxcbiAgICBldmVyeUxpbWl0OiBldmVyeUxpbWl0LFxuICAgIGV2ZXJ5U2VyaWVzOiBldmVyeVNlcmllcyxcbiAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICBmaWx0ZXJMaW1pdDogZmlsdGVyTGltaXQsXG4gICAgZmlsdGVyU2VyaWVzOiBmaWx0ZXJTZXJpZXMsXG4gICAgZm9yZXZlcjogZm9yZXZlcixcbiAgICBncm91cEJ5OiBncm91cEJ5LFxuICAgIGdyb3VwQnlMaW1pdDogZ3JvdXBCeUxpbWl0LFxuICAgIGdyb3VwQnlTZXJpZXM6IGdyb3VwQnlTZXJpZXMsXG4gICAgbG9nOiBsb2csXG4gICAgbWFwOiBtYXAsXG4gICAgbWFwTGltaXQ6IG1hcExpbWl0LFxuICAgIG1hcFNlcmllczogbWFwU2VyaWVzLFxuICAgIG1hcFZhbHVlczogbWFwVmFsdWVzLFxuICAgIG1hcFZhbHVlc0xpbWl0OiBtYXBWYWx1ZXNMaW1pdCxcbiAgICBtYXBWYWx1ZXNTZXJpZXM6IG1hcFZhbHVlc1NlcmllcyxcbiAgICBtZW1vaXplOiBtZW1vaXplLFxuICAgIG5leHRUaWNrOiBuZXh0VGljayxcbiAgICBwYXJhbGxlbDogcGFyYWxsZWxMaW1pdCxcbiAgICBwYXJhbGxlbExpbWl0OiBwYXJhbGxlbExpbWl0JDEsXG4gICAgcHJpb3JpdHlRdWV1ZTogcHJpb3JpdHlRdWV1ZSxcbiAgICBxdWV1ZTogcXVldWUkMSxcbiAgICByYWNlOiByYWNlLFxuICAgIHJlZHVjZTogcmVkdWNlLFxuICAgIHJlZHVjZVJpZ2h0OiByZWR1Y2VSaWdodCxcbiAgICByZWZsZWN0OiByZWZsZWN0LFxuICAgIHJlZmxlY3RBbGw6IHJlZmxlY3RBbGwsXG4gICAgcmVqZWN0OiByZWplY3QsXG4gICAgcmVqZWN0TGltaXQ6IHJlamVjdExpbWl0LFxuICAgIHJlamVjdFNlcmllczogcmVqZWN0U2VyaWVzLFxuICAgIHJldHJ5OiByZXRyeSxcbiAgICByZXRyeWFibGU6IHJldHJ5YWJsZSxcbiAgICBzZXE6IHNlcSxcbiAgICBzZXJpZXM6IHNlcmllcyxcbiAgICBzZXRJbW1lZGlhdGU6IHNldEltbWVkaWF0ZSQxLFxuICAgIHNvbWU6IHNvbWUsXG4gICAgc29tZUxpbWl0OiBzb21lTGltaXQsXG4gICAgc29tZVNlcmllczogc29tZVNlcmllcyxcbiAgICBzb3J0Qnk6IHNvcnRCeSxcbiAgICB0aW1lb3V0OiB0aW1lb3V0LFxuICAgIHRpbWVzOiB0aW1lcyxcbiAgICB0aW1lc0xpbWl0OiB0aW1lTGltaXQsXG4gICAgdGltZXNTZXJpZXM6IHRpbWVzU2VyaWVzLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHRyeUVhY2g6IHRyeUVhY2gsXG4gICAgdW5tZW1vaXplOiB1bm1lbW9pemUsXG4gICAgdW50aWw6IHVudGlsLFxuICAgIHdhdGVyZmFsbDogd2F0ZXJmYWxsLFxuICAgIHdoaWxzdDogd2hpbHN0LFxuXG4gICAgLy8gYWxpYXNlc1xuICAgIGFsbDogZXZlcnksXG4gICAgYWxsTGltaXQ6IGV2ZXJ5TGltaXQsXG4gICAgYWxsU2VyaWVzOiBldmVyeVNlcmllcyxcbiAgICBhbnk6IHNvbWUsXG4gICAgYW55TGltaXQ6IHNvbWVMaW1pdCxcbiAgICBhbnlTZXJpZXM6IHNvbWVTZXJpZXMsXG4gICAgZmluZDogZGV0ZWN0LFxuICAgIGZpbmRMaW1pdDogZGV0ZWN0TGltaXQsXG4gICAgZmluZFNlcmllczogZGV0ZWN0U2VyaWVzLFxuICAgIGZvckVhY2g6IGVhY2hMaW1pdCxcbiAgICBmb3JFYWNoU2VyaWVzOiBlYWNoU2VyaWVzLFxuICAgIGZvckVhY2hMaW1pdDogZWFjaExpbWl0JDEsXG4gICAgZm9yRWFjaE9mOiBlYWNoT2YsXG4gICAgZm9yRWFjaE9mU2VyaWVzOiBlYWNoT2ZTZXJpZXMsXG4gICAgZm9yRWFjaE9mTGltaXQ6IGVhY2hPZkxpbWl0LFxuICAgIGluamVjdDogcmVkdWNlLFxuICAgIGZvbGRsOiByZWR1Y2UsXG4gICAgZm9sZHI6IHJlZHVjZVJpZ2h0LFxuICAgIHNlbGVjdDogZmlsdGVyLFxuICAgIHNlbGVjdExpbWl0OiBmaWx0ZXJMaW1pdCxcbiAgICBzZWxlY3RTZXJpZXM6IGZpbHRlclNlcmllcyxcbiAgICB3cmFwU3luYzogYXN5bmNpZnlcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGluZGV4O1xuZXhwb3J0cy5hcHBseSA9IGFwcGx5O1xuZXhwb3J0cy5hcHBseUVhY2ggPSBhcHBseUVhY2g7XG5leHBvcnRzLmFwcGx5RWFjaFNlcmllcyA9IGFwcGx5RWFjaFNlcmllcztcbmV4cG9ydHMuYXN5bmNpZnkgPSBhc3luY2lmeTtcbmV4cG9ydHMuYXV0byA9IGF1dG87XG5leHBvcnRzLmF1dG9JbmplY3QgPSBhdXRvSW5qZWN0O1xuZXhwb3J0cy5jYXJnbyA9IGNhcmdvO1xuZXhwb3J0cy5jb21wb3NlID0gY29tcG9zZTtcbmV4cG9ydHMuY29uY2F0ID0gY29uY2F0O1xuZXhwb3J0cy5jb25jYXRMaW1pdCA9IGNvbmNhdExpbWl0O1xuZXhwb3J0cy5jb25jYXRTZXJpZXMgPSBjb25jYXRTZXJpZXM7XG5leHBvcnRzLmNvbnN0YW50ID0gY29uc3RhbnQ7XG5leHBvcnRzLmRldGVjdCA9IGRldGVjdDtcbmV4cG9ydHMuZGV0ZWN0TGltaXQgPSBkZXRlY3RMaW1pdDtcbmV4cG9ydHMuZGV0ZWN0U2VyaWVzID0gZGV0ZWN0U2VyaWVzO1xuZXhwb3J0cy5kaXIgPSBkaXI7XG5leHBvcnRzLmRvRHVyaW5nID0gZG9EdXJpbmc7XG5leHBvcnRzLmRvVW50aWwgPSBkb1VudGlsO1xuZXhwb3J0cy5kb1doaWxzdCA9IGRvV2hpbHN0O1xuZXhwb3J0cy5kdXJpbmcgPSBkdXJpbmc7XG5leHBvcnRzLmVhY2ggPSBlYWNoTGltaXQ7XG5leHBvcnRzLmVhY2hMaW1pdCA9IGVhY2hMaW1pdCQxO1xuZXhwb3J0cy5lYWNoT2YgPSBlYWNoT2Y7XG5leHBvcnRzLmVhY2hPZkxpbWl0ID0gZWFjaE9mTGltaXQ7XG5leHBvcnRzLmVhY2hPZlNlcmllcyA9IGVhY2hPZlNlcmllcztcbmV4cG9ydHMuZWFjaFNlcmllcyA9IGVhY2hTZXJpZXM7XG5leHBvcnRzLmVuc3VyZUFzeW5jID0gZW5zdXJlQXN5bmM7XG5leHBvcnRzLmV2ZXJ5ID0gZXZlcnk7XG5leHBvcnRzLmV2ZXJ5TGltaXQgPSBldmVyeUxpbWl0O1xuZXhwb3J0cy5ldmVyeVNlcmllcyA9IGV2ZXJ5U2VyaWVzO1xuZXhwb3J0cy5maWx0ZXIgPSBmaWx0ZXI7XG5leHBvcnRzLmZpbHRlckxpbWl0ID0gZmlsdGVyTGltaXQ7XG5leHBvcnRzLmZpbHRlclNlcmllcyA9IGZpbHRlclNlcmllcztcbmV4cG9ydHMuZm9yZXZlciA9IGZvcmV2ZXI7XG5leHBvcnRzLmdyb3VwQnkgPSBncm91cEJ5O1xuZXhwb3J0cy5ncm91cEJ5TGltaXQgPSBncm91cEJ5TGltaXQ7XG5leHBvcnRzLmdyb3VwQnlTZXJpZXMgPSBncm91cEJ5U2VyaWVzO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLm1hcCA9IG1hcDtcbmV4cG9ydHMubWFwTGltaXQgPSBtYXBMaW1pdDtcbmV4cG9ydHMubWFwU2VyaWVzID0gbWFwU2VyaWVzO1xuZXhwb3J0cy5tYXBWYWx1ZXMgPSBtYXBWYWx1ZXM7XG5leHBvcnRzLm1hcFZhbHVlc0xpbWl0ID0gbWFwVmFsdWVzTGltaXQ7XG5leHBvcnRzLm1hcFZhbHVlc1NlcmllcyA9IG1hcFZhbHVlc1NlcmllcztcbmV4cG9ydHMubWVtb2l6ZSA9IG1lbW9pemU7XG5leHBvcnRzLm5leHRUaWNrID0gbmV4dFRpY2s7XG5leHBvcnRzLnBhcmFsbGVsID0gcGFyYWxsZWxMaW1pdDtcbmV4cG9ydHMucGFyYWxsZWxMaW1pdCA9IHBhcmFsbGVsTGltaXQkMTtcbmV4cG9ydHMucHJpb3JpdHlRdWV1ZSA9IHByaW9yaXR5UXVldWU7XG5leHBvcnRzLnF1ZXVlID0gcXVldWUkMTtcbmV4cG9ydHMucmFjZSA9IHJhY2U7XG5leHBvcnRzLnJlZHVjZSA9IHJlZHVjZTtcbmV4cG9ydHMucmVkdWNlUmlnaHQgPSByZWR1Y2VSaWdodDtcbmV4cG9ydHMucmVmbGVjdCA9IHJlZmxlY3Q7XG5leHBvcnRzLnJlZmxlY3RBbGwgPSByZWZsZWN0QWxsO1xuZXhwb3J0cy5yZWplY3QgPSByZWplY3Q7XG5leHBvcnRzLnJlamVjdExpbWl0ID0gcmVqZWN0TGltaXQ7XG5leHBvcnRzLnJlamVjdFNlcmllcyA9IHJlamVjdFNlcmllcztcbmV4cG9ydHMucmV0cnkgPSByZXRyeTtcbmV4cG9ydHMucmV0cnlhYmxlID0gcmV0cnlhYmxlO1xuZXhwb3J0cy5zZXEgPSBzZXE7XG5leHBvcnRzLnNlcmllcyA9IHNlcmllcztcbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlJDE7XG5leHBvcnRzLnNvbWUgPSBzb21lO1xuZXhwb3J0cy5zb21lTGltaXQgPSBzb21lTGltaXQ7XG5leHBvcnRzLnNvbWVTZXJpZXMgPSBzb21lU2VyaWVzO1xuZXhwb3J0cy5zb3J0QnkgPSBzb3J0Qnk7XG5leHBvcnRzLnRpbWVvdXQgPSB0aW1lb3V0O1xuZXhwb3J0cy50aW1lcyA9IHRpbWVzO1xuZXhwb3J0cy50aW1lc0xpbWl0ID0gdGltZUxpbWl0O1xuZXhwb3J0cy50aW1lc1NlcmllcyA9IHRpbWVzU2VyaWVzO1xuZXhwb3J0cy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5leHBvcnRzLnRyeUVhY2ggPSB0cnlFYWNoO1xuZXhwb3J0cy51bm1lbW9pemUgPSB1bm1lbW9pemU7XG5leHBvcnRzLnVudGlsID0gdW50aWw7XG5leHBvcnRzLndhdGVyZmFsbCA9IHdhdGVyZmFsbDtcbmV4cG9ydHMud2hpbHN0ID0gd2hpbHN0O1xuZXhwb3J0cy5hbGwgPSBldmVyeTtcbmV4cG9ydHMuYWxsTGltaXQgPSBldmVyeUxpbWl0O1xuZXhwb3J0cy5hbGxTZXJpZXMgPSBldmVyeVNlcmllcztcbmV4cG9ydHMuYW55ID0gc29tZTtcbmV4cG9ydHMuYW55TGltaXQgPSBzb21lTGltaXQ7XG5leHBvcnRzLmFueVNlcmllcyA9IHNvbWVTZXJpZXM7XG5leHBvcnRzLmZpbmQgPSBkZXRlY3Q7XG5leHBvcnRzLmZpbmRMaW1pdCA9IGRldGVjdExpbWl0O1xuZXhwb3J0cy5maW5kU2VyaWVzID0gZGV0ZWN0U2VyaWVzO1xuZXhwb3J0cy5mb3JFYWNoID0gZWFjaExpbWl0O1xuZXhwb3J0cy5mb3JFYWNoU2VyaWVzID0gZWFjaFNlcmllcztcbmV4cG9ydHMuZm9yRWFjaExpbWl0ID0gZWFjaExpbWl0JDE7XG5leHBvcnRzLmZvckVhY2hPZiA9IGVhY2hPZjtcbmV4cG9ydHMuZm9yRWFjaE9mU2VyaWVzID0gZWFjaE9mU2VyaWVzO1xuZXhwb3J0cy5mb3JFYWNoT2ZMaW1pdCA9IGVhY2hPZkxpbWl0O1xuZXhwb3J0cy5pbmplY3QgPSByZWR1Y2U7XG5leHBvcnRzLmZvbGRsID0gcmVkdWNlO1xuZXhwb3J0cy5mb2xkciA9IHJlZHVjZVJpZ2h0O1xuZXhwb3J0cy5zZWxlY3QgPSBmaWx0ZXI7XG5leHBvcnRzLnNlbGVjdExpbWl0ID0gZmlsdGVyTGltaXQ7XG5leHBvcnRzLnNlbGVjdFNlcmllcyA9IGZpbHRlclNlcmllcztcbmV4cG9ydHMud3JhcFN5bmMgPSBhc3luY2lmeTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=