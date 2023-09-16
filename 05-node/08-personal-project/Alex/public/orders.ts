

function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    return urlParams.get('email');
}

const _email  = getEmailFromQuery();
console.log(_email)

function handleGetItems(){
    getItems();
}
async function getItems() {
    try {
        const response = await fetch(`/API/items/getItems`);
        const data = await response.json();
        console.log(data)
        
        renderTasks(data.items, document.querySelector("#items"));
    } catch (error) {
        console.error(error);
    }
}


// getUserName(_email);

// async function getUserName(email:string) {
//     try {
//         const response = await fetch(`/API/users/getUserName?email=${email}`);
//         const userName = await response.json();
//         console.log(userName)
//         // renderTasks(userName.tasks, document.querySelector("#welcomMasage"));
//     } catch (error) {
//         console.error(error);
//     }
// }

// getUserName(_email);
// async function getUserName(_email:string) {
//     try {
//         const response = await fetch(`/API/users/getUserName?email=${_email}`);
//         const userName = await response.json();
//         console.log(userName);
//         // renderWelcomMasage(userName , document.querySelector("#welcomMasage"))
//         // renderTasks(data.tasks, document.querySelector("#tasks"));
//     } catch (error) {
//         console.error(error);
//     }
// }


// function renderWelcomMasage(userName: string) {
//     try {
//       const html = `
//         <h3>HI , ${userName}</h3>`

//       return html;
//     } catch (error) {
//       console.error(error)
//       return ""
//     }
//   }
//   getUserName(_email);
