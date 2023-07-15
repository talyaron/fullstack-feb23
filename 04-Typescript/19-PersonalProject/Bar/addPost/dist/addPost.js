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
        // const user: User | undefined = usersArray.find((u) => u.id === userId);
        var selectedUserImg = usersImgArray.find(function (userImg) { return userImg.user.id === userId_1; });
        // if (!user) throw new Error('User not found');
        if (!selectedUserImg)
            throw new Error('User not found');
        // const newImg = new Img(image);
        // user.images.push(newImg);
        var newImg = new Img(image);
        selectedUserImg.image.push(newImg);
        saveImgToLocalStorage(imagesArray);
        saveUserToLocalStorage(usersArray);
        saveUsersImgToLocalStorage(usersImgArray);
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
