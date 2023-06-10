class ImagesByUser {
  type: string | null;
  url: string | null;
  constructor(type: string | null, url: string | null) {
    this.type = type;
    this.url = url;
  }
  // fiveImages(imagesByUser) {
  //   for (let i = 0; i < 5; i++) {
  //     imagesByUser[i] = prompt(`What is your images URL?`);
  //   }
  //   return imagesByUser[i];
  // }
}
const imagesByUser = [
  new ImagesByUser(
    prompt(`what is the name of your image?`),
    prompt(`What is your images URL?`)
  ),
  new ImagesByUser(
    prompt(`what is the name of your image?`),
    prompt(`What is your images URL?`)
  ),
  new ImagesByUser(
    prompt(`what is the name of your image?`),
    prompt(`What is your images URL?`)
  ),
  new ImagesByUser(
    prompt(`what is the name of your image?`),
    prompt(`What is your images URL?`)
  ),
  new ImagesByUser(
    prompt(`what is the name of your image?`),
    prompt(`What is your images URL?`)
  ),
];

// debugger;
const userImages = document.querySelector(`#user-images`);
const imagesToHTML = imagesByUser
  .map((img) => {
    return `<p>image type: ${img.type}<br><br><img src="${img.url}">`;
  })
  .join(" ");
if (userImages) {
  userImages.innerHTML = imagesToHTML;
}
