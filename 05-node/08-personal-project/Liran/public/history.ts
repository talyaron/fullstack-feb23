const phyId = getEmailFromQuery();
const patId = getPatientIdFromQuery();
renderPatientHistory(patId, document.querySelector("#root"));

async function renderPatientHistory(pId, root) {
    try {
        if (!pId) throw new Error("No patient id");
        if (!root) throw new Error("No root");
        const patient = await getPatientDB(pId);
        const visits = await getVisitsDB(pId);
        let html = `<h1>${patient.firstName} ${patient.lastName} ${patient.patientId}</h1>
        <h2>Visits</h2>
        <table>
        <tr>
        <th>Date</th>
        <th>Summary</th>
        </tr>`;
        debugger;
        visits.forEach(visit => { 
            html += `<tr>
            <td>${getTimeFormated(visit.date.toString())}</td>
            <td>${visit.summary}</td>
            </tr>`
        });
        html += `</table>`;

        html += `<br><br>
        <h2>Prescriptions</h2>`
        const prescriptions = await getPrescriptionsDB(pId);
        prescriptions.forEach(prescription => {
            html += `<div class="prescription">
            <div><label>Date</label><span>${prescription.date}</span></div>
            <div><label>Medicine</label><span>${prescription.medicine}</span></div>
            </div>`
        });

        html += `<br><br>
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

