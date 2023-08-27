async function handleAddUser(evevt:any) 
{
    evevt.preventDefault();
    const userName = evevt.target.elements.uesrName.value;  
    const password = evevt.target.elements.password.value; 
    const user = {userName, password};
    const response = await fetch('/API/users/add-user', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    const result = await response.json();
   if( result.success){
         // go to login page 
            alert("user added");      
            window.location.href = "/logIn.html";
       
}
else alert("user name and password are required");


}