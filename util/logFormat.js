const formatReqLog = function (req, resTime) { //格式化请求日志
    let method = req.method.toUpperCase();
    let logText = `
        请求方式: ${method}
        请求路径: ${req.originalUrl}
        请求客户端的ip: ${req.ip}
        请求参数: ${ method === 'GET' ? JSON.stringify(req.query) : JSON.stringify(req.body)}
        响应时间: ${resTime}
    `;
    return logText;
};

const formatErrorLog = function (ctx, err, resTime) { //格式化错误日志
    let logText = `
    ↓↓↓↓↓↓↓↓↓↓↓↓  以下是错误日志  ↓↓↓↓↓↓↓↓↓↓↓↓
        请求日志: ${formatReqLog(ctx.request, resTime)}
        错误名称：${err.name}
        错误信息: ${err.message}
        错误详情: ${err.stack}
    ↑↑↑↑↑↑↑↑↑↑↑↑   错误日志结束   ↑↑↑↑↑↑↑↑↑↑↑↑
  `;
    return logText;
}; 

const formatResLog = function (ctx, resTime) { //格式化响应日志
    let logText = `
    ↓↓↓↓↓↓↓↓↓↓↓↓  以下是响应日志  ↓↓↓↓↓↓↓↓↓↓↓↓
        请求日志: ${formatReqLog(ctx.request, resTime)}
        响应状态：${ctx.status}
        响应内容: ${JSON.stringify(ctx.response)}
    ↑↑↑↑↑↑↑↑↑↑↑↑   响应日志结束   ↑↑↑↑↑↑↑↑↑↑↑↑
  `;
    return logText;
}; 
module.exports = {
    formatErrorLog,
    formatResLog
};