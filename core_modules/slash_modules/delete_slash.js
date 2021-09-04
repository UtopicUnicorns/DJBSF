module.exports = {
	d_s: async function (command_id, im) {
		const options = {
			hostname: 'discord.com', //Just discord.com
			port: 443, //Secure port 443 aka https
			path: `/api/applications/${application_id}/commands/${command_id}`, //To messages endpoint with variable channel_id
			method: 'DELETE', //We delete something
			headers: {
				'Content-Type': 'application/json', //We notify that we use JSON
				Authorization: `Bot ${token}`, //And we send out info that we are a bot alongside our bot token
			},
		};

		//We use the https module to send
		const req = https.request(options, (res) => {
			//We get some info in return
			res.on('data', (d) => {
				const recData = JSON.parse(d); //we parse the received data to JSON
				console.log(recData);
				//
			});
		});

		//If an error occurs we handle it here
		req.on('error', (error) => {
			console.log('Error occured!');
		});

		req.end();
	},
};
