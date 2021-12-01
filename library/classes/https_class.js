class https_construct {
	send(message, path, method) {
		const options = {
			hostname: 'discord.com',
			port: 443,
			path: path,
			method: method,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bot ${token}`,
			},
		};

		const req = https.request(options, (res) => {
			//let collect_data;

			res.on('data', async (data) => {
				//collect_data += data;
			});

			res.on('end', async (data) => {
				//console.log(collect_data);
			});
		});

		req.on('error', (error) => {
			console.log(error);
		});

		req.write(message);

		req.end();
	}
}

module.exports = https_construct;
