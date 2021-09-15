const https = require('https'); //Sending over https

const ws = require('./ws'); //Web socket stuff
const EventEmitter = require('events');
const working_emitter = new EventEmitter();

const win = nw.Window.open('index.html', { position: 'center', max_width: 700, max_height: 700 });

const win_grab = nw.Window.get();

function time_get(ver) {
	if (ver == 'full') {
		var date = new Date();

		var year = date.getFullYear();

		var month = ('0' + (date.getMonth() + 1)).substr(-2);

		var day = ('0' + date.getDate()).substr(-2);

		var hour = ('0' + date.getHours()).substr(-2);

		var minutes = ('0' + date.getMinutes()).substr(-2);

		var seconds = ('0' + date.getSeconds()).substr(-2);

		return `${year}/${month}/${day} ${hour}:${minutes}:${seconds}`;
	} else {
		return new Date(Date.now() * 1000).getTime();
	}
}

win_grab.on('loaded', function () {
	const socket = new ws.WebSocket('ws://localhost:1337'); //Connect to discord gateway
	// First listener
	working_emitter.on('pass_phrase', function (dat) {
		socket.send(`${parseInt(dat)}`);
	});

	win_grab.window.event_drop = working_emitter;

	socket.on('error', function (err) {
		win_grab.window.login_button.style.background = `rgba(176, 4, 4, 0.5)`;
		win_grab.window.login_button.innerHTML = `No connection!`;
	});

	socket.on('message', function incoming(message) {
		if (message.includes('I do not recognize your key!')) {
			win_grab.window.login_button.style.background = `rgba(176, 4, 4, 0.5)`;
			win_grab.window.login_button.innerHTML = `${message}`;
		}

		if (message.includes('Authentication complete.')) {
			win_grab.window.login_button.style.background = `rgba(4, 176, 7, 0.5)`;
			win_grab.window.login_button.innerHTML = `${message}`;
			win_grab.window.replace_me.innerHTML = '';
			win_grab.window.boxy.style.height = '95%';
		}

		async function parse_json(val) {
			try {
				return await JSON.parse(val);
			} catch (err) {
				return val;
			}
		}

		async function send_stuff() {
			let message_out = await parse_json(message);

			if (message_out.t && message_out.t === 'MESSAGE_CREATE') {
				let info = message_out.d;

				let content_info = `
					<details>
						<summary class="summary_title">MESSAGE: ${time_get('full')}</summary>
						<div class ="details_text">
							User: ${info.author.username}#${info.author.discriminator}<br>
							User ID: ${info.author.id}<br>
							<hr>
							${info.content.replace(/\<br\>/g, ';br;').replace(/\n/g, '<br>')}
						</div>
					</details>

					<br>${win_grab.window.replace_me.innerHTML}`;

				win_grab.window.replace_me.innerHTML = `${content_info}`;
			}
		}
		send_stuff();
	});
});
