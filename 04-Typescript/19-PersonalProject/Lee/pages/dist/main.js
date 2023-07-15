var Patient = /** @class */ (function () {
    function Patient(name, owner, phone, image, birthYear, id) {
        this.name = name;
        this.owner = owner;
        this.phone = phone;
        this.image = image;
        this.birthYear = birthYear;
        if (id) {
            this.id = id;
        }
        else {
            this.id = "" + Math.random();
        }
    }
    return Patient;
}());
var patients = getPatientsFromStorage();
function getPatientsFromStorage() {
    try {
        var patientsString = localStorage.getItem("patients");
        if (!patientsString)
            return [];
        var patientsArray = JSON.parse(patientsString);
        var patients_1 = patientsArray.map(function (patient) {
            return new Patient(patient.name, patient.owner, patient.phone, patient.image, patient.birthYear, patient.id);
        });
        return patients_1;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
;
renderAllPatients(patients, document.querySelector('#rootPatients'));
function handleAddPatients(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.elements.name.value;
        var owner = ev.target.elements.owner.value;
        var phone = ev.target.elements.phone.value;
        var image = ev.target.elements.image.value;
        var birthYear = ev.target.elements.birthYear.value;
        var newPatient = new Patient(name, owner, phone, image, birthYear);
        patients.push(newPatient);
        renderAllPatients(patients, document.querySelector('#rootPatients'));
        localStorage.setItem("patients", JSON.stringify(patients));
        ev.target.reset();
    }
    catch (error) {
        console.error(error);
    }
}
function renderAllPatients(patients, htmlElement) {
    try {
        if (!htmlElement)
            throw new Error("No element");
        var html = patients.map(function (patient) { return renderPatientCard(patient); }).join(' ');
        htmlElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function renderPatientCard(patient) {
    try {
        return "<div class=\"card\">\n        <img src=\"" + patient.image + "\">\n        <p><label id=\"name\">Name: " + patient.name + "</label><br>\n        <label>Owner: " + patient.owner + "</label><br>\n        <label>Tel: " + patient.phone + "</label><br>\n        <label>Birth Year: " + patient.birthYear + "</label><br>\n        <button onclick=\"handleRemovePatient('" + patient.id + "')\">Remove</button></p>\n        </div>\n       ";
    }
    catch (error) {
        console.error(error);
        return '';
    }
}
function handleRemovePatient(patientId) {
    try {
        var index = patients.findIndex(function (patient) { return patient.id === patientId; });
        if (index === -1)
            throw new Error("Could not find patient");
        patients.splice(index, 1);
        localStorage.setItem("patients", JSON.stringify(patients));
        renderAllPatients(patients, document.querySelector("#rootPatients"));
    }
    catch (error) {
        console.error(error);
    }
}
var Vaccine = /** @class */ (function () {
    function Vaccine(vacName, price) {
        this.vacName = vacName;
        this.price = price;
        // this.id = uid();
    }
    return Vaccine;
}());
var Vaccines = [
    new Vaccine("Rabies", 100),
    new Vaccine("FVRCP", 80),
    new Vaccine("FHV", 60),
    new Vaccine("FHV-1", 70),
    new Vaccine("Parvovirus", 120),
    new Vaccine("Leptospirosis", 50),
    new Vaccine("Distemper", 200),
    new Vaccine("Canine Infectious Hepatitis", 130)
];
var Treatment = /** @class */ (function () {
    function Treatment(treatName, price) {
        this.treatName = treatName;
        this.price = price;
        // this.id = uid();
    }
    return Treatment;
}());
var treatments = [
    new Treatment("Haircut", 200),
    new Treatment("Hospitalization per night", 450),
    new Treatment("teeth cleaning", 100),
    new Treatment("x-ray", 100),
    new Treatment("US", 100),
];
var Supply = /** @class */ (function () {
    function Supply(supName, price) {
        this.supName = supName;
        this.price = price;
        // this.id = uid();
    }
    return Supply;
}());
var supplies = [
    new Supply("Medical food 1 can", 17),
    new Supply("Ampoule Anti-flea & Tick", 47),
    new Supply("seringe", 10)
];
