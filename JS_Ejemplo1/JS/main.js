let numbers = [45, 4, 9, 16, 25];
let mayor18 = numbers.filter((value, index, array) => {
    return value > 18
});
console.log(mayor18);
console.log("------------------");

let txt = '';
let numeros = [45, 4, 9, 16, 25];
numeros.forEach((value, index,array) => {
    txt += value + '|';
});
console.log(txt);
console.log("------------------");


let a = {
    nombre: 'Christian',
    edad: 24
};
console.log(a);
console.log("------------------");

let frutas =['Fresa','Sandia','Melon','Mango'];
let opciones = frutas.map((value, index, array) =>{
    return{value: index +1, label:value}
});
console.log(opciones);
console.log("------------------");

let valores = [45, 4, 9, 16, 25];
let menor10 = numbers.some((value, index, array) =>{
    return value < 10
});
console.log(menor10);
console.log("------------------");

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
console.log("----CallBack---")
function funcion1(dato, callback){
    callback(dato);
}
function function1(second, callback){
    setTimeout(callback, 1000*second)
}
function1(2, function(){alert('Pasaron algunos segundos');});
console.log("------------------");
*/

/*La flecha ayuda a no escribir function()*/
saludo = () =>{
    return "Hola Mundo";
}
console.log(saludo());
console.log("------------------");

(function () {
    var tmp = ...;
}() );






