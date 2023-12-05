"use strict";
exports.__esModule = true;
require("./App.css");
var Colors_1 = require("./components/colors/Colors");
var Product_1 = require("./components/api/products/Product");
//npm install react-select
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Colors_1["default"], null),
        React.createElement("hr", null),
        React.createElement(Product_1.Product, null)));
}
exports["default"] = App;
