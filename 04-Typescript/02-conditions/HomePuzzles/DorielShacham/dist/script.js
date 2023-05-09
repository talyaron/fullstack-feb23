var form = document.querySelector("form");
var result = document.querySelector("#result") || document.createElement("div");
function checker() {
    var gend = prompt("are you male or female?");
    switch (gend) {
        case "male" || "MALE" || "Male":
            alert("אתה גבר גבר");
            break;
        case "female" || "FEMALE" || "Female":
            alert("את וואלה אישה");
            break;
        default:
            alert("You are undefind, please enter `male` or `female`");
            break;
    }
}
form.addEventListener("submit", function (event) {
    var ageInput = document.querySelector("#age") || document.createElement("input");
    var age = parseInt(ageInput.value);
    if (!ageInput.value) {
        result.style.backgroundColor = "red";
        result.innerHTML = "No input recived!";
    }
    else {
        if (age >= 18) {
            console.log("You are old enough to buy alcohol!");
            result.style.backgroundColor = "lime";
            result.innerHTML = "You are old enough to buy alcohol!";
        }
        else {
            console.log("You are not old enough to buy alcohol.");
            result.style.backgroundColor = "red";
            result.innerHTML = "You are not old enough to buy alcohol.";
        }
    }
    event.preventDefault();
    document.querySelector("body > div.container").style.opacity = "0.3";
    result.style.left = "0%";
});
//--> test list creation forLoop
for (var aii = 1; aii <= 6; aii++) {
    var aba = document.querySelector("body > ul.test");
    var lily = document.createElement("li");
    lily.classList.add("lili");
    aba === null || aba === void 0 ? void 0 : aba.appendChild(lily);
}
var liliElements = document.querySelectorAll(".lili");
liliElements.forEach(function (element) {
    element.addEventListener("click", function () {
        element.remove();
    });
});
