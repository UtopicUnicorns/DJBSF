class embed_construct {
	constructor() {
		this.data = {
			type: 'rich', //type
			title: '', //string
			description: '', //string
			color: 0x74abab, //val
			fields: [],
			timestamp: '', //string
			image: {
				url: '', //string
				proxy_url: '', //string
				height: 40, //int
				width: 40, //int
			},
			thumbnail: {
				url: '', //string
				proxy_url: '', //string
				height: 50, //int
				width: 50, //int
			},
			author: {
				name: '', //string
				url: '', //string
				icon_url: '', //string
				proxy_icon_url: '', //string
			},
			footer: {
				text: '', //string
				icon_url: '', //string
				proxy_icon_url: '', //string
			},
			url: '', //string
		};
	}

	get output() {
		return this.data;
	}

	field(name, value, inline) {
		this.data.fields.push({
			name: `${name || ''}`,
			value: `${value || ''}`,
			inline: inline || false,
		});

		return this;
	}

	description(desc) {
		this.data.description = `${desc || ''}`;

		return this;
	}

	title(title) {
		this.data.title = `${title || ''}`;

		return this;
	}

	timestamp(time) {
		this.data.timestamp = `${time || ''}`;

		return this;
	}

	color(color) {
		this.data.color = `${color || ''}`;

		return this;
	}

	author(name, icon, url, proxy) {
		this.data.author.name = `${name || ''}`;
		this.data.author.icon_url = `${icon || ''}`;
		this.data.author.url = `${url || ''}`;
		this.data.author.proxy_icon_url = `${proxy || ''}`;

		return this;
	}

	footer(text, icon, proxy) {
		this.data.footer.text = `${text || ''}`;
		this.data.footer.icon_url = `${icon || ''}`;
		this.data.footer.proxy_icon_url = `${proxy || ''}`;

		return this;
	}

	url(url) {
		this.data.url = `${url || ''}`;

		return this;
	}

	thumbnail(url, width, height, proxy) {
		this.data.thumbnail.url = `${url || ''}`;
		this.data.thumbnail.width = width || 10;
		this.data.thumbnail.height = height || 10;
		this.data.thumbnail.proxy_url = `${proxy || ''}`;

		return this;
	}

	image(url, width, height, proxy) {
		this.data.image.url = `${url || ''}`;
		this.data.image.width = width || 10;
		this.data.image.height = height || 10;
		this.data.image.proxy_url = `${proxy || ''}`;

		return this;
	}
}

module.exports = embed_construct;
