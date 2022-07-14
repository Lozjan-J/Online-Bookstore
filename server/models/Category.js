const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var categorySchema = new Schema({
    Name: {
        type: String
    },
}, {
    collection: 'categories'
})

module.exports = mongoose.model(('Category'), categorySchema)