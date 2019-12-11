var email = document.getElementById("mail");

email.addEventListener("keyup", function(event) {
    if(email.validity.typeMismatch) {
        email.setCustomValidity("¡Yo esperaba una dirección de correo!");
    } else {
        email.setCustomValidity("");
    }
});

var form = document.getElementById("novalidate_form");
var lemail = document.getElementById("ghost");
var error = document.getElementById("error");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if(lemail.validity.typeMismatch || lemail.value == "") {
        error.innerHTML = "¡Yo esperaba una dirección de correo!"
        error.className = "error active";
    } else {
        error.innerHTML = "Todo bien";
        error.className = "success";
    }
});