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
var Product = /** @class */ (function () {
    function Product(imgUrl, price, title, description) {
        this.imgUrl = imgUrl;
        this.price = price;
        this.title = title;
        this.description = description;
    }
    return Product;
}());
function checkLogin() {
    return __awaiter(this, void 0, void 0, function () {
        var userEmail, halloUserDiv, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getUserFromCookie()];
                case 1:
                    userEmail = _a.sent();
                    console.log(userEmail);
                    if (!userEmail || userEmail === null || userEmail === undefined) {
                        alert("you need to login first");
                        throw new Error("you need to login first");
                    }
                    if (userEmail) {
                        halloUserDiv = document.querySelector(".halloUserDiv");
                        halloUserDiv.innerText = "welcome to " + userEmail.split("@")[0] + " store";
                    }
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
function handleAddProduct(event) {
    return __awaiter(this, void 0, void 0, function () {
        var imgUrl, price, title, description, userEmail, form, newProd, postInit, response, _a, ok, newProduct, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    event.preventDefault();
                    imgUrl = event.target.imgUrl.value;
                    price = event.target.price.value;
                    title = event.target.title.value;
                    description = event.target.description.value;
                    return [4 /*yield*/, getUserFromCookie()];
                case 1:
                    userEmail = _b.sent();
                    console.log(imgUrl, price, title, description, userEmail);
                    if (!imgUrl || !price || !title || !description || !userEmail)
                        throw new Error("Some fields are empty");
                    form = document.querySelector(".myForm");
                    form.reset();
                    newProd = new Product(imgUrl, price, title, description);
                    postInit = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ newProd: newProd, userEmail: userEmail })
                    };
                    return [4 /*yield*/, fetch("/API/products/create-product", postInit)];
                case 2:
                    response = _b.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    _a = _b.sent(), ok = _a.ok, newProduct = _a.newProduct;
                    if (!ok || !newProduct)
                        throw new Error("product not create on DB server error");
                    renderMyStore();
                    return [3 /*break*/, 5];
                case 4:
                    error_2 = _b.sent();
                    console.error(error_2.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
// function getUserEmailByQuery() {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get("email");
// }
function getUserFromCookie() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, userEmail;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/API/users/get-user-from-cookie")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [4 /*yield*/, data];
                case 3:
                    userEmail = (_a.sent()).userEmail;
                    return [2 /*return*/, userEmail];
            }
        });
    });
}
function handleDeleteProduct(event) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
function renderMyStore() {
    return __awaiter(this, void 0, void 0, function () {
        var userEmail, response, usersProducts, html, root, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, getUserFromCookie()];
                case 1:
                    userEmail = _a.sent();
                    console.log(userEmail);
                    return [4 /*yield*/, fetch("/API/products/get-products-by-owner-email")];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    usersProducts = (_a.sent()).usersProducts;
                    html = usersProducts
                        .map(function (product) {
                        return "\n      <div class=\"storeGallery__productDiv\" id = \"" + product._id + "\">\n          <img src=" + product.imgUrl + " alt=\"\" />\n          <form id =\"" + product._id + "\" onsubmit=\"handleUpdate(event, '" + product._id + "')\" class=\"fid__info\">\n          <label>title:</label>\n            <input id=\"title\" name=\"title\" type=\"text\" value = \"" + product.title + "\"></input><br>\n            <label>price:</label>\n            <input id=\"price\" name=\"price\" type=\"number\" value = \"" + product.price + "\">$</input><br>\n            <label> description: </label><br>\n            <textarea id=\"description\" name=\"description\">" + product.description + "</textarea><br>\n            <p>" + product.email + "</p><br>\n          \n          <div class=\"likeAndCart\">\n          <button type=\"submit\" >update</button>\n          <button type=\"button\" onclick='handleDeleteProdByOwner(event , \"" + product._id + "\")'> <span class=\"material-symbols-outlined\"> delete </span></button>\n          </form>\n          </div>\n        </div>";
                    })
                        .join(" ");
                    root = document.querySelector(".storeGallery");
                    root.innerHTML = html;
                    return [3 /*break*/, 5];
                case 4:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function handleUpdate(event, id) {
    return __awaiter(this, void 0, void 0, function () {
        var newTitle, newPrice, newDescription, patchInit, response, ok, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    newTitle = event.target.title.value;
                    newPrice = event.target.price.value;
                    newDescription = event.target.description.value;
                    console.log(newTitle, newPrice, newDescription);
                    if (!newTitle || !newPrice || !newDescription)
                        throw new Error("some filed are  empty");
                    patchInit = {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            id: id,
                            title: newTitle,
                            price: newPrice,
                            description: newDescription
                        })
                    };
                    return [4 /*yield*/, fetch("/API/products/update-product-info", patchInit)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    ok = (_a.sent()).ok;
                    if (!ok)
                        throw new Error("someThing wrong . the process not completed");
                    renderMyStore();
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteProdByOwner(event, id) {
    return __awaiter(this, void 0, void 0, function () {
        var deleteInit, response, ok, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    deleteInit = {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" }
                    };
                    return [4 /*yield*/, fetch("/API/products/delete-product", deleteInit)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    ok = (_a.sent()).ok;
                    if (!ok)
                        throw new Error("Error deleting");
                    renderMyStore();
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function goHomePage() {
    window.location.href = "../index.html";
}
