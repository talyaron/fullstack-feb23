"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.PORT || 3001;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.connect("mongodb+srv://moriaavraham5:v7m1w6TqJT2nownt@cluster0.3ionplx.mongodb.net/test")
    .then(() => {
    console.info("MongoDB connected");
})
    .catch(err => {
    console.error(err);
});
const userRouter_1 = __importDefault(require("./API/user2/userRouter"));
app.use("/API/user2", userRouter_1.default);
const PersonalRouter_1 = __importDefault(require("./API/Personal/PersonalRouter"));
app.use("/API/Personal", PersonalRouter_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
