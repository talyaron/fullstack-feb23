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
    public dateOfBirth: string
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
  const cardsWrapper = document.querySelector(`#cardsWrapper`);
  const userDetails = usersDetails.pop();
  const randomNumber = Math.round(Math.random() * 1000);
  if (!userDetails) throw new Error(`user's details not found`);
  if (cardsWrapper) {
    cardsWrapper.innerHTML += `<div class="card" id="id-${randomNumber}" style="background-color: ${
      userDetails.color
    }">
      <div class="card_img"><img src="${userDetails.imgUrl}" alt="" /></div>
      <div class="card_user-details"><h3>שם: ${
        userDetails.userName
      }<br>גיל: ${userDetails.age(userDetails.dateOfBirth)}</h3></div>
    </div>`;
  }
}
