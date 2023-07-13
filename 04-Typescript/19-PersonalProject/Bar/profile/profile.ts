//Instegram Posts page.
//MVC - Model View Controller

const image = getImgsFromLocalStorage();
// const usersArray = getUsersFromLocalStorage();
console.log(usersArray);

function showPosts(
  HTMLElement: HTMLElement | Element | null,
  user: User[]) {
  try {
    if (!HTMLElement) throw new Error('Root element is not found');

    const html =
      user.map((user) => {
        return `
        <div class="userPost">
            <div class="userPost__name">
            <img src="${user.imageProfile}">
            <h3>${user.name}</h3>
            </div>
              <div class="userPost__img">
                <img src="${user.images}">
              </div>
            </div>`;
      }).join('');
    HTMLElement.innerHTML = html;

    // saveImgToLocalStorage(imagesArray);
    // saveUserToLocalStorage(user);
  } catch (error) {
    console.error(error);
  }
}
showPosts(document.querySelector('#posts'), usersArray);

//creat header (working)
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

    // saveImgToLocalStorage(imagse);
    saveUserToLocalStorage(user);
    // localStorage.setItem('usersArray', JSON.stringify(usersArray));
  } catch (error) {
    console.error(error);
  }
}
showHeader(document.querySelector('#header'), usersArray);

//view - show the user profile.
//create a new user profile.
//create a new post(image).
//controller - add new user to the array.
//add new post to the user profile.
//show the user profile.