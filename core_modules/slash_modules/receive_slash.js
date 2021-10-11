module.exports = {
	do: async function (interaction) {
		//Response for interaction
		var json = JSON.stringify({
			type: interaction.type,
			data: {
				tts: false,
				content: interaction.content || 'Slash',
				embeds: [],
				allowed_mentions: { parse: [] },
			},
		});

		const options = {
			hostname: 'discord.com', //Just discord.com
			port: 443, //Secure port 443 aka https
			path: `/api/interactions/${interaction.id}/${interaction.token}/callback`, //To messages endpoint with variable channel_id
			method: 'POST', //We send something
			headers: {
				'Content-Type': 'application/json', //We notify that we use JSON
				Authorization: `Bot ${token}`, //And we send out info that we are a bot alongside our bot token
			},
		};

		//We use the https module to send
		const req = https.request(options, (res) => {
			//We get some info in return
			res.on('data', (d) => {
				//const recData = JSON.parse(d); //we parse the received data to JSON
			});
		});

		//If an error occurs we handle it here
		req.on('error', (error) => {
			console.log(time_stamp.tell('full'), error.stack);
		});

		req.write(json);

		req.end();
	},
};
