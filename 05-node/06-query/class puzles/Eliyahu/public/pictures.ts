async function getPictures() {
    try {
        const response = await fetch('API/pictures/get-pictures')
        const result = await response.json()
        const { usersPictures } = result
        if (!Array.isArray(usersPictures)) throw new Error("pictures is not array");
        renderPictures(usersPictures)
    } catch (error) {
        console.error(error.massage);
    }
}

getPictures()

const emailUser = window.location.search.toString().replace('?email=', '')

async function handleAddPicture(ev: any) {
    try {
        ev.preventDefault()

        const arr = [];
        document.querySelectorAll('input[type=checkbox]:checked').forEach(ev => arr.push(ev.attributes[2].value));

        const picture = {
            title: ev.target.title.value,
            imgUrl: ev.target.imgUrl.value,
            location: ev.target.location.value,
            tags: arr,
            area: ev.target.area.value,
            emailUser
        }


        if (!picture.title || !picture.imgUrl || !picture.location || !picture.tags || !picture.area) throw new Error("Please complete all details");

        const response = await fetch('/API/pictures/add-picture', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(picture)
        })

        const result = await response.json()
        const { usersPictures } = result

        renderPictures(usersPictures)

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
        const { usersPictures } = result
        renderPictures(usersPictures)

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
        const tags = ev.target.editTags.value
        const area = ev.target.editArea.value
        const id = ev.target.id

        const response = await fetch('API/pictures/update-picture', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, imgUrl, location, tags, area, id })
        })

        const result = await response.json()
        const { usersPictures } = result

        renderPictures(usersPictures)

    } catch (error) {
        console.error(error.massage);
    }
}

const tags: string[] = ['ים', 'מדבר', 'צבי', 'מעיין']
function renderAddPicture() {
    try {
        let html = `<form onsubmit="handleAddPicture(event)">
        <input type="text" name="title" placeholder="נושא" required>
        <input type="url" name="imgUrl" placeholder="קישור לתמונה">
        <input type="text" name="location" placeholder="היכן צולמה התמונה?">
        <div>
        <p>באיזה אזור בארץ צולמה התמונה? </p>
        <input type="radio" name="area" value="north">
        <label for="north">צפון</label>
        <input type="radio" name="area" value="center">
        <label for="north">מרכז</label>
        <input type="radio" name="area" value="south">
        <label for="north">דרום</label>
        </div>
        <div class="tags" id="tags">
        <p>בחר תגיות לתמונה:</p>`
        tags.forEach(tag => html += ` <div>
        <input type="checkbox" name="tags" value="${tag}">
        <label for="${tag}">${tag}</label>
        </div>`)

        html += `<div id="bt"><button onclick="renderAddTag()">צור תגית חדשה</button></div>

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
function renderAddTag(ev: any) {
    try {
        const html = `
        <form onsubmit="handleAddTag()">
<input type="text" name="newTag" placeholder="הזן תגית חדשה">
<button type="submit">הוסף</button>
</form>`
const tagsRoot = document.querySelector('#tags') as HTMLDivElement
   tagsRoot.innerHTML+=html
   
    }
     catch (error) {
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


function renderPictureHtml(picture, user) {
    try {

        let html = `<div class = "task" id="${picture.id}">
        <div class = "task_header">
        <div></div>
        <h3 >${picture.title}</h3>`
        if (emailUser === user.email) {
            html += `<p>תמונה שלי</p>
    <button class="material-symbols-rounded" onclick="renderUpdatePicture('${picture.title}','${picture.location}','${picture.id}')">Edit</button>
    <button class="material-symbols-rounded" onclick="handleDeletePicture('${picture.id}')">delete</button>
    `
        } else {
            html += `<p>${user.name}</p>`
        }
        html += `
        </div>
        <img src="${picture.imgUrl}">
        <div class = "task_body">
        <p>${picture.location}</p>
        <p> ${picture.publishDate}</p>
        </div>
        <div class="tags">`
        picture.tags.forEach(tag => html += `<button>${tag}</button>`)

        html += `</div>
        </div>`

        return html
    } catch (error) {
        console.error(error.massage);
    }
}

function renderPictures(usersPictures) {
    try {
        if (!Array.isArray(usersPictures)) throw new Error("usersPictures is not array");
        console.log(usersPictures[0]);

        const allPicturesRoot = document.querySelector('#allPictures')
        const allPicturesHtml = usersPictures.map(userPicture => renderPictureHtml(userPicture.picture, userPicture.user)).join('')
        allPicturesRoot.innerHTML = allPicturesHtml
        // if (emailUser === 'admin@gmail.com') {
        //     const toDoTasks = usersTasks.filter(element => element.task.status === 'toDo')
        //     const toDoTasksHTML = toDoTasks.map(element => '<p style="font-weight: bold; margin-bottom: 2px;"> User:' + element.user.name + '</p>' + renderTaskHtml(element.task)).join('')
        //     toDoRoot.innerHTML = toDoTasksHTML

        //     const doingTasks = usersTasks.filter(element => element.task.status === 'doing')
        //     const doingTasksHTML = doingTasks.map(element => '<p style="font-weight: bold; margin-bottom: 2px;"> User:' + element.user.name + '</p>' + renderTaskHtml(element.task)).join('')
        //     doingRoot.innerHTML = doingTasksHTML

        //     const doneTasks = usersTasks.filter(element => element.task.status === 'done')
        //     const doneTasksHTML = doneTasks.map(element => '<p style="font-weight: bold; margin-bottom: 2px;"> User:' + element.user.name + '</p>' + renderTaskHtml(element.task)).join(``)
        //     doneRoot.innerHTML = doneTasksHTML
        // }
    } catch (error) {
        console.error(error.massage);
    }
}



function renderUpdatePicture(title: string, description: string, id: string) {
    try {
        let html = `<div class="edit">
        <form id="${id}" onsubmit="handleUpdateTask(event)">
        <label for="${title}">Edit Title</label>
        <textarea name="editTitle" id="${title}" cols="20" rows="1">${title}</textarea>
        <label for="${description}">Edit Description</label>
        <textarea name="editDescription" id="${description}" cols="20" rows="1">${description}</textarea>
        <button type="submit" class="material-symbols-rounded">check</button>
        </div>`
        const editRoot = document.querySelector(`#task${id}`) as HTMLDivElement
        editRoot.innerHTML = html
    } catch (error) {
        console.error(error.massage);

    }
}

async function renderNav() {
    try {
        const email = { emailUser }

        if (emailUser === 'admin@gmail.com') {
            const html = `<div class="nav">
        <p>Admin</p>
        <a class="logout material-symbols-rounded" href="./index.html">Logout</a>
    </div>`
            const root = document.querySelector('#nav') as HTMLDivElement
            root.innerHTML = html

        }
        const response = await fetch('/API/users/get-user-name', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        })

        const result = await response.json()
        const { error, userName } = result
        if (error) throw new Error("Some of details are incorrect");

        const html = `<div class="nav">
        <p>${userName}</p>
        <a class="logout material-symbols-rounded" href="./index.html">Logout</a>
    </div>`
        const root = document.querySelector('#nav') as HTMLDivElement
        root.innerHTML = html
    } catch (error) {
        console.error(error.massage);

    }
}

renderNav()