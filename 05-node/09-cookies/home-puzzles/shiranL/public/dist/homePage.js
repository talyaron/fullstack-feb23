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
// TypeScript (homePage.js)
function renderHelloUser() {
    return __awaiter(this, void 0, void 0, function () {
        var logInUser, helloUserDiv, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getCurrentUser()];
                case 1:
                    logInUser = _a.sent();
                    if (!logInUser) {
                        throw new Error("User Not Found");
                    }
                    helloUserDiv = document.querySelector("#helloUserDiv");
                    if (!helloUserDiv)
                        throw new Error("helloUser root not found");
                    // if user isAdmin create button to show all users and can updte admin
                    if (logInUser.isAdmin) {
                        helloUserDiv.innerHTML = "Hello Admin " + logInUser.email;
                    }
                    else
                        helloUserDiv.innerHTML = "Hello " + logInUser.email;
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
function getCurrentUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, logInUser, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/user/get-log-in-user")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (!data.ok) {
                        throw new Error(data.message);
                    }
                    console.log(data);
                    logInUser = data.logInUser;
                    return [2 /*return*/, logInUser];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Function to handle logout
function handleLogout() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/user/log-out", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    if (!data.ok) {
                        throw new Error(data.message);
                    }
                    BackHome();
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
function BackHome() {
    location.href = "/index.html";
}
//get all not Admin users
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, allUsers, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/user/get-all-users")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (!data.ok) {
                        throw new Error(data.message);
                    }
                    allUsers = data.allUsers;
                    return [2 /*return*/, allUsers];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var users, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getAllUsers()];
                case 1:
                    users = _a.sent();
                    if (!users) {
                        throw new Error("Users Not Found");
                    }
                    renderUsersList(users);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderUsersList(users) {
    var _this = this;
    try {
        //clrear divs 
        var updateUserDiv = document.querySelector("#updateUserDiv");
        var userdetailsDiv = document.querySelector("#userdetailsDiv");
        if (!updateUserDiv || !userdetailsDiv)
            throw new Error("updateUserDiv|userdetailsDiv root not found");
        updateUserDiv.innerHTML = '';
        userdetailsDiv.innerHTML = '';
        // Create h1 admin users
        var h1 = document.createElement('h1');
        h1.textContent = 'Admin area';
        // Create div for select user
        var selectUserDiv = document.createElement('div');
        selectUserDiv.id = 'selectUserDiv';
        updateUserDiv.appendChild(selectUserDiv);
        // Label for select user    
        var selectUserLabel = document.createElement('label');
        selectUserLabel.textContent = 'Select User:';
        // Create a select element to choose a user
        var selectUser_1 = document.createElement('select');
        selectUser_1.id = 'selectUser';
        // Create options for each user
        users.forEach(function (user) {
            var option = document.createElement('option');
            option.value = user._id; // Assuming each user has a unique ID
            option.textContent = user.email; // Change this to the user's name or other identifier
            selectUser_1.appendChild(option);
        });
        // Create update button
        var updateButton = document.createElement('button');
        updateButton.className = 'updateUserBtn';
        updateButton.textContent = 'Update';
        // Append select, update, and delete buttons to updateUserDiv
        selectUserDiv.appendChild(h1);
        selectUserDiv.appendChild(selectUserLabel);
        selectUserDiv.appendChild(selectUser_1);
        selectUserDiv.appendChild(updateButton);
        // Handle the update button click event
        updateButton.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
            var selectUser, selectedUserId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selectUser = document.querySelector('#selectUser');
                        selectedUserId = selectUser.value;
                        // Call a function to open the update user form and populate it with user details
                        return [4 /*yield*/, openUpdateUserForm(selectedUserId)];
                    case 1:
                        // Call a function to open the update user form and populate it with user details
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteUser() {
    return __awaiter(this, void 0, void 0, function () {
        var selectUser, selectedUserId, response, responseData, updateUserForm, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    selectUser = document.querySelector('#selectUser');
                    selectedUserId = selectUser.value;
                    return [4 /*yield*/, fetch("API/user/delete-user?userId=" + selectedUserId, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseData = _a.sent();
                    if (!responseData.ok) {
                        throw new Error(responseData.message);
                    }
                    alert("User deleted successfully");
                    updateUserForm = document.querySelector('#updateUserForm');
                    updateUserForm.remove();
                    //  refresh the user list here
                    return [4 /*yield*/, renderAllUsers()];
                case 3:
                    //  refresh the user list here
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function openUpdateUserForm(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, userDetails, updateUserForm_1, emailLabel, emailInput_1, passwordLabel, passwordInput_1, isAdminLabel, isAdminInput_1, deleteButton, submitButton, userDetailsDiv, error_7;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/user/get-user-details?userId=" + userId, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (!data.ok) {
                        throw new Error(data.message);
                    }
                    userDetails = data.user;
                    updateUserForm_1 = document.createElement('form');
                    updateUserForm_1.id = 'updateUserForm';
                    emailLabel = document.createElement('label');
                    emailLabel.textContent = 'Email:';
                    emailInput_1 = document.createElement('input');
                    emailInput_1.type = 'text';
                    emailInput_1.name = 'email';
                    emailInput_1.value = userDetails.email;
                    passwordLabel = document.createElement('label');
                    passwordLabel.textContent = 'Password:';
                    passwordInput_1 = document.createElement('input');
                    passwordInput_1.type = 'password';
                    passwordInput_1.name = 'password';
                    passwordInput_1.value = userDetails.password;
                    isAdminLabel = document.createElement('label');
                    isAdminLabel.textContent = 'Is Admin:';
                    isAdminInput_1 = document.createElement('input');
                    isAdminInput_1.type = 'checkbox';
                    isAdminInput_1.name = 'isAdmin';
                    isAdminInput_1.checked = userDetails.isAdmin;
                    deleteButton = document.createElement('button');
                    deleteButton.className = 'deleteUserBtn';
                    deleteButton.textContent = 'Delete';
                    deleteButton.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, handleDeleteUser()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    submitButton = document.createElement('button');
                    submitButton.type = 'submit';
                    submitButton.textContent = 'Update User';
                    // Apply CSS to style the form elements
                    updateUserForm_1.style.display = 'flex';
                    updateUserForm_1.style.flexDirection = 'column';
                    updateUserForm_1.style.alignItems = 'flex-start';
                    updateUserForm_1.style.gap = '10px'; // Adjust the spacing as needed
                    // Append input fields, labels, and submit button to the form
                    updateUserForm_1.appendChild(emailLabel);
                    updateUserForm_1.appendChild(emailInput_1);
                    updateUserForm_1.appendChild(passwordLabel);
                    updateUserForm_1.appendChild(passwordInput_1);
                    updateUserForm_1.appendChild(isAdminLabel);
                    updateUserForm_1.appendChild(isAdminInput_1);
                    updateUserForm_1.appendChild(deleteButton);
                    updateUserForm_1.appendChild(submitButton);
                    // Event handler for updating user details
                    updateUserForm_1.onsubmit = function (event) { return __awaiter(_this, void 0, void 0, function () {
                        var updatedUser, response, responseData;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    event.preventDefault();
                                    updatedUser = {
                                        newEmail: emailInput_1.value,
                                        newPassword: passwordInput_1.value,
                                        isAdmin: isAdminInput_1.checked
                                    };
                                    return [4 /*yield*/, fetch("API/user/update-user?userId=" + userId, {
                                            method: "PUT",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(updatedUser)
                                        })];
                                case 1:
                                    response = _a.sent();
                                    return [4 /*yield*/, response.json()];
                                case 2:
                                    responseData = _a.sent();
                                    if (!responseData.ok) {
                                        throw new Error(responseData.message);
                                    }
                                    alert("User details updated successfully");
                                    // Close the update user form and potentially refresh the user list
                                    updateUserForm_1.remove();
                                    //  refresh the user list here
                                    return [4 /*yield*/, renderAllUsers()];
                                case 3:
                                    //  refresh the user list here
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    userDetailsDiv = document.querySelector('#userdetailsDiv');
                    if (!userDetailsDiv)
                        throw new Error("userdetailsDiv root not found");
                    userDetailsDiv.innerHTML = '';
                    userDetailsDiv.appendChild(updateUserForm_1);
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// // Function to handle adding a recipe
// async function handleAddRecipe(event: any) {
//     try {
//         event.preventDefault();
//         const recipeName = event.target.recipeName.value;
//         const recipeIngredients = event.target.recipeIngredients.value;
//         const recipeInstructions = event.target.recipeInstructions.value;
//         const imageUrl = event.target.imageUrl.value;
//         const category = event.target.recipeCategory.value;
//         const user = await getCurrentUser();
//         const userEmail = user.email;
//         const response = await fetch("API/recipe/add-recipe", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ recipeName, recipeIngredients, recipeInstructions, imageUrl, category, userEmail }),
//         });
//         const data = await response.json();
//         console.log(data);
//         if (!data.ok) {
//             throw new Error(data.message);
//         }
//         alert("Recipe added");
//     } catch (error) {
//         console.error(error);
//     }
// }
// // Function to render a recipe
// async function renderRecipe(recipe, isEmailExist, isAdmin, fromWhereICome) {
//     try {
//         if (!recipe) throw new Error("Recipe does not exist");
//         const recipeContainer = document.querySelector("#recipeContainer") as HTMLDivElement;
//         if (!recipeContainer) throw new Error("recipeContainer root not found");
//         const recipeElement = document.createElement('div');
//         recipeElement.innerHTML = `
//             <h2 class="recipeName">${recipe.recipeName}</h2>
//             <img src="${recipe.imageUrl}" alt="recipe image" class="recipeImage">
//             <div class="recipeInstructions">${recipe.recipeInstructions}</div>
//             <div class="recipeCategory">${recipe.category}</div>
//         `;
//         // Create a list for ingredients
//         const ingredientsList = document.createElement('ul');
//         ingredientsList.className = 'recipeIngredientsList';
//         // Split ingredients into an array
//         const ingredientsArray = recipe.recipeIngredients.split(',');
//         // Loop through the ingredients array and create list items
//         ingredientsArray.forEach((ingredient) => { 
//             const listItem = document.createElement('li');
//             listItem.textContent = ingredient.trim(); // Trim any leading/trailing spaces
//             ingredientsList.appendChild(listItem);
//         });
//         // Append the ingredients list to the recipe element
//         recipeElement.appendChild(ingredientsList);
//         if (isEmailExist || isAdmin) {
//             const deleteButton = document.createElement('button');
//             deleteButton.className = 'deleteRecipe';
//             deleteButton.textContent = 'Delete';
//             deleteButton.onclick =async () => await handleDeleteRecipe(recipe._id,fromWhereICome); // Pass the recipe ID to the function
//             recipeElement.appendChild(deleteButton);  
//         }
//         recipeContainer.appendChild(recipeElement);
//     } catch (error) {
//         console.error(error);
//     }
// }
// async function handleDeleteRecipe(recipeId,fromWhereICome) {
//     try {
//         const response = await fetch("API/recipe/delete-recipe", {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ recipeId }),
//         });
//         const data = await response.json();
//         if (!data.ok) {
//             throw new Error(data.message);
//         }
//         alert("Recipe deleted");
//         if(fromWhereICome==="myRecipe"){
//             renderMyRecipes();
//         }
//         else{
//             renderAllRecipes();
//         }
//     } catch (error) {
//         console.error(error);
//     }   
// }
// // Function to render all recipes
// async function renderAllRecipes() {
//     try {
//         const recipeListContainer = document.querySelector("#recipeContainer") as HTMLDivElement;
//         if (!recipeListContainer) throw new Error("recipeContainer root not found");
//         recipeListContainer.innerHTML = "";
//         const response = await fetch("API/recipe/get-all-recipes");
//         const data = await response.json();
//         if (!data.ok) {
//             throw new Error(data.message);
//         }
//         const { recipeList } = data;
//         const user = await getCurrentUser();
//         if (!user) {
//             throw new Error("User Not Found");
//         }
//         recipeList.forEach((recipe) => {
//             renderRecipe(recipe, false, user.isAdmin,'AllRecipes'); 
//         });
//     } catch (error) {
//         console.error(error); 
//     }
// }
// // Function to render user-specific recipes
// async function renderMyRecipes() {
//     try {
//         // Get the currently logged-in user's email
//         const user = await getCurrentUser();
//         if (!user || !user.email) {
//             throw new Error("User email not found.");
//         }
//         // Send the user's email to the server to get their recipes 
//         const response = await fetch(`API/recipe/get-My-recipes?userEmail=${encodeURIComponent(user.email)}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         const data = await response.json();
//         if (!data.ok) {
//             throw new Error(data.message);
//         }
//         const { recipeList } = data;
//         const recipeListContainer = document.querySelector("#recipeContainer") as HTMLDivElement;
//         if (!recipeListContainer) throw new Error("recipeContainer root not found");
//         recipeListContainer.innerHTML = "";
//         recipeList.forEach((recipe) => {
//             renderRecipe(recipe, true, user.isAdmin,'myRecipe');
//         });
//     } catch (error) {
//         console.error(error);
//     } 
// }
// // You can continue to define your other functions as needed.
