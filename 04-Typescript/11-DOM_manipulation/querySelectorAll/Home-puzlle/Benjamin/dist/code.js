var arrayLength = 5;
var arr = Array(arrayLength).fill(undefined);
var i = 0;
arr.forEach(function (pic) {
    var m = prompt("please provide a link to your picture");
    if (m) {
        arr.splice(i, 1, m);
    }
    i++;
});
console.log(arr);
var root = document.querySelector("#root");
var picturesHTML = "<div class='wrapper'>";
picturesHTML += arr.map(function (picture) {
    return "<img class=\"img\" src=" + picture + " alt=\"\">";
}).join(" ");
picturesHTML += "</div>";
if (root) {
    root.innerHTML = picturesHTML;
}
