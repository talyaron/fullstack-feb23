//1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.
// 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.

// 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)


// ## Moment Class
// 4. Create a class for dates. it gets Date format (new Date()). the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" for instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format "2 seconds past from that date" (getSimpleDate(), getPasedDate())

// const myDate = new Moment(new Date()).
// myDate.getSimpleDate() -> dd/mm/yyyy, hh:mm:ss
// use "setTimeout()" to postpone the time...
// myDate.getPasedDate() -> 2 seconds past from that date

class celebs{
    name:string;
    genre:string;
    tiktokAccount:string;
    instagramAccgount:string;
    followers:number;

    constructor(name:string,genre:string,tiktokAccount:string,instagramAccgount:string,followers:number;){
        this.name = name;
        this.genre = genre;
        this.tiktokAccount = tiktokAccount;
        this.instagramAccgount = instagramAccgount;
    }
    setNumFollowers (followers:Number)
    {
       
    }
}