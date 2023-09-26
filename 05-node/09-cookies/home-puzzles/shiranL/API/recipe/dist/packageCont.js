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
exports.addPackage = void 0;
var packageModel_1 = require("./packageModel");
//add recipe
function addPackage(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, packageName, packagePrice, imageUrl, category, userEmail, recipe, recipeDB, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, packageName = _a.packageName, packagePrice = _a.packagePrice, imageUrl = _a.imageUrl, category = _a.category, userEmail = _a.userEmail;
                    if (!packageName || !packagePrice || !imageUrl || !category || !userEmail) {
                        return [2 /*return*/, res.status(400).json({ msg: "Missing required fields" })];
                    }
                    recipe = new packageModel_1.PackageModel({ packageName: packageName, packagePrice: packagePrice, imageUrl: imageUrl, category: category, userEmail: userEmail });
                    return [4 /*yield*/, recipe.save()];
                case 1:
                    recipeDB = _b.sent();
                    // console.log(recipeDB);
                    res.send({ ok: true, recipeDB: recipeDB });
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _b.sent();
                    res.status(400).json(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addPackage = addPackage;
// // Define the getAllRecipe function
// export async function getAllRecipes(req, res) {
//     try {
//         // Fetch all recipes from the database
//         const recipes = await RecipeModel.find();
//         // Check if there are no recipes
//         if (!recipes || recipes.length === 0) {
//             return res.status(404).json({ message: "No recipes found." });
//         }
//         // Return the list of recipes as JSON
//         res.status(200).json({ ok: true, recipeList: recipes });
//     } catch (error) {
//         // Handle any errors that occur during the database query
//         res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// }
// export async function getUserRecipes(req, res) {
//     try {
//         // Get the user's email from the request or your authentication system
//         const userEmail = req.query.userEmail;
//         console.log(userEmail);
//         // Query the database to find recipes associated with the user's email
//         const recipes = await RecipeModel.find({ userEmail });
//         // Check if there are no recipes for the user
//         if (!recipes || recipes.length === 0) {
//             return res.status(404).json({ message: "No recipes found for this user." });
//         }
//         // Return the list of recipes as JSON
//         res.status(200).json({ ok: true, recipeList: recipes });
//     } catch (error) {
//         // Handle any errors that occur during the database query or authentication
//         res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// }
// // Define the deleteRecipe function
// export async function deleteRecipe(req, res) {
//     try {
//         // Get the recipe ID from the request parameters
//         const { recipeId } = req.body;
//         // Check if the recipe ID is valid (e.g., a valid MongoDB ObjectId)
//         if (!isValidObjectId(recipeId)) {
//             return res.status(400).json({ message: "Invalid recipe ID" });
//         }
//         // Find the recipe in the database by its ID and remove it
//         const deletedRecipe = await RecipeModel.findByIdAndRemove(recipeId);
//         // Check if the recipe was found and deleted
//         if (!deletedRecipe) {
//             return res.status(404).json({ message: "Recipe not found" });
//         }
//         // Return a success message
//         res.status(200).json({ ok: true, message: "Recipe Deleted" });
//     } catch (error) {
//         // Handle any errors that occur during the database operation
//         res.status(500).json({ message: "Internal server error", error: error.message });
//     }
// }
