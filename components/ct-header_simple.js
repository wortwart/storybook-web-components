/*
	Minimalistische Webkomponente wie im Listing
	Achtung: Nachträgliche Änderungen der Attribute verändern das Shadow DOM nicht
	(kein Problem in Storybook -- dort lösen Attributänderungen einen Reload aus)
*/

export default class extends HTMLElement {
	connectedCallback() {
		const inverse = this.getAttribute('inverse');
		const subline = this.getAttribute('subline');
		const color = typeof inverse === 'string'? '#ccc' : '#333';
		const header = document.createElement('header');
		header.innerHTML = `<style>
		:host {display: block;}
		h1 {color: ${color};}
		h2 {
			border-top: 3px solid ${color};
			color: ${color};
		}
		</style>
		<h1><slot/></h1>`;
		if (subline)
			header.innerHTML += `<h2>${subline}</h2>`;
		const shadowRoot = this.attachShadow({mode: 'closed'});
		shadowRoot.appendChild(header);
	}
};
