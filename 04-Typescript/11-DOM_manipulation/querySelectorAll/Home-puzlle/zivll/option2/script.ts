class ImageItem {
  url: string;
  constructor(url) {
    this.url = url;
  }

  render() {
    const container = document.querySelector("#imageContainer");
    const imgElement = document.createElement("img");
    imgElement.src = this.url;
    if (container) {
      container.appendChild(imgElement);
    }
  }
}

// Task 2: Get five image URLs from the user and print five images on the DOM
const imageUrls = [];
for (let i = 0; i < 5; i++) {
  const url = prompt(`Enter image URL ${i + 1}:`);
  imageUrls.push(url);
}

const imageItems = imageUrls.map((url) => new ImageItem(url));
imageItems.forEach((item) => item.render());
