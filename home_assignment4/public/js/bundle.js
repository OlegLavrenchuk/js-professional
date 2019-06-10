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

/***/ "./application/composition.js":
/*!************************************!*\
  !*** ./application/composition.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_DistributeTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/DistributeTasks */ \"./application/functions/DistributeTasks.js\");\n/* harmony import */ var _functions_DrinkSomeTea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/DrinkSomeTea */ \"./application/functions/DrinkSomeTea.js\");\n/* harmony import */ var _functions_MakeBackendMagic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/MakeBackendMagic */ \"./application/functions/MakeBackendMagic.js\");\n/* harmony import */ var _functions_MakeFrontendMagic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/MakeFrontendMagic */ \"./application/functions/MakeFrontendMagic.js\");\n/* harmony import */ var _functions_MakeItLooksBeautiful__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/MakeItLooksBeautiful */ \"./application/functions/MakeItLooksBeautiful.js\");\n/* harmony import */ var _functions_Procrastinate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/Procrastinate */ \"./application/functions/Procrastinate.js\");\n/* harmony import */ var _functions_WatchYoutube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/WatchYoutube */ \"./application/functions/WatchYoutube.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst Composition = () => {\r\n\r\n    const BackendDeveloper = (name, gender, age) => {\r\n        const state = {\r\n            name,\r\n            gender,\r\n            age\r\n        }\r\n\r\n        return Object.assign(\r\n            {},\r\n            state,\r\n            Object(_functions_MakeBackendMagic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state),\r\n            Object(_functions_DrinkSomeTea__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state),\r\n            Object(_functions_Procrastinate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(state)\r\n        )\r\n    }\r\n\r\n    const FrontendDeveloper = (name, gender, age) => {\r\n        const state = {\r\n            name,\r\n            gender,\r\n            age\r\n        }\r\n\r\n        return Object.assign(\r\n            {},\r\n            state,\r\n            Object(_functions_MakeFrontendMagic__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state),\r\n            Object(_functions_DrinkSomeTea__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state),\r\n            Object(_functions_WatchYoutube__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(state)\r\n        )\r\n    }\r\n\r\n    const Desinger = (name, gender, age) => {\r\n        const state = {\r\n            name,\r\n            gender,\r\n            age\r\n        }\r\n\r\n        return Object.assign(\r\n            {},\r\n            state,\r\n            Object(_functions_MakeItLooksBeautiful__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(state),\r\n            Object(_functions_WatchYoutube__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(state),\r\n            Object(_functions_Procrastinate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(state)\r\n        )\r\n    }\r\n\r\n    const ProjectManager = (name, gender, age) => {\r\n        const state = {\r\n            name,\r\n            gender,\r\n            age\r\n        }\r\n\r\n        return Object.assign(\r\n            {},\r\n            state,\r\n            Object(_functions_DistributeTasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state),\r\n            Object(_functions_Procrastinate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(state),\r\n            Object(_functions_DrinkSomeTea__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state)\r\n        )\r\n    }\r\n\r\n    const Alex = BackendDeveloper('Alex', 'man', 25);\r\n        Alex.backendMagic();\r\n        Alex.drinkTea();\r\n        Alex.procrastinate();\r\n    console.log(Alex);\r\n\r\n    const Oleg = FrontendDeveloper('Oleg', 'man', 22);\r\n        Oleg.frontendMagic();\r\n        Oleg.drinkTea();\r\n        Oleg.watchYoutube();\r\n    console.log(Oleg);\r\n\r\n    const Ania = Desinger('Ania', 'female', 21);\r\n        Ania.looksBeautiful();\r\n        Ania.watchYoutube();\r\n        Ania.procrastinate();\r\n    console.log(Ania);\r\n\r\n    const Vadim = ProjectManager('Vadim', 'man', 23);\r\n        Vadim.distrTasks();\r\n        Vadim.procrastinate();\r\n        Vadim.drinkTea();\r\n    console.log(Vadim);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Composition);\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./application/composition.js?");

/***/ }),

