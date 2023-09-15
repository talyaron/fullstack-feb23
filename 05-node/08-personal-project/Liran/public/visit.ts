const patientID = getPatientIdFromQuery();
const physicianEmail2 = getEmailFromQuery();
const patientData = getPatientData(patientID)
    .then(patient => {
        renderVisitForm(patient, document.querySelector("#root"))
    });

function renderVisitForm(patient, root: HTMLDivElement) {
    try {
        debugger;
        if (!patient) throw new Error("Patient not found");
        if (!root) throw new Error("Root not found");
        let html = `<div id="forms">
        <form onsubmit="submitVisitForm(event)"> 
        <div>
            <label>Date:</label>
            <input type="date" id="visit-date" name="visit-date" value="${new Date().toISOString().split("T")[0]}" readonly></div>
            <div><label>First Name:</label>
            <input type="text" id="visit-first-name" name="visit-first-name" value="${patient.firstName}" readonly></div>
            <div><label>Last Name:</label>
            <input type="text" id="visit-last-name" name="visit-last-name" value="${patient.lastName}" readonly></div>
            <div><label>Age:</label>
            <input type="number" id="visit-age" name="visit-age" value="${patient.age}" readonly></div>
            <div><label>Phone Number:</label>
            <input type="tel" id="visit-phone-number" name="visit-phone-number" value="${patient.phoneNum}" readonly></div>
            <div><label>Weight:</label>
            <input type="number" id="visit-weight" name="visit-weight" value="${patient.weight}" readonly></div>
            <div><label>Height:</label>
            <input type="number" id="visit-height" name="visit-height" value="${patient.height}" readonly></div>
            <div><label>Smoking:</label>
            <input type="checkbox" id="visit-smoking" name="visit-smoking" value="${patient.smoking}" disabled></div>
            <div><label>Visit Summary:</label>
            <textarea id="visit-description" name="visit-description" rows="14" cols="50" required></textarea></div>
            <div><button type="button" onclick="writePrescription(${patient.patientId})">Write Prescription</button></div>
            <div><button type="button">History</button></div>
            <div><button type="submit">Close Visit</button></div>
        </form></div>
        <button onclick="window.location.href = 'physician.html?physicianEmail=${physicianEmail2}'">Back</button>`

        root.innerHTML += html;
    } catch (error) {
        console.error(error);
    }
}

async function writePrescription(patientId) {
    try {
        const popupURL =`prescription.html?patientId=${patientId}&physicianEmail=${physicianEmail2}`; // Replace with the actual URL of your popup page
        // Define the size and position of the popup window
        const popupWidth = 400;
        const popupHeight = 300;
        const left = (window.innerWidth - popupWidth) / 2;
        const top = (window.innerHeight - popupHeight) / 2;

        // Open the popup window
        const popupWindow = window.open(popupURL, "PopupWindow", `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`);

        // Focus the popup window (optional)
        if (popupWindow) {
            popupWindow.focus();
        }
    } catch (error) {
        console.error(error);
    }
}


async function getPatientData(patientId:) {
    try {
        const id = await patientId;
        const response = await fetch(`/api/patient/get-patients`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        const result = await response.json();
        const patients: Patient[] = result.patients;
        debugger;
        const patient = patients.find(patient => patient.patientId === id);
        debugger;
        return patient;
    } catch (error) {
        console.error(error);
    }
}
