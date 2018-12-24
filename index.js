const app = new (require('koa'))();
const path = require('path');
// ↑第三方框架 ↓自定义方法
const config = require('./config/index');
const pic = require('./util/logo');

const  hooks = [
    'middleware',
    'log',
    'mongodb',
    // 'redis',
    'static'
    // 'session' //要启用session才开启
];

app.initError = []; //用于捕捉初始化钩子时错出现误
app.hooksError = []; //用于捕捉钩子内部出现的错误

hooks.forEach(hook => {
    try{
        require(path.join(__dirname, '/hooks/', hook))(app, config); //挂载各钩子
    }catch (err) {
        app.initError.push(err);
    }
});


require('./routers/index')(app);


app.listen(config.port || 3000);
console.log(`${pic} \n Seeker is running on Port:${config.port || 3000}`);