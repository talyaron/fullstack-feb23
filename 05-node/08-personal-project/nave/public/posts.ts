
interface Post{
    featuredImage:string;
    content:string;
    category:string;
}
//get tasks from server
function getPostsFromServer(){
    //get tasks from server
    

}

async function handleGetPosts() {
    try {
        const response = await fetch('/API/posts/get-posts');
        const data = await response.json();
        const posts = data.posts; // כאן אתה מביא את כל הפוסטים מהשרת
        console.log(posts);
        renderPosts(posts, document.querySelector("#posts"));
    } catch (error) {
        console.error(error);
    }
}



async function handeleAddPost(ev: any) {
    try {
        ev.preventDefault();
        const email = getEmailFromQuery();
        if (!email) throw new Error("no email");
        
        const content = ev.target.elements.content.value;
        const featuredImage = ev.target.elements.featuredImage.value;
        const category = ev.target.elements.category.value;
        const newPost = { content, featuredImage, category, email };
        console.log("New Post:", newPost);
        const response = await fetch('/API/posts/add-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        if (!response.ok) {
            throw new Error(`Server returned ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const posts = data.posts; // כאן אתה מביא את כל הפוסטים מהשרת
        console.log(posts);
        renderPosts(posts, document.querySelector("#posts"));
    } catch (error) {
        console.error(error);
    }
}

// async function handeleAddPost(ev: any) {
//     try {
//         ev.preventDefault();

//         const email = getEmailFromQuery();
//         if (!email) throw new Error("no email");
        
//         const content = ev.target.elements.content.value;
//         const featuredImage = ev.target.elements.featuredImage.value;
//         const category = ev.target.elements.category.value;

        
        
//         console.log("Title:", content);
//         console.log("PostUrl:", featuredImage);
//         console.log("PostCategory:", category);

        
        
//         const newPost = { content, featuredImage, category, email };
//         console.log("New Post:", newPost);

//         const response = await fetch('/API/posts/add-post', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newPost)
//         });
//         if (!response.ok) {
//             throw new Error(`Server returned ${response.status} ${response.statusText}`);
//         }
        
//         const data = await response.json();
//         const {posts} = data.posts; // כאן אתה מביא את כל הפוסטים מהשרת
// ;
//         // const { posts } =  await response.json();
//         console.log("Posts:", posts);

//         renderPosts(posts, document.querySelector("#posts"));
//     } catch (error) {
//         console.error(error);
//     }
// }
function renderPost(post:Post) {
    try {
        const html = `<img src="${post.featuredImage}" alt="${post.content}">
<p>${post.category}</p>`;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}

// Function to render the post with a content
function renderPostWithTitle(posts:Post) {
    try {
        const html = `
        <div class="post_container">
        <div class="post">
        <img src="${posts.featuredImage}" alt="${posts.content}">
        <h2 class = "headPost">${posts.content}</h2>
        <p class="categoryPost">${posts.category}</p>
        </div>
    </div>
        `;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}


function renderPosts(posts: Post[], DIVElem: HTMLDivElement) {
    try {
        if (!DIVElem) throw new Error("no div element");
        let html = "<ul>";
html += posts.map(post => renderPostWithTitle(post)).join("");
html += "</ul>";

        DIVElem.innerHTML = html;
    } catch (error) {
        console.error(error);
        return "";
    }
}