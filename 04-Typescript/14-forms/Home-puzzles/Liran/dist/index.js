var User = /** @class */ (function () {
    function User(userName, age, favorite, picture) {
        this.userName = userName;
        this.age = age;
        this.favorite = favorite;
        this.picture = picture;
        this.userID = userIdNumber++;
    }
    return User;
}());
var userIdNumber = 1;
var allowDelete = false;
var userArray = new Array();
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        console.dir(ev);
        if (ev.target.id == "Input") {
            var username = ev.target.username.value;
            var picture = ev.target.userPic.value;
            var age = new Date().getFullYear() - ev.target.age.valueAsNumber;
            var vColor = ev.target.favorite.value;
            var user = new User(username, age, vColor, picture);
            userArray.push(user);
            renderCard(user, false, null);
        }
        else {
            var userNameToUpdate_1 = ev.target.usernameToUpdate.value;
            var user = userArray.find(function (element) { return element.userName === userNameToUpdate_1; });
            if (user === null || user == undefined)
                throw new Error("Error");
            var userId = user.userID;
            var userProfile = document.querySelector("#card" + userId);
            if (userProfile === null)
                throw new Error("Error");
            if (!allowDelete) {
                var newUsername = ev.target.newUsername.value;
                if (newUsername !== null && newUsername !== undefined && newUsername !== "") {
                    user.userName = newUsername;
                }
                var picture = ev.target.newUserPic.value;
                if (picture !== null && picture !== undefined && picture !== "") {
                    user.picture = picture;
                }
                var newAge = ev.target.newAge.valueAsNumber;
                if (newAge !== null && newAge !== undefined && !isNaN(newAge)) {
                    user.age = new Date().getFullYear() - newAge;
                }
                var vColor = ev.target.newFavorite.value;
                if (vColor !== null && vColor !== undefined && vColor !== "") {
                    user.favorite = vColor;
                }
                debugger;
                userProfile.innerHTML = "";
                renderCard(user, true, userProfile);
            }
            else {
                userProfile.innerHTML = "";
                var deleteUser = userArray.findIndex(function (element) { return element.userID === userNameToUpdate_1; });
                userArray.splice(deleteUser, 1);
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function backgroundC(str, id) {
    try {
        var bc = document.querySelector("#card" + id);
        console.log(bc);
        if (!bc)
            throw new Error("Error");
        bc.style.backgroundColor = str;
        bc.style.color = (parseInt(str) / (2)).toString();
    }
    catch (error) {
        console.error(error);
    }
}
function renderCard(user, update, userCard) {
    try {
        var cards = void 0;
        if (update) {
            cards = userCard;
        }
        else {
            cards = document.querySelector("#cards");
        }
        if (!cards)
            throw new Error("Missing information");
        cards.innerHTML += "<div id=\"card" + user.userID + "\" class=\"card\">\n            <div\">\n                <div class=\"userName\">Name: " + user.userName + "</div>\n                <div class=\"age\">Age: " + user.age + "</div>\n            <img class=\"image\" src=\"" + user.picture + "\">\n        </div> </div> ";
        backgroundC(user.favorite, user.userID.toString());
    }
    catch (error) {
        console.error(error);
    }
}
function checkDelete(ev) {
    try {
        if (ev.target.checked === true)
            allowDelete = true;
        else
            allowDelete = false;
    }
    catch (error) {
        console.error(error);
    }
}
