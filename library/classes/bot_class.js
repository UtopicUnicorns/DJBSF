class bot_construct {
	presence(info, client) {
		this.presence_update = {
			op: 3,
			d: info,
		};

		client.socket.send(JSON.stringify(this.presence_update));
	}
}

module.exports = bot_construct;
