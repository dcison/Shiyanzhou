const fs = require('fs');
const path = require('path');
const moment = require('moment');
let readLog = async (ctx, next) => {
    let date = moment().format('YYYY-MM-DD-HH');
    let data = fs.readFileSync(path.resolve(__dirname, `../../log/response/responseLog-${date}.log`), 'utf8');
    await next();
    data.replace(/\n/g, '<br />');
    ctx.body = data;
};
module.exports = readLog;
