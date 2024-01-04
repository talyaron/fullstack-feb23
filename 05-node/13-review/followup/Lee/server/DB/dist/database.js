"use strict";
exports.__esModule = true;
var mysql2_1 = require("mysql2");
var sqlPassword = process.env.SQLPASSWORD;
//@ts-ignore
var connection = mysql2_1["default"].createConnection({
    host: "localhost",
    port: "3306",
    user: "root"
});
exports["default"] = connection;
