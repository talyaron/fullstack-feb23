
class celebrity {
    name: string;
    followers: number;
    genre: string;
    account: string;
    Instagram: string;


    constructor(
        name: string,
        followers: number,
        genre: string,
        account: string,
        Instagram: string,

    ) {
        this.name = name;
        this.followers = followers;
        this.genre = genre;
        this.account = account;
        this.Instagram = Instagram;
    }
}

const shir = new Car("shir", 2500, "female", "shrir23", "shrir60");
const lior = new Car("lior", 5500, "female", "lior51", "lior63");
const or = new Car("or", 7500, "female", "or54", "or");
