// ## Celebs
// 1. create a class of celebs (influencers) 
// with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.

class Celebs {
    name:string
    genre:string
    tiktok:string
    instagram:string
    followers:number
    

    constructor(name,genre,tiktok,instagram,followers){
        this.name = name;
        this.genre = genre;
        this.tiktok = tiktok;
        this.instagram = instagram;
        this.followers = followers;

    }
    setFollowers(num:number) {
        this.followers = num;
        return num;
        
    }
    checkFollowers(){
      return this.followers
     
        
    }

    
} 



const jackson = new Celebs("Michael Jackson"," pop","http://google.com","http://google.com", 350)
const lawrence = new Celebs("JENNIFER LAWRENCE"," Actor, Narrator, Producer, Self","http://google.com","http://google.com", 200)
const clooney = new Celebs("GEORGE CLOONEY"," actor","http://google.com","http://google.com", 3000)
const depp = new Celebs("JOHNNY DEPP"," actor","http://google.com","http://google.com", 500)
// 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
//    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
const arr = [
    { jackson },
    { lawrence },
    { clooney },{depp}
  ];


  
jackson.setFollowers(500);
console.log(jackson.checkFollowers());

console.log(jackson.tiktok);
console.log(lawrence.tiktok);
console.log(clooney.tiktok);
console.log(depp.tiktok);

// 

