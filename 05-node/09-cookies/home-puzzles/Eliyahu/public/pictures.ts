async function getPictures() {
    try {
        const response = await fetch('API/pictures/get-pictures')
        const result = await response.json()
        const { pictures } = result
        if (!Array.isArray(pictures)) throw new Error("pictures is not array");
        renderPictures(pictures)

        const showAllBtn = document.querySelector('#showAll') as HTMLButtonElement
        showAllBtn.style.display='none'
    } catch (error) {
        console.error(error.massage);
    }
}

getPictures()
async function handleGetUser() {
    try {
        const response = await fetch("API/users/get-user");
        const data = await response.json();
        const { user } = data

    } catch (error) {
        console.error(error.massage);
    }
}

// const emailUser = window.location.search.toString().replace('?email=', '')

async function handleAddPicture(ev: any) {
    try {
        ev.preventDefault()

        const imageTags = [];
        document.querySelectorAll('input[type=checkbox]:checked').forEach(ev => imageTags.push(ev.attributes[2].value));

        const _picture = {
            title: ev.target.title.value,
            imgUrl: ev.target.imgUrl.value,
            location: ev.target.location.value,
            tags: imageTags,
            // area: ev.target.area.value,
            newTag: ev.target.newTag.value,
        }


        if (!_picture.title || !_picture.imgUrl || !_picture.location || !_picture.tags) throw new Error("Please complete all details");

        const response = await fetch(`/API/pictures/add-picture`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_picture)
        })

        const result = await response.json()
        const { pictures } = result

        renderPictures(pictures)

    } catch (error) {
        console.error(error)
    }
}


async function handleDeletePicture(id: string) {
    try {
        const response = await fetch('API/pictures/delete-picture', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id })
        })
        const result = await response.json()
        const { pictures } = result
        renderPictures(pictures)

    } catch (error) {
        console.error(error.massage);
    }
}

async function handleUpdatePicture(ev: any) {
    try {
        ev.preventDefault()
        const title = ev.target.editTitle.value
        const imgUrl = ev.target.editImgUrl.value
        const location = ev.target.editLocation.value

        const tags: string[] = []
        const testes = document.querySelectorAll(".editTags") as NodeListOf<HTMLSelectElement>
        testes.forEach(select => {
            const output = select.value
            if (output) {
                tags.push(output)
            }
        })

        const id = ev.target.id

        const response = await fetch('API/pictures/update-picture', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, imgUrl, location, tags, id })
        })

        const result = await response.json()
        const { pictures } = result

        renderPictures(pictures)

    } catch (error) {
        console.error(error.massage);
    }
}

async function renderAddPicture() {
    try {
        const response = await fetch('API/pictures/get-tags')
        const result = await response.json()
        const { tags } = result
        if (!Array.isArray(tags)) throw new Error("tags is not array");


        // <div>
        // <p>באיזה אזור בארץ צולמה התמונה? </p>
        // <input type="radio" name="area" value="north">
        // <label for="north">צפון</label>
        // <input type="radio" name="area" value="center">
        // <label for="north">מרכז</label>
        // <input type="radio" name="area" value="south">
        // <label for="north">דרום</label>
        // </div>



        let html = `<form onsubmit="handleAddPicture(event)">
        <input type="text" name="title" placeholder="נושא" required>
        <input type="url" name="imgUrl" placeholder="קישור לתמונה">
        <input type="text" name="location" placeholder="היכן צולמה התמונה?">
       
        <div class="tags" id="tags">
        <p>בחר תגיות לתמונה:</p>`
        tags.forEach(tag => html += ` <div>
        <input type="checkbox" name="tags" value="${tag}">
        <label for="${tag}">${tag}</label>
        </div>`)

        html += `<input type="text" name="newTag" placeholder="הזן תגית חדשה">
        </div>
       <div>
            <button type="submit" class="material-symbols-rounded">check</button>
            <button onclick="closeAdd()" class="material-symbols-rounded">close</button>
        </div>
        </form>`
        const root = document.querySelector('#add')
        root.innerHTML = html

    } catch (error) {
        console.error(error.massage);
    }
}

