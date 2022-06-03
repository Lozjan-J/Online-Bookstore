const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    Name: {
        type: String
    },
    Author: {
        type: String
    },
    Price: {
        type: String
    },
    Image: {
        type: String
    }
}, {
    collection: 'books'
})

module.exports = mongoose.model(('Book'), bookSchema)