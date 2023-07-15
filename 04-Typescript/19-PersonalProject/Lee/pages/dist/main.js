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
var patients = [
    new Patient("Nella", "Judith Dekel", "0501111111", "https://www.letsgetpet.com/wp-content/uploads/2021/02/chat-tricolore.jpeg", 2021),
    new Patient("Jango", "Linor Monir", "0502222222", "https://media.istockphoto.com/id/1259203799/photo/portrait-of-a-young-happy-belgian-shepherd-dog-malinois-posing-outdoors.jpg?s=612x612&w=0&k=20&c=yxDw11q_2NAgrUdm0AuBkqY1UnY9MKmtiaoeWOgHNRg=", 2022),
    new Patient("Dubi", "Barak Ortman", "0501020120", "https://www.thesprucepets.com/thmb/DRKAoOkKeWmh5SMzDvapRfnZpn0=/4984x0/filters:no_upscale():strip_icc()/1_BlackPuppy-5ba50070c9e77c0082221c54.jpg", 2021),
    new Patient("Cocus", "Yael Ortman", "0501122121", "https://thumbs.dreamstime.com/b/labrador-puppy-5857333.jpg", 2020),
    new Patient("Hugo", "Netali Ortman", "0501234567", "https://qph.cf2.quoracdn.net/main-qimg-199d9dbd6c8b38138ed8ba833ec82162-lq", 2015)
];
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
        return "<div class=\"card\">\n        <img src=\"" + patient.image + "\">\n        <p>" + patient.name + "</p>\n        <p>" + patient.owner + "</p>\n        <p>" + patient.phone + "</p>\n        ";
    }
    catch (error) {
        return '';
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
