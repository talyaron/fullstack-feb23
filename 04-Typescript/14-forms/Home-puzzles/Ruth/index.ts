class User {
  public userAge: number;
  public ID: string;

  constructor(
    public userName: string,
    public userImg: string,
    public userEmail: string,
    public userColor: string,
    yearOfBirth: number,
    public cardsWidth: number,
    public renderTime: number,
  ) {
    this.userAge = new Date().getFullYear() - yearOfBirth;
    this.ID = String(
      Date.now().toString(32) + Math.random().toString(16),
    ).replace(/\./g, "");
  }

  renderUser(root: HTMLDivElement) {
    for (let i = 0; i < this.renderTime; i++) {
      root.innerHTML += `
        <div class="userCard" style= "background-color:${this.userColor}; width:${this.cardsWidth}%;">
        <h3>${this.userName}</h3>
        <p> ${this.userEmail}</p>
        <img class="userImg" src="${this.userImg}" alt="" />
        <p>  ${this.userAge}</p>
        <button onclick = "removeUser('${this.ID}')">remove</button>
        </div>
        `;
    }
  }
  editUser(
    _userName: string,
    _userImg: string,
    _userEmail: string,
    _userColor: string,
    _yearOfBirth: number,
    _cardsWidth: number,
    _renderTime: number,
  ) {
    this.userName = _userName || this.userName;
    this.userImg = _userImg || this.userImg;
    this.userEmail = _userEmail || this.userEmail;
    this.userColor = _userColor || this.userColor;
    this.userAge = !isNaN(_yearOfBirth)
      ? new Date().getFullYear() - _yearOfBirth
      : this.userAge;
    this.cardsWidth = !isNaN(_cardsWidth) ? _cardsWidth : this.cardsWidth;
    this.renderTime = !isNaN(_renderTime) ? _renderTime : this.renderTime;

    gallery.innerHTML = "";
    users.forEach((user) => user.renderUser(gallery));
  }
}


const gallery = document.querySelector(".gallery") as HTMLDivElement;
const editDivChanges = document.querySelector(".editDivChanges") as HTMLDivElement;

let users: User[] = [new User("ruth_user_name","https://cdn.pixabay.com/photo/2023/05/07/09/59/mountains-7976041_1280.jpg","rutttur66@gmail.com","#989872",1996,90,2)];
users.forEach((user) => user.renderUser(gallery));

function addUser(event: any) {
  try {
    event.preventDefault();
    const newUserName = event.target.userName.value;
    const newUserImg = event.target.userImg.value;
    const newUserEmail = event.target.userEmail.value;
    const newUserColor = event.target.userColor.value;
    const newUserYear = event.target.yearOfBirth.valueAsNumber;
    const cardWidth = event.target.cardWidth.valueAsNumber;
    const timeToRender = event.target.timeToRender.valueAsNumber;
    const newUser = new User(
      newUserName,
      newUserImg,
      newUserEmail,
      newUserColor,
      newUserYear,
      cardWidth,
      timeToRender,
    );
    users.push(newUser);
    newUser.renderUser(gallery);
  } catch (error) {
    console.error(error);
    return;
  }
}

function removeUser(id: string) {
  users = users.filter((user) => user.ID != id);
  gallery.innerHTML = ``;
  users.forEach((user) => user.renderUser(gallery));
  editDivChanges.style.display = "none";
}

function HandleEditUser(event: any) {
  event.preventDefault();
  const emailToEdit = document.querySelector(
    "#userEmailToEdit",
  ) as HTMLInputElement;
  const emailToEditValue = emailToEdit.value;
  const userToEdit = users.find((user) => user.userEmail == emailToEditValue);

  const newUserName = event.target.editUserName.value;
  const newUserImg = event.target.editUserImg.value;
  const newUserEmail = event.target.editUserEmail.value;
  const newUserColor = event.target.editUserColor.value;
  const newUserYear = event.target.editYearOfBirth.valueAsNumber;
  const cardWidth = event.target.editTimeToRender.valueAsNumber;
  const timeToRender = event.target.editCardWidth.valueAsNumber;

  userToEdit!.editUser(
    newUserName,
    newUserImg,
    newUserEmail,
    newUserColor,
    newUserYear,
    cardWidth,
    timeToRender,
  );
}

function findUserToEdit(): boolean {
  const emailToEdit = document.querySelector(
    "#userEmailToEdit",
  ) as HTMLInputElement;
  const emailToEditValue = emailToEdit.value;
  if (users.some((elem) => elem.userEmail === emailToEditValue)) {
    editDivChanges.style.display = "block";
    return true;
  } else {
    alert("not found user with this email address , please try again");
    return false;
  }
}
