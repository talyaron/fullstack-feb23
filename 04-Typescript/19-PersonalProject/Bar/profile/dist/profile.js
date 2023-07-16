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
            var postsHtml = user.images
                .map(function (img) {
                return "\n              <div class=\"userPost\">\n                <div class=\"userPost__name\">\n                  <img src=\"" + user.imageProfile + "\">\n                  <h3>" + user.name + "</h3>\n                </div>\n                <div class=\"userPost__img\">\n                  <img src=\"" + img.image + "\">\n                </div>\n                <div class=\"userPost__buttons\">\n                <button class=\"deleteBtn\" onclick=\"handleDeletePost('" + user.id + "')\">Delete</button>\n                <button class=\"editBtn\" onclick=\"handleEditPost('" + user.id + "')\">Edit</button>\n              </div>\n              </div>";
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
// function handleDeletePost(userId: string, postId: string) {
//   try {
//     const user = usersArray.find((user) => user.id === userId);
//     if (!user) throw new Error('User not found');
//     const postIndex = user.images.findIndex((img) => img.id === postId);
//     if (postIndex === -1) throw new Error('Post not found');
//     user.images.splice(postIndex, 1);
//     saveUserToLocalStorage(usersArray);
//     showPosts(document.querySelector('#posts'), usersArray);
//   } catch (error) {
//     console.error(error);
//   }
// }
// function handleEditPost(userId: string, postId: string) {
//   try {
//     const user = usersArray.find((user) => user.id === userId);
//     if (!user) throw new Error('User not found');
//     const post = user.images.find((img) => img.id === postId);
//     if (!post) throw new Error('Post not found');
//     const newImage = prompt('Enter new image URL', post.image);
//     if (!newImage) return;
//     post.image = newImage;
//     saveUserToLocalStorage(usersArray);
//     showPosts(document.querySelector('#posts'), usersArray);
//   } catch (error) {
//     console.error(error);
//   }
// }
