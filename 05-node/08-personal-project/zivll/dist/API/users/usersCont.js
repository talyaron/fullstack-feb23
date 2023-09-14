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
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registerUser = void 0;
const usersModel_1 = require("./usersModel");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, email, password } = req.body;
        if (!userName || !email || !password)
            throw new Error("Please complete all fields");
        //check if user already exist
        const userExist = yield usersModel_1.UserModel.find({ email });
        console.log(userExist);
        if (userExist.length === 0) {
            const user = new usersModel_1.UserModel({ userName, email, password });
            yield user.save();
            res.send({ ok: true });
        }
        else {
            res.send({ message: "user is already registered" });
        }
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
});
exports.registerUser = registerUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            throw new Error("Please complete all fields");
        const userExist = yield usersModel_1.UserModel.find({ email });
        if (userExist.length === 0) {
            res.send({ message: "user does not exist, please register" });
        }
        else if (userExist[0].email === email &&
            userExist[0].password === password) {
            res.send({ ok: true });
        }
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
});
exports.login = login;
//# sourceMappingURL=usersCont.js.map