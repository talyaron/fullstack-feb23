class Physician {
    constructor(public firstName: string,
        public lastName: string,
        public age: number,
        public phoneNum: number,
        public email: string,
        public licenseNumber: number,
        public password: string,
        public isAdmin: boolean,
        public id: string
    ) { }
}

async function hundleLogin(event) {
    try {
        event.preventDefault();
        debugger;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const admin = event.target.admin.checked;
        if (!email || !password) throw new Error("missing some details");
        const response = await fetch("API/physician/get-physicians", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data.physicians);
        const physician: Physician = data.physicians.find(physician => physician.email === email && physician.password === password);
        if (!physician) {
            alert("email or password are incorrect");
            throw new Error("email or password are incorrect");
        }
        // if email and password are correct
        if (physician.isAdmin && admin) {
            alert("admin");
            window.location.href = `admin.html?email=${email}`
        }
        else {
            alert("physician");
            window.location.href = `physicianPage.html?email=${email}`;
        }

    } catch (error) {
        console.error(error);

    }

}