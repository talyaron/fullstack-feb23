// Edit button
function handleUserEdit(homePage){
    try {
        const editUserForm = document.createElement('div');
        editUserForm.className = "editUser"
        editUserForm.innerHTML =`
        <div class="home-page__editUser">
                <div class="editUser__imagesGame">
                    <img src="./images/Jake.png" alt="Jakeimg">
                    <img src="./images/Tony.png" alt="Tonyimg">
                    <img src="./images/Tricky.png" alt="Trickyimg">
                </div>
                <div class="home-page__backBtn">
                    <button id="backBtn">Go back to home page</button>
                </div>
                <div class="home-page__doneBtn">
                    <button id="doneBtn">Done</button>
                </div>
            </div>   
            `;
            const backBtn = editUserForm.querySelector("#backBtn") as HTMLButtonElement;
            if(!backBtn){throw new Error("No btn was found")
        }else {
            // backBtn.addEventListener("click",()=> 
            // {
            //     homePage.innerHTML = "";
            //     handleUserDetails(new Event("click"));

            // });
            homePage.innerHTML = "";
            homePage.append(editUserForm);
        }
        
    } catch (error) {
        console.error(error)
    }
}
