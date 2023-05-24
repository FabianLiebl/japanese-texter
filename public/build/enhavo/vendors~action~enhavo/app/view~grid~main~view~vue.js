(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~action~enhavo/app/view~grid~main~view~vue"],{

/***/ "./node_modules/urijs/src/IPv6.js":
/*!****************************************!*\
  !*** ./node_modules/urijs/src/IPv6.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * URI.js - Mutating URLs
 * IPv6 Support
 *
 * Version: 1.19.11
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */

(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if ( true && module.exports) {
    // Node
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (root) {
  'use strict';

  /*
  var _in = "fe80:0000:0000:0000:0204:61ff:fe9d:f156";
  var _out = IPv6.best(_in);
  var _expected = "fe80::204:61ff:fe9d:f156";

  console.log(_in, _out, _expected, _out === _expected);
  */

  // save current IPv6 variable, if any
  var _IPv6 = root && root.IPv6;

  function bestPresentation(address) {
    // based on:
    // Javascript to test an IPv6 address for proper format, and to
    // present the "best text representation" according to IETF Draft RFC at
    // http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04
    // 8 Feb 2010 Rich Brown, Dartware, LLC
    // Please feel free to use this code as long as you provide a link to
    // http://www.intermapper.com
    // http://intermapper.com/support/tools/IPV6-Validator.aspx
    // http://download.dartware.com/thirdparty/ipv6validator.js

    var _address = address.toLowerCase();
    var segments = _address.split(':');
    var length = segments.length;
    var total = 8;

    // trim colons (:: or ::a:b:c… or …a:b:c::)
    if (segments[0] === '' && segments[1] === '' && segments[2] === '') {
      // must have been ::
      // remove first two items
      segments.shift();
      segments.shift();
    } else if (segments[0] === '' && segments[1] === '') {
      // must have been ::xxxx
      // remove the first item
      segments.shift();
    } else if (segments[length - 1] === '' && segments[length - 2] === '') {
      // must have been xxxx::
      segments.pop();
    }

    length = segments.length;

    // adjust total segments for IPv4 trailer
    if (segments[length - 1].indexOf('.') !== -1) {
      // found a "." which means IPv4
      total = 7;
    }

    // fill empty segments them with "0000"
    var pos;
    for (pos = 0; pos < length; pos++) {
      if (segments[pos] === '') {
        break;
      }
    }

    if (pos < total) {
      segments.splice(pos, 1, '0000');
      while (segments.length < total) {
        segments.splice(pos, 0, '0000');
      }
    }

    // strip leading zeros
    var _segments;
    for (var i = 0; i < total; i++) {
      _segments = segments[i].split('');
      for (var j = 0; j < 3 ; j++) {
        if (_segments[0] === '0' && _segments.length > 1) {
          _segments.splice(0,1);
        } else {
          break;
        }
      }

      segments[i] = _segments.join('');
    }

    // find longest sequence of zeroes and coalesce them into one segment
    var best = -1;
    var _best = 0;
    var _current = 0;
    var current = -1;
    var inzeroes = false;
    // i; already declared

    for (i = 0; i < total; i++) {
      if (inzeroes) {
        if (segments[i] === '0') {
          _current += 1;
        } else {
          inzeroes = false;
          if (_current > _best) {
            best = current;
            _best = _current;
          }
        }
      } else {
        if (segments[i] === '0') {
          inzeroes = true;
          current = i;
          _current = 1;
        }
      }
    }

    if (_current > _best) {
      best = current;
      _best = _current;
    }

    if (_best > 1) {
      segments.splice(best, _best, '');
    }

    length = segments.length;

    // assemble remaining segments
    var result = '';
    if (segments[0] === '')  {
      result = ':';
    }

    for (i = 0; i < length; i++) {
      result += segments[i];
      if (i === length - 1) {
        break;
      }

      result += ':';
    }

    if (segments[length - 1] === '') {
      result += ':';
    }

    return result;
  }

  function noConflict() {
    /*jshint validthis: true */
    if (root.IPv6 === this) {
      root.IPv6 = _IPv6;
    }

    return this;
  }

  return {
    best: bestPresentation,
    noConflict: noConflict
  };
}));


/***/ }),

/***/ "./node_modules/urijs/src/SecondLevelDomains.js":
/*!******************************************************!*\
  !*** ./node_modules/urijs/src/SecondLevelDomains.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * URI.js - Mutating URLs
 * Second Level Domain (SLD) Support
 *
 * Version: 1.19.11
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */

(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if ( true && module.exports) {
    // Node
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (root) {
  'use strict';

  // save current SecondLevelDomains variable, if any
  var _SecondLevelDomains = root && root.SecondLevelDomains;

  var SLD = {
    // list of known Second Level Domains
    // converted list of SLDs from https://github.com/gavingmiller/second-level-domains
    // ----
    // publicsuffix.org is more current and actually used by a couple of browsers internally.
    // downside is it also contains domains like "dyndns.org" - which is fine for the security
    // issues browser have to deal with (SOP for cookies, etc) - but is way overboard for URI.js
    // ----
    list: {
      'ac':' com gov mil net org ',
      'ae':' ac co gov mil name net org pro sch ',
      'af':' com edu gov net org ',
      'al':' com edu gov mil net org ',
      'ao':' co ed gv it og pb ',
      'ar':' com edu gob gov int mil net org tur ',
      'at':' ac co gv or ',
      'au':' asn com csiro edu gov id net org ',
      'ba':' co com edu gov mil net org rs unbi unmo unsa untz unze ',
      'bb':' biz co com edu gov info net org store tv ',
      'bh':' biz cc com edu gov info net org ',
      'bn':' com edu gov net org ',
      'bo':' com edu gob gov int mil net org tv ',
      'br':' adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ',
      'bs':' com edu gov net org ',
      'bz':' du et om ov rg ',
      'ca':' ab bc mb nb nf nl ns nt nu on pe qc sk yk ',
      'ck':' biz co edu gen gov info net org ',
      'cn':' ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ',
      'co':' com edu gov mil net nom org ',
      'cr':' ac c co ed fi go or sa ',
      'cy':' ac biz com ekloges gov ltd name net org parliament press pro tm ',
      'do':' art com edu gob gov mil net org sld web ',
      'dz':' art asso com edu gov net org pol ',
      'ec':' com edu fin gov info med mil net org pro ',
      'eg':' com edu eun gov mil name net org sci ',
      'er':' com edu gov ind mil net org rochest w ',
      'es':' com edu gob nom org ',
      'et':' biz com edu gov info name net org ',
      'fj':' ac biz com info mil name net org pro ',
      'fk':' ac co gov net nom org ',
      'fr':' asso com f gouv nom prd presse tm ',
      'gg':' co net org ',
      'gh':' com edu gov mil org ',
      'gn':' ac com gov net org ',
      'gr':' com edu gov mil net org ',
      'gt':' com edu gob ind mil net org ',
      'gu':' com edu gov net org ',
      'hk':' com edu gov idv net org ',
      'hu':' 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ',
      'id':' ac co go mil net or sch web ',
      'il':' ac co gov idf k12 muni net org ',
      'in':' ac co edu ernet firm gen gov i ind mil net nic org res ',
      'iq':' com edu gov i mil net org ',
      'ir':' ac co dnssec gov i id net org sch ',
      'it':' edu gov ',
      'je':' co net org ',
      'jo':' com edu gov mil name net org sch ',
      'jp':' ac ad co ed go gr lg ne or ',
      'ke':' ac co go info me mobi ne or sc ',
      'kh':' com edu gov mil net org per ',
      'ki':' biz com de edu gov info mob net org tel ',
      'km':' asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ',
      'kn':' edu gov net org ',
      'kr':' ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ',
      'kw':' com edu gov net org ',
      'ky':' com edu gov net org ',
      'kz':' com edu gov mil net org ',
      'lb':' com edu gov net org ',
      'lk':' assn com edu gov grp hotel int ltd net ngo org sch soc web ',
      'lr':' com edu gov net org ',
      'lv':' asn com conf edu gov id mil net org ',
      'ly':' com edu gov id med net org plc sch ',
      'ma':' ac co gov m net org press ',
      'mc':' asso tm ',
      'me':' ac co edu gov its net org priv ',
      'mg':' com edu gov mil nom org prd tm ',
      'mk':' com edu gov inf name net org pro ',
      'ml':' com edu gov net org presse ',
      'mn':' edu gov org ',
      'mo':' com edu gov net org ',
      'mt':' com edu gov net org ',
      'mv':' aero biz com coop edu gov info int mil museum name net org pro ',
      'mw':' ac co com coop edu gov int museum net org ',
      'mx':' com edu gob net org ',
      'my':' com edu gov mil name net org sch ',
      'nf':' arts com firm info net other per rec store web ',
      'ng':' biz com edu gov mil mobi name net org sch ',
      'ni':' ac co com edu gob mil net nom org ',
      'np':' com edu gov mil net org ',
      'nr':' biz com edu gov info net org ',
      'om':' ac biz co com edu gov med mil museum net org pro sch ',
      'pe':' com edu gob mil net nom org sld ',
      'ph':' com edu gov i mil net ngo org ',
      'pk':' biz com edu fam gob gok gon gop gos gov net org web ',
      'pl':' art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ',
      'pr':' ac biz com edu est gov info isla name net org pro prof ',
      'ps':' com edu gov net org plo sec ',
      'pw':' belau co ed go ne or ',
      'ro':' arts com firm info nom nt org rec store tm www ',
      'rs':' ac co edu gov in org ',
      'sb':' com edu gov net org ',
      'sc':' com edu gov net org ',
      'sh':' co com edu gov net nom org ',
      'sl':' com edu gov net org ',
      'st':' co com consulado edu embaixada gov mil net org principe saotome store ',
      'sv':' com edu gob org red ',
      'sz':' ac co org ',
      'tr':' av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ',
      'tt':' aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ',
      'tw':' club com ebiz edu game gov idv mil net org ',
      'mu':' ac co com gov net or org ',
      'mz':' ac co edu gov org ',
      'na':' co com ',
      'nz':' ac co cri geek gen govt health iwi maori mil net org parliament school ',
      'pa':' abo ac com edu gob ing med net nom org sld ',
      'pt':' com edu gov int net nome org publ ',
      'py':' com edu gov mil net org ',
      'qa':' com edu gov mil net org ',
      're':' asso com nom ',
      'ru':' ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ',
      'rw':' ac co com edu gouv gov int mil net ',
      'sa':' com edu gov med net org pub sch ',
      'sd':' com edu gov info med net org tv ',
      'se':' a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ',
      'sg':' com edu gov idn net org per ',
      'sn':' art com edu gouv org perso univ ',
      'sy':' com edu gov mil net news org ',
      'th':' ac co go in mi net or ',
      'tj':' ac biz co com edu go gov info int mil name net nic org test web ',
      'tn':' agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ',
      'tz':' ac co go ne or ',
      'ua':' biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ',
      'ug':' ac co go ne or org sc ',
      'uk':' ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ',
      'us':' dni fed isa kids nsn ',
      'uy':' com edu gub mil net org ',
      've':' co com edu gob info mil net org web ',
      'vi':' co com k12 net org ',
      'vn':' ac biz com edu gov health info int name net org pro ',
      'ye':' co com gov ltd me net org plc ',
      'yu':' ac co edu gov org ',
      'za':' ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ',
      'zm':' ac co com edu gov net org sch ',
      // https://en.wikipedia.org/wiki/CentralNic#Second-level_domains
      'com': 'ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ',
      'net': 'gb jp se uk ',
      'org': 'ae',
      'de': 'com '
    },
    // gorhill 2013-10-25: Using indexOf() instead Regexp(). Significant boost
    // in both performance and memory footprint. No initialization required.
    // http://jsperf.com/uri-js-sld-regex-vs-binary-search/4
    // Following methods use lastIndexOf() rather than array.split() in order
    // to avoid any memory allocations.
    has: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return false;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset <= 0 || sldOffset >= (tldOffset-1)) {
        return false;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return false;
      }
      return sldList.indexOf(' ' + domain.slice(sldOffset+1, tldOffset) + ' ') >= 0;
    },
    is: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return false;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset >= 0) {
        return false;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return false;
      }
      return sldList.indexOf(' ' + domain.slice(0, tldOffset) + ' ') >= 0;
    },
    get: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return null;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset <= 0 || sldOffset >= (tldOffset-1)) {
        return null;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return null;
      }
      if (sldList.indexOf(' ' + domain.slice(sldOffset+1, tldOffset) + ' ') < 0) {
        return null;
      }
      return domain.slice(sldOffset+1);
    },
    noConflict: function(){
      if (root.SecondLevelDomains === this) {
        root.SecondLevelDomains = _SecondLevelDomains;
      }
      return this;
    }
  };

  return SLD;
}));


/***/ }),

