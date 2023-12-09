"use strict";
exports.__esModule = true;
exports.AuthProvider = exports.AuthContext = void 0;
var react_1 = require("react");
exports.AuthContext = react_1.createContext(undefined);
exports.AuthProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState({}), auth = _b[0], setAuth = _b[1];
    return (react_1["default"].createElement(exports.AuthContext.Provider, { value: { auth: auth, setAuth: setAuth } }, children));
};
exports["default"] = exports.AuthContext;
