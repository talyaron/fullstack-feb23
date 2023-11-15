"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function App() {
    var _a = react_1.useState(0), counterState = _a[0], setCounterState = _a[1];
    var _b = react_1.useState(""), text = _b[0], setText = _b[1];
    var text1 = "Welcome to";
    var style = "hell!";
    var counter = 0;
    var addOne = function () {
        counter = counter++;
        console.log(counter);
    };
    var addOneState = function () {
        setCounterState(counterState + 1);
        console.log(counterState);
    };
    var removeOneState = function () {
        setCounterState(counterState - 1);
        console.log(counterState);
    };
    var divideByTwo = function () {
        setCounterState(counterState / 2);
        console.log(counterState);
    };
    var changeName = function () {
        var userName = prompt("Enter your name");
        if (userName) {
            setText(userName);
        }
        else {
            alert("provide Name!");
        }
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("p", null,
            "Hello ",
            text,
            "!"),
        react_1["default"].createElement("p", null,
            text1,
            " ",
            style),
        react_1["default"].createElement("p", null,
            "Count : ",
            counter),
        react_1["default"].createElement("p", null,
            "Count State: ",
            counterState),
        react_1["default"].createElement("button", { onClick: addOne }, "ADD to COUNTER"),
        react_1["default"].createElement("button", { onClick: addOneState }, "ADD to COUNTER STATE"),
        react_1["default"].createElement("button", { onClick: removeOneState }, "REMOVE from COUNTER STATE"),
        react_1["default"].createElement("button", { onClick: divideByTwo }, "DEVIDE COUNTER STATE by 2"),
        react_1["default"].createElement("button", { onClick: changeName }, "Change Name")));
}
exports["default"] = App;
