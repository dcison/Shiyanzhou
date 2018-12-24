module.exports = {
    sessionConfig: { //redis的session配置
        key: 'koa:sess:',
        maxAge: 86400000,
        store: {
            get: function (key) {
                global.redisClient.get(key, global.redis.print);
            },
            set: function (key, sess, maxAge, { rolling: changed }) {
                global.redisClient.set(key, JSON.stringify({ maxAge: maxAge, rolling: changed, sess: sess }), global.redis.print);
            },
            destroy: function (key) {
                global.redisClient.destroy(key);
            }
        },
        autoCommit: true,
        overwrite: true,
        httpOnly: true,
        signed: true,
        rolling: false,
        renew: false,
    }
};