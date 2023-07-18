var patients = getPatientsFromLocalStorage();
function getPatientsFromLocalStorage() {
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
