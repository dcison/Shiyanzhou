const deleteUser = require('../app/controllers/deleteUser');
const getUser = require('../app/controllers/getUser');
const getMoney = require('../app/controllers/getMoney');
const setMoney = require('../app/controllers/setMoney');
const upload = require('../app/controllers/upload');
const login = require('../app/controllers/login');
const writeLog = require('../app/controllers/writeLog');
const readLog = require('../app/controllers/readLog');
const responseTime = require('../app/controllers/responseTime');
const editUser = require('../app/controllers/editUser');
const getRecord = require('../app/controllers/readRecord');
const router = new (require('koa-router'))();


module.exports = function (app) {
    app.use(responseTime);
    app.use(writeLog);

    router.get('/getMoney', getMoney);
    router.post('/setMoney', setMoney);
    router.get('/getUser', getUser);
    router.post('/login', login);
    router.put('/editUser', editUser);
    router.delete('/deleteUser', deleteUser);
    router.post('/upload', upload);
    router.get('/record', getRecord);


    router.get('/log', readLog);
    app.use(router.routes());
};