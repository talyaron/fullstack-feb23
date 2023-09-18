"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose")); //connect to mongoDB
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = express_1.default();
const port = process.env.PORT || 3000;
//middlware for using parser
app.use(cookie_parser_1.default());
//static files
app.use(express_1.default.static("PUBLIC"));
//body
app.use(express_1.default.json());
//connect to mongoDB with mongoose
mongoose_1.default.connect("mongodb+srv://tamar:Vxv7cpZuEp9uY1eZ@cluster0.85tiuhl.mongodb.net")
    .then(() => {
    console.info("MongoDB connected");
})
    .catch(err => {
    console.error(err);
});
//routers
// get router from userRouter
const userRoute_1 = __importDefault(require("./API/users/userRoute"));
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRoute_1.default);
//get router from recipesRoute
const recipesRoute_1 = __importDefault(require("./API/recipes/recipesRoute"));
app.use("/API/recipes", recipesRoute_1.default);
//get router from URRouter
const URRouter_1 = __importDefault(require("./API/userRecipes/URRouter"));
app.use("/API/userRecipes", URRouter_1.default);
//listen port
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
