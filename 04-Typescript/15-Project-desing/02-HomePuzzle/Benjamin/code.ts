function handleSubmit(ev: any) {
  try {
    ev.preventDefault();
    const tryusername = ev.target.userName.value;
    const trypassword = ev.target.password.value;
    let success = false;

    for (let i = 0; i < usersArr.length; i++) {
      const user = usersArr[i];
      if (user.username === tryusername && user.password === trypassword) {
        success = true;
        break;
      }
    }

    if (success) {
      const successTxt: string = "ההתחברות בוצעה בהצלחה!";
      if (loginBox) {
        loginBox.innerHTML = successTxt;
      }
    } else {
      const errorTxt: string = "שם משתמש או סיסמה שגויים!";
      if (loginBox) {
        loginBox.innerHTML = errorTxt;
      }
    }
  } catch (error) {
    console.error(error);
  }
}

const loginBox = document.querySelector(".loginBox");


// Rest of the code remains the same


class User {
  constructor(
    public username: string,
    public password: string,
    public name: string,
    public hours: number
  ) {}
}

const usersArr: User[] = [];

const benny = new User("benny3135", "benny45", "בנימין וולודרסקי", 0);
const noam = new User("noam3135", "noam45", "נועם וולודרסקי", 0);
const avram = new User("avram3135", "avram45", "אברהם וולודרסקי", 0);
const daniel = new User("daniel3135", "daniel45", "דניאל וולודרסקי", 0);

usersArr.push(benny, noam, avram, daniel);
