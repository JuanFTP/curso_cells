
let categorias = [
    {id:1, nombre: 'Laptops', departamento: 'Electronica'},
    {id:2, nombre: 'Pantallas', departamento: 'Electronica'},
    {id:3, nombre: 'Zapatillas', departamento: 'Mujer'},
    {id:4, nombre: 'Peluches', departamento: 'Niño'},
    {id:5, nombre: 'Carriolas', departamento: 'Niño'},
    {id:6, nombre: 'Sillas', departamento: 'Hogar'}
];

let productos = [
    {descripcion: 'MacBook Air 13.3",Intel Core i5 dual core Ram 8 GB, Gris Espacial', precio: 18899, marca: 'Apple', categoriaID: 1},
    {descripcion: 'Laptop Pavilion 15.6", AMD Ryzen 5 2500U, RAM 12 GB, DD 1TB, SSD 128GB', precio: 17099, marca: 'HP', categoriaID: 1},
    {descripcion: 'Bundle Laptop, inspiron 5481, 14", Core i3, RAM 4 GB, DD 1TB, Plata+Mochila', precio: 9899, marca: 'Dell', categoriaID: 1},
    {descripcion: 'Pantalla 55" LED UHD 4K Series 7', precio: 12811, marca: 'Samsung', categoriaID: 2},
    {descripcion: 'Pantalla Lg 86P Tv Ai Thing UHD 4K86UK6570PUA', precio: 12811, marca: 'LG', categoriaID: 2},
    {descripcion: 'Zapatillas tacón de aguja', precio: 2399, marca: 'STEVE MADDEN', categoriaID: 3},
    {descripcion: 'Sandalias con tacon alto', precio: 2199, marca: 'WESTIES', categoriaID: 3},
    {descripcion: 'Oso Gigante', precio: 15399, marca: 'DOUDOU ET COMPAGNIE', categoriaID: 4},
    {descripcion: 'Carriola LiteWay 3', precio: 3199, marca: 'CHICCO', categoriaID: 5}
];

//Variables a utilizar
let data_resultados = [];
let data_departamentos = [];
let data_categorias = [];
let data_productos = [];
let departamento_actual = 0;
let categoria_actual = 0;
let select_departamentos = document.getElementById("select_departamentos");
let select_categorias = document.getElementById("select_categorias");
let tabla = document.getElementById("resultados");
let acum = "";
let categoria = "";
let departamento_seleccionado = 0;
let categoria_seleccionada = 0;
let productos_filtrados = [];

showData();
showDepartamentos();
showCategorias();

function showDepartamentos() {
    categorias.forEach(element => {
        if(!data_departamentos.includes(element.departamento)) {
            data_departamentos.push(element.departamento);
        }
    });

    //Pasar al select
    acum = `<option value="0">Todos</option>`;
    for(let dep = 0; dep < data_departamentos.length; dep++) {
        acum += `<option value="${data_departamentos[dep]}">${data_departamentos[dep]}</option>`;
    }
    select_departamentos.innerHTML = acum;
}

function showCategorias() {
    categorias.forEach(element => {
        if(!data_categorias.includes(element.nombre)) {
            data_categorias.push(element.nombre);
        }
    });

    //Pasar al select
    acum = `<option value="0">Selecciona una</option>`;
    for(let dep = 0; dep < data_categorias.length; dep++) {
        acum += `<option value="${data_categorias[dep]}">${data_categorias[dep]}</option>`;
    }
    select_categorias.innerHTML = acum;
}

function showData() {
    acum = "";
    for(let i = 0; i < productos.length; i++) {
        for(let xds = 0; xds < categorias.length; xds++) {
            if(categorias[xds].id == productos[i].categoriaID) {
                categoria = categorias[xds].nombre;
                break;
            }
        }
        
        acum += `<tr>
            <td>${categoria}</td>
            <td>${productos[i].descripcion}</td>
            <td>${productos[i].marca}</td>
            <td>${productos[i].precio}</td>
        </tr>`;
    }
    tabla.innerHTML = acum;
}

//Cambio en el select de departamentos
select_departamentos.addEventListener("change", function() {
    departamento_seleccionado = select_departamentos.value;
    if(departamento_seleccionado == 0) {
        showCategorias();
        showData();
    } else {
        let data_categorias_filter = [];
        categorias.forEach(element => {
            if(element.departamento == departamento_seleccionado) {
                if(!data_categorias_filter.includes(element.nombre)) {
                    data_categorias_filter.push(element.nombre);
                }
            }
        });

        //Pasar al select
        acum = `<option value="0">Selecciona una</option>`;
        for(let dep = 0; dep < data_categorias_filter.length; dep++) {
            acum += `<option value="${data_categorias_filter[dep]}">${data_categorias_filter[dep]}</option>`;
        }
        select_categorias.innerHTML = acum;
        categoria_seleccionada = select_categorias.value;
        //Llama al metodo que muestra los datos filtrados
        showDataFilter();
    }

});

//Cambio de categoria
select_categorias.addEventListener("change", function() {
    categoria_seleccionada = select_categorias.value;
    //Muestra los datos filtrados
    showDataFilter();
});

//Mostrar datos con base en el filtro
function showDataFilter() {
    acum = "";
    productos_filtrados = [];
    let groups_id = [];
    if((departamento_seleccionado != 0) && (categoria_seleccionada == 0)) {
        categorias.forEach(element => {
            if(element.departamento == departamento_seleccionado) {
                groups_id.push([element.id, element.nombre]);
            }
        });
        for(let rd = 0; rd < groups_id.length; rd++) {
            for(let pro = 0; pro < productos.length; pro++) {
                if(productos[pro].categoriaID == groups_id[rd][0]) {
                    productos_filtrados.push([groups_id[rd][1], productos[pro].descripcion, productos[pro].marca, productos[pro].precio]);
                }
            }
        }
        for(let xx = 0; xx < productos_filtrados.length; xx++) {
            acum += "<tr>";
            for(let xds = 0; xds < productos_filtrados[xx].length; xds++) {
                acum += "<td>"+productos_filtrados[xx][0]+"</td>";
                acum += "<td>"+productos_filtrados[xx][1]+"</td>";
                acum += "<td>"+productos_filtrados[xx][2]+"</td>";
                acum += "<td>"+productos_filtrados[xx][3]+"</td>";
            }
            acum += "</tr>";
        }
        tabla.innerHTML = acum;
    } else if((departamento_seleccionado != 0) && (categoria_seleccionada != 0)) {
        acum = "";
        productos_filtrados = [];
        let groups_id = [];
        categorias.forEach(element => {
            if(element.nombre == categoria_seleccionada) {
                groups_id.push([element.id, element.nombre]);
            }
        });
        for(let rd = 0; rd < groups_id.length; rd++) {
            for(let pro = 0; pro < productos.length; pro++) {
                if(productos[pro].categoriaID == groups_id[rd][0]) {
                    productos_filtrados.push([groups_id[rd][1], productos[pro].descripcion, productos[pro].marca, productos[pro].precio]);
                }
            }
        }
        for(let xx = 0; xx < productos_filtrados.length; xx++) {
            acum += "<tr>";
            for(let xds = 0; xds < productos_filtrados[xx].length; xds++) {
                acum += "<td>"+productos_filtrados[xx][0]+"</td>";
                acum += "<td>"+productos_filtrados[xx][1]+"</td>";
                acum += "<td>"+productos_filtrados[xx][2]+"</td>";
                acum += "<td>"+productos_filtrados[xx][3]+"</td>";
            }
            acum += "</tr>";
        }
        tabla.innerHTML = acum;
    }
}