// function getUsers(): User[] {
//     try {
//         //get users from locastorage (string)
//         const usersString = localStorage.getItem("users");
//         if (!usersString) return [];
//         //convert string to array of objects
//         const usersArray:User[] = JSON.parse(usersString);
//         //convert array of objects to array of users
//         // const users: User[] = usersArray.map((user: User) => {
//             // return new User(user.name);
//         // })
//         return usersArray
//     } catch (error) {
//         console.error(error)
//         return []
//     }
// };
// function handleAddNote(ev:any){
//     try {
//         ev.preventDefault()
//         const text:string = ev.target.text.value;
//         const color:string = ev.targe.color.value;
//         const newNote = new Note(color , text)
//         notes.push(newNote)
//         renderAllNotes(notes , document.querySelector("#rootNotes"))
//           //save to localStorage
//         localStorage.setItem("notes", JSON.stringify(notes))
//         ev.target.reset();
//     } catch (error) {
//         console.error(error)
//     }
// }
// function renderAllNotes (notes:Note[] , htmlElement:HTMLElement|null ) {
//     try {
//         if (!htmlElement) throw new Error("No Element");
//         const html = notes.map((note)=> renderNote(note)).join(" ")
//         htmlElement.innerHTML = html
//     } catch (error) {
//         console.error(error)
//     }
// }
// function renderNote(note:Note){
//     try {
//         if(note.isEdit){
//             return '<div class="note">edit.thing</div>'
//         }else{
//             return '<div class="note">Note</div>'
//         }
//     } catch (error) {
//         console.error(error) 
//     }
// }
// // function handleLogin(event: any) {
// //     event.preventDefault();
// //     console.log("Login");
// //     const nameOfUser = event.target.name.value;
// //     _users.push(new User(nameOfUser));
// //     console.log(JSON.stringify(_users));
// //     localStorage.setItem("users", JSON.stringify(_users));
// //     window.location.href = '../home/home.html';
// // }
