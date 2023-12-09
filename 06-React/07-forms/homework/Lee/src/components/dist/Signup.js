"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../dist/signup.css");
var Signup = function () {
    return (react_1["default"].createElement("div", { className: "signup-container" },
        react_1["default"].createElement("p", { id: "lee" }, "Lee's App"),
        react_1["default"].createElement("h1", null, "Hometown Networking"),
        react_1["default"].createElement("button", null, "Signup"),
        react_1["default"].createElement("p", { id: "terms" }, "Terms of service")));
};
exports["default"] = Signup;
