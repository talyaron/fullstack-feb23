"use strict";
exports.__esModule = true;
require("./App.css");
var Login_1 = require("./component/Login");
var react_1 = require("react");
function App() {
    var _a = react_1.useState({}), user = _a[0], setUser = _a[1];
    var handelApprovUser = function (userObj) {
        setUser(userObj);
        sessionStorage.setItem("userObj", userObj);
    };
    console.log(user);
    return (React.createElement(React.Fragment, null,
        React.createElement(Login_1["default"], { handelApprovUser: handelApprovUser })));
}
exports["default"] = App;
