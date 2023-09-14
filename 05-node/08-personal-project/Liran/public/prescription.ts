
const pEmail = getEmailFromQuery();
const pId = getPatientIdFromQuery();

const medicines = getMedicinesDB().then(medicines => {
    renderForm(medicines, document.querySelector("#root"));
});

async function renderForm(medicines, root) { 
    try {
        if (!medicines) throw new Error("No medicines");
        if (!root) throw new Error("No root");
        let html = `<form id="prescription-form"><div>
        <label>Medicine</label>
        <select id="medicine-select" onchange="loadMedicineInfo()">`;
        medicines.forEach(medicine => {
            html += `<option value="${medicine._id}">${medicine.name}</option>`
        });
        html += `</select>
        </div>
        <div><label>Dosage Per Day</label>
        <input type="number" value="${medicines[0].dosagePerDay}" readonly></div>
        <div><label>Duration</label>
        <input type="number" value="${medicines[0].maxDuration}" readonly></div>
        <button type="submit">Submit</button>
        </form>`

        root.innerHTML = html;
        
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
        dosagePerDay.value = medicine.dosagePerDay.toString();
        duration.value = medicine.duration.toString();
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
