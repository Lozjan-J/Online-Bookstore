const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
    Role: {
        type: String
    }
}, {
    collection: 'roles'
})

module.exports = mongoose.model(('Role'), schema)