// // ## Celebs
// // 1. create a class of celebs (influencers) with properties: name, genre, account in TikTok, account in Instagram, and the number of followers.

// // 2. based on question number one, create a method to set the number of followers and another method to get the    number of followers.
// //    Create a few celebs-objects, and set the number of followers. Write to the console each celeb TikTok account.

// // 3. create a function that gets all the celebs and returns the celeb with the most followers. Even better, return a list of celebs, ordered by their number of followers. (use array)


// // ## Moment Class
// // 4. Create a class for dates. it gets Date format (new Date()). the instnce(object) gets a date and one method returns the date in the format: "dd/mm/yyyy, hh:mm:ss" for instance, gets a date (new Date ())returns "12/1/2023 17:56:12". And another method return in the following format "2 seconds past from that date" (getSimpleDate(), getPasedDate())

// // const myDate = new Moment(new Date()).
// // myDate.getSimpleDate() -> dd/mm/yyyy, hh:mm:ss
// // use "setTimeout()" to postpone the time...
// // myDate.getPasedDate() -> 2 seconds past from that date

// class Celebs { 
//     name: "string" ;
//     gender: "string" ;
//     accountInTikTok: "string" ;
//     accountInInstagram: "string" ;
//     numberOfFollowers: number;
//     constructor(
//     name: "string" ,
//     gender: "string" ,
//     accountInTikTok: "string" ,
//     accountInInstagram: "string" ,
//     numberOfFollowers: number ,
//     )
// {
//     this.name = name
//     this.gender = gender
//     this.accountInTikTok = accountInTikTok
//     this.accountInInstagram = accountInInstagram
//     this.numberOfFollowers = numberOfFollowers
    
// }
//     }
//     setNumber0fFollowers(followers:number) {
//         try {
//             if (isNaN (followers))  throw new Error('the value is not a number')
//              this.numberOfFollowers = followers
//              return this.numberOfFollowers
           
//         } catch (error) {
//             console.error(error);
//             return
//         }

//     }
//     getFollowers() {
//         console.log(this.numberOfFollowers)
//     }
 const colors =  ["red", "green", "blue" ];

 let x = ""

 function changeColor(color, name) {
    x = color
    console.log(name)
 }

 changeColor("blue", "gili")
 changeColor(colors, "nave")
 changeColor("blue", "Alicia")

 console.log(colors[1]);
const filteredColors = colors.filter(color => color != "blue")
console.log(filteredColors)

  const numbers = [ 1,2,3,4,5]
  numbers[5] = 9
  console.log(numbers);
  