var clown = document.querySelector("body > div > div.box1 > img");
var originalSrc = clown.src;
clown.addEventListener("click", function () {
    if (clown.src === originalSrc) {
        clown.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSWYOtots3xA-Sw2ofN_Z5b6OUFdFIbNJ7VKX2FB4ghATDvupEQS5dac1UGDkr7MxxCk&usqp=CAU";
    }
    else {
        clown.src = originalSrc;
    }
});
console.log(clown);
