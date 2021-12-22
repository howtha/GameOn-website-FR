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
var locationCity = document.getElementsByName("location");
var checkBox1 = document.getElementById("checkbox1");

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
    alert("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    return false;
  }
  if (lastName.value == "" || lastName.value.length < 2)
  {
    alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
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
  if (!(locationCity[0].checked || locationCity[1].checked || locationCity[2].checked || locationCity[3].checked || locationCity[4].checked || locationCity[5].checked))
  {
    alert("Vous devez choisir une option.")
    return false;
  }
  if (!checkBox1.checked)
  {
    alert("Vous devez vérifier que vous acceptez les termes et conditions.");
    return false;
  }
  alert("Merci ! Votre réservation a été reçue.");
  return true;
}




