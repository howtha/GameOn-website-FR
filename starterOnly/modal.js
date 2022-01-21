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
var birthdate = document.getElementById("birthdate");

var firstNameErr = document.getElementById("firstErr");
var lastNameErr = document.getElementById("lastErr");
var emailErr = document.getElementById("emailErr");
var quantityErr = document.getElementById("quantityErr");
var locationErr = document.getElementById("locationErr");
var checkbox1Err = document.getElementById("checkbox1Err");
var birthdateErr = document.getElementById("birthdateErr");

let check = true;


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
    //alert("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    firstNameErr.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    check = false;
  }
  else
  {
    firstNameErr.innerHTML = "Prénom valide !";
  }

  if (lastName.value == "" || lastName.value.length < 2)
  {
    //alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    lastNameErr.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    check = false;
  }
  else
  {
    lastNameErr.innerHTML = "Nom valide !";
  }
  
  if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
  {
    //alert("Veuillez saisir une adresse email valide !");
    emailErr.innerHTML = "Veuillez saisir une adresse email valide !"
    check = false;
  }
  else
  {
    emailErr.innerHTML = "Email valide !";
  }

  if (!birthdate.value.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/))
  {
    birthdateErr.innerHTML = "Veuillez saisir une date valide !";
    check = false;
  }
  else
  {
    birthdateErr.innerHTML = "Date valide !";
  }

  if (!quantity.value.match(/^([0-9]){1,2}$/)) //chiffre répété entre 1 & 2 fois
  {
    //alert("Veuillez saisir une valeur numérique !");
    quantityErr.innerHTML = "Veuillez saisir une valeur numérique !"
    check = false;
  }
  else
  {
    quantityErr.innerHTML = "Quantité valide !";
  }

  if (!(locationCity[0].checked || locationCity[1].checked || locationCity[2].checked || locationCity[3].checked || locationCity[4].checked || locationCity[5].checked))
  {
    //alert("Vous devez choisir une option.")
    locationErr.innerHTML = "Vous devez choisir une option."
    check = false;
  }
  else
  {
    locationErr.innerHTML = "Option valide !";
  }

  if (!checkBox1.checked)
  {
    //alert("Vous devez vérifier que vous acceptez les termes et conditions.");
    checkbox1Err.innerHTML = "Vous devez choisir une option."
    check = false;
  }
  else
  {
    checkbox1Err.innerHTML = "Option valide !"
  }
  
  if (check == false)
  {
    return false;
  }
  else
  {
    alert("Merci ! Votre réservation a été reçue.");
    return true;
  }
}




