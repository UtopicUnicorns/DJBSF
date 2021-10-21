exports.summon_modules = async function () {
	https = await require('https'); //Sending over https

	ws = await require('./flatline_modules/ws'); //Web socket stuff

	configuration_data = await require('./configs.json'); //Load config file

	token = await configuration_data.bot_token; //Bot token

	application_id = configuration_data.application_id; //Application ID

	intents_num = configuration_data.intents_num; //intents number

	heart_beat = await require('./flatline_modules/heart_beat'); //Module to initiate and continue a link

	action = await require('./client_actions/client_do'); //message send module

	delete_slash = await require('./interaction_modules/delete_slash'); //Slash event delete global slash

	register_slash = await require('./interaction_modules/register_slash'); //Slash event register global slash

	view_slash = await require('./interaction_modules/view_slash'); //Slash event call global slash commands

	post_man = await require('events'); //Event handler, nodejs native

	class Emitter extends post_man {}

	mail_man = new Emitter(); //Shoot out information beams
};
