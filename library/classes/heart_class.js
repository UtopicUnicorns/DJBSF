class heart_construct {
	constructor() {
		this.puppet;

		this.client_struct = {
			dead: true,
			client: null,
			guilds: [],
			users: [],
			beat_interval: 5000,
			beating_heart: null,
			seq_num: null,
			ses_num: null,
		};

		this.identify_info = {
			op: 2,
			d: {
				token: token,
				intents: intents_num,
				properties: {
					$os: 'linux',
					$browser: 'DJBSF',
					$device: 'DJBSF',
				},
			},
		};

		mail_man.on('socket_beat', async () => {
			this.client_struct.beating_heart++;
			this.puppet.send(JSON.stringify({ op: 1, d: this.client_struct.seq_num }));
		});
		mail_man.on('socket_interval', async (info) => (this.client_struct.beat_interval = info));
		mail_man.on('socket_close', async (code) => this.restart());
		mail_man.on('socket_pulse', async (order) => this.pulse(order));
		mail_man.on('socket_identify', async () => this.puppet.send(JSON.stringify(this.identify_info)));
		mail_man.on('socket_ping', async () => this.puppet.send(JSON.stringify({ op: 1 })));
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

	pulse(order) {
		if (order) {
			this.beat = setInterval(function () {
				console.log('kek');
				mail_man.emit('socket_beat');
			}, this.client_struct.beat_interval);
		} else clearInterval(this.beat);

		return this;
	}

	socket() {
		this.puppet.on('message', async function incoming(message) {
			try {
				const msg = JSON.parse(message);
				if (msg.op == 10 && msg.d) {
					mail_man.emit('socket_ping');
					mail_man.emit('socket_identify');
					mail_man.emit('socket_interval', msg.d.heartbeat_interval);
				}

				if (msg.op == 1) mail_man.emit('socket_ping');

				//mail_man.emit('socket_pulse', true);

				console.log(msg);
			} catch (err) {
				mail_man.emit('socket_error', error);
			}
		});

		this.puppet.on('error', (error) => mail_man.emit('socket_error', error));
		this.puppet.on('close', (code) => {
			mail_man.emit('socket_close', code);
			mail_man.emit('socket_pulse', false);
		});

		return this;
	}
}

module.exports = heart_construct;
