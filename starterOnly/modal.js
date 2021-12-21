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
var lastName = document.getElementById("last");
var email = document.getElementById("email");
var quantity = document.getElementById("quantity");

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
  if (firstName.value == "" || firstName.value.length < 2)
  {
    alert("Veuillez saisir 2 caractères minimum pour le prénom !");
    return false;
  }
  if (lastName.value == "" || lastName.value.length < 2)
  {
    alert("Veuillez saisir 2 caractères minimum pour le nom !");
    return false;
  }
  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
  {
    alert("Veuillez saisir une adresse email valide !");
    return false;
  }
  if (!quantity.value.match(/^([0-9]){1,2}$/)) //chiffre répété entre 1 & 2 fois
  {
    alert("Veuillez saisir une valeur numérique !");
    return false;
  }

}




