/*We want to start the bot in async
So we use a special function that does that for us.
If the config check passes it will start this.*/
async function start() {
	try {
		const im = await require('./core_modules/call_module'); //Import Functions and modules

		await im.summon_modules(); //Initiate imports

		heart_beat.rhythm(im); //start the process

		//When we get data we have to catch it, which happens here
		mail_man.on('view_slash', async (dat) => {
			if (!dat) return;

			if (dat.guild_id) console.log(`Command name: ${dat.name}\nCommand ID: ${dat.id}\nApplication ID: ${dat.application_id}\nCommand Type: ${dat.type}\nCommand Guild: ${dat.guild_id}\n\n`);

			if (!dat.guild_id) console.log(`Command name: ${dat.name}\nCommand ID: ${dat.id}\nApplication ID: ${dat.application_id}\nCommand Type: ${dat.type}\n\n`);
		});

		/*When a user triggers an user application command(rightclick a user) then we catch it here*/
		mail_man.on('interaction_create_user', async (client, dat) => {
			//console.log(client, dat);

			receive_slash.rec_s(dat.id, dat.token, im); //resolve command
		});

		/*When a user triggers a message application command(rightclick a message) it will be caught here*/
		mail_man.on('interaction_create_message', async (client, dat) => {
			//console.log(client, dat);

			receive_slash.rec_s(dat.id, dat.token, im); //resolve command
		});

		/*When a user triggers a slash command(beging with /) we catch it here*/
		mail_man.on('interaction_create_slash', async (client, dat) => {
			//console.log(client, dat);

			receive_slash.rec_s(dat.id, dat.token, im); //resolve command
		});

		/*When a ready event is emitted we will handle it here, you can decide to change .on() to .once()*/
		mail_man.once('ready', async (dat) => {
			view_slash.v_s(im);

			dat.guilds.forEach((g) => {
				view_slash_guild.v_s_g(g.id, im);
			});
		});
	} catch (error) {
		console.log('');
	}
}

/*This function tests if the config file can be found
It will not check if the info is valid.
If there is no config file it will prompt you some questions.
If all goes alright, then it will create the file for you.*/
async function check_config() {
	try {
		data_checker = await require('./core_modules/configs.json');
	} catch {
		const fs = require('fs');

		const readline = require('readline');

		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		rl.question('Hello!\nIt seems that this is your first time using this bot.\n\nWhat is your Discord userID? ', function (user_id) {
			rl.question('What is your bot token? ', function (bot_token) {
				rl.question('What is your bot applicationID? ', function (application_id) {
					rl.question('Please set a secret key for yourself for the websocket.', function (ws_key) {
						console.log(`I am going to write the config file for you.`);

						const collected_config = JSON.stringify({ user_id: `${user_id}`, bot_token: `${bot_token}`, application_id: `${application_id}`, ws_key: `${ws_key}` });

						fs.writeFileSync('./core_modules/configs.json', collected_config);

						rl.close();
					});
				});
			});
		});

		rl.on('close', function () {
			console.log('Your config file has been made, you can restart me now.');

			process.exit(0);
		});
	}
}

check_config(); //Check if config file exists

start(); //Start async
