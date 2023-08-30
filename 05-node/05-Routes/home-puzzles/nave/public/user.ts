function handleGetUser() {
    const toHtml = document.querySelector('#userRoot');
    const html = `
    <h2>Add User</h2>
    <form onsubmit="handleAddUser(event)">
        <input type="text" name="name" placeholder="user name">
        <input type="number" name='phoneNum' placeholder="phoneNum">
        <input type="url" name="imgUrl" placeholder="Image URL">
        <button type="submit">ADD</button>
    </form>`

    toHtml.innerHTML += html
}