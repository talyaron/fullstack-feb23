"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3001;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb+srv://eliyahuBasson:2PNwya1QXHKD3VGx@cluster0.af1ziou.mongodb.net/test")
    .then(() => {
    console.info("MongoDB connected");
})
    .catch(err => {
    console.error(err);
});
const picturesRouter_1 = __importDefault(require("./API/pictures/picturesRouter"));
const userRouter_1 = __importDefault(require("./API/users/userRouter"));
app.use('/API/pictures', picturesRouter_1.default);
app.use('/API/users', userRouter_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
