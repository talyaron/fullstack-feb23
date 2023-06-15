// create clown
var clown = /** @class */ (function () {
    function clown(title, imgUrl, id) {
        this.title = title;
        this.imgUrl = imgUrl;
        this.id = id;
    }
    clown.prototype.renderclown = function (clowns) {
        try {
            if (!clowns)
                throw new Error("missing root element");
            var html = "<div  onclick=\"move(this.id)\" class='card' id=\"" + this.id + "\" ><img src=\"" + this.imgUrl + "\"></div>";
            clowns.innerHTML += html;
        }
        catch (error) {
            console.error(error);
        }
    };
    return clown;
}());
function move(clicked_id) {
    debugger;
    var moveclown = document.querySelector("#" + clicked_id);
    document.addEventListener('keyup', function (event) {
        //if arrow up go up. if arrow down go down...
        console.log(event);
    });
}
//get root of clowns class
var clownsHTML = document.querySelector('.clowns');
// new array of clowns
var clowns = [];
//push and render
var newclown = new clown("shiran", "./p1.png", "A1");
newclown.renderclown(clownsHTML);
clowns.push(newclown);
newclown = new clown("ohad", "./p2.png", "A2");
newclown.renderclown(clownsHTML);
clowns.push(newclown);
newclown = new clown("Yarden", "./p3.png", "A3");
newclown.renderclown(clownsHTML);
clowns.push(newclown);
newclown = new clown("Yarden", "./p3.png", "A4");
newclown.renderclown(clownsHTML);
clowns.push(newclown);
document.onkeydown = detectKey;
