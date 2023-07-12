var Friend = /** @class */ (function () {
    function Friend(friendName, friendNumber, url, id) {
        this.friendName = friendName;
        this.friendNumber = friendNumber;
        this.url = url;
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
var friends = [];
function inputAddFriend(event) {
    try {
        event.preventDefault();
        var friendName = event.target.elements.friendName.value;
        var friendNumber = event.target.elements.friendNumber.value;
        var url = event.target.elements.url.value;
        var id = event.target.elements.id;
        var data = new Friend(friendName, friendNumber, url, id);
        friends.push(data);
        event.target.reset();
        var root = document.querySelector("#root");
        render(friends, root);
    }
    catch (error) {
        console.error(error);
    }
}
function render(friends, root) {
    try {
        var html = friends
            .map(function (friend) {
            if (friend.isEdit) {
                return "<div class=\"card\">\n        <form onsubmit=\"handleSetEditFriend(event)\" id=\"" + friend.id + "\">\n        <img src=\"" + friend.url + "\">\n              <input class=input1 type=\"text\" name=\"friendName\" value=\"" + friend.friendName + "\">\n              <input class=input2 type=\"text\" name=\"friendNumber\" value=\"" + friend.friendNumber + "\">\n              <br>\n\n              <button onclick=\"handleDeleteFriend('" + friend.id + "')\">Delete</button>\n              <input type=\"submit\" value=\"SET\">\n          </form>\n        </div>";
            }
            else {
                return "<div class=\"card\">\n          <img src=\"" + friend.url + "\">\n          <p>Name: " + friend.friendName + "</p>\n          <p>Number: " + friend.friendNumber + "</p>\n          <button onclick=\"addToProduct('" + friend.id + "')\"> + </button>\n          <button onclick=\"revToProduct('" + friend.id + "')\"> - </button>\n          <button onclick=\"handleDeleteFriend('" + friend.id + "')\">Delete</button>\n          <button onclick=\"handleEdit('" + friend.id + "')\">Edit</button>\n        </div>";
            }
        })
            .join("");
        root.innerHTML = html;
    }
    catch (error) {
        console.error(error);
        return "";
    }
}
function handleEdit(id) {
    var friend = friends.find(function (friend) { return friend.id === id; });
    if (friend) {
        friend.setEdit(true); // שינוי הערך לעריכה
        var root = document.querySelector("#root");
        render(friends, root);
    }
}
function handleSetEditFriend(event) {
    event.preventDefault();
    var id = event.target.id;
    var friendName = event.target.elements.friendName.value;
    var friendNumber = event.target.elements.friendNumber.value;
    var friend = friends.find(function (friend) { return friend.id === id; });
    if (friend) {
        friend.friendName = friendName;
        friend.friendNumber = friendNumber;
        friend.setEdit(false); // שינוי הערך לצפייה
        var root = document.querySelector("#root");
        render(friends, root);
    }
}
function handleDeleteFriend(id) {
    var index = friends.findIndex(function (friend) { return friend.id === id; });
    if (index !== -1) {
        friends.splice(index, 1);
        var root = document.querySelector("#root");
        render(friends, root);
    }
}
function addToProduct(id) {
    var friend = friends.find(function (friend) { return friend.id === id; });
    if (friend) {
        friend.friendNumber++;
        var root = document.querySelector("#root");
        render(friends, root);
    }
}
function revToProduct(id) {
    var friend = friends.find(function (friend) { return friend.id === id; });
    if (friend) {
        friend.friendNumber--;
        var root = document.querySelector("#root");
        render(friends, root);
    }
}
