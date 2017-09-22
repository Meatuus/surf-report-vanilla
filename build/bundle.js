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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_baseData__ = __webpack_require__(2);



// const surfForecast = document.querySelector('.surf-forecast');
// const location = document.querySelector('.surf-conditions');

const swell = document.getElementsByClassName('swell');
const wind = document.getElementsByClassName('wind');
const temp = document.getElementsByClassName('temp');

const conditionsOne = __WEBPACK_IMPORTED_MODULE_1__data_baseData__["a" /* default */];
const conditionsTwo = __WEBPACK_IMPORTED_MODULE_1__data_baseData__["a" /* default */];
const conditionsThree = __WEBPACK_IMPORTED_MODULE_1__data_baseData__["a" /* default */];

if (__WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */].length > 0) {
  for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */].length; i++) {
    swell[i].innerHTML = `<h4>Min Swell: ${__WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */][i].swell.minBreakingHeight} ${__WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */][i].swell.unit}</h4><h4>Max Swell: ${__WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */][i].swell.maxBreakingHeight} ${__WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */][i].swell.unit}</h4><h4>Swell Direction: ${__WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */][i].swell.components.combined.compassDirection}</h4>`;

    wind[i].innerHTML = `<h4>Wind Speed: ${__WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */][i].wind.speed} ${__WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */][i].wind.unit}</h4><h4>Direction: ${__WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */][i].wind.compassDirection}`;

    temp[i].innerHTML = `<h4>Temperature: ${__WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */][i].condition.temperature} ${__WEBPACK_IMPORTED_MODULE_0__data_locations__["a" /* default */][i].condition.unit}</h4>`;
  }
}

// TODO: call above fucntion only on home page

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const conditions = [{
  timestamp: 1366900000,
  localTimestamp: 1366902000,
  issueTimestamp: 1366848000,
  fadedRating: 0,
  solidRating: 0,
  swell: {
    minBreakingHeight: 1,
    absMinBreakingHeight: 1.06,
    maxBreakingHeight: 1,
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
  timestamp: 1366905000,
  localTimestamp: 1366902000,
  issueTimestamp: 1366848000,
  fadedRating: 0,
  solidRating: 0,
  swell: {
    minBreakingHeight: 2,
    absMinBreakingHeight: 2.06,
    maxBreakingHeight: 4,
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

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const baseData = [{
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}, {
    "timestamp": 0,
    "localTimestamp": 0,
    "issueTimestamp": 0,
    "fadedRating": 0,
    "solidRating": 0,
    "swell": {
        "absMinBreakingHeight": 0,
        "absMaxBreakingHeight": 0,
        "unit": "ft",
        "minBreakingHeight": 0,
        "maxBreakingHeight": 0,
        "components": {
            "combined": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "primary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            },
            "secondary": {
                "height": 0,
                "period": 0,
                "direction": 0,
                "compassDirection": ""
            }
        }
    },
    "wind": {
        "speed": 0,
        "direction": 0,
        "compassDirection": "",
        "chill": 0,
        "gusts": 0,
        "unit": "mph"
    },
    "condition": {
        "pressure": 0,
        "temperature": 0,
        "weather": 0,
        "unitPressure": "mb",
        "unit": "c"
    },
    "charts": {
        "swell": "https://hist-4.msw.ms/wave/750/35-1503586800-1.gif",
        "period": "https://hist-4.msw.ms/wave/750/35-1503586800-2.gif",
        "wind": "https://hist-4.msw.ms/gfs/750/35-1503586800-4.gif",
        "pressure": "https://hist-4.msw.ms/gfs/750/35-1503586800-3.gif",
        "sst": "https://hist-4.msw.ms/sst/750/35-1503586800-10.gif"
    }
}];
/* harmony default export */ __webpack_exports__["a"] = (baseData);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map