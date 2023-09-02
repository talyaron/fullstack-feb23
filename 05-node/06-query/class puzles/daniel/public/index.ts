// Utilizing a singular entity, the user shall have the capacity to seamlessly
//  incorporate images into the designated webpage, leveraging the server infrastructure for this purpose.
//   Furthermore, the user will possess the capability to perform comprehensive CRUD operations on their
//    respective images,
//  thereby ensuring a comprehensive and refined user experience.

interface _Img {
    imgUrl: string;
    id?: string;
}


async function handleAddImg(event:any){
 try {
    event.preventDefault();
    const imgUrl = event.target.imgUrl.value;

    if(!imgUrl) throw new Error("Please enter an image URL");

    const img: _Img = {imgUrl}
    const response = await fetch('/API/img/add-img',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(img)
    })
    
    const result = await response.json();
    console.log(result);
    
 } catch (error) {
    console.error(error.message);
 }
}


async function getImgs(){
    try {
        const response = await fetch('API/img/get-img')
        const result = await response.json();
        const { images } = result;
        if(!Array.isArray(images)) throw new Error("images are not array")
        console.log(images)
        console.log(result);
        return images;
        
    } catch (error) {
        console.error(error);
        return []
    }
}

function renderImgHtml(img: _Img) {
    try {
        const html = `<div class="img-container">
        <h2>Image Url</h2>
        <img src = "${img.imgUrl}">
        </div>
        <form id="${img.id}" onsubmit="handleUpdateImg(event)">
              <input type="url" name="imgUrl" value="${img.imgUrl}" placeholder="Image url">
              <button type="submit">Update</button>
        </form>
        <button onclick="handleDeleteImg('${img.id}')">Delete</button>
        `
        return html;
    } catch (error) {
        console.error(error);
        return ""
    }
}

function renderImages(images: _Img[], HTMLElement:HTMLDivElement){
    try {
        if(!HTMLElement) throw new Error("HTMLElement not found")
        console.log(images)
    if (!Array.isArray(images)) throw new Error("images are not array");
    const imagesHTML = images.map(img => renderImgHtml(img)).join("")
    HTMLElement.innerHTML = imagesHTML;
    } catch (error) {
        console.error(error)
    }
}

async function handleGetImg(){
    const images = await getImgs();

    const rootImg = document.querySelector("#rootImg");
    renderImages(images, rootImg as HTMLDivElement)
}


async function handleDeleteImg(id:string){
 try {
    const response = await fetch('/API/img/delete-img',{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ id })
    });
    const result = await response.json();
    const { images } = result;

    renderImages(images, document.querySelector("#rootImg"))

 } catch (error) {
    console.error(error)
 }
}

async function handleUpdateImg(ev:any) {
    try {
        ev.preventDefault();
        const imgUrl = ev.target.imgUrl.value;
        const id = ev.target.id;
        console.log(id, imgUrl);
        
        const response = await fetch('/API/img/update-img',{
            method: 'PATCH',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({id, imgUrl})
        });

        const result = await response.json();
        console.log(result);
        const { images } = result;
        renderImages(images, document.querySelector("#rootImg") as HTMLDivElement)
        
    } catch (error) {
        console.error(error)
    }
}