//   ## Celebs
// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.


class Celebs {
    fullName: string;
    genre: string;
    tikTokAccount: string;
    instagramAccount: string; 
    numberOfFollowers: number;
    newNumberOfFollowers: number;
    
    
    constructor (
        fullName: string,
        genre: string,
        tikTokAccount: string,
        instagramAccount: string,
        numberOfFollowers: number,
        ) {
            this.fullName = fullName;
            this.genre = genre;
            this.tikTokAccount = tikTokAccount;
            this.instagramAccount = instagramAccount;
            this.numberOfFollowers = numberOfFollowers;
        }
        setNumberOfFollowers(newNumberOfFollowers :number) {
            const getNumberOfFollowers :number = newNumberOfFollowers -  this.numberOfFollowers;
            try {
                if(this.numberOfFollowers < newNumberOfFollowers) return  (`The number of followers increased by ${getNumberOfFollowers}`); 
                if(this.numberOfFollowers > newNumberOfFollowers) return  (`The number of followers decreased by ${getNumberOfFollowers}`); 
                if(this.numberOfFollowers == newNumberOfFollowers) return  ('The number of followers is the same'); 
            } catch (error) {
                console.error(error);
                return
            }
        }
    }
    
    
    const michelleObama = new Celebs('Michelle Obama', 'education', 'https://www.tiktok.com/@1michelleobamaofficial', 'https://www.instagram.com/michelleobama/', 6000000);
    const brianTracy = new Celebs('Brian Tracy', 'speaker and author', 'https://www.tiktok.com/@briantracyofficial', 'https://www.instagram.com/thebriantracy/', 2000000);
    const yuvalNoahHarari = new Celebs('Yuval Noah Harari', 'historian', 'https://www.tiktok.com/@yuval2030harari', 'https://www.instagram.com/yuval_noah_harari/', 4000000);
    const jimKwik = new Celebs('Jim Kwik', 'coach', 'https://www.tiktok.com/search?q=jimkwik&t=1685501599494', 'https://www.instagram.com/jimkwik/', 3000000);
    
    // 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
    //    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
    
    console.log(brianTracy.setNumberOfFollowers(2000000));
    
    const array = [
        new Celebs('Michelle Obama', 'education', 'https://www.tiktok.com/@1michelleobamaofficial', 'https://www.instagram.com/michelleobama/', 6000000),
        new Celebs('Brian Tracy', 'speaker and author', 'https://www.tiktok.com/@briantracyofficial', 'https://www.instagram.com/thebriantracy/', 2000000),
        new Celebs('Yuval Noah Harari', 'historian', 'https://www.tiktok.com/@yuval2030harari', 'https://www.instagram.com/yuval_noah_harari/', 4000000),
        new Celebs('Jim Kwik', 'coach', 'https://www.tiktok.com/search?q=jimkwik&t=1685501599494', 'https://www.instagram.com/jimkwik/', 3000000),
    ];
    
    for(let i = 0; i < array.length; i++) {
        console.log(array[i].tikTokAccount);
    }
    
    
    // 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)
    // function listOfCelebs (array) {
    //     for(let i = 0; i < array.length; i++){

    //     }
    // }
    
    // ## Moment Class
    // 4. Create a class for dates. it gets Date format (new Date()). the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" for instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format "2 seconds past from that date" (getSimpleDate(), getPasedDate())
    
    // const myDate = new Moment(new Date()).
    // myDate.getSimpleDate() -> dd/mm/yyyy, hh:mm:ss
    // use "setTimeout()" to postpone the time...
    // myDate.getPasedDate() -> 2 seconds past from that date
