// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram,
// and the number of followers.
var _a;
var Celeb = /** @class */ (function () {
    function Celeb(name, genre, accountInTikTok, accountInInstagram, numberOfFollowers) {
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
    Celeb.prototype.enterFollowrs = function (followrs) {
        try {
            if (isNaN(followrs))
                throw new Error("This is not a number!");
            this.numberOfFollowers = followrs;
            return followrs;
        }
        catch (error) {
            console.error(error);
        }
    };
    Celeb.prototype.enterTikTokAccount = function (tiktok) {
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
    Celeb.prototype.showFolowers = function () {
        return this.numberOfFollowers;
    };
    Celeb.prototype.showTikTokAccount = function () {
        return this.accountInTikTok;
    };
    return Celeb;
}());
// 3. create a function that gets all the celebs and returns the celeb with the most followers.
//    Even better, return a list of celebs, ordered by their number of followers. (use array).
function theMostFolowers(celebs) {
    try {
        var theMostFolowers_1 = celebs[0];
        for (var i = 0; i < celebs.length; i++) {
            if (theMostFolowers_1.numberOfFollowers < celebs[i].numberOfFollowers) {
                theMostFolowers_1 = celebs[i];
            }
        }
        return theMostFolowers_1;
    }
    catch (error) {
        console.error(error);
    }
}
"The celeb how have the most followers is";
var Adir = new Celeb("Adir", "Instagram personality", "Adirmiz", "Adir Mizrahi", 10);
var Nofar = new Celeb("Nofar", "friend with a funny instegram", "nufarthequeen", "nufarhashavia", 5);
var Maya = new Celeb("Maya", "comedian and actress", "Mayawertheimer", "Mayawertheimer", 20);
console.log(Adir);
console.log(Nofar);
console.log(Maya);
Adir.enterFollowrs(1000);
Nofar.enterFollowrs(50);
Maya.enterFollowrs(200);
var celebs = [Adir, Nofar, Maya];
console.log("The celebrity with the most followers is", (_a = theMostFolowers(celebs)) === null || _a === void 0 ? void 0 : _a.name);
Adir.enterTikTokAccount("hi");
Nofar.enterTikTokAccount("I dont have a tiktot");
Maya.enterTikTokAccount("bla bla");
