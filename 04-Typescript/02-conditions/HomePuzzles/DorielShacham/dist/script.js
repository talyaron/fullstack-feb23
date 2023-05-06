var form = document.querySelector("form");
var result = document.querySelector("#result");
function checker() {
    var gend = prompt("are you male or female?");
    switch (gend) {
        case "male":
            alert("You are male");
            break;
        case "female":
            alert("You you female");
            break;
        case "*":
            alert("You are undefinded");
            break;
    }
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var ageInput = document.querySelector("#age");
    var age = parseInt(ageInput.value);
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
});
var op = document.querySelector("body > div.container");
var submit = document.querySelector(".submit");
submit.addEventListener('click', function () {
    result.style.left = '0%';
    op.style.opacity = '0.3';
});
