const uid = function () {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

class User{
    id:string
    constructor(public username, public Password,public email){
        this.username=username
        this.Password=Password
        this.email=email
        this.id=uid()
    }
}

const users:User[] = []

function userLogin(ev){
    ev.preventDefault()
    const username=ev.target.Username.value
    const password=ev.target.Password.value
    // ev.Username.target.value
    // const storedUser = localStorage.getItem('users')||[];
    const StoredUsers = JSON.parse(localStorage.getItem('users'))||[];

    const userverification= StoredUsers.some(user => user.username === username && user.Password === password)
    console.log(StoredUsers)
    
    if (userverification) {
        // Login successful
        console.log('Login successful');
        location.href="main.html"
      } else {
        // Invalid credentials
        console.log('Invalid username or password');
      }
   
}

function UserRegister(ev){
    ev.preventDefault()
    const username=ev.target.Username.value
    const password=ev.target.Password.value
    const passwordtest=ev.target.PasswordTest.value
    const email=ev.target.Email.value
        if(password!==passwordtest){
            return prompt("password dooes not match")
        }
    const newUser= new User(username,password,email)
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users));
    

}