//Instegram Posts page.
//MVC - Model View Controller

//get the data from the local storage.
const image: Img[] = getImgsFromLocalStorage();
const user: User[] = getUsersFromLocalStorage();
const usersImg: UsersImg[] = getUsersImgFromLocalStorage();

//render the new post in 'showPosts'
function showPosts(
  HTMLElement: HTMLElement | null,
  users: User[],
) {
  try {
    if (!HTMLElement) throw new Error('Root element is not found');
    if (!users) throw new Error('Users not found');

    const html = users
      .map((user) => {
        const postsHtml = user.imagse
          .map((img) => {
            return `
              <div class="userPost">
                <div class="userPost__name">
                  <img src="${user.imageProfile}">
                  <h3>${user.name}</h3>
                </div>
                <div class="userPost__img">
                  <img src="${img.image}">
                </div>
                <div class="userPost__buttons">
                <button class="userPost__buttons__deleteBtn" onclick="handleDeletePost('${img.id}')">Delete</button>
                
                  <div class="userPost__buttons__editBtn">
                    <input type="text" id="imageURL_${user.id}_${img.id}" value="${img.image}">
                    <button onclick="handleSetEditPost(event, '${user.id}', '${img.id}')">Save</button>
                  </div>

                </div>
               </div>`;
          })
          .join('');

        return postsHtml;
      })
      .join('');

    HTMLElement.innerHTML = html;
  } catch (error) {
    console.error(error);
    return error;
  }
}
showPosts(document.querySelector('#posts'), usersArray);

//render the header.
function showHeader(
  HTMLElement: HTMLElement | Element | null,
  user: User[]) {
  try {
    if (!HTMLElement) throw new Error('Root element is not found');
    if (!user) throw new Error('Users not found');

    const html =
      user.map((user) => {
        return `
      <div class="header">
        <div class="header__user">
        <div class="header__user--image">
          <img src="${user.imageProfile}">
        </div>
          <h3>${user.name}</h3>
        </div>
      </div>`;
      }).join('');

    HTMLElement.innerHTML = html;

    saveUsersImgToLocalStorage(usersImgArray);
  } catch (error) {
    console.error(error);
    return error;
  }
}
showHeader(document.querySelector('#header'), usersArray);

//delete post.
function handleDeletePost(imageId: string) {
  try {
    const user: User | undefined = usersArray.find((user) => user.imagse.some((img) => img.id === imageId));
  
    if (!user) throw new Error('User or image not found');

    const imageIndex: number = user.imagse.findIndex((img) => img.id === imageId);

    if (imageIndex === -1) throw new Error('Image not found');

    user.imagse.splice(imageIndex, 1);

    saveImgToLocalStorage(imagesArray);
    saveUserToLocalStorage(usersArray);
    saveUsersImgToLocalStorage(usersImgArray);

    showPosts(document.querySelector('#posts'), usersArray);
  } catch (error) {
    console.error(error);
    return error;
  }
}

//edit post.
function handleSetEditPost(ev, userId, imageId) {
  try {
    ev.preventDefault();
    const imageUrl = ev.target.previousElementSibling.value;

    const user = usersArray.find((user) => user.id === userId);
    if (!user) throw new Error('User not found');

    const image = user.imagse.find((img) => img.id === imageId);
    if (!image) throw new Error('Image not found');

    image.image = imageUrl;

    saveImgToLocalStorage(imagesArray);
    saveUserToLocalStorage(usersArray);
    saveUsersImgToLocalStorage(usersImgArray);

    showPosts(document.querySelector('#posts'), usersArray);
  } catch (error) {
    console.error(error);
    return error;
  }
}