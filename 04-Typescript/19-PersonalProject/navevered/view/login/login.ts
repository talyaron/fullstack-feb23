function loadUsersFromLocal(): User[]|undefined{
  try {
    const userString = localStorage.getItem("users");
    if(userString)
    return JSON.parse(userString);
    else return[];
  } catch (error) {
    console.error(error);
    return[]
  }
  

}
class User {

  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {
  
  }
}
const usersLoginPage: User[]| undefined =  loadUsersFromLocal();



function handleLoginFormSubmit(event: Event) {
  event.preventDefault();

  try {
    debugger
    if (User && User === User && usersLoginPage ) {
      // Redirect to the registration page
      window.location.href = "../home-page/homepage.html";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}