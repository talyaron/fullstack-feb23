//Instegram Posts page.
//MVC - Model View Controller
var image = getImgsFromLocalStorage();
// const usersArray = getUsersFromLocalStorage();
console.log(usersArray);
function showPosts(HTMLElement, user) {
    try {
        if (!HTMLElement)
            throw new Error('Root element is not found');
        var html = user.map(function (user) {
            return "\n        <div class=\"userPost\">\n            <div class=\"userPost__name\">\n            <img src=\"" + user.imageProfile + "\">\n            <h3>" + user.name + "</h3>\n            </div>\n              <div class=\"userPost__img\">\n                <img src=\"" + user.images + "\">\n              </div>\n            </div>";
        }).join('');
        HTMLElement.innerHTML = html;
        // saveImgToLocalStorage(imagesArray);
        // saveUserToLocalStorage(user);
    }
    catch (error) {
        console.error(error);
    }
}
showPosts(document.querySelector('#posts'), usersArray);
//creat header (working)
function showHeader(HTMLElement, user) {
    try {
        if (!HTMLElement)
            throw new Error('Root element is not found');
        var html = user.map(function (user) {
            return "\n      <div class=\"header\">\n        <div class=\"header__user\">\n        <div class=\"header__user--image\">\n          <img src=\"" + user.imageProfile + "\">\n        </div>\n          <h3>" + user.name + "</h3>\n        </div>\n      </div>";
        }).join('');
        HTMLElement.innerHTML = html;
        // saveImgToLocalStorage(imagse);
        saveUserToLocalStorage(user);
        // localStorage.setItem('usersArray', JSON.stringify(usersArray));
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
