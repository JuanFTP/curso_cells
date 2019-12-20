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
	let seccion_lista = document.getElementById("lista_elementos");

	/*Botones*/
	let boton_cancelar = document.getElementById("cancelar");
	let boton_agregar = document.getElementById("boton_agregar");
	let botones_editar;
	let botones_eliminar;
	let boton_noticia = document.getElementById("boton_noticia");
	let boton_aviso = document.getElementById("boton_aviso");

	/*Bandera de actualización*/
	let band_update = false;
	let band_filtrado = false;
	let filtrado = "";
	let id_update = 0;
	let id_delete = 0;

	/*Variable para acumular datos de salida*/
	let acum = "";

	/*Datos*/
	var data_registros = [];
	var data_actual = {};
	
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
					if(band_filtrado) {
						if(data.data[r].tipo == filtrado) {
							data_registros.push({titulo: data.data[r].titulo, autor: data.data[r].autor, tipo: data.data[r].tipo, fecha: data.data[r].fechaPublicacion, texto: data.data[r].texto, id: data.data[r].id});
						}
					} else {
						data_registros.push({titulo: data.data[r].titulo, autor: data.data[r].autor, tipo: data.data[r].tipo, fecha: data.data[r].fechaPublicacion, texto: data.data[r].texto, id: data.data[r].id});
					}
				}
			} else {
				console.log("Sin datos que mostrar");
				data_registros = [];
				seccion_lista.innerHTML = "";
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
			detonarInicio();
		})
		.catch(function(err) {
			console.error(err);
		});
	}

	/*Función de actualización*/
	function updateReg(titulo, autor, tipo, fecha, texto, id) {
		fetch('http://localhost:9090/api/articulo', {
			method: 'PUT',
			headers: {
			'Content-Type':'application/json'
		},
			body: JSON.stringify({id: id, titulo: titulo, autor: autor, tipo: tipo, fechaPublicacion: fecha, texto: texto}),
			cache: 'no-cache'
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			formulario_datos.reset();
			detonarInicio();
		})
		.catch(function(err) {
			console.error(err);
		});
	}

	/*Función de eliminación del regitro*/
	function deteleReg(id) {
		let url = "http://localhost:9090/api/articulo/"+id_delete;
		fetch(url, {
			method: 'DELETE',
			headers: {
			'Content-Type':'application/json'
		},
			body: JSON.stringify({id: id}),
			cache: 'no-cache'
		})
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			formulario_datos.reset();
			detonarInicio();
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
			if(!band_update) {//Si no es una actualización 
				insertInto(titulo.value, autor.value, tipo.value, fecha.value, texto.value);			
			} else {//Es una actualizacion
				console.log("Actuzalizar registro");
				updateReg(titulo.value, autor.value, tipo.value, fecha.value, texto.value, id_update);
			}
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

	function getDataRegistro() {
		data_actual = {};
		for(let x = 0; x < data_registros.length; x++) {
			if(data_registros[x].id == id_update) {
				data_actual = data_registros[x];
				break;
			}
		}
		
		//Setear datos al formulario
		titulo.value = data_actual.titulo;
		autor.value = data_actual.autor;
		tipo.value = data_actual.tipo;
		fecha.value = data_actual.fecha;
		texto.value = data_actual.texto;
		band_update = true;
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
		botones_editar = document.querySelectorAll("button.editar");
		for(let rtx = 0; rtx < botones_editar.length; rtx++) {
			botones_editar[rtx].addEventListener("click", function(e) {
				id_update = botones_editar[rtx].getAttribute("id_reg");
				getDataRegistro();
				boton_agregar.click();
			});
		}

		botones_eliminar = document.querySelectorAll("button.eliminar");
		for(let rtx = 0; rtx < botones_eliminar.length; rtx++) {
			botones_eliminar[rtx].addEventListener("click", function(e) {
				id_delete = botones_eliminar[rtx].getAttribute("id_reg");
				if(confirm("¿Deseas eliminar el registro?")) {
					deteleReg(id_delete);
				}
			});
		}
		acum = "";
	}

	boton_noticia.addEventListener("click", function(e) {
		if(band_filtrado) {
			this.className = "opcion";
			band_filtrado = false;
			detonarInicio();
		} else {
			this.className = "opcion activo";
			boton_aviso.className = "opcion";
			band_filtrado = true;
			filtrado = "Noticia";
			detonarInicio();
		}
	});

	boton_aviso.addEventListener("click", function(e) {
		if(band_filtrado) {
			this.className = "opcion";
			band_filtrado = false;
			detonarInicio();
		} else {
			this.className = "opcion activo";
			boton_noticia.className = "opcion";
			band_filtrado = true;
			filtrado = "Aviso";
			detonarInicio();
		}
	});
});