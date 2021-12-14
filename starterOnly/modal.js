function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

var btnClose = document.getElementsByClassName("close");
var firstName = document.getElementById("first");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
btnClose[0].addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal()
{
  modalbg.style.display = "none";
}

// validation modal form
function validate()
{
  if (firstName.value == NULL || firstName.value == "" || firstName.value.length < 2)
  {
    alert("Veuillez saisir 2 caractères minimum !");
    return false;
  }
  alert("ok");
}




