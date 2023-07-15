import { uid } from "./counter";

class Dog{
    name: string;
    age: number;
    id: string;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
        this.id = uid()
    }
    bark(){
        console.log("bark bark");
    }
}

export const x = 5

export default Dog;