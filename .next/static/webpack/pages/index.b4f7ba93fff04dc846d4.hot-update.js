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
      username = _useContext.username,
      secret = _useContext.secret,
      setUsername = _useContext.setUsername,
      setSecret = _useContext.setSecret;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(); // eecd6d4d-c78a-41a9-8392-8f19386c525b

  function onSubmit(e) {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;
    axios__WEBPACK_IMPORTED_MODULE_3___default().put('https://api.chatengine.io/users/', {
      username: username,
      secret: secret
    }, {
      headers: {
        "Private-key": 'eecd6d4d-c78a-41a9-8392-8f19386c525b'
      }
    }).then(function (r) {
      return router.push('/chats');
    });
  }

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
          lineNumber: 27,
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
            lineNumber: 32,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
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
            lineNumber: 41,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          type: "submit",
          className: "submit-button",
          children: "login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, this);
}

_s(Auth, "hmkMGSp/fRfdUTrIaI8TK+UFKxU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjRmN2JhOTNmZmYwNGRjODQ2ZDQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU08sSUFBVCxHQUFnQjtBQUFBOztBQUM3QixvQkFBaURELGlEQUFVLENBQUNKLDZDQUFELENBQTNEO0FBQUEsTUFBTU0sUUFBTixlQUFNQSxRQUFOO0FBQUEsTUFBZ0JDLE1BQWhCLGVBQWdCQSxNQUFoQjtBQUFBLE1BQXdCQyxXQUF4QixlQUF3QkEsV0FBeEI7QUFBQSxNQUFvQ0MsU0FBcEMsZUFBb0NBLFNBQXBDOztBQUNBLE1BQU1SLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEIsQ0FGNkIsQ0FHN0I7O0FBQ0EsV0FBU1EsUUFBVCxDQUFrQkMsQ0FBbEIsRUFBcUI7QUFDbkJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLFFBQUlOLFFBQVEsQ0FBQ08sTUFBVCxLQUFtQixDQUFuQixJQUF3Qk4sTUFBTSxDQUFDTSxNQUFQLEtBQWtCLENBQTlDLEVBQWlEO0FBQ2pEVixJQUFBQSxnREFBQSxDQUNFLGtDQURGLEVBRUU7QUFBQ0csTUFBQUEsUUFBUSxFQUFSQSxRQUFEO0FBQVdDLE1BQUFBLE1BQU0sRUFBTkE7QUFBWCxLQUZGLEVBR0U7QUFBQ1EsTUFBQUEsT0FBTyxFQUFDO0FBQUMsdUJBQWU7QUFBaEI7QUFBVCxLQUhGLEVBTUNDLElBTkQsQ0FNTSxVQUFBQyxDQUFDO0FBQUEsYUFBSWhCLE1BQU0sQ0FBQ2lCLElBQVAsQ0FBWSxRQUFaLENBQUo7QUFBQSxLQU5QO0FBT0Q7O0FBQ0Qsc0JBQ0E7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsNkJBQ0U7QUFBTSxpQkFBUyxFQUFDLFdBQWhCO0FBQTRCLGdCQUFRLEVBQUUsa0JBQUFQLENBQUM7QUFBQSxpQkFBR0EsQ0FBQyxDQUFDQyxjQUFGLEVBQUg7QUFBQSxTQUF2QztBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0U7QUFDQSx1QkFBVyxFQUFDLE9BRFo7QUFFQSxxQkFBUyxFQUFDLFlBRlY7QUFHQSxvQkFBUSxNQUhSO0FBSUEsb0JBQVEsRUFBRSxrQkFBQ0QsQ0FBRDtBQUFBLHFCQUFPSCxXQUFXLENBQUNHLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQWNFO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNFO0FBQ0EsdUJBQVcsRUFBQyxVQURaO0FBRUEsZ0JBQUksRUFBRyxVQUZQO0FBR0EscUJBQVMsRUFBQyxZQUhWO0FBSUEsb0JBQVEsTUFKUjtBQUtBLG9CQUFRLEVBQUUsa0JBQUNULENBQUQ7QUFBQSxxQkFBT0YsU0FBUyxDQUFDRSxDQUFDLENBQUNRLE1BQUYsQ0FBU0MsS0FBVixDQUFoQjtBQUFBO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZEYsZUF1QkU7QUFDQSxjQUFJLEVBQUcsUUFEUDtBQUVBLG1CQUFTLEVBQUMsZUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQW9DRDs7R0FuRHVCZjtVQUVQSDs7O0tBRk9HIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDb250ZXh0fSBmcm9tIFwiLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgcm91dGVyLCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKCkge1xyXG4gIGNvbnN0e3VzZXJuYW1lLCBzZWNyZXQgLHNldFVzZXJuYW1lLHNldFNlY3JldH0gPSB1c2VDb250ZXh0KENvbnRleHQpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAvLyBlZWNkNmQ0ZC1jNzhhLTQxYTktODM5Mi04ZjE5Mzg2YzUyNWJcclxuICBmdW5jdGlvbiBvblN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGlmICh1c2VybmFtZS5sZW5ndGggPT09MCB8fCBzZWNyZXQubGVuZ3RoID09PSAwKSByZXR1cm5cclxuICAgIGF4aW9zLnB1dChcclxuICAgICAgJ2h0dHBzOi8vYXBpLmNoYXRlbmdpbmUuaW8vdXNlcnMvJyxcclxuICAgICAge3VzZXJuYW1lLCBzZWNyZXR9LFxyXG4gICAgICB7aGVhZGVyczp7XCJQcml2YXRlLWtleVwiOiAnZWVjZDZkNGQtYzc4YS00MWE5LTgzOTItOGYxOTM4NmM1MjViJ319XHJcblxyXG4gICAgKVxyXG4gICAgLnRoZW4ociA9PiByb3V0ZXIucHVzaCgnL2NoYXRzJykpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtY29udGFpbmVyXCIgPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIiBvblN1Ym1pdD17ZSA9PmUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLXRpdGxlXCI+XHJcbiAgICAgICAgICBUYWltb29yIENoYXQgYXBwXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIGVtYWlsIHRleHQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIHBhc3N3b3JkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZSA9ICdwYXNzd29yZCdcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5wdXRcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VjcmV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGUgPSAnc3VibWl0J1xyXG4gICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwiYXhpb3MiLCJ1c2VDb250ZXh0IiwiQXV0aCIsInVzZXJuYW1lIiwic2VjcmV0Iiwic2V0VXNlcm5hbWUiLCJzZXRTZWNyZXQiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsInB1dCIsImhlYWRlcnMiLCJ0aGVuIiwiciIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=