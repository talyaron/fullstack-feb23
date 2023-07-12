//classes.ts
// Models
var Character = /** @class */ (function () {
    function Character(characterName, characterImgPath, characterId) {
        this.characterName = characterName;
        this.characterImgPath = characterImgPath;
        if (characterId)
            this.characterId = characterId;
        else
            this.characterId = ++Character.counter;
    }
    Character.counter = 0;
    return Character;
}());
var City = /** @class */ (function () {
    function City(cityName, cityHotels, cityImg, cityId) {
        this.cityName = cityName;
        this.cityHotels = cityHotels;
        this.cityImg = cityImg;
        this.cityOwner = null;
        if (cityId)
            this.cityId = cityId;
        else
            this.cityId = ++City.counter;
        this.monetaryValue = getRandomNumber(50, 200);
        this.rentValue = getRandomNumber(20, 100);
    }
    City.counter = 0;
    return City;
}());
var Hotel = /** @class */ (function () {
    function Hotel(hotelName, cityId, hotelImg, hotelId) {
        this.hotelName = hotelName;
        this.cityId = cityId;
        this.hotelImg = hotelImg;
        this.hotelOwner = null;
        if (hotelId)
            this.hotelId = hotelId;
        else
            this.hotelId = ++City.counter;
        this.monetaryValue = getRandomNumber(150, 2500);
        this.rentValue = getRandomNumber(250, 400);
    }
    Hotel.counter = 0;
    return Hotel;
}());
var QuestionGoodThings = /** @class */ (function () {
    function QuestionGoodThings(goodThingsTitel, goodThingsDescription, winningPrice, goodThingsId) {
        this.goodThingsTitel = goodThingsTitel;
        this.goodThingsDescription = goodThingsDescription;
        this.winningPrice = winningPrice;
        if (goodThingsId)
            this.goodThingsId = goodThingsId;
        else
            this.goodThingsId = ++QuestionGoodThings.counter;
    }
    QuestionGoodThings.counter = 0;
    return QuestionGoodThings;
}());
var QuestionBadThings = /** @class */ (function () {
    function QuestionBadThings(badThingsTitel, badThingsDescription, purchasePrice, badThingsId) {
        this.badThingsTitel = badThingsTitel;
        this.badThingsDescription = badThingsDescription;
        this.purchasePrice = purchasePrice;
        if (badThingsId)
            this.badThingsId = badThingsId;
        else
            this.badThingsId = ++QuestionBadThings.counter;
    }
    QuestionBadThings.counter = 0;
    return QuestionBadThings;
}());
var Jail = /** @class */ (function () {
    function Jail(jailName, jailImg, jailId) {
        this.jailName = jailName;
        this.jailImg = jailImg;
        this.earlyReleaseCost = getRandomNumber(500, 100);
        if (jailId)
            this.jailId = jailId;
        else
            this.jailId = ++Player.counter;
    }
    Jail.counter = 0;
    return Jail;
}());
var Player = /** @class */ (function () {
    function Player(userName, isJail, status, playerId, color, character) {
        this.userName = userName;
        this.isJail = isJail;
        this.status = status;
        this.jailIndex = 0;
        this.indexX = 0;
        this.indexY = 0;
        this.Pbank = 0;
        if (playerId)
            this.playerId = playerId;
        else
            this.playerId = ++Player.counter;
        if (color)
            this.color = color;
        else
            this.color = this.assignColor();
        if (character)
            this.character = character;
        else
            this.character = undefined;
    }
    Player.prototype.assignColor = function () {
        var colors = ['green', 'yellow', 'red', 'blue'];
        return colors[this.playerId % colors.length];
    };
    Player.counter = 0;
    return Player;
}());
var Board = /** @class */ (function () {
    function Board() {
        this.luckyCube = 0;
        this.winner = undefined;
        this.cities = [];
        // this.hotels = [];
        this.goodThings = [];
        this.badThings = [];
        this.players = [];
        this.jails = [];
    }
    Board.prototype.addCity = function (city) {
        this.cities.push(city);
    };
    Board.prototype.addGoodThing = function (goodThing) {
        this.goodThings.push(goodThing);
    };
    Board.prototype.addBadThing = function (badThing) {
        this.badThings.push(badThing);
    };
    Board.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    Board.prototype.addJail = function (jail) {
        this.jails.push(jail);
    };
    return Board;
}());
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
