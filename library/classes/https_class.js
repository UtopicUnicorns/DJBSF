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
			res.on('data', async (data) => {});

			res.on('end', async (data) => {});
		});

		req.on('error', (error) => {
			console.log(error);
		});

		if (data) req.write(data);

		req.end();
	}
}

module.exports = https_construct;
