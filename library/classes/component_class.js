class component_construct {
	constructor() {
		this.count = 0;

		this.data = {
			type: 1,
			components: [],
		};
	}

	get output() {
		return this.data;
	}

	menu() {
		let menu_info = {
			custom_id: '32231', //string
			placeholder: '5544', //string
			options: [
				{
					label: '3454343', //string
					value: '53453434', //string
					description: '342342342', //string
					default: false, //coolean
				},
				{
					label: '2334234', //string
					value: '23432324', //string
					description: '234432342342', //string
					default: false, //boolean
				},
			],
			min_values: 1, //int
			max_values: 1, //int
			type: 3, //type
		};

		this.data.components.push(menu_info);

		return this;
	}

	button(label, custom, style, disabled, url) {
		this.count++;

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
		if (url) button_info['style'] = 5;
		if (url) delete button_info['custom_id'];

		this.data.components.push(button_info);

		return this;
	}
}

module.exports = component_construct;
