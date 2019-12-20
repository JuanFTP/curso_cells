/*
console.log(`Linea 1 de la cadena de texto
linea 2 de la cadena de texto ${10+3}.`);

let persona = 'Mike', edad = 28;

function myTag(strings, expPersona expEdad) {
    console.log(strings);
    let str0 = strings[0]; //Ese
    let str1 = string[1]; //Es un
    var strEdad = (expEdad > 99) ? 'viejo' : 'joven';
    return `${str0} ${expPersona} ${str1} ${strEdad}`;
}
var salida = myTag`Es ${persona} es un ${edad}`;
console.log(salida);
*/

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

    let option = document.querySelector("#frutas option:checked").innerHTML;
    console.log(option);
});