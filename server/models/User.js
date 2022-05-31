const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    ['First Name']: {
        type: String
    },
    ['Last Name']: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model(('User'), userSchema)