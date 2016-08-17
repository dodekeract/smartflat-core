#! /usr/bin/env node
'use strict';

var _install = require('./install');

var _install2 = _interopRequireDefault(_install);

var _start = require('./start');

var _start2 = _interopRequireDefault(_start);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var argv = require('yargs').version(require('../package.json').version).usage('Usage: $0 <command>').command('install <package>', 'Install a smartflat package', function () {}, function (argv) {
	(0, _install2.default)(argv.package);
}).command('start', 'Start the server', function () {}, function (argv) {
	(0, _start2.default)(argv);
}).default('config', '/etc/smartflat/config.json').describe('config', 'Config-file path').help().alias('help', 'h').alias('config', 'c').alias('version', 'v').strict().argv;