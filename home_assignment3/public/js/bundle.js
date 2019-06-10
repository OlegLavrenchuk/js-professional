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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleton */ \"./application/singleton.js\");\n// import myFreeze from './objectfreeze';\r\n\r\n\r\n// let universe = {\r\n//   infinity: Infinity,\r\n//   good: ['cats', 'love', 'rock-n-roll'],\r\n//   evil: {\r\n//     bonuses: ['cookies', 'great look']\r\n//   }\r\n// }\r\n\r\n// let FarGalaxy = myFreeze(universe);\r\n//     FarGalaxy.good.push('javascript'); // false\r\n//     FarGalaxy.something = 'Wow!'; // false\r\n//     FarGalaxy.evil.humans = [];   // false\r\n\r\n\r\n_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLaw({id: 1, name: 'Программирование', description: 'Нельзя кодить в общественных местах'});\r\n_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLaw({id: 2, name: 'Отдых', description: 'Можно отдыхать когда хочешь'});\r\n_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLaw({id: 3, name: 'Сон', description: 'Нельзя спать на рабочем месте'});\r\n_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].readLaws();\r\n_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].makeFeast();\r\n_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].readLaw(2);\r\n_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showBudget();\r\n_singleton__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showStatistic();\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./application/singleton.js":
/*!**********************************!*\
  !*** ./application/singleton.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst data = {\r\n    laws: [],\r\n    budget: 1000000,\r\n    citizensSatisfactions: 0\r\n}\r\n\r\n  \r\nconst MySingleton = {\r\n    addLaw: obj => {\r\n        data.laws.push(obj);\r\n        data.citizensSatisfactions -= 10;\r\n    },\r\n    readLaws: () => data.laws.forEach( el => console.log(el.name,':', el.description)),\r\n    readLaw: id => {\r\n        let findLaw = data.laws.find( item => item.id === id );\r\n            console.log(findLaw.name, ':', findLaw.description);\r\n    },\r\n    showStatistic: () => console.log(data.citizensSatisfactions),\r\n    showBudget: () => console.log(data.budget),\r\n    makeFeast: () => {\r\n        data.budget = data.budget - 50000;\r\n        data.citizensSatisfactions += 5;\r\n    }\r\n  };\r\n\r\n  Object.freeze(MySingleton);\r\n  \r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (MySingleton);\r\n  \n\n//# sourceURL=webpack:///./application/singleton.js?");

/***/ })

/******/ });