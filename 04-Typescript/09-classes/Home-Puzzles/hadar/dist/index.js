var celeb = /** @class */ (function () {
    function celeb(name, genre, instagramaccount, tiktiokaccount, instagramfollowers, tiktokfollowers) {
        this.name = name;
        this.genre = genre;
        this.instagramaccount = instagramaccount;
        this.tiktiokaccount = tiktiokaccount;
        this.instagramfollowers = instagramfollowers;
        this.tiktokfollowers = tiktokfollowers;
    }
    celeb.prototype.allfollowers = function () {
        return this.instagramfollowers + this.tiktokfollowers;
    };
    return celeb;
}());
var Noakirel = new celeb("noa", "singer", "noakirel", "noakirel", 1800000, 1300000);
console.log(Noakirel);
console.log(Noakirel.allfollowers());
