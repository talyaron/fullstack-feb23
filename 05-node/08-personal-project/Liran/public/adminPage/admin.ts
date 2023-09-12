
const email = getEmailFromQuery();
console.log(email)
renderAdminPage();


async function hundleVisitsList() {
    try {
        renderVisitsList(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

async function hundlePhysicianUpdateSubmit(event) {
    try {
        event.preventDefault();
        const id = event.target[0].value;
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const age = event.target.age.valueAsNumber;
        const phoneNum = event.target.phoneNum.value;
        const email = event.target.email.value;
        const licenseNumber = event.target.licenseNumber.value;
        const password = event.target.password.value;
        const isAdmin = event.target.isAdmin.checked;


        if (!id) throw new Error("missing some details");
        const response = await fetch("/API/physician/update-physician", {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, firstName, lastName, age, phoneNum, email, licenseNumber, password, isAdmin })
        })
        const data = await response.json();
        console.log(data);
        alert("Physician updated successfully");
        window.location.href = `admin.html?physicianEmail=${email}`;
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
        const response = await fetch("/API/medicine/add-medicine", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, dosagePerDay, maxDuration })
        })
        const data = await response.json();
        console.log(data);
        alert("Medicine added successfully");
        window.location.href = `admin.html?physicianEmail=${email}`;
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

