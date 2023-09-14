"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3000;
//static files
app.use(express_1.default.static("public"));
//body
app.use(express_1.default.json());
//connect to mongoDB with mongoose
mongoose_1.default.connect("mongodb+srv://vnavev:mDSAr2zEw0bzDM2a@cluster0.nzfjztb.mongodb.net/UserSchema")
    .then(() => {
    console.info("MongoDB connected");
})
    .catch(err => {
    console.error(err);
});
// get router from userRouter
const userRoutes_1 = __importDefault(require("./API/users/userRoutes"));
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRoutes_1.default);
const postsRouters_1 = __importDefault(require("./API/posts/postsRouters"));
app.use("/API/posts", postsRouters_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
