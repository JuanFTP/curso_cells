//Encontrar elementos 

/*Para cargar primero toda la página y luego empezar a buscar dentro del head
<script>
    document.addEventListener("DOMContentLoaded", function () {
        let a = document.getElementById("div_id");
        console.log(a);
     });
</script>
*/

//Encontrar elementos con id
console.log("ById");
document.getElementById("div_id");
console.log(document.getElementById("div_id"));
console.log("------------------");

//Encontrar elementos por TagName
console.log("ByTagName");
document.getElementsByTagName("p");
console.log(document.getElementsByTagName("p"));
console.log("------------------");

//Encontrar elementos por ClassName
console.log("ClassName");
document.getElementsByClassName("item");
console.log(document.getElementsByClassName("item"));
console.log("------------------");

//Encontrar elementos por selector CSS

//Encontrar un elemento con querySelector
console.log("querySelector");
document.querySelector("#ejemplo1 li");
console.log(document.querySelector("#ejemplo1 li"));
console.log("------------------");

//Encontrar elementos con querySelectorAll
console.log("querySelectorAll");
document.querySelectorAll("#ejemplo1 li");
console.log(document.querySelectorAll("#ejemplo1 li"));
console.log("------------------");

//Encontrar un input
console.log("Aspectos del input");
let input = document.getElementById("inputTest");
console.log(input.type);
console.log(input.name);
console.log(input.style.color);
console.log(input.value);
input.style.backgroundColor = 'orage';

//Evento para un botón
let miFuncion = function() {
    console.log("Has pulsado el botón 1");
}

document.getElementById("btn1").addEventListener("click", miFuncion);

//Crear nodos en el DOM
let ul = document.getElementById("contenedor");
let li = document.createElement("li");
let newText = document.createElement("nuevoTexto");
li.appendChild(newText);
ul.appendChild(li);

//Ventanas emergentes
var txt = "";
if(confirm("Presione un botón!!")) {
	txt = "Presionaste Aceptar!";
} else {
	txt = "Presionaste Cancelar!";
}
console.log(txt);

var rtx;
var person = prompt("Por favor escribe tu nombre: ", "Rebeca");
if(person == null || person == "") {
	rtx = "El usuario canceló";
} else {""
	rtx = "Hola " + person + "! Cómo estas hoy?";
}
console.log(rtx);