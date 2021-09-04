/*We want to start the bot in async
So we use a special function that does that for us.
If the config check passes it will start this.*/
async function start() {
	try {
		const im = await require('./core_modules/call_module'); //Import Functions and modules

		await im.summon_modules(); //Initiate imports

		heart_beat.rhythm(im); //start the process

		//send_message.send(MESSAGE, CHANNEL_ID, im); //Example message send (MESSAGE, CHANNEL_ID, im)

		//When we get data we have to catch it, which happens here
		mail_man.on('view_slash', async (dat) => {
			console.log(dat);
		});

		/*When a user triggers an user application command(rightclick a user) then we catch it here*/
		mail_man.on('interaction_create_user', async (dat) => {
			console.log(dat);
		});

		/*When a user triggers a message application command(rightclick a message) it will be caught here*/
		mail_man.on('interaction_create_message', async (dat) => {
			console.log(dat);
		});

		/*When a user triggers a slash command(beging with /) we catch it here*/
		mail_man.on('interaction_create_slash', async (dat) => {
			console.log(dat);
		});

		/*When a ready event is emitted we will handle it here, you can decide to change .on() to .once()*/
		mail_man.on('ready', async (dat) => {
			//Slash command
			let json1 = JSON.stringify({
				type: 1,
				name: 'permissions',
				description: 'Get or edit permissions for a user or a role',
				default_permission: true,
				options: [],
			});

			let json2 = JSON.stringify({ name: 'High Five', type: 2 }); //user command
			let json3 = JSON.stringify({ name: 'High Five', type: 3 }); //message command
			//register_slash(json3);
			//register_slash_guild.r_s_g(json2, '660988248788697100'); //prefer guild over global due hour wait
			//view_slash.v_s();
			//delete_slash('883061058225463307');
			//delete_slash('883058222565580890');
			//delete_slash('883057862065127494');
			//delete_slash('883052308089413653');
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
					console.log(`I am going to write the config file for you.`);

					const collected_config = JSON.stringify({ user_id: `${user_id}`, bot_token: `${bot_token}`, application_id: `${application_id}` });

					fs.writeFileSync('./core_modules/configs.json', collected_config);

					rl.close();
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
