"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
//static files
app.use(express_1.default.static("public"));
//body
app.use(express_1.default.json());
//router to products
// get router from productsRouter
const productsRouter_1 = __importDefault(require("./API/products/productsRouter"));
//tells express to use proudctsRouter on the intial route "/API/products"
app.use("/API/products", productsRouter_1.default);
// get router from userRouter
const userRouter_1 = __importDefault(require("./API/users/userRouter"));
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
