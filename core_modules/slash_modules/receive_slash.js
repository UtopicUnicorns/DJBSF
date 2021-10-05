module.exports = {
	do: async function (interaction_id, interaction_token, response_id, im) {
		console.log(response_id);
		//Response for interaction
		if (response_id === 6) {
			var json = JSON.stringify({
				type: 6,
			});
		}

		if (response_id === 4) {
			var json = JSON.stringify({
				type: 4,
				data: {
					tts: false,
					content: 'Congrats on sending your command!',
					embeds: [],
					allowed_mentions: { parse: [] },
				},
			});
		}

		const options = {
			hostname: 'discord.com', //Just discord.com
			port: 443, //Secure port 443 aka https
			path: `/api/interactions/${interaction_id}/${interaction_token}/callback`, //To messages endpoint with variable channel_id
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
			console.log('Error occured!');
		});

		req.write(json);

		req.end();
	},
};
