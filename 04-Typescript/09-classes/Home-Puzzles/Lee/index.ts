// ## Celebs
// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.

// 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.

class Celeb{
    celebName:string;
    genre:string;
    tiktok:string;
    ig:string;
    followers:number;
   

    constructor(celebName:string, genre:string, tiktok:string, ig:string, followers:number){
        this.celebName = celebName;
        this.genre = genre;
        this.tiktok = tiktok;
        this.ig = ig;
        this.followers = followers;
    }
    setFollowers(followers:number):number | undefined
    {
       try {
        return (this.followers = followers)
       } catch (error) {
        console.log(error);
        return undefined;
       }
    }
    getFollowers(){
        return this.followers;
    }
}

const celeb1 = new Celeb("Maya Dagan", "pop culture", "maya_D", "Maya Dagan", 63000);
const celeb2 = new Celeb("Demi Bagby", "sport", "demi_b", "Demi Bagby", 2600000);

console.log(celeb1.setFollowers(1000000));
console.log(celeb2.getFollowers());