class Patient {
    id: string;
    constructor(public name: string, public owner: string, public phone: string, public image: string, public birthYear: number, id?: string | null) {
        if (id) {
            this.id = id;
        } else {

            this.id = `${Math.random()}`
        }
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
        return `<div class="card">
        <img src="${patient.image}">
        <p><label id="name">Name: ${patient.name}</label><br>
        <label>Owner: ${patient.owner}</label><br>
        <label>Tel: ${patient.phone}</label><br>
        <label>Birth Year: ${patient.birthYear}</label><br>
        <button onclick="handleRemovePatient('${patient.id}')">Remove</button></p>
        </div>
       `
    } catch (error) {
        console.error(error)
        return ''
    }
}

function handleRemovePatient(patientId:string) {
    try {
        const index = patients.findIndex(patient => patient.id === patientId);
        if (index === -1) throw new Error ("Could not find patient");

        patients.splice(index, 1);
        localStorage.setItem("patients", JSON.stringify(patients));

        renderAllPatients(patients, document.querySelector("#rootPatients"))

    } catch (error) {
        console.error(error);
        
    }
}


class Vaccine {
    id: string;
    constructor(public vacName: string, public price: number) {
        // this.id = uid();
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
        // this.id = uid();
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
        // this.id = uid();
    }
}


const supplies: Supply[] = [
    new Supply("Medical food 1 can", 17),
    new Supply("Ampoule Anti-flea & Tick", 47),
    new Supply("seringe", 10)
]
