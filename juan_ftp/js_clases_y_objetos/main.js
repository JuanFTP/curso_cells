//Clases
class Carro {
    constructor(marca) {
        this.marca = marca;
    }

    imprime() {
        alert(this.marca);
    }
}


//new Carro("Tesla").imprime();

//Notación JSON
let carro3 = {
    //marca = "Tesla",
    imprime() {
        alert(this.marca);
    },
    imprime_dos: function() {
        console.log(this.marca);
    }
};

//Practica 13
class animal {
    constructor(tipo, raza, edad) {
        this.tipo = tipo;
        this.raza = raza;
        this.edad = edad;
    }

    imprimir() {
        console.log("Soy un "+this.tipo+", pertenezco a la raza: "+this.raza+" y tengo "+this.edad+" años / meses");
    }
}

    class canino extends animal {
        constructor(tipo, raza, edad) {
            super(tipo, raza, edad);
        }

        imprimir() {
            super.imprimir();
        }
    }

    class felino extends animal {
        constructor(tipo, raza, edad) {
            super(tipo, raza, edad);
        }

        imprimir() {
            super.imprimir();
        }
    }

    class oviparo extends animal {
        constructor(tipo, raza, edad) {
            super(tipo, raza, edad);
        }

        imprimir() {
            super.imprimir();
        }
    }

/*
let perro = new canino("Perro", "Gran Danés", "10");
perro.imprimir();

let gato = new felino("Gato", "Persa", "1");
gato.imprimir();

let ave = new oviparo("Canario", "Roller", "3");
ave.imprimir();
*/

//Set y Getter
class CarroXD {
    constructor(marca) {
        this.marca = marca;
    }

    get marca() {
        console.log("Se ha usado GET");
        return this._marca;
    }

    set marca(value) {
        console.log("Se ha usado SET");
        this._marca = value;
    }
}

//alert(new CarroXD("Tesla XD").marca);
/*
//Mutables
//Todos los objetos de js son mutables y se pasan por referencias
function mutable(originalArray) {
    //Directamente mutado / modificado el arreglo original
    originalArray[0] = "Nuevo valor";
    return originalArray;
}

let array = ["Algún valor", "Otro valor"];
alert("Regresando de mutable "+mutable(array));
alert("Array: "+ array + " (arreglo original alterado).");

//Inmutables (Tipos de dato primitivos, se pasan por valor)
function inmutable(num) {
    num = 2;
    return num;
}

let numero  = 5;
alert("Regresando de inmutable "+inmutable(numero));
alert("Número "+numero+" (Número original sin alteral...).");
*/

//Practica 15
class figura {
    constructor(tipo) {
        this.tipo = tipo;
        this.area = 0;
        this.perimmetro = 0;
    }

    soy() {
        console.log("Soy un: "+this.tipo+" tengo de área: "+this.area+" y de perímetro: "+this.perimmetro);
    }

    set area(value) {
        this._area = value;
    }

    get area() {
        return this._area;
    }

    set perimmetro(value) {
        this._perimmetro = value;
    } 

    get perimmetro() {
        return this._perimmetro;
    }

    //Metodos padre
    calcularArea() {}
    calcularPerimetro() {}
}

    class cuadrado extends figura {
        constructor(tipo, lado) {
            super(tipo);
            this.lado = lado;
        }

        calcularArea() {
            super.area = (this.lado * this.lado);
        }

        calcularPerimetro() {
            super.perimmetro = (this.lado * 4);
        }

        soy() {
            super.soy();
        }
    }

let cuadrado_01 = new cuadrado("Cuadrado", 4);
cuadrado_01.calcularArea();
cuadrado_01.calcularPerimetro();
cuadrado_01.soy();

    class elipse extends figura {
        constructor(tipo, semiEjeMayor, semiEjeMenor) {
            super(tipo);
            this.semiEjeMenor = semiEjeMenor;
            this.semiEjeMayor = semiEjeMayor;
        }

        calcularArea() {
            super.area = (this.semiEjeMenor * this.semiEjeMayor * Math.PI);
        }

        calcularPerimetro() {
            super.perimmetro = 1000;
        }

        soy() {
            super.soy();
        }
    }

let elipse_01 = new elipse("Elipse", 10, 5);
elipse_01.calcularArea();
elipse_01.calcularPerimetro();
elipse_01.soy();

    class rectangulo extends figura {
        constructor(tipo, ancho, alto) {
            super(tipo);
            this.ancho = ancho;
            this.alto = alto;
        }

        calcularArea() {
            super.area = (this.ancho * this.alto);
        }

        calcularPerimetro() {
            super.perimmetro = ((this.ancho * 2)+(this.alto * 2));
        }

        soy() {
            super.soy();
        }
    }

let rectangulo_01 = new rectangulo("rectangulo", 7, 9);
rectangulo_01.calcularArea();
rectangulo_01.calcularPerimetro();
rectangulo_01.soy();

    class circulo extends figura {
        constructor(tipo, radio) {
            super(tipo);
            this.radio = radio;
        }

        calcularArea() {
            super.area = (Math.PI * (this.radio * this.radio));
        }

        calcularPerimetro() {
            super.perimmetro = (Math.PI * (this.radio * 2));
        }

        soy() {
            super.soy();
        }
    }

let circulo_01 = new circulo("circulo", 5);
circulo_01.calcularArea();
circulo_01.calcularPerimetro();
circulo_01.soy();

//Herencia múltiple
(function() {
    class Persona {}

    class Musico extends Persona {
        constructor(nombre) {
            super();
            this.nombre = nombre;
        }
    }

    class Estudiante extends Persona {
        
    }
})