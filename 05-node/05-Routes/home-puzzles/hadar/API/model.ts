export class Task{
    id: string
    text: string
    constructor(id: string, text: string){
        this.id= Math.random().toString();
        this.text= text;
    }
}