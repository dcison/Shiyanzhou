// 集中所有schemas 导出给model

const Error = require('./error');
const Login = require('./login');
const Record = require('./record');
const Money = require('./money');

module.exports = {
    Error: Error,
    Login,
    Money,
    Record
};