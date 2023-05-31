// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram,
// and the number of followers.

class Celeb {
    name: string;
    genre: string;
    accountInTikTok: string;
    accountInInstagram: string;
    numberOfFollowers: number;

    constructor(
        name: string,
        genre: string,
        accountInTikTok: string,
        accountInInstagram: string,
        numberOfFollowers: number,
    ) {
        this.name = name;
        this.genre = genre;
        this.accountInTikTok = accountInTikTok;
        this.accountInInstagram = accountInInstagram;
        this.numberOfFollowers = numberOfFollowers;
    }

    // 2. based on question number one, create a method to set the number of followers
    //    and another method to get the number of followers.
    //    Create a few celebs-objects, and set the number of followers.
    //    Write to the console each celeb TikTok account.

    enterFollowrs(followrs: number) {
        try {
            if (isNaN(followrs)) throw new Error("This is not a number!")
            this.numberOfFollowers = followrs
            return followrs
        } catch (error) {
            console.error(error)
        }
    }

    enterTikTokAccount(tiktok) {
        try {
            if (Number(tiktok)) throw new Error("This is not a TikTok accuont!")
            this.accountInTikTok = tiktok
            return tiktok
        } catch (error) {
            console.error(error)
        }
    }

    showFolowers() {
        return this.numberOfFollowers
    }

    showTikTokAccount() {
        return this.accountInTikTok
    }
}


// 3. create a function that gets all the celebs and returns the celeb with the most followers.
//    Even better, return a list of celebs, ordered by their number of followers. (use array).

function theMostFolowers(celebs: Array<Celeb>) {
    try {
        let theMostFolowers = celebs[0]
        for (let i = 0; i < celebs.length; i++) {
            if (theMostFolowers.numberOfFollowers < celebs[i].numberOfFollowers) {
                theMostFolowers = celebs[i];
            }
        }
        return theMostFolowers;
    } catch (error) {
        console.error(error)
    }
}

"The celeb how have the most followers is" 
const Adir = new Celeb("Adir", "Instagram personality", "Adirmiz", "Adir Mizrahi", 10);
const Nofar = new Celeb("Nofar", "friend with a funny instegram", "nufarthequeen", "nufarhashavia", 5);
const Maya = new Celeb("Maya", "comedian and actress", "Mayawertheimer", "Mayawertheimer", 20);

console.log(Adir);
console.log(Nofar);
console.log(Maya);

Adir.enterFollowrs(1000);
Nofar.enterFollowrs(50);
Maya.enterFollowrs(200);


const celebs: Array<Celeb> = [Adir, Nofar, Maya]
console.log("The celebrity with the most followers is", theMostFolowers(celebs)?.name)

Adir.enterTikTokAccount("hi")
Nofar.enterTikTokAccount("I dont have a tiktot")
Maya.enterTikTokAccount("bla bla")
