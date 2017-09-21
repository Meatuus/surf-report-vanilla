/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_locations__ = __webpack_require__(1);


console.log('hi', __WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */][0]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const conditions = [{
  timestamp: 1366902000,
  localTimestamp: 1366902000,
  issueTimestamp: 1366848000,
  fadedRating: 0,
  solidRating: 0,
  swell: {
    minBreakingHeight: 1,
    absMinBreakingHeight: 1.06,
    maxBreakingHeight: 2,
    absMaxBreakingHeight: 1.66,
    unit: "ft",
    components: {
      combined: {
        height: 1.1,
        period: 14,
        direction: 93.25,
        compassDirection: "W"
      },
      primary: {
        height: 1,
        period: 7,
        direction: 83.37,
        compassDirection: "W"
      },
      secondary: {
        height: 0.4,
        period: 9,
        direction: 92.32,
        compassDirection: "W"
      },
      tertiary: {
        height: 0.3,
        period: 13,
        direction: 94.47,
        compassDirection: "W"
      }
    }
  },
  wind: {
    speed: 10,
    direction: 85,
    compassDirection: "W",
    chill: 15,
    gusts: 13,
    unit: "mph"
  },
  condition: {
    pressure: 1020,
    temperature: 18,
    unitPressure: "mb",
    unit: "c"
  },
  charts: {
    swell: "http://cdn.magicseaweed.com/wave/750/1-1366902000-1.gif",
    period: "http://cdn.magicseaweed.com/wave/750/1-1366902000-2.gif",
    wind: "http://cdn.magicseaweed.com/gfs/750/1-1366902000-4.gif",
    pressure: "http://cdn.magicseaweed.com/gfs/750/1-1366902000-3.gif",
    sst: "http://cdn.magicseaweed.com/sst/750/1-1366902000-10.gif"
  }
}, {
  timestamp: 1366902000,
  localTimestamp: 1366902000,
  issueTimestamp: 1366848000,
  fadedRating: 0,
  solidRating: 0,
  swell: {
    minBreakingHeight: 1,
    absMinBreakingHeight: 1.06,
    maxBreakingHeight: 2,
    absMaxBreakingHeight: 1.66,
    unit: "ft",
    components: {
      combined: {
        height: 1.1,
        period: 14,
        direction: 93.25,
        compassDirection: "W"
      },
      primary: {
        height: 1,
        period: 7,
        direction: 83.37,
        compassDirection: "W"
      },
      secondary: {
        height: 0.4,
        period: 9,
        direction: 92.32,
        compassDirection: "W"
      },
      tertiary: {
        height: 0.3,
        period: 13,
        direction: 94.47,
        compassDirection: "W"
      }
    }
  },
  wind: {
    speed: 10,
    direction: 85,
    compassDirection: "W",
    chill: 15,
    gusts: 13,
    unit: "mph"
  },
  condition: {
    pressure: 1020,
    temperature: 18,
    unitPressure: "mb",
    unit: "c"
  },
  charts: {
    swell: "http://cdn.magicseaweed.com/wave/750/1-1366902000-1.gif",
    period: "http://cdn.magicseaweed.com/wave/750/1-1366902000-2.gif",
    wind: "http://cdn.magicseaweed.com/gfs/750/1-1366902000-4.gif",
    pressure: "http://cdn.magicseaweed.com/gfs/750/1-1366902000-3.gif",
    sst: "http://cdn.magicseaweed.com/sst/750/1-1366902000-10.gif"
  }
}, {
  timestamp: 1366902000,
  localTimestamp: 1366902000,
  issueTimestamp: 1366848000,
  fadedRating: 0,
  solidRating: 0,
  swell: {
    minBreakingHeight: 1,
    absMinBreakingHeight: 1.06,
    maxBreakingHeight: 2,
    absMaxBreakingHeight: 1.66,
    unit: "ft",
    components: {
      combined: {
        height: 1.1,
        period: 14,
        direction: 93.25,
        compassDirection: "W"
      },
      primary: {
        height: 1,
        period: 7,
        direction: 83.37,
        compassDirection: "W"
      },
      secondary: {
        height: 0.4,
        period: 9,
        direction: 92.32,
        compassDirection: "W"
      },
      tertiary: {
        height: 0.3,
        period: 13,
        direction: 94.47,
        compassDirection: "W"
      }
    }
  },
  wind: {
    speed: 10,
    direction: 85,
    compassDirection: "W",
    chill: 15,
    gusts: 13,
    unit: "mph"
  },
  condition: {
    pressure: 1020,
    temperature: 18,
    unitPressure: "mb",
    unit: "c"
  },
  charts: {
    swell: "http://cdn.magicseaweed.com/wave/750/1-1366902000-1.gif",
    period: "http://cdn.magicseaweed.com/wave/750/1-1366902000-2.gif",
    wind: "http://cdn.magicseaweed.com/gfs/750/1-1366902000-4.gif",
    pressure: "http://cdn.magicseaweed.com/gfs/750/1-1366902000-3.gif",
    sst: "http://cdn.magicseaweed.com/sst/750/1-1366902000-10.gif"
  }
}];

/* harmony default export */ __webpack_exports__["a"] = (conditions);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map