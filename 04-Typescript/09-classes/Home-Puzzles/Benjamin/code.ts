class Celeb {
    name: string;
    genre: string;
    tikAccount: string;
    insAccount: string;
    tikFollow: number;
    insFollow: number;

    constructor(
        name: string,
    genre: string,
    tikAccount: string,
    insAccount: string,
    tikFollow: number,
    insFollow: number,
    ){
        this.name=name;
        this.genre=genre
        this.tikAccount=tikAccount;
        this.insAccount=insAccount;
        this.tikFollow=tikFollow;
        this.insFollow=insFollow;
    }

}

const JustinBieber = new Celeb("Justin Bieber", "pop", "https://www.tiktok.com/@justinbieber?lang=en","https://www.instagram.com/justinbieber/", 40000000,100000000 )
const JoBiden = new Celeb("Jo Biden", "Politics", "","", 400000,140000000)
const ImagineDragons = new Celeb("ImagineDragons","Alternative Rock","https://www.tiktok.com/search?lang=en&q=imagine%20dragon&t=1685541438358","https://www.instagram.com/imaginedragons/",5000000,18000000)
const Tuna = new Celeb("Tuna","rap","https://www.tiktok.com/search?lang=en&q=tuna&t=1685541602848","https://www.instagram.com/itay_tuna/",14000,40000)
