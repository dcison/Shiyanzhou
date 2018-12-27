const {Record} = require('../models/index');

let upload = async (ctx, next) => {
    let data = ctx.request.body;
    await Record.insertMany(data);
    ctx.body = JSON.stringify({code: 200});
    await next();    
};

module.exports = upload;