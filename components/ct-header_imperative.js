export default class extends HTMLElement {
	constructor() {
		super();
		const color = this.dataset.inverse? '#ccc' : '#333';
		const distance = '.25em';
		const header = document.createElement('header');
		const h1 = document.createElement('h1');
		h1.textContent = this.dataset.headline;
		h1.style.color = color;
		header.appendChild(h1);
		if (this.dataset.subline) {
			const h2 = document.createElement('h2');
			h2.textContent = this.dataset.subline;
			h1.style.paddingBottom = distance;
			h1.style.borderBottom = distance + ' solid ' + color;
			h1.style.marginBottom = distance;
			h2.style.marginTop = 0;
			h2.style.color = color;
			h2.style.fontSize = '1.25em';
			h2.style.letterSpacing = '-.075em';
			header.appendChild(h2);
		}
		const shadowRoot = this.attachShadow({mode: 'closed'});
		shadowRoot.appendChild(header);
	}
};
