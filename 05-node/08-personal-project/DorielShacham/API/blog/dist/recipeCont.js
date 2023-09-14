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
exports.deleteRecipe = exports.getUserRecipes = exports.getAllRecipes = exports.addRecipe = void 0;
var recipeModel_1 = require("./recipeModel");
var mongoose_1 = require("mongoose");
//add recipe
function addRecipe(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, recipeName, recipeIngredients, recipeInstructions, imageUrl, category, userEmail, recipe, recipeDB, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, recipeName = _a.recipeName, recipeIngredients = _a.recipeIngredients, recipeInstructions = _a.recipeInstructions, imageUrl = _a.imageUrl, category = _a.category, userEmail = _a.userEmail;
                    if (!recipeName || !recipeIngredients || !recipeInstructions || !imageUrl || !category || !userEmail) {
                        return [2 /*return*/, res.status(400).json({ msg: "Missing required fields" })];
                    }
                    recipe = new recipeModel_1.RecipeModel({ recipeName: recipeName, recipeIngredients: recipeIngredients, recipeInstructions: recipeInstructions, imageUrl: imageUrl, category: category, userEmail: userEmail });
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
exports.addRecipe = addRecipe;
// Define the getAllRecipe function
function getAllRecipes(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var recipes, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, recipeModel_1.RecipeModel.find()];
                case 1:
                    recipes = _a.sent();
                    // Check if there are no recipes
                    if (!recipes || recipes.length === 0) {
                        return [2 /*return*/, res.status(404).json({ message: "No recipes found." })];
                    }
                    // Return the list of recipes as JSON
                    res.status(200).json({ ok: true, recipeList: recipes });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    // Handle any errors that occur during the database query
                    res.status(500).json({ message: "Internal server error", error: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllRecipes = getAllRecipes;
function getUserRecipes(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userEmail, recipes, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userEmail = req.query.userEmail;
                    console.log(userEmail);
                    return [4 /*yield*/, recipeModel_1.RecipeModel.find({ userEmail: userEmail })];
                case 1:
                    recipes = _a.sent();
                    // Check if there are no recipes for the user
                    if (!recipes || recipes.length === 0) {
                        return [2 /*return*/, res.status(404).json({ message: "No recipes found for this user." })];
                    }
                    // Return the list of recipes as JSON
                    res.status(200).json({ ok: true, recipeList: recipes });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    // Handle any errors that occur during the database query or authentication
                    res.status(500).json({ message: "Internal server error", error: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getUserRecipes = getUserRecipes;
// Define the deleteRecipe function
function deleteRecipe(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var recipeId, deletedRecipe, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    recipeId = req.body.recipeId;
                    // Check if the recipe ID is valid (e.g., a valid MongoDB ObjectId)
                    if (!mongoose_1.isValidObjectId(recipeId)) {
                        return [2 /*return*/, res.status(400).json({ message: "Invalid recipe ID" })];
                    }
                    return [4 /*yield*/, recipeModel_1.RecipeModel.findByIdAndRemove(recipeId)];
                case 1:
                    deletedRecipe = _a.sent();
                    // Check if the recipe was found and deleted
                    if (!deletedRecipe) {
                        return [2 /*return*/, res.status(404).json({ message: "Recipe not found" })];
                    }
                    // Return a success message
                    res.status(200).json({ ok: true, message: "Recipe Deleted" });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    // Handle any errors that occur during the database operation
                    res.status(500).json({ message: "Internal server error", error: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteRecipe = deleteRecipe;