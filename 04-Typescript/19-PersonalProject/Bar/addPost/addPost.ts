function renderAddNewPost(users: User[], rootElement: HTMLElement | Element | null) {
  try {
    if (!rootElement) throw new Error('Root element is not found');
    const html = `
      <form class="addPost" onsubmit="handleAddNewPost(event)">
        <select class="addPost__select" name="user" id="user" required>
          ${users.map((user) => {
          return `<option value="${user.id}">${user.name}</option>`;
        })
        .join('')}
        </select>
        <input class="addPost__input" type="text" name="image" placeholder="Image URL" required>
        <button class="addPost__enterNewImage" type="submit">Add Post</button>
      </form>`;

    rootElement.innerHTML = html;

    localStorage.setItem('Users', JSON.stringify(usersArray));
  } catch (error) {
    console.error(error);
  }
}
renderAddNewPost(usersArray, document.querySelector('#addPost'));

function handleAddNewPost(event: any) {
  try {
    if (!event) throw new Error('Event is not found');

    event.preventDefault();
    const user = event.target.elements.user.value;
    const image = event.target.elements.image.value;

    const selectedUser  = usersArray.find((u) => u.id === user);

    if (!selectedUser ) throw new Error('User not found');

    const newImg = new Img(image);
    imagesArray.push(newImg);

    selectedUser.images.push(newImg);

    saveImgToLocalStorage(imagesArray);
    saveUserToLocalStorage(usersArray);
    // localStorage.setItem('images', JSON.stringify(imagesArray));
    // localStorage.setItem('users', JSON.stringify(usersArray));

    showPosts(document.querySelector('#posts'), usersArray);
    
  } catch (error) {
    console.error(error);
    return error;
  }
}