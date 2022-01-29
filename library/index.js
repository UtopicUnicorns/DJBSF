exports.lib = async function (config) {
	im = await require('./call_module'); //Import Functions and modules
	await im.summon_modules(config); //Initiate imports
};
