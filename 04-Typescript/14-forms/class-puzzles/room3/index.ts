// create a form for user profile (with name, image (url), preferd color, year of birth)
// On submit, add the new profiles in to an array of class User
// Render all instances of user into cards of profiles

// this function includes all user information
const usersArray: UserName[] = [];
function handleSubmit(ev: any) {
  try {
    ev.preventDefault();
    const userName = ev.target.username.value;
    const imgUrl = ev.target.imagUrl.value;
    const color = ev.target.userColor.value;
    const dateOfBirth = ev.target.dateOfBirth.value;
    usersArray.push(new UserName(userName, imgUrl, color, dateOfBirth));
    debugger;

    renderUsers(usersArray);
  } catch (error) {
    console.error(error);
    return;
  }
}

// this function takes all the info and make it into array
// function newUserIntoArray(username: []) {}

class UserName {
  constructor(
    public userName: string,
    public imgUrl: string,
    public color: string,
    public dateOfBirth: string // public age: Function
  ) {}
  age(dateOfBirth) {
    try {
      const userAge = new Date().getFullYear() - parseInt(dateOfBirth);
      return userAge;
    } catch (error) {
      console.error(error);
    }
  }
}

function renderUsers(usersDetails: UserName[] = []) {
  debugger;

  const cardsWrapper = document.querySelector(`#cardsWrapper`);
  const userDetails = usersDetails.pop();
  const randomNumber = Math.round(Math.random() * 1000);
  if (!userDetails) throw new Error(`user's details not found`);
  if (cardsWrapper) {
    cardsWrapper.innerHTML += `<div class="card" id="id-${randomNumber}">
      <div class="card_img"><img src="${userDetails.imgUrl}" alt="" /></div>
      <div class="card_user-details"><h3>Name: ${
        userDetails.userName
      }<br>Age: ${userDetails.age(userDetails.dateOfBirth)}</h3></div>
    </div>`;
    const usersColor: HTMLElement | null = document.querySelector(
      `#${randomNumber}`
    );
    renderColor(randomNumber, userDetails.color);
    // if (usersColor) {
    //   usersColor.style.backgroundColor = userDetails.color;
    // }
  }
}
function renderColor(idNumber: number, color: string) {
  try {
    const colorId: HTMLElement | null = document.querySelector(
      `#id-${idNumber}`
    );
    if (colorId) {
      return (colorId.style.backgroundColor = color);
    }
  } catch (error) {
    console.error(error);
  }
}
debugger;
// console.dir(renderColor(49, "#003F80"));
