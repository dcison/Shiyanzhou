const {Record} = require('../models/index');

let getRecord = async (ctx, next) => {
    let data = await Record.find({phone: ctx.request.query.number});
    if (data.length === 0) {
        ctx.body = JSON.stringify({code: 200, data});
    }else{
        let _data = {
            phone: ctx.request.query.number,
            username: data[0].username,
            globalCall: [],
            localCall: [],
            message: []
        };
        data.forEach( item => {
            _data.globalCall = _data.globalCall.concat(item.globalCall);
            _data.localCall = _data.localCall.concat(item.localCall);
            _data.message = _data.message.concat(item.message);
        });
        ctx.body = JSON.stringify({code: 200, data: _data});
    }
    await next();    
};

module.exports = getRecord;