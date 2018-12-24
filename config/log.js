const path = require('path');
// ↓ 是日志配置
const baseLogPath = path.resolve(__dirname, '../log'); //根目录

const errorRootPath = '/error';
const errorFileName = 'errorLog';
const errorPath = path.join(baseLogPath, errorRootPath, errorFileName);


const responseRootPath = '/response';
const responseFileName = 'responseLog';
const responsePath = path.join(baseLogPath, responseRootPath, responseFileName);


module.exports = {
    "appenders": {
        "errorLog": {//错误日志
            "type": "dateFile",                   //日志类型
            "filename": errorPath,             //日志输出位置
            "alwaysIncludePattern": true,          //是否总是有后缀名
            "pattern": "-yyyy-MM-dd-hh.log",       //后缀，每小时创建一个新的日志文件
            "path": errorRootPath, //生成文件的目录
            "maxLogSize": 104800
        },
        "res": { //响应日志
            "category": "resLogger",
            "type": "dateFile",
            "filename": responsePath,
            "alwaysIncludePattern": true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": responseRootPath,
            "maxLogSize": 104800
        }
    },
    "categories": {
        "default": {
            "appenders": ["errorLog"],
            "level": "ERROR"
        },
        "resLogger": {
            "appenders": ["res"],
            "level": "ALL"
        }
    },
    "baseLogPath": baseLogPath
};