class Physician {
    constructor(public firstName: string,
        public lastName: string,
        public age: number,
        public phoneNum: number,
        public email: string,
        public licenseNumber: number,
        public password: string,
        public isAdmin: boolean
    ) { }
}

async function handleLogin(event) {
    try {
        event.preventDefault();
        debugger;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const admin = event.target.admin.value;
        if (!email || !password) throw new Error("missing some details");
        const response = await fetch("API/physician/get-physicians", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        // if data is not ok
        if (!data.ok) {
            throw new Error(data.message);
        }
        // if data is ok
        // check if email and password are correct
        const physician: Physician = data.find(physician => physician.email === email && physician.password === password);
        if (!physician) {
            alert("email or password are incorrect");
            throw new Error("email or password are incorrect");
        }
        // if email and password are correct
        if (physician.isAdmin) {
            alert("admin");
            window.location.href = `adminPage.html`
        }
        else {
            alert("physician");
            window.location.href = `physicianPage.html?email=${email}`;
        }

    } catch (error) {
        console.error(error);

    }

}