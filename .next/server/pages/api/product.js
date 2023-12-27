"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/product";
exports.ids = ["pages/api/product"];
exports.modules = {

/***/ "(api)/./src/pages/api/product.js":
/*!**********************************!*\
  !*** ./src/pages/api/product.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/product */ \"(api)/./src/utils/product.js\");\n\nfunction handler(req, res) {\n    res.status(200).json({\n        products: _utils_product__WEBPACK_IMPORTED_MODULE_0__.products\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Byb2R1Y3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7QUFFaEMsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeENBLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUwsUUFBUUEsc0RBQUFBO0lBQUM7QUFDbEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vc3JjL3BhZ2VzL2FwaS9wcm9kdWN0LmpzPzllMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcHJvZHVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcHJvZHVjdHMgfSk7XG59XG4iXSwibmFtZXMiOlsicHJvZHVjdHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/product.js\n");

/***/ }),

/***/ "(api)/./src/utils/product.js":
/*!******************************!*\
  !*** ./src/utils/product.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"products\": () => (/* binding */ products)\n/* harmony export */ });\nconst products = [\n    {\n        id: 86,\n        CategoryId: 14,\n        categoryName: \"Cemilan\",\n        sku: \"MHZVTK\",\n        name: \"Ciki ciki\",\n        description: \"Ciki ciki yang super enak, hanya di toko klontong kami\",\n        weight: 500,\n        width: 5,\n        length: 5,\n        height: 5,\n        image: \"https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b\",\n        harga: 30000\n    },\n    {\n        id: 87,\n        CategoryId: 14,\n        categoryName: \"Cemilan\",\n        sku: \"MHZVTK\",\n        name: \"Ciki ciki\",\n        description: \"Ciki ciki yang super enak, hanya di toko klontong kami\",\n        weight: 500,\n        width: 5,\n        length: 5,\n        height: 5,\n        image: \"https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b\",\n        harga: 30000\n    },\n    {\n        id: 88,\n        CategoryId: 14,\n        categoryName: \"Cemilan\",\n        sku: \"MHZVTK\",\n        name: \"Ciki ciki\",\n        description: \"Ciki ciki yang super enak, hanya di toko klontong kami\",\n        weight: 500,\n        width: 5,\n        length: 5,\n        height: 5,\n        image: \"https://cf.shopee.co.id/file/7cb930d1bd183a435f4fb3e5cc4a896b\",\n        harga: 30000\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvcHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsV0FBVztJQUN0QjtRQUNFQyxJQUFJO1FBQ0pDLFlBQVk7UUFDWkMsY0FBYztRQUNkQyxLQUFLO1FBQ0xDLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsUUFBUTtRQUNSQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0E7UUFDRVgsSUFBSTtRQUNKQyxZQUFZO1FBQ1pDLGNBQWM7UUFDZEMsS0FBSztRQUNMQyxNQUFNO1FBQ05DLGFBQWE7UUFDYkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLE9BQU87SUFDVDtJQUNBO1FBQ0VYLElBQUk7UUFDSkMsWUFBWTtRQUNaQyxjQUFjO1FBQ2RDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxPQUFPO0lBQ1Q7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9zcmMvdXRpbHMvcHJvZHVjdC5qcz80MDJmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9kdWN0cyA9IFtcbiAge1xuICAgIGlkOiA4NixcbiAgICBDYXRlZ29yeUlkOiAxNCxcbiAgICBjYXRlZ29yeU5hbWU6IFwiQ2VtaWxhblwiLFxuICAgIHNrdTogXCJNSFpWVEtcIixcbiAgICBuYW1lOiBcIkNpa2kgY2lraVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNpa2kgY2lraSB5YW5nIHN1cGVyIGVuYWssIGhhbnlhIGRpIHRva28ga2xvbnRvbmcga2FtaVwiLFxuICAgIHdlaWdodDogNTAwLFxuICAgIHdpZHRoOiA1LFxuICAgIGxlbmd0aDogNSxcbiAgICBoZWlnaHQ6IDUsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZi5zaG9wZWUuY28uaWQvZmlsZS83Y2I5MzBkMWJkMTgzYTQzNWY0ZmIzZTVjYzRhODk2YlwiLFxuICAgIGhhcmdhOiAzMDAwMCxcbiAgfSxcbiAge1xuICAgIGlkOiA4NyxcbiAgICBDYXRlZ29yeUlkOiAxNCxcbiAgICBjYXRlZ29yeU5hbWU6IFwiQ2VtaWxhblwiLFxuICAgIHNrdTogXCJNSFpWVEtcIixcbiAgICBuYW1lOiBcIkNpa2kgY2lraVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNpa2kgY2lraSB5YW5nIHN1cGVyIGVuYWssIGhhbnlhIGRpIHRva28ga2xvbnRvbmcga2FtaVwiLFxuICAgIHdlaWdodDogNTAwLFxuICAgIHdpZHRoOiA1LFxuICAgIGxlbmd0aDogNSxcbiAgICBoZWlnaHQ6IDUsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZi5zaG9wZWUuY28uaWQvZmlsZS83Y2I5MzBkMWJkMTgzYTQzNWY0ZmIzZTVjYzRhODk2YlwiLFxuICAgIGhhcmdhOiAzMDAwMCxcbiAgfSxcbiAge1xuICAgIGlkOiA4OCxcbiAgICBDYXRlZ29yeUlkOiAxNCxcbiAgICBjYXRlZ29yeU5hbWU6IFwiQ2VtaWxhblwiLFxuICAgIHNrdTogXCJNSFpWVEtcIixcbiAgICBuYW1lOiBcIkNpa2kgY2lraVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNpa2kgY2lraSB5YW5nIHN1cGVyIGVuYWssIGhhbnlhIGRpIHRva28ga2xvbnRvbmcga2FtaVwiLFxuICAgIHdlaWdodDogNTAwLFxuICAgIHdpZHRoOiA1LFxuICAgIGxlbmd0aDogNSxcbiAgICBoZWlnaHQ6IDUsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9jZi5zaG9wZWUuY28uaWQvZmlsZS83Y2I5MzBkMWJkMTgzYTQzNWY0ZmIzZTVjYzRhODk2YlwiLFxuICAgIGhhcmdhOiAzMDAwMCxcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsicHJvZHVjdHMiLCJpZCIsIkNhdGVnb3J5SWQiLCJjYXRlZ29yeU5hbWUiLCJza3UiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJ3ZWlnaHQiLCJ3aWR0aCIsImxlbmd0aCIsImhlaWdodCIsImltYWdlIiwiaGFyZ2EiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/utils/product.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/product.js"));
module.exports = __webpack_exports__;

})();