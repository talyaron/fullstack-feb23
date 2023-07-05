let fName = "ziv";
let x_name = fName;

console.log(fName, x_name)

interface Names{
    f_name: string;
    fm_name: string;
}

const yourName: Names[] = [
    {f_name:"ziv",fm_name: "leloneck"},
    {f_name: "tamar",fm_name: "itah"}
]

const newName = yourName[1];

newName.fm_name = "good";

console.log(yourName)