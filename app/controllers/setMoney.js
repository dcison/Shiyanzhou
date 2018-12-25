const {Money} = require('../models/index');

let setMoney = async (ctx, next) => {
    let {global, local, message} = ctx.request.body;
    await Money.updateOne({}, {global: global, local: local, message: message}, {upsert: true});
    ctx.body = JSON.stringify({code: 200});
    await next();    
};

module.exports = setMoney;
