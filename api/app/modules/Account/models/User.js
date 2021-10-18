const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}, { timestamps: { createdAt : 'created_at', updatedAt : 'updated_at'}})

// cria a model
module.exports = mongoose.model('user', UserSchema);
