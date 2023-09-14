async function handleRegister(ev) {
    try {
        ev.preventDefault();

        const user={
            password:ev.target.password.value,
            email:ev.target.email.value,
        }
        const response=await fetch("/API/users/register",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
        })
        const { error } = await response.json(); 
        console.log(error);
        if (error) {
            throw new Error(error);
        }
   
    window.location.href = "../login/index.html"
    } catch (error) {
        console.error(error)
    }
    
}