class message_construct {
	send(message) {
		let constructed_message = {
			content: message.content,
			components: [message.components],
			embeds: [message.embeds],
			tts: message.tts,
			message_reference: message.reference,
			sticker_ids: message.sticker,
			files: message.files,
			flags: message.flags,
			attachments: message.attachments,
			payload_json: message.payload,
			allowed_mentions: {
				parse: [],
			},
		};

		if (!message.embeds) delete constructed_message['embeds'];
		if (!message.components) delete constructed_message['components'];
		if (!message.content) delete constructed_message['content'];
		if (!message.tts) delete constructed_message['tts'];
		if (!message.reference) delete constructed_message['message_reference'];
		if (!message.flags) delete constructed_message['flags'];
		if (!message.sticker) delete constructed_message['sticker_ids'];
		if (!message.files) delete constructed_message['files'];
		if (!message.attachments) delete constructed_message['attachments'];
		if (!message.payload) delete constructed_message['payload_json'];

		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages`, 'POST', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	edit(message) {
		let constructed_message = {
			content: message.content,
			components: [message.components],
			embeds: [message.embeds],
			tts: message.tts,
			message_reference: message.reference,
			sticker_ids: message.sticker,
			files: message.files,
			flags: message.flags,
			attachments: message.attachments,
			payload_json: message.payload,
			allowed_mentions: {
				parse: [],
			},
		};

		if (!message.embeds) delete constructed_message['embeds'];
		if (!message.components) delete constructed_message['components'];
		if (!message.content) delete constructed_message['content'];
		if (!message.tts) delete constructed_message['tts'];
		if (!message.reference) delete constructed_message['message_reference'];
		if (!message.flags) delete constructed_message['flags'];
		if (!message.sticker) delete constructed_message['sticker_ids'];
		if (!message.files) delete constructed_message['files'];
		if (!message.attachments) delete constructed_message['attachments'];
		if (!message.payload) delete constructed_message['payload_json'];

		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}`, 'PATCH', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	react(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/reactions/${message.emoji}/@me`, 'PUT', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	react_delete_self(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/reactions/${message.emoji}/@me`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	react_delete(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/reactions/${message.emoji}/${message.user}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	react_delete_all(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/reactions`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	react_delete_emoji(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/reactions/${message.emoji}`, 'DELETE', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
	}

	reactions(message) {
		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages/${message.id}/reactions/${message.emoji}`, 'GET', 'discord.com', 443, { 'Content-Type': 'application/json', Authorization: `Bot ${token}` });
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
