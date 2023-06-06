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

  NewPostHtml(locate: string): string {
    return `<div class="post" id = "${this.id}">
    <div class="text">
    <p class="author">@${this.author}</p>
    <p class="paragraph">${this.text}</p>
    </div>
    <img src=${this.imgSrc} alt="">
    <div class="likesDiv">
      <span onclick="doingLike(event)" class="material-symbols-outlined">favorite</span>
      <p>${this.getLikes()}</p>
    </div>
    </div>`;
  }

  renderNewPost(number: number) {
    const galleryRight = document.querySelector(".gallery__right");
    const galleryCenter = document.querySelector(".gallery__center");
    const galleryLeft = document.querySelector(".gallery__left");
    if (number % 3 == 0) {
      galleryRight!.innerHTML += this.NewPostHtml("right");
    }
    if (number % 3 == 1) {
      galleryCenter!.innerHTML += this.NewPostHtml("center");
    }
    if (number % 3 == 2) {
      galleryLeft!.innerHTML += this.NewPostHtml("left");
    }
  }
}

const postsArray: Post[] = [
  new Post(
    "RacheLevtov691",
    "https://images.pexels.com/photos/8723490/pexels-photo-8723490.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "see the sea",
  ),
  new Post(
    "PhotoRacheLevtov",
    "https://images.pexels.com/photos/17094724/pexels-photo-17094724.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "till the end",
  ),
  new Post(
    "Avinoam1",
    "https://images.pexels.com/photos/14089860/pexels-photo-14089860.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "31 in february was beauty ...",
  ),
  new Post(
    "Ruth_BenTov2",
    "https://images.pexels.com/photos/14718937/pexels-photo-14718937.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "Hello World",
  ),
  new Post(
    "Mira_Vise_nature",
    "https://images.pexels.com/photos/16771334/pexels-photo-16771334/free-photo-of-garden-pot-leaf-flowerpot.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "my little flowers <3",
  ),
  new Post(
    "Yahav_official",
    "https://images.pexels.com/photos/16534784/pexels-photo-16534784/free-photo-of-latte-on-pink-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "COFFEE TIME!",
  ),
  new Post(
    "godman_man345",
    "https://images.pexels.com/photos/17111340/pexels-photo-17111340/free-photo-of-city-water-street-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    " Love Italy ...",
  ),
  new Post(
    "Ribeka_photographer",
    "https://images.pexels.com/photos/16981071/pexels-photo-16981071/free-photo-of-city-man-people-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "old  pure human ...",
  ),
  new Post(
    "Amitai_BenTov15",
    "https://images.pexels.com/photos/12513296/pexels-photo-12513296.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "hello world:)",
  ),
  new Post(
    "Ruth#",
    "https://images.pexels.com/photos/9390250/pexels-photo-9390250.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "old School",
  ),
  new Post(
    "Ravit_lady",
    "https://images.pexels.com/photos/17117466/pexels-photo-17117466.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "lovely day, opening with flowers",
  ),
  new Post(
    "Daniella_kurz6",
    "https://images.pexels.com/photos/14093120/pexels-photo-14093120.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "...",
  ),
  new Post(
    "Lotem4",
    "https://images.pexels.com/photos/17107350/pexels-photo-17107350.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "DAD see ;)",
  ),
  new Post(
    "ruthbentov123456",
    "https://images.pexels.com/photos/17048927/pexels-photo-17048927/free-photo-of-wood-light-road-dawn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "MORNING",
  ),
];

let i = 0;
postsArray.forEach((element) => {
  element.renderNewPost(i);
  i++;
});

const doingLike = (event) => {
  let elem = event.target;
  let idElem: string = event.target.parentNode.parentNode.id;
  let LikeNum = event.target.parentNode.querySelector("p");
  LikeNum.innerHTML++;
  updateInObject(idElem);
};

function updateInObject(idElem: string) {
  let postById = postsArray.find((elem) => elem.id == idElem);
  try {
    if (!postById) throw new Error();
    postById?.addLike();
    console.log(postById);
  } catch (error) {
    console.error(error);
  }
}
