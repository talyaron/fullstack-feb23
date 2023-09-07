const prescriptionIdFromQuery = new URLSearchParams(window.location.search).get('prescriptionId');
const currPrescription = getPrescriptionFromDB(prescriptionIdFromQuery).then((prescription) => {
    renderPrescription(prescription, document.querySelector('#root'));
});

async function renderPrescription(prescription, root) { 
    try {
        if (!prescription) throw new Error("No prescription");
        if (!root) throw new Error("No root");
        const medicineName = await getMedicineName(prescription.medicine);
        const physicianName = await getPhysicianName(prescription.physician);
        root.innerHTML = `<h1>Prescription</h1>
        <div id="prescription">
        <p>Medicine: ${medicineName}</p>
        <p>Date: ${getTimeFormated(new Date(prescription.date))}</p>
        <p>Physician: ${physicianName}</p>
        </div>
        <button onclick="window.close()">Close</button>`;
    } catch (error) {
        console.error(error);
    }
}

