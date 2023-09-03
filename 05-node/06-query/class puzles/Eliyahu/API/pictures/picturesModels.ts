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

export const usersPictures: UserPicture[] = [
    new UserPicture(new User('eli',
        '1@1',
        '11'),
        new Picture('ים',
            'https://www.photo-art.co.il/wp-content/uploads/2015/07/BY1A5096.jpg.webp',
            'חוף נתניה',
            ['חוף', 'נתניה'],
            PictureArea.center))
]