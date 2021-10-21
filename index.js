/*We want to start the bot in async
So we use a special function that does that for us.*/
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
				console.log(action.tell_time('full'), error);
			}
		});

		/*On any interaction this gets triggered*/
		mail_man.on('INTERACTION_CREATE', async (client, dat) => {
			try {
				//console.log(dat);
				action.send('test', dat);
				action.receive_interaction({ content: 'Just checking!', id: dat.d.id, token: dat.d.token, type: 4 }); //resolve command
			} catch (error) {
				console.log(action.tell_time('full'), error);
			}
		});

		/*When a ready event is emitted we will handle it here, you can decide to change .on() to .once()*/
		mail_man.once('READY', async (client, dat, socket) => {
			try {
				action.presence_update({}, socket);
				console.log(action.tell_time('full'), `\nBot started!\n\n`);
			} catch (error) {
				console.log(action.tell_time('full'), error);
			}
		});
	} catch (error) {
		console.log(error);
	}
}

start(); //Start async
