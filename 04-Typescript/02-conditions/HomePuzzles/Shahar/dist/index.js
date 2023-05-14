var Age = prompt("בן כמה אתה יאח");
var AgeAsNumber = parseInt(Age || "0");
if (AgeAsNumber >= 18) {
    document.write("רוצה שאכטה ");
}
else {
    document.write("עוף לי מהפנים");
}
