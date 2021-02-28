import CtHeader from '../components/ct-header.js';
customElements.define('ct-header', CtHeader);

export default {
	title: 'CtHeader',
	argTypes: {
		inverse: {control: {type: 'boolean'}},
		subline: {control: {type: 'text'}}
	},
};

const Template = args => {
	const el = document.createElement('ct-header');
	el.textContent = args.text || 'Überschrift';
	for (const arg in args) {
		if (arg === 'text')
			continue;
		if (args[arg])
			el.setAttribute(arg, args[arg]);
		else
			el.removeAttribute(arg);
	}
	return el;
};

export const Base = Template.bind({});
Base.args = {
	text: 'Basisvariante'
};

export const Subline = Template.bind({});
Subline.args = {
	text: 'Mit Unterzeile',
	subline: 'Unterzeile'
};

export const SublineInverse = Template.bind({});
SublineInverse.args = {
	text: 'Mit Unterzeile und invers',
	inverse: true,
	subline: 'Unterzeile'
};
