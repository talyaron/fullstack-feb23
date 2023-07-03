//model
var Friend = /** @class */ (function () {
    function Friend(name, image, phoneNumber, id) {
        this.name = name;
        this.image = image;
        this.phoneNumber = phoneNumber;
        this.isEdit = false;
        if (id) {
            this.id = id;
        }
        else {
            this.id = "id-" + new Date().getTime() + "-" + Math.random();
        }
    }
    Friend.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Friend;
}());
var friends = getFriendsFromStorage();
renderAllFriends(friends, document.querySelector("#rootFriends"));
function getFriendsFromStorage() {
    try {
        //get friends from locastorage (string)
        var friendsString = localStorage.getItem("friends");
        if (!friendsString)
            return [];
        //convert string to array of objects
        var friendsArray = JSON.parse(friendsString);
        //convert array of objects to array of friends
        var friends_1 = friendsArray.map(function (friend) {
            return new Friend(friend.name, friend.image, friend.phoneNumber, friend.id);
        });
        return friends_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
//view
//input form
// from view to model: view-control-model
function handleAddFriend(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var image = ev.target.elements.image.value;
        var phoneNumber = ev.target.elements.phoneNumber.value;
        var newFriend = new Friend(name, image, phoneNumber);
        friends.push(newFriend);
        renderAllFriends(friends, document.querySelector("#rootFriends"));
        //save to localStorage
        localStorage.setItem("friends", JSON.stringify(friends));
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
//render list of friends
//model -> controler --> view
function renderAllFriends(friends, htmlElement) {
    try {
        if (!htmlElement)
            throw new Error("No element");
        var html = friends.map(function (friend) { return renderFriendCard(friend); }).join(" ");
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderFriendCard(friend) {
    try {
        if (friend.isEdit) {
            return "<div class=\"card\">\n                    <img src=\"" + friend.image + "\">\n                    <form onsubmit=\"handleSetEditFriend(event)\" id=\"" + friend.id + "\">\n                        <input type=\"text\" name=\"name\" value=\"" + friend.name + "\">\n                        <input type=\"text\" name=\"phoneNumber\" value=\"" + friend.phoneNumber + "\">\n                        <br>\n                        <button onclick=\"handleDeleteFriend('" + friend.id + "')\">Delete</button>\n                        <input type=\"submit\" value=\"SET\">\n                    </form>\n                </div>\n                ";
        }
        else {
            return "<div class=\"card\">\n        <img src=\"" + friend.image + "\">\n        <p>" + friend.name + "</p>\n        <p>" + friend.phoneNumber + "</p>\n        <button onclick=\"handleDeleteFriend('" + friend.id + "')\">Delete</button>\n        <button onclick=\"handleEdit('" + friend.id + "')\">Edit</button>\n    </div>\n";
        }
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
//Delete
//button (view (card)) -> control to delete from array -> edit model (and save to local) -> reder new model-view
function handleDeleteFriend(friendId) {
    try {
        var index = friends.findIndex(function (friend) { return friend.id === friendId; });
        if (index === -1)
            throw new Error("Could not find friend");
        friends.splice(index, 1);
        localStorage.setItem("friends", JSON.stringify(friends));
        renderAllFriends(friends, document.querySelector("#rootFriends"));
    }
    catch (error) {
        console.error(error);
    }
}
//Edit
//
// enable editing
function handleEdit(friendId) {
    try {
        var friend = friends.find(function (friend) { return friend.id === friendId; });
        if (!friend)
            throw new Error("couldnt find friend");
        friend.setEdit(true);
        renderAllFriends(friends, document.querySelector("#rootFriends"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetEditFriend(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var phoneNumber = ev.target.phoneNumber.value;
        var friendId_1 = ev.target.id;
        var friend = friends.find(function (friend) { return friend.id === friendId_1; });
        if (!friend)
            throw new Error("couldnt find friend");
        friend.name = name;
        friend.phoneNumber = phoneNumber;
        friend.setEdit(false);
        console.log(friends);
        localStorage.setItem("friends", JSON.stringify(friends));
        renderAllFriends(friends, document.querySelector("#rootFriends"));
    }
    catch (error) {
        console.error(error);
    }
}
