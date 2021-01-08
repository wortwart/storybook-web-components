export default class extends HTMLElement {
	constructor() {
		super();
		const color = this.dataset.inverse? '#ccc' : '#333';
		const distance = .5;
		const header = document.createElement('header');
		const style = document.createElement('style');
		style.textContent = `
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
		header.appendChild(style);
		const h1 = document.createElement('h1');
		h1.textContent = this.dataset.headline;
		header.appendChild(h1);
		if (this.dataset.subline) {
			const h2 = document.createElement('h2');
			h2.textContent = this.dataset.subline;
			header.appendChild(h2);
		}
		const shadowRoot = this.attachShadow({mode: 'closed'});
		shadowRoot.appendChild(header);
	}
};
