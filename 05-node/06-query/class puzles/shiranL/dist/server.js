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
// get router from usersRouter
const userRoutes_1 = __importDefault(require("./API/user/userRoutes"));
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/user", userRoutes_1.default);
// get router from image
const imgRoutes_1 = __importDefault(require("./API/images/imgRoutes"));
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/images", imgRoutes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
