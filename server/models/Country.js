const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
    Country: {
        type: String
    }
}, {
    collection: 'countries'
})

module.exports = mongoose.model(('Country'), schema)