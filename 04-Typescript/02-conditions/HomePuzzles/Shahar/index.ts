
  const Age = prompt("בן כמה אתה יאח");
const AgeAsNumber = parseInt(Age || "0");

if (AgeAsNumber >= 18) {
  document.write("רוצה שאכטה ");
} else {
  document.write("עוף לי מהפנים");
}
