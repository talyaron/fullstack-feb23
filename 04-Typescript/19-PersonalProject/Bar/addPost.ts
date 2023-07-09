//adding nw post.
function addNewPost(
    user: User[],
    HTMLElement: HTMLElement | Element | null) {
    try {
        if (!HTMLElement) throw new Error('Root element is not found');
        const html = `
        <form class="addPost" onsubmit="handleAdd(event)">
        <select name="user" id="user" required>
        ${user.map((user) => {
            return `<option value="${user.id}">${user.name}</option>`;
        }).join('')}
          <input type="text" name="image" placeholder="Image URL" required>
          <button class="enterNewImage">+</button>
          </form>`;

        HTMLElement.innerHTML = html;

        localStorage.setItem('userImgArray', JSON.stringify(userImgArray));
    }
    catch (error) {
        console.error(error);
    }
}
addNewPost(userImgArray, document.querySelector('#addPost'));