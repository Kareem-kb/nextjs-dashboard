"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/page",{

/***/ "(app-pages-browser)/./app/ui/invoices/pagination.tsx":
/*!****************************************!*\
  !*** ./app/ui/invoices/pagination.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js\");\n/* harmony import */ var _barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ArrowLeftIcon,ArrowRightIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Pagination(param) {\n    let { totalPages } = param;\n    _s();\n    // NOTE: comment in this code when you get to this point in the course\n    // const allPages = generatePagination(currentPage, totalPages);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const currentPage = Number(searchParams.get(\"page\")) || 1;\n    const createPageURL = (pageNumber)=>{\n        const params = new URLSearchParams(searchParams);\n        params.set(\"page\", pageNumber.toString());\n        return \"\".concat(pathname, \"?\").concat(params.toString());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n}\n_s(Pagination, \"AxA9T5G2Po78UC4hL8ljCdvMciE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = Pagination;\nfunction PaginationNumber(param) {\n    let { page, href, isActive, position } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center text-sm border\", {\n        \"rounded-l-md\": position === \"first\" || position === \"single\",\n        \"rounded-r-md\": position === \"last\" || position === \"single\",\n        \"z-10 bg-blue-600 border-blue-600 text-white\": isActive,\n        \"hover:bg-gray-100\": !isActive && position !== \"middle\",\n        \"text-gray-300\": position === \"middle\"\n    });\n    return isActive || position === \"middle\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/kareemAhmad/Downloads/Personal/NextJS/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: className,\n        children: page\n    }, void 0, false, {\n        fileName: \"/Users/kareemAhmad/Downloads/Personal/NextJS/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_c1 = PaginationNumber;\nfunction PaginationArrow(param) {\n    let { href, direction, isDisabled } = param;\n    const className = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"flex h-10 w-10 items-center justify-center rounded-md border\", {\n        \"pointer-events-none text-gray-300\": isDisabled,\n        \"hover:bg-gray-100\": !isDisabled,\n        \"mr-2 md:mr-4\": direction === \"left\",\n        \"ml-2 md:ml-4\": direction === \"right\"\n    });\n    const icon = direction === \"left\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"/Users/kareemAhmad/Downloads/Personal/NextJS/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 118,\n        columnNumber: 7\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ArrowLeftIcon_ArrowRightIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        className: \"w-4\"\n    }, void 0, false, {\n        fileName: \"/Users/kareemAhmad/Downloads/Personal/NextJS/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 120,\n        columnNumber: 7\n    }, this);\n    return isDisabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: className,\n        children: icon\n    }, void 0, false, {\n        fileName: \"/Users/kareemAhmad/Downloads/Personal/NextJS/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        className: className,\n        href: href,\n        children: icon\n    }, void 0, false, {\n        fileName: \"/Users/kareemAhmad/Downloads/Personal/NextJS/nextjs-dashboard/app/ui/invoices/pagination.tsx\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, this);\n}\n_c2 = PaginationArrow;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Pagination\");\n$RefreshReg$(_c1, \"PaginationNumber\");\n$RefreshReg$(_c2, \"PaginationArrow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9wYWdpbmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU0RTtBQUNwRDtBQUNLO0FBRWtDO0FBR2hELFNBQVNNLFdBQVcsS0FBc0M7UUFBdEMsRUFBRUMsVUFBVSxFQUEwQixHQUF0Qzs7SUFDakMsc0VBQXNFO0lBRXRFLGdFQUFnRTtJQUVoRSxNQUFNQyxXQUFXSiw0REFBV0E7SUFDNUIsTUFBTUssZUFBZUosZ0VBQWVBO0lBQ3BDLE1BQU1LLGNBQWNDLE9BQU9GLGFBQWFHLEdBQUcsQ0FBQyxZQUFZO0lBRXhELE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQixNQUFNQyxTQUFTLElBQUlDLGdCQUFnQlA7UUFDbkNNLE9BQU9FLEdBQUcsQ0FBQyxRQUFRSCxXQUFXSSxRQUFRO1FBQ3RDLE9BQU8sR0FBZUgsT0FBWlAsVUFBUyxLQUFxQixPQUFsQk8sT0FBT0csUUFBUTtJQUN2QztJQUNBLHFCQUNFO0FBdUNKO0dBdER3Qlo7O1FBS0xGLHdEQUFXQTtRQUNQQyw0REFBZUE7OztLQU5kQztBQXdEeEIsU0FBU2EsaUJBQWlCLEtBVXpCO1FBVnlCLEVBQ3hCQyxJQUFJLEVBQ0pDLElBQUksRUFDSkMsUUFBUSxFQUNSQyxRQUFRLEVBTVQsR0FWeUI7SUFXeEIsTUFBTUMsWUFBWXRCLGdEQUFJQSxDQUNwQiw2REFDQTtRQUNFLGdCQUFnQnFCLGFBQWEsV0FBV0EsYUFBYTtRQUNyRCxnQkFBZ0JBLGFBQWEsVUFBVUEsYUFBYTtRQUNwRCwrQ0FBK0NEO1FBQy9DLHFCQUFxQixDQUFDQSxZQUFZQyxhQUFhO1FBQy9DLGlCQUFpQkEsYUFBYTtJQUNoQztJQUdGLE9BQU9ELFlBQVlDLGFBQWEseUJBQzlCLDhEQUFDRTtRQUFJRCxXQUFXQTtrQkFBWUo7Ozs7OzZCQUU1Qiw4REFBQ2pCLGtEQUFJQTtRQUFDa0IsTUFBTUE7UUFBTUcsV0FBV0E7a0JBQzFCSjs7Ozs7O0FBR1A7TUE3QlNEO0FBK0JULFNBQVNPLGdCQUFnQixLQVF4QjtRQVJ3QixFQUN2QkwsSUFBSSxFQUNKTSxTQUFTLEVBQ1RDLFVBQVUsRUFLWCxHQVJ3QjtJQVN2QixNQUFNSixZQUFZdEIsZ0RBQUlBLENBQ3BCLGdFQUNBO1FBQ0UscUNBQXFDMEI7UUFDckMscUJBQXFCLENBQUNBO1FBQ3RCLGdCQUFnQkQsY0FBYztRQUM5QixnQkFBZ0JBLGNBQWM7SUFDaEM7SUFHRixNQUFNRSxPQUNKRixjQUFjLHVCQUNaLDhEQUFDM0Isc0hBQWFBO1FBQUN3QixXQUFVOzs7Ozs2QkFFekIsOERBQUN2QixzSEFBY0E7UUFBQ3VCLFdBQVU7Ozs7OztJQUc5QixPQUFPSSwyQkFDTCw4REFBQ0g7UUFBSUQsV0FBV0E7a0JBQVlLOzs7Ozs2QkFFNUIsOERBQUMxQixrREFBSUE7UUFBQ3FCLFdBQVdBO1FBQVdILE1BQU1BO2tCQUMvQlE7Ozs7OztBQUdQO01BakNTSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdWkvaW52b2ljZXMvcGFnaW5hdGlvbi50c3g/ODAzMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IEFycm93TGVmdEljb24sIEFycm93UmlnaHRJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGdlbmVyYXRlUGFnaW5hdGlvbiB9IGZyb20gJ0AvYXBwL2xpYi91dGlscyc7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgdG90YWxQYWdlcyB9OiB7IHRvdGFsUGFnZXM6IG51bWJlciB9KSB7XG4gIC8vIE5PVEU6IGNvbW1lbnQgaW4gdGhpcyBjb2RlIHdoZW4geW91IGdldCB0byB0aGlzIHBvaW50IGluIHRoZSBjb3Vyc2VcblxuICAvLyBjb25zdCBhbGxQYWdlcyA9IGdlbmVyYXRlUGFnaW5hdGlvbihjdXJyZW50UGFnZSwgdG90YWxQYWdlcyk7XG5cbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgY3VycmVudFBhZ2UgPSBOdW1iZXIoc2VhcmNoUGFyYW1zLmdldCgncGFnZScpKSB8fCAxO1xuXG4gIGNvbnN0IGNyZWF0ZVBhZ2VVUkwgPSAocGFnZU51bWJlcjogbnVtYmVyIHwgc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hQYXJhbXMpO1xuICAgIHBhcmFtcy5zZXQoJ3BhZ2UnLCBwYWdlTnVtYmVyLnRvU3RyaW5nKCkpO1xuICAgIHJldHVybiBgJHtwYXRobmFtZX0/JHtwYXJhbXMudG9TdHJpbmcoKX1gO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogTk9URTogY29tbWVudCBpbiB0aGlzIGNvZGUgd2hlbiB5b3UgZ2V0IHRvIHRoaXMgcG9pbnQgaW4gdGhlIGNvdXJzZSAqL31cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXhcIj5cbiAgICAgICAgPFBhZ2luYXRpb25BcnJvd1xuICAgICAgICAgIGRpcmVjdGlvbj1cImxlZnRcIlxuICAgICAgICAgIGhyZWY9e2NyZWF0ZVBhZ2VVUkwoY3VycmVudFBhZ2UgLSAxKX1cbiAgICAgICAgICBpc0Rpc2FibGVkPXtjdXJyZW50UGFnZSA8PSAxfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAtc3BhY2UteC1weFwiPlxuICAgICAgICAgIHthbGxQYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgcG9zaXRpb246ICdmaXJzdCcgfCAnbGFzdCcgfCAnc2luZ2xlJyB8ICdtaWRkbGUnIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHBvc2l0aW9uID0gJ2ZpcnN0JztcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gYWxsUGFnZXMubGVuZ3RoIC0gMSkgcG9zaXRpb24gPSAnbGFzdCc7XG4gICAgICAgICAgICBpZiAoYWxsUGFnZXMubGVuZ3RoID09PSAxKSBwb3NpdGlvbiA9ICdzaW5nbGUnO1xuICAgICAgICAgICAgaWYgKHBhZ2UgPT09ICcuLi4nKSBwb3NpdGlvbiA9ICdtaWRkbGUnO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbk51bWJlclxuICAgICAgICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICAgICAgICBocmVmPXtjcmVhdGVQYWdlVVJMKHBhZ2UpfVxuICAgICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtjdXJyZW50UGFnZSA9PT0gcGFnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxQYWdpbmF0aW9uQXJyb3dcbiAgICAgICAgICBkaXJlY3Rpb249XCJyaWdodFwiXG4gICAgICAgICAgaHJlZj17Y3JlYXRlUGFnZVVSTChjdXJyZW50UGFnZSArIDEpfVxuICAgICAgICAgIGlzRGlzYWJsZWQ9e2N1cnJlbnRQYWdlID49IHRvdGFsUGFnZXN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBhZ2luYXRpb25OdW1iZXIoe1xuICBwYWdlLFxuICBocmVmLFxuICBpc0FjdGl2ZSxcbiAgcG9zaXRpb24sXG59OiB7XG4gIHBhZ2U6IG51bWJlciB8IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xuICBwb3NpdGlvbj86ICdmaXJzdCcgfCAnbGFzdCcgfCAnbWlkZGxlJyB8ICdzaW5nbGUnO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xzeChcbiAgICAnZmxleCBoLTEwIHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc20gYm9yZGVyJyxcbiAgICB7XG4gICAgICAncm91bmRlZC1sLW1kJzogcG9zaXRpb24gPT09ICdmaXJzdCcgfHwgcG9zaXRpb24gPT09ICdzaW5nbGUnLFxuICAgICAgJ3JvdW5kZWQtci1tZCc6IHBvc2l0aW9uID09PSAnbGFzdCcgfHwgcG9zaXRpb24gPT09ICdzaW5nbGUnLFxuICAgICAgJ3otMTAgYmctYmx1ZS02MDAgYm9yZGVyLWJsdWUtNjAwIHRleHQtd2hpdGUnOiBpc0FjdGl2ZSxcbiAgICAgICdob3ZlcjpiZy1ncmF5LTEwMCc6ICFpc0FjdGl2ZSAmJiBwb3NpdGlvbiAhPT0gJ21pZGRsZScsXG4gICAgICAndGV4dC1ncmF5LTMwMCc6IHBvc2l0aW9uID09PSAnbWlkZGxlJyxcbiAgICB9LFxuICApO1xuXG4gIHJldHVybiBpc0FjdGl2ZSB8fCBwb3NpdGlvbiA9PT0gJ21pZGRsZScgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e3BhZ2V9PC9kaXY+XG4gICkgOiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge3BhZ2V9XG4gICAgPC9MaW5rPlxuICApO1xufVxuXG5mdW5jdGlvbiBQYWdpbmF0aW9uQXJyb3coe1xuICBocmVmLFxuICBkaXJlY3Rpb24sXG4gIGlzRGlzYWJsZWQsXG59OiB7XG4gIGhyZWY6IHN0cmluZztcbiAgZGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgY2xhc3NOYW1lID0gY2xzeChcbiAgICAnZmxleCBoLTEwIHctMTAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYm9yZGVyJyxcbiAgICB7XG4gICAgICAncG9pbnRlci1ldmVudHMtbm9uZSB0ZXh0LWdyYXktMzAwJzogaXNEaXNhYmxlZCxcbiAgICAgICdob3ZlcjpiZy1ncmF5LTEwMCc6ICFpc0Rpc2FibGVkLFxuICAgICAgJ21yLTIgbWQ6bXItNCc6IGRpcmVjdGlvbiA9PT0gJ2xlZnQnLFxuICAgICAgJ21sLTIgbWQ6bWwtNCc6IGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyxcbiAgICB9LFxuICApO1xuXG4gIGNvbnN0IGljb24gPVxuICAgIGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gKFxuICAgICAgPEFycm93TGVmdEljb24gY2xhc3NOYW1lPVwidy00XCIgLz5cbiAgICApIDogKFxuICAgICAgPEFycm93UmlnaHRJY29uIGNsYXNzTmFtZT1cInctNFwiIC8+XG4gICAgKTtcblxuICByZXR1cm4gaXNEaXNhYmxlZCA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57aWNvbn08L2Rpdj5cbiAgKSA6IChcbiAgICA8TGluayBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaHJlZj17aHJlZn0+XG4gICAgICB7aWNvbn1cbiAgICA8L0xpbms+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQXJyb3dMZWZ0SWNvbiIsIkFycm93UmlnaHRJY29uIiwiY2xzeCIsIkxpbmsiLCJ1c2VQYXRobmFtZSIsInVzZVNlYXJjaFBhcmFtcyIsIlBhZ2luYXRpb24iLCJ0b3RhbFBhZ2VzIiwicGF0aG5hbWUiLCJzZWFyY2hQYXJhbXMiLCJjdXJyZW50UGFnZSIsIk51bWJlciIsImdldCIsImNyZWF0ZVBhZ2VVUkwiLCJwYWdlTnVtYmVyIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2V0IiwidG9TdHJpbmciLCJQYWdpbmF0aW9uTnVtYmVyIiwicGFnZSIsImhyZWYiLCJpc0FjdGl2ZSIsInBvc2l0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiUGFnaW5hdGlvbkFycm93IiwiZGlyZWN0aW9uIiwiaXNEaXNhYmxlZCIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/pagination.tsx\n"));

/***/ })

});