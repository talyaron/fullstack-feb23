"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = express_1.default();
const port = process.env.PORT || 4000;
app.use(cookie_parser_1.default());
app.use(express_1.default.static("public"));
//body
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb+srv://zakman336:QRIVRDi84s0ptqPE@cluster0.wv8pxxd.mongodb.net/test")
    .then(() => console.log("mongoose connected!"))
    .catch(err => {
    console.error(err);
});
// get router from usersRouter
const userRouter_1 = __importDefault(require("./API/users/userRouter"));
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/users", userRouter_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
