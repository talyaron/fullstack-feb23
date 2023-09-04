function getEmailFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('email');
}

const email = getEmailFromQuery();
console.log(email)
// const start = async () => {
//     try {      
//         await renderAdminPage();
//     } catch (error) {
//         console.error(error);
//     }
// }
renderAdminPage();


async function renderAdminPage() {
    try {
        const response = await fetch(`/API/physician/get-physicians?email=${email}`);
        const data = await response.json();
        console.log(data)
        renderWelcome(data.physicians[0].lastName, document.querySelector("#root"));
        renderAdminActions(document.querySelector("#header"));
    } catch (error) {
        console.error(error);
    }
}

function renderAdminActions(root:HTMLDivElement) {
    try {
        root.innerHTML += `
        <div id="admin-actions">
            <button id="add-physician">Add Physician</button>
            <button id="add-patient">Add Patient</button>
            <button id="add-medicine">Add Medicine</button>
            <button id="update-physician">Update Physician</button>
            <button id="update-patient">Update Patient</button>
            <button id="update-medicine">Update Medicine</button>
        </div>
        `;
    } catch (error) {
        console.error(error);
    }
}

function renderWelcome(lastName, root:HTMLDivElement) {
    try {
        root.innerHTML += `<div id = "header">
        <h1>Welcome Dr. ${lastName}</h1>
        </div>`;
    } catch (error) {
        console.error(error);
    }
}