"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersControllers_1 = require("./usersControllers");
const routes = express_1.default.Router();
routes.post("/register", usersControllers_1.addUser);
routes.post("/login", usersControllers_1.signIn);
exports.default = routes;
//# sourceMappingURL=usersRouter.js.map