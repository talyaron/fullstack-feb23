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
mongoose_1.default.connect("mongodb+srv://ruturAdmin:######@cluster0.k1el7dn.mongodb.net/")
    .then(() => console.log("mongoose connected!"))
    .catch(err => {
    console.error(err);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
