"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
//static files
app.use(express_1.default.static("public"));
//body
app.use(express_1.default.json());
class Product {
    constructor({ title, price, imgUrl }) {
        this.title = title;
        this.price = price;
        this.imgUrl = imgUrl;
        this.id = Math.random().toString();
    }
}
let products = [];
//CRUD - Create, Read, Update, Delete
//Create - product
app.post("/API/add-product", (req, res) => {
    const product = req.body;
    console.log(product);
    //add to products array
    products.push(new Product(product)); // --> add to Database
    console.log(products);
    res.send({ product });
});
//Read - products
//get all products
app.get("/API/get-products", (req, res) => {
    try {
        res.send({ products });
    }
    catch (error) {
        console.error(error);
    }
});
//Delete - product
app.delete("/API/delete-product", (req, res) => {
    try {
        const { id } = req.body;
        console.log(id);
        products = products.filter((product) => product.id !== id);
        res.send({ products });
    }
    catch (error) {
        console.error(error);
        res.send({ error });
    }
});
//update - product
app.patch("/API/update-product", (req, res) => {
    try {
        const { price, id } = req.body;
        console.log(req.body);
        if (!price || !id)
            throw new Error("Please complete all fields");
        const product = products.find((product) => product.id === id);
        if (!product)
            throw new Error("Product not found");
        product.price = price;
        res.send({ products });
    }
    catch (error) {
        console.error(error);
        res.send({ error });
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
