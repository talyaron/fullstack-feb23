"use strict";
exports.__esModule = true;
require("./dist/login.css");
var react_1 = require("react");
var userAPI_1 = require("../api/userAPI");
var Login = function (_a) {
    var handelApprovUser = _a.handelApprovUser;
    var _b = react_1.useState(""), userName = _b[0], setUsername = _b[1];
    var _c = react_1.useState(""), userPassword = _c[0], setUserPassword = _c[1];
    var handleLogin = function (ev) {
        ev.preventDefault();
        var respond = userAPI_1.getLoginUser(userName, userPassword);
        console.log(respond);
        if (!respond)
            throw new Error("NO USER FOUND!");
        handelApprovUser(respond);
    };
    return (React.createElement("div", { className: 'loginbody' },
        React.createElement("header", null, "App name"),
        React.createElement("h2", { className: 'textcolorperpul' }, "Login"),
        React.createElement("form", { onSubmit: handleLogin },
            React.createElement("input", { type: 'text', id: 'username', name: 'username', placeholder: 'username', value: userName, onInput: function (ev) { setUsername(ev.target.value); } }),
            React.createElement("input", { type: 'password', id: 'password', name: 'password', placeholder: 'Password', value: userPassword, onInput: function (ev) { setUserPassword(ev.target.value); } }),
            React.createElement("button", { id: 'loginBTN, center' }, "Login")),
        React.createElement("a", null, "Forget your password?"),
        React.createElement("footer", null,
            React.createElement("p", null, "--------- o ---------"),
            React.createElement("button", { className: 'textcolorperpul, btnsignin, center' }, "Singin"))));
};
exports["default"] = Login;
