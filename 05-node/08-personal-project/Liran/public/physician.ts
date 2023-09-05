// import { getEmailFromQuery } from "./admin";

const physicianEmail = getEmailFromQueryP();
renderPhisicianPage();

async function renderPhisicianPage() {
    try {
        const response = await fetch(`/API/physician/get-physicians?email=${physicianEmail}`);
        const data = await response.json();
        console.log(data)
        renderWelcomeP(data.physicians[0].lastName, document.querySelector("#root"));
        debugger;
        renderPhysicianActions(document.querySelector("#header"));
    } catch (error) {
        console.error(error);
    }
}

function renderWelcomeP(lastName, root: HTMLDivElement) {
    try {
        debugger;
        root.innerHTML = `<div id = "header">
        <h1>Welcome Dr. ${lastName}</h1>
        </div>
        <div id="forms"></div>`;
    } catch (error) {
        console.error(error);
    }
}


function getEmailFromQueryP() {
    try {
        const params = new URLSearchParams(window.location.search);
        return params.get("email");
    } catch (error) {
        console.error(error);
    }
}

function renderPhysicianActions(html: HTMLElement) {
    try {
        html.innerHTML += `<div id="physicianActions">
        <button id="addPatient" onclick="loadPatients()">Patient</button>
        <button id="addMedicine" onclick="loadMedicines()">Medicine</button>
        <button id="addPrescription" onclick="loadPrescriptions()">Prescription</button>
        <button id="updatePatient" onclick="updatePatientP()">Update Patient</button>
        <button id="logout" onclick="logout()">Logout</button>
        </div>
        `;
    } catch (error) {
        console.error(error);
    }
}

