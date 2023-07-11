// 1) 1 entity, CRUD, make it betfull with CSS.
// 2) 2 eneties ,with joins, CRUD, two pages that share the model.
//Instegram Profile page.
//MVC - Model View Controller
//class - user, image.
// function showUserImg(
//     HTMLElement: HTMLElement | Element | null,
//     userImg: UserImg[]) {
//     try {
//         if (!HTMLElement) throw new Error('Root element is not found');
//         const html =
//             userImg.map((userImg) => {
//             return ` <div class="userPost">
//             <div class="userPost__name">
//             <img src="${userImg.user.imageProfile}">
//             <h3>${userImg.user.name}</h3>
//             </div>
//               <div class="userPost__img">
//                 <img src="${userImg.user.imageProfile}">
//               </div>
//             </div>`;
//             }).join('');
//         HTMLElement.innerHTML = html;
//         localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
//     } catch (error) {
//         console.error(error);
//     }
// }
// showUserImg(document.querySelector('#profile'), userImgArray);
function showUserImg(HTMLElement, imageArray) {
    try {
        if (!HTMLElement)
            throw new Error('Root element is not found');
        var html = imageArray
            .map(function (image) {
            return "\n          <div class=\"userPost\">\n            <div class=\"userPost__name\">\n              <img src=\"" + image.user.imageProfile + "\">\n              <h3>" + image.user.name + "</h3>\n            </div>\n            <div class=\"userPost__img\">\n              " + image.image.map(function (img) { return "<img src=\"" + img.image + "\">"; }).join('') + "\n            </div>\n          </div>\n        ";
        })
            .join('');
        HTMLElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
// הוספת פוסט חדש למערך imageArray
var newImage = new Img(imageUrl, '');
imageArray.push(newImage);
// קריאה לפונקציה showUserImg עם המערך המעודכן
showUserImg(document.querySelector('#profile'), imageArray);
// עדכון המידע ב-LocalStorage
localStorage.setItem('images', JSON.stringify(imageArray));
// הוספת פוסט חדש למערך userImgArray
var newUserImg = new UserImg(selectedUser, [newImage]);
userImgArray.push(newUserImg);
// קריאה לפונקציה showUserImg עם הפוסט המעודכן
showUserImg(document.querySelector('#profile'), userImgArray);
//view - show the user profile.
//create a new user profile.
//create a new post(image).
//controller - add new user to the array.
//add new post to the user profile.
//show the user profile.
