// sets----------------------------------------------------------------
// Royal Flush
// Straight Flush
// Four of a Kind
// Full House
// Flush
// Straight
// Three of a Kind
// Two Pair
// One Pair
// High Card
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
//main function
// function checkStatus(cards: Card[]) {
//     checkRoyalFlush(cards);
//     checkStraightFlush(cards);
//     checkFourOfAKind(cards);
//     checkFullHouse(cards);
//     checkFlush(cards);
//     checkStraight(cards);
//     checkThreeOfAKind(cards);
//     checkTwoPairs(cards);
//     checkPair(cards);
//   }
//royal flush
function checkRoyalFlush(cards) {
    try {
        if (checkFlush(cards) && checkRoyalStraight(cards))
            return true;
        return false;
    }
    catch (error) {
        console.error(error);
    }
}
//straight flush
function checkStraightFlush(cards) {
    try {
        if (checkStraight(cards) && checkRoyalStraight(cards))
            return true;
        return false;
    }
    catch (error) {
        console.error(error);
    }
}
//four of a kind
function checkFourOfAKind(cards) {
    var copiedCards = __spreadArrays(cards);
    var _loop_1 = function (i) {
        var tempArray = copiedCards.slice(i + 1);
        var sameNumberCards = tempArray.filter(function (card) { return card.cardNumber === copiedCards[i].cardNumber; });
        if (sameNumberCards.length == 3) {
            return { value: true };
        }
    };
    for (var i = 0; i < copiedCards.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return false;
}
//full house
function checkFullHouse(cards) {
    var pairs = {};
    cards.forEach(function (card) {
        if (!pairs[card.cardNumber]) {
            pairs[card.cardNumber] = 1;
        }
        else {
            pairs[card.cardNumber]++;
        }
    });
    var pairValues = Object.values(pairs);
    var pairCounts = pairValues.filter(function (count) { return count === 2; }).length > 0 ? true : false;
    var threeOfKindCounts = pairValues.filter(function (count) { return count === 3; }).length > 0 ? true : false;
    return pairCounts && threeOfKindCounts;
}
//flush
function checkFlush(cards) {
    try {
        var _loop_2 = function (i) {
            var tempCardsSign = cards.filter(function (c) { return c.cardSign == cards[i].cardSign; });
            if (tempCardsSign.length >= 5) {
                return { value: true };
            }
        };
        for (var i = 0; i < cards.length - 4; i++) {
            var state_2 = _loop_2(i);
            if (typeof state_2 === "object")
                return state_2.value;
        }
        return false;
    }
    catch (error) {
        console.error(error);
    }
}
//straight
function checkStraight(cards) {
    try {
        var cardsNumbers = cards.map(function (card) {
            return getCardNumberValue(card.cardNumber);
        });
        var sortedCardsNumbers = cardsNumbers.sort();
        var count = 0;
        for (var i = 0; i < sortedCardsNumbers.length - 1; i++) {
            if (sortedCardsNumbers[i + 1] - sortedCardsNumbers[i] === 1) {
                count++;
                if (count === 4) {
                    return true;
                }
            }
            else {
                count = 0;
            }
        }
        if (checkRoyalStraight(cards)) {
            return true;
        }
        return false;
    }
    catch (error) {
        console.error(error);
    }
}
function checkRoyalStraight(cards) {
    var cardsNumbers = cards.map(function (card) { return getCardNumberValue(card.cardNumber); });
    var sortedCardsNumbers = cardsNumbers.sort();
    if (sortedCardsNumbers.includes(10) &&
        sortedCardsNumbers.includes(11) &&
        sortedCardsNumbers.includes(12) &&
        sortedCardsNumbers.includes(13) &&
        sortedCardsNumbers.includes(1)) {
        return true;
    }
    return false;
}
//three of a kind
function checkThreeOfAKind(cards) {
    var copiedCards = __spreadArrays(cards);
    var _loop_3 = function (i) {
        var tempArray = copiedCards.slice(i + 1);
        var sameNumberCards = tempArray.filter(function (card) { return card.cardNumber === copiedCards[i].cardNumber; });
        if (sameNumberCards.length == 2) {
            return { value: true };
        }
    };
    for (var i = 0; i < copiedCards.length; i++) {
        var state_3 = _loop_3(i);
        if (typeof state_3 === "object")
            return state_3.value;
    }
    return false;
}
//two pairs
function checkTwoPairs(cards) {
    var pairs = {};
    cards.forEach(function (card) {
        if (!pairs[card.cardNumber]) {
            pairs[card.cardNumber] = 1;
        }
        else {
            pairs[card.cardNumber]++;
        }
    });
    var pairValues = Object.values(pairs);
    var pairCounts = pairValues.filter(function (count) { return count === 2; });
    return pairCounts.length >= 2;
}
//one pair
function checkPair(cards) {
    var copiedCards = __spreadArrays(cards);
    var _loop_4 = function (i) {
        var tempArray = copiedCards.slice(i + 1);
        var sameNumberCards = tempArray.filter(function (card) { return card.cardNumber === copiedCards[i].cardNumber; });
        if (sameNumberCards.length == 1) {
            return { value: true };
        }
    };
    for (var i = 0; i < copiedCards.length; i++) {
        var state_4 = _loop_4(i);
        if (typeof state_4 === "object")
            return state_4.value;
    }
    return false;
}
//high card
function getHighCard(cards) {
    var cardValues = {
        A: 14,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        J: 11,
        Q: 12,
        K: 13
    };
    var temp = cards[0];
    cards.forEach(function (card) {
        if (cardValues[card.cardNumber] > cardValues[temp.cardNumber]) {
            temp = card;
        }
    });
    return temp;
}
/////////------------------------
function getCardNumberValue(cardNumber) {
    try {
        if (cardNumber === "A")
            return 1;
        if (cardNumber === "J")
            return 11;
        if (cardNumber === "Q")
            return 12;
        if (cardNumber === "K")
            return 13;
        return parseInt(cardNumber);
    }
    catch (error) {
        console.error(error);
        return -1;
    }
}
var cards = [
    new Card("10", "heart"),
    new Card("J", "heart"),
    new Card("A", "heart"),
    new Card("K", "heart"),
    new Card("Q", "club"),
    new Card("3", "heart"),
    new Card("3", "heart"),
];
