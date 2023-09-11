// Function to handle logout
async function handleLogout() {
    try {
        const response = await fetch("API/user/log-out", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
        if (!data.ok) {
            throw new Error(data.message);
        }
        BackHome();
    } catch (error) {
        console.error(error);
    }
}

function BackHome() {
    location.href = "/index.html";
}
//get all not Admin users
async function getAllUsers() {
    try {
        const response = await fetch("API/user/get-all-users");
        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.message);
        }
        const { allUsers } = data;
        return allUsers;
    } catch (error) {
        console.error(error);  
    }
}
async function renderAllUsers() {
    try {
        const users = await getAllUsers();
     if (!users) {    throw new Error("Users Not Found"); }
     renderUsersList(users);
        
    } catch (error) {
        console.error(error);
    }
}
function renderUsersList(users: any[]) {
    try {
        const updateUserDiv = document.querySelector("#updateUserDiv") as HTMLDivElement;
        if (!updateUserDiv) throw new Error("updateUserDiv root not found");


        //create div for select user
        const selectUserDiv = document.createElement('div');
        selectUserDiv.id = 'selectUserDiv';
        updateUserDiv.appendChild(selectUserDiv);

        // Create a select element to choose a user
        const selectUser = document.createElement('select');
        selectUser.id = 'selectUser';

        // Create options for each user
        users.forEach((user: { _id: string; email: string | null; }) => {
            const option = document.createElement('option');
            option.value = user._id; // Assuming each user has a unique ID
            option.textContent = user.email; // Change this to the user's name or other identifier
            selectUser.appendChild(option);
        });

        // Create update button
        const updateButton = document.createElement('button');
        updateButton.className = 'updateUserBtn';
        updateButton.textContent = 'Update';
     
        updateButton.onclick = async () => {
            debugger;
            const selectUser = document.querySelector('#selectUser') as HTMLSelectElement;
            const selectedUserId = selectUser.value;
        
            // Call a function to open the update user form and populate it with user details
            await openUpdateUserForm(selectedUserId);
        };

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteUserBtn';
        deleteButton.textContent = 'Delete';
        //deleteButton.onclick = async () => await handleDeleteUser();

        // Append select and buttons to updateUserDiv
        selectUserDiv.appendChild(selectUser);
        selectUserDiv.appendChild(updateButton);
        selectUserDiv.appendChild(deleteButton);
    } catch (error) {
        console.error(error);
    }
}
async function openUpdateUserForm(userId: string) {
    try {
        // Fetch user details based on the userId from the API
        const response = await fetch(`API/user/get-user-details?userId=${userId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
debugger
        if (!data.ok) {
            throw new Error(data.message);
        }

        const userDetails = data.user; // Assuming the API response contains user details

        // Create a form for updating user details
        const updateUserForm = document.createElement('form');
        updateUserForm.id = 'updateUserForm';

        // Create input fields for user details
        const emailInput = document.createElement('input');
        emailInput.type = 'text';
        emailInput.name = 'email';
        emailInput.value = userDetails.email;

        const passwordInput = document.createElement('input');
        passwordInput.type = 'password';
        passwordInput.name = 'password';
        passwordInput.value = userDetails.password;

        const isAdminInput = document.createElement('input');
        isAdminInput.type = 'checkbox';
        isAdminInput.name = 'isAdmin';
        isAdminInput.checked = userDetails.isAdmin;

        // Create a submit button to update user details
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Update User';

        // Add input fields and submit button to the form
        updateUserForm.appendChild(emailInput);
        updateUserForm.appendChild(passwordInput);
        updateUserForm.appendChild(isAdminInput);
        updateUserForm.appendChild(submitButton);

        // Event handler for updating user details
        updateUserForm.onsubmit = async (event) => {
            event.preventDefault();

            // Get updated user details from the form
            const updatedUser = {
                newEmail: emailInput.value,
                newPassword: passwordInput.value,
                isAdmin: isAdminInput.checked,
            };

            // Send a request to update the user details based on the userId
            const response = await fetch(`API/user/update-user?userId=${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),
            });

            const responseData = await response.json();

            if (!responseData.ok) {
                throw new Error(responseData.message);
            }

            alert("User details updated successfully");

            // clean the updateUserDiv
            debugger
            const selectUserDiv = document.querySelector("#selectUserDiv") as HTMLDivElement;
            const userdetailsDiv= document.querySelector("#userdetailsDiv") as HTMLDivElement;
            if (!selectUserDiv || !userdetailsDiv) throw new Error("selectUserDiv|userdetailsDiv root not found");
            selectUserDiv.innerHTML = '';
            userdetailsDiv.innerHTML = '';  
            

            // Close the update user form and potentially refresh the user list
            updateUserForm.remove();
            // You may want to refresh the user list here
        };

        // Append the form to the userdetailsDiv
        const userDetailsDiv = document.querySelector('#userdetailsDiv');
        if (!userDetailsDiv) throw new Error("userdetailsDiv root not found");
        userDetailsDiv.innerHTML = '';
        userDetailsDiv.appendChild(updateUserForm);
    } catch (error) {
        console.error(error);
    }
}

