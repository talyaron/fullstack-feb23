export class Img{
    url: string;
    id: string;
    constructor({url}:{url:string}){
        this.url = url;
        this.id = Math.random().toString();
    }
}

