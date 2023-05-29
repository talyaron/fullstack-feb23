// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram,
// and the number of followers.

class Celebs {
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
            return isNaN
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


const adir = new Celebs("Adir", "Instagram personality", "adirmiz", "Adir Mizrahi", 126000);
const nofar = new Celebs("nofar", "friend with a funny instegram", "nufarthequeen", "nufarhashavia", 712);
const maya = new Celebs("maya", "comedian and actress", "mayawertheimer", "mayawertheimer", 535000);
console.log(adir);
console.log(nofar);
console.log(maya);

adir.enterFollowrs(100)
nofar.enterFollowrs(5000)
maya.enterFollowrs(50000)


adir.enterTikTokAccount("hi")
nofar.enterTikTokAccount("I dont hev tiktot")
maya.enterTikTokAccount("bla bla")


// 3. create a function that gets all the celebs and returns the celeb with the most followers.
//    Even better, return a list of celebs, ordered by their number of followers. (use array).