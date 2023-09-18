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
function getUserFromCookie() {
    return __awaiter(this, void 0, void 0, function () {
        var response, userEmail;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/API/users/get-user-from-cookie")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    userEmail = (_a.sent()).userEmail;
                    console.log(userEmail);
                    return [2 /*return*/, userEmail];
            }
        });
    });
}
function goHomePage() {
    window.location.href = "../index.html";
}
function checkLogin() {
    return __awaiter(this, void 0, void 0, function () {
        var userEmail, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, getUserFromCookie()];
                case 1:
                    userEmail = _a.sent();
                    console.log(userEmail);
                    if (!(!userEmail || userEmail === null || userEmail === undefined)) return [3 /*break*/, 3];
                    return [4 /*yield*/, alert("you need to login first")];
                case 2:
                    _a.sent();
                    window.location.href = "./login.html";
                    throw new Error("you need to login first");
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function renderCart() {
    return __awaiter(this, void 0, void 0, function () {
        var response, productsDB, html, root, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/products/get-cart-by-email")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    productsDB = (_a.sent()).productsDB;
                    if (!productsDB)
                        throw new Error("No products database found");
                    html = productsDB
                        .map(function (product) {
                        return "\n        <div class=\"storeGallery__productDiv\" id = \"" + product._id + "\">\n            <img src=" + product.imgUrl + " alt=\"\" />\n            <form id =\"" + product._id + "\" class=\"fid__info\">\n            <label>title:</label>\n              <p id=\"title\" name=\"title\">" + product.title + "</p><br>\n              <p id=\"price\" name=\"price\">" + product.price + "$</p><br>\n              <label> description: </label><br>\n              <p id=\"description\" name=\"description\">" + product.description + "</p><br>\n              <p>" + product.email + "</p><br>\n            \n            <div class=\"likeAndCart\">\n            <button type=\"button\" onclick='handleDeleteProdFromCart(event , \"" + product._id + "\")'><span class=\"material-symbols-outlined\"> delete </span></button>\n            </form>\n            </div>\n          </div>";
                    })
                        .join(" ");
                    root = document.querySelector(".cartDiv");
                    console.log(root);
                    root.innerHTML = html;
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteProdFromCart(event, prodId) {
    return __awaiter(this, void 0, void 0, function () {
        var deleteInit, response, ok, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!prodId)
                        throw new Error("id is required");
                    deleteInit = {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ prodId: prodId })
                    };
                    return [4 /*yield*/, fetch("/API/products/delete-cart-prod")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    ok = (_a.sent()).ok;
                    if (!ok)
                        throw new Error("something wrong in server side the product not deleted");
                    renderCart();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
