class celeb {
    name: string;
    genre: string;
    instagramaccount: string
    tiktiokaccount: string;
    instagramfollowers: number;
    tiktokfollowers: number;


    constructor(
        name: string,
        genre: string,
        instagramaccount: string,
        tiktiokaccount: string,
        instagramfollowers: number,
        tiktokfollowers: number,
    ) {
        this.name = name
        this.genre = genre
        this.instagramaccount = instagramaccount
        this.tiktiokaccount = tiktiokaccount
        this.instagramfollowers = instagramfollowers
        this.tiktokfollowers = tiktokfollowers
    }

    allfollowers(): number {
        return this.instagramfollowers + this.tiktokfollowers;
    }
}
const Noakirel = new celeb( "noa","singer","noakirel","noakirel",1800000,1300000)
console.log(Noakirel);
console.log(Noakirel.allfollowers());
