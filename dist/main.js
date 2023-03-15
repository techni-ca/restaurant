/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageContact)\n/* harmony export */ });\nfunction pageContact () {\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageHome)\n/* harmony export */ });\nfunction pageHome () {\r\n  const home = document.createElement('div')\r\n  home.style.display = 'flex'\r\n  home.style.flexDirection = 'column'\r\n\r\n  const logo = document.createElement('img')\r\n  logo.src = './logo.png'\r\n  logo.alt = 'restaurant logo'\r\n  logo.height = '150'\r\n  logo.width = '380'\r\n  logo.style.alignSelf = 'center'\r\n  logo.style.border = '5px solid black'\r\n  logo.style.borderRadius = '15px'\r\n  logo.style.margin = '50px'\r\n  home.appendChild(logo)\r\n\r\n  const heading = document.createElement('h2')\r\n  heading.style.textDecoration = 'wavy underline'\r\n  heading.style.margin = '20px 50px'\r\n  heading.textContent = 'Welcome to Restaurante Italiano!'\r\n  home.appendChild(heading)\r\n\r\n  const blurb = document.createElement('p')\r\n  blurb.style.fontSize = 'large'\r\n  blurb.style.margin = '0px 50px 50px 50px'\r\n  blurb.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At laudantium velit porro consectetur ea eveniet non voluptate tempora placeat? Sit quos perferendis nemo illo quasi nostrum sed! Praesentium, molestias expedita.'\r\n  home.appendChild(blurb)\r\n\r\n  return home\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tab_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-bar.js */ \"./src/tab-bar.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content')\r\n\r\ncontent.appendChild(\r\n  (0,_tab_bar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['HOME', 'MENU', 'CONTACT'], [_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]])\r\n)\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageMenu)\n/* harmony export */ });\nfunction pageMenu () {\r\n\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/tab-bar.js":
/*!************************!*\
  !*** ./src/tab-bar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tabBar)\n/* harmony export */ });\nfunction tabBar (tabNames, tabFunctions) {\r\n  const tabbedPage = document.createElement('div')\r\n  const BG_COLOR = 'orange'\r\n  const TAB_COLOR = 'yellow'\r\n  const BORDER = '2px solid red'\r\n\r\n  function selectTab (tab) {\r\n    const tabs = bar.children\r\n    for (let i = 0; i < 3; i++) {\r\n      if (i === tab) {\r\n        tabs[i].style.backgroundColor = BG_COLOR\r\n        tabs[i].style.borderBottom = 'none'\r\n      } else {\r\n        tabs[i].style.backgroundColor = TAB_COLOR\r\n        tabs[i].style.border = BORDER\r\n      }\r\n    }\r\n    tabbedPage.replaceChildren(tabFunctions[tab]())\r\n    return true\r\n  }\r\n\r\n  tabbedPage.style.border = BORDER\r\n  tabbedPage.style.borderTop = 'none'\r\n  tabbedPage.style.backgroundColor = BG_COLOR\r\n\r\n  const bar = document.createElement('div')\r\n  bar.style.display = 'flex'\r\n  bar.style.justifyContent = 'start'\r\n  bar.style.border = 'none'\r\n\r\n  for (let i = 0; i < 3; i++) {\r\n    const tab = document.createElement('button')\r\n    tab.textContent = tabNames[i]\r\n    tab.style.flexBasis = '10rem'\r\n    tab.style.borderTopLeftRadius = '5px'\r\n    tab.style.borderTopRightRadius = '5px'\r\n    tab.addEventListener('click', () => selectTab(i))\r\n    bar.appendChild(tab)\r\n  }\r\n\r\n  const empty = document.createElement('div')\r\n  empty.style.flex = '1'\r\n  empty.style.border = 'none'\r\n  empty.style.borderBottom = BORDER\r\n  bar.appendChild(empty)\r\n\r\n  selectTab(0)\r\n\r\n  const page = document.createElement('div')\r\n  page.style.display = 'flex'\r\n  page.style.flexDirection = 'column'\r\n  page.style.border = 'none'\r\n  page.appendChild(bar)\r\n  page.appendChild(tabbedPage)\r\n  return page\r\n}\r\n\n\n//# sourceURL=webpack://restaurant/./src/tab-bar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;