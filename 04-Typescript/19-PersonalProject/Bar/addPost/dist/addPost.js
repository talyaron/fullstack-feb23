//adding nw post.
function addNewPost(users, rootElement) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        var html = "\n      <form class=\"addPost\" onsubmit=\"handleAdd(event, " + JSON.stringify(users) + ", " + JSON.stringify(userImgArray) + ")\">\n        <select class=\"addPost__select\" name=\"user\" id=\"user\" required>\n          " + users
            .map(function (user) {
            return "<option value=\"" + user.id + "\">" + user.name + "</option>";
        })
            .join('') + "\n        </select>\n        <input class=\"addPost__input\" type=\"text\" name=\"image\" placeholder=\"Image URL\" required>\n        <button class=\"addPost__enterNewImage\" type=\"submit\">Add Post</button>\n      </form>";
        rootElement.innerHTML = html;
        localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
    }
    catch (error) {
        console.error(error);
    }
}
addNewPost(usersArray, document.querySelector('#addPost'));
//add image url to the userImgArray of the user.
function handleAdd(event, users, userImgArray) {
    try {
        event.preventDefault();
        var user_1 = event.target.elements.user.value;
        var image = event.target.elements.image.value;
        var userImg = userImgArray.find(function (userImg) { return userImg.user.id === user_1; });
        if (!userImg)
            throw new Error('User is not found');
        userImg.images.push(image);
        localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
        showUserImg(document.querySelector('#profile'), userImgArray);
    }
    catch (error) {
        console.error(error);
    }
}
// function handleToProfile(ev: any) {
//   try {
//       ev.preventDefault();
//       console.dir(ev);
//       location.href = "profile.html"
//   } catch (error) {
//       console.error(error);
//   }
// };
