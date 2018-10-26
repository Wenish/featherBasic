'use strict'
const pingService = require('./ping.service');

module.exports = function setupService(app) {
    app.use('/ping', pingService)
}
