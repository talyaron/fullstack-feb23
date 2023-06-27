var celebs = /** @class */ (function () {
    function celebs(name, genre, accountTikTok, accountInstagram, numberoffollowers) {
        this.name = name;
        this.genre = genre;
        this.accountTikTok = accountTikTok;
        this.accountInstagram = accountInstagram;
        this.numberoffollowers = numberoffollowers;
    }
    celebs.prototype.get = function () {
        return this.numberoffollowers;
    };
    celebs.prototype.set = function (num) {
        this.numberoffollowers = num;
        return num;
    };
    return celebs;
}());
var tom = new celebs("tom", "singer", "tomsobia", "tomsobia2", 1000000);
var hadar = new celebs("hadar", "singer", "hadaritzhaki", "hadaritzhaki2", 100);
// console.log(tom.numberoffollowers)
// console.log(tom.accountTikTok)
function themostfollowers(num1, num2) {
    if (num1 > num2) {
        return tom.name;
    }
    else {
        return hadar.name;
    }
}
console.log(themostfollowers(tom.numberoffollowers, hadar.numberoffollowers));
