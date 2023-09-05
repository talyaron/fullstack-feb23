
const physicianEmail = getEmailFromQuery();
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
        root.innerHTML += `<div id = "header">
        <h1>Welcome Dr. ${lastName}</h1>
        </div>
        <div id="forms"></div>`;
    } catch (error) {
        console.error(error);
    }
}


function getEmailFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get("email");
}
function renderPhysicianActions(html: HTMLElement) {
    html.innerHTML += `<div id="physicianActions">
    <button id="addPatient" onclick="loadPatients()">Patient</button>
    <button id="addMedicine" onclick="loadMedicines()">Medicine</button>
    <button id="addPrescription" onclick="loadPrescriptions()">Prescription</button>
    <button id="logout" onclick="logout()">Logout</button>
    </div>
    `;
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
    <th>Physician Id</th>
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
        <td>${patient.smoking}</td>
        <td>${patient.address}</td>
        <td>${patient.physicianId}</td>
        </tr>`;
    });
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