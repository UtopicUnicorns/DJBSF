class app_construct {
	delete(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	create(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	view(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
}

module.exports = app_construct;
