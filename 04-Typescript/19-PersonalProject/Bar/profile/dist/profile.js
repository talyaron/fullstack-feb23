//Instegram Posts page.
//MVC - Model View Controller
var image = getImgsFromLocalStorage();
var user = getUsersFromLocalStorage();
var usersImg = getUsersImgFromLocalStorage();
// console.log(usersArray);
//Error free.
function showPosts(HTMLElement, users) {
    try {
        if (!HTMLElement)
            throw new Error('Root element is not found');
        var html = users
            .map(function (user) {
            var postsHtml = user.imagse
                .map(function (img) {
                return "\n              <div class=\"userPost\">\n                <div class=\"userPost__name\">\n                  <img src=\"" + user.imageProfile + "\">\n                  <h3>" + user.name + "</h3>\n                </div>\n                <div class=\"userPost__img\">\n                  <img src=\"" + img.image + "\">\n                </div>\n                <div class=\"userPost__buttons\">\n                <button class=\"deleteBtn\" onclick=\"handleDeletePost('" + img.id + "')\">Delete</button>\n                <button class=\"editBtn\" onclick=\"handleEditPost('" + img.id + "')\">Edit</button>\n              </div>\n              </div>";
            })
                .join('');
            return postsHtml;
        })
            .join('');
        HTMLElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
showPosts(document.querySelector('#posts'), usersArray);
//view - show the user profile.
//creat header (working)
//Error free.
function showHeader(HTMLElement, user) {
    try {
        if (!HTMLElement)
            throw new Error('Root element is not found');
        var html = user.map(function (user) {
            return "\n      <div class=\"header\">\n        <div class=\"header__user\">\n        <div class=\"header__user--image\">\n          <img src=\"" + user.imageProfile + "\">\n        </div>\n          <h3>" + user.name + "</h3>\n        </div>\n      </div>";
        }).join('');
        HTMLElement.innerHTML = html;
        // saveUserToLocalStorage(usersArray);
        saveUsersImgToLocalStorage(usersImgArray);
    }
    catch (error) {
        console.error(error);
    }
}
showHeader(document.querySelector('#header'), usersArray);
//delete post.
function handleDeletePost(imageId) {
    try {
        var user_1 = usersArray.find(function (user) { return user.imagse.some(function (img) { return img.id === imageId; }); });
        if (!user_1)
            throw new Error('User or image not found');
        var imageIndex = user_1.imagse.findIndex(function (img) { return img.id === imageId; });
        if (imageIndex === -1)
            throw new Error('Image not found');
        user_1.imagse.splice(imageIndex, 1);
        saveImgToLocalStorage(imagesArray);
        saveUserToLocalStorage(usersArray);
        saveUsersImgToLocalStorage(usersImgArray);
        showPosts(document.querySelector('#posts'), usersArray);
    }
    catch (error) {
        console.error(error);
    }
}
// //edit post.
//edit post.
function handleEditPost(imageId) {
    try {
        var user_2 = usersArray.find(function (user) { return user.imagse.some(function (img) { return img.id === imageId; }); });
        if (!user_2)
            throw new Error('User or image not found');
        var image_1 = user_2.imagse.find(function (img) { return img.id === imageId; });
        if (!image_1)
            throw new Error('Image not found');
        var newImageURL = prompt('Enter new image URL:');
        if (newImageURL) {
            image_1.image = newImageURL;
            saveImgToLocalStorage(imagesArray);
            saveUserToLocalStorage(usersArray);
            saveUsersImgToLocalStorage(usersImgArray);
            showPosts(document.querySelector('#posts'), usersArray);
        }
    }
    catch (error) {
        console.error(error);
    }
}
