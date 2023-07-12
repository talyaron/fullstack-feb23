// ## Celebs
// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.
// 2. based on question number one, create a method to set the number of followers and another method to get the    number of followers.
// //    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
var celeb = /** @class */ (function () {
    function celeb(name, genre, instgramaccount, tiktiokaccount, instgramaccountnumber, tiktiokaccountnubmer) {
        this.name = name;
        this.genre = genre;
        this.instgramaccount = instgramaccount;
        this.tiktiokaccount = tiktiokaccount;
        this.instgramaccountnumber = instgramaccountnumber;
        this.tiktiokaccountnubmer = tiktiokaccountnubmer;
    }
    celeb.prototype.allfollowers = function () {
        return this.instgramaccountnumber + this.tiktiokaccountnubmer;
    };
    return celeb;
}());
var Kh = new celeb("kevin hart", "Comedian", "imkevinhart", "kevinhart4real", 3500, 3500);
var totalfollowers = Kh.allfollowers();
console.log(Kh);
console.log(totalfollowers);
