const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var authorSchema = new Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    }
}, {
    collection: 'authors'
})

module.exports = mongoose.model(('Author'), authorSchema)