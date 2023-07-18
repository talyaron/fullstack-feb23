var Patient = /** @class */ (function () {
    function Patient(name, owner, phone, image, birthYear, id) {
        this.name = name;
        this.owner = owner;
        this.phone = phone;
        this.image = image;
        this.birthYear = birthYear;
        this.isEdit = false;
        if (id) {
            this.id = id;
        }
        else {
            this.id = "" + Math.random();
        }
    }
    Patient.prototype.setEdit = function (set) {
        this.isEdit = set;
    };
    return Patient;
}());
var firstPatiens = [
    new Patient("Oscar", "Lee Dekel", "0521111111", "https://media.istockphoto.com/id/462488163/photo/tabby-grey-cat-lying-on-white-background.jpg?s=612x612&w=0&k=20&c=PowgpbMeU8jJwlHrkVQY3SLGrr_83pR8m6_arn_M3BA=", 2006),
    new Patient("Nella", "Judith Dekel", "0522222222", "https://www.letsgetpet.com/wp-content/uploads/2021/02/chat-tricolore.jpeg", 2021),
    new Patient("Dubi", "Barak Ortman", "0521201120", "https://www.thesprucepets.com/thmb/DRKAoOkKeWmh5SMzDvapRfnZpn0=/4984x0/filters:no_upscale():strip_icc()/1_BlackPuppy-5ba50070c9e77c0082221c54.jpg", 2021),
    new Patient("Cocus", "Yael Ortman", "0520000000", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7XX6qCOcpfywUyH57ckF39sBbvZD6E-cAQ&usqp=CAU", 2020),
    new Patient("Jango", "Linor Monir", "0521010100", "https://media.istockphoto.com/id/1259203799/photo/portrait-of-a-young-happy-belgian-shepherd-dog-malinois-posing-outdoors.jpg?s=612x612&w=0&k=20&c=yxDw11q_2NAgrUdm0AuBkqY1UnY9MKmtiaoeWOgHNRg=", 2021),
];
var patients = getProductsFromLocalStorage();
function getProductsFromLocalStorage() {
    try {
        var patientsString = localStorage.getItem("patients");
        if (!patientsString) {
            localStorage.setItem("patients", JSON.stringify(firstPatiens));
            return firstPatiens;
        }
        else {
            var patientsArray = JSON.parse(patientsString);
            var patients_1 = patientsArray.map(function (patient) {
                return new Patient(patient.name, patient.owner, patient.phone, patient.image, patient.birthYear, patient.id);
            });
            return patients_1;
        }
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
        if (patient.isEdit) {
            return "<div class=\"card\">\n        <img src=\"" + patient.image + "\">\n        <form onsubmit=\"handleSetEditPatient(event)\" id=\"" + patient.id + "\">\n        <label> Name: <input type=\"text\" name=\"name\" value=\"" + patient.name + "\"></input></label><br>\n        <label>Owner: <input type=\"text\" name=\"owner\" value=\"" + patient.owner + "\"></input></label><br>\n        <label>Phone: <input type=\"text\" name=\"phone\" value=\"" + patient.phone + "\"></input></label><br>\n        <label>Birth Year: <input type=\"text\" name=\"birthYear\" value=\"" + patient.birthYear + "\"></input></label><br>\n        <button onclick=\"handleRemovePatient('" + patient.id + "')\">Remove</button>\n        <input type=\"submit\" value=\"SET\">\n        </div>\n       ";
        }
        else {
            return "<div class=\"card\">\n        <img src=\"" + patient.image + "\">\n        <p><label id=\"name\">Name: " + patient.name + "</label><br>\n        <label>Owner: " + patient.owner + "</label><br>\n        <label>Phone: " + patient.phone + "</label><br>\n        <label>Birth Year: " + patient.birthYear + "</label><br>\n        <button onclick=\"handleRemovePatient('" + patient.id + "')\">Remove</button>\n        <button onclick=\"handleEdit('" + patient.id + "')\">Edit</button></p>\n        </div>\n       ";
        }
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
function handleEdit(patientId) {
    try {
        var patient = patients.find(function (patient) { return patient.id === patientId; });
        if (!patient)
            throw new Error("Couldn't find patient");
        patient.setEdit(true);
        renderAllPatients(patients, document.querySelector("#rootPatients"));
    }
    catch (error) {
        console.error(error);
    }
}
function handleSetEditPatient(ev) {
    try {
        ev.preventDefault();
        var name = ev.target.name.value;
        var owner = ev.target.owner.value;
        var phone = ev.target.phone.value;
        var birthYear = ev.target.birthYear.value;
        var patientId_1 = ev.target.id;
        var patient = patients.find(function (patient) { return patient.id === patientId_1; });
        if (!patient)
            throw new Error("Could not find patient");
        patient.name = name;
        patient.owner = owner;
        patient.phone = phone;
        patient.birthYear = birthYear;
        patient.setEdit(false);
        console.log(patients);
        localStorage.setItem("patients", JSON.stringify(patients));
        renderAllPatients(patients, document.querySelector("#rootPatients"));
    }
    catch (error) {
        console.error(error);
    }
}
var Vaccine = /** @class */ (function () {
    function Vaccine(vacName, price, id) {
        this.vacName = vacName;
        this.price = price;
        if (id) {
            this.id = id;
        }
        else {
            this.id = "" + Math.random();
        }
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
