var Celeb = /** @class */ (function () {
    function Celeb(name, genre, tiktokAccount, instagramAccount, numberOfFollowers) {
        this.name = name,
            this.genre = genre,
            this.tiktokAccount = tiktokAccount,
            this.instagramAccount = instagramAccount,
            this.numberOfFollowers = numberOfFollowers;
    }
    Celeb.prototype.setFollowers = function (followers) {
        try {
            if (isNaN(followers))
                throw new Error('the value is not a number');
            this.numberOfFollowers = followers;
            return this.numberOfFollowers;
        }
        catch (error) {
            console.error(error);
            return;
        }
    };
    Celeb.prototype.getFollowers = function () {
        console.log(this.numberOfFollowers);
    };
    Celeb.prototype.getTikTokAccount = function () {
        console.log(this.tiktokAccount);
    };
    return Celeb;
}());
var hanan = new Celeb('Hanan', 'music', 'https://www.tiktok.com/@hananbenari', 'https://z-p42.www.instagram.com/hananbenariofficial/?hl=en-gb', 7310);
var shuli = new Celeb('shuli', 'music', 'none', 'none', 457);
var ori = new Celeb('ori', 'humor', 'https://www.tiktok.com/@ori_hizkiah?lang=he-IL', 'none', 41066);
var hrvArush = new Celeb('shalom', 'judaism', 'https://www.tiktok.com/@rav_shalom__arush', 'https://z-p3.www.instagram.com/Rav_Shalom__Arush/?hl=nb', 6332);
hanan.setFollowers(14552);
shuli.setFollowers(9008);
ori.setFollowers(68799);
hrvArush.setFollowers(10475);
hanan.getTikTokAccount();
shuli.getTikTokAccount();
ori.getTikTokAccount();
hrvArush.getTikTokAccount();
function mostFollowers(celeb1, celeb2, celeb3, celeb4) {
    try {
        var mostFollowers_1 = [celeb1, celeb2, celeb3, celeb4];
        for (var j = 0; j < mostFollowers_1.length - 1; j++) {
            for (var i = 0; i < mostFollowers_1.length - 1; i++) {
                if (mostFollowers_1[i].numberOfFollowers < mostFollowers_1[i + 1].numberOfFollowers) {
                    var term = mostFollowers_1[i + 1];
                    mostFollowers_1[i + 1] = mostFollowers_1[i];
                    mostFollowers_1[i] = term;
                }
            }
        }
        return mostFollowers_1;
    }
    catch (error) {
        console.error(error);
        return;
    }
}
console.log(mostFollowers(hanan, shuli, ori, hrvArush));
var arrFollowets = (mostFollowers(hanan, shuli, ori, hrvArush));
if (arrFollowets !== undefined) {
    for (var i = 0; i < arrFollowets.length; i++) {
        console.log(arrFollowets[i].name);
    }
}
