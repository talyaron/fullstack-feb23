// ## Celebs
// 1. create a class of celebs (influencers) 
// with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.
var Celebs = /** @class */ (function () {
    function Celebs(name, genre, tiktok, instagram, followers) {
        this.name = name;
        this.genre = genre;
        this.tiktok = tiktok;
        this.instagram = instagram;
        this.followers = followers;
    }
    Celebs.prototype.setFollowers = function (num) {
        this.followers = num;
        return num;
    };
    Celebs.prototype.checkFollowers = function () {
        return this.followers;
    };
    return Celebs;
}());
var jackson = new Celebs("Michael Jackson", " pop", "http://google.com", "http://google.com", 350);
var lawrence = new Celebs("JENNIFER LAWRENCE", " Actor, Narrator, Producer, Self", "http://google.com", "http://google.com", 200);
var clooney = new Celebs("GEORGE CLOONEY", " actor", "http://google.com", "http://google.com", 3000);
var depp = new Celebs("JOHNNY DEPP", " actor", "http://google.com", "http://google.com", 500);
// 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
var arr = [
    { jackson: jackson },
    { lawrence: lawrence },
    { clooney: clooney }, { depp: depp }
];
jackson.setFollowers(500);
console.log(jackson.checkFollowers());
console.log(jackson.tiktok);
console.log(lawrence.tiktok);
console.log(clooney.tiktok);
console.log(depp.tiktok);
// 
