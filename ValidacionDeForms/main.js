var email = document.getElementById("mail");

email.addEventListener("keyup", function(event) {
    if(email.validity.typeMismatch) {
        email.setCustomValidity("¡Hablo en Japones, Papi? !");
    } else {
        email.setCustomValidity("");
    }
});
console.log("entrando");

//Existen varios validity