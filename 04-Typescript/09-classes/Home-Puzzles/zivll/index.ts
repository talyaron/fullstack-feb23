class Influencers {
  Name: string;
  Gender: string;
  TikToksAccount: string;
  InstagramsAccount: string;
  Followers: number;
  constructor(
    name: string,
    gender: string,
    TikToksAccount: string,
    InstagramsAccount: string,
    followers: number
  ) {
    this.Name = name;
    this.Gender = gender;
    this.TikToksAccount = TikToksAccount;
    this.InstagramsAccount = InstagramsAccount;
    this.Followers = followers;
  }
  setFollowers(followers: number): number | undefined {
    try {
      return (this.Followers = followers);
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
  getFollowers() {
    return this.Followers;
  }
}
const celeb1 = new Influencers(
  `Ziv Leloneck`,
  `male`,
  `@zivll`,
  `@zivll1991`,
  25000
);
const celeb2 = new Influencers(
  `Chaya Leloneck`,
  `female`,
  `@chaya933`,
  `@chayall`,
  30000
);
const celeb3 = new Influencers(
  `Avi Leloneck`,
  `male`,
  `@avill`,
  `@avi1989`,
  19000
);

console.log(celeb1);
console.log(celeb2);
console.log(celeb3);
console.log(celeb1.getFollowers());
console.log(celeb1.setFollowers(45000));

function mostFollowers(celebsArr): string | undefined {
  try {
    let celebMostFollowers: string = ``;
    let celebMostFollowersByNum: number = 0;
    for (let i = 0; i < celebsArr.length; i++) {
      if (celebMostFollowersByNum < celebsArr[i].Followers) {
        celebMostFollowersByNum = celebsArr[i].Followers;
        celebMostFollowers = celebsArr[i].Name;
      }
    }
    return celebMostFollowers;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
function mostOrderedByFollowers(celebsArr) {
  return celebsArr.sort((a, b) => b.Followers - a.Followers);
}
const celebs = [celeb1, celeb2, celeb3];
console.log(`the celeb with the most followers is: ${mostFollowers(celebs)}`);
console.log(celeb2.setFollowers(75000));
console.log(`the celeb with the most followers is: ${mostFollowers(celebs)}`);
console.log(mostOrderedByFollowers(celebs));
