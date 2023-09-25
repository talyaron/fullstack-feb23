const phyId = getEmailFromQuery();
const patId = getPatientIdFromQuery();
renderPatientHistory(patId, document.querySelector("#root"));

async function renderPatientHistory(pId, root) {
    try {
        if (!pId) throw new Error("No patient id");
        if (!root) throw new Error("No root");
        const response = await fetch(`/API/visit/get-visits?_id=${pId}`)
        const result = await response.json();
        debugger;
        const visits = result.visits;
        const medicines: Medicine[] = await getMedicinesDB();
        let html = `<h1>${visits[0].patient.firstName} ${visits[0].patient.lastName}<br>ID: ${visits[0].patient.patientId}</h1>
        <div id="visits">
        <h2>Visits</h2>
        <table>
        <tr>
        <th>Date</th>
        <th>Summary</th>
        </tr>`;
        visits.forEach(visit => {
            html += `<tr>
            <td>${getTimeFormated(new Date(visit.date))}</td>
            <td>${visit.summary}</td>
            </tr>`
        });
        html += `</table>
        </div>`;

        html += `<div id="prescriptions">
        <h2>Prescriptions</h2>
        <table>
        <tr>
        <th>Date</th>
        <th>Medicine</th>
        </tr>`;
        const responsePrescriptions = await fetch(`/API/prescription/get-prescriptions?_id=${pId}`);
        const resultPrescriptions = await responsePrescriptions.json();
        const prescriptions = resultPrescriptions.prescriptions;
        debugger;
        const htmlRows = prescriptions.map((prescription) => {
            const medName = prescription.medicine.name;
            const formattedDate = getTimeFormated(new Date(prescription.date));

            return `<tr>
                <td>${formattedDate}</td>
                <td>${medName}</td>
            </tr>`;
        });

        html += htmlRows.join('');

        html += `</table>
        <br><br>
        </div>
        <button onclick="goBack()">Back</button>`

        root.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

function goBack() {
    try {
        window.close();
        window.location.href = `physician.html?physicianId=${phyId}`;
    } catch (error) {
        console.error(error);
    }
}

