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
function handleGetPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, posts, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/API/posts/get-posts')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    posts = (_a.sent()).posts;
                    console.log(posts);
                    renderPosts(posts, document.querySelector("#posts"));
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
function handeleAddPost(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var email, content, featuredImage, category, newPost, response, posts, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    ev.preventDefault();
                    email = getEmailFromQuery();
                    if (!email)
                        throw new Error("no email");
                    content = ev.target.elements.content.value;
                    featuredImage = ev.target.elements.featuredImage.value;
                    category = ev.target.elements.category.value;
                    console.log("Title:", content);
                    console.log("PostUrl:", featuredImage);
                    console.log("PostUrl:", category);
                    newPost = { content: content, featuredImage: featuredImage, category: category, email: email };
                    console.log("New Post:", newPost);
                    return [4 /*yield*/, fetch('http://localhost:3000/API/posts/add-post', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newPost)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    posts = (_a.sent()).posts;
                    console.log("Posts:", posts);
                    renderPosts(posts, document.querySelector("#posts"));
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
function renderPost(post) {
    try {
        var html = "<img src=\"" + post.featuredImage + "\" alt=\"" + post.content + "\">\n        <p> = \"" + post.category + "\"";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
// Function to render the post with a content
function renderPostWithTitle(post) {
    try {
        var html = "\n            <div>\n                <h2>" + post.content + "</h2>\n                <img src=\"" + post.featuredImage + "\" alt=\"" + post.category + "\">\n                <p>  \"" + post.category + "\"\n            </div>\n        ";
        return html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function renderPosts(posts, DIVElem) {
    try {
        if (!DIVElem)
            throw new Error("no div element");
        var html = "<ul>";
        // Render each post with title
        html += posts.map(function (post) { return "<li>" + renderPostWithTitle(post) + "</li>"; }).join("");
        html += "</ul>";
        DIVElem.innerHTML = html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
