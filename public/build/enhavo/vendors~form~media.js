(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~form~media"],{

/***/ "./node_modules/blueimp-file-upload/js/jquery.fileupload.js":
/*!******************************************************************!*\
  !*** ./node_modules/blueimp-file-upload/js/jquery.fileupload.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * jQuery File Upload Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */

;(function (factory) {
    'use strict';
    if (true) {
        // Register as an anonymous AMD module:
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
            __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js"),
            __webpack_require__(/*! jquery-ui/ui/widget */ "./node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js")
        ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file"/>').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,
            // By default, duplicate file names are expected to be handled on
            // the server-side. If this is not possible (e.g. when uploading
            // files directly to Amazon S3), the following option can be set to
            // an empty object or an object mapping existing filenames, e.g.:
            // { "image.jpg": true, "image (1).jpg": true }
            // If it is set, all files will be uploaded with unique filenames,
            // adding increasing number suffixes if necessary, e.g.:
            // "image (2).jpg"
            uniqueFilenames: undefined,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback before the start of each chunk upload request (before form data initialization):
            // chunkbeforesend: function (e, data) {}, // .bind('fileuploadchunkbeforesend', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false,
            timeout: 0
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _deinitProgressListener: function (options) {
            var xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            if (xhr.upload) {
                $(xhr.upload).unbind('progress');
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _getUniqueFilename: function (name, map) {
            name = String(name);
            if (map[name]) {
                name = name.replace(
                    /(?: \(([\d]+)\))?(\.[^.]+)?$/,
                    function (_, p1, p2) {
                        var index = p1 ? Number(p1) + 1 : 1;
                        var ext = p2 || '';
                        return ' (' + index + ')' + ext;
                    }
                );
                return this._getUniqueFilename(name, map);
            }
            map[name] = true;
            return name;
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.uploadName || file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(
                            paramName,
                            options.blob,
                            file.uploadName || file.name
                        );
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                var fileName = file.uploadName || file.name;
                                if (options.uniqueFilenames) {
                                    fileName = that._getUniqueFilename(
                                        fileName,
                                        options.uniqueFilenames
                                    );
                                }
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    fileName
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).then(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).then(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || ($.type(mcs) === 'function' ? mcs(options) : mcs) < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + ($.type(mcs) === 'function' ? mcs(o) : mcs),
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Trigger chunkbeforesend to allow form data to be updated for this chunk
                that._trigger('chunkbeforesend', null, o);
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    })
                    .always(function () {
                        that._deinitProgressListener(o);
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._deinitProgressListener(options);
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.then(send);
                } else {
                    this._sequence = this._sequence.then(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (!filesLength) {
                return false;
            }
            if (limitSize && files[0].size === undefined) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true),
                restoreFocus = input.is(document.activeElement);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // If the fileInput had focus before it was detached,
            // restore focus to the inputClone.
            if (restoreFocus) {
                inputClone.focus();
            }
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                entries = [],
                dirReader,
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                };
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empty list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).then(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).then(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _destroy: function () {
            this._destroyEventHandlers();
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                data = this.element.data();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                this.element[0].attributes,
                function (index, attr) {
                    var key = attr.name.toLowerCase(),
                        value;
                    if (/^data-/.test(key)) {
                        // Convert hyphen-ated key to camelCase:
                        key = key.slice(5).replace(/-[a-z]/g, function (str) {
                            return str.charAt(1).toUpperCase();
                        });
                        value = data[key];
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));


/***/ }),

/***/ "./node_modules/blueimp-file-upload/js/jquery.iframe-transport.js":
/*!************************************************************************!*\
  !*** ./node_modules/blueimp-file-upload/js/jquery.iframe-transport.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * jQuery Iframe Transport Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, require, window, document, JSON */

;(function (factory) {
    'use strict';
    if (true) {
        // Register as an anonymous AMD module:
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0,
        jsonAPI = $,
        jsonParse = 'parseJSON';

    if ('JSON' in window && 'parse' in JSON) {
      jsonAPI = JSON;
      jsonParse = 'parse';
    }

    // The iframe transport accepts four additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    // options.initialIframeSrc: the URL of the initial iframe src,
    //  by default set to "javascript:false;"
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            // javascript:false as initial iframe src
            // prevents warning popups on HTTPS in IE6:
            /*jshint scripturl: true */
            var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
            /*jshint scripturl: false */
                form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    counter += 1;
                    iframe = $(
                        '<iframe src="' + initialIframeSrc +
                            '" name="iframe-transport-' + counter + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="' + initialIframeSrc + '"></iframe>')
                                    .appendTo(form);
                                window.setTimeout(function () {
                                    // Removing the form in a setTimeout call
                                    // allows Chrome's developer tools to display
                                    // the response result
                                    form.remove();
                                }, 0);
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                            // Remove the HTML5 form attribute from the input(s):
                            options.fileInput.removeAttr('form');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                // Restore the original name and form properties:
                                $(input)
                                    .prop('name', clone.prop('name'))
                                    .attr('form', clone.attr('form'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', initialIframeSrc);
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, xml
    // and script.
    // Please note that the Content-Type for JSON responses has to be text/plain
    // or text/html, if the browser doesn't include application/json in the
    // Accept header, else IE will show a download dialog.
    // The Content-Type for XML responses on the other hand has to be always
    // application/xml or text/xml, so IE properly parses the XML response.
    // See also
    // https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && jsonAPI[jsonParse]($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe xml': function (iframe) {
                var xmlDoc = iframe && iframe[0];
                return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc :
                        $.parseXML((xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) ||
                            $(xmlDoc.body).html());
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));


/***/ }),

/***/ "./node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js":
/*!************************************************************************!*\
  !*** ./node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery UI - v1.12.1+CommonJS - 2018-02-10
 * http://jqueryui.com
 * Includes: widget.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
  if ( true ) {

    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "./node_modules/jquery/src/jquery.js") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(function( $ ) {

  $.ui = $.ui || {};

  var version = $.ui.version = "1.12.1";


  /*!
   * jQuery UI Widget 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

  //>>label: Widget
  //>>group: Core
  //>>description: Provides a factory for creating stateful widgets with a common API.
  //>>docs: http://api.jqueryui.com/jQuery.widget/
  //>>demos: http://jqueryui.com/widget/



  var widgetUuid = 0;
  var widgetSlice = Array.prototype.slice;

  $.cleanData = ( function( orig ) {
    return function( elems ) {
      var events, elem, i;
      for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
        try {

          // Only trigger remove when necessary to save time
          events = $._data( elem, "events" );
          if ( events && events.remove ) {
            $( elem ).triggerHandler( "remove" );
          }

          // Http://bugs.jquery.com/ticket/8235
        } catch ( e ) {}
      }
      orig( elems );
    };
  } )( $.cleanData );

  $.widget = function( name, base, prototype ) {
    var existingConstructor, constructor, basePrototype;

    // ProxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)
    var proxiedPrototype = {};

    var namespace = name.split( "." )[ 0 ];
    name = name.split( "." )[ 1 ];
    var fullName = namespace + "-" + name;

    if ( !prototype ) {
      prototype = base;
      base = $.Widget;
    }

    if ( $.isArray( prototype ) ) {
      prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
    }

    // Create selector for plugin
    $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
      return !!$.data( elem, fullName );
    };

    $[ namespace ] = $[ namespace ] || {};
    existingConstructor = $[ namespace ][ name ];
    constructor = $[ namespace ][ name ] = function( options, element ) {

      // Allow instantiation without "new" keyword
      if ( !this._createWidget ) {
        return new constructor( options, element );
      }

      // Allow instantiation without initializing for simple inheritance
      // must use "new" keyword (the code above always passes args)
      if ( arguments.length ) {
        this._createWidget( options, element );
      }
    };

    // Extend with the existing constructor to carry over any static properties
    $.extend( constructor, existingConstructor, {
      version: prototype.version,

      // Copy the object used to create the prototype in case we need to
      // redefine the widget later
      _proto: $.extend( {}, prototype ),

      // Track widgets that inherit from this widget in case this widget is
      // redefined after a widget inherits from it
      _childConstructors: []
    } );

    basePrototype = new base();

    // We need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from
    basePrototype.options = $.widget.extend( {}, basePrototype.options );
    $.each( prototype, function( prop, value ) {
      if ( !$.isFunction( value ) ) {
        proxiedPrototype[ prop ] = value;
        return;
      }
      proxiedPrototype[ prop ] = ( function() {
        function _super() {
          return base.prototype[ prop ].apply( this, arguments );
        }

        function _superApply( args ) {
          return base.prototype[ prop ].apply( this, args );
        }

        return function() {
          var __super = this._super;
          var __superApply = this._superApply;
          var returnValue;

          this._super = _super;
          this._superApply = _superApply;

          returnValue = value.apply( this, arguments );

          this._super = __super;
          this._superApply = __superApply;

          return returnValue;
        };
      } )();
    } );
    constructor.prototype = $.widget.extend( basePrototype, {

      // TODO: remove support for widgetEventPrefix
      // always use the name + a colon as the prefix, e.g., draggable:start
      // don't prefix for widgets that aren't DOM-based
      widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
    }, proxiedPrototype, {
      constructor: constructor,
      namespace: namespace,
      widgetName: name,
      widgetFullName: fullName
    } );

    // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.
    if ( existingConstructor ) {
      $.each( existingConstructor._childConstructors, function( i, child ) {
        var childPrototype = child.prototype;

        // Redefine the child widget using the same prototype that was
        // originally used, but inherit from the new version of the base
        $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
          child._proto );
      } );

      // Remove the list of existing child constructors from the old constructor
      // so the old child constructors can be garbage collected
      delete existingConstructor._childConstructors;
    } else {
      base._childConstructors.push( constructor );
    }

    $.widget.bridge( name, constructor );

    return constructor;
  };

  $.widget.extend = function( target ) {
    var input = widgetSlice.call( arguments, 1 );
    var inputIndex = 0;
    var inputLength = input.length;
    var key;
    var value;

    for ( ; inputIndex < inputLength; inputIndex++ ) {
      for ( key in input[ inputIndex ] ) {
        value = input[ inputIndex ][ key ];
        if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

          // Clone objects
          if ( $.isPlainObject( value ) ) {
            target[ key ] = $.isPlainObject( target[ key ] ) ?
              $.widget.extend( {}, target[ key ], value ) :

              // Don't extend strings, arrays, etc. with objects
              $.widget.extend( {}, value );

            // Copy everything else by reference
          } else {
            target[ key ] = value;
          }
        }
      }
    }
    return target;
  };

  $.widget.bridge = function( name, object ) {
    var fullName = object.prototype.widgetFullName || name;
    $.fn[ name ] = function( options ) {
      var isMethodCall = typeof options === "string";
      var args = widgetSlice.call( arguments, 1 );
      var returnValue = this;

      if ( isMethodCall ) {

        // If this is an empty collection, we need to have the instance method
        // return undefined instead of the jQuery instance
        if ( !this.length && options === "instance" ) {
          returnValue = undefined;
        } else {
          this.each( function() {
            var methodValue;
            var instance = $.data( this, fullName );

            if ( options === "instance" ) {
              returnValue = instance;
              return false;
            }

            if ( !instance ) {
              return $.error( "cannot call methods on " + name +
                " prior to initialization; " +
                "attempted to call method '" + options + "'" );
            }

            if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
              return $.error( "no such method '" + options + "' for " + name +
                " widget instance" );
            }

            methodValue = instance[ options ].apply( instance, args );

            if ( methodValue !== instance && methodValue !== undefined ) {
              returnValue = methodValue && methodValue.jquery ?
                returnValue.pushStack( methodValue.get() ) :
                methodValue;
              return false;
            }
          } );
        }
      } else {

        // Allow multiple hashes to be passed on init
        if ( args.length ) {
          options = $.widget.extend.apply( null, [ options ].concat( args ) );
        }

        this.each( function() {
          var instance = $.data( this, fullName );
          if ( instance ) {
            instance.option( options || {} );
            if ( instance._init ) {
              instance._init();
            }
          } else {
            $.data( this, fullName, new object( options, this ) );
          }
        } );
      }

      return returnValue;
    };
  };

  $.Widget = function( /* options, element */ ) {};
  $.Widget._childConstructors = [];

  $.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",

    options: {
      classes: {},
      disabled: false,

      // Callbacks
      create: null
    },

    _createWidget: function( options, element ) {
      element = $( element || this.defaultElement || this )[ 0 ];
      this.element = $( element );
      this.uuid = widgetUuid++;
      this.eventNamespace = "." + this.widgetName + this.uuid;

      this.bindings = $();
      this.hoverable = $();
      this.focusable = $();
      this.classesElementLookup = {};

      if ( element !== this ) {
        $.data( element, this.widgetFullName, this );
        this._on( true, this.element, {
          remove: function( event ) {
            if ( event.target === element ) {
              this.destroy();
            }
          }
        } );
        this.document = $( element.style ?

          // Element within the document
          element.ownerDocument :

          // Element is window or document
          element.document || element );
        this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
      }

      this.options = $.widget.extend( {},
        this.options,
        this._getCreateOptions(),
        options );

      this._create();

      if ( this.options.disabled ) {
        this._setOptionDisabled( this.options.disabled );
      }

      this._trigger( "create", null, this._getCreateEventData() );
      this._init();
    },

    _getCreateOptions: function() {
      return {};
    },

    _getCreateEventData: $.noop,

    _create: $.noop,

    _init: $.noop,

    destroy: function() {
      var that = this;

      this._destroy();
      $.each( this.classesElementLookup, function( key, value ) {
        that._removeClass( value, key );
      } );

      // We can probably remove the unbind calls in 2.0
      // all event bindings should go through this._on()
      this.element
        .off( this.eventNamespace )
        .removeData( this.widgetFullName );
      this.widget()
        .off( this.eventNamespace )
        .removeAttr( "aria-disabled" );

      // Clean up events and states
      this.bindings.off( this.eventNamespace );
    },

    _destroy: $.noop,

    widget: function() {
      return this.element;
    },

    option: function( key, value ) {
      var options = key;
      var parts;
      var curOption;
      var i;

      if ( arguments.length === 0 ) {

        // Don't return a reference to the internal hash
        return $.widget.extend( {}, this.options );
      }

      if ( typeof key === "string" ) {

        // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
        options = {};
        parts = key.split( "." );
        key = parts.shift();
        if ( parts.length ) {
          curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
          for ( i = 0; i < parts.length - 1; i++ ) {
            curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
            curOption = curOption[ parts[ i ] ];
          }
          key = parts.pop();
          if ( arguments.length === 1 ) {
            return curOption[ key ] === undefined ? null : curOption[ key ];
          }
          curOption[ key ] = value;
        } else {
          if ( arguments.length === 1 ) {
            return this.options[ key ] === undefined ? null : this.options[ key ];
          }
          options[ key ] = value;
        }
      }

      this._setOptions( options );

      return this;
    },

    _setOptions: function( options ) {
      var key;

      for ( key in options ) {
        this._setOption( key, options[ key ] );
      }

      return this;
    },

    _setOption: function( key, value ) {
      if ( key === "classes" ) {
        this._setOptionClasses( value );
      }

      this.options[ key ] = value;

      if ( key === "disabled" ) {
        this._setOptionDisabled( value );
      }

      return this;
    },

    _setOptionClasses: function( value ) {
      var classKey, elements, currentElements;

      for ( classKey in value ) {
        currentElements = this.classesElementLookup[ classKey ];
        if ( value[ classKey ] === this.options.classes[ classKey ] ||
          !currentElements ||
          !currentElements.length ) {
          continue;
        }

        // We are doing this to create a new jQuery object because the _removeClass() call
        // on the next line is going to destroy the reference to the current elements being
        // tracked. We need to save a copy of this collection so that we can add the new classes
        // below.
        elements = $( currentElements.get() );
        this._removeClass( currentElements, classKey );

        // We don't use _addClass() here, because that uses this.options.classes
        // for generating the string of classes. We want to use the value passed in from
        // _setOption(), this is the new value of the classes option which was passed to
        // _setOption(). We pass this value directly to _classes().
        elements.addClass( this._classes( {
          element: elements,
          keys: classKey,
          classes: value,
          add: true
        } ) );
      }
    },

    _setOptionDisabled: function( value ) {
      this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

      // If the widget is becoming disabled, then nothing is interactive
      if ( value ) {
        this._removeClass( this.hoverable, null, "ui-state-hover" );
        this._removeClass( this.focusable, null, "ui-state-focus" );
      }
    },

    enable: function() {
      return this._setOptions( { disabled: false } );
    },

    disable: function() {
      return this._setOptions( { disabled: true } );
    },

    _classes: function( options ) {
      var full = [];
      var that = this;

      options = $.extend( {
        element: this.element,
        classes: this.options.classes || {}
      }, options );

      function processClassString( classes, checkOption ) {
        var current, i;
        for ( i = 0; i < classes.length; i++ ) {
          current = that.classesElementLookup[ classes[ i ] ] || $();
          if ( options.add ) {
            current = $( $.unique( current.get().concat( options.element.get() ) ) );
          } else {
            current = $( current.not( options.element ).get() );
          }
          that.classesElementLookup[ classes[ i ] ] = current;
          full.push( classes[ i ] );
          if ( checkOption && options.classes[ classes[ i ] ] ) {
            full.push( options.classes[ classes[ i ] ] );
          }
        }
      }

      this._on( options.element, {
        "remove": "_untrackClassesElement"
      } );

      if ( options.keys ) {
        processClassString( options.keys.match( /\S+/g ) || [], true );
      }
      if ( options.extra ) {
        processClassString( options.extra.match( /\S+/g ) || [] );
      }

      return full.join( " " );
    },

    _untrackClassesElement: function( event ) {
      var that = this;
      $.each( that.classesElementLookup, function( key, value ) {
        if ( $.inArray( event.target, value ) !== -1 ) {
          that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
        }
      } );
    },

    _removeClass: function( element, keys, extra ) {
      return this._toggleClass( element, keys, extra, false );
    },

    _addClass: function( element, keys, extra ) {
      return this._toggleClass( element, keys, extra, true );
    },

    _toggleClass: function( element, keys, extra, add ) {
      add = ( typeof add === "boolean" ) ? add : extra;
      var shift = ( typeof element === "string" || element === null ),
        options = {
          extra: shift ? keys : extra,
          keys: shift ? element : keys,
          element: shift ? this.element : element,
          add: add
        };
      options.element.toggleClass( this._classes( options ), add );
      return this;
    },

    _on: function( suppressDisabledCheck, element, handlers ) {
      var delegateElement;
      var instance = this;

      // No suppressDisabledCheck flag, shuffle arguments
      if ( typeof suppressDisabledCheck !== "boolean" ) {
        handlers = element;
        element = suppressDisabledCheck;
        suppressDisabledCheck = false;
      }

      // No element argument, shuffle and use this.element
      if ( !handlers ) {
        handlers = element;
        element = this.element;
        delegateElement = this.widget();
      } else {
        element = delegateElement = $( element );
        this.bindings = this.bindings.add( element );
      }

      $.each( handlers, function( event, handler ) {
        function handlerProxy() {

          // Allow widgets to customize the disabled handling
          // - disabled as an array instead of boolean
          // - disabled class as method for disabling individual parts
          if ( !suppressDisabledCheck &&
            ( instance.options.disabled === true ||
              $( this ).hasClass( "ui-state-disabled" ) ) ) {
            return;
          }
          return ( typeof handler === "string" ? instance[ handler ] : handler )
            .apply( instance, arguments );
        }

        // Copy the guid so direct unbinding works
        if ( typeof handler !== "string" ) {
          handlerProxy.guid = handler.guid =
            handler.guid || handlerProxy.guid || $.guid++;
        }

        var match = event.match( /^([\w:-]*)\s*(.*)$/ );
        var eventName = match[ 1 ] + instance.eventNamespace;
        var selector = match[ 2 ];

        if ( selector ) {
          delegateElement.on( eventName, selector, handlerProxy );
        } else {
          element.on( eventName, handlerProxy );
        }
      } );
    },

    _off: function( element, eventName ) {
      eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
        this.eventNamespace;
      element.off( eventName ).off( eventName );

      // Clear the stack to avoid memory leaks (#10056)
      this.bindings = $( this.bindings.not( element ).get() );
      this.focusable = $( this.focusable.not( element ).get() );
      this.hoverable = $( this.hoverable.not( element ).get() );
    },

    _delay: function( handler, delay ) {
      function handlerProxy() {
        return ( typeof handler === "string" ? instance[ handler ] : handler )
          .apply( instance, arguments );
      }
      var instance = this;
      return setTimeout( handlerProxy, delay || 0 );
    },

    _hoverable: function( element ) {
      this.hoverable = this.hoverable.add( element );
      this._on( element, {
        mouseenter: function( event ) {
          this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
        },
        mouseleave: function( event ) {
          this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
        }
      } );
    },

    _focusable: function( element ) {
      this.focusable = this.focusable.add( element );
      this._on( element, {
        focusin: function( event ) {
          this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
        },
        focusout: function( event ) {
          this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
        }
      } );
    },

    _trigger: function( type, event, data ) {
      var prop, orig;
      var callback = this.options[ type ];

      data = data || {};
      event = $.Event( event );
      event.type = ( type === this.widgetEventPrefix ?
        type :
        this.widgetEventPrefix + type ).toLowerCase();

      // The original event may come from any element
      // so we need to reset the target on the new event
      event.target = this.element[ 0 ];

      // Copy original event properties over to the new event
      orig = event.originalEvent;
      if ( orig ) {
        for ( prop in orig ) {
          if ( !( prop in event ) ) {
            event[ prop ] = orig[ prop ];
          }
        }
      }

      this.element.trigger( event, data );
      return !( $.isFunction( callback ) &&
        callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
        event.isDefaultPrevented() );
    }
  };

  $.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
    $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
      if ( typeof options === "string" ) {
        options = { effect: options };
      }

      var hasOptions;
      var effectName = !options ?
        method :
        options === true || typeof options === "number" ?
        defaultEffect :
        options.effect || defaultEffect;

      options = options || {};
      if ( typeof options === "number" ) {
        options = { duration: options };
      }

      hasOptions = !$.isEmptyObject( options );
      options.complete = callback;

      if ( options.delay ) {
        element.delay( options.delay );
      }

      if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
        element[ method ]( options );
      } else if ( effectName !== method && element[ effectName ] ) {
        element[ effectName ]( options.duration, options.easing, callback );
      } else {
        element.queue( function( next ) {
          $( this )[ method ]();
          if ( callback ) {
            callback.call( element[ 0 ] );
          }
          next();
        } );
      }
    };
  } );

  var widget = $.widget;




}));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmx1ZWltcC1maWxlLXVwbG9hZC9qcy9qcXVlcnkuZmlsZXVwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmx1ZWltcC1maWxlLXVwbG9hZC9qcy9qcXVlcnkuaWZyYW1lLXRyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmx1ZWltcC1maWxlLXVwbG9hZC9qcy92ZW5kb3IvanF1ZXJ5LnVpLndpZGdldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBLFFBQVEsSUFBMEM7QUFDbEQ7QUFDQSxRQUFRLGlDQUFPO0FBQ2YsWUFBWSx3RUFBUTtBQUNwQixZQUFZLGtIQUFxQjtBQUNqQyxTQUFTLG9DQUFFLE9BQU87QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDbkIsS0FBSyxNQUFNLEVBU047QUFDTCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGtCQUFrQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Uzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGtCQUFrQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFD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QUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsMEJBQTBCO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLGtDQUFrQztBQUM3QztBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHOztBQUVIOzs7OztBQUtBLENBQUMiLCJmaWxlIjoidmVuZG9yc35mb3Jtfm1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIGpRdWVyeSBGaWxlIFVwbG9hZCBQbHVnaW5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL2pRdWVyeS1GaWxlLVVwbG9hZFxuICpcbiAqIENvcHlyaWdodCAyMDEwLCBTZWJhc3RpYW4gVHNjaGFuXG4gKiBodHRwczovL2JsdWVpbXAubmV0XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlOlxuICogaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcbiAqL1xuXG4vKiBqc2hpbnQgbm9tZW46ZmFsc2UgKi9cbi8qIGdsb2JhbCBkZWZpbmUsIHJlcXVpcmUsIHdpbmRvdywgZG9jdW1lbnQsIGxvY2F0aW9uLCBCbG9iLCBGb3JtRGF0YSAqL1xuXG47KGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgLy8gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIEFNRCBtb2R1bGU6XG4gICAgICAgIGRlZmluZShbXG4gICAgICAgICAgICAnanF1ZXJ5JyxcbiAgICAgICAgICAgICdqcXVlcnktdWkvdWkvd2lkZ2V0J1xuICAgICAgICBdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBOb2RlL0NvbW1vbkpTOlxuICAgICAgICBmYWN0b3J5KFxuICAgICAgICAgICAgcmVxdWlyZSgnanF1ZXJ5JyksXG4gICAgICAgICAgICByZXF1aXJlKCcuL3ZlbmRvci9qcXVlcnkudWkud2lkZ2V0JylcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHM6XG4gICAgICAgIGZhY3Rvcnkod2luZG93LmpRdWVyeSk7XG4gICAgfVxufShmdW5jdGlvbiAoJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8vIERldGVjdCBmaWxlIGlucHV0IHN1cHBvcnQsIGJhc2VkIG9uXG4gICAgLy8gaHR0cDovL3ZpbGphbWlzLmNvbS9ibG9nLzIwMTIvZmlsZS11cGxvYWQtc3VwcG9ydC1vbi1tb2JpbGUvXG4gICAgJC5zdXBwb3J0LmZpbGVJbnB1dCA9ICEobmV3IFJlZ0V4cChcbiAgICAgICAgLy8gSGFuZGxlIGRldmljZXMgd2hpY2ggZ2l2ZSBmYWxzZSBwb3NpdGl2ZXMgZm9yIHRoZSBmZWF0dXJlIGRldGVjdGlvbjpcbiAgICAgICAgJyhBbmRyb2lkICgxXFxcXC5bMDE1Nl18MlxcXFwuWzAxXSkpJyArXG4gICAgICAgICAgICAnfChXaW5kb3dzIFBob25lIChPUyA3fDhcXFxcLjApKXwoWEJMV1ApfChadW5lV1ApfChXUERlc2t0b3ApJyArXG4gICAgICAgICAgICAnfCh3KGViKT9PU0Jyb3dzZXIpfCh3ZWJPUyknICtcbiAgICAgICAgICAgICd8KEtpbmRsZS8oMVxcXFwuMHwyXFxcXC5bMDVdfDNcXFxcLjApKSdcbiAgICApLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIHx8XG4gICAgICAgIC8vIEZlYXR1cmUgZGV0ZWN0aW9uIGZvciBhbGwgb3RoZXIgZGV2aWNlczpcbiAgICAgICAgJCgnPGlucHV0IHR5cGU9XCJmaWxlXCIvPicpLnByb3AoJ2Rpc2FibGVkJykpO1xuXG4gICAgLy8gVGhlIEZpbGVSZWFkZXIgQVBJIGlzIG5vdCBhY3R1YWxseSB1c2VkLCBidXQgd29ya3MgYXMgZmVhdHVyZSBkZXRlY3Rpb24sXG4gICAgLy8gYXMgc29tZSBTYWZhcmkgdmVyc2lvbnMgKDU/KSBzdXBwb3J0IFhIUiBmaWxlIHVwbG9hZHMgdmlhIHRoZSBGb3JtRGF0YSBBUEksXG4gICAgLy8gYnV0IG5vdCBub24tbXVsdGlwYXJ0IFhIUiBmaWxlIHVwbG9hZHMuXG4gICAgLy8gd2luZG93LlhNTEh0dHBSZXF1ZXN0VXBsb2FkIGlzIG5vdCBhdmFpbGFibGUgb24gSUUxMCwgc28gd2UgY2hlY2sgZm9yXG4gICAgLy8gd2luZG93LlByb2dyZXNzRXZlbnQgaW5zdGVhZCB0byBkZXRlY3QgWEhSMiBmaWxlIHVwbG9hZCBjYXBhYmlsaXR5OlxuICAgICQuc3VwcG9ydC54aHJGaWxlVXBsb2FkID0gISEod2luZG93LlByb2dyZXNzRXZlbnQgJiYgd2luZG93LkZpbGVSZWFkZXIpO1xuICAgICQuc3VwcG9ydC54aHJGb3JtRGF0YUZpbGVVcGxvYWQgPSAhIXdpbmRvdy5Gb3JtRGF0YTtcblxuICAgIC8vIERldGVjdCBzdXBwb3J0IGZvciBCbG9iIHNsaWNpbmcgKHJlcXVpcmVkIGZvciBjaHVua2VkIHVwbG9hZHMpOlxuICAgICQuc3VwcG9ydC5ibG9iU2xpY2UgPSB3aW5kb3cuQmxvYiAmJiAoQmxvYi5wcm90b3R5cGUuc2xpY2UgfHxcbiAgICAgICAgQmxvYi5wcm90b3R5cGUud2Via2l0U2xpY2UgfHwgQmxvYi5wcm90b3R5cGUubW96U2xpY2UpO1xuXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBkcmFnIGhhbmRsZXJzIGZvciBkcmFnb3Zlci9kcmFnZW50ZXIvZHJhZ2xlYXZlOlxuICAgIGZ1bmN0aW9uIGdldERyYWdIYW5kbGVyKHR5cGUpIHtcbiAgICAgICAgdmFyIGlzRHJhZ092ZXIgPSB0eXBlID09PSAnZHJhZ292ZXInO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyID0gZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC5kYXRhVHJhbnNmZXI7XG4gICAgICAgICAgICB2YXIgZGF0YVRyYW5zZmVyID0gZS5kYXRhVHJhbnNmZXI7XG4gICAgICAgICAgICBpZiAoZGF0YVRyYW5zZmVyICYmICQuaW5BcnJheSgnRmlsZXMnLCBkYXRhVHJhbnNmZXIudHlwZXMpICE9PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmlnZ2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICQuRXZlbnQodHlwZSwge2RlbGVnYXRlZEV2ZW50OiBlfSlcbiAgICAgICAgICAgICAgICAgICAgKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRHJhZ092ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIFRoZSBmaWxldXBsb2FkIHdpZGdldCBsaXN0ZW5zIGZvciBjaGFuZ2UgZXZlbnRzIG9uIGZpbGUgaW5wdXQgZmllbGRzIGRlZmluZWRcbiAgICAvLyB2aWEgZmlsZUlucHV0IHNldHRpbmcgYW5kIHBhc3RlIG9yIGRyb3AgZXZlbnRzIG9mIHRoZSBnaXZlbiBkcm9wWm9uZS5cbiAgICAvLyBJbiBhZGRpdGlvbiB0byB0aGUgZGVmYXVsdCBqUXVlcnkgV2lkZ2V0IG1ldGhvZHMsIHRoZSBmaWxldXBsb2FkIHdpZGdldFxuICAgIC8vIGV4cG9zZXMgdGhlIFwiYWRkXCIgYW5kIFwic2VuZFwiIG1ldGhvZHMsIHRvIGFkZCBvciBkaXJlY3RseSBzZW5kIGZpbGVzIHVzaW5nXG4gICAgLy8gdGhlIGZpbGV1cGxvYWQgQVBJLlxuICAgIC8vIEJ5IGRlZmF1bHQsIGZpbGVzIGFkZGVkIHZpYSBmaWxlIGlucHV0IHNlbGVjdGlvbiwgcGFzdGUsIGRyYWcgJiBkcm9wIG9yXG4gICAgLy8gXCJhZGRcIiBtZXRob2QgYXJlIHVwbG9hZGVkIGltbWVkaWF0ZWx5LCBidXQgaXQgaXMgcG9zc2libGUgdG8gb3ZlcnJpZGVcbiAgICAvLyB0aGUgXCJhZGRcIiBjYWxsYmFjayBvcHRpb24gdG8gcXVldWUgZmlsZSB1cGxvYWRzLlxuICAgICQud2lkZ2V0KCdibHVlaW1wLmZpbGV1cGxvYWQnLCB7XG5cbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgLy8gVGhlIGRyb3AgdGFyZ2V0IGVsZW1lbnQocyksIGJ5IHRoZSBkZWZhdWx0IHRoZSBjb21wbGV0ZSBkb2N1bWVudC5cbiAgICAgICAgICAgIC8vIFNldCB0byBudWxsIHRvIGRpc2FibGUgZHJhZyAmIGRyb3Agc3VwcG9ydDpcbiAgICAgICAgICAgIGRyb3Bab25lOiAkKGRvY3VtZW50KSxcbiAgICAgICAgICAgIC8vIFRoZSBwYXN0ZSB0YXJnZXQgZWxlbWVudChzKSwgYnkgdGhlIGRlZmF1bHQgdW5kZWZpbmVkLlxuICAgICAgICAgICAgLy8gU2V0IHRvIGEgRE9NIG5vZGUgb3IgalF1ZXJ5IG9iamVjdCB0byBlbmFibGUgZmlsZSBwYXN0aW5nOlxuICAgICAgICAgICAgcGFzdGVab25lOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAvLyBUaGUgZmlsZSBpbnB1dCBmaWVsZChzKSwgdGhhdCBhcmUgbGlzdGVuZWQgdG8gZm9yIGNoYW5nZSBldmVudHMuXG4gICAgICAgICAgICAvLyBJZiB1bmRlZmluZWQsIGl0IGlzIHNldCB0byB0aGUgZmlsZSBpbnB1dCBmaWVsZHMgaW5zaWRlXG4gICAgICAgICAgICAvLyBvZiB0aGUgd2lkZ2V0IGVsZW1lbnQgb24gcGx1Z2luIGluaXRpYWxpemF0aW9uLlxuICAgICAgICAgICAgLy8gU2V0IHRvIG51bGwgdG8gZGlzYWJsZSB0aGUgY2hhbmdlIGxpc3RlbmVyLlxuICAgICAgICAgICAgZmlsZUlucHV0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAvLyBCeSBkZWZhdWx0LCB0aGUgZmlsZSBpbnB1dCBmaWVsZCBpcyByZXBsYWNlZCB3aXRoIGEgY2xvbmUgYWZ0ZXJcbiAgICAgICAgICAgIC8vIGVhY2ggaW5wdXQgZmllbGQgY2hhbmdlIGV2ZW50LiBUaGlzIGlzIHJlcXVpcmVkIGZvciBpZnJhbWUgdHJhbnNwb3J0XG4gICAgICAgICAgICAvLyBxdWV1ZXMgYW5kIGFsbG93cyBjaGFuZ2UgZXZlbnRzIHRvIGJlIGZpcmVkIGZvciB0aGUgc2FtZSBmaWxlXG4gICAgICAgICAgICAvLyBzZWxlY3Rpb24sIGJ1dCBjYW4gYmUgZGlzYWJsZWQgYnkgc2V0dGluZyB0aGUgZm9sbG93aW5nIG9wdGlvbiB0byBmYWxzZTpcbiAgICAgICAgICAgIHJlcGxhY2VGaWxlSW5wdXQ6IHRydWUsXG4gICAgICAgICAgICAvLyBUaGUgcGFyYW1ldGVyIG5hbWUgZm9yIHRoZSBmaWxlIGZvcm0gZGF0YSAodGhlIHJlcXVlc3QgYXJndW1lbnQgbmFtZSkuXG4gICAgICAgICAgICAvLyBJZiB1bmRlZmluZWQgb3IgZW1wdHksIHRoZSBuYW1lIHByb3BlcnR5IG9mIHRoZSBmaWxlIGlucHV0IGZpZWxkIGlzXG4gICAgICAgICAgICAvLyB1c2VkLCBvciBcImZpbGVzW11cIiBpZiB0aGUgZmlsZSBpbnB1dCBuYW1lIHByb3BlcnR5IGlzIGFsc28gZW1wdHksXG4gICAgICAgICAgICAvLyBjYW4gYmUgYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3RyaW5nczpcbiAgICAgICAgICAgIHBhcmFtTmFtZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCwgZWFjaCBmaWxlIG9mIGEgc2VsZWN0aW9uIGlzIHVwbG9hZGVkIHVzaW5nIGFuIGluZGl2aWR1YWxcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgZm9yIFhIUiB0eXBlIHVwbG9hZHMuIFNldCB0byBmYWxzZSB0byB1cGxvYWQgZmlsZVxuICAgICAgICAgICAgLy8gc2VsZWN0aW9ucyBpbiBvbmUgcmVxdWVzdCBlYWNoOlxuICAgICAgICAgICAgc2luZ2xlRmlsZVVwbG9hZHM6IHRydWUsXG4gICAgICAgICAgICAvLyBUbyBsaW1pdCB0aGUgbnVtYmVyIG9mIGZpbGVzIHVwbG9hZGVkIHdpdGggb25lIFhIUiByZXF1ZXN0LFxuICAgICAgICAgICAgLy8gc2V0IHRoZSBmb2xsb3dpbmcgb3B0aW9uIHRvIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIDA6XG4gICAgICAgICAgICBsaW1pdE11bHRpRmlsZVVwbG9hZHM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgb3B0aW9uIGxpbWl0cyB0aGUgbnVtYmVyIG9mIGZpbGVzIHVwbG9hZGVkIHdpdGggb25lXG4gICAgICAgICAgICAvLyBYSFIgcmVxdWVzdCB0byBrZWVwIHRoZSByZXF1ZXN0IHNpemUgdW5kZXIgb3IgZXF1YWwgdG8gdGhlIGRlZmluZWRcbiAgICAgICAgICAgIC8vIGxpbWl0IGluIGJ5dGVzOlxuICAgICAgICAgICAgbGltaXRNdWx0aUZpbGVVcGxvYWRTaXplOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAvLyBNdWx0aXBhcnQgZmlsZSB1cGxvYWRzIGFkZCBhIG51bWJlciBvZiBieXRlcyB0byBlYWNoIHVwbG9hZGVkIGZpbGUsXG4gICAgICAgICAgICAvLyB0aGVyZWZvcmUgdGhlIGZvbGxvd2luZyBvcHRpb24gYWRkcyBhbiBvdmVyaGVhZCBmb3IgZWFjaCBmaWxlIHVzZWRcbiAgICAgICAgICAgIC8vIGluIHRoZSBsaW1pdE11bHRpRmlsZVVwbG9hZFNpemUgY29uZmlndXJhdGlvbjpcbiAgICAgICAgICAgIGxpbWl0TXVsdGlGaWxlVXBsb2FkU2l6ZU92ZXJoZWFkOiA1MTIsXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGZvbGxvd2luZyBvcHRpb24gdG8gdHJ1ZSB0byBpc3N1ZSBhbGwgZmlsZSB1cGxvYWQgcmVxdWVzdHNcbiAgICAgICAgICAgIC8vIGluIGEgc2VxdWVudGlhbCBvcmRlcjpcbiAgICAgICAgICAgIHNlcXVlbnRpYWxVcGxvYWRzOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIFRvIGxpbWl0IHRoZSBudW1iZXIgb2YgY29uY3VycmVudCB1cGxvYWRzLFxuICAgICAgICAgICAgLy8gc2V0IHRoZSBmb2xsb3dpbmcgb3B0aW9uIHRvIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIDA6XG4gICAgICAgICAgICBsaW1pdENvbmN1cnJlbnRVcGxvYWRzOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGZvbGxvd2luZyBvcHRpb24gdG8gdHJ1ZSB0byBmb3JjZSBpZnJhbWUgdHJhbnNwb3J0IHVwbG9hZHM6XG4gICAgICAgICAgICBmb3JjZUlmcmFtZVRyYW5zcG9ydDogZmFsc2UsXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGZvbGxvd2luZyBvcHRpb24gdG8gdGhlIGxvY2F0aW9uIG9mIGEgcmVkaXJlY3QgdXJsIG9uIHRoZVxuICAgICAgICAgICAgLy8gb3JpZ2luIHNlcnZlciwgZm9yIGNyb3NzLWRvbWFpbiBpZnJhbWUgdHJhbnNwb3J0IHVwbG9hZHM6XG4gICAgICAgICAgICByZWRpcmVjdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgLy8gVGhlIHBhcmFtZXRlciBuYW1lIGZvciB0aGUgcmVkaXJlY3QgdXJsLCBzZW50IGFzIHBhcnQgb2YgdGhlIGZvcm1cbiAgICAgICAgICAgIC8vIGRhdGEgYW5kIHNldCB0byAncmVkaXJlY3QnIGlmIHRoaXMgb3B0aW9uIGlzIGVtcHR5OlxuICAgICAgICAgICAgcmVkaXJlY3RQYXJhbU5hbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8vIFNldCB0aGUgZm9sbG93aW5nIG9wdGlvbiB0byB0aGUgbG9jYXRpb24gb2YgYSBwb3N0TWVzc2FnZSB3aW5kb3csXG4gICAgICAgICAgICAvLyB0byBlbmFibGUgcG9zdE1lc3NhZ2UgdHJhbnNwb3J0IHVwbG9hZHM6XG4gICAgICAgICAgICBwb3N0TWVzc2FnZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCwgWEhSIGZpbGUgdXBsb2FkcyBhcmUgc2VudCBhcyBtdWx0aXBhcnQvZm9ybS1kYXRhLlxuICAgICAgICAgICAgLy8gVGhlIGlmcmFtZSB0cmFuc3BvcnQgaXMgYWx3YXlzIHVzaW5nIG11bHRpcGFydC9mb3JtLWRhdGEuXG4gICAgICAgICAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZW5hYmxlIG5vbi1tdWx0aXBhcnQgWEhSIHVwbG9hZHM6XG4gICAgICAgICAgICBtdWx0aXBhcnQ6IHRydWUsXG4gICAgICAgICAgICAvLyBUbyB1cGxvYWQgbGFyZ2UgZmlsZXMgaW4gc21hbGxlciBjaHVua3MsIHNldCB0aGUgZm9sbG93aW5nIG9wdGlvblxuICAgICAgICAgICAgLy8gdG8gYSBwcmVmZXJyZWQgbWF4aW11bSBjaHVuayBzaXplLiBJZiBzZXQgdG8gMCwgbnVsbCBvciB1bmRlZmluZWQsXG4gICAgICAgICAgICAvLyBvciB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSByZXF1aXJlZCBCbG9iIEFQSSwgZmlsZXMgd2lsbFxuICAgICAgICAgICAgLy8gYmUgdXBsb2FkZWQgYXMgYSB3aG9sZS5cbiAgICAgICAgICAgIG1heENodW5rU2l6ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgLy8gV2hlbiBhIG5vbi1tdWx0aXBhcnQgdXBsb2FkIG9yIGEgY2h1bmtlZCBtdWx0aXBhcnQgdXBsb2FkIGhhcyBiZWVuXG4gICAgICAgICAgICAvLyBhYm9ydGVkLCB0aGlzIG9wdGlvbiBjYW4gYmUgdXNlZCB0byByZXN1bWUgdGhlIHVwbG9hZCBieSBzZXR0aW5nXG4gICAgICAgICAgICAvLyBpdCB0byB0aGUgc2l6ZSBvZiB0aGUgYWxyZWFkeSB1cGxvYWRlZCBieXRlcy4gVGhpcyBvcHRpb24gaXMgbW9zdFxuICAgICAgICAgICAgLy8gdXNlZnVsIHdoZW4gbW9kaWZ5aW5nIHRoZSBvcHRpb25zIG9iamVjdCBpbnNpZGUgb2YgdGhlIFwiYWRkXCIgb3JcbiAgICAgICAgICAgIC8vIFwic2VuZFwiIGNhbGxiYWNrcywgYXMgdGhlIG9wdGlvbnMgYXJlIGNsb25lZCBmb3IgZWFjaCBmaWxlIHVwbG9hZC5cbiAgICAgICAgICAgIHVwbG9hZGVkQnl0ZXM6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIC8vIEJ5IGRlZmF1bHQsIGZhaWxlZCAoYWJvcnQgb3IgZXJyb3IpIGZpbGUgdXBsb2FkcyBhcmUgcmVtb3ZlZCBmcm9tIHRoZVxuICAgICAgICAgICAgLy8gZ2xvYmFsIHByb2dyZXNzIGNhbGN1bGF0aW9uLiBTZXQgdGhlIGZvbGxvd2luZyBvcHRpb24gdG8gZmFsc2UgdG9cbiAgICAgICAgICAgIC8vIHByZXZlbnQgcmVjYWxjdWxhdGluZyB0aGUgZ2xvYmFsIHByb2dyZXNzIGRhdGE6XG4gICAgICAgICAgICByZWNhbGN1bGF0ZVByb2dyZXNzOiB0cnVlLFxuICAgICAgICAgICAgLy8gSW50ZXJ2YWwgaW4gbWlsbGlzZWNvbmRzIHRvIGNhbGN1bGF0ZSBhbmQgdHJpZ2dlciBwcm9ncmVzcyBldmVudHM6XG4gICAgICAgICAgICBwcm9ncmVzc0ludGVydmFsOiAxMDAsXG4gICAgICAgICAgICAvLyBJbnRlcnZhbCBpbiBtaWxsaXNlY29uZHMgdG8gY2FsY3VsYXRlIHByb2dyZXNzIGJpdHJhdGU6XG4gICAgICAgICAgICBiaXRyYXRlSW50ZXJ2YWw6IDUwMCxcbiAgICAgICAgICAgIC8vIEJ5IGRlZmF1bHQsIHVwbG9hZHMgYXJlIHN0YXJ0ZWQgYXV0b21hdGljYWxseSB3aGVuIGFkZGluZyBmaWxlczpcbiAgICAgICAgICAgIGF1dG9VcGxvYWQ6IHRydWUsXG4gICAgICAgICAgICAvLyBCeSBkZWZhdWx0LCBkdXBsaWNhdGUgZmlsZSBuYW1lcyBhcmUgZXhwZWN0ZWQgdG8gYmUgaGFuZGxlZCBvblxuICAgICAgICAgICAgLy8gdGhlIHNlcnZlci1zaWRlLiBJZiB0aGlzIGlzIG5vdCBwb3NzaWJsZSAoZS5nLiB3aGVuIHVwbG9hZGluZ1xuICAgICAgICAgICAgLy8gZmlsZXMgZGlyZWN0bHkgdG8gQW1hem9uIFMzKSwgdGhlIGZvbGxvd2luZyBvcHRpb24gY2FuIGJlIHNldCB0b1xuICAgICAgICAgICAgLy8gYW4gZW1wdHkgb2JqZWN0IG9yIGFuIG9iamVjdCBtYXBwaW5nIGV4aXN0aW5nIGZpbGVuYW1lcywgZS5nLjpcbiAgICAgICAgICAgIC8vIHsgXCJpbWFnZS5qcGdcIjogdHJ1ZSwgXCJpbWFnZSAoMSkuanBnXCI6IHRydWUgfVxuICAgICAgICAgICAgLy8gSWYgaXQgaXMgc2V0LCBhbGwgZmlsZXMgd2lsbCBiZSB1cGxvYWRlZCB3aXRoIHVuaXF1ZSBmaWxlbmFtZXMsXG4gICAgICAgICAgICAvLyBhZGRpbmcgaW5jcmVhc2luZyBudW1iZXIgc3VmZml4ZXMgaWYgbmVjZXNzYXJ5LCBlLmcuOlxuICAgICAgICAgICAgLy8gXCJpbWFnZSAoMikuanBnXCJcbiAgICAgICAgICAgIHVuaXF1ZUZpbGVuYW1lczogdW5kZWZpbmVkLFxuXG4gICAgICAgICAgICAvLyBFcnJvciBhbmQgaW5mbyBtZXNzYWdlczpcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgdXBsb2FkZWRCeXRlczogJ1VwbG9hZGVkIGJ5dGVzIGV4Y2VlZCBmaWxlIHNpemUnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBUcmFuc2xhdGlvbiBmdW5jdGlvbiwgZ2V0cyB0aGUgbWVzc2FnZSBrZXkgdG8gYmUgdHJhbnNsYXRlZFxuICAgICAgICAgICAgLy8gYW5kIGFuIG9iamVjdCB3aXRoIGNvbnRleHQgc3BlY2lmaWMgZGF0YSBhcyBhcmd1bWVudHM6XG4gICAgICAgICAgICBpMThuOiBmdW5jdGlvbiAobWVzc2FnZSwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VzW21lc3NhZ2VdIHx8IG1lc3NhZ2UudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAkLmVhY2goY29udGV4dCwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoJ3snICsga2V5ICsgJ30nLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIEFkZGl0aW9uYWwgZm9ybSBkYXRhIHRvIGJlIHNlbnQgYWxvbmcgd2l0aCB0aGUgZmlsZSB1cGxvYWRzIGNhbiBiZSBzZXRcbiAgICAgICAgICAgIC8vIHVzaW5nIHRoaXMgb3B0aW9uLCB3aGljaCBhY2NlcHRzIGFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCBuYW1lIGFuZFxuICAgICAgICAgICAgLy8gdmFsdWUgcHJvcGVydGllcywgYSBmdW5jdGlvbiByZXR1cm5pbmcgc3VjaCBhbiBhcnJheSwgYSBGb3JtRGF0YVxuICAgICAgICAgICAgLy8gb2JqZWN0IChmb3IgWEhSIGZpbGUgdXBsb2FkcyksIG9yIGEgc2ltcGxlIG9iamVjdC5cbiAgICAgICAgICAgIC8vIFRoZSBmb3JtIG9mIHRoZSBmaXJzdCBmaWxlSW5wdXQgaXMgZ2l2ZW4gYXMgcGFyYW1ldGVyIHRvIHRoZSBmdW5jdGlvbjpcbiAgICAgICAgICAgIGZvcm1EYXRhOiBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBUaGUgYWRkIGNhbGxiYWNrIGlzIGludm9rZWQgYXMgc29vbiBhcyBmaWxlcyBhcmUgYWRkZWQgdG8gdGhlIGZpbGV1cGxvYWRcbiAgICAgICAgICAgIC8vIHdpZGdldCAodmlhIGZpbGUgaW5wdXQgc2VsZWN0aW9uLCBkcmFnICYgZHJvcCwgcGFzdGUgb3IgYWRkIEFQSSBjYWxsKS5cbiAgICAgICAgICAgIC8vIElmIHRoZSBzaW5nbGVGaWxlVXBsb2FkcyBvcHRpb24gaXMgZW5hYmxlZCwgdGhpcyBjYWxsYmFjayB3aWxsIGJlXG4gICAgICAgICAgICAvLyBjYWxsZWQgb25jZSBmb3IgZWFjaCBmaWxlIGluIHRoZSBzZWxlY3Rpb24gZm9yIFhIUiBmaWxlIHVwbG9hZHMsIGVsc2VcbiAgICAgICAgICAgIC8vIG9uY2UgZm9yIGVhY2ggZmlsZSBzZWxlY3Rpb24uXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gVGhlIHVwbG9hZCBzdGFydHMgd2hlbiB0aGUgc3VibWl0IG1ldGhvZCBpcyBpbnZva2VkIG9uIHRoZSBkYXRhIHBhcmFtZXRlci5cbiAgICAgICAgICAgIC8vIFRoZSBkYXRhIG9iamVjdCBjb250YWlucyBhIGZpbGVzIHByb3BlcnR5IGhvbGRpbmcgdGhlIGFkZGVkIGZpbGVzXG4gICAgICAgICAgICAvLyBhbmQgYWxsb3dzIHlvdSB0byBvdmVycmlkZSBwbHVnaW4gb3B0aW9ucyBhcyB3ZWxsIGFzIGRlZmluZSBhamF4IHNldHRpbmdzLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIExpc3RlbmVycyBmb3IgdGhpcyBjYWxsYmFjayBjYW4gYWxzbyBiZSBib3VuZCB0aGUgZm9sbG93aW5nIHdheTpcbiAgICAgICAgICAgIC8vIC5iaW5kKCdmaWxldXBsb2FkYWRkJywgZnVuYyk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gZGF0YS5zdWJtaXQoKSByZXR1cm5zIGEgUHJvbWlzZSBvYmplY3QgYW5kIGFsbG93cyB0byBhdHRhY2ggYWRkaXRpb25hbFxuICAgICAgICAgICAgLy8gaGFuZGxlcnMgdXNpbmcgalF1ZXJ5J3MgRGVmZXJyZWQgY2FsbGJhY2tzOlxuICAgICAgICAgICAgLy8gZGF0YS5zdWJtaXQoKS5kb25lKGZ1bmMpLmZhaWwoZnVuYykuYWx3YXlzKGZ1bmMpO1xuICAgICAgICAgICAgYWRkOiBmdW5jdGlvbiAoZSwgZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYXV0b1VwbG9hZCB8fCAoZGF0YS5hdXRvVXBsb2FkICE9PSBmYWxzZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maWxldXBsb2FkKCdvcHRpb24nLCAnYXV0b1VwbG9hZCcpKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnByb2Nlc3MoKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIE90aGVyIGNhbGxiYWNrczpcblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIHRoZSBzdWJtaXQgZXZlbnQgb2YgZWFjaCBmaWxlIHVwbG9hZDpcbiAgICAgICAgICAgIC8vIHN1Ym1pdDogZnVuY3Rpb24gKGUsIGRhdGEpIHt9LCAvLyAuYmluZCgnZmlsZXVwbG9hZHN1Ym1pdCcsIGZ1bmMpO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmb3IgdGhlIHN0YXJ0IG9mIGVhY2ggZmlsZSB1cGxvYWQgcmVxdWVzdDpcbiAgICAgICAgICAgIC8vIHNlbmQ6IGZ1bmN0aW9uIChlLCBkYXRhKSB7fSwgLy8gLmJpbmQoJ2ZpbGV1cGxvYWRzZW5kJywgZnVuYyk7XG5cbiAgICAgICAgICAgIC8vIENhbGxiYWNrIGZvciBzdWNjZXNzZnVsIHVwbG9hZHM6XG4gICAgICAgICAgICAvLyBkb25lOiBmdW5jdGlvbiAoZSwgZGF0YSkge30sIC8vIC5iaW5kKCdmaWxldXBsb2FkZG9uZScsIGZ1bmMpO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmb3IgZmFpbGVkIChhYm9ydCBvciBlcnJvcikgdXBsb2FkczpcbiAgICAgICAgICAgIC8vIGZhaWw6IGZ1bmN0aW9uIChlLCBkYXRhKSB7fSwgLy8gLmJpbmQoJ2ZpbGV1cGxvYWRmYWlsJywgZnVuYyk7XG5cbiAgICAgICAgICAgIC8vIENhbGxiYWNrIGZvciBjb21wbGV0ZWQgKHN1Y2Nlc3MsIGFib3J0IG9yIGVycm9yKSByZXF1ZXN0czpcbiAgICAgICAgICAgIC8vIGFsd2F5czogZnVuY3Rpb24gKGUsIGRhdGEpIHt9LCAvLyAuYmluZCgnZmlsZXVwbG9hZGFsd2F5cycsIGZ1bmMpO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmb3IgdXBsb2FkIHByb2dyZXNzIGV2ZW50czpcbiAgICAgICAgICAgIC8vIHByb2dyZXNzOiBmdW5jdGlvbiAoZSwgZGF0YSkge30sIC8vIC5iaW5kKCdmaWxldXBsb2FkcHJvZ3Jlc3MnLCBmdW5jKTtcblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIGdsb2JhbCB1cGxvYWQgcHJvZ3Jlc3MgZXZlbnRzOlxuICAgICAgICAgICAgLy8gcHJvZ3Jlc3NhbGw6IGZ1bmN0aW9uIChlLCBkYXRhKSB7fSwgLy8gLmJpbmQoJ2ZpbGV1cGxvYWRwcm9ncmVzc2FsbCcsIGZ1bmMpO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmb3IgdXBsb2FkcyBzdGFydCwgZXF1aXZhbGVudCB0byB0aGUgZ2xvYmFsIGFqYXhTdGFydCBldmVudDpcbiAgICAgICAgICAgIC8vIHN0YXJ0OiBmdW5jdGlvbiAoZSkge30sIC8vIC5iaW5kKCdmaWxldXBsb2Fkc3RhcnQnLCBmdW5jKTtcblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIHVwbG9hZHMgc3RvcCwgZXF1aXZhbGVudCB0byB0aGUgZ2xvYmFsIGFqYXhTdG9wIGV2ZW50OlxuICAgICAgICAgICAgLy8gc3RvcDogZnVuY3Rpb24gKGUpIHt9LCAvLyAuYmluZCgnZmlsZXVwbG9hZHN0b3AnLCBmdW5jKTtcblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIGNoYW5nZSBldmVudHMgb2YgdGhlIGZpbGVJbnB1dChzKTpcbiAgICAgICAgICAgIC8vIGNoYW5nZTogZnVuY3Rpb24gKGUsIGRhdGEpIHt9LCAvLyAuYmluZCgnZmlsZXVwbG9hZGNoYW5nZScsIGZ1bmMpO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmb3IgcGFzdGUgZXZlbnRzIHRvIHRoZSBwYXN0ZVpvbmUocyk6XG4gICAgICAgICAgICAvLyBwYXN0ZTogZnVuY3Rpb24gKGUsIGRhdGEpIHt9LCAvLyAuYmluZCgnZmlsZXVwbG9hZHBhc3RlJywgZnVuYyk7XG5cbiAgICAgICAgICAgIC8vIENhbGxiYWNrIGZvciBkcm9wIGV2ZW50cyBvZiB0aGUgZHJvcFpvbmUocyk6XG4gICAgICAgICAgICAvLyBkcm9wOiBmdW5jdGlvbiAoZSwgZGF0YSkge30sIC8vIC5iaW5kKCdmaWxldXBsb2FkZHJvcCcsIGZ1bmMpO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmb3IgZHJhZ292ZXIgZXZlbnRzIG9mIHRoZSBkcm9wWm9uZShzKTpcbiAgICAgICAgICAgIC8vIGRyYWdvdmVyOiBmdW5jdGlvbiAoZSkge30sIC8vIC5iaW5kKCdmaWxldXBsb2FkZHJhZ292ZXInLCBmdW5jKTtcblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgYmVmb3JlIHRoZSBzdGFydCBvZiBlYWNoIGNodW5rIHVwbG9hZCByZXF1ZXN0IChiZWZvcmUgZm9ybSBkYXRhIGluaXRpYWxpemF0aW9uKTpcbiAgICAgICAgICAgIC8vIGNodW5rYmVmb3Jlc2VuZDogZnVuY3Rpb24gKGUsIGRhdGEpIHt9LCAvLyAuYmluZCgnZmlsZXVwbG9hZGNodW5rYmVmb3Jlc2VuZCcsIGZ1bmMpO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmb3IgdGhlIHN0YXJ0IG9mIGVhY2ggY2h1bmsgdXBsb2FkIHJlcXVlc3Q6XG4gICAgICAgICAgICAvLyBjaHVua3NlbmQ6IGZ1bmN0aW9uIChlLCBkYXRhKSB7fSwgLy8gLmJpbmQoJ2ZpbGV1cGxvYWRjaHVua3NlbmQnLCBmdW5jKTtcblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIHN1Y2Nlc3NmdWwgY2h1bmsgdXBsb2FkczpcbiAgICAgICAgICAgIC8vIGNodW5rZG9uZTogZnVuY3Rpb24gKGUsIGRhdGEpIHt9LCAvLyAuYmluZCgnZmlsZXVwbG9hZGNodW5rZG9uZScsIGZ1bmMpO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmb3IgZmFpbGVkIChhYm9ydCBvciBlcnJvcikgY2h1bmsgdXBsb2FkczpcbiAgICAgICAgICAgIC8vIGNodW5rZmFpbDogZnVuY3Rpb24gKGUsIGRhdGEpIHt9LCAvLyAuYmluZCgnZmlsZXVwbG9hZGNodW5rZmFpbCcsIGZ1bmMpO1xuXG4gICAgICAgICAgICAvLyBDYWxsYmFjayBmb3IgY29tcGxldGVkIChzdWNjZXNzLCBhYm9ydCBvciBlcnJvcikgY2h1bmsgdXBsb2FkIHJlcXVlc3RzOlxuICAgICAgICAgICAgLy8gY2h1bmthbHdheXM6IGZ1bmN0aW9uIChlLCBkYXRhKSB7fSwgLy8gLmJpbmQoJ2ZpbGV1cGxvYWRjaHVua2Fsd2F5cycsIGZ1bmMpO1xuXG4gICAgICAgICAgICAvLyBUaGUgcGx1Z2luIG9wdGlvbnMgYXJlIHVzZWQgYXMgc2V0dGluZ3Mgb2JqZWN0IGZvciB0aGUgYWpheCBjYWxscy5cbiAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlIGpRdWVyeSBhamF4IHNldHRpbmdzIHJlcXVpcmVkIGZvciB0aGUgZmlsZSB1cGxvYWRzOlxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgdGltZW91dDogMFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEEgbGlzdCBvZiBvcHRpb25zIHRoYXQgcmVxdWlyZSByZWluaXRpYWxpemluZyBldmVudCBsaXN0ZW5lcnMgYW5kL29yXG4gICAgICAgIC8vIHNwZWNpYWwgaW5pdGlhbGl6YXRpb24gY29kZTpcbiAgICAgICAgX3NwZWNpYWxPcHRpb25zOiBbXG4gICAgICAgICAgICAnZmlsZUlucHV0JyxcbiAgICAgICAgICAgICdkcm9wWm9uZScsXG4gICAgICAgICAgICAncGFzdGVab25lJyxcbiAgICAgICAgICAgICdtdWx0aXBhcnQnLFxuICAgICAgICAgICAgJ2ZvcmNlSWZyYW1lVHJhbnNwb3J0J1xuICAgICAgICBdLFxuXG4gICAgICAgIF9ibG9iU2xpY2U6ICQuc3VwcG9ydC5ibG9iU2xpY2UgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNsaWNlID0gdGhpcy5zbGljZSB8fCB0aGlzLndlYmtpdFNsaWNlIHx8IHRoaXMubW96U2xpY2U7XG4gICAgICAgICAgICByZXR1cm4gc2xpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfQml0cmF0ZVRpbWVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVzdGFtcCA9ICgoRGF0ZS5ub3cpID8gRGF0ZS5ub3coKSA6IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgdGhpcy5sb2FkZWQgPSAwO1xuICAgICAgICAgICAgdGhpcy5iaXRyYXRlID0gMDtcbiAgICAgICAgICAgIHRoaXMuZ2V0Qml0cmF0ZSA9IGZ1bmN0aW9uIChub3csIGxvYWRlZCwgaW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGltZURpZmYgPSBub3cgLSB0aGlzLnRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYml0cmF0ZSB8fCAhaW50ZXJ2YWwgfHwgdGltZURpZmYgPiBpbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJpdHJhdGUgPSAobG9hZGVkIC0gdGhpcy5sb2FkZWQpICogKDEwMDAgLyB0aW1lRGlmZikgKiA4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IGxvYWRlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBub3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJpdHJhdGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIF9pc1hIUlVwbG9hZDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiAhb3B0aW9ucy5mb3JjZUlmcmFtZVRyYW5zcG9ydCAmJlxuICAgICAgICAgICAgICAgICgoIW9wdGlvbnMubXVsdGlwYXJ0ICYmICQuc3VwcG9ydC54aHJGaWxlVXBsb2FkKSB8fFxuICAgICAgICAgICAgICAgICQuc3VwcG9ydC54aHJGb3JtRGF0YUZpbGVVcGxvYWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9nZXRGb3JtRGF0YTogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YTtcbiAgICAgICAgICAgIGlmICgkLnR5cGUob3B0aW9ucy5mb3JtRGF0YSkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mb3JtRGF0YShvcHRpb25zLmZvcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCQuaXNBcnJheShvcHRpb25zLmZvcm1EYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZvcm1EYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCQudHlwZShvcHRpb25zLmZvcm1EYXRhKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IFtdO1xuICAgICAgICAgICAgICAgICQuZWFjaChvcHRpb25zLmZvcm1EYXRhLCBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEucHVzaCh7bmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9nZXRUb3RhbDogZnVuY3Rpb24gKGZpbGVzKSB7XG4gICAgICAgICAgICB2YXIgdG90YWwgPSAwO1xuICAgICAgICAgICAgJC5lYWNoKGZpbGVzLCBmdW5jdGlvbiAoaW5kZXgsIGZpbGUpIHtcbiAgICAgICAgICAgICAgICB0b3RhbCArPSBmaWxlLnNpemUgfHwgMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9pbml0UHJvZ3Jlc3NPYmplY3Q6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IHtcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IDAsXG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgYml0cmF0ZTogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChvYmouX3Byb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgJC5leHRlbmQob2JqLl9wcm9ncmVzcywgcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmouX3Byb2dyZXNzID0gcHJvZ3Jlc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2luaXRSZXNwb25zZU9iamVjdDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgdmFyIHByb3A7XG4gICAgICAgICAgICBpZiAob2JqLl9yZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGZvciAocHJvcCBpbiBvYmouX3Jlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouX3Jlc3BvbnNlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqLl9yZXNwb25zZVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqLl9yZXNwb25zZSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9vblByb2dyZXNzOiBmdW5jdGlvbiAoZSwgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSAoKERhdGUubm93KSA/IERhdGUubm93KCkgOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpKSxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLl90aW1lICYmIGRhdGEucHJvZ3Jlc3NJbnRlcnZhbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKG5vdyAtIGRhdGEuX3RpbWUgPCBkYXRhLnByb2dyZXNzSW50ZXJ2YWwpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBlLmxvYWRlZCAhPT0gZS50b3RhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEuX3RpbWUgPSBub3c7XG4gICAgICAgICAgICAgICAgbG9hZGVkID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAgICAgZS5sb2FkZWQgLyBlLnRvdGFsICogKGRhdGEuY2h1bmtTaXplIHx8IGRhdGEuX3Byb2dyZXNzLnRvdGFsKVxuICAgICAgICAgICAgICAgICkgKyAoZGF0YS51cGxvYWRlZEJ5dGVzIHx8IDApO1xuICAgICAgICAgICAgICAgIC8vIEFkZCB0aGUgZGlmZmVyZW5jZSBmcm9tIHRoZSBwcmV2aW91c2x5IGxvYWRlZCBzdGF0ZVxuICAgICAgICAgICAgICAgIC8vIHRvIHRoZSBnbG9iYWwgbG9hZGVkIGNvdW50ZXI6XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3MubG9hZGVkICs9IChsb2FkZWQgLSBkYXRhLl9wcm9ncmVzcy5sb2FkZWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyZXNzLmJpdHJhdGUgPSB0aGlzLl9iaXRyYXRlVGltZXIuZ2V0Qml0cmF0ZShcbiAgICAgICAgICAgICAgICAgICAgbm93LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmVzcy5sb2FkZWQsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYml0cmF0ZUludGVydmFsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBkYXRhLl9wcm9ncmVzcy5sb2FkZWQgPSBkYXRhLmxvYWRlZCA9IGxvYWRlZDtcbiAgICAgICAgICAgICAgICBkYXRhLl9wcm9ncmVzcy5iaXRyYXRlID0gZGF0YS5iaXRyYXRlID0gZGF0YS5fYml0cmF0ZVRpbWVyLmdldEJpdHJhdGUoXG4gICAgICAgICAgICAgICAgICAgIG5vdyxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLmJpdHJhdGVJbnRlcnZhbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciBhIGN1c3RvbSBwcm9ncmVzcyBldmVudCB3aXRoIGEgdG90YWwgZGF0YSBwcm9wZXJ0eSBzZXRcbiAgICAgICAgICAgICAgICAvLyB0byB0aGUgZmlsZSBzaXplKHMpIG9mIHRoZSBjdXJyZW50IHVwbG9hZCBhbmQgYSBsb2FkZWQgZGF0YVxuICAgICAgICAgICAgICAgIC8vIHByb3BlcnR5IGNhbGN1bGF0ZWQgYWNjb3JkaW5nbHk6XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlcihcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2dyZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJC5FdmVudCgncHJvZ3Jlc3MnLCB7ZGVsZWdhdGVkRXZlbnQ6IGV9KSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciBhIGdsb2JhbCBwcm9ncmVzcyBldmVudCBmb3IgYWxsIGN1cnJlbnQgZmlsZSB1cGxvYWRzLFxuICAgICAgICAgICAgICAgIC8vIGluY2x1ZGluZyBhamF4IGNhbGxzIHF1ZXVlZCBmb3Igc2VxdWVudGlhbCBmaWxlIHVwbG9hZHM6XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlcihcbiAgICAgICAgICAgICAgICAgICAgJ3Byb2dyZXNzYWxsJyxcbiAgICAgICAgICAgICAgICAgICAgJC5FdmVudCgncHJvZ3Jlc3NhbGwnLCB7ZGVsZWdhdGVkRXZlbnQ6IGV9KSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9pbml0UHJvZ3Jlc3NMaXN0ZW5lcjogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICB4aHIgPSBvcHRpb25zLnhociA/IG9wdGlvbnMueGhyKCkgOiAkLmFqYXhTZXR0aW5ncy54aHIoKTtcbiAgICAgICAgICAgIC8vIEFjY2Vzc3MgdG8gdGhlIG5hdGl2ZSBYSFIgb2JqZWN0IGlzIHJlcXVpcmVkIHRvIGFkZCBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIC8vIGZvciB0aGUgdXBsb2FkIHByb2dyZXNzIGV2ZW50OlxuICAgICAgICAgICAgaWYgKHhoci51cGxvYWQpIHtcbiAgICAgICAgICAgICAgICAkKHhoci51cGxvYWQpLmJpbmQoJ3Byb2dyZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9lID0gZS5vcmlnaW5hbEV2ZW50O1xuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIHByb2dyZXNzIGV2ZW50IHByb3BlcnRpZXMgZ2V0IGNvcGllZCBvdmVyOlxuICAgICAgICAgICAgICAgICAgICBlLmxlbmd0aENvbXB1dGFibGUgPSBvZS5sZW5ndGhDb21wdXRhYmxlO1xuICAgICAgICAgICAgICAgICAgICBlLmxvYWRlZCA9IG9lLmxvYWRlZDtcbiAgICAgICAgICAgICAgICAgICAgZS50b3RhbCA9IG9lLnRvdGFsO1xuICAgICAgICAgICAgICAgICAgICB0aGF0Ll9vblByb2dyZXNzKGUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMueGhyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geGhyO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2RlaW5pdFByb2dyZXNzTGlzdGVuZXI6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgeGhyID0gb3B0aW9ucy54aHIgPyBvcHRpb25zLnhocigpIDogJC5hamF4U2V0dGluZ3MueGhyKCk7XG4gICAgICAgICAgICBpZiAoeGhyLnVwbG9hZCkge1xuICAgICAgICAgICAgICAgICQoeGhyLnVwbG9hZCkudW5iaW5kKCdwcm9ncmVzcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9pc0luc3RhbmNlT2Y6IGZ1bmN0aW9uICh0eXBlLCBvYmopIHtcbiAgICAgICAgICAgIC8vIENyb3NzLWZyYW1lIGluc3RhbmNlb2YgY2hlY2tcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgJyArIHR5cGUgKyAnXSc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2dldFVuaXF1ZUZpbGVuYW1lOiBmdW5jdGlvbiAobmFtZSwgbWFwKSB7XG4gICAgICAgICAgICBuYW1lID0gU3RyaW5nKG5hbWUpO1xuICAgICAgICAgICAgaWYgKG1hcFtuYW1lXSkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgIC8oPzogXFwoKFtcXGRdKylcXCkpPyhcXC5bXi5dKyk/JC8sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChfLCBwMSwgcDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHAxID8gTnVtYmVyKHAxKSArIDEgOiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dCA9IHAyIHx8ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICcgKCcgKyBpbmRleCArICcpJyArIGV4dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFVuaXF1ZUZpbGVuYW1lKG5hbWUsIG1hcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXBbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2luaXRYSFJEYXRhOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLFxuICAgICAgICAgICAgICAgIGZpbGUgPSBvcHRpb25zLmZpbGVzWzBdLFxuICAgICAgICAgICAgICAgIC8vIElnbm9yZSBub24tbXVsdGlwYXJ0IHNldHRpbmcgaWYgbm90IHN1cHBvcnRlZDpcbiAgICAgICAgICAgICAgICBtdWx0aXBhcnQgPSBvcHRpb25zLm11bHRpcGFydCB8fCAhJC5zdXBwb3J0LnhockZpbGVVcGxvYWQsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lID0gJC50eXBlKG9wdGlvbnMucGFyYW1OYW1lKSA9PT0gJ2FycmF5JyA/XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucGFyYW1OYW1lWzBdIDogb3B0aW9ucy5wYXJhbU5hbWU7XG4gICAgICAgICAgICBvcHRpb25zLmhlYWRlcnMgPSAkLmV4dGVuZCh7fSwgb3B0aW9ucy5oZWFkZXJzKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmNvbnRlbnRSYW5nZSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuaGVhZGVyc1snQ29udGVudC1SYW5nZSddID0gb3B0aW9ucy5jb250ZW50UmFuZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW11bHRpcGFydCB8fCBvcHRpb25zLmJsb2IgfHwgIXRoaXMuX2lzSW5zdGFuY2VPZignRmlsZScsIGZpbGUpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzWydDb250ZW50LURpc3Bvc2l0aW9uJ10gPSAnYXR0YWNobWVudDsgZmlsZW5hbWU9XCInICtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJKGZpbGUudXBsb2FkTmFtZSB8fCBmaWxlLm5hbWUpICsgJ1wiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbXVsdGlwYXJ0KSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jb250ZW50VHlwZSA9IGZpbGUudHlwZSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcbiAgICAgICAgICAgICAgICBvcHRpb25zLmRhdGEgPSBvcHRpb25zLmJsb2IgfHwgZmlsZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJC5zdXBwb3J0LnhockZvcm1EYXRhRmlsZVVwbG9hZCkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnBvc3RNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5wb3N0TWVzc2FnZSBkb2VzIG5vdCBhbGxvdyBzZW5kaW5nIEZvcm1EYXRhXG4gICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdHMsIHNvIHdlIGp1c3QgYWRkIHRoZSBGaWxlL0Jsb2Igb2JqZWN0cyB0b1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZm9ybURhdGEgYXJyYXkgYW5kIGxldCB0aGUgcG9zdE1lc3NhZ2Ugd2luZG93XG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgRm9ybURhdGEgb2JqZWN0IG91dCBvZiB0aGlzIGFycmF5OlxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YSA9IHRoaXMuX2dldEZvcm1EYXRhKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5ibG9iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwYXJhbU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbnMuYmxvYlxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2gob3B0aW9ucy5maWxlcywgZnVuY3Rpb24gKGluZGV4LCBmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICgkLnR5cGUob3B0aW9ucy5wYXJhbU5hbWUpID09PSAnYXJyYXknICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnBhcmFtTmFtZVtpbmRleF0pIHx8IHBhcmFtTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuX2lzSW5zdGFuY2VPZignRm9ybURhdGEnLCBvcHRpb25zLmZvcm1EYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEgPSBvcHRpb25zLmZvcm1EYXRhO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaCh0aGlzLl9nZXRGb3JtRGF0YShvcHRpb25zKSwgZnVuY3Rpb24gKGluZGV4LCBmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChmaWVsZC5uYW1lLCBmaWVsZC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5ibG9iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYmxvYixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnVwbG9hZE5hbWUgfHwgZmlsZS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJC5lYWNoKG9wdGlvbnMuZmlsZXMsIGZ1bmN0aW9uIChpbmRleCwgZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY2hlY2sgYWxsb3dzIHRoZSB0ZXN0cyB0byBydW4gd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGR1bW15IG9iamVjdHM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuX2lzSW5zdGFuY2VPZignRmlsZScsIGZpbGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9pc0luc3RhbmNlT2YoJ0Jsb2InLCBmaWxlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZU5hbWUgPSBmaWxlLnVwbG9hZE5hbWUgfHwgZmlsZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy51bmlxdWVGaWxlbmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lID0gdGhhdC5fZ2V0VW5pcXVlRmlsZW5hbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51bmlxdWVGaWxlbmFtZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCQudHlwZShvcHRpb25zLnBhcmFtTmFtZSkgPT09ICdhcnJheScgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnBhcmFtTmFtZVtpbmRleF0pIHx8IHBhcmFtTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IGZvcm1EYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQmxvYiByZWZlcmVuY2UgaXMgbm90IG5lZWRlZCBhbnltb3JlLCBmcmVlIG1lbW9yeTpcbiAgICAgICAgICAgIG9wdGlvbnMuYmxvYiA9IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2luaXRJZnJhbWVTZXR0aW5nczogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIb3N0ID0gJCgnPGE+PC9hPicpLnByb3AoJ2hyZWYnLCBvcHRpb25zLnVybCkucHJvcCgnaG9zdCcpO1xuICAgICAgICAgICAgLy8gU2V0dGluZyB0aGUgZGF0YVR5cGUgdG8gaWZyYW1lIGVuYWJsZXMgdGhlIGlmcmFtZSB0cmFuc3BvcnQ6XG4gICAgICAgICAgICBvcHRpb25zLmRhdGFUeXBlID0gJ2lmcmFtZSAnICsgKG9wdGlvbnMuZGF0YVR5cGUgfHwgJycpO1xuICAgICAgICAgICAgLy8gVGhlIGlmcmFtZSB0cmFuc3BvcnQgYWNjZXB0cyBhIHNlcmlhbGl6ZWQgYXJyYXkgYXMgZm9ybSBkYXRhOlxuICAgICAgICAgICAgb3B0aW9ucy5mb3JtRGF0YSA9IHRoaXMuX2dldEZvcm1EYXRhKG9wdGlvbnMpO1xuICAgICAgICAgICAgLy8gQWRkIHJlZGlyZWN0IHVybCB0byBmb3JtIGRhdGEgb24gY3Jvc3MtZG9tYWluIHVwbG9hZHM6XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5yZWRpcmVjdCAmJiB0YXJnZXRIb3N0ICYmIHRhcmdldEhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvcm1EYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBvcHRpb25zLnJlZGlyZWN0UGFyYW1OYW1lIHx8ICdyZWRpcmVjdCcsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb25zLnJlZGlyZWN0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2luaXREYXRhU2V0dGluZ3M6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNYSFJVcGxvYWQob3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2NodW5rZWRVcGxvYWQob3B0aW9ucywgdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRYSFJEYXRhKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luaXRQcm9ncmVzc0xpc3RlbmVyKG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5wb3N0TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXR0aW5nIHRoZSBkYXRhVHlwZSB0byBwb3N0bWVzc2FnZSBlbmFibGVzIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBwb3N0TWVzc2FnZSB0cmFuc3BvcnQ6XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZGF0YVR5cGUgPSAncG9zdG1lc3NhZ2UgJyArIChvcHRpb25zLmRhdGFUeXBlIHx8ICcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRJZnJhbWVTZXR0aW5ncyhvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfZ2V0UGFyYW1OYW1lOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIGZpbGVJbnB1dCA9ICQob3B0aW9ucy5maWxlSW5wdXQpLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZSA9IG9wdGlvbnMucGFyYW1OYW1lO1xuICAgICAgICAgICAgaWYgKCFwYXJhbU5hbWUpIHtcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWUgPSBbXTtcbiAgICAgICAgICAgICAgICBmaWxlSW5wdXQuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gaW5wdXQucHJvcCgnbmFtZScpIHx8ICdmaWxlc1tdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAoaW5wdXQucHJvcCgnZmlsZXMnKSB8fCBbMV0pLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSAtPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbU5hbWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZSA9IFtmaWxlSW5wdXQucHJvcCgnbmFtZScpIHx8ICdmaWxlc1tdJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghJC5pc0FycmF5KHBhcmFtTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWUgPSBbcGFyYW1OYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJhbU5hbWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2luaXRGb3JtU2V0dGluZ3M6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICAvLyBSZXRyaWV2ZSBtaXNzaW5nIG9wdGlvbnMgZnJvbSB0aGUgaW5wdXQgZmllbGQgYW5kIHRoZVxuICAgICAgICAgICAgLy8gYXNzb2NpYXRlZCBmb3JtLCBpZiBhdmFpbGFibGU6XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZm9ybSB8fCAhb3B0aW9ucy5mb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9ybSA9ICQob3B0aW9ucy5maWxlSW5wdXQucHJvcCgnZm9ybScpKTtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZ2l2ZW4gZmlsZSBpbnB1dCBkb2Vzbid0IGhhdmUgYW4gYXNzb2NpYXRlZCBmb3JtLFxuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgZGVmYXVsdCB3aWRnZXQgZmlsZSBpbnB1dCdzIGZvcm06XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9ybSA9ICQodGhpcy5vcHRpb25zLmZpbGVJbnB1dC5wcm9wKCdmb3JtJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMucGFyYW1OYW1lID0gdGhpcy5fZ2V0UGFyYW1OYW1lKG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnVybCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMudXJsID0gb3B0aW9ucy5mb3JtLnByb3AoJ2FjdGlvbicpIHx8IGxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgSFRUUCByZXF1ZXN0IG1ldGhvZCBtdXN0IGJlIFwiUE9TVFwiIG9yIFwiUFVUXCI6XG4gICAgICAgICAgICBvcHRpb25zLnR5cGUgPSAob3B0aW9ucy50eXBlIHx8XG4gICAgICAgICAgICAgICAgKCQudHlwZShvcHRpb25zLmZvcm0ucHJvcCgnbWV0aG9kJykpID09PSAnc3RyaW5nJyAmJlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmZvcm0ucHJvcCgnbWV0aG9kJykpIHx8ICcnXG4gICAgICAgICAgICAgICAgKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudHlwZSAhPT0gJ1BPU1QnICYmIG9wdGlvbnMudHlwZSAhPT0gJ1BVVCcgJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlICE9PSAnUEFUQ0gnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ1BPU1QnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmZvcm1BY2NlcHRDaGFyc2V0KSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5mb3JtQWNjZXB0Q2hhcnNldCA9IG9wdGlvbnMuZm9ybS5hdHRyKCdhY2NlcHQtY2hhcnNldCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9nZXRBSkFYU2V0dGluZ3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5faW5pdEZvcm1TZXR0aW5ncyhvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuX2luaXREYXRhU2V0dGluZ3Mob3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBqUXVlcnkgMS42IGRvZXNuJ3QgcHJvdmlkZSAuc3RhdGUoKSxcbiAgICAgICAgLy8gd2hpbGUgalF1ZXJ5IDEuOCsgcmVtb3ZlZCAuaXNSZWplY3RlZCgpIGFuZCAuaXNSZXNvbHZlZCgpOlxuICAgICAgICBfZ2V0RGVmZXJyZWRTdGF0ZTogZnVuY3Rpb24gKGRlZmVycmVkKSB7XG4gICAgICAgICAgICBpZiAoZGVmZXJyZWQuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQuc3RhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWZlcnJlZC5pc1Jlc29sdmVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3Jlc29sdmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWZlcnJlZC5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3JlamVjdGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAncGVuZGluZyc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gTWFwcyBqcVhIUiBjYWxsYmFja3MgdG8gdGhlIGVxdWl2YWxlbnRcbiAgICAgICAgLy8gbWV0aG9kcyBvZiB0aGUgZ2l2ZW4gUHJvbWlzZSBvYmplY3Q6XG4gICAgICAgIF9lbmhhbmNlUHJvbWlzZTogZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgICAgIHByb21pc2Uuc3VjY2VzcyA9IHByb21pc2UuZG9uZTtcbiAgICAgICAgICAgIHByb21pc2UuZXJyb3IgPSBwcm9taXNlLmZhaWw7XG4gICAgICAgICAgICBwcm9taXNlLmNvbXBsZXRlID0gcHJvbWlzZS5hbHdheXM7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBDcmVhdGVzIGFuZCByZXR1cm5zIGEgUHJvbWlzZSBvYmplY3QgZW5oYW5jZWQgd2l0aFxuICAgICAgICAvLyB0aGUganFYSFIgbWV0aG9kcyBhYm9ydCwgc3VjY2VzcywgZXJyb3IgYW5kIGNvbXBsZXRlOlxuICAgICAgICBfZ2V0WEhSUHJvbWlzZTogZnVuY3Rpb24gKHJlc29sdmVPclJlamVjdCwgY29udGV4dCwgYXJncykge1xuICAgICAgICAgICAgdmFyIGRmZCA9ICQuRGVmZXJyZWQoKSxcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gZGZkLnByb21pc2UoKTtcbiAgICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXMub3B0aW9ucy5jb250ZXh0IHx8IHByb21pc2U7XG4gICAgICAgICAgICBpZiAocmVzb2x2ZU9yUmVqZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZGZkLnJlc29sdmVXaXRoKGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNvbHZlT3JSZWplY3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZGZkLnJlamVjdFdpdGgoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9taXNlLmFib3J0ID0gZGZkLnByb21pc2U7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW5oYW5jZVByb21pc2UocHJvbWlzZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gQWRkcyBjb252ZW5pZW5jZSBtZXRob2RzIHRvIHRoZSBkYXRhIGNhbGxiYWNrIGFyZ3VtZW50OlxuICAgICAgICBfYWRkQ29udmVuaWVuY2VNZXRob2RzOiBmdW5jdGlvbiAoZSwgZGF0YSkge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGdldFByb21pc2UgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmVXaXRoKHRoYXQsIGFyZ3MpLnByb21pc2UoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGF0YS5wcm9jZXNzID0gZnVuY3Rpb24gKHJlc29sdmVGdW5jLCByZWplY3RGdW5jKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmVGdW5jIHx8IHJlamVjdEZ1bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5fcHJvY2Vzc1F1ZXVlID0gdGhpcy5fcHJvY2Vzc1F1ZXVlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLl9wcm9jZXNzUXVldWUgfHwgZ2V0UHJvbWlzZShbdGhpc10pKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkLkRlZmVycmVkKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVqZWN0V2l0aCh0aGF0LCBbZGF0YV0pLnByb21pc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UHJvbWlzZShhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICkudGhlbihyZXNvbHZlRnVuYywgcmVqZWN0RnVuYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzUXVldWUgfHwgZ2V0UHJvbWlzZShbdGhpc10pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRhdGEuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlKCkgIT09ICdwZW5kaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmpxWEhSID0gdGhpcy5qcVhIUiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAodGhhdC5fdHJpZ2dlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3VibWl0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLkV2ZW50KCdzdWJtaXQnLCB7ZGVsZWdhdGVkRXZlbnQ6IGV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICApICE9PSBmYWxzZSkgJiYgdGhhdC5fb25TZW5kKGUsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5qcVhIUiB8fCB0aGF0Ll9nZXRYSFJQcm9taXNlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGF0YS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5qcVhIUikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5qcVhIUi5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yVGhyb3duID0gJ2Fib3J0JztcbiAgICAgICAgICAgICAgICB0aGF0Ll90cmlnZ2VyKCdmYWlsJywgbnVsbCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuX2dldFhIUlByb21pc2UoZmFsc2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRhdGEuc3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuanFYSFIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuX2dldERlZmVycmVkU3RhdGUodGhpcy5qcVhIUik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wcm9jZXNzUXVldWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuX2dldERlZmVycmVkU3RhdGUodGhpcy5fcHJvY2Vzc1F1ZXVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGF0YS5wcm9jZXNzaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5qcVhIUiAmJiB0aGlzLl9wcm9jZXNzUXVldWUgJiYgdGhhdFxuICAgICAgICAgICAgICAgICAgICAuX2dldERlZmVycmVkU3RhdGUodGhpcy5fcHJvY2Vzc1F1ZXVlKSA9PT0gJ3BlbmRpbmcnO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRhdGEucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRhdGEucmVzcG9uc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3BvbnNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBQYXJzZXMgdGhlIFJhbmdlIGhlYWRlciBmcm9tIHRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICAgICAgLy8gYW5kIHJldHVybnMgdGhlIHVwbG9hZGVkIGJ5dGVzOlxuICAgICAgICBfZ2V0VXBsb2FkZWRCeXRlczogZnVuY3Rpb24gKGpxWEhSKSB7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcignUmFuZ2UnKSxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IHJhbmdlICYmIHJhbmdlLnNwbGl0KCctJyksXG4gICAgICAgICAgICAgICAgdXBwZXJCeXRlc1BvcyA9IHBhcnRzICYmIHBhcnRzLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocGFydHNbMV0sIDEwKTtcbiAgICAgICAgICAgIHJldHVybiB1cHBlckJ5dGVzUG9zICYmIHVwcGVyQnl0ZXNQb3MgKyAxO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFVwbG9hZHMgYSBmaWxlIGluIG11bHRpcGxlLCBzZXF1ZW50aWFsIHJlcXVlc3RzXG4gICAgICAgIC8vIGJ5IHNwbGl0dGluZyB0aGUgZmlsZSB1cCBpbiBtdWx0aXBsZSBibG9iIGNodW5rcy5cbiAgICAgICAgLy8gSWYgdGhlIHNlY29uZCBwYXJhbWV0ZXIgaXMgdHJ1ZSwgb25seSB0ZXN0cyBpZiB0aGUgZmlsZVxuICAgICAgICAvLyBzaG91bGQgYmUgdXBsb2FkZWQgaW4gY2h1bmtzLCBidXQgZG9lcyBub3QgaW52b2tlIGFueVxuICAgICAgICAvLyB1cGxvYWQgcmVxdWVzdHM6XG4gICAgICAgIF9jaHVua2VkVXBsb2FkOiBmdW5jdGlvbiAob3B0aW9ucywgdGVzdE9ubHkpIHtcbiAgICAgICAgICAgIG9wdGlvbnMudXBsb2FkZWRCeXRlcyA9IG9wdGlvbnMudXBsb2FkZWRCeXRlcyB8fCAwO1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGZpbGUgPSBvcHRpb25zLmZpbGVzWzBdLFxuICAgICAgICAgICAgICAgIGZzID0gZmlsZS5zaXplLFxuICAgICAgICAgICAgICAgIHViID0gb3B0aW9ucy51cGxvYWRlZEJ5dGVzLFxuICAgICAgICAgICAgICAgIG1jcyA9IG9wdGlvbnMubWF4Q2h1bmtTaXplIHx8IGZzLFxuICAgICAgICAgICAgICAgIHNsaWNlID0gdGhpcy5fYmxvYlNsaWNlLFxuICAgICAgICAgICAgICAgIGRmZCA9ICQuRGVmZXJyZWQoKSxcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gZGZkLnByb21pc2UoKSxcbiAgICAgICAgICAgICAgICBqcVhIUixcbiAgICAgICAgICAgICAgICB1cGxvYWQ7XG4gICAgICAgICAgICBpZiAoISh0aGlzLl9pc1hIUlVwbG9hZChvcHRpb25zKSAmJiBzbGljZSAmJiAodWIgfHwgKCQudHlwZShtY3MpID09PSAnZnVuY3Rpb24nID8gbWNzKG9wdGlvbnMpIDogbWNzKSA8IGZzKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRlc3RPbmx5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodWIgPj0gZnMpIHtcbiAgICAgICAgICAgICAgICBmaWxlLmVycm9yID0gb3B0aW9ucy5pMThuKCd1cGxvYWRlZEJ5dGVzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFhIUlByb21pc2UoXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgIFtudWxsLCAnZXJyb3InLCBmaWxlLmVycm9yXVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUaGUgY2h1bmsgdXBsb2FkIG1ldGhvZDpcbiAgICAgICAgICAgIHVwbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSB0aGUgb3B0aW9ucyBvYmplY3QgZm9yIGVhY2ggY2h1bmsgdXBsb2FkOlxuICAgICAgICAgICAgICAgIHZhciBvID0gJC5leHRlbmQoe30sIG9wdGlvbnMpLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TG9hZGVkID0gby5fcHJvZ3Jlc3MubG9hZGVkO1xuICAgICAgICAgICAgICAgIG8uYmxvYiA9IHNsaWNlLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICAgICAgICAgIHViLFxuICAgICAgICAgICAgICAgICAgICB1YiArICgkLnR5cGUobWNzKSA9PT0gJ2Z1bmN0aW9uJyA/IG1jcyhvKSA6IG1jcyksXG4gICAgICAgICAgICAgICAgICAgIGZpbGUudHlwZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgY2h1bmsgc2l6ZSwgYXMgdGhlIGJsb2IgaXRzZWxmXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBiZSBkZXJlZmVyZW5jZWQgYWZ0ZXIgZGF0YSBwcm9jZXNzaW5nOlxuICAgICAgICAgICAgICAgIG8uY2h1bmtTaXplID0gby5ibG9iLnNpemU7XG4gICAgICAgICAgICAgICAgLy8gRXhwb3NlIHRoZSBjaHVuayBieXRlcyBwb3NpdGlvbiByYW5nZTpcbiAgICAgICAgICAgICAgICBvLmNvbnRlbnRSYW5nZSA9ICdieXRlcyAnICsgdWIgKyAnLScgK1xuICAgICAgICAgICAgICAgICAgICAodWIgKyBvLmNodW5rU2l6ZSAtIDEpICsgJy8nICsgZnM7XG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciBjaHVua2JlZm9yZXNlbmQgdG8gYWxsb3cgZm9ybSBkYXRhIHRvIGJlIHVwZGF0ZWQgZm9yIHRoaXMgY2h1bmtcbiAgICAgICAgICAgICAgICB0aGF0Ll90cmlnZ2VyKCdjaHVua2JlZm9yZXNlbmQnLCBudWxsLCBvKTtcbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSB1cGxvYWQgZGF0YSAodGhlIGJsb2IgYW5kIHBvdGVudGlhbCBmb3JtIGRhdGEpOlxuICAgICAgICAgICAgICAgIHRoYXQuX2luaXRYSFJEYXRhKG8pO1xuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9ncmVzcyBsaXN0ZW5lcnMgZm9yIHRoaXMgY2h1bmsgdXBsb2FkOlxuICAgICAgICAgICAgICAgIHRoYXQuX2luaXRQcm9ncmVzc0xpc3RlbmVyKG8pO1xuICAgICAgICAgICAgICAgIGpxWEhSID0gKCh0aGF0Ll90cmlnZ2VyKCdjaHVua3NlbmQnLCBudWxsLCBvKSAhPT0gZmFsc2UgJiYgJC5hamF4KG8pKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5fZ2V0WEhSUHJvbWlzZShmYWxzZSwgby5jb250ZXh0KSlcbiAgICAgICAgICAgICAgICAgICAgLmRvbmUoZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHViID0gdGhhdC5fZ2V0VXBsb2FkZWRCeXRlcyhqcVhIUikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodWIgKyBvLmNodW5rU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBwcm9ncmVzcyBldmVudCBpZiBubyBmaW5hbCBwcm9ncmVzcyBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2l0aCBsb2FkZWQgZXF1YWxpbmcgdG90YWwgaGFzIGJlZW4gdHJpZ2dlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgdGhpcyBjaHVuazpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50TG9hZGVkICsgby5jaHVua1NpemUgLSBvLl9wcm9ncmVzcy5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9vblByb2dyZXNzKCQuRXZlbnQoJ3Byb2dyZXNzJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGhDb21wdXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IHViIC0gby51cGxvYWRlZEJ5dGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogdWIgLSBvLnVwbG9hZGVkQnl0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnVwbG9hZGVkQnl0ZXMgPSBvLnVwbG9hZGVkQnl0ZXMgPSB1YjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgby50ZXh0U3RhdHVzID0gdGV4dFN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uanFYSFIgPSBqcVhIUjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuX3RyaWdnZXIoJ2NodW5rZG9uZScsIG51bGwsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5fdHJpZ2dlcignY2h1bmthbHdheXMnLCBudWxsLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1YiA8IGZzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlsZSB1cGxvYWQgbm90IHlldCBjb21wbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb250aW51ZSB3aXRoIHRoZSBuZXh0IGNodW5rOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZmQucmVzb2x2ZVdpdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3VsdCwgdGV4dFN0YXR1cywganFYSFJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICAgICAgby5qcVhIUiA9IGpxWEhSO1xuICAgICAgICAgICAgICAgICAgICAgICAgby50ZXh0U3RhdHVzID0gdGV4dFN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgICAgIG8uZXJyb3JUaHJvd24gPSBlcnJvclRocm93bjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuX3RyaWdnZXIoJ2NodW5rZmFpbCcsIG51bGwsIG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5fdHJpZ2dlcignY2h1bmthbHdheXMnLCBudWxsLCBvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRmZC5yZWplY3RXaXRoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG8uY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duXVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9kZWluaXRQcm9ncmVzc0xpc3RlbmVyKG8pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLl9lbmhhbmNlUHJvbWlzZShwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpxWEhSLmFib3J0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdXBsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfSxcblxuICAgICAgICBfYmVmb3JlU2VuZDogZnVuY3Rpb24gKGUsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hY3RpdmUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgc3RhcnQgY2FsbGJhY2sgaXMgdHJpZ2dlcmVkIHdoZW4gYW4gdXBsb2FkIHN0YXJ0c1xuICAgICAgICAgICAgICAgIC8vIGFuZCBubyBvdGhlciB1cGxvYWRzIGFyZSBjdXJyZW50bHkgcnVubmluZyxcbiAgICAgICAgICAgICAgICAvLyBlcXVpdmFsZW50IHRvIHRoZSBnbG9iYWwgYWpheFN0YXJ0IGV2ZW50OlxuICAgICAgICAgICAgICAgIHRoaXMuX3RyaWdnZXIoJ3N0YXJ0Jyk7XG4gICAgICAgICAgICAgICAgLy8gU2V0IHRpbWVyIGZvciBnbG9iYWwgYml0cmF0ZSBwcm9ncmVzcyBjYWxjdWxhdGlvbjpcbiAgICAgICAgICAgICAgICB0aGlzLl9iaXRyYXRlVGltZXIgPSBuZXcgdGhpcy5fQml0cmF0ZVRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGdsb2JhbCBwcm9ncmVzcyB2YWx1ZXM6XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3MubG9hZGVkID0gdGhpcy5fcHJvZ3Jlc3MudG90YWwgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyZXNzLmJpdHJhdGUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBjb250YWluZXIgb2JqZWN0cyBmb3IgdGhlIC5yZXNwb25zZSgpIGFuZFxuICAgICAgICAgICAgLy8gLnByb2dyZXNzKCkgbWV0aG9kcyBvbiB0aGUgZGF0YSBvYmplY3QgYXJlIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gYW5kIHJlc2V0IHRvIHRoZWlyIGluaXRpYWwgc3RhdGU6XG4gICAgICAgICAgICB0aGlzLl9pbml0UmVzcG9uc2VPYmplY3QoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9pbml0UHJvZ3Jlc3NPYmplY3QoZGF0YSk7XG4gICAgICAgICAgICBkYXRhLl9wcm9ncmVzcy5sb2FkZWQgPSBkYXRhLmxvYWRlZCA9IGRhdGEudXBsb2FkZWRCeXRlcyB8fCAwO1xuICAgICAgICAgICAgZGF0YS5fcHJvZ3Jlc3MudG90YWwgPSBkYXRhLnRvdGFsID0gdGhpcy5fZ2V0VG90YWwoZGF0YS5maWxlcykgfHwgMTtcbiAgICAgICAgICAgIGRhdGEuX3Byb2dyZXNzLmJpdHJhdGUgPSBkYXRhLmJpdHJhdGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlICs9IDE7XG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBnbG9iYWwgcHJvZ3Jlc3MgdmFsdWVzOlxuICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3MubG9hZGVkICs9IGRhdGEubG9hZGVkO1xuICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3MudG90YWwgKz0gZGF0YS50b3RhbDtcbiAgICAgICAgfSxcblxuICAgICAgICBfb25Eb25lOiBmdW5jdGlvbiAocmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUiwgb3B0aW9ucykge1xuICAgICAgICAgICAgdmFyIHRvdGFsID0gb3B0aW9ucy5fcHJvZ3Jlc3MudG90YWwsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBvcHRpb25zLl9yZXNwb25zZTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9wcm9ncmVzcy5sb2FkZWQgPCB0b3RhbCkge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHByb2dyZXNzIGV2ZW50IGlmIG5vIGZpbmFsIHByb2dyZXNzIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2l0aCBsb2FkZWQgZXF1YWxpbmcgdG90YWwgaGFzIGJlZW4gdHJpZ2dlcmVkOlxuICAgICAgICAgICAgICAgIHRoaXMuX29uUHJvZ3Jlc3MoJC5FdmVudCgncHJvZ3Jlc3MnLCB7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aENvbXB1dGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogdG90YWwsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiB0b3RhbFxuICAgICAgICAgICAgICAgIH0pLCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdCA9IG9wdGlvbnMucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgcmVzcG9uc2UudGV4dFN0YXR1cyA9IG9wdGlvbnMudGV4dFN0YXR1cyA9IHRleHRTdGF0dXM7XG4gICAgICAgICAgICByZXNwb25zZS5qcVhIUiA9IG9wdGlvbnMuanFYSFIgPSBqcVhIUjtcbiAgICAgICAgICAgIHRoaXMuX3RyaWdnZXIoJ2RvbmUnLCBudWxsLCBvcHRpb25zKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfb25GYWlsOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBvcHRpb25zLl9yZXNwb25zZTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJlY2FsY3VsYXRlUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZhaWxlZCAoZXJyb3Igb3IgYWJvcnQpIGZpbGUgdXBsb2FkIGZyb21cbiAgICAgICAgICAgICAgICAvLyB0aGUgZ2xvYmFsIHByb2dyZXNzIGNhbGN1bGF0aW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2dyZXNzLmxvYWRlZCAtPSBvcHRpb25zLl9wcm9ncmVzcy5sb2FkZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZ3Jlc3MudG90YWwgLT0gb3B0aW9ucy5fcHJvZ3Jlc3MudG90YWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNwb25zZS5qcVhIUiA9IG9wdGlvbnMuanFYSFIgPSBqcVhIUjtcbiAgICAgICAgICAgIHJlc3BvbnNlLnRleHRTdGF0dXMgPSBvcHRpb25zLnRleHRTdGF0dXMgPSB0ZXh0U3RhdHVzO1xuICAgICAgICAgICAgcmVzcG9uc2UuZXJyb3JUaHJvd24gPSBvcHRpb25zLmVycm9yVGhyb3duID0gZXJyb3JUaHJvd247XG4gICAgICAgICAgICB0aGlzLl90cmlnZ2VyKCdmYWlsJywgbnVsbCwgb3B0aW9ucyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX29uQWx3YXlzOiBmdW5jdGlvbiAoanFYSFJvclJlc3VsdCwgdGV4dFN0YXR1cywganFYSFJvckVycm9yLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAvLyBqcVhIUm9yUmVzdWx0LCB0ZXh0U3RhdHVzIGFuZCBqcVhIUm9yRXJyb3IgYXJlIGFkZGVkIHRvIHRoZVxuICAgICAgICAgICAgLy8gb3B0aW9ucyBvYmplY3QgdmlhIGRvbmUgYW5kIGZhaWwgY2FsbGJhY2tzXG4gICAgICAgICAgICB0aGlzLl90cmlnZ2VyKCdhbHdheXMnLCBudWxsLCBvcHRpb25zKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfb25TZW5kOiBmdW5jdGlvbiAoZSwgZGF0YSkge1xuICAgICAgICAgICAgaWYgKCFkYXRhLnN1Ym1pdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZENvbnZlbmllbmNlTWV0aG9kcyhlLCBkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICBqcVhIUixcbiAgICAgICAgICAgICAgICBhYm9ydGVkLFxuICAgICAgICAgICAgICAgIHNsb3QsXG4gICAgICAgICAgICAgICAgcGlwZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gdGhhdC5fZ2V0QUpBWFNldHRpbmdzKGRhdGEpLFxuICAgICAgICAgICAgICAgIHNlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuX3NlbmRpbmcgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHRpbWVyIGZvciBiaXRyYXRlIHByb2dyZXNzIGNhbGN1bGF0aW9uOlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLl9iaXRyYXRlVGltZXIgPSBuZXcgdGhhdC5fQml0cmF0ZVRpbWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGpxWEhSID0ganFYSFIgfHwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgKChhYm9ydGVkIHx8IHRoYXQuX3RyaWdnZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlbmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuRXZlbnQoJ3NlbmQnLCB7ZGVsZWdhdGVkRXZlbnQ6IGV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICApID09PSBmYWxzZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuX2dldFhIUlByb21pc2UoZmFsc2UsIG9wdGlvbnMuY29udGV4dCwgYWJvcnRlZCkpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9jaHVua2VkVXBsb2FkKG9wdGlvbnMpIHx8ICQuYWpheChvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICApLmRvbmUoZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuX29uRG9uZShyZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9vbkZhaWwoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuYWx3YXlzKGZ1bmN0aW9uIChqcVhIUm9yUmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUm9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuX2RlaW5pdFByb2dyZXNzTGlzdGVuZXIob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9vbkFsd2F5cyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqcVhIUm9yUmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFJvckVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9zZW5kaW5nIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9hY3RpdmUgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmxpbWl0Q29uY3VycmVudFVwbG9hZHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5saW1pdENvbmN1cnJlbnRVcGxvYWRzID4gdGhhdC5fc2VuZGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBuZXh0IHF1ZXVlZCB1cGxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdCBoYXMgbm90IGJlZW4gYWJvcnRlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dFNsb3QgPSB0aGF0Ll9zbG90cy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChuZXh0U2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5fZ2V0RGVmZXJyZWRTdGF0ZShuZXh0U2xvdCkgPT09ICdwZW5kaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNsb3QucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNsb3QgPSB0aGF0Ll9zbG90cy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGF0Ll9hY3RpdmUgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgc3RvcCBjYWxsYmFjayBpcyB0cmlnZ2VyZWQgd2hlbiBhbGwgdXBsb2FkcyBoYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmVlbiBjb21wbGV0ZWQsIGVxdWl2YWxlbnQgdG8gdGhlIGdsb2JhbCBhamF4U3RvcCBldmVudDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll90cmlnZ2VyKCdzdG9wJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ganFYSFI7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuX2JlZm9yZVNlbmQoZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNlcXVlbnRpYWxVcGxvYWRzIHx8XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm9wdGlvbnMubGltaXRDb25jdXJyZW50VXBsb2FkcyAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubGltaXRDb25jdXJyZW50VXBsb2FkcyA8PSB0aGlzLl9zZW5kaW5nKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubGltaXRDb25jdXJyZW50VXBsb2FkcyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdCA9ICQuRGVmZXJyZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2xvdHMucHVzaChzbG90KTtcbiAgICAgICAgICAgICAgICAgICAgcGlwZSA9IHNsb3QudGhlbihzZW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zZXF1ZW5jZSA9IHRoaXMuX3NlcXVlbmNlLnRoZW4oc2VuZCwgc2VuZCk7XG4gICAgICAgICAgICAgICAgICAgIHBpcGUgPSB0aGlzLl9zZXF1ZW5jZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBwaXBlZCBQcm9taXNlIG9iamVjdCwgZW5oYW5jZWQgd2l0aCBhbiBhYm9ydCBtZXRob2QsXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgZGVsZWdhdGVkIHRvIHRoZSBqcVhIUiBvYmplY3Qgb2YgdGhlIGN1cnJlbnQgdXBsb2FkLFxuICAgICAgICAgICAgICAgIC8vIGFuZCBqcVhIUiBjYWxsYmFja3MgbWFwcGVkIHRvIHRoZSBlcXVpdmFsZW50IFByb21pc2UgbWV0aG9kczpcbiAgICAgICAgICAgICAgICBwaXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBhYm9ydGVkID0gW3VuZGVmaW5lZCwgJ2Fib3J0JywgJ2Fib3J0J107XG4gICAgICAgICAgICAgICAgICAgIGlmICghanFYSFIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC5yZWplY3RXaXRoKG9wdGlvbnMuY29udGV4dCwgYWJvcnRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VuZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqcVhIUi5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VuaGFuY2VQcm9taXNlKHBpcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlbmQoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfb25BZGQ6IGZ1bmN0aW9uIChlLCBkYXRhKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgZGF0YSksXG4gICAgICAgICAgICAgICAgZmlsZXMgPSBkYXRhLmZpbGVzLFxuICAgICAgICAgICAgICAgIGZpbGVzTGVuZ3RoID0gZmlsZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGxpbWl0ID0gb3B0aW9ucy5saW1pdE11bHRpRmlsZVVwbG9hZHMsXG4gICAgICAgICAgICAgICAgbGltaXRTaXplID0gb3B0aW9ucy5saW1pdE11bHRpRmlsZVVwbG9hZFNpemUsXG4gICAgICAgICAgICAgICAgb3ZlcmhlYWQgPSBvcHRpb25zLmxpbWl0TXVsdGlGaWxlVXBsb2FkU2l6ZU92ZXJoZWFkLFxuICAgICAgICAgICAgICAgIGJhdGNoU2l6ZSA9IDAsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lID0gdGhpcy5fZ2V0UGFyYW1OYW1lKG9wdGlvbnMpLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZVNldCxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWVTbGljZSxcbiAgICAgICAgICAgICAgICBmaWxlU2V0LFxuICAgICAgICAgICAgICAgIGksXG4gICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICBpZiAoIWZpbGVzTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxpbWl0U2l6ZSAmJiBmaWxlc1swXS5zaXplID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBsaW1pdFNpemUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShvcHRpb25zLnNpbmdsZUZpbGVVcGxvYWRzIHx8IGxpbWl0IHx8IGxpbWl0U2l6ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgIXRoaXMuX2lzWEhSVXBsb2FkKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgZmlsZVNldCA9IFtmaWxlc107XG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lU2V0ID0gW3BhcmFtTmFtZV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCEob3B0aW9ucy5zaW5nbGVGaWxlVXBsb2FkcyB8fCBsaW1pdFNpemUpICYmIGxpbWl0KSB7XG4gICAgICAgICAgICAgICAgZmlsZVNldCA9IFtdO1xuICAgICAgICAgICAgICAgIHBhcmFtTmFtZVNldCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBmaWxlc0xlbmd0aDsgaSArPSBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBmaWxlU2V0LnB1c2goZmlsZXMuc2xpY2UoaSwgaSArIGxpbWl0KSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZVNsaWNlID0gcGFyYW1OYW1lLnNsaWNlKGksIGkgKyBsaW1pdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyYW1OYW1lU2xpY2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWVTbGljZSA9IHBhcmFtTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWVTZXQucHVzaChwYXJhbU5hbWVTbGljZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICghb3B0aW9ucy5zaW5nbGVGaWxlVXBsb2FkcyAmJiBsaW1pdFNpemUpIHtcbiAgICAgICAgICAgICAgICBmaWxlU2V0ID0gW107XG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lU2V0ID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGZpbGVzTGVuZ3RoOyBpID0gaSArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYmF0Y2hTaXplICs9IGZpbGVzW2ldLnNpemUgKyBvdmVyaGVhZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgKyAxID09PSBmaWxlc0xlbmd0aCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoYmF0Y2hTaXplICsgZmlsZXNbaSArIDFdLnNpemUgKyBvdmVyaGVhZCkgPiBsaW1pdFNpemUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxpbWl0ICYmIGkgKyAxIC0gaiA+PSBsaW1pdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVTZXQucHVzaChmaWxlcy5zbGljZShqLCBpICsgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lU2xpY2UgPSBwYXJhbU5hbWUuc2xpY2UoaiwgaSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJhbU5hbWVTbGljZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWVTbGljZSA9IHBhcmFtTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZVNldC5wdXNoKHBhcmFtTmFtZVNsaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoU2l6ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtTmFtZVNldCA9IHBhcmFtTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEub3JpZ2luYWxGaWxlcyA9IGZpbGVzO1xuICAgICAgICAgICAgJC5lYWNoKGZpbGVTZXQgfHwgZmlsZXMsIGZ1bmN0aW9uIChpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdEYXRhID0gJC5leHRlbmQoe30sIGRhdGEpO1xuICAgICAgICAgICAgICAgIG5ld0RhdGEuZmlsZXMgPSBmaWxlU2V0ID8gZWxlbWVudCA6IFtlbGVtZW50XTtcbiAgICAgICAgICAgICAgICBuZXdEYXRhLnBhcmFtTmFtZSA9IHBhcmFtTmFtZVNldFtpbmRleF07XG4gICAgICAgICAgICAgICAgdGhhdC5faW5pdFJlc3BvbnNlT2JqZWN0KG5ld0RhdGEpO1xuICAgICAgICAgICAgICAgIHRoYXQuX2luaXRQcm9ncmVzc09iamVjdChuZXdEYXRhKTtcbiAgICAgICAgICAgICAgICB0aGF0Ll9hZGRDb252ZW5pZW5jZU1ldGhvZHMoZSwgbmV3RGF0YSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhhdC5fdHJpZ2dlcihcbiAgICAgICAgICAgICAgICAgICAgJ2FkZCcsXG4gICAgICAgICAgICAgICAgICAgICQuRXZlbnQoJ2FkZCcsIHtkZWxlZ2F0ZWRFdmVudDogZX0pLFxuICAgICAgICAgICAgICAgICAgICBuZXdEYXRhXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuXG4gICAgICAgIF9yZXBsYWNlRmlsZUlucHV0OiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gZGF0YS5maWxlSW5wdXQsXG4gICAgICAgICAgICAgICAgaW5wdXRDbG9uZSA9IGlucHV0LmNsb25lKHRydWUpLFxuICAgICAgICAgICAgICAgIHJlc3RvcmVGb2N1cyA9IGlucHV0LmlzKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgLy8gQWRkIGEgcmVmZXJlbmNlIGZvciB0aGUgbmV3IGNsb25lZCBmaWxlIGlucHV0IHRvIHRoZSBkYXRhIGFyZ3VtZW50OlxuICAgICAgICAgICAgZGF0YS5maWxlSW5wdXRDbG9uZSA9IGlucHV0Q2xvbmU7XG4gICAgICAgICAgICAkKCc8Zm9ybT48L2Zvcm0+JykuYXBwZW5kKGlucHV0Q2xvbmUpWzBdLnJlc2V0KCk7XG4gICAgICAgICAgICAvLyBEZXRhY2hpbmcgYWxsb3dzIHRvIGluc2VydCB0aGUgZmlsZUlucHV0IG9uIGFub3RoZXIgZm9ybVxuICAgICAgICAgICAgLy8gd2l0aG91dCBsb29zaW5nIHRoZSBmaWxlIGlucHV0IHZhbHVlOlxuICAgICAgICAgICAgaW5wdXQuYWZ0ZXIoaW5wdXRDbG9uZSkuZGV0YWNoKCk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZmlsZUlucHV0IGhhZCBmb2N1cyBiZWZvcmUgaXQgd2FzIGRldGFjaGVkLFxuICAgICAgICAgICAgLy8gcmVzdG9yZSBmb2N1cyB0byB0aGUgaW5wdXRDbG9uZS5cbiAgICAgICAgICAgIGlmIChyZXN0b3JlRm9jdXMpIHtcbiAgICAgICAgICAgICAgICBpbnB1dENsb25lLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBdm9pZCBtZW1vcnkgbGVha3Mgd2l0aCB0aGUgZGV0YWNoZWQgZmlsZSBpbnB1dDpcbiAgICAgICAgICAgICQuY2xlYW5EYXRhKGlucHV0LnVuYmluZCgncmVtb3ZlJykpO1xuICAgICAgICAgICAgLy8gUmVwbGFjZSB0aGUgb3JpZ2luYWwgZmlsZSBpbnB1dCBlbGVtZW50IGluIHRoZSBmaWxlSW5wdXRcbiAgICAgICAgICAgIC8vIGVsZW1lbnRzIHNldCB3aXRoIHRoZSBjbG9uZSwgd2hpY2ggaGFzIGJlZW4gY29waWVkIGluY2x1ZGluZ1xuICAgICAgICAgICAgLy8gZXZlbnQgaGFuZGxlcnM6XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuZmlsZUlucHV0ID0gdGhpcy5vcHRpb25zLmZpbGVJbnB1dC5tYXAoZnVuY3Rpb24gKGksIGVsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsID09PSBpbnB1dFswXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXRDbG9uZVswXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgd2lkZ2V0IGhhcyBiZWVuIGluaXRpYWxpemVkIG9uIHRoZSBmaWxlIGlucHV0IGl0c2VsZixcbiAgICAgICAgICAgIC8vIG92ZXJyaWRlIHRoaXMuZWxlbWVudCB3aXRoIHRoZSBmaWxlIGlucHV0IGNsb25lOlxuICAgICAgICAgICAgaWYgKGlucHV0WzBdID09PSB0aGlzLmVsZW1lbnRbMF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBpbnB1dENsb25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9oYW5kbGVGaWxlVHJlZUVudHJ5OiBmdW5jdGlvbiAoZW50cnksIHBhdGgpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICBkZmQgPSAkLkRlZmVycmVkKCksXG4gICAgICAgICAgICAgICAgZW50cmllcyA9IFtdLFxuICAgICAgICAgICAgICAgIGRpclJlYWRlcixcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZSAmJiAhZS5lbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5lbnRyeSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlICQud2hlbiByZXR1cm5zIGltbWVkaWF0ZWx5IGlmIG9uZVxuICAgICAgICAgICAgICAgICAgICAvLyBEZWZlcnJlZCBpcyByZWplY3RlZCwgd2UgdXNlIHJlc29sdmUgaW5zdGVhZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBhbGxvd3MgdmFsaWQgZmlsZXMgYW5kIGludmFsaWQgaXRlbXNcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYmUgcmV0dXJuZWQgdG9nZXRoZXIgaW4gb25lIHNldDpcbiAgICAgICAgICAgICAgICAgICAgZGZkLnJlc29sdmUoW2VdKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyID0gZnVuY3Rpb24gKGVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5faGFuZGxlRmlsZVRyZWVFbnRyaWVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cmllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggKyBlbnRyeS5uYW1lICsgJy8nXG4gICAgICAgICAgICAgICAgICAgICkuZG9uZShmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRmZC5yZXNvbHZlKGZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSkuZmFpbChlcnJvckhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVhZEVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpclJlYWRlci5yZWFkRW50cmllcyhmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NIYW5kbGVyKGVudHJpZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzID0gZW50cmllcy5jb25jYXQocmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgcGF0aCA9IHBhdGggfHwgJyc7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNGaWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5Ll9maWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIENocm9tZSBidWcgIzE0OTczNVxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5fZmlsZS5yZWxhdGl2ZVBhdGggPSBwYXRoO1xuICAgICAgICAgICAgICAgICAgICBkZmQucmVzb2x2ZShlbnRyeS5fZmlsZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuZmlsZShmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5yZWxhdGl2ZVBhdGggPSBwYXRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGZkLnJlc29sdmUoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9ySGFuZGxlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRyeS5pc0RpcmVjdG9yeSkge1xuICAgICAgICAgICAgICAgIGRpclJlYWRlciA9IGVudHJ5LmNyZWF0ZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgIHJlYWRFbnRyaWVzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBhbiBlbXB0eSBsaXN0IGZvciBmaWxlIHN5c3RlbSBpdGVtc1xuICAgICAgICAgICAgICAgIC8vIG90aGVyIHRoYW4gZmlsZXMgb3IgZGlyZWN0b3JpZXM6XG4gICAgICAgICAgICAgICAgZGZkLnJlc29sdmUoW10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRmZC5wcm9taXNlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2hhbmRsZUZpbGVUcmVlRW50cmllczogZnVuY3Rpb24gKGVudHJpZXMsIHBhdGgpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiAkLndoZW4uYXBwbHkoXG4gICAgICAgICAgICAgICAgJCxcbiAgICAgICAgICAgICAgICAkLm1hcChlbnRyaWVzLCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuX2hhbmRsZUZpbGVUcmVlRW50cnkoZW50cnksIHBhdGgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFxuICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9nZXREcm9wcGVkRmlsZXM6IGZ1bmN0aW9uIChkYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgIGRhdGFUcmFuc2ZlciA9IGRhdGFUcmFuc2ZlciB8fCB7fTtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IGRhdGFUcmFuc2Zlci5pdGVtcztcbiAgICAgICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggJiYgKGl0ZW1zWzBdLndlYmtpdEdldEFzRW50cnkgfHxcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbMF0uZ2V0QXNFbnRyeSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRmlsZVRyZWVFbnRyaWVzKFxuICAgICAgICAgICAgICAgICAgICAkLm1hcChpdGVtcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLndlYmtpdEdldEFzRW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeSA9IGl0ZW0ud2Via2l0R2V0QXNFbnRyeSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBDaHJvbWUgYnVnICMxNDk3MzU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5Ll9maWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZ2V0QXNFbnRyeSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJC5EZWZlcnJlZCgpLnJlc29sdmUoXG4gICAgICAgICAgICAgICAgJC5tYWtlQXJyYXkoZGF0YVRyYW5zZmVyLmZpbGVzKVxuICAgICAgICAgICAgKS5wcm9taXNlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2dldFNpbmdsZUZpbGVJbnB1dEZpbGVzOiBmdW5jdGlvbiAoZmlsZUlucHV0KSB7XG4gICAgICAgICAgICBmaWxlSW5wdXQgPSAkKGZpbGVJbnB1dCk7XG4gICAgICAgICAgICB2YXIgZW50cmllcyA9IGZpbGVJbnB1dC5wcm9wKCd3ZWJraXRFbnRyaWVzJykgfHxcbiAgICAgICAgICAgICAgICAgICAgZmlsZUlucHV0LnByb3AoJ2VudHJpZXMnKSxcbiAgICAgICAgICAgICAgICBmaWxlcyxcbiAgICAgICAgICAgICAgICB2YWx1ZTtcbiAgICAgICAgICAgIGlmIChlbnRyaWVzICYmIGVudHJpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUZpbGVUcmVlRW50cmllcyhlbnRyaWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbGVzID0gJC5tYWtlQXJyYXkoZmlsZUlucHV0LnByb3AoJ2ZpbGVzJykpO1xuICAgICAgICAgICAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGZpbGVJbnB1dC5wcm9wKCd2YWx1ZScpO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKFtdKS5wcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBmaWxlcyBwcm9wZXJ0eSBpcyBub3QgYXZhaWxhYmxlLCB0aGUgYnJvd3NlciBkb2VzIG5vdFxuICAgICAgICAgICAgICAgIC8vIHN1cHBvcnQgdGhlIEZpbGUgQVBJIGFuZCB3ZSBhZGQgYSBwc2V1ZG8gRmlsZSBvYmplY3Qgd2l0aFxuICAgICAgICAgICAgICAgIC8vIHRoZSBpbnB1dCB2YWx1ZSBhcyBuYW1lIHdpdGggcGF0aCBpbmZvcm1hdGlvbiByZW1vdmVkOlxuICAgICAgICAgICAgICAgIGZpbGVzID0gW3tuYW1lOiB2YWx1ZS5yZXBsYWNlKC9eLipcXFxcLywgJycpfV07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVzWzBdLm5hbWUgPT09IHVuZGVmaW5lZCAmJiBmaWxlc1swXS5maWxlTmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIEZpbGUgbm9ybWFsaXphdGlvbiBmb3IgU2FmYXJpIDQgYW5kIEZpcmVmb3ggMzpcbiAgICAgICAgICAgICAgICAkLmVhY2goZmlsZXMsIGZ1bmN0aW9uIChpbmRleCwgZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxlLm5hbWUgPSBmaWxlLmZpbGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICBmaWxlLnNpemUgPSBmaWxlLmZpbGVTaXplO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKGZpbGVzKS5wcm9taXNlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2dldEZpbGVJbnB1dEZpbGVzOiBmdW5jdGlvbiAoZmlsZUlucHV0KSB7XG4gICAgICAgICAgICBpZiAoIShmaWxlSW5wdXQgaW5zdGFuY2VvZiAkKSB8fCBmaWxlSW5wdXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldFNpbmdsZUZpbGVJbnB1dEZpbGVzKGZpbGVJbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJC53aGVuLmFwcGx5KFxuICAgICAgICAgICAgICAgICQsXG4gICAgICAgICAgICAgICAgJC5tYXAoZmlsZUlucHV0LCB0aGlzLl9nZXRTaW5nbGVGaWxlSW5wdXRGaWxlcylcbiAgICAgICAgICAgICkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX29uQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVJbnB1dDogJChlLnRhcmdldCksXG4gICAgICAgICAgICAgICAgICAgIGZvcm06ICQoZS50YXJnZXQuZm9ybSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5fZ2V0RmlsZUlucHV0RmlsZXMoZGF0YS5maWxlSW5wdXQpLmFsd2F5cyhmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmZpbGVzID0gZmlsZXM7XG4gICAgICAgICAgICAgICAgaWYgKHRoYXQub3B0aW9ucy5yZXBsYWNlRmlsZUlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuX3JlcGxhY2VGaWxlSW5wdXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGF0Ll90cmlnZ2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAkLkV2ZW50KCdjaGFuZ2UnLCB7ZGVsZWdhdGVkRXZlbnQ6IGV9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5fb25BZGQoZSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX29uUGFzdGU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBlLm9yaWdpbmFsRXZlbnQgJiYgZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgZS5vcmlnaW5hbEV2ZW50LmNsaXBib2FyZERhdGEuaXRlbXMsXG4gICAgICAgICAgICAgICAgZGF0YSA9IHtmaWxlczogW119O1xuICAgICAgICAgICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQuZWFjaChpdGVtcywgZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWxlID0gaXRlbS5nZXRBc0ZpbGUgJiYgaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90cmlnZ2VyKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bhc3RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICQuRXZlbnQoJ3Bhc3RlJywge2RlbGVnYXRlZEV2ZW50OiBlfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgICAgICkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29uQWRkKGUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfb25Ecm9wOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIgPSBlLm9yaWdpbmFsRXZlbnQgJiYgZS5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2ZlcjtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICBkYXRhVHJhbnNmZXIgPSBlLmRhdGFUcmFuc2ZlcixcbiAgICAgICAgICAgICAgICBkYXRhID0ge307XG4gICAgICAgICAgICBpZiAoZGF0YVRyYW5zZmVyICYmIGRhdGFUcmFuc2Zlci5maWxlcyAmJiBkYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2dldERyb3BwZWRGaWxlcyhkYXRhVHJhbnNmZXIpLmFsd2F5cyhmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5maWxlcyA9IGZpbGVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5fdHJpZ2dlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZHJvcCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJC5FdmVudCgnZHJvcCcsIHtkZWxlZ2F0ZWRFdmVudDogZX0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICkgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0Ll9vbkFkZChlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9vbkRyYWdPdmVyOiBnZXREcmFnSGFuZGxlcignZHJhZ292ZXInKSxcblxuICAgICAgICBfb25EcmFnRW50ZXI6IGdldERyYWdIYW5kbGVyKCdkcmFnZW50ZXInKSxcblxuICAgICAgICBfb25EcmFnTGVhdmU6IGdldERyYWdIYW5kbGVyKCdkcmFnbGVhdmUnKSxcblxuICAgICAgICBfaW5pdEV2ZW50SGFuZGxlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1hIUlVwbG9hZCh0aGlzLm9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb24odGhpcy5vcHRpb25zLmRyb3Bab25lLCB7XG4gICAgICAgICAgICAgICAgICAgIGRyYWdvdmVyOiB0aGlzLl9vbkRyYWdPdmVyLFxuICAgICAgICAgICAgICAgICAgICBkcm9wOiB0aGlzLl9vbkRyb3AsXG4gICAgICAgICAgICAgICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCkgb24gZHJhZ2VudGVyIGlzIHJlcXVpcmVkIGZvciBJRTEwKzpcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2VudGVyOiB0aGlzLl9vbkRyYWdFbnRlcixcbiAgICAgICAgICAgICAgICAgICAgLy8gZHJhZ2xlYXZlIGlzIG5vdCByZXF1aXJlZCwgYnV0IGFkZGVkIGZvciBjb21wbGV0ZW5lc3M6XG4gICAgICAgICAgICAgICAgICAgIGRyYWdsZWF2ZTogdGhpcy5fb25EcmFnTGVhdmVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbih0aGlzLm9wdGlvbnMucGFzdGVab25lLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3RlOiB0aGlzLl9vblBhc3RlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJC5zdXBwb3J0LmZpbGVJbnB1dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uKHRoaXMub3B0aW9ucy5maWxlSW5wdXQsIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiB0aGlzLl9vbkNoYW5nZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9kZXN0cm95RXZlbnRIYW5kbGVyczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fb2ZmKHRoaXMub3B0aW9ucy5kcm9wWm9uZSwgJ2RyYWdlbnRlciBkcmFnbGVhdmUgZHJhZ292ZXIgZHJvcCcpO1xuICAgICAgICAgICAgdGhpcy5fb2ZmKHRoaXMub3B0aW9ucy5wYXN0ZVpvbmUsICdwYXN0ZScpO1xuICAgICAgICAgICAgdGhpcy5fb2ZmKHRoaXMub3B0aW9ucy5maWxlSW5wdXQsICdjaGFuZ2UnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fZGVzdHJveUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfc2V0T3B0aW9uOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHJlaW5pdCA9ICQuaW5BcnJheShrZXksIHRoaXMuX3NwZWNpYWxPcHRpb25zKSAhPT0gLTE7XG4gICAgICAgICAgICBpZiAocmVpbml0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGVzdHJveUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3N1cGVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgaWYgKHJlaW5pdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRTcGVjaWFsT3B0aW9ucygpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2luaXRTcGVjaWFsT3B0aW9uczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5maWxlSW5wdXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmlsZUlucHV0ID0gdGhpcy5lbGVtZW50LmlzKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA6IHRoaXMuZWxlbWVudC5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghKG9wdGlvbnMuZmlsZUlucHV0IGluc3RhbmNlb2YgJCkpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZpbGVJbnB1dCA9ICQob3B0aW9ucy5maWxlSW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEob3B0aW9ucy5kcm9wWm9uZSBpbnN0YW5jZW9mICQpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5kcm9wWm9uZSA9ICQob3B0aW9ucy5kcm9wWm9uZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShvcHRpb25zLnBhc3RlWm9uZSBpbnN0YW5jZW9mICQpKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5wYXN0ZVpvbmUgPSAkKG9wdGlvbnMucGFzdGVab25lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfZ2V0UmVnRXhwOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSBzdHIuc3BsaXQoJy8nKSxcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMgPSBwYXJ0cy5wb3AoKTtcbiAgICAgICAgICAgIHBhcnRzLnNoaWZ0KCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChwYXJ0cy5qb2luKCcvJyksIG1vZGlmaWVycyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2lzUmVnRXhwT3B0aW9uOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSAhPT0gJ3VybCcgJiYgJC50eXBlKHZhbHVlKSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgICAgICAgICAvXlxcLy4qXFwvW2lnbV17MCwzfSQvLnRlc3QodmFsdWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9pbml0RGF0YUF0dHJpYnV0ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmVsZW1lbnQuZGF0YSgpO1xuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZSBvcHRpb25zIHNldCB2aWEgSFRNTDUgZGF0YS1hdHRyaWJ1dGVzOlxuICAgICAgICAgICAgJC5lYWNoKFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFswXS5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpbmRleCwgYXR0cikge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gYXR0ci5uYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKC9eZGF0YS0vLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCBoeXBoZW4tYXRlZCBrZXkgdG8gY2FtZWxDYXNlOlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnNsaWNlKDUpLnJlcGxhY2UoLy1bYS16XS9nLCBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5jaGFyQXQoMSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5faXNSZWdFeHBPcHRpb24oa2V5LCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoYXQuX2dldFJlZ0V4cCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2NyZWF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5faW5pdERhdGFBdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICB0aGlzLl9pbml0U3BlY2lhbE9wdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuX3Nsb3RzID0gW107XG4gICAgICAgICAgICB0aGlzLl9zZXF1ZW5jZSA9IHRoaXMuX2dldFhIUlByb21pc2UodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl9zZW5kaW5nID0gdGhpcy5fYWN0aXZlID0gMDtcbiAgICAgICAgICAgIHRoaXMuX2luaXRQcm9ncmVzc09iamVjdCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgZXhwb3NlZCB0byB0aGUgd2lkZ2V0IEFQSSBhbmQgYWxsb3dzIHRvIHF1ZXJ5XG4gICAgICAgIC8vIHRoZSBudW1iZXIgb2YgYWN0aXZlIHVwbG9hZHM6XG4gICAgICAgIGFjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBUaGlzIG1ldGhvZCBpcyBleHBvc2VkIHRvIHRoZSB3aWRnZXQgQVBJIGFuZCBhbGxvd3MgdG8gcXVlcnlcbiAgICAgICAgLy8gdGhlIHdpZGdldCB1cGxvYWQgcHJvZ3Jlc3MuXG4gICAgICAgIC8vIEl0IHJldHVybnMgYW4gb2JqZWN0IHdpdGggbG9hZGVkLCB0b3RhbCBhbmQgYml0cmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIGZvciB0aGUgcnVubmluZyB1cGxvYWRzOlxuICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGlzIGV4cG9zZWQgdG8gdGhlIHdpZGdldCBBUEkgYW5kIGFsbG93cyBhZGRpbmcgZmlsZXNcbiAgICAgICAgLy8gdXNpbmcgdGhlIGZpbGV1cGxvYWQgQVBJLiBUaGUgZGF0YSBwYXJhbWV0ZXIgYWNjZXB0cyBhbiBvYmplY3Qgd2hpY2hcbiAgICAgICAgLy8gbXVzdCBoYXZlIGEgZmlsZXMgcHJvcGVydHkgYW5kIGNhbiBjb250YWluIGFkZGl0aW9uYWwgb3B0aW9uczpcbiAgICAgICAgLy8gLmZpbGV1cGxvYWQoJ2FkZCcsIHtmaWxlczogZmlsZXNMaXN0fSk7XG4gICAgICAgIGFkZDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghZGF0YSB8fCB0aGlzLm9wdGlvbnMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5maWxlSW5wdXQgJiYgIWRhdGEuZmlsZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRGaWxlSW5wdXRGaWxlcyhkYXRhLmZpbGVJbnB1dCkuYWx3YXlzKGZ1bmN0aW9uIChmaWxlcykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmZpbGVzID0gZmlsZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuX29uQWRkKG51bGwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhLmZpbGVzID0gJC5tYWtlQXJyYXkoZGF0YS5maWxlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25BZGQobnVsbCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgZXhwb3NlZCB0byB0aGUgd2lkZ2V0IEFQSSBhbmQgYWxsb3dzIHNlbmRpbmcgZmlsZXNcbiAgICAgICAgLy8gdXNpbmcgdGhlIGZpbGV1cGxvYWQgQVBJLiBUaGUgZGF0YSBwYXJhbWV0ZXIgYWNjZXB0cyBhbiBvYmplY3Qgd2hpY2hcbiAgICAgICAgLy8gbXVzdCBoYXZlIGEgZmlsZXMgb3IgZmlsZUlucHV0IHByb3BlcnR5IGFuZCBjYW4gY29udGFpbiBhZGRpdGlvbmFsIG9wdGlvbnM6XG4gICAgICAgIC8vIC5maWxldXBsb2FkKCdzZW5kJywge2ZpbGVzOiBmaWxlc0xpc3R9KTtcbiAgICAgICAgLy8gVGhlIG1ldGhvZCByZXR1cm5zIGEgUHJvbWlzZSBvYmplY3QgZm9yIHRoZSBmaWxlIHVwbG9hZCBjYWxsLlxuICAgICAgICBzZW5kOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEgJiYgIXRoaXMub3B0aW9ucy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmZpbGVJbnB1dCAmJiAhZGF0YS5maWxlcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZmQgPSAkLkRlZmVycmVkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGZkLnByb21pc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRlZDtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpxWEhSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpxWEhSLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZmQucmVqZWN0KG51bGwsICdhYm9ydCcsICdhYm9ydCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldEZpbGVJbnB1dEZpbGVzKGRhdGEuZmlsZUlucHV0KS5hbHdheXMoXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWJvcnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRmZC5yZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZpbGVzID0gZmlsZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIgPSB0aGF0Ll9vblNlbmQobnVsbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganFYSFIudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRmZC5yZXNvbHZlKHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZmQucmVqZWN0KGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZW5oYW5jZVByb21pc2UocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRhdGEuZmlsZXMgPSAkLm1ha2VBcnJheShkYXRhLmZpbGVzKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX29uU2VuZChudWxsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0WEhSUHJvbWlzZShmYWxzZSwgZGF0YSAmJiBkYXRhLmNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxufSkpO1xuIiwiLypcbiAqIGpRdWVyeSBJZnJhbWUgVHJhbnNwb3J0IFBsdWdpblxuICogaHR0cHM6Ly9naXRodWIuY29tL2JsdWVpbXAvalF1ZXJ5LUZpbGUtVXBsb2FkXG4gKlxuICogQ29weXJpZ2h0IDIwMTEsIFNlYmFzdGlhbiBUc2NoYW5cbiAqIGh0dHBzOi8vYmx1ZWltcC5uZXRcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XG4gKiBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICovXG5cbi8qIGdsb2JhbCBkZWZpbmUsIHJlcXVpcmUsIHdpbmRvdywgZG9jdW1lbnQsIEpTT04gKi9cblxuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIC8vIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBBTUQgbW9kdWxlOlxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gTm9kZS9Db21tb25KUzpcbiAgICAgICAgZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzOlxuICAgICAgICBmYWN0b3J5KHdpbmRvdy5qUXVlcnkpO1xuICAgIH1cbn0oZnVuY3Rpb24gKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvLyBIZWxwZXIgdmFyaWFibGUgdG8gY3JlYXRlIHVuaXF1ZSBuYW1lcyBmb3IgdGhlIHRyYW5zcG9ydCBpZnJhbWVzOlxuICAgIHZhciBjb3VudGVyID0gMCxcbiAgICAgICAganNvbkFQSSA9ICQsXG4gICAgICAgIGpzb25QYXJzZSA9ICdwYXJzZUpTT04nO1xuXG4gICAgaWYgKCdKU09OJyBpbiB3aW5kb3cgJiYgJ3BhcnNlJyBpbiBKU09OKSB7XG4gICAgICBqc29uQVBJID0gSlNPTjtcbiAgICAgIGpzb25QYXJzZSA9ICdwYXJzZSc7XG4gICAgfVxuXG4gICAgLy8gVGhlIGlmcmFtZSB0cmFuc3BvcnQgYWNjZXB0cyBmb3VyIGFkZGl0aW9uYWwgb3B0aW9uczpcbiAgICAvLyBvcHRpb25zLmZpbGVJbnB1dDogYSBqUXVlcnkgY29sbGVjdGlvbiBvZiBmaWxlIGlucHV0IGZpZWxkc1xuICAgIC8vIG9wdGlvbnMucGFyYW1OYW1lOiB0aGUgcGFyYW1ldGVyIG5hbWUgZm9yIHRoZSBmaWxlIGZvcm0gZGF0YSxcbiAgICAvLyAgb3ZlcnJpZGVzIHRoZSBuYW1lIHByb3BlcnR5IG9mIHRoZSBmaWxlIGlucHV0IGZpZWxkKHMpLFxuICAgIC8vICBjYW4gYmUgYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAgICAvLyBvcHRpb25zLmZvcm1EYXRhOiBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggbmFtZSBhbmQgdmFsdWUgcHJvcGVydGllcyxcbiAgICAvLyAgZXF1aXZhbGVudCB0byB0aGUgcmV0dXJuIGRhdGEgb2YgLnNlcmlhbGl6ZUFycmF5KCksIGUuZy46XG4gICAgLy8gIFt7bmFtZTogJ2EnLCB2YWx1ZTogMX0sIHtuYW1lOiAnYicsIHZhbHVlOiAyfV1cbiAgICAvLyBvcHRpb25zLmluaXRpYWxJZnJhbWVTcmM6IHRoZSBVUkwgb2YgdGhlIGluaXRpYWwgaWZyYW1lIHNyYyxcbiAgICAvLyAgYnkgZGVmYXVsdCBzZXQgdG8gXCJqYXZhc2NyaXB0OmZhbHNlO1wiXG4gICAgJC5hamF4VHJhbnNwb3J0KCdpZnJhbWUnLCBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5hc3luYykge1xuICAgICAgICAgICAgLy8gamF2YXNjcmlwdDpmYWxzZSBhcyBpbml0aWFsIGlmcmFtZSBzcmNcbiAgICAgICAgICAgIC8vIHByZXZlbnRzIHdhcm5pbmcgcG9wdXBzIG9uIEhUVFBTIGluIElFNjpcbiAgICAgICAgICAgIC8qanNoaW50IHNjcmlwdHVybDogdHJ1ZSAqL1xuICAgICAgICAgICAgdmFyIGluaXRpYWxJZnJhbWVTcmMgPSBvcHRpb25zLmluaXRpYWxJZnJhbWVTcmMgfHwgJ2phdmFzY3JpcHQ6ZmFsc2U7JyxcbiAgICAgICAgICAgIC8qanNoaW50IHNjcmlwdHVybDogZmFsc2UgKi9cbiAgICAgICAgICAgICAgICBmb3JtLFxuICAgICAgICAgICAgICAgIGlmcmFtZSxcbiAgICAgICAgICAgICAgICBhZGRQYXJhbUNoYXI7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNlbmQ6IGZ1bmN0aW9uIChfLCBjb21wbGV0ZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0gPSAkKCc8Zm9ybSBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L2Zvcm0+Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYXR0cignYWNjZXB0LWNoYXJzZXQnLCBvcHRpb25zLmZvcm1BY2NlcHRDaGFyc2V0KTtcbiAgICAgICAgICAgICAgICAgICAgYWRkUGFyYW1DaGFyID0gL1xcPy8udGVzdChvcHRpb25zLnVybCkgPyAnJicgOiAnPyc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFhEb21haW5SZXF1ZXN0IG9ubHkgc3VwcG9ydHMgR0VUIGFuZCBQT1NUOlxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy50eXBlID09PSAnREVMRVRFJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51cmwgPSBvcHRpb25zLnVybCArIGFkZFBhcmFtQ2hhciArICdfbWV0aG9kPURFTEVURSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGUgPSAnUE9TVCc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50eXBlID09PSAnUFVUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy51cmwgPSBvcHRpb25zLnVybCArIGFkZFBhcmFtQ2hhciArICdfbWV0aG9kPVBVVCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGUgPSAnUE9TVCc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy50eXBlID09PSAnUEFUQ0gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnVybCA9IG9wdGlvbnMudXJsICsgYWRkUGFyYW1DaGFyICsgJ19tZXRob2Q9UEFUQ0gnO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gJ1BPU1QnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIElFIHZlcnNpb25zIGJlbG93IElFOCBjYW5ub3Qgc2V0IHRoZSBuYW1lIHByb3BlcnR5IG9mXG4gICAgICAgICAgICAgICAgICAgIC8vIGVsZW1lbnRzIHRoYXQgaGF2ZSBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIERPTSxcbiAgICAgICAgICAgICAgICAgICAgLy8gc28gd2Ugc2V0IHRoZSBuYW1lIGFsb25nIHdpdGggdGhlIGlmcmFtZSBIVE1MIG1hcmt1cDpcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZnJhbWUgPSAkKFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxpZnJhbWUgc3JjPVwiJyArIGluaXRpYWxJZnJhbWVTcmMgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBuYW1lPVwiaWZyYW1lLXRyYW5zcG9ydC0nICsgY291bnRlciArICdcIj48L2lmcmFtZT4nXG4gICAgICAgICAgICAgICAgICAgICkuYmluZCgnbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWxlSW5wdXRDbG9uZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lcyA9ICQuaXNBcnJheShvcHRpb25zLnBhcmFtTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wYXJhbU5hbWUgOiBbb3B0aW9ucy5wYXJhbU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVuYmluZCgnbG9hZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJpbmQoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV3JhcCBpbiBhIHRyeS9jYXRjaCBibG9jayB0byBjYXRjaCBleGNlcHRpb25zIHRocm93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRyeWluZyB0byBhY2Nlc3MgY3Jvc3MtZG9tYWluIGlmcmFtZSBjb250ZW50czpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gaWZyYW1lLmNvbnRlbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHb29nbGUgQ2hyb21lIGFuZCBGaXJlZm94IGRvIG5vdCB0aHJvdyBhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9uIHdoZW4gY2FsbGluZyBpZnJhbWUuY29udGVudHMoKSBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3Jvc3MtZG9tYWluIHJlcXVlc3RzLCBzbyB3ZSB1bmlmeSB0aGUgcmVzcG9uc2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLmxlbmd0aCB8fCAhcmVzcG9uc2VbMF0uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgY29tcGxldGUgY2FsbGJhY2sgcmV0dXJucyB0aGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWZyYW1lIGNvbnRlbnQgZG9jdW1lbnQgYXMgcmVzcG9uc2Ugb2JqZWN0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZUNhbGxiYWNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeydpZnJhbWUnOiByZXNwb25zZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRml4IGZvciBJRSBlbmRsZXNzIHByb2dyZXNzIGJhciBhY3Rpdml0eSBidWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKGhhcHBlbnMgb24gZm9ybSBzdWJtaXRzIHRvIGlmcmFtZSB0YXJnZXRzKTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnPGlmcmFtZSBzcmM9XCInICsgaW5pdGlhbElmcmFtZVNyYyArICdcIj48L2lmcmFtZT4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGZvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmluZyB0aGUgZm9ybSBpbiBhIHNldFRpbWVvdXQgY2FsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3dzIENocm9tZSdzIGRldmVsb3BlciB0b29scyB0byBkaXNwbGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgcmVzcG9uc2UgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgndGFyZ2V0JywgaWZyYW1lLnByb3AoJ25hbWUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgnYWN0aW9uJywgb3B0aW9ucy51cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ21ldGhvZCcsIG9wdGlvbnMudHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5mb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZWFjaChvcHRpb25zLmZvcm1EYXRhLCBmdW5jdGlvbiAoaW5kZXgsIGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJzxpbnB1dCB0eXBlPVwiaGlkZGVuXCIvPicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgnbmFtZScsIGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsKGZpZWxkLnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKGZvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZmlsZUlucHV0ICYmIG9wdGlvbnMuZmlsZUlucHV0Lmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnR5cGUgPT09ICdQT1NUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVJbnB1dENsb25lcyA9IG9wdGlvbnMuZmlsZUlucHV0LmNsb25lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5zZXJ0IGEgY2xvbmUgZm9yIGVhY2ggZmlsZSBpbnB1dCBmaWVsZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmZpbGVJbnB1dC5hZnRlcihmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGVJbnB1dENsb25lc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMucGFyYW1OYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZmlsZUlucHV0LmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnByb3AoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZXNbaW5kZXhdIHx8IG9wdGlvbnMucGFyYW1OYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwZW5kaW5nIHRoZSBmaWxlIGlucHV0IGZpZWxkcyB0byB0aGUgaGlkZGVuIGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmVzIHRoZW0gZnJvbSB0aGVpciBvcmlnaW5hbCBsb2NhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQob3B0aW9ucy5maWxlSW5wdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9wKCdlbmN0eXBlJywgJ211bHRpcGFydC9mb3JtLWRhdGEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbmN0eXBlIG11c3QgYmUgc2V0IGFzIGVuY29kaW5nIGZvciBJRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2VuY29kaW5nJywgJ211bHRpcGFydC9mb3JtLWRhdGEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIEhUTUw1IGZvcm0gYXR0cmlidXRlIGZyb20gdGhlIGlucHV0KHMpOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZmlsZUlucHV0LnJlbW92ZUF0dHIoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbnNlcnQgdGhlIGZpbGUgaW5wdXQgZmllbGRzIGF0IHRoZWlyIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBieSByZXBsYWNpbmcgdGhlIGNsb25lcyB3aXRoIHRoZSBvcmlnaW5hbHM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZUlucHV0Q2xvbmVzICYmIGZpbGVJbnB1dENsb25lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmZpbGVJbnB1dC5lYWNoKGZ1bmN0aW9uIChpbmRleCwgaW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNsb25lID0gJChmaWxlSW5wdXRDbG9uZXNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgbmFtZSBhbmQgZm9ybSBwcm9wZXJ0aWVzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGlucHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb3AoJ25hbWUnLCBjbG9uZS5wcm9wKCduYW1lJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9ybScsIGNsb25lLmF0dHIoJ2Zvcm0nKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lLnJlcGxhY2VXaXRoKGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKGlmcmFtZSkuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBqYXZhc2NyaXB0OmZhbHNlIGFzIGlmcmFtZSBzcmMgYWJvcnRzIHRoZSByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgcHJldmVudHMgd2FybmluZyBwb3B1cHMgb24gSFRUUFMgaW4gSUU2LlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uY2F0IGlzIHVzZWQgdG8gYXZvaWQgdGhlIFwiU2NyaXB0IFVSTFwiIEpTTGludCBlcnJvcjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51bmJpbmQoJ2xvYWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9wKCdzcmMnLCBpbml0aWFsSWZyYW1lU3JjKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRoZSBpZnJhbWUgdHJhbnNwb3J0IHJldHVybnMgdGhlIGlmcmFtZSBjb250ZW50IGRvY3VtZW50IGFzIHJlc3BvbnNlLlxuICAgIC8vIFRoZSBmb2xsb3dpbmcgYWRkcyBjb252ZXJ0ZXJzIGZyb20gaWZyYW1lIHRvIHRleHQsIGpzb24sIGh0bWwsIHhtbFxuICAgIC8vIGFuZCBzY3JpcHQuXG4gICAgLy8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgQ29udGVudC1UeXBlIGZvciBKU09OIHJlc3BvbnNlcyBoYXMgdG8gYmUgdGV4dC9wbGFpblxuICAgIC8vIG9yIHRleHQvaHRtbCwgaWYgdGhlIGJyb3dzZXIgZG9lc24ndCBpbmNsdWRlIGFwcGxpY2F0aW9uL2pzb24gaW4gdGhlXG4gICAgLy8gQWNjZXB0IGhlYWRlciwgZWxzZSBJRSB3aWxsIHNob3cgYSBkb3dubG9hZCBkaWFsb2cuXG4gICAgLy8gVGhlIENvbnRlbnQtVHlwZSBmb3IgWE1MIHJlc3BvbnNlcyBvbiB0aGUgb3RoZXIgaGFuZCBoYXMgdG8gYmUgYWx3YXlzXG4gICAgLy8gYXBwbGljYXRpb24veG1sIG9yIHRleHQveG1sLCBzbyBJRSBwcm9wZXJseSBwYXJzZXMgdGhlIFhNTCByZXNwb25zZS5cbiAgICAvLyBTZWUgYWxzb1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ibHVlaW1wL2pRdWVyeS1GaWxlLVVwbG9hZC93aWtpL1NldHVwI2NvbnRlbnQtdHlwZS1uZWdvdGlhdGlvblxuICAgICQuYWpheFNldHVwKHtcbiAgICAgICAgY29udmVydGVyczoge1xuICAgICAgICAgICAgJ2lmcmFtZSB0ZXh0JzogZnVuY3Rpb24gKGlmcmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpZnJhbWUgJiYgJChpZnJhbWVbMF0uYm9keSkudGV4dCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdpZnJhbWUganNvbic6IGZ1bmN0aW9uIChpZnJhbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWZyYW1lICYmIGpzb25BUElbanNvblBhcnNlXSgkKGlmcmFtZVswXS5ib2R5KS50ZXh0KCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdpZnJhbWUgaHRtbCc6IGZ1bmN0aW9uIChpZnJhbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWZyYW1lICYmICQoaWZyYW1lWzBdLmJvZHkpLmh0bWwoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnaWZyYW1lIHhtbCc6IGZ1bmN0aW9uIChpZnJhbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgeG1sRG9jID0gaWZyYW1lICYmIGlmcmFtZVswXTtcbiAgICAgICAgICAgICAgICByZXR1cm4geG1sRG9jICYmICQuaXNYTUxEb2MoeG1sRG9jKSA/IHhtbERvYyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAkLnBhcnNlWE1MKCh4bWxEb2MuWE1MRG9jdW1lbnQgJiYgeG1sRG9jLlhNTERvY3VtZW50LnhtbCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHhtbERvYy5ib2R5KS5odG1sKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdpZnJhbWUgc2NyaXB0JzogZnVuY3Rpb24gKGlmcmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpZnJhbWUgJiYgJC5nbG9iYWxFdmFsKCQoaWZyYW1lWzBdLmJvZHkpLnRleHQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkpO1xuIiwiLyohIGpRdWVyeSBVSSAtIHYxLjEyLjErQ29tbW9uSlMgLSAyMDE4LTAyLTEwXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKiBJbmNsdWRlczogd2lkZ2V0LmpzXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yczsgTGljZW5zZWQgTUlUICovXG5cbihmdW5jdGlvbiggZmFjdG9yeSApIHtcbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoWyBcImpxdWVyeVwiIF0sIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIgKSB7XG5cbiAgICAvLyBOb2RlL0NvbW1vbkpTXG4gICAgZmFjdG9yeSggcmVxdWlyZSggXCJqcXVlcnlcIiApICk7XG4gIH0gZWxzZSB7XG5cbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBmYWN0b3J5KCBqUXVlcnkgKTtcbiAgfVxufShmdW5jdGlvbiggJCApIHtcblxuICAkLnVpID0gJC51aSB8fCB7fTtcblxuICB2YXIgdmVyc2lvbiA9ICQudWkudmVyc2lvbiA9IFwiMS4xMi4xXCI7XG5cblxuICAvKiFcbiAgICogalF1ZXJ5IFVJIFdpZGdldCAxLjEyLjFcbiAgICogaHR0cDovL2pxdWVyeXVpLmNvbVxuICAgKlxuICAgKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICAgKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gICAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAgICovXG5cbiAgLy8+PmxhYmVsOiBXaWRnZXRcbiAgLy8+Pmdyb3VwOiBDb3JlXG4gIC8vPj5kZXNjcmlwdGlvbjogUHJvdmlkZXMgYSBmYWN0b3J5IGZvciBjcmVhdGluZyBzdGF0ZWZ1bCB3aWRnZXRzIHdpdGggYSBjb21tb24gQVBJLlxuICAvLz4+ZG9jczogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20valF1ZXJ5LndpZGdldC9cbiAgLy8+PmRlbW9zOiBodHRwOi8vanF1ZXJ5dWkuY29tL3dpZGdldC9cblxuXG5cbiAgdmFyIHdpZGdldFV1aWQgPSAwO1xuICB2YXIgd2lkZ2V0U2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5cbiAgJC5jbGVhbkRhdGEgPSAoIGZ1bmN0aW9uKCBvcmlnICkge1xuICAgIHJldHVybiBmdW5jdGlvbiggZWxlbXMgKSB7XG4gICAgICB2YXIgZXZlbnRzLCBlbGVtLCBpO1xuICAgICAgZm9yICggaSA9IDA7ICggZWxlbSA9IGVsZW1zWyBpIF0gKSAhPSBudWxsOyBpKysgKSB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAvLyBPbmx5IHRyaWdnZXIgcmVtb3ZlIHdoZW4gbmVjZXNzYXJ5IHRvIHNhdmUgdGltZVxuICAgICAgICAgIGV2ZW50cyA9ICQuX2RhdGEoIGVsZW0sIFwiZXZlbnRzXCIgKTtcbiAgICAgICAgICBpZiAoIGV2ZW50cyAmJiBldmVudHMucmVtb3ZlICkge1xuICAgICAgICAgICAgJCggZWxlbSApLnRyaWdnZXJIYW5kbGVyKCBcInJlbW92ZVwiICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvODIzNVxuICAgICAgICB9IGNhdGNoICggZSApIHt9XG4gICAgICB9XG4gICAgICBvcmlnKCBlbGVtcyApO1xuICAgIH07XG4gIH0gKSggJC5jbGVhbkRhdGEgKTtcblxuICAkLndpZGdldCA9IGZ1bmN0aW9uKCBuYW1lLCBiYXNlLCBwcm90b3R5cGUgKSB7XG4gICAgdmFyIGV4aXN0aW5nQ29uc3RydWN0b3IsIGNvbnN0cnVjdG9yLCBiYXNlUHJvdG90eXBlO1xuXG4gICAgLy8gUHJveGllZFByb3RvdHlwZSBhbGxvd3MgdGhlIHByb3ZpZGVkIHByb3RvdHlwZSB0byByZW1haW4gdW5tb2RpZmllZFxuICAgIC8vIHNvIHRoYXQgaXQgY2FuIGJlIHVzZWQgYXMgYSBtaXhpbiBmb3IgbXVsdGlwbGUgd2lkZ2V0cyAoIzg4NzYpXG4gICAgdmFyIHByb3hpZWRQcm90b3R5cGUgPSB7fTtcblxuICAgIHZhciBuYW1lc3BhY2UgPSBuYW1lLnNwbGl0KCBcIi5cIiApWyAwIF07XG4gICAgbmFtZSA9IG5hbWUuc3BsaXQoIFwiLlwiIClbIDEgXTtcbiAgICB2YXIgZnVsbE5hbWUgPSBuYW1lc3BhY2UgKyBcIi1cIiArIG5hbWU7XG5cbiAgICBpZiAoICFwcm90b3R5cGUgKSB7XG4gICAgICBwcm90b3R5cGUgPSBiYXNlO1xuICAgICAgYmFzZSA9ICQuV2lkZ2V0O1xuICAgIH1cblxuICAgIGlmICggJC5pc0FycmF5KCBwcm90b3R5cGUgKSApIHtcbiAgICAgIHByb3RvdHlwZSA9ICQuZXh0ZW5kLmFwcGx5KCBudWxsLCBbIHt9IF0uY29uY2F0KCBwcm90b3R5cGUgKSApO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBzZWxlY3RvciBmb3IgcGx1Z2luXG4gICAgJC5leHByWyBcIjpcIiBdWyBmdWxsTmFtZS50b0xvd2VyQ2FzZSgpIF0gPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgIHJldHVybiAhISQuZGF0YSggZWxlbSwgZnVsbE5hbWUgKTtcbiAgICB9O1xuXG4gICAgJFsgbmFtZXNwYWNlIF0gPSAkWyBuYW1lc3BhY2UgXSB8fCB7fTtcbiAgICBleGlzdGluZ0NvbnN0cnVjdG9yID0gJFsgbmFtZXNwYWNlIF1bIG5hbWUgXTtcbiAgICBjb25zdHJ1Y3RvciA9ICRbIG5hbWVzcGFjZSBdWyBuYW1lIF0gPSBmdW5jdGlvbiggb3B0aW9ucywgZWxlbWVudCApIHtcblxuICAgICAgLy8gQWxsb3cgaW5zdGFudGlhdGlvbiB3aXRob3V0IFwibmV3XCIga2V5d29yZFxuICAgICAgaWYgKCAhdGhpcy5fY3JlYXRlV2lkZ2V0ICkge1xuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCBvcHRpb25zLCBlbGVtZW50ICk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCBpbml0aWFsaXppbmcgZm9yIHNpbXBsZSBpbmhlcml0YW5jZVxuICAgICAgLy8gbXVzdCB1c2UgXCJuZXdcIiBrZXl3b3JkICh0aGUgY29kZSBhYm92ZSBhbHdheXMgcGFzc2VzIGFyZ3MpXG4gICAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVdpZGdldCggb3B0aW9ucywgZWxlbWVudCApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeHRlbmQgd2l0aCB0aGUgZXhpc3RpbmcgY29uc3RydWN0b3IgdG8gY2Fycnkgb3ZlciBhbnkgc3RhdGljIHByb3BlcnRpZXNcbiAgICAkLmV4dGVuZCggY29uc3RydWN0b3IsIGV4aXN0aW5nQ29uc3RydWN0b3IsIHtcbiAgICAgIHZlcnNpb246IHByb3RvdHlwZS52ZXJzaW9uLFxuXG4gICAgICAvLyBDb3B5IHRoZSBvYmplY3QgdXNlZCB0byBjcmVhdGUgdGhlIHByb3RvdHlwZSBpbiBjYXNlIHdlIG5lZWQgdG9cbiAgICAgIC8vIHJlZGVmaW5lIHRoZSB3aWRnZXQgbGF0ZXJcbiAgICAgIF9wcm90bzogJC5leHRlbmQoIHt9LCBwcm90b3R5cGUgKSxcblxuICAgICAgLy8gVHJhY2sgd2lkZ2V0cyB0aGF0IGluaGVyaXQgZnJvbSB0aGlzIHdpZGdldCBpbiBjYXNlIHRoaXMgd2lkZ2V0IGlzXG4gICAgICAvLyByZWRlZmluZWQgYWZ0ZXIgYSB3aWRnZXQgaW5oZXJpdHMgZnJvbSBpdFxuICAgICAgX2NoaWxkQ29uc3RydWN0b3JzOiBbXVxuICAgIH0gKTtcblxuICAgIGJhc2VQcm90b3R5cGUgPSBuZXcgYmFzZSgpO1xuXG4gICAgLy8gV2UgbmVlZCB0byBtYWtlIHRoZSBvcHRpb25zIGhhc2ggYSBwcm9wZXJ0eSBkaXJlY3RseSBvbiB0aGUgbmV3IGluc3RhbmNlXG4gICAgLy8gb3RoZXJ3aXNlIHdlJ2xsIG1vZGlmeSB0aGUgb3B0aW9ucyBoYXNoIG9uIHRoZSBwcm90b3R5cGUgdGhhdCB3ZSdyZVxuICAgIC8vIGluaGVyaXRpbmcgZnJvbVxuICAgIGJhc2VQcm90b3R5cGUub3B0aW9ucyA9ICQud2lkZ2V0LmV4dGVuZCgge30sIGJhc2VQcm90b3R5cGUub3B0aW9ucyApO1xuICAgICQuZWFjaCggcHJvdG90eXBlLCBmdW5jdGlvbiggcHJvcCwgdmFsdWUgKSB7XG4gICAgICBpZiAoICEkLmlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG4gICAgICAgIHByb3hpZWRQcm90b3R5cGVbIHByb3AgXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwcm94aWVkUHJvdG90eXBlWyBwcm9wIF0gPSAoIGZ1bmN0aW9uKCkge1xuICAgICAgICBmdW5jdGlvbiBfc3VwZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIGJhc2UucHJvdG90eXBlWyBwcm9wIF0uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gX3N1cGVyQXBwbHkoIGFyZ3MgKSB7XG4gICAgICAgICAgcmV0dXJuIGJhc2UucHJvdG90eXBlWyBwcm9wIF0uYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgX19zdXBlciA9IHRoaXMuX3N1cGVyO1xuICAgICAgICAgIHZhciBfX3N1cGVyQXBwbHkgPSB0aGlzLl9zdXBlckFwcGx5O1xuICAgICAgICAgIHZhciByZXR1cm5WYWx1ZTtcblxuICAgICAgICAgIHRoaXMuX3N1cGVyID0gX3N1cGVyO1xuICAgICAgICAgIHRoaXMuX3N1cGVyQXBwbHkgPSBfc3VwZXJBcHBseTtcblxuICAgICAgICAgIHJldHVyblZhbHVlID0gdmFsdWUuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXG4gICAgICAgICAgdGhpcy5fc3VwZXIgPSBfX3N1cGVyO1xuICAgICAgICAgIHRoaXMuX3N1cGVyQXBwbHkgPSBfX3N1cGVyQXBwbHk7XG5cbiAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgICAgIH07XG4gICAgICB9ICkoKTtcbiAgICB9ICk7XG4gICAgY29uc3RydWN0b3IucHJvdG90eXBlID0gJC53aWRnZXQuZXh0ZW5kKCBiYXNlUHJvdG90eXBlLCB7XG5cbiAgICAgIC8vIFRPRE86IHJlbW92ZSBzdXBwb3J0IGZvciB3aWRnZXRFdmVudFByZWZpeFxuICAgICAgLy8gYWx3YXlzIHVzZSB0aGUgbmFtZSArIGEgY29sb24gYXMgdGhlIHByZWZpeCwgZS5nLiwgZHJhZ2dhYmxlOnN0YXJ0XG4gICAgICAvLyBkb24ndCBwcmVmaXggZm9yIHdpZGdldHMgdGhhdCBhcmVuJ3QgRE9NLWJhc2VkXG4gICAgICB3aWRnZXRFdmVudFByZWZpeDogZXhpc3RpbmdDb25zdHJ1Y3RvciA/ICggYmFzZVByb3RvdHlwZS53aWRnZXRFdmVudFByZWZpeCB8fCBuYW1lICkgOiBuYW1lXG4gICAgfSwgcHJveGllZFByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IGNvbnN0cnVjdG9yLFxuICAgICAgbmFtZXNwYWNlOiBuYW1lc3BhY2UsXG4gICAgICB3aWRnZXROYW1lOiBuYW1lLFxuICAgICAgd2lkZ2V0RnVsbE5hbWU6IGZ1bGxOYW1lXG4gICAgfSApO1xuXG4gICAgLy8gSWYgdGhpcyB3aWRnZXQgaXMgYmVpbmcgcmVkZWZpbmVkIHRoZW4gd2UgbmVlZCB0byBmaW5kIGFsbCB3aWRnZXRzIHRoYXRcbiAgICAvLyBhcmUgaW5oZXJpdGluZyBmcm9tIGl0IGFuZCByZWRlZmluZSBhbGwgb2YgdGhlbSBzbyB0aGF0IHRoZXkgaW5oZXJpdCBmcm9tXG4gICAgLy8gdGhlIG5ldyB2ZXJzaW9uIG9mIHRoaXMgd2lkZ2V0LiBXZSdyZSBlc3NlbnRpYWxseSB0cnlpbmcgdG8gcmVwbGFjZSBvbmVcbiAgICAvLyBsZXZlbCBpbiB0aGUgcHJvdG90eXBlIGNoYWluLlxuICAgIGlmICggZXhpc3RpbmdDb25zdHJ1Y3RvciApIHtcbiAgICAgICQuZWFjaCggZXhpc3RpbmdDb25zdHJ1Y3Rvci5fY2hpbGRDb25zdHJ1Y3RvcnMsIGZ1bmN0aW9uKCBpLCBjaGlsZCApIHtcbiAgICAgICAgdmFyIGNoaWxkUHJvdG90eXBlID0gY2hpbGQucHJvdG90eXBlO1xuXG4gICAgICAgIC8vIFJlZGVmaW5lIHRoZSBjaGlsZCB3aWRnZXQgdXNpbmcgdGhlIHNhbWUgcHJvdG90eXBlIHRoYXQgd2FzXG4gICAgICAgIC8vIG9yaWdpbmFsbHkgdXNlZCwgYnV0IGluaGVyaXQgZnJvbSB0aGUgbmV3IHZlcnNpb24gb2YgdGhlIGJhc2VcbiAgICAgICAgJC53aWRnZXQoIGNoaWxkUHJvdG90eXBlLm5hbWVzcGFjZSArIFwiLlwiICsgY2hpbGRQcm90b3R5cGUud2lkZ2V0TmFtZSwgY29uc3RydWN0b3IsXG4gICAgICAgICAgY2hpbGQuX3Byb3RvICk7XG4gICAgICB9ICk7XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgbGlzdCBvZiBleGlzdGluZyBjaGlsZCBjb25zdHJ1Y3RvcnMgZnJvbSB0aGUgb2xkIGNvbnN0cnVjdG9yXG4gICAgICAvLyBzbyB0aGUgb2xkIGNoaWxkIGNvbnN0cnVjdG9ycyBjYW4gYmUgZ2FyYmFnZSBjb2xsZWN0ZWRcbiAgICAgIGRlbGV0ZSBleGlzdGluZ0NvbnN0cnVjdG9yLl9jaGlsZENvbnN0cnVjdG9ycztcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZS5fY2hpbGRDb25zdHJ1Y3RvcnMucHVzaCggY29uc3RydWN0b3IgKTtcbiAgICB9XG5cbiAgICAkLndpZGdldC5icmlkZ2UoIG5hbWUsIGNvbnN0cnVjdG9yICk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH07XG5cbiAgJC53aWRnZXQuZXh0ZW5kID0gZnVuY3Rpb24oIHRhcmdldCApIHtcbiAgICB2YXIgaW5wdXQgPSB3aWRnZXRTbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKTtcbiAgICB2YXIgaW5wdXRJbmRleCA9IDA7XG4gICAgdmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgIHZhciBrZXk7XG4gICAgdmFyIHZhbHVlO1xuXG4gICAgZm9yICggOyBpbnB1dEluZGV4IDwgaW5wdXRMZW5ndGg7IGlucHV0SW5kZXgrKyApIHtcbiAgICAgIGZvciAoIGtleSBpbiBpbnB1dFsgaW5wdXRJbmRleCBdICkge1xuICAgICAgICB2YWx1ZSA9IGlucHV0WyBpbnB1dEluZGV4IF1bIGtleSBdO1xuICAgICAgICBpZiAoIGlucHV0WyBpbnB1dEluZGV4IF0uaGFzT3duUHJvcGVydHkoIGtleSApICYmIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cbiAgICAgICAgICAvLyBDbG9uZSBvYmplY3RzXG4gICAgICAgICAgaWYgKCAkLmlzUGxhaW5PYmplY3QoIHZhbHVlICkgKSB7XG4gICAgICAgICAgICB0YXJnZXRbIGtleSBdID0gJC5pc1BsYWluT2JqZWN0KCB0YXJnZXRbIGtleSBdICkgP1xuICAgICAgICAgICAgICAkLndpZGdldC5leHRlbmQoIHt9LCB0YXJnZXRbIGtleSBdLCB2YWx1ZSApIDpcblxuICAgICAgICAgICAgICAvLyBEb24ndCBleHRlbmQgc3RyaW5ncywgYXJyYXlzLCBldGMuIHdpdGggb2JqZWN0c1xuICAgICAgICAgICAgICAkLndpZGdldC5leHRlbmQoIHt9LCB2YWx1ZSApO1xuXG4gICAgICAgICAgICAvLyBDb3B5IGV2ZXJ5dGhpbmcgZWxzZSBieSByZWZlcmVuY2VcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0WyBrZXkgXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gICQud2lkZ2V0LmJyaWRnZSA9IGZ1bmN0aW9uKCBuYW1lLCBvYmplY3QgKSB7XG4gICAgdmFyIGZ1bGxOYW1lID0gb2JqZWN0LnByb3RvdHlwZS53aWRnZXRGdWxsTmFtZSB8fCBuYW1lO1xuICAgICQuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuICAgICAgdmFyIGlzTWV0aG9kQ2FsbCA9IHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiO1xuICAgICAgdmFyIGFyZ3MgPSB3aWRnZXRTbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKTtcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHRoaXM7XG5cbiAgICAgIGlmICggaXNNZXRob2RDYWxsICkge1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgYW4gZW1wdHkgY29sbGVjdGlvbiwgd2UgbmVlZCB0byBoYXZlIHRoZSBpbnN0YW5jZSBtZXRob2RcbiAgICAgICAgLy8gcmV0dXJuIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHRoZSBqUXVlcnkgaW5zdGFuY2VcbiAgICAgICAgaWYgKCAhdGhpcy5sZW5ndGggJiYgb3B0aW9ucyA9PT0gXCJpbnN0YW5jZVwiICkge1xuICAgICAgICAgIHJldHVyblZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgbWV0aG9kVmFsdWU7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSAkLmRhdGEoIHRoaXMsIGZ1bGxOYW1lICk7XG5cbiAgICAgICAgICAgIGlmICggb3B0aW9ucyA9PT0gXCJpbnN0YW5jZVwiICkge1xuICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGluc3RhbmNlO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICggIWluc3RhbmNlICkge1xuICAgICAgICAgICAgICByZXR1cm4gJC5lcnJvciggXCJjYW5ub3QgY2FsbCBtZXRob2RzIG9uIFwiICsgbmFtZSArXG4gICAgICAgICAgICAgICAgXCIgcHJpb3IgdG8gaW5pdGlhbGl6YXRpb247IFwiICtcbiAgICAgICAgICAgICAgICBcImF0dGVtcHRlZCB0byBjYWxsIG1ldGhvZCAnXCIgKyBvcHRpb25zICsgXCInXCIgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCAhJC5pc0Z1bmN0aW9uKCBpbnN0YW5jZVsgb3B0aW9ucyBdICkgfHwgb3B0aW9ucy5jaGFyQXQoIDAgKSA9PT0gXCJfXCIgKSB7XG4gICAgICAgICAgICAgIHJldHVybiAkLmVycm9yKCBcIm5vIHN1Y2ggbWV0aG9kICdcIiArIG9wdGlvbnMgKyBcIicgZm9yIFwiICsgbmFtZSArXG4gICAgICAgICAgICAgICAgXCIgd2lkZ2V0IGluc3RhbmNlXCIgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWV0aG9kVmFsdWUgPSBpbnN0YW5jZVsgb3B0aW9ucyBdLmFwcGx5KCBpbnN0YW5jZSwgYXJncyApO1xuXG4gICAgICAgICAgICBpZiAoIG1ldGhvZFZhbHVlICE9PSBpbnN0YW5jZSAmJiBtZXRob2RWYWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IG1ldGhvZFZhbHVlICYmIG1ldGhvZFZhbHVlLmpxdWVyeSA/XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUucHVzaFN0YWNrKCBtZXRob2RWYWx1ZS5nZXQoKSApIDpcbiAgICAgICAgICAgICAgICBtZXRob2RWYWx1ZTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICAvLyBBbGxvdyBtdWx0aXBsZSBoYXNoZXMgdG8gYmUgcGFzc2VkIG9uIGluaXRcbiAgICAgICAgaWYgKCBhcmdzLmxlbmd0aCApIHtcbiAgICAgICAgICBvcHRpb25zID0gJC53aWRnZXQuZXh0ZW5kLmFwcGx5KCBudWxsLCBbIG9wdGlvbnMgXS5jb25jYXQoIGFyZ3MgKSApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgaW5zdGFuY2UgPSAkLmRhdGEoIHRoaXMsIGZ1bGxOYW1lICk7XG4gICAgICAgICAgaWYgKCBpbnN0YW5jZSApIHtcbiAgICAgICAgICAgIGluc3RhbmNlLm9wdGlvbiggb3B0aW9ucyB8fCB7fSApO1xuICAgICAgICAgICAgaWYgKCBpbnN0YW5jZS5faW5pdCApIHtcbiAgICAgICAgICAgICAgaW5zdGFuY2UuX2luaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJC5kYXRhKCB0aGlzLCBmdWxsTmFtZSwgbmV3IG9iamVjdCggb3B0aW9ucywgdGhpcyApICk7XG4gICAgICAgICAgfVxuICAgICAgICB9ICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9O1xuICB9O1xuXG4gICQuV2lkZ2V0ID0gZnVuY3Rpb24oIC8qIG9wdGlvbnMsIGVsZW1lbnQgKi8gKSB7fTtcbiAgJC5XaWRnZXQuX2NoaWxkQ29uc3RydWN0b3JzID0gW107XG5cbiAgJC5XaWRnZXQucHJvdG90eXBlID0ge1xuICAgIHdpZGdldE5hbWU6IFwid2lkZ2V0XCIsXG4gICAgd2lkZ2V0RXZlbnRQcmVmaXg6IFwiXCIsXG4gICAgZGVmYXVsdEVsZW1lbnQ6IFwiPGRpdj5cIixcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGNsYXNzZXM6IHt9LFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuXG4gICAgICAvLyBDYWxsYmFja3NcbiAgICAgIGNyZWF0ZTogbnVsbFxuICAgIH0sXG5cbiAgICBfY3JlYXRlV2lkZ2V0OiBmdW5jdGlvbiggb3B0aW9ucywgZWxlbWVudCApIHtcbiAgICAgIGVsZW1lbnQgPSAkKCBlbGVtZW50IHx8IHRoaXMuZGVmYXVsdEVsZW1lbnQgfHwgdGhpcyApWyAwIF07XG4gICAgICB0aGlzLmVsZW1lbnQgPSAkKCBlbGVtZW50ICk7XG4gICAgICB0aGlzLnV1aWQgPSB3aWRnZXRVdWlkKys7XG4gICAgICB0aGlzLmV2ZW50TmFtZXNwYWNlID0gXCIuXCIgKyB0aGlzLndpZGdldE5hbWUgKyB0aGlzLnV1aWQ7XG5cbiAgICAgIHRoaXMuYmluZGluZ3MgPSAkKCk7XG4gICAgICB0aGlzLmhvdmVyYWJsZSA9ICQoKTtcbiAgICAgIHRoaXMuZm9jdXNhYmxlID0gJCgpO1xuICAgICAgdGhpcy5jbGFzc2VzRWxlbWVudExvb2t1cCA9IHt9O1xuXG4gICAgICBpZiAoIGVsZW1lbnQgIT09IHRoaXMgKSB7XG4gICAgICAgICQuZGF0YSggZWxlbWVudCwgdGhpcy53aWRnZXRGdWxsTmFtZSwgdGhpcyApO1xuICAgICAgICB0aGlzLl9vbiggdHJ1ZSwgdGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICAgICAgICBpZiAoIGV2ZW50LnRhcmdldCA9PT0gZWxlbWVudCApIHtcbiAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9ICk7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQgPSAkKCBlbGVtZW50LnN0eWxlID9cblxuICAgICAgICAgIC8vIEVsZW1lbnQgd2l0aGluIHRoZSBkb2N1bWVudFxuICAgICAgICAgIGVsZW1lbnQub3duZXJEb2N1bWVudCA6XG5cbiAgICAgICAgICAvLyBFbGVtZW50IGlzIHdpbmRvdyBvciBkb2N1bWVudFxuICAgICAgICAgIGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudCApO1xuICAgICAgICB0aGlzLndpbmRvdyA9ICQoIHRoaXMuZG9jdW1lbnRbIDAgXS5kZWZhdWx0VmlldyB8fCB0aGlzLmRvY3VtZW50WyAwIF0ucGFyZW50V2luZG93ICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3B0aW9ucyA9ICQud2lkZ2V0LmV4dGVuZCgge30sXG4gICAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgICAgdGhpcy5fZ2V0Q3JlYXRlT3B0aW9ucygpLFxuICAgICAgICBvcHRpb25zICk7XG5cbiAgICAgIHRoaXMuX2NyZWF0ZSgpO1xuXG4gICAgICBpZiAoIHRoaXMub3B0aW9ucy5kaXNhYmxlZCApIHtcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uRGlzYWJsZWQoIHRoaXMub3B0aW9ucy5kaXNhYmxlZCApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90cmlnZ2VyKCBcImNyZWF0ZVwiLCBudWxsLCB0aGlzLl9nZXRDcmVhdGVFdmVudERhdGEoKSApO1xuICAgICAgdGhpcy5faW5pdCgpO1xuICAgIH0sXG5cbiAgICBfZ2V0Q3JlYXRlT3B0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfSxcblxuICAgIF9nZXRDcmVhdGVFdmVudERhdGE6ICQubm9vcCxcblxuICAgIF9jcmVhdGU6ICQubm9vcCxcblxuICAgIF9pbml0OiAkLm5vb3AsXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgdGhpcy5fZGVzdHJveSgpO1xuICAgICAgJC5lYWNoKCB0aGlzLmNsYXNzZXNFbGVtZW50TG9va3VwLCBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcbiAgICAgICAgdGhhdC5fcmVtb3ZlQ2xhc3MoIHZhbHVlLCBrZXkgKTtcbiAgICAgIH0gKTtcblxuICAgICAgLy8gV2UgY2FuIHByb2JhYmx5IHJlbW92ZSB0aGUgdW5iaW5kIGNhbGxzIGluIDIuMFxuICAgICAgLy8gYWxsIGV2ZW50IGJpbmRpbmdzIHNob3VsZCBnbyB0aHJvdWdoIHRoaXMuX29uKClcbiAgICAgIHRoaXMuZWxlbWVudFxuICAgICAgICAub2ZmKCB0aGlzLmV2ZW50TmFtZXNwYWNlIClcbiAgICAgICAgLnJlbW92ZURhdGEoIHRoaXMud2lkZ2V0RnVsbE5hbWUgKTtcbiAgICAgIHRoaXMud2lkZ2V0KClcbiAgICAgICAgLm9mZiggdGhpcy5ldmVudE5hbWVzcGFjZSApXG4gICAgICAgIC5yZW1vdmVBdHRyKCBcImFyaWEtZGlzYWJsZWRcIiApO1xuXG4gICAgICAvLyBDbGVhbiB1cCBldmVudHMgYW5kIHN0YXRlc1xuICAgICAgdGhpcy5iaW5kaW5ncy5vZmYoIHRoaXMuZXZlbnROYW1lc3BhY2UgKTtcbiAgICB9LFxuXG4gICAgX2Rlc3Ryb3k6ICQubm9vcCxcblxuICAgIHdpZGdldDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH0sXG5cbiAgICBvcHRpb246IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBrZXk7XG4gICAgICB2YXIgcGFydHM7XG4gICAgICB2YXIgY3VyT3B0aW9uO1xuICAgICAgdmFyIGk7XG5cbiAgICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMCApIHtcblxuICAgICAgICAvLyBEb24ndCByZXR1cm4gYSByZWZlcmVuY2UgdG8gdGhlIGludGVybmFsIGhhc2hcbiAgICAgICAgcmV0dXJuICQud2lkZ2V0LmV4dGVuZCgge30sIHRoaXMub3B0aW9ucyApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgKSB7XG5cbiAgICAgICAgLy8gSGFuZGxlIG5lc3RlZCBrZXlzLCBlLmcuLCBcImZvby5iYXJcIiA9PiB7IGZvbzogeyBiYXI6IF9fXyB9IH1cbiAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICBwYXJ0cyA9IGtleS5zcGxpdCggXCIuXCIgKTtcbiAgICAgICAga2V5ID0gcGFydHMuc2hpZnQoKTtcbiAgICAgICAgaWYgKCBwYXJ0cy5sZW5ndGggKSB7XG4gICAgICAgICAgY3VyT3B0aW9uID0gb3B0aW9uc1sga2V5IF0gPSAkLndpZGdldC5leHRlbmQoIHt9LCB0aGlzLm9wdGlvbnNbIGtleSBdICk7XG4gICAgICAgICAgZm9yICggaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKysgKSB7XG4gICAgICAgICAgICBjdXJPcHRpb25bIHBhcnRzWyBpIF0gXSA9IGN1ck9wdGlvblsgcGFydHNbIGkgXSBdIHx8IHt9O1xuICAgICAgICAgICAgY3VyT3B0aW9uID0gY3VyT3B0aW9uWyBwYXJ0c1sgaSBdIF07XG4gICAgICAgICAgfVxuICAgICAgICAgIGtleSA9IHBhcnRzLnBvcCgpO1xuICAgICAgICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJPcHRpb25bIGtleSBdID09PSB1bmRlZmluZWQgPyBudWxsIDogY3VyT3B0aW9uWyBrZXkgXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VyT3B0aW9uWyBrZXkgXSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMSApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbIGtleSBdID09PSB1bmRlZmluZWQgPyBudWxsIDogdGhpcy5vcHRpb25zWyBrZXkgXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3B0aW9uc1sga2V5IF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRPcHRpb25zKCBvcHRpb25zICk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfc2V0T3B0aW9uczogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG4gICAgICB2YXIga2V5O1xuXG4gICAgICBmb3IgKCBrZXkgaW4gb3B0aW9ucyApIHtcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uKCBrZXksIG9wdGlvbnNbIGtleSBdICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfc2V0T3B0aW9uOiBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcbiAgICAgIGlmICgga2V5ID09PSBcImNsYXNzZXNcIiApIHtcbiAgICAgICAgdGhpcy5fc2V0T3B0aW9uQ2xhc3NlcyggdmFsdWUgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zWyBrZXkgXSA9IHZhbHVlO1xuXG4gICAgICBpZiAoIGtleSA9PT0gXCJkaXNhYmxlZFwiICkge1xuICAgICAgICB0aGlzLl9zZXRPcHRpb25EaXNhYmxlZCggdmFsdWUgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9zZXRPcHRpb25DbGFzc2VzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG4gICAgICB2YXIgY2xhc3NLZXksIGVsZW1lbnRzLCBjdXJyZW50RWxlbWVudHM7XG5cbiAgICAgIGZvciAoIGNsYXNzS2V5IGluIHZhbHVlICkge1xuICAgICAgICBjdXJyZW50RWxlbWVudHMgPSB0aGlzLmNsYXNzZXNFbGVtZW50TG9va3VwWyBjbGFzc0tleSBdO1xuICAgICAgICBpZiAoIHZhbHVlWyBjbGFzc0tleSBdID09PSB0aGlzLm9wdGlvbnMuY2xhc3Nlc1sgY2xhc3NLZXkgXSB8fFxuICAgICAgICAgICFjdXJyZW50RWxlbWVudHMgfHxcbiAgICAgICAgICAhY3VycmVudEVsZW1lbnRzLmxlbmd0aCApIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGFyZSBkb2luZyB0aGlzIHRvIGNyZWF0ZSBhIG5ldyBqUXVlcnkgb2JqZWN0IGJlY2F1c2UgdGhlIF9yZW1vdmVDbGFzcygpIGNhbGxcbiAgICAgICAgLy8gb24gdGhlIG5leHQgbGluZSBpcyBnb2luZyB0byBkZXN0cm95IHRoZSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgZWxlbWVudHMgYmVpbmdcbiAgICAgICAgLy8gdHJhY2tlZC4gV2UgbmVlZCB0byBzYXZlIGEgY29weSBvZiB0aGlzIGNvbGxlY3Rpb24gc28gdGhhdCB3ZSBjYW4gYWRkIHRoZSBuZXcgY2xhc3Nlc1xuICAgICAgICAvLyBiZWxvdy5cbiAgICAgICAgZWxlbWVudHMgPSAkKCBjdXJyZW50RWxlbWVudHMuZ2V0KCkgKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2xhc3MoIGN1cnJlbnRFbGVtZW50cywgY2xhc3NLZXkgKTtcblxuICAgICAgICAvLyBXZSBkb24ndCB1c2UgX2FkZENsYXNzKCkgaGVyZSwgYmVjYXVzZSB0aGF0IHVzZXMgdGhpcy5vcHRpb25zLmNsYXNzZXNcbiAgICAgICAgLy8gZm9yIGdlbmVyYXRpbmcgdGhlIHN0cmluZyBvZiBjbGFzc2VzLiBXZSB3YW50IHRvIHVzZSB0aGUgdmFsdWUgcGFzc2VkIGluIGZyb21cbiAgICAgICAgLy8gX3NldE9wdGlvbigpLCB0aGlzIGlzIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGNsYXNzZXMgb3B0aW9uIHdoaWNoIHdhcyBwYXNzZWQgdG9cbiAgICAgICAgLy8gX3NldE9wdGlvbigpLiBXZSBwYXNzIHRoaXMgdmFsdWUgZGlyZWN0bHkgdG8gX2NsYXNzZXMoKS5cbiAgICAgICAgZWxlbWVudHMuYWRkQ2xhc3MoIHRoaXMuX2NsYXNzZXMoIHtcbiAgICAgICAgICBlbGVtZW50OiBlbGVtZW50cyxcbiAgICAgICAgICBrZXlzOiBjbGFzc0tleSxcbiAgICAgICAgICBjbGFzc2VzOiB2YWx1ZSxcbiAgICAgICAgICBhZGQ6IHRydWVcbiAgICAgICAgfSApICk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIF9zZXRPcHRpb25EaXNhYmxlZDogZnVuY3Rpb24oIHZhbHVlICkge1xuICAgICAgdGhpcy5fdG9nZ2xlQ2xhc3MoIHRoaXMud2lkZ2V0KCksIHRoaXMud2lkZ2V0RnVsbE5hbWUgKyBcIi1kaXNhYmxlZFwiLCBudWxsLCAhIXZhbHVlICk7XG5cbiAgICAgIC8vIElmIHRoZSB3aWRnZXQgaXMgYmVjb21pbmcgZGlzYWJsZWQsIHRoZW4gbm90aGluZyBpcyBpbnRlcmFjdGl2ZVxuICAgICAgaWYgKCB2YWx1ZSApIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2xhc3MoIHRoaXMuaG92ZXJhYmxlLCBudWxsLCBcInVpLXN0YXRlLWhvdmVyXCIgKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2xhc3MoIHRoaXMuZm9jdXNhYmxlLCBudWxsLCBcInVpLXN0YXRlLWZvY3VzXCIgKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW5hYmxlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXRPcHRpb25zKCB7IGRpc2FibGVkOiBmYWxzZSB9ICk7XG4gICAgfSxcblxuICAgIGRpc2FibGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NldE9wdGlvbnMoIHsgZGlzYWJsZWQ6IHRydWUgfSApO1xuICAgIH0sXG5cbiAgICBfY2xhc3NlczogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG4gICAgICB2YXIgZnVsbCA9IFtdO1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoIHtcbiAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgICBjbGFzc2VzOiB0aGlzLm9wdGlvbnMuY2xhc3NlcyB8fCB7fVxuICAgICAgfSwgb3B0aW9ucyApO1xuXG4gICAgICBmdW5jdGlvbiBwcm9jZXNzQ2xhc3NTdHJpbmcoIGNsYXNzZXMsIGNoZWNrT3B0aW9uICkge1xuICAgICAgICB2YXIgY3VycmVudCwgaTtcbiAgICAgICAgZm9yICggaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgIGN1cnJlbnQgPSB0aGF0LmNsYXNzZXNFbGVtZW50TG9va3VwWyBjbGFzc2VzWyBpIF0gXSB8fCAkKCk7XG4gICAgICAgICAgaWYgKCBvcHRpb25zLmFkZCApIHtcbiAgICAgICAgICAgIGN1cnJlbnQgPSAkKCAkLnVuaXF1ZSggY3VycmVudC5nZXQoKS5jb25jYXQoIG9wdGlvbnMuZWxlbWVudC5nZXQoKSApICkgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudCA9ICQoIGN1cnJlbnQubm90KCBvcHRpb25zLmVsZW1lbnQgKS5nZXQoKSApO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGF0LmNsYXNzZXNFbGVtZW50TG9va3VwWyBjbGFzc2VzWyBpIF0gXSA9IGN1cnJlbnQ7XG4gICAgICAgICAgZnVsbC5wdXNoKCBjbGFzc2VzWyBpIF0gKTtcbiAgICAgICAgICBpZiAoIGNoZWNrT3B0aW9uICYmIG9wdGlvbnMuY2xhc3Nlc1sgY2xhc3Nlc1sgaSBdIF0gKSB7XG4gICAgICAgICAgICBmdWxsLnB1c2goIG9wdGlvbnMuY2xhc3Nlc1sgY2xhc3Nlc1sgaSBdIF0gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fb24oIG9wdGlvbnMuZWxlbWVudCwge1xuICAgICAgICBcInJlbW92ZVwiOiBcIl91bnRyYWNrQ2xhc3Nlc0VsZW1lbnRcIlxuICAgICAgfSApO1xuXG4gICAgICBpZiAoIG9wdGlvbnMua2V5cyApIHtcbiAgICAgICAgcHJvY2Vzc0NsYXNzU3RyaW5nKCBvcHRpb25zLmtleXMubWF0Y2goIC9cXFMrL2cgKSB8fCBbXSwgdHJ1ZSApO1xuICAgICAgfVxuICAgICAgaWYgKCBvcHRpb25zLmV4dHJhICkge1xuICAgICAgICBwcm9jZXNzQ2xhc3NTdHJpbmcoIG9wdGlvbnMuZXh0cmEubWF0Y2goIC9cXFMrL2cgKSB8fCBbXSApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVsbC5qb2luKCBcIiBcIiApO1xuICAgIH0sXG5cbiAgICBfdW50cmFja0NsYXNzZXNFbGVtZW50OiBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAkLmVhY2goIHRoYXQuY2xhc3Nlc0VsZW1lbnRMb29rdXAsIGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuICAgICAgICBpZiAoICQuaW5BcnJheSggZXZlbnQudGFyZ2V0LCB2YWx1ZSApICE9PSAtMSApIHtcbiAgICAgICAgICB0aGF0LmNsYXNzZXNFbGVtZW50TG9va3VwWyBrZXkgXSA9ICQoIHZhbHVlLm5vdCggZXZlbnQudGFyZ2V0ICkuZ2V0KCkgKTtcbiAgICAgICAgfVxuICAgICAgfSApO1xuICAgIH0sXG5cbiAgICBfcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKCBlbGVtZW50LCBrZXlzLCBleHRyYSApIHtcbiAgICAgIHJldHVybiB0aGlzLl90b2dnbGVDbGFzcyggZWxlbWVudCwga2V5cywgZXh0cmEsIGZhbHNlICk7XG4gICAgfSxcblxuICAgIF9hZGRDbGFzczogZnVuY3Rpb24oIGVsZW1lbnQsIGtleXMsIGV4dHJhICkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RvZ2dsZUNsYXNzKCBlbGVtZW50LCBrZXlzLCBleHRyYSwgdHJ1ZSApO1xuICAgIH0sXG5cbiAgICBfdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uKCBlbGVtZW50LCBrZXlzLCBleHRyYSwgYWRkICkge1xuICAgICAgYWRkID0gKCB0eXBlb2YgYWRkID09PSBcImJvb2xlYW5cIiApID8gYWRkIDogZXh0cmE7XG4gICAgICB2YXIgc2hpZnQgPSAoIHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiIHx8IGVsZW1lbnQgPT09IG51bGwgKSxcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICBleHRyYTogc2hpZnQgPyBrZXlzIDogZXh0cmEsXG4gICAgICAgICAga2V5czogc2hpZnQgPyBlbGVtZW50IDoga2V5cyxcbiAgICAgICAgICBlbGVtZW50OiBzaGlmdCA/IHRoaXMuZWxlbWVudCA6IGVsZW1lbnQsXG4gICAgICAgICAgYWRkOiBhZGRcbiAgICAgICAgfTtcbiAgICAgIG9wdGlvbnMuZWxlbWVudC50b2dnbGVDbGFzcyggdGhpcy5fY2xhc3Nlcyggb3B0aW9ucyApLCBhZGQgKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfb246IGZ1bmN0aW9uKCBzdXBwcmVzc0Rpc2FibGVkQ2hlY2ssIGVsZW1lbnQsIGhhbmRsZXJzICkge1xuICAgICAgdmFyIGRlbGVnYXRlRWxlbWVudDtcbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXM7XG5cbiAgICAgIC8vIE5vIHN1cHByZXNzRGlzYWJsZWRDaGVjayBmbGFnLCBzaHVmZmxlIGFyZ3VtZW50c1xuICAgICAgaWYgKCB0eXBlb2Ygc3VwcHJlc3NEaXNhYmxlZENoZWNrICE9PSBcImJvb2xlYW5cIiApIHtcbiAgICAgICAgaGFuZGxlcnMgPSBlbGVtZW50O1xuICAgICAgICBlbGVtZW50ID0gc3VwcHJlc3NEaXNhYmxlZENoZWNrO1xuICAgICAgICBzdXBwcmVzc0Rpc2FibGVkQ2hlY2sgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gTm8gZWxlbWVudCBhcmd1bWVudCwgc2h1ZmZsZSBhbmQgdXNlIHRoaXMuZWxlbWVudFxuICAgICAgaWYgKCAhaGFuZGxlcnMgKSB7XG4gICAgICAgIGhhbmRsZXJzID0gZWxlbWVudDtcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgZGVsZWdhdGVFbGVtZW50ID0gdGhpcy53aWRnZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQgPSBkZWxlZ2F0ZUVsZW1lbnQgPSAkKCBlbGVtZW50ICk7XG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSB0aGlzLmJpbmRpbmdzLmFkZCggZWxlbWVudCApO1xuICAgICAgfVxuXG4gICAgICAkLmVhY2goIGhhbmRsZXJzLCBmdW5jdGlvbiggZXZlbnQsIGhhbmRsZXIgKSB7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZXJQcm94eSgpIHtcblxuICAgICAgICAgIC8vIEFsbG93IHdpZGdldHMgdG8gY3VzdG9taXplIHRoZSBkaXNhYmxlZCBoYW5kbGluZ1xuICAgICAgICAgIC8vIC0gZGlzYWJsZWQgYXMgYW4gYXJyYXkgaW5zdGVhZCBvZiBib29sZWFuXG4gICAgICAgICAgLy8gLSBkaXNhYmxlZCBjbGFzcyBhcyBtZXRob2QgZm9yIGRpc2FibGluZyBpbmRpdmlkdWFsIHBhcnRzXG4gICAgICAgICAgaWYgKCAhc3VwcHJlc3NEaXNhYmxlZENoZWNrICYmXG4gICAgICAgICAgICAoIGluc3RhbmNlLm9wdGlvbnMuZGlzYWJsZWQgPT09IHRydWUgfHxcbiAgICAgICAgICAgICAgJCggdGhpcyApLmhhc0NsYXNzKCBcInVpLXN0YXRlLWRpc2FibGVkXCIgKSApICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKCB0eXBlb2YgaGFuZGxlciA9PT0gXCJzdHJpbmdcIiA/IGluc3RhbmNlWyBoYW5kbGVyIF0gOiBoYW5kbGVyIClcbiAgICAgICAgICAgIC5hcHBseSggaW5zdGFuY2UsIGFyZ3VtZW50cyApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29weSB0aGUgZ3VpZCBzbyBkaXJlY3QgdW5iaW5kaW5nIHdvcmtzXG4gICAgICAgIGlmICggdHlwZW9mIGhhbmRsZXIgIT09IFwic3RyaW5nXCIgKSB7XG4gICAgICAgICAgaGFuZGxlclByb3h5Lmd1aWQgPSBoYW5kbGVyLmd1aWQgPVxuICAgICAgICAgICAgaGFuZGxlci5ndWlkIHx8IGhhbmRsZXJQcm94eS5ndWlkIHx8ICQuZ3VpZCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1hdGNoID0gZXZlbnQubWF0Y2goIC9eKFtcXHc6LV0qKVxccyooLiopJC8gKTtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IG1hdGNoWyAxIF0gKyBpbnN0YW5jZS5ldmVudE5hbWVzcGFjZTtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gbWF0Y2hbIDIgXTtcblxuICAgICAgICBpZiAoIHNlbGVjdG9yICkge1xuICAgICAgICAgIGRlbGVnYXRlRWxlbWVudC5vbiggZXZlbnROYW1lLCBzZWxlY3RvciwgaGFuZGxlclByb3h5ICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5vbiggZXZlbnROYW1lLCBoYW5kbGVyUHJveHkgKTtcbiAgICAgICAgfVxuICAgICAgfSApO1xuICAgIH0sXG5cbiAgICBfb2ZmOiBmdW5jdGlvbiggZWxlbWVudCwgZXZlbnROYW1lICkge1xuICAgICAgZXZlbnROYW1lID0gKCBldmVudE5hbWUgfHwgXCJcIiApLnNwbGl0KCBcIiBcIiApLmpvaW4oIHRoaXMuZXZlbnROYW1lc3BhY2UgKyBcIiBcIiApICtcbiAgICAgICAgdGhpcy5ldmVudE5hbWVzcGFjZTtcbiAgICAgIGVsZW1lbnQub2ZmKCBldmVudE5hbWUgKS5vZmYoIGV2ZW50TmFtZSApO1xuXG4gICAgICAvLyBDbGVhciB0aGUgc3RhY2sgdG8gYXZvaWQgbWVtb3J5IGxlYWtzICgjMTAwNTYpXG4gICAgICB0aGlzLmJpbmRpbmdzID0gJCggdGhpcy5iaW5kaW5ncy5ub3QoIGVsZW1lbnQgKS5nZXQoKSApO1xuICAgICAgdGhpcy5mb2N1c2FibGUgPSAkKCB0aGlzLmZvY3VzYWJsZS5ub3QoIGVsZW1lbnQgKS5nZXQoKSApO1xuICAgICAgdGhpcy5ob3ZlcmFibGUgPSAkKCB0aGlzLmhvdmVyYWJsZS5ub3QoIGVsZW1lbnQgKS5nZXQoKSApO1xuICAgIH0sXG5cbiAgICBfZGVsYXk6IGZ1bmN0aW9uKCBoYW5kbGVyLCBkZWxheSApIHtcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZXJQcm94eSgpIHtcbiAgICAgICAgcmV0dXJuICggdHlwZW9mIGhhbmRsZXIgPT09IFwic3RyaW5nXCIgPyBpbnN0YW5jZVsgaGFuZGxlciBdIDogaGFuZGxlciApXG4gICAgICAgICAgLmFwcGx5KCBpbnN0YW5jZSwgYXJndW1lbnRzICk7XG4gICAgICB9XG4gICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoIGhhbmRsZXJQcm94eSwgZGVsYXkgfHwgMCApO1xuICAgIH0sXG5cbiAgICBfaG92ZXJhYmxlOiBmdW5jdGlvbiggZWxlbWVudCApIHtcbiAgICAgIHRoaXMuaG92ZXJhYmxlID0gdGhpcy5ob3ZlcmFibGUuYWRkKCBlbGVtZW50ICk7XG4gICAgICB0aGlzLl9vbiggZWxlbWVudCwge1xuICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQ2xhc3MoICQoIGV2ZW50LmN1cnJlbnRUYXJnZXQgKSwgbnVsbCwgXCJ1aS1zdGF0ZS1ob3ZlclwiICk7XG4gICAgICAgIH0sXG4gICAgICAgIG1vdXNlbGVhdmU6IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmVDbGFzcyggJCggZXZlbnQuY3VycmVudFRhcmdldCApLCBudWxsLCBcInVpLXN0YXRlLWhvdmVyXCIgKTtcbiAgICAgICAgfVxuICAgICAgfSApO1xuICAgIH0sXG5cbiAgICBfZm9jdXNhYmxlOiBmdW5jdGlvbiggZWxlbWVudCApIHtcbiAgICAgIHRoaXMuZm9jdXNhYmxlID0gdGhpcy5mb2N1c2FibGUuYWRkKCBlbGVtZW50ICk7XG4gICAgICB0aGlzLl9vbiggZWxlbWVudCwge1xuICAgICAgICBmb2N1c2luOiBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICAgICAgdGhpcy5fYWRkQ2xhc3MoICQoIGV2ZW50LmN1cnJlbnRUYXJnZXQgKSwgbnVsbCwgXCJ1aS1zdGF0ZS1mb2N1c1wiICk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3Vzb3V0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlQ2xhc3MoICQoIGV2ZW50LmN1cnJlbnRUYXJnZXQgKSwgbnVsbCwgXCJ1aS1zdGF0ZS1mb2N1c1wiICk7XG4gICAgICAgIH1cbiAgICAgIH0gKTtcbiAgICB9LFxuXG4gICAgX3RyaWdnZXI6IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgZGF0YSApIHtcbiAgICAgIHZhciBwcm9wLCBvcmlnO1xuICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5vcHRpb25zWyB0eXBlIF07XG5cbiAgICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuICAgICAgZXZlbnQgPSAkLkV2ZW50KCBldmVudCApO1xuICAgICAgZXZlbnQudHlwZSA9ICggdHlwZSA9PT0gdGhpcy53aWRnZXRFdmVudFByZWZpeCA/XG4gICAgICAgIHR5cGUgOlxuICAgICAgICB0aGlzLndpZGdldEV2ZW50UHJlZml4ICsgdHlwZSApLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIC8vIFRoZSBvcmlnaW5hbCBldmVudCBtYXkgY29tZSBmcm9tIGFueSBlbGVtZW50XG4gICAgICAvLyBzbyB3ZSBuZWVkIHRvIHJlc2V0IHRoZSB0YXJnZXQgb24gdGhlIG5ldyBldmVudFxuICAgICAgZXZlbnQudGFyZ2V0ID0gdGhpcy5lbGVtZW50WyAwIF07XG5cbiAgICAgIC8vIENvcHkgb3JpZ2luYWwgZXZlbnQgcHJvcGVydGllcyBvdmVyIHRvIHRoZSBuZXcgZXZlbnRcbiAgICAgIG9yaWcgPSBldmVudC5vcmlnaW5hbEV2ZW50O1xuICAgICAgaWYgKCBvcmlnICkge1xuICAgICAgICBmb3IgKCBwcm9wIGluIG9yaWcgKSB7XG4gICAgICAgICAgaWYgKCAhKCBwcm9wIGluIGV2ZW50ICkgKSB7XG4gICAgICAgICAgICBldmVudFsgcHJvcCBdID0gb3JpZ1sgcHJvcCBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmVsZW1lbnQudHJpZ2dlciggZXZlbnQsIGRhdGEgKTtcbiAgICAgIHJldHVybiAhKCAkLmlzRnVuY3Rpb24oIGNhbGxiYWNrICkgJiZcbiAgICAgICAgY2FsbGJhY2suYXBwbHkoIHRoaXMuZWxlbWVudFsgMCBdLCBbIGV2ZW50IF0uY29uY2F0KCBkYXRhICkgKSA9PT0gZmFsc2UgfHxcbiAgICAgICAgZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgKTtcbiAgICB9XG4gIH07XG5cbiAgJC5lYWNoKCB7IHNob3c6IFwiZmFkZUluXCIsIGhpZGU6IFwiZmFkZU91dFwiIH0sIGZ1bmN0aW9uKCBtZXRob2QsIGRlZmF1bHRFZmZlY3QgKSB7XG4gICAgJC5XaWRnZXQucHJvdG90eXBlWyBcIl9cIiArIG1ldGhvZCBdID0gZnVuY3Rpb24oIGVsZW1lbnQsIG9wdGlvbnMsIGNhbGxiYWNrICkge1xuICAgICAgaWYgKCB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiApIHtcbiAgICAgICAgb3B0aW9ucyA9IHsgZWZmZWN0OiBvcHRpb25zIH07XG4gICAgICB9XG5cbiAgICAgIHZhciBoYXNPcHRpb25zO1xuICAgICAgdmFyIGVmZmVjdE5hbWUgPSAhb3B0aW9ucyA/XG4gICAgICAgIG1ldGhvZCA6XG4gICAgICAgIG9wdGlvbnMgPT09IHRydWUgfHwgdHlwZW9mIG9wdGlvbnMgPT09IFwibnVtYmVyXCIgP1xuICAgICAgICBkZWZhdWx0RWZmZWN0IDpcbiAgICAgICAgb3B0aW9ucy5lZmZlY3QgfHwgZGVmYXVsdEVmZmVjdDtcblxuICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICBpZiAoIHR5cGVvZiBvcHRpb25zID09PSBcIm51bWJlclwiICkge1xuICAgICAgICBvcHRpb25zID0geyBkdXJhdGlvbjogb3B0aW9ucyB9O1xuICAgICAgfVxuXG4gICAgICBoYXNPcHRpb25zID0gISQuaXNFbXB0eU9iamVjdCggb3B0aW9ucyApO1xuICAgICAgb3B0aW9ucy5jb21wbGV0ZSA9IGNhbGxiYWNrO1xuXG4gICAgICBpZiAoIG9wdGlvbnMuZGVsYXkgKSB7XG4gICAgICAgIGVsZW1lbnQuZGVsYXkoIG9wdGlvbnMuZGVsYXkgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBoYXNPcHRpb25zICYmICQuZWZmZWN0cyAmJiAkLmVmZmVjdHMuZWZmZWN0WyBlZmZlY3ROYW1lIF0gKSB7XG4gICAgICAgIGVsZW1lbnRbIG1ldGhvZCBdKCBvcHRpb25zICk7XG4gICAgICB9IGVsc2UgaWYgKCBlZmZlY3ROYW1lICE9PSBtZXRob2QgJiYgZWxlbWVudFsgZWZmZWN0TmFtZSBdICkge1xuICAgICAgICBlbGVtZW50WyBlZmZlY3ROYW1lIF0oIG9wdGlvbnMuZHVyYXRpb24sIG9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5xdWV1ZSggZnVuY3Rpb24oIG5leHQgKSB7XG4gICAgICAgICAgJCggdGhpcyApWyBtZXRob2QgXSgpO1xuICAgICAgICAgIGlmICggY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKCBlbGVtZW50WyAwIF0gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9ICk7XG4gICAgICB9XG4gICAgfTtcbiAgfSApO1xuXG4gIHZhciB3aWRnZXQgPSAkLndpZGdldDtcblxuXG5cblxufSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==