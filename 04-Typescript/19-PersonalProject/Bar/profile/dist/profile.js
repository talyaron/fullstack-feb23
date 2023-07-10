// 1) 1 entity, CRUD, make it betfull with CSS.
// 2) 2 eneties ,with joins, CRUD, two pages that share the model.
//Instegram Profile page.
//MVC - Model View Controller
//class - user, image.
function showUserImg(HTMLElement, userImg) {
    try {
        if (!HTMLElement)
            throw new Error('Root element is not found');
        var html = userImg.map(function (userImg) {
            return " <div class=\"userPost\">\n            <div class=\"userPost__name\">\n            <img src=\"" + userImg.user.imageProfile + "\">\n            <h3>" + userImg.user.name + "</h3>\n            </div>\n              <div class=\"userPost__img\">\n                <img src=\"" + userImg.user.imageProfile + "\">\n              </div>\n            </div>";
        }).join('');
        HTMLElement.innerHTML = html;
        localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
    }
    catch (error) {
        console.error(error);
    }
}
showUserImg(document.querySelector('#profile'), userImgArray);
//view - show the user profile.
//create a new user profile.
//create a new post(image).
//controller - add new user to the array.
//add new post to the user profile.
//show the user profile.
