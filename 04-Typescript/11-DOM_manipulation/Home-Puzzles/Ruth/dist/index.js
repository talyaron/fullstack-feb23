var body = document.body;
var Post = /** @class */ (function () {
    function Post(_author, _imgSrc, _text) {
        this.author = _author;
        this.imgSrc = _imgSrc;
        this.text = _text;
        this.likes = 0;
        this.id = String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
    }
    Post.prototype.addLike = function () {
        this.likes++;
    };
    Post.prototype.getLikes = function () {
        return this.likes;
    };
    Post.prototype.NewPostHtml = function () {
        return "<div class=\"gallery__post\" id = \"" + this.id + "\">\n    <h3 class=\"author\">" + this.author + "</h3>\n    <h3 class=\"author\">" + this.text + "</h3>\n    <img src=" + this.imgSrc + " alt=\"\">\n    <div class=\"likesDiv\">\n      <span onclick=\"doingLike(event)\" class=\"material-symbols-outlined\">favorite</span>\n      <p>" + this.getLikes() + "</p>\n    </div>\n    </div>";
    };
    Post.prototype.renderNewPost = function () {
        var gallery = document.querySelector(".gallery");
        gallery.innerHTML += this.NewPostHtml();
    };
    return Post;
}());
var postsArray = [
    new Post("ruthbentov", "https://cdn.pixabay.com/photo/2023/06/01/06/22/british-shorthair-8032816_1280.jpg", "hello world"),
    new Post("ruthbentov", "https://cdn.pixabay.com/photo/2023/05/01/11/48/bird-7962790_1280.jpg", "hello world"),
    new Post("ruthBentov", "https://cdn.pixabay.com/photo/2023/05/31/18/15/st-stephens-basilica-8031985_1280.jpg", "hello world"),
    new Post("ruthbentov", "https://cdn.pixabay.com/photo/2023/01/16/19/13/laptop-7723139_1280.jpg", "hello world"),
];
postsArray.forEach(function (element) {
    element.renderNewPost();
});
var doingLike = function (event) {
    var idElem = event.target.parentNode.parentNode.id;
    var LikeNum = event.target.parentNode.querySelector("p");
    LikeNum.innerHTML++;
    updateInObject(idElem);
};
var updateInObject = function (idElem) {
    var postById = postsArray.find(function (elem) { return elem.id == idElem; });
    try {
        if (!postById)
            throw new Error();
        postById === null || postById === void 0 ? void 0 : postById.addLike();
    }
    catch (error) {
        console.error(error);
    }
};
