class embed_construct {
	constructor() {
		this.data = [];
	}

	get output() {
		return this.data;
	}

	field(input) {
		this.data.push(JSON.stringify({ name: input, val: input }));
		return this;
	}

	add2(input) {
		this.data.push(JSON.stringify({ size: input, val: input }));
		return this;
	}

	add3(input) {
		this.data.push(JSON.stringify({ cunt: input, val: input }));
		return this;
	}
}

module.exports = embed_construct;
