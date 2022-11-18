/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Crete+Round&family=Poppins&family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  min-height: 100vh;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  background-color: rgb(158, 147, 185);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.todays-to-do h1 {\\r\\n  color: white;\\r\\n  margin-top: 45px;\\r\\n}\\r\\n\\r\\n.todays-to-do h1:hover {\\r\\n  background: blue;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nform {\\r\\n  margin-top: 25px;\\r\\n  background: #fff;\\r\\n}\\r\\n\\r\\nform input {\\r\\n  width: 250px;\\r\\n  height: 40px;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  padding: 0 5px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nform button {\\r\\n  width: 50px;\\r\\n  height: 40px;\\r\\n  border: none;\\r\\n  background: teal;\\r\\n  color: white;\\r\\n  outline: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nul li {\\r\\n  width: 100%;\\r\\n  background: rgb(168, 40, 168);\\r\\n  height: 40px;\\r\\n  line-height: 40px;\\r\\n  padding: 0 5px;\\r\\n  position: relative;\\r\\n  cursor: pointer;\\r\\n  display: block;\\r\\n  margin: 5px 0;\\r\\n  box-shadow: -3px 6px 4px #354;\\r\\n}\\r\\n\\r\\n.to-do {\\r\\n  width: 40%;\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  border: 1px solid #ccc;\\r\\n  background-color: rgb(116, 58, 96);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.todays-to-do {\\r\\n  padding: 15px;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n  font-weight: bold;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.add-list {\\r\\n  padding: 15px;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  margin-top: 25px;\\r\\n  background: #fff;\\r\\n}\\r\\n\\r\\n.add-list input {\\r\\n  font-style: italic;\\r\\n  width: 500%;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-size: 0.95rem;\\r\\n}\\r\\n\\r\\n.btn-clear {\\r\\n  display: block;\\r\\n  margin-top: auto;\\r\\n  border: 1px solid #ccc;\\r\\n  padding: 15px 0;\\r\\n  color: rgb(138, 133, 133);\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.add-task {\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.do-list {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\n.do-list li {\\r\\n  padding: 15px;\\r\\n  border-bottom: 1px solid #ccc;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.task-description {\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-size: 0.9rem;\\r\\n  width: 100%;\\r\\n  height: 40px;\\r\\n  background: white;\\r\\n  color: rgb(122, 33, 33);\\r\\n  padding-left: 1px;\\r\\n}\\r\\n\\r\\n.check,\\r\\n.actions {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 15px;\\r\\n}\\r\\n\\r\\n.edit,\\r\\n.del {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _modules_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task.js */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/edit.js */ \"./src/modules/edit.js\");\n/* harmony import */ var _modules_all_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/all.js */ \"./src/modules/all.js\");\n/* harmony import */ var _modules_local_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/local.js */ \"./src/modules/local.js\");\n/* harmony import */ var _modules_local_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_local_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nconst form = document.getElementById('add-to-list');\nconst btnClear = document.querySelector('.btn-clear');\n\n_modules_all_js__WEBPACK_IMPORTED_MODULE_3__.lists.addEventListener('click', (e) => {\n  const task = e.target.parentElement.parentElement;\n  if (e.target.classList.contains('del')) {\n    (0,_modules_all_js__WEBPACK_IMPORTED_MODULE_3__.deleteTask)(task, e.target);\n  }\n\n  if (e.target.classList.contains('edit')) {\n    const res = (0,_modules_edit_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(task);\n    (0,_modules_local_js__WEBPACK_IMPORTED_MODULE_4__.setItem)(res);\n  }\n  if (e.target.classList.contains('checkbox')) {\n    const tasks = JSON.parse(localStorage.getItem('tasks'));\n    (0,_modules_task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target, tasks);\n  }\n});\n\nbtnClear.addEventListener('click', () => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  const filterTasks = tasks.filter((task) => task.completed === false);\n  filterTasks.forEach((item, ind) => {\n    item.index = ind + 1;\n  });\n  let updatedList = '';\n  filterTasks.forEach((task) => {\n    updatedList += (0,_modules_all_js__WEBPACK_IMPORTED_MODULE_3__.displayTask)(task);\n  });\n  _modules_all_js__WEBPACK_IMPORTED_MODULE_3__.lists.innerHTML = updatedList;\n  localStorage.setItem('tasks', JSON.stringify(filterTasks));\n});\n\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const task = document.getElementById('task');\n  // addTask(task.value);\n  (0,_modules_all_js__WEBPACK_IMPORTED_MODULE_3__.loadList)(task.value);\n  task.value = '';\n});\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/TaskCRUD.js":
/*!*********************************!*\
  !*** ./src/modules/TaskCRUD.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"loadList\": () => (/* binding */ loadList)\n/* harmony export */ });\n/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local.js */ \"./src/modules/local.js\");\n/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_local_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all.js */ \"./src/modules/all.js\");\n\n\n\n// adding taks\nconst addTask = (task) => {\n  const taskObj = {};\n  taskObj.index = _local_js__WEBPACK_IMPORTED_MODULE_0__.taskArr.length + 1;\n  taskObj.description = task;\n  taskObj.completed = false;\n  if (taskObj !== null) { _local_js__WEBPACK_IMPORTED_MODULE_0__.taskArr.push(taskObj); }\n  // localStorage.setItem('tasks', JSON.stringify(taskArr));\n  // setItem(taskArr);\n  return _local_js__WEBPACK_IMPORTED_MODULE_0__.taskArr;\n};\n\nconst loadList = (value) => {\n  const updatedList = addTask(value);\n  (0,_local_js__WEBPACK_IMPORTED_MODULE_0__.setItem)(updatedList);\n  if (updatedList) {\n    _all_js__WEBPACK_IMPORTED_MODULE_1__.lists.innerHTML = '';\n    const tasks = JSON.parse(localStorage.getItem('tasks'));\n    tasks.forEach((task) => {\n      const listItem = (0,_all_js__WEBPACK_IMPORTED_MODULE_1__.displayTask)(task);\n      _all_js__WEBPACK_IMPORTED_MODULE_1__.lists.insertAdjacentHTML('beforeend', listItem);\n    });\n  }\n//  lists.innerHTML = updatedList;\n};\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/TaskCRUD.js?");

