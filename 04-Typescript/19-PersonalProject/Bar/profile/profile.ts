//Instegram Posts page.
//MVC - Model View Controller

const image: Img[] = getImgsFromLocalStorage();
const user: User[] = getUsersFromLocalStorage();
const usersImg: UsersImg[] = getUsersImgFromLocalStorage();

// console.log(usersArray);
//Error free.
function showPosts(
  HTMLElement: HTMLElement | null,
  users: User[]
) {
  try {
    if (!HTMLElement) throw new Error('Root element is not found');

    const html = users
      .map((user) => {
        const postsHtml = user.images
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
                <button class="deleteBtn" onclick="handleDeletePost('${user.id}')">Delete</button>
                <button class="editBtn" onclick="handleEditPost('${user.id}')">Edit</button>
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

// function handleDeletePost(userId: string, postId: string) {
//   try {
//     const user = usersArray.find((user) => user.id === userId);
//     if (!user) throw new Error('User not found');

//     const postIndex = user.images.findIndex((img) => img.id === postId);
//     if (postIndex === -1) throw new Error('Post not found');

//     user.images.splice(postIndex, 1);
//     saveUserToLocalStorage(usersArray);
//     showPosts(document.querySelector('#posts'), usersArray);
    
//   } catch (error) {
//     console.error(error);
//   }
// }

// function handleEditPost(userId: string, postId: string) {
//   try {
//     const user = usersArray.find((user) => user.id === userId);
//     if (!user) throw new Error('User not found');

//     const post = user.images.find((img) => img.id === postId);
//     if (!post) throw new Error('Post not found');

//     const newImage = prompt('Enter new image URL', post.image);
//     if (!newImage) return;

//     post.image = newImage;
//     saveUserToLocalStorage(usersArray);
//     showPosts(document.querySelector('#posts'), usersArray);
//   } catch (error) {
//     console.error(error);
//   }
// }
