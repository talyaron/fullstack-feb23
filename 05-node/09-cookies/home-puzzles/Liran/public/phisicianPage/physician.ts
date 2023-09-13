let physicianEmail: string;
const currPhysicianLogged = hundleGetUserLogged().then(currPhysicianLogged => {
    if (currPhysicianLogged === undefined) {
        currPhysicianLogged = getEmailFromQuery();
    }
    else {
        currPhysicianLogged = currPhysicianLogged;
        debugger;
        physicianEmail = currPhysicianLogged.email;
        renderPhysicianPage();
    }
});

async function hundleGetUserLogged() {
    try {
        const response = await fetch("/API/physician/get-user");
        const data = await response.json();
        debugger;
        const physician = data.physician;
        return physician;
    } catch (error) {
        console.error(error);
    }
}

async function hundlePatientUpdate(event) {
    try {
        event.preventDefault();

        const id = event.target.id.value;
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const age = event.target.age.valueAsNumber;
        const phoneNum = event.target.phoneNum.value;
        const weight = event.target.weight.value;
        const height = event.target.height.value;
        const smoking = event.target.smoking.checked ? true : false;
        const address = event.target.address.value;
        const physicianId = event.target.physicianId.value;
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

        window.location.href = `physician.html?physicianEmail=${physicianEmail}`;
    } catch (error) {
        console.error(error);
    }
}


async function renderPhysicianPage() {
    try {
        const response = await fetch(`/API/physician/get-physicians?email=${physicianEmail}`);
        const data = await response.json();
        debugger;
        const physician = data.physician;
        console.log(data)
        renderWelcomeP(physician.lastName, document.querySelector("#root"));
        renderPhysicianActions(document.querySelector("#header"));
    } catch (error) {
        console.error(error);
    }
}

function renderWelcomeP(lastName, root: HTMLDivElement) {
    try {

        root.innerHTML = `<div id = "header">
        <h1>Welcome Dr. ${lastName}</h1>
        </div>
        <div id="forms"></div>`;
    } catch (error) {
        console.error(error);
    }
}
function renderPhysicianActions(html: HTMLElement) {
    try {
        html.innerHTML += `<div id="physicianActions">
        <button onclick="loadPatients()">Patients</button>
        <button onclick="loadMedicines()">Medicines</button>
        <button onclick="loadPrescriptions()">Prescriptions</button>
        <button onclick="updatePatientP()">Update Patient</button>
        <button onclick=viewVisits()>View Visits</button>
        <button onclick="logout()">Logout</button>
        </div>
        `;
    } catch (error) {
        console.error(error);
    }
}

async function renderVisits(visits: Visit[]) {
    try {
        const root = document.querySelector("#forms");
        root.innerHTML = "";
        root.innerHTML += `<div id="visits">
        <h2>Visits</h2>
        <table>
        <tr>
        <th>Physician</th>
        <th>Patient</th>
        <th>Date</th>
        <th>Summary</th>
        </tr>
        </table>
        </div>`;
        const table = document.querySelector("table");
        const promises = visits.map(async (visit) => {
            const responseP = await fetch(`/API/physician/get-physicians?email=${physicianEmail}`);
            const dataP = await responseP.json();
            const physicianName = `Dr. ${dataP.physician.firstName} ${dataP.physician.lastName}`;
            const patientName = visit.patient.firstName + " " + visit.patient.lastName;
            debugger;

            table.innerHTML += `<tr>
            <td>${physicianName}</td>
            <td>${patientName}</td>
            <td>${formatDate(visit.date)}</td>
            <td>${visit.summary}</td>
            </tr>`;
        });

        await Promise.all(promises);
    } catch (error) {
        console.error(error);
    }
}

async function renderPrescriptions(prescriptions: Prescription[]) {
    try {
        debugger;
        const root = document.querySelector("#forms");
        root.innerHTML = "";
        root.innerHTML += `<div id="prescriptions">
        <h2>Prescriptions</h2>
        <table>
        <tr>
        <th>Physician</th>
        <th>Patient</th>
        <th>Medicine</th>
        <th>Supply Date</th>
        </tr>
        </table>
        </div>`;
        const table = document.querySelector("table");
        const promises = prescriptions.map(async (prescription) => {
            const physicianName = await getPhysicianName(physicianEmail);
            const patientName = await getPatientName(prescription.patient._id);
            debugger;
            table.innerHTML += `<tr>
            <td>Dr. ${physicianName}</td>
            <td>${patientName}</td>
            <td>${prescription.medicine.name}</td>
            <td>${formatDate(prescription.date)}</td>
            </tr>`;
        });

        await Promise.all(promises);
    } catch (error) {
        console.error(error);
    }
}

