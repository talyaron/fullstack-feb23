"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var AuthProvider_1 = require("../context/AuthProvider");
var axios_1 = require("../api/axios");
require("../dist/login.css");
var LOGIN_URL = "/auth";
var Login = function () {
    var setAuth = react_1.useContext(AuthProvider_1["default"]).setAuth;
    var userRef = react_1.useRef(null);
    var errRef = react_1.useRef(null);
    var _a = react_1.useState(""), user = _a[0], setUser = _a[1];
    var _b = react_1.useState(""), pwd = _b[0], setPwd = _b[1];
    var _c = react_1.useState(""), errMsg = _c[0], setErrMsg = _c[1];
    var _d = react_1.useState(false), success = _d[0], setSuccess = _d[1];
    var _e = react_1.useState(false), showPassword = _e[0], setShowPassword = _e[1];
    react_1.useEffect(function () {
        if (userRef.current) {
            userRef.current.focus();
        }
    }, []);
    react_1.useEffect(function () {
        setErrMsg("");
    }, [user, pwd]);
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, accessToken, roles, err_1;
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    e.preventDefault();
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post(LOGIN_URL, JSON.stringify({ user: user, pwd: pwd }), {
                            headers: { "Content-Type": "application/json" },
                            withCredentials: true
                        })];
                case 2:
                    response = _f.sent();
                    console.log(JSON.stringify(response === null || response === void 0 ? void 0 : response.data));
                    accessToken = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.accessToken;
                    roles = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.roles;
                    setAuth({ user: user, pwd: pwd, roles: roles, accessToken: accessToken });
                    setUser("");
                    setPwd("");
                    setSuccess(true);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _f.sent();
                    if (!(err_1 === null || err_1 === void 0 ? void 0 : err_1.response)) {
                        setErrMsg("No Server Response");
                    }
                    else if (((_c = err_1.response) === null || _c === void 0 ? void 0 : _c.status) === 400) {
                        setErrMsg("Missing Username or Password");
                    }
                    else if (((_d = err_1.response) === null || _d === void 0 ? void 0 : _d.status) === 401) {
                        setErrMsg("Unauthorized");
                    }
                    else {
                        setErrMsg("Login Failed");
                        (_e = errRef.current) === null || _e === void 0 ? void 0 : _e.focus();
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleTogglePassword = function () {
        setShowPassword(!showPassword);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null, success ? (react_1["default"].createElement("section", null,
        react_1["default"].createElement("h1", null, "You are logged in!"))) : (react_1["default"].createElement("section", null,
        react_1["default"].createElement("p", { ref: errRef, className: errMsg ? "errmsg" : "offscreen", "aria-live": "assertive" }, errMsg),
        react_1["default"].createElement("p", null, "Lee's App"),
        react_1["default"].createElement("h1", null, "Login"),
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("input", { type: "text", id: "username", placeholder: " Username", onChange: function (e) { return setPwd(e.target.value); }, value: pwd, required: true }),
            react_1["default"].createElement("div", { className: "password-input-container" },
                react_1["default"].createElement("input", { type: showPassword ? "text" : "password", id: "password", placeholder: " Password", ref: userRef, onChange: function (e) { return setUser(e.target.value); }, value: user, required: true }),
                react_1["default"].createElement("span", { className: "material-symbols-outlined eye-icon", onClick: handleTogglePassword }, showPassword ? "visibility" : "visibility_off")),
            react_1["default"].createElement("button", null, "Login"),
            react_1["default"].createElement("p", { id: "reset" }, "Forgot your password?")),
        react_1["default"].createElement("div", { className: "signup-stripe" }),
        react_1["default"].createElement("button", { id: "signup" }, "Signup")))));
};
exports["default"] = Login;
