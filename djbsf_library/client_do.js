module.exports = {
	/*RETURN TIME*/
	tell_time: function (ver) {
		if (ver == 'full') {
			var date = new Date();

			var year = date.getFullYear();

			var month = ('0' + (date.getMonth() + 1)).substr(-2);

			var day = ('0' + date.getDate()).substr(-2);

			var hour = ('0' + date.getHours()).substr(-2);

			var minutes = ('0' + date.getMinutes()).substr(-2);

			var seconds = ('0' + date.getSeconds()).substr(-2);

			return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
		} else {
			return new Date(Date.now() * 1000).getTime();
		}
	},

	/*Return user data*/
	user_cache: function (id, client) {
		const user_id = id;

		const user_got = client.client.users.find(({ id }) => id === user_id);

		return user_got;
	},

	/*Return guild data*/
	guild_cache: function (id, client) {
		const guild_id = id;

		const guild_got = client.client.guilds.find(({ id }) => id === guild_id);

		return guild_got;
	},

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
					const recData = JSON.parse(d); //we parse the received data to JSON

					return recData;
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

	/*SEND MESSAGE MODULE*/
	send: async function (message, client) {
		const data = JSON.stringify({
			content: `${message.msg || message}`,
			components: [message.components] || [],
		}); //Convert content to json

		info = {
			data: data,
			path: `/api/channels/${message.chan || client.message.d.channel_id}/messages`,
			method: 'POST',
		};

		this.out(info);
	},

	/*DELETE MESSAGE MODULE*/
	delete: async function (message, client) {
		info = {
			path: `/api/channels/${message.chan}/messages/${message.id}`,
			method: 'DELETE',
		};

		this.out(info);
	},

	/*BULK DELETE MESSAGE MODULE*/
	delete_bulk: async function (message, client) {
		const data = JSON.stringify({
			messages: message.msg_array, //an array of message ids to delete (2-100)
		}); //Convert content to json

		info = {
			data: data,
			path: `/api/channels/${message.chan}/messages/bulk-delete`,
			method: 'POST',
		};

		this.out(info);
	},

	

	/*CHANNEL INVITES GET MODULE*/
	channel_invites_get: async function (message, client) {
		info = {
			path: `/api/channels/${message.chan}/invites`,
			method: 'GET',
		};

		this.out(info);
	},

	/*CHANNEL INVITES CREATE MODULE*/ //https://discord.com/developers/docs/resources/channel#create-channel-invite
	channel_invites_create: async function (message, client) {
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

	/*HANDLE INTERACTION RECEIVE*/
	receive_interaction: async function (interaction, client) {
		//Response for interaction
		const data = JSON.stringify({
			type: interaction.type,
			data: {
				tts: false,
				content: interaction.content || 'Slash',
				embeds: [],
				flags: 64,
				allowed_mentions: { parse: [] },
			},
		});

		info = {
			data: data,
			path: `/api/interactions/${client.message.d.id}/${client.message.d.token}/callback`,
			method: 'POST',
		};

		this.out(info);
	},

	/*PRESENCE UPDATES*/
	presence_update: async function (info, client) {
		presence_update = {
			op: 3,
			d: info,
		};

		client.socket.send(JSON.stringify(presence_update));
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
