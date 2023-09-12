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
exports.addItem = void 0;
var itemModel_1 = require("./itemModel");
// Add Item
exports.addItem = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, itemName, itemDesc, itemUrl, item, itemDB, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, itemName = _a.itemName, itemDesc = _a.itemDesc, itemUrl = _a.itemUrl;
                if (!itemName || !itemDesc || !itemUrl)
                    throw new Error("Please complete all fields");
                item = new itemModel_1.ItemModel({ itemName: itemName, itemDesc: itemDesc, itemUrl: itemUrl });
                return [4 /*yield*/, item.save()];
            case 1:
                itemDB = _b.sent();
                console.log(itemDB);
                res.send({ ok: true, itemDB: itemDB });
                console.log(item);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                res.send({ error: error_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// export const login = async (req: any, res: any) => {
//     try {
//       const { email, password } = req.body;  
//       if(!email||!password) throw new Error("Complete all fields to proceed")
//       const userDB = await UserModel.findOne({ email,password });
//       // Check if the user exists
//       if (!userDB) {
//         return res.status(404).json({ error: 'User not found' });
//       }
//       // Compare the provided password with the hashed password
//       const passwordMatch =  UserModel.find((user) => user.email === email && user.password === password);
//     //   const passwordMatch = user.(password, user.password);
//       if (!passwordMatch) {
//         return res.status(401).json({ error: 'Authentication failed' });
//       }
//       // Authentication successful
//       // You can generate a JWT token here if needed and send it in the response
//       // For example: const token = generateToken(user);
//       res.send({ok: true, email: userDB.email});
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };
