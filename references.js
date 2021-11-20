/*Sending a message*/
action.send({ msg: CONTENT }, client); //Required

action.send({ msg: CONTENT, chan: CHANNEL_ID }, client); //optionals

action.user_cache(USER_ID, client); //grab user from cache

action.guild_cache(GUILD_ID, client); //Grab guild from cache

action.delete({ chan: ID, id: MSGID }, client); //Delete selected message

action.receive_interaction({ content: '', type: 6 }, client); //resolve command

action.receive_interaction({ content: 'Message', type: 4 }, client); //resolve command

action.send(
	{
		msg: 'Hello!',
		components: {
			type: 1,
			components: [
				{
					type: 2,
					label: 'Click me!',
					style: 1,
					custom_id: 'click_one',
				},
				{
					type: 2,
					label: 'Click me!',
					style: 2,
					custom_id: 'click_one1',
				},
				{
					type: 2,
					label: 'Click me!',
					style: 3,
					custom_id: 'click_one13',
				},
				{
					type: 2,
					label: 'Click me!',
					style: 4,
					disabled: true,
					custom_id: 'click_one12',
				},
				{
					type: 2,
					label: 'Free cookies',
					style: 5,
					url: 'https://artemis.rest',
				},
			],
		},
	},
	client
);

action.send(
	{
		msg: 'Hello!',
		chan: '695182849476657223',
		components: {
			type: 1,
			components: [
				{
					type: 2,
					label: 'Click me!',
					style: 1,
					custom_id: 'click_one',
				},
			],
		},
	},
	client
);

action.reg_slash(JSON);

action.reg_slash_guild(JSON, GUILD_ID);

action.view_slash();

action.view_slash(GUILD_ID);

action.del_slash(COMMAND_ID);

action.del_slash_guild(COMMAND_ID, GUILD_ID);

action.presence_update(
	{
		since: action.tell_time(),
		activities: [
			{
				name: 'Testing',
				type: 0,
			},
		],
		status: 'dnd',
		afk: false,
	},
	client
);

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

let json2 = JSON.stringify({ name: 'High Five', type: 2 }); //user command

let json3 = JSON.stringify({ name: 'High Five', type: 3 }); //message command

/*
Primary	1	blurple	custom_id
Secondary	2	grey	custom_id
Success	3	green	custom_id
Danger	4	red	custom_id
Link	5	grey, navigates to a URL	url


CHAT_INPUT	1	Slash commands; a text-based command that shows up when a user types /
USER	2	A UI-based command that shows up when you right click or tap on a user
MESSAGE	3	A UI-based command that shows up when you right click or tap on a message

SUB_COMMAND	1
SUB_COMMAND_GROUP	2
STRING	3
INTEGER	4	Any integer between -2^53 and 2^53
BOOLEAN	5
USER	6
CHANNEL	7	Includes all channel types + categories
ROLE	8
MENTIONABLE	9	Includes users and roles
NUMBER	10	Any double between -2^53 and 2^53

0	Game	Playing {name}	"Playing Rocket League"
1	Streaming	Streaming {details}	"Streaming Rocket League"
2	Listening	Listening to {name}	"Listening to Spotify"
3	Watching	Watching {name}	"Watching YouTube Together"
4	Custom	{emoji} {name}	":smiley: I am cool"
5	Competing	Competing in {name}	"Competing in Arena World Champions"

online	Online
dnd	Do Not Disturb
idle	AFK
invisible	Invisible and shown as offline
offline	Offline

0	Dispatch	Receive	An event was dispatched.
1	Heartbeat	Send/Receive	Fired periodically by the client to keep the connection alive.
2	Identify	Send	Starts a new session during the initial handshake.
3	Presence Update	Send	Update the client's presence.
4	Voice State Update	Send	Used to join/leave or move between voice channels.
6	Resume	Send	Resume a previous session that was disconnected.
7	Reconnect	Receive	You should attempt to reconnect and resume immediately.
8	Request Guild Members	Send	Request information about offline guild members in a large guild.
9	Invalid Session	Receive	The session has been invalidated. You should reconnect and identify/resume accordingly.
10	Hello	Receive	Sent immediately after connecting, contains the heartbeat_interval to use.
11	Heartbeat ACK	Receive	Sent in response to receiving a heartbeat to acknowledge that it has been received.
*/
