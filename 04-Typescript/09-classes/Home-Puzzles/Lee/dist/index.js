// ## Celebs
// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.
// 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
var Celeb = /** @class */ (function () {
    function Celeb(celebName, genre, tiktok, ig, followers) {
        this.celebName = celebName;
        this.genre = genre;
        this.tiktok = tiktok;
        this.ig = ig;
        this.followers = followers;
    }
    Celeb.prototype.setFollowers = function () {
    };
    return Celeb;
}());
var mayaD = new Celeb("Maya Dagan", "pop culture", "maya_D", "Maya Dagan", 63000);
console.log(mayaD);
var demiB = new Celeb("Demi Bagby", "sport", "demi_b", "Demi Bagby", 2600000);
console.log(demiB);
