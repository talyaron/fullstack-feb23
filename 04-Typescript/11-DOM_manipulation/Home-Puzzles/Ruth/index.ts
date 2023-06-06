const body = document.body;

class Post {
  author: string;
  imgSrc: string;
  text: string;
  likes: number;

  constructor(_author: string, _imgSrc: string, _text: string) {
    this.author = _author;
    this.imgSrc = _imgSrc;
    this.text = _text;
    this.likes = 0;
  }

  addLike() {
    this.likes++;
  }
  getLikes() {
    return this.likes;
  }

  NewPostHtml(): string {
    return `<div class="gallery__post">
    <h3 class="author">${this.author}</h3>
    <h3 class="author">${this.text}</h3>
    <img src=${this.imgSrc} alt="">
    <div class="likesDiv">
      <span class="material-symbols-outlined">favorite</span>
      <p>${this.getLikes()}</p>
    </div>
    </div>`;
  }

  renderNewPost() {
    const gallery = document.querySelector(".gallery");
    gallery!.innerHTML += this.NewPostHtml();
  }
}

// const post1 = new Post ("ruthbentov" , "https://cdn.pixabay.com/photo/2023/06/01/06/22/british-shorthair-8032816_1280.jpg", "hello world")
// post1.renderNewPost();
