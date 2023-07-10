//adding nw post.
function addNewPost(users: User[], rootElement: HTMLElement | Element | null) {
  try {
    if (!rootElement) throw new Error('Root element is not found');
    const html = `
        <form class="addPost" onsubmit="handleAdd(event)">
          <select class="addPost__select" name="user" id="user" required>
            ${users
        .map((user) => {
          return `<option value="${user.id}">${user.name}</option>`;
        })
        .join('')}
          </select>
          <input class="addPost__input" type="text" name="image" placeholder="Image URL" required>
          <button class="addPost__enterNewImage">Add Post</button>
        </form>`;

    rootElement.innerHTML = html;

    localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
  } catch (error) {
    console.error(error);
  }
}

addNewPost(usersArray, document.querySelector('#addPost'));

//add image url to the userImgArray of the user.
function handleAdd(users: User[], event: Event) {
  try {
    if (!event.target) throw new Error('Missing target on event');
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const userId = target.user.value; // קבלת ה-ID של המשתמש הנבחר
    const imageUrl = target.image.value; // קבלת כתובת ה-URL שהוזנה

    const selectedUser = users.find((user) => user.id === userId); // מציאת המשתמש הנבחר לפי ה-ID
    if (!selectedUser) throw new Error('Selected user not found');

    const newImage = new Img(imageUrl, ''); // יצירת אובייקט Img חדש עם כתובת ה-URL
    selectedUser.image.push(newImage); // הוספת התמונה למערך התמונות של המשתמש

    const newUserImg = new UserImg(selectedUser, selectedUser.image); // יצירת אובייקט UserImg חדש עם המשתמש הנבחר ומערך התמונות המעודכן
    userImgArray.push(newUserImg); // הוספת האובייקט החדש למערך userImgArray

    localStorage.setItem('UserImgs', JSON.stringify(userImgArray)); // עדכון המערך של UserImgs ב-LocalStorage

    // כאן תוכלי להציג את התמונה בפרופיל, על פי הצורך שלך
  } catch (error) {
    console.error(error);
  }
}


