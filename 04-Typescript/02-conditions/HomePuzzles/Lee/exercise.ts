const form = document.querySelector("form")!
form.addEventListener("submit", onSubmit) 

function onSubmit(e:Event){
e.preventDefault()
const input = document.querySelector("#task-name")! as HTMLInputElement
let task = createTask (input.value)
input.value = ""

let taskList = document.querySelector(".task-list")!
taskList.prepend(task)
}

function createTask(text:string){
    let div = document.createElement("div")
   div.classList.add("task")

    let h3 = document.createElement("h3")
    h3.textContent = text

    let del = document.createElement("button")
    del.textContent = "del"

    del.addEventListener("click", (){
        let parent = del.parentElement!
        parent.remove()
    })


    div.appendChild(h3)
    div.appendChild(del)
    return div

}