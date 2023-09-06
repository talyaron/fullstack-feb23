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
            window.location.href = `admin.html?physicianEmail=${email}`
        }
        else {
            alert("physician");
            window.location.href = `physician.html?physicianEmail=${email}`;
        }

    } catch (error) {
        console.error(error);

    }

}