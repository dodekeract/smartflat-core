'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = install;

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(packageName) {
	console.log('installing ' + packageName);
	_shelljs2.default.exec('npm install smartflat-' + packageName);
}