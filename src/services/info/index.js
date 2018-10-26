'use strict'
const infoService = require('./info.service');

module.exports = function setupService(app) {
    app.use('/info', infoService)
}
