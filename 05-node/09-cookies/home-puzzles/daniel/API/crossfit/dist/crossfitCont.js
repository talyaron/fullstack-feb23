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
exports.updateItemPrice = exports.deleteItem = exports.getUserItems = exports.addItem = exports.getItem = void 0;
var crossfitModel_1 = require("./crossfitModel");
exports.getItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var itemDB, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, crossfitModel_1.CrossfitItem.find({})];
            case 1:
                itemDB = _a.sent();
                res.send({ items: itemDB });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, quantity, price, imgItem, item, itemDB, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, quantity = _a.quantity, price = _a.price, imgItem = _a.imgItem;
                console.log({ name: name, quantity: quantity, price: price, imgItem: imgItem });
                if (!name || !quantity || !price || !imgItem)
                    throw new Error("Please fill all fileds");
                item = new crossfitModel_1.CrossfitItem({ name: name, quantity: quantity, price: price, imgItem: imgItem });
                return [4 /*yield*/, item.save()];
            case 1:
                itemDB = _b.sent();
                console.log(itemDB);
                res.send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                res.status(500).send({ error: error_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserItems = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var email, itemsDB, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                email = req.query.email;
                if (!email) {
                    throw new Error("email is required");
                }
                return [4 /*yield*/, crossfitModel_1.CrossfitItem.find({ email: email })];
            case 1:
                itemsDB = _a.sent();
                res.send({ CrossfitItem: itemsDB });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send({ error: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// export const getItem = async(req:any, res:any)=>{
//     try {
//         const {id} = req.query;
//         const itemDB = await CrossfitItem.findById(id);
//         // res.send({CrossfitItem:itemDB})
//         res.status(200).json(itemDB);
//     } catch (error) {
//         console.error(error)
//     }
// }
// export const getUserItems = async(req:any, res:any)=>{
//     try {
//         const items = await CrossfitItem.find({});
//         res.send(200).json(items)
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ error: error.message });
//     }
// }
exports.deleteItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var itemId, itemDB, items, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                itemId = req.body.itemId;
                return [4 /*yield*/, crossfitModel_1.CrossfitItem.findByIdAndDelete(itemId)];
            case 1:
                itemDB = _a.sent();
                return [4 /*yield*/, crossfitModel_1.CrossfitItem.find({})];
            case 2:
                items = _a.sent();
                res.send({ items: items });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.error(error_4);
                res.status(500).send({ error: error_4.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.updateItemPrice = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, price, id, itemDB, _b, error_5;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, price = _a.price, id = _a.id;
                return [4 /*yield*/, crossfitModel_1.CrossfitItem.findById(id)];
            case 1:
                itemDB = _c.sent();
                if (!itemDB)
                    throw new Error("Item not found");
                _b = itemDB;
                return [4 /*yield*/, crossfitModel_1.CrossfitItem.findByIdAndUpdate(id, { price: price })];
            case 2:
                _b.price = _c.sent();
                res.send({ CrossfitItem: crossfitModel_1.CrossfitItem });
                return [3 /*break*/, 4];
            case 3:
                error_5 = _c.sent();
                console.error(error_5);
                res.send({ error: error_5 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
