// // תרגיל 1
// function getImageUrlFromUser() {
//   const imageUrl = prompt('Enter an image URL: ');
//   if (!imageUrl) {
//     return;
//   }

//   const imageElement = document.createElement('img');

//   imageElement.src = imageUrl;

//   document.body.appendChild(imageElement);
// }

// // תרגיל 2

class ImageItem {
  constructor(public url: string) {}

  render(): void {
    const img = document.createElement('img');
    img.src = this.url;
    document.getElementById('imageContainer')?.appendChild(img);
  }
}
function addImages(): void {
  const imageItems: ImageItem[] = [];

  for (let i = 0; i < 5; i++) {
    const imageUrl = prompt(`Enter image URL ${i + 1}:`);

    if (imageUrl) {
      const imageItem = new ImageItem(imageUrl);
      imageItems.push(imageItem);
    }
  }

  renderImages(imageItems);
}
function renderImages(imageItems: ImageItem[]): void {
  imageItems.forEach((imageItem) => {
    imageItem.render();
  });
}

addImages();

// https://lh5.googleusercontent.com/p/AF1QipNgwKznOsp4It9oyzyxIm5IpiDtjK5qLEbwtOSh=w548-h318-n-k-no
// https://lh5.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=w548-h318-n-k-no
// https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRxGIUtQz6k2kZzDR4YkXnfLDuuvRO-2kyncGJrBf3s14oCs8Hwtd2qruuj0ryZb9d9058r9ODKWjlL4StQKZKsfITk0g
// https://lh5.googleusercontent.com/p/AF1QipOCqBHgVqIS-Mw4j1mS1U3rkKDQ9u5FqoZ_4I8=w548-h318-n-k-no
// https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQBrJJ2Sexp8ukAfcXe4r6AKKXIbGE8Qb_TWI-kHwYLcO9U6yGibFcD1K3qUlU9BdTR262NMsfgD2SkMP_mGyCOgF9h6g
