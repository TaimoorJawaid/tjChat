"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Auth; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\taimo\\OneDrive\\Desktop\\chatt\\nextjs-chat-tutorial\\pages\\index.js",
    _s = $RefreshSig$();







function Auth() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context),
      setUsername = _useContext.setUsername,
      setSecret = _useContext.setSecret; // eecd6d4d-c78a-41a9-8392-8f19386c525b


  function onSubmit(e) {}

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "background",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "auth-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        className: "auth-form",
        onSubmit: function onSubmit(e) {
          return e.preventDefault();
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "auth-title",
          children: "Taimoor Chat app"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            placeholder: "Email",
            className: "text-input",
            required: true,
            onChange: function onChange(e) {
              return setUsername(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            placeholder: "password",
            type: "password",
            className: "text-input",
            required: true,
            onChange: function onChange(e) {
              return setSecret(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          type: "submit",
          className: "submit-button",
          children: "login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

_s(Auth, "/OYTktaRtGIWupLP/uq8+Eg5KXA=");

_c = Auth;

var _c;

$RefreshReg$(_c, "Auth");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzZjODkzN2QxYWEyOTZjY2ViMjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU00sSUFBVCxHQUFnQjtBQUFBOztBQUM3QixvQkFBK0JELGlEQUFVLENBQUNILDZDQUFELENBQXpDO0FBQUEsTUFBTUssV0FBTixlQUFNQSxXQUFOO0FBQUEsTUFBa0JDLFNBQWxCLGVBQWtCQSxTQUFsQixDQUQ2QixDQUU3Qjs7O0FBQ0EsV0FBU0MsUUFBVCxDQUFrQkMsQ0FBbEIsRUFBcUIsQ0FFcEI7O0FBQ0Qsc0JBQ0E7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsNkJBQ0U7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQTRCLGdCQUFRLEVBQUUsa0JBQUFBLENBQUM7QUFBQSxpQkFBR0EsQ0FBQyxDQUFDQyxjQUFGLEVBQUg7QUFBQSxTQUF2QztBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0U7QUFDQSx1QkFBVyxFQUFDLE9BRFo7QUFFQSxxQkFBUyxFQUFDLFlBRlY7QUFHQSxvQkFBUSxNQUhSO0FBSUEsb0JBQVEsRUFBRSxrQkFBQ0QsQ0FBRDtBQUFBLHFCQUFPSCxXQUFXLENBQUNHLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQWNFO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNFO0FBQ0EsdUJBQVcsRUFBQyxVQURaO0FBRUEsZ0JBQUksRUFBRyxVQUZQO0FBR0EscUJBQVMsRUFBQyxZQUhWO0FBSUEsb0JBQVEsTUFKUjtBQUtBLG9CQUFRLEVBQUUsa0JBQUNILENBQUQ7QUFBQSxxQkFBT0YsU0FBUyxDQUFDRSxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEYsZUF1QkU7QUFDQSxjQUFJLEVBQUcsUUFEUDtBQUVBLG1CQUFTLEVBQUMsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQW9DRDs7R0ExQ3VCUDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0XCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKCkge1xyXG4gIGNvbnN0e3NldFVzZXJuYW1lLHNldFNlY3JldH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgLy8gZWVjZDZkNGQtYzc4YS00MWE5LTgzOTItOGYxOTM4NmM1MjViXHJcbiAgZnVuY3Rpb24gb25TdWJtaXQoZSkge1xyXG4gICAgXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtY29udGFpbmVyXCIgPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIiBvblN1Ym1pdD17ZSA9PmUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLXRpdGxlXCI+XHJcbiAgICAgICAgICBUYWltb29yIENoYXQgYXBwXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIGVtYWlsIHRleHQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIHBhc3N3b3JkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZSA9ICdwYXNzd29yZCdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5wdXRcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VjcmV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGUgPSAnc3VibWl0J1xyXG4gICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250ZXh0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJ1c2VDb250ZXh0IiwiQXV0aCIsInNldFVzZXJuYW1lIiwic2V0U2VjcmV0Iiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=