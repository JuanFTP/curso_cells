document.addEventListener("DOMContentLoaded", function () {
	//ID de elementos
	let id = 0;

	//Variables para el form
	let form_valido = true;
	let formulario_datos = document.getElementById("datos_form"); 
	let mensaje = document.getElementById("mensaje");
	let validTitulo = true, validAutor = true, validTipo = true, validFecha = true, validTexto = true;
	let titulo = document.getElementById("titulo");
	let autor = document.getElementById("autor");
	let tipo = document.getElementById("tipo");
	let fecha = document.getElementById("fecha");
	let texto = document.getElementById("texto");

	/*Secciones*/
	let seccion_form = document.getElementById("datos_form");
	let seccion_listado = document.getElementById("seccion_listado");
	let seccion_lista = document.getElementById("lista_elementos");

	/*Botones*/
	let boton_agregar = document.getElementById("boton_agregar");
	let boton_cancelar = document.getElementById("btn_cancelar");

	/*Variable para acumular datos de salida*/
	let acum = "";

    /*Datos*/

	let data_registros = [
		{
			titulo: "Titulo",
			autor: "Autor",
			tipo: "Aviso",
			fecha: "2019/12/23",
			texto: "Hola",
			id: 1		
		},
		{
			titulo: "Titulo",
			autor: "Autor",
			tipo: "Aviso",
			fecha: "2019/12/24",
			texto: "Hola",
			id: 2	
		},
		{
			titulo: "Titulo",
			autor: "Autor",
			tipo: "Aviso",
			fecha: "2019/12/25",
			texto: "Hola",
			id: 3			
		}
    ];
    

	/*Detonar inicio*/
	detonarInicio();
	function detonarInicio() {
		if(data_registros.length == 0) {
			/*Mostramos el form*/
			seccion_form.className = "mostrar form_entradas";
		} else if(data_registros.length > 0) {
			/*Mostrar lista*/
			seccion_listado.className = "mostrar listado";
			showAll();
		}
	}

	/*Boton agregar evento*/
	boton_agregar.addEventListener("click", function() {
		seccion_listado.className = "oculto listado";
		seccion_form.className = "mostrar form_entradas";
	});

	/*Boton cancelar evento*/
	boton_cancelar.addEventListener("click", function(e) {
		e.preventDefault();
		seccion_form.className = "oculto form_entradas";
		seccion_listado.className = "mostrar listado";
	});

	formulario_datos.addEventListener("submit", function(e) {
			e.preventDefault();
			if(titulo.validity.typeMismatch || titulo.value == "") {
				validTitulo = false;
				titulo.className = "invalid";
			} else {
				validTitulo = true;
				titulo.className = "valid";
			}
			
			if(autor.validity.typeMismatch || autor.value == "") {
				validAutor = false;
				autor.className = "invalid";
			} else {
				validAutor = true;
				autor.className = "valid";
			}

			if(tipo.validity.typeMismatch || tipo.value == "") {
				validTipo = false;
				tipo.className = "invalid";
			} else {
				validTipo = true;
				tipo.className = "valid";
			}

			if(fecha.validity.typeMismatch || fecha.value == "") {
				validFecha = false;
				fecha.className = "invalid";
			} else {
				validFecha = true;
				fecha.className = "valid";
			}

			if(texto.validity.typeMismatch || texto.value == "") {
				validTexto = false;
				texto.className = "invalid";
			} else {
				validTexto = true;
				texto.className = "valid";
			}

			//Validadores finales
			if(validTitulo && validAutor && validTipo && validFecha && validTexto) {
				mensaje.innerHTML = "¡Todo bien!";
				mensaje.className = "mensaje correcto";
				
			} else {
				mensaje.innerHTML = "¡Existen errores, corrigelos por favor!";
				mensaje.className = "mensaje error";
			}
	});

	formulario_datos.addEventListener("reset", function(e) {
		mensaje.className = "";
		titulo.className = "";
		autor.className = "";
		tipo.className = "";
		fecha.className = "";
		texto.className = "";
		mensaje.innerHTML = "";
	});

	/*Funcion para obtener todos los datos*/
	function getAll() {
		data_registros = [];
		fetch('http://localhost:9090/api/articulo', {
			method: 'GET',
			headers: {
			'Content-Type':'application/json'
		},
			cache: 'no-cache'
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			console.log('data = ', data);
		})
		.catch(function(err) {
			console.error(err);
		});
	}

	/*Muestra todos los elementos*/
	function showAll() {
		acum = "";
		data_registros.forEach(element => {
			acum += `
				<div class="registro">
					<div class="line">
						<h2>${element.titulo}</h2>
						<p><strong>Autor: </strong>${element.autor}</p>
						<p><strong>Tipo: </strong>${element.tipo}</p>
						<p>${element.texto}</p>
					</div>
					<div class="fecha">
						<p><strong>Fecha de publicación: </strong>${element.fecha}</p>
					</div>
					<div class="buttons_right">
						<button class="eliminar" id_reg="${element.id}">Eliminar</button>
						<button class="editar" id_reg="${element.id}">Editar</button>
					</div>
				</div>
			`;
		});

		seccion_lista.innerHTML = acum;
		acum = "";
	}
});