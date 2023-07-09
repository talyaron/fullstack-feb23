class Img {
    id: string;
    constructor(public image: string, public description: string) {
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
}

class User {
    id: string;
    constructor(public name: string, public followUp: number, public followers: number, public imageProfile: string, public image: Img[]) {
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
}

class UserImg {
    id: string;
    constructor(public user: User, public image: Img[]) {
        this.id = Date.now + Math.random().toString(36).substr(2);
    }
}