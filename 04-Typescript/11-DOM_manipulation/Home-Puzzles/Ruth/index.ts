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
}
