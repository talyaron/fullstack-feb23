

class User {

  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {
  
  }
}

const users: User[] = [];
console.log(users);

// Get users from local storage
const usersString = localStorage.getItem('users');
console.log(usersString);

if (usersString) {
  // Convert string to array
  const usersArray = JSON.parse(usersString);
  console.log(usersArray);
  usersArray.forEach((user) =>
    users.push(new User(user.name, user.email, user.password))
  );
  console.log(users);
  renderUsers();
}

function handleAddUser(ev) {
  try {
    ev.preventDefault();
    const name = ev.target.name.value;
    const email = ev.target.email.value;
    const password = ev.target.password.value;

    const nameRoot = document.querySelector('#rootName');
    if (!nameRoot)
      throw new Error('couldnt find rootName html element');
    checkUserExists(name, email, password);
    renderUsers();

    ev.target.reset();

    const usersJson = JSON.stringify(users);

    localStorage.setItem('users', usersJson);
  } catch (error) {
    console.error(error);
  }
}

function checkUserExists(name, email, password) {
  const existingUser = users.find(
    (user) => user.name === name && user.email === email
  );
  if (existingUser) {
    alert('User already exists');
  } else {
    users.push(new User(name, email, password));
  }
}

function renderUsers() {
  const html = `<div dir="rtl" class="row">
  <div class="columna">
      <h1 class="heading">   איזה כיף שנרשמת אלינו ${users[users.length - 1].name} </h1> 
         <p class="p"> מהיום מתחילים לעשות סדר בחשבון הבנק ! </p>
        <button class="button" onclick="document.location='../home-page/homepage.html'">כניסה ></button>
    </div>
        </div>`;
  const nameRoot = document.querySelector('#rootName');
  if (!nameRoot)
    throw new Error('couldnt find rootPersons html element');
  nameRoot.innerHTML = html;
}