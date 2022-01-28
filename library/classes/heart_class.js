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

		mail_man.on('socket_close', async (code) => this.restart());
		mail_man.on('socket_error', async (error) => console.log(error));
	}

	run() {
		this.puppet = new ws.WebSocket('wss://gateway.discord.gg/?v=9&encoding=json');
		this.socket();

		return this;
	}

	restart() {
		this.puppet.close();
		this.puppet = '';
		setTimeout(() => this.run(), 5000);

		return this;
	}

	socket() {
		this.puppet.on('message', async function incoming(message) {
			try {
				const msg = JSON.parse(message);

				console.log(msg);
			} catch (err) {
				mail_man.emit('socket_error', error);
			}
		});

		this.puppet.on('error', (error) => mail_man.emit('socket_error', error));
		this.puppet.on('close', (code) => mail_man.emit('socket_close', code));

		return this;
	}
}

module.exports = heart_construct;
