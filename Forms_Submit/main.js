var form = document.getElementById("novalidate_form");
var lemail = document.getElementById("ghost");
var error = document.getElementById("error");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if(lemail.validity.typeMismatch || lemail.value == "") {
        error.innerHTML = "¡Yo esperaba una dirección de correo!"
        error.className = "error active";
        
    } else {
        error.innerHTML = "¡Muy bien!";
        error.className = "success";
    }
});