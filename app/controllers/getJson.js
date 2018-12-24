const {Save} = require('../models/index');

let getJson = async (ctx, next) => {
    ctx.body = await Save.findOne({});
    await next();    
};

module.exports = getJson;
