class User {
    name: string;
    img: string;
    constructor(name: string, img: string) {
      this.name = name;
      this.img = img;
    }
  }
  const users: User[] = [
    new User ("Itizk", "./dist/close-up-smiling-man-field-sunset.jpg" ),
    new User("Sara", "./dist/close-up-smiling-man-field-sunset.jpg"),
    new User("Nave","./dist/close-up-smiling-man-field-sunset.jpg" ),
    new User("Alex","./dist/close-up-smiling-man-field-sunset.jpg"),
  ];
  const content = document.querySelector("#content");
const usersHTML = users
  .map((car) => {
    return `<div><img src =${User.img}><p>User:${User.name}</p></div>`;
  })
  .join(" ");

console.log(usersHTML);
if (content) {
  content.innerHTML = usersHTML;
}