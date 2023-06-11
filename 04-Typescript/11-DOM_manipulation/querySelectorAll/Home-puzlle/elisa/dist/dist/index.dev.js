"use strict";

function getImageUrlFromUser() {
  // Get the user input
  var imageUrl = prompt('Enter an image URL: ');

  if (!imageUrl) {
    // Check if the user input is valid
    return;
  } // Create a new image element


  var imageElement = document.createElement('img'); // Set the image element's src attribute to the user input

  imageElement.src = imageUrl; // Append the image element to the DOM

  document.body.appendChild(imageElement);
}

getImageUrlFromUser(); // https://lh5.googleusercontent.com/p/AF1QipNgwKznOsp4It9oyzyxIm5IpiDtjK5qLEbwtOSh=w548-h318-n-k-no
// https://lh5.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=w548-h318-n-k-no
// https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRxGIUtQz6k2kZzDR4YkXnfLDuuvRO-2kyncGJrBf3s14oCs8Hwtd2qruuj0ryZb9d9058r9ODKWjlL4StQKZKsfITk0g
// https://lh5.googleusercontent.com/p/AF1QipOCqBHgVqIS-Mw4j1mS1U3rkKDQ9u5FqoZ_4I8=w548-h318-n-k-no
// https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQBrJJ2Sexp8ukAfcXe4r6AKKXIbGE8Qb_TWI-kHwYLcO9U6yGibFcD1K3qUlU9BdTR262NMsfgD2SkMP_mGyCOgF9h6g