/***/ "./application/factory.js":
/*!********************************!*\
  !*** ./application/factory.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_DistributeTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/DistributeTasks */ \"./application/functions/DistributeTasks.js\");\n/* harmony import */ var _functions_DrinkSomeTea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/DrinkSomeTea */ \"./application/functions/DrinkSomeTea.js\");\n/* harmony import */ var _functions_MakeBackendMagic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/MakeBackendMagic */ \"./application/functions/MakeBackendMagic.js\");\n/* harmony import */ var _functions_MakeFrontendMagic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/MakeFrontendMagic */ \"./application/functions/MakeFrontendMagic.js\");\n/* harmony import */ var _functions_MakeItLooksBeautiful__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/MakeItLooksBeautiful */ \"./application/functions/MakeItLooksBeautiful.js\");\n/* harmony import */ var _functions_Procrastinate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/Procrastinate */ \"./application/functions/Procrastinate.js\");\n/* harmony import */ var _functions_WatchYoutube__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/WatchYoutube */ \"./application/functions/WatchYoutube.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst MyFactory = () => {\r\n\r\n  const ARR_WORKERS = [];\r\n\r\n  const BackendDeveloper = ({ name, gender, age, type }) => {\r\n    const state = {\r\n      name,\r\n      gender,\r\n      age,\r\n      type\r\n    }\r\n\r\n    return Object.assign(\r\n      {},\r\n      state,\r\n      Object(_functions_MakeBackendMagic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(state),\r\n      Object(_functions_DrinkSomeTea__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state),\r\n      Object(_functions_Procrastinate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(state)\r\n    )\r\n  }\r\n\r\n  const FrontendDeveloper = ({ name, gender, age, type }) => {\r\n    const state = {\r\n      name,\r\n      gender,\r\n      age,\r\n      type\r\n    }\r\n\r\n    return Object.assign(\r\n      {},\r\n      state,\r\n      Object(_functions_MakeFrontendMagic__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(state),\r\n      Object(_functions_DrinkSomeTea__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state),\r\n      Object(_functions_WatchYoutube__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(state)\r\n    )\r\n  }\r\n\r\n  const Desinger = ({ name, gender, age, type }) => {\r\n    const state = {\r\n      name,\r\n      gender,\r\n      age,\r\n      type\r\n    }\r\n\r\n    return Object.assign(\r\n      {},\r\n      state,\r\n      Object(_functions_MakeItLooksBeautiful__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(state),\r\n      Object(_functions_WatchYoutube__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(state),\r\n      Object(_functions_Procrastinate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(state)\r\n    )\r\n  }\r\n\r\n  const ProjectManager = ({ name, gender, age, type }) => {\r\n    const state = {\r\n      name,\r\n      gender,\r\n      age,\r\n      type\r\n    }\r\n\r\n    return Object.assign(\r\n      {},\r\n      state,\r\n      Object(_functions_DistributeTasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state),\r\n      Object(_functions_Procrastinate__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(state),\r\n      Object(_functions_DrinkSomeTea__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state)\r\n    )\r\n  }\r\n\r\n  class WorkersList {\r\n\r\n    hire() {\r\n      let findElement = ARR_WORKERS.find(item => item._id === this.parentNode.id);\r\n      let commandTable = document.getElementById('my__command');\r\n      let node = document.createElement('tr');\r\n          node.id = findElement._id;\r\n          node.innerHTML = `<td>${findElement.name}(${findElement.type}) ${~~findElement.rate}$/h</td>`;\r\n          commandTable.appendChild(node);\r\n\r\n      this.parentNode.remove();\r\n    }\r\n\r\n    render(obj) {\r\n      let table = document.getElementById('table');\r\n      let node = document.createElement('tr');\r\n          node.id = obj._id;\r\n          node.innerHTML = `\r\n              <td>${obj.name}(${obj.age})</td>\r\n              <td>${obj.type}</td>\r\n              <td id=\"td\"><button>Нанять</button></td>\r\n          `;\r\n\r\n          node.lastElementChild.addEventListener('click', this.hire);\r\n          table.appendChild(node);\r\n    }\r\n  };\r\n\r\n\r\n  class HeadHunt extends WorkersList {\r\n\r\n    distribution(obj) {\r\n      let Developer = null;\r\n\r\n      switch (obj.type) {\r\n        case 'backend':\r\n          Developer = BackendDeveloper;\r\n          break;\r\n        case 'frontend':\r\n          Developer = FrontendDeveloper;\r\n          break;\r\n        case 'design':\r\n          Developer = Desinger;\r\n          break;\r\n        case 'project':\r\n          Developer = ProjectManager;\r\n          break;\r\n        default:\r\n          return 0;\r\n      }\r\n\r\n      return Developer(obj);\r\n    }\r\n  };\r\n\r\n\r\n  const myApp = new HeadHunt();\r\n  fetch('http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2')\r\n    .then(response => response.json())\r\n    .then(data => data.map(item => {\r\n      myApp.distribution(item);\r\n      myApp.render(item);\r\n      ARR_WORKERS.push(item)\r\n    }));\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyFactory); \n\n//# sourceURL=webpack:///./application/factory.js?");