async function updatePatientP() {
    try {
        const response = await fetch("/API/patient/get-patients");
        const data = await response.json();
        const responseP = await fetch("/API/physician/get-physicians");
        const dataP = await responseP.json();
        const physicianID = dataP.physicians.find(physician => physician.email === physicianEmail)._id;
        const patientList = data.patients.filter(patient => patient.physicianId === physicianID);
        console.log(data);
        renderUpdatePatientP(patientList, document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

async function loadPatientInfo() {
    try {
        const id = document.querySelector<HTMLInputElement>("#id").value;
        const response = await fetch(`/API/patient/get-patients`);
        const data = await response.json();
        const patient: Patient = data.patients.find(patient => patient._id === id);
        const idInput = document.querySelector<HTMLInputElement>("#id");
        const firstNameInput = document.querySelector<HTMLInputElement>("#firstName");
        const lastNameInput = document.querySelector<HTMLInputElement>("#lastName");
        const ageInput = document.querySelector<HTMLInputElement>("#age");
        const phoneNumInput = document.querySelector<HTMLInputElement>("#phoneNum");
        const weightInput = document.querySelector<HTMLInputElement>("#weight");
        const heightInput = document.querySelector<HTMLInputElement>("#height");
        const smokingCheckbox = document.querySelector<HTMLInputElement>("#smoking");
        const addressInput = document.querySelector<HTMLInputElement>("#address");
        firstNameInput.value = patient.firstName;
        lastNameInput.value = patient.lastName;
        ageInput.value = patient.age.toString();
        phoneNumInput.value = patient.phoneNum;
        weightInput.value = patient.weight.toString();
        heightInput.value = patient.height.toString();
        smokingCheckbox.checked = patient.smoking;
        addressInput.value = patient.address;
    } catch (error) {
        console.error(error);
    }
}

async function renderUpdatePatientP(patients: Patient[], html: HTMLDivElement) {
    try {
        let tempHtml = `<h2>Update Patient</h2>
        <form onsubmit="hundlePatientUpdate(event)">
        <div class="input">
        <label for="id">Select patient</label><br>
        <select id="id" name="id" onchange="loadPatientInfo()">
        `;
        const responseP = await fetch("/API/physician/get-physicians");
        const dataP = await responseP.json();
        const physicianID = dataP.physicians.find(physician => physician.email === physicianEmail)._id;
        const response = await fetch("/API/patient/get-patients");
        const data = await response.json();
        const patientsList = data.patients.filter(patient => patient.physicianId === physicianID);
        patientsList.forEach(patient => {
            tempHtml += `<option value="${patient._id}"> ${patient.firstName} ${patient.lastName}</option>`;
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
            </div>`;
        tempHtml += `<input type="submit" value="UPDATE">
        </form>`;
        html.innerHTML = tempHtml;
    } catch (error) {
        console.error(error);
    }
}

async function hundlePatientUpdate(event) {
    try {
        event.preventDefault();
        debugger;
        const id = event.target.id.value;
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const age = event.target.age.valueAsNumber;
        const phoneNum = event.target.phoneNum.value;
        const weight = event.target.weight.value;
        const height = event.target.height.value;
        const smoking = event.target.smoking.checked ? true : false;
        const address = event.target.address.value;
        const physicianId = null;
        const response = await fetch(`/API/patient/update-patient`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, firstName, lastName, age, phoneNum, weight, height, smoking, address, physicianId })
        });
        const data = await response.json();
        console.log(data);
        alert("Patient updated successfully");
        window.location.href = `physician.html?email=${physicianEmail}`;
    } catch (error) {
        console.error(error);
    }
}

async function loadPatients() {
    try {
        const responseP = await fetch("/API/physician/get-physicians");
        const dataP = await responseP.json();
        const physicianID = dataP.physicians.find(physician => physician.email === physicianEmail)._id;
        const response = await fetch("/API/patient/get-patients");
        const data = await response.json();
        console.log(data);
        const patients: Patient[] = data.patients.filter(patient => patient.physicianId === physicianID);
        renderPatients(patients);
    } catch (error) {
        console.error(error);
    }
}

function renderPatients(patients: Patient[]) {
    try {
        const root = document.querySelector("#forms");
        root.innerHTML = "";
        root.innerHTML += `<h2>Patients</h2>
     <table>
     <tr>
     <th>First Name</th>
     <th>Last Name</th>
     <th>Age</th>
     <th>Phone Number</th>
     <th>Weight</th>
     <th>Height</th>
     <th>Smoking</th>
     <th>Address</th>
     <th>Visit</th>
     </tr>
     </table>`;
        const table = document.querySelector("table");
        patients.forEach(patient => {
            table.innerHTML += `<tr>
         <td>${patient.firstName}</td>
         <td>${patient.lastName}</td>
         <td>${patient.age}</td>
         <td>${patient.phoneNum}</td>
         <td>${patient.weight}</td>
         <td>${patient.height}</td>
         <td>${patient.smoking ? "Yes" : "No"}</td>
         <td>${patient.address}</td>
         <td><button onclick = "Open Visit(${patient._id})">Open Visit</button></td>
         </tr>`;
        });
    } catch (error) {
        console.error(error);
    }
}

async function loadMedicines() {
    try {
        const response = await fetch("/API/medicine/get-medicines");
        const data = await response.json();
        console.log(data);
        renderMedicines(data.medicines);
    } catch (error) {
        console.error(error);
    }
}

function renderMedicines(medicines: Medicine[]) {
    try {
        const root = document.querySelector("#forms");
        root.innerHTML = "";
        root.innerHTML += `<h2>Medicines</h2>
        <table>
        <tr>
        <th>Name</th>
        <th>Dosage Per Day</th>
        <th>Max Duration</th>
        </tr>
        </table>`;
        const table = document.querySelector("table");
        medicines.forEach(medicine => {
            table.innerHTML += `<tr>
            <td>${medicine.name}</td>
            <td>${medicine.dosagePerDay}</td>
            <td>${medicine.maxDuration}</td>
            </tr>`;
        });
    } catch (error) {
        console.error(error);
    }
}

// async function loadPrescriptions() {
//     try {
//         const response = await fetch("/API/prescription/get-prescriptions");
//         const data = await response.json();
//         console.log(data);
//         renderPrescriptions(data.prescriptions);
//     } catch (error) {
//         console.error(error);
//     }
// }

// function renderPrescriptions(prescriptions: Prescription[]) {
//     const root = document.querySelector("#forms");
//     root.innerHTML = "";
//     root.innerHTML += `<div id="prescriptions">
//     <h2>Prescriptions</h2>
//     <table>
//     <tr>
//     <th>Physician Id</th>
//     <th>Patient Id</th>
//     <th>Medicine Id</th>
//     <th>Start Date</th>
//     <th>End Date</th>
//     </tr>
//     </table>
//     </div>`;
//     const table = document.querySelector("table");
//     prescriptions.forEach(prescription => {
//         table.innerHTML += `<tr>
//         <td>${prescription.physicianId}</td>
//         <td>${prescription.patientId}</td>
//         <td>${prescription.medicineId}</td>
//         <td>${prescription.startDate}</td>
//         <td>${prescription.endDate}</td>
//         </tr>`;
//     });
// }

function logout() {
    window.location.href = `index.html`;
}