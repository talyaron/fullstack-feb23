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