function closeAdd() {
    try {
        const root = document.querySelector('#add')
        root.innerHTML = ''
    } catch (error) {
        console.error(error.massage);

    }
}


function renderPictureHtml(picture, pictureEmail: string, userEmail:string) {
    try {
       
        let html = `<div class = "picture" id="id${picture._id}">
        <div class = "picture_header">
        <div></div>
        <h3 >${picture.title}</h3>`
        // if (emailUser === 'admin@gmail.com') {
        //     html += `<p>${picture.userName}</p>
        //     <button class="material-symbols-rounded" onclick="renderUpdatePicture('${picture.title}','${picture.imgUrl}','${picture.location}','${picture._id}','${picture.tags.join(' ')}')">Edit</button>
        //     <button class="material-symbols-rounded" onclick="handleDeletePicture('${picture._id}')">delete</button>
        //     `
        // } else {

            if (pictureEmail === userEmail) {
                html += `<p>תמונה שלי</p>
                <button class="material-symbols-rounded" onclick="renderUpdatePicture('${picture.title}','${picture.imgUrl}','${picture.location}','${picture._id}','${picture.tags.join(' ')}')">Edit</button>
                <button class="material-symbols-rounded" onclick="handleDeletePicture('${picture._id}')">delete</button>
                `
            } else {
                html += `<p>${picture.userName}</p>`
            }
        // }

        html += `
        </div>
        <img id="img${picture._id}" onclick="handleShow('${picture._id}','${picture.imgUrl}' )" src="${picture.imgUrl}">
        <div class = "picture_body">
        <p>${picture.location}</p>
        <p> ${picture.publishDate}</p>
        </div>
        <div class="tags">`
        picture.tags.forEach(tag => html += `<button onclick="handleRenderByTag('${tag}')">${tag}</button>`)

        html += `</div>
        </div>`

        return html
    } catch (error) {
        console.error(error.massage);
    }
}

function handleShow(id:string, imgUrl:string){
    try {
        const divRoot = document.querySelector(`#id${id}`) as HTMLDivElement
        divRoot.innerHTML+=`<button id="btnClose" onclick="getPictures()" class="material-symbols-rounded">close</button>`
        const imgRoot = document.querySelector(`#img${id}`) as HTMLImageElement
        const btnCloseRoot = document.querySelector(`#btnClose`) as HTMLButtonElement
        divRoot.style.position = 'absolute'
        divRoot.style.top='5%'
        divRoot.style.width='80%'
        divRoot.style.height='90%'
        divRoot.style.zIndex='1'
        imgRoot.style.width = '85%'
        imgRoot.style.height = '80%'
        imgRoot.style.pointerEvents='none'
        imgRoot.style.marginTop='5px'
        imgRoot.style.borderRadius='5%'
        btnCloseRoot.style.position='absolute'
        btnCloseRoot.style.left='1%'
        btnCloseRoot.style.top='50%'
    } catch (error) {
        console.error(error.massage);
        
    }
}

async function handleRenderByUser() {
    try {
        const response = await fetch(`API/pictures/get-pictures-by-user`)
        const result = await response.json()
        const { pictures } = result
        if (!Array.isArray(pictures)) throw new Error("pictures is not array");


        renderPictures(pictures)
        const showAllBtn = document.querySelector('#showAll') as HTMLButtonElement
        showAllBtn.style.display='inline-flex'
        // const html = `<button id ="showAll" onclick="getPictures()">הצג הכל</button>`
        // const allPicturesRoot = document.querySelector('#allPictures')
        // allPicturesRoot.innerHTML += html

    } catch (error) {
        console.error(error.massage);

    }
}

