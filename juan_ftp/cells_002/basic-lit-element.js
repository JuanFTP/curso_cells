import { LitElement, html} from 'lit-element';

class BasicListElement extends LitElement {
	render() {
		return html`
			<p>A paragraph</p>
		`;
	}
}

class ListaUtil extends LitElement {
	render() {
		return html`
			<ul>
				<li>Uno</li>
				<li>Dos</li>
				<li>Tres</li>
				<li>Cuatro</li>
				<li>Cinco</li>
			</ul>
		`;
	}
}

customElements.define("basic-lit-element", BasicListElement);
customElements.define("lista-util", ListaUtil);