module.exports = {
	/*send out*/
	out: async function (info) {
		const options = {
			hostname: 'discord.com', //Just discord.com
			port: 443, //Secure port 443 aka https
			path: info.path,
			method: info.method,
			headers: {
				'Content-Type': 'application/json', //We notify that we use JSON
				Authorization: `Bot ${token}`, //And we send out info that we are a bot alongside our bot token
			},
		};

		//We use the https module to send
		const req = https.request(options, (res) => {
			//We get some info in return
			res.on('data', async (d) => {
				try {
					JSON.parse(d); //we parse the received data to JSON

					return this;
				} catch (error) {
					console.log(error);
				}
			});
		});

		//If an error occurs we handle it here
		req.on('error', (error) => {
			console.log(error);
		});

		if (info.data) req.write(info.data);

		req.end();
	},

	/*CHANNEL INVITES GET MODULE*/
	channel_invites_get: async function (message, client) {
		info = {
			path: `/api/channels/${message.chan}/invites`,
			method: 'GET',
		};

		this.out(info);
	}, //https://discord.com/developers/docs/resources/channel#create-channel-invite

	/*CHANNEL INVITES CREATE MODULE*/ channel_invites_create: async function (message, client) {
		info = {
			path: `/api/channels/${message.chan}/invites`,
			method: 'POST',
		};

		this.out(info);
	},

	/*CHANNEL PERMISSIONS MODULE*/
	channel_permission: async function (message, client) {
		const data = JSON.stringify({
			allow: message.allow, //bitstring
			deny: message.deny, //bitstring
			type: message.type, //0 for a role or 1 for a member
		}); //Convert content to json

		info = {
			data: data,
			path: `/api/channels/${message.chan}/permissions/${message.id}`, //id is userid or role id
			method: 'PUT',
		};

		this.out(info);
	},

	/*Delete Slash global*/
	del_slash: async function (command_id) {
		info = {
			data: null,
			path: `/api/applications/${application_id}/commands/${command_id}`,
			method: 'DELETE',
		};

		this.out(info);
	},

	/*Delete slash Guild*/
	del_slash_guild: async function (command_id, guild_id) {
		info = {
			data: null,
			path: `/api/applications/${application_id}/guilds/${guild_id}/commands/${command_id}`,
			method: 'DELETE',
		};

		this.out(info);
	},

	/*Register slash*/
	reg_slash: async function (data) {
		info = {
			data: data,
			path: `/api/applications/${application_id}/commands`,
			method: 'POST',
		};

		this.out(info);
	},

	/*Register Slash Guild*/
	reg_slash_guild: async function (data, guild_id) {
		info = {
			data: data,
			path: `/api/applications/${application_id}/guilds/${guild_id}/commands`,
			method: 'POST',
		};

		this.out(info);
	},

	/*View slash*/
	view_slash: async function (id) {
		if (id) var path = `/api/applications/${application_id}/guilds/${id}/commands`;
		else var path = `/api/applications/${application_id}/commands`;

		const options = {
			hostname: 'discord.com', //Just discord.com
			port: 443, //Secure port 443 aka https
			path: path, //To messages endpoint with variable channel_id
			method: 'GET', //We delete something
			headers: {
				'Content-Type': 'application/json', //We notify that we use JSON
				Authorization: `Bot ${token}`, //And we send out info that we are a bot alongside our bot token
			},
		};

		//We use the https module to send
		const req = https.request(options, (res) => {
			//We get some info in return
			let fetch_data = [];

			res.on('data', (d) => {
				fetch_data.push(d);
			});

			res.on('end', async () => {
				try {
					let call_to = JSON.parse(fetch_data);

					mail_man.emit('view_slash', call_to); //Give mail_man the data to shoot out an event
				} catch (error) {
					console.log(error);
				}
			});
		});

		//If an error occurs we handle it here
		req.on('error', (error) => {
			console.log(error);
		});

		req.end();
	},
};
