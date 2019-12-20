/*
	npm install -g polymer-cli [Cuando se vaya a instalar por primera vez]

	npm init -> muchos enters
	npm install --save lit-html
*/
import { html, render } from 'lit-html';

const myTemplate = name =>
	html `
		<p>Hello ${name}</p>
	`;
	
	render(myTemplate('lit-html'), document.body);