// ## Celebs
// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok,
//  account in Instagram, and the number of followers.
var Celeb = /** @class */ (function () {
    function Celeb(name, genre, tiktokAccount, instagramAccount, numberOfFollowers) {
        this.name = name;
        this.genre = genre;
        this.tiktokAccount = tiktokAccount;
        this.instagramAccount = instagramAccount;
        this.numberOfFollowers = numberOfFollowers;
    }
    Celeb.prototype.getFollowersCount = function () {
        return this.numberOfFollowers;
    };
    Celeb.prototype.setFollowersCount = function (numberOfFollowers) {
        this.numberOfFollowers = numberOfFollowers;
    };
    Celeb.prototype.toString = function () {
        return this.name + " is a " + this.genre + " influencer with " + this.numberOfFollowers + " followers on TikTok and " + this.numberOfFollowers + " followers on Instagram.";
    };
    return Celeb;
}());
var galGdot = new Celeb('Gal Gadot', 'Cinema', 'Gal Gadot.tiktok', 'Gal Gadot.instegram', 1212121212);
var jlo = new Celeb('Jennifer Lopez', 'Music', 'Jennifer Lopez.tiktok', 'Jennifer Lopez.instegram', 212121212);
console.log(galGdot.toString());
console.log(jlo.toString());
// 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
// 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)
// ## Moment Class
// 4. Create a class for dates. it gets Date format (new Date()). the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" for instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format "2 seconds past from that date" (getSimpleDate(), getPasedDate())
// const myDate = new Moment(new Date()).
// myDate.getSimpleDate() -> dd/mm/yyyy, hh:mm:ss
// use "setTimeout()" to postpone the time...
// myDate.getPasedDate() -> 2 seconds past from that date
var CustomDate = /** @class */ (function () {
    function CustomDate(date) {
        this.date = date;
    }
    CustomDate.prototype.getFormattedDate = function () {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var hours = this.date.getHours();
        var minutes = this.date.getMinutes();
        var seconds = this.date.getSeconds();
        return day + "/" + month + "/" + year + ", " + hours + ":" + minutes + ":" + seconds;
    };
    CustomDate.prototype.getElapsedSeconds = function () {
        var currentDate = new Date();
        var elapsedMilliseconds = currentDate.getTime() - this.date.getTime();
        var elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
        return elapsedSeconds + " seconds ago from that date";
    };
    return CustomDate;
}());
var currentDate = new Date();
var customDate = new CustomDate(currentDate);
console.log(customDate.getFormattedDate());
console.log(customDate.getElapsedSeconds());
