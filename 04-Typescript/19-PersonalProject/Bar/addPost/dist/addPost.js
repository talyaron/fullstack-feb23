//adding nw post.
function addNewPost(users, rootElement) {
    try {
        if (!rootElement)
            throw new Error('Root element is not found');
        var html = "\n        <form class=\"addPost\" onsubmit=\"handleAdd(event)\">\n          <select class=\"addPost__select\" name=\"user\" id=\"user\" required>\n            " + users
            .map(function (user) {
            return "<option value=\"" + user.id + "\">" + user.name + "</option>";
        })
            .join('') + "\n          </select>\n          <input class=\"addPost__input\" type=\"text\" name=\"image\" placeholder=\"Image URL\" required>\n          <button class=\"addPost__enterNewImage\">Add Post</button>\n        </form>";
        rootElement.innerHTML = html;
        localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
    }
    catch (error) {
        console.error(error);
    }
}
addNewPost(usersArray, document.querySelector('#addPost'));
//add image url to the userImgArray of the user.
function handleAdd(users, event) {
    try {
        if (!event.target)
            throw new Error('Missing target on event');
        event.preventDefault();
        var target = event.target;
        var userId_1 = target.user.value; // קבלת ה-ID של המשתמש הנבחר
        var imageUrl = target.image.value; // קבלת כתובת ה-URL שהוזנה
        var selectedUser = users.find(function (user) { return user.id === userId_1; }); // מציאת המשתמש הנבחר לפי ה-ID
        if (!selectedUser)
            throw new Error('Selected user not found');
        var newImage = new Img(imageUrl, ''); // יצירת אובייקט Img חדש עם כתובת ה-URL
        selectedUser.image.push(newImage); // הוספת התמונה למערך התמונות של המשתמש
        var newUserImg = new UserImg(selectedUser, selectedUser.image); // יצירת אובייקט UserImg חדש עם המשתמש הנבחר ומערך התמונות המעודכן
        userImgArray.push(newUserImg); // הוספת האובייקט החדש למערך userImgArray
        localStorage.setItem('UserImgs', JSON.stringify(userImgArray)); // עדכון המערך של UserImgs ב-LocalStorage
        // כאן תוכלי להציג את התמונה בפרופיל, על פי הצורך שלך
    }
    catch (error) {
        console.error(error);
    }
}
