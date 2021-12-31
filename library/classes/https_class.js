class https_construct {
	send(data, path, method, host, port, headers) {
		let promise = new Promise((resolve, reject) => {
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

						if (parsed_data.channel_id && isNaN(parsed_data.channel_id)) reject({ error: parsed_data });
						if (parsed_data.code) reject({ error: parsed_data });
						
						resolve(parsed_data);
					} catch (err) {
						reject({ error: err });
					}
				});
			});

			req.on('error', (err) => {
				reject({ error: err });
			});

			if (data) req.write(data);
			req.end();
		});

		return promise;
	}
}

module.exports = https_construct;
