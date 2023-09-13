async function hundleLogin(event) {
    try {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const admin = event.target.admin.checked;
        if (!email || !password) throw new Error("missing some details");
        const response = await fetch(`API/physician/get-physicians-login?email=${email}&password=${password}`)
        const data = await response.json();
        console.log(data.physicians);
        const physician = data.physician;
        debugger;
        if (!physician) {
            alert("email or password are incorrect");
            throw new Error("email or password are incorrect");
        }
        // if email and password are correct
        if (physician.isAdmin && admin) {
            alert("admin");
            window.location.href = `../adminPage/admin.html?email=${email}`
        }
        else if (!physician.isAdmin && admin) {
            alert("You are not an admin, please login again");
        }
        else {
            alert("physician");
            window.location.href = `../phisicianPage/physician.html`;
        }

    } catch (error) {
        console.error(error);

    }

}