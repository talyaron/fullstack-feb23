var User = /** @class */ (function () {
    function User(userName, userImg, userEmail, userColor, yearOfBirth, cardsWidth, renderTime) {
        this.userName = userName;
        this.userImg = userImg;
        this.userEmail = userEmail;
        this.userColor = userColor;
        this.cardsWidth = cardsWidth;
        this.renderTime = renderTime;
        this.userAge = new Date().getFullYear() - yearOfBirth;
        this.ID = String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");
    }
    User.prototype.renderUser = function (root) {
        for (var i = 0; i < this.renderTime; i++) {
            root.innerHTML += "\n        <div class=\"userCard\" style= \"background-color:" + this.userColor + "; width:" + this.cardsWidth + "%;\">\n        <h3>" + this.userName + "</h3>\n        <p>e-mail address: " + this.userEmail + "</p>\n        <img class=\"userImg\" src=\"" + this.userImg + "\" alt=\"\" />\n        <p> age: " + this.userAge + "</p>\n        <button onclick = \"removeUser('" + this.ID + "')\">remove</button>\n        </div>\n        ";
        }
    };
    User.prototype.editUser = function (_userName, _userImg, _userEmail, _userColor, _yearOfBirth, _cardsWidth, _renderTime) {
        this.userName = _userName || this.userName;
        this.userImg = _userImg || this.userImg;
        this.userEmail = _userEmail || this.userEmail;
        this.userColor = _userColor || this.userColor;
        this.userAge = !isNaN(_yearOfBirth)
            ? new Date().getFullYear() - _yearOfBirth
            : this.userAge;
        this.cardsWidth = !isNaN(_cardsWidth) ? _cardsWidth : this.cardsWidth;
        this.renderTime = !isNaN(_renderTime) ? _renderTime : this.renderTime;
        gallery.innerHTML = "";
        users.forEach(function (user) { return user.renderUser(gallery); });
    };
    return User;
}());
var gallery = document.querySelector(".gallery");
var editDivChanges = document.querySelector(".editDivChanges");
var users = [new User("f,lr", "frffr", ",l,l,l", "mkmk", 89, 90, 9)];
users.forEach(function (user) { return user.renderUser(gallery); });
function addUser(event) {
    try {
        event.preventDefault();
        var newUserName = event.target.userName.value;
        var newUserImg = event.target.userImg.value;
        var newUserEmail = event.target.userEmail.value;
        var newUserColor = event.target.userColor.value;
        var newUserYear = event.target.yearOfBirth.valueAsNumber;
        var cardWidth = event.target.cardWidth.valueAsNumber;
        var timeToRender = event.target.timeToRender.valueAsNumber;
        var newUser = new User(newUserName, newUserImg, newUserEmail, newUserColor, newUserYear, cardWidth, timeToRender);
        users.push(newUser);
        newUser.renderUser(gallery);
    }
    catch (error) {
        console.error(error);
        return;
    }
}
function removeUser(id) {
    users = users.filter(function (user) { return user.ID != id; });
    gallery.innerHTML = "";
    users.forEach(function (user) { return user.renderUser(gallery); });
    editDivChanges.style.display = "none";
}
function HandleEditUser(event) {
    event.preventDefault();
    var emailToEdit = document.querySelector("#userEmailToEdit");
    var emailToEditValue = emailToEdit.value;
    var userToEdit = users.find(function (user) { return user.userEmail == emailToEditValue; });
    var newUserName = event.target.editUserName.value;
    var newUserImg = event.target.editUserImg.value;
    var newUserEmail = event.target.editUserEmail.value;
    var newUserColor = event.target.editUserColor.value;
    var newUserYear = event.target.editYearOfBirth.valueAsNumber;
    var cardWidth = event.target.editTimeToRender.valueAsNumber;
    var timeToRender = event.target.editCardWidth.valueAsNumber;
    userToEdit.editUser(newUserName, newUserImg, newUserEmail, newUserColor, newUserYear, cardWidth, timeToRender);
}
function findUserToEdit() {
    var emailToEdit = document.querySelector("#userEmailToEdit");
    var emailToEditValue = emailToEdit.value;
    if (users.some(function (elem) { return elem.userEmail === emailToEditValue; })) {
        editDivChanges.style.display = "block";
        return true;
    }
    else {
        alert("not found user with this email address , please try again");
        return false;
    }
}
