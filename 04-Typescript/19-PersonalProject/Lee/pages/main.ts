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

<<<<<<< HEAD

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

=======
const firstPatiens: Patient[] = [

    new Patient(
        "Oscar", "Lee Dekel", "0521111111", "https://media.istockphoto.com/id/462488163/photo/tabby-grey-cat-lying-on-white-background.jpg?s=612x612&w=0&k=20&c=PowgpbMeU8jJwlHrkVQY3SLGrr_83pR8m6_arn_M3BA=", 2006
    ),
    new Patient(
        "Nella", "Judith Dekel", "0522222222", "https://www.letsgetpet.com/wp-content/uploads/2021/02/chat-tricolore.jpeg", 2021
    ),
    new Patient(
        "Dubi", "Barak Ortman", "0521201120", "https://www.thesprucepets.com/thmb/DRKAoOkKeWmh5SMzDvapRfnZpn0=/4984x0/filters:no_upscale():strip_icc()/1_BlackPuppy-5ba50070c9e77c0082221c54.jpg", 2021
    ),
    new Patient(
        "Cocus", "Yael Ortman", "0520000000", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7XX6qCOcpfywUyH57ckF39sBbvZD6E-cAQ&usqp=CAU", 2020
    ),
    new Patient(
        "Jango", "Linor Monir", "0521010100", "https://media.istockphoto.com/id/1259203799/photo/portrait-of-a-young-happy-belgian-shepherd-dog-malinois-posing-outdoors.jpg?s=612x612&w=0&k=20&c=yxDw11q_2NAgrUdm0AuBkqY1UnY9MKmtiaoeWOgHNRg=", 2021
    ),


];

const patients: Patient[] = getProductsFromLocalStorage();

function getProductsFromLocalStorage(): Patient[] {
    try {
        const patientsString = localStorage.getItem("patients");
        if (!patientsString) {
            localStorage.setItem("patients", JSON.stringify(firstPatiens));
            return firstPatiens;
        } else {

            const patientsArray = JSON.parse(patientsString)
            const patients: Patient[] = patientsArray.map((patient: Patient) => {
                return new Patient(patient.name, patient.owner, patient.phone, patient.image, patient.birthYear, patient.id)
            })

            return patients;
        }
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
    } catch (error) {
        console.error(error)
        return []

    }
};



renderAllPatients(patients, document.querySelector('#rootPatients'))

<<<<<<< HEAD

=======
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
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

<<<<<<< HEAD
        const patient:Patient|undefined = patients.find(patient => patient.id === patientId)
        if(!patient) throw new Error("Could not find patient")
        
=======
        const patient: Patient | undefined = patients.find(patient => patient.id === patientId)
        if (!patient) throw new Error("Could not find patient")

>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
        patient.name = name;
        patient.owner = owner;
        patient.phone = phone;
        patient.birthYear = birthYear;
        patient.setEdit(false)
        console.log(patients)

        localStorage.setItem("patients", JSON.stringify(patients))
        renderAllPatients(patients, document.querySelector("#rootPatients"));

<<<<<<< HEAD
        
=======

>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27



    } catch (error) {
        console.error(error)

    }
}

<<<<<<< HEAD







class Vaccine {
    id: string;
    constructor(public vacName: string, public price: number) {
        // this.id = uid();
=======
class Vaccine {
    id: string;
    constructor(public vacName: string, public price: number, id?: string | null) {
        if (id) {
            this.id = id;
        } else {

            this.id = `${Math.random()}`
        }
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
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

<<<<<<< HEAD
class Treatment {
    id: string;
    constructor(public treatName: string, public price: number) {
        // this.id = uid();
=======


class PatientVaccine {
    constructor(public name: Patient, public owner: Patient, public patientId: Patient, public vacName: Vaccine, public price: Vaccine, public VacId: Vaccine) {

    }
}

const patientVaccine: PatientVaccine[] = []


function renderVaxPatient(rootElement:HTMLElement|null) {
    try {
        const html =
            `<form onsubmit="handleVaxPatient(event)">
            <div class="card">
            <h2>Time for Vaccine</h2>
            <label for="name">Patient: <input type="text" name="name" placeholder="Member Name"></label>
            <label for="name">Owner: <input type="text" name="owner" placeholder="Owner"></label>
            <label for="name">Vaccine:<input type="text" name="vaccine" placeholder="Vaccine"></label>
            <label for="name">Price: <input type="number" name="price" placeholder="Price"></label>
            <input type="submit" value="Register">
        </div>
    </form>`
    console.log(html)
    
    if(!rootElement) throw new Error("no root elemnt")

    rootElement.innerHTML = html
    } catch (error) {
        console.error(error)

    }
}

renderVaxPatient (document.querySelector("#submit"))


function handleVaxPatient(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const owner = ev.target.owner.value;
        const vaccine = ev.target.vaccine.value;
        const price = ev.target.price.value;

        console.log(name, owner, vaccine, price)

    } catch (error) {
        console.error(error)

    }
}







class Treatment {
    id: string;
    constructor(public treatName: string, public price: number) {
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
    }
}

const treatments: Treatment[] = [
    new Treatment("Haircut", 200),
    new Treatment("Hospitalization per night", 450),
    new Treatment("teeth cleaning", 100),
    new Treatment("x-ray", 100),
    new Treatment("US", 100),
]


<<<<<<< HEAD
class Supply {
    id: string;
    constructor(public supName: string, public price: number) {
        // this.id = uid();
    }
}


const supplies: Supply[] = [
    new Supply("Medical food can", 17),
    new Supply("Ampoule Anti-flea & Tick", 47),
    new Supply("seringe", 10)
]
=======


class PatientTeatment {
    constructor(public name: Patient, public owner: Patient, public treatName: Treatment, public price: Treatment) {

    }
}
>>>>>>> 7473a3df52bf457216d9852d7b1fca3092105c27
