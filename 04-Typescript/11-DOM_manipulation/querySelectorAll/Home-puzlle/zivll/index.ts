let imagesByUser = [];
for (let i = 0; i >= 5; i++) {
  imagesByUser[i] = prompt(`What is your images URL? please`);
}
// for (let i = 0; i >= imagesByUser.length; i++) {
//   document.querySelectorAll(`#user-images`);
// }
const userImages = document.querySelectorAll(`#user-images`);
const newArray = imagesByUser.map(()=>)