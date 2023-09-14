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
// Function to handle logout
function handleLogout() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
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
                    error_1 = _a.sent();
                    console.error(error_1);
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
        var response, data, allUsers, error_2;
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
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var users, error_3;
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
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function renderUsersList(users) {
    var _this = this;
    try {
        var updateUserDiv = document.querySelector("#updateUserDiv");
        if (!updateUserDiv)
            throw new Error("updateUserDiv root not found");
        updateUserDiv.innerHTML = " ";
        //create div for select user
        var selectUserDiv = document.createElement('div');
        selectUserDiv.id = 'selectUserDiv';
        updateUserDiv.appendChild(selectUserDiv);
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
        updateButton.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
            var selectUser, selectedUserId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
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
        // Create delete button
        var deleteButton = document.createElement('button');
        deleteButton.className = 'deleteUserBtn';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleDeleteUser()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
        // Append select and buttons to updateUserDiv
        selectUserDiv.appendChild(selectUser_1);
        selectUserDiv.appendChild(updateButton);
        selectUserDiv.appendChild(deleteButton);
    }
    catch (error) {
        console.error(error);
    }
}
function openUpdateUserForm(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, userDetails, updateUserForm_1, emailInput_1, passwordInput_1, isAdminInput_1, submitButton, userDetailsDiv, error_4;
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
                    debugger;
                    if (!data.ok) {
                        throw new Error(data.message);
                    }
                    userDetails = data.user;
                    updateUserForm_1 = document.createElement('form');
                    updateUserForm_1.id = 'updateUserForm';
                    emailInput_1 = document.createElement('input');
                    emailInput_1.type = 'text';
                    emailInput_1.name = 'email';
                    emailInput_1.value = userDetails.email;
                    passwordInput_1 = document.createElement('input');
                    passwordInput_1.type = 'password';
                    passwordInput_1.name = 'password';
                    passwordInput_1.value = userDetails.password;
                    isAdminInput_1 = document.createElement('input');
                    isAdminInput_1.type = 'checkbox';
                    isAdminInput_1.name = 'isAdmin';
                    isAdminInput_1.checked = userDetails.isAdmin;
                    submitButton = document.createElement('button');
                    submitButton.type = 'submit';
                    submitButton.textContent = 'Update User';
                    // Add input fields and submit button to the form
                    updateUserForm_1.appendChild(emailInput_1);
                    updateUserForm_1.appendChild(passwordInput_1);
                    updateUserForm_1.appendChild(isAdminInput_1);
                    updateUserForm_1.appendChild(submitButton);
                    // Event handler for updating user details
                    updateUserForm_1.onsubmit = function (event) { return __awaiter(_this, void 0, void 0, function () {
                        var updatedUser, response, responseData, selectUserDiv, userdetailsDiv;
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
                                    // clean the updateUserDiv
                                    debugger;
                                    selectUserDiv = document.querySelector("#selectUserDiv");
                                    userdetailsDiv = document.querySelector("#userdetailsDiv");
                                    if (!selectUserDiv || !userdetailsDiv)
                                        throw new Error("selectUserDiv|userdetailsDiv root not found");
                                    selectUserDiv.innerHTML = '';
                                    userdetailsDiv.innerHTML = '';
                                    // Close the update user form and potentially refresh the user list
                                    updateUserForm_1.remove();
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
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Render "Hello User" for logged-in user
function renderHelloUser() {
    return __awaiter(this, void 0, void 0, function () {
        var logInUser, helloUser, updateUserDiv, showAllUsersButton, error_5;
        var _this = this;
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
                    helloUser = document.querySelector("#helloUser");
                    updateUserDiv = document.querySelector("#updateUserDiv");
                    if (!helloUser)
                        throw new Error("helloUser root not found");
                    helloUser.innerHTML = "Welcome <span class=\"welcome-message\">" + logInUser.email + "</span>";
                    // if user isAdmin create button to show all users and can updte admin
                    if (logInUser.isAdmin) {
                        showAllUsersButton = document.createElement('button');
                        showAllUsersButton.className = 'showAllUsersBtn';
                        showAllUsersButton.textContent = 'Show All Users';
                        showAllUsersButton.onclick = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, renderAllUsers()];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); };
                        updateUserDiv.appendChild(showAllUsersButton);
                    }
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
function getCurrentUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, logInUser, error_6;
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
                    logInUser = data.logInUser;
                    return [2 /*return*/, logInUser];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Function to render a blog
function handleAddBlog(event) {
    return __awaiter(this, void 0, void 0, function () {
        var blogTitle, blogDescription, user, userEmail, response, data, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    event.preventDefault();
                    blogTitle = event.target.blogTitle.value;
                    blogDescription = event.target.blogDescription.value;
                    return [4 /*yield*/, getCurrentUser()];
                case 1:
                    user = _a.sent();
                    userEmail = user.email;
                    return [4 /*yield*/, fetch("API/blog/add-blog", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ title: blogTitle, description: blogDescription, userEmail: userEmail })
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    console.log(data);
                    if (!data.ok) {
                        throw new Error(data.message);
                    }
                    alert("Blog added");
                    return [3 /*break*/, 5];
                case 4:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteBlog(blogId, fromWhereICome) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/blog/delete-blog", {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ blogId: blogId })
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    if (!data.ok) {
                        throw new Error(data.message);
                    }
                    alert("Blog deleted");
                    if (fromWhereICome === "myBlogs") {
                        renderMyBlogs();
                    }
                    else {
                        renderAllBlogs();
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    console.error(error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderAllBlogs() {
    return __awaiter(this, void 0, void 0, function () {
        var user_1, response, data, blogList, blogContainer_1, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, getCurrentUser()];
                case 1:
                    user_1 = _a.sent();
                    if (!user_1) {
                        throw new Error("User Not Found");
                    }
                    return [4 /*yield*/, fetch("API/blog/get-all-blogs")];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (!data.ok) {
                        throw new Error(data.message);
                    }
                    blogList = data.blogList;
                    blogContainer_1 = document.querySelector("#blogContainer");
                    if (!blogContainer_1)
                        throw new Error("blogContainer root not found");
                    blogContainer_1.innerHTML = '';
                    blogList.forEach(function (blog) {
                        var isUserBlog = blog.userEmail === user_1.email;
                        renderBlogItem(blog, isUserBlog, user_1.isAdmin, 'AllBlogs', blog.userEmail, blogContainer_1);
                    });
                    return [3 /*break*/, 5];
                case 4:
                    error_9 = _a.sent();
                    console.error(error_9);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function renderMyBlogs() {
    return __awaiter(this, void 0, void 0, function () {
        var user_2, response, data, blogList, blogContainer_2, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, getCurrentUser()];
                case 1:
                    user_2 = _a.sent();
                    if (!user_2 || !user_2.email) {
                        throw new Error("User email not found.");
                    }
                    return [4 /*yield*/, fetch("API/blog/get-my-blogs?userEmail=" + encodeURIComponent(user_2.email), {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (!data.ok) {
                        alert("You currently do not have a blog.");
                        return [2 /*return*/];
                    }
                    blogList = data.blogList;
                    blogContainer_2 = document.querySelector("#blogContainer");
                    if (!blogContainer_2)
                        throw new Error("blogContainer root not found");
                    blogContainer_2.innerHTML = '';
                    blogList.forEach(function (blog) {
                        var isUserBlog = true;
                        renderBlogItem(blog, isUserBlog, user_2.isAdmin, 'myBlogs', user_2.email, blogContainer_2);
                    });
                    return [3 /*break*/, 5];
                case 4:
                    error_10 = _a.sent();
                    console.error(error_10);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function renderBlogItem(blog, isUserBlog, isAdmin, fromWhereICome, userEmail, container) {
    var _this = this;
    var blogContainer = container;
    var blogElement = document.createElement('div');
    blogElement.innerHTML = "\n        <h2 class=\"blogTitle\">" + blog.title + "</h2>\n        <p class=\"blogDescription\">" + blog.description + "</p>\n        <p> Author: " + userEmail + "</p>\n    ";
    if (isAdmin || isUserBlog) {
        var deleteButton = document.createElement('button');
        deleteButton.className = 'deleteBlog';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleDeleteBlog(blog._id, fromWhereICome)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); }); };
        blogElement.appendChild(deleteButton);
    }
    blogContainer.appendChild(blogElement);
}
//Delete users function
function handleDeleteUser() {
    return __awaiter(this, void 0, void 0, function () {
        var selectUser, selectedUserId, response, responseData, updateUserForm, error_11;
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
                    updateUserForm = document.querySelector("#selectUserDiv > button.deleteUserBtn");
                    updateUserForm.remove();
                    //  refresh the user list here
                    return [4 /*yield*/, renderAllUsers()];
                case 3:
                    //  refresh the user list here
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    error_11 = _a.sent();
                    console.error(error_11);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}