function hundleUpdatePatient() {
    try {
        renderUpdatePatient(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

async function hundlePatientUpdateSubmit(event) {
    try {
        event.preventDefault();

        const id = event.target[0].value;
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const age = event.target.age.value;
        const phoneNum = event.target.phoneNum.value;
        const weight = event.target.weight.value;
        const height = event.target.height.value;
        const smoking = event.target.smoking.checked;
        const address = event.target.address.value;
        const physicianId = event.target.physicianId.value;
        if (!id) throw new Error("missing some details");
        const response = await fetch("/API/patient/update-patient", {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, firstName, lastName, age, phoneNum, weight, height, smoking, address, physicianId })
        })
        const data = await response.json();
        console.log(data);
        alert("Patient updated successfully");
        window.location.href = `admin.html?physicianEmail=${email}`;
    } catch (error) {
        console.error(error);
    }
}

function hundleUpdateMedicine() {
    try {
        renderUpdateMedicine(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}


async function hundleMedicineUpdateSubmit(event) {
    try {
        event.preventDefault();
        const id = event.target[0].value;
        const name = event.target.name.value;
        const dosagePerDay = event.target.dosagePerDay.value;
        const maxDuration = event.target.maxDuration.value;
        debugger;
        if (!id) throw new Error("missing some details");
        const response = await fetch("/API/medicine/update-medicine", {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, name, dosagePerDay, maxDuration })
        })
        const data = await response.json();
        console.log(data);
        alert("Medicine updated successfully");
        window.location.href = `admin.html?physicianEmail=${email}`;
    } catch (error) {
        console.error(error);
    }
}

async function hundlePrescription(id) {
    try {
        const popupURL = `../perscriptionPopUpPage/prescriptionPopUp.html?prescriptionId=${id}`;
        const popupWidth = 700;
        const popupHeight = 400;
        const left = (window.innerWidth - popupWidth) / 2;
        const top = (window.innerHeight - popupHeight) / 2;
        const popupWindow = window.open(popupURL, "PopupWindow", `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
        if (popupWindow) {
            popupWindow.focus();
        }
    } catch (error) {
        console.error(error);
    }
}

async function hundleSummary(id) {
    try {
        const popupURL = `../summaryPage/summary.html?VisitId=${id}`;
        const popupWidth = 700;
        const popupHeight = 400;
        const left = (window.innerWidth - popupWidth) / 2;
        const top = (window.innerHeight - popupHeight) / 2;
        const popupWindow = window.open(popupURL, "PopupWindow", `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);
        if (popupWindow) {
            popupWindow.focus();
        }
    } catch (error) {
        console.error(error);
    }
}

function hundleLogout() {
    try {
        window.location.href = "../index.html";
    } catch (error) {
        console.error(error);
    }
}

function hundlePhysicianList() {
    try {
        renderPhysicianList(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

function hundlePatientList() {
    try {
        renderPatientList(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

function hundleMedicineList() {
    try {
        renderMedicineList(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

async function hundlePatientSubmit(event) {
    try {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const patientId = event.target.patientId.value;
        const age = event.target.age.value;
        const phoneNum = event.target.phoneNum.value;
        const weight = event.target.weight.value;
        const height = event.target.height.value;
        const smoking = event.target.smoking.checked;
        const address = event.target.address.value;
        const physicianId = event.target.physicianId.value;
        debugger;
        if (!firstName || !lastName || !patientId || !age || !phoneNum || !weight || !height || !address || !physicianId) throw new Error("missing some details");
        const response = await fetch("/API/patient/add-patient", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, patientId, age, phoneNum, weight, height, smoking, address, physicianId })
        })
        const data = await response.json();
        console.log(data);
        if (data.ok) alert("Patient added successfully");
        window.location.href = `admin.html?physicianEmail=${email}`;
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

function hundleDeletePhysician() {
    try {
        renderDeletePhysician(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

async function hundlePhysicianDeleteSubmit(event) {
    try {
        event.preventDefault();
        const id = event.target.id.value;
        if (!id) throw new Error("missing some details");
        const response = await fetch("/API/physician/delete-physician", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        const data = await response.json();
        console.log(data);
        alert("Physician deleted successfully");
        window.location.href = `admin.html?physicianEmail=${email}`;
    } catch (error) {
        console.error(error);
    }
}

function hundleDeletePatient() {
    try {
        renderDeletePatient(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

async function hundlePatientDeleteSubmit(event) {
    try {
        event.preventDefault();
        const id = event.target.id.value;
        if (!id) throw new Error("missing some details");
        const response = await fetch("/API/patient/delete-patient", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        const data = await response.json();
        console.log(data);
        alert("Patient deleted successfully");
        window.location.href = `admin.html?physicianEmail=${email}`;
    } catch (error) {
        console.error(error);
    }
}


function hundleDeleteMedicine() {
    try {
        renderDeleteMedicine(document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}


async function hundleMedicineDeleteSubmit(event) {
    try {
        event.preventDefault();
        const id = event.target.id.value;
        if (!id) throw new Error("missing some details");
        const response = await fetch("/API/medicine/delete-medicine", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        const data = await response.json();
        console.log(data);
        alert("Medicine deleted successfully");
        window.location.href = `admin.html?physicianEmail=${email}`;
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
        debugger;
        if (!firstName || !lastName || !age || !phoneNum || !email || !licenseNumber || !password) throw new Error("missing some details");
        const response = await fetch("/API/physician/add-physician", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, age, phoneNum, email, licenseNumber, password, isAdmin })
        })
        const data = await response.json();
        console.log(data);
        alert("Physician added successfully");
        window.location.href = `admin.html?physicianEmail=${email}`;
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
        <input type="text" id="phoneNum" name="phoneNum">
        </div><div class="input">
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email">
        </div><div class="input">
        <label for="licenseNumber">License Number:</label><br>
        <input type="text" id="licenseNumber" name="licenseNumber">
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

async function renderDeletePhysician(html: HTMLDivElement) {
    try {
        let tempHtml = `<h2>Delete Physician</h2>
        <form onsubmit="hundlePhysicianDeleteSubmit(event)">
        <div class="input">
        <label for="id">Select physician</label><br>
        <select id="id" name="id">
        `;
        const response = await fetch("/API/physician/get-physicians");
        const data = await response.json();
        const physiciansList: Physician[] = data.physician;
        physiciansList.forEach(physician => {
            tempHtml += `<option value="${physician._id}"> Dr. ${physician.firstName} ${physician.lastName}</option>`;
        });
        tempHtml += `</select>
            </div>
            <input type="submit" value="DELETE">
            </form>`;
        html.innerHTML = tempHtml;
    } catch (error) {
        console.error(error);
    }
}

async function renderMedicineList(html: HTMLDivElement) {
    try {
        const response = await fetch("/API/medicine/get-medicines");
        const data = await response.json();
        const medicinesList: Medicine[] = data.medicines;
        let tempHtml = `<h2>Medicine List</h2>
        <table>
        <tr>
        <th>Name</th>
        <th>Dosage Per Day</th>
        <th>Max Days</th>
        </tr>`;
        medicinesList.forEach(medicine => {
            tempHtml += `<tr>
            <td>${medicine.name}</td>
            <td>${medicine.dosagePerDay}</td>
            <td>${medicine.maxDuration}</td>
            </tr>`;
        });
        tempHtml += `</table>`;
        html.innerHTML = tempHtml;
    } catch (error) {
        console.error(error);
    }
}


async function renderDeletePatient(html: HTMLDivElement) {
    try {
        let tempHtml = `<h2>Delete Patient</h2>
        <form onsubmit="hundlePatientDeleteSubmit(event)">
        <div class="input">
        <label for="id">Select patient</label><br>
        <select id="id" name="id">
        `;
        const response = await fetch("/API/patient/get-patients");
        const data = await response.json();
        const patientsList: Patient[] = data.patients;
        patientsList.forEach(patient => {
            tempHtml += `<option value="${patient._id}"> ${patient.firstName} ${patient.lastName}</option>`;
        });
        tempHtml += `</select>
            </div>
            <input type="submit" value="DELETE">
            </form>`;
        html.innerHTML = tempHtml;
    } catch (error) {
        console.error(error);
    }
}

async function renderDeleteMedicine(html: HTMLDivElement) {
    try {
        let tempHtml = `<h2>Delete Medicine</h2>
        <form onsubmit="hundleMedicineDeleteSubmit(event)">
        <div class="input">
        <label for="id">Select medicine</label><br>
        <select id="id" name="id">
        `;
        const response = await fetch("/API/medicine/get-medicines");
        const data = await response.json();
        const medicinesList: Medicine[] = data.medicines;
        medicinesList.forEach(medicine => {
            tempHtml += `<option value="${medicine._id}"> ${medicine.name}</option>`;
        });
        tempHtml += `</select>
            </div>
            <input type="submit" value="DELETE">
            </form>`;
        html.innerHTML = tempHtml;
    } catch (error) {
        console.error(error);
    }
}


async function renderPhysicianList(html: HTMLDivElement) {
    try {
        const response = await fetch("/API/physician/get-physicians");
        const data = await response.json();
        const physiciansList: Physician[] = data.physician;
        let tempHtml = `<h2>Physician List</h2>
        <table>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>License Number</th>
        <th>Admin</th>
        </tr>`;
        physiciansList.forEach(physician => {
            tempHtml += `<tr>
            <td>${physician.firstName}</td>
            <td>${physician.lastName}</td>
            <td>${physician.age}</td>
            <td>${physician.phoneNum}</td>
            <td>${physician.email}</td>
            <td>${physician.licenseNumber}</td>
            <td>${physician.isAdmin}</td>
            </tr>`;
        });
        tempHtml += `</table>`;
        html.innerHTML = tempHtml;
    } catch (error) {
        console.error(error);
    }
}


async function renderAdminPage() {
    try {
        const response = await fetch(`/API/physician/get-physicians?email=${email}`);
        const data = await response.json();
        console.log(data)
        debugger
        renderWelcome(data.physician.lastName, document.querySelector("#root"));
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
        <button id="delete-physician" onclick="hundleDeletePhysician()">Delete Physician</button>
        <button id="delete-patient" onclick="hundleDeletePatient()">Delete Patient</button>
        <button id="delete-medicine" onclick="hundleDeleteMedicine()">Delete Medicine</button>
        <button id="physiciansList" onclick="hundlePhysicianList()">Physician List</button>
        <button id="patientsList" onclick="hundlePatientList()">Patient List</button>
        <button id="medicinesList" onclick="hundleMedicineList()">Medicine List</button>
        <button id="visitsList" onclick="hundleVisitsList()">Visits List</button>
        <button id="logout" onclick="hundleLogout()">Logout</button>
    </div>
        `;
    } catch (error) {
        console.error(error);
    }
}


async function renderPatientList(html: HTMLDivElement) {
    try {
        const response = await fetch("/API/patient/get-patients");
        const data = await response.json();
        const responsePhysician = await fetch("/API/physician/get-physicians");
        const dataPhysician = await responsePhysician.json();
        const physiciansList: Physician[] = dataPhysician.physician;
        const patientsList: Patient[] = data.patients;
        debugger;
        let tempHtml = `<h2>Patient List</h2>
        <table>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>ID</th>
        <th>Age</th>
        <th>Phone Number</th>
        <th>Weight</th>
        <th>Height</th>
        <th>Smoking</th>
        <th>Address</th>
        <th>Physician</th>
        </tr>`;
        const promise = patientsList.map(async (patient) => {
            const physicianName = await getPhysicianName(patient.physicianId);

            tempHtml += `<tr>
            <td>${patient.firstName}</td>
            <td>${patient.lastName}</td>
            <td>${patient.patientId}</td>
            <td>${patient.age}</td>
            <td>${patient.phoneNum}</td>
            <td>${patient.weight}</td>
            <td>${patient.height}</td>
            <td>${patient.smoking}</td>
            <td>${patient.address}</td>
            <td>${physicianName}</td>
            </tr>`;
        });
        await Promise.all(promise);

        tempHtml += `</table>`;
        html.innerHTML = tempHtml;
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
            <label for="patientId">ID:</label><br>
            <input type="text" id="patientId" name="patientId">
            </div><div class="input">
            <label for="age">Age:</label><br>
            <input type="number" id="age" name="age">
            </div> <div class="input">
            <label for="phoneNum">Phone Number:</label><br>
            <input type="text" id="phoneNum" name="phoneNum">
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
        const response = await fetch("/API/physician/get-physicians");
        const data = await response.json();
        const physiciansList: Physician[] = data.physician;
        debugger;
        physiciansList.forEach(physician => {
            tempHtml += `<option value="${physician._id}"> Dr. ${physician.firstName} ${physician.lastName}</option>`;
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


async function renderUpdatePhysician(html: HTMLDivElement) {
    try {
        let tempHtml = `<h2>Update Physician</h2>
        <form onsubmit="hundlePhysicianUpdateSubmit(event)">
        <div class="input">
        <label for="id">Select physician</label><br>
        <select id="id" name="id" onchange="loadDetails()">
        `;
        const response = await fetch("/API/physician/get-physicians");
        const data = await response.json();
        const physiciansList: Physician[] = data.physician;
        physiciansList.forEach(physician => {

            tempHtml += `<option value="${physician._id}"> Dr. ${physician.firstName} ${physician.lastName}</option>`;
        });
        tempHtml += `</select>
            </div>
            <div class="input">
            <label for="firstName">First Name:</label><br>
            <input type="text" id="firstName" name="firstName" value="${physiciansList[0].firstName}">
            </div><div class="input">
            <label for="lastName">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName" value="${physiciansList[0].lastName}">
            </div> <div class="input">
            <label for="age">Age:</label><br>
            <input type="number" id="age" name="age" value="${physiciansList[0].age}">
            </div> <div class="input">
            <label for="phoneNum">Phone Number:</label><br>
            <input type="text" id="phoneNum" name="phoneNum" value="${physiciansList[0].phoneNum}">
            </div><div class="input">
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" value="${physiciansList[0].email}">
            </div><div class="input">
            <label for="licenseNumber">License Number:</label><br>
            <input type="text" id="licenseNumber" name="licenseNumber" value="${physiciansList[0].licenseNumber}">
            </div><div class="input">
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" value="${physiciansList[0].password}">
            </div><div class="input">
            <label for="isAdmin">Admin:</label><br>
            <input type="checkbox" id="isAdmin" name="isAdmin" ${physiciansList[0]?.isAdmin ? "checked" : ""}>
            </div> 
            <input type="submit" value="UPDATE">
            </form>`;
        html.innerHTML = tempHtml;
    } catch (error) {
        console.error(error);
    }
}

async function renderUpdatePatient(html: HTMLDivElement) {
    try {
        let tempHtml = `<h2>Update Patient</h2>
        <form onsubmit="hundlePatientUpdateSubmit(event)">
        <div class="input">
        <label for="id">Select patient</label><br>
        <select id="id" name="id" onchange="loadPatientDetails()">
        `;
        const response = await fetch("/API/patient/get-patients");
        const data = await response.json();
        const patientsList: Patient[] = data.patient;
        debugger;
        patientsList.forEach(patient => {
            tempHtml += `<option value="${patient._id}"> ${patient.firstName} ${patient.lastName}</option>`;
        });
        tempHtml += `</select>
            </div>
            <div class="input">
            <label for="firstName">First Name:</label><br>
            <input type="text" id="firstName" name="firstName" value="${patientsList[0].firstName}">
            </div><div class="input">
            <label for="lastName">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName" value="${patientsList[0].lastName}">
            </div> <div class="input">
            <label for="age">Age:</label><br>
            <input type="number" id="age" name="age" value="${patientsList[0].age}">
            </div> <div class="input">
            <label for="phoneNum">Phone Number:</label><br>
            <input type="text" id="phoneNum" name="phoneNum" value="${patientsList[0].phoneNum}">
            </div><div class="input">
            <label for="weight">Weight:</label><br>
            <input type="number" id="weight" name="weight" value="${patientsList[0].weight}">
            </div><div class="input">
            <label for="height">Height:</label><br>
            <input type="number" id="height" name="height" value="${patientsList[0].height}">
            </div><div class="input">
            <label for="smoking">Smoking:</label><br>
            <input type="checkbox" id="smoking" name="smoking" ${patientsList[0].smoking ? "checked" : ""}>
            </div><div class="input">
            <label for="address">Address:</label><br>
            <input type="text" id="address" name="address" value="${patientsList[0].address}">
            </div><div class="input">
            <label for="physicianId">Select physician</label><br>
            <select id="physicianId" name="physicianId">
            `;
        const responsePhysician = await fetch("/API/physician/get-physicians");
        const dataPhysician = await responsePhysician.json();
        const physiciansList: Physician[] = dataPhysician.physician;
        physiciansList.forEach(physician => {
            tempHtml += `<option value="${physician._id}"> Dr. ${physician.firstName} ${physician.lastName}</option>`;
        });
        tempHtml += `</select>
            </div>
            <input type="submit" value="UPDATE">
        </form>`;
        html.innerHTML = tempHtml;
    } catch (error) {
        console.error(error);
    }
}

async function renderUpdateMedicine(html: HTMLDivElement) {
    try {
        let tempHtml = `<h2>Update Medicine</h2>
        <form onsubmit="hundleMedicineUpdateSubmit(event)">
        <div class="input">
        <label for="id">Select medicine</label><br>
        <select id="id" name="id" onchange="loadMedicineDetails()">
        `;
        const response = await fetch("/API/medicine/get-medicines");
        const data = await response.json();
        const medicinesList: Medicine[] = data.medicines;
        medicinesList.forEach(medicine => {
            tempHtml += `<option value="${medicine._id}"> ${medicine.name}</option>`;
        });
        tempHtml += `</select>
            </div>
            <div class="input">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" value="${medicinesList[0].name}">
            </div><div class="input">
            <label for="dosagePerDay">Dosage Per Day:</label><br>
            <input type="number" id="dosagePerDay" name="dosagePerDay" value="${medicinesList[0].dosagePerDay}">
            </div> <div class="input">
            <label for="maxDuration">Max Duration:</label><br>
            <input type="number" id="maxDuration" name="maxDuration" value="${medicinesList[0].maxDuration}">
            </div>
            <input type="submit" value="UPDATE">
        </form>`;
        html.innerHTML = tempHtml;
    } catch (error) {
        console.error(error);
    }
}

async function renderVisitsList(html: HTMLDivElement) {
    try {
        const response = await fetch("/API/visit/get-visits");
        const data = await response.json();
        const visitsList: Visit[] = data.visits;
        let tempHtml = `<h2>Visits List</h2>
        <table>
        <tr>
        <th>Date</th>
        <th>Patient Name</th>
        <th>Physician Name</th>
        <th>summary</th>
        <th>prescription</th>
        </tr>`;
        const promise = visitsList.map(async (visit) => {
            const formattedDate = getTimeFormated(new Date(visit.date));
            const checkPrescription = await checkPrescriptionExist(visit.patient, visit.date);
            debugger;
            tempHtml += `<tr>
            <td>${formattedDate}</td>
            <td>${visit.patient.firstName} ${visit.patient.lastName}</td>
            <td>Dr. ${visit.physician.firstName} ${visit.physician.lastName}</td>
            <td><button onclick="hundleSummary('${visit._id}')">Open Summary</button></td>
            <td><button onclick="hundlePrescription('${!checkPrescription ? 'disabled' : checkPrescription}')" ${!checkPrescription ? 'disabled' : ""}>Open Prescription</button></td>
            </tr>`;
        });
        await Promise.all(promise);

        tempHtml += `</table>`;
        html.innerHTML = tempHtml;
    } catch (error) {
        console.error(error);
    }
}

async function getMedicinesList() {
    try {
        const response = await fetch("/API/medicine/get-medicines");
        const data = await response.json();
        const medicinesList: Medicine[] = data.medicines;
        return medicinesList;
    } catch (error) {
        console.error(error);
    }
}

async function loadMedicineDetails() {
    try {
        const id = document.querySelector<HTMLInputElement>("#id").value;
        const response = await fetch(`/API/medicine/get-medicines`);
        const data = await response.json();
        const medicine: Medicine = data.medicines.find(medicine => medicine._id === id);
        const idInput = document.querySelector<HTMLInputElement>("#id");
        const nameInput = document.querySelector<HTMLInputElement>("#name");
        const dosagePerDayInput = document.querySelector<HTMLInputElement>("#dosagePerDay");
        const maxDurationInput = document.querySelector<HTMLInputElement>("#maxDuration");
        nameInput.value = medicine.name;
        dosagePerDayInput.value = medicine.dosagePerDay.toString();
        maxDurationInput.value = medicine.maxDuration.toString();
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

async function getPatientsList() {
    try {
        const response = await fetch("/API/patient/get-patients");
        const data = await response.json();
        const patientsList: Patient[] = data.patients;
        return patientsList;
    } catch (error) {
        console.error(error);
    }
}

async function loadDetails() {
    try {
        const id = document.querySelector<HTMLInputElement>("#id").value;
        const response = await fetch(`/API/physician/get-physicians?_id=${id}`);
        const data = await response.json();
        const physician: Physician = data.physician;
        const idInput = document.querySelector<HTMLInputElement>("#id");
        const firstNameInput = document.querySelector<HTMLInputElement>("#firstName");
        const lastNameInput = document.querySelector<HTMLInputElement>("#lastName");
        const ageInput = document.querySelector<HTMLInputElement>("#age");
        const phoneNumInput = document.querySelector<HTMLInputElement>("#phoneNum");
        const emailInput = document.querySelector<HTMLInputElement>("#email");
        const licenseNumberInput = document.querySelector<HTMLInputElement>("#licenseNumber");
        const passwordInput = document.querySelector<HTMLInputElement>("#password");
        const isAdminCheckbox = document.querySelector<HTMLInputElement>("#isAdmin");
        firstNameInput.value = physician.firstName;
        lastNameInput.value = physician.lastName;
        ageInput.value = physician.age.toString();
        phoneNumInput.value = physician.phoneNum;
        emailInput.value = physician.email;
        licenseNumberInput.value = physician.licenseNumber;
        passwordInput.value = physician.password;
        isAdminCheckbox.checked = physician.isAdmin;
    } catch (error) {
        console.error(error);
    }
}

async function loadPatientDetails() {
    try {
        const id = document.querySelector<HTMLInputElement>("#id").value;
        const response = await fetch(`/API/patient/get-patients?patientId=${id}`);
        const data = await response.json();
        const patient: Patient = data.patient;
        const idInput = document.querySelector<HTMLInputElement>("#id");
        const firstNameInput = document.querySelector<HTMLInputElement>("#firstName");
        const lastNameInput = document.querySelector<HTMLInputElement>("#lastName");
        const ageInput = document.querySelector<HTMLInputElement>("#age");
        const phoneNumInput = document.querySelector<HTMLInputElement>("#phoneNum");
        const weightInput = document.querySelector<HTMLInputElement>("#weight");
        const heightInput = document.querySelector<HTMLInputElement>("#height");
        const smokingCheckbox = document.querySelector<HTMLInputElement>("#smoking");
        const addressInput = document.querySelector<HTMLInputElement>("#address");
        const physicianIdInput = document.querySelector<HTMLInputElement>("#physicianId");
        firstNameInput.value = patient.firstName;
        lastNameInput.value = patient.lastName;
        ageInput.value = patient.age.toString();
        phoneNumInput.value = patient.phoneNum;
        weightInput.value = patient.weight.toString();
        heightInput.value = patient.height.toString();
        smokingCheckbox.checked = patient.smoking;
        addressInput.value = patient.address;
        physicianIdInput.value = patient.physicianId;
    } catch (error) {
        console.error(error);
    }
}

async function checkPrescriptionExist(patientId, date) {
    try {
        const response = await fetch(`/API/prescription/get-prescriptions?patientId=${patientId}&date=${date}`);
        const data = await response.json();
        const prescriptions = data.prescriptions;
        const prescriptionExist = prescriptions.find(prescription => prescription.patient === patientId && prescription.date === date);
        return prescriptionExist ? prescriptionExist._id : false;
    } catch (error) {
        console.error(error);
    }
}
