var age = prompt("הכנס גיל בבקשה");
var numEge = parseInt(age || "0");
if (numEge > 18) {
    console.log(numEge);
    document.write('<span style="color:red;">Hello</span>');
}
