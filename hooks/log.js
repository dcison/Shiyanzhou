const fs = require('fs');
const confirmPath = function(pathStr) { //如果log目录不存在则创建目录
    if(!fs.existsSync(pathStr)) {
        fs.mkdirSync(pathStr);
    }
};
module.exports = function(app, config) { //初始化日志目录
    (function() {
        const basePath = config.logConfig.baseLogPath || '';
        if (basePath) {
            confirmPath(basePath);
            let fileRoot = config.logConfig.appenders;
            for(let i = 0, len = fileRoot.length; i < len; i++) {
                if(fileRoot[i].path) {
                    confirmPath(basePath + fileRoot[i].path);
                }
            }
        }
    })();
};