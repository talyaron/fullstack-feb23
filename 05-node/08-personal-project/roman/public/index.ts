async function handleAddUser(ev) {
    try {
        ev.preventDefault();
        const username = ev.target.username.value
        const email = ev.target.email.value
        console.log(username, email);

        const response = await fetch('/API/users/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email })
        });
        const result = await response.json();
        handleGetUsers();


    } catch (error) {
        console.error(error)
    }


}
async function handleGetUsers() {
    try {
        const response = await fetch("/api/users/get-users")
        const { users: fetchedUsers } = await response.json()
        console.log("handle get users", fetchedUsers)
        renderUsers(fetchedUsers);
    } catch (error) {
        console.error(error)
    }



}

function renderUsers(users) {
    try {
        let html = '<table border="1">';

        html += `
        <tr>
            <th>Username</th>
            <th>Email</th>
            <th></th>
            <th></th>
         
        </tr>
    `;

        users.forEach(user => {
            html += `
            <tr >
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td><buttoN id="${user._id}" onclick ="handleEdit(event)">Edit</button></td>
                <td><buttoN id="${user._id}" onclick ="handleDelete(event)">Delete</button></td>
               
                
            </tr>
        `;
        });

        html += '</table>';

        const root = document.querySelector(".users");
        root.innerHTML = html;
    } catch (error) {
        console.error(error)
    }
}


async function handleDelete(event) {
    try {
        const id = event.target.id;
        console.log(id);

        // delete by path + id
        const response = await fetch(`/api/users/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            handleGetUsers();
            console.log('User deleted successfully');
        } else {

            console.error('Error deleting user');
        }
    } catch (error) {
        console.error(error);
    }
}

async function handleEdit(event) {
    try {
        const id = event.target.id;
        const response = await fetch(`/api/users/${id}`, {
            method: 'GET', // Use the GET method
        });

        if (response.ok) {
            const userData = await response.json();
            let html = `<form id="${id}" onsubmit='handleSave(event)'>`
            html += `<input type="text" name="username" value="${userData.users.username}"></input>
                <input type="text" name="email" value="${userData.users.email}"></input>
                <input type="submit"></input>`
            html += "</form>"
            document.querySelector(".userEdit").innerHTML = html;
            // console.log(userData.users)
        } else {

            console.error('Error fetching user data');
        }
    } catch (error) {
        console.error(error);
    }
}

async function handleSave(ev) {
    try {
        ev.preventDefault();
        const form = ev.target;
        const id = form.id; // Get the id from the form's id input
        const username = form.username.value;
        const email = form.email.value;
        const data = {username, email, id};

        const response = await fetch(`/api/users/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // Convert data to JSON and send in the request body
        });

        if (response.ok) {
            handleGetUsers();
            document.querySelector(".userEdit").innerHTML = "";
            console.log('User data updated successfully');
        } else {
            // Handle errors here
            console.error('Error updating user data');
        }
    } catch (error) {
        console.error(error);
    }
}
