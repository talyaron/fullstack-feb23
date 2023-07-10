class Client {
    id: string;
    constructor(public name: string, public owner: string, public image: string, public birthYear: number) {
        this.id = uid();
    }
}

const clients: Client[] = [
    new Client("Nella", "Judith Dekel", "https://www.instagram.com/p/CX-9-hdIUFd/?img_index=1", 2021),
    new Client("Jango", "Linor Monir", "https://media.istockphoto.com/id/1259203799/photo/portrait-of-a-young-happy-belgian-shepherd-dog-malinois-posing-outdoors.jpg?s=612x612&w=0&k=20&c=yxDw11q_2NAgrUdm0AuBkqY1UnY9MKmtiaoeWOgHNRg=", 2022)

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
