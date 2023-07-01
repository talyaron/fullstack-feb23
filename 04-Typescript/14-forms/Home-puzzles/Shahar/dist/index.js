var Profile = /** @class */ (function () {
    function Profile(userPic, widthPic, color) {
        this.userPic = userPic;
        this.widthPic = widthPic;
        this.color = color;
        this.id = "id-" + Math.random();
    }
    return Profile;
}());
var profileArray = new Array();
function handleSubmit(ev) {
    try {
        ev.preventDefault();
        var userPic = ev.target.userPic.value;
        var widthPic = ev.target.widthPic.value;
        var color = ev.target.color.value;
        var profile = new Profile(userPic, widthPic, color);
        profileArray.push(profile);
        renderCards(profileArray, document.querySelector("#cards"));
    }
    catch (error) {
        console.error(error);
    }
    console.dir(ev);
}
function renderCards(profiles, element) {
    try {
        if (!element)
            throw new Error("element is not defined");
        var html = profiles.map(function (profile) { return renderCard(profile); }).join(" ");
        element.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderCard(profile) {
    try {
        var html = "<div id=\"" + profile.id + "\" class=\"card\" style=\"width:" + profile.widthPic + "vh; background-color:" + profile.color + "\"; >\n        <img class=\"image\" src=\"" + profile.userPic + "\">\n      </div>";
        return html;
    }
    catch (error) {
        console.error(error);
    }
}
