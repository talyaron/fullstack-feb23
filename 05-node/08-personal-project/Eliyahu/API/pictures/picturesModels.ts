import { Schema,model } from "mongoose";
import { User } from "../users/userModels";

export enum PictureArea {
    north = "צפון",
    center = "מרכז",
    south = "דרום"
}

export class Picture {
    id: string
    publishDate: string
    constructor(
        public title: string,
        public imgUrl: string,
        public location: string,
        public tags: string[],
        public area: PictureArea
    ) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.publishDate = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString('en-US', {
            hour12: false,
            hour: "numeric",
            minute: "numeric"
        })
    }
}


export const pictures: Picture[] = []

export class UserPicture {
    id: string
    constructor(public user: User, public picture: Picture) {
        this.id = Math.random().toString(36).substr(2, 9);
    }
}

export const usersPictures: UserPicture[] = []
export const tags: string[] = ['ים', 'מדבר', 'צבי', 'מעיין']

export const PictureSchema = new Schema({
    // publishDate: String,
    title: String,
    imgUrl: String,
    location: String,
    tags: [String],
    area: {
        type: String,
        enum: [PictureArea]
    }
})

PictureSchema.methods.publishDate =  new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: "numeric",
    minute: "numeric"
})

export const PictureModel = model("pictures", PictureSchema)
