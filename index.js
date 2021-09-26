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
			//console.log(dat);
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
			console.log(`${time_stamp.tell('full')}\nBot started!\n\n`);
		});
	} catch (error) {
		if (!error.toString().includes("./configs.json'")) {
			console.log(error);
			process.exit(0);
		}
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

		const rl_Q = [
			'Hello!\nIt seems that this is your first time using this bot.\n\nWhat is your Discord userID?\n',
			'What is your bot token?\n',
			'What is your bot applicationID?\n',
			'Please set a secret key for yourself for the websocket.\n',
			'Specify your discord gateway intents integer!\nhttps://discord-intents-calculator.vercel.app\nhttps://discord.com/developers/docs/topics/gateway#gateway-intents\n',
			'I am going to write the config file for you.',
			'Your config file has been made, you can restart me now.',
		];

		rl.question(rl_Q[0], function (user_id) {
			rl.question(rl_Q[1], function (bot_token) {
				rl.question(rl_Q[2], function (application_id) {
					rl.question(rl_Q[3], function (ws_key) {
						rl.question(rl_Q[4], function (intents_num) {
							console.log(rl_Q[5]);

							const collected_config = JSON.stringify({ user_id: `${user_id}`, bot_token: `${bot_token}`, application_id: `${application_id}`, ws_key: `${ws_key}`, intents_num: `${intents_num}` });

							fs.writeFileSync('./core_modules/configs.json', collected_config);

							rl.close();
						});
					});
				});
			});
		});

		rl.on('close', function () {
			console.log(rl_Q[6]);

			process.exit(0);
		});
	}
}

check_config(); //Check if config file exists

start(); //Start async
