class Animal{
    constructor(nombre, edad, raza){
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    datos(){
        console.log("Me llamo " + this.nombre + " y tengo " + this.edad + " y soy un " + this.raza);
    }
}


class Felino extends Animal{
    constructor(nombre, edad, raza){
        super(nombre,edad, raza);
    }
    datos(){
        super.datos();
    }
}
let leon = new Felino("Mufasa", "7", "Leon").datos();

class Reptil extends Animal{
    constructor(nombre, edad, raza){
        super(nombre,edad, raza);
    }
    datos(){
        super.datos();
    }
}
let cocodrilo = new Reptil("Rino", "2", "Caiman").datos();

class Canino extends Animal{
    constructor(nombre, edad, raza){
        super(nombre,edad, raza);
    }
    datos(){
        super.datos();
    }
}
let perro = new Canino("Hachiko", "15", "Perro").datos();


