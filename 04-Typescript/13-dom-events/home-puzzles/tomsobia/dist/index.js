var clun = document.querySelector("body > div > div.box1 > img");
var originalSrc = clun.src; // שמירת הכתובת המקורית של התמונה
clun.addEventListener("click", function () {
    if (clun.src === originalSrc) {
        // אם התמונה הנוכחית היא התמונה המקורית, אז נחזיר לתמונה השניה
        clun.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSWYOtots3xA-Sw2ofN_Z5b6OUFdFIbNJ7VKX2FB4ghATDvupEQS5dac1UGDkr7MxxCk&usqp=CAU";
    }
    else {
        // אחרת, נחזיר לתמונה המקורית
        clun.src = originalSrc;
    }
});
console.log(clun);
