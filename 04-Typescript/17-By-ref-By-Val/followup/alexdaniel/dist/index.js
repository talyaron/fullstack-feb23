// create  a primitive varailbles of that holds you family name.
// create another varialbe which copy by value, you family name.
// create an object which holds your name, and family name.
// copy it by refernce
// change in the copy you name, and see if it change in you source object
var familyName = "Inaev";
var famName = familyName;
console.log(familyName, famName);
var families = ["Inaev", "Tovbin"];
var copy = families[1];
console.log(copy);
if (copy) {
    families[1] = "Shlomi";
}
console.log(families);
