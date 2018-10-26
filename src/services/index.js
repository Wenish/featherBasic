'use strict'
const info = require('./info');
const ping = require('./ping');

module.exports = function setupServices(app) {
    app.configure(info)
    app.configure(ping)
}
