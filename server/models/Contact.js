const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    msg: {
        type: String
    }
}, {
    collection: 'contacts'
})

module.exports = mongoose.model(('Contact'), userSchema)