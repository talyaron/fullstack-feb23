"use strict";

var submitButton = document.querySelector("#registerSubmit");
var passwordINS = document.querySelector("#passwordINS");
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
var hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(function (el) {
  return observer.observe(el);
});

function passwordCheck(event) {
  event.preventDefault();
  var currentPassword = event.target.value;

  if (currentPassword.length >= 8) {
    submitShow();
  } else {
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
} // ----------------------------


var profile =
/** @class */
function () {
  function profile(id, firstName, lastName, username, password) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }

  return profile;
}();

var profilesArr = [];

function registerProfile(ev) {
  try {
    ev.preventDefault();
    var firstName = ev.target.firstName.value;
    var lastName = ev.target.lastName.value;
    var username = ev.target.username.value;
    var password = ev.target.password.value;
    profilesArr.push(new profile(profilesArr.length + 1, firstName, lastName, username, password)); // storeProfile(profilesArr);

    console.log(profilesArr);
  } catch (error) {
    console.error(error);
  }
} // function storeProfile(profilesArr){
//     const profilesArrSTR = JSON.stringify(profilesArr);
//     localStorage.setItem("profiles", profilesArrSTR)
//     redirectPage()
// }
// function redirectPage(){
//     window.location.href = "Redirect.html"
// }