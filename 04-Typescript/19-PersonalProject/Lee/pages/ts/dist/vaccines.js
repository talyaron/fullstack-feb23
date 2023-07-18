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
var PatientVaccine = /** @class */ (function () {
    function PatientVaccine(name, owner, patientId, vacName, price, VacId) {
        this.name = name;
        this.owner = owner;
        this.patientId = patientId;
        this.vacName = vacName;
        this.price = price;
        this.VacId = VacId;
    }
    return PatientVaccine;
}());
var patientVaccine = [];
function renderVaxPatient(rootElement) {
    try {
        var html = "<form onsubmit=\"handleVaxPatient(event)\">\n            <div class=\"card\">\n            <h2>Time for Vaccine</h2>\n            <label for=\"name\">Patient: <input type=\"text\" name=\"name\" placeholder=\"Member Name\"></label>\n            <label for=\"name\">Owner: <input type=\"text\" name=\"owner\" placeholder=\"Owner\"></label>\n            <label for=\"name\">Vaccine:<input type=\"text\" name=\"vaccine\" placeholder=\"Vaccine\"></label>\n            <label for=\"name\">Price: <input type=\"number\" name=\"price\" placeholder=\"Price\"></label>\n            <input type=\"submit\" value=\"Register\">\n        </div>\n    </form>";
        console.log(html);
        if (!rootElement)
            throw new Error("no root elemnt");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
renderVaxPatient(document.querySelector("#submit"));
function handleVaxPatient(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var owner = ev.target.owner.value;
        var vaccine = ev.target.vaccine.value;
        var price = ev.target.price.value;
        console.log(name, owner, vaccine, price);
    }
    catch (error) {
        console.error(error);
    }
}
