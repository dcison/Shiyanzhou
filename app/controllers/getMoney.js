const {Money} = require('../models/index');

let getMoney = async (ctx, next) => {
    let money = await Money.findOne({});
    ctx.body = JSON.stringify({data: money, code: 200});
    await next();    
};

module.exports = getMoney;
