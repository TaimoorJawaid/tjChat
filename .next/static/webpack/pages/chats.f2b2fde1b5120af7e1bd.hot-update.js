"use strict";
self["webpackHotUpdate_N_E"]("pages/chats",{

/***/ "./pages/chats.js":
/*!************************!*\
  !*** ./pages/chats.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Chats; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\taimo\\OneDrive\\Desktop\\chatt\\nextjs-chat-tutorial\\pages\\chats.js",
    _s = $RefreshSig$();






var ChatEngine = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "node_modules_react-chat-engine_dist_index_modern_js").then(__webpack_require__.bind(__webpack_require__, /*! react-chat-engine */ "./node_modules/react-chat-engine/dist/index.modern.js")).then(function (module) {
    return module.ChatEngine;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-chat-engine */ "./node_modules/react-chat-engine/dist/index.modern.js")];
    },
    modules: ["chats.js -> " + "react-chat-engine"]
  }
});
_c2 = ChatEngine;
var MessageFormSocial = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ "node_modules_react-chat-engine_dist_index_modern_js").then(__webpack_require__.bind(__webpack_require__, /*! react-chat-engine */ "./node_modules/react-chat-engine/dist/index.modern.js")).then(function (module) {
    return module.MessageFormSocial;
  });
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-chat-engine */ "./node_modules/react-chat-engine/dist/index.modern.js")];
    },
    modules: ["chats.js -> " + "react-chat-engine"]
  }
});
_c4 = MessageFormSocial;
function Chats() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context),
      username = _useContext.username,
      secret = _useContext.secret;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      showChat = _useState[0],
      setShowChat = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (username.length === 0 || secret.length === 0) route;
  });
  if (!showChat) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 25
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "background",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "shadow",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ChatEngine, {
        height: "calc(100vh - 150px)",
        projectID: "608a4078-e705-4e2a-a016-84a1eb9518a3",
        userName: username,
        userSecret: secret
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 3
  }, this);
}

_s(Chats, "EDXLNIGA4dukpCKKjnbUdSOzGvw=");