// Render "Hello User" for logged-in user
async function renderHelloUser() {
    try {
        const logInUser = await getCurrentUser();
        if (!logInUser) {
            throw new Error("User Not Found");
        }
        const helloUser = document.querySelector("#helloUser") as HTMLDivElement;
        const updateUserDiv=document.querySelector("#updateUserDiv") as HTMLDivElement; 
        if (!helloUser) throw new Error("helloUser root not found");
        helloUser.innerHTML = `Welcome <span class="welcome-message">${logInUser.email}</span>`;
        // if user isAdmin create button to show all users and can updte admin
        if (logInUser.isAdmin) {
            const showAllUsersButton = document.createElement('button');
            showAllUsersButton.className = 'showAllUsersBtn';
            showAllUsersButton.textContent = 'Show All Users';
            showAllUsersButton.onclick = async () => await renderAllUsers();
            updateUserDiv.appendChild(showAllUsersButton);
        }   
       
    } catch (error) {
        console.error(error);
    }
}

async function getCurrentUser() {
    try {
        const response = await fetch("API/user/get-log-in-user");
        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.message);
        }
        const { logInUser } = data;
        return logInUser;
    } catch (error) {
        console.error(error);
    }
}


// Function to render a blog
async function handleAddBlog(event: any) {
    try {
        event.preventDefault();
        const blogTitle = event.target.blogTitle.value;
        const blogDescription = event.target.blogDescription.value;
        const user = await getCurrentUser();
        const userEmail = user.email;

        const response = await fetch("API/blog/add-blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: blogTitle, description: blogDescription, userEmail }),
        });
        const data = await response.json();

        console.log(data);
        if (!data.ok) {
            throw new Error(data.message);
        }
        alert("Blog added");
        
    } catch (error) {
        console.error(error);
    }
}

async function handleDeleteBlog(blogId: any, fromWhereICome: string) {
    try {
        const response = await fetch("API/blog/delete-blog", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ blogId }),
        });
        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.message);
        }
        alert("Blog deleted");
        if (fromWhereICome === "myBlogs") {
            renderMyBlogs();
        } else {
            renderAllBlogs();
        }
    } catch (error) {
        console.error(error);
    }
}

async function renderAllBlogs() {
    try {
        const user = await getCurrentUser();
        if (!user) {
            throw new Error("User Not Found");
        }

        const response = await fetch("API/blog/get-all-blogs");
        const data = await response.json();

        if (!data.ok) {
            throw new Error(data.message);
        }

        const { blogList } = data;
        const blogContainer = document.querySelector("#blogContainer") as HTMLDivElement;
        if (!blogContainer) throw new Error("blogContainer root not found");
        
        blogContainer.innerHTML = '';

        blogList.forEach((blog) => {
            const isUserBlog = blog.userEmail === user.email;
            renderBlogItem(blog, isUserBlog, user.isAdmin, 'AllBlogs', blog.userEmail, blogContainer);
        });
    } catch (error) {
        console.error(error);
    }
}

async function renderMyBlogs() {
    try {
        const user = await getCurrentUser();
        if (!user || !user.email) {
            throw new Error("User email not found.");
        }

        const response = await fetch(`API/blog/get-my-blogs?userEmail=${encodeURIComponent(user.email)}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (!data.ok) {
            alert("You currently do not have a blog.");
            return;
        }

        const { blogList } = data;
        const blogContainer = document.querySelector("#blogContainer") as HTMLDivElement;
        if (!blogContainer) throw new Error("blogContainer root not found");

        blogContainer.innerHTML = '';

        blogList.forEach((blog) => {
            const isUserBlog = true;
            renderBlogItem(blog, isUserBlog, user.isAdmin, 'myBlogs', user.email, blogContainer);
        });
    } catch (error) {
        console.error(error);
    }
}


function renderBlogItem(blog: any, isUserBlog: boolean, isAdmin: boolean, fromWhereICome: string, userEmail: string, container: HTMLDivElement) {
    const blogContainer = container;
    const blogElement = document.createElement('div');
    blogElement.innerHTML = `
        <h2 class="blogTitle">${blog.title}</h2>
        <p class="blogDescription">${blog.description}</p>
        <p> Author: ${userEmail}</p>
    `;

    if (isAdmin || isUserBlog) {
        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteBlog';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = async () => await handleDeleteBlog(blog._id, fromWhereICome);
        blogElement.appendChild(deleteButton);
    }

    blogContainer.appendChild(blogElement);
}
