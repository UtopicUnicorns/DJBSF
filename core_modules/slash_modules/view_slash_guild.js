module.exports = {
	v_s_g: async function (guild_id, im) {
		const options = {
			hostname: 'discord.com', //Just discord.com
			port: 443, //Secure port 443 aka https
			path: `/api/applications/${application_id}/guilds/${guild_id}/commands`, //To messages endpoint with variable channel_id
			method: 'GET', //We delete something
			headers: {
				'Content-Type': 'application/json', //We notify that we use JSON
				Authorization: `Bot ${token}`, //And we send out info that we are a bot alongside our bot token
			},
		};

		//We use the https module to send
		const req = https.request(options, (res) => {
			//We get some info in return
			let fetch_data = [];

			res.on('data', (d) => {
				fetch_data.push(d);
			});

			res.on('end', () => {
				let call_to = JSON.parse(fetch_data);

				mail_man.emit('view_slash', call_to[0]); //Give mail_man the data to shoot out an event
			});
		});

		//If an error occurs we handle it here
		req.on('error', (error) => {
			console.log('Error occured!');
		});

		req.end();
	},
};
