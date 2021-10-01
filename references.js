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

let report_avatar = JSON.stringify({ name: 'Report avatar', type: 2 }); //user command

let report_nickname = JSON.stringify({ name: 'Report nickname', type: 2 }); //user command

let report_username = JSON.stringify({ name: 'Report username', type: 2 }); //user command

let report_user = JSON.stringify({ name: 'Report this user', type: 2 }); //user command

let request_embeds = JSON.stringify({ name: 'Request embed permission', type: 2 }); //user command

let report_message = JSON.stringify({ name: 'Report this message', type: 3 }); //message command

let delete_message = JSON.stringify({ name: 'Delete this message', type: 3 }); //message command

register_slash(json3);

register_slash_guild.r_s_g(json2, '660988248788697100'); //prefer guild over global due hour wait

view_slash.v_s();

delete_slash('883061058225463307'); //slash ID

delete_slash('883058222565580890');

delete_slash('883057862065127494');

delete_slash('883052308089413653');

send_message.send(MESSAGE, CHANNEL_ID, im); //Example message send (MESSAGE, CHANNEL_ID, im)

view_slash.v_s(im); //View global slash commands

view_slash_guild.v_s_g(GUILD_ID, im); //View slash commands for specified server
