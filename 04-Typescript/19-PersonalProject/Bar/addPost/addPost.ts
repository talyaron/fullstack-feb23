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
    if (!event) throw new Error('Event is not found');

    event.preventDefault();
    const target = event.target as typeof event.target & {
      user: { value: string };
      image: { value: string };
    };

    const user = users.find((user) => user.id === target.user.value);

    if (!user) throw new Error('User is not found');

    const userImg = userImgArray.find((userImg) => userImg.user.id === user.id);

    if (!userImg) throw new Error('UserImg is not found');

    userImg.image.push(new Img(target.image.value));

    // location.href = 'profile.html';
    
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