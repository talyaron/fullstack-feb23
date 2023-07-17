class Patient {
    id: string;
    isEdit: boolean = false;
    constructor(public name: string, public owner: string, public phone: string, public image: string, public birthYear: number, id?: string | null) {
        if (id) {
            this.id = id;
        } else {

            this.id = `${Math.random()}`
        }
    }

    setEdit(set: boolean) {
        this.isEdit = set;
    }
}


const patients: Patient[] = getPatientsFromStorage();

function getPatientsFromStorage(): Patient[] {
    try {
        const patientsString = localStorage.getItem("patients");
        if (!patientsString) return [];

        const patientsArray = JSON.parse(patientsString)

        const patients: Patient[] = patientsArray.map((patient: Patient) => {
            return new Patient(patient.name, patient.owner, patient.phone, patient.image, patient.birthYear, patient.id)
        })

        return patients

    } catch (error) {
        console.error(error)
        return []

    }
};



renderAllPatients(patients, document.querySelector('#rootPatients'))


function handleAddPatients(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const owner = ev.target.elements.owner.value;
        const phone = ev.target.elements.phone.value;
        const image = ev.target.elements.image.value;
        const birthYear = ev.target.elements.birthYear.value;

        const newPatient = new Patient(name, owner, phone, image, birthYear);
        patients.push(newPatient);

        renderAllPatients(patients, document.querySelector('#rootPatients'))

        localStorage.setItem("patients", JSON.stringify(patients));
        ev.target.reset();

    } catch (error) {
        console.error(error)
    }
}


function renderAllPatients(patients: Patient[], htmlElement: HTMLElement | null) {

    try {
        if (!htmlElement) throw new Error("No element");
        const html = patients.map(patient => renderPatientCard(patient)).join(' ')

        htmlElement.innerHTML = html;
    } catch (error) {
        console.error(error)

    }
}

function renderPatientCard(patient: Patient) {
    try {

        if (patient.isEdit) {
            return `<div class="card">
        <img src="${patient.image}">
        <form onsubmit="handleSetEditPatient(event)" id="${patient.id}">
        <label> Name: <input type="text" name="name" value="${patient.name}"></input></label><br>
        <label>Owner: <input type="text" name="owner" value="${patient.owner}"></input></label><br>
        <label>Phone: <input type="text" name="phone" value="${patient.phone}"></input></label><br>
        <label>Birth Year: <input type="text" name="birthYear" value="${patient.birthYear}"></input></label><br>
        <button onclick="handleRemovePatient('${patient.id}')">Remove</button>
        <input type="submit" value="SET">
        </div>
       `
        } else {
            return `<div class="card">
        <img src="${patient.image}">
        <p><label id="name">Name: ${patient.name}</label><br>
        <label>Owner: ${patient.owner}</label><br>
        <label>Phone: ${patient.phone}</label><br>
        <label>Birth Year: ${patient.birthYear}</label><br>
        <button onclick="handleRemovePatient('${patient.id}')">Remove</button>
        <button onclick="handleEdit('${patient.id}')">Edit</button></p>
        </div>
       `
        }
    } catch (error) {
        console.error(error)
        return ''
    }
}

function handleRemovePatient(patientId: string) {
    try {
        const index = patients.findIndex(patient => patient.id === patientId);
        if (index === -1) throw new Error("Could not find patient");

        patients.splice(index, 1);
        localStorage.setItem("patients", JSON.stringify(patients));

        renderAllPatients(patients, document.querySelector("#rootPatients"))

    } catch (error) {
        console.error(error);

    }
}

function handleEdit(patientId: string) {
    try {
        const patient = patients.find(patient => patient.id === patientId)
        if (!patient) throw new Error("Couldn't find patient")

        patient.setEdit(true);
        renderAllPatients(patients, document.querySelector("#rootPatients"))

    } catch (error) {
        console.error(error);

    }
}

function handleSetEditPatient(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const owner = ev.target.owner.value;
        const phone = ev.target.phone.value;
        const birthYear = ev.target.birthYear.value;
        const patientId: string = ev.target.id;

        const patient:Patient|undefined = patients.find(patient => patient.id === patientId)
        if(!patient) throw new Error("Could not find patient")
        
        patient.name = name;
        patient.owner = owner;
        patient.phone = phone;
        patient.birthYear = birthYear;
        patient.setEdit(false)
        console.log(patients)

        localStorage.setItem("patients", JSON.stringify(patients))
        renderAllPatients(patients, document.querySelector("#rootPatients"));

        



    } catch (error) {
        console.error(error)

    }
}

class Vaccine {
    id: string;
    constructor(public vacName: string, public price: number) {
    }
}

const Vaccines: Vaccine[] = [

    new Vaccine("Rabies", 100),
    new Vaccine("FVRCP", 80),
    new Vaccine("FHV", 60),
    new Vaccine("FHV-1", 70),
    new Vaccine("Parvovirus", 120),
    new Vaccine("Leptospirosis", 50),
    new Vaccine("Distemper", 200),
    new Vaccine("Canine Infectious Hepatitis", 130)
]

class Treatment {
    id: string;
    constructor(public treatName: string, public price: number) {
    }
}

const treatments: Treatment[] = [
    new Treatment("Haircut", 200),
    new Treatment("Hospitalization per night", 450),
    new Treatment("teeth cleaning", 100),
    new Treatment("x-ray", 100),
    new Treatment("US", 100),
]


class Supply {
    id: string;
    constructor(public supName: string, public price: number) {
    }
}


const supplies: Supply[] = [
    new Supply("Medical food can", 17),
    new Supply("Ampoule Anti-flea & Tick", 47),
    new Supply("seringe", 10)
]

//join classes

class PatientVaccine {
    constructor(public patient: Patient, public vacName: Vaccine, public price: Vaccine) {

    }
}

class PatientTeatment {
    constructor(public patient: Patient, public treatName: Treatment, public price: Treatment) {
        
    }
}