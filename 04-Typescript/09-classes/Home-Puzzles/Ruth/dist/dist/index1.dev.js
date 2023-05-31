"use strict";

var Celebs =
/** @class */
function () {
  function Celebs(_name, _genre, _tikTokAccount, _instagramAccount, _followers) {
    this.name = _name;
    this.genre = _genre;
    this.tikTokAccount = _tikTokAccount;
    this.instagramAccount = _instagramAccount;
    this.followers = _followers;
  }

  Celebs.prototype.getFollowers = function () {
    return this.followers;
  };

  Celebs.prototype.setFollowers = function (_newNumberOfFollowers) {
    this.followers = _newNumberOfFollowers;
  };

  return Celebs;
}();

function mostPopular(celebs) {
  var temp = celebs[0];

  for (var i = 0; i < celebs.length; i++) {
    if (temp.followers < celebs[i].followers) temp = celebs[i];
  }

  return temp.name + " have the most bigger number of followers with " + temp.getFollowers();
} // function sortedByFollowers(celebs:) {
//     var temp = celebs[0];
//     for (var i = 0; i < celebs.length; i++) {
//         for (var j = 0; j < celebs.length; j++) {
//             if (celebs[j].followers > celebs[j + 1].followers) {
//                 temp = celebs[j + 1];
//                 celebs[j + 1] = celebs[j];
//                 celebs[j] = temp;
//             }
//         }
//     }
//     return celebs;
// }


var yodaLevi = new Celebs("Yehuda Levi", "actor", "www.tiktok.com", "www.instegram.com", 2000);
var amosTammam = new Celebs("Amos Tamam ", "actor", "www.tiktok.com", "www.instegram.com", 1000);
var yonitLevi = new Celebs("Yonit Levi", "newscaster", "www.tiktok.com", "www.instegram.com", 20);
var hadarMarks = new Celebs("Hadar Marks", "radio broadcaster", "www.tiktok.com", "www.instegram.com", 20080);
console.log(yodaLevi.followers);
yodaLevi.setFollowers(26);
console.log(yodaLevi.getFollowers());
var arrayCel = [yodaLevi, amosTammam, yodaLevi, hadarMarks];
console.log(arrayCel);
console.log(mostPopular(arrayCel)); // console.log(sortedByFollowers(arrayCel));