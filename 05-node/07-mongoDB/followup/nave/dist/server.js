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
// //connect to mongoDB with mongoose
// mongoose.connect("mongodb+srv://vnavev:mDSAr2zEw0bzDM2a@cluster0.nzfjztb.mongodb.net/")
// .then(()=>{
//   console.info("MongoDB connected")
// })
// .catch(err=>{
//   console.error(err)
// })
//router to products
// get router from userRouter
const userRouter_1 = __importDefault(require("./API/users/userRouter"));
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter_1.default);
const tasksRoutes_1 = __importDefault(require("./API/tasks/tasksRoutes"));
app.use("/API/tasks", tasksRoutes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
