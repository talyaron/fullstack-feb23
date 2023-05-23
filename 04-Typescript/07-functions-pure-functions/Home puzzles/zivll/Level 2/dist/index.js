var gender = prompt("what is your gender?");
var height = Number(prompt("what is your height?"));
console.log(averageHeight(gender, height));
function averageHeight(gender, height) {
    try {
        if ((typeof gender || typeof height) === null)
            throw Error("you must enter text");
        var averageMalesHeight = 175;
        var averageFemalesHeight = 165;
        var sign = "";
        if (gender === ("female" || "woman" || "girl")) {
            if (height - averageFemalesHeight > 0) {
                sign = "+";
            }
            return "your height is " + (height - averageFemalesHeight) + " from average height";
        }
        if (height - averageMalesHeight > 0) {
            sign = "+";
        }
        return "your height is " + (sign + (height - averageMalesHeight)) + " from average height";
    }
    catch (error) {
        console.error();
        return error;
    }
}
