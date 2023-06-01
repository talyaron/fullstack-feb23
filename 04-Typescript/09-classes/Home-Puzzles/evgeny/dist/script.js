// ## Celebs
// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.
// 2. based on question number one, create a method to set the number of followers and another method to get the    number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
// 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)
// ## Moment Class
// 4. Create a class for dates. it gets Date format (new Date()). the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" for instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format "2 seconds past from that date" (getSimpleDate(), getPasedDate())
// const myDate = new Moment(new Date()).
// myDate.getSimpleDate() -> dd/mm/yyyy, hh:mm:ss
// use "setTimeout()" to postpone the time...
// myDate.getPasedDate() -> 2 seconds past from that date
var celebs = /** @class */ (function () {
    function celebs(name, gender, tiktokId, instaId, follower) {
        this.name = name;
        this.gender = gender;
        this.tiktokId = tiktokId;
        this.instaId = instaId;
        this.follower = follower;
    }
    celebs.prototype.followers = function (option) {
        switch (option) {
            case "current":
                console.log(this.follower);
                break;
            case "add":
                var added = this.follower + 1;
                console.log(added);
                break;
        }
    };
    return celebs;
}());
var celeb1 = new celebs("evgeny", "male", "@evgenycool", "@evgenyinsta", 1000000);
var celeb3 = new celebs("sapir", "female", "@sapir", "@sapirinsta", 156234);
var celeb2 = new celebs("jack", "male", "@jackson", "@jackinsta", 136);
console.log(celeb1.followers("add"));
var celebsArray = [celeb1, celeb2, celeb3];
function sort(array) {
    array.sort(function (a, b) {
        return a.follower - b.follower;
    });
}
function showFollowers(array) {
    sort(array);
    for (var x = 0; x <= array.length - 1; x++) {
        console.log("number of follower:" + array[x].follower + ", name:" + array[x].name);
    }
}
showFollowers(celebsArray);
