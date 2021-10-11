module.exports = {
	send: async function (message, message_data) {
		const data = JSON.stringify({
			content: `${message.msg}`,
			components: [
				{
					type: 1,
					components: [
						{
							type: 2,
							label: 'Click me!',
							style: 1,
							custom_id: 'click_one',
						},
						{
							type: 2,
							label: 'Click me!2',
							style: 1,
							custom_id: 'click_one2',
						},
						{
							type: 2,
							label: 'Click me!3',
							style: 1,
							custom_id: 'click_one3',
						},
					],
				},
			],
		}); //Convert content to json

		const options = {
			hostname: 'discord.com', //Just discord.com
			port: 443, //Secure port 443 aka https
			path: `/api/channels/${message.chan || message_data.channel_id}/messages`, //To messages endpoint with variable channel_id
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
					console.log(time_stamp.tell('full'), error.stack);
				}
			});
		});

		//If an error occurs we handle it here
		req.on('error', (error) => {
			console.log(time_stamp.tell('full'), error.stack);
		});

		req.write(data);

		req.end();
	},
};
