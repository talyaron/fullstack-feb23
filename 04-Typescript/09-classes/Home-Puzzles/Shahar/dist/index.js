// ## Celebs
// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.
// 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
var Celeb = /** @class */ (function () {
    function Celeb(userName, genre, tiktokAccount, instegramAccount, numberOfFollow) {
        this.userName = userName;
        this.genre = genre;
        this.tiktokAccount = tiktokAccount;
        this.instegramAccount = instegramAccount;
        this.numberOfFollow = numberOfFollow;
    }
    Celeb.prototype.setFollowers = function (num) {
        if (num === null) {
            return;
        }
        this.numberOfFollow = num * 10;
        return this.numberOfFollow;
    };
    Object.defineProperty(Celeb.prototype, "getFollowers", {
        get: function () {
            return this.numberOfFollow;
        },
        enumerable: false,
        configurable: true
    });
    return Celeb;
}());
var wow = new Celeb("Meidan", "Coding", "TheLastHope", "Mandy", 500);
console.log(wow.getFollowers);
console.log(wow.setFollowers(8));
console.log(wow.getFollowers);
// mission 3
// 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)
var celebs = [
    new Celeb("Meidan", "Coding", "TheLastHope", "Mandy", 500),
    new Celeb("Shahar", "Coding", "TheLastHope", "Mandy", 400),
    new Celeb("Moshe", "Coding", "TheLastHope", "Mandy", 300),
];
for (var i = 0; i < 5; i++) { }
