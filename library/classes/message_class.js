class message_construct {
	send(message) {
		let constructed_message = {
			content: message.content,
			components: message.components,
			embeds: [message.embeds],
		};

		if (!message.embeds) delete constructed_message['embeds'];
		if (!message.components) delete constructed_message['components'];
		if (!message.content) delete constructed_message['content'];

		return fly.send(JSON.stringify(constructed_message), `/api/channels/${message.channel}/messages`, 'POST');
	}

	edit() {
		return;
	}

	delete(message) {
		return fly.send('', `/api/channels/${message.channel}/messages/${message.id}`, 'DELETE');
	}
}

module.exports = message_construct;
