"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = express_1.default();
const port = process.env.PORT || 3004;
//middlware for using parser
app.use(cookie_parser_1.default());
//static files
app.use(express_1.default.static("public"));
//body
app.use(express_1.default.json());
//connect to mongoDB with mongoose
mongoose_1.default.connect("mongodb+srv://tal:70wYmEQ9nKMUneqc@cluster0.0hzknon.mongodb.net/test")
    .then(() => {
    console.info("MongoDB connected");
})
    .catch(err => {
    console.error(err);
});
// get router from usersRouter
const userRoutes_1 = __importDefault(require("./API/user/userRoutes"));
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/user", userRoutes_1.default);
// get router from image
// import imgRouters from "./API/images/imgRoutes"
// //tells express to use proudctsRouter on the intial route "/API/users"
// app.use("/API/images", imgRouters);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
