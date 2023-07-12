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
        if (!event)
            throw new Error('Event is not found');
        event.preventDefault();
        var target_1 = event.target;
        var user_1 = users.find(function (user) { return user.id === target_1.user.value; });
        if (!user_1)
            throw new Error('User is not found');
        var userImg = userImgArray.find(function (userImg) { return userImg.user.id === user_1.id; });
        if (!userImg)
            throw new Error('UserImg is not found');
        userImg.image.push(new Img(target_1.image.value));
        // location.href = 'profile.html';
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
