webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/DataContext */ "./src/contexts/DataContext.js");
/* harmony import */ var _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/requestReducer */ "./src/reducers/requestReducer.js");
/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Speaker/Speaker */ "./src/components/Speaker/Speaker.js");
/* harmony import */ var _SpeakersSearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SpeakersSearchBar/SearchBar */ "./src/components/SpeakersSearchBar/SearchBar.js");



var _jsxFileName = "C:\\dev\\Speakers\\src\\components\\Speakers\\Speakers.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var SpeakersComponent = function SpeakersComponent() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      searchQuery = _useState[0],
      setSearchQuery = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__["DataContext"]),
      speakers = _useContext.records,
      status = _useContext.status,
      error = _useContext.error,
      put = _useContext.put;

  var specialMessage = "";

  if (status === _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_4__["REQUEST_STATUS"].loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "spinner"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }, _this);
  }

  if (status === _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_4__["REQUEST_STATUS"].error) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "text-red-600 text-center",
      children: ["An error occured. Check your internet connection and try again.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 72
      }, _this), " ", "ERROR MESSAGE: ".concat(error)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_SpeakersSearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_6__["SearchBar"], {
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), specialMessage && specialMessage.length > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "bg-yellow-300 border-l-8 border-yellow-500 text-black-700 p-4 text-2xl",
      role: "alert",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        className: "font-bold",
        children: "Special Message"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: specialMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12",
      children: speakers.filter(function (_ref) {
        var firstName = _ref.firstName,
            lastName = _ref.lastName;
        var targetString = "".concat(firstName, " ").concat(lastName).toLowerCase();
        return !searchQuery.trim() ? true : targetString.includes(searchQuery.trim().toLowerCase());
      }).map(function (speaker) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_5__["Speaker"], _objectSpread(_objectSpread({}, speaker), {}, {
          put: put
        }), speaker.id, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_s(SpeakersComponent, "NTf2dUqURQ5UVN6Ikgt4etJhK2o=");

_c = SpeakersComponent;

var Speakers = function Speakers(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__["DataProvider"], {
    baseURL: "https://my-json-server.typicode.com",
    route: "damdlani/svcc-speakers-list-react/speakers",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SpeakersComponent, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);
};

_c2 = Speakers;
/* harmony default export */ __webpack_exports__["default"] = (Speakers);

var _c, _c2;

$RefreshReg$(_c, "SpeakersComponent");
$RefreshReg$(_c2, "Speakers");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanMiXSwibmFtZXMiOlsiU3BlYWtlcnNDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic2V0U2VhcmNoUXVlcnkiLCJ1c2VDb250ZXh0IiwiRGF0YUNvbnRleHQiLCJzcGVha2VycyIsInJlY29yZHMiLCJzdGF0dXMiLCJlcnJvciIsInB1dCIsInNwZWNpYWxNZXNzYWdlIiwiUkVRVUVTVF9TVEFUVVMiLCJsb2FkaW5nIiwibGVuZ3RoIiwiZmlsdGVyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ0YXJnZXRTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJpbmNsdWRlcyIsIm1hcCIsInNwZWFrZXIiLCJpZCIsIlNwZWFrZXJzIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUN2QkMsV0FEdUI7QUFBQSxNQUNWQyxjQURVOztBQUFBLG9CQUdvQkMsd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FIOUI7QUFBQSxNQUdiQyxRQUhhLGVBR3RCQyxPQUhzQjtBQUFBLE1BR0hDLE1BSEcsZUFHSEEsTUFIRztBQUFBLE1BR0tDLEtBSEwsZUFHS0EsS0FITDtBQUFBLE1BR1lDLEdBSFosZUFHWUEsR0FIWjs7QUFLOUIsTUFBTUMsY0FBYyxHQUFHLEVBQXZCOztBQUVBLE1BQUlILE1BQU0sS0FBS0ksdUVBQWMsQ0FBQ0MsT0FBOUIsRUFBdUM7QUFDckMsd0JBQU87QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxNQUFJTCxNQUFNLEtBQUtJLHVFQUFjLENBQUNILEtBQTlCLEVBQXFDO0FBQ25DLHdCQUNFO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQUEsaUdBQ2lFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEakUsRUFDMkUsR0FEM0UsMkJBRXFCQSxLQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQU1EOztBQUVELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsc0VBQUQ7QUFBVyxpQkFBVyxFQUFFUCxXQUF4QjtBQUFxQyxvQkFBYyxFQUFFQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR1EsY0FBYyxJQUFJQSxjQUFjLENBQUNHLE1BQWYsR0FBd0IsQ0FBMUMsaUJBQ0M7QUFDRSxlQUFTLEVBQUMsd0VBRFo7QUFFRSxVQUFJLEVBQUMsT0FGUDtBQUFBLDhCQUlFO0FBQUcsaUJBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRTtBQUFBLGtCQUFJSDtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQVlFO0FBQUssZUFBUyxFQUFDLHVEQUFmO0FBQUEsZ0JBQ0dMLFFBQVEsQ0FDTlMsTUFERixDQUNTLGdCQUE2QjtBQUFBLFlBQTFCQyxTQUEwQixRQUExQkEsU0FBMEI7QUFBQSxZQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDbkMsWUFBTUMsWUFBWSxHQUFHLFVBQUdGLFNBQUgsY0FBZ0JDLFFBQWhCLEVBQTJCRSxXQUEzQixFQUFyQjtBQUNBLGVBQU8sQ0FBQ2pCLFdBQVcsQ0FBQ2tCLElBQVosRUFBRCxHQUNILElBREcsR0FFSEYsWUFBWSxDQUFDRyxRQUFiLENBQXNCbkIsV0FBVyxDQUFDa0IsSUFBWixHQUFtQkQsV0FBbkIsRUFBdEIsQ0FGSjtBQUdELE9BTkYsRUFPRUcsR0FQRixDQU9NLFVBQUNDLE9BQUQ7QUFBQSw0QkFDSCxxRUFBQyx3REFBRCxrQ0FBOEJBLE9BQTlCO0FBQXVDLGFBQUcsRUFBRWI7QUFBNUMsWUFBY2EsT0FBTyxDQUFDQyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURHO0FBQUEsT0FQTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQS9DRDs7R0FBTXhCLGlCOztLQUFBQSxpQjs7QUFpRE4sSUFBTXlCLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUMxQixzQkFDRSxxRUFBQyxrRUFBRDtBQUNFLFdBQU8sRUFBQyxxQ0FEVjtBQUVFLFNBQUssRUFBQyw0Q0FGUjtBQUFBLDJCQUlFLHFFQUFDLGlCQUFELG9CQUF1QkEsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVEQ7O01BQU1ELFE7QUFXU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuOGJkODc5OWI2YmVlYTNkNzk0M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCwgRGF0YVByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0RhdGFDb250ZXh0XCI7XHJcbmltcG9ydCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uLy4uL3JlZHVjZXJzL3JlcXVlc3RSZWR1Y2VyXCI7XHJcbmltcG9ydCB7IFNwZWFrZXIgfSBmcm9tIFwiLi4vU3BlYWtlci9TcGVha2VyXCI7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCIuLi9TcGVha2Vyc1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcclxuXHJcbmNvbnN0IFNwZWFrZXJzQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHsgcmVjb3Jkczogc3BlYWtlcnMsIHN0YXR1cywgZXJyb3IsIHB1dCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IHNwZWNpYWxNZXNzYWdlID0gXCJcIjtcclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMubG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lclwiIC8+O1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuZXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgQW4gZXJyb3Igb2NjdXJlZC4gQ2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uIGFuZCB0cnkgYWdhaW4uPGJyPjwvYnI+e1wiIFwifVxyXG4gICAgICAgIHtgRVJST1IgTUVTU0FHRTogJHtlcnJvcn1gfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9IC8+XHJcbiAgICAgIHtzcGVjaWFsTWVzc2FnZSAmJiBzcGVjaWFsTWVzc2FnZS5sZW5ndGggPiAwICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy15ZWxsb3ctMzAwIGJvcmRlci1sLTggYm9yZGVyLXllbGxvdy01MDAgdGV4dC1ibGFjay03MDAgcC00IHRleHQtMnhsXCJcclxuICAgICAgICAgIHJvbGU9XCJhbGVydFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+U3BlY2lhbCBNZXNzYWdlPC9wPlxyXG4gICAgICAgICAgPHA+e3NwZWNpYWxNZXNzYWdlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBncmlkLWNvbHMtMSBnYXAtMTJcIj5cclxuICAgICAgICB7c3BlYWtlcnNcclxuICAgICAgICAgIC5maWx0ZXIoKHsgZmlyc3ROYW1lLCBsYXN0TmFtZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke2ZpcnN0TmFtZX0gJHtsYXN0TmFtZX1gLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiAhc2VhcmNoUXVlcnkudHJpbSgpXHJcbiAgICAgICAgICAgICAgPyB0cnVlXHJcbiAgICAgICAgICAgICAgOiB0YXJnZXRTdHJpbmcuaW5jbHVkZXMoc2VhcmNoUXVlcnkudHJpbSgpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5tYXAoKHNwZWFrZXIpID0+IChcclxuICAgICAgICAgICAgPFNwZWFrZXIga2V5PXtzcGVha2VyLmlkfSB7Li4uc3BlYWtlcn0gcHV0PXtwdXR9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEYXRhUHJvdmlkZXJcclxuICAgICAgYmFzZVVSTD1cImh0dHBzOi8vbXktanNvbi1zZXJ2ZXIudHlwaWNvZGUuY29tXCJcclxuICAgICAgcm91dGU9XCJkYW1kbGFuaS9zdmNjLXNwZWFrZXJzLWxpc3QtcmVhY3Qvc3BlYWtlcnNcIlxyXG4gICAgPlxyXG4gICAgICA8U3BlYWtlcnNDb21wb25lbnQgey4uLnByb3BzfSAvPlxyXG4gICAgPC9EYXRhUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9