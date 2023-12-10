"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
// 1. create an effect that run once when the component is mounting only. in that effect, change the title to your name only once.
// 2. create a button, onClick, change the title of the doctument to the amount clicked. make sure the component still gets your name whrn mounting.
var TitleTask = function () {
    var _a = react_2.useState(""), title = _a[0], setTitle = _a[1];
    var _b = react_2.useState(0), counter = _b[0], setCounter = _b[1];
    react_2.useEffect(function () {
        document.title = "" + counter;
    }, [counter]);
    react_2.useEffect(function () {
        setTitle("hello");
        setTitle(document.title = "Hello Daniel");
    }, []);
    //function dosomething() {setCounter(counter + 1)  }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("p", null, title),
        react_1["default"].createElement("p", null, counter),
        react_1["default"].createElement("button", { onClick: function () { return setCounter(counter + 1); } }, "+")));
};
exports["default"] = TitleTask;
//why when I change the order of the useEffects when the dom mount I see the number and not the name?
