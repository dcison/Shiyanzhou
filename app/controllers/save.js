const {Save} = require('../models/index');

let save = async (ctx, next) => {
    let data = JSON.stringify(ctx.request.body.data) || '';
    if (data.length == 0) {
        ctx.body = JSON.stringify({data: 'error', message: '字段信息为空'});
    }else{
        await Save.updateOne({}, {data: data}, {upsert: true});
        ctx.body = JSON.stringify({data: "ok"});
    }
    await next();    
};

module.exports = save;
