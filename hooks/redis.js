const redis = require('redis');

module.exports = function (app, config) {
    const redisClient = redis.createClient(config.redisdb);
    redisClient.info(function(err, response) {
        if(err) {
            console.log('redis连接错误', err);
            app.hooksError.push(err);
        }else{
            global.redis = redis;
            global.redisClient = redisClient; //挂载全局
        }
    });
};