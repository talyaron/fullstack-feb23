//1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.
// 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
// 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)
// ## Moment Class
// 4. Create a class for dates. it gets Date format (new Date()). the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" for instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format "2 seconds past from that date" (getSimpleDate(), getPasedDate())
// const myDate = new Moment(new Date()).
// myDate.getSimpleDate() -> dd/mm/yyyy, hh:mm:ss
// use "setTimeout()" to postpone the time...
// myDate.getPasedDate() -> 2 seconds past from that date
// 1.
var Celeb = /** @class */ (function () {
    function Celeb(name, genre, facebookAccount, instagramAccgount, numfollowers) {
        this.name = name;
        this.genre = genre;
        this.facebookAccount = facebookAccount;
        this.instagramAccgount = instagramAccgount;
    }
    // 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
    //    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
    Celeb.prototype.setNumFollowers = function (followers) {
        try {
            if (isNaN(followers))
                throw new Error('The value of followers must be a number');
            this.numfollowers = followers;
            return this.numfollowers;
        }
        catch (error) {
            console.error(error);
            return;
        }
    };
    Celeb.prototype.getNumFollowers = function () {
        console.log("The number of followers: " + this.numfollowers);
    };
    Celeb.prototype.getTikTokAccount = function () {
        console.log("FaceBook account: " + this.facebookAccount);
    };
    return Celeb;
}());
var littleBig = new Celeb('Little Big', 'Music', 'https://www.facebook.com/littlebigbandofficial/', 'https://www.instagram.com/littlebigband/', 859000);
var kamelot = new Celeb('Kamelot', 'Music', 'https://www.facebook.com/kamelotofficial/', 'https://www.instagram.com/kamelotofficial/', 130000);
var dwayneJohnson = new Celeb('Dwayne Johnson', 'Sports', 'https://www.facebook.com/DwayneJohnson', 'https://www.instagram.com/therock/', 382000000);
var conorMcGregor = new Celeb('Conor McGregor', 'MMA', 'https://www.facebook.com/thenotoriousmma', 'https://www.instagram.com/thenotoriousmma/', 46600000);
littleBig.setNumFollowers(900000);
kamelot.setNumFollowers(140000);
dwayneJohnson.setNumFollowers(383000000);
conorMcGregor.setNumFollowers(46700000);
console.log(littleBig);
console.log(kamelot);
console.log(dwayneJohnson);
console.log(conorMcGregor);
// 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)
var celebs = [littleBig, kamelot, dwayneJohnson, conorMcGregor];
function sortCelebsByFollowersAmount(celeb1, celeb2, celeb3, celeb4) {
    var sortedData = celebs.sort(function (a, b) { return b[4] - a[4]; });
    console.log(sortedData);
}
console.log(sortCelebsByFollowersAmount(littleBig, kamelot, dwayneJohnson, conorMcGregor));
