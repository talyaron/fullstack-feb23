"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersCont_1 = require("./usersCont");
const userRoutes = express_1.default.Router();
userRoutes.post("/register", usersCont_1.registerUser).post("/login", usersCont_1.login);
exports.default = userRoutes;
//# sourceMappingURL=usersRouter.js.map