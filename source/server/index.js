// import external

import 'babel-polyfill';

// config

const config = {
	services: ['smartflat-webhook-api'],
	devices: [{
		type: 'light',
		actions: [{
			type: 'set',
			attribute: 'power'
		}, {
			type: 'set',
			attribute: 'color'
		}],
		properties: [{
			manufacturer: 'Phillips',
			name: 'Hue'
		}],
		triggers: [],
		values: []
	}]
};

// startup

console.log('SmartFlat Core starting');

// import all services

const services = new Map();
const dependencies = new Set();
config.services.forEach(name => {
	console.log(`Loading Service "${name}"`);

	const service = {
		module: require(name)
	};

	// adding dependencies

	const info = service.module.info();
	info.dependencies.forEach(dependency => {
		dependencies.add(dependency);
	});
	service.dependencies = info.dependencies;

	// save

	services.set(name, service);

	// log

	console.log(info);
});

// loading dependencies

const ref = {};

for (let name of dependencies) {
	console.log(`Loading Dependency "${name}"`);
	switch (name) {
		case 'http':
			ref['http'] = require('koa')();
			ref['http'].listen(8080);
		break;
	}
}

// initialize services

for (let [name, service] of services) {
	console.log(`Initializing "${name}"`);

	// filter module
	const allowed = ['dependencies'];
	service.module.initialize(
		Object.keys(service)
			.filter(key => allowed.indexOf(key) !== -1)
			.reduce((object, key) => {
				object[key] = service[key];
				return object;
			}, {})
	).then(response => {
		ref['http'].use(response.dependencies.http.routes(), response.dependencies.http.allowedMethods());
	});
}

// import all devices

const devices = {};
config.devices.forEach(item => {

});
