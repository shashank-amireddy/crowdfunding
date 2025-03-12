/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Arrow\": function() { return /* reexport safe */ _Arrow__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; },\n/* harmony export */   \"Card\": function() { return /* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; },\n/* harmony export */   \"Close\": function() { return /* reexport safe */ _Close__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; },\n/* harmony export */   \"Footer\": function() { return /* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   \"Hero\": function() { return /* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; },\n/* harmony export */   \"ICON\": function() { return /* reexport safe */ _ICON__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; },\n/* harmony export */   \"Logo\": function() { return /* reexport safe */ _Logo__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; },\n/* harmony export */   \"Menu\": function() { return /* reexport safe */ _menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; },\n/* harmony export */   \"NavBar\": function() { return /* reexport default from dynamic */ _NavBar__WEBPACK_IMPORTED_MODULE_1___default.a; },\n/* harmony export */   \"PupUp\": function() { return /* reexport safe */ _PupUp__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.jsx\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hero */ \"./components/Hero.jsx\");\n/* harmony import */ var _PupUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PupUp */ \"./components/PupUp.jsx\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ \"./components/Card.jsx\");\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo */ \"./components/Logo.jsx\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ \"./components/menu.jsx\");\n/* harmony import */ var _ICON__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ICON */ \"./components/ICON.jsx\");\n/* harmony import */ var _Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Close */ \"./components/Close.jsx\");\n/* harmony import */ var _Arrow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Arrow */ \"./components/Arrow.jsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNBO0FBQ0o7QUFDRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDQTtBQUVpRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luZGV4LmpzPzUwZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vTmF2QmFyXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi9IZXJvXCI7XG5pbXBvcnQgUHVwVXAgZnJvbSBcIi4vUHVwVXBcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBJQ09OIGZyb20gXCIuL0lDT05cIjtcbmltcG9ydCBDbG9zZSBmcm9tIFwiLi9DbG9zZVwiO1xuaW1wb3J0IEFycm93IGZyb20gXCIuL0Fycm93XCI7XG5cbmV4cG9ydCB7IE5hdkJhciwgRm9vdGVyLCBIZXJvLCBDYXJkLCBQdXBVcCwgTG9nbywgTWVudSwgSUNPTiwgQ2xvc2UsIEFycm93IH07XG4iXSwibmFtZXMiOlsiRm9vdGVyIiwiTmF2QmFyIiwiSGVybyIsIlB1cFVwIiwiQ2FyZCIsIkxvZ28iLCJNZW51IiwiSUNPTiIsIkNsb3NlIiwiQXJyb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/index.js\n"));

/***/ })

});