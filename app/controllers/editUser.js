const {Login} = require('../models/index');

let getUser = async (ctx, next) => {
    let {phone, user} =  ctx.request.body;
    await Login.updateOne({'user': user}, {'phone': phone});
    let data = await Login.findOne({'user': user});
    ctx.body = JSON.stringify({code: 200, message: 'ok', 'data': data});
    await next();    
};

module.exports = getUser;
