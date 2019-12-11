
//Clases y objetos en JavaScript
class Carro{
    constructor(marca){
        this.marca = marca;
    }
    //Método
    imprime(){
        alert(this.marca);
    }
}
//new Carro("Audi").imprime();


//Notación JSON en JavaScript
let carro = {
    marca: 'Tesla',
    imprime(){
        //alert(this.marca);
    }
}
carro.imprime();

