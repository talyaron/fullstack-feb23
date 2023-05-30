// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.

// 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.

// 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)


// ## Moment Class
// 4. Create a class for dates. it gets Date format (new Date()). the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" for instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format "2 seconds past from that date" (getSimpleDate(), getPasedDate())

// const myDate = new Moment(new Date()).
// myDate.getSimpleDate() -> dd/mm/yyyy, hh:mm:ss
// use "setTimeout()" to postpone the time...
// myDate.getPasedDate() -> 2 seconds past from that date

class CelebArray {
    celebs :Influencers[]
    constructor(){
      this.celebs = [];
    }

    newPlayer(celeb : Influencers){
        this.celebs.push(celeb)
      }
}
class Influencers {
    id:string;
    FullName: string;
    gendre: string;
    TikTokAdress: string;
    InstagramAdress: string;
    followers: number;

  
    constructor( FullName: string,  gendre: string,   TikTokAdress: string, InstagramAdress: string,  followers: number) {
        try{
            if (FullName && gendre && TikTokAdress && InstagramAdress && !isNaN(followers))
            this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);;
            this.FullName = FullName;
            this.gendre = gendre;
            this.TikTokAdress = TikTokAdress;
            this.InstagramAdress = InstagramAdress;
            this.followers = followers;
        }
        catch (error) {
            console.error(error);
        }
     
    }

    Getfollowers() {
        return this.followers
      }
      Updatefollowers(direction: "Up" | "Down", num:number ) {
        try {
            
            switch (direction) {
              case "Down":
                if (this.followers === 0) throw new Error("Cannot be less then zero followers");
                this.followers-=num;
                break;
              case "Up":
                this.followers+=num;;
                break;
      
            }
     
          } catch (error) {
            console.error(error);
           
          }
      }
  }
  
  function WhoIsTheWinner(celebArray:CelebArray):Influencers|undefined
  {
    try {
       
        let max=0;
        let index=-1;
        for (let i = 0; i < celebArray.celebs.length; i++) {
          if(celebArray.celebs[i].followers>max){
            max=celebArray.celebs[i].followers
            index=i;
          }
        }
        if(index === -1) throw new Error("somthind is worng!!");
        
        return celebArray.celebs[index];
    } catch (error) {
       console.log(error);
  
    }
  }

  const Ninet = new Influencers("Ninet taib", "Femail", "Ninetush123Insta", "Ninetush123TIK",125300);
 
  const Ran = new Influencers("Ran Danker", "mail", "Ranchiz123456", "Ranchiz123456",500000);
  console.log(Ninet);
  Ninet.Updatefollowers("Up",5005);
  console.log(Ninet.Getfollowers());

  const celebArray= new CelebArray();
  celebArray.newPlayer(Ninet);
  celebArray.newPlayer(Ran);

  console.log(celebArray);

  const Maxfolo = WhoIsTheWinner(celebArray);
  console.log(`the Winner is : ${Maxfolo?.FullName} with ${Maxfolo?.followers} followers`);
  
  




  
  