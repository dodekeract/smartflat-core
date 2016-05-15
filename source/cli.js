#! /usr/bin/env node

let argv = require('yargs')
	.usage('Usage: $0')
	.default('config', '/etc/smartflat/config.json')
	.describe('config', 'Config-file path')
	.help()
	.alias('help', 'h')
	.alias('config', 'c')
	.argv;

let config;
let apis = {};
let required = {
	http: false
};

try {
	config = require(argv.config);
} catch (error) {
	console.error(`could not load config file '${argv.config}'`);
	process.exit(1);
}

console.log('---loading apis---');

config.apis.forEach((api) => {
	try {
		console.log(`loading smartflat-${api}-api`);
		apis[api] = require(`smartflat-${api}-api`);
	} catch (error) {
		console.log(`could not load smartflat-${api}-api`);
	}
});

console.log('---loading providers---');

config.providers.forEach((provider) => {
	try {

	} catch (error) {
		console.log(`could not load smartflat-${provider}`);
	}
});
