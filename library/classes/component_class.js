class component_construct {
	constructor() {
		this.data = {
			type: 1,
			components: [],
		};

	}

	get output() {
		return this.data;
	}

	button(label, custom, style, disabled, url) {
		let button_info = {
			style: style,
			label: label,
			custom_id: custom,
			url: url,
			disabled: disabled || false,
			type: 2,
		};

		if (!label) delete button_info['label'];
		if (!custom) delete button_info['custom_id'];
		if (!style) delete button_info['style'];
		if (!disabled) button_info['disabled'] = false;
		if (!url) delete button_info['url'];
		if (style === 5) delete button_info['custom_id'];

		this.data.components.push(button_info);

		return this;
	}
}

module.exports = component_construct;
