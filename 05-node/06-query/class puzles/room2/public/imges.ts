import { images } from "../API/imges/imgesModel";

interface Image{
    imgUrl:string;
    title:string;
}


async function handleGetImages() {
    try {

        const response = await fetch('/API/imges/get-images');
        //conver response to json data
        const { imges } = await response.json();
        console.log(imges);
        renderImges(imges, document.querySelector("#imges"));
    } catch (error) {
        console.error(error);
    }
}



async function handeleAddImg(ev: any) {
    try {
        ev.preventDefault();

        const email = getEmailFromQuery();
        if (!email) throw new Error("no email");
        console.log(email)
        const title = ev.target.elements.title.value;
        const imgUrl = ev.target.elements.imgUrl.value;
        const newImg = { title, imgUrl, email };
        console.log(newImg)
        const response = await fetch('/API/imges/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTask)
        });
        const { imges } = await response.json();
        console.log(imges);

        renderImges(images, document.querySelector("#images"));
    } catch (error) {
        console.error(error);
    }
}
// function renderImage(images: Image) {
//     try {
//         const html = task.status === TaskStatus.todo
//             ? `<li onclick="handleUpdateStatus('done', '${task.id}')">${task.title} - ${task.description}</li>`
//             :
//             `<li style="text-decoration: line-through;" onclick="handleUpdateStatus('todo', '${task.id}')">${task.title} - ${task.description}</li>`;
//         return html;
//     } catch (error) {
//         console.error(error);
//         return "";
//     }
// }

function renderImges(images: Image[], DIVElem: HTMLDivElement) {
    try {
        if (!DIVElem) throw new Error("no div element");
        let html = "<div>";
        html += images.map(image => (image)).join("");
        html += "</div>";

        DIVElem.innerHTML = html;
    } catch (error) {
        console.error(error);
        return "";
    }
}