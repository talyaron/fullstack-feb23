"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
//conect to mongoDB with monggoose
mongoose_1.default.connect("mongodb+srv://hadaritzhaki:hadarmongo1303@cluster0.woft1rt.mongodb.net/test")
    .then(() => {
    console.info("MongoDB connected");
})
    .catch(err => {
    console.error(err);
});
const router_1 = __importDefault(require("./API/img/router"));
app.use('/API/img', router_1.default);
const userrouter_1 = __importDefault(require("./API/user/userrouter"));
app.use('/API/user', userrouter_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
