//adding nw post.
function addNewPost(users: User[], rootElement: HTMLElement | Element | null) {
    try {
      if (!rootElement) throw new Error('Root element is not found');
      const html = `
        <form class="addPost" onsubmit="handleAdd(event)">
          <select class="select" name="user" id="user" required>
            ${users
              .map((user) => {
                return `<option value="${user.id}">${user.name}</option>`;
              })
              .join('')}
          </select>
          <input class="input" type="text" name="image" placeholder="Image URL" required>
          <button class="enterNewImage">+</button>
        </form>`;
  
      rootElement.innerHTML = html;
  
      localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
    } catch (error) {
      console.error(error);
    }
  }
  
  addNewPost(usersArray, document.querySelector('#addPost'));
  