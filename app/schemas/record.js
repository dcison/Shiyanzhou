const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    // name:错误名称 time 时间 message：错误信息 code 错误代码
    RecordSchema = new Schema({
        phone: {
            type: Number
        },
        username: {
            type: String
        },
        localCall: {
            type: Array
        },
        globalCall: {
            type: Array
        },
        message: {
            type: Array
        }
    });

module.exports = RecordSchema;