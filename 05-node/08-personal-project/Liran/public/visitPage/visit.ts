const patientID = getPatientIdFromQuery();
const physicianE = getEmailFromQuery();
const phys = getPhysicianDB(physicianE);
let physId;
const currPatient = getPatientDB(patientID).then(patient => {
    physId = patient.physicianId;
    renderVisitForm(patient, document.querySelector("#root"));
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
            <div><button type="button" onclick="writePrescription('${patient._id}')">Write Prescription</button></div>
            <div><button type="button" onclick="hundleLoadHistory()">History</button></div>
            <div><button onclick="hundleCloseVisit(event)">Close Visit</button></div>
        </form></div>
        <button onclick="window.location.href = '../phisicianPage/physician.html?physicianEmail=${physicianE}'">Back</button>`

        root.innerHTML += html;
    } catch (error) {
        console.error(error);
    }
}

async function hundleLoadHistory() {
    try {
        const response = await fetch(`/API/visit/get-visits`);
        const result = await response.json();
        const visits = result.visits.filter(visit => visit.patient === patientID);
        renderHistoryPopUp();
    } catch (error) {
        console.error(error);
    }
}

function renderHistoryPopUp() {
    try {
        const popupURL = `../historyPage/history.html?_id=${patientID}&physicianEmail=${physicianE}`; // Replace with the actual URL of your popup page
        // Define the size and position of the popup window
        const popupWidth = 500;
        const popupHeight = 600;
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





function hundleCloseVisit(ev) {
    try {
        ev.preventDefault();
        const summary = document.querySelector<HTMLInputElement>("#visit-description").value;
        if (!summary) {
            alert("Please fill the summary");
            throw new Error("Please fill the summary");
        }
        submitVisitForm(summary);
    } catch (error) {
        console.error(error);
    }
}

async function submitVisitForm(summary) {
    try {
        const date = getTimeFormated(new Date());
        const visit = { date: date, patient: patientID, physician: physId, summary: summary };
        debugger;
        const response = await fetch(`/API/visit/add-visit`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(visit)
        });
        const result = await response.json();
        if (result.error) throw new Error(result.error);
        alert("Visit added successfully");
        window.location.href = `../phisicianPage/physician.html?physicianEmail=${physicianE}`;
    } catch (error) {
        console.error(error);
    }
}

async function writePrescription(patientId) {
    try {
        const popupURL = `../prescriptionPage/prescription.html?_id=${patientId}&physicianEmail=${physicianE}`; // Replace with the actual URL of your popup page
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


async function getPatientData(patientId) {
    try {
        const response = await fetch(`/api/patient/get-patients`)
        const result = await response.json();
        const patient = result.patients.find(patient => patient._id === patientId);
        debugger;
        return patient;
    } catch (error) {
        console.error(error);
    }
}
