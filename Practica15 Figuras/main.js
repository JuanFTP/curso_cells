//Figuras

class Figura{
    constructor(tipo){
        this.tipo = tipo;
        this.area = 0;
        this.perimetro = 0;
    }
    resultado(){
        console.log("Soy un: " + this.tipo + " mi area es: " + this.area + " y mi perimetro es: " + this.perimetro);
    }

    get area(){
        return this._area;
    }

    set area(value){
        this._area = value;
    }

    get perimetro(){
        return this._perimetro;
    }

    set perimetro(value){
        this._perimetro = value;
    }

    calcularArea(){
        //console.log("El area es: " + this.area)
        //Una clase hija lo va a sobreescribir
    }

    calcularPerimetro(){
        //console.log("El perimetro es: " + this.perimetro)
        //Una clase hija lo va a sobreescribir
    }


}


class Cuadrado extends Figura{
    constructor(tipo, longitudLado){
    super(tipo); 
    this.longitudLado = longitudLado;
    }

    resultado(){
        super.resultado();
    }

    calcularArea(){
        super.area = this.longitudLado * this.longitudLado;
        super.calcularArea();
    }

    calcularPerimetro(){
        super.perimetro = this.longitudLado * 4;
        super.calcularPerimetro();
    }
}
let cuadradoA = new Cuadrado("Cuadrado", 5);
cuadradoA.calcularArea();
cuadradoA.calcularPerimetro();
cuadradoA.resultado();



class Rectangulo extends Figura{
    constructor(tipo, ancho, alto){
    super(tipo);
    this.ancho = ancho;
    this.alto = alto;
    }
    calcularArea(){
        super.area = this.ancho * this.alto;
        super.calcularArea();
    }
    calcularPerimetro(){
        super.perimetro = (this.alto * 2) + (this.ancho * 2);
        super.calcularPerimetro();
    }
}
let rectanguloA = new Rectangulo("Rectangulo", 5, 10);
rectanguloA.calcularArea();
rectanguloA.calcularPerimetro();
rectanguloA.resultado();




class Elipse extends Figura{
    constructor(tipo, semiEjeMayor, semiEjeMenor){
    super(tipo);
    this.semiEjeMayor = semiEjeMayor;
    this.semiEjeMenor = semiEjeMenor;
    }
    calcularArea(){
        super.area = (this.semiEjeMenor * this.semiEjeMayor);
        super.calcularArea();
    }
    calcularPerimetro(){
        super.perimetro = (this.semiEjeMayor * 2) + (this.semiEjeMenor * 2);
        super.calcularPerimetro();
    }
}
let elipseA = new Elipse("Elipse", 4, 8);
elipseA.calcularArea();
elipseA.calcularPerimetro();
elipseA.resultado();


class Circulo extends Figura{
    constructor(tipo, radio){
    super(tipo);
    this.radio = radio;
    }
    calcularArea(){
        super.area = (Math.PI) * (this.radio * this.radio);
        super.calcularArea();
    }
    calcularPerimetro(){
        super.perimetro = (Math.PI) * (this.radio * 2);
        super.calcularPerimetro();
    }
}
let circuloA = new Circulo("Circulo", 2, 5);
circuloA.calcularArea();
circuloA.calcularPerimetro();
circuloA.resultado();
