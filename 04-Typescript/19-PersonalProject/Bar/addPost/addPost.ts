//get the users and the imagse from local storage
const imagse = getImgsFromLocalStorage();
const users = getUsersFromLocalStorage();

console.log(imagesArray);


// <input class="addPost__enterNewImage" type="submit">Add Post>
//Add new post and render
function renderAddNewPost(users: User[], rootElement: HTMLElement | Element | null) {
  try {
    if (!rootElement) throw new Error('Root element is not found');
    const html = `
      <form class="addPost" onsubmit="handleAddNewPost(event)">
        <select class="addPost__select" name="userId" id="user" required>
          ${users.map((user) => {
      return `<option value="${user.id}">${user.name}</option>`;
    })
        .join('')}
        </select>
        <input class="addPost__input" type="text" name="image" placeholder="Image URL" required>
        <input class="addPost__enterNewImage" type="submit" value="ADD">
        </form>`;
        
    rootElement.innerHTML = html;

    // localStorage.setItem('Users', JSON.stringify(usersArray));
  } catch (error) {
    console.error(error);
  }
}
renderAddNewPost(usersArray, document.querySelector('#addPost'));

//get the new post from the form, and add it to the user.
//render it in 'showPosts'.
//is not working.
function handleAddNewPost(ev: Event | any) {
  try {
    // debugger;
    if (!ev) throw new Error('Event is not found');
    ev.preventDefault();
    const userId = ev.target.elements.userId.value;
    const image = ev.target.elements.image.value;

    const selectedUser:User|undefined = usersArray.find((u) => u.id === userId);

    if (!selectedUser) throw new Error('User not found');

    const newImg = new Img(image);
    selectedUser.images.push(newImg);
    console.log(usersArray)

    saveImgToLocalStorage(imagesArray);
    saveUserToLocalStorage(usersArray);
    console.log(usersArray);

    //render the new post in 'showPosts'
    showPosts(document.querySelector('#posts'), usersArray);
  } catch (error) {
    console.error(error);
    return error;
  }
}
handleAddNewPost(event);