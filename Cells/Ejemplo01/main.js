//Instalar
//npm init
//npm install --save lit-element @webcomponents/webcomponentsjs
//polymer serve

import {LitElement, html} from 'lit-element';

class BasicLitElement extends LitElement{
    render(){
        return html`
            <h1>Ejemplo 01</h1>
            <p>A paragraph</p>
        `;
    }
}

customElements.define('insertar-texto', BasicLitElement);

