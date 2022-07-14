const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
    Lang: {
        type: String
    }
}, {
    collection: 'languages'
})

module.exports = mongoose.model(('Language'), schema)