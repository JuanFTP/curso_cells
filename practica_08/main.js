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
	let seccion_form = document.getElementById("seccion_form");
	let seccion_listado = document.getElementById("seccion_listado");
	let seccion_lista = document.getElementById("lista_elementos");

	/*Botones*/
	let boton_cancelar = document.getElementById("cancelar");

	/*Variable para acumular datos de salida*/
	let acum = "";

	/*Datos*/
	var data_registros = [];
	
	detonarInicio();
	
	/*Esperar datos*/
	function detonarInicio() {
		getAll();
		setTimeout(showAll, 2000);
	}

	/*Funcion para obtener todos los datos*/
	function getAll() {
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
			if(data.data.length > 0) {
				data_registros = [];
				for(let r = 0; r < data.data.length; r++) {
					data_registros.push({titulo: data.data[r].titulo, autor: data.data[r].autor, tipo: data.data[r].tipo, fecha: data.data[r].fechaPublicacion, texto: data.data[r].texto, id: data.data[r].id});
				}
			} else {
				console.log("Sin datos que mostrar");
			}
		})
		.catch(function(err) {
			console.error(err);
		});
	}

	/*Función de inserción*/
	function insertInto(titulo, autor, tipo, fecha, texto) {
		fetch('http://localhost:9090/api/articulo', {
			method: 'POST',
			headers: {
			'Content-Type':'application/json'
		},
			body: JSON.stringify({titulo: titulo, autor: autor, tipo: tipo, fechaPublicacion: fecha, texto: texto}),
			cache: 'no-cache'
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			formulario_datos.reset();
			getAll();
			setTimeout(detonarInicio, 1000);
		})
		.catch(function(err) {
			console.error(err);
		});
	}

	/*Boton cancelar evento*/
	boton_cancelar.addEventListener("click", function(e) {
		formulario_datos.reset();
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
				insertInto(titulo.value, autor.value, tipo.value, fecha.value, texto.value);			
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