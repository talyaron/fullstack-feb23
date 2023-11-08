"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(cookie_parser_1.default());
//static files
app.use(express_1.default.static("public"));
//body
app.use(express_1.default.json());
const { MONGO_URI } = process.env;
mongoose_1.default.connect(MONGO_URI).then(() => {
    console.info("MongoDB connected");
}).catch(err => { console.error(err); });
//router to products
// get router from userRouter
const userRouter_1 = __importDefault(require("./API/users/userRouter"));
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter_1.default);
const relativesRoutes_1 = __importDefault(require("./API/relatives/relativesRoutes"));
app.use("/API/relatives", relativesRoutes_1.default);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong.' });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
