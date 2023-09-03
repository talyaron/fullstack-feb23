//home page 


// get user that isLogin = true from  server
async function geLogInUser() {
    
    const response = await fetch("API/user/get-log-in-user", {  
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const user = await response.json();
    return user;

    
}
// render hello user
async function renderHelloUser() {
    const {logInUser} = await geLogInUser();
   debugger;
    const helloUser = document.getElementById("helloUser");
    helloUser.innerHTML = `Hello ${logInUser.email}`;
}
async function handleAddImg(event){
   try {
    event.preventDefault();
    const imgUrl = event.target.imgUrl.value;
    const imgtitel = event.target.titel.value;
debugger
    const response = await fetch("API/images/add-img", {  
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({imgtitel,imgUrl}),
    });
    const userimgs = await response.json();
    console.log(userimgs);
    
    debugger;
   // renderImg(user);
    
   } catch (error) {
    console.error(error);   
   }
}