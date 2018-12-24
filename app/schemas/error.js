const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    // name:错误名称 time 时间 message：错误信息 code 错误代码
    ErrorSchema = new Schema({
        name: {
            type: String
        },
        time: {
            type: Number
        },
        message: {
            type: String
        },
        code: {
            type: String
        }
    });

module.exports = ErrorSchema;