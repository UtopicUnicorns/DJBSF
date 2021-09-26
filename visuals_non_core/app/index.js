const https = require('https'); //Sending over https

const ws = require('./ws'); //Web socket stuff

const EventEmitter = require('events'); //Loading events from native node

const working_emitter = new EventEmitter(); //Our emitter

const win = nw.Window.open('index.html', { position: 'center', max_width: 700, max_height: 700, transparent: true }); //Open client window

const win_grab = nw.Window.get(); //We grab the object to play with it

/*Time grab function*/
function time_get(ver) {
	if (ver == 'full') {
		var date = new Date();

		var year = date.getFullYear();

		var month = ('0' + (date.getMonth() + 1)).substr(-2);

		var day = ('0' + date.getDate()).substr(-2);

		var hour = ('0' + date.getHours()).substr(-2);

		var minutes = ('0' + date.getMinutes()).substr(-2);

		var seconds = ('0' + date.getSeconds()).substr(-2);

		return `${year}/${month}/${day} ${hour}:${minutes}:${seconds}`; //Return full time
	} else {
		return new Date(Date.now() * 1000).getTime(); //Return unix time
	}
}

/*When client is fully loaded we start our thing*/
win_grab.on('loaded', function () {
	const socket = new ws.WebSocket('ws://localhost:1337'); //Connect to discord gateway

	/*When client sends password attempt*/
	working_emitter.on('pass_phrase', function (dat) {
		socket.send(`${parseInt(dat)}`); //We send password to server
	});

	win_grab.window.event_drop = working_emitter; //send out the emitter to client

	/*If server cannot be reached*/
	socket.on('error', function (err) {
		win_grab.window.login_button.style.background = `rgba(176, 4, 4, 0.5)`;
		win_grab.window.login_button.innerHTML = `No connection!`;
	});

	/*Every message send by the server gets directed here*/
	socket.on('message', function incoming(message) {
		/*On wrong key*/
		if (message.includes('I do not recognize your key!')) {
			win_grab.window.login_button.style.background = `rgba(176, 4, 4, 0.5)`;
			win_grab.window.login_button.innerHTML = `${message}`;
		}

		/*When key is right*/
		if (message.includes('Authentication complete.')) {
			win_grab.window.login_button.style.background = `rgba(4, 176, 7, 0.5)`;
			win_grab.window.login_button.innerHTML = `${message}`;
			win_grab.window.replace_me.innerHTML = '';
			win_grab.window.boxy.style.height = '95%';
		}

		/*We check if incoming is a json*/
		async function parse_json(val) {
			try {
				return await JSON.parse(val); //If it was a json we return the json
			} catch (err) {
				return val; //Not a json, so we return this garbage
			}
		}

		/*Preparing change in innerHTML*/
		async function send_stuff() {
			let message_out = await parse_json(message); //Convert to json

			/*We filter out some garbage*/
			if (message_out.t && message_out.d) {
				let info = message_out.d; //Easier to use shorthand

				/*Message creation event*/
				if (message_out.t === 'MESSAGE_CREATE') {
					/*Contents to be send*/
					let content_info = `
					<details id="${message_out.t}">
						<summary class="summary_title">${message_out.t}: ${time_get('full')} AUTHOR: ${info.author.username}</summary>
						<div class ="details_text">
							User: ${info.author.username}#${info.author.discriminator}<br>
							User ID: ${info.author.id}<br>
							<hr>
							${info.content.replace(/\<br\>/g, ';br;').replace(/\n/g, '<br>')}
						</div>
					</details>

					<br>${win_grab.window.replace_me.innerHTML}`;

					win_grab.window.replace_me.innerHTML = `${content_info}`; //Finalize and send out new push
				} else {
					/*Contents to be send*/
					let content_info = `
					<details id="${message_out.t}">
						<summary class="summary_title">${message_out.t}: ${time_get('full')}</summary>
						<div class ="details_text">
							<hr>
						</div>
					</details>

					<br>${win_grab.window.replace_me.innerHTML}`;

					win_grab.window.replace_me.innerHTML = `${content_info}`; //Finalize and send out new push
				}
			}
		}

		send_stuff(); //Using a seperate async function
	});
});
