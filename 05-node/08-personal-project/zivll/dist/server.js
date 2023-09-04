"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default
    .connect("mongodb+srv://zivll1991:Zcl101212@cluster0.3hjadje.mongodb.net/test")
    .then(() => console.info("mongoose is Connected"))
    .catch((err) => console.error(err));
const usersRouter_1 = __importDefault(require("./API/users/usersRouter"));
app.use("/API/users", usersRouter_1.default);
const expenseRouter_1 = __importDefault(require("./API/expence/expenseRouter"));
app.use("/API/expense", expenseRouter_1.default);
app.listen(port, () => console.log(`app is listening on port ${port}`));
