export function escapeText(_string) {
		const string = _string + '';
		const length = string.length;
		let characters = '';

		for (let i = 0; i < length; i++) {
			switch (string.charCodeAt(i)) {
				case 38:
					characters += '&amp;';
					break;
				case 39:
					characters += '&#039;';
					break;
				case 34:
					characters += '&quot;';
					break;
				case 60:
					characters += '&lt;';
					break;
				case 62:
					characters += '&gt;';
					break;
				default:
					characters += string[i];
			}
		}
		return characters;
}

const uppercasePattern = /[A-Z]/g;
const msPattern = /^ms-/;

export function toHyphenCase(str) {
	return str.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern, '-ms-');
}

const voidElements = {
	area: true,
	base: true,
	br: true,
	col: true,
	command: true,
	embed: true,
	hr: true,
	img: true,
	input: true,
	keygen: true,
	link: true,
	meta: true,
	param: true,
	source: true,
	track: true,
	wbr: true
};

export function isVoidElement(str) {
	return !!voidElements[str];
}
