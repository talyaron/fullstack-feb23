// model
var Friend = /** @class */ (function () {
    function Friend(name, image, phonenumber) {
        this.name = name;
        this.image = image;
        this.phonenumber = phonenumber;
        this.id = "id- " + new Date().getTime() + "-" + Math.random();
    }
    return Friend;
}());
var friend = [];
// view
// input form- in html
// from view to model: view-control-model
function handleAddFriend(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var image = ev.target.elements.img.value;
        var phonenumber = ev.target.elements.PhoneNumber.value;
        var newFriend = new Friend(name, image, phonenumber);
        friend.push(newFriend);
        // save to localstorage
        var newObj = structuredClone(newFriend);
        newObj.name;
        localStorage.setItem("friend", JSON.stringify(friend));
        console.log(friend);
    }
    catch (error) {
        console.error(error);
    }
}