/***/ }),

/***/ "./application/functions/DistributeTasks.js":
/*!**************************************************!*\
  !*** ./application/functions/DistributeTasks.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DistributeTasks = (state) => ({\r\n    distrTasks: () => console.log(state.name, 'Tasks is distributed!')\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (DistributeTasks);\n\n//# sourceURL=webpack:///./application/functions/DistributeTasks.js?");

/***/ }),

/***/ "./application/functions/DrinkSomeTea.js":
/*!***********************************************!*\
  !*** ./application/functions/DrinkSomeTea.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst DrinkSomeTea = (state) => ({\r\n    drinkTea: () => console.log( state.name , 'drink tea')\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (DrinkSomeTea);\n\n//# sourceURL=webpack:///./application/functions/DrinkSomeTea.js?");

/***/ }),

/***/ "./application/functions/MakeBackendMagic.js":
/*!***************************************************!*\
  !*** ./application/functions/MakeBackendMagic.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MakeBackendMagic = (state) => ({\r\n    backendMagic: () => console.log('This is BACKEND MAGIC!!!', state.name)\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeBackendMagic);\n\n//# sourceURL=webpack:///./application/functions/MakeBackendMagic.js?");

/***/ }),

/***/ "./application/functions/MakeFrontendMagic.js":
/*!****************************************************!*\
  !*** ./application/functions/MakeFrontendMagic.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MakeFrontEndMagic = (state) => ({\r\n    frontendMagic: () => console.log('This is fronend MAGIC!', state.name)\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeFrontEndMagic);\n\n//# sourceURL=webpack:///./application/functions/MakeFrontendMagic.js?");

/***/ }),

/***/ "./application/functions/MakeItLooksBeautiful.js":
/*!*******************************************************!*\
  !*** ./application/functions/MakeItLooksBeautiful.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst MakeItLooksBeautiful = (state) => ({\r\n    looksBeautiful: () => console.log(state.name, 'its looks beautiful!')\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MakeItLooksBeautiful);\n\n//# sourceURL=webpack:///./application/functions/MakeItLooksBeautiful.js?");

/***/ }),

/***/ "./application/functions/Procrastinate.js":
/*!************************************************!*\
  !*** ./application/functions/Procrastinate.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Procrastinate = (state) => ({\r\n    procrastinate: () => console.log('dont procrastinate', state.name, state.age)\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Procrastinate);\n\n//# sourceURL=webpack:///./application/functions/Procrastinate.js?");

/***/ }),

/***/ "./application/functions/WatchYoutube.js":
/*!***********************************************!*\
  !*** ./application/functions/WatchYoutube.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst WatchYoutube = (state) => ({\r\n    watchYoutube: () => console.log(state.name, 'watching youtube')\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (WatchYoutube);\n\n//# sourceURL=webpack:///./application/functions/WatchYoutube.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _composition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./composition */ \"./application/composition.js\");\n/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory */ \"./application/factory.js\");\n\r\n\r\n\r\nObject(_factory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n// Composition();\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ })

/******/ });