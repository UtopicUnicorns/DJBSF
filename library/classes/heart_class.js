class heart_construct {
	constructor() {
		this.puppet;

		this.client_struct = {
			dead: true,
			client: null,
			guilds: [],
			users: [],
			beat_interval: null,
			beating_heart: null,
			seq_num: null,
			ses_num: null,
		};
	}

	run() {
		this.puppet = new ws.WebSocket('wss://gateway.discord.gg/?v=9&encoding=json');
		this.socket();

		return this;
	}

	tick() {
    console.log(this.client_struct);
		return this;
	}

	socket() {
		this.puppet.on('message', async function incoming(message) {
			try {
				const msg = JSON.parse(message);

				console.log(msg);
			} catch (err) {
				console.log(err);
			}
		});

		this.puppet.on('error', (error) => {
			console.log(error);
		});

		this.puppet.on('close', (code) => {
			this.puppet = '';
			this.client_struct.dead = true;
		});

		return this;
	}
}

module.exports = heart_construct;
