//import { Recipe, recipes } from "../API/recipes/recipesModel";
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
var recipes = [];
//handle
function handleGetUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
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
                    GetUserRecipe();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function hendelDeleteUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/users/delete-user', {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = (_a.sent()).data;
                    console.log(data);
                    if (data) {
                        window.location.href = "/index.html";
                    }
                    else {
                        throw new Error("user not deleted");
                    }
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
function hendelAddRecipe(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var title, description, urlImg, newRecipe, response, recipes_1, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    console.dir(ev);
                    title = ev.target.title.value;
                    console.log(title);
                    description = ev.target.description.value;
                    console.log(description);
                    urlImg = ev.target.querySelector('[name="imgUrl"]').value;
                    console.log(urlImg);
                    newRecipe = { title: title, description: description, urlImg: urlImg };
                    console.log(newRecipe);
                    return [4 /*yield*/, fetch('/API/recipes/add-recipe', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newRecipe) //the data that send to the DB server in json-formatted string
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    recipes_1 = _a.sent();
                    console.log("the recupes after add:", recipes_1);
                    renderRecipes(recipes_1, document.querySelector("#userRecipes"));
                    document.querySelector("form").reset();
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
// async function handleUpdateRecpie(ev: any) {
//     try {
//         ev.preventDefault();
//         //const urlParams = new URLSearchParams(window.location.search);
//         //const email=urlParams.get('email');
//         const recipeId = ev.target.id
//         if (!recipeId) throw new Error("recipe id missing");
//         //get the updated data
//         const title = ev.target.titleUpdate.value
//         const description = ev.target.descriptionUpdate.value
//         const urlImg = ev.target.imgUrlUpdate.value;
//         const updateRecipe = {id: recipeId, title, description, urlImg}
//         console.log(updateRecipe);
//         //send the updated recipe to the server/DB
//         const response = await fetch('/API/recipes/update-recipe', {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(updateRecipe)
//         });
//         const updateForm = document.querySelector(".recipe_update") as HTMLFormElement
//         //console.log("updateForm:", updateForm)
//         if(!updateForm) //error handle
//         updateForm.style.display = "none"
//         //reset inputs
//         const recipes  = await response.json(); //and get the new recipes array from the server
//         console.log(recipes)
//         renderRecipes(recipes, document.querySelector("#userRecipes"))
//         document.querySelector("form").reset();
//     } catch (error) {
//         console.error(error)
//     }
// }
function hendelDeleteRecipe(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, recipes_2, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log(id); //the recipe id
                    return [4 /*yield*/, fetch('/API/recipes/delete-recipe', {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ id: id })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    recipes_2 = _a.sent();
                    console.log(recipes_2);
                    renderRecipes(recipes_2, document.querySelector('#userRecipes'));
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
//render
function renderRecipe(recipe) {
    try {
        var html = "<div class=\"recipe\">\n                        <h3>" + recipe.title + "</h3>\n                        <br>\n                        <p class=\"recipe_description\">" + recipe.description + "</p>\n                        <img src='" + recipe.urlImg + "'>\n                        <br>\n                        <button onclick=\"hendelDeleteRecipe('" + recipe._id + "')\">Delet Recipe</button>\n                        <button onclick=\"renderUpdateForm('" + recipe._id + "')\">Update Recipe</button>\n                      </div>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderRecipes(recipes, root) {
    try {
        if (!root)
            throw new Error("no div element");
        // Debugging: Check the type and content of 'recipes'
        console.log("Type of recipes:", typeof recipes);
        console.log("Content of recipes:", recipes);
        var html = "<ul>";
        html += recipes.map(function (recipe) { return renderRecipe(recipe); }).join("");
        html += "<ul>";
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
//controllers
function GetUserRecipe() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/userRecipes/get-user-recipes")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log("the recipes after getUserRecipes:", data.recipes);
                    renderRecipes(data.recipes, document.querySelector("#userRecipes"));
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
function renderUpdateForm(recipeId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, updateForm, inputName, inputDescriptiom, inputImgUrl, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/API/Recipes/get-one-recipe?id=" + recipeId)];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    updateForm = document.querySelector(".recipe_update");
                    console.log("updateForm1:", updateForm);
                    if (!updateForm)
                        throw new Error("no html element");
                    updateForm.style.display = "flex";
                    updateForm.setAttribute("id", data.recipes._id);
                    inputName = document.querySelector("#titleUpdate");
                    inputDescriptiom = document.querySelector("#descriptionUpdate");
                    inputImgUrl = document.querySelector("#imgUrlUpdate");
                    inputName.value = data.recipes.title;
                    inputDescriptiom.value = data.recipes.description;
                    inputImgUrl.value = data.recipes.urlImg;
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
