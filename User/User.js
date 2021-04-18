const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    username: {
        type: String,
        requred: true
    },
    password: {
        type: String,
        requred: true
    },
});

module.exports = mongoose.model('Users', UserSchema);
