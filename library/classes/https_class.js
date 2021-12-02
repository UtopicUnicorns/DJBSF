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
			res.on('data', async (data) => {});

			res.on('end', async (data) => {});
		});

		req.on('error', (error) => {
			console.log(error);
		});

		if (message) req.write(message);

		req.end();
	}
}

module.exports = https_construct;
