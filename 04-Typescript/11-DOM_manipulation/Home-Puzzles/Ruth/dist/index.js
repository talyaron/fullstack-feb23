var body = document.body;
var gallery = document.querySelector(".gallery");
// alert(`NEW OPTION :  try click create button :)`)
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
    Post.prototype.NewPostHtml = function (locate) {
        return "<div class=\"post\" id = \"" + this.id + "\">\n    <div class=\"text\">\n    <p class=\"author\">@" + this.author + "</p>\n    <p class=\"paragraph\">" + this.text + "</p>\n    </div>\n    <img src=" + this.imgSrc + " alt=\"\">\n    <div class=\"likesDiv\">\n      <span onclick=\"doingLike(event)\" class=\"material-symbols-outlined\">favorite</span>\n      <p>" + this.getLikes() + "</p>\n    </div>\n    </div>";
    };
    Post.prototype.renderNewPost = function (number) {
        var galleryRight = document.querySelector(".gallery__right");
        var galleryCenter = document.querySelector(".gallery__center");
        var galleryLeft = document.querySelector(".gallery__left");
        if (number % 3 == 0) {
            galleryRight.innerHTML += this.NewPostHtml("right");
        }
        if (number % 3 == 1) {
            galleryCenter.innerHTML += this.NewPostHtml("center");
        }
        if (number % 3 == 2) {
            galleryLeft.innerHTML += this.NewPostHtml("left");
        }
    };
    return Post;
}());
var postsArray = [
    new Post("RacheLevtov691", "https://images.pexels.com/photos/8723490/pexels-photo-8723490.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "see the sea"),
    new Post("PhotoRacheLevtov", "https://images.pexels.com/photos/17094724/pexels-photo-17094724.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "till the end"),
    new Post("Avinoam1", "https://images.pexels.com/photos/14089860/pexels-photo-14089860.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "31 in february was beauty ..."),
    new Post("Ruth_BenTov2", "https://images.pexels.com/photos/14718937/pexels-photo-14718937.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "Hello World"),
    new Post("Mira_Vise_nature", "https://images.pexels.com/photos/16771334/pexels-photo-16771334/free-photo-of-garden-pot-leaf-flowerpot.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "my little flowers <3"),
    new Post("Yahav_official", "https://images.pexels.com/photos/16534784/pexels-photo-16534784/free-photo-of-latte-on-pink-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "COFFEE TIME!"),
    new Post("godman_man345", "https://images.pexels.com/photos/17111340/pexels-photo-17111340/free-photo-of-city-water-street-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", " Love Italy ..."),
    new Post("Ribeka_photographer", "https://images.pexels.com/photos/16981071/pexels-photo-16981071/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "old  pure human ..."),
    new Post("Amitai_BenTov15", "https://images.pexels.com/photos/12513296/pexels-photo-12513296.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "hello world:)"),
    new Post("Ruth#", "https://images.pexels.com/photos/9390250/pexels-photo-9390250.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "old School"),
    new Post("Ravit_lady", "https://images.pexels.com/photos/17117466/pexels-photo-17117466.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "lovely day, opening with flowers"),
    new Post("Daniella_kurz6", "https://images.pexels.com/photos/14093120/pexels-photo-14093120.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "..."),
    new Post("Lotem4", "https://images.pexels.com/photos/17107350/pexels-photo-17107350.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "DAD see ;)"),
    new Post("ruthbentov123456", "https://images.pexels.com/photos/17048927/pexels-photo-17048927/free-photo-of-wood-light-road-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load", "MORNING"),
];
function renderPostsFromData() {
    var i = 0;
    postsArray.forEach(function (element) {
        element.renderNewPost(i);
        i++;
    });
}
function resetGallery() {
    gallery.innerHTML = "<div class=\"gallery__right\"></div>\n  <div class=\"gallery__center\"></div>\n  <div class=\"gallery__left\"></div>";
}
function doingLike(event) {
    var elem = event.target;
    var idElem = event.target.parentNode.parentNode.id;
    var LikeNum = event.target.parentNode.querySelector("p");
    LikeNum.innerHTML++;
    updateInObject(idElem);
}
function updateInObject(idElem) {
    var postById = postsArray.find(function (elem) { return elem.id == idElem; });
    try {
        if (!postById)
            throw new Error();
        postById === null || postById === void 0 ? void 0 : postById.addLike();
        console.log(postById);
    }
    catch (error) {
        console.error(error);
    }
}
function createNewPost() {
    var newUserName = prompt("Enter your Name:");
    var newImgSrc = prompt("Enter source of image:");
    var newText = prompt("Enter text:");
    try {
        if (newUserName && newImgSrc && newText) {
            var newPost = new Post(newUserName, newImgSrc, newText);
            postsArray.push(newPost);
            newPost.renderNewPost(postsArray.length);
        }
        else
            throw new Error("undefine values");
    }
    catch (error) {
        console.error(error);
        alert(error + " the post will not render!");
    }
}
