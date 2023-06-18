// create a form for user profile (with name, image (url), preferd color, year of birth)
// On submit, add the new profiles in to an array of class User
// Render all instances of user into cards of profiles

// this function includes all user information
// const userArray = [];
function handleSubmit(ev: any) {
  try {
    ev.preventDefault();
    console.log(ev);
    const userName = ev.target.username.value;
    const imgUrl = ev.target.imagUrl.value;
    const color = ev.target.userColor.value;
    const dateOfBirth = ev.target.dateOfBirth.value;
    console.log(userName);
    const userArray: UserName[] = [
      new UserName(userName, imgUrl, color, dateOfBirth),
    ];
    console.log(UserName);

    // const result = { userName, imgUrl, color, dateOfBirth };
  } catch (error) {
    console.error(error);
    return;
  }
}

// this function takes all the info and make it into array
function newUserIntoArray(username: []) {}

class UserName {
  constructor(
    public userName: string,
    public imgUrl: string,
    public color: string,
    public dateOfBirth: number
  ) {}
}
console.dir(UserName);
