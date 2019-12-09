let numbers = [45, 4, 9, 16, 25];
let mayor18 = numbers.filter((value, index, array) => {
    return value > 18
});
//console.log(mayor18);

//console.log("===================================\n");

let txt = "";
let fornum = [34, 67, 22, 111, 1, 23, 12];
let formayor = fornum.forEach((value, index, array) => {
    txt += value+" | "
});
//console.log(txt);

//console.log("===================================\n");

let frutas = ["Fresa", "Sandía", "Melón", "Mango"];
let opciones = frutas.map((value, index, array) => {
    return {
        value: index + 1, label: value
    };
});
//console.log(opciones);

//console.log("===================================\n");

let numbers_exist = [11, 32, 12, 24, 17, 22, 9];
let menor10 = numbers_exist.some((value, index, array) => {
    return value <10
});
//console.log(menor10);

//console.log("===================================\n");
let asentamientos = [
    {cp: "06030", asentamiento: "Tabacalera"},
    {cp: "55010", asentamiento: "El Diamante"},
    {cp: "55070", asentamiento: "Villas del sol"},
    {cp: "06200", asentamiento: "Morelos"},
    {cp: "06350", asentamiento: "Buenavista"},
    {cp: "55020", asentamiento: "10 de Abril"}
];

let final = asentamientos.filter((value, index, array) => { return value.cp.substring(1, 2) == 6 }).map((value, index, array) => {return { value: index + 1, label: value.asentamiento };});

console.log(final); 

//console.log("===================================\n");

function funcion1(dato, callback) {
    callback(dato);
}

/*funcion1(1, function(rzx) {
        alert("Holi: "+rzx);
    }
);*/

function funcion1 (seconds, callback) {
    setTimeout(callback, 1000*seconds);
}

/*funcion1(2, function() {
        alert("Pasaron algunos segundos");
    }
);*/

//console.log("===================================\n");

saludo = function() {
    return  "Hola Mundo";
};

saludo_dos = () => {
    return "Hola Mundo";
}

let rst = () => 10;


console.log(saludo);
console.log(saludo_dos);
console.log(rst);