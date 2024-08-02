"use strict";
(self["webpackChunkwasm_add"] = self["webpackChunkwasm_add"] || []).push([[1],[
/* 0 */,
/* 1 */
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _wasm_add_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),
/* harmony export */   add: () => (/* reexport safe */ _wasm_add_bg_js__WEBPACK_IMPORTED_MODULE_0__.add)
/* harmony export */ });
/* harmony import */ var _wasm_add_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _wasm_add_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_add_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);
_wasm_add_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


(0,_wasm_add_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_wasm_add_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),
/* 2 */
/***/ ((module, exports, __webpack_require__) => {

module.exports = __webpack_require__.v(exports, module.id, "7d436644300b31b6539d");

/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),
/* harmony export */   add: () => (/* binding */ add)
/* harmony export */ });
let wasm;
function __wbg_set_wasm(val) {
    wasm = val;
}

/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
function add(a, b) {
    const ret = wasm.add(a, b);
    return ret;
}



/***/ })
]]);