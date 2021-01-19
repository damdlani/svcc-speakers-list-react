webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/hooks/useRequest.js":
/*!*********************************!*\
  !*** ./src/hooks/useRequest.js ***!
  \*********************************/
/*! exports provided: useRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRequest", function() { return useRequest; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-notifications-component */ "./node_modules/react-notifications-component/dist/index.js");
/* harmony import */ var react_notifications_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_notifications_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_requestActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/requestActions */ "./src/actions/requestActions.js");
/* harmony import */ var _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/requestReducer */ "./src/reducers/requestReducer.js");



var _s = $RefreshSig$();






var useRequest = function useRequest(baseURL, route) {
  _s();

  var initialState = {
    records: [],
    status: _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_6__["REQUEST_STATUS"].loading,
    error: null
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(_reducers_requestReducer__WEBPACK_IMPORTED_MODULE_6__["requestReducer"], initialState),
      _useReducer$ = _useReducer[0],
      records = _useReducer$.records,
      status = _useReducer$.status,
      error = _useReducer$.error,
      dispatch = _useReducer[1];

  var signal = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(axios__WEBPACK_IMPORTED_MODULE_2___default.a.CancelToken.source());
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(baseURL, "/").concat(route), {
                cancelToken: signal.current.token
              });

            case 3:
              response = _context.sent;
              dispatch({
                type: _actions_requestActions__WEBPACK_IMPORTED_MODULE_5__["FETCH_SUCCESS"],
                records: response.data
              });
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              if (axios__WEBPACK_IMPORTED_MODULE_2___default.a.isCancel(_context.t0)) {
                console.log("Get request canceled");
              } else {
                dispatch({
                  type: _actions_requestActions__WEBPACK_IMPORTED_MODULE_5__["FETCH_FAILURE"],
                  status: _reducers_requestReducer__WEBPACK_IMPORTED_MODULE_6__["REQUEST_STATUS"].error,
                  error: _context.t0.message
                });
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }))();

    return function () {
      console.log('Component terminated and axios request canceled');
      signal.current.cancel();
    };
  }, [baseURL, route]);
  var state = {
    records: records,
    status: status,
    error: error,
    put: react__WEBPACK_IMPORTED_MODULE_3___default.a.useCallback( /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(record) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                dispatch({
                  type: _actions_requestActions__WEBPACK_IMPORTED_MODULE_5__["PUT"],
                  record: record
                });
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.put("".concat(baseURL, "/").concat(route, "/").concat(record.id), record);

              case 4:
                dispatch({
                  type: _actions_requestActions__WEBPACK_IMPORTED_MODULE_5__["PUT_SUCCESS"]
                });
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: _actions_requestActions__WEBPACK_IMPORTED_MODULE_5__["PUT_FAILURE"],
                  error: _context2.t0.message
                });

              case 10:
                ;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), [])
  };
  return state;
};

