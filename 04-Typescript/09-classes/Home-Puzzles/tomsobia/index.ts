// ## Celebs
// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.

// 2. based on question number one, create a method to set the number of followers and another method to get the    number of followers.
// //    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.



class celeb {
    name: string;
    genre: string;
    instgramaccount: string
    tiktiokaccount: string;
    instgramaccountnumber: number;
    tiktiokaccountnubmer: number;


    constructor(
        name: string,
        genre: string,
        instgramaccount: string,
        tiktiokaccount: string,
        instgramaccountnumber: number,
        tiktiokaccountnubmer: number,
    ) {
        this.name = name
        this.genre = genre
        this.instgramaccount = instgramaccount
        this.tiktiokaccount = tiktiokaccount
        this.instgramaccountnumber = instgramaccountnumber
        this.tiktiokaccountnubmer = tiktiokaccountnubmer
    }

    allfollowers(): number {
        return this.instgramaccountnumber + this.tiktiokaccountnubmer;
    }

    

}

const Kh = new celeb(
    "kevin hart",
     "Comedian",
    "imkevinhart",
    "kevinhart4real",
    3500,
    3500,
)

const totalfollowers =Kh.allfollowers();
console.log(Kh)
console.log(totalfollowers);