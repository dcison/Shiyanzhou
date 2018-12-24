const koaStatic = require('koa-static');
const favicon = require('koa-favicon');
const path = require('path');

module.exports = function (app) {
    app.use(favicon(path.join(__dirname, '../static/logo.jpg')));
    app.use(koaStatic(path.join( __dirname,  '../static/')));
};
