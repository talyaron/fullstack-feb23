interface Img {
  url: string;
  id?: string;
}

async function handleAddImg(event: any) {
  try {
    event.preventDefault();
    const url = event.target.url.value;

    if (!url) throw new Error("please enter an image url");

    const img: Img = { url };
    const response = await fetch("/API/img/add-img", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(img),
    });

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

//get imgs from server

async function getImgs() {
  try {
    const response = await fetch("/API/img/get-imgs");
    const result = await response.json();
    const { imgs } = result;

    if (!Array.isArray(imgs)) throw new Error("images are not array");
    return imgs;
  } catch (error) {
    console.error(error);
    return [];
  }
}

function renderImgHTML(img: Img) {
  try {
    const html = `<div class="imgs">
           <img src="${img.url}"/>
        </div>
        <form id=${img.id} onsubmit="updateImg(event)">
        <input type="url" name="url" value="${img.url}" placeholder="url" />
        <button type="submit">update</button>
        </form>
        <button onclick="handleDeleteImg('${img.id}')">Delete</button>`
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

function renderImgs(imgs: Img[], HTMLElement: HTMLElement) {
  try {
    if (!HTMLElement) throw new Error("HTMLElment is not found");
    if (!Array.isArray(imgs)) throw new Error("images is not array");
    const imgsHTML = imgs.map((img) => renderImgHTML(img)).join("");
    HTMLElement.innerHTML = imgsHTML;
  } catch (error) {
    console.error(error);
  }
}

async function handleGetImgs() {
  const imgs = await getImgs();

  const root = document.querySelector("#root");
  renderImgs(imgs, root as HTMLDivElement);
}

async function handleDeleteImg(id: string) {
    try {
        const response= await fetch('API/img/delete-img',{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        })
        const result = await response.json()
        const {imgs} = result

        renderImgs(imgs, document.querySelector('#root') as HTMLDivElement)
    } catch (error) {
        console.error(error)
    }
}

async function updateImg(event:any){
    try {
        event.preventDefault();
        const url= event.target.url.value;
        const id= event.target.id;
        console.log(id,url)

        const response = await fetch ('API/img/update-img',{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id,url})
        });
        const result= await response.json();
        console.log(result)
        const {imgs} = result
        renderImgs(imgs, document.querySelector(`#root`) as HTMLDivElement)

    } catch (error) {
        console.error(error)
    }
}
