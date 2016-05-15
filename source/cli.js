#! /usr/bin/env node

import install from './install';
import start from './start';

let argv = require('yargs')
	.version(require('../package.json').version)
	.usage('Usage: $0 <command>')
	.command('install <package>', 'Install a smartflat package', () => {}, (argv) => {
		install(argv.package);
	})
	.command('start', 'Start the server', () => {}, (argv) => {
		start(argv);
	})
	.default('config', '/etc/smartflat/config.json')
	.describe('config', 'Config-file path')
	.help()
	.alias('help', 'h')
	.alias('config', 'c')
	.alias('version', 'v')
	.strict()
	.argv;
