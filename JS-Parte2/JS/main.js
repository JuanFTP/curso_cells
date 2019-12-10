//Plantillas de cadena de texto
console.log(`Línea 1 de la cadena de texto
línea 2 de la cadena de texto`);
console.log("--------------------");

//Plantillas de concatenacion 
let a = 5, b = 10;
console.log(`Quince es ${a + b} y \nno ${2 * a + b}.`);
console.log("--------------------");

//Postprocesador

let persona = ' Mike', edad = 28;
function myTag(strings, expPersona, expEdad){
    console.log(strings);
    let str0 = strings[0];
    let str1 = strings[1];
    var strEdad = (expEdad > 99)?'Viejo':'joven';
    return `${str0}${expPersona}${str1}${strEdad}`;
}
var salida = myTag`Ese${persona} es un ${edad}`;
console.log(salida);
console.log("--------------------");

//Ejemplo
let frutas = [
    { id: 1, nombre: "Mango"},
    { id: 2, nombre: "Sand&iacute;a"},
    { id: 3, nombre: "Fresa"},
    { id: 4, nombre: "Mel&oacute;n"},
    { id: 5, nombre: "Naranja"}
];

let selectFrutas = document.getElementById("frutas");
let options = "";
frutas.forEach((e, i, a) => {
    options += `<option vale=${e.id}>${e.nombre}</option>`;
});
selectFrutas.innerHTML = options;
selectFrutas.addEventListener("change", (e) => {
    let el = e.target;
    let divFrutaSeleccionada = document.getElementById("frutaSeleccionada");
    let text = el.options[el.selectedIndex].innerHTML;
    divFrutaSeleccionada.innerHTML = `Valor: <b>${el.value}</b>, Etiqueta: <b>${text}</b>`;
});