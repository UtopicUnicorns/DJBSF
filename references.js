//Slash command
let json1 = JSON.stringify({
	type: 1,
	name: 'permissions',
	description: 'Get or edit permissions for a user or a role',
	default_permission: true,
	options: [],
}); //slash command

let json2 = JSON.stringify({ name: 'High Five', type: 2 }); //user command

let json3 = JSON.stringify({ name: 'High Five', type: 3 }); //message command

let get_commands = JSON.stringify({
	type: 1,
	name: 'commands',
	description: 'Show all commands in console',
	default_permission: true,
	options: [],
}); //slash command

//type: 7, // 7 is type CHANNEL
//type: 6, // 6 is type USER
//type: 1, // 1 is type SUB_COMMAND
//type: 2, // 2 is type SUB_COMMAND_GROUP

let report_avatar = JSON.stringify({ name: 'Report avatar', type: 2 }); //user command

let report_nickname = JSON.stringify({ name: 'Report nickname', type: 2 }); //user command

let report_username = JSON.stringify({ name: 'Report username', type: 2 }); //user command

let report_user = JSON.stringify({ name: 'Report this user', type: 2 }); //user command

let request_embeds = JSON.stringify({ name: 'Request embed permission', type: 2 }); //user command

let report_message = JSON.stringify({ name: 'Report this message', type: 3 }); //message command

let delete_message = JSON.stringify({ name: 'Delete this message', type: 3 }); //message command

register_slash.global(JSON);

register_slash.guild(JSON, GUILD_ID);

view_slash.global();

view_slash.guild(GUILD_ID);

delete_slash.global(COMMAND_ID);

delete_slash.guild(COMMAND_ID, GUILD_ID);

send_message.send(MESSAGE, CHANNEL_ID, im); //Example message send (MESSAGE, CHANNEL_ID, im)

view_slash.v_s(im); //View global slash commands

view_slash_guild.v_s_g(GUILD_ID, im); //View slash commands for specified server
