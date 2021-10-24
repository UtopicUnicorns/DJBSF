module.exports = {
	/*SEND MESSAGE MODULE*/
	send: async function (message, client) {
		const data = JSON.stringify({
			content: `${message.msg || message}`,
			components: [],
		}); //Convert content to json

		const options = {
			hostname: 'discord.com', //Just discord.com
			port: 443, //Secure port 443 aka https
			path: `/api/channels/${message.chan || client.message.d.channel_id}/messages`, //To messages endpoint with variable channel_id
			method: 'POST', //We send something
			headers: {
				'Content-Type': 'application/json', //We notify that we use JSON
				Authorization: `Bot ${token}`, //And we send out info that we are a bot alongside our bot token
			},
		};

		//We use the https module to send
		const req = https.request(options, (res) => {
			//We get some info in return
			res.on('data', async (d) => {
				try {
					const recData = JSON.parse(d); //we parse the received data to JSON
				} catch (error) {
					console.log(action.tell_time('full'), error);
				}
			});
		});

		//If an error occurs we handle it here
		req.on('error', (error) => {
			console.log(action.tell_time('full'), error);
		});

		req.write(data);

		req.end();
	},

	/*HANDLE INTERACTION RECEIVE*/
	receive_interaction: async function (interaction) {
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
			console.log(action.tell_time('full'), error);
		});

		req.write(json);

		req.end();
	},

	/*RETURN TIME*/
	tell_time: function (ver) {
		if (ver == 'full') {
			var date = new Date();

			var year = date.getFullYear();

			var month = ('0' + (date.getMonth() + 1)).substr(-2);

			var day = ('0' + date.getDate()).substr(-2);

			var hour = ('0' + date.getHours()).substr(-2);

			var minutes = ('0' + date.getMinutes()).substr(-2);

			var seconds = ('0' + date.getSeconds()).substr(-2);

			return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
		} else {
			return new Date(Date.now() * 1000).getTime();
		}
	},

	/*PRESENCE UPDATES*/
	presence_update: async function (info, client) {
		presence_update = {
			op: 3,
			d: {
				since: 91879201,
				activities: [
					{
						name: 'Testing',
						type: 0,
					},
				],
				status: 'dnd',
				afk: false,
			},
		};

		client.socket.send(JSON.stringify(presence_update));
	},
};
