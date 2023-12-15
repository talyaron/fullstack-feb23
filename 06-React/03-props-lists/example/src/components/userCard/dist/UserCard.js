"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UserCard = function (_a) {
    var email = _a.email, username = _a.username;
    return (react_1["default"].createElement("div", { style: { border: "1px solid black" } },
        react_1["default"].createElement("h1", null, username),
        react_1["default"].createElement("p", null, email)));
};
exports["default"] = UserCard;
