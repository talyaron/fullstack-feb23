var type = prompt("what is your gender?");
function Hello(sug) {
    var gender = "";
    if (sug === "male") {
        gender = "Sir";
    }
    else {
        if (sug === "female") {
            gender = "Miss";
        }
    }
    return "Hello " + gender + " <br/>";
}
document.write(Hello(type));
