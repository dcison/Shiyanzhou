// 这里各文件配置
const logConfig = require('./log');
const sessionConfig = require('./session');

module.exports = {
    port: 5001, //项目运行端口
    mongodb: 'mongodb://127.0.0.1:27017/shiyanzhou',
    // redisdb: {
    //     host: '',
    //     port: 
    // },
    compress: { threshold: 2048 },
    sessionConfig,
    logConfig
};