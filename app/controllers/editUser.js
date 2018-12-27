const {Login} = require('../models/index');

let getUser = async (ctx, next) => {
    let {phone, user} =  ctx.request.body;
    let res = await Login.findOne({'phone': phone});
    if (!res) {
        await Login.updateOne({'user': user}, {'phone': phone});
        let data = await Login.findOne({'user': user});
        ctx.body = JSON.stringify({code: 200, message: 'ok', 'data': data});
    }else{
        ctx.body = JSON.stringify({code: 400, message: '该电话已经被人使用'});
    }
    
    await next();    
};

module.exports = getUser;
