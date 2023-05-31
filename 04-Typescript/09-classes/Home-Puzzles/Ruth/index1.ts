class Celebs {
  name: string;
  genre: string;
  tikTokAccount: string;
  instagramAccount: string;
  followers: number;

  constructor(
    _name: string,
    _genre: string,
    _tikTokAccount: string,
    _instagramAccount: string,
    _followers: number,
  ) {
    this.name = _name;
    this.genre = _genre;
    this.tikTokAccount = _tikTokAccount;
    this.instagramAccount = _instagramAccount;
    this.followers = _followers;
  }

  getFollowers() {
    return this.followers;
  }

  setFollowers(_newNumberOfFollowers) {
    this.followers = _newNumberOfFollowers;
  }
}

function mostPopular(celebs: Celebs[]) {
  let temp: Celebs = celebs[0];
  for (let i = 0; i < celebs.length; i++) {
    if (temp.followers < celebs[i].followers) temp = celebs[i];
  }
  return `${
    temp.name
  } have the most bigger number of followers with ${temp.getFollowers()}`;
}

function sortedByFollowers(celebs: Celebs[]) {
  let temp: Celebs = celebs[0];

  for (let i = 0; i < celebs.length; i++) {
    for (let j = 0; j < celebs.length - 1 - i; j++) {
      console.log(celebs);
      console.log(i, j);

      if (celebs[j].followers > celebs[j + 1].followers) {
        console.log(celebs[j].followers, celebs[j + 1].followers);
        temp = celebs[j + 1];
        celebs[j + 1] = celebs[j];
        celebs[j] = temp;
      }
    }
  }
  return celebs;
}

const yodaLevi = new Celebs(
  "Yehuda Levi",
  "actor",
  "www.tiktok.com",
  "www.instegram.com",
  2000,
);
const amosTammam = new Celebs(
  "Amos Tamam ",
  "actor",
  "www.tiktok.com",
  "www.instegram.com",
  1000,
);
const yonitLevi = new Celebs(
  "Yonit Levi",
  "newscaster",
  "www.tiktok.com",
  "www.instegram.com",
  20,
);
const hadarMarks = new Celebs(
  "Hadar Marks",
  "radio broadcaster",
  "www.tiktok.com",
  "www.instegram.com",
  20080,
);

console.log(yodaLevi.followers);
// yodaLevi.setFollowers(26);
console.log(yodaLevi.getFollowers());

const arrayCel: Celebs[] = [yodaLevi, amosTammam, yonitLevi, hadarMarks];
console.log(arrayCel);

console.log(mostPopular(arrayCel));

console.log(sortedByFollowers(arrayCel));
