// async function handleLogin(ev:any){
//     try {
//         ev.preventDefault(); // stop form from submitting
        
//         const user = {  // get data from form
//             password: ev.target.password.value,
//             email: ev.target.email.value
//         }
//         if(!user.email || !user.password) throw new Error("Please complete all fields");
//         const response = await fetch('/API/users/login', { // send data to server
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         });

//         const {error, email} = await response.json(); // get data from server
//         console.log(error);
//         if (error) {
//             throw new Error(error);
//         }
//         //if everthink is OK, redirect to main page of the user
//         window.location.href = `/main.html?email=${email}`; //query
//     } catch (error) {
//         console.error(error);
//     }
// }
async function handleLogin(event) {
    try {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const admin = event.target.admin.checked;
        if (!email || !password) throw new Error("missing some details");
        const response = await fetch(`API/users/get-user-login?email=${email}&password=${password}`)
        const data = await response.json();
        console.log(data.user);
        const user = data.users;
        debugger;
        if (!user) {
            alert("email or password are incorrect");
            throw new Error("email or password are incorrect");
        }
        // if email and password are correct
        if (user.isAdmin && admin) {
            alert("admin");
            window.location.href = `../adminPage/admin.html`
        }
        else if (!user.isAdmin && admin) {
            alert("You are not an admin, please login again");
        }
        else {
            alert("user");
            window.location.href = `main.html`;
        }

    } catch (error) {
        console.error(error);

    }

}