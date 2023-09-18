"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteCartProduct = exports.getProductsToCart = exports.deleteWishlistProduct = exports.getProductsToWishlist = exports.addProductToWishList = exports.addProductToCart = exports.getAllProducts = exports.deleteProduct = exports.updateProductInfo = exports.getProductByOwnerEmail = exports.createProduct = void 0;
var console_1 = require("console");
var productsModel_1 = require("./productsModel");
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newProd, owner, product, productDB, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    newProd = req.body.newProd;
                    owner = req.user;
                    if (!owner)
                        throw new Error("you need to login first");
                    product = new productsModel_1["default"]({
                        imgUrl: newProd.imgUrl,
                        price: newProd.price,
                        title: newProd.title,
                        description: newProd.description,
                        email: owner.email,
                        customersWishList: [],
                        customersCart: []
                    });
                    return [4 /*yield*/, product.save()];
                case 1:
                    productDB = _a.sent();
                    console.log(productDB);
                    res.send({ ok: true, newProduct: productDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createProduct = createProduct;
function getProductByOwnerEmail(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userDB, userEmail, allProducts, usersProducts, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    userDB = req.user;
                    userEmail = userDB.email;
                    if (!userEmail)
                        throw new Error("email not found");
                    if (!userDB.isAdmin) return [3 /*break*/, 2];
                    return [4 /*yield*/, productsModel_1["default"].find({})];
                case 1:
                    allProducts = _a.sent();
                    res.send({ usersProducts: allProducts });
                    return [2 /*return*/];
                case 2: return [4 /*yield*/, productsModel_1["default"].find({ email: userEmail })];
                case 3:
                    usersProducts = _a.sent();
                    if (!usersProducts)
                        throw new Error("user's products not found");
                    res.send({ usersProducts: usersProducts });
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.getProductByOwnerEmail = getProductByOwnerEmail;
function updateProductInfo(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, title, price, description, currentProduct, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, id = _a.id, title = _a.title, price = _a.price, description = _a.description;
                    console_1.log(id, title, price, description);
                    return [4 /*yield*/, productsModel_1["default"].findOneAndUpdate({ _id: id }, { title: title, price: price, description: description })];
                case 1:
                    currentProduct = _b.sent();
                    console_1.log(currentProduct);
                    if (!currentProduct) {
                        throw new Error("product not found");
                    }
                    console.log("updated successfully");
                    res.send({ ok: true });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    console.error(error_3.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.updateProductInfo = updateProductInfo;
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, currentProduct, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.body.id;
                    return [4 /*yield*/, productsModel_1["default"].findOneAndDelete({ _id: id })];
                case 1:
                    currentProduct = _a.sent();
                    if (!currentProduct) {
                        return [2 /*return*/, res.status(404).json({ message: "product not found!" })];
                    }
                    res.send({ ok: true });
                    console_1.log("delete success");
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteProduct = deleteProduct;
function getAllProducts(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var products, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, productsModel_1["default"].find({})];
                case 1:
                    products = _a.sent();
                    res.send({ products: products });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllProducts = getAllProducts;
function addProductToCart(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, prodId, userEmail, newCustomer, error_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, prodId = _a.prodId, userEmail = _a.userEmail;
                    if (!userEmail || !prodId)
                        throw new Error("product id or email not provided");
                    return [4 /*yield*/, productsModel_1["default"].findOneAndUpdate({ _id: prodId, customersCart: { $ne: userEmail } }, { $addToSet: { customersCart: userEmail } }, { "new": true })];
                case 1:
                    newCustomer = _b.sent();
                    if (!newCustomer)
                        throw new Error("Customer not found or already add this product to his cart");
                    res.send({ ok: true });
                    console.log(prodId + " add to cart");
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _b.sent();
                    console.error(error_6.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addProductToCart = addProductToCart;
function addProductToWishList(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, prodId, userEmail, newCustomer, error_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, prodId = _a.prodId, userEmail = _a.userEmail;
                    if (!userEmail || !prodId)
                        throw new Error("product id or email not provided");
                    return [4 /*yield*/, productsModel_1["default"].findOneAndUpdate({ _id: prodId, customersWishList: { $ne: userEmail } }, { $addToSet: { customersWishList: userEmail } }, { "new": true })];
                case 1:
                    newCustomer = _b.sent();
                    if (!newCustomer) {
                        throw new Error("Customer not found or already added this product to his wish list");
                    }
                    else if (newCustomer.customersWishList.includes(userEmail)) {
                        throw new Error("Product already added to customer's wish list.");
                    }
                    res.send({ ok: true });
                    console.log(prodId + " add to wishlist");
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _b.sent();
                    console.error(error_7.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addProductToWishList = addProductToWishList;
//-----------------------------wishlist--------------------------------
function getProductsToWishlist(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userDB, userEmail, productsDB, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userDB = req.user;
                    userEmail = userDB.email;
                    if (!userEmail)
                        throw new Error("user not found in cookie");
                    return [4 /*yield*/, productsModel_1["default"].find({
                            customersWishList: { $elemMatch: { $eq: userEmail } }
                        }).exec()];
                case 1:
                    productsDB = _a.sent();
                    if (!productsDB)
                        throw new Error("products not found");
                    res.send({ productsDB: productsDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_8 = _a.sent();
                    console.error(error_8.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getProductsToWishlist = getProductsToWishlist;
function deleteWishlistProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userDB, emailToRemove, prodId, productDB, indexToRemove, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    userDB = req.user;
                    emailToRemove = userDB.email;
                    prodId = req.body.prodId;
                    return [4 /*yield*/, productsModel_1["default"].findById(prodId)];
                case 1:
                    productDB = _a.sent();
                    if (!productDB) {
                        throw new Error("product not found");
                    }
                    indexToRemove = productDB.customersWishList.indexOf(emailToRemove);
                    if (indexToRemove !== -1) {
                        productDB.customersWishList.splice(indexToRemove, 1);
                    }
                    return [4 /*yield*/, productDB.save()];
                case 2:
                    _a.sent();
                    res.send({ ok: true });
                    return [3 /*break*/, 4];
                case 3:
                    error_9 = _a.sent();
                    console.error(error_9);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteWishlistProduct = deleteWishlistProduct;
//--------------------cart----------------------------------------------------------
function getProductsToCart(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userDB, userEmail, productsDB, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userDB = req.user;
                    userEmail = userDB.email;
                    if (!userEmail)
                        throw new Error("user not found in cookie");
                    return [4 /*yield*/, productsModel_1["default"].find({
                            customersCart: { $elemMatch: { $eq: userEmail } }
                        }).exec()];
                case 1:
                    productsDB = _a.sent();
                    if (!productsDB)
                        throw new Error("products not found");
                    res.send({ productsDB: productsDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_10 = _a.sent();
                    console.error(error_10.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getProductsToCart = getProductsToCart;
function deleteCartProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userDB, emailToRemove, prodId, productDB, indexToRemove, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    userDB = req.user;
                    emailToRemove = userDB.email;
                    prodId = req.body.prodId;
                    return [4 /*yield*/, productsModel_1["default"].findById(prodId)];
                case 1:
                    productDB = _a.sent();
                    if (!productDB) {
                        throw new Error("product not found");
                    }
                    indexToRemove = productDB.customersCart.indexOf(emailToRemove);
                    if (indexToRemove !== -1) {
                        productDB.customersCart.splice(indexToRemove, 1);
                    }
                    return [4 /*yield*/, productDB.save()];
                case 2:
                    _a.sent();
                    res.send({ ok: true });
                    return [3 /*break*/, 4];
                case 3:
                    error_11 = _a.sent();
                    console.error(error_11);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteCartProduct = deleteCartProduct;