async function handleRenderByTag(tag: string) {
    try {

        const response = await fetch(`API/pictures/get-pictures-by-tag?tag=${tag}`)
        const result = await response.json()
        const { pictures } = result
        if (!Array.isArray(pictures)) throw new Error("pictures is not array");

        // const picturesByTag = pictures.filter(el => el.picture.tags.includes(tag))

        renderPictures(pictures)
        const showAllBtn = document.querySelector('#showAll') as HTMLButtonElement
        showAllBtn.style.display='inline-flex'
        // const html = `<button id ="showAll" onclick="getPictures()">הצג הכל</button>`
        // const allPicturesRoot = document.querySelector('#allPictures')
        // allPicturesRoot.innerHTML += html

    } catch (error) {
        console.error(error.massage);
    }
}

async function renderPictures(pictures) {
    try {

        const response = await fetch("API/users/get-user");
        const data = await response.json();
        const { user } = data
        
        if (!Array.isArray(pictures)) throw new Error("usersPictures is not array");

        const allPicturesRoot = document.querySelector('#allPictures') as HTMLDivElement
        const allPicturesHtml = pictures.map(picture => renderPictureHtml(picture, picture.email,user.email)).join('')
        allPicturesRoot.innerHTML = allPicturesHtml

        closeAdd()

    } catch (error) {
        console.error(error.massage);
    }
}



async function renderUpdatePicture(title: string, imgUrl: string, location: string, id: string, tagsAsString: string) {
    try {
        const response = await fetch('API/pictures/get-tags')
        const result = await response.json()
        const { tags } = result
        if (!Array.isArray(tags)) throw new Error("tags is not array");

        let html = `<div class="edit">
        <form id="${id}" onsubmit="handleUpdatePicture(event)">
        <label for="${title}">עריכת נושא</label>
        <textarea name="editTitle" id="${title}" cols="20" rows="1">${title}</textarea>
        <label for="${imgUrl}">עריכת קישור</label>
        <textarea name="editImgUrl" id="${imgUrl}" cols="20" rows="1">${imgUrl}</textarea>
        <label for="${location}">עריכת מיקום</label>
        <textarea name="editLocation" id="${location}" cols="20" rows="1">${location}</textarea>
        `
        const chosenTags = tagsAsString.split(' ')


        html += chosenTags.map(tag => {
            let html = `
        <label>עריכת תגיות</label>

            <select class="editTags" id = "editTags" name="editTags">
            <option value="${tag}">${tag}</option>`
            const otherTags = tags.filter(ta => ta !== tag)
            html += otherTags.map(t => {
                let ht = `<option value="${t}">${t}</option>`
                return ht
            }).join('')
            html += `<option value="">מחק תגית</option>
            </select> `
            return html
        }).join('')


        html += `
        <button type="submit" class="material-symbols-rounded">check</button>
        </div>`
        const editRoot = document.querySelector(`#id${id}`) as HTMLDivElement
        editRoot.innerHTML = html
    } catch (error) {
        console.error(error.massage);

    }
}

async function renderNav() {
    try {

        const response = await fetch("API/users/get-user");
        const data = await response.json();
        const { ok, user } = data

        if (!ok) throw new Error("Some of details are incorrect");

    //     if (emailUser === 'admin@gmail.com') {
    //         const html = `<div class="nav">
    //     <p>Admin</p>
    //     <a class="logout material-symbols-rounded" href="./index.html">Logout</a>
    // </div>`
    //         const root = document.querySelector('#nav') as HTMLDivElement
    //         root.innerHTML = html

    //     }

        const html = `<div class="nav">
        <p>${user.name}</p>
        <a class="logout material-symbols-rounded" href="./index.html">Logout</a>
    </div>`
        const root = document.querySelector('#nav') as HTMLDivElement
        root.innerHTML = html
    } catch (error) {
        console.error(error.massage);

    }
}

renderNav()