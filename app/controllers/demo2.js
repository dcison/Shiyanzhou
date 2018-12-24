const {_Error} = require('../models/index');
let demo2 = async (ctx, next) => {
    if (ctx.path === '/favicon.ico') {
        return;
    }
    //   // let n = ctx.session.views || 0;
    //   // ctx.session.views = ++n;
    //   error = await _Error.create({
    //     name: 'Error',
    //     time: 1542942482000,
    //     message: 'test',
    //     code: '404'
    // })
    ctx.body = await _Error.find({ name: 'Error' });
    await next();
};
module.exports = {
    demo2: demo2
};