_c5 = Chats;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "ChatEngine$dynamic");
$RefreshReg$(_c2, "ChatEngine");
$RefreshReg$(_c3, "MessageFormSocial$dynamic");
$RefreshReg$(_c4, "MessageFormSocial");
$RefreshReg$(_c5, "Chats");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhdHMuZjJiMmZkZTFiNTEyMGFmN2UxYmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBOztBQUdBLElBQU1PLFVBQVUsR0FBR0QsbURBQU8sTUFBQztBQUFBLFNBQ3pCLG1PQUE2QkUsSUFBN0IsQ0FBa0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVdBLE1BQU0sQ0FBQ0YsVUFBbEI7QUFBQSxHQUFsQyxDQUR5QjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQ2hCLGdGQURnQjtBQUFBO0FBQUEsK0JBQ2hCLG1CQURnQjtBQUFBO0FBQUEsRUFBMUI7TUFBTUE7QUFLTixJQUFNRyxpQkFBaUIsR0FBR0osbURBQU8sT0FBQztBQUFBLFNBQ2hDLG1PQUE2QkUsSUFBN0IsQ0FBa0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVdBLE1BQU0sQ0FBQ0MsaUJBQWxCO0FBQUEsR0FBbEMsQ0FEZ0M7QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUN2QixnRkFEdUI7QUFBQTtBQUFBLCtCQUN2QixtQkFEdUI7QUFBQTtBQUFBLEVBQWpDO01BQU1BO0FBR1MsU0FBU0MsS0FBVCxHQUFpQjtBQUFBOztBQUU5QixvQkFBMkJSLGlEQUFVLENBQUNDLDZDQUFELENBQXJDO0FBQUEsTUFBT1EsUUFBUCxlQUFPQSxRQUFQO0FBQUEsTUFBaUJDLE1BQWpCLGVBQWlCQSxNQUFqQjs7QUFDQSxrQkFBZ0NaLCtDQUFRLENBQUMsS0FBRCxDQUF4QztBQUFBLE1BQU9hLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUFiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksT0FBT2MsUUFBUCxLQUFvQixJQUF4QixFQUE4QjtBQUM1QkQsTUFBQUEsV0FBVyxDQUFDLElBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FKUSxDQUFUO0FBTUFiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlVLFFBQVEsQ0FBQ0ssTUFBVCxLQUFtQixDQUFuQixJQUF3QkosTUFBTSxDQUFDSSxNQUFQLEtBQWtCLENBQTlDLEVBQWlEQyxLQUFLO0FBQ3ZELEdBRlEsQ0FBVDtBQUtBLE1BQUksQ0FBQ0osUUFBTCxFQUFlLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdmLHNCQUNBO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsNkJBQ0UsOERBQUMsVUFBRDtBQUNFLGNBQU0sRUFBRyxxQkFEWDtBQUVFLGlCQUFTLEVBQUcsc0NBRmQ7QUFHRSxnQkFBUSxFQUFJRixRQUhkO0FBSUUsa0JBQVUsRUFBSUM7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREE7QUFZRDs7R0EvQnVCRjs7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge0NvbnRleHR9IGZyb20gJy4uL2NvbnRleHQnO1xyXG5cclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIlxyXG5cclxuXHJcbmNvbnN0IENoYXRFbmdpbmUgPSBkeW5hbWljKCgpID0+XHJcbiAgaW1wb3J0IChcInJlYWN0LWNoYXQtZW5naW5lXCIpLnRoZW4oKG1vZHVsZSk9PiBtb2R1bGUuQ2hhdEVuZ2luZSlcclxuXHJcbik7XHJcblxyXG5jb25zdCBNZXNzYWdlRm9ybVNvY2lhbCA9IGR5bmFtaWMoKCkgPT5cclxuICBpbXBvcnQgKFwicmVhY3QtY2hhdC1lbmdpbmVcIikudGhlbigobW9kdWxlKT0+IG1vZHVsZS5NZXNzYWdlRm9ybVNvY2lhbClcclxuKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0cygpIHtcclxuXHJcbiAgY29uc3Qge3VzZXJuYW1lLCBzZWNyZXR9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcclxuICBjb25zdCBbc2hvd0NoYXQsIHNldFNob3dDaGF0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgc2V0U2hvd0NoYXQodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcm5hbWUubGVuZ3RoID09PTAgfHwgc2VjcmV0Lmxlbmd0aCA9PT0gMCkgcm91dGVcclxuICB9KTtcclxuXHJcblxyXG4gIGlmICghc2hvd0NoYXQpIHJldHVybiA8ZGl2IC8+O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCI+XHJcbiAgICAgIDxDaGF0RW5naW5lIFxyXG4gICAgICAgIGhlaWdodCA9IFwiY2FsYygxMDB2aCAtIDE1MHB4KVwiXHJcbiAgICAgICAgcHJvamVjdElEID0gXCI2MDhhNDA3OC1lNzA1LTRlMmEtYTAxNi04NGExZWI5NTE4YTNcIlxyXG4gICAgICAgIHVzZXJOYW1lID0ge3VzZXJuYW1lfVxyXG4gICAgICAgIHVzZXJTZWNyZXQgPSB7c2VjcmV0fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJkeW5hbWljIiwiQ2hhdEVuZ2luZSIsInRoZW4iLCJtb2R1bGUiLCJNZXNzYWdlRm9ybVNvY2lhbCIsIkNoYXRzIiwidXNlcm5hbWUiLCJzZWNyZXQiLCJzaG93Q2hhdCIsInNldFNob3dDaGF0IiwiZG9jdW1lbnQiLCJsZW5ndGgiLCJyb3V0ZSJdLCJzb3VyY2VSb290IjoiIn0=