/***/ "./node_modules/urijs/src/URI.js":
/*!***************************************!*\
  !*** ./node_modules/urijs/src/URI.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * URI.js - Mutating URLs
 *
 * Version: 1.19.11
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */
(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if ( true && module.exports) {
    // Node
    module.exports = factory(__webpack_require__(/*! ./punycode */ "./node_modules/urijs/src/punycode.js"), __webpack_require__(/*! ./IPv6 */ "./node_modules/urijs/src/IPv6.js"), __webpack_require__(/*! ./SecondLevelDomains */ "./node_modules/urijs/src/SecondLevelDomains.js"));
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./punycode */ "./node_modules/urijs/src/punycode.js"), __webpack_require__(/*! ./IPv6 */ "./node_modules/urijs/src/IPv6.js"), __webpack_require__(/*! ./SecondLevelDomains */ "./node_modules/urijs/src/SecondLevelDomains.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (punycode, IPv6, SLD, root) {
  'use strict';
  /*global location, escape, unescape */
  // FIXME: v2.0.0 renamce non-camelCase properties to uppercase
  /*jshint camelcase: false */

  // save current URI variable, if any
  var _URI = root && root.URI;

  function URI(url, base) {
    var _urlSupplied = arguments.length >= 1;
    var _baseSupplied = arguments.length >= 2;

    // Allow instantiation without the 'new' keyword
    if (!(this instanceof URI)) {
      if (_urlSupplied) {
        if (_baseSupplied) {
          return new URI(url, base);
        }

        return new URI(url);
      }

      return new URI();
    }

    if (url === undefined) {
      if (_urlSupplied) {
        throw new TypeError('undefined is not a valid argument for URI');
      }

      if (typeof location !== 'undefined') {
        url = location.href + '';
      } else {
        url = '';
      }
    }

    if (url === null) {
      if (_urlSupplied) {
        throw new TypeError('null is not a valid argument for URI');
      }
    }

    this.href(url);

    // resolve to base according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#constructor
    if (base !== undefined) {
      return this.absoluteTo(base);
    }

    return this;
  }

  function isInteger(value) {
    return /^[0-9]+$/.test(value);
  }

  URI.version = '1.19.11';

  var p = URI.prototype;
  var hasOwn = Object.prototype.hasOwnProperty;

  function escapeRegEx(string) {
    // https://github.com/medialize/URI.js/commit/85ac21783c11f8ccab06106dba9735a31a86924d#commitcomment-821963
    return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }

  function getType(value) {
    // IE8 doesn't return [Object Undefined] but [Object Object] for undefined value
    if (value === undefined) {
      return 'Undefined';
    }

    return String(Object.prototype.toString.call(value)).slice(8, -1);
  }

  function isArray(obj) {
    return getType(obj) === 'Array';
  }

  function filterArrayValues(data, value) {
    var lookup = {};
    var i, length;

    if (getType(value) === 'RegExp') {
      lookup = null;
    } else if (isArray(value)) {
      for (i = 0, length = value.length; i < length; i++) {
        lookup[value[i]] = true;
      }
    } else {
      lookup[value] = true;
    }

    for (i = 0, length = data.length; i < length; i++) {
      /*jshint laxbreak: true */
      var _match = lookup && lookup[data[i]] !== undefined
        || !lookup && value.test(data[i]);
      /*jshint laxbreak: false */
      if (_match) {
        data.splice(i, 1);
        length--;
        i--;
      }
    }

    return data;
  }

  function arrayContains(list, value) {
    var i, length;

    // value may be string, number, array, regexp
    if (isArray(value)) {
      // Note: this can be optimized to O(n) (instead of current O(m * n))
      for (i = 0, length = value.length; i < length; i++) {
        if (!arrayContains(list, value[i])) {
          return false;
        }
      }

      return true;
    }

    var _type = getType(value);
    for (i = 0, length = list.length; i < length; i++) {
      if (_type === 'RegExp') {
        if (typeof list[i] === 'string' && list[i].match(value)) {
          return true;
        }
      } else if (list[i] === value) {
        return true;
      }
    }

    return false;
  }

  function arraysEqual(one, two) {
    if (!isArray(one) || !isArray(two)) {
      return false;
    }

    // arrays can't be equal if they have different amount of content
    if (one.length !== two.length) {
      return false;
    }

    one.sort();
    two.sort();

    for (var i = 0, l = one.length; i < l; i++) {
      if (one[i] !== two[i]) {
        return false;
      }
    }

    return true;
  }

  function trimSlashes(text) {
    var trim_expression = /^\/+|\/+$/g;
    return text.replace(trim_expression, '');
  }

  URI._parts = function() {
    return {
      protocol: null,
      username: null,
      password: null,
      hostname: null,
      urn: null,
      port: null,
      path: null,
      query: null,
      fragment: null,
      // state
      preventInvalidHostname: URI.preventInvalidHostname,
      duplicateQueryParameters: URI.duplicateQueryParameters,
      escapeQuerySpace: URI.escapeQuerySpace
    };
  };
  // state: throw on invalid hostname
  // see https://github.com/medialize/URI.js/pull/345
  // and https://github.com/medialize/URI.js/issues/354
  URI.preventInvalidHostname = false;
  // state: allow duplicate query parameters (a=1&a=1)
  URI.duplicateQueryParameters = false;
  // state: replaces + with %20 (space in query strings)
  URI.escapeQuerySpace = true;
  // static properties
  URI.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
  URI.idn_expression = /[^a-z0-9\._-]/i;
  URI.punycode_expression = /(xn--)/i;
  // well, 333.444.555.666 matches, but it sure ain't no IPv4 - do we care?
  URI.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  // credits to Rich Brown
  // source: http://forums.intermapper.com/viewtopic.php?p=1096#1096
  // specification: http://www.ietf.org/rfc/rfc4291.txt
  URI.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  // expression used is "gruber revised" (@gruber v2) determined to be the
  // best solution in a regex-golf we did a couple of ages ago at
  // * http://mathiasbynens.be/demo/url-regex
  // * http://rodneyrehm.de/t/url-regex.html
  URI.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
  URI.findUri = {
    // valid "scheme://" or "www."
    start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
    // everything up to the next whitespace
    end: /[\s\r\n]|$/,
    // trim trailing punctuation captured by end RegExp
    trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,
    // balanced parens inclusion (), [], {}, <>
    parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g,
  };
  URI.leading_whitespace_expression = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/
  // https://infra.spec.whatwg.org/#ascii-tab-or-newline
  URI.ascii_tab_whitespace = /[\u0009\u000A\u000D]+/g
  // http://www.iana.org/assignments/uri-schemes.html
  // http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
  URI.defaultPorts = {
    http: '80',
    https: '443',
    ftp: '21',
    gopher: '70',
    ws: '80',
    wss: '443'
  };
  // list of protocols which always require a hostname
  URI.hostProtocols = [
    'http',
    'https'
  ];

  // allowed hostname characters according to RFC 3986
  // ALPHA DIGIT "-" "." "_" "~" "!" "$" "&" "'" "(" ")" "*" "+" "," ";" "=" %encoded
  // I've never seen a (non-IDN) hostname other than: ALPHA DIGIT . - _
  URI.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/;
  // map DOM Elements to their URI attribute
  URI.domAttributes = {
    'a': 'href',
    'blockquote': 'cite',
    'link': 'href',
    'base': 'href',
    'script': 'src',
    'form': 'action',
    'img': 'src',
    'area': 'href',
    'iframe': 'src',
    'embed': 'src',
    'source': 'src',
    'track': 'src',
    'input': 'src', // but only if type="image"
    'audio': 'src',
    'video': 'src'
  };
  URI.getDomAttribute = function(node) {
    if (!node || !node.nodeName) {
      return undefined;
    }

    var nodeName = node.nodeName.toLowerCase();
    // <input> should only expose src for type="image"
    if (nodeName === 'input' && node.type !== 'image') {
      return undefined;
    }

    return URI.domAttributes[nodeName];
  };

  function escapeForDumbFirefox36(value) {
    // https://github.com/medialize/URI.js/issues/91
    return escape(value);
  }

  // encoding / decoding according to RFC3986
  function strictEncodeURIComponent(string) {
    // see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent
    return encodeURIComponent(string)
      .replace(/[!'()*]/g, escapeForDumbFirefox36)
      .replace(/\*/g, '%2A');
  }
  URI.encode = strictEncodeURIComponent;
  URI.decode = decodeURIComponent;
  URI.iso8859 = function() {
    URI.encode = escape;
    URI.decode = unescape;
  };
  URI.unicode = function() {
    URI.encode = strictEncodeURIComponent;
    URI.decode = decodeURIComponent;
  };
  URI.characters = {
    pathname: {
      encode: {
        // RFC3986 2.1: For consistency, URI producers and normalizers should
        // use uppercase hexadecimal digits for all percent-encodings.
        expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig,
        map: {
          // -._~!'()*
          '%24': '$',
          '%26': '&',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%3A': ':',
          '%40': '@'
        }
      },
      decode: {
        expression: /[\/\?#]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23'
        }
      }
    },
    reserved: {
      encode: {
        // RFC3986 2.1: For consistency, URI producers and normalizers should
        // use uppercase hexadecimal digits for all percent-encodings.
        expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,
        map: {
          // gen-delims
          '%3A': ':',
          '%2F': '/',
          '%3F': '?',
          '%23': '#',
          '%5B': '[',
          '%5D': ']',
          '%40': '@',
          // sub-delims
          '%21': '!',
          '%24': '$',
          '%26': '&',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '='
        }
      }
    },
    urnpath: {
      // The characters under `encode` are the characters called out by RFC 2141 as being acceptable
      // for usage in a URN. RFC2141 also calls out "-", ".", and "_" as acceptable characters, but
      // these aren't encoded by encodeURIComponent, so we don't have to call them out here. Also
      // note that the colon character is not featured in the encoding map; this is because URI.js
      // gives the colons in URNs semantic meaning as the delimiters of path segements, and so it
      // should not appear unencoded in a segment itself.
      // See also the note above about RFC3986 and capitalalized hex digits.
      encode: {
        expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,
        map: {
          '%21': '!',
          '%24': '$',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%40': '@'
        }
      },
      // These characters are the characters called out by RFC2141 as "reserved" characters that
      // should never appear in a URN, plus the colon character (see note above).
      decode: {
        expression: /[\/\?#:]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23',
          ':': '%3A'
        }
      }
    }
  };
  URI.encodeQuery = function(string, escapeQuerySpace) {
    var escaped = URI.encode(string + '');
    if (escapeQuerySpace === undefined) {
      escapeQuerySpace = URI.escapeQuerySpace;
    }

    return escapeQuerySpace ? escaped.replace(/%20/g, '+') : escaped;
  };
  URI.decodeQuery = function(string, escapeQuerySpace) {
    string += '';
    if (escapeQuerySpace === undefined) {
      escapeQuerySpace = URI.escapeQuerySpace;
    }

    try {
      return URI.decode(escapeQuerySpace ? string.replace(/\+/g, '%20') : string);
    } catch(e) {
      // we're not going to mess with weird encodings,
      // give up and return the undecoded original string
      // see https://github.com/medialize/URI.js/issues/87
      // see https://github.com/medialize/URI.js/issues/92
      return string;
    }
  };
  // generate encode/decode path functions
  var _parts = {'encode':'encode', 'decode':'decode'};
  var _part;
  var generateAccessor = function(_group, _part) {
    return function(string) {
      try {
        return URI[_part](string + '').replace(URI.characters[_group][_part].expression, function(c) {
          return URI.characters[_group][_part].map[c];
        });
      } catch (e) {
        // we're not going to mess with weird encodings,
        // give up and return the undecoded original string
        // see https://github.com/medialize/URI.js/issues/87
        // see https://github.com/medialize/URI.js/issues/92
        return string;
      }
    };
  };

  for (_part in _parts) {
    URI[_part + 'PathSegment'] = generateAccessor('pathname', _parts[_part]);
    URI[_part + 'UrnPathSegment'] = generateAccessor('urnpath', _parts[_part]);
  }

  var generateSegmentedPathFunction = function(_sep, _codingFuncName, _innerCodingFuncName) {
    return function(string) {
      // Why pass in names of functions, rather than the function objects themselves? The
      // definitions of some functions (but in particular, URI.decode) will occasionally change due
      // to URI.js having ISO8859 and Unicode modes. Passing in the name and getting it will ensure
      // that the functions we use here are "fresh".
      var actualCodingFunc;
      if (!_innerCodingFuncName) {
        actualCodingFunc = URI[_codingFuncName];
      } else {
        actualCodingFunc = function(string) {
          return URI[_codingFuncName](URI[_innerCodingFuncName](string));
        };
      }

      var segments = (string + '').split(_sep);

      for (var i = 0, length = segments.length; i < length; i++) {
        segments[i] = actualCodingFunc(segments[i]);
      }

      return segments.join(_sep);
    };
  };

  // This takes place outside the above loop because we don't want, e.g., encodeUrnPath functions.
  URI.decodePath = generateSegmentedPathFunction('/', 'decodePathSegment');
  URI.decodeUrnPath = generateSegmentedPathFunction(':', 'decodeUrnPathSegment');
  URI.recodePath = generateSegmentedPathFunction('/', 'encodePathSegment', 'decode');
  URI.recodeUrnPath = generateSegmentedPathFunction(':', 'encodeUrnPathSegment', 'decode');

  URI.encodeReserved = generateAccessor('reserved', 'encode');

  URI.parse = function(string, parts) {
    var pos;
    if (!parts) {
      parts = {
        preventInvalidHostname: URI.preventInvalidHostname
      };
    }

    string = string.replace(URI.leading_whitespace_expression, '')
    // https://infra.spec.whatwg.org/#ascii-tab-or-newline
    string = string.replace(URI.ascii_tab_whitespace, '')

    // [protocol"://"[username[":"password]"@"]hostname[":"port]"/"?][path]["?"querystring]["#"fragment]

    // extract fragment
    pos = string.indexOf('#');
    if (pos > -1) {
      // escaping?
      parts.fragment = string.substring(pos + 1) || null;
      string = string.substring(0, pos);
    }

    // extract query
    pos = string.indexOf('?');
    if (pos > -1) {
      // escaping?
      parts.query = string.substring(pos + 1) || null;
      string = string.substring(0, pos);
    }

    // slashes and backslashes have lost all meaning for the web protocols (https, http, wss, ws)
    string = string.replace(/^(https?|ftp|wss?)?:+[/\\]*/i, '$1://');
    // slashes and backslashes have lost all meaning for scheme relative URLs
    string = string.replace(/^[/\\]{2,}/i, '//');

    // extract protocol
    if (string.substring(0, 2) === '//') {
      // relative-scheme
      parts.protocol = null;
      string = string.substring(2);
      // extract "user:pass@host:port"
      string = URI.parseAuthority(string, parts);
    } else {
      pos = string.indexOf(':');
      if (pos > -1) {
        parts.protocol = string.substring(0, pos) || null;
        if (parts.protocol && !parts.protocol.match(URI.protocol_expression)) {
          // : may be within the path
          parts.protocol = undefined;
        } else if (string.substring(pos + 1, pos + 3).replace(/\\/g, '/') === '//') {
          string = string.substring(pos + 3);

          // extract "user:pass@host:port"
          string = URI.parseAuthority(string, parts);
        } else {
          string = string.substring(pos + 1);
          parts.urn = true;
        }
      }
    }

    // what's left must be the path
    parts.path = string;

    // and we're done
    return parts;
  };
  URI.parseHost = function(string, parts) {
    if (!string) {
      string = '';
    }

    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://github.com/joyent/node/blob/386fd24f49b0e9d1a8a076592a404168faeecc34/lib/url.js#L115-L124
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    // https://github.com/medialize/URI.js/pull/233
    string = string.replace(/\\/g, '/');

    // extract host:port
    var pos = string.indexOf('/');
    var bracketPos;
    var t;

    if (pos === -1) {
      pos = string.length;
    }

    if (string.charAt(0) === '[') {
      // IPv6 host - http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04#section-6
      // I claim most client software breaks on IPv6 anyways. To simplify things, URI only accepts
      // IPv6+port in the format [2001:db8::1]:80 (for the time being)
      bracketPos = string.indexOf(']');
      parts.hostname = string.substring(1, bracketPos) || null;
      parts.port = string.substring(bracketPos + 2, pos) || null;
      if (parts.port === '/') {
        parts.port = null;
      }
    } else {
      var firstColon = string.indexOf(':');
      var firstSlash = string.indexOf('/');
      var nextColon = string.indexOf(':', firstColon + 1);
      if (nextColon !== -1 && (firstSlash === -1 || nextColon < firstSlash)) {
        // IPv6 host contains multiple colons - but no port
        // this notation is actually not allowed by RFC 3986, but we're a liberal parser
        parts.hostname = string.substring(0, pos) || null;
        parts.port = null;
      } else {
        t = string.substring(0, pos).split(':');
        parts.hostname = t[0] || null;
        parts.port = t[1] || null;
      }
    }

    if (parts.hostname && string.substring(pos).charAt(0) !== '/') {
      pos++;
      string = '/' + string;
    }

    if (parts.preventInvalidHostname) {
      URI.ensureValidHostname(parts.hostname, parts.protocol);
    }

    if (parts.port) {
      URI.ensureValidPort(parts.port);
    }

    return string.substring(pos) || '/';
  };
  URI.parseAuthority = function(string, parts) {
    string = URI.parseUserinfo(string, parts);
    return URI.parseHost(string, parts);
  };
  URI.parseUserinfo = function(string, parts) {
    // extract username:password
    var _string = string
    var firstBackSlash = string.indexOf('\\');
    if (firstBackSlash !== -1) {
      string = string.replace(/\\/g, '/')
    }
    var firstSlash = string.indexOf('/');
    var pos = string.lastIndexOf('@', firstSlash > -1 ? firstSlash : string.length - 1);
    var t;

    // authority@ must come before /path or \path
    if (pos > -1 && (firstSlash === -1 || pos < firstSlash)) {
      t = string.substring(0, pos).split(':');
      parts.username = t[0] ? URI.decode(t[0]) : null;
      t.shift();
      parts.password = t[0] ? URI.decode(t.join(':')) : null;
      string = _string.substring(pos + 1);
    } else {
      parts.username = null;
      parts.password = null;
    }

    return string;
  };
  URI.parseQuery = function(string, escapeQuerySpace) {
    if (!string) {
      return {};
    }

    // throw out the funky business - "?"[name"="value"&"]+
    string = string.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '');

    if (!string) {
      return {};
    }

    var items = {};
    var splits = string.split('&');
    var length = splits.length;
    var v, name, value;

    for (var i = 0; i < length; i++) {
      v = splits[i].split('=');
      name = URI.decodeQuery(v.shift(), escapeQuerySpace);
      // no "=" is null according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#collect-url-parameters
      value = v.length ? URI.decodeQuery(v.join('='), escapeQuerySpace) : null;

      if (name === '__proto__') {
        // ignore attempt at exploiting JavaScript internals
        continue;
      } else if (hasOwn.call(items, name)) {
        if (typeof items[name] === 'string' || items[name] === null) {
          items[name] = [items[name]];
        }

        items[name].push(value);
      } else {
        items[name] = value;
      }
    }

    return items;
  };

  URI.build = function(parts) {
    var t = '';
    var requireAbsolutePath = false

    if (parts.protocol) {
      t += parts.protocol + ':';
    }

    if (!parts.urn && (t || parts.hostname)) {
      t += '//';
      requireAbsolutePath = true
    }

    t += (URI.buildAuthority(parts) || '');

    if (typeof parts.path === 'string') {
      if (parts.path.charAt(0) !== '/' && requireAbsolutePath) {
        t += '/';
      }

      t += parts.path;
    }

    if (typeof parts.query === 'string' && parts.query) {
      t += '?' + parts.query;
    }

    if (typeof parts.fragment === 'string' && parts.fragment) {
      t += '#' + parts.fragment;
    }
    return t;
  };
  URI.buildHost = function(parts) {
    var t = '';

    if (!parts.hostname) {
      return '';
    } else if (URI.ip6_expression.test(parts.hostname)) {
      t += '[' + parts.hostname + ']';
    } else {
      t += parts.hostname;
    }

    if (parts.port) {
      t += ':' + parts.port;
    }

    return t;
  };
  URI.buildAuthority = function(parts) {
    return URI.buildUserinfo(parts) + URI.buildHost(parts);
  };
  URI.buildUserinfo = function(parts) {
    var t = '';

    if (parts.username) {
      t += URI.encode(parts.username);
    }

    if (parts.password) {
      t += ':' + URI.encode(parts.password);
    }

    if (t) {
      t += '@';
    }

    return t;
  };
  URI.buildQuery = function(data, duplicateQueryParameters, escapeQuerySpace) {
    // according to http://tools.ietf.org/html/rfc3986 or http://labs.apache.org/webarch/uri/rfc/rfc3986.html
    // being »-._~!$&'()*+,;=:@/?« %HEX and alnum are allowed
    // the RFC explicitly states ?/foo being a valid use case, no mention of parameter syntax!
    // URI.js treats the query string as being application/x-www-form-urlencoded
    // see http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type

    var t = '';
    var unique, key, i, length;
    for (key in data) {
      if (key === '__proto__') {
        // ignore attempt at exploiting JavaScript internals
        continue;
      } else if (hasOwn.call(data, key)) {
        if (isArray(data[key])) {
          unique = {};
          for (i = 0, length = data[key].length; i < length; i++) {
            if (data[key][i] !== undefined && unique[data[key][i] + ''] === undefined) {
              t += '&' + URI.buildQueryParameter(key, data[key][i], escapeQuerySpace);
              if (duplicateQueryParameters !== true) {
                unique[data[key][i] + ''] = true;
              }
            }
          }
        } else if (data[key] !== undefined) {
          t += '&' + URI.buildQueryParameter(key, data[key], escapeQuerySpace);
        }
      }
    }

    return t.substring(1);
  };
  URI.buildQueryParameter = function(name, value, escapeQuerySpace) {
    // http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type -- application/x-www-form-urlencoded
    // don't append "=" for null values, according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#url-parameter-serialization
    return URI.encodeQuery(name, escapeQuerySpace) + (value !== null ? '=' + URI.encodeQuery(value, escapeQuerySpace) : '');
  };

  URI.addQuery = function(data, name, value) {
    if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          URI.addQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      if (data[name] === undefined) {
        data[name] = value;
        return;
      } else if (typeof data[name] === 'string') {
        data[name] = [data[name]];
      }

      if (!isArray(value)) {
        value = [value];
      }

      data[name] = (data[name] || []).concat(value);
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    }
  };

  URI.setQuery = function(data, name, value) {
    if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          URI.setQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      data[name] = value === undefined ? null : value;
    } else {
      throw new TypeError('URI.setQuery() accepts an object, string as the name parameter');
    }
  };

  URI.removeQuery = function(data, name, value) {
    var i, length, key;

    if (isArray(name)) {
      for (i = 0, length = name.length; i < length; i++) {
        data[name[i]] = undefined;
      }
    } else if (getType(name) === 'RegExp') {
      for (key in data) {
        if (name.test(key)) {
          data[key] = undefined;
        }
      }
    } else if (typeof name === 'object') {
      for (key in name) {
        if (hasOwn.call(name, key)) {
          URI.removeQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      if (value !== undefined) {
        if (getType(value) === 'RegExp') {
          if (!isArray(data[name]) && value.test(data[name])) {
            data[name] = undefined;
          } else {
            data[name] = filterArrayValues(data[name], value);
          }
        } else if (data[name] === String(value) && (!isArray(value) || value.length === 1)) {
          data[name] = undefined;
        } else if (isArray(data[name])) {
          data[name] = filterArrayValues(data[name], value);
        }
      } else {
        data[name] = undefined;
      }
    } else {
      throw new TypeError('URI.removeQuery() accepts an object, string, RegExp as the first parameter');
    }
  };
  URI.hasQuery = function(data, name, value, withinArray) {
    switch (getType(name)) {
      case 'String':
        // Nothing to do here
        break;

      case 'RegExp':
        for (var key in data) {
          if (hasOwn.call(data, key)) {
            if (name.test(key) && (value === undefined || URI.hasQuery(data, key, value))) {
              return true;
            }
          }
        }

        return false;

      case 'Object':
        for (var _key in name) {
          if (hasOwn.call(name, _key)) {
            if (!URI.hasQuery(data, _key, name[_key])) {
              return false;
            }
          }
        }

        return true;

      default:
        throw new TypeError('URI.hasQuery() accepts a string, regular expression or object as the name parameter');
    }

    switch (getType(value)) {
      case 'Undefined':
        // true if exists (but may be empty)
        return name in data; // data[name] !== undefined;

      case 'Boolean':
        // true if exists and non-empty
        var _booly = Boolean(isArray(data[name]) ? data[name].length : data[name]);
        return value === _booly;

      case 'Function':
        // allow complex comparison
        return !!value(data[name], name, data);

      case 'Array':
        if (!isArray(data[name])) {
          return false;
        }

        var op = withinArray ? arrayContains : arraysEqual;
        return op(data[name], value);

      case 'RegExp':
        if (!isArray(data[name])) {
          return Boolean(data[name] && data[name].match(value));
        }

        if (!withinArray) {
          return false;
        }

        return arrayContains(data[name], value);

      case 'Number':
        value = String(value);
        /* falls through */
      case 'String':
        if (!isArray(data[name])) {
          return data[name] === value;
        }

        if (!withinArray) {
          return false;
        }

        return arrayContains(data[name], value);

      default:
        throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter');
    }
  };


  URI.joinPaths = function() {
    var input = [];
    var segments = [];
    var nonEmptySegments = 0;

    for (var i = 0; i < arguments.length; i++) {
      var url = new URI(arguments[i]);
      input.push(url);
      var _segments = url.segment();
      for (var s = 0; s < _segments.length; s++) {
        if (typeof _segments[s] === 'string') {
          segments.push(_segments[s]);
        }

        if (_segments[s]) {
          nonEmptySegments++;
        }
      }
    }

    if (!segments.length || !nonEmptySegments) {
      return new URI('');
    }

    var uri = new URI('').segment(segments);

    if (input[0].path() === '' || input[0].path().slice(0, 1) === '/') {
      uri.path('/' + uri.path());
    }

    return uri.normalize();
  };

  URI.commonPath = function(one, two) {
    var length = Math.min(one.length, two.length);
    var pos;

    // find first non-matching character
    for (pos = 0; pos < length; pos++) {
      if (one.charAt(pos) !== two.charAt(pos)) {
        pos--;
        break;
      }
    }

    if (pos < 1) {
      return one.charAt(0) === two.charAt(0) && one.charAt(0) === '/' ? '/' : '';
    }

    // revert to last /
    if (one.charAt(pos) !== '/' || two.charAt(pos) !== '/') {
      pos = one.substring(0, pos).lastIndexOf('/');
    }

    return one.substring(0, pos + 1);
  };

  URI.withinString = function(string, callback, options) {
    options || (options = {});
    var _start = options.start || URI.findUri.start;
    var _end = options.end || URI.findUri.end;
    var _trim = options.trim || URI.findUri.trim;
    var _parens = options.parens || URI.findUri.parens;
    var _attributeOpen = /[a-z0-9-]=["']?$/i;

    _start.lastIndex = 0;
    while (true) {
      var match = _start.exec(string);
      if (!match) {
        break;
      }

      var start = match.index;
      if (options.ignoreHtml) {
        // attribut(e=["']?$)
        var attributeOpen = string.slice(Math.max(start - 3, 0), start);
        if (attributeOpen && _attributeOpen.test(attributeOpen)) {
          continue;
        }
      }

      var end = start + string.slice(start).search(_end);
      var slice = string.slice(start, end);
      // make sure we include well balanced parens
      var parensEnd = -1;
      while (true) {
        var parensMatch = _parens.exec(slice);
        if (!parensMatch) {
          break;
        }

        var parensMatchEnd = parensMatch.index + parensMatch[0].length;
        parensEnd = Math.max(parensEnd, parensMatchEnd);
      }

      if (parensEnd > -1) {
        slice = slice.slice(0, parensEnd) + slice.slice(parensEnd).replace(_trim, '');
      } else {
        slice = slice.replace(_trim, '');
      }

      if (slice.length <= match[0].length) {
        // the extract only contains the starting marker of a URI,
        // e.g. "www" or "http://"
        continue;
      }

      if (options.ignore && options.ignore.test(slice)) {
        continue;
      }

      end = start + slice.length;
      var result = callback(slice, start, end, string);
      if (result === undefined) {
        _start.lastIndex = end;
        continue;
      }

      result = String(result);
      string = string.slice(0, start) + result + string.slice(end);
      _start.lastIndex = start + result.length;
    }

    _start.lastIndex = 0;
    return string;
  };

  URI.ensureValidHostname = function(v, protocol) {
    // Theoretically URIs allow percent-encoding in Hostnames (according to RFC 3986)
    // they are not part of DNS and therefore ignored by URI.js

    var hasHostname = !!v; // not null and not an empty string
    var hasProtocol = !!protocol;
    var rejectEmptyHostname = false;

    if (hasProtocol) {
      rejectEmptyHostname = arrayContains(URI.hostProtocols, protocol);
    }

    if (rejectEmptyHostname && !hasHostname) {
      throw new TypeError('Hostname cannot be empty, if protocol is ' + protocol);
    } else if (v && v.match(URI.invalid_hostname_characters)) {
      // test punycode
      if (!punycode) {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');
      }
      if (punycode.toASCII(v).match(URI.invalid_hostname_characters)) {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-:_]');
      }
    }
  };

  URI.ensureValidPort = function (v) {
    if (!v) {
      return;
    }

    var port = Number(v);
    if (isInteger(port) && (port > 0) && (port < 65536)) {
      return;
    }

    throw new TypeError('Port "' + v + '" is not a valid port');
  };

  // noConflict
  URI.noConflict = function(removeAll) {
    if (removeAll) {
      var unconflicted = {
        URI: this.noConflict()
      };

      if (root.URITemplate && typeof root.URITemplate.noConflict === 'function') {
        unconflicted.URITemplate = root.URITemplate.noConflict();
      }

      if (root.IPv6 && typeof root.IPv6.noConflict === 'function') {
        unconflicted.IPv6 = root.IPv6.noConflict();
      }

      if (root.SecondLevelDomains && typeof root.SecondLevelDomains.noConflict === 'function') {
        unconflicted.SecondLevelDomains = root.SecondLevelDomains.noConflict();
      }

      return unconflicted;
    } else if (root.URI === this) {
      root.URI = _URI;
    }

    return this;
  };

  p.build = function(deferBuild) {
    if (deferBuild === true) {
      this._deferred_build = true;
    } else if (deferBuild === undefined || this._deferred_build) {
      this._string = URI.build(this._parts);
      this._deferred_build = false;
    }

    return this;
  };

  p.clone = function() {
    return new URI(this);
  };

  p.valueOf = p.toString = function() {
    return this.build(false)._string;
  };


  function generateSimpleAccessor(_part){
    return function(v, build) {
      if (v === undefined) {
        return this._parts[_part] || '';
      } else {
        this._parts[_part] = v || null;
        this.build(!build);
        return this;
      }
    };
  }

  function generatePrefixAccessor(_part, _key){
    return function(v, build) {
      if (v === undefined) {
        return this._parts[_part] || '';
      } else {
        if (v !== null) {
          v = v + '';
          if (v.charAt(0) === _key) {
            v = v.substring(1);
          }
        }

        this._parts[_part] = v;
        this.build(!build);
        return this;
      }
    };
  }

  p.protocol = generateSimpleAccessor('protocol');
  p.username = generateSimpleAccessor('username');
  p.password = generateSimpleAccessor('password');
  p.hostname = generateSimpleAccessor('hostname');
  p.port = generateSimpleAccessor('port');
  p.query = generatePrefixAccessor('query', '?');
  p.fragment = generatePrefixAccessor('fragment', '#');

  p.search = function(v, build) {
    var t = this.query(v, build);
    return typeof t === 'string' && t.length ? ('?' + t) : t;
  };
  p.hash = function(v, build) {
    var t = this.fragment(v, build);
    return typeof t === 'string' && t.length ? ('#' + t) : t;
  };

  p.pathname = function(v, build) {
    if (v === undefined || v === true) {
      var res = this._parts.path || (this._parts.hostname ? '/' : '');
      return v ? (this._parts.urn ? URI.decodeUrnPath : URI.decodePath)(res) : res;
    } else {
      if (this._parts.urn) {
        this._parts.path = v ? URI.recodeUrnPath(v) : '';
      } else {
        this._parts.path = v ? URI.recodePath(v) : '/';
      }
      this.build(!build);
      return this;
    }
  };
  p.path = p.pathname;
  p.href = function(href, build) {
    var key;

    if (href === undefined) {
      return this.toString();
    }

    this._string = '';
    this._parts = URI._parts();

    var _URI = href instanceof URI;
    var _object = typeof href === 'object' && (href.hostname || href.path || href.pathname);
    if (href.nodeName) {
      var attribute = URI.getDomAttribute(href);
      href = href[attribute] || '';
      _object = false;
    }

    // window.location is reported to be an object, but it's not the sort
    // of object we're looking for:
    // * location.protocol ends with a colon
    // * location.query != object.search
    // * location.hash != object.fragment
    // simply serializing the unknown object should do the trick
    // (for location, not for everything...)
    if (!_URI && _object && href.pathname !== undefined) {
      href = href.toString();
    }

    if (typeof href === 'string' || href instanceof String) {
      this._parts = URI.parse(String(href), this._parts);
    } else if (_URI || _object) {
      var src = _URI ? href._parts : href;
      for (key in src) {
        if (key === 'query') { continue; }
        if (hasOwn.call(this._parts, key)) {
          this._parts[key] = src[key];
        }
      }
      if (src.query) {
        this.query(src.query, false);
      }
    } else {
      throw new TypeError('invalid input');
    }

    this.build(!build);
    return this;
  };

  // identification accessors
  p.is = function(what) {
    var ip = false;
    var ip4 = false;
    var ip6 = false;
    var name = false;
    var sld = false;
    var idn = false;
    var punycode = false;
    var relative = !this._parts.urn;

    if (this._parts.hostname) {
      relative = false;
      ip4 = URI.ip4_expression.test(this._parts.hostname);
      ip6 = URI.ip6_expression.test(this._parts.hostname);
      ip = ip4 || ip6;
      name = !ip;
      sld = name && SLD && SLD.has(this._parts.hostname);
      idn = name && URI.idn_expression.test(this._parts.hostname);
      punycode = name && URI.punycode_expression.test(this._parts.hostname);
    }

    switch (what.toLowerCase()) {
      case 'relative':
        return relative;

      case 'absolute':
        return !relative;

      // hostname identification
      case 'domain':
      case 'name':
        return name;

      case 'sld':
        return sld;

      case 'ip':
        return ip;

      case 'ip4':
      case 'ipv4':
      case 'inet4':
        return ip4;

      case 'ip6':
      case 'ipv6':
      case 'inet6':
        return ip6;

      case 'idn':
        return idn;

      case 'url':
        return !this._parts.urn;

      case 'urn':
        return !!this._parts.urn;

      case 'punycode':
        return punycode;
    }

    return null;
  };

  // component specific input validation
  var _protocol = p.protocol;
  var _port = p.port;
  var _hostname = p.hostname;

  p.protocol = function(v, build) {
    if (v) {
      // accept trailing ://
      v = v.replace(/:(\/\/)?$/, '');

      if (!v.match(URI.protocol_expression)) {
        throw new TypeError('Protocol "' + v + '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]');
      }
    }

    return _protocol.call(this, v, build);
  };
  p.scheme = p.protocol;
  p.port = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v !== undefined) {
      if (v === 0) {
        v = null;
      }

      if (v) {
        v += '';
        if (v.charAt(0) === ':') {
          v = v.substring(1);
        }

        URI.ensureValidPort(v);
      }
    }
    return _port.call(this, v, build);
  };
  p.hostname = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v !== undefined) {
      var x = { preventInvalidHostname: this._parts.preventInvalidHostname };
      var res = URI.parseHost(v, x);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      v = x.hostname;
      if (this._parts.preventInvalidHostname) {
        URI.ensureValidHostname(v, this._parts.protocol);
      }
    }

    return _hostname.call(this, v, build);
  };

  // compound accessors
  p.origin = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      var protocol = this.protocol();
      var authority = this.authority();
      if (!authority) {
        return '';
      }

      return (protocol ? protocol + '://' : '') + this.authority();
    } else {
      var origin = URI(v);
      this
        .protocol(origin.protocol())
        .authority(origin.authority())
        .build(!build);
      return this;
    }
  };
  p.host = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      return this._parts.hostname ? URI.buildHost(this._parts) : '';
    } else {
      var res = URI.parseHost(v, this._parts);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      this.build(!build);
      return this;
    }
  };
  p.authority = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      return this._parts.hostname ? URI.buildAuthority(this._parts) : '';
    } else {
      var res = URI.parseAuthority(v, this._parts);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      this.build(!build);
      return this;
    }
  };
  p.userinfo = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      var t = URI.buildUserinfo(this._parts);
      return t ? t.substring(0, t.length -1) : t;
    } else {
      if (v[v.length-1] !== '@') {
        v += '@';
      }

      URI.parseUserinfo(v, this._parts);
      this.build(!build);
      return this;
    }
  };
  p.resource = function(v, build) {
    var parts;

    if (v === undefined) {
      return this.path() + this.search() + this.hash();
    }

    parts = URI.parse(v);
    this._parts.path = parts.path;
    this._parts.query = parts.query;
    this._parts.fragment = parts.fragment;
    this.build(!build);
    return this;
  };

  // fraction accessors
  p.subdomain = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    // convenience, return "www" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      // grab domain and add another segment
      var end = this._parts.hostname.length - this.domain().length - 1;
      return this._parts.hostname.substring(0, end) || '';
    } else {
      var e = this._parts.hostname.length - this.domain().length;
      var sub = this._parts.hostname.substring(0, e);
      var replace = new RegExp('^' + escapeRegEx(sub));

      if (v && v.charAt(v.length - 1) !== '.') {
        v += '.';
      }

      if (v.indexOf(':') !== -1) {
        throw new TypeError('Domains cannot contain colons');
      }

      if (v) {
        URI.ensureValidHostname(v, this._parts.protocol);
      }

      this._parts.hostname = this._parts.hostname.replace(replace, v);
      this.build(!build);
      return this;
    }
  };
  p.domain = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v === 'boolean') {
      build = v;
      v = undefined;
    }

    // convenience, return "example.org" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      // if hostname consists of 1 or 2 segments, it must be the domain
      var t = this._parts.hostname.match(/\./g);
      if (t && t.length < 2) {
        return this._parts.hostname;
      }

      // grab tld and add another segment
      var end = this._parts.hostname.length - this.tld(build).length - 1;
      end = this._parts.hostname.lastIndexOf('.', end -1) + 1;
      return this._parts.hostname.substring(end) || '';
    } else {
      if (!v) {
        throw new TypeError('cannot set domain empty');
      }

      if (v.indexOf(':') !== -1) {
        throw new TypeError('Domains cannot contain colons');
      }

      URI.ensureValidHostname(v, this._parts.protocol);

      if (!this._parts.hostname || this.is('IP')) {
        this._parts.hostname = v;
      } else {
        var replace = new RegExp(escapeRegEx(this.domain()) + '$');
        this._parts.hostname = this._parts.hostname.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.tld = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v === 'boolean') {
      build = v;
      v = undefined;
    }

    // return "org" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      var pos = this._parts.hostname.lastIndexOf('.');
      var tld = this._parts.hostname.substring(pos + 1);

      if (build !== true && SLD && SLD.list[tld.toLowerCase()]) {
        return SLD.get(this._parts.hostname) || tld;
      }

      return tld;
    } else {
      var replace;

      if (!v) {
        throw new TypeError('cannot set TLD empty');
      } else if (v.match(/[^a-zA-Z0-9-]/)) {
        if (SLD && SLD.is(v)) {
          replace = new RegExp(escapeRegEx(this.tld()) + '$');
          this._parts.hostname = this._parts.hostname.replace(replace, v);
        } else {
          throw new TypeError('TLD "' + v + '" contains characters other than [A-Z0-9]');
        }
      } else if (!this._parts.hostname || this.is('IP')) {
        throw new ReferenceError('cannot set TLD on non-domain host');
      } else {
        replace = new RegExp(escapeRegEx(this.tld()) + '$');
        this._parts.hostname = this._parts.hostname.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.directory = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path && !this._parts.hostname) {
        return '';
      }

      if (this._parts.path === '/') {
        return '/';
      }

      var end = this._parts.path.length - this.filename().length - 1;
      var res = this._parts.path.substring(0, end) || (this._parts.hostname ? '/' : '');

      return v ? URI.decodePath(res) : res;

    } else {
      var e = this._parts.path.length - this.filename().length;
      var directory = this._parts.path.substring(0, e);
      var replace = new RegExp('^' + escapeRegEx(directory));

      // fully qualifier directories begin with a slash
      if (!this.is('relative')) {
        if (!v) {
          v = '/';
        }

        if (v.charAt(0) !== '/') {
          v = '/' + v;
        }
      }

      // directories always end with a slash
      if (v && v.charAt(v.length - 1) !== '/') {
        v += '/';
      }

      v = URI.recodePath(v);
      this._parts.path = this._parts.path.replace(replace, v);
      this.build(!build);
      return this;
    }
  };
  p.filename = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v !== 'string') {
      if (!this._parts.path || this._parts.path === '/') {
        return '';
      }

      var pos = this._parts.path.lastIndexOf('/');
      var res = this._parts.path.substring(pos+1);

      return v ? URI.decodePathSegment(res) : res;
    } else {
      var mutatedDirectory = false;

      if (v.charAt(0) === '/') {
        v = v.substring(1);
      }

      if (v.match(/\.?\//)) {
        mutatedDirectory = true;
      }

      var replace = new RegExp(escapeRegEx(this.filename()) + '$');
      v = URI.recodePath(v);
      this._parts.path = this._parts.path.replace(replace, v);

      if (mutatedDirectory) {
        this.normalizePath(build);
      } else {
        this.build(!build);
      }

      return this;
    }
  };
  p.suffix = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path || this._parts.path === '/') {
        return '';
      }

      var filename = this.filename();
      var pos = filename.lastIndexOf('.');
      var s, res;

      if (pos === -1) {
        return '';
      }

      // suffix may only contain alnum characters (yup, I made this up.)
      s = filename.substring(pos+1);
      res = (/^[a-z0-9%]+$/i).test(s) ? s : '';
      return v ? URI.decodePathSegment(res) : res;
    } else {
      if (v.charAt(0) === '.') {
        v = v.substring(1);
      }

      var suffix = this.suffix();
      var replace;

      if (!suffix) {
        if (!v) {
          return this;
        }

        this._parts.path += '.' + URI.recodePath(v);
      } else if (!v) {
        replace = new RegExp(escapeRegEx('.' + suffix) + '$');
      } else {
        replace = new RegExp(escapeRegEx(suffix) + '$');
      }

      if (replace) {
        v = URI.recodePath(v);
        this._parts.path = this._parts.path.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.segment = function(segment, v, build) {
    var separator = this._parts.urn ? ':' : '/';
    var path = this.path();
    var absolute = path.substring(0, 1) === '/';
    var segments = path.split(separator);

    if (segment !== undefined && typeof segment !== 'number') {
      build = v;
      v = segment;
      segment = undefined;
    }

    if (segment !== undefined && typeof segment !== 'number') {
      throw new Error('Bad segment "' + segment + '", must be 0-based integer');
    }

    if (absolute) {
      segments.shift();
    }

    if (segment < 0) {
      // allow negative indexes to address from the end
      segment = Math.max(segments.length + segment, 0);
    }

    if (v === undefined) {
      /*jshint laxbreak: true */
      return segment === undefined
        ? segments
        : segments[segment];
      /*jshint laxbreak: false */
    } else if (segment === null || segments[segment] === undefined) {
      if (isArray(v)) {
        segments = [];
        // collapse empty elements within array
        for (var i=0, l=v.length; i < l; i++) {
          if (!v[i].length && (!segments.length || !segments[segments.length -1].length)) {
            continue;
          }

          if (segments.length && !segments[segments.length -1].length) {
            segments.pop();
          }

          segments.push(trimSlashes(v[i]));
        }
      } else if (v || typeof v === 'string') {
        v = trimSlashes(v);
        if (segments[segments.length -1] === '') {
          // empty trailing elements have to be overwritten
          // to prevent results such as /foo//bar
          segments[segments.length -1] = v;
        } else {
          segments.push(v);
        }
      }
    } else {
      if (v) {
        segments[segment] = trimSlashes(v);
      } else {
        segments.splice(segment, 1);
      }
    }

    if (absolute) {
      segments.unshift('');
    }

    return this.path(segments.join(separator), build);
  };
  p.segmentCoded = function(segment, v, build) {
    var segments, i, l;

    if (typeof segment !== 'number') {
      build = v;
      v = segment;
      segment = undefined;
    }

    if (v === undefined) {
      segments = this.segment(segment, v, build);
      if (!isArray(segments)) {
        segments = segments !== undefined ? URI.decode(segments) : undefined;
      } else {
        for (i = 0, l = segments.length; i < l; i++) {
          segments[i] = URI.decode(segments[i]);
        }
      }

      return segments;
    }

    if (!isArray(v)) {
      v = (typeof v === 'string' || v instanceof String) ? URI.encode(v) : v;
    } else {
      for (i = 0, l = v.length; i < l; i++) {
        v[i] = URI.encode(v[i]);
      }
    }

    return this.segment(segment, v, build);
  };

  // mutating query string
  var q = p.query;
  p.query = function(v, build) {
    if (v === true) {
      return URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    } else if (typeof v === 'function') {
      var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
      var result = v.call(this, data);
      this._parts.query = URI.buildQuery(result || data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      this.build(!build);
      return this;
    } else if (v !== undefined && typeof v !== 'string') {
      this._parts.query = URI.buildQuery(v, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      this.build(!build);
      return this;
    } else {
      return q.call(this, v, build);
    }
  };
  p.setQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);

    if (typeof name === 'string' || name instanceof String) {
      data[name] = value !== undefined ? value : null;
    } else if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          data[key] = name[key];
        }
      }
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    }

    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.addQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    URI.addQuery(data, name, value === undefined ? null : value);
    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.removeQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    URI.removeQuery(data, name, value);
    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.hasQuery = function(name, value, withinArray) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    return URI.hasQuery(data, name, value, withinArray);
  };
  p.setSearch = p.setQuery;
  p.addSearch = p.addQuery;
  p.removeSearch = p.removeQuery;
  p.hasSearch = p.hasQuery;

  // sanitizing URLs
  p.normalize = function() {
    if (this._parts.urn) {
      return this
        .normalizeProtocol(false)
        .normalizePath(false)
        .normalizeQuery(false)
        .normalizeFragment(false)
        .build();
    }

    return this
      .normalizeProtocol(false)
      .normalizeHostname(false)
      .normalizePort(false)
      .normalizePath(false)
      .normalizeQuery(false)
      .normalizeFragment(false)
      .build();
  };
  p.normalizeProtocol = function(build) {
    if (typeof this._parts.protocol === 'string') {
      this._parts.protocol = this._parts.protocol.toLowerCase();
      this.build(!build);
    }

    return this;
  };
  p.normalizeHostname = function(build) {
    if (this._parts.hostname) {
      if (this.is('IDN') && punycode) {
        this._parts.hostname = punycode.toASCII(this._parts.hostname);
      } else if (this.is('IPv6') && IPv6) {
        this._parts.hostname = IPv6.best(this._parts.hostname);
      }

      this._parts.hostname = this._parts.hostname.toLowerCase();
      this.build(!build);
    }

    return this;
  };
  p.normalizePort = function(build) {
    // remove port of it's the protocol's default
    if (typeof this._parts.protocol === 'string' && this._parts.port === URI.defaultPorts[this._parts.protocol]) {
      this._parts.port = null;
      this.build(!build);
    }

    return this;
  };
  p.normalizePath = function(build) {
    var _path = this._parts.path;
    if (!_path) {
      return this;
    }

    if (this._parts.urn) {
      this._parts.path = URI.recodeUrnPath(this._parts.path);
      this.build(!build);
      return this;
    }

    if (this._parts.path === '/') {
      return this;
    }

    _path = URI.recodePath(_path);

    var _was_relative;
    var _leadingParents = '';
    var _parent, _pos;

    // handle relative paths
    if (_path.charAt(0) !== '/') {
      _was_relative = true;
      _path = '/' + _path;
    }

    // handle relative files (as opposed to directories)
    if (_path.slice(-3) === '/..' || _path.slice(-2) === '/.') {
      _path += '/';
    }

    // resolve simples
    _path = _path
      .replace(/(\/(\.\/)+)|(\/\.$)/g, '/')
      .replace(/\/{2,}/g, '/');

    // remember leading parents
    if (_was_relative) {
      _leadingParents = _path.substring(1).match(/^(\.\.\/)+/) || '';
      if (_leadingParents) {
        _leadingParents = _leadingParents[0];
      }
    }

    // resolve parents
    while (true) {
      _parent = _path.search(/\/\.\.(\/|$)/);
      if (_parent === -1) {
        // no more ../ to resolve
        break;
      } else if (_parent === 0) {
        // top level cannot be relative, skip it
        _path = _path.substring(3);
        continue;
      }

      _pos = _path.substring(0, _parent).lastIndexOf('/');
      if (_pos === -1) {
        _pos = _parent;
      }
      _path = _path.substring(0, _pos) + _path.substring(_parent + 3);
    }

    // revert to relative
    if (_was_relative && this.is('relative')) {
      _path = _leadingParents + _path.substring(1);
    }

    this._parts.path = _path;
    this.build(!build);
    return this;
  };
  p.normalizePathname = p.normalizePath;
  p.normalizeQuery = function(build) {
    if (typeof this._parts.query === 'string') {
      if (!this._parts.query.length) {
        this._parts.query = null;
      } else {
        this.query(URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace));
      }

      this.build(!build);
    }

    return this;
  };
  p.normalizeFragment = function(build) {
    if (!this._parts.fragment) {
      this._parts.fragment = null;
      this.build(!build);
    }

    return this;
  };
  p.normalizeSearch = p.normalizeQuery;
  p.normalizeHash = p.normalizeFragment;

  p.iso8859 = function() {
    // expect unicode input, iso8859 output
    var e = URI.encode;
    var d = URI.decode;

    URI.encode = escape;
    URI.decode = decodeURIComponent;
    try {
      this.normalize();
    } finally {
      URI.encode = e;
      URI.decode = d;
    }
    return this;
  };

  p.unicode = function() {
    // expect iso8859 input, unicode output
    var e = URI.encode;
    var d = URI.decode;

    URI.encode = strictEncodeURIComponent;
    URI.decode = unescape;
    try {
      this.normalize();
    } finally {
      URI.encode = e;
      URI.decode = d;
    }
    return this;
  };

  p.readable = function() {
    var uri = this.clone();
    // removing username, password, because they shouldn't be displayed according to RFC 3986
    uri.username('').password('').normalize();
    var t = '';
    if (uri._parts.protocol) {
      t += uri._parts.protocol + '://';
    }

    if (uri._parts.hostname) {
      if (uri.is('punycode') && punycode) {
        t += punycode.toUnicode(uri._parts.hostname);
        if (uri._parts.port) {
          t += ':' + uri._parts.port;
        }
      } else {
        t += uri.host();
      }
    }

    if (uri._parts.hostname && uri._parts.path && uri._parts.path.charAt(0) !== '/') {
      t += '/';
    }

    t += uri.path(true);
    if (uri._parts.query) {
      var q = '';
      for (var i = 0, qp = uri._parts.query.split('&'), l = qp.length; i < l; i++) {
        var kv = (qp[i] || '').split('=');
        q += '&' + URI.decodeQuery(kv[0], this._parts.escapeQuerySpace)
          .replace(/&/g, '%26');

        if (kv[1] !== undefined) {
          q += '=' + URI.decodeQuery(kv[1], this._parts.escapeQuerySpace)
            .replace(/&/g, '%26');
        }
      }
      t += '?' + q.substring(1);
    }

    t += URI.decodeQuery(uri.hash(), true);
    return t;
  };

  // resolving relative and absolute URLs
  p.absoluteTo = function(base) {
    var resolved = this.clone();
    var properties = ['protocol', 'username', 'password', 'hostname', 'port'];
    var basedir, i, p;

    if (this._parts.urn) {
      throw new Error('URNs do not have any generally defined hierarchical components');
    }

    if (!(base instanceof URI)) {
      base = new URI(base);
    }

    if (resolved._parts.protocol) {
      // Directly returns even if this._parts.hostname is empty.
      return resolved;
    } else {
      resolved._parts.protocol = base._parts.protocol;
    }

    if (this._parts.hostname) {
      return resolved;
    }

    for (i = 0; (p = properties[i]); i++) {
      resolved._parts[p] = base._parts[p];
    }

    if (!resolved._parts.path) {
      resolved._parts.path = base._parts.path;
      if (!resolved._parts.query) {
        resolved._parts.query = base._parts.query;
      }
    } else {
      if (resolved._parts.path.substring(-2) === '..') {
        resolved._parts.path += '/';
      }

      if (resolved.path().charAt(0) !== '/') {
        basedir = base.directory();
        basedir = basedir ? basedir : base.path().indexOf('/') === 0 ? '/' : '';
        resolved._parts.path = (basedir ? (basedir + '/') : '') + resolved._parts.path;
        resolved.normalizePath();
      }
    }

    resolved.build();
    return resolved;
  };
  p.relativeTo = function(base) {
    var relative = this.clone().normalize();
    var relativeParts, baseParts, common, relativePath, basePath;

    if (relative._parts.urn) {
      throw new Error('URNs do not have any generally defined hierarchical components');
    }

    base = new URI(base).normalize();
    relativeParts = relative._parts;
    baseParts = base._parts;
    relativePath = relative.path();
    basePath = base.path();

    if (relativePath.charAt(0) !== '/') {
      throw new Error('URI is already relative');
    }

    if (basePath.charAt(0) !== '/') {
      throw new Error('Cannot calculate a URI relative to another relative URI');
    }

    if (relativeParts.protocol === baseParts.protocol) {
      relativeParts.protocol = null;
    }

    if (relativeParts.username !== baseParts.username || relativeParts.password !== baseParts.password) {
      return relative.build();
    }

    if (relativeParts.protocol !== null || relativeParts.username !== null || relativeParts.password !== null) {
      return relative.build();
    }

    if (relativeParts.hostname === baseParts.hostname && relativeParts.port === baseParts.port) {
      relativeParts.hostname = null;
      relativeParts.port = null;
    } else {
      return relative.build();
    }

    if (relativePath === basePath) {
      relativeParts.path = '';
      return relative.build();
    }

    // determine common sub path
    common = URI.commonPath(relativePath, basePath);

    // If the paths have nothing in common, return a relative URL with the absolute path.
    if (!common) {
      return relative.build();
    }

    var parents = baseParts.path
      .substring(common.length)
      .replace(/[^\/]*$/, '')
      .replace(/.*?\//g, '../');

    relativeParts.path = (parents + relativeParts.path.substring(common.length)) || './';

    return relative.build();
  };

  // comparing URIs
  p.equals = function(uri) {
    var one = this.clone();
    var two = new URI(uri);
    var one_map = {};
    var two_map = {};
    var checked = {};
    var one_query, two_query, key;

    one.normalize();
    two.normalize();

    // exact match
    if (one.toString() === two.toString()) {
      return true;
    }

    // extract query string
    one_query = one.query();
    two_query = two.query();
    one.query('');
    two.query('');

    // definitely not equal if not even non-query parts match
    if (one.toString() !== two.toString()) {
      return false;
    }

    // query parameters have the same length, even if they're permuted
    if (one_query.length !== two_query.length) {
      return false;
    }

    one_map = URI.parseQuery(one_query, this._parts.escapeQuerySpace);
    two_map = URI.parseQuery(two_query, this._parts.escapeQuerySpace);

    for (key in one_map) {
      if (hasOwn.call(one_map, key)) {
        if (!isArray(one_map[key])) {
          if (one_map[key] !== two_map[key]) {
            return false;
          }
        } else if (!arraysEqual(one_map[key], two_map[key])) {
          return false;
        }

        checked[key] = true;
      }
    }

    for (key in two_map) {
      if (hasOwn.call(two_map, key)) {
        if (!checked[key]) {
          // two contains a parameter not present in one
          return false;
        }
      }
    }

    return true;
  };

  // state
  p.preventInvalidHostname = function(v) {
    this._parts.preventInvalidHostname = !!v;
    return this;
  };

  p.duplicateQueryParameters = function(v) {
    this._parts.duplicateQueryParameters = !!v;
    return this;
  };

  p.escapeQuerySpace = function(v) {
    this._parts.escapeQuerySpace = !!v;
    return this;
  };

  return URI;
}));


/***/ }),

