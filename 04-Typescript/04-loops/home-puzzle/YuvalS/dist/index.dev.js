"use strict";

var numberChoose = 7;
var sum1 = 0;
var numberMulti = 2;

for (var j = 0; j <= numberMulti; j++) {
  for (var i = 0; i <= numberChoose; i++) {
    sum1 += i;
  }

  sum1 *= j;
}

console.log(sum1);