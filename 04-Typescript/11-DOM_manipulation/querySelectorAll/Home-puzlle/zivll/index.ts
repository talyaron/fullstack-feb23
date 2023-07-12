class ImagesByUser {
  typeOfImage?: string | null;
  url?: string | null;
  constructor(typeOfImage: string | null, url: string | null) {
    this.typeOfImage = typeOfImage;
    this.url = url;
  }
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
    return `<p>image type: ${img.typeOfImage}<br><br><img src="${img.url}">`;
  })
  .join(" ");
if (userImages) {
  userImages.innerHTML = imagesToHTML;
}
