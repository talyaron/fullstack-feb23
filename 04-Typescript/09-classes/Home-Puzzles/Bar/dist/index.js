// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram,
// and the number of followers.
var Celebs = /** @class */ (function () {
    function Celebs(name, genre, accountInTikTok, accountInInstagram, numberOfFollowers) {
        this.name = name;
        this.genre = genre;
        this.accountInTikTok = accountInTikTok;
        this.accountInInstagram = accountInInstagram;
        this.numberOfFollowers = numberOfFollowers;
    }
    // 2. based on question number one, create a method to set the number of followers
    //    and another method to get the number of followers.
    //    Create a few celebs-objects, and set the number of followers.
    //    Write to the console each celeb TikTok account.
    Celebs.prototype.enterFollowrs = function (followrs) {
        try {
            if (isNaN(followrs))
                throw new Error("This is not a number!");
            this.numberOfFollowers = followrs;
            return followrs;
        }
        catch (error) {
            console.error(error);
            return isNaN;
        }
    };
    Celebs.prototype.enterTikTokAccount = function (tiktok) {
        try {
            if (Number(tiktok))
                throw new Error("This is not a TikTok accuont!");
            this.accountInTikTok = tiktok;
            return tiktok;
        }
        catch (error) {
            console.error(error);
        }
    };
    Celebs.prototype.showFolowers = function () {
        return this.numberOfFollowers;
    };
    Celebs.prototype.showTikTokAccount = function () {
        return this.accountInTikTok;
    };
    return Celebs;
}());
var adir = new Celebs("Adir", "Instagram personality", "adirmiz", "Adir Mizrahi", 126000);
var nofar = new Celebs("nofar", "friend with a funny instegram", "nufarthequeen", "nufarhashavia", 712);
var maya = new Celebs("maya", "comedian and actress", "mayawertheimer", "mayawertheimer", 535000);
console.log(adir);
console.log(nofar);
console.log(maya);
adir.enterFollowrs(100);
nofar.enterFollowrs(5000);
maya.enterFollowrs(50000);
adir.enterTikTokAccount("hi");
nofar.enterTikTokAccount("I dont hev tiktot");
maya.enterTikTokAccount("bla bla");
// 3. create a function that gets all the celebs and returns the celeb with the most followers.
//    Even better, return a list of celebs, ordered by their number of followers. (use array).
