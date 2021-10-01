module.exports = {
	rhythm: async function (im) {
		let beat_interval; //API given interval

		let flatline; //Check if connection is dead

		let beating_heart = 0; //Counter

		let client_user; //Client information on ready event

		let seq_num; //API sequence number

		let ses_num; //API session number

		let raw_cache = []; //raw API responses cache

		const socket = new ws.WebSocket('wss://gateway.discord.gg/?v=9&encoding=json'); //Connect to discord gateway

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

		/*We animate the bot by sending pulses trough the gateway*/
		async function pulse(shock, data) {
			/*First pulse, we shoot a hello trough the gateway*/
			if (shock === 1) {
				let flatline = false; //We save that we are not dead anymore

				shock_1 = {
					op: 1, //OP 1 code is for the heartbeat
					d: null, //At this stage we do not have a sequence number yet
				};

				socket.send(JSON.stringify(shock_1)); //Send the first shock for info

				beat_interval = data.d.heartbeat_interval; //We have our heartbeat interval so we store it

				heartbeat(); //We initiate the regular heartbeat

				pulse(2, data); //We move on to phase 2
			}

			/*Second pulse, we indentify ourselves to the gateway*/
			if (shock === 2) {
				shock_2 = {
					op: 2, //OP 2 code wants us to send relevant data
					d: {
						token: `${token}`, //Bot token
						intents: intents_num, //Basically what we want to receive, this is no guarantee to get it if the intents are not met
						properties: {
							$os: 'linux', //Identifying what OS we use
							$browser: 'null', //For some reason they need to know our browser?
							$device: 'PC', //And they also want to know how we use Discord
						},
						presence: {
							activities: [
								{
									name: 'Testing!', //Bot status message
									type: 0,
								},
							],
							status: 'dnd', //Status presence: DND, AFK, Online, Offline
						},
					},
				};

				socket.send(JSON.stringify(shock_2)); //send a message to tell the gateway who we are and what we want
			}

			/*Third pulse, we gather relevant data to use*/
			if (shock === 3) {
				client_user = data; //We define the client_user after receiving the data

				seq_num = data.s; //With our fresh sequence number we save it for use

				ses_num = data.d.session_id; //session ID is used for resuming, we will store it for now
			}
		}

		/*Basically the heart, we try to keep the connection alive by sending variable pulses*/
		function heartbeat() {
			let beats_by_dre = Math.floor(beat_interval * Math.random()); //Randomize the heartbeat interval received by the API

			//Every x ms a beat is send
			setInterval(function () {
				beating_heart++; //We count up the amount of beats

				ba_donk_a_donk = {
					op: 1, //OP code has to be 1
					d: seq_num, //sequence number given by the last event of the socket
				};

				socket.send(JSON.stringify(ba_donk_a_donk)); //send out the beat
			}, beats_by_dre);
		}

		/*Messages received trough socket end in here*/
		socket.on('message', function incoming(message) {
			const rec_data = JSON.parse(message); //Convert message to JSON

			raw_cache.push(rec_data);

			if (rec_data.t === 'INTERACTION_CREATE') {
				if (rec_data.d.type === 1) mail_man.emit('type_1_interaction', client_user.d, rec_data.d); //Give mail_man the data to shoot out an event

				if (rec_data.d.type === 2) mail_man.emit('type_2_interaction', client_user.d, rec_data.d); //Give mail_man the data to shoot out an event

				if (rec_data.d.type === 3) mail_man.emit('type_3_interaction', client_user.d, rec_data.d); //Give mail_man the data to shoot out an event
			}

			if (rec_data.t === 'READY') mail_man.emit('ready', rec_data.d); //Give mail_man the data to shoot out an event

			if (rec_data.d) mail_man.emit('raw', rec_data); //Give mail_man the rawe data

			if (rec_data.op === 10) pulse(1, rec_data); //op 10 code needs the first shock

			if (rec_data.t === 'READY') pulse(3, rec_data); //READY needs the third shock
		});

		/*If an error occurs we handle it here*/
		socket.on('error', (error) => {
			console.log(error); //Display error
		});

		/*When the connection gets broken we handle it here*/
		socket.on('close', function close() {
			console.log('Closed');

			socket.terminate(); //Properly shutdown socket

			process.exit(); //End process

			return console.log(client_user, seq_num, ses_num); //Shoot out relevant data

			//resume example
			resume = {
				op: 6, //OP code 6 RESUME
				d: {
					token: `${token}`, //Bot token
					session_id: ses_num, //stored session number
					seq: seq_num, //last known sequence number
				},
			};

			socket.send(JSON.stringify(resume)); //Send message to the gateway to resume a session
		});
	},
};
