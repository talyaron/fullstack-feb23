"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./dist/cursoe.css");
var CustomCursor = function () {
    var secondaryCursor = react_1["default"].useRef(null);
    var mainCursor = react_1["default"].useRef(null);
    var positionRef = react_1["default"].useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1
    });
    react_1["default"].useEffect(function () {
        document.addEventListener("mousemove", function (event) {
            var clientX = event.clientX, clientY = event.clientY;
            var mouseX = clientX;
            var mouseY = clientY;
            //   positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
            //   positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;
            mainCursor.current.style.transform = "translate3d(" + (mouseX - mainCursor.current.clientWidth / 2) + "px, " + (mouseY - mainCursor.current.clientHeight / 2) + "px, 0)";
        });
        return function () { };
    }, []);
    react_1["default"].useEffect(function () {
        var followMouse = function () {
            positionRef.current.key = requestAnimationFrame(followMouse);
            var _a = positionRef.current, mouseX = _a.mouseX, mouseY = _a.mouseY, destinationX = _a.destinationX, destinationY = _a.destinationY, distanceX = _a.distanceX, distanceY = _a.distanceY;
            if (!destinationX || !destinationY) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            }
            else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
                if (Math.abs(positionRef.current.distanceX) +
                    Math.abs(positionRef.current.distanceY) <
                    0.1) {
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                }
                else {
                    positionRef.current.destinationX += distanceX;
                    positionRef.current.destinationY += distanceY;
                }
            }
            secondaryCursor.current.style.transform = "translate3d(" + destinationX + "px, " + destinationY + "px, 0)";
        };
        followMouse();
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "main-cursor ", ref: mainCursor },
            react_1["default"].createElement("div", { className: "main-cursor-background" })),
        react_1["default"].createElement("div", { className: "secondary-cursor", ref: secondaryCursor },
            react_1["default"].createElement("div", { className: "cursor-background" }))));
};
exports["default"] = CustomCursor;
