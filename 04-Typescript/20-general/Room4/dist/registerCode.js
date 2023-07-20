var submitButton = document.querySelector("#registerSubmit");
var passwordINS = document.querySelector("#passwordINS");
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
var hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(function (el) { return observer.observe(el); });
function passwordCheck(event) {
    event.preventDefault();
    var currentPassword = event.target.value;
    if (currentPassword.length >= 8) {
        debugger;
        submitShow();
    }
    else {
        submitHide();
    }
}
function submitShow() {
    submitButton.style.opacity = "1";
    passwordINS.style.display = "none";
}
function submitHide() {
    submitButton.style.opacity = "0";
    passwordINS.style.display = "block";
}
