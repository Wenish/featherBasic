'use strict'
module.exports = {
    find(params) {
        console.log(params)
        return Promise.resolve('pong');
    }
}
