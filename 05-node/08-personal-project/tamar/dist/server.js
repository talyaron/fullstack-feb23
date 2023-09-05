"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
//static files
app.use(express_1.default.static("PUBLIC"));
//body
app.use(express_1.default.json());
//get routers
// get router from userRouter
const userRoute_1 = __importDefault(require("./API/users/userRoute"));
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRoute_1.default);
//listen port
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
