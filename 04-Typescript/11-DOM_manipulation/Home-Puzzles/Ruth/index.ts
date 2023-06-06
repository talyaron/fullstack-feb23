const body = document.body;

class Post {
  author: string;
  imgSrc: string;
  text: string;
  likes: number;
  id: string;

  constructor(_author: string, _imgSrc: string, _text: string) {
    this.author = _author;
    this.imgSrc = _imgSrc;
    this.text = _text;
    this.likes = 0;
    this.id = String(
      Date.now().toString(32) + Math.random().toString(16),
    ).replace(/\./g, "");
  }

  addLike() {
    this.likes++;
  }
  getLikes() {
    return this.likes;
  }

  NewPostHtml(): string {
    return `<div class="gallery__post" id = "${this.id}">
    <h3 class="author">${this.author}</h3>
    <h3 class="author">${this.text}</h3>
    <img src=${this.imgSrc} alt="">
    <div class="likesDiv">
      <span onclick="doingLike(event)" class="material-symbols-outlined">favorite</span>
      <p>${this.getLikes()}</p>
    </div>
    </div>`;
  }

  renderNewPost() {
    const gallery = document.querySelector(".gallery");
    gallery!.innerHTML += this.NewPostHtml();
  }
}

const postsArray: Post[] = [
  new Post(
    "ruthbentov",
    "https://cdn.pixabay.com/photo/2023/06/01/06/22/british-shorthair-8032816_1280.jpg",
    "hello world",
  ),
  new Post(
    "ruthbentov",
    "https://cdn.pixabay.com/photo/2023/05/01/11/48/bird-7962790_1280.jpg",
    "hello world",
  ),
  new Post(
    "ruthBentov",
    "https://cdn.pixabay.com/photo/2023/05/31/18/15/st-stephens-basilica-8031985_1280.jpg",
    "hello world",
  ),
  new Post(
    "ruthbentov",
    "https://cdn.pixabay.com/photo/2023/01/16/19/13/laptop-7723139_1280.jpg",
    "hello world",
  ),
];

postsArray.forEach((element) => {
  element.renderNewPost();
});

const doingLike = (event) => {
  let idElem: string = event.target.parentNode.parentNode.id;
  let LikeNum = event.target.parentNode.querySelector("p");
  LikeNum.innerHTML++;
  updateInObject(idElem);
};

const updateInObject = (idElem: string) => {
  let postById = postsArray.find((elem) => elem.id == idElem);
  try {
    if (!postById) throw new Error();
    postById?.addLike();
  } catch (error) {
    console.error(error);
  }
};