/***/ }),

/***/ "./src/modules/all.js":
/*!****************************!*\
  !*** ./src/modules/all.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteTask\": () => (/* reexport safe */ _remove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"displayTask\": () => (/* binding */ displayTask),\n/* harmony export */   \"lists\": () => (/* binding */ lists),\n/* harmony export */   \"loadList\": () => (/* binding */ loadList),\n/* harmony export */   \"taskArr\": () => (/* binding */ taskArr)\n/* harmony export */ });\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.js */ \"./src/modules/remove.js\");\n\n\nconst { loadList } = __webpack_require__(/*! ./TaskCRUD.js */ \"./src/modules/TaskCRUD.js\");\nconst { taskArr } = __webpack_require__(/*! ./local.js */ \"./src/modules/local.js\");\n\n// const taskArr = JSON.parse(localStorage.getItem('tasks')) || [];\nconst lists = document.getElementById('to-do-list');\n\n// display task\nconst displayTask = (task) => {\n  const listItem = `\n  <li>\n    <div class=\"check\">\n      <input type=\"checkbox\" name=\"checkbox\" class=\"checkbox\" id=\"${task.description}\">\n      <input type=\"text\" class=\"task-description\" name=\"${task.description}\" class=\"task-name\" id=\"task-name\" value=\"${task.description}\">\n    </div>\n    <div class=\"actions\">\n      <i class=\"fa-solid fa-pen-to-square edit\"></i>\n      <i class=\"fa-solid fa-trash-can del\"></i>\n    </div>\n  </li>`;\n  return listItem;\n};\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  // displaying tasks on window loading\n  tasks.forEach((task) => {\n    const listItem = displayTask(task);\n    lists.insertAdjacentHTML('beforeend', listItem);\n  });\n\n  const completedTasksIndex = tasks.filter((task) => task.completed === true);\n  for (let i = 0; i < completedTasksIndex.length; i += 1) {\n    for (let j = 0; j < (lists.children).length; j += 1) {\n      if (j === (completedTasksIndex[i].index - 1)) {\n        lists.children[j].children[0].children[0].checked = true;\n      }\n    }\n  }\n});\n\n\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/all.js?");

/***/ }),

/***/ "./src/modules/edit.js":
/*!*****************************!*\
  !*** ./src/modules/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local.js */ \"./src/modules/local.js\");\n/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_local_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst editTask = (task) => {\n  // const tasks = JSON.parse(localStorage.getItem('tasks'));\n  // const tasks = getItem();\n  const tasks = _local_js__WEBPACK_IMPORTED_MODULE_0__.taskArr;\n  if (typeof window !== 'undefined') {\n    const taskItem = task.children[0].children[1].name;\n    const taskIndex = tasks.findIndex((x) => x.description === taskItem);\n    const taskName = task.querySelector('#task-name').value;\n    tasks.forEach((task, i) => {\n      if (i === parseInt(taskIndex, 10)) {\n        tasks[i].index = i + 1;\n        tasks[i].description = taskName;\n        tasks[i].completed = false;\n      }\n    });\n    return tasks;\n  }\n  return task;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/edit.js?");

/***/ }),

/***/ "./src/modules/local.js":
/*!******************************!*\
  !*** ./src/modules/local.js ***!
  \******************************/
/***/ ((module) => {

eval("const taskArr = JSON.parse(localStorage.getItem('tasks')) || [];\n\nconst setItem = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));\n\nconst getItem = () => {\n  taskArr.push(JSON.parse(localStorage.getItem('tasks')));\n  return taskArr;\n};\n\nmodule.exports = { setItem, getItem, taskArr };\n\n//# sourceURL=webpack://webpack-demo/./src/modules/local.js?");

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local.js */ \"./src/modules/local.js\");\n/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_local_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst deleteTask = (task, element) => {\n  const taskName = task.children[0].children[1].value;\n  // const tasks = JSON.parse(localStorage.getItem('tasks'));\n  const tasks = _local_js__WEBPACK_IMPORTED_MODULE_0__.taskArr;\n  const taskIndex = tasks.findIndex((x) => x.description === taskName);\n  tasks.splice(taskIndex, 1);\n  tasks.forEach((item, ind) => {\n    item.index = ind + 1;\n  });\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n  element.parentElement.parentElement.remove();\n  return true;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);\n\n\n//# sourceURL=webpack://webpack-demo/./src/modules/remove.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateTaskStatus = (el, tasks) => {\n  el.addEventListener('change', (e) => {\n    const taskIndex = tasks.findIndex((x) => x.description === e.target.id);\n    if (e.target.checked) {\n      tasks[taskIndex].completed = true;\n    } else {\n      tasks[taskIndex].completed = false;\n    }\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  });\n  return true;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTaskStatus);\n\n//# sourceURL=webpack://webpack-demo/./src/modules/task.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);