class MiComponente extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>Hola Mundo</h1>`;
    }
}

customElements.define('mi-component', MiComponente);