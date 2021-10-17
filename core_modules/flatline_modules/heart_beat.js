module.exports = {
	rhythm: async function () {
		/*Collection of info*/
		let discord_intel = {
			client: null, //Client cache

			guilds: [], //Client guilds

			users: [], //Client users

			beat_interval: null, //API given interval

			flatline: null, //Check if connection is dead

			beating_heart: null, //How many heartbeats are send

			seq_num: null, //API sequence number

			ses_num: null, //API session number
		};

		function startWebsocket() {
			var socket = new ws.WebSocket('wss://gateway.discord.gg/?v=9&encoding=json'); //Connect to discord gateway

			/*We animate the bot by sending pulses trough the gateway*/
			async function pulse(shock, data) {
				switch (shock) {
					case 1: //First pulse, we shoot a hello trough the gateway
						discord_intel.flatline = false; //We save that we are not dead anymore

						shock_1 = {
							op: 1, //OP 1 code is for the heartbeat

							d: null, //At this stage we do not have a sequence number yet
						};

						socket.send(JSON.stringify(shock_1)); //Send the first shock for info

						discord_intel.beat_interval = data.d.heartbeat_interval; //We have our heartbeat interval so we store it

						heartbeat(); //We initiate the regular heartbeat

						pulse(2, data); //We move on to phase 2

						break;

					case 2: //Second pulse, we indentify ourselves to the gateway
						shock_2 = {
							op: 2, //OP 2 code wants us to send relevant data

							d: {
								token: token, //Bot token

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

						break;

					case 3: //Third pulse, we gather relevant data to use
						client_user = data; //We define the client_user after receiving the data

						discord_intel.seq_num = data.s; //With our fresh sequence number we save it for use

						discord_intel.ses_num = data.d.session_id; //session ID is used for resuming, we will store it for now

						break;
				}
			}

			/*Basically the heart, we try to keep the connection alive by sending variable pulses*/
			function heartbeat() {
				let regular_beat = Math.floor(discord_intel.beat_interval * Math.random()); //Randomize the heartbeat interval received by the API

				setInterval(function () {
					//console.log(discord_intel.guilds);

					discord_intel.beating_heart++; //We count up the amount of beats

					send_beat = {
						op: 1, //OP code has to be 1

						d: discord_intel.seq_num, //sequence number given by the last event of the socket
					};

					socket.send(JSON.stringify(send_beat)); //send out the beat
				}, regular_beat); //Randomized interval
			}

			/*Messages received trough socket end in here*/
			socket.on('message', function incoming(message) {
				//discord_intel.guilds.find(({ id }) => id === '628978428019736619'); //Find guild in client cache

				const rec_data = JSON.parse(message); //Convert message to JSON

				if (rec_data.s && rec_data.s !== null) discord_intel.seq_num = rec_data.s;

				mail_man.emit('raw', discord_intel, rec_data); //Send out a raw event

				if (rec_data.t) var event_name = rec_data.t;
				else var event_name = 'NONE'; //Short hand raw event name

				if (rec_data.d && rec_data.d.type) var event_type = rec_data.d.type;
				else var event_type = 'NONE'; //Short hand interaction type

				if (rec_data.op) var event_code = rec_data.op;
				else var event_code = 'NONE'; //Short hand OP code

				switch (event_name) {
					case 'INTERACTION_CREATE': //When event name is INTERACTION_CREATE
						switch (event_type) {
							case 1: //If type is 1
								mail_man.emit('type_1_interaction', discord_intel, rec_data.d); //Send data to emitter

								break;

							case 2: //If type is 2
								mail_man.emit('type_2_interaction', discord_intel, rec_data.d); //Send data to emitter

								break;

							case 3: //If type is 3
								mail_man.emit('type_3_interaction', discord_intel, rec_data.d); //Send data to emitter

								break;
						}

						break;

					case 'READY': //When event name is READY
						discord_intel.client = rec_data.d; //Pushing client

						pulse(3, rec_data); //READY needs the third shock

						mail_man.emit('ready', discord_intel, rec_data.d); //Give mail_man the data to shoot out an event

						break;

					case 'GUILD_CREATE': //When event name is GUILD_CREATE
						discord_intel.guilds.push({ id: rec_data.d.id, guild: rec_data.d }); //Push new guild into discord_intel.guilds

						//parse_guilds = JSON.parse(discord_intel.guilds.slice(1, 1));
						//console.log(parse_guilds['660988248788697100']);

						mail_man.emit('guild_create', discord_intel, rec_data.d); //Give mail_man the data to shoot out an event

						break;
				}

				if (event_code === 10) {
					if (discord_intel.ses_num && discord_intel.seq_num) {
						resume = {
							op: 6, //OP code 6 RESUME

							d: {
								token: `${token}`, //Bot token

								session_id: discord_intel.ses_num, //stored session number

								seq: discord_intel.seq_num, //last known sequence number
							},
						};

						socket.send(JSON.stringify(resume)); //Send message to the gateway to resume a session

						console.log(time_stamp.tell('full'), 'I tried to resume');

						mail_man.emit('resume', discord_intel); //Give mail_man the data to shoot out an event
					} else {
						pulse(1, rec_data); //op 10 code needs the first shock
					}
				}
			});

			/*If an error occurs we handle it here*/
			socket.on('error', (error) => {
				console.log(time_stamp.tell('full'), error); //Display error
			});

			/*When the connection gets broken we handle it here*/
			socket.on('close', async function close() {
				socket = null;

				setTimeout(startWebsocket, 5000);
			});
		}

		startWebsocket();
	},
};
