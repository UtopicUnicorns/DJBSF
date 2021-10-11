/*We want to start the bot in async
So we use a special function that does that for us.
If the config check passes it will start this.*/
async function start() {
	try {
		const im = await require('./core_modules/call_module'); //Import Functions and modules

		await im.summon_modules(); //Initiate imports

		heart_beat.rhythm(im); //start the process

		/*When requested, commands get output trough here*/
		mail_man.on('view_slash', async (dat) => {
			try {
				if (!dat) return;

				console.log(dat);
			} catch (error) {
				console.log(time_stamp.tell('full'), error.stack);
			}
		});

		/*When a type 1 interaction is triggered*/
		mail_man.on('type_1_interaction', async (client, dat) => {
			try {
				if (!dat) return;

				receive_slash.do({ id: dat.id, token: dat.token, type: 4 }); //resolve command
			} catch (error) {
				console.log(time_stamp.tell('full'), error.stack);
			}
		});

		/*When a type 2 interaction is triggered*/
		mail_man.on('type_2_interaction', async (client, dat) => {
			try {
				if (!dat) return;

				if (dat.data && dat.data.name == 'commands') {
					switch (dat.data.options[0].name) {
						case 'view':
							if (dat.data.options[0].value == 'global_commands') view_slash.global();

							if (dat.data.options[0].value == 'guild_commands') view_slash.guild(dat.guild_id);

							send_message.send({ msg: 'test' }, dat);
							break;

						case 'add':
							break;

						case 'delete':
							delete_slash.guild(dat.data.options[0].value, dat.guild_id);
							break;
					}
				}

				receive_slash.do({ content: 'Just checking!', id: dat.id, token: dat.token, type: 4 }); //resolve command
			} catch (error) {
				console.log(time_stamp.tell('full'), error.stack);
			}
		});

		/*When a type 3 interaction is triggered*/
		mail_man.on('type_3_interaction', async (client, dat) => {
			if (!dat) return;

			receive_slash.do({ id: dat.id, token: dat.token, type: 1 }); //resolve command
		});

		/*When a ready event is emitted we will handle it here, you can decide to change .on() to .once()*/
		mail_man.once('ready', async (dat) => {
			let commands = await JSON.stringify({
				name: 'commands',
				description: 'View, add or delete commands',
				options: [
					{
						name: 'view',
						description: 'View commands',
						type: 3,
						choices: [
							{
								name: 'Global commands',
								value: 'global_commands',
							},
							{
								name: 'Guild commands',
								value: 'guild_commands',
							},
						],
					},
					{
						name: 'enable',
						description: 'Enable commands',
						type: 3,
						choices: [
							{
								name: 'Administrative commands',
								value: 'administrative_commands',
							},
							{
								name: 'Music commands',
								value: 'music_commands',
							},
							{
								name: 'Support commands',
								value: 'support_commands',
							},
							{
								name: 'General commands',
								value: 'general_commands',
							},
						],
					},
					{
						name: 'disable',
						description: 'Disable commands',
						type: 3,
						choices: [
							{
								name: 'Administrative commands',
								value: 'administrative_commands',
							},
							{
								name: 'Music commands',
								value: 'music_commands',
							},
							{
								name: 'Support commands',
								value: 'support_commands',
							},
							{
								name: 'General commands',
								value: 'general_commands',
							},
						],
					},
				],
			}); //slash command

			//await register_slash.global(commands);

			console.log(time_stamp.tell('full'), `\nBot started!\n\n`);
		});
	} catch (error) {
		if (!error.toString().includes("./configs.json'")) {
			console.log(error.stack);
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
	} catch (error) {
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
