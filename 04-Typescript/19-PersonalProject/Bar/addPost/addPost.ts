//adding nw post.
function addNewPost(users: User[], rootElement: HTMLElement | Element | null) {
  try {
    if (!rootElement) throw new Error('Root element is not found');
    const html = `
      <form class="addPost" onsubmit="handleAdd(event, ${JSON.stringify(users)}, ${JSON.stringify(userImgArray)})">
        <select class="addPost__select" name="user" id="user" required>
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

    localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
  } catch (error) {
    console.error(error);
  }
}
addNewPost(usersArray, document.querySelector('#addPost'));


//add image url to the userImgArray of the user.
function handleAdd(event: Event| null, users: User[], userImgArray: UserImg[]) {
  try {
    event.preventDefault();
    const user = event.target.elements.user.value;
    const image = event.target.elements.image.value;

    const userImg = userImgArray.find((userImg) => userImg.user.id === user);

    if (!userImg) throw new Error('User is not found');

    userImg.images.push(image);

    localStorage.setItem('userImgArray', JSON.stringify(userImgArray));

    showUserImg(document.querySelector('#profile'), userImgArray);
  } catch (error) {
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