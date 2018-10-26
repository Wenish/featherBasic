'use strict'
const app = require('./app');
const port = process.env.PORT || app.get('port');
const server = app.listen(port);

server.on('listening', () =>
	console.log(`feathers & express hybrid application started on ${app.get('host')}:${port}`)
);
