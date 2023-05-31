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
const adir = new Celeb("Adir", "Instagram personality", "adirmiz", "Adir Mizrahi", 10);
const nofar = new Celeb("nofar", "friend with a funny instegram", "nufarthequeen", "nufarhashavia", 5);
const maya = new Celeb("maya", "comedian and actress", "mayawertheimer", "mayawertheimer", 20);

console.log(adir);
console.log(nofar);
console.log(maya);

adir.enterFollowrs(10);
nofar.enterFollowrs(50);
maya.enterFollowrs(200);


const celebs: Array<Celeb> = [adir, nofar, maya]
// console.log(theMostFolowers(celebs)?.name)
console.log("The celeb how have the most followers is", theMostFolowers(celebs)?.name)

adir.enterTikTokAccount("hi")
nofar.enterTikTokAccount("I dont have a tiktot")
maya.enterTikTokAccount("bla bla")
