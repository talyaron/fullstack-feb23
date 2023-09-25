async function getPictures() {
    try {
        const response = await fetch('API/pictures/get-pictures')
        const result = await response.json()
        const { pictures } = result
        if (!Array.isArray(pictures)) throw new Error("pictures is not array");
        renderPictures(pictures)

        const showAllBtn = document.querySelector('#showAll') as HTMLButtonElement
        showAllBtn.style.display = 'none'
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
        let response = await fetch('API/pictures/get-tags')
        const result = await response.json()
        const { tags } = result
        if (!Array.isArray(tags)) throw new Error("tags is not array");

        response = await fetch("API/users/get-user");
        const data = await response.json();
        const { ok, user } = data
        if (!ok) throw new Error("Some of details are incorrect");
        if ((user.isPremium) || (user.isAdmin)) {
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
        } else {
            let text = "רק משתמשי פרימיום יכולים להעלות תמונות \nמעוניין לשדרג לפרימיום?";
            if (confirm(text) === true) {
                alert("בקשתך נשלחה למנהלי הגלריה")
                const html = `<p> שלום. <br> המשתמש ${user.name} מבקש לשדרג את החשבון שלו לפרימיום </p>
                <button onclick="setAsPremium('${user._id}', true)" class="material-symbols-rounded">check</button>`
                const messagesRoot = document.querySelector('#messages') as HTMLDivElement
                messagesRoot.innerHTML = html
            }
        }


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


function renderPictureHtml(picture, pictureEmail: string, userEmail: string, isAdmin: boolean) {
    try {

        let html = `<div class = "picture" id="id${picture._id}">
        <div class = "picture_header">
        <div></div>
        <h3 >${picture.title}</h3>`
        if (isAdmin) {
            html += `<p>${picture.userName}</p>
             <button class="material-symbols-rounded" onclick="renderUpdatePicture('${picture.title}','${picture.imgUrl}','${picture.location}','${picture._id}','${picture.tags.join(' ')}')">Edit</button>
             <button class="material-symbols-rounded" onclick="handleDeletePicture('${picture._id}')">delete</button>
           `
        } else {

            if (pictureEmail === userEmail) {
                html += `<p>תמונה שלי</p>
                <button class="material-symbols-rounded" onclick="renderUpdatePicture('${picture.title}','${picture.imgUrl}','${picture.location}','${picture._id}','${picture.tags.join(' ')}')">Edit</button>
                <button class="material-symbols-rounded" onclick="handleDeletePicture('${picture._id}')">delete</button>
                `
            } else {
                html += `<p>${picture.userName}</p>`
            }
        }

        html += `
        </div>
        <img id="img${picture._id}" onclick="handleShow('${picture._id}')" src="${picture.imgUrl}">
        <div class = "picture_body">
        <p>${picture.location}</p>
        <p> ${picture.publishDate}</p>
        </div>
        <div class="tags">`
        picture.tags.forEach(tag => html += `<button onclick="handleRenderByTag('${tag}')">${tag}</button>`)

        html += `
        <button class="like" onclick="toggle(this)"></button></div>
        </div>`

        return html
    } catch (error) {
        console.error(error.massage);
    }
}
function toggle(x){
    try {
        x.classList.toggle("noLike")
    } catch (error) {
        console.error(error.massage);
    }
}
function handleShow(id: string) {
    try {

        const divRoot = document.querySelector(`#id${id}`) as HTMLDivElement
        divRoot.innerHTML += `<button id="btnClose" onclick="getPictures()" class="material-symbols-rounded">close</button>`
        const imgRoot = document.querySelector(`#img${id}`) as HTMLImageElement
        const btnCloseRoot = document.querySelector(`#btnClose`) as HTMLButtonElement
        divRoot.style.position = 'absolute'
        divRoot.style.top = '5%'
        divRoot.style.width = '80%'
        divRoot.style.height = '90%'
        divRoot.style.zIndex = '1'
        divRoot.style.backgroundImage = `url("${imgRoot.src}")`
        divRoot.style.backgroundRepeat = `no-repeat`
        divRoot.style.backgroundSize = `cover`
        divRoot.style.backgroundPosition = `center`
        imgRoot.style.display = 'none'
        btnCloseRoot.style.position = 'absolute'
        btnCloseRoot.style.left = '1%'
        btnCloseRoot.style.top = '50%'
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
        showAllBtn.style.display = 'inline-flex'


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


        renderPictures(pictures)
        const showAllBtn = document.querySelector('#showAll') as HTMLButtonElement
        showAllBtn.style.display = 'inline-flex'


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
        const allPicturesHtml = pictures.map(picture => renderPictureHtml(picture, picture.email, user.email, user.isAdmin)).join('')
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

        let html = `<div class="nav">`
        if (user.isPremium) {
            html += `<p> &#11088 ${user.name}</p>`
        } else {
            if (user.isAdmin) {
                html += `<p>  &#128275; ${user.name}</p>`
            } else {
                html += ` <p>${user.name}</p>`
            }
        }
        html += `<a class="logout material-symbols-rounded" href ="./index.html"> Logout </a>
            </div>`
        const root = document.querySelector('#nav') as HTMLDivElement
        root.innerHTML = html
    } catch (error) {
        console.error(error.massage);

    }
}

renderNav()

async function isAdmin() {
    try {
        const response = await fetch("API/users/get-user");
        const data = await response.json();
        const { ok, user } = data
        if (!ok) throw new Error("Some of details are incorrect");
        const showUsersButton = document.querySelector("#showUsers") as HTMLButtonElement
        const usersRoot = document.querySelector("#users") as HTMLDivElement
        const messagesRoot = document.querySelector('#messages') as HTMLDivElement

        if (user.isAdmin) {
            showUsersButton.style.display = 'inline-flex'
            usersRoot.style.display = 'block'
            messagesRoot.style.display = 'block'
        }
    } catch (error) {
        console.error(error.massage);

    }
}
async function isPremium() {
    try {
        const response = await fetch("API/users/get-user");
        const data = await response.json();
        const { ok, user } = data
        if (!ok) throw new Error("Some of details are incorrect");
        const myPictureBtn = document.querySelector("#myPicture") as HTMLButtonElement
        if (user.isPremium) {
            myPictureBtn.style.display = 'inline-flex'
        }
    } catch (error) {
        console.error(error.massage);

    }
}

async function renderUsers() {
    try {

        const response = await fetch('API/users/get-users')
        const result = await response.json()
        const { users } = result
        if (!Array.isArray(users)) throw new Error("users is not array");
        let html = `<table>
        <tr>
        <th> שם משתמש </th>
        <th> premium </th>
        <th> admin </th>
        </tr>`
        users.forEach(user => {
            html += `
            <tr>
                <td>${user.name}</td>
                <td>`
            if (user.isPremium) {
                html += `<input type="checkbox" name="isPremium" id="premium${user._id}" checked>`
            } else {
                html += `<input type="checkbox" name="isPremium" id="premium${user._id}">`
            }
            html += `</td>
                <td>`
            if (user.isAdmin) {
                html += `<input type="checkbox" name="isAdmin" id="admin${user._id}" checked>`
            } else {
                html += `<input type="checkbox" name="isAdmin" id="admin${user._id}">`
            }
            html += `</td>
            </tr>`

        })

        html += ` </table>
        <button onclick="closeRenderUsers()" class="material-symbols-rounded">close</button>
        <button onclick="setUserProperty()" class="material-symbols-rounded">check</button>
        `

        const usersRoot = document.querySelector("#users") as HTMLDivElement
        usersRoot.style.display = 'block'
        usersRoot.style.position = 'relative'
        usersRoot.style.width = '40vw'
        usersRoot.style.height = '40vh'
        usersRoot.style.margin = 'auto'

        usersRoot.innerHTML = html

        const allPicturesRoot = document.querySelector('#allPictures') as HTMLDivElement
        allPicturesRoot.style.display = 'none'

    } catch (error) {
        console.error(error.massage);
    }
}

function closeRenderUsers() {
    try {
        const usersRoot = document.querySelector("#users") as HTMLDivElement
        usersRoot.style.display = 'none'

        const allPicturesRoot = document.querySelector('#allPictures') as HTMLDivElement
        allPicturesRoot.style.display = 'flex'
    } catch (error) {
        console.error(error.massage);
    }
}

async function setUserProperty() {
    try {
        const response = await fetch('API/users/get-users')
        const result = await response.json()
        const { users } = result
        if (!Array.isArray(users)) throw new Error("users is not array");
        users.forEach(user => {
            const id = user._id

            const isPremiumCheck = document.querySelector(`#premium${id}`) as HTMLInputElement
            const isAdminCheck = document.querySelector(`#admin${id}`) as HTMLInputElement
            if (isPremiumCheck.checked) {
                setAsPremium(id, true)
            } else {
                setAsPremium(id, false)
            }
            if (isAdminCheck.checked) {
                setAsAdmin(id, true)
            } else {
                setAsAdmin(id, false)
            }
        })

        const usersRoot = document.querySelector("#users") as HTMLDivElement
        usersRoot.style.display = 'none'

        const allPicturesRoot = document.querySelector('#allPictures') as HTMLDivElement
        allPicturesRoot.style.display = 'flex'

    } catch (error) {
        console.error(error.massage);
    }
}

async function setAsPremium(id: string, isPremium: boolean) {
    try {
        const response = await fetch('API/users/set-premium', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, isPremium })
        })
    } catch (error) {
        console.error(error.massage);
    }
}
async function setAsAdmin(id: string, isAdmin: boolean) {
    try {
        const response = await fetch('API/users/set-admin', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, isAdmin })
        })
    } catch (error) {
        console.error(error.massage);
    }
}
isAdmin()
isPremium()