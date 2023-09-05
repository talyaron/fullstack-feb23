class Physician {
    constructor(public firstName: string,
        public lastName: string,
        public age: number,
        public phoneNum: number,
        public email: string,
        public licenseNumber: number,
        public password: string,
        public isAdmin: boolean,
        public _id: string
    ) { }
}

class Patient {
    constructor(public firstName: string,
        public lastName: string,
        public age: number,
        public phoneNum: number,
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