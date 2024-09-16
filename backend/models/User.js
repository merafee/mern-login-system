const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name:String,
    password:String,
    mail:String
});

module.exports = mongoose.model("users",usersSchema);

