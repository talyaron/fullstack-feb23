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
          <button type="submit" class="addPost__enterNewImage">Add Post</button>
        </form>`;

    rootElement.innerHTML = html;

    localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
  } catch (error) {
    console.error(error);
  }
}

addNewPost(usersArray, document.querySelector('#addPost'));

//add image url to the userImgArray of the user.
function handleAdd(event: Event) {
  try {
    if (!event) throw new Error('Event is not found');
    event.preventDefault();

    const target = event.target as typeof event.target & {
      user: { value: string };
      image: { value: string };
    };

    const user = usersArray.find((user) => user.id === target.user.value);
       
    if (!user) throw new Error('User not found');

    const image = new Img(target.image.value);
    const userImg = new UserImg(user, [image]);
    userImgArray.push(userImg);

    showUserImg(document.querySelector('#profile'), userImgArray);

    // location.href = "profile.html"
  } catch (error) {
    console.error(error);
  }
}