function handleGetUser() {
    var toHtml = document.querySelector('#userRoot');
    var html = "\n    <h2>Add User</h2>\n    <form onsubmit=\"handleAddUser(event)\">\n        <input type=\"text\" name=\"name\" placeholder=\"user name\">\n        <input type=\"number\" name='phoneNum' placeholder=\"phoneNum\">\n        <input type=\"url\" name=\"imgUrl\" placeholder=\"Image URL\">\n        <button type=\"submit\">ADD</button>\n    </form>";
<<<<<<< HEAD
    toHtml.innerHTML = html;
=======
    toHtml.innerHTML += html;
>>>>>>> tamar-grop
}
