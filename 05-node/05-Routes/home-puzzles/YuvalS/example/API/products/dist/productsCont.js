"use strict";
exports.__esModule = true;
exports.updateProductPrice = exports.deleteProduct = exports.getProducts = exports.addProduct = void 0;
var productsModel_1 = require("./productsModel");
var products = [
    new productsModel_1.Product({ title: "test", price: 10, imgUrl: "bla" })
];
//add product controler
exports.addProduct = function (req, res) {
    var product = req.body;
    console.log(product);
    //add to products array
    products.push(new productsModel_1.Product(product)); // --> add to Database
    console.log(products);
    res.send({ product: product });
};
//get products
exports.getProducts = function (req, res) {
    try {
        res.send({ products: products });
    }
    catch (error) {
        console.error(error);
    }
};
exports.deleteProduct = function (req, res) {
    try {
        var id_1 = req.body.id;
        console.log(id_1);
        products = products.filter(function (product) { return product.id !== id_1; });
        res.send({ products: products });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
exports.updateProductPrice = function (req, res) {
    try {
        var _a = req.body, price = _a.price, id_2 = _a.id;
        console.log(req.body);
        if (!price || !id_2)
            throw new Error("Please complete all fields");
        var product = products.find(function (product) { return product.id === id_2; });
        if (!product)
            throw new Error("Product not found");
        product.price = price;
        res.send({ products: products });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
