// create  a primitive varailbles of that holds you family name.
// create another varialbe which copy by value, you family name.
// create an object which holds your name, and family name.
// copy it by refernce
// change in the copy you name, and see if it change in you source object
var LastName = "Yamin";
var y = LastName;
console.log(LastName, y);
LastName = "yehuda";
console.log(LastName, y);
var names = {
    lastname: "yamin",
    firstname: "Ran"
};
var othername = names;
console.log(othername, names);
othername.firstname = "yossi";
console.log("the first names is: " + names.firstname);
