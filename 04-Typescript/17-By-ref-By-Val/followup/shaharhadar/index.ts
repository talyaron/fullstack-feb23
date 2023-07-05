let a = "shaul"
let b= a

interface fullName{
name: string;
lastName: string;
}

const shahar:fullName={
    name: "shahar",
    lastName: "shaul"
}

shahar.name= "hadar"
console.log(shahar)