const {Login} = require('../models/index');

let getUser = async (ctx, next) => {
    ctx.body = await Login.find({});
    await next();    
};

module.exports = getUser;
