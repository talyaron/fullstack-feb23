function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}

const email = getEmailFromQuery();
console.log(email)
// const start = async () => {
//     try {      
//         await renderAdminPage();
//     } catch (error) {
//         console.error(error);
//     }
// }
renderAdminPage();


async function renderAdminPage() {
    try {
        const response = await fetch(`/API/physician/get-physicians?email=${email}`);
        const data = await response.json();
        console.log(data)
        renderWelcome(data.physicians[0].lastName, document.querySelector("#root"));
        renderAdminActions(document.querySelector("#header"));
    } catch (error) {
        console.error(error);
    }
}

function renderAdminActions(root: HTMLDivElement) {
    try {
        root.innerHTML += `<div id="admin-actions">
        <button id="add-physician" onclick="hundleAddPhysician()">Add Physician</button>
        <button id="add-patient" onclick="hundleAddPatient()">Add Patient</button>
        <button id="add-medicine" onclick="hundleAddMedicine()">Add Medicine</button>
        <button id="update-physician" onclick="hundleUpdatePhysician()">Update Physician</button>
        <button id="update-patient" onclick="hundleUpdatePatient()">Update Patient</button>
        <button id="update-medicine" onclick="hundleUpdateMedicine()">Update Medicine</button>
    </div>
        `;
    } catch (error) {
        console.error(error);
    }
}

function renderWelcome(lastName, root: HTMLDivElement) {
    try {
        root.innerHTML += `<div id = "header">
        <h1>Welcome Dr. ${lastName}</h1>
        </div>
        <div id="forms"></div>`;
    } catch (error) {
        console.error(error);
    }
}

function hundleAddPhysician() {
    try {
        renderAddPhysician(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

function renderAddPhysician(html: HTMLDivElement) {
    try {
        html.innerHTML = `<h2>Add Physician</h2>
        <form onsubmit="hundlePhysicianSubmit(event)">
        <div class="input">
        <label for="firstName">First Name:</label><br>
        <input type="text" id="firstName" name="firstName">
        </div><div class="input">
        <label for="lastName">Last Name:</label><br>
        <input type="text" id="lastName" name="lastName">
        </div> <div class="input">
        <label for="age">Age:</label><br>
        <input type="number" id="age" name="age">
        </div> <div class="input">
        <label for="phoneNum">Phone Number:</label><br>
        <input type="number" id="phoneNum" name="phoneNum">
        </div><div class="input">
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email">
        </div><div class="input">
        <label for="licenseNumber">License Number:</label><br>
        <input type="number" id="licenseNumber" name="licenseNumber">
        </div><div class="input">
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password">
        </div><div class="input">
        <label for="isAdmin">Admin:</label><br>
        <input type="checkbox" id="isAdmin" name="isAdmin">
        </div> 
        <input type="submit" value="ADD">
        </form>`;
    } catch (error) {
        console.error(error);
    }
}

async function hundlePhysicianSubmit(event) {
    try {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const age = event.target.age.value;
        const phoneNum = event.target.phoneNum.value;
        const email = event.target.email.value;
        const licenseNumber = event.target.licenseNumber.value;
        const password = event.target.password.value;
        const isAdmin = event.target.isAdmin.checked;
        if (!firstName || !lastName || !age || !phoneNum || !email || !licenseNumber || !password) throw new Error("missing some details");
        const response = await fetch("API/physician/add-physician", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, age, phoneNum, email, licenseNumber, password, isAdmin })
        })
        const data = await response.json();
        console.log(data);
        alert("Physician added successfully");
        window.location.href = `admin.html?email=${email}`;
    } catch (error) {
        console.error(error);
    }
}

function hundleAddPatient() {
    try {
        renderAddPatient(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

async function renderAddPatient(html: HTMLDivElement) {
    try {
        let tempHtml = `<h2>Add Patient</h2>
        <form onsubmit="hundlePatientSubmit(event)">
            <div class="input">
            <label for="firstName">First Name:</label><br>
            <input type="text" id="firstName" name="firstName">
            </div><div class="input">
            <label for="lastName">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName">
            </div> <div class="input">
            <label for="age">Age:</label><br>
            <input type="number" id="age" name="age">
            </div> <div class="input">
            <label for="phoneNum">Phone Number:</label><br>
            <input type="number" id="phoneNum" name="phoneNum">
            </div><div class="input">
            <label for="weight">Weight:</label><br>
            <input type="number" id="weight" name="weight">
            </div><div class="input">
            <label for="height">Height:</label><br>
            <input type="number" id="height" name="height">
            </div><div class="input">
            <label for="smoking">Smoking:</label><br>
            <input type="checkbox" id="smoking" name="smoking">
            </div><div class="input">
            <label for="address">Address:</label><br>
            <input type="text" id="address" name="address">
            </div><div class="input">
            <label for="physicianId">Select physician</label><br>
            <select id="physicianId" name="physicianId">
            `;
        const physiciansList = await getPhysiciansList();
        physiciansList.forEach(physician => {
            tempHtml += `<option value="${physician.id}"> Dr. ${physician.firstName} ${physician.lastName}</option>`;
        });
        tempHtml += `</select>
            </div>
            <input type="submit" value="ADD">
        </form>`;

        html.innerHTML = tempHtml;
    } catch (error) {
        console.error(error);
    }
}

async function getPhysiciansList() {
    try {
        const response = await fetch("/API/physician/get-physicians");
        const data = await response.json();
        const physiciansList: Physician[] = data.physicians;
        return physiciansList;
    } catch (error) {
        console.error(error);
    }
}

async function hundlePatientSubmit(event) {
    try {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const age = event.target.age.value;
        const phoneNum = event.target.phoneNum.value;
        const weight = event.target.weight.value;
        const height = event.target.height.value;
        const smoking = event.target.smoking.checked;
        const address = event.target.address.value;
        const physicianId = event.target.physicianId.value;
        if (!firstName || !lastName || !age || !phoneNum || !weight || !height || !address || !physicianId) throw new Error("missing some details");
        const response = await fetch("API/patient/add-patient", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, age, phoneNum, weight, height, smoking, address, physicianId })
        })
        const data = await response.json();
        console.log(data);
        alert("Patient added successfully");
        window.location.href = `admin.html?email=${email}`;
    } catch (error) {
        console.error(error);
    }
}

