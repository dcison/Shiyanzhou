const mongoose = require('mongoose');

module.exports = function (app, config) {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongodb, {
        useNewUrlParser: true
    });
    let db = mongoose.connection;
    db.on('error', (err) => { 
        console.log('mongodb连接错误', err);
        app.hooksError.push(err);
    });
}; 