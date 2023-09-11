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
//express
app.use(express_1.default.json());
//connect to mongoDB with mongoose
mongoose_1.default.connect("mongodb+srv://doriel:FgvVuOI8ROgkvs06@cluster0.wvdhcfc.mongodb.net/test")
    .then(() => {
    console.info("DB connected");
})
    .catch(err => {
    console.error(err);
});
// get router from usersRouter
const userRoutes_1 = __importDefault(require("./API/user/userRoutes"));
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/user", userRoutes_1.default);
// Get router from blogRoutes
const blogRoutes_1 = __importDefault(require("./API/blog/blogRoutes"));
app.use("/API/blog", blogRoutes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
