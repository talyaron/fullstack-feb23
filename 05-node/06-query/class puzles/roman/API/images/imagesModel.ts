export class Image {
     id:string;
    constructor(public name:string, public imgUrl?:string, id?:string){
       
        this.id = id ? id : Math.random().toString();
    }
}

export const images:Image[] = [];