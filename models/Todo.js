const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }

});

// creation par mongoose de la collection todos
module.exports = mongoose.model('todos', todoSchema);