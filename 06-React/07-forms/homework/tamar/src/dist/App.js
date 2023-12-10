"use strict";
exports.__esModule = true;
require("./App.css");
var Login_1 = require("./component/Login");
var react_1 = require("react");
function App() {
    var _a = react_1.useState({}), user = _a[0], setUser = _a[1];
    var _b = react_1.useState(false), userOn = _b[0], setUserOn = _b[1];
    var handelApprovUser = function (userObjID) {
        console.log("at handelApprovUser the userObj.id is:", userObjID);
        setUser(userObjID);
        setUserOn(true);
        sessionStorage.setItem("userObj", userObjID);
    };
    console.log(user);
    return (React.createElement(React.Fragment, null,
        React.createElement(Login_1["default"], { handelApprovUser: handelApprovUser })));
}
exports["default"] = App;
