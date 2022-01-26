class component_construct {
	constructor() {
		this.menuBOOL = false;
		this.buttonBOOL = false;
		this.button = {
			type: 1,
			components: [],
		};

		this.data = {
			type: 1,
			components: [],
		};
	}

	get output() {
		if (this.menuBOOL) {
			return this.data;
		}

		if (this.buttonBOOL) {
			return this.button;
		}
	}

	menu(menudata) {
		if (!menudata) return 'No information.';

		if (this.buttonBOOL) return this;
		this.menuBOOL = true;

		let menu_info = {
			custom_id: menudata.custom_id,
			placeholder: menudata.place_holder,
			min_values: menudata.min_val,
			max_values: menudata.max_val,
			options: [],
			type: 3,
		};

		this.data.components.push(menu_info);

		return this;
	}

	entry(entrydata) {
		if (!entrydata) return 'No information.';

		if (entrydata.emoji) {
			var entry_info = {
				label: entrydata.label,
				value: entrydata.value,
				description: entrydata.description,
				default: entrydata.default,
				emoji: { name: entrydata.emoji.name, id: entrydata.emoji.id, animated: entrydata.emoji.boolean },
			};
		} else {
			var entry_info = {
				label: entrydata.label,
				value: entrydata.value,
				description: entrydata.description,
				default: entrydata.default,
			};
		}

		if (!entrydata.emoji) delete entry_info['emoji'];
		if (entrydata.emoji) {
			if (!entrydata.emoji.name) delete entry_info.emoji['name'];
			if (!entrydata.emoji.id) delete entry_info.emoji['id'];
			if (!entrydata.emoji.animated) delete entry_info.emoji['animated'];
		}
		if (!entrydata.default) delete entry_info['default'];
		if (!entrydata.description) delete entry_info['description'];
		if (!entrydata.value) delete entry_info['value'];
		if (!entrydata.label) delete entry_info['label'];
		if (this.data.components[0] && this.data.components[0].options) this.data.components[0].options.push(entry_info);

		return this;
	}

	button(label, custom, style, disabled, url) {
		if (this.menuBOOL) return this;
		this.buttonBOOL = true;

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

		this.button.components.push(button_info);

		return this;
	}
}

module.exports = component_construct;
