const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var authorSchema = new Schema({
    Name: {
        type: String
    },
}, {
    collection: 'authors'
})

module.exports = mongoose.model(('Author'), authorSchema)