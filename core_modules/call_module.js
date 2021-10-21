exports.summon_modules = async function () {
	https = await require('https'); //Sending over https

	ws = await require('./flatline_modules/ws'); //Web socket stuff

	configuration_data = await require('./configs.json'); //Load config file

	token = await configuration_data.bot_token; //Bot token

	application_id = configuration_data.application_id; //Application ID

	intents_num = configuration_data.intents_num; //intents number

	heart_beat = await require('./flatline_modules/heart_beat'); //Module to initiate and continue a link

	send_message = await require('./message_modules/send_message'); //message send module

	time_stamp = await require('./extra_modules/time_stamp'); //Just a small thing for the time

	delete_slash = await require('./slash_modules/delete_slash'); //Slash event delete global slash

	register_slash = await require('./slash_modules/register_slash'); //Slash event register global slash

	view_slash = await require('./slash_modules/view_slash'); //Slash event call global slash commands

	receive_slash = await require('./slash_modules/receive_slash'); //Slash event call slash commands

	post_man = await require('events'); //Event handler, nodejs native

	class Emitter extends post_man {}

	mail_man = new Emitter(); //Shoot out information beams
};
