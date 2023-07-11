class Client {
    id: string;
    constructor(public name: string, public owner: string, public image: string, public birthYear: number) {
        this.id = uid();
    }
}

const clients: Client[] = [
    new Client("Nella", "Judith Dekel", "https://www.instagram.com/p/CX-9-hdIUFd/?img_index=1", 2021),
    new Client("Jango", "Linor Monir", "https://media.istockphoto.com/id/1259203799/photo/portrait-of-a-young-happy-belgian-shepherd-dog-malinois-posing-outdoors.jpg?s=612x612&w=0&k=20&c=yxDw11q_2NAgrUdm0AuBkqY1UnY9MKmtiaoeWOgHNRg=", 2022),
    new Client("Dubi", "Barak Ortman", "https://www.thesprucepets.com/thmb/DRKAoOkKeWmh5SMzDvapRfnZpn0=/4984x0/filters:no_upscale():strip_icc()/1_BlackPuppy-5ba50070c9e77c0082221c54.jpg", 2021),
    new Client("Cocus", "Yael Ortman", "https://thumbs.dreamstime.com/b/labrador-puppy-5857333.jpg", 2020),
    new Client("Hugo", "Netali Ortman", "https://qph.cf2.quoracdn.net/main-qimg-199d9dbd6c8b38138ed8ba833ec82162-lq", 2015)




]

class Vaccine {
    id: string;
    constructor(public vacName: string, public price: number) {
        this.id = uid();
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
        this.id = uid();
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
        this.id = uid();
    }
}


const supplies: Supply[] = [
    new Supply("Medical food 1 can", 17),
    new Supply("Ampoule Anti-flea & Tick", 47),
    new Supply("seringe", 10)


]
