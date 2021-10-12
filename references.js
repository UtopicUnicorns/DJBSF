/*Sending a message*/
send_message.send({ msg: CONTENT }); //Required
send_message.send({ msg: CONTENT, chan: CHANNEL_ID }); //optionals

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

//Input types
/*CHAT_INPUT	1	Slash commands; a text-based command that shows up when a user types /
USER	2	A UI-based command that shows up when you right click or tap on a user
MESSAGE	3	A UI-based command that shows up when you right click or tap on a message*/

//command types
/*SUB_COMMAND	1
SUB_COMMAND_GROUP	2
STRING	3
INTEGER	4	Any integer between -2^53 and 2^53
BOOLEAN	5
USER	6
CHANNEL	7	Includes all channel types + categories
ROLE	8
MENTIONABLE	9	Includes users and roles
NUMBER	10	Any double between -2^53 and 2^53*/

/*
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
discord_intel.guilds.find(({ id }) => id === '628978428019736619'); //Find guild in client cache

register_slash.global(JSON);

register_slash.guild(JSON, GUILD_ID);

view_slash.global();

view_slash.guild(GUILD_ID);

delete_slash.global(COMMAND_ID);

delete_slash.guild(COMMAND_ID, GUILD_ID);
