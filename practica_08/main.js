document.addEventListener("DOMContentLoaded", function () {
   let form_valido = true;
   let formulario_datos = document.getElementById("datos_form"); 
   let mensaje = document.getElementById("mensaje");
   let validTitulo = true, validAutor = true, validTipo = true, validFecha = true, validTexto = true;
   let titulo = document.getElementById("titulo");
   let autor = document.getElementById("autor");
   let tipo = document.getElementById("tipo");
   let fecha = document.getElementById("fecha");
   let texto = document.getElementById("texto");

    formulario_datos.addEventListener("submit", function(e) {
            e.preventDefault();
            if(titulo.validity.typeMismatch || titulo.value == "") {
                validTitulo = false;
                titulo.className = "invalid";
            } else {
                validTitulo = true;
                titulo.className = "valid";
            }
            
            if(autor.validity.typeMismatch || autor.value == "") {
                validAutor = false;
                autor.className = "invalid";
            } else {
                validAutor = true;
                autor.className = "valid";
            }

            if(tipo.validity.typeMismatch || tipo.value == "") {
                validTipo = false;
                tipo.className = "invalid";
            } else {
                validTipo = true;
                tipo.className = "valid";
            }

            if(fecha.validity.typeMismatch || fecha.value == "") {
                validFecha = false;
                fecha.className = "invalid";
            } else {
                validFecha = true;
                fecha.className = "valid";
            }

            if(texto.validity.typeMismatch || texto.value == "") {
                validTexto = false;
                texto.className = "invalid";
            } else {
                validTexto = true;
                texto.className = "valid";
            }

            //Validadores finales
            if(validTitulo && validAutor && validTipo && validFecha && validTexto) {
                mensaje.innerHTML = "¡Todo bien!";
                mensaje.className = "mensaje correcto";
            } else {
                mensaje.innerHTML = "¡Existen errores, corrigelos por favor!";
                mensaje.className = "mensaje error";
            }
    });

    formulario_datos.addEventListener("reset", function(e) {
        mensaje.className = "";
        titulo.className = "";
        autor.className = "";
        tipo.className = "";
        fecha.className = "";
        texto.className = "";
        mensaje.innerHTML = "";
    });
});