exports.summon_modules = async function (config) {
	https = await require('https'); //Sending over https

	ws = await require('./web_socket'); //Web socket stuff

	configuration_data = await require(config); //Load config file

	token = await configuration_data.bot_token; //Bot token
	application_id = configuration_data.application_id; //Application ID
	intents_num = configuration_data.intents_num; //intents number

	heart_beat = await require('./heart_beat'); //Module to initiate and continue a link

	action = await require('./client_do'); //Client Actions

	https_construct = await require('./classes/https_class');
	fly = new https_construct();

	embed = await require('./classes/embed_class');

	component = await require('./classes/component_class');

	cache_construct = await require('./classes/cache_class');
	cache = new cache_construct();

	rel_construct = await require('./classes/release_class');
	rel = new rel_construct();
	rel.rel();

	message_construct = await require('./classes/message_class');
	message = new message_construct();

	post_man = await require('events'); //Event handler, nodejs native
	class Emitter extends post_man {}
	mail_man = new Emitter(); //Shoot out information beams
};
