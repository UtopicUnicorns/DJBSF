class channel_construct {
	invites(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/invites`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	invite(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/invites`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	permissions(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	create(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	delete(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	edit(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/permissions/${message.target_id}`, 'PUT', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });

		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/permissions/${message.target_id}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	get(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	messages(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	message(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	crosspost(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/crosspost`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
}

module.exports = channel_construct;
