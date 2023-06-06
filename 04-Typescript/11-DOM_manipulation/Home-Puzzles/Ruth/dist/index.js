var body = document.body;
var Post = /** @class */ (function () {
    function Post(_author, _imgSrc, _text) {
        this.author = _author;
        this.imgSrc = _imgSrc;
        this.text = _text;
        this.likes = 0;
    }
    return Post;
}());
