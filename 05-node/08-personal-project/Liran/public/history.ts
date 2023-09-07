const phyId = getEmailFromQuery();
const patId = getPatientIdFromQuery();
renderPatientHistory(patId, document.querySelector("#root"));

async function renderPatientHistory(pId, root) {
    try {
        if (!pId) throw new Error("No patient id");
        if (!root) throw new Error("No root");
        const patient = await getPatientDB(pId);
        const visits = await getVisitsDB(pId);
        const medicines: Medicine[] = await getMedicinesDB();
        let html = `<h1>${patient.firstName} ${patient.lastName}<br>ID: ${patient.patientId}</h1>
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
        const prescriptions = await getPrescriptionsDB(pId);
        debugger;
        // prescriptions.forEach(async prescription => {
        //     const medName = await getMedicineName(prescription.medicine);
        //     const formattedDate = getTimeFormated(new Date(prescription.date)).toISOString().split("T")[0];
        //     html += `<tr>
        //             <td>${formattedDate}</td>
        //             <td>${medName}</td>
        //         </tr>`;
        // });
        const promises = prescriptions.map(async (prescription) => {
            const medName = await getMedicineName(prescription.medicine);
            const formattedDate = getTimeFormated(new Date(prescription.date));

            html += `<tr>
                <td>${formattedDate}</td>
                <td>${medName}</td>
            </tr>`;
        });

        await Promise.all(promises);

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

