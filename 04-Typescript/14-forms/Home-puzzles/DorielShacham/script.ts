class Member {
  constructor(
    public userName: string,
    public age: number,
    public picture: string
  ) {}
}

const arrayOfUser: Member[] = new Array();

function createUser(event: any) {
  try {
    event.preventDefault();
    console.dir(event);
    const username = event.target.username.value;
    const age = event.target.age.valueAsNumber;
    const picture = event.target.userPic.value;
    const user = new Member(username, age, picture);
    arrayOfUser.push(user);
    UserObject(user);
  } catch (error) {
    console.error(error);
  }
}

function UserObject(user: Member) {
  try {
    const profiles = document.querySelector("#profile");
    if (!profiles) throw new Error("Missing information");
    profiles.innerHTML += `<div id="${arrayOfUser.length}" class="profile">
        <div class="userName">Name: ${user.userName}</div>
        <div class="age">Age: ${user.age}</div>
        <img class="image" src="${user.picture}"> </div> `;
  } catch (error) {
    console.error(error);
  }
}
