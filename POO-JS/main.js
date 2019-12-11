//Setter Getter en JS
/*
class Carro{
    constructor(marca){
        this.marca = marca;
    }
    get marca(){
        console.log("El get");
        return this._marca;
    }
    set marca(value){
        console.log("El set");
        this._marca = value;
    }
}
alert((new Carro("Tesla XD")).marca);
*/


//Agregar propiedades a un constructor
function Carro(marca){
     this.marca = marca;
}
Carro.color = 'Rojo';
let c = new Carro('Tesla');
console.log(c.constructor.color);


//Mutables
//Todos los objetos de js son mutables y se pasan por referencias
function mutable(originalArray) {
    //Directamente mutado / modificado el arreglo original
    originalArray[0] = "Nuevo valor";
    return originalArray;
}
let array = ["Algún valor", "Otro valor"];
console.log("Regresando de mutable "+ mutable(array));
console.log("Array: "+ array + " (arreglo original alterado).");

//Inmutables
//Tipos de datos primitivos, se pasan por valor
function inmutable(num){
    num = 2;
    return num;
}
let numero = 5;
console.log("Regresando de inmutable " + inmutable(numero));
console.log("Número: " + numero + " (numero original sin alternar).");
