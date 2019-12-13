//Instalar
//npm init
//npm install --save lit-element @webcomponents/webcomponentsjs
//polymer serve

import {LitElement, html} from 'lit-element';

class BasicLitElement extends LitElement{
    
    static get properties(){
        return{
            basicBind: {type: String},
            groceriesList: {type: Array},
            isAdmin: {type:Boolean},
        }
    }

    constructor(){
        super();
        this.basicBind = "Hola mundo";
        this.groceriesList =[
            'manzana',
            'uvas',
            'mangos',
            'pollo'
        ];
        this.isAdmin = true;
    }

    render(){
        return html`
            <p>${this.basicBind}</p>
            <ul>${this.groceriesList.map(food => html`<li>${food}</li>`)}</ul>
            <p>${this.isAdmin?
            html`Soy mortal` : html`Soy inmortal`
            }</p>
        `;
    }
}

customElements.define('insertar-texto', BasicLitElement);

