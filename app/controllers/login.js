const {Login} = require('../models/index');

let login = async (ctx, next) => {
    // let data = JSON.stringify(ctx.request.body);
    let {user, pass, type} = ctx.request.body;
    let _user = '';
    if (type == 'r') {
        _user = await Login.findOne({'user': user}) || '';
        if (!_user) {
            _user = await Login.create({
                premission: 'normal',
                phone: '12345678901',
                user,
                pass
            });
            ctx.body = JSON.stringify({code: 200, message: '注册成功', data: _user});
        }else {
            ctx.body = JSON.stringify({code: 201, message: '注册失败，已存在该账号'});          
        }
    }else if(type == 'l') {
        _user = await Login.findOne({'user': user}) || '';
        if (!_user || (_user !== '' && pass !== _user.pass)) {
            ctx.body = JSON.stringify({code: 201, message: '登陆失败，账号或密码不正确'});
        }else if(_user !== '' && pass === _user.pass) {
            ctx.body = JSON.stringify({code: 200, message: '登录成功', data: _user});            
        }
    }
    await next();    
};

module.exports = login;
