"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
require("./index.css");
var AuthProvider_tsx_1 = require("./context/AuthProvider.tsx");
client_1["default"].createRoot(document.getElementById("root")).render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(AuthProvider_tsx_1.AuthProvider, null,
        react_1["default"].createElement(App_tsx_1["default"], null))));
