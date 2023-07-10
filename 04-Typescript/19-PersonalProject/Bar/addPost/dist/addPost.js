//adding nw post.
function addNewPost(users, rootElement) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        var html = "\n        <form class=\"addPost\" onsubmit=\"handleAdd(event)\">\n          <select class=\"addPost__select\" name=\"user\" id=\"user\" required>\n            " + users
            .map(function (user) {
            return "<option value=\"" + user.id + "\">" + user.name + "</option>";
        })
            .join('') + "\n          </select>\n          <input class=\"addPost__input\" type=\"text\" name=\"image\" placeholder=\"Image URL\" required>\n          <button type=\"submit\" class=\"addPost__enterNewImage\">Add Post</button>\n        </form>";
        rootElement.innerHTML = html;
        localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
    }
    catch (error) {
        console.error(error);
    }
}
addNewPost(usersArray, document.querySelector('#addPost'));
//add image url to the userImgArray of the user.
function handleAdd(event) {
    try {
        if (!event)
            throw new Error('Event is not found');
        event.preventDefault();
        var target_1 = event.target;
        var user = usersArray.find(function (user) { return user.id === target_1.user.value; });
        if (!user)
            throw new Error('User not found');
        var image = new Img(target_1.image.value);
        var userImg = new UserImg(user, [image]);
        userImgArray.push(userImg);
        showUserImg(document.querySelector('#profile'), userImgArray);
        // location.href = "profile.html"
    }
    catch (error) {
        console.error(error);
    }
}
