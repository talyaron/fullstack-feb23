var YourHeight = Number(prompt("הכנס את הגובה שלך כאן "));
var YourGender = (prompt("הכנס את המגדר שלך כאן "));
var maleAvarage = 185;
var FemaleAvarage = 155;
try {
    if (YourGender === "male" && YourHeight > 175)
        console.log("Your height is " + (YourHeight - maleAvarage) + " above avarage ");
    else if (YourGender === "male" && YourHeight < 175)
        console.log("Your height is " + (maleAvarage - YourHeight) + " below avarage ");
    else if (YourGender === "female" && YourHeight > 175)
        console.log("Your height is " + (YourHeight - FemaleAvarage) + " above avarage ");
    else if (YourGender === "female" && YourHeight < 175)
        console.log("Your height is " + (FemaleAvarage - YourHeight) + " below avarage ");
}
catch (error) {
    console.error(error);
    undefined;
}
console.log(averageHeightForGender(yourHeight, yourGender));
