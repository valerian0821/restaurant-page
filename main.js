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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 16px;\n}\n\ndiv {\n    padding: 10px;\n}\n\ndiv > div {\n    width: 500px\n}\n\nheader {\n    padding: 15px;\n    background-color: red;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n}\n\nh1 {\n    font-weight: bold;\n    font-size: 2.5rem;\n    text-align: center;\n}\n\nh2 {\n    font-weight: bold;\n    font-size: 1.8rem;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\nh3 {\n    font-weight: bold;\n    font-size: 1.2rem;\n}\n\n.nav-btn {\n    width: 100px;\n    height: 40px;\n    text-align: center;\n    padding: 5px;\n    border: 1px solid black;\n}\n\n.flex-center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.active {\n    font-weight: bold;\n}\n\n.menu > p {\n    margin-left: 20px;\n    margin-bottom: 20px;\n}\n\n.contact {\n    text-align: center;\n}\n\n.contact > h3 {\n    margin-bottom: 5px;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding-top: 30px;\n    gap: 40px;\n}\n\nbody, #content {\n    background-color: orange;\n}\n\n#info-div > p {\n    margin-bottom: 5px;\n}\n\n#hours-div, #location-div {\n    text-align: center;\n}\n\n#slogan {\n    font-weight: bold;\n    font-style: italic;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContactContent: () => (/* binding */ ContactContent)\n/* harmony export */ });\n\nconst ContactContent = (function () {\n    const content = document.getElementById(\"content\");\n\n    const generateContactTitle = () => {\n        const contactDiv = document.createElement(\"div\");\n        content.appendChild(contactDiv);\n\n        const contact = document.createElement(\"h1\");\n        contact.textContent = \"Contact Us\";\n        contactDiv.appendChild(contact);\n    }\n\n    const generatefirstContact = () => {\n        const firstContactDiv = document.createElement(\"div\");\n        firstContactDiv.classList.add(\"contact\");\n        content.appendChild(firstContactDiv);\n\n        const firstContactName = document.createElement(\"h3\");\n        firstContactName.textContent = \"Mario\";\n        firstContactDiv.appendChild(firstContactName);\n\n        const firstContactRole = document.createElement(\"p\");\n        const firstContactNumber = document.createElement(\"p\");\n        const firstContactEmail = document.createElement(\"p\");\n\n        firstContactRole.textContent = \"Owner\";\n        firstContactNumber.textContent = \"555-555-5554\";\n        firstContactEmail.textContent = \"mariorealemail@notfake.com\";\n\n        firstContactDiv.appendChild(firstContactRole);\n        firstContactDiv.appendChild(firstContactNumber);\n        firstContactDiv.appendChild(firstContactEmail);\n    }\n\n    const generateSecondContact = () => {\n        const secondContactDiv = document.createElement(\"div\");\n        content.appendChild(secondContactDiv);\n\n        const secondContactName = document.createElement(\"h3\");\n        secondContactName.textContent = \"Luigi\";\n        secondContactDiv.classList.add(\"contact\");\n        secondContactDiv.appendChild(secondContactName);\n\n        const secondContactRole = document.createElement(\"p\");\n        const secondContactNumber = document.createElement(\"p\");\n        const secondContactEmail = document.createElement(\"p\");\n\n        secondContactRole.textContent = \"Head Chef\";\n        secondContactNumber.textContent = \"555-555-5555\";\n        secondContactEmail.textContent = \"luigirealemail@notfake.com\";\n\n        secondContactDiv.appendChild(secondContactRole);\n        secondContactDiv.appendChild(secondContactNumber);\n        secondContactDiv.appendChild(secondContactEmail);\n    }\n\n    const generateThirdContact = () => {\n        const thirdContactDiv = document.createElement(\"div\");\n        content.appendChild(thirdContactDiv);\n\n        const thirdContactName = document.createElement(\"h3\");\n        thirdContactName.textContent = \"Wario\";\n        thirdContactDiv.classList.add(\"contact\");\n        thirdContactDiv.appendChild(thirdContactName);\n\n        const thirdContactRole = document.createElement(\"p\");\n        const thirdContactNumber = document.createElement(\"p\");\n        const thirdContactEmail = document.createElement(\"p\");\n\n        thirdContactRole.textContent = \"Waitor\";\n        thirdContactNumber.textContent = \"555-555-5556\";\n        thirdContactEmail.textContent = \"wariorealemail@notfake.com\";\n\n        thirdContactDiv.appendChild(thirdContactRole);\n        thirdContactDiv.appendChild(thirdContactNumber);\n        thirdContactDiv.appendChild(thirdContactEmail);\n    }\n\n    return {\n        generateContactTitle, generatefirstContact, generateSecondContact, generateThirdContact\n    }\n})();\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomePageContent: () => (/* binding */ HomePageContent)\n/* harmony export */ });\n\nconst HomePageContent = (function () {\n    const content = document.getElementById(\"content\");\n\n    const generateTitle = () => {\n        const titleDiv = document.createElement(\"div\");\n        titleDiv.classList.add(\"flex-center\");\n        content.appendChild(titleDiv);\n\n        const title = document.createElement(\"h1\");\n        title.textContent = \"Inferno Pizzeria\";\n        titleDiv.appendChild(title);\n    }\n\n    const generateInfo = () => {\n        const infoDiv = document.createElement(\"div\");\n        infoDiv.id = \"info-div\";\n        content.appendChild(infoDiv);\n\n        const info = document.createElement(\"p\");\n        info.textContent = `Inferno Pizzeria is a bold, flame-kissed pizza joint specializing in wood-fired pizzas with\n            crispy, charred crusts and unique, mouthwatering toppings. Whether you're craving a classic Margherita or \n            something a little more daring—like our Spicy Honey Pepperoni—Inferno brings the heat with every bite.`;\n\n        const slogan = document.createElement(\"p\");\n        slogan.id = \"slogan\";\n        slogan.textContent = \"'Where Every Slice Is Fire!'\";\n\n        infoDiv.appendChild(info);\n        infoDiv.appendChild(slogan);\n    }\n\n    const generateHours = () => {\n        const hoursDiv = document.createElement(\"div\");\n        content.appendChild(hoursDiv);\n\n        const hours = document.createElement(\"h2\");\n        hours.textContent = \"Hours\";\n        hoursDiv.id = \"hours-div\";\n        hoursDiv.appendChild(hours);\n\n        const monday = document.createElement(\"p\");\n        const tuesday = document.createElement(\"p\");\n        const wednesday = document.createElement(\"p\");\n        const thursday = document.createElement(\"p\");\n        const friday = document.createElement(\"p\");\n        const saturday = document.createElement(\"p\");\n        const sunday = document.createElement(\"p\");\n\n        monday.textContent = (\"Monday: 11:00AM - 10:00PM\");\n        tuesday.textContent = (\"Tueday: 11:00AM - 10:00PM\");\n        wednesday.textContent = (\"Wednesday: 11:00AM - 10:00PM\");\n        thursday.textContent = (\"Thursday: 11:00AM - 11:00AM\");\n        friday.textContent = (\"Friday: 11:00AM - 12:00AM\");\n        saturday.textContent = (\"Saturday: 12:00PM - 12:00AM\");\n        sunday.textContent = (\"Sunday: 12:00PM - 9:00AM\");\n\n        hoursDiv.appendChild(monday);\n        hoursDiv.appendChild(tuesday);\n        hoursDiv.appendChild(wednesday);\n        hoursDiv.appendChild(thursday);\n        hoursDiv.appendChild(friday);\n        hoursDiv.appendChild(saturday);\n        hoursDiv.appendChild(sunday);\n    }\n\n    const generateLocation = () => {\n        const locationDiv = document.createElement(\"div\");\n        locationDiv.id = \"location-div\";\n        content.appendChild(locationDiv);\n\n        const locationHeader = document.createElement(\"h2\");\n        locationHeader.textContent = \"Location\";\n        locationDiv.appendChild(locationHeader);\n\n        const location = document.createElement(\"p\");\n        location.textContent = \"1325 Firestone Blvd, Ember City, FL 32890\"\n        locationDiv.appendChild(location);\n    }\n\n    return {\n        generateTitle, generateInfo, generateHours, generateLocation\n    }\n})();\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nfunction generateHomePage() {\n    _home_js__WEBPACK_IMPORTED_MODULE_1__.HomePageContent.generateTitle();\n    _home_js__WEBPACK_IMPORTED_MODULE_1__.HomePageContent.generateInfo();\n    _home_js__WEBPACK_IMPORTED_MODULE_1__.HomePageContent.generateHours();\n    _home_js__WEBPACK_IMPORTED_MODULE_1__.HomePageContent.generateLocation();\n}\n\nfunction generateMenuPage() {\n    _menu_js__WEBPACK_IMPORTED_MODULE_2__.MenuContent.generateMenuTitle();\n    _menu_js__WEBPACK_IMPORTED_MODULE_2__.MenuContent.generateStarters();\n    _menu_js__WEBPACK_IMPORTED_MODULE_2__.MenuContent.generatePizzas();\n    _menu_js__WEBPACK_IMPORTED_MODULE_2__.MenuContent.generateSides();\n    _menu_js__WEBPACK_IMPORTED_MODULE_2__.MenuContent.generateDesserts();\n    _menu_js__WEBPACK_IMPORTED_MODULE_2__.MenuContent.generateDrinks();\n}\n\nfunction generateContactPage() {\n    _contact_js__WEBPACK_IMPORTED_MODULE_3__.ContactContent.generateContactTitle();\n    _contact_js__WEBPACK_IMPORTED_MODULE_3__.ContactContent.generatefirstContact();\n    _contact_js__WEBPACK_IMPORTED_MODULE_3__.ContactContent.generateSecondContact();\n    _contact_js__WEBPACK_IMPORTED_MODULE_3__.ContactContent.generateThirdContact();\n}\n\nfunction activateNavBar() {\n    nav.addEventListener(\"click\", handleNavListener);\n}\n\nfunction handleNavListener(event) {\n    if (event.target.classList.contains(\"nav-btn\")) {\n        toggleBtns();\n        content.textContent = \"\";\n        event.target.classList.toggle(\"active\", true);\n        if (event.target.id === \"home\") {\n            generateHomePage();\n        } else if (event.target.id === \"menu\") {\n            generateMenuPage();\n        } else {\n            generateContactPage();\n        } \n    }\n}\n\nfunction toggleBtns() {\n    const btns = nav.children;\n    for (let i = 0; i < btns.length; i++) {\n        btns[i].classList.toggle(\"active\", false);\n    }\n}\n\nfunction initializePage() { \n    generateHomePage();\n    const homeBtn = document.getElementById(\"home\");\n    homeBtn.classList.toggle(\"active\", true);\n    activateNavBar();\n}\n\nconst content = document.getElementById(\"content\");\nconst nav = document.querySelector(\"nav\"); \ninitializePage();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuContent: () => (/* binding */ MenuContent)\n/* harmony export */ });\n\nconst MenuContent = (function () {\n    const content = document.getElementById(\"content\");\n\n    const generateMenuTitle = () => {\n        const menuDiv = document.createElement(\"div\");\n        content.appendChild(menuDiv);\n\n        const menu = document.createElement(\"h1\");\n        menu.textContent = \"Menu\";\n        menuDiv.appendChild(menu);\n    }\n    \n    const generateStarters = () => {\n        const startersDiv = document.createElement(\"div\");\n        content.appendChild(startersDiv);\n\n        const starters = document.createElement(\"h2\");\n        starters.textContent = \"Starters\";\n        startersDiv.classList.add(\"menu\");\n        startersDiv.appendChild(starters);\n\n        const startersItem1 = document.createElement(\"h3\");\n        startersItem1.textContent = \"Garlic Inferno Knots - $5.99\";\n        const item1Info = document.createElement(\"p\");\n        item1Info.textContent = `Wood-fired garlic knots with parmesan and spicy marinara`;\n\n        const startersItem2 = document.createElement(\"h3\");\n        startersItem2.textContent = \"Blistered Burrata - $10.99\";\n        const item2Info = document.createElement(\"p\");\n        item2Info.textContent = `Fire-roasted cherry tomatoes, creamy burrata, fresh basil, and balsamic glaze`;\n\n        const startersItem3 = document.createElement(\"h3\");\n        startersItem3.textContent = \"Truffle Parmesan Fries - $8.99\";\n        const item3Info = document.createElement(\"p\");\n        item3Info.textContent = `Crispy hand-cut fries tossed in truffle oil and parmesan`;\n\n        startersDiv.appendChild(startersItem1);\n        startersDiv.appendChild(item1Info);\n        startersDiv.appendChild(startersItem2);\n        startersDiv.appendChild(item2Info);\n        startersDiv.appendChild(startersItem3);\n        startersDiv.appendChild(item3Info);\n    }\n\n    const generatePizzas = () => {\n        const pizzaDiv = document.createElement(\"div\");\n        content.appendChild(pizzaDiv);\n\n        const pizzas = document.createElement(\"h2\");\n        pizzas.textContent = \"Pizzas\";\n        pizzaDiv.classList.add(\"menu\");\n        pizzaDiv.appendChild(pizzas);\n\n        const pizza1 = document.createElement(\"h3\");\n        pizza1.textContent = \"Smoky Pepperoni - $14.99\";\n        const pizza1Info = document.createElement(\"p\");\n        pizza1Info.textContent = `Double pepperoni, smoked mozzarella, and chili-infused honey`;\n\n        const pizza2 = document.createElement(\"h3\");\n        pizza2.textContent = \"Triple Cheese Melt - $14.99\";\n        const pizza2Info = document.createElement(\"p\");\n        pizza2Info.textContent = `Mozzarella, provolone, aged parmesan, and garlic butter`;\n\n        const pizza3 = document.createElement(\"h3\");\n        pizza3.textContent = \"The Hellfire - $16.99\";\n        const pizza3Info = document.createElement(\"p\");\n        pizza3Info.textContent = `Ghost pepper-infused tomato sauce, spicy sausage, jalapeños, and red pepper flakes`;\n\n        const pizza4 = document.createElement(\"h3\");\n        pizza4.textContent = \"Mushroom Madness - $16.49\";\n        const pizza4Info = document.createElement(\"p\");\n        pizza4Info.textContent = `Wild mushrooms, garlic cream sauce, ricotta, and truffle oil`;\n\n        const pizza5 = document.createElement(\"h3\");\n        pizza5.textContent = \"The Green Inferno - $14.99\";\n        const pizza5Info = document.createElement(\"p\");\n        pizza5Info.textContent = `Pesto base, fresh arugula, sun-dried tomatoes, goat cheese`;\n\n        pizzaDiv.appendChild(pizza1);\n        pizzaDiv.appendChild(pizza1Info);\n        pizzaDiv.appendChild(pizza2);\n        pizzaDiv.appendChild(pizza2Info);\n        pizzaDiv.appendChild(pizza3);\n        pizzaDiv.appendChild(pizza3Info);\n        pizzaDiv.appendChild(pizza4);\n        pizzaDiv.appendChild(pizza4Info);\n        pizzaDiv.appendChild(pizza5);\n        pizzaDiv.appendChild(pizza5Info);\n    }\n\n    const generateSides = () => {\n        const sidesDiv = document.createElement(\"div\");\n        content.appendChild(sidesDiv);\n\n        const sides = document.createElement(\"h2\");\n        sides.textContent = \"Sides\";\n        sidesDiv.classList.add(\"menu\");\n        sidesDiv.appendChild(sides);\n\n        const sides1 = document.createElement(\"h3\");\n        sides1.textContent = \"Ember Caesar - $9.99\";\n        const sides1Info = document.createElement(\"p\");\n        sides1Info.textContent = `Grilled romaine, parmesan crisp, house-made dressing`;\n\n        const sides2 = document.createElement(\"h3\");\n        sides2.textContent = \"Caprese Explosion - $10.49\";\n        const sides2Info = document.createElement(\"p\");\n        sides2Info.textContent = `Fire-roasted tomatoes, fresh basil, burrata, balsamic reduction`;\n\n        const sides3 = document.createElement(\"h3\");\n        sides3.textContent = \"Charred Veggie Platter - $9.49\";\n        const sides3Info = document.createElement(\"p\");\n        sides3Info.textContent = `Seasonal fire-grilled vegetables with lemon aioli`;\n\n        sidesDiv.appendChild(sides1);\n        sidesDiv.appendChild(sides1Info);\n        sidesDiv.appendChild(sides2);\n        sidesDiv.appendChild(sides2Info);\n        sidesDiv.appendChild(sides3);\n        sidesDiv.appendChild(sides3Info);\n    }\n\n    const generateDesserts = () => {\n        const dessertsDiv = document.createElement(\"div\");\n        content.appendChild(dessertsDiv);\n\n        const desserts = document.createElement(\"h2\");\n        desserts.textContent = \"Desserts\";\n        dessertsDiv.classList.add(\"menu\");\n        dessertsDiv.appendChild(desserts);\n\n        const desserts1 = document.createElement(\"h3\");\n        desserts1.textContent = \"S'mores Calzone - $9.99\";\n        const desserts1Info = document.createElement(\"p\");\n        desserts1Info.textContent = `Melted marshmallow, graham cracker crumble, and dark chocolate`;\n\n        const desserts2 = document.createElement(\"h3\");\n        desserts2.textContent = \"Cinnamon Sugar Knots - $7.49\";\n        const desserts2Info = document.createElement(\"p\");\n        desserts2Info.textContent = `Warm dough knots coated in cinnamon sugar and served with caramel dip`;\n\n        dessertsDiv.appendChild(desserts1);\n        dessertsDiv.appendChild(desserts1Info);\n        dessertsDiv.appendChild(desserts2);\n        dessertsDiv.appendChild(desserts2Info);\n    }\n\n    const generateDrinks = () => {\n        const drinksDiv = document.createElement(\"div\");\n        content.appendChild(drinksDiv);\n\n        const drinks = document.createElement(\"h2\");\n        drinks.textContent = \"Drinks\";\n        drinksDiv.classList.add(\"menu\");\n        drinksDiv.appendChild(drinks);\n\n        const drinks1 = document.createElement(\"h3\");\n        drinks1.textContent = \"Flaming Pineapple Mule - $9.99\";\n        const drinks1Info = document.createElement(\"p\");\n        drinks1Info.textContent = `Spicy ginger beer, fresh pineapple, and lime vodka`;\n\n        const drinks2 = document.createElement(\"h3\");\n        drinks2.textContent = \"House Sangria - $8.99\";\n        const drinks2Info = document.createElement(\"p\");\n        drinks2Info.textContent = `A mix of citrus, red wine, and a hint of fire-roasted oranges`;\n\n        drinksDiv.appendChild(drinks1);\n        drinksDiv.appendChild(drinks1Info);\n        drinksDiv.appendChild(drinks2);\n        drinksDiv.appendChild(drinks2Info);\n    }\n\n    return {\n        generateMenuTitle, generateStarters, generatePizzas, generateSides, generateDesserts, generateDrinks\n    }\n})();\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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