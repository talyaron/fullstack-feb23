function renderAddNewPost(users, rootElement) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        var html = "\n      <form class=\"addPost\" onsubmit=\"handleAddNewPost(event)\">\n        <select class=\"addPost__select\" name=\"user\" id=\"user\" required>\n          " + users.map(function (user) {
            return "<option value=\"" + user.id + "\">" + user.name + "</option>";
        })
            .join('') + "\n        </select>\n        <input class=\"addPost__input\" type=\"text\" name=\"image\" placeholder=\"Image URL\" required>\n        <button class=\"addPost__enterNewImage\" type=\"submit\">Add Post</button>\n      </form>";
        rootElement.innerHTML = html;
        localStorage.setItem('Users', JSON.stringify(usersArray));
    }
    catch (error) {
        console.error(error);
    }
}
renderAddNewPost(usersArray, document.querySelector('#addPost'));
function handleAddNewPost(event) {
    try {
        if (!event)
            throw new Error('Event is not found');
        event.preventDefault();
        var user_1 = event.target.elements.user.value;
        var image = event.target.elements.image.value;
        var selectedUser = usersArray.find(function (u) { return u.id === user_1; });
        if (!selectedUser)
            throw new Error('User not found');
        var newImg = new Img(image);
        imagesArray.push(newImg);
        selectedUser.images.push(newImg);
        localStorage.setItem('images', JSON.stringify(imagesArray));
        localStorage.setItem('users', JSON.stringify(usersArray));
        showPosts(document.querySelector('#posts'), usersArray);
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
