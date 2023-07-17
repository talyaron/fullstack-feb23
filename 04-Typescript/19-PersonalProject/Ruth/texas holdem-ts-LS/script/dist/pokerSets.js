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
// //royal flush
// function checkRoyalFlush(cards: Card[]) {
//   try {
//     if (checkFlush(cards) && checkRoyalStraight(cards)) return true;
//     return false;
//   } catch (error) {
//     console.error(error);
//   }
// }
// //straight flush
// function checkStraightFlush(cards: Card[]) {
//   try {
//     if (checkStraight(cards) && checkRoyalStraight(cards)) return true;
//     return false;
//   } catch (error) {
//     console.error(error);
//   }
// }
// //four of a kind
// function checkFourOfAKind(cards: Card[]) {
//   const copiedCards = [...cards];
//   for (let i = 0; i < copiedCards.length; i++) {
//     const tempArray = copiedCards.slice(i + 1);
//     const sameNumberCards = tempArray.filter(
//       (card) => card.cardNumber === copiedCards[i].cardNumber,
//     );
//     if (sameNumberCards.length == 3) {
//       return true;
//     }
//   }
//   return false;
// }
// //full house
// function checkFullHouse(cards: Card[]) {
//   const pairs = {};
//   cards.forEach((card) => {
//     if (!pairs[card.cardNumber]) {
//       pairs[card.cardNumber] = 1;
//     } else {
//       pairs[card.cardNumber]++;
//     }
//   });
//   const pairValues = Object.values(pairs);
//   const pairCounts =
//     pairValues.filter((count) => count === 2).length > 0 ? true : false;
//   const threeOfKindCounts =
//     pairValues.filter((count) => count === 3).length > 0 ? true : false;
//   return pairCounts && threeOfKindCounts;
// }
// //flush
// function checkFlush(cards: Card[]) {
//   try {
//     for (let i = 0; i < cards.length - 4; i++) {
//       const tempCardsSign = cards.filter(
//         (c) => c.cardSign == cards[i].cardSign,
//       );
//       if (tempCardsSign.length >= 5) {
//         return true;
//       }
//     }
//     return false;
//   } catch (error) {
//     console.error(error);
//   }
// }
// //straight
// function checkStraight(cards: Card[]) {
//   try {
//     const cardsNumbers = cards.map((card) =>
//       getCardNumberValue(card.cardNumber),
//     );
//     const sortedCardsNumbers = cardsNumbers.sort();
//     let count = 0;
//     for (let i = 0; i < sortedCardsNumbers.length - 1; i++) {
//       if (sortedCardsNumbers[i + 1] - sortedCardsNumbers[i] === 1) {
//         count++;
//         if (count === 4) {
//           return true;
//         }
//       } else {
//         count = 0;
//       }
//     }
//     if (checkRoyalStraight(cards)) {
//       return true;
//     }
//     return false;
//   } catch (error) {
//     console.error(error);
//   }
// }
// function checkRoyalStraight(cards: Card[]) {
//   const cardsNumbers = cards.map((card) => getCardNumberValue(card.cardNumber));
//   const sortedCardsNumbers = cardsNumbers.sort();
//   if (
//     sortedCardsNumbers.includes(10) &&
//     sortedCardsNumbers.includes(11) &&
//     sortedCardsNumbers.includes(12) &&
//     sortedCardsNumbers.includes(13) &&
//     sortedCardsNumbers.includes(1)
//   ) {
//     return true;
//   }
//   return false;
// }
// //three of a kind
// function checkThreeOfAKind(cards: Card[]) {
//   const copiedCards = [...cards];
//   for (let i = 0; i < copiedCards.length; i++) {
//     const tempArray = copiedCards.slice(i + 1);
//     const sameNumberCards = tempArray.filter(
//       (card) => card.cardNumber === copiedCards[i].cardNumber,
//     );
//     if (sameNumberCards.length == 2) {
//       return true;
//     }
//   }
//   return false;
// }
// //two pairs
// function checkTwoPairs(cards: Card[]) {
//   const pairs = {};
//   cards.forEach((card) => {
//     if (!pairs[card.cardNumber]) {
//       pairs[card.cardNumber] = 1;
//     } else {
//       pairs[card.cardNumber]++;
//     }
//   });
//   const pairValues = Object.values(pairs);
//   const pairCounts = pairValues.filter((count) => count === 2);
//   return pairCounts.length >= 2;
// }
// //one pair
// function checkPair(cards: Card[]) {
//   const copiedCards = [...cards];
//   for (let i = 0; i < copiedCards.length; i++) {
//     const tempArray = copiedCards.slice(i + 1);
//     const sameNumberCards = tempArray.filter(
//       (card) => card.cardNumber === copiedCards[i].cardNumber,
//     );
//     if (sameNumberCards.length == 1) {
//       return true;
//     }
//   }
//   return false;
// }
// //high card
// function getHighCard(cards: Card[]) {
//   const cardValues = {
//     A: 14,
//     "2": 2,
//     "3": 3,
//     "4": 4,
//     "5": 5,
//     "6": 6,
//     "7": 7,
//     "8": 8,
//     "9": 9,
//     "10": 10,
//     J: 11,
//     Q: 12,
//     K: 13,
//   };
//   let temp = cards[0];
//   cards.forEach((card) => {
//     if (cardValues[card.cardNumber] > cardValues[temp.cardNumber]) {
//       temp = card;
//     }
//   });
//   return temp;
// }
// /////////------------------------
// function getCardNumberValue(cardNumber: string): number {
//   try {
//     if (cardNumber === "A") return 1;
//     if (cardNumber === "J") return 11;
//     if (cardNumber === "Q") return 12;
//     if (cardNumber === "K") return 13;
//     return parseInt(cardNumber);
//   } catch (error) {
//     console.error(error);
//     return -1;
//   }
// }
