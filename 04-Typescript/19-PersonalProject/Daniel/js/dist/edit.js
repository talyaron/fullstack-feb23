// Edit button
function handleUserEdit(homePage) {
    try {
        var editUserForm = document.createElement('div');
        editUserForm.className = "editUser";
        editUserForm.innerHTML = "\n        <div class=\"home-page__editUser\">\n                <div class=\"editUser__imagesGame\">\n                    <img src=\"./images/Jake.png\" alt=\"Jakeimg\">\n                    <img src=\"./images/Tony.png\" alt=\"Tonyimg\">\n                    <img src=\"./images/Tricky.png\" alt=\"Trickyimg\">\n                </div>\n                <div class=\"home-page__backBtn\">\n                    <button id=\"backBtn\">Go back to home page</button>\n                </div>\n                <div class=\"home-page__doneBtn\">\n                    <button id=\"doneBtn\">Done</button>\n                </div>\n            </div>   \n            ";
        var backBtn = editUserForm.querySelector("#backBtn");
        if (!backBtn) {
            throw new Error("No btn was found");
        }
        else {
            // backBtn.addEventListener("click",()=> 
            // {
            //     homePage.innerHTML = "";
            //     handleUserDetails(new Event("click"));
            // });
            homePage.innerHTML = "";
            homePage.append(editUserForm);
        }
    }
    catch (error) {
        console.error(error);
    }
}
