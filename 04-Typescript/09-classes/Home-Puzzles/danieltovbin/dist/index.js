//   ## Celebs
// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.
// 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
// 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)
// ## Moment Class
// 4. Create a class for dates. it gets Date format (new Date()). the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" for instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format "2 seconds past from that date" (getSimpleDate(), getPasedDate())
// const myDate = new Moment(new Date()).
// myDate.getSimpleDate() -> dd/mm/yyyy, hh:mm:ss
// use "setTimeout()" to postpone the time...
// myDate.getPasedDate() -> 2 seconds past from that date
var Celebs = /** @class */ (function () {
    function Celebs(fullName, genre, tikTokAccount, instagramAccount) {
        this.fullName = fullName;
        this.genre = genre;
        this.tikTokAccount = tikTokAccount;
        this.instagramAccount = instagramAccount;
    }
    Celebs.prototype.setNumberOfFollowers = function (numberOfFollowers) {
        this.numberOfFollowers = numberOfFollowers;
    };
    Celebs.prototype.getNumberOfFollowers = function () {
        return this.numberOfFollowers;
    };
    Celebs.prototype.unsetNumberOfFollowers = function () {
        this.numberOfFollowers = null;
    };
    return Celebs;
}());
var brianTracy = new Celebs('Brian Tracy', 'speaker and author', 'BrianTracyOfficial', 'https://www.instagram.com/thebriantracy/');
brianTracy.setNumberOfFollowers('6m');
console.log(brianTracy.getNumberOfFollowers());
brianTracy.unsetNumberOfFollowers();
console.log(brianTracy.getNumberOfFollowers());
var michelleObama = new Celebs('Michelle Obama', 'education', '1michelleobamaofficial', 'https://www.instagram.com/michelleobama/');
var yuvalNoahHarari = new Celebs('Yuval Noah Harari', 'historian', 'yuval noah harari', 'https://www.instagram.com/yuval_noah_harari/');
var jimKwik = new Celebs('Jim Kwik', 'coach', 'jimkwik', 'https://www.instagram.com/jimkwik/');
var array = [
    new Celebs('Brian Tracy', 'speaker and author', 'BrianTracyOfficial', 'https://www.instagram.com/thebriantracy/'),
    new Celebs('Yuval Noah Harari', 'historian', 'yuval noah harari', 'https://www.instagram.com/yuval_noah_harari/'),
    new Celebs('Michelle Obama', 'education', '1michelleobamaofficial', 'https://www.instagram.com/michelleobama/'),
];
for (var i = 0; i < array.length; i++) {
    console.log(array[i].fullName + ', ' + array[i].genre + ', ' + array[i].tikTokAccount + ', ' + array[i].instagramAccount);
}
