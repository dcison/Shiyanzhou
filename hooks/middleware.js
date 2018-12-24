const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const cors = require('koa2-cors');

module.exports = function (app, config) {
    app.use(compress(config.compress)); //Gzip
    app.use(bodyParser()); //解析Body
    app.use(cors({
        origin: '*',
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }));
};