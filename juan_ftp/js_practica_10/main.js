let formulario = document.getElementById("formulario");
let nombre_fruta = document.getElementById("nombre_fruta");
let lista = document.getElementById("resultados");
let li;
let newText;
let actual = 0;
let data = ["Fresa", "Sandía"];

agregarALista();

formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    if(nombre_fruta.value == "" || nombre_fruta.value == null) {
        alert("El campo está vacio");
    } else {
        agregarArreglo(nombre_fruta.value);
        agregarALista();
    }
});

function agregarArreglo(elemento) {
    data.push(elemento);
    nombre_fruta.value = "";
}

function agregarALista() {
    for(let r = actual; r < data.length; r++) {
        li = document.createElement("li");
        newText = document.createTextNode(data[r]);
        li.append(newText);
        li.className += ((r%2) == 0 ? "par" : "impar");
        lista.append(li);
        actual++;
    }
}