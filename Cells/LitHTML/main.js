//Ir a la carpeta del proyecto
//npm init --> muchos enter
//npm install -save lit-html
//cat package.json
//polymer serve

import {html, render} from 'lit-html';

const myTemplate =  name => 
    html`
        <p>Hello, ${name}</p>
    `;   

    render(myTemplate('lit-html'),document.body)