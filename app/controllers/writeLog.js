const log4js = require('log4js');
const {logConfig} = require('../../config/index');
log4js.configure(logConfig);
const errorLogger = log4js.getLogger('errorLogger');
const resLogger = log4js.getLogger('resLogger');

const {formatErrorLog, formatResLog} = require('../../util/logFormat');


function logError(ctx, error, resTime) { //错误日志
    if (ctx && error) {
        errorLogger.error(formatErrorLog(ctx, error, resTime));
    }
}

function logResponse(ctx, resTime) {//响应日志
    if (ctx) {
        resLogger.info(formatResLog(ctx, resTime));
    }
}

let writeLog = async (ctx, next) => {
    const start = new Date();
    let ms; //响应间隔时间
    if (ctx.request.originalUrl === '/log') {
        await next(); //访问log页面时不记录
    }
    try {
        await next();
        ms = new Date() - start; 
        logResponse(ctx, ms); //响应日志
    } catch (error) {
        ms = new Date() - start; 
        logError(ctx, error, ms); //错误日志
    }
};

module.exports = writeLog;
