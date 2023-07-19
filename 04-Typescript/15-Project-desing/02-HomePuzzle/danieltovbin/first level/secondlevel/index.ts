// # Goal: #
// Work Time clock.
// every worker, can set entrance time , and exit time.

// ## Levels ##
// 2) The system can log different users (use select input). the system can calculate the user monthly total hours

// entities: User, Hour


//Model

const userArray:User[] = [];

class User {
    id: string;
    workingHours: Hour[]=[];
    constructor(public userName: string) {}

<<<<<<< HEAD
    getMonthlyWorkHours(monthDays: number){
        let totalMinutes = 0;
        for(const hour of this.workingHours){
            totalMinutes += hour.calculateTotalMinutes
        }
        // let dailyMinutes = this.calculateDailyMinutes(entrance, exit);
        // const monthlyMinutes = dailyMinutes * monthDays;
        const hourInstance = new Hour("","");
        return hourInstance.convertMinutesToString(monthlyMinutes);

    }

    calculateDailyMinutes (entrance: string, exit: string){
        const entranceTime = this.convertTimeStringToMinutes(entrance);
        const exitTime = this.convertTimeStringToMinutes(exit);
        const totalMinutes = exitTime - entranceTime;
        return totalMinutes;
    }
    convertTimeStringToMinutes(timeInString:string){
        const [hours, minutes] = timeInString.split(":");
        const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
        return totalMinutes;
=======
    getTotalWorkHours() :string{
        let totalMinutes = 0;
        for(const hour of this.workingHours){
            totalMinutes += hour.convertTimeStringToMinutes(hour.exit) - hour.convertTimeStringToMinutes(hour.enctrance)

        }
        const hourInstance = new Hour(" ", " ");
        return hourInstance.convertMinutesToString(totalMinutes);
>>>>>>> 739c24e868222afd020880edb0b95cbe98262c5d
    }
}

const html = `
        <label for="user-select">Choose name</label>
        <select name="users" id="user-select">
            <option value="">---Choose an option---</option>
        </select>

        <input type="name" id="name-input" placeholder="Add Name">
        <label for="entrance-input">Enter entrance time</label>
        <input type="time" id="entrance-input">
        <label for="exit-input">Enter exit time</label>
        <input type="time" id="exit-input">
        <button id="add-user-btn">Add User</button>
        <button id="submit-btn">Submit</button>
        <div id="result"></div>`;

const rootElement = document.querySelector("#root") as HTMLDivElement;
if (rootElement) {
    rootElement.innerHTML = html;

    const addUserBtn = document.querySelector('#add-user-btn') as HTMLButtonElement;
    if(addUserBtn) {
        addUserBtn.addEventListener("click", addUser);
    }
}


function addUser(){
    const userSelect = document.querySelector("#user-select") as HTMLSelectElement;
    const nameInput = document.querySelector("#name-input") as HTMLInputElement;
    const entranceInput = document.querySelector("#entrance-input") as HTMLInputElement;
<<<<<<< HEAD
    const exitInput = document.querySelector("#exit-input") as HTMLInputElement;

    const name = nameInput.value;
    const entrance = entranceInput.value;
    const exit = exitInput.value;
=======
    const exitinput = document.querySelector("#exit-input") as HTMLInputElement;

    const name = nameInput.value;
    const entrance = entranceInput.value;
    const exit = exitinput.value;
>>>>>>> 739c24e868222afd020880edb0b95cbe98262c5d


    if(name && entrance && exit) {
        const user = new User(name);
        const hour = new Hour(entrance, exit);
        user.workingHours.push(hour);
        userArray.push(user);


        const option = document.createElement("option");
        option.value = name;
        option.text = name;
        userSelect.add(option);

        nameInput.value = '';
        entranceInput.value = '';
<<<<<<< HEAD
        exitInput.value = '';
=======
        exitinput.value = '';
>>>>>>> 739c24e868222afd020880edb0b95cbe98262c5d
    }
}





const hourArray:Hour[] = [];

class Hour {
    id: string;
<<<<<<< HEAD
    constructor(public entrance: string, public exit:string){
        const entranceTime = this.convertTimeStringToMinutes(entrance);
=======
    constructor(public enctrance: string, public exit:string){
        const entranceTime = this.convertTimeStringToMinutes(enctrance);
>>>>>>> 739c24e868222afd020880edb0b95cbe98262c5d
        const exitime = this.convertTimeStringToMinutes(exit);
        const totalTime = exitime - entranceTime;
        this.id = this.convertMinutesToString(totalTime);

    }

    convertTimeStringToMinutes(timeInString:string):number{
        const [hours, minutes] = timeInString.split(":");
        const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
        return totalMinutes;
    }

    convertMinutesToString(minutes: number):string{
        const hours = Math.floor(minutes / 60).toString().padStart(2, "0");
        const mins = (minutes % 60).toString().padStart(2, "0");
        return `${hours}:${mins}`;
    }
}

<<<<<<< HEAD
const addUserBtn = document.querySelector("#add-user-btn") as HTMLButtonElement;
if(addUserBtn){
    addUserBtn.addEventListener("click", addUser);
}

=======
>>>>>>> 739c24e868222afd020880edb0b95cbe98262c5d

const submitBtn = document.querySelector("#submit-btn") as HTMLButtonElement;

if(submitBtn) {
<<<<<<< HEAD
    submitBtn.addEventListener("click", calculateMonthlyWorkHours);
}

function calculateMonthlyWorkHours(){
    const userSelect = document.querySelector("#user-select") as HTMLSelectElement;
    const selectedUserName = userSelect.value;
    const selectedUser = userArray.find(user => user.userName === selectedUserName);

    if (selectedUser) {
        const entranceInput = document.querySelector("#entrance-input") as HTMLInputElement;
        const exitInput = document.querySelector("#exit-input") as HTMLInputElement;
        const monthDays = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        const monthlyWorkHours = selectedUser.getMonthlyWorkHours(entranceInput.value, exitInput.value, monthDays);

        const resultDiv = document.querySelector("#result") as HTMLDivElement;
        resultDiv.textContent = `Monthly work hours for ${selectedUserName}: ${monthlyWorkHours}`;
    }

=======
    submitBtn.addEventListener("click", displayUserWorkHours);
}

function displayUserWorkHours(){
    const userSelect = document.querySelector("#user-select") as HTMLSelectElement;
    const selectedUserName = userSelect.value;
    const resultDiv = document.querySelector("#result") as HTMLDivElement;

    if(selectedUserName) {
        const user = userArray.find((u) => u.userName === selectedUserName);
        if (user) {
            const totalWorkHours = user.getTotalWorkHours();
            resultDiv.textContent = `User: ${selectedUserName}, Total hours worked:${totalWorkHours}`
        }
    }else {
        resultDiv.textContent = "";
    }
>>>>>>> 739c24e868222afd020880edb0b95cbe98262c5d
}



<<<<<<< HEAD











// function displayUserWorkHours(){
//     const userSelect = document.querySelector("#user-select") as HTMLSelectElement;
//     const selectedUserName = userSelect.value;
//     const resultDiv = document.querySelector("#result") as HTMLDivElement;

//     if(selectedUserName) {
//         const user = userArray.find((u) => u.userName === selectedUserName);
//         if (user) {
//             const totalWorkHours = user.getTotalWorkHours();
//             resultDiv.textContent = `User: ${selectedUserName}, Total hours worked:${totalWorkHours}`
//         }
//     }else {
//         resultDiv.textContent = "";
//     }
// }



=======
>>>>>>> 739c24e868222afd020880edb0b95cbe98262c5d
