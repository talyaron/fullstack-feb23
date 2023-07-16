//get the users and the imagse from local storage.
// console.log(imagesArray);
//create a new post(image).
//Error free.
function renderAddNewPost(users, rootElement) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        var html = "\n      <form class=\"addPost\" onsubmit=\"handleAddNewPost(event)\">\n        <select class=\"addPost__select\" name=\"user\" id=\"userId\" required>\n          " + users
            .map(function (user) {
            return "<option value=\"" + user.id + "\">" + user.name + "</option>";
        })
            .join('') + "\n        </select>\n        <input class=\"addPost__input\" type=\"text\" name=\"image\" placeholder=\"Image URL\" required>\n        <button class=\"addPost__enterNewImage\" type=\"submit\">Add Post</button>\n      </form>";
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
renderAddNewPost(usersArray, document.querySelector('#addPost'));
//get the new post from the form, and add it to the user.
//render it in 'showPosts'.
//Error free.
function handleAddNewPost(event) {
    try {
        if (!event)
            throw new Error('Event is not found');
        event.preventDefault();
        var userId_1 = event.target.elements.userId.value;
        var image = event.target.elements.image.value;
        var user = usersArray.find(function (u) { return u.id === userId_1; });
        if (!user)
            throw new Error('User not found');
        var newImg = new Img(image);
        user.imagse.push(newImg);
        saveImgToLocalStorage(imagesArray);
        saveUserToLocalStorage(usersArray);
        saveUsersImgToLocalStorage(usersImgArray);
        console.log(usersArray);
        //render the new post in 'showPosts'
        showPosts(document.querySelector('#posts'), usersArray);
        //move to the profile page.
        window.location.href = '../profile/profile.html';
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
