export interface _Img {
    imgUrl: string;
}

export class Img {
    imgUrl: string;
    id: string;
    constructor({imgUrl}:_Img) {
        this.imgUrl = imgUrl;
        this.id = Math.random().toString();
    }
}

