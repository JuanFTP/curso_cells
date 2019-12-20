/*
	PENDIENTE DE TERMINAR
*/
import { LitElement, html } from 'lit-element';

class AdvanceLitElement extends LitElement {
	static get properties() {
		return {
			basicBind: {type: String},
			groceriesList: {type: Array},
			isAdmin: {type: Boolean}
		};
	}

	constructor() {
		super();
		this.basicBind = "Hola Mundo";
		this.groceriesList = [
			"manzana",
			"banana",
			"avena",
			"pollo",
			"chiles",
			"huevo"
		];

		this.isAdmin = false;
	}

	render () {
		return html`
			<h1>${this.basicBind}</h1>
			<ul>
				${this.groceriesList.map(food => html`<li>${food}</li>`)}
			</ul>
			${(this.isAdmin) ? html`<p>Eres Administrador</p>` : html`<p>No Eres Administrador</p>`}
		`;
	}

}

class ExplainetLitElement extends LitElement {
	render() {
		return html`
			<!--Text Binding-->
			<div>${this.prop1}</div>

			<!-- Property binding-->
			<div id=""></div>
		`;
	}
}

//Definir
customElements.define("advance-lit-element", AdvanceLitElement);