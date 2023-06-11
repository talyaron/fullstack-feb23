var Celebs = /** @class */ (function () {
    function Celebs(_name, _genre, _tikTokAccount, _instagramAccount, _followers) {
        this.name = _name;
        this.genre = _genre;
        this.tikTokAccount = _tikTokAccount;
        this.instagramAccount = _instagramAccount;
        this.followers = _followers;
    }
    Celebs.prototype.getFollowers = function () {
        return this.followers;
    };
    Celebs.prototype.setFollowers = function (_newNumberOfFollowers) {
        try {
            if (isNaN(_newNumberOfFollowers) || !_newNumberOfFollowers)
                throw new Error(_newNumberOfFollowers + " is not a number");
            this.followers = _newNumberOfFollowers;
        }
        catch (error) {
            console.error(error);
        }
    };
    return Celebs;
}());
function mostPopular(celebs) {
    var temp = celebs[0];
    for (var i = 0; i < celebs.length; i++) {
        if (temp.followers < celebs[i].followers)
            temp = celebs[i];
    }
    return temp.name + " have the most bigger number of followers with " + temp.getFollowers();
}
function sortedByFollowers(celebs) {
    var temp = celebs[0];
    for (var i = 0; i < celebs.length; i++) {
        for (var j = 0; j < celebs.length - 1 - i; j++) {
            console.log(celebs);
            console.log(i, j);
            if (celebs[j].followers > celebs[j + 1].followers) {
                console.log(celebs[j].followers, celebs[j + 1].followers);
                temp = celebs[j + 1];
                celebs[j + 1] = celebs[j];
                celebs[j] = temp;
            }
        }
    }
    return celebs;
}
var yodaLevi = new Celebs("Yehuda Levi", "actor", "www.tiktok.com", "www.instegram.com", 2000);
var amosTammam = new Celebs("Amos Tamam ", "actor", "www.tiktok.com", "www.instegram.com", 1000);
var yonitLevi = new Celebs("Yonit Levi", "newscaster", "www.tiktok.com", "www.instegram.com", 20);
var hadarMarks = new Celebs("Hadar Marks", "radio broadcaster", "www.tiktok.com", "www.instegram.com", 20080);
console.log(yodaLevi.followers);
yodaLevi.setFollowers(67);
console.log(yodaLevi.getFollowers());
var arrayCel = [yodaLevi, amosTammam, yonitLevi, hadarMarks];
console.log(arrayCel);
console.log(mostPopular(arrayCel));
console.log(sortedByFollowers(arrayCel));
