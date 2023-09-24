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
mongoose_1.default.connect("mongodb+srv://athegreat5:4VspRIIT6N27mtbn@cluster0.g7gvful.mongodb.net/test")
    .then(() => {
    console.info("MongoDB connected");
})
    .catch(err => {
    console.error(err);
});
//router to products
// get router from userRouter
const userRoutes_1 = __importDefault(require("./API/users/userRoutes"));
// //tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRoutes_1.default);
const itemRoutes_1 = __importDefault(require("./API/items/itemRoutes"));
app.use("/API/items", itemRoutes_1.default);
const orderRoutes_1 = __importDefault(require("./API/orders/orderRoutes"));
app.use("/API/orders", orderRoutes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
