class Vaccine {
    id: string;
    constructor(public vacName: string, public price: number, id?: string | null) {
        if (id) {
            this.id = id;
        } else {

            this.id = `${Math.random()}`
        }
    }
}

const vaccines: Vaccine[] = [

    new Vaccine("Rabies", 100),
    new Vaccine("FVRCP", 80),
    new Vaccine("FHV", 60),
    new Vaccine("FHV-1", 70),
    new Vaccine("Parvovirus", 120),
    new Vaccine("Leptospirosis", 50),
    new Vaccine("Distemper", 200),
    new Vaccine("Canine Infectious Hepatitis", 130)
]



class PatientVaccine {
    constructor(public name: Patient, public owner: Patient, public vaccine: Vaccine, public price: Vaccine) {

    }
}

const patientVaccine: PatientVaccine[] = []


function renderVaxPatient(rootElement: HTMLElement | null) {
    try {
        const html = `<form onsubmit="handleVaxPatient(event)">
            <div class="card">
            <h2>Time for Vaccine</h2>
            <label for="name">Patient: <input type="text" name="name" placeholder="Patient Name"></label>
            <label for="name">Owner: <input type="text" name="owner" placeholder="Owner"></label>
            <label for="name">Vaccine:<input type="text" name="vaccine" placeholder="Vaccine"></label>
            <label for="name">Price: <input type="number" name="price" placeholder="Price"></label>
            <input type="submit" value="Register">
        </div>
    </form>`
        console.log(html)

        if (!rootElement) throw new Error("no root elemnt")

        rootElement.innerHTML = html
    } catch (error) {
        console.error(error)
    }
}

renderVaxPatient(document.querySelector("#add"))

function renderVacPatient(patient: Patient, rootElement: HTMLElement | null) {
    try {
        const html = `${patient.name}, the furry child of ${patient.owner} got vaccinated today!`
        if (!rootElement) throw new Error("no root element")
        rootElement.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}

function handleVaxPatient(ev: any) {
    try {
        ev.preventDefault();
        const name = ev.target.name.value;
        const owner = ev.target.owner.value;
        const vaccine = ev.target.vaccine.value;
        const price = Number(ev.target.price.value);

        const patient = new Patient(name, owner, vaccine, price: Number);
        patientVaccine.push(patient);


        const patientInfoElement = document.querySelector("#patientInfo");
        renderVacPatient(patient, patientInfoElement);

        console.log(name, owner, vaccine, price);
    } catch (error) {
        console.error(error)
    }
}


