
interface _Post{
    featuredImage:string;
    content:string;
    category:string;
}


async function handleGetPosts() {
    try {
        const response = await fetch('/API/posts/get-posts');
        const { posts } = await response.json();
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

        
        
        console.log("Title:", content);
        console.log("PostUrl:", featuredImage);
        console.log("PostUrl:", category);

        
        
        const newPost = { content, featuredImage,category, email };
        console.log("New Post:", newPost);

        const response = await fetch('http://localhost:3000/API/posts/add-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        

        const { posts } = await response.json();
        console.log("Posts:", posts);

        renderPosts(posts, document.querySelector("#posts"));
    } catch (error) {
        console.error(error);
    }
}
function renderPost(post: _Post) {
    try {
        const html = `<img src="${post.featuredImage}" alt="${post.content}">
        <p> = "${post.category}"`;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}

// Function to render the post with a content
function renderPostWithTitle(post: _Post) {
    try {
        const html = `
            <div>
                <h2>${post.content}</h2>
                <img src="${post.featuredImage}" alt="${post.category}">
                <p>  "${post.category}"
            </div>
        `;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}

function renderPosts(posts: _Post[], DIVElem: HTMLDivElement) {
    try {
        if (!DIVElem) throw new Error("no div element");
        let html = "<ul>";

        // Render each post with title
        html += posts.map(post => `<li>${renderPostWithTitle(post)}</li>`).join("");

        html += "</ul>";
        DIVElem.innerHTML = html;
    } catch (error) {
        console.error(error);
        return "";
    }
}
