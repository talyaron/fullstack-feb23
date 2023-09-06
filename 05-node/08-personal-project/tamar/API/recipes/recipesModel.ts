export class Recipe {
    title: string;
    description: string;
    urlImg?: string
    id: string;

    constructor({title, description, urlImg}: {title: string, description: string, urlImg: string}){
        this.title = title;
        this.description = description;
        this.urlImg = urlImg;
        this.id = Math.random().toString();
    }
}

export const recipes: Recipe[] = [];