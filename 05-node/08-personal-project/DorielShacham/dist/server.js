"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const userMiddleware_1 = require("./API/user/userMiddleware");
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(cookie_parser_1.default());
//static files
app.use(express_1.default.static("public"));
//express
app.use(express_1.default.json());
app.use(userMiddleware_1.getLoggedUser);
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
