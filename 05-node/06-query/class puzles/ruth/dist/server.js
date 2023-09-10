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
const usersRoutes_1 = __importDefault(require("./API/users/usersRoutes"));
app.use("/API/users", usersRoutes_1.default);
const productsRoutes_1 = __importDefault(require("./API/products/productsRoutes"));
app.use("/API/products", productsRoutes_1.default);
mongoose_1.default
    .connect("mongodb+srv://ruturAdmin:XZNzKBtxePpcnvMf@cluster0.k1el7dn.mongodb.net/")
    .then(() => console.log("mongoose connected!"))
    .catch((err) => {
    console.error(err);
});
app.listen(port, () => {
    console.log(`App listening on PORT:  ${port}`);
});
