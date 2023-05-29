// ## Celebs
// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.
var allCelebs = [];
var Celeb = /** @class */ (function () {
    function Celeb(nameFull, genre, accountTikTok, accountInstagram, numberOfFollowers) {
        this.nameFull = nameFull;
        this.genre = genre;
        this.accountTikTok = accountTikTok;
        this.accountInstagram = accountInstagram;
        this.numberOfFollowers = numberOfFollowers;
        allCelebs.push(this);
    }
    Object.defineProperty(Celeb.prototype, "Followers", {
        // 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
        //    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
        get: function () {
            return this.numberOfFollowers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Celeb.prototype, "setFollowers", {
        set: function (num) {
            this.numberOfFollowers = num;
        },
        enumerable: false,
        configurable: true
    });
    return Celeb;
}());
function getCelebs() {
    return [CelebOne, CelebTwo, CelebThree];
}
console.log(allCelebs, 0);
var CelebOne = new Celeb("Arnold Schwarzenegger", "Action", "https://www.tiktok.com/@arnoldschnitzel?lang=en", "https://www.instagram.com/schwarzenegger/?hl=en", 5000000);
console.log(allCelebs, 1);
var CelebTwo = new Celeb("Kevin Hart", "Comedy", "https://www.tiktok.com/discover/Kevin-Hart?lang=en", "https://www.instagram.com/kevinhart4real/?hl=en", 1000000);
console.log(allCelebs, 2);
var CelebThree = new Celeb("John Mcguinness", "Racer", "https://www.tiktok.com/discover/John-Mcguiness", "https://www.instagram.com/jm130tt/?hl=en", 20000);
console.log(allCelebs, 3);
console.log("This is the init Celeb folowers: " + CelebOne.Followers);
CelebOne.setFollowers = 100;
console.log("This is after set Celeb folowers: " + CelebOne.Followers);
// 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)
function orderByCellebs() {
    return allCelebs.sort(function (a, b) { return b.Followers - a.Followers; });
}
console.log(orderByCellebs());
// ## Moment Class
// 4. Create a class for dates. it gets Date format (new Date()). 
//the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" for instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format "2 seconds past from that date" (getSimpleDate(), getPasedDate())
// const myDate = new Moment(new Date()).
// myDate.getSimpleDate() -> dd/mm/yyyy, hh:mm:ss
// use "setTimeout()" to postpone the time...
// myDate.getPasedDate() -> 2 seconds past from that date
var myDate = /** @class */ (function () {
    function myDate() {
        this.date = new Date();
    }
    myDate.prototype.getSimpleDate = function () {
        //format dd/mm/yyyy, hh:mm:ss
        return this.date.toLocaleDateString() + " " + this.date.toLocaleTimeString();
    };
    myDate.prototype.addSeconds = function (seconds) {
        this.date.setSeconds(this.date.getSeconds() + seconds);
    };
    return myDate;
}());
var a = new myDate();
console.log(a.getSimpleDate());
a.addSeconds(2);
console.log(a.getSimpleDate());
// class Celebs {
//   celebsList: Celeb[] = [];
//   addCeleb(celeb: Celeb) {
//     this.celebsList.push(celeb);
//   }
//   viewSortedCelebs(){
//   }
// }
