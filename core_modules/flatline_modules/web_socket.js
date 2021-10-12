/*EXPERIMENTAL*/
module.exports = {
	homing: async function (raw_cache, im) {
		/*We create our own socket to shoot out info to another client*/
		const our_socket = new ws.WebSocket.Server({
			port: 1337,
		});

		/*When our socket receives a connection we deal with it*/
		our_socket.on('connection', (data) => {
			data.send('I request a key from you.'); //Initial message

			/*When we receive a message trough our socket we handle it.*/
			data.on('message', function incoming(message) {
				line_out_key = `${parseInt(message)}`; //Parse incoming message

				if (line_out_key !== `${ws_key}`) {
					data.send('I do not recognize your key!'); //If key is not correct
				} else {
					data.send('Authentication complete.'); //If key is correct

					/*Push cache*/
					for (let i of raw_cache) {
						data.send(JSON.stringify(i));
					}

					/*We shoot out raw events to out connected client*/
					mail_man.on('raw', async (dat) => {
						data.send(JSON.stringify(dat)); //Send data to the client
					});
				}
			});
		});
	},
};
