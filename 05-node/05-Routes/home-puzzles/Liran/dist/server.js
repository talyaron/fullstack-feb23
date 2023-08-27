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
const usersRouter_1 = __importDefault(require("./API/users/usersRouter"));
//tells express to use proudctsRouter on the intial route "/API/products"
app.use("/API/users", usersRouter_1.default);
const noteRouter_1 = __importDefault(require("./API/note/noteRouter"));
app.use("/API/note", noteRouter_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
