"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = express_1.default();
const port = process.env.PORT || 3020;
// Very hard to work with without it. Middlware for using parser. Has to be past before the routings!
app.use(cookie_parser_1.default());
//static files
app.use(express_1.default.static("public"));
//body
app.use(express_1.default.json());
// Connect
mongoose_1.default.connect("mongodb+srv://danieltov:PAJK6J2dQZqB2kQz@cluster0.il5wznm.mongodb.net/cookies")
    .then(() => {
    console.info("MongoDB connected");
})
    .catch(err => {
    console.error(err);
});
// get router from userRouter
const userRouter_1 = __importDefault(require("./API/users/userRouter"));
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter_1.default);
const crossfitRouter_1 = __importDefault(require("./API/crossfit/crossfitRouter"));
app.use("/API/crossfit", crossfitRouter_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// PAJK6J2dQZqB2kQz
