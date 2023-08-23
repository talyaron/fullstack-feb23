
export class Review{
    name:string;
    freetext:string;
    id?:string
        constructor({name,freetext}:{name:string,freetext:string}){
            this.name=name
            this.freetext=freetext
            this.id= Math.random().toString();
        }

}