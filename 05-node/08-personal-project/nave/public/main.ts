function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}
const email = getEmailFromQuery();
console.log(email)

function handleGetUserPosts(){
    getUserPosts(email);
}
async function getUserPosts(email:string) {
    try {
        const response = await fetch(`/API/users/get-users-post?email=${email}`);
        const data = await response.json();
        console.log(data)
        renderPosts(data.posts, document.querySelector("#posts"));
    } catch (error) {
        console.error(error);
    }
}
