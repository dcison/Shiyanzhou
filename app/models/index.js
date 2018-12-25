const mongoose = require('mongoose');
//引用schemas下index即可，导出model
const {
    Error,
    Login,
    Money
} = require('../schemas/index');

module.exports = {
    _Error: mongoose.model('Error', Error),
    Login: mongoose.model('Login', Login),
    Money: mongoose.model('Money', Money),
};