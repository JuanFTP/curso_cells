    //Ejemplos de JavaScript

//Filter
let numbers = [45, 4, 9, 16, 25];
let mayor18 = numbers.filter((value, index, array) => {
    return value > 18
});
console.log(mayor18);
console.log("------------------");

//foreEach
let txt = '';
let numeros = [45, 4, 9, 16, 25];
numeros.forEach((value, index,array) => {
    txt += value + '|';
});
console.log(txt);
console.log("------------------");

//Hacer un JSON
let a = {
    nombre: 'Christian',
    edad: 24
};
console.log(a);
console.log("------------------");


//Map
let frutas =['Fresa','Sandia','Melon','Mango'];
let opciones = frutas.map((value, index, array) =>{
    return{value: index +1, label:value}
});
console.log(opciones);
console.log("------------------");

//Some
let valores = [45, 4, 9, 16, 25];
let menor10 = numbers.some((value, index, array) =>{
    return value < 10
});
console.log(menor10);
console.log("------------------");


//Ejercicio
let asentamiento = [
    {cp:06030, asentamiento: 'Tabacalera'},
    {cp:55010, asentamiento: 'El diamante'},
    {cp:55070, asentamiento: 'Villas del Sol'},
    {cp:06200, asentamiento:'Morelos'},
    {cp:06350, asentamiento: 'Buenavista'},
    {cp:55020, asentamiento: '10 de Abril'}];
console.log(asentamiento);
console.log("-----RESULTADO-----");
let resultado = asentamiento.filter((value,index, array) => {
    return value.cp < 50000
})
console.log(resultado)
let arreglo = resultado.map((value, index, array) =>{
    return{value: index +1, label:value.asentamiento}
});
console.log(arreglo)
console.log("------------------");

/*
//CallBack
function funcion1(dato, callback){
    callback(dato);
}
function function1(second, callback){
    setTimeout(callback, 1000*second)
}
function1(2, function(){alert('Pasaron algunos segundos');});
console.log("------------------");
*/

//Función flecha
/*La flecha ayuda a no escribir function()*/
saludo = () =>{
    return "Hola Mundo";
}
console.log(saludo());
console.log("------------------");

//IIFE Pattern
(function () {
    var a = 10;
    alert
}() );
console.log("------------------");

//Closueres
function createIncrementor(start){
    return function () {
        start++;
        return start;
    }
}
var inc = createIncrementor(5);
console.log(inc());
console.log(inc());
console.log("------------------");


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