// create  a primitive varailbles of that holds you family name.

// create another varialbe which copy by value, you family name.

// create an object which holds your name, and family name.

// copy it by refernce
// change in the copy you name, and see if it change in you source object

let LastName = "Yamin"
let y = LastName

console.log (LastName, y)

LastName = "yehuda"

console.log (LastName, y)

interface name {
    lastname: string;
    firstname:string
}

const names: name= {
    lastname: "yamin",
    firstname: "Ran"
 
}
    

let othername = names

console.log (othername, names)

othername.firstname= "yossi"

    console.log(`the first names is: ${names.firstname}`)

