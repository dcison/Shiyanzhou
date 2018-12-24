const {test1, test2} = require('../app/controllers/demo1');
const {demo2} = require('../app/controllers/demo2');
const getJson = require('../app/controllers/getJson');
const save = require('../app/controllers/save');
const writeLog= require('../app/controllers/writeLog');
const readLog = require('../app/controllers/readLog');
const responseTime = require('../app/controllers/responseTime');

const router = new (require('koa-router'))();
module.exports = function (app) {
    app.use(responseTime);
    app.use(writeLog);

    router.get('/', test1);
  
    router.get('/getJson', getJson);
    router.post('/save', save);

    router.post('/test', test2);
  
    router.get('/err', demo2);
    router.get('/log', readLog);
    app.use(router.routes());
};