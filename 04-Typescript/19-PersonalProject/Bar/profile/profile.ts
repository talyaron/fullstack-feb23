//Instegram Posts page.
//MVC - Model View Controller

const image: Img[] = getImgsFromLocalStorage();
const user: User[] = getUsersFromLocalStorage();
const usersImg: UsersImg[] = getUsersImgFromLocalStorage();

// console.log(usersArray);
//Error free.
function showPosts(
  HTMLElement: HTMLElement | null,
  users: User[],
) {
  try {
    if (!HTMLElement) throw new Error('Root element is not found');

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
                <button class="deleteBtn" onclick="handleDeletePost('${img.id}')">Delete</button>
                <button class="editBtn" onclick="handleEditPost('${img.id}')">Edit</button>
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
  }
}
showPosts(document.querySelector('#posts'), usersArray);

//view - show the user profile.
//creat header (working)
//Error free.
function showHeader(
  HTMLElement: HTMLElement | Element | null,
  user: User[]) {
  try {
    if (!HTMLElement) throw new Error('Root element is not found');
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

    // saveUserToLocalStorage(usersArray);
    saveUsersImgToLocalStorage(usersImgArray);
  } catch (error) {
    console.error(error);
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
  }
}


// //edit post.
//edit post.
function handleEditPost( imageId: string) {
  try {
    const user = usersArray.find((user) => user.imagse.some((img) => img.id === imageId));
    if (!user) throw new Error('User or image not found');

    const image = user.imagse.find((img) => img.id === imageId);
    if (!image) throw new Error('Image not found');

    const newImageURL = prompt('Enter new image URL:');

    if (newImageURL) {
      image.image = newImageURL;
      saveImgToLocalStorage(imagesArray);
      saveUserToLocalStorage(usersArray);
      saveUsersImgToLocalStorage(usersImgArray);
      showPosts(document.querySelector('#posts'), usersArray);
    }
  } catch (error) {
    console.error(error);
  }
}
