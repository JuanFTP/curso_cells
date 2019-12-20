const person = 'Juan';
const age = 25;

function taggetTemplate(strings, personExpression, ageExpression) {
	console.log(strings); //Detecta los parámetros pasados como si fuera por parentesis, separados por , en arreglos, recibe lo que no está entre los $

	if(ageExpression < 18) {
		return `${personExpression} no puede entrar`;
	} else {
		return `${personExpression} puede entrar`;
	}
}

const output = taggetTemplate`${person} tiene ${age}`;

console.log(output);