var Treatment = /** @class */ (function () {
    function Treatment(treatName, price) {
        this.treatName = treatName;
        this.price = price;
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
var PatientTeatment = /** @class */ (function () {
    function PatientTeatment(name, owner, treatName, price) {
        this.name = name;
        this.owner = owner;
        this.treatName = treatName;
        this.price = price;
    }
    return PatientTeatment;
}());
var patientTeatment = [];
function renderVaxPatient(rootElement) {
    try {
        var html = "<form onsubmit=\"handleVaxPatient(event)\">\n            <div class=\"card\">\n            <h2>Time for Vaccine</h2>\n            <label for=\"name\">Patient: <input type=\"text\" name=\"name\" placeholder=\"Patient Name\"></label>\n            <label for=\"name\">Owner: <input type=\"text\" name=\"owner\" placeholder=\"Owner\"></label>\n            <label for=\"name\">Treatment:<input type=\"text\" name=\"vaccine\" placeholder=\"Vaccine\"></label>\n            <label for=\"name\">Price: <input type=\"number\" name=\"price\" placeholder=\"Price\"></label>\n            <input type=\"submit\" value=\"Register\">\n        </div>\n    </form>";
        console.log(html);
        if (!rootElement)
            throw new Error("no root elemnt");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
renderVaxPatient(document.querySelector("#add"));
function renderVacPatient(patient, rootElement) {
    try {
        var html = patient.name + ", the furry child of " + patient.owner + " got vaccinated today!";
        if (!rootElement)
            throw new Error("no root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleVaxPatient(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var owner = ev.target.owner.value;
        var vaccine = ev.target.vaccine.value;
        var price = Number(ev.target.price.value);
        var patient = new Patient(name, owner, vaccine, price, Number);
        patientVaccine.push(patient);
        var patientInfoElement = document.querySelector("#patientInfo");
        renderVacPatient(patient, patientInfoElement);
        console.log(name, owner, vaccine, price);
    }
    catch (error) {
        console.error(error);
    }
}
