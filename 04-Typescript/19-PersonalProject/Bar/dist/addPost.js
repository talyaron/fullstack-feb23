//adding nw post.
function addNewPost(user, HTMLElement) {
    try {
        if (!HTMLElement)
            throw new Error('Root element is not found');
        var html = "\n        <form class=\"addPost\" onsubmit=\"handleAdd(event)\">\n        <select name=\"user\" id=\"user\" required>\n        " + user.map(function (user) {
            return "<option value=\"" + user.id + "\">" + user.name + "</option>";
        }).join('') + "\n          <input type=\"text\" name=\"image\" placeholder=\"Image URL\" required>\n          <button class=\"enterNewImage\">+</button>\n          </form>";
        HTMLElement.innerHTML = html;
        localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
    }
    catch (error) {
        console.error(error);
    }
}
<<<<<<< HEAD
addNewPost(userImgArray, document.querySelector('#addPost'));
=======
addNewPost(usersArray, document.querySelector('#addPost'));
>>>>>>> 75a64492dae336481a89fa1bda69043756a1807a
