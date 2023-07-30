//create a new post(image).
function renderAddNewPost(users: User[], rootElement: HTMLElement | Element | null) {
  try {
    if (!rootElement) throw new Error('Root element is not found');
    if (!users) throw new Error('Users not found');

    const html = `
      <form class="addPost" onsubmit="handleAddNewPost(event)">
        <select class="addPost__select" name="user" id="userId" required>
          ${users
        .map((user) => {
          return `<option value="${user.id}">${user.name}</option>`;
        })
        .join('')}
        </select>
        <input class="addPost__input" type="text" name="image" placeholder="Image URL" required>
        <button class="addPost__enterNewImage" type="submit">Add Post</button>
      </form>`;

    rootElement.innerHTML = html;
  } catch (error) {
    console.error(error);
    return error;
  }
}
renderAddNewPost(usersArray, document.querySelector('#addPost'));

//get the new post from the form, and add it to the user.
//render it in 'showPosts'.
function handleAddNewPost(event: Event | any) {
  try {
    if (!event) throw new Error('Event is not found');
    event.preventDefault();
    const userId = event.target.elements.userId.value;
    const image = event.target.elements.image.value;

    const user: User | undefined = usersArray.find((u) => u.id === userId);

    if (!user) throw new Error('User not found');

    const newImg = new Img(image);
    user.imagse.push(newImg);
     
    if (!newImg) throw new Error('Image not found');

    saveImgToLocalStorage(imagesArray);
    saveUserToLocalStorage(usersArray);
    saveUsersImgToLocalStorage(usersImgArray);
    console.log(usersArray);

    //render the new post in 'showPosts'
    showPosts(document.querySelector('#posts'), usersArray);

    //move to the profile page.
    window.location.href = '../profile/profile.html';
  } catch (error) {
    console.error(error);
    return error;
  }
}