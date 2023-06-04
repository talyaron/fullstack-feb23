// ## Celebs
// 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.
const allCelebs: Celeb[] = [];

class Celeb {
  nameFull: string;
  genre: string;
  accountTikTok: string;
  accountInstagram: string;
  numberOfFollowers: number;
  orderFolowers: void;
  constructor(
    nameFull: string,
    genre: string,
    accountTikTok: string,
    accountInstagram: string,
    numberOfFollowers: number
  ) {
    this.nameFull = nameFull;
    this.genre = genre;
    this.accountTikTok = accountTikTok;
    this.accountInstagram = accountInstagram;
    this.numberOfFollowers = numberOfFollowers;
    allCelebs.push(this);
  }
  // 2. based on question number one, create a method to set the number of followers and another method to get the number of followers.
  //    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.
  public get Followers(): number {
    return this.numberOfFollowers;
  }
  public set setFollowers(num: number) {
    this.numberOfFollowers = num;
  }
}
function getCelebs() {
  return [CelebOne, CelebTwo, CelebThree];
}
console.log(allCelebs, 0);

const CelebOne: Celeb = new Celeb(
  "Arnold Schwarzenegger",
  "Action",
  "https://www.tiktok.com/@arnoldschnitzel?lang=en",
  "https://www.instagram.com/schwarzenegger/?hl=en",
  5000000
);
console.log(allCelebs, 1);

const CelebTwo: Celeb = new Celeb(
  "Kevin Hart",
  "Comedy",
  "https://www.tiktok.com/discover/Kevin-Hart?lang=en",
  "https://www.instagram.com/kevinhart4real/?hl=en",
  1000000
);
console.log(allCelebs, 2);

const CelebThree: Celeb = new Celeb(
  "John Mcguinness",
  "Racer",
  "https://www.tiktok.com/discover/John-Mcguiness",
  "https://www.instagram.com/jm130tt/?hl=en",
  20000
);
console.log(allCelebs, 3);

console.log(`This is the init Celeb folowers: ${CelebOne.Followers}`);
CelebOne.setFollowers = 100;
console.log(`This is after set Celeb folowers: ${CelebOne.Followers}`);
// 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)
function orderByCellebs(): Celeb[] {
  return allCelebs.sort((a, b) => b.Followers - a.Followers);
}
//console.log(orderByCellebs());

function findByName(nameF:string){
  return !!allCelebs.find(Celeb => Celeb.nameFull.toLowerCase() == nameF.toLowerCase())?'found':'not found'
}


console.log(findByName("nathan"));
console.log(findByName("kevin hart"));


// ## Moment Class
// 4. Create a class for dates. it gets Date format (new Date()). 
//the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" for instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format "2 seconds past from that date" (getSimpleDate(), getPasedDate())
// const myDate = new Moment(new Date()).
// myDate.getSimpleDate() -> dd/mm/yyyy, hh:mm:ss
// use "setTimeout()" to postpone the time...
// myDate.getPasedDate() -> 2 seconds past from that date

class myDate{
  turnToString(arg0: number) {
      throw new Error("Method not implemented.");
  }
  date: Date;
  constructor(){
    this.date = new Date();
  }
  getSimpleDate(){ 
    //format dd/mm/yyyy, hh:mm:ss
    return `${this.date.toLocaleDateString()} ${this.date.toLocaleTimeString()}`
  }
  addSeconds(seconds: number): void {
    this.date.setSeconds(this.date.getSeconds() + seconds);
  }
}

const a  = new myDate()
console.log(a.getSimpleDate())

a.addSeconds(2); 
console.log(a.getSimpleDate()); 













// class Celebs {
//   celebsList: Celeb[] = [];

//   addCeleb(celeb: Celeb) {
//     this.celebsList.push(celeb);
//   }

//   viewSortedCelebs(){

//   }
// }
