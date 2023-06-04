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
var CelebArray = /** @class */ (function () {
    function CelebArray() {
        this.celebs = [];
    }
    CelebArray.prototype.newPlayer = function (celeb) {
        this.celebs.push(celeb);
    };
    return CelebArray;
}());
var Influencers = /** @class */ (function () {
    function Influencers(FullName, gendre, TikTokAdress, InstagramAdress, followers) {
        try {
            if (FullName && gendre && TikTokAdress && InstagramAdress && !isNaN(followers))
                this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
            ;
            this.FullName = FullName;
            this.gendre = gendre;
            this.TikTokAdress = TikTokAdress;
            this.InstagramAdress = InstagramAdress;
            this.followers = followers;
        }
        catch (error) {
            console.error(error);
        }
    }
    Influencers.prototype.Getfollowers = function () {
        return this.followers;
    };
    Influencers.prototype.Updatefollowers = function (direction, num) {
        try {
            switch (direction) {
                case "Down":
                    if (this.followers === 0)
                        throw new Error("Cannot be less then zero followers");
                    this.followers -= num;
                    break;
                case "Up":
                    this.followers += num;
                    ;
                    break;
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    return Influencers;
}());
function WhoIsTheWinner(celebArray) {
    try {
        var max = 0;
        var index = -1;
        for (var i = 0; i < celebArray.celebs.length; i++) {
            if (celebArray.celebs[i].followers > max) {
                max = celebArray.celebs[i].followers;
                index = i;
            }
        }
        if (index === -1)
            throw new Error("somthind is worng!!");
        return celebArray.celebs[index];
    }
    catch (error) {
        console.log(error);
    }
}
var Ninet = new Influencers("Ninet taib", "Femail", "Ninetush123Insta", "Ninetush123TIK", 125300);
var Ran = new Influencers("Ran Danker", "mail", "Ranchiz123456", "Ranchiz123456", 500000);
console.log(Ninet);
Ninet.Updatefollowers("Up", 5005);
console.log(Ninet.Getfollowers());
var celebArray = new CelebArray();
celebArray.newPlayer(Ninet);
celebArray.newPlayer(Ran);
console.log(celebArray);
var Maxfolo = WhoIsTheWinner(celebArray);
console.log("the Winner is : " + (Maxfolo === null || Maxfolo === void 0 ? void 0 : Maxfolo.FullName) + " with " + (Maxfolo === null || Maxfolo === void 0 ? void 0 : Maxfolo.followers) + " followers");
