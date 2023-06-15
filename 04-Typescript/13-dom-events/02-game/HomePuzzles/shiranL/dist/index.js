// create clown
var clown = /** @class */ (function () {
    function clown(title, imgUrl, id) {
        this.title = title;
        this.imgUrl = imgUrl;
    }
    clown.prototype.renderclown = function (clowns) {
        try {
            if (!clowns)
                throw new Error("missing root element");
            var html = "<div class='card' id=\"" + this.id + "\" onClick=\"reply_click(this.id)\" ><img src=\"" + this.imgUrl + "\"></div>";
            clowns.innerHTML += html;
        }
        catch (error) {
            console.error(error);
        }
    };
    return clown;
}());
function reply_click(clicked_id) {
    debugger;
    console.log(clicked_id);
    return (clicked_id);
}
//get root of clowns class
var clownsHTML = document.querySelector('.clowns');
// new array of clowns
var clowns = [];
//push and render
var newclown = new clown("shiran", "./p1.png", 1);
newclown.renderclown(clownsHTML);
clowns.push(newclown);
newclown = new clown("ohad", "./p2.png", 2);
newclown.renderclown(clownsHTML);
clowns.push(newclown);
newclown = new clown("Yarden", "./p3.png", 3);
newclown.renderclown(clownsHTML);
clowns.push(newclown);
newclown = new clown("Yarden", "./p3.png", 4);
newclown.renderclown(clownsHTML);
clowns.push(newclown);
//console.log(clowns);
// get id from flick and move the element 
// document.addEventListener('click', (event: Event) => {
//     //if arrow up go up. if arrow down go down...
//     console.log(event);
// });
