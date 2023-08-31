export class Img{
    url: string;
    id: string;
    constructor(url: string, id: string){
        this.url = url;
        this.id = Math.random().toString();
    }
}

export let imgs: Img[] = [];