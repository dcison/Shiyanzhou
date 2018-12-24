const mongoose = require('mongoose');
//引用schemas下index即可，导出model
const {
    Error,
    Save
} = require('../schemas/index');

module.exports = {
    _Error: mongoose.model('Error', Error),
    Save: mongoose.model('save', Save)
};