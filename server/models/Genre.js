const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
    Genre: {
        type: String
    }
}, {
    collection: 'genres'
})

module.exports = mongoose.model(('Genre'), schema)