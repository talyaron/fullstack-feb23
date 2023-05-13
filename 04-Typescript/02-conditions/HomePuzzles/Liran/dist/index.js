var use = confirm("Welcome to Age verefication for byuing alcohol, press ok to continue");
while (use) {
    var np = prompt("Enter your name");
    var ap = Number(prompt("Enter your age"));
    while ((Number.isNaN(ap)) || (ap == null)) {
        ap = Number(prompt("Enter your age, please use only numbers"));
    }
    if (ap >= 18) {
        alert(np + " You are " + ap + ", therefor you are allowed to buy alcohol");
    }
    else {
        alert(np + " You are " + ap + ", therefor you are not allowed to buy alcohol");
    }
    use = confirm("press ok to for another, cancle to exit");
}
alert("Bye Bye...");