_s(useRequest, "bAJgU+925LTQ7J82F1hWllbepp8=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3QuanMiXSwibmFtZXMiOlsidXNlUmVxdWVzdCIsImJhc2VVUkwiLCJyb3V0ZSIsImluaXRpYWxTdGF0ZSIsInJlY29yZHMiLCJzdGF0dXMiLCJSRVFVRVNUX1NUQVRVUyIsImxvYWRpbmciLCJlcnJvciIsInVzZVJlZHVjZXIiLCJyZXF1ZXN0UmVkdWNlciIsImRpc3BhdGNoIiwic2lnbmFsIiwidXNlUmVmIiwiYXhpb3MiLCJDYW5jZWxUb2tlbiIsInNvdXJjZSIsInVzZUVmZmVjdCIsImdldCIsImNhbmNlbFRva2VuIiwiY3VycmVudCIsInRva2VuIiwicmVzcG9uc2UiLCJ0eXBlIiwiRkVUQ0hfU1VDQ0VTUyIsImRhdGEiLCJpc0NhbmNlbCIsImNvbnNvbGUiLCJsb2ciLCJGRVRDSF9GQUlMVVJFIiwibWVzc2FnZSIsImNhbmNlbCIsInN0YXRlIiwicHV0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInJlY29yZCIsIlBVVCIsImlkIiwiUFVUX1NVQ0NFU1MiLCJQVVRfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFFTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFBQTs7QUFDNUMsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxXQUFPLEVBQUUsRUFEVTtBQUVuQkMsVUFBTSxFQUFFQyx1RUFBYyxDQUFDQyxPQUZKO0FBR25CQyxTQUFLLEVBQUU7QUFIWSxHQUFyQjs7QUFENEMsb0JBT0dDLHdEQUFVLENBQ3ZEQyx1RUFEdUQsRUFFdkRQLFlBRnVELENBUGI7QUFBQTtBQUFBLE1BT25DQyxPQVBtQyxnQkFPbkNBLE9BUG1DO0FBQUEsTUFPMUJDLE1BUDBCLGdCQU8xQkEsTUFQMEI7QUFBQSxNQU9sQkcsS0FQa0IsZ0JBT2xCQSxLQVBrQjtBQUFBLE1BT1RHLFFBUFM7O0FBWTVDLE1BQU1DLE1BQU0sR0FBR0Msb0RBQU0sQ0FBQ0MsNENBQUssQ0FBQ0MsV0FBTixDQUFrQkMsTUFBbEIsRUFBRCxDQUFyQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxxTEFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRTBCSCw0Q0FBSyxDQUFDSSxHQUFOLFdBQWFqQixPQUFiLGNBQXdCQyxLQUF4QixHQUFpQztBQUN0RGlCLDJCQUFXLEVBQUVQLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlQztBQUQwQixlQUFqQyxDQUYxQjs7QUFBQTtBQUVTQyxzQkFGVDtBQUtHWCxzQkFBUSxDQUFDO0FBQ1BZLG9CQUFJLEVBQUVDLHFFQURDO0FBRVBwQix1QkFBTyxFQUFFa0IsUUFBUSxDQUFDRztBQUZYLGVBQUQsQ0FBUjtBQUxIO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVVHLGtCQUFJWCw0Q0FBSyxDQUFDWSxRQUFOLGFBQUosRUFBMkI7QUFDekJDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNELGVBRkQsTUFFTztBQUNMakIsd0JBQVEsQ0FBQztBQUNQWSxzQkFBSSxFQUFFTSxxRUFEQztBQUVQeEIsd0JBQU0sRUFBRUMsdUVBQWMsQ0FBQ0UsS0FGaEI7QUFHUEEsdUJBQUssRUFBRSxZQUFNc0I7QUFITixpQkFBRCxDQUFSO0FBS0Q7O0FBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7O0FBc0JBLFdBQU8sWUFBTTtBQUNYSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxpREFBWjtBQUNBaEIsWUFBTSxDQUFDUSxPQUFQLENBQWVXLE1BQWY7QUFDRCxLQUhEO0FBSUQsR0EzQlEsRUEyQk4sQ0FBQzlCLE9BQUQsRUFBVUMsS0FBVixDQTNCTSxDQUFUO0FBNkJBLE1BQU04QixLQUFLLEdBQUc7QUFDWjVCLFdBQU8sRUFBUEEsT0FEWTtBQUVaQyxVQUFNLEVBQU5BLE1BRlk7QUFHWkcsU0FBSyxFQUFMQSxLQUhZO0FBSVp5QixPQUFHLEVBQUVDLDRDQUFLLENBQUNDLFdBQU47QUFBQSxtTUFBa0Isa0JBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRW5CekIsd0JBQVEsQ0FBQztBQUNQWSxzQkFBSSxFQUFFYywyREFEQztBQUVQRCx3QkFBTSxFQUFFQTtBQUZELGlCQUFELENBQVI7QUFGbUI7QUFBQSx1QkFNYnRCLDRDQUFLLENBQUNtQixHQUFOLFdBQWFoQyxPQUFiLGNBQXdCQyxLQUF4QixjQUFpQ2tDLE1BQU0sQ0FBQ0UsRUFBeEMsR0FBOENGLE1BQTlDLENBTmE7O0FBQUE7QUFPbkJ6Qix3QkFBUSxDQUFDO0FBQ1BZLHNCQUFJLEVBQUVnQixtRUFBV0E7QUFEVixpQkFBRCxDQUFSO0FBUG1CO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV25CNUIsd0JBQVEsQ0FBQztBQUNQWSxzQkFBSSxFQUFFaUIsbUVBREM7QUFFUGhDLHVCQUFLLEVBQUUsYUFBTXNCO0FBRk4saUJBQUQsQ0FBUjs7QUFYbUI7QUFnQjNCOztBQWhCMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbEI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FpQkYsRUFqQkU7QUFKTyxHQUFkO0FBd0JBLFNBQU9FLEtBQVA7QUFDRCxDQXBFTTs7R0FBTWhDLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuNWNjMjQ5MDRlNjQ5OGZlNjUzYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAncmVhY3Qtbm90aWZpY2F0aW9ucy1jb21wb25lbnQnO1xyXG5pbXBvcnQge1xyXG4gIEZFVENIX0ZBSUxVUkUsXHJcbiAgRkVUQ0hfU1VDQ0VTUyxcclxuICBQVVRfRkFJTFVSRSxcclxuICBQVVRfU1VDQ0VTUyxcclxuICBQVVQsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvcmVxdWVzdEFjdGlvbnNcIjtcclxuaW1wb3J0IHsgcmVxdWVzdFJlZHVjZXIsIFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3JlcXVlc3RSZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUmVxdWVzdCA9IChiYXNlVVJMLCByb3V0ZSkgPT4ge1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHJlY29yZHM6IFtdLFxyXG4gICAgc3RhdHVzOiBSRVFVRVNUX1NUQVRVUy5sb2FkaW5nLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3sgcmVjb3Jkcywgc3RhdHVzLCBlcnJvciB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFxyXG4gICAgcmVxdWVzdFJlZHVjZXIsXHJcbiAgICBpbml0aWFsU3RhdGVcclxuICApO1xyXG5cclxuICBjb25zdCBzaWduYWwgPSB1c2VSZWYoYXhpb3MuQ2FuY2VsVG9rZW4uc291cmNlKCkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVVJMfS8ke3JvdXRlfWAsIHtcclxuICAgICAgICAgIGNhbmNlbFRva2VuOiBzaWduYWwuY3VycmVudC50b2tlbixcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBGRVRDSF9TVUNDRVNTLFxyXG4gICAgICAgICAgcmVjb3JkczogcmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoYXhpb3MuaXNDYW5jZWwoZXJyb3IpKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkdldCByZXF1ZXN0IGNhbmNlbGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZFVENIX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuZXJyb3IsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDb21wb25lbnQgdGVybWluYXRlZCBhbmQgYXhpb3MgcmVxdWVzdCBjYW5jZWxlZCcpO1xyXG4gICAgICBzaWduYWwuY3VycmVudC5jYW5jZWwoKTtcclxuICAgIH1cclxuICB9LCBbYmFzZVVSTCwgcm91dGVdKTtcclxuXHJcbiAgY29uc3Qgc3RhdGUgPSB7XHJcbiAgICByZWNvcmRzLFxyXG4gICAgc3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICBwdXQ6IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jIChyZWNvcmQpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBQVVQsXHJcbiAgICAgICAgICByZWNvcmQ6IHJlY29yZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBheGlvcy5wdXQoYCR7YmFzZVVSTH0vJHtyb3V0ZX0vJHtyZWNvcmQuaWR9YCwgcmVjb3JkKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBQVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBQVVRfRkFJTFVSRSxcclxuICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbjtcclxuICAgIH0sIFtdKSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=