const {Login} = require('../models/index');

let deleteUser = async (ctx, next) => {
    let {user} =  ctx.request.body;
    await Login.deleteOne({'user': user});
    ctx.body = JSON.stringify({code: 200, message: 'ok'});
    await next();    
};

module.exports = deleteUser;
