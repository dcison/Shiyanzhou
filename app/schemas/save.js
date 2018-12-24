const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    // name:错误名称 time 时间 message：错误信息 code 错误代码
    SaveSchema = new Schema({
        data: {
            type: String
        }
    });

module.exports = SaveSchema;