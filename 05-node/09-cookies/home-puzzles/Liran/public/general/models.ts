class Physician {
    constructor(public firstName: string,
        public lastName: string,
        public age: number,
        public phoneNum: string,
        public email: string,
        public licenseNumber: string,
        public password: string,
        public isAdmin: boolean,
        public _id: string
    ) { }
}

class Patient {
    constructor(public firstName: string,
        public lastName: string,
        public patientId: string,
        public age: number,
        public phoneNum: string,
        public weight: number,
        public height: number,
        public smoking: boolean,
        public address: string,
        public physicianId: string,
        public _id: string
    ) { }
}

class Medicine {
    constructor(public name: string,
        public dosagePerDay: number,
        public maxDuration: number,
        public _id: string
    ) { }
}

class Prescription {
    constructor(public date: Date,
        public patient: Patient,
        public medicine: Medicine,
        public physician: Physician,
        public _id: string
    ) { }
}

class Visit {
    constructor(public date: Date,
        public patient: Patient,
        public physician: Physician,
        public summary: string,
        public _id: string
    ) { }
}