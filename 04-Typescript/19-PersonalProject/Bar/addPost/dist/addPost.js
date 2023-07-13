//get the users and the imagse from local storage
var imagse = getImgsFromLocalStorage();
var users = getUsersFromLocalStorage();
console.log(imagesArray);
// <input class="addPost__enterNewImage" type="submit">Add Post>
//Add new post and render
function renderAddNewPost(users, rootElement) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        var html = "\n      <form class=\"addPost\" onsubmit=\"handleAddNewPost(event)\">\n        <select class=\"addPost__select\" name=\"userId\" id=\"user\" required>\n          " + users.map(function (user) {
            return "<option value=\"" + user.id + "\">" + user.name + "</option>";
        })
            .join('') + "\n        </select>\n        <input class=\"addPost__input\" type=\"text\" name=\"image\" placeholder=\"Image URL\" required>\n        <input class=\"addPost__enterNewImage\" type=\"submit\" value=\"ADD\">\n        </form>";
        rootElement.innerHTML = html;
        // localStorage.setItem('Users', JSON.stringify(usersArray));
    }
    catch (error) {
        console.error(error);
    }
}
renderAddNewPost(usersArray, document.querySelector('#addPost'));
//get the new post from the form, and add it to the user.
//render it in 'showPosts'.
//is not working.
function handleAddNewPost(ev) {
    try {
        // debugger;
        if (!ev)
            throw new Error('Event is not found');
        ev.preventDefault();
        var userId_1 = ev.target.elements.userId.value;
        var image = ev.target.elements.image.value;
        var selectedUser = usersArray.find(function (u) { return u.id === userId_1; });
        if (!selectedUser)
            throw new Error('User not found');
        var newImg = new Img(image);
        selectedUser.images.push(newImg);
        console.log(usersArray);
        saveImgToLocalStorage(imagesArray);
        saveUserToLocalStorage(usersArray);
        console.log(usersArray);
        //render the new post in 'showPosts'
        showPosts(document.querySelector('#posts'), usersArray);
    }
    catch (error) {
        console.error(error);
        return error;
    }
}
handleAddNewPost(event);
