const loginBox = document.querySelector(".loginBox") as HTMLDivElement;
const userBlock = document.querySelector(".userBlock") as HTMLDivElement;

class User {
  constructor(
    public username: string,
    public password: string,
    public name: string,
    public hours: number
  ) { }
}



let currentTime = 0;
const benny = new User("benny3135", "benny45", "בנימין וולודרסקי", 0);
const noam = new User("noam3135", "noam45", "נועם וולודרסקי", 0);
const avram = new User("avram3135", "avram45", "אברהם וולודרסקי", 0);
const daniel = new User("daniel3135", "daniel45", "דניאל וולודרסקי", 0);
const usersArr: User[] = [];
usersArr.push(benny, noam, avram, daniel);
let m = 0;

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
        m = i;
        break;
      }
    }

    if (success) {
      const successTxt: string = "ההתחברות בוצעה בהצלחה!";
      if (loginBox) {
        loginBox.innerHTML = successTxt;
      }
      if (userBlock) {
        userBlock.style.display = "flex"
      }
      handleHours(usersArr[m])
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


// create the hours form and send the input to handleTime
function handleHours(user: User) {
  const welcomeHtml = `<h2 id="headLil">${user.name} ברוך הבא</h2>`
  userBlock.innerHTML += welcomeHtml;
  const hoursFromHtml = `<form onsubmit="handleTime(event)">
  <input type="submit" name="submit" placeholder="הזן">
  <label for="start">start</label>
  <input type="time" name="start" placeholder="אנא הזן">
  <label for="end">end</label>
  <input type="time" name="end" placeholder="אנא הזן">
</form>`
  userBlock.innerHTML += hoursFromHtml;
  
}
// getting the input from handleHours and returning the data
function handleTime(ev: any) {
  ev.preventDefault();
  let stratTime = ev.target.start.value;
  let endtime = ev.target.end.value;
  let totalTime = convertToHourFormat(modifyHourFormat(endtime) - modifyHourFormat(stratTime));
  let hoursHTML = `<p >שעת כניסה:${stratTime}</p>
  <p >שעת יציאה:${endtime}</p>
  <p >עבדת היום:${totalTime} שעות</p>`
  userBlock.innerHTML+= hoursHTML
  return modifyHourFormat(totalTime);
}



// convert hour format to calculatble number format
function modifyHourFormat(hourFormat: string): number {
  const [hourStr, minuteStr] = hourFormat.split(":");
  const hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  return hour + minute / 60;
}
// convert calculatble number to hour format format

function convertToHourFormat(hourNumber: number): string {
  const hour = Math.floor(hourNumber);
  const minute = Math.round((hourNumber - hour) * 60);
  const hourStr = hour.toString().padStart(2, "0");
  const minuteStr = minute.toString().padStart(2, "0");
  return `${hourStr}:${minuteStr}`;
}
