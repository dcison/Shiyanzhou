const session = require('koa-session');

module.exports = function (app, config) {
    app.keys = ['some secret hurr'];
    app.use(session(config.sessionConfig, app));
};