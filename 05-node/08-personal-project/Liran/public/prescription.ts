
debugger;
const pEmail = getEmailFromQuery();
const physician = getPhysicianDB().then(physician => {
    console.log(physician);
});
const pId = getPatientIdFromQuery();
const patient = getPatientDB().then(patient => {
    console.log(patient);
});
const medicines = getMedicinesDB().then(medicines => {
    renderForm(medicines, document.querySelector("#root"));
});


async function getPhysicianDB() {
    try {
        const response = await fetch(`/API/physician/get-physicians`);
        const result = await response.json();
        const physician = result.physicians.find(physician => physician.email === pEmail);
        if (!physician) throw new Error("Physician not found");
        return physician;
    } catch (error) {
        console.error(error);
    }
}

async function getPatientDB() {
    try {
        const response = await fetch(`/API/patient/get-patients`);
        const result = await response.json();
        debugger;
        const patient = result.patients.find(patient => patient.patientId === pId);
        if (!patient) throw new Error("Patient not found");
        return patient;
    } catch (error) {
        console.error(error);
    }
}


async function renderForm(medicines, root) {
    try {
        if (!medicines) throw new Error("No medicines");
        if (!root) throw new Error("No root");
        let html = `<form id="prescription-form" onsubmit="hundlePrescriptionSubmit(event)">
        <div><label>Date</label>
        <input type="date" id="date" value="${new Date().toISOString().slice(0, 10)}" readonly></div>
        <div>
        <label>Medicine</label>
        <select id="medicine-select" onchange="loadMedicineInfo()">`;
        medicines.forEach(medicine => {
            html += `<option value="${medicine._id}">${medicine.name}</option>`
        });
        html += `</select>
        </div>
        <div><label>Dosage Per Day</label>
        <input type="number" id="dosage-per-day" value="${medicines[0].dosagePerDay}" readonly></div>
        <div><label>Duration</label>
        <input type="number" id="duration" value="${medicines[0].maxDuration}" readonly></div>
        <input type="submit" value="Save Prescription"></button>
        </form>`

        root.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

async function hundlePrescriptionSubmit(event) {
    try {
        debugger;
        event.preventDefault();
        const medicineId = document.querySelector<HTMLInputElement>("#medicine-select").value;
        const response = await fetch(`/API/medicine/get-medicines`);
        const result = await response.json();
        const medicine = result.medicines.find(medicine => medicine._id === medicineId);
        if (!patient) throw new Error("Patient not found");
        const date = getTimeFormated(new Date());
        addNewPrescription(medicine, date);
    } catch (error) {
        console.error(error);
    }
}

function getTimeFormated(date) {
    try {
        if (!date) throw new Error("No date");
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const formattedDateAsDate = new Date(formattedDate);
        return formattedDateAsDate;
    } catch (error) {
        console.error(error);
    }
}


async function addNewPrescription(medicine, date) {
    try {
        const response = await fetch(`/API/prescription/add-prescription`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ date: date, patient: patient, medicine: medicine, physician: physician }),
        });
        const result = await response.json();
        if (result.error) throw new Error(result.error);
        alert("Prescription added successfully");
        window.location.href = `/physician.html?email=${pEmail}&id=${pId}`;
    } catch (error) {
        console.error(error);
    }
}

async function loadMedicineInfo() {
    try {
        const medicineId = document.querySelector<HTMLInputElement>("#medicine-select").value;
        const response = await fetch(`/API/medicine/get-medicines`);
        const result = await response.json();
        const medicine = result.medicines.find(medicine => medicine._id === medicineId);
        const dosagePerDay = document.querySelector<HTMLInputElement>("#dosage-per-day");
        const duration = document.querySelector<HTMLInputElement>("#duration");
        debugger;
        dosagePerDay.value = medicine.dosagePerDay;
        duration.value = medicine.maxDuration;
    } catch (error) {
        console.error(error);
    }
}


async function getMedicinesDB() {
    try {
        const response = await fetch(`/API/medicine/get-medicines`);
        const result = await response.json();
        const medicines = result.medicines;
        console.log(medicines);
        return medicines;
    } catch (error) {
        console.error(error);
    }
}
