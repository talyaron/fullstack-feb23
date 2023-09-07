
debugger;
const pEmail = getEmailFromQuery();
let physicianId;
const physician = getPhysicianDB(pEmail).then(physician => {
    console.log(physician);
    physicianId = physician._id;
});
const pId = getPatientIdFromQuery();
const patient = getPatientDB(pId).then(patient => {
    console.log(patient);
});
const medicines = getMedicinesDB().then(medicines => {
    renderForm(medicines, document.querySelector("#root"));
});




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
        // const response = await fetch(`/API/medicine/get-medicines`);
        // const result = await response.json();
        // const medicine = result.medicines.find(medicine => medicine._id === medicineId);
        if (!patient) throw new Error("Patient not found");
        const date = getTimeFormated(new Date());
        addNewPrescription(medicineId, date, pId, physicianId);
    } catch (error) {
        console.error(error);
    }
}


async function addNewPrescription(medicine, date, patient, physician) {
    try {
        const response = await fetch(`/API/prescription/add-prescription`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ date: date, patient: patient, medicine: medicine, physician: physician}),
        });
        const result = await response.json();
        if (result.error) throw new Error(result.error);
        alert("Prescription added successfully");
        window.close();
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