function hundleAddMedicine() {
    try {
        renderAddMedicine(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

function renderAddMedicine(html: HTMLDivElement) {
    try {
        html.innerHTML = `<h2>Add Medicine</h2>
        <form onsubmit="hundleMedicineSubmit(event)">
            <div class="input">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name">
            </div><div class="input">
            <label for="dosagePerDay">Dosage Per Day:</label><br>
            <input type="number" id="dosagePerDay" name="dosagePerDay">
            </div> <div class="input">
            <label for="maxDuration">Max Duration:</label><br>
            <input type="number" id="maxDuration" name="maxDuration">
            </div>
            <input type="submit" value="ADD">
        </form>`;
    } catch (error) {
        console.error(error);
    }
}

async function hundleMedicineSubmit(event) {
    try {
        event.preventDefault();
        const name = event.target.name.value;
        const dosagePerDay = event.target.dosagePerDay.value;
        const maxDuration = event.target.maxDuration.value;
        if (!name || !dosagePerDay || !maxDuration) throw new Error("missing some details");
        const response = await fetch("API/medicine/add-medicine", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, dosagePerDay, maxDuration })
        })
        const data = await response.json();
        console.log(data);
        alert("Medicine added successfully");
        window.location.href = `admin.html?email=${email}`;
    } catch (error) {
        console.error(error);
    }
}

function hundleUpdatePhysician() { 
    try {
        renderUpdatePhysician(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

async function renderUpdatePhysician(html: HTMLDivElement) { 
    try {
        let tempHtml = `<h2>Update Physician</h2>
        <form onsubmit="hundlePhysicianUpdateSubmit(event)">
        <div class="input">
        <label for="id">Select physician</label><br>
        <select id="id" name="id">
        `;
        const physiciansList = await getPhysiciansList();
        physiciansList.forEach(physician => {
            tempHtml += `<option value="${physician.id}"> Dr. ${physician.firstName} ${physician.lastName}</option>`;
        });
        tempHtml += `</select>
            </div>
            <div class="input">
            <label for="firstName">First Name:</label><br>
            <input type="text" id="firstName" name="firstName">
            </div><div class="input">
            <label for="lastName">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName">
            </div> <div class="input">
            <label for="age">Age:</label><br>
            <input type="number" id="age" name="age">
            </div> <div class="input">
            <label for="phoneNum">Phone Number:</label><br>
            <input type="number" id="phoneNum" name="phoneNum">
            </div><div class="input">
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email">
            </div><div class="input">
            <label for="licenseNumber">License Number:</label><br>
            <input type="number" id="licenseNumber" name="licenseNumber">
            </div><div class="input">
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password">
            </div><div class="input">
            <label for="isAdmin">Admin:</label><br>
            <input type="checkbox" id="isAdmin" name="isAdmin">
            </div> 
            <input type="submit" value="UPDATE">
            </form>`;
        html.innerHTML = tempHtml;
    } catch (error) {
        console.error(error);
    }
}

async function hundlePhysicianUpdateSubmit(event) { 
    try {
        event.preventDefault();
        debugger;   
        const id = event.target.selecte[0].value;
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const age = event.target.age.value;
        const phoneNum = event.target.phoneNum.value;
        const email = event.target.email.value;
        const licenseNumber = event.target.licenseNumber.value;
        const password = event.target.password.value;
        const isAdmin = event.target.isAdmin.checked;

        if (!id) throw new Error("missing some details");
        const response = await fetch("API/physician/update-physician", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, firstName, lastName, age, phoneNum, email, licenseNumber, password, isAdmin })
        })
        const data = await response.json();
        console.log(data);
        alert("Physician updated successfully");
        window.location.href = `admin.html?email=${email}`;
    } catch (error) {
        console.error(error);
    }
}

