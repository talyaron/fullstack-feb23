// 1) 1 entity, CRUD, make it betfull with CSS.
// 2) 2 eneties ,with joins, CRUD, two pages that share the model.
//Instegram Profile page.
//MVC - Model View Controller
//class - user, image.
function showPosts(HTMLElement, user) {
    try {
        if (!HTMLElement)
            throw new Error('Root element is not found');
        var html = user.map(function (user) {
            return "\n        <div class=\"userPost\">\n            <div class=\"userPost__name\">\n            <img src=\"" + user.imageProfile + "\">\n            <h3>" + user.name + "</h3>\n            </div>\n              <div class=\"userPost__img\">\n                <img src=\"" + user.images + "\">\n              </div>\n            </div>";
        }).join('');
        HTMLElement.innerHTML = html;
        localStorage.setItem('imagesArray', JSON.stringify(imagesArray));
        localStorage.setItem('usersArray', JSON.stringify(usersArray));
    }
    catch (error) {
        console.error(error);
    }
}
showPosts(document.querySelector('#posts'), usersArray);
//creat header
function showHeader(HTMLElement, user) {
    try {
        if (!HTMLElement)
            throw new Error('Root element is not found');
        var html = user.map(function (user) {
            return "\n      <div class=\"header\">\n        <div class=\"header__user\">\n        <div class=\"header__user--image\">\n          <img src=\"" + user.imageProfile + "\">\n        </div>\n          <h3>" + user.name + "</h3>\n        </div>\n      </div>";
        }).join('');
        HTMLElement.innerHTML = html;
        localStorage.setItem('usersArray', JSON.stringify(usersArray));
    }
    catch (error) {
        console.error(error);
    }
}
showHeader(document.querySelector('#header'), usersArray);
//view - show the user profile.
//create a new user profile.
//create a new post(image).
//controller - add new user to the array.
//add new post to the user profile.
//show the user profile.
