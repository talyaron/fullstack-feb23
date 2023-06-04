var Influencers = /** @class */ (function () {
    function Influencers(name, gender, TikToksAccount, InstagramsAccount, followers) {
        this.Name = name;
        this.Gender = gender;
        this.TikToksAccount = TikToksAccount;
        this.InstagramsAccount = InstagramsAccount;
        this.Followers = followers;
    }
    Influencers.prototype.setFollowers = function (followers) {
        try {
            return (this.Followers = followers);
        }
        catch (error) {
            console.log(error);
            return undefined;
        }
    };
    Influencers.prototype.getFollowers = function () {
        return this.Followers;
    };
    return Influencers;
}());
var celeb1 = new Influencers("Ziv Leloneck", "male", "@zivll", "@zivll1991", 25000);
var celeb2 = new Influencers("Chaya Leloneck", "female", "@chaya933", "@chayall", 30000);
var celeb3 = new Influencers("Avi Leloneck", "male", "@avill", "@avi1989", 19000);
console.log(celeb1);
console.log(celeb2);
console.log(celeb3);
console.log(celeb1.getFollowers());
console.log(celeb1.setFollowers(45000));
function mostFollowers(celebsArr) {
    try {
        var celebMostFollowers = "";
        var celebMostFollowersByNum = 0;
        for (var i = 0; i < celebsArr.length; i++) {
            if (celebMostFollowersByNum < celebsArr[i].Followers) {
                celebMostFollowersByNum = celebsArr[i].Followers;
                celebMostFollowers = celebsArr[i].Name;
            }
        }
        return celebMostFollowers;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
// Function to get sorted list of celebrities by number of followers
function mostOrderedByFollowers(celebsArr) {
    return celebsArr.sort(function (a, b) { return b.Followers - a.Followers; });
}
var celebs = [celeb1, celeb2, celeb3];
console.log("the celeb with the most followers is: " + mostFollowers(celebs));
console.log(celeb2.setFollowers(75000));
console.log("the celeb with the most followers is: " + mostFollowers(celebs));
console.log(mostOrderedByFollowers(celebs));
