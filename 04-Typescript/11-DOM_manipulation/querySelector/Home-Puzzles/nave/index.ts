class User {
  name: string;
  img: string;
  yearOfBirth:number;
  
  constructor(name: string, img: string) {
    this.name = name;
    this.img = img;
    // this.yearOfBirth = new Date().getFullYear() - age;
  }
}


const users: User[] = [
  new User("Itizk", "./dist/close-up-smiling-man-field-sunset.jpg"),
  new User("Sara", "./dist/close-up-smiling-man-field-sunset.jpg"),
  new User("Nave", "./dist/close-up-smiling-man-field-sunset.jpg"),
  new User("Alex", "./dist/close-up-smiling-man-field-sunset.jpg"),
];
const content = document.querySelector("#content");
const usersHTML = users
  .map((user) => {
    return `<div class='postImg'><img src =${user.img}><p>User:${user.name}</p></div>`;
  })
  .join(" ");

console.log(usersHTML);
if (content) {
  content.innerHTML = usersHTML;
}
