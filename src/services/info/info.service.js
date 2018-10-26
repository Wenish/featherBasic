'use strict'
module.exports = {
    setup(app) {
        this.app = app;
    },
    async find() {
        return {
            services: Object.keys(this.app.services)
        }
    }
}
