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
function handleAddItem(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, quantity, imgItem, price, item, response, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    name = ev.target.name.value;
                    quantity = ev.target.quantity.value;
                    imgItem = ev.target.imgItem.value;
                    price = ev.target.price.value;
                    if (!name || !quantity || !imgItem || !price)
                        throw new Error("Please fill all fileds");
                    item = { name: name, quantity: quantity, imgItem: imgItem, price: price };
                    return [4 /*yield*/, fetch("/API/crossfit/add-item", {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(item)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getItems() {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, items, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/crossfit/get-item')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    items = result.items;
                    if (!Array.isArray(items))
                        throw new Error("Items are not array");
                    console.log(items);
                    console.log(result);
                    return [2 /*return*/, items];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderItemHtml(item) {
    try {
        var html = "<div class=\"item-container\">\n        <h2>name: " + item.name + "</h2>\n        <p>quantity: " + item.quantity + "</p>\n        <p>price: " + item.price + "</p>\n        <img src = \"" + item.imgItem + "\">\n        </div>\n        <form id=\"" + item._id + "\" onsubmit=\"handleUpdatePrice(event)\">\n           <input type=\"number\" name=\"price\" value=\"" + item.price + "\" placeholder=\"price\">\n           <button type=\"submit\">Update</button>\n        </form>\n        <button id=\"delete\" onclick=\"handleDeleteItem('" + item._id + "')\">Delete</button>\n        ";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderItems(items, HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error("HTMLElement not found");
        console.log(items);
        if (!Array.isArray(items))
            throw new Error("items are not array");
        var itemsHTML = items.map(function (item) { return renderItemHtml(item); }).join("");
        HTMLElement.innerHTML = itemsHTML;
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetItem() {
    return __awaiter(this, void 0, void 0, function () {
        var items, rootitem;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getItems()];
                case 1:
                    items = _a.sent();
                    rootitem = document.querySelector("#rootitem");
                    renderItems(items, rootitem);
                    return [2 /*return*/];
            }
        });
    });
}
function handleDeleteItem(itemId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, items, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log(itemId);
                    return [4 /*yield*/, fetch('/API/crossfit/delete-item', {
                            method: 'DELETE',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ itemId: itemId })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    items = result.items;
                    renderItems(items, document.querySelector("#rootitem"));
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
function handleUpdatePrice(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var price, id, response, result, items, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    price = ev.target.price.value;
                    id = ev.target.id;
                    console.log(id, price);
                    return [4 /*yield*/, fetch('/API/crossfit/update-item-price', {
                            method: 'PATCH',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ id: id, price: price })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    console.log(result);
                    items = result.items;
                    renderItems(items, document.querySelector('#rootitem'));
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
function handleGetUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('API/users/get-user')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
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
