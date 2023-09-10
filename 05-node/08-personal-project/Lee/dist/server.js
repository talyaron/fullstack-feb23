"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 4000;
//static files
app.use(express_1.default.static("public"));
//body
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb+srv://leedee:Omer2021!@cluster0.pe6xuzr.mongodb.net/test").then(() => {
    console.info("MongoDB connected");
}).catch(err => { console.error(err); });
//router to products
// get router from userRouter
const userRouter_1 = __importDefault(require("./API/users/userRouter"));
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter_1.default);
const relativesRoutes_1 = __importDefault(require("./API/relatives/relativesRoutes"));
app.use("/API/relatives", relativesRoutes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});