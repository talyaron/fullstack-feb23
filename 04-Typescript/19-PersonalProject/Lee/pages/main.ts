class Patient {
    id: string;
    constructor(public name: string, public owner: string, public phone: string, public image: string, public birthYear: number) {
        this.id = `id-${Math.random()}`
    }
}

const patients: Patient[] = [
    new Patient("Nella", "Judith Dekel", "0501111111", "https://www.instagram.com/p/CX-9-hdIUFd/?img_index=1", 2021),
    new Patient("Jango", "Linor Monir", "0502222222", "https://media.istockphoto.com/id/1259203799/photo/portrait-of-a-young-happy-belgian-shepherd-dog-malinois-posing-outdoors.jpg?s=612x612&w=0&k=20&c=yxDw11q_2NAgrUdm0AuBkqY1UnY9MKmtiaoeWOgHNRg=", 2022),
    new Patient("Dubi", "Barak Ortman", "0501020120", "https://www.thesprucepets.com/thmb/DRKAoOkKeWmh5SMzDvapRfnZpn0=/4984x0/filters:no_upscale():strip_icc()/1_BlackPuppy-5ba50070c9e77c0082221c54.jpg", 2021),
    new Patient("Cocus", "Yael Ortman", "0501122121", "https://thumbs.dreamstime.com/b/labrador-puppy-5857333.jpg", 2020),
    new Patient("Hugo", "Netali Ortman","0501234567", "https://qph.cf2.quoracdn.net/main-qimg-199d9dbd6c8b38138ed8ba833ec82162-lq", 2015)
]

function handleAddPatients(ev:any) {
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const owner = ev.target.elements.owner.value;
        const phone = ev.target.elements.phone.value;
        const image = ev.target.elements.image.value;
        const birthYear = ev.target.elements.birthYear.value;

        const newPatient = new Patient (name, owner, phone, image, birthYear);
        patients.push(newPatient)

    } catch (error) {
        console.error(error)
        
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
