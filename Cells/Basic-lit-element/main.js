import {LitElement, html} from 'lit-element';

class BasicLitElement extends LitElement{
    render(){
        return html`
            <p>A paragraph</p>
        `;
    }
}

customElements.define('basic-lit-element', BasicLitElement);