// create  a primitive varailbles of that holds you family name. - V
// create another varialbe which copy by value, you family name. - V
// create an object which holds your name, and family name.
// copy it by refernce
// // change in the copy you name, and see if it change in you source object
//by Value:
var nave = "vered";
var bar = "yaron";
var ruth = "turjeman";
var x = "nave";
var y = "bar";
var t = "ruth";
var fullNames = [
    { name: x, lastName: nave },
    { name: y, lastName: bar },
    { name: t, lastName: ruth }
];
var fullName1 = fullNames[0];
