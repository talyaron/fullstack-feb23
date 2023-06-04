// 3. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in
//  the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var or = ["th", "st", "nd", "rd"];
function printer(colors, ors) {
    for (var i = 0; i < colors.length; i++) {
        if (i == 0) {
            console.log("your 1" + ors[1] + " choice is " + color[0]);
        }
        if (i == 1) {
            console.log("your 2" + ors[2] + " choice is " + color[1]);
        }
        if (i == 2) {
            console.log("your 3" + ors[3] + " choice is " + color[2]);
        }
        if (i > 2) {
            console.log("your " + (i + 1) + ors[0] + " choice is " + color[i]);
        }
    }
    return null;
}
printer(color, or);
