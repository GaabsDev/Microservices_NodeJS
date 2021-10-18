var mongoose = require('mongoose')
exports.connect = function(callback) {
    mongoose.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
