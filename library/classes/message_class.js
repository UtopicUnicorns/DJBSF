class message_construct {
	send(message) {
		let constructed_message = {
			content: message.content,
			components: [message.components],
			embeds: [message.embeds],
		};

		if (!message.embeds) delete constructed_message['embeds'];
		if (!message.components) delete constructed_message['components'];
		if (!message.content) delete constructed_message['content'];

		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	edit(message) {
		let constructed_message = {
			content: message.content,
			components: message.components,
			embeds: [message.embeds],
		};

		if (!message.embeds) delete constructed_message['embeds'];
		if (!message.components) delete constructed_message['components'];
		if (!message.content) delete constructed_message['content'];

		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}`, 'PATCH', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	delete(message) {
		return fly.send('', `/api/channels/${message.channel}/messages/${message.id}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	bulk_delete(message) {
		let constructed_message = {
			messages: message.array,
		};

		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/bulk-delete`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	interaction(reply, message) {
		let constructed_message = {
			type: reply.type,
			data: {
				content: reply.content,
				components: reply.components,
				embeds: [reply.embeds],
				flags: 64,
			},
		};

		if (!reply.type) delete constructed_message['type'];
		if (!reply.embeds) delete constructed_message.data['embeds'];
		if (!reply.components) delete constructed_message.data['components'];
		if (!reply.content) delete constructed_message.data['content'];

		return fly.send(JSON.stringify(constructed_message), `/api/interactions/${message.message.d.id}/${message.message.d.token}/callback`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}
}

module.exports = message_construct;