async function renderUpdatePatientP(physicianId: string, html: HTMLDivElement) {
    try {
        const response = await fetch(`/API/patient/get-patients?physicianId=${physicianId}`);
        const data = await response.json();
        const patients = data.patients;
        debugger;
        let tempHtml = `<h2>Update Patient</h2>
        <form onsubmit="hundlePatientUpdate(event)">
        <div class="input">
        <label for="id">Select patient</label><br>
        <select id="id" name="id" onchange="loadPatientInfo()">
        `;
        // const responseP = await fetch(`/API/physician/get-physicians?email=${physicianEmail}`);
        // const dataP = await responseP.json();
        // const physicianID = dataP.physicians._id;
        // const response = await fetch("/API/patient/get-patients");
        // const data = await response.json();
        // const patientsList = data.patients.filter(patient => patient.physicianId === physicianID);
        debugger;
        patients.forEach(patient => {
            tempHtml += `<option value="${patient._id}"> ${patient.firstName} ${patient.lastName}</option>`;
        });
        tempHtml += `</select>
            </div>
            <div class="input">
            <label for="firstName">First Name:</label><br>
            <input type="text" id="firstName" name="firstName" value="${patients[0].firstName}">
            </div><div class="input">
            <label for="lastName">Last Name:</label><br>
            <input type="text" id="lastName" name="lastName" value="${patients[0].lastName}">
            </div> <div class="input">
            <label for="age">Age:</label><br>
            <input type="number" id="age" name="age" value="${patients[0].age}">
            </div> <div class="input">
            <label for="phoneNum">Phone Number:</label><br>
            <input type="text" id="phoneNum" name="phoneNum" value="${patients[0].phoneNum}">
            </div><div class="input">
            <label for="weight">Weight:</label><br>
            <input type="number" id="weight" name="weight" value="${patients[0].weight}"> 
            </div><div class="input">
            <label for="height">Height:</label><br>
            <input type="number" id="height" name="height" value="${patients[0].height}">
            </div><div class="input">
            <label for="smoking">Smoking:</label><br>
            <input type="checkbox" id="smoking" name="smoking" value="${patients[0].smoking}">
            </div><div class="input">
            <label for="address">Address:</label><br>
            <input type="text" id="address" name="address" value="${patients[0].address}">
            <div><label for="physicianId">Physician ID:</label><br>
            <input type="text" id="physicianId" name="physicianId" value="${physicianId}" readonly>
            </div>
            </div>`;
        tempHtml += `<input type="submit" value="UPDATE">
        </form>`;
        html.innerHTML = tempHtml;
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
     <th>ID</th>
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
         <td>${patient.patientId}</td>
         <td>${patient.age}</td>
         <td>${patient.phoneNum}</td>
         <td>${patient.weight}</td>
         <td>${patient.height}</td>
         <td>${patient.smoking ? "Yes" : "No"}</td>
         <td>${patient.address}</td>
         <td><button onclick="StartVisit('${patient._id}')">Open Visit</button></td>
         </tr>`;
        });
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

function formatDate(date: Date) {

    const dateNew = new Date(date);
    const day = String(dateNew.getDate()).padStart(2, '0'); // Ensure two digits for day
    const month = String(dateNew.getMonth() + 1).padStart(2, '0'); // Ensure two digits for month (January is 0-based)
    const year = dateNew.getFullYear();

    return `${day}-${month}-${year}`;
}

async function updatePatientP() {
    try {
        const responseP = await fetch(`/API/physician/get-physicians?email=${physicianEmail}`);
        const dataP = await responseP.json();
        const physicianID = dataP.physician._id;
        debugger;
        renderUpdatePatientP(physicianID, document.querySelector("#forms"));
    } catch (error) {
        console.error(error);
    }
}

async function loadPrescriptions() {
    try {
        const response = await fetch(`/API/prescription/get-prescriptions?email=${physicianEmail}`);
        const data = await response.json();
        console.log(data);
        const prescriptions = data.prescriptions;
        renderPrescriptions(prescriptions);
    } catch (error) {
        console.error(error);
    }
}


async function viewVisits() {
    try {
        const responseP = await fetch(`/API/physician/get-physicians?email=${physicianEmail}`);
        const dataP = await responseP.json();
        const physicianID = dataP.physician._id;
        const response = await fetch(`/API/visit/get-visits?physicianId=${physicianID}`);
        const data = await response.json();
        const visits = data.visits;
        console.log(visits);
        renderVisits(visits);
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

async function loadPatients() {
    try {
        const responseP = await fetch(`/API/physician/get-physicians?email=${physicianEmail}`);
        const dataP = await responseP.json();
        const physicianId = dataP.physician._id;
        debugger;
        const response = await fetch(`/API/patient/get-patients?physicianId=${physicianId}`);
        const data = await response.json();
        const patients = data.patients;
        debugger;
        renderPatients(patients);
    } catch (error) {
        console.error(error);
    }
}


async function StartVisit(_id: string) {
    try {
        console.log(_id);
        window.location.href = `../visitPage/visit.html?_id=${_id}&email=${physicianEmail}`;
    } catch (error) {
        console.error(error);
    }
}

async function loadMedicines() {
    try {
        const response = await fetch("/API/medicine/get-medicines");
        const data = await response.json();
        debugger;
        console.log(data);
        renderMedicines(data.medicines);
    } catch (error) {
        console.error(error);
    }
}

function logout() {
    window.location.href = `../index.html`;
}