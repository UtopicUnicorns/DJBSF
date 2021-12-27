class https_construct {
	send(data, path, method, host, port, headers) {
		const options = {
			hostname: host,
			port: port,
			path: path,
			method: method,
			headers: headers,
		};

		const req = https.request(options, (res) => {
			let collect = [];

			res.on('data', async (data) => {
				collect.push(data);
			});

			res.on('end', async (data) => {
				try {
					const parsed_data = await JSON.parse(collect.join(''));

					if (parsed_data.channel_id && isNaN(parsed_data.channel_id)) mail_man.emit('Error_catch', parsed_data);
					if (parsed_data.code) mail_man.emit('Error_catch', parsed_data);
				} catch (err) {
					//mail_man.emit('Error_catch', err);
				}
			});
		});

		req.on('error', (error) => {
			mail_man.emit('Error_catch', error);
		});

		if (data) req.write(data);
		req.end();
	}
}

module.exports = https_construct;
