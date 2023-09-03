
interface _Image{
    imgUrl:string;
    title:string;
}


async function handleGetImages() {
    try {
        const response = await fetch('/API/images/get-images');
        const { images } = await response.json();
        console.log(images);
        renderImages(images, document.querySelector("#images"));
    } catch (error) {
        console.error(error);
    }
}




async function handeleAddImg(ev: any) {
    try {
        ev.preventDefault();

        const email = getEmailFromQuery();
        if (!email) throw new Error("no email");
        
        const title = ev.target.elements.title.value;
        const imgUrl = ev.target.elements.imgUrl.value;
        
        console.log("Title:", title);
        console.log("ImgUrl:", imgUrl);
        
        const newImg = { title, imgUrl, email };
        console.log("New Image:", newImg);

        const response = await fetch('http://localhost:3000/API/imges/add-img', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newImg)
        });
        

        const { images } = await response.json();
        console.log("Images:", images);

        renderImages(images, document.querySelector("#images"));
    } catch (error) {
        console.error(error);
    }
}
function renderImage(image: _Image) {
    try {
        const html = `<img src="${image.imgUrl}" alt="${image.title}">`;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}

// Function to render the image with a title
function renderImageWithTitle(image: _Image) {
    try {
        const html = `
            <div>
                <h2>${image.title}</h2>
                <img src="${image.imgUrl}" alt="${image.title}">
            </div>
        `;
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}

function renderImages(images: _Image[], DIVElem: HTMLDivElement) {
    try {
        if (!DIVElem) throw new Error("no div element");
        let html = "<ul>";

        // Render each image with title
        html += images.map(img => `<li>${renderImageWithTitle(img)}</li>`).join("");

        html += "</ul>";
        DIVElem.innerHTML = html;
    } catch (error) {
        console.error(error);
        return "";
    }
}
