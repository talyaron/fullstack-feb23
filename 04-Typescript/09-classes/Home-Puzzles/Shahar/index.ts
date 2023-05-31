// ## Celebs
// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.

// 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.


class Celeb {
    userName: string;
    genre: string;
    tiktokAccount: string;
    instegramAccount: string;
    numberOfFollow: number;
    constructor(
        userName: string,
        genre: string,
        tiktokAccount: string,
        instegramAccount: string,
        numberOfFollow: number
        ) {
            this.userName = userName;
            this.genre = genre;
            this.tiktokAccount = tiktokAccount;
            this.instegramAccount = instegramAccount;
            this.numberOfFollow = numberOfFollow;
        }
        
        setFollowers(num: number | null) {
            if (num === null) {
                return;
            }
            this.numberOfFollow = num * 10;
            return this.numberOfFollow;
        }

        get getFollowers() {
            return this.numberOfFollow;
        }
    }
    
    const wow = new Celeb("Meidan","Coding", "TheLastHope","Mandy", 500)
    console.log(wow.getFollowers)
    console.log (wow.setFollowers(8))
    console.log(wow.getFollowers)
    
    
    // mission 3
    // 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)

const celebs: Celeb[] = [
  new Celeb("Meidan", "Coding", "TheLastHope", "Mandy", 500),
  new Celeb("Shahar", "Coding", "TheLastHope", "Mandy", 400),
  new Celeb("Moshe", "Coding", "TheLastHope", "Mandy", 300),
];

for (let i = 0; i < 5; i++) {}
