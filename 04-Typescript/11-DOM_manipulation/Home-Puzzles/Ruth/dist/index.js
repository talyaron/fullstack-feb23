var body = document.body;
var Post = /** @class */ (function () {
    function Post(_author, _imgSrc, _text) {
        this.author = _author;
        this.imgSrc = _imgSrc;
        this.text = _text;
        this.likes = 0;
    }
    Post.prototype.addLike = function () {
        this.likes++;
    };
    Post.prototype.getLikes = function () {
        return this.likes;
    };
    Post.prototype.NewPostHtml = function () {
        return "<div class=\"gallery__post\">\n    <h3 class=\"author\">" + this.author + "</h3>\n    <h3 class=\"author\">" + this.text + "</h3>\n    <img src=" + this.imgSrc + " alt=\"\">\n    <div class=\"likesDiv\">\n      <span class=\"material-symbols-outlined\">favorite</span>\n      <p>" + this.getLikes() + "</p>\n    </div>\n    </div>";
    };
    Post.prototype.renderNewPost = function () {
        var gallery = document.querySelector(".gallery");
        gallery.innerHTML += this.NewPostHtml();
    };
    return Post;
}());
// const post1 = new Post ("ruthbentov" , "https://cdn.pixabay.com/photo/2023/06/01/06/22/british-shorthair-8032816_1280.jpg", "hello world")
// post1.renderNewPost();
