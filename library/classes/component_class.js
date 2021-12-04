class component_construct {
	constructor() {
		this.data = {};
	}

	get output() {
		//if (!this.data.image.url) delete this.data['image'];


		return this.data;
	}

	button(name, value, inline) {
		this.data.fields.push({
			name: name || '',
			value: value || '',
			inline: inline || false,
		});

		return this;
	}
}

module.exports = component_construct;
