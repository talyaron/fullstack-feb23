//adding nw post.
function addNewPost(users, rootElement) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        var html = "\n        <form class=\"addPost\" onsubmit=\"handleAdd(event)\">\n          <select class=\"select\" name=\"user\" id=\"user\" required>\n            " + users
            .map(function (user) {
            return "<option value=\"" + user.id + "\">" + user.name + "</option>";
        })
            .join('') + "\n          </select>\n          <input class=\"input\" type=\"text\" name=\"image\" placeholder=\"Image URL\" required>\n          <button class=\"enterNewImage\">+</button>\n        </form>";
        rootElement.innerHTML = html;
        localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
    }
    catch (error) {
        console.error(error);
    }
}
addNewPost(usersArray, document.querySelector('#addPost'));