/***/ "./node_modules/urijs/src/punycode.js":
/*!********************************************!*\
  !*** ./node_modules/urijs/src/punycode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.0 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXJpanMvc3JjL0lQdjYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VyaWpzL3NyYy9TZWNvbmRMZXZlbERvbWFpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VyaWpzL3NyYy9VUkkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VyaWpzL3NyYy9wdW55Y29kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLEtBQTBCO0FBQ2hDO0FBQ0E7QUFDQSxHQUFHLFVBQVUsSUFBMEM7QUFDdkQ7QUFDQSxJQUFJLG9DQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUNuQixHQUFHLE1BQU0sRUFHTjtBQUNILENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsV0FBVztBQUM5QjtBQUNBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxlQUFlLFdBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN4TEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUEwQjtBQUNoQztBQUNBO0FBQ0EsR0FBRyxVQUFVLElBQTBDO0FBQ3ZEO0FBQ0EsSUFBSSxvQ0FBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBQUM7QUFDbkIsR0FBRyxNQUFNLEVBR047QUFDSCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNwUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUEwQjtBQUNoQztBQUNBLDZCQUE2QixtQkFBTyxDQUFDLHdEQUFZLEdBQUcsbUJBQU8sQ0FBQyxnREFBUSxHQUFHLG1CQUFPLENBQUMsNEVBQXNCO0FBQ3JHLEdBQUcsVUFBVSxJQUEwQztBQUN2RDtBQUNBLElBQUksaUNBQU8sQ0FBQyw2RUFBWSxFQUFFLHFFQUFRLEVBQUUsaUdBQXNCLENBQUMsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUNyRSxHQUFHLE1BQU0sRUFHTjtBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0NBQXdDLFlBQVk7QUFDcEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLHFDQUFxQyxZQUFZO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLFlBQVk7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxJQUFJLEdBQUcsRUFBRSxhQUFhLElBQUksbUJBQW1CLElBQUksR0FBRyxFQUFFLGNBQWMsSUFBSSx5RUFBeUUsRUFBRSxvQkFBb0IsSUFBSSxHQUFHLEVBQUUsZ0JBQWdCLElBQUksRUFBRSxJQUFJLDJFQUEyRSxFQUFFLG9CQUFvQixJQUFJLEdBQUcsRUFBRSxnQkFBZ0IsSUFBSSxFQUFFLElBQUksaUJBQWlCLElBQUksMkVBQTJFLEVBQUUscUJBQXFCLElBQUksR0FBRyxFQUFFLGdCQUFnQixJQUFJLEVBQUUsSUFBSSxpQkFBaUIsSUFBSSxFQUFFLElBQUkseUVBQXlFLEVBQUUscUJBQXFCLElBQUksR0FBRyxFQUFFLGdCQUFnQixJQUFJLEVBQUUsSUFBSSxpQkFBaUIsSUFBSSxFQUFFLElBQUkseUVBQXlFLEVBQUUscUJBQXFCLElBQUksR0FBRyxFQUFFLGdCQUFnQixJQUFJLEVBQUUsSUFBSSxpQkFBaUIsSUFBSSxFQUFFLElBQUkseUVBQXlFLEVBQUUseUJBQXlCLElBQUksRUFBRSxJQUFJLGlCQUFpQixJQUFJLEVBQUUsSUFBSSx5RUFBeUUsRUFBRTtBQUM5akM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsSUFBSSxrQkFBa0IsSUFBSSx5QkFBeUIsSUFBSSwwR0FBMEc7QUFDdE47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLDJDQUEyQztBQUMzQyxzQ0FBc0MsR0FBRyxJQUFJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxHQUFHOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGdEQUFnRCxZQUFZO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU87QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLHdDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsR0FBRzs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxPQUFPO0FBQzdFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHFCQUFxQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQzN6RUQ7QUFDQSxDQUFDOztBQUVEO0FBQ0EsbUJBQW1CLEtBQTBCO0FBQzdDO0FBQ0Esa0JBQWtCLEtBQXlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixZQUFZLFNBQVM7QUFDckI7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksU0FBUztBQUNyQjtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxLQUFLO0FBQ0wsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksTUFBTTtBQUNsQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCOztBQUV4Qix5Q0FBeUMscUJBQXFCOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9CQUFvQjs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxpQkFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxjQUFjLGlCQUFpQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixvQkFBb0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFFVTtBQUNaO0FBQ0EsRUFBRSxtQ0FBbUI7QUFDckI7QUFDQSxHQUFHO0FBQUEsb0dBQUM7QUFDSixFQUFFLE1BQU0sRUFhTjs7QUFFRixDQUFDIiwiZmlsZSI6InZlbmRvcnN+YWN0aW9ufmVuaGF2by9hcHAvdmlld35ncmlkfm1haW5+dmlld352dWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIFVSSS5qcyAtIE11dGF0aW5nIFVSTHNcbiAqIElQdjYgU3VwcG9ydFxuICpcbiAqIFZlcnNpb246IDEuMTkuMTFcbiAqXG4gKiBBdXRob3I6IFJvZG5leSBSZWhtXG4gKiBXZWI6IGh0dHA6Ly9tZWRpYWxpemUuZ2l0aHViLmlvL1VSSS5qcy9cbiAqXG4gKiBMaWNlbnNlZCB1bmRlclxuICogICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlXG4gKlxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAndXNlIHN0cmljdCc7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvcmV0dXJuRXhwb3J0cy5qc1xuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBOb2RlXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShmYWN0b3J5KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgIHJvb3QuSVB2NiA9IGZhY3Rvcnkocm9vdCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKHJvb3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qXG4gIHZhciBfaW4gPSBcImZlODA6MDAwMDowMDAwOjAwMDA6MDIwNDo2MWZmOmZlOWQ6ZjE1NlwiO1xuICB2YXIgX291dCA9IElQdjYuYmVzdChfaW4pO1xuICB2YXIgX2V4cGVjdGVkID0gXCJmZTgwOjoyMDQ6NjFmZjpmZTlkOmYxNTZcIjtcblxuICBjb25zb2xlLmxvZyhfaW4sIF9vdXQsIF9leHBlY3RlZCwgX291dCA9PT0gX2V4cGVjdGVkKTtcbiAgKi9cblxuICAvLyBzYXZlIGN1cnJlbnQgSVB2NiB2YXJpYWJsZSwgaWYgYW55XG4gIHZhciBfSVB2NiA9IHJvb3QgJiYgcm9vdC5JUHY2O1xuXG4gIGZ1bmN0aW9uIGJlc3RQcmVzZW50YXRpb24oYWRkcmVzcykge1xuICAgIC8vIGJhc2VkIG9uOlxuICAgIC8vIEphdmFzY3JpcHQgdG8gdGVzdCBhbiBJUHY2IGFkZHJlc3MgZm9yIHByb3BlciBmb3JtYXQsIGFuZCB0b1xuICAgIC8vIHByZXNlbnQgdGhlIFwiYmVzdCB0ZXh0IHJlcHJlc2VudGF0aW9uXCIgYWNjb3JkaW5nIHRvIElFVEYgRHJhZnQgUkZDIGF0XG4gICAgLy8gaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvZHJhZnQtaWV0Zi02bWFuLXRleHQtYWRkci1yZXByZXNlbnRhdGlvbi0wNFxuICAgIC8vIDggRmViIDIwMTAgUmljaCBCcm93biwgRGFydHdhcmUsIExMQ1xuICAgIC8vIFBsZWFzZSBmZWVsIGZyZWUgdG8gdXNlIHRoaXMgY29kZSBhcyBsb25nIGFzIHlvdSBwcm92aWRlIGEgbGluayB0b1xuICAgIC8vIGh0dHA6Ly93d3cuaW50ZXJtYXBwZXIuY29tXG4gICAgLy8gaHR0cDovL2ludGVybWFwcGVyLmNvbS9zdXBwb3J0L3Rvb2xzL0lQVjYtVmFsaWRhdG9yLmFzcHhcbiAgICAvLyBodHRwOi8vZG93bmxvYWQuZGFydHdhcmUuY29tL3RoaXJkcGFydHkvaXB2NnZhbGlkYXRvci5qc1xuXG4gICAgdmFyIF9hZGRyZXNzID0gYWRkcmVzcy50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBzZWdtZW50cyA9IF9hZGRyZXNzLnNwbGl0KCc6Jyk7XG4gICAgdmFyIGxlbmd0aCA9IHNlZ21lbnRzLmxlbmd0aDtcbiAgICB2YXIgdG90YWwgPSA4O1xuXG4gICAgLy8gdHJpbSBjb2xvbnMgKDo6IG9yIDo6YTpiOmPigKYgb3Ig4oCmYTpiOmM6OilcbiAgICBpZiAoc2VnbWVudHNbMF0gPT09ICcnICYmIHNlZ21lbnRzWzFdID09PSAnJyAmJiBzZWdtZW50c1syXSA9PT0gJycpIHtcbiAgICAgIC8vIG11c3QgaGF2ZSBiZWVuIDo6XG4gICAgICAvLyByZW1vdmUgZmlyc3QgdHdvIGl0ZW1zXG4gICAgICBzZWdtZW50cy5zaGlmdCgpO1xuICAgICAgc2VnbWVudHMuc2hpZnQoKTtcbiAgICB9IGVsc2UgaWYgKHNlZ21lbnRzWzBdID09PSAnJyAmJiBzZWdtZW50c1sxXSA9PT0gJycpIHtcbiAgICAgIC8vIG11c3QgaGF2ZSBiZWVuIDo6eHh4eFxuICAgICAgLy8gcmVtb3ZlIHRoZSBmaXJzdCBpdGVtXG4gICAgICBzZWdtZW50cy5zaGlmdCgpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudHNbbGVuZ3RoIC0gMV0gPT09ICcnICYmIHNlZ21lbnRzW2xlbmd0aCAtIDJdID09PSAnJykge1xuICAgICAgLy8gbXVzdCBoYXZlIGJlZW4geHh4eDo6XG4gICAgICBzZWdtZW50cy5wb3AoKTtcbiAgICB9XG5cbiAgICBsZW5ndGggPSBzZWdtZW50cy5sZW5ndGg7XG5cbiAgICAvLyBhZGp1c3QgdG90YWwgc2VnbWVudHMgZm9yIElQdjQgdHJhaWxlclxuICAgIGlmIChzZWdtZW50c1tsZW5ndGggLSAxXS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAvLyBmb3VuZCBhIFwiLlwiIHdoaWNoIG1lYW5zIElQdjRcbiAgICAgIHRvdGFsID0gNztcbiAgICB9XG5cbiAgICAvLyBmaWxsIGVtcHR5IHNlZ21lbnRzIHRoZW0gd2l0aCBcIjAwMDBcIlxuICAgIHZhciBwb3M7XG4gICAgZm9yIChwb3MgPSAwOyBwb3MgPCBsZW5ndGg7IHBvcysrKSB7XG4gICAgICBpZiAoc2VnbWVudHNbcG9zXSA9PT0gJycpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvcyA8IHRvdGFsKSB7XG4gICAgICBzZWdtZW50cy5zcGxpY2UocG9zLCAxLCAnMDAwMCcpO1xuICAgICAgd2hpbGUgKHNlZ21lbnRzLmxlbmd0aCA8IHRvdGFsKSB7XG4gICAgICAgIHNlZ21lbnRzLnNwbGljZShwb3MsIDAsICcwMDAwJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RyaXAgbGVhZGluZyB6ZXJvc1xuICAgIHZhciBfc2VnbWVudHM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICBfc2VnbWVudHMgPSBzZWdtZW50c1tpXS5zcGxpdCgnJyk7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDMgOyBqKyspIHtcbiAgICAgICAgaWYgKF9zZWdtZW50c1swXSA9PT0gJzAnICYmIF9zZWdtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgX3NlZ21lbnRzLnNwbGljZSgwLDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNlZ21lbnRzW2ldID0gX3NlZ21lbnRzLmpvaW4oJycpO1xuICAgIH1cblxuICAgIC8vIGZpbmQgbG9uZ2VzdCBzZXF1ZW5jZSBvZiB6ZXJvZXMgYW5kIGNvYWxlc2NlIHRoZW0gaW50byBvbmUgc2VnbWVudFxuICAgIHZhciBiZXN0ID0gLTE7XG4gICAgdmFyIF9iZXN0ID0gMDtcbiAgICB2YXIgX2N1cnJlbnQgPSAwO1xuICAgIHZhciBjdXJyZW50ID0gLTE7XG4gICAgdmFyIGluemVyb2VzID0gZmFsc2U7XG4gICAgLy8gaTsgYWxyZWFkeSBkZWNsYXJlZFxuXG4gICAgZm9yIChpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgIGlmIChpbnplcm9lcykge1xuICAgICAgICBpZiAoc2VnbWVudHNbaV0gPT09ICcwJykge1xuICAgICAgICAgIF9jdXJyZW50ICs9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW56ZXJvZXMgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoX2N1cnJlbnQgPiBfYmVzdCkge1xuICAgICAgICAgICAgYmVzdCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICBfYmVzdCA9IF9jdXJyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHNlZ21lbnRzW2ldID09PSAnMCcpIHtcbiAgICAgICAgICBpbnplcm9lcyA9IHRydWU7XG4gICAgICAgICAgY3VycmVudCA9IGk7XG4gICAgICAgICAgX2N1cnJlbnQgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF9jdXJyZW50ID4gX2Jlc3QpIHtcbiAgICAgIGJlc3QgPSBjdXJyZW50O1xuICAgICAgX2Jlc3QgPSBfY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoX2Jlc3QgPiAxKSB7XG4gICAgICBzZWdtZW50cy5zcGxpY2UoYmVzdCwgX2Jlc3QsICcnKTtcbiAgICB9XG5cbiAgICBsZW5ndGggPSBzZWdtZW50cy5sZW5ndGg7XG5cbiAgICAvLyBhc3NlbWJsZSByZW1haW5pbmcgc2VnbWVudHNcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgaWYgKHNlZ21lbnRzWzBdID09PSAnJykgIHtcbiAgICAgIHJlc3VsdCA9ICc6JztcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSBzZWdtZW50c1tpXTtcbiAgICAgIGlmIChpID09PSBsZW5ndGggLSAxKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQgKz0gJzonO1xuICAgIH1cblxuICAgIGlmIChzZWdtZW50c1tsZW5ndGggLSAxXSA9PT0gJycpIHtcbiAgICAgIHJlc3VsdCArPSAnOic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vQ29uZmxpY3QoKSB7XG4gICAgLypqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG4gICAgaWYgKHJvb3QuSVB2NiA9PT0gdGhpcykge1xuICAgICAgcm9vdC5JUHY2ID0gX0lQdjY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJlc3Q6IGJlc3RQcmVzZW50YXRpb24sXG4gICAgbm9Db25mbGljdDogbm9Db25mbGljdFxuICB9O1xufSkpO1xuIiwiLyohXG4gKiBVUkkuanMgLSBNdXRhdGluZyBVUkxzXG4gKiBTZWNvbmQgTGV2ZWwgRG9tYWluIChTTEQpIFN1cHBvcnRcbiAqXG4gKiBWZXJzaW9uOiAxLjE5LjExXG4gKlxuICogQXV0aG9yOiBSb2RuZXkgUmVobVxuICogV2ViOiBodHRwOi8vbWVkaWFsaXplLmdpdGh1Yi5pby9VUkkuanMvXG4gKlxuICogTGljZW5zZWQgdW5kZXJcbiAqICAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZVxuICpcbiAqL1xuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW1kanMvdW1kL2Jsb2IvbWFzdGVyL3JldHVybkV4cG9ydHMuanNcbiAgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gTm9kZVxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoZmFjdG9yeSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICByb290LlNlY29uZExldmVsRG9tYWlucyA9IGZhY3Rvcnkocm9vdCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKHJvb3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIHNhdmUgY3VycmVudCBTZWNvbmRMZXZlbERvbWFpbnMgdmFyaWFibGUsIGlmIGFueVxuICB2YXIgX1NlY29uZExldmVsRG9tYWlucyA9IHJvb3QgJiYgcm9vdC5TZWNvbmRMZXZlbERvbWFpbnM7XG5cbiAgdmFyIFNMRCA9IHtcbiAgICAvLyBsaXN0IG9mIGtub3duIFNlY29uZCBMZXZlbCBEb21haW5zXG4gICAgLy8gY29udmVydGVkIGxpc3Qgb2YgU0xEcyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9nYXZpbmdtaWxsZXIvc2Vjb25kLWxldmVsLWRvbWFpbnNcbiAgICAvLyAtLS0tXG4gICAgLy8gcHVibGljc3VmZml4Lm9yZyBpcyBtb3JlIGN1cnJlbnQgYW5kIGFjdHVhbGx5IHVzZWQgYnkgYSBjb3VwbGUgb2YgYnJvd3NlcnMgaW50ZXJuYWxseS5cbiAgICAvLyBkb3duc2lkZSBpcyBpdCBhbHNvIGNvbnRhaW5zIGRvbWFpbnMgbGlrZSBcImR5bmRucy5vcmdcIiAtIHdoaWNoIGlzIGZpbmUgZm9yIHRoZSBzZWN1cml0eVxuICAgIC8vIGlzc3VlcyBicm93c2VyIGhhdmUgdG8gZGVhbCB3aXRoIChTT1AgZm9yIGNvb2tpZXMsIGV0YykgLSBidXQgaXMgd2F5IG92ZXJib2FyZCBmb3IgVVJJLmpzXG4gICAgLy8gLS0tLVxuICAgIGxpc3Q6IHtcbiAgICAgICdhYyc6JyBjb20gZ292IG1pbCBuZXQgb3JnICcsXG4gICAgICAnYWUnOicgYWMgY28gZ292IG1pbCBuYW1lIG5ldCBvcmcgcHJvIHNjaCAnLFxuICAgICAgJ2FmJzonIGNvbSBlZHUgZ292IG5ldCBvcmcgJyxcbiAgICAgICdhbCc6JyBjb20gZWR1IGdvdiBtaWwgbmV0IG9yZyAnLFxuICAgICAgJ2FvJzonIGNvIGVkIGd2IGl0IG9nIHBiICcsXG4gICAgICAnYXInOicgY29tIGVkdSBnb2IgZ292IGludCBtaWwgbmV0IG9yZyB0dXIgJyxcbiAgICAgICdhdCc6JyBhYyBjbyBndiBvciAnLFxuICAgICAgJ2F1JzonIGFzbiBjb20gY3Npcm8gZWR1IGdvdiBpZCBuZXQgb3JnICcsXG4gICAgICAnYmEnOicgY28gY29tIGVkdSBnb3YgbWlsIG5ldCBvcmcgcnMgdW5iaSB1bm1vIHVuc2EgdW50eiB1bnplICcsXG4gICAgICAnYmInOicgYml6IGNvIGNvbSBlZHUgZ292IGluZm8gbmV0IG9yZyBzdG9yZSB0diAnLFxuICAgICAgJ2JoJzonIGJpeiBjYyBjb20gZWR1IGdvdiBpbmZvIG5ldCBvcmcgJyxcbiAgICAgICdibic6JyBjb20gZWR1IGdvdiBuZXQgb3JnICcsXG4gICAgICAnYm8nOicgY29tIGVkdSBnb2IgZ292IGludCBtaWwgbmV0IG9yZyB0diAnLFxuICAgICAgJ2JyJzonIGFkbSBhZHYgYWdyIGFtIGFycSBhcnQgYXRvIGIgYmlvIGJsb2cgYm1kIGNpbSBjbmcgY250IGNvbSBjb29wIGVjbiBlZHUgZW5nIGVzcCBldGMgZXRpIGZhciBmbG9nIGZtIGZuZCBmb3QgZnN0IGcxMiBnZ2YgZ292IGltYiBpbmQgaW5mIGpvciBqdXMgbGVsIG1hdCBtZWQgbWlsIG11cyBuZXQgbm9tIG5vdCBudHIgb2RvIG9yZyBwcGcgcHJvIHBzYyBwc2kgcXNsIHJlYyBzbGcgc3J2IHRtcCB0cmQgdHVyIHR2IHZldCB2bG9nIHdpa2kgemxnICcsXG4gICAgICAnYnMnOicgY29tIGVkdSBnb3YgbmV0IG9yZyAnLFxuICAgICAgJ2J6JzonIGR1IGV0IG9tIG92IHJnICcsXG4gICAgICAnY2EnOicgYWIgYmMgbWIgbmIgbmYgbmwgbnMgbnQgbnUgb24gcGUgcWMgc2sgeWsgJyxcbiAgICAgICdjayc6JyBiaXogY28gZWR1IGdlbiBnb3YgaW5mbyBuZXQgb3JnICcsXG4gICAgICAnY24nOicgYWMgYWggYmogY29tIGNxIGVkdSBmaiBnZCBnb3YgZ3MgZ3ggZ3ogaGEgaGIgaGUgaGkgaGwgaG4gamwganMganggbG4gbWlsIG5ldCBubSBueCBvcmcgcWggc2Mgc2Qgc2ggc24gc3ggdGogdHcgeGogeHogeW4gemogJyxcbiAgICAgICdjbyc6JyBjb20gZWR1IGdvdiBtaWwgbmV0IG5vbSBvcmcgJyxcbiAgICAgICdjcic6JyBhYyBjIGNvIGVkIGZpIGdvIG9yIHNhICcsXG4gICAgICAnY3knOicgYWMgYml6IGNvbSBla2xvZ2VzIGdvdiBsdGQgbmFtZSBuZXQgb3JnIHBhcmxpYW1lbnQgcHJlc3MgcHJvIHRtICcsXG4gICAgICAnZG8nOicgYXJ0IGNvbSBlZHUgZ29iIGdvdiBtaWwgbmV0IG9yZyBzbGQgd2ViICcsXG4gICAgICAnZHonOicgYXJ0IGFzc28gY29tIGVkdSBnb3YgbmV0IG9yZyBwb2wgJyxcbiAgICAgICdlYyc6JyBjb20gZWR1IGZpbiBnb3YgaW5mbyBtZWQgbWlsIG5ldCBvcmcgcHJvICcsXG4gICAgICAnZWcnOicgY29tIGVkdSBldW4gZ292IG1pbCBuYW1lIG5ldCBvcmcgc2NpICcsXG4gICAgICAnZXInOicgY29tIGVkdSBnb3YgaW5kIG1pbCBuZXQgb3JnIHJvY2hlc3QgdyAnLFxuICAgICAgJ2VzJzonIGNvbSBlZHUgZ29iIG5vbSBvcmcgJyxcbiAgICAgICdldCc6JyBiaXogY29tIGVkdSBnb3YgaW5mbyBuYW1lIG5ldCBvcmcgJyxcbiAgICAgICdmaic6JyBhYyBiaXogY29tIGluZm8gbWlsIG5hbWUgbmV0IG9yZyBwcm8gJyxcbiAgICAgICdmayc6JyBhYyBjbyBnb3YgbmV0IG5vbSBvcmcgJyxcbiAgICAgICdmcic6JyBhc3NvIGNvbSBmIGdvdXYgbm9tIHByZCBwcmVzc2UgdG0gJyxcbiAgICAgICdnZyc6JyBjbyBuZXQgb3JnICcsXG4gICAgICAnZ2gnOicgY29tIGVkdSBnb3YgbWlsIG9yZyAnLFxuICAgICAgJ2duJzonIGFjIGNvbSBnb3YgbmV0IG9yZyAnLFxuICAgICAgJ2dyJzonIGNvbSBlZHUgZ292IG1pbCBuZXQgb3JnICcsXG4gICAgICAnZ3QnOicgY29tIGVkdSBnb2IgaW5kIG1pbCBuZXQgb3JnICcsXG4gICAgICAnZ3UnOicgY29tIGVkdSBnb3YgbmV0IG9yZyAnLFxuICAgICAgJ2hrJzonIGNvbSBlZHUgZ292IGlkdiBuZXQgb3JnICcsXG4gICAgICAnaHUnOicgMjAwMCBhZ3JhciBib2x0IGNhc2lubyBjaXR5IGNvIGVyb3RpY2EgZXJvdGlrYSBmaWxtIGZvcnVtIGdhbWVzIGhvdGVsIGluZm8gaW5nYXRsYW4gam9nYXN6IGtvbnl2ZWxvIGxha2FzIG1lZGlhIG5ld3Mgb3JnIHByaXYgcmVrbGFtIHNleCBzaG9wIHNwb3J0IHN1bGkgc3pleCB0bSB0b3pzZGUgdXRhemFzIHZpZGVvICcsXG4gICAgICAnaWQnOicgYWMgY28gZ28gbWlsIG5ldCBvciBzY2ggd2ViICcsXG4gICAgICAnaWwnOicgYWMgY28gZ292IGlkZiBrMTIgbXVuaSBuZXQgb3JnICcsXG4gICAgICAnaW4nOicgYWMgY28gZWR1IGVybmV0IGZpcm0gZ2VuIGdvdiBpIGluZCBtaWwgbmV0IG5pYyBvcmcgcmVzICcsXG4gICAgICAnaXEnOicgY29tIGVkdSBnb3YgaSBtaWwgbmV0IG9yZyAnLFxuICAgICAgJ2lyJzonIGFjIGNvIGRuc3NlYyBnb3YgaSBpZCBuZXQgb3JnIHNjaCAnLFxuICAgICAgJ2l0JzonIGVkdSBnb3YgJyxcbiAgICAgICdqZSc6JyBjbyBuZXQgb3JnICcsXG4gICAgICAnam8nOicgY29tIGVkdSBnb3YgbWlsIG5hbWUgbmV0IG9yZyBzY2ggJyxcbiAgICAgICdqcCc6JyBhYyBhZCBjbyBlZCBnbyBnciBsZyBuZSBvciAnLFxuICAgICAgJ2tlJzonIGFjIGNvIGdvIGluZm8gbWUgbW9iaSBuZSBvciBzYyAnLFxuICAgICAgJ2toJzonIGNvbSBlZHUgZ292IG1pbCBuZXQgb3JnIHBlciAnLFxuICAgICAgJ2tpJzonIGJpeiBjb20gZGUgZWR1IGdvdiBpbmZvIG1vYiBuZXQgb3JnIHRlbCAnLFxuICAgICAgJ2ttJzonIGFzc28gY29tIGNvb3AgZWR1IGdvdXYgayBtZWRlY2luIG1pbCBub20gbm90YWlyZXMgcGhhcm1hY2llbnMgcHJlc3NlIHRtIHZldGVyaW5haXJlICcsXG4gICAgICAna24nOicgZWR1IGdvdiBuZXQgb3JnICcsXG4gICAgICAna3InOicgYWMgYnVzYW4gY2h1bmdidWsgY2h1bmduYW0gY28gZGFlZ3UgZGFlamVvbiBlcyBnYW5nd29uIGdvIGd3YW5nanUgZ3llb25nYnVrIGd5ZW9uZ2dpIGd5ZW9uZ25hbSBocyBpbmNoZW9uIGplanUgamVvbmJ1ayBqZW9ubmFtIGsga2cgbWlsIG1zIG5lIG9yIHBlIHJlIHNjIHNlb3VsIHVsc2FuICcsXG4gICAgICAna3cnOicgY29tIGVkdSBnb3YgbmV0IG9yZyAnLFxuICAgICAgJ2t5JzonIGNvbSBlZHUgZ292IG5ldCBvcmcgJyxcbiAgICAgICdreic6JyBjb20gZWR1IGdvdiBtaWwgbmV0IG9yZyAnLFxuICAgICAgJ2xiJzonIGNvbSBlZHUgZ292IG5ldCBvcmcgJyxcbiAgICAgICdsayc6JyBhc3NuIGNvbSBlZHUgZ292IGdycCBob3RlbCBpbnQgbHRkIG5ldCBuZ28gb3JnIHNjaCBzb2Mgd2ViICcsXG4gICAgICAnbHInOicgY29tIGVkdSBnb3YgbmV0IG9yZyAnLFxuICAgICAgJ2x2JzonIGFzbiBjb20gY29uZiBlZHUgZ292IGlkIG1pbCBuZXQgb3JnICcsXG4gICAgICAnbHknOicgY29tIGVkdSBnb3YgaWQgbWVkIG5ldCBvcmcgcGxjIHNjaCAnLFxuICAgICAgJ21hJzonIGFjIGNvIGdvdiBtIG5ldCBvcmcgcHJlc3MgJyxcbiAgICAgICdtYyc6JyBhc3NvIHRtICcsXG4gICAgICAnbWUnOicgYWMgY28gZWR1IGdvdiBpdHMgbmV0IG9yZyBwcml2ICcsXG4gICAgICAnbWcnOicgY29tIGVkdSBnb3YgbWlsIG5vbSBvcmcgcHJkIHRtICcsXG4gICAgICAnbWsnOicgY29tIGVkdSBnb3YgaW5mIG5hbWUgbmV0IG9yZyBwcm8gJyxcbiAgICAgICdtbCc6JyBjb20gZWR1IGdvdiBuZXQgb3JnIHByZXNzZSAnLFxuICAgICAgJ21uJzonIGVkdSBnb3Ygb3JnICcsXG4gICAgICAnbW8nOicgY29tIGVkdSBnb3YgbmV0IG9yZyAnLFxuICAgICAgJ210JzonIGNvbSBlZHUgZ292IG5ldCBvcmcgJyxcbiAgICAgICdtdic6JyBhZXJvIGJpeiBjb20gY29vcCBlZHUgZ292IGluZm8gaW50IG1pbCBtdXNldW0gbmFtZSBuZXQgb3JnIHBybyAnLFxuICAgICAgJ213JzonIGFjIGNvIGNvbSBjb29wIGVkdSBnb3YgaW50IG11c2V1bSBuZXQgb3JnICcsXG4gICAgICAnbXgnOicgY29tIGVkdSBnb2IgbmV0IG9yZyAnLFxuICAgICAgJ215JzonIGNvbSBlZHUgZ292IG1pbCBuYW1lIG5ldCBvcmcgc2NoICcsXG4gICAgICAnbmYnOicgYXJ0cyBjb20gZmlybSBpbmZvIG5ldCBvdGhlciBwZXIgcmVjIHN0b3JlIHdlYiAnLFxuICAgICAgJ25nJzonIGJpeiBjb20gZWR1IGdvdiBtaWwgbW9iaSBuYW1lIG5ldCBvcmcgc2NoICcsXG4gICAgICAnbmknOicgYWMgY28gY29tIGVkdSBnb2IgbWlsIG5ldCBub20gb3JnICcsXG4gICAgICAnbnAnOicgY29tIGVkdSBnb3YgbWlsIG5ldCBvcmcgJyxcbiAgICAgICducic6JyBiaXogY29tIGVkdSBnb3YgaW5mbyBuZXQgb3JnICcsXG4gICAgICAnb20nOicgYWMgYml6IGNvIGNvbSBlZHUgZ292IG1lZCBtaWwgbXVzZXVtIG5ldCBvcmcgcHJvIHNjaCAnLFxuICAgICAgJ3BlJzonIGNvbSBlZHUgZ29iIG1pbCBuZXQgbm9tIG9yZyBzbGQgJyxcbiAgICAgICdwaCc6JyBjb20gZWR1IGdvdiBpIG1pbCBuZXQgbmdvIG9yZyAnLFxuICAgICAgJ3BrJzonIGJpeiBjb20gZWR1IGZhbSBnb2IgZ29rIGdvbiBnb3AgZ29zIGdvdiBuZXQgb3JnIHdlYiAnLFxuICAgICAgJ3BsJzonIGFydCBiaWFseXN0b2sgYml6IGNvbSBlZHUgZ2RhIGdkYW5zayBnb3J6b3cgZ292IGluZm8ga2F0b3dpY2Uga3Jha293IGxvZHogbHVibGluIG1pbCBuZXQgbmdvIG9sc3p0eW4gb3JnIHBvem5hbiBwd3IgcmFkb20gc2x1cHNrIHN6Y3plY2luIHRvcnVuIHdhcnN6YXdhIHdhdyB3cm9jIHdyb2NsYXcgemdvcmEgJyxcbiAgICAgICdwcic6JyBhYyBiaXogY29tIGVkdSBlc3QgZ292IGluZm8gaXNsYSBuYW1lIG5ldCBvcmcgcHJvIHByb2YgJyxcbiAgICAgICdwcyc6JyBjb20gZWR1IGdvdiBuZXQgb3JnIHBsbyBzZWMgJyxcbiAgICAgICdwdyc6JyBiZWxhdSBjbyBlZCBnbyBuZSBvciAnLFxuICAgICAgJ3JvJzonIGFydHMgY29tIGZpcm0gaW5mbyBub20gbnQgb3JnIHJlYyBzdG9yZSB0bSB3d3cgJyxcbiAgICAgICdycyc6JyBhYyBjbyBlZHUgZ292IGluIG9yZyAnLFxuICAgICAgJ3NiJzonIGNvbSBlZHUgZ292IG5ldCBvcmcgJyxcbiAgICAgICdzYyc6JyBjb20gZWR1IGdvdiBuZXQgb3JnICcsXG4gICAgICAnc2gnOicgY28gY29tIGVkdSBnb3YgbmV0IG5vbSBvcmcgJyxcbiAgICAgICdzbCc6JyBjb20gZWR1IGdvdiBuZXQgb3JnICcsXG4gICAgICAnc3QnOicgY28gY29tIGNvbnN1bGFkbyBlZHUgZW1iYWl4YWRhIGdvdiBtaWwgbmV0IG9yZyBwcmluY2lwZSBzYW90b21lIHN0b3JlICcsXG4gICAgICAnc3YnOicgY29tIGVkdSBnb2Igb3JnIHJlZCAnLFxuICAgICAgJ3N6JzonIGFjIGNvIG9yZyAnLFxuICAgICAgJ3RyJzonIGF2IGJicyBiZWwgYml6IGNvbSBkciBlZHUgZ2VuIGdvdiBpbmZvIGsxMiBuYW1lIG5ldCBvcmcgcG9sIHRlbCB0c2sgdHYgd2ViICcsXG4gICAgICAndHQnOicgYWVybyBiaXogY2F0IGNvIGNvbSBjb29wIGVkdSBnb3YgaW5mbyBpbnQgam9icyBtaWwgbW9iaSBtdXNldW0gbmFtZSBuZXQgb3JnIHBybyB0ZWwgdHJhdmVsICcsXG4gICAgICAndHcnOicgY2x1YiBjb20gZWJpeiBlZHUgZ2FtZSBnb3YgaWR2IG1pbCBuZXQgb3JnICcsXG4gICAgICAnbXUnOicgYWMgY28gY29tIGdvdiBuZXQgb3Igb3JnICcsXG4gICAgICAnbXonOicgYWMgY28gZWR1IGdvdiBvcmcgJyxcbiAgICAgICduYSc6JyBjbyBjb20gJyxcbiAgICAgICdueic6JyBhYyBjbyBjcmkgZ2VlayBnZW4gZ292dCBoZWFsdGggaXdpIG1hb3JpIG1pbCBuZXQgb3JnIHBhcmxpYW1lbnQgc2Nob29sICcsXG4gICAgICAncGEnOicgYWJvIGFjIGNvbSBlZHUgZ29iIGluZyBtZWQgbmV0IG5vbSBvcmcgc2xkICcsXG4gICAgICAncHQnOicgY29tIGVkdSBnb3YgaW50IG5ldCBub21lIG9yZyBwdWJsICcsXG4gICAgICAncHknOicgY29tIGVkdSBnb3YgbWlsIG5ldCBvcmcgJyxcbiAgICAgICdxYSc6JyBjb20gZWR1IGdvdiBtaWwgbmV0IG9yZyAnLFxuICAgICAgJ3JlJzonIGFzc28gY29tIG5vbSAnLFxuICAgICAgJ3J1JzonIGFjIGFkeWdleWEgYWx0YWkgYW11ciBhcmtoYW5nZWxzayBhc3RyYWtoYW4gYmFzaGtpcmlhIGJlbGdvcm9kIGJpciBicnlhbnNrIGJ1cnlhdGlhIGNiZyBjaGVsIGNoZWx5YWJpbnNrIGNoaXRhIGNodWtvdGthIGNodXZhc2hpYSBjb20gZGFnZXN0YW4gZS1idXJnIGVkdSBnb3YgZ3Jvem55IGludCBpcmt1dHNrIGl2YW5vdm8gaXpoZXZzayBqYXIgam9zaGthci1vbGEga2FsbXlraWEga2FsdWdhIGthbWNoYXRrYSBrYXJlbGlhIGthemFuIGtjaHIga2VtZXJvdm8ga2hhYmFyb3ZzayBraGFrYXNzaWEga2h2IGtpcm92IGtvZW5pZyBrb21pIGtvc3Ryb21hIGtyYW5veWFyc2sga3ViYW4ga3VyZ2FuIGt1cnNrIGxpcGV0c2sgbWFnYWRhbiBtYXJpIG1hcmktZWwgbWFyaW5lIG1pbCBtb3Jkb3ZpYSBtb3NyZWcgbXNrIG11cm1hbnNrIG5hbGNoaWsgbmV0IG5ub3Ygbm92IG5vdm9zaWJpcnNrIG5zayBvbXNrIG9yZW5idXJnIG9yZyBvcnlvbCBwZW56YSBwZXJtIHBwIHBza292IHB0eiBybmQgcnlhemFuIHNha2hhbGluIHNhbWFyYSBzYXJhdG92IHNpbWJpcnNrIHNtb2xlbnNrIHNwYiBzdGF2cm9wb2wgc3R2IHN1cmd1dCB0YW1ib3YgdGF0YXJzdGFuIHRvbSB0b21zayB0c2FyaXRzeW4gdHNrIHR1bGEgdHV2YSB0dmVyIHR5dW1lbiB1ZG0gdWRtdXJ0aWEgdWxhbi11ZGUgdmxhZGlrYXZrYXogdmxhZGltaXIgdmxhZGl2b3N0b2sgdm9sZ29ncmFkIHZvbG9nZGEgdm9yb25lemggdnJuIHZ5YXRrYSB5YWt1dGlhIHlhbWFsIHlla2F0ZXJpbmJ1cmcgeXV6aG5vLXNha2hhbGluc2sgJyxcbiAgICAgICdydyc6JyBhYyBjbyBjb20gZWR1IGdvdXYgZ292IGludCBtaWwgbmV0ICcsXG4gICAgICAnc2EnOicgY29tIGVkdSBnb3YgbWVkIG5ldCBvcmcgcHViIHNjaCAnLFxuICAgICAgJ3NkJzonIGNvbSBlZHUgZ292IGluZm8gbWVkIG5ldCBvcmcgdHYgJyxcbiAgICAgICdzZSc6JyBhIGFjIGIgYmQgYyBkIGUgZiBnIGggaSBrIGwgbSBuIG8gb3JnIHAgcGFydGkgcHAgcHJlc3MgciBzIHQgdG0gdSB3IHggeSB6ICcsXG4gICAgICAnc2cnOicgY29tIGVkdSBnb3YgaWRuIG5ldCBvcmcgcGVyICcsXG4gICAgICAnc24nOicgYXJ0IGNvbSBlZHUgZ291diBvcmcgcGVyc28gdW5pdiAnLFxuICAgICAgJ3N5JzonIGNvbSBlZHUgZ292IG1pbCBuZXQgbmV3cyBvcmcgJyxcbiAgICAgICd0aCc6JyBhYyBjbyBnbyBpbiBtaSBuZXQgb3IgJyxcbiAgICAgICd0aic6JyBhYyBiaXogY28gY29tIGVkdSBnbyBnb3YgaW5mbyBpbnQgbWlsIG5hbWUgbmV0IG5pYyBvcmcgdGVzdCB3ZWIgJyxcbiAgICAgICd0bic6JyBhZ3JpbmV0IGNvbSBkZWZlbnNlIGVkdW5ldCBlbnMgZmluIGdvdiBpbmQgaW5mbyBpbnRsIG1pbmNvbSBuYXQgbmV0IG9yZyBwZXJzbyBybnJ0IHJucyBybnUgdG91cmlzbSAnLFxuICAgICAgJ3R6JzonIGFjIGNvIGdvIG5lIG9yICcsXG4gICAgICAndWEnOicgYml6IGNoZXJrYXNzeSBjaGVybmlnb3YgY2hlcm5vdnRzeSBjayBjbiBjbyBjb20gY3JpbWVhIGN2IGRuIGRuZXByb3BldHJvdnNrIGRvbmV0c2sgZHAgZWR1IGdvdiBpZiBpbiBpdmFuby1mcmFua2l2c2sga2gga2hhcmtvdiBraGVyc29uIGtobWVsbml0c2tpeSBraWV2IGtpcm92b2dyYWQga20ga3Iga3Mga3YgbGcgbHVnYW5zayBsdXRzayBsdml2IG1lIG1rIG5ldCBuaWtvbGFldiBvZCBvZGVzc2Egb3JnIHBsIHBvbHRhdmEgcHAgcm92bm8gcnYgc2ViYXN0b3BvbCBzdW15IHRlIHRlcm5vcGlsIHV6aGdvcm9kIHZpbm5pY2Egdm4gemFwb3Jpemh6aGUgemhpdG9taXIgenAgenQgJyxcbiAgICAgICd1Zyc6JyBhYyBjbyBnbyBuZSBvciBvcmcgc2MgJyxcbiAgICAgICd1ayc6JyBhYyBibCBicml0aXNoLWxpYnJhcnkgY28gY3ltIGdvdiBnb3Z0IGljbmV0IGpldCBsZWEgbHRkIG1lIG1pbCBtb2QgbmF0aW9uYWwtbGlicmFyeS1zY290bGFuZCBuZWwgbmV0IG5ocyBuaWMgbmxzIG9yZyBvcmduIHBhcmxpYW1lbnQgcGxjIHBvbGljZSBzY2ggc2NvdCBzb2MgJyxcbiAgICAgICd1cyc6JyBkbmkgZmVkIGlzYSBraWRzIG5zbiAnLFxuICAgICAgJ3V5JzonIGNvbSBlZHUgZ3ViIG1pbCBuZXQgb3JnICcsXG4gICAgICAndmUnOicgY28gY29tIGVkdSBnb2IgaW5mbyBtaWwgbmV0IG9yZyB3ZWIgJyxcbiAgICAgICd2aSc6JyBjbyBjb20gazEyIG5ldCBvcmcgJyxcbiAgICAgICd2bic6JyBhYyBiaXogY29tIGVkdSBnb3YgaGVhbHRoIGluZm8gaW50IG5hbWUgbmV0IG9yZyBwcm8gJyxcbiAgICAgICd5ZSc6JyBjbyBjb20gZ292IGx0ZCBtZSBuZXQgb3JnIHBsYyAnLFxuICAgICAgJ3l1JzonIGFjIGNvIGVkdSBnb3Ygb3JnICcsXG4gICAgICAnemEnOicgYWMgYWdyaWMgYWx0IGJvdXJzZSBjaXR5IGNvIGN5YmVybmV0IGRiIGVkdSBnb3YgZ3JvbmRhciBpYWNjZXNzIGltdCBpbmNhIGxhbmRlc2lnbiBsYXcgbWlsIG5ldCBuZ28gbmlzIG5vbSBvbGl2ZXR0aSBvcmcgcGl4IHNjaG9vbCB0bSB3ZWIgJyxcbiAgICAgICd6bSc6JyBhYyBjbyBjb20gZWR1IGdvdiBuZXQgb3JnIHNjaCAnLFxuICAgICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2VudHJhbE5pYyNTZWNvbmQtbGV2ZWxfZG9tYWluc1xuICAgICAgJ2NvbSc6ICdhciBiciBjbiBkZSBldSBnYiBnciBodSBqcG4ga3Igbm8gcWMgcnUgc2Egc2UgdWsgdXMgdXkgemEgJyxcbiAgICAgICduZXQnOiAnZ2IganAgc2UgdWsgJyxcbiAgICAgICdvcmcnOiAnYWUnLFxuICAgICAgJ2RlJzogJ2NvbSAnXG4gICAgfSxcbiAgICAvLyBnb3JoaWxsIDIwMTMtMTAtMjU6IFVzaW5nIGluZGV4T2YoKSBpbnN0ZWFkIFJlZ2V4cCgpLiBTaWduaWZpY2FudCBib29zdFxuICAgIC8vIGluIGJvdGggcGVyZm9ybWFuY2UgYW5kIG1lbW9yeSBmb290cHJpbnQuIE5vIGluaXRpYWxpemF0aW9uIHJlcXVpcmVkLlxuICAgIC8vIGh0dHA6Ly9qc3BlcmYuY29tL3VyaS1qcy1zbGQtcmVnZXgtdnMtYmluYXJ5LXNlYXJjaC80XG4gICAgLy8gRm9sbG93aW5nIG1ldGhvZHMgdXNlIGxhc3RJbmRleE9mKCkgcmF0aGVyIHRoYW4gYXJyYXkuc3BsaXQoKSBpbiBvcmRlclxuICAgIC8vIHRvIGF2b2lkIGFueSBtZW1vcnkgYWxsb2NhdGlvbnMuXG4gICAgaGFzOiBmdW5jdGlvbihkb21haW4pIHtcbiAgICAgIHZhciB0bGRPZmZzZXQgPSBkb21haW4ubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgIGlmICh0bGRPZmZzZXQgPD0gMCB8fCB0bGRPZmZzZXQgPj0gKGRvbWFpbi5sZW5ndGgtMSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdmFyIHNsZE9mZnNldCA9IGRvbWFpbi5sYXN0SW5kZXhPZignLicsIHRsZE9mZnNldC0xKTtcbiAgICAgIGlmIChzbGRPZmZzZXQgPD0gMCB8fCBzbGRPZmZzZXQgPj0gKHRsZE9mZnNldC0xKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgc2xkTGlzdCA9IFNMRC5saXN0W2RvbWFpbi5zbGljZSh0bGRPZmZzZXQrMSldO1xuICAgICAgaWYgKCFzbGRMaXN0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzbGRMaXN0LmluZGV4T2YoJyAnICsgZG9tYWluLnNsaWNlKHNsZE9mZnNldCsxLCB0bGRPZmZzZXQpICsgJyAnKSA+PSAwO1xuICAgIH0sXG4gICAgaXM6IGZ1bmN0aW9uKGRvbWFpbikge1xuICAgICAgdmFyIHRsZE9mZnNldCA9IGRvbWFpbi5sYXN0SW5kZXhPZignLicpO1xuICAgICAgaWYgKHRsZE9mZnNldCA8PSAwIHx8IHRsZE9mZnNldCA+PSAoZG9tYWluLmxlbmd0aC0xKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgc2xkT2Zmc2V0ID0gZG9tYWluLmxhc3RJbmRleE9mKCcuJywgdGxkT2Zmc2V0LTEpO1xuICAgICAgaWYgKHNsZE9mZnNldCA+PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBzbGRMaXN0ID0gU0xELmxpc3RbZG9tYWluLnNsaWNlKHRsZE9mZnNldCsxKV07XG4gICAgICBpZiAoIXNsZExpc3QpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNsZExpc3QuaW5kZXhPZignICcgKyBkb21haW4uc2xpY2UoMCwgdGxkT2Zmc2V0KSArICcgJykgPj0gMDtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24oZG9tYWluKSB7XG4gICAgICB2YXIgdGxkT2Zmc2V0ID0gZG9tYWluLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICBpZiAodGxkT2Zmc2V0IDw9IDAgfHwgdGxkT2Zmc2V0ID49IChkb21haW4ubGVuZ3RoLTEpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIHNsZE9mZnNldCA9IGRvbWFpbi5sYXN0SW5kZXhPZignLicsIHRsZE9mZnNldC0xKTtcbiAgICAgIGlmIChzbGRPZmZzZXQgPD0gMCB8fCBzbGRPZmZzZXQgPj0gKHRsZE9mZnNldC0xKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBzbGRMaXN0ID0gU0xELmxpc3RbZG9tYWluLnNsaWNlKHRsZE9mZnNldCsxKV07XG4gICAgICBpZiAoIXNsZExpc3QpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAoc2xkTGlzdC5pbmRleE9mKCcgJyArIGRvbWFpbi5zbGljZShzbGRPZmZzZXQrMSwgdGxkT2Zmc2V0KSArICcgJykgPCAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRvbWFpbi5zbGljZShzbGRPZmZzZXQrMSk7XG4gICAgfSxcbiAgICBub0NvbmZsaWN0OiBmdW5jdGlvbigpe1xuICAgICAgaWYgKHJvb3QuU2Vjb25kTGV2ZWxEb21haW5zID09PSB0aGlzKSB7XG4gICAgICAgIHJvb3QuU2Vjb25kTGV2ZWxEb21haW5zID0gX1NlY29uZExldmVsRG9tYWlucztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU0xEO1xufSkpO1xuIiwiLyohXG4gKiBVUkkuanMgLSBNdXRhdGluZyBVUkxzXG4gKlxuICogVmVyc2lvbjogMS4xOS4xMVxuICpcbiAqIEF1dGhvcjogUm9kbmV5IFJlaG1cbiAqIFdlYjogaHR0cDovL21lZGlhbGl6ZS5naXRodWIuaW8vVVJJLmpzL1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyXG4gKiAgIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2VcbiAqXG4gKi9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAndXNlIHN0cmljdCc7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9tYXN0ZXIvcmV0dXJuRXhwb3J0cy5qc1xuICBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBOb2RlXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJy4vcHVueWNvZGUnKSwgcmVxdWlyZSgnLi9JUHY2JyksIHJlcXVpcmUoJy4vU2Vjb25kTGV2ZWxEb21haW5zJykpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoWycuL3B1bnljb2RlJywgJy4vSVB2NicsICcuL1NlY29uZExldmVsRG9tYWlucyddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgIHJvb3QuVVJJID0gZmFjdG9yeShyb290LnB1bnljb2RlLCByb290LklQdjYsIHJvb3QuU2Vjb25kTGV2ZWxEb21haW5zLCByb290KTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAocHVueWNvZGUsIElQdjYsIFNMRCwgcm9vdCkge1xuICAndXNlIHN0cmljdCc7XG4gIC8qZ2xvYmFsIGxvY2F0aW9uLCBlc2NhcGUsIHVuZXNjYXBlICovXG4gIC8vIEZJWE1FOiB2Mi4wLjAgcmVuYW1jZSBub24tY2FtZWxDYXNlIHByb3BlcnRpZXMgdG8gdXBwZXJjYXNlXG4gIC8qanNoaW50IGNhbWVsY2FzZTogZmFsc2UgKi9cblxuICAvLyBzYXZlIGN1cnJlbnQgVVJJIHZhcmlhYmxlLCBpZiBhbnlcbiAgdmFyIF9VUkkgPSByb290ICYmIHJvb3QuVVJJO1xuXG4gIGZ1bmN0aW9uIFVSSSh1cmwsIGJhc2UpIHtcbiAgICB2YXIgX3VybFN1cHBsaWVkID0gYXJndW1lbnRzLmxlbmd0aCA+PSAxO1xuICAgIHZhciBfYmFzZVN1cHBsaWVkID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyO1xuXG4gICAgLy8gQWxsb3cgaW5zdGFudGlhdGlvbiB3aXRob3V0IHRoZSAnbmV3JyBrZXl3b3JkXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICAgIGlmIChfdXJsU3VwcGxpZWQpIHtcbiAgICAgICAgaWYgKF9iYXNlU3VwcGxpZWQpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFVSSSh1cmwsIGJhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBVUkkodXJsKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBVUkkoKTtcbiAgICB9XG5cbiAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChfdXJsU3VwcGxpZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5kZWZpbmVkIGlzIG5vdCBhIHZhbGlkIGFyZ3VtZW50IGZvciBVUkknKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdXJsID0gbG9jYXRpb24uaHJlZiArICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVybCA9PT0gbnVsbCkge1xuICAgICAgaWYgKF91cmxTdXBwbGllZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdudWxsIGlzIG5vdCBhIHZhbGlkIGFyZ3VtZW50IGZvciBVUkknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmhyZWYodXJsKTtcblxuICAgIC8vIHJlc29sdmUgdG8gYmFzZSBhY2NvcmRpbmcgdG8gaHR0cDovL2R2Y3MudzMub3JnL2hnL3VybC9yYXctZmlsZS90aXAvT3ZlcnZpZXcuaHRtbCNjb25zdHJ1Y3RvclxuICAgIGlmIChiYXNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmFic29sdXRlVG8oYmFzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgICByZXR1cm4gL15bMC05XSskLy50ZXN0KHZhbHVlKTtcbiAgfVxuXG4gIFVSSS52ZXJzaW9uID0gJzEuMTkuMTEnO1xuXG4gIHZhciBwID0gVVJJLnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbiAgZnVuY3Rpb24gZXNjYXBlUmVnRXgoc3RyaW5nKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21lZGlhbGl6ZS9VUkkuanMvY29tbWl0Lzg1YWMyMTc4M2MxMWY4Y2NhYjA2MTA2ZGJhOTczNWEzMWE4NjkyNGQjY29tbWl0Y29tbWVudC04MjE5NjNcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbLiorP149IToke30oKXxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFR5cGUodmFsdWUpIHtcbiAgICAvLyBJRTggZG9lc24ndCByZXR1cm4gW09iamVjdCBVbmRlZmluZWRdIGJ1dCBbT2JqZWN0IE9iamVjdF0gZm9yIHVuZGVmaW5lZCB2YWx1ZVxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gJ1VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN0cmluZyhPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpKS5zbGljZSg4LCAtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICAgIHJldHVybiBnZXRUeXBlKG9iaikgPT09ICdBcnJheSc7XG4gIH1cblxuICBmdW5jdGlvbiBmaWx0ZXJBcnJheVZhbHVlcyhkYXRhLCB2YWx1ZSkge1xuICAgIHZhciBsb29rdXAgPSB7fTtcbiAgICB2YXIgaSwgbGVuZ3RoO1xuXG4gICAgaWYgKGdldFR5cGUodmFsdWUpID09PSAnUmVnRXhwJykge1xuICAgICAgbG9va3VwID0gbnVsbDtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBsb29rdXBbdmFsdWVbaV1dID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9va3VwW3ZhbHVlXSA9IHRydWU7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMCwgbGVuZ3RoID0gZGF0YS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgLypqc2hpbnQgbGF4YnJlYWs6IHRydWUgKi9cbiAgICAgIHZhciBfbWF0Y2ggPSBsb29rdXAgJiYgbG9va3VwW2RhdGFbaV1dICE9PSB1bmRlZmluZWRcbiAgICAgICAgfHwgIWxvb2t1cCAmJiB2YWx1ZS50ZXN0KGRhdGFbaV0pO1xuICAgICAgLypqc2hpbnQgbGF4YnJlYWs6IGZhbHNlICovXG4gICAgICBpZiAoX21hdGNoKSB7XG4gICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICBsZW5ndGgtLTtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJyYXlDb250YWlucyhsaXN0LCB2YWx1ZSkge1xuICAgIHZhciBpLCBsZW5ndGg7XG5cbiAgICAvLyB2YWx1ZSBtYXkgYmUgc3RyaW5nLCBudW1iZXIsIGFycmF5LCByZWdleHBcbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIC8vIE5vdGU6IHRoaXMgY2FuIGJlIG9wdGltaXplZCB0byBPKG4pIChpbnN0ZWFkIG9mIGN1cnJlbnQgTyhtICogbikpXG4gICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWFycmF5Q29udGFpbnMobGlzdCwgdmFsdWVbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBfdHlwZSA9IGdldFR5cGUodmFsdWUpO1xuICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChfdHlwZSA9PT0gJ1JlZ0V4cCcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0W2ldID09PSAnc3RyaW5nJyAmJiBsaXN0W2ldLm1hdGNoKHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxpc3RbaV0gPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFycmF5c0VxdWFsKG9uZSwgdHdvKSB7XG4gICAgaWYgKCFpc0FycmF5KG9uZSkgfHwgIWlzQXJyYXkodHdvKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGFycmF5cyBjYW4ndCBiZSBlcXVhbCBpZiB0aGV5IGhhdmUgZGlmZmVyZW50IGFtb3VudCBvZiBjb250ZW50XG4gICAgaWYgKG9uZS5sZW5ndGggIT09IHR3by5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbmUuc29ydCgpO1xuICAgIHR3by5zb3J0KCk7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9uZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChvbmVbaV0gIT09IHR3b1tpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiB0cmltU2xhc2hlcyh0ZXh0KSB7XG4gICAgdmFyIHRyaW1fZXhwcmVzc2lvbiA9IC9eXFwvK3xcXC8rJC9nO1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UodHJpbV9leHByZXNzaW9uLCAnJyk7XG4gIH1cblxuICBVUkkuX3BhcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3RvY29sOiBudWxsLFxuICAgICAgdXNlcm5hbWU6IG51bGwsXG4gICAgICBwYXNzd29yZDogbnVsbCxcbiAgICAgIGhvc3RuYW1lOiBudWxsLFxuICAgICAgdXJuOiBudWxsLFxuICAgICAgcG9ydDogbnVsbCxcbiAgICAgIHBhdGg6IG51bGwsXG4gICAgICBxdWVyeTogbnVsbCxcbiAgICAgIGZyYWdtZW50OiBudWxsLFxuICAgICAgLy8gc3RhdGVcbiAgICAgIHByZXZlbnRJbnZhbGlkSG9zdG5hbWU6IFVSSS5wcmV2ZW50SW52YWxpZEhvc3RuYW1lLFxuICAgICAgZHVwbGljYXRlUXVlcnlQYXJhbWV0ZXJzOiBVUkkuZHVwbGljYXRlUXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgZXNjYXBlUXVlcnlTcGFjZTogVVJJLmVzY2FwZVF1ZXJ5U3BhY2VcbiAgICB9O1xuICB9O1xuICAvLyBzdGF0ZTogdGhyb3cgb24gaW52YWxpZCBob3N0bmFtZVxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21lZGlhbGl6ZS9VUkkuanMvcHVsbC8zNDVcbiAgLy8gYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9tZWRpYWxpemUvVVJJLmpzL2lzc3Vlcy8zNTRcbiAgVVJJLnByZXZlbnRJbnZhbGlkSG9zdG5hbWUgPSBmYWxzZTtcbiAgLy8gc3RhdGU6IGFsbG93IGR1cGxpY2F0ZSBxdWVyeSBwYXJhbWV0ZXJzIChhPTEmYT0xKVxuICBVUkkuZHVwbGljYXRlUXVlcnlQYXJhbWV0ZXJzID0gZmFsc2U7XG4gIC8vIHN0YXRlOiByZXBsYWNlcyArIHdpdGggJTIwIChzcGFjZSBpbiBxdWVyeSBzdHJpbmdzKVxuICBVUkkuZXNjYXBlUXVlcnlTcGFjZSA9IHRydWU7XG4gIC8vIHN0YXRpYyBwcm9wZXJ0aWVzXG4gIFVSSS5wcm90b2NvbF9leHByZXNzaW9uID0gL15bYS16XVthLXowLTkuKy1dKiQvaTtcbiAgVVJJLmlkbl9leHByZXNzaW9uID0gL1teYS16MC05XFwuXy1dL2k7XG4gIFVSSS5wdW55Y29kZV9leHByZXNzaW9uID0gLyh4bi0tKS9pO1xuICAvLyB3ZWxsLCAzMzMuNDQ0LjU1NS42NjYgbWF0Y2hlcywgYnV0IGl0IHN1cmUgYWluJ3Qgbm8gSVB2NCAtIGRvIHdlIGNhcmU/XG4gIFVSSS5pcDRfZXhwcmVzc2lvbiA9IC9eXFxkezEsM31cXC5cXGR7MSwzfVxcLlxcZHsxLDN9XFwuXFxkezEsM30kLztcbiAgLy8gY3JlZGl0cyB0byBSaWNoIEJyb3duXG4gIC8vIHNvdXJjZTogaHR0cDovL2ZvcnVtcy5pbnRlcm1hcHBlci5jb20vdmlld3RvcGljLnBocD9wPTEwOTYjMTA5NlxuICAvLyBzcGVjaWZpY2F0aW9uOiBodHRwOi8vd3d3LmlldGYub3JnL3JmYy9yZmM0MjkxLnR4dFxuICBVUkkuaXA2X2V4cHJlc3Npb24gPSAvXlxccyooKChbMC05QS1GYS1mXXsxLDR9Oil7N30oWzAtOUEtRmEtZl17MSw0fXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7Nn0oOlswLTlBLUZhLWZdezEsNH18KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXs1fSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDJ9KXw6KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXs0fSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDN9KXwoKDpbMC05QS1GYS1mXXsxLDR9KT86KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7M30oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw0fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCwyfTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXsyfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDV9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDN9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezF9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNn0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsNH06KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KDooKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw3fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCw1fTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKSkoJS4rKT9cXHMqJC87XG4gIC8vIGV4cHJlc3Npb24gdXNlZCBpcyBcImdydWJlciByZXZpc2VkXCIgKEBncnViZXIgdjIpIGRldGVybWluZWQgdG8gYmUgdGhlXG4gIC8vIGJlc3Qgc29sdXRpb24gaW4gYSByZWdleC1nb2xmIHdlIGRpZCBhIGNvdXBsZSBvZiBhZ2VzIGFnbyBhdFxuICAvLyAqIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL2RlbW8vdXJsLXJlZ2V4XG4gIC8vICogaHR0cDovL3JvZG5leXJlaG0uZGUvdC91cmwtcmVnZXguaHRtbFxuICBVUkkuZmluZF91cmlfZXhwcmVzc2lvbiA9IC9cXGIoKD86W2Etel1bXFx3LV0rOig/OlxcL3sxLDN9fFthLXowLTklXSl8d3d3XFxkezAsM31bLl18W2EtejAtOS5cXC1dK1suXVthLXpdezIsNH1cXC8pKD86W15cXHMoKTw+XSt8XFwoKFteXFxzKCk8Pl0rfChcXChbXlxccygpPD5dK1xcKSkpKlxcKSkrKD86XFwoKFteXFxzKCk8Pl0rfChcXChbXlxccygpPD5dK1xcKSkpKlxcKXxbXlxcc2AhKClcXFtcXF17fTs6J1wiLiw8Pj/Cq8K74oCc4oCd4oCY4oCZXSkpL2lnO1xuICBVUkkuZmluZFVyaSA9IHtcbiAgICAvLyB2YWxpZCBcInNjaGVtZTovL1wiIG9yIFwid3d3LlwiXG4gICAgc3RhcnQ6IC9cXGIoPzooW2Etel1bYS16MC05ListXSo6XFwvXFwvKXx3d3dcXC4pL2dpLFxuICAgIC8vIGV2ZXJ5dGhpbmcgdXAgdG8gdGhlIG5leHQgd2hpdGVzcGFjZVxuICAgIGVuZDogL1tcXHNcXHJcXG5dfCQvLFxuICAgIC8vIHRyaW0gdHJhaWxpbmcgcHVuY3R1YXRpb24gY2FwdHVyZWQgYnkgZW5kIFJlZ0V4cFxuICAgIHRyaW06IC9bYCEoKVxcW1xcXXt9OzonXCIuLDw+P8KrwrvigJzigJ3igJ7igJjigJldKyQvLFxuICAgIC8vIGJhbGFuY2VkIHBhcmVucyBpbmNsdXNpb24gKCksIFtdLCB7fSwgPD5cbiAgICBwYXJlbnM6IC8oXFwoW15cXCldKlxcKXxcXFtbXlxcXV0qXFxdfFxce1tefV0qXFx9fDxbXj5dKj4pL2csXG4gIH07XG4gIFVSSS5sZWFkaW5nX3doaXRlc3BhY2VfZXhwcmVzc2lvbiA9IC9eW1xceDAwLVxceDIwXFx1MDBhMFxcdTE2ODBcXHUyMDAwLVxcdTIwMGFcXHUyMDI4XFx1MjAyOVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdWZlZmZdKy9cbiAgLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI2FzY2lpLXRhYi1vci1uZXdsaW5lXG4gIFVSSS5hc2NpaV90YWJfd2hpdGVzcGFjZSA9IC9bXFx1MDAwOVxcdTAwMEFcXHUwMDBEXSsvZ1xuICAvLyBodHRwOi8vd3d3LmlhbmEub3JnL2Fzc2lnbm1lbnRzL3VyaS1zY2hlbWVzLmh0bWxcbiAgLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX1RDUF9hbmRfVURQX3BvcnRfbnVtYmVycyNXZWxsLWtub3duX3BvcnRzXG4gIFVSSS5kZWZhdWx0UG9ydHMgPSB7XG4gICAgaHR0cDogJzgwJyxcbiAgICBodHRwczogJzQ0MycsXG4gICAgZnRwOiAnMjEnLFxuICAgIGdvcGhlcjogJzcwJyxcbiAgICB3czogJzgwJyxcbiAgICB3c3M6ICc0NDMnXG4gIH07XG4gIC8vIGxpc3Qgb2YgcHJvdG9jb2xzIHdoaWNoIGFsd2F5cyByZXF1aXJlIGEgaG9zdG5hbWVcbiAgVVJJLmhvc3RQcm90b2NvbHMgPSBbXG4gICAgJ2h0dHAnLFxuICAgICdodHRwcydcbiAgXTtcblxuICAvLyBhbGxvd2VkIGhvc3RuYW1lIGNoYXJhY3RlcnMgYWNjb3JkaW5nIHRvIFJGQyAzOTg2XG4gIC8vIEFMUEhBIERJR0lUIFwiLVwiIFwiLlwiIFwiX1wiIFwiflwiIFwiIVwiIFwiJFwiIFwiJlwiIFwiJ1wiIFwiKFwiIFwiKVwiIFwiKlwiIFwiK1wiIFwiLFwiIFwiO1wiIFwiPVwiICVlbmNvZGVkXG4gIC8vIEkndmUgbmV2ZXIgc2VlbiBhIChub24tSUROKSBob3N0bmFtZSBvdGhlciB0aGFuOiBBTFBIQSBESUdJVCAuIC0gX1xuICBVUkkuaW52YWxpZF9ob3N0bmFtZV9jaGFyYWN0ZXJzID0gL1teYS16QS1aMC05XFwuXFwtOl9dLztcbiAgLy8gbWFwIERPTSBFbGVtZW50cyB0byB0aGVpciBVUkkgYXR0cmlidXRlXG4gIFVSSS5kb21BdHRyaWJ1dGVzID0ge1xuICAgICdhJzogJ2hyZWYnLFxuICAgICdibG9ja3F1b3RlJzogJ2NpdGUnLFxuICAgICdsaW5rJzogJ2hyZWYnLFxuICAgICdiYXNlJzogJ2hyZWYnLFxuICAgICdzY3JpcHQnOiAnc3JjJyxcbiAgICAnZm9ybSc6ICdhY3Rpb24nLFxuICAgICdpbWcnOiAnc3JjJyxcbiAgICAnYXJlYSc6ICdocmVmJyxcbiAgICAnaWZyYW1lJzogJ3NyYycsXG4gICAgJ2VtYmVkJzogJ3NyYycsXG4gICAgJ3NvdXJjZSc6ICdzcmMnLFxuICAgICd0cmFjayc6ICdzcmMnLFxuICAgICdpbnB1dCc6ICdzcmMnLCAvLyBidXQgb25seSBpZiB0eXBlPVwiaW1hZ2VcIlxuICAgICdhdWRpbyc6ICdzcmMnLFxuICAgICd2aWRlbyc6ICdzcmMnXG4gIH07XG4gIFVSSS5nZXREb21BdHRyaWJ1dGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKCFub2RlIHx8ICFub2RlLm5vZGVOYW1lKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBub2RlTmFtZSA9IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyA8aW5wdXQ+IHNob3VsZCBvbmx5IGV4cG9zZSBzcmMgZm9yIHR5cGU9XCJpbWFnZVwiXG4gICAgaWYgKG5vZGVOYW1lID09PSAnaW5wdXQnICYmIG5vZGUudHlwZSAhPT0gJ2ltYWdlJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gVVJJLmRvbUF0dHJpYnV0ZXNbbm9kZU5hbWVdO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGVzY2FwZUZvckR1bWJGaXJlZm94MzYodmFsdWUpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWVkaWFsaXplL1VSSS5qcy9pc3N1ZXMvOTFcbiAgICByZXR1cm4gZXNjYXBlKHZhbHVlKTtcbiAgfVxuXG4gIC8vIGVuY29kaW5nIC8gZGVjb2RpbmcgYWNjb3JkaW5nIHRvIFJGQzM5ODZcbiAgZnVuY3Rpb24gc3RyaWN0RW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZykge1xuICAgIC8vIHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL2VuY29kZVVSSUNvbXBvbmVudFxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5nKVxuICAgICAgLnJlcGxhY2UoL1shJygpKl0vZywgZXNjYXBlRm9yRHVtYkZpcmVmb3gzNilcbiAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpO1xuICB9XG4gIFVSSS5lbmNvZGUgPSBzdHJpY3RFbmNvZGVVUklDb21wb25lbnQ7XG4gIFVSSS5kZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnQ7XG4gIFVSSS5pc284ODU5ID0gZnVuY3Rpb24oKSB7XG4gICAgVVJJLmVuY29kZSA9IGVzY2FwZTtcbiAgICBVUkkuZGVjb2RlID0gdW5lc2NhcGU7XG4gIH07XG4gIFVSSS51bmljb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgVVJJLmVuY29kZSA9IHN0cmljdEVuY29kZVVSSUNvbXBvbmVudDtcbiAgICBVUkkuZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50O1xuICB9O1xuICBVUkkuY2hhcmFjdGVycyA9IHtcbiAgICBwYXRobmFtZToge1xuICAgICAgZW5jb2RlOiB7XG4gICAgICAgIC8vIFJGQzM5ODYgMi4xOiBGb3IgY29uc2lzdGVuY3ksIFVSSSBwcm9kdWNlcnMgYW5kIG5vcm1hbGl6ZXJzIHNob3VsZFxuICAgICAgICAvLyB1c2UgdXBwZXJjYXNlIGhleGFkZWNpbWFsIGRpZ2l0cyBmb3IgYWxsIHBlcmNlbnQtZW5jb2RpbmdzLlxuICAgICAgICBleHByZXNzaW9uOiAvJSgyNHwyNnwyQnwyQ3wzQnwzRHwzQXw0MCkvaWcsXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgIC8vIC0uX34hJygpKlxuICAgICAgICAgICclMjQnOiAnJCcsXG4gICAgICAgICAgJyUyNic6ICcmJyxcbiAgICAgICAgICAnJTJCJzogJysnLFxuICAgICAgICAgICclMkMnOiAnLCcsXG4gICAgICAgICAgJyUzQic6ICc7JyxcbiAgICAgICAgICAnJTNEJzogJz0nLFxuICAgICAgICAgICclM0EnOiAnOicsXG4gICAgICAgICAgJyU0MCc6ICdAJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVjb2RlOiB7XG4gICAgICAgIGV4cHJlc3Npb246IC9bXFwvXFw/I10vZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgJy8nOiAnJTJGJyxcbiAgICAgICAgICAnPyc6ICclM0YnLFxuICAgICAgICAgICcjJzogJyUyMydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcmVzZXJ2ZWQ6IHtcbiAgICAgIGVuY29kZToge1xuICAgICAgICAvLyBSRkMzOTg2IDIuMTogRm9yIGNvbnNpc3RlbmN5LCBVUkkgcHJvZHVjZXJzIGFuZCBub3JtYWxpemVycyBzaG91bGRcbiAgICAgICAgLy8gdXNlIHVwcGVyY2FzZSBoZXhhZGVjaW1hbCBkaWdpdHMgZm9yIGFsbCBwZXJjZW50LWVuY29kaW5ncy5cbiAgICAgICAgZXhwcmVzc2lvbjogLyUoMjF8MjN8MjR8MjZ8Mjd8Mjh8Mjl8MkF8MkJ8MkN8MkZ8M0F8M0J8M0R8M0Z8NDB8NUJ8NUQpL2lnLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAvLyBnZW4tZGVsaW1zXG4gICAgICAgICAgJyUzQSc6ICc6JyxcbiAgICAgICAgICAnJTJGJzogJy8nLFxuICAgICAgICAgICclM0YnOiAnPycsXG4gICAgICAgICAgJyUyMyc6ICcjJyxcbiAgICAgICAgICAnJTVCJzogJ1snLFxuICAgICAgICAgICclNUQnOiAnXScsXG4gICAgICAgICAgJyU0MCc6ICdAJyxcbiAgICAgICAgICAvLyBzdWItZGVsaW1zXG4gICAgICAgICAgJyUyMSc6ICchJyxcbiAgICAgICAgICAnJTI0JzogJyQnLFxuICAgICAgICAgICclMjYnOiAnJicsXG4gICAgICAgICAgJyUyNyc6ICdcXCcnLFxuICAgICAgICAgICclMjgnOiAnKCcsXG4gICAgICAgICAgJyUyOSc6ICcpJyxcbiAgICAgICAgICAnJTJBJzogJyonLFxuICAgICAgICAgICclMkInOiAnKycsXG4gICAgICAgICAgJyUyQyc6ICcsJyxcbiAgICAgICAgICAnJTNCJzogJzsnLFxuICAgICAgICAgICclM0QnOiAnPSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdXJucGF0aDoge1xuICAgICAgLy8gVGhlIGNoYXJhY3RlcnMgdW5kZXIgYGVuY29kZWAgYXJlIHRoZSBjaGFyYWN0ZXJzIGNhbGxlZCBvdXQgYnkgUkZDIDIxNDEgYXMgYmVpbmcgYWNjZXB0YWJsZVxuICAgICAgLy8gZm9yIHVzYWdlIGluIGEgVVJOLiBSRkMyMTQxIGFsc28gY2FsbHMgb3V0IFwiLVwiLCBcIi5cIiwgYW5kIFwiX1wiIGFzIGFjY2VwdGFibGUgY2hhcmFjdGVycywgYnV0XG4gICAgICAvLyB0aGVzZSBhcmVuJ3QgZW5jb2RlZCBieSBlbmNvZGVVUklDb21wb25lbnQsIHNvIHdlIGRvbid0IGhhdmUgdG8gY2FsbCB0aGVtIG91dCBoZXJlLiBBbHNvXG4gICAgICAvLyBub3RlIHRoYXQgdGhlIGNvbG9uIGNoYXJhY3RlciBpcyBub3QgZmVhdHVyZWQgaW4gdGhlIGVuY29kaW5nIG1hcDsgdGhpcyBpcyBiZWNhdXNlIFVSSS5qc1xuICAgICAgLy8gZ2l2ZXMgdGhlIGNvbG9ucyBpbiBVUk5zIHNlbWFudGljIG1lYW5pbmcgYXMgdGhlIGRlbGltaXRlcnMgb2YgcGF0aCBzZWdlbWVudHMsIGFuZCBzbyBpdFxuICAgICAgLy8gc2hvdWxkIG5vdCBhcHBlYXIgdW5lbmNvZGVkIGluIGEgc2VnbWVudCBpdHNlbGYuXG4gICAgICAvLyBTZWUgYWxzbyB0aGUgbm90ZSBhYm92ZSBhYm91dCBSRkMzOTg2IGFuZCBjYXBpdGFsYWxpemVkIGhleCBkaWdpdHMuXG4gICAgICBlbmNvZGU6IHtcbiAgICAgICAgZXhwcmVzc2lvbjogLyUoMjF8MjR8Mjd8Mjh8Mjl8MkF8MkJ8MkN8M0J8M0R8NDApL2lnLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAnJTIxJzogJyEnLFxuICAgICAgICAgICclMjQnOiAnJCcsXG4gICAgICAgICAgJyUyNyc6ICdcXCcnLFxuICAgICAgICAgICclMjgnOiAnKCcsXG4gICAgICAgICAgJyUyOSc6ICcpJyxcbiAgICAgICAgICAnJTJBJzogJyonLFxuICAgICAgICAgICclMkInOiAnKycsXG4gICAgICAgICAgJyUyQyc6ICcsJyxcbiAgICAgICAgICAnJTNCJzogJzsnLFxuICAgICAgICAgICclM0QnOiAnPScsXG4gICAgICAgICAgJyU0MCc6ICdAJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gVGhlc2UgY2hhcmFjdGVycyBhcmUgdGhlIGNoYXJhY3RlcnMgY2FsbGVkIG91dCBieSBSRkMyMTQxIGFzIFwicmVzZXJ2ZWRcIiBjaGFyYWN0ZXJzIHRoYXRcbiAgICAgIC8vIHNob3VsZCBuZXZlciBhcHBlYXIgaW4gYSBVUk4sIHBsdXMgdGhlIGNvbG9uIGNoYXJhY3RlciAoc2VlIG5vdGUgYWJvdmUpLlxuICAgICAgZGVjb2RlOiB7XG4gICAgICAgIGV4cHJlc3Npb246IC9bXFwvXFw/IzpdL2csXG4gICAgICAgIG1hcDoge1xuICAgICAgICAgICcvJzogJyUyRicsXG4gICAgICAgICAgJz8nOiAnJTNGJyxcbiAgICAgICAgICAnIyc6ICclMjMnLFxuICAgICAgICAgICc6JzogJyUzQSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgVVJJLmVuY29kZVF1ZXJ5ID0gZnVuY3Rpb24oc3RyaW5nLCBlc2NhcGVRdWVyeVNwYWNlKSB7XG4gICAgdmFyIGVzY2FwZWQgPSBVUkkuZW5jb2RlKHN0cmluZyArICcnKTtcbiAgICBpZiAoZXNjYXBlUXVlcnlTcGFjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlc2NhcGVRdWVyeVNwYWNlID0gVVJJLmVzY2FwZVF1ZXJ5U3BhY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVzY2FwZVF1ZXJ5U3BhY2UgPyBlc2NhcGVkLnJlcGxhY2UoLyUyMC9nLCAnKycpIDogZXNjYXBlZDtcbiAgfTtcbiAgVVJJLmRlY29kZVF1ZXJ5ID0gZnVuY3Rpb24oc3RyaW5nLCBlc2NhcGVRdWVyeVNwYWNlKSB7XG4gICAgc3RyaW5nICs9ICcnO1xuICAgIGlmIChlc2NhcGVRdWVyeVNwYWNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVzY2FwZVF1ZXJ5U3BhY2UgPSBVUkkuZXNjYXBlUXVlcnlTcGFjZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIFVSSS5kZWNvZGUoZXNjYXBlUXVlcnlTcGFjZSA/IHN0cmluZy5yZXBsYWNlKC9cXCsvZywgJyUyMCcpIDogc3RyaW5nKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIC8vIHdlJ3JlIG5vdCBnb2luZyB0byBtZXNzIHdpdGggd2VpcmQgZW5jb2RpbmdzLFxuICAgICAgLy8gZ2l2ZSB1cCBhbmQgcmV0dXJuIHRoZSB1bmRlY29kZWQgb3JpZ2luYWwgc3RyaW5nXG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21lZGlhbGl6ZS9VUkkuanMvaXNzdWVzLzg3XG4gICAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21lZGlhbGl6ZS9VUkkuanMvaXNzdWVzLzkyXG4gICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cbiAgfTtcbiAgLy8gZ2VuZXJhdGUgZW5jb2RlL2RlY29kZSBwYXRoIGZ1bmN0aW9uc1xuICB2YXIgX3BhcnRzID0geydlbmNvZGUnOidlbmNvZGUnLCAnZGVjb2RlJzonZGVjb2RlJ307XG4gIHZhciBfcGFydDtcbiAgdmFyIGdlbmVyYXRlQWNjZXNzb3IgPSBmdW5jdGlvbihfZ3JvdXAsIF9wYXJ0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIFVSSVtfcGFydF0oc3RyaW5nICsgJycpLnJlcGxhY2UoVVJJLmNoYXJhY3RlcnNbX2dyb3VwXVtfcGFydF0uZXhwcmVzc2lvbiwgZnVuY3Rpb24oYykge1xuICAgICAgICAgIHJldHVybiBVUkkuY2hhcmFjdGVyc1tfZ3JvdXBdW19wYXJ0XS5tYXBbY107XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyB3ZSdyZSBub3QgZ29pbmcgdG8gbWVzcyB3aXRoIHdlaXJkIGVuY29kaW5ncyxcbiAgICAgICAgLy8gZ2l2ZSB1cCBhbmQgcmV0dXJuIHRoZSB1bmRlY29kZWQgb3JpZ2luYWwgc3RyaW5nXG4gICAgICAgIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbWVkaWFsaXplL1VSSS5qcy9pc3N1ZXMvODdcbiAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tZWRpYWxpemUvVVJJLmpzL2lzc3Vlcy85MlxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgZm9yIChfcGFydCBpbiBfcGFydHMpIHtcbiAgICBVUklbX3BhcnQgKyAnUGF0aFNlZ21lbnQnXSA9IGdlbmVyYXRlQWNjZXNzb3IoJ3BhdGhuYW1lJywgX3BhcnRzW19wYXJ0XSk7XG4gICAgVVJJW19wYXJ0ICsgJ1VyblBhdGhTZWdtZW50J10gPSBnZW5lcmF0ZUFjY2Vzc29yKCd1cm5wYXRoJywgX3BhcnRzW19wYXJ0XSk7XG4gIH1cblxuICB2YXIgZ2VuZXJhdGVTZWdtZW50ZWRQYXRoRnVuY3Rpb24gPSBmdW5jdGlvbihfc2VwLCBfY29kaW5nRnVuY05hbWUsIF9pbm5lckNvZGluZ0Z1bmNOYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgLy8gV2h5IHBhc3MgaW4gbmFtZXMgb2YgZnVuY3Rpb25zLCByYXRoZXIgdGhhbiB0aGUgZnVuY3Rpb24gb2JqZWN0cyB0aGVtc2VsdmVzPyBUaGVcbiAgICAgIC8vIGRlZmluaXRpb25zIG9mIHNvbWUgZnVuY3Rpb25zIChidXQgaW4gcGFydGljdWxhciwgVVJJLmRlY29kZSkgd2lsbCBvY2Nhc2lvbmFsbHkgY2hhbmdlIGR1ZVxuICAgICAgLy8gdG8gVVJJLmpzIGhhdmluZyBJU084ODU5IGFuZCBVbmljb2RlIG1vZGVzLiBQYXNzaW5nIGluIHRoZSBuYW1lIGFuZCBnZXR0aW5nIGl0IHdpbGwgZW5zdXJlXG4gICAgICAvLyB0aGF0IHRoZSBmdW5jdGlvbnMgd2UgdXNlIGhlcmUgYXJlIFwiZnJlc2hcIi5cbiAgICAgIHZhciBhY3R1YWxDb2RpbmdGdW5jO1xuICAgICAgaWYgKCFfaW5uZXJDb2RpbmdGdW5jTmFtZSkge1xuICAgICAgICBhY3R1YWxDb2RpbmdGdW5jID0gVVJJW19jb2RpbmdGdW5jTmFtZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3R1YWxDb2RpbmdGdW5jID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIFVSSVtfY29kaW5nRnVuY05hbWVdKFVSSVtfaW5uZXJDb2RpbmdGdW5jTmFtZV0oc3RyaW5nKSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciBzZWdtZW50cyA9IChzdHJpbmcgKyAnJykuc3BsaXQoX3NlcCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBzZWdtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBzZWdtZW50c1tpXSA9IGFjdHVhbENvZGluZ0Z1bmMoc2VnbWVudHNbaV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VnbWVudHMuam9pbihfc2VwKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIFRoaXMgdGFrZXMgcGxhY2Ugb3V0c2lkZSB0aGUgYWJvdmUgbG9vcCBiZWNhdXNlIHdlIGRvbid0IHdhbnQsIGUuZy4sIGVuY29kZVVyblBhdGggZnVuY3Rpb25zLlxuICBVUkkuZGVjb2RlUGF0aCA9IGdlbmVyYXRlU2VnbWVudGVkUGF0aEZ1bmN0aW9uKCcvJywgJ2RlY29kZVBhdGhTZWdtZW50Jyk7XG4gIFVSSS5kZWNvZGVVcm5QYXRoID0gZ2VuZXJhdGVTZWdtZW50ZWRQYXRoRnVuY3Rpb24oJzonLCAnZGVjb2RlVXJuUGF0aFNlZ21lbnQnKTtcbiAgVVJJLnJlY29kZVBhdGggPSBnZW5lcmF0ZVNlZ21lbnRlZFBhdGhGdW5jdGlvbignLycsICdlbmNvZGVQYXRoU2VnbWVudCcsICdkZWNvZGUnKTtcbiAgVVJJLnJlY29kZVVyblBhdGggPSBnZW5lcmF0ZVNlZ21lbnRlZFBhdGhGdW5jdGlvbignOicsICdlbmNvZGVVcm5QYXRoU2VnbWVudCcsICdkZWNvZGUnKTtcblxuICBVUkkuZW5jb2RlUmVzZXJ2ZWQgPSBnZW5lcmF0ZUFjY2Vzc29yKCdyZXNlcnZlZCcsICdlbmNvZGUnKTtcblxuICBVUkkucGFyc2UgPSBmdW5jdGlvbihzdHJpbmcsIHBhcnRzKSB7XG4gICAgdmFyIHBvcztcbiAgICBpZiAoIXBhcnRzKSB7XG4gICAgICBwYXJ0cyA9IHtcbiAgICAgICAgcHJldmVudEludmFsaWRIb3N0bmFtZTogVVJJLnByZXZlbnRJbnZhbGlkSG9zdG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoVVJJLmxlYWRpbmdfd2hpdGVzcGFjZV9leHByZXNzaW9uLCAnJylcbiAgICAvLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktdGFiLW9yLW5ld2xpbmVcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShVUkkuYXNjaWlfdGFiX3doaXRlc3BhY2UsICcnKVxuXG4gICAgLy8gW3Byb3RvY29sXCI6Ly9cIlt1c2VybmFtZVtcIjpcInBhc3N3b3JkXVwiQFwiXWhvc3RuYW1lW1wiOlwicG9ydF1cIi9cIj9dW3BhdGhdW1wiP1wicXVlcnlzdHJpbmddW1wiI1wiZnJhZ21lbnRdXG5cbiAgICAvLyBleHRyYWN0IGZyYWdtZW50XG4gICAgcG9zID0gc3RyaW5nLmluZGV4T2YoJyMnKTtcbiAgICBpZiAocG9zID4gLTEpIHtcbiAgICAgIC8vIGVzY2FwaW5nP1xuICAgICAgcGFydHMuZnJhZ21lbnQgPSBzdHJpbmcuc3Vic3RyaW5nKHBvcyArIDEpIHx8IG51bGw7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKDAsIHBvcyk7XG4gICAgfVxuXG4gICAgLy8gZXh0cmFjdCBxdWVyeVxuICAgIHBvcyA9IHN0cmluZy5pbmRleE9mKCc/Jyk7XG4gICAgaWYgKHBvcyA+IC0xKSB7XG4gICAgICAvLyBlc2NhcGluZz9cbiAgICAgIHBhcnRzLnF1ZXJ5ID0gc3RyaW5nLnN1YnN0cmluZyhwb3MgKyAxKSB8fCBudWxsO1xuICAgICAgc3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZygwLCBwb3MpO1xuICAgIH1cblxuICAgIC8vIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGhhdmUgbG9zdCBhbGwgbWVhbmluZyBmb3IgdGhlIHdlYiBwcm90b2NvbHMgKGh0dHBzLCBodHRwLCB3c3MsIHdzKVxuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9eKGh0dHBzP3xmdHB8d3NzPyk/OitbL1xcXFxdKi9pLCAnJDE6Ly8nKTtcbiAgICAvLyBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBoYXZlIGxvc3QgYWxsIG1lYW5pbmcgZm9yIHNjaGVtZSByZWxhdGl2ZSBVUkxzXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL15bL1xcXFxdezIsfS9pLCAnLy8nKTtcblxuICAgIC8vIGV4dHJhY3QgcHJvdG9jb2xcbiAgICBpZiAoc3RyaW5nLnN1YnN0cmluZygwLCAyKSA9PT0gJy8vJykge1xuICAgICAgLy8gcmVsYXRpdmUtc2NoZW1lXG4gICAgICBwYXJ0cy5wcm90b2NvbCA9IG51bGw7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKDIpO1xuICAgICAgLy8gZXh0cmFjdCBcInVzZXI6cGFzc0Bob3N0OnBvcnRcIlxuICAgICAgc3RyaW5nID0gVVJJLnBhcnNlQXV0aG9yaXR5KHN0cmluZywgcGFydHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3MgPSBzdHJpbmcuaW5kZXhPZignOicpO1xuICAgICAgaWYgKHBvcyA+IC0xKSB7XG4gICAgICAgIHBhcnRzLnByb3RvY29sID0gc3RyaW5nLnN1YnN0cmluZygwLCBwb3MpIHx8IG51bGw7XG4gICAgICAgIGlmIChwYXJ0cy5wcm90b2NvbCAmJiAhcGFydHMucHJvdG9jb2wubWF0Y2goVVJJLnByb3RvY29sX2V4cHJlc3Npb24pKSB7XG4gICAgICAgICAgLy8gOiBtYXkgYmUgd2l0aGluIHRoZSBwYXRoXG4gICAgICAgICAgcGFydHMucHJvdG9jb2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyaW5nLnN1YnN0cmluZyhwb3MgKyAxLCBwb3MgKyAzKS5yZXBsYWNlKC9cXFxcL2csICcvJykgPT09ICcvLycpIHtcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKHBvcyArIDMpO1xuXG4gICAgICAgICAgLy8gZXh0cmFjdCBcInVzZXI6cGFzc0Bob3N0OnBvcnRcIlxuICAgICAgICAgIHN0cmluZyA9IFVSSS5wYXJzZUF1dGhvcml0eShzdHJpbmcsIHBhcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyaW5nKHBvcyArIDEpO1xuICAgICAgICAgIHBhcnRzLnVybiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB3aGF0J3MgbGVmdCBtdXN0IGJlIHRoZSBwYXRoXG4gICAgcGFydHMucGF0aCA9IHN0cmluZztcblxuICAgIC8vIGFuZCB3ZSdyZSBkb25lXG4gICAgcmV0dXJuIHBhcnRzO1xuICB9O1xuICBVUkkucGFyc2VIb3N0ID0gZnVuY3Rpb24oc3RyaW5nLCBwYXJ0cykge1xuICAgIGlmICghc3RyaW5nKSB7XG4gICAgICBzdHJpbmcgPSAnJztcbiAgICB9XG5cbiAgICAvLyBDb3B5IGNocm9tZSwgSUUsIG9wZXJhIGJhY2tzbGFzaC1oYW5kbGluZyBiZWhhdmlvci5cbiAgICAvLyBCYWNrIHNsYXNoZXMgYmVmb3JlIHRoZSBxdWVyeSBzdHJpbmcgZ2V0IGNvbnZlcnRlZCB0byBmb3J3YXJkIHNsYXNoZXNcbiAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9ibG9iLzM4NmZkMjRmNDliMGU5ZDFhOGEwNzY1OTJhNDA0MTY4ZmFlZWNjMzQvbGliL3VybC5qcyNMMTE1LUwxMjRcbiAgICAvLyBTZWU6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yNTkxNlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tZWRpYWxpemUvVVJJLmpzL3B1bGwvMjMzXG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcblxuICAgIC8vIGV4dHJhY3QgaG9zdDpwb3J0XG4gICAgdmFyIHBvcyA9IHN0cmluZy5pbmRleE9mKCcvJyk7XG4gICAgdmFyIGJyYWNrZXRQb3M7XG4gICAgdmFyIHQ7XG5cbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgcG9zID0gc3RyaW5nLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAoc3RyaW5nLmNoYXJBdCgwKSA9PT0gJ1snKSB7XG4gICAgICAvLyBJUHY2IGhvc3QgLSBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9kcmFmdC1pZXRmLTZtYW4tdGV4dC1hZGRyLXJlcHJlc2VudGF0aW9uLTA0I3NlY3Rpb24tNlxuICAgICAgLy8gSSBjbGFpbSBtb3N0IGNsaWVudCBzb2Z0d2FyZSBicmVha3Mgb24gSVB2NiBhbnl3YXlzLiBUbyBzaW1wbGlmeSB0aGluZ3MsIFVSSSBvbmx5IGFjY2VwdHNcbiAgICAgIC8vIElQdjYrcG9ydCBpbiB0aGUgZm9ybWF0IFsyMDAxOmRiODo6MV06ODAgKGZvciB0aGUgdGltZSBiZWluZylcbiAgICAgIGJyYWNrZXRQb3MgPSBzdHJpbmcuaW5kZXhPZignXScpO1xuICAgICAgcGFydHMuaG9zdG5hbWUgPSBzdHJpbmcuc3Vic3RyaW5nKDEsIGJyYWNrZXRQb3MpIHx8IG51bGw7XG4gICAgICBwYXJ0cy5wb3J0ID0gc3RyaW5nLnN1YnN0cmluZyhicmFja2V0UG9zICsgMiwgcG9zKSB8fCBudWxsO1xuICAgICAgaWYgKHBhcnRzLnBvcnQgPT09ICcvJykge1xuICAgICAgICBwYXJ0cy5wb3J0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGZpcnN0Q29sb24gPSBzdHJpbmcuaW5kZXhPZignOicpO1xuICAgICAgdmFyIGZpcnN0U2xhc2ggPSBzdHJpbmcuaW5kZXhPZignLycpO1xuICAgICAgdmFyIG5leHRDb2xvbiA9IHN0cmluZy5pbmRleE9mKCc6JywgZmlyc3RDb2xvbiArIDEpO1xuICAgICAgaWYgKG5leHRDb2xvbiAhPT0gLTEgJiYgKGZpcnN0U2xhc2ggPT09IC0xIHx8IG5leHRDb2xvbiA8IGZpcnN0U2xhc2gpKSB7XG4gICAgICAgIC8vIElQdjYgaG9zdCBjb250YWlucyBtdWx0aXBsZSBjb2xvbnMgLSBidXQgbm8gcG9ydFxuICAgICAgICAvLyB0aGlzIG5vdGF0aW9uIGlzIGFjdHVhbGx5IG5vdCBhbGxvd2VkIGJ5IFJGQyAzOTg2LCBidXQgd2UncmUgYSBsaWJlcmFsIHBhcnNlclxuICAgICAgICBwYXJ0cy5ob3N0bmFtZSA9IHN0cmluZy5zdWJzdHJpbmcoMCwgcG9zKSB8fCBudWxsO1xuICAgICAgICBwYXJ0cy5wb3J0ID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHQgPSBzdHJpbmcuc3Vic3RyaW5nKDAsIHBvcykuc3BsaXQoJzonKTtcbiAgICAgICAgcGFydHMuaG9zdG5hbWUgPSB0WzBdIHx8IG51bGw7XG4gICAgICAgIHBhcnRzLnBvcnQgPSB0WzFdIHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBhcnRzLmhvc3RuYW1lICYmIHN0cmluZy5zdWJzdHJpbmcocG9zKS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgcG9zKys7XG4gICAgICBzdHJpbmcgPSAnLycgKyBzdHJpbmc7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRzLnByZXZlbnRJbnZhbGlkSG9zdG5hbWUpIHtcbiAgICAgIFVSSS5lbnN1cmVWYWxpZEhvc3RuYW1lKHBhcnRzLmhvc3RuYW1lLCBwYXJ0cy5wcm90b2NvbCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRzLnBvcnQpIHtcbiAgICAgIFVSSS5lbnN1cmVWYWxpZFBvcnQocGFydHMucG9ydCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcocG9zKSB8fCAnLyc7XG4gIH07XG4gIFVSSS5wYXJzZUF1dGhvcml0eSA9IGZ1bmN0aW9uKHN0cmluZywgcGFydHMpIHtcbiAgICBzdHJpbmcgPSBVUkkucGFyc2VVc2VyaW5mbyhzdHJpbmcsIHBhcnRzKTtcbiAgICByZXR1cm4gVVJJLnBhcnNlSG9zdChzdHJpbmcsIHBhcnRzKTtcbiAgfTtcbiAgVVJJLnBhcnNlVXNlcmluZm8gPSBmdW5jdGlvbihzdHJpbmcsIHBhcnRzKSB7XG4gICAgLy8gZXh0cmFjdCB1c2VybmFtZTpwYXNzd29yZFxuICAgIHZhciBfc3RyaW5nID0gc3RyaW5nXG4gICAgdmFyIGZpcnN0QmFja1NsYXNoID0gc3RyaW5nLmluZGV4T2YoJ1xcXFwnKTtcbiAgICBpZiAoZmlyc3RCYWNrU2xhc2ggIT09IC0xKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxcXC9nLCAnLycpXG4gICAgfVxuICAgIHZhciBmaXJzdFNsYXNoID0gc3RyaW5nLmluZGV4T2YoJy8nKTtcbiAgICB2YXIgcG9zID0gc3RyaW5nLmxhc3RJbmRleE9mKCdAJywgZmlyc3RTbGFzaCA+IC0xID8gZmlyc3RTbGFzaCA6IHN0cmluZy5sZW5ndGggLSAxKTtcbiAgICB2YXIgdDtcblxuICAgIC8vIGF1dGhvcml0eUAgbXVzdCBjb21lIGJlZm9yZSAvcGF0aCBvciBcXHBhdGhcbiAgICBpZiAocG9zID4gLTEgJiYgKGZpcnN0U2xhc2ggPT09IC0xIHx8IHBvcyA8IGZpcnN0U2xhc2gpKSB7XG4gICAgICB0ID0gc3RyaW5nLnN1YnN0cmluZygwLCBwb3MpLnNwbGl0KCc6Jyk7XG4gICAgICBwYXJ0cy51c2VybmFtZSA9IHRbMF0gPyBVUkkuZGVjb2RlKHRbMF0pIDogbnVsbDtcbiAgICAgIHQuc2hpZnQoKTtcbiAgICAgIHBhcnRzLnBhc3N3b3JkID0gdFswXSA/IFVSSS5kZWNvZGUodC5qb2luKCc6JykpIDogbnVsbDtcbiAgICAgIHN0cmluZyA9IF9zdHJpbmcuc3Vic3RyaW5nKHBvcyArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0cy51c2VybmFtZSA9IG51bGw7XG4gICAgICBwYXJ0cy5wYXNzd29yZCA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbiAgVVJJLnBhcnNlUXVlcnkgPSBmdW5jdGlvbihzdHJpbmcsIGVzY2FwZVF1ZXJ5U3BhY2UpIHtcbiAgICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8vIHRocm93IG91dCB0aGUgZnVua3kgYnVzaW5lc3MgLSBcIj9cIltuYW1lXCI9XCJ2YWx1ZVwiJlwiXStcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvJisvZywgJyYnKS5yZXBsYWNlKC9eXFw/KiYqfCYrJC9nLCAnJyk7XG5cbiAgICBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHZhciBpdGVtcyA9IHt9O1xuICAgIHZhciBzcGxpdHMgPSBzdHJpbmcuc3BsaXQoJyYnKTtcbiAgICB2YXIgbGVuZ3RoID0gc3BsaXRzLmxlbmd0aDtcbiAgICB2YXIgdiwgbmFtZSwgdmFsdWU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2ID0gc3BsaXRzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICBuYW1lID0gVVJJLmRlY29kZVF1ZXJ5KHYuc2hpZnQoKSwgZXNjYXBlUXVlcnlTcGFjZSk7XG4gICAgICAvLyBubyBcIj1cIiBpcyBudWxsIGFjY29yZGluZyB0byBodHRwOi8vZHZjcy53My5vcmcvaGcvdXJsL3Jhdy1maWxlL3RpcC9PdmVydmlldy5odG1sI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcbiAgICAgIHZhbHVlID0gdi5sZW5ndGggPyBVUkkuZGVjb2RlUXVlcnkodi5qb2luKCc9JyksIGVzY2FwZVF1ZXJ5U3BhY2UpIDogbnVsbDtcblxuICAgICAgaWYgKG5hbWUgPT09ICdfX3Byb3RvX18nKSB7XG4gICAgICAgIC8vIGlnbm9yZSBhdHRlbXB0IGF0IGV4cGxvaXRpbmcgSmF2YVNjcmlwdCBpbnRlcm5hbHNcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGhhc093bi5jYWxsKGl0ZW1zLCBuYW1lKSkge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1zW25hbWVdID09PSAnc3RyaW5nJyB8fCBpdGVtc1tuYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW1zW25hbWVdID0gW2l0ZW1zW25hbWVdXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zW25hbWVdLnB1c2godmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH07XG5cbiAgVVJJLmJ1aWxkID0gZnVuY3Rpb24ocGFydHMpIHtcbiAgICB2YXIgdCA9ICcnO1xuICAgIHZhciByZXF1aXJlQWJzb2x1dGVQYXRoID0gZmFsc2VcblxuICAgIGlmIChwYXJ0cy5wcm90b2NvbCkge1xuICAgICAgdCArPSBwYXJ0cy5wcm90b2NvbCArICc6JztcbiAgICB9XG5cbiAgICBpZiAoIXBhcnRzLnVybiAmJiAodCB8fCBwYXJ0cy5ob3N0bmFtZSkpIHtcbiAgICAgIHQgKz0gJy8vJztcbiAgICAgIHJlcXVpcmVBYnNvbHV0ZVBhdGggPSB0cnVlXG4gICAgfVxuXG4gICAgdCArPSAoVVJJLmJ1aWxkQXV0aG9yaXR5KHBhcnRzKSB8fCAnJyk7XG5cbiAgICBpZiAodHlwZW9mIHBhcnRzLnBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAocGFydHMucGF0aC5jaGFyQXQoMCkgIT09ICcvJyAmJiByZXF1aXJlQWJzb2x1dGVQYXRoKSB7XG4gICAgICAgIHQgKz0gJy8nO1xuICAgICAgfVxuXG4gICAgICB0ICs9IHBhcnRzLnBhdGg7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJ0cy5xdWVyeSA9PT0gJ3N0cmluZycgJiYgcGFydHMucXVlcnkpIHtcbiAgICAgIHQgKz0gJz8nICsgcGFydHMucXVlcnk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJ0cy5mcmFnbWVudCA9PT0gJ3N0cmluZycgJiYgcGFydHMuZnJhZ21lbnQpIHtcbiAgICAgIHQgKz0gJyMnICsgcGFydHMuZnJhZ21lbnQ7XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9O1xuICBVUkkuYnVpbGRIb3N0ID0gZnVuY3Rpb24ocGFydHMpIHtcbiAgICB2YXIgdCA9ICcnO1xuXG4gICAgaWYgKCFwYXJ0cy5ob3N0bmFtZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSBpZiAoVVJJLmlwNl9leHByZXNzaW9uLnRlc3QocGFydHMuaG9zdG5hbWUpKSB7XG4gICAgICB0ICs9ICdbJyArIHBhcnRzLmhvc3RuYW1lICsgJ10nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ICs9IHBhcnRzLmhvc3RuYW1lO1xuICAgIH1cblxuICAgIGlmIChwYXJ0cy5wb3J0KSB7XG4gICAgICB0ICs9ICc6JyArIHBhcnRzLnBvcnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHQ7XG4gIH07XG4gIFVSSS5idWlsZEF1dGhvcml0eSA9IGZ1bmN0aW9uKHBhcnRzKSB7XG4gICAgcmV0dXJuIFVSSS5idWlsZFVzZXJpbmZvKHBhcnRzKSArIFVSSS5idWlsZEhvc3QocGFydHMpO1xuICB9O1xuICBVUkkuYnVpbGRVc2VyaW5mbyA9IGZ1bmN0aW9uKHBhcnRzKSB7XG4gICAgdmFyIHQgPSAnJztcblxuICAgIGlmIChwYXJ0cy51c2VybmFtZSkge1xuICAgICAgdCArPSBVUkkuZW5jb2RlKHBhcnRzLnVzZXJuYW1lKTtcbiAgICB9XG5cbiAgICBpZiAocGFydHMucGFzc3dvcmQpIHtcbiAgICAgIHQgKz0gJzonICsgVVJJLmVuY29kZShwYXJ0cy5wYXNzd29yZCk7XG4gICAgfVxuXG4gICAgaWYgKHQpIHtcbiAgICAgIHQgKz0gJ0AnO1xuICAgIH1cblxuICAgIHJldHVybiB0O1xuICB9O1xuICBVUkkuYnVpbGRRdWVyeSA9IGZ1bmN0aW9uKGRhdGEsIGR1cGxpY2F0ZVF1ZXJ5UGFyYW1ldGVycywgZXNjYXBlUXVlcnlTcGFjZSkge1xuICAgIC8vIGFjY29yZGluZyB0byBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2IG9yIGh0dHA6Ly9sYWJzLmFwYWNoZS5vcmcvd2ViYXJjaC91cmkvcmZjL3JmYzM5ODYuaHRtbFxuICAgIC8vIGJlaW5nIMK7LS5ffiEkJicoKSorLDs9OkAvP8KrICVIRVggYW5kIGFsbnVtIGFyZSBhbGxvd2VkXG4gICAgLy8gdGhlIFJGQyBleHBsaWNpdGx5IHN0YXRlcyA/L2ZvbyBiZWluZyBhIHZhbGlkIHVzZSBjYXNlLCBubyBtZW50aW9uIG9mIHBhcmFtZXRlciBzeW50YXghXG4gICAgLy8gVVJJLmpzIHRyZWF0cyB0aGUgcXVlcnkgc3RyaW5nIGFzIGJlaW5nIGFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAgIC8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi9SRUMtaHRtbDQwL2ludGVyYWN0L2Zvcm1zLmh0bWwjZm9ybS1jb250ZW50LXR5cGVcblxuICAgIHZhciB0ID0gJyc7XG4gICAgdmFyIHVuaXF1ZSwga2V5LCBpLCBsZW5ndGg7XG4gICAgZm9yIChrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKGtleSA9PT0gJ19fcHJvdG9fXycpIHtcbiAgICAgICAgLy8gaWdub3JlIGF0dGVtcHQgYXQgZXhwbG9pdGluZyBKYXZhU2NyaXB0IGludGVybmFsc1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoaGFzT3duLmNhbGwoZGF0YSwga2V5KSkge1xuICAgICAgICBpZiAoaXNBcnJheShkYXRhW2tleV0pKSB7XG4gICAgICAgICAgdW5pcXVlID0ge307XG4gICAgICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0gZGF0YVtrZXldLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVtrZXldW2ldICE9PSB1bmRlZmluZWQgJiYgdW5pcXVlW2RhdGFba2V5XVtpXSArICcnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHQgKz0gJyYnICsgVVJJLmJ1aWxkUXVlcnlQYXJhbWV0ZXIoa2V5LCBkYXRhW2tleV1baV0sIGVzY2FwZVF1ZXJ5U3BhY2UpO1xuICAgICAgICAgICAgICBpZiAoZHVwbGljYXRlUXVlcnlQYXJhbWV0ZXJzICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdW5pcXVlW2RhdGFba2V5XVtpXSArICcnXSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0ICs9ICcmJyArIFVSSS5idWlsZFF1ZXJ5UGFyYW1ldGVyKGtleSwgZGF0YVtrZXldLCBlc2NhcGVRdWVyeVNwYWNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0LnN1YnN0cmluZygxKTtcbiAgfTtcbiAgVVJJLmJ1aWxkUXVlcnlQYXJhbWV0ZXIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgZXNjYXBlUXVlcnlTcGFjZSkge1xuICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1JFQy1odG1sNDAvaW50ZXJhY3QvZm9ybXMuaHRtbCNmb3JtLWNvbnRlbnQtdHlwZSAtLSBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcbiAgICAvLyBkb24ndCBhcHBlbmQgXCI9XCIgZm9yIG51bGwgdmFsdWVzLCBhY2NvcmRpbmcgdG8gaHR0cDovL2R2Y3MudzMub3JnL2hnL3VybC9yYXctZmlsZS90aXAvT3ZlcnZpZXcuaHRtbCN1cmwtcGFyYW1ldGVyLXNlcmlhbGl6YXRpb25cbiAgICByZXR1cm4gVVJJLmVuY29kZVF1ZXJ5KG5hbWUsIGVzY2FwZVF1ZXJ5U3BhY2UpICsgKHZhbHVlICE9PSBudWxsID8gJz0nICsgVVJJLmVuY29kZVF1ZXJ5KHZhbHVlLCBlc2NhcGVRdWVyeVNwYWNlKSA6ICcnKTtcbiAgfTtcblxuICBVUkkuYWRkUXVlcnkgPSBmdW5jdGlvbihkYXRhLCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBuYW1lKSB7XG4gICAgICAgIGlmIChoYXNPd24uY2FsbChuYW1lLCBrZXkpKSB7XG4gICAgICAgICAgVVJJLmFkZFF1ZXJ5KGRhdGEsIGtleSwgbmFtZVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoZGF0YVtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRhdGFbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YVtuYW1lXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZGF0YVtuYW1lXSA9IFtkYXRhW25hbWVdXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgICB9XG5cbiAgICAgIGRhdGFbbmFtZV0gPSAoZGF0YVtuYW1lXSB8fCBbXSkuY29uY2F0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVVJJLmFkZFF1ZXJ5KCkgYWNjZXB0cyBhbiBvYmplY3QsIHN0cmluZyBhcyB0aGUgbmFtZSBwYXJhbWV0ZXInKTtcbiAgICB9XG4gIH07XG5cbiAgVVJJLnNldFF1ZXJ5ID0gZnVuY3Rpb24oZGF0YSwgbmFtZSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gbmFtZSkge1xuICAgICAgICBpZiAoaGFzT3duLmNhbGwobmFtZSwga2V5KSkge1xuICAgICAgICAgIFVSSS5zZXRRdWVyeShkYXRhLCBrZXksIG5hbWVba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgZGF0YVtuYW1lXSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VSSS5zZXRRdWVyeSgpIGFjY2VwdHMgYW4gb2JqZWN0LCBzdHJpbmcgYXMgdGhlIG5hbWUgcGFyYW1ldGVyJyk7XG4gICAgfVxuICB9O1xuXG4gIFVSSS5yZW1vdmVRdWVyeSA9IGZ1bmN0aW9uKGRhdGEsIG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIGksIGxlbmd0aCwga2V5O1xuXG4gICAgaWYgKGlzQXJyYXkobmFtZSkpIHtcbiAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IG5hbWUubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGF0YVtuYW1lW2ldXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGdldFR5cGUobmFtZSkgPT09ICdSZWdFeHAnKSB7XG4gICAgICBmb3IgKGtleSBpbiBkYXRhKSB7XG4gICAgICAgIGlmIChuYW1lLnRlc3Qoa2V5KSkge1xuICAgICAgICAgIGRhdGFba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBmb3IgKGtleSBpbiBuYW1lKSB7XG4gICAgICAgIGlmIChoYXNPd24uY2FsbChuYW1lLCBrZXkpKSB7XG4gICAgICAgICAgVVJJLnJlbW92ZVF1ZXJ5KGRhdGEsIGtleSwgbmFtZVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoZ2V0VHlwZSh2YWx1ZSkgPT09ICdSZWdFeHAnKSB7XG4gICAgICAgICAgaWYgKCFpc0FycmF5KGRhdGFbbmFtZV0pICYmIHZhbHVlLnRlc3QoZGF0YVtuYW1lXSkpIHtcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSBmaWx0ZXJBcnJheVZhbHVlcyhkYXRhW25hbWVdLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRhdGFbbmFtZV0gPT09IFN0cmluZyh2YWx1ZSkgJiYgKCFpc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5sZW5ndGggPT09IDEpKSB7XG4gICAgICAgICAgZGF0YVtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIGlmIChpc0FycmF5KGRhdGFbbmFtZV0pKSB7XG4gICAgICAgICAgZGF0YVtuYW1lXSA9IGZpbHRlckFycmF5VmFsdWVzKGRhdGFbbmFtZV0sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YVtuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVVJJLnJlbW92ZVF1ZXJ5KCkgYWNjZXB0cyBhbiBvYmplY3QsIHN0cmluZywgUmVnRXhwIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXInKTtcbiAgICB9XG4gIH07XG4gIFVSSS5oYXNRdWVyeSA9IGZ1bmN0aW9uKGRhdGEsIG5hbWUsIHZhbHVlLCB3aXRoaW5BcnJheSkge1xuICAgIHN3aXRjaCAoZ2V0VHlwZShuYW1lKSkge1xuICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgLy8gTm90aGluZyB0byBkbyBoZXJlXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdSZWdFeHAnOlxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgIGlmIChoYXNPd24uY2FsbChkYXRhLCBrZXkpKSB7XG4gICAgICAgICAgICBpZiAobmFtZS50ZXN0KGtleSkgJiYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgVVJJLmhhc1F1ZXJ5KGRhdGEsIGtleSwgdmFsdWUpKSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgIGNhc2UgJ09iamVjdCc6XG4gICAgICAgIGZvciAodmFyIF9rZXkgaW4gbmFtZSkge1xuICAgICAgICAgIGlmIChoYXNPd24uY2FsbChuYW1lLCBfa2V5KSkge1xuICAgICAgICAgICAgaWYgKCFVUkkuaGFzUXVlcnkoZGF0YSwgX2tleSwgbmFtZVtfa2V5XSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVUkkuaGFzUXVlcnkoKSBhY2NlcHRzIGEgc3RyaW5nLCByZWd1bGFyIGV4cHJlc3Npb24gb3Igb2JqZWN0IGFzIHRoZSBuYW1lIHBhcmFtZXRlcicpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZ2V0VHlwZSh2YWx1ZSkpIHtcbiAgICAgIGNhc2UgJ1VuZGVmaW5lZCc6XG4gICAgICAgIC8vIHRydWUgaWYgZXhpc3RzIChidXQgbWF5IGJlIGVtcHR5KVxuICAgICAgICByZXR1cm4gbmFtZSBpbiBkYXRhOyAvLyBkYXRhW25hbWVdICE9PSB1bmRlZmluZWQ7XG5cbiAgICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgICAgICAvLyB0cnVlIGlmIGV4aXN0cyBhbmQgbm9uLWVtcHR5XG4gICAgICAgIHZhciBfYm9vbHkgPSBCb29sZWFuKGlzQXJyYXkoZGF0YVtuYW1lXSkgPyBkYXRhW25hbWVdLmxlbmd0aCA6IGRhdGFbbmFtZV0pO1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IF9ib29seTtcblxuICAgICAgY2FzZSAnRnVuY3Rpb24nOlxuICAgICAgICAvLyBhbGxvdyBjb21wbGV4IGNvbXBhcmlzb25cbiAgICAgICAgcmV0dXJuICEhdmFsdWUoZGF0YVtuYW1lXSwgbmFtZSwgZGF0YSk7XG5cbiAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgaWYgKCFpc0FycmF5KGRhdGFbbmFtZV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wID0gd2l0aGluQXJyYXkgPyBhcnJheUNvbnRhaW5zIDogYXJyYXlzRXF1YWw7XG4gICAgICAgIHJldHVybiBvcChkYXRhW25hbWVdLCB2YWx1ZSk7XG5cbiAgICAgIGNhc2UgJ1JlZ0V4cCc6XG4gICAgICAgIGlmICghaXNBcnJheShkYXRhW25hbWVdKSkge1xuICAgICAgICAgIHJldHVybiBCb29sZWFuKGRhdGFbbmFtZV0gJiYgZGF0YVtuYW1lXS5tYXRjaCh2YWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF3aXRoaW5BcnJheSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheUNvbnRhaW5zKGRhdGFbbmFtZV0sIHZhbHVlKTtcblxuICAgICAgY2FzZSAnTnVtYmVyJzpcbiAgICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICBpZiAoIWlzQXJyYXkoZGF0YVtuYW1lXSkpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YVtuYW1lXSA9PT0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXdpdGhpbkFycmF5KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFycmF5Q29udGFpbnMoZGF0YVtuYW1lXSwgdmFsdWUpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVUkkuaGFzUXVlcnkoKSBhY2NlcHRzIHVuZGVmaW5lZCwgYm9vbGVhbiwgc3RyaW5nLCBudW1iZXIsIFJlZ0V4cCwgRnVuY3Rpb24gYXMgdGhlIHZhbHVlIHBhcmFtZXRlcicpO1xuICAgIH1cbiAgfTtcblxuXG4gIFVSSS5qb2luUGF0aHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5wdXQgPSBbXTtcbiAgICB2YXIgc2VnbWVudHMgPSBbXTtcbiAgICB2YXIgbm9uRW1wdHlTZWdtZW50cyA9IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHVybCA9IG5ldyBVUkkoYXJndW1lbnRzW2ldKTtcbiAgICAgIGlucHV0LnB1c2godXJsKTtcbiAgICAgIHZhciBfc2VnbWVudHMgPSB1cmwuc2VnbWVudCgpO1xuICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBfc2VnbWVudHMubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiBfc2VnbWVudHNbc10gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgc2VnbWVudHMucHVzaChfc2VnbWVudHNbc10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF9zZWdtZW50c1tzXSkge1xuICAgICAgICAgIG5vbkVtcHR5U2VnbWVudHMrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc2VnbWVudHMubGVuZ3RoIHx8ICFub25FbXB0eVNlZ21lbnRzKSB7XG4gICAgICByZXR1cm4gbmV3IFVSSSgnJyk7XG4gICAgfVxuXG4gICAgdmFyIHVyaSA9IG5ldyBVUkkoJycpLnNlZ21lbnQoc2VnbWVudHMpO1xuXG4gICAgaWYgKGlucHV0WzBdLnBhdGgoKSA9PT0gJycgfHwgaW5wdXRbMF0ucGF0aCgpLnNsaWNlKDAsIDEpID09PSAnLycpIHtcbiAgICAgIHVyaS5wYXRoKCcvJyArIHVyaS5wYXRoKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB1cmkubm9ybWFsaXplKCk7XG4gIH07XG5cbiAgVVJJLmNvbW1vblBhdGggPSBmdW5jdGlvbihvbmUsIHR3bykge1xuICAgIHZhciBsZW5ndGggPSBNYXRoLm1pbihvbmUubGVuZ3RoLCB0d28ubGVuZ3RoKTtcbiAgICB2YXIgcG9zO1xuXG4gICAgLy8gZmluZCBmaXJzdCBub24tbWF0Y2hpbmcgY2hhcmFjdGVyXG4gICAgZm9yIChwb3MgPSAwOyBwb3MgPCBsZW5ndGg7IHBvcysrKSB7XG4gICAgICBpZiAob25lLmNoYXJBdChwb3MpICE9PSB0d28uY2hhckF0KHBvcykpIHtcbiAgICAgICAgcG9zLS07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3MgPCAxKSB7XG4gICAgICByZXR1cm4gb25lLmNoYXJBdCgwKSA9PT0gdHdvLmNoYXJBdCgwKSAmJiBvbmUuY2hhckF0KDApID09PSAnLycgPyAnLycgOiAnJztcbiAgICB9XG5cbiAgICAvLyByZXZlcnQgdG8gbGFzdCAvXG4gICAgaWYgKG9uZS5jaGFyQXQocG9zKSAhPT0gJy8nIHx8IHR3by5jaGFyQXQocG9zKSAhPT0gJy8nKSB7XG4gICAgICBwb3MgPSBvbmUuc3Vic3RyaW5nKDAsIHBvcykubGFzdEluZGV4T2YoJy8nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gb25lLnN1YnN0cmluZygwLCBwb3MgKyAxKTtcbiAgfTtcblxuICBVUkkud2l0aGluU3RyaW5nID0gZnVuY3Rpb24oc3RyaW5nLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gICAgdmFyIF9zdGFydCA9IG9wdGlvbnMuc3RhcnQgfHwgVVJJLmZpbmRVcmkuc3RhcnQ7XG4gICAgdmFyIF9lbmQgPSBvcHRpb25zLmVuZCB8fCBVUkkuZmluZFVyaS5lbmQ7XG4gICAgdmFyIF90cmltID0gb3B0aW9ucy50cmltIHx8IFVSSS5maW5kVXJpLnRyaW07XG4gICAgdmFyIF9wYXJlbnMgPSBvcHRpb25zLnBhcmVucyB8fCBVUkkuZmluZFVyaS5wYXJlbnM7XG4gICAgdmFyIF9hdHRyaWJ1dGVPcGVuID0gL1thLXowLTktXT1bXCInXT8kL2k7XG5cbiAgICBfc3RhcnQubGFzdEluZGV4ID0gMDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIG1hdGNoID0gX3N0YXJ0LmV4ZWMoc3RyaW5nKTtcbiAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydCA9IG1hdGNoLmluZGV4O1xuICAgICAgaWYgKG9wdGlvbnMuaWdub3JlSHRtbCkge1xuICAgICAgICAvLyBhdHRyaWJ1dChlPVtcIiddPyQpXG4gICAgICAgIHZhciBhdHRyaWJ1dGVPcGVuID0gc3RyaW5nLnNsaWNlKE1hdGgubWF4KHN0YXJ0IC0gMywgMCksIHN0YXJ0KTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZU9wZW4gJiYgX2F0dHJpYnV0ZU9wZW4udGVzdChhdHRyaWJ1dGVPcGVuKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBlbmQgPSBzdGFydCArIHN0cmluZy5zbGljZShzdGFydCkuc2VhcmNoKF9lbmQpO1xuICAgICAgdmFyIHNsaWNlID0gc3RyaW5nLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgLy8gbWFrZSBzdXJlIHdlIGluY2x1ZGUgd2VsbCBiYWxhbmNlZCBwYXJlbnNcbiAgICAgIHZhciBwYXJlbnNFbmQgPSAtMTtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBwYXJlbnNNYXRjaCA9IF9wYXJlbnMuZXhlYyhzbGljZSk7XG4gICAgICAgIGlmICghcGFyZW5zTWF0Y2gpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJlbnNNYXRjaEVuZCA9IHBhcmVuc01hdGNoLmluZGV4ICsgcGFyZW5zTWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICBwYXJlbnNFbmQgPSBNYXRoLm1heChwYXJlbnNFbmQsIHBhcmVuc01hdGNoRW5kKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcmVuc0VuZCA+IC0xKSB7XG4gICAgICAgIHNsaWNlID0gc2xpY2Uuc2xpY2UoMCwgcGFyZW5zRW5kKSArIHNsaWNlLnNsaWNlKHBhcmVuc0VuZCkucmVwbGFjZShfdHJpbSwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpY2UgPSBzbGljZS5yZXBsYWNlKF90cmltLCAnJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzbGljZS5sZW5ndGggPD0gbWF0Y2hbMF0ubGVuZ3RoKSB7XG4gICAgICAgIC8vIHRoZSBleHRyYWN0IG9ubHkgY29udGFpbnMgdGhlIHN0YXJ0aW5nIG1hcmtlciBvZiBhIFVSSSxcbiAgICAgICAgLy8gZS5nLiBcInd3d1wiIG9yIFwiaHR0cDovL1wiXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5pZ25vcmUgJiYgb3B0aW9ucy5pZ25vcmUudGVzdChzbGljZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGVuZCA9IHN0YXJ0ICsgc2xpY2UubGVuZ3RoO1xuICAgICAgdmFyIHJlc3VsdCA9IGNhbGxiYWNrKHNsaWNlLCBzdGFydCwgZW5kLCBzdHJpbmcpO1xuICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIF9zdGFydC5sYXN0SW5kZXggPSBlbmQ7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSBTdHJpbmcocmVzdWx0KTtcbiAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZSgwLCBzdGFydCkgKyByZXN1bHQgKyBzdHJpbmcuc2xpY2UoZW5kKTtcbiAgICAgIF9zdGFydC5sYXN0SW5kZXggPSBzdGFydCArIHJlc3VsdC5sZW5ndGg7XG4gICAgfVxuXG4gICAgX3N0YXJ0Lmxhc3RJbmRleCA9IDA7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICBVUkkuZW5zdXJlVmFsaWRIb3N0bmFtZSA9IGZ1bmN0aW9uKHYsIHByb3RvY29sKSB7XG4gICAgLy8gVGhlb3JldGljYWxseSBVUklzIGFsbG93IHBlcmNlbnQtZW5jb2RpbmcgaW4gSG9zdG5hbWVzIChhY2NvcmRpbmcgdG8gUkZDIDM5ODYpXG4gICAgLy8gdGhleSBhcmUgbm90IHBhcnQgb2YgRE5TIGFuZCB0aGVyZWZvcmUgaWdub3JlZCBieSBVUkkuanNcblxuICAgIHZhciBoYXNIb3N0bmFtZSA9ICEhdjsgLy8gbm90IG51bGwgYW5kIG5vdCBhbiBlbXB0eSBzdHJpbmdcbiAgICB2YXIgaGFzUHJvdG9jb2wgPSAhIXByb3RvY29sO1xuICAgIHZhciByZWplY3RFbXB0eUhvc3RuYW1lID0gZmFsc2U7XG5cbiAgICBpZiAoaGFzUHJvdG9jb2wpIHtcbiAgICAgIHJlamVjdEVtcHR5SG9zdG5hbWUgPSBhcnJheUNvbnRhaW5zKFVSSS5ob3N0UHJvdG9jb2xzLCBwcm90b2NvbCk7XG4gICAgfVxuXG4gICAgaWYgKHJlamVjdEVtcHR5SG9zdG5hbWUgJiYgIWhhc0hvc3RuYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdIb3N0bmFtZSBjYW5ub3QgYmUgZW1wdHksIGlmIHByb3RvY29sIGlzICcgKyBwcm90b2NvbCk7XG4gICAgfSBlbHNlIGlmICh2ICYmIHYubWF0Y2goVVJJLmludmFsaWRfaG9zdG5hbWVfY2hhcmFjdGVycykpIHtcbiAgICAgIC8vIHRlc3QgcHVueWNvZGVcbiAgICAgIGlmICghcHVueWNvZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSG9zdG5hbWUgXCInICsgdiArICdcIiBjb250YWlucyBjaGFyYWN0ZXJzIG90aGVyIHRoYW4gW0EtWjAtOS4tOl9dIGFuZCBQdW55Y29kZS5qcyBpcyBub3QgYXZhaWxhYmxlJyk7XG4gICAgICB9XG4gICAgICBpZiAocHVueWNvZGUudG9BU0NJSSh2KS5tYXRjaChVUkkuaW52YWxpZF9ob3N0bmFtZV9jaGFyYWN0ZXJzKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdIb3N0bmFtZSBcIicgKyB2ICsgJ1wiIGNvbnRhaW5zIGNoYXJhY3RlcnMgb3RoZXIgdGhhbiBbQS1aMC05Li06X10nKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgVVJJLmVuc3VyZVZhbGlkUG9ydCA9IGZ1bmN0aW9uICh2KSB7XG4gICAgaWYgKCF2KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBvcnQgPSBOdW1iZXIodik7XG4gICAgaWYgKGlzSW50ZWdlcihwb3J0KSAmJiAocG9ydCA+IDApICYmIChwb3J0IDwgNjU1MzYpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUG9ydCBcIicgKyB2ICsgJ1wiIGlzIG5vdCBhIHZhbGlkIHBvcnQnKTtcbiAgfTtcblxuICAvLyBub0NvbmZsaWN0XG4gIFVSSS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24ocmVtb3ZlQWxsKSB7XG4gICAgaWYgKHJlbW92ZUFsbCkge1xuICAgICAgdmFyIHVuY29uZmxpY3RlZCA9IHtcbiAgICAgICAgVVJJOiB0aGlzLm5vQ29uZmxpY3QoKVxuICAgICAgfTtcblxuICAgICAgaWYgKHJvb3QuVVJJVGVtcGxhdGUgJiYgdHlwZW9mIHJvb3QuVVJJVGVtcGxhdGUubm9Db25mbGljdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB1bmNvbmZsaWN0ZWQuVVJJVGVtcGxhdGUgPSByb290LlVSSVRlbXBsYXRlLm5vQ29uZmxpY3QoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJvb3QuSVB2NiAmJiB0eXBlb2Ygcm9vdC5JUHY2Lm5vQ29uZmxpY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdW5jb25mbGljdGVkLklQdjYgPSByb290LklQdjYubm9Db25mbGljdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocm9vdC5TZWNvbmRMZXZlbERvbWFpbnMgJiYgdHlwZW9mIHJvb3QuU2Vjb25kTGV2ZWxEb21haW5zLm5vQ29uZmxpY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdW5jb25mbGljdGVkLlNlY29uZExldmVsRG9tYWlucyA9IHJvb3QuU2Vjb25kTGV2ZWxEb21haW5zLm5vQ29uZmxpY3QoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuY29uZmxpY3RlZDtcbiAgICB9IGVsc2UgaWYgKHJvb3QuVVJJID09PSB0aGlzKSB7XG4gICAgICByb290LlVSSSA9IF9VUkk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcC5idWlsZCA9IGZ1bmN0aW9uKGRlZmVyQnVpbGQpIHtcbiAgICBpZiAoZGVmZXJCdWlsZCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5fZGVmZXJyZWRfYnVpbGQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZGVmZXJCdWlsZCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX2RlZmVycmVkX2J1aWxkKSB7XG4gICAgICB0aGlzLl9zdHJpbmcgPSBVUkkuYnVpbGQodGhpcy5fcGFydHMpO1xuICAgICAgdGhpcy5fZGVmZXJyZWRfYnVpbGQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBwLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBVUkkodGhpcyk7XG4gIH07XG5cbiAgcC52YWx1ZU9mID0gcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJ1aWxkKGZhbHNlKS5fc3RyaW5nO1xuICB9O1xuXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVTaW1wbGVBY2Nlc3NvcihfcGFydCl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHYsIGJ1aWxkKSB7XG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJ0c1tfcGFydF0gfHwgJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wYXJ0c1tfcGFydF0gPSB2IHx8IG51bGw7XG4gICAgICAgIHRoaXMuYnVpbGQoIWJ1aWxkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlUHJlZml4QWNjZXNzb3IoX3BhcnQsIF9rZXkpe1xuICAgIHJldHVybiBmdW5jdGlvbih2LCBidWlsZCkge1xuICAgICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFydHNbX3BhcnRdIHx8ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHYgIT09IG51bGwpIHtcbiAgICAgICAgICB2ID0gdiArICcnO1xuICAgICAgICAgIGlmICh2LmNoYXJBdCgwKSA9PT0gX2tleSkge1xuICAgICAgICAgICAgdiA9IHYuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BhcnRzW19wYXJ0XSA9IHY7XG4gICAgICAgIHRoaXMuYnVpbGQoIWJ1aWxkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHAucHJvdG9jb2wgPSBnZW5lcmF0ZVNpbXBsZUFjY2Vzc29yKCdwcm90b2NvbCcpO1xuICBwLnVzZXJuYW1lID0gZ2VuZXJhdGVTaW1wbGVBY2Nlc3NvcigndXNlcm5hbWUnKTtcbiAgcC5wYXNzd29yZCA9IGdlbmVyYXRlU2ltcGxlQWNjZXNzb3IoJ3Bhc3N3b3JkJyk7XG4gIHAuaG9zdG5hbWUgPSBnZW5lcmF0ZVNpbXBsZUFjY2Vzc29yKCdob3N0bmFtZScpO1xuICBwLnBvcnQgPSBnZW5lcmF0ZVNpbXBsZUFjY2Vzc29yKCdwb3J0Jyk7XG4gIHAucXVlcnkgPSBnZW5lcmF0ZVByZWZpeEFjY2Vzc29yKCdxdWVyeScsICc/Jyk7XG4gIHAuZnJhZ21lbnQgPSBnZW5lcmF0ZVByZWZpeEFjY2Vzc29yKCdmcmFnbWVudCcsICcjJyk7XG5cbiAgcC5zZWFyY2ggPSBmdW5jdGlvbih2LCBidWlsZCkge1xuICAgIHZhciB0ID0gdGhpcy5xdWVyeSh2LCBidWlsZCk7XG4gICAgcmV0dXJuIHR5cGVvZiB0ID09PSAnc3RyaW5nJyAmJiB0Lmxlbmd0aCA/ICgnPycgKyB0KSA6IHQ7XG4gIH07XG4gIHAuaGFzaCA9IGZ1bmN0aW9uKHYsIGJ1aWxkKSB7XG4gICAgdmFyIHQgPSB0aGlzLmZyYWdtZW50KHYsIGJ1aWxkKTtcbiAgICByZXR1cm4gdHlwZW9mIHQgPT09ICdzdHJpbmcnICYmIHQubGVuZ3RoID8gKCcjJyArIHQpIDogdDtcbiAgfTtcblxuICBwLnBhdGhuYW1lID0gZnVuY3Rpb24odiwgYnVpbGQpIHtcbiAgICBpZiAodiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IHRydWUpIHtcbiAgICAgIHZhciByZXMgPSB0aGlzLl9wYXJ0cy5wYXRoIHx8ICh0aGlzLl9wYXJ0cy5ob3N0bmFtZSA/ICcvJyA6ICcnKTtcbiAgICAgIHJldHVybiB2ID8gKHRoaXMuX3BhcnRzLnVybiA/IFVSSS5kZWNvZGVVcm5QYXRoIDogVVJJLmRlY29kZVBhdGgpKHJlcykgOiByZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9wYXJ0cy51cm4pIHtcbiAgICAgICAgdGhpcy5fcGFydHMucGF0aCA9IHYgPyBVUkkucmVjb2RlVXJuUGF0aCh2KSA6ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcGFydHMucGF0aCA9IHYgPyBVUkkucmVjb2RlUGF0aCh2KSA6ICcvJztcbiAgICAgIH1cbiAgICAgIHRoaXMuYnVpbGQoIWJ1aWxkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcbiAgcC5wYXRoID0gcC5wYXRobmFtZTtcbiAgcC5ocmVmID0gZnVuY3Rpb24oaHJlZiwgYnVpbGQpIHtcbiAgICB2YXIga2V5O1xuXG4gICAgaWYgKGhyZWYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zdHJpbmcgPSAnJztcbiAgICB0aGlzLl9wYXJ0cyA9IFVSSS5fcGFydHMoKTtcblxuICAgIHZhciBfVVJJID0gaHJlZiBpbnN0YW5jZW9mIFVSSTtcbiAgICB2YXIgX29iamVjdCA9IHR5cGVvZiBocmVmID09PSAnb2JqZWN0JyAmJiAoaHJlZi5ob3N0bmFtZSB8fCBocmVmLnBhdGggfHwgaHJlZi5wYXRobmFtZSk7XG4gICAgaWYgKGhyZWYubm9kZU5hbWUpIHtcbiAgICAgIHZhciBhdHRyaWJ1dGUgPSBVUkkuZ2V0RG9tQXR0cmlidXRlKGhyZWYpO1xuICAgICAgaHJlZiA9IGhyZWZbYXR0cmlidXRlXSB8fCAnJztcbiAgICAgIF9vYmplY3QgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyB3aW5kb3cubG9jYXRpb24gaXMgcmVwb3J0ZWQgdG8gYmUgYW4gb2JqZWN0LCBidXQgaXQncyBub3QgdGhlIHNvcnRcbiAgICAvLyBvZiBvYmplY3Qgd2UncmUgbG9va2luZyBmb3I6XG4gICAgLy8gKiBsb2NhdGlvbi5wcm90b2NvbCBlbmRzIHdpdGggYSBjb2xvblxuICAgIC8vICogbG9jYXRpb24ucXVlcnkgIT0gb2JqZWN0LnNlYXJjaFxuICAgIC8vICogbG9jYXRpb24uaGFzaCAhPSBvYmplY3QuZnJhZ21lbnRcbiAgICAvLyBzaW1wbHkgc2VyaWFsaXppbmcgdGhlIHVua25vd24gb2JqZWN0IHNob3VsZCBkbyB0aGUgdHJpY2tcbiAgICAvLyAoZm9yIGxvY2F0aW9uLCBub3QgZm9yIGV2ZXJ5dGhpbmcuLi4pXG4gICAgaWYgKCFfVVJJICYmIF9vYmplY3QgJiYgaHJlZi5wYXRobmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBocmVmID0gaHJlZi50b1N0cmluZygpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgfHwgaHJlZiBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgdGhpcy5fcGFydHMgPSBVUkkucGFyc2UoU3RyaW5nKGhyZWYpLCB0aGlzLl9wYXJ0cyk7XG4gICAgfSBlbHNlIGlmIChfVVJJIHx8IF9vYmplY3QpIHtcbiAgICAgIHZhciBzcmMgPSBfVVJJID8gaHJlZi5fcGFydHMgOiBocmVmO1xuICAgICAgZm9yIChrZXkgaW4gc3JjKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdxdWVyeScpIHsgY29udGludWU7IH1cbiAgICAgICAgaWYgKGhhc093bi5jYWxsKHRoaXMuX3BhcnRzLCBrZXkpKSB7XG4gICAgICAgICAgdGhpcy5fcGFydHNba2V5XSA9IHNyY1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3JjLnF1ZXJ5KSB7XG4gICAgICAgIHRoaXMucXVlcnkoc3JjLnF1ZXJ5LCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgaW5wdXQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmJ1aWxkKCFidWlsZCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gaWRlbnRpZmljYXRpb24gYWNjZXNzb3JzXG4gIHAuaXMgPSBmdW5jdGlvbih3aGF0KSB7XG4gICAgdmFyIGlwID0gZmFsc2U7XG4gICAgdmFyIGlwNCA9IGZhbHNlO1xuICAgIHZhciBpcDYgPSBmYWxzZTtcbiAgICB2YXIgbmFtZSA9IGZhbHNlO1xuICAgIHZhciBzbGQgPSBmYWxzZTtcbiAgICB2YXIgaWRuID0gZmFsc2U7XG4gICAgdmFyIHB1bnljb2RlID0gZmFsc2U7XG4gICAgdmFyIHJlbGF0aXZlID0gIXRoaXMuX3BhcnRzLnVybjtcblxuICAgIGlmICh0aGlzLl9wYXJ0cy5ob3N0bmFtZSkge1xuICAgICAgcmVsYXRpdmUgPSBmYWxzZTtcbiAgICAgIGlwNCA9IFVSSS5pcDRfZXhwcmVzc2lvbi50ZXN0KHRoaXMuX3BhcnRzLmhvc3RuYW1lKTtcbiAgICAgIGlwNiA9IFVSSS5pcDZfZXhwcmVzc2lvbi50ZXN0KHRoaXMuX3BhcnRzLmhvc3RuYW1lKTtcbiAgICAgIGlwID0gaXA0IHx8IGlwNjtcbiAgICAgIG5hbWUgPSAhaXA7XG4gICAgICBzbGQgPSBuYW1lICYmIFNMRCAmJiBTTEQuaGFzKHRoaXMuX3BhcnRzLmhvc3RuYW1lKTtcbiAgICAgIGlkbiA9IG5hbWUgJiYgVVJJLmlkbl9leHByZXNzaW9uLnRlc3QodGhpcy5fcGFydHMuaG9zdG5hbWUpO1xuICAgICAgcHVueWNvZGUgPSBuYW1lICYmIFVSSS5wdW55Y29kZV9leHByZXNzaW9uLnRlc3QodGhpcy5fcGFydHMuaG9zdG5hbWUpO1xuICAgIH1cblxuICAgIHN3aXRjaCAod2hhdC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBjYXNlICdyZWxhdGl2ZSc6XG4gICAgICAgIHJldHVybiByZWxhdGl2ZTtcblxuICAgICAgY2FzZSAnYWJzb2x1dGUnOlxuICAgICAgICByZXR1cm4gIXJlbGF0aXZlO1xuXG4gICAgICAvLyBob3N0bmFtZSBpZGVudGlmaWNhdGlvblxuICAgICAgY2FzZSAnZG9tYWluJzpcbiAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICByZXR1cm4gbmFtZTtcblxuICAgICAgY2FzZSAnc2xkJzpcbiAgICAgICAgcmV0dXJuIHNsZDtcblxuICAgICAgY2FzZSAnaXAnOlxuICAgICAgICByZXR1cm4gaXA7XG5cbiAgICAgIGNhc2UgJ2lwNCc6XG4gICAgICBjYXNlICdpcHY0JzpcbiAgICAgIGNhc2UgJ2luZXQ0JzpcbiAgICAgICAgcmV0dXJuIGlwNDtcblxuICAgICAgY2FzZSAnaXA2JzpcbiAgICAgIGNhc2UgJ2lwdjYnOlxuICAgICAgY2FzZSAnaW5ldDYnOlxuICAgICAgICByZXR1cm4gaXA2O1xuXG4gICAgICBjYXNlICdpZG4nOlxuICAgICAgICByZXR1cm4gaWRuO1xuXG4gICAgICBjYXNlICd1cmwnOlxuICAgICAgICByZXR1cm4gIXRoaXMuX3BhcnRzLnVybjtcblxuICAgICAgY2FzZSAndXJuJzpcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fcGFydHMudXJuO1xuXG4gICAgICBjYXNlICdwdW55Y29kZSc6XG4gICAgICAgIHJldHVybiBwdW55Y29kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICAvLyBjb21wb25lbnQgc3BlY2lmaWMgaW5wdXQgdmFsaWRhdGlvblxuICB2YXIgX3Byb3RvY29sID0gcC5wcm90b2NvbDtcbiAgdmFyIF9wb3J0ID0gcC5wb3J0O1xuICB2YXIgX2hvc3RuYW1lID0gcC5ob3N0bmFtZTtcblxuICBwLnByb3RvY29sID0gZnVuY3Rpb24odiwgYnVpbGQpIHtcbiAgICBpZiAodikge1xuICAgICAgLy8gYWNjZXB0IHRyYWlsaW5nIDovL1xuICAgICAgdiA9IHYucmVwbGFjZSgvOihcXC9cXC8pPyQvLCAnJyk7XG5cbiAgICAgIGlmICghdi5tYXRjaChVUkkucHJvdG9jb2xfZXhwcmVzc2lvbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvdG9jb2wgXCInICsgdiArICdcIiBjb250YWlucyBjaGFyYWN0ZXJzIG90aGVyIHRoYW4gW0EtWjAtOS4rLV0gb3IgZG9lc25cXCd0IHN0YXJ0IHdpdGggW0EtWl0nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3Byb3RvY29sLmNhbGwodGhpcywgdiwgYnVpbGQpO1xuICB9O1xuICBwLnNjaGVtZSA9IHAucHJvdG9jb2w7XG4gIHAucG9ydCA9IGZ1bmN0aW9uKHYsIGJ1aWxkKSB7XG4gICAgaWYgKHRoaXMuX3BhcnRzLnVybikge1xuICAgICAgcmV0dXJuIHYgPT09IHVuZGVmaW5lZCA/ICcnIDogdGhpcztcbiAgICB9XG5cbiAgICBpZiAodiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodiA9PT0gMCkge1xuICAgICAgICB2ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHYpIHtcbiAgICAgICAgdiArPSAnJztcbiAgICAgICAgaWYgKHYuY2hhckF0KDApID09PSAnOicpIHtcbiAgICAgICAgICB2ID0gdi5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cblxuICAgICAgICBVUkkuZW5zdXJlVmFsaWRQb3J0KHYpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX3BvcnQuY2FsbCh0aGlzLCB2LCBidWlsZCk7XG4gIH07XG4gIHAuaG9zdG5hbWUgPSBmdW5jdGlvbih2LCBidWlsZCkge1xuICAgIGlmICh0aGlzLl9wYXJ0cy51cm4pIHtcbiAgICAgIHJldHVybiB2ID09PSB1bmRlZmluZWQgPyAnJyA6IHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHggPSB7IHByZXZlbnRJbnZhbGlkSG9zdG5hbWU6IHRoaXMuX3BhcnRzLnByZXZlbnRJbnZhbGlkSG9zdG5hbWUgfTtcbiAgICAgIHZhciByZXMgPSBVUkkucGFyc2VIb3N0KHYsIHgpO1xuICAgICAgaWYgKHJlcyAhPT0gJy8nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0hvc3RuYW1lIFwiJyArIHYgKyAnXCIgY29udGFpbnMgY2hhcmFjdGVycyBvdGhlciB0aGFuIFtBLVowLTkuLV0nKTtcbiAgICAgIH1cblxuICAgICAgdiA9IHguaG9zdG5hbWU7XG4gICAgICBpZiAodGhpcy5fcGFydHMucHJldmVudEludmFsaWRIb3N0bmFtZSkge1xuICAgICAgICBVUkkuZW5zdXJlVmFsaWRIb3N0bmFtZSh2LCB0aGlzLl9wYXJ0cy5wcm90b2NvbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9ob3N0bmFtZS5jYWxsKHRoaXMsIHYsIGJ1aWxkKTtcbiAgfTtcblxuICAvLyBjb21wb3VuZCBhY2Nlc3NvcnNcbiAgcC5vcmlnaW4gPSBmdW5jdGlvbih2LCBidWlsZCkge1xuICAgIGlmICh0aGlzLl9wYXJ0cy51cm4pIHtcbiAgICAgIHJldHVybiB2ID09PSB1bmRlZmluZWQgPyAnJyA6IHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHByb3RvY29sID0gdGhpcy5wcm90b2NvbCgpO1xuICAgICAgdmFyIGF1dGhvcml0eSA9IHRoaXMuYXV0aG9yaXR5KCk7XG4gICAgICBpZiAoIWF1dGhvcml0eSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAocHJvdG9jb2wgPyBwcm90b2NvbCArICc6Ly8nIDogJycpICsgdGhpcy5hdXRob3JpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9yaWdpbiA9IFVSSSh2KTtcbiAgICAgIHRoaXNcbiAgICAgICAgLnByb3RvY29sKG9yaWdpbi5wcm90b2NvbCgpKVxuICAgICAgICAuYXV0aG9yaXR5KG9yaWdpbi5hdXRob3JpdHkoKSlcbiAgICAgICAgLmJ1aWxkKCFidWlsZCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG4gIHAuaG9zdCA9IGZ1bmN0aW9uKHYsIGJ1aWxkKSB7XG4gICAgaWYgKHRoaXMuX3BhcnRzLnVybikge1xuICAgICAgcmV0dXJuIHYgPT09IHVuZGVmaW5lZCA/ICcnIDogdGhpcztcbiAgICB9XG5cbiAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGFydHMuaG9zdG5hbWUgPyBVUkkuYnVpbGRIb3N0KHRoaXMuX3BhcnRzKSA6ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzID0gVVJJLnBhcnNlSG9zdCh2LCB0aGlzLl9wYXJ0cyk7XG4gICAgICBpZiAocmVzICE9PSAnLycpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSG9zdG5hbWUgXCInICsgdiArICdcIiBjb250YWlucyBjaGFyYWN0ZXJzIG90aGVyIHRoYW4gW0EtWjAtOS4tXScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmJ1aWxkKCFidWlsZCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG4gIHAuYXV0aG9yaXR5ID0gZnVuY3Rpb24odiwgYnVpbGQpIHtcbiAgICBpZiAodGhpcy5fcGFydHMudXJuKSB7XG4gICAgICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkID8gJycgOiB0aGlzO1xuICAgIH1cblxuICAgIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wYXJ0cy5ob3N0bmFtZSA/IFVSSS5idWlsZEF1dGhvcml0eSh0aGlzLl9wYXJ0cykgOiAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlcyA9IFVSSS5wYXJzZUF1dGhvcml0eSh2LCB0aGlzLl9wYXJ0cyk7XG4gICAgICBpZiAocmVzICE9PSAnLycpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSG9zdG5hbWUgXCInICsgdiArICdcIiBjb250YWlucyBjaGFyYWN0ZXJzIG90aGVyIHRoYW4gW0EtWjAtOS4tXScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmJ1aWxkKCFidWlsZCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG4gIHAudXNlcmluZm8gPSBmdW5jdGlvbih2LCBidWlsZCkge1xuICAgIGlmICh0aGlzLl9wYXJ0cy51cm4pIHtcbiAgICAgIHJldHVybiB2ID09PSB1bmRlZmluZWQgPyAnJyA6IHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHQgPSBVUkkuYnVpbGRVc2VyaW5mbyh0aGlzLl9wYXJ0cyk7XG4gICAgICByZXR1cm4gdCA/IHQuc3Vic3RyaW5nKDAsIHQubGVuZ3RoIC0xKSA6IHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2W3YubGVuZ3RoLTFdICE9PSAnQCcpIHtcbiAgICAgICAgdiArPSAnQCc7XG4gICAgICB9XG5cbiAgICAgIFVSSS5wYXJzZVVzZXJpbmZvKHYsIHRoaXMuX3BhcnRzKTtcbiAgICAgIHRoaXMuYnVpbGQoIWJ1aWxkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcbiAgcC5yZXNvdXJjZSA9IGZ1bmN0aW9uKHYsIGJ1aWxkKSB7XG4gICAgdmFyIHBhcnRzO1xuXG4gICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMucGF0aCgpICsgdGhpcy5zZWFyY2goKSArIHRoaXMuaGFzaCgpO1xuICAgIH1cblxuICAgIHBhcnRzID0gVVJJLnBhcnNlKHYpO1xuICAgIHRoaXMuX3BhcnRzLnBhdGggPSBwYXJ0cy5wYXRoO1xuICAgIHRoaXMuX3BhcnRzLnF1ZXJ5ID0gcGFydHMucXVlcnk7XG4gICAgdGhpcy5fcGFydHMuZnJhZ21lbnQgPSBwYXJ0cy5mcmFnbWVudDtcbiAgICB0aGlzLmJ1aWxkKCFidWlsZCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gZnJhY3Rpb24gYWNjZXNzb3JzXG4gIHAuc3ViZG9tYWluID0gZnVuY3Rpb24odiwgYnVpbGQpIHtcbiAgICBpZiAodGhpcy5fcGFydHMudXJuKSB7XG4gICAgICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkID8gJycgOiB0aGlzO1xuICAgIH1cblxuICAgIC8vIGNvbnZlbmllbmNlLCByZXR1cm4gXCJ3d3dcIiBmcm9tIFwid3d3LmV4YW1wbGUub3JnXCJcbiAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoIXRoaXMuX3BhcnRzLmhvc3RuYW1lIHx8IHRoaXMuaXMoJ0lQJykpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICAvLyBncmFiIGRvbWFpbiBhbmQgYWRkIGFub3RoZXIgc2VnbWVudFxuICAgICAgdmFyIGVuZCA9IHRoaXMuX3BhcnRzLmhvc3RuYW1lLmxlbmd0aCAtIHRoaXMuZG9tYWluKCkubGVuZ3RoIC0gMTtcbiAgICAgIHJldHVybiB0aGlzLl9wYXJ0cy5ob3N0bmFtZS5zdWJzdHJpbmcoMCwgZW5kKSB8fCAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGUgPSB0aGlzLl9wYXJ0cy5ob3N0bmFtZS5sZW5ndGggLSB0aGlzLmRvbWFpbigpLmxlbmd0aDtcbiAgICAgIHZhciBzdWIgPSB0aGlzLl9wYXJ0cy5ob3N0bmFtZS5zdWJzdHJpbmcoMCwgZSk7XG4gICAgICB2YXIgcmVwbGFjZSA9IG5ldyBSZWdFeHAoJ14nICsgZXNjYXBlUmVnRXgoc3ViKSk7XG5cbiAgICAgIGlmICh2ICYmIHYuY2hhckF0KHYubGVuZ3RoIC0gMSkgIT09ICcuJykge1xuICAgICAgICB2ICs9ICcuJztcbiAgICAgIH1cblxuICAgICAgaWYgKHYuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdEb21haW5zIGNhbm5vdCBjb250YWluIGNvbG9ucycpO1xuICAgICAgfVxuXG4gICAgICBpZiAodikge1xuICAgICAgICBVUkkuZW5zdXJlVmFsaWRIb3N0bmFtZSh2LCB0aGlzLl9wYXJ0cy5wcm90b2NvbCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3BhcnRzLmhvc3RuYW1lID0gdGhpcy5fcGFydHMuaG9zdG5hbWUucmVwbGFjZShyZXBsYWNlLCB2KTtcbiAgICAgIHRoaXMuYnVpbGQoIWJ1aWxkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcbiAgcC5kb21haW4gPSBmdW5jdGlvbih2LCBidWlsZCkge1xuICAgIGlmICh0aGlzLl9wYXJ0cy51cm4pIHtcbiAgICAgIHJldHVybiB2ID09PSB1bmRlZmluZWQgPyAnJyA6IHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGJ1aWxkID0gdjtcbiAgICAgIHYgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gY29udmVuaWVuY2UsIHJldHVybiBcImV4YW1wbGUub3JnXCIgZnJvbSBcInd3dy5leGFtcGxlLm9yZ1wiXG4gICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCF0aGlzLl9wYXJ0cy5ob3N0bmFtZSB8fCB0aGlzLmlzKCdJUCcpKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgLy8gaWYgaG9zdG5hbWUgY29uc2lzdHMgb2YgMSBvciAyIHNlZ21lbnRzLCBpdCBtdXN0IGJlIHRoZSBkb21haW5cbiAgICAgIHZhciB0ID0gdGhpcy5fcGFydHMuaG9zdG5hbWUubWF0Y2goL1xcLi9nKTtcbiAgICAgIGlmICh0ICYmIHQubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFydHMuaG9zdG5hbWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGdyYWIgdGxkIGFuZCBhZGQgYW5vdGhlciBzZWdtZW50XG4gICAgICB2YXIgZW5kID0gdGhpcy5fcGFydHMuaG9zdG5hbWUubGVuZ3RoIC0gdGhpcy50bGQoYnVpbGQpLmxlbmd0aCAtIDE7XG4gICAgICBlbmQgPSB0aGlzLl9wYXJ0cy5ob3N0bmFtZS5sYXN0SW5kZXhPZignLicsIGVuZCAtMSkgKyAxO1xuICAgICAgcmV0dXJuIHRoaXMuX3BhcnRzLmhvc3RuYW1lLnN1YnN0cmluZyhlbmQpIHx8ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXYpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2Fubm90IHNldCBkb21haW4gZW1wdHknKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHYuaW5kZXhPZignOicpICE9PSAtMSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdEb21haW5zIGNhbm5vdCBjb250YWluIGNvbG9ucycpO1xuICAgICAgfVxuXG4gICAgICBVUkkuZW5zdXJlVmFsaWRIb3N0bmFtZSh2LCB0aGlzLl9wYXJ0cy5wcm90b2NvbCk7XG5cbiAgICAgIGlmICghdGhpcy5fcGFydHMuaG9zdG5hbWUgfHwgdGhpcy5pcygnSVAnKSkge1xuICAgICAgICB0aGlzLl9wYXJ0cy5ob3N0bmFtZSA9IHY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVwbGFjZSA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXgodGhpcy5kb21haW4oKSkgKyAnJCcpO1xuICAgICAgICB0aGlzLl9wYXJ0cy5ob3N0bmFtZSA9IHRoaXMuX3BhcnRzLmhvc3RuYW1lLnJlcGxhY2UocmVwbGFjZSwgdik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYnVpbGQoIWJ1aWxkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcbiAgcC50bGQgPSBmdW5jdGlvbih2LCBidWlsZCkge1xuICAgIGlmICh0aGlzLl9wYXJ0cy51cm4pIHtcbiAgICAgIHJldHVybiB2ID09PSB1bmRlZmluZWQgPyAnJyA6IHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGJ1aWxkID0gdjtcbiAgICAgIHYgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIFwib3JnXCIgZnJvbSBcInd3dy5leGFtcGxlLm9yZ1wiXG4gICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCF0aGlzLl9wYXJ0cy5ob3N0bmFtZSB8fCB0aGlzLmlzKCdJUCcpKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgdmFyIHBvcyA9IHRoaXMuX3BhcnRzLmhvc3RuYW1lLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICB2YXIgdGxkID0gdGhpcy5fcGFydHMuaG9zdG5hbWUuc3Vic3RyaW5nKHBvcyArIDEpO1xuXG4gICAgICBpZiAoYnVpbGQgIT09IHRydWUgJiYgU0xEICYmIFNMRC5saXN0W3RsZC50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICByZXR1cm4gU0xELmdldCh0aGlzLl9wYXJ0cy5ob3N0bmFtZSkgfHwgdGxkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGxkO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVwbGFjZTtcblxuICAgICAgaWYgKCF2KSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Nhbm5vdCBzZXQgVExEIGVtcHR5Jyk7XG4gICAgICB9IGVsc2UgaWYgKHYubWF0Y2goL1teYS16QS1aMC05LV0vKSkge1xuICAgICAgICBpZiAoU0xEICYmIFNMRC5pcyh2KSkge1xuICAgICAgICAgIHJlcGxhY2UgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4KHRoaXMudGxkKCkpICsgJyQnKTtcbiAgICAgICAgICB0aGlzLl9wYXJ0cy5ob3N0bmFtZSA9IHRoaXMuX3BhcnRzLmhvc3RuYW1lLnJlcGxhY2UocmVwbGFjZSwgdik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVExEIFwiJyArIHYgKyAnXCIgY29udGFpbnMgY2hhcmFjdGVycyBvdGhlciB0aGFuIFtBLVowLTldJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3BhcnRzLmhvc3RuYW1lIHx8IHRoaXMuaXMoJ0lQJykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKCdjYW5ub3Qgc2V0IFRMRCBvbiBub24tZG9tYWluIGhvc3QnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcGxhY2UgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4KHRoaXMudGxkKCkpICsgJyQnKTtcbiAgICAgICAgdGhpcy5fcGFydHMuaG9zdG5hbWUgPSB0aGlzLl9wYXJ0cy5ob3N0bmFtZS5yZXBsYWNlKHJlcGxhY2UsIHYpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmJ1aWxkKCFidWlsZCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG4gIHAuZGlyZWN0b3J5ID0gZnVuY3Rpb24odiwgYnVpbGQpIHtcbiAgICBpZiAodGhpcy5fcGFydHMudXJuKSB7XG4gICAgICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkID8gJycgOiB0aGlzO1xuICAgIH1cblxuICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKCF0aGlzLl9wYXJ0cy5wYXRoICYmICF0aGlzLl9wYXJ0cy5ob3N0bmFtZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9wYXJ0cy5wYXRoID09PSAnLycpIHtcbiAgICAgICAgcmV0dXJuICcvJztcbiAgICAgIH1cblxuICAgICAgdmFyIGVuZCA9IHRoaXMuX3BhcnRzLnBhdGgubGVuZ3RoIC0gdGhpcy5maWxlbmFtZSgpLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgcmVzID0gdGhpcy5fcGFydHMucGF0aC5zdWJzdHJpbmcoMCwgZW5kKSB8fCAodGhpcy5fcGFydHMuaG9zdG5hbWUgPyAnLycgOiAnJyk7XG5cbiAgICAgIHJldHVybiB2ID8gVVJJLmRlY29kZVBhdGgocmVzKSA6IHJlcztcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZSA9IHRoaXMuX3BhcnRzLnBhdGgubGVuZ3RoIC0gdGhpcy5maWxlbmFtZSgpLmxlbmd0aDtcbiAgICAgIHZhciBkaXJlY3RvcnkgPSB0aGlzLl9wYXJ0cy5wYXRoLnN1YnN0cmluZygwLCBlKTtcbiAgICAgIHZhciByZXBsYWNlID0gbmV3IFJlZ0V4cCgnXicgKyBlc2NhcGVSZWdFeChkaXJlY3RvcnkpKTtcblxuICAgICAgLy8gZnVsbHkgcXVhbGlmaWVyIGRpcmVjdG9yaWVzIGJlZ2luIHdpdGggYSBzbGFzaFxuICAgICAgaWYgKCF0aGlzLmlzKCdyZWxhdGl2ZScpKSB7XG4gICAgICAgIGlmICghdikge1xuICAgICAgICAgIHYgPSAnLyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodi5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgICAgIHYgPSAnLycgKyB2O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGRpcmVjdG9yaWVzIGFsd2F5cyBlbmQgd2l0aCBhIHNsYXNoXG4gICAgICBpZiAodiAmJiB2LmNoYXJBdCh2Lmxlbmd0aCAtIDEpICE9PSAnLycpIHtcbiAgICAgICAgdiArPSAnLyc7XG4gICAgICB9XG5cbiAgICAgIHYgPSBVUkkucmVjb2RlUGF0aCh2KTtcbiAgICAgIHRoaXMuX3BhcnRzLnBhdGggPSB0aGlzLl9wYXJ0cy5wYXRoLnJlcGxhY2UocmVwbGFjZSwgdik7XG4gICAgICB0aGlzLmJ1aWxkKCFidWlsZCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG4gIHAuZmlsZW5hbWUgPSBmdW5jdGlvbih2LCBidWlsZCkge1xuICAgIGlmICh0aGlzLl9wYXJ0cy51cm4pIHtcbiAgICAgIHJldHVybiB2ID09PSB1bmRlZmluZWQgPyAnJyA6IHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2ICE9PSAnc3RyaW5nJykge1xuICAgICAgaWYgKCF0aGlzLl9wYXJ0cy5wYXRoIHx8IHRoaXMuX3BhcnRzLnBhdGggPT09ICcvJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHZhciBwb3MgPSB0aGlzLl9wYXJ0cy5wYXRoLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgICB2YXIgcmVzID0gdGhpcy5fcGFydHMucGF0aC5zdWJzdHJpbmcocG9zKzEpO1xuXG4gICAgICByZXR1cm4gdiA/IFVSSS5kZWNvZGVQYXRoU2VnbWVudChyZXMpIDogcmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbXV0YXRlZERpcmVjdG9yeSA9IGZhbHNlO1xuXG4gICAgICBpZiAodi5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgICAgICB2ID0gdi5zdWJzdHJpbmcoMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2Lm1hdGNoKC9cXC4/XFwvLykpIHtcbiAgICAgICAgbXV0YXRlZERpcmVjdG9yeSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXBsYWNlID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeCh0aGlzLmZpbGVuYW1lKCkpICsgJyQnKTtcbiAgICAgIHYgPSBVUkkucmVjb2RlUGF0aCh2KTtcbiAgICAgIHRoaXMuX3BhcnRzLnBhdGggPSB0aGlzLl9wYXJ0cy5wYXRoLnJlcGxhY2UocmVwbGFjZSwgdik7XG5cbiAgICAgIGlmIChtdXRhdGVkRGlyZWN0b3J5KSB7XG4gICAgICAgIHRoaXMubm9ybWFsaXplUGF0aChidWlsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJ1aWxkKCFidWlsZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcbiAgcC5zdWZmaXggPSBmdW5jdGlvbih2LCBidWlsZCkge1xuICAgIGlmICh0aGlzLl9wYXJ0cy51cm4pIHtcbiAgICAgIHJldHVybiB2ID09PSB1bmRlZmluZWQgPyAnJyA6IHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHYgPT09IHVuZGVmaW5lZCB8fCB2ID09PSB0cnVlKSB7XG4gICAgICBpZiAoIXRoaXMuX3BhcnRzLnBhdGggfHwgdGhpcy5fcGFydHMucGF0aCA9PT0gJy8nKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgdmFyIGZpbGVuYW1lID0gdGhpcy5maWxlbmFtZSgpO1xuICAgICAgdmFyIHBvcyA9IGZpbGVuYW1lLmxhc3RJbmRleE9mKCcuJyk7XG4gICAgICB2YXIgcywgcmVzO1xuXG4gICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIC8vIHN1ZmZpeCBtYXkgb25seSBjb250YWluIGFsbnVtIGNoYXJhY3RlcnMgKHl1cCwgSSBtYWRlIHRoaXMgdXAuKVxuICAgICAgcyA9IGZpbGVuYW1lLnN1YnN0cmluZyhwb3MrMSk7XG4gICAgICByZXMgPSAoL15bYS16MC05JV0rJC9pKS50ZXN0KHMpID8gcyA6ICcnO1xuICAgICAgcmV0dXJuIHYgPyBVUkkuZGVjb2RlUGF0aFNlZ21lbnQocmVzKSA6IHJlcztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHYuY2hhckF0KDApID09PSAnLicpIHtcbiAgICAgICAgdiA9IHYuc3Vic3RyaW5nKDEpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3VmZml4ID0gdGhpcy5zdWZmaXgoKTtcbiAgICAgIHZhciByZXBsYWNlO1xuXG4gICAgICBpZiAoIXN1ZmZpeCkge1xuICAgICAgICBpZiAoIXYpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3BhcnRzLnBhdGggKz0gJy4nICsgVVJJLnJlY29kZVBhdGgodik7XG4gICAgICB9IGVsc2UgaWYgKCF2KSB7XG4gICAgICAgIHJlcGxhY2UgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4KCcuJyArIHN1ZmZpeCkgKyAnJCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVwbGFjZSA9IG5ldyBSZWdFeHAoZXNjYXBlUmVnRXgoc3VmZml4KSArICckJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXBsYWNlKSB7XG4gICAgICAgIHYgPSBVUkkucmVjb2RlUGF0aCh2KTtcbiAgICAgICAgdGhpcy5fcGFydHMucGF0aCA9IHRoaXMuX3BhcnRzLnBhdGgucmVwbGFjZShyZXBsYWNlLCB2KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5idWlsZCghYnVpbGQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9O1xuICBwLnNlZ21lbnQgPSBmdW5jdGlvbihzZWdtZW50LCB2LCBidWlsZCkge1xuICAgIHZhciBzZXBhcmF0b3IgPSB0aGlzLl9wYXJ0cy51cm4gPyAnOicgOiAnLyc7XG4gICAgdmFyIHBhdGggPSB0aGlzLnBhdGgoKTtcbiAgICB2YXIgYWJzb2x1dGUgPSBwYXRoLnN1YnN0cmluZygwLCAxKSA9PT0gJy8nO1xuICAgIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoc2VwYXJhdG9yKTtcblxuICAgIGlmIChzZWdtZW50ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHNlZ21lbnQgIT09ICdudW1iZXInKSB7XG4gICAgICBidWlsZCA9IHY7XG4gICAgICB2ID0gc2VnbWVudDtcbiAgICAgIHNlZ21lbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHNlZ21lbnQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygc2VnbWVudCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQmFkIHNlZ21lbnQgXCInICsgc2VnbWVudCArICdcIiwgbXVzdCBiZSAwLWJhc2VkIGludGVnZXInKTtcbiAgICB9XG5cbiAgICBpZiAoYWJzb2x1dGUpIHtcbiAgICAgIHNlZ21lbnRzLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgaWYgKHNlZ21lbnQgPCAwKSB7XG4gICAgICAvLyBhbGxvdyBuZWdhdGl2ZSBpbmRleGVzIHRvIGFkZHJlc3MgZnJvbSB0aGUgZW5kXG4gICAgICBzZWdtZW50ID0gTWF0aC5tYXgoc2VnbWVudHMubGVuZ3RoICsgc2VnbWVudCwgMCk7XG4gICAgfVxuXG4gICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLypqc2hpbnQgbGF4YnJlYWs6IHRydWUgKi9cbiAgICAgIHJldHVybiBzZWdtZW50ID09PSB1bmRlZmluZWRcbiAgICAgICAgPyBzZWdtZW50c1xuICAgICAgICA6IHNlZ21lbnRzW3NlZ21lbnRdO1xuICAgICAgLypqc2hpbnQgbGF4YnJlYWs6IGZhbHNlICovXG4gICAgfSBlbHNlIGlmIChzZWdtZW50ID09PSBudWxsIHx8IHNlZ21lbnRzW3NlZ21lbnRdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChpc0FycmF5KHYpKSB7XG4gICAgICAgIHNlZ21lbnRzID0gW107XG4gICAgICAgIC8vIGNvbGxhcHNlIGVtcHR5IGVsZW1lbnRzIHdpdGhpbiBhcnJheVxuICAgICAgICBmb3IgKHZhciBpPTAsIGw9di5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIXZbaV0ubGVuZ3RoICYmICghc2VnbWVudHMubGVuZ3RoIHx8ICFzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLTFdLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggJiYgIXNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtMV0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZWdtZW50cy5wb3AoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWdtZW50cy5wdXNoKHRyaW1TbGFzaGVzKHZbaV0pKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2IHx8IHR5cGVvZiB2ID09PSAnc3RyaW5nJykge1xuICAgICAgICB2ID0gdHJpbVNsYXNoZXModik7XG4gICAgICAgIGlmIChzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLTFdID09PSAnJykge1xuICAgICAgICAgIC8vIGVtcHR5IHRyYWlsaW5nIGVsZW1lbnRzIGhhdmUgdG8gYmUgb3ZlcndyaXR0ZW5cbiAgICAgICAgICAvLyB0byBwcmV2ZW50IHJlc3VsdHMgc3VjaCBhcyAvZm9vLy9iYXJcbiAgICAgICAgICBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLTFdID0gdjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWdtZW50cy5wdXNoKHYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2KSB7XG4gICAgICAgIHNlZ21lbnRzW3NlZ21lbnRdID0gdHJpbVNsYXNoZXModik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWdtZW50cy5zcGxpY2Uoc2VnbWVudCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFic29sdXRlKSB7XG4gICAgICBzZWdtZW50cy51bnNoaWZ0KCcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wYXRoKHNlZ21lbnRzLmpvaW4oc2VwYXJhdG9yKSwgYnVpbGQpO1xuICB9O1xuICBwLnNlZ21lbnRDb2RlZCA9IGZ1bmN0aW9uKHNlZ21lbnQsIHYsIGJ1aWxkKSB7XG4gICAgdmFyIHNlZ21lbnRzLCBpLCBsO1xuXG4gICAgaWYgKHR5cGVvZiBzZWdtZW50ICE9PSAnbnVtYmVyJykge1xuICAgICAgYnVpbGQgPSB2O1xuICAgICAgdiA9IHNlZ21lbnQ7XG4gICAgICBzZWdtZW50ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNlZ21lbnRzID0gdGhpcy5zZWdtZW50KHNlZ21lbnQsIHYsIGJ1aWxkKTtcbiAgICAgIGlmICghaXNBcnJheShzZWdtZW50cykpIHtcbiAgICAgICAgc2VnbWVudHMgPSBzZWdtZW50cyAhPT0gdW5kZWZpbmVkID8gVVJJLmRlY29kZShzZWdtZW50cykgOiB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGkgPSAwLCBsID0gc2VnbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgc2VnbWVudHNbaV0gPSBVUkkuZGVjb2RlKHNlZ21lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VnbWVudHM7XG4gICAgfVxuXG4gICAgaWYgKCFpc0FycmF5KHYpKSB7XG4gICAgICB2ID0gKHR5cGVvZiB2ID09PSAnc3RyaW5nJyB8fCB2IGluc3RhbmNlb2YgU3RyaW5nKSA/IFVSSS5lbmNvZGUodikgOiB2O1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwLCBsID0gdi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdltpXSA9IFVSSS5lbmNvZGUodltpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2VnbWVudChzZWdtZW50LCB2LCBidWlsZCk7XG4gIH07XG5cbiAgLy8gbXV0YXRpbmcgcXVlcnkgc3RyaW5nXG4gIHZhciBxID0gcC5xdWVyeTtcbiAgcC5xdWVyeSA9IGZ1bmN0aW9uKHYsIGJ1aWxkKSB7XG4gICAgaWYgKHYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBVUkkucGFyc2VRdWVyeSh0aGlzLl9wYXJ0cy5xdWVyeSwgdGhpcy5fcGFydHMuZXNjYXBlUXVlcnlTcGFjZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGRhdGEgPSBVUkkucGFyc2VRdWVyeSh0aGlzLl9wYXJ0cy5xdWVyeSwgdGhpcy5fcGFydHMuZXNjYXBlUXVlcnlTcGFjZSk7XG4gICAgICB2YXIgcmVzdWx0ID0gdi5jYWxsKHRoaXMsIGRhdGEpO1xuICAgICAgdGhpcy5fcGFydHMucXVlcnkgPSBVUkkuYnVpbGRRdWVyeShyZXN1bHQgfHwgZGF0YSwgdGhpcy5fcGFydHMuZHVwbGljYXRlUXVlcnlQYXJhbWV0ZXJzLCB0aGlzLl9wYXJ0cy5lc2NhcGVRdWVyeVNwYWNlKTtcbiAgICAgIHRoaXMuYnVpbGQoIWJ1aWxkKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSBpZiAodiAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2ICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5fcGFydHMucXVlcnkgPSBVUkkuYnVpbGRRdWVyeSh2LCB0aGlzLl9wYXJ0cy5kdXBsaWNhdGVRdWVyeVBhcmFtZXRlcnMsIHRoaXMuX3BhcnRzLmVzY2FwZVF1ZXJ5U3BhY2UpO1xuICAgICAgdGhpcy5idWlsZCghYnVpbGQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBxLmNhbGwodGhpcywgdiwgYnVpbGQpO1xuICAgIH1cbiAgfTtcbiAgcC5zZXRRdWVyeSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBidWlsZCkge1xuICAgIHZhciBkYXRhID0gVVJJLnBhcnNlUXVlcnkodGhpcy5fcGFydHMucXVlcnksIHRoaXMuX3BhcnRzLmVzY2FwZVF1ZXJ5U3BhY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJyB8fCBuYW1lIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICBkYXRhW25hbWVdID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogbnVsbDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgZm9yICh2YXIga2V5IGluIG5hbWUpIHtcbiAgICAgICAgaWYgKGhhc093bi5jYWxsKG5hbWUsIGtleSkpIHtcbiAgICAgICAgICBkYXRhW2tleV0gPSBuYW1lW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVVJJLmFkZFF1ZXJ5KCkgYWNjZXB0cyBhbiBvYmplY3QsIHN0cmluZyBhcyB0aGUgbmFtZSBwYXJhbWV0ZXInKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXJ0cy5xdWVyeSA9IFVSSS5idWlsZFF1ZXJ5KGRhdGEsIHRoaXMuX3BhcnRzLmR1cGxpY2F0ZVF1ZXJ5UGFyYW1ldGVycywgdGhpcy5fcGFydHMuZXNjYXBlUXVlcnlTcGFjZSk7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgYnVpbGQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmJ1aWxkKCFidWlsZCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHAuYWRkUXVlcnkgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgYnVpbGQpIHtcbiAgICB2YXIgZGF0YSA9IFVSSS5wYXJzZVF1ZXJ5KHRoaXMuX3BhcnRzLnF1ZXJ5LCB0aGlzLl9wYXJ0cy5lc2NhcGVRdWVyeVNwYWNlKTtcbiAgICBVUkkuYWRkUXVlcnkoZGF0YSwgbmFtZSwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2YWx1ZSk7XG4gICAgdGhpcy5fcGFydHMucXVlcnkgPSBVUkkuYnVpbGRRdWVyeShkYXRhLCB0aGlzLl9wYXJ0cy5kdXBsaWNhdGVRdWVyeVBhcmFtZXRlcnMsIHRoaXMuX3BhcnRzLmVzY2FwZVF1ZXJ5U3BhY2UpO1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGJ1aWxkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5idWlsZCghYnVpbGQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBwLnJlbW92ZVF1ZXJ5ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUsIGJ1aWxkKSB7XG4gICAgdmFyIGRhdGEgPSBVUkkucGFyc2VRdWVyeSh0aGlzLl9wYXJ0cy5xdWVyeSwgdGhpcy5fcGFydHMuZXNjYXBlUXVlcnlTcGFjZSk7XG4gICAgVVJJLnJlbW92ZVF1ZXJ5KGRhdGEsIG5hbWUsIHZhbHVlKTtcbiAgICB0aGlzLl9wYXJ0cy5xdWVyeSA9IFVSSS5idWlsZFF1ZXJ5KGRhdGEsIHRoaXMuX3BhcnRzLmR1cGxpY2F0ZVF1ZXJ5UGFyYW1ldGVycywgdGhpcy5fcGFydHMuZXNjYXBlUXVlcnlTcGFjZSk7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgYnVpbGQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmJ1aWxkKCFidWlsZCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHAuaGFzUXVlcnkgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgd2l0aGluQXJyYXkpIHtcbiAgICB2YXIgZGF0YSA9IFVSSS5wYXJzZVF1ZXJ5KHRoaXMuX3BhcnRzLnF1ZXJ5LCB0aGlzLl9wYXJ0cy5lc2NhcGVRdWVyeVNwYWNlKTtcbiAgICByZXR1cm4gVVJJLmhhc1F1ZXJ5KGRhdGEsIG5hbWUsIHZhbHVlLCB3aXRoaW5BcnJheSk7XG4gIH07XG4gIHAuc2V0U2VhcmNoID0gcC5zZXRRdWVyeTtcbiAgcC5hZGRTZWFyY2ggPSBwLmFkZFF1ZXJ5O1xuICBwLnJlbW92ZVNlYXJjaCA9IHAucmVtb3ZlUXVlcnk7XG4gIHAuaGFzU2VhcmNoID0gcC5oYXNRdWVyeTtcblxuICAvLyBzYW5pdGl6aW5nIFVSTHNcbiAgcC5ub3JtYWxpemUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcGFydHMudXJuKSB7XG4gICAgICByZXR1cm4gdGhpc1xuICAgICAgICAubm9ybWFsaXplUHJvdG9jb2woZmFsc2UpXG4gICAgICAgIC5ub3JtYWxpemVQYXRoKGZhbHNlKVxuICAgICAgICAubm9ybWFsaXplUXVlcnkoZmFsc2UpXG4gICAgICAgIC5ub3JtYWxpemVGcmFnbWVudChmYWxzZSlcbiAgICAgICAgLmJ1aWxkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgICAgIC5ub3JtYWxpemVQcm90b2NvbChmYWxzZSlcbiAgICAgIC5ub3JtYWxpemVIb3N0bmFtZShmYWxzZSlcbiAgICAgIC5ub3JtYWxpemVQb3J0KGZhbHNlKVxuICAgICAgLm5vcm1hbGl6ZVBhdGgoZmFsc2UpXG4gICAgICAubm9ybWFsaXplUXVlcnkoZmFsc2UpXG4gICAgICAubm9ybWFsaXplRnJhZ21lbnQoZmFsc2UpXG4gICAgICAuYnVpbGQoKTtcbiAgfTtcbiAgcC5ub3JtYWxpemVQcm90b2NvbCA9IGZ1bmN0aW9uKGJ1aWxkKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9wYXJ0cy5wcm90b2NvbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX3BhcnRzLnByb3RvY29sID0gdGhpcy5fcGFydHMucHJvdG9jb2wudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMuYnVpbGQoIWJ1aWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcC5ub3JtYWxpemVIb3N0bmFtZSA9IGZ1bmN0aW9uKGJ1aWxkKSB7XG4gICAgaWYgKHRoaXMuX3BhcnRzLmhvc3RuYW1lKSB7XG4gICAgICBpZiAodGhpcy5pcygnSUROJykgJiYgcHVueWNvZGUpIHtcbiAgICAgICAgdGhpcy5fcGFydHMuaG9zdG5hbWUgPSBwdW55Y29kZS50b0FTQ0lJKHRoaXMuX3BhcnRzLmhvc3RuYW1lKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pcygnSVB2NicpICYmIElQdjYpIHtcbiAgICAgICAgdGhpcy5fcGFydHMuaG9zdG5hbWUgPSBJUHY2LmJlc3QodGhpcy5fcGFydHMuaG9zdG5hbWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9wYXJ0cy5ob3N0bmFtZSA9IHRoaXMuX3BhcnRzLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICB0aGlzLmJ1aWxkKCFidWlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHAubm9ybWFsaXplUG9ydCA9IGZ1bmN0aW9uKGJ1aWxkKSB7XG4gICAgLy8gcmVtb3ZlIHBvcnQgb2YgaXQncyB0aGUgcHJvdG9jb2wncyBkZWZhdWx0XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9wYXJ0cy5wcm90b2NvbCA9PT0gJ3N0cmluZycgJiYgdGhpcy5fcGFydHMucG9ydCA9PT0gVVJJLmRlZmF1bHRQb3J0c1t0aGlzLl9wYXJ0cy5wcm90b2NvbF0pIHtcbiAgICAgIHRoaXMuX3BhcnRzLnBvcnQgPSBudWxsO1xuICAgICAgdGhpcy5idWlsZCghYnVpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBwLm5vcm1hbGl6ZVBhdGggPSBmdW5jdGlvbihidWlsZCkge1xuICAgIHZhciBfcGF0aCA9IHRoaXMuX3BhcnRzLnBhdGg7XG4gICAgaWYgKCFfcGF0aCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BhcnRzLnVybikge1xuICAgICAgdGhpcy5fcGFydHMucGF0aCA9IFVSSS5yZWNvZGVVcm5QYXRoKHRoaXMuX3BhcnRzLnBhdGgpO1xuICAgICAgdGhpcy5idWlsZCghYnVpbGQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BhcnRzLnBhdGggPT09ICcvJykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX3BhdGggPSBVUkkucmVjb2RlUGF0aChfcGF0aCk7XG5cbiAgICB2YXIgX3dhc19yZWxhdGl2ZTtcbiAgICB2YXIgX2xlYWRpbmdQYXJlbnRzID0gJyc7XG4gICAgdmFyIF9wYXJlbnQsIF9wb3M7XG5cbiAgICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHNcbiAgICBpZiAoX3BhdGguY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgIF93YXNfcmVsYXRpdmUgPSB0cnVlO1xuICAgICAgX3BhdGggPSAnLycgKyBfcGF0aDtcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVsYXRpdmUgZmlsZXMgKGFzIG9wcG9zZWQgdG8gZGlyZWN0b3JpZXMpXG4gICAgaWYgKF9wYXRoLnNsaWNlKC0zKSA9PT0gJy8uLicgfHwgX3BhdGguc2xpY2UoLTIpID09PSAnLy4nKSB7XG4gICAgICBfcGF0aCArPSAnLyc7XG4gICAgfVxuXG4gICAgLy8gcmVzb2x2ZSBzaW1wbGVzXG4gICAgX3BhdGggPSBfcGF0aFxuICAgICAgLnJlcGxhY2UoLyhcXC8oXFwuXFwvKSspfChcXC9cXC4kKS9nLCAnLycpXG4gICAgICAucmVwbGFjZSgvXFwvezIsfS9nLCAnLycpO1xuXG4gICAgLy8gcmVtZW1iZXIgbGVhZGluZyBwYXJlbnRzXG4gICAgaWYgKF93YXNfcmVsYXRpdmUpIHtcbiAgICAgIF9sZWFkaW5nUGFyZW50cyA9IF9wYXRoLnN1YnN0cmluZygxKS5tYXRjaCgvXihcXC5cXC5cXC8pKy8pIHx8ICcnO1xuICAgICAgaWYgKF9sZWFkaW5nUGFyZW50cykge1xuICAgICAgICBfbGVhZGluZ1BhcmVudHMgPSBfbGVhZGluZ1BhcmVudHNbMF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzb2x2ZSBwYXJlbnRzXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIF9wYXJlbnQgPSBfcGF0aC5zZWFyY2goL1xcL1xcLlxcLihcXC98JCkvKTtcbiAgICAgIGlmIChfcGFyZW50ID09PSAtMSkge1xuICAgICAgICAvLyBubyBtb3JlIC4uLyB0byByZXNvbHZlXG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmIChfcGFyZW50ID09PSAwKSB7XG4gICAgICAgIC8vIHRvcCBsZXZlbCBjYW5ub3QgYmUgcmVsYXRpdmUsIHNraXAgaXRcbiAgICAgICAgX3BhdGggPSBfcGF0aC5zdWJzdHJpbmcoMyk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBfcG9zID0gX3BhdGguc3Vic3RyaW5nKDAsIF9wYXJlbnQpLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgICBpZiAoX3BvcyA9PT0gLTEpIHtcbiAgICAgICAgX3BvcyA9IF9wYXJlbnQ7XG4gICAgICB9XG4gICAgICBfcGF0aCA9IF9wYXRoLnN1YnN0cmluZygwLCBfcG9zKSArIF9wYXRoLnN1YnN0cmluZyhfcGFyZW50ICsgMyk7XG4gICAgfVxuXG4gICAgLy8gcmV2ZXJ0IHRvIHJlbGF0aXZlXG4gICAgaWYgKF93YXNfcmVsYXRpdmUgJiYgdGhpcy5pcygncmVsYXRpdmUnKSkge1xuICAgICAgX3BhdGggPSBfbGVhZGluZ1BhcmVudHMgKyBfcGF0aC5zdWJzdHJpbmcoMSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGFydHMucGF0aCA9IF9wYXRoO1xuICAgIHRoaXMuYnVpbGQoIWJ1aWxkKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcC5ub3JtYWxpemVQYXRobmFtZSA9IHAubm9ybWFsaXplUGF0aDtcbiAgcC5ub3JtYWxpemVRdWVyeSA9IGZ1bmN0aW9uKGJ1aWxkKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9wYXJ0cy5xdWVyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICghdGhpcy5fcGFydHMucXVlcnkubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3BhcnRzLnF1ZXJ5ID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucXVlcnkoVVJJLnBhcnNlUXVlcnkodGhpcy5fcGFydHMucXVlcnksIHRoaXMuX3BhcnRzLmVzY2FwZVF1ZXJ5U3BhY2UpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5idWlsZCghYnVpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBwLm5vcm1hbGl6ZUZyYWdtZW50ID0gZnVuY3Rpb24oYnVpbGQpIHtcbiAgICBpZiAoIXRoaXMuX3BhcnRzLmZyYWdtZW50KSB7XG4gICAgICB0aGlzLl9wYXJ0cy5mcmFnbWVudCA9IG51bGw7XG4gICAgICB0aGlzLmJ1aWxkKCFidWlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHAubm9ybWFsaXplU2VhcmNoID0gcC5ub3JtYWxpemVRdWVyeTtcbiAgcC5ub3JtYWxpemVIYXNoID0gcC5ub3JtYWxpemVGcmFnbWVudDtcblxuICBwLmlzbzg4NTkgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBleHBlY3QgdW5pY29kZSBpbnB1dCwgaXNvODg1OSBvdXRwdXRcbiAgICB2YXIgZSA9IFVSSS5lbmNvZGU7XG4gICAgdmFyIGQgPSBVUkkuZGVjb2RlO1xuXG4gICAgVVJJLmVuY29kZSA9IGVzY2FwZTtcbiAgICBVUkkuZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50O1xuICAgIHRyeSB7XG4gICAgICB0aGlzLm5vcm1hbGl6ZSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBVUkkuZW5jb2RlID0gZTtcbiAgICAgIFVSSS5kZWNvZGUgPSBkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBwLnVuaWNvZGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBleHBlY3QgaXNvODg1OSBpbnB1dCwgdW5pY29kZSBvdXRwdXRcbiAgICB2YXIgZSA9IFVSSS5lbmNvZGU7XG4gICAgdmFyIGQgPSBVUkkuZGVjb2RlO1xuXG4gICAgVVJJLmVuY29kZSA9IHN0cmljdEVuY29kZVVSSUNvbXBvbmVudDtcbiAgICBVUkkuZGVjb2RlID0gdW5lc2NhcGU7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMubm9ybWFsaXplKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFVSSS5lbmNvZGUgPSBlO1xuICAgICAgVVJJLmRlY29kZSA9IGQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHAucmVhZGFibGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdXJpID0gdGhpcy5jbG9uZSgpO1xuICAgIC8vIHJlbW92aW5nIHVzZXJuYW1lLCBwYXNzd29yZCwgYmVjYXVzZSB0aGV5IHNob3VsZG4ndCBiZSBkaXNwbGF5ZWQgYWNjb3JkaW5nIHRvIFJGQyAzOTg2XG4gICAgdXJpLnVzZXJuYW1lKCcnKS5wYXNzd29yZCgnJykubm9ybWFsaXplKCk7XG4gICAgdmFyIHQgPSAnJztcbiAgICBpZiAodXJpLl9wYXJ0cy5wcm90b2NvbCkge1xuICAgICAgdCArPSB1cmkuX3BhcnRzLnByb3RvY29sICsgJzovLyc7XG4gICAgfVxuXG4gICAgaWYgKHVyaS5fcGFydHMuaG9zdG5hbWUpIHtcbiAgICAgIGlmICh1cmkuaXMoJ3B1bnljb2RlJykgJiYgcHVueWNvZGUpIHtcbiAgICAgICAgdCArPSBwdW55Y29kZS50b1VuaWNvZGUodXJpLl9wYXJ0cy5ob3N0bmFtZSk7XG4gICAgICAgIGlmICh1cmkuX3BhcnRzLnBvcnQpIHtcbiAgICAgICAgICB0ICs9ICc6JyArIHVyaS5fcGFydHMucG9ydDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdCArPSB1cmkuaG9zdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1cmkuX3BhcnRzLmhvc3RuYW1lICYmIHVyaS5fcGFydHMucGF0aCAmJiB1cmkuX3BhcnRzLnBhdGguY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgIHQgKz0gJy8nO1xuICAgIH1cblxuICAgIHQgKz0gdXJpLnBhdGgodHJ1ZSk7XG4gICAgaWYgKHVyaS5fcGFydHMucXVlcnkpIHtcbiAgICAgIHZhciBxID0gJyc7XG4gICAgICBmb3IgKHZhciBpID0gMCwgcXAgPSB1cmkuX3BhcnRzLnF1ZXJ5LnNwbGl0KCcmJyksIGwgPSBxcC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGt2ID0gKHFwW2ldIHx8ICcnKS5zcGxpdCgnPScpO1xuICAgICAgICBxICs9ICcmJyArIFVSSS5kZWNvZGVRdWVyeShrdlswXSwgdGhpcy5fcGFydHMuZXNjYXBlUXVlcnlTcGFjZSlcbiAgICAgICAgICAucmVwbGFjZSgvJi9nLCAnJTI2Jyk7XG5cbiAgICAgICAgaWYgKGt2WzFdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBxICs9ICc9JyArIFVSSS5kZWNvZGVRdWVyeShrdlsxXSwgdGhpcy5fcGFydHMuZXNjYXBlUXVlcnlTcGFjZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC8mL2csICclMjYnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdCArPSAnPycgKyBxLnN1YnN0cmluZygxKTtcbiAgICB9XG5cbiAgICB0ICs9IFVSSS5kZWNvZGVRdWVyeSh1cmkuaGFzaCgpLCB0cnVlKTtcbiAgICByZXR1cm4gdDtcbiAgfTtcblxuICAvLyByZXNvbHZpbmcgcmVsYXRpdmUgYW5kIGFic29sdXRlIFVSTHNcbiAgcC5hYnNvbHV0ZVRvID0gZnVuY3Rpb24oYmFzZSkge1xuICAgIHZhciByZXNvbHZlZCA9IHRoaXMuY2xvbmUoKTtcbiAgICB2YXIgcHJvcGVydGllcyA9IFsncHJvdG9jb2wnLCAndXNlcm5hbWUnLCAncGFzc3dvcmQnLCAnaG9zdG5hbWUnLCAncG9ydCddO1xuICAgIHZhciBiYXNlZGlyLCBpLCBwO1xuXG4gICAgaWYgKHRoaXMuX3BhcnRzLnVybikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVUk5zIGRvIG5vdCBoYXZlIGFueSBnZW5lcmFsbHkgZGVmaW5lZCBoaWVyYXJjaGljYWwgY29tcG9uZW50cycpO1xuICAgIH1cblxuICAgIGlmICghKGJhc2UgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAgICBiYXNlID0gbmV3IFVSSShiYXNlKTtcbiAgICB9XG5cbiAgICBpZiAocmVzb2x2ZWQuX3BhcnRzLnByb3RvY29sKSB7XG4gICAgICAvLyBEaXJlY3RseSByZXR1cm5zIGV2ZW4gaWYgdGhpcy5fcGFydHMuaG9zdG5hbWUgaXMgZW1wdHkuXG4gICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmVkLl9wYXJ0cy5wcm90b2NvbCA9IGJhc2UuX3BhcnRzLnByb3RvY29sO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXJ0cy5ob3N0bmFtZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IChwID0gcHJvcGVydGllc1tpXSk7IGkrKykge1xuICAgICAgcmVzb2x2ZWQuX3BhcnRzW3BdID0gYmFzZS5fcGFydHNbcF07XG4gICAgfVxuXG4gICAgaWYgKCFyZXNvbHZlZC5fcGFydHMucGF0aCkge1xuICAgICAgcmVzb2x2ZWQuX3BhcnRzLnBhdGggPSBiYXNlLl9wYXJ0cy5wYXRoO1xuICAgICAgaWYgKCFyZXNvbHZlZC5fcGFydHMucXVlcnkpIHtcbiAgICAgICAgcmVzb2x2ZWQuX3BhcnRzLnF1ZXJ5ID0gYmFzZS5fcGFydHMucXVlcnk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZXNvbHZlZC5fcGFydHMucGF0aC5zdWJzdHJpbmcoLTIpID09PSAnLi4nKSB7XG4gICAgICAgIHJlc29sdmVkLl9wYXJ0cy5wYXRoICs9ICcvJztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc29sdmVkLnBhdGgoKS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgICBiYXNlZGlyID0gYmFzZS5kaXJlY3RvcnkoKTtcbiAgICAgICAgYmFzZWRpciA9IGJhc2VkaXIgPyBiYXNlZGlyIDogYmFzZS5wYXRoKCkuaW5kZXhPZignLycpID09PSAwID8gJy8nIDogJyc7XG4gICAgICAgIHJlc29sdmVkLl9wYXJ0cy5wYXRoID0gKGJhc2VkaXIgPyAoYmFzZWRpciArICcvJykgOiAnJykgKyByZXNvbHZlZC5fcGFydHMucGF0aDtcbiAgICAgICAgcmVzb2x2ZWQubm9ybWFsaXplUGF0aCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc29sdmVkLmJ1aWxkKCk7XG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9O1xuICBwLnJlbGF0aXZlVG8gPSBmdW5jdGlvbihiYXNlKSB7XG4gICAgdmFyIHJlbGF0aXZlID0gdGhpcy5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xuICAgIHZhciByZWxhdGl2ZVBhcnRzLCBiYXNlUGFydHMsIGNvbW1vbiwgcmVsYXRpdmVQYXRoLCBiYXNlUGF0aDtcblxuICAgIGlmIChyZWxhdGl2ZS5fcGFydHMudXJuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VSTnMgZG8gbm90IGhhdmUgYW55IGdlbmVyYWxseSBkZWZpbmVkIGhpZXJhcmNoaWNhbCBjb21wb25lbnRzJyk7XG4gICAgfVxuXG4gICAgYmFzZSA9IG5ldyBVUkkoYmFzZSkubm9ybWFsaXplKCk7XG4gICAgcmVsYXRpdmVQYXJ0cyA9IHJlbGF0aXZlLl9wYXJ0cztcbiAgICBiYXNlUGFydHMgPSBiYXNlLl9wYXJ0cztcbiAgICByZWxhdGl2ZVBhdGggPSByZWxhdGl2ZS5wYXRoKCk7XG4gICAgYmFzZVBhdGggPSBiYXNlLnBhdGgoKTtcblxuICAgIGlmIChyZWxhdGl2ZVBhdGguY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVVJJIGlzIGFscmVhZHkgcmVsYXRpdmUnKTtcbiAgICB9XG5cbiAgICBpZiAoYmFzZVBhdGguY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNhbGN1bGF0ZSBhIFVSSSByZWxhdGl2ZSB0byBhbm90aGVyIHJlbGF0aXZlIFVSSScpO1xuICAgIH1cblxuICAgIGlmIChyZWxhdGl2ZVBhcnRzLnByb3RvY29sID09PSBiYXNlUGFydHMucHJvdG9jb2wpIHtcbiAgICAgIHJlbGF0aXZlUGFydHMucHJvdG9jb2wgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChyZWxhdGl2ZVBhcnRzLnVzZXJuYW1lICE9PSBiYXNlUGFydHMudXNlcm5hbWUgfHwgcmVsYXRpdmVQYXJ0cy5wYXNzd29yZCAhPT0gYmFzZVBhcnRzLnBhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gcmVsYXRpdmUuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBpZiAocmVsYXRpdmVQYXJ0cy5wcm90b2NvbCAhPT0gbnVsbCB8fCByZWxhdGl2ZVBhcnRzLnVzZXJuYW1lICE9PSBudWxsIHx8IHJlbGF0aXZlUGFydHMucGFzc3dvcmQgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiByZWxhdGl2ZS5idWlsZCgpO1xuICAgIH1cblxuICAgIGlmIChyZWxhdGl2ZVBhcnRzLmhvc3RuYW1lID09PSBiYXNlUGFydHMuaG9zdG5hbWUgJiYgcmVsYXRpdmVQYXJ0cy5wb3J0ID09PSBiYXNlUGFydHMucG9ydCkge1xuICAgICAgcmVsYXRpdmVQYXJ0cy5ob3N0bmFtZSA9IG51bGw7XG4gICAgICByZWxhdGl2ZVBhcnRzLnBvcnQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVsYXRpdmUuYnVpbGQoKTtcbiAgICB9XG5cbiAgICBpZiAocmVsYXRpdmVQYXRoID09PSBiYXNlUGF0aCkge1xuICAgICAgcmVsYXRpdmVQYXJ0cy5wYXRoID0gJyc7XG4gICAgICByZXR1cm4gcmVsYXRpdmUuYnVpbGQoKTtcbiAgICB9XG5cbiAgICAvLyBkZXRlcm1pbmUgY29tbW9uIHN1YiBwYXRoXG4gICAgY29tbW9uID0gVVJJLmNvbW1vblBhdGgocmVsYXRpdmVQYXRoLCBiYXNlUGF0aCk7XG5cbiAgICAvLyBJZiB0aGUgcGF0aHMgaGF2ZSBub3RoaW5nIGluIGNvbW1vbiwgcmV0dXJuIGEgcmVsYXRpdmUgVVJMIHdpdGggdGhlIGFic29sdXRlIHBhdGguXG4gICAgaWYgKCFjb21tb24pIHtcbiAgICAgIHJldHVybiByZWxhdGl2ZS5idWlsZCgpO1xuICAgIH1cblxuICAgIHZhciBwYXJlbnRzID0gYmFzZVBhcnRzLnBhdGhcbiAgICAgIC5zdWJzdHJpbmcoY29tbW9uLmxlbmd0aClcbiAgICAgIC5yZXBsYWNlKC9bXlxcL10qJC8sICcnKVxuICAgICAgLnJlcGxhY2UoLy4qP1xcLy9nLCAnLi4vJyk7XG5cbiAgICByZWxhdGl2ZVBhcnRzLnBhdGggPSAocGFyZW50cyArIHJlbGF0aXZlUGFydHMucGF0aC5zdWJzdHJpbmcoY29tbW9uLmxlbmd0aCkpIHx8ICcuLyc7XG5cbiAgICByZXR1cm4gcmVsYXRpdmUuYnVpbGQoKTtcbiAgfTtcblxuICAvLyBjb21wYXJpbmcgVVJJc1xuICBwLmVxdWFscyA9IGZ1bmN0aW9uKHVyaSkge1xuICAgIHZhciBvbmUgPSB0aGlzLmNsb25lKCk7XG4gICAgdmFyIHR3byA9IG5ldyBVUkkodXJpKTtcbiAgICB2YXIgb25lX21hcCA9IHt9O1xuICAgIHZhciB0d29fbWFwID0ge307XG4gICAgdmFyIGNoZWNrZWQgPSB7fTtcbiAgICB2YXIgb25lX3F1ZXJ5LCB0d29fcXVlcnksIGtleTtcblxuICAgIG9uZS5ub3JtYWxpemUoKTtcbiAgICB0d28ubm9ybWFsaXplKCk7XG5cbiAgICAvLyBleGFjdCBtYXRjaFxuICAgIGlmIChvbmUudG9TdHJpbmcoKSA9PT0gdHdvLnRvU3RyaW5nKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGV4dHJhY3QgcXVlcnkgc3RyaW5nXG4gICAgb25lX3F1ZXJ5ID0gb25lLnF1ZXJ5KCk7XG4gICAgdHdvX3F1ZXJ5ID0gdHdvLnF1ZXJ5KCk7XG4gICAgb25lLnF1ZXJ5KCcnKTtcbiAgICB0d28ucXVlcnkoJycpO1xuXG4gICAgLy8gZGVmaW5pdGVseSBub3QgZXF1YWwgaWYgbm90IGV2ZW4gbm9uLXF1ZXJ5IHBhcnRzIG1hdGNoXG4gICAgaWYgKG9uZS50b1N0cmluZygpICE9PSB0d28udG9TdHJpbmcoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHF1ZXJ5IHBhcmFtZXRlcnMgaGF2ZSB0aGUgc2FtZSBsZW5ndGgsIGV2ZW4gaWYgdGhleSdyZSBwZXJtdXRlZFxuICAgIGlmIChvbmVfcXVlcnkubGVuZ3RoICE9PSB0d29fcXVlcnkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25lX21hcCA9IFVSSS5wYXJzZVF1ZXJ5KG9uZV9xdWVyeSwgdGhpcy5fcGFydHMuZXNjYXBlUXVlcnlTcGFjZSk7XG4gICAgdHdvX21hcCA9IFVSSS5wYXJzZVF1ZXJ5KHR3b19xdWVyeSwgdGhpcy5fcGFydHMuZXNjYXBlUXVlcnlTcGFjZSk7XG5cbiAgICBmb3IgKGtleSBpbiBvbmVfbWFwKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwob25lX21hcCwga2V5KSkge1xuICAgICAgICBpZiAoIWlzQXJyYXkob25lX21hcFtrZXldKSkge1xuICAgICAgICAgIGlmIChvbmVfbWFwW2tleV0gIT09IHR3b19tYXBba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghYXJyYXlzRXF1YWwob25lX21hcFtrZXldLCB0d29fbWFwW2tleV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tlZFtrZXldID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGtleSBpbiB0d29fbWFwKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwodHdvX21hcCwga2V5KSkge1xuICAgICAgICBpZiAoIWNoZWNrZWRba2V5XSkge1xuICAgICAgICAgIC8vIHR3byBjb250YWlucyBhIHBhcmFtZXRlciBub3QgcHJlc2VudCBpbiBvbmVcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvLyBzdGF0ZVxuICBwLnByZXZlbnRJbnZhbGlkSG9zdG5hbWUgPSBmdW5jdGlvbih2KSB7XG4gICAgdGhpcy5fcGFydHMucHJldmVudEludmFsaWRIb3N0bmFtZSA9ICEhdjtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBwLmR1cGxpY2F0ZVF1ZXJ5UGFyYW1ldGVycyA9IGZ1bmN0aW9uKHYpIHtcbiAgICB0aGlzLl9wYXJ0cy5kdXBsaWNhdGVRdWVyeVBhcmFtZXRlcnMgPSAhIXY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcC5lc2NhcGVRdWVyeVNwYWNlID0gZnVuY3Rpb24odikge1xuICAgIHRoaXMuX3BhcnRzLmVzY2FwZVF1ZXJ5U3BhY2UgPSAhIXY7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFVSSTtcbn0pKTtcbiIsIi8qISBodHRwczovL210aHMuYmUvcHVueWNvZGUgdjEuNC4wIGJ5IEBtYXRoaWFzICovXG47KGZ1bmN0aW9uKHJvb3QpIHtcblxuXHQvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGVzICovXG5cdHZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiZcblx0XHQhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXHR2YXIgZnJlZU1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmXG5cdFx0IW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cdHZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWw7XG5cdGlmIChcblx0XHRmcmVlR2xvYmFsLmdsb2JhbCA9PT0gZnJlZUdsb2JhbCB8fFxuXHRcdGZyZWVHbG9iYWwud2luZG93ID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0ZnJlZUdsb2JhbC5zZWxmID09PSBmcmVlR2xvYmFsXG5cdCkge1xuXHRcdHJvb3QgPSBmcmVlR2xvYmFsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBgcHVueWNvZGVgIG9iamVjdC5cblx0ICogQG5hbWUgcHVueWNvZGVcblx0ICogQHR5cGUgT2JqZWN0XG5cdCAqL1xuXHR2YXIgcHVueWNvZGUsXG5cblx0LyoqIEhpZ2hlc3QgcG9zaXRpdmUgc2lnbmVkIDMyLWJpdCBmbG9hdCB2YWx1ZSAqL1xuXHRtYXhJbnQgPSAyMTQ3NDgzNjQ3LCAvLyBha2EuIDB4N0ZGRkZGRkYgb3IgMl4zMS0xXG5cblx0LyoqIEJvb3RzdHJpbmcgcGFyYW1ldGVycyAqL1xuXHRiYXNlID0gMzYsXG5cdHRNaW4gPSAxLFxuXHR0TWF4ID0gMjYsXG5cdHNrZXcgPSAzOCxcblx0ZGFtcCA9IDcwMCxcblx0aW5pdGlhbEJpYXMgPSA3Mixcblx0aW5pdGlhbE4gPSAxMjgsIC8vIDB4ODBcblx0ZGVsaW1pdGVyID0gJy0nLCAvLyAnXFx4MkQnXG5cblx0LyoqIFJlZ3VsYXIgZXhwcmVzc2lvbnMgKi9cblx0cmVnZXhQdW55Y29kZSA9IC9eeG4tLS8sXG5cdHJlZ2V4Tm9uQVNDSUkgPSAvW15cXHgyMC1cXHg3RV0vLCAvLyB1bnByaW50YWJsZSBBU0NJSSBjaGFycyArIG5vbi1BU0NJSSBjaGFyc1xuXHRyZWdleFNlcGFyYXRvcnMgPSAvW1xceDJFXFx1MzAwMlxcdUZGMEVcXHVGRjYxXS9nLCAvLyBSRkMgMzQ5MCBzZXBhcmF0b3JzXG5cblx0LyoqIEVycm9yIG1lc3NhZ2VzICovXG5cdGVycm9ycyA9IHtcblx0XHQnb3ZlcmZsb3cnOiAnT3ZlcmZsb3c6IGlucHV0IG5lZWRzIHdpZGVyIGludGVnZXJzIHRvIHByb2Nlc3MnLFxuXHRcdCdub3QtYmFzaWMnOiAnSWxsZWdhbCBpbnB1dCA+PSAweDgwIChub3QgYSBiYXNpYyBjb2RlIHBvaW50KScsXG5cdFx0J2ludmFsaWQtaW5wdXQnOiAnSW52YWxpZCBpbnB1dCdcblx0fSxcblxuXHQvKiogQ29udmVuaWVuY2Ugc2hvcnRjdXRzICovXG5cdGJhc2VNaW51c1RNaW4gPSBiYXNlIC0gdE1pbixcblx0Zmxvb3IgPSBNYXRoLmZsb29yLFxuXHRzdHJpbmdGcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLFxuXG5cdC8qKiBUZW1wb3JhcnkgdmFyaWFibGUgKi9cblx0a2V5O1xuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdC8qKlxuXHQgKiBBIGdlbmVyaWMgZXJyb3IgdXRpbGl0eSBmdW5jdGlvbi5cblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgVGhlIGVycm9yIHR5cGUuXG5cdCAqIEByZXR1cm5zIHtFcnJvcn0gVGhyb3dzIGEgYFJhbmdlRXJyb3JgIHdpdGggdGhlIGFwcGxpY2FibGUgZXJyb3IgbWVzc2FnZS5cblx0ICovXG5cdGZ1bmN0aW9uIGVycm9yKHR5cGUpIHtcblx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcihlcnJvcnNbdHlwZV0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBgQXJyYXkjbWFwYCB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnkgYXJyYXlcblx0ICogaXRlbS5cblx0ICogQHJldHVybnMge0FycmF5fSBBIG5ldyBhcnJheSBvZiB2YWx1ZXMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwKGFycmF5LCBmbikge1xuXHRcdHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXHRcdHdoaWxlIChsZW5ndGgtLSkge1xuXHRcdFx0cmVzdWx0W2xlbmd0aF0gPSBmbihhcnJheVtsZW5ndGhdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIHNpbXBsZSBgQXJyYXkjbWFwYC1saWtlIHdyYXBwZXIgdG8gd29yayB3aXRoIGRvbWFpbiBuYW1lIHN0cmluZ3Mgb3IgZW1haWxcblx0ICogYWRkcmVzc2VzLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZG9tYWluIFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCBmb3IgZXZlcnlcblx0ICogY2hhcmFjdGVyLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IHN0cmluZyBvZiBjaGFyYWN0ZXJzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFja1xuXHQgKiBmdW5jdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIG1hcERvbWFpbihzdHJpbmcsIGZuKSB7XG5cdFx0dmFyIHBhcnRzID0gc3RyaW5nLnNwbGl0KCdAJyk7XG5cdFx0dmFyIHJlc3VsdCA9ICcnO1xuXHRcdGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG5cdFx0XHQvLyBJbiBlbWFpbCBhZGRyZXNzZXMsIG9ubHkgdGhlIGRvbWFpbiBuYW1lIHNob3VsZCBiZSBwdW55Y29kZWQuIExlYXZlXG5cdFx0XHQvLyB0aGUgbG9jYWwgcGFydCAoaS5lLiBldmVyeXRoaW5nIHVwIHRvIGBAYCkgaW50YWN0LlxuXHRcdFx0cmVzdWx0ID0gcGFydHNbMF0gKyAnQCc7XG5cdFx0XHRzdHJpbmcgPSBwYXJ0c1sxXTtcblx0XHR9XG5cdFx0Ly8gQXZvaWQgYHNwbGl0KHJlZ2V4KWAgZm9yIElFOCBjb21wYXRpYmlsaXR5LiBTZWUgIzE3LlxuXHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJlZ2V4U2VwYXJhdG9ycywgJ1xceDJFJyk7XG5cdFx0dmFyIGxhYmVscyA9IHN0cmluZy5zcGxpdCgnLicpO1xuXHRcdHZhciBlbmNvZGVkID0gbWFwKGxhYmVscywgZm4pLmpvaW4oJy4nKTtcblx0XHRyZXR1cm4gcmVzdWx0ICsgZW5jb2RlZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIG51bWVyaWMgY29kZSBwb2ludHMgb2YgZWFjaCBVbmljb2RlXG5cdCAqIGNoYXJhY3RlciBpbiB0aGUgc3RyaW5nLiBXaGlsZSBKYXZhU2NyaXB0IHVzZXMgVUNTLTIgaW50ZXJuYWxseSxcblx0ICogdGhpcyBmdW5jdGlvbiB3aWxsIGNvbnZlcnQgYSBwYWlyIG9mIHN1cnJvZ2F0ZSBoYWx2ZXMgKGVhY2ggb2Ygd2hpY2hcblx0ICogVUNTLTIgZXhwb3NlcyBhcyBzZXBhcmF0ZSBjaGFyYWN0ZXJzKSBpbnRvIGEgc2luZ2xlIGNvZGUgcG9pbnQsXG5cdCAqIG1hdGNoaW5nIFVURi0xNi5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5lbmNvZGVgXG5cdCAqIEBzZWUgPGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nPlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGUudWNzMlxuXHQgKiBAbmFtZSBkZWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgVW5pY29kZSBpbnB1dCBzdHJpbmcgKFVDUy0yKS5cblx0ICogQHJldHVybnMge0FycmF5fSBUaGUgbmV3IGFycmF5IG9mIGNvZGUgcG9pbnRzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdWNzMmRlY29kZShzdHJpbmcpIHtcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGNvdW50ZXIgPSAwLFxuXHRcdCAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuXHRcdCAgICB2YWx1ZSxcblx0XHQgICAgZXh0cmE7XG5cdFx0d2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdFx0Ly8gaGlnaCBzdXJyb2dhdGUsIGFuZCB0aGVyZSBpcyBhIG5leHQgY2hhcmFjdGVyXG5cdFx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdFx0aWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7IC8vIGxvdyBzdXJyb2dhdGVcblx0XHRcdFx0XHRvdXRwdXQucHVzaCgoKHZhbHVlICYgMHgzRkYpIDw8IDEwKSArIChleHRyYSAmIDB4M0ZGKSArIDB4MTAwMDApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIHVubWF0Y2hlZCBzdXJyb2dhdGU7IG9ubHkgYXBwZW5kIHRoaXMgY29kZSB1bml0LCBpbiBjYXNlIHRoZSBuZXh0XG5cdFx0XHRcdFx0Ly8gY29kZSB1bml0IGlzIHRoZSBoaWdoIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzdHJpbmcgYmFzZWQgb24gYW4gYXJyYXkgb2YgbnVtZXJpYyBjb2RlIHBvaW50cy5cblx0ICogQHNlZSBgcHVueWNvZGUudWNzMi5kZWNvZGVgXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGVuY29kZVxuXHQgKiBAcGFyYW0ge0FycmF5fSBjb2RlUG9pbnRzIFRoZSBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbmV3IFVuaWNvZGUgc3RyaW5nIChVQ1MtMikuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZW5jb2RlKGFycmF5KSB7XG5cdFx0cmV0dXJuIG1hcChhcnJheSwgZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0XHR2YWx1ZSAtPSAweDEwMDAwO1xuXHRcdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlID4+PiAxMCAmIDB4M0ZGIHwgMHhEODAwKTtcblx0XHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gb3V0cHV0O1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgYmFzaWMgY29kZSBwb2ludCBpbnRvIGEgZGlnaXQvaW50ZWdlci5cblx0ICogQHNlZSBgZGlnaXRUb0Jhc2ljKClgXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlUG9pbnQgVGhlIGJhc2ljIG51bWVyaWMgY29kZSBwb2ludCB2YWx1ZS5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50IChmb3IgdXNlIGluXG5cdCAqIHJlcHJlc2VudGluZyBpbnRlZ2VycykgaW4gdGhlIHJhbmdlIGAwYCB0byBgYmFzZSAtIDFgLCBvciBgYmFzZWAgaWZcblx0ICogdGhlIGNvZGUgcG9pbnQgZG9lcyBub3QgcmVwcmVzZW50IGEgdmFsdWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBiYXNpY1RvRGlnaXQoY29kZVBvaW50KSB7XG5cdFx0aWYgKGNvZGVQb2ludCAtIDQ4IDwgMTApIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSAyMjtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDY1IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA2NTtcblx0XHR9XG5cdFx0aWYgKGNvZGVQb2ludCAtIDk3IDwgMjYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQgLSA5Nztcblx0XHR9XG5cdFx0cmV0dXJuIGJhc2U7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBkaWdpdC9pbnRlZ2VyIGludG8gYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAc2VlIGBiYXNpY1RvRGlnaXQoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRpZ2l0IFRoZSBudW1lcmljIHZhbHVlIG9mIGEgYmFzaWMgY29kZSBwb2ludC5cblx0ICogQHJldHVybnMge051bWJlcn0gVGhlIGJhc2ljIGNvZGUgcG9pbnQgd2hvc2UgdmFsdWUgKHdoZW4gdXNlZCBmb3Jcblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpcyBgZGlnaXRgLCB3aGljaCBuZWVkcyB0byBiZSBpbiB0aGUgcmFuZ2Vcblx0ICogYDBgIHRvIGBiYXNlIC0gMWAuIElmIGBmbGFnYCBpcyBub24temVybywgdGhlIHVwcGVyY2FzZSBmb3JtIGlzXG5cdCAqIHVzZWQ7IGVsc2UsIHRoZSBsb3dlcmNhc2UgZm9ybSBpcyB1c2VkLiBUaGUgYmVoYXZpb3IgaXMgdW5kZWZpbmVkXG5cdCAqIGlmIGBmbGFnYCBpcyBub24temVybyBhbmQgYGRpZ2l0YCBoYXMgbm8gdXBwZXJjYXNlIGZvcm0uXG5cdCAqL1xuXHRmdW5jdGlvbiBkaWdpdFRvQmFzaWMoZGlnaXQsIGZsYWcpIHtcblx0XHQvLyAgMC4uMjUgbWFwIHRvIEFTQ0lJIGEuLnogb3IgQS4uWlxuXHRcdC8vIDI2Li4zNSBtYXAgdG8gQVNDSUkgMC4uOVxuXHRcdHJldHVybiBkaWdpdCArIDIyICsgNzUgKiAoZGlnaXQgPCAyNikgLSAoKGZsYWcgIT0gMCkgPDwgNSk7XG5cdH1cblxuXHQvKipcblx0ICogQmlhcyBhZGFwdGF0aW9uIGZ1bmN0aW9uIGFzIHBlciBzZWN0aW9uIDMuNCBvZiBSRkMgMzQ5Mi5cblx0ICogaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM0OTIjc2VjdGlvbi0zLjRcblx0ICogQHByaXZhdGVcblx0ICovXG5cdGZ1bmN0aW9uIGFkYXB0KGRlbHRhLCBudW1Qb2ludHMsIGZpcnN0VGltZSkge1xuXHRcdHZhciBrID0gMDtcblx0XHRkZWx0YSA9IGZpcnN0VGltZSA/IGZsb29yKGRlbHRhIC8gZGFtcCkgOiBkZWx0YSA+PiAxO1xuXHRcdGRlbHRhICs9IGZsb29yKGRlbHRhIC8gbnVtUG9pbnRzKTtcblx0XHRmb3IgKC8qIG5vIGluaXRpYWxpemF0aW9uICovOyBkZWx0YSA+IGJhc2VNaW51c1RNaW4gKiB0TWF4ID4+IDE7IGsgKz0gYmFzZSkge1xuXHRcdFx0ZGVsdGEgPSBmbG9vcihkZWx0YSAvIGJhc2VNaW51c1RNaW4pO1xuXHRcdH1cblx0XHRyZXR1cm4gZmxvb3IoayArIChiYXNlTWludXNUTWluICsgMSkgKiBkZWx0YSAvIChkZWx0YSArIHNrZXcpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMgdG8gYSBzdHJpbmcgb2YgVW5pY29kZVxuXHQgKiBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcblx0XHQvLyBEb24ndCB1c2UgVUNTLTJcblx0XHR2YXIgb3V0cHV0ID0gW10sXG5cdFx0ICAgIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoLFxuXHRcdCAgICBvdXQsXG5cdFx0ICAgIGkgPSAwLFxuXHRcdCAgICBuID0gaW5pdGlhbE4sXG5cdFx0ICAgIGJpYXMgPSBpbml0aWFsQmlhcyxcblx0XHQgICAgYmFzaWMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIGluZGV4LFxuXHRcdCAgICBvbGRpLFxuXHRcdCAgICB3LFxuXHRcdCAgICBrLFxuXHRcdCAgICBkaWdpdCxcblx0XHQgICAgdCxcblx0XHQgICAgLyoqIENhY2hlZCBjYWxjdWxhdGlvbiByZXN1bHRzICovXG5cdFx0ICAgIGJhc2VNaW51c1Q7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzOiBsZXQgYGJhc2ljYCBiZSB0aGUgbnVtYmVyIG9mIGlucHV0IGNvZGVcblx0XHQvLyBwb2ludHMgYmVmb3JlIHRoZSBsYXN0IGRlbGltaXRlciwgb3IgYDBgIGlmIHRoZXJlIGlzIG5vbmUsIHRoZW4gY29weVxuXHRcdC8vIHRoZSBmaXJzdCBiYXNpYyBjb2RlIHBvaW50cyB0byB0aGUgb3V0cHV0LlxuXG5cdFx0YmFzaWMgPSBpbnB1dC5sYXN0SW5kZXhPZihkZWxpbWl0ZXIpO1xuXHRcdGlmIChiYXNpYyA8IDApIHtcblx0XHRcdGJhc2ljID0gMDtcblx0XHR9XG5cblx0XHRmb3IgKGogPSAwOyBqIDwgYmFzaWM7ICsraikge1xuXHRcdFx0Ly8gaWYgaXQncyBub3QgYSBiYXNpYyBjb2RlIHBvaW50XG5cdFx0XHRpZiAoaW5wdXQuY2hhckNvZGVBdChqKSA+PSAweDgwKSB7XG5cdFx0XHRcdGVycm9yKCdub3QtYmFzaWMnKTtcblx0XHRcdH1cblx0XHRcdG91dHB1dC5wdXNoKGlucHV0LmNoYXJDb2RlQXQoaikpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZGVjb2RpbmcgbG9vcDogc3RhcnQganVzdCBhZnRlciB0aGUgbGFzdCBkZWxpbWl0ZXIgaWYgYW55IGJhc2ljIGNvZGVcblx0XHQvLyBwb2ludHMgd2VyZSBjb3BpZWQ7IHN0YXJ0IGF0IHRoZSBiZWdpbm5pbmcgb3RoZXJ3aXNlLlxuXG5cdFx0Zm9yIChpbmRleCA9IGJhc2ljID4gMCA/IGJhc2ljICsgMSA6IDA7IGluZGV4IDwgaW5wdXRMZW5ndGg7IC8qIG5vIGZpbmFsIGV4cHJlc3Npb24gKi8pIHtcblxuXHRcdFx0Ly8gYGluZGV4YCBpcyB0aGUgaW5kZXggb2YgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGJlIGNvbnN1bWVkLlxuXHRcdFx0Ly8gRGVjb2RlIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXIgaW50byBgZGVsdGFgLFxuXHRcdFx0Ly8gd2hpY2ggZ2V0cyBhZGRlZCB0byBgaWAuIFRoZSBvdmVyZmxvdyBjaGVja2luZyBpcyBlYXNpZXJcblx0XHRcdC8vIGlmIHdlIGluY3JlYXNlIGBpYCBhcyB3ZSBnbywgdGhlbiBzdWJ0cmFjdCBvZmYgaXRzIHN0YXJ0aW5nXG5cdFx0XHQvLyB2YWx1ZSBhdCB0aGUgZW5kIHRvIG9idGFpbiBgZGVsdGFgLlxuXHRcdFx0Zm9yIChvbGRpID0gaSwgdyA9IDEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXG5cdFx0XHRcdGlmIChpbmRleCA+PSBpbnB1dExlbmd0aCkge1xuXHRcdFx0XHRcdGVycm9yKCdpbnZhbGlkLWlucHV0Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkaWdpdCA9IGJhc2ljVG9EaWdpdChpbnB1dC5jaGFyQ29kZUF0KGluZGV4KyspKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPj0gYmFzZSB8fCBkaWdpdCA+IGZsb29yKChtYXhJbnQgLSBpKSAvIHcpKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpICs9IGRpZ2l0ICogdztcblx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cblx0XHRcdFx0aWYgKGRpZ2l0IDwgdCkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YmFzZU1pbnVzVCA9IGJhc2UgLSB0O1xuXHRcdFx0XHRpZiAodyA+IGZsb29yKG1heEludCAvIGJhc2VNaW51c1QpKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3ICo9IGJhc2VNaW51c1Q7XG5cblx0XHRcdH1cblxuXHRcdFx0b3V0ID0gb3V0cHV0Lmxlbmd0aCArIDE7XG5cdFx0XHRiaWFzID0gYWRhcHQoaSAtIG9sZGksIG91dCwgb2xkaSA9PSAwKTtcblxuXHRcdFx0Ly8gYGlgIHdhcyBzdXBwb3NlZCB0byB3cmFwIGFyb3VuZCBmcm9tIGBvdXRgIHRvIGAwYCxcblx0XHRcdC8vIGluY3JlbWVudGluZyBgbmAgZWFjaCB0aW1lLCBzbyB3ZSdsbCBmaXggdGhhdCBub3c6XG5cdFx0XHRpZiAoZmxvb3IoaSAvIG91dCkgPiBtYXhJbnQgLSBuKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRuICs9IGZsb29yKGkgLyBvdXQpO1xuXHRcdFx0aSAlPSBvdXQ7XG5cblx0XHRcdC8vIEluc2VydCBgbmAgYXQgcG9zaXRpb24gYGlgIG9mIHRoZSBvdXRwdXRcblx0XHRcdG91dHB1dC5zcGxpY2UoaSsrLCAwLCBuKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB1Y3MyZW5jb2RlKG91dHB1dCk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzIChlLmcuIGEgZG9tYWluIG5hbWUgbGFiZWwpIHRvIGFcblx0ICogUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scy5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIHJlc3VsdGluZyBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZW5jb2RlKGlucHV0KSB7XG5cdFx0dmFyIG4sXG5cdFx0ICAgIGRlbHRhLFxuXHRcdCAgICBoYW5kbGVkQ1BDb3VudCxcblx0XHQgICAgYmFzaWNMZW5ndGgsXG5cdFx0ICAgIGJpYXMsXG5cdFx0ICAgIGosXG5cdFx0ICAgIG0sXG5cdFx0ICAgIHEsXG5cdFx0ICAgIGssXG5cdFx0ICAgIHQsXG5cdFx0ICAgIGN1cnJlbnRWYWx1ZSxcblx0XHQgICAgb3V0cHV0ID0gW10sXG5cdFx0ICAgIC8qKiBgaW5wdXRMZW5ndGhgIHdpbGwgaG9sZCB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIGluIGBpbnB1dGAuICovXG5cdFx0ICAgIGlucHV0TGVuZ3RoLFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgaGFuZGxlZENQQ291bnRQbHVzT25lLFxuXHRcdCAgICBiYXNlTWludXNULFxuXHRcdCAgICBxTWludXNUO1xuXG5cdFx0Ly8gQ29udmVydCB0aGUgaW5wdXQgaW4gVUNTLTIgdG8gVW5pY29kZVxuXHRcdGlucHV0ID0gdWNzMmRlY29kZShpbnB1dCk7XG5cblx0XHQvLyBDYWNoZSB0aGUgbGVuZ3RoXG5cdFx0aW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG5cblx0XHQvLyBJbml0aWFsaXplIHRoZSBzdGF0ZVxuXHRcdG4gPSBpbml0aWFsTjtcblx0XHRkZWx0YSA9IDA7XG5cdFx0YmlhcyA9IGluaXRpYWxCaWFzO1xuXG5cdFx0Ly8gSGFuZGxlIHRoZSBiYXNpYyBjb2RlIHBvaW50c1xuXHRcdGZvciAoaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRjdXJyZW50VmFsdWUgPSBpbnB1dFtqXTtcblx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCAweDgwKSB7XG5cdFx0XHRcdG91dHB1dC5wdXNoKHN0cmluZ0Zyb21DaGFyQ29kZShjdXJyZW50VmFsdWUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRoYW5kbGVkQ1BDb3VudCA9IGJhc2ljTGVuZ3RoID0gb3V0cHV0Lmxlbmd0aDtcblxuXHRcdC8vIGBoYW5kbGVkQ1BDb3VudGAgaXMgdGhlIG51bWJlciBvZiBjb2RlIHBvaW50cyB0aGF0IGhhdmUgYmVlbiBoYW5kbGVkO1xuXHRcdC8vIGBiYXNpY0xlbmd0aGAgaXMgdGhlIG51bWJlciBvZiBiYXNpYyBjb2RlIHBvaW50cy5cblxuXHRcdC8vIEZpbmlzaCB0aGUgYmFzaWMgc3RyaW5nIC0gaWYgaXQgaXMgbm90IGVtcHR5IC0gd2l0aCBhIGRlbGltaXRlclxuXHRcdGlmIChiYXNpY0xlbmd0aCkge1xuXHRcdFx0b3V0cHV0LnB1c2goZGVsaW1pdGVyKTtcblx0XHR9XG5cblx0XHQvLyBNYWluIGVuY29kaW5nIGxvb3A6XG5cdFx0d2hpbGUgKGhhbmRsZWRDUENvdW50IDwgaW5wdXRMZW5ndGgpIHtcblxuXHRcdFx0Ly8gQWxsIG5vbi1iYXNpYyBjb2RlIHBvaW50cyA8IG4gaGF2ZSBiZWVuIGhhbmRsZWQgYWxyZWFkeS4gRmluZCB0aGUgbmV4dFxuXHRcdFx0Ly8gbGFyZ2VyIG9uZTpcblx0XHRcdGZvciAobSA9IG1heEludCwgaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0XHRpZiAoY3VycmVudFZhbHVlID49IG4gJiYgY3VycmVudFZhbHVlIDwgbSkge1xuXHRcdFx0XHRcdG0gPSBjdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSW5jcmVhc2UgYGRlbHRhYCBlbm91Z2ggdG8gYWR2YW5jZSB0aGUgZGVjb2RlcidzIDxuLGk+IHN0YXRlIHRvIDxtLDA+LFxuXHRcdFx0Ly8gYnV0IGd1YXJkIGFnYWluc3Qgb3ZlcmZsb3dcblx0XHRcdGhhbmRsZWRDUENvdW50UGx1c09uZSA9IGhhbmRsZWRDUENvdW50ICsgMTtcblx0XHRcdGlmIChtIC0gbiA+IGZsb29yKChtYXhJbnQgLSBkZWx0YSkgLyBoYW5kbGVkQ1BDb3VudFBsdXNPbmUpKSB7XG5cdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWx0YSArPSAobSAtIG4pICogaGFuZGxlZENQQ291bnRQbHVzT25lO1xuXHRcdFx0biA9IG07XG5cblx0XHRcdGZvciAoaiA9IDA7IGogPCBpbnB1dExlbmd0aDsgKytqKSB7XG5cdFx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPCBuICYmICsrZGVsdGEgPiBtYXhJbnQpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPT0gbikge1xuXHRcdFx0XHRcdC8vIFJlcHJlc2VudCBkZWx0YSBhcyBhIGdlbmVyYWxpemVkIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyXG5cdFx0XHRcdFx0Zm9yIChxID0gZGVsdGEsIGsgPSBiYXNlOyAvKiBubyBjb25kaXRpb24gKi87IGsgKz0gYmFzZSkge1xuXHRcdFx0XHRcdFx0dCA9IGsgPD0gYmlhcyA/IHRNaW4gOiAoayA+PSBiaWFzICsgdE1heCA/IHRNYXggOiBrIC0gYmlhcyk7XG5cdFx0XHRcdFx0XHRpZiAocSA8IHQpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRxTWludXNUID0gcSAtIHQ7XG5cdFx0XHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdFx0XHRvdXRwdXQucHVzaChcblx0XHRcdFx0XHRcdFx0c3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyh0ICsgcU1pbnVzVCAlIGJhc2VNaW51c1QsIDApKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHEgPSBmbG9vcihxTWludXNUIC8gYmFzZU1pbnVzVCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGRpZ2l0VG9CYXNpYyhxLCAwKSkpO1xuXHRcdFx0XHRcdGJpYXMgPSBhZGFwdChkZWx0YSwgaGFuZGxlZENQQ291bnRQbHVzT25lLCBoYW5kbGVkQ1BDb3VudCA9PSBiYXNpY0xlbmd0aCk7XG5cdFx0XHRcdFx0ZGVsdGEgPSAwO1xuXHRcdFx0XHRcdCsraGFuZGxlZENQQ291bnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0KytkZWx0YTtcblx0XHRcdCsrbjtcblxuXHRcdH1cblx0XHRyZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3Ncblx0ICogdG8gVW5pY29kZS4gT25seSB0aGUgUHVueWNvZGVkIHBhcnRzIG9mIHRoZSBpbnB1dCB3aWxsIGJlIGNvbnZlcnRlZCwgaS5lLlxuXHQgKiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCBvbiBhIHN0cmluZyB0aGF0IGhhcyBhbHJlYWR5IGJlZW5cblx0ICogY29udmVydGVkIHRvIFVuaWNvZGUuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlZCBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvXG5cdCAqIGNvbnZlcnQgdG8gVW5pY29kZS5cblx0ICogQHJldHVybnMge1N0cmluZ30gVGhlIFVuaWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIFB1bnljb2RlXG5cdCAqIHN0cmluZy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvVW5pY29kZShpbnB1dCkge1xuXHRcdHJldHVybiBtYXBEb21haW4oaW5wdXQsIGZ1bmN0aW9uKHN0cmluZykge1xuXHRcdFx0cmV0dXJuIHJlZ2V4UHVueWNvZGUudGVzdChzdHJpbmcpXG5cdFx0XHRcdD8gZGVjb2RlKHN0cmluZy5zbGljZSg0KS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0XHQ6IHN0cmluZztcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIFVuaWNvZGUgc3RyaW5nIHJlcHJlc2VudGluZyBhIGRvbWFpbiBuYW1lIG9yIGFuIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogUHVueWNvZGUuIE9ubHkgdGhlIG5vbi1BU0NJSSBwYXJ0cyBvZiB0aGUgZG9tYWluIG5hbWUgd2lsbCBiZSBjb252ZXJ0ZWQsXG5cdCAqIGkuZS4gaXQgZG9lc24ndCBtYXR0ZXIgaWYgeW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0J3MgYWxyZWFkeSBpblxuXHQgKiBBU0NJSS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgZG9tYWluIG5hbWUgb3IgZW1haWwgYWRkcmVzcyB0byBjb252ZXJ0LCBhcyBhXG5cdCAqIFVuaWNvZGUgc3RyaW5nLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgUHVueWNvZGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIGdpdmVuIGRvbWFpbiBuYW1lIG9yXG5cdCAqIGVtYWlsIGFkZHJlc3MuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0FTQ0lJKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhOb25BU0NJSS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyAneG4tLScgKyBlbmNvZGUoc3RyaW5nKVxuXHRcdFx0XHQ6IHN0cmluZztcblx0XHR9KTtcblx0fVxuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdC8qKiBEZWZpbmUgdGhlIHB1YmxpYyBBUEkgKi9cblx0cHVueWNvZGUgPSB7XG5cdFx0LyoqXG5cdFx0ICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IFB1bnljb2RlLmpzIHZlcnNpb24gbnVtYmVyLlxuXHRcdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHRcdCAqIEB0eXBlIFN0cmluZ1xuXHRcdCAqL1xuXHRcdCd2ZXJzaW9uJzogJzEuMy4yJyxcblx0XHQvKipcblx0XHQgKiBBbiBvYmplY3Qgb2YgbWV0aG9kcyB0byBjb252ZXJ0IGZyb20gSmF2YVNjcmlwdCdzIGludGVybmFsIGNoYXJhY3RlclxuXHRcdCAqIHJlcHJlc2VudGF0aW9uIChVQ1MtMikgdG8gVW5pY29kZSBjb2RlIHBvaW50cywgYW5kIGJhY2suXG5cdFx0ICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgT2JqZWN0XG5cdFx0ICovXG5cdFx0J3VjczInOiB7XG5cdFx0XHQnZGVjb2RlJzogdWNzMmRlY29kZSxcblx0XHRcdCdlbmNvZGUnOiB1Y3MyZW5jb2RlXG5cdFx0fSxcblx0XHQnZGVjb2RlJzogZGVjb2RlLFxuXHRcdCdlbmNvZGUnOiBlbmNvZGUsXG5cdFx0J3RvQVNDSUknOiB0b0FTQ0lJLFxuXHRcdCd0b1VuaWNvZGUnOiB0b1VuaWNvZGVcblx0fTtcblxuXHQvKiogRXhwb3NlIGBwdW55Y29kZWAgKi9cblx0Ly8gU29tZSBBTUQgYnVpbGQgb3B0aW1pemVycywgbGlrZSByLmpzLCBjaGVjayBmb3Igc3BlY2lmaWMgY29uZGl0aW9uIHBhdHRlcm5zXG5cdC8vIGxpa2UgdGhlIGZvbGxvd2luZzpcblx0aWYgKFxuXHRcdHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJlxuXHRcdHR5cGVvZiBkZWZpbmUuYW1kID09ICdvYmplY3QnICYmXG5cdFx0ZGVmaW5lLmFtZFxuXHQpIHtcblx0XHRkZWZpbmUoJ3B1bnljb2RlJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gcHVueWNvZGU7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAoZnJlZUV4cG9ydHMgJiYgZnJlZU1vZHVsZSkge1xuXHRcdGlmIChtb2R1bGUuZXhwb3J0cyA9PSBmcmVlRXhwb3J0cykge1xuXHRcdFx0Ly8gaW4gTm9kZS5qcywgaW8uanMsIG9yIFJpbmdvSlMgdjAuOC4wK1xuXHRcdFx0ZnJlZU1vZHVsZS5leHBvcnRzID0gcHVueWNvZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGluIE5hcndoYWwgb3IgUmluZ29KUyB2MC43LjAtXG5cdFx0XHRmb3IgKGtleSBpbiBwdW55Y29kZSkge1xuXHRcdFx0XHRwdW55Y29kZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIChmcmVlRXhwb3J0c1trZXldID0gcHVueWNvZGVba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdC8vIGluIFJoaW5vIG9yIGEgd2ViIGJyb3dzZXJcblx0XHRyb290LnB1bnljb2RlID0gcHVueWNvZGU7XG5cdH1cblxufSh0aGlzKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9