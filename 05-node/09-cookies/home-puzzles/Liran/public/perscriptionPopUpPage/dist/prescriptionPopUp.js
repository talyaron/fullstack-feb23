var prescriptionIdFromQuery = new URLSearchParams(window.location.search).get('prescriptionId');
var currPrescription = getPrescriptionFromDB(prescriptionIdFromQuery).then(function (prescription) {
    renderPrescription(prescription, document.querySelector('#root'));
});
function renderPrescription(prescription, root) {
    try {
        if (!prescription)
            throw new Error("No prescription");
        if (!root)
            throw new Error("No root");
        var medicineName = prescription.medicine.name;
        var physicianName = "Dr. " + prescription.physician.firstName + " " + prescription.physician.lastName;
        debugger;
        root.innerHTML = "<h1>Prescription</h1>\n        <div id=\"prescription\">\n        <p>Medicine: " + medicineName + "</p>\n        <p>Date: " + getTimeFormated(new Date(prescription.date)) + "</p>\n        <p>Physician: " + physicianName + "</p>\n        </div>\n        <button onclick=\"window.close()\">Close</button>";
    }
    catch (error) {
        console.error(error);
    }
}
