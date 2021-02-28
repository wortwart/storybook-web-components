/*
	Webkomponente mit besserem Styling und performanten DOM-Methoden
	Änderungen der Attribute aktualisieren das Shadow DOM
*/

export default class extends HTMLElement {
	static get observedAttributes() {
		return ['subline', 'inverse'];
	}

	constructor() {
		super();
		this.header = document.createElement('header');
	}

	connectedCallback() {
		this.createInnerDom();
		const shadowRoot = this.attachShadow({mode: 'closed'});
		shadowRoot.appendChild(this.header);
	}

	attributeChangedCallback() {
		this.createInnerDom();
	}

	createInnerDom() {
		while (this.header.firstChild)
			this.header.removeChild(this.header.firstChild);
		const inverse = this.getAttribute('inverse');
		const subline = this.getAttribute('subline');
		const color = typeof inverse === 'string'? '#ccc' : '#333';
		const distance = .5;
		const style = document.createElement('style');
		style.textContent = `
			:host {display: block;}
			h1 {
				padding-bottom: 0;
				margin-bottom: 0;
				color: ${color};
			}
			h2 {
				padding-top: ${distance}em;
				border-top: ${distance/2}em solid ${color};
				margin-top: ${distance}em;
				font-size: 1.25em;
				letter-spacing: -.075em;
				color: ${color};
			}
		`;
		this.header.appendChild(style);
		const h1 = document.createElement('h1');
		const slot = document.createElement('slot');
		h1.appendChild(slot);
		this.header.appendChild(h1);
		if (subline) {
			const h2 = document.createElement('h2');
			h2.textContent = subline;
			this.header.appendChild(h2);
		}
	